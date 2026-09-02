/**
 * SPF / DKIM / DMARC 邮件认证 DNS 检查页：输入域名与可选 DKIM selector，
 * 经 Worker DoH 查询 TXT，展示 found / record / explain（含 ~all/-all、p=、公钥）。
 * slug: spf-dkim-dmarc-checker（见 work-tasks/spf-dkim-dmarc-checker/02-tool-info.md）。
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
const PREFIX = 'tool_spf_dkim_dmarc_checker';

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
 * 渲染 SPF DKIM DMARC checker 工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表（保留签名兼容；实际用 supportedLangs）
 */
export const renderSpfDkimDmarcCheckerPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/spf-dkim-dmarc-checker';
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
			currentSlug: 'spf-dkim-dmarc-checker',
			currentAnchor: '#spf-dkim-dmarc-checker',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	/** 工具区局部样式（表单 + 三块认证结果）。 */
	const extraHeadHtml = `
  <style>
    .tool-card { max-width: var(--content-max); width: 100%; margin: 0 0 1.5rem; }
    .form-label { display:block; margin-bottom:.5rem; color:#495057; font-weight:500 }
    .form-group { margin-bottom:1rem; }
    .btn-row { display:flex; flex-wrap:wrap; gap:.5rem; align-items:center; }
    .auth-domain-input, .auth-selector-input { display:block; width: calc(100% - 2rem); }
    @media (max-width: 640px) { .auth-domain-input, .auth-selector-input { width: 100%; } }
    .auth-panels { display:grid; gap:.75rem; }
    .auth-panel { border:1px solid #dee2e6; border-radius:8px; padding:.75rem; background:#fff; }
    .auth-panel h3 { font-size:1rem; margin:0 0 .5rem; }
    .auth-badge { display:inline-block; padding:.15rem .55rem; border-radius:999px; font-size:.8rem; font-weight:700; margin-right:.35rem; }
    .auth-badge-ok { background:#d1e7dd; color:#0f5132; }
    .auth-badge-miss { background:#fff3cd; color:#664d03; }
    .auth-meta { font-size:.85rem; color:#495057; margin:.5rem 0 0; }
    .auth-meta dt { font-weight:600; }
    .auth-meta dd { margin:0 0 .4rem; word-break:break-all; }
    pre.auth-record { background:#f8f9fa; border:1px solid #dee2e6; border-radius:8px; padding:.65rem; max-height:160px; overflow:auto; font-size:.8rem; white-space:pre-wrap; margin:.35rem 0 0; }
    .auth-note { font-size:.8rem; color:#6c757d; margin-top:.75rem; }
  </style>`;

	const contentHtml = `
    <div id="spf-dkim-dmarc-checker" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(t(opts.lang, `${PREFIX}_title`))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <div class="form-group">
          <label class="form-label" for="authDomain">${escapeHtml(t(opts.lang, `${PREFIX}_domain_label`))}</label>
          <input id="authDomain" class="input-lg auth-domain-input" type="text" maxlength="253"
            placeholder="${escapeHtml(t(opts.lang, `${PREFIX}_domain_ph`))}"
            autocomplete="off" spellcheck="false">
        </div>

        <div class="form-group">
          <label class="form-label" for="authSelector">${escapeHtml(t(opts.lang, `${PREFIX}_selector_label`))}</label>
          <input id="authSelector" class="input-lg auth-selector-input" type="text" maxlength="63"
            value="google"
            placeholder="${escapeHtml(t(opts.lang, `${PREFIX}_selector_ph`))}"
            autocomplete="off" spellcheck="false">
        </div>

        <div class="btn-row">
          <button type="button" id="authCheck" class="btn btn-primary">${escapeHtml(t(opts.lang, `${PREFIX}_check`))}</button>
          <button type="button" id="authSample" class="btn btn-outline-secondary">${escapeHtml(t(opts.lang, `${PREFIX}_sample`))}</button>
          <button type="button" id="authClear" class="btn btn-outline-secondary">${escapeHtml(t(opts.lang, `${PREFIX}_clear`))}</button>
        </div>

        <p class="auth-note mb-0 mt-2">${escapeHtml(t(opts.lang, `${PREFIX}_privacy_note`))}</p>

        <div id="authResult" class="mt-3" aria-live="polite"></div>
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
				label: t(opts.lang, `${PREFIX}_ref_spf_label`),
				href: 'https://datatracker.ietf.org/doc/html/rfc7208',
			},
			{
				label: t(opts.lang, `${PREFIX}_ref_dkim_label`),
				href: 'https://datatracker.ietf.org/doc/html/rfc6376',
			},
			{
				label: t(opts.lang, `${PREFIX}_ref_dmarc_label`),
				href: 'https://datatracker.ietf.org/doc/html/rfc7489',
			},
		],
	});

	/** 内联脚本：表单交互、DoH API、进页自动样例。正则字类须双反斜杠。 */
	const extraBodyHtml = `
  <script>
    (function () {
      /** @type {HTMLInputElement} */
      var domainEl = document.getElementById('authDomain');
      /** @type {HTMLInputElement} */
      var selectorEl = document.getElementById('authSelector');
      /** @type {HTMLElement} */
      var resultEl = document.getElementById('authResult');

      /** 页面文案（由服务端注入，避免硬编码英文）。 */
      var I = {
        running: ${JSON.stringify(t(opts.lang, `${PREFIX}_running`))},
        domainError: ${JSON.stringify(t(opts.lang, `${PREFIX}_domain_error`))},
        errorPrefix: ${JSON.stringify(t(opts.lang, `${PREFIX}_error_prefix`))},
        fetchFailed: ${JSON.stringify(t(opts.lang, `${PREFIX}_fetch_failed`))},
        foundYes: ${JSON.stringify(t(opts.lang, `${PREFIX}_result_found_yes`))},
        foundNo: ${JSON.stringify(t(opts.lang, `${PREFIX}_result_found_no`))},
        recordLabel: ${JSON.stringify(t(opts.lang, `${PREFIX}_result_record`))},
        explainLabel: ${JSON.stringify(t(opts.lang, `${PREFIX}_result_explain`))},
        noneValue: ${JSON.stringify(t(opts.lang, `${PREFIX}_result_none`))},
        spfTitle: ${JSON.stringify(t(opts.lang, `${PREFIX}_panel_spf`))},
        dmarcTitle: ${JSON.stringify(t(opts.lang, `${PREFIX}_panel_dmarc`))},
        dkimTitle: ${JSON.stringify(t(opts.lang, `${PREFIX}_panel_dkim`))},
        allLabel: ${JSON.stringify(t(opts.lang, `${PREFIX}_result_all`))},
        policyLabel: ${JSON.stringify(t(opts.lang, `${PREFIX}_result_policy`))},
        pctLabel: ${JSON.stringify(t(opts.lang, `${PREFIX}_result_pct`))},
        selectorLabel: ${JSON.stringify(t(opts.lang, `${PREFIX}_result_selector`))},
        pubkeyLabel: ${JSON.stringify(t(opts.lang, `${PREFIX}_result_pubkey`))},
        pubkeyYes: ${JSON.stringify(t(opts.lang, `${PREFIX}_result_pubkey_yes`))},
        pubkeyNo: ${JSON.stringify(t(opts.lang, `${PREFIX}_result_pubkey_no`))},
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
       * 规范化域名输入（允许粘贴完整 URL，客户端剥成 host）。
       * @param {string} raw 原始输入
       * @returns {string|null}
       */
      function normalizeDomain(raw) {
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
       * 渲染单个认证面板（SPF / DMARC / DKIM）。
       * @param {string} title 面板标题
       * @param {object} block API 返回的子对象
       * @param {string} extraHtml 额外 meta 行 HTML
       * @returns {string}
       */
      function renderPanel(title, block, extraHtml) {
        var found = !!(block && block.found);
        var badgeClass = found ? 'auth-badge-ok' : 'auth-badge-miss';
        var badgeText = found ? I.foundYes : I.foundNo;
        var record = block && block.record ? block.record : '';
        var explain = block && block.explain ? block.explain : I.noneValue;
        return (
          '<div class="auth-panel">' +
          '<h3>' + esc(title) + '</h3>' +
          '<div><span class="auth-badge ' + badgeClass + '">' + esc(badgeText) + '</span></div>' +
          '<dl class="auth-meta">' +
          (extraHtml || '') +
          '<dt>' + esc(I.explainLabel) + '</dt><dd>' + esc(explain) + '</dd>' +
          '<dt>' + esc(I.recordLabel) + '</dt><dd>' +
          (record ? '<pre class="auth-record">' + esc(record) + '</pre>' : esc(I.noneValue)) +
          '</dd>' +
          '</dl>' +
          '</div>'
        );
      }

      /**
       * 将 API 返回渲染为 SPF / DMARC / DKIM 三面板。
       * @param {object} data Worker JSON 响应
       */
      function renderResult(data) {
        var spf = data.spf || {};
        var dmarc = data.dmarc || {};
        var dkim = data.dkim || {};
        var spfExtra =
          '<dt>' + esc(I.allLabel) + '</dt><dd>' +
          esc(spf.allQualifier != null ? String(spf.allQualifier) + 'all' : I.noneValue) +
          '</dd>';
        var dmarcExtra =
          '<dt>' + esc(I.policyLabel) + '</dt><dd>' + esc(dmarc.policy || I.noneValue) + '</dd>' +
          '<dt>' + esc(I.pctLabel) + '</dt><dd>' + esc(dmarc.pct != null ? String(dmarc.pct) : I.noneValue) + '</dd>';
        var dkimExtra =
          '<dt>' + esc(I.selectorLabel) + '</dt><dd>' + esc(dkim.selector || data.selector || '') + '</dd>' +
          '<dt>' + esc(I.pubkeyLabel) + '</dt><dd>' +
          esc(dkim.hasPublicKey ? I.pubkeyYes : I.pubkeyNo) +
          '</dd>';
        resultEl.innerHTML =
          '<div class="auth-panels">' +
          renderPanel(I.spfTitle, spf, spfExtra) +
          renderPanel(I.dmarcTitle, dmarc, dmarcExtra) +
          renderPanel(I.dkimTitle, dkim, dkimExtra) +
          '</div>';
      }

      /**
       * 调用边缘 API：DoH 查询 SPF / DMARC / DKIM TXT。
       * @returns {Promise<void>}
       */
      async function runCheck() {
        var domain = normalizeDomain(domainEl.value);
        if (!domain) {
          resultEl.innerHTML = '<p class="text-danger mb-0">' + esc(I.domainError) + '</p>';
          return;
        }
        var selector = ((selectorEl.value || 'google').trim() || 'google').toLowerCase();
        selectorEl.value = selector;
        resultEl.textContent = I.running;
        try {
          var res = await fetch(
            '/api/tools/spf-dkim-dmarc-checker?domain=' +
              encodeURIComponent(domain) +
              '&selector=' +
              encodeURIComponent(selector)
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
       * 填充示例域名 google.com + selector google 并立即检查。
       * 进页与「加载示例」按钮共用此路径。
       */
      function loadSample() {
        domainEl.value = 'google.com';
        selectorEl.value = 'google';
        runCheck();
      }

      document.getElementById('authCheck').addEventListener('click', function () {
        runCheck();
      });
      document.getElementById('authSample').addEventListener('click', loadSample);
      document.getElementById('authClear').addEventListener('click', function () {
        domainEl.value = '';
        selectorEl.value = 'google';
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

	const toolMeta = getToolBySlug('spf-dkim-dmarc-checker');
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
