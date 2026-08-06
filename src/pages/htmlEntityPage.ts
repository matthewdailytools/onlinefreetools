/**
 * HTML 实体编解码工具页：Encode / Decode 同页 Tab，Tier 0 原生实现。
 * slug: html-entity；见 work-tasks/html-entity/02-tool-info.md。
 */
import type { SiteLang } from '../site/i18n';
import { t, supportedLangs } from '../site/i18n';
import { renderFooter } from './site/footer';
import { renderHeader } from './site/header';
import { renderLayout, type HreflangAlternate, escapeHtml } from './site/layout';
import { renderSidebar } from './site/sidebar';
import { TOOL_PAGES, getToolBySlug } from '../site/tools';
import {
	renderToolExtraSections,
	renderToolIgSections,
	renderToolReferencesSection,
	buildToolJsonLd,
} from './site/toolContent';

/**
 * 为路径加上语言前缀（默认语无前缀）。
 * @param lang 当前语言
 * @param pathname 目标路径
 * @param defaultLang 站点默认语言
 */
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * 渲染 HTML 实体编解码工具页。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表（语言切换器用全量 supportedLangs）
 */
export const renderHtmlEntityPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/html-entity';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_html_entity_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_html_entity_description');

	const navItems = [
		{ href: withLangPrefix(opts.lang, '/', opts.defaultLang), label: t(opts.lang, 'nav_home') },
		{ href: withLangPrefix(opts.lang, '/#all-tools', opts.defaultLang), label: t(opts.lang, 'nav_tools') },
		{ href: '/devlogs/', label: t(opts.lang, 'nav_devlogs') },
	];

	/** 语言切换链接始终带显式语言前缀（含默认语）。 */
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

	const toolLinks = (TOOL_PAGES || []).map((p) => ({
		href: withLangPrefix(opts.lang, p.path, opts.defaultLang),
		label: t(opts.lang, p.i18nKey),
	}));

	const sidebarHtml = renderSidebar({
		title: t(opts.lang, 'nav_tools'),
		items: [{ href: '#converter', label: t(opts.lang, 'tool_html_entity_title') }, ...toolLinks],
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	/** 页内样式：双栏输入输出、Decode 预览区。 */
	const extraHeadHtml = `
  <style>
    .tools-bar { gap: .5rem; }
    .row.g-3 { align-items: stretch; }
    .row.g-3 > .col-12 { display: flex; flex-direction: column; }
    .row.g-3 > .col-12 > label { margin-bottom: .5rem; }
    #srcInput, #outText {
      min-height: 280px; height: auto; resize: vertical; flex: 1 1 auto; box-sizing: border-box;
      font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: .9rem;
    }
    #outText {
      white-space: pre-wrap; word-break: break-word; color: #212529; background: #fff;
      border: 1px solid #dee2e6; border-radius: .5rem; padding: 1rem; overflow: auto;
    }
    #decodePreview {
      min-height: 4rem; white-space: pre-wrap; word-break: break-word;
      font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: .875rem;
    }
    .opt-pane[hidden] { display: none !important; }
    .opt-group { gap: .75rem; }
  </style>`;

	const contentHtml = `
    <div id="converter" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(t(opts.lang, 'tool_html_entity_title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="d-flex align-items-center tools-bar mb-2 flex-wrap">
      <div class="btn-group" role="group" aria-label="${escapeHtml(t(opts.lang, 'tool_html_entity_dir_label'))}">
        <input type="radio" class="btn-check" name="heDir" id="dirEncode" value="encode" checked>
        <label class="btn btn-outline-primary btn-sm" for="dirEncode">${escapeHtml(t(opts.lang, 'tool_html_entity_tab_encode'))}</label>
        <input type="radio" class="btn-check" name="heDir" id="dirDecode" value="decode">
        <label class="btn btn-outline-primary btn-sm" for="dirDecode">${escapeHtml(t(opts.lang, 'tool_html_entity_tab_decode'))}</label>
      </div>
      <button type="button" id="btnConvert" class="btn btn-primary btn-sm">${escapeHtml(t(opts.lang, 'tool_html_entity_convert'))}</button>
      <button type="button" id="btnCopy" class="btn btn-outline-primary btn-sm">${escapeHtml(t(opts.lang, 'tool_html_entity_copy'))}</button>
      <button type="button" id="btnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_html_entity_sample'))}</button>
      <button type="button" id="btnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_html_entity_clear'))}</button>
    </div>

    <div class="d-flex flex-wrap align-items-center opt-group mb-3 small">
      <div id="encodeOpts" class="opt-pane d-flex flex-wrap align-items-center gap-2">
        <label class="text-muted mb-0" for="scopeSelect">${escapeHtml(t(opts.lang, 'tool_html_entity_scope_label'))}</label>
        <select id="scopeSelect" class="form-select form-select-sm" style="width:auto">
          <option value="minimal">${escapeHtml(t(opts.lang, 'tool_html_entity_scope_minimal'))}</option>
          <option value="nonascii">${escapeHtml(t(opts.lang, 'tool_html_entity_scope_nonascii'))}</option>
          <option value="all">${escapeHtml(t(opts.lang, 'tool_html_entity_scope_all'))}</option>
        </select>
        <label class="text-muted mb-0 ms-2" for="formSelect">${escapeHtml(t(opts.lang, 'tool_html_entity_form_label'))}</label>
        <select id="formSelect" class="form-select form-select-sm" style="width:auto">
          <option value="named">${escapeHtml(t(opts.lang, 'tool_html_entity_form_named'))}</option>
          <option value="decimal">${escapeHtml(t(opts.lang, 'tool_html_entity_form_decimal'))}</option>
          <option value="hex">${escapeHtml(t(opts.lang, 'tool_html_entity_form_hex'))}</option>
        </select>
      </div>
      <div id="decodeOpts" class="opt-pane d-flex flex-wrap align-items-center gap-2" hidden>
        <label class="text-muted mb-0" for="strictSelect">${escapeHtml(t(opts.lang, 'tool_html_entity_strict_label'))}</label>
        <select id="strictSelect" class="form-select form-select-sm" style="width:auto">
          <option value="lenient">${escapeHtml(t(opts.lang, 'tool_html_entity_strict_lenient'))}</option>
          <option value="strict">${escapeHtml(t(opts.lang, 'tool_html_entity_strict_strict'))}</option>
        </select>
        <label class="text-muted mb-0 ms-2" for="passSelect">${escapeHtml(t(opts.lang, 'tool_html_entity_passes_label'))}</label>
        <select id="passSelect" class="form-select form-select-sm" style="width:auto">
          <option value="once">${escapeHtml(t(opts.lang, 'tool_html_entity_passes_once'))}</option>
          <option value="stable">${escapeHtml(t(opts.lang, 'tool_html_entity_passes_stable'))}</option>
        </select>
      </div>
    </div>

    <div id="convertWarn" class="alert alert-warning py-2 small mb-2" style="display:none" role="status"></div>
    <div id="convertError" class="alert alert-danger py-2 small mb-2" style="display:none" role="alert"></div>

    <div class="row g-3 mb-3">
      <div class="col-12 col-lg-6">
        <label for="srcInput" class="form-label">${escapeHtml(t(opts.lang, 'tool_html_entity_input_label'))}</label>
        <textarea id="srcInput" class="form-control" placeholder="${escapeHtml(t(opts.lang, 'tool_html_entity_input_placeholder'))}" spellcheck="false"></textarea>
      </div>
      <div class="col-12 col-lg-6">
        <label class="form-label" for="outText">${escapeHtml(t(opts.lang, 'tool_html_entity_output_label'))}</label>
        <pre id="outText" class="result mb-0" tabindex="0"></pre>
      </div>
    </div>

    <div id="previewWrap" class="mb-4" hidden>
      <label class="form-label" for="decodePreview">${escapeHtml(t(opts.lang, 'tool_html_entity_preview_label'))}</label>
      <div id="decodePreview" class="border rounded p-3 bg-light"></div>
    </div>`;

	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: 'tool_html_entity',
		mode: 'rules',
		usecaseCount: 3,
		ruleItemCount: 4,
	});

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: 'WHATWG — Character references',
				href: 'https://html.spec.whatwg.org/multipage/parsing.html#character-references',
			},
			{
				label: 'W3C — HTML 4 character entities',
				href: 'https://www.w3.org/TR/html4/sgml/entities.html',
			},
		],
	});

	/** 客户端：Tier 0 原生 HTML 实体编解码（无外部库）。 */
	const extraBodyHtml = `
  <script>
    (function () {
      /** 粘贴软上限（字符），超出仍可转换但提示卡顿风险 */
      var SOFT_LIMIT = 1000000;
      /** 「Until stable」最多迭代次数，防止循环 */
      var MAX_STABLE_PASSES = 8;

      /** 常用命名实体（编码时 Named 形式优先使用） */
      var NAMED_MAP = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
        '\u00A0': '&nbsp;',
        '\u00A9': '&copy;',
        '\u00AE': '&reg;',
        '\u2122': '&trade;',
        '\u2014': '&mdash;',
        '\u2013': '&ndash;',
        '\u2026': '&hellip;',
        '\u20AC': '&euro;',
        '\u00A3': '&pound;',
        '\u00A5': '&yen;'
      };

      var srcInput = document.getElementById('srcInput');
      var outText = document.getElementById('outText');
      var decodePreview = document.getElementById('decodePreview');
      var previewWrap = document.getElementById('previewWrap');
      var encodeOpts = document.getElementById('encodeOpts');
      var decodeOpts = document.getElementById('decodeOpts');
      var scopeSelect = document.getElementById('scopeSelect');
      var formSelect = document.getElementById('formSelect');
      var strictSelect = document.getElementById('strictSelect');
      var passSelect = document.getElementById('passSelect');
      var btnConvert = document.getElementById('btnConvert');
      var btnCopy = document.getElementById('btnCopy');
      var btnSample = document.getElementById('btnSample');
      var btnClear = document.getElementById('btnClear');
      var convertWarn = document.getElementById('convertWarn');
      var convertError = document.getElementById('convertError');

      var labelCopy = ${JSON.stringify(t(opts.lang, 'tool_html_entity_copy'))};
      var labelCopyDone = ${JSON.stringify(t(opts.lang, 'tool_html_entity_copy_done'))};
      var msgLarge = ${JSON.stringify(t(opts.lang, 'tool_html_entity_large_warn'))};
      var msgEmpty = ${JSON.stringify(t(opts.lang, 'tool_html_entity_empty'))};
      var msgInvalid = ${JSON.stringify(t(opts.lang, 'tool_html_entity_error_invalid'))};
      var sampleEncode = ${JSON.stringify(t(opts.lang, 'tool_html_entity_sample_encode'))};
      var sampleDecode = ${JSON.stringify(t(opts.lang, 'tool_html_entity_sample_decode'))};

      /** 上次成功输出 */
      var lastOkOut = '';

      /** 当前模式：encode | decode */
      function getDir() {
        var el = document.querySelector('input[name="heDir"]:checked');
        return el ? el.value : 'encode';
      }

      /** 是否为 Encode 模式 */
      function isEncode() {
        return getDir() === 'encode';
      }

      /**
       * 按字符码点遍历字符串（正确处理 surrogate pair）。
       * @param {string} text 源文本
       * @param {(ch: string, cp: number) => void} fn 回调
       */
      function forEachCodePoint(text, fn) {
        for (var i = 0; i < text.length; i++) {
          var cp = text.codePointAt(i);
          var ch = String.fromCodePoint(cp);
          fn(ch, cp);
          if (cp > 0xffff) i++;
        }
      }

      /**
       * 判断该码点在当前 scope 下是否需要转义。
       * @param {string} ch 单字符
       * @param {number} cp 码点
       * @param {string} scope minimal | nonascii | all
       */
      function shouldEncode(ch, cp, scope) {
        if (scope === 'minimal') {
          return ch === '&' || ch === '<' || ch === '>' || ch === '"' || ch === "'";
        }
        if (scope === 'nonascii') return cp > 127;
        return cp > 127 || ch === '&' || ch === '<' || ch === '>' || ch === '"' || ch === "'";
      }

      /**
       * 将单个字符编码为实体串。
       * @param {string} ch
       * @param {number} cp
       * @param {string} form named | decimal | hex
       */
      function encodeChar(ch, cp, form) {
        if (form === 'named' && NAMED_MAP[ch]) return NAMED_MAP[ch];
        if (form === 'hex') return '&#' + 'x' + cp.toString(16).toUpperCase() + ';';
        return '&#' + cp + ';';
      }

      /**
       * HTML 实体编码。
       * @param {string} text 原文
       * @param {string} scope 编码范围
       * @param {string} form 输出形式
       */
      function encodeHtml(text, scope, form) {
        var out = '';
        forEachCodePoint(text, function (ch, cp) {
          if (shouldEncode(ch, cp, scope)) out += encodeChar(ch, cp, form);
          else out += ch;
        });
        return out;
      }

      /**
       * Strict 模式：检测孤立 & 或畸形引用。
       * @param {string} text
       */
      function validateStrict(text) {
        for (var i = 0; i < text.length; i++) {
          if (text[i] !== '&') continue;
          var rest = text.slice(i + 1);
          if (!rest.length) throw new Error(msgInvalid);
          if (rest[0] === '#') {
            var semi = rest.indexOf(';');
            if (semi < 1) throw new Error(msgInvalid);
            var body = rest.slice(1, semi);
            if (body[0] === 'x' || body[0] === 'X') {
              if (!/^[xX][0-9a-fA-F]+$/.test(body)) throw new Error(msgInvalid);
            } else if (!/^[0-9]+$/.test(body)) {
              throw new Error(msgInvalid);
            }
          } else if (/^[a-zA-Z][a-zA-Z0-9]*/.test(rest)) {
            if (rest.indexOf(';') < 0) throw new Error(msgInvalid);
          } else {
            throw new Error(msgInvalid);
          }
        }
      }

      /**
       * 单次 decode（textarea 技巧，不注入页面 DOM）。
       * @param {string} text 含实体的文本
       */
      function decodeOnce(text) {
        var ta = document.createElement('textarea');
        ta.innerHTML = text;
        return ta.value;
      }

      /**
       * HTML 实体解码。
       * @param {string} text
       * @param {string} strictness strict | lenient
       * @param {string} passes once | stable
       */
      function decodeHtml(text, strictness, passes) {
        if (strictness === 'strict') validateStrict(text);
        var result = text;
        var limit = passes === 'stable' ? MAX_STABLE_PASSES : 1;
        for (var p = 0; p < limit; p++) {
          var next = decodeOnce(result);
          if (next === result) break;
          result = next;
        }
        return result;
      }

      /**
       * 按输入长度显示软上限警告。
       * @param {string} text
       */
      function maybeWarnSize(text) {
        if ((text || '').length > SOFT_LIMIT) {
          convertWarn.textContent = msgLarge;
          convertWarn.style.display = '';
        } else {
          convertWarn.style.display = 'none';
        }
      }

      /**
       * 展示错误信息。
       * @param {unknown} err
       */
      function showError(err) {
        var msg = (err && err.message) ? String(err.message) : String(err || 'Error');
        convertError.textContent = msg;
        convertError.style.display = '';
      }

      /** 清除错误提示 */
      function clearError() {
        convertError.style.display = 'none';
        convertError.textContent = '';
      }

      /** 更新 Decode 预览（仅 textContent，不渲染 HTML） */
      function updatePreview(decoded) {
        if (!decodePreview) return;
        decodePreview.textContent = decoded || '';
      }

      /** 切换 Encode/Decode 选项面板与预览区可见性 */
      function applyDirUi() {
        var enc = isEncode();
        encodeOpts.hidden = !enc;
        decodeOpts.hidden = enc;
        previewWrap.hidden = enc;
        clearError();
        convertWarn.style.display = 'none';
      }

      /** 执行转换并写入输出区 */
      function convert() {
        clearError();
        var raw = (srcInput.value || '');
        if (!raw.trim()) {
          outText.textContent = '';
          lastOkOut = '';
          updatePreview('');
          return;
        }
        maybeWarnSize(raw);
        try {
          var out;
          if (isEncode()) {
            out = encodeHtml(raw, scopeSelect.value, formSelect.value);
            updatePreview('');
          } else {
            out = decodeHtml(raw, strictSelect.value, passSelect.value);
            updatePreview(out);
          }
          outText.textContent = out;
          lastOkOut = out;
        } catch (e) {
          showError(e);
        }
      }

      /** 复制当前输出 */
      async function copyOut() {
        convert();
        if (convertError.style.display !== 'none') return;
        var value = outText.textContent || '';
        if (!value) return;
        await navigator.clipboard.writeText(value);
        btnCopy.textContent = labelCopyDone;
        setTimeout(function () { btnCopy.textContent = labelCopy; }, 1200);
      }

      /** 载入当前方向样例 */
      function loadSample() {
        srcInput.value = isEncode() ? sampleEncode : sampleDecode;
        convert();
      }

      btnConvert.addEventListener('click', convert);
      btnCopy.addEventListener('click', copyOut);
      btnSample.addEventListener('click', loadSample);
      btnClear.addEventListener('click', function () {
        srcInput.value = '';
        outText.textContent = '';
        lastOkOut = '';
        updatePreview('');
        clearError();
        convertWarn.style.display = 'none';
      });
      document.querySelectorAll('input[name="heDir"]').forEach(function (el) {
        el.addEventListener('change', applyDirUi);
      });
      [scopeSelect, formSelect, strictSelect, passSelect].forEach(function (el) {
        el.addEventListener('change', function () {
          if ((srcInput.value || '').trim()) convert();
        });
      });
      srcInput.addEventListener('input', function () {
        if ((srcInput.value || '').length < 50000) convert();
      });

      srcInput.value = sampleEncode;
      applyDirUi();
      convert();
    })();
  </script>`;

	const toolMeta = getToolBySlug('html-entity');
	const toolSeoHtml = toolMeta
		? renderToolExtraSections({ lang: opts.lang, defaultLang: opts.defaultLang, tool: toolMeta })
		: '';
	const toolJsonLd = toolMeta
		? buildToolJsonLd({
				lang: opts.lang,
				defaultLang: opts.defaultLang,
				tool: toolMeta,
				name: t(opts.lang, toolMeta.i18nKey as any),
				description,
				canonicalPath,
			})
		: '';

	return renderLayout({
		lang: opts.lang,
		title,
		description,
		canonicalPath,
		ogImageUrl: 'https://onlinefreetools.org/og-image.png',
		ogType: 'website',
		alternates,
		headerHtml,
		sidebarHtml,
		contentHtml: `${contentHtml}${igHtml}${toolSeoHtml}${referencesHtml}`,
		footerHtml,
		extraHeadHtml: `${extraHeadHtml}${toolJsonLd}`,
		extraBodyHtml,
		includeSidebarToggleScript: true,
		sidebarAutoCloseSelector: '#toolNav a',
	});
};
