#!/usr/bin/env node
/**
 * Single-tool pre-ship gate.
 *
 * Usage:
 *   npm run verify:tool -- --slug=image-compress
 *
 * Runs inventory → coverage → source wiring → merge → full build → HTML smoke
 * → SEO lint → vendor lint → tool isolation, with per-run evidence.
 *
 * Invokes `node scripts/…` directly (not `npm run`) so Windows does not depend
 * on spawning npm.cmd succeeding.
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { randomUUID } from 'node:crypto';
import { observedStep } from './lib/observed-step.mjs';
import { validSlug } from './validate-tool-artifacts.mjs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const node = process.execPath;

const args = process.argv.slice(2);
const slugArg = args.find((arg) => arg.startsWith('--slug='))?.slice('--slug='.length);
const slugFlagIndex = args.indexOf('--slug');
const slug = slugArg || (slugFlagIndex >= 0 ? args[slugFlagIndex + 1] : '') || process.env.TOOL_SLUG || '';

if (!validSlug(slug)) {
	console.error('usage: npm run verify:tool -- --slug=<slug>');
	process.exit(1);
}

/**
 * 运行一步；非 0 退出码则中止。
 * @param {string} label
 * @param {string[]} nodeArgs node 后的参数（脚本路径 + 脚本参数）
 * @param {Record<string, string>} [extraEnv]
 */
const runDir = path.join(root, '.cache', 'verify-tool', slug, `${Date.now()}-${randomUUID()}`);
mkdirSync(runDir, { recursive: true });
const report = { slug, status: 'running', startedAt: new Date().toISOString(), steps: [] };
const saveReport = () => writeFileSync(path.join(runDir, 'report.json'), JSON.stringify(report, null, 2) + '\n');
saveReport();
console.log(`[verify:tool] evidence: ${runDir}`);

async function runStep(label, nodeArgs, extraEnv = {}) {
	console.log(`[verify:tool] ${label}`);
	const stem = String(report.steps.length + 1).padStart(2, '0');
	const result = await observedStep({
		command: node, args: nodeArgs,
		cwd: root,
		env: { ...process.env, ...extraEnv },
		logPath: path.join(runDir, `${stem}.log`),
		resultPath: path.join(runDir, `${stem}.json`),
	});
	report.steps.push({ label, ...result });
	saveReport();
	if (result.status !== 'passed') {
		report.status = 'failed';
		report.finishedAt = new Date().toISOString();
		saveReport();
		console.error(`[verify:tool] FAILED: ${label}`);
		process.exit(result.exitCode || 1);
	}
}

await runStep('artifact inventory', ['scripts/validate-tool-artifacts.mjs', `--slug=${slug}`]);

await runStep('coverage gate', [
	path.join('scripts', 'validate-tool-coverage-rounds.mjs'),
	`--slug=${slug}`,
	'--phase=all',
]);

await runStep('tool-page wiring (source)', [
	path.join('scripts', 'validate-tool-page-wiring.mjs'),
	`--slug=${slug}`,
]);

await runStep('merge:tools', [path.join('scripts', 'tool-modules', 'merge-all.mjs')]);

await runStep('site build', [path.join('scripts', 'build-site.mjs'), '--full']);

await runStep('tool-page HTML smoke', [
	path.join('scripts', 'validate-tool-page-wiring.mjs'),
	`--slug=${slug}`,
	'--require-html',
]);

await runStep('SEO lint', [path.join('scripts', 'validate-tool-seo.mjs')]);

await runStep('vendor lint', [path.join('scripts', 'validate-vendor-tracked.mjs')]);

await runStep(
	'tool isolation',
	[path.join('scripts', 'check-tool-isolation.mjs'), `--slug=${slug}`],
	{ TOOL_SLUG: slug }
);

report.status = 'passed';
report.finishedAt = new Date().toISOString();
saveReport();
console.log(`[verify:tool] OK slug=${slug}; browser/output acceptance remains separate`);
