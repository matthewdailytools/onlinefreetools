/**
 * 裁切 PDF 工具页：按 pt 收紧 CropBox/MediaBox 去掉页边距（纯客户端 pdf-lib）。
 * slug: crop-pdf
 * 规格：work-tasks/crop-pdf/02-tool-info.md
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
 * 渲染裁切 PDF 工具页。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderCropPdfPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/crop-pdf';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_crop_pdf_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_crop_pdf_description');

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
			currentSlug: 'crop-pdf',
			currentAnchor: '#converter',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	const extraHeadHtml = `
  <style>
    .tools-bar { gap: .5rem; }
    .crop-pdf-meta { font-size: .85rem; color: #6c757d; }
    .crop-pdf-stats { font-size: .85rem; line-height: 1.45; }
  </style>`;

	const contentHtml = `
    <div id="converter" class="tool-page-heading mb-3">
      <h1 class="h4 mb-0">${escapeHtml(t(opts.lang, 'tool_crop_pdf_title'))}</h1>
    </div>

    <label class="tool-dropzone crop-pdf-drop mb-3" id="cropPdfDrop" for="cropPdfFile">
      <input type="file" id="cropPdfFile" accept="application/pdf,.pdf">
      <span class="tool-dropzone-title">${escapeHtml(t(opts.lang, 'tool_crop_pdf_choose_file'))}</span>
      <span class="tool-dropzone-hint">${escapeHtml(t(opts.lang, 'tool_crop_pdf_drop_hint'))}</span>
    </label>

    <p id="cropPdfMeta" class="crop-pdf-meta mb-2" style="display:none;"></p>

    <fieldset class="mb-2 border-0 p-0">
      <legend class="form-label mb-1 h6">${escapeHtml(t(opts.lang, 'tool_crop_pdf_margins_title'))}</legend>
      <div class="row g-2 mb-1">
        <div class="col-6 col-md-3">
          <label class="form-label mb-0 small" for="cropPdfAll">${escapeHtml(t(opts.lang, 'tool_crop_pdf_all_sides_label'))}</label>
          <input type="number" id="cropPdfAll" class="form-control form-control-sm" min="0" step="1" value="36" inputmode="numeric">
        </div>
        <div class="col-6 col-md-3">
          <label class="form-label mb-0 small" for="cropPdfTop">${escapeHtml(t(opts.lang, 'tool_crop_pdf_top_label'))}</label>
          <input type="number" id="cropPdfTop" class="form-control form-control-sm" min="0" step="1" value="36" inputmode="numeric">
        </div>
        <div class="col-6 col-md-3">
          <label class="form-label mb-0 small" for="cropPdfRight">${escapeHtml(t(opts.lang, 'tool_crop_pdf_right_label'))}</label>
          <input type="number" id="cropPdfRight" class="form-control form-control-sm" min="0" step="1" value="36" inputmode="numeric">
        </div>
        <div class="col-6 col-md-3">
          <label class="form-label mb-0 small" for="cropPdfBottom">${escapeHtml(t(opts.lang, 'tool_crop_pdf_bottom_label'))}</label>
          <input type="number" id="cropPdfBottom" class="form-control form-control-sm" min="0" step="1" value="36" inputmode="numeric">
        </div>
        <div class="col-6 col-md-3">
          <label class="form-label mb-0 small" for="cropPdfLeft">${escapeHtml(t(opts.lang, 'tool_crop_pdf_left_label'))}</label>
          <input type="number" id="cropPdfLeft" class="form-control form-control-sm" min="0" step="1" value="36" inputmode="numeric">
        </div>
      </div>
      <p class="small text-muted mb-0">${escapeHtml(t(opts.lang, 'tool_crop_pdf_uniform_hint'))}</p>
    </fieldset>

    <div class="d-flex align-items-center tools-bar mb-2 flex-wrap">
      <button type="button" id="cropPdfBtnCrop" class="btn btn-primary btn-sm">${escapeHtml(t(opts.lang, 'tool_crop_pdf_crop'))}</button>
      <button type="button" id="cropPdfBtnDownload" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(t(opts.lang, 'tool_crop_pdf_download'))}</button>
      <button type="button" id="cropPdfBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_crop_pdf_sample'))}</button>
      <button type="button" id="cropPdfBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_crop_pdf_clear'))}</button>
    </div>

    <p id="cropPdfWarn" class="small text-warning mb-2" style="display:none;" role="status"></p>
    <p id="cropPdfError" class="small text-danger mb-2" style="display:none;" role="alert"></p>
    <p id="cropPdfStatus" class="small text-muted mb-2" role="status"></p>
    <div id="cropPdfStats" class="crop-pdf-stats text-muted mb-3" style="display:none;" role="status"></div>

    <p class="tool-lead mb-4">${escapeHtml(description)}</p>`;

	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: 'tool_crop_pdf',
		mode: 'rules',
		usecaseCount: 3,
		ruleItemCount: 4,
	});

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [{ label: 'pdf-lib', href: 'https://pdf-lib.js.org/' }],
	});

	/** 客户端脚本：加载 PDF、收紧 CropBox/MediaBox、样例自动跑通。 */
	const extraBodyHtml = `
  <script src="https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/dist/pdf-lib.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script>
    (function () {
      var SOFT_BYTES = 25 * 1024 * 1024;
      var MIN_DIM_PT = 10;

      var drop = document.getElementById('cropPdfDrop');
      var fileInput = document.getElementById('cropPdfFile');
      var metaEl = document.getElementById('cropPdfMeta');
      var allEl = document.getElementById('cropPdfAll');
      var topEl = document.getElementById('cropPdfTop');
      var rightEl = document.getElementById('cropPdfRight');
      var bottomEl = document.getElementById('cropPdfBottom');
      var leftEl = document.getElementById('cropPdfLeft');
      var btnCrop = document.getElementById('cropPdfBtnCrop');
      var btnDownload = document.getElementById('cropPdfBtnDownload');
      var btnSample = document.getElementById('cropPdfBtnSample');
      var btnClear = document.getElementById('cropPdfBtnClear');
      var warnEl = document.getElementById('cropPdfWarn');
      var errEl = document.getElementById('cropPdfError');
      var statusEl = document.getElementById('cropPdfStatus');
      var statsEl = document.getElementById('cropPdfStats');

      var msg = {
        empty: ${JSON.stringify(t(opts.lang, 'tool_crop_pdf_empty'))},
        encrypted: ${JSON.stringify(t(opts.lang, 'tool_crop_pdf_err_encrypted'))},
        loadFail: ${JSON.stringify(t(opts.lang, 'tool_crop_pdf_err_load'))},
        marginFail: ${JSON.stringify(t(opts.lang, 'tool_crop_pdf_err_margin'))},
        cropFail: ${JSON.stringify(t(opts.lang, 'tool_crop_pdf_err_crop'))},
        large: ${JSON.stringify(t(opts.lang, 'tool_crop_pdf_warn_large'))},
        pdflibMissing: ${JSON.stringify(t(opts.lang, 'tool_crop_pdf_warn_pdflib'))},
        cropping: ${JSON.stringify(t(opts.lang, 'tool_crop_pdf_status_cropping'))},
        done: ${JSON.stringify(t(opts.lang, 'tool_crop_pdf_status_done'))},
        pagesLabel: ${JSON.stringify(t(opts.lang, 'tool_crop_pdf_pages_label'))},
        statsPageTpl: ${JSON.stringify(t(opts.lang, 'tool_crop_pdf_stats_page_tpl'))},
        statsTpl: ${JSON.stringify(t(opts.lang, 'tool_crop_pdf_stats_tpl'))}
      };

      var source = null;
      var resultBytes = null;
      var syncingUniform = false;

      function setWarn(text) {
        if (!text) { warnEl.style.display = 'none'; warnEl.textContent = ''; return; }
        warnEl.textContent = text;
        warnEl.style.display = '';
      }

      function setError(text) {
        if (!text) { errEl.style.display = 'none'; errEl.textContent = ''; return; }
        errEl.textContent = text;
        errEl.style.display = '';
      }

      function setStatus(text) {
        statusEl.textContent = text || '';
      }

      function formatBytes(n) {
        if (n < 1024) return n + ' B';
        if (n < 1024 * 1024) return (n / 1024).toFixed(1) + ' KB';
        return (n / (1024 * 1024)).toFixed(2) + ' MB';
      }

      function fmtPt(n) {
        return (Math.round(n * 10) / 10).toString();
      }

      function hasPdfLib() {
        return typeof PDFLib !== 'undefined' && PDFLib && typeof PDFLib.PDFDocument === 'function';
      }

      function clearResult() {
        resultBytes = null;
        btnDownload.disabled = true;
        statsEl.style.display = 'none';
        statsEl.innerHTML = '';
      }

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

      function readMargin(el) {
        var v = parseFloat(el.value);
        if (!isFinite(v) || v < 0) return 0;
        return v;
      }

      function readMargins() {
        return {
          top: readMargin(topEl),
          right: readMargin(rightEl),
          bottom: readMargin(bottomEl),
          left: readMargin(leftEl)
        };
      }

      function syncFromAll() {
        if (syncingUniform) return;
        syncingUniform = true;
        var v = readMargin(allEl);
        topEl.value = String(v);
        rightEl.value = String(v);
        bottomEl.value = String(v);
        leftEl.value = String(v);
        syncingUniform = false;
        clearResult();
      }

      function syncAllIfEqual() {
        if (syncingUniform) return;
        var m = readMargins();
        if (m.top === m.right && m.top === m.bottom && m.top === m.left) {
          allEl.value = String(m.top);
        }
        clearResult();
      }

      function mapLoadError(err) {
        var s = String(err && (err.message || err) || '');
        if (/password|encrypt|encrypted/i.test(s)) return msg.encrypted;
        return msg.loadFail;
      }

      function loadFile(file) {
        setError('');
        clearResult();
        if (!file) return Promise.resolve();
        if (!hasPdfLib()) {
          setError(msg.pdflibMissing);
          return Promise.resolve();
        }
        return file.arrayBuffer().then(function (buf) {
          var bytes = new Uint8Array(buf);
          return PDFLib.PDFDocument.load(bytes, { ignoreEncryption: false }).then(function (doc) {
            source = { name: file.name || 'document.pdf', bytes: bytes, pageCount: doc.getPageCount() };
            refreshMeta();
          });
        }).catch(function (err) {
          source = null;
          refreshMeta();
          setError(mapLoadError(err));
        });
      }

      function validateMargins(margins) {
        return PDFLib.PDFDocument.load(source.bytes).then(function (doc) {
          var pages = doc.getPages();
          for (var i = 0; i < pages.length; i++) {
            var size = pages[i].getSize();
            var newW = size.width - margins.left - margins.right;
            var newH = size.height - margins.top - margins.bottom;
            if (newW <= MIN_DIM_PT || newH <= MIN_DIM_PT) {
              throw new Error('margin_too_large');
            }
          }
        });
      }

      function buildCropped(margins) {
        return PDFLib.PDFDocument.load(source.bytes).then(function (doc) {
          var pages = doc.getPages();
          var pageStats = [];
          pages.forEach(function (page, idx) {
            var size = page.getSize();
            var ow = size.width;
            var oh = size.height;
            var left = margins.left;
            var bottom = margins.bottom;
            var newW = ow - left - margins.right;
            var newH = oh - margins.top - margins.bottom;
            if (newW <= MIN_DIM_PT || newH <= MIN_DIM_PT) {
              throw new Error('margin_too_large');
            }
            page.setCropBox(left, bottom, newW, newH);
            if (typeof page.setMediaBox === 'function') {
              page.setMediaBox(left, bottom, newW, newH);
            }
            pageStats.push({ page: idx + 1, ow: ow, oh: oh, nw: newW, nh: newH });
          });
          return doc.save().then(function (bytes) {
            return { bytes: bytes, pageStats: pageStats };
          });
        });
      }

      function renderStats(pageStats, bytesLen) {
        var lines = pageStats.map(function (s) {
          return msg.statsPageTpl
            .replace('{n}', String(s.page))
            .replace('{ow}', fmtPt(s.ow))
            .replace('{oh}', fmtPt(s.oh))
            .replace('{nw}', fmtPt(s.nw))
            .replace('{nh}', fmtPt(s.nh));
        });
        statsEl.innerHTML = msg.statsTpl
          .replace('{pages}', lines.join('<br>'))
          .replace('{bytes}', formatBytes(bytesLen));
        statsEl.style.display = '';
      }

      function crop() {
        setError('');
        clearResult();
        if (!source) {
          setError(msg.empty);
          return;
        }
        if (!hasPdfLib()) {
          setError(msg.pdflibMissing);
          return;
        }
        var margins = readMargins();
        setStatus(msg.cropping);
        btnCrop.disabled = true;
        validateMargins(margins)
          .then(function () { return buildCropped(margins); })
          .then(function (out) {
            resultBytes = out.bytes;
            btnDownload.disabled = false;
            renderStats(out.pageStats, out.bytes.length);
            setStatus(msg.done);
          })
          .catch(function (err) {
            if (String(err && err.message || '').indexOf('margin_too_large') >= 0) {
              setError(msg.marginFail);
            } else {
              var mapped = mapLoadError(err);
              setError(mapped === msg.loadFail ? msg.cropFail : mapped);
            }
            setStatus('');
          })
          .finally(function () {
            btnCrop.disabled = false;
          });
      }

      function downloadResult() {
        if (!resultBytes) return;
        var blob = new Blob([resultBytes], { type: 'application/pdf' });
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = 'cropped.pdf';
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      }

      function makeSamplePdf() {
        return PDFLib.PDFDocument.create().then(function (doc) {
          return doc.embedFont(PDFLib.StandardFonts.HelveticaBold).then(function (font) {
            var page = doc.addPage([420, 300]);
            page.drawText('Sample page for crop-pdf', { x: 48, y: 160, size: 20, font: font });
            page.drawText('420 x 300 pt', { x: 48, y: 120, size: 14, font: font });
            return doc.save();
          });
        }).then(function (bytes) {
          return new File([bytes], 'sample-crop.pdf', { type: 'application/pdf' });
        });
      }

      function loadSample() {
        clearAll(false);
        if (!hasPdfLib()) {
          setError(msg.pdflibMissing);
          return Promise.resolve();
        }
        allEl.value = '36';
        syncFromAll();
        return makeSamplePdf().then(function (file) {
          return loadFile(file);
        }).then(function () {
          if (source) crop();
        });
      }

      function clearAll(resetInput) {
        source = null;
        if (resetInput !== false) fileInput.value = '';
        allEl.value = '36';
        topEl.value = '36';
        rightEl.value = '36';
        bottomEl.value = '36';
        leftEl.value = '36';
        refreshMeta();
        clearResult();
        setError('');
        setStatus('');
      }

      allEl.addEventListener('input', syncFromAll);
      topEl.addEventListener('input', syncAllIfEqual);
      rightEl.addEventListener('input', syncAllIfEqual);
      bottomEl.addEventListener('input', syncAllIfEqual);
      leftEl.addEventListener('input', syncAllIfEqual);

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

      btnCrop.addEventListener('click', crop);
      btnDownload.addEventListener('click', downloadResult);
      btnSample.addEventListener('click', function () { loadSample(); });
      btnClear.addEventListener('click', function () { clearAll(true); });

      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('crop-pdf');
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
