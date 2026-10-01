/**
 * P0 本地浏览器门禁：大 MP4 / 小样例 / 批量 ZIP / 大 MKV 诚实失败。
 * 起 localhost 静态服 public/，以便加载 mp4box 相对路径并启用 OPFS。
 * 用法：node scripts/dev/extract-audio-p0-browser-test.mjs
 */
import { chromium } from 'playwright-core';
import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '../..');
const publicDir = path.join(root, 'public');
const fixtures = '/tmp/ea-fixtures';
const largeMp4 = path.join(fixtures, 'large-stream.mp4');
const clip1 = path.join(fixtures, 'batch-clip-1.mp4');
const clip2 = path.join(fixtures, 'batch-clip-2.mp4');
const witcherDir = path.join(
	process.env.HOME || '',
	'Downloads/The.Witcher.S01E01.1080p.NF.WEBRip.DDP5.1.Atmos.x264-AMRAP[rartv]'
);
/** @type {string|null} */
let witcherMkv = null;
if (fs.existsSync(witcherDir)) {
	const hit = fs.readdirSync(witcherDir).find((n) => n.toLowerCase().endsWith('.mkv'));
	if (hit) witcherMkv = path.join(witcherDir, hit);
}

const report = {
	startedAt: new Date().toISOString(),
	cases: /** @type {Record<string, unknown>} */ ({}),
};

/**
 * 解析本机 Chrome / Chromium 可执行路径。
 * @returns {string|undefined}
 */
function resolveChrome() {
	if (process.env.CHROMIUM_PATH) return process.env.CHROMIUM_PATH;
	if (process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE) return process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE;
	const mac = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
	if (fs.existsSync(mac)) return mac;
	return undefined;
}

/**
 * 简易静态服务器（localhost 以启用 OPFS / 相对 vendor 路径）。
 * @returns {Promise<{base:string, close:()=>Promise<void>}>}
 */
function startStatic() {
	return new Promise((resolve, reject) => {
		const server = http.createServer((req, res) => {
			try {
				const urlPath = decodeURIComponent((req.url || '/').split('?')[0]);
				const rel = urlPath === '/' ? '/index.html' : urlPath;
				const filePath = path.join(publicDir, rel.replace(/^\//, ''));
				if (!filePath.startsWith(publicDir) || !fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
					res.writeHead(404);
					res.end('missing');
					return;
				}
				const ext = path.extname(filePath).toLowerCase();
				const types = {
					'.js': 'text/javascript',
					'.html': 'text/html',
					'.css': 'text/css',
					'.svg': 'image/svg+xml',
					'.wasm': 'application/wasm',
				};
				res.writeHead(200, { 'Content-Type': types[ext] || 'application/octet-stream' });
				fs.createReadStream(filePath).pipe(res);
			} catch (e) {
				res.writeHead(500);
				res.end(String(e));
			}
		});
		server.listen(0, '127.0.0.1', () => {
			const addr = server.address();
			const port = typeof addr === 'object' && addr ? addr.port : 0;
			resolve({
				base: 'http://127.0.0.1:' + port,
				close: () =>
					new Promise((r) => {
						server.close(() => r());
					}),
			});
		});
		server.on('error', reject);
	});
}

/**
 * 跑 extractFile。
 * @param {import('playwright-core').Page} page
 * @param {string} filePath
 */
async function apiExtract(page, filePath) {
	const buf = fs.readFileSync(filePath);
	const name = path.basename(filePath);
	const b64 = buf.toString('base64');
	return page.evaluate(
		async ({ b64, name }) => {
			const api = window.OftExtractAudio;
			if (!api || !api.extractFile) throw new Error('OftExtractAudio missing');
			const bin = Uint8Array.from(atob(b64), (c) => c.charCodeAt(0));
			const file = new File([bin], name, {
				type: name.endsWith('.mkv') ? 'video/x-matroska' : 'video/mp4',
			});
			const classified = api.classifyFile(file);
			const t0 = performance.now();
			try {
				const result = await api.extractFile(file, { format: 'mp3', bitrate: 192 });
				return {
					ok: true,
					ms: Math.round(performance.now() - t0),
					classified,
					mode: result.mode,
					ext: result.ext,
					size: result.blob && result.blob.size,
				};
			} catch (e) {
				return {
					ok: false,
					ms: Math.round(performance.now() - t0),
					classified,
					error: e && e.message ? e.message : String(e),
				};
			}
		},
		{ b64, name }
	);
}

const staticSrv = await startStatic();
const browser = await chromium.launch({
	headless: true,
	executablePath: resolveChrome(),
	args: ['--no-sandbox'],
});
const page = await browser.newPage();

try {
	/** localhost HTML 文档，便于 OPFS + `/vendor/...` 相对加载 mp4box。 */
	await page.goto(staticSrv.base + '/', { waitUntil: 'domcontentloaded' });
	await page.evaluate(async (base) => {
		/**
		 * 动态加载脚本。
		 * @param {string} src
		 */
		function load(src) {
			return new Promise((resolve, reject) => {
				const s = document.createElement('script');
				s.src = src;
				s.onload = () => resolve(null);
				s.onerror = () => reject(new Error('load ' + src));
				document.head.appendChild(s);
			});
		}
		await load(base + '/vendor/lamejs/lamejs.iife.js');
		await load(base + '/vendor/extract-audio/stable-extract.js');
	}, staticSrv.base);
	report.cases.caps = await page.evaluate(() => window.OftExtractAudio.getCapabilities());
	report.cases.origin = staticSrv.base;

	if (fs.existsSync(largeMp4)) {
		report.cases.large_mp4 = await apiExtract(page, largeMp4);
	} else {
		report.cases.large_mp4 = { ok: false, error: 'missing fixture ' + largeMp4 };
	}

	if (fs.existsSync(clip1)) {
		report.cases.small_mp4 = await apiExtract(page, clip1);
	}

	/** 批量用新 page，避免上一趟 OPFS 异步 NotFoundError 污染 evaluate。 */
	const batchPage = await browser.newPage();
	batchPage.on('pageerror', (e) => {
		report.cases.batch_pageerror = String(e && e.message ? e.message : e);
	});
	try {
		await batchPage.goto(staticSrv.base + '/', { waitUntil: 'domcontentloaded' });
		await batchPage.evaluate(async (base) => {
			/**
			 * @param {string} src
			 */
			function load(src) {
				return new Promise((resolve, reject) => {
					const s = document.createElement('script');
					s.src = src;
					s.onload = () => resolve(null);
					s.onerror = () => reject(new Error('load ' + src));
					document.head.appendChild(s);
				});
			}
			await load(base + '/vendor/lamejs/lamejs.iife.js');
			await load(base + '/vendor/extract-audio/stable-extract.js');
			await load(base + '/vendor/jszip/jszip.min.js');
		}, staticSrv.base);

		if (fs.existsSync(clip1) && fs.existsSync(clip2) && fs.existsSync(largeMp4)) {
			const payloads = [clip1, clip2, largeMp4].map((fp) => ({
				name: path.basename(fp),
				b64: fs.readFileSync(fp).toString('base64'),
			}));
			report.cases.batch_zip = await batchPage.evaluate(async (payloads) => {
				const api = window.OftExtractAudio;
				const zip = new window.JSZip();
				const rows = [];
				for (const p of payloads) {
					const bin = Uint8Array.from(atob(p.b64), (c) => c.charCodeAt(0));
					const file = new File([bin], p.name, { type: 'video/mp4' });
					const c = api.classifyFile(file);
					try {
						const r = await api.extractFile(file, { format: 'mp3', bitrate: 192 });
						zip.file(p.name.replace(/\.mp4$/i, '') + '.' + r.ext, r.blob);
						rows.push({ name: p.name, ok: true, mode: r.mode, classified: c });
					} catch (e) {
						rows.push({
							name: p.name,
							ok: false,
							error: e && e.message ? e.message : String(e),
							classified: c,
						});
					}
				}
				const blob = await zip.generateAsync({ type: 'blob' });
				return { rows, zipBytes: blob.size, okCount: rows.filter((r) => r.ok).length };
			}, payloads);
		}
	} finally {
		await batchPage.close();
	}

	if (witcherMkv) {
		const st = fs.statSync(witcherMkv);
		report.cases.witcher_mkv = await page.evaluate(
			async ({ name, size }) => {
				const api = window.OftExtractAudio;
				const fake = { name: name, type: 'video/x-matroska', size: size };
				const classified = api.classifyFile(fake);
				const t0 = performance.now();
				try {
					await api.extractFile(/** @type {any} */ (fake), { format: 'mp3' });
					return { ok: true, ms: Math.round(performance.now() - t0), classified };
				} catch (e) {
					return {
						ok: false,
						ms: Math.round(performance.now() - t0),
						classified,
						error: e && e.message ? e.message : String(e),
					};
				}
			},
			{ name: path.basename(witcherMkv), size: st.size }
		);
	} else {
		report.cases.witcher_mkv = { ok: false, skipped: true, error: 'witcher mkv not found' };
	}
} finally {
	await browser.close();
	await staticSrv.close();
}

report.finishedAt = new Date().toISOString();
const out = path.join(fixtures, 'p0-browser-test-report.json');
fs.mkdirSync(fixtures, { recursive: true });
fs.writeFileSync(out, JSON.stringify(report, null, 2));

/** 断言 P0 成功条件。 */
const fails = [];
const large = report.cases.large_mp4;
if (!large || !large.ok || !(String(large.mode || '').includes('mp4-webcodecs'))) {
	fails.push('large_mp4 expected mp4-webcodecs* pass, got ' + JSON.stringify(large));
}
const small = report.cases.small_mp4;
if (!small || !small.ok) fails.push('small_mp4 failed ' + JSON.stringify(small));
const batch = report.cases.batch_zip;
if (!batch || batch.okCount < 3 || !(batch.zipBytes > 0)) {
	fails.push('batch_zip expected 3 ok + zip, got ' + JSON.stringify(batch));
}
const mkv = report.cases.witcher_mkv;
if (mkv && !mkv.skipped) {
	if (mkv.ok) fails.push('witcher_mkv should fail, got ok');
	else if (!['err_container', 'err_limit', 'err_codec'].includes(String(mkv.error))) {
		fails.push('witcher_mkv unexpected error ' + mkv.error);
	}
	if (mkv.classified && mkv.classified.path !== 'reject') {
		fails.push('witcher_mkv classify should reject, got ' + JSON.stringify(mkv.classified));
	}
}

console.log(JSON.stringify({ out, fails, summary: report.cases }, null, 2));
if (fails.length) process.exitCode = 1;
