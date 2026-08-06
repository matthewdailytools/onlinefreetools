/**
 * 站点页脚：版权与 About 链接。
 */
import { t } from '../i18n.mjs';
import { withExplicitLangPath } from '../config.mjs';

/**
 * 渲染页脚 HTML。
 * @param {{lang:string}} opts
 */
export const renderFooter = ({ lang }) => `
  <footer class="site-footer border-top text-center py-3">
    <div class="container">
      <small class="text-muted">${t(lang, 'footer_text')}</small>
      <span class="text-muted mx-2">·</span>
      <a class="small text-decoration-none" href="${withExplicitLangPath(lang, '/about')}">${t(lang, 'footer_about')}</a>
    </div>
  </footer>`;
