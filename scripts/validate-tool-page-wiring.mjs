#!/usr/bin/env node
/**
 * 单工具页 wiring / 内联脚本防呆门禁（拦 catalog style 与模板字符串转义）。
 *
 * 用法：
 *   node scripts/validate-tool-page-wiring.mjs --slug=terraform-cidrsubnet
 *   node scripts/validate-tool-page-wiring.mjs --slug=… --require-html
 *   node scripts/validate-tool-page-wiring.mjs --all
 *
 * 检查：
 * 1) catalog `page.style` 与 Page export 形参一致（opts ↔ 单对象；pair ↔ lang, defaultLang）
 * 2) Page 源码中 `extraBodyHtml` 类模板里，占位正则须写 `\\w`（文件里两层反斜杠），禁止单层 `\w`
 * 3) 若已有预渲染 HTML：禁止出现字面 `/{(w+)}/`；须含 `loadSample`（可用 --require-html 强制存在）
 * 4) 含 loadSample 的内联 script 须通过 `node --check`（防 extraBodyHtml 里 `\n` 被吃掉）
 */
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { ROOT, CATALOG_DIR, kebabToCamel, defaultPageMeta, readJson } from './tool-modules/lib.mjs';

const args = process.argv.slice(2);
const slugArg = args.find((a) => a.startsWith('--slug='))?.slice('--slug='.length);
const requireHtml = args.includes('--require-html');
const checkAll = args.includes('--all');

/**
 * @param {string} msg
 * @param {string[]} bag
 */
function fail(msg, bag) {
	bag.push(msg);
}

/**
 * 从 Page.ts 推断 catalog 应使用的 style。
 * @param {string} source
 * @param {string} exportName
 * @returns {'opts'|'pair'|'unknown'}
 */
function detectExportStyle(source, exportName) {
	const marker = `export const ${exportName}`;
	const idx = source.indexOf(marker);
	if (idx < 0) return 'unknown';
	/** 导出名后一小段，足够判断形参形态。 */
	const window = source.slice(idx, idx + 280);
	if (/\(\s*opts\s*:/.test(window)) return 'opts';
	if (/\(\s*\{\s*lang\b/.test(window)) return 'opts';
	if (/\(\s*lang\s*:/.test(window)) return 'pair';
	return 'unknown';
}

/**
 * 模板字符串里占位正则写成单层 `\w` 会被吃掉；源码须为 `\\w`。
 * 匹配文件中的 `/{(\w+)}/`（一层反斜杠），不匹配已正确的 `/{(\\w+)}/`。
 * @param {string} source
 * @returns {boolean}
 */
function hasEatenWordClassInPlaceholder(source) {
	/** 一层反斜杠：`/{(\w+)}/` */
	const oneSlash = /\/\{\(\\w\+\)\}/g;
	/** 两层反斜杠：`/{(\\w+)}/` */
	const twoSlash = /\/\{\(\\\\w\+\)\}/g;
	const one = source.match(oneSlash) || [];
	const two = source.match(twoSlash) || [];
	return one.length > two.length;
}

/**
 * 同类：`\d` / `\s` 占位形式（较少见，一并拦）。
 * @param {string} source
 * @returns {string[]}
 */
function otherEatenClasses(source) {
	/** @type {string[]} */
	const hits = [];
	for (const cls of ['d', 's']) {
		const one = new RegExp(`\\/\\{\\(\\\\${cls}\\+\\)\\}`, 'g');
		const two = new RegExp(`\\/\\{\\(\\\\\\\\${cls}\\+\\)\\}`, 'g');
		const a = source.match(one) || [];
		const b = source.match(two) || [];
		if (a.length > b.length) hits.push(`\\${cls}`);
	}
	return hits;
}

/**
 * 解析模块相对路径为磁盘绝对路径。
 * @param {string} moduleField catalog page.module
 */
function resolvePagePath(moduleField) {
	const rel = moduleField.startsWith('../pages/')
		? moduleField.replace(/^\.\.\//, 'src/')
		: moduleField.startsWith('./')
			? path.join('src/site', moduleField)
			: moduleField.startsWith('src/')
				? moduleField
				: path.join('src/pages', moduleField);
	const withTs = rel.endsWith('.ts') ? rel : `${rel}.ts`;
	return path.join(ROOT, withTs);
}

/**
 * 校验单个 slug。
 * @param {string} slug
 * @returns {string[]} 错误列表（空=通过）
 */
function validateSlug(slug) {
	/** @type {string[]} */
	const errs = [];
	const shardPath = path.join(CATALOG_DIR, `${slug}.json`);
	if (!fs.existsSync(shardPath)) {
		fail(`missing catalog shard: src/site/tool-catalog.d/${slug}.json`, errs);
		return errs;
	}
	const shard = readJson(shardPath);
	const page = shard.page || defaultPageMeta(slug);
	const style = page.style || 'opts';
	const exportName = page.export || defaultPageMeta(slug).export;
	const pagePath = resolvePagePath(page.module || defaultPageMeta(slug).module);
	if (!fs.existsSync(pagePath)) {
		fail(`missing page module: ${path.relative(ROOT, pagePath).replace(/\\/g, '/')}`, errs);
		return errs;
	}
	const source = fs.readFileSync(pagePath, 'utf8');
	const detected = detectExportStyle(source, exportName);
	if (detected === 'unknown') {
		fail(
			`${slug}: cannot find export ${exportName} signature in ${path.relative(ROOT, pagePath).replace(/\\/g, '/')}`,
			errs
		);
	} else if (detected !== style) {
		fail(
			`${slug}: catalog page.style="${style}" but ${exportName} looks like "${detected}" — new tools must use style "opts" with (opts: { lang, defaultLang, enabledLangs })`,
			errs
		);
	}

	if (hasEatenWordClassInPlaceholder(source)) {
		fail(
			`${slug}: Page source has /{(\\\\w+)}/ with only one backslash inside a template string — write two backslashes so prerendered HTML keeps \\\\w`,
			errs
		);
	}
	for (const cls of otherEatenClasses(source)) {
		fail(
			`${slug}: Page source placeholder regex class \\${cls} has only one backslash — double-escape inside extraBodyHtml template literals`,
			errs
		);
	}

	const htmlRel = path.join('public', '_pages', 'en', 'tools', `${slug}.html`);
	const htmlPath = path.join(ROOT, htmlRel);
	const htmlExists = fs.existsSync(htmlPath);
	if (!htmlExists) {
		if (requireHtml) {
			fail(`${slug}: missing prerendered HTML ${htmlRel.replace(/\\/g, '/')} (run build:site or prerender:tools)`, errs);
		}
		return errs;
	}
	const html = fs.readFileSync(htmlPath, 'utf8');
	/** 已预渲染时始终拦被吃掉的 \w（机械 bug，与是否新工具无关）。 */
	if (html.includes('/{(w+)}/')) {
		fail(
			`${slug}: prerendered HTML contains /{(w+)}/ (template ate \\\\w). Fix Page extraBodyHtml escapes and re-prerender.`,
			errs
		);
	}
	/** loadSample 仅在 ship（--require-html）强制；存量页可能用别名或无自动样例。 */
	if (requireHtml && !/\bloadSample\s*\(/.test(html) && !html.includes('function loadSample')) {
		fail(
			`${slug}: prerendered HTML has no loadSample — interactive tools must auto-run a sample (see tool-creation.mdc)`,
			errs
		);
	}
	/** 内联工具 script 语法（典型：`extraBodyHtml` 模板里写 `+ '\\n'` 误成 `+ '\n'`）。 */
	if (html.includes('function loadSample') || html.includes('loadSample()')) {
		const scriptBodies = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map((m) => m[1]);
		const toolScript = scriptBodies.find((s) => s.includes('function loadSample') || /\bloadSample\s*\(/.test(s));
		if (toolScript) {
			const cacheDir = path.join(ROOT, '.cache');
			fs.mkdirSync(cacheDir, { recursive: true });
			const tmp = path.join(cacheDir, `lint-tool-script-${slug}.js`);
			fs.writeFileSync(tmp, toolScript);
			const check = spawnSync(process.execPath, ['--check', tmp], { encoding: 'utf8' });
			if (check.status !== 0) {
				const detail = (check.stderr || check.stdout || 'syntax error').trim().split('\n').slice(-2).join(' ');
				fail(`${slug}: prerendered inline script syntax error — ${detail}`, errs);
			}
		}
	}
	return errs;
}

/**
 * 列出全部 catalog 分片 slug。
 * @returns {string[]}
 */
function allSlugs() {
	return fs
		.readdirSync(CATALOG_DIR)
		.filter((f) => f.endsWith('.json'))
		.map((f) => f.replace(/\.json$/, ''))
		.sort();
}

const slugs = checkAll ? allSlugs() : slugArg ? [slugArg] : [];
if (!slugs.length) {
	console.error('usage: node scripts/validate-tool-page-wiring.mjs --slug=<slug> [--require-html] | --all [--require-html]');
	process.exit(1);
}

/** @type {string[]} */
const allErrs = [];
for (const slug of slugs) {
	allErrs.push(...validateSlug(slug));
}

if (allErrs.length) {
	console.error('lint:tool-page FAILED');
	for (const e of allErrs) console.error(`  - ${e}`);
	process.exit(1);
}

console.log(
	`lint:tool-page OK (${slugs.length} slug(s)${requireHtml ? ', require-html' : ''})`
);
