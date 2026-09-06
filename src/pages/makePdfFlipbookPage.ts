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
    .flip-stage { overflow: auto; max-height: 72vh; border: 1px solid #dee2e6; border-radius: .25rem; background: #f8f9fa; padding: .5rem; }
    #flipCanvas { display: block; margin: 0 auto; background: #fff; max-width: 100%; max-height: 68vh; width: auto; height: auto; }
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
    <div class="flip-stage mb-3">
      <canvas id="flipCanvas"></canvas>
    </div>

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
      var resultBytes = null; // 当前 PDF 字节，下载时栅格化成离线 HTML。

      var msg = {
        working: ${JSON.stringify(t(opts.lang, prefix + '_status_working'))},
        done: ${JSON.stringify(t(opts.lang, prefix + '_status_done'))},
        loadFail: ${JSON.stringify(t(opts.lang, prefix + '_err_load'))},
        convertFail: ${JSON.stringify(t(opts.lang, prefix + '_err_convert'))},
        pdfjsFail: ${JSON.stringify(t(opts.lang, prefix + '_err_pdfjs'))},
        encrypted: ${JSON.stringify(t(opts.lang, prefix + '_err_encrypted'))},
        notext: ${JSON.stringify(t(opts.lang, prefix + '_err_notext'))},
        sampleText: ${JSON.stringify(t(opts.lang, prefix + '_example'))},
        pageTpl: ${JSON.stringify(pdfWorkLabels.pageTpl)},
        prev: ${JSON.stringify(t(opts.lang, prefix + '_prev'))},
        next: ${JSON.stringify(t(opts.lang, prefix + '_next'))},
      };
      /** 导出 HTML 时的栅格缩放（约 108 dpi，兼顾清晰度与体积）。 */
      var EXPORT_SCALE = 1.5;
      /** 导出页 JPEG 质量（0–1）。 */
      var JPEG_QUALITY = 0.86;
      /** 样例页尺寸：A4 点（1/72 inch），避免 420×300 小页看起来像裁切错误。 */
      var SAMPLE_PAGE_PT = [595, 842];

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

      /**
       * 把指定 PDF 页画到预览 canvas，并按位图宽高显示（CSS 用 max-width/max-height 等比缩放）。
       * @param {Uint8Array} bytes PDF 原始字节
       * @param {number} pageNum 1-based 页码
       * @param {number} [scale] pdf.js viewport 缩放
       * @returns {Promise<void>}
       */
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
            canvas.width = Math.floor(viewport.width);
            canvas.height = Math.floor(viewport.height);
            canvas.style.width = '';
            canvas.style.height = '';
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
       * 把 HTML 文本节点内容转义，避免按钮文案打断导出文档。
       * @param {string} value 原始文案
       * @returns {string} 可写入 HTML 的文本
       */
      function escapeHtmlText(value) {
        return String(value == null ? '' : value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      }

      /**
       * 将整份 PDF 栅格化为 JPEG data URL，供离线 HTML 翻页书使用。
       * @param {Uint8Array} bytes PDF 原始字节
       * @returns {Promise<{ src: string, width: number, height: number }[]>}
       */
      function renderAllPagesToDataUrls(bytes) {
        return ensurePdfJs().then(function (pdfjsLib) {
          return pdfjsLib.getDocument({ data: bytes.slice(0) }).promise;
        }).then(function (doc) {
          /** @type {{ src: string, width: number, height: number }[]} */
          var pages = [];
          var total = doc.numPages;
          var chain = Promise.resolve();
          var pageNum;
          for (pageNum = 1; pageNum <= total; pageNum++) {
            (function (n) {
              chain = chain.then(function () {
                work.setProgress(Math.round(((n - 1) / total) * 90) + 5);
                return window.OftPdfWork.yieldUi().then(function () {
                  return doc.getPage(n);
                }).then(function (page) {
                  var viewport = page.getViewport({ scale: EXPORT_SCALE });
                  var offscreen = document.createElement('canvas');
                  offscreen.width = Math.floor(viewport.width);
                  offscreen.height = Math.floor(viewport.height);
                  var ctx = offscreen.getContext('2d');
                  if (!ctx) return Promise.reject(new Error('canvas'));
                  return page.render({ canvasContext: ctx, viewport: viewport }).promise.then(function () {
                    pages.push({
                      src: offscreen.toDataURL('image/jpeg', JPEG_QUALITY),
                      width: offscreen.width,
                      height: offscreen.height,
                    });
                  });
                });
              });
            })(pageNum);
          }
          return chain.then(function () { return pages; });
        });
      }

      /**
       * 生成可离线打开的 HTML 翻页书：每页是已渲染的 JPEG，不再依赖 PDF.js。
       * @param {{ src: string, width: number, height: number }[]} pages 栅格化后的页面
       * @returns {string} 完整 HTML 文档
       */
      function buildFlipbookHtml(pages) {
        var payload = JSON.stringify(pages);
        return '<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">' +
          '<title>PDF Flipbook</title><style>' +
          'html,body{margin:0;height:100%;background:#eef1f5;font-family:system-ui,sans-serif}' +
          '.stage{min-height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:16px;box-sizing:border-box}' +
          '.frame{display:block;flex:0 0 auto;box-shadow:0 10px 30px rgba(0,0,0,.14);background:#fff;line-height:0}' +
          '.frame img{display:block;width:100%;height:auto}' +
          '.frame.turn{animation:turn .24s ease-out;transform-origin:left center}' +
          '@keyframes turn{from{opacity:.45;transform:perspective(900px) rotateY(-13deg)}to{opacity:1;transform:none}}' +
          '.nav{margin-top:12px;display:flex;align-items:center;gap:8px}' +
          'button{padding:8px 14px}' +
          '</style></head><body><div class="stage"><div class="frame" id="frame"><img id="page" alt=""></div>' +
          '<div class="nav"><button id="prev" type="button">' + escapeHtmlText(msg.prev) + '</button>' +
          '<span id="info"></span><button id="next" type="button">' + escapeHtmlText(msg.next) + '</button></div></div>' +
          '<script>(function(){var pages=' + payload + ',n=0,frame=document.getElementById("frame"),img=document.getElementById("page"),info=document.getElementById("info");' +
          'function fit(p){var maxW=Math.max(120,window.innerWidth-32),maxH=Math.max(120,window.innerHeight-80);var s=Math.min(maxW/p.width,maxH/p.height,1);frame.style.width=Math.round(p.width*s)+"px";frame.style.height="auto";}' +
          'function render(){var p=pages[n];fit(p);frame.classList.remove("turn");void frame.offsetWidth;frame.classList.add("turn");img.src=p.src;info.textContent=" "+(n+1)+" / "+pages.length+" ";}' +
          'document.getElementById("prev").onclick=function(){if(n>0){n--;render();}};' +
          'document.getElementById("next").onclick=function(){if(n<pages.length-1){n++;render();}};' +
          'window.addEventListener("resize",function(){if(pages[n])fit(pages[n]);});' +
          'render();})();<\\/script></body></html>';
      }

      /**
       * 栅格化当前 PDF 并下载离线 HTML 翻页书。
       * @returns {void}
       */
      function downloadFlipbook() {
        if (!resultBytes) return;
        setErr('');
        work.setBusy(busyBtns, true);
        work.setProgress(null);
        renderAllPagesToDataUrls(resultBytes)
          .then(function (pages) {
            if (!pages.length) throw new Error('empty');
            var blob = new Blob([buildFlipbookHtml(pages)], { type: 'text/html;charset=utf-8' });
            var url = URL.createObjectURL(blob);
            var a = document.createElement('a');
            a.href = url;
            a.download = 'pdf-flipbook.html';
            document.body.appendChild(a);
            a.click();
            a.remove();
            URL.revokeObjectURL(url);
            work.setProgress(100);
          })
          .catch(function (err) {
            var s = String(err && err.message || '');
            setErr(s === 'pdfjs' ? msg.pdfjsFail : msg.convertFail);
          })
          .finally(function () {
            work.setBusy(busyBtns, false);
            work.hideProgress();
            btnDownload.disabled = !resultBytes;
          });
      }

      /**
       * 生成两页 A4 样例 PDF，便于验收翻页与导出尺寸。
       * @returns {Promise<Uint8Array>}
       */
      function makeSamplePdf() {
        if (!window.PDFLib || !PDFLib.PDFDocument) return Promise.reject(new Error('pdflib'));
        return PDFLib.PDFDocument.create().then(function (doc) {
          return doc.embedFont(PDFLib.StandardFonts.HelveticaBold).then(function (font) {
            var labels = ['Flipbook page one.', 'Flipbook page two.'];
            labels.forEach(function (label, idx) {
              var page = doc.addPage(SAMPLE_PAGE_PT.slice());
              page.drawText(label, { x: 72, y: 760, size: 22, font: font });
              page.drawText('Sample A4 page ' + String(idx + 1) + ' of 2.', { x: 72, y: 720, size: 12, font: font });
            });
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
        return makeSamplePdf()
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

