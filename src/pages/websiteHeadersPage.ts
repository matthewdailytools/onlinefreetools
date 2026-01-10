import type { SiteLang } from '../site/i18n';
import { t, supportedLangs } from '../site/i18n';
const withExplicitLangPrefix = (lang: SiteLang, pathname: string) => {
  const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return `/${lang}${safe}`.replace(/\/{2,}/g, '/');
};

const escapeHtml = (s: string) =>
  s
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');

export const renderWebsiteHeadersPage = (lang: SiteLang, defaultLang: SiteLang) => {
  const title = t(lang, 'tool_headers_title');
  const description = t(lang, 'tool_headers_description');

  const otherLangLinks = supportedLangs
    .map((code) => {
      const href = withExplicitLangPrefix(code, '/tools/website-headers');
      const label = code === 'zh' ? '中文' : 'English';
      if (code === lang) {
        return `<li><span class="dropdown-item active" aria-current="true">${label}</span></li>`;
      }
      return `<li><a class="dropdown-item" href="${href}">${label}</a></li>`;
    })
    .join('');

  return `<!doctype html>
<html lang="${lang}">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>${escapeHtml(title)} | ${escapeHtml(t(lang, 'brand'))}</title>
  <meta name="description" content="${escapeHtml(description)}" />
  <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body>
  <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
    <div class="container">
      <a class="navbar-brand fw-semibold" href="${withExplicitLangPrefix(lang, '/')}">${escapeHtml(t(lang, 'brand'))}</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#topNav" aria-controls="topNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="topNav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item"><a class="nav-link" href="${withExplicitLangPrefix(lang, '/')}">${escapeHtml(t(lang, 'nav_home'))}</a></li>
          <li class="nav-item"><a class="nav-link" href="${withExplicitLangPrefix(lang, '/devlogs/')}">${escapeHtml(t(lang, 'nav_devlogs'))}</a></li>
        </ul>
        <div class="dropdown">
          <button class="btn btn-outline-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            ${lang === 'zh' ? '中文' : 'English'}
          </button>
          <ul class="dropdown-menu dropdown-menu-end">${otherLangLinks}</ul>
        </div>
      </div>
    </div>
  </nav>

  <main class="container py-4">
    <div class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(title)}</h1>
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
  </main>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/js/bootstrap.bundle.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
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
  </script>
</body>
</html>`;
};
