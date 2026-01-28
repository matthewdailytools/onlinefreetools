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

export const renderHowToCalculateRoiPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const canonicalPath = withLangPrefix(opts.lang, '/tools/how-to-calculate-roi', opts.defaultLang);
	const title = `${t(opts.lang, 'tool_roi_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_roi_description');
	const article = t(opts.lang, 'tool_roi_article');

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
    (supportedLangs || []).map((code) => [code, withExplicitLangPrefix(code, '/tools/how-to-calculate-roi')])
  );

  const alternates: HreflangAlternate[] = (opts.enabledLangs || []).map((code) => ({
    lang: code,
    href: `https://onlinefreetools.org${withLangPrefix(code, '/tools/how-to-calculate-roi', opts.defaultLang)}`,
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
    items: [{ href: '#roi', label: t(opts.lang, 'tool_roi_title') }, ...toolLinks],
    id: 'toolNav',
  });

  const footerHtml = renderFooter({ lang: opts.lang });

  const extraHeadHtml = `
  <style>
    .tool-card { max-width: 640px; margin: 0 auto 2rem; }
    .form-label { display:block; margin-bottom:.5rem; color:#495057; font-weight:500 }
    .result { background:#f8f9fa; padding:1rem; border-radius:8px; margin-top:1rem; text-align:center }
  </style>`;

  const contentHtml = `
    <div id="roi-intro">
      <h1>${escapeHtml(t(opts.lang, 'tool_roi_title'))}</h1>
      <p class="text-muted">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <form id="roiForm">
        <div class="form-group">
          <label class="form-label" for="initial">${escapeHtml(t(opts.lang, 'tool_roi_initial_label') || 'Initial Investment')}</label>
          <input id="initial" class="input-lg" type="number" min="0" step="any" placeholder="${escapeHtml(t(opts.lang, 'tool_roi_initial_placeholder') || '')}" required>
        </div>

        <div class="form-group">
          <label class="form-label" for="final">${escapeHtml(t(opts.lang, 'tool_roi_final_label') || 'Final Value')}</label>
          <input id="final" class="input-lg" type="number" min="0" step="any" placeholder="${escapeHtml(t(opts.lang, 'tool_roi_final_placeholder') || '')}" required>
        </div>

        <div class="form-group">
          <label class="form-label" for="gain">${escapeHtml(t(opts.lang, 'tool_roi_gain_label') || 'Net Gain (optional)')}</label>
          <input id="gain" class="input-lg" type="number" step="any" placeholder="${escapeHtml(t(opts.lang, 'tool_roi_gain_placeholder') || '')}">
        </div>

        <button type="submit" class="btn btn-primary">${escapeHtml(t(opts.lang, 'tool_roi_calculate'))}</button>
      </form>

      <div id="roiResult" class="result" style="display:none">
        <div><strong>${escapeHtml(t(opts.lang, 'tool_roi_result_label') || 'ROI')}:</strong> <span id="roiValue"></span></div>
        <div id="roiInterpretation" class="mt-2"></div>
      </div>
    </div>

    <div class="info-section">
      <h3>${escapeHtml(t(opts.lang, 'tool_roi_title'))}</h3>
      <p>${escapeHtml(article)}</p>
      <h4>${escapeHtml(t(opts.lang, 'tool_roi_example') || 'Example')}</h4>
      <pre style="background:#f1f3f5;padding:.75rem;border-radius:6px">${escapeHtml(t(opts.lang, 'tool_roi_example') || '')}</pre>
    </div>
  `;

  const extraBodyHtml = `
  <script>
    const form = document.getElementById('roiForm');
    const initial = document.getElementById('initial');
    const finalV = document.getElementById('final');
    const gain = document.getElementById('gain');
    const result = document.getElementById('roiResult');
    const roiValue = document.getElementById('roiValue');
    const roiInterpretation = document.getElementById('roiInterpretation');

    function formatPercent(n) {
      return Number.isFinite(n) ? n.toFixed(2) + '%' : '—';
    }

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const a = parseFloat(initial.value);
      const b = parseFloat(finalV.value);
      const g = parseFloat(gain.value);

      if (!a || (!b && !g)) {
        result.style.display = 'none';
        return;
      }

      // If net gain provided, use it; otherwise compute from final - initial
      const net = Number.isFinite(g) ? g : (b - a);
      const roi = (net / a) * 100;
      roiValue.textContent = formatPercent(roi);

      let interp = '';
      if (roi > 0) interp = '${t(opts.lang, 'tool_roi_interpret_positive') || 'Positive return'}';
      else if (roi === 0) interp = '${t(opts.lang, 'tool_roi_interpret_zero') || 'No gain or loss'}';
      else interp = '${t(opts.lang, 'tool_roi_interpret_negative') || 'Negative return (loss)'}';

      roiInterpretation.textContent = interp;
      result.style.display = 'block';
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
