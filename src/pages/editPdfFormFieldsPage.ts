/**
 * 编辑 PDF 表单字段：列出已有域名，支持重命名（底层改名）或删除后下载（纯客户端）。
 * slug: edit-pdf-form-fields
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
 * 渲染 edit-pdf-form-fields 工具页。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderEditPdfFormFieldsPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 工具路径（默认语无前缀）。 */
	const toolPath = '/tools/edit-pdf-form-fields';
	/** 当前语规范路径。 */
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	/** i18n 键前缀。 */
	const prefix = 'tool_edit_pdf_form_fields';
	/** 文档 title。 */
	const title = `${t(opts.lang, prefix + '_title')} | ${t(opts.lang, 'brand')}`;
	/** meta / 页内摘要。 */
	const description = t(opts.lang, prefix + '_description');
	/** 顶栏导航项。 */
	const navItems = buildToolPageNavItems(opts.lang, opts.defaultLang);
	/** 无字段时链到「做成可填写」页。 */
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
			currentSlug: 'edit-pdf-form-fields',
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
    .edit-fields-table { font-size: .875rem; }
    ${pdfWorkUiCss()}
  </style>`;

	/** 首屏交互区。 */
	const contentHtml = `
    <div id="converter" class="tool-page-heading mb-3">
      <h1 class="h4 mb-0">${escapeHtml(t(opts.lang, prefix + '_title'))}</h1>
    </div>

    <label class="tool-dropzone mb-3" id="editFieldsDrop" for="editFieldsFile">
      <input type="file" id="editFieldsFile" accept="application/pdf,.pdf">
      <span class="tool-dropzone-title">${escapeHtml(t(opts.lang, prefix + '_choose_file'))}</span>
      <span class="tool-dropzone-hint">${escapeHtml(t(opts.lang, prefix + '_drop_hint'))}</span>
    </label>

    <h2 class="h6 mb-2">${escapeHtml(t(opts.lang, prefix + '_fields_heading'))}</h2>
    <div class="table-responsive mb-3">
      <table class="table table-sm edit-fields-table mb-0">
        <thead>
          <tr>
            <th>${escapeHtml(t(opts.lang, prefix + '_col_name'))}</th>
            <th>${escapeHtml(t(opts.lang, prefix + '_col_type'))}</th>
            <th>${escapeHtml(t(opts.lang, prefix + '_col_new_name'))}</th>
            <th>${escapeHtml(t(opts.lang, prefix + '_col_remove'))}</th>
          </tr>
        </thead>
        <tbody id="editFieldsBody"></tbody>
      </table>
    </div>

    <div class="d-flex align-items-center tools-bar mb-2 flex-wrap">
      <button type="button" id="editFieldsBtnApply" class="btn btn-primary btn-sm">${escapeHtml(t(opts.lang, prefix + '_apply'))}</button>
      <button type="button" id="editFieldsBtnDownload" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(t(opts.lang, prefix + '_download'))}</button>
      <button type="button" id="editFieldsBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, prefix + '_sample'))}</button>
      <button type="button" id="editFieldsBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, prefix + '_clear'))}</button>
    </div>

    <p id="editFieldsWarn" class="small text-warning mb-2" style="display:none;"></p>
    <p id="editFieldsError" class="small text-danger mb-2" style="display:none;"></p>
    <p id="editFieldsStatus" class="small text-muted mb-2"></p>
    ${pdfWorkUiBlockHtml({ idPrefix: 'editFieldsPdf', labels: pdfWorkLabels })}

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

	/** 客户端脚本：列出字段、重命名/删除、预览、下载。 */
	const extraBodyHtml = `
  ${pdfWorkUiClientScript()}
  <script src="/vendor/pdf-lib/pdf-lib.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script>
    (function () {
      /** 软限制：超过后仅警告。 */
      var SOFT_BYTES = 25 * 1024 * 1024;
      /** 文件选择框。 */
      var fileInput = document.getElementById('editFieldsFile');
      /** 字段表体。 */
      var bodyEl = document.getElementById('editFieldsBody');
      /** 应用更改。 */
      var btnApply = document.getElementById('editFieldsBtnApply');
      /** 下载。 */
      var btnDownload = document.getElementById('editFieldsBtnDownload');
      /** 样例。 */
      var btnSample = document.getElementById('editFieldsBtnSample');
      /** 清空。 */
      var btnClear = document.getElementById('editFieldsBtnClear');
      /** 警告区。 */
      var warnEl = document.getElementById('editFieldsWarn');
      /** 错误区。 */
      var errEl = document.getElementById('editFieldsError');
      /** 状态区。 */
      var statusEl = document.getElementById('editFieldsStatus');
      /** 进度/预览工作台。 */
      var work = window.OftPdfWork.bind('editFieldsPdf');
      /** 忙碌时禁用的按钮。 */
      var busyBtns = [btnApply, btnSample, btnClear, btnDownload];
      /** 当前源 PDF。 */
      var sourceBytes = null;
      /** 编辑后的结果。 */
      var resultBytes = null;
      /** 无字段时链到做成可填写页。 */
      var makeFillableHref = ${JSON.stringify(makeFillableHref)};

      /** 可见文案。 */
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
      };

      /**
       * 判断 pdf-lib 是否可用。
       * @returns {boolean}
       */
      function hasPdfLib() {
        return typeof PDFLib !== 'undefined' && PDFLib && typeof PDFLib.PDFDocument === 'function';
      }

      /**
       * 显示或清空错误；无字段时附邻页链接。
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

      /** 清空源、结果与表格。 */
      function clearAll() {
        sourceBytes = null;
        resultBytes = null;
        btnDownload.disabled = true;
        bodyEl.innerHTML = '';
        work.clearPreview();
        work.hideProgress();
        setErr('');
        setWarn('');
        setStatus('');
        fileInput.value = '';
      }

      /** 下载编辑后的 PDF。 */
      function downloadResult() {
        if (!resultBytes) return;
        var blob = new Blob([resultBytes], { type: 'application/pdf' });
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = 'form-fields-edited.pdf';
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      }

      /**
       * 读取字段名与构造名。
       * @param {any} field
       * @returns {{ name: string, type: string }}
       */
      function describeField(field) {
        return {
          name: field.getName ? field.getName() : '',
          type: field && field.constructor ? field.constructor.name : 'Field',
        };
      }

      /**
       * 渲染字段表。
       * @param {Array<{ name: string, type: string }>} list
       */
      function renderRows(list) {
        bodyEl.innerHTML = '';
        (list || []).forEach(function (item, idx) {
          var tr = document.createElement('tr');
          var tdName = document.createElement('td');
          tdName.textContent = item.name;
          var tdType = document.createElement('td');
          tdType.textContent = item.type.replace(/^PDF/, '');
          var tdNew = document.createElement('td');
          var inp = document.createElement('input');
          inp.type = 'text';
          inp.className = 'form-control form-control-sm';
          inp.value = item.name;
          inp.setAttribute('data-orig-name', item.name);
          inp.setAttribute('data-role', 'rename');
          inp.id = 'editFieldsRename_' + idx;
          tdNew.appendChild(inp);
          var tdRm = document.createElement('td');
          var ck = document.createElement('input');
          ck.type = 'checkbox';
          ck.className = 'form-check-input';
          ck.setAttribute('data-orig-name', item.name);
          ck.setAttribute('data-role', 'remove');
          ck.id = 'editFieldsRemove_' + idx;
          tdRm.appendChild(ck);
          tr.appendChild(tdName);
          tr.appendChild(tdType);
          tr.appendChild(tdNew);
          tr.appendChild(tdRm);
          bodyEl.appendChild(tr);
        });
      }

      /**
       * 从表格收集重命名/删除意图。
       * @returns {Array<{ name: string, newName: string, remove: boolean }>}
       */
      function collectEdits() {
        var rows = bodyEl.querySelectorAll('tr');
        var out = [];
        rows.forEach(function (tr) {
          var rename = tr.querySelector('[data-role="rename"]');
          var remove = tr.querySelector('[data-role="remove"]');
          if (!rename) return;
          out.push({
            name: rename.getAttribute('data-orig-name') || '',
            newName: (rename.value || '').toString().trim(),
            remove: !!(remove && remove.checked),
          });
        });
        return out;
      }

      /**
       * 列出 PDF 中的字段。
       * @param {Uint8Array} bytes
       * @returns {Promise<Array<{ name: string, type: string }>>}
       */
      function inspectFields(bytes) {
        if (!hasPdfLib()) return Promise.reject(new Error('pdflib'));
        return PDFLib.PDFDocument.load(bytes).then(function (doc) {
          var form = doc.getForm();
          return (form.getFields() || []).map(describeField);
        });
      }

      /**
       * 先删除再重命名，写出新 PDF。
       * @param {function(number, number)=} onProgress
       * @returns {Promise<Uint8Array>}
       */
      function applyEdits(onProgress) {
        if (!hasPdfLib()) return Promise.reject(new Error('pdflib'));
        if (!sourceBytes) return Promise.reject(new Error('empty'));
        var edits = collectEdits();
        return PDFLib.PDFDocument.load(sourceBytes).then(function (doc) {
          var form = doc.getForm();
          var removals = edits.filter(function (e) { return e.remove && e.name; });
          var renames = edits.filter(function (e) { return !e.remove && e.name && e.newName && e.newName !== e.name; });
          var total = removals.length + renames.length || 1;
          var done = 0;
          removals.forEach(function (e) {
            try { form.removeField(form.getField(e.name)); } catch (ignore) {}
            done += 1;
            if (onProgress) onProgress(done, total);
          });
          renames.forEach(function (e) {
            try {
              var field = form.getField(e.name);
              if (field && field.acroField && field.acroField.setPartialName) {
                field.acroField.setPartialName(e.newName);
              }
            } catch (ignore) {}
            done += 1;
            if (onProgress) onProgress(done, total);
          });
          try {
            if (form.updateFieldAppearances) form.updateFieldAppearances();
          } catch (appearErr) {
            /* 原字段值含非 Latin-1 时 Helvetica 外观会失败，改名/删除仍应保存 */
          }
          return doc.save();
        }).then(function (bytes) {
          return new Uint8Array(bytes);
        });
      }

      /**
       * 应用编辑并刷新预览；成功后把结果当作新源并刷新列表。
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
            return applyEdits(function (done, total) {
              work.setProgress((done / total) * 80);
            });
          })
          .then(function (bytes) {
            resultBytes = bytes;
            sourceBytes = bytes;
            work.setProgress(90);
            return inspectFields(bytes).then(function (list) {
              renderRows(list);
              return work.showPreview(bytes);
            });
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
       * 从字节列出字段并预览。
       * @param {Uint8Array} bytes
       * @returns {Promise<void>}
       */
      function showSource(bytes) {
        return inspectFields(bytes).then(function (list) {
          renderRows(list);
          if (!list.length) setErr(msg.noFields, true);
          return work.showPreview(bytes);
        });
      }

      /**
       * 样例：带 Name / Email 两个域的 PDF，并列出字段。
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
            return doc.save();
          });
        }).then(function (bytes) {
          sourceBytes = new Uint8Array(bytes);
          resultBytes = sourceBytes;
          btnDownload.disabled = false;
          setErr('');
          work.setBusy(busyBtns, true);
          work.setProgress(null);
          setStatus(msg.working);
          return showSource(sourceBytes).then(function () {
            setStatus(msg.done);
          });
        }).catch(function (err) {
          var eStr = String(err && err.message ? err.message : err);
          setErr(/password/i.test(eStr) ? msg.encrypted : msg.loadFail);
        }).finally(function () {
          work.setBusy(busyBtns, false);
          work.hideProgress();
          btnDownload.disabled = !resultBytes;
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
          return showSource(sourceBytes);
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
	const toolMeta = getToolBySlug('edit-pdf-form-fields');
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
