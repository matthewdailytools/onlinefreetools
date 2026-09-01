/**
 * iOS prompt builder：场景字段本地组装 + 可选 Cloudflare AI（Turnstile）。
 * slug: ios-prompt-builder；见 work-tasks/ios-prompt-builder/02-tool-info.md。
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
	buildPromptAiLabels,
	renderPromptAiPanelHtml,
	renderPromptAiClientScript,
	PROMPT_AI_TURNSTILE_SCRIPT,
} from './site/promptAiPanel';
import { IOS_PROMPT_PRESET } from './site/promptClusterPresets';

/** 本工具 i18n 键前缀，与 catalog faqPrefix 一致。 */
const PREFIX = 'tool_ios_prompt_builder';

/** catalog slug（API + Turnstile action）。 */
const SLUG = 'ios-prompt-builder';

/** DOM / 脚本 id 前缀。 */
const DOM_PREFIX = 'iosb';

/**
 * 为路径加上语言前缀（默认语无前缀）。
 * @param lang 当前 UI 语言
 * @param pathname 以 / 开头的路径
 * @param defaultLang 站点默认语言
 */
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * 读取本工具某一 i18n 后缀键。
 * @param lang 当前语言
 * @param suffix 如 title、description
 */
const tx = (lang: SiteLang, suffix: string) => t(lang, `${PREFIX}_${suffix}` as Parameters<typeof t>[1]);

/**
 * 渲染 iOS prompt builder 工具页。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderIosPromptBuilderPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/ios-prompt-builder';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${tx(opts.lang, 'title')} | ${t(opts.lang, 'brand')}`;
	const description = tx(opts.lang, 'description');
	const navItems = buildToolPageNavItems(opts.lang, opts.defaultLang);

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
			currentSlug: SLUG,
			currentAnchor: '#builder',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	const aiLabels = buildPromptAiLabels((suffix) => tx(opts.lang, suffix));
	const aiLabelsJson = JSON.stringify({
		empty: tx(opts.lang, 'empty'),
		ai_err_generic: aiLabels.ai_err_generic,
		ai_err_rate: aiLabels.ai_err_rate,
		ai_err_turnstile: aiLabels.ai_err_turnstile,
		ai_consent_body: aiLabels.ai_consent_body,
		ai_working: aiLabels.ai_working,
		ai_done: aiLabels.ai_done,
	});

	const extraHeadHtml = `
  <style>
    .iosb-field { min-height: 72px; font-size: .875rem; }
    .iosb-out { white-space: pre-wrap; word-break: break-word; background: #fff; border: 1px solid #dee2e6; border-radius: .5rem; padding: 1rem; overflow: auto; min-height: 220px; font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: .875rem; }
    .iosb-meta { font-size: .85rem; color: #6c757d; }
    .iosb-platforms { font-size: .9rem; color: #495057; margin-bottom: .75rem; }
  </style>`;

	const contentHtml = `
    <div id="builder" class="tool-hero">
      <h1 class="tool-title">${escapeHtml(tx(opts.lang, 'title'))}</h1>
      <p class="tool-lead">${escapeHtml(description)}</p>
      <p class="iosb-platforms">${escapeHtml(tx(opts.lang, 'platforms_lead'))}</p>
    </div>

    <div class="tool-panel">
      <div class="row g-3 mb-3">
          <div class="col-12"><label class="form-label" for="iosbFeatureSpec">${escapeHtml(tx(opts.lang, 'feature_spec_label'))}</label><textarea id="iosbFeatureSpec" class="form-control iosb-field" rows="2" spellcheck="false" placeholder="${escapeHtml(tx(opts.lang, 'feature_spec_ph'))}"></textarea></div>
          <div class="col-md-6"><label class="form-label" for="iosbSwiftStack">${escapeHtml(tx(opts.lang, 'swift_stack_label'))}</label><input id="iosbSwiftStack" class="form-control iosb-field" type="text" spellcheck="false" placeholder="${escapeHtml(tx(opts.lang, 'swift_stack_ph'))}"></input></div>
          <div class="col-12"><label class="form-label" for="iosbSwiftuiUi">${escapeHtml(tx(opts.lang, 'swiftui_ui_label'))}</label><textarea id="iosbSwiftuiUi" class="form-control iosb-field" rows="2" spellcheck="false" placeholder="${escapeHtml(tx(opts.lang, 'swiftui_ui_ph'))}"></textarea></div>
          <div class="col-12"><label class="form-label" for="iosbHigConstraints">${escapeHtml(tx(opts.lang, 'hig_constraints_label'))}</label><textarea id="iosbHigConstraints" class="form-control iosb-field" rows="2" spellcheck="false" placeholder="${escapeHtml(tx(opts.lang, 'hig_constraints_ph'))}"></textarea></div>
      </div>


      <div class="d-flex align-items-center tools-bar mb-3 flex-wrap gap-2">
        <div class="btn-group btn-group-sm" role="group" aria-label="${escapeHtml(tx(opts.lang, 'fmt_label'))}">
          <input type="radio" class="btn-check" name="iosbFmt" id="iosbFmtMd" value="md" checked>
          <label class="btn btn-outline-secondary" for="iosbFmtMd">${escapeHtml(tx(opts.lang, 'fmt_md'))}</label>
          <input type="radio" class="btn-check" name="iosbFmt" id="iosbFmtJson" value="json">
          <label class="btn btn-outline-secondary" for="iosbFmtJson">${escapeHtml(tx(opts.lang, 'fmt_json'))}</label>
        </div>
        <button type="button" id="iosbBtnBuild" class="btn btn-primary btn-sm">${escapeHtml(tx(opts.lang, 'build'))}</button>
        <button type="button" id="iosbBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx(opts.lang, 'load_sample'))}</button>
        <button type="button" id="iosbBtnCopy" class="btn btn-outline-secondary btn-sm" disabled>${escapeHtml(tx(opts.lang, 'copy'))}</button>
        <button type="button" id="iosbBtnDownload" class="btn btn-outline-secondary btn-sm" disabled>${escapeHtml(tx(opts.lang, 'download'))}</button>
        <button type="button" id="iosbBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx(opts.lang, 'clear'))}</button>
      </div>

      ${renderPromptAiPanelHtml({ prefix: DOM_PREFIX, slug: SLUG, labels: aiLabels })}

      <p id="iosbError" class="alert alert-danger py-2 small mb-2" style="display:none;" role="alert"></p>
      <p id="iosbStatus" class="iosb-meta mb-2" role="status"></p>
      <label class="form-label" for="iosbResult">${escapeHtml(tx(opts.lang, 'result_label'))}</label>
      <pre id="iosbResult" class="iosb-out" aria-live="polite"></pre>
    </div>`;

	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: PREFIX,
		mode: 'rules',
		usecaseCount: 4,
		ruleItemCount: 4,
		howItemCount: 4,
	});

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: 'OpenAI — Prompt engineering guide',
				href: 'https://platform.openai.com/docs/guides/prompt-engineering',
			},
			{
				label: 'Anthropic — Prompt engineering overview',
				href: 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview',
			},
		],
	});

	const promptAiScript = renderPromptAiClientScript({
		prefix: DOM_PREFIX,
		slug: SLUG,
		labelsJson: 'aiLabelsJson',
		setErrorFn: 'setError',
		setStatusFn: 'setStatus',
	});

	const extraBodyHtml = `
  <script>
    (function () {
      var resultEl = document.getElementById('iosbResult');
      var errEl = document.getElementById('iosbError');
      var statusEl = document.getElementById('iosbStatus');
      var btnBuild = document.getElementById('iosbBtnBuild');
      var btnSample = document.getElementById('iosbBtnSample');
      var btnCopy = document.getElementById('iosbBtnCopy');
      var btnDownload = document.getElementById('iosbBtnDownload');
      var btnClear = document.getElementById('iosbBtnClear');
      var aiLabelsJson = ${aiLabelsJson};

      var msg = {
        empty: ${JSON.stringify(tx(opts.lang, 'empty'))},
        working: ${JSON.stringify(tx(opts.lang, 'status_working'))},
        done: ${JSON.stringify(tx(opts.lang, 'status_done'))},
        copied: ${JSON.stringify(tx(opts.lang, 'status_copied'))},
        secRole: ${JSON.stringify(tx(opts.lang, 'sec_role'))},
        secTask: ${JSON.stringify(tx(opts.lang, 'sec_task'))},
        secConstraints: ${JSON.stringify(tx(opts.lang, 'sec_constraints'))},
        secOutput: ${JSON.stringify(tx(opts.lang, 'sec_output'))}
      };

      var lastOut = '';
      var lastExt = 'md';
      var PRESET = ${JSON.stringify(IOS_PROMPT_PRESET)};

      function setError(text) {
        errEl.textContent = text || '';
        errEl.style.display = text ? '' : 'none';
      }

      function setStatus(text) {
        statusEl.textContent = text || '';
      }

      function val(el) {
        return el && el.value ? String(el.value).trim() : '';
      }

      function currentFmt() {
        var el = document.querySelector('input[name="iosbFmt"]:checked');
        return el && el.value === 'json' ? 'json' : 'md';
      }

      function collectFields() {
        return {
          feature_spec: val(document.getElementById('iosbFeatureSpec')),
          swift_stack: val(document.getElementById('iosbSwiftStack')),
          swiftui_ui: val(document.getElementById('iosbSwiftuiUi')),
          hig_constraints: val(document.getElementById('iosbHigConstraints'))
        };
      }

      function isEmpty(o) {
        return !Object.keys(o).some(function (k) { return o[k]; });
      }

      function buildBlocks(f) {
        var taskParts = '';
        if (f.feature_spec) taskParts += 'Feature / Spec: ' + f.feature_spec + '\\n';
        if (f.swift_stack) taskParts += 'Swift / Stack: ' + f.swift_stack + '\\n';
        if (f.swiftui_ui) taskParts += 'Swiftui / Ui: ' + f.swiftui_ui + '\\n';
        if (f.hig_constraints) taskParts += 'Hig / Constraints: ' + f.hig_constraints + '\\n';
        return {
          role: 'You are a senior iOS engineer (Swift, SwiftUI, Apple HIG).',
          task: 'Assemble a structured prompt from these inputs:\\n' + (taskParts || '(unspecified)'),
          constraints: 'Stay factual. Do not execute tools or APIs. Keep paste-ready for chat UIs.',
          output: 'Markdown sections: Role, Task, Constraints, Output — plus a one-paragraph summary block.'
        };
      }

      function toMarkdown(b) {
        return ['## ' + msg.secRole, b.role, '', '## ' + msg.secTask, b.task, '', '## ' + msg.secConstraints, b.constraints, '', '## ' + msg.secOutput, b.output].join('\\n');
      }

      function toJson(f, b) {
        return JSON.stringify({ fields: f, role: b.role, task: b.task, constraints: b.constraints, output: b.output }, null, 2);
      }

      function showResult(text, ext) {
        lastOut = text;
        lastExt = ext;
        resultEl.textContent = text;
        btnCopy.disabled = !text;
        btnDownload.disabled = !text;
        setStatus(msg.done);
      }

      function buildPrompt() {
        setError('');
        setStatus(msg.working);
        var f = collectFields();
        if (isEmpty(f)) {
          setError(msg.empty);
          setStatus('');
          return;
        }
        var b = buildBlocks(f);
        var fmt = currentFmt();
        showResult(fmt === 'json' ? toJson(f, b) : toMarkdown(b), fmt === 'json' ? 'json' : 'md');
      }

      function applyPreset() {
        var preset = PRESET;
        document.getElementById('iosbFeatureSpec').value = preset.feature_spec || '';
        document.getElementById('iosbSwiftStack').value = preset.swift_stack || '';
        document.getElementById('iosbSwiftuiUi').value = preset.swiftui_ui || '';
        document.getElementById('iosbHigConstraints').value = preset.hig_constraints || '';
        var mdRadio = document.getElementById('iosbFmtMd');
        if (mdRadio) mdRadio.checked = true;
        buildPrompt();
      }

      /** 进页样例：写入预设并构建 Markdown。 */
      function loadSample() {
        applyPreset();
      }

      function reset() {
        document.querySelectorAll('.iosb-field').forEach(function (el) { el.value = ''; });
        resultEl.textContent = '';
        lastOut = '';
        btnCopy.disabled = true;
        btnDownload.disabled = true;
        setError('');
        setStatus('');
      }

      window.promptAiAssembleInput = function (action) {
        if (action === 'polish' && lastOut) return lastOut;
        var f = collectFields();
        if (isEmpty(f)) return '';
        var b = buildBlocks(f);
        return toMarkdown(b);
      };

      window.promptAiApplyText = function (action, text) {
        if (action === 'polish') {
          showResult(text, currentFmt() === 'json' ? 'json' : 'md');
          return;
        }
        var firstLine = (text || '').split('\\n')[0] || '';
        var subj = document.getElementById('iosbFeatureSpec');
        if (subj && firstLine) subj.value = firstLine.slice(0, 500);
        buildPrompt();
      };

      btnBuild.addEventListener('click', buildPrompt);
      btnSample.addEventListener('click', loadSample);
      btnClear.addEventListener('click', reset);

      document.querySelectorAll('input[name="iosbFmt"]').forEach(function (el) {
        el.addEventListener('change', function () {
          if (lastOut || !isEmpty(collectFields())) buildPrompt();
        });
      });

      btnCopy.addEventListener('click', function () {
        if (!lastOut) return;
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(lastOut).then(function () { setStatus(msg.copied); });
        }
      });

      btnDownload.addEventListener('click', function () {
        if (!lastOut) return;
        var blob = new Blob([lastOut], { type: 'text/plain;charset=utf-8' });
        var a = document.createElement('a');
        var url = URL.createObjectURL(blob);
        a.href = url;
        a.download = 'ios-prompt-builder.' + lastExt;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      });

` + promptAiScript + `

      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadSample);
      } else {
        loadSample();
      }
    })();
  </script>
` + PROMPT_AI_TURNSTILE_SCRIPT;

	const toolMeta = getToolBySlug(SLUG);
	const toolSeoHtml = toolMeta
		? renderToolExtraSections({ lang: opts.lang, defaultLang: opts.defaultLang, tool: toolMeta })
		: '';
	const toolJsonLd = toolMeta
		? buildToolJsonLd({
				lang: opts.lang,
				defaultLang: opts.defaultLang,
				tool: toolMeta,
				name: tx(opts.lang, 'title'),
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
