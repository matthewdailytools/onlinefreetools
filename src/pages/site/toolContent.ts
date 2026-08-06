/**
 * 工具页共享内容块：文章、可见 FAQ、YMYL 免责、相关工具、JSON-LD。
 * 不为 FAQ/HowTo 富结果优化；问答必须对用户可见。
 */
import type { SiteLang } from '../../site/i18n';
import { t } from '../../site/i18n';
import { escapeHtml } from './layout';
import { getToolBySlug, type ToolPageMeta } from '../../site/tools';

/**
 * 为当前语言生成规范路径（默认语无前缀）。
 */
export const withToolLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * 从 i18n 收集某工具的 FAQ 条目（q1/a1 … q5/a5）。
 * @param lang 语言
 * @param faqPrefix 如 tool_bmi
 */
export const collectToolFaqs = (
	lang: SiteLang,
	faqPrefix: string
): Array<{ question: string; answer: string }> => {
	const faqs: Array<{ question: string; answer: string }> = [];
	for (let i = 1; i <= 5; i++) {
		const qKey = `${faqPrefix}_faq_q${i}` as keyof typeof import('../../site/i18n/en').default;
		const aKey = `${faqPrefix}_faq_a${i}` as keyof typeof import('../../site/i18n/en').default;
		const question = t(lang, qKey);
		const answer = t(lang, aKey);
		// 若回落到 key 本身，说明未配置
		if (!question || question === qKey || !answer || answer === aKey) continue;
		faqs.push({ question, answer });
	}
	return faqs;
};

/**
 * 渲染可见 FAQ 区块。
 */
export const renderFaqSection = (lang: SiteLang, faqs: Array<{ question: string; answer: string }>) => {
	if (!faqs.length) return '';
	const items = faqs
		.map(
			(f) => `
      <div class="mb-3">
        <h3 class="h6 mb-1">${escapeHtml(f.question)}</h3>
        <p class="mb-0 text-muted">${escapeHtml(f.answer)}</p>
      </div>`
		)
		.join('');
	return `
    <section class="mt-4" id="faq" aria-labelledby="faq-heading">
      <h2 class="h5" id="faq-heading">${escapeHtml(t(lang, 'tool_faq_title'))}</h2>
      ${items}
    </section>`;
};

/**
 * 渲染 YMYL 免责与出处（仅当文案存在时）。
 */
export const renderYmylSection = (lang: SiteLang, faqPrefix: string, ymyl?: boolean) => {
	if (!ymyl) return '';
	const disclaimerKey = `${faqPrefix}_disclaimer` as keyof typeof import('../../site/i18n/en').default;
	const referencesKey = `${faqPrefix}_references` as keyof typeof import('../../site/i18n/en').default;
	const disclaimer = t(lang, disclaimerKey);
	const references = t(lang, referencesKey);
	const hasDisclaimer = disclaimer && disclaimer !== disclaimerKey;
	const hasReferences = references && references !== referencesKey;
	if (!hasDisclaimer && !hasReferences) return '';
	return `
    <section class="mt-4 p-3 bg-light rounded" id="disclaimer" aria-labelledby="disclaimer-heading">
      <h2 class="h6" id="disclaimer-heading">${escapeHtml(t(lang, 'tool_disclaimer_title'))}</h2>
      ${hasDisclaimer ? `<p class="small mb-2">${escapeHtml(disclaimer)}</p>` : ''}
      ${
				hasReferences
					? `<p class="small mb-0"><strong>${escapeHtml(t(lang, 'tool_references_title'))}:</strong> ${escapeHtml(references)}</p>`
					: ''
			}
    </section>`;
};

/**
 * 渲染相关工具互链。
 */
export const renderRelatedTools = (
	lang: SiteLang,
	defaultLang: SiteLang,
	relatedSlugs: string[] | undefined
) => {
	const tools = (relatedSlugs || [])
		.map((slug) => getToolBySlug(slug))
		.filter((x): x is ToolPageMeta => Boolean(x));
	if (!tools.length) return '';
	const links = tools
		.map((tool) => {
			const href = withToolLangPrefix(lang, tool.path, defaultLang);
			const label = t(lang, tool.i18nKey as keyof typeof import('../../site/i18n/en').default);
			return `<li><a href="${escapeHtml(href)}">${escapeHtml(label)}</a></li>`;
		})
		.join('');
	return `
    <section class="mt-4" id="related" aria-labelledby="related-heading">
      <h2 class="h5" id="related-heading">${escapeHtml(t(lang, 'tool_related_title'))}</h2>
      <ul class="mb-0">${links}</ul>
    </section>`;
};

/**
 * 组装工具页底部说明区（文章后 FAQ / YMYL / 相关）。
 */
export const renderToolExtraSections = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	tool: ToolPageMeta;
}) => {
	const faqs = collectToolFaqs(opts.lang, opts.tool.faqPrefix);
	return [
		renderFaqSection(opts.lang, faqs),
		renderYmylSection(opts.lang, opts.tool.faqPrefix, opts.tool.ymyl),
		renderRelatedTools(opts.lang, opts.defaultLang, opts.tool.related),
	].join('\n');
};

/**
 * 可点击权威引用条目。
 */
export type ToolReferenceLink = {
	/** 可见锚文本 */
	label: string;
	/** 绝对 URL */
	href: string;
};

/**
 * 渲染 How / Formula|Rules / Example / Use cases 结构化 IG 区块。
 * 键约定：`{prefix}_how_title`、`_how_body`、`_formula_title` 或 `_rules_title`、
 * `_formula_body` 或 `_rules_body`、可选 `_formula_item_1…n` / `_rules_item_1…n`、
 * `_example_title`、`_example`、`_usecases_title`、`_usecase_1…n`。
 * 缺失键则跳过对应小节（不回退成 key 字符串）。
 */
export const renderToolIgSections = (opts: {
	lang: SiteLang;
	/** 如 tool_bmi */
	prefix: string;
	/** 使用 formula_* 还是 rules_* 标题键 */
	mode?: 'formula' | 'rules';
	/** Use case 条数上限（默认 3） */
	usecaseCount?: number;
	/** 公式/规则列表项上限（默认 4） */
	ruleItemCount?: number;
}) => {
	const { lang, prefix } = opts;
	const mode = opts.mode ?? 'formula';
	const usecaseCount = opts.usecaseCount ?? 3;
	const ruleItemCount = opts.ruleItemCount ?? 4;
	const parts: string[] = [];

	/** 读取 i18n；若等于 key 本身则视为未配置。 */
	const tx = (key: string) => {
		const val = t(lang, key as keyof typeof import('../../site/i18n/en').default);
		if (!val || val === key) return '';
		return val;
	};

	const howTitle = tx(`${prefix}_how_title`);
	const howBody = tx(`${prefix}_how_body`);
	if (howTitle && howBody) {
		parts.push(`
    <section class="mt-4" id="how" aria-labelledby="how-heading">
      <h2 class="h5" id="how-heading">${escapeHtml(howTitle)}</h2>
      <p class="text-muted mb-0">${escapeHtml(howBody)}</p>
    </section>`);
	}

	const midTitle = tx(`${prefix}_${mode}_title`);
	const midBody = tx(`${prefix}_${mode}_body`);
	const midItems: string[] = [];
	for (let i = 1; i <= ruleItemCount; i++) {
		const item = tx(`${prefix}_${mode}_item_${i}`);
		if (item) midItems.push(item);
	}
	if (midTitle && (midBody || midItems.length)) {
		const list =
			midItems.length > 0
				? `<ul class="text-muted mb-2">${midItems
						.map((x) => `<li>${escapeHtml(x)}</li>`)
						.join('')}</ul>`
				: '';
		const body = midBody ? `<p class="text-muted mb-2">${escapeHtml(midBody)}</p>` : '';
		parts.push(`
    <section class="mt-4" id="${mode}" aria-labelledby="${mode}-heading">
      <h2 class="h5" id="${mode}-heading">${escapeHtml(midTitle)}</h2>
      ${body}
      ${list}
    </section>`);
	}

	const exTitle = tx(`${prefix}_example_title`);
	const exBody = tx(`${prefix}_example`);
	if (exTitle && exBody) {
		parts.push(`
    <section class="mt-4" id="example" aria-labelledby="example-heading">
      <h2 class="h5" id="example-heading">${escapeHtml(exTitle)}</h2>
      <p class="text-muted mb-0">${escapeHtml(exBody)}</p>
    </section>`);
	}

	const ucTitle = tx(`${prefix}_usecases_title`);
	const ucItems: string[] = [];
	for (let i = 1; i <= usecaseCount; i++) {
		const item = tx(`${prefix}_usecase_${i}`);
		if (item) ucItems.push(item);
	}
	if (ucTitle && ucItems.length) {
		parts.push(`
    <section class="mt-4" id="use-cases" aria-labelledby="usecases-heading">
      <h2 class="h5" id="usecases-heading">${escapeHtml(ucTitle)}</h2>
      <ul class="text-muted mb-0">${ucItems.map((x) => `<li>${escapeHtml(x)}</li>`).join('')}</ul>
    </section>`);
	}

	return parts.join('\n');
};

/**
 * 渲染可点击 References 列表（权威出站链）。
 */
export const renderToolReferencesSection = (opts: {
	lang: SiteLang;
	links: ToolReferenceLink[];
}) => {
	if (!opts.links.length) return '';
	const items = opts.links
		.map(
			(l) =>
				`<li><a href="${escapeHtml(l.href)}" rel="noopener noreferrer" target="_blank">${escapeHtml(
					l.label
				)}</a></li>`
		)
		.join('');
	return `
    <section class="mt-4" id="references" aria-labelledby="refs-heading">
      <h2 class="h5" id="refs-heading">${escapeHtml(t(opts.lang, 'tool_references_title'))}</h2>
      <ul class="mb-0">${items}</ul>
    </section>`;
};

/**
 * 生成 BreadcrumbList + WebApplication JSON-LD（与可见内容一致）。
 */
export const buildToolJsonLd = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	tool: ToolPageMeta;
	name: string;
	description: string;
	canonicalPath: string;
}) => {
	const base = 'https://onlinefreetools.org';
	const pageUrl = `${base}${opts.canonicalPath}`;
	const homePath = withToolLangPrefix(opts.lang, '/', opts.defaultLang);
	const categoryLabel =
		opts.tool.category === 'calculator'
			? t(opts.lang, 'tool_category_calculator' as keyof typeof import('../../site/i18n/en').default)
			: t(opts.lang, 'tool_category_developer' as keyof typeof import('../../site/i18n/en').default);
	const data = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'BreadcrumbList',
				itemListElement: [
					{
						'@type': 'ListItem',
						position: 1,
						name: t(opts.lang, 'nav_home'),
						item: `${base}${homePath === '/' ? '/' : homePath}`,
					},
					{
						'@type': 'ListItem',
						position: 2,
						name: categoryLabel,
						item: `${base}${homePath === '/' ? '/' : homePath}#${
							opts.tool.category === 'calculator' ? 'cat-calculator' : 'cat-dev'
						}`,
					},
					{
						'@type': 'ListItem',
						position: 3,
						name: opts.name,
						item: pageUrl,
					},
				],
			},
			{
				'@type': 'WebApplication',
				name: opts.name,
				url: pageUrl,
				description: opts.description,
				applicationCategory:
					opts.tool.category === 'developer' ? 'DeveloperApplication' : 'UtilitiesApplication',
				operatingSystem: 'Any',
				inLanguage: opts.lang,
				offers: {
					'@type': 'Offer',
					price: '0',
					priceCurrency: 'USD',
				},
			},
		],
	};
	return `<script type="application/ld+json">${JSON.stringify(data)}</script>`;
};
