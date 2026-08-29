/**
 * Flip-image tool page: mirror a local image horizontally and/or vertically via Canvas scale.
 * slug: flip-image (single page; no mirror-horizontal / flip-vertical thin URLs).
 * Spec: work-tasks/flip-image/02-tool-info.md
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
 * Prefix pathname with lang when not default.
 * 非默认语言时在路径前加语言前缀。
 * @param lang Active UI language / 当前界面语言
 * @param pathname Site path / 站点路径
 * @param defaultLang Default (unprefixed) language / 默认（无前缀）语言
 */
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * Render the flip-image tool page.
 * 渲染图片翻转工具页。
 * @param opts.lang Active UI language / 当前界面语言
 * @param opts.defaultLang Default (unprefixed) language / 默认语言
 * @param opts.enabledLangs Enabled language list / 已启用语言列表
 */
export const renderFlipImagePage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/flip-image';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_flip_image_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_flip_image_description');

	const navItems = buildToolPageNavItems(opts.lang, opts.defaultLang);

	/** Always include lang segment for hreflang map values. / hreflang 映射始终带语言段。 */
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
			currentSlug: 'flip-image',
			currentAnchor: '#converter',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	const extraHeadHtml = `
  <style>
    .tools-bar { gap: .5rem; }
    .opt-group { gap: .75rem; align-items: center; }
    #fiPreview {
      max-width: 100%; max-height: 420px;
      border: 1px solid #dee2e6; border-radius: .5rem; background:
        linear-gradient(45deg, #eee 25%, transparent 25%),
        linear-gradient(-45deg, #eee 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, #eee 75%),
        linear-gradient(-45deg, transparent 75%, #eee 75%);
      background-size: 16px 16px; background-position: 0 0, 0 8px, 8px -8px, -8px 0;
    }
    .fi-preview-wrap { min-height: 120px; display: flex; align-items: center; justify-content: center; }
    #fiQuality[disabled] { opacity: .5; }
    #fiJpegBgWrap[hidden] { display: none !important; }
  </style>`;

	const contentHtml = `
    <div id="converter" class="tool-page-heading mb-3">
      <h1 class="h4 mb-0">${escapeHtml(t(opts.lang, 'tool_flip_image_title'))}</h1>
    </div>

    <label class="tool-dropzone fi-drop mb-3" id="fiDrop" for="fiFile">
      <input type="file" id="fiFile" accept="image/jpeg,image/png,image/webp,image/gif,image/*">
      <span class="tool-dropzone-title">${escapeHtml(t(opts.lang, 'tool_flip_image_choose_file'))}</span>
      <span class="tool-dropzone-hint">${escapeHtml(t(opts.lang, 'tool_flip_image_drop_hint'))}</span>
      <span id="fiFileName" class="tool-dropzone-file"></span>
    </label>

    <div class="d-flex align-items-center opt-group mb-2 flex-wrap">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="fiFlipH" checked>
        <label class="form-check-label" for="fiFlipH">${escapeHtml(t(opts.lang, 'tool_flip_image_flip_h'))}</label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="fiFlipV">
        <label class="form-check-label" for="fiFlipV">${escapeHtml(t(opts.lang, 'tool_flip_image_flip_v'))}</label>
      </div>
    </div>

    <div class="row g-2 mb-2">
      <div class="col-6 col-md-2">
        <label class="form-label mb-0" for="fiFormat">${escapeHtml(t(opts.lang, 'tool_flip_image_format_label'))}</label>
        <select id="fiFormat" class="form-select form-select-sm">
          <option value="image/jpeg">${escapeHtml(t(opts.lang, 'tool_flip_image_format_jpeg'))}</option>
          <option value="image/webp" selected>${escapeHtml(t(opts.lang, 'tool_flip_image_format_webp'))}</option>
          <option value="image/png">${escapeHtml(t(opts.lang, 'tool_flip_image_format_png'))}</option>
        </select>
      </div>
      <div class="col-6 col-md-2">
        <label class="form-label mb-0" for="fiQuality">${escapeHtml(t(opts.lang, 'tool_flip_image_quality_label'))}</label>
        <input type="range" id="fiQuality" class="form-range" min="50" max="100" value="90" style="width:8rem;">
        <span id="fiQualityVal" class="small ms-1">0.90</span>
      </div>
      <div class="col-6 col-md-3" id="fiJpegBgWrap">
        <label class="form-label mb-0" for="fiJpegBg">${escapeHtml(t(opts.lang, 'tool_flip_image_jpeg_bg_label'))}</label>
        <input type="color" id="fiJpegBg" class="form-control form-control-color form-control-sm" value="#ffffff">
      </div>
    </div>

    <div class="d-flex align-items-center tools-bar mb-2 flex-wrap">
      <button type="button" id="fiBtnApply" class="btn btn-primary btn-sm">${escapeHtml(t(opts.lang, 'tool_flip_image_apply'))}</button>
      <button type="button" id="fiBtnDownload" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(t(opts.lang, 'tool_flip_image_download'))}</button>
      <button type="button" id="fiBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_flip_image_sample'))}</button>
      <button type="button" id="fiBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_flip_image_clear'))}</button>
    </div>

    <p id="fiWarn" class="small text-warning mb-2" style="display:none;" role="status"></p>
    <p id="fiError" class="small text-danger mb-2" style="display:none;" role="alert"></p>
    <p id="fiStatus" class="small text-muted mb-2" role="status"></p>

    <div class="mb-3">
      <label class="form-label">${escapeHtml(t(opts.lang, 'tool_flip_image_preview_label'))}</label>
      <div class="fi-preview-wrap">
        <canvas id="fiPreview" hidden></canvas>
      </div>
    </div>

    <p class="tool-lead mb-4">${escapeHtml(description)}</p>`;

	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: 'tool_flip_image',
		mode: 'rules',
		usecaseCount: 3,
		ruleItemCount: 4,
	});

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{ label: 'MDN \u2014 CanvasRenderingContext2D.scale()', href: 'https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/scale' },
			{ label: 'MDN \u2014 HTMLCanvasElement.toBlob()', href: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob' },
		],
	});

	/**
	 * Client script: decode image, flip via scale(-1,1)/(1,-1), preview and export.
	 * 客户端脚本：解码图片，用 scale 水平/垂直翻转，预览并导出。
	 */
	const extraBodyHtml = `
  <script>
    (function () {
      /** Soft warn when file exceeds this size (bytes). / 单文件超过此字节数时软警告。 */
      var SOFT_BYTES = 25 * 1024 * 1024;
      /** Soft warn when canvas edge exceeds this (px). / 边长超过此像素时软警告。 */
      var SOFT_EDGE = 8192;
      /** Max preview display edge (px) before downscaling for screen. / 预览最大显示边长。 */
      var PREVIEW_MAX_EDGE = 480;

      var drop = document.getElementById('fiDrop');
      var fileInput = document.getElementById('fiFile');
      var fileNameEl = document.getElementById('fiFileName');
      var flipHEl = document.getElementById('fiFlipH');
      var flipVEl = document.getElementById('fiFlipV');
      var formatEl = document.getElementById('fiFormat');
      var qualityEl = document.getElementById('fiQuality');
      var qualityVal = document.getElementById('fiQualityVal');
      var jpegBgWrap = document.getElementById('fiJpegBgWrap');
      var jpegBgEl = document.getElementById('fiJpegBg');
      var btnApply = document.getElementById('fiBtnApply');
      var btnDownload = document.getElementById('fiBtnDownload');
      var btnSample = document.getElementById('fiBtnSample');
      var btnClear = document.getElementById('fiBtnClear');
      var warnEl = document.getElementById('fiWarn');
      var errEl = document.getElementById('fiError');
      var statusEl = document.getElementById('fiStatus');
      var preview = document.getElementById('fiPreview');

      var msg = {
        empty: ${JSON.stringify(t(opts.lang, 'tool_flip_image_empty'))},
        noFlip: ${JSON.stringify(t(opts.lang, 'tool_flip_image_no_flip'))},
        decodeFail: ${JSON.stringify(t(opts.lang, 'tool_flip_image_err_decode'))},
        encodeFail: ${JSON.stringify(t(opts.lang, 'tool_flip_image_err_encode'))},
        large: ${JSON.stringify(t(opts.lang, 'tool_flip_image_warn_large'))},
        edge: ${JSON.stringify(t(opts.lang, 'tool_flip_image_warn_edge'))},
        animation: ${JSON.stringify(t(opts.lang, 'tool_flip_image_warn_animation'))},
        working: ${JSON.stringify(t(opts.lang, 'tool_flip_image_status_working'))},
        done: ${JSON.stringify(t(opts.lang, 'tool_flip_image_status_done'))}
      };

      /**
       * @typedef {{ file: File, bitmap: ImageBitmap|HTMLImageElement, w: number, h: number }} SourceState
       */

      /** @type {SourceState|null} Loaded source image. / 已加载的源图。 */
      var sourceLayer = null;
      /** @type {Blob|null} Last exported blob for download. / 上次导出的 Blob。 */
      var resultBlob = null;
      /** Display scale: preview pixels per source pixel. / 预览相对源图缩放比。 */
      var displayScale = 1;

      /** Show or hide warning line. / 显示或隐藏警告行。 */
      function setWarn(text) {
        if (!text) { warnEl.style.display = 'none'; warnEl.textContent = ''; return; }
        warnEl.textContent = text;
        warnEl.style.display = '';
      }

      /** Show or hide error line. / 显示或隐藏错误行。 */
      function setError(text) {
        if (!text) { errEl.style.display = 'none'; errEl.textContent = ''; return; }
        errEl.textContent = text;
        errEl.style.display = '';
      }

      /** Update status line. / 更新状态行。 */
      function setStatus(text) {
        statusEl.textContent = text || '';
      }

      /**
       * Decode blob to ImageBitmap or HTMLImageElement.
       * 将 Blob 解码为 ImageBitmap 或 HTMLImageElement。
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

      /**
       * Close ImageBitmap if applicable.
       * 若适用则关闭 ImageBitmap。
       * @param {SourceState|null} layer
       */
      function disposeSource(layer) {
        if (!layer) return;
        if (layer.bitmap && typeof layer.bitmap.close === 'function') layer.bitmap.close();
      }

      /**
       * Read flip checkbox state.
       * 读取翻转复选框状态。
       * @returns {{ flipH: boolean, flipV: boolean }}
       */
      function readFlipOptions() {
        return { flipH: !!flipHEl.checked, flipV: !!flipVEl.checked };
      }

      /**
       * Build full-resolution canvas with scale(-1,1) and/or scale(1,-1) applied.
       * 用 scale 变换构建全分辨率翻转画布。
       * @param {ImageBitmap|HTMLImageElement} bitmap
       * @param {number} w Source width / 源宽
       * @param {number} h Source height / 源高
       * @param {boolean} flipH Horizontal mirror / 水平镜像
       * @param {boolean} flipV Vertical mirror / 垂直镜像
       * @param {boolean} forJpeg Whether JPEG matte background is needed / JPEG 是否需要底色
       * @returns {HTMLCanvasElement}
       */
      function buildFlippedCanvas(bitmap, w, h, flipH, flipV, forJpeg) {
        var canvas = document.createElement('canvas');
        canvas.width = w;
        canvas.height = h;
        var ctx = canvas.getContext('2d');
        if (!ctx) throw new Error('encode');
        if (forJpeg) {
          ctx.fillStyle = jpegBgEl.value || '#ffffff';
          ctx.fillRect(0, 0, w, h);
        }
        ctx.save();
        ctx.translate(flipH ? w : 0, flipV ? h : 0);
        ctx.scale(flipH ? -1 : 1, flipV ? -1 : 1);
        ctx.drawImage(bitmap, 0, 0);
        ctx.restore();
        return canvas;
      }

      /** Sync quality label and format-dependent UI. / 同步质量标签与格式相关 UI。 */
      function syncUiLabels() {
        var isPng = formatEl.value === 'image/png';
        qualityEl.disabled = isPng;
        var q = Math.max(0.5, Math.min(1, Number(qualityEl.value) / 100));
        qualityVal.textContent = isPng ? '\u2014' : q.toFixed(2);
        jpegBgWrap.hidden = formatEl.value !== 'image/jpeg';
      }

      /** Refresh file-size / edge / animation warnings. / 刷新文件大小、边长、动图警告。 */
      function refreshWarnings() {
        var warns = [];
        if (sourceLayer && sourceLayer.file.size > SOFT_BYTES) warns.push(msg.large);
        if (sourceLayer && (sourceLayer.w > SOFT_EDGE || sourceLayer.h > SOFT_EDGE)) warns.push(msg.edge);
        if (sourceLayer && ((sourceLayer.file.type || '').indexOf('gif') >= 0 || /\\.gif$/i.test(sourceLayer.file.name || ''))) {
          warns.push(msg.animation);
        }
        setWarn(warns.join(' '));
      }

      /**
       * Draw flipped preview on screen canvas (scaled).
       * 在预览画布上绘制翻转结果（缩放显示）。
       * @param {boolean} [keepResult] Keep resultBlob when redrawing preview / 重绘预览时保留导出 Blob
       */
      function drawPreview(keepResult) {
        if (!keepResult) {
          resultBlob = null;
          btnDownload.disabled = true;
        }
        if (!sourceLayer) {
          preview.hidden = true;
          return;
        }
        var opts = readFlipOptions();
        displayScale = Math.min(1, PREVIEW_MAX_EDGE / Math.max(sourceLayer.w, sourceLayer.h, 1));
        preview.width = Math.max(1, Math.round(sourceLayer.w * displayScale));
        preview.height = Math.max(1, Math.round(sourceLayer.h * displayScale));
        preview.hidden = false;
        var ctx = preview.getContext('2d');
        if (!ctx) return;
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, preview.width, preview.height);
        ctx.save();
        ctx.translate(opts.flipH ? preview.width : 0, opts.flipV ? preview.height : 0);
        ctx.scale(opts.flipH ? -1 : 1, opts.flipV ? -1 : 1);
        ctx.drawImage(sourceLayer.bitmap, 0, 0, preview.width, preview.height);
        ctx.restore();
      }

      /**
       * Load source image from file.
       * 从文件加载源图。
       * @param {File} file
       * @returns {Promise<void>}
       */
      function loadFile(file) {
        setError('');
        return decodeImage(file)
          .then(function (dec) {
            disposeSource(sourceLayer);
            sourceLayer = { file: file, bitmap: dec.bitmap, w: dec.w, h: dec.h };
            fileNameEl.textContent = file.name || '';
            refreshWarnings();
            drawPreview(false);
          })
          .catch(function () {
            setError(msg.decodeFail);
          });
      }

      /**
       * Export flipped image and enable download.
       * 导出翻转后的图片并启用下载。
       * @returns {Promise<void>}
       */
      function applyFlip() {
        setError('');
        resultBlob = null;
        btnDownload.disabled = true;
        if (!sourceLayer) {
          setError(msg.empty);
          return Promise.resolve();
        }
        var opts = readFlipOptions();
        if (!opts.flipH && !opts.flipV) {
          setError(msg.noFlip);
          return Promise.resolve();
        }
        setStatus(msg.working);
        btnApply.disabled = true;
        try {
          var mime = formatEl.value;
          var forJpeg = mime === 'image/jpeg';
          var canvas = buildFlippedCanvas(sourceLayer.bitmap, sourceLayer.w, sourceLayer.h, opts.flipH, opts.flipV, forJpeg);
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
              drawPreview(true);
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

      /** Trigger download of last exported blob. / 触发下载上次导出的 Blob。 */
      function downloadResult() {
        if (!resultBlob) return;
        var mime = resultBlob.type || formatEl.value;
        var ext = mime === 'image/png' ? 'png' : mime === 'image/webp' ? 'webp' : 'jpg';
        var url = URL.createObjectURL(resultBlob);
        var a = document.createElement('a');
        a.href = url;
        a.download = 'flipped.' + ext;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      }

      /**
       * Build asymmetric colored rectangles sample, load, flip horizontal by default, apply.
       * 生成不对称色块样例，加载后默认水平翻转并应用。
       * @returns {Promise<void>}
       */
      function loadSample() {
        clearAll(false);
        var c = document.createElement('canvas');
        c.width = 480;
        c.height = 320;
        var ctx = c.getContext('2d');
        if (!ctx) return Promise.resolve();
        ctx.fillStyle = '#1c83a8';
        ctx.fillRect(0, 0, 240, 160);
        ctx.fillStyle = '#e8a838';
        ctx.fillRect(240, 0, 240, 160);
        ctx.fillStyle = '#2d6a4f';
        ctx.fillRect(0, 160, 240, 160);
        ctx.fillStyle = '#9b2226';
        ctx.fillRect(240, 160, 240, 160);
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 48px sans-serif';
        ctx.fillText('A', 48, 120);
        ctx.fillText('B', 288, 120);
        ctx.fillText('C', 48, 280);
        ctx.fillText('D', 288, 280);
        return new Promise(function (resolve) {
          c.toBlob(function (blob) {
            if (!blob) { resolve(); return; }
            loadFile(new File([blob], 'sample-flip.png', { type: 'image/png' }))
              .then(function () {
                flipHEl.checked = true;
                flipVEl.checked = false;
                drawPreview(false);
                return applyFlip();
              })
              .then(resolve);
          }, 'image/png');
        });
      }

      /**
       * Reset all state.
       * 重置全部状态。
       * @param {boolean} resetInputs Whether to clear file input / 是否清空文件输入
       */
      function clearAll(resetInputs) {
        disposeSource(sourceLayer);
        sourceLayer = null;
        if (resetInputs !== false) fileInput.value = '';
        fileNameEl.textContent = '';
        resultBlob = null;
        btnDownload.disabled = true;
        preview.hidden = true;
        setError('');
        setWarn('');
        setStatus('');
      }

      /** Wire drag-and-drop and file input on dropzone. / 绑定拖放与文件选择。 */
      function wireDropzone() {
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
      }

      wireDropzone();

      [flipHEl, flipVEl].forEach(function (el) {
        el.addEventListener('change', function () { drawPreview(false); });
      });
      formatEl.addEventListener('change', syncUiLabels);
      qualityEl.addEventListener('input', syncUiLabels);

      btnApply.addEventListener('click', function () { applyFlip(); });
      btnDownload.addEventListener('click', downloadResult);
      btnSample.addEventListener('click', function () { loadSample(); });
      btnClear.addEventListener('click', function () { clearAll(true); });

      syncUiLabels();
      /** On enter: auto-run sample flip so preview + download are ready. / 进页自动跑样例。 */
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('flip-image');
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
