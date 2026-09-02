/**
 * SSL 证书过期检查工具页：输入主机名，经 Worker 查询 crt.sh CT 日志，
 * 展示最新匹配证书的 notBefore / notAfter / issuer / daysLeft（非实时 TLS 握手）。
 * slug: check-ssl-certificate-expiration（见 work-tasks/check-ssl-certificate-expiration/02-tool-info.md）。
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
const PREFIX = 'tool_check_ssl_certificate_expiration';

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
 * 渲染「Check SSL certificate expiration」工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表（保留签名兼容；实际用 supportedLangs）
 */
export const renderCheckSslCertificateExpirationPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/check-ssl-certificate-expiration';
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
			currentSlug: 'check-ssl-certificate-expiration',
			currentAnchor: '#check-ssl-certificate-expiration',
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
    .ssl-host-input { display:block; width: calc(100% - 2rem); }
    @media (max-width: 640px) { .ssl-host-input { width: 100%; } }
    .ssl-result { border:1px solid #dee2e6; border-radius:8px; padding:.75rem; background:#fff; }
    .ssl-badge { display:inline-block; padding:.15rem .55rem; border-radius:999px; font-size:.8rem; font-weight:700; margin-right:.35rem; margin-bottom:.35rem; }
    .ssl-badge-ok { background:#d1e7dd; color:#0f5132; }
    .ssl-badge-warn { background:#fff3cd; color:#664d03; }
    .ssl-badge-bad { background:#f8d7da; color:#842029; }
    .ssl-meta { font-size:.85rem; color:#495057; margin:.5rem 0; }
    .ssl-meta dt { font-weight:600; }
    .ssl-meta dd { margin:0 0 .4rem; word-break:break-all; }
    .ssl-note { font-size:.8rem; color:#6c757d; margin-top:.75rem; }
    .ssl-disclaimer { font-size:.85rem; color:#664d03; background:#fff3cd; border:1px solid #ffecb5; border-radius:8px; padding:.65rem .75rem; margin-top:.75rem; }
  </style>`;

	const contentHtml = `
    <div id="check-ssl-certificate-expiration" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(t(opts.lang, `${PREFIX}_title`))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <div class="form-group">
          <label class="form-label" for="sslHost">${escapeHtml(t(opts.lang, `${PREFIX}_host_label`))}</label>
          <input id="sslHost" class="input-lg ssl-host-input" type="text" maxlength="253"
            placeholder="${escapeHtml(t(opts.lang, `${PREFIX}_host_ph`))}"
            autocomplete="off" spellcheck="false">
        </div>

        <div class="btn-row">
          <button type="button" id="sslCheck" class="btn btn-primary">${escapeHtml(t(opts.lang, `${PREFIX}_check`))}</button>
          <button type="button" id="sslSample" class="btn btn-outline-secondary">${escapeHtml(t(opts.lang, `${PREFIX}_sample`))}</button>
          <button type="button" id="sslClear" class="btn btn-outline-secondary">${escapeHtml(t(opts.lang, `${PREFIX}_clear`))}</button>
        </div>

        <p class="ssl-note mb-0 mt-2">${escapeHtml(t(opts.lang, `${PREFIX}_privacy_note`))}</p>

        <div id="sslResult" class="mt-3" aria-live="polite"></div>
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
				label: t(opts.lang, `${PREFIX}_ref_crt_label`),
				href: 'https://crt.sh/',
			},
			{
				label: t(opts.lang, `${PREFIX}_ref_ct_label`),
				href: 'https://certificate.transparency.dev/',
			},
		],
	});

	/** 内联脚本：表单交互、API 调用、进页自动样例。正则字类须双反斜杠。 */
	const extraBodyHtml = `
  <script>
    (function () {
      /** @type {HTMLInputElement} */
      var hostEl = document.getElementById('sslHost');
      /** @type {HTMLElement} */
      var resultEl = document.getElementById('sslResult');

      /** 页面文案（由服务端注入，避免硬编码英文）。 */
      var I = {
        running: ${JSON.stringify(t(opts.lang, `${PREFIX}_running`))},
        hostError: ${JSON.stringify(t(opts.lang, `${PREFIX}_host_error`))},
        errorPrefix: ${JSON.stringify(t(opts.lang, `${PREFIX}_error_prefix`))},
        fetchFailed: ${JSON.stringify(t(opts.lang, `${PREFIX}_fetch_failed`))},
        foundYes: ${JSON.stringify(t(opts.lang, `${PREFIX}_result_found_yes`))},
        foundNo: ${JSON.stringify(t(opts.lang, `${PREFIX}_result_found_no`))},
        hostLabel: ${JSON.stringify(t(opts.lang, `${PREFIX}_result_host`))},
        cnLabel: ${JSON.stringify(t(opts.lang, `${PREFIX}_result_cn`))},
        issuerLabel: ${JSON.stringify(t(opts.lang, `${PREFIX}_result_issuer`))},
        notBeforeLabel: ${JSON.stringify(t(opts.lang, `${PREFIX}_result_not_before`))},
        notAfterLabel: ${JSON.stringify(t(opts.lang, `${PREFIX}_result_not_after`))},
        daysLeftLabel: ${JSON.stringify(t(opts.lang, `${PREFIX}_result_days_left`))},
        expiredYes: ${JSON.stringify(t(opts.lang, `${PREFIX}_result_expired_yes`))},
        expiredNo: ${JSON.stringify(t(opts.lang, `${PREFIX}_result_expired_no`))},
        sourceLabel: ${JSON.stringify(t(opts.lang, `${PREFIX}_result_source`))},
        rowCountLabel: ${JSON.stringify(t(opts.lang, `${PREFIX}_result_row_count`))},
        disclaimer: ${JSON.stringify(t(opts.lang, `${PREFIX}_result_disclaimer`))},
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
       * 规范化主机名输入（允许粘贴完整 URL，客户端剥成 host）。
       * @param {string} raw 原始输入
       * @returns {string|null}
       */
      function normalizeHost(raw) {
        var u = (raw || '').trim();
        if (!u) return null;
        if (/^https?:\\/\\//i.test(u)) {
          try {
            return new URL(u).hostname.toLowerCase();
          } catch (e) {
            return null;
          }
        }
        var host = u.replace(/\\/.*$/, '').replace(/\\.$/, '').toLowerCase();
        if (!/^[a-z0-9.-]+$/i.test(host) || host.length > 253) return null;
        return host;
      }

      /**
       * 将 API 返回渲染为结果卡片。
       * @param {object} data Worker JSON 响应
       */
      function renderResult(data) {
        if (!data.found) {
          resultEl.innerHTML =
            '<div class="ssl-result">' +
            '<div><span class="ssl-badge ssl-badge-warn">' + esc(I.foundNo) + '</span></div>' +
            '<dl class="ssl-meta">' +
            '<dt>' + esc(I.hostLabel) + '</dt><dd>' + esc(data.host || '') + '</dd>' +
            '<dt>' + esc(I.sourceLabel) + '</dt><dd>' + esc(data.source || 'crt.sh') + '</dd>' +
            '</dl>' +
            '<div class="ssl-disclaimer">' + esc(I.disclaimer) + '</div>' +
            '</div>';
          return;
        }
        var n = data.newest || {};
        var expired = n.expired === true;
        var days = n.daysLeft;
        var daysText = days == null ? I.noneValue : String(days);
        var badges =
          '<span class="ssl-badge ssl-badge-ok">' + esc(I.foundYes) + '</span>' +
          (expired
            ? '<span class="ssl-badge ssl-badge-bad">' + esc(I.expiredYes) + '</span>'
            : '<span class="ssl-badge ssl-badge-ok">' + esc(I.expiredNo) + '</span>');
        resultEl.innerHTML =
          '<div class="ssl-result">' +
          '<div>' + badges + '</div>' +
          '<dl class="ssl-meta">' +
          '<dt>' + esc(I.hostLabel) + '</dt><dd>' + esc(data.host || '') + '</dd>' +
          '<dt>' + esc(I.cnLabel) + '</dt><dd>' + esc(n.commonName || I.noneValue) + '</dd>' +
          '<dt>' + esc(I.issuerLabel) + '</dt><dd>' + esc(n.issuer || I.noneValue) + '</dd>' +
          '<dt>' + esc(I.notBeforeLabel) + '</dt><dd>' + esc(n.notBefore || I.noneValue) + '</dd>' +
          '<dt>' + esc(I.notAfterLabel) + '</dt><dd>' + esc(n.notAfter || I.noneValue) + '</dd>' +
          '<dt>' + esc(I.daysLeftLabel) + '</dt><dd>' + esc(daysText) + '</dd>' +
          '<dt>' + esc(I.sourceLabel) + '</dt><dd>' + esc(data.source || 'crt.sh') + '</dd>' +
          '<dt>' + esc(I.rowCountLabel) + '</dt><dd>' + esc(String(data.rowCount != null ? data.rowCount : '')) + '</dd>' +
          '</dl>' +
          '<div class="ssl-disclaimer">' + esc(data.disclaimer || I.disclaimer) + '</div>' +
          '</div>';
      }

      /**
       * 调用边缘 API 查询 CT 证书过期信息。
       * @returns {Promise<void>}
       */
      async function runCheck() {
        var host = normalizeHost(hostEl.value);
        if (!host) {
          resultEl.innerHTML = '<p class="text-danger mb-0">' + esc(I.hostError) + '</p>';
          return;
        }
        resultEl.textContent = I.running;
        try {
          var res = await fetch(
            '/api/tools/check-ssl-certificate-expiration?host=' + encodeURIComponent(host)
          );
          var data = await res.json();
          if (!res.ok) {
            throw new Error(data && data.error ? data.error : I.fetchFailed);
          }
          renderResult(data);
        } catch (err) {
          var msg = err && err.message ? err.message : I.fetchFailed;
          resultEl.innerHTML = '<p class="text-danger mb-0">' + esc(I.errorPrefix + msg) + '</p>';
        }
      }

      /**
       * 填充示例主机名并立即检查。
       * 进页与「加载示例」按钮共用此路径。
       */
      function loadSample() {
        hostEl.value = 'example.com';
        runCheck();
      }

      document.getElementById('sslCheck').addEventListener('click', function () {
        runCheck();
      });
      document.getElementById('sslSample').addEventListener('click', loadSample);
      document.getElementById('sslClear').addEventListener('click', function () {
        hostEl.value = '';
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

	const toolMeta = getToolBySlug('check-ssl-certificate-expiration');
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
