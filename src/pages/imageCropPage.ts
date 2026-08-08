/**
 * ???????????????? + ??/???? + Canvas drawImage/toBlob??
 * slug: image-crop????crop-image / resize-image / crop-to-square ????URL??
 * ??work-tasks/image-crop/02-tool-info.md??
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
 * ?????? / ????????
 * @param opts.lang ????
 * @param opts.defaultLang ??????
 * @param opts.enabledLangs ??????????????? supportedLangs??
 */
export const renderImageCropPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/image-crop';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_image_crop_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_image_crop_description');

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
		items: buildToolSidebarItems({
			lang: opts.lang,
			defaultLang: opts.defaultLang,
			currentSlug: 'image-crop',
			currentAnchor: '#cropper',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	/** ????????????????? JPEG ?????*/
	const extraHeadHtml = `
  <style>
    .tools-bar { gap: .5rem; }
    .opt-group { gap: .75rem; align-items: center; }
    .icr-stage-wrap {
      position: relative; width: 100%; max-width: 100%; background: #1a1a1a;
      border: 1px solid #dee2e6; border-radius: .5rem; overflow: hidden;
      touch-action: none; user-select: none;
    }
    #icrStage { display: block; width: 100%; height: auto; max-height: 420px; cursor: crosshair; }
    #icrPreviewOut {
      max-width: 100%; max-height: 280px; object-fit: contain; background:
        linear-gradient(45deg, #eee 25%, transparent 25%),
        linear-gradient(-45deg, #eee 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, #eee 75%),
        linear-gradient(-45deg, transparent 75%, #eee 75%);
      background-size: 16px 16px; background-position: 0 0, 0 8px, 8px -8px, -8px 0;
      border: 1px solid #dee2e6; border-radius: .5rem;
    }
    .icr-preview-wrap { min-height: 120px; display: flex; align-items: center; justify-content: center; }
    #icrQuality[disabled] { opacity: .5; }
    #icrJpegBgRow[hidden], #icrCustomAspect[hidden], #icrFitRow[hidden] { display: none !important; }
    .icr-sel-meta { font-variant-numeric: tabular-nums; }
  </style>`;

	const contentHtml = `
    <div id="cropper" class="tool-page-heading mb-3">
      <h1 class="h4 mb-0">${escapeHtml(t(opts.lang, 'tool_image_crop_title'))}</h1>
    </div>

    <label class="tool-dropzone icr-drop mb-3" id="icrDrop" for="icrFile">
      <input type="file" id="icrFile" accept="image/png,image/jpeg,image/webp,image/gif,image/bmp,image/*">
      <span class="tool-dropzone-title">${escapeHtml(t(opts.lang, 'tool_image_crop_choose_file'))}</span>
      <span class="tool-dropzone-hint">${escapeHtml(t(opts.lang, 'tool_image_crop_drop_hint'))}</span>
      <span id="icrFileName" class="tool-dropzone-file"></span>
    </label>

    <div class="d-flex align-items-center tools-bar mb-2 flex-wrap">
      <button type="button" id="icrBtnApply" class="btn btn-primary btn-sm">${escapeHtml(t(opts.lang, 'tool_image_crop_apply'))}</button>
      <button type="button" id="icrBtnDownload" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(t(opts.lang, 'tool_image_crop_download'))}</button>
      <button type="button" id="icrBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_image_crop_sample'))}</button>
      <button type="button" id="icrBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_image_crop_clear'))}</button>
    </div>

    <div class="d-flex align-items-center opt-group mb-2 flex-wrap">
      <label class="form-label mb-0" for="icrMode">${escapeHtml(t(opts.lang, 'tool_image_crop_mode_label'))}</label>
      <select id="icrMode" class="form-select form-select-sm" style="width:auto;">
        <option value="crop" selected>${escapeHtml(t(opts.lang, 'tool_image_crop_mode_crop'))}</option>
        <option value="resize">${escapeHtml(t(opts.lang, 'tool_image_crop_mode_resize'))}</option>
      </select>
      <div id="icrFitRow" class="d-flex align-items-center opt-group flex-wrap" hidden>
        <label class="form-label mb-0" for="icrFit">${escapeHtml(t(opts.lang, 'tool_image_crop_fit_label'))}</label>
        <select id="icrFit" class="form-select form-select-sm" style="width:auto;">
          <option value="contain" selected>${escapeHtml(t(opts.lang, 'tool_image_crop_fit_contain'))}</option>
          <option value="cover">${escapeHtml(t(opts.lang, 'tool_image_crop_fit_cover'))}</option>
        </select>
      </div>
      <label class="form-label mb-0" for="icrAspect">${escapeHtml(t(opts.lang, 'tool_image_crop_aspect_label'))}</label>
      <select id="icrAspect" class="form-select form-select-sm" style="width:auto;">
        <option value="free">${escapeHtml(t(opts.lang, 'tool_image_crop_aspect_free'))}</option>
        <option value="1:1" selected>${escapeHtml(t(opts.lang, 'tool_image_crop_aspect_1_1'))}</option>
        <option value="4:3">4:3</option>
        <option value="3:4">3:4</option>
        <option value="3:2">3:2</option>
        <option value="2:3">2:3</option>
        <option value="16:9">16:9</option>
        <option value="9:16">9:16</option>
        <option value="21:9">21:9</option>
        <option value="custom">${escapeHtml(t(opts.lang, 'tool_image_crop_aspect_custom'))}</option>
      </select>
      <span id="icrCustomAspect" class="d-inline-flex align-items-center gap-1" hidden>
        <input type="number" id="icrAspectW" class="form-control form-control-sm" min="1" max="99" value="1" style="width:3.5rem;" aria-label="aspect W">
        <span class="small">:</span>
        <input type="number" id="icrAspectH" class="form-control form-control-sm" min="1" max="99" value="1" style="width:3.5rem;" aria-label="aspect H">
      </span>
    </div>

    <div class="d-flex align-items-center opt-group mb-2 flex-wrap">
      <label class="form-label mb-0" for="icrPreset">${escapeHtml(t(opts.lang, 'tool_image_crop_preset_label'))}</label>
      <select id="icrPreset" class="form-select form-select-sm" style="width:auto;max-width:16rem;">
        <option value="">${escapeHtml(t(opts.lang, 'tool_image_crop_preset_custom'))}</option>
        <optgroup label="${escapeHtml(t(opts.lang, 'tool_image_crop_preset_group_avatar'))}">
          <option value="512x512" selected>512?512</option>
          <option value="400x400">400?400</option>
          <option value="256x256">256?256</option>
          <option value="128x128">128?128</option>
          <option value="800x800">800?800</option>
          <option value="1000x1000">1000?1000</option>
        </optgroup>
        <optgroup label="${escapeHtml(t(opts.lang, 'tool_image_crop_preset_group_thumb'))}">
          <option value="150x150">150?150</option>
          <option value="300x300">300?300</option>
        </optgroup>
        <optgroup label="${escapeHtml(t(opts.lang, 'tool_image_crop_preset_group_cover'))}">
          <option value="1920x1080">1920?1080</option>
          <option value="1280x720">1280?720</option>
          <option value="1600x900">1600?900</option>
          <option value="1200x675">1200?675</option>
          <option value="1200x630">1200?630</option>
          <option value="1920x600">1920?600</option>
        </optgroup>
        <optgroup label="${escapeHtml(t(opts.lang, 'tool_image_crop_preset_group_portrait'))}">
          <option value="1080x1920">1080?1920</option>
          <option value="1080x1350">1080?1350</option>
        </optgroup>
        <optgroup label="${escapeHtml(t(opts.lang, 'tool_image_crop_preset_group_web'))}">
          <option value="max1200">${escapeHtml(t(opts.lang, 'tool_image_crop_preset_max1200'))}</option>
          <option value="w800">${escapeHtml(t(opts.lang, 'tool_image_crop_preset_w800'))}</option>
        </optgroup>
      </select>
      <label class="form-label mb-0" for="icrOutW">${escapeHtml(t(opts.lang, 'tool_image_crop_output_size'))}</label>
      <input type="number" id="icrOutW" class="form-control form-control-sm" min="1" max="8192" value="512" style="width:5.5rem;" aria-label="output width">
      <span class="small">?</span>
      <input type="number" id="icrOutH" class="form-control form-control-sm" min="1" max="8192" value="512" style="width:5.5rem;" aria-label="output height">
      <span class="small text-muted">px</span>
      <button type="button" id="icrBtnSame" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_image_crop_same_as_selection'))}</button>
    </div>

    <div class="d-flex align-items-center opt-group mb-2 flex-wrap">
      <label class="form-label mb-0" for="icrOutput">${escapeHtml(t(opts.lang, 'tool_image_crop_output_label'))}</label>
      <select id="icrOutput" class="form-select form-select-sm" style="width:auto;">
        <option value="image/jpeg" selected>${escapeHtml(t(opts.lang, 'tool_image_crop_format_jpeg'))}</option>
        <option value="image/webp">${escapeHtml(t(opts.lang, 'tool_image_crop_format_webp'))}</option>
        <option value="image/png">${escapeHtml(t(opts.lang, 'tool_image_crop_format_png'))}</option>
      </select>
      <label class="form-label mb-0" for="icrQuality">${escapeHtml(t(opts.lang, 'tool_image_crop_quality_label'))}</label>
      <input type="range" id="icrQuality" min="50" max="100" value="90" step="1" style="width:140px;">
      <span id="icrQualityVal" class="small text-muted">0.90</span>
      <span id="icrQualityHint" class="small text-muted"></span>
    </div>

    <div id="icrJpegBgRow" class="d-flex align-items-center opt-group mb-3 flex-wrap">
      <span class="form-label mb-0">${escapeHtml(t(opts.lang, 'tool_image_crop_jpeg_bg_label'))}</span>
      <div class="btn-group" role="group" aria-label="${escapeHtml(t(opts.lang, 'tool_image_crop_jpeg_bg_label'))}">
        <input type="radio" class="btn-check" name="icrJpegBg" id="icrBgWhite" value="#ffffff" checked>
        <label class="btn btn-outline-secondary btn-sm" for="icrBgWhite">${escapeHtml(t(opts.lang, 'tool_image_crop_jpeg_bg_white'))}</label>
        <input type="radio" class="btn-check" name="icrJpegBg" id="icrBgBlack" value="#000000">
        <label class="btn btn-outline-secondary btn-sm" for="icrBgBlack">${escapeHtml(t(opts.lang, 'tool_image_crop_jpeg_bg_black'))}</label>
        <input type="radio" class="btn-check" name="icrJpegBg" id="icrBgCustom" value="custom">
        <label class="btn btn-outline-secondary btn-sm" for="icrBgCustom">${escapeHtml(t(opts.lang, 'tool_image_crop_jpeg_bg_custom'))}</label>
      </div>
      <input type="color" id="icrBgColor" value="#ffffff" title="${escapeHtml(t(opts.lang, 'tool_image_crop_jpeg_bg_custom'))}" style="width:2.25rem;height:1.75rem;padding:0;border:1px solid #ced4da;">
    </div>

    <p id="icrWarn" class="small text-warning mb-2" style="display:none;" role="status"></p>
    <p id="icrError" class="small text-danger mb-2" style="display:none;" role="alert"></p>
    <p id="icrStatus" class="small text-muted mb-2" role="status"></p>

    <div class="row g-3 mb-4">
      <div class="col-12 col-lg-7">
        <label class="form-label">${escapeHtml(t(opts.lang, 'tool_image_crop_preview_in'))}</label>
        <div class="icr-stage-wrap">
          <canvas id="icrStage" width="640" height="400" aria-label="${escapeHtml(t(opts.lang, 'tool_image_crop_preview_in'))}"></canvas>
        </div>
        <p id="icrStatsIn" class="small text-muted mt-2 mb-0"></p>
        <p id="icrSelMeta" class="small text-muted icr-sel-meta mt-1 mb-0"></p>
      </div>
      <div class="col-12 col-lg-5">
        <label class="form-label">${escapeHtml(t(opts.lang, 'tool_image_crop_preview_out'))}</label>
        <div class="icr-preview-wrap"><img id="icrPreviewOut" alt="" hidden></div>
        <p id="icrStatsOut" class="small text-muted mt-2 mb-0"></p>
        <p id="icrMapMeta" class="small fw-semibold mt-1 mb-0"></p>
      </div>
    </div>

    <p class="tool-lead mb-4">${escapeHtml(description)}</p>`;

	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: 'tool_image_crop',
		mode: 'rules',
		usecaseCount: 3,
		ruleItemCount: 4,
	});

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{ label: 'MDN ??CanvasRenderingContext2D.drawImage()', href: 'https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage' },
			{ label: 'MDN ??HTMLCanvasElement.toBlob()', href: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob' },
		],
	});

	/**
	 * ???????????????????? ?????? ??toBlob??
	 * v1 ???????????????????????
	 */
	const extraBodyHtml = `
  <script>
    (function () {
      /** ?????????? */
      var SOFT_BYTES = 25 * 1024 * 1024;
      /** ????????*/
      var SOFT_EDGE = 8192;
      /** ?????????CSS ????*/
      var STAGE_MAX_H = 420;
      /** ????????????CSS ????*/
      var HANDLE = 10;

      var drop = document.getElementById('icrDrop');
      var fileInput = document.getElementById('icrFile');
      var fileNameEl = document.getElementById('icrFileName');
      var modeEl = document.getElementById('icrMode');
      var fitRow = document.getElementById('icrFitRow');
      var fitEl = document.getElementById('icrFit');
      var aspectEl = document.getElementById('icrAspect');
      var customAspect = document.getElementById('icrCustomAspect');
      var aspectWEl = document.getElementById('icrAspectW');
      var aspectHEl = document.getElementById('icrAspectH');
      var presetEl = document.getElementById('icrPreset');
      var outWEl = document.getElementById('icrOutW');
      var outHEl = document.getElementById('icrOutH');
      var outputSel = document.getElementById('icrOutput');
      var qualityEl = document.getElementById('icrQuality');
      var qualityVal = document.getElementById('icrQualityVal');
      var qualityHint = document.getElementById('icrQualityHint');
      var jpegBgRow = document.getElementById('icrJpegBgRow');
      var bgColorEl = document.getElementById('icrBgColor');
      var stage = document.getElementById('icrStage');
      var btnApply = document.getElementById('icrBtnApply');
      var btnDownload = document.getElementById('icrBtnDownload');
      var btnSample = document.getElementById('icrBtnSample');
      var btnClear = document.getElementById('icrBtnClear');
      var btnSame = document.getElementById('icrBtnSame');
      var warnEl = document.getElementById('icrWarn');
      var errEl = document.getElementById('icrError');
      var statusEl = document.getElementById('icrStatus');
      var previewOut = document.getElementById('icrPreviewOut');
      var statsIn = document.getElementById('icrStatsIn');
      var statsOut = document.getElementById('icrStatsOut');
      var selMeta = document.getElementById('icrSelMeta');
      var mapMeta = document.getElementById('icrMapMeta');

      var msg = {
        empty: ${JSON.stringify(t(opts.lang, 'tool_image_crop_empty'))},
        decode: ${JSON.stringify(t(opts.lang, 'tool_image_crop_err_decode'))},
        encode: ${JSON.stringify(t(opts.lang, 'tool_image_crop_err_encode'))},
        mismatch: ${JSON.stringify(t(opts.lang, 'tool_image_crop_err_mime_mismatch'))},
        invalidSel: ${JSON.stringify(t(opts.lang, 'tool_image_crop_err_invalid_sel'))},
        invalidOut: ${JSON.stringify(t(opts.lang, 'tool_image_crop_err_invalid_out'))},
        large: ${JSON.stringify(t(opts.lang, 'tool_image_crop_warn_large'))},
        edge: ${JSON.stringify(t(opts.lang, 'tool_image_crop_warn_edge'))},
        anim: ${JSON.stringify(t(opts.lang, 'tool_image_crop_warn_animation'))},
        noUpscale: ${JSON.stringify(t(opts.lang, 'tool_image_crop_warn_no_upscale'))},
        qualityPng: ${JSON.stringify(t(opts.lang, 'tool_image_crop_quality_hint_png'))},
        webpOff: ${JSON.stringify(t(opts.lang, 'tool_image_crop_webp_unsupported'))},
        applying: ${JSON.stringify(t(opts.lang, 'tool_image_crop_status_applying'))},
        done: ${JSON.stringify(t(opts.lang, 'tool_image_crop_status_done'))},
        statsTpl: ${JSON.stringify(t(opts.lang, 'tool_image_crop_stats_tpl'))},
        selTpl: ${JSON.stringify(t(opts.lang, 'tool_image_crop_sel_tpl'))},
        mapTpl: ${JSON.stringify(t(opts.lang, 'tool_image_crop_map_tpl'))}
      };

      /** @type {File|null} ??????*/
      var sourceFile = null;
      /** @type {HTMLImageElement|ImageBitmap|null} ??????*/
      var sourceBmp = null;
      /** ???????? */
      var srcW = 0;
      var srcH = 0;
      /** ??????????*/
      var sel = { x: 0, y: 0, w: 0, h: 0 };
      /** ????????????????*/
      var view = { x: 0, y: 0, w: 0, h: 0, scale: 1 };
      /** @type {Blob|null} ???? */
      var outputBlob = null;
      var outputName = 'cropped.jpg';
      /** @type {Record<string, boolean>} ?????? */
      var encodeSupport = {};
      /** ?????*/
      var drag = null;

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

      /** ??????????????*/
      function formatBytes(n) {
        if (n < 1024) return n + ' B';
        if (n < 1024 * 1024) return (n / 1024).toFixed(1) + ' KB';
        return (n / (1024 * 1024)).toFixed(2) + ' MB';
      }

      /** ??????MIME / ?? / ????*/
      function formatStats(mime, w, h, bytes) {
        return msg.statsTpl
          .replace('{mime}', mime || '—')
          .replace('{w}', String(w))
          .replace('{h}', String(h))
          .replace('{bytes}', formatBytes(bytes));
      }

      /** ????MIME?jpg ??jpeg???*/
      function normalizeMime(mime) {
        if (!mime) return '';
        var m = String(mime).toLowerCase();
        if (m === 'image/jpg') return 'image/jpeg';
        return m;
      }

      /** ??MIME ?????????*/
      function extFor(mime) {
        mime = normalizeMime(mime);
        if (mime === 'image/jpeg') return 'jpg';
        if (mime === 'image/png') return 'png';
        if (mime === 'image/webp') return 'webp';
        return 'bin';
      }

      /** ???? ??0????*/
      function quality01() {
        return Math.max(0.5, Math.min(1, Number(qualityEl.value) / 100));
      }

      /** ?? JPEG ????*/
      function jpegBg() {
        var picked = document.querySelector('input[name="icrJpegBg"]:checked');
        var v = picked ? picked.value : '#ffffff';
        if (v === 'custom') return bgColorEl.value || '#ffffff';
        return v;
      }

      /** ???????????????? null??*/
      function aspectRatio() {
        var v = aspectEl.value;
        if (v === 'free') return null;
        if (v === 'custom') {
          var aw = Math.max(1, Number(aspectWEl.value) || 1);
          var ah = Math.max(1, Number(aspectHEl.value) || 1);
          return aw / ah;
        }
        var parts = v.split(':');
        return (Number(parts[0]) || 1) / (Number(parts[1]) || 1);
      }

      /** ???????????????*/
      function syncOptionsUi() {
        var mime = outputSel.value;
        var isPng = mime === 'image/png';
        var isJpeg = mime === 'image/jpeg';
        var isResize = modeEl.value === 'resize';
        qualityEl.disabled = isPng;
        qualityVal.textContent = quality01().toFixed(2);
        qualityHint.textContent = isPng ? msg.qualityPng : '';
        jpegBgRow.hidden = !isJpeg && !(isResize && fitEl.value === 'contain' && mime === 'image/jpeg');
        if (isJpeg) jpegBgRow.hidden = false;
        fitRow.hidden = !isResize;
        customAspect.hidden = aspectEl.value !== 'custom';
        aspectEl.disabled = isResize;
        var webpOpt = outputSel.querySelector('option[value="image/webp"]');
        if (webpOpt && encodeSupport['image/webp'] === false) {
          webpOpt.disabled = true;
          webpOpt.title = msg.webpOff;
        }
        updateSelMeta();
      }

      /** ????????????MIME ????*/
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

      /** ???? WebP/JPEG/PNG ??????*/
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

      /** ?? Blob ?????? createImageBitmap???*/
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

      /** canvas.toBlob Promise ???????? MIME??*/
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

      /** ??????????*/
      function closeBmp() {
        if (sourceBmp && typeof sourceBmp.close === 'function') {
          try { sourceBmp.close(); } catch (e) {}
        }
        sourceBmp = null;
      }

      /**
       * ?????????????????
       * @param {number|null} ratio ????null ????
       */
      function maxCenteredSel(ratio) {
        if (!srcW || !srcH) return { x: 0, y: 0, w: 0, h: 0 };
        if (!ratio || !isFinite(ratio) || ratio <= 0) {
          return { x: 0, y: 0, w: srcW, h: srcH };
        }
        var imgR = srcW / srcH;
        var w, h;
        if (imgR > ratio) {
          h = srcH;
          w = Math.max(1, Math.round(h * ratio));
        } else {
          w = srcW;
          h = Math.max(1, Math.round(w / ratio));
        }
        return {
          x: Math.round((srcW - w) / 2),
          y: Math.round((srcH - h) / 2),
          w: w,
          h: h
        };
      }

      /** ????????????*/
      function clampSel(s) {
        var w = Math.max(1, Math.min(srcW, Math.round(s.w)));
        var h = Math.max(1, Math.min(srcH, Math.round(s.h)));
        var x = Math.max(0, Math.min(srcW - w, Math.round(s.x)));
        var y = Math.max(0, Math.min(srcH - h, Math.round(s.y)));
        return { x: x, y: y, w: w, h: h };
      }

      /** ???????????????????*/
      function applyAspectToSel() {
        var r = aspectRatio();
        if (r == null) return;
        var cx = sel.x + sel.w / 2;
        var cy = sel.y + sel.h / 2;
        var next = maxCenteredSel(r);
        /* ????????????? */
        var area = Math.max(sel.w * sel.h, 1);
        var h = Math.sqrt(area / r);
        var w = h * r;
        if (w > srcW) { w = srcW; h = w / r; }
        if (h > srcH) { h = srcH; w = h * r; }
        sel = clampSel({ x: cx - w / 2, y: cy - h / 2, w: w, h: h });
        if (sel.w < 1 || sel.h < 1) sel = next;
      }

      /** ???????????*/
      function updateSelMeta() {
        if (!srcW) { selMeta.textContent = ''; return; }
        if (modeEl.value === 'resize') {
          selMeta.textContent = msg.selTpl
            .replace('{x}', '0').replace('{y}', '0')
            .replace('{w}', String(srcW)).replace('{h}', String(srcH));
          return;
        }
        selMeta.textContent = msg.selTpl
          .replace('{x}', String(sel.x))
          .replace('{y}', String(sel.y))
          .replace('{w}', String(sel.w))
          .replace('{h}', String(sel.h));
      }

      /**
       * ????????????fit ????
       * ?? CSS ???????????? devicePixelRatio??
       */
      function layoutStage() {
        if (!sourceBmp || !srcW) return;
        var wrap = stage.parentElement;
        var cssW = Math.max(160, (wrap && wrap.clientWidth) || 640);
        var fitScale = Math.min(cssW / srcW, STAGE_MAX_H / srcH, 1);
        var dispW = Math.max(1, Math.round(srcW * fitScale));
        var dispH = Math.max(1, Math.round(srcH * fitScale));
        var dpr = Math.min(2, window.devicePixelRatio || 1);
        stage.width = Math.round(dispW * dpr);
        stage.height = Math.round(dispH * dpr);
        stage.style.width = dispW + 'px';
        stage.style.height = dispH + 'px';
        view = { x: 0, y: 0, w: dispW * dpr, h: dispH * dpr, scale: (dispW * dpr) / srcW };
        redrawStage();
      }

      /** ?????????????????*/
      function selToCanvas(s) {
        return {
          x: view.x + s.x * view.scale,
          y: view.y + s.y * view.scale,
          w: s.w * view.scale,
          h: s.h * view.scale
        };
      }

      /** ?????? ???????*/
      function eventToSrc(e) {
        var rect = stage.getBoundingClientRect();
        var cssX = e.clientX - rect.left;
        var cssY = e.clientY - rect.top;
        var sx = (cssX / rect.width) * stage.width;
        var sy = (cssY / rect.height) * stage.height;
        return {
          x: (sx - view.x) / view.scale,
          y: (sy - view.y) / view.scale
        };
      }

      /** ???? + ???? + ????????*/
      function redrawStage() {
        var ctx = stage.getContext('2d');
        if (!ctx || !sourceBmp) return;
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, stage.width, stage.height);
        ctx.fillStyle = '#1a1a1a';
        ctx.fillRect(0, 0, stage.width, stage.height);
        ctx.drawImage(sourceBmp, view.x, view.y, view.w, view.h);
        if (modeEl.value === 'resize') {
          updateSelMeta();
          return;
        }
        var r = selToCanvas(sel);
        ctx.fillStyle = 'rgba(0,0,0,0.45)';
        ctx.fillRect(0, 0, stage.width, stage.height);
        ctx.clearRect(r.x, r.y, r.w, r.h);
        ctx.drawImage(sourceBmp, sel.x, sel.y, sel.w, sel.h, r.x, r.y, r.w, r.h);
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = Math.max(2, view.scale * 0.5);
        ctx.strokeRect(r.x + 0.5, r.y + 0.5, r.w - 1, r.h - 1);
        ctx.fillStyle = '#1c83a8';
        var hs = [
          [r.x, r.y], [r.x + r.w / 2, r.y], [r.x + r.w, r.y],
          [r.x, r.y + r.h / 2], [r.x + r.w, r.y + r.h / 2],
          [r.x, r.y + r.h], [r.x + r.w / 2, r.y + r.h], [r.x + r.w, r.y + r.h]
        ];
        var hr = HANDLE * (window.devicePixelRatio || 1);
        for (var i = 0; i < hs.length; i++) {
          ctx.fillRect(hs[i][0] - hr / 2, hs[i][1] - hr / 2, hr, hr);
        }
        updateSelMeta();
      }

      /**
       * ????????'move' | 'nw'|'n'|'ne'|'w'|'e'|'sw'|'s'|'se' | null
       */
      function hitTest(srcPt) {
        var r = sel;
        var tol = HANDLE / view.scale;
        var nearL = Math.abs(srcPt.x - r.x) <= tol;
        var nearR = Math.abs(srcPt.x - (r.x + r.w)) <= tol;
        var nearT = Math.abs(srcPt.y - r.y) <= tol;
        var nearB = Math.abs(srcPt.y - (r.y + r.h)) <= tol;
        var inX = srcPt.x >= r.x - tol && srcPt.x <= r.x + r.w + tol;
        var inY = srcPt.y >= r.y - tol && srcPt.y <= r.y + r.h + tol;
        if (nearT && nearL) return 'nw';
        if (nearT && nearR) return 'ne';
        if (nearB && nearL) return 'sw';
        if (nearB && nearR) return 'se';
        if (nearT && inX) return 'n';
        if (nearB && inX) return 's';
        if (nearL && inY) return 'w';
        if (nearR && inY) return 'e';
        if (srcPt.x >= r.x && srcPt.x <= r.x + r.w && srcPt.y >= r.y && srcPt.y <= r.y + r.h) return 'move';
        return null;
      }

      /** ???????????????*/
      function resizeByHandle(mode, pt, startSel, ratio) {
        var s = { x: startSel.x, y: startSel.y, w: startSel.w, h: startSel.h };
        var right = startSel.x + startSel.w;
        var bottom = startSel.y + startSel.h;
        if (mode === 'move') {
          s.x = pt.x - drag.ox;
          s.y = pt.y - drag.oy;
          return clampSel(s);
        }
        if (mode.indexOf('e') >= 0) s.w = pt.x - s.x;
        if (mode.indexOf('s') >= 0) s.h = pt.y - s.y;
        if (mode.indexOf('w') >= 0) { s.x = pt.x; s.w = right - pt.x; }
        if (mode.indexOf('n') >= 0) { s.y = pt.y; s.h = bottom - pt.y; }
        if (s.w < 1) s.w = 1;
        if (s.h < 1) s.h = 1;
        if (ratio) {
          /* ?????????????? */
          if (mode === 'e' || mode === 'w') s.h = s.w / ratio;
          else if (mode === 'n' || mode === 's') s.w = s.h * ratio;
          else {
            if (Math.abs(s.w / ratio - s.h) > Math.abs(s.h * ratio - s.w)) s.h = s.w / ratio;
            else s.w = s.h * ratio;
          }
          if (mode.indexOf('w') >= 0) s.x = right - s.w;
          if (mode.indexOf('n') >= 0) s.y = bottom - s.h;
        }
        return clampSel(s);
      }

      /** ????????????????*/
      function onPointerDown(e) {
        if (!sourceBmp || modeEl.value === 'resize') return;
        e.preventDefault();
        stage.setPointerCapture && stage.setPointerCapture(e.pointerId);
        var pt = eventToSrc(e);
        var hit = hitTest(pt);
        if (!hit) {
          /* ????????? */
          drag = { mode: 'new', x0: pt.x, y0: pt.y, start: null };
          sel = clampSel({ x: pt.x, y: pt.y, w: 1, h: 1 });
          redrawStage();
          return;
        }
        drag = {
          mode: hit,
          ox: pt.x - sel.x,
          oy: pt.y - sel.y,
          start: { x: sel.x, y: sel.y, w: sel.w, h: sel.h }
        };
      }

      /** ???????????*/
      function onPointerMove(e) {
        if (!drag || !sourceBmp) return;
        e.preventDefault();
        var pt = eventToSrc(e);
        var ratio = aspectRatio();
        if (drag.mode === 'new') {
          var x1 = Math.min(drag.x0, pt.x);
          var y1 = Math.min(drag.y0, pt.y);
          var x2 = Math.max(drag.x0, pt.x);
          var y2 = Math.max(drag.y0, pt.y);
          var w = x2 - x1;
          var h = y2 - y1;
          if (ratio) {
            if (w / h > ratio) w = h * ratio;
            else h = w / ratio;
            if (pt.x < drag.x0) x1 = drag.x0 - w;
            if (pt.y < drag.y0) y1 = drag.y0 - h;
          }
          sel = clampSel({ x: x1, y: y1, w: Math.max(1, w), h: Math.max(1, h) });
        } else {
          sel = resizeByHandle(drag.mode, pt, drag.start, ratio);
        }
        redrawStage();
      }

      /** ???????????*/
      function onPointerUp(e) {
        if (!drag) return;
        drag = null;
        try { stage.releasePointerCapture && stage.releasePointerCapture(e.pointerId); } catch (err) {}
        redrawStage();
      }

      /**
       * ????????????????????????
       * @param {string} val select value
       */
      function applyPreset(val) {
        if (!val) return;
        if (val === 'max1200') {
          if (!srcW) return;
          var long = Math.max(srcW, srcH);
          var sc = long > 1200 ? 1200 / long : 1;
          outWEl.value = String(Math.max(1, Math.round(srcW * sc)));
          outHEl.value = String(Math.max(1, Math.round(srcH * sc)));
          modeEl.value = 'resize';
          fitEl.value = 'contain';
          syncOptionsUi();
          return;
        }
        if (val === 'w800') {
          if (!srcW) return;
          var sc2 = 800 / srcW;
          outWEl.value = '800';
          outHEl.value = String(Math.max(1, Math.round(srcH * sc2)));
          modeEl.value = 'resize';
          fitEl.value = 'contain';
          syncOptionsUi();
          return;
        }
        var m = /^(\\d+)x(\\d+)$/.exec(val);
        if (!m) return;
        var ow = Number(m[1]);
        var oh = Number(m[2]);
        outWEl.value = String(ow);
        outHEl.value = String(oh);
        /* ???????? */
        var g = gcd(ow, oh);
        var rw = ow / g;
        var rh = oh / g;
        var key = rw + ':' + rh;
        var known = ['1:1', '4:3', '3:4', '3:2', '2:3', '16:9', '9:16', '21:9'];
        if (known.indexOf(key) >= 0) {
          aspectEl.value = key;
        } else {
          aspectEl.value = 'custom';
          aspectWEl.value = String(rw);
          aspectHEl.value = String(rh);
        }
        if (modeEl.value === 'crop' && srcW) {
          applyAspectToSel();
          redrawStage();
        }
        syncOptionsUi();
      }

      /** ??????????????????*/
      function gcd(a, b) {
        a = Math.abs(a); b = Math.abs(b);
        while (b) { var t = b; b = a % b; a = t; }
        return a || 1;
      }

      /** ??????????? = ????????*/
      function sameAsSelection() {
        if (!srcW) return;
        if (modeEl.value === 'resize') {
          outWEl.value = String(srcW);
          outHEl.value = String(srcH);
        } else {
          outWEl.value = String(sel.w);
          outHEl.value = String(sel.h);
        }
        presetEl.value = '';
      }

      /**
       * ????????????????v1 ??????
       * @returns {{dw:number,dh:number,clamped:boolean,sx:number,sy:number,sw:number,sh:number}}
       */
      function resolveExportGeom() {
        var wantW = Math.max(1, Math.min(SOFT_EDGE, Math.round(Number(outWEl.value) || 0)));
        var wantH = Math.max(1, Math.min(SOFT_EDGE, Math.round(Number(outHEl.value) || 0)));
        if (!wantW || !wantH) throw new Error('invalidOut');

        if (modeEl.value === 'resize') {
          var fit = fitEl.value;
          if (fit === 'contain') {
            /* ?????????scale ?? 1??????*/
            var needSc = Math.min(wantW / srcW, wantH / srcH);
            var sc = Math.min(1, needSc);
            var dw = Math.max(1, Math.round(srcW * sc));
            var dh = Math.max(1, Math.round(srcH * sc));
            return {
              dw: dw, dh: dh, canvasW: wantW, canvasH: wantH, fit: 'contain',
              clamped: needSc > 1, sx: 0, sy: 0, sw: srcW, sh: srcH
            };
          }
          /* cover??????????????????????????*/
          var tr = wantW / wantH;
          var ir = srcW / srcH;
          var sx = 0, sy = 0, sw = srcW, sh = srcH;
          if (ir > tr) {
            sh = srcH;
            sw = Math.round(sh * tr);
            sx = Math.round((srcW - sw) / 2);
          } else {
            sw = srcW;
            sh = Math.round(sw / tr);
            sy = Math.round((srcH - sh) / 2);
          }
          var dw = wantW;
          var dh = wantH;
          var clamped = false;
          if (sw < wantW || sh < wantH) {
            var sc2 = Math.min(sw / wantW, sh / wantH);
            dw = Math.max(1, Math.round(wantW * sc2));
            dh = Math.max(1, Math.round(wantH * sc2));
            clamped = true;
          }
          return { dw: dw, dh: dh, canvasW: dw, canvasH: dh, fit: 'cover', clamped: clamped, sx: sx, sy: sy, sw: sw, sh: sh };
        }

        /* crop ?? */
        if (sel.w < 1 || sel.h < 1) throw new Error('invalidSel');
        var sx2 = sel.x, sy2 = sel.y, sw2 = sel.w, sh2 = sel.h;
        var dw2 = wantW, dh2 = wantH;
        var clamped2 = false;
        if (wantW > sw2 || wantH > sh2) {
          var sc3 = Math.min(sw2 / wantW, sh2 / wantH, 1);
          dw2 = Math.max(1, Math.round(wantW * sc3));
          dh2 = Math.max(1, Math.round(wantH * sc3));
          clamped2 = true;
        }
        return { dw: dw2, dh: dh2, canvasW: dw2, canvasH: dh2, fit: null, clamped: clamped2, sx: sx2, sy: sy2, sw: sw2, sh: sh2 };
      }

      /**
       * ????/???????
       * @returns {Promise<void>}
       */
      function apply() {
        setError('');
        if (!sourceFile || !sourceBmp) { setError(msg.empty); return Promise.resolve(); }
        var mime = outputSel.value;
        if (encodeSupport[mime] === false) {
          setError(mime === 'image/webp' ? msg.webpOff : msg.encode);
          return Promise.resolve();
        }
        setStatus(msg.applying);
        btnApply.disabled = true;
        var q = quality01();
        var bg = jpegBg();
        var geom;
        try {
          geom = resolveExportGeom();
        } catch (e) {
          btnApply.disabled = false;
          setError(e && e.message === 'invalidSel' ? msg.invalidSel : msg.invalidOut);
          setStatus('');
          return Promise.resolve();
        }

        var canvas = document.createElement('canvas');
        canvas.width = geom.canvasW;
        canvas.height = geom.canvasH;
        var ctx = canvas.getContext('2d');
        if (!ctx) {
          btnApply.disabled = false;
          setError(msg.encode);
          return Promise.resolve();
        }
        if (mime === 'image/jpeg' || (geom.fit === 'contain' && mime === 'image/jpeg')) {
          ctx.fillStyle = bg;
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
        if (geom.fit === 'contain') {
          var dx = Math.round((geom.canvasW - geom.dw) / 2);
          var dy = Math.round((geom.canvasH - geom.dh) / 2);
          ctx.drawImage(sourceBmp, 0, 0, srcW, srcH, dx, dy, geom.dw, geom.dh);
        } else {
          ctx.drawImage(sourceBmp, geom.sx, geom.sy, geom.sw, geom.sh, 0, 0, geom.dw, geom.dh);
        }

        var warns = [];
        if (geom.clamped) warns.push(msg.noUpscale);

        return canvasToBlob(canvas, mime, q)
          .then(function (blob) {
            outputBlob = blob;
            var base = (sourceFile.name || 'image').replace(/\\.[^.]+$/, '');
            outputName = base + '-cropped.' + extFor(mime);
            btnDownload.disabled = false;
            var outUrl = URL.createObjectURL(blob);
            if (previewOut.dataset.url) URL.revokeObjectURL(previewOut.dataset.url);
            previewOut.dataset.url = outUrl;
            previewOut.src = outUrl;
            previewOut.hidden = false;
            var outW = canvas.width;
            var outH = canvas.height;
            statsOut.textContent = formatStats(blob.type || mime, outW, outH, blob.size);
            mapMeta.textContent = msg.mapTpl
              .replace('{sw}', String(geom.sw))
              .replace('{sh}', String(geom.sh))
              .replace('{ow}', String(outW))
              .replace('{oh}', String(outH));
            if (warns.length) setWarn(warns.join(' '));
            else if (!warnEl.textContent) setWarn('');
            setStatus(msg.done);
          })
          .catch(function (e) {
            var code = e && e.message;
            if (code === 'mismatch') setError(msg.mismatch);
            else setError(msg.encode);
            setStatus('');
          })
          .then(function () { btnApply.disabled = false; });
      }

      /** ???? Blob??*/
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

      /**
       * ????????????1:1 ????
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
        mapMeta.textContent = '';
        closeBmp();
        sourceFile = file;
        fileNameEl.textContent = file.name || '';

        var warns = [];
        if (file.size > SOFT_BYTES) warns.push(msg.large);
        if (/gif/i.test(file.type) || /gif$/i.test(file.name || '')) warns.push(msg.anim);
        if (warns.length) setWarn(warns.join(' '));

        return decodeImage(file)
          .then(function (dec) {
            sourceBmp = dec.bitmap;
            srcW = dec.w;
            srcH = dec.h;
            if (dec.w > SOFT_EDGE || dec.h > SOFT_EDGE) {
              setWarn((warnEl.textContent ? warnEl.textContent + ' ' : '') + msg.edge);
            }
            statsIn.textContent = formatStats(file.type || 'image/*', dec.w, dec.h, file.size);
            var r = aspectRatio();
            sel = maxCenteredSel(r == null ? 1 : r);
            layoutStage();
            syncOptionsUi();
          })
          .catch(function () {
            setError(msg.decode);
            statsIn.textContent = '';
            throw new Error('decode');
          });
      }

      /** ????????*/
      function clearAll() {
        closeBmp();
        sourceFile = null;
        outputBlob = null;
        srcW = srcH = 0;
        sel = { x: 0, y: 0, w: 0, h: 0 };
        fileInput.value = '';
        fileNameEl.textContent = '';
        setWarn(''); setError(''); setStatus('');
        var ctx = stage.getContext('2d');
        if (ctx) { ctx.clearRect(0, 0, stage.width, stage.height); }
        previewOut.hidden = true;
        if (previewOut.dataset.url) { URL.revokeObjectURL(previewOut.dataset.url); delete previewOut.dataset.url; }
        previewOut.removeAttribute('src');
        statsIn.textContent = ''; statsOut.textContent = ''; selMeta.textContent = ''; mapMeta.textContent = '';
        btnDownload.disabled = true;
      }

      /**
       * ??????????Apply??????????
       * @returns {Promise<void>}
       */
      function loadSample() {
        var c = document.createElement('canvas');
        c.width = 1600; c.height = 1000;
        var ctx = c.getContext('2d');
        if (!ctx) return Promise.resolve();
        var g = ctx.createLinearGradient(0, 0, c.width, c.height);
        g.addColorStop(0, '#0ea5e9');
        g.addColorStop(0.45, '#6366f1');
        g.addColorStop(1, '#f43f5e');
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, c.width, c.height);
        ctx.fillStyle = 'rgba(255,255,255,0.12)';
        ctx.fillRect(120, 80, 900, 700);
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 56px sans-serif';
        ctx.fillText('Sample crop', 160, 160);
        ctx.font = '28px sans-serif';
        ctx.fillText('1600 ? 1000', 160, 210);
        return new Promise(function (resolve) {
          c.toBlob(function (blob) {
            if (!blob) { resolve(); return; }
            var file = new File([blob], 'sample-crop.jpg', { type: 'image/jpeg' });
            aspectEl.value = '1:1';
            presetEl.value = '512x512';
            outWEl.value = '512';
            outHEl.value = '512';
            modeEl.value = 'crop';
            outputSel.value = 'image/jpeg';
            qualityEl.value = '90';
            loadFile(file)
              .then(function () { return apply(); })
              .then(resolve)
              .catch(function () { resolve(); });
          }, 'image/jpeg', 0.95);
        });
      }

      stage.addEventListener('pointerdown', onPointerDown);
      stage.addEventListener('pointermove', onPointerMove);
      stage.addEventListener('pointerup', onPointerUp);
      stage.addEventListener('pointercancel', onPointerUp);

      drop.addEventListener('dragover', function (e) {
        e.preventDefault(); drop.classList.add('dragover');
      });
      drop.addEventListener('dragleave', function () { drop.classList.remove('dragover'); });
      drop.addEventListener('drop', function (e) {
        e.preventDefault(); drop.classList.remove('dragover');
        var f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) loadFile(f).catch(function () {});
      });
      fileInput.addEventListener('change', function () {
        var f = fileInput.files && fileInput.files[0];
        if (f) loadFile(f).catch(function () {});
      });

      modeEl.addEventListener('change', function () { syncOptionsUi(); redrawStage(); });
      fitEl.addEventListener('change', syncOptionsUi);
      aspectEl.addEventListener('change', function () {
        syncOptionsUi();
        if (srcW && modeEl.value === 'crop') { applyAspectToSel(); redrawStage(); }
      });
      aspectWEl.addEventListener('change', function () {
        if (aspectEl.value === 'custom' && srcW) { applyAspectToSel(); redrawStage(); }
      });
      aspectHEl.addEventListener('change', function () {
        if (aspectEl.value === 'custom' && srcW) { applyAspectToSel(); redrawStage(); }
      });
      presetEl.addEventListener('change', function () { applyPreset(presetEl.value); });
      outWEl.addEventListener('input', function () { presetEl.value = ''; });
      outHEl.addEventListener('input', function () { presetEl.value = ''; });
      outputSel.addEventListener('change', syncOptionsUi);
      qualityEl.addEventListener('input', syncOptionsUi);
      btnApply.addEventListener('click', function () { apply(); });
      btnDownload.addEventListener('click', download);
      btnSample.addEventListener('click', function () { loadSample(); });
      btnClear.addEventListener('click', clearAll);
      btnSame.addEventListener('click', sameAsSelection);
      window.addEventListener('resize', function () {
        if (sourceBmp) layoutStage();
      });

      /** ?????????? Apply????????????*/
      probeAll().then(function () {
        syncOptionsUi();
        return loadSample();
      });
    })();
  </script>`;

	const toolMeta = getToolBySlug('image-crop');
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
