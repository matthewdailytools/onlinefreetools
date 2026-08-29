/**
 * PDF 水印工具页：pdf-lib 在每一页盖文字/可选图片水印（纯客户端）。
 * slug: pdf-watermark
 * 规格：work-tasks/pdf-watermark/02-tool-info.md
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
 * 渲染 PDF 水印工具页。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderPdfWatermarkPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/pdf-watermark';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_pdf_watermark_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_pdf_watermark_description');

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
			currentSlug: 'pdf-watermark',
			currentAnchor: '#converter',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	const extraHeadHtml = `
  <style>
    .tools-bar { gap: .5rem; }
    .pdf-watermark-controls label { font-size: .875rem; margin-bottom: .25rem; }
    .pdf-watermark-controls .form-range { max-width: 12rem; }
  </style>`;

	const contentHtml = `
    <div id="converter" class="tool-page-heading mb-3">
      <h1 class="h4 mb-0">${escapeHtml(t(opts.lang, 'tool_pdf_watermark_title'))}</h1>
    </div>

    <label class="tool-dropzone pdf-watermark-drop mb-3" id="pdfWatermarkDrop" for="pdfWatermarkFile">
      <input type="file" id="pdfWatermarkFile" accept="application/pdf,.pdf">
      <span class="tool-dropzone-title">${escapeHtml(t(opts.lang, 'tool_pdf_watermark_choose_file'))}</span>
      <span class="tool-dropzone-hint">${escapeHtml(t(opts.lang, 'tool_pdf_watermark_drop_hint'))}</span>
    </label>

    <p id="pdfWatermarkMeta" class="small text-muted mb-2" style="display:none;"></p>

    <div class="pdf-watermark-controls row g-2 mb-2">
      <div class="col-md-6">
        <label class="form-label" for="pdfWatermarkText">${escapeHtml(t(opts.lang, 'tool_pdf_watermark_text_label'))}</label>
        <input type="text" class="form-control form-control-sm" id="pdfWatermarkText" value="DRAFT" maxlength="80">
      </div>
      <div class="col-md-6">
        <label class="form-label" for="pdfWatermarkPosition">${escapeHtml(t(opts.lang, 'tool_pdf_watermark_position_label'))}</label>
        <select class="form-select form-select-sm" id="pdfWatermarkPosition">
          <option value="center" selected>${escapeHtml(t(opts.lang, 'tool_pdf_watermark_position_center'))}</option>
          <option value="tl">${escapeHtml(t(opts.lang, 'tool_pdf_watermark_position_tl'))}</option>
          <option value="tr">${escapeHtml(t(opts.lang, 'tool_pdf_watermark_position_tr'))}</option>
          <option value="bl">${escapeHtml(t(opts.lang, 'tool_pdf_watermark_position_bl'))}</option>
          <option value="br">${escapeHtml(t(opts.lang, 'tool_pdf_watermark_position_br'))}</option>
        </select>
      </div>
      <div class="col-md-4">
        <label class="form-label" for="pdfWatermarkOpacity">${escapeHtml(t(opts.lang, 'tool_pdf_watermark_opacity_label'))} <span id="pdfWatermarkOpacityVal">0.35</span></label>
        <input type="range" class="form-range" id="pdfWatermarkOpacity" min="0.1" max="1" step="0.05" value="0.35">
      </div>
      <div class="col-md-4">
        <label class="form-label" for="pdfWatermarkRotation">${escapeHtml(t(opts.lang, 'tool_pdf_watermark_rotation_label'))}</label>
        <input type="number" class="form-control form-control-sm" id="pdfWatermarkRotation" value="-45" min="-180" max="180" step="1">
      </div>
      <div class="col-md-4">
        <label class="form-label" for="pdfWatermarkImage">${escapeHtml(t(opts.lang, 'tool_pdf_watermark_image_label'))}</label>
        <input type="file" class="form-control form-control-sm" id="pdfWatermarkImage" accept="image/png,image/jpeg,.png,.jpg,.jpeg">
        <span class="form-text">${escapeHtml(t(opts.lang, 'tool_pdf_watermark_image_hint'))}</span>
      </div>
    </div>

    <div class="d-flex align-items-center tools-bar mb-2 flex-wrap">
      <button type="button" id="pdfWatermarkBtnApply" class="btn btn-primary btn-sm">${escapeHtml(t(opts.lang, 'tool_pdf_watermark_apply'))}</button>
      <button type="button" id="pdfWatermarkBtnDownload" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(t(opts.lang, 'tool_pdf_watermark_download'))}</button>
      <button type="button" id="pdfWatermarkBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_pdf_watermark_sample'))}</button>
      <button type="button" id="pdfWatermarkBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_pdf_watermark_clear'))}</button>
    </div>

    <p id="pdfWatermarkWarn" class="small text-warning mb-2" style="display:none;" role="status"></p>
    <p id="pdfWatermarkError" class="small text-danger mb-2" style="display:none;" role="alert"></p>
    <p id="pdfWatermarkStatus" class="small text-muted mb-2" role="status"></p>
    <p id="pdfWatermarkStats" class="small text-muted mb-3" style="display:none;"></p>

    <p class="tool-lead mb-4">${escapeHtml(description)}</p>`;

	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: 'tool_pdf_watermark',
		mode: 'rules',
		usecaseCount: 3,
		ruleItemCount: 4,
	});

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [{ label: 'pdf-lib', href: 'https://pdf-lib.js.org/' }],
	});

	/**
	 * 客户端脚本：pdf-lib drawText/drawImage 逐页水印、样例自动跑通。
	 */
	const extraBodyHtml = `
  <script src="https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/dist/pdf-lib.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script>
    (function () {
      /** 单文件软警告阈值（字节）。 */
      var SOFT_BYTES = 25 * 1024 * 1024;

      var drop = document.getElementById('pdfWatermarkDrop');
      var fileInput = document.getElementById('pdfWatermarkFile');
      var metaEl = document.getElementById('pdfWatermarkMeta');
      var textInput = document.getElementById('pdfWatermarkText');
      var positionSelect = document.getElementById('pdfWatermarkPosition');
      var opacityInput = document.getElementById('pdfWatermarkOpacity');
      var opacityVal = document.getElementById('pdfWatermarkOpacityVal');
      var rotationInput = document.getElementById('pdfWatermarkRotation');
      var imageInput = document.getElementById('pdfWatermarkImage');
      var btnApply = document.getElementById('pdfWatermarkBtnApply');
      var btnDownload = document.getElementById('pdfWatermarkBtnDownload');
      var btnSample = document.getElementById('pdfWatermarkBtnSample');
      var btnClear = document.getElementById('pdfWatermarkBtnClear');
      var warnEl = document.getElementById('pdfWatermarkWarn');
      var errEl = document.getElementById('pdfWatermarkError');
      var statusEl = document.getElementById('pdfWatermarkStatus');
      var statsEl = document.getElementById('pdfWatermarkStats');

      var msg = {
        empty: ${JSON.stringify(t(opts.lang, 'tool_pdf_watermark_empty'))},
        encrypted: ${JSON.stringify(t(opts.lang, 'tool_pdf_watermark_err_encrypted'))},
        loadFail: ${JSON.stringify(t(opts.lang, 'tool_pdf_watermark_err_load'))},
        applyFail: ${JSON.stringify(t(opts.lang, 'tool_pdf_watermark_err_apply'))},
        imageFail: ${JSON.stringify(t(opts.lang, 'tool_pdf_watermark_err_image'))},
        large: ${JSON.stringify(t(opts.lang, 'tool_pdf_watermark_warn_large'))},
        pdflibMissing: ${JSON.stringify(t(opts.lang, 'tool_pdf_watermark_warn_pdflib'))},
        working: ${JSON.stringify(t(opts.lang, 'tool_pdf_watermark_status_working'))},
        done: ${JSON.stringify(t(opts.lang, 'tool_pdf_watermark_status_done'))},
        pagesLabel: ${JSON.stringify(t(opts.lang, 'tool_pdf_watermark_pages_label'))},
        statsTpl: ${JSON.stringify(t(opts.lang, 'tool_pdf_watermark_stats_tpl'))}
      };

      /** @type {Uint8Array|null} 源 PDF 字节 */
      var sourceBytes = null;
      /** @type {string} 源文件名 */
      var sourceName = '';
      /** @type {number} 源页数 */
      var sourcePageCount = 0;
      /** @type {Uint8Array|null} 最近一次水印结果 */
      var resultBytes = null;
      /** @type {Uint8Array|null} 可选图片水印字节 */
      var imageBytes = null;
      /** @type {'png'|'jpg'|null} 图片类型 */
      var imageKind = null;

      opacityInput.addEventListener('input', function () {
        opacityVal.textContent = Number(opacityInput.value).toFixed(2);
      });

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

      /** 清空水印结果。 */
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
       * 将错误映射为可读文案。
       * @param {unknown} err
       */
      function mapLoadError(err) {
        var s = String(err && (err.message || err) || '');
        if (/password|encrypt|encrypted/i.test(s)) return msg.encrypted;
        return msg.loadFail;
      }

      /**
       * 读取当前水印参数。
       * @returns {{ text: string, opacity: number, rotation: number, position: string }}
       */
      function getParams() {
        return {
          text: String(textInput.value || '').trim(),
          opacity: Math.min(1, Math.max(0.1, Number(opacityInput.value) || 0.35)),
          rotation: Number(rotationInput.value) || -45,
          position: String(positionSelect.value || 'center')
        };
      }

      /**
       * 根据位置键计算文字左下角坐标（pdf-lib 坐标系：左下为原点）。
       * @param {string} pos center|tl|tr|bl|br
       * @param {number} pageW 页宽
       * @param {number} pageH 页高
       * @param {number} textW 文字宽
       * @param {number} textH 文字高
       * @returns {{ x: number, y: number }}
       */
      function calcTextOrigin(pos, pageW, pageH, textW, textH) {
        var margin = 48;
        if (pos === 'tl') return { x: margin, y: pageH - margin - textH };
        if (pos === 'tr') return { x: pageW - margin - textW, y: pageH - margin - textH };
        if (pos === 'bl') return { x: margin, y: margin };
        if (pos === 'br') return { x: pageW - margin - textW, y: margin };
        return { x: (pageW - textW) / 2, y: (pageH - textH) / 2 };
      }

      /**
       * 根据位置键计算图片左下角坐标。
       * @param {string} pos
       * @param {number} pageW
       * @param {number} pageH
       * @param {number} imgW
       * @param {number} imgH
       */
      function calcImageOrigin(pos, pageW, pageH, imgW, imgH) {
        var margin = 36;
        if (pos === 'tl') return { x: margin, y: pageH - margin - imgH };
        if (pos === 'tr') return { x: pageW - margin - imgW, y: pageH - margin - imgH };
        if (pos === 'bl') return { x: margin, y: margin };
        if (pos === 'br') return { x: pageW - margin - imgW, y: margin };
        return { x: (pageW - imgW) / 2, y: (pageH - imgH) / 2 };
      }

      /**
       * 在已加载文档的每一页绘制文字/可选图片水印。
       * @param {Uint8Array} bytes 源 PDF
       * @param {{ text: string, opacity: number, rotation: number, position: string }} params
       * @returns {Promise<Uint8Array>}
       */
      function buildWatermarked(bytes, params) {
        if (!hasPdfLib()) return Promise.reject(new Error('pdflib'));
        return PDFLib.PDFDocument.load(bytes.slice(0), { ignoreEncryption: false }).then(function (doc) {
          return doc.embedFont(PDFLib.StandardFonts.Helvetica).then(function (font) {
            var pages = doc.getPages();
            var fontSize = 48;
            var text = params.text || 'DRAFT';
            var textW = font.widthOfTextAtSize(text, fontSize);
            var textH = font.heightAtSize(fontSize);
            var gray = PDFLib.rgb(0.45, 0.45, 0.45);
            var rot = PDFLib.degrees(params.rotation);

            /** 嵌入可选图片水印。 */
            var embedImage = Promise.resolve(null);
            if (imageBytes && imageKind === 'png') {
              embedImage = doc.embedPng(imageBytes);
            } else if (imageBytes && imageKind === 'jpg') {
              embedImage = doc.embedJpg(imageBytes);
            }

            return embedImage.then(function (img) {
              pages.forEach(function (page) {
                var size = page.getSize();
                var w = size.width;
                var h = size.height;

                if (text) {
                  var origin = calcTextOrigin(params.position, w, h, textW, textH);
                  page.drawText(text, {
                    x: origin.x,
                    y: origin.y,
                    size: fontSize,
                    font: font,
                    color: gray,
                    opacity: params.opacity,
                    rotate: rot
                  });
                }

                if (img) {
                  var maxW = w * 0.35;
                  var maxH = h * 0.35;
                  var scale = Math.min(maxW / img.width, maxH / img.height, 1);
                  var imgW = img.width * scale;
                  var imgH = img.height * scale;
                  var imgOrigin = calcImageOrigin(params.position, w, h, imgW, imgH);
                  page.drawImage(img, {
                    x: imgOrigin.x,
                    y: imgOrigin.y,
                    width: imgW,
                    height: imgH,
                    opacity: params.opacity,
                    rotate: rot
                  });
                }
              });
              return doc.save();
            });
          });
        });
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

      /** 执行水印并启用下载。 */
      function applyWatermark() {
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
        var params = getParams();
        setStatus(msg.working);
        btnApply.disabled = true;
        buildWatermarked(sourceBytes, params)
          .then(function (bytes) {
            resultBytes = bytes;
            btnDownload.disabled = false;
            statsEl.textContent = msg.statsTpl
              .replace('{pages}', String(sourcePageCount))
              .replace('{bytes}', formatBytes(bytes.length));
            statsEl.style.display = '';
            setStatus(msg.done);
          })
          .catch(function (err) {
            if (String(err && err.message) === 'pdflib') setError(msg.pdflibMissing);
            else setError(mapLoadError(err) === msg.loadFail ? msg.applyFail : mapLoadError(err));
            setStatus('');
          })
          .finally(function () {
            btnApply.disabled = false;
          });
      }

      /** 下载水印结果。 */
      function downloadResult() {
        if (!resultBytes) return;
        var blob = new Blob([resultBytes], { type: 'application/pdf' });
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = 'watermarked.pdf';
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      }

      /**
       * 生成两页样例 PDF（纯文字页，便于演示 DRAFT 水印）。
       * @returns {Promise<File>}
       */
      function makeSamplePdf() {
        return PDFLib.PDFDocument.create().then(function (doc) {
          return doc.embedFont(PDFLib.StandardFonts.Helvetica).then(function (font) {
            for (var n = 0; n < 2; n++) {
              var page = doc.addPage([595, 842]);
              page.drawText('Sample page ' + (n + 1) + ' for pdf-watermark', {
                x: 72,
                y: 780,
                size: 14,
                font: font,
                color: PDFLib.rgb(0.2, 0.2, 0.2)
              });
              page.drawText('Replace me with your contract or draft.', {
                x: 72,
                y: 740,
                size: 11,
                font: font,
                color: PDFLib.rgb(0.4, 0.4, 0.4)
              });
            }
            return doc.save();
          });
        }).then(function (bytes) {
          return new File([bytes], 'sample-watermark.pdf', { type: 'application/pdf' });
        });
      }

      /** 加载样例并以 DRAFT 默认参数自动水印。 */
      function loadSample() {
        clearAll(false);
        if (!hasPdfLib()) {
          setError(msg.pdflibMissing);
          return Promise.resolve();
        }
        textInput.value = 'DRAFT';
        positionSelect.value = 'center';
        opacityInput.value = '0.35';
        opacityVal.textContent = '0.35';
        rotationInput.value = '-45';
        imageInput.value = '';
        imageBytes = null;
        imageKind = null;
        return makeSamplePdf().then(function (file) {
          return loadFile(file);
        }).then(function () {
          if (sourceBytes) applyWatermark();
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
        imageBytes = null;
        imageKind = null;
        if (resetInput !== false) {
          fileInput.value = '';
          imageInput.value = '';
        }
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

      imageInput.addEventListener('change', function () {
        setError('');
        var f = imageInput.files && imageInput.files[0];
        if (!f) {
          imageBytes = null;
          imageKind = null;
          return;
        }
        var isPng = f.type === 'image/png' || /\\.png$/i.test(f.name || '');
        var isJpg = f.type === 'image/jpeg' || /\\.(jpe?g)$/i.test(f.name || '');
        if (!isPng && !isJpg) {
          setError(msg.imageFail);
          imageInput.value = '';
          imageBytes = null;
          imageKind = null;
          return;
        }
        f.arrayBuffer().then(function (buf) {
          imageBytes = new Uint8Array(buf);
          imageKind = isPng ? 'png' : 'jpg';
        }).catch(function () {
          setError(msg.imageFail);
          imageInput.value = '';
          imageBytes = null;
          imageKind = null;
        });
      });

      btnApply.addEventListener('click', applyWatermark);
      btnDownload.addEventListener('click', downloadResult);
      btnSample.addEventListener('click', function () { loadSample(); });
      btnClear.addEventListener('click', function () { clearAll(true); });

      /** 进页自动跑样例，保证 Download 有真实结果。 */
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('pdf-watermark');
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
