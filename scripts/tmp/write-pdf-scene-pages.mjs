/**
 * Write remaining PDF scene Page.ts files (all except extract-text-from-pdf).
 * Run: node scripts/tmp/write-pdf-scene-pages.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const pagesDir = path.join(root, 'src/pages');

/** Shared TS imports and shell opener. */
const HEAD = `import type { SiteLang } from '../site/i18n';
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
  const safe = pathname.startsWith('/') ? pathname : \`/\${pathname}\`;
  return lang === defaultLang ? safe : \`/\${lang}\${safe}\`;
};
`;

/** Shared layout footer for all pages. */
function layoutTail(slug, prefix, exportFn, extraHead, contentHtml, extraBody, refs) {
	return `${HEAD}
/** 渲染工具页。 slug: ${slug} */
export const ${exportFn} = (opts: {
  lang: SiteLang;
  defaultLang: SiteLang;
  enabledLangs: SiteLang[];
}) => {
  const toolPath = '/tools/${slug}';
  const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
  const prefix = '${prefix}';
  const title = \`\${t(opts.lang, prefix + '_title')} | \${t(opts.lang, 'brand')}\`;
  const description = t(opts.lang, prefix + '_description');
  const navItems = buildToolPageNavItems(opts.lang, opts.defaultLang);
  const withExplicitLangPrefix = (code: SiteLang, pathname: string) => {
    const safe = pathname.startsWith('/') ? pathname : \`/\${pathname}\`;
    return \`/\${code}\${safe}\`.replace(/\\/{2,}/g, '/');
  };
  const langAlternates: Record<string, string> = Object.fromEntries(
    (supportedLangs || []).map((code) => [code, withExplicitLangPrefix(code, toolPath)])
  );
  const alternates: HreflangAlternate[] = (supportedLangs || []).map((code) => ({
    lang: code,
    href: \`https://onlinefreetools.org\${withLangPrefix(code, toolPath, opts.defaultLang)}\`,
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
      currentSlug: '${slug}',
      currentAnchor: '#converter',
    }),
    id: 'toolNav',
  });
  const footerHtml = renderFooter({ lang: opts.lang });
  const extraHeadHtml = \`${extraHead}\`;
  const contentHtml = \`${contentHtml}\`;
  const igHtml = renderToolIgSections({
    lang: opts.lang,
    prefix,
    mode: 'rules',
    usecaseCount: 3,
    ruleItemCount: 4,
  });
  const referencesHtml = renderToolReferencesSection({
    lang: opts.lang,
    links: ${JSON.stringify(refs)},
  });
  const extraBodyHtml = \`${extraBody}\`;
  const toolMeta = getToolBySlug('${slug}');
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
    contentHtml: \`\${contentHtml}\${igHtml}\${toolSeoHtml}\${referencesHtml}\`,
    footerHtml,
    extraHeadHtml: \`\${extraHeadHtml}\${toolJsonLd}\`,
    extraBodyHtml,
    includeSidebarToggleScript: true,
    sidebarAutoCloseSelector: '#toolNav a',
  });
};
`;
}

/** pdf.js + pdf-lib helpers used in multiple pages. */
const PDF_HELPERS = `
      function ensurePdfJs() {
        if (window.pdfjsLib) return Promise.resolve(window.pdfjsLib);
        return import('/vendor/pdfjs/pdf.min.mjs').then(function (mod) {
          mod.GlobalWorkerOptions.workerSrc = '/vendor/pdfjs/pdf.worker.min.mjs';
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
`;

const pages = {
	openPdfInBrowserPage: layoutTail(
		'open-pdf-in-browser',
		'tool_open_pdf_in_browser',
		'renderOpenPdfInBrowserPage',
		`
  <style>
    .tools-bar { gap: .5rem; }
    #opbCanvas { max-width: 100%; border: 1px solid #dee2e6; border-radius: .25rem; background: #f8f9fa; }
  </style>`,
		`
    <div id="converter" class="tool-page-heading mb-3">
      <h1 class="h4 mb-0">\${escapeHtml(t(opts.lang, prefix + '_title'))}</h1>
    </div>
    <label class="tool-dropzone mb-3" for="opbFile">
      <input type="file" id="opbFile" accept="application/pdf,.pdf">
      <span class="tool-dropzone-title">\${escapeHtml(t(opts.lang, prefix + '_choose_file'))}</span>
      <span class="tool-dropzone-hint">\${escapeHtml(t(opts.lang, prefix + '_drop_hint'))}</span>
    </label>
    <div class="d-flex tools-bar mb-2 flex-wrap align-items-center">
      <button type="button" id="opbPrev" class="btn btn-outline-secondary btn-sm">\${escapeHtml(t(opts.lang, prefix + '_prev'))}</button>
      <span id="opbPageInfo" class="small text-muted mx-2"></span>
      <button type="button" id="opbNext" class="btn btn-outline-secondary btn-sm">\${escapeHtml(t(opts.lang, prefix + '_next'))}</button>
      <button type="button" id="opbSample" class="btn btn-outline-secondary btn-sm">\${escapeHtml(t(opts.lang, prefix + '_sample'))}</button>
      <button type="button" id="opbClear" class="btn btn-outline-secondary btn-sm">\${escapeHtml(t(opts.lang, prefix + '_clear'))}</button>
    </div>
    <p id="opbError" class="small text-danger mb-2" style="display:none;"></p>
    <p class="small text-muted mb-1">\${escapeHtml(t(opts.lang, prefix + '_viewer_label'))}</p>
    <canvas id="opbCanvas" class="mb-3"></canvas>
    <p class="tool-lead mb-4">\${escapeHtml(description)}</p>`,
		`
  <script src="/vendor/pdf-lib/pdf-lib.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
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
      var msg = { sampleText: 'Hello browser viewer sample.', pageLabel: \${JSON.stringify('PAGE_LABEL_PLACEHOLDER')}};
      var source = null;
      var currentPage = 1;
      var totalPages = 0;
      function setErr(t) { errEl.textContent = t || ''; errEl.style.display = t ? '' : 'none'; }
      ${PDF_HELPERS}
      function showPage() {
        if (!source) return;
        renderPageToCanvas(source.bytes, currentPage, canvas, 1.3).then(function (n) {
          totalPages = n;
          pageInfo.textContent = msg.pageLabel.replace('{n}', String(currentPage)).replace('{total}', String(totalPages));
        }).catch(function () { setErr('load'); });
      }
      function loadBytes(bytes, name) {
        source = { bytes: bytes, name: name || 'doc.pdf' };
        currentPage = 1;
        showPage();
      }
      fileInput.addEventListener('change', function () {
        if (!fileInput.files || !fileInput.files[0]) return;
        var f = fileInput.files[0];
        f.arrayBuffer().then(function (b) { loadBytes(new Uint8Array(b), f.name); });
        fileInput.value = '';
      });
      btnPrev.addEventListener('click', function () { if (currentPage > 1) { currentPage--; showPage(); } });
      btnNext.addEventListener('click', function () { if (currentPage < totalPages) { currentPage++; showPage(); } });
      btnClear.addEventListener('click', function () {
        source = null; totalPages = 0; currentPage = 1;
        pageInfo.textContent = ''; setErr('');
        var ctx = canvas.getContext('2d');
        ctx && ctx.clearRect(0, 0, canvas.width, canvas.height);
        fileInput.value = '';
      });
      function loadSample() {
        makeSamplePdf(msg.sampleText).then(function (file) {
          return file.arrayBuffer().then(function (b) { loadBytes(new Uint8Array(b), file.name); });
        }).catch(function () { setErr('pdflib'); });
      }
      btnSample.addEventListener('click', loadSample);
      loadSample();
    })();
  </script>`.replace(
			'PAGE_LABEL_PLACEHOLDER',
			'${t(opts.lang, prefix + \'_page_label\')} {n} / {total}'
		),
		[
			{ label: 'PDF.js', href: 'https://mozilla.github.io/pdf.js/' },
			{ label: 'pdf-lib', href: 'https://pdf-lib.js.org/' },
		]
	),
};

// Fix open-pdf page - the placeholder approach won't work in layoutTail. Write files manually below.
console.log('writing pages...');

// open-pdf-in-browser
fs.writeFileSync(
	path.join(pagesDir, 'openPdfInBrowserPage.ts'),
	`/**
 * 在浏览器中打开 PDF：pdf.js canvas 分页预览（纯客户端）。
 * slug: open-pdf-in-browser
 */
${HEAD}
export const renderOpenPdfInBrowserPage = (opts: {
  lang: SiteLang; defaultLang: SiteLang; enabledLangs: SiteLang[];
}) => {
  const toolPath = '/tools/open-pdf-in-browser';
  const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
  const prefix = 'tool_open_pdf_in_browser';
  const title = \`\${t(opts.lang, prefix + '_title')} | \${t(opts.lang, 'brand')}\`;
  const description = t(opts.lang, prefix + '_description');
  const navItems = buildToolPageNavItems(opts.lang, opts.defaultLang);
  const withExplicitLangPrefix = (code: SiteLang, pathname: string) => {
    const safe = pathname.startsWith('/') ? pathname : \`/\${pathname}\`;
    return \`/\${code}\${safe}\`.replace(/\\/{2,}/g, '/');
  };
  const langAlternates = Object.fromEntries((supportedLangs || []).map((c) => [c, withExplicitLangPrefix(c, toolPath)]));
  const alternates = (supportedLangs || []).map((code) => ({
    lang: code, href: \`https://onlinefreetools.org\${withLangPrefix(code, toolPath, opts.defaultLang)}\`,
  }));
  const headerHtml = renderHeader({ lang: opts.lang, brandHref: withLangPrefix(opts.lang, '/', opts.defaultLang), navItems, enabledLangs: supportedLangs, langAlternates });
  const sidebarHtml = renderSidebar({ title: t(opts.lang, 'nav_tools'), groups: buildToolSidebarItems({ lang: opts.lang, defaultLang: opts.defaultLang, currentSlug: 'open-pdf-in-browser', currentAnchor: '#converter' }), id: 'toolNav' });
  const footerHtml = renderFooter({ lang: opts.lang });
  const extraHeadHtml = '<style>.tools-bar{gap:.5rem}#opbCanvas{max-width:100%;border:1px solid #dee2e6;border-radius:.25rem;background:#f8f9fa}</style>';
  const contentHtml = \`
    <div id="converter" class="tool-page-heading mb-3"><h1 class="h4 mb-0">\${escapeHtml(t(opts.lang, prefix + '_title'))}</h1></div>
    <label class="tool-dropzone mb-3" for="opbFile"><input type="file" id="opbFile" accept="application/pdf,.pdf">
      <span class="tool-dropzone-title">\${escapeHtml(t(opts.lang, prefix + '_choose_file'))}</span>
      <span class="tool-dropzone-hint">\${escapeHtml(t(opts.lang, prefix + '_drop_hint'))}</span></label>
    <div class="d-flex tools-bar mb-2 flex-wrap align-items-center">
      <button type="button" id="opbPrev" class="btn btn-outline-secondary btn-sm">\${escapeHtml(t(opts.lang, prefix + '_prev'))}</button>
      <span id="opbPageInfo" class="small text-muted mx-2"></span>
      <button type="button" id="opbNext" class="btn btn-outline-secondary btn-sm">\${escapeHtml(t(opts.lang, prefix + '_next'))}</button>
      <button type="button" id="opbSample" class="btn btn-outline-secondary btn-sm">\${escapeHtml(t(opts.lang, prefix + '_sample'))}</button>
      <button type="button" id="opbClear" class="btn btn-outline-secondary btn-sm">\${escapeHtml(t(opts.lang, prefix + '_clear'))}</button>
    </div>
    <p id="opbError" class="small text-danger mb-2" style="display:none;"></p>
    <p class="small text-muted mb-1">\${escapeHtml(t(opts.lang, prefix + '_viewer_label'))}</p>
    <canvas id="opbCanvas" class="mb-3"></canvas>
    <p class="tool-lead mb-4">\${escapeHtml(description)}</p>\`;
  const igHtml = renderToolIgSections({ lang: opts.lang, prefix, mode: 'rules', usecaseCount: 3, ruleItemCount: 4 });
  const referencesHtml = renderToolReferencesSection({ lang: opts.lang, links: [{ label: 'PDF.js', href: 'https://mozilla.github.io/pdf.js/' }] });
  const extraBodyHtml = \`
  <script src="/vendor/pdf-lib/pdf-lib.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
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
      var msg = { sampleText: 'Hello browser viewer sample.', pageTpl: \${JSON.stringify(t(opts.lang, prefix + '_page_label'))} + ' {n} / {total}' };
      var source = null, currentPage = 1, totalPages = 0;
      function setErr(t) { errEl.textContent = t || ''; errEl.style.display = t ? '' : 'none'; }
      ${PDF_HELPERS}
      function showPage() {
        if (!source) return;
        renderPageToCanvas(source.bytes, currentPage, canvas, 1.3).then(function (n) {
          totalPages = n;
          pageInfo.textContent = msg.pageTpl.replace('{n}', String(currentPage)).replace('{total}', String(totalPages));
        }).catch(function () { setErr('load'); });
      }
      function loadBytes(bytes) { source = { bytes: bytes }; currentPage = 1; showPage(); }
      fileInput.addEventListener('change', function () {
        if (!fileInput.files || !fileInput.files[0]) return;
        fileInput.files[0].arrayBuffer().then(function (b) { loadBytes(new Uint8Array(b)); });
        fileInput.value = '';
      });
      btnPrev.addEventListener('click', function () { if (currentPage > 1) { currentPage--; showPage(); } });
      btnNext.addEventListener('click', function () { if (currentPage < totalPages) { currentPage++; showPage(); } });
      btnClear.addEventListener('click', function () {
        source = null; pageInfo.textContent = ''; setErr('');
        var ctx = canvas.getContext('2d'); ctx && ctx.clearRect(0, 0, canvas.width, canvas.height);
        fileInput.value = '';
      });
      function loadSample() {
        makeSamplePdf(msg.sampleText).then(function (f) {
          return f.arrayBuffer().then(function (b) { loadBytes(new Uint8Array(b)); });
        }).catch(function () { setErr('pdflib'); });
      }
      btnSample.addEventListener('click', loadSample);
      loadSample();
    })();
  </script>\`;
  const toolMeta = getToolBySlug('open-pdf-in-browser');
  const toolSeoHtml = toolMeta ? renderToolExtraSections({ lang: opts.lang, defaultLang: opts.defaultLang, tool: toolMeta }) : '';
  const toolJsonLd = toolMeta ? buildToolJsonLd({ lang: opts.lang, defaultLang: opts.defaultLang, tool: toolMeta, name: t(opts.lang, toolMeta.i18nKey as any), description, canonicalPath }) : '';
  return renderLayout({ lang: opts.lang, title, description, canonicalPath, ogImageUrl: 'https://onlinefreetools.org/og-image.png', ogType: 'website', alternates, headerHtml, sidebarHtml, contentHtml: contentHtml + igHtml + toolSeoHtml + referencesHtml, footerHtml, extraHeadHtml: extraHeadHtml + toolJsonLd, extraBodyHtml, includeSidebarToggleScript: true, sidebarAutoCloseSelector: '#toolNav a' });
};
`
);

console.log('wrote openPdfInBrowserPage.ts');
