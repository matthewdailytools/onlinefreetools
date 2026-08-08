/**
 * JSON Schema 校验工具页（draft-07 / Ajv 8）。
 * slug: json-schema-validator
 * 见 work-tasks/json-schema-validator/02-tool-info.md。
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
 * 渲染 JSON Schema 校验器页面。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表（切换器用全量 supportedLangs）
 */
export const renderJsonSchemaValidatorPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/json-schema-validator';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_json_schema_validator_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_json_schema_validator_description');

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
		items: buildToolSidebarItems({
			lang: opts.lang,
			defaultLang: opts.defaultLang,
			currentSlug: 'json-schema-validator',
			currentAnchor: '#validator',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	/** 页内样式：双栏等高、结果列表、通过/失败状态。 */
	const extraHeadHtml = `
  <style>
    .tools-bar { gap: .5rem; }
    .row.g-3 { align-items: stretch; }
    .row.g-3 > .col-12 { display: flex; flex-direction: column; }
    .row.g-3 > .col-12 > label { margin-bottom: .5rem; }
    #schemaInput, #instanceInput {
      min-height: 280px; height: auto; resize: vertical; flex: 1 1 auto; box-sizing: border-box;
      font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: .9rem;
    }
    #resultPanel {
      min-height: 120px; white-space: pre-wrap; word-break: break-word;
      background: #fff; border: 1px solid #dee2e6; border-radius: .5rem; padding: 1rem;
      font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: .9rem;
    }
    #resultStatus.pass { color: #146c43; font-weight: 600; }
    #resultStatus.fail { color: #b02a37; font-weight: 600; }
    .draft-note { font-size: .875rem; color: #6c757d; }
  </style>`;

	const contentHtml = `
    <div id="validator" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(t(opts.lang, 'tool_json_schema_validator_title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="d-flex align-items-center tools-bar mb-2 flex-wrap">
      <button type="button" id="btnValidate" class="btn btn-primary btn-sm">${escapeHtml(t(opts.lang, 'tool_json_schema_validator_validate'))}</button>
      <button type="button" id="btnSampleFail" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_json_schema_validator_sample_fail'))}</button>
      <button type="button" id="btnSampleOk" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_json_schema_validator_sample_ok'))}</button>
      <button type="button" id="btnCopyErr" class="btn btn-outline-primary btn-sm">${escapeHtml(t(opts.lang, 'tool_json_schema_validator_copy_errors'))}</button>
      <button type="button" id="btnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_json_schema_validator_clear'))}</button>
    </div>
    <p class="draft-note mb-3">${escapeHtml(t(opts.lang, 'tool_json_schema_validator_draft_note'))}</p>

    <p id="validateWarn" class="small text-warning mb-2" style="display:none;" role="status"></p>
    <p id="validateError" class="small text-danger mb-2" style="display:none;" role="alert"></p>

    <div class="row g-3 mb-3">
      <div class="col-12 col-lg-6">
        <label for="schemaInput" class="form-label">${escapeHtml(t(opts.lang, 'tool_json_schema_validator_schema_label'))}</label>
        <textarea id="schemaInput" class="form-control" placeholder="${escapeHtml(t(opts.lang, 'tool_json_schema_validator_schema_placeholder'))}" spellcheck="false"></textarea>
      </div>
      <div class="col-12 col-lg-6">
        <label for="instanceInput" class="form-label">${escapeHtml(t(opts.lang, 'tool_json_schema_validator_instance_label'))}</label>
        <textarea id="instanceInput" class="form-control" placeholder="${escapeHtml(t(opts.lang, 'tool_json_schema_validator_instance_placeholder'))}" spellcheck="false"></textarea>
      </div>
    </div>

    <div class="mb-4">
      <div class="d-flex align-items-center justify-content-between mb-1 flex-wrap gap-2">
        <label class="form-label mb-0" for="resultPanel">${escapeHtml(t(opts.lang, 'tool_json_schema_validator_result_label'))}</label>
        <span id="resultStatus" class="small" role="status"></span>
      </div>
      <pre id="resultPanel" class="result mb-0" tabindex="0"></pre>
    </div>`;

	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: 'tool_json_schema_validator',
		mode: 'rules',
		usecaseCount: 3,
		ruleItemCount: 4,
	});

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{ label: 'JSON Schema', href: 'https://json-schema.org/' },
			{ label: 'Understanding JSON Schema', href: 'https://json-schema.org/understanding-json-schema/' },
			{ label: 'RFC 8259 — JSON', href: 'https://www.rfc-editor.org/rfc/rfc8259' },
			{ label: 'Ajv', href: 'https://ajv.js.org/' },
		],
	});

	/**
	 * 客户端：动态 import Ajv 8（jsDelivr ESM；npm 未发布浏览器 UMD）。
	 * 进页默认失败样例并 validate，展示真实 JSON Pointer 错误。
	 */
	const extraBodyHtml = `
  <script type="module">
    (async function () {
      /** 粘贴软上限（字符） */
      var SOFT_LIMIT = 200000;
      /** Ajv 构造函数（加载后赋值） */
      var AjvCtor = null;
      /** 最近一次错误文本（供复制） */
      var lastErrorText = '';

      var schemaInput = document.getElementById('schemaInput');
      var instanceInput = document.getElementById('instanceInput');
      var resultPanel = document.getElementById('resultPanel');
      var resultStatus = document.getElementById('resultStatus');
      var validateWarn = document.getElementById('validateWarn');
      var validateError = document.getElementById('validateError');
      var btnValidate = document.getElementById('btnValidate');
      var btnSampleFail = document.getElementById('btnSampleFail');
      var btnSampleOk = document.getElementById('btnSampleOk');
      var btnCopyErr = document.getElementById('btnCopyErr');
      var btnClear = document.getElementById('btnClear');

      var msgLarge = ${JSON.stringify(t(opts.lang, 'tool_json_schema_validator_large_warn'))};
      var msgNeedLib = ${JSON.stringify(t(opts.lang, 'tool_json_schema_validator_need_lib'))};
      var msgEmpty = ${JSON.stringify(t(opts.lang, 'tool_json_schema_validator_empty'))};
      var msgBadSchema = ${JSON.stringify(t(opts.lang, 'tool_json_schema_validator_bad_schema'))};
      var msgBadInstance = ${JSON.stringify(t(opts.lang, 'tool_json_schema_validator_bad_instance'))};
      var msgPass = ${JSON.stringify(t(opts.lang, 'tool_json_schema_validator_pass'))};
      var msgFail = ${JSON.stringify(t(opts.lang, 'tool_json_schema_validator_fail'))};
      var msgCopyDone = ${JSON.stringify(t(opts.lang, 'tool_json_schema_validator_copy_done'))};
      var labelCopy = ${JSON.stringify(t(opts.lang, 'tool_json_schema_validator_copy_errors'))};
      var sampleSchema = ${JSON.stringify(t(opts.lang, 'tool_json_schema_validator_sample_schema'))};
      var sampleOk = ${JSON.stringify(t(opts.lang, 'tool_json_schema_validator_sample_instance_ok'))};
      var sampleFail = ${JSON.stringify(t(opts.lang, 'tool_json_schema_validator_sample_instance_fail'))};

      /**
       * 加载 Ajv 8（draft-07 默认）。
       * @returns {Promise<Function>} Ajv 构造函数
       */
      async function ensureAjv() {
        if (AjvCtor) return AjvCtor;
        try {
          var mod = await import('https://cdn.jsdelivr.net/npm/ajv@8.17.1/+esm');
          AjvCtor = mod.default || mod.Ajv || mod;
          if (typeof AjvCtor !== 'function') throw new Error('no Ajv export');
          return AjvCtor;
        } catch (e) {
          throw new Error(msgNeedLib);
        }
      }

      /**
       * 按长度显示软上限警告。
       * @param {string} a Schema 文本
       * @param {string} b Instance 文本
       */
      function maybeWarnSize(a, b) {
        if ((a || '').length + (b || '').length > SOFT_LIMIT) {
          validateWarn.textContent = msgLarge;
          validateWarn.style.display = '';
        } else {
          validateWarn.style.display = 'none';
        }
      }

      /**
       * 展示语法/库错误（非校验失败列表）。
       * @param {unknown} err 异常
       */
      function showError(err) {
        var msg = (err && err.message) ? String(err.message) : String(err || 'Error');
        validateError.textContent = msg;
        validateError.style.display = '';
      }

      /** 清除语法错误提示 */
      function clearError() {
        validateError.style.display = 'none';
        validateError.textContent = '';
      }

      /**
       * 格式化 Ajv 错误为 Pointer + 人话行。
       * @param {Array} errors Ajv errors
       * @returns {string}
       */
      function formatErrors(errors) {
        if (!errors || !errors.length) return '';
        return errors.map(function (e) {
          var path = (e.instancePath === '' || e.instancePath == null) ? '/' : e.instancePath;
          var extra = '';
          if (e.params && e.params.missingProperty) {
            extra = ' (missingProperty: ' + e.params.missingProperty + ')';
          }
          return path + ' — ' + (e.message || 'invalid') + extra;
        }).join('\\n');
      }

      /** 执行校验并更新结果区 */
      async function validate() {
        clearError();
        resultStatus.textContent = '';
        resultStatus.className = 'small';
        resultPanel.textContent = '';
        lastErrorText = '';
        var schemaText = schemaInput.value || '';
        var instanceText = instanceInput.value || '';
        maybeWarnSize(schemaText, instanceText);
        if (!schemaText.trim() || !instanceText.trim()) {
          showError(new Error(msgEmpty));
          return;
        }
        var schema;
        var instance;
        try {
          schema = JSON.parse(schemaText);
        } catch (e) {
          showError(new Error(msgBadSchema + ' ' + (e && e.message ? e.message : '')));
          return;
        }
        try {
          instance = JSON.parse(instanceText);
        } catch (e) {
          showError(new Error(msgBadInstance + ' ' + (e && e.message ? e.message : '')));
          return;
        }
        try {
          var Ajv = await ensureAjv();
          var ajv = new Ajv({ allErrors: true, strict: false });
          var validateFn;
          try {
            validateFn = ajv.compile(schema);
          } catch (ce) {
            showError(new Error(msgBadSchema + ' ' + (ce && ce.message ? ce.message : '')));
            return;
          }
          var ok = validateFn(instance);
          if (ok) {
            resultStatus.textContent = msgPass;
            resultStatus.className = 'small pass';
            resultPanel.textContent = msgPass;
            lastErrorText = '';
          } else {
            var lines = formatErrors(validateFn.errors || []);
            resultStatus.textContent = msgFail;
            resultStatus.className = 'small fail';
            resultPanel.textContent = lines;
            lastErrorText = lines;
          }
        } catch (e) {
          showError(e);
        }
      }

      /**
       * 将紧凑 JSON 样例格式化为缩进文本（避免 i18n 里误用字面 \\n）。
       * @param {string} raw 合法 JSON 字符串
       * @returns {string}
       */
      function prettyJson(raw) {
        try {
          return JSON.stringify(JSON.parse(raw), null, 2);
        } catch (e) {
          return raw || '';
        }
      }

      /** 载入失败样例并校验（进页默认路径） */
      async function loadSampleFail() {
        schemaInput.value = prettyJson(sampleSchema);
        instanceInput.value = prettyJson(sampleFail);
        await validate();
      }

      /** 载入合法样例并校验 */
      async function loadSampleOk() {
        schemaInput.value = prettyJson(sampleSchema);
        instanceInput.value = prettyJson(sampleOk);
        await validate();
      }

      /** 复制错误列表 */
      async function copyErrors() {
        if (!lastErrorText) return;
        await navigator.clipboard.writeText(lastErrorText);
        btnCopyErr.textContent = msgCopyDone;
        setTimeout(function () { btnCopyErr.textContent = labelCopy; }, 1200);
      }

      btnValidate.addEventListener('click', function () { validate(); });
      btnSampleFail.addEventListener('click', function () { loadSampleFail(); });
      btnSampleOk.addEventListener('click', function () { loadSampleOk(); });
      btnCopyErr.addEventListener('click', function () { copyErrors(); });
      btnClear.addEventListener('click', function () {
        schemaInput.value = '';
        instanceInput.value = '';
        resultPanel.textContent = '';
        resultStatus.textContent = '';
        resultStatus.className = 'small';
        lastErrorText = '';
        clearError();
        validateWarn.style.display = 'none';
      });

      // 进页：失败样例 → 真实错误列表（与 Example 对齐）
      await loadSampleFail();
    })();
  </script>`;

	const toolMeta = getToolBySlug('json-schema-validator');
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
