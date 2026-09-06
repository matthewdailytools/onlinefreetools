/**
 * Make a PDF flipbook 工具页：把 PDF 按页渲染成可翻页的预览（纯客户端）。
 * slug: make-pdf-flipbook
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
 * 渲染 make-pdf-flipbook 工具页。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderMakePdfFlipbookPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/make-pdf-flipbook';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);

	const prefix = 'tool_make_pdf_flipbook';
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
			currentSlug: 'make-pdf-flipbook',
			currentAnchor: '#converter',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	const pdfWorkLabels = pdfWorkUiLabels(opts.lang);
	const extraHeadHtml = `
  <style>
    .tools-bar { gap: .5rem; }
    #flipCanvas { border: 1px solid #dee2e6; border-radius: .25rem; background: #fff; max-width: 100%; }
    #flipCanvas.is-turning { animation: flip-page-turn .24s ease-out; transform-origin: left center; }
    @keyframes flip-page-turn {
      0% { opacity: .45; transform: perspective(900px) rotateY(-13deg); }
      100% { opacity: 1; transform: perspective(900px) rotateY(0); }
    }
    ${pdfWorkUiCss()}
  </style>`;

	const contentHtml = `
    <div id="converter" class="tool-page-heading mb-3">
      <h1 class="h4 mb-0">${escapeHtml(t(opts.lang, prefix + '_title'))}</h1>
    </div>

    <label class="tool-dropzone mb-3" id="flipDrop" for="flipFile">
      <input type="file" id="flipFile" accept="application/pdf,.pdf">
      <span class="tool-dropzone-title">${escapeHtml(t(opts.lang, prefix + '_choose_files'))}</span>
      <span class="tool-dropzone-hint">${escapeHtml(t(opts.lang, prefix + '_drop_hint'))}</span>
    </label>

    <div class="d-flex align-items-center tools-bar mb-2 flex-wrap">
      <button type="button" id="flipBtnPrev" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, prefix + '_prev'))}</button>
      <span id="flipPageInfo" class="small text-muted mx-2"></span>
      <button type="button" id="flipBtnNext" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, prefix + '_next'))}</button>
      <button type="button" id="flipBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, prefix + '_sample'))}</button>
      <button type="button" id="flipBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, prefix + '_clear'))}</button>
    </div>

    <p id="flipError" class="small text-danger mb-2" style="display:none;" role="alert"></p>
    ${pdfWorkUiProgressHtml({ idPrefix: 'flipPdf', labels: pdfWorkLabels })}

    <p class="small text-muted mb-1">${escapeHtml(t(opts.lang, prefix + '_flipbook_label'))}</p>
    <canvas id="flipCanvas" class="mb-3"></canvas>

    <div class="d-flex align-items-center tools-bar mb-2 flex-wrap">
      <button type="button" id="flipBtnDownload" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(t(opts.lang, prefix + '_download'))}</button>
    </div>

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
      var fileInput = document.getElementById('flipFile');
      var canvas = document.getElementById('flipCanvas');
      var btnPrev = document.getElementById('flipBtnPrev');
      var btnNext = document.getElementById('flipBtnNext');
      var btnSample = document.getElementById('flipBtnSample');
      var btnClear = document.getElementById('flipBtnClear');
      var btnDownload = document.getElementById('flipBtnDownload');
      var pageInfo = document.getElementById('flipPageInfo');
      var errEl = document.getElementById('flipError');
      var work = window.OftPdfWork.bind('flipPdf');
      var busyBtns = [btnSample, btnClear, btnDownload, btnPrev, btnNext];

      var source = null; // { bytes, name }
      var currentPage = 1;
      var totalPages = 0;
      var resultBytes = null; // 当前 PDF 字节，用于导出独立的 HTML 翻页预览。

      var msg = {
        working: ${JSON.stringify(t(opts.lang, prefix + '_status_working'))},
        done: ${JSON.stringify(t(opts.lang, prefix + '_status_done'))},
        loadFail: ${JSON.stringify(t(opts.lang, prefix + '_err_load'))},
        encrypted: ${JSON.stringify(t(opts.lang, prefix + '_err_encrypted'))},
        notext: ${JSON.stringify(t(opts.lang, prefix + '_err_notext'))},
        sampleText: ${JSON.stringify(t(opts.lang, prefix + '_example'))},
        pageTpl: 'Page {n} / {total}',
      };

      function setErr(text) {
        if (!text) { errEl.style.display = 'none'; errEl.textContent = ''; return; }
        errEl.textContent = text;
        errEl.style.display = '';
      }

      function ensurePdfJs() {
        if (window.pdfjsLib) return Promise.resolve(window.pdfjsLib);
        return import('/vendor/pdfjs/pdf.min.mjs').then(function (mod) {
          mod.GlobalWorkerOptions.workerSrc = '/vendor/pdfjs/pdf.worker.min.mjs';
          window.pdfjsLib = mod;
          return mod;
        }).catch(function () { throw new Error('pdfjs'); });
      }

      function hasPdfBytes() {
        return Boolean(source && source.bytes);
      }

      function renderPageToCanvas(bytes, pageNum, scale) {
        canvas.classList.remove('is-turning');
        void canvas.offsetWidth;
        canvas.classList.add('is-turning');
        return ensurePdfJs().then(function (pdfjsLib) {
          return pdfjsLib.getDocument({ data: bytes.slice(0) }).promise;
        }).then(function (doc) {
          totalPages = doc.numPages;
          return doc.getPage(pageNum).then(function (page) {
            var viewport = page.getViewport({ scale: scale || 1.3 });
            canvas.width = viewport.width;
            canvas.height = viewport.height;
            return page.render({ canvasContext: canvas.getContext('2d'), viewport: viewport }).promise.then(function () {
              pageInfo.textContent = msg.pageTpl.replace('{n}', String(pageNum)).replace('{total}', String(totalPages));
            });
          });
        });
      }

      function loadBytes(bytes) {
        source = { bytes: bytes };
        currentPage = 1;
        resultBytes = bytes;
        btnDownload.disabled = false;
        setErr('');
        work.setProgress(null);
        return window.OftPdfWork.yieldUi().then(function () {
          work.setProgress(50);
          return renderPageToCanvas(source.bytes, currentPage, 1.3);
        }).then(function () {
          work.setProgress(100);
        });
      }

      /**
       * 将 PDF 字节转换为 Base64；分块处理，避免大文件触发调用栈上限。
       * @param {Uint8Array} bytes PDF 原始字节
       * @returns {string} Base64 文本
       */
      function bytesToBase64(bytes) {
        var chunkSize = 0x8000;
        var binary = '';
        for (var offset = 0; offset < bytes.length; offset += chunkSize) {
          binary += String.fromCharCode.apply(null, bytes.subarray(offset, offset + chunkSize));
        }
        return btoa(binary);
      }

      /**
       * 生成可独立保存的 HTML 翻页预览。
       * 导出文件仍需联网加载本站 /vendor/pdfjs，但 PDF 内容直接内嵌，不会上传。
       * @param {Uint8Array} bytes PDF 原始字节
       * @returns {string} 完整 HTML 文档
       */
      function buildFlipbookHtml(bytes) {
        var encoded = bytesToBase64(bytes);
        return '<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">' +
          '<title>PDF Flipbook</title><style>body{font-family:system-ui;margin:0;background:#eef1f5;text-align:center}' +
          'main{max-width:960px;margin:auto;padding:24px}canvas{max-width:100%;background:#fff;box-shadow:0 10px 30px #0002}' +
          'canvas.turn{animation:turn .24s ease-out;transform-origin:left center}@keyframes turn{from{opacity:.45;transform:perspective(900px) rotateY(-13deg)}to{opacity:1;transform:none}}' +
          'button{margin:12px 4px;padding:8px 14px}</style></head><body><main><canvas id="page"></canvas><div>' +
          '<button id="prev" type="button">Previous</button><span id="info"></span><button id="next" type="button">Next</button>' +
          '</div></main><script type="module">import * as pdfjsLib from "https://onlinefreetools.org/vendor/pdfjs/pdf.min.mjs";' +
          'pdfjsLib.GlobalWorkerOptions.workerSrc="https://onlinefreetools.org/vendor/pdfjs/pdf.worker.min.mjs";' +
          'const raw=atob("' + encoded + '"),bytes=Uint8Array.from(raw,c=>c.charCodeAt(0)),doc=await pdfjsLib.getDocument({data:bytes}).promise;' +
          'let n=1;const c=document.getElementById("page"),info=document.getElementById("info");async function render(){const p=await doc.getPage(n),v=p.getViewport({scale:1.35});c.width=v.width;c.height=v.height;c.classList.remove("turn");void c.offsetWidth;c.classList.add("turn");await p.render({canvasContext:c.getContext("2d"),viewport:v}).promise;info.textContent=" "+n+" / "+doc.numPages+" ";}' +
          'document.getElementById("prev").onclick=()=>{if(n>1){n--;render()}};document.getElementById("next").onclick=()=>{if(n<doc.numPages){n++;render()}};render();' +
          '<\\/script></body></html>';
      }

      /** 下载内嵌当前 PDF 的 HTML 翻页预览。 */
      function downloadFlipbook() {
        if (!resultBytes) return;
        var blob = new Blob([buildFlipbookHtml(resultBytes)], { type: 'text/html;charset=utf-8' });
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = 'pdf-flipbook.html';
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      }

      function makeSamplePdf(text) {
        if (!window.PDFLib || !PDFLib.PDFDocument) return Promise.reject(new Error('pdflib'));
        return PDFLib.PDFDocument.create().then(function (doc) {
          var page = doc.addPage([420, 300]);
          return doc.embedFont(PDFLib.StandardFonts.HelveticaBold).then(function (font) {
            page.drawText(text || 'Flipbook', { x: 48, y: 170, size: 22, font: font });
            page.drawText('Flipbook page one.', { x: 48, y: 130, size: 12, font: font });
            return doc.save();
          });
        }).then(function (bytes) {
          return new Uint8Array(bytes);
        });
      }

      function loadSample() {
        setErr('');
        source = null;
        currentPage = 1;
        totalPages = 0;
        resultBytes = null;
        btnDownload.disabled = true;
        pageInfo.textContent = '';
        var ctx = canvas.getContext('2d');
        ctx && ctx.clearRect(0, 0, canvas.width, canvas.height);
        work.setBusy(busyBtns, true);
        work.setProgress(null);
        return makeSamplePdf('Flipbook sample')
          .then(function (bytes) { return loadBytes(bytes); })
          .catch(function () { setErr(msg.loadFail); })
          .finally(function () {
            work.setBusy(busyBtns, false);
            work.hideProgress();
            btnDownload.disabled = !resultBytes;
          });
      }

      fileInput.addEventListener('change', function () {
        if (!fileInput.files || !fileInput.files[0]) return;
        setErr('');
        btnDownload.disabled = true;
        var f = fileInput.files[0];
        work.setBusy(busyBtns, true);
        work.setProgress(null);
        f.arrayBuffer().then(function (ab) {
          return loadBytes(new Uint8Array(ab));
        }).then(function () {
          btnDownload.disabled = false;
        }).catch(function () {
          setErr(msg.loadFail);
        }).finally(function () {
          work.setBusy(busyBtns, false);
          work.hideProgress();
          btnDownload.disabled = !resultBytes;
        });
        fileInput.value = '';
      });

      btnPrev.addEventListener('click', function () {
        if (!hasPdfBytes()) return;
        if (currentPage > 1) {
          currentPage -= 1;
          renderPageToCanvas(source.bytes, currentPage, 1.3);
        }
      });

      btnNext.addEventListener('click', function () {
        if (!hasPdfBytes()) return;
        if (currentPage < totalPages) {
          currentPage += 1;
          renderPageToCanvas(source.bytes, currentPage, 1.3);
        }
      });

      btnDownload.addEventListener('click', downloadFlipbook);
      btnSample.addEventListener('click', loadSample);
      btnClear.addEventListener('click', function () {
        source = null;
        currentPage = 1;
        totalPages = 0;
        resultBytes = null;
        btnDownload.disabled = true;
        pageInfo.textContent = '';
        canvas.getContext('2d') && canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
        setErr('');
        fileInput.value = '';
        loadSample();
      });

      // 初始化：自动加载样例
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('make-pdf-flipbook');
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

