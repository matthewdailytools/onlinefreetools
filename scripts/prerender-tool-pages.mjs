#!/usr/bin/env node
/**
 * Bundle the prerender entry and write public/_pages/{lang}/tools/{slug}.html.
 * Use --slug=<a,b> or --changed-tools to limit the tool set by catalog updatedAt.
 */
import { spawnSync } from 'node:child_process';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { createRequire } from 'node:module';
import { resolveTargetToolSlugs, wantsChangedTools } from './lib/changed-tools.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const entry = path.join(root, 'scripts', 'prerender-tool-pages-entry.ts');
const outDir = path.join(root, '.cache');
const outFile = path.join(outDir, 'prerender-tool-pages.cjs');
const require = createRequire(import.meta.url);
const argv = process.argv.slice(2);

/**
 * 解析 esbuild（优先本包，其次 wrangler 依赖树）。
 * @returns {typeof import('esbuild')}
 */
const loadEsbuild = () => {
	try {
		return require('esbuild');
	} catch {
		try {
			return require(path.join(root, 'node_modules', 'wrangler', 'node_modules', 'esbuild'));
		} catch {
			// wrangler 可能 hoist esbuild
		}
	}
	try {
		const wranglerPkg = path.dirname(require.resolve('wrangler/package.json'));
		return require(path.join(wranglerPkg, 'node_modules', 'esbuild'));
	} catch {
		throw new Error('esbuild not found — run npm i -D esbuild');
	}
};

const main = async () => {
	await fs.mkdir(outDir, { recursive: true });
	const forceFullTools = argv.includes('--full') || argv.includes('--all');
	const targets = forceFullTools
		? { slugs: [], source: 'all', changedPaths: [] }
		: resolveTargetToolSlugs(argv, { requireTargets: false });
	if (!forceFullTools && wantsChangedTools(argv) && !targets.slugs.length) {
		console.log('[prerender-tools] mode=updatedAt slugs=0; nothing to prerender');
		return;
	}
	const env = { ...process.env };
	if (targets.slugs.length) {
		env.PRERENDER_TOOL_SLUGS = targets.slugs.join(',');
		console.log(`[prerender-tools] mode=${targets.source} slugs=${targets.slugs.join(',')}`);
	} else {
		console.log('[prerender-tools] mode=all');
	}
	const esbuild = loadEsbuild();
	const result = await esbuild.build({
		entryPoints: [entry],
		bundle: true,
		platform: 'node',
		format: 'cjs',
		target: 'node20',
		outfile: outFile,
		logLevel: 'warning',
		// Worker 专用模块在 Node 预渲染中不应出现；页面渲染为纯字符串。
		packages: 'bundle',
	});
	if (result.errors?.length) {
		console.error(result.errors);
		process.exit(1);
	}
	const run = spawnSync(process.execPath, [outFile], {
		cwd: root,
		stdio: 'inherit',
		env,
	});
	if (run.status !== 0) process.exit(run.status || 1);
};

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
