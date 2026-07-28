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
