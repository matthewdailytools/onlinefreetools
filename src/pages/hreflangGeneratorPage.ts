/**
 * hreflang 标签生成器工具页：输入「语言码 + URL」行列表，输出三种形态（<link> HTML / HTTP Link 头 / sitemap
 * xhtml:link）的 hreflang 标注，支持自引用补全与可选 x-default，附校验提示与一键复制。
 * slug: hreflang-generator（见 work-tasks/hreflang-generator/02-tool-info.md）。
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
 * 渲染 hreflang 标签生成器工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderHreflangGeneratorPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/hreflang-generator';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_hreflang_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_hreflang_description');

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
			currentSlug: 'hreflang-generator',
			currentAnchor: '#hreflang-generator',
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
    .hreflang-tabs { display:flex; gap:.25rem; margin-bottom:.5rem; }
    .hreflang-tabs .btn { border-radius: .25rem; }
    .hreflang-output { background:#f8f9fa; border:1px solid #dee2e6; border-radius:6px; padding:.75rem; white-space:pre-wrap; word-break:break-all; max-height:320px; overflow:auto; font-size:.85rem; }
    .hreflang-note { margin-top:.5rem; font-size:.8rem; }
    .hreflang-note.ok { color:#198754; }
    .hreflang-note.warn { color:#b45309; }
    .hreflang-err { color:#b02a37; font-size:.8rem; margin-top:.25rem; }
  </style>`;

	const contentHtml = `
    <div id="hreflang-generator" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(t(opts.lang, 'tool_hreflang_title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <form id="hreflangForm">
          <div class="form-group">
            <label class="form-label" for="hlInput">${escapeHtml(t(opts.lang, 'tool_hreflang_input_label'))}</label>
            <textarea id="hlInput" class="form-control" rows="6"
              placeholder="${escapeHtml(t(opts.lang, 'tool_hreflang_input_ph'))}"></textarea>
            <div class="form-hint">${escapeHtml(t(opts.lang, 'tool_hreflang_input_hint'))}</div>
          </div>
          <div class="form-group">
            <label class="form-label" for="hlXdefault">${escapeHtml(t(opts.lang, 'tool_hreflang_xdefault_label'))}</label>
            <select id="hlXdefault" class="form-control"></select>
            <div class="form-hint">${escapeHtml(t(opts.lang, 'tool_hreflang_xdefault_hint'))}</div>
          </div>
          <div class="btn-row">
            <button type="submit" class="btn btn-primary">${escapeHtml(t(opts.lang, 'tool_hreflang_generate'))}</button>
            <button type="button" id="hlSample" class="btn btn-outline-secondary">${escapeHtml(t(opts.lang, 'tool_hreflang_sample'))}</button>
            <button type="button" id="hlClear" class="btn btn-outline-secondary">${escapeHtml(t(opts.lang, 'tool_hreflang_clear'))}</button>
          </div>
        </form>

        <div id="hlResult" class="mt-3" aria-live="polite"></div>
      </div>
    </div>

    ${renderToolIgSections({ lang: opts.lang, prefix: 'tool_hreflang', mode: 'rules', ruleItemCount: 5,
		howItemCount: 4 })}`;

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: t(opts.lang, 'tool_hreflang_ref_searchcentral_label'),
				href: 'https://developers.google.com/search/docs/crawling-indexing/international/localized-versions',
			},
			{
				label: t(opts.lang, 'tool_hreflang_ref_bcp47_label'),
				href: 'https://www.rfc-editor.org/rfc/bcp/bcp47.txt',
			},
		],
	});

	const extraBodyHtml = `
  <script>
    (function () {
      var form = document.getElementById('hreflangForm');
      var inputEl = document.getElementById('hlInput');
      var xdefaultEl = document.getElementById('hlXdefault');
      var resultEl = document.getElementById('hlResult');

      var I = {
        noValidRows: ${JSON.stringify(t(opts.lang, 'tool_hreflang_no_valid_rows'))},
        urlProtocol: ${JSON.stringify(t(opts.lang, 'tool_hreflang_url_protocol'))},
        langInvalid: ${JSON.stringify(t(opts.lang, 'tool_hreflang_lang_invalid'))},
        errorPrefix: ${JSON.stringify(t(opts.lang, 'tool_hreflang_error_prefix'))},
        outputLabel: ${JSON.stringify(t(opts.lang, 'tool_hreflang_output_label'))},
        tabLink: ${JSON.stringify(t(opts.lang, 'tool_hreflang_tab_link'))},
        tabHttp: ${JSON.stringify(t(opts.lang, 'tool_hreflang_tab_http'))},
        tabSitemap: ${JSON.stringify(t(opts.lang, 'tool_hreflang_tab_sitemap'))},
        copyLabel: ${JSON.stringify(t(opts.lang, 'tool_hreflang_copy'))},
        copiedLabel: ${JSON.stringify(t(opts.lang, 'tool_hreflang_copied'))},
        xdefaultNone: ${JSON.stringify(t(opts.lang, 'tool_hreflang_xdefault_none'))}
      };

      /** BCP 47 语言码校验：x-default 或 2-3 字母语言 + 可选 -region/-script。 */
      var LANG_RE = /^x-default$|^[a-z]{2,3}(-[A-Za-z0-9]{2,8})*$/;

      /** 当前输出形态：link / http / sitemap。 */
      var formType = 'link';

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

      /** 待展示的校验错误（generate 收集，renderOutput 渲染）。 */
      var pendingErrors = [];

      /**
       * 解析文本区的「语言码 URL」行。
       * @returns {{lang:string, url:string}[]} 有效行数组（错误行写入 pendingErrors）
       */
      function parseRows() {
        var rows = [];
        var lines = inputEl.value.split(/\\r?\\n/);
        lines.forEach(function (line) {
          var s = line.trim();
          if (!s) return;
          var m = s.match(/^([^\\s]+)\\s+([^\\s]+)$/);
          if (!m) return;
          var a = m[1];
          var b = m[2];
          var lang = '';
          var url = '';
          // 语言码放前或后均可；URL 有无协议都接受（无协议时稍后自动补 https）
          if (LANG_RE.test(a) && /^https?:\\/\\//i.test(b)) { lang = a; url = b; }
          else if (LANG_RE.test(b) && /^https?:\\/\\//i.test(a)) { lang = b; url = a; }
          else if (LANG_RE.test(a)) { lang = a; url = b; }
          else if (LANG_RE.test(b)) { lang = b; url = a; }
          else {
            pendingErrors.push(I.errorPrefix + I.langInvalid.replace('{lang}', a + ' ' + b));
            return;
          }
          var hasProto = /^https?:\\/\\//i.test(url);
          if (!hasProto) url = 'https://' + url;
          rows.push({ lang: lang, url: url, addedProto: !hasProto });
        });
        return rows;
      }

      /** 刷新 x-default 下拉选项（当前语言列表 + 无）。 */
      function refreshXdefault(rows) {
        var current = xdefaultEl.value;
        xdefaultEl.innerHTML = '<option value="">' + esc(I.xdefaultNone) + '</option>';
        rows.forEach(function (r, idx) {
          var opt = document.createElement('option');
          opt.value = String(idx);
          opt.textContent = r.lang + ' — ' + r.url;
          xdefaultEl.appendChild(opt);
        });
        xdefaultEl.value = current;
      }

      /**
       * 标记语境下的属性转义。
       * 带查询串的 URL（如 ?a=1&b=2）若原样写入 link 标签或 sitemap，
       * XML 会因裸 & 解析失败，因此 link / sitemap 两种形态须转义；
       * HTTP Link 响应头不是标记，保持原样。
       * @param {string} s 原文
       * @returns {string} 可安全写入标记的文本
       */
      function xmlAttr(s) {
        return String(s)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      }

      /**
       * 生成三种形态的标注文本。
       * @param {{lang:string, url:string}[]} rows
       * @returns {{link:string, http:string, sitemap:string}}
       */
      function buildAll(rows) {
        var link = rows.map(function (r) {
          return '<link rel="alternate" hreflang="' + xmlAttr(r.lang) + '" href="' + xmlAttr(r.url) + '">';
        }).join('\\n');
        var http = rows.map(function (r) {
          return '<' + r.url + '>; rel="alternate"; hreflang="' + r.lang + '"';
        }).join(', ');
        var sitemap = rows.map(function (r) {
          return '<url>\\n  <loc>' + xmlAttr(r.url) + '</loc>\\n  <xhtml:link rel="alternate" hreflang="' + xmlAttr(r.lang) + '" href="' + xmlAttr(r.url) + '"/>\\n</url>';
        }).join('\\n');
        return { link: link, http: http, sitemap: sitemap };
      }

      /**
       * 渲染输出区。
       * @param {{lang:string, url:string}[]} rows
       */
      function renderOutput(rows) {
        var outputs = buildAll(rows);
        var tabs =
          '<div class="hreflang-tabs">' +
          '<button type="button" class="hl-tab btn btn-sm ' + (formType === 'link' ? 'btn-primary' : 'btn-outline-secondary') + '" data-form="link">' + esc(I.tabLink) + '</button>' +
          '<button type="button" class="hl-tab btn btn-sm ' + (formType === 'http' ? 'btn-primary' : 'btn-outline-secondary') + '" data-form="http">' + esc(I.tabHttp) + '</button>' +
          '<button type="button" class="hl-tab btn btn-sm ' + (formType === 'sitemap' ? 'btn-primary' : 'btn-outline-secondary') + '" data-form="sitemap">' + esc(I.tabSitemap) + '</button>' +
          '</div>';

        var text = outputs[formType];
        var protocolNote = rows.some(function (r) { return r.addedProto; })
          ? '<div class="hreflang-note warn">' + esc(I.urlProtocol) + '</div>'
          : '';

        var errHtml = pendingErrors.map(function (msg) {
          return '<div class="hreflang-err">' + esc(msg) + '</div>';
        }).join('');
        pendingErrors = [];

        resultEl.innerHTML =
          errHtml +
          '<div class="form-label mb-1">' + esc(I.outputLabel) + '</div>' +
          tabs +
          '<div class="hreflang-output" id="hlOut">' + esc(text) + '</div>' +
          protocolNote +
          '<div class="btn-row mt-2"><button type="button" id="hlCopyBtn" class="btn btn-sm btn-outline-secondary">' + esc(I.copyLabel) + '</button></div>';

        resultEl.querySelectorAll('.hl-tab').forEach(function (btn) {
          btn.addEventListener('click', function () {
            formType = btn.getAttribute('data-form');
            renderOutput(rows);
          });
        });

        var copyBtn = document.getElementById('hlCopyBtn');
        copyBtn.addEventListener('click', function () {
          var text = outputs[formType];
          if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(function () {
              copyBtn.textContent = I.copiedLabel;
              setTimeout(function () { copyBtn.textContent = I.copyLabel; }, 1600);
            }, function () { fallbackCopy(text, copyBtn); });
          } else {
            fallbackCopy(text, copyBtn);
          }
        });
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
       * 主生成入口。
       */
      function generate() {
        resultEl.innerHTML = '';
        pendingErrors = [];
        var rows = parseRows();
        if (!rows.length) {
          pendingErrors.forEach(function (msg) {
            resultEl.insertAdjacentHTML('beforeend', '<div class="hreflang-err">' + esc(msg) + '</div>');
          });
          pendingErrors = [];
          resultEl.insertAdjacentHTML('beforeend', '<div class="hreflang-note warn">' + esc(I.noValidRows) + '</div>');
          return;
        }
        refreshXdefault(rows);
        // x-default：把所选行追加为 x-default 条目（若选了）
        var rowsOut = rows.slice();
        var xd = xdefaultEl.value;
        if (xd !== '' && rows[Number(xd)]) {
          rowsOut.push({ lang: 'x-default', url: rows[Number(xd)].url, addedProto: rows[Number(xd)].addedProto });
        }
        renderOutput(rowsOut);
      }

      /**
       * 加载默认样例：en/es/ja 三个版本。
       */
      function loadSample() {
        inputEl.value =
          'en https://example.com/\\n' +
          'es https://example.com/es/\\n' +
          'ja https://example.com/ja/';
        refreshXdefault(parseRows());
        xdefaultEl.value = '0';
        generate();
      }

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        generate();
      });
      document.getElementById('hlSample').addEventListener('click', loadSample);
      document.getElementById('hlClear').addEventListener('click', function () {
        inputEl.value = '';
        resultEl.innerHTML = '';
      });
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('hreflang-generator');
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
