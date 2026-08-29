#!/usr/bin/env node
/**
 * 合并工具分片为运行时产物（生成文件请勿手改）：
 * - src/site/tool-catalog.d/*.json → src/site/tool-catalog.json
 * - i18n/core + i18n/tools/* → src/site/i18n/{lang}.ts（GENERATED）
 * - page 注册表 → src/site/toolPageRegistry.generated.ts（仅构建期预渲染使用）
 * - slug 列表 → src/site/toolSlugs.generated.ts（Worker 轻量路由校验）
 * - 首页工具文案 → scripts/site/i18n-tools.generated.mjs
 *
 * `build:site` / `start:dev` 会自动调用；改分片后本地也可直接 `npm run merge:tools`。
 */
import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import {
	LANGS,
	CATALOG_PATH,
	I18N_DIR,
	I18N_CORE_DIR,
	I18N_TOOLS_DIR,
	REGISTRY_OUT,
	HOME_I18N_OUT,
	ensureDir,
	writeJson,
	readJson,
	loadCatalogShards,
	toPublicCatalogEntry,
	parseLocaleDict,
	writeLocaleTs,
	escapeSingleQuoted,
	defaultPageMeta,
} from './lib.mjs';

/**
 * 读取已生成 catalog 中各 slug 的 launchedAt，供合并时冻结首次上线时间。
 * @returns {Map<string, string>}
 */
function loadPreviousLaunchedAt() {
	/** @type {Map<string, string>} */
	const map = new Map();
	if (!fs.existsSync(CATALOG_PATH)) return map;
	try {
		const previous = readJson(CATALOG_PATH);
		if (!Array.isArray(previous)) return map;
		for (const entry of previous) {
			if (entry && typeof entry.slug === 'string' && typeof entry.launchedAt === 'string' && entry.launchedAt.trim()) {
				map.set(entry.slug, entry.launchedAt.trim());
			}
		}
	} catch {
		return map;
	}
	return map;
}

/** git 路径 → 首次加入 ISO 时间；缺 launchedAt 时一次性加载 */
let gitFirstAddedMap = null;

/**
 * 一次 git log 收集 src/pages 与 catalog 分片的首次加入时间（oldest-first，先写入者胜）。
 * @returns {Map<string, string>}
 */
function loadGitFirstAddedMap() {
	/** @type {Map<string, string>} */
	const map = new Map();
	try {
		const out = execSync(
			'git log --reverse --diff-filter=A --name-only --pretty=format:---%aI -- src/pages src/site/tool-catalog.d',
			{
				encoding: 'utf8',
				stdio: ['ignore', 'pipe', 'ignore'],
				maxBuffer: 10 * 1024 * 1024,
			}
		);
		let currentDate = '';
		for (const line of out.split(/\r?\n/)) {
			if (line.startsWith('---')) {
				currentDate = line.slice(3).trim();
				continue;
			}
			const file = line.trim().replace(/\\/g, '/');
			if (!file || !currentDate) continue;
			if (!map.has(file)) map.set(file, currentDate);
		}
	} catch {
		return map;
	}
	return map;
}

/**
 * 用 git 首次加入提交时间作为 launchedAt 回退（仅缺字段时调用）。
 * @param {string} relPath 相对仓库根的路径（正斜杠）
 * @returns {string}
 */
function gitFirstAddedAt(relPath) {
	if (!relPath) return '';
	if (!gitFirstAddedMap) gitFirstAddedMap = loadGitFirstAddedMap();
	return gitFirstAddedMap.get(relPath.replace(/\\/g, '/')) || '';
}

/**
 * 解析 catalog 分片对应的页面源文件相对路径。
 * @param {Record<string, any>} shard
 * @returns {string}
 */
function shardPageSourcePath(shard) {
	const mod = shard?.page?.module;
	if (typeof mod !== 'string' || !mod.trim()) return '';
	const base = path.basename(mod.trim());
	return `src/pages/${base}.ts`;
}

/**
 * 解析工具首次上线时间：分片 launchedAt → 已生成 catalog → git 首次加入 → updatedAt。
 * 一旦写入 catalog.json 即冻结，后续 tool:touch 只改 updatedAt，不会把旧工具顶进「最新上线」。
 * @param {Record<string, any>} shard
 * @param {Map<string, string>} previousLaunchedAt
 * @returns {string}
 */
function resolveLaunchedAt(shard, previousLaunchedAt) {
	const fromShard = typeof shard.launchedAt === 'string' ? shard.launchedAt.trim() : '';
	if (fromShard && Number.isFinite(Date.parse(fromShard))) return fromShard;
	const fromPrev = previousLaunchedAt.get(shard.slug);
	if (fromPrev && Number.isFinite(Date.parse(fromPrev))) return fromPrev;
	const fromGit =
		gitFirstAddedAt(shardPageSourcePath(shard)) ||
		gitFirstAddedAt(`src/site/tool-catalog.d/${shard.slug}.json`);
	if (fromGit && Number.isFinite(Date.parse(fromGit))) return fromGit;
	const fromUpdated = typeof shard.updatedAt === 'string' ? shard.updatedAt.trim() : '';
	if (fromUpdated && Number.isFinite(Date.parse(fromUpdated))) return fromUpdated;
	return new Date().toISOString();
}

/**
 * Merge catalog shards.
 */
/** 合法 primaryTopic / secondaryTopics（与 src/site/topics.ts 同步）。 */
const TOOL_TOPIC_IDS = new Set([
	'health-body',
	'personal-money',
	'business-finance',
	'math-stats',
	'geometry-measure',
	'science-physics',
	'home-diy',
	'time-calendar',
	'pdf-docs',
	'image-media',
	'design-brand',
	'seo-growth',
	'network-ip',
	'dev-data',
	'security-ids',
	'files-archives',
]);

/**
 * 校验分片主题字段：primaryTopic 必填且合法；secondaryTopics 可选且不含 primary。
 * @param {Record<string, any>} shard
 */
function assertTopicFields(shard) {
	const slug = shard?.slug || '(unknown)';
	const primary = shard?.primaryTopic;
	if (typeof primary !== 'string' || !TOOL_TOPIC_IDS.has(primary)) {
		throw new Error(`catalog shard ${slug}: missing/invalid primaryTopic (${primary})`);
	}
	const secondary = shard?.secondaryTopics;
	if (secondary == null) return;
	if (!Array.isArray(secondary)) {
		throw new Error(`catalog shard ${slug}: secondaryTopics must be an array`);
	}
	for (const id of secondary) {
		if (!TOOL_TOPIC_IDS.has(id)) {
			throw new Error(`catalog shard ${slug}: invalid secondaryTopics entry (${id})`);
		}
		if (id === primary) {
			throw new Error(`catalog shard ${slug}: secondaryTopics must not repeat primaryTopic`);
		}
	}
}

/**
 * Merge catalog shards.
 */
function mergeCatalog() {
	const shards = loadCatalogShards();
	if (!shards.length) {
		throw new Error('No catalog shards in src/site/tool-catalog.d — run npm run split:tools first');
	}
	const previousLaunchedAt = loadPreviousLaunchedAt();
	const publicCatalog = shards.map((shard) => {
		assertTopicFields(shard);
		const entry = toPublicCatalogEntry(shard);
		entry.launchedAt = resolveLaunchedAt(shard, previousLaunchedAt);
		return entry;
	});
	writeJson(CATALOG_PATH, publicCatalog);
	console.log(`merged catalog: ${publicCatalog.length} tools → tool-catalog.json`);
	return shards;
}

/**
 * Merge i18n core + tool shards into generated locale files.
 * @param {Array<{slug:string,faqPrefix:string,homeTitleKey?:string,homeDescKey?:string}>} shards
 */
function mergeI18n(shards) {
	/** @type {Record<string, Record<string, string>>} */
	const homeByLang = Object.fromEntries(LANGS.map((l) => [l, {}]));

	for (const lang of LANGS) {
		const corePath = path.join(I18N_CORE_DIR, `${lang}.ts`);
		if (!fs.existsSync(corePath)) {
			throw new Error(`Missing i18n core: ${corePath}`);
		}
		/** @type {Record<string, string>} */
		const merged = { ...parseLocaleDict(fs.readFileSync(corePath, 'utf8')) };

		for (const tool of shards) {
			const shardPath = path.join(I18N_TOOLS_DIR, tool.slug, `${lang}.ts`);
			if (!fs.existsSync(shardPath)) continue;
			const shard = parseLocaleDict(fs.readFileSync(shardPath, 'utf8'));
			Object.assign(merged, shard);
			const titleKey = tool.homeTitleKey || tool.i18nKey;
			const descKey = tool.homeDescKey;
			if (titleKey && shard[titleKey]) homeByLang[lang][titleKey] = shard[titleKey];
			if (descKey && shard[descKey]) homeByLang[lang][descKey] = shard[descKey];
		}

		writeLocaleTs(
			path.join(I18N_DIR, `${lang}.ts`),
			lang,
			merged,
			`GENERATED by scripts/tool-modules/merge-all.mjs — DO NOT EDIT.\n * Edit src/site/i18n/core/${lang}.ts or src/site/i18n/tools/{slug}/${lang}.ts instead.`
		);
	}

	writeHomeI18n(homeByLang);
	console.log(`merged i18n: ${LANGS.length} locales`);
}

/**
 * Write home-build overlay for tool title/desc keys.
 * @param {Record<string, Record<string, string>>} homeByLang
 */
function writeHomeI18n(homeByLang) {
	const chunks = LANGS.map((lang) => {
		const entries = Object.entries(homeByLang[lang] || {})
			.sort(([a], [b]) => a.localeCompare(b))
			.map(([k, v]) => `    ${k}: '${escapeSingleQuoted(v)}',`)
			.join('\n');
		return `  ${lang}: {\n${entries}\n  }`;
	});
	const body = `/**
 * GENERATED by scripts/tool-modules/merge-all.mjs — DO NOT EDIT.
 * Tool home title/desc keys merged from src/site/i18n/tools/{slug}/{lang}.ts
 */
export const toolHomeTranslations = {
${chunks.join(',\n')}
};
`;
	fs.writeFileSync(HOME_I18N_OUT, body, 'utf8');
	console.log(`wrote ${path.relative(process.cwd(), HOME_I18N_OUT)}`);
}

/**
 * Generate tool page registry from catalog shard `page` meta.
 * @param {Array<Record<string, any>>} shards
 */
function mergeRegistry(shards) {
	const imports = [];
	const entries = [];
	const seenExports = new Set();

	for (const tool of shards) {
		const page = tool.page || defaultPageMeta(tool.slug);
		const modPath = page.module.startsWith('.') ? page.module : `../pages/${page.module}`;
		const exp = page.export;
		if (!seenExports.has(exp)) {
			imports.push(`import { ${exp} } from '${modPath}';`);
			seenExports.add(exp);
		}
		if (page.style === 'pair') {
			entries.push(
				`\t'${tool.slug}': (lang, defaultLang, _enabled) => ${exp}(lang, defaultLang),`
			);
		} else {
			entries.push(
				`\t'${tool.slug}': (lang, defaultLang, enabled) => ${exp}({ lang, defaultLang, enabledLangs: enabled }),`
			);
		}
	}

	const body = `/**
 * GENERATED by scripts/tool-modules/merge-all.mjs — DO NOT EDIT.
 * Source of truth: src/site/tool-catalog.d/{slug}.json → page.module / page.export / page.style
 */
import type { SiteLang } from './i18n';
${imports.join('\n')}

export type ToolPageRenderFn = (
	lang: SiteLang,
	defaultLang: SiteLang,
	enabledLangs: SiteLang[]
) => string | void;

/** slug → render function for registerToolPage */
export const TOOL_PAGE_RENDERERS: Record<string, ToolPageRenderFn> = {
${entries.join('\n')}
};
`;
	fs.writeFileSync(REGISTRY_OUT, body, 'utf8');
	console.log(`wrote ${path.relative(process.cwd(), REGISTRY_OUT)} (${shards.length} tools)`);
}

/**
 * 写出轻量 slug 列表（Worker 运行时只用此文件，避免打入全量 Page SSR）。
 * @param {Array<Record<string, any>>} shards
 */
function mergeToolSlugs(shards) {
	const slugs = shards.map((t) => t.slug).filter(Boolean).sort();
	const out = path.join(path.dirname(REGISTRY_OUT), 'toolSlugs.generated.ts');
	const body = `/**
 * GENERATED by scripts/tool-modules/merge-all.mjs — DO NOT EDIT.
 * Source of truth: src/site/tool-catalog.d/{slug}.json
 */
export const TOOL_SLUGS = ${JSON.stringify(slugs, null, '\t')} as const;

export type ToolSlug = (typeof TOOL_SLUGS)[number];

/** O(1) 校验公开 /tools/:slug 是否存在 */
export const TOOL_SLUG_SET: ReadonlySet<string> = new Set(TOOL_SLUGS);
`;
	fs.writeFileSync(out, body, 'utf8');
	console.log(`wrote ${path.relative(process.cwd(), out)} (${slugs.length} slugs)`);
}

const shards = mergeCatalog();
mergeI18n(shards);
mergeRegistry(shards);
mergeToolSlugs(shards);
console.log('merge:tools OK');
