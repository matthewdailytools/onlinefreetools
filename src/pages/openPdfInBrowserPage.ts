/**
 * 在浏览器中打开 PDF：pdf.js canvas 分页预览（纯客户端）。
 * slug: open-pdf-in-browser
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

export const renderOpenPdfInBrowserPage = (opts: {
  lang: SiteLang; defaultLang: SiteLang; enabledLangs: SiteLang[];
}) => {
  const toolPath = '/tools/open-pdf-in-browser';
  const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
  const prefix = 'tool_open_pdf_in_browser';
  const title = `${t(opts.lang, prefix + '_title')} | ${t(opts.lang, 'brand')}`;
  const description = t(opts.lang, prefix + '_description');
  const navItems = buildToolPageNavItems(opts.lang, opts.defaultLang);
  const withExplicitLangPrefix = (code: SiteLang, pathname: string) => {
    const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
    return `/${code}${safe}`.replace(/\/{2,}/g, '/');
  };
  const langAlternates = Object.fromEntries((supportedLangs || []).map((c) => [c, withExplicitLangPrefix(c, toolPath)]));
  const alternates = (supportedLangs || []).map((code) => ({
    lang: code, href: `https://onlinefreetools.org${withLangPrefix(code, toolPath, opts.defaultLang)}`,
  }));
  const headerHtml = renderHeader({ lang: opts.lang, brandHref: withLangPrefix(opts.lang, '/', opts.defaultLang), navItems, enabledLangs: supportedLangs, langAlternates });
  const sidebarHtml = renderSidebar({ title: t(opts.lang, 'nav_tools'), groups: buildToolSidebarItems({ lang: opts.lang, defaultLang: opts.defaultLang, currentSlug: 'open-pdf-in-browser', currentAnchor: '#converter' }), id: 'toolNav' });
  const footerHtml = renderFooter({ lang: opts.lang });
  const pdfWorkLabels = pdfWorkUiLabels(opts.lang);
  const extraHeadHtml = `<style>.tools-bar{gap:.5rem}#opbCanvas{max-width:100%;border:1px solid #dee2e6;border-radius:.25rem;background:#f8f9fa}${pdfWorkUiCss()}</style>`;
  const contentHtml = `
    <div id="converter" class="tool-page-heading mb-3"><h1 class="h4 mb-0">${escapeHtml(t(opts.lang, prefix + '_title'))}</h1></div>
    <label class="tool-dropzone mb-3" for="opbFile"><input type="file" id="opbFile" accept="application/pdf,.pdf">
      <span class="tool-dropzone-title">${escapeHtml(t(opts.lang, prefix + '_choose_file'))}</span>
      <span class="tool-dropzone-hint">${escapeHtml(t(opts.lang, prefix + '_drop_hint'))}</span></label>
    <div class="d-flex tools-bar mb-2 flex-wrap align-items-center">
      <button type="button" id="opbPrev" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, prefix + '_prev'))}</button>
      <span id="opbPageInfo" class="small text-muted mx-2"></span>
      <button type="button" id="opbNext" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, prefix + '_next'))}</button>
      <button type="button" id="opbSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, prefix + '_sample'))}</button>
      <button type="button" id="opbClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, prefix + '_clear'))}</button>
    </div>
    <p id="opbError" class="small text-danger mb-2" style="display:none;"></p>
    ${pdfWorkUiProgressHtml({ idPrefix: 'opbPdf', labels: pdfWorkLabels })}
    <p class="small text-muted mb-1">${escapeHtml(t(opts.lang, prefix + '_viewer_label'))}</p>
    <canvas id="opbCanvas" class="mb-3"></canvas>
    <p class="tool-lead mb-4">${escapeHtml(description)}</p>`;
  const igHtml = renderToolIgSections({ lang: opts.lang, prefix, mode: 'rules', usecaseCount: 3, ruleItemCount: 4 });
  const referencesHtml = renderToolReferencesSection({ lang: opts.lang, links: [{ label: 'PDF.js', href: 'https://mozilla.github.io/pdf.js/' }] });
  const extraBodyHtml = `
  ${pdfWorkUiClientScript()}
  <script src="https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/dist/pdf-lib.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script>
    (function () {
      var fileInput = document.getElementById('opbFile');
      var canvas = document.getElementById('opbCanvas');
      var btnPrev = document.getElementById('opbPrev');
      var btnNext = document.getElementById('opbNext');
      var btnSample = document.getElementById('opbSample');
      var btnClear = document.getElementById('opbClear');
      var pageInfo = document.getElementById('opbPageInfo');
      var errEl = document.getElementById('opbError');
      var work = window.OftPdfWork.bind('opbPdf');
      var busyBtns = [btnSample, btnClear, btnPrev, btnNext];
      var msg = { sampleText: 'Hello browser viewer sample.', pageTpl: ${JSON.stringify(t(opts.lang, prefix + '_page_label'))} + ' {n} / {total}' };
      var source = null, currentPage = 1, totalPages = 0;
      function setErr(t) { errEl.textContent = t || ''; errEl.style.display = t ? '' : 'none'; }
      
      function ensurePdfJs() {
        if (window.pdfjsLib) return Promise.resolve(window.pdfjsLib);
        return import('https://cdn.jsdelivr.net/npm/pdfjs-dist@4.10.38/build/pdf.min.mjs').then(function (mod) {
          mod.GlobalWorkerOptions.workerSrc = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@4.10.38/build/pdf.worker.min.mjs';
          window.pdfjsLib = mod;
          return mod;
        }).catch(function () { throw new Error('pdfjs'); });
      }
      function hasPdfLib() {
        return typeof PDFLib !== 'undefined' && PDFLib && typeof PDFLib.PDFDocument === 'function';
      }
      function makeSamplePdf(text) {
        if (!hasPdfLib()) return Promise.reject(new Error('pdflib'));
        return PDFLib.PDFDocument.create().then(function (doc) {
          return doc.embedFont(PDFLib.StandardFonts.Helvetica).then(function (font) {
            var page = doc.addPage([420, 300]);
            page.drawText(text || 'Sample PDF.', { x: 48, y: 160, size: 16, font: font });
            return doc.save();
          });
        }).then(function (bytes) {
          return new File([bytes], 'sample.pdf', { type: 'application/pdf' });
        });
      }
      function renderPageToCanvas(bytes, pageNum, canvas, scale) {
        return ensurePdfJs().then(function (pdfjsLib) {
          return pdfjsLib.getDocument({ data: bytes.slice(0) }).promise;
        }).then(function (doc) {
          return doc.getPage(pageNum).then(function (page) {
            var viewport = page.getViewport({ scale: scale || 1.2 });
            canvas.width = viewport.width;
            canvas.height = viewport.height;
            return page.render({ canvasContext: canvas.getContext('2d'), viewport: viewport }).promise.then(function () {
              return doc.numPages;
            });
          });
        });
      }

      function showPage() {
        if (!source) return Promise.resolve();
        work.setProgress(null);
        return renderPageToCanvas(source.bytes, currentPage, canvas, 1.3).then(function (n) {
          totalPages = n;
          pageInfo.textContent = msg.pageTpl.replace('{n}', String(currentPage)).replace('{total}', String(totalPages));
          work.setProgress(100);
        }).catch(function () { setErr('load'); }).finally(function () { work.hideProgress(); });
      }
      function loadBytes(bytes) { source = { bytes: bytes }; currentPage = 1; return showPage(); }
      fileInput.addEventListener('change', function () {
        if (!fileInput.files || !fileInput.files[0]) return;
        work.setBusy(busyBtns, true);
        work.setProgress(null);
        fileInput.files[0].arrayBuffer().then(function (b) { return loadBytes(new Uint8Array(b)); })
          .finally(function () { work.setBusy(busyBtns, false); });
        fileInput.value = '';
      });
      btnPrev.addEventListener('click', function () { if (currentPage > 1) { currentPage--; showPage(); } });
      btnNext.addEventListener('click', function () { if (currentPage < totalPages) { currentPage++; showPage(); } });
      btnClear.addEventListener('click', function () {
        source = null; pageInfo.textContent = ''; setErr('');
        var ctx = canvas.getContext('2d'); ctx && ctx.clearRect(0, 0, canvas.width, canvas.height);
        fileInput.value = '';
        work.hideProgress();
      });
      function loadSample() {
        work.setBusy(busyBtns, true);
        work.setProgress(null);
        makeSamplePdf(msg.sampleText).then(function (f) {
          return f.arrayBuffer().then(function (b) { return loadBytes(new Uint8Array(b)); });
        }).catch(function () { setErr('pdflib'); })
          .finally(function () { work.setBusy(busyBtns, false); });
      }
      btnSample.addEventListener('click', loadSample);
      loadSample();
    })();
  </script>`;
  const toolMeta = getToolBySlug('open-pdf-in-browser');
  const toolSeoHtml = toolMeta ? renderToolExtraSections({ lang: opts.lang, defaultLang: opts.defaultLang, tool: toolMeta }) : '';
  const toolJsonLd = toolMeta ? buildToolJsonLd({ lang: opts.lang, defaultLang: opts.defaultLang, tool: toolMeta, name: t(opts.lang, toolMeta.i18nKey as any), description, canonicalPath }) : '';
  return renderLayout({ lang: opts.lang, title, description, canonicalPath, ogImageUrl: 'https://onlinefreetools.org/og-image.png', ogType: 'website', alternates, headerHtml, sidebarHtml, contentHtml: contentHtml + igHtml + toolSeoHtml + referencesHtml, footerHtml, extraHeadHtml: extraHeadHtml + toolJsonLd, extraBodyHtml, includeSidebarToggleScript: true, sidebarAutoCloseSelector: '#toolNav a' });
};
