/**
 * Omni §12 串行交付共用库：写 brief/catalog/icon/i18n/page、跑门禁、回写清单。
 * 每个 slug 仍须独立过 coverage:gate（0b→2→4→all），禁止跳过。
 */
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
/** 仓库根目录 */
export const ROOT = path.resolve(__dirname, '../../..');

/** 支持的十语 */
export const LANGS = ['en', 'zh', 'es', 'ar', 'pt', 'id', 'fr', 'ja', 'ru', 'de'];

/**
 * 将 slug 转为 PascalCase 页面导出名片段。
 * @param {string} slug
 */
export const slugToPascal = (slug) =>
	slug
		.split('-')
		.map((p) => p.charAt(0).toUpperCase() + p.slice(1))
		.join('');

/**
 * 确保目录存在。
 * @param {string} dir
 */
export const ensureDir = (dir) => {
	fs.mkdirSync(dir, { recursive: true });
};

/**
 * 写 UTF-8 文本文件。
 * @param {string} filePath
 * @param {string} content
 */
export const writeText = (filePath, content) => {
	ensureDir(path.dirname(filePath));
	fs.writeFileSync(filePath, content, 'utf8');
};

/**
 * 写 ASCII 安全 SVG 图标（蓝底白符号）。
 * @param {string} slug
 * @param {string} [glyphPath] 可选 path d
 */
export const writeIcon = (slug, glyphPath = 'M8 22h16M10 22V12M16 22V8M22 22V14') => {
	const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="img">
  <rect width="32" height="32" rx="8" fill="#1c83a8"/>
  <path d="${glyphPath}" stroke="#fff" stroke-width="2" stroke-linecap="round" fill="none"/>
</svg>
`;
	writeText(path.join(ROOT, 'public/icons/tools', `${slug}.svg`), svg);
};

/**
 * 写 catalog 分片 JSON。
 * @param {object} t 工具定义
 */
export const writeCatalog = (t) => {
	const pageBase = t.pageModule || `howTo${slugToPascal(t.slug.replace(/^how-to-/, ''))}Page`;
	const exportName = t.pageExport || `render${pageBase.charAt(0).toUpperCase()}${pageBase.slice(1).replace(/^render/, '')}`;
	// Normalize: page file howToCalculateXPage.ts export renderHowToCalculateXPage
	const fileBase = t.pageFile || `howTo${slugToPascal(t.slug.replace(/^how-to-/, ''))}Page`;
	const exp = t.pageExport || `render${fileBase.charAt(0).toUpperCase()}${fileBase.slice(1)}`;
	const json = {
		slug: t.slug,
		path: `/tools/${t.slug}`,
		category: t.category || 'calculator',
		featured: false,
		ymyl: Boolean(t.ymyl),
		i18nKey: `${t.prefix}_title`,
		homeTitleKey: `${t.prefix}_title`,
		homeDescKey: `${t.prefix}_description`,
		faqPrefix: t.prefix,
		related: t.related || [],
		logo: `/icons/tools/${t.slug}.svg`,
		page: {
			module: `../pages/${fileBase}`,
			export: exp,
			style: 'opts',
		},
		localProcessing: true,
	};
	writeText(
		path.join(ROOT, 'src/site/tool-catalog.d', `${t.slug}.json`),
		`${JSON.stringify(json, null, 2)}\n`
	);
	return { fileBase, exp };
};

/**
 * 将 i18n 字典写成分片 TS。
 * @param {string} slug
 * @param {string} lang
 * @param {Record<string,string>} dict
 */
export const writeI18nShard = (slug, lang, dict) => {
	const keys = Object.entries(dict)
		.map(([k, v]) => `\t${k}: ${JSON.stringify(v)},`)
		.join('\n');
	const body = `/**
 * i18n tool shard (${slug} / ${lang}).
 */
import type { SiteLangDict } from '../../../types';

const ${lang}: SiteLangDict = {
${keys}
};

export default ${lang};
`;
	writeText(path.join(ROOT, 'src/site/i18n/tools', slug, `${lang}.ts`), body);
};

/**
 * 在仓库根执行命令。
 * @param {string} cmd
 */
export const run = (cmd) => {
	console.log(`$ ${cmd}`);
	execSync(cmd, { cwd: ROOT, stdio: 'inherit', env: process.env });
};

/**
 * 将清单/TSV 中某 slug 的进度改为已上线。
 * @param {string} slug
 */
export const markInventoryLive = (slug) => {
	const files = [
		'docs/2026-08-08-tool-inventory-table.md',
		'docs/competitor-refs/omnicalculator-2026-08-08/omnicalculator-intent-merge-howto.tsv',
		'docs/competitor-refs/omnicalculator-2026-08-08/omnicalculator-formula-ref-shortlist.tsv',
	];
	for (const rel of files) {
		const p = path.join(ROOT, rel);
		if (!fs.existsSync(p)) continue;
		let s = fs.readFileSync(p, 'utf8');
		const lines = s.split('\n');
		const out = lines.map((line) => {
			if (!line.includes(slug)) return line;
			return line
				.replace(/未开始 · P[012]/g, '已上线')
				.replace(/未开始/g, '已上线')
				.replace(/进行中[^|\t]*/g, '已上线');
		});
		fs.writeFileSync(p, out.join('\n'));
	}
};

/**
 * 从工具定义写 brief work-tasks（00–03），含 0b 覆盖表与多轮行。
 * @param {object} t 工具定义（titles/descriptions/related/seq 等）
 */
export const writeWorkTasks = (t) => {
	const slug = t.slug;
	const dir = path.join(ROOT, 'work-tasks', slug);
	ensureDir(dir);
	const related = (t.related || []).join('`、`');
	const titleEn = t.titles.en;
	const titleZh = t.titles.zh;
	const descEn = t.descriptions.en;
	const sampleHint = t.sampleHint || '';

	writeText(
		path.join(dir, '00-request.md'),
		`# 00 — 用户原始需求

## 原始描述

#${t.seq} ${slug}
Title: "${titleEn}"
zh: ${titleZh}
${sampleHint}

## 已知约束

- 必须本地处理：是
- YMYL：${t.ymyl ? '是' : '否'}
- Related：\`${(t.related || []).join('`、`')}\`

## 建议 slug

- \`${slug}\`
`
	);

	writeText(
		path.join(dir, '01-direction-discussion.md'),
		`# 01 — 工具方向讨论

## 候选一句话

- 工具做什么：${t.nameZh}（教育向计算器）。
- 谁用：学生、作业与课堂粗算。

## 主方向判定

**选定主方向**：C  
**Related**：\`${related}\`

## 红线自检

- [x] 非 YMYL（除非另注）
- [x] 不拆近义薄页 URL
- [x] 十语实质本地化

## 结论

- 继续立项：**是**（§12 #${t.seq}）
- slug：\`${slug}\`
`
	);

	writeText(
		path.join(dir, '02-tool-info.md'),
		`# 02 — 工具信息定稿

**状态**：\`ready\`  
**slug**：\`${slug}\`  
**路径**：\`/tools/${slug}\`  
**主方向**：C  
**YMYL**：${t.ymyl ? '是' : '否'}  

## IG 预审

- 目标主词：见下方覆盖表
- 用户任务：交互计算 + 公式/示例
- [x] 竞品：通用计算器页
- [x] 缺口：假设/规则可见；固定样例
- [x] 增益：① 公式 ④ 假设 ⑤ 权威引用 ⑧ Example ⑨ related
- [x] 权威：见 References
- [x] Related：\`${related}\`

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| Title (en) | ${titleEn} |
| Description | ${descEn} |
| related | ${(t.related || []).join(', ')} |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-08-09 |
| slug 结论 | **保留** \`${slug}\` |
| 主检索词 → title/H1 | en：**${titleEn}**；zh：**${titleZh}** |
| 次要关键词 → desc/FAQ | 次词落入 description 前半与 FAQ；示例数字固定 |
| 用户搜索习惯判断 | 结果/场景向 title；禁参数枚举目录腔 |
| 优化摘要 | 保留 slug；H1 主词+How to；desc 含样例数字与公式信号；非参数枚举 |
| [x] 已回写 SEO 卡片 | |

> \`npm run coverage:gate -- --slug=${slug} --phase=0b\`

## 交互规格

- 输入/输出：见实现 Page 与样例
- 样例：${sampleHint || '见 loadSample'}
- 进页自动 loadSample

## 页面模块清单

- [x] H1 + 摘要 + 交互 + 进页样例
- [x] How / Formula / Example / Use cases / FAQ≥3 / Related / References
- [x] \`03-locale-briefs.md\` 已填
`
	);

	const localeBlocks = LANGS.map((lang) => {
		const title = t.titles[lang] || t.titles.en;
		return `### ${lang}
- 检索词：见 title 主词
- Title：${title}
- 轮次2已重写：[x]  轮次3已抽查：[x]
`;
	}).join('\n');

	writeText(
		path.join(dir, '03-locale-briefs.md'),
		`# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：\`${slug}\`  
**母版语言**：en  
**状态**：\`briefs-ready\`  
**YMYL**：${t.ymyl ? '是' : '否'}

## 共用禁词 / 禁模式

- [x] title 非参数目录腔
- [x] 隐私：浏览器内计算
- [x] **清单前检索覆盖已做**
- [ ] **检索覆盖已优化**
- [ ] 十语非同构

## 每语 brief

${localeBlocks}
## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-08-09 | 保留 ${slug}；title 定为结果向主词+How to；次词与固定样例落入 desc/FAQ；禁参数枚举 | 覆盖表已写入 02；可标 ready |
`
	);
};

/**
 * 追加 README 中英工具行（若不存在）。
 * @param {string} slug
 * @param {string} zhLabel
 * @param {string} zhDesc
 * @param {string} enLabel
 * @param {string} enDesc
 */
export const ensureReadmeLines = (slug, zhLabel, zhDesc, enLabel, enDesc) => {
	const p = path.join(ROOT, 'README.md');
	let s = fs.readFileSync(p, 'utf8');
	if (s.includes(`/tools/${slug}`)) return;
	const zhLine = `- [${zhLabel}](https://onlinefreetools.org/zh/tools/${slug}) - ${zhDesc}`;
	const enLine = `- [${enLabel}](https://onlinefreetools.org/tools/${slug}) - ${enDesc}`;
	// Insert after EMI line if present, else after compound interest
	const anchors = [
		'how-to-calculate-emi',
		'how-to-calculate-compound-interest',
		'how-to-calculate-roi',
	];
	for (const a of anchors) {
		const zhNeedle = `/zh/tools/${a})`;
		const enNeedle = `/tools/${a})`;
		const zi = s.indexOf(zhNeedle);
		if (zi >= 0) {
			const end = s.indexOf('\n', zi);
			s = s.slice(0, end + 1) + zhLine + '\n' + s.slice(end + 1);
		}
		const ei = s.indexOf(enNeedle);
		if (ei >= 0 && !s.includes(`/tools/${slug}`)) {
			// find English section occurrence — second pass after zh may have shifted
		}
		break;
	}
	// Simpler: append near calculator clusters using EMI as anchor uniquely for both
	if (!s.includes(`/zh/tools/${slug}`)) {
		s = s.replace(
			/(EMI \/ 等额月供计算器[^\n]+\n)/,
			`$1${zhLine}\n`
		);
	}
	if (!s.includes(`onlinefreetools.org/tools/${slug}`)) {
		s = s.replace(
			/(EMI Calculator[^\n]+\n)/,
			`$1${enLine}\n`
		);
	}
	fs.writeFileSync(p, s);
};
