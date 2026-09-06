/**
 * YAML ↔ JSON 双向转换工具页。
 * slug: yaml-json；同页 Tab，不拆 json-to-yaml。
 * 见 work-tasks/yaml-json/02-tool-info.md。
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

/** 为路径加上语言前缀（默认语无前缀）。 */
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * 渲染 YAML ↔ JSON 工具页。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表（语言切换器用全量 supportedLangs）
 */
export const renderYamlJsonPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/yaml-json';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_yaml_json_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_yaml_json_description');

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
		groups: buildToolSidebarItems({ lang: opts.lang, defaultLang: opts.defaultLang, currentSlug: 'yaml-json', currentAnchor: '#converter' }),
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
    #yamlInput, #jsonInput, #yamlOutput, #jsonOutput {
      min-height: 320px; height: auto; resize: vertical; flex: 1 1 auto; box-sizing: border-box;
      font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: .9rem;
    }
    #yamlOutput, #jsonOutput { white-space: pre-wrap; word-break: break-word; background: #fff; border: 1px solid #dee2e6; border-radius: .5rem; padding: 1rem; overflow: auto; }
    .dir-pane[hidden] { display: none !important; }
    .opt-group { gap: .75rem; }
  </style>`;

	const contentHtml = `
    <div id="converter" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(t(opts.lang, 'tool_yaml_json_title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="d-flex align-items-center tools-bar mb-2 flex-wrap">
      <div class="btn-group" role="group" aria-label="${escapeHtml(t(opts.lang, 'tool_yaml_json_dir_label'))}">
        <input type="radio" class="btn-check" name="yjDir" id="dirYamlJson" value="yaml-json" checked>
        <label class="btn btn-outline-primary btn-sm" for="dirYamlJson">${escapeHtml(t(opts.lang, 'tool_yaml_json_tab_yaml_json'))}</label>
        <input type="radio" class="btn-check" name="yjDir" id="dirJsonYaml" value="json-yaml">
        <label class="btn btn-outline-primary btn-sm" for="dirJsonYaml">${escapeHtml(t(opts.lang, 'tool_yaml_json_tab_json_yaml'))}</label>
      </div>
      <button type="button" id="btnConvert" class="btn btn-primary btn-sm">${escapeHtml(t(opts.lang, 'tool_yaml_json_convert'))}</button>
      <button type="button" id="btnCopy" class="btn btn-outline-primary btn-sm">${escapeHtml(t(opts.lang, 'tool_yaml_json_copy_json'))}</button>
      <button type="button" id="btnDownload" class="btn btn-outline-primary btn-sm">${escapeHtml(t(opts.lang, 'tool_yaml_json_download_json'))}</button>
      <button type="button" id="btnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_yaml_json_sample'))}</button>
      <button type="button" id="btnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_yaml_json_clear'))}</button>
    </div>

    <div class="d-flex align-items-center opt-group mb-3 flex-wrap">
      <div class="form-check" id="jsonSafeWrap">
        <input class="form-check-input" type="checkbox" id="jsonSafe">
        <label class="form-check-label" for="jsonSafe">${escapeHtml(t(opts.lang, 'tool_yaml_json_json_safe'))}</label>
      </div>
      <label class="form-label mb-0" for="indentSelect">${escapeHtml(t(opts.lang, 'tool_yaml_json_indent_label'))}</label>
      <select id="indentSelect" class="form-select form-select-sm" style="width:auto;">
        <option value="2" selected>${escapeHtml(t(opts.lang, 'tool_yaml_json_indent_2'))}</option>
        <option value="4">${escapeHtml(t(opts.lang, 'tool_yaml_json_indent_4'))}</option>
        <option value="0" id="indentMinifyOpt">${escapeHtml(t(opts.lang, 'tool_yaml_json_indent_minify'))}</option>
      </select>
    </div>

    <p id="convertWarn" class="small text-warning mb-2" style="display:none;" role="status"></p>
    <p id="convertError" class="small text-danger mb-2" style="display:none;" role="alert"></p>

    <div id="paneYamlJson" class="dir-pane row g-3 mb-4">
      <div class="col-12 col-lg-6">
        <label for="yamlInput" class="form-label">${escapeHtml(t(opts.lang, 'tool_yaml_json_yaml_input_label'))}</label>
        <textarea id="yamlInput" class="form-control" placeholder="${escapeHtml(t(opts.lang, 'tool_yaml_json_yaml_placeholder'))}" spellcheck="false"></textarea>
      </div>
      <div class="col-12 col-lg-6">
        <label class="form-label" for="jsonOutput">${escapeHtml(t(opts.lang, 'tool_yaml_json_json_output_label'))}</label>
        <pre id="jsonOutput" class="result mb-0" tabindex="0"></pre>
      </div>
    </div>

    <div id="paneJsonYaml" class="dir-pane row g-3 mb-4" hidden>
      <div class="col-12 col-lg-6">
        <label for="jsonInput" class="form-label">${escapeHtml(t(opts.lang, 'tool_yaml_json_json_input_label'))}</label>
        <textarea id="jsonInput" class="form-control" placeholder="${escapeHtml(t(opts.lang, 'tool_yaml_json_json_placeholder'))}" spellcheck="false"></textarea>
      </div>
      <div class="col-12 col-lg-6">
        <label class="form-label" for="yamlOutput">${escapeHtml(t(opts.lang, 'tool_yaml_json_yaml_output_label'))}</label>
        <pre id="yamlOutput" class="result mb-0" tabindex="0"></pre>
      </div>
    </div>`;

	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: 'tool_yaml_json',
		mode: 'rules',
		usecaseCount: 3,
		ruleItemCount: 4,
		howItemCount: 4,
	});

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{ label: 'YAML 1.2.2 Specification', href: 'https://yaml.org/spec/1.2.2/' },
			{ label: 'js-yaml', href: 'https://github.com/nodeca/js-yaml' },
			{ label: 'RFC 8259 — JSON', href: 'https://www.rfc-editor.org/rfc/rfc8259' },
		],
	});

	/** 客户端：js-yaml CDN；双向转换、行号错误、JSON-safe 类型、多文档数组。 */
	const extraBodyHtml = `
  <script src="/vendor/js-yaml/js-yaml.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script>
    (function () {
      /** 粘贴软上限（字符），超出仍可转换但提示卡顿风险 */
      var SOFT_LIMIT = 200000;

      var yamlInput = document.getElementById('yamlInput');
      var jsonInput = document.getElementById('jsonInput');
      var jsonOutput = document.getElementById('jsonOutput');
      var yamlOutput = document.getElementById('yamlOutput');
      var paneYamlJson = document.getElementById('paneYamlJson');
      var paneJsonYaml = document.getElementById('paneJsonYaml');
      var jsonSafe = document.getElementById('jsonSafe');
      var jsonSafeWrap = document.getElementById('jsonSafeWrap');
      var indentSelect = document.getElementById('indentSelect');
      var indentMinifyOpt = document.getElementById('indentMinifyOpt');
      var btnConvert = document.getElementById('btnConvert');
      var btnCopy = document.getElementById('btnCopy');
      var btnDownload = document.getElementById('btnDownload');
      var btnSample = document.getElementById('btnSample');
      var btnClear = document.getElementById('btnClear');
      var convertWarn = document.getElementById('convertWarn');
      var convertError = document.getElementById('convertError');

      var labelCopyJson = ${JSON.stringify(t(opts.lang, 'tool_yaml_json_copy_json'))};
      var labelCopyYaml = ${JSON.stringify(t(opts.lang, 'tool_yaml_json_copy_yaml'))};
      var labelCopyDone = ${JSON.stringify(t(opts.lang, 'tool_yaml_json_copy_done'))};
      var labelDlJson = ${JSON.stringify(t(opts.lang, 'tool_yaml_json_download_json'))};
      var labelDlYaml = ${JSON.stringify(t(opts.lang, 'tool_yaml_json_download_yaml'))};
      var msgLarge = ${JSON.stringify(t(opts.lang, 'tool_yaml_json_large_warn'))};
      var msgNeedLib = ${JSON.stringify(t(opts.lang, 'tool_yaml_json_need_lib'))};
      var msgEmpty = ${JSON.stringify(t(opts.lang, 'tool_yaml_json_empty'))};
      var sampleYaml = ${JSON.stringify(t(opts.lang, 'tool_yaml_json_sample_yaml'))};
      var sampleJson = ${JSON.stringify(t(opts.lang, 'tool_yaml_json_sample_json'))};

      /** 上次成功输出（失败时不清空，便于对照） */
      var lastOkOut = { 'yaml-json': '', 'json-yaml': '' };

      /** 当前方向：yaml-json | json-yaml */
      function getDir() {
        var el = document.querySelector('input[name="yjDir"]:checked');
        return el ? el.value : 'yaml-json';
      }

      /** 是否为 YAML → JSON */
      function isYamlJson() {
        return getDir() === 'yaml-json';
      }

      /** js-yaml 全局是否可用 */
      function hasYaml() {
        return typeof jsyaml !== 'undefined' && jsyaml && typeof jsyaml.loadAll === 'function';
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
       * 展示解析错误（含 YAML 行/列）。
       * @param {unknown} err 异常
       */
      function showError(err) {
        var msg = (err && err.message) ? String(err.message) : String(err || 'Error');
        if (err && err.mark) {
          var line = (err.mark.line | 0) + 1;
          var col = (err.mark.column | 0) + 1;
          msg = msg + ' (line ' + line + ', column ' + col + ')';
        }
        convertError.textContent = msg;
        convertError.style.display = '';
      }

      /** 清除错误提示 */
      function clearError() {
        convertError.style.display = 'none';
        convertError.textContent = '';
      }

      /**
       * YAML → JSON：多文档 loadAll；单篇不包数组；可选 JSON_SCHEMA。
       * @param {string} src YAML 文本
       * @returns {string} 格式化 JSON
       */
      function yamlToJson(src) {
        if (!hasYaml()) throw new Error(msgNeedLib);
        var text = (src || '').trim();
        if (!text) throw new Error(msgEmpty);
        var schema = jsonSafe.checked ? jsyaml.JSON_SCHEMA : jsyaml.DEFAULT_SCHEMA;
        // 第二参传 options（无 iterator）时返回文档数组
        var docs = jsyaml.loadAll(text, { schema: schema });
        var value = docs.length === 1 ? docs[0] : docs;
        var indent = parseInt(indentSelect.value, 10);
        if (indent === 0) return JSON.stringify(value);
        return JSON.stringify(value, null, indent);
      }

      /**
       * JSON → YAML：JSON.parse 后 dump。
       * @param {string} src JSON 文本
       * @returns {string} YAML 文本
       */
      function jsonToYaml(src) {
        if (!hasYaml()) throw new Error(msgNeedLib);
        var text = (src || '').trim();
        if (!text) throw new Error(msgEmpty);
        var value = JSON.parse(text);
        var indent = parseInt(indentSelect.value, 10);
        if (indent === 0) indent = 2;
        return jsyaml.dump(value, {
          indent: indent,
          lineWidth: -1,
          noRefs: true,
          quotingType: '"',
        });
      }

      /** 按当前方向执行转换并写入输出区 */
      function convert() {
        if (!hasYaml()) {
          showError(new Error(msgNeedLib));
          return;
        }
        clearError();
        try {
          if (isYamlJson()) {
            maybeWarnSize(yamlInput.value);
            var outJ = yamlToJson(yamlInput.value);
            jsonOutput.textContent = outJ;
            lastOkOut['yaml-json'] = outJ;
          } else {
            maybeWarnSize(jsonInput.value);
            var outY = jsonToYaml(jsonInput.value);
            yamlOutput.textContent = outY;
            lastOkOut['json-yaml'] = outY;
          }
        } catch (e) {
          showError(e);
        }
      }

      /** 切换 Tab：面板、按钮文案、JSON-safe / minify 可见性 */
      function applyDirUi() {
        var yj = isYamlJson();
        paneYamlJson.hidden = !yj;
        paneJsonYaml.hidden = yj;
        jsonSafeWrap.style.display = yj ? '' : 'none';
        indentMinifyOpt.disabled = !yj;
        if (!yj && indentSelect.value === '0') indentSelect.value = '2';
        btnCopy.textContent = yj ? labelCopyJson : labelCopyYaml;
        btnDownload.textContent = yj ? labelDlJson : labelDlYaml;
        clearError();
        convertWarn.style.display = 'none';
      }

      /** 当前方向输出文本 */
      function currentOut() {
        return isYamlJson() ? (jsonOutput.textContent || '') : (yamlOutput.textContent || '');
      }

      /** 复制当前输出 */
      async function copyOut() {
        convert();
        if (convertError.style.display !== 'none') return;
        var value = currentOut();
        await navigator.clipboard.writeText(value);
        var restore = isYamlJson() ? labelCopyJson : labelCopyYaml;
        btnCopy.textContent = labelCopyDone;
        setTimeout(function () { btnCopy.textContent = restore; }, 1200);
      }

      /** 下载当前输出 */
      function downloadOut() {
        convert();
        if (convertError.style.display !== 'none') return;
        var value = currentOut();
        var filename = isYamlJson() ? 'converted.json' : 'converted.yaml';
        var mime = isYamlJson() ? 'application/json;charset=utf-8' : 'text/yaml;charset=utf-8';
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

      /** 载入样例并转换（样例已是真换行；勿在此写 /\\n/——会落在 TS 模板字符串里被提前转义） */
      function loadSample() {
        if (isYamlJson()) {
          yamlInput.value = sampleYaml;
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
        if (isYamlJson()) {
          yamlInput.value = '';
          jsonOutput.textContent = '';
          lastOkOut['yaml-json'] = '';
        } else {
          jsonInput.value = '';
          yamlOutput.textContent = '';
          lastOkOut['json-yaml'] = '';
        }
        clearError();
        convertWarn.style.display = 'none';
      });
      document.querySelectorAll('input[name="yjDir"]').forEach(function (el) {
        el.addEventListener('change', applyDirUi);
      });
      jsonSafe.addEventListener('change', function () {
        if (isYamlJson() && (yamlInput.value || '').trim()) convert();
      });
      indentSelect.addEventListener('change', function () {
        if (((isYamlJson() ? yamlInput.value : jsonInput.value) || '').trim()) convert();
      });

      // 预填 YAML→JSON 样例（与 Example 同语种结构）
      yamlInput.value = sampleYaml;
      jsonInput.value = sampleJson;
      applyDirUi();
      convert();
    })();
  </script>`;

	const toolMeta = getToolBySlug('yaml-json');
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
