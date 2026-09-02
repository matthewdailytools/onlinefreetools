/**
 * robots.txt URL 屏蔽检查工具页：粘贴页面 URL + 选择 UA，经 Worker 拉取 origin /robots.txt，
 * 报告该路径对所选爬虫是否允许，并展示命中的 Allow/Disallow 规则与原文预览。
 * slug: check-robots-txt-url-blocked（见 work-tasks/check-robots-txt-url-blocked/02-tool-info.md）。
 */
import type { SiteLang } from '../site/i18n';
import { t, supportedLangs } from '../site/i18n';
import { renderFooter } from './site/footer';
import { renderHeader } from './site/header';
import { buildToolPageNavItems } from './site/nav';
import { renderLayout, type HreflangAlternate, escapeHtml } from './site/layout';
import { renderSidebar, buildToolSidebarItems } from './site/sidebar';
import { getToolBySlug } from '../site/tools';
import {
	renderToolExtraSections,
	buildToolJsonLd,
	renderToolIgSections,
	renderToolReferencesSection,
} from './site/toolContent';

/** i18n 键前缀（与 catalog faqPrefix / i18n 分片一致）。 */
const PREFIX = 'tool_check_robots_txt_url_blocked';

/**
 * 为路径加上语言前缀（默认语无前缀）。
 * @param lang 当前语言
 * @param pathname 绝对路径（以 / 开头）
 * @param defaultLang 站点默认语言
 */
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * 渲染「检查网址是否被 robots.txt 屏蔽」工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表（保留签名兼容；实际用 supportedLangs）
 */
export const renderCheckRobotsTxtUrlBlockedPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/check-robots-txt-url-blocked';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, `${PREFIX}_title`)} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, `${PREFIX}_description`);

	const navItems = buildToolPageNavItems(opts.lang, opts.defaultLang);

	/**
	 * 语言切换链接始终带显式语言前缀（含默认语）。
	 * @param code 目标语言码
	 * @param pathname 工具路径
	 */
	const withExplicitLangPrefix = (code: SiteLang, pathname: string) => {
		const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
		return `/${code}${safe}`.replace(/\/{2,}/g, '/');
	};

	/** 页头语言下拉用的显式前缀映射。 */
	const langAlternates: Record<string, string> = Object.fromEntries(
		(supportedLangs || []).map((code) => [code, withExplicitLangPrefix(code, toolPath)])
	);

	/** hreflang / canonical 交替链接。 */
	const alternates: HreflangAlternate[] = (supportedLangs || []).map((code) => ({
		lang: code,
		href: `https://onlinefreetools.org${withLangPrefix(code, toolPath, opts.defaultLang)}`,
	}));

	const headerHtml = renderHeader({
		lang: opts.lang,
		brandHref: withLangPrefix(opts.lang, '/', opts.defaultLang),
		navItems,
		enabledLangs: supportedLangs,
		langAlternates,
	});

	const sidebarHtml = renderSidebar({
		title: t(opts.lang, 'nav_tools'),
		groups: buildToolSidebarItems({
			lang: opts.lang,
			defaultLang: opts.defaultLang,
			currentSlug: 'check-robots-txt-url-blocked',
			currentAnchor: '#check-robots-txt-url-blocked',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	/** 工具区局部样式（表单 + 结果卡片）。 */
	const extraHeadHtml = `
  <style>
    .tool-card { max-width: var(--content-max); width: 100%; margin: 0 0 1.5rem; }
    .form-label { display:block; margin-bottom:.5rem; color:#495057; font-weight:500 }
    .form-group { margin-bottom:1rem; }
    .btn-row { display:flex; flex-wrap:wrap; gap:.5rem; align-items:center; }
    .rb-url-input { display:block; width: calc(100% - 2rem); }
    @media (max-width: 640px) { .rb-url-input { width: 100%; } }
    .rb-result { border:1px solid #dee2e6; border-radius:8px; padding:.75rem; background:#fff; }
    .rb-badge { display:inline-block; padding:.15rem .55rem; border-radius:999px; font-size:.8rem; font-weight:700; }
    .rb-badge-ok { background:#d1e7dd; color:#0f5132; }
    .rb-badge-block { background:#f8d7da; color:#842029; }
    .rb-meta { font-size:.85rem; color:#495057; margin:.5rem 0; }
    .rb-meta dt { font-weight:600; }
    .rb-meta dd { margin:0 0 .4rem; word-break:break-all; }
    pre.rb-preview { background:#f8f9fa; border:1px solid #dee2e6; border-radius:8px; padding:.75rem; max-height:320px; overflow:auto; font-size:.8rem; white-space:pre-wrap; margin:0; }
    .rb-note { font-size:.8rem; color:#6c757d; margin-top:.75rem; }
  </style>`;

	const contentHtml = `
    <div id="check-robots-txt-url-blocked" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(t(opts.lang, `${PREFIX}_title`))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <div class="form-group">
          <label class="form-label" for="rbUrl">${escapeHtml(t(opts.lang, `${PREFIX}_url_label`))}</label>
          <input id="rbUrl" class="input-lg rb-url-input" type="text" maxlength="2000"
            placeholder="${escapeHtml(t(opts.lang, `${PREFIX}_url_ph`))}"
            autocomplete="off" spellcheck="false">
        </div>

        <div class="form-group">
          <label class="form-label" for="rbUa">${escapeHtml(t(opts.lang, `${PREFIX}_ua_label`))}</label>
          <select id="rbUa" class="form-select" style="max-width:20rem">
            <option value="Googlebot" selected>Googlebot</option>
            <option value="*">*</option>
            <option value="Bingbot">Bingbot</option>
            <option value="GPTBot">GPTBot</option>
          </select>
        </div>

        <div class="btn-row">
          <button type="button" id="rbCheck" class="btn btn-primary">${escapeHtml(t(opts.lang, `${PREFIX}_check`))}</button>
          <button type="button" id="rbSample" class="btn btn-outline-secondary">${escapeHtml(t(opts.lang, `${PREFIX}_sample`))}</button>
          <button type="button" id="rbClear" class="btn btn-outline-secondary">${escapeHtml(t(opts.lang, `${PREFIX}_clear`))}</button>
        </div>

        <p class="rb-note mb-0 mt-2">${escapeHtml(t(opts.lang, `${PREFIX}_privacy_note`))}</p>

        <div id="rbResult" class="mt-3" aria-live="polite"></div>
      </div>
    </div>

    ${renderToolIgSections({
			lang: opts.lang,
			prefix: PREFIX,
			mode: 'formula',
			ruleItemCount: 5,
			howItemCount: 5,
		})}`;

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: t(opts.lang, `${PREFIX}_ref_google_label`),
				href: 'https://developers.google.com/search/docs/crawling-indexing/robots/robots_txt',
			},
			{
				label: t(opts.lang, `${PREFIX}_ref_rfc_label`),
				href: 'https://www.rfc-editor.org/rfc/rfc9309.html',
			},
		],
	});

	/** 内联脚本：表单交互、API 调用、进页自动样例。正则字类须双反斜杠。 */
	const extraBodyHtml = `
  <script>
    (function () {
      /** @type {HTMLInputElement} */
      var urlEl = document.getElementById('rbUrl');
      /** @type {HTMLSelectElement} */
      var uaEl = document.getElementById('rbUa');
      /** @type {HTMLElement} */
      var resultEl = document.getElementById('rbResult');

      /** 页面文案（由服务端注入，避免硬编码英文）。 */
      var I = {
        running: ${JSON.stringify(t(opts.lang, `${PREFIX}_running`))},
        urlError: ${JSON.stringify(t(opts.lang, `${PREFIX}_url_error`))},
        errorPrefix: ${JSON.stringify(t(opts.lang, `${PREFIX}_error_prefix`))},
        fetchFailed: ${JSON.stringify(t(opts.lang, `${PREFIX}_fetch_failed`))},
        allowedYes: ${JSON.stringify(t(opts.lang, `${PREFIX}_result_allowed_yes`))},
        allowedNo: ${JSON.stringify(t(opts.lang, `${PREFIX}_result_allowed_no`))},
        matchedLabel: ${JSON.stringify(t(opts.lang, `${PREFIX}_result_matched`))},
        matchedNone: ${JSON.stringify(t(opts.lang, `${PREFIX}_result_matched_none`))},
        statusLabel: ${JSON.stringify(t(opts.lang, `${PREFIX}_result_http_status`))},
        pathLabel: ${JSON.stringify(t(opts.lang, `${PREFIX}_result_path`))},
        uaLabel: ${JSON.stringify(t(opts.lang, `${PREFIX}_result_ua`))},
        robotsUrlLabel: ${JSON.stringify(t(opts.lang, `${PREFIX}_result_robots_url`))},
        groupLabel: ${JSON.stringify(t(opts.lang, `${PREFIX}_result_group`))},
        previewLabel: ${JSON.stringify(t(opts.lang, `${PREFIX}_result_preview`))},
        previewMissing: ${JSON.stringify(t(opts.lang, `${PREFIX}_result_preview_missing`))},
      };

      /**
       * HTML 转义，防止结果区 XSS。
       * @param {string} s 原始字符串
       * @returns {string}
       */
      function esc(s) {
        return String(s == null ? '' : s)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      }

      /**
       * 校验并规范化用户输入的 URL（须 http/https）。
       * @param {string} raw 原始输入
       * @returns {string|null} 合法 URL 字符串，否则 null
       */
      function normalizeUrl(raw) {
        var u = (raw || '').trim();
        if (!/^https?:\\/\\//i.test(u)) return null;
        try {
          return new URL(u).toString();
        } catch (e) {
          return null;
        }
      }

      /**
       * 将 API 返回渲染为结果卡片。
       * @param {object} data Worker JSON 响应
       */
      function renderResult(data) {
        var allowed = !!data.allowed;
        var badgeClass = allowed ? 'rb-badge-ok' : 'rb-badge-block';
        var badgeText = allowed ? I.allowedYes : I.allowedNo;
        var matched = data.matched;
        var matchedText = I.matchedNone;
        if (matched && matched.type) {
          matchedText = String(matched.type).toUpperCase() + ': ' + (matched.path != null ? matched.path : '');
        }
        var groupAgents = Array.isArray(data.groupAgents) ? data.groupAgents.join(', ') : '';
        var missing = !!data.robotsMissing;
        var preview = missing ? '' : (data.robotsPreview || '');
        var previewHtml = missing
          ? '<p class="text-muted mb-0">' + esc(I.previewMissing) + '</p>'
          : '<pre class="rb-preview">' + esc(preview) + '</pre>';
        resultEl.innerHTML =
          '<div class="rb-result">' +
          '<div><span class="rb-badge ' + badgeClass + '">' + esc(badgeText) + '</span></div>' +
          '<dl class="rb-meta">' +
          '<dt>' + esc(I.pathLabel) + '</dt><dd>' + esc(data.path || '') + '</dd>' +
          '<dt>' + esc(I.uaLabel) + '</dt><dd>' + esc(data.userAgent || '') + '</dd>' +
          '<dt>' + esc(I.matchedLabel) + '</dt><dd>' + esc(matchedText) + '</dd>' +
          '<dt>' + esc(I.statusLabel) + '</dt><dd>' + esc(String(data.httpStatus != null ? data.httpStatus : '')) + '</dd>' +
          '<dt>' + esc(I.robotsUrlLabel) + '</dt><dd>' + esc(data.robotsUrl || '') + '</dd>' +
          (groupAgents ? '<dt>' + esc(I.groupLabel) + '</dt><dd>' + esc(groupAgents) + '</dd>' : '') +
          '</dl>' +
          '<div class="form-label">' + esc(I.previewLabel) + '</div>' +
          previewHtml +
          '</div>';
      }

      /**
       * 调用边缘 API 检查 robots.txt 是否屏蔽该 URL。
       * @returns {Promise<void>}
       */
      async function runCheck() {
        var u = normalizeUrl(urlEl.value);
        if (!u) {
          resultEl.innerHTML = '<p class="text-danger mb-0">' + esc(I.urlError) + '</p>';
          return;
        }
        var ua = (uaEl.value || 'Googlebot').trim() || 'Googlebot';
        resultEl.textContent = I.running;
        try {
          var res = await fetch(
            '/api/tools/check-robots-txt-url-blocked?url=' +
              encodeURIComponent(u) +
              '&ua=' +
              encodeURIComponent(ua)
          );
          var data = await res.json();
          if (!res.ok || data.error) {
            throw new Error(data && data.error ? data.error : I.fetchFailed);
          }
          renderResult(data);
        } catch (err) {
          var msg = err && err.message ? err.message : I.fetchFailed;
          resultEl.innerHTML = '<p class="text-danger mb-0">' + esc(I.errorPrefix + msg) + '</p>';
        }
      }

      /**
       * 填充示例 URL（有真实 robots.txt、本机出站较稳）并立即检查。
       * 勿用 example.com（HTML 404 伪正文）；勿用 google.com（部分网络 workerd 会断连）。
       * bing.com/search 对 * 有 Disallow:/search，便于演示「被屏蔽」。
       */
      function loadSample() {
        urlEl.value = 'https://www.bing.com/search';
        uaEl.value = 'Googlebot';
        runCheck();
      }

      document.getElementById('rbCheck').addEventListener('click', function () {
        runCheck();
      });
      document.getElementById('rbSample').addEventListener('click', loadSample);
      document.getElementById('rbClear').addEventListener('click', function () {
        urlEl.value = '';
        uaEl.value = 'Googlebot';
        resultEl.innerHTML = '';
      });

      /** 进页自动跑样例并显示真实结果。 */
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadSample);
      } else {
        loadSample();
      }
    })();
  </script>`;

	const toolMeta = getToolBySlug('check-robots-txt-url-blocked');
	const toolSeoHtml = toolMeta
		? renderToolExtraSections({ lang: opts.lang, defaultLang: opts.defaultLang, tool: toolMeta })
		: '';
	const toolJsonLd = toolMeta
		? buildToolJsonLd({
				lang: opts.lang,
				defaultLang: opts.defaultLang,
				tool: toolMeta,
				name: t(opts.lang, toolMeta.i18nKey as keyof typeof import('../site/i18n/en').default),
				description,
				canonicalPath,
			})
		: '';

	return renderLayout({
		lang: opts.lang,
		title,
		description,
		canonicalPath,
		alternates,
		headerHtml,
		sidebarHtml,
		footerHtml,
		contentHtml: `${contentHtml}${toolSeoHtml}${referencesHtml}`,
		extraHeadHtml,
		extraBodyHtml,
		ogImageUrl: 'https://onlinefreetools.org/og-image.png',
		jsonLd: toolJsonLd,
	});
};
