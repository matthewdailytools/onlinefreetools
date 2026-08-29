/**
 * Color-from-image tool page: local palette (median cut) + click-to-pick region color on preview.
 * slug: color-from-image (single page; no dominant-color / extract-palette thin URLs).
 * Spec: work-tasks/color-from-image/02-tool-info.md
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
 * Render the extract-colors-from-image tool page.
 * @param opts.lang Active UI language
 * @param opts.defaultLang Default (unprefixed) language
 * @param opts.enabledLangs Enabled language list
 */
export const renderColorFromImagePage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/color-from-image';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_color_from_image_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_color_from_image_description');

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
			currentSlug: 'color-from-image',
			currentAnchor: '#converter',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	const extraHeadHtml = `
  <style>
    .tools-bar { gap: .5rem; }
    .cfi-preview-wrap {
      position: relative; min-height: 100px;
      display: flex; align-items: center; justify-content: center;
    }
    #cfiPreview {
      max-width: 100%; max-height: 240px;
      border: 1px solid #dee2e6; border-radius: .5rem; background: #fff;
      cursor: crosshair; display: block;
    }
    #cfiPreview[hidden] { display: none !important; }
    .cfi-pick-marker {
      position: absolute; width: 14px; height: 14px; margin: -7px 0 0 -7px;
      border: 2px solid #fff; border-radius: 50%;
      box-shadow: 0 0 0 1px rgba(0,0,0,.55); pointer-events: none; display: none;
    }
    .cfi-swatch {
      width: 100%; min-height: 56px; border-radius: .4rem; border: 1px solid rgba(0,0,0,.12);
      cursor: pointer;
    }
    .cfi-color-card { font-size: .8rem; }
    .cfi-color-card code { font-size: .75rem; word-break: break-all; }
    .cfi-pct { color: #6c757d; }
    .cfi-picked-card {
      border: 1px solid #dee2e6; border-radius: .5rem; padding: .75rem;
      background: #f8f9fa;
    }
    .cfi-pick-hint { font-size: .8rem; color: #6c757d; margin-top: .35rem; }
  </style>`;

	const contentHtml = `
    <div id="converter" class="tool-page-heading mb-3">
      <h1 class="h4 mb-0">${escapeHtml(t(opts.lang, 'tool_color_from_image_title'))}</h1>
    </div>

    <label class="tool-dropzone cfi-drop mb-3" id="cfiDrop" for="cfiFile">
      <input type="file" id="cfiFile" accept="image/jpeg,image/png,image/webp,image/*">
      <span class="tool-dropzone-title">${escapeHtml(t(opts.lang, 'tool_color_from_image_choose_file'))}</span>
      <span class="tool-dropzone-hint">${escapeHtml(t(opts.lang, 'tool_color_from_image_drop_hint'))}</span>
      <span id="cfiFileName" class="tool-dropzone-file"></span>
    </label>

    <div class="row g-2 align-items-end mb-2">
      <div class="col-auto">
        <label class="form-label mb-0" for="cfiCount">${escapeHtml(t(opts.lang, 'tool_color_from_image_count_label'))}</label>
        <input type="range" class="form-range" id="cfiCount" min="2" max="12" value="6" style="width:10rem;">
        <span id="cfiCountVal" class="small ms-1">6</span>
      </div>
    </div>

    <div class="d-flex align-items-center tools-bar mb-2 flex-wrap">
      <button type="button" id="cfiBtnExtract" class="btn btn-primary btn-sm">${escapeHtml(t(opts.lang, 'tool_color_from_image_extract'))}</button>
      <button type="button" id="cfiBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_color_from_image_sample'))}</button>
      <button type="button" id="cfiBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_color_from_image_clear'))}</button>
    </div>

    <p id="cfiWarn" class="small text-warning mb-2" style="display:none;" role="status"></p>
    <p id="cfiError" class="small text-danger mb-2" style="display:none;" role="alert"></p>
    <p id="cfiStatus" class="small text-muted mb-2" role="status"></p>

    <div class="row g-3 mb-3">
      <div class="col-12 col-md-5">
        <label class="form-label">${escapeHtml(t(opts.lang, 'tool_color_from_image_preview_label'))}</label>
        <div class="cfi-preview-wrap" id="cfiPreviewWrap">
          <canvas id="cfiPreview" hidden></canvas>
          <span class="cfi-pick-marker" id="cfiPickMarker" aria-hidden="true"></span>
        </div>
        <p class="cfi-pick-hint mb-0">${escapeHtml(t(opts.lang, 'tool_color_from_image_pick_hint'))}</p>
        <div id="cfiPicked" class="cfi-picked-card mt-2" style="display:none;"></div>
      </div>
      <div class="col-12 col-md-7">
        <label class="form-label">${escapeHtml(t(opts.lang, 'tool_color_from_image_palette_label'))}</label>
        <div id="cfiPalette" class="row g-2"></div>
      </div>
    </div>

    <p class="tool-lead mb-4">${escapeHtml(description)}</p>`;

	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: 'tool_color_from_image',
		mode: 'rules',
		usecaseCount: 3,
		ruleItemCount: 5,
	});

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{ label: 'MDN — CanvasRenderingContext2D.getImageData()', href: 'https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/getImageData' },
			{ label: 'MDN — HTMLCanvasElement', href: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement' },
		],
	});

	/**
	 * Client script: median-cut palette + click region average color on full-res buffer.
	 */
	const extraBodyHtml = `
  <script>
    (function () {
      /** Soft warn when file is large (bytes). */
      var SOFT_BYTES = 25 * 1024 * 1024;
      /** Max sampling edge (px) before quantization. */
      var SAMPLE_EDGE = 256;
      /** Max display edge for preview canvas (px). */
      var DISPLAY_EDGE = 360;
      /** Pixels with alpha below this are ignored for palette / pick average. */
      var ALPHA_MIN = 128;
      /** Half-size of click region in source pixels (7×7 when 3). */
      var PICK_HALF = 3;

      var drop = document.getElementById('cfiDrop');
      var fileInput = document.getElementById('cfiFile');
      var fileNameEl = document.getElementById('cfiFileName');
      var countInput = document.getElementById('cfiCount');
      var countVal = document.getElementById('cfiCountVal');
      var btnExtract = document.getElementById('cfiBtnExtract');
      var btnSample = document.getElementById('cfiBtnSample');
      var btnClear = document.getElementById('cfiBtnClear');
      var warnEl = document.getElementById('cfiWarn');
      var errEl = document.getElementById('cfiError');
      var statusEl = document.getElementById('cfiStatus');
      var preview = document.getElementById('cfiPreview');
      var previewWrap = document.getElementById('cfiPreviewWrap');
      var pickMarker = document.getElementById('cfiPickMarker');
      var paletteHost = document.getElementById('cfiPalette');
      var pickedHost = document.getElementById('cfiPicked');

      var msg = {
        empty: ${JSON.stringify(t(opts.lang, 'tool_color_from_image_empty'))},
        decodeFail: ${JSON.stringify(t(opts.lang, 'tool_color_from_image_err_decode'))},
        noPixels: ${JSON.stringify(t(opts.lang, 'tool_color_from_image_err_no_pixels'))},
        pickTransparent: ${JSON.stringify(t(opts.lang, 'tool_color_from_image_pick_transparent'))},
        large: ${JSON.stringify(t(opts.lang, 'tool_color_from_image_warn_large'))},
        animation: ${JSON.stringify(t(opts.lang, 'tool_color_from_image_warn_animation'))},
        extracting: ${JSON.stringify(t(opts.lang, 'tool_color_from_image_status_extracting'))},
        done: ${JSON.stringify(t(opts.lang, 'tool_color_from_image_status_done'))},
        picked: ${JSON.stringify(t(opts.lang, 'tool_color_from_image_status_picked'))},
        copied: ${JSON.stringify(t(opts.lang, 'tool_color_from_image_copied'))},
        copy: ${JSON.stringify(t(opts.lang, 'tool_color_from_image_copy'))},
        pctTpl: ${JSON.stringify(t(opts.lang, 'tool_color_from_image_pct_tpl'))},
        pickLabel: ${JSON.stringify(t(opts.lang, 'tool_color_from_image_pick_label'))},
        pickXyTpl: ${JSON.stringify(t(opts.lang, 'tool_color_from_image_pick_xy_tpl'))}
      };

      /** @type {File|null} */
      var sourceFile = null;
      /** Full-resolution canvas used for click picking (willReadFrequently). */
      var pickCanvas = null;
      /** @type {CanvasRenderingContext2D|null} */
      var pickCtx = null;
      var pickW = 0;
      var pickH = 0;
      /** Display scale: preview CSS pixels per source pixel (uniform). */
      var displayScale = 1;

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

      function clampCount() {
        var n = parseInt(countInput.value, 10);
        if (!isFinite(n)) n = 6;
        n = Math.max(2, Math.min(12, n));
        countInput.value = String(n);
        countVal.textContent = String(n);
        return n;
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

      /**
       * Store full-res pixels for picking and draw scaled preview canvas.
       * @param {ImageBitmap|HTMLImageElement} bitmap
       * @param {number} w
       * @param {number} h
       */
      function setupSource(bitmap, w, h) {
        pickCanvas = document.createElement('canvas');
        pickCanvas.width = w;
        pickCanvas.height = h;
        pickCtx = pickCanvas.getContext('2d', { willReadFrequently: true });
        if (!pickCtx) throw new Error('decode');
        pickCtx.drawImage(bitmap, 0, 0);
        pickW = w;
        pickH = h;

        displayScale = Math.min(1, DISPLAY_EDGE / Math.max(w, h, 1));
        var dw = Math.max(1, Math.round(w * displayScale));
        var dh = Math.max(1, Math.round(h * displayScale));
        preview.width = dw;
        preview.height = dh;
        var dctx = preview.getContext('2d');
        if (dctx) {
          dctx.clearRect(0, 0, dw, dh);
          dctx.drawImage(bitmap, 0, 0, dw, dh);
        }
        preview.hidden = false;
        pickMarker.style.display = 'none';
        pickedHost.style.display = 'none';
        pickedHost.innerHTML = '';
      }

      /**
       * Collect opaque RGB samples from a downscaled copy of the pick buffer.
       */
      function samplePixels() {
        if (!pickCanvas) return [];
        var scale = Math.min(1, SAMPLE_EDGE / Math.max(pickW, pickH, 1));
        var sw = Math.max(1, Math.round(pickW * scale));
        var sh = Math.max(1, Math.round(pickH * scale));
        var canvas = document.createElement('canvas');
        canvas.width = sw;
        canvas.height = sh;
        var ctx = canvas.getContext('2d', { willReadFrequently: true });
        if (!ctx) return [];
        ctx.drawImage(pickCanvas, 0, 0, sw, sh);
        var data = ctx.getImageData(0, 0, sw, sh).data;
        var pixels = [];
        for (var i = 0; i < data.length; i += 4) {
          if (data[i + 3] < ALPHA_MIN) continue;
          pixels.push([data[i], data[i + 1], data[i + 2]]);
        }
        return pixels;
      }

      /**
       * Median-cut color quantization.
       * @param {Array<[number,number,number]>} pixels
       * @param {number} maxColors
       */
      function medianCut(pixels, maxColors) {
        if (!pixels.length) return [];
        var boxes = [{ pixels: pixels.slice() }];
        while (boxes.length < maxColors) {
          var bi = -1;
          var bestRange = -1;
          for (var i = 0; i < boxes.length; i++) {
            var r = channelRange(boxes[i].pixels);
            if (r.range > bestRange && boxes[i].pixels.length > 1) {
              bestRange = r.range;
              bi = i;
            }
          }
          if (bi < 0) break;
          var box = boxes[bi];
          var ch = channelRange(box.pixels).channel;
          box.pixels.sort(function (a, b) { return a[ch] - b[ch]; });
          var mid = Math.floor(box.pixels.length / 2);
          boxes.splice(bi, 1, { pixels: box.pixels.slice(0, mid) }, { pixels: box.pixels.slice(mid) });
        }
        return boxes.map(function (box) {
          var sumR = 0, sumG = 0, sumB = 0, n = box.pixels.length;
          for (var j = 0; j < n; j++) {
            sumR += box.pixels[j][0];
            sumG += box.pixels[j][1];
            sumB += box.pixels[j][2];
          }
          return {
            r: Math.round(sumR / n),
            g: Math.round(sumG / n),
            b: Math.round(sumB / n),
            count: n
          };
        }).sort(function (a, b) { return b.count - a.count; });
      }

      /** @param {Array<[number,number,number]>} pixels */
      function channelRange(pixels) {
        var min = [255, 255, 255];
        var max = [0, 0, 0];
        for (var i = 0; i < pixels.length; i++) {
          for (var c = 0; c < 3; c++) {
            if (pixels[i][c] < min[c]) min[c] = pixels[i][c];
            if (pixels[i][c] > max[c]) max[c] = pixels[i][c];
          }
        }
        var ranges = [max[0] - min[0], max[1] - min[1], max[2] - min[2]];
        var channel = 0;
        if (ranges[1] > ranges[channel]) channel = 1;
        if (ranges[2] > ranges[channel]) channel = 2;
        return { channel: channel, range: ranges[channel] };
      }

      function toHex(r, g, b) {
        return '#' + [r, g, b].map(function (v) {
          var s = v.toString(16);
          return s.length === 1 ? '0' + s : s;
        }).join('');
      }

      /** @param {number} r @param {number} g @param {number} b */
      function toHsl(r, g, b) {
        r /= 255; g /= 255; b /= 255;
        var max = Math.max(r, g, b), min = Math.min(r, g, b);
        var h = 0, s = 0, l = (max + min) / 2;
        if (max !== min) {
          var d = max - min;
          s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
          switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            default: h = (r - g) / d + 4;
          }
          h /= 6;
        }
        return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
      }

      /** @param {string} text */
      function copyText(text) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          return navigator.clipboard.writeText(text);
        }
        return new Promise(function (resolve, reject) {
          var ta = document.createElement('textarea');
          ta.value = text;
          document.body.appendChild(ta);
          ta.select();
          try { document.execCommand('copy'); resolve(); }
          catch (e) { reject(e); }
          ta.remove();
        });
      }

      /**
       * Build HTML for a color values block (palette card or picked card).
       * @param {number} r
       * @param {number} g
       * @param {number} b
       * @param {string} [extraHtml]
       */
      function colorValuesHtml(r, g, b, extraHtml) {
        var hex = toHex(r, g, b);
        var hsl = toHsl(r, g, b);
        var rgb = 'rgb(' + r + ', ' + g + ', ' + b + ')';
        var hslStr = 'hsl(' + hsl.h + ', ' + hsl.s + '%, ' + hsl.l + '%)';
        return (
          '<div class="cfi-swatch mb-1" style="background:' + hex + '" title="' + escapeHtml(hex) + '" data-copy="' + escapeHtml(hex) + '" role="button" tabindex="0"></div>' +
          '<div><code data-copy="' + escapeHtml(hex) + '">' + escapeHtml(hex) + '</code></div>' +
          '<div><code data-copy="' + escapeHtml(rgb) + '">' + escapeHtml(rgb) + '</code></div>' +
          '<div><code data-copy="' + escapeHtml(hslStr) + '">' + escapeHtml(hslStr) + '</code></div>' +
          (extraHtml || '') +
          '<button type="button" class="btn btn-outline-secondary btn-sm mt-1" data-copy="' + escapeHtml(hex) + '">' + escapeHtml(msg.copy) + '</button>'
        );
      }

      /**
       * @param {Array<{r:number,g:number,b:number,count:number}>} colors
       * @param {number} total
       */
      function renderPalette(colors, total) {
        paletteHost.innerHTML = '';
        colors.forEach(function (c) {
          var pct = total ? Math.round((c.count / total) * 1000) / 10 : 0;
          var pctLabel = msg.pctTpl.replace('{pct}', String(pct));
          var col = document.createElement('div');
          col.className = 'col-6 col-sm-4 col-lg-3 cfi-color-card';
          col.innerHTML = colorValuesHtml(c.r, c.g, c.b, '<div class="cfi-pct">' + escapeHtml(pctLabel) + '</div>');
          paletteHost.appendChild(col);
        });
      }

      /**
       * Show picked region color and marker.
       * @param {number} sx source x
       * @param {number} sy source y
       * @param {{r:number,g:number,b:number}} color
       * @param {number} size region edge
       */
      function renderPicked(sx, sy, color, size) {
        var meta = msg.pickXyTpl
          .replace('{x}', String(sx))
          .replace('{y}', String(sy))
          .replace('{size}', String(size));
        pickedHost.style.display = '';
        pickedHost.innerHTML =
          '<div class="small fw-semibold mb-1">' + escapeHtml(msg.pickLabel) + '</div>' +
          '<div class="cfi-color-card">' +
          colorValuesHtml(color.r, color.g, color.b, '<div class="cfi-pct">' + escapeHtml(meta) + '</div>') +
          '</div>';

        var rect = preview.getBoundingClientRect();
        var wrapRect = previewWrap.getBoundingClientRect();
        var left = (rect.left - wrapRect.left) + (sx + 0.5) * (rect.width / pickW);
        var top = (rect.top - wrapRect.top) + (sy + 0.5) * (rect.height / pickH);
        pickMarker.style.left = left + 'px';
        pickMarker.style.top = top + 'px';
        pickMarker.style.background = toHex(color.r, color.g, color.b);
        pickMarker.style.display = 'block';
      }

      /**
       * Average opaque pixels in a square around (sx, sy) on the pick buffer.
       * @param {number} sx
       * @param {number} sy
       * @returns {{r:number,g:number,b:number,size:number}|null}
       */
      function averageRegion(sx, sy) {
        if (!pickCtx || !pickW) return null;
        var x0 = Math.max(0, sx - PICK_HALF);
        var y0 = Math.max(0, sy - PICK_HALF);
        var x1 = Math.min(pickW - 1, sx + PICK_HALF);
        var y1 = Math.min(pickH - 1, sy + PICK_HALF);
        var rw = x1 - x0 + 1;
        var rh = y1 - y0 + 1;
        var data = pickCtx.getImageData(x0, y0, rw, rh).data;
        var sumR = 0, sumG = 0, sumB = 0, n = 0;
        for (var i = 0; i < data.length; i += 4) {
          if (data[i + 3] < ALPHA_MIN) continue;
          sumR += data[i];
          sumG += data[i + 1];
          sumB += data[i + 2];
          n++;
        }
        if (!n) return null;
        return {
          r: Math.round(sumR / n),
          g: Math.round(sumG / n),
          b: Math.round(sumB / n),
          size: Math.max(rw, rh)
        };
      }

      /** Map click on preview canvas to source pixels and pick. */
      function onPreviewClick(e) {
        if (!pickCtx || !pickW) {
          setError(msg.empty);
          return;
        }
        var rect = preview.getBoundingClientRect();
        if (rect.width < 1 || rect.height < 1) return;
        var sx = Math.floor(((e.clientX - rect.left) / rect.width) * pickW);
        var sy = Math.floor(((e.clientY - rect.top) / rect.height) * pickH);
        sx = Math.max(0, Math.min(pickW - 1, sx));
        sy = Math.max(0, Math.min(pickH - 1, sy));
        var avg = averageRegion(sx, sy);
        if (!avg) {
          setError(msg.pickTransparent);
          return;
        }
        setError('');
        renderPicked(sx, sy, avg, avg.size);
        setStatus(msg.picked);
      }

      function extract() {
        setError('');
        if (!sourceFile || !pickCanvas) {
          setError(msg.empty);
          return;
        }
        var n = clampCount();
        setStatus(msg.extracting);
        btnExtract.disabled = true;
        try {
          var pixels = samplePixels();
          if (!pixels.length) {
            setError(msg.noPixels);
            paletteHost.innerHTML = '';
            setStatus('');
          } else {
            renderPalette(medianCut(pixels, n), pixels.length);
            setStatus(msg.done);
          }
        } catch (err) {
          setError(msg.decodeFail);
          paletteHost.innerHTML = '';
          setStatus('');
        }
        btnExtract.disabled = false;
      }

      /**
       * @param {File} file
       * @returns {Promise<void>}
       */
      function loadFile(file) {
        setError('');
        setWarn('');
        sourceFile = file;
        fileNameEl.textContent = file.name || '';
        var warns = [];
        if (file.size > SOFT_BYTES) warns.push(msg.large);
        if ((file.type || '').indexOf('gif') >= 0 || /\\.gif$/i.test(file.name || '')) warns.push(msg.animation);
        setWarn(warns.join(' '));
        btnExtract.disabled = true;
        return decodeImage(file)
          .then(function (dec) {
            setupSource(dec.bitmap, dec.w, dec.h);
            if (dec.bitmap && typeof dec.bitmap.close === 'function') dec.bitmap.close();
            extract();
          })
          .catch(function () {
            setError(msg.decodeFail);
            preview.hidden = true;
            paletteHost.innerHTML = '';
            setStatus('');
          })
          .then(function () {
            btnExtract.disabled = false;
          });
      }

      /**
       * Build multi-color sample, load, extract (auto-run on enter).
       * @returns {Promise<void>}
       */
      function loadSample() {
        return new Promise(function (resolve) {
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
          ctx.fillStyle = '#9b2226';
          ctx.beginPath();
          ctx.arc(180, 120, 48, 0, Math.PI * 2);
          ctx.fill();
          c.toBlob(function (blob) {
            if (!blob) { resolve(); return; }
            loadFile(new File([blob], 'sample-palette.png', { type: 'image/png' })).then(resolve);
          }, 'image/png');
        });
      }

      function clearAll() {
        sourceFile = null;
        fileInput.value = '';
        fileNameEl.textContent = '';
        pickCanvas = null;
        pickCtx = null;
        pickW = 0;
        pickH = 0;
        preview.hidden = true;
        pickMarker.style.display = 'none';
        pickedHost.style.display = 'none';
        pickedHost.innerHTML = '';
        paletteHost.innerHTML = '';
        setError('');
        setWarn('');
        setStatus('');
      }

      function onCopyClick(e) {
        var tEl = e.target;
        if (!tEl) return;
        var node = tEl.closest ? tEl.closest('[data-copy]') : null;
        if (!node) return;
        var val = node.getAttribute('data-copy');
        if (!val) return;
        copyText(val).then(function () { setStatus(msg.copied + ' ' + val); }).catch(function () {});
      }

      countInput.addEventListener('input', function () { clampCount(); });
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
      btnExtract.addEventListener('click', extract);
      btnSample.addEventListener('click', function () { loadSample(); });
      btnClear.addEventListener('click', clearAll);
      preview.addEventListener('click', onPreviewClick);
      paletteHost.addEventListener('click', onCopyClick);
      pickedHost.addEventListener('click', onCopyClick);

      /** On enter: auto-run sample so palette is visible (tool-creation rule). */
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('color-from-image');
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
