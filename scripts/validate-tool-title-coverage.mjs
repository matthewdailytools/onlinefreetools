/**
 * 检索覆盖启发式门禁：
 * - COVER-FAIL：参数枚举 title，且该工具 02 已含「清单前检索覆盖」专节；
 *   以及已含专节时覆盖表未填 / 03 未勾选。
 * - COVER-WARN：旧工具无专节但仍像参数枚举 title——提示债务，不炸 CI。
 *
 * 分阶段 0b/2/4 见 `validate-tool-coverage-rounds.mjs`（coverage:gate）。
 * 通过本检查 ≠ 完成 localization 步 2/4 的实质检索判断。
 * @returns {number} FAIL 条数（0 = OK）
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
	localeBriefHasCoverageItem,
} from './lib/title-coverage-heuristics.mjs';

const require = createRequire(import.meta.url);
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const catalog = require(path.join(root, 'src/site/tool-catalog.json'));
const i18nDir = path.join(root, 'src/site/i18n');
const workTasksDir = path.join(root, 'work-tasks');

const TITLE_LANGS = ['en', 'zh', 'es', 'ja'];

/**
 * @param {string} code
 * @param {string} faqPrefix
 * @returns {string | null}
 */
const extractTitle = (code, faqPrefix) => {
	const escaped = faqPrefix.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	const re = new RegExp(`${escaped}_title:\\s*['"]([^'"]+)['"]`);
	const m = code.match(re);
	return m ? m[1] : null;
};

/**
 * @returns {number}
 */
export const validateToolTitleCoverage = () => {
	let fails = 0;
	let warns = 0;
	/** @type {Record<string, string>} */
	const langCode = {};
	for (const lang of TITLE_LANGS) {
		const p = path.join(i18nDir, `${lang}.ts`);
		if (fs.existsSync(p)) langCode[lang] = fs.readFileSync(p, 'utf8');
	}

	for (const tool of catalog) {
		const { slug, faqPrefix } = tool;
		const infoPath = path.join(workTasksDir, slug, '02-tool-info.md');
		const hasCoverageSection =
			fs.existsSync(infoPath) && /清单前检索覆盖/.test(fs.readFileSync(infoPath, 'utf8'));
		/** 有专节即对 title 严格 FAIL；无专节仅 WARN */
		const titleStrict = hasCoverageSection;

		for (const lang of TITLE_LANGS) {
			const code = langCode[lang];
			if (!code) continue;
			const title = extractTitle(code, faqPrefix);
			if (!title) continue;
			if (!isParamEnumTitle(title)) continue;
			if (titleStrict) {
				console.warn(
					`[COVER-FAIL] ${lang}.ts: ${slug} title looks like parameter-enumeration catalog — "${title}"`
				);
				fails += 1;
			} else {
				console.warn(
					`[COVER-WARN] ${lang}.ts: ${slug} title looks like parameter-enumeration catalog — "${title}"`
				);
				warns += 1;
			}
		}

		if (hasCoverageSection) {
			const md = fs.readFileSync(infoPath, 'utf8');
			const status = (md.match(/\*\*状态\*\*[：:]\s*`([^`]+)`/) || [])[1] || '';
			if (status === 'ready' || status === 'implemented') {
				const cov = checkCoverageTableFilled(md);
				if (!cov.ok) {
					console.warn(`[COVER-FAIL] work-tasks/${slug}/02-tool-info.md: ${cov.reason}`);
					fails += 1;
				}
				const notesPath = path.join(workTasksDir, slug, 'notes.md');
				const mdNotes = fs.existsSync(notesPath) ? fs.readFileSync(notesPath, 'utf8') : '';
				const intent = checkIntentReviewFilled(`${md}\n${mdNotes}`);
				if (!intent.skipped && !intent.ok) {
					console.warn(`[COVER-FAIL] work-tasks/${slug}: ${intent.reason}`);
					fails += 1;
				}
			}
		}

		const briefPath = path.join(workTasksDir, slug, '03-locale-briefs.md');
		if (fs.existsSync(briefPath)) {
			const md = fs.readFileSync(briefPath, 'utf8');
			if (localeBriefHasCoverageItem(md)) {
				const status = (md.match(/\*\*状态\*\*[：:]\s*`([^`]+)`/) || [])[1] || '';
				if (
					(status === 'briefs-ready' || status === 'i18n-done') &&
					!hasLocaleBriefCoverageCheck(md)
				) {
					console.warn(
						`[COVER-FAIL] work-tasks/${slug}/03-locale-briefs.md: 未勾选「清单前检索覆盖已做」`
					);
					fails += 1;
				}
			}
		}
	}

	if (warns > 0) {
		console.log(
			`Title/coverage: ${warns} legacy WARN(s) (not failing CI). Prefer result/scenario-oriented H1 when next editing those tools.`
		);
	}
	return fails;
};

const isMain =
	process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);

if (isMain) {
	const n = validateToolTitleCoverage();
	if (n === 0) {
		console.log('Title/coverage validator: OK');
		process.exit(0);
	}
	console.log(`Title/coverage validator: ${n} FAIL(s)`);
	process.exit(2);
}
