/**
 * 站点页脚：版权与 About 链接。
 */
import type { SiteLang } from '../../site/i18n';
import { t } from '../../site/i18n';
import { escapeHtml } from './layout';

/**
 * 显式语言前缀路径（含默认语 /en），供站内导航保持用户所选语言。
 * @param lang 当前语言
 * @param pathname 路径
 */
const withExplicitLangPrefix = (lang: SiteLang, pathname: string) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return `/${lang}${safe}`.replace(/\/{2,}/g, '/');
};

/**
 * 渲染站点页脚。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 默认语言（保留参数兼容调用方，导航统一用显式前缀）
 */
export const renderFooter = (opts: { lang: SiteLang; defaultLang?: SiteLang }) => {
	const aboutHref = withExplicitLangPrefix(opts.lang, '/about');
	return `
  <footer class="bg-light border-top text-center py-3">
    <div class="container">
      <small class="text-muted">${escapeHtml(t(opts.lang, 'footer_text'))}</small>
      <span class="text-muted mx-2">·</span>
      <a class="small text-decoration-none" href="${escapeHtml(aboutHref)}">${escapeHtml(t(opts.lang, 'nav_about'))}</a>
    </div>
  </footer>`;
};
