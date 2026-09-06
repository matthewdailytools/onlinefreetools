/**
 * Add text to a PDF file 工具页：在每一页的指定坐标绘制文本（纯客户端）。
 * slug: add-text-to-pdf-file
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
 * 渲染 add-text-to-pdf-file 工具页。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderAddTextToPdfFilePage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/add-text-to-pdf-file';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);

	const prefix = 'tool_add_text_to_pdf_file';
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
			currentSlug: 'add-text-to-pdf-file',
			currentAnchor: '#converter',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	const pdfWorkLabels = pdfWorkUiLabels(opts.lang);
	const extraHeadHtml = `
  <style>
    .tools-bar { gap: .5rem; }
    ${pdfWorkUiCss()}
  </style>`;

	const contentHtml = `
    <div id="converter" class="tool-page-heading mb-3">
      <h1 class="h4 mb-0">${escapeHtml(t(opts.lang, prefix + '_title'))}</h1>
    </div>

    <label class="tool-dropzone mb-3" id="addTextDrop" for="addTextFile">
      <input type="file" id="addTextFile" accept="application/pdf,.pdf">
      <span class="tool-dropzone-title">${escapeHtml(t(opts.lang, prefix + '_choose_file'))}</span>
      <span class="tool-dropzone-hint">${escapeHtml(t(opts.lang, prefix + '_drop_hint'))}</span>
    </label>

    <p id="addTextMeta" class="small text-muted mb-2" style="display:none;"></p>

    <div class="row g-2 mb-2 add-text-controls">
      <div class="col-12 col-md-6">
        <label class="form-label" for="addTextText">${escapeHtml(t(opts.lang, prefix + '_text_label'))}</label>
        <input id="addTextText" class="form-control form-control-sm" type="text" value="CONFIDENTIAL" maxlength="120">
      </div>
      <div class="col-6 col-md-3">
        <label class="form-label" for="addTextX">${escapeHtml(t(opts.lang, prefix + '_x_label'))}</label>
        <input id="addTextX" class="form-control form-control-sm" type="number" value="48">
      </div>
      <div class="col-6 col-md-3">
        <label class="form-label" for="addTextY">${escapeHtml(t(opts.lang, prefix + '_y_label'))}</label>
        <input id="addTextY" class="form-control form-control-sm" type="number" value="160">
      </div>
      <div class="col-12 col-md-4">
        <label class="form-label" for="addTextFontSize">${escapeHtml(t(opts.lang, prefix + '_font_size'))}</label>
        <input id="addTextFontSize" class="form-control form-control-sm" type="number" value="16" min="6" max="72" step="1">
      </div>
    </div>

    <div class="d-flex align-items-center tools-bar mb-2 flex-wrap">
      <button type="button" id="addTextBtnApply" class="btn btn-primary btn-sm">${escapeHtml(t(opts.lang, prefix + '_apply'))}</button>
      <button type="button" id="addTextBtnDownload" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(t(opts.lang, prefix + '_download'))}</button>
      <button type="button" id="addTextBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, prefix + '_sample'))}</button>
      <button type="button" id="addTextBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, prefix + '_clear'))}</button>
    </div>

    <p id="addTextWarn" class="small text-warning mb-2" style="display:none;"></p>
    <p id="addTextError" class="small text-danger mb-2" style="display:none;"></p>
    <p id="addTextStatus" class="small text-muted mb-2"></p>
    ${pdfWorkUiBlockHtml({ idPrefix: 'addTextPdf', labels: pdfWorkLabels })}

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
      var SOFT_BYTES = 25 * 1024 * 1024;

      var fileInput = document.getElementById('addTextFile');
      var textInput = document.getElementById('addTextText');
      var xInput = document.getElementById('addTextX');
      var yInput = document.getElementById('addTextY');
      var fontSizeInput = document.getElementById('addTextFontSize');
      var btnApply = document.getElementById('addTextBtnApply');
      var btnDownload = document.getElementById('addTextBtnDownload');
      var btnSample = document.getElementById('addTextBtnSample');
      var btnClear = document.getElementById('addTextBtnClear');
      var warnEl = document.getElementById('addTextWarn');
      var errEl = document.getElementById('addTextError');
      var statusEl = document.getElementById('addTextStatus');
      var work = window.OftPdfWork.bind('addTextPdf');
      var busyBtns = [btnApply, btnSample, btnClear, btnDownload];

      var sourceBytes = null;
      var sourceName = '';
      var resultBytes = null;

      var msg = {
        empty: ${JSON.stringify(t(opts.lang, prefix + '_empty'))},
        encrypted: ${JSON.stringify(t(opts.lang, prefix + '_err_encrypted'))},
        loadFail: ${JSON.stringify(t(opts.lang, prefix + '_err_load'))},
        applyFail: ${JSON.stringify(t(opts.lang, prefix + '_err_convert'))},
        large: ${JSON.stringify(t(opts.lang, prefix + '_warn_large'))},
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

      function setWarn(text) {
        if (!text) { warnEl.style.display = 'none'; warnEl.textContent = ''; return; }
        warnEl.textContent = text;
        warnEl.style.display = '';
      }

      function setStatus(text) {
        statusEl.textContent = text || '';
      }

      function clearAll() {
        sourceBytes = null;
        sourceName = '';
        resultBytes = null;
        btnDownload.disabled = true;
        work.clearPreview();
        work.hideProgress();
        setErr('');
        setWarn('');
        setStatus('');
        fileInput.value = '';
      }

      function downloadResult() {
        if (!resultBytes) return;
        var blob = new Blob([resultBytes], { type: 'application/pdf' });
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = 'text-added.pdf';
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      }

      function applyTextToPdf(onProgress) {
        if (!hasPdfLib()) return Promise.reject(new Error('pdflib'));
        if (!sourceBytes) return Promise.reject(new Error('empty'));

        var text = (textInput.value || '').toString();
        var x = Number(xInput.value || 0);
        var y = Number(yInput.value || 0);
        var fontSize = Number(fontSizeInput.value || 16);

        return PDFLib.PDFDocument.load(sourceBytes).then(function (doc) {
          return Promise.resolve(doc.embedFont(PDFLib.StandardFonts.Helvetica)).then(function (font) {
            var pages = doc.getPages();
            var total = pages.length || 1;
            var chain = Promise.resolve();
            pages.forEach(function (p, idx) {
              chain = chain.then(function () {
                return window.OftPdfWork.drawPageText(doc, p, text, {
                  x: x,
                  y: y,
                  size: fontSize,
                  font: font,
                }).then(function () {
                  if (onProgress) onProgress(idx + 1, total);
                });
              });
            });
            return chain.then(function () { return doc.save(); });
          });
        }).then(function (bytes) {
          return new Uint8Array(bytes);
        });
      }

      /**
       * 应用文本并刷新进度/预览。
       * @returns {Promise<void>}
       */
      function runApply() {
        if (!sourceBytes) { setErr(msg.empty); return Promise.resolve(); }
        work.setBusy(busyBtns, true);
        work.setProgress(null);
        setStatus(msg.working);
        btnDownload.disabled = true;
        return window.OftPdfWork.yieldUi()
          .then(function () {
            return applyTextToPdf(function (done, total) {
              work.setProgress((done / total) * 80);
            });
          })
          .then(function (bytes) {
            resultBytes = bytes;
            work.setProgress(90);
            return work.showPreview(bytes).then(function () { return bytes; });
          })
          .then(function () {
            work.setProgress(100);
            btnDownload.disabled = false;
            setStatus(msg.done);
          })
          .catch(function (err) {
            var eStr = String(err && err.message ? err.message : err);
            if (/password/i.test(eStr)) setErr(msg.encrypted);
            else setErr(msg.applyFail);
            setStatus('');
          })
          .finally(function () {
            work.setBusy(busyBtns, false);
            work.hideProgress();
            btnDownload.disabled = !resultBytes;
          });
      }

      function loadSamplePdf() {
        // 生成一个样例 PDF，再把“CONFIDENTIAL”写进去
        return PDFLib.PDFDocument.create().then(function (doc) {
          var page = doc.addPage([420, 300]);
          return doc.embedFont(PDFLib.StandardFonts.Helvetica).then(function (font) {
            page.drawText('Sample PDF', { x: 48, y: 180, size: 14, font: font });
            page.drawText('Load sample on entry', { x: 48, y: 140, size: 12, font: font });
            return doc.save();
          });
        }).then(function (bytes) {
          sourceBytes = new Uint8Array(bytes);
          return runApply();
        });
      }

      /** smoke / 进页样例入口（lint:tool-page 要求字面 loadSample）。 */
      function loadSample() {
        return loadSamplePdf();
      }

      /** 处理用户上传 */
      fileInput.addEventListener('change', function () {
        if (!fileInput.files || !fileInput.files[0]) return;
        var f = fileInput.files[0];
        setErr('');
        setWarn('');
        setStatus('');
        resultBytes = null;
        btnDownload.disabled = true;
        work.clearPreview();
        if (f.size > SOFT_BYTES) setWarn(msg.large);
        work.setBusy(busyBtns, true);
        work.setProgress(null);
        f.arrayBuffer().then(function (ab) {
          sourceBytes = new Uint8Array(ab);
          sourceName = f.name || '';
          return work.showPreview(sourceBytes);
        }).then(function () {
          setStatus('');
        }).catch(function () {
          setErr(msg.loadFail);
          sourceBytes = null;
        }).finally(function () {
          work.setBusy(busyBtns, false);
          work.hideProgress();
        });
        fileInput.value = '';
      });

      btnApply.addEventListener('click', function () {
        setErr('');
        setWarn('');
        runApply();
      });

      btnDownload.addEventListener('click', downloadResult);

      btnSample.addEventListener('click', function () {
        setErr('');
        setWarn('');
        loadSample();
      });

      btnClear.addEventListener('click', function () {
        clearAll();
        loadSample();
      });

      // 初始化：自动加载样例并生成可下载结果
      loadSample();
    })();
  </script>`;

	const igLinks = [
		{ label: 'pdf-lib', href: 'https://pdf-lib.js.org/' },
	];

	const toolMeta = getToolBySlug('add-text-to-pdf-file');
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

