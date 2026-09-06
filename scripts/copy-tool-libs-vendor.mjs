/**
 * 将工具页浏览器库复制到 public/vendor，页面只引用同域 /vendor/*，禁止外网 CDN。
 * 用法：node scripts/copy-tool-libs-vendor.mjs
 * build:site / start:dev 会调用。升级 package.json 版本后须重跑并 commit。
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const nm = path.join(root, 'node_modules');
const outRoot = path.join(root, 'public', 'vendor');
const require = createRequire(import.meta.url);
/** esbuild 已是本仓库 devDependency，用于把 Ajv 打成浏览器 ESM。 */
const esbuild = require('esbuild');

/**
 * 确保目录存在后复制单个文件。
 * @param {string} from 源文件
 * @param {string} to 目标文件
 */
function copyFile(from, to) {
	if (!fs.existsSync(from)) {
		console.error('Missing dependency:', from);
		process.exit(1);
	}
	fs.mkdirSync(path.dirname(to), { recursive: true });
	fs.copyFileSync(from, to);
	console.log('Copied', path.relative(root, from), '→', path.relative(root, to));
}

/**
 * node_modules 源 → public/vendor 目标（与页面引用路径一致）。
 * @type {{ from: string, to: string }[]}
 */
const files = [
	{ from: path.join(nm, 'pdf-lib', 'dist', 'pdf-lib.min.js'), to: path.join(outRoot, 'pdf-lib', 'pdf-lib.min.js') },
	{
		from: path.join(nm, '@cantoo', 'pdf-lib', 'dist', 'pdf-lib.min.js'),
		to: path.join(outRoot, 'cantoo-pdf-lib', 'pdf-lib.min.js'),
	},
	{ from: path.join(nm, 'pdfjs-dist', 'build', 'pdf.min.mjs'), to: path.join(outRoot, 'pdfjs', 'pdf.min.mjs') },
	{
		from: path.join(nm, 'pdfjs-dist', 'build', 'pdf.worker.min.mjs'),
		to: path.join(outRoot, 'pdfjs', 'pdf.worker.min.mjs'),
	},
	{
		from: path.join(nm, 'html2pdf.js', 'dist', 'html2pdf.bundle.min.js'),
		to: path.join(outRoot, 'html2pdf', 'html2pdf.bundle.min.js'),
	},
	{ from: path.join(nm, 'dompurify', 'dist', 'purify.min.js'), to: path.join(outRoot, 'dompurify', 'purify.min.js') },
	{ from: path.join(nm, 'fflate', 'umd', 'index.js'), to: path.join(outRoot, 'fflate', 'index.js') },
	{
		from: path.join(nm, 'mammoth', 'mammoth.browser.min.js'),
		to: path.join(outRoot, 'mammoth', 'mammoth.browser.min.js'),
	},
	{ from: path.join(nm, 'diff', 'dist', 'diff.min.js'), to: path.join(outRoot, 'diff', 'diff.min.js') },
	{ from: path.join(nm, 'crypto-js', 'crypto-js.js'), to: path.join(outRoot, 'crypto-js', 'crypto-js.min.js') },
	{
		from: path.join(nm, 'pptxgenjs', 'dist', 'pptxgen.bundle.js'),
		to: path.join(outRoot, 'pptxgenjs', 'pptxgen.bundle.js'),
	},
	{ from: path.join(nm, 'js-yaml', 'dist', 'js-yaml.min.js'), to: path.join(outRoot, 'js-yaml', 'js-yaml.min.js') },
	{ from: path.join(nm, 'papaparse', 'papaparse.min.js'), to: path.join(outRoot, 'papaparse', 'papaparse.min.js') },
	{ from: path.join(nm, 'marked', 'marked.min.js'), to: path.join(outRoot, 'marked', 'marked.min.js') },
	{ from: path.join(nm, 'turndown', 'lib', 'turndown.browser.umd.js'), to: path.join(outRoot, 'turndown', 'turndown.js') },
	{ from: path.join(nm, 'xlsx', 'dist', 'xlsx.full.min.js'), to: path.join(outRoot, 'xlsx', 'xlsx.full.min.js') },
	{ from: path.join(nm, 'jszip', 'dist', 'jszip.min.js'), to: path.join(outRoot, 'jszip', 'jszip.min.js') },
	{ from: path.join(nm, 'docx', 'build', 'index.umd.js'), to: path.join(outRoot, 'docx', 'index.umd.js') },
	{
		from: path.join(nm, 'html2canvas', 'dist', 'html2canvas.min.js'),
		to: path.join(outRoot, 'html2canvas', 'html2canvas.min.js'),
	},
	{ from: path.join(nm, 'exifr', 'dist', 'full.umd.js'), to: path.join(outRoot, 'exifr', 'full.umd.js') },
];

for (const item of files) {
	copyFile(item.from, item.to);
}

/**
 * Ajv 无浏览器 UMD；打成 ESM 供 json-schema-validator 同域 import。
 */
const ajvOut = path.join(outRoot, 'ajv', 'ajv.esm.js');
fs.mkdirSync(path.dirname(ajvOut), { recursive: true });
esbuild.buildSync({
	entryPoints: [path.join(nm, 'ajv', 'dist', 'ajv.js')],
	bundle: true,
	format: 'esm',
	platform: 'neutral',
	outfile: ajvOut,
	logLevel: 'warning',
});
console.log('Bundled ajv →', path.relative(root, ajvOut));

console.log('Done. Serve tool libs from /vendor/{lib}/* (no CDN).');
