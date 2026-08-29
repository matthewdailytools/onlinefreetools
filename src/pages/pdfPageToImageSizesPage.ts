/**
 * PDF 页多尺寸导出工具页：pdf.js 渲染单页，Canvas contain-fit 至预设尺寸，fflate 打 ZIP（纯客户端）。
 * slug: pdf-page-to-image-sizes
 * 规格：work-tasks/pdf-page-to-image-sizes/02-tool-info.md
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
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * 渲染 PDF 页多尺寸导出工具页。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderPdfPageToImageSizesPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/pdf-page-to-image-sizes';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_pdf_page_to_image_sizes_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_pdf_page_to_image_sizes_description');

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
			currentSlug: 'pdf-page-to-image-sizes',
			currentAnchor: '#converter',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	const extraHeadHtml = `
  <style>
    .tools-bar { gap: .5rem; }
    .pdf-page-to-image-sizes-meta { font-size: .85rem; color: #6c757d; }
    .pdf-page-to-image-sizes-page-input { width: 5rem; }
  </style>`;

	const contentHtml = `
    <div id="converter" class="tool-page-heading mb-3">
      <h1 class="h4 mb-0">${escapeHtml(t(opts.lang, 'tool_pdf_page_to_image_sizes_title'))}</h1>
    </div>

    <label class="tool-dropzone pdf-page-to-image-sizes-drop mb-3" id="pdfPageToImageSizesDrop" for="pdfPageToImageSizesFile">
      <input type="file" id="pdfPageToImageSizesFile" accept="application/pdf,.pdf">
      <span class="tool-dropzone-title">${escapeHtml(t(opts.lang, 'tool_pdf_page_to_image_sizes_choose_file'))}</span>
      <span class="tool-dropzone-hint">${escapeHtml(t(opts.lang, 'tool_pdf_page_to_image_sizes_drop_hint'))}</span>
    </label>

    <p id="pdfPageToImageSizesMeta" class="pdf-page-to-image-sizes-meta mb-2" style="display:none;"></p>

    <div class="d-flex align-items-center gap-2 mb-2 flex-wrap">
      <label class="form-label mb-0" for="pdfPageToImageSizesPageNum">${escapeHtml(t(opts.lang, 'tool_pdf_page_to_image_sizes_page_label'))}</label>
      <input type="number" id="pdfPageToImageSizesPageNum" class="form-control form-control-sm pdf-page-to-image-sizes-page-input" min="1" value="1" aria-label="${escapeHtml(t(opts.lang, 'tool_pdf_page_to_image_sizes_page_label'))}">
    </div>

    <div class="d-flex align-items-center tools-bar mb-2 flex-wrap">
      <button type="button" id="pdfPageToImageSizesBtnExport" class="btn btn-primary btn-sm">${escapeHtml(t(opts.lang, 'tool_pdf_page_to_image_sizes_export'))}</button>
      <button type="button" id="pdfPageToImageSizesBtnDownload" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(t(opts.lang, 'tool_pdf_page_to_image_sizes_download'))}</button>
      <button type="button" id="pdfPageToImageSizesBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_pdf_page_to_image_sizes_sample'))}</button>
      <button type="button" id="pdfPageToImageSizesBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_pdf_page_to_image_sizes_clear'))}</button>
    </div>

    <p id="pdfPageToImageSizesWarn" class="small text-warning mb-2" style="display:none;" role="status"></p>
    <p id="pdfPageToImageSizesError" class="small text-danger mb-2" style="display:none;" role="alert"></p>
    <p id="pdfPageToImageSizesStatus" class="small text-muted mb-2" role="status"></p>
    <p id="pdfPageToImageSizesStats" class="small text-muted mb-3" style="display:none;"></p>

    <p class="tool-lead mb-4">${escapeHtml(description)}</p>`;

	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: 'tool_pdf_page_to_image_sizes',
		mode: 'rules',
		usecaseCount: 3,
		ruleItemCount: 4,
	});

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{ label: 'PDF.js', href: 'https://mozilla.github.io/pdf.js/' },
			{ label: 'pdf-lib', href: 'https://pdf-lib.js.org/' },
			{ label: 'fflate', href: 'https://github.com/101arrowz/fflate' },
		],
	});

	/**
	 * 客户端脚本：pdf.js 单页渲染 + Canvas contain-fit 多尺寸 JPEG + fflate ZIP。
	 * 预设：1080²、1200×630、1280×720、1080×1920；JPEG 质量 0.9。
	 */
	const extraBodyHtml = `
  <script src="https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/dist/pdf-lib.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script src="https://cdn.jsdelivr.net/npm/fflate@0.8.2/umd/index.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script>
    (function () {
      /** 单文件软警告阈值（字节）。 */
      var SOFT_BYTES = 25 * 1024 * 1024;
      /** 首次 pdf.js 栅格化缩放倍数（保证文字清晰）。 */
      var RENDER_SCALE = 2;
      /** JPEG 导出质量（0–1）。 */
      var JPEG_QUALITY = 0.9;

      /** 预设输出尺寸（宽×高，像素）。 */
      var PRESETS = [
        { id: 'instagram-square', w: 1080, h: 1080 },
        { id: 'og-facebook', w: 1200, h: 630 },
        { id: 'hd-landscape', w: 1280, h: 720 },
        { id: 'story-portrait', w: 1080, h: 1920 }
      ];

      var drop = document.getElementById('pdfPageToImageSizesDrop');
      var fileInput = document.getElementById('pdfPageToImageSizesFile');
      var pageNumInput = document.getElementById('pdfPageToImageSizesPageNum');
      var metaEl = document.getElementById('pdfPageToImageSizesMeta');
      var btnExport = document.getElementById('pdfPageToImageSizesBtnExport');
      var btnDownload = document.getElementById('pdfPageToImageSizesBtnDownload');
      var btnSample = document.getElementById('pdfPageToImageSizesBtnSample');
      var btnClear = document.getElementById('pdfPageToImageSizesBtnClear');
      var warnEl = document.getElementById('pdfPageToImageSizesWarn');
      var errEl = document.getElementById('pdfPageToImageSizesError');
      var statusEl = document.getElementById('pdfPageToImageSizesStatus');
      var statsEl = document.getElementById('pdfPageToImageSizesStats');

      var msg = {
        empty: ${JSON.stringify(t(opts.lang, 'tool_pdf_page_to_image_sizes_empty'))},
        badPage: ${JSON.stringify(t(opts.lang, 'tool_pdf_page_to_image_sizes_err_bad_page'))},
        encrypted: ${JSON.stringify(t(opts.lang, 'tool_pdf_page_to_image_sizes_err_encrypted'))},
        loadFail: ${JSON.stringify(t(opts.lang, 'tool_pdf_page_to_image_sizes_err_load'))},
        exportFail: ${JSON.stringify(t(opts.lang, 'tool_pdf_page_to_image_sizes_err_export'))},
        fflateFail: ${JSON.stringify(t(opts.lang, 'tool_pdf_page_to_image_sizes_err_fflate'))},
        pdfjsMissing: ${JSON.stringify(t(opts.lang, 'tool_pdf_page_to_image_sizes_err_pdfjs'))},
        pdflibMissing: ${JSON.stringify(t(opts.lang, 'tool_pdf_page_to_image_sizes_warn_pdflib'))},
        large: ${JSON.stringify(t(opts.lang, 'tool_pdf_page_to_image_sizes_warn_large'))},
        exporting: ${JSON.stringify(t(opts.lang, 'tool_pdf_page_to_image_sizes_status_exporting'))},
        done: ${JSON.stringify(t(opts.lang, 'tool_pdf_page_to_image_sizes_status_done'))},
        pagesLabel: ${JSON.stringify(t(opts.lang, 'tool_pdf_page_to_image_sizes_pages_label'))},
        statsTpl: ${JSON.stringify(t(opts.lang, 'tool_pdf_page_to_image_sizes_stats_tpl'))}
      };

      /** @type {{ name: string, bytes: Uint8Array, pageCount: number }|null} 已加载的源 PDF */
      var source = null;
      /** @type {{ blob: Blob, filename: string }|null} 最近一次导出结果 */
      var result = null;

      /** 显示/隐藏警告。 */
      function setWarn(text) {
        if (!text) { warnEl.style.display = 'none'; warnEl.textContent = ''; return; }
        warnEl.textContent = text;
        warnEl.style.display = '';
      }

      /** 显示/隐藏错误。 */
      function setError(text) {
        if (!text) { errEl.style.display = 'none'; errEl.textContent = ''; return; }
        errEl.textContent = text;
        errEl.style.display = '';
      }

      /** 更新状态行。 */
      function setStatus(text) {
        statusEl.textContent = text || '';
      }

      /** 格式化字节数。 */
      function formatBytes(n) {
        if (n < 1024) return n + ' B';
        if (n < 1024 * 1024) return (n / 1024).toFixed(1) + ' KB';
        return (n / (1024 * 1024)).toFixed(2) + ' MB';
      }

      /** pdf-lib 是否可用（样例 PDF 生成）。 */
      function hasPdfLib() {
        return typeof PDFLib !== 'undefined' && PDFLib && typeof PDFLib.PDFDocument === 'function';
      }

      /** fflate 是否可用（多尺寸 ZIP）。 */
      function hasFflate() {
        return typeof fflate !== 'undefined' && fflate && typeof fflate.zipSync === 'function';
      }

      /** 清空导出结果。 */
      function clearResult() {
        result = null;
        btnDownload.disabled = true;
        statsEl.style.display = 'none';
        statsEl.textContent = '';
      }

      /** 刷新元信息与大文件软警告。 */
      function refreshMeta() {
        if (!source) {
          metaEl.style.display = 'none';
          metaEl.textContent = '';
          setWarn('');
          return;
        }
        metaEl.textContent = source.name + ' · ' + msg.pagesLabel + ': ' + source.pageCount + ' · ' + formatBytes(source.bytes.length);
        metaEl.style.display = '';
        setWarn(source.bytes.length > SOFT_BYTES ? msg.large : '');
        pageNumInput.max = String(source.pageCount);
      }

      /**
       * 读取并校验页码（1-based）。
       * @returns {number|null}
       */
      function getPageNumber() {
        var n = parseInt(String(pageNumInput.value || '1'), 10);
        if (!source || !Number.isFinite(n) || n < 1 || n > source.pageCount) return null;
        return n;
      }

      /**
       * 懒加载 pdf.js（首次导出或样例时调用）。
       * @returns {Promise<object>}
       */
      function ensurePdfJs() {
        if (window.pdfjsLib) return Promise.resolve(window.pdfjsLib);
        return import('https://cdn.jsdelivr.net/npm/pdfjs-dist@4.10.38/build/pdf.min.mjs').then(function (mod) {
          mod.GlobalWorkerOptions.workerSrc = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@4.10.38/build/pdf.worker.min.mjs';
          window.pdfjsLib = mod;
          return mod;
        }).catch(function () {
          throw new Error('pdfjs');
        });
      }

      /**
       * 将错误映射为可读文案。
       * @param {unknown} err
       */
      function mapLoadError(err) {
        var s = String(err && (err.message || err) || '');
        if (s === 'pdfjs') return msg.pdfjsMissing;
        if (/password|encrypt|encrypted/i.test(s)) return msg.encrypted;
        return msg.loadFail;
      }

      /**
       * 加载用户选择的 PDF 并解析页数。
       * @param {File} file
       */
      function loadFile(file) {
        setError('');
        clearResult();
        if (!file) return Promise.resolve();
        if (!(file.type === 'application/pdf' || /\\.pdf$/i.test(file.name || ''))) {
          setError(msg.loadFail);
          return Promise.resolve();
        }
        return file.arrayBuffer().then(function (buf) {
          var bytes = new Uint8Array(buf);
          return ensurePdfJs().then(function (pdfjsLib) {
            return pdfjsLib.getDocument({ data: bytes.slice(0) }).promise;
          }).then(function (doc) {
            source = { name: file.name || 'document.pdf', bytes: bytes, pageCount: doc.numPages };
            if (parseInt(String(pageNumInput.value || '1'), 10) > doc.numPages) {
              pageNumInput.value = '1';
            }
            refreshMeta();
          });
        }).catch(function (err) {
          source = null;
          refreshMeta();
          setError(mapLoadError(err));
        });
      }

      /**
       * 将源 canvas 以 contain 居中绘制到目标尺寸（白底 JPEG）。
       * @param {HTMLCanvasElement} srcCanvas 已渲染的 PDF 页 canvas
       * @param {number} targetW 目标宽
       * @param {number} targetH 目标高
       * @returns {Promise<Blob>}
       */
      function fitToSizeJpeg(srcCanvas, targetW, targetH) {
        var canvas = document.createElement('canvas');
        canvas.width = targetW;
        canvas.height = targetH;
        var ctx = canvas.getContext('2d');
        if (!ctx) return Promise.reject(new Error('canvas'));
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, targetW, targetH);
        var srcW = srcCanvas.width;
        var srcH = srcCanvas.height;
        var scale = Math.min(targetW / srcW, targetH / srcH);
        var drawW = srcW * scale;
        var drawH = srcH * scale;
        var dx = (targetW - drawW) / 2;
        var dy = (targetH - drawH) / 2;
        ctx.drawImage(srcCanvas, dx, dy, drawW, drawH);
        return new Promise(function (resolve, reject) {
          canvas.toBlob(function (blob) {
            if (!blob) { reject(new Error('jpeg')); return; }
            resolve(blob);
          }, 'image/jpeg', JPEG_QUALITY);
        });
      }

      /**
       * 渲染单页 PDF 为高清 canvas（只渲染一次）。
       * @param {object} page pdf.js 页面对象
       * @returns {Promise<HTMLCanvasElement>}
       */
      function renderPageToCanvas(page) {
        var viewport = page.getViewport({ scale: RENDER_SCALE });
        var canvas = document.createElement('canvas');
        canvas.width = Math.floor(viewport.width);
        canvas.height = Math.floor(viewport.height);
        var ctx = canvas.getContext('2d');
        if (!ctx) return Promise.reject(new Error('canvas'));
        return page.render({ canvasContext: ctx, viewport: viewport }).promise.then(function () {
          return canvas;
        });
      }

      /**
       * 导出指定页为多尺寸 JPEG 并打 ZIP。
       * @param {Uint8Array} bytes PDF 字节
       * @param {number} pageNum 1-based 页码
       * @returns {Promise<{ blob: Blob, filename: string, sizeCount: number }>}
       */
      function buildSizePack(bytes, pageNum) {
        if (!hasFflate()) return Promise.reject(new Error('fflate'));
        return ensurePdfJs().then(function (pdfjsLib) {
          return pdfjsLib.getDocument({ data: bytes.slice(0) }).promise;
        }).then(function (pdfDoc) {
          return pdfDoc.getPage(pageNum).then(function (page) {
            return renderPageToCanvas(page);
          });
        }).then(function (srcCanvas) {
          var parts = [];
          var chain = Promise.resolve();
          PRESETS.forEach(function (preset) {
            chain = chain.then(function () {
              return fitToSizeJpeg(srcCanvas, preset.w, preset.h).then(function (blob) {
                parts.push({
                  name: 'page-' + pageNum + '-' + preset.w + 'x' + preset.h + '.jpg',
                  blob: blob
                });
              });
            });
          });
          return chain.then(function () {
            var files = {};
            return Promise.all(parts.map(function (p) {
              return p.blob.arrayBuffer().then(function (buf) {
                files[p.name] = new Uint8Array(buf);
              });
            })).then(function () {
              var zipped = fflate.zipSync(files, { level: 1 });
              return {
                blob: new Blob([zipped], { type: 'application/zip' }),
                filename: 'page-' + pageNum + '-sizes.zip',
                sizeCount: parts.length
              };
            });
          });
        });
      }

      /** 执行导出并启用下载。 */
      function exportSizes() {
        setError('');
        clearResult();
        if (!source) {
          setError(msg.empty);
          return;
        }
        var pageNum = getPageNumber();
        if (!pageNum) {
          setError(msg.badPage);
          return;
        }
        setStatus(msg.exporting);
        btnExport.disabled = true;
        buildSizePack(source.bytes, pageNum)
          .then(function (pack) {
            result = { blob: pack.blob, filename: pack.filename };
            btnDownload.disabled = false;
            statsEl.textContent = msg.statsTpl
              .replace('{page}', String(pageNum))
              .replace('{n}', String(pack.sizeCount))
              .replace('{bytes}', formatBytes(pack.blob.size));
            statsEl.style.display = '';
            setStatus(msg.done);
          })
          .catch(function (err) {
            var s = String(err && err.message || '');
            if (s === 'pdfjs') setError(msg.pdfjsMissing);
            else if (s === 'fflate') setError(msg.fflateFail);
            else setError(mapLoadError(err) === msg.loadFail ? msg.exportFail : mapLoadError(err));
            setStatus('');
          })
          .finally(function () {
            btnExport.disabled = false;
          });
      }

      /** 下载 ZIP 结果。 */
      function downloadResult() {
        if (!result) return;
        var url = URL.createObjectURL(result.blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = result.filename;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      }

      /**
       * 生成单页样例 PDF（pdf-lib）。
       * @returns {Promise<File>}
       */
      function makeSamplePdf() {
        if (!hasPdfLib()) return Promise.reject(new Error('pdflib'));
        return PDFLib.PDFDocument.create().then(function (doc) {
          return doc.embedFont(PDFLib.StandardFonts.HelveticaBold).then(function (font) {
            var page = doc.addPage([420, 300]);
            page.drawText('Sample cover page', { x: 48, y: 160, size: 22, font: font });
            page.drawText('pdf-page-to-image-sizes', { x: 48, y: 120, size: 12, font: font });
            return doc.save();
          });
        }).then(function (bytes) {
          return new File([bytes], 'sample-page-sizes.pdf', { type: 'application/pdf' });
        });
      }

      /** 加载单页样例并自动导出全部预设尺寸 ZIP。 */
      function loadSample() {
        clearAll(false);
        if (!hasPdfLib()) {
          setError(msg.pdflibMissing);
          return Promise.resolve();
        }
        pageNumInput.value = '1';
        return makeSamplePdf().then(function (file) {
          return loadFile(file);
        }).then(function () {
          if (source) exportSizes();
        });
      }

      /**
       * 重置全部状态。
       * @param {boolean} resetInput 是否清空 file input
       */
      function clearAll(resetInput) {
        source = null;
        if (resetInput !== false) fileInput.value = '';
        pageNumInput.value = '1';
        refreshMeta();
        clearResult();
        setError('');
        setStatus('');
      }

      drop.addEventListener('dragover', function (e) {
        e.preventDefault();
        drop.classList.add('dragover');
      });
      drop.addEventListener('dragleave', function () { drop.classList.remove('dragover'); });
      drop.addEventListener('drop', function (e) {
        e.preventDefault();
        drop.classList.remove('dragover');
        var fs = e.dataTransfer && e.dataTransfer.files;
        if (fs && fs[0]) loadFile(fs[0]);
      });
      fileInput.addEventListener('change', function () {
        if (fileInput.files && fileInput.files[0]) loadFile(fileInput.files[0]);
        fileInput.value = '';
      });

      btnExport.addEventListener('click', exportSizes);
      btnDownload.addEventListener('click', downloadResult);
      btnSample.addEventListener('click', function () { loadSample(); });
      btnClear.addEventListener('click', function () { clearAll(true); });

      /** 进页自动跑样例，保证 Download 有真实 ZIP 结果。 */
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('pdf-page-to-image-sizes');
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
		contentHtml: `${contentHtml}${igHtml}${toolSeoHtml}${referencesHtml}`,
		footerHtml,
		extraHeadHtml: `${extraHeadHtml}${toolJsonLd}`,
		extraBodyHtml,
		includeSidebarToggleScript: true,
		sidebarAutoCloseSelector: '#toolNav a',
	});
};
