/**
 * PDF 工具共用交互：按钮忙碌态、进度条、pdf.js 画布预览。
 * 各工具页注入 CSS/HTML/客户端脚本后，用 window.OftPdfWork.bind(idPrefix) 驱动。
 */
import type { SiteLang } from '../../site/i18n';
import { t } from '../../site/i18n';
import { escapeHtml } from './layout';

/** 进度条 + 预览区共用的可见文案（来自 core i18n）。 */
export type PdfWorkUiLabels = {
	/** 预览区标题 */
	preview: string;
	/** 进度条标题 */
	progress: string;
	/** 上一页按钮 */
	prev: string;
	/** 下一页按钮 */
	next: string;
	/** 页码模板，含 {n} 与 {total} */
	pageTpl: string;
};

/**
 * 读取当前语言的 PDF 工作台标签。
 * @param lang 当前 UI 语言
 */
export function pdfWorkUiLabels(lang: SiteLang): PdfWorkUiLabels {
	return {
		preview: t(lang, 'pdf_work_preview' as Parameters<typeof t>[1]),
		progress: t(lang, 'pdf_work_progress' as Parameters<typeof t>[1]),
		prev: t(lang, 'pdf_work_prev' as Parameters<typeof t>[1]),
		next: t(lang, 'pdf_work_next' as Parameters<typeof t>[1]),
		pageTpl: t(lang, 'pdf_work_page' as Parameters<typeof t>[1]),
	};
}

/**
 * 进度条与画布预览的共用样式（Bootstrap 进度条 + 工具页既有边框）。
 */
export function pdfWorkUiCss(): string {
	return `
    .oft-pdf-work-progress { display: none; }
    .oft-pdf-work-progress.is-on { display: block; }
    .oft-pdf-work-preview { display: none; }
    .oft-pdf-work-preview.is-on { display: block; }
    .oft-pdf-work-canvas-wrap { overflow: auto; max-height: 70vh; border: 1px solid #dee2e6; border-radius: .25rem; background: #f8f9fa; padding: .5rem; }
    .oft-pdf-work-canvas { display: block; max-width: 100%; height: auto; margin: 0 auto; background: #fff; box-shadow: 0 0 0 1px #dee2e6; }
    .oft-pdf-work-nav { gap: .5rem; }
    .btn .oft-pdf-work-spin { vertical-align: -0.125em; }
  `;
}

/**
 * 进度条 HTML：不确定进度用条纹动画，确定进度写 width%。
 * @param opts.idPrefix 与 bind() 一致的 DOM id 前缀
 * @param opts.labels 可见文案
 */
export function pdfWorkUiProgressHtml(opts: { idPrefix: string; labels: PdfWorkUiLabels }): string {
	const p = escapeHtml(opts.idPrefix);
	return `
    <div id="${p}ProgressWrap" class="oft-pdf-work-progress mb-3" hidden>
      <label class="form-label small mb-1" for="${p}ProgressBar">${escapeHtml(opts.labels.progress)}</label>
      <div class="progress" style="height: 0.65rem;">
        <div id="${p}ProgressBar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width: 0%"></div>
      </div>
    </div>`;
}

/**
 * pdf.js 画布预览 HTML（含上一页/下一页）。
 * @param opts.idPrefix 与 bind() 一致的 DOM id 前缀
 * @param opts.labels 可见文案
 * @param opts.heading 可选覆盖标题（如「文件 A」）
 */
export function pdfWorkUiPreviewHtml(opts: {
	idPrefix: string;
	labels: PdfWorkUiLabels;
	heading?: string;
}): string {
	const p = escapeHtml(opts.idPrefix);
	const heading = escapeHtml(opts.heading || opts.labels.preview);
	return `
    <div id="${p}PreviewWrap" class="oft-pdf-work-preview mb-3" hidden>
      <p class="small text-muted mb-1">${heading}</p>
      <div class="d-flex align-items-center oft-pdf-work-nav mb-2 flex-wrap">
        <button type="button" id="${p}Prev" class="btn btn-outline-secondary btn-sm" disabled>${escapeHtml(opts.labels.prev)}</button>
        <span id="${p}PageInfo" class="small text-muted mx-2" data-page-tpl="${escapeHtml(opts.labels.pageTpl)}"></span>
        <button type="button" id="${p}Next" class="btn btn-outline-secondary btn-sm" disabled>${escapeHtml(opts.labels.next)}</button>
      </div>
      <div class="oft-pdf-work-canvas-wrap">
        <canvas id="${p}Canvas" class="oft-pdf-work-canvas"></canvas>
      </div>
    </div>`;
}

/**
 * 进度条叠画布预览（多数「产出 PDF」工具用这一块）。
 * @param opts.idPrefix 与 bind() 一致的 DOM id 前缀
 * @param opts.labels 可见文案
 */
export function pdfWorkUiBlockHtml(opts: { idPrefix: string; labels: PdfWorkUiLabels }): string {
	return pdfWorkUiProgressHtml(opts) + pdfWorkUiPreviewHtml(opts);
}

/**
 * 注入一次 window.OftPdfWork：ensurePdfJs / yieldUi / bind(idPrefix) /
 * canWinAnsiEncode / measureTextWidth / wrapTextLines / drawPageText。
 * 必须放在各工具业务脚本之前。
 */
export function pdfWorkUiClientScript(): string {
	return `
  <script>
    (function (w) {
      if (w.OftPdfWork) return;

      /** pdf.js ESM（同域 /vendor/pdfjs，与现有 PDF 工具页同一版本）。 */
      var PDFJS_URL = '/vendor/pdfjs/pdf.min.mjs';
      var PDFJS_WORKER = '/vendor/pdfjs/pdf.worker.min.mjs';

      /**
       * 懒加载 pdf.js，并挂到 window.pdfjsLib 供同页其它脚本复用。
       * @returns {Promise<any>}
       */
      function ensurePdfJs() {
        if (w.pdfjsLib) return Promise.resolve(w.pdfjsLib);
        return import(PDFJS_URL).then(function (mod) {
          mod.GlobalWorkerOptions.workerSrc = PDFJS_WORKER;
          w.pdfjsLib = mod;
          return mod;
        });
      }

      /**
       * 让出一帧 + 短延迟，确保忙碌态/进度条先绘制再跑重计算。
       * @returns {Promise<void>}
       */
      function yieldUi() {
        return new Promise(function (resolve) {
          requestAnimationFrame(function () {
            setTimeout(resolve, 40);
          });
        });
      }

      /**
       * 绑定一组进度条 + 可选画布预览。
       * @param {string} idPrefix 与 HTML id 前缀一致
       * @param {{ onPageChange?: function(number, number): void }|undefined} opts 翻页回调（页码从 1 起）
       * @returns {{ setProgress: Function, hideProgress: Function, setBusy: Function, showPreview: Function, clearPreview: Function, setPage: Function }}
       */
      function bind(idPrefix, opts) {
        opts = opts || {};
        /** 页码变化时通知（Word 预览与 PDF 预览同步翻页）。 */
        var onPageChange = typeof opts.onPageChange === 'function' ? opts.onPageChange : null;
        var progressWrap = document.getElementById(idPrefix + 'ProgressWrap');
        var progressBar = document.getElementById(idPrefix + 'ProgressBar');
        var previewWrap = document.getElementById(idPrefix + 'PreviewWrap');
        var canvas = document.getElementById(idPrefix + 'Canvas');
        var btnPrev = document.getElementById(idPrefix + 'Prev');
        var btnNext = document.getElementById(idPrefix + 'Next');
        var pageInfo = document.getElementById(idPrefix + 'PageInfo');
        var pageTpl = (pageInfo && pageInfo.getAttribute('data-page-tpl')) || 'Page {n} / {total}';

        /** @type {{ bytes: Uint8Array|null, page: number, total: number, token: number }} */
        var state = { bytes: null, page: 1, total: 0, token: 0 };

        /**
         * 显示进度。pct 为 null 时用不确定条纹；数字 0–100 为确定进度。
         * @param {number|null} pct
         */
        function setProgress(pct) {
          if (!progressWrap || !progressBar) return;
          progressWrap.hidden = false;
          progressWrap.classList.add('is-on');
          if (pct == null || !isFinite(pct)) {
            progressBar.classList.add('progress-bar-striped', 'progress-bar-animated');
            progressBar.style.width = '100%';
            progressBar.setAttribute('aria-valuenow', '0');
            return;
          }
          var n = Math.max(0, Math.min(100, pct));
          progressBar.classList.add('progress-bar-striped');
          if (n < 100) progressBar.classList.add('progress-bar-animated');
          else progressBar.classList.remove('progress-bar-animated');
          progressBar.style.width = n + '%';
          progressBar.setAttribute('aria-valuenow', String(Math.round(n)));
        }

        /** 隐藏进度条并归零。 */
        function hideProgress() {
          if (!progressWrap || !progressBar) return;
          progressWrap.hidden = true;
          progressWrap.classList.remove('is-on');
          progressBar.style.width = '0%';
          progressBar.classList.add('progress-bar-striped', 'progress-bar-animated');
        }

        /**
         * 主按钮加 spinner 并禁用一组按钮。
         * @param {HTMLButtonElement[]} buttons
         * @param {boolean} busy
         */
        function setBusy(buttons, busy) {
          (buttons || []).forEach(function (btn, i) {
            if (!btn) return;
            btn.disabled = !!busy;
            btn.setAttribute('aria-busy', busy ? 'true' : 'false');
            if (i === 0 && btn.classList.contains('btn-primary')) {
              var spin = btn.querySelector('.oft-pdf-work-spin');
              if (busy && !spin) {
                spin = document.createElement('span');
                spin.className = 'spinner-border spinner-border-sm me-1 oft-pdf-work-spin';
                spin.setAttribute('aria-hidden', 'true');
                btn.insertBefore(spin, btn.firstChild);
              }
              if (spin) spin.hidden = !busy;
            }
          });
        }

        /** 刷新页码与翻页按钮。 */
        function syncNav() {
          if (pageInfo) {
            pageInfo.textContent = pageTpl.replace('{n}', String(state.page)).replace('{total}', String(state.total));
          }
          if (btnPrev) btnPrev.disabled = !(state.total > 0 && state.page > 1);
          if (btnNext) btnNext.disabled = !(state.total > 0 && state.page < state.total);
        }

        /**
         * 把当前页画到 canvas。
         * @returns {Promise<void>}
         */
        function renderCurrent() {
          if (!canvas || !state.bytes) return Promise.resolve();
          var token = ++state.token;
          return ensurePdfJs().then(function (pdfjsLib) {
            return pdfjsLib.getDocument({ data: state.bytes.slice(0) }).promise;
          }).then(function (doc) {
            if (token !== state.token) {
              if (doc && doc.destroy) doc.destroy();
              return;
            }
            state.total = doc.numPages;
            if (state.page < 1) state.page = 1;
            if (state.page > state.total) state.page = state.total;
            return doc.getPage(state.page).then(function (page) {
              if (token !== state.token) return;
              var viewport = page.getViewport({ scale: 1.25 });
              canvas.width = viewport.width;
              canvas.height = viewport.height;
              var ctx = canvas.getContext('2d');
              return page.render({ canvasContext: ctx, viewport: viewport }).promise.then(function () {
                if (doc && doc.destroy) doc.destroy();
                syncNav();
                if (onPageChange) onPageChange(state.page, state.total);
              });
            });
          });
        }

        /**
         * 用结果 PDF 字节打开预览。
         * @param {Uint8Array} bytes
         * @returns {Promise<void>}
         */
        function showPreview(bytes) {
          if (!previewWrap || !canvas || !bytes) return Promise.resolve();
          state.bytes = bytes;
          state.page = 1;
          previewWrap.hidden = false;
          previewWrap.classList.add('is-on');
          return renderCurrent();
        }

        /**
         * 跳到指定页（已有 PDF 字节时重绘）。
         * @param {number} n 从 1 起的页码
         * @returns {Promise<void>}
         */
        function setPage(n) {
          if (!state.bytes || !state.total) return Promise.resolve();
          var next = Math.max(1, Math.min(state.total, Math.round(Number(n) || 1)));
          if (next === state.page) return Promise.resolve();
          state.page = next;
          return renderCurrent().catch(function () {});
        }

        /** 清空画布预览。 */
        function clearPreview() {
          state.token += 1;
          state.bytes = null;
          state.page = 1;
          state.total = 0;
          if (previewWrap) {
            previewWrap.hidden = true;
            previewWrap.classList.remove('is-on');
          }
          if (canvas) {
            var ctx = canvas.getContext('2d');
            if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
            canvas.width = 0;
            canvas.height = 0;
          }
          syncNav();
          if (pageInfo) pageInfo.textContent = '';
        }

        if (btnPrev) {
          btnPrev.addEventListener('click', function () {
            if (state.page > 1) {
              state.page -= 1;
              renderCurrent().catch(function () {});
            }
          });
        }
        if (btnNext) {
          btnNext.addEventListener('click', function () {
            if (state.page < state.total) {
              state.page += 1;
              renderCurrent().catch(function () {});
            }
          });
        }

        return {
          setProgress: setProgress,
          hideProgress: hideProgress,
          setBusy: setBusy,
          showPreview: showPreview,
          clearPreview: clearPreview,
          setPage: setPage,
        };
      }

      /**
       * Helvetica/WinAnsi 只能编 Latin-1。用户在输入框能打出的字，系统字体就能画；
       * 超出 WinAnsi 时改成 Canvas 栅格化再 embedPng，避免 pdf-lib 抛 WinAnsi 编码错误。
       * 覆盖中日韩、西里尔、阿拉伯文（浏览器负责 shaping / bidi）。
       */
      var UNICODE_FONT_STACK = '"Noto Sans SC","PingFang SC","Hiragino Sans GB","Microsoft YaHei UI","Microsoft YaHei","Noto Sans CJK SC","Noto Sans JP","Hiragino Sans","Yu Gothic","Malgun Gothic","Apple SD Gothic Neo","Noto Naskh Arabic","Segoe UI","Noto Sans",sans-serif';
      /** 栅格倍率：2× 足够在 1.25 预览缩放下保持清晰。 */
      var UNICODE_RASTER_SCALE = 2;
      /** 复用的测宽 canvas，避免每次 measure 都新建。 */
      var unicodeMeasureCanvas = null;

      /**
       * 文本是否全部落在 WinAnsi（约 Latin-1）内，可用 Helvetica drawText。
       * @param {string} text
       * @returns {boolean}
       */
      function canWinAnsiEncode(text) {
        var s = String(text || '');
        for (var i = 0; i < s.length; i++) {
          if (s.charCodeAt(i) > 255) return false;
        }
        return true;
      }

      /**
       * 取 2D 测宽上下文。
       * @returns {CanvasRenderingContext2D}
       */
      function getUnicodeMeasureCtx() {
        if (!unicodeMeasureCanvas) unicodeMeasureCanvas = document.createElement('canvas');
        return unicodeMeasureCanvas.getContext('2d');
      }

      /**
       * Canvas 用的 CSS font 字符串（px）。
       * @param {number} sizePx
       * @returns {string}
       */
      function unicodeCanvasFont(sizePx) {
        return String(sizePx) + 'px ' + UNICODE_FONT_STACK;
      }

      /**
       * 把 pdf-lib Color 或 {red,green,blue}/{r,g,b} 收成 0–1 RGB。
       * @param {any} color
       * @returns {{ r: number, g: number, b: number }}
       */
      function toRgb01(color) {
        if (!color) return { r: 0, g: 0, b: 0 };
        var r = color.red != null ? color.red : color.r;
        var g = color.green != null ? color.green : color.g;
        var b = color.blue != null ? color.blue : color.b;
        return {
          r: typeof r === 'number' ? r : 0,
          g: typeof g === 'number' ? g : 0,
          b: typeof b === 'number' ? b : 0,
        };
      }

      /**
       * 测量一行文字的 PDF 点宽度（系统字体或 Helvetica）。
       * @param {string} text
       * @param {number} fontSizePt
       * @param {any} [font] pdf-lib 字体；WinAnsi 文本时优先用它
       * @returns {number}
       */
      function measureTextWidth(text, fontSizePt, font) {
        var s = String(text || '');
        var size = Number(fontSizePt) || 12;
        if (font && typeof font.widthOfTextAtSize === 'function' && canWinAnsiEncode(s)) {
          return font.widthOfTextAtSize(s, size);
        }
        var ctx = getUnicodeMeasureCtx();
        ctx.font = unicodeCanvasFont(size * UNICODE_RASTER_SCALE);
        return ctx.measureText(s).width / UNICODE_RASTER_SCALE;
      }

      /**
       * 按 maxWidth 折行；无空格的 CJK 按字切。空 maxWidth 只按换行切。
       * @param {string} text
       * @param {number} fontSizePt
       * @param {number} [maxWidth]
       * @param {any} [font]
       * @returns {string[]}
       */
      function wrapTextLines(text, fontSizePt, maxWidth, font) {
        var raw = String(text == null ? '' : text);
        var paras = raw.split(/\\n/);
        var out = [];
        var limit = Number(maxWidth);
        var hasLimit = isFinite(limit) && limit > 0;
        paras.forEach(function (para) {
          if (!para) {
            out.push('');
            return;
          }
          if (!hasLimit) {
            out.push(para);
            return;
          }
          var current = '';
          for (var i = 0; i < para.length; i++) {
            var ch = para.charAt(i);
            var trial = current + ch;
            if (current && measureTextWidth(trial, fontSizePt, font) > limit) {
              out.push(current);
              current = ch;
            } else {
              current = trial;
            }
          }
          if (current) out.push(current);
        });
        return out.length ? out : [''];
      }

      /**
       * 把一行字画成 PNG 字节（基线在 ascent 处，下方留 descent）。
       * @param {string} text
       * @param {number} fontSizePt
       * @param {{ r: number, g: number, b: number }} rgb
       * @returns {Promise<{ bytes: Uint8Array, widthPt: number, heightPt: number, descentPt: number }>}
       */
      function rasterizeLinePng(text, fontSizePt, rgb) {
        var s = String(text || ' ');
        var sizePx = Math.max(1, fontSizePt * UNICODE_RASTER_SCALE);
        var ctx0 = getUnicodeMeasureCtx();
        ctx0.font = unicodeCanvasFont(sizePx);
        var m = ctx0.measureText(s);
        var ascent = Math.ceil(Math.max(sizePx * 0.8, m.actualBoundingBoxAscent || 0));
        var descent = Math.ceil(Math.max(sizePx * 0.2, m.actualBoundingBoxDescent || 0));
        var pad = 2;
        var w = Math.max(1, Math.ceil(m.width) + pad * 2);
        var h = Math.max(1, ascent + descent + pad * 2);
        var canvas = document.createElement('canvas');
        canvas.width = w;
        canvas.height = h;
        if (/[\\u0590-\\u08FF]/.test(s)) canvas.dir = 'rtl';
        var ctx = canvas.getContext('2d');
        ctx.font = unicodeCanvasFont(sizePx);
        ctx.textBaseline = 'alphabetic';
        ctx.fillStyle = 'rgb(' + Math.round(rgb.r * 255) + ',' + Math.round(rgb.g * 255) + ',' + Math.round(rgb.b * 255) + ')';
        if (canvas.dir === 'rtl') {
          ctx.textAlign = 'right';
          ctx.fillText(s, w - pad, pad + ascent);
        } else {
          ctx.textAlign = 'left';
          ctx.fillText(s, pad, pad + ascent);
        }
        return new Promise(function (resolve, reject) {
          canvas.toBlob(function (blob) {
            if (!blob) {
              reject(new Error('png'));
              return;
            }
            blob.arrayBuffer().then(function (ab) {
              resolve({
                bytes: new Uint8Array(ab),
                widthPt: w / UNICODE_RASTER_SCALE,
                heightPt: h / UNICODE_RASTER_SCALE,
                descentPt: (descent + pad) / UNICODE_RASTER_SCALE,
              });
            }).catch(reject);
          }, 'image/png');
        });
      }

      /**
       * 在 PDF 页上画一行（或 maxWidth 折成多行）任意 Unicode 文本。
       * WinAnsi 且传入 font 时走 pdf-lib drawText；否则栅格化。
       * @param {any} doc pdf-lib PDFDocument
       * @param {any} page pdf-lib PDFPage
       * @param {string} text
       * @param {{ x: number, y: number, size: number, font?: any, color?: any, opacity?: number, rotate?: any, maxWidth?: number, lineHeight?: number }} opts
       * @returns {Promise<{ lineCount: number, endY: number, width: number, height: number }>}
       */
      function drawPageText(doc, page, text, opts) {
        opts = opts || {};
        var x = Number(opts.x) || 0;
        var y = Number(opts.y) || 0;
        var size = Number(opts.size) || 12;
        var lineHeight = Number(opts.lineHeight) > 0 ? Number(opts.lineHeight) : size * 1.25;
        var font = opts.font;
        var lines = wrapTextLines(text, size, opts.maxWidth, font);
        var rgb = toRgb01(opts.color);
        var width = 0;
        lines.forEach(function (ln) {
          width = Math.max(width, measureTextWidth(ln, size, font));
        });

        function drawOne(line, baselineY) {
          var s = line || ' ';
          if (font && canWinAnsiEncode(s)) {
            try {
              page.drawText(s, {
                x: x,
                y: baselineY,
                size: size,
                font: font,
                color: opts.color,
                opacity: opts.opacity,
                rotate: opts.rotate,
              });
              return Promise.resolve();
            } catch (ignore) {
              /* 个别 Latin-1 缺口仍可能失败，改走栅格 */
            }
          }
          return rasterizeLinePng(s, size, rgb).then(function (img) {
            return doc.embedPng(img.bytes).then(function (png) {
              page.drawImage(png, {
                x: x,
                y: baselineY - img.descentPt,
                width: img.widthPt,
                height: img.heightPt,
                opacity: opts.opacity != null ? opts.opacity : 1,
                rotate: opts.rotate,
              });
            });
          });
        }

        var chain = Promise.resolve();
        var baseline = y;
        lines.forEach(function (line, idx) {
          chain = chain.then(function () {
            return drawOne(line, baseline).then(function () {
              if (idx < lines.length - 1) baseline -= lineHeight;
            });
          });
        });
        return chain.then(function () {
          return {
            lineCount: lines.length,
            endY: baseline,
            width: width,
            height: Math.max(size, (lines.length - 1) * lineHeight + size),
          };
        });
      }

      w.OftPdfWork = {
        ensurePdfJs: ensurePdfJs,
        yieldUi: yieldUi,
        bind: bind,
        canWinAnsiEncode: canWinAnsiEncode,
        measureTextWidth: measureTextWidth,
        wrapTextLines: wrapTextLines,
        drawPageText: drawPageText,
      };
    })(window);
  </script>`;
}
