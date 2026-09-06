/**
 * Images-to-PDF tool page: combine multiple local images into one PDF (one page per image).
 * slug: images-to-pdf (single page; orientation/fit on same URL).
 * Spec: work-tasks/images-to-pdf/02-tool-info.md
 * 转换完成后用 OftPdfWork 画布预览结果 PDF（上一页/下一页）。
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
import {
	pdfWorkUiBlockHtml,
	pdfWorkUiClientScript,
	pdfWorkUiCss,
	pdfWorkUiLabels,
} from './site/pdfWorkUi';

/** Prefix pathname with lang when not default. */
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * Render the images-to-PDF tool page.
 * @param opts.lang Active UI language
 * @param opts.defaultLang Default (unprefixed) language
 * @param opts.enabledLangs Enabled language list
 */
export const renderImagesToPdfPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/images-to-pdf';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_images_to_pdf_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_images_to_pdf_description');

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
			currentSlug: 'images-to-pdf',
			currentAnchor: '#converter',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	/** 进度条 / 画布预览的共用文案（core i18n，十语已有）。 */
	const pdfWorkLabels = pdfWorkUiLabels(opts.lang);
	const extraHeadHtml = `
  <style>
    .tools-bar { gap: .5rem; }
    .img-pdf-file-list { list-style: none; padding: 0; margin: 0; }
    .img-pdf-file-item {
      display: flex; align-items: center; gap: .5rem; padding: .35rem 0;
      border-bottom: 1px solid #eee;
    }
    .img-pdf-thumb {
      width: 48px; height: 48px; object-fit: cover; border-radius: .25rem;
      border: 1px solid #dee2e6; background: #f8f9fa;
    }
    .img-pdf-file-name { flex: 1; font-size: .85rem; word-break: break-all; }
    .img-pdf-file-actions { display: flex; gap: .25rem; flex-shrink: 0; }
    ${pdfWorkUiCss()}
  </style>`;

	const contentHtml = `
    <div id="converter" class="tool-page-heading mb-3">
      <h1 class="h4 mb-0">${escapeHtml(t(opts.lang, 'tool_images_to_pdf_title'))}</h1>
    </div>

    <label class="tool-dropzone img-pdf-drop mb-3" id="imgPdfDrop" for="imgPdfFiles">
      <input type="file" id="imgPdfFiles" accept="image/jpeg,image/png,image/webp,image/gif,image/*" multiple>
      <span class="tool-dropzone-title">${escapeHtml(t(opts.lang, 'tool_images_to_pdf_choose_files'))}</span>
      <span class="tool-dropzone-hint">${escapeHtml(t(opts.lang, 'tool_images_to_pdf_drop_hint'))}</span>
    </label>

    <ul id="imgPdfList" class="img-pdf-file-list mb-3" aria-live="polite"></ul>

    <div class="row g-2 mb-2">
      <div class="col-6 col-md-3">
        <label class="form-label mb-0" for="imgPdfOrientation">${escapeHtml(t(opts.lang, 'tool_images_to_pdf_orientation_label'))}</label>
        <select id="imgPdfOrientation" class="form-select form-select-sm">
          <option value="portrait">${escapeHtml(t(opts.lang, 'tool_images_to_pdf_orientation_portrait'))}</option>
          <option value="landscape">${escapeHtml(t(opts.lang, 'tool_images_to_pdf_orientation_landscape'))}</option>
        </select>
      </div>
      <div class="col-6 col-md-3">
        <label class="form-label mb-0" for="imgPdfFit">${escapeHtml(t(opts.lang, 'tool_images_to_pdf_fit_label'))}</label>
        <select id="imgPdfFit" class="form-select form-select-sm">
          <option value="contain">${escapeHtml(t(opts.lang, 'tool_images_to_pdf_fit_contain'))}</option>
          <option value="cover">${escapeHtml(t(opts.lang, 'tool_images_to_pdf_fit_cover'))}</option>
        </select>
      </div>
    </div>

    <div class="d-flex align-items-center tools-bar mb-2 flex-wrap">
      <button type="button" id="imgPdfBtnConvert" class="btn btn-primary btn-sm">${escapeHtml(t(opts.lang, 'tool_images_to_pdf_convert'))}</button>
      <button type="button" id="imgPdfBtnDownload" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(t(opts.lang, 'tool_images_to_pdf_download'))}</button>
      <button type="button" id="imgPdfBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_images_to_pdf_sample'))}</button>
      <button type="button" id="imgPdfBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_images_to_pdf_clear'))}</button>
    </div>

    <p id="imgPdfWarn" class="small text-warning mb-2" style="display:none;" role="status"></p>
    <p id="imgPdfError" class="small text-danger mb-2" style="display:none;" role="alert"></p>
    <p id="imgPdfStatus" class="small text-muted mb-2" role="status"></p>
    <p id="imgPdfStats" class="small text-muted mb-3" style="display:none;"></p>
    ${pdfWorkUiBlockHtml({ idPrefix: 'imgPdf', labels: pdfWorkLabels })}

    <p class="tool-lead mb-4">${escapeHtml(description)}</p>`;

	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: 'tool_images_to_pdf',
		mode: 'rules',
		usecaseCount: 3,
		ruleItemCount: 4,
	});

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{ label: 'pdf-lib', href: 'https://pdf-lib.js.org/' },
			{ label: 'MDN — HTMLCanvasElement.toBlob()', href: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob' },
		],
	});

	/**
	 * Client script: decode images, rasterize to JPEG/PNG, embed one page per image via pdf-lib, download PDF.
	 */
	const extraBodyHtml = `
  ${pdfWorkUiClientScript()}
  <script src="/vendor/pdf-lib/pdf-lib.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script>
    (function () {
      /** Soft warn when any single file exceeds this size (bytes). */
      var SOFT_BYTES = 25 * 1024 * 1024;
      /** Soft warn when canvas edge exceeds this (px). */
      var SOFT_EDGE = 8192;
      /** A4 page size in PDF points (portrait). */
      var PAGE_W = 595.28;
      var PAGE_H = 841.89;

      var drop = document.getElementById('imgPdfDrop');
      var fileInput = document.getElementById('imgPdfFiles');
      var listEl = document.getElementById('imgPdfList');
      var orientationEl = document.getElementById('imgPdfOrientation');
      var fitEl = document.getElementById('imgPdfFit');
      var btnConvert = document.getElementById('imgPdfBtnConvert');
      var btnDownload = document.getElementById('imgPdfBtnDownload');
      var btnSample = document.getElementById('imgPdfBtnSample');
      var btnClear = document.getElementById('imgPdfBtnClear');
      var warnEl = document.getElementById('imgPdfWarn');
      var errEl = document.getElementById('imgPdfError');
      var statusEl = document.getElementById('imgPdfStatus');
      var statsEl = document.getElementById('imgPdfStats');
      /** 共用进度条 + 结果 PDF 画布预览（id 前缀须与 HTML 一致）。 */
      var work = window.OftPdfWork.bind('imgPdf');
      /** 转换期间禁用的按钮（主按钮带 spinner）。 */
      var busyBtns = [btnConvert, btnDownload, btnSample, btnClear];

      var msg = {
        empty: ${JSON.stringify(t(opts.lang, 'tool_images_to_pdf_empty'))},
        decodeFail: ${JSON.stringify(t(opts.lang, 'tool_images_to_pdf_err_decode'))},
        encodeFail: ${JSON.stringify(t(opts.lang, 'tool_images_to_pdf_err_encode'))},
        large: ${JSON.stringify(t(opts.lang, 'tool_images_to_pdf_warn_large'))},
        edge: ${JSON.stringify(t(opts.lang, 'tool_images_to_pdf_warn_edge'))},
        animation: ${JSON.stringify(t(opts.lang, 'tool_images_to_pdf_warn_animation'))},
        pdflibMissing: ${JSON.stringify(t(opts.lang, 'tool_images_to_pdf_warn_pdflib'))},
        converting: ${JSON.stringify(t(opts.lang, 'tool_images_to_pdf_status_converting'))},
        done: ${JSON.stringify(t(opts.lang, 'tool_images_to_pdf_status_done'))},
        moveUp: ${JSON.stringify(t(opts.lang, 'tool_images_to_pdf_move_up'))},
        moveDown: ${JSON.stringify(t(opts.lang, 'tool_images_to_pdf_move_down'))},
        remove: ${JSON.stringify(t(opts.lang, 'tool_images_to_pdf_remove'))},
        statsTpl: ${JSON.stringify(t(opts.lang, 'tool_images_to_pdf_stats_tpl'))}
      };

      /**
       * @typedef {{ id: string, file: File, bitmap: ImageBitmap|HTMLImageElement, w: number, h: number, thumbUrl: string }} PdfItem
       */

      /** @type {PdfItem[]} Ordered source images. */
      var items = [];
      /** @type {Uint8Array|null} Last PDF bytes. */
      var resultBytes = null;
      /** Monotonic id for list rows. */
      var nextId = 1;

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

      /** Return true when pdf-lib global is available. */
      function hasPdfLib() {
        return typeof PDFLib !== 'undefined' && PDFLib && typeof PDFLib.PDFDocument === 'function';
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

      /** 清空 PDF 结果与画布预览。 */
      function clearResult() {
        resultBytes = null;
        btnDownload.disabled = true;
        statsEl.style.display = 'none';
        statsEl.textContent = '';
        work.clearPreview();
        work.hideProgress();
      }

      /** Re-render the ordered file list with reorder/remove controls. */
      function renderList() {
        listEl.innerHTML = '';
        items.forEach(function (item, idx) {
          var li = document.createElement('li');
          li.className = 'img-pdf-file-item';
          li.dataset.id = item.id;
          li.innerHTML =
            '<img class="img-pdf-thumb" src="' + escapeHtml(item.thumbUrl) + '" alt="">' +
            '<span class="img-pdf-file-name">' + escapeHtml(item.file.name || ('#' + (idx + 1))) + '</span>' +
            '<span class="img-pdf-file-actions">' +
            '<button type="button" class="btn btn-outline-secondary btn-sm img-pdf-up" data-id="' + escapeHtml(item.id) + '" title="' + escapeHtml(msg.moveUp) + '"' + (idx === 0 ? ' disabled' : '') + '>&#8593;</button>' +
            '<button type="button" class="btn btn-outline-secondary btn-sm img-pdf-down" data-id="' + escapeHtml(item.id) + '" title="' + escapeHtml(msg.moveDown) + '"' + (idx === items.length - 1 ? ' disabled' : '') + '>&#8595;</button>' +
            '<button type="button" class="btn btn-outline-danger btn-sm img-pdf-remove" data-id="' + escapeHtml(item.id) + '" title="' + escapeHtml(msg.remove) + '">&times;</button>' +
            '</span>';
          listEl.appendChild(li);
        });
      }

      /** Collect size/GIF warnings for current items. */
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
        if (!hasPdfLib()) warns.push(msg.pdflibMissing);
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
       * Draw image with contain fit inside a rectangle on canvas.
       * @param {CanvasRenderingContext2D} ctx
       * @param {CanvasImageSource} img
       * @param {number} cx
       * @param {number} cy
       * @param {number} cw
       * @param {number} ch
       * @param {number} sw
       * @param {number} sh
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
       * Draw image with cover fit inside a rectangle on canvas.
       * @param {CanvasRenderingContext2D} ctx
       * @param {CanvasImageSource} img
       * @param {number} cx
       * @param {number} cy
       * @param {number} cw
       * @param {number} ch
       * @param {number} sw
       * @param {number} sh
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
       * Rasterize one source item to JPEG or PNG bytes for PDF embed.
       * @param {PdfItem} item
       * @param {number} pageW Page width in px (scaled from PDF points)
       * @param {number} pageH Page height in px
       * @param {string} fit contain|cover
       * @returns {Promise<{ bytes: Uint8Array, mime: string, w: number, h: number }>}
       */
      function rasterizeForPage(item, pageW, pageH, fit) {
        var canvas = document.createElement('canvas');
        canvas.width = pageW;
        canvas.height = pageH;
        var ctx = canvas.getContext('2d');
        if (!ctx) return Promise.reject(new Error('encode'));
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, pageW, pageH);
        if (fit === 'cover') drawCover(ctx, item.bitmap, 0, 0, pageW, pageH, item.w, item.h);
        else drawContain(ctx, item.bitmap, 0, 0, pageW, pageH, item.w, item.h);
        var usePng = (item.file.type || '').indexOf('png') >= 0;
        var mime = usePng ? 'image/png' : 'image/jpeg';
        return new Promise(function (resolve, reject) {
          canvas.toBlob(function (blob) {
            if (!blob) { reject(new Error('encode')); return; }
            blob.arrayBuffer().then(function (buf) {
              resolve({ bytes: new Uint8Array(buf), mime: mime, w: pageW, h: pageH });
            }).catch(reject);
          }, mime, usePng ? undefined : 0.92);
        });
      }

      /**
       * Build PDF with one page per image in list order.
       * @returns {Promise<Uint8Array>}
       */
      function buildPdf() {
        if (!hasPdfLib()) return Promise.reject(new Error('pdflib'));
        var PDFDocument = PDFLib.PDFDocument;
        var isLandscape = orientationEl.value === 'landscape';
        var pageWPt = isLandscape ? PAGE_H : PAGE_W;
        var pageHPt = isLandscape ? PAGE_W : PAGE_H;
        var fit = fitEl.value;
        /** Scale factor: render at 2x points for sharper embed. */
        var scale = 2;
        var pageWPx = Math.round(pageWPt * scale);
        var pageHPx = Math.round(pageHPt * scale);
        return PDFDocument.create().then(function (doc) {
          var chain = Promise.resolve(doc);
          items.forEach(function (item) {
            chain = chain.then(function (currentDoc) {
              return rasterizeForPage(item, pageWPx, pageHPx, fit).then(function (raster) {
                var page = currentDoc.addPage([pageWPt, pageHPt]);
                var embedPromise = raster.mime === 'image/png'
                  ? currentDoc.embedPng(raster.bytes)
                  : currentDoc.embedJpg(raster.bytes);
                return embedPromise.then(function (embedded) {
                  page.drawImage(embedded, {
                    x: 0,
                    y: 0,
                    width: pageWPt,
                    height: pageHPt
                  });
                  return currentDoc;
                });
              });
            });
          });
          return chain.then(function (finalDoc) {
            return finalDoc.save();
          });
        });
      }

      /** 跑转换流水线：生成 PDF、画布预览，并启用下载。 */
      function convert() {
        setError('');
        clearResult();
        if (!items.length) {
          setError(msg.empty);
          return;
        }
        if (!hasPdfLib()) {
          setError(msg.pdflibMissing);
          refreshWarnings();
          return;
        }
        work.setBusy(busyBtns, true);
        work.setProgress(null);
        setStatus(msg.converting);
        return window.OftPdfWork.yieldUi()
          .then(function () {
            return buildPdf();
          })
          .then(function (bytes) {
            resultBytes = bytes;
            work.setProgress(90);
            return work.showPreview(bytes).then(function () { return bytes; });
          })
          .then(function (bytes) {
            work.setProgress(100);
            btnDownload.disabled = false;
            statsEl.textContent = msg.statsTpl
              .replace('{pages}', String(items.length))
              .replace('{n}', String(items.length))
              .replace('{bytes}', formatBytes(bytes.length));
            statsEl.style.display = '';
            setStatus(msg.done);
          })
          .catch(function () {
            setError(msg.encodeFail);
            setStatus('');
            work.clearPreview();
          })
          .finally(function () {
            work.setBusy(busyBtns, false);
            work.hideProgress();
            btnConvert.disabled = false;
            btnDownload.disabled = !resultBytes;
          });
      }

      /** Trigger download of the last PDF bytes. */
      function downloadResult() {
        if (!resultBytes) return;
        var blob = new Blob([resultBytes], { type: 'application/pdf' });
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = 'images.pdf';
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      }

      /**
       * Generate 3 colored sample images, add them, then auto-convert.
       * @returns {Promise<void>}
       */
      function loadSample() {
        clearAll(false);
        var specs = [
          { w: 320, h: 240, color: '#2563eb', name: 'sample-page-1.png' },
          { w: 320, h: 240, color: '#dc2626', name: 'sample-page-2.png' },
          { w: 320, h: 240, color: '#16a34a', name: 'sample-page-3.png' }
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
            ctx.font = '16px sans-serif';
            ctx.fillText(spec.name.replace('.png', ''), 24, spec.h / 2);
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
            if (items.length) convert();
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
        var up = tEl.closest('.img-pdf-up');
        var down = tEl.closest('.img-pdf-down');
        var rem = tEl.closest('.img-pdf-remove');
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

      orientationEl.addEventListener('change', clearResult);
      fitEl.addEventListener('change', clearResult);

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

      btnConvert.addEventListener('click', convert);
      btnDownload.addEventListener('click', downloadResult);
      btnSample.addEventListener('click', function () { loadSample(); });
      btnClear.addEventListener('click', function () { clearAll(true); });

      refreshWarnings();
      /** On enter: auto-run sample convert so download shows a real result. */
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('images-to-pdf');
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
