import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

/** Repository root. */
export const PROJECT_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');

const catalogDir = path.join(PROJECT_ROOT, 'src/site/tool-catalog.d');

/** Local generation baseline for timestamp-based incremental tool prerender/gzip. */
export const TOOL_BUILD_STATE_PATH = path.join(PROJECT_ROOT, '.cache', 'tool-build-state.json');

/**
 * Convert a kebab-case tool slug to the conventional camel page module prefix.
 * @param {string} slug
 */
export const kebabToCamel = (slug) => slug.replace(/-([a-z0-9])/g, (_, c) => String(c).toUpperCase());

/**
 * Split a comma-separated slug list, preserving only plausible tool slugs.
 * @param {string|string[]|undefined|null} value
 * @returns {string[]}
 */
export const parseSlugList = (value) => {
	const raw = Array.isArray(value) ? value.join(',') : String(value || '');
	return [
		...new Set(
			raw
				.split(',')
				.map((s) => s.trim())
				.filter((s) => /^[a-z0-9][a-z0-9-]*[a-z0-9]$/.test(s))
		),
	].sort();
};

/**
 * Read a CLI option value. Supports --name=value and --name value.
 * @param {string[]} argv
 * @param {string[]} names
 * @returns {string|undefined}
 */
export const readArgValue = (argv, names) => {
	for (let i = 0; i < argv.length; i += 1) {
		const arg = argv[i];
		for (const name of names) {
			if (arg === name) return argv[i + 1];
			if (arg.startsWith(`${name}=`)) return arg.slice(name.length + 1);
		}
	}
	return undefined;
};

/**
 * Return true when the command requested changed-tool inference.
 * @param {string[]} argv
 */
export const wantsChangedTools = (argv) =>
	argv.includes('--changed-tools') || argv.includes('--changed') || argv.includes('--incremental');

/**
 * Parse a tool updatedAt/generatedAt/uploadedAt marker to an epoch ms.
 * Date-only strings are accepted for migration and treated as UTC midnight.
 * @param {unknown} value
 * @returns {number|null}
 */
export const parseToolTimeMs = (value) => {
	if (typeof value !== 'string' || !value.trim()) return null;
	const raw = value.trim();
	const normalized = /^\d{4}-\d{2}-\d{2}$/.test(raw) ? `${raw}T00:00:00.000Z` : raw;
	const ms = Date.parse(normalized);
	return Number.isFinite(ms) ? ms : null;
};

/**
 * Resolve slugs explicitly passed by CLI or env.
 * @param {string[]} argv
 * @param {{ env?: NodeJS.ProcessEnv }} [opts]
 * @returns {string[]}
 */
export const resolveExplicitToolSlugs = (argv, opts = {}) => {
	const env = opts.env || process.env;
	const fromArgs = parseSlugList(
		readArgValue(argv, ['--slug', '--slugs', '--tool', '--tools']) ||
			readArgValue(argv, ['-s'])
	);
	if (fromArgs.length) return fromArgs;
	return parseSlugList(env.TOOL_SLUGS || env.TOOL_SLUG || env.PRERENDER_TOOL_SLUGS || env.GZIP_PAGE_SLUGS);
};

/**
 * Convert an absolute or repo-relative path to a slash-separated repo path.
 * @param {string} filePath
 */
export const toRepoPath = (filePath) => {
	const abs = path.isAbsolute(filePath) ? filePath : path.join(PROJECT_ROOT, filePath);
	return path.relative(PROJECT_ROOT, abs).split(path.sep).join('/');
};

/**
 * List tracked/untracked changed paths from the working tree.
 * @returns {string[]}
 */
export const listGitStatusPaths = () => {
	const raw = execFileSync('git', ['status', '--porcelain=v1', '-z', '--untracked-files=all'], {
		cwd: PROJECT_ROOT,
		encoding: 'utf8',
	});
	const parts = raw.split('\0').filter(Boolean);
	const paths = [];
	for (let i = 0; i < parts.length; i += 1) {
		const rec = parts[i];
		if (rec.length < 4) continue;
		const code = rec.slice(0, 2);
		const file = rec.slice(3);
		paths.push(file);
		if (code.includes('R') || code.includes('C')) {
			i += 1;
		}
	}
	return [...new Set(paths.map(toRepoPath))].sort();
};

/**
 * List paths changed relative to a git ref.
 * @param {string} ref
 * @returns {string[]}
 */
export const listGitDiffPaths = (ref) => {
	const raw = execFileSync('git', ['diff', '--name-only', '-z', ref, '--'], {
		cwd: PROJECT_ROOT,
		encoding: 'utf8',
	});
	return [...new Set(raw.split('\0').filter(Boolean).map(toRepoPath))].sort();
};

/**
 * Read catalog shard JSON if present.
 * @param {string} slug
 * @returns {Record<string, any>|null}
 */
export const readCatalogShard = (slug) => {
	const file = path.join(catalogDir, `${slug}.json`);
	try {
		return JSON.parse(readFileSync(file, 'utf8'));
	} catch {
		return null;
	}
};

/**
 * Return all known catalog slugs.
 * @returns {string[]}
 */
export const listKnownToolSlugs = () => {
	if (!existsSync(catalogDir)) return [];
	return readdirSync(catalogDir)
		.filter((name) => name.endsWith('.json'))
		.map((name) => name.replace(/\.json$/, ''))
		.sort();
};

/**
 * Load all catalog shards keyed by slug.
 * @returns {Map<string, Record<string, any>>}
 */
export const loadCatalogShardMap = () => {
	const out = new Map();
	for (const slug of listKnownToolSlugs()) {
		const shard = readCatalogShard(slug);
		if (shard?.slug) out.set(String(shard.slug), shard);
	}
	return out;
};

/**
 * Read local tool generation state.
 * @returns {{ schemaVersion?: number, generatedAt?: string, toolGeneratedAt?: Record<string, string>, toolUpdatedAt?: Record<string, string> }}
 */
export const readToolBuildState = () => {
	try {
		const parsed = JSON.parse(readFileSync(TOOL_BUILD_STATE_PATH, 'utf8'));
		return parsed && typeof parsed === 'object' ? parsed : {};
	} catch {
		return {};
	}
};

/**
 * Return slugs whose catalog updatedAt is newer than the supplied per-tool baseline.
 * Missing updatedAt or missing baseline is treated as needing generation.
 * @param {Record<string, string>|null|undefined} baselineBySlug
 * @returns {{ slugs: string[], missingUpdatedAt: string[], missingBaseline: string[] }}
 */
export const listToolSlugsNewerThanBaseline = (baselineBySlug) => {
	const shards = loadCatalogShardMap();
	const slugs = [];
	const missingUpdatedAt = [];
	const missingBaseline = [];
	for (const [slug, shard] of shards) {
		const updatedMs = parseToolTimeMs(shard.updatedAt);
		const baselineMs = parseToolTimeMs(baselineBySlug?.[slug]);
		if (updatedMs === null) {
			slugs.push(slug);
			missingUpdatedAt.push(slug);
			continue;
		}
		if (baselineMs === null) {
			slugs.push(slug);
			missingBaseline.push(slug);
			continue;
		}
		if (updatedMs > baselineMs) slugs.push(slug);
	}
	return {
		slugs: [...new Set(slugs)].sort(),
		missingUpdatedAt: missingUpdatedAt.sort(),
		missingBaseline: missingBaseline.sort(),
	};
};

/**
 * Mark tool slugs as generated after prerender + gzip have completed.
 * @param {string[]} slugs
 * @param {{ generatedAt?: string }} [opts]
 */
export const markToolSlugsGenerated = (slugs, opts = {}) => {
	const cleanSlugs = parseSlugList(slugs);
	if (!cleanSlugs.length) return null;
	const now = opts.generatedAt || new Date().toISOString();
	const state = readToolBuildState();
	const shards = loadCatalogShardMap();
	const next = {
		schemaVersion: 1,
		...state,
		generatedAt: now,
		toolGeneratedAt: { ...(state.toolGeneratedAt || {}) },
		toolUpdatedAt: { ...(state.toolUpdatedAt || {}) },
	};
	for (const slug of cleanSlugs) {
		next.toolGeneratedAt[slug] = now;
		const updatedAt = shards.get(slug)?.updatedAt;
		if (typeof updatedAt === 'string' && updatedAt.trim()) next.toolUpdatedAt[slug] = updatedAt.trim();
	}
	mkdirSync(path.dirname(TOOL_BUILD_STATE_PATH), { recursive: true });
	writeFileSync(TOOL_BUILD_STATE_PATH, `${JSON.stringify(next, null, 2)}\n`, 'utf8');
	return next;
};

/**
 * Resolve a shard page.module value to a repo path.
 * @param {string} slug
 * @returns {string}
 */
export const pageModuleRepoPathForSlug = (slug) => {
	const shard = readCatalogShard(slug);
	const pageModule =
		shard?.page?.module && typeof shard.page.module === 'string'
			? shard.page.module
			: `../pages/${kebabToCamel(slug)}Page`;
	const base = pageModule.startsWith('.')
		? path.resolve(PROJECT_ROOT, 'src/site', pageModule)
		: path.resolve(PROJECT_ROOT, 'src/site', `../pages/${pageModule}`);
	const candidates = [base, `${base}.ts`, `${base}.js`];
	const found = candidates.find((p) => existsSync(p));
	return toRepoPath(found || `${base}.ts`);
};

/**
 * Build page module path -> slug map from catalog shards.
 * @returns {Map<string, string>}
 */
export const buildPageModuleSlugMap = () => {
	const map = new Map();
	for (const slug of listKnownToolSlugs()) {
		const rel = pageModuleRepoPathForSlug(slug);
		map.set(rel, slug);
		map.set(rel.replace(/\.(ts|js)$/, ''), slug);
	}
	return map;
};

/**
 * Infer tool slugs touched by a set of repo paths.
 * @param {string[]} repoPaths
 * @returns {string[]}
 */
export const inferToolSlugsFromPaths = (repoPaths) => {
	const pageToSlug = buildPageModuleSlugMap();
	const known = new Set(listKnownToolSlugs());
	const slugs = new Set();
	for (const relRaw of repoPaths) {
		const rel = toRepoPath(relRaw);
		let m = rel.match(/^src\/site\/tool-catalog\.d\/([^/]+)\.json$/);
		if (m) slugs.add(m[1]);
		m = rel.match(/^src\/site\/i18n\/tools\/([^/]+)\//);
		if (m) slugs.add(m[1]);
		m = rel.match(/^public\/icons\/tools\/([^/]+)\.svg$/);
		if (m) slugs.add(m[1]);
		m = rel.match(/^public\/og\/tools\/([^/.]+)\.(?:png|jpe?g|webp|avif)$/);
		if (m) slugs.add(m[1]);
		m = rel.match(/^work-tasks\/([^/]+)\//);
		if (m && (known.has(m[1]) || existsSync(path.join(catalogDir, `${m[1]}.json`)))) slugs.add(m[1]);
		const pageSlug = pageToSlug.get(rel) || pageToSlug.get(rel.replace(/\.(ts|js)$/, ''));
		if (pageSlug) slugs.add(pageSlug);
	}
	return [...slugs].sort();
};

/**
 * Resolve target tool slugs from explicit input or catalog updatedAt newer than local generation state.
 * @param {string[]} argv
 * @param {{ env?: NodeJS.ProcessEnv, requireTargets?: boolean }} [opts]
 * @returns {{ slugs: string[], source: 'explicit'|'updatedAt'|'all'|'none', changedPaths: string[], missingUpdatedAt?: string[], missingBaseline?: string[] }}
 */
export const resolveTargetToolSlugs = (argv, opts = {}) => {
	const explicit = resolveExplicitToolSlugs(argv, { env: opts.env });
	if (explicit.length) return { slugs: explicit, source: 'explicit', changedPaths: [] };
	if (!wantsChangedTools(argv)) return { slugs: [], source: 'all', changedPaths: [] };
	const state = readToolBuildState();
	const { slugs, missingUpdatedAt, missingBaseline } = listToolSlugsNewerThanBaseline(state.toolGeneratedAt);
	if (!slugs.length && opts.requireTargets) {
		throw new Error(
			'No updated tool slugs found. Pass --slug=<slug[,slug]> or bump src/site/tool-catalog.d/{slug}.json updatedAt.'
		);
	}
	return {
		slugs,
		source: slugs.length ? 'updatedAt' : 'none',
		changedPaths: [],
		missingUpdatedAt,
		missingBaseline,
	};
};

/**
 * Return repo pathspecs that belong to the given tool slugs, plus changed generated shared files.
 * @param {string[]} slugs
 * @param {{ includeShared?: boolean, changedPaths?: string[] }} [opts]
 * @returns {string[]}
 */
export const buildToolCommitPathspecs = (slugs, opts = {}) => {
	const includeShared = opts.includeShared !== false;
	const changedPaths = opts.changedPaths || listGitStatusPaths();
	const changedSet = new Set(changedPaths.map(toRepoPath));
	const targetSlugs = new Set(slugs);
	const pathspecs = new Set();
	const addIfPresentOrChanged = (rel) => {
		const normalized = toRepoPath(rel);
		if (changedSet.has(normalized) || existsSync(path.join(PROJECT_ROOT, normalized))) {
			pathspecs.add(normalized);
		}
	};

	for (const slug of slugs) {
		addIfPresentOrChanged(`src/site/tool-catalog.d/${slug}.json`);
		addIfPresentOrChanged(`src/site/i18n/tools/${slug}`);
		addIfPresentOrChanged(`public/icons/tools/${slug}.svg`);
		addIfPresentOrChanged(`public/og/tools/${slug}.png`);
		addIfPresentOrChanged(`public/og/tools/${slug}.jpg`);
		addIfPresentOrChanged(`public/og/tools/${slug}.jpeg`);
		addIfPresentOrChanged(`public/og/tools/${slug}.webp`);
		addIfPresentOrChanged(`public/og/tools/${slug}.avif`);
		addIfPresentOrChanged(`work-tasks/${slug}`);
		addIfPresentOrChanged(pageModuleRepoPathForSlug(slug));
	}

	for (const rel of changedPaths) {
		const owner = inferToolSlugsFromPaths([rel])[0];
		if (owner && targetSlugs.has(owner)) pathspecs.add(rel);
	}

	if (includeShared) {
		for (const rel of [
			'README.md',
			'src/site/tool-catalog.json',
			'src/site/toolPageRegistry.generated.ts',
			'src/site/toolSlugs.generated.ts',
			'scripts/site/i18n-tools.generated.mjs',
			'public/index.html',
			'public/sitemap.xml',
			'scripts/site/sitemap-lastmod-state.json',
		]) {
			addIfPresentOrChanged(rel);
		}
		const langs = [];
		if (existsSync(path.join(PROJECT_ROOT, 'src/site/i18n'))) {
			for (const name of readdirSync(path.join(PROJECT_ROOT, 'src/site/i18n'))) {
				if (/^[a-z]{2}\.ts$/.test(name)) {
					langs.push(name.replace(/\.ts$/, ''));
					addIfPresentOrChanged(`src/site/i18n/${name}`);
				}
			}
		}
		for (const lang of langs) addIfPresentOrChanged(`public/${lang}/index.html`);
	}

	return [...pathspecs].sort();
};
