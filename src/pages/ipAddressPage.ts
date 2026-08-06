/**
 * 公网 IP 查询工具页：边缘所见出口地址、VPN/代理局限、权威引用。
 * slug: ip-address；主方向 A（见 work-tasks/ip-address/02-tool-info.md）。
 */
import type { SiteLang } from '../site/i18n/types';
import { t, supportedLangs } from '../site/i18n';
import { renderHeader } from './site/header';
import { renderSidebar } from './site/sidebar';
import { TOOL_PAGES, getToolBySlug } from '../site/tools';
import {
	renderToolExtraSections,
	buildToolJsonLd,
	renderToolIgSections,
	renderToolReferencesSection,
} from './site/toolContent';
import { renderFooter } from './site/footer';
import { renderLayout, type HreflangAlternate, escapeHtml } from './site/layout';

/**
 * 渲染「我的 IP」工具页。
 * @param lang 当前语言
 * @param defaultLang 站点默认语言
 */
export const renderIpAddressPage = (lang: SiteLang, defaultLang: SiteLang) => {
	/** 为路径加上语言前缀（默认语无前缀）。 */
	const withLangPrefix = (code: SiteLang, pathname: string) => {
		const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
		return code === defaultLang ? safe : `/${code}${safe}`;
	};

	const toolPath = '/tools/ip-address';
	const canonicalPath = withLangPrefix(lang, toolPath);
	const title = `${t(lang, 'tool_ip_address_title')} | ${t(lang, 'brand')}`;
	const description = t(lang, 'tool_ip_address_description');

	const navItems = [
		{ href: withLangPrefix(lang, '/'), label: t(lang, 'nav_home') },
		{ href: withLangPrefix(lang, '/#all-tools'), label: t(lang, 'nav_tools') },
		{ href: '/devlogs/', label: t(lang, 'nav_devlogs') },
	];

	/** 语言切换链接始终带显式语言前缀。 */
	const withExplicitLangPrefix = (code: SiteLang, pathname: string) => {
		const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
		return `/${code}${safe}`.replace(/\/{2,}/g, '/');
	};

	const langAlternates: Record<string, string> = Object.fromEntries(
		(supportedLangs || []).map((code) => [code, withExplicitLangPrefix(code, toolPath)])
	);

	const alternates: HreflangAlternate[] = (supportedLangs || []).map((code) => ({
		lang: code,
		href: `https://onlinefreetools.org${withLangPrefix(code, toolPath)}`,
	}));

	const headerHtml = renderHeader({
		lang,
		brandHref: withLangPrefix(lang, '/'),
		navItems,
		enabledLangs: supportedLangs,
		langAlternates,
	});

	const toolLinks = (TOOL_PAGES || []).map((p) => ({
		href: withLangPrefix(lang, p.path),
		label: t(lang, p.i18nKey),
	}));

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

    <div class="card mb-3">
      <div class="card-header">${escapeHtml(t(lang, 'result_title'))}</div>
      <div class="card-body">
        <div class="mb-2"><span class="text-muted">${escapeHtml(t(lang, 'ip_label'))}: </span><span id="ipAddress">-</span></div>
        <div class="mt-3">
          <button type="button" id="fetchButton" class="btn btn-primary">${escapeHtml(t(lang, 'fetch_ip_button'))}</button>
        </div>
      </div>
    </div>

    ${renderToolIgSections({ lang, prefix: 'tool_ip_address', mode: 'rules' })}`;

	const referencesHtml = renderToolReferencesSection({
		lang,
		links: [
			{
				label: t(lang, 'tool_ip_address_ref_mdn_label'),
				href: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For',
			},
			{
				label: t(lang, 'tool_ip_address_ref_cloudflare_label'),
				href: 'https://www.cloudflare.com/learning/network-layer/what-is-an-ip-address/',
			},
		],
	});

	const extraBodyHtml = `
  <script>
    (function () {
      var ipAddressEl = document.getElementById('ipAddress');
      var fetchButton = document.getElementById('fetchButton');
      var fetchingMsg = ${JSON.stringify(t(lang, 'fetching_message'))};
      var errPrefix = ${JSON.stringify(t(lang, 'error_prefix'))};

      /** 向边缘 API 请求当前连接的公网出口 IP。 */
      async function fetchIpAddress() {
        try {
          ipAddressEl.textContent = fetchingMsg;
          var res = await fetch('/api/tools/ip-address');
          var data = await res.json();
          if (!res.ok) {
            throw new Error(data && data.error ? data.error : 'Request failed');
          }
          ipAddressEl.textContent = data.ip || '-';
        } catch (err) {
          ipAddressEl.textContent = errPrefix + (err && err.message ? err.message : String(err));
        }
      }

      fetchIpAddress();
      fetchButton.addEventListener('click', fetchIpAddress);
    })();
  </script>`;

	const toolMeta = getToolBySlug('ip-address');
	const toolSeoHtml = toolMeta
		? renderToolExtraSections({ lang, defaultLang, tool: toolMeta })
		: '';
	const toolJsonLd = toolMeta
		? buildToolJsonLd({
				lang,
				defaultLang,
				tool: toolMeta,
				name: t(lang, toolMeta.i18nKey as keyof typeof import('../site/i18n/en').default),
				description,
				canonicalPath,
			})
		: '';

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
		contentHtml: `${contentHtml}${toolSeoHtml}${referencesHtml}`,
		extraHeadHtml: toolJsonLd,
		footerHtml,
		extraBodyHtml,
		includeSidebarToggleScript: true,
		sidebarAutoCloseSelector: '#toolNav a',
	});
};
