/**
 * PDF 转 JPG 工具页：pdf.js 逐页栅格化为 JPEG；多页时 fflate 打 ZIP（纯客户端）。
 * slug: pdf-to-jpg
 * 规格：work-tasks/pdf-to-jpg/02-tool-info.md
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
 * 渲染 PDF 转 JPG 工具页。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderPdfToJpgPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/pdf-to-jpg';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_pdf_to_jpg_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_pdf_to_jpg_description');

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
			currentSlug: 'pdf-to-jpg',
			currentAnchor: '#converter',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	const extraHeadHtml = `
  <style>
    .tools-bar { gap: .5rem; }
    .pdf-to-jpg-meta { font-size: .85rem; color: #6c757d; }
  </style>`;

	const contentHtml = `
    <div id="converter" class="tool-page-heading mb-3">
      <h1 class="h4 mb-0">${escapeHtml(t(opts.lang, 'tool_pdf_to_jpg_title'))}</h1>
    </div>

    <label class="tool-dropzone pdf-to-jpg-drop mb-3" id="pdfToJpgDrop" for="pdfToJpgFile">
      <input type="file" id="pdfToJpgFile" accept="application/pdf,.pdf">
      <span class="tool-dropzone-title">${escapeHtml(t(opts.lang, 'tool_pdf_to_jpg_choose_file'))}</span>
      <span class="tool-dropzone-hint">${escapeHtml(t(opts.lang, 'tool_pdf_to_jpg_drop_hint'))}</span>
    </label>

    <p id="pdfToJpgMeta" class="pdf-to-jpg-meta mb-2" style="display:none;"></p>

    <div class="d-flex align-items-center tools-bar mb-2 flex-wrap">
      <button type="button" id="pdfToJpgBtnConvert" class="btn btn-primary btn-sm">${escapeHtml(t(opts.lang, 'tool_pdf_to_jpg_convert'))}</button>
      <button type="button" id="pdfToJpgBtnDownload" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(t(opts.lang, 'tool_pdf_to_jpg_download'))}</button>
      <button type="button" id="pdfToJpgBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_pdf_to_jpg_sample'))}</button>
      <button type="button" id="pdfToJpgBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_pdf_to_jpg_clear'))}</button>
    </div>

    <p id="pdfToJpgWarn" class="small text-warning mb-2" style="display:none;" role="status"></p>
    <p id="pdfToJpgError" class="small text-danger mb-2" style="display:none;" role="alert"></p>
    <p id="pdfToJpgStatus" class="small text-muted mb-2" role="status"></p>
    <p id="pdfToJpgStats" class="small text-muted mb-3" style="display:none;"></p>

    <p class="tool-lead mb-4">${escapeHtml(description)}</p>`;

	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: 'tool_pdf_to_jpg',
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
	 * 客户端脚本：pdf.js 栅格化 + Canvas JPEG + 多页 ZIP。
	 * scale 默认 2；JPEG 质量 0.92；单页直出 JPG，多页 fflate ZIP。
	 */
	const extraBodyHtml = `
  <script src="https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/dist/pdf-lib.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script src="https://cdn.jsdelivr.net/npm/fflate@0.8.2/umd/index.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script>
    (function () {
      /** 单文件软警告阈值（字节）。 */
      var SOFT_BYTES = 25 * 1024 * 1024;
      /** 栅格化缩放倍数（默认 2，提高文字清晰度）。 */
      var RENDER_SCALE = 2;
      /** JPEG 导出质量（0–1）。 */
      var JPEG_QUALITY = 0.92;

      var drop = document.getElementById('pdfToJpgDrop');
      var fileInput = document.getElementById('pdfToJpgFile');
      var metaEl = document.getElementById('pdfToJpgMeta');
      var btnConvert = document.getElementById('pdfToJpgBtnConvert');
      var btnDownload = document.getElementById('pdfToJpgBtnDownload');
      var btnSample = document.getElementById('pdfToJpgBtnSample');
      var btnClear = document.getElementById('pdfToJpgBtnClear');
      var warnEl = document.getElementById('pdfToJpgWarn');
      var errEl = document.getElementById('pdfToJpgError');
      var statusEl = document.getElementById('pdfToJpgStatus');
      var statsEl = document.getElementById('pdfToJpgStats');

      var msg = {
        empty: ${JSON.stringify(t(opts.lang, 'tool_pdf_to_jpg_empty'))},
        encrypted: ${JSON.stringify(t(opts.lang, 'tool_pdf_to_jpg_err_encrypted'))},
        loadFail: ${JSON.stringify(t(opts.lang, 'tool_pdf_to_jpg_err_load'))},
        convertFail: ${JSON.stringify(t(opts.lang, 'tool_pdf_to_jpg_err_convert'))},
        fflateFail: ${JSON.stringify(t(opts.lang, 'tool_pdf_to_jpg_err_fflate'))},
        pdfjsMissing: ${JSON.stringify(t(opts.lang, 'tool_pdf_to_jpg_err_pdfjs'))},
        pdflibMissing: ${JSON.stringify(t(opts.lang, 'tool_pdf_to_jpg_warn_pdflib'))},
        large: ${JSON.stringify(t(opts.lang, 'tool_pdf_to_jpg_warn_large'))},
        converting: ${JSON.stringify(t(opts.lang, 'tool_pdf_to_jpg_status_converting'))},
        done: ${JSON.stringify(t(opts.lang, 'tool_pdf_to_jpg_status_done'))},
        pagesLabel: ${JSON.stringify(t(opts.lang, 'tool_pdf_to_jpg_pages_label'))},
        statsTpl: ${JSON.stringify(t(opts.lang, 'tool_pdf_to_jpg_stats_tpl'))}
      };

      /** @type {{ name: string, bytes: Uint8Array, pageCount: number }|null} 已加载的源 PDF */
      var source = null;
      /** @type {{ blob: Blob, filename: string }|null} 最近一次转换结果 */
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

      /** fflate 是否可用（多页 ZIP）。 */
      function hasFflate() {
        return typeof fflate !== 'undefined' && fflate && typeof fflate.zipSync === 'function';
      }

      /** 清空转换结果。 */
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
      }

      /**
       * 懒加载 pdf.js（首次转换或样例时调用）。
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
            refreshMeta();
          });
        }).catch(function (err) {
          source = null;
          refreshMeta();
          setError(mapLoadError(err));
        });
      }

      /**
       * 将单页渲染为 JPEG Blob。
       * @param {object} page pdf.js 页面对象
       * @returns {Promise<Blob>}
       */
      function renderPageToJpeg(page) {
        var viewport = page.getViewport({ scale: RENDER_SCALE });
        var canvas = document.createElement('canvas');
        canvas.width = Math.floor(viewport.width);
        canvas.height = Math.floor(viewport.height);
        var ctx = canvas.getContext('2d');
        if (!ctx) return Promise.reject(new Error('canvas'));
        return page.render({ canvasContext: ctx, viewport: viewport }).promise.then(function () {
          return new Promise(function (resolve, reject) {
            canvas.toBlob(function (blob) {
              if (!blob) { reject(new Error('jpeg')); return; }
              resolve(blob);
            }, 'image/jpeg', JPEG_QUALITY);
          });
        });
      }

      /**
       * 逐页栅格化 PDF 为 JPG 数组。
       * @param {Uint8Array} bytes
       * @returns {Promise<{ name: string, blob: Blob }[]>}
       */
      function buildJpegs(bytes) {
        return ensurePdfJs().then(function (pdfjsLib) {
          return pdfjsLib.getDocument({ data: bytes.slice(0) }).promise;
        }).then(function (pdfDoc) {
          var numPages = pdfDoc.numPages;
          var parts = [];
          var chain = Promise.resolve();
          for (var p = 1; p <= numPages; p++) {
            (function (pageNum) {
              chain = chain.then(function () {
                return pdfDoc.getPage(pageNum).then(function (page) {
                  return renderPageToJpeg(page).then(function (blob) {
                    parts.push({ name: 'page-' + pageNum + '.jpg', blob: blob });
                  });
                });
              });
            })(p);
          }
          return chain.then(function () { return parts; });
        });
      }

      /** 执行转换并启用下载。 */
      function convert() {
        setError('');
        clearResult();
        if (!source) {
          setError(msg.empty);
          return;
        }
        setStatus(msg.converting);
        btnConvert.disabled = true;
        buildJpegs(source.bytes)
          .then(function (parts) {
            if (!parts.length) throw new Error('empty');
            if (parts.length === 1) {
              result = { blob: parts[0].blob, filename: parts[0].name };
              return;
            }
            if (!hasFflate()) throw new Error('fflate');
            var files = {};
            return Promise.all(parts.map(function (p) {
              return p.blob.arrayBuffer().then(function (buf) {
                files[p.name] = new Uint8Array(buf);
              });
            })).then(function () {
              var zipped = fflate.zipSync(files, { level: 1 });
              result = { blob: new Blob([zipped], { type: 'application/zip' }), filename: 'pdf-pages.zip' };
            });
          })
          .then(function () {
            if (!result) return;
            btnDownload.disabled = false;
            statsEl.textContent = msg.statsTpl
              .replace('{n}', String(source.pageCount))
              .replace('{bytes}', formatBytes(result.blob.size));
            statsEl.style.display = '';
            setStatus(msg.done);
          })
          .catch(function (err) {
            var s = String(err && err.message || '');
            if (s === 'pdfjs') setError(msg.pdfjsMissing);
            else if (s === 'fflate') setError(msg.fflateFail);
            else if (s === 'empty') setError(msg.convertFail);
            else setError(mapLoadError(err) === msg.loadFail ? msg.convertFail : mapLoadError(err));
            setStatus('');
          })
          .finally(function () {
            btnConvert.disabled = false;
          });
      }

      /** 下载转换结果（单 JPG 或 ZIP）。 */
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
       * 生成带标签的两页迷你 PDF（样例用）。
       * @param {string[]} labels
       * @returns {Promise<File>}
       */
      function makeSamplePdf(labels) {
        if (!hasPdfLib()) return Promise.reject(new Error('pdflib'));
        return PDFLib.PDFDocument.create().then(function (doc) {
          return doc.embedFont(PDFLib.StandardFonts.HelveticaBold).then(function (font) {
            labels.forEach(function (label) {
              var page = doc.addPage([420, 300]);
              page.drawText(label, { x: 48, y: 160, size: 28, font: font });
              page.drawText('Sample page for pdf-to-jpg', { x: 48, y: 120, size: 12, font: font });
            });
            return doc.save();
          });
        }).then(function (bytes) {
          return new File([bytes], 'sample-pdf-to-jpg.pdf', { type: 'application/pdf' });
        });
      }

      /** 加载两页样例并自动转换（ZIP 可下载）。 */
      function loadSample() {
        clearAll(false);
        if (!hasPdfLib()) {
          setError(msg.pdflibMissing);
          return Promise.resolve();
        }
        return makeSamplePdf(['Page 1', 'Page 2']).then(function (file) {
          return loadFile(file);
        }).then(function () {
          if (source) convert();
        });
      }

      /**
       * 重置全部状态。
       * @param {boolean} resetInput 是否清空 file input
       */
      function clearAll(resetInput) {
        source = null;
        if (resetInput !== false) fileInput.value = '';
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

      btnConvert.addEventListener('click', convert);
      btnDownload.addEventListener('click', downloadResult);
      btnSample.addEventListener('click', function () { loadSample(); });
      btnClear.addEventListener('click', function () { clearAll(true); });

      /** 进页自动跑样例，保证 Download 有真实 ZIP 结果。 */
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('pdf-to-jpg');
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
