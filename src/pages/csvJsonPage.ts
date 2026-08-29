/**
 * CSV ↔ JSON 双向转换工具页。
 * slug: csv-json；同页 Tab，不拆 json-to-csv / excel-to-json。
 * 见 work-tasks/csv-json/02-tool-info.md。
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

/**
 * 为路径加上语言前缀（默认语无前缀）。
 * @param lang 当前语言
 * @param pathname 目标路径
 * @param defaultLang 站点默认语言
 */
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * 渲染 CSV ↔ JSON 工具页。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表（语言切换器用全量 supportedLangs）
 */
export const renderCsvJsonPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/csv-json';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_csv_json_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_csv_json_description');

	const navItems = buildToolPageNavItems(opts.lang, opts.defaultLang);

	/** 语言切换链接始终带显式语言前缀（含默认语）。 */
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
		groups: buildToolSidebarItems({ lang: opts.lang, defaultLang: opts.defaultLang, currentSlug: 'csv-json', currentAnchor: '#converter' }),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	/** 页内样式：双栏等高、方向面板、等宽输入输出。 */
	const extraHeadHtml = `
  <style>
    .tools-bar { gap: .5rem; }
    .row.g-3 { align-items: stretch; }
    .row.g-3 > .col-12 { display: flex; flex-direction: column; }
    .row.g-3 > .col-12 > label { margin-bottom: .5rem; }
    #csvInput, #jsonInput, #csvOutput, #jsonOutput {
      min-height: 320px; height: auto; resize: vertical; flex: 1 1 auto; box-sizing: border-box;
      font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: .9rem;
    }
    #csvOutput, #jsonOutput { white-space: pre-wrap; word-break: break-word; color: #212529; background: #fff; border: 1px solid #dee2e6; border-radius: .5rem; padding: 1rem; overflow: auto; }
    .dir-pane[hidden] { display: none !important; }
    .opt-group { gap: .75rem; }
  </style>`;

	const contentHtml = `
    <div id="converter" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(t(opts.lang, 'tool_csv_json_title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="d-flex align-items-center tools-bar mb-2 flex-wrap">
      <div class="btn-group" role="group" aria-label="${escapeHtml(t(opts.lang, 'tool_csv_json_dir_label'))}">
        <input type="radio" class="btn-check" name="cjDir" id="dirCsvJson" value="csv-json" checked>
        <label class="btn btn-outline-primary btn-sm" for="dirCsvJson">${escapeHtml(t(opts.lang, 'tool_csv_json_tab_csv_json'))}</label>
        <input type="radio" class="btn-check" name="cjDir" id="dirJsonCsv" value="json-csv">
        <label class="btn btn-outline-primary btn-sm" for="dirJsonCsv">${escapeHtml(t(opts.lang, 'tool_csv_json_tab_json_csv'))}</label>
      </div>
      <button type="button" id="btnConvert" class="btn btn-primary btn-sm">${escapeHtml(t(opts.lang, 'tool_csv_json_convert'))}</button>
      <button type="button" id="btnCopy" class="btn btn-outline-primary btn-sm">${escapeHtml(t(opts.lang, 'tool_csv_json_copy_json'))}</button>
      <button type="button" id="btnDownload" class="btn btn-outline-primary btn-sm">${escapeHtml(t(opts.lang, 'tool_csv_json_download_json'))}</button>
      <button type="button" id="btnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_csv_json_sample'))}</button>
      <button type="button" id="btnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_csv_json_clear'))}</button>
    </div>

    <div class="d-flex align-items-center opt-group mb-3 flex-wrap">
      <label class="form-label mb-0" for="delimiterSelect">${escapeHtml(t(opts.lang, 'tool_csv_json_delimiter_label'))}</label>
      <select id="delimiterSelect" class="form-select form-select-sm" style="width:auto;">
        <option value="auto" selected>${escapeHtml(t(opts.lang, 'tool_csv_json_delimiter_auto'))}</option>
        <option value=",">${escapeHtml(t(opts.lang, 'tool_csv_json_delimiter_comma'))}</option>
        <option value=";">${escapeHtml(t(opts.lang, 'tool_csv_json_delimiter_semicolon'))}</option>
        <option value="tab">${escapeHtml(t(opts.lang, 'tool_csv_json_delimiter_tab'))}</option>
      </select>
      <div class="form-check" id="headerWrap">
        <input class="form-check-input" type="checkbox" id="headerRow" checked>
        <label class="form-check-label" for="headerRow">${escapeHtml(t(opts.lang, 'tool_csv_json_header'))}</label>
      </div>
      <div class="form-check" id="typingWrap">
        <input class="form-check-input" type="checkbox" id="typing">
        <label class="form-check-label" for="typing">${escapeHtml(t(opts.lang, 'tool_csv_json_typing'))}</label>
      </div>
      <span id="indentWrap" class="d-flex align-items-center" style="gap:.5rem;">
        <label class="form-label mb-0" for="indentSelect">${escapeHtml(t(opts.lang, 'tool_csv_json_indent_label'))}</label>
        <select id="indentSelect" class="form-select form-select-sm" style="width:auto;">
          <option value="2" selected>${escapeHtml(t(opts.lang, 'tool_csv_json_indent_2'))}</option>
          <option value="4">${escapeHtml(t(opts.lang, 'tool_csv_json_indent_4'))}</option>
          <option value="0">${escapeHtml(t(opts.lang, 'tool_csv_json_indent_minify'))}</option>
        </select>
      </span>
    </div>

    <p id="convertWarn" class="small text-warning mb-2" style="display:none;" role="status"></p>
    <p id="convertError" class="small text-danger mb-2" style="display:none;" role="alert"></p>

    <div id="paneCsvJson" class="dir-pane row g-3 mb-4">
      <div class="col-12 col-lg-6">
        <label for="csvInput" class="form-label">${escapeHtml(t(opts.lang, 'tool_csv_json_csv_input_label'))}</label>
        <textarea id="csvInput" class="form-control" placeholder="${escapeHtml(t(opts.lang, 'tool_csv_json_csv_placeholder'))}" spellcheck="false"></textarea>
      </div>
      <div class="col-12 col-lg-6">
        <label class="form-label" for="jsonOutput">${escapeHtml(t(opts.lang, 'tool_csv_json_json_output_label'))}</label>
        <pre id="jsonOutput" class="result mb-0" tabindex="0"></pre>
      </div>
    </div>

    <div id="paneJsonCsv" class="dir-pane row g-3 mb-4" hidden>
      <div class="col-12 col-lg-6">
        <label for="jsonInput" class="form-label">${escapeHtml(t(opts.lang, 'tool_csv_json_json_input_label'))}</label>
        <textarea id="jsonInput" class="form-control" placeholder="${escapeHtml(t(opts.lang, 'tool_csv_json_json_placeholder'))}" spellcheck="false"></textarea>
      </div>
      <div class="col-12 col-lg-6">
        <label class="form-label" for="csvOutput">${escapeHtml(t(opts.lang, 'tool_csv_json_csv_output_label'))}</label>
        <pre id="csvOutput" class="result mb-0" tabindex="0"></pre>
      </div>
    </div>`;

	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: 'tool_csv_json',
		mode: 'rules',
		usecaseCount: 3,
		ruleItemCount: 4,
	});

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{ label: 'RFC 4180 — CSV', href: 'https://www.rfc-editor.org/rfc/rfc4180' },
			{ label: 'Papa Parse', href: 'https://www.papaparse.com/docs' },
			{ label: 'RFC 8259 — JSON', href: 'https://www.rfc-editor.org/rfc/rfc8259' },
		],
	});

	/** 客户端：papaparse CDN；双向转换、分隔符/表头/类型推断、嵌套扁平化。 */
	const extraBodyHtml = `
  <script src="https://cdn.jsdelivr.net/npm/papaparse@5.4.1/papaparse.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script>
    (function () {
      /** 粘贴软上限（字符），超出仍可转换但提示卡顿风险 */
      var SOFT_LIMIT = 2000000;

      var csvInput = document.getElementById('csvInput');
      var jsonInput = document.getElementById('jsonInput');
      var jsonOutput = document.getElementById('jsonOutput');
      var csvOutput = document.getElementById('csvOutput');
      var paneCsvJson = document.getElementById('paneCsvJson');
      var paneJsonCsv = document.getElementById('paneJsonCsv');
      var delimiterSelect = document.getElementById('delimiterSelect');
      var headerRow = document.getElementById('headerRow');
      var headerWrap = document.getElementById('headerWrap');
      var typing = document.getElementById('typing');
      var typingWrap = document.getElementById('typingWrap');
      var indentWrap = document.getElementById('indentWrap');
      var indentSelect = document.getElementById('indentSelect');
      var btnConvert = document.getElementById('btnConvert');
      var btnCopy = document.getElementById('btnCopy');
      var btnDownload = document.getElementById('btnDownload');
      var btnSample = document.getElementById('btnSample');
      var btnClear = document.getElementById('btnClear');
      var convertWarn = document.getElementById('convertWarn');
      var convertError = document.getElementById('convertError');

      var labelCopyJson = ${JSON.stringify(t(opts.lang, 'tool_csv_json_copy_json'))};
      var labelCopyCsv = ${JSON.stringify(t(opts.lang, 'tool_csv_json_copy_csv'))};
      var labelCopyDone = ${JSON.stringify(t(opts.lang, 'tool_csv_json_copy_done'))};
      var labelDlJson = ${JSON.stringify(t(opts.lang, 'tool_csv_json_download_json'))};
      var labelDlCsv = ${JSON.stringify(t(opts.lang, 'tool_csv_json_download_csv'))};
      var msgLarge = ${JSON.stringify(t(opts.lang, 'tool_csv_json_large_warn'))};
      var msgNeedLib = ${JSON.stringify(t(opts.lang, 'tool_csv_json_need_lib'))};
      var msgEmpty = ${JSON.stringify(t(opts.lang, 'tool_csv_json_empty'))};
      var sampleCsv = ${JSON.stringify(t(opts.lang, 'tool_csv_json_sample_csv'))};
      var sampleJson = ${JSON.stringify(t(opts.lang, 'tool_csv_json_sample_json'))};

      /** 上次成功输出（失败时不清空，便于对照） */
      var lastOkOut = { 'csv-json': '', 'json-csv': '' };

      /** 当前方向：csv-json | json-csv */
      function getDir() {
        var el = document.querySelector('input[name="cjDir"]:checked');
        return el ? el.value : 'csv-json';
      }

      /** 是否为 CSV → JSON */
      function isCsvJson() {
        return getDir() === 'csv-json';
      }

      /** papaparse 全局是否可用 */
      function hasPapa() {
        return typeof Papa !== 'undefined' && Papa && typeof Papa.parse === 'function';
      }

      /**
       * 读取分隔符选择；auto 返回空串交由 papaparse 自动探测。
       * @returns {string}
       */
      function getDelimiter() {
        var v = delimiterSelect.value;
        if (v === 'auto') return '';
        if (v === 'tab') return '\\t';
        return v;
      }

      /**
       * 按长度显示软上限警告。
       * @param {string} text 当前输入
       */
      function maybeWarnSize(text) {
        if ((text || '').length > SOFT_LIMIT) {
          convertWarn.textContent = msgLarge;
          convertWarn.style.display = '';
        } else {
          convertWarn.style.display = 'none';
        }
      }

      /**
       * 展示错误信息。
       * @param {unknown} err 异常或消息
       */
      function showError(err) {
        var msg = (err && err.message) ? String(err.message) : String(err || 'Error');
        convertError.textContent = msg;
        convertError.style.display = '';
      }

      /** 清除错误提示 */
      function clearError() {
        convertError.style.display = 'none';
        convertError.textContent = '';
      }

      /**
       * 判断是否为普通对象（非数组、非 null）。
       * @param {unknown} v
       * @returns {boolean}
       */
      function isPlainObject(v) {
        return v !== null && typeof v === 'object' && !Array.isArray(v);
      }

      /**
       * 将嵌套值扁平化为「点号路径 → 单元格」；数组整体 JSON 字符串化。
       * @param {unknown} value 当前值
       * @param {string} prefix 路径前缀
       * @param {Record<string, unknown>} out 输出映射
       */
      function flatten(value, prefix, out) {
        if (isPlainObject(value)) {
          var keys = Object.keys(value);
          if (!keys.length && prefix) { out[prefix] = ''; return; }
          keys.forEach(function (k) {
            flatten(value[k], prefix ? prefix + '.' + k : k, out);
          });
        } else if (Array.isArray(value)) {
          out[prefix || 'value'] = JSON.stringify(value);
        } else {
          out[prefix || 'value'] = value;
        }
      }

      /**
       * CSV → JSON：papaparse 解析；表头/分隔符/类型推断按 UI 选项。
       * @param {string} src CSV 文本
       * @returns {string} 格式化 JSON
       */
      function csvToJson(src) {
        if (!hasPapa()) throw new Error(msgNeedLib);
        var text = (src || '');
        if (!text.trim()) throw new Error(msgEmpty);
        var delim = getDelimiter();
        var res = Papa.parse(text, {
          header: headerRow.checked,
          delimiter: delim,
          dynamicTyping: typing.checked,
          skipEmptyLines: 'greedy',
        });
        var rows = res.data || [];
        if (!rows.length) {
          if (res.errors && res.errors.length) throw new Error(res.errors[0].message);
          throw new Error(msgEmpty);
        }
        // 非致命解析问题（如列数不齐）以警告展示，仍输出结果。
        if (res.errors && res.errors.length) {
          var e0 = res.errors[0];
          var where = (e0.row != null) ? (' (row ' + (e0.row + 1) + ')') : '';
          convertWarn.textContent = e0.message + where;
          convertWarn.style.display = '';
        }
        var indent = parseInt(indentSelect.value, 10);
        if (indent === 0) return JSON.stringify(rows);
        return JSON.stringify(rows, null, indent);
      }

      /**
       * JSON → CSV：解析为记录数组，扁平化并取列并集，papaparse.unparse 生成 CSV。
       * @param {string} src JSON 文本
       * @returns {string} CSV 文本
       */
      function jsonToCsv(src) {
        if (!hasPapa()) throw new Error(msgNeedLib);
        var text = (src || '').trim();
        if (!text) throw new Error(msgEmpty);
        var parsed = JSON.parse(text);
        var records = Array.isArray(parsed) ? parsed : [parsed];
        var fields = [];
        var seen = {};
        var rows = records.map(function (rec) {
          var flat = {};
          if (isPlainObject(rec) || Array.isArray(rec)) flatten(rec, '', flat);
          else flat = { value: rec };
          Object.keys(flat).forEach(function (f) {
            if (!seen[f]) { seen[f] = 1; fields.push(f); }
          });
          return flat;
        });
        var data = rows.map(function (r) {
          return fields.map(function (f) { return (f in r) ? r[f] : ''; });
        });
        var delim = getDelimiter() || ',';
        return Papa.unparse({ fields: fields, data: data }, { delimiter: delim });
      }

      /** 按当前方向执行转换并写入输出区 */
      function convert() {
        if (!hasPapa()) {
          showError(new Error(msgNeedLib));
          return;
        }
        clearError();
        convertWarn.style.display = 'none';
        try {
          if (isCsvJson()) {
            maybeWarnSize(csvInput.value);
            var outJ = csvToJson(csvInput.value);
            jsonOutput.textContent = outJ;
            lastOkOut['csv-json'] = outJ;
          } else {
            maybeWarnSize(jsonInput.value);
            var outC = jsonToCsv(jsonInput.value);
            csvOutput.textContent = outC;
            lastOkOut['json-csv'] = outC;
          }
        } catch (e) {
          showError(e);
        }
      }

      /** 切换 Tab：面板、按钮文案、CSV-only 选项可见性 */
      function applyDirUi() {
        var cj = isCsvJson();
        paneCsvJson.hidden = !cj;
        paneJsonCsv.hidden = cj;
        headerWrap.style.display = cj ? '' : 'none';
        typingWrap.style.display = cj ? '' : 'none';
        indentWrap.style.display = cj ? '' : 'none';
        btnCopy.textContent = cj ? labelCopyJson : labelCopyCsv;
        btnDownload.textContent = cj ? labelDlJson : labelDlCsv;
        clearError();
        convertWarn.style.display = 'none';
      }

      /** 当前方向输出文本 */
      function currentOut() {
        return isCsvJson() ? (jsonOutput.textContent || '') : (csvOutput.textContent || '');
      }

      /** 复制当前输出 */
      async function copyOut() {
        convert();
        if (convertError.style.display !== 'none') return;
        var value = currentOut();
        await navigator.clipboard.writeText(value);
        var restore = isCsvJson() ? labelCopyJson : labelCopyCsv;
        btnCopy.textContent = labelCopyDone;
        setTimeout(function () { btnCopy.textContent = restore; }, 1200);
      }

      /** 下载当前输出 */
      function downloadOut() {
        convert();
        if (convertError.style.display !== 'none') return;
        var value = currentOut();
        var filename = isCsvJson() ? 'converted.json' : 'converted.csv';
        var mime = isCsvJson() ? 'application/json;charset=utf-8' : 'text/csv;charset=utf-8';
        var blob = new Blob([value], { type: mime });
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      }

      /** 载入样例并转换 */
      function loadSample() {
        if (isCsvJson()) {
          csvInput.value = sampleCsv;
        } else {
          jsonInput.value = sampleJson;
        }
        convert();
      }

      btnConvert.addEventListener('click', convert);
      btnCopy.addEventListener('click', copyOut);
      btnDownload.addEventListener('click', downloadOut);
      btnSample.addEventListener('click', loadSample);
      btnClear.addEventListener('click', function () {
        if (isCsvJson()) {
          csvInput.value = '';
          jsonOutput.textContent = '';
          lastOkOut['csv-json'] = '';
        } else {
          jsonInput.value = '';
          csvOutput.textContent = '';
          lastOkOut['json-csv'] = '';
        }
        clearError();
        convertWarn.style.display = 'none';
      });
      document.querySelectorAll('input[name="cjDir"]').forEach(function (el) {
        el.addEventListener('change', applyDirUi);
      });
      delimiterSelect.addEventListener('change', function () {
        if (((isCsvJson() ? csvInput.value : jsonInput.value) || '').trim()) convert();
      });
      headerRow.addEventListener('change', function () {
        if (isCsvJson() && (csvInput.value || '').trim()) convert();
      });
      typing.addEventListener('change', function () {
        if (isCsvJson() && (csvInput.value || '').trim()) convert();
      });
      indentSelect.addEventListener('change', function () {
        if (isCsvJson() && (csvInput.value || '').trim()) convert();
      });

      // 预填 CSV→JSON 样例（与 Example 同结构）
      csvInput.value = sampleCsv;
      jsonInput.value = sampleJson;
      applyDirUi();
      convert();
    })();
  </script>`;

	const toolMeta = getToolBySlug('csv-json');
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
