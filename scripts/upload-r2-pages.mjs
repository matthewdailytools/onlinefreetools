#!/usr/bin/env node
/**
 * 将 public/_pages 下全部 .html.gz 同步到 R2（桶名默认 onlinefreetools-pages），
 * 并写入 `_meta/pages-build.json`（含 PAGES_CACHE_VERSION + contentHash）供部署校验。
 *
 * 用法：
 *   npm run upload:r2              # 远程（逐文件 wrangler put）
 *   npm run upload:r2:local        # 本地模拟桶（getPlatformProxy，较快）
 *   npm run upload:r2 -- --dry-run
 *
 * 环境：远程需 `wrangler login` 且桶已创建。
 */
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';
import {
	PAGES_BUILD_META_KEY,
	PROJECT_ROOT,
	buildPagesMeta,
	fileToR2Key,
	hashLocalPagesGz,
	listHtmlGzFiles,
	readWorkerPagesCacheVersion,
	writeLocalPagesMeta,
} from './lib/pages-build-meta.mjs';

const pagesRoot = path.join(PROJECT_ROOT, 'public', '_pages');
const bucket = process.env.R2_PAGES_BUCKET || 'onlinefreetools-pages';
const argv = process.argv.slice(2);
const dryRun = argv.includes('--dry-run');
const local = argv.includes('--local');
const concurrency = Math.max(1, Number(process.env.R2_UPLOAD_CONCURRENCY || 6));

/**
 * 远程：调用 wrangler r2 object put。
 * @param {string} key
 * @param {string} filePath
 * @param {string} [contentType]
 * @returns {Promise<void>}
 */
const putRemoteOne = (key, filePath, contentType = 'application/octet-stream') =>
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
						? ' Hint: R2 REST put needs account/bucket access (see ops/worker-r2-ops.md §9.1). Check `wrangler whoami`, `r2 bucket list`, re-login, or Admin API token — Object Read/Write tokens are not enough for wrangler.'
						: '';
				reject(new Error(`wrangler put failed (${code}) ${key}: ${snippet}${hint}`));
			}
		});
	});

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
 * 上传构建清单到 R2。
 * @param {object} meta
 * @param {{ putLocal?: (key: string, bytes: Uint8Array, contentType: string) => Promise<void> }} [hooks]
 */
const uploadMeta = async (meta, hooks) => {
	const body = `${JSON.stringify(meta, null, 2)}\n`;
	await writeLocalPagesMeta(meta);
	if (dryRun) {
		console.log(`[upload-r2] dry-run meta ${PAGES_BUILD_META_KEY} version=${meta.pagesCacheVersion}`);
		return;
	}
	if (local && hooks?.putLocal) {
		await hooks.putLocal(PAGES_BUILD_META_KEY, new TextEncoder().encode(body), 'application/json');
	} else {
		const tmp = path.join(PROJECT_ROOT, '.cache', 'pages-build.upload.json');
		await fs.mkdir(path.dirname(tmp), { recursive: true });
		await fs.writeFile(tmp, body, 'utf8');
		await putRemoteOne(PAGES_BUILD_META_KEY, tmp, 'application/json');
	}
	console.log(
		`[upload-r2] wrote ${PAGES_BUILD_META_KEY} pagesCacheVersion=${meta.pagesCacheVersion} files=${meta.fileCount}`
	);
};

/**
 * 本地：经 wrangler getPlatformProxy 写入模拟 R2。
 * @param {string[]} files
 * @param {object} meta
 */
const uploadLocal = async (files, meta) => {
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
		await mapPool(files, concurrency, async (file) => {
			const key = fileToR2Key(file);
			if (dryRun) {
				console.log(`  dry-run ${key}`);
			} else {
				const bytes = await fs.readFile(file);
				await putLocal(key, new Uint8Array(bytes), 'application/octet-stream');
			}
			done += 1;
			if (done % 100 === 0 || done === files.length) {
				console.log(`[upload-r2] local progress ${done}/${files.length}`);
			}
		});
		await uploadMeta(meta, { putLocal });
	} finally {
		await proxy.dispose();
	}
};

/**
 * 远程：并发 wrangler put。
 * @param {string[]} files
 * @param {object} meta
 */
const uploadRemote = async (files, meta) => {
	let done = 0;
	await mapPool(files, dryRun ? 1 : concurrency, async (file) => {
		const key = fileToR2Key(file);
		if (dryRun) console.log(`  dry-run ${key}`);
		else await putRemoteOne(key, file);
		done += 1;
		if (done % 50 === 0 || done === files.length) {
			console.log(`[upload-r2] remote progress ${done}/${files.length}`);
		}
	});
	await uploadMeta(meta);
};

const main = async () => {
	const files = await listHtmlGzFiles(pagesRoot);
	if (!files.length) {
		console.error('[upload-r2] no .html.gz under public/_pages — run npm run build:site first');
		process.exit(1);
	}
	const pagesCacheVersion = await readWorkerPagesCacheVersion();
	const { contentHash, fileCount, keys } = await hashLocalPagesGz(files);
	const meta = buildPagesMeta({ pagesCacheVersion, contentHash, fileCount, keys });

	console.log(
		`[upload-r2] files=${files.length} bucket=${bucket} local=${local} dryRun=${dryRun} version=${pagesCacheVersion}`
	);
	if (local) await uploadLocal(files, meta);
	else await uploadRemote(files, meta);
	console.log('[upload-r2] done');
};

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
