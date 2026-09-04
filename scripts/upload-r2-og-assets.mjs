#!/usr/bin/env node
/**
 * 将 `public/og/tools` 下的 SERP/OG 位图同步到公开 R2 桶 `assets`。
 * 自定义域 `https://assets.onlinefreetools.org` 指向该桶；object key 与公开路径一致：
 * `og/tools/{slug}.webp` → `https://assets.onlinefreetools.org/og/tools/{slug}.webp`。
 *
 * 这些文件仍提交 Git（截图源），但经 `public/.assetsignore` 排除，
 * GitHub → Cloudflare 部署 **不会** 把它们打进 Worker Static Assets。
 *
 * 用法：
 *   npm run upload:r2:og              # 默认增量：按上次 manifest 的 fileHashes 只传变化文件
 *   npm run upload:r2:og:full         # 强制全量
 *   npm run upload:r2:og -- --dry-run
 *   npm run upload:r2:og -- --s3      # 强制 S3（缺凭据则失败）
 *   npm run upload:r2:og -- --wrangler
 *
 * 凭据与 HTML 上传相同（仓库根 `.env`）。R2 API Token 须对桶 `assets` 有 Object Read & Write。
 */
import { createHash } from 'node:crypto';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { loadProjectEnvSync } from './lib/load-dotenv.mjs';
import { PROJECT_ROOT } from './lib/pages-build-meta.mjs';
import {
	createR2S3Client,
	hasR2S3Credentials,
	s3GetObjectText,
	s3PutObject,
} from './lib/r2-s3-client.mjs';

/** 先于读取 bucket / concurrency：从 `.env` 注入本机凭据 */
loadProjectEnvSync();

/** 本地源目录（仍入库 Git，作为截图与上传源） */
const OG_TOOLS_DIR = path.join(PROJECT_ROOT, 'public', 'og', 'tools');
/** 公开自定义域（与 src/pages/site/ogImage.ts 的 OG_ASSETS_BASE_URL 对齐） */
const OG_ASSETS_PUBLIC_BASE = 'https://assets.onlinefreetools.org';
/** R2 目标桶名（Dashboard 已建 `assets` 并绑自定义域） */
const bucket = process.env.R2_ASSETS_BUCKET || 'assets';
/** 桶内清单 key，供跨机器增量上传；公开域可访问但只含文件名与 hash */
const MANIFEST_KEY = '_meta/og-tools-manifest.json';
/** 本地清单落盘（`.cache/` 已 gitignore） */
const LOCAL_MANIFEST_PATH = path.join(PROJECT_ROOT, '.cache', 'og-tools-upload.json');
/** 浏览器/CDN 缓存头：同名覆盖后约 30 天内边缘可能仍旧，排障用 :full 或清缓存 */
const CACHE_CONTROL = 'public, max-age=2592000';
/** 允许上传的扩展名（与 ogImage.ts OG_EXTENSIONS 一致） */
const OG_EXTENSIONS = new Set(['webp', 'png', 'jpg', 'jpeg', 'avif']);
/** CLI 参数（去掉 node/script） */
const argv = process.argv.slice(2);
/** 只打印将上传的 key，不写桶 */
const dryRun = argv.includes('--dry-run');
/** 增量上传：按上次成功上传 manifest 中的 fileHashes 比较 */
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
 * 扩展名 → Content-Type。
 * @param {string} ext 不含点的小写扩展名
 * @returns {string}
 */
const contentTypeForExt = (ext) => {
	if (ext === 'webp') return 'image/webp';
	if (ext === 'png') return 'image/png';
	if (ext === 'jpg' || ext === 'jpeg') return 'image/jpeg';
	if (ext === 'avif') return 'image/avif';
	return 'application/octet-stream';
};

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
 * 列出待上传的本地 OG 位图。
 * @returns {Promise<Array<{ absPath: string, key: string, ext: string, hash: string }>>}
 */
const listOgFiles = async () => {
	let names = [];
	try {
		names = await fs.readdir(OG_TOOLS_DIR);
	} catch (err) {
		if (err && err.code === 'ENOENT') return [];
		throw err;
	}
	/** @type {Array<{ absPath: string, key: string, ext: string, hash: string }>} */
	const files = [];
	for (const name of names.sort()) {
		if (name.startsWith('.')) continue;
		const ext = path.extname(name).slice(1).toLowerCase();
		if (!OG_EXTENSIONS.has(ext)) continue;
		const absPath = path.join(OG_TOOLS_DIR, name);
		const st = await fs.stat(absPath);
		if (!st.isFile()) continue;
		const buf = await fs.readFile(absPath);
		const hash = createHash('sha256').update(buf).digest('hex');
		files.push({
			absPath,
			key: `og/tools/${name}`,
			ext,
			hash,
		});
	}
	return files;
};

/**
 * 读取上次上传清单（优先远程桶，失败则本地 .cache）。
 * GetObject 403/404 不视为致命：Token 未覆盖该桶时仍允许继续上传（Put 才会真正失败）。
 * @param {import('@aws-sdk/client-s3').S3Client | null} client
 * @returns {Promise<{ fileHashes?: Record<string, string> } | null>}
 */
const readPreviousManifest = async (client) => {
	if (client) {
		try {
			const remote = await s3GetObjectText(client, { bucket, key: MANIFEST_KEY });
			if (remote) {
				try {
					return JSON.parse(remote);
				} catch {
					console.warn('[upload-r2-og] remote manifest JSON parse failed; ignoring');
				}
			}
		} catch (err) {
			const name = err?.name || err?.Code || '';
			const status = err?.$metadata?.httpStatusCode;
			console.warn(
				`[upload-r2-og] remote manifest unread (${name || status || 'error'}); falling back to local .cache. ` +
					'If PutObject later 403s, grant the R2 token Object Read & Write on bucket `assets`.'
			);
		}
	}
	try {
		const local = await fs.readFile(LOCAL_MANIFEST_PATH, 'utf8');
		return JSON.parse(local);
	} catch {
		return null;
	}
};

/**
 * 组装本次上传清单。
 * @param {Array<{ key: string, hash: string }>} files
 */
const buildManifest = (files) => {
	/** @type {Record<string, string>} */
	const fileHashes = {};
	for (const f of files) fileHashes[f.key] = f.hash;
	return {
		schemaVersion: 1,
		uploadedAt: new Date().toISOString(),
		bucket,
		publicBase: OG_ASSETS_PUBLIC_BASE,
		fileCount: files.length,
		fileHashes,
	};
};

/**
 * 远程：调用 wrangler r2 object put（慢路径，仅回退/显式 --wrangler）。
 * @param {string} key
 * @param {string} filePath
 * @param {string} contentType
 * @param {string} [cacheControl]
 * @returns {Promise<void>}
 */
const putRemoteWranglerOne = (key, filePath, contentType, cacheControl = CACHE_CONTROL) =>
	new Promise((resolve, reject) => {
		const args = [
			'r2',
			'object',
			'put',
			`${bucket}/${key}`,
			`--file=${filePath}`,
			`--content-type=${contentType}`,
			`--cache-control=${cacheControl}`,
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
						? ' Hint: R2 token must include Object Read & Write on bucket `assets` (see ops/worker-r2-ops.md §3.2).'
						: '';
				reject(new Error(`wrangler r2 object put failed (${code}) ${key}: ${snippet}${hint}`));
			}
		});
	});

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
				'--s3 requires .env R2_ACCOUNT_ID + R2_ACCESS_KEY_ID + R2_SECRET_ACCESS_KEY (see ops/worker-r2-ops.md §3.1)'
			);
		}
		return 's3';
	}
	return hasR2S3Credentials() ? 's3' : 'wrangler';
};

/**
 * 写入清单到本地与（非 dry-run 时）远程桶。
 * @param {object} manifest
 * @param {import('@aws-sdk/client-s3').S3Client | null} client
 * @param {'s3'|'wrangler'} transport
 */
const writeManifest = async (manifest, client, transport) => {
	const body = `${JSON.stringify(manifest, null, 2)}\n`;
	if (dryRun) {
		console.log(`[upload-r2-og] dry-run meta ${MANIFEST_KEY} files=${manifest.fileCount}`);
		return;
	}
	await fs.mkdir(path.dirname(LOCAL_MANIFEST_PATH), { recursive: true });
	await fs.writeFile(LOCAL_MANIFEST_PATH, body, 'utf8');
	const bytes = Buffer.from(body, 'utf8');
	if (transport === 's3' && client) {
		try {
			await s3PutObject(client, {
				bucket,
				key: MANIFEST_KEY,
				body: bytes,
				contentType: 'application/json',
				cacheControl: 'no-store',
			});
		} catch (err) {
			const status = err?.$metadata?.httpStatusCode;
			const code = err?.Code || err?.name || '';
			if (status === 403 || code === 'AccessDenied') {
				throw new Error(
					`PutObject 403 on s3://${bucket}/${MANIFEST_KEY}. Grant the R2 S3 token Object Read & Write on bucket \`${bucket}\` ` +
						'(Dashboard → R2 → Manage API Tokens; include both onlinefreetools-pages and assets). See ops/worker-r2-ops.md §3.2'
				);
			}
			throw err;
		}
	} else {
		const tmp = path.join(PROJECT_ROOT, '.cache', 'og-tools-manifest.upload.json');
		await fs.writeFile(tmp, body, 'utf8');
		await putRemoteWranglerOne(MANIFEST_KEY, tmp, 'application/json', 'no-store');
	}
	console.log(`[upload-r2-og] wrote ${MANIFEST_KEY} files=${manifest.fileCount}`);
};

const main = async () => {
	const allFiles = await listOgFiles();
	if (!allFiles.length) {
		console.error('[upload-r2-og] no images under public/og/tools — capture first (npm run seo:capture-og)');
		process.exit(1);
	}

	let transport = resolveRemoteTransport();
	let client = transport === 's3' ? createR2S3Client() : null;
	const prev = await readPreviousManifest(client);
	const prevHashes = prev && prev.fileHashes && typeof prev.fileHashes === 'object' ? prev.fileHashes : {};

	/** 增量：hash 不同或远端没有该 key */
	const toUpload = changedOnly
		? allFiles.filter((f) => prevHashes[f.key] !== f.hash)
		: allFiles;

	console.log(
		`[upload-r2-og] bucket=${bucket} publicBase=${OG_ASSETS_PUBLIC_BASE} transport=${transport} ` +
			`local=${allFiles.length} upload=${toUpload.length} changedOnly=${changedOnly} dryRun=${dryRun}`
	);

	/**
	 * S3 Token 常只授权 HTML 桶；公开桶 `assets` 若 403 则回退 wrangler（OAuth 账号级权限）。
	 * 探测用待传列表第一项，避免 32 路并发同时 403。
	 */
	if (!dryRun && transport === 's3' && client && toUpload.length) {
		const probe = toUpload[0];
		try {
			const bytes = await fs.readFile(probe.absPath);
			await s3PutObject(client, {
				bucket,
				key: probe.key,
				body: bytes,
				contentType: contentTypeForExt(probe.ext),
				cacheControl: CACHE_CONTROL,
			});
			console.log(`[upload-r2-og] s3 probe ok ${probe.key}`);
		} catch (err) {
			const status = err?.$metadata?.httpStatusCode;
			const code = err?.Code || err?.name || '';
			if (status === 403 || code === 'AccessDenied') {
				console.warn(
					`[upload-r2-og] S3 PutObject 403 on bucket \`${bucket}\`; falling back to wrangler. ` +
						'To keep the fast path, add this bucket to the R2 API token (ops/worker-r2-ops.md §3.2).'
				);
				transport = 'wrangler';
				client = null;
			} else {
				throw err;
			}
		}
	}

	/** wrangler 回退时降低并发，避免一次 spawn 过多 CLI */
	const uploadConcurrency = transport === 'wrangler' ? Math.min(concurrency, 6) : concurrency;

	if (!toUpload.length) {
		console.log('[upload-r2-og] nothing to upload (hashes match)');
		await writeManifest(buildManifest(allFiles), client, transport);
		return;
	}

	/** 探测已用 S3 成功写入第一项时，跳过重复 put */
	const alreadyPutByS3Probe = !dryRun && transport === 's3' && client ? 1 : 0;
	const remaining = alreadyPutByS3Probe ? toUpload.slice(1) : toUpload;

	let done = alreadyPutByS3Probe;
	const t0 = Date.now();
	if (alreadyPutByS3Probe) {
		console.log(`[upload-r2-og] progress ${done}/${toUpload.length} (probe)`);
	}
	await mapPool(remaining, dryRun ? 1 : uploadConcurrency, async (file) => {
		const contentType = contentTypeForExt(file.ext);
		if (dryRun) {
			console.log(`  dry-run ${file.key} ${contentType}`);
		} else if (transport === 's3' && client) {
			const bytes = await fs.readFile(file.absPath);
			await s3PutObject(client, {
				bucket,
				key: file.key,
				body: bytes,
				contentType,
				cacheControl: CACHE_CONTROL,
			});
		} else {
			await putRemoteWranglerOne(file.key, file.absPath, contentType);
		}
		done += 1;
		if (done % 10 === 0 || done === toUpload.length) {
			const sec = ((Date.now() - t0) / 1000).toFixed(1);
			console.log(`[upload-r2-og] progress ${done}/${toUpload.length} (${sec}s)`);
		}
	});

	await writeManifest(buildManifest(allFiles), client, transport);
	const sample = allFiles[0];
	console.log(`[upload-r2-og] example URL ${OG_ASSETS_PUBLIC_BASE}/${sample.key}`);
};

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
