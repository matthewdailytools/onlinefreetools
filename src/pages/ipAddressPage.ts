/**
 * 公网 IP 查询工具页：边缘所见出口地址、VPN/代理局限、权威引用。
 * slug: ip-address；主方向 A（见 work-tasks/ip-address/02-tool-info.md）。
 */
import type { SiteLang } from '../site/i18n/types';
import { t, supportedLangs } from '../site/i18n';
import { renderHeader } from './site/header';
import { buildToolPageNavItems } from './site/nav';
import { renderSidebar, buildToolSidebarItems } from './site/sidebar';
import { getToolBySlug } from '../site/tools';
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

	const navItems = buildToolPageNavItems(lang, defaultLang);

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


	const sidebarHtml = renderSidebar({
		title: t(lang, 'nav_tools'),
		groups: buildToolSidebarItems({ lang: lang, defaultLang: defaultLang, currentSlug: 'ip-address', currentAnchor: '#ip-address' }),
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
        <div class="mb-2"><span class="text-muted">${escapeHtml(t(lang, 'ip_label'))}: </span><span id="ipAddress">-</span><span id="ipVersion" class="badge text-bg-secondary ms-2 d-none"></span></div>
        <div class="mb-2"><span class="text-muted">${escapeHtml(t(lang, 'ip_location_label'))}: </span><span id="ipLocation">-</span></div>
        <div class="mb-2"><span class="text-muted">${escapeHtml(t(lang, 'ip_timezone_label'))}: </span><span id="ipTimezone">-</span></div>
        <div class="mb-2"><span class="text-muted">${escapeHtml(t(lang, 'ip_isp_label'))}: </span><span id="ipIsp">-</span></div>
        <p class="small text-muted mb-3">${escapeHtml(t(lang, 'ip_geo_note'))}</p>
        <div class="mt-1">
          <button type="button" id="fetchButton" class="btn btn-primary">${escapeHtml(t(lang, 'fetch_ip_button'))}</button>
        </div>
      </div>
    </div>

    ${renderToolIgSections({ lang, prefix: 'tool_ip_address', mode: 'rules', ruleItemCount: 5 })}`;

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
      var ipVersionEl = document.getElementById('ipVersion');
      var ipLocationEl = document.getElementById('ipLocation');
      var ipTimezoneEl = document.getElementById('ipTimezone');
      var ipIspEl = document.getElementById('ipIsp');
      var fetchButton = document.getElementById('fetchButton');
      var fetchingMsg = ${JSON.stringify(t(lang, 'fetching_message'))};
      var errPrefix = ${JSON.stringify(t(lang, 'error_prefix'))};
      var labelV4 = ${JSON.stringify(t(lang, 'ip_version_ipv4'))};
      var labelV6 = ${JSON.stringify(t(lang, 'ip_version_ipv6'))};
      var geoUnknown = ${JSON.stringify(t(lang, 'ip_geo_unknown'))};
      var ispUnknown = ${JSON.stringify(t(lang, 'ip_isp_unknown'))};

      /** 将 geo 对象格式化为「城市, 省/州, 国家」可读串。 */
      function formatLocation(geo) {
        if (!geo) return geoUnknown;
        var parts = [];
        if (geo.city) parts.push(geo.city);
        if (geo.region) parts.push(geo.region);
        else if (geo.regionCode) parts.push(geo.regionCode);
        if (geo.country) parts.push(geo.country);
        return parts.length ? parts.join(', ') : geoUnknown;
      }

      /** 将 isp 对象格式化为「组织 (ASnnnnn)」可读串。 */
      function formatIsp(isp) {
        if (!isp) return ispUnknown;
        if (isp.organization && isp.asn != null) {
          return isp.organization + ' (AS' + isp.asn + ')';
        }
        if (isp.organization) return isp.organization;
        if (isp.asn != null) return 'AS' + isp.asn;
        return ispUnknown;
      }

      /** 渲染 IP 与版本角标（version 为本次连接所见 4 或 6，非双栈并列）。 */
      function renderIpResult(ip, version) {
        ipAddressEl.textContent = ip || '-';
        if (!ipVersionEl) return;
        if (version === '4') {
          ipVersionEl.textContent = labelV4;
          ipVersionEl.classList.remove('d-none');
        } else if (version === '6') {
          ipVersionEl.textContent = labelV6;
          ipVersionEl.classList.remove('d-none');
        } else {
          ipVersionEl.textContent = '';
          ipVersionEl.classList.add('d-none');
        }
      }

      /** 渲染 Cloudflare 边缘附带的粗略地区、时区与运营商。 */
      function renderGeoIsp(geo, isp) {
        if (ipLocationEl) ipLocationEl.textContent = formatLocation(geo);
        if (ipTimezoneEl) {
          ipTimezoneEl.textContent = geo && geo.timezone ? geo.timezone : geoUnknown;
        }
        if (ipIspEl) ipIspEl.textContent = formatIsp(isp);
      }

      /** 加载中重置结果区。 */
      function setLoading() {
        ipAddressEl.textContent = fetchingMsg;
        if (ipVersionEl) ipVersionEl.classList.add('d-none');
        if (ipLocationEl) ipLocationEl.textContent = fetchingMsg;
        if (ipTimezoneEl) ipTimezoneEl.textContent = fetchingMsg;
        if (ipIspEl) ipIspEl.textContent = fetchingMsg;
      }

      /** 向边缘 API 请求当前连接的公网出口 IP 及 cf 元数据。 */
      async function fetchIpAddress() {
        try {
          setLoading();
          var res = await fetch('/api/tools/ip-address');
          var data = await res.json();
          if (!res.ok) {
            throw new Error(data && data.error ? data.error : 'Request failed');
          }
          renderIpResult(data.ip, data.version);
          renderGeoIsp(data.geo || null, data.isp || null);
        } catch (err) {
          renderIpResult(errPrefix + (err && err.message ? err.message : String(err)), null);
          renderGeoIsp(null, null);
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
