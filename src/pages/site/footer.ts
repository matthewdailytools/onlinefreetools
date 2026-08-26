/**
 * 站点页脚：版权说明 + About / Privacy / Terms / Contact / GitHub 短链。
 * 供工具页 SSR 与静态站页脚视觉对齐。
 */
import type { SiteLang } from '../../site/i18n';
import { t } from '../../site/i18n';
import { escapeHtml } from './layout';

/** 本站开源仓库 URL（与 `scripts/site/config.mjs` 的 `githubRepoUrl` 保持一致）。 */
const GITHUB_REPO_URL = 'https://github.com/matthewdailytools/onlinefreetools';

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

/** 站内页脚链接：path、i18n 键。 */
type InternalFooterLink = { path: string; key: string };

/** 站外页脚链接：绝对 URL、i18n 键。 */
type ExternalFooterLink = { href: string; key: string; external: true };

/** 页脚链接联合类型。 */
type FooterLink = InternalFooterLink | ExternalFooterLink;

/** 页脚导航（关于、隐私、条款、联系、GitHub 仓库）。 */
const FOOTER_LINKS: FooterLink[] = [
	{ path: '/about', key: 'footer_about' },
	{ path: '/privacy', key: 'footer_privacy' },
	{ path: '/terms', key: 'footer_terms' },
	{ path: '/contact', key: 'footer_contact' },
	{ href: GITHUB_REPO_URL, key: 'footer_github', external: true },
];

/**
 * 判断页脚项是否为站外链接。
 * @param item 页脚链接项
 */
const isExternalFooterLink = (item: FooterLink): item is ExternalFooterLink =>
	Boolean('external' in item && item.external);

/**
 * 解析页脚链接 href（站内规范语言前缀；站外为绝对 URL）。
 * @param lang 当前语言
 * @param item 页脚链接项
 */
const footerHref = (lang: SiteLang, item: FooterLink): string =>
	isExternalFooterLink(item) ? item.href : withLangPrefix(lang, item.path);

/**
 * 渲染单个页脚链接锚点 HTML。
 * @param lang 当前语言
 * @param item 页脚链接项
 * @param sep 与前一项的分隔符
 */
const renderFooterLink = (lang: SiteLang, item: FooterLink, sep: string): string => {
	const href = footerHref(lang, item);
	const label = t(lang, item.key as Parameters<typeof t>[1]);
	const externalAttrs = isExternalFooterLink(item)
		? ' target="_blank" rel="noopener noreferrer"'
		: '';
	return `${sep}<a class="small text-decoration-none" href="${escapeHtml(href)}"${externalAttrs}>${escapeHtml(
		label
	)}</a>`;
};

/**
 * 渲染站点页脚。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 默认语言（保留参数兼容调用方）
 */
export const renderFooter = (opts: { lang: SiteLang; defaultLang?: SiteLang }) => {
	const linksHtml = FOOTER_LINKS.map((item, index) => {
		const sep =
			index === 0 ? '' : '<span class="text-muted mx-2" aria-hidden="true">·</span>';
		return renderFooterLink(opts.lang, item, sep);
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
