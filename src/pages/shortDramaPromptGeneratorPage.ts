/**
 * Short drama prompt generator：场景字段本地组装 + 可选 Cloudflare AI（Turnstile）。
 * slug: short-drama-prompt-generator；见 work-tasks/short-drama-prompt-generator/02-tool-info.md。
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
import { SHORT_DRAMA_PROMPT_PRESET } from './site/promptClusterPresets';

/** 本工具 i18n 键前缀，与 catalog faqPrefix 一致。 */
const PREFIX = 'tool_short_drama_prompt_generator';

/** catalog slug（API + Turnstile action）。 */
const SLUG = 'short-drama-prompt-generator';

/** DOM / 脚本 id 前缀。 */
const DOM_PREFIX = 'sdr';

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
 * 渲染 Short drama prompt generator 工具页。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderShortDramaPromptGeneratorPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/short-drama-prompt-generator';
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
    .sdr-field { min-height: 72px; font-size: .875rem; }
    .sdr-out { white-space: pre-wrap; word-break: break-word; background: #fff; border: 1px solid #dee2e6; border-radius: .5rem; padding: 1rem; overflow: auto; min-height: 220px; font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: .875rem; }
    .sdr-meta { font-size: .85rem; color: #6c757d; }
    .sdr-platforms { font-size: .9rem; color: #495057; margin-bottom: .75rem; }
  </style>`;

	const contentHtml = `
    <div id="builder" class="tool-hero">
      <h1 class="tool-title">${escapeHtml(tx(opts.lang, 'title'))}</h1>
      <p class="tool-lead">${escapeHtml(description)}</p>
      <p class="sdr-platforms">${escapeHtml(tx(opts.lang, 'platforms_lead'))}</p>
    </div>

    <div class="tool-panel">
      <div class="row g-3 mb-3">
          <div class="col-md-6"><label class="form-label" for="sdrEpisodes">${escapeHtml(tx(opts.lang, 'episodes_label'))}</label><input id="sdrEpisodes" class="form-control sdr-field" type="text" spellcheck="false" placeholder="${escapeHtml(tx(opts.lang, 'episodes_ph'))}"></input></div>
          <div class="col-12"><label class="form-label" for="sdrHook">${escapeHtml(tx(opts.lang, 'hook_label'))}</label><textarea id="sdrHook" class="form-control sdr-field" rows="2" spellcheck="false" placeholder="${escapeHtml(tx(opts.lang, 'hook_ph'))}"></textarea></div>
          <div class="col-12"><label class="form-label" for="sdrCliffhanger">${escapeHtml(tx(opts.lang, 'cliffhanger_label'))}</label><textarea id="sdrCliffhanger" class="form-control sdr-field" rows="2" spellcheck="false" placeholder="${escapeHtml(tx(opts.lang, 'cliffhanger_ph'))}"></textarea></div>
          <div class="col-md-6"><label class="form-label" for="sdrVerticalFormat">${escapeHtml(tx(opts.lang, 'vertical_format_label'))}</label><input id="sdrVerticalFormat" class="form-control sdr-field" type="text" spellcheck="false" placeholder="${escapeHtml(tx(opts.lang, 'vertical_format_ph'))}"></input></div>
          <div class="col-md-6"><label class="form-label" for="sdrGenre">${escapeHtml(tx(opts.lang, 'genre_label'))}</label><input id="sdrGenre" class="form-control sdr-field" type="text" spellcheck="false" placeholder="${escapeHtml(tx(opts.lang, 'genre_ph'))}"></input></div>
      </div>


      <div class="d-flex align-items-center tools-bar mb-3 flex-wrap gap-2">
        <div class="btn-group btn-group-sm" role="group" aria-label="${escapeHtml(tx(opts.lang, 'fmt_label'))}">
          <input type="radio" class="btn-check" name="sdrFmt" id="sdrFmtMd" value="md" checked>
          <label class="btn btn-outline-secondary" for="sdrFmtMd">${escapeHtml(tx(opts.lang, 'fmt_md'))}</label>
          <input type="radio" class="btn-check" name="sdrFmt" id="sdrFmtJson" value="json">
          <label class="btn btn-outline-secondary" for="sdrFmtJson">${escapeHtml(tx(opts.lang, 'fmt_json'))}</label>
        </div>
        <button type="button" id="sdrBtnBuild" class="btn btn-primary btn-sm">${escapeHtml(tx(opts.lang, 'build'))}</button>
        <button type="button" id="sdrBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx(opts.lang, 'load_sample'))}</button>
        <button type="button" id="sdrBtnCopy" class="btn btn-outline-secondary btn-sm" disabled>${escapeHtml(tx(opts.lang, 'copy'))}</button>
        <button type="button" id="sdrBtnDownload" class="btn btn-outline-secondary btn-sm" disabled>${escapeHtml(tx(opts.lang, 'download'))}</button>
        <button type="button" id="sdrBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx(opts.lang, 'clear'))}</button>
      </div>

      ${renderPromptAiPanelHtml({ prefix: DOM_PREFIX, slug: SLUG, labels: aiLabels })}

      <p id="sdrError" class="alert alert-danger py-2 small mb-2" style="display:none;" role="alert"></p>
      <p id="sdrStatus" class="sdr-meta mb-2" role="status"></p>
      <label class="form-label" for="sdrResult">${escapeHtml(tx(opts.lang, 'result_label'))}</label>
      <pre id="sdrResult" class="sdr-out" aria-live="polite"></pre>
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
      var resultEl = document.getElementById('sdrResult');
      var errEl = document.getElementById('sdrError');
      var statusEl = document.getElementById('sdrStatus');
      var btnBuild = document.getElementById('sdrBtnBuild');
      var btnSample = document.getElementById('sdrBtnSample');
      var btnCopy = document.getElementById('sdrBtnCopy');
      var btnDownload = document.getElementById('sdrBtnDownload');
      var btnClear = document.getElementById('sdrBtnClear');
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
      var PRESET = ${JSON.stringify(SHORT_DRAMA_PROMPT_PRESET)};

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
        var el = document.querySelector('input[name="sdrFmt"]:checked');
        return el && el.value === 'json' ? 'json' : 'md';
      }

      function collectFields() {
        return {
          episodes: val(document.getElementById('sdrEpisodes')),
          hook: val(document.getElementById('sdrHook')),
          cliffhanger: val(document.getElementById('sdrCliffhanger')),
          vertical_format: val(document.getElementById('sdrVerticalFormat')),
          genre: val(document.getElementById('sdrGenre'))
        };
      }

      function isEmpty(o) {
        return !Object.keys(o).some(function (k) { return o[k]; });
      }

      function buildBlocks(f) {
        var taskParts = '';
        if (f.episodes) taskParts += 'Episodes: ' + f.episodes + '\\n';
        if (f.hook) taskParts += 'Hook: ' + f.hook + '\\n';
        if (f.cliffhanger) taskParts += 'Cliffhanger: ' + f.cliffhanger + '\\n';
        if (f.vertical_format) taskParts += 'Vertical / Format: ' + f.vertical_format + '\\n';
        if (f.genre) taskParts += 'Genre: ' + f.genre + '\\n';
        return {
          role: 'You are a vertical short-drama serial editor for episodic hooks.',
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
        document.getElementById('sdrEpisodes').value = preset.episodes || '';
        document.getElementById('sdrHook').value = preset.hook || '';
        document.getElementById('sdrCliffhanger').value = preset.cliffhanger || '';
        document.getElementById('sdrVerticalFormat').value = preset.vertical_format || '';
        document.getElementById('sdrGenre').value = preset.genre || '';
        var mdRadio = document.getElementById('sdrFmtMd');
        if (mdRadio) mdRadio.checked = true;
        buildPrompt();
      }

      /** 进页样例：写入预设并构建 Markdown。 */
      function loadSample() {
        applyPreset();
      }

      function reset() {
        document.querySelectorAll('.sdr-field').forEach(function (el) { el.value = ''; });
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

      document.querySelectorAll('input[name="sdrFmt"]').forEach(function (el) {
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
        a.download = 'short-drama-prompt-generator.' + lastExt;
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
