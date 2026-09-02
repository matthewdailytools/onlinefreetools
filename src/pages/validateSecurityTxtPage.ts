/**
 * security.txt 校验工具页：输入域名/URL，经 Worker 拉取 /.well-known/security.txt（回退 /security.txt），
 * 按 RFC 9116 解析 Contact/Expires 等字段并报告缺失与过期。
 * slug: validate-security-txt（见 work-tasks/validate-security-txt/02-tool-info.md）。
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
const PREFIX = 'tool_validate_security_txt';

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
 * 渲染「Validate security.txt」工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表（保留签名兼容；实际用 supportedLangs）
 */
export const renderValidateSecurityTxtPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/validate-security-txt';
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
			currentSlug: 'validate-security-txt',
			currentAnchor: '#validate-security-txt',
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
    .st-url-input { display:block; width: calc(100% - 2rem); }
    @media (max-width: 640px) { .st-url-input { width: 100%; } }
    .st-result { border:1px solid #dee2e6; border-radius:8px; padding:.75rem; background:#fff; }
    .st-badge { display:inline-block; padding:.15rem .55rem; border-radius:999px; font-size:.8rem; font-weight:700; margin-right:.35rem; margin-bottom:.35rem; }
    .st-badge-ok { background:#d1e7dd; color:#0f5132; }
    .st-badge-warn { background:#fff3cd; color:#664d03; }
    .st-badge-bad { background:#f8d7da; color:#842029; }
    .st-meta { font-size:.85rem; color:#495057; margin:.5rem 0; }
    .st-meta dt { font-weight:600; }
    .st-meta dd { margin:0 0 .4rem; word-break:break-all; }
    pre.st-preview { background:#f8f9fa; border:1px solid #dee2e6; border-radius:8px; padding:.75rem; max-height:320px; overflow:auto; font-size:.8rem; white-space:pre-wrap; margin:0; }
    .st-note { font-size:.8rem; color:#6c757d; margin-top:.75rem; }
  </style>`;

	const contentHtml = `
    <div id="validate-security-txt" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(t(opts.lang, `${PREFIX}_title`))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <div class="form-group">
          <label class="form-label" for="stUrl">${escapeHtml(t(opts.lang, `${PREFIX}_url_label`))}</label>
          <input id="stUrl" class="input-lg st-url-input" type="text" maxlength="2000"
            placeholder="${escapeHtml(t(opts.lang, `${PREFIX}_url_ph`))}"
            autocomplete="off" spellcheck="false">
        </div>

        <div class="btn-row">
          <button type="button" id="stCheck" class="btn btn-primary">${escapeHtml(t(opts.lang, `${PREFIX}_check`))}</button>
          <button type="button" id="stSample" class="btn btn-outline-secondary">${escapeHtml(t(opts.lang, `${PREFIX}_sample`))}</button>
          <button type="button" id="stClear" class="btn btn-outline-secondary">${escapeHtml(t(opts.lang, `${PREFIX}_clear`))}</button>
        </div>

        <p class="st-note mb-0 mt-2">${escapeHtml(t(opts.lang, `${PREFIX}_privacy_note`))}</p>

        <div id="stResult" class="mt-3" aria-live="polite"></div>
      </div>
    </div>

    ${renderToolIgSections({
			lang: opts.lang,
			prefix: PREFIX,
			mode: 'formula',
			ruleItemCount: 5,
			howItemCount: 4,
		})}`;

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: t(opts.lang, `${PREFIX}_ref_rfc_label`),
				href: 'https://www.rfc-editor.org/rfc/rfc9116.html',
			},
			{
				label: t(opts.lang, `${PREFIX}_ref_org_label`),
				href: 'https://securitytxt.org/',
			},
		],
	});

	/** 内联脚本：表单交互、API 调用、进页自动样例。正则字类须双反斜杠。 */
	const extraBodyHtml = `
  <script>
    (function () {
      /** @type {HTMLInputElement} */
      var urlEl = document.getElementById('stUrl');
      /** @type {HTMLElement} */
      var resultEl = document.getElementById('stResult');

      /** 页面文案（由服务端注入，避免硬编码英文）。 */
      var I = {
        running: ${JSON.stringify(t(opts.lang, `${PREFIX}_running`))},
        urlError: ${JSON.stringify(t(opts.lang, `${PREFIX}_url_error`))},
        errorPrefix: ${JSON.stringify(t(opts.lang, `${PREFIX}_error_prefix`))},
        fetchFailed: ${JSON.stringify(t(opts.lang, `${PREFIX}_fetch_failed`))},
        foundYes: ${JSON.stringify(t(opts.lang, `${PREFIX}_result_found_yes`))},
        foundNo: ${JSON.stringify(t(opts.lang, `${PREFIX}_result_found_no`))},
        contactLabel: ${JSON.stringify(t(opts.lang, `${PREFIX}_result_contact`))},
        expiresLabel: ${JSON.stringify(t(opts.lang, `${PREFIX}_result_expires`))},
        missingLabel: ${JSON.stringify(t(opts.lang, `${PREFIX}_result_missing`))},
        missingNone: ${JSON.stringify(t(opts.lang, `${PREFIX}_result_missing_none`))},
        expiredYes: ${JSON.stringify(t(opts.lang, `${PREFIX}_result_expired_yes`))},
        expiredNo: ${JSON.stringify(t(opts.lang, `${PREFIX}_result_expired_no`))},
        fileUrlLabel: ${JSON.stringify(t(opts.lang, `${PREFIX}_result_file_url`))},
        statusLabel: ${JSON.stringify(t(opts.lang, `${PREFIX}_result_http_status`))},
        preferredLabel: ${JSON.stringify(t(opts.lang, `${PREFIX}_result_preferred`))},
        canonicalLabel: ${JSON.stringify(t(opts.lang, `${PREFIX}_result_canonical`))},
        previewLabel: ${JSON.stringify(t(opts.lang, `${PREFIX}_result_preview`))},
        noneValue: ${JSON.stringify(t(opts.lang, `${PREFIX}_result_none`))},
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
       * 规范化用户输入的域名或 URL（允许裸域名，Worker 会补 https://）。
       * @param {string} raw 原始输入
       * @returns {string|null} 可提交字符串，否则 null
       */
      function normalizeInput(raw) {
        var u = (raw || '').trim();
        if (!u) return null;
        if (/^https?:\\/\\//i.test(u)) {
          try {
            return new URL(u).toString();
          } catch (e) {
            return null;
          }
        }
        if (!/^[a-z0-9.-]+(\\/.*)?$/i.test(u)) return null;
        return u;
      }

      /**
       * 将字段数组拼成可读字符串。
       * @param {string[]|undefined} arr 字段值
       * @returns {string}
       */
      function joinField(arr) {
        if (!Array.isArray(arr) || !arr.length) return I.noneValue;
        return arr.join(', ');
      }

      /**
       * 将 API 返回渲染为结果卡片。
       * @param {object} data Worker JSON 响应
       */
      function renderResult(data) {
        if (!data.found) {
          resultEl.innerHTML =
            '<div class="st-result">' +
            '<div><span class="st-badge st-badge-bad">' + esc(I.foundNo) + '</span></div>' +
            '<dl class="st-meta">' +
            '<dt>' + esc(I.statusLabel) + '</dt><dd>' + esc(String(data.httpStatus != null ? data.httpStatus : '')) + '</dd>' +
            '</dl>' +
            '</div>';
          return;
        }
        var missing = Array.isArray(data.missingRequired) ? data.missingRequired : [];
        var expired = !!data.expired;
        var badges =
          '<span class="st-badge st-badge-ok">' + esc(I.foundYes) + '</span>' +
          (expired
            ? '<span class="st-badge st-badge-bad">' + esc(I.expiredYes) + '</span>'
            : '<span class="st-badge st-badge-ok">' + esc(I.expiredNo) + '</span>') +
          (missing.length
            ? '<span class="st-badge st-badge-warn">' + esc(I.missingLabel + ': ' + missing.join(', ')) + '</span>'
            : '<span class="st-badge st-badge-ok">' + esc(I.missingNone) + '</span>');
        var fields = data.fields || {};
        var preview = data.preview || '';
        resultEl.innerHTML =
          '<div class="st-result">' +
          '<div>' + badges + '</div>' +
          '<dl class="st-meta">' +
          '<dt>' + esc(I.fileUrlLabel) + '</dt><dd>' + esc(data.url || '') + '</dd>' +
          '<dt>' + esc(I.contactLabel) + '</dt><dd>' + esc(joinField(fields.Contact)) + '</dd>' +
          '<dt>' + esc(I.expiresLabel) + '</dt><dd>' + esc(fields.Expires && fields.Expires[0] ? fields.Expires[0] : I.noneValue) + '</dd>' +
          '<dt>' + esc(I.preferredLabel) + '</dt><dd>' + esc(joinField(fields['Preferred-Languages'])) + '</dd>' +
          '<dt>' + esc(I.canonicalLabel) + '</dt><dd>' + esc(joinField(fields.Canonical)) + '</dd>' +
          '<dt>' + esc(I.statusLabel) + '</dt><dd>' + esc(String(data.httpStatus != null ? data.httpStatus : '')) + '</dd>' +
          '</dl>' +
          '<div class="form-label">' + esc(I.previewLabel) + '</div>' +
          '<pre class="st-preview">' + esc(preview) + '</pre>' +
          '</div>';
      }

      /**
       * 调用边缘 API 校验 security.txt。
       * @returns {Promise<void>}
       */
      async function runCheck() {
        var u = normalizeInput(urlEl.value);
        if (!u) {
          resultEl.innerHTML = '<p class="text-danger mb-0">' + esc(I.urlError) + '</p>';
          return;
        }
        resultEl.textContent = I.running;
        try {
          var res = await fetch(
            '/api/tools/validate-security-txt?url=' + encodeURIComponent(u)
          );
          var data = await res.json();
          if (!res.ok) {
            throw new Error(data && data.error ? data.error : I.fetchFailed);
          }
          if (data.found === false) {
            renderResult(data);
            return;
          }
          if (data.error) {
            throw new Error(data.error);
          }
          renderResult(data);
        } catch (err) {
          var msg = err && err.message ? err.message : I.fetchFailed;
          resultEl.innerHTML = '<p class="text-danger mb-0">' + esc(I.errorPrefix + msg) + '</p>';
        }
      }

      /**
       * 填充示例 URL 并立即校验。
       * 进页与「加载示例」按钮共用此路径。
       */
      function loadSample() {
        urlEl.value = 'https://www.google.com/';
        runCheck();
      }

      document.getElementById('stCheck').addEventListener('click', function () {
        runCheck();
      });
      document.getElementById('stSample').addEventListener('click', loadSample);
      document.getElementById('stClear').addEventListener('click', function () {
        urlEl.value = '';
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

	const toolMeta = getToolBySlug('validate-security-txt');
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
