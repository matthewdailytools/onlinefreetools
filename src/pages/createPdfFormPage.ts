/**
 * 从空白页创建 PDF 表单：添加命名文本域/复选框后下载（纯客户端）。
 * slug: create-pdf-form
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
 * 渲染 create-pdf-form 工具页。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderCreatePdfFormPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 工具路径（默认语无前缀）。 */
	const toolPath = '/tools/create-pdf-form';
	/** 当前语规范路径。 */
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	/** i18n 键前缀。 */
	const prefix = 'tool_create_pdf_form';
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
			currentSlug: 'create-pdf-form',
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

	/** 首屏交互区（空白页起步，无上传）。 */
	const contentHtml = `
    <div id="converter" class="tool-page-heading mb-3">
      <h1 class="h4 mb-0">${escapeHtml(t(opts.lang, prefix + '_title'))}</h1>
    </div>

    <p class="small text-muted mb-2">${escapeHtml(t(opts.lang, prefix + '_drop_hint'))}</p>

    <div class="row g-2 mb-2">
      <div class="col-12 col-md-4">
        <label class="form-label" for="createFormName">${escapeHtml(t(opts.lang, prefix + '_field_name'))}</label>
        <input id="createFormName" class="form-control form-control-sm" type="text" value="Phone" maxlength="80">
      </div>
      <div class="col-12 col-md-3">
        <label class="form-label" for="createFormType">${escapeHtml(t(opts.lang, prefix + '_field_type'))}</label>
        <select id="createFormType" class="form-select form-select-sm">
          <option value="text">${escapeHtml(t(opts.lang, prefix + '_type_text'))}</option>
          <option value="check">${escapeHtml(t(opts.lang, prefix + '_type_check'))}</option>
        </select>
      </div>
      <div class="col-6 col-md-1">
        <label class="form-label" for="createFormX">${escapeHtml(t(opts.lang, prefix + '_x_label'))}</label>
        <input id="createFormX" class="form-control form-control-sm" type="number" value="48">
      </div>
      <div class="col-6 col-md-1">
        <label class="form-label" for="createFormY">${escapeHtml(t(opts.lang, prefix + '_y_label'))}</label>
        <input id="createFormY" class="form-control form-control-sm" type="number" value="140">
      </div>
      <div class="col-6 col-md-1">
        <label class="form-label" for="createFormW">${escapeHtml(t(opts.lang, prefix + '_w_label'))}</label>
        <input id="createFormW" class="form-control form-control-sm" type="number" value="220" min="10">
      </div>
      <div class="col-6 col-md-2">
        <label class="form-label" for="createFormH">${escapeHtml(t(opts.lang, prefix + '_h_label'))}</label>
        <input id="createFormH" class="form-control form-control-sm" type="number" value="22" min="8">
      </div>
    </div>

    <div class="d-flex align-items-center tools-bar mb-2 flex-wrap">
      <button type="button" id="createFormBtnAdd" class="btn btn-primary btn-sm">${escapeHtml(t(opts.lang, prefix + '_add_field'))}</button>
      <button type="button" id="createFormBtnDownload" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(t(opts.lang, prefix + '_download'))}</button>
      <button type="button" id="createFormBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, prefix + '_sample'))}</button>
      <button type="button" id="createFormBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, prefix + '_clear'))}</button>
    </div>

    <h2 class="h6 mb-2">${escapeHtml(t(opts.lang, prefix + '_fields_heading'))}</h2>
    <ul id="createFormList" class="small mb-3"></ul>

    <p id="createFormWarn" class="small text-warning mb-2" style="display:none;"></p>
    <p id="createFormError" class="small text-danger mb-2" style="display:none;"></p>
    <p id="createFormStatus" class="small text-muted mb-2"></p>
    ${pdfWorkUiBlockHtml({ idPrefix: 'createFormPdf', labels: pdfWorkLabels })}

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

	/** 客户端脚本：空白页加域、预览、下载。 */
	const extraBodyHtml = `
  ${pdfWorkUiClientScript()}
  <script src="/vendor/pdf-lib/pdf-lib.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script>
    (function () {
      /** 字段名。 */
      var nameInput = document.getElementById('createFormName');
      /** 字段类型。 */
      var typeInput = document.getElementById('createFormType');
      /** X 坐标。 */
      var xInput = document.getElementById('createFormX');
      /** Y 坐标。 */
      var yInput = document.getElementById('createFormY');
      /** 宽度。 */
      var wInput = document.getElementById('createFormW');
      /** 高度。 */
      var hInput = document.getElementById('createFormH');
      /** 添加字段。 */
      var btnAdd = document.getElementById('createFormBtnAdd');
      /** 下载。 */
      var btnDownload = document.getElementById('createFormBtnDownload');
      /** 样例。 */
      var btnSample = document.getElementById('createFormBtnSample');
      /** 清空。 */
      var btnClear = document.getElementById('createFormBtnClear');
      /** 字段清单。 */
      var listEl = document.getElementById('createFormList');
      /** 警告区。 */
      var warnEl = document.getElementById('createFormWarn');
      /** 错误区。 */
      var errEl = document.getElementById('createFormError');
      /** 状态区。 */
      var statusEl = document.getElementById('createFormStatus');
      /** 进度/预览工作台。 */
      var work = window.OftPdfWork.bind('createFormPdf');
      /** 忙碌时禁用的按钮。 */
      var busyBtns = [btnAdd, btnSample, btnClear, btnDownload];
      /** 待写入的字段规格列表。 */
      var specs = [];
      /** 最近一次生成的 PDF。 */
      var resultBytes = null;

      /** 可见文案。 */
      var msg = {
        empty: ${JSON.stringify(t(opts.lang, prefix + '_empty'))},
        applyFail: ${JSON.stringify(t(opts.lang, prefix + '_err_convert'))},
        noName: ${JSON.stringify(t(opts.lang, prefix + '_err_no_name'))},
        noFields: ${JSON.stringify(t(opts.lang, prefix + '_err_no_fields'))},
        working: ${JSON.stringify(t(opts.lang, prefix + '_status_working'))},
        done: ${JSON.stringify(t(opts.lang, prefix + '_status_done'))},
        typeText: ${JSON.stringify(t(opts.lang, prefix + '_type_text'))},
        typeCheck: ${JSON.stringify(t(opts.lang, prefix + '_type_check'))},
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

      /** 刷新字段清单列表。 */
      function renderList() {
        listEl.innerHTML = '';
        specs.forEach(function (s) {
          var li = document.createElement('li');
          var kind = s.kind === 'check' ? msg.typeCheck : msg.typeText;
          li.textContent = s.name + ' · ' + kind + ' · ' + s.x + ',' + s.y + ' ' + s.w + '×' + s.h;
          listEl.appendChild(li);
        });
      }

      /** 清空规格与结果。 */
      function clearAll() {
        specs = [];
        resultBytes = null;
        btnDownload.disabled = true;
        renderList();
        work.clearPreview();
        work.hideProgress();
        setErr('');
        setWarn('');
        setStatus('');
      }

      /** 下载生成的表单 PDF。 */
      function downloadResult() {
        if (!resultBytes) return;
        var blob = new Blob([resultBytes], { type: 'application/pdf' });
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = 'pdf-form.pdf';
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      }

      /**
       * 从空白页按 specs 创建表单。
       * @param {function(number, number)=} onProgress
       * @returns {Promise<Uint8Array>}
       */
      function buildForm(onProgress) {
        if (!hasPdfLib()) return Promise.reject(new Error('pdflib'));
        if (!specs.length) return Promise.reject(new Error('empty'));
        return PDFLib.PDFDocument.create().then(function (doc) {
          var page = doc.addPage([420, 300]);
          return doc.embedFont(PDFLib.StandardFonts.Helvetica).then(function (font) {
            page.drawText('PDF form', { x: 48, y: 270, size: 12, font: font });
            var form = doc.getForm();
            var total = specs.length;
            specs.forEach(function (s, idx) {
              page.drawText(s.name, { x: s.x, y: s.y + s.h + 4, size: 9, font: font });
              if (s.kind === 'check') {
                var cb = form.createCheckBox(s.name);
                cb.addToPage(page, { x: s.x, y: s.y, width: s.w, height: s.h });
              } else {
                var tf = form.createTextField(s.name);
                tf.addToPage(page, { x: s.x, y: s.y, width: s.w, height: s.h });
              }
              if (onProgress) onProgress(idx + 1, total);
            });
            if (form.updateFieldAppearances) form.updateFieldAppearances();
            return doc.save();
          });
        }).then(function (bytes) {
          return new Uint8Array(bytes);
        });
      }

      /**
       * 重建 PDF 并刷新预览。
       * @returns {Promise<void>}
       */
      function runBuild() {
        if (!specs.length) { setErr(msg.noFields); return Promise.resolve(); }
        work.setBusy(busyBtns, true);
        work.setProgress(null);
        setStatus(msg.working);
        btnDownload.disabled = true;
        return window.OftPdfWork.yieldUi()
          .then(function () {
            return buildForm(function (done, total) {
              work.setProgress((done / total) * 80);
            });
          })
          .then(function (bytes) {
            resultBytes = bytes;
            work.setProgress(90);
            return work.showPreview(bytes);
          })
          .then(function () {
            work.setProgress(100);
            btnDownload.disabled = false;
            setStatus(msg.done);
          })
          .catch(function () {
            setErr(msg.applyFail);
            setStatus('');
          })
          .finally(function () {
            work.setBusy(busyBtns, false);
            work.hideProgress();
            btnDownload.disabled = !resultBytes;
          });
      }

      /**
       * 读取当前表单控件为一份规格。
       * @returns {{ name: string, kind: string, x: number, y: number, w: number, h: number }}
       */
      function readSpec() {
        return {
          name: (nameInput.value || '').toString().trim(),
          kind: typeInput.value === 'check' ? 'check' : 'text',
          x: Number(xInput.value || 0),
          y: Number(yInput.value || 0),
          w: Number(wInput.value || 220),
          h: Number(hInput.value || 22),
        };
      }

      /**
       * 样例：Name + Email 两个文本域。
       * @returns {Promise<void>}
       */
      function loadSampleForm() {
        specs = [
          { name: 'Name', kind: 'text', x: 48, y: 220, w: 220, h: 22 },
          { name: 'Email', kind: 'text', x: 48, y: 170, w: 220, h: 22 },
        ];
        renderList();
        return runBuild();
      }

      /** smoke / 进页样例入口（lint:tool-page 要求字面 loadSample）。 */
      function loadSample() {
        return loadSampleForm();
      }

      btnAdd.addEventListener('click', function () {
        setErr('');
        var spec = readSpec();
        if (!spec.name) { setErr(msg.noName); return; }
        specs.push(spec);
        renderList();
        runBuild();
      });
      btnDownload.addEventListener('click', downloadResult);
      btnSample.addEventListener('click', function () {
        setErr('');
        loadSampleForm();
      });
      btnClear.addEventListener('click', function () {
        clearAll();
        loadSampleForm();
      });

      loadSample();
    })();
  </script>`;

	/** 当前工具 catalog 元数据。 */
	const toolMeta = getToolBySlug('create-pdf-form');
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
