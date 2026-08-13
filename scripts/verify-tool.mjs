#!/usr/bin/env node
/**
 * Single-tool pre-ship gate.
 *
 * Usage:
 *   npm run verify:tool -- --slug=image-compress
 *
 * Runs the repository checks that must stay in the same order for tool work:
 * coverage gate, site build, SEO lint, vendor lint, and single-tool isolation.
 */
import { spawnSync } from 'node:child_process';

const npmCmd = process.platform === 'win32' ? 'npm.cmd' : 'npm';

const args = process.argv.slice(2);
const slugArg = args.find((arg) => arg.startsWith('--slug='))?.slice('--slug='.length);
const slugFlagIndex = args.indexOf('--slug');
const slug = slugArg || (slugFlagIndex >= 0 ? args[slugFlagIndex + 1] : '') || process.env.TOOL_SLUG || '';

if (!slug) {
	console.error('usage: npm run verify:tool -- --slug=<slug>');
	process.exit(1);
}

const steps = [
	{
		label: 'coverage gate',
		args: ['run', 'coverage:gate', '--', `--slug=${slug}`, '--phase=all'],
	},
	{
		label: 'site build',
		args: ['run', 'build:site'],
	},
	{
		label: 'SEO lint',
		args: ['run', 'lint:seo'],
	},
	{
		label: 'vendor lint',
		args: ['run', 'lint:vendor'],
	},
	{
		label: 'tool isolation',
		args: ['run', 'lint:tool-isolation', '--', `--slug=${slug}`],
		env: { TOOL_SLUG: slug },
	},
];

for (const step of steps) {
	console.log(`[verify:tool] ${step.label}`);
	const result = spawnSync(npmCmd, step.args, {
		stdio: 'inherit',
		env: { ...process.env, ...(step.env || {}) },
	});
	if (result.status !== 0) {
		console.error(`[verify:tool] FAILED: ${step.label}`);
		process.exit(result.status || 1);
	}
}

console.log(`[verify:tool] OK slug=${slug}`);
