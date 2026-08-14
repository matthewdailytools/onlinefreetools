#!/usr/bin/env node
/**
 * 单工具改动隔离门禁：相对 origin/main（含工作区）的路径必须落在本工具 allowlist。
 *
 * 用法：
 *   TOOL_SLUG=flip-image npm run lint:tool-isolation
 *   CROSS_TOOL_UPDATE=1 npm run lint:tool-isolation   # 允许改 related / 其他工具
 *   npm run lint:tool-isolation -- --slug=add-watermark
 *
 * 未传 TOOL_SLUG / --slug 时跳过（CI 可用 --require-slug 强制）。
 */
import { execSync } from 'node:child_process';
import path from 'node:path';
import { ROOT } from './tool-modules/lib.mjs';

const args = process.argv.slice(2);
const slugArg = args.find((a) => a.startsWith('--slug='))?.slice('--slug='.length);
const slug = slugArg || process.env.TOOL_SLUG || '';
const cross = process.env.CROSS_TOOL_UPDATE === '1' || args.includes('--cross');
const requireSlug = args.includes('--require-slug');

/**
 * @param {string} cmd
 */
function sh(cmd) {
	return execSync(cmd, { cwd: ROOT, encoding: 'utf8' }).trim();
}

/**
 * Collect changed paths vs origin/main (or HEAD~ if no remote base).
 * Uses NUL-separated git output so paths with spaces/unicode are not C-quoted.
 */
function changedPaths() {
	let base = 'origin/main';
	try {
		sh('git rev-parse --verify origin/main');
	} catch {
		base = 'HEAD~1';
	}
	const out = execSync(
		`git -c core.quotepath=false diff -z --name-only ${base}...HEAD; git -c core.quotepath=false diff -z --name-only; git -c core.quotepath=false ls-files -z --others --exclude-standard`,
		{ cwd: ROOT, encoding: 'utf8' }
	);
	return [...new Set(out.split('\0').filter(Boolean))];
}

/**
 * Allowlist for a single-tool change.
 * @param {string} toolSlug
 */
function allowlistFor(toolSlug) {
	return [
		`work-tasks/${toolSlug}/`,
		`src/pages/`, // only the matching Page.ts checked below
		`src/site/tool-catalog.d/${toolSlug}.json`,
		`src/site/i18n/tools/${toolSlug}/`,
		`public/icons/tools/${toolSlug}.svg`,
		`scripts/tool-modules/`,
		`scripts/check-tool-isolation.mjs`,
		`.cursor/rules/`,
		`dev-logs/`,
		`public/devlogs/`,
		`README.md`,
		// generated / merge outputs (ok to refresh)
		`src/site/tool-catalog.json`,
		`src/site/i18n/en.ts`,
		`src/site/i18n/zh.ts`,
		`src/site/i18n/es.ts`,
		`src/site/i18n/ar.ts`,
		`src/site/i18n/pt.ts`,
		`src/site/i18n/id.ts`,
		`src/site/i18n/fr.ts`,
		`src/site/i18n/ja.ts`,
		`src/site/i18n/ru.ts`,
		`src/site/i18n/de.ts`,
		`src/site/toolPageRegistry.generated.ts`,
		`src/site/toolSlugs.generated.ts`,
		`scripts/site/i18n-tools.generated.mjs`,
		`scripts/site/sitemap-lastmod-state.json`,
		`public/index.html`,
		`public/en/index.html`,
		`public/zh/index.html`,
		`public/es/index.html`,
		`public/ar/index.html`,
		`public/pt/index.html`,
		`public/id/index.html`,
		`public/fr/index.html`,
		`public/ja/index.html`,
		`public/ru/index.html`,
		`public/de/index.html`,
		`public/sitemap.xml`,
		`public/_pages/`,
		`package.json`,
	];
}

/**
 * @param {string} file
 * @param {string} toolSlug
 */
function isAllowed(file, toolSlug) {
	const norm = file.replace(/\\/g, '/');
	if (cross) return true;

	// Page file: only this tool's page
	const camel = toolSlug.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
	const pagePath = `src/pages/${camel}Page.ts`;
	if (norm.startsWith('src/pages/')) {
		return norm === pagePath;
	}

	// Forbidden: other tools' shards / pages / icons
	if (norm.startsWith('src/site/i18n/tools/') && !norm.startsWith(`src/site/i18n/tools/${toolSlug}/`)) {
		return false;
	}
	if (norm.startsWith('src/site/tool-catalog.d/') && norm !== `src/site/tool-catalog.d/${toolSlug}.json`) {
		return false;
	}
	if (norm.startsWith('public/icons/tools/') && norm !== `public/icons/tools/${toolSlug}.svg`) {
		return false;
	}
	if (norm.startsWith('work-tasks/') && !norm.startsWith(`work-tasks/${toolSlug}/`)) {
		return false;
	}

	// Core i18n edits are blocked unless cross (shared chrome)
	if (norm.startsWith('src/site/i18n/core/')) return false;

	// index.ts should not need edits when using generated registry
	if (norm === 'src/index.ts') return false;

	const allow = allowlistFor(toolSlug);
	return allow.some((prefix) => norm === prefix || norm.startsWith(prefix));
}

if (!slug) {
	if (requireSlug) {
		console.error('lint:tool-isolation: TOOL_SLUG or --slug= required');
		process.exit(1);
	}
	console.log('lint:tool-isolation: no TOOL_SLUG — skip (set TOOL_SLUG to enforce)');
	process.exit(0);
}

const changed = changedPaths();
const bad = changed.filter((f) => !isAllowed(f, slug));

if (bad.length) {
	console.error(`lint:tool-isolation FAILED for slug=${slug}`);
	console.error('These paths are outside the single-tool allowlist:');
	for (const f of bad) console.error(`  - ${f}`);
	console.error('\nFix: move edits into the tool shard, or set CROSS_TOOL_UPDATE=1 if you explicitly need related-tool changes.');
	process.exit(1);
}

console.log(`lint:tool-isolation OK for slug=${slug} (${changed.length} changed paths)`);
