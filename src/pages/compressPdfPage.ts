/**
 * 压缩 PDF 工具页：pdf.js 逐页栅格化 + pdf-lib 重嵌 JPEG（纯客户端有限压缩）。
 * slug: compress-pdf
 * 规格：work-tasks/compress-pdf/02-tool-info.md
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
	renderContextualToolLinks,
	buildToolJsonLd,
} from './site/toolContent';

/** 非默认语言时为路径加语言前缀。 */
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * 渲染压缩 PDF 工具页。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderCompressPdfPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/compress-pdf';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_compress_pdf_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_compress_pdf_description');

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
			currentSlug: 'compress-pdf',
			currentAnchor: '#converter',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	const extraHeadHtml = `
  <style>
    .tools-bar { gap: .5rem; }
    .compress-pdf-quality { display: flex; gap: 1rem; flex-wrap: wrap; align-items: center; }
    .compress-pdf-quality label { display: flex; align-items: center; gap: .35rem; font-size: .875rem; margin: 0; cursor: pointer; }
  </style>`;

	const contentHtml = `
    <div id="converter" class="tool-page-heading mb-3">
      <h1 class="h4 mb-0">${escapeHtml(t(opts.lang, 'tool_compress_pdf_title'))}</h1>
    </div>

    <label class="tool-dropzone compress-pdf-drop mb-3" id="compressPdfDrop" for="compressPdfFile">
      <input type="file" id="compressPdfFile" accept="application/pdf,.pdf">
      <span class="tool-dropzone-title">${escapeHtml(t(opts.lang, 'tool_compress_pdf_choose_file'))}</span>
      <span class="tool-dropzone-hint">${escapeHtml(t(opts.lang, 'tool_compress_pdf_drop_hint'))}</span>
    </label>

    <p id="compressPdfMeta" class="small text-muted mb-2" style="display:none;"></p>

    <fieldset class="compress-pdf-quality mb-3" id="compressPdfQuality">
      <legend class="form-label small mb-1">${escapeHtml(t(opts.lang, 'tool_compress_pdf_quality_label'))}</legend>
      <label><input type="radio" name="compressPdfPreset" value="med" checked> ${escapeHtml(t(opts.lang, 'tool_compress_pdf_quality_med'))}</label>
      <label><input type="radio" name="compressPdfPreset" value="low"> ${escapeHtml(t(opts.lang, 'tool_compress_pdf_quality_low'))}</label>
    </fieldset>

    <div class="d-flex align-items-center tools-bar mb-2 flex-wrap">
      <button type="button" id="compressPdfBtnCompress" class="btn btn-primary btn-sm">${escapeHtml(t(opts.lang, 'tool_compress_pdf_compress'))}</button>
      <button type="button" id="compressPdfBtnDownload" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(t(opts.lang, 'tool_compress_pdf_download'))}</button>
      <button type="button" id="compressPdfBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_compress_pdf_sample'))}</button>
      <button type="button" id="compressPdfBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_compress_pdf_clear'))}</button>
    </div>

    <p id="compressPdfWarn" class="small text-warning mb-2" style="display:none;" role="status"></p>
    <p id="compressPdfError" class="small text-danger mb-2" style="display:none;" role="alert"></p>
    <p id="compressPdfStatus" class="small text-muted mb-2" role="status"></p>
    <p id="compressPdfStats" class="small text-muted mb-3" style="display:none;"></p>

    <p class="tool-lead mb-4">${escapeHtml(description)}</p>`;

	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: 'tool_compress_pdf',
		mode: 'rules',
		usecaseCount: 3,
		ruleItemCount: 4,
	});

	const contextualHtml = renderContextualToolLinks({
		lang: opts.lang,
		defaultLang: opts.defaultLang,
		lead: 'After compressing, you may also need to',
		slugs: ['merge-pdf', 'organize-pdf', 'pdf-to-jpg'],
	});

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{ label: 'pdf-lib', href: 'https://pdf-lib.js.org/' },
			{ label: 'PDF.js', href: 'https://mozilla.github.io/pdf.js/' },
		],
	});

	/**
	 * 客户端脚本：pdf.js 栅格化 + pdf-lib 重嵌 JPEG、样例自动跑通。
	 */
	const extraBodyHtml = `
  <script src="/vendor/pdf-lib/pdf-lib.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script>
    (function () {
      /** 单文件软警告阈值（字节）。 */
      var SOFT_BYTES = 25 * 1024 * 1024;

      /** 压缩档位：Med / Low（scale + JPEG 质量）。 */
      var PRESETS = {
        med: { scale: 1.2, jpeg: 0.72 },
        low: { scale: 1.0, jpeg: 0.55 }
      };

      var drop = document.getElementById('compressPdfDrop');
      var fileInput = document.getElementById('compressPdfFile');
      var metaEl = document.getElementById('compressPdfMeta');
      var qualityEl = document.getElementById('compressPdfQuality');
      var btnCompress = document.getElementById('compressPdfBtnCompress');
      var btnDownload = document.getElementById('compressPdfBtnDownload');
      var btnSample = document.getElementById('compressPdfBtnSample');
      var btnClear = document.getElementById('compressPdfBtnClear');
      var warnEl = document.getElementById('compressPdfWarn');
      var errEl = document.getElementById('compressPdfError');
      var statusEl = document.getElementById('compressPdfStatus');
      var statsEl = document.getElementById('compressPdfStats');

      var msg = {
        empty: ${JSON.stringify(t(opts.lang, 'tool_compress_pdf_empty'))},
        encrypted: ${JSON.stringify(t(opts.lang, 'tool_compress_pdf_err_encrypted'))},
        loadFail: ${JSON.stringify(t(opts.lang, 'tool_compress_pdf_err_load'))},
        compressFail: ${JSON.stringify(t(opts.lang, 'tool_compress_pdf_err_compress'))},
        large: ${JSON.stringify(t(opts.lang, 'tool_compress_pdf_warn_large'))},
        pdflibMissing: ${JSON.stringify(t(opts.lang, 'tool_compress_pdf_warn_pdflib'))},
        pdfjsMissing: ${JSON.stringify(t(opts.lang, 'tool_compress_pdf_warn_pdfjs'))},
        little: ${JSON.stringify(t(opts.lang, 'tool_compress_pdf_warn_little'))},
        working: ${JSON.stringify(t(opts.lang, 'tool_compress_pdf_status_working'))},
        done: ${JSON.stringify(t(opts.lang, 'tool_compress_pdf_status_done'))},
        pagesLabel: ${JSON.stringify(t(opts.lang, 'tool_compress_pdf_pages_label'))},
        statsTpl: ${JSON.stringify(t(opts.lang, 'tool_compress_pdf_stats_tpl'))}
      };

      /** @type {Uint8Array|null} 源 PDF 字节 */
      var sourceBytes = null;
      /** @type {string} 源文件名 */
      var sourceName = '';
      /** @type {number} 源页数 */
      var sourcePageCount = 0;
      /** @type {Uint8Array|null} 最近一次压缩结果 */
      var resultBytes = null;

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

      /** pdf-lib 是否可用。 */
      function hasPdfLib() {
        return typeof PDFLib !== 'undefined' && PDFLib && typeof PDFLib.PDFDocument === 'function';
      }

      /** 读取当前选中的压缩档位。 */
      function getPreset() {
        var checked = qualityEl.querySelector('input[name="compressPdfPreset"]:checked');
        var val = checked && checked.value;
        return PRESETS[val] ? val : 'med';
      }

      /** 清空压缩结果。 */
      function clearResult() {
        resultBytes = null;
        btnDownload.disabled = true;
        statsEl.style.display = 'none';
        statsEl.textContent = '';
      }

      /** 刷新元信息与软警告。 */
      function refreshMeta() {
        if (!sourceBytes) {
          metaEl.style.display = 'none';
          metaEl.textContent = '';
          setWarn('');
          return;
        }
        metaEl.textContent = sourceName + ' · ' + msg.pagesLabel + ': ' + sourcePageCount + ' · ' + formatBytes(sourceBytes.length);
        metaEl.style.display = '';
        setWarn(sourceBytes.length > SOFT_BYTES ? msg.large : '');
      }

      /**
       * 懒加载 pdf.js（首次压缩或样例时调用）。
       * @returns {Promise<object>}
       */
      function ensurePdfJs() {
        if (window.pdfjsLib) return Promise.resolve(window.pdfjsLib);
        return import('/vendor/pdfjs/pdf.min.mjs').then(function (mod) {
          mod.GlobalWorkerOptions.workerSrc = '/vendor/pdfjs/pdf.worker.min.mjs';
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
       * 用源字节解析页数并更新状态。
       * @param {Uint8Array} bytes
       * @param {string} name
       */
      function setSource(bytes, name) {
        if (!hasPdfLib()) return Promise.reject(new Error('pdflib'));
        return PDFLib.PDFDocument.load(bytes, { ignoreEncryption: false }).then(function (doc) {
          sourceBytes = bytes;
          sourceName = name || 'document.pdf';
          sourcePageCount = doc.getPageCount();
          refreshMeta();
          clearResult();
        });
      }

      /**
       * 加载用户选择的 PDF。
       * @param {File} file
       */
      function loadFile(file) {
        setError('');
        if (!file) return Promise.resolve();
        if (!(file.type === 'application/pdf' || /\\.pdf$/i.test(file.name || ''))) {
          setError(msg.loadFail);
          return Promise.resolve();
        }
        if (!hasPdfLib()) {
          setError(msg.pdflibMissing);
          return Promise.resolve();
        }
        return file.arrayBuffer().then(function (buf) {
          return setSource(new Uint8Array(buf), file.name);
        }).catch(function (err) {
          setError(mapLoadError(err));
        });
      }

      /**
       * 逐页栅格化为 JPEG 并用 pdf-lib 重建 PDF。
       * @param {Uint8Array} bytes
       * @param {string} presetKey med|low
       * @returns {Promise<Uint8Array>}
       */
      function buildCompressed(bytes, presetKey) {
        if (!hasPdfLib()) return Promise.reject(new Error('pdflib'));
        var cfg = PRESETS[presetKey] || PRESETS.med;
        return ensurePdfJs().then(function (pdfjsLib) {
          return pdfjsLib.getDocument({ data: bytes.slice(0) }).promise;
        }).then(function (pdfDoc) {
          var numPages = pdfDoc.numPages;
          return PDFLib.PDFDocument.create().then(function (outDoc) {
            var chain = Promise.resolve();
            for (var p = 1; p <= numPages; p++) {
              (function (pageNum) {
                chain = chain.then(function () {
                  return pdfDoc.getPage(pageNum).then(function (page) {
                    var viewport = page.getViewport({ scale: cfg.scale });
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
                        }, 'image/jpeg', cfg.jpeg);
                      });
                    }).then(function (blob) {
                      return blob.arrayBuffer();
                    }).then(function (jpegBuf) {
                      return outDoc.embedJpg(new Uint8Array(jpegBuf)).then(function (jpegImage) {
                        var pg = outDoc.addPage([jpegImage.width, jpegImage.height]);
                        pg.drawImage(jpegImage, {
                          x: 0,
                          y: 0,
                          width: jpegImage.width,
                          height: jpegImage.height
                        });
                      });
                    });
                  });
                });
              })(p);
            }
            return chain.then(function () { return outDoc.save(); });
          });
        });
      }

      /** 执行压缩并启用下载。 */
      function compress() {
        setError('');
        clearResult();
        if (!sourceBytes) {
          setError(msg.empty);
          return;
        }
        if (!hasPdfLib()) {
          setError(msg.pdflibMissing);
          return;
        }
        var presetKey = getPreset();
        setStatus(msg.working);
        btnCompress.disabled = true;
        buildCompressed(sourceBytes, presetKey)
          .then(function (bytes) {
            resultBytes = bytes;
            btnDownload.disabled = false;
            var fromB = sourceBytes.length;
            var toB = bytes.length;
            var pct = fromB > 0 ? Math.round((1 - toB / fromB) * 100) : 0;
            statsEl.textContent = msg.statsTpl
              .replace('{from}', formatBytes(fromB))
              .replace('{to}', formatBytes(toB))
              .replace('{pct}', String(pct));
            statsEl.style.display = '';
            if (pct < 5) setWarn(msg.little);
            setStatus(msg.done);
          })
          .catch(function (err) {
            if (String(err && err.message) === 'pdflib') setError(msg.pdflibMissing);
            else if (String(err && err.message) === 'pdfjs') setError(msg.pdfjsMissing);
            else setError(mapLoadError(err) === msg.loadFail ? msg.compressFail : mapLoadError(err));
            setStatus('');
          })
          .finally(function () {
            btnCompress.disabled = false;
          });
      }

      /** 下载压缩结果。 */
      function downloadResult() {
        if (!resultBytes) return;
        var blob = new Blob([resultBytes], { type: 'application/pdf' });
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = 'compressed.pdf';
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      }

      /**
       * 在离屏 canvas 上绘制渐变与色块（模拟附图内容）。
       * @param {number} w
       * @param {number} h
       * @returns {Promise<Blob>}
       */
      function canvasToJpegBlob(w, h) {
        var canvas = document.createElement('canvas');
        canvas.width = w;
        canvas.height = h;
        var ctx = canvas.getContext('2d');
        if (!ctx) return Promise.reject(new Error('canvas'));
        var grad = ctx.createLinearGradient(0, 0, w, h);
        grad.addColorStop(0, '#1c83a8');
        grad.addColorStop(0.5, '#2ecc71');
        grad.addColorStop(1, '#e67e22');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);
        for (var i = 0; i < 24; i++) {
          ctx.fillStyle = 'rgba(255,255,255,' + (0.15 + (i % 5) * 0.08) + ')';
          ctx.fillRect((i * 37) % (w - 80), (i * 53) % (h - 60), 60 + (i % 3) * 20, 40 + (i % 4) * 15);
        }
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 3;
        ctx.strokeRect(40, 40, w - 80, h - 80);
        return new Promise(function (resolve, reject) {
          canvas.toBlob(function (blob) {
            if (!blob) { reject(new Error('jpeg')); return; }
            resolve(blob);
          }, 'image/jpeg', 0.92);
        });
      }

      /**
       * 生成含嵌入 JPEG 的两页样例 PDF（便于演示体积变化）。
       * @returns {Promise<File>}
       */
      function makeSamplePdf() {
        return canvasToJpegBlob(900, 650).then(function (blob) {
          return blob.arrayBuffer();
        }).then(function (jpegBuf) {
          return PDFLib.PDFDocument.create().then(function (doc) {
            return doc.embedJpg(new Uint8Array(jpegBuf)).then(function (img) {
              var dims = { w: img.width, h: img.height };
              var chain = Promise.resolve();
              for (var n = 0; n < 2; n++) {
                chain = chain.then(function () {
                  var page = doc.addPage([dims.w, dims.h]);
                  page.drawImage(img, { x: 0, y: 0, width: dims.w, height: dims.h });
                  page.drawText('Sample page for compress-pdf', {
                    x: 24,
                    y: dims.h - 36,
                    size: 14,
                    color: PDFLib.rgb(1, 1, 1)
                  });
                });
              }
              return chain.then(function () { return doc.save(); });
            });
          });
        }).then(function (bytes) {
          return new File([bytes], 'sample-compress.pdf', { type: 'application/pdf' });
        });
      }

      /** 加载样例并以 Med 档自动压缩。 */
      function loadSample() {
        clearAll(false);
        if (!hasPdfLib()) {
          setError(msg.pdflibMissing);
          return Promise.resolve();
        }
        var medRadio = qualityEl.querySelector('input[value="med"]');
        if (medRadio) medRadio.checked = true;
        return makeSamplePdf().then(function (file) {
          return loadFile(file);
        }).then(function () {
          if (sourceBytes) compress();
        });
      }

      /**
       * 重置全部状态。
       * @param {boolean} resetInput 是否清空 file input
       */
      function clearAll(resetInput) {
        sourceBytes = null;
        sourceName = '';
        sourcePageCount = 0;
        if (resetInput !== false) fileInput.value = '';
        clearResult();
        refreshMeta();
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

      btnCompress.addEventListener('click', compress);
      btnDownload.addEventListener('click', downloadResult);
      btnSample.addEventListener('click', function () { loadSample(); });
      btnClear.addEventListener('click', function () { clearAll(true); });

      /** 进页自动跑样例，保证 Download 有真实结果。 */
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('compress-pdf');
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
		contentHtml: `${contentHtml}${igHtml}${contextualHtml}${toolSeoHtml}${referencesHtml}`,
		footerHtml,
		extraHeadHtml: `${extraHeadHtml}${toolJsonLd}`,
		extraBodyHtml,
		includeSidebarToggleScript: true,
		sidebarAutoCloseSelector: '#toolNav a',
	});
};
