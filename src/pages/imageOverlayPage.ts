/**
 * Image-overlay tool page: layer one image on a base with opacity, position, scale, and blend modes.
 * slug: image-overlay (single page; no blend-mode or watermark thin variant URLs).
 * Spec: work-tasks/image-overlay/02-tool-info.md
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

/** Prefix pathname with lang when not default. */
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * Render the overlay-images tool page.
 * @param opts.lang Active UI language
 * @param opts.defaultLang Default (unprefixed) language
 * @param opts.enabledLangs Enabled language list
 */
export const renderImageOverlayPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/image-overlay';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_image_overlay_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_image_overlay_description');

	const navItems = buildToolPageNavItems(opts.lang, opts.defaultLang);

	/** Always include lang segment for hreflang map values. */
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
			currentSlug: 'image-overlay',
			currentAnchor: '#converter',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	const extraHeadHtml = `
  <style>
    .tools-bar { gap: .5rem; }
    #imgOvPreview {
      max-width: 100%; max-height: 420px;
      border: 1px solid #dee2e6; border-radius: .5rem; background: #fff;
      cursor: crosshair; touch-action: none;
    }
    .img-ov-preview-wrap { min-height: 120px; display: flex; align-items: center; justify-content: center; }
    .img-ov-pos-grid { display: grid; grid-template-columns: repeat(3, 2rem); gap: .25rem; }
    .img-ov-pos-grid .btn { padding: .15rem .35rem; line-height: 1.1; }
    .img-ov-drop-sm { min-height: 5.5rem; }
  </style>`;

	const contentHtml = `
    <div id="converter" class="tool-page-heading mb-3">
      <h1 class="h4 mb-0">${escapeHtml(t(opts.lang, 'tool_image_overlay_title'))}</h1>
    </div>

    <div class="row g-2 mb-3">
      <div class="col-md-6">
        <label class="tool-dropzone img-ov-drop-sm mb-0" id="imgOvDropBase" for="imgOvFileBase">
          <input type="file" id="imgOvFileBase" accept="image/jpeg,image/png,image/webp,image/gif,image/*">
          <span class="tool-dropzone-title">${escapeHtml(t(opts.lang, 'tool_image_overlay_choose_base'))}</span>
          <span class="tool-dropzone-hint">${escapeHtml(t(opts.lang, 'tool_image_overlay_drop_hint_base'))}</span>
          <span id="imgOvBaseName" class="tool-dropzone-file"></span>
        </label>
      </div>
      <div class="col-md-6">
        <label class="tool-dropzone img-ov-drop-sm mb-0" id="imgOvDropOverlay" for="imgOvFileOverlay">
          <input type="file" id="imgOvFileOverlay" accept="image/jpeg,image/png,image/webp,image/gif,image/*">
          <span class="tool-dropzone-title">${escapeHtml(t(opts.lang, 'tool_image_overlay_choose_overlay'))}</span>
          <span class="tool-dropzone-hint">${escapeHtml(t(opts.lang, 'tool_image_overlay_drop_hint_overlay'))}</span>
          <span id="imgOvOverlayName" class="tool-dropzone-file"></span>
        </label>
      </div>
    </div>

    <div class="row g-2 mb-2 align-items-end">
      <div class="col-6 col-md-2">
        <label class="form-label mb-0" for="imgOvOpacity">${escapeHtml(t(opts.lang, 'tool_image_overlay_opacity_label'))}</label>
        <input type="range" id="imgOvOpacity" class="form-range" min="0" max="100" value="80">
        <span id="imgOvOpacityVal" class="small">80%</span>
      </div>
      <div class="col-6 col-md-2">
        <label class="form-label mb-0" for="imgOvScale">${escapeHtml(t(opts.lang, 'tool_image_overlay_scale_label'))}</label>
        <input type="number" id="imgOvScale" class="form-control form-control-sm" min="1" max="500" value="100">
      </div>
      <div class="col-6 col-md-2">
        <label class="form-label mb-0" for="imgOvX">${escapeHtml(t(opts.lang, 'tool_image_overlay_x_label'))}</label>
        <input type="number" id="imgOvX" class="form-control form-control-sm" min="0" value="0">
      </div>
      <div class="col-6 col-md-2">
        <label class="form-label mb-0" for="imgOvY">${escapeHtml(t(opts.lang, 'tool_image_overlay_y_label'))}</label>
        <input type="number" id="imgOvY" class="form-control form-control-sm" min="0" value="0">
      </div>
      <div class="col-12 col-md-4">
        <span class="form-label mb-0 d-block">${escapeHtml(t(opts.lang, 'tool_image_overlay_position_label'))}</span>
        <div class="img-ov-pos-grid" role="group" aria-label="${escapeHtml(t(opts.lang, 'tool_image_overlay_position_label'))}">
          <button type="button" class="btn btn-outline-secondary btn-sm img-ov-pos" data-pos="tl" title="${escapeHtml(t(opts.lang, 'tool_image_overlay_pos_tl'))}">&#8598;</button>
          <button type="button" class="btn btn-outline-secondary btn-sm img-ov-pos" data-pos="tc" title="${escapeHtml(t(opts.lang, 'tool_image_overlay_pos_tc'))}">&#8593;</button>
          <button type="button" class="btn btn-outline-secondary btn-sm img-ov-pos" data-pos="tr" title="${escapeHtml(t(opts.lang, 'tool_image_overlay_pos_tr'))}">&#8599;</button>
          <button type="button" class="btn btn-outline-secondary btn-sm img-ov-pos" data-pos="ml" title="${escapeHtml(t(opts.lang, 'tool_image_overlay_pos_ml'))}">&#8592;</button>
          <button type="button" class="btn btn-outline-secondary btn-sm img-ov-pos" data-pos="mc" title="${escapeHtml(t(opts.lang, 'tool_image_overlay_pos_mc'))}">&#9679;</button>
          <button type="button" class="btn btn-outline-secondary btn-sm img-ov-pos" data-pos="mr" title="${escapeHtml(t(opts.lang, 'tool_image_overlay_pos_mr'))}">&#8594;</button>
          <button type="button" class="btn btn-outline-secondary btn-sm img-ov-pos" data-pos="bl" title="${escapeHtml(t(opts.lang, 'tool_image_overlay_pos_bl'))}">&#8601;</button>
          <button type="button" class="btn btn-outline-secondary btn-sm img-ov-pos" data-pos="bc" title="${escapeHtml(t(opts.lang, 'tool_image_overlay_pos_bc'))}">&#8595;</button>
          <button type="button" class="btn btn-outline-secondary btn-sm img-ov-pos" data-pos="br" title="${escapeHtml(t(opts.lang, 'tool_image_overlay_pos_br'))}">&#8600;</button>
        </div>
      </div>
    </div>

    <div class="row g-2 mb-2">
      <div class="col-6 col-md-3">
        <label class="form-label mb-0" for="imgOvBlend">${escapeHtml(t(opts.lang, 'tool_image_overlay_blend_label'))}</label>
        <select id="imgOvBlend" class="form-select form-select-sm">
          <option value="source-over">${escapeHtml(t(opts.lang, 'tool_image_overlay_blend_source_over'))}</option>
          <option value="multiply">${escapeHtml(t(opts.lang, 'tool_image_overlay_blend_multiply'))}</option>
          <option value="screen">${escapeHtml(t(opts.lang, 'tool_image_overlay_blend_screen'))}</option>
          <option value="overlay">${escapeHtml(t(opts.lang, 'tool_image_overlay_blend_overlay'))}</option>
          <option value="darken">${escapeHtml(t(opts.lang, 'tool_image_overlay_blend_darken'))}</option>
          <option value="lighten">${escapeHtml(t(opts.lang, 'tool_image_overlay_blend_lighten'))}</option>
        </select>
      </div>
      <div class="col-6 col-md-2">
        <label class="form-label mb-0" for="imgOvFormat">${escapeHtml(t(opts.lang, 'tool_image_overlay_format_label'))}</label>
        <select id="imgOvFormat" class="form-select form-select-sm">
          <option value="image/jpeg">${escapeHtml(t(opts.lang, 'tool_image_overlay_format_jpeg'))}</option>
          <option value="image/webp" selected>${escapeHtml(t(opts.lang, 'tool_image_overlay_format_webp'))}</option>
          <option value="image/png">${escapeHtml(t(opts.lang, 'tool_image_overlay_format_png'))}</option>
        </select>
      </div>
      <div class="col-6 col-md-2">
        <label class="form-label mb-0" for="imgOvQuality">${escapeHtml(t(opts.lang, 'tool_image_overlay_quality_label'))}</label>
        <input type="range" id="imgOvQuality" class="form-range" min="50" max="100" value="90" style="width:8rem;">
        <span id="imgOvQualityVal" class="small ms-1">0.90</span>
      </div>
      <div class="col-6 col-md-3" id="imgOvJpegBgWrap">
        <label class="form-label mb-0" for="imgOvJpegBg">${escapeHtml(t(opts.lang, 'tool_image_overlay_jpeg_bg_label'))}</label>
        <input type="color" id="imgOvJpegBg" class="form-control form-control-color form-control-sm" value="#ffffff">
      </div>
    </div>

    <div class="d-flex align-items-center tools-bar mb-2 flex-wrap">
      <button type="button" id="imgOvBtnApply" class="btn btn-primary btn-sm">${escapeHtml(t(opts.lang, 'tool_image_overlay_overlay'))}</button>
      <button type="button" id="imgOvBtnDownload" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(t(opts.lang, 'tool_image_overlay_download'))}</button>
      <button type="button" id="imgOvBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_image_overlay_sample'))}</button>
      <button type="button" id="imgOvBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_image_overlay_clear'))}</button>
    </div>

    <p id="imgOvWarn" class="small text-warning mb-2" style="display:none;" role="status"></p>
    <p id="imgOvError" class="small text-danger mb-2" style="display:none;" role="alert"></p>
    <p id="imgOvStatus" class="small text-muted mb-2" role="status"></p>

    <div class="mb-3">
      <label class="form-label">${escapeHtml(t(opts.lang, 'tool_image_overlay_preview_label'))}</label>
      <div class="img-ov-preview-wrap">
        <canvas id="imgOvPreview" hidden></canvas>
      </div>
    </div>

    <p class="tool-lead mb-4">${escapeHtml(description)}</p>`;

	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: 'tool_image_overlay',
		mode: 'rules',
		usecaseCount: 3,
		ruleItemCount: 4,
	});

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{ label: 'MDN — globalCompositeOperation', href: 'https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation' },
			{ label: 'MDN — globalAlpha', href: 'https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalAlpha' },
			{ label: 'MDN — CanvasRenderingContext2D.drawImage()', href: 'https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage' },
		],
	});

	/**
	 * Client script: decode base + overlay, live preview with drag, composite export.
	 */
	const extraBodyHtml = `
  <script>
    (function () {
      /** Soft warn when any single file exceeds this size (bytes). */
      var SOFT_BYTES = 25 * 1024 * 1024;
      /** Soft warn when base canvas edge exceeds this (px). */
      var SOFT_EDGE = 8192;
      /** Max preview display edge (px) before downscaling for screen. */
      var PREVIEW_MAX_EDGE = 480;

      var dropBase = document.getElementById('imgOvDropBase');
      var dropOverlay = document.getElementById('imgOvDropOverlay');
      var fileBase = document.getElementById('imgOvFileBase');
      var fileOverlay = document.getElementById('imgOvFileOverlay');
      var baseNameEl = document.getElementById('imgOvBaseName');
      var overlayNameEl = document.getElementById('imgOvOverlayName');
      var opacityEl = document.getElementById('imgOvOpacity');
      var opacityVal = document.getElementById('imgOvOpacityVal');
      var scaleEl = document.getElementById('imgOvScale');
      var xEl = document.getElementById('imgOvX');
      var yEl = document.getElementById('imgOvY');
      var blendEl = document.getElementById('imgOvBlend');
      var formatEl = document.getElementById('imgOvFormat');
      var qualityEl = document.getElementById('imgOvQuality');
      var qualityVal = document.getElementById('imgOvQualityVal');
      var jpegBgWrap = document.getElementById('imgOvJpegBgWrap');
      var jpegBgEl = document.getElementById('imgOvJpegBg');
      var btnApply = document.getElementById('imgOvBtnApply');
      var btnDownload = document.getElementById('imgOvBtnDownload');
      var btnSample = document.getElementById('imgOvBtnSample');
      var btnClear = document.getElementById('imgOvBtnClear');
      var warnEl = document.getElementById('imgOvWarn');
      var errEl = document.getElementById('imgOvError');
      var statusEl = document.getElementById('imgOvStatus');
      var preview = document.getElementById('imgOvPreview');

      var msg = {
        emptyBase: ${JSON.stringify(t(opts.lang, 'tool_image_overlay_empty_base'))},
        emptyOverlay: ${JSON.stringify(t(opts.lang, 'tool_image_overlay_empty_overlay'))},
        decodeFail: ${JSON.stringify(t(opts.lang, 'tool_image_overlay_err_decode'))},
        encodeFail: ${JSON.stringify(t(opts.lang, 'tool_image_overlay_err_encode'))},
        large: ${JSON.stringify(t(opts.lang, 'tool_image_overlay_warn_large'))},
        edge: ${JSON.stringify(t(opts.lang, 'tool_image_overlay_warn_edge'))},
        working: ${JSON.stringify(t(opts.lang, 'tool_image_overlay_status_working'))},
        done: ${JSON.stringify(t(opts.lang, 'tool_image_overlay_status_done'))}
      };

      /**
       * @typedef {{ file: File, bitmap: ImageBitmap|HTMLImageElement, w: number, h: number }} LayerState
       */

      /** @type {LayerState|null} */
      var baseLayer = null;
      /** @type {LayerState|null} */
      var overlayLayer = null;
      /** @type {Blob|null} Last exported blob for download. */
      var resultBlob = null;
      /** Display scale: preview pixels per source pixel. */
      var displayScale = 1;
      /** Drag state for moving overlay on preview. */
      var drag = { active: false, offsetX: 0, offsetY: 0 };

      /** Show or hide warning line. */
      function setWarn(text) {
        if (!text) { warnEl.style.display = 'none'; warnEl.textContent = ''; return; }
        warnEl.textContent = text;
        warnEl.style.display = '';
      }

      /** Show or hide error line. */
      function setError(text) {
        if (!text) { errEl.style.display = 'none'; errEl.textContent = ''; return; }
        errEl.textContent = text;
        errEl.style.display = '';
      }

      /** Update status line. */
      function setStatus(text) {
        statusEl.textContent = text || '';
      }

      /**
       * Decode blob to ImageBitmap or HTMLImageElement.
       * @param {Blob} blob
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

      /** Close bitmap if ImageBitmap. */
      function disposeLayer(layer) {
        if (!layer) return;
        if (layer.bitmap && typeof layer.bitmap.close === 'function') layer.bitmap.close();
      }

      /** Read numeric control values with sane clamps. */
      function readControls() {
        var opacity = Math.max(0, Math.min(100, parseInt(opacityEl.value, 10) || 0));
        var scale = Math.max(1, Math.min(500, parseInt(scaleEl.value, 10) || 100));
        var x = Math.max(0, parseInt(xEl.value, 10) || 0);
        var y = Math.max(0, parseInt(yEl.value, 10) || 0);
        return { opacity: opacity, scale: scale, x: x, y: y, blend: blendEl.value || 'source-over' };
      }

      /**
       * Scaled overlay width in base pixel space.
       * @param {number} scalePct
       */
      function overlayDrawW(scalePct) {
        if (!overlayLayer) return 0;
        return Math.round(overlayLayer.w * scalePct / 100);
      }

      /**
       * Scaled overlay height in base pixel space.
       * @param {number} scalePct
       */
      function overlayDrawH(scalePct) {
        if (!overlayLayer) return 0;
        return Math.round(overlayLayer.h * scalePct / 100);
      }

      /**
       * Build composited canvas at full base resolution.
       * @param {boolean} forJpeg Whether JPEG flatten background is needed.
       * @returns {HTMLCanvasElement}
       */
      function buildCompositeCanvas(forJpeg) {
        if (!baseLayer || !overlayLayer) throw new Error('missing');
        var ctrl = readControls();
        var canvas = document.createElement('canvas');
        canvas.width = baseLayer.w;
        canvas.height = baseLayer.h;
        var ctx = canvas.getContext('2d');
        if (!ctx) throw new Error('encode');
        if (forJpeg) {
          ctx.fillStyle = jpegBgEl.value || '#ffffff';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
        ctx.drawImage(baseLayer.bitmap, 0, 0);
        ctx.globalAlpha = ctrl.opacity / 100;
        ctx.globalCompositeOperation = ctrl.blend;
        var dw = overlayDrawW(ctrl.scale);
        var dh = overlayDrawH(ctrl.scale);
        ctx.drawImage(overlayLayer.bitmap, ctrl.x, ctrl.y, dw, dh);
        ctx.globalAlpha = 1;
        ctx.globalCompositeOperation = 'source-over';
        return canvas;
      }

      /** Sync opacity label and quality UI. */
      function syncUiLabels() {
        opacityVal.textContent = String(Math.max(0, Math.min(100, parseInt(opacityEl.value, 10) || 0))) + '%';
        var isPng = formatEl.value === 'image/png';
        qualityEl.disabled = isPng;
        var q = Math.max(0.5, Math.min(1, Number(qualityEl.value) / 100));
        qualityVal.textContent = isPng ? '—' : q.toFixed(2);
        jpegBgWrap.style.display = formatEl.value === 'image/jpeg' ? '' : 'none';
      }

      /** Refresh file-size / edge warnings. */
      function refreshWarnings() {
        var warns = [];
        if (baseLayer && baseLayer.file.size > SOFT_BYTES) warns.push(msg.large);
        if (overlayLayer && overlayLayer.file.size > SOFT_BYTES) warns.push(msg.large);
        if (baseLayer && (baseLayer.w > SOFT_EDGE || baseLayer.h > SOFT_EDGE)) warns.push(msg.edge);
        setWarn(warns.join(' '));
      }

      /** Draw live preview on screen canvas (scaled). */
      function drawPreview() {
        resultBlob = null;
        btnDownload.disabled = true;
        if (!baseLayer) {
          preview.hidden = true;
          return;
        }
        displayScale = Math.min(1, PREVIEW_MAX_EDGE / Math.max(baseLayer.w, baseLayer.h, 1));
        preview.width = Math.max(1, Math.round(baseLayer.w * displayScale));
        preview.height = Math.max(1, Math.round(baseLayer.h * displayScale));
        preview.hidden = false;
        var ctx = preview.getContext('2d');
        if (!ctx) return;
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, preview.width, preview.height);
        ctx.drawImage(baseLayer.bitmap, 0, 0, preview.width, preview.height);
        if (overlayLayer) {
          var ctrl = readControls();
          ctx.globalAlpha = ctrl.opacity / 100;
          ctx.globalCompositeOperation = ctrl.blend;
          var dw = overlayDrawW(ctrl.scale) * displayScale;
          var dh = overlayDrawH(ctrl.scale) * displayScale;
          ctx.drawImage(overlayLayer.bitmap, ctrl.x * displayScale, ctrl.y * displayScale, dw, dh);
          ctx.globalAlpha = 1;
          ctx.globalCompositeOperation = 'source-over';
          ctx.strokeStyle = 'rgba(28,131,168,0.85)';
          ctx.lineWidth = 1;
          ctx.setLineDash([4, 3]);
          ctx.strokeRect(ctrl.x * displayScale, ctrl.y * displayScale, dw, dh);
          ctx.setLineDash([]);
        }
      }

      /**
       * Apply nine-grid anchor to x/y (top-left anchor in base pixels).
       * @param {string} pos
       */
      function applyGridPosition(pos) {
        if (!baseLayer || !overlayLayer) return;
        var ctrl = readControls();
        var ow = overlayDrawW(ctrl.scale);
        var oh = overlayDrawH(ctrl.scale);
        var x = 0;
        var y = 0;
        if (pos.indexOf('c') >= 0 && pos !== 'mc') x = Math.round((baseLayer.w - ow) / 2);
        else if (pos.indexOf('r') >= 0) x = Math.max(0, baseLayer.w - ow);
        if (pos.indexOf('m') === 0 && pos.length === 2) {
          if (pos.charAt(1) === 'l') { x = 0; y = Math.round((baseLayer.h - oh) / 2); }
          else if (pos.charAt(1) === 'c') { x = Math.round((baseLayer.w - ow) / 2); y = Math.round((baseLayer.h - oh) / 2); }
          else if (pos.charAt(1) === 'r') { x = Math.max(0, baseLayer.w - ow); y = Math.round((baseLayer.h - oh) / 2); }
        } else if (pos.charAt(0) === 'b') {
          y = Math.max(0, baseLayer.h - oh);
          if (pos.charAt(1) === 'c') x = Math.round((baseLayer.w - ow) / 2);
          else if (pos.charAt(1) === 'r') x = Math.max(0, baseLayer.w - ow);
        } else if (pos.charAt(0) === 't') {
          y = 0;
          if (pos.charAt(1) === 'c') x = Math.round((baseLayer.w - ow) / 2);
          else if (pos.charAt(1) === 'r') x = Math.max(0, baseLayer.w - ow);
        }
        xEl.value = String(x);
        yEl.value = String(y);
        drawPreview();
      }

      /**
       * Load one layer from a file.
       * @param {File} file
       * @param {'base'|'overlay'} which
       */
      /**
       * Decode and assign a layer, then refresh preview.
       * @param {File} file
       * @param {'base'|'overlay'} which
       * @returns {Promise<void>}
       */
      function loadLayer(file, which) {
        setError('');
        return decodeImage(file)
          .then(function (dec) {
            if (which === 'base') {
              disposeLayer(baseLayer);
              baseLayer = { file: file, bitmap: dec.bitmap, w: dec.w, h: dec.h };
              baseNameEl.textContent = file.name || '';
            } else {
              disposeLayer(overlayLayer);
              overlayLayer = { file: file, bitmap: dec.bitmap, w: dec.w, h: dec.h };
              overlayNameEl.textContent = file.name || '';
            }
            refreshWarnings();
            drawPreview();
          })
          .catch(function () {
            setError(msg.decodeFail);
          });
      }

      /**
       * Export composite and enable download (does not wipe resultBlob via drawPreview).
       * @returns {Promise<void>}
       */
      function applyOverlay() {
        setError('');
        resultBlob = null;
        btnDownload.disabled = true;
        if (!baseLayer) {
          setError(msg.emptyBase);
          return Promise.resolve();
        }
        if (!overlayLayer) {
          setError(msg.emptyOverlay);
          return Promise.resolve();
        }
        setStatus(msg.working);
        btnApply.disabled = true;
        try {
          var mime = formatEl.value;
          var forJpeg = mime === 'image/jpeg';
          var canvas = buildCompositeCanvas(forJpeg);
          var q = Math.max(0.5, Math.min(1, Number(qualityEl.value) / 100));
          return new Promise(function (resolve) {
            canvas.toBlob(function (blob) {
              btnApply.disabled = false;
              if (!blob) {
                setError(msg.encodeFail);
                setStatus('');
                resolve();
                return;
              }
              resultBlob = blob;
              btnDownload.disabled = false;
              setStatus(msg.done);
              resolve();
            }, mime, mime === 'image/png' ? undefined : q);
          });
        } catch (e) {
          btnApply.disabled = false;
          setError(msg.encodeFail);
          setStatus('');
          return Promise.resolve();
        }
      }

      /** Trigger download of last exported blob. */
      function downloadResult() {
        if (!resultBlob) return;
        var mime = resultBlob.type || formatEl.value;
        var ext = mime === 'image/png' ? 'png' : mime === 'image/webp' ? 'webp' : 'jpg';
        var url = URL.createObjectURL(resultBlob);
        var a = document.createElement('a');
        a.href = url;
        a.download = 'overlay.' + ext;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      }

      /**
       * Map preview pointer coords to source x/y for overlay top-left.
       * @param {number} clientX
       * @param {number} clientY
       */
      function pointerToSource(clientX, clientY) {
        var rect = preview.getBoundingClientRect();
        var px = (clientX - rect.left) / displayScale;
        var py = (clientY - rect.top) / displayScale;
        return { x: px, y: py };
      }

      /** Begin drag if pointer is inside overlay bounds. */
      function onPointerDown(e) {
        if (!baseLayer || !overlayLayer || preview.hidden) return;
        var pt = pointerToSource(e.clientX, e.clientY);
        var ctrl = readControls();
        var ow = overlayDrawW(ctrl.scale);
        var oh = overlayDrawH(ctrl.scale);
        if (pt.x >= ctrl.x && pt.x <= ctrl.x + ow && pt.y >= ctrl.y && pt.y <= ctrl.y + oh) {
          drag.active = true;
          drag.offsetX = pt.x - ctrl.x;
          drag.offsetY = pt.y - ctrl.y;
          preview.setPointerCapture(e.pointerId);
          e.preventDefault();
        }
      }

      /** Move overlay while dragging on preview. */
      function onPointerMove(e) {
        if (!drag.active) return;
        var pt = pointerToSource(e.clientX, e.clientY);
        var nx = Math.round(pt.x - drag.offsetX);
        var ny = Math.round(pt.y - drag.offsetY);
        xEl.value = String(Math.max(0, nx));
        yEl.value = String(Math.max(0, ny));
        drawPreview();
      }

      /** End drag. */
      function onPointerUp(e) {
        if (!drag.active) return;
        drag.active = false;
        try { preview.releasePointerCapture(e.pointerId); } catch (err) {}
      }

      /**
       * Generate sample base + logo overlay, place bottom-right at 75% opacity, then export (real result).
       * @returns {Promise<void>}
       */
      function loadSample() {
        clearAll(false);
        var baseC = document.createElement('canvas');
        baseC.width = 640;
        baseC.height = 480;
        var bctx = baseC.getContext('2d');
        var grad = bctx.createLinearGradient(0, 0, 640, 480);
        grad.addColorStop(0, '#1c83a8');
        grad.addColorStop(1, '#2d6a4f');
        bctx.fillStyle = grad;
        bctx.fillRect(0, 0, 640, 480);
        bctx.fillStyle = 'rgba(255,255,255,0.15)';
        bctx.fillRect(40, 40, 560, 400);

        var ovC = document.createElement('canvas');
        ovC.width = 180;
        ovC.height = 72;
        var octx = ovC.getContext('2d');
        octx.clearRect(0, 0, 180, 72);
        octx.fillStyle = 'rgba(255,255,255,0.75)';
        octx.beginPath();
        octx.moveTo(18, 8);
        octx.lineTo(162, 8);
        octx.quadraticCurveTo(172, 8, 172, 18);
        octx.lineTo(172, 54);
        octx.quadraticCurveTo(172, 64, 162, 64);
        octx.lineTo(18, 64);
        octx.quadraticCurveTo(8, 64, 8, 54);
        octx.lineTo(8, 18);
        octx.quadraticCurveTo(8, 8, 18, 8);
        octx.closePath();
        octx.fill();
        octx.fillStyle = '#1c83a8';
        octx.font = 'bold 22px sans-serif';
        octx.fillText('LOGO', 48, 46);

        return Promise.all([
          new Promise(function (resolve) {
            baseC.toBlob(function (blob) {
              resolve(blob ? new File([blob], 'sample-base.png', { type: 'image/png' }) : null);
            }, 'image/png');
          }),
          new Promise(function (resolve) {
            ovC.toBlob(function (blob) {
              resolve(blob ? new File([blob], 'sample-logo.png', { type: 'image/png' }) : null);
            }, 'image/png');
          })
        ]).then(function (files) {
          var tasks = [];
          if (files[0]) tasks.push(loadLayer(files[0], 'base'));
          if (files[1]) tasks.push(loadLayer(files[1], 'overlay'));
          return Promise.all(tasks);
        }).then(function () {
          if (!baseLayer || !overlayLayer) return;
          opacityEl.value = '75';
          scaleEl.value = '100';
          syncUiLabels();
          applyGridPosition('br');
          return applyOverlay();
        });
      }

      /**
       * Reset all state.
       * @param {boolean} resetInputs Whether to clear file input values.
       */
      function clearAll(resetInputs) {
        disposeLayer(baseLayer);
        disposeLayer(overlayLayer);
        baseLayer = null;
        overlayLayer = null;
        if (resetInputs !== false) {
          fileBase.value = '';
          fileOverlay.value = '';
        }
        baseNameEl.textContent = '';
        overlayNameEl.textContent = '';
        resultBlob = null;
        btnDownload.disabled = true;
        preview.hidden = true;
        setError('');
        setWarn('');
        setStatus('');
      }

      function wireDropzone(zone, input, which) {
        zone.addEventListener('dragover', function (e) {
          e.preventDefault();
          zone.classList.add('dragover');
        });
        zone.addEventListener('dragleave', function () { zone.classList.remove('dragover'); });
        zone.addEventListener('drop', function (e) {
          e.preventDefault();
          zone.classList.remove('dragover');
          var f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
          if (f) loadLayer(f, which);
        });
        input.addEventListener('change', function () {
          var f = input.files && input.files[0];
          if (f) loadLayer(f, which);
        });
      }

      wireDropzone(dropBase, fileBase, 'base');
      wireDropzone(dropOverlay, fileOverlay, 'overlay');

      document.querySelectorAll('.img-ov-pos').forEach(function (btn) {
        btn.addEventListener('click', function () {
          applyGridPosition(btn.getAttribute('data-pos') || 'mc');
        });
      });

      [opacityEl, scaleEl, xEl, yEl, blendEl].forEach(function (el) {
        el.addEventListener('input', function () {
          syncUiLabels();
          drawPreview();
        });
        el.addEventListener('change', function () {
          syncUiLabels();
          drawPreview();
        });
      });
      formatEl.addEventListener('change', syncUiLabels);
      qualityEl.addEventListener('input', syncUiLabels);

      preview.addEventListener('pointerdown', onPointerDown);
      preview.addEventListener('pointermove', onPointerMove);
      preview.addEventListener('pointerup', onPointerUp);
      preview.addEventListener('pointercancel', onPointerUp);

      btnApply.addEventListener('click', function () { applyOverlay(); });
      btnDownload.addEventListener('click', downloadResult);
      btnSample.addEventListener('click', function () { loadSample(); });
      btnClear.addEventListener('click', function () { clearAll(true); });

      syncUiLabels();
      /** On enter: auto-run sample overlay export so preview + download are ready (tool-creation rule). */
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('image-overlay');
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
