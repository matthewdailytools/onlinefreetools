/**
 * 网站响应头查看工具页：经边缘拉取 HTTP 头、常见头说明、RFC 引用。
 * slug: website-headers；主方向 A（见 work-tasks/website-headers/02-tool-info.md）。
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
 * 渲染 Website Headers 工具页。
 * @param lang 当前语言
 * @param defaultLang 站点默认语言
 */
export const renderWebsiteHeadersPage = (lang: SiteLang, defaultLang: SiteLang) => {
	/** 为路径加上语言前缀（默认语无前缀）。 */
	const withLangPrefix = (code: SiteLang, pathname: string) => {
		const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
		return code === defaultLang ? safe : `/${code}${safe}`;
	};

	const toolPath = '/tools/website-headers';
	const canonicalPath = withLangPrefix(lang, toolPath);
	const title = `${t(lang, 'tool_headers_title')} | ${t(lang, 'brand')}`;
	const description = t(lang, 'tool_headers_description');

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
		items: buildToolSidebarItems({ lang: lang, defaultLang: defaultLang, currentSlug: 'website-headers', currentAnchor: '#website-headers' }),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang });

	const contentHtml = `
    <div id="website-headers" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(t(lang, 'tool_headers_title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <form id="form" class="row g-2 align-items-end mb-3">
      <div class="col-12 col-md-9">
        <label for="url" class="form-label">${escapeHtml(t(lang, 'url_label'))}</label>
        <input id="url" name="url" class="input-lg" placeholder="${escapeHtml(t(lang, 'url_placeholder'))}" required />
      </div>
      <div class="col-12 col-md-3">
        <button class="btn btn-primary w-100" type="submit">${escapeHtml(t(lang, 'fetch_button'))}</button>
      </div>
    </form>

    <div class="card mb-3">
      <div class="card-header">${escapeHtml(t(lang, 'result_title'))}</div>
      <div class="card-body">
        <div class="mb-2"><span class="text-muted">${escapeHtml(t(lang, 'status_label'))}: </span><span id="status">-</span></div>
        <div class="mb-3"><span class="text-muted">${escapeHtml(t(lang, 'final_url_label'))}: </span><span id="finalUrl">-</span></div>
        <div class="mb-2 text-muted">${escapeHtml(t(lang, 'headers_label'))}:</div>
        <pre id="headers" class="mb-0">-</pre>
      </div>
    </div>

    <div class="mb-3">
      <h2 class="h6">${escapeHtml(t(lang, 'note_title'))}</h2>
      <ul class="text-muted small mb-0">
        <li>${escapeHtml(t(lang, 'note_1'))}</li>
        <li>${escapeHtml(t(lang, 'note_2'))}</li>
      </ul>
    </div>

    ${renderToolIgSections({ lang, prefix: 'tool_headers', mode: 'rules' })}`;

	const referencesHtml = renderToolReferencesSection({
		lang,
		links: [
			{
				label: t(lang, 'tool_headers_ref_rfc9110_label'),
				href: 'https://www.rfc-editor.org/rfc/rfc9110.html',
			},
			{
				label: t(lang, 'tool_headers_ref_mdn_label'),
				href: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers',
			},
			{
				label: t(lang, 'tool_headers_ref_rfc9111_label'),
				href: 'https://www.rfc-editor.org/rfc/rfc9111.html',
			},
		],
	});

	const extraBodyHtml = `
  <script>
    (function () {
      var form = document.getElementById('form');
      var statusEl = document.getElementById('status');
      var finalUrlEl = document.getElementById('finalUrl');
      var headersEl = document.getElementById('headers');
      var errPrefix = ${JSON.stringify(t(lang, 'error_prefix'))};

      form.addEventListener('submit', async function (e) {
        e.preventDefault();
        var url = document.getElementById('url').value.trim();
        statusEl.textContent = '-';
        finalUrlEl.textContent = '-';
        headersEl.textContent = '-';

        try {
          var res = await fetch('/api/tools/website-headers?url=' + encodeURIComponent(url));
          var data = await res.json();
          if (!res.ok) throw new Error(data && data.error ? data.error : 'Request failed');

          statusEl.textContent = String(data.status) + (data.statusText ? ' ' + data.statusText : '');
          finalUrlEl.textContent = data.finalUrl || '-';
          headersEl.textContent = JSON.stringify(data.headers || {}, null, 2);
        } catch (err) {
          statusEl.textContent = errPrefix + (err && err.message ? err.message : String(err));
        }
      });
    })();
  </script>`;

	const toolMeta = getToolBySlug('website-headers');
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
