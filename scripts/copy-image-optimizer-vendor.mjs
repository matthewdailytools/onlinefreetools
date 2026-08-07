/**
 * 将 @jsquash 编解码包与 wasm-feature-detect 复制到 public/vendor，
 * 供图片优化页点击后以 ESM 懒加载（相对路径解析 .wasm）。
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

/** 需要 vendoring 的包 → 输出相对 public/vendor 的路径 */
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

console.log('Done. Serve ESM from /vendor/jsquash/* with import map for wasm-feature-detect.');
