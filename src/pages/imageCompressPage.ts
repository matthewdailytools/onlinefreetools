/**
 * 图片压缩工具页：最长边缩放 + 质量 + 可选目标体积（Canvas toBlob 迭代）。
 * slug: image-compress；不拆 compress-jpg / reduce-image-size 等近义 URL。
 * 见 work-tasks/image-compress/02-tool-info.md。
 */
import type { SiteLang } from '../site/i18n';
import { t, supportedLangs } from '../site/i18n';
import { renderFooter } from './site/footer';
import { renderHeader } from './site/header';
import { renderLayout, type HreflangAlternate, escapeHtml } from './site/layout';
import { renderSidebar, buildToolSidebarItems } from './site/sidebar';
import { getToolBySlug } from '../site/tools';
import {
	renderToolExtraSections,
	renderToolIgSections,
	renderToolReferencesSection,
	buildToolJsonLd,
} from './site/toolContent';

/** 为路径加上语言前缀（默认语无前缀）。 */
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * 渲染图片压缩工具页。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表（语言切换器用全量 supportedLangs）
 */
export const renderImageCompressPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/image-compress';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_image_compress_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_image_compress_description');

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

	const sidebarHtml = renderSidebar({
		title: t(opts.lang, 'nav_tools'),
		items: buildToolSidebarItems({
			lang: opts.lang,
			defaultLang: opts.defaultLang,
			currentSlug: 'image-compress',
			currentAnchor: '#compressor',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	/** 页内样式：拖放区、预览、目标体积与 JPEG 底色行。 */
	const extraHeadHtml = `
  <style>
    .tools-bar { gap: .5rem; }
    .opt-group { gap: .75rem; align-items: center; }
    .ic-drop {
      border: 2px dashed #adb5bd; border-radius: .5rem; padding: 1.25rem; text-align: center;
      background: #f8f9fa; cursor: pointer; transition: border-color .15s, background .15s;
    }
    .ic-drop.dragover { border-color: #0a6ebd; background: #e7f1f8; }
    .ic-drop input[type=file] { display: none; }
    #icPreviewIn, #icPreviewOut {
      max-width: 100%; max-height: 280px; object-fit: contain; background:
        linear-gradient(45deg, #eee 25%, transparent 25%),
        linear-gradient(-45deg, #eee 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, #eee 75%),
        linear-gradient(-45deg, transparent 75%, #eee 75%);
      background-size: 16px 16px; background-position: 0 0, 0 8px, 8px -8px, -8px 0;
      border: 1px solid #dee2e6; border-radius: .5rem;
    }
    .ic-preview-wrap { min-height: 120px; display: flex; align-items: center; justify-content: center; }
    #icQuality[disabled] { opacity: .5; }
    #icJpegBgRow[hidden], #icTargetRow[hidden] { display: none !important; }
  </style>`;

	const contentHtml = `
    <div id="compressor" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(t(opts.lang, 'tool_image_compress_title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="d-flex align-items-center tools-bar mb-2 flex-wrap">
      <button type="button" id="icBtnCompress" class="btn btn-primary btn-sm">${escapeHtml(t(opts.lang, 'tool_image_compress_compress'))}</button>
      <button type="button" id="icBtnDownload" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(t(opts.lang, 'tool_image_compress_download'))}</button>
      <button type="button" id="icBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_image_compress_sample'))}</button>
      <button type="button" id="icBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_image_compress_clear'))}</button>
    </div>

    <div class="d-flex align-items-center opt-group mb-2 flex-wrap">
      <label class="form-label mb-0" for="icOutput">${escapeHtml(t(opts.lang, 'tool_image_compress_output_label'))}</label>
      <select id="icOutput" class="form-select form-select-sm" style="width:auto;">
        <option value="image/webp" selected>${escapeHtml(t(opts.lang, 'tool_image_compress_format_webp'))}</option>
        <option value="image/jpeg">${escapeHtml(t(opts.lang, 'tool_image_compress_format_jpeg'))}</option>
        <option value="image/png">${escapeHtml(t(opts.lang, 'tool_image_compress_format_png'))}</option>
      </select>
      <div class="form-check mb-0">
        <input class="form-check-input" type="checkbox" id="icResizeOn" checked>
        <label class="form-check-label" for="icResizeOn">${escapeHtml(t(opts.lang, 'tool_image_compress_resize_on'))}</label>
      </div>
      <label class="form-label mb-0" for="icMaxEdge">${escapeHtml(t(opts.lang, 'tool_image_compress_max_edge_label'))}</label>
      <input type="number" id="icMaxEdge" class="form-control form-control-sm" min="64" max="8192" value="1920" step="1" style="width:6rem;">
      <span class="small text-muted">px</span>
    </div>

    <div class="d-flex align-items-center opt-group mb-2 flex-wrap">
      <label class="form-label mb-0" for="icQuality">${escapeHtml(t(opts.lang, 'tool_image_compress_quality_label'))}</label>
      <input type="range" id="icQuality" min="50" max="100" value="80" step="1" style="width:140px;">
      <span id="icQualityVal" class="small text-muted">0.80</span>
      <span id="icQualityHint" class="small text-muted"></span>
    </div>

    <div class="d-flex align-items-center opt-group mb-2 flex-wrap">
      <div class="form-check mb-0">
        <input class="form-check-input" type="checkbox" id="icTargetOn">
        <label class="form-check-label" for="icTargetOn">${escapeHtml(t(opts.lang, 'tool_image_compress_target_on'))}</label>
      </div>
      <div id="icTargetRow" class="d-flex align-items-center opt-group flex-wrap" hidden>
        <label class="form-label mb-0" for="icTargetKb">${escapeHtml(t(opts.lang, 'tool_image_compress_target_kb_label'))}</label>
        <input type="number" id="icTargetKb" class="form-control form-control-sm" min="10" max="10240" value="200" step="10" style="width:6rem;">
        <span class="small text-muted">KB</span>
      </div>
    </div>

    <div id="icJpegBgRow" class="d-flex align-items-center opt-group mb-3 flex-wrap" hidden>
      <span class="form-label mb-0">${escapeHtml(t(opts.lang, 'tool_image_compress_jpeg_bg_label'))}</span>
      <div class="btn-group" role="group" aria-label="${escapeHtml(t(opts.lang, 'tool_image_compress_jpeg_bg_label'))}">
        <input type="radio" class="btn-check" name="icJpegBg" id="icBgWhite" value="#ffffff" checked>
        <label class="btn btn-outline-secondary btn-sm" for="icBgWhite">${escapeHtml(t(opts.lang, 'tool_image_compress_jpeg_bg_white'))}</label>
        <input type="radio" class="btn-check" name="icJpegBg" id="icBgBlack" value="#000000">
        <label class="btn btn-outline-secondary btn-sm" for="icBgBlack">${escapeHtml(t(opts.lang, 'tool_image_compress_jpeg_bg_black'))}</label>
        <input type="radio" class="btn-check" name="icJpegBg" id="icBgCustom" value="custom">
        <label class="btn btn-outline-secondary btn-sm" for="icBgCustom">${escapeHtml(t(opts.lang, 'tool_image_compress_jpeg_bg_custom'))}</label>
      </div>
      <input type="color" id="icBgColor" value="#ffffff" title="${escapeHtml(t(opts.lang, 'tool_image_compress_jpeg_bg_custom'))}" style="width:2.25rem;height:1.75rem;padding:0;border:1px solid #ced4da;">
    </div>

    <label class="ic-drop d-block mb-3" id="icDrop" for="icFile">
      <input type="file" id="icFile" accept="image/png,image/jpeg,image/webp,image/gif,image/bmp,image/*">
      <strong>${escapeHtml(t(opts.lang, 'tool_image_compress_choose_file'))}</strong>
      <div class="small text-muted mt-1">${escapeHtml(t(opts.lang, 'tool_image_compress_drop_hint'))}</div>
      <div id="icFileName" class="small mt-2 mb-0"></div>
    </label>

    <p id="icWarn" class="small text-warning mb-2" style="display:none;" role="status"></p>
    <p id="icError" class="small text-danger mb-2" style="display:none;" role="alert"></p>
    <p id="icStatus" class="small text-muted mb-2" role="status"></p>

    <div class="row g-3 mb-4">
      <div class="col-12 col-lg-6">
        <label class="form-label">${escapeHtml(t(opts.lang, 'tool_image_compress_preview_in'))}</label>
        <div class="ic-preview-wrap"><img id="icPreviewIn" alt="" hidden></div>
        <p id="icStatsIn" class="small text-muted mt-2 mb-0"></p>
      </div>
      <div class="col-12 col-lg-6">
        <label class="form-label">${escapeHtml(t(opts.lang, 'tool_image_compress_preview_out'))}</label>
        <div class="ic-preview-wrap"><img id="icPreviewOut" alt="" hidden></div>
        <p id="icStatsOut" class="small text-muted mt-2 mb-0"></p>
        <p id="icRatio" class="small fw-semibold mt-1 mb-0"></p>
      </div>
    </div>`;

	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: 'tool_image_compress',
		mode: 'rules',
		usecaseCount: 3,
		ruleItemCount: 4,
	});

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{ label: 'MDN — HTMLCanvasElement.toBlob()', href: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob' },
			{ label: 'WebP — Google Developers', href: 'https://developers.google.com/speed/webp' },
			{ label: 'MDN — HTMLCanvasElement.toDataURL()', href: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL' },
		],
	});

	/**
	 * 客户端逻辑：解码 → 可选等比缩小 → Canvas toBlob；可选质量二分逼近目标 KB。
	 * 全部在浏览器内完成，不上传文件。
	 */
	const extraBodyHtml = `
  <script>
    (function () {
      /** 单文件软上限（字节） */
      var SOFT_BYTES = 25 * 1024 * 1024;
      /** 单边像素软上限 */
      var SOFT_EDGE = 8192;
      /** 目标体积迭代时质量下限 */
      var QUALITY_FLOOR = 0.5;

      var drop = document.getElementById('icDrop');
      var fileInput = document.getElementById('icFile');
      var fileNameEl = document.getElementById('icFileName');
      var outputSel = document.getElementById('icOutput');
      var resizeOn = document.getElementById('icResizeOn');
      var maxEdgeEl = document.getElementById('icMaxEdge');
      var qualityEl = document.getElementById('icQuality');
      var qualityVal = document.getElementById('icQualityVal');
      var qualityHint = document.getElementById('icQualityHint');
      var targetOn = document.getElementById('icTargetOn');
      var targetRow = document.getElementById('icTargetRow');
      var targetKbEl = document.getElementById('icTargetKb');
      var jpegBgRow = document.getElementById('icJpegBgRow');
      var bgColorEl = document.getElementById('icBgColor');
      var btnCompress = document.getElementById('icBtnCompress');
      var btnDownload = document.getElementById('icBtnDownload');
      var btnSample = document.getElementById('icBtnSample');
      var btnClear = document.getElementById('icBtnClear');
      var warnEl = document.getElementById('icWarn');
      var errEl = document.getElementById('icError');
      var statusEl = document.getElementById('icStatus');
      var previewIn = document.getElementById('icPreviewIn');
      var previewOut = document.getElementById('icPreviewOut');
      var statsIn = document.getElementById('icStatsIn');
      var statsOut = document.getElementById('icStatsOut');
      var ratioEl = document.getElementById('icRatio');

      var msg = {
        empty: ${JSON.stringify(t(opts.lang, 'tool_image_compress_empty'))},
        decode: ${JSON.stringify(t(opts.lang, 'tool_image_compress_err_decode'))},
        encode: ${JSON.stringify(t(opts.lang, 'tool_image_compress_err_encode'))},
        mismatch: ${JSON.stringify(t(opts.lang, 'tool_image_compress_err_mime_mismatch'))},
        large: ${JSON.stringify(t(opts.lang, 'tool_image_compress_warn_large'))},
        edge: ${JSON.stringify(t(opts.lang, 'tool_image_compress_warn_edge'))},
        anim: ${JSON.stringify(t(opts.lang, 'tool_image_compress_warn_animation'))},
        pngHard: ${JSON.stringify(t(opts.lang, 'tool_image_compress_warn_png'))},
        qualityPng: ${JSON.stringify(t(opts.lang, 'tool_image_compress_quality_hint_png'))},
        webpOff: ${JSON.stringify(t(opts.lang, 'tool_image_compress_webp_unsupported'))},
        compressing: ${JSON.stringify(t(opts.lang, 'tool_image_compress_status_compressing'))},
        done: ${JSON.stringify(t(opts.lang, 'tool_image_compress_status_done'))},
        targetOk: ${JSON.stringify(t(opts.lang, 'tool_image_compress_status_target_ok'))},
        targetMiss: ${JSON.stringify(t(opts.lang, 'tool_image_compress_status_target_miss'))},
        statsTpl: ${JSON.stringify(t(opts.lang, 'tool_image_compress_stats_tpl'))},
        ratioTpl: ${JSON.stringify(t(opts.lang, 'tool_image_compress_ratio_tpl'))}
      };

      /** @type {File|null} */
      var sourceFile = null;
      /** @type {Blob|null} */
      var outputBlob = null;
      var outputName = 'compressed.webp';
      /** @type {Record<string, boolean>} */
      var encodeSupport = {};

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

      function formatBytes(n) {
        if (n < 1024) return n + ' B';
        if (n < 1024 * 1024) return (n / 1024).toFixed(1) + ' KB';
        return (n / (1024 * 1024)).toFixed(2) + ' MB';
      }

      function formatStats(mime, w, h, bytes) {
        return msg.statsTpl
          .replace('{mime}', mime || '—')
          .replace('{w}', String(w))
          .replace('{h}', String(h))
          .replace('{bytes}', formatBytes(bytes));
      }

      function normalizeMime(mime) {
        if (!mime) return '';
        var m = String(mime).toLowerCase();
        if (m === 'image/jpg') return 'image/jpeg';
        return m;
      }

      function extFor(mime) {
        mime = normalizeMime(mime);
        if (mime === 'image/jpeg') return 'jpg';
        if (mime === 'image/png') return 'png';
        if (mime === 'image/webp') return 'webp';
        return 'bin';
      }

      function quality01() {
        return Math.max(QUALITY_FLOOR, Math.min(1, Number(qualityEl.value) / 100));
      }

      function jpegBg() {
        var picked = document.querySelector('input[name="icJpegBg"]:checked');
        var v = picked ? picked.value : '#ffffff';
        if (v === 'custom') return bgColorEl.value || '#ffffff';
        return v;
      }

      function syncOptionsUi() {
        var mime = outputSel.value;
        var isPng = mime === 'image/png';
        var isJpeg = mime === 'image/jpeg';
        qualityEl.disabled = isPng;
        maxEdgeEl.disabled = !resizeOn.checked;
        targetRow.hidden = !targetOn.checked;
        if (isPng && targetOn.checked) {
          /* PNG 目标体积通常无效，仍允许尝试但提示 */
        }
        qualityVal.textContent = quality01().toFixed(2);
        qualityHint.textContent = isPng ? msg.qualityPng : '';
        jpegBgRow.hidden = !isJpeg;
        var webpOpt = outputSel.querySelector('option[value="image/webp"]');
        if (webpOpt && encodeSupport['image/webp'] === false) {
          webpOpt.disabled = true;
          webpOpt.title = msg.webpOff;
        }
      }

      function probeEncode(mime) {
        return new Promise(function (resolve) {
          try {
            var c = document.createElement('canvas');
            c.width = 2; c.height = 2;
            var ctx = c.getContext('2d');
            if (ctx) { ctx.fillStyle = '#808080'; ctx.fillRect(0, 0, 2, 2); }
            if (!c.toBlob) { resolve(false); return; }
            c.toBlob(function (blob) {
              resolve(!!blob && normalizeMime(blob.type) === normalizeMime(mime));
            }, mime, 0.8);
          } catch (e) { resolve(false); }
        });
      }

      function probeAll() {
        return Promise.all([
          probeEncode('image/webp').then(function (ok) { encodeSupport['image/webp'] = ok; }),
          probeEncode('image/jpeg').then(function (ok) { encodeSupport['image/jpeg'] = ok; }),
          probeEncode('image/png').then(function (ok) { encodeSupport['image/png'] = ok; })
        ]).then(function () {
          syncOptionsUi();
          if (encodeSupport['image/webp'] === false && outputSel.value === 'image/webp') {
            outputSel.value = 'image/jpeg';
            setWarn(msg.webpOff);
            syncOptionsUi();
          }
        });
      }

      function decodeImage(blob) {
        if (typeof createImageBitmap === 'function') {
          return createImageBitmap(blob).then(function (bmp) {
            return { bitmap: bmp, w: bmp.width, h: bmp.height };
          });
        }
        return new Promise(function (resolve, reject) {
          var url = URL.createObjectURL(blob);
          var img = new Image();
          img.onload = function () {
            URL.revokeObjectURL(url);
            resolve({ bitmap: img, w: img.naturalWidth || img.width, h: img.naturalHeight || img.height });
          };
          img.onerror = function () {
            URL.revokeObjectURL(url);
            reject(new Error('decode'));
          };
          img.src = url;
        });
      }

      function canvasToBlob(canvas, mime, q) {
        return new Promise(function (resolve, reject) {
          try {
            canvas.toBlob(function (blob) {
              if (!blob) { reject(new Error('encode')); return; }
              var got = normalizeMime(blob.type);
              var want = normalizeMime(mime);
              if (got && want && got !== want) { reject(new Error('mismatch')); return; }
              resolve(blob);
            }, mime, mime === 'image/png' ? undefined : q);
          } catch (e) { reject(e); }
        });
      }

      /**
       * 按最长边等比缩小（不放大）。
       * @returns {{w:number,h:number}}
       */
      function scaledSize(srcW, srcH) {
        if (!resizeOn.checked) return { w: srcW, h: srcH };
        var maxE = Math.max(64, Math.min(SOFT_EDGE, Number(maxEdgeEl.value) || 1920));
        var long = Math.max(srcW, srcH);
        if (long <= maxE) return { w: srcW, h: srcH };
        var scale = maxE / long;
        return { w: Math.max(1, Math.round(srcW * scale)), h: Math.max(1, Math.round(srcH * scale)) };
      }

      /**
       * 绘制到 canvas 并按给定质量编码一次。
       */
      function encodeOnce(bitmap, srcW, srcH, mime, q, bg) {
        var size = scaledSize(srcW, srcH);
        var canvas = document.createElement('canvas');
        canvas.width = size.w;
        canvas.height = size.h;
        var ctx = canvas.getContext('2d');
        if (!ctx) return Promise.reject(new Error('encode'));
        if (mime === 'image/jpeg') {
          ctx.fillStyle = bg;
          ctx.fillRect(0, 0, size.w, size.h);
        }
        ctx.drawImage(bitmap, 0, 0, size.w, size.h);
        return canvasToBlob(canvas, mime, q).then(function (blob) {
          return { blob: blob, w: size.w, h: size.h };
        });
      }

      /**
       * 在 [QUALITY_FLOOR, startQ] 上二分质量，尽量不超过 targetBytes。
       * 命中则取不超过目标的最高质量；始终超限则取体积最小的候选并标记未命中。
       */
      function encodeToTarget(bitmap, srcW, srcH, mime, startQ, bg, targetBytes) {
        var attempts = [];
        function binary(i, a, b) {
          if (i >= 8) return Promise.resolve();
          var mid = (a + b) / 2;
          return encodeOnce(bitmap, srcW, srcH, mime, mid, bg).then(function (res) {
            attempts.push({ res: res, q: mid });
            if (res.blob.size <= targetBytes) return binary(i + 1, mid, b);
            return binary(i + 1, a, mid);
          });
        }
        return binary(0, QUALITY_FLOOR, startQ).then(function () {
          var under = null;
          var smallest = null;
          for (var i = 0; i < attempts.length; i++) {
            var a = attempts[i];
            if (!smallest || a.res.blob.size < smallest.res.blob.size) smallest = a;
            if (a.res.blob.size <= targetBytes) {
              if (!under || a.q > under.q) under = a;
            }
          }
          if (under) return { result: under.res, hit: true, q: under.q };
          return { result: smallest.res, hit: false, q: smallest.q };
        });
      }

      /**
       * 装载源文件：预览、统计、软上限警告。
       * @param {File} file
       * @returns {Promise<void>}
       */
      function loadFile(file) {
        setError('');
        setWarn('');
        outputBlob = null;
        btnDownload.disabled = true;
        previewOut.hidden = true;
        previewOut.removeAttribute('src');
        statsOut.textContent = '';
        ratioEl.textContent = '';
        sourceFile = file;
        fileNameEl.textContent = file.name || '';

        var warns = [];
        if (file.size > SOFT_BYTES) warns.push(msg.large);
        if (/gif/i.test(file.type) || /gif$/i.test(file.name || '')) warns.push(msg.anim);
        if (warns.length) setWarn(warns.join(' '));

        var inUrl = URL.createObjectURL(file);
        previewIn.onload = function () { URL.revokeObjectURL(inUrl); };
        previewIn.onerror = function () { URL.revokeObjectURL(inUrl); };
        previewIn.src = inUrl;
        previewIn.hidden = false;

        return decodeImage(file)
          .then(function (dec) {
            if (dec.w > SOFT_EDGE || dec.h > SOFT_EDGE) {
              setWarn((warnEl.textContent ? warnEl.textContent + ' ' : '') + msg.edge);
            }
            statsIn.textContent = formatStats(file.type || 'image/*', dec.w, dec.h, file.size);
            if (dec.bitmap && typeof dec.bitmap.close === 'function') dec.bitmap.close();
          })
          .catch(function () {
            setError(msg.decode);
            statsIn.textContent = '';
            throw new Error('decode');
          });
      }

      function showResult(res, mime, srcBytes, targetHit) {
        outputBlob = res.blob;
        var base = (sourceFile.name || 'image').replace(/\\.[^.]+$/, '');
        outputName = base + '-compressed.' + extFor(mime);
        btnDownload.disabled = false;
        var outUrl = URL.createObjectURL(res.blob);
        if (previewOut.dataset.url) URL.revokeObjectURL(previewOut.dataset.url);
        previewOut.dataset.url = outUrl;
        previewOut.src = outUrl;
        previewOut.hidden = false;
        statsOut.textContent = formatStats(res.blob.type || mime, res.w, res.h, res.blob.size);
        var pct = srcBytes > 0 ? Math.round((1 - res.blob.size / srcBytes) * 100) : 0;
        ratioEl.textContent = msg.ratioTpl
          .replace('{from}', formatBytes(srcBytes))
          .replace('{to}', formatBytes(res.blob.size))
          .replace('{pct}', String(pct));
        if (mime === 'image/png' && res.blob.size >= srcBytes) {
          setWarn((warnEl.textContent ? warnEl.textContent + ' ' : '') + msg.pngHard);
        }
        if (targetOn.checked) {
          setStatus(targetHit ? msg.targetOk : msg.targetMiss);
        } else {
          setStatus(msg.done);
        }
      }

      /**
       * 执行压缩；返回 Promise，便于示例加载后自动跑通左右预览。
       * @returns {Promise<void>}
       */
      function compress() {
        setError('');
        if (!sourceFile) { setError(msg.empty); return Promise.resolve(); }
        var mime = outputSel.value;
        if (encodeSupport[mime] === false) {
          setError(mime === 'image/webp' ? msg.webpOff : msg.encode);
          return Promise.resolve();
        }
        setStatus(msg.compressing);
        btnCompress.disabled = true;
        var q = quality01();
        var bg = jpegBg();
        var srcBytes = sourceFile.size;
        var wantTarget = targetOn.checked && mime !== 'image/png';
        var targetBytes = Math.max(10, Number(targetKbEl.value) || 200) * 1024;

        return decodeImage(sourceFile)
          .then(function (dec) {
            var bmp = dec.bitmap;
            var p;
            if (wantTarget) {
              p = encodeToTarget(bmp, dec.w, dec.h, mime, q, bg, targetBytes).then(function (pack) {
                if (bmp && typeof bmp.close === 'function') bmp.close();
                return pack;
              });
            } else {
              p = encodeOnce(bmp, dec.w, dec.h, mime, q, bg).then(function (res) {
                if (bmp && typeof bmp.close === 'function') bmp.close();
                return { result: res, hit: true, q: q };
              });
            }
            return p;
          })
          .then(function (pack) {
            showResult(pack.result, mime, srcBytes, pack.hit);
          })
          .catch(function (e) {
            var code = e && e.message;
            if (code === 'decode') setError(msg.decode);
            else if (code === 'mismatch') setError(msg.mismatch);
            else setError(msg.encode);
            setStatus('');
          })
          .then(function () { btnCompress.disabled = false; });
      }

      function download() {
        if (!outputBlob) return;
        var a = document.createElement('a');
        var url = URL.createObjectURL(outputBlob);
        a.href = url;
        a.download = outputName;
        document.body.appendChild(a);
        a.click();
        a.remove();
        setTimeout(function () { URL.revokeObjectURL(url); }, 2000);
      }

      function clearAll() {
        sourceFile = null;
        outputBlob = null;
        fileInput.value = '';
        fileNameEl.textContent = '';
        setWarn(''); setError(''); setStatus('');
        previewIn.hidden = true; previewIn.removeAttribute('src');
        previewOut.hidden = true;
        if (previewOut.dataset.url) { URL.revokeObjectURL(previewOut.dataset.url); delete previewOut.dataset.url; }
        previewOut.removeAttribute('src');
        statsIn.textContent = ''; statsOut.textContent = ''; ratioEl.textContent = '';
        btnDownload.disabled = true;
      }

      /**
       * 生成渐变 JPEG 样例，装载后立刻压缩，使左右预览同时显示。
       * @returns {Promise<void>}
       */
      function loadSample() {
        var c = document.createElement('canvas');
        c.width = 1280; c.height = 800;
        var ctx = c.getContext('2d');
        if (!ctx) return Promise.resolve();
        var g = ctx.createLinearGradient(0, 0, c.width, c.height);
        g.addColorStop(0, '#1d4ed8');
        g.addColorStop(0.5, '#7c3aed');
        g.addColorStop(1, '#db2777');
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, c.width, c.height);
        for (var i = 0; i < 40; i++) {
          ctx.fillStyle = 'rgba(255,255,255,' + (0.05 + (i % 5) * 0.02) + ')';
          ctx.fillRect((i * 37) % c.width, (i * 53) % c.height, 80, 60);
        }
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 48px sans-serif';
        ctx.fillText('Sample photo', 48, 80);
        return new Promise(function (resolve) {
          c.toBlob(function (blob) {
            if (!blob) { resolve(); return; }
            var file = new File([blob], 'sample-compress.jpg', { type: 'image/jpeg' });
            loadFile(file)
              .then(function () { return compress(); })
              .then(resolve)
              .catch(function () { resolve(); });
          }, 'image/jpeg', 0.95);
        });
      }

      drop.addEventListener('dragover', function (e) {
        e.preventDefault(); drop.classList.add('dragover');
      });
      drop.addEventListener('dragleave', function () { drop.classList.remove('dragover'); });
      drop.addEventListener('drop', function (e) {
        e.preventDefault(); drop.classList.remove('dragover');
        var f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) loadFile(f);
      });
      fileInput.addEventListener('change', function () {
        var f = fileInput.files && fileInput.files[0];
        if (f) loadFile(f);
      });
      outputSel.addEventListener('change', syncOptionsUi);
      qualityEl.addEventListener('input', syncOptionsUi);
      resizeOn.addEventListener('change', syncOptionsUi);
      targetOn.addEventListener('change', syncOptionsUi);
      btnCompress.addEventListener('click', function () { compress(); });
      btnDownload.addEventListener('click', download);
      btnSample.addEventListener('click', function () { loadSample(); });
      btnClear.addEventListener('click', clearAll);

      /** 探测编码后立刻加载示例并压缩，首屏直接展示原图与压缩结果。 */
      probeAll().then(function () {
        syncOptionsUi();
        return loadSample();
      });
    })();
  </script>`;

	const toolMeta = getToolBySlug('image-compress');
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
