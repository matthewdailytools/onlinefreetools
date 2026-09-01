/**
 * Midjourney prompt builder：场景字段本地组装 + 可选 Cloudflare AI（Turnstile）。
 * slug: midjourney-prompt-builder；见 work-tasks/midjourney-prompt-builder/02-tool-info.md。
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

/** 本工具 i18n 键前缀，与 catalog faqPrefix 一致。 */
const PREFIX = 'tool_midjourney_prompt_builder';

/** catalog slug（API + Turnstile action）。 */
const SLUG = 'midjourney-prompt-builder';

/** DOM / 脚本 id 前缀。 */
const DOM_PREFIX = 'mpb';

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
 * 渲染 Midjourney prompt builder 工具页。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderMidjourneyPromptBuilderPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/midjourney-prompt-builder';
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
    .mpb-field { min-height: 72px; font-size: .875rem; }
    .mpb-out { white-space: pre-wrap; word-break: break-word; background: #fff; border: 1px solid #dee2e6; border-radius: .5rem; padding: 1rem; overflow: auto; min-height: 220px; font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: .875rem; }
    .mpb-meta { font-size: .85rem; color: #6c757d; }
    .mpb-platforms { font-size: .9rem; color: #495057; margin-bottom: .75rem; }
  </style>`;

	const contentHtml = `
    <div id="builder" class="tool-hero">
      <h1 class="tool-title">${escapeHtml(tx(opts.lang, 'title'))}</h1>
      <p class="tool-lead">${escapeHtml(description)}</p>
      <p class="mpb-platforms">${escapeHtml(tx(opts.lang, 'platforms_lead'))}</p>
    </div>

    <div class="tool-panel">
      <div class="row g-3 mb-3">
          <div class="col-md-6"><label class="form-label" for="mpbSubject">${escapeHtml(tx(opts.lang, 'subject_label'))}</label><input id="mpbSubject" class="form-control mpb-field" type="text" spellcheck="false" placeholder="${escapeHtml(tx(opts.lang, 'subject_ph'))}"></input></div>
          <div class="col-md-6"><label class="form-label" for="mpbStyle">${escapeHtml(tx(opts.lang, 'style_label'))}</label><input id="mpbStyle" class="form-control mpb-field" type="text" spellcheck="false" placeholder="${escapeHtml(tx(opts.lang, 'style_ph'))}"></input></div>
          <div class="col-md-6"><label class="form-label" for="mpbLighting">${escapeHtml(tx(opts.lang, 'lighting_label'))}</label><input id="mpbLighting" class="form-control mpb-field" type="text" spellcheck="false" placeholder="${escapeHtml(tx(opts.lang, 'lighting_ph'))}"></input></div>
          <div class="col-md-6"><label class="form-label" for="mpbAspect">${escapeHtml(tx(opts.lang, 'aspect_label'))}</label><input id="mpbAspect" class="form-control mpb-field" type="text" spellcheck="false" placeholder="${escapeHtml(tx(opts.lang, 'aspect_ph'))}"></input></div>
          <div class="col-12"><label class="form-label" for="mpbMjFlags">${escapeHtml(tx(opts.lang, 'mj_flags_label'))}</label><textarea id="mpbMjFlags" class="form-control mpb-field" rows="2" spellcheck="false" placeholder="${escapeHtml(tx(opts.lang, 'mj_flags_ph'))}"></textarea></div>
      </div>

      <div class="table-responsive mb-3">
        <p class="small fw-semibold mb-1">${escapeHtml(tx(opts.lang, 'rules_table_title'))}</p>
        <table class="table table-sm table-bordered mb-0">
          <thead><tr><th>${escapeHtml(tx(opts.lang, 'rules_table_ar'))}</th><th>${escapeHtml(tx(opts.lang, 'rules_table_v'))}</th></tr></thead>
          <tbody>
            <tr><td>${escapeHtml(tx(opts.lang, 'rules_map_1_label'))}</td><td><code>${escapeHtml(tx(opts.lang, 'rules_map_1_flag'))}</code></td></tr>
            <tr><td>${escapeHtml(tx(opts.lang, 'rules_map_2_label'))}</td><td><code>${escapeHtml(tx(opts.lang, 'rules_map_2_flag'))}</code></td></tr>
            <tr><td>${escapeHtml(tx(opts.lang, 'rules_map_3_label'))}</td><td><code>${escapeHtml(tx(opts.lang, 'rules_map_3_flag'))}</code></td></tr>
            <tr><td>${escapeHtml(tx(opts.lang, 'rules_map_4_label'))}</td><td><code>${escapeHtml(tx(opts.lang, 'rules_map_4_flag'))}</code></td></tr>
          </tbody>
        </table>
        <p class="small text-muted mt-1 mb-0">${escapeHtml(tx(opts.lang, 'rules_table_note'))}</p>
      </div>

      <div class="d-flex align-items-center tools-bar mb-3 flex-wrap gap-2">
        <div class="btn-group btn-group-sm" role="group" aria-label="${escapeHtml(tx(opts.lang, 'fmt_label'))}">
          <input type="radio" class="btn-check" name="mpbFmt" id="mpbFmtMd" value="md" checked>
          <label class="btn btn-outline-secondary" for="mpbFmtMd">${escapeHtml(tx(opts.lang, 'fmt_md'))}</label>
          <input type="radio" class="btn-check" name="mpbFmt" id="mpbFmtJson" value="json">
          <label class="btn btn-outline-secondary" for="mpbFmtJson">${escapeHtml(tx(opts.lang, 'fmt_json'))}</label>
        </div>
        <button type="button" id="mpbBtnBuild" class="btn btn-primary btn-sm">${escapeHtml(tx(opts.lang, 'build'))}</button>
        <button type="button" id="mpbBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx(opts.lang, 'load_sample'))}</button>
        <button type="button" id="mpbBtnCopy" class="btn btn-outline-secondary btn-sm" disabled>${escapeHtml(tx(opts.lang, 'copy'))}</button>
        <button type="button" id="mpbBtnDownload" class="btn btn-outline-secondary btn-sm" disabled>${escapeHtml(tx(opts.lang, 'download'))}</button>
        <button type="button" id="mpbBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx(opts.lang, 'clear'))}</button>
      </div>

      ${renderPromptAiPanelHtml({ prefix: DOM_PREFIX, slug: SLUG, labels: aiLabels })}

      <p id="mpbError" class="alert alert-danger py-2 small mb-2" style="display:none;" role="alert"></p>
      <p id="mpbStatus" class="mpb-meta mb-2" role="status"></p>
      <label class="form-label" for="mpbResult">${escapeHtml(tx(opts.lang, 'result_label'))}</label>
      <pre id="mpbResult" class="mpb-out" aria-live="polite"></pre>
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
      var resultEl = document.getElementById('mpbResult');
      var errEl = document.getElementById('mpbError');
      var statusEl = document.getElementById('mpbStatus');
      var btnBuild = document.getElementById('mpbBtnBuild');
      var btnSample = document.getElementById('mpbBtnSample');
      var btnCopy = document.getElementById('mpbBtnCopy');
      var btnDownload = document.getElementById('mpbBtnDownload');
      var btnClear = document.getElementById('mpbBtnClear');
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
      var PRESET = {"subject":"A lone samurai on a misty bridge at dawn","style":"Cinematic ink wash, muted teal palette","lighting":"Soft rim light, volumetric fog","aspect":"16:9","mj_flags":"--v 6.1 --style raw --stylize 120"};

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
        var el = document.querySelector('input[name="mpbFmt"]:checked');
        return el && el.value === 'json' ? 'json' : 'md';
      }

      function collectFields() {
        return {
          subject: val(document.getElementById('mpbSubject')),
          style: val(document.getElementById('mpbStyle')),
          lighting: val(document.getElementById('mpbLighting')),
          aspect: val(document.getElementById('mpbAspect')),
          mj_flags: val(document.getElementById('mpbMjFlags'))
        };
      }

      function isEmpty(o) {
        return !Object.keys(o).some(function (k) { return o[k]; });
      }

      function mapAspectToAr(aspect) {
        var a = (aspect || '').trim();
        if (!a) return '';
        if (a.indexOf('--ar') >= 0) return a;
        if (/^\d+:\d+$/.test(a)) return '--ar ' + a;
        var lower = a.toLowerCase();
        if (lower.indexOf('square') >= 0 || lower === '1:1') return '--ar 1:1';
        if (lower.indexOf('vertical') >= 0 || lower === '9:16') return '--ar 9:16';
        if (lower.indexOf('landscape') >= 0 || lower === '16:9') return '--ar 16:9';
        return '--ar ' + a;
      }

      function buildMjLine(f) {
        var parts = [];
        if (f.subject) parts.push(f.subject);
        if (f.style) parts.push(f.style);
        if (f.lighting) parts.push(f.lighting);
        var flags = (f.mj_flags || '').trim();
        var ar = mapAspectToAr(f.aspect);
        if (ar && flags.indexOf('--ar') < 0) flags = (flags ? flags + ' ' : '') + ar;
        if (flags && flags.indexOf('--v') < 0 && !/--v\s/.test(flags)) flags = (flags ? flags + ' ' : '') + '--v 6.1';
        if (flags) parts.push(flags.trim());
        return parts.join(', ');
      }

      function buildBlocks(f) {
        var mjLine = buildMjLine(f);
        return {
          role: 'You are a Midjourney prompt assistant. Output concise, paste-ready image prompts — not finished renders.',
          task: 'Compose a Midjourney prompt for: ' + (f.subject || '(unspecified subject)') + '. Style: ' + (f.style || '(unspecified)') + '. Lighting: ' + (f.lighting || '(unspecified)') + '.',
          constraints: 'Use English tags. Include aspect/version flags when provided. Suggested line: ' + (mjLine || '(fill fields first)') + '.',
          output: 'One Midjourney prompt line plus 3 optional negative-prompt bullets.'
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
        document.getElementById('mpbSubject').value = preset.subject || '';
        document.getElementById('mpbStyle').value = preset.style || '';
        document.getElementById('mpbLighting').value = preset.lighting || '';
        document.getElementById('mpbAspect').value = preset.aspect || '';
        document.getElementById('mpbMjFlags').value = preset.mj_flags || '';
        var mdRadio = document.getElementById('mpbFmtMd');
        if (mdRadio) mdRadio.checked = true;
        buildPrompt();
      }

      /** 进页样例：写入预设并构建 Markdown。 */
      function loadSample() {
        applyPreset();
      }

      function reset() {
        document.querySelectorAll('.mpb-field').forEach(function (el) { el.value = ''; });
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
        var subj = document.getElementById('mpbSubject');
        if (subj && firstLine) subj.value = firstLine.slice(0, 500);
        buildPrompt();
      };

      btnBuild.addEventListener('click', buildPrompt);
      btnSample.addEventListener('click', loadSample);
      btnClear.addEventListener('click', reset);

      document.querySelectorAll('input[name="mpbFmt"]').forEach(function (el) {
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
        a.download = 'midjourney-prompt-builder.' + lastExt;
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
