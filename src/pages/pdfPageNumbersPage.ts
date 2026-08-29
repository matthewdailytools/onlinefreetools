/**
 * PDF 页码工具页：pdf-lib 在每一页 drawText 页码（纯客户端）。
 * slug: pdf-page-numbers
 * 规格：work-tasks/pdf-page-numbers/02-tool-info.md
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
 * 渲染 PDF 页码工具页。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderPdfPageNumbersPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/pdf-page-numbers';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_pdf_page_numbers_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_pdf_page_numbers_description');

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
			currentSlug: 'pdf-page-numbers',
			currentAnchor: '#converter',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	const extraHeadHtml = `
  <style>
    .tools-bar { gap: .5rem; }
    .pdf-page-numbers-meta { font-size: .85rem; color: #6c757d; }
  </style>`;

	const contentHtml = `
    <div id="converter" class="tool-page-heading mb-3">
      <h1 class="h4 mb-0">${escapeHtml(t(opts.lang, 'tool_pdf_page_numbers_title'))}</h1>
    </div>

    <label class="tool-dropzone pdf-page-numbers-drop mb-3" id="pdfPageNumbersDrop" for="pdfPageNumbersFile">
      <input type="file" id="pdfPageNumbersFile" accept="application/pdf,.pdf">
      <span class="tool-dropzone-title">${escapeHtml(t(opts.lang, 'tool_pdf_page_numbers_choose_file'))}</span>
      <span class="tool-dropzone-hint">${escapeHtml(t(opts.lang, 'tool_pdf_page_numbers_drop_hint'))}</span>
    </label>

    <p id="pdfPageNumbersMeta" class="pdf-page-numbers-meta mb-2" style="display:none;"></p>

    <div class="row g-2 mb-2">
      <div class="col-12 col-md-4">
        <label class="form-label mb-0" for="pdfPageNumbersPosition">${escapeHtml(t(opts.lang, 'tool_pdf_page_numbers_position_label'))}</label>
        <select id="pdfPageNumbersPosition" class="form-select form-select-sm">
          <option value="bc" selected>${escapeHtml(t(opts.lang, 'tool_pdf_page_numbers_position_bc'))}</option>
          <option value="bl">${escapeHtml(t(opts.lang, 'tool_pdf_page_numbers_position_bl'))}</option>
          <option value="br">${escapeHtml(t(opts.lang, 'tool_pdf_page_numbers_position_br'))}</option>
          <option value="tl">${escapeHtml(t(opts.lang, 'tool_pdf_page_numbers_position_tl'))}</option>
          <option value="tr">${escapeHtml(t(opts.lang, 'tool_pdf_page_numbers_position_tr'))}</option>
          <option value="tc">${escapeHtml(t(opts.lang, 'tool_pdf_page_numbers_position_tc'))}</option>
        </select>
      </div>
      <div class="col-6 col-md-2">
        <label class="form-label mb-0" for="pdfPageNumbersStartAt">${escapeHtml(t(opts.lang, 'tool_pdf_page_numbers_start_at_label'))}</label>
        <input type="number" id="pdfPageNumbersStartAt" class="form-control form-control-sm" value="1" min="0" max="99999" step="1">
      </div>
      <div class="col-6 col-md-2">
        <label class="form-label mb-0" for="pdfPageNumbersMargin">${escapeHtml(t(opts.lang, 'tool_pdf_page_numbers_margin_label'))}</label>
        <input type="number" id="pdfPageNumbersMargin" class="form-control form-control-sm" value="24" min="0" max="200" step="1">
      </div>
      <div class="col-6 col-md-2">
        <label class="form-label mb-0" for="pdfPageNumbersFontSize">${escapeHtml(t(opts.lang, 'tool_pdf_page_numbers_font_size_label'))}</label>
        <input type="number" id="pdfPageNumbersFontSize" class="form-control form-control-sm" value="12" min="6" max="72" step="1">
      </div>
      <div class="col-6 col-md-2">
        <label class="form-label mb-0" for="pdfPageNumbersFormat">${escapeHtml(t(opts.lang, 'tool_pdf_page_numbers_format_label'))}</label>
        <select id="pdfPageNumbersFormat" class="form-select form-select-sm">
          <option value="number">${escapeHtml(t(opts.lang, 'tool_pdf_page_numbers_format_number'))}</option>
          <option value="page_n">${escapeHtml(t(opts.lang, 'tool_pdf_page_numbers_format_page_n'))}</option>
        </select>
      </div>
    </div>

    <div class="d-flex align-items-center tools-bar mb-2 flex-wrap">
      <button type="button" id="pdfPageNumbersBtnAdd" class="btn btn-primary btn-sm">${escapeHtml(t(opts.lang, 'tool_pdf_page_numbers_add'))}</button>
      <button type="button" id="pdfPageNumbersBtnDownload" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(t(opts.lang, 'tool_pdf_page_numbers_download'))}</button>
      <button type="button" id="pdfPageNumbersBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_pdf_page_numbers_sample'))}</button>
      <button type="button" id="pdfPageNumbersBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_pdf_page_numbers_clear'))}</button>
    </div>

    <p id="pdfPageNumbersWarn" class="small text-warning mb-2" style="display:none;" role="status"></p>
    <p id="pdfPageNumbersError" class="small text-danger mb-2" style="display:none;" role="alert"></p>
    <p id="pdfPageNumbersStatus" class="small text-muted mb-2" role="status"></p>
    <p id="pdfPageNumbersStats" class="small text-muted mb-3" style="display:none;"></p>

    <p class="tool-lead mb-4">${escapeHtml(description)}</p>`;

	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: 'tool_pdf_page_numbers',
		mode: 'rules',
		usecaseCount: 3,
		ruleItemCount: 4,
	});

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [{ label: 'pdf-lib', href: 'https://pdf-lib.js.org/' }],
	});

	/**
	 * 客户端脚本：pdf-lib drawText 逐页页码、样例自动跑通。
	 */
	const extraBodyHtml = `
  <script src="https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/dist/pdf-lib.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script>
    (function () {
      /** 单文件软警告阈值（字节）。 */
      var SOFT_BYTES = 25 * 1024 * 1024;

      var drop = document.getElementById('pdfPageNumbersDrop');
      var fileInput = document.getElementById('pdfPageNumbersFile');
      var metaEl = document.getElementById('pdfPageNumbersMeta');
      var positionEl = document.getElementById('pdfPageNumbersPosition');
      var startAtEl = document.getElementById('pdfPageNumbersStartAt');
      var marginEl = document.getElementById('pdfPageNumbersMargin');
      var fontSizeEl = document.getElementById('pdfPageNumbersFontSize');
      var formatEl = document.getElementById('pdfPageNumbersFormat');
      var btnAdd = document.getElementById('pdfPageNumbersBtnAdd');
      var btnDownload = document.getElementById('pdfPageNumbersBtnDownload');
      var btnSample = document.getElementById('pdfPageNumbersBtnSample');
      var btnClear = document.getElementById('pdfPageNumbersBtnClear');
      var warnEl = document.getElementById('pdfPageNumbersWarn');
      var errEl = document.getElementById('pdfPageNumbersError');
      var statusEl = document.getElementById('pdfPageNumbersStatus');
      var statsEl = document.getElementById('pdfPageNumbersStats');

      var msg = {
        empty: ${JSON.stringify(t(opts.lang, 'tool_pdf_page_numbers_empty'))},
        encrypted: ${JSON.stringify(t(opts.lang, 'tool_pdf_page_numbers_err_encrypted'))},
        loadFail: ${JSON.stringify(t(opts.lang, 'tool_pdf_page_numbers_err_load'))},
        numberFail: ${JSON.stringify(t(opts.lang, 'tool_pdf_page_numbers_err_number'))},
        large: ${JSON.stringify(t(opts.lang, 'tool_pdf_page_numbers_warn_large'))},
        pdflibMissing: ${JSON.stringify(t(opts.lang, 'tool_pdf_page_numbers_warn_pdflib'))},
        working: ${JSON.stringify(t(opts.lang, 'tool_pdf_page_numbers_status_working'))},
        done: ${JSON.stringify(t(opts.lang, 'tool_pdf_page_numbers_status_done'))},
        pagesLabel: ${JSON.stringify(t(opts.lang, 'tool_pdf_page_numbers_pages_label'))},
        statsTpl: ${JSON.stringify(t(opts.lang, 'tool_pdf_page_numbers_stats_tpl'))},
        formatPageN: ${JSON.stringify(t(opts.lang, 'tool_pdf_page_numbers_format_page_n_tpl'))}
      };

      /** @type {{ name: string, bytes: Uint8Array, pageCount: number }|null} */
      var source = null;
      /** @type {Uint8Array|null} */
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

      /** 清空页码结果。 */
      function clearResult() {
        resultBytes = null;
        btnDownload.disabled = true;
        statsEl.style.display = 'none';
        statsEl.textContent = '';
      }

      /** 刷新元信息与大文件警告。 */
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
       * 将错误映射为可读文案。
       * @param {unknown} err
       */
      function mapLoadError(err) {
        var s = String(err && (err.message || err) || '');
        if (/password|encrypt|encrypted/i.test(s)) return msg.encrypted;
        return msg.loadFail;
      }

      /**
       * 读取当前页码参数。
       * @returns {{ position: string, startAt: number, margin: number, fontSize: number, format: string }}
       */
      function getParams() {
        return {
          position: String(positionEl.value || 'bc'),
          startAt: Math.max(0, parseInt(startAtEl.value, 10) || 1),
          margin: Math.max(0, parseInt(marginEl.value, 10) || 24),
          fontSize: Math.min(72, Math.max(6, parseInt(fontSizeEl.value, 10) || 12)),
          format: String(formatEl.value || 'number')
        };
      }

      /**
       * 根据位置键计算页码文字左下角坐标（pdf-lib 坐标系：左下为原点）。
       * @param {string} pos bc|bl|br|tl|tr|tc
       * @param {number} pageW 页宽
       * @param {number} pageH 页高
       * @param {number} textW 文字宽
       * @param {number} textH 文字高
       * @param {number} margin 边距 pt
       * @returns {{ x: number, y: number }}
       */
      function calcTextOrigin(pos, pageW, pageH, textW, textH, margin) {
        if (pos === 'tl') return { x: margin, y: pageH - margin - textH };
        if (pos === 'tr') return { x: pageW - margin - textW, y: pageH - margin - textH };
        if (pos === 'tc') return { x: (pageW - textW) / 2, y: pageH - margin - textH };
        if (pos === 'bl') return { x: margin, y: margin };
        if (pos === 'br') return { x: pageW - margin - textW, y: margin };
        return { x: (pageW - textW) / 2, y: margin };
      }

      /**
       * 格式化单页显示的页码字符串。
       * @param {number} num 页码数字
       * @param {string} format number|page_n
       */
      function formatPageLabel(num, format) {
        if (format === 'page_n') {
          return msg.formatPageN.replace('{n}', String(num));
        }
        return String(num);
      }

      /**
       * 在每一页 drawText 页码并保存。
       * @param {Uint8Array} bytes 源 PDF
       * @param {{ position: string, startAt: number, margin: number, fontSize: number, format: string }} params
       * @returns {Promise<Uint8Array>}
       */
      function buildNumbered(bytes, params) {
        if (!hasPdfLib()) return Promise.reject(new Error('pdflib'));
        return PDFLib.PDFDocument.load(bytes.slice(0), { ignoreEncryption: false }).then(function (doc) {
          return doc.embedFont(PDFLib.StandardFonts.Helvetica).then(function (font) {
            var pages = doc.getPages();
            var fontSize = params.fontSize;
            var black = PDFLib.rgb(0, 0, 0);
            pages.forEach(function (page, idx) {
              var num = params.startAt + idx;
              var label = formatPageLabel(num, params.format);
              var textW = font.widthOfTextAtSize(label, fontSize);
              var textH = font.heightAtSize(fontSize);
              var size = page.getSize();
              var origin = calcTextOrigin(params.position, size.width, size.height, textW, textH, params.margin);
              page.drawText(label, {
                x: origin.x,
                y: origin.y,
                size: fontSize,
                font: font,
                color: black
              });
            });
            return doc.save();
          });
        });
      }

      /**
       * 加载单个 PDF 文件。
       * @param {File} file
       */
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

      /** 执行加页码并启用下载。 */
      function addNumbers() {
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
        var params = getParams();
        setStatus(msg.working);
        btnAdd.disabled = true;
        buildNumbered(source.bytes, params)
          .then(function (bytes) {
            resultBytes = bytes;
            btnDownload.disabled = false;
            statsEl.textContent = msg.statsTpl
              .replace('{n}', String(source.pageCount))
              .replace('{bytes}', formatBytes(bytes.length));
            statsEl.style.display = '';
            setStatus(msg.done);
          })
          .catch(function (err) {
            setError(mapLoadError(err) === msg.loadFail ? msg.numberFail : mapLoadError(err));
            setStatus('');
          })
          .finally(function () {
            btnAdd.disabled = false;
          });
      }

      /** 下载带页码结果。 */
      function downloadResult() {
        if (!resultBytes) return;
        var blob = new Blob([resultBytes], { type: 'application/pdf' });
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = 'numbered.pdf';
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      }

      /**
       * 生成带标签的多页迷你 PDF。
       * @param {string[]} labels
       * @returns {Promise<File>}
       */
      function makeSamplePdf(labels) {
        return PDFLib.PDFDocument.create().then(function (doc) {
          return doc.embedFont(PDFLib.StandardFonts.HelveticaBold).then(function (font) {
            labels.forEach(function (label) {
              var page = doc.addPage([420, 300]);
              page.drawText(label, { x: 48, y: 160, size: 28, font: font });
              page.drawText('Sample page for pdf-page-numbers', { x: 48, y: 120, size: 12, font: font });
            });
            return doc.save();
          });
        }).then(function (bytes) {
          return new File([bytes], 'sample-page-numbers.pdf', { type: 'application/pdf' });
        });
      }

      /** 加载三页样例并底中页码从 1 起。 */
      function loadSample() {
        clearAll(false);
        if (!hasPdfLib()) {
          setError(msg.pdflibMissing);
          return Promise.resolve();
        }
        positionEl.value = 'bc';
        startAtEl.value = '1';
        marginEl.value = '24';
        fontSizeEl.value = '12';
        formatEl.value = 'number';
        return makeSamplePdf(['Cover', 'Chapter 1', 'Chapter 2']).then(function (file) {
          return loadFile(file);
        }).then(function () {
          if (source) addNumbers();
        });
      }

      /**
       * 重置全部状态。
       * @param {boolean} resetInput 是否清空 file input
       */
      function clearAll(resetInput) {
        source = null;
        if (resetInput !== false) fileInput.value = '';
        positionEl.value = 'bc';
        startAtEl.value = '1';
        marginEl.value = '24';
        fontSizeEl.value = '12';
        formatEl.value = 'number';
        refreshMeta();
        clearResult();
        setError('');
        setStatus('');
      }

      [positionEl, startAtEl, marginEl, fontSizeEl, formatEl].forEach(function (el) {
        el.addEventListener('change', clearResult);
        el.addEventListener('input', clearResult);
      });

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

      btnAdd.addEventListener('click', addNumbers);
      btnDownload.addEventListener('click', downloadResult);
      btnSample.addEventListener('click', function () { loadSample(); });
      btnClear.addEventListener('click', function () { clearAll(true); });

      /** 进页自动跑样例，保证 Download 有真实结果。 */
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('pdf-page-numbers');
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
