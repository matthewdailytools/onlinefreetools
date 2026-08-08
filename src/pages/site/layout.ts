import type { SiteLang } from '../../site/i18n';

const SITE_BASE_URL = 'https://onlinefreetools.org';

/**
 * Clarity：load 后再空闲注入，避免与首屏同域资源抢连接（外网不可达时也不拖慢页面）。
 */
const CLARITY_SCRIPT = `
<script>
(function () {
  function injectClarity() {
    (function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "xbc0iytpn7");
  }
  function schedule() {
    if (typeof requestIdleCallback === 'function') requestIdleCallback(injectClarity, { timeout: 4000 });
    else setTimeout(injectClarity, 2000);
  }
  if (document.readyState === 'complete') schedule();
  else window.addEventListener('load', schedule, { once: true });
})();
</script>`;

/** 同域 Bootstrap（由 scripts/copy-site-chrome-vendor.mjs 复制）。 */
const BOOTSTRAP_CSS = '/vendor/bootstrap/bootstrap.min.css';
const BOOTSTRAP_JS = '/vendor/bootstrap/bootstrap.bundle.min.js';
/** 同域 Plus Jakarta Sans @font-face。 */
const FONT_CSS = '/vendor/fonts/plus-jakarta-sans.css';

export const escapeHtml = (s: string) =>
	s
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;')
		.replaceAll("'", '&#39;');

export const absoluteUrl = (pathnameOrUrl: string) => {
	try {
		return new URL(pathnameOrUrl, SITE_BASE_URL).toString();
	} catch {
		return SITE_BASE_URL;
	}
};

/** 布局行为已迁入 /styles/site.css；此处仅保留极薄兜底 */
const sidebarCss = `
  body { min-height: 100vh; padding-top: var(--header-h, 56px); box-sizing: border-box; }
  .layout { display: flex; min-height: calc(100vh - var(--header-h, 56px)); }
`;

export type HreflangAlternate = { lang: SiteLang; href: string };

export const renderLayout = (opts: {
	lang: SiteLang;
	title: string;
	description: string;
	canonicalPath: string;
	ogImageUrl: string;
	ogType?: string;
	alternates?: HreflangAlternate[];
	headerHtml: string;
	sidebarHtml: string;
	contentHtml: string;
	footerHtml: string;
	extraHeadHtml?: string;
	extraBodyHtml?: string;
	includeSidebarToggleScript?: boolean;
	sidebarAutoCloseSelector?: string;
}) => {
	const canonical = absoluteUrl(opts.canonicalPath);
	const title = escapeHtml(opts.title);
	const description = escapeHtml(opts.description);
	const ogType = escapeHtml(opts.ogType || 'website');
	const ogImageUrl = escapeHtml(opts.ogImageUrl);

	const alternateItems = (opts.alternates || []).filter((a) => a && a.lang && a.href);
	const xDefaultHref =
		alternateItems.find((a) => a.lang === 'en')?.href ||
		absoluteUrl(opts.canonicalPath);
	const alternateLinks = [
		...alternateItems.map(
			(a) => `<link rel="alternate" hreflang="${escapeHtml(a.lang)}" href="${escapeHtml(a.href)}" />`
		),
		`<link rel="alternate" hreflang="x-default" href="${escapeHtml(xDefaultHref)}" />`,
	].join('\n  ');

	const sidebarAutoClose = opts.sidebarAutoCloseSelector
		? `
    document.querySelectorAll(${JSON.stringify(opts.sidebarAutoCloseSelector)}).forEach((link) => {
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
          if (window.innerWidth < 768) {
            // Close the mobile drawer after navigating to a section.
            layout.classList.remove('sidebar-collapsed');
            layout.classList.add('sidebar-mobile-collapsed');
          }
          setTimeout(() => { if (sidebar) sidebar.scrollTop = prevScroll; }, 300);
        } catch (err) {}
      });
    });`
		: '';

	const includeToggle = opts.includeSidebarToggleScript !== false;
	const sidebarScript = includeToggle
		? `
  <script>
    const layout = document.getElementById('layoutRoot');
    const toggle = document.getElementById('sidebarToggle');
    if (layout && toggle) {
      toggle.addEventListener('click', () => {
        // Keep independent desktop and mobile states so the drawer opens correctly after resizing.
        if (window.innerWidth < 768) {
          layout.classList.remove('sidebar-collapsed');
          layout.classList.toggle('sidebar-mobile-collapsed');
        } else {
          layout.classList.remove('sidebar-mobile-collapsed');
          layout.classList.toggle('sidebar-collapsed');
        }
      });
      ${sidebarAutoClose}
    }
  </script>`
		: '';

	return `<!doctype html>
<html lang="${escapeHtml(opts.lang)}">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>${title}</title>
  <meta name="description" content="${description}" />
  <link rel="canonical" href="${escapeHtml(canonical)}" />
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${description}" />
  <meta property="og:type" content="${ogType}" />
  <meta property="og:url" content="${escapeHtml(canonical)}" />
  <meta property="og:image" content="${ogImageUrl}" />
  <meta name="twitter:card" content="summary_large_image" />
  ${alternateLinks}
  <link rel="icon" href="/favicon.ico" sizes="any" />
  <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
  <link rel="preload" href="${BOOTSTRAP_CSS}" as="style" />
  <link rel="preload" href="${FONT_CSS}" as="style" />
  <link href="${BOOTSTRAP_CSS}" rel="stylesheet" />
  <link href="${FONT_CSS}" rel="stylesheet" />
  <link href="/styles/site.css" rel="stylesheet" />
  <style>${sidebarCss}</style>
  ${CLARITY_SCRIPT}
  ${opts.extraHeadHtml || ''}
</head>
<body class="is-tool-page">
  ${opts.headerHtml}
  <div class="layout sidebar-mobile-collapsed" id="layoutRoot">
    ${opts.sidebarHtml}
    <main id="content" class="p-4">${opts.contentHtml}</main>
  </div>
  ${opts.footerHtml}
  ${opts.extraBodyHtml || ''}
  <script src="${BOOTSTRAP_JS}" defer></script>
  ${sidebarScript}
</body>
</html>`;
};
