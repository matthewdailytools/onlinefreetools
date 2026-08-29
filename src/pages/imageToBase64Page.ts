/**
 * 图片与 Base64 互转工具页：Encode（FileReader.readAsDataURL）/ Decode（data URL 或裸 Base64），本地处理不上传。
 * slug: image-to-base64（单页；不拆 encode / decode 近义 URL）。
 * 规格：work-tasks/image-to-base64/02-tool-info.md
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
 * @param pathname 站点路径
 * @param defaultLang 站点默认语言
 */
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * 渲染图片与 Base64 互转工具页。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderImageToBase64Page = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/image-to-base64';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_image_to_base64_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_image_to_base64_description');

	const navItems = buildToolPageNavItems(opts.lang, opts.defaultLang);

	/** 语言切换 map 值始终带显式语言段。 */
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
			currentSlug: 'image-to-base64',
			currentAnchor: '#converter',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	/** 页内样式：模式面板、等宽文本区、预览图。 */
	const extraHeadHtml = `
  <style>
    .tools-bar { gap: .5rem; }
    .opt-pane[hidden] { display: none !important; }
    .opt-group { gap: .75rem; align-items: center; }
    #itbOutput, #itbDecodeInput {
      min-height: 200px; font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
      font-size: .85rem; word-break: break-all;
    }
    #itbPreview {
      max-width: 100%; max-height: 320px; object-fit: contain;
      border: 1px solid #dee2e6; border-radius: .5rem; background:
        linear-gradient(45deg, #eee 25%, transparent 25%),
        linear-gradient(-45deg, #eee 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, #eee 75%),
        linear-gradient(-45deg, transparent 75%, #eee 75%);
      background-size: 16px 16px; background-position: 0 0, 0 8px, 8px -8px, -8px 0;
    }
    .itb-preview-wrap { min-height: 120px; display: flex; align-items: center; justify-content: center; }
  </style>`;

	const contentHtml = `
    <div id="converter" class="tool-page-heading mb-3">
      <h1 class="h4 mb-0">${escapeHtml(t(opts.lang, 'tool_image_to_base64_title'))}</h1>
    </div>

    <div class="d-flex align-items-center tools-bar mb-2 flex-wrap">
      <div class="btn-group" role="group" aria-label="${escapeHtml(t(opts.lang, 'tool_image_to_base64_mode_label'))}">
        <input type="radio" class="btn-check" name="itbMode" id="itbModeEncode" value="encode" checked>
        <label class="btn btn-outline-primary btn-sm" for="itbModeEncode">${escapeHtml(t(opts.lang, 'tool_image_to_base64_tab_encode'))}</label>
        <input type="radio" class="btn-check" name="itbMode" id="itbModeDecode" value="decode">
        <label class="btn btn-outline-primary btn-sm" for="itbModeDecode">${escapeHtml(t(opts.lang, 'tool_image_to_base64_tab_decode'))}</label>
      </div>
      <button type="button" id="itbBtnCopy" class="btn btn-outline-primary btn-sm">${escapeHtml(t(opts.lang, 'tool_image_to_base64_copy'))}</button>
      <button type="button" id="itbBtnDownload" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(t(opts.lang, 'tool_image_to_base64_download'))}</button>
      <button type="button" id="itbBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_image_to_base64_sample'))}</button>
      <button type="button" id="itbBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_image_to_base64_clear'))}</button>
    </div>

    <div id="itbEncodePane" class="opt-pane mb-3">
      <label class="tool-dropzone itb-drop mb-3" id="itbDrop" for="itbFile">
        <input type="file" id="itbFile" accept="image/jpeg,image/png,image/webp,image/gif,image/*">
        <span class="tool-dropzone-title">${escapeHtml(t(opts.lang, 'tool_image_to_base64_choose_file'))}</span>
        <span class="tool-dropzone-hint">${escapeHtml(t(opts.lang, 'tool_image_to_base64_drop_hint'))}</span>
        <span id="itbFileName" class="tool-dropzone-file"></span>
      </label>
      <div class="form-check mb-2">
        <input class="form-check-input" type="checkbox" id="itbStripPrefix">
        <label class="form-check-label" for="itbStripPrefix">${escapeHtml(t(opts.lang, 'tool_image_to_base64_strip_prefix'))}</label>
      </div>
    </div>

    <div id="itbDecodePane" class="opt-pane mb-3" hidden>
      <label class="form-label" for="itbDecodeInput">${escapeHtml(t(opts.lang, 'tool_image_to_base64_decode_input_label'))}</label>
      <textarea id="itbDecodeInput" class="form-control mb-2" rows="8" spellcheck="false" placeholder="${escapeHtml(t(opts.lang, 'tool_image_to_base64_decode_placeholder'))}"></textarea>
      <button type="button" id="itbBtnDecode" class="btn btn-primary btn-sm">${escapeHtml(t(opts.lang, 'tool_image_to_base64_decode_btn'))}</button>
    </div>

    <p id="itbWarn" class="small text-warning mb-2" style="display:none;" role="status"></p>
    <p id="itbError" class="small text-danger mb-2" style="display:none;" role="alert"></p>
    <p id="itbStatus" class="small text-muted mb-2" role="status"></p>

    <div id="itbEncodeOutputWrap" class="opt-pane mb-3">
      <label class="form-label" for="itbOutput">${escapeHtml(t(opts.lang, 'tool_image_to_base64_output_label'))}</label>
      <textarea id="itbOutput" class="form-control" rows="8" readonly spellcheck="false"></textarea>
    </div>

    <div class="mb-3">
      <label class="form-label">${escapeHtml(t(opts.lang, 'tool_image_to_base64_preview_label'))}</label>
      <div class="itb-preview-wrap">
        <img id="itbPreview" alt="" hidden>
      </div>
    </div>

    <p class="tool-lead mb-4">${escapeHtml(description)}</p>`;

	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: 'tool_image_to_base64',
		mode: 'rules',
		usecaseCount: 3,
		ruleItemCount: 4,
	});

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: 'MDN — FileReader.readAsDataURL()',
				href: 'https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL',
			},
			{
				label: 'MDN — Data URLs',
				href: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URLs',
			},
		],
	});

	/**
	 * 客户端脚本：Encode 用 FileReader；Decode 解析 data URL 或裸 Base64。
	 */
	const extraBodyHtml = `
  <script>
    (function () {
      /** 单文件软警告阈值（字节）。 */
      var SOFT_BYTES = 25 * 1024 * 1024;
      /** 解码时裸 Base64 默认 MIME。 */
      var DEFAULT_DECODE_MIME = 'image/png';

      var modeEncode = document.getElementById('itbModeEncode');
      var modeDecode = document.getElementById('itbModeDecode');
      var encodePane = document.getElementById('itbEncodePane');
      var decodePane = document.getElementById('itbDecodePane');
      var encodeOutputWrap = document.getElementById('itbEncodeOutputWrap');
      var drop = document.getElementById('itbDrop');
      var fileInput = document.getElementById('itbFile');
      var fileNameEl = document.getElementById('itbFileName');
      var stripPrefixEl = document.getElementById('itbStripPrefix');
      var outputEl = document.getElementById('itbOutput');
      var decodeInputEl = document.getElementById('itbDecodeInput');
      var btnCopy = document.getElementById('itbBtnCopy');
      var btnDownload = document.getElementById('itbBtnDownload');
      var btnDecode = document.getElementById('itbBtnDecode');
      var btnSample = document.getElementById('itbBtnSample');
      var btnClear = document.getElementById('itbBtnClear');
      var warnEl = document.getElementById('itbWarn');
      var errEl = document.getElementById('itbError');
      var statusEl = document.getElementById('itbStatus');
      var preview = document.getElementById('itbPreview');

      var msg = {
        empty: ${JSON.stringify(t(opts.lang, 'tool_image_to_base64_empty'))},
        decodeFail: ${JSON.stringify(t(opts.lang, 'tool_image_to_base64_err_decode'))},
        encodeFail: ${JSON.stringify(t(opts.lang, 'tool_image_to_base64_err_encode'))},
        invalid: ${JSON.stringify(t(opts.lang, 'tool_image_to_base64_err_invalid'))},
        large: ${JSON.stringify(t(opts.lang, 'tool_image_to_base64_warn_large'))},
        done: ${JSON.stringify(t(opts.lang, 'tool_image_to_base64_status_done'))},
        copied: ${JSON.stringify(t(opts.lang, 'tool_image_to_base64_copy_done'))},
        copy: ${JSON.stringify(t(opts.lang, 'tool_image_to_base64_copy'))}
      };

      /** 当前模式：encode | decode。 */
      var currentMode = 'encode';
      /** 完整 data URL（含 data: 前缀），供预览与下载。 */
      var fullDataUrl = '';
      /** 解码结果 Blob，供下载。 */
      var decodeBlob = null;
      /** 解码结果扩展名。 */
      var decodeExt = 'png';

      /** 显示或隐藏警告行。 */
      function setWarn(text) {
        if (!text) { warnEl.style.display = 'none'; warnEl.textContent = ''; return; }
        warnEl.textContent = text;
        warnEl.style.display = '';
      }

      /** 显示或隐藏错误行。 */
      function setError(text) {
        if (!text) { errEl.style.display = 'none'; errEl.textContent = ''; return; }
        errEl.textContent = text;
        errEl.style.display = '';
      }

      /** 更新状态行文案。 */
      function setStatus(text) {
        statusEl.textContent = text || '';
      }

      /** 读取当前模式。 */
      function readMode() {
        return modeDecode.checked ? 'decode' : 'encode';
      }

      /** 切换 Encode / Decode 面板可见性与按钮状态。 */
      function syncModeUi() {
        currentMode = readMode();
        var isEncode = currentMode === 'encode';
        encodePane.hidden = !isEncode;
        decodePane.hidden = isEncode;
        encodeOutputWrap.hidden = !isEncode;
        btnCopy.style.display = isEncode ? '' : 'none';
        btnDownload.disabled = isEncode ? !fullDataUrl : !decodeBlob;
      }

      /**
       * 根据 strip 选项格式化输出文本。
       * @param {string} dataUrl 完整 data URL
       * @returns {string}
       */
      function formatOutputText(dataUrl) {
        if (!stripPrefixEl.checked) return dataUrl;
        var idx = dataUrl.indexOf(',');
        return idx >= 0 ? dataUrl.slice(idx + 1) : dataUrl;
      }

      /** 刷新输出 textarea 与预览图。 */
      function refreshEncodeDisplay() {
        outputEl.value = fullDataUrl ? formatOutputText(fullDataUrl) : '';
        if (fullDataUrl) {
          preview.src = fullDataUrl;
          preview.hidden = false;
        } else {
          preview.removeAttribute('src');
          preview.hidden = true;
        }
        btnDownload.disabled = !decodeBlob && !fullDataUrl;
        if (currentMode === 'encode') btnDownload.disabled = !fullDataUrl;
      }

      /**
       * 复制文本到剪贴板。
       * @param {string} text
       * @returns {Promise<void>}
       */
      function copyText(text) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          return navigator.clipboard.writeText(text);
        }
        return new Promise(function (resolve, reject) {
          var ta = document.createElement('textarea');
          ta.value = text;
          document.body.appendChild(ta);
          ta.select();
          try { document.execCommand('copy'); resolve(); }
          catch (e) { reject(e); }
          ta.remove();
        });
      }

      /**
       * 用 FileReader 将 File 读为 data URL 并更新 UI。
       * @param {File} file
       * @returns {Promise<void>}
       */
      function encodeFile(file) {
        setError('');
        decodeBlob = null;
        fileNameEl.textContent = file.name || '';
        if (file.size > SOFT_BYTES) setWarn(msg.large);
        else setWarn('');
        return new Promise(function (resolve, reject) {
          var reader = new FileReader();
          reader.onload = function () {
            var result = typeof reader.result === 'string' ? reader.result : '';
            if (!result || result.indexOf('data:') !== 0) {
              setError(msg.encodeFail);
              fullDataUrl = '';
              refreshEncodeDisplay();
              reject(new Error('encode'));
              return;
            }
            fullDataUrl = result;
            refreshEncodeDisplay();
            setStatus(msg.done);
            resolve();
          };
          reader.onerror = function () {
            setError(msg.encodeFail);
            fullDataUrl = '';
            refreshEncodeDisplay();
            reject(new Error('encode'));
          };
          reader.readAsDataURL(file);
        });
      }

      /**
       * 从 MIME 字符串推断下载扩展名。
       * @param {string} mime
       * @returns {string}
       */
      function extFromMime(mime) {
        if (!mime) return 'png';
        if (mime.indexOf('jpeg') >= 0 || mime.indexOf('jpg') >= 0) return 'jpg';
        if (mime.indexOf('webp') >= 0) return 'webp';
        if (mime.indexOf('gif') >= 0) return 'gif';
        if (mime.indexOf('svg') >= 0) return 'svg';
        return 'png';
      }

      /**
       * 将用户输入规范化为 data URL。
       * 接受 data:image/...;base64,... 或裸 Base64（默认 image/png）。
       * @param {string} raw
       * @returns {string|null}
       */
      function normalizeToDataUrl(raw) {
        var text = (raw || '').trim();
        if (!text) return null;
        if (text.indexOf('data:') === 0) return text;
        if (/^[A-Za-z0-9+/=\\s]+$/.test(text)) {
          var b64 = text.replace(/\\s/g, '');
          return 'data:' + DEFAULT_DECODE_MIME + ';base64,' + b64;
        }
        return null;
      }

      /**
       * 将 data URL 转为 Blob。
       * @param {string} dataUrl
       * @returns {Promise<Blob>}
       */
      function dataUrlToBlob(dataUrl) {
        return fetch(dataUrl).then(function (res) { return res.blob(); });
      }

      /**
       * 解码 textarea 内容：预览 + 启用下载。
       * @returns {Promise<void>}
       */
      function decodeInput() {
        setError('');
        decodeBlob = null;
        fullDataUrl = '';
        var raw = decodeInputEl.value || '';
        if (!raw.trim()) {
          setError(msg.empty);
          preview.hidden = true;
          preview.removeAttribute('src');
          btnDownload.disabled = true;
          return Promise.resolve();
        }
        if (raw.length > SOFT_BYTES * 2) setWarn(msg.large);
        else setWarn('');
        var dataUrl = normalizeToDataUrl(raw);
        if (!dataUrl) {
          setError(msg.invalid);
          preview.hidden = true;
          preview.removeAttribute('src');
          btnDownload.disabled = true;
          return Promise.resolve();
        }
        return dataUrlToBlob(dataUrl)
          .then(function (blob) {
            if (!blob || !blob.size) throw new Error('decode');
            decodeBlob = blob;
            fullDataUrl = dataUrl;
            var mimeMatch = dataUrl.match(/^data:([^;,]+)/);
            var mime = mimeMatch ? mimeMatch[1] : DEFAULT_DECODE_MIME;
            decodeExt = extFromMime(mime);
            preview.src = dataUrl;
            preview.hidden = false;
            btnDownload.disabled = false;
            setStatus(msg.done);
          })
          .catch(function () {
            setError(msg.decodeFail);
            preview.hidden = true;
            preview.removeAttribute('src');
            btnDownload.disabled = true;
          });
      }

      /** 下载：Encode 模式导出原图 Blob；Decode 模式导出解码 Blob。 */
      function downloadResult() {
        if (currentMode === 'decode' && decodeBlob) {
          var url = URL.createObjectURL(decodeBlob);
          var a = document.createElement('a');
          a.href = url;
          a.download = 'decoded.' + decodeExt;
          document.body.appendChild(a);
          a.click();
          a.remove();
          URL.revokeObjectURL(url);
          return;
        }
        if (!fullDataUrl) return;
        dataUrlToBlob(fullDataUrl).then(function (blob) {
          if (!blob) return;
          var mimeMatch = fullDataUrl.match(/^data:([^;,]+)/);
          var ext = extFromMime(mimeMatch ? mimeMatch[1] : '');
          var url = URL.createObjectURL(blob);
          var a = document.createElement('a');
          a.href = url;
          a.download = 'encoded.' + ext;
          document.body.appendChild(a);
          a.click();
          a.remove();
          URL.revokeObjectURL(url);
        });
      }

      /**
       * 生成 Canvas PNG 样例并走 Encode 路径。
       * @returns {Promise<void>}
       */
      function loadSample() {
        modeEncode.checked = true;
        syncModeUi();
        clearAll(false);
        var c = document.createElement('canvas');
        c.width = 320;
        c.height = 200;
        var ctx = c.getContext('2d');
        var grad = ctx.createLinearGradient(0, 0, 320, 200);
        grad.addColorStop(0, '#1c83a8');
        grad.addColorStop(1, '#2d6a4f');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 320, 200);
        ctx.fillStyle = 'rgba(255,255,255,0.85)';
        ctx.font = 'bold 28px sans-serif';
        ctx.fillText('Base64', 88, 112);
        return new Promise(function (resolve) {
          c.toBlob(function (blob) {
            if (!blob) { resolve(); return; }
            encodeFile(new File([blob], 'sample-base64.png', { type: 'image/png' })).then(resolve).catch(resolve);
          }, 'image/png');
        });
      }

      /**
       * 重置全部状态。
       * @param {boolean} resetInputs 是否清空 file input
       */
      function clearAll(resetInputs) {
        if (resetInputs !== false) fileInput.value = '';
        fileNameEl.textContent = '';
        outputEl.value = '';
        decodeInputEl.value = '';
        fullDataUrl = '';
        decodeBlob = null;
        preview.removeAttribute('src');
        preview.hidden = true;
        btnDownload.disabled = true;
        setError('');
        setWarn('');
        setStatus('');
      }

      drop.addEventListener('dragover', function (e) {
        e.preventDefault();
        drop.classList.add('dragover');
      });
      drop.addEventListener('dragleave', function () { drop.classList.remove('dragover'); });
      drop.addEventListener('drop', function (e) {
        e.preventDefault();
        drop.classList.remove('dragover');
        var f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) encodeFile(f);
      });
      fileInput.addEventListener('change', function () {
        var f = fileInput.files && fileInput.files[0];
        if (f) encodeFile(f);
      });

      stripPrefixEl.addEventListener('change', refreshEncodeDisplay);

      modeEncode.addEventListener('change', syncModeUi);
      modeDecode.addEventListener('change', syncModeUi);

      btnCopy.addEventListener('click', function () {
        var text = outputEl.value || '';
        if (!text) { setError(msg.empty); return; }
        copyText(text).then(function () {
          setStatus(msg.copied);
          btnCopy.textContent = msg.copied;
          setTimeout(function () { btnCopy.textContent = msg.copy; }, 1500);
        }).catch(function () {});
      });

      btnDownload.addEventListener('click', downloadResult);
      btnDecode.addEventListener('click', function () { decodeInput(); });
      btnSample.addEventListener('click', function () { loadSample(); });
      btnClear.addEventListener('click', function () { clearAll(true); });

      syncModeUi();
      /** 进页自动跑 Encode 样例（tool-creation 规则）。 */
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('image-to-base64');
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
