/**
 * ????????Tier 2??MozJPEG / WebP / AVIF / OxiPNG??????WASM??
 * slug: image-optimizer????????????????import engine.mjs??
 * ??work-tasks/image-optimizer/02-tool-info.md??
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

/** ???????????????????*/
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * ??????????????? + ???? + Tier 2 ????????
 * @param opts.lang ????
 * @param opts.defaultLang ??????
 * @param opts.enabledLangs ??????????????? supportedLangs??
 */
export const renderImageOptimizerPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/image-optimizer';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_image_optimizer_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_image_optimizer_description');

	const navItems = buildToolPageNavItems(opts.lang, opts.defaultLang);

	/** ???????????????????????*/
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
			currentSlug: 'image-optimizer',
			currentAnchor: '#optimizer',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	/**
	 * ???????????????? wasm-feature-detect ??import map
	 *?? engine / jsquash ????????????WASM???
	 */
	const extraHeadHtml = `
  <style>
    .tools-bar { gap: .5rem; }
    .opt-group { gap: .75rem; align-items: center; }
    .io-compare {
      position: relative; width: 100%; max-width: 720px; margin: 0 auto;
      aspect-ratio: 16 / 10; background:
        linear-gradient(45deg, #eee 25%, transparent 25%),
        linear-gradient(-45deg, #eee 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, #eee 75%),
        linear-gradient(-45deg, transparent 75%, #eee 75%);
      background-size: 16px 16px; background-position: 0 0, 0 8px, 8px -8px, -8px 0;
      border: 1px solid #dee2e6; border-radius: .5rem; overflow: hidden; user-select: none;
    }
    /* after ??????before ???????????????? */
    .io-compare > #ioAfter {
      position: absolute; inset: 0; z-index: 0; width: 100%; height: 100%;
      object-fit: contain; pointer-events: none; display: block;
    }
    .io-before-wrap {
      position: absolute; inset: 0; z-index: 1; overflow: hidden; width: 50%;
      border-right: 2px solid #fff; box-shadow: 1px 0 0 rgba(0,0,0,.15);
    }
    .io-before-wrap #ioBefore {
      position: absolute; left: 0; top: 0; height: 100%;
      width: var(--io-full-w, 720px); max-width: none;
      object-fit: contain; pointer-events: none; display: block;
    }
    #ioSlider {
      position: absolute; left: 0; right: 0; bottom: .5rem; z-index: 2;
      width: calc(100% - 1.5rem); margin: 0 .75rem; cursor: ew-resize;
    }
    #ioQuality[disabled], #ioEffort[disabled], #ioMaxEdge[disabled] { opacity: .5; }
    .io-labels { max-width: 720px; margin: 0 auto; }
  </style>
  <script type="importmap">
{
  "imports": {
    "wasm-feature-detect": "/vendor/wasm-feature-detect/dist/esm/index.js"
  }
}
  </script>`;

	const contentHtml = `
    <div id="optimizer" class="tool-page-heading mb-3">
      <h1 class="h4 mb-0">${escapeHtml(t(opts.lang, 'tool_image_optimizer_title'))}</h1>
    </div>

    <label class="tool-dropzone io-drop mb-3" id="ioDrop" for="ioFile">
      <input type="file" id="ioFile" accept="image/png,image/jpeg,image/webp,image/gif,image/bmp,image/avif,image/*">
      <span class="tool-dropzone-title">${escapeHtml(t(opts.lang, 'tool_image_optimizer_choose_file'))}</span>
      <span class="tool-dropzone-hint">${escapeHtml(t(opts.lang, 'tool_image_optimizer_drop_hint'))}</span>
      <span id="ioFileName" class="tool-dropzone-file"></span>
    </label>

    <div class="d-flex align-items-center tools-bar mb-2 flex-wrap">
      <button type="button" id="ioBtnLoad" class="btn btn-primary btn-sm">${escapeHtml(t(opts.lang, 'tool_image_optimizer_load_engine'))}</button>
      <button type="button" id="ioBtnOptimize" class="btn btn-primary btn-sm" disabled>${escapeHtml(t(opts.lang, 'tool_image_optimizer_optimize'))}</button>
      <button type="button" id="ioBtnCancel" class="btn btn-outline-danger btn-sm" disabled>${escapeHtml(t(opts.lang, 'tool_image_optimizer_cancel'))}</button>
      <button type="button" id="ioBtnDownload" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(t(opts.lang, 'tool_image_optimizer_download'))}</button>
      <button type="button" id="ioBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_image_optimizer_sample'))}</button>
      <button type="button" id="ioBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_image_optimizer_clear'))}</button>
    </div>

    <div class="d-flex align-items-center opt-group mb-2 flex-wrap">
      <label class="form-label mb-0" for="ioCodec">${escapeHtml(t(opts.lang, 'tool_image_optimizer_codec_label'))}</label>
      <select id="ioCodec" class="form-select form-select-sm" style="width:auto;max-width:14rem;">
        <option value="mozjpeg" selected>${escapeHtml(t(opts.lang, 'tool_image_optimizer_codec_mozjpeg'))}</option>
        <option value="webp">${escapeHtml(t(opts.lang, 'tool_image_optimizer_codec_webp'))}</option>
        <option value="avif">${escapeHtml(t(opts.lang, 'tool_image_optimizer_codec_avif'))}</option>
        <option value="oxipng">${escapeHtml(t(opts.lang, 'tool_image_optimizer_codec_oxipng'))}</option>
      </select>
      <div class="form-check mb-0">
        <input class="form-check-input" type="checkbox" id="ioResizeOn" checked>
        <label class="form-check-label" for="ioResizeOn">${escapeHtml(t(opts.lang, 'tool_image_optimizer_resize_on'))}</label>
      </div>
      <label class="form-label mb-0" for="ioMaxEdge">${escapeHtml(t(opts.lang, 'tool_image_optimizer_max_edge_label'))}</label>
      <input type="number" id="ioMaxEdge" class="form-control form-control-sm" min="64" max="8192" value="1920" step="1" style="width:6rem;">
      <span class="small text-muted">px</span>
    </div>

    <div class="d-flex align-items-center opt-group mb-2 flex-wrap">
      <label class="form-label mb-0" for="ioQuality" id="ioQualityLabel">${escapeHtml(t(opts.lang, 'tool_image_optimizer_quality_label'))}</label>
      <input type="range" id="ioQuality" min="1" max="100" value="75" step="1" style="width:140px;">
      <span id="ioQualityVal" class="small text-muted">75</span>
      <label class="form-label mb-0 ms-2" for="ioEffort">${escapeHtml(t(opts.lang, 'tool_image_optimizer_effort_label'))}</label>
      <input type="range" id="ioEffort" min="1" max="10" value="5" step="1" style="width:120px;">
      <span id="ioEffortVal" class="small text-muted">5</span>
    </div>

    <p id="ioWarn" class="small text-warning mb-2" style="display:none;" role="status"></p>
    <p id="ioError" class="small text-danger mb-2" style="display:none;" role="alert"></p>
    <p id="ioStatus" class="small text-muted mb-2" role="status"></p>

    <div class="d-flex justify-content-between io-labels small text-muted mb-1">
      <span>${escapeHtml(t(opts.lang, 'tool_image_optimizer_preview_before'))}</span>
      <span>${escapeHtml(t(opts.lang, 'tool_image_optimizer_preview_after'))}</span>
    </div>
    <div class="io-compare mb-2" id="ioCompare" hidden>
      <img id="ioAfter" alt="">
      <div class="io-before-wrap" id="ioBeforeWrap"><img id="ioBefore" alt=""></div>
      <input type="range" id="ioSlider" min="0" max="100" value="50" aria-label="${escapeHtml(t(opts.lang, 'tool_image_optimizer_preview_before'))} / ${escapeHtml(t(opts.lang, 'tool_image_optimizer_preview_after'))}">
    </div>
    <p id="ioStats" class="small text-muted mb-1"></p>
    <p id="ioRatio" class="small fw-semibold mb-3"></p>
    <p class="tool-lead mb-4">${escapeHtml(description)}</p>`;

	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: 'tool_image_optimizer',
		mode: 'rules',
		usecaseCount: 3,
		ruleItemCount: 4,
	});

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{ label: 'jSquash', href: 'https://github.com/jamsinclair/jSquash' },
			{ label: 'MozJPEG', href: 'https://github.com/mozilla/mozjpeg' },
			{ label: 'WebP ??Google Developers', href: 'https://developers.google.com/speed/webp' },
			{ label: 'AV1 Image File Format (AVIF)', href: 'https://aomediacodec.github.io/av1-avif/' },
		],
	});

	/**
	 * ???????????ImageData ?????????????engine.encodeImage ????????
	 * Tier 2???? import WASM??????????????????
	 * ?????????????????
	 */
	const extraBodyHtml = `
  <script>
    (function () {
      /** ?????????? */
      var SOFT_BYTES = 25 * 1024 * 1024;
      /** ????????*/
      var SOFT_EDGE = 8192;
      /** ??????????????*/
      var ENGINE_URL = '/tools/image-optimizer/engine.mjs';

      var drop = document.getElementById('ioDrop');
      var fileInput = document.getElementById('ioFile');
      var fileNameEl = document.getElementById('ioFileName');
      var codecSel = document.getElementById('ioCodec');
      var resizeOn = document.getElementById('ioResizeOn');
      var maxEdgeEl = document.getElementById('ioMaxEdge');
      var qualityEl = document.getElementById('ioQuality');
      var qualityVal = document.getElementById('ioQualityVal');
      var qualityLabel = document.getElementById('ioQualityLabel');
      var effortEl = document.getElementById('ioEffort');
      var effortVal = document.getElementById('ioEffortVal');
      var btnLoad = document.getElementById('ioBtnLoad');
      var btnOptimize = document.getElementById('ioBtnOptimize');
      var btnCancel = document.getElementById('ioBtnCancel');
      var btnDownload = document.getElementById('ioBtnDownload');
      var btnSample = document.getElementById('ioBtnSample');
      var btnClear = document.getElementById('ioBtnClear');
      var warnEl = document.getElementById('ioWarn');
      var errEl = document.getElementById('ioError');
      var statusEl = document.getElementById('ioStatus');
      var compareEl = document.getElementById('ioCompare');
      var beforeWrap = document.getElementById('ioBeforeWrap');
      var imgBefore = document.getElementById('ioBefore');
      var imgAfter = document.getElementById('ioAfter');
      var slider = document.getElementById('ioSlider');
      var statsEl = document.getElementById('ioStats');
      var ratioEl = document.getElementById('ioRatio');

      var msg = {
        empty: ${JSON.stringify(t(opts.lang, 'tool_image_optimizer_empty'))},
        engineNeeded: ${JSON.stringify(t(opts.lang, 'tool_image_optimizer_engine_needed'))},
        engineLoading: ${JSON.stringify(t(opts.lang, 'tool_image_optimizer_engine_loading'))},
        engineReady: ${JSON.stringify(t(opts.lang, 'tool_image_optimizer_engine_ready'))},
        engineFailed: ${JSON.stringify(t(opts.lang, 'tool_image_optimizer_engine_failed'))},
        optimizing: ${JSON.stringify(t(opts.lang, 'tool_image_optimizer_optimizing'))},
        avifSlow: ${JSON.stringify(t(opts.lang, 'tool_image_optimizer_avif_slow'))},
        cancelled: ${JSON.stringify(t(opts.lang, 'tool_image_optimizer_cancelled'))},
        done: ${JSON.stringify(t(opts.lang, 'tool_image_optimizer_status_done'))},
        decode: ${JSON.stringify(t(opts.lang, 'tool_image_optimizer_err_decode'))},
        encode: ${JSON.stringify(t(opts.lang, 'tool_image_optimizer_err_encode'))},
        large: ${JSON.stringify(t(opts.lang, 'tool_image_optimizer_warn_large'))},
        edge: ${JSON.stringify(t(opts.lang, 'tool_image_optimizer_warn_edge'))},
        anim: ${JSON.stringify(t(opts.lang, 'tool_image_optimizer_warn_animation'))},
        statsTpl: ${JSON.stringify(t(opts.lang, 'tool_image_optimizer_stats_tpl'))},
        ratioTpl: ${JSON.stringify(t(opts.lang, 'tool_image_optimizer_ratio_tpl'))}
      };

      /** @type {File|null} ????*/
      var sourceFile = null;
      /** @type {ImageData|null} ???????????? */
      var sourceImageData = null;
      /** @type {string|null} before ?? object URL */
      var beforeUrl = null;
      /** @type {Blob|null} ???? */
      var outputBlob = null;
      /** @type {string|null} after ?? object URL */
      var afterUrl = null;
      var outputName = 'optimized.jpg';
      /** ??????warm */
      var engineReady = false;
      /** @type {null|{ encodeImage: Function, warmEngine: Function }} */
      var engineMod = null;
      /** ??????*/
      var optimizing = false;
      /** ???????best-effort???????? */
      var cancelled = false;
      /** ?????????????????????? */
      var encodeGen = 0;

      /**
       * ???????????
       * @param {string} [text]
       */
      function setWarn(text) {
        if (!text) { warnEl.style.display = 'none'; warnEl.textContent = ''; return; }
        warnEl.textContent = text;
        warnEl.style.display = '';
      }

      /**
       * ???????????
       * @param {string} [text]
       */
      function setError(text) {
        if (!text) { errEl.style.display = 'none'; errEl.textContent = ''; return; }
        errEl.textContent = text;
        errEl.style.display = '';
      }

      /** @param {string} [text] */
      function setStatus(text) { statusEl.textContent = text || ''; }

      /**
       * ????????
       * @param {number} n
       * @returns {string}
       */
      function formatBytes(n) {
        if (n < 1024) return n + ' B';
        if (n < 1024 * 1024) return (n / 1024).toFixed(1) + ' KB';
        return (n / (1024 * 1024)).toFixed(2) + ' MB';
      }

      /**
       * ????????????
       * @param {string} codec
       * @param {number} w
       * @param {number} h
       * @param {number} bytes
       * @param {number} ms
       * @returns {string}
       */
      function formatStats(codec, w, h, bytes, ms) {
        return msg.statsTpl
          .replace('{codec}', codec || '—')
          .replace('{w}', String(w))
          .replace('{h}', String(h))
          .replace('{bytes}', formatBytes(bytes))
          .replace('{ms}', String(Math.max(0, Math.round(ms))));
      }

      /**
       * ????/????????OxiPNG ?? quality???
       */
      function syncOptionsUi() {
        var isOxipng = codecSel.value === 'oxipng';
        qualityEl.disabled = isOxipng;
        if (qualityLabel) qualityLabel.style.opacity = isOxipng ? '0.5' : '';
        qualityVal.textContent = String(qualityEl.value);
        effortVal.textContent = String(effortEl.value);
        maxEdgeEl.disabled = !resizeOn.checked;
        btnOptimize.disabled = !engineReady || !sourceImageData || optimizing;
        btnCancel.disabled = !optimizing;
        btnLoad.disabled = engineReady || optimizing;
      }

      /**
       * ???????? before ?????
       */
      function syncCompareSlider() {
        var pct = Math.max(0, Math.min(100, Number(slider.value) || 50));
        beforeWrap.style.width = pct + '%';
        var fullW = compareEl.clientWidth || 720;
        compareEl.style.setProperty('--io-full-w', fullW + 'px');
        imgBefore.style.width = fullW + 'px';
      }

      /**
       * ?? Blob ??ImageBitmap ??HTMLImageElement??
       * @param {Blob} blob
       * @returns {Promise<{bitmap: ImageBitmap|HTMLImageElement, w: number, h: number}>}
       */
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

      /**
       * ??bitmap ?? canvas ????ImageData???????????????
       * @param {ImageBitmap|HTMLImageElement} bitmap
       * @param {number} srcW
       * @param {number} srcH
       * @param {boolean} doResize
       * @returns {ImageData}
       */
      function bitmapToImageData(bitmap, srcW, srcH, doResize) {
        var w = srcW;
        var h = srcH;
        if (doResize && resizeOn.checked) {
          var maxE = Math.max(64, Math.min(SOFT_EDGE, Number(maxEdgeEl.value) || 1920));
          var long = Math.max(srcW, srcH);
          if (long > maxE) {
            var scale = maxE / long;
            w = Math.max(1, Math.round(srcW * scale));
            h = Math.max(1, Math.round(srcH * scale));
          }
        }
        var canvas = document.createElement('canvas');
        canvas.width = w;
        canvas.height = h;
        var ctx = canvas.getContext('2d');
        if (!ctx) throw new Error('encode');
        ctx.drawImage(bitmap, 0, 0, w, h);
        return ctx.getImageData(0, 0, w, h);
      }

      /**
       * ??????????ImageData????before ???????????
       * @param {File} file
       * @returns {Promise<void>}
       */
      function loadFile(file) {
        setError('');
        setWarn('');
        outputBlob = null;
        btnDownload.disabled = true;
        if (afterUrl) { URL.revokeObjectURL(afterUrl); afterUrl = null; }
        imgAfter.removeAttribute('src');
        statsEl.textContent = '';
        ratioEl.textContent = '';
        sourceFile = file;
        sourceImageData = null;
        fileNameEl.textContent = file.name || '';

        var warns = [];
        if (file.size > SOFT_BYTES) warns.push(msg.large);
        if (/gif/i.test(file.type) || /gif$/i.test(file.name || '')) warns.push(msg.anim);
        if (warns.length) setWarn(warns.join(' '));

        return decodeImage(file)
          .then(function (dec) {
            if (dec.w > SOFT_EDGE || dec.h > SOFT_EDGE) {
              setWarn((warnEl.textContent ? warnEl.textContent + ' ' : '') + msg.edge);
            }
            /* ???? ImageData???????? */
            sourceImageData = bitmapToImageData(dec.bitmap, dec.w, dec.h, false);
            if (dec.bitmap && typeof dec.bitmap.close === 'function') dec.bitmap.close();

            if (beforeUrl) URL.revokeObjectURL(beforeUrl);
            beforeUrl = URL.createObjectURL(file);
            imgBefore.src = beforeUrl;
            imgAfter.src = beforeUrl; /* ??????after ?? before?????? */
            compareEl.hidden = false;
            requestAnimationFrame(syncCompareSlider);
            syncOptionsUi();
          })
          .catch(function () {
            setError(msg.decode);
            sourceImageData = null;
            syncOptionsUi();
            throw new Error('decode');
          });
      }

      /**
       * ???import ????warmEngine?Tier 2 ?????
       * @returns {Promise<void>}
       */
      function loadEngine() {
        if (engineReady) return Promise.resolve();
        setError('');
        setStatus(msg.engineLoading);
        btnLoad.disabled = true;
        return import(ENGINE_URL)
          .then(function (mod) {
            engineMod = mod;
            return mod.warmEngine();
          })
          .then(function () {
            engineReady = true;
            setStatus(msg.engineReady);
            syncOptionsUi();
          })
          .catch(function () {
            engineMod = null;
            engineReady = false;
            setError(msg.engineFailed);
            setStatus('');
            syncOptionsUi();
          });
      }

      /**
       * ??????????after ?????????????
       * @param {{ buffer: ArrayBuffer, mime: string, ext: string, codec: string }} enc
       * @param {number} w
       * @param {number} h
       * @param {number} ms
       * @param {number} srcBytes
       */
      function showResult(enc, w, h, ms, srcBytes) {
        var blob = new Blob([enc.buffer], { type: enc.mime });
        outputBlob = blob;
        var base = ((sourceFile && sourceFile.name) || 'image').replace(/\\.[^.]+$/, '');
        outputName = base + '-optimized.' + enc.ext;
        btnDownload.disabled = false;

        if (afterUrl) URL.revokeObjectURL(afterUrl);
        afterUrl = URL.createObjectURL(blob);
        imgAfter.src = afterUrl;
        compareEl.hidden = false;
        requestAnimationFrame(syncCompareSlider);

        statsEl.textContent = formatStats(enc.codec, w, h, blob.size, ms);
        var pct = srcBytes > 0 ? Math.round((1 - blob.size / srcBytes) * 100) : 0;
        ratioEl.textContent = msg.ratioTpl
          .replace('{from}', formatBytes(srcBytes))
          .replace('{to}', formatBytes(blob.size))
          .replace('{pct}', String(pct));
        setStatus(msg.done);
      }

      /**
       * ????????????encodeImage?AVIF ????????????????
       * @returns {Promise<void>}
       */
      function optimize() {
        setError('');
        if (!sourceFile || !sourceImageData) { setError(msg.empty); return Promise.resolve(); }
        if (!engineReady || !engineMod) { setError(msg.engineNeeded); return Promise.resolve(); }

        cancelled = false;
        encodeGen += 1;
        var myGen = encodeGen;
        optimizing = true;
        syncOptionsUi();

        var codec = codecSel.value;
        var quality = Number(qualityEl.value) || 75;
        var effort = Number(effortEl.value) || 5;
        var srcBytes = sourceFile.size;

        if (codec === 'avif') {
          setWarn((warnEl.textContent && warnEl.textContent.indexOf(msg.avifSlow) >= 0)
            ? warnEl.textContent
            : ((warnEl.textContent ? warnEl.textContent + ' ' : '') + msg.avifSlow));
        }
        setStatus(msg.optimizing);

        var t0 = (typeof performance !== 'undefined' && performance.now) ? performance.now() : Date.now();

        /**
         * ????sourceImageData / ?????????????
         * ??????ImageData ?????????????
         */
        var workDataPromise;
        if (resizeOn.checked) {
          workDataPromise = decodeImage(sourceFile).then(function (dec) {
            var data = bitmapToImageData(dec.bitmap, dec.w, dec.h, true);
            if (dec.bitmap && typeof dec.bitmap.close === 'function') dec.bitmap.close();
            return data;
          });
        } else {
          workDataPromise = Promise.resolve(sourceImageData);
        }

        return workDataPromise
          .then(function (imageData) {
            if (cancelled || myGen !== encodeGen) return null;
            return engineMod.encodeImage(codec, imageData, { quality: quality, effort: effort })
              .then(function (enc) {
                return { enc: enc, w: imageData.width, h: imageData.height };
              });
          })
          .then(function (pack) {
            var t1 = (typeof performance !== 'undefined' && performance.now) ? performance.now() : Date.now();
            /* ??????????*/
            if (cancelled || myGen !== encodeGen) {
              setStatus(msg.cancelled);
              return;
            }
            if (!pack) {
              setStatus(msg.cancelled);
              return;
            }
            showResult(pack.enc, pack.w, pack.h, t1 - t0, srcBytes);
          })
          .catch(function (e) {
            if (cancelled || myGen !== encodeGen) {
              setStatus(msg.cancelled);
              return;
            }
            var code = e && e.message;
            if (code === 'decode') setError(msg.decode);
            else setError(msg.encode);
            setStatus('');
          })
          .then(function () {
            optimizing = false;
            syncOptionsUi();
          });
      }

      /** ?????????best-effort???*/
      function cancelOptimize() {
        if (!optimizing) return;
        cancelled = true;
        encodeGen += 1;
        setStatus(msg.cancelled);
        optimizing = false;
        syncOptionsUi();
      }

      /** ???? Blob ????*/
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

      /** ????????????*/
      function clearAll() {
        cancelled = true;
        encodeGen += 1;
        optimizing = false;
        sourceFile = null;
        sourceImageData = null;
        outputBlob = null;
        fileInput.value = '';
        fileNameEl.textContent = '';
        setWarn(''); setError(''); setStatus(engineReady ? msg.engineReady : '');
        if (beforeUrl) { URL.revokeObjectURL(beforeUrl); beforeUrl = null; }
        if (afterUrl) { URL.revokeObjectURL(afterUrl); afterUrl = null; }
        imgBefore.removeAttribute('src');
        imgAfter.removeAttribute('src');
        compareEl.hidden = true;
        statsEl.textContent = '';
        ratioEl.textContent = '';
        btnDownload.disabled = true;
        syncOptionsUi();
      }

      /**
       * ???? JPEG ?????? before??????????????????
       * @returns {Promise<void>}
       */
      function loadSample() {
        var c = document.createElement('canvas');
        c.width = 1280; c.height = 800;
        var ctx = c.getContext('2d');
        if (!ctx) return Promise.resolve();
        var g = ctx.createLinearGradient(0, 0, c.width, c.height);
        g.addColorStop(0, '#0f766e');
        g.addColorStop(0.5, '#2563eb');
        g.addColorStop(1, '#7c3aed');
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, c.width, c.height);
        for (var i = 0; i < 40; i++) {
          ctx.fillStyle = 'rgba(255,255,255,' + (0.05 + (i % 5) * 0.02) + ')';
          ctx.fillRect((i * 37) % c.width, (i * 53) % c.height, 80, 60);
        }
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 48px sans-serif';
        ctx.fillText('Sample optimize', 48, 80);
        return new Promise(function (resolve) {
          c.toBlob(function (blob) {
            if (!blob) { resolve(); return; }
            var file = new File([blob], 'sample-optimize.jpg', { type: 'image/jpeg' });
            loadFile(file).then(resolve).catch(function () { resolve(); });
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
      codecSel.addEventListener('change', syncOptionsUi);
      qualityEl.addEventListener('input', syncOptionsUi);
      effortEl.addEventListener('input', syncOptionsUi);
      resizeOn.addEventListener('change', syncOptionsUi);
      slider.addEventListener('input', syncCompareSlider);
      window.addEventListener('resize', syncCompareSlider);
      btnLoad.addEventListener('click', function () { loadEngine(); });
      btnOptimize.addEventListener('click', function () { optimize(); });
      btnCancel.addEventListener('click', cancelOptimize);
      btnDownload.addEventListener('click', download);
      btnSample.addEventListener('click', function () { loadSample(); });
      btnClear.addEventListener('click', clearAll);

      syncOptionsUi();
      /* ???????????? WASM */
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('image-optimizer');
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
