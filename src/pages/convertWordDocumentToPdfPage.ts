/**
 * 将 Word 文档（.docx）转为 PDF：mammoth → HTML 预览 → html2pdf.js 导出（纯客户端）。
 * slug: convert-word-document-to-pdf
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
 * 渲染 convert-word-document-to-pdf 工具页。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderConvertWordDocumentToPdfPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 工具路径（默认语无前缀）。 */
	const toolPath = '/tools/convert-word-document-to-pdf';
	/** 当前语言规范路径。 */
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);

	/** 文案 i18n 前缀（必须与 i18n shard 一致）。 */
	const prefix = 'tool_convert_word_document_to_pdf';
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
			currentSlug: 'convert-word-document-to-pdf',
			currentAnchor: '#converter',
		}),
		id: 'toolNav',
	});

	/** 页脚 HTML。 */
	const footerHtml = renderFooter({ lang: opts.lang });

	/** PDF 进度/预览共用文案。 */
	const pdfWorkLabels = pdfWorkUiLabels(opts.lang);
	/** 页内样式：Word HTML 分页预览（与 PDF 画布同一套边框/翻页栏）。 */
	const extraHeadHtml = `
  <style>
    .word-html-page-wrap { position: relative; overflow: hidden; }
    .word-pdf-preview-frame {
      display: block;
      border: 0;
      overflow: hidden;
      background: #fff;
      transform-origin: top left;
      box-shadow: 0 0 0 1px #dee2e6;
    }
    .tools-bar { gap: .5rem; }
    ${pdfWorkUiCss()}
  </style>`;

	/** 首屏交互区（上传 .docx、HTML 预览、导出 PDF）。 */
	const contentHtml = `
    <div id="converter" class="tool-page-heading mb-3">
      <h1 class="h4 mb-0">${escapeHtml(t(opts.lang, prefix + '_title'))}</h1>
    </div>

    <label class="tool-dropzone mb-3" id="wordPdfDrop" for="wordPdfFile">
      <input type="file" id="wordPdfFile" accept=".docx,application/vnd.openxmlformats-officedocument.wordprocessingml.document">
      <span class="tool-dropzone-title">${escapeHtml(t(opts.lang, prefix + '_choose_file'))}</span>
      <span class="tool-dropzone-hint">${escapeHtml(t(opts.lang, prefix + '_drop_hint'))}</span>
    </label>

    <p id="wordPdfMeta" class="small text-muted mb-2" style="display:none;"></p>

    <div id="wordHtmlPreviewWrap" class="oft-pdf-work-preview mb-3" hidden>
      <p class="small text-muted mb-1">${escapeHtml(t(opts.lang, prefix + '_preview_label'))}</p>
      <div class="d-flex align-items-center oft-pdf-work-nav mb-2 flex-wrap">
        <button type="button" id="wordHtmlPrev" class="btn btn-outline-secondary btn-sm" disabled>${escapeHtml(pdfWorkLabels.prev)}</button>
        <span id="wordHtmlPageInfo" class="small text-muted mx-2" data-page-tpl="${escapeHtml(pdfWorkLabels.pageTpl)}"></span>
        <button type="button" id="wordHtmlNext" class="btn btn-outline-secondary btn-sm" disabled>${escapeHtml(pdfWorkLabels.next)}</button>
      </div>
      <div id="wordHtmlPageWrap" class="oft-pdf-work-canvas-wrap word-html-page-wrap">
        <iframe id="wordPdfHtmlPreview" class="word-pdf-preview-frame" sandbox="allow-same-origin" scrolling="no" title="${escapeHtml(t(opts.lang, prefix + '_preview_label'))}" aria-live="polite"></iframe>
      </div>
    </div>

    <div class="d-flex align-items-center tools-bar mb-2 mt-2 flex-wrap">
      <button type="button" id="wordPdfBtnConvert" class="btn btn-primary btn-sm">${escapeHtml(t(opts.lang, prefix + '_convert'))}</button>
      <button type="button" id="wordPdfBtnDownload" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(t(opts.lang, prefix + '_download'))}</button>
      <button type="button" id="wordPdfBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, prefix + '_sample'))}</button>
      <button type="button" id="wordPdfBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, prefix + '_clear'))}</button>
    </div>

    <p id="wordPdfError" class="small text-danger mb-2" style="display:none;" role="alert"></p>
    <p id="wordPdfStatus" class="small text-muted mb-2" role="status"></p>
    ${pdfWorkUiBlockHtml({ idPrefix: 'wordPdf', labels: pdfWorkLabels })}

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
			{ label: 'mammoth.js', href: 'https://github.com/mwilliamson/mammoth.js' },
			{ label: 'html2pdf.js', href: 'https://github.com/eKoopmans/html2pdf.js' },
		],
	});

	/**
	 * 客户端脚本：JSZip 造样例 .docx → mammoth 转 HTML → 独立 iframe 排版 → html2pdf 导出 PDF。
	 * 正则字类必须写成 \\w / \\d，避免模板字符串吃掉反斜杠。
	 * html2pdf 必须用 bundle：非 bundle 的 min.js 依赖全局 jspdf，初始化即抛 jsPDF undefined。
	 * 不可直接截页面上的灰色预览节点：html2pdf 会把矮盒子按宽度铺满 A4，正文缩成顶部一条，看起来像空白页。
	 */
	const extraBodyHtml = `
  ${pdfWorkUiClientScript()}
  <script src="/vendor/jszip/jszip.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script src="/vendor/mammoth/mammoth.browser.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script src="/vendor/dompurify/purify.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script src="/vendor/html2pdf/html2pdf.bundle.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script>
    (function () {
      /** 单文件软警告阈值（字节）。 */
      var SOFT_BYTES = 25 * 1024 * 1024;
      /** 文件输入。 */
      var fileInput = document.getElementById('wordPdfFile');
      /** 拖放区。 */
      var dropEl = document.getElementById('wordPdfDrop');
      /** 文件名/体积元信息。 */
      var metaEl = document.getElementById('wordPdfMeta');
      /** mammoth 产出的 HTML 预览 iframe（与 PDF 同一份 A4 文档树）。 */
      var previewFrame = document.getElementById('wordPdfHtmlPreview');
      /** Word 分页预览外壳（翻页栏 + 一页视口）。 */
      var wordHtmlWrap = document.getElementById('wordHtmlPreviewWrap');
      /** 缩放后的单页视口（与 PDF canvas-wrap 同款边框）。 */
      var wordHtmlPageWrap = document.getElementById('wordHtmlPageWrap');
      /** Word 上一页。 */
      var btnHtmlPrev = document.getElementById('wordHtmlPrev');
      /** Word 下一页。 */
      var btnHtmlNext = document.getElementById('wordHtmlNext');
      /** Word 页码文案。 */
      var wordHtmlPageInfo = document.getElementById('wordHtmlPageInfo');
      /** Word 页码模板（与 PDF 预览同一句）。 */
      var wordHtmlPageTpl = (wordHtmlPageInfo && wordHtmlPageInfo.getAttribute('data-page-tpl')) || 'Page {n} / {total}';
      /** A4 CSS 像素宽（96dpi），预览与截图共用，保证分页一致。 */
      var PAGE_CSS_W = 794;
      /** A4 高宽比（pt）。 */
      var A4_RATIO = 841.89 / 595.28;
      /** 转换按钮。 */
      var btnConvert = document.getElementById('wordPdfBtnConvert');
      /** 下载 PDF 按钮。 */
      var btnDownload = document.getElementById('wordPdfBtnDownload');
      /** 加载样例按钮。 */
      var btnSample = document.getElementById('wordPdfBtnSample');
      /** 清空按钮。 */
      var btnClear = document.getElementById('wordPdfBtnClear');
      /** 错误行。 */
      var errEl = document.getElementById('wordPdfError');
      /** 状态行。 */
      var statusEl = document.getElementById('wordPdfStatus');
      /** 进度条 + PDF 画布预览；翻页时带动 Word HTML 页。 */
      var work = window.OftPdfWork.bind('wordPdf', {
        onPageChange: function (n) { showWordPage(n, true); }
      });
      /** 忙碌时一起禁用的按钮（不含翻页：setBusy(false) 会误启用）。 */
      var busyBtns = [btnConvert, btnSample, btnClear, btnDownload];

      /** Word 分页状态：当前页、总页、单页 CSS 像素高。 */
      var wordPage = { page: 1, total: 0, pageH: 0 };

      /** 已加载的 .docx 字节。 */
      var sourceBytes = null;
      /** 源文件名。 */
      var sourceName = '';
      /** 最近一次 HTML（供重复导出）。 */
      var lastHtml = '';
      /** 导出的 PDF 字节。 */
      var resultBytes = null;

      /** 页面可见文案（由服务端注入）。 */
      var msg = {
        empty: ${JSON.stringify(t(opts.lang, prefix + '_empty'))},
        loadFail: ${JSON.stringify(t(opts.lang, prefix + '_err_load'))},
        convertFail: ${JSON.stringify(t(opts.lang, prefix + '_err_convert'))},
        encrypted: ${JSON.stringify(t(opts.lang, prefix + '_err_encrypted'))},
        working: ${JSON.stringify(t(opts.lang, prefix + '_status_working'))},
        done: ${JSON.stringify(t(opts.lang, prefix + '_status_done'))},
        large: ${JSON.stringify(t(opts.lang, prefix + '_warn_large'))},
        samplePara: ${JSON.stringify(t(opts.lang, prefix + '_sample_paragraph'))}
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
        var kb = (bytesLen / 1024).toFixed(1);
        metaEl.textContent = name + ' · ' + kb + ' KB';
        metaEl.style.display = '';
      }

      /** 触发 PDF 下载。 */
      function downloadResult() {
        if (!resultBytes) return;
        var blob = new Blob([resultBytes], { type: 'application/pdf' });
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = 'converted.pdf';
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      }

      /**
       * 用 JSZip 组装最小合法 .docx（仅 word/document.xml 一段落）。
       * @param {string} paragraph
       * @returns {Promise<Uint8Array>}
       */
      function buildMinimalDocx(paragraph) {
        if (typeof JSZip === 'undefined') return Promise.reject(new Error('jszip'));
        var zip = new JSZip();
        var text = String(paragraph || 'Sample Word paragraph.').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
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
        var paras = '';
        var pi;
        for (pi = 0; pi < 45; pi++) {
          paras += '<w:p><w:r><w:t xml:space="preserve">' + text + '</w:t></w:r></w:p>';
        }
        zip.folder('word').file('document.xml',
          '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
          '<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">' +
          '<w:body>' + paras +
          '<w:sectPr><w:pgSz w:w="12240" w:h="15840"/>' +
          '<w:pgMar w:top="1440" w:right="1440" w:bottom="1440" w:left="1440"/></w:sectPr>' +
          '</w:body></w:document>');
        return zip.generateAsync({ type: 'uint8array' });
      }

      /**
       * 预览/截图共用的文档 CSS：固定 A4 宽、白底黑字、中日韩字体、接近 Word 的页边距。
       * @returns {string}
       */
      function wordPreviewCss() {
        return [
          'html,body{margin:0;padding:0;background:#fff;color:#111;width:' + PAGE_CSS_W + 'px;height:auto;min-height:0;}',
          'body{box-sizing:border-box;padding:72px 72px;font:16px/1.6 -apple-system,BlinkMacSystemFont,"Segoe UI","PingFang SC","Hiragino Sans GB","Noto Sans SC","Microsoft YaHei",sans-serif;}',
          'img{max-width:100%;height:auto;}',
          'table{border-collapse:collapse;width:100%;}',
          'td,th{border:1px solid #ccc;padding:6px 8px;vertical-align:top;}',
          'p{margin:0 0 .75em;}',
          'h1,h2,h3,h4,h5,h6{margin:1em 0 .5em;line-height:1.3;color:#111;}',
          'ul,ol{margin:0 0 .75em;padding-left:1.5em;}'
        ].join('');
      }

      /**
       * 按内容高度把 iframe 文档垫成整数个 A4 页（末页补白）。
       * 只读 body 的内容高，不用 html.scrollHeight（它至少等于 iframe 视口，会把一页文档量成很多页）。
       * @param {Document} doc iframe 文档
       * @returns {{width:number,height:number,pageH:number,pages:number}}
       */
      function applyWordPageLayout(doc) {
        var pageH = Math.round(PAGE_CSS_W * A4_RATIO);
        if (!doc || !doc.body) {
          return { width: PAGE_CSS_W, height: pageH, pageH: pageH, pages: 1 };
        }
        if (previewFrame) previewFrame.style.width = PAGE_CSS_W + 'px';
        doc.body.style.minHeight = '0px';
        doc.body.style.height = 'auto';
        if (doc.documentElement) {
          doc.documentElement.style.minHeight = '0px';
          doc.documentElement.style.height = 'auto';
        }
        var contentH = Math.max(doc.body.scrollHeight, doc.body.offsetHeight, 200);
        var pages = Math.max(1, Math.ceil((contentH - 1) / pageH));
        doc.body.style.minHeight = (pages * pageH) + 'px';
        doc.body.style.height = '';
        return { width: PAGE_CSS_W, height: pages * pageH, pageH: pageH, pages: pages };
      }

      /**
       * 刷新 Word 翻页栏。
       */
      function syncWordNav() {
        if (wordHtmlPageInfo) {
          wordHtmlPageInfo.textContent = wordHtmlPageTpl
            .replace('{n}', String(wordPage.page || 0))
            .replace('{total}', String(wordPage.total || 0));
        }
        if (btnHtmlPrev) btnHtmlPrev.disabled = !(wordPage.total > 0 && wordPage.page > 1);
        if (btnHtmlNext) btnHtmlNext.disabled = !(wordPage.total > 0 && wordPage.page < wordPage.total);
      }

      /**
       * 把 iframe 缩放到与 PDF 画布同宽的单页视口。
       */
      function fitWordFrame() {
        if (!previewFrame || !wordHtmlPageWrap || !wordPage.pageH) return;
        var cs = window.getComputedStyle(wordHtmlPageWrap);
        var padX = (parseFloat(cs.paddingLeft) || 0) + (parseFloat(cs.paddingRight) || 0);
        var padY = (parseFloat(cs.paddingTop) || 0) + (parseFloat(cs.paddingBottom) || 0);
        var innerW = Math.max(120, wordHtmlPageWrap.clientWidth - padX);
        var scale = Math.min(1, innerW / PAGE_CSS_W);
        previewFrame.style.width = PAGE_CSS_W + 'px';
        previewFrame.style.height = wordPage.pageH + 'px';
        previewFrame.style.transform = 'scale(' + scale + ')';
        wordHtmlPageWrap.style.height = (wordPage.pageH * scale + padY) + 'px';
      }

      /**
       * 显示或隐藏 Word 分页预览外壳。
       * @param {boolean} on
       */
      function setWordPreviewVisible(on) {
        if (!wordHtmlWrap) return;
        wordHtmlWrap.hidden = !on;
        if (on) wordHtmlWrap.classList.add('is-on');
        else wordHtmlWrap.classList.remove('is-on');
      }

      /**
       * 把 Word iframe 滚到第 n 页；可选同步 PDF 预览页码。
       * @param {number} n 从 1 起
       * @param {boolean} [fromPdf] 来自 PDF 翻页时不再回写，避免循环
       */
      function showWordPage(n, fromPdf) {
        if (!wordPage.total) return;
        var next = Math.max(1, Math.min(wordPage.total, Math.round(Number(n) || 1)));
        wordPage.page = next;
        var doc = previewFrame && previewFrame.contentDocument;
        var y = (next - 1) * wordPage.pageH;
        if (doc) {
          if (doc.defaultView && doc.defaultView.scrollTo) doc.defaultView.scrollTo(0, y);
          if (doc.documentElement) doc.documentElement.scrollTop = y;
          if (doc.body) doc.body.scrollTop = y;
        }
        syncWordNav();
        if (!fromPdf && work && typeof work.setPage === 'function') work.setPage(next);
      }

      /**
       * 根据当前 iframe 文档建立分页并显示第 1 页。
       * @param {Document} doc
       */
      function bindWordPages(doc) {
        if (previewFrame) {
          previewFrame.style.width = PAGE_CSS_W + 'px';
          previewFrame.style.transform = 'none';
        }
        var layout = applyWordPageLayout(doc);
        wordPage.total = layout.pages;
        wordPage.pageH = layout.pageH;
        wordPage.page = 1;
        setWordPreviewVisible(true);
        fitWordFrame();
        showWordPage(1, true);
      }

      /**
       * 清空 Word 分页预览。
       */
      function clearWordPages() {
        wordPage.page = 1;
        wordPage.total = 0;
        wordPage.pageH = 0;
        if (wordHtmlPageWrap) wordHtmlPageWrap.style.height = '';
        if (previewFrame) {
          previewFrame.style.transform = '';
          previewFrame.style.width = '';
          previewFrame.style.height = '';
        }
        syncWordNav();
        setWordPreviewVisible(false);
      }

      /**
       * 把消毒后的 Word HTML 写入预览 iframe（完整文档，供预览与 PDF 截同一棵树）。
       * @param {string} html mammoth/消毒后的片段
       * @returns {Promise<Document>}
       */
      function writePreviewDocument(html) {
        return new Promise(function (resolve, reject) {
          if (!previewFrame) return reject(new Error('preview'));
          var bodyHtml = String(html || '');
          if (!bodyHtml.trim()) {
            previewFrame.srcdoc = '';
            clearWordPages();
            return resolve(previewFrame.contentDocument);
          }
          var docHtml = '<!DOCTYPE html><html><head><meta charset="utf-8"><style>' +
            wordPreviewCss() + '</style></head><body>' + bodyHtml + '</body></html>';
          var settled = false;
          /** iframe srcdoc 解析完成后再量页。 */
          function finish() {
            if (settled) return;
            settled = true;
            previewFrame.removeEventListener('load', onLoad);
            var doc = previewFrame.contentDocument;
            if (!doc || !doc.body) return reject(new Error('preview'));
            requestAnimationFrame(function () {
              bindWordPages(doc);
              resolve(doc);
            });
          }
          function onLoad() { finish(); }
          previewFrame.addEventListener('load', onLoad);
          previewFrame.srcdoc = docHtml;
          setTimeout(function () {
            if (!settled) finish();
          }, 4000);
        });
      }

      /**
       * 截图前把 iframe 滚回原点，避免 html2canvas 按当前 scroll 裁掉正文。
       * @param {Document} doc iframe 文档
       */
      function resetWordScroll(doc) {
        if (!doc) return;
        if (doc.defaultView && doc.defaultView.scrollTo) doc.defaultView.scrollTo(0, 0);
        if (doc.documentElement) {
          doc.documentElement.scrollLeft = 0;
          doc.documentElement.scrollTop = 0;
        }
        if (doc.body) {
          doc.body.scrollLeft = 0;
          doc.body.scrollTop = 0;
        }
      }

      /**
       * 按文档实际宽度量截图盒，高度凑成整数个 A4 比例页（短文一页白底，长文分页）。
       * @param {Document} doc iframe 文档
       * @param {number} minW 下限宽度（沿用 A4 CSS 宽）
       * @returns {{width:number,height:number}}
       */
      function measureWordCaptureBox(doc, minW) {
        var layout = applyWordPageLayout(doc);
        var w = Math.max(PAGE_CSS_W, minW || 0, layout.width);
        return { width: w, height: layout.height };
      }

      /**
       * mammoth 把 .docx 转为 HTML，并写入预览 iframe。
       * @param {Uint8Array} bytes
       * @returns {Promise<string>}
       */
      function docxToHtml(bytes) {
        if (typeof mammoth === 'undefined' || !mammoth.convertToHtml) return Promise.reject(new Error('mammoth'));
        if (typeof DOMPurify === 'undefined') return Promise.reject(new Error('dompurify'));
        var copy = bytes.slice(0);
        return mammoth.convertToHtml({ arrayBuffer: copy.buffer }).then(function (result) {
          var html = (result && result.value) ? String(result.value) : '';
          if (!html.trim()) throw new Error('empty');
          // DOCX 可包含外链、事件属性或脚本式标记；进入预览与 PDF 渲染前先消毒。
          var safeHtml = DOMPurify.sanitize(html, {
            USE_PROFILES: { html: true },
          });
          lastHtml = safeHtml;
          return writePreviewDocument(safeHtml).then(function () { return safeHtml; });
        });
      }

      /**
       * html2pdf.js 截 iframe 文档（白底整页）再分页写入 PDF，不截工具页上的小预览框。
       * @returns {Promise<Uint8Array>}
       */
      function htmlToPdfBytes() {
        return new Promise(function (resolve, reject) {
          try {
            if (typeof html2pdf === 'undefined') return reject(new Error('html2pdf'));
            var doc = previewFrame && previewFrame.contentDocument;
            if (!doc || !doc.body || !String(doc.body.innerHTML || '').trim()) return reject(new Error('empty'));
            var savedPage = wordPage.page;
            resetWordScroll(doc);
            var liveW = PAGE_CSS_W;
            var box = measureWordCaptureBox(doc, liveW);
            var pageH = Math.round(PAGE_CSS_W * A4_RATIO);
            wordPage.total = Math.max(1, Math.round(box.height / pageH));
            wordPage.pageH = pageH;
            if (savedPage > wordPage.total) savedPage = wordPage.total;
            syncWordNav();
            var target = doc.documentElement || doc.body;
            /** 略减高度，避免 html2pdf 把刚好整页的画布再切出空白末页。 */
            var capH = Math.max(pageH, box.height - 2);
            var opt = {
              margin: 0,
              filename: 'converted.pdf',
              image: { type: 'jpeg', quality: 0.95 },
              html2canvas: {
                scale: 2,
                useCORS: true,
                allowTaint: true,
                logging: false,
                backgroundColor: '#ffffff',
                scrollX: 0,
                scrollY: 0,
                x: 0,
                y: 0,
                windowWidth: liveW,
                windowHeight: capH,
                width: box.width,
                height: capH,
                onclone: function (clonedDoc) {
                  resetWordScroll(clonedDoc);
                  if (clonedDoc.body) {
                    clonedDoc.body.style.background = '#fff';
                    clonedDoc.body.style.color = '#111';
                  }
                }
              },
              jsPDF: { unit: 'pt', format: 'a4', orientation: 'portrait' },
              /* 画布已按 A4 整页高度截好，避免 css/legacy 再切出空白末页。 */
              pagebreak: { mode: ['avoid-all'] }
            };
            html2pdf().from(target).set(opt).outputPdf('blob').then(function (blob) {
              showWordPage(savedPage, true);
              return blob.arrayBuffer().then(function (ab) {
                resolve(new Uint8Array(ab));
              });
            }).catch(function (err) {
              showWordPage(savedPage, true);
              reject(err);
            });
          } catch (e) {
            reject(e);
          }
        });
      }

      /**
       * 把错误映射为可读文案。
       * @param {unknown} err
       * @returns {string}
       */
      function mapErr(err) {
        var s = String(err && (err.message || err) || '');
        if (/empty/i.test(s)) return msg.empty;
        if (/password|encrypt/i.test(s)) return msg.encrypted;
        if (/mammoth|jszip|html2pdf|preview|dompurify/i.test(s)) return msg.loadFail;
        return msg.convertFail;
      }

      /**
       * 主流程：docx → HTML → PDF → 预览。
       * @returns {Promise<void>}
       */
      function runConvert() {
        if (!sourceBytes) { setErr(msg.empty); return Promise.resolve(); }
        setErr('');
        resultBytes = null;
        btnDownload.disabled = true;
        work.setBusy(busyBtns, true);
        work.setProgress(null);
        setStatus(msg.working);
        return window.OftPdfWork.yieldUi()
          .then(function () { return docxToHtml(sourceBytes); })
          .then(function () {
            work.setProgress(50);
            return htmlToPdfBytes();
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
            setErr(mapErr(err));
            setStatus('');
            work.clearPreview();
          })
          .finally(function () {
            work.setBusy(busyBtns, false);
            work.hideProgress();
            btnDownload.disabled = !resultBytes;
            syncWordNav();
          });
      }

      /**
       * 接收用户选择的 .docx。
       * @param {File} file
       */
      function acceptFile(file) {
        if (!file) return;
        var name = file.name || '';
        if (!/\\.docx$/i.test(name) && file.type !== 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
          setErr(msg.loadFail);
          return;
        }
        setErr('');
        setStatus('');
        resultBytes = null;
        btnDownload.disabled = true;
        work.clearPreview();
        if (file.size > SOFT_BYTES) setStatus(msg.large);
        work.setBusy(busyBtns, true);
        file.arrayBuffer().then(function (ab) {
          sourceBytes = new Uint8Array(ab);
          sourceName = name || 'document.docx';
          setMeta(sourceName, sourceBytes.length);
          return docxToHtml(sourceBytes);
        }).then(function () {
          setStatus('');
        }).catch(function (err) {
          sourceBytes = null;
          setErr(mapErr(err));
        }).finally(function () {
          work.setBusy(busyBtns, false);
          syncWordNav();
        });
      }

      /**
       * 进页/按钮样例：JSZip 造最小 .docx，再走同一转换流水线。
       * lint:tool-page 要求字面 loadSample。
       * @returns {Promise<void>}
       */
      function loadSample() {
        setErr('');
        setStatus('');
        btnDownload.disabled = true;
        work.setBusy(busyBtns, true);
        work.setProgress(null);
        return buildMinimalDocx(msg.samplePara)
          .then(function (bytes) {
            sourceBytes = bytes;
            sourceName = 'sample.docx';
            setMeta(sourceName, bytes.length);
            return runConvert();
          })
          .catch(function (err) {
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
        dropEl.addEventListener(evName, function (ev) {
          ev.preventDefault();
        });
      });
      dropEl.addEventListener('drop', function (ev) {
        ev.preventDefault();
        var f = ev.dataTransfer && ev.dataTransfer.files && ev.dataTransfer.files[0];
        if (f) acceptFile(f);
      });

      btnConvert.addEventListener('click', function () { runConvert(); });
      btnDownload.addEventListener('click', downloadResult);
      btnSample.addEventListener('click', function () { loadSample(); });
      if (btnHtmlPrev) {
        btnHtmlPrev.addEventListener('click', function () {
          if (wordPage.page > 1) showWordPage(wordPage.page - 1);
        });
      }
      if (btnHtmlNext) {
        btnHtmlNext.addEventListener('click', function () {
          if (wordPage.page < wordPage.total) showWordPage(wordPage.page + 1);
        });
      }
      window.addEventListener('resize', function () { fitWordFrame(); });
      if (window.ResizeObserver && wordHtmlPageWrap) {
        new ResizeObserver(function () { fitWordFrame(); }).observe(wordHtmlPageWrap);
      }
      btnClear.addEventListener('click', function () {
        sourceBytes = null;
        sourceName = '';
        lastHtml = '';
        resultBytes = null;
        writePreviewDocument('');
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

	/** catalog 元数据（related / FAQ 用）。 */
	const toolMeta = getToolBySlug('convert-word-document-to-pdf');
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
