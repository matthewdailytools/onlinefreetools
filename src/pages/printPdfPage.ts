/**
 * Print a PDF 工具页：在浏览器中预览并触发系统打印（纯客户端）。
 * slug: print-pdf
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
	pdfWorkUiClientScript,
	pdfWorkUiCss,
	pdfWorkUiLabels,
	pdfWorkUiProgressHtml,
} from './site/pdfWorkUi';

/** 非默认语言时为路径加语言前缀。 */
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * 渲染 print-pdf 工具页。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderPrintPdfPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/print-pdf';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);

	const prefix = 'tool_print_pdf';
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
			currentSlug: 'print-pdf',
			currentAnchor: '#converter',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	const pdfWorkLabels = pdfWorkUiLabels(opts.lang);
	const extraHeadHtml = `
  <style>
    .tools-bar { gap: .5rem; }
    #printFrame { width: 100%; height: 520px; border: 1px solid #dee2e6; border-radius: .25rem; background: #fff; }
    ${pdfWorkUiCss()}
  </style>`;

	const contentHtml = `
    <div id="converter" class="tool-page-heading mb-3">
      <h1 class="h4 mb-0">${escapeHtml(t(opts.lang, prefix + '_title'))}</h1>
    </div>

    <label class="tool-dropzone mb-3" id="printDrop" for="printPdfFile">
      <input type="file" id="printPdfFile" accept="application/pdf,.pdf">
      <span class="tool-dropzone-title">${escapeHtml(t(opts.lang, prefix + '_choose_file'))}</span>
      <span class="tool-dropzone-hint">${escapeHtml(t(opts.lang, prefix + '_drop_hint'))}</span>
    </label>

    <div class="d-flex align-items-center tools-bar mb-2 flex-wrap">
      <button type="button" id="printBtnPrint" class="btn btn-primary btn-sm" disabled>${escapeHtml(t(opts.lang, prefix + '_print'))}</button>
      <button type="button" id="printBtnDownload" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(t(opts.lang, prefix + '_download'))}</button>
      <button type="button" id="printBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, prefix + '_sample'))}</button>
      <button type="button" id="printBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, prefix + '_clear'))}</button>
    </div>

    <p id="printPdfError" class="small text-danger mb-2" style="display:none;" role="alert"></p>
    <p id="printPdfStatus" class="small text-muted mb-2" role="status"></p>
    ${pdfWorkUiProgressHtml({ idPrefix: 'printPdf', labels: pdfWorkLabels })}

    <p class="small text-muted mb-1">${escapeHtml(t(opts.lang, prefix + '_viewer_label'))}</p>
    <iframe id="printFrame" title="PDF preview" aria-label="PDF preview"></iframe>

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
		links: [{ label: 'PDF.js', href: 'https://mozilla.github.io/pdf.js/' }],
	});

	const extraBodyHtml = `
  ${pdfWorkUiClientScript()}
  <script src="/vendor/pdf-lib/pdf-lib.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script>
    (function () {
      var fileInput = document.getElementById('printPdfFile');
      var frame = document.getElementById('printFrame');
      var btnPrint = document.getElementById('printBtnPrint');
      var btnDownload = document.getElementById('printBtnDownload');
      var btnSample = document.getElementById('printBtnSample');
      var btnClear = document.getElementById('printBtnClear');
      var errEl = document.getElementById('printPdfError');
      var statusEl = document.getElementById('printPdfStatus');
      var work = window.OftPdfWork.bind('printPdf');
      var busyBtns = [btnPrint, btnSample, btnClear, btnDownload];

      var sourceBytes = null;
      var blobUrl = null;

      var msg = {
        empty: ${JSON.stringify(t(opts.lang, prefix + '_empty'))},
        encrypted: ${JSON.stringify(t(opts.lang, prefix + '_err_encrypted'))},
        loadFail: ${JSON.stringify(t(opts.lang, prefix + '_err_load'))},
        convertFail: ${JSON.stringify(t(opts.lang, prefix + '_err_convert'))},
        working: ${JSON.stringify(t(opts.lang, prefix + '_status_working'))},
        done: ${JSON.stringify(t(opts.lang, prefix + '_status_done'))},
      };

      function setErr(text) {
        if (!text) { errEl.style.display = 'none'; errEl.textContent = ''; return; }
        errEl.textContent = text;
        errEl.style.display = '';
      }
      function setStatus(text) { statusEl.textContent = text || ''; }

      function clearPreview() {
        if (blobUrl) URL.revokeObjectURL(blobUrl);
        blobUrl = null;
        frame.removeAttribute('src');
        sourceBytes = null;
        btnPrint.disabled = true;
        btnDownload.disabled = true;
      }

      function downloadResult() {
        if (!sourceBytes) return;
        var blob = new Blob([sourceBytes], { type: 'application/pdf' });
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = 'print.pdf';
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      }

      function renderToFrame(bytes) {
        if (blobUrl) URL.revokeObjectURL(blobUrl);
        blobUrl = null;
        sourceBytes = bytes;
        blobUrl = URL.createObjectURL(new Blob([sourceBytes], { type: 'application/pdf' }));
        frame.src = blobUrl;
        btnPrint.disabled = false;
        btnDownload.disabled = false;
      }

      function doPrint() {
        if (!frame || !frame.contentWindow) return;
        work.setBusy(busyBtns, true);
        work.setProgress(null);
        setStatus(msg.working);
        window.OftPdfWork.yieldUi().then(function () {
          try {
            frame.contentWindow.focus();
            frame.contentWindow.print();
          } catch (e) {
            window.print();
          }
          setStatus(msg.done);
        }).finally(function () {
          work.setBusy(busyBtns, false);
          work.hideProgress();
          btnPrint.disabled = !sourceBytes;
          btnDownload.disabled = !sourceBytes;
        });
      }

      function makeSamplePdf(text) {
        if (!window.PDFLib || !PDFLib.PDFDocument) return Promise.reject(new Error('pdflib'));
        return PDFLib.PDFDocument.create().then(function (doc) {
          var page = doc.addPage([420, 300]);
          return doc.embedFont(PDFLib.StandardFonts.HelveticaBold).then(function (font) {
            page.drawText(text || 'Hello print sample.', { x: 48, y: 170, size: 22, font: font });
            page.drawText('Generated for browser printing.', { x: 48, y: 130, size: 12, font: font });
            return doc.save();
          });
        }).then(function (bytes) {
          return new Uint8Array(bytes);
        });
      }

      function loadSample() {
        setErr('');
        work.setBusy(busyBtns, true);
        work.setProgress(null);
        setStatus(msg.working);
        makeSamplePdf('Hello print sample.')
          .then(function (bytes) {
            renderToFrame(bytes);
            work.setProgress(100);
            setStatus(msg.done);
          })
          .catch(function () {
            setErr(msg.convertFail);
            setStatus('');
          })
          .finally(function () {
            work.setBusy(busyBtns, false);
            work.hideProgress();
            btnPrint.disabled = !sourceBytes;
            btnDownload.disabled = !sourceBytes;
          });
      }

      fileInput.addEventListener('change', function () {
        setErr('');
        setStatus('');
        if (!fileInput.files || !fileInput.files[0]) return;
        var f = fileInput.files[0];
        work.setBusy(busyBtns, true);
        work.setProgress(null);
        f.arrayBuffer().then(function (ab) {
          renderToFrame(new Uint8Array(ab));
          setStatus(msg.done);
        }).catch(function () {
          setErr(msg.loadFail);
        }).finally(function () {
          work.setBusy(busyBtns, false);
          work.hideProgress();
          btnPrint.disabled = !sourceBytes;
          btnDownload.disabled = !sourceBytes;
        });
        fileInput.value = '';
      });

      btnPrint.addEventListener('click', function () {
        setErr('');
        doPrint();
      });
      btnDownload.addEventListener('click', downloadResult);
      btnSample.addEventListener('click', loadSample);
      btnClear.addEventListener('click', function () {
        clearPreview();
        setErr('');
        setStatus('');
        fileInput.value = '';
        loadSample();
      });

      // 初始化：加载样例
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('print-pdf');
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

