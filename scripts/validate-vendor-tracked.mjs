#!/usr/bin/env node
/**
 * 门禁：同域 vendor 必须落盘且被 git 跟踪（不得被 ignore）。
 *
 * 背景：生产由 Cloudflare 拉 GitHub；本地 predeploy 不会在远端跑。
 * 若 HTML 引用 /vendor/* 但资产未入库，线上会 404（全站样式错位 / 图片工具失败）。
 *
 * 用法：npm run lint:vendor
 */
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

/** 仓库根目录。 */
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

/**
 * 生产必须存在的相对路径（chrome + 图片工具链）。
 * 升级依赖后若路径变更，同步改 copy-*-vendor.mjs 与本列表。
 */
const REQUIRED = [
	'public/vendor/bootstrap/bootstrap.min.css',
	'public/vendor/bootstrap/bootstrap.bundle.min.js',
	'public/vendor/fonts/plus-jakarta-sans.css',
	'public/vendor/fonts/plus-jakarta-sans/plus-jakarta-sans-latin-400-normal.woff2',
	'public/vendor/gifenc/gifenc.esm.js',
	'public/vendor/wasm-feature-detect/dist/esm/index.js',
	'public/vendor/jsquash/jpeg/codec/enc/mozjpeg_enc.wasm',
	'public/vendor/jsquash/webp/codec/enc/webp_enc.wasm',
	'public/vendor/jsquash/avif/codec/enc/avif_enc.wasm',
	'public/vendor/jsquash/oxipng/codec/pkg/squoosh_oxipng_bg.wasm',
];

/**
 * 在仓库根执行 git 子命令。
 * @param {string[]} args git 参数
 * @returns {{ ok: boolean, stdout: string, stderr: string }}
 */
function git(args) {
	try {
		const stdout = execFileSync('git', args, {
			cwd: ROOT,
			encoding: 'utf8',
			stdio: ['ignore', 'pipe', 'pipe'],
		});
		return { ok: true, stdout: String(stdout).trim(), stderr: '' };
	} catch (err) {
		return {
			ok: false,
			stdout: String(err.stdout || '').trim(),
			stderr: String(err.stderr || err.message || '').trim(),
		};
	}
}

/** @type {string[]} */
const errors = [];

for (const rel of REQUIRED) {
	const abs = path.join(ROOT, rel);
	if (!fs.existsSync(abs)) {
		errors.push(`missing on disk: ${rel} (run npm run vendor:site-chrome && npm run vendor:image-optimizer)`);
		continue;
	}

	const ignored = git(['check-ignore', '-v', rel]);
	if (ignored.ok && ignored.stdout) {
		errors.push(`gitignored (must be tracked): ${rel}\n  → ${ignored.stdout}`);
		continue;
	}

	const tracked = git(['ls-files', '--error-unmatch', rel]);
	if (!tracked.ok) {
		errors.push(`not tracked by git: ${rel} (git add ${rel} && commit)`);
	}
}

/** 禁止把整个 public/vendor 树再写回 ignore。 */
const gi = path.join(ROOT, '.gitignore');
if (fs.existsSync(gi)) {
	const text = fs.readFileSync(gi, 'utf8');
	const bad = text.split(/\r?\n/).filter((line) => {
		const t = line.trim();
		if (!t || t.startsWith('#')) return false;
		if (t.startsWith('!')) return false;
		return (
			t === 'public/vendor/' ||
			t === 'public/vendor/**' ||
			t === 'public/vendor/bootstrap/' ||
			t === 'public/vendor/fonts/' ||
			t === 'public/vendor/jsquash/' ||
			t === 'public/vendor/gifenc/' ||
			t === 'public/vendor/wasm-feature-detect/'
		);
	});
	for (const line of bad) {
		errors.push(`.gitignore must not ignore vendor chrome/image assets: "${line}"`);
	}
}

if (errors.length) {
	console.error('lint:vendor FAILED — Cloudflare Git deploy would ship broken /vendor/*\n');
	for (const e of errors) console.error(`- ${e}`);
	console.error('\nFix: regenerate with vendor:* scripts, ensure paths are committed, do not re-add public/vendor/* to .gitignore.');
	process.exit(1);
}

console.log(`lint:vendor OK (${REQUIRED.length} required paths tracked)`);
