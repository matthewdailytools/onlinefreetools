/**
 * 把 PDF 变成可编辑文档：抽出文本层到文本框，再导出重排 PDF（无 OCR；Word 请走邻近工具）。
 * slug: turn-pdf-into-editable-document
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
 * 渲染 turn-pdf-into-editable-document 工具页。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderTurnPdfIntoEditableDocumentPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 工具路径（默认语无前缀）。 */
	const toolPath = '/tools/turn-pdf-into-editable-document';
	/** 当前语规范路径。 */
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	/** i18n 键前缀。 */
	const prefix = 'tool_turn_pdf_into_editable_document';
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
			currentSlug: 'turn-pdf-into-editable-document',
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
    #tpedEditor { min-height: 200px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: .85rem; }
    ${pdfWorkUiCss()}
  </style>`;

	/** 首屏交互区：主 CTA 为 Make editable。 */
	const contentHtml = `
    <div id="converter" class="tool-page-heading mb-3">
      <h1 class="h4 mb-0">${escapeHtml(t(opts.lang, (prefix + '_title') as Parameters<typeof t>[1]))}</h1>
    </div>

    <label class="tool-dropzone mb-3" id="tpedDrop" for="tpedFile">
      <input type="file" id="tpedFile" accept="application/pdf,.pdf">
      <span class="tool-dropzone-title">${escapeHtml(t(opts.lang, (prefix + '_choose_file') as Parameters<typeof t>[1]))}</span>
      <span class="tool-dropzone-hint">${escapeHtml(t(opts.lang, (prefix + '_drop_hint') as Parameters<typeof t>[1]))}</span>
    </label>

    <p id="tpedMeta" class="small text-muted mb-2" style="display:none;"></p>
    <p class="small text-muted mb-2">${escapeHtml(t(opts.lang, (prefix + '_word_note') as Parameters<typeof t>[1]))}</p>

    <div class="d-flex align-items-center tools-bar mb-2 flex-wrap">
      <button type="button" id="tpedBtnMake" class="btn btn-primary btn-sm">${escapeHtml(t(opts.lang, (prefix + '_make_editable') as Parameters<typeof t>[1]))}</button>
      <button type="button" id="tpedBtnDownloadText" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(t(opts.lang, (prefix + '_download_text') as Parameters<typeof t>[1]))}</button>
      <button type="button" id="tpedBtnExport" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(t(opts.lang, (prefix + '_export_pdf') as Parameters<typeof t>[1]))}</button>
      <button type="button" id="tpedBtnDownload" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(t(opts.lang, (prefix + '_download') as Parameters<typeof t>[1]))}</button>
      <button type="button" id="tpedBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, (prefix + '_sample') as Parameters<typeof t>[1]))}</button>
      <button type="button" id="tpedBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, (prefix + '_clear') as Parameters<typeof t>[1]))}</button>
    </div>

    <label class="form-label small mb-1" for="tpedEditor">${escapeHtml(t(opts.lang, (prefix + '_editor_label') as Parameters<typeof t>[1]))}</label>
    <textarea id="tpedEditor" class="form-control mb-3" rows="10"></textarea>

    <p id="tpedWarn" class="small text-warning mb-2" style="display:none;" role="status"></p>
    <p id="tpedError" class="small text-danger mb-2" style="display:none;" role="alert"></p>
    <p id="tpedStatus" class="small text-muted mb-2" role="status"></p>
    ${pdfWorkUiBlockHtml({ idPrefix: 'tpedPdf', labels: pdfWorkLabels })}

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
	 * 客户端脚本：Make editable 抽出文本层；Export PDF 用 drawText 重排。
	 * 无 OCR，空文本硬失败。
	 */
	const extraBodyHtml = `
  ${pdfWorkUiClientScript()}
  <script src="https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/dist/pdf-lib.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script>
    (function () {
      /** 单文件软警告阈值（字节）。 */
      var SOFT_BYTES = 25 * 1024 * 1024;
      /** 同一文本行 y 坐标容差。 */
      var LINE_Y_TOLERANCE = 3;
      /** 页间分隔符。 */
      var PAGE_SEP = '\\n\\n---\\n\\n';

      /** 拖放区。 */
      var drop = document.getElementById('tpedDrop');
      /** 文件输入。 */
      var fileInput = document.getElementById('tpedFile');
      /** 元信息行。 */
      var metaEl = document.getElementById('tpedMeta');
      /** 可编辑全文。 */
      var editorEl = document.getElementById('tpedEditor');
      /** 主 CTA：变成可编辑。 */
      var btnMake = document.getElementById('tpedBtnMake');
      /** 导出重排 PDF。 */
      var btnExport = document.getElementById('tpedBtnExport');
      /** 下载可继续编辑的纯文本文件。 */
      var btnDownloadText = document.getElementById('tpedBtnDownloadText');
      /** 下载按钮。 */
      var btnDownload = document.getElementById('tpedBtnDownload');
      /** 样例按钮。 */
      var btnSample = document.getElementById('tpedBtnSample');
      /** 清空按钮。 */
      var btnClear = document.getElementById('tpedBtnClear');
      /** 警告行。 */
      var warnEl = document.getElementById('tpedWarn');
      /** 错误行。 */
      var errEl = document.getElementById('tpedError');
      /** 状态行。 */
      var statusEl = document.getElementById('tpedStatus');
      /** PDF 工作台绑定。 */
      var work = window.OftPdfWork.bind('tpedPdf');
      /** 忙碌时禁用的按钮组。 */
      var busyBtns = [btnMake, btnDownloadText, btnExport, btnSample, btnClear, btnDownload];

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
        sampleText: 'Hello editable PDF document sample.'
      };

      /** @type {{ name: string, bytes: Uint8Array, pageCount: number }|null} 已加载源 PDF */
      var source = null;
      /** @type {Uint8Array|null} 导出的重排 PDF */
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

      /** 清空导出结果。 */
      function clearResult() {
        resultBytes = null;
        btnDownload.disabled = true;
      }

      /** 刷新元信息。 */
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
        return import('https://cdn.jsdelivr.net/npm/pdfjs-dist@4.10.38/build/pdf.min.mjs').then(function (mod) {
          mod.GlobalWorkerOptions.workerSrc = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@4.10.38/build/pdf.worker.min.mjs';
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
       * 将单页 getTextContent 的 items 按近似 y 分行。
       * @param {{ items: { str?: string, transform?: number[] }[] }} textContent
       * @returns {string}
       */
      function extractPageText(textContent) {
        var items = (textContent && textContent.items) || [];
        /** @type {{ y: number, parts: { x: number, str: string }[] }[]} */
        var lines = [];
        for (var i = 0; i < items.length; i++) {
          var item = items[i];
          if (!item || !item.str) continue;
          var tr = item.transform || [];
          var x = typeof tr[4] === 'number' ? tr[4] : 0;
          var y = typeof tr[5] === 'number' ? tr[5] : 0;
          var matched = null;
          for (var j = 0; j < lines.length; j++) {
            if (Math.abs(lines[j].y - y) < LINE_Y_TOLERANCE) {
              matched = lines[j];
              break;
            }
          }
          if (!matched) {
            matched = { y: y, parts: [] };
            lines.push(matched);
          }
          matched.parts.push({ x: x, str: item.str });
        }
        lines.sort(function (a, b) { return b.y - a.y; });
        var out = [];
        for (var k = 0; k < lines.length; k++) {
          lines[k].parts.sort(function (a, b) { return a.x - b.x; });
          var joined = lines[k].parts.map(function (p) { return p.str; }).join(' ');
          if (joined.trim()) out.push(joined);
        }
        return out.join('\\n');
      }

      /**
       * 逐页提取文本。
       * @param {Uint8Array} bytes
       * @param {(done: number, total: number) => void} [onProgress]
       * @returns {Promise<string>}
       */
      function buildEditorText(bytes, onProgress) {
        return ensurePdfJs().then(function (pdfjsLib) {
          return pdfjsLib.getDocument({ data: bytes.slice(0) }).promise;
        }).then(function (pdfDoc) {
          var numPages = pdfDoc.numPages;
          var pageTexts = [];
          var chain = Promise.resolve();
          for (var p = 1; p <= numPages; p++) {
            (function (pageNum) {
              chain = chain.then(function () {
                return pdfDoc.getPage(pageNum).then(function (page) {
                  return page.getTextContent().then(function (tc) {
                    pageTexts.push(extractPageText(tc));
                    if (onProgress) onProgress(pageNum, numPages);
                  });
                });
              });
            })(p);
          }
          return chain.then(function () {
            return pageTexts.join(PAGE_SEP);
          });
        });
      }

      /**
       * 把可编辑全文重排为新 PDF。
       * @param {string} raw
       * @returns {Promise<Uint8Array>}
       */
      function rebuildPdfFromText(raw) {
        if (!hasPdfLib()) return Promise.reject(new Error('pdflib'));
        var trimmed = String(raw || '').trim();
        if (!trimmed) return Promise.reject(new Error('notext'));
        var pageChunks = trimmed.split(/\\n\\n---\\n\\n/).map(function (s) { return s.trim(); }).filter(Boolean);
        if (!pageChunks.length) return Promise.reject(new Error('notext'));
        var fontSize = 12;
        var lineHeight = 16;
        var pageW = 595.28;
        var pageH = 841.89;
        var marginX = 48;
        var marginYTop = 72;
        var usableH = pageH - marginYTop - 48;
        var maxLinesPerPage = Math.max(1, Math.floor(usableH / lineHeight));
        var docRef = null;
        return PDFLib.PDFDocument.create().then(function (d) {
          docRef = d;
          return docRef.embedFont(PDFLib.StandardFonts.Helvetica);
        }).then(function (font) {
          pageChunks.forEach(function (chunk) {
            var lines = chunk.split(/\\n/).map(function (s) { return s.trimEnd(); });
            var page = docRef.addPage([pageW, pageH]);
            var y = pageH - marginYTop;
            var lineCount = 0;
            lines.forEach(function (line) {
              if (lineCount > 0 && lineCount % maxLinesPerPage === 0) {
                page = docRef.addPage([pageW, pageH]);
                y = pageH - marginYTop;
              }
              page.drawText(line || ' ', { x: marginX, y: y, size: fontSize, font: font, maxWidth: pageW - marginX * 2 });
              y -= lineHeight;
              lineCount += 1;
            });
          });
          return docRef.save();
        }).then(function (bytes) {
          return new Uint8Array(bytes);
        });
      }

      /**
       * 仅加载源 PDF（不抽出，等 Make editable）。
       * @param {File} file
       */
      function loadFile(file) {
        setError('');
        clearResult();
        editorEl.value = '';
        btnExport.disabled = true;
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
            source = { name: file.name || 'document.pdf', bytes: bytes, pageCount: doc.numPages };
            refreshMeta();
            work.setProgress(70);
            return work.showPreview(bytes);
          });
        }).catch(function (err) {
          source = null;
          refreshMeta();
          setError(mapLoadError(err));
        }).finally(function () {
          work.setBusy(busyBtns, false);
          work.hideProgress();
        });
      }

      /** 主 CTA：抽出文本层到编辑器。 */
      function makeEditable() {
        setError('');
        clearResult();
        if (!source) {
          setError(msg.empty);
          return Promise.resolve();
        }
        work.setBusy(busyBtns, true);
        work.setProgress(null);
        setStatus(msg.working);
        return window.OftPdfWork.yieldUi()
          .then(function () {
            return buildEditorText(source.bytes, function (done, total) {
              work.setProgress((done / total) * 90);
            });
          })
          .then(function (text) {
            if (!text || !String(text).trim()) throw new Error('notext');
            editorEl.value = text;
            btnDownloadText.disabled = false;
            btnExport.disabled = false;
            work.setProgress(100);
            setStatus(msg.done);
          })
          .catch(function (err) {
            editorEl.value = '';
            btnDownloadText.disabled = true;
            btnExport.disabled = true;
            var s = String(err && err.message || '');
            if (s === 'notext') setError(msg.noText);
            else if (s === 'pdfjs') setError(msg.pdfjsMissing);
            else setError(mapLoadError(err) === msg.loadFail ? msg.convertFail : mapLoadError(err));
            setStatus('');
          })
          .finally(function () {
            work.setBusy(busyBtns, false);
            work.hideProgress();
          });
      }

      /** 导出重排 PDF 并预览。 */
      function exportPdf() {
        setError('');
        clearResult();
        if (!String(editorEl.value || '').trim()) {
          setError(msg.noText);
          return;
        }
        if (!hasPdfLib()) {
          setError(msg.pdflibMissing);
          return;
        }
        work.setBusy(busyBtns, true);
        work.setProgress(null);
        setStatus(msg.working);
        window.OftPdfWork.yieldUi()
          .then(function () {
            return rebuildPdfFromText(editorEl.value);
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
            else if (s === 'pdflib') setError(msg.pdflibMissing);
            else setError(msg.convertFail);
            setStatus('');
          })
          .finally(function () {
            work.setBusy(busyBtns, false);
            work.hideProgress();
            btnDownload.disabled = !resultBytes;
          });
      }

      /** 下载重排 PDF。 */
      function downloadResult() {
        if (!resultBytes) return;
        var blob = new Blob([resultBytes], { type: 'application/pdf' });
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = ((source && source.name) || 'document.pdf').replace(/\\.pdf$/i, '') + '-editable.pdf';
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      }

      /** 将编辑器当前内容下载为可继续编辑的 UTF-8 纯文本文件。 */
      function downloadEditableText() {
        var text = String(editorEl.value || '');
        if (!text.trim()) {
          setError(msg.noText);
          return;
        }
        var blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = ((source && source.name) || 'document.pdf').replace(/\\.pdf$/i, '') + '-editable.txt';
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      }

      /**
       * 生成含文本层的样例 PDF。
       * @returns {Promise<File>}
       */
      function makeSamplePdf() {
        if (!hasPdfLib()) return Promise.reject(new Error('pdflib'));
        return PDFLib.PDFDocument.create().then(function (doc) {
          return doc.embedFont(PDFLib.StandardFonts.Helvetica).then(function (font) {
            var page = doc.addPage([420, 300]);
            page.drawText(msg.sampleText, { x: 48, y: 160, size: 16, font: font });
            return doc.save();
          });
        }).then(function (bytes) {
          return new File([bytes], 'sample-editable-document.pdf', { type: 'application/pdf' });
        });
      }

      /**
       * 进页样例：载入 PDF → Make editable → Export PDF。
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
          if (!source) return;
          return makeEditable();
        }).then(function () {
          if (String(editorEl.value || '').trim()) exportPdf();
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
        btnDownloadText.disabled = true;
        btnExport.disabled = true;
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

      btnMake.addEventListener('click', function () { makeEditable(); });
      btnDownloadText.addEventListener('click', downloadEditableText);
      btnExport.addEventListener('click', exportPdf);
      btnDownload.addEventListener('click', downloadResult);
      btnSample.addEventListener('click', function () { loadSample(); });
      btnClear.addEventListener('click', function () { clearAll(true); });

      /** 进页自动跑样例，编辑器与导出预览都有真实结果。 */
      loadSample();
    })();
  </script>`;

	/** catalog 元数据（merge 前可能为空）。 */
	const toolMeta = getToolBySlug('turn-pdf-into-editable-document');
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
