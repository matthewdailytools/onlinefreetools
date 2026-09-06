#!/usr/bin/env node
/**
 * 按 docs/manual-qa/2026-09-06-pending-zh-tool-manual-tests.md 对 84 个中文工具页做自动功能抽检。
 *
 * 检查项对齐清单：
 * 1) 页面 200，H1 / 标题可读
 * 2) How 有序步骤（#how ol li / how_item_*）
 * 3) Load sample / 主按钮能否跑出结果或明确错误
 * 4) 文案与真实能力：OCR / 选文件 / err_notext 等模板污染
 * 5) FAQ / Rules 与邻近工具是否撞模板
 *
 * 用法：
 *   node scripts/qa/run-zh-pending-tool-qa.mjs
 *   node scripts/qa/run-zh-pending-tool-qa.mjs --base=http://127.0.0.1:8788
 *   node scripts/qa/run-zh-pending-tool-qa.mjs --slugs=base64,csv-json
 *
 * 输出：
 *   docs/manual-qa/2026-09-06-zh-tool-auto-qa-results.json
 *   docs/manual-qa/2026-09-06-zh-tool-auto-qa-report.md
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright-core';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '../..');
const LIST_PATH = path.join(ROOT, 'docs/manual-qa/2026-09-06-pending-zh-tool-manual-tests.md');
const OUT_JSON = path.join(ROOT, 'docs/manual-qa/2026-09-06-zh-tool-auto-qa-results.json');
const OUT_MD = path.join(ROOT, 'docs/manual-qa/2026-09-06-zh-tool-auto-qa-report.md');
const CATALOG_DIR = path.join(ROOT, 'src/site/tool-catalog.d');
const I18N_TOOLS = path.join(ROOT, 'src/site/i18n/tools');
const CHROME =
	process.env.CHROME_PATH ||
	'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

const args = process.argv.slice(2);
const getArg = (name, fallback = '') => {
	const hit = args.find((a) => a.startsWith(`--${name}=`));
	return hit ? hit.slice(name.length + 3) : fallback;
};
const BASE = getArg('base', 'http://127.0.0.1:8788').replace(/\/$/, '');
const EXTRA_SLUGS = getArg('slugs', '')
	.split(',')
	.map((s) => s.trim())
	.filter(Boolean);

/**
 * 文本抽取类工具：FAQ 提到 OCR / 无可选中文本是合理边界，不算模板污染。
 * @type {Set<string>}
 */
const OCR_CAPABLE_SLUGS = new Set([
	'pdf-to-markdown',
	'extract-text-from-pdf',
	'turn-pdf-into-editable-document',
	'turn-pdf-into-word-document',
	'convert-pdf-to-dwg',
	'compare-two-pdfs',
	'edit-pdf-text-online',
	'check-pdf-a-compliance',
]);

/**
 * 自动测无法覆盖真实用户文件/外设/付费 AI 的 slug：即使样例绿也标「需手动」。
 * 键为 slug，值为原因。
 * @type {Record<string, string>}
 */
const ALWAYS_MANUAL = {
	'print-pdf': '最终效果取决于系统打印对话框、打印机与「另存为 PDF」，自动测只能 stub window.print',
	'unlock-pdf': '必须用真实加密 PDF + 用户密码；内置样例无法证明解锁路径',
	'protect-pdf': '需用下载后的加密 PDF 在外部阅读器验证打开密码是否生效',
	'sign-pdf-document': '手写签名画布、位置与导出观感需肉眼看',
	'fill-out-pdf-form': '需用带 AcroForm 的真实表单核对字段填写与外观',
	'edit-pdf-form-fields': '字段增删改位置/类型需对照真实表单',
	'make-pdf-fillable': '生成的可填字段在 Acrobat/预览里是否可点需手动',
	'make-pdf-flipbook': '翻页动画、触控/键盘翻页观感需手动',
	'open-pdf-in-browser': '内嵌阅读器缩放、滚动、多页浏览需手动',
	'compare-two-pdfs': '两份真实扫描件/版式差异需肉眼核对高亮',
	'compare-two-word-documents-for-differences': '真实 .docx 样式/修订差异需手动',
	'excel-compare-files': '真实工作簿多表/公式差异需手动',
	'compare-two-text-files-online': '真实大文件/编码差异需手动抽查',
	'batch-watermark-product-photos': '多图水印位置、透明度、商品图观感应肉眼看',
	'batch-checksum-release-files': '需用真实发版包核对校验和与文件名',
	'chatgpt-export-to-markdown': '需用 ChatGPT 官方导出 ZIP/JSON 验证对话还原',
	'add-digital-signature-to-pdf': '可见完整性标记不是 PKI 数字签名，需对照说明并看盖章位置',
	'convert-pdf-to-pdf-a': 'PDF/A 符合性需用 veraPDF / Acrobat 预检核对',
	'check-pdf-a-compliance': '指标解读与真实 PDF/A 文件需对照预检软件',
	'crop-pdf': '裁切框对准页边距需肉眼',
	'organize-pdf': '删页/重排后页序需翻页核对',
	'rotate-pdf': '旋转方向是否转正需肉眼',
	'pdf-watermark': '每页水印位置、透明度需肉眼',
	'pdf-page-numbers': '页码位置与起始页需肉眼',
	'edit-pdf-text-online': '可选中文字重排/覆盖是否错位需对照原 PDF',
	'add-text-to-pdf-file': '叠加文字坐标、中文字体、被裁切需肉眼',
	'write-pdf-document-online': '多页排版、中文字体嵌入需打开下载件',
	'create-pdf-form': '生成字段在外部阅读器是否可填需手动',
	'images-to-pdf': '多图顺序、页面尺寸、方向需手动',
	'pdf-to-jpg': '每页栅格清晰度与裁切需肉眼',
	'convert-word-document-to-pdf': '真实复杂 .docx（目录/页眉/表格）保真需手动',
	'turn-pdf-into-word-document': '版式还原程度需在 Word 里打开核对',
	'convert-html-to-pdf': '打印 CSS、分页、中文字体需打开下载件',
	'combine-files-into-one-pdf': 'PDF+图片混排页序需手动',
	'merge-pdf': '多文件页序需翻页核对',
	'split-pdf': '拆出的多个文件页范围需手动',
	'compress-pdf': '画质损失与体积需对照原文件',
	'android-prompt-builder': '可选 AI 扩写依赖 Workers AI / 密钥，本轮不点',
	'ios-prompt-builder': '可选 AI 扩写依赖 Workers AI / 密钥，本轮不点',
	'film-prompt-builder': '可选 AI 扩写依赖 Workers AI / 密钥，本轮不点',
	'midjourney-prompt-builder': '可选 AI 扩写依赖 Workers AI / 密钥，本轮不点',
	'product-design-prompt-builder': '可选 AI 扩写依赖 Workers AI / 密钥，本轮不点',
	'short-drama-prompt-generator': '可选 AI 扩写依赖 Workers AI / 密钥，本轮不点',
	'sketch-prompt-generator': '可选 AI 扩写依赖 Workers AI / 密钥，本轮不点',
	'writing-prompt-generator': '可选 AI 扩写依赖 Workers AI / 密钥，本轮不点',
	'prompt-template-builder': '可选 AI 扩写依赖 Workers AI / 密钥，本轮不点',
	'on-page-seo-checker': '对任意公网 URL 的抓取/CORS/反爬结果不稳定，需换几个站点手测',
	'open-graph-preview': '社交卡片依赖目标站 meta，需换真实 URL 手测',
	'check-robots-txt-url-blocked': '依赖目标站 robots.txt，需换允许/禁止两种 URL',
	'check-ssl-certificate-expiration': '依赖 TLS 握手与证书链，需测过期/自签/正常站',
	'find-and-validate-xml-sitemap': '依赖 robots.txt 与 sitemap 形态，需测 index/嵌套/非法 XML',
	'spf-dkim-dmarc-checker': '依赖 DNS，需测有记录/无记录/语法错误域名',
	'validate-security-txt': '依赖 /.well-known/security.txt，需测有/无/过期',
};

/**
 * OCR FAQ 模板问句（中文）。出现在非文本抽取工具上视为污染。
 * @type {RegExp}
 */
const OCR_FAQ_RE = /需要 OCR 或可?选(择|中)的 PDF 文本/;

/**
 * 扫描件/OCR 错误串：打印、压缩、打开等工具不应暴露。
 * @type {RegExp}
 */
const OCR_ERR_RE = /未找到可选中文本|No selectable text found \(no OCR\)/;

/**
 * 从清单 Markdown 抽出 slug（中文 URL 段）。
 * @param {string} markdown
 * @returns {string[]}
 */
function parseSlugsFromList(markdown) {
	const found = [];
	const re = /https:\/\/onlinefreetools\.org\/zh\/tools\/([a-z0-9-]+)/g;
	let m;
	while ((m = re.exec(markdown))) {
		if (!found.includes(m[1])) found.push(m[1]);
	}
	return found;
}

/**
 * 读取 catalog 分片。
 * @param {string} slug
 * @returns {Record<string, unknown>|null}
 */
function readCatalog(slug) {
	const p = path.join(CATALOG_DIR, `${slug}.json`);
	if (!fs.existsSync(p)) return null;
	return JSON.parse(fs.readFileSync(p, 'utf8'));
}

/**
 * 读取中文 i18n 分片原文（不做 TS 求值）。
 * @param {string} slug
 * @returns {string}
 */
function readZhI18n(slug) {
	const p = path.join(I18N_TOOLS, slug, 'zh.ts');
	if (!fs.existsSync(p)) return '';
	return fs.readFileSync(p, 'utf8');
}

/**
 * 从 i18n 源码抽出字符串键值（够用的宽松解析，不执行 TS）。
 * @param {string} source
 * @returns {Record<string, string>}
 */
function extractI18nStrings(source) {
	/** @type {Record<string, string>} */
	const out = {};
	const re = /([A-Za-z0-9_]+)\s*:\s*(['"`])([\s\S]*?)\2/g;
	let m;
	while ((m = re.exec(source))) {
		out[m[1]] = m[3].replace(/\\n/g, '\n').replace(/\\'/g, "'").replace(/\\"/g, '"');
	}
	return out;
}

/**
 * 静态文案检查：How 步骤、OCR 污染、FAQ/Rules 撞模板。
 * @param {string[]} slugs
 * @returns {{ bySlug: Record<string, object>, duplicateFaqs: Array<object> }}
 */
function staticCopyAudit(slugs) {
	/** @type {Record<string, object>} */
	const bySlug = {};
	/** @type {Map<string, string[]>} */
	const faqQ2Map = new Map();
	/** @type {Map<string, string[]>} */
	const rules3Map = new Map();

	for (const slug of slugs) {
		const src = readZhI18n(slug);
		const dict = extractI18nStrings(src);
		const catalog = readCatalog(slug);
		const prefix = typeof catalog?.faqPrefix === 'string' ? catalog.faqPrefix : `tool_${slug.replace(/-/g, '_')}`;
		const howItems = [];
		for (let i = 1; i <= 8; i++) {
			const v = dict[`${prefix}_how_item_${i}`];
			if (v) howItems.push(v);
		}
		const faqQ = [];
		const faqA = [];
		for (let i = 1; i <= 8; i++) {
			if (dict[`${prefix}_faq_q${i}`]) faqQ.push(dict[`${prefix}_faq_q${i}`]);
			if (dict[`${prefix}_faq_a${i}`]) faqA.push(dict[`${prefix}_faq_a${i}`]);
		}
		const rules = [];
		for (let i = 1; i <= 6; i++) {
			const v = dict[`${prefix}_rules_item_${i}`] || dict[`${prefix}_formula_item_${i}`];
			if (v) rules.push(v);
		}
		const blob = Object.values(dict).join('\n');
		const ocrFaq = OCR_FAQ_RE.test(blob);
		const ocrErr = OCR_ERR_RE.test(blob);
		const ocrPollution = (ocrFaq || ocrErr) && !OCR_CAPABLE_SLUGS.has(slug);
		const genericHow =
			howItems.some((x) => /选择 PDF 或粘贴内容/.test(x)) ||
			howItems.some((x) => /在结果区查看输出/.test(x) && /需要时下载或打印/.test(howItems.join('\n')));
		const issues = [];
		if (howItems.length < 3) issues.push(`how_item 仅 ${howItems.length} 条（建议 3–6）`);
		if (ocrPollution) {
			issues.push('疑似 OCR 模板污染（非文本抽取工具仍有 OCR FAQ / err_notext）');
		}
		if (genericHow) issues.push('How 步骤像通用 PDF 模板（「选择 PDF 或粘贴内容」等）');
		if (faqQ.length < 3) issues.push(`FAQ 仅 ${faqQ.length} 条`);
		if (faqQ[1]) {
			const k = faqQ[1].trim();
			faqQ2Map.set(k, [...(faqQ2Map.get(k) || []), slug]);
		}
		if (rules[2]) {
			const k = rules[2].trim();
			rules3Map.set(k, [...(rules3Map.get(k) || []), slug]);
		}
		bySlug[slug] = {
			howItemCount: howItems.length,
			howItems,
			faqCount: faqQ.length,
			faqQ2: faqQ[1] || '',
			rules3: rules[2] || '',
			ocrFaq,
			ocrErr,
			ocrPollution,
			genericHow,
			issues,
			title: dict[`${prefix}_title`] || dict[`${prefix.replace(/^tool_/, 'tool_')}_title`] || '',
		};
	}

	const duplicateFaqs = [];
	for (const [text, list] of faqQ2Map) {
		if (list.length >= 3 && /OCR|上传|加密/.test(text)) {
			duplicateFaqs.push({ kind: 'faq_q2', text, slugs: list });
		}
	}
	for (const [text, list] of rules3Map) {
		if (list.length >= 3 && text.length < 80) {
			duplicateFaqs.push({ kind: 'rules_item_3', text, slugs: list });
		}
	}
	return { bySlug, duplicateFaqs };
}

/**
 * 在页面里判断「看起来已经有结果」。
 * 跑在浏览器环境。
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
	const downloadOk = download && visible(download) && !download.disabled;
	const outputs = [...document.querySelectorAll('textarea, pre, code, [id*="Output"], [id*="output"], [id*="Result"], [id*="Preview"]')]
		.filter(visible)
		.map((el) => (el.value || el.textContent || '').trim())
		.filter((t) => t.length > 8);
	const canvas = [...document.querySelectorAll('canvas')].some((c) => visible(c) && c.width > 8 && c.height > 8);
	const img = [...document.querySelectorAll('#converter img, .tool-preview img, [id*="preview"] img')].some(
		(i) => visible(i) && i.naturalWidth > 8
	);
	const iframe = [...document.querySelectorAll('iframe')].some((f) => visible(f) && (f.src || '').length > 4);
	const status = textOf('[id$="Status"], [id$="status"], [role="status"]');
	const busy = [...document.querySelectorAll('.spinner-border, [aria-busy="true"]')].some(
		(el) => visible(el) && getComputedStyle(el).display !== 'none'
	);
	const sampleBtn = document.querySelector('#btnSample, [id*="Sample"], [id*="sample"]');
	const h1 = (document.querySelector('h1')?.textContent || '').trim();
	const howItems = [...document.querySelectorAll('#how ol li')].map((li) => (li.textContent || '').trim()).filter(Boolean);
	const fileInputs = document.querySelectorAll('input[type="file"]').length;
	const bodyText = (document.body?.innerText || '').slice(0, 20000);
	return {
		h1,
		title: document.title,
		howItems,
		fileInputs,
		downloadOk,
		outputCount: outputs.length,
		outputPreview: (outputs[0] || '').slice(0, 180),
		canvas,
		img,
		iframe,
		status: status.slice(0, 240),
		busy,
		dangerText: dangerText.slice(0, 300),
		hasSampleFn: typeof loadSample === 'function',
		hasSampleBtn: !!(sampleBtn && visible(sampleBtn)),
		sampleBtnId: sampleBtn ? sampleBtn.id : '',
		printStubbed: typeof window.__printCalled !== 'undefined',
		printCalled: !!window.__printCalled,
		ocrVisible: /需要 OCR 或可?选(择|中)的 PDF 文本/.test(bodyText),
		errNotextVisible: /未找到可选中文本|No selectable text found/.test(bodyText),
	};
};

/**
 * 点「加载样例」：优先 #btnSample，否则文案匹配。
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
	const byText = page.getByRole('button', { name: /加载样例|加载示例|Load sample|Sample/i }).first();
	if (await byText.count()) {
		try {
			await byText.click({ timeout: 2500 });
			return 'clicked:text';
		} catch {
			/* ignore */
		}
	}
	const ran = await page.evaluate(() => {
		if (typeof loadSample === 'function') {
			try {
				loadSample();
				return 'called:loadSample';
			} catch (err) {
				return `loadSample-throw:${err && err.message}`;
			}
		}
		return '';
	});
	return ran || 'no-sample-control';
}

/**
 * 若样例后仍无结果，再点主操作按钮（避开样例/清空/复制/下载/打印/AI）。
 * @param {import('playwright-core').Page} page
 * @returns {Promise<string>}
 */
async function clickPrimary(page) {
	return page.evaluate(() => {
		const skipRe = /sample|clear|copy|download|print|expand|ai|reset|swap|close|lang/i;
		const skipText = /样例|示例|清空|复制|下载|打印|扩写|关闭/;
		const preferRe = /convert|generate|run|check|build|merge|split|compress|encode|decode|validate|create|wrap|fill|sign|crop|rotate|unlock|protect|watermark|organize|compare|extract|preview/i;
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
				if (/转换|生成|检查|计算|合并|压缩|校验|创建|填写|对比|提取|预览|运行/.test(text)) score += 4;
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
 * 等忙态结束或出现结果/错误。
 * @param {import('playwright-core').Page} page
 * @param {number} timeoutMs
 */
async function waitSettled(page, timeoutMs) {
	const start = Date.now();
	while (Date.now() - start < timeoutMs) {
		const snap = await page.evaluate(RESULT_PROBE_FN);
		if (!snap.busy && (snap.downloadOk || snap.outputCount > 0 || snap.canvas || snap.img || snap.iframe || snap.dangerText || (snap.status && snap.status.length > 2))) {
			return snap;
		}
		await page.waitForTimeout(400);
	}
	return page.evaluate(RESULT_PROBE_FN);
}

/**
 * 测单个中文工具页。
 * @param {import('playwright-core').Page} page
 * @param {string} slug
 */
async function testOne(page, slug) {
	const url = `${BASE}/zh/tools/${slug}`;
	/** @type {string[]} */
	const pageErrors = [];
	/** @type {string[]} */
	const consoleErrors = [];
	const onPageError = (err) => pageErrors.push(String(err && err.message ? err.message : err).slice(0, 240));
	const onConsole = (msg) => {
		if (msg.type() === 'error') consoleErrors.push(msg.text().slice(0, 240));
	};
	page.on('pageerror', onPageError);
	page.on('console', onConsole);

	/** @type {import('playwright-core').Response|null} */
	let res = null;
	try {
		res = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 });
	} catch (err) {
		page.off('pageerror', onPageError);
		page.off('console', onConsole);
		return {
			slug,
			url,
			status: 0,
			verdict: 'fail',
			reasons: [`导航失败: ${err && err.message}`],
			needManual: ALWAYS_MANUAL[slug] || '',
		};
	}
	const status = res ? res.status() : 0;
	await page.waitForTimeout(600);
	let sampleHow = '';
	try {
		sampleHow = await clickSample(page);
	} catch (err) {
		sampleHow = `sample-error:${err && err.message}`;
	}
	let snap = await waitSettled(page, 14000);
	let primaryHow = '';
	const hasResult =
		snap.downloadOk || snap.outputCount > 0 || snap.canvas || snap.img || snap.iframe || (snap.status && !/失败|错误|error|fail/i.test(snap.status) && snap.status.length > 2);
	if (!hasResult && !snap.dangerText) {
		try {
			primaryHow = await clickPrimary(page);
			snap = await waitSettled(page, 10000);
		} catch (err) {
			primaryHow = `primary-error:${err && err.message}`;
		}
	}

	page.off('pageerror', onPageError);
	page.off('console', onConsole);

	const reasons = [];
	if (status !== 200) reasons.push(`HTTP ${status}`);
	if (!snap.h1) reasons.push('缺少可读 H1');
	if (snap.h1 && /tool_[a-z0-9_]+_title/.test(snap.h1)) reasons.push('H1 像未翻译 key');
	if (snap.howItems.length < 3) reasons.push(`页面 How 有序列表仅 ${snap.howItems.length} 条`);
	if (sampleHow === 'no-sample-control') reasons.push('未找到 Load sample / loadSample');
	if (sampleHow.startsWith('loadSample-throw')) reasons.push(sampleHow);
	if (snap.dangerText) reasons.push(`可见错误: ${snap.dangerText}`);
	const jsNoise = [...pageErrors, ...consoleErrors].filter(
		(x) => !/favicon|Failed to load resource|net::ERR|Download is starting/i.test(x)
	);
	if (jsNoise.length) reasons.push(`JS: ${jsNoise[0]}`);

	const after = snap.downloadOk || snap.outputCount > 0 || snap.canvas || snap.img || snap.iframe || snap.printCalled;
	const statusOk = snap.status && !/失败|错误|请先|empty/i.test(snap.status) && snap.status.length > 2;
	if (!after && !statusOk && !snap.dangerText) reasons.push('样例/主按钮后未见结果、下载或状态');

	let verdict = 'pass';
	if (status !== 200 || pageErrors.length || snap.h1 === '') verdict = 'fail';
	else if (reasons.some((r) => r.startsWith('可见错误') || r.startsWith('JS:') || r.includes('导航失败'))) verdict = 'fail';
	else if (reasons.length) verdict = 'warn';

	return {
		slug,
		url,
		status,
		verdict,
		reasons,
		needManual: ALWAYS_MANUAL[slug] || '',
		sampleHow,
		primaryHow,
		h1: snap.h1,
		title: snap.title,
		howItemCount: snap.howItems.length,
		fileInputs: snap.fileInputs,
		downloadOk: snap.downloadOk,
		outputCount: snap.outputCount,
		outputPreview: snap.outputPreview,
		hasCanvas: snap.canvas,
		hasImg: snap.img,
		hasIframe: snap.iframe,
		statusText: snap.status,
		dangerText: snap.dangerText,
		pageErrors: pageErrors.slice(0, 5),
		consoleErrors: jsNoise.slice(0, 5),
		ocrFaqVisible: snap.ocrVisible,
		errNotextVisible: snap.errNotextVisible,
	};
}

/**
 * 把结果写成中文 Markdown 报告。
 * @param {object} payload
 */
function writeReport(payload) {
	const { base, startedAt, finishedAt, staticAudit, live } = payload;
	const pass = live.filter((x) => x.verdict === 'pass');
	const warn = live.filter((x) => x.verdict === 'warn');
	const fail = live.filter((x) => x.verdict === 'fail');
	const manual = live.filter((x) => x.needManual);
	const copyIssues = Object.entries(staticAudit.bySlug)
		.filter(([, v]) => v.issues.length)
		.map(([slug, v]) => ({ slug, issues: v.issues, faqQ2: v.faqQ2 }));

	const line = (r) => {
		const flags = [];
		if (r.needManual) flags.push('需手动');
		if (r.reasons.length) flags.push(r.reasons.join('；'));
		return `- **${r.slug}** — ${r.verdict.toUpperCase()} — HTTP ${r.status} — H1「${(r.h1 || '').slice(0, 40)}」${flags.length ? `\n  - ${flags.join('\n  - ')}` : ''}\n  - ${r.url}`;
	};

	const md = `# 中文工具页自动功能测试报告

- **生成时间**：${finishedAt}
- **对照清单**：\`docs/manual-qa/2026-09-06-pending-zh-tool-manual-tests.md\`
- **测试基址**：${base}
- **开始**：${startedAt}
- **共**：${live.length} 个
- **自动判定**：通过 ${pass.length} · 警告 ${warn.length} · 失败 ${fail.length}
- **需手动复核**（含自动已绿但仍有无法覆盖路径）：${manual.length} 个

## 结论怎么读

- **通过**：中文页 200、H1 可读、How 有序列表存在、Load sample（或主按钮）跑出结果/下载/画布，且无页面 JS 崩溃。
- **警告**：页面能开，但 How 条数不足、样例控件弱、或文案疑似模板；**不代表功能一定坏**。
- **失败**：打不开、H1 缺失、JS 未捕获异常、或样例后明确报错。
- **需手动**：文件观感、打印对话框、真实加密 PDF、公网抓取、可选 AI 扩写等，自动测无法证伪。

## 必须先看：失败

${fail.length ? fail.map(line).join('\n') : '_无自动失败。_'}

## 警告（建议抽查）

${warn.length ? warn.map(line).join('\n') : '_无警告。_'}

## 文案 / 模板污染（静态 i18n，不依赖浏览器）

${
	copyIssues.length
		? copyIssues
				.map((x) => `- **${x.slug}**：${x.issues.join('；')}${x.faqQ2 ? `\n  - FAQ q2：${x.faqQ2}` : ''}`)
				.join('\n')
		: '_未发现 OCR/How 模板问题。_'
}

### FAQ q2 / Rules 第三条撞车（≥3 个工具同文案）

${
	staticAudit.duplicateFaqs.length
		? staticAudit.duplicateFaqs
				.map((d) => `- **${d.kind}**「${d.text}」\n  - ${d.slugs.join(', ')}`)
				.join('\n')
		: '_无大面积撞车。_'
}

## 特别注明：需要手动（即使自动通过）

${manual
	.map((r) => `- **${r.slug}**（自动 ${r.verdict}）：${r.needManual}\n  - 中文：${r.url}`)
	.join('\n')}

## 自动通过且无额外手动标记

${live
	.filter((r) => r.verdict === 'pass' && !r.needManual)
	.map((r) => `- ${r.slug} — ${r.url}`)
	.join('\n') || '_无。本批多数含文件/外网/AI，已标手动。_'}

## 方法与边界

- 浏览器：本机 Chrome + playwright-core；语言路径 \`/zh/tools/{slug}\`。
- Load sample：点 \`#btnSample\` / 「加载样例」；否则尝试调用页面 \`loadSample()\`。
- 未点可选 AI 扩写，避免消耗 Workers AI。
- \`window.print\` 已 stub，故 print-pdf 只能证明按钮可点。
- 未上传用户真实 PDF/Word/Excel/ChatGPT 导出包。
- 原始 JSON：\`docs/manual-qa/2026-09-06-zh-tool-auto-qa-results.json\`
`;
	fs.writeFileSync(OUT_MD, md);
}

const main = async () => {
	const listMd = fs.readFileSync(LIST_PATH, 'utf8');
	const slugs = EXTRA_SLUGS.length ? EXTRA_SLUGS : parseSlugsFromList(listMd);
	if (!slugs.length) throw new Error('清单里没有解析到 slug');
	const startedAt = new Date().toISOString();
	const staticAudit = staticCopyAudit(slugs);

	const browser = await chromium.launch({
		executablePath: CHROME,
		headless: true,
		args: ['--disable-dev-shm-usage'],
	});
	const context = await browser.newContext({
		viewport: { width: 1280, height: 900 },
		locale: 'zh-CN',
		acceptDownloads: true,
	});
	await context.addInitScript(() => {
		window.__printCalled = false;
		window.print = () => {
			window.__printCalled = true;
		};
	});
	const page = await context.newPage();
	page.setDefaultTimeout(20000);

	/** @type {object[]} */
	const live = [];
	for (const slug of slugs) {
		const t0 = Date.now();
		const row = await testOne(page, slug);
		row.ms = Date.now() - t0;
		const copy = staticAudit.bySlug[slug];
		if (copy && copy.issues.length) {
			row.copyIssues = copy.issues;
			if (row.verdict === 'pass') row.verdict = 'warn';
			row.reasons = [...(row.reasons || []), ...copy.issues];
		}
		live.push(row);
		console.log(`[${row.verdict}] ${slug} ${row.status} ${row.ms}ms ${(row.reasons || []).join(' | ')}`);
	}

	await browser.close();
	const finishedAt = new Date().toISOString();
	const payload = { base: BASE, startedAt, finishedAt, slugs, staticAudit, live };
	fs.mkdirSync(path.dirname(OUT_JSON), { recursive: true });
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
