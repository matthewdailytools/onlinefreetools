import type { SiteLang } from '../site/i18n';
import { t, supportedLangs } from '../site/i18n';
import { renderFooter } from './site/footer';
import { renderHeader } from './site/header';
import { renderLayout, type HreflangAlternate, escapeHtml } from './site/layout';
import { renderSidebar } from './site/sidebar';

const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
  const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return lang === defaultLang ? safe : `/${lang}${safe}`;
};

export const renderSquareFeetPage = (opts: {
  lang: SiteLang;
  defaultLang: SiteLang;
  enabledLangs: SiteLang[];
}) => {
  const canonicalPath = withLangPrefix(opts.lang, '/tools/square-feet', opts.defaultLang);
  const title = `${t(opts.lang, 'tool_squarefeet_title')} | ${t(opts.lang, 'brand')}`;
  const description = t(opts.lang, 'tool_squarefeet_description');
  const article = t(opts.lang, 'tool_squarefeet_article');

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
    (supportedLangs || []).map((code) => [code, withExplicitLangPrefix(code, '/tools/square-feet')])
  );

  const alternates: HreflangAlternate[] = (opts.enabledLangs || []).map((code) => ({
    lang: code,
    href: `https://onlinefreetools.org${withLangPrefix(code, '/tools/square-feet', opts.defaultLang)}`,
  }));

  const headerHtml = renderHeader({
    lang: opts.lang,
    brandHref: withLangPrefix(opts.lang, '/', opts.defaultLang),
    navItems,
    enabledLangs: supportedLangs,
    langAlternates,
  });

  const sidebarHtml = renderSidebar({
    title: t(opts.lang, 'nav_tools'),
    items: [{ href: '#calc', label: t(opts.lang, 'tool_squarefeet_title') }],
    id: 'toolNav',
  });

  const footerHtml = renderFooter({ lang: opts.lang });

  const extraHeadHtml = `
  <style>
    .sf-card { max-width: 640px; margin: 0 auto; background: #fff; padding: 1.25rem; border-radius: 12px; box-shadow: 0 6px 18px rgba(0,0,0,0.06);} 
    .sf-input { width: 100%; padding: 0.75rem; border-radius: 8px; border: 1px solid #ced4da; }
    .sf-btn { background:#0d6efd;color:#fff;border:none;padding:0.75rem 1rem;border-radius:8px;cursor:pointer;width:100%; }
    .sf-result { text-align:center; padding:1rem; background:#f8f9fa;border-radius:8px;margin-top:1rem }
    .unit-toggle { display:flex; gap:0.5rem; margin-bottom:1rem; justify-content:center }
    .unit-toggle button { padding:0.5rem 0.75rem;border-radius:8px;border:1px solid #ced4da;background:#e9ecef;cursor:pointer }
    .unit-toggle button.active { background:#0d6efd;color:#fff }
  </style>`;

  const contentHtml = `
  <div class="text-center mb-3">
    <h1>${escapeHtml(t(opts.lang, 'tool_squarefeet_title'))}</h1>
    <p class="text-muted">${escapeHtml(description)}</p>
  </div>

  <div id="calc" class="sf-card">
    <div class="unit-toggle">
      <button id="unitFeet" class="active">${t(opts.lang, 'unit_feet') || 'Feet'}</button>
      <button id="unitMeters">${t(opts.lang, 'unit_meters') || 'Meters'}</button>
      <button id="unitInches">${t(opts.lang, 'unit_inches') || 'Inches'}</button>
    </div>

    <form id="sfForm">
      <div class="mb-3">
        <label class="form-label">${escapeHtml(t(opts.lang, 'tool_squarefeet_length_label'))}</label>
        <input id="sfLength" class="sf-input" type="number" min="0" step="any" placeholder="${escapeHtml(t(opts.lang, 'tool_squarefeet_length_placeholder'))}" required />
      </div>
      <div class="mb-3">
        <label class="form-label">${escapeHtml(t(opts.lang, 'tool_squarefeet_width_label'))}</label>
        <input id="sfWidth" class="sf-input" type="number" min="0" step="any" placeholder="${escapeHtml(t(opts.lang, 'tool_squarefeet_width_placeholder'))}" required />
      </div>
      <button type="submit" class="sf-btn">${escapeHtml(t(opts.lang, 'tool_squarefeet_calculate'))}</button>
    </form>

    <div id="sfResult" class="sf-result" style="display:none">
      <div id="sfResultValue" class="h4"></div>
      <div id="sfResultNote" class="text-muted mt-2"></div>
    </div>
  </div>

  <div class="mt-4">
    <h3 class="h5">${escapeHtml(t(opts.lang, 'tool_squarefeet_title'))}</h3>
    <p>${escapeHtml(article)}</p>
    <h4 class="h6">${escapeHtml(t(opts.lang, 'tool_squarefeet_usage_title') || t(opts.lang, 'tool_squarefeet_usage'))}</h4>
    <p class="text-muted">${escapeHtml(t(opts.lang, 'tool_squarefeet_usage') || '')}</p>
  </div>`;

  const extraBodyHtml = `
  <script>
    const unitFeet = document.getElementById('unitFeet');
    const unitMeters = document.getElementById('unitMeters');
    const unitInches = document.getElementById('unitInches');
    const sfForm = document.getElementById('sfForm');
    const sfLength = document.getElementById('sfLength');
    const sfWidth = document.getElementById('sfWidth');
    const sfResult = document.getElementById('sfResult');
    const sfResultValue = document.getElementById('sfResultValue');
    const sfResultNote = document.getElementById('sfResultNote');

    function setActive(btn){ [unitFeet, unitMeters, unitInches].forEach(b=>b.classList.remove('active')); btn.classList.add('active') }
    unitFeet.addEventListener('click', ()=> setActive(unitFeet));
    unitMeters.addEventListener('click', ()=> setActive(unitMeters));
    unitInches.addEventListener('click', ()=> setActive(unitInches));

    sfForm.addEventListener('submit', function(e){
      e.preventDefault();
      const len = parseFloat(sfLength.value);
      const wid = parseFloat(sfWidth.value);
      if(!len || !wid){ sfResult.style.display='none'; return }
      let sqft = 0;
      if(unitFeet.classList.contains('active')){
        sqft = len * wid;
      } else if(unitMeters.classList.contains('active')){
        const sqm = len * wid; // m * m
        sqft = sqm * 10.7639104167;
      } else {
        // inches
        // convert inches to feet first
        const feetLen = len / 12;
        const feetWid = wid / 12;
        sqft = feetLen * feetWid;
      }
      const rounded = Math.round((sqft + Number.EPSILON) * 100) / 100;
      sfResultValue.textContent = rounded + ' ' + '${t(opts.lang, 'sqft_unit') || 'sq ft'}';
      sfResultNote.textContent = '${t(opts.lang, 'tool_squarefeet_result_note') || ''}';
      sfResult.style.display = 'block';
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

export default renderSquareFeetPage;
