/**
 * 检索覆盖分阶段门禁：0b / 步2(1b) / 步4(2b)。
 *
 * 用法：
 *   node scripts/validate-tool-coverage-rounds.mjs --slug=jwt-decoder --phase=0b
 *   npm run coverage:gate -- --slug=jwt-decoder --phase=all
 *
 * 分析仍由 Agent 完成；本脚本只验收产物，不能替代实质检索判断。
 */
import fs from 'fs';
import path from 'path';
import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import {
	isParamEnumTitle,
	checkCoverageTableFilled,
	checkIntentReviewFilled,
	hasLocaleBriefCoverageCheck,
	hasLocaleBriefIntentReviewCheck,
} from './lib/title-coverage-heuristics.mjs';

const require = createRequire(import.meta.url);
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const catalog = require(path.join(root, 'src/site/tool-catalog.json'));
const i18nDir = path.join(root, 'src/site/i18n');
const workTasksDir = path.join(root, 'work-tasks');
const toolsI18nDir = path.join(root, 'src/site/i18n/tools');

/** 默认抽查语（步 4） */
const SAMPLE_LANGS = ['en', 'zh', 'es', 'ja'];

/** 多轮行摘要最短字数（排除「完成」等空话） */
const MIN_ROUND_SUMMARY = 20;

/**
 * 解析 CLI：`--slug=` `--phase=`。
 * @param {string[]} argv
 */
const parseArgs = (argv) => {
	/** @type {{ slug?: string, phase: string, allWithSection?: boolean }} */
	const out = { phase: 'all' };
	for (const a of argv) {
		if (a.startsWith('--slug=')) out.slug = a.slice('--slug='.length).trim();
		else if (a.startsWith('--phase=')) out.phase = a.slice('--phase='.length).trim();
		else if (a === '--all-with-section') out.allWithSection = true;
	}
	return out;
};

/**
 * @param {string} slug
 * @param {string} faqPrefix
 * @param {string} lang
 * @param {'title'|'description'} field
 * @returns {string | null}
 */
const readToolField = (slug, faqPrefix, lang, field) => {
	const shard = path.join(toolsI18nDir, slug, `${lang}.ts`);
	/** 优先分片；否则读合并 i18n */
	let code = '';
	if (fs.existsSync(shard)) code = fs.readFileSync(shard, 'utf8');
	else {
		const merged = path.join(i18nDir, `${lang}.ts`);
		if (!fs.existsSync(merged)) return null;
		code = fs.readFileSync(merged, 'utf8');
	}
	const key = `${faqPrefix}_${field}`;
	const re = new RegExp(
		`${key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}:\\s*(?:\\n\\s*)?(?:"([^"]*)"|'((?:\\\\'|[^'])*)')`,
		'm'
	);
	const m = code.match(re);
	return m ? (m[1] ?? m[2] ?? '').replace(/\\'/g, "'") : null;
};

/**
 * 从 catalog 取工具元数据。
 * @param {string} slug
 */
const getTool = (slug) => catalog.find((t) => t.slug === slug);

/**
 * 解析 03 多轮表中带行 ID 的行（0b / 1b / 2b）。
 * 兼容「0b 清单前…」「| 0b |」「| 1b 母版…|」。
 * @param {string} md
 * @param {string} rowId
 * @returns {{ date: string, what: string, result: string } | null}
 */
export const parseRoundRow = (md, rowId) => {
	if (!md) return null;
	const lines = md.split('\n');
	const re = new RegExp(
		`^\\|\\s*${rowId}\\b[^|]*\\|\\s*([^|]*)\\|\\s*([^|]*)\\|\\s*([^|]*)\\|\\s*$`
	);
	for (const line of lines) {
		const m = line.match(re);
		if (!m) continue;
		return {
			date: m[1].trim(),
			what: m[2].trim(),
			result: m[3].trim(),
		};
	}
	return null;
};

/**
 * 多轮行是否有实质摘要。
 * @param {{ date: string, what: string, result: string } | null} row
 * @param {string} label
 * @returns {string[]}
 */
const validateRoundRow = (row, label) => {
	/** @type {string[]} */
	const errs = [];
	if (!row) {
		errs.push(`03 缺少多轮行「${label}」`);
		return errs;
	}
	if (!row.date || row.date === '|' || /^\d{4}-\d{2}-\d{2}/.test(row.date) === false) {
		/** 允许日期在「做了什么」里，但日期列应有 YYYY-MM-DD */
		if (!/\d{4}-\d{2}-\d{2}/.test(`${row.date} ${row.what} ${row.result}`)) {
			errs.push(`03 行 ${label}：缺少日期 YYYY-MM-DD`);
		}
	}
	const summary = `${row.what} ${row.result}`.trim();
	const emptyish = /^(完成|ok|done|pass|-|—|已做)?$/i.test(summary.replace(/\s/g, ''));
	if (summary.length < MIN_ROUND_SUMMARY || emptyish) {
		errs.push(`03 行 ${label}：优化摘要过短或空话（须 ≥${MIN_ROUND_SUMMARY} 字说明改了什么）`);
	}
	return errs;
};

/**
 * 从 02 提取主检索词落点文本。
 * @param {string} md
 */
const extractMainKeywordCell = (md) => {
	const mainRow =
		md.match(/\|\s*主检索词[^|]*\|\s*([^|\n]+)\|/) || md.match(/\|\s*主词\s*→\s*H1\s*\|\s*([^|\n]+)\|/);
	return mainRow ? mainRow[1].trim() : '';
};

/**
 * 简单 token 交集：主词单元格与 title 是否有共同检索信号。
 * @param {string} keywordCell
 * @param {string} title
 */
const hasKeywordTitleOverlap = (keywordCell, title) => {
	const norm = (s) =>
		s
			.toLowerCase()
			.replace(/[^\p{L}\p{N}\s/+-]/gu, ' ')
			.split(/\s+/)
			.filter((t) => t.length >= 2);
	const a = new Set(norm(keywordCell));
	const b = norm(title);
	if (!a.size || !b.length) return false;
	return b.some((t) => a.has(t) || [...a].some((k) => k.includes(t) || t.includes(k)));
};

/**
 * 页面模块清单是否已大量勾选（用于 0b：表空却勾清单 → FAIL）。
 * @param {string} md02
 */
const moduleChecklistHeavilyChecked = (md02) => {
	const section = md02.split(/##\s*页面模块清单/)[1] || '';
	const checked = (section.match(/\[[xX]\]/g) || []).length;
	return checked >= 5;
};

/**
 * 对单一 slug / phase 跑检查。
 * @param {string} slug
 * @param {string} phase
 * @returns {string[]} 错误列表
 */
export const validateCoveragePhase = (slug, phase) => {
	/** @type {string[]} */
	const errs = [];
	const tool = getTool(slug);
	const faqPrefix = tool?.faqPrefix || `tool_${slug.replace(/-/g, '_')}`;
	const infoPath = path.join(workTasksDir, slug, '02-tool-info.md');
	const briefPath = path.join(workTasksDir, slug, '03-locale-briefs.md');
	const notesPath = path.join(workTasksDir, slug, 'notes.md');

	if (!fs.existsSync(infoPath)) {
		errs.push(`缺少 work-tasks/${slug}/02-tool-info.md`);
		return errs;
	}
	if (!fs.existsSync(briefPath)) {
		errs.push(`缺少 work-tasks/${slug}/03-locale-briefs.md`);
		return errs;
	}

	const md02 = fs.readFileSync(infoPath, 'utf8');
	const md03 = fs.readFileSync(briefPath, 'utf8');
	const mdNotes = fs.existsSync(notesPath) ? fs.readFileSync(notesPath, 'utf8') : '';
	const phases = phase === 'all' ? ['0b', '2', '4'] : [phase];

	for (const p of phases) {
		if (p === '0b') {
			if (!/清单前检索覆盖/.test(md02)) {
				errs.push(`${slug}: 02 缺少「清单前检索覆盖」专节`);
			} else {
				const cov = checkCoverageTableFilled(md02);
				if (!cov.ok) errs.push(`${slug}: 02 ${cov.reason}`);
			}
			errs.push(...validateRoundRow(parseRoundRow(md03, '0b'), '0b').map((e) => `${slug}: ${e}`));
			if (!hasLocaleBriefCoverageCheck(md03) && /清单前检索覆盖已做/.test(md03)) {
				/** 有检查项但未勾 */
				const status = (md03.match(/\*\*状态\*\*[：:]\s*`([^`]+)`/) || [])[1] || '';
				if (status === 'briefs-ready' || status === 'i18n-done' || status === 'draft') {
					if (!hasLocaleBriefCoverageCheck(md03)) {
						errs.push(`${slug}: 03 未勾选「清单前检索覆盖已做」`);
					}
				}
			}
			if (!checkCoverageTableFilled(md02).ok && moduleChecklistHeavilyChecked(md02)) {
				errs.push(`${slug}: 覆盖表未填满却已勾选大量「页面模块清单」项`);
			}
			const intent = checkIntentReviewFilled(`${md02}\n${mdNotes}`);
			if (!intent.skipped && !intent.ok) {
				errs.push(`${slug}: 02/notes ${intent.reason}`);
			}
			if (
				/用户意图审查已做/.test(md03) &&
				!hasLocaleBriefIntentReviewCheck(md03)
			) {
				const status = (md03.match(/\*\*状态\*\*[：:]\s*`([^`]+)`/) || [])[1] || '';
				if (status === 'briefs-ready' || status === 'i18n-done' || status === 'draft') {
					errs.push(`${slug}: 03 未勾选「用户意图审查已做」`);
				}
			}
		}

		if (p === '2') {
			const title =
				readToolField(slug, faqPrefix, 'en', 'title') ||
				readToolField(slug, faqPrefix, 'zh', 'title');
			const desc =
				readToolField(slug, faqPrefix, 'en', 'description') ||
				readToolField(slug, faqPrefix, 'zh', 'description');
			if (!title) errs.push(`${slug}: 缺少母版 tool_*_title（en 或 zh）`);
			if (!desc) errs.push(`${slug}: 缺少母版 tool_*_description（en 或 zh）`);
			if (title && isParamEnumTitle(title)) {
				errs.push(`${slug}: 母版 title 像参数枚举目录腔 — "${title}"`);
			}
			errs.push(...validateRoundRow(parseRoundRow(md03, '1b'), '1b').map((e) => `${slug}: ${e}`));
			const kw = extractMainKeywordCell(md02);
			if (title && kw && !hasKeywordTitleOverlap(kw, title)) {
				errs.push(
					`${slug}: 母版 title 与 02「主检索词→H1」无明显关键词交集（请回写 H1 或覆盖表）`
				);
			}
		}

		if (p === '4') {
			/** @type {string[]} */
			const listed = [];
			for (const lang of SAMPLE_LANGS) {
				const title = readToolField(slug, faqPrefix, lang, 'title');
				if (!title) {
					errs.push(`${slug}: 抽查语 ${lang} 缺少 title`);
					continue;
				}
				listed.push(lang);
				if (isParamEnumTitle(title)) {
					errs.push(`${slug}: ${lang} title 像参数枚举目录腔 — "${title}"`);
				}
			}
			if (listed.length < 4) {
				errs.push(`${slug}: 步4 须至少 en+zh+es+ja 四语有 title（当前 ${listed.length}）`);
			}
			const row2b = parseRoundRow(md03, '2b');
			errs.push(...validateRoundRow(row2b, '2b').map((e) => `${slug}: ${e}`));
			const blob = row2b ? `${row2b.what} ${row2b.result}` : '';
			const langHits = SAMPLE_LANGS.filter((l) => new RegExp(`\\b${l}\\b`, 'i').test(blob));
			if (langHits.length < 4) {
				errs.push(
					`${slug}: 03 行 2b 须列出抽查语 en,zh 与 ≥2 他语（如 en,zh,es,ja），当前命中: ${langHits.join(',') || '(无)'}`
				);
			}
			const optChecked =
				/\[[xX]\]\s*\*\*检索覆盖已优化\*\*/.test(md03) ||
				/\[[xX]\]\s*检索覆盖已优化/.test(md03);
			if (!optChecked) {
				errs.push(`${slug}: 03 未勾选「检索覆盖已优化」`);
			}
		}
	}

	return errs;
};

/**
 * 对所有「02 含清单前检索覆盖专节」的 catalog 工具跑 phase=all。
 * @returns {string[]}
 */
export const validateAllToolsWithCoverageSection = () => {
	/** @type {string[]} */
	const all = [];
	for (const t of catalog) {
		const infoPath = path.join(workTasksDir, t.slug, '02-tool-info.md');
		if (!fs.existsSync(infoPath)) continue;
		const md = fs.readFileSync(infoPath, 'utf8');
		if (!/清单前检索覆盖/.test(md)) continue;
		const status = (md.match(/\*\*状态\*\*[：:]\s*`([^`]+)`/) || [])[1] || '';
		/** draft 且未 ready 时只提醒 0b；implemented/ready 跑 all */
		if (status === 'implemented' || status === 'ready') {
			all.push(...validateCoveragePhase(t.slug, 'all'));
		}
	}
	return all;
};

/**
 * @returns {number} 失败条数
 */
export const runCoverageGateCli = (argv = process.argv.slice(2)) => {
	const args = parseArgs(argv);
	/** @type {string[]} */
	let errs = [];

	if (args.allWithSection || (!args.slug && args.phase === 'all')) {
		errs = validateAllToolsWithCoverageSection();
	} else if (!args.slug) {
		console.error('usage: coverage:gate -- --slug=<slug> --phase=0b|2|4|all');
		console.error('   or: coverage:gate -- --all-with-section');
		return 1;
	} else {
		errs = validateCoveragePhase(args.slug, args.phase);
	}

	if (errs.length === 0) {
		console.log(
			`coverage:gate OK${args.slug ? ` slug=${args.slug}` : ' (all-with-section)'} phase=${args.phase}`
		);
		return 0;
	}
	for (const e of errs) console.warn(`[COVER-FAIL] ${e}`);
	console.log(`coverage:gate: ${errs.length} issue(s)`);
	return errs.length;
};

const isMain =
	process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);

if (isMain) {
	process.exit(runCoverageGateCli() === 0 ? 0 : 2);
}
