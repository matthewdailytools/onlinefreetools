/**
 * 文字水印工具页：在单张本地图片上绘制文字水印（字号/颜色/透明度/旋转/位置）并导出。
 * slug: add-watermark（单页；不拆 text-watermark / photo-stamp 等近义 URL）。
 * 规格：work-tasks/add-watermark/02-tool-info.md
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
 * 渲染文字水印工具页。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderAddWatermarkPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/add-watermark';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_add_watermark_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_add_watermark_description');

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
			currentSlug: 'add-watermark',
			currentAnchor: '#converter',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	/** 页内样式：预览画布、九宫格位置按钮。 */
	const extraHeadHtml = `
  <style>
    .tools-bar { gap: .5rem; }
    #awmPreview {
      max-width: 100%; max-height: 420px;
      border: 1px solid #dee2e6; border-radius: .5rem; background: #fff;
    }
    .awm-preview-wrap { min-height: 120px; display: flex; align-items: center; justify-content: center; }
    .awm-pos-grid { display: grid; grid-template-columns: repeat(3, 2rem); gap: .25rem; }
    .awm-pos-grid .btn { padding: .15rem .35rem; line-height: 1.1; }
    #awmJpegBgWrap[hidden] { display: none !important; }
  </style>`;

	const contentHtml = `
    <div id="converter" class="tool-page-heading mb-3">
      <h1 class="h4 mb-0">${escapeHtml(t(opts.lang, 'tool_add_watermark_title'))}</h1>
    </div>

    <label class="tool-dropzone awm-drop mb-3" id="awmDrop" for="awmFile">
      <input type="file" id="awmFile" accept="image/jpeg,image/png,image/webp,image/gif,image/*">
      <span class="tool-dropzone-title">${escapeHtml(t(opts.lang, 'tool_add_watermark_choose_file'))}</span>
      <span class="tool-dropzone-hint">${escapeHtml(t(opts.lang, 'tool_add_watermark_drop_hint'))}</span>
      <span id="awmFileName" class="tool-dropzone-file"></span>
    </label>

    <div class="row g-2 mb-2 align-items-end">
      <div class="col-12 col-md-4">
        <label class="form-label mb-0" for="awmText">${escapeHtml(t(opts.lang, 'tool_add_watermark_text_label'))}</label>
        <input type="text" id="awmText" class="form-control form-control-sm" value="SAMPLE" maxlength="200">
      </div>
      <div class="col-6 col-md-2">
        <label class="form-label mb-0" for="awmFontSize">${escapeHtml(t(opts.lang, 'tool_add_watermark_font_size_label'))}</label>
        <input type="number" id="awmFontSize" class="form-control form-control-sm" min="8" max="512" value="48">
      </div>
      <div class="col-6 col-md-2">
        <label class="form-label mb-0" for="awmColor">${escapeHtml(t(opts.lang, 'tool_add_watermark_color_label'))}</label>
        <input type="color" id="awmColor" class="form-control form-control-color form-control-sm" value="#ffffff">
      </div>
      <div class="col-6 col-md-2">
        <label class="form-label mb-0" for="awmOpacity">${escapeHtml(t(opts.lang, 'tool_add_watermark_opacity_label'))}</label>
        <input type="range" id="awmOpacity" class="form-range" min="0" max="100" value="55">
        <span id="awmOpacityVal" class="small">55%</span>
      </div>
      <div class="col-6 col-md-2">
        <label class="form-label mb-0" for="awmRotation">${escapeHtml(t(opts.lang, 'tool_add_watermark_rotation_label'))}</label>
        <input type="number" id="awmRotation" class="form-control form-control-sm" min="-180" max="180" value="-35">
        <span class="small text-muted">&deg;</span>
      </div>
    </div>

    <div class="row g-2 mb-2 align-items-end">
      <div class="col-6 col-md-2">
        <label class="form-label mb-0" for="awmX">${escapeHtml(t(opts.lang, 'tool_add_watermark_x_label'))}</label>
        <input type="number" id="awmX" class="form-control form-control-sm" min="0" step="any" value="0.5">
        <span id="awmPosModeHint" class="small text-muted">${escapeHtml(t(opts.lang, 'tool_add_watermark_pos_fraction_hint'))}</span>
      </div>
      <div class="col-6 col-md-2">
        <label class="form-label mb-0" for="awmY">${escapeHtml(t(opts.lang, 'tool_add_watermark_y_label'))}</label>
        <input type="number" id="awmY" class="form-control form-control-sm" min="0" step="any" value="0.5">
      </div>
      <div class="col-12 col-md-4">
        <span class="form-label mb-0 d-block">${escapeHtml(t(opts.lang, 'tool_add_watermark_position_label'))}</span>
        <div class="awm-pos-grid" role="group" aria-label="${escapeHtml(t(opts.lang, 'tool_add_watermark_position_label'))}">
          <button type="button" class="btn btn-outline-secondary btn-sm awm-pos" data-pos="tl" title="${escapeHtml(t(opts.lang, 'tool_add_watermark_pos_tl'))}">&#8598;</button>
          <button type="button" class="btn btn-outline-secondary btn-sm awm-pos" data-pos="tc" title="${escapeHtml(t(opts.lang, 'tool_add_watermark_pos_tc'))}">&#8593;</button>
          <button type="button" class="btn btn-outline-secondary btn-sm awm-pos" data-pos="tr" title="${escapeHtml(t(opts.lang, 'tool_add_watermark_pos_tr'))}">&#8599;</button>
          <button type="button" class="btn btn-outline-secondary btn-sm awm-pos" data-pos="ml" title="${escapeHtml(t(opts.lang, 'tool_add_watermark_pos_ml'))}">&#8592;</button>
          <button type="button" class="btn btn-outline-secondary btn-sm awm-pos" data-pos="mc" title="${escapeHtml(t(opts.lang, 'tool_add_watermark_pos_mc'))}">&#9679;</button>
          <button type="button" class="btn btn-outline-secondary btn-sm awm-pos" data-pos="mr" title="${escapeHtml(t(opts.lang, 'tool_add_watermark_pos_mr'))}">&#8594;</button>
          <button type="button" class="btn btn-outline-secondary btn-sm awm-pos" data-pos="bl" title="${escapeHtml(t(opts.lang, 'tool_add_watermark_pos_bl'))}">&#8601;</button>
          <button type="button" class="btn btn-outline-secondary btn-sm awm-pos" data-pos="bc" title="${escapeHtml(t(opts.lang, 'tool_add_watermark_pos_bc'))}">&#8595;</button>
          <button type="button" class="btn btn-outline-secondary btn-sm awm-pos" data-pos="br" title="${escapeHtml(t(opts.lang, 'tool_add_watermark_pos_br'))}">&#8600;</button>
        </div>
      </div>
      <div class="col-6 col-md-2">
        <label class="form-label mb-0" for="awmFormat">${escapeHtml(t(opts.lang, 'tool_add_watermark_format_label'))}</label>
        <select id="awmFormat" class="form-select form-select-sm">
          <option value="image/jpeg">${escapeHtml(t(opts.lang, 'tool_add_watermark_format_jpeg'))}</option>
          <option value="image/webp" selected>${escapeHtml(t(opts.lang, 'tool_add_watermark_format_webp'))}</option>
          <option value="image/png">${escapeHtml(t(opts.lang, 'tool_add_watermark_format_png'))}</option>
        </select>
      </div>
      <div class="col-6 col-md-2">
        <label class="form-label mb-0" for="awmQuality">${escapeHtml(t(opts.lang, 'tool_add_watermark_quality_label'))}</label>
        <input type="range" id="awmQuality" class="form-range" min="50" max="100" value="90" style="width:8rem;">
        <span id="awmQualityVal" class="small ms-1">0.90</span>
      </div>
    </div>

    <div class="row g-2 mb-2">
      <div class="col-6 col-md-3" id="awmJpegBgWrap">
        <label class="form-label mb-0" for="awmJpegBg">${escapeHtml(t(opts.lang, 'tool_add_watermark_jpeg_bg_label'))}</label>
        <input type="color" id="awmJpegBg" class="form-control form-control-color form-control-sm" value="#ffffff">
      </div>
    </div>

    <div class="d-flex align-items-center tools-bar mb-2 flex-wrap">
      <button type="button" id="awmBtnApply" class="btn btn-primary btn-sm">${escapeHtml(t(opts.lang, 'tool_add_watermark_apply'))}</button>
      <button type="button" id="awmBtnDownload" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(t(opts.lang, 'tool_add_watermark_download'))}</button>
      <button type="button" id="awmBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_add_watermark_sample'))}</button>
      <button type="button" id="awmBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_add_watermark_clear'))}</button>
    </div>

    <p id="awmWarn" class="small text-warning mb-2" style="display:none;" role="status"></p>
    <p id="awmError" class="small text-danger mb-2" style="display:none;" role="alert"></p>
    <p id="awmStatus" class="small text-muted mb-2" role="status"></p>

    <div class="mb-3">
      <label class="form-label">${escapeHtml(t(opts.lang, 'tool_add_watermark_preview_label'))}</label>
      <div class="awm-preview-wrap">
        <canvas id="awmPreview" hidden></canvas>
      </div>
    </div>

    <p class="tool-lead mb-4">${escapeHtml(description)}</p>`;

	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: 'tool_add_watermark',
		mode: 'rules',
		usecaseCount: 3,
		ruleItemCount: 4,
	});

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: 'MDN — CanvasRenderingContext2D.fillText()',
				href: 'https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillText',
			},
			{
				label: 'MDN — globalAlpha',
				href: 'https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalAlpha',
			},
			{
				label: 'MDN — CanvasRenderingContext2D.rotate()',
				href: 'https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/rotate',
			},
		],
	});

	/**
	 * 客户端脚本：解码单图、Canvas fillText 绘制水印、预览与导出。
	 */
	const extraBodyHtml = `
  <script>
    (function () {
      /** 单文件软警告阈值（字节）。 */
      var SOFT_BYTES = 25 * 1024 * 1024;
      /** 单边软警告阈值（像素）。 */
      var SOFT_EDGE = 8192;
      /** 预览最大显示边长（像素）。 */
      var PREVIEW_MAX_EDGE = 480;

      var drop = document.getElementById('awmDrop');
      var fileInput = document.getElementById('awmFile');
      var fileNameEl = document.getElementById('awmFileName');
      var textEl = document.getElementById('awmText');
      var fontSizeEl = document.getElementById('awmFontSize');
      var colorEl = document.getElementById('awmColor');
      var opacityEl = document.getElementById('awmOpacity');
      var opacityVal = document.getElementById('awmOpacityVal');
      var rotationEl = document.getElementById('awmRotation');
      var xEl = document.getElementById('awmX');
      var yEl = document.getElementById('awmY');
      var posModeHint = document.getElementById('awmPosModeHint');
      var formatEl = document.getElementById('awmFormat');
      var qualityEl = document.getElementById('awmQuality');
      var qualityVal = document.getElementById('awmQualityVal');
      var jpegBgWrap = document.getElementById('awmJpegBgWrap');
      var jpegBgEl = document.getElementById('awmJpegBg');
      var btnApply = document.getElementById('awmBtnApply');
      var btnDownload = document.getElementById('awmBtnDownload');
      var btnSample = document.getElementById('awmBtnSample');
      var btnClear = document.getElementById('awmBtnClear');
      var warnEl = document.getElementById('awmWarn');
      var errEl = document.getElementById('awmError');
      var statusEl = document.getElementById('awmStatus');
      var preview = document.getElementById('awmPreview');

      var msg = {
        empty: ${JSON.stringify(t(opts.lang, 'tool_add_watermark_empty'))},
        emptyText: ${JSON.stringify(t(opts.lang, 'tool_add_watermark_empty_text'))},
        decodeFail: ${JSON.stringify(t(opts.lang, 'tool_add_watermark_err_decode'))},
        encodeFail: ${JSON.stringify(t(opts.lang, 'tool_add_watermark_err_encode'))},
        large: ${JSON.stringify(t(opts.lang, 'tool_add_watermark_warn_large'))},
        edge: ${JSON.stringify(t(opts.lang, 'tool_add_watermark_warn_edge'))},
        working: ${JSON.stringify(t(opts.lang, 'tool_add_watermark_status_working'))},
        done: ${JSON.stringify(t(opts.lang, 'tool_add_watermark_status_done'))},
        posFraction: ${JSON.stringify(t(opts.lang, 'tool_add_watermark_pos_fraction_hint'))},
        posPixel: ${JSON.stringify(t(opts.lang, 'tool_add_watermark_pos_pixel_hint'))}
      };

      /**
       * @typedef {{ file: File, bitmap: ImageBitmap|HTMLImageElement, w: number, h: number }} SourceState
       */

      /** @type {SourceState|null} 当前已解码源图。 */
      var source = null;
      /** @type {Blob|null} 最近一次导出的 Blob，供下载。 */
      var resultBlob = null;
      /** 预览缩放：屏幕像素 / 源像素。 */
      var displayScale = 1;
      /** 锚点模式：fraction 表示 x/y 为 0–1 比例；pixel 表示像素坐标。 */
      var anchorMode = 'fraction';

      /** 九宫格锚点比例映射（tl=0.1,0.1 … br=0.9,0.9）。 */
      var GRID_FRACTIONS = {
        tl: { x: 0.1, y: 0.1 },
        tc: { x: 0.5, y: 0.1 },
        tr: { x: 0.9, y: 0.1 },
        ml: { x: 0.1, y: 0.5 },
        mc: { x: 0.5, y: 0.5 },
        mr: { x: 0.9, y: 0.5 },
        bl: { x: 0.1, y: 0.9 },
        bc: { x: 0.5, y: 0.9 },
        br: { x: 0.9, y: 0.9 }
      };

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

      /** 同步透明度标签、质量滑条与 JPEG 背景控件。 */
      function syncUiLabels() {
        opacityVal.textContent = String(Math.max(0, Math.min(100, parseInt(opacityEl.value, 10) || 0))) + '%';
        var isPng = formatEl.value === 'image/png';
        qualityEl.disabled = isPng;
        var q = Math.max(0.5, Math.min(1, Number(qualityEl.value) / 100));
        qualityVal.textContent = isPng ? '\u2014' : q.toFixed(2);
        jpegBgWrap.style.display = formatEl.value === 'image/jpeg' ? '' : 'none';
        posModeHint.textContent = anchorMode === 'fraction' ? msg.posFraction : msg.posPixel;
      }

      /**
       * 读取控件值为水印绘制参数。
       * @returns {{ text: string, fontSize: number, color: string, opacity: number, rotation: number, ax: number, ay: number }}
       */
      function readControls() {
        var text = (textEl.value || '').trim();
        var fontSize = Math.max(8, Math.min(512, parseInt(fontSizeEl.value, 10) || 48));
        var color = colorEl.value || '#ffffff';
        var opacity = Math.max(0, Math.min(100, parseInt(opacityEl.value, 10) || 0));
        var rotation = Math.max(-180, Math.min(180, parseInt(rotationEl.value, 10) || 0));
        var rawX = parseFloat(xEl.value);
        var rawY = parseFloat(yEl.value);
        if (!isFinite(rawX)) rawX = anchorMode === 'fraction' ? 0.5 : 0;
        if (!isFinite(rawY)) rawY = anchorMode === 'fraction' ? 0.5 : 0;
        return { text: text, fontSize: fontSize, color: color, opacity: opacity, rotation: rotation, rawX: rawX, rawY: rawY };
      }

      /**
       * 将原始 x/y 解析为画布像素锚点。
       * @param {number} canvasW 画布宽
       * @param {number} canvasH 画布高
       * @param {number} rawX 输入 x
       * @param {number} rawY 输入 y
       * @returns {{ ax: number, ay: number }}
       */
      function resolveAnchor(canvasW, canvasH, rawX, rawY) {
        if (anchorMode === 'fraction') {
          var fx = Math.max(0, Math.min(1, rawX));
          var fy = Math.max(0, Math.min(1, rawY));
          return { ax: fx * canvasW, ay: fy * canvasH };
        }
        return {
          ax: Math.max(0, Math.min(canvasW, rawX)),
          ay: Math.max(0, Math.min(canvasH, rawY))
        };
      }

      /**
       * 在 2D 上下文上绘制文字水印（translate → rotate → fillText 居中锚点）。
       * @param {CanvasRenderingContext2D} ctx
       * @param {number} canvasW 画布宽
       * @param {number} canvasH 画布高
       * @param {ReturnType<typeof readControls>} ctrl
       */
      function drawWatermarkText(ctx, canvasW, canvasH, ctrl) {
        if (!ctrl.text) return;
        var anchor = resolveAnchor(canvasW, canvasH, ctrl.rawX, ctrl.rawY);
        ctx.save();
        ctx.globalAlpha = ctrl.opacity / 100;
        ctx.translate(anchor.ax, anchor.ay);
        ctx.rotate((ctrl.rotation * Math.PI) / 180);
        ctx.fillStyle = ctrl.color;
        ctx.font = 'bold ' + ctrl.fontSize + 'px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(ctrl.text, 0, 0);
        ctx.restore();
      }

      /**
       * 将 Blob 解码为位图。
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

      /** 释放 ImageBitmap 资源。 */
      function disposeSource() {
        if (!source) return;
        if (source.bitmap && typeof source.bitmap.close === 'function') source.bitmap.close();
      }

      /** 根据源图尺寸与文件大小刷新软警告。 */
      function refreshWarnings() {
        var warns = [];
        if (source && source.file.size > SOFT_BYTES) warns.push(msg.large);
        if (source && (source.w > SOFT_EDGE || source.h > SOFT_EDGE)) warns.push(msg.edge);
        setWarn(warns.join(' '));
      }

      /**
       * 构建全尺寸合成画布：底图 + 文字水印。
       * @param {boolean} forJpeg 导出 JPEG 时是否先铺底色
       * @returns {HTMLCanvasElement}
       */
      function buildCompositeCanvas(forJpeg) {
        if (!source) throw new Error('missing');
        var ctrl = readControls();
        var canvas = document.createElement('canvas');
        canvas.width = source.w;
        canvas.height = source.h;
        var ctx = canvas.getContext('2d');
        if (!ctx) throw new Error('encode');
        if (forJpeg) {
          ctx.fillStyle = jpegBgEl.value || '#ffffff';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
        ctx.drawImage(source.bitmap, 0, 0);
        drawWatermarkText(ctx, canvas.width, canvas.height, ctrl);
        return canvas;
      }

      /** 在预览画布上绘制缩放后的水印效果。 */
      function drawPreview() {
        resultBlob = null;
        btnDownload.disabled = true;
        if (!source) {
          preview.hidden = true;
          return;
        }
        displayScale = Math.min(1, PREVIEW_MAX_EDGE / Math.max(source.w, source.h, 1));
        preview.width = Math.max(1, Math.round(source.w * displayScale));
        preview.height = Math.max(1, Math.round(source.h * displayScale));
        preview.hidden = false;
        var ctx = preview.getContext('2d');
        if (!ctx) return;
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, preview.width, preview.height);
        ctx.drawImage(source.bitmap, 0, 0, preview.width, preview.height);
        var ctrl = readControls();
        var scaledCtrl = {
          text: ctrl.text,
          fontSize: Math.max(1, Math.round(ctrl.fontSize * displayScale)),
          color: ctrl.color,
          opacity: ctrl.opacity,
          rotation: ctrl.rotation,
          rawX: ctrl.rawX,
          rawY: ctrl.rawY
        };
        if (anchorMode === 'pixel') {
          scaledCtrl.rawX = ctrl.rawX * displayScale;
          scaledCtrl.rawY = ctrl.rawY * displayScale;
          var prevMode = anchorMode;
          anchorMode = 'pixel';
          drawWatermarkText(ctx, preview.width, preview.height, scaledCtrl);
          anchorMode = prevMode;
        } else {
          drawWatermarkText(ctx, preview.width, preview.height, scaledCtrl);
        }
      }

      /**
       * 九宫格按钮：将锚点设为画布比例坐标。
       * @param {string} pos tl|tc|tr|ml|mc|mr|bl|bc|br
       */
      function applyGridPosition(pos) {
        var pt = GRID_FRACTIONS[pos];
        if (!pt) return;
        anchorMode = 'fraction';
        xEl.value = String(pt.x);
        yEl.value = String(pt.y);
        syncUiLabels();
        drawPreview();
      }

      /**
       * 从 File 加载源图并刷新预览。
       * @param {File} file
       * @returns {Promise<void>}
       */
      function loadFile(file) {
        setError('');
        disposeSource();
        source = null;
        fileNameEl.textContent = file.name || '';
        return decodeImage(file)
          .then(function (dec) {
            source = { file: file, bitmap: dec.bitmap, w: dec.w, h: dec.h };
            refreshWarnings();
            drawPreview();
          })
          .catch(function () {
            setError(msg.decodeFail);
            preview.hidden = true;
            setStatus('');
          });
      }

      /**
       * 应用水印并导出 Blob，启用下载按钮。
       * @returns {Promise<void>}
       */
      function applyWatermark() {
        setError('');
        resultBlob = null;
        btnDownload.disabled = true;
        if (!source) {
          setError(msg.empty);
          return Promise.resolve();
        }
        var ctrl = readControls();
        if (!ctrl.text) {
          setError(msg.emptyText);
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

      /** 下载最近一次导出的 Blob。 */
      function downloadResult() {
        if (!resultBlob) return;
        var mime = resultBlob.type || formatEl.value;
        var ext = mime === 'image/png' ? 'png' : mime === 'image/webp' ? 'webp' : 'jpg';
        var url = URL.createObjectURL(resultBlob);
        var a = document.createElement('a');
        a.href = url;
        a.download = 'watermarked.' + ext;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      }

      /**
       * 生成渐变样例底图 + 默认 SAMPLE 斜水印，自动应用并导出。
       * @returns {Promise<void>}
       */
      function loadSample() {
        clearAll(false);
        var c = document.createElement('canvas');
        c.width = 640;
        c.height = 480;
        var ctx = c.getContext('2d');
        var grad = ctx.createLinearGradient(0, 0, 640, 480);
        grad.addColorStop(0, '#1c83a8');
        grad.addColorStop(0.5, '#2d6a4f');
        grad.addColorStop(1, '#e8a838');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 640, 480);
        ctx.fillStyle = 'rgba(255,255,255,0.12)';
        ctx.fillRect(48, 48, 544, 384);
        return new Promise(function (resolve) {
          c.toBlob(function (blob) {
            if (!blob) { resolve(); return; }
            loadFile(new File([blob], 'sample-gradient.png', { type: 'image/png' }))
              .then(function () {
                textEl.value = 'SAMPLE';
                fontSizeEl.value = '52';
                colorEl.value = '#ffffff';
                opacityEl.value = '55';
                rotationEl.value = '-35';
                anchorMode = 'fraction';
                applyGridPosition('mc');
                syncUiLabels();
                return applyWatermark();
              })
              .then(resolve);
          }, 'image/png');
        });
      }

      /**
       * 重置全部状态。
       * @param {boolean} resetInputs 是否清空 file input 与控件默认值
       */
      function clearAll(resetInputs) {
        disposeSource();
        source = null;
        if (resetInputs !== false) {
          fileInput.value = '';
          textEl.value = 'SAMPLE';
          fontSizeEl.value = '48';
          colorEl.value = '#ffffff';
          opacityEl.value = '55';
          rotationEl.value = '-35';
          anchorMode = 'fraction';
          xEl.value = '0.5';
          yEl.value = '0.5';
        }
        fileNameEl.textContent = '';
        resultBlob = null;
        btnDownload.disabled = true;
        preview.hidden = true;
        setError('');
        setWarn('');
        setStatus('');
        syncUiLabels();
      }

      /** 手动编辑 x/y 时：值大于 1 视为像素锚点，否则视为比例。 */
      function onAnchorInputChange() {
        var rx = parseFloat(xEl.value);
        var ry = parseFloat(yEl.value);
        if (isFinite(rx) && isFinite(ry) && (rx > 1 || ry > 1)) {
          anchorMode = 'pixel';
        } else if (isFinite(rx) && isFinite(ry) && rx >= 0 && rx <= 1 && ry >= 0 && ry <= 1) {
          anchorMode = 'fraction';
        }
        syncUiLabels();
        drawPreview();
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
        if (f) loadFile(f);
      });
      fileInput.addEventListener('change', function () {
        var f = fileInput.files && fileInput.files[0];
        if (f) loadFile(f);
      });

      document.querySelectorAll('.awm-pos').forEach(function (btn) {
        btn.addEventListener('click', function () {
          applyGridPosition(btn.getAttribute('data-pos') || 'mc');
        });
      });

      [textEl, fontSizeEl, colorEl, opacityEl, rotationEl].forEach(function (el) {
        el.addEventListener('input', function () {
          syncUiLabels();
          drawPreview();
        });
        el.addEventListener('change', function () {
          syncUiLabels();
          drawPreview();
        });
      });
      xEl.addEventListener('input', onAnchorInputChange);
      xEl.addEventListener('change', onAnchorInputChange);
      yEl.addEventListener('input', onAnchorInputChange);
      yEl.addEventListener('change', onAnchorInputChange);
      formatEl.addEventListener('change', syncUiLabels);
      qualityEl.addEventListener('input', syncUiLabels);

      btnApply.addEventListener('click', function () { applyWatermark(); });
      btnDownload.addEventListener('click', downloadResult);
      btnSample.addEventListener('click', function () { loadSample(); });
      btnClear.addEventListener('click', function () { clearAll(true); });

      syncUiLabels();
      /** 进页自动跑样例并应用水印（tool-creation 规则）。 */
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('add-watermark');
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
