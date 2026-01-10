import { siteConfig, withLangPath } from './config.mjs';
import { t } from './i18n.mjs';

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
      const href =
        code === current
          ? null
          : (langAlternates && langAlternates[code]) || withLangPath(code, '/');
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
    langAlternates,
}) => {
  const navHtml = navItems
    .map((i) => `<li class="nav-item"><a class="nav-link" href="${i.href}">${i.label}</a></li>`)
    .join('');

  const searchHtml =
    showSearch
      ? `
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="${t(lang, 'search_placeholder')}" aria-label="Search">
            <button class="btn btn-outline-primary" type="submit">${t(lang, 'search_button')}</button>
          </form>`
      : '';

  return `
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom fixed-top">
      <div class="container-fluid">
        ${
          showSidebarToggle
            ? '<button class="btn btn-outline-secondary me-2" id="sidebarToggle" aria-label="Toggle sidebar">☰</button>'
            : ''
        }
        <a class="navbar-brand fw-semibold" href="${brandHref}">${t(lang, 'brand')}</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#topNav" aria-controls="topNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="topNav">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">${navHtml}</ul>
          <div class="d-flex align-items-center gap-2">
            ${searchHtml}
            ${renderLangSwitcher({ lang, langAlternates })}
          </div>
        </div>
      </div>
    </nav>
  </header>`;
};

export const renderSidebar = ({ title, items = [], id = 'sidebarList' }) => {
  const list = items
    .map((i) => `<a class="list-group-item list-group-item-action" href="${i.href}">${i.label}</a>`)
    .join('');
  return `
    <aside id="sidebar" class="bg-light border-end p-3">
      <h6 class="text-muted text-uppercase">${title}</h6>
      <div class="list-group list-group-flush small" id="${id}">${list}</div>
    </aside>`;
};

export const renderFooter = ({ lang }) => `
  <footer class="bg-light border-top text-center py-3">
    <div class="container">
      <small class="text-muted">${t(lang, 'footer_text')}</small>
    </div>
  </footer>`;
