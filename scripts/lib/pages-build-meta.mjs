/**
 * 预渲染 HTML 构建元数据：Worker `PAGES_CACHE_VERSION` 与 R2 内容对齐用。
 * R2 权威对象：`_meta/pages-build.json`
 */
import { createHash } from 'node:crypto';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

/** 仓库根目录（本文件位于 scripts/lib/） */
export const PROJECT_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');

/** R2 中存放构建清单的 object key（相对桶根，不含 public/） */
export const PAGES_BUILD_META_KEY = '_meta/pages-build.json';

/** 本地清单落盘路径（upload 后写入，便于核对） */
export const LOCAL_PAGES_BUILD_META_PATH = path.join(PROJECT_ROOT, '.cache', 'pages-build.json');

/**
 * 去掉 JSONC 注释后解析（仅够读 wrangler.jsonc 的 vars）。
 * @param {string} text
 * @returns {any}
 */
export const parseJsoncLoose = (text) => {
	const stripped = String(text)
		.replace(/\/\*[\s\S]*?\*\//g, '')
		.replace(/^\s*\/\/.*$/gm, '');
	return JSON.parse(stripped);
};

/**
 * 读取 wrangler.jsonc 中的 PAGES_CACHE_VERSION。
 * @returns {Promise<string>}
 */
export const readWorkerPagesCacheVersion = async () => {
	const wranglerPath = path.join(PROJECT_ROOT, 'wrangler.jsonc');
	const raw = await fs.readFile(wranglerPath, 'utf8');
	const cfg = parseJsoncLoose(raw);
	const v = cfg?.vars?.PAGES_CACHE_VERSION;
	if (v === undefined || v === null || String(v).trim() === '') {
		throw new Error('wrangler.jsonc vars.PAGES_CACHE_VERSION missing');
	}
	return String(v).trim();
};

/**
 * 递归列出目录下全部 .html.gz。
 * @param {string} dir
 * @returns {Promise<string[]>}
 */
export const listHtmlGzFiles = async (dir) => {
	/** @type {string[]} */
	const out = [];
	let entries;
	try {
		entries = await fs.readdir(dir, { withFileTypes: true });
	} catch {
		return out;
	}
	for (const ent of entries) {
		const full = path.join(dir, ent.name);
		if (ent.isDirectory()) out.push(...(await listHtmlGzFiles(full)));
		else if (ent.isFile() && ent.name.endsWith('.html.gz')) out.push(full);
	}
	return out;
};

/**
 * 绝对路径 → R2 key（相对 public/）。
 * @param {string} absPath
 */
export const fileToR2Key = (absPath) =>
	path.relative(path.join(PROJECT_ROOT, 'public'), absPath).split(path.sep).join('/');

/**
 * 根据本地 .html.gz 计算内容指纹（按 key 排序后逐文件 sha256 再汇总）。
 * @param {string[]} gzFiles 绝对路径列表
 * @returns {Promise<{ contentHash: string, fileCount: number, keys: string[], fileHashes: Record<string, string> }>}
 */
export const hashLocalPagesGz = async (gzFiles) => {
	const sorted = [...gzFiles].sort((a, b) => fileToR2Key(a).localeCompare(fileToR2Key(b)));
	/** 整桶汇总哈希（按 key 排序拼接各文件 sha256） */
	const agg = createHash('sha256');
	/** @type {string[]} R2 object key 列表（相对 public/） */
	const keys = [];
	/** @type {Record<string, string>} key → 单文件 sha256（hex），供 --changed-only 对比 */
	const fileHashes = {};
	for (const file of sorted) {
		const key = fileToR2Key(file);
		keys.push(key);
		const buf = await fs.readFile(file);
		const fileHash = createHash('sha256').update(buf).digest('hex');
		fileHashes[key] = fileHash;
		agg.update(key);
		agg.update('\0');
		agg.update(fileHash);
		agg.update('\n');
	}
	return { contentHash: agg.digest('hex'), fileCount: keys.length, keys, fileHashes };
};

/**
 * 对比新旧 fileHashes，得到需要上传的 key 集合。
 * 旧侧无哈希时返回全部 keys（全量）。
 * @param {Record<string, string>} nextHashes 本次本地哈希
 * @param {Record<string, string>|null|undefined} prevHashes 上次（R2 meta 或本地 cache）
 * @returns {{ uploadKeys: string[], skipped: number, reason: string }}
 */
export const diffFileHashesForUpload = (nextHashes, prevHashes) => {
	const keys = Object.keys(nextHashes).sort();
	if (!prevHashes || typeof prevHashes !== 'object' || !Object.keys(prevHashes).length) {
		return { uploadKeys: keys, skipped: 0, reason: 'no-previous-hashes' };
	}
	/** @type {string[]} */
	const uploadKeys = [];
	let skipped = 0;
	for (const key of keys) {
		if (prevHashes[key] === nextHashes[key]) skipped += 1;
		else uploadKeys.push(key);
	}
	return { uploadKeys, skipped, reason: 'delta' };
};

/**
 * 组装 pages-build 清单对象。
 * schemaVersion 4：含上次成功上传的全量 fileHashes 记录。
 * Worker 探针仍只读 pagesCacheVersion/contentHash。
 * @param {{
 *   pagesCacheVersion: string,
 *   contentHash: string,
 *   fileCount: number,
 *   keys?: string[],
 *   fileHashes?: Record<string, string>,
 *   uploadedAt?: string,
 * }} opts
 */
export const buildPagesMeta = (opts) => {
	const toolSlugCount = (() => {
		try {
			const catalog = require(path.join(PROJECT_ROOT, 'src/site/tool-catalog.json'));
			return Array.isArray(catalog) ? catalog.length : 0;
		} catch {
			return 0;
		}
	})();
	const uploadedAt = opts.uploadedAt || new Date().toISOString();
	/** 是否写入逐文件哈希（有则 schema 2+） */
	const hasFileHashes = opts.fileHashes && Object.keys(opts.fileHashes).length > 0;
	return {
		schemaVersion: hasFileHashes ? 4 : 1,
		pagesCacheVersion: opts.pagesCacheVersion,
		contentHash: opts.contentHash,
		fileCount: opts.fileCount,
		toolSlugCount,
		builtAt: new Date().toISOString(),
		uploadedAt,
		/** 抽样键（完整 keys 过大，清单里只留校验用摘要 + 关键路径） */
		sampleKeys: (opts.keys || [])
			.filter(
				(k) =>
					k.endsWith('/index.html.gz') ||
					k.includes('/tools/text-diff.html.gz') ||
					k.endsWith('/about.html.gz')
			)
			.slice(0, 40),
		/** 逐文件 sha256；增量上传与跨机器对齐用（约百 KB 级，可接受） */
		...(hasFileHashes ? { fileHashes: opts.fileHashes } : {}),
	};
};

/**
 * 发版前必须存在的 R2 对象（相对 public/ 的 key）。
 * @param {string} defaultLang
 * @returns {string[]}
 */
export const requiredR2Keys = (defaultLang = 'en') => [
	`_pages/${defaultLang}/index.html.gz`,
	`_pages/${defaultLang}/about.html.gz`,
	`_pages/${defaultLang}/tools/text-diff.html.gz`,
	PAGES_BUILD_META_KEY,
];

/**
 * 将清单写入本地 .cache。
 * @param {object} meta
 */
export const writeLocalPagesMeta = async (meta) => {
	await fs.mkdir(path.dirname(LOCAL_PAGES_BUILD_META_PATH), { recursive: true });
	await fs.writeFile(LOCAL_PAGES_BUILD_META_PATH, `${JSON.stringify(meta, null, 2)}\n`, 'utf8');
};
