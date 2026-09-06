/**
 * 将 PDF 转为 Word（.docx）：pdf.js 抽文本 → JSZip 组装 OOXML（无 OCR）。
 * slug: turn-pdf-into-word-document
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
 * 渲染 turn-pdf-into-word-document 工具页。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderTurnPdfIntoWordDocumentPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 工具路径。 */
	const toolPath = '/tools/turn-pdf-into-word-document';
	/** 当前语言规范路径。 */
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);

	/** 文案 i18n 前缀。 */
	const prefix = 'tool_turn_pdf_into_word_document';
	/** 页面 <title>。 */
	const title = `${t(opts.lang, prefix + '_title')} | ${t(opts.lang, 'brand')}`;
	/** meta / 页首摘要。 */
	const description = t(opts.lang, prefix + '_description');

	/** 顶部导航项。 */
	const navItems = buildToolPageNavItems(opts.lang, opts.defaultLang);

	/** hreflang 映射始终带显式语言段。 */
	const withExplicitLangPrefix = (code: SiteLang, pathname: string) => {
		const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
		return `/${code}${safe}`.replace(/\/{2,}/g, '/');
	};

	/** 语言切换器备选 href。 */
	const langAlternates: Record<string, string> = Object.fromEntries(
		(supportedLangs || []).map((code) => [code, withExplicitLangPrefix(code, toolPath)])
	);

	/** 绝对 hreflang 列表。 */
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
			currentSlug: 'turn-pdf-into-word-document',
			currentAnchor: '#converter',
		}),
		id: 'toolNav',
	});

	/** 页脚 HTML。 */
	const footerHtml = renderFooter({ lang: opts.lang });

	/** PDF 进度/预览共用文案（预览源 PDF；结果是 .docx）。 */
	const pdfWorkLabels = pdfWorkUiLabels(opts.lang);
	/** 页内样式。 */
	const extraHeadHtml = `
  <style>
    .tools-bar { gap: .5rem; }
    #pdfWordOutput { min-height: 160px; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; font-size: .85rem; }
    ${pdfWorkUiCss()}
  </style>`;

	/** 首屏交互区。 */
	const contentHtml = `
    <div id="converter" class="tool-page-heading mb-3">
      <h1 class="h4 mb-0">${escapeHtml(t(opts.lang, prefix + '_title'))}</h1>
    </div>

    <label class="tool-dropzone mb-3" id="pdfWordDrop" for="pdfWordFile">
      <input type="file" id="pdfWordFile" accept="application/pdf,.pdf">
      <span class="tool-dropzone-title">${escapeHtml(t(opts.lang, prefix + '_choose_file'))}</span>
      <span class="tool-dropzone-hint">${escapeHtml(t(opts.lang, prefix + '_drop_hint'))}</span>
    </label>

    <p id="pdfWordMeta" class="small text-muted mb-2" style="display:none;"></p>

    <div class="d-flex align-items-center tools-bar mb-2 flex-wrap">
      <button type="button" id="pdfWordBtnConvert" class="btn btn-primary btn-sm">${escapeHtml(t(opts.lang, prefix + '_convert'))}</button>
      <button type="button" id="pdfWordBtnDownload" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(t(opts.lang, prefix + '_download'))}</button>
      <button type="button" id="pdfWordBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, prefix + '_sample'))}</button>
      <button type="button" id="pdfWordBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, prefix + '_clear'))}</button>
    </div>

    <p id="pdfWordError" class="small text-danger mb-2" style="display:none;" role="alert"></p>
    <p id="pdfWordStatus" class="small text-muted mb-2" role="status"></p>
    ${pdfWorkUiBlockHtml({ idPrefix: 'pdfWord', labels: pdfWorkLabels })}

    <label class="form-label small mb-1" for="pdfWordOutput">${escapeHtml(t(opts.lang, prefix + '_preview_label'))}</label>
    <textarea id="pdfWordOutput" class="form-control mb-3" readonly rows="8" aria-readonly="true"></textarea>

    <p class="tool-lead mb-4">${escapeHtml(description)}</p>`;

	/** How / Rules / Example / Use cases。 */
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
			{ label: 'ECMA-376 OOXML', href: 'https://www.ecma-international.org/publications-and-standards/standards/ecma-376/' },
		],
	});

	/**
	 * 客户端脚本：pdf.js 抽文本；空文本硬失败；JSZip 写 .docx。
	 */
	const extraBodyHtml = `
  ${pdfWorkUiClientScript()}
  <script src="/vendor/pdf-lib/pdf-lib.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script src="/vendor/jszip/jszip.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script>
    (function () {
      /** 单文件软警告阈值（字节）。 */
      var SOFT_BYTES = 25 * 1024 * 1024;
      /** 同一文本行 y 坐标容差。 */
      var LINE_Y_TOLERANCE = 3;
      /** 文件输入。 */
      var fileInput = document.getElementById('pdfWordFile');
      /** 拖放区。 */
      var dropEl = document.getElementById('pdfWordDrop');
      /** 元信息。 */
      var metaEl = document.getElementById('pdfWordMeta');
      /** 抽出的纯文本预览。 */
      var outputEl = document.getElementById('pdfWordOutput');
      /** 转换按钮。 */
      var btnConvert = document.getElementById('pdfWordBtnConvert');
      /** 下载 .docx 按钮。 */
      var btnDownload = document.getElementById('pdfWordBtnDownload');
      /** 样例按钮。 */
      var btnSample = document.getElementById('pdfWordBtnSample');
      /** 清空按钮。 */
      var btnClear = document.getElementById('pdfWordBtnClear');
      /** 错误行。 */
      var errEl = document.getElementById('pdfWordError');
      /** 状态行。 */
      var statusEl = document.getElementById('pdfWordStatus');
      /** 进度 + 源 PDF 预览。 */
      var work = window.OftPdfWork.bind('pdfWord');
      /** 忙碌按钮组。 */
      var busyBtns = [btnConvert, btnSample, btnClear, btnDownload];

      /** 源 PDF 字节。 */
      var sourceBytes = null;
      /** 源文件名。 */
      var sourceName = '';
      /** 最近抽出的纯文本。 */
      var lastText = '';
      /** 生成的 .docx 字节。 */
      var resultBytes = null;

      /** 页面可见文案。 */
      var msg = {
        empty: ${JSON.stringify(t(opts.lang, prefix + '_empty'))},
        loadFail: ${JSON.stringify(t(opts.lang, prefix + '_err_load'))},
        convertFail: ${JSON.stringify(t(opts.lang, prefix + '_err_convert'))},
        encrypted: ${JSON.stringify(t(opts.lang, prefix + '_err_encrypted'))},
        noText: ${JSON.stringify(t(opts.lang, prefix + '_err_notext'))},
        pdfjs: ${JSON.stringify(t(opts.lang, prefix + '_err_pdfjs'))},
        working: ${JSON.stringify(t(opts.lang, prefix + '_status_working'))},
        done: ${JSON.stringify(t(opts.lang, prefix + '_status_done'))},
        large: ${JSON.stringify(t(opts.lang, prefix + '_warn_large'))},
        sampleText: ${JSON.stringify(t(opts.lang, prefix + '_sample_paragraph'))}
      };

      /**
       * 显示或隐藏错误。
       * @param {string} text
       */
      function setErr(text) {
        if (!text) { errEl.style.display = 'none'; errEl.textContent = ''; return; }
        errEl.textContent = text;
        errEl.style.display = '';
      }

      /**
       * 更新状态行。
       * @param {string} text
       */
      function setStatus(text) {
        statusEl.textContent = text || '';
      }

      /**
       * 刷新文件元信息。
       * @param {string} name
       * @param {number} bytesLen
       */
      function setMeta(name, bytesLen) {
        if (!name) { metaEl.style.display = 'none'; metaEl.textContent = ''; return; }
        metaEl.textContent = name + ' · ' + (bytesLen / 1024).toFixed(1) + ' KB';
        metaEl.style.display = '';
      }

      /** pdf-lib 是否可用。 */
      function hasPdfLib() {
        return typeof PDFLib !== 'undefined' && PDFLib && typeof PDFLib.PDFDocument === 'function';
      }

      /**
       * 把单页 getTextContent 按 y 分行。
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
       * 逐页提取纯文本。
       * @param {Uint8Array} bytes
       * @param {(done: number, total: number) => void} [onProgress]
       * @returns {Promise<string>}
       */
      function extractAllText(bytes, onProgress) {
        return window.OftPdfWork.ensurePdfJs().then(function (pdfjsLib) {
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
            return pageTexts.join('\\n\\n');
          });
        });
      }

      /**
       * 把纯文本段落写成最小 OOXML .docx。
       * @param {string} plain
       * @returns {Promise<Uint8Array>}
       */
      function textToDocx(plain) {
        if (typeof JSZip === 'undefined') return Promise.reject(new Error('jszip'));
        var paras = String(plain || '').split(/\\n+/);
        var body = '';
        for (var i = 0; i < paras.length; i++) {
          var t = paras[i].replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
          if (!t.trim()) continue;
          body += '<w:p><w:r><w:t xml:space="preserve">' + t + '</w:t></w:r></w:p>';
        }
        if (!body) return Promise.reject(new Error('notext'));
        var zip = new JSZip();
        zip.file('[Content_Types].xml',
          '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
          '<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">' +
          '<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>' +
          '<Default Extension="xml" ContentType="application/xml"/>' +
          '<Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>' +
          '</Types>');
        zip.folder('_rels').file('.rels',
          '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
          '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' +
          '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>' +
          '</Relationships>');
        zip.folder('word').folder('_rels').file('document.xml.rels',
          '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
          '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"></Relationships>');
        zip.folder('word').file('document.xml',
          '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
          '<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">' +
          '<w:body>' + body +
          '<w:sectPr><w:pgSz w:w="12240" w:h="15840"/>' +
          '<w:pgMar w:top="1440" w:right="1440" w:bottom="1440" w:left="1440"/></w:sectPr>' +
          '</w:body></w:document>');
        return zip.generateAsync({ type: 'uint8array' });
      }

      /**
       * 把错误映射为可读文案。
       * @param {unknown} err
       * @returns {string}
       */
      function mapErr(err) {
        var s = String(err && (err.message || err) || '');
        if (s === 'notext' || /notext/i.test(s)) return msg.noText;
        if (/empty/i.test(s)) return msg.empty;
        if (/password|encrypt/i.test(s)) return msg.encrypted;
        if (/pdfjs|pdf\\.js/i.test(s)) return msg.pdfjs;
        return msg.convertFail;
      }

      /** 下载 .docx。 */
      function downloadResult() {
        if (!resultBytes) return;
        var blob = new Blob([resultBytes], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = 'extracted.docx';
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      }

      /**
       * 主流程：抽文本 → 空则失败 → 写 docx。
       * @returns {Promise<void>}
       */
      function runConvert() {
        if (!sourceBytes) { setErr(msg.empty); return Promise.resolve(); }
        setErr('');
        resultBytes = null;
        lastText = '';
        outputEl.value = '';
        btnDownload.disabled = true;
        work.setBusy(busyBtns, true);
        work.setProgress(null);
        setStatus(msg.working);
        return window.OftPdfWork.yieldUi()
          .then(function () {
            return extractAllText(sourceBytes, function (done, total) {
              work.setProgress((done / total) * 70);
            });
          })
          .then(function (plain) {
            if (!String(plain || '').trim()) throw new Error('notext');
            lastText = plain;
            outputEl.value = plain;
            work.setProgress(80);
            return textToDocx(plain);
          })
          .then(function (bytes) {
            resultBytes = bytes;
            work.setProgress(100);
            btnDownload.disabled = false;
            setStatus(msg.done);
          })
          .catch(function (err) {
            setErr(mapErr(err));
            setStatus('');
            resultBytes = null;
            btnDownload.disabled = true;
          })
          .finally(function () {
            work.setBusy(busyBtns, false);
            work.hideProgress();
            btnDownload.disabled = !resultBytes;
          });
      }

      /**
       * 接收用户 PDF。
       * @param {File} file
       */
      function acceptFile(file) {
        if (!file) return;
        if (!(file.type === 'application/pdf' || /\\.pdf$/i.test(file.name || ''))) {
          setErr(msg.loadFail);
          return;
        }
        setErr('');
        setStatus('');
        resultBytes = null;
        outputEl.value = '';
        btnDownload.disabled = true;
        if (file.size > SOFT_BYTES) setStatus(msg.large);
        work.setBusy(busyBtns, true);
        work.setProgress(null);
        file.arrayBuffer().then(function (ab) {
          sourceBytes = new Uint8Array(ab);
          sourceName = file.name || 'document.pdf';
          setMeta(sourceName, sourceBytes.length);
          return work.showPreview(sourceBytes);
        }).catch(function (err) {
          sourceBytes = null;
          setErr(mapErr(err));
        }).finally(function () {
          work.setBusy(busyBtns, false);
          work.hideProgress();
        });
      }

      /**
       * Helvetica / WinAnsi 无法编码 CJK 等；样例 PDF 内嵌文字超出 Latin-1 时回退 ASCII。
       * 用户上传的 PDF 抽文本走 pdf.js，不受此限制。
       * @param {string} text
       * @param {string} fallback
       * @returns {string}
       */
      function winAnsiOrFallback(text, fallback) {
        var s = String(text || '');
        for (var i = 0; i < s.length; i++) {
          if (s.charCodeAt(i) > 255) return fallback;
        }
        return s || fallback;
      }

      /**
       * 用 pdf-lib 造带文字的样例 PDF，再转 .docx。
       * lint:tool-page 要求字面 loadSample。
       * @returns {Promise<void>}
       */
      function loadSample() {
        if (!hasPdfLib()) { setErr(msg.convertFail); return Promise.resolve(); }
        setErr('');
        setStatus('');
        work.setBusy(busyBtns, true);
        var sampleLine = winAnsiOrFallback(msg.sampleText, 'Hello Word sample from PDF.');
        return PDFLib.PDFDocument.create().then(function (doc) {
          var page = doc.addPage([420, 300]);
          return doc.embedFont(PDFLib.StandardFonts.Helvetica).then(function (font) {
            page.drawText(sampleLine, { x: 48, y: 180, size: 14, font: font });
            page.drawText('Load sample on entry', { x: 48, y: 150, size: 12, font: font });
            return doc.save();
          });
        }).then(function (bytes) {
          sourceBytes = new Uint8Array(bytes);
          sourceName = 'sample.pdf';
          setMeta(sourceName, sourceBytes.length);
          return work.showPreview(sourceBytes).then(function () { return runConvert(); });
        }).catch(function (err) {
          setErr(mapErr(err));
          work.setBusy(busyBtns, false);
          work.hideProgress();
        });
      }

      fileInput.addEventListener('change', function () {
        if (fileInput.files && fileInput.files[0]) acceptFile(fileInput.files[0]);
        fileInput.value = '';
      });
      ['dragover', 'dragenter'].forEach(function (evName) {
        dropEl.addEventListener(evName, function (ev) { ev.preventDefault(); });
      });
      dropEl.addEventListener('drop', function (ev) {
        ev.preventDefault();
        var f = ev.dataTransfer && ev.dataTransfer.files && ev.dataTransfer.files[0];
        if (f) acceptFile(f);
      });
      btnConvert.addEventListener('click', function () { runConvert(); });
      btnDownload.addEventListener('click', downloadResult);
      btnSample.addEventListener('click', function () { loadSample(); });
      btnClear.addEventListener('click', function () {
        sourceBytes = null;
        sourceName = '';
        lastText = '';
        resultBytes = null;
        outputEl.value = '';
        setMeta('', 0);
        setErr('');
        setStatus('');
        btnDownload.disabled = true;
        work.clearPreview();
        work.hideProgress();
      });

      loadSample();
    })();
  </script>`;

	/** catalog 元数据。 */
	const toolMeta = getToolBySlug('turn-pdf-into-word-document');
	/** FAQ / related / 分享。 */
	const toolSeoHtml = toolMeta
		? renderToolExtraSections({
				lang: opts.lang,
				defaultLang: opts.defaultLang,
				tool: toolMeta,
				enabledLangs: supportedLangs,
			})
		: '';

	/** JSON-LD。 */
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
		contentHtml: contentHtml + igHtml + (toolSeoHtml || '') + referencesHtml,
		footerHtml,
		extraHeadHtml: extraHeadHtml + toolJsonLd,
		extraBodyHtml,
		includeSidebarToggleScript: true,
		sidebarAutoCloseSelector: '#toolNav a',
	});
};
