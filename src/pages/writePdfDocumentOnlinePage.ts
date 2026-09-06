/**
 * Write a PDF document online 工具页：在浏览器中编辑文本并导出多页 PDF（纯客户端）。
 * slug: write-pdf-document-online
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
 * 渲染 write-pdf-document-online 工具页。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderWritePdfDocumentOnlinePage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/write-pdf-document-online';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);

	const prefix = 'tool_write_pdf_document_online';
	const title = `${t(opts.lang, prefix + '_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, prefix + '_description');

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
			currentSlug: 'write-pdf-document-online',
			currentAnchor: '#converter',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	const pdfWorkLabels = pdfWorkUiLabels(opts.lang);
	const extraHeadHtml = `
  <style>
    textarea#writePdfTextarea { min-height: 240px; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; }
    .tools-bar { gap: .5rem; }
    ${pdfWorkUiCss()}
  </style>`;

	const contentHtml = `
    <div id="converter" class="tool-page-heading mb-3">
      <h1 class="h4 mb-0">${escapeHtml(t(opts.lang, prefix + '_title'))}</h1>
    </div>

    <div class="row g-2 mb-2">
      <div class="col-12 col-lg-8">
        <label class="form-label" for="writePdfTextarea">${escapeHtml(t(opts.lang, prefix + '_textarea_label'))}</label>
        <textarea id="writePdfTextarea" class="form-control form-control-sm"></textarea>
      </div>
      <div class="col-12 col-lg-4">
        <label class="form-label" for="writePdfFontSize">${escapeHtml(t(opts.lang, prefix + '_font_size'))}</label>
        <input id="writePdfFontSize" class="form-control form-control-sm" type="number" value="12" min="6" max="30">
      </div>
    </div>

    <div class="d-flex align-items-center tools-bar mb-2 flex-wrap">
      <button type="button" id="writePdfBtnCreate" class="btn btn-primary btn-sm">${escapeHtml(t(opts.lang, prefix + '_create'))}</button>
      <button type="button" id="writePdfBtnDownload" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(t(opts.lang, prefix + '_download'))}</button>
      <button type="button" id="writePdfBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, prefix + '_sample'))}</button>
      <button type="button" id="writePdfBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, prefix + '_clear'))}</button>
    </div>

    <p id="writePdfError" class="small text-danger mb-2" style="display:none;" role="alert"></p>
    <p id="writePdfStatus" class="small text-muted mb-2" role="status"></p>
    ${pdfWorkUiBlockHtml({ idPrefix: 'writePdf', labels: pdfWorkLabels })}

    <p class="tool-lead mb-4">${escapeHtml(description)}</p>`;

	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix,
		mode: 'rules',
		usecaseCount: 3,
		ruleItemCount: 4,
	});

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [{ label: 'pdf-lib', href: 'https://pdf-lib.js.org/' }],
	});

	const extraBodyHtml = `
  ${pdfWorkUiClientScript()}
  <script src="/vendor/pdf-lib/pdf-lib.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script>
    (function () {
      var fileInput = null; // 该工具不依赖上传文件（仅保留变量用于与其它工具结构一致）

      var textarea = document.getElementById('writePdfTextarea');
      var fontSizeInput = document.getElementById('writePdfFontSize');
      var btnCreate = document.getElementById('writePdfBtnCreate');
      var btnDownload = document.getElementById('writePdfBtnDownload');
      var btnSample = document.getElementById('writePdfBtnSample');
      var btnClear = document.getElementById('writePdfBtnClear');
      var errEl = document.getElementById('writePdfError');
      var statusEl = document.getElementById('writePdfStatus');
      var work = window.OftPdfWork.bind('writePdf');
      var busyBtns = [btnCreate, btnSample, btnClear, btnDownload];

      /** 输出 PDF 字节 */
      var resultBytes = null;

      var msg = {
        empty: ${JSON.stringify(t(opts.lang, prefix + '_empty'))},
        createFail: ${JSON.stringify(t(opts.lang, prefix + '_err_convert'))},
        working: ${JSON.stringify(t(opts.lang, prefix + '_status_working'))},
        done: ${JSON.stringify(t(opts.lang, prefix + '_status_done'))},
        pdflibMissing: ${JSON.stringify(t(opts.lang, 'tool_merge_pdf_warn_pdflib'))},
      };

      function hasPdfLib() {
        return typeof PDFLib !== 'undefined' && PDFLib && typeof PDFLib.PDFDocument === 'function';
      }

      function setErr(text) {
        if (!text) { errEl.style.display = 'none'; errEl.textContent = ''; return; }
        errEl.textContent = text;
        errEl.style.display = '';
      }

      function setStatus(text) {
        statusEl.textContent = text || '';
      }

      /** 下载 PDF */
      function downloadResult() {
        if (!resultBytes) return;
        var blob = new Blob([resultBytes], { type: 'application/pdf' });
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = 'written.pdf';
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      }

      /**
       * 把纯文本渲染为多页 PDF（不做复杂排版，目标是可用导出而不是排版完全一致）。
       * @returns {Promise<Uint8Array>}
       */
      function buildPdfFromText() {
        if (!hasPdfLib()) return Promise.reject(new Error('pdflib'));

        var raw = (textarea.value || '').toString();
        var trimmed = raw.trim();
        if (!trimmed) return Promise.reject(new Error('empty'));

        var fontSize = Number(fontSizeInput.value || 12);
        var lineHeight = Math.max(14, fontSize * 1.25);

        // A4 页面尺寸（pt）
        var pageW = 595.28;
        var pageH = 841.89;
        var marginX = 48;
        var marginYTop = 72;
        var marginYBottom = 48;

        var usableH = pageH - marginYTop - marginYBottom;
        var maxLinesPerPage = Math.max(1, Math.floor(usableH / lineHeight));

        // 逐行渲染：支持用户用换行分段
        var lines = trimmed.split(/\\n/).map(function (s) { return s.trimEnd(); });
        var doc = null;

        return PDFLib.PDFDocument.create().then(function (d) {
          doc = d;
          return doc.embedFont(PDFLib.StandardFonts.Helvetica);
        }).then(function (font) {
          var page = doc.addPage([pageW, pageH]);
          var y = pageH - marginYTop;
          var pageIndex = 1;

          lines.forEach(function (line, idx) {
            if (idx > 0 && idx % maxLinesPerPage === 0) {
              page = doc.addPage([pageW, pageH]);
              pageIndex += 1;
              y = pageH - marginYTop;
            }
            page.drawText(line, { x: marginX, y: y, size: fontSize, font: font, maxWidth: pageW - marginX * 2 });
            y -= lineHeight;
          });
          return doc.save();
        }).then(function (bytes) {
          return new Uint8Array(bytes);
        });
      }

      function createPdf() {
        setErr('');
        setStatus('');
        btnDownload.disabled = true;
        work.setBusy(busyBtns, true);
        work.setProgress(null);
        setStatus(msg.working);
        return window.OftPdfWork.yieldUi()
          .then(function () { return buildPdfFromText(); })
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
            var eStr = String(err && err.message ? err.message : err);
            if (/empty/i.test(eStr)) setErr(msg.empty);
            else setErr(msg.createFail);
            setStatus('');
            work.clearPreview();
          })
          .finally(function () {
            work.setBusy(busyBtns, false);
            work.hideProgress();
            btnDownload.disabled = !resultBytes;
          });
      }

      /** 加载样例：写入示例文本并自动导出 */
      function loadSample() {
        textarea.value = 'Hello write PDF sample.\\n\\nSecond paragraph: this PDF is generated fully in your browser.\\n\\nTip: adjust font size, click “Create PDF”, and download the result.';
        return createPdf();
      }

      btnCreate.addEventListener('click', createPdf);
      btnDownload.addEventListener('click', downloadResult);

      btnSample.addEventListener('click', loadSample);
      btnClear.addEventListener('click', function () {
        textarea.value = '';
        resultBytes = null;
        btnDownload.disabled = true;
        work.clearPreview();
        work.hideProgress();
        setErr('');
        setStatus('');
      });

      // 初始化：默认加载样例
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('write-pdf-document-online');
	const toolSeoHtml = toolMeta
		? renderToolExtraSections({
				lang: opts.lang,
				defaultLang: opts.defaultLang,
				tool: toolMeta,
				enabledLangs: supportedLangs,
			})
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
		contentHtml: contentHtml + igHtml + (toolSeoHtml || '') + referencesHtml,
		footerHtml,
		extraHeadHtml: extraHeadHtml + toolJsonLd,
		extraBodyHtml,
		includeSidebarToggleScript: true,
		sidebarAutoCloseSelector: '#toolNav a',
	});
};

