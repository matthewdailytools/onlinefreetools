import type { SiteLang } from '../site/i18n/types';
import { getLangLabel, t, supportedLangs } from '../site/i18n';
import { renderHeader } from './site/header';
import { renderSidebar } from './site/sidebar';
import { TOOL_PAGES } from '../site/tools';
import { renderFooter } from './site/footer';
import { renderLayout, type HreflangAlternate, escapeHtml } from './site/layout';

export const renderIpAddressPage = (lang: SiteLang, defaultLang: SiteLang) => {
  const withLangPrefix = (code: SiteLang, pathname: string) => {
    const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
    return code === defaultLang ? safe : `/${code}${safe}`;
  };

  const canonicalPath = withLangPrefix(lang, '/tools/ip-address');
  const title = `${t(lang, 'tool_ip_address_title')} | ${t(lang, 'brand')}`;
  const description = t(lang, 'tool_ip_address_description');
  const article = t(lang, 'tool_ip_address_article');

  const navItems = [
    { href: withLangPrefix(lang, '/'), label: t(lang, 'nav_home') },
    { href: withLangPrefix(lang, '/#all-tools'), label: t(lang, 'nav_tools') },
    { href: '/devlogs/', label: t(lang, 'nav_devlogs') },
  ];

  const withExplicitLangPrefix = (code: SiteLang, pathname: string) => {
    const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
    return `/${code}${safe}`.replace(/\/{2,}/g, '/');
  };
  const langAlternates: Record<string, string> = Object.fromEntries(
    (supportedLangs || []).map((code) => [code, withExplicitLangPrefix(code, '/tools/ip-address')])
  );

  const alternates: HreflangAlternate[] = (supportedLangs || []).map((code) => ({
    lang: code,
    href: `https://onlinefreetools.org${withLangPrefix(code, '/tools/ip-address')}`,
  }));

  const headerHtml = renderHeader({
    lang,
    brandHref: withLangPrefix(lang, '/'),
    navItems,
    enabledLangs: supportedLangs,
    langAlternates,
  });

  const toolLinks = (TOOL_PAGES || []).map((p) => ({ href: withLangPrefix(lang, p.path), label: t(lang, p.i18nKey) }));

  const sidebarHtml = renderSidebar({
    title: t(lang, 'nav_tools'),
    items: [{ href: '#ip-address', label: t(lang, 'tool_ip_address_title') }, ...toolLinks],
    id: 'toolNav',
  });

  const footerHtml = renderFooter({ lang });

  const contentHtml = `
    <div id="ip-address" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(t(lang, 'tool_ip_address_title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card">
      <div class="card-header">${escapeHtml(t(lang, 'result_title'))}</div>
      <div class="card-body">
        <div class="mb-2"><span class="text-muted">${escapeHtml(t(lang, 'ip_label'))}：</span><span id="ipAddress">-</span></div>
        <div class="mt-3">
          <button id="fetchButton" class="btn btn-primary">${escapeHtml(t(lang, 'fetch_ip_button'))}</button>
        </div>
      </div>
    </div>

    <div class="mt-3">
      <h2 class="h6">${escapeHtml(t(lang, 'what_is_ip_title'))}</h2>
      <p class="text-muted small mb-0">${escapeHtml(t(lang, 'what_is_ip_content'))}</p>
    </div>

    <div class="mt-4">
      <p class="small text-muted mb-0">${escapeHtml(article)}</p>
    </div>`;

  const extraBodyHtml = `
  <script>
    const ipAddressEl = document.getElementById('ipAddress');
    const fetchButton = document.getElementById('fetchButton');

    const fetchIpAddress = async () => {
      try {
        ipAddressEl.textContent = '${escapeHtml(t(lang, 'fetching_message'))}';
        const res = await fetch('/api/tools/ip-address');
        const data = await res.json();
        
        if (!res.ok) {
          throw new Error(data && data.error ? data.error : 'Request failed');
        }
        
        ipAddressEl.textContent = data.ip || '-';
      } catch (err) {
        ipAddressEl.textContent = '${escapeHtml(t(lang, 'error_prefix'))}' + (err && err.message ? err.message : String(err));
      }
    };

    // 页面加载时自动获取IP
    fetchIpAddress();

    fetchButton.addEventListener('click', fetchIpAddress);
  </script>`;

  return renderLayout({
    lang,
    title,
    description,
    canonicalPath,
    ogImageUrl: 'https://onlinefreetools.org/og-image.png',
    ogType: 'website',
    alternates,
    headerHtml,
    sidebarHtml,
    contentHtml,
    footerHtml,
    extraBodyHtml,
    includeSidebarToggleScript: true,
    sidebarAutoCloseSelector: '#toolNav a',
  });
};