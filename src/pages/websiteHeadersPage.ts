
import type { SiteLang } from '../site/i18n/types';
import { getLangLabel, t, supportedLangs } from '../site/i18n';
import { renderHeader } from './site/header';
import { renderSidebar } from './site/sidebar';
import { renderFooter } from './site/footer';
import { renderLayout, type HreflangAlternate, escapeHtml } from './site/layout';


export const renderWebsiteHeadersPage = (lang: SiteLang, defaultLang: SiteLang) => {
  const withLangPrefix = (code: SiteLang, pathname: string) => {
    const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
    return code === defaultLang ? safe : `/${code}${safe}`;
  };

  const canonicalPath = withLangPrefix(lang, '/tools/website-headers');
  const title = `${t(lang, 'tool_headers_title')} | ${t(lang, 'brand')}`;
  const description = t(lang, 'tool_headers_description');
  const article = t(lang, 'tool_headers_article');

  const navItems = [
    { href: withLangPrefix(lang, '/'), label: t(lang, 'nav_home') },
    { href: withLangPrefix(lang, '/#all-tools'), label: t(lang, 'nav_tools') },
    { href: '/devlogs/', label: t(lang, 'nav_devlogs') },
  ];

  const withExplicitLangPrefix = (code: SiteLang, pathname: string) => {
    const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
    return `/${code}${safe}`.replace(/\/{2,}/g, '/');
  };
  const langAlternates: Record<string, string> = Object.fromEntries(
    (supportedLangs || []).map((code) => [code, withExplicitLangPrefix(code, '/tools/website-headers')])
  );

  const alternates: HreflangAlternate[] = (supportedLangs || []).map((code) => ({
    lang: code,
    href: `https://onlinefreetools.org${withLangPrefix(code, '/tools/website-headers')}`,
  }));

  const headerHtml = renderHeader({
    lang,
    brandHref: withLangPrefix(lang, '/'),
    navItems,
    enabledLangs: supportedLangs,
    langAlternates,
  });

  const sidebarHtml = renderSidebar({
    title: t(lang, 'nav_tools'),
    items: [{ href: '#website-headers', label: t(lang, 'tool_headers_title') }],
    id: 'toolNav',
  });

  const footerHtml = renderFooter({ lang });

  const contentHtml = `
    <div id="website-headers" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(t(lang, 'tool_headers_title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <form id="form" class="row g-2 align-items-end mb-3">
      <div class="col-12 col-md-9">
        <label for="url" class="form-label">${escapeHtml(t(lang, 'url_label'))}</label>
        <input id="url" name="url" class="form-control" placeholder="${escapeHtml(t(lang, 'url_placeholder'))}" required />
      </div>
      <div class="col-12 col-md-3">
        <button class="btn btn-primary w-100" type="submit">${escapeHtml(t(lang, 'fetch_button'))}</button>
      </div>
    </form>

    <div class="card">
      <div class="card-header">${escapeHtml(t(lang, 'result_title'))}</div>
      <div class="card-body">
        <div class="mb-2"><span class="text-muted">${escapeHtml(t(lang, 'status_label'))}：</span><span id="status">-</span></div>
        <div class="mb-3"><span class="text-muted">${escapeHtml(t(lang, 'final_url_label'))}：</span><span id="finalUrl">-</span></div>
        <div class="mb-2 text-muted">${escapeHtml(t(lang, 'headers_label'))}：</div>
        <pre class="bg-light border rounded p-3 mb-0" style="white-space: pre-wrap;" id="headers">-</pre>
      </div>
    </div>

    <div class="mt-3">
      <h2 class="h6">${escapeHtml(t(lang, 'note_title'))}</h2>
      <ul class="text-muted small mb-0">
        <li>${escapeHtml(t(lang, 'note_1'))}</li>
        <li>${escapeHtml(t(lang, 'note_2'))}</li>
      </ul>
    </div>

    <div class="mt-4">
      <p class="small text-muted mb-0">${escapeHtml(article)}</p>
    </div>`;

  const extraBodyHtml = `
  <script>
    const form = document.getElementById('form');
    const statusEl = document.getElementById('status');
    const finalUrlEl = document.getElementById('finalUrl');
    const headersEl = document.getElementById('headers');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const url = document.getElementById('url').value.trim();
      statusEl.textContent = '-';
      finalUrlEl.textContent = '-';
      headersEl.textContent = '-';

      try {
        const res = await fetch('/api/tools/website-headers?url=' + encodeURIComponent(url));
        const data = await res.json();
        if (!res.ok) throw new Error(data && data.error ? data.error : 'Request failed');

        statusEl.textContent = String(data.status) + (data.statusText ? ' ' + data.statusText : '');
        finalUrlEl.textContent = data.finalUrl || '-';
        headersEl.textContent = JSON.stringify(data.headers || {}, null, 2);
      } catch (err) {
        statusEl.textContent = '${escapeHtml(t(lang, 'error_prefix'))}' + (err && err.message ? err.message : String(err));
      }
    });
  </script>`;

  return renderLayout({
    lang,
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