import { t } from '../i18n.mjs';

export const renderFooter = ({ lang }) => `
  <footer class="bg-light border-top text-center py-3">
    <div class="container">
      <small class="text-muted">${t(lang, 'footer_text')}</small>
    </div>
  </footer>`;
