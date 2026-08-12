#!/usr/bin/env node
/**
 * 将 public/_pages 下所有 .html 压成同路径 .html.gz（R2 上传源）。
 * 已存在且源 HTML mtime 未变新的 .gz 可跳过（用 --force 强制重压）。
 */
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import { createReadStream, createWriteStream } from 'node:fs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const pagesRoot = path.join(root, 'public', '_pages');
const force = process.argv.includes('--force');

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
	const htmlFiles = await listFiles(pagesRoot, '.html');
	let wrote = 0;
	let skipped = 0;
	for (const f of htmlFiles) {
		const did = await gzipOne(f);
		if (did) wrote += 1;
		else skipped += 1;
	}
	console.log(`[gzip-pages] html=${htmlFiles.length} wrote=${wrote} skipped=${skipped} → ${path.relative(root, pagesRoot)}`);
};

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
