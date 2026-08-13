#!/usr/bin/env node
/**
 * 将 public/_pages 下全部 .html.gz 同步到 R2（桶名默认 onlinefreetools-pages），
 * 并写入 `_meta/pages-build.json`（含 PAGES_CACHE_VERSION + contentHash + fileHashes）。
 *
 * 用法：
 *   npm run upload:r2                 # 远程：优先 S3 API；无凭据则回退 wrangler
 *   npm run upload:r2:changed         # 仅上传哈希变化的文件（仍重写 meta）
 *   npm run upload:r2:local           # 本地模拟桶（getPlatformProxy）
 *   npm run upload:r2 -- --dry-run
 *   npm run upload:r2 -- --s3         # 强制 S3（缺凭据则失败）
 *   npm run upload:r2 -- --wrangler   # 强制逐文件 wrangler put（慢）
 *
 * 环境 / 配置：
 *   推荐：仓库根 `.env`（自 `.env.example` 复制）填写 R2_ACCOUNT_ID / R2_ACCESS_KEY_ID / R2_SECRET_ACCESS_KEY
 *   或 shell export；或 wrangler login（--wrangler / 无 S3 凭据时的回退）
 */
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { loadProjectEnvSync } from './lib/load-dotenv.mjs';
import {
	LOCAL_PAGES_BUILD_META_PATH,
	PAGES_BUILD_META_KEY,
	PROJECT_ROOT,
	buildPagesMeta,
	diffFileHashesForUpload,
	fileToR2Key,
	hashLocalPagesGz,
	listHtmlGzFiles,
	readWorkerPagesCacheVersion,
	writeLocalPagesMeta,
} from './lib/pages-build-meta.mjs';
import {
	createR2S3Client,
	hasR2S3Credentials,
	s3GetObjectText,
	s3PutObject,
} from './lib/r2-s3-client.mjs';

/** 先于读取 bucket / concurrency：从 `.env` 注入本机凭据与可选覆盖项 */
loadProjectEnvSync();

/** 预渲染 gzip 根目录 */
const pagesRoot = path.join(PROJECT_ROOT, 'public', '_pages');
/** R2 目标桶名 */
const bucket = process.env.R2_PAGES_BUCKET || 'onlinefreetools-pages';
/** CLI 参数（去掉 node/script） */
const argv = process.argv.slice(2);
/** 只打印将上传的 key，不写桶 */
const dryRun = argv.includes('--dry-run');
/** 写入本地 wrangler 模拟桶 */
const local = argv.includes('--local');
/** 仅上传相对上次哈希有变化的对象 */
const changedOnly = argv.includes('--changed-only');
/** 强制 S3 兼容 API（缺凭据失败） */
const forceS3 = argv.includes('--s3');
/** 强制旧版 wrangler 逐文件 put */
const forceWrangler = argv.includes('--wrangler');
/**
 * 并发 put 数。
 * S3 默认更高（无 CLI 冷启动）；可用 R2_UPLOAD_CONCURRENCY 覆盖。
 */
const concurrencyDefault = forceWrangler || (!hasR2S3Credentials() && !forceS3) ? 6 : 32;
const concurrency = Math.max(1, Number(process.env.R2_UPLOAD_CONCURRENCY || concurrencyDefault));

/**
 * 有限并发执行任务。
 * @template T
 * @param {T[]} items
 * @param {number} limit
 * @param {(item: T, index: number) => Promise<void>} fn
 */
const mapPool = async (items, limit, fn) => {
	let i = 0;
	const workers = Array.from({ length: Math.min(limit, items.length) }, async () => {
		while (i < items.length) {
			const idx = i++;
			await fn(items[idx], idx);
		}
	});
	await Promise.all(workers);
};

/**
 * 远程：调用 wrangler r2 object put（慢路径，仅回退/显式 --wrangler）。
 * @param {string} key
 * @param {string} filePath
 * @param {string} [contentType]
 * @returns {Promise<void>}
 */
const putRemoteWranglerOne = (key, filePath, contentType = 'application/octet-stream') =>
	new Promise((resolve, reject) => {
		const args = [
			'r2',
			'object',
			'put',
			`${bucket}/${key}`,
			`--file=${filePath}`,
			`--content-type=${contentType}`,
			'--remote',
		];
		const child = spawn('npx', ['wrangler', ...args], {
			cwd: PROJECT_ROOT,
			stdio: ['ignore', 'pipe', 'pipe'],
			env: process.env,
		});
		let err = '';
		child.stderr.on('data', (d) => {
			err += String(d);
		});
		child.on('close', (code) => {
			if (code === 0) resolve();
			else {
				const snippet = err.slice(0, 400);
				const hint =
					/403:\s*Forbidden/i.test(snippet)
						? ' Hint: R2 REST put needs account/bucket access (see ops/worker-r2-ops.md §9.1). Prefer R2 S3 API tokens + default upload path.'
						: '';
				reject(new Error(`wrangler put failed (${code}) ${key}: ${snippet}${hint}`));
			}
		});
	});

/**
 * 读取上次 fileHashes：优先 R2 meta，其次本地 .cache/pages-build.json。
 * @param {{ getRemoteMetaText?: () => Promise<string|null> }} hooks
 * @returns {Promise<Record<string, string>|null>}
 */
const loadPreviousFileHashes = async (hooks) => {
	/** @type {Record<string, string>|null} */
	let fromRemote = null;
	if (hooks.getRemoteMetaText) {
		try {
			const raw = await hooks.getRemoteMetaText();
			if (raw) {
				const meta = JSON.parse(raw);
				if (meta?.fileHashes && typeof meta.fileHashes === 'object') {
					fromRemote = meta.fileHashes;
				}
			}
		} catch {
			/* 无远程 meta 或非 JSON：忽略，改试本地 */
		}
	}
	if (fromRemote && Object.keys(fromRemote).length) return fromRemote;

	try {
		const raw = await fs.readFile(LOCAL_PAGES_BUILD_META_PATH, 'utf8');
		const meta = JSON.parse(raw);
		if (meta?.fileHashes && typeof meta.fileHashes === 'object') return meta.fileHashes;
	} catch {
		/* 无本地 cache */
	}
	return null;
};

/**
 * 上传构建清单到 R2（及本地 .cache）。
 * @param {object} meta
 * @param {{
 *   putLocal?: (key: string, bytes: Uint8Array, contentType: string) => Promise<void>,
 *   putRemoteBytes?: (key: string, bytes: Buffer|Uint8Array, contentType: string) => Promise<void>,
 * }} [hooks]
 */
const uploadMeta = async (meta, hooks) => {
	const body = `${JSON.stringify(meta, null, 2)}\n`;
	await writeLocalPagesMeta(meta);
	if (dryRun) {
		console.log(`[upload-r2] dry-run meta ${PAGES_BUILD_META_KEY} version=${meta.pagesCacheVersion}`);
		return;
	}
	const bytes = Buffer.from(body, 'utf8');
	if (local && hooks?.putLocal) {
		await hooks.putLocal(PAGES_BUILD_META_KEY, new Uint8Array(bytes), 'application/json');
	} else if (hooks?.putRemoteBytes) {
		await hooks.putRemoteBytes(PAGES_BUILD_META_KEY, bytes, 'application/json');
	} else {
		const tmp = path.join(PROJECT_ROOT, '.cache', 'pages-build.upload.json');
		await fs.mkdir(path.dirname(tmp), { recursive: true });
		await fs.writeFile(tmp, body, 'utf8');
		await putRemoteWranglerOne(PAGES_BUILD_META_KEY, tmp, 'application/json');
	}
	console.log(
		`[upload-r2] wrote ${PAGES_BUILD_META_KEY} pagesCacheVersion=${meta.pagesCacheVersion} files=${meta.fileCount} schema=${meta.schemaVersion}`
	);
};

/**
 * 本地：经 wrangler getPlatformProxy 写入模拟 R2。
 * @param {string[]} filesAbs 待上传绝对路径
 * @param {object} meta
 */
const uploadLocal = async (filesAbs, meta) => {
	const { getPlatformProxy } = await import('wrangler');
	const proxy = await getPlatformProxy({ persist: true });
	try {
		const bucketBinding = proxy.env.PAGES_BUCKET;
		if (!bucketBinding) {
			throw new Error('PAGES_BUCKET binding missing — check wrangler.jsonc r2_buckets');
		}
		/** @param {string} key @param {Uint8Array} bytes @param {string} contentType */
		const putLocal = async (key, bytes, contentType) => {
			await bucketBinding.put(key, bytes, {
				httpMetadata: { contentType },
			});
		};
		let done = 0;
		await mapPool(filesAbs, concurrency, async (file) => {
			const key = fileToR2Key(file);
			if (dryRun) {
				console.log(`  dry-run ${key}`);
			} else {
				const bytes = await fs.readFile(file);
				await putLocal(key, new Uint8Array(bytes), 'application/octet-stream');
			}
			done += 1;
			if (done % 100 === 0 || done === filesAbs.length) {
				console.log(`[upload-r2] local progress ${done}/${filesAbs.length}`);
			}
		});
		await uploadMeta(meta, { putLocal });
	} finally {
		await proxy.dispose();
	}
};

/**
 * 远程：S3 兼容 API 并发 PutObject（推荐路径）。
 * @param {string[]} filesAbs
 * @param {object} meta
 */
const uploadRemoteS3 = async (filesAbs, meta) => {
	const client = createR2S3Client();
	/** @param {string} key @param {Buffer|Uint8Array} bytes @param {string} contentType */
	const putRemoteBytes = async (key, bytes, contentType) => {
		await s3PutObject(client, { bucket, key, body: bytes, contentType });
	};
	let done = 0;
	const t0 = Date.now();
	await mapPool(filesAbs, dryRun ? 1 : concurrency, async (file) => {
		const key = fileToR2Key(file);
		if (dryRun) console.log(`  dry-run ${key}`);
		else {
			const bytes = await fs.readFile(file);
			await putRemoteBytes(key, bytes, 'application/octet-stream');
		}
		done += 1;
		if (done % 100 === 0 || done === filesAbs.length) {
			const sec = ((Date.now() - t0) / 1000).toFixed(1);
			console.log(`[upload-r2] s3 progress ${done}/${filesAbs.length} (${sec}s)`);
		}
	});
	await uploadMeta(meta, { putRemoteBytes });
};

/**
 * 远程：并发 wrangler put（慢回退）。
 * @param {string[]} filesAbs
 * @param {object} meta
 */
const uploadRemoteWrangler = async (filesAbs, meta) => {
	console.warn(
		'[upload-r2] using wrangler per-file put (slow). Copy .env.example → .env and set R2_ACCOUNT_ID + R2_ACCESS_KEY_ID + R2_SECRET_ACCESS_KEY.'
	);
	let done = 0;
	const t0 = Date.now();
	await mapPool(filesAbs, dryRun ? 1 : concurrency, async (file) => {
		const key = fileToR2Key(file);
		if (dryRun) console.log(`  dry-run ${key}`);
		else await putRemoteWranglerOne(key, file);
		done += 1;
		if (done % 50 === 0 || done === filesAbs.length) {
			const sec = ((Date.now() - t0) / 1000).toFixed(1);
			console.log(`[upload-r2] wrangler progress ${done}/${filesAbs.length} (${sec}s)`);
		}
	});
	await uploadMeta(meta);
};

/**
 * 选择远程传输后端：s3 | wrangler。
 * @returns {'s3'|'wrangler'}
 */
const resolveRemoteTransport = () => {
	if (forceS3 && forceWrangler) {
		throw new Error('Cannot combine --s3 and --wrangler');
	}
	if (forceWrangler) return 'wrangler';
	if (forceS3) {
		if (!hasR2S3Credentials()) {
			throw new Error(
				'--s3 requires .env (or env) R2_ACCOUNT_ID + R2_ACCESS_KEY_ID + R2_SECRET_ACCESS_KEY (see ops/worker-r2-ops.md §3.1)'
			);
		}
		return 's3';
	}
	return hasR2S3Credentials() ? 's3' : 'wrangler';
};

const main = async () => {
	const allFiles = await listHtmlGzFiles(pagesRoot);
	if (!allFiles.length) {
		console.error('[upload-r2] no .html.gz under public/_pages — run npm run build:site first');
		process.exit(1);
	}

	const pagesCacheVersion = await readWorkerPagesCacheVersion();
	const { contentHash, fileCount, keys, fileHashes } = await hashLocalPagesGz(allFiles);
	const meta = buildPagesMeta({ pagesCacheVersion, contentHash, fileCount, keys, fileHashes });

	/** key → 绝对路径，便于按增量 key 取文件 */
	const absByKey = Object.fromEntries(allFiles.map((f) => [fileToR2Key(f), f]));

	/** @type {string[]} 实际要 put 的绝对路径 */
	let filesToUpload = allFiles;
	/** 增量跳过计数 */
	let skipped = 0;
	/** 增量决策原因 */
	let deltaReason = 'full';

	if (changedOnly) {
		/** @type {(() => Promise<string|null>)|undefined} */
		let getRemoteMetaText;
		if (local) {
			getRemoteMetaText = async () => {
				const { getPlatformProxy } = await import('wrangler');
				const proxy = await getPlatformProxy({ persist: true });
				try {
					const obj = await proxy.env.PAGES_BUCKET?.get(PAGES_BUILD_META_KEY);
					return obj ? await obj.text() : null;
				} finally {
					await proxy.dispose();
				}
			};
		} else if (hasR2S3Credentials() && !forceWrangler) {
			const client = createR2S3Client();
			getRemoteMetaText = () => s3GetObjectText(client, { bucket, key: PAGES_BUILD_META_KEY });
		}
		const prev = await loadPreviousFileHashes({ getRemoteMetaText });
		const diff = diffFileHashesForUpload(fileHashes, prev);
		skipped = diff.skipped;
		deltaReason = diff.reason;
		filesToUpload = diff.uploadKeys.map((k) => absByKey[k]).filter(Boolean);
	}

	const transport = local ? 'local' : resolveRemoteTransport();
	console.log(
		`[upload-r2] files=${allFiles.length} upload=${filesToUpload.length} skipped=${skipped} ` +
			`bucket=${bucket} transport=${transport} changedOnly=${changedOnly} delta=${deltaReason} ` +
			`dryRun=${dryRun} concurrency=${concurrency} version=${pagesCacheVersion}`
	);

	if (!filesToUpload.length && !dryRun) {
		console.log('[upload-r2] nothing to upload (all hashes match); still refreshing meta');
	}

	if (local) await uploadLocal(filesToUpload, meta);
	else if (transport === 's3') await uploadRemoteS3(filesToUpload, meta);
	else await uploadRemoteWrangler(filesToUpload, meta);

	console.log('[upload-r2] done');
};

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
