#!/usr/bin/env node
/**
 * 生产环境：对 primaryTopic 为 video-editor / sound-editor 的工具做 Load sample → 结果冒烟。
 *
 * 用法：
 *   node scripts/qa/run-av-topic-prod-qa.mjs
 *   node scripts/qa/run-av-topic-prod-qa.mjs --topic=video-editor
 *   node scripts/qa/run-av-topic-prod-qa.mjs --slugs=trim-a-video-clip-and-export,trim-an-audio-clip-and-export
 *   node scripts/qa/run-av-topic-prod-qa.mjs --base=https://onlinefreetools.org --lang=en
 *
 * 输出：
 *   docs/manual-qa/2026-10-11-av-topic-prod-qa-results.json
 *   docs/manual-qa/2026-10-11-av-topic-prod-qa-report.md
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright-core';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '../..');
const CATALOG_DIR = path.join(ROOT, 'src/site/tool-catalog.d');
const OUT_DIR = path.join(ROOT, 'docs/manual-qa');
const OUT_JSON = path.join(OUT_DIR, '2026-10-11-av-topic-prod-qa-results.json');
const OUT_MD = path.join(OUT_DIR, '2026-10-11-av-topic-prod-qa-report.md');
const CHROME =
	process.env.CHROME_PATH ||
	'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

const args = process.argv.slice(2);
/** @param {string} name @param {string} [fallback] */
const getArg = (name, fallback = '') => {
	const hit = args.find((a) => a.startsWith(`--${name}=`));
	return hit ? hit.slice(name.length + 3) : fallback;
};

const BASE = getArg('base', 'https://onlinefreetools.org').replace(/\/$/, '');
const LANG = getArg('lang', 'en');
const TOPIC_FILTER = getArg('topic', ''); // video-editor | sound-editor | ''
const EXTRA_SLUGS = getArg('slugs', '')
	.split(',')
	.map((s) => s.trim())
	.filter(Boolean);

/** 外设 / 真机录音类：样例绿也不算证明麦克风路径。 */
const ALWAYS_MANUAL = {
	'record-a-voice-memo-in-the-browser': '需真实麦克风权限与录音路径',
	'record-a-voiceover-with-a-teleprompter': '需麦克风 + 提词器滚动观感',
	'sync-song-lyrics-to-lrc-by-tapping': '需边听边点的节拍对齐',
	'edit-audio-on-waveform': '波形拖拽编辑观感需肉眼',
};

/**
 * Whisper / 重转码：等待更久。
 * @param {string} slug
 */
const settleMsFor = (slug) => {
	if (/srt|transcribe|whisper|subtitle/i.test(slug)) return 180000;
	if (/extract-audio|batch-extract|batch-convert|batch-compress|waveform|gif|merge-video/i.test(slug))
		return 90000;
	return 35000;
};

/**
 * 从 catalog 读取 AV 主题 slug。
 * @returns {{slug:string,topic:string}[]}
 */
const loadAvTools = () => {
	const out = [];
	for (const name of fs.readdirSync(CATALOG_DIR)) {
		if (!name.endsWith('.json')) continue;
		const d = JSON.parse(fs.readFileSync(path.join(CATALOG_DIR, name), 'utf8'));
		const topic = d.primaryTopic;
		if (topic !== 'video-editor' && topic !== 'sound-editor') continue;
		if (TOPIC_FILTER && topic !== TOPIC_FILTER) continue;
		out.push({ slug: d.slug, topic });
	}
	out.sort((a, b) => a.topic.localeCompare(b.topic) || a.slug.localeCompare(b.slug));
	return out;
};

/** 页面内结果探测（在浏览器上下文执行）。 */
const RESULT_PROBE_FN = () => {
	const visible = (el) => {
		if (!el) return false;
		const st = getComputedStyle(el);
		if (st.display === 'none' || st.visibility === 'hidden' || Number(st.opacity) === 0) return false;
		return el.getClientRects().length > 0;
	};
	const textOf = (sel) => {
		const el = document.querySelector(sel);
		return el && visible(el) ? (el.textContent || '').trim() : '';
	};
	const danger = [...document.querySelectorAll('.text-danger, .alert-danger, [role="alert"]')].filter(visible);
	const dangerText = danger
		.map((el) => (el.textContent || '').trim())
		.filter(Boolean)
		.join(' | ');
	const download = document.querySelector(
		'button[id*="Download"], button[id*="download"], a[download], [id$="Download"]:not([disabled])'
	);
	const downloadOk = !!(download && visible(download) && !download.disabled);
	const outputs = [
		...document.querySelectorAll(
			'textarea, pre, code, [id*="Output"], [id*="output"], [id*="Result"], [id*="result"], [id*="Preview"], .result, .tool-result, audio, video'
		),
	]
		.filter(visible)
		.map((el) => {
			if (el.tagName === 'AUDIO' || el.tagName === 'VIDEO') {
				return el.src || el.currentSrc || (el.querySelector('source') && el.querySelector('source').src) || '';
			}
			return (el.value || el.textContent || '').trim();
		})
		.filter((t) => t.length > 0);
	const mediaReady = [...document.querySelectorAll('audio, video')].some(
		(m) => visible(m) && (m.readyState >= 2 || (m.src || m.currentSrc || '').length > 8)
	);
	const canvas = [...document.querySelectorAll('canvas')].some((c) => visible(c) && c.width > 8 && c.height > 8);
	const img = [...document.querySelectorAll('#converter img, .tool-preview img, [id*="preview"] img')].some(
		(i) => visible(i) && i.naturalWidth > 8
	);
	const status = textOf('[id$="Status"], [id$="status"], [role="status"], .oft-progress, [class*="progress"]');
	const busy = [...document.querySelectorAll('.spinner-border, [aria-busy="true"], .oft-progress-busy')].some(
		(el) => visible(el) && getComputedStyle(el).display !== 'none'
	);
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
		mediaReady,
		status: status.slice(0, 240),
		busy,
		dangerText: dangerText.slice(0, 300),
		hasSampleFn: typeof loadSample === 'function',
		hasSampleBtn: !!(sampleBtn && visible(sampleBtn)),
	};
};

/**
 * @param {import('playwright-core').Page} page
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
				/* continue */
			}
		}
	}
	const byText = page.getByRole('button', { name: /Load sample|加载样例|加载示例|Sample/i }).first();
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
 * @param {import('playwright-core').Page} page
 */
async function clickPrimary(page) {
	return page.evaluate(() => {
		const skipRe = /sample|clear|copy|download|print|expand|ai|reset|swap|close|lang|stop|cancel/i;
		const skipText = /Sample|Clear|Copy|Download|Stop|Cancel|样例|清空|复制|下载|停止/;
		const preferRe =
			/convert|generate|run|extract|trim|merge|compress|transcribe|rotate|replace|remove|add|burn|inspect|normalize|split|loop|ringtone|fade|boost|eq|mix|join|encode|decode|preview|process/i;
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
				if (/Convert|Extract|Trim|Generate|Process|Transcribe|Merge|Compress|转换|提取|裁剪|生成|处理/.test(text))
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
				snap.mediaReady ||
				snap.dangerText ||
				(snap.status && snap.status.length > 2))
		) {
			return snap;
		}
		await page.waitForTimeout(500);
	}
	return page.evaluate(RESULT_PROBE_FN);
}

/**
 * @param {import('playwright-core').BrowserContext} context
 * @param {{slug:string,topic:string}} tool
 */
async function testTool(context, tool) {
	const { slug, topic } = tool;
	const url =
		LANG === 'en' || !LANG ? `${BASE}/tools/${slug}` : `${BASE}/${LANG}/tools/${slug}`;
	const page = await context.newPage();
	page.setDefaultTimeout(25000);
	/** @type {string[]} */
	const pageErrors = [];
	/** @type {string[]} */
	const consoleErrors = [];
	page.on('pageerror', (err) => pageErrors.push(String(err?.message || err).slice(0, 240)));
	page.on('console', (msg) => {
		if (msg.type() === 'error') consoleErrors.push(msg.text().slice(0, 240));
	});

	/** @type {import('playwright-core').Response|null} */
	let res = null;
	try {
		res = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
	} catch (err) {
		await page.close();
		return {
			slug,
			topic,
			url,
			status: 0,
			verdict: 'fail',
			reasons: [`导航失败: ${err && err.message}`],
			needManual: ALWAYS_MANUAL[slug] || '',
		};
	}

	const status = res ? res.status() : 0;
	await page.waitForTimeout(700);
	let sampleHow = '';
	try {
		sampleHow = await clickSample(page);
	} catch (err) {
		sampleHow = `sample-error:${err && err.message}`;
	}

	const settleMs = settleMsFor(slug);
	let snap = await waitSettled(page, Math.min(settleMs, 20000));
	let primaryHow = '';
	const hasResult =
		snap.downloadOk ||
		snap.outputCount > 0 ||
		snap.canvas ||
		snap.img ||
		snap.mediaReady ||
		(snap.status && !/失败|错误|error|fail/i.test(snap.status) && snap.status.length > 2);
	if (!hasResult && !snap.dangerText) {
		try {
			primaryHow = await clickPrimary(page);
			snap = await waitSettled(page, settleMs);
		} catch (err) {
			primaryHow = `primary-error:${err && err.message}`;
		}
	} else if (snap.busy || (!hasResult && !snap.dangerText)) {
		snap = await waitSettled(page, settleMs);
	}

	const jsNoise = [...pageErrors, ...consoleErrors].filter(
		(x) =>
			!/favicon|Failed to load resource|net::ERR|Download is starting|third-party cookie|CORS|cdn\.|googleapis/i.test(
				x
			)
	);
	const reasons = [];
	if (status !== 200) reasons.push(`HTTP ${status}`);
	if (!snap.h1) reasons.push('缺少可读 H1');
	if (sampleHow === 'no-sample-control') reasons.push('未找到 Load sample / loadSample');
	if (sampleHow.startsWith('loadSample-throw')) reasons.push(sampleHow);
	if (snap.dangerText) reasons.push(`可见错误: ${snap.dangerText}`);
	if (jsNoise.length) reasons.push(`JS: ${jsNoise[0]}`);
	const after = snap.downloadOk || snap.outputCount > 0 || snap.canvas || snap.img || snap.mediaReady;
	const statusOk = snap.status && !/失败|错误|请先|empty|fail|error/i.test(snap.status) && snap.status.length > 2;
	if (!after && !statusOk && !snap.dangerText) reasons.push('样例/主按钮后未见结果、下载、媒体或状态');

	let verdict = 'pass';
	if (status !== 200 || !snap.h1) verdict = 'fail';
	else if (reasons.some((r) => r.startsWith('可见错误') || r.startsWith('JS:') || r.includes('导航失败') || r.startsWith('HTTP ')))
		verdict = 'fail';
	else if (reasons.length) verdict = 'warn';

	const finalUrl = page.url();
	await page.close();
	return {
		slug,
		topic,
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
		mediaReady: snap.mediaReady,
		statusText: snap.status,
		dangerText: snap.dangerText,
		jsNoise: jsNoise.slice(0, 3),
	};
}

/**
 * @param {{startedAt:string,finishedAt:string,base:string,live:object[]}} payload
 */
const writeReport = (payload) => {
	const { live } = payload;
	const fail = live.filter((r) => r.verdict === 'fail');
	const warn = live.filter((r) => r.verdict === 'warn');
	const pass = live.filter((r) => r.verdict === 'pass');
	const byTopic = (t) => live.filter((r) => r.topic === t);
	const line = (r) =>
		`- **${r.slug}** (${r.topic}) — ${r.verdict}: ${(r.reasons || []).join('; ') || 'ok'} — ${r.url}`;

	const md = `# AV topic production QA (${payload.base})

- Started: ${payload.startedAt}
- Finished: ${payload.finishedAt}
- Tools: ${live.length} (video-editor ${byTopic('video-editor').length}, sound-editor ${byTopic('sound-editor').length})
- pass=${pass.length} warn=${warn.length} fail=${fail.length}

## Fail

${fail.length ? fail.map(line).join('\n') : '_none_'}

## Warn

${warn.length ? warn.map(line).join('\n') : '_none_'}

## Need manual (even if auto pass)

${
	live
		.filter((r) => r.needManual)
		.map((r) => `- **${r.slug}** (${r.verdict}): ${r.needManual}`)
		.join('\n') || '_none_'
}

## Pass summary by topic

### video-editor (${byTopic('video-editor').filter((r) => r.verdict === 'pass').length}/${byTopic('video-editor').length} pass)

${byTopic('video-editor')
	.map((r) => `- ${r.verdict}: ${r.slug}`)
	.join('\n')}

### sound-editor (${byTopic('sound-editor').filter((r) => r.verdict === 'pass').length}/${byTopic('sound-editor').length} pass)

${byTopic('sound-editor')
	.map((r) => `- ${r.verdict}: ${r.slug}`)
	.join('\n')}

## Method

- Chrome + playwright-core against production English tool URLs.
- Load sample (or \`loadSample()\`), then primary Convert/Extract/… if needed.
- Longer settle for Whisper/SRT (180s) and heavy extract/batch (90s).
- Does not prove mic recording, large multi-GiB OPFS, or wrong-format rejection paths.
`;
	fs.mkdirSync(OUT_DIR, { recursive: true });
	fs.writeFileSync(OUT_MD, md);
};

const main = async () => {
	let tools = loadAvTools();
	if (EXTRA_SLUGS.length) {
		const all = loadAvTools();
		const map = new Map(all.map((t) => [t.slug, t]));
		tools = EXTRA_SLUGS.map((slug) => map.get(slug) || { slug, topic: 'unknown' });
	}
	if (!tools.length) throw new Error('no AV tools matched');

	const startedAt = new Date().toISOString();
	console.log(`AV prod QA: ${tools.length} tools @ ${BASE} lang=${LANG}`);

	const browser = await chromium.launch({
		executablePath: CHROME,
		headless: true,
		args: ['--disable-dev-shm-usage', '--autoplay-policy=no-user-gesture-required'],
	});
	const context = await browser.newContext({
		viewport: { width: 1280, height: 900 },
		locale: 'en-US',
		acceptDownloads: true,
		userAgent:
			'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36',
		extraHTTPHeaders: { Accept: 'text/html,application/xhtml+xml' },
	});

	/** @type {object[]} */
	const live = [];
	for (let i = 0; i < tools.length; i++) {
		const tool = tools[i];
		const t0 = Date.now();
		const row = await testTool(context, tool);
		row.ms = Date.now() - t0;
		live.push(row);
		console.log(
			`[${i + 1}/${tools.length}] ${row.verdict} ${tool.topic} ${tool.slug} ${row.ms}ms ${(row.reasons || []).join(' | ')}`
		);
		// 中途落盘，避免长跑中断丢结果
		if ((i + 1) % 5 === 0 || i + 1 === tools.length) {
			fs.mkdirSync(OUT_DIR, { recursive: true });
			fs.writeFileSync(
				OUT_JSON,
				JSON.stringify({ base: BASE, startedAt, finishedAt: null, partial: true, live }, null, 2)
			);
		}
	}

	await browser.close();
	const finishedAt = new Date().toISOString();
	const payload = { base: BASE, lang: LANG, startedAt, finishedAt, live };
	fs.mkdirSync(OUT_DIR, { recursive: true });
	fs.writeFileSync(OUT_JSON, JSON.stringify(payload, null, 2));
	writeReport(payload);
	const failN = live.filter((x) => x.verdict === 'fail').length;
	console.log(`\nWrote ${path.relative(ROOT, OUT_MD)}`);
	console.log(
		`fail=${failN} warn=${live.filter((x) => x.verdict === 'warn').length} pass=${live.filter((x) => x.verdict === 'pass').length}`
	);
	if (failN > 0) process.exitCode = 1;
};

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
