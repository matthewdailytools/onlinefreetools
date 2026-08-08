/**
 * 图片加边框工具页：扩画布 + 填充边框色 + 居中 drawImage，本地处理不上传。
 * slug: image-border（单页；不拆 photo-frame / add-border 等近义 URL）。
 * 规格：work-tasks/image-border/02-tool-info.md
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
 * 渲染图片加边框工具页。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderImageBorderPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/image-border';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_image_border_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_image_border_description');

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
		items: buildToolSidebarItems({
			lang: opts.lang,
			defaultLang: opts.defaultLang,
			currentSlug: 'image-border',
			currentAnchor: '#converter',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	/** 页内样式：预览画布、操作栏间距。 */
	const extraHeadHtml = `
  <style>
    .tools-bar { gap: .5rem; }
    #imgBdPreview {
      max-width: 100%; max-height: 420px;
      border: 1px solid #dee2e6; border-radius: .5rem; background: #fff;
    }
    .img-bd-preview-wrap { min-height: 120px; display: flex; align-items: center; justify-content: center; }
    #imgBdJpegBgWrap[hidden] { display: none !important; }
  </style>`;

	const contentHtml = `
    <div id="converter" class="tool-page-heading mb-3">
      <h1 class="h4 mb-0">${escapeHtml(t(opts.lang, 'tool_image_border_title'))}</h1>
    </div>

    <label class="tool-dropzone img-bd-drop mb-3" id="imgBdDrop" for="imgBdFile">
      <input type="file" id="imgBdFile" accept="image/jpeg,image/png,image/webp,image/gif,image/*">
      <span class="tool-dropzone-title">${escapeHtml(t(opts.lang, 'tool_image_border_choose_file'))}</span>
      <span class="tool-dropzone-hint">${escapeHtml(t(opts.lang, 'tool_image_border_drop_hint'))}</span>
      <span id="imgBdFileName" class="tool-dropzone-file"></span>
    </label>

    <div class="row g-2 mb-2 align-items-end">
      <div class="col-6 col-md-2">
        <label class="form-label mb-0" for="imgBdWidth">${escapeHtml(t(opts.lang, 'tool_image_border_width_label'))}</label>
        <input type="number" id="imgBdWidth" class="form-control form-control-sm" min="1" max="512" value="24">
        <span class="small text-muted">px</span>
      </div>
      <div class="col-6 col-md-2">
        <label class="form-label mb-0" for="imgBdColor">${escapeHtml(t(opts.lang, 'tool_image_border_color_label'))}</label>
        <input type="color" id="imgBdColor" class="form-control form-control-color form-control-sm" value="#ffffff">
      </div>
      <div class="col-6 col-md-2">
        <label class="form-label mb-0" for="imgBdFormat">${escapeHtml(t(opts.lang, 'tool_image_border_format_label'))}</label>
        <select id="imgBdFormat" class="form-select form-select-sm">
          <option value="image/jpeg">${escapeHtml(t(opts.lang, 'tool_image_border_format_jpeg'))}</option>
          <option value="image/webp" selected>${escapeHtml(t(opts.lang, 'tool_image_border_format_webp'))}</option>
          <option value="image/png">${escapeHtml(t(opts.lang, 'tool_image_border_format_png'))}</option>
        </select>
      </div>
      <div class="col-6 col-md-3" id="imgBdJpegBgWrap">
        <label class="form-label mb-0" for="imgBdJpegBg">${escapeHtml(t(opts.lang, 'tool_image_border_jpeg_bg_label'))}</label>
        <input type="color" id="imgBdJpegBg" class="form-control form-control-color form-control-sm" value="#ffffff">
      </div>
    </div>

    <div class="d-flex align-items-center tools-bar mb-2 flex-wrap">
      <button type="button" id="imgBdBtnApply" class="btn btn-primary btn-sm">${escapeHtml(t(opts.lang, 'tool_image_border_apply'))}</button>
      <button type="button" id="imgBdBtnDownload" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(t(opts.lang, 'tool_image_border_download'))}</button>
      <button type="button" id="imgBdBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_image_border_sample'))}</button>
      <button type="button" id="imgBdBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_image_border_clear'))}</button>
    </div>

    <p id="imgBdWarn" class="small text-warning mb-2" style="display:none;" role="status"></p>
    <p id="imgBdError" class="small text-danger mb-2" style="display:none;" role="alert"></p>
    <p id="imgBdStatus" class="small text-muted mb-2" role="status"></p>

    <div class="mb-3">
      <label class="form-label">${escapeHtml(t(opts.lang, 'tool_image_border_preview_label'))}</label>
      <div class="img-bd-preview-wrap">
        <canvas id="imgBdPreview" hidden></canvas>
      </div>
    </div>

    <p class="tool-lead mb-4">${escapeHtml(description)}</p>`;

	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: 'tool_image_border',
		mode: 'rules',
		usecaseCount: 3,
		ruleItemCount: 4,
	});

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: 'MDN — CanvasRenderingContext2D.fillRect()',
				href: 'https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillRect',
			},
			{
				label: 'MDN — CanvasRenderingContext2D.strokeRect()',
				href: 'https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/strokeRect',
			},
			{
				label: 'MDN — CanvasRenderingContext2D.drawImage()',
				href: 'https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage',
			},
		],
	});

	/**
	 * 客户端脚本：解码单图、扩画布加边框、预览与导出。
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
      /** JPEG/WebP 默认导出质量。 */
      var DEFAULT_QUALITY = 0.9;

      var drop = document.getElementById('imgBdDrop');
      var fileInput = document.getElementById('imgBdFile');
      var fileNameEl = document.getElementById('imgBdFileName');
      var widthEl = document.getElementById('imgBdWidth');
      var colorEl = document.getElementById('imgBdColor');
      var formatEl = document.getElementById('imgBdFormat');
      var jpegBgWrap = document.getElementById('imgBdJpegBgWrap');
      var jpegBgEl = document.getElementById('imgBdJpegBg');
      var btnApply = document.getElementById('imgBdBtnApply');
      var btnDownload = document.getElementById('imgBdBtnDownload');
      var btnSample = document.getElementById('imgBdBtnSample');
      var btnClear = document.getElementById('imgBdBtnClear');
      var warnEl = document.getElementById('imgBdWarn');
      var errEl = document.getElementById('imgBdError');
      var statusEl = document.getElementById('imgBdStatus');
      var preview = document.getElementById('imgBdPreview');

      var msg = {
        empty: ${JSON.stringify(t(opts.lang, 'tool_image_border_empty'))},
        decodeFail: ${JSON.stringify(t(opts.lang, 'tool_image_border_err_decode'))},
        encodeFail: ${JSON.stringify(t(opts.lang, 'tool_image_border_err_encode'))},
        large: ${JSON.stringify(t(opts.lang, 'tool_image_border_warn_large'))},
        edge: ${JSON.stringify(t(opts.lang, 'tool_image_border_warn_edge'))},
        animation: ${JSON.stringify(t(opts.lang, 'tool_image_border_warn_animation'))},
        working: ${JSON.stringify(t(opts.lang, 'tool_image_border_status_working'))},
        done: ${JSON.stringify(t(opts.lang, 'tool_image_border_status_done'))}
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

      /**
       * 读取边框宽度（px），限制在 1-512。
       * @returns {number}
       */
      function readBorderWidth() {
        var n = parseInt(widthEl.value, 10);
        if (!isFinite(n)) n = 24;
        n = Math.max(1, Math.min(512, n));
        widthEl.value = String(n);
        return n;
      }

      /** 同步 JPEG 背景色控件可见性。 */
      function syncFormatUi() {
        jpegBgWrap.style.display = formatEl.value === 'image/jpeg' ? '' : 'none';
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
        if (source && ((source.file.type || '').indexOf('gif') >= 0 || /\\.gif$/i.test(source.file.name || ''))) {
          warns.push(msg.animation);
        }
        setWarn(warns.join(' '));
      }

      /**
       * 构建带边框的全尺寸画布：输出 = 原图 + 2*border，边框在外扩。
       * @param {boolean} forJpeg 导出 JPEG 时是否先铺底色（透明区域）
       * @returns {HTMLCanvasElement}
       */
      function buildBorderCanvas(forJpeg) {
        if (!source) throw new Error('missing');
        var border = readBorderWidth();
        var outW = source.w + border * 2;
        var outH = source.h + border * 2;
        var canvas = document.createElement('canvas');
        canvas.width = outW;
        canvas.height = outH;
        var ctx = canvas.getContext('2d');
        if (!ctx) throw new Error('encode');
        if (forJpeg) {
          ctx.fillStyle = jpegBgEl.value || '#ffffff';
          ctx.fillRect(0, 0, outW, outH);
        }
        ctx.fillStyle = colorEl.value || '#ffffff';
        ctx.fillRect(0, 0, outW, outH);
        ctx.drawImage(source.bitmap, border, border);
        return canvas;
      }

      /**
       * 在预览画布上绘制缩放后的边框效果（不生成下载 Blob）。
       */
      function drawPreview() {
        resultBlob = null;
        btnDownload.disabled = true;
        if (!source) {
          preview.hidden = true;
          return;
        }
        var border = readBorderWidth();
        var outW = source.w + border * 2;
        var outH = source.h + border * 2;
        displayScale = Math.min(1, PREVIEW_MAX_EDGE / Math.max(outW, outH, 1));
        preview.width = Math.max(1, Math.round(outW * displayScale));
        preview.height = Math.max(1, Math.round(outH * displayScale));
        preview.hidden = false;
        var ctx = preview.getContext('2d');
        if (!ctx) return;
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, preview.width, preview.height);
        ctx.fillStyle = colorEl.value || '#ffffff';
        ctx.fillRect(0, 0, preview.width, preview.height);
        var dw = Math.round(source.w * displayScale);
        var dh = Math.round(source.h * displayScale);
        var bx = Math.round(border * displayScale);
        var by = Math.round(border * displayScale);
        ctx.drawImage(source.bitmap, bx, by, dw, dh);
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
       * 应用边框并导出 Blob，启用下载按钮。
       * @returns {Promise<void>}
       */
      function applyBorder() {
        setError('');
        resultBlob = null;
        btnDownload.disabled = true;
        if (!source) {
          setError(msg.empty);
          return Promise.resolve();
        }
        setStatus(msg.working);
        btnApply.disabled = true;
        try {
          var mime = formatEl.value;
          var forJpeg = mime === 'image/jpeg';
          var canvas = buildBorderCanvas(forJpeg);
          drawPreview();
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
            }, mime, mime === 'image/png' ? undefined : DEFAULT_QUALITY);
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
        a.download = 'bordered.' + ext;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      }

      /**
       * 生成色块样例图，加载后自动应用默认 24px 白边框并导出。
       * @returns {Promise<void>}
       */
      function loadSample() {
        clearAll(false);
        var c = document.createElement('canvas');
        c.width = 360;
        c.height = 240;
        var ctx = c.getContext('2d');
        ctx.fillStyle = '#1c83a8';
        ctx.fillRect(0, 0, 180, 120);
        ctx.fillStyle = '#e8a838';
        ctx.fillRect(180, 0, 180, 120);
        ctx.fillStyle = '#2d6a4f';
        ctx.fillRect(0, 120, 180, 120);
        ctx.fillStyle = '#f4f1de';
        ctx.fillRect(180, 120, 180, 120);
        return new Promise(function (resolve) {
          c.toBlob(function (blob) {
            if (!blob) { resolve(); return; }
            loadFile(new File([blob], 'sample-blocks.png', { type: 'image/png' }))
              .then(function () {
                widthEl.value = '24';
                colorEl.value = '#ffffff';
                syncFormatUi();
                return applyBorder();
              })
              .then(resolve);
          }, 'image/png');
        });
      }

      /**
       * 重置全部状态。
       * @param {boolean} resetInputs 是否清空 file input
       */
      function clearAll(resetInputs) {
        disposeSource();
        source = null;
        if (resetInputs !== false) fileInput.value = '';
        fileNameEl.textContent = '';
        resultBlob = null;
        btnDownload.disabled = true;
        preview.hidden = true;
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
        if (f) loadFile(f);
      });
      fileInput.addEventListener('change', function () {
        var f = fileInput.files && fileInput.files[0];
        if (f) loadFile(f);
      });

      [widthEl, colorEl].forEach(function (el) {
        el.addEventListener('input', drawPreview);
        el.addEventListener('change', drawPreview);
      });
      formatEl.addEventListener('change', syncFormatUi);

      btnApply.addEventListener('click', function () { applyBorder(); });
      btnDownload.addEventListener('click', downloadResult);
      btnSample.addEventListener('click', function () { loadSample(); });
      btnClear.addEventListener('click', function () { clearAll(true); });

      syncFormatUi();
      /** 进页自动跑样例并应用边框（tool-creation 规则）。 */
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('image-border');
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
