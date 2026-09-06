/**
 * 把静态 PDF 做成可填写表单：按 X/Y/W/H 添加文本域，或一次添加 N 个默认域（纯客户端）。
 * slug: make-pdf-fillable
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
	pdfWorkUiBlockHtml,
	pdfWorkUiClientScript,
	pdfWorkUiCss,
	pdfWorkUiLabels,
} from './site/pdfWorkUi';

/** 非默认语言时为路径加语言前缀。 */
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * 渲染 make-pdf-fillable 工具页。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderMakePdfFillablePage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 工具路径（默认语无前缀）。 */
	const toolPath = '/tools/make-pdf-fillable';
	/** 当前语规范路径。 */
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	/** i18n 键前缀。 */
	const prefix = 'tool_make_pdf_fillable';
	/** 文档 title。 */
	const title = `${t(opts.lang, prefix + '_title')} | ${t(opts.lang, 'brand')}`;
	/** meta / 页内摘要。 */
	const description = t(opts.lang, prefix + '_description');
	/** 顶栏导航项。 */
	const navItems = buildToolPageNavItems(opts.lang, opts.defaultLang);

	/** hreflang 映射始终带显式语言段。 */
	const withExplicitLangPrefix = (code: SiteLang, pathname: string) => {
		const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
		return `/${code}${safe}`.replace(/\/{2,}/g, '/');
	};

	/** 语言切换器用的显式前缀映射。 */
	const langAlternates: Record<string, string> = Object.fromEntries(
		(supportedLangs || []).map((code) => [code, withExplicitLangPrefix(code, toolPath)])
	);

	/** 绝对 hreflang 列表。 */
	const alternates: HreflangAlternate[] = (supportedLangs || []).map((code) => ({
		lang: code,
		href: `https://onlinefreetools.org${withLangPrefix(code, toolPath, opts.defaultLang)}`,
	}));

	/** 页头 HTML。 */
	const headerHtml = renderHeader({
		lang: opts.lang,
		brandHref: withLangPrefix(opts.lang, '/', opts.defaultLang),
		navItems,
		enabledLangs: supportedLangs,
		langAlternates,
	});

	/** 侧栏工具导航。 */
	const sidebarHtml = renderSidebar({
		title: t(opts.lang, 'nav_tools'),
		groups: buildToolSidebarItems({
			lang: opts.lang,
			defaultLang: opts.defaultLang,
			currentSlug: 'make-pdf-fillable',
			currentAnchor: '#converter',
		}),
		id: 'toolNav',
	});

	/** 页脚 HTML。 */
	const footerHtml = renderFooter({ lang: opts.lang });
	/** 进度/预览区文案。 */
	const pdfWorkLabels = pdfWorkUiLabels(opts.lang);
	/** 页内样式。 */
	const extraHeadHtml = `
  <style>
    .tools-bar { gap: .5rem; }
    ${pdfWorkUiCss()}
  </style>`;

	/** 首屏交互区。 */
	const contentHtml = `
    <div id="converter" class="tool-page-heading mb-3">
      <h1 class="h4 mb-0">${escapeHtml(t(opts.lang, prefix + '_title'))}</h1>
    </div>

    <label class="tool-dropzone mb-3" id="makeFillDrop" for="makeFillFile">
      <input type="file" id="makeFillFile" accept="application/pdf,.pdf">
      <span class="tool-dropzone-title">${escapeHtml(t(opts.lang, prefix + '_choose_file'))}</span>
      <span class="tool-dropzone-hint">${escapeHtml(t(opts.lang, prefix + '_drop_hint'))}</span>
    </label>

    <div class="row g-2 mb-2">
      <div class="col-12 col-md-4">
        <label class="form-label" for="makeFillName">${escapeHtml(t(opts.lang, prefix + '_field_name'))}</label>
        <input id="makeFillName" class="form-control form-control-sm" type="text" value="FullName" maxlength="80">
      </div>
      <div class="col-6 col-md-2">
        <label class="form-label" for="makeFillX">${escapeHtml(t(opts.lang, prefix + '_x_label'))}</label>
        <input id="makeFillX" class="form-control form-control-sm" type="number" value="48">
      </div>
      <div class="col-6 col-md-2">
        <label class="form-label" for="makeFillY">${escapeHtml(t(opts.lang, prefix + '_y_label'))}</label>
        <input id="makeFillY" class="form-control form-control-sm" type="number" value="220">
      </div>
      <div class="col-6 col-md-2">
        <label class="form-label" for="makeFillW">${escapeHtml(t(opts.lang, prefix + '_w_label'))}</label>
        <input id="makeFillW" class="form-control form-control-sm" type="number" value="220" min="10">
      </div>
      <div class="col-6 col-md-2">
        <label class="form-label" for="makeFillH">${escapeHtml(t(opts.lang, prefix + '_h_label'))}</label>
        <input id="makeFillH" class="form-control form-control-sm" type="number" value="22" min="8">
      </div>
      <div class="col-6 col-md-2">
        <label class="form-label" for="makeFillN">${escapeHtml(t(opts.lang, prefix + '_n_label'))}</label>
        <input id="makeFillN" class="form-control form-control-sm" type="number" value="2" min="1" max="20">
      </div>
    </div>

    <div class="d-flex align-items-center tools-bar mb-2 flex-wrap">
      <button type="button" id="makeFillBtnAdd" class="btn btn-primary btn-sm">${escapeHtml(t(opts.lang, prefix + '_add_field'))}</button>
      <button type="button" id="makeFillBtnAddN" class="btn btn-outline-primary btn-sm">${escapeHtml(t(opts.lang, prefix + '_add_n_fields'))}</button>
      <button type="button" id="makeFillBtnDownload" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(t(opts.lang, prefix + '_download'))}</button>
      <button type="button" id="makeFillBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, prefix + '_sample'))}</button>
      <button type="button" id="makeFillBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, prefix + '_clear'))}</button>
    </div>

    <p id="makeFillWarn" class="small text-warning mb-2" style="display:none;"></p>
    <p id="makeFillError" class="small text-danger mb-2" style="display:none;"></p>
    <p id="makeFillStatus" class="small text-muted mb-2"></p>
    ${pdfWorkUiBlockHtml({ idPrefix: 'makeFillPdf', labels: pdfWorkLabels })}

    <p class="tool-lead mb-4">${escapeHtml(description)}</p>`;

	/** How / Rules / Example / Use cases。 */
	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix,
		mode: 'rules',
		usecaseCount: 3,
		ruleItemCount: 4,
	});

	/** 权威引用。 */
	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [{ label: 'pdf-lib', href: 'https://pdf-lib.js.org/' }],
	});

	/** 客户端脚本：上传、按坐标加域、预览、下载。 */
	const extraBodyHtml = `
  ${pdfWorkUiClientScript()}
  <script src="/vendor/pdf-lib/pdf-lib.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script>
    (function () {
      /** 软限制：超过后仅警告。 */
      var SOFT_BYTES = 25 * 1024 * 1024;
      /** 文件选择框。 */
      var fileInput = document.getElementById('makeFillFile');
      /** 字段名输入。 */
      var nameInput = document.getElementById('makeFillName');
      /** X 坐标。 */
      var xInput = document.getElementById('makeFillX');
      /** Y 坐标。 */
      var yInput = document.getElementById('makeFillY');
      /** 宽度。 */
      var wInput = document.getElementById('makeFillW');
      /** 高度。 */
      var hInput = document.getElementById('makeFillH');
      /** 默认域数量。 */
      var nInput = document.getElementById('makeFillN');
      /** 添加单个域。 */
      var btnAdd = document.getElementById('makeFillBtnAdd');
      /** 添加 N 个默认域。 */
      var btnAddN = document.getElementById('makeFillBtnAddN');
      /** 下载。 */
      var btnDownload = document.getElementById('makeFillBtnDownload');
      /** 样例。 */
      var btnSample = document.getElementById('makeFillBtnSample');
      /** 清空。 */
      var btnClear = document.getElementById('makeFillBtnClear');
      /** 警告区。 */
      var warnEl = document.getElementById('makeFillWarn');
      /** 错误区。 */
      var errEl = document.getElementById('makeFillError');
      /** 状态区。 */
      var statusEl = document.getElementById('makeFillStatus');
      /** 进度/预览工作台。 */
      var work = window.OftPdfWork.bind('makeFillPdf');
      /** 忙碌时禁用的按钮。 */
      var busyBtns = [btnAdd, btnAddN, btnSample, btnClear, btnDownload];
      /** 当前 PDF 字节（上传或上次加域后的结果）。 */
      var sourceBytes = null;
      /** 可下载结果。 */
      var resultBytes = null;

      /** 可见文案。 */
      var msg = {
        empty: ${JSON.stringify(t(opts.lang, prefix + '_empty'))},
        encrypted: ${JSON.stringify(t(opts.lang, prefix + '_err_encrypted'))},
        loadFail: ${JSON.stringify(t(opts.lang, prefix + '_err_load'))},
        applyFail: ${JSON.stringify(t(opts.lang, prefix + '_err_convert'))},
        noName: ${JSON.stringify(t(opts.lang, prefix + '_err_no_name'))},
        large: ${JSON.stringify(t(opts.lang, prefix + '_warn_large'))},
        working: ${JSON.stringify(t(opts.lang, prefix + '_status_working'))},
        done: ${JSON.stringify(t(opts.lang, prefix + '_status_done'))},
      };

      /**
       * 判断 pdf-lib 是否可用。
       * @returns {boolean}
       */
      function hasPdfLib() {
        return typeof PDFLib !== 'undefined' && PDFLib && typeof PDFLib.PDFDocument === 'function';
      }

      /**
       * 显示或清空错误。
       * @param {string} text
       */
      function setErr(text) {
        if (!text) { errEl.style.display = 'none'; errEl.textContent = ''; return; }
        errEl.textContent = text;
        errEl.style.display = '';
      }

      /**
       * 显示或清空警告。
       * @param {string} text
       */
      function setWarn(text) {
        if (!text) { warnEl.style.display = 'none'; warnEl.textContent = ''; return; }
        warnEl.textContent = text;
        warnEl.style.display = '';
      }

      /**
       * 更新状态行。
       * @param {string} text
       */
      function setStatus(text) {
        statusEl.textContent = text || '';
      }

      /** 清空源与结果。 */
      function clearAll() {
        sourceBytes = null;
        resultBytes = null;
        btnDownload.disabled = true;
        work.clearPreview();
        work.hideProgress();
        setErr('');
        setWarn('');
        setStatus('');
        fileInput.value = '';
      }

      /** 下载当前可填写 PDF。 */
      function downloadResult() {
        if (!resultBytes) return;
        var blob = new Blob([resultBytes], { type: 'application/pdf' });
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = 'fillable.pdf';
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      }

      /**
       * 读取单个域的坐标与名称。
       * @returns {{ name: string, x: number, y: number, w: number, h: number }}
       */
      function readOneSpec() {
        return {
          name: (nameInput.value || '').toString().trim(),
          x: Number(xInput.value || 0),
          y: Number(yInput.value || 0),
          w: Number(wInput.value || 220),
          h: Number(hInput.value || 22),
        };
      }

      /**
       * 生成 N 个纵向堆叠的默认文本域规格。
       * @param {number} n
       * @returns {Array<{ name: string, x: number, y: number, w: number, h: number }>}
       */
      function defaultSpecs(n) {
        var count = Math.max(1, Math.min(20, Number(n) || 1));
        var out = [];
        var i = 0;
        for (i = 0; i < count; i++) {
          out.push({
            name: 'Field_' + (i + 1),
            x: 48,
            y: 240 - i * 36,
            w: 220,
            h: 22,
          });
        }
        return out;
      }

      /**
       * 在首页上添加文本域。
       * @param {Array<{ name: string, x: number, y: number, w: number, h: number }>} specs
       * @param {function(number, number)=} onProgress
       * @returns {Promise<Uint8Array>}
       */
      function addFields(specs, onProgress) {
        if (!hasPdfLib()) return Promise.reject(new Error('pdflib'));
        if (!sourceBytes) return Promise.reject(new Error('empty'));
        return PDFLib.PDFDocument.load(sourceBytes).then(function (doc) {
          var page = doc.getPages()[0];
          var form = doc.getForm();
          var total = specs.length || 1;
          specs.forEach(function (s, idx) {
            var field = form.createTextField(s.name);
            field.addToPage(page, { x: s.x, y: s.y, width: s.w, height: s.h });
            if (onProgress) onProgress(idx + 1, total);
          });
          if (form.updateFieldAppearances) form.updateFieldAppearances();
          return doc.save();
        }).then(function (bytes) {
          return new Uint8Array(bytes);
        });
      }

      /**
       * 加域并刷新预览；成功后把结果当作新的源，以便继续追加。
       * @param {Array<{ name: string, x: number, y: number, w: number, h: number }>} specs
       * @returns {Promise<void>}
       */
      function runAdd(specs) {
        if (!sourceBytes) { setErr(msg.empty); return Promise.resolve(); }
        if (!specs.length || specs.some(function (s) { return !s.name; })) {
          setErr(msg.noName);
          return Promise.resolve();
        }
        work.setBusy(busyBtns, true);
        work.setProgress(null);
        setStatus(msg.working);
        btnDownload.disabled = true;
        return window.OftPdfWork.yieldUi()
          .then(function () {
            return addFields(specs, function (done, total) {
              work.setProgress((done / total) * 80);
            });
          })
          .then(function (bytes) {
            resultBytes = bytes;
            sourceBytes = bytes;
            work.setProgress(90);
            return work.showPreview(bytes);
          })
          .then(function () {
            work.setProgress(100);
            btnDownload.disabled = false;
            setStatus(msg.done);
          })
          .catch(function (err) {
            var eStr = String(err && err.message ? err.message : err);
            if (/password/i.test(eStr)) setErr(msg.encrypted);
            else setErr(msg.applyFail);
            setStatus('');
          })
          .finally(function () {
            work.setBusy(busyBtns, false);
            work.hideProgress();
            btnDownload.disabled = !resultBytes;
          });
      }

      /**
       * 空白样例页 + 一个示例文本域。
       * @returns {Promise<void>}
       */
      function loadSamplePdf() {
        if (!hasPdfLib()) return Promise.reject(new Error('pdflib'));
        nameInput.value = 'FullName';
        xInput.value = '48';
        yInput.value = '220';
        wInput.value = '220';
        hInput.value = '22';
        nInput.value = '1';
        return PDFLib.PDFDocument.create().then(function (doc) {
          var page = doc.addPage([420, 300]);
          return doc.embedFont(PDFLib.StandardFonts.Helvetica).then(function (font) {
            page.drawText('Sample blank page', { x: 48, y: 260, size: 12, font: font });
            return doc.save();
          });
        }).then(function (bytes) {
          sourceBytes = new Uint8Array(bytes);
          resultBytes = null;
          return runAdd([readOneSpec()]);
        });
      }

      /** smoke / 进页样例入口（lint:tool-page 要求字面 loadSample）。 */
      function loadSample() {
        return loadSamplePdf();
      }

      fileInput.addEventListener('change', function () {
        if (!fileInput.files || !fileInput.files[0]) return;
        var f = fileInput.files[0];
        setErr('');
        setWarn('');
        setStatus('');
        resultBytes = null;
        btnDownload.disabled = true;
        work.clearPreview();
        if (f.size > SOFT_BYTES) setWarn(msg.large);
        work.setBusy(busyBtns, true);
        f.arrayBuffer().then(function (ab) {
          sourceBytes = new Uint8Array(ab);
          return work.showPreview(sourceBytes);
        }).catch(function (err) {
          var eStr = String(err && err.message ? err.message : err);
          if (/password/i.test(eStr)) setErr(msg.encrypted);
          else setErr(msg.loadFail);
          sourceBytes = null;
        }).finally(function () {
          work.setBusy(busyBtns, false);
          work.hideProgress();
        });
        fileInput.value = '';
      });

      btnAdd.addEventListener('click', function () {
        setErr('');
        setWarn('');
        runAdd([readOneSpec()]);
      });
      btnAddN.addEventListener('click', function () {
        setErr('');
        setWarn('');
        runAdd(defaultSpecs(Number(nInput.value || 2)));
      });
      btnDownload.addEventListener('click', downloadResult);
      btnSample.addEventListener('click', function () {
        setErr('');
        setWarn('');
        loadSamplePdf();
      });
      btnClear.addEventListener('click', function () {
        clearAll();
        loadSamplePdf();
      });

      loadSample();
    })();
  </script>`;

	/** 当前工具 catalog 元数据。 */
	const toolMeta = getToolBySlug('make-pdf-fillable');
	/** Related / FAQ / 分享等附加区。 */
	const toolSeoHtml = toolMeta
		? renderToolExtraSections({
				lang: opts.lang,
				defaultLang: opts.defaultLang,
				tool: toolMeta,
				enabledLangs: supportedLangs,
			})
		: '';

	/** JSON-LD。 */
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
