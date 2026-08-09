/**
 * 站点页脚：版权说明 + About / Privacy / Terms / Contact 短链。
 * 供工具页 SSR 与静态站页脚视觉对齐。
 */
import type { SiteLang } from '../../site/i18n';
import { t } from '../../site/i18n';
import { escapeHtml } from './layout';

/**
 * 为路径加上语言前缀（默认语无前缀，与 sitemap/canonical 一致）。
 * @param lang 当前语言
 * @param pathname 路径
 */
const withLangPrefix = (lang: SiteLang, pathname: string) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	/** 默认语 en：无前缀；其他语：/{lang}/... */
	if (lang === 'en') return safe;
	return `/${lang}${safe}`.replace(/\/{2,}/g, '/');
};

/** 页脚链接：path、i18n 键。 */
type FooterLink = { path: string; key: string };

/** 页脚导航（关于、隐私、条款、联系）。 */
const FOOTER_LINKS: FooterLink[] = [
	{ path: '/about', key: 'footer_about' },
	{ path: '/privacy', key: 'footer_privacy' },
	{ path: '/terms', key: 'footer_terms' },
	{ path: '/contact', key: 'footer_contact' },
];

/**
 * 解析页脚链接 href（规范语言前缀）。
 * @param lang 当前语言
 * @param item 页脚链接项
 */
const footerHref = (lang: SiteLang, item: FooterLink): string =>
	withLangPrefix(lang, item.path);

/**
 * 渲染站点页脚。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 默认语言（保留参数兼容调用方）
 */
export const renderFooter = (opts: { lang: SiteLang; defaultLang?: SiteLang }) => {
	const linksHtml = FOOTER_LINKS.map((item, index) => {
		const sep =
			index === 0 ? '' : '<span class="text-muted mx-2" aria-hidden="true">·</span>';
		const href = footerHref(opts.lang, item);
		return `${sep}<a class="small text-decoration-none" href="${escapeHtml(href)}">${escapeHtml(
			t(opts.lang, item.key as Parameters<typeof t>[1])
		)}</a>`;
	}).join('');

	return `
  <footer class="site-footer border-top text-center py-3">
    <div class="container">
      <div class="mb-1"><small class="text-muted">${escapeHtml(t(opts.lang, 'footer_text'))}</small></div>
      <nav class="d-inline" aria-label="${escapeHtml(t(opts.lang, 'footer_nav_label'))}">
        ${linksHtml}
      </nav>
    </div>
  </footer>`;
};
