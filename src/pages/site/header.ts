import type { SiteLang } from '../../site/i18n';
import { t } from '../../site/i18n';
import { escapeHtml } from './layout';

type NavItem = { href: string; label: string };

export const renderHeader = (opts: {
	lang: SiteLang;
	brandHref: string;
	navItems: NavItem[];
	enabledLangs: SiteLang[];
	langAlternates: Record<string, string>;
	showSidebarToggle?: boolean;
}) => {
	const navHtml = (opts.navItems || [])
		.map((i) => `<li class="nav-item"><a class="nav-link" href="${escapeHtml(i.href)}">${escapeHtml(i.label)}</a></li>`)
		.join('');

	const enabled = (opts.enabledLangs || []).length ? opts.enabledLangs : ([opts.lang] as SiteLang[]);
	const showLangSwitcher = enabled.length > 1;

	const otherLangLinks = showLangSwitcher
		? enabled
				.map((code) => {
					const href = code === opts.lang ? null : opts.langAlternates[code];
					const label = code === 'zh' ? '中文' : 'English';
					if (!href) {
						return `<li><span class="dropdown-item active" aria-current="true">${escapeHtml(label)}</span></li>`;
					}
					return `<li><a class="dropdown-item" href="${escapeHtml(href)}">${escapeHtml(label)}</a></li>`;
				})
				.join('')
		: '';

	const currentLabel = opts.lang === 'zh' ? '中文' : 'English';

	return `
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom fixed-top">
      <div class="container-fluid">
        ${
				opts.showSidebarToggle === false
					? ''
					: '<button class="btn btn-outline-secondary me-2" id="sidebarToggle" aria-label="Toggle sidebar">☰</button>'
			}
        <a class="navbar-brand fw-semibold" href="${escapeHtml(opts.brandHref)}">${escapeHtml(t(opts.lang, 'brand'))}</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#topNav" aria-controls="topNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="topNav">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">${navHtml}</ul>
          ${
				showLangSwitcher
					? `
          <div class="dropdown">
            <button class="btn btn-outline-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              ${escapeHtml(currentLabel)}
            </button>
            <ul class="dropdown-menu dropdown-menu-end">${otherLangLinks}</ul>
          </div>`
					: ''
			}
        </div>
      </div>
    </nav>
  </header>`;
};
