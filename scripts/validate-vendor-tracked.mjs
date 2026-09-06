#!/usr/bin/env node
/**
 * 门禁：同域 vendor 必须落盘且被 git 跟踪（不得被 ignore）。
 *
 * 背景：生产由 Cloudflare 拉 GitHub；本地 predeploy 不会在远端跑。
 * 若 HTML 引用 /vendor/* 但资产未入库，线上会 404（全站样式错位 / 图片工具失败 / 工具页脚本失败）。
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
 * 生产必须存在的相对路径（chrome + 图片工具链 + 工具页浏览器库）。
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
	'public/vendor/pdf-lib/pdf-lib.min.js',
	'public/vendor/cantoo-pdf-lib/pdf-lib.min.js',
	'public/vendor/pdfjs/pdf.min.mjs',
	'public/vendor/pdfjs/pdf.worker.min.mjs',
	'public/vendor/html2pdf/html2pdf.bundle.min.js',
	'public/vendor/dompurify/purify.min.js',
	'public/vendor/fflate/index.js',
	'public/vendor/mammoth/mammoth.browser.min.js',
	'public/vendor/diff/diff.min.js',
	'public/vendor/crypto-js/crypto-js.min.js',
	'public/vendor/pptxgenjs/pptxgen.bundle.js',
	'public/vendor/js-yaml/js-yaml.min.js',
	'public/vendor/papaparse/papaparse.min.js',
	'public/vendor/marked/marked.min.js',
	'public/vendor/turndown/turndown.js',
	'public/vendor/xlsx/xlsx.full.min.js',
	'public/vendor/jszip/jszip.min.js',
	'public/vendor/docx/index.umd.js',
	'public/vendor/html2canvas/html2canvas.min.js',
	'public/vendor/exifr/full.umd.js',
	'public/vendor/ajv/ajv.esm.js',
];

/**
 * 页面源码中禁止出现的第三方脚本 CDN 主机（Turnstile 挑战脚本除外）。
 * @type {RegExp[]}
 */
const FORBIDDEN_CDN = [
	/cdn\.jsdelivr\.net/i,
	/cdnjs\.cloudflare\.com/i,
	/unpkg\.com/i,
	/ajax\.googleapis\.com/i,
	/cdn\.bootcdn\.net/i,
	/cdn\.bootcss\.com/i,
];

/**
 * 允许的第三方脚本：Cloudflare Turnstile 是实时挑战服务，不能拷到 /vendor。
 * @param {string} text 文件全文
 * @returns {string} 去掉允许例外后的文本
 */
function stripAllowedThirdParty(text) {
	return text.replace(/https:\/\/challenges\.cloudflare\.com\/turnstile\/v0\/api\.js/g, '');
}

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

/**
 * 递归列出目录下的文件。
 * @param {string} dir 绝对路径
 * @param {string[]} acc 收集的绝对路径
 * @returns {string[]}
 */
function walkFiles(dir, acc = []) {
	if (!fs.existsSync(dir)) return acc;
	for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
		const abs = path.join(dir, ent.name);
		if (ent.isDirectory()) walkFiles(abs, acc);
		else acc.push(abs);
	}
	return acc;
}

/** @type {string[]} */
const errors = [];

for (const rel of REQUIRED) {
	const abs = path.join(ROOT, rel);
	if (!fs.existsSync(abs)) {
		errors.push(
			`missing on disk: ${rel} (run npm run vendor:site-chrome && npm run vendor:image-optimizer && npm run vendor:tool-libs)`,
		);
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
			t === 'public/vendor/*' ||
			t.startsWith('public/vendor/')
		);
	});
	for (const line of bad) {
		errors.push(`.gitignore must not ignore vendor assets: "${line}"`);
	}
}

/** 扫描工具页与共用页脚本，禁止再指向外网 JS CDN。 */
const pageScanRoots = [path.join(ROOT, 'src', 'pages'), path.join(ROOT, 'src', 'site')];
for (const scanRoot of pageScanRoots) {
	for (const abs of walkFiles(scanRoot)) {
		if (!/\.(ts|js|mjs)$/.test(abs)) continue;
		const raw = fs.readFileSync(abs, 'utf8');
		const text = stripAllowedThirdParty(raw);
		for (const re of FORBIDDEN_CDN) {
			if (re.test(text)) {
				errors.push(`page source still points at a JS CDN (${re}): ${path.relative(ROOT, abs)}`);
			}
		}
	}
}

if (errors.length) {
	console.error('lint:vendor FAILED — Cloudflare Git deploy would ship broken /vendor/* or pages still use a JS CDN\n');
	for (const e of errors) console.error(`- ${e}`);
	console.error(
		'\nFix: regenerate with vendor:* scripts, git add public/vendor/**, do not re-add public/vendor to .gitignore, replace page <script src> with /vendor/*.',
	);
	process.exit(1);
}

console.log(`lint:vendor OK (${REQUIRED.length} required paths tracked; no JS CDN in page sources)`);
