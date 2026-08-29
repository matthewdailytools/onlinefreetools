/**
 * UTM 链接生成器工具页：输入落地页 URL + 五个 UTM 参数 → 生成带编码的活动追踪链接，
 * 保留已有 query 参数、正确处理空格/非 ASCII 编码与 hash，附参数拆解表与一键复制。
 * slug: utm-builder（见 work-tasks/utm-builder/02-tool-info.md）。
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

/** 为路径加上语言前缀（默认语无前缀）。 */
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * 渲染 UTM 链接生成器工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderUtmBuilderPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/utm-builder';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_utm_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_utm_description');

	const navItems = buildToolPageNavItems(opts.lang, opts.defaultLang);

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
			currentSlug: 'utm-builder',
			currentAnchor: '#utm-builder',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	const extraHeadHtml = `
  <style>
    .tool-card { max-width: var(--content-max); width: 100%; margin: 0 0 1.5rem; }
    .form-label { display:block; margin-bottom:.5rem; color:#495057; font-weight:500 }
    .form-hint { font-size:.8rem; color:#6c757d; margin-top:.25rem; }
    .form-group { margin-bottom:1rem; }
    .btn-row { display:flex; flex-wrap:wrap; gap:.5rem; align-items:center; }
    .utm-output { background:#f8f9fa; border:1px solid #dee2e6; border-radius:6px; padding:.75rem; word-break:break-all; }
    .utm-note { margin-top:.5rem; font-size:.8rem; }
    .utm-note.ok { color:#198754; }
    .utm-note.warn { color:#b45309; }
    .utm-table { width:100%; border-collapse:collapse; font-size:.9rem; }
    .utm-table th, .utm-table td { border:1px solid #dee2e6; padding:.45rem .6rem; text-align:left; }
    .utm-table th { background:#f8f9fa; }
    .utm-badge { display:inline-block; padding:.1rem .45rem; border-radius:999px; font-size:.75rem; font-weight:600; }
    .utm-badge.required { background:#f8d7da; color:#842029; }
    .utm-badge.optional { background:#e2e3e5; color:#41464b; }
    .utm-badge.empty { background:#fff3cd; color:#664d03; }
  </style>`;

	const contentHtml = `
    <div id="utm-builder" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(t(opts.lang, 'tool_utm_title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <form id="utmForm">
          <div class="form-group">
            <label class="form-label" for="utmUrl">${escapeHtml(t(opts.lang, 'tool_utm_url_label'))}</label>
            <input id="utmUrl" class="input-lg" type="text" maxlength="500"
              placeholder="${escapeHtml(t(opts.lang, 'tool_utm_url_ph'))}">
          </div>
          <div class="form-group">
            <label class="form-label" for="utmSource">${escapeHtml(t(opts.lang, 'tool_utm_source_label'))}</label>
            <input id="utmSource" class="input-lg" type="text" maxlength="200"
              placeholder="${escapeHtml(t(opts.lang, 'tool_utm_source_ph'))}">
            <div class="form-hint">${escapeHtml(t(opts.lang, 'tool_utm_source_hint'))}</div>
          </div>
          <div class="form-group">
            <label class="form-label" for="utmMedium">${escapeHtml(t(opts.lang, 'tool_utm_medium_label'))}</label>
            <input id="utmMedium" class="input-lg" type="text" maxlength="200"
              placeholder="${escapeHtml(t(opts.lang, 'tool_utm_medium_ph'))}">
            <div class="form-hint">${escapeHtml(t(opts.lang, 'tool_utm_medium_hint'))}</div>
          </div>
          <div class="form-group">
            <label class="form-label" for="utmCampaign">${escapeHtml(t(opts.lang, 'tool_utm_campaign_label'))}</label>
            <input id="utmCampaign" class="input-lg" type="text" maxlength="200"
              placeholder="${escapeHtml(t(opts.lang, 'tool_utm_campaign_ph'))}">
            <div class="form-hint">${escapeHtml(t(opts.lang, 'tool_utm_campaign_hint'))}</div>
          </div>
          <div class="form-group">
            <label class="form-label" for="utmTerm">${escapeHtml(t(opts.lang, 'tool_utm_term_label'))}</label>
            <input id="utmTerm" class="input-lg" type="text" maxlength="200"
              placeholder="${escapeHtml(t(opts.lang, 'tool_utm_term_ph'))}">
            <div class="form-hint">${escapeHtml(t(opts.lang, 'tool_utm_term_hint'))}</div>
          </div>
          <div class="form-group">
            <label class="form-label" for="utmContent">${escapeHtml(t(opts.lang, 'tool_utm_content_label'))}</label>
            <input id="utmContent" class="input-lg" type="text" maxlength="200"
              placeholder="${escapeHtml(t(opts.lang, 'tool_utm_content_ph'))}">
            <div class="form-hint">${escapeHtml(t(opts.lang, 'tool_utm_content_hint'))}</div>
          </div>
          <div class="btn-row">
            <button type="submit" class="btn btn-primary">${escapeHtml(t(opts.lang, 'tool_utm_generate'))}</button>
            <button type="button" id="utmSample" class="btn btn-outline-secondary">${escapeHtml(t(opts.lang, 'tool_utm_sample'))}</button>
            <button type="button" id="utmClear" class="btn btn-outline-secondary">${escapeHtml(t(opts.lang, 'tool_utm_clear'))}</button>
          </div>
        </form>

        <div id="utmResult" class="mt-3" aria-live="polite"></div>
      </div>
    </div>

    ${renderToolIgSections({ lang: opts.lang, prefix: 'tool_utm', mode: 'rules', ruleItemCount: 5 })}`;

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: t(opts.lang, 'tool_utm_ref_ga_label'),
				href: 'https://support.google.com/analytics/answer/1033863',
			},
			{
				label: t(opts.lang, 'tool_utm_ref_searchcentral_label'),
				href: 'https://developers.google.com/search/docs/crawling-indexing/url-structure',
			},
		],
	});

	const extraBodyHtml = `
  <script>
    (function () {
      var form = document.getElementById('utmForm');
      var urlEl = document.getElementById('utmUrl');
      var sourceEl = document.getElementById('utmSource');
      var mediumEl = document.getElementById('utmMedium');
      var campaignEl = document.getElementById('utmCampaign');
      var termEl = document.getElementById('utmTerm');
      var contentEl = document.getElementById('utmContent');
      var resultEl = document.getElementById('utmResult');

      var I = {
        urlRequired: ${JSON.stringify(t(opts.lang, 'tool_utm_url_required'))},
        urlInvalid: ${JSON.stringify(t(opts.lang, 'tool_utm_url_invalid'))},
        urlProtocol: ${JSON.stringify(t(opts.lang, 'tool_utm_url_protocol'))},
        campaignRequired: ${JSON.stringify(t(opts.lang, 'tool_utm_campaign_required'))},
        errorPrefix: ${JSON.stringify(t(opts.lang, 'tool_utm_error_prefix'))},
        outputLabel: ${JSON.stringify(t(opts.lang, 'tool_utm_output_label'))},
        tableTitle: ${JSON.stringify(t(opts.lang, 'tool_utm_table_title'))},
        paramSource: ${JSON.stringify(t(opts.lang, 'tool_utm_param_source'))},
        paramMedium: ${JSON.stringify(t(opts.lang, 'tool_utm_param_medium'))},
        paramCampaign: ${JSON.stringify(t(opts.lang, 'tool_utm_param_campaign'))},
        paramTerm: ${JSON.stringify(t(opts.lang, 'tool_utm_param_term'))},
        paramContent: ${JSON.stringify(t(opts.lang, 'tool_utm_param_content'))},
        paramValue: ${JSON.stringify(t(opts.lang, 'tool_utm_param_value'))},
        paramStatus: ${JSON.stringify(t(opts.lang, 'tool_utm_param_status'))},
        requiredLabel: ${JSON.stringify(t(opts.lang, 'tool_utm_param_required'))},
        optionalLabel: ${JSON.stringify(t(opts.lang, 'tool_utm_param_optional'))},
        emptyLabel: ${JSON.stringify(t(opts.lang, 'tool_utm_param_empty'))},
        encodingNote: ${JSON.stringify(t(opts.lang, 'tool_utm_encoding_note'))},
        caseNote: ${JSON.stringify(t(opts.lang, 'tool_utm_case_note'))},
        copyLabel: ${JSON.stringify(t(opts.lang, 'tool_utm_copy'))},
        copiedLabel: ${JSON.stringify(t(opts.lang, 'tool_utm_copied'))}
      };

      /** 参数定义：顺序即展示顺序。 */
      var FIELDS = [
        { id: 'source', key: 'utm_source', required: true, label: I.paramSource },
        { id: 'medium', key: 'utm_medium', required: true, label: I.paramMedium },
        { id: 'campaign', key: 'utm_campaign', required: true, label: I.paramCampaign },
        { id: 'term', key: 'utm_term', required: false, label: I.paramTerm },
        { id: 'content', key: 'utm_content', required: false, label: I.paramContent }
      ];

      /** 各输入控件映射。 */
      function fieldEl(id) {
        return id === 'source' ? sourceEl : id === 'medium' ? mediumEl : id === 'campaign' ? campaignEl : id === 'term' ? termEl : contentEl;
      }

      /**
       * 百分号编码单个参数值（encodeURIComponent 本身把空格编码为 %20）。
       * @param {string} v
       * @returns {string}
       */
      function enc(v) {
        return encodeURIComponent(v);
      }

      /**
       * 转义文本插入 HTML。
       * @param {string} s
       */
      function esc(s) {
        return String(s)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      }

      /**
       * 生成 UTM 链接并渲染输出。
       * @returns {boolean} 是否成功
       */
      function buildUrl() {
        var raw = urlEl.value.trim();
        if (!raw) {
          resultEl.innerHTML = '<div class="utm-note warn">' + esc(I.errorPrefix + I.urlRequired) + '</div>';
          return false;
        }
        var protocolNote = '';
        if (!/^https?:\\/\\//i.test(raw)) {
          raw = 'https://' + raw;
          protocolNote = '<div class="utm-note warn">' + esc(I.urlProtocol) + '</div>';
        }

        var u;
        try {
          u = new URL(raw);
        } catch (e) {
          resultEl.innerHTML = '<div class="utm-note warn">' + esc(I.errorPrefix + I.urlInvalid) + '</div>';
          return false;
        }

        var campaign = campaignEl.value.trim();
        if (!campaign) {
          resultEl.innerHTML = '<div class="utm-note warn">' + esc(I.errorPrefix + I.campaignRequired) + '</div>';
          return false;
        }

        // 收集新 UTM 参数（跳过空值）
        var newParams = [];
        FIELDS.forEach(function (f) {
          var v = fieldEl(f.id).value.trim();
          if (v !== '') newParams.push([f.key, v]);
        });

        // 保留已有 query 参数，同名 utm_ 参数被新值替换
        var merged = [];
        var newKeys = {};
        newParams.forEach(function (p) { newKeys[p[0]] = true; });
        u.searchParams.forEach(function (v, k) {
          if (newKeys[k]) return;
          merged.push([k, v]);
        });
        newParams.forEach(function (p) { merged.push(p); });

        var qs = merged.map(function (p) { return p[0] + '=' + enc(p[1]); }).join('&');
        var out = u.origin + u.pathname + (qs ? '?' + qs : '') + (u.hash || '');

        // 输出区：链接 + 复制按钮 + 提示 + 参数表
        var rows = FIELDS.map(function (f) {
          var v = fieldEl(f.id).value.trim();
          var badge;
          if (v !== '') badge = '<span class="utm-badge ' + (f.required ? 'required' : 'optional') + '">' + esc(f.required ? I.requiredLabel : I.optionalLabel) + '</span>';
          else badge = '<span class="utm-badge empty">' + esc(I.emptyLabel) + '</span>';
          return '<tr><td>' + esc(f.label) + '</td><td>' + esc(v || '—') + '</td><td>' + badge + '</td></tr>';
        }).join('');

        resultEl.innerHTML =
          '<div class="form-label mb-1">' + esc(I.outputLabel) + '</div>' +
          '<div class="utm-output">' + esc(out) + '</div>' +
          protocolNote +
          '<div class="btn-row mt-2"><button type="button" id="utmCopyBtn" class="btn btn-sm btn-outline-secondary">' + esc(I.copyLabel) + '</button></div>' +
          '<div class="utm-note">' + esc(I.encodingNote) + '</div>' +
          '<div class="utm-note">' + esc(I.caseNote) + '</div>' +
          '<div class="mt-3"><h3 class="h6 mb-2">' + esc(I.tableTitle) + '</h3>' +
          '<table class="utm-table"><thead><tr><th></th><th>' + esc(I.paramValue) + '</th><th>' + esc(I.paramStatus) + '</th></tr></thead><tbody>' +
          rows + '</tbody></table></div>';

        var copyBtn = document.getElementById('utmCopyBtn');
        copyBtn.addEventListener('click', function () {
          var text = out;
          if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(function () {
              copyBtn.textContent = I.copiedLabel;
              setTimeout(function () { copyBtn.textContent = I.copyLabel; }, 1600);
            }, function () { fallbackCopy(text, copyBtn); });
          } else {
            fallbackCopy(text, copyBtn);
          }
        });
        return true;
      }

      /** 剪贴板兜底：临时 textarea 复制。 */
      function fallbackCopy(text, btn) {
        var ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        try {
          document.execCommand('copy');
          btn.textContent = I.copiedLabel;
          setTimeout(function () { btn.textContent = I.copyLabel; }, 1600);
        } catch (e) {
          btn.textContent = I.errorPrefix + e.message;
        }
        document.body.removeChild(ta);
      }

      /**
       * 加载默认样例：example.com/page + 三个必填参数。
       */
      function loadSample() {
        urlEl.value = 'https://example.com/page';
        sourceEl.value = 'newsletter';
        mediumEl.value = 'email';
        campaignEl.value = 'summer_sale';
        termEl.value = '';
        contentEl.value = '';
        buildUrl();
      }

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        buildUrl();
      });
      document.getElementById('utmSample').addEventListener('click', loadSample);
      document.getElementById('utmClear').addEventListener('click', function () {
        form.reset();
        resultEl.innerHTML = '';
      });
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('utm-builder');
	const toolSeoHtml = toolMeta
		? renderToolExtraSections({ lang: opts.lang, defaultLang: opts.defaultLang, tool: toolMeta })
		: '';
	const toolJsonLd = toolMeta
		? buildToolJsonLd({
				lang: opts.lang,
				tool: toolMeta,
				canonicalPath,
				description,
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
