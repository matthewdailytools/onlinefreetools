import type { SiteLang } from '../../site/i18n';

const SITE_BASE_URL = 'https://onlinefreetools.org';
const BOOTSTRAP_CSS =
	'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css';
const BOOTSTRAP_JS =
	'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/js/bootstrap.bundle.min.js';

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

const sidebarCss = `
  body { min-height: 100vh; padding-top: 56px; box-sizing: border-box; }
  .layout { display: flex; min-height: calc(100vh - 56px); }
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

  /* Desktop: keep navbar items on one line and prevent wrapping */
  @media (min-width: 768px) {
    .navbar { min-height: 56px; }
    .navbar .container-fluid { align-items: center; }
    .navbar .d-flex { align-items: center; gap: .5rem; flex-wrap: nowrap; }
    .navbar .d-flex form.d-flex { display: flex; gap: .5rem; align-items: center; }
    .navbar .d-flex form.d-flex .form-control { max-width: 200px; }
    .navbar .d-flex form.d-flex .btn { white-space: nowrap; flex-shrink: 0; }
    .navbar-brand { white-space: nowrap; }
  }

  /* Mobile: fixed sliding drawer under the header */
  @media (max-width: 767.98px) {
    #sidebar {
      position: fixed;
      z-index: 1040;
      top: 56px;
      bottom: 0;
      height: auto;
    }
    .sidebar-collapsed #sidebar { margin-left: -260px; }
    #content { margin-left: 0; }
    body { padding-top: 56px; }
  }
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

	const alternateLinks = (opts.alternates || [])
		.filter((a) => a && a.lang && a.href)
		.map((a) => `<link rel="alternate" hreflang="${escapeHtml(a.lang)}" href="${escapeHtml(a.href)}" />`)
		.join('\n  ');

	const sidebarAutoClose = opts.sidebarAutoCloseSelector
		? `
    document.querySelectorAll(${JSON.stringify(opts.sidebarAutoCloseSelector)}).forEach((link) => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 768) layout.classList.add('sidebar-collapsed');
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
      toggle.addEventListener('click', () => layout.classList.toggle('sidebar-collapsed'));
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
  <link href="${BOOTSTRAP_CSS}" rel="stylesheet" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <link href="/styles/omnicalc.css" rel="stylesheet" />
  <style>${sidebarCss}</style>
  ${opts.extraHeadHtml || ''}
</head>
<body>
  ${opts.headerHtml}
  <div class="layout sidebar-collapsed" id="layoutRoot">
    ${opts.sidebarHtml}
    <main id="content" class="p-4">${opts.contentHtml}</main>
  </div>
  ${opts.footerHtml}
  ${opts.extraBodyHtml || ''}
  <script src="${BOOTSTRAP_JS}" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  ${sidebarScript}
</body>
</html>`;
};
