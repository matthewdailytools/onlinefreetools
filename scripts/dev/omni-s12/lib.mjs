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
