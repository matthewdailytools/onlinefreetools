/**
 * 站点页脚：版权说明 + About / Privacy / Terms / Contact 短链。
 */
import { t } from '../i18n.mjs';
import { withLangPath } from '../config.mjs';

/**
 * 页脚链接项。
 * @typedef {{path:string,key:string}} FooterLink
 */

/** @type {FooterLink[]} 页脚导航（关于、隐私、条款、联系） */
const FOOTER_LINKS = [
  { path: '/about', key: 'footer_about' },
  { path: '/privacy', key: 'footer_privacy' },
  { path: '/terms', key: 'footer_terms' },
  { path: '/contact', key: 'footer_contact' },
];

/**
 * 解析页脚链接 href（带当前语言前缀）。
 * @param {string} lang
 * @param {FooterLink} item
 */
const footerHref = (lang, item) => withLangPath(lang, item.path);

/**
 * 渲染页脚 HTML。
 * @param {{lang:string}} opts 当前语言
 * @returns {string} footer 标记
 */
export const renderFooter = ({ lang }) => {
  const linksHtml = FOOTER_LINKS.map((item, index) => {
    const sep = index === 0 ? '' : '<span class="text-muted mx-2" aria-hidden="true">·</span>';
    return `${sep}<a class="small text-decoration-none" href="${footerHref(lang, item)}">${t(lang, item.key)}</a>`;
  }).join('');

  return `
  <footer class="site-footer border-top text-center py-3">
    <div class="container">
      <div class="mb-1"><small class="text-muted">${t(lang, 'footer_text')}</small></div>
      <nav class="d-inline" aria-label="${t(lang, 'footer_nav_label')}">
        ${linksHtml}
      </nav>
    </div>
  </footer>`;
};

