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

export const renderMarginalRevenuePage = (opts: {
  lang: SiteLang;
  defaultLang: SiteLang;
  enabledLangs: SiteLang[];
}) => {
  const canonicalPath = withLangPrefix(opts.lang, '/tools/how-to-calculate-marginal-revenue', opts.defaultLang);
  const title = `${t(opts.lang, 'tool_marginal_revenue_title')} | ${t(opts.lang, 'brand')}`;
  const description = t(opts.lang, 'tool_marginal_revenue_description');
  const article = t(opts.lang, 'tool_marginal_revenue_article');

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
    (supportedLangs || []).map((code) => [code, withExplicitLangPrefix(code, '/tools/how-to-calculate-marginal-revenue')])
  );

  const alternates: HreflangAlternate[] = (opts.enabledLangs || []).map((code) => ({
    lang: code,
    href: `https://onlinefreetools.org${withLangPrefix(code, '/tools/how-to-calculate-marginal-revenue', opts.defaultLang)}`,
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
    items: [{ href: '#mr', label: t(opts.lang, 'tool_marginal_revenue_title') }, ...toolLinks],
    id: 'toolNav',
  });

  const footerHtml = renderFooter({ lang: opts.lang });

  const extraHeadHtml = ``;

  const contentHtml = `
    <div class="mr-intro">
      <h1>${escapeHtml(t(opts.lang, 'tool_marginal_revenue_title'))}</h1>
      <p class="text-muted">${escapeHtml(description)}</p>
    </div>

    <div class="card" style="max-width:700px;margin:0 auto;padding:1.25rem;">
      <form id="mrForm">
        <div class="mb-3">
          <label>${escapeHtml(t(opts.lang, 'tool_marginal_revenue_quantity_label') || 'Quantity')}</label>
          <input id="q1" class="input-lg" type="number" step="any" placeholder="Q1" required />
        </div>
        <div class="mb-3">
          <label>${escapeHtml(t(opts.lang, 'tool_marginal_revenue_revenue_label') || 'Total Revenue')}</label>
          <input id="tr1" class="input-lg" type="number" step="any" placeholder="TR1" required />
        </div>
        <div class="mb-3">
          <label>${escapeHtml(t(opts.lang, 'tool_marginal_revenue_quantity_label') || 'Quantity')} (2)</label>
          <input id="q2" class="input-lg" type="number" step="any" placeholder="Q2" required />
        </div>
        <div class="mb-3">
          <label>${escapeHtml(t(opts.lang, 'tool_marginal_revenue_revenue_label') || 'Total Revenue')} (2)</label>
          <input id="tr2" class="input-lg" type="number" step="any" placeholder="TR2" required />
        </div>
        <div class="mb-3">
          <button type="submit" class="btn btn-primary">${escapeHtml(t(opts.lang, 'tool_marginal_revenue_calculate') || 'Calculate MR')}</button>
        </div>

        <div id="mrResult" class="result" style="display:none;margin-top:1rem;">
          <div><strong>${escapeHtml(t(opts.lang, 'tool_marginal_revenue_result_label') || 'Marginal Revenue')}:</strong> <span id="mrValue"></span></div>
        </div>
      </form>
    </div>

    <div class="mt-4">
      <h3 id="mr">${escapeHtml(t(opts.lang, 'tool_marginal_revenue_title'))}</h3>
      <p class="text-muted">${escapeHtml(article)}</p>
      <p><em>${escapeHtml(t(opts.lang, 'tool_marginal_revenue_example'))}</em></p>
    </div>`;

  const extraBodyHtml = `
  <script>
    const form = document.getElementById('mrForm');
    const q1 = document.getElementById('q1');
    const q2 = document.getElementById('q2');
    const tr1 = document.getElementById('tr1');
    const tr2 = document.getElementById('tr2');
    const mrResult = document.getElementById('mrResult');
    const mrValue = document.getElementById('mrValue');

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const Q1 = parseFloat(q1.value);
      const Q2 = parseFloat(q2.value);
      const TR1 = parseFloat(tr1.value);
      const TR2 = parseFloat(tr2.value);

      if (isNaN(Q1) || isNaN(Q2) || isNaN(TR1) || isNaN(TR2)) {
        mrResult.style.display = 'none';
        return;
      }

      const dQ = Q2 - Q1;
      if (dQ === 0) {
        mrValue.textContent = 'N/A (ΔQ = 0)';
        mrResult.style.display = 'block';
        return;
      }

      const mr = (TR2 - TR1) / dQ;
      mrValue.textContent = Number.isFinite(mr) ? mr.toFixed(4) : 'N/A';
      mrResult.style.display = 'block';
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
    extraHeadHtml,
    extraBodyHtml,
    includeSidebarToggleScript: true,
    sidebarAutoCloseSelector: '#toolNav a',
  });
};
