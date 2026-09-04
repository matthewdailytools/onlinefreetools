/**
 * Generate Page.ts files for ten PDF scene tools.
 * Run: node scripts/tmp/generate-pdf-scene-pages.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const pagesDir = path.join(root, 'src/pages');

/**
 * Shared TypeScript page shell for PDF scene tools.
 * @param {object} cfg
 */
function pageShell(cfg) {
	return `/**
 * ${cfg.h1} — ${cfg.note}
 * slug: ${cfg.slug}
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
  const safe = pathname.startsWith('/') ? pathname : \`/\${pathname}\`;
  return lang === defaultLang ? safe : \`/\${lang}\${safe}\`;
};

/** 渲染 ${cfg.h1} 工具页。 */
export const ${cfg.exportFn} = (opts: {
  lang: SiteLang;
  defaultLang: SiteLang;
  enabledLangs: SiteLang[];
}) => {
  const toolPath = '/tools/${cfg.slug}';
  const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
  const prefix = '${cfg.prefix}';
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
      currentSlug: '${cfg.slug}',
      currentAnchor: '#converter',
    }),
    id: 'toolNav',
  });
  const footerHtml = renderFooter({ lang: opts.lang });
  const extraHeadHtml = \`${cfg.extraHeadHtml}\`;
  const contentHtml = \`${cfg.contentHtml}\`;
  const igHtml = renderToolIgSections({
    lang: opts.lang,
    prefix: prefix,
    mode: 'rules',
    usecaseCount: 3,
    ruleItemCount: 4,
  });
  const referencesHtml = renderToolReferencesSection({
    lang: opts.lang,
    links: ${JSON.stringify(cfg.refs)},
  });
  const extraBodyHtml = \`
${cfg.extraBodyHtml}\`;
  const toolMeta = getToolBySlug('${cfg.slug}');
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

/** pdf.js lazy loader snippet (shared). */
const PDFJS_LOADER = `
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
      function extractPageText(textContent) {
        var LINE_Y = 3;
        var items = (textContent && textContent.items) || [];
        var lines = [];
        for (var i = 0; i < items.length; i++) {
          var item = items[i];
          if (!item || !item.str) continue;
          var tr = item.transform || [];
          var x = typeof tr[4] === 'number' ? tr[4] : 0;
          var y = typeof tr[5] === 'number' ? tr[5] : 0;
          var matched = null;
          for (var j = 0; j < lines.length; j++) {
            if (Math.abs(lines[j].y - y) < LINE_Y) { matched = lines[j]; break; }
          }
          if (!matched) { matched = { y: y, parts: [] }; lines.push(matched); }
          matched.parts.push({ x: x, str: item.str });
        }
        lines.sort(function (a, b) { return b.y - a.y; });
        var out = [];
        for (var k = 0; k < lines.length; k++) {
          lines[k].parts.sort(function (a, b) { return a.x - b.x; });
          var joined = lines[k].parts.map(function (p) { return p.str; }).join(' ');
          if (joined.trim()) out.push(joined);
        }
        return out.join('\\\\n');
      }
      function buildAllText(bytes) {
        return ensurePdfJs().then(function (pdfjsLib) {
          return pdfjsLib.getDocument({ data: bytes.slice(0) }).promise;
        }).then(function (pdfDoc) {
          var n = pdfDoc.numPages;
          var texts = [];
          var chain = Promise.resolve();
          for (var p = 1; p <= n; p++) {
            (function (pn) {
              chain = chain.then(function () {
                return pdfDoc.getPage(pn).then(function (page) {
                  return page.getTextContent().then(function (tc) { texts.push(extractPageText(tc)); });
                });
              });
            })(p);
          }
          return chain.then(function () { return texts.join('\\\\n\\\\n'); });
        });
      }
      function makeSamplePdf(text) {
        if (!hasPdfLib()) return Promise.reject(new Error('pdflib'));
        return PDFLib.PDFDocument.create().then(function (doc) {
          return doc.embedFont(PDFLib.StandardFonts.Helvetica).then(function (font) {
            var page = doc.addPage([420, 300]);
            page.drawText(text || 'Sample PDF text.', { x: 48, y: 160, size: 16, font: font });
            return doc.save();
          });
        }).then(function (bytes) {
          return new File([bytes], 'sample.pdf', { type: 'application/pdf' });
        });
      }
`;

/** @type {object[]} */
const PAGES = [
	{
		slug: 'extract-text-from-pdf',
		file: 'extractTextFromPdfPage',
		exportFn: 'renderExtractTextFromPdfPage',
		prefix: 'tool_extract_text_from_pdf',
		h1: 'Extract text from a PDF',
		note: 'pdf.js text extract; download .txt',
		refs: [
			{ label: 'PDF.js', href: 'https://mozilla.github.io/pdf.js/' },
			{ label: 'pdf-lib', href: 'https://pdf-lib.js.org/' },
		],
		extraHeadHtml: `
  <style>
    .tools-bar { gap: .5rem; }
    #etfpOutput { min-height: 200px; font-family: ui-monospace, monospace; font-size: .85rem; }
  </style>`,
		contentHtml: `
    <div id="converter" class="tool-page-heading mb-3">
      <h1 class="h4 mb-0">\${escapeHtml(t(opts.lang, prefix + '_title'))}</h1>
    </div>
    <label class="tool-dropzone mb-3" for="etfpFile">
      <input type="file" id="etfpFile" accept="application/pdf,.pdf">
      <span class="tool-dropzone-title">\${escapeHtml(t(opts.lang, prefix + '_choose_file'))}</span>
      <span class="tool-dropzone-hint">\${escapeHtml(t(opts.lang, prefix + '_drop_hint'))}</span>
    </label>
    <div class="d-flex tools-bar mb-2 flex-wrap">
      <button type="button" id="etfpExtract" class="btn btn-primary btn-sm">\${escapeHtml(t(opts.lang, prefix + '_extract'))}</button>
      <button type="button" id="etfpDownload" class="btn btn-outline-primary btn-sm" disabled>\${escapeHtml(t(opts.lang, prefix + '_download'))} .txt</button>
      <button type="button" id="etfpCopy" class="btn btn-outline-secondary btn-sm" disabled>\${escapeHtml(t(opts.lang, prefix + '_copy'))}</button>
      <button type="button" id="etfpSample" class="btn btn-outline-secondary btn-sm">\${escapeHtml(t(opts.lang, prefix + '_sample'))}</button>
      <button type="button" id="etfpClear" class="btn btn-outline-secondary btn-sm">\${escapeHtml(t(opts.lang, prefix + '_clear'))}</button>
    </div>
    <p id="etfpError" class="small text-danger mb-2" style="display:none;"></p>
    <p id="etfpStatus" class="small text-muted mb-2"></p>
    <label class="form-label small" for="etfpOutput">\${escapeHtml(t(opts.lang, prefix + '_preview_label'))}</label>
    <textarea id="etfpOutput" class="form-control mb-3" readonly rows="10"></textarea>
    <p class="tool-lead mb-4">\${escapeHtml(description)}</p>`,
		extraBodyHtml: `
  <script src="https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/dist/pdf-lib.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script>
    (function () {
      var fileInput = document.getElementById('etfpFile');
      var outputEl = document.getElementById('etfpOutput');
      var btnExtract = document.getElementById('etfpExtract');
      var btnDownload = document.getElementById('etfpDownload');
      var btnCopy = document.getElementById('etfpCopy');
      var btnSample = document.getElementById('etfpSample');
      var btnClear = document.getElementById('etfpClear');
      var errEl = document.getElementById('etfpError');
      var statusEl = document.getElementById('etfpStatus');
      var msg = {
        empty: \${'${'}" + '${'}"'},
        sampleText: 'Hello extract text sample.',
        working: \${'${'}" + '${'}"'},
        done: \${'${'}" + '${'}"'},
        noText: \${'${'}" + '${'}"'}
      };
      var source = null;
      var resultText = '';
      function setErr(t) { errEl.textContent = t || ''; errEl.style.display = t ? '' : 'none'; }
      ${PDFJS_LOADER}
      function loadFile(file) {
        setErr('');
        if (!file) return Promise.resolve();
        return file.arrayBuffer().then(function (buf) {
          source = { name: file.name || 'doc.pdf', bytes: new Uint8Array(buf) };
        }).catch(function () { setErr('load'); source = null; });
      }
      function extract() {
        setErr('');
        if (!source) { setErr(msg.empty); return; }
        statusEl.textContent = msg.working;
        buildAllText(source.bytes).then(function (text) {
          if (!text || !String(text).trim()) throw new Error('notext');
          resultText = text;
          outputEl.value = text;
          btnDownload.disabled = false;
          btnCopy.disabled = false;
          statusEl.textContent = msg.done;
        }).catch(function (e) {
          setErr(e && e.message === 'notext' ? msg.noText : 'fail');
          statusEl.textContent = '';
        });
      }
      function downloadTxt() {
        if (!resultText) return;
        var base = (source && source.name || 'document').replace(/\\.pdf$/i, '') || 'document';
        var blob = new Blob([resultText], { type: 'text/plain;charset=utf-8' });
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url; a.download = base + '.txt';
        document.body.appendChild(a); a.click(); a.remove();
        URL.revokeObjectURL(url);
      }
      function copyText() {
        if (!resultText) return;
        navigator.clipboard.writeText(resultText).catch(function () {});
      }
      function loadSample() {
        makeSamplePdf(msg.sampleText).then(loadFile).then(function () { if (source) extract(); });
      }
      fileInput.addEventListener('change', function () {
        if (fileInput.files && fileInput.files[0]) loadFile(fileInput.files[0]);
        fileInput.value = '';
      });
      btnExtract.addEventListener('click', extract);
      btnDownload.addEventListener('click', downloadTxt);
      btnCopy.addEventListener('click', copyText);
      btnSample.addEventListener('click', loadSample);
      btnClear.addEventListener('click', function () {
        source = null; resultText = ''; outputEl.value = '';
        btnDownload.disabled = true; btnCopy.disabled = true;
        setErr(''); statusEl.textContent = ''; fileInput.value = '';
      });
      loadSample();
    })();
  </script>`.replace(/\$\{'\$\{'\}" \+ '\$\{'\}"\}/g, (m, offset, str) => {
			// placeholder - will fix below
			return m;
		}),
	},
];

// The template approach with i18n in script is complex - write pages directly instead
console.log('Use direct page writes');
