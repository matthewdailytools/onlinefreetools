#!/usr/bin/env node
/**
 * 对 GSC「已抓取尚未索引」列表里的 URL 做生产环境功能冒烟。
 *
 * 范围：
 * - 全部 92 条：HTTP（跟随重定向，Accept: text/html）
 * - 独立工具 slug：Playwright 打开 GSC 原 URL（/en/ 会 301 到规范路径），点 Load sample / 主按钮
 * - 非工具（devlogs / api / hub）：只记 HTTP，不点控件
 *
 * 用法：
 *   node scripts/qa/run-gsc-crawled-url-qa.mjs
 *   node scripts/qa/run-gsc-crawled-url-qa.mjs --csv=docs/seo/reviews/2026-09-07/表格.csv
 *   node scripts/qa/run-gsc-crawled-url-qa.mjs --slugs=merge-pdf,unlock-pdf
 *
 * 输出：
 *   docs/seo/reviews/2026-09-07/05-tool-function-qa-results.json
 *   docs/seo/reviews/2026-09-07/05-tool-function-qa.md
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright-core';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '../..');
/** 本机 Chrome；可用 CHROME_PATH 覆盖。 */
const CHROME =
	process.env.CHROME_PATH ||
	'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

const args = process.argv.slice(2);
const getArg = (name, fallback = '') => {
	const hit = args.find((a) => a.startsWith(`--${name}=`));
	return hit ? hit.slice(name.length + 3) : fallback;
};

const CSV_PATH = path.resolve(ROOT, getArg('csv', 'docs/seo/reviews/2026-09-07/表格.csv'));
const OUT_DIR = path.dirname(CSV_PATH);
const OUT_JSON = path.join(OUT_DIR, '05-tool-function-qa-results.json');
const OUT_MD = path.join(OUT_DIR, '05-tool-function-qa.md');
const EXTRA_SLUGS = getArg('slugs', '')
	.split(',')
	.map((s) => s.trim())
	.filter(Boolean);

/**
 * 自动测无法证明真实用户文件/外设/付费 AI 的 slug。即使样例绿也标需手动。
 * @type {Record<string, string>}
 */
const ALWAYS_MANUAL = {
	'unlock-pdf': '必须用真实加密 PDF + 用户密码；内置样例无法证明解锁路径',
	'protect-pdf': '需用下载后的加密 PDF 在外部阅读器验证打开密码',
	'sign-pdf-document': '手写签名画布与导出观感需肉眼看',
	'fill-out-pdf-form': '需用带 AcroForm 的真实表单核对字段',
	'edit-pdf-form-fields': '字段增删改位置需对照真实表单',
	'make-pdf-flipbook': '翻页动画、触控/键盘翻页需手动',
	'open-pdf-in-browser': '内嵌阅读器缩放滚动需手动',
	'excel-compare-files': '真实工作簿多表/公式差异需手动',
	'batch-watermark-product-photos': '多图水印位置与透明度需肉眼看',
	'add-text-to-pdf-file': '叠加文字坐标与中文字体需肉眼',
	'write-pdf-document-online': '多页排版需打开下载件',
	'convert-word-document-to-pdf': '复杂 .docx 保真需手动',
	'turn-pdf-into-word-document': '版式还原需在 Word 里打开核对',
	'turn-pdf-into-editable-document': '扫描件/可选中文字路径需手动',
	'merge-pdf': '多文件页序需翻页核对',
	'split-pdf': '拆出的文件页范围需手动',
	'compress-pdf': '画质损失与体积需对照原文件',
	'crop-pdf': '裁切框对准页边距需肉眼',
	'organize-pdf': '删页/重排后页序需翻页核对',
	'rotate-pdf': '旋转方向是否转正需肉眼',
	'pdf-watermark': '每页水印位置、透明度需肉眼',
	'pdf-page-numbers': '页码位置与起始页需肉眼',
	'edit-pdf-text-online': '可选中文字覆盖是否错位需对照原 PDF',
	'check-pdf-a-compliance': '指标解读需对照预检软件',
	'convert-pdf-to-dwg': 'DXF 在 CAD 里能否打开需手动',
	'android-prompt-builder': '可选 AI 扩写未点',
	'film-prompt-builder': '可选 AI 扩写未点',
	'midjourney-prompt-builder': '可选 AI 扩写未点',
	'product-design-prompt-builder': '可选 AI 扩写未点',
	'short-drama-prompt-generator': '可选 AI 扩写未点',
	'sketch-prompt-generator': '可选 AI 扩写未点',
	'writing-prompt-generator': '可选 AI 扩写未点',
	'open-graph-preview': '社交卡片依赖目标站 meta',
	'find-and-validate-xml-sitemap': '依赖目标站 sitemap 形态',
	'check-ssl-certificate-expiration': '依赖 TLS 证书链',
	'validate-security-txt': '依赖 /.well-known/security.txt',
	'file-metadata-analyzer': '真实文件元数据字段需对照原文件',
	'bulk-convert-images-to-jpg': '多图色彩/体积需肉眼',
	'bulk-convert-images-to-png': '多图色彩/体积需肉眼',
	'bulk-compress-png-images': '压缩画质需对照原图',
	'bulk-compress-product-photos': '商品图观感需肉眼',
	'flip-image': '翻转方向需对照原图',
	'youtube-thumbnail-size': '尺寸框与平台规范对照即可；导出图需肉眼',
	'instagram-post-size': '画布比例需肉眼',
	'amazon-main-image-size': '主图留白规范需肉眼',
	'pdf-page-to-image-sizes': '页栅格清晰度需肉眼',
};

/**
 * 解析 GSC CSV：网址,上次抓取日期,状态。
 * @param {string} text
 * @returns {Array<{url: string, crawled: string, status: string, path: string}>}
 */
function parseCsv(text) {
	const lines = text.trim().split(/\r?\n/).slice(1);
	return lines
		.map((line) => {
			const [url, crawled, status] = line.split(',');
			if (!url) return null;
			let pathName = '/';
			try {
				pathName = new URL(url).pathname;
			} catch {
				pathName = url;
			}
			return { url, crawled, status, path: pathName };
		})
		.filter(Boolean);
}

/**
 * 从路径判断条目类型，并抽出工具 slug。
 * @param {string} pathname
 * @returns {{kind: string, slug: string, locale: string}}
 */
function classifyPath(pathname) {
	if (pathname.startsWith('/api/')) return { kind: 'api', slug: '', locale: '' };
	if (pathname.startsWith('/devlogs/')) return { kind: 'devlog', slug: '', locale: '' };
	if (/\/tool-type(\/|$)/.test(pathname)) return { kind: 'hub', slug: '', locale: '' };
	if (/\/topics(\/|$)/.test(pathname)) return { kind: 'hub', slug: '', locale: '' };
	if (/\/where-to-use-tools(\/|$)/.test(pathname)) return { kind: 'hub', slug: '', locale: '' };
	const m = pathname.match(/^(?:\/(en|zh|es|ar|pt|id|fr|ja|ru|de))?\/tools\/([a-z0-9-]+)\/?$/);
	if (m) return { kind: 'tool', slug: m[2], locale: m[1] || 'en-default' };
	return { kind: 'other', slug: '', locale: '' };
}

/**
 * 每个 slug 选一条代表 URL：优先无前缀英文，否则列表中第一条。
 * @param {Array<{url: string, path: string}>} rows
 * @returns {Map<string, string>}
 */
function pickToolUrls(rows) {
	/** @type {Map<string, string>} */
	const map = new Map();
	for (const row of rows) {
		const { kind, slug } = classifyPath(row.path);
		if (kind !== 'tool' || !slug) continue;
		const prev = map.get(slug);
		if (!prev || row.path.startsWith('/tools/')) map.set(slug, row.url);
	}
	return map;
}

/**
 * 跟随重定向做 HTML GET，记录终态。
 * @param {string} url
 * @returns {Promise<{url: string, status: number, finalUrl: string, contentType: string, error: string}>}
 */
async function httpCheck(url) {
	try {
		const res = await fetch(url, {
			method: 'GET',
			redirect: 'follow',
			headers: {
				Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
				'User-Agent': 'Mozilla/5.0 (compatible; OnlineFreeTools-QA/1.0)',
			},
		});
		return {
			url,
			status: res.status,
			finalUrl: res.url,
			contentType: (res.headers.get('content-type') || '').slice(0, 80),
			error: '',
		};
	} catch (err) {
		return { url, status: 0, finalUrl: '', contentType: '', error: String(err && err.message) };
	}
}

/**
 * 浏览器内探测：是否已有可见结果/错误/下载。
 * 跑在页面环境。
 */
const RESULT_PROBE_FN = () => {
	const visible = (el) => {
		if (!el) return false;
		const st = getComputedStyle(el);
		if (st.display === 'none' || st.visibility === 'hidden' || st.opacity === '0') return false;
		return el.getClientRects().length > 0;
	};
	const textOf = (sel) => {
		const el = document.querySelector(sel);
		return el && visible(el) ? (el.textContent || '').trim() : '';
	};
	const danger = [...document.querySelectorAll('.text-danger, .alert-danger, [role="alert"]')].filter(visible);
	const dangerText = danger.map((el) => (el.textContent || '').trim()).filter(Boolean).join(' | ');
	const download = document.querySelector(
		'button[id*="Download"], button[id*="download"], a[download], [id$="Download"]:not([disabled])'
	);
	const downloadOk = !!(download && visible(download) && !download.disabled);
	const outputs = [
		...document.querySelectorAll(
			'textarea, pre, code, [id*="Output"], [id*="output"], [id*="Result"], [id*="result"], [id*="Preview"], .result, .tool-result'
		),
	]
		.filter(visible)
		.map((el) => (el.value || el.textContent || '').trim())
		.filter((t) => t.length > 0);
	const canvas = [...document.querySelectorAll('canvas')].some((c) => visible(c) && c.width > 8 && c.height > 8);
	const img = [...document.querySelectorAll('#converter img, .tool-preview img, [id*="preview"] img')].some(
		(i) => visible(i) && i.naturalWidth > 8
	);
	const iframe = [...document.querySelectorAll('iframe')].some((f) => visible(f) && (f.src || '').length > 4);
	const status = textOf('[id$="Status"], [id$="status"], [role="status"]');
	const sampleBtn = document.querySelector('#btnSample, [id*="Sample"], [id*="sample"]');
	const h1 = (document.querySelector('h1')?.textContent || '').trim();
	return {
		h1,
		title: document.title,
		fileInputs: document.querySelectorAll('input[type="file"]').length,
		downloadOk,
		outputCount: outputs.length,
		outputPreview: (outputs[0] || '').slice(0, 180),
		canvas,
		img,
		iframe,
		status: status.slice(0, 240),
		busy: [...document.querySelectorAll('.spinner-border, [aria-busy="true"]')].some(
			(el) => visible(el) && getComputedStyle(el).display !== 'none'
		),
		dangerText: dangerText.slice(0, 300),
		hasSampleFn: typeof loadSample === 'function',
		hasSampleBtn: !!(sampleBtn && visible(sampleBtn)),
		printCalled: !!window.__printCalled,
	};
};

/**
 * 点加载样例；找不到按钮则直接调 loadSample()。
 * @param {import('playwright-core').Page} page
 * @returns {Promise<string>}
 */
async function clickSample(page) {
	const ids = ['#btnSample', '[id*="Sample"]', '[id*="sample"]'];
	for (const sel of ids) {
		const loc = page.locator(`button${sel.startsWith('[') ? sel : sel}, ${sel}`).first();
		if (await loc.count()) {
			try {
				await loc.click({ timeout: 2500 });
				return `clicked:${sel}`;
			} catch {
				/* 不可见则继续 */
			}
		}
	}
	const byText = page.getByRole('button', { name: /加载样例|加载示例|Load sample|Sample|Beispiel|Ejemplo|Exemple/i }).first();
	if (await byText.count()) {
		try {
			await byText.click({ timeout: 2500 });
			return 'clicked:text';
		} catch {
			/* ignore */
		}
	}
	return page.evaluate(() => {
		if (typeof loadSample === 'function') {
			try {
				loadSample();
				return 'called:loadSample';
			} catch (err) {
				return `loadSample-throw:${err && err.message}`;
			}
		}
		return 'no-sample-control';
	});
}

/**
 * 样例后仍无结果时点主操作（避开样例/清空/复制/下载/AI）。
 * @param {import('playwright-core').Page} page
 * @returns {Promise<string>}
 */
async function clickPrimary(page) {
	return page.evaluate(() => {
		const skipRe = /sample|clear|copy|download|print|expand|ai|reset|swap|close|lang/i;
		const skipText = /样例|示例|清空|复制|下载|打印|扩写|关闭|Sample|Clear|Copy|Download/;
		const preferRe =
			/convert|generate|run|check|build|merge|split|compress|encode|decode|validate|create|wrap|fill|sign|crop|rotate|unlock|protect|watermark|organize|compare|extract|preview|calculate|calc/i;
		const buttons = [...document.querySelectorAll('button.btn, button[type="button"], #converter button')];
		const visible = buttons.filter((b) => {
			const st = getComputedStyle(b);
			return st.display !== 'none' && st.visibility !== 'hidden' && !b.disabled && b.getClientRects().length;
		});
		const scored = visible
			.map((b) => {
				const id = b.id || '';
				const text = (b.textContent || '').trim();
				if (skipRe.test(id) || skipText.test(text)) return null;
				let score = 0;
				if (preferRe.test(id)) score += 5;
				if (b.classList.contains('btn-primary') || b.classList.contains('btn-success')) score += 3;
				if (/转换|生成|检查|计算|合并|压缩|校验|创建|填写|对比|提取|预览|运行|Calculate|Convert|Check|Generate/.test(text))
					score += 4;
				return { el: b, id, text, score };
			})
			.filter(Boolean)
			.sort((a, b) => b.score - a.score);
		const hit = scored[0];
		if (!hit || hit.score < 3) return 'no-primary';
		hit.el.click();
		return `clicked:${hit.id || hit.text.slice(0, 24)}`;
	});
}

/**
 * 等到忙态结束或出现结果/错误。
 * @param {import('playwright-core').Page} page
 * @param {number} timeoutMs
 */
async function waitSettled(page, timeoutMs) {
	const start = Date.now();
	while (Date.now() - start < timeoutMs) {
		const snap = await page.evaluate(RESULT_PROBE_FN);
		if (
			!snap.busy &&
			(snap.downloadOk ||
				snap.outputCount > 0 ||
				snap.canvas ||
				snap.img ||
				snap.iframe ||
				snap.dangerText ||
				(snap.status && snap.status.length > 2))
		) {
			return snap;
		}
		await page.waitForTimeout(350);
	}
	return page.evaluate(RESULT_PROBE_FN);
}

/**
 * 打开一条工具 URL 并跑样例。
 * @param {import('playwright-core').BrowserContext} context
 * @param {string} slug
 * @param {string} url
 */
async function testTool(context, slug, url) {
	const page = await context.newPage();
	page.setDefaultTimeout(20000);
	/** @type {string[]} */
	const pageErrors = [];
	/** @type {string[]} */
	const consoleErrors = [];
	page.on('pageerror', (err) => pageErrors.push(String(err && err.message ? err.message : err).slice(0, 240)));
	page.on('console', (msg) => {
		if (msg.type() === 'error') consoleErrors.push(msg.text().slice(0, 240));
	});

	/** @type {import('playwright-core').Response|null} */
	let res = null;
	try {
		res = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 });
	} catch (err) {
		await page.close();
		return {
			slug,
			url,
			finalUrl: '',
			status: 0,
			verdict: 'fail',
			reasons: [`导航失败: ${err && err.message}`],
			needManual: ALWAYS_MANUAL[slug] || '',
		};
	}

	const status = res ? res.status() : 0;
	const finalUrl = page.url();
	await page.waitForTimeout(500);
	let sampleHow = '';
	try {
		sampleHow = await clickSample(page);
	} catch (err) {
		sampleHow = `sample-error:${err && err.message}`;
	}
	let snap = await waitSettled(page, 12000);
	let primaryHow = '';
	const hasResult =
		snap.downloadOk ||
		snap.outputCount > 0 ||
		snap.canvas ||
		snap.img ||
		snap.iframe ||
		(snap.status && !/失败|错误|error|fail/i.test(snap.status) && snap.status.length > 2);
	if (!hasResult && !snap.dangerText) {
		try {
			primaryHow = await clickPrimary(page);
			snap = await waitSettled(page, 8000);
		} catch (err) {
			primaryHow = `primary-error:${err && err.message}`;
		}
	}

	const jsNoise = [...pageErrors, ...consoleErrors].filter(
		(x) => !/favicon|Failed to load resource|net::ERR|Download is starting|third-party cookie/i.test(x)
	);
	const reasons = [];
	if (status !== 200 && status !== 301 && status !== 308) reasons.push(`HTTP ${status}`);
	if (!snap.h1) reasons.push('缺少可读 H1');
	if (sampleHow === 'no-sample-control') reasons.push('未找到 Load sample / loadSample');
	if (sampleHow.startsWith('loadSample-throw')) reasons.push(sampleHow);
	if (snap.dangerText) reasons.push(`可见错误: ${snap.dangerText}`);
	if (jsNoise.length) reasons.push(`JS: ${jsNoise[0]}`);
	const after = snap.downloadOk || snap.outputCount > 0 || snap.canvas || snap.img || snap.iframe || snap.printCalled;
	const statusOk = snap.status && !/失败|错误|请先|empty/i.test(snap.status) && snap.status.length > 2;
	if (!after && !statusOk && !snap.dangerText) reasons.push('样例/主按钮后未见结果、下载或状态');

	let verdict = 'pass';
	if (status === 0 || (!snap.h1 && status !== 200)) verdict = 'fail';
	else if (reasons.some((r) => r.startsWith('可见错误') || r.startsWith('JS:') || r.includes('导航失败') || r.startsWith('HTTP ')))
		verdict = 'fail';
	else if (reasons.length) verdict = 'warn';

	await page.close();
	return {
		slug,
		url,
		finalUrl,
		status,
		verdict,
		reasons,
		needManual: ALWAYS_MANUAL[slug] || '',
		sampleHow,
		primaryHow,
		h1: snap.h1,
		downloadOk: snap.downloadOk,
		outputCount: snap.outputCount,
		outputPreview: snap.outputPreview,
		hasCanvas: snap.canvas,
		hasImg: snap.img,
		statusText: snap.status,
		dangerText: snap.dangerText,
		pageErrors: pageErrors.slice(0, 5),
		consoleErrors: jsNoise.slice(0, 5),
	};
}

/**
 * 把结果写成中文 Markdown。
 * @param {object} payload
 */
function writeReport(payload) {
	const { startedAt, finishedAt, http, live } = payload;
	const pass = live.filter((x) => x.verdict === 'pass');
	const warn = live.filter((x) => x.verdict === 'warn');
	const fail = live.filter((x) => x.verdict === 'fail');
	const httpBad = http.filter((h) => {
		const kind = classifyPath(new URL(h.url).pathname).kind;
		if (kind === 'api') return h.status !== 200;
		if (h.error) return true;
		return h.status !== 200;
	});
	const line = (r) => {
		const flags = [];
		if (r.needManual) flags.push('需手动');
		if (r.reasons.length) flags.push(r.reasons.join('；'));
		return `- **${r.slug}** — ${r.verdict.toUpperCase()} — HTTP ${r.status} — H1「${(r.h1 || '').slice(0, 48)}」${
			flags.length ? `\n  - ${flags.join('\n  - ')}` : ''
		}\n  - ${r.url}${r.finalUrl && r.finalUrl !== r.url ? `\n  - 最终: ${r.finalUrl}` : ''}`;
	};

	const md = `# GSC 已抓取未索引 URL — 工具功能冒烟（2026-09-07）

- **生成时间**：${finishedAt}
- **开始**：${startedAt}
- **CSV**：\`docs/seo/reviews/2026-09-07/表格.csv\`
- **基址**：生产 \`https://onlinefreetools.org\`（Google 抓的就是这些链接）
- **HTTP 抽检**：${http.length} 条
- **独立工具 Playwright**：${live.length} 个 slug
- **自动判定**：通过 ${pass.length} · 警告 ${warn.length} · 失败 ${fail.length}

## 结论怎么读

- **通过**：页能开、H1 可读、Load sample（或主按钮）跑出结果/下载/画布，且无页面 JS 崩溃。
- **警告**：页面能开，但样例控件弱或未见明确结果；**不代表功能一定坏**。
- **失败**：打不开、JS 未捕获异常、或样例后明确报错。
- **需手动**：真实 PDF/图片观感、加密密码、公网抓取、可选 AI 扩写，自动测无法证伪。
- 同一 slug 多语种只测一条代表 URL（脚本相同）；\`/en/tools/...\` 会跟随 301 到无前缀规范页。

## HTTP：非 200 终态

${
	httpBad.length
		? httpBad.map((h) => `- HTTP ${h.status} \`${h.url}\` → \`${h.finalUrl || '-'}\` ${h.error || h.contentType}`).join('\n')
		: '_全部跟随重定向后得到 200（API 为 JSON 200）。_'
}

## 必须先看：功能失败

${fail.length ? fail.map(line).join('\n') : '_无自动失败。_'}

## 警告（建议抽查）

${warn.length ? warn.map(line).join('\n') : '_无警告。_'}

## 特别注明：需要手动（即使自动通过）

${live
	.filter((r) => r.needManual)
	.map((r) => `- **${r.slug}**（自动 ${r.verdict}）：${r.needManual}`)
	.join('\n') || '_本批无额外手动标记。_'}

## 自动通过且无额外手动标记

${
	live.filter((r) => r.verdict === 'pass' && !r.needManual).map((r) => `- ${r.slug} — ${r.url}`).join('\n') ||
	'_无。计算器以外多数含文件/外网/AI，已标手动。_'
}

## 方法与边界

- 浏览器：本机 Chrome + playwright-core；生产域名。
- 未点可选 AI 扩写。
- 未上传用户真实 PDF/图片。
- JSON：\`docs/seo/reviews/2026-09-07/05-tool-function-qa-results.json\`
`;
	fs.writeFileSync(OUT_MD, md);
}

const main = async () => {
	const rows = parseCsv(fs.readFileSync(CSV_PATH, 'utf8'));
	if (!rows.length) throw new Error(`CSV 无数据: ${CSV_PATH}`);
	const startedAt = new Date().toISOString();

	console.log(`HTTP-checking ${rows.length} URLs…`);
	const http = [];
	for (const row of rows) {
		const h = await httpCheck(row.url);
		h.gscStatus = row.status;
		h.crawled = row.crawled;
		h.kind = classifyPath(row.path).kind;
		http.push(h);
		if (h.status !== 200) console.log(`[http ${h.status}] ${row.path} → ${h.finalUrl || h.error}`);
	}

	let toolMap = pickToolUrls(rows);
	if (EXTRA_SLUGS.length) {
		const filtered = new Map();
		for (const slug of EXTRA_SLUGS) {
			if (toolMap.has(slug)) filtered.set(slug, toolMap.get(slug));
			else filtered.set(slug, `https://onlinefreetools.org/tools/${slug}`);
		}
		toolMap = filtered;
	}

	const slugs = [...toolMap.keys()].sort();
	console.log(`Playwright ${slugs.length} unique tool slugs…`);

	const browser = await chromium.launch({
		executablePath: CHROME,
		headless: true,
		args: ['--disable-dev-shm-usage'],
	});
	const context = await browser.newContext({
		viewport: { width: 1280, height: 900 },
		locale: 'en-US',
		acceptDownloads: true,
		userAgent:
			'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36',
		extraHTTPHeaders: { Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8' },
	});
	await context.addInitScript(() => {
		window.__printCalled = false;
		window.print = () => {
			window.__printCalled = true;
		};
	});

	/** @type {object[]} */
	const live = [];
	for (const slug of slugs) {
		const url = toolMap.get(slug);
		const t0 = Date.now();
		const row = await testTool(context, slug, url);
		row.ms = Date.now() - t0;
		live.push(row);
		console.log(`[${row.verdict}] ${slug} ${row.status} ${row.ms}ms ${(row.reasons || []).join(' | ')}`);
	}

	await browser.close();
	const finishedAt = new Date().toISOString();
	const payload = { csv: path.relative(ROOT, CSV_PATH), startedAt, finishedAt, http, live };
	fs.writeFileSync(OUT_JSON, JSON.stringify(payload, null, 2));
	writeReport(payload);
	const failN = live.filter((x) => x.verdict === 'fail').length;
	console.log(`\nWrote ${path.relative(ROOT, OUT_MD)}`);
	console.log(`fail=${failN} warn=${live.filter((x) => x.verdict === 'warn').length} pass=${live.filter((x) => x.verdict === 'pass').length}`);
	if (failN > 0) process.exitCode = 1;
};

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
