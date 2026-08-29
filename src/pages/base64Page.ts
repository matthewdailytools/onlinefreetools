/**
 * Base64 编解码工具页：Encode / Decode 同页 Tab，Tier 0 原生实现。
 * slug: base64；见 work-tasks/base64/02-tool-info.md。
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
 * 渲染 Base64 编解码工具页。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表（语言切换器用全量 supportedLangs）
 */
export const renderBase64Page = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/base64';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_base64_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_base64_description');

	const navItems = buildToolPageNavItems(opts.lang, opts.defaultLang);

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

	const sidebarHtml = renderSidebar({
		title: t(opts.lang, 'nav_tools'),
		groups: buildToolSidebarItems({ lang: opts.lang, defaultLang: opts.defaultLang, currentSlug: 'base64', currentAnchor: '#converter' }),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	/** 页内样式：双栏输入输出、文件行。 */
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
      white-space: pre-wrap; word-break: break-word; overflow: auto;
    }
    .opt-group { gap: .75rem; }
  </style>`;

	const contentHtml = `
    <div id="converter" class="tool-hero">
      <h1 class="tool-title">${escapeHtml(t(opts.lang, 'tool_base64_title'))}</h1>
      <p class="tool-lead">${escapeHtml(description)}</p>
    </div>

    <div class="tool-panel">
    <div class="d-flex align-items-center tools-bar mb-2 flex-wrap">
      <div class="btn-group" role="group" aria-label="${escapeHtml(t(opts.lang, 'tool_base64_dir_label'))}">
        <input type="radio" class="btn-check" name="b64Dir" id="dirEncode" value="encode" checked>
        <label class="btn btn-outline-primary btn-sm" for="dirEncode">${escapeHtml(t(opts.lang, 'tool_base64_tab_encode'))}</label>
        <input type="radio" class="btn-check" name="b64Dir" id="dirDecode" value="decode">
        <label class="btn btn-outline-primary btn-sm" for="dirDecode">${escapeHtml(t(opts.lang, 'tool_base64_tab_decode'))}</label>
      </div>
      <button type="button" id="btnConvert" class="btn btn-primary">${escapeHtml(t(opts.lang, 'tool_base64_convert'))}</button>
      <button type="button" id="btnCopy" class="btn btn-outline-primary">${escapeHtml(t(opts.lang, 'tool_base64_copy'))}</button>
      <button type="button" id="btnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_base64_sample'))}</button>
      <button type="button" id="btnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_base64_clear'))}</button>
    </div>

    <div class="d-flex flex-wrap align-items-center opt-group mb-3 small">
      <div class="form-check mb-0">
        <input class="form-check-input" type="checkbox" id="urlMode">
        <label class="form-check-label" for="urlMode">${escapeHtml(t(opts.lang, 'tool_base64_url_label'))}</label>
      </div>
      <div id="fileWrap" class="d-flex align-items-center gap-2 ms-lg-3">
        <label class="text-muted mb-0" for="fileInput">${escapeHtml(t(opts.lang, 'tool_base64_file_label'))}</label>
        <input type="file" id="fileInput" class="form-control form-control-sm" style="max-width:16rem">
      </div>
    </div>

    <div id="convertWarn" class="alert alert-warning py-2 small mb-2" style="display:none" role="status"></div>
    <div id="convertError" class="alert alert-danger py-2 small mb-2" style="display:none" role="alert"></div>
    <div id="fileInfo" class="alert alert-info py-2 small mb-2" style="display:none" role="status"></div>

    <div class="row g-3 mb-3">
      <div class="col-12 col-lg-6">
        <label for="srcInput" class="form-label">${escapeHtml(t(opts.lang, 'tool_base64_input_label'))}</label>
        <textarea id="srcInput" class="form-control" placeholder="${escapeHtml(t(opts.lang, 'tool_base64_input_placeholder'))}" spellcheck="false"></textarea>
      </div>
      <div class="col-12 col-lg-6">
        <label class="form-label" for="outText">${escapeHtml(t(opts.lang, 'tool_base64_output_label'))}</label>
        <pre id="outText" class="result mb-0" tabindex="0"></pre>
      </div>
    </div>
    </div>`;

	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: 'tool_base64',
		mode: 'rules',
		usecaseCount: 3,
		ruleItemCount: 4,
	});

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: 'RFC 4648 — Base 64 Encoding',
				href: 'https://www.rfc-editor.org/rfc/rfc4648',
			},
		],
	});

	/** 客户端：Tier 0 原生 Base64 编解码（TextEncoder/btoa，无外部库）。 */
	const extraBodyHtml = `
  <script>
    (function () {
      /** 粘贴软上限（字符），超出仍可转换但提示卡顿风险 */
      var SOFT_LIMIT = 1000000;
      /** 文件读取软上限（字节） */
      var FILE_SOFT_LIMIT = 5000000;

      var srcInput = document.getElementById('srcInput');
      var outText = document.getElementById('outText');
      var urlMode = document.getElementById('urlMode');
      var fileInput = document.getElementById('fileInput');
      var fileWrap = document.getElementById('fileWrap');
      var fileInfo = document.getElementById('fileInfo');
      var btnConvert = document.getElementById('btnConvert');
      var btnCopy = document.getElementById('btnCopy');
      var btnSample = document.getElementById('btnSample');
      var btnClear = document.getElementById('btnClear');
      var convertWarn = document.getElementById('convertWarn');
      var convertError = document.getElementById('convertError');

      var labelCopy = ${JSON.stringify(t(opts.lang, 'tool_base64_copy'))};
      var labelCopyDone = ${JSON.stringify(t(opts.lang, 'tool_base64_copy_done'))};
      var msgLarge = ${JSON.stringify(t(opts.lang, 'tool_base64_large_warn'))};
      var msgFileLarge = ${JSON.stringify(t(opts.lang, 'tool_base64_file_large_warn'))};
      var msgEmpty = ${JSON.stringify(t(opts.lang, 'tool_base64_empty'))};
      var msgInvalid = ${JSON.stringify(t(opts.lang, 'tool_base64_error_invalid'))};
      var sampleEncode = ${JSON.stringify(t(opts.lang, 'tool_base64_sample_encode'))};
      var sampleDecode = ${JSON.stringify(t(opts.lang, 'tool_base64_sample_decode'))};
      var msgFileLoaded = ${JSON.stringify(t(opts.lang, 'tool_base64_file_loaded'))};

      /** 当前模式：encode | decode */
      function getDir() {
        var el = document.querySelector('input[name="b64Dir"]:checked');
        return el ? el.value : 'encode';
      }

      /** 是否为 Encode 模式 */
      function isEncode() {
        return getDir() === 'encode';
      }

      /**
       * UTF-8 文本 → 标准 Base64。
       * @param {string} text 原文
       */
      function utf8ToBase64(text) {
        var bytes = new TextEncoder().encode(text);
        var binary = '';
        for (var i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i]);
        return btoa(binary);
      }

      /**
       * 标准 Base64 → UTF-8 文本。
       * @param {string} b64 Base64 串
       */
      function base64ToUtf8(b64) {
        var binary = atob(b64);
        var bytes = new Uint8Array(binary.length);
        for (var i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
        return new TextDecoder().decode(bytes);
      }

      /**
       * 标准 Base64 转 Base64url（RFC 4648 §5）。
       * @param {string} std 标准 Base64
       */
      function toBase64Url(std) {
        return std.replace(/\\+/g, '-').replace(/\\//g, '_').replace(/=+$/, '');
      }

      /**
       * Base64url 转标准 Base64（补 padding）。
       * @param {string} url Base64url 串
       */
      function fromBase64Url(url) {
        var s = (url || '').replace(/-/g, '+').replace(/_/g, '/');
        var pad = s.length % 4;
        if (pad === 2) s += '==';
        else if (pad === 3) s += '=';
        else if (pad === 1) throw new Error(msgInvalid);
        return s;
      }

      /**
       * Uint8Array → 标准 Base64。
       * @param {Uint8Array} bytes 字节数组
       */
      function bytesToBase64(bytes) {
        var binary = '';
        for (var i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i]);
        return btoa(binary);
      }

      /**
       * 校验 Base64 字符合法性（宽松去空白后）。
       * @param {string} raw 输入
       * @param {boolean} isUrl 是否 Base64url 模式
       */
      function validateBase64Chars(raw, isUrl) {
        var cleaned = (raw || '').replace(/\\s/g, '');
        if (!cleaned) return '';
        var pattern = isUrl ? /^[A-Za-z0-9\\-_=]*$/ : /^[A-Za-z0-9+\\/=]*$/;
        if (!pattern.test(cleaned)) throw new Error(msgInvalid);
        return cleaned;
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

      /** 切换 Encode/Decode 时更新文件区可见性 */
      function applyDirUi() {
        var enc = isEncode();
        fileWrap.style.display = enc ? '' : 'none';
        if (!enc) {
          fileInput.value = '';
          fileInfo.style.display = 'none';
        }
        clearError();
        convertWarn.style.display = 'none';
      }

      /** 执行转换并写入输出区 */
      function convert() {
        clearError();
        fileInfo.style.display = 'none';
        var raw = (srcInput.value || '');
        if (!raw.trim()) {
          outText.textContent = '';
          return;
        }
        maybeWarnSize(raw);
        try {
          var out;
          var useUrl = urlMode.checked;
          if (isEncode()) {
            var std = utf8ToBase64(raw);
            out = useUrl ? toBase64Url(std) : std;
          } else {
            var cleaned = validateBase64Chars(raw, useUrl);
            var stdIn = useUrl ? fromBase64Url(cleaned) : cleaned;
            out = base64ToUtf8(stdIn);
          }
          outText.textContent = out;
        } catch (e) {
          showError(e);
          outText.textContent = '';
        }
      }

      /**
       * 读取文件字节并编码为 Base64。
       * @param {File} file
       */
      function encodeFile(file) {
        clearError();
        fileInfo.style.display = 'none';
        if (file.size > FILE_SOFT_LIMIT) {
          convertWarn.textContent = msgFileLarge;
          convertWarn.style.display = '';
        } else {
          convertWarn.style.display = 'none';
        }
        var reader = new FileReader();
        reader.onload = function () {
          try {
            var bytes = new Uint8Array(reader.result);
            var std = bytesToBase64(bytes);
            var useUrl = urlMode.checked;
            var out = useUrl ? toBase64Url(std) : std;
            outText.textContent = out;
            srcInput.value = '';
            fileInfo.textContent = msgFileLoaded.replace('{name}', file.name).replace('{size}', String(file.size));
            fileInfo.style.display = '';
          } catch (e) {
            showError(e);
          }
        };
        reader.onerror = function () { showError(new Error(msgInvalid)); };
        reader.readAsArrayBuffer(file);
      }

      /** 复制当前输出 */
      async function copyOut() {
        if (!outText.textContent) {
          convert();
        }
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
        fileInput.value = '';
        fileInfo.style.display = 'none';
        convert();
      }

      btnConvert.addEventListener('click', convert);
      btnCopy.addEventListener('click', copyOut);
      btnSample.addEventListener('click', loadSample);
      btnClear.addEventListener('click', function () {
        srcInput.value = '';
        outText.textContent = '';
        fileInput.value = '';
        fileInfo.style.display = 'none';
        clearError();
        convertWarn.style.display = 'none';
      });
      document.querySelectorAll('input[name="b64Dir"]').forEach(function (el) {
        el.addEventListener('change', function () {
          applyDirUi();
          if ((srcInput.value || '').trim()) convert();
        });
      });
      urlMode.addEventListener('change', function () {
        if ((srcInput.value || '').trim() || outText.textContent) convert();
      });
      fileInput.addEventListener('change', function () {
        var f = fileInput.files && fileInput.files[0];
        if (f && isEncode()) encodeFile(f);
      });
      srcInput.addEventListener('input', function () {
        if ((srcInput.value || '').length < 50000) convert();
      });

      srcInput.value = sampleEncode;
      applyDirUi();
      convert();
    })();
  </script>`;

	const toolMeta = getToolBySlug('base64');
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
