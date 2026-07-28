/**
 * 工具页页脚：版权与 About 链接。
 */
import type { SiteLang } from '../../site/i18n';
import { t } from '../../site/i18n';
import { escapeHtml } from './layout';

/**
 * 为当前语言生成带语言前缀的路径（默认语无前缀）。
 * @param lang 当前语言
 * @param pathname 路径
 * @param defaultLang 默认语言
 */
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * 渲染站点页脚。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 默认语言（可选，缺省视为 en）
 */
export const renderFooter = (opts: { lang: SiteLang; defaultLang?: SiteLang }) => {
	const defaultLang = opts.defaultLang || 'en';
	const aboutHref = withLangPrefix(opts.lang, '/about', defaultLang);
	return `
  <footer class="bg-light border-top text-center py-3">
    <div class="container">
      <small class="text-muted">${escapeHtml(t(opts.lang, 'footer_text'))}</small>
      <span class="text-muted mx-2">·</span>
      <a class="small text-decoration-none" href="${escapeHtml(aboutHref)}">${escapeHtml(t(opts.lang, 'nav_about'))}</a>
    </div>
  </footer>`;
};
