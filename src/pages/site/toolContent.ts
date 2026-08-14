/**
 * 工具页共享内容块：文章、可见 FAQ、YMYL 免责、相关工具、分享、邮件反馈、JSON-LD。
 * 不为 FAQ/HowTo 富结果优化；问答必须对用户可见。
 */
import type { SiteLang } from '../../site/i18n';
import { t } from '../../site/i18n';
import { escapeHtml } from './layout';
import { getToolBySlug, getToolLogoUrl, type ToolPageMeta } from '../../site/tools';

/** 站长咨询 / 反馈邮箱（公开联系方式） */
const TOOL_CONTACT_EMAIL = 'dailyonetools@outlook.com';

/** 站点绝对根 URL（分享链接用） */
const SITE_ORIGIN = 'https://onlinefreetools.org';

/**
 * 为当前语言生成规范路径（默认语无前缀）。
 */
export const withToolLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * Format a tool updatedAt marker for visible display.
 */
export const formatToolUpdatedAt = (lang: SiteLang, updatedAt?: string) => {
	if (!updatedAt) return '';
	const raw = updatedAt.trim();
	const normalized = /^\d{4}-\d{2}-\d{2}$/.test(raw) ? `${raw}T00:00:00.000Z` : raw;
	const date = new Date(normalized);
	if (!Number.isFinite(date.getTime())) return raw;
	try {
		return new Intl.DateTimeFormat(lang, {
			dateStyle: 'medium',
			timeStyle: raw.includes('T') ? 'short' : undefined,
		}).format(date);
	} catch {
		return raw.slice(0, 10);
	}
};

/**
 * Render the visible "last updated" marker for a tool page.
 */
export const renderToolUpdatedAt = (lang: SiteLang, tool: ToolPageMeta) => {
	if (!tool.updatedAt) return '';
	const label = t(lang, 'tool_last_updated' as keyof typeof import('../../site/i18n/en').default);
	const value = formatToolUpdatedAt(lang, tool.updatedAt);
	return `
    <p class="tool-updated-at text-muted small mt-3 mb-0">
      ${escapeHtml(label)} <time datetime="${escapeHtml(tool.updatedAt)}">${escapeHtml(value)}</time>
    </p>`;
};

/**
 * 从 i18n 收集某工具的 FAQ 条目（q1/a1 … 最多 q8/a8）。
 * @param lang 语言
 * @param faqPrefix 如 tool_bmi
 */
export const collectToolFaqs = (
	lang: SiteLang,
	faqPrefix: string
): Array<{ question: string; answer: string }> => {
	const faqs: Array<{ question: string; answer: string }> = [];
	for (let i = 1; i <= 8; i++) {
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
    <section class="mt-4 tool-section" id="faq" aria-labelledby="faq-heading">
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
			const logo = getToolLogoUrl(tool);
			/** 站内 Related 同标签打开；锚文本 = 工具 title（利于理解目标页主题） */
			return `<li class="tool-related-item"><a href="${escapeHtml(href)}"><img class="tool-related-logo" src="${escapeHtml(logo)}" width="18" height="18" alt="" decoding="async" /><span>${escapeHtml(label)}</span></a></li>`;
		})
		.join('');
	return `
    <section class="mt-4 tool-section" id="related" aria-labelledby="related-heading">
      <h2 class="h5" id="related-heading">${escapeHtml(t(lang, 'tool_related_title'))}</h2>
      <ul class="tool-related-list mb-0">${links}</ul>
    </section>`;
};

/**
 * 构建常用社交平台分享外链（新窗口打开）。
 * @param pageUrl 绝对页 URL
 * @param toolName 工具名（写入文案）
 */
const buildSocialShareLinks = (pageUrl: string, toolName: string) => {
	const u = encodeURIComponent(pageUrl);
	const text = encodeURIComponent(toolName);
	const waText = encodeURIComponent(`${toolName}\n${pageUrl}`);
	/** 平台列表：品牌名通用，不随语言翻译 */
	const networks: Array<{ id: string; label: string; href: string }> = [
		{
			id: 'x',
			label: 'X',
			href: `https://twitter.com/intent/tweet?url=${u}&text=${text}`,
		},
		{
			id: 'facebook',
			label: 'Facebook',
			href: `https://www.facebook.com/sharer/sharer.php?u=${u}`,
		},
		{
			id: 'linkedin',
			label: 'LinkedIn',
			href: `https://www.linkedin.com/sharing/share-offsite/?url=${u}`,
		},
		{
			id: 'reddit',
			label: 'Reddit',
			href: `https://www.reddit.com/submit?url=${u}&title=${text}`,
		},
		{
			id: 'whatsapp',
			label: 'WhatsApp',
			href: `https://wa.me/?text=${waText}`,
		},
		{
			id: 'telegram',
			label: 'Telegram',
			href: `https://t.me/share/url?url=${u}&text=${text}`,
		},
	];
	return networks
		.map(
			(n) =>
				`<a class="tool-share-net tool-share-net--${escapeHtml(n.id)}" href="${escapeHtml(
					n.href
				)}" target="_blank" rel="noopener noreferrer">${escapeHtml(n.label)}</a>`
		)
		.join('');
};

/**
 * 渲染「分享工具」模块：社交外链 + 复制链接 + 系统分享（若支持）。
 * @param lang 当前语言
 * @param pageUrl 本工具页绝对 URL
 * @param toolName 工具显示名（供 Web Share / 社交文案）
 */
export const renderToolShareSection = (lang: SiteLang, pageUrl: string, toolName: string) => {
	const copyLabel = t(lang, 'tool_share_copy');
	const copiedLabel = t(lang, 'tool_share_copied');
	const nativeLabel = t(lang, 'tool_share_native');
	const socialHtml = buildSocialShareLinks(pageUrl, toolName);
	return `
    <section class="tool-module tool-share" id="share" aria-labelledby="share-heading"
      data-share-url="${escapeHtml(pageUrl)}"
      data-share-title="${escapeHtml(toolName)}"
      data-label-copy="${escapeHtml(copyLabel)}"
      data-label-copied="${escapeHtml(copiedLabel)}">
      <h2 class="h5" id="share-heading">${escapeHtml(t(lang, 'tool_share_title'))}</h2>
      <p class="text-muted small mb-3">${escapeHtml(t(lang, 'tool_share_hint'))}</p>
      <div class="tool-share-networks" role="list" aria-label="${escapeHtml(t(lang, 'tool_share_networks_label'))}">
        ${socialHtml}
      </div>
      <div class="tool-module-actions">
        <button type="button" class="btn btn-outline-primary btn-sm" id="toolShareCopyBtn">${escapeHtml(copyLabel)}</button>
        <button type="button" class="btn btn-primary btn-sm" id="toolShareNativeBtn" hidden>${escapeHtml(nativeLabel)}</button>
      </div>
      <p class="tool-share-url small text-muted mt-2 mb-0" id="toolShareUrlText">${escapeHtml(pageUrl)}</p>
    </section>
    <script>
    (function () {
      var root = document.getElementById('share');
      if (!root || root.getAttribute('data-share-bound') === '1') return;
      root.setAttribute('data-share-bound', '1');
      var url = root.getAttribute('data-share-url') || window.location.href;
      var title = root.getAttribute('data-share-title') || document.title;
      var labelCopy = root.getAttribute('data-label-copy') || 'Copy link';
      var labelCopied = root.getAttribute('data-label-copied') || 'Copied';
      var copyBtn = document.getElementById('toolShareCopyBtn');
      var nativeBtn = document.getElementById('toolShareNativeBtn');
      if (nativeBtn && typeof navigator !== 'undefined' && typeof navigator.share === 'function') {
        nativeBtn.hidden = false;
        nativeBtn.addEventListener('click', function () {
          navigator.share({ title: title, url: url }).catch(function () {});
        });
      }
      if (copyBtn) {
        copyBtn.addEventListener('click', async function () {
          try {
            if (navigator.clipboard && navigator.clipboard.writeText) {
              await navigator.clipboard.writeText(url);
            } else {
              var ta = document.createElement('textarea');
              ta.value = url;
              ta.setAttribute('readonly', '');
              ta.style.position = 'fixed';
              ta.style.left = '-9999px';
              document.body.appendChild(ta);
              ta.select();
              document.execCommand('copy');
              document.body.removeChild(ta);
            }
            copyBtn.textContent = labelCopied;
            setTimeout(function () { copyBtn.textContent = labelCopy; }, 1600);
          } catch (e) {}
        });
      }
    })();
    </script>`;
};

/**
 * 渲染「邮件咨询 / 反馈」模块：仿写信界面（To / Subject / Message），提交时打开 mailto。
 * @param lang 当前语言
 * @param pageUrl 本工具页绝对 URL（预填正文）
 * @param toolName 工具显示名（预填主题）
 */
export const renderToolFeedbackSection = (lang: SiteLang, pageUrl: string, toolName: string) => {
	const subjectBase = t(lang, 'tool_feedback_subject');
	const subjectDefault = `${subjectBase}: ${toolName}`;
	const bodyDefault = `${toolName}\n${pageUrl}\n\n`;
	return `
    <section class="tool-module tool-feedback" id="feedback" aria-labelledby="feedback-heading"
      data-feedback-to="${escapeHtml(TOOL_CONTACT_EMAIL)}">
      <h2 class="h5" id="feedback-heading">${escapeHtml(t(lang, 'tool_feedback_title'))}</h2>
      <p class="text-muted small mb-3">${escapeHtml(t(lang, 'tool_feedback_body'))}</p>
      <form class="tool-mail-compose" id="toolFeedbackForm" novalidate>
        <div class="tool-mail-row">
          <label class="tool-mail-label" for="toolFeedbackTo">${escapeHtml(t(lang, 'tool_feedback_to_label'))}</label>
          <input class="form-control form-control-sm tool-mail-input" id="toolFeedbackTo" type="email"
            value="${escapeHtml(TOOL_CONTACT_EMAIL)}" readonly />
        </div>
        <div class="tool-mail-row">
          <label class="tool-mail-label" for="toolFeedbackSubject">${escapeHtml(t(lang, 'tool_feedback_subject_label'))}</label>
          <input class="form-control form-control-sm tool-mail-input" id="toolFeedbackSubject" type="text"
            value="${escapeHtml(subjectDefault)}" required maxlength="200" />
        </div>
        <div class="tool-mail-row tool-mail-row--body">
          <label class="tool-mail-label" for="toolFeedbackMessage">${escapeHtml(t(lang, 'tool_feedback_message_label'))}</label>
          <textarea class="form-control form-control-sm tool-mail-body" id="toolFeedbackMessage" rows="6"
            required maxlength="4000" placeholder="${escapeHtml(t(lang, 'tool_feedback_message_placeholder'))}">${escapeHtml(bodyDefault)}</textarea>
        </div>
        <div class="tool-module-actions tool-mail-actions">
          <button type="submit" class="btn btn-primary btn-sm" id="toolFeedbackSendBtn">${escapeHtml(t(lang, 'tool_feedback_cta'))}</button>
          <a class="btn btn-outline-secondary btn-sm" href="mailto:${escapeHtml(TOOL_CONTACT_EMAIL)}">${escapeHtml(t(lang, 'tool_feedback_email_label'))}: ${escapeHtml(TOOL_CONTACT_EMAIL)}</a>
        </div>
      </form>
    </section>
    <script>
    (function () {
      var form = document.getElementById('toolFeedbackForm');
      if (!form || form.getAttribute('data-feedback-bound') === '1') return;
      form.setAttribute('data-feedback-bound', '1');
      var root = document.getElementById('feedback');
      var toDefault = (root && root.getAttribute('data-feedback-to')) || '${TOOL_CONTACT_EMAIL}';
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var toEl = document.getElementById('toolFeedbackTo');
        var subjectEl = document.getElementById('toolFeedbackSubject');
        var messageEl = document.getElementById('toolFeedbackMessage');
        var to = (toEl && toEl.value ? toEl.value : toDefault).trim();
        var subject = subjectEl && subjectEl.value ? subjectEl.value.trim() : '';
        var body = messageEl && messageEl.value ? messageEl.value : '';
        if (!to || !subject || !body.trim()) return;
        var href = 'mailto:' + to
          + '?subject=' + encodeURIComponent(subject)
          + '&body=' + encodeURIComponent(body);
        window.location.href = href;
      });
    })();
    </script>`;
};

/**
 * 组装工具页底部说明区（FAQ / YMYL / 相关 / 分享 / 反馈）。
 */
export const renderToolExtraSections = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	tool: ToolPageMeta;
}) => {
	const faqs = collectToolFaqs(opts.lang, opts.tool.faqPrefix);
	const path = withToolLangPrefix(opts.lang, opts.tool.path, opts.defaultLang);
	const pageUrl = `${SITE_ORIGIN}${path}`;
	const toolName = t(opts.lang, opts.tool.i18nKey as keyof typeof import('../../site/i18n/en').default);
	return [
		renderToolUpdatedAt(opts.lang, opts.tool),
		renderFaqSection(opts.lang, faqs),
		renderYmylSection(opts.lang, opts.tool.faqPrefix, opts.tool.ymyl),
		renderRelatedTools(opts.lang, opts.defaultLang, opts.tool.related),
		`<div class="tool-module-grid">
      ${renderToolShareSection(opts.lang, pageUrl, toolName)}
      ${renderToolFeedbackSection(opts.lang, pageUrl, toolName)}
    </div>`,
	].join('\n');
};

/**
 * 渲染正文语境内链（L3）：用工具 title 作锚文本，规范语言前缀 path。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 默认语
 * @param opts.lead 引导句（纯文本，将 escape）
 * @param opts.slugs 目标工具 slug 列表
 */
export const renderContextualToolLinks = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	lead: string;
	slugs: string[];
}) => {
	const tools = opts.slugs
		.map((slug) => getToolBySlug(slug))
		.filter((x): x is ToolPageMeta => Boolean(x));
	if (!tools.length || !opts.lead) return '';
	const links = tools
		.map((tool) => {
			const href = withToolLangPrefix(opts.lang, tool.path, opts.defaultLang);
			const label = t(opts.lang, tool.i18nKey as keyof typeof import('../../site/i18n/en').default);
			return `<a href="${escapeHtml(href)}">${escapeHtml(label)}</a>`;
		})
		.join(', ');
	return `<p class="text-muted mt-3 mb-0 tool-contextual-links">${escapeHtml(opts.lead)} ${links}.</p>`;
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
    <section class="mt-4 tool-section" id="how" aria-labelledby="how-heading">
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
    <section class="mt-4 tool-section" id="${mode}" aria-labelledby="${mode}-heading">
      <h2 class="h5" id="${mode}-heading">${escapeHtml(midTitle)}</h2>
      ${body}
      ${list}
    </section>`);
	}

	const exTitle = tx(`${prefix}_example_title`);
	const exBody = tx(`${prefix}_example`);
	if (exTitle && exBody) {
		parts.push(`
    <section class="mt-4 tool-section" id="example" aria-labelledby="example-heading">
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
    <section class="mt-4 tool-section" id="use-cases" aria-labelledby="usecases-heading">
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
    <section class="mt-4 tool-section" id="references" aria-labelledby="refs-heading">
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
	/** 面包屑分类文案 i18n 键（与顶栏/首页分类一致）。 */
	const categoryLabelKey =
		opts.tool.category === 'calculator'
			? 'tool_category_calculator'
			: opts.tool.category === 'image'
				? 'tool_category_image'
				: opts.tool.category === 'design'
					? 'tool_category_design'
					: opts.tool.category === 'pdf'
						? 'tool_category_pdf'
						: 'tool_category_developer';
	const categoryLabel = t(opts.lang, categoryLabelKey as keyof typeof import('../../site/i18n/en').default);
	/** 首页分类锚点（breadcrumb 第二级链到首页分区）。 */
	const categoryAnchor =
		opts.tool.category === 'calculator'
			? 'cat-calculator'
			: opts.tool.category === 'image'
				? 'cat-image'
				: opts.tool.category === 'design'
					? 'cat-design'
					: opts.tool.category === 'pdf'
						? 'cat-pdf'
						: 'cat-dev';
	/** Schema.org applicationCategory：与可见分类语义对齐。 */
	const applicationCategory =
		opts.tool.category === 'developer'
			? 'DeveloperApplication'
			: opts.tool.category === 'image'
				? 'MultimediaApplication'
				: opts.tool.category === 'design'
					? 'DesignApplication'
					: 'UtilitiesApplication';
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
						item: `${base}${homePath === '/' ? '/' : homePath}#${categoryAnchor}`,
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
				applicationCategory,
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
