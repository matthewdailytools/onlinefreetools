/**
 * PDF 转 Markdown 工具页：pdf.js 文本层 getTextContent 按 y 分行；下载 .md（纯客户端，无 OCR）。
 * slug: pdf-to-markdown
 * 规格：work-tasks/pdf-to-markdown/02-tool-info.md
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

/** 非默认语言时为路径加语言前缀。 */
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * 渲染 PDF 转 Markdown 工具页。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderPdfToMarkdownPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/pdf-to-markdown';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_pdf_to_markdown_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_pdf_to_markdown_description');

	const navItems = buildToolPageNavItems(opts.lang, opts.defaultLang);

	/** hreflang 映射始终带显式语言段。 */
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
			currentSlug: 'pdf-to-markdown',
			currentAnchor: '#converter',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	const extraHeadHtml = `
  <style>
    .tools-bar { gap: .5rem; }
    .pdf-to-markdown-meta { font-size: .85rem; color: #6c757d; }
    #pdfToMarkdownOutput { min-height: 200px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: .85rem; }
  </style>`;

	const contentHtml = `
    <div id="converter" class="tool-page-heading mb-3">
      <h1 class="h4 mb-0">${escapeHtml(t(opts.lang, 'tool_pdf_to_markdown_title'))}</h1>
    </div>

    <label class="tool-dropzone pdf-to-markdown-drop mb-3" id="pdfToMarkdownDrop" for="pdfToMarkdownFile">
      <input type="file" id="pdfToMarkdownFile" accept="application/pdf,.pdf">
      <span class="tool-dropzone-title">${escapeHtml(t(opts.lang, 'tool_pdf_to_markdown_choose_file'))}</span>
      <span class="tool-dropzone-hint">${escapeHtml(t(opts.lang, 'tool_pdf_to_markdown_drop_hint'))}</span>
    </label>

    <p id="pdfToMarkdownMeta" class="pdf-to-markdown-meta mb-2" style="display:none;"></p>

    <div class="d-flex align-items-center tools-bar mb-2 flex-wrap">
      <button type="button" id="pdfToMarkdownBtnConvert" class="btn btn-primary btn-sm">${escapeHtml(t(opts.lang, 'tool_pdf_to_markdown_convert'))}</button>
      <button type="button" id="pdfToMarkdownBtnDownload" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(t(opts.lang, 'tool_pdf_to_markdown_download'))}</button>
      <button type="button" id="pdfToMarkdownBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_pdf_to_markdown_sample'))}</button>
      <button type="button" id="pdfToMarkdownBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_pdf_to_markdown_clear'))}</button>
    </div>

    <p id="pdfToMarkdownWarn" class="small text-warning mb-2" style="display:none;" role="status"></p>
    <p id="pdfToMarkdownError" class="small text-danger mb-2" style="display:none;" role="alert"></p>
    <p id="pdfToMarkdownStatus" class="small text-muted mb-2" role="status"></p>
    <p id="pdfToMarkdownStats" class="small text-muted mb-2" style="display:none;"></p>

    <label class="form-label small mb-1" for="pdfToMarkdownOutput">${escapeHtml(t(opts.lang, 'tool_pdf_to_markdown_preview_label'))}</label>
    <textarea id="pdfToMarkdownOutput" class="form-control mb-3" readonly rows="10" aria-readonly="true"></textarea>

    <p class="tool-lead mb-4">${escapeHtml(description)}</p>`;

	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: 'tool_pdf_to_markdown',
		mode: 'rules',
		usecaseCount: 3,
		ruleItemCount: 4,
	});

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{ label: 'PDF.js', href: 'https://mozilla.github.io/pdf.js/' },
			{ label: 'pdf-lib', href: 'https://pdf-lib.js.org/' },
		],
	});

	/**
	 * 客户端脚本：pdf.js 文本层提取 + 按 y 分行 + 下载 .md；样例用 pdf-lib 生成。
	 * 页间以 \\n\\n---\\n\\n 分隔；无 OCR，空文本硬失败。
	 */
	const extraBodyHtml = `
  <script src="https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/dist/pdf-lib.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script>
    (function () {
      /** 单文件软警告阈值（字节）。 */
      var SOFT_BYTES = 25 * 1024 * 1024;
      /** 同一文本行 y 坐标容差（PDF 用户空间单位）。 */
      var LINE_Y_TOLERANCE = 3;

      var drop = document.getElementById('pdfToMarkdownDrop');
      var fileInput = document.getElementById('pdfToMarkdownFile');
      var metaEl = document.getElementById('pdfToMarkdownMeta');
      var outputEl = document.getElementById('pdfToMarkdownOutput');
      var btnConvert = document.getElementById('pdfToMarkdownBtnConvert');
      var btnDownload = document.getElementById('pdfToMarkdownBtnDownload');
      var btnSample = document.getElementById('pdfToMarkdownBtnSample');
      var btnClear = document.getElementById('pdfToMarkdownBtnClear');
      var warnEl = document.getElementById('pdfToMarkdownWarn');
      var errEl = document.getElementById('pdfToMarkdownError');
      var statusEl = document.getElementById('pdfToMarkdownStatus');
      var statsEl = document.getElementById('pdfToMarkdownStats');

      var msg = {
        empty: ${JSON.stringify(t(opts.lang, 'tool_pdf_to_markdown_empty'))},
        encrypted: ${JSON.stringify(t(opts.lang, 'tool_pdf_to_markdown_err_encrypted'))},
        loadFail: ${JSON.stringify(t(opts.lang, 'tool_pdf_to_markdown_err_load'))},
        convertFail: ${JSON.stringify(t(opts.lang, 'tool_pdf_to_markdown_err_convert'))},
        noText: ${JSON.stringify(t(opts.lang, 'tool_pdf_to_markdown_err_notext'))},
        pdfjsMissing: ${JSON.stringify(t(opts.lang, 'tool_pdf_to_markdown_err_pdfjs'))},
        pdflibMissing: ${JSON.stringify(t(opts.lang, 'tool_pdf_to_markdown_warn_pdflib'))},
        large: ${JSON.stringify(t(opts.lang, 'tool_pdf_to_markdown_warn_large'))},
        converting: ${JSON.stringify(t(opts.lang, 'tool_pdf_to_markdown_status_converting'))},
        done: ${JSON.stringify(t(opts.lang, 'tool_pdf_to_markdown_status_done'))},
        pagesLabel: ${JSON.stringify(t(opts.lang, 'tool_pdf_to_markdown_pages_label'))},
        statsTpl: ${JSON.stringify(t(opts.lang, 'tool_pdf_to_markdown_stats_tpl'))},
        sampleText: 'Hello PDF to Markdown sample.'
      };

      /** @type {{ name: string, bytes: Uint8Array, pageCount: number }|null} 已加载的源 PDF */
      var source = null;
      /** @type {{ text: string, filename: string }|null} 最近一次转换结果 */
      var result = null;

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

      /** pdf-lib 是否可用（样例 PDF 生成）。 */
      function hasPdfLib() {
        return typeof PDFLib !== 'undefined' && PDFLib && typeof PDFLib.PDFDocument === 'function';
      }

      /** 清空转换结果与预览。 */
      function clearResult() {
        result = null;
        btnDownload.disabled = true;
        outputEl.value = '';
        statsEl.style.display = 'none';
        statsEl.textContent = '';
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
       * 懒加载 pdf.js（首次转换或样例时调用）。
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
       * 将单页 getTextContent 的 items 按近似 y 分行，行内按 x 排序并用空格连接。
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
       * 逐页提取文本并用 --- 分隔页。
       * @param {Uint8Array} bytes
       * @returns {Promise<string>}
       */
      function buildMarkdown(bytes) {
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
                  });
                });
              });
            })(p);
          }
          return chain.then(function () {
            /**
             * 与「提取 PDF 文本」的差异：每页加 ## Page N 标题，页间用 --- 分隔，
             * 便于粘进 Markdown 编辑器当草稿；仍不重建标题层级或表格（无 OCR）。
             */
            return pageTexts
              .map(function (pageText, idx) {
                return '## Page ' + (idx + 1) + '\\n\\n' + pageText;
              })
              .join('\\n\\n---\\n\\n');
          });
        });
      }

      /**
       * 加载用户选择的 PDF 并解析页数。
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
        return file.arrayBuffer().then(function (buf) {
          var bytes = new Uint8Array(buf);
          return ensurePdfJs().then(function (pdfjsLib) {
            return pdfjsLib.getDocument({ data: bytes.slice(0) }).promise;
          }).then(function (doc) {
            source = { name: file.name || 'document.pdf', bytes: bytes, pageCount: doc.numPages };
            refreshMeta();
          });
        }).catch(function (err) {
          source = null;
          refreshMeta();
          setError(mapLoadError(err));
        });
      }

      /** 执行转换并启用下载。 */
      function convert() {
        setError('');
        clearResult();
        if (!source) {
          setError(msg.empty);
          return;
        }
        setStatus(msg.converting);
        btnConvert.disabled = true;
        buildMarkdown(source.bytes)
          .then(function (text) {
            if (!text || !String(text).trim()) throw new Error('notext');
            var base = (source.name || 'document.pdf').replace(/\\.pdf$/i, '') || 'document';
            result = { text: text, filename: base + '.md' };
            outputEl.value = text;
            btnDownload.disabled = false;
            statsEl.textContent = msg.statsTpl
              .replace('{n}', String(source.pageCount))
              .replace('{chars}', String(text.length));
            statsEl.style.display = '';
            setStatus(msg.done);
          })
          .catch(function (err) {
            var s = String(err && err.message || '');
            if (s === 'notext') setError(msg.noText);
            else if (s === 'pdfjs') setError(msg.pdfjsMissing);
            else setError(mapLoadError(err) === msg.loadFail ? msg.convertFail : mapLoadError(err));
            setStatus('');
          })
          .finally(function () {
            btnConvert.disabled = false;
          });
      }

      /** 下载 Markdown 结果。 */
      function downloadResult() {
        if (!result) return;
        var blob = new Blob([result.text], { type: 'text/markdown;charset=utf-8' });
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = result.filename;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      }

      /**
       * 生成含 Helvetica 文本的单页样例 PDF。
       * @returns {Promise<File>}
       */
      function makeSamplePdf() {
        if (!hasPdfLib()) return Promise.reject(new Error('pdflib'));
        return PDFLib.PDFDocument.create().then(function (doc) {
          return doc.embedFont(PDFLib.StandardFonts.Helvetica).then(function (font) {
            var page = doc.addPage([420, 300]);
            page.drawText(msg.sampleText, { x: 48, y: 160, size: 18, font: font });
            return doc.save();
          });
        }).then(function (bytes) {
          return new File([bytes], 'sample-pdf-to-markdown.pdf', { type: 'application/pdf' });
        });
      }

      /** 加载样例并自动转换（Download 可下载含样例句子的 .md）。 */
      function loadSample() {
        clearAll(false);
        if (!hasPdfLib()) {
          setError(msg.pdflibMissing);
          return Promise.resolve();
        }
        return makeSamplePdf().then(function (file) {
          return loadFile(file);
        }).then(function () {
          if (source) convert();
        });
      }

      /**
       * 重置全部状态。
       * @param {boolean} resetInput 是否清空 file input
       */
      function clearAll(resetInput) {
        source = null;
        if (resetInput !== false) fileInput.value = '';
        refreshMeta();
        clearResult();
        setError('');
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
        var fs = e.dataTransfer && e.dataTransfer.files;
        if (fs && fs[0]) loadFile(fs[0]);
      });
      fileInput.addEventListener('change', function () {
        if (fileInput.files && fileInput.files[0]) loadFile(fileInput.files[0]);
        fileInput.value = '';
      });

      btnConvert.addEventListener('click', convert);
      btnDownload.addEventListener('click', downloadResult);
      btnSample.addEventListener('click', function () { loadSample(); });
      btnClear.addEventListener('click', function () { clearAll(true); });

      /** 进页自动跑样例，保证 Download 有真实 .md 结果。 */
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('pdf-to-markdown');
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
