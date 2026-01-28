import type { SiteLang } from '../site/i18n';
import { t, supportedLangs } from '../site/i18n';
import { renderFooter } from './site/footer';
import { renderHeader } from './site/header';
import { renderLayout, type HreflangAlternate, escapeHtml } from './site/layout';
import { renderSidebar } from './site/sidebar';
import { TOOL_PAGES } from '../site/tools';

const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
  const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return lang === defaultLang ? safe : `/${lang}${safe}`;
};

export const renderHowToCalculatePercentageChangePage = (opts: {
  lang: SiteLang;
  defaultLang: SiteLang;
  enabledLangs: SiteLang[];
}) => {
  const canonicalPath = withLangPrefix(opts.lang, '/tools/how-to-calculate-percentage-change', opts.defaultLang);
  const title = `${t(opts.lang, 'tool_percentage_change_title')} | ${t(opts.lang, 'brand')}`;
  const description = t(opts.lang, 'tool_percentage_change_description');
  const article = t(opts.lang, 'tool_percentage_change_article');

  const navItems = [
    { href: withLangPrefix(opts.lang, '/', opts.defaultLang), label: t(opts.lang, 'nav_home') },
    { href: withLangPrefix(opts.lang, '/#all-tools', opts.defaultLang), label: t(opts.lang, 'nav_tools') },
    { href: '/devlogs/', label: t(opts.lang, 'nav_devlogs') },
  ];

  const withExplicitLangPrefix = (code: SiteLang, pathname: string) => {
    const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
    return `/${code}${safe}`.replace(/\/\/{2,}/g, '/');
  };

  const langAlternates: Record<string, string> = Object.fromEntries(
    (supportedLangs || []).map((code) => [code, withExplicitLangPrefix(code, '/tools/how-to-calculate-percentage-change')])
  );

  const alternates: HreflangAlternate[] = (supportedLangs || []).map((code) => ({
    lang: code,
    href: `https://onlinefreetools.org${withLangPrefix(code, '/tools/how-to-calculate-percentage-change', opts.defaultLang)}`,
  }));

  const headerHtml = renderHeader({
    lang: opts.lang,
    brandHref: withLangPrefix(opts.lang, '/', opts.defaultLang),
    navItems,
    enabledLangs: supportedLangs,
    langAlternates,
  });

  const toolLinks = (TOOL_PAGES || []).map((p) => ({ href: withLangPrefix(opts.lang, p.path, opts.defaultLang), label: t(opts.lang, p.i18nKey) }));

  const sidebarHtml = renderSidebar({
    title: t(opts.lang, 'nav_tools'),
    items: [{ href: '#percentage-change', label: t(opts.lang, 'tool_percentage_change_title') }, ...toolLinks],
    id: 'toolNav',
  });

  const footerHtml = renderFooter({ lang: opts.lang });

  const contentHtml = `
    <div class="intro">
      <h1>${escapeHtml(t(opts.lang, 'tool_percentage_change_title'))}</h1>
      <p class="text-muted">${escapeHtml(description)}</p>
    </div>

    <div class="card" style="max-width:600px;margin:0 auto;padding:1rem;">
      <form id="pctForm">
        <div class="mb-3">
          <label class="form-label">${escapeHtml(t(opts.lang, 'tool_percentage_change_original_label') || 'Original value')}</label>
          <input id="origVal" class="input-lg" type="number" step="any" required />
        </div>
        <div class="mb-3">
          <label class="form-label">${escapeHtml(t(opts.lang, 'tool_percentage_change_new_label') || 'New value')}</label>
          <input id="newVal" class="input-lg" type="number" step="any" required />
        </div>
        <button type="submit" class="btn btn-primary">${escapeHtml(t(opts.lang, 'tool_percentage_change_calculate') || 'Calculate')}</button>
      </form>

      <div id="pctResult" class="result mt-3" style="display:none;">
        <h4>${escapeHtml(t(opts.lang, 'tool_percentage_change_result_label') || 'Percentage change')}</h4>
        <div id="pctValue" style="font-weight:700;font-size:1.4rem"></div>
        <div id="pctNote" class="text-muted"></div>
      </div>
    </div>

    <div class="mt-4" style="max-width:700px;margin:0 auto">${escapeHtml(article)}</div>
  `;

  const extraBodyHtml = `
  <script>
    const form = document.getElementById('pctForm');
    const orig = document.getElementById('origVal');
    const neu = document.getElementById('newVal');
    const res = document.getElementById('pctResult');
    const valEl = document.getElementById('pctValue');
    const noteEl = document.getElementById('pctNote');

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const a = parseFloat(orig.value);
      const b = parseFloat(neu.value);
      if (!isFinite(a) || a === 0) {
        valEl.textContent = '';
        noteEl.textContent = '${escapeHtml(t(opts.lang, 'tool_percentage_change_result_invalid') || 'Original value must be non-zero') }';
        res.style.display = 'block';
        return;
      }
      const delta = b - a;
      const pct = (delta / a) * 100;
      const rounded = Math.round(pct * 100) / 100;
      const sign = pct > 0 ? '${escapeHtml(t(opts.lang, 'tool_percentage_change_increase') || 'increase')}' : (pct < 0 ? '${escapeHtml(t(opts.lang, 'tool_percentage_change_decrease') || 'decrease')}' : '${escapeHtml(t(opts.lang, 'tool_percentage_change_no_change') || 'no change')}');
      valEl.textContent = (rounded >= 0 ? rounded : Math.abs(rounded)) + '% (' + sign + ')';
      noteEl.textContent = '${escapeHtml(t(opts.lang, 'tool_percentage_change_example') || '')}';
      res.style.display = 'block';
    });
  </script>`;

  return renderLayout({
    lang: opts.lang,
    title,
    description,
    canonicalPath,
    ogImageUrl: 'https://onlinefreetools.org/og-image.png',
    ogType: 'website',
    alternates,
    headerHtml,
    sidebarHtml,
    contentHtml,
    footerHtml,
    extraBodyHtml,
    includeSidebarToggleScript: true,
    sidebarAutoCloseSelector: '#toolNav a',
  });
};
