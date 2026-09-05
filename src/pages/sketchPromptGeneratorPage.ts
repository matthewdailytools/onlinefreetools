/**
 * Sketch.app prompt generator：组装「让 AI 操作 Sketch.app」的可粘贴 Prompt + 可选 Cloudflare AI（Turnstile）。
 * 意图：Mac 设计软件 Sketch.app 的 Artboard / Symbol / 导出步骤——不是铅笔线稿文生图。
 * slug: sketch-prompt-generator；见 work-tasks/sketch-prompt-generator/02-tool-info.md。
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
import { SKETCH_PROMPT_PRESET } from './site/promptClusterPresets';

/** 本工具 i18n 键前缀，与 catalog faqPrefix 一致。 */
const PREFIX = 'tool_sketch_prompt_generator';

/** catalog slug（API + Turnstile action）。 */
const SLUG = 'sketch-prompt-generator';

/** DOM / 脚本 id 前缀。 */
const DOM_PREFIX = 'skg';

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
 * 渲染 Sketch.app prompt generator 工具页。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderSketchPromptGeneratorPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/sketch-prompt-generator';
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
    .skg-field { min-height: 72px; font-size: .875rem; }
    .skg-out { white-space: pre-wrap; word-break: break-word; background: #fff; border: 1px solid #dee2e6; border-radius: .5rem; padding: 1rem; overflow: auto; min-height: 220px; font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: .875rem; }
    .skg-meta { font-size: .85rem; color: #6c757d; }
    .skg-platforms { font-size: .9rem; color: #495057; margin-bottom: .75rem; }
  </style>`;

	const contentHtml = `
    <div id="builder" class="tool-hero">
      <h1 class="tool-title">${escapeHtml(tx(opts.lang, 'title'))}</h1>
      <p class="tool-lead">${escapeHtml(description)}</p>
      <p class="skg-platforms">${escapeHtml(tx(opts.lang, 'platforms_lead'))}</p>
    </div>

    <div class="tool-panel">
      <div class="row g-3 mb-3">
          <div class="col-md-6"><label class="form-label" for="skgGoal">${escapeHtml(tx(opts.lang, 'goal_label'))}</label><input id="skgGoal" class="form-control skg-field" type="text" spellcheck="false" placeholder="${escapeHtml(tx(opts.lang, 'goal_ph'))}"></input></div>
          <div class="col-md-6"><label class="form-label" for="skgArtboard">${escapeHtml(tx(opts.lang, 'artboard_label'))}</label><input id="skgArtboard" class="form-control skg-field" type="text" spellcheck="false" placeholder="${escapeHtml(tx(opts.lang, 'artboard_ph'))}"></input></div>
          <div class="col-md-6"><label class="form-label" for="skgSymbols">${escapeHtml(tx(opts.lang, 'symbols_label'))}</label><input id="skgSymbols" class="form-control skg-field" type="text" spellcheck="false" placeholder="${escapeHtml(tx(opts.lang, 'symbols_ph'))}"></input></div>
          <div class="col-md-6"><label class="form-label" for="skgExport">${escapeHtml(tx(opts.lang, 'export_label'))}</label><input id="skgExport" class="form-control skg-field" type="text" spellcheck="false" placeholder="${escapeHtml(tx(opts.lang, 'export_ph'))}"></input></div>
      </div>


      <div class="d-flex align-items-center tools-bar mb-3 flex-wrap gap-2">
        <div class="btn-group btn-group-sm" role="group" aria-label="${escapeHtml(tx(opts.lang, 'fmt_label'))}">
          <input type="radio" class="btn-check" name="skgFmt" id="skgFmtMd" value="md" checked>
          <label class="btn btn-outline-secondary" for="skgFmtMd">${escapeHtml(tx(opts.lang, 'fmt_md'))}</label>
          <input type="radio" class="btn-check" name="skgFmt" id="skgFmtJson" value="json">
          <label class="btn btn-outline-secondary" for="skgFmtJson">${escapeHtml(tx(opts.lang, 'fmt_json'))}</label>
        </div>
        <button type="button" id="skgBtnBuild" class="btn btn-primary btn-sm">${escapeHtml(tx(opts.lang, 'build'))}</button>
        <button type="button" id="skgBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx(opts.lang, 'load_sample'))}</button>
        <button type="button" id="skgBtnCopy" class="btn btn-outline-secondary btn-sm" disabled>${escapeHtml(tx(opts.lang, 'copy'))}</button>
        <button type="button" id="skgBtnDownload" class="btn btn-outline-secondary btn-sm" disabled>${escapeHtml(tx(opts.lang, 'download'))}</button>
        <button type="button" id="skgBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx(opts.lang, 'clear'))}</button>
      </div>

      ${renderPromptAiPanelHtml({ prefix: DOM_PREFIX, slug: SLUG, labels: aiLabels })}

      <p id="skgError" class="alert alert-danger py-2 small mb-2" style="display:none;" role="alert"></p>
      <p id="skgStatus" class="skg-meta mb-2" role="status"></p>
      <label class="form-label" for="skgResult">${escapeHtml(tx(opts.lang, 'result_label'))}</label>
      <pre id="skgResult" class="skg-out" aria-live="polite"></pre>
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
				label: 'Sketch — Documentation',
				href: 'https://www.sketch.com/docs/',
			},
			{
				label: 'Sketch Developer — Platform overview',
				href: 'https://developer.sketch.com/',
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
      var resultEl = document.getElementById('skgResult');
      var errEl = document.getElementById('skgError');
      var statusEl = document.getElementById('skgStatus');
      var btnBuild = document.getElementById('skgBtnBuild');
      var btnSample = document.getElementById('skgBtnSample');
      var btnCopy = document.getElementById('skgBtnCopy');
      var btnDownload = document.getElementById('skgBtnDownload');
      var btnClear = document.getElementById('skgBtnClear');
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
      var PRESET = ${JSON.stringify(SKETCH_PROMPT_PRESET)};

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
        var el = document.querySelector('input[name="skgFmt"]:checked');
        return el && el.value === 'json' ? 'json' : 'md';
      }

      function collectFields() {
        return {
          goal: val(document.getElementById('skgGoal')),
          artboard: val(document.getElementById('skgArtboard')),
          symbols: val(document.getElementById('skgSymbols')),
          export_ops: val(document.getElementById('skgExport'))
        };
      }

      function isEmpty(o) {
        return !Object.keys(o).some(function (k) { return o[k]; });
      }

      function buildBlocks(f) {
        var taskParts = '';
        if (f.goal) taskParts += 'Goal: ' + f.goal + '\\n';
        if (f.artboard) taskParts += 'Artboards: ' + f.artboard + '\\n';
        if (f.symbols) taskParts += 'Symbols / styles: ' + f.symbols + '\\n';
        if (f.export_ops) taskParts += 'Export / handoff: ' + f.export_ops + '\\n';
        return {
          role: 'You are an assistant that writes numbered steps for operating Sketch.app (the Mac UI/design tool by Sketch B.V.). Cover Pages, Artboards, Symbols, Shared Styles, Libraries, and Export. Do not write Midjourney or pencil line-art image prompts.',
          task: 'From these inputs, produce a paste-ready brief so a chat AI can guide a human (or Sketch plugin author) through Sketch.app:\\n' + (taskParts || '(unspecified)'),
          constraints: 'Assume Sketch.app on macOS. Prefer built-in features over third-party plugins unless named. Do not claim you can remote-control Sketch from this browser. Stay paste-ready for chat UIs.',
          output: 'Markdown: Role, Task, Constraints, Output — include an ordered checklist of Sketch.app clicks/menus plus export filenames.'
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
        document.getElementById('skgGoal').value = preset.goal || '';
        document.getElementById('skgArtboard').value = preset.artboard || '';
        document.getElementById('skgSymbols').value = preset.symbols || '';
        document.getElementById('skgExport').value = preset.export_ops || '';
        var mdRadio = document.getElementById('skgFmtMd');
        if (mdRadio) mdRadio.checked = true;
        buildPrompt();
      }

      /** 进页样例：写入预设并构建 Markdown。 */
      function loadSample() {
        applyPreset();
      }

      function reset() {
        document.querySelectorAll('.skg-field').forEach(function (el) { el.value = ''; });
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

      window.promptAiApplyText = function (_action, text) {
        showResult(text, 'md');
      };

      btnBuild.addEventListener('click', buildPrompt);
      btnSample.addEventListener('click', loadSample);
      btnClear.addEventListener('click', reset);

      document.querySelectorAll('input[name="skgFmt"]').forEach(function (el) {
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
        a.download = 'sketch-prompt-generator.' + lastExt;
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
