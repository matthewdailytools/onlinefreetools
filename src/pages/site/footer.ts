import type { SiteLang } from '../../site/i18n';
import { t } from '../../site/i18n';
import { escapeHtml } from './layout';

export const renderFooter = (opts: { lang: SiteLang }) => `
  <footer class="bg-light border-top text-center py-3">
    <div class="container">
      <small class="text-muted">${escapeHtml(t(opts.lang, 'footer_text'))}</small>
    </div>
  </footer>`;
