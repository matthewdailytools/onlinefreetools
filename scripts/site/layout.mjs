import { absoluteUrl, siteConfig } from './config.mjs';
import { getTrackingSnippets } from './tracking.mjs';

/** 同域 Bootstrap / 字体（scripts/copy-site-chrome-vendor.mjs）。 */
const bootstrapCss = '/vendor/bootstrap/bootstrap.min.css';
const bootstrapJs = '/vendor/bootstrap/bootstrap.bundle.min.js';
const fontCss = '/vendor/fonts/plus-jakarta-sans.css';

/**
 * 首屏前读取 localStorage 主题，避免 FOUC。
 * 合法值：teal | green | amber | navy；默认 teal。
 */
const themeBootScript = `<script>(function(){try{var k='oft-theme',v=localStorage.getItem(k),ok={teal:1,green:1,amber:1,navy:1};document.documentElement.setAttribute('data-theme',(v&&ok[v])?v:'teal');}catch(e){document.documentElement.setAttribute('data-theme','teal');}})();</script>`;

/**
 * 渲染站点静态页 HTML 外壳（head、布局、侧栏脚本等）。
 * @param {object} opts
 * @param {boolean} [opts.robotsNoindex=false] 为 true 时输出 `<meta name="robots" content="noindex">`（devlogs、测试页等）
 */
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
  robotsNoindex = false,
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

  const alternateItems = Array.isArray(alternates)
    ? alternates.filter((a) => a && a.lang && a.href)
    : [];
  const xDefaultHref =
    (alternateItems.find((a) => a.lang === siteConfig.defaultLang) || {}).href ||
    (alternateItems.find((a) => a.lang === 'en') || {}).href ||
    canonical;
  const alternateLinks = alternateItems.length
    ? [
        ...alternateItems.map(
          (a) => `<link rel="alternate" hreflang="${a.lang}" href="${a.href}" />`
        ),
        `<link rel="alternate" hreflang="x-default" href="${xDefaultHref}" />`,
      ].join('\n  ')
    : '';

  /** 布局行为已迁入 /styles/site.css；此处仅保留极薄兜底以防 CSS 未加载 */
  const sidebarCss = `
    body { min-height: 100vh; padding-top: var(--header-h, 56px); }
    .layout { display: flex; min-height: calc(100vh - var(--header-h, 56px)); }
  `;

  const sidebarAutoClose = sidebarAutoCloseSelector
    ? `
    document.querySelectorAll(${JSON.stringify(sidebarAutoCloseSelector)}).forEach((link) => {
      link.addEventListener('click', (e) => {
        try {
          const sidebar = document.getElementById('sidebar');
          const prevScroll = sidebar ? sidebar.scrollTop : 0;
          const href = link.getAttribute('href') || '';
          if (href.startsWith('#')) {
            const target = document.querySelector(href);
            if (target) {
              e.preventDefault();
              const headerOffset = 56;
              const targetY = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;
              window.scrollTo({ top: targetY, behavior: 'smooth' });
            }
          }
          link.blur();
          if (window.innerWidth < 768) layout.classList.add('sidebar-collapsed');
          setTimeout(() => { if (sidebar) sidebar.scrollTop = prevScroll; }, 300);
        } catch (err) {}
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
  ${themeBootScript}
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>${title}</title>
  <meta name="description" content="${description}" />
  ${robotsNoindex ? '<meta name="robots" content="noindex" />' : ''}
  <link rel="canonical" href="${canonical}" />
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${description}" />
  <meta property="og:type" content="${ogType}" />
  <meta property="og:url" content="${canonical}" />
  <meta property="og:image" content="${ogImageUrl}" />
  <meta name="twitter:card" content="summary_large_image" />
  ${alternateLinks}
  <link rel="icon" href="/favicon.ico" sizes="any" />
  <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
  ${clientLangRedirectScript}
  <link rel="preload" href="${bootstrapCss}" as="style" />
  <link rel="preload" href="${fontCss}" as="style" />
  <link href="${bootstrapCss}" rel="stylesheet" />
  <link href="${fontCss}" rel="stylesheet" />
  <link href="/styles/site.css" rel="stylesheet" />
  <style>${sidebarCss}</style>
  ${tracking.headHtml}
  ${extraHeadHtml}
  ${headJsonLd ? `<script type="application/ld+json">${headJsonLd}</script>` : ''}
</head>
<body class="is-home-page">
  ${tracking.bodyHtml}
  ${headerHtml}
  <div class="layout sidebar-collapsed" id="layoutRoot">
    ${sidebarHtml}
    <main id="content" class="p-4">${contentHtml}</main>
  </div>
  ${footerHtml}
  ${extraBodyHtml}
  <script src="${bootstrapJs}" defer></script>
  <script src="/js/theme.js" defer></script>
  ${sidebarScript}
</body>
</html>`;
};
