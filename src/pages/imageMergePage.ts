/**
 * Image-merge tool page: combine multiple local images into one canvas (horizontal, vertical, grid).
 * slug: image-merge (single page; layout presets on same URL, no thin variant pages).
 * Spec: work-tasks/image-merge/02-tool-info.md
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
 * Render the merge-images tool page.
 * @param opts.lang Active UI language
 * @param opts.defaultLang Default (unprefixed) language
 * @param opts.enabledLangs Enabled language list
 */
export const renderImageMergePage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/image-merge';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_image_merge_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_image_merge_description');

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
			currentSlug: 'image-merge',
			currentAnchor: '#converter',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	const extraHeadHtml = `
  <style>
    .tools-bar { gap: .5rem; }
    #imgMergePreview {
      max-width: 100%; max-height: 360px; object-fit: contain;
      border: 1px solid #dee2e6; border-radius: .5rem; background: #fff;
    }
    .img-merge-preview-wrap { min-height: 120px; display: flex; align-items: center; justify-content: center; }
    .img-merge-file-list { list-style: none; padding: 0; margin: 0; }
    .img-merge-file-item {
      display: flex; align-items: center; gap: .5rem; padding: .35rem 0;
      border-bottom: 1px solid #eee;
    }
    .img-merge-thumb {
      width: 48px; height: 48px; object-fit: cover; border-radius: .25rem;
      border: 1px solid #dee2e6; background: #f8f9fa;
    }
    .img-merge-file-name { flex: 1; font-size: .85rem; word-break: break-all; }
    .img-merge-file-actions { display: flex; gap: .25rem; flex-shrink: 0; }
  </style>`;

	const contentHtml = `
    <div id="converter" class="tool-page-heading mb-3">
      <h1 class="h4 mb-0">${escapeHtml(t(opts.lang, 'tool_image_merge_title'))}</h1>
    </div>

    <label class="tool-dropzone img-merge-drop mb-3" id="imgMergeDrop" for="imgMergeFiles">
      <input type="file" id="imgMergeFiles" accept="image/jpeg,image/png,image/webp,image/gif,image/*" multiple>
      <span class="tool-dropzone-title">${escapeHtml(t(opts.lang, 'tool_image_merge_choose_files'))}</span>
      <span class="tool-dropzone-hint">${escapeHtml(t(opts.lang, 'tool_image_merge_drop_hint'))}</span>
    </label>

    <ul id="imgMergeList" class="img-merge-file-list mb-3" aria-live="polite"></ul>

    <div class="row g-2 mb-2">
      <div class="col-6 col-md-3">
        <label class="form-label mb-0" for="imgMergeLayout">${escapeHtml(t(opts.lang, 'tool_image_merge_layout_label'))}</label>
        <select id="imgMergeLayout" class="form-select form-select-sm">
          <option value="horizontal">${escapeHtml(t(opts.lang, 'tool_image_merge_layout_horizontal'))}</option>
          <option value="vertical">${escapeHtml(t(opts.lang, 'tool_image_merge_layout_vertical'))}</option>
          <option value="grid">${escapeHtml(t(opts.lang, 'tool_image_merge_layout_grid'))}</option>
        </select>
      </div>
      <div class="col-6 col-md-2" id="imgMergeColsWrap">
        <label class="form-label mb-0" for="imgMergeCols">${escapeHtml(t(opts.lang, 'tool_image_merge_cols_label'))}</label>
        <select id="imgMergeCols" class="form-select form-select-sm">
          <option value="2">2</option>
          <option value="3" selected>3</option>
          <option value="4">4</option>
        </select>
      </div>
      <div class="col-6 col-md-2">
        <label class="form-label mb-0" for="imgMergeGap">${escapeHtml(t(opts.lang, 'tool_image_merge_gap_label'))}</label>
        <input type="number" id="imgMergeGap" class="form-control form-control-sm" min="0" max="200" value="8">
      </div>
      <div class="col-6 col-md-2">
        <label class="form-label mb-0" for="imgMergeBg">${escapeHtml(t(opts.lang, 'tool_image_merge_bg_label'))}</label>
        <input type="color" id="imgMergeBg" class="form-control form-control-color form-control-sm" value="#ffffff">
      </div>
      <div class="col-6 col-md-3" id="imgMergeFitWrap">
        <label class="form-label mb-0" for="imgMergeFit">${escapeHtml(t(opts.lang, 'tool_image_merge_fit_label'))}</label>
        <select id="imgMergeFit" class="form-select form-select-sm">
          <option value="contain">${escapeHtml(t(opts.lang, 'tool_image_merge_fit_contain'))}</option>
          <option value="cover">${escapeHtml(t(opts.lang, 'tool_image_merge_fit_cover'))}</option>
        </select>
      </div>
    </div>

    <div class="row g-2 mb-2">
      <div class="col-6 col-md-3">
        <label class="form-label mb-0" for="imgMergePreset">${escapeHtml(t(opts.lang, 'tool_image_merge_preset_label'))}</label>
        <select id="imgMergePreset" class="form-select form-select-sm">
          <option value="none">${escapeHtml(t(opts.lang, 'tool_image_merge_preset_none'))}</option>
          <option value="ig-1080">${escapeHtml(t(opts.lang, 'tool_image_merge_preset_ig'))}</option>
          <option value="fb-1200x630">${escapeHtml(t(opts.lang, 'tool_image_merge_preset_fb'))}</option>
        </select>
      </div>
      <div class="col-6 col-md-3">
        <label class="form-label mb-0" for="imgMergeFormat">${escapeHtml(t(opts.lang, 'tool_image_merge_format_label'))}</label>
        <select id="imgMergeFormat" class="form-select form-select-sm">
          <option value="image/jpeg">${escapeHtml(t(opts.lang, 'tool_image_merge_format_jpeg'))}</option>
          <option value="image/webp" selected>${escapeHtml(t(opts.lang, 'tool_image_merge_format_webp'))}</option>
          <option value="image/png">${escapeHtml(t(opts.lang, 'tool_image_merge_format_png'))}</option>
        </select>
      </div>
      <div class="col-6 col-md-3">
        <label class="form-label mb-0" for="imgMergeQuality">${escapeHtml(t(opts.lang, 'tool_image_merge_quality_label'))}</label>
        <input type="range" id="imgMergeQuality" class="form-range" min="50" max="100" value="90" style="width:8rem;">
        <span id="imgMergeQualityVal" class="small ms-1">0.90</span>
      </div>
    </div>

    <div class="d-flex align-items-center tools-bar mb-2 flex-wrap">
      <button type="button" id="imgMergeBtnMerge" class="btn btn-primary btn-sm">${escapeHtml(t(opts.lang, 'tool_image_merge_merge'))}</button>
      <button type="button" id="imgMergeBtnDownload" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(t(opts.lang, 'tool_image_merge_download'))}</button>
      <button type="button" id="imgMergeBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_image_merge_sample'))}</button>
      <button type="button" id="imgMergeBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_image_merge_clear'))}</button>
    </div>

    <p id="imgMergeWarn" class="small text-warning mb-2" style="display:none;" role="status"></p>
    <p id="imgMergeError" class="small text-danger mb-2" style="display:none;" role="alert"></p>
    <p id="imgMergeStatus" class="small text-muted mb-2" role="status"></p>

    <div class="row g-3 mb-3">
      <div class="col-12">
        <label class="form-label">${escapeHtml(t(opts.lang, 'tool_image_merge_preview_label'))}</label>
        <div class="img-merge-preview-wrap"><img id="imgMergePreview" alt="" hidden></div>
        <p id="imgMergeStats" class="small text-muted mt-1 mb-0" style="display:none;"></p>
      </div>
    </div>

    <p class="tool-lead mb-4">${escapeHtml(description)}</p>`;

	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: 'tool_image_merge',
		mode: 'rules',
		usecaseCount: 3,
		ruleItemCount: 4,
	});

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{ label: 'MDN — CanvasRenderingContext2D.drawImage()', href: 'https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage' },
			{ label: 'MDN — HTMLCanvasElement.toBlob()', href: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob' },
		],
	});

	/**
	 * Client script: decode images, compute layout, draw on canvas, apply preset, preview and download.
	 */
	const extraBodyHtml = `
  <script>
    (function () {
      /** Soft warn when any single file exceeds this size (bytes). */
      var SOFT_BYTES = 25 * 1024 * 1024;
      /** Soft warn when merged canvas edge exceeds this (px). */
      var SOFT_EDGE = 8192;

      var drop = document.getElementById('imgMergeDrop');
      var fileInput = document.getElementById('imgMergeFiles');
      var listEl = document.getElementById('imgMergeList');
      var layoutEl = document.getElementById('imgMergeLayout');
      var colsWrap = document.getElementById('imgMergeColsWrap');
      var colsEl = document.getElementById('imgMergeCols');
      var gapEl = document.getElementById('imgMergeGap');
      var bgEl = document.getElementById('imgMergeBg');
      var fitWrap = document.getElementById('imgMergeFitWrap');
      var fitEl = document.getElementById('imgMergeFit');
      var presetEl = document.getElementById('imgMergePreset');
      var formatEl = document.getElementById('imgMergeFormat');
      var qualityEl = document.getElementById('imgMergeQuality');
      var qualityVal = document.getElementById('imgMergeQualityVal');
      var btnMerge = document.getElementById('imgMergeBtnMerge');
      var btnDownload = document.getElementById('imgMergeBtnDownload');
      var btnSample = document.getElementById('imgMergeBtnSample');
      var btnClear = document.getElementById('imgMergeBtnClear');
      var warnEl = document.getElementById('imgMergeWarn');
      var errEl = document.getElementById('imgMergeError');
      var statusEl = document.getElementById('imgMergeStatus');
      var preview = document.getElementById('imgMergePreview');
      var statsEl = document.getElementById('imgMergeStats');

      var msg = {
        empty: ${JSON.stringify(t(opts.lang, 'tool_image_merge_empty'))},
        needTwo: ${JSON.stringify(t(opts.lang, 'tool_image_merge_need_two'))},
        decodeFail: ${JSON.stringify(t(opts.lang, 'tool_image_merge_err_decode'))},
        encodeFail: ${JSON.stringify(t(opts.lang, 'tool_image_merge_err_encode'))},
        large: ${JSON.stringify(t(opts.lang, 'tool_image_merge_warn_large'))},
        edge: ${JSON.stringify(t(opts.lang, 'tool_image_merge_warn_edge'))},
        animation: ${JSON.stringify(t(opts.lang, 'tool_image_merge_warn_animation'))},
        merging: ${JSON.stringify(t(opts.lang, 'tool_image_merge_status_merging'))},
        done: ${JSON.stringify(t(opts.lang, 'tool_image_merge_status_done'))},
        moveUp: ${JSON.stringify(t(opts.lang, 'tool_image_merge_move_up'))},
        moveDown: ${JSON.stringify(t(opts.lang, 'tool_image_merge_move_down'))},
        remove: ${JSON.stringify(t(opts.lang, 'tool_image_merge_remove'))},
        statsTpl: ${JSON.stringify(t(opts.lang, 'tool_image_merge_stats_tpl'))}
      };

      /**
       * @typedef {{ id: string, file: File, bitmap: ImageBitmap|HTMLImageElement, w: number, h: number, thumbUrl: string }} MergeItem
       */

      /** @type {MergeItem[]} Ordered source images. */
      var items = [];
      /** @type {Blob|null} Last merged output blob. */
      var resultBlob = null;
      /** @type {string|null} Object URL for preview. */
      var previewUrl = null;
      /** Monotonic id for list rows. */
      var nextId = 1;

      /** Show or hide grid-only controls. */
      function syncLayoutUi() {
        var isGrid = layoutEl.value === 'grid';
        colsWrap.style.display = isGrid ? '' : 'none';
        fitWrap.style.display = isGrid ? '' : 'none';
      }

      /** Sync quality slider label; disable for PNG. */
      function syncQualityUi() {
        var isPng = formatEl.value === 'image/png';
        qualityEl.disabled = isPng;
        var q = Math.max(0.5, Math.min(1, Number(qualityEl.value) / 100));
        qualityVal.textContent = isPng ? '—' : q.toFixed(2);
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

      function setStatus(text) {
        statusEl.textContent = text || '';
      }

      function escapeHtml(s) {
        return String(s)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      }

      function formatBytes(n) {
        if (n < 1024) return n + ' B';
        if (n < 1024 * 1024) return (n / 1024).toFixed(1) + ' KB';
        return (n / (1024 * 1024)).toFixed(2) + ' MB';
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

      /** Revoke object URLs and close bitmaps for one item. */
      function disposeItem(item) {
        if (item.thumbUrl) URL.revokeObjectURL(item.thumbUrl);
        if (item.bitmap && typeof item.bitmap.close === 'function') item.bitmap.close();
      }

      /** Clear merge result preview state. */
      function clearResult() {
        resultBlob = null;
        btnDownload.disabled = true;
        if (previewUrl) { URL.revokeObjectURL(previewUrl); previewUrl = null; }
        preview.hidden = true;
        preview.removeAttribute('src');
        statsEl.style.display = 'none';
        statsEl.textContent = '';
      }

      /** Re-render the ordered file list with reorder/remove controls. */
      function renderList() {
        listEl.innerHTML = '';
        items.forEach(function (item, idx) {
          var li = document.createElement('li');
          li.className = 'img-merge-file-item';
          li.dataset.id = item.id;
          li.innerHTML =
            '<img class="img-merge-thumb" src="' + escapeHtml(item.thumbUrl) + '" alt="">' +
            '<span class="img-merge-file-name">' + escapeHtml(item.file.name || ('#' + (idx + 1))) + '</span>' +
            '<span class="img-merge-file-actions">' +
            '<button type="button" class="btn btn-outline-secondary btn-sm img-merge-up" data-id="' + escapeHtml(item.id) + '" title="' + escapeHtml(msg.moveUp) + '"' + (idx === 0 ? ' disabled' : '') + '>&#8593;</button>' +
            '<button type="button" class="btn btn-outline-secondary btn-sm img-merge-down" data-id="' + escapeHtml(item.id) + '" title="' + escapeHtml(msg.moveDown) + '"' + (idx === items.length - 1 ? ' disabled' : '') + '>&#8595;</button>' +
            '<button type="button" class="btn btn-outline-danger btn-sm img-merge-remove" data-id="' + escapeHtml(item.id) + '" title="' + escapeHtml(msg.remove) + '">&times;</button>' +
            '</span>';
          listEl.appendChild(li);
        });
      }

      /** Collect size/GIF warnings for current items. */
      function refreshWarnings() {
        var warns = [];
        var hasGif = false;
        var hasLarge = false;
        items.forEach(function (it) {
          if (it.file.size > SOFT_BYTES) hasLarge = true;
          var t = it.file.type || '';
          var n = it.file.name || '';
          if (t.indexOf('gif') >= 0 || /\\.gif$/i.test(n)) hasGif = true;
        });
        if (hasLarge) warns.push(msg.large);
        if (hasGif) warns.push(msg.animation);
        setWarn(warns.join(' '));
      }

      /**
       * Append decoded files to the queue.
       * @param {FileList|File[]} files
       * @returns {Promise<void>}
       */
      function addFiles(files) {
        setError('');
        clearResult();
        var arr = Array.prototype.slice.call(files || []);
        if (!arr.length) return Promise.resolve();
        var promises = arr.map(function (file) {
          return decodeImage(file).then(function (dec) {
            var thumbUrl = URL.createObjectURL(file);
            items.push({
              id: String(nextId++),
              file: file,
              bitmap: dec.bitmap,
              w: dec.w,
              h: dec.h,
              thumbUrl: thumbUrl
            });
          }).catch(function () {
            throw new Error('decode');
          });
        });
        return Promise.all(promises)
          .then(function () {
            renderList();
            refreshWarnings();
          })
          .catch(function () {
            setError(msg.decodeFail);
          });
      }

      /**
       * Draw image with contain fit inside a cell rectangle.
       * @param {CanvasRenderingContext2D} ctx
       * @param {CanvasImageSource} img
       * @param {number} cx cell x
       * @param {number} cy cell y
       * @param {number} cw cell width
       * @param {number} ch cell height
       * @param {number} sw source width
       * @param {number} sh source height
       */
      function drawContain(ctx, img, cx, cy, cw, ch, sw, sh) {
        var scale = Math.min(cw / sw, ch / sh);
        var dw = sw * scale;
        var dh = sh * scale;
        var dx = cx + (cw - dw) / 2;
        var dy = cy + (ch - dh) / 2;
        ctx.drawImage(img, dx, dy, dw, dh);
      }

      /**
       * Draw image with cover fit inside a cell rectangle.
       * @param {CanvasRenderingContext2D} ctx
       * @param {CanvasImageSource} img
       * @param {number} cx cell x
       * @param {number} cy cell y
       * @param {number} cw cell width
       * @param {number} ch cell height
       * @param {number} sw source width
       * @param {number} sh source height
       */
      function drawCover(ctx, img, cx, cy, cw, ch, sw, sh) {
        var scale = Math.max(cw / sw, ch / sh);
        var dw = sw * scale;
        var dh = sh * scale;
        var dx = cx + (cw - dw) / 2;
        var dy = cy + (ch - dh) / 2;
        ctx.drawImage(img, dx, dy, dw, dh);
      }

      /**
       * Compute canvas size and draw all images.
       * @returns {{ canvas: HTMLCanvasElement, w: number, h: number }}
       */
      function buildMergedCanvas() {
        var layout = layoutEl.value;
        var gap = Math.max(0, Math.min(200, parseInt(gapEl.value, 10) || 0));
        var bg = bgEl.value || '#ffffff';
        var fit = fitEl.value;
        var n = items.length;

        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        if (!ctx) throw new Error('encode');

        if (layout === 'horizontal') {
          var targetH = 0;
          items.forEach(function (it) { if (it.h > targetH) targetH = it.h; });
          var totalW = 0;
          var scaled = items.map(function (it) {
            var scale = targetH / it.h;
            var sw = Math.round(it.w * scale);
            var sh = targetH;
            totalW += sw;
            return { item: it, sw: sw, sh: sh };
          });
          totalW += Math.max(0, n - 1) * gap;
          canvas.width = totalW;
          canvas.height = targetH;
          ctx.fillStyle = bg;
          ctx.fillRect(0, 0, totalW, targetH);
          var x = 0;
          scaled.forEach(function (s, i) {
            ctx.drawImage(s.item.bitmap, x, 0, s.sw, s.sh);
            x += s.sw + (i < n - 1 ? gap : 0);
          });
        } else if (layout === 'vertical') {
          var targetW = 0;
          items.forEach(function (it) { if (it.w > targetW) targetW = it.w; });
          var totalH = 0;
          var scaledV = items.map(function (it) {
            var scale = targetW / it.w;
            var sw = targetW;
            var sh = Math.round(it.h * scale);
            totalH += sh;
            return { item: it, sw: sw, sh: sh };
          });
          totalH += Math.max(0, n - 1) * gap;
          canvas.width = targetW;
          canvas.height = totalH;
          ctx.fillStyle = bg;
          ctx.fillRect(0, 0, targetW, totalH);
          var y = 0;
          scaledV.forEach(function (s, i) {
            ctx.drawImage(s.item.bitmap, 0, y, s.sw, s.sh);
            y += s.sh + (i < n - 1 ? gap : 0);
          });
        } else {
          var cols = Math.max(2, Math.min(4, parseInt(colsEl.value, 10) || 3));
          var rows = Math.ceil(n / cols);
          var cellW = 0;
          var cellH = 0;
          items.forEach(function (it) {
            if (it.w > cellW) cellW = it.w;
            if (it.h > cellH) cellH = it.h;
          });
          var gridW = cols * cellW + Math.max(0, cols - 1) * gap;
          var gridH = rows * cellH + Math.max(0, rows - 1) * gap;
          canvas.width = gridW;
          canvas.height = gridH;
          ctx.fillStyle = bg;
          ctx.fillRect(0, 0, gridW, gridH);
          items.forEach(function (it, idx) {
            var col = idx % cols;
            var row = Math.floor(idx / cols);
            var cx = col * (cellW + gap);
            var cy = row * (cellH + gap);
            if (fit === 'cover') drawCover(ctx, it.bitmap, cx, cy, cellW, cellH, it.w, it.h);
            else drawContain(ctx, it.bitmap, cx, cy, cellW, cellH, it.w, it.h);
          });
        }

        return { canvas: canvas, w: canvas.width, h: canvas.height };
      }

      /**
       * Scale merged canvas into a preset output size (contain on background).
       * @param {HTMLCanvasElement} src
       * @param {string} preset
       * @param {string} bg
       */
      function applyPreset(src, preset, bg) {
        if (preset === 'none') return src;
        var tw = preset === 'ig-1080' ? 1080 : 1200;
        var th = preset === 'ig-1080' ? 1080 : 630;
        var out = document.createElement('canvas');
        out.width = tw;
        out.height = th;
        var ctx = out.getContext('2d');
        if (!ctx) throw new Error('encode');
        ctx.fillStyle = bg;
        ctx.fillRect(0, 0, tw, th);
        var scale = Math.min(tw / src.width, th / src.height);
        var dw = Math.round(src.width * scale);
        var dh = Math.round(src.height * scale);
        var dx = Math.round((tw - dw) / 2);
        var dy = Math.round((th - dh) / 2);
        ctx.drawImage(src, dx, dy, dw, dh);
        return out;
      }

      /** Run merge pipeline and show preview. */
      function merge() {
        setError('');
        clearResult();
        if (!items.length) {
          setError(msg.empty);
          return;
        }
        if (items.length < 2) {
          setError(msg.needTwo);
          return;
        }
        setStatus(msg.merging);
        btnMerge.disabled = true;
        try {
          var built = buildMergedCanvas();
          var edgeWarn = built.w > SOFT_EDGE || built.h > SOFT_EDGE;
          var preset = presetEl.value;
          var bg = bgEl.value || '#ffffff';
          var finalCanvas = applyPreset(built.canvas, preset, bg);
          if (finalCanvas.width > SOFT_EDGE || finalCanvas.height > SOFT_EDGE) edgeWarn = true;
          if (edgeWarn) {
            setWarn((warnEl.textContent ? warnEl.textContent + ' ' : '') + msg.edge);
          }
          var mime = formatEl.value;
          var q = Math.max(0.5, Math.min(1, Number(qualityEl.value) / 100));
          finalCanvas.toBlob(function (blob) {
            btnMerge.disabled = false;
            if (!blob) {
              setError(msg.encodeFail);
              setStatus('');
              return;
            }
            resultBlob = blob;
            previewUrl = URL.createObjectURL(blob);
            preview.src = previewUrl;
            preview.hidden = false;
            btnDownload.disabled = false;
            statsEl.textContent = msg.statsTpl
              .replace('{w}', String(finalCanvas.width))
              .replace('{h}', String(finalCanvas.height))
              .replace('{mime}', mime.replace('image/', '').toUpperCase())
              .replace('{bytes}', formatBytes(blob.size));
            statsEl.style.display = '';
            setStatus(msg.done);
          }, mime, mime === 'image/png' ? undefined : q);
        } catch (e) {
          btnMerge.disabled = false;
          setError(msg.encodeFail);
          setStatus('');
        }
      }

      /** Trigger download of the last merged blob. */
      function downloadResult() {
        if (!resultBlob) return;
        var mime = resultBlob.type || formatEl.value;
        var ext = mime === 'image/png' ? 'png' : mime === 'image/webp' ? 'webp' : 'jpg';
        var url = URL.createObjectURL(resultBlob);
        var a = document.createElement('a');
        a.href = url;
        a.download = 'merged.' + ext;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      }

      /**
       * Generate 3 colored sample images, add them, then run merge (real result on enter / Load sample).
       * @returns {Promise<void>}
       */
      function loadSample() {
        clearAll(false);
        var specs = [
          { w: 240, h: 180, color: '#1c83a8', name: 'sample-a.png' },
          { w: 240, h: 180, color: '#e8a838', name: 'sample-b.png' },
          { w: 240, h: 180, color: '#2d6a4f', name: 'sample-c.png' }
        ];
        var filePromises = specs.map(function (spec) {
          return new Promise(function (resolve) {
            var c = document.createElement('canvas');
            c.width = spec.w;
            c.height = spec.h;
            var ctx = c.getContext('2d');
            ctx.fillStyle = spec.color;
            ctx.fillRect(0, 0, spec.w, spec.h);
            ctx.fillStyle = '#fff';
            ctx.font = '14px sans-serif';
            ctx.fillText(spec.name.replace('.png', ''), 20, spec.h / 2);
            c.toBlob(function (blob) {
              resolve(blob ? new File([blob], spec.name, { type: 'image/png' }) : null);
            }, 'image/png');
          });
        });
        return Promise.all(filePromises)
          .then(function (files) {
            return addFiles(files.filter(Boolean));
          })
          .then(function () {
            if (items.length >= 2) merge();
          });
      }

      /**
       * Reset all state.
       * @param {boolean} resetInput Whether to clear the file input value.
       */
      function clearAll(resetInput) {
        items.forEach(disposeItem);
        items = [];
        if (resetInput !== false) fileInput.value = '';
        listEl.innerHTML = '';
        clearResult();
        setError('');
        setWarn('');
        setStatus('');
      }

      listEl.addEventListener('click', function (e) {
        var tEl = e.target;
        if (!tEl || !tEl.closest) return;
        var up = tEl.closest('.img-merge-up');
        var down = tEl.closest('.img-merge-down');
        var rem = tEl.closest('.img-merge-remove');
        var id = (up || down || rem) && (up || down || rem).getAttribute('data-id');
        if (!id) return;
        var idx = items.findIndex(function (it) { return it.id === id; });
        if (idx < 0) return;
        if (up && idx > 0) {
          var tmp = items[idx - 1];
          items[idx - 1] = items[idx];
          items[idx] = tmp;
          renderList();
          clearResult();
        } else if (down && idx < items.length - 1) {
          var tmp2 = items[idx + 1];
          items[idx + 1] = items[idx];
          items[idx] = tmp2;
          renderList();
          clearResult();
        } else if (rem) {
          disposeItem(items[idx]);
          items.splice(idx, 1);
          renderList();
          refreshWarnings();
          clearResult();
        }
      });

      layoutEl.addEventListener('change', function () { syncLayoutUi(); clearResult(); });
      colsEl.addEventListener('change', clearResult);
      gapEl.addEventListener('change', clearResult);
      bgEl.addEventListener('change', clearResult);
      fitEl.addEventListener('change', clearResult);
      presetEl.addEventListener('change', clearResult);
      formatEl.addEventListener('change', function () { syncQualityUi(); clearResult(); });
      qualityEl.addEventListener('input', syncQualityUi);

      drop.addEventListener('dragover', function (e) {
        e.preventDefault();
        drop.classList.add('dragover');
      });
      drop.addEventListener('dragleave', function () { drop.classList.remove('dragover'); });
      drop.addEventListener('drop', function (e) {
        e.preventDefault();
        drop.classList.remove('dragover');
        var fs = e.dataTransfer && e.dataTransfer.files;
        if (fs && fs.length) addFiles(fs);
      });
      fileInput.addEventListener('change', function () {
        if (fileInput.files && fileInput.files.length) addFiles(fileInput.files);
        fileInput.value = '';
      });

      btnMerge.addEventListener('click', merge);
      btnDownload.addEventListener('click', downloadResult);
      btnSample.addEventListener('click', function () { loadSample(); });
      btnClear.addEventListener('click', function () { clearAll(true); });

      syncLayoutUi();
      syncQualityUi();
      /** On enter: auto-run sample merge so preview/download show a real result (tool-creation rule). */
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('image-merge');
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
