#!/usr/bin/env node
/**
 * 将 slug 水印烧进工具 OG 位图（1280×720）。
 * 文案：slug 中 '-' 换成空格。可被 capture-tool-og-images 在截图后调用，
 * 也可对本目录已有 webp 批量处理。
 *
 * 用法：
 *   node scripts/seo/stamp-og-watermark.mjs
 *   node scripts/seo/stamp-og-watermark.mjs --slugs=merge-pdf,organize-pdf
 *
 * 注意：对已烧过水印的文件再跑会叠第二层；刷新请用 capture --force（干净截图后再 stamp）。
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
/** 仓库根目录 */
const ROOT = path.resolve(__dirname, '../..');
/** OG 源图目录 */
const OUT_DIR = path.join(ROOT, 'public', 'og', 'tools');
/** 目标宽 */
const OG_W = 1280;
/** 目标高 */
const OG_H = 720;

/**
 * 把 kebab slug 转成水印文案（连字符 → 空格）。
 * @param {string} slug 工具 catalog slug
 * @returns {string}
 */
export const toolOgWatermarkLabel = (slug) => String(slug || '').replace(/-/g, ' ');

/**
 * XML 文本转义，写入 SVG。
 * @param {string} value 原始字符串
 * @returns {string}
 */
const escapeXml = (value) =>
	String(value || '')
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;');

/**
 * 按词换行，避免超长 slug 单行溢出画布。
 * @param {string} text 水印全文
 * @param {number} maxChars 每行大约字符上限
 * @returns {string[]}
 */
const wrapWatermarkLines = (text, maxChars) => {
	const words = String(text || '')
		.split(/\s+/)
		.filter(Boolean);
	/** @type {string[]} */
	const lines = [];
	let line = '';
	for (const word of words) {
		const next = line ? `${line} ${word}` : word;
		if (next.length > maxChars && line) {
			lines.push(line);
			line = word;
		} else {
			line = next;
		}
	}
	if (line) lines.push(line);
	return lines.length ? lines : [text];
};

/**
 * 生成覆盖整图的 SVG：半透明底 + 居中大字。
 * @param {string} label 水印文案
 * @returns {string}
 */
export const buildOgWatermarkSvg = (label) => {
	const maxChars = label.length > 36 ? 22 : 28;
	const lines = wrapWatermarkLines(label, maxChars);
	const fontSize = lines.length >= 3 ? 56 : lines.length === 2 ? 72 : 96;
	const lineHeight = fontSize * 1.18;
	const blockH = lineHeight * lines.length;
	const startY = OG_H / 2 - blockH / 2 + fontSize * 0.82;
	const tspans = lines
		.map(
			(line, i) =>
				`<tspan x="${OG_W / 2}" y="${startY + i * lineHeight}">${escapeXml(line)}</tspan>`
		)
		.join('');
	return `<svg xmlns="http://www.w3.org/2000/svg" width="${OG_W}" height="${OG_H}">
  <rect width="100%" height="100%" fill="rgb(15,23,42)" fill-opacity="0.36"/>
  <text text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="${fontSize}" fill="rgb(255,255,255)" fill-opacity="0.95" stroke="rgb(0,0,0)" stroke-opacity="0.45" stroke-width="6" paint-order="stroke fill">${tspans}</text>
</svg>`;
};

/**
 * 在图上烧入 slug 水印，输出 1280×720 WebP buffer。
 * @param {Buffer|string} input PNG/WebP buffer 或文件路径
 * @param {string} slug 工具 slug
 * @returns {Promise<Buffer>}
 */
export const stampOgWatermark = async (input, slug) => {
	const label = toolOgWatermarkLabel(slug);
	const svg = Buffer.from(buildOgWatermarkSvg(label));
	return sharp(input)
		.resize(OG_W, OG_H, { fit: 'cover', position: 'top' })
		.composite([{ input: svg, left: 0, top: 0 }])
		.webp({ quality: 82 })
		.toBuffer();
};

/**
 * 从 CLI 解析 --slugs=a,b。
 * @returns {string[]}
 */
const parseSlugFilter = () => {
	const hit = process.argv.find((a) => a.startsWith('--slugs='));
	if (!hit) return [];
	return hit
		.slice('--slugs='.length)
		.split(',')
		.map((s) => s.trim())
		.filter(Boolean);
};

/**
 * 批量给 public/og/tools/*.webp 烧水印（文件名即 slug）。
 * @returns {Promise<void>}
 */
const main = async () => {
	const filter = new Set(parseSlugFilter());
	if (!fs.existsSync(OUT_DIR)) {
		console.error(`[stamp-og] missing ${OUT_DIR}`);
		process.exit(1);
	}
	const names = fs
		.readdirSync(OUT_DIR)
		.filter((n) => n.endsWith('.webp') && !n.startsWith('.'));
	let wrote = 0;
	for (const name of names) {
		const slug = name.replace(/\.webp$/i, '');
		if (filter.size && !filter.has(slug)) continue;
		const filePath = path.join(OUT_DIR, name);
		const buf = await stampOgWatermark(filePath, slug);
		fs.writeFileSync(filePath, buf);
		wrote += 1;
		console.log(`[stamp-og] ${slug}`);
	}
	console.log(`[stamp-og] wrote=${wrote}`);
};

const isDirectRun = (() => {
	const entry = process.argv[1];
	if (!entry) return false;
	try {
		return import.meta.url === pathToFileURL(entry).href;
	} catch {
		return false;
	}
})();

if (isDirectRun) {
	main().catch((err) => {
		console.error(err);
		process.exit(1);
	});
}
