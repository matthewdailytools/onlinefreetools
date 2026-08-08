import type { SiteLang } from '../../site/i18n';
import { getLangLabel, t } from '../../site/i18n';
import { escapeHtml } from './layout';
import type { NavItem } from './nav';

/** 工具等入口：新标签打开时附带安全 rel */
const newTabAttrs = (openInNewTab?: boolean) =>
	openInNewTab ? ' target="_blank" rel="noopener noreferrer"' : '';

/**
 * 将顶栏导航项渲染为 Bootstrap navbar HTML（支持分类下拉）。
 * @param items 链接或下拉菜单项
 */
const renderNavItems = (items: NavItem[]): string =>
	items
		.map((item) => {
			if (item.type === 'dropdown') {
				const menu = item.items
					.map(
						(sub) =>
							`<li><a class="dropdown-item" href="${escapeHtml(sub.href)}"${newTabAttrs(sub.openInNewTab)}>${escapeHtml(sub.label)}</a></li>`
					)
					.join('');
				return `<li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">${escapeHtml(item.label)}</a>
          <ul class="dropdown-menu">${menu}</ul>
        </li>`;
			}
			return `<li class="nav-item"><a class="nav-link" href="${escapeHtml(item.href)}"${newTabAttrs(item.openInNewTab)}>${escapeHtml(item.label)}</a></li>`;
		})
		.join('');

/**
 * 渲染全站顶栏（品牌、导航、语言切换、可选侧栏开关）。
 */
export const renderHeader = (opts: {
	lang: SiteLang;
	brandHref: string;
	navItems: NavItem[];
	enabledLangs: SiteLang[];
	langAlternates: Record<string, string>;
	showSidebarToggle?: boolean;
}) => {
	const navHtml = renderNavItems(opts.navItems || []);

	const enabled = (opts.enabledLangs || []).length ? opts.enabledLangs : ([opts.lang] as SiteLang[]);
	const showLangSwitcher = enabled.length > 1;

	const otherLangLinks = showLangSwitcher
		? enabled
				.map((code) => {
					const href = code === opts.lang ? null : opts.langAlternates[code];
					const label = getLangLabel(code);
					if (!href) {
						return `<li><span class="dropdown-item active" aria-current="true">${escapeHtml(label)}</span></li>`;
					}
					return `<li><a class="dropdown-item" href="${escapeHtml(href)}">${escapeHtml(label)}</a></li>`;
				})
				.join('')
		: '';

	const currentLabel = getLangLabel(opts.lang);

	/** 四套品牌主题切换器（色点 + 本地化名称）。 */
	const themeSwitcher = `
          <div class="dropdown theme-switcher">
            <button class="btn btn-outline-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" aria-label="${escapeHtml(t(opts.lang, 'theme_label'))}">
              <span class="theme-swatch" data-theme-swatch aria-hidden="true"></span>
              <span class="d-none d-md-inline">${escapeHtml(t(opts.lang, 'theme_label'))}</span>
            </button>
            <ul class="dropdown-menu dropdown-menu-end">
              <li><button type="button" class="dropdown-item theme-option" data-theme-set="teal"><span class="theme-swatch theme-swatch--teal" aria-hidden="true"></span>${escapeHtml(t(opts.lang, 'theme_teal'))}</button></li>
              <li><button type="button" class="dropdown-item theme-option" data-theme-set="green"><span class="theme-swatch theme-swatch--green" aria-hidden="true"></span>${escapeHtml(t(opts.lang, 'theme_green'))}</button></li>
              <li><button type="button" class="dropdown-item theme-option" data-theme-set="amber"><span class="theme-swatch theme-swatch--amber" aria-hidden="true"></span>${escapeHtml(t(opts.lang, 'theme_amber'))}</button></li>
              <li><button type="button" class="dropdown-item theme-option" data-theme-set="navy"><span class="theme-swatch theme-swatch--navy" aria-hidden="true"></span>${escapeHtml(t(opts.lang, 'theme_navy'))}</button></li>
            </ul>
          </div>`;

	return `
  <header>
    <nav class="navbar navbar-expand-lg navbar-light site-navbar border-bottom fixed-top">
      <div class="container-fluid">
			${
				opts.showSidebarToggle === false
					? ''
					: '<button class="btn btn-outline-secondary me-2" id="sidebarToggle" aria-label="Toggle sidebar"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="6" width="18" height="2" rx="1" fill="currentColor"/><rect x="3" y="11" width="18" height="2" rx="1" fill="currentColor" opacity="0.9"/><rect x="3" y="16" width="18" height="2" rx="1" fill="currentColor" opacity="0.8"/></svg></button>'
			}
        <a class="navbar-brand" href="${escapeHtml(opts.brandHref)}">
          <img class="navbar-brand-logo" src="/brand-logo.svg" width="28" height="28" alt="" decoding="async" />
          <span class="navbar-brand-text">${escapeHtml(t(opts.lang, 'brand'))}</span>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#topNav" aria-controls="topNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="topNav">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">${navHtml}</ul>
          <div class="d-flex align-items-center gap-2 ms-lg-2">
            ${themeSwitcher}
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
      </div>
    </nav>
  </header>`;
};
