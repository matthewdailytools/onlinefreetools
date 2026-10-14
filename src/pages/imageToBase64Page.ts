/**
 * 图片与 Base64 互转工具页：Encode（FileReader.readAsDataURL）/ Decode（data URL 或裸 Base64）。
 * slug: image-to-base64（单页；不拆 encode / decode 近义 URL）。
 * UI：Tab 切换主输入面；Encode/Decode → Copy/Download；Advanced；金标 HUD。
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
import { bcwHudCss } from './site/bcwHudCss';

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
	/** 取本工具 i18n 文案。 */
	const tx = (key: string) => t(opts.lang, `tool_image_to_base64_${key}` as never);
	const title = `${tx('title')} | ${t(opts.lang, 'brand')}`;
	const description = tx('description');

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

	/** 页内样式：模式面板、等宽文本区、预览、HUD。 */
	const extraHeadHtml = `
  <style>
    ${bcwHudCss({ hudId: 'itbHud', convertBtnId: 'itbBtnEncode' })}
    #itbHud.is-error { border-color:#b91c1c; background:#fff1f2; }
    #itbHud:not(.is-on) .bcw-hud-spin { animation:none; }
    .tools-bar { gap: .5rem; }
    .opt-pane[hidden] { display: none !important; }
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
      <h1 class="h4 mb-0">${escapeHtml(tx('title'))}</h1>
    </div>

    <div class="d-flex align-items-center tools-bar mb-2 flex-wrap">
      <div class="btn-group" role="group" aria-label="${escapeHtml(tx('mode_label'))}">
        <input type="radio" class="btn-check" name="itbMode" id="itbModeEncode" value="encode" checked>
        <label class="btn btn-outline-primary btn-sm" for="itbModeEncode">${escapeHtml(tx('tab_encode'))}</label>
        <input type="radio" class="btn-check" name="itbMode" id="itbModeDecode" value="decode">
        <label class="btn btn-outline-primary btn-sm" for="itbModeDecode">${escapeHtml(tx('tab_decode'))}</label>
      </div>
      <button type="button" id="itbBtnEncode" class="btn btn-primary btn-sm">${escapeHtml(tx('encode'))}</button>
      <button type="button" id="itbBtnDecode" class="btn btn-primary btn-sm" hidden>${escapeHtml(tx('decode_btn'))}</button>
      <button type="button" id="itbBtnCopy" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(tx('copy'))}</button>
      <button type="button" id="itbBtnDownload" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(tx('download'))}</button>
      <button type="button" id="itbBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx('sample'))}</button>
      <button type="button" id="itbBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx('clear'))}</button>
    </div>

    <div id="itbEncodePane" class="opt-pane mb-3">
      <label class="tool-dropzone itb-drop mb-0" id="itbDrop" for="itbFile">
        <input type="file" id="itbFile" accept="image/jpeg,image/png,image/webp,image/gif,image/*">
        <span class="tool-dropzone-title">${escapeHtml(tx('choose_file'))}</span>
        <span class="tool-dropzone-hint">${escapeHtml(tx('drop_hint'))}</span>
        <span id="itbFileName" class="tool-dropzone-file"></span>
      </label>
    </div>

    <div id="itbDecodePane" class="opt-pane mb-3" hidden>
      <label class="form-label" for="itbDecodeInput">${escapeHtml(tx('decode_input_label'))}</label>
      <textarea id="itbDecodeInput" class="form-control" rows="8" spellcheck="false" placeholder="${escapeHtml(tx('decode_placeholder'))}"></textarea>
    </div>

    <details class="mb-3" id="itbAdvanced">
      <summary>${escapeHtml(tx('advanced'))}</summary>
      <div class="row g-2 mt-1">
        <div class="col-12 col-md-6">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="itbStripPrefix">
            <label class="form-check-label" for="itbStripPrefix">${escapeHtml(tx('strip_prefix'))}</label>
          </div>
          <p class="form-text mb-0">${escapeHtml(tx('strip_hint'))}</p>
        </div>
        <div class="col-12 col-md-6">
          <label class="form-label mb-0" for="itbDecodeMime">${escapeHtml(tx('decode_mime_label'))}</label>
          <select id="itbDecodeMime" class="form-select form-select-sm">
            <option value="image/png" selected>image/png</option>
            <option value="image/jpeg">image/jpeg</option>
            <option value="image/webp">image/webp</option>
            <option value="image/gif">image/gif</option>
          </select>
          <p class="form-text mb-0">${escapeHtml(tx('decode_mime_hint'))}</p>
        </div>
      </div>
    </details>

    <div id="itbHud" class="bcw-hud mb-3" role="status" aria-live="polite" hidden>
      <div class="bcw-hud-top">
        <div class="bcw-hud-spin" aria-hidden="true"></div>
        <div class="bcw-hud-pct" id="itbPct">0%</div>
        <div class="bcw-hud-copy">
          <div class="bcw-hud-title">${escapeHtml(tx('progress'))}</div>
          <div class="bcw-hud-step" id="itbStep"></div>
          <div class="bcw-hud-time" id="itbTime"></div>
        </div>
      </div>
      <div class="progress" style="height:1.35rem">
        <div id="itbBar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
        <span class="bcw-hud-sheen" aria-hidden="true"></span>
      </div>
      <ol class="bcw-hud-steps" id="itbHudStepsEncode">
        <li data-step="read">${escapeHtml(tx('step_read'))}</li>
        <li data-step="encode">${escapeHtml(tx('step_encode'))}</li>
        <li data-step="ready">${escapeHtml(tx('step_ready'))}</li>
      </ol>
      <ol class="bcw-hud-steps" id="itbHudStepsDecode" hidden>
        <li data-step="parse">${escapeHtml(tx('decode_step_parse'))}</li>
        <li data-step="blob">${escapeHtml(tx('decode_step_blob'))}</li>
        <li data-step="ready">${escapeHtml(tx('decode_step_ready'))}</li>
      </ol>
    </div>

    <p id="itbWarn" class="small text-warning mb-2" style="display:none;" role="status"></p>
    <p id="itbError" class="small text-danger mb-2" style="display:none;" role="alert"></p>
    <p id="itbStatus" class="small text-muted mb-2" role="status"></p>
    <p id="itbStats" class="small text-muted mb-2" style="display:none;"></p>

    <div id="itbEncodeOutputWrap" class="opt-pane mb-3">
      <label class="form-label" for="itbOutput">${escapeHtml(tx('output_label'))}</label>
      <textarea id="itbOutput" class="form-control" rows="8" readonly spellcheck="false"></textarea>
    </div>

    <div class="mb-3">
      <label class="form-label">${escapeHtml(tx('preview_label'))}</label>
      <div class="itb-preview-wrap">
        <img id="itbPreview" alt="" hidden>
      </div>
    </div>

    <p class="tool-lead mb-4">${escapeHtml(description)}</p>`;

	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: 'tool_image_to_base64',
		mode: 'rules',
		howItemCount: 4,
		whyChooseItemCount: 5,
		usecaseCount: 4,
		ruleItemCount: 5,
	});

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{ label: tx('ref_a_label'), href: 'https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL' },
			{ label: tx('ref_b_label'), href: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URLs' },
		],
	});

	/**
	 * 客户端脚本：Encode 用 FileReader；Decode 解析 data URL / 裸 Base64；HUD；Clear 不重载样例。
	 */
	const extraBodyHtml = `
  <script>
    (function () {
      /** 单文件软警告阈值（字节）。 */
      var SOFT_BYTES = 25 * 1024 * 1024;

      var modeEncode = document.getElementById('itbModeEncode');
      var modeDecode = document.getElementById('itbModeDecode');
      var encodePane = document.getElementById('itbEncodePane');
      var decodePane = document.getElementById('itbDecodePane');
      var encodeOutputWrap = document.getElementById('itbEncodeOutputWrap');
      var drop = document.getElementById('itbDrop');
      var fileInput = document.getElementById('itbFile');
      var fileNameEl = document.getElementById('itbFileName');
      var stripPrefixEl = document.getElementById('itbStripPrefix');
      var decodeMimeEl = document.getElementById('itbDecodeMime');
      var outputEl = document.getElementById('itbOutput');
      var decodeInputEl = document.getElementById('itbDecodeInput');
      var btnEncode = document.getElementById('itbBtnEncode');
      var btnDecode = document.getElementById('itbBtnDecode');
      var btnCopy = document.getElementById('itbBtnCopy');
      var btnDownload = document.getElementById('itbBtnDownload');
      var btnSample = document.getElementById('itbBtnSample');
      var btnClear = document.getElementById('itbBtnClear');
      var warnEl = document.getElementById('itbWarn');
      var errEl = document.getElementById('itbError');
      var statusEl = document.getElementById('itbStatus');
      var statsEl = document.getElementById('itbStats');
      var preview = document.getElementById('itbPreview');
      var hud = document.getElementById('itbHud');
      var pctEl = document.getElementById('itbPct');
      var stepEl = document.getElementById('itbStep');
      var timeEl = document.getElementById('itbTime');
      var barEl = document.getElementById('itbBar');
      var stepsEncode = document.getElementById('itbHudStepsEncode');
      var stepsDecode = document.getElementById('itbHudStepsDecode');

      var msg = {
        empty: ${JSON.stringify(tx('empty'))},
        emptyDecode: ${JSON.stringify(tx('empty_decode'))},
        decodeFail: ${JSON.stringify(tx('err_decode'))},
        encodeFail: ${JSON.stringify(tx('err_encode'))},
        invalid: ${JSON.stringify(tx('err_invalid'))},
        large: ${JSON.stringify(tx('warn_large'))},
        working: ${JSON.stringify(tx('status_working'))},
        done: ${JSON.stringify(tx('status_done'))},
        decoded: ${JSON.stringify(tx('status_decoded'))},
        copied: ${JSON.stringify(tx('copy_done'))},
        copy: ${JSON.stringify(tx('copy'))},
        statsTpl: ${JSON.stringify(tx('stats_tpl'))},
        readStep: ${JSON.stringify(tx('read_step'))},
        encodeStep: ${JSON.stringify(tx('encode_step'))},
        readyStep: ${JSON.stringify(tx('ready_step'))},
        parseStep: ${JSON.stringify(tx('parse_step'))},
        blobStep: ${JSON.stringify(tx('blob_step'))},
        elapsed: ${JSON.stringify(tx('elapsed'))}
      };

      /** 当前模式：encode | decode。 */
      var currentMode = 'encode';
      /** 待编码文件。 */
      var pendingFile = null;
      /** 完整 data URL。 */
      var fullDataUrl = '';
      /** 解码结果 Blob。 */
      var decodeBlob = null;
      /** 解码扩展名。 */
      var decodeExt = 'png';
      var busy = false;
      var startedAt = 0;
      var tickTimer = 0;

      /** 用 {key} 填充模板。 */
      function fill(tpl, map) {
        return tpl.replace(/\\{(\\w+)\\}/g, function (_, k) { return map[k] != null ? map[k] : ''; });
      }

      /** 格式化字节数。 */
      function formatBytes(n) {
        if (n < 1024) return n + ' B';
        if (n < 1024 * 1024) return (n / 1024).toFixed(1) + ' KB';
        return (n / (1024 * 1024)).toFixed(2) + ' MB';
      }

      function setWarn(text) {
        if (!text) { warnEl.style.display = 'none'; warnEl.textContent = ''; return; }
        warnEl.textContent = text;
        warnEl.style.display = '';
      }
      function setError(text) {
        if (!text) { errEl.style.display = 'none'; errEl.textContent = ''; return; }
        errEl.textContent = text;
        errEl.style.display = '';
      }
      function setStatus(text) { statusEl.textContent = text || ''; }

      function readMode() { return modeDecode.checked ? 'decode' : 'encode'; }

      /** 忙碌锁。 */
      function lock(on) {
        busy = on;
        [btnEncode, btnDecode, btnSample, btnClear, fileInput, stripPrefixEl, decodeMimeEl, modeEncode, modeDecode].forEach(function (el) {
          el.disabled = on;
        });
        decodeInputEl.readOnly = on;
        btnCopy.disabled = on || !outputEl.value;
        btnDownload.disabled = on || (currentMode === 'encode' ? !fullDataUrl : !decodeBlob);
        btnEncode.setAttribute('aria-busy', String(on));
        btnDecode.setAttribute('aria-busy', String(on));
      }

      function tickTime() {
        var sec = Math.max(0, Math.floor((Date.now() - startedAt) / 1000));
        timeEl.textContent = fill(msg.elapsed, { s: String(sec) });
      }

      /**
       * 更新 HUD。
       * @param {number} pct
       * @param {string} stepKey
       * @param {string} stepText
       * @param {string[]} order 步骤顺序
       */
      function progress(pct, stepKey, stepText, order) {
        hud.hidden = false;
        hud.classList.add('is-on');
        hud.classList.remove('is-error', 'is-done');
        var p = Math.max(0, Math.min(100, Math.round(pct)));
        pctEl.textContent = p + '%';
        barEl.style.width = p + '%';
        barEl.setAttribute('aria-valuenow', String(p));
        stepEl.textContent = stepText || '';
        var list = currentMode === 'encode' ? stepsEncode : stepsDecode;
        list.querySelectorAll('li').forEach(function (li) {
          var k = li.getAttribute('data-step');
          li.classList.toggle('is-done', k !== stepKey && order.indexOf(k) < order.indexOf(stepKey));
          li.classList.toggle('is-active', k === stepKey);
        });
      }

      function endHud(ok) {
        if (tickTimer) { clearInterval(tickTimer); tickTimer = 0; }
        hud.classList.remove('is-on');
        if (ok) {
          hud.classList.add('is-done');
          pctEl.textContent = '100%';
          barEl.style.width = '100%';
        } else {
          hud.classList.add('is-error');
        }
      }

      function startHud() {
        startedAt = Date.now();
        if (tickTimer) clearInterval(tickTimer);
        tickTimer = setInterval(tickTime, 250);
        tickTime();
      }

      /** 切换 Encode / Decode 面板。 */
      function syncModeUi() {
        currentMode = readMode();
        var isEncode = currentMode === 'encode';
        encodePane.hidden = !isEncode;
        decodePane.hidden = isEncode;
        encodeOutputWrap.hidden = !isEncode;
        btnEncode.hidden = !isEncode;
        btnDecode.hidden = isEncode;
        btnCopy.hidden = !isEncode;
        stepsEncode.hidden = !isEncode;
        stepsDecode.hidden = isEncode;
        btnCopy.disabled = !outputEl.value;
        btnDownload.disabled = isEncode ? !fullDataUrl : !decodeBlob;
      }

      function formatOutputText(dataUrl) {
        if (!stripPrefixEl.checked) return dataUrl;
        var idx = dataUrl.indexOf(',');
        return idx >= 0 ? dataUrl.slice(idx + 1) : dataUrl;
      }

      function refreshEncodeDisplay() {
        outputEl.value = fullDataUrl ? formatOutputText(fullDataUrl) : '';
        btnCopy.disabled = !outputEl.value;
        if (fullDataUrl) {
          preview.src = fullDataUrl;
          preview.hidden = false;
          var mimeMatch = fullDataUrl.match(/^data:([^;,]+)/);
          var mime = mimeMatch ? mimeMatch[1] : 'image/*';
          var body = formatOutputText(fullDataUrl);
          statsEl.textContent = fill(msg.statsTpl, {
            mime: mime,
            chars: String(body.length),
            bytes: formatBytes(Math.round(body.length * 0.75))
          });
          statsEl.style.display = '';
        } else {
          preview.removeAttribute('src');
          preview.hidden = true;
          statsEl.style.display = 'none';
        }
        if (currentMode === 'encode') btnDownload.disabled = !fullDataUrl;
      }

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
       * 选择文件后仅暂存，需点 Encode。
       * @param {File} file
       */
      function setPendingFile(file) {
        pendingFile = file;
        fileNameEl.textContent = file.name || '';
        setError('');
        if (file.size > SOFT_BYTES) setWarn(msg.large);
        else setWarn('');
      }

      /** Encode：FileReader → data URL。 */
      function runEncode() {
        setError('');
        decodeBlob = null;
        if (!pendingFile) {
          setError(msg.empty);
          return Promise.resolve();
        }
        setStatus(msg.working);
        lock(true);
        startHud();
        var order = ['read', 'encode', 'ready'];
        progress(10, 'read', msg.readStep, order);

        return new Promise(function (resolve) {
          requestAnimationFrame(function () {
            setTimeout(function () {
              progress(40, 'encode', msg.encodeStep, order);
              var reader = new FileReader();
              reader.onload = function () {
                var result = typeof reader.result === 'string' ? reader.result : '';
                if (!result || result.indexOf('data:') !== 0) {
                  lock(false);
                  setError(msg.encodeFail);
                  fullDataUrl = '';
                  refreshEncodeDisplay();
                  endHud(false);
                  setStatus('');
                  resolve();
                  return;
                }
                progress(90, 'ready', msg.readyStep, order);
                fullDataUrl = result;
                refreshEncodeDisplay();
                setStatus(msg.done);
                lock(false);
                progress(100, 'ready', msg.readyStep, order);
                endHud(true);
                resolve();
              };
              reader.onerror = function () {
                lock(false);
                setError(msg.encodeFail);
                fullDataUrl = '';
                refreshEncodeDisplay();
                endHud(false);
                setStatus('');
                resolve();
              };
              reader.readAsDataURL(pendingFile);
            }, 40);
          });
        });
      }

      function extFromMime(mime) {
        if (!mime) return 'png';
        if (mime.indexOf('jpeg') >= 0 || mime.indexOf('jpg') >= 0) return 'jpg';
        if (mime.indexOf('webp') >= 0) return 'webp';
        if (mime.indexOf('gif') >= 0) return 'gif';
        if (mime.indexOf('svg') >= 0) return 'svg';
        return 'png';
      }

      function normalizeToDataUrl(raw) {
        var text = (raw || '').trim();
        if (!text) return null;
        if (text.indexOf('data:') === 0) return text;
        if (/^[A-Za-z0-9+/=\\s]+$/.test(text)) {
          var b64 = text.replace(/\\s/g, '');
          return 'data:' + (decodeMimeEl.value || 'image/png') + ';base64,' + b64;
        }
        return null;
      }

      function dataUrlToBlob(dataUrl) {
        return fetch(dataUrl).then(function (res) { return res.blob(); });
      }

      /** Decode：解析 → Blob → 预览。 */
      function runDecode() {
        setError('');
        decodeBlob = null;
        fullDataUrl = '';
        var raw = decodeInputEl.value || '';
        if (!raw.trim()) {
          setError(msg.emptyDecode);
          preview.hidden = true;
          preview.removeAttribute('src');
          btnDownload.disabled = true;
          statsEl.style.display = 'none';
          return Promise.resolve();
        }
        if (raw.length > SOFT_BYTES * 2) setWarn(msg.large);
        else setWarn('');

        setStatus(msg.working);
        lock(true);
        startHud();
        var order = ['parse', 'blob', 'ready'];
        progress(15, 'parse', msg.parseStep, order);

        return new Promise(function (resolve) {
          requestAnimationFrame(function () {
            setTimeout(function () {
              var dataUrl = normalizeToDataUrl(raw);
              if (!dataUrl) {
                lock(false);
                setError(msg.invalid);
                preview.hidden = true;
                preview.removeAttribute('src');
                btnDownload.disabled = true;
                endHud(false);
                setStatus('');
                resolve();
                return;
              }
              progress(50, 'blob', msg.blobStep, order);
              dataUrlToBlob(dataUrl)
                .then(function (blob) {
                  if (!blob || !blob.size) throw new Error('decode');
                  decodeBlob = blob;
                  fullDataUrl = dataUrl;
                  var mimeMatch = dataUrl.match(/^data:([^;,]+)/);
                  var mime = mimeMatch ? mimeMatch[1] : decodeMimeEl.value;
                  decodeExt = extFromMime(mime);
                  preview.src = dataUrl;
                  preview.hidden = false;
                  btnDownload.disabled = false;
                  statsEl.textContent = fill(msg.statsTpl, {
                    mime: mime,
                    chars: String(raw.trim().length),
                    bytes: formatBytes(blob.size)
                  });
                  statsEl.style.display = '';
                  progress(100, 'ready', msg.readyStep, order);
                  setStatus(msg.decoded);
                  lock(false);
                  endHud(true);
                  resolve();
                })
                .catch(function () {
                  lock(false);
                  setError(msg.decodeFail);
                  preview.hidden = true;
                  preview.removeAttribute('src');
                  btnDownload.disabled = true;
                  endHud(false);
                  setStatus('');
                  resolve();
                });
            }, 40);
          });
        });
      }

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
            setPendingFile(new File([blob], 'sample-base64.png', { type: 'image/png' }));
            runEncode().then(resolve);
          }, 'image/png');
        });
      }

      function clearAll(resetInputs) {
        if (tickTimer) { clearInterval(tickTimer); tickTimer = 0; }
        if (resetInputs !== false) fileInput.value = '';
        pendingFile = null;
        fileNameEl.textContent = '';
        outputEl.value = '';
        decodeInputEl.value = '';
        fullDataUrl = '';
        decodeBlob = null;
        preview.removeAttribute('src');
        preview.hidden = true;
        btnDownload.disabled = true;
        btnCopy.disabled = true;
        setError('');
        setWarn('');
        setStatus('');
        statsEl.style.display = 'none';
        hud.hidden = true;
        hud.classList.remove('is-on', 'is-done', 'is-error');
        stripPrefixEl.checked = false;
        decodeMimeEl.value = 'image/png';
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
        if (f) setPendingFile(f);
      });
      fileInput.addEventListener('change', function () {
        var f = fileInput.files && fileInput.files[0];
        if (f) setPendingFile(f);
      });

      stripPrefixEl.addEventListener('change', refreshEncodeDisplay);
      modeEncode.addEventListener('change', syncModeUi);
      modeDecode.addEventListener('change', syncModeUi);

      btnEncode.addEventListener('click', function () { runEncode(); });
      btnDecode.addEventListener('click', function () { runDecode(); });
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
      btnSample.addEventListener('click', function () { loadSample(); });
      btnClear.addEventListener('click', function () { clearAll(true); });

      syncModeUi();
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
				name: t(opts.lang, toolMeta.i18nKey as never),
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
