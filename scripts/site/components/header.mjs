import { siteConfig, withExplicitLangPath, withLangPath } from '../config.mjs';
import { t } from '../i18n.mjs';

const renderLangSwitcher = ({ lang, langAlternates }) => {
  if (!siteConfig.languages || siteConfig.languages.length <= 1) return '';

  const enabled = (siteConfig.enabledLangs && siteConfig.enabledLangs.length
    ? siteConfig.enabledLangs
    : [siteConfig.defaultLang]
  ).filter(Boolean);

  const current = lang;
  const currentLabel =
    (siteConfig.languages.find((l) => l.code === current) || { label: current }).label;

  if (enabled.length <= 1) {
    return `
      <div>
        <button class="btn btn-outline-secondary btn-sm" type="button" disabled aria-label="Language">
          ${currentLabel}
        </button>
      </div>`;
  }

  const links = enabled
    .map((code) => {
      const label = (siteConfig.languages.find((l) => l.code === code) || { label: code }).label;
      const href = code === current ? null : (langAlternates && langAlternates[code]) || withExplicitLangPath(code, '/');
      return href
        ? `<li><a class=\"dropdown-item\" href=\"${href}\">${label}</a></li>`
        : `<li><span class=\"dropdown-item active\" aria-current=\"true\">${label}</span></li>`;
    })
    .join('');

  return `
    <div class="dropdown">
      <button class="btn btn-outline-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        ${currentLabel}
      </button>
      <ul class=\"dropdown-menu dropdown-menu-end\">${links}</ul>
    </div>`;
};

export const renderHeader = ({
  lang,
  brandHref,
  navItems = [],
  showSidebarToggle = true,
  showSearch = false,
  showLangSwitcher = true,
  langAlternates,
}) => {
  const navHtml = navItems
    .map((item) => {
      if (item.type === 'dropdown') {
        const menu = (item.items || [])
          .map((sub) => `<li><a class="dropdown-item" href="${sub.href}">${sub.label}</a></li>`)
          .join('');
        return `<li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">${item.label}</a>
          <ul class="dropdown-menu">${menu}</ul>
        </li>`;
      }
      return `<li class="nav-item"><a class="nav-link" href="${item.href}">${item.label}</a></li>`;
    })
    .join('');

  // Search form intentionally removed: site no longer exposes a top-level search input/button.

  /** 四套品牌主题切换器（色点 + 本地化名称）。 */
  const themeSwitcher = `
            <div class="dropdown theme-switcher">
              <button class="btn btn-outline-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" aria-label="${t(lang, 'theme_label')}">
                <span class="theme-swatch" data-theme-swatch aria-hidden="true"></span>
                <span class="d-none d-md-inline">${t(lang, 'theme_label')}</span>
              </button>
              <ul class="dropdown-menu dropdown-menu-end">
                <li><button type="button" class="dropdown-item theme-option" data-theme-set="teal"><span class="theme-swatch theme-swatch--teal" aria-hidden="true"></span>${t(lang, 'theme_teal')}</button></li>
                <li><button type="button" class="dropdown-item theme-option" data-theme-set="green"><span class="theme-swatch theme-swatch--green" aria-hidden="true"></span>${t(lang, 'theme_green')}</button></li>
                <li><button type="button" class="dropdown-item theme-option" data-theme-set="amber"><span class="theme-swatch theme-swatch--amber" aria-hidden="true"></span>${t(lang, 'theme_amber')}</button></li>
                <li><button type="button" class="dropdown-item theme-option" data-theme-set="navy"><span class="theme-swatch theme-swatch--navy" aria-hidden="true"></span>${t(lang, 'theme_navy')}</button></li>
              </ul>
            </div>`;

  return `
  <header>
    <nav class="navbar navbar-expand-lg navbar-light site-navbar border-bottom fixed-top">
      <div class="container-fluid">
        ${
          showSidebarToggle
            ? '<button class="btn btn-outline-secondary me-2" id="sidebarToggle" aria-label="Toggle sidebar">☰</button>'
            : ''
        }
        <a class="navbar-brand" href="${brandHref}">
          <img class="navbar-brand-logo" src="/brand-logo.svg" width="28" height="28" alt="" decoding="async" />
          <span class="navbar-brand-text">${t(lang, 'brand')}</span>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#topNav" aria-controls="topNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="topNav">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">${navHtml}</ul>
          <div class="d-flex align-items-center gap-2">
            ${themeSwitcher}
            ${showLangSwitcher ? renderLangSwitcher({ lang, langAlternates }) : ''}
          </div>
        </div>
      </div>
    </nav>
  </header>`;
};
