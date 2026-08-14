#!/usr/bin/env node
/**
 * Gzip public/_pages .html files for R2 upload.
 * Existing .gz files are skipped when newer than the source unless --force is set.
 * Use --slug=<a,b> or --changed-tools to limit standalone runs to tool pages by catalog updatedAt.
 */
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import { createReadStream, createWriteStream } from 'node:fs';
import { markToolSlugsGenerated, resolveTargetToolSlugs, wantsChangedTools } from './lib/changed-tools.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const pagesRoot = path.join(root, 'public', '_pages');
const force = process.argv.includes('--force');
const argv = process.argv.slice(2);

/**
 * 递归列出目录下所有匹配后缀的文件。
 * @param {string} dir 目录
 * @param {string} suffix 后缀（如 `.html`）
 * @returns {Promise<string[]>}
 */
const listFiles = async (dir, suffix) => {
	/** @type {string[]} */
	const out = [];
	let entries;
	try {
		entries = await fs.readdir(dir, { withFileTypes: true });
	} catch {
		return out;
	}
	for (const ent of entries) {
		const full = path.join(dir, ent.name);
		if (ent.isDirectory()) {
			out.push(...(await listFiles(full, suffix)));
		} else if (ent.isFile() && ent.name.endsWith(suffix) && !ent.name.endsWith('.html.gz')) {
			out.push(full);
		}
	}
	return out;
};

/**
 * 将单个 HTML 文件 gzip 到旁路 .html.gz。
 * @param {string} htmlPath 明文路径
 * @returns {Promise<boolean>} 是否写入了新文件
 */
const gzipOne = async (htmlPath) => {
	const gzPath = `${htmlPath}.gz`;
	if (!force) {
		try {
			const [srcStat, gzStat] = await Promise.all([fs.stat(htmlPath), fs.stat(gzPath)]);
			if (gzStat.mtimeMs >= srcStat.mtimeMs) return false;
		} catch {
			// missing gz → write
		}
	}
	await pipeline(createReadStream(htmlPath), createGzip({ level: 9 }), createWriteStream(gzPath));
	return true;
};

const main = async () => {
	const targets = resolveTargetToolSlugs(argv, { requireTargets: false });
	let htmlFiles = await listFiles(pagesRoot, '.html');
	if (wantsChangedTools(argv) && !targets.slugs.length) {
		console.log('[gzip-pages] mode=updatedAt slugs=0; nothing to gzip');
		return;
	}
	if (targets.slugs.length) {
		const wanted = new Set(targets.slugs.map((slug) => `/tools/${slug}.html`));
		htmlFiles = htmlFiles.filter((file) => {
			const rel = path.relative(pagesRoot, file).split(path.sep).join('/');
			return [...wanted].some((suffix) => rel.endsWith(suffix));
		});
		const expected = targets.slugs.length;
		for (const slug of targets.slugs) {
			if (!htmlFiles.some((file) => file.split(path.sep).join('/').endsWith(`/tools/${slug}.html`))) {
				throw new Error(`[gzip-pages] missing prerendered HTML for slug=${slug}; run prerender:tools first`);
			}
		}
		console.log(`[gzip-pages] mode=${targets.source} slugs=${targets.slugs.join(',')} expectedSlugs=${expected}`);
	}
	let wrote = 0;
	let skipped = 0;
	for (const f of htmlFiles) {
		const did = await gzipOne(f);
		if (did) wrote += 1;
		else skipped += 1;
	}
	if (targets.slugs.length) {
		markToolSlugsGenerated(targets.slugs);
		console.log(`[gzip-pages] wrote tool generation state slugs=${targets.slugs.length}`);
	}
	console.log(`[gzip-pages] html=${htmlFiles.length} wrote=${wrote} skipped=${skipped} → ${path.relative(root, pagesRoot)}`);
};

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
