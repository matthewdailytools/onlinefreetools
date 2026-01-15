import { absoluteUrl, siteConfig } from './config.mjs';
import { getTrackingSnippets } from './tracking.mjs';

const bootstrapCss =
  'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css';
const bootstrapJs =
  'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/js/bootstrap.bundle.min.js';

export const renderLayout = ({
  lang,
  title,
  description,
  canonicalPath,
  ogImageUrl,
  ogType = 'website',
  alternates,
  headJsonLd,
  headerHtml,
  sidebarHtml,
  contentHtml,
  footerHtml,
  extraHeadHtml = '',
  extraBodyHtml = '',
  includeSidebarToggleScript = true,
  sidebarAutoCloseSelector,
}) => {
  const canonical = absoluteUrl(canonicalPath);
  const tracking = getTrackingSnippets();

  const enabledLangs = Array.isArray(alternates)
    ? Array.from(
        new Set(
          alternates
            .filter((a) => a && a.lang)
            .map((a) => String(a.lang).trim())
            .filter(Boolean)
        )
      )
    : [lang];

  const clientLangRedirectScript = `
  <script>
    (function () {
      try {
        var enabled = ${JSON.stringify(enabledLangs)};
        var defaultLang = ${JSON.stringify(siteConfig.defaultLang)};
        var fallback = defaultLang;
        var path = window.location.pathname || '/';

        // If the URL already contains a language prefix (including defaultLang), respect it.
        var hasPrefix = enabled.some(function (l) {
          return l && (path === '/' + l || path.indexOf('/' + l + '/') === 0);
        });
        if (hasPrefix) return;

        var langs = (navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language])
          .filter(Boolean)
          .map(function (x) { return String(x).toLowerCase().split('-')[0]; });

        var picked = null;
        for (var i = 0; i < langs.length; i++) {
          if (enabled.indexOf(langs[i]) !== -1) { picked = langs[i]; break; }
        }
        if (!picked) picked = enabled.indexOf(fallback) !== -1 ? fallback : (enabled[0] || fallback);

        if (picked === ${JSON.stringify(lang)}) return;
        var targetPath = path;
        if (picked !== defaultLang) {
          targetPath = ('/' + picked + path).replace(/\\/{2,}/g, '/');
        }
        window.location.replace(targetPath + window.location.search + window.location.hash);
      } catch (e) {}
    })();
  </script>`;

  const alternateLinks = Array.isArray(alternates)
    ? alternates
        .filter((a) => a && a.lang && a.href)
        .map((a) => `<link rel="alternate" hreflang="${a.lang}" href="${a.href}" />`)
        .join('\n  ')
    : '';

  const sidebarCss = `
    body { min-height: 100vh; padding-top: 56px; }
    .layout { display: flex; min-height: 100vh; }
    /* Sidebar: desktop - sticky under the fixed header */
    #sidebar {
      width: 260px;
      transition: margin-left 0.2s ease;
      position: sticky;
      top: 56px;
      height: calc(100vh - 56px);
      overflow-y: auto;
      background: #f8f9fa;
      border-right: 1px solid #e5e7eb;
      z-index: 1020;
    }
    #content { flex: 1; transition: margin-left 0.2s ease; }
    .sidebar-collapsed #sidebar { margin-left: -260px; }
    .sidebar-collapsed #content { margin-left: 0; }
    @media (min-width: 768px) {
      .layout:not(.sidebar-collapsed) #content { margin-left: 260px; }
    }
    @media (max-width: 767.98px) {
      #sidebar {
        position: fixed;
        z-index: 1020;
        top: 56px;
        bottom: 0;
        height: auto;
      }
      .sidebar-collapsed #sidebar { margin-left: -260px; }
      #content { margin-left: 0; }
      body { padding-top: 56px; }
    }
  `;

  const sidebarAutoClose = sidebarAutoCloseSelector
    ? `
    document.querySelectorAll(${JSON.stringify(sidebarAutoCloseSelector)}).forEach((link) => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 768) layout.classList.add('sidebar-collapsed');
      });
    });`
    : '';

  const sidebarScript =
    includeSidebarToggleScript
      ? `
  <script>
    const layout = document.getElementById('layoutRoot');
    const toggle = document.getElementById('sidebarToggle');
    if (layout && toggle) {
      toggle.addEventListener('click', () => layout.classList.toggle('sidebar-collapsed'));
      ${sidebarAutoClose}
    }
  </script>`
      : '';

  return `<!doctype html>
<html lang="${lang}">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>${title}</title>
  <meta name="description" content="${description}" />
  <link rel="canonical" href="${canonical}" />
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${description}" />
  <meta property="og:type" content="${ogType}" />
  <meta property="og:url" content="${canonical}" />
  <meta property="og:image" content="${ogImageUrl}" />
  <meta name="twitter:card" content="summary_large_image" />
  ${alternateLinks}
  ${clientLangRedirectScript}
  <link href="${bootstrapCss}" rel="stylesheet" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <style>${sidebarCss}</style>
  ${tracking.headHtml}
  ${extraHeadHtml}
  ${headJsonLd ? `<script type="application/ld+json">${headJsonLd}</script>` : ''}
</head>
<body>
  ${tracking.bodyHtml}
  ${headerHtml}
  <div class="layout sidebar-collapsed" id="layoutRoot">
    ${sidebarHtml}
    <main id="content" class="p-4">${contentHtml}</main>
  </div>
  ${footerHtml}
  ${extraBodyHtml}
  <script src="${bootstrapJs}" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  ${sidebarScript}
</body>
</html>`;
};
