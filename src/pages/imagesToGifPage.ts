/**
 * Images-to-GIF tool page: combine multiple local images into one animated GIF.
 * slug: images-to-gif (single page; delay/loop/width on same URL).
 * Spec: work-tasks/images-to-gif/02-tool-info.md
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
 * Render the images-to-GIF tool page.
 * @param opts.lang Active UI language
 * @param opts.defaultLang Default (unprefixed) language
 * @param opts.enabledLangs Enabled language list
 */
export const renderImagesToGifPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/images-to-gif';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_images_to_gif_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_images_to_gif_description');

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
		items: buildToolSidebarItems({
			lang: opts.lang,
			defaultLang: opts.defaultLang,
			currentSlug: 'images-to-gif',
			currentAnchor: '#converter',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	const extraHeadHtml = `
  <style>
    .tools-bar { gap: .5rem; }
    #imgGifPreview {
      max-width: 100%; max-height: 360px; object-fit: contain;
      border: 1px solid #dee2e6; border-radius: .5rem; background: #fff;
    }
    .img-gif-preview-wrap { min-height: 120px; display: flex; align-items: center; justify-content: center; }
    .img-gif-file-list { list-style: none; padding: 0; margin: 0; }
    .img-gif-file-item {
      display: flex; align-items: center; gap: .5rem; padding: .35rem 0;
      border-bottom: 1px solid #eee;
    }
    .img-gif-thumb {
      width: 48px; height: 48px; object-fit: cover; border-radius: .25rem;
      border: 1px solid #dee2e6; background: #f8f9fa;
    }
    .img-gif-file-name { flex: 1; font-size: .85rem; word-break: break-all; }
    .img-gif-file-actions { display: flex; gap: .25rem; flex-shrink: 0; }
  </style>
  <link rel="modulepreload" href="/vendor/gifenc/gifenc.esm.js" />`;

	const contentHtml = `
    <div id="converter" class="tool-page-heading mb-3">
      <h1 class="h4 mb-0">${escapeHtml(t(opts.lang, 'tool_images_to_gif_title'))}</h1>
    </div>

    <label class="tool-dropzone img-gif-drop mb-3" id="imgGifDrop" for="imgGifFiles">
      <input type="file" id="imgGifFiles" accept="image/jpeg,image/png,image/webp,image/gif,image/*" multiple>
      <span class="tool-dropzone-title">${escapeHtml(t(opts.lang, 'tool_images_to_gif_choose_files'))}</span>
      <span class="tool-dropzone-hint">${escapeHtml(t(opts.lang, 'tool_images_to_gif_drop_hint'))}</span>
    </label>

    <ul id="imgGifList" class="img-gif-file-list mb-3" aria-live="polite"></ul>

    <div class="row g-2 mb-2">
      <div class="col-6 col-md-3">
        <label class="form-label mb-0" for="imgGifDelay">${escapeHtml(t(opts.lang, 'tool_images_to_gif_delay_label'))}</label>
        <input type="number" id="imgGifDelay" class="form-control form-control-sm" min="20" max="10000" value="500">
      </div>
      <div class="col-6 col-md-3">
        <label class="form-label mb-0" for="imgGifLoop">${escapeHtml(t(opts.lang, 'tool_images_to_gif_loop_label'))}</label>
        <input type="number" id="imgGifLoop" class="form-control form-control-sm" min="0" max="65535" value="0">
      </div>
      <div class="col-6 col-md-3">
        <label class="form-label mb-0" for="imgGifWidth">${escapeHtml(t(opts.lang, 'tool_images_to_gif_width_label'))}</label>
        <input type="number" id="imgGifWidth" class="form-control form-control-sm" min="64" max="2048" value="480">
      </div>
    </div>

    <div class="d-flex align-items-center tools-bar mb-2 flex-wrap">
      <button type="button" id="imgGifBtnBuild" class="btn btn-primary btn-sm">${escapeHtml(t(opts.lang, 'tool_images_to_gif_build'))}</button>
      <button type="button" id="imgGifBtnDownload" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(t(opts.lang, 'tool_images_to_gif_download'))}</button>
      <button type="button" id="imgGifBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_images_to_gif_sample'))}</button>
      <button type="button" id="imgGifBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_images_to_gif_clear'))}</button>
    </div>

    <p id="imgGifWarn" class="small text-warning mb-2" style="display:none;" role="status"></p>
    <p id="imgGifError" class="small text-danger mb-2" style="display:none;" role="alert"></p>
    <p id="imgGifStatus" class="small text-muted mb-2" role="status"></p>

    <div class="row g-3 mb-3">
      <div class="col-12">
        <label class="form-label">${escapeHtml(t(opts.lang, 'tool_images_to_gif_preview_label'))}</label>
        <div class="img-gif-preview-wrap"><img id="imgGifPreview" alt="" hidden></div>
        <p id="imgGifStats" class="small text-muted mt-1 mb-0" style="display:none;"></p>
      </div>
    </div>

    <p class="tool-lead mb-4">${escapeHtml(description)}</p>`;

	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: 'tool_images_to_gif',
		mode: 'rules',
		usecaseCount: 3,
		ruleItemCount: 4,
	});

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{ label: 'gifenc', href: 'https://github.com/mattdesl/gifenc' },
			{ label: 'MDN — Image file type and format guide', href: 'https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types' },
		],
	});

	/**
	 * Client script: decode frames, quantize with gifenc, build animated GIF, preview and download.
	 */
	const extraBodyHtml = `
  <script>
    (function () {
      /** Soft warn when any single file exceeds this size (bytes). */
      var SOFT_BYTES = 25 * 1024 * 1024;
      /** Soft warn when canvas edge exceeds this (px). */
      var SOFT_EDGE = 8192;
      /** Soft warn when frame count exceeds this. */
      var SOFT_MAX_FRAMES = 50;
      /** Same-origin ESM for gifenc (vendored; avoids jsDelivr latency/blocks on enter). */
      var GIFENC_URL = '/vendor/gifenc/gifenc.esm.js';

      var drop = document.getElementById('imgGifDrop');
      var fileInput = document.getElementById('imgGifFiles');
      var listEl = document.getElementById('imgGifList');
      var delayEl = document.getElementById('imgGifDelay');
      var loopEl = document.getElementById('imgGifLoop');
      var widthEl = document.getElementById('imgGifWidth');
      var btnBuild = document.getElementById('imgGifBtnBuild');
      var btnDownload = document.getElementById('imgGifBtnDownload');
      var btnSample = document.getElementById('imgGifBtnSample');
      var btnClear = document.getElementById('imgGifBtnClear');
      var warnEl = document.getElementById('imgGifWarn');
      var errEl = document.getElementById('imgGifError');
      var statusEl = document.getElementById('imgGifStatus');
      var preview = document.getElementById('imgGifPreview');
      var statsEl = document.getElementById('imgGifStats');

      var msg = {
        empty: ${JSON.stringify(t(opts.lang, 'tool_images_to_gif_empty'))},
        needTwo: ${JSON.stringify(t(opts.lang, 'tool_images_to_gif_need_two'))},
        decodeFail: ${JSON.stringify(t(opts.lang, 'tool_images_to_gif_err_decode'))},
        encodeFail: ${JSON.stringify(t(opts.lang, 'tool_images_to_gif_err_encode'))},
        large: ${JSON.stringify(t(opts.lang, 'tool_images_to_gif_warn_large'))},
        edge: ${JSON.stringify(t(opts.lang, 'tool_images_to_gif_warn_edge'))},
        animation: ${JSON.stringify(t(opts.lang, 'tool_images_to_gif_warn_animation'))},
        maxFrames: ${JSON.stringify(t(opts.lang, 'tool_images_to_gif_warn_max_frames'))},
        gifencMissing: ${JSON.stringify(t(opts.lang, 'tool_images_to_gif_warn_gifenc'))},
        building: ${JSON.stringify(t(opts.lang, 'tool_images_to_gif_status_building'))},
        done: ${JSON.stringify(t(opts.lang, 'tool_images_to_gif_status_done'))},
        moveUp: ${JSON.stringify(t(opts.lang, 'tool_images_to_gif_move_up'))},
        moveDown: ${JSON.stringify(t(opts.lang, 'tool_images_to_gif_move_down'))},
        remove: ${JSON.stringify(t(opts.lang, 'tool_images_to_gif_remove'))},
        statsTpl: ${JSON.stringify(t(opts.lang, 'tool_images_to_gif_stats_tpl'))}
      };

      /**
       * @typedef {{ id: string, file: File, bitmap: ImageBitmap|HTMLImageElement, w: number, h: number, thumbUrl: string }} GifItem
       */

      /** @type {GifItem[]} Ordered frame sources. */
      var items = [];
      /** @type {Blob|null} Last GIF output blob. */
      var resultBlob = null;
      /** @type {string|null} Object URL for preview. */
      var previewUrl = null;
      /** Monotonic id for list rows. */
      var nextId = 1;
      /** Cached gifenc module promise. */
      var gifencPromise = null;

      /** Lazy-load gifenc ESM from same-origin vendor. */
      function loadGifenc() {
        if (!gifencPromise) {
          gifencPromise = import(GIFENC_URL).catch(function () {
            gifencPromise = null;
            throw new Error('gifenc');
          });
        }
        return gifencPromise;
      }

      /** Show or hide warning banner. */
      function setWarn(text) {
        if (!text) { warnEl.style.display = 'none'; warnEl.textContent = ''; return; }
        warnEl.textContent = text;
        warnEl.style.display = '';
      }

      /** Show or hide error banner. */
      function setError(text) {
        if (!text) { errEl.style.display = 'none'; errEl.textContent = ''; return; }
        errEl.textContent = text;
        errEl.style.display = '';
      }

      /** Update status line. */
      function setStatus(text) {
        statusEl.textContent = text || '';
      }

      /** Escape HTML for list rendering. */
      function escapeHtml(s) {
        return String(s)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      }

      /** Format byte count for stats. */
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

      /** Clear GIF result preview state. */
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
          li.className = 'img-gif-file-item';
          li.dataset.id = item.id;
          li.innerHTML =
            '<img class="img-gif-thumb" src="' + escapeHtml(item.thumbUrl) + '" alt="">' +
            '<span class="img-gif-file-name">' + escapeHtml(item.file.name || ('#' + (idx + 1))) + '</span>' +
            '<span class="img-gif-file-actions">' +
            '<button type="button" class="btn btn-outline-secondary btn-sm img-gif-up" data-id="' + escapeHtml(item.id) + '" title="' + escapeHtml(msg.moveUp) + '"' + (idx === 0 ? ' disabled' : '') + '>&#8593;</button>' +
            '<button type="button" class="btn btn-outline-secondary btn-sm img-gif-down" data-id="' + escapeHtml(item.id) + '" title="' + escapeHtml(msg.moveDown) + '"' + (idx === items.length - 1 ? ' disabled' : '') + '>&#8595;</button>' +
            '<button type="button" class="btn btn-outline-danger btn-sm img-gif-remove" data-id="' + escapeHtml(item.id) + '" title="' + escapeHtml(msg.remove) + '">&times;</button>' +
            '</span>';
          listEl.appendChild(li);
        });
      }

      /** Collect size/GIF/frame warnings for current items. */
      function refreshWarnings() {
        var warns = [];
        var hasGif = false;
        var hasLarge = false;
        var hasEdge = false;
        items.forEach(function (it) {
          if (it.file.size > SOFT_BYTES) hasLarge = true;
          if (it.w > SOFT_EDGE || it.h > SOFT_EDGE) hasEdge = true;
          var mime = it.file.type || '';
          var name = it.file.name || '';
          if (mime.indexOf('gif') >= 0 || /\\.gif$/i.test(name)) hasGif = true;
        });
        if (hasLarge) warns.push(msg.large);
        if (hasEdge) warns.push(msg.edge);
        if (hasGif) warns.push(msg.animation);
        if (items.length > SOFT_MAX_FRAMES) warns.push(msg.maxFrames);
        setWarn(warns.join(' '));
      }

      /**
       * Append decoded files to the frame queue.
       * @param {FileList|File[]} files
       * @returns {Promise<void>}
       */
      function addFiles(files) {
        setError('');
        clearResult();
        var arr = Array.prototype.slice.call(files || []);
        if (!arr.length) return Promise.resolve();
        return Promise.all(arr.map(function (file) {
          return decodeImage(file).then(function (dec) {
            items.push({
              id: String(nextId++),
              file: file,
              bitmap: dec.bitmap,
              w: dec.w,
              h: dec.h,
              thumbUrl: URL.createObjectURL(file)
            });
          });
        }))
          .then(function () {
            renderList();
            refreshWarnings();
          })
          .catch(function () {
            setError(msg.decodeFail);
          });
      }

      /**
       * Draw image with contain fit onto a fixed canvas.
       * @param {CanvasRenderingContext2D} ctx
       * @param {CanvasImageSource} img
       * @param {number} cw
       * @param {number} ch
       * @param {number} sw
       * @param {number} sh
       */
      function drawContain(ctx, img, cw, ch, sw, sh) {
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, cw, ch);
        var scale = Math.min(cw / sw, ch / sh);
        var dw = sw * scale;
        var dh = sh * scale;
        var dx = (cw - dw) / 2;
        var dy = (ch - dh) / 2;
        ctx.drawImage(img, dx, dy, dw, dh);
      }

      /**
       * Compute output canvas width/height from first frame aspect ratio.
       * @returns {{ w: number, h: number }}
       */
      function outputSize() {
        var outW = Math.max(64, Math.min(2048, parseInt(widthEl.value, 10) || 480));
        var first = items[0];
        var aspect = first.w / first.h;
        var outH = Math.round(outW / aspect);
        if (outH > SOFT_EDGE) outH = SOFT_EDGE;
        if (outW > SOFT_EDGE) outW = SOFT_EDGE;
        return { w: outW, h: outH };
      }

      /**
       * Build animated GIF bytes via gifenc.
       * @returns {Promise<Uint8Array>}
       */
      function buildGifBytes() {
        return loadGifenc().then(function (mod) {
          var GIFEncoder = mod.GIFEncoder;
          var quantize = mod.quantize;
          var applyPalette = mod.applyPalette;
          if (!GIFEncoder || !quantize || !applyPalette) throw new Error('gifenc');
          var size = outputSize();
          var delay = Math.max(20, Math.min(10000, parseInt(delayEl.value, 10) || 500));
          var loop = Math.max(0, Math.min(65535, parseInt(loopEl.value, 10) || 0));
          var gif = GIFEncoder();
          items.forEach(function (item, frameIdx) {
            var canvas = document.createElement('canvas');
            canvas.width = size.w;
            canvas.height = size.h;
            var ctx = canvas.getContext('2d', { willReadFrequently: true });
            if (!ctx) throw new Error('encode');
            drawContain(ctx, item.bitmap, size.w, size.h, item.w, item.h);
            var imageData = ctx.getImageData(0, 0, size.w, size.h);
            var palette = quantize(imageData.data, 256);
            var index = applyPalette(imageData.data, palette);
            /** First frame carries Netscape loop count via gifenc writeFrame.repeat. */
            var opts = frameIdx === 0
              ? { palette: palette, delay: delay, repeat: loop }
              : { palette: palette, delay: delay };
            gif.writeFrame(index, size.w, size.h, opts);
          });
          gif.finish();
          return gif.bytes();
        });
      }

      /** Run build pipeline and show preview. */
      function build() {
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
        setStatus(msg.building);
        btnBuild.disabled = true;
        buildGifBytes()
          .then(function (bytes) {
            resultBlob = new Blob([bytes], { type: 'image/gif' });
            previewUrl = URL.createObjectURL(resultBlob);
            preview.src = previewUrl;
            preview.hidden = false;
            btnDownload.disabled = false;
            var size = outputSize();
            statsEl.textContent = msg.statsTpl
              .replace('{w}', String(size.w))
              .replace('{h}', String(size.h))
              .replace('{frames}', String(items.length))
              .replace('{bytes}', formatBytes(resultBlob.size));
            statsEl.style.display = '';
            setStatus(msg.done);
          })
          .catch(function (err) {
            if (err && err.message === 'gifenc') setError(msg.gifencMissing);
            else setError(msg.encodeFail);
            setStatus('');
          })
          .finally(function () {
            btnBuild.disabled = false;
          });
      }

      /** Trigger download of the last GIF blob. */
      function downloadResult() {
        if (!resultBlob) return;
        var url = URL.createObjectURL(resultBlob);
        var a = document.createElement('a');
        a.href = url;
        a.download = 'animation.gif';
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      }

      /**
       * Generate 3 colored sample frames, add them, then auto-build GIF.
       * @returns {Promise<void>}
       */
      function loadSample() {
        clearAll(false);
        /** Compact solid frames: enough for demo, cheaper to quantize on enter. */
        var specs = [
          { w: 240, h: 180, color: '#7c3aed', name: 'frame-1.png' },
          { w: 240, h: 180, color: '#ea580c', name: 'frame-2.png' },
          { w: 240, h: 180, color: '#0891b2', name: 'frame-3.png' }
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
            ctx.font = '18px sans-serif';
            ctx.fillText(spec.name.replace('.png', ''), 28, spec.h / 2);
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
            if (items.length >= 2) build();
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
        var up = tEl.closest('.img-gif-up');
        var down = tEl.closest('.img-gif-down');
        var rem = tEl.closest('.img-gif-remove');
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

      delayEl.addEventListener('change', clearResult);
      loopEl.addEventListener('change', clearResult);
      widthEl.addEventListener('change', clearResult);

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

      btnBuild.addEventListener('click', build);
      btnDownload.addEventListener('click', downloadResult);
      btnSample.addEventListener('click', function () { loadSample(); });
      btnClear.addEventListener('click', function () { clearAll(true); });

      /**
       * On enter: auto-run sample after first paint so HTML/CSS are interactive first.
       * Encoder loads from same-origin /vendor (not CDN).
       */
      function runEnterSample() {
        loadSample();
      }
      if (typeof requestAnimationFrame === 'function') {
        requestAnimationFrame(function () {
          setTimeout(runEnterSample, 0);
        });
      } else {
        setTimeout(runEnterSample, 0);
      }
    })();
  </script>`;

	const toolMeta = getToolBySlug('images-to-gif');
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
