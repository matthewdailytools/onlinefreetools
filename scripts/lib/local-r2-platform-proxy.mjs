/**
 * 打开与 `wrangler dev` 共用 persist 目录的本地平台代理，只为读写模拟 R2。
 *
 * wrangler.jsonc 的 Workers AI 在 wrangler 4.58 上是 always-remote：即使
 * `remoteBindings: false` 仍会建 Cloudflare preview session（连 `*.workers.dev`）。
 * 灌桶脚本再带上完整 Worker / assets 时，getPlatformProxy 还会卡住 workerd。
 * 因此灌桶用「同名 Worker + 仅 R2」的临时配置；start:dev 默认用去掉 `ai` 的完整配置。
 */
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { getPlatformProxy } from 'wrangler';

/** 仓库根目录（本文件位于 scripts/lib/） */
const PROJECT_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
/**
 * wrangler `--persist-to` 目录（CLI 会再加 `/v3`）。
 * `-c .cache/*.json` 时若不指定，persist 会落到配置文件旁，灌桶与 dev 各用一套空桶，工具页 404。
 */
export const WRANGLER_PERSIST_TO = path.join(PROJECT_ROOT, '.wrangler', 'state');
/** getPlatformProxy 的 persist.path（对应 `--persist-to .../state` 下的 v3） */
const WRANGLER_PERSIST_V3 = path.join(WRANGLER_PERSIST_TO, 'v3');
/** 生产 / 远程 AI 用的权威 Wrangler 配置 */
const WRANGLER_SOURCE = path.join(PROJECT_ROOT, 'wrangler.jsonc');
/** 去掉 always-remote 绑定后的完整配置（供 wrangler dev --local） */
const WRANGLER_NO_AI = path.join(PROJECT_ROOT, '.cache', 'wrangler.no-ai.json');
/** 仅 R2 的灌桶配置（避免 getPlatformProxy 拉起 assets/AI） */
const WRANGLER_R2_SEED = path.join(PROJECT_ROOT, '.cache', 'wrangler.r2-seed.json');
/** 灌桶用空 Worker，避免打包 src/index.ts + public/ */
const R2_SEED_WORKER = path.join(PROJECT_ROOT, 'scripts', 'lib', 'r2-seed-worker.mjs');

/**
 * 把相对仓库根的路径改成相对生成配置所在目录。
 * wrangler CLI 的 `-c` 以配置文件目录解析 `main` / `assets.directory`；
 * 配置写在 `.cache/` 时必须写成 `../src/index.ts`，否则会去找 `.cache/src/index.ts`。
 * @param {string} fromRoot 相对仓库根或绝对路径
 * @param {string} outDir 生成配置所在目录
 * @returns {string} POSIX 相对路径
 */
const rebaseToConfigDir = (fromRoot, outDir) => {
	const abs = path.isAbsolute(fromRoot) ? fromRoot : path.resolve(PROJECT_ROOT, fromRoot);
	return path.relative(outDir, abs).split(path.sep).join('/');
};

/**
 * 去掉 JSONC 块注释与行注释后 parse（本仓库 wrangler.jsonc 无尾逗号）。
 * @param {string} text
 * @returns {Record<string, unknown>}
 */
const parseJsoncObject = (text) => {
	/** 去掉 /* ... *\/ 块注释 */
	const noBlock = String(text).replace(/\/\*[\s\S]*?\*\//g, '');
	/** 去掉行注释；不误伤 https:// */
	const noLine = noBlock.replace(/(^|[^:])\/\/.*$/gm, '$1');
	return JSON.parse(noLine);
};

/**
 * 写出不含 Workers AI 的完整 Wrangler JSON，供本地 wrangler dev 使用。
 * `name` 与 r2_buckets 与权威配置相同，以便共用 `.wrangler/state/v3` 模拟桶。
 * @returns {string} 临时配置绝对路径
 */
export const writeWranglerConfigWithoutRemoteBindings = () => {
	const source = readFileSync(WRANGLER_SOURCE, 'utf8');
	/** @type {Record<string, unknown>} */
	const config = parseJsoncObject(source);
	delete config.ai;
	/** 本地 --local 不需要 observability 上报；避免启动阶段再连 Cloudflare */
	delete config.observability;
	const outDir = path.dirname(WRANGLER_NO_AI);
	if (typeof config.main === 'string') {
		config.main = rebaseToConfigDir(config.main, outDir);
	}
	const assets = config.assets;
	if (assets && typeof assets === 'object' && typeof assets.directory === 'string') {
		assets.directory = rebaseToConfigDir(assets.directory, outDir);
	}
	mkdirSync(outDir, { recursive: true });
	writeFileSync(WRANGLER_NO_AI, `${JSON.stringify(config, null, '\t')}\n`, 'utf8');
	return WRANGLER_NO_AI;
};

/**
 * 写出仅含 R2 绑定的灌桶配置（不打包站点 Worker）。
 * @returns {string} 临时配置绝对路径
 */
export const writeWranglerConfigForLocalR2Seed = () => {
	const source = readFileSync(WRANGLER_SOURCE, 'utf8');
	const full = parseJsoncObject(source);
	const r2 = full.r2_buckets;
	if (!Array.isArray(r2) || !r2.length) {
		throw new Error('wrangler.jsonc missing r2_buckets — cannot seed local PAGES_BUCKET');
	}
	const outDir = path.dirname(WRANGLER_R2_SEED);
	/** @type {Record<string, unknown>} */
	const seed = {
		name: full.name || 'onlinefreetools',
		main: rebaseToConfigDir(R2_SEED_WORKER, outDir),
		compatibility_date: full.compatibility_date || '2025-09-27',
		r2_buckets: r2,
	};
	mkdirSync(outDir, { recursive: true });
	writeFileSync(WRANGLER_R2_SEED, `${JSON.stringify(seed, null, '\t')}\n`, 'utf8');
	return WRANGLER_R2_SEED;
};

/**
 * 返回本地 persist 的 PlatformProxy（R2 与 wrangler dev 同目录 `.wrangler/state/v3`）。
 * 调用方必须 `await proxy.dispose()`。
 * @returns {Promise<import('wrangler').PlatformProxy>}
 */
export const getLocalPlatformProxy = () => {
	const configPath = writeWranglerConfigForLocalR2Seed();
	return getPlatformProxy({
		configPath,
		/** 与 wrangler `--persist-to .wrangler/state` 对齐（API 路径含 v3） */
		persist: { path: WRANGLER_PERSIST_V3 },
		remoteBindings: false,
	});
};
