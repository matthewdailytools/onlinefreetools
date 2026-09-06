/**
 * 在线编辑 PDF 文本：pdf.js 抽出文本层 → 文本框改写 → 在原 PDF 页上覆盖改过的行。
 * 未改的行、图片、图形和页尺寸留在原文件里；不是整页重排，也不是原地改字形。
 * slug: edit-pdf-text-online
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

/** 非默认语言时为路径加语言前缀。 */
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * 渲染 edit-pdf-text-online 工具页。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderEditPdfTextOnlinePage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 工具路径（默认语无前缀）。 */
	const toolPath = '/tools/edit-pdf-text-online';
	/** 当前语规范路径。 */
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	/** i18n 键前缀。 */
	const prefix = 'tool_edit_pdf_text_online';
	/** 页面 title（含品牌）。 */
	const title = `${t(opts.lang, (prefix + '_title') as Parameters<typeof t>[1])} | ${t(opts.lang, 'brand')}`;
	/** meta / 页内摘要。 */
	const description = t(opts.lang, (prefix + '_description') as Parameters<typeof t>[1]);

	/** 顶部导航项。 */
	const navItems = buildToolPageNavItems(opts.lang, opts.defaultLang);

	/** hreflang 映射始终带显式语言段。 */
	const withExplicitLangPrefix = (code: SiteLang, pathname: string) => {
		const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
		return `/${code}${safe}`.replace(/\/{2,}/g, '/');
	};

	/** 语言切换器目标路径。 */
	const langAlternates: Record<string, string> = Object.fromEntries(
		(supportedLangs || []).map((code) => [code, withExplicitLangPrefix(code, toolPath)])
	);

	/** 完整 hreflang 列表。 */
	const alternates: HreflangAlternate[] = (supportedLangs || []).map((code) => ({
		lang: code,
		href: `https://onlinefreetools.org${withLangPrefix(code, toolPath, opts.defaultLang)}`,
	}));

	/** 页头 HTML。 */
	const headerHtml = renderHeader({
		lang: opts.lang,
		brandHref: withLangPrefix(opts.lang, '/', opts.defaultLang),
		navItems,
		enabledLangs: supportedLangs,
		langAlternates,
	});

	/** 侧栏 HTML。 */
	const sidebarHtml = renderSidebar({
		title: t(opts.lang, 'nav_tools'),
		groups: buildToolSidebarItems({
			lang: opts.lang,
			defaultLang: opts.defaultLang,
			currentSlug: 'edit-pdf-text-online',
			currentAnchor: '#converter',
		}),
		id: 'toolNav',
	});

	/** 页脚 HTML。 */
	const footerHtml = renderFooter({ lang: opts.lang });
	/** PDF 工作台文案。 */
	const pdfWorkLabels = pdfWorkUiLabels(opts.lang);
	/** 页内样式。 */
	const extraHeadHtml = `
  <style>
    .tools-bar { gap: .5rem; }
    #eptoEditor { min-height: 200px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: .85rem; }
    ${pdfWorkUiCss()}
  </style>`;

	/** 首屏交互区。 */
	const contentHtml = `
    <div id="converter" class="tool-page-heading mb-3">
      <h1 class="h4 mb-0">${escapeHtml(t(opts.lang, (prefix + '_title') as Parameters<typeof t>[1]))}</h1>
    </div>

    <label class="tool-dropzone mb-3" id="eptoDrop" for="eptoFile">
      <input type="file" id="eptoFile" accept="application/pdf,.pdf">
      <span class="tool-dropzone-title">${escapeHtml(t(opts.lang, (prefix + '_choose_file') as Parameters<typeof t>[1]))}</span>
      <span class="tool-dropzone-hint">${escapeHtml(t(opts.lang, (prefix + '_drop_hint') as Parameters<typeof t>[1]))}</span>
    </label>

    <p id="eptoMeta" class="small text-muted mb-2" style="display:none;"></p>

    <label class="form-label small mb-1" for="eptoEditor">${escapeHtml(t(opts.lang, (prefix + '_editor_label') as Parameters<typeof t>[1]))}</label>
    <textarea id="eptoEditor" class="form-control mb-3" rows="10"></textarea>

    <div class="d-flex align-items-center tools-bar mb-2 flex-wrap">
      <button type="button" id="eptoBtnApply" class="btn btn-primary btn-sm">${escapeHtml(t(opts.lang, (prefix + '_apply') as Parameters<typeof t>[1]))}</button>
      <button type="button" id="eptoBtnDownload" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(t(opts.lang, (prefix + '_download') as Parameters<typeof t>[1]))}</button>
      <button type="button" id="eptoBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, (prefix + '_sample') as Parameters<typeof t>[1]))}</button>
      <button type="button" id="eptoBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, (prefix + '_clear') as Parameters<typeof t>[1]))}</button>
    </div>

    <p id="eptoWarn" class="small text-warning mb-2" style="display:none;" role="status"></p>
    <p id="eptoError" class="small text-danger mb-2" style="display:none;" role="alert"></p>
    <p id="eptoStatus" class="small text-muted mb-2" role="status"></p>
    ${pdfWorkUiBlockHtml({ idPrefix: 'eptoPdf', labels: pdfWorkLabels })}

    <p class="tool-lead mb-4">${escapeHtml(description)}</p>`;

	/** How / Rules / Use cases。 */
	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix,
		mode: 'rules',
		usecaseCount: 3,
		ruleItemCount: 4,
	});

	/** 权威引用。 */
	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{ label: 'PDF.js', href: 'https://mozilla.github.io/pdf.js/' },
			{ label: 'pdf-lib', href: 'https://pdf-lib.js.org/' },
		],
	});

	/**
	 * 客户端脚本：抽出文本层到编辑器；Apply 时在原 PDF 上盖住改过的行再写新字。
	 * 图片/版式随原页保留；扫描件无文本层会失败。
	 */
	const extraBodyHtml = `
  ${pdfWorkUiClientScript()}
  <script src="/vendor/pdf-lib/pdf-lib.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script>
    (function () {
      /** 单文件软警告阈值（字节）。 */
      var SOFT_BYTES = 25 * 1024 * 1024;
      /** 同一文本行 y 坐标容差（PDF 用户空间单位）。 */
      var LINE_Y_TOLERANCE = 3;
      /** 页间分隔符（编辑器内可见）。 */
      var PAGE_SEP = '\\n\\n---\\n\\n';

      /** 拖放区。 */
      var drop = document.getElementById('eptoDrop');
      /** 文件输入。 */
      var fileInput = document.getElementById('eptoFile');
      /** 元信息行。 */
      var metaEl = document.getElementById('eptoMeta');
      /** 可编辑全文。 */
      var editorEl = document.getElementById('eptoEditor');
      /** Apply 按钮。 */
      var btnApply = document.getElementById('eptoBtnApply');
      /** 下载按钮。 */
      var btnDownload = document.getElementById('eptoBtnDownload');
      /** 样例按钮。 */
      var btnSample = document.getElementById('eptoBtnSample');
      /** 清空按钮。 */
      var btnClear = document.getElementById('eptoBtnClear');
      /** 警告行。 */
      var warnEl = document.getElementById('eptoWarn');
      /** 错误行。 */
      var errEl = document.getElementById('eptoError');
      /** 状态行。 */
      var statusEl = document.getElementById('eptoStatus');
      /** PDF 工作台绑定。 */
      var work = window.OftPdfWork.bind('eptoPdf');
      /** 忙碌时禁用的按钮组。 */
      var busyBtns = [btnApply, btnSample, btnClear, btnDownload];

      /** 界面文案。 */
      var msg = {
        empty: ${JSON.stringify(t(opts.lang, (prefix + '_empty') as Parameters<typeof t>[1]))},
        encrypted: ${JSON.stringify(t(opts.lang, (prefix + '_err_encrypted') as Parameters<typeof t>[1]))},
        loadFail: ${JSON.stringify(t(opts.lang, (prefix + '_err_load') as Parameters<typeof t>[1]))},
        convertFail: ${JSON.stringify(t(opts.lang, (prefix + '_err_convert') as Parameters<typeof t>[1]))},
        noText: ${JSON.stringify(t(opts.lang, (prefix + '_err_notext') as Parameters<typeof t>[1]))},
        pdfjsMissing: ${JSON.stringify(t(opts.lang, (prefix + '_err_pdfjs') as Parameters<typeof t>[1]))},
        pdflibMissing: ${JSON.stringify(t(opts.lang, (prefix + '_warn_pdflib') as Parameters<typeof t>[1]))},
        large: ${JSON.stringify(t(opts.lang, (prefix + '_warn_large') as Parameters<typeof t>[1]))},
        working: ${JSON.stringify(t(opts.lang, (prefix + '_status_working') as Parameters<typeof t>[1]))},
        done: ${JSON.stringify(t(opts.lang, (prefix + '_status_done') as Parameters<typeof t>[1]))},
        pagesLabel: ${JSON.stringify(t(opts.lang, (prefix + '_pages_label') as Parameters<typeof t>[1]))},
        sampleText: 'Hello edit PDF text sample.',
        sampleKeep: 'Photo stays on this page.'
      };

      /**
       * 已加载源 PDF（含按行几何，供套用时按原坐标覆盖）。
       * @type {{ name: string, bytes: Uint8Array, pageCount: number, layout: { pages: { lines: { x: number, y: number, width: number, height: number, fontSize: number, text: string }[] }[] } }|null}
       */
      var source = null;
      /** @type {Uint8Array|null} 套用后的 PDF 字节 */
      var resultBytes = null;

      /** 显示/隐藏警告。 */
      function setWarn(text) {
        if (!text) { warnEl.style.display = 'none'; warnEl.textContent = ''; return; }
        warnEl.textContent = text;
        warnEl.style.display = '';
      }

      /** 显示/隐藏错误。 */
      function setError(text) {
        if (!text) { errEl.style.display = 'none'; errEl.textContent = ''; return; }
        errEl.textContent = text;
        errEl.style.display = '';
      }

      /** 更新状态行。 */
      function setStatus(text) {
        statusEl.textContent = text || '';
      }

      /** 格式化字节数。 */
      function formatBytes(n) {
        if (n < 1024) return n + ' B';
        if (n < 1024 * 1024) return (n / 1024).toFixed(1) + ' KB';
        return (n / (1024 * 1024)).toFixed(2) + ' MB';
      }

      /** pdf-lib 是否可用。 */
      function hasPdfLib() {
        return typeof PDFLib !== 'undefined' && PDFLib && typeof PDFLib.PDFDocument === 'function';
      }

      /** 清空套用结果。 */
      function clearResult() {
        resultBytes = null;
        btnDownload.disabled = true;
      }

      /** 刷新元信息与大文件软警告。 */
      function refreshMeta() {
        if (!source) {
          metaEl.style.display = 'none';
          metaEl.textContent = '';
          setWarn('');
          return;
        }
        metaEl.textContent = source.name + ' · ' + msg.pagesLabel + ': ' + source.pageCount + ' · ' + formatBytes(source.bytes.length);
        metaEl.style.display = '';
        setWarn(source.bytes.length > SOFT_BYTES ? msg.large : '');
      }

      /**
       * 懒加载 pdf.js。
       * @returns {Promise<object>}
       */
      function ensurePdfJs() {
        if (window.pdfjsLib) return Promise.resolve(window.pdfjsLib);
        return import('/vendor/pdfjs/pdf.min.mjs').then(function (mod) {
          mod.GlobalWorkerOptions.workerSrc = '/vendor/pdfjs/pdf.worker.min.mjs';
          window.pdfjsLib = mod;
          return mod;
        }).catch(function () {
          throw new Error('pdfjs');
        });
      }

      /**
       * 将错误映射为可读文案。
       * @param {unknown} err
       */
      function mapLoadError(err) {
        var s = String(err && (err.message || err) || '');
        if (s === 'pdfjs') return msg.pdfjsMissing;
        if (/password|encrypt|encrypted/i.test(s)) return msg.encrypted;
        return msg.loadFail;
      }

      /**
       * 将一串水平相邻的字形拼成一行几何（供覆盖时对齐原坐标）。
       * @param {{ x: number, y: number, w: number, h: number, fontSize: number, str: string }[]} run
       * @returns {{ x: number, y: number, width: number, height: number, fontSize: number, text: string }|null}
       */
      function lineFromRun(run) {
        if (!run || !run.length) return null;
        var minX = run[0].x;
        var maxR = run[0].x + run[0].w;
        var maxSize = run[0].fontSize;
        var maxH = run[0].h;
        var sumY = 0;
        var texts = [];
        for (var r = 0; r < run.length; r++) {
          minX = Math.min(minX, run[r].x);
          maxR = Math.max(maxR, run[r].x + run[r].w);
          maxSize = Math.max(maxSize, run[r].fontSize);
          maxH = Math.max(maxH, run[r].h);
          sumY += run[r].y;
          texts.push(run[r].str);
        }
        var joined = texts.join(' ').replace(/ +/g, ' ').trim();
        if (!joined) return null;
        return {
          x: minX,
          y: sumY / run.length,
          width: Math.max(4, maxR - minX),
          height: maxH,
          fontSize: maxSize,
          text: joined
        };
      }

      /**
       * 将单页 getTextContent 按近似 y 分行；同一行里大空隙拆成两段，避免盖住分栏中间的图。
       * @param {{ items: { str?: string, transform?: number[], width?: number, height?: number }[] }} textContent
       * @returns {{ text: string, lines: { x: number, y: number, width: number, height: number, fontSize: number, text: string }[] }}
       */
      function extractPageLines(textContent) {
        var items = (textContent && textContent.items) || [];
        /** @type {{ y: number, parts: { x: number, y: number, w: number, h: number, fontSize: number, str: string }[] }[]} */
        var buckets = [];
        for (var i = 0; i < items.length; i++) {
          var item = items[i];
          if (!item || typeof item.str !== 'string' || !item.str) continue;
          var tr = item.transform || [];
          var x = typeof tr[4] === 'number' ? tr[4] : 0;
          var y = typeof tr[5] === 'number' ? tr[5] : 0;
          var a = typeof tr[0] === 'number' ? tr[0] : 0;
          var b = typeof tr[1] === 'number' ? tr[1] : 0;
          var fontSize = Math.hypot(a, b);
          if (!fontSize) fontSize = typeof item.height === 'number' && item.height > 0 ? item.height : 12;
          var w = typeof item.width === 'number' ? item.width : 0;
          var h = typeof item.height === 'number' && item.height > 0 ? item.height : fontSize;
          var matched = null;
          for (var j = 0; j < buckets.length; j++) {
            if (Math.abs(buckets[j].y - y) < LINE_Y_TOLERANCE) {
              matched = buckets[j];
              break;
            }
          }
          if (!matched) {
            matched = { y: y, parts: [] };
            buckets.push(matched);
          }
          matched.parts.push({ x: x, y: y, w: w, h: h, fontSize: fontSize, str: item.str });
        }
        /** @type {{ x: number, y: number, width: number, height: number, fontSize: number, text: string }[]} */
        var lines = [];
        for (var b = 0; b < buckets.length; b++) {
          var parts = buckets[b].parts;
          parts.sort(function (p1, p2) { return p1.x - p2.x; });
          var current = [];
          for (var p = 0; p < parts.length; p++) {
            var part = parts[p];
            if (!current.length) {
              current.push(part);
              continue;
            }
            var prev = current[current.length - 1];
            var gap = part.x - (prev.x + prev.w);
            var gapLimit = Math.max(16, prev.fontSize * 1.8);
            if (gap > gapLimit) {
              var left = lineFromRun(current);
              if (left) lines.push(left);
              current = [part];
            } else {
              current.push(part);
            }
          }
          var last = lineFromRun(current);
          if (last) lines.push(last);
        }
        lines.sort(function (la, lb) {
          if (Math.abs(la.y - lb.y) < LINE_Y_TOLERANCE) return la.x - lb.x;
          return lb.y - la.y;
        });
        return {
          lines: lines,
          text: lines.map(function (ln) { return ln.text; }).join('\\n')
        };
      }

      /**
       * 逐页提取文本与行几何，页间用分隔符连接。
       * @param {Uint8Array} bytes
       * @param {(done: number, total: number) => void} [onProgress]
       * @returns {Promise<{ text: string, pages: { lines: { x: number, y: number, width: number, height: number, fontSize: number, text: string }[] }[] }>}
       */
      function buildEditorModel(bytes, onProgress) {
        return ensurePdfJs().then(function (pdfjsLib) {
          return pdfjsLib.getDocument({ data: bytes.slice(0) }).promise;
        }).then(function (pdfDoc) {
          var numPages = pdfDoc.numPages;
          var pageTexts = [];
          var pages = [];
          var chain = Promise.resolve();
          for (var pn = 1; pn <= numPages; pn++) {
            (function (pageNum) {
              chain = chain.then(function () {
                return pdfDoc.getPage(pageNum).then(function (page) {
                  return page.getTextContent().then(function (tc) {
                    var extracted = extractPageLines(tc);
                    pages.push({ lines: extracted.lines });
                    pageTexts.push(extracted.text);
                    if (onProgress) onProgress(pageNum, numPages);
                  });
                });
              });
            })(pn);
          }
          return chain.then(function () {
            return { text: pageTexts.join(PAGE_SEP), pages: pages };
          });
        });
      }

      /**
       * 在原 PDF 页上覆盖改过的文本行；未改的行与图片/图形不动。
       * @param {string} raw 编辑器全文
       * @returns {Promise<Uint8Array>}
       */
      function applyEditsOnOriginalPdf(raw) {
        if (!hasPdfLib()) return Promise.reject(new Error('pdflib'));
        if (!source || !source.layout || !source.bytes) return Promise.reject(new Error('empty'));
        if (!String(raw || '').trim()) return Promise.reject(new Error('notext'));
        var pageChunks = String(raw || '').split(/\\n\\n---\\n\\n/);
        var white = PDFLib.rgb(1, 1, 1);
        return PDFLib.PDFDocument.load(source.bytes.slice(0)).then(function (doc) {
          return doc.embedFont(PDFLib.StandardFonts.Helvetica).then(function (font) {
            var pdfPages = doc.getPages();
            var chain = Promise.resolve();
            pdfPages.forEach(function (page, pageIdx) {
              chain = chain.then(function () {
                var layout = source.layout.pages[pageIdx];
                if (!layout || typeof pageChunks[pageIdx] !== 'string') return;
                var origLines = layout.lines || [];
                var newLines = pageChunks[pageIdx].split(/\\n/);
                var n = Math.max(origLines.length, newLines.length);
                var lastY = origLines.length ? origLines[origLines.length - 1].y : page.getHeight() - 72;
                var lastSize = origLines.length ? origLines[origLines.length - 1].fontSize : 12;
                var lastX = origLines.length ? origLines[origLines.length - 1].x : 48;
                var inner = Promise.resolve();
                for (var li = 0; li < n; li++) {
                  (function (idx) {
                    inner = inner.then(function () {
                      var orig = origLines[idx] || null;
                      var neu = idx < newLines.length ? newLines[idx] : '';
                      var origText = orig ? orig.text : '';
                      if (orig && neu === origText) return;
                      var size = orig ? orig.fontSize : lastSize;
                      var x = orig ? orig.x : lastX;
                      var y = orig ? orig.y : (lastY - size * 1.35);
                      if (!orig) lastY = y;
                      if (orig) {
                        var coverH = Math.max(orig.height || size, size) * 1.25;
                        page.drawRectangle({
                          x: orig.x - 1,
                          y: orig.y - size * 0.25,
                          width: Math.max(orig.width, 4) + 2,
                          height: coverH,
                          color: white
                        });
                      }
                      if (!neu || !String(neu).trim()) return;
                      var wrapW = orig ? Math.max(orig.width, 40) : Math.max(40, page.getWidth() - x - 24);
                      return window.OftPdfWork.drawPageText(doc, page, neu, {
                        x: x,
                        y: y,
                        size: size,
                        font: font,
                        maxWidth: wrapW
                      });
                    });
                  })(li);
                }
                return inner;
              });
            });
            return chain.then(function () { return doc.save(); });
          });
        }).then(function (bytes) {
          return new Uint8Array(bytes);
        });
      }

      /**
       * 加载用户选择的 PDF 并抽出文本到编辑器。
       * @param {File} file
       */
      function loadFile(file) {
        setError('');
        clearResult();
        if (!file) return Promise.resolve();
        if (!(file.type === 'application/pdf' || /\\.pdf$/i.test(file.name || ''))) {
          setError(msg.loadFail);
          return Promise.resolve();
        }
        work.setBusy(busyBtns, true);
        work.setProgress(null);
        return file.arrayBuffer().then(function (buf) {
          var bytes = new Uint8Array(buf);
          return ensurePdfJs().then(function (pdfjsLib) {
            return pdfjsLib.getDocument({ data: bytes.slice(0) }).promise;
          }).then(function (doc) {
            source = { name: file.name || 'document.pdf', bytes: bytes, pageCount: doc.numPages, layout: { pages: [] } };
            refreshMeta();
            work.setProgress(40);
            return buildEditorModel(bytes, function (done, total) {
              work.setProgress(40 + (done / total) * 40);
            });
          }).then(function (model) {
            if (!source) throw new Error('notext');
            if (!model || !model.text || !String(model.text).trim()) throw new Error('notext');
            source.layout = { pages: model.pages || [] };
            editorEl.value = model.text;
            work.setProgress(90);
            return work.showPreview(source.bytes);
          });
        }).catch(function (err) {
          source = null;
          editorEl.value = '';
          refreshMeta();
          var s = String(err && err.message || '');
          if (s === 'notext') setError(msg.noText);
          else setError(mapLoadError(err));
        }).finally(function () {
          work.setBusy(busyBtns, false);
          work.hideProgress();
        });
      }

      /** Apply：把改过的行写回原 PDF 并预览。 */
      function applyEdit() {
        setError('');
        clearResult();
        if (!source) {
          setError(msg.empty);
          return Promise.resolve();
        }
        if (!String(editorEl.value || '').trim()) {
          setError(msg.noText);
          return Promise.resolve();
        }
        if (!hasPdfLib()) {
          setError(msg.pdflibMissing);
          return Promise.resolve();
        }
        work.setBusy(busyBtns, true);
        work.setProgress(null);
        setStatus(msg.working);
        return window.OftPdfWork.yieldUi()
          .then(function () {
            return applyEditsOnOriginalPdf(editorEl.value);
          })
          .then(function (bytes) {
            resultBytes = bytes;
            work.setProgress(90);
            return work.showPreview(bytes);
          })
          .then(function () {
            work.setProgress(100);
            btnDownload.disabled = false;
            setStatus(msg.done);
          })
          .catch(function (err) {
            var s = String(err && err.message || '');
            if (s === 'notext') setError(msg.noText);
            else if (s === 'empty') setError(msg.empty);
            else if (s === 'pdflib') setError(msg.pdflibMissing);
            else if (/password|encrypt/i.test(s)) setError(msg.encrypted);
            else setError(msg.convertFail);
            setStatus('');
          })
          .finally(function () {
            work.setBusy(busyBtns, false);
            work.hideProgress();
            btnDownload.disabled = !resultBytes;
          });
      }

      /** 下载套用后的 PDF。 */
      function downloadResult() {
        if (!resultBytes) return;
        var blob = new Blob([resultBytes], { type: 'application/pdf' });
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = ((source && source.name) || 'document.pdf').replace(/\\.pdf$/i, '') + '-edited.pdf';
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      }

      /**
       * 生成样例用的色块 PNG（蓝底黄心，便于验收图片是否还在）。
       * @returns {Promise<Uint8Array>}
       */
      function makeSamplePngBytes() {
        var canvas = document.createElement('canvas');
        canvas.width = 120;
        canvas.height = 120;
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = '#1A6FB5';
        ctx.fillRect(0, 0, 120, 120);
        ctx.fillStyle = '#F4D35E';
        ctx.fillRect(24, 24, 72, 72);
        return new Promise(function (resolve, reject) {
          canvas.toBlob(function (blob) {
            if (!blob) {
              reject(new Error('png'));
              return;
            }
            blob.arrayBuffer().then(function (ab) {
              resolve(new Uint8Array(ab));
            }).catch(reject);
          }, 'image/png');
        });
      }

      /**
       * 生成含色块图 + Helvetica 文本的单页样例 PDF。
       * @returns {Promise<File>}
       */
      function makeSamplePdf() {
        if (!hasPdfLib()) return Promise.reject(new Error('pdflib'));
        return makeSamplePngBytes().then(function (pngBytes) {
          return PDFLib.PDFDocument.create().then(function (doc) {
            return Promise.all([
              doc.embedFont(PDFLib.StandardFonts.Helvetica),
              doc.embedPng(pngBytes)
            ]).then(function (pair) {
              var font = pair[0];
              var img = pair[1];
              var page = doc.addPage([420, 300]);
              page.drawImage(img, { x: 36, y: 140, width: 96, height: 96 });
              page.drawText(msg.sampleText, { x: 148, y: 200, size: 14, font: font });
              page.drawText(msg.sampleKeep, { x: 148, y: 176, size: 11, font: font });
              return doc.save();
            });
          });
        }).then(function (bytes) {
          return new File([bytes], 'sample-edit-pdf-text.pdf', { type: 'application/pdf' });
        });
      }

      /**
       * 进页/按钮样例：载入带图样例 PDF，改一字后再 Apply，验收图片仍在。
       * lint:tool-page 要求字面 loadSample。
       */
      function loadSample() {
        clearAll(false);
        if (!hasPdfLib()) {
          setError(msg.pdflibMissing);
          return Promise.resolve();
        }
        return makeSamplePdf().then(function (file) {
          return loadFile(file);
        }).then(function () {
          if (!String(editorEl.value || '').trim()) return;
          editorEl.value = String(editorEl.value).replace('sample.', 'edited.');
          return applyEdit();
        });
      }

      /**
       * 重置全部状态。
       * @param {boolean} resetInput 是否清空 file input
       */
      function clearAll(resetInput) {
        source = null;
        if (resetInput !== false) fileInput.value = '';
        editorEl.value = '';
        refreshMeta();
        clearResult();
        setError('');
        setStatus('');
        work.clearPreview();
        work.hideProgress();
      }

      drop.addEventListener('dragover', function (e) {
        e.preventDefault();
        drop.classList.add('dragover');
      });
      drop.addEventListener('dragleave', function () { drop.classList.remove('dragover'); });
      drop.addEventListener('drop', function (e) {
        e.preventDefault();
        drop.classList.remove('dragover');
        var fs = e.dataTransfer && e.dataTransfer.files;
        if (fs && fs[0]) loadFile(fs[0]);
      });
      fileInput.addEventListener('change', function () {
        if (fileInput.files && fileInput.files[0]) loadFile(fileInput.files[0]);
        fileInput.value = '';
      });

      btnApply.addEventListener('click', applyEdit);
      btnDownload.addEventListener('click', downloadResult);
      btnSample.addEventListener('click', function () { loadSample(); });
      btnClear.addEventListener('click', function () { clearAll(true); });

      /** 进页自动跑样例：编辑器有文、预览为 Apply 后的 PDF。 */
      loadSample();
    })();
  </script>`;

	/** catalog 元数据（merge 前可能为空）。 */
	const toolMeta = getToolBySlug('edit-pdf-text-online');
	/** Related / FAQ 区块。 */
	const toolSeoHtml = toolMeta
		? renderToolExtraSections({ lang: opts.lang, defaultLang: opts.defaultLang, tool: toolMeta })
		: '';
	/** JSON-LD。 */
	const toolJsonLd = toolMeta
		? buildToolJsonLd({
				lang: opts.lang,
				defaultLang: opts.defaultLang,
				tool: toolMeta,
				name: t(opts.lang, toolMeta.i18nKey as Parameters<typeof t>[1]),
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
