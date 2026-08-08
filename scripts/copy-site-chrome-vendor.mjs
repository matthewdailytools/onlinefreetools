/**
 * 将首屏关键 CSS/JS/字体复制到 public/vendor，避免依赖外网 CDN：
 * - bootstrap 5.3.3（替代 cdnjs）
 * - Plus Jakarta Sans woff2（替代 fonts.googleapis.com）
 * 用法：node scripts/copy-site-chrome-vendor.mjs
 * build:site / start:dev 会调用。
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const nm = path.join(root, 'node_modules');
const outRoot = path.join(root, 'public', 'vendor');

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

const bootstrapCss = path.join(nm, 'bootstrap', 'dist', 'css', 'bootstrap.min.css');
const bootstrapJs = path.join(nm, 'bootstrap', 'dist', 'js', 'bootstrap.bundle.min.js');
copyFile(bootstrapCss, path.join(outRoot, 'bootstrap', 'bootstrap.min.css'));
copyFile(bootstrapJs, path.join(outRoot, 'bootstrap', 'bootstrap.bundle.min.js'));

/** 首屏字重（正体）；不含 italic，减小体积。含 latin / latin-ext / cyrillic 以覆盖本站语种。 */
const fontWeights = ['400', '500', '600', '700', '800'];
/** 包内实际提供的子集（无完整 cyrillic；俄文回退系统字体）。 */
const fontSubsets = ['latin', 'latin-ext'];
const fontSrcDir = path.join(nm, '@fontsource', 'plus-jakarta-sans', 'files');
const fontOutDir = path.join(outRoot, 'fonts', 'plus-jakarta-sans');

for (const subset of fontSubsets) {
	for (const weight of fontWeights) {
		const name = `plus-jakarta-sans-${subset}-${weight}-normal.woff2`;
		const from = path.join(fontSrcDir, name);
		if (!fs.existsSync(from)) continue;
		copyFile(from, path.join(fontOutDir, name));
	}
}

/**
 * 生成本地 @font-face 表，供布局引用（display=swap，不阻塞首屏文字）。
 */
const faceBlocks = [];
for (const weight of fontWeights) {
	const sources = [];
	for (const subset of fontSubsets) {
		const name = `plus-jakarta-sans-${subset}-${weight}-normal.woff2`;
		if (fs.existsSync(path.join(fontOutDir, name))) {
			sources.push(`url('/vendor/fonts/plus-jakarta-sans/${name}') format('woff2')`);
		}
	}
	if (!sources.length) continue;
	faceBlocks.push(`@font-face{
  font-family:'Plus Jakarta Sans';
  font-style:normal;
  font-weight:${weight};
  font-display:swap;
  src:local('Plus Jakarta Sans'),${sources.join(',')};
}`);
}

const fontCssPath = path.join(outRoot, 'fonts', 'plus-jakarta-sans.css');
fs.mkdirSync(path.dirname(fontCssPath), { recursive: true });
fs.writeFileSync(fontCssPath, faceBlocks.join('\n') + '\n', 'utf8');
console.log('Wrote', path.relative(root, fontCssPath));

console.log('Done. Serve chrome from /vendor/bootstrap/* and /vendor/fonts/*.');
