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
	const parts = [
		`git -c core.quotepath=false diff -z --name-only ${base}...HEAD`,
		'git -c core.quotepath=false diff -z --name-only',
		'git -c core.quotepath=false ls-files -z --others --exclude-standard',
	];
	/** Windows `execSync` 默认不走 shell，不能用 `;` 串命令，否则 git 会把 `HEAD;` 当成修订名。 */
	const out = parts.map((cmd) => execSync(cmd, { cwd: ROOT, encoding: 'utf8' })).join('');
	return [...new Set(out.split('\0').filter(Boolean))];
}

/**
 * Allowlist for a single-tool change.
 * @param {string} toolSlug
 */
function allowlistFor(toolSlug) {
	return [
		`work-tasks/${toolSlug}/`,
		`work-tasks/_template/`,
		`src/pages/`, // only the matching Page.ts checked below
		`src/site/tool-catalog.d/${toolSlug}.json`,
		`src/site/i18n/tools/${toolSlug}/`,
		`public/icons/tools/${toolSlug}.svg`,
		`scripts/tool-modules/`,
		`scripts/check-tool-isolation.mjs`,
		`scripts/validate-tool-page-wiring.mjs`,
		`scripts/verify-tool.mjs`,
		`.cursor/rules/`,
		`.cursor/skills/`,
		`dev-logs/`,
		`public/devlogs/`,
		`README.md`,
		`AGENTS.md`,
		// Keyword funnel / SERP notes often land in the same session as a new tool
		`docs/seo/`,
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
 * 工作区噪声：不视为「改了别的工具」。
 * @param {string} norm 正斜杠路径
 */
function isIgnorableNoise(norm) {
	if (norm.includes('/__pycache__/') || norm.endsWith('.pyc') || norm.endsWith('.pyo')) return true;
	if (norm.endsWith('.DS_Store') || norm.endsWith('Thumbs.db')) return true;
	return false;
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
	if (norm.startsWith('work-tasks/')) {
		if (norm.startsWith(`work-tasks/${toolSlug}/`) || norm.startsWith('work-tasks/_template/')) {
			return true;
		}
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
const considered = changed.filter((f) => !isIgnorableNoise(f.replace(/\\/g, '/')));
const noise = changed.length - considered.length;
const bad = considered.filter((f) => !isAllowed(f, slug));

if (bad.length) {
	console.error(`lint:tool-isolation FAILED for slug=${slug}`);
	console.error('These paths are outside the single-tool allowlist:');
	for (const f of bad) console.error(`  - ${f}`);
	console.error('\nFix: move edits into the tool shard, or set CROSS_TOOL_UPDATE=1 if you explicitly need related-tool changes.');
	console.error('Note: docs/seo/ is allowlisted; __pycache__ / *.pyc are ignored as noise.');
	process.exit(1);
}

console.log(
	`lint:tool-isolation OK for slug=${slug} (${considered.length} paths${noise ? `, ignored noise=${noise}` : ''})`
);
