#!/usr/bin/env node
/**
 * 用 esbuild 打包预渲染入口并执行，写出 public/_pages/{lang}/tools/{slug}.html。
 */
import { spawnSync } from 'node:child_process';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { createRequire } from 'node:module';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const entry = path.join(root, 'scripts', 'prerender-tool-pages-entry.ts');
const outDir = path.join(root, '.cache');
const outFile = path.join(outDir, 'prerender-tool-pages.cjs');
const require = createRequire(import.meta.url);

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
		env: process.env,
	});
	if (run.status !== 0) process.exit(run.status || 1);
};

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
