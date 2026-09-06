/**
 * 填写 PDF 表单工具页：检测 AcroForm 字段、渲染输入、写回后下载（纯客户端）。
 * slug: fill-out-pdf-form
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
 * 渲染 fill-out-pdf-form 工具页。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderFillOutPdfFormPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 工具路径（默认语无前缀）。 */
	const toolPath = '/tools/fill-out-pdf-form';
	/** 当前语规范路径。 */
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	/** i18n 键前缀。 */
	const prefix = 'tool_fill_out_pdf_form';
	/** 文档 title。 */
	const title = `${t(opts.lang, prefix + '_title')} | ${t(opts.lang, 'brand')}`;
	/** meta / 页内摘要。 */
	const description = t(opts.lang, prefix + '_description');
	/** 顶栏导航项。 */
	const navItems = buildToolPageNavItems(opts.lang, opts.defaultLang);
	/** 无字段时链到「做成可填写」页的当前语路径。 */
	const makeFillableHref = withLangPrefix(opts.lang, '/tools/make-pdf-fillable', opts.defaultLang);

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
			currentSlug: 'fill-out-pdf-form',
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
    .fill-form-fields { max-height: 40vh; overflow: auto; }
    ${pdfWorkUiCss()}
  </style>`;

	/** 首屏交互区。 */
	const contentHtml = `
    <div id="converter" class="tool-page-heading mb-3">
      <h1 class="h4 mb-0">${escapeHtml(t(opts.lang, prefix + '_title'))}</h1>
    </div>

    <label class="tool-dropzone mb-3" id="fillFormDrop" for="fillFormFile">
      <input type="file" id="fillFormFile" accept="application/pdf,.pdf">
      <span class="tool-dropzone-title">${escapeHtml(t(opts.lang, prefix + '_choose_file'))}</span>
      <span class="tool-dropzone-hint">${escapeHtml(t(opts.lang, prefix + '_drop_hint'))}</span>
    </label>

    <p id="fillFormMeta" class="small text-muted mb-2" style="display:none;"></p>
    <h2 class="h6 mb-2">${escapeHtml(t(opts.lang, prefix + '_fields_heading'))}</h2>
    <div id="fillFormFields" class="fill-form-fields mb-3"></div>

    <div class="d-flex align-items-center tools-bar mb-2 flex-wrap">
      <button type="button" id="fillFormBtnApply" class="btn btn-primary btn-sm">${escapeHtml(t(opts.lang, prefix + '_apply'))}</button>
      <button type="button" id="fillFormBtnDownload" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(t(opts.lang, prefix + '_download'))}</button>
      <button type="button" id="fillFormBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, prefix + '_sample'))}</button>
      <button type="button" id="fillFormBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, prefix + '_clear'))}</button>
    </div>

    <p id="fillFormWarn" class="small text-warning mb-2" style="display:none;"></p>
    <p id="fillFormError" class="small text-danger mb-2" style="display:none;"></p>
    <p id="fillFormStatus" class="small text-muted mb-2"></p>
    ${pdfWorkUiBlockHtml({ idPrefix: 'fillFormPdf', labels: pdfWorkLabels })}

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

	/** 客户端脚本：检测字段、填写、预览、下载。 */
	const extraBodyHtml = `
  ${pdfWorkUiClientScript()}
  <script src="/vendor/pdf-lib/pdf-lib.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script>
    (function () {
      /** 软限制：超过后仅警告，不阻断。 */
      var SOFT_BYTES = 25 * 1024 * 1024;
      /** 文件选择框。 */
      var fileInput = document.getElementById('fillFormFile');
      /** 动态字段容器。 */
      var fieldsEl = document.getElementById('fillFormFields');
      /** 应用填写按钮。 */
      var btnApply = document.getElementById('fillFormBtnApply');
      /** 下载按钮。 */
      var btnDownload = document.getElementById('fillFormBtnDownload');
      /** 加载样例按钮。 */
      var btnSample = document.getElementById('fillFormBtnSample');
      /** 清空按钮。 */
      var btnClear = document.getElementById('fillFormBtnClear');
      /** 警告区。 */
      var warnEl = document.getElementById('fillFormWarn');
      /** 错误区。 */
      var errEl = document.getElementById('fillFormError');
      /** 状态区。 */
      var statusEl = document.getElementById('fillFormStatus');
      /** 进度/预览工作台。 */
      var work = window.OftPdfWork.bind('fillFormPdf');
      /** 忙碌时一并禁用的按钮。 */
      var busyBtns = [btnApply, btnSample, btnClear, btnDownload];
      /** 当前源 PDF 字节。 */
      var sourceBytes = null;
      /** 填写后的结果字节。 */
      var resultBytes = null;
      /** 无字段时链到做成可填写页。 */
      var makeFillableHref = ${JSON.stringify(makeFillableHref)};

      /** 可见文案（由服务端注入当前语）。 */
      var msg = {
        empty: ${JSON.stringify(t(opts.lang, prefix + '_empty'))},
        encrypted: ${JSON.stringify(t(opts.lang, prefix + '_err_encrypted'))},
        loadFail: ${JSON.stringify(t(opts.lang, prefix + '_err_load'))},
        applyFail: ${JSON.stringify(t(opts.lang, prefix + '_err_convert'))},
        noFields: ${JSON.stringify(t(opts.lang, prefix + '_err_no_fields'))},
        noFieldsCta: ${JSON.stringify(t(opts.lang, prefix + '_no_fields_cta'))},
        large: ${JSON.stringify(t(opts.lang, prefix + '_warn_large'))},
        working: ${JSON.stringify(t(opts.lang, prefix + '_status_working'))},
        done: ${JSON.stringify(t(opts.lang, prefix + '_status_done'))},
        kindText: ${JSON.stringify(t(opts.lang, prefix + '_field_kind_text'))},
        kindCheck: ${JSON.stringify(t(opts.lang, prefix + '_field_kind_check'))},
        kindChoice: ${JSON.stringify(t(opts.lang, prefix + '_field_kind_choice'))},
      };

      /**
       * 判断 pdf-lib 是否已挂到全局。
       * @returns {boolean}
       */
      function hasPdfLib() {
        return typeof PDFLib !== 'undefined' && PDFLib && typeof PDFLib.PDFDocument === 'function';
      }

      /**
       * 显示或清空错误；无字段时附可点击邻页链接。
       * @param {string} text
       * @param {boolean} [withLink]
       */
      function setErr(text, withLink) {
        errEl.textContent = '';
        if (!text) { errEl.style.display = 'none'; return; }
        errEl.appendChild(document.createTextNode(text + (withLink ? ' ' : '')));
        if (withLink) {
          var a = document.createElement('a');
          a.href = makeFillableHref;
          a.textContent = msg.noFieldsCta;
          errEl.appendChild(a);
        }
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

      /** 清空源文件、结果与字段 UI。 */
      function clearAll() {
        sourceBytes = null;
        resultBytes = null;
        btnDownload.disabled = true;
        fieldsEl.innerHTML = '';
        work.clearPreview();
        work.hideProgress();
        setErr('');
        setWarn('');
        setStatus('');
        fileInput.value = '';
      }

      /** 下载填写后的 PDF。 */
      function downloadResult() {
        if (!resultBytes) return;
        var blob = new Blob([resultBytes], { type: 'application/pdf' });
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = 'filled-form.pdf';
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      }

      /**
       * 把 pdf-lib 字段归类为 text / check / choice。
       * @param {any} field
       * @returns {{ name: string, kind: string, value: string, checked: boolean, options: string[] }}
       */
      function describeField(field) {
        var name = field.getName ? field.getName() : '';
        var ctor = field && field.constructor ? field.constructor.name : '';
        var kind = 'text';
        var options = [];
        var value = '';
        var checked = false;
        if (ctor === 'PDFCheckBox') kind = 'check';
        else if (ctor === 'PDFDropdown' || ctor === 'PDFRadioGroup' || ctor === 'PDFOptionList') kind = 'choice';
        try {
          if (kind === 'text' && field.getText) value = field.getText() || '';
          if (kind === 'check' && field.isChecked) checked = !!field.isChecked();
          if (kind === 'choice' && field.getOptions) options = field.getOptions() || [];
          if (kind === 'choice' && field.getSelected) {
            var sel = field.getSelected();
            value = Array.isArray(sel) ? (sel[0] || '') : (sel || '');
          }
        } catch (ignore) {}
        return { name: name, kind: kind, value: value, checked: checked, options: options };
      }

      /**
       * 根据字段描述渲染输入控件。
       * @param {Array<{ name: string, kind: string, value: string, checked: boolean, options: string[] }>} list
       */
      function renderFieldUi(list) {
        fieldsEl.innerHTML = '';
        (list || []).forEach(function (item, idx) {
          var wrap = document.createElement('div');
          wrap.className = 'mb-2';
          var label = document.createElement('label');
          label.className = 'form-label small mb-1';
          var kindLabel = item.kind === 'check' ? msg.kindCheck : (item.kind === 'choice' ? msg.kindChoice : msg.kindText);
          label.textContent = (item.name || ('field_' + (idx + 1))) + ' (' + kindLabel + ')';
          label.setAttribute('for', 'fillFormInput_' + idx);
          wrap.appendChild(label);
          if (item.kind === 'check') {
            var ck = document.createElement('input');
            ck.type = 'checkbox';
            ck.className = 'form-check-input d-block';
            ck.id = 'fillFormInput_' + idx;
            ck.checked = !!item.checked;
            ck.setAttribute('data-field-name', item.name);
            ck.setAttribute('data-field-kind', 'check');
            wrap.appendChild(ck);
          } else if (item.kind === 'choice' && item.options && item.options.length) {
            var selEl = document.createElement('select');
            selEl.className = 'form-select form-select-sm';
            selEl.id = 'fillFormInput_' + idx;
            selEl.setAttribute('data-field-name', item.name);
            selEl.setAttribute('data-field-kind', 'choice');
            item.options.forEach(function (opt) {
              var o = document.createElement('option');
              o.value = opt;
              o.textContent = opt;
              if (opt === item.value) o.selected = true;
              selEl.appendChild(o);
            });
            wrap.appendChild(selEl);
          } else {
            var inp = document.createElement('input');
            inp.type = 'text';
            inp.className = 'form-control form-control-sm';
            inp.id = 'fillFormInput_' + idx;
            inp.value = item.value || '';
            inp.setAttribute('data-field-name', item.name);
            inp.setAttribute('data-field-kind', 'text');
            wrap.appendChild(inp);
          }
          fieldsEl.appendChild(wrap);
        });
      }

      /**
       * 从当前 UI 收集填写值。
       * @returns {Array<{ name: string, kind: string, value: string, checked: boolean }>}
       */
      function collectValues() {
        var nodes = fieldsEl.querySelectorAll('[data-field-name]');
        var out = [];
        nodes.forEach(function (el) {
          out.push({
            name: el.getAttribute('data-field-name') || '',
            kind: el.getAttribute('data-field-kind') || 'text',
            value: el.type === 'checkbox' ? '' : (el.value || ''),
            checked: el.type === 'checkbox' ? !!el.checked : false,
          });
        });
        return out;
      }

      /**
       * 读取 PDF 中的 AcroForm 字段。
       * @param {Uint8Array} bytes
       * @returns {Promise<Array<any>>}
       */
      function inspectFields(bytes) {
        if (!hasPdfLib()) return Promise.reject(new Error('pdflib'));
        return PDFLib.PDFDocument.load(bytes).then(function (doc) {
          var form = doc.getForm();
          return (form.getFields() || []).map(describeField);
        });
      }

      /**
       * 把 UI 值写回 PDF。
       * @param {function(number, number)=} onProgress
       * @returns {Promise<Uint8Array>}
       */
      function applyFill(onProgress) {
        if (!hasPdfLib()) return Promise.reject(new Error('pdflib'));
        if (!sourceBytes) return Promise.reject(new Error('empty'));
        var values = collectValues();
        return PDFLib.PDFDocument.load(sourceBytes).then(function (doc) {
          var form = doc.getForm();
          var total = values.length || 1;
          var unicodeOverlays = [];
          values.forEach(function (v, idx) {
            try {
              if (v.kind === 'check') {
                var cb = form.getCheckBox(v.name);
                if (v.checked) cb.check(); else cb.uncheck();
              } else if (v.kind === 'choice') {
                var ch = form.getField(v.name);
                if (ch && ch.select && v.value) ch.select(v.value);
              } else {
                form.getTextField(v.name).setText(v.value || '');
                if (v.value && !window.OftPdfWork.canWinAnsiEncode(v.value)) {
                  unicodeOverlays.push(v);
                }
              }
            } catch (ignore) {}
            if (onProgress) onProgress(idx + 1, total);
          });
          try {
            if (form.updateFieldAppearances) form.updateFieldAppearances();
          } catch (appearErr) {
            /* Helvetica 外观流编不了 CJK；下面用系统字体盖一层 */
          }
          var chain = Promise.resolve();
          unicodeOverlays.forEach(function (v) {
            chain = chain.then(function () {
              try {
                var field = form.getTextField(v.name);
                var widgets = field.acroField && field.acroField.getWidgets ? field.acroField.getWidgets() : [];
                var inner = Promise.resolve();
                var pages = doc.getPages();
                widgets.forEach(function (widget) {
                  inner = inner.then(function () {
                    var rect = widget.getRectangle ? widget.getRectangle() : null;
                    if (!rect) return;
                    var page = pages[0];
                    var pref = widget.P ? widget.P() : null;
                    if (pref) {
                      for (var pi = 0; pi < pages.length; pi++) {
                        if (pages[pi].ref === pref) { page = pages[pi]; break; }
                      }
                    }
                    var fontSize = Math.max(8, Math.min(12, (rect.height || 14) - 4));
                    return window.OftPdfWork.drawPageText(doc, page, v.value, {
                      x: (rect.x || 0) + 2,
                      y: (rect.y || 0) + 3,
                      size: fontSize,
                      maxWidth: Math.max(8, (rect.width || 40) - 4),
                    });
                  });
                });
                return inner;
              } catch (overlayErr) {
                return null;
              }
            });
          });
          return chain.then(function () { return doc.save(); });
        }).then(function (bytes) {
          return new Uint8Array(bytes);
        });
      }

      /**
       * 应用填写并刷新进度/预览。
       * @returns {Promise<void>}
       */
      function runApply() {
        if (!sourceBytes) { setErr(msg.empty); return Promise.resolve(); }
        work.setBusy(busyBtns, true);
        work.setProgress(null);
        setStatus(msg.working);
        btnDownload.disabled = true;
        return window.OftPdfWork.yieldUi()
          .then(function () {
            return applyFill(function (done, total) {
              work.setProgress((done / total) * 80);
            });
          })
          .then(function (bytes) {
            resultBytes = bytes;
            work.setProgress(90);
            return work.showPreview(bytes).then(function () { return bytes; });
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
       * 从字节检测字段并渲染；无字段时给出邻页链接。
       * @param {Uint8Array} bytes
       * @returns {Promise<Array<any>>}
       */
      function loadFieldsFromBytes(bytes) {
        return inspectFields(bytes).then(function (list) {
          renderFieldUi(list);
          if (!list.length) {
            setErr(msg.noFields, true);
          }
          return list;
        });
      }

      /**
       * 构造带两个文本域的样例 PDF，并写入示例值。
       * @returns {Promise<void>}
       */
      function loadSamplePdf() {
        if (!hasPdfLib()) return Promise.reject(new Error('pdflib'));
        return PDFLib.PDFDocument.create().then(function (doc) {
          var page = doc.addPage([420, 300]);
          return doc.embedFont(PDFLib.StandardFonts.Helvetica).then(function (font) {
            page.drawText('Name', { x: 48, y: 230, size: 11, font: font });
            page.drawText('Email', { x: 48, y: 180, size: 11, font: font });
            var form = doc.getForm();
            var nameF = form.createTextField('Name');
            nameF.addToPage(page, { x: 100, y: 222, width: 220, height: 22 });
            var emailF = form.createTextField('Email');
            emailF.addToPage(page, { x: 100, y: 172, width: 220, height: 22 });
            nameF.setText('Ada Lovelace');
            emailF.setText('ada@example.com');
            return doc.save();
          });
        }).then(function (bytes) {
          sourceBytes = new Uint8Array(bytes);
          resultBytes = null;
          btnDownload.disabled = true;
          setErr('');
          return loadFieldsFromBytes(sourceBytes).then(function () {
            return runApply();
          });
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
        work.setProgress(null);
        f.arrayBuffer().then(function (ab) {
          sourceBytes = new Uint8Array(ab);
          return loadFieldsFromBytes(sourceBytes).then(function (list) {
            if (!list.length) return;
            return work.showPreview(sourceBytes);
          });
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

      btnApply.addEventListener('click', function () {
        setErr('');
        setWarn('');
        runApply();
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
	const toolMeta = getToolBySlug('fill-out-pdf-form');
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
