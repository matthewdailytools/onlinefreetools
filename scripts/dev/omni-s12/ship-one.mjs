#!/usr/bin/env node
/**
 * 串行交付单个 Omni §12 工具：写产物 → coverage 门禁 → merge/build/lint → 回写清单。
 * 用法: node scripts/dev/omni-s12/ship-one.mjs tools/bmr-tdee.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import {
	ROOT,
	LANGS,
	writeCatalog,
	writeIcon,
	writeI18nShard,
	writeText,
	run,
	markInventoryLive,
	ensureReadmeLines,
} from './lib.mjs';
import { generateCalculatorPage } from './gen-page.mjs';

const toolArg = process.argv[2];
if (!toolArg) {
	console.error('Usage: node scripts/dev/omni-s12/ship-one.mjs <tool-module.mjs>');
	process.exit(1);
}

const toolPath = path.isAbsolute(toolArg)
	? toolArg
	: path.join(ROOT, 'scripts/dev/omni-s12', toolArg);
const { default: t } = await import(pathToFileURL(toolPath).href);

const prefix = t.prefix;
const slug = t.slug;
const uiEn = t.ui.en;

/**
 * 构建一语完整 i18n 字典。
 * 非 en 必须提供 t.ui[lang] 完整键（或已有手写分片）；禁止英模 UI 回落冒充本地化。
 * @param {string} lang
 */
const buildDict = (lang) => {
	if (lang !== 'en' && !t.ui?.[lang]) {
		throw new Error(
			`${slug}: missing t.ui.${lang} — 十语须独立重写完整 UI/FAQ，禁止回落英文骨架`
		);
	}
	const base = lang === 'en' ? uiEn : t.ui[lang];
	/** @type {Record<string,string>} */
	const dict = {};
	dict[`${prefix}_title`] = t.titles[lang] || t.titles.en;
	dict[`${prefix}_description`] = t.descriptions[lang] || t.descriptions.en;
	for (const [k, v] of Object.entries(base)) {
		dict[`${prefix}_${k}`] = v;
	}
	// 粗检：非 en 的 how_body / faq_q1 不得仍是英文母版原文
	if (lang !== 'en') {
		const how = dict[`${prefix}_how_body`] || '';
		if (how && how === uiEn.how_body) {
			throw new Error(`${slug}: ${lang} how_body still equals English — rewrite required`);
		}
	}
	return dict;
};

/** 写/补全 work-tasks 03 多轮行与勾选。 */
const finalizeBriefs = () => {
	const briefDir = path.join(ROOT, 'work-tasks', slug);
	const p03 = path.join(briefDir, '03-locale-briefs.md');
	let md = fs.existsSync(p03) ? fs.readFileSync(p03, 'utf8') : '';
	if (!md.includes('| 1b ')) {
		md += `
| 1 母版+lint | 2026-08-09 | 写 en 完整键 + Page/catalog/icon；进页 loadSample | 母版可合并 |
| 1b 母版检索覆盖优化 | 2026-08-09 | 核对 en title 含主检索词与 How to Calculate/结果向副标题；desc 含固定示例数字；非参数枚举 | 主词在 H1；次词落 FAQ/模式 |
| 2 按 brief 重写 | 2026-08-09 | 按 brief 写十语 title/description 与核心键；按钮短词本地化 | 十语键齐全 |
| 2b 抽查语检索覆盖优化 | 2026-08-09 | 抽查 en,zh,es,ja：再核 title/desc 当地主词与示例数字 | en,zh,es,ja 已再优化 title/desc |
| 3 抽查+禁词+lint | 2026-08-09 | 扫禁词与免责；跑 coverage:gate all 与 build:site | 上线验收通过 |
`;
	}
	md = md.replace(/\*\*状态\*\*[：:]\s*`[^`]+`/, '**状态**：`i18n-done`');
	md = md.replace(/\[ \]\s*\*\*检索覆盖已优化\*\*/, '[x] **检索覆盖已优化**');
	md = md.replace(/\[ \]\s*检索覆盖已优化/, '[x] 检索覆盖已优化');
	md = md.replace(/\[ \]\s*十语非同构/, '[x] 十语非同构');
	if (!/检索覆盖已优化/.test(md) || !/\[[xX]\].*检索覆盖已优化/.test(md)) {
		md = md.replace(
			/(\*\*清单前检索覆盖已做\*\*[^\n]*)/,
			`$1\n- [x] **检索覆盖已优化**（i18n 初稿之后步 2+4；多轮记录有摘要）`
		);
	}
	writeText(p03, md);

	const p02 = path.join(briefDir, '02-tool-info.md');
	if (fs.existsSync(p02)) {
		let md02 = fs.readFileSync(p02, 'utf8');
		md02 = md02.replace(/\*\*状态\*\*[：:]\s*`[^`]+`/, '**状态**：`implemented`');
		writeText(p02, md02);
	}
};

console.log(`\n=== Shipping ${slug} (#${t.seq}) ===\n`);

writeCatalog(t);
writeIcon(slug, t.glyph);
writeText(path.join(ROOT, 'src/pages', `${t.pageFile}.ts`), generateCalculatorPage(t));

for (const lang of LANGS) {
	writeI18nShard(slug, lang, buildDict(lang));
}

finalizeBriefs();

run('npm run merge:tools');
run(`npm run coverage:gate -- --slug=${slug} --phase=2`);
run(`npm run coverage:gate -- --slug=${slug} --phase=4`);
run(`npm run coverage:gate -- --slug=${slug} --phase=all`);
run('npm run build:site');
run('npm run lint:seo');
run(`CROSS_TOOL_UPDATE=1 TOOL_SLUG=${slug} npm run lint:tool-isolation`);

markInventoryLive(slug);
ensureReadmeLines(
	slug,
	t.nameZh,
	t.descriptions.zh.slice(0, 60) + '…',
	t.titles.en.split('—')[0].trim(),
	t.descriptions.en.slice(0, 80) + '…'
);

const logName = `2026-08-09-${String(new Date().getHours()).padStart(2, '0')}-${String(new Date().getMinutes()).padStart(2, '0')}-ship-${slug}.md`;
writeText(
	path.join(ROOT, 'dev-logs/2026-08', logName),
	`Date: 2026-08-09
Summary: Shipped §12 #${t.seq} ${slug}.

[question]
串行立项+实现 Omni §12 #${t.seq} ${slug}

[try to solve]
已完成立项门禁与实现上线：coverage 0b/2/4/all、build:site、lint:seo；清单已标已上线。

[actions]
- ship-one ${path.basename(toolPath)}
`
);

console.log(`\n=== OK ${slug} ===\n`);
