#!/usr/bin/env node
/**
 * 批量为工具页截取 SERP/OG 偏好图（1280×720 WebP）。
 *
 * 用法：
 *   node scripts/seo/capture-tool-og-images.mjs --base=http://127.0.0.1:8788 --all
 *   node scripts/seo/capture-tool-og-images.mjs --base=http://127.0.0.1:8788 --category=pdf
 *   node scripts/seo/capture-tool-og-images.mjs --slugs=merge-pdf,split-pdf --force
 *
 * 约定（对齐 docs/seo/2026-08-12/serp-image-thumbnail-plan.md）：
 * - 仅 en URL；视口 1280×720；浅色；等 loadSample 稳定后截 main 工具区
 * - 输出 public/og/tools/{slug}.webp（入库 Git 作源；公开 URL 走 R2 桶 assets）
 * - 截完后跑 `npm run upload:r2:og`；GitHub→CF 不会把这些图打进 Worker Assets（.assetsignore）
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright-core';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '../..');
const OUT_DIR = path.join(ROOT, 'public', 'og', 'tools');
const CATALOG_PATH = path.join(ROOT, 'src/site/tool-catalog.json');
const CHROME =
	process.env.CHROME_PATH ||
	'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

/** 解析 CLI 参数 */
const args = process.argv.slice(2);
const getArg = (name, fallback = '') => {
	const hit = args.find((a) => a.startsWith(`--${name}=`));
	return hit ? hit.slice(name.length + 3) : fallback;
};
const hasFlag = (name) => args.includes(`--${name}`);

const BASE = getArg('base', 'http://127.0.0.1:8788').replace(/\/$/, '');
const CATEGORY = getArg('category', '');
const FORCE = hasFlag('force');
const ALL = hasFlag('all');
const EXTRA_SLUGS = getArg('slugs', '')
	.split(',')
	.map((s) => s.trim())
	.filter(Boolean);
/** 与 PDF absorb 一并覆盖的图片类转换页 */
const ALWAYS_EXTRA = ['images-to-pdf', 'pdf-to-jpg', 'pdf-page-to-image-sizes'];

/**
 * 从 catalog 解析目标 slug 列表。
 * @returns {string[]}
 */
const resolveSlugs = () => {
	const catalog = JSON.parse(fs.readFileSync(CATALOG_PATH, 'utf8'));
	const tools = Array.isArray(catalog) ? catalog : catalog.tools || [];
	let list = [];
	if (EXTRA_SLUGS.length) {
		list = EXTRA_SLUGS;
	} else if (ALL) {
		list = tools.map((t) => t.slug);
	} else if (CATEGORY) {
		list = tools.filter((t) => t.category === CATEGORY).map((t) => t.slug);
		for (const s of ALWAYS_EXTRA) {
			if (!list.includes(s) && tools.some((t) => t.slug === s)) list.push(s);
		}
	} else {
		throw new Error('Pass --all, --category=pdf, or --slugs=a,b');
	}
	return [...new Set(list)].sort();
};

/**
 * 等待样例/结果区大致稳定（多数工具进页自动 loadSample）。
 * @param {import('playwright-core').Page} page
 */
const waitForToolReady = async (page) => {
	await page.waitForLoadState('domcontentloaded');
	/** 隐藏语言提示条，避免截进图内 */
	await page.addStyleTag({
		content: `
      #langHintBar, .lang-hint, [data-lang-hint] { display: none !important; }
      .tool-preview-figure, .tool-h1-with-logo > .tool-preview-figure { display: none !important; }
      body { padding-top: 56px !important; }
    `,
	});
	/** 给客户端 pdf-lib / 样例脚本时间 */
	await page.waitForTimeout(1800);
	try {
		await page.waitForFunction(
			() => {
				const status = document.querySelector(
					'[id$="Status"], [id$="status"], [role="status"]'
				);
				const err = document.querySelector('[id$="Error"].text-danger, .text-danger[role="alert"]');
				const btn = document.querySelector(
					'button[id*="Download"], button[id*="download"], a[download]'
				);
				const busy = document.querySelector('.spinner-border, [aria-busy="true"]');
				if (busy && getComputedStyle(busy).display !== 'none') return false;
				if (err && err.textContent && err.offsetParent !== null) return true;
				if (btn && !btn.disabled) return true;
				if (status && (status.textContent || '').trim().length > 0) return true;
				return document.querySelector('#converter, .tool-page-heading') != null;
			},
			{ timeout: 12000 }
		);
	} catch {
		/* 超时仍截当前帧 */
	}
	await page.waitForTimeout(400);
};

/**
 * 截取 main 内工具区并裁成 1280×720 WebP。
 * @param {import('playwright-core').Page} page
 * @param {string} slug
 */
const captureOne = async (page, slug) => {
	const outPath = path.join(OUT_DIR, `${slug}.webp`);
	if (fs.existsSync(outPath) && !FORCE) {
		console.log(`[skip] ${slug} (exists; use --force)`);
		return 'skip';
	}
	const url = `${BASE}/tools/${slug}`;
	const res = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
	if (!res || !res.ok()) {
		console.warn(`[fail] ${slug} HTTP ${res ? res.status() : 'no-response'} ${url}`);
		return 'fail';
	}
	await waitForToolReady(page);

	const main = page.locator('main').first();
	const box = await main.boundingBox();
	if (!box) {
		console.warn(`[fail] ${slug} no main box`);
		return 'fail';
	}

	/** 优先截工具交互区；不足则整 main 顶部 */
	let clip = {
		x: Math.max(0, box.x),
		y: Math.max(0, box.y),
		width: Math.min(1280, box.width),
		height: Math.min(720, Math.max(box.height, 720)),
	};
	const converter = page.locator('#converter, .tool-page-heading').first();
	const cbox = await converter.boundingBox().catch(() => null);
	if (cbox) {
		clip = {
			x: Math.max(0, box.x),
			y: Math.max(0, cbox.y - 8),
			width: Math.min(1280, box.width),
			height: 720,
		};
	}

	const pngBuf = await page.screenshot({
		type: 'png',
		clip: {
			x: clip.x,
			y: clip.y,
			width: Math.min(clip.width, 1280),
			height: Math.min(clip.height, 720),
		},
	});

	await sharp(pngBuf)
		.resize(1280, 720, { fit: 'cover', position: 'top' })
		.webp({ quality: 82 })
		.toFile(outPath);

	const st = fs.statSync(outPath);
	console.log(`[ok] ${slug} → ${path.relative(ROOT, outPath)} (${st.size} bytes)`);
	return 'ok';
};

const main = async () => {
	fs.mkdirSync(OUT_DIR, { recursive: true });
	const slugs = resolveSlugs();
	console.log(`[capture-og] base=${BASE} slugs=${slugs.length} force=${FORCE}`);

	const browser = await chromium.launch({
		executablePath: CHROME,
		headless: true,
		args: ['--force-color-profile=srgb', '--disable-font-subpixel-positioning'],
	});
	const context = await browser.newContext({
		viewport: { width: 1280, height: 900 },
		deviceScaleFactor: 1,
		colorScheme: 'light',
		locale: 'en-US',
	});
	const page = await context.newPage();

	const tallies = { ok: 0, skip: 0, fail: 0 };
	for (const slug of slugs) {
		const r = await captureOne(page, slug);
		tallies[r] = (tallies[r] || 0) + 1;
	}

	await browser.close();
	console.log(`[capture-og] done`, tallies);
	if (tallies.fail > 0) process.exitCode = 1;
};

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
