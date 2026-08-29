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
 * @param {string} [opts.bodyClass='is-home-page'] body 类名（首页 / 信息页等布局差异）
 * @param {boolean} [opts.robotsNoindex=false] 为 true 时输出 `<meta name="robots" content="noindex">`（测试/门禁页等）
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
  bodyClass = 'is-home-page',
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

  /** 侧栏内任意链接点击后收起移动端抽屉。 */
  const sidebarAutoClose = sidebarAutoCloseSelector
    ? `
    document.querySelectorAll('#sidebar a').forEach((link) => {
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

  /** 无侧栏 HTML 时不占位、不加 collapsed 类（首页） */
  const hasSidebar = Boolean(String(sidebarHtml || '').trim());
  /** 有侧栏默认收起；无侧栏主栏占满 */
  const layoutClass = hasSidebar ? 'layout sidebar-collapsed' : 'layout layout-no-sidebar';

  const sidebarScript =
    includeSidebarToggleScript && hasSidebar
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

  /** 两级主题面板 + 桌面延时关闭 + 窄屏点击。 */
  const toolsMegaScript = `
  <script>
    (function () {
      var item = document.querySelector('.nav-item--tools-mega');
      if (!item) return;
      var toggle = item.querySelector('.nav-link--tools-mega');
      var panel = item.querySelector('.tools-mega-panel');
      if (!toggle || !panel) return;
      var mq = window.matchMedia('(min-width: 992px)');
      var closeTimer = null;
      var CLOSE_DELAY_MS = 220;

      function setOpen(open) {
        item.classList.toggle('is-open', open);
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      }

      function clearCloseTimer() {
        if (closeTimer) {
          clearTimeout(closeTimer);
          closeTimer = null;
        }
      }

      function scheduleClose() {
        clearCloseTimer();
        closeTimer = setTimeout(function () {
          setOpen(false);
          closeTimer = null;
        }, CLOSE_DELAY_MS);
      }

      function activateTopic(topicId) {
        if (!topicId) return;
        panel.querySelectorAll('.tools-mega-topic').forEach(function (btn) {
          var on = btn.getAttribute('data-topic-id') === topicId;
          btn.classList.toggle('is-active', on);
          btn.setAttribute('aria-pressed', on ? 'true' : 'false');
        });
        panel.querySelectorAll('.tools-mega-pane').forEach(function (pane) {
          var on = pane.getAttribute('data-topic-id') === topicId;
          pane.classList.toggle('is-active', on);
          if (on) pane.removeAttribute('hidden');
          else pane.setAttribute('hidden', '');
        });
      }

      panel.querySelectorAll('.tools-mega-topic').forEach(function (btn) {
        btn.addEventListener('mouseenter', function () {
          activateTopic(btn.getAttribute('data-topic-id'));
        });
        btn.addEventListener('focus', function () {
          activateTopic(btn.getAttribute('data-topic-id'));
        });
        btn.addEventListener('click', function (e) {
          e.preventDefault();
          activateTopic(btn.getAttribute('data-topic-id'));
        });
      });

      item.addEventListener('mouseenter', function () {
        if (!mq.matches) return;
        clearCloseTimer();
        setOpen(true);
      });
      item.addEventListener('mouseleave', function () {
        if (!mq.matches) return;
        scheduleClose();
      });
      panel.addEventListener('mouseenter', function () {
        if (!mq.matches) return;
        clearCloseTimer();
        setOpen(true);
      });
      panel.addEventListener('mouseleave', function () {
        if (!mq.matches) return;
        scheduleClose();
      });

      toggle.addEventListener('click', function (e) {
        if (mq.matches) return;
        e.preventDefault();
        setOpen(!item.classList.contains('is-open'));
      });
      document.addEventListener('click', function (e) {
        if (mq.matches) return;
        if (!item.contains(e.target)) setOpen(false);
      });
    })();
  </script>`;

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
  <link href="${bootstrapCss}" rel="stylesheet" />
  <link href="${fontCss}" rel="stylesheet" />
  <link href="/styles/site.css" rel="stylesheet" />
  <style>${sidebarCss}</style>
  ${tracking.headHtml}
  ${extraHeadHtml}
  ${headJsonLd ? `<script type="application/ld+json">${headJsonLd}</script>` : ''}
</head>
<body class="${bodyClass}">
  ${tracking.bodyHtml}
  ${headerHtml}
  <div class="${layoutClass}" id="layoutRoot">
    ${hasSidebar ? sidebarHtml : ''}
    <main id="content" class="p-4">${contentHtml}</main>
  </div>
  ${footerHtml}
  ${extraBodyHtml}
  <script src="${bootstrapJs}" defer></script>
  <script src="/js/theme.js" defer></script>
  ${sidebarScript}
  ${toolsMegaScript}
</body>
</html>`;
};
