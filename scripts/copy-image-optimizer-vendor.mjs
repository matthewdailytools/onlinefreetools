/**
 * 将图片相关第三方包复制到 public/vendor，供工具页 ESM 懒加载：
 * - @jsquash + wasm-feature-detect（图片优化；相对路径解析 .wasm）
 * - gifenc（images-to-gif；避免进页依赖 jsDelivr）
 * 用法：node scripts/copy-image-optimizer-vendor.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const nm = path.join(root, 'node_modules');
const outRoot = path.join(root, 'public', 'vendor');

/**
 * 递归复制目录。
 * @param {string} src 源目录
 * @param {string} dest 目标目录
 */
function copyDir(src, dest) {
	fs.mkdirSync(dest, { recursive: true });
	for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
		const s = path.join(src, entry.name);
		const d = path.join(dest, entry.name);
		if (entry.isDirectory()) copyDir(s, d);
		else fs.copyFileSync(s, d);
	}
}

/** 需要整包 vendoring 的目录 → 输出相对 public/vendor 的路径 */
const packages = [
	{ from: path.join(nm, '@jsquash', 'jpeg'), to: path.join(outRoot, 'jsquash', 'jpeg') },
	{ from: path.join(nm, '@jsquash', 'webp'), to: path.join(outRoot, 'jsquash', 'webp') },
	{ from: path.join(nm, '@jsquash', 'avif'), to: path.join(outRoot, 'jsquash', 'avif') },
	{ from: path.join(nm, '@jsquash', 'oxipng'), to: path.join(outRoot, 'jsquash', 'oxipng') },
	{ from: path.join(nm, 'wasm-feature-detect'), to: path.join(outRoot, 'wasm-feature-detect') },
];

for (const p of packages) {
	if (!fs.existsSync(p.from)) {
		console.error('Missing dependency:', p.from);
		process.exit(1);
	}
	if (fs.existsSync(p.to)) fs.rmSync(p.to, { recursive: true, force: true });
	copyDir(p.from, p.to);
	console.log('Copied', path.relative(root, p.from), '→', path.relative(root, p.to));
}

/**
 * 仅复制 gifenc ESM 构建产物（约 9KB），供 /tools/images-to-gif 同域懒加载。
 */
const gifencEsm = path.join(nm, 'gifenc', 'dist', 'gifenc.esm.js');
const gifencOutDir = path.join(outRoot, 'gifenc');
const gifencOut = path.join(gifencOutDir, 'gifenc.esm.js');
if (!fs.existsSync(gifencEsm)) {
	console.error('Missing dependency:', gifencEsm);
	process.exit(1);
}
fs.mkdirSync(gifencOutDir, { recursive: true });
fs.copyFileSync(gifencEsm, gifencOut);
console.log('Copied', path.relative(root, gifencEsm), '→', path.relative(root, gifencOut));

console.log('Done. Serve ESM from /vendor/jsquash/* and /vendor/gifenc/*.');
