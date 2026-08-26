/**
 * 站点页脚：版权说明 + About / Privacy / Terms / Contact / GitHub 短链。
 */
import { t } from '../i18n.mjs';
import { siteConfig, withLangPath } from '../config.mjs';

/**
 * 站内页脚链接项（path + i18n 键）。
 * @typedef {{path:string,key:string}} InternalFooterLink
 */

/**
 * 站外页脚链接项（绝对 URL + i18n 键）。
 * @typedef {{href:string,key:string,external:true}} ExternalFooterLink
 */

/** @typedef {InternalFooterLink|ExternalFooterLink} FooterLink */

/** @type {FooterLink[]} 页脚导航（关于、隐私、条款、联系、GitHub 仓库） */
const FOOTER_LINKS = [
  { path: '/about', key: 'footer_about' },
  { path: '/privacy', key: 'footer_privacy' },
  { path: '/terms', key: 'footer_terms' },
  { path: '/contact', key: 'footer_contact' },
  {
    href: siteConfig.githubRepoUrl,
    key: 'footer_github',
    external: true,
  },
];

/**
 * 判断页脚项是否为站外链接。
 * @param {FooterLink} item
 * @returns {item is ExternalFooterLink}
 */
const isExternalFooterLink = (item) => Boolean(item.external);

/**
 * 解析页脚链接 href（站内带语言前缀；站外为绝对 URL）。
 * @param {string} lang
 * @param {FooterLink} item
 */
const footerHref = (lang, item) =>
  isExternalFooterLink(item) ? item.href : withLangPath(lang, item.path);

/**
 * 渲染单个页脚链接锚点。
 * @param {string} lang
 * @param {FooterLink} item
 * @param {string} sep 与前一项的分隔符
 */
const renderFooterLink = (lang, item, sep) => {
  const href = footerHref(lang, item);
  const label = t(lang, item.key);
  const externalAttrs = isExternalFooterLink(item)
    ? ' target="_blank" rel="noopener noreferrer"'
    : '';
  return `${sep}<a class="small text-decoration-none" href="${href}"${externalAttrs}>${label}</a>`;
};

/**
 * 渲染页脚 HTML。
 * @param {{lang:string}} opts 当前语言
 * @returns {string} footer 标记
 */
export const renderFooter = ({ lang }) => {
  const linksHtml = FOOTER_LINKS.map((item, index) => {
    const sep = index === 0 ? '' : '<span class="text-muted mx-2" aria-hidden="true">·</span>';
    return renderFooterLink(lang, item, sep);
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
