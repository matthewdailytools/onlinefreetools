#!/usr/bin/env node
/**
 * 校验 R2 预渲染内容与本仓库 Worker 配置（PAGES_CACHE_VERSION）一致。
 *
 * 用法：
 *   npm run verify:r2                 # 远程桶
 *   npm run verify:r2 -- --local      # 本地模拟桶
 *   npm run verify:r2 -- --live       # 额外请求线上 Worker /api/ops/pages-build
 *   npm run verify:r2 -- --live --base-url=https://onlinefreetools.org
 *
 * 失败退出码 1。
 */
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';
import {
	PAGES_BUILD_META_KEY,
	PROJECT_ROOT,
	hashLocalPagesGz,
	listHtmlGzFiles,
	readWorkerPagesCacheVersion,
	requiredR2Keys,
} from './lib/pages-build-meta.mjs';

const argv = process.argv.slice(2);
const local = argv.includes('--local');
const live = argv.includes('--live');
const bucket = process.env.R2_PAGES_BUCKET || 'onlinefreetools-pages';
const baseUrlArg = argv.find((a) => a.startsWith('--base-url='));
const baseUrl = (baseUrlArg?.slice('--base-url='.length) || process.env.SITE_BASE_URL || 'https://onlinefreetools.org').replace(
	/\/$/,
	''
);

/**
 * 远程：wrangler r2 object get 到临时文件并读文本。
 * @param {string} key
 * @returns {Promise<string|null>}
 */
const getRemoteObjectText = (key) =>
	new Promise((resolve, reject) => {
		const tmp = path.join(PROJECT_ROOT, '.cache', `r2-get-${Date.now()}.bin`);
		const args = ['r2', 'object', 'get', `${bucket}/${key}`, `--file=${tmp}`, '--remote'];
		const child = spawn('npx', ['wrangler', ...args], {
			cwd: PROJECT_ROOT,
			stdio: ['ignore', 'pipe', 'pipe'],
			env: process.env,
		});
		let err = '';
		child.stderr.on('data', (d) => {
			err += String(d);
		});
		child.on('close', async (code) => {
			try {
				if (code !== 0) {
					resolve(null);
					return;
				}
				const text = await fs.readFile(tmp, 'utf8');
				resolve(text);
			} catch (e) {
				reject(e);
			} finally {
				await fs.unlink(tmp).catch(() => undefined);
			}
		});
	});

/**
 * 本地：getPlatformProxy 读对象。
 * @param {string} key
 * @returns {Promise<string|null>}
 */
const getLocalObjectText = async (key) => {
	const { getPlatformProxy } = await import('wrangler');
	const proxy = await getPlatformProxy({ persist: true });
	try {
		const obj = await proxy.env.PAGES_BUCKET.get(key);
		if (!obj) return null;
		return await obj.text();
	} finally {
		await proxy.dispose();
	}
};

/**
 * 远程 head/存在性：尝试 get 小对象。
 * @param {string} key
 */
const remoteKeyExists = async (key) => {
	const text = await getRemoteObjectText(key);
	return text !== null;
};

/**
 * 本地存在性。
 * @param {string} key
 */
const localKeyExists = async (key) => {
	const { getPlatformProxy } = await import('wrangler');
	const proxy = await getPlatformProxy({ persist: true });
	try {
		const obj = await proxy.env.PAGES_BUCKET.get(key);
		return !!obj;
	} finally {
		await proxy.dispose();
	}
};

const main = async () => {
	/** @type {string[]} */
	const errors = [];
	const workerVersion = await readWorkerPagesCacheVersion();
	const pagesRoot = path.join(PROJECT_ROOT, 'public', '_pages');
	const gzFiles = await listHtmlGzFiles(pagesRoot);
	if (!gzFiles.length) {
		errors.push('local public/_pages has no .html.gz — run npm run build:site');
	}
	const localHash = gzFiles.length ? await hashLocalPagesGz(gzFiles) : null;

	console.log(`[verify:r2] worker PAGES_CACHE_VERSION=${workerVersion}`);
	console.log(`[verify:r2] local gz files=${gzFiles.length} contentHash=${localHash?.contentHash || 'n/a'}`);
	console.log(`[verify:r2] target=${local ? 'local' : 'remote'} bucket=${bucket}`);

	const getMeta = local ? getLocalObjectText : getRemoteObjectText;
	const keyExists = local ? localKeyExists : remoteKeyExists;

	const metaRaw = await getMeta(PAGES_BUILD_META_KEY);
	if (!metaRaw) {
		errors.push(`R2 missing ${PAGES_BUILD_META_KEY} — run npm run upload:r2${local ? ':local' : ''}`);
	} else {
		/** @type {any} */
		let meta;
		try {
			meta = JSON.parse(metaRaw);
		} catch {
			errors.push(`${PAGES_BUILD_META_KEY} is not valid JSON`);
			meta = null;
		}
		if (meta) {
			console.log(
				`[verify:r2] R2 meta pagesCacheVersion=${meta.pagesCacheVersion} fileCount=${meta.fileCount} contentHash=${meta.contentHash}`
			);
			if (String(meta.pagesCacheVersion) !== workerVersion) {
				errors.push(
					`version mismatch: Worker/wrangler PAGES_CACHE_VERSION=${workerVersion} but R2 meta=${meta.pagesCacheVersion}`
				);
			}
			if (localHash && meta.contentHash !== localHash.contentHash) {
				errors.push(
					`contentHash mismatch: local=${localHash.contentHash} R2=${meta.contentHash} (re-run upload:r2 after build:site)`
				);
			}
			if (localHash && Number(meta.fileCount) !== localHash.fileCount) {
				errors.push(`fileCount mismatch: local=${localHash.fileCount} R2=${meta.fileCount}`);
			}
		}
	}

	for (const key of requiredR2Keys('en')) {
		if (key === PAGES_BUILD_META_KEY) continue;
		const ok = await keyExists(key);
		if (!ok) errors.push(`R2 missing required key: ${key}`);
		else console.log(`[verify:r2] ok key ${key}`);
	}

	if (live) {
		const url = `${baseUrl}/api/ops/pages-build`;
		console.log(`[verify:r2] live GET ${url}`);
		try {
			const res = await fetch(url, { headers: { Accept: 'application/json' } });
			const body = await res.json().catch(() => ({}));
			if (!res.ok && res.status !== 409) {
				errors.push(`live Worker ${url} status=${res.status}`);
			} else if (String(body.pagesCacheVersion) !== workerVersion) {
				errors.push(
					`live Worker pagesCacheVersion=${body.pagesCacheVersion} != wrangler ${workerVersion} (deploy stale?)`
				);
			} else if (body.aligned === false) {
				errors.push(
					`live Worker reports aligned=false (Worker=${body.pagesCacheVersion} R2 meta=${body.r2MetaVersion})`
				);
			} else if (metaRaw) {
				const meta = JSON.parse(metaRaw);
				if (String(body.pagesCacheVersion) !== String(meta.pagesCacheVersion)) {
					errors.push(
						`live Worker version ${body.pagesCacheVersion} != R2 meta ${meta.pagesCacheVersion}`
					);
				} else {
					console.log(`[verify:r2] live Worker matches R2/wrangler version=${body.pagesCacheVersion}`);
				}
			} else {
				console.log(`[verify:r2] live Worker pagesCacheVersion=${body.pagesCacheVersion}`);
			}
		} catch (e) {
			errors.push(`live fetch failed: ${e?.message || e}`);
		}
	}

	if (errors.length) {
		console.error('[verify:r2] FAILED:');
		for (const e of errors) console.error(`  - ${e}`);
		process.exit(1);
	}
	console.log('[verify:r2] OK — R2 meta aligned with Worker PAGES_CACHE_VERSION');
};

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
