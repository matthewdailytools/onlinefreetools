#!/usr/bin/env node
/**
 * Single-tool pre-ship gate.
 *
 * Usage:
 *   npm run verify:tool -- --slug=image-compress
 *
 * Runs (in order): coverage → site build → tool-page wiring/HTML smoke →
 * SEO lint → vendor lint → tool isolation.
 *
 * Invokes `node scripts/…` directly (not `npm run`) so Windows does not depend
 * on spawnSync(npm.cmd) succeeding.
 */
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const node = process.execPath;

const args = process.argv.slice(2);
const slugArg = args.find((arg) => arg.startsWith('--slug='))?.slice('--slug='.length);
const slugFlagIndex = args.indexOf('--slug');
const slug = slugArg || (slugFlagIndex >= 0 ? args[slugFlagIndex + 1] : '') || process.env.TOOL_SLUG || '';

if (!slug) {
	console.error('usage: npm run verify:tool -- --slug=<slug>');
	process.exit(1);
}

/**
 * 运行一步；非 0 退出码则中止。
 * @param {string} label
 * @param {string[]} nodeArgs node 后的参数（脚本路径 + 脚本参数）
 * @param {Record<string, string>} [extraEnv]
 */
function runStep(label, nodeArgs, extraEnv = {}) {
	console.log(`[verify:tool] ${label}`);
	const result = spawnSync(node, nodeArgs, {
		cwd: root,
		stdio: 'inherit',
		env: { ...process.env, ...extraEnv },
	});
	if (result.status !== 0) {
		console.error(`[verify:tool] FAILED: ${label}`);
		process.exit(result.status || 1);
	}
}

runStep('coverage gate', [
	path.join('scripts', 'validate-tool-coverage-rounds.mjs'),
	`--slug=${slug}`,
	'--phase=all',
]);

runStep('tool-page wiring (source)', [
	path.join('scripts', 'validate-tool-page-wiring.mjs'),
	`--slug=${slug}`,
]);

runStep('merge:tools', [path.join('scripts', 'tool-modules', 'merge-all.mjs')]);

runStep('site build', [path.join('scripts', 'build-site.mjs'), '--full']);

runStep('tool-page HTML smoke', [
	path.join('scripts', 'validate-tool-page-wiring.mjs'),
	`--slug=${slug}`,
	'--require-html',
]);

runStep('SEO lint', [path.join('scripts', 'validate-tool-seo.mjs')]);

runStep('vendor lint', [path.join('scripts', 'validate-vendor-tracked.mjs')]);

runStep(
	'tool isolation',
	[path.join('scripts', 'check-tool-isolation.mjs'), `--slug=${slug}`],
	{ TOOL_SLUG: slug }
);

console.log(`[verify:tool] OK slug=${slug}`);
