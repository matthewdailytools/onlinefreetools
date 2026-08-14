#!/usr/bin/env node
/**
 * Bump one or more tool catalog shard updatedAt markers to the current ISO time.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { PROJECT_ROOT, parseSlugList, readArgValue } from './lib/changed-tools.mjs';

const argv = process.argv.slice(2);
const slugs = parseSlugList(
	readArgValue(argv, ['--slug', '--slugs', '--tool', '--tools']) ||
		readArgValue(argv, ['-s']) ||
		process.env.TOOL_SLUGS ||
		process.env.TOOL_SLUG
);
const updatedAt = readArgValue(argv, ['--time', '--updated-at']) || new Date().toISOString();

if (!slugs.length) {
	console.error('Usage: npm run tool:touch -- --slug=<slug[,slug]> [--time=<ISO>]');
	process.exit(1);
}
if (!Number.isFinite(Date.parse(updatedAt))) {
	console.error(`[tool-touch] invalid --time value: ${updatedAt}`);
	process.exit(1);
}

let count = 0;
for (const slug of slugs) {
	const file = path.join(PROJECT_ROOT, 'src/site/tool-catalog.d', `${slug}.json`);
	const shard = JSON.parse(readFileSync(file, 'utf8'));
	const next = {};
	for (const [key, value] of Object.entries(shard)) {
		next[key] = value;
		if (key === 'path') next.updatedAt = updatedAt;
	}
	if (!('updatedAt' in next)) next.updatedAt = updatedAt;
	writeFileSync(file, `${JSON.stringify(next, null, 2)}\n`, 'utf8');
	count += 1;
	console.log(`[tool-touch] ${slug} updatedAt=${updatedAt}`);
}
console.log(`[tool-touch] updated ${count} tool shard(s)`);
