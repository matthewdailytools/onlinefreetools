/**
 * Writing prompt generator：对白/角色/剧本/随机写作 Prompt 本地组装。
 * slug: writing-prompt-generator；见 work-tasks/writing-prompt-generator/02-tool-info.md。
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
import { WRITING_PROMPT_PRESETS, WRITING_PROMPT_RANDOM } from './site/promptClusterPresets';

/** 本工具 i18n 键前缀，与 catalog faqPrefix 一致。 */
const PREFIX = 'tool_writing_prompt_generator';

/** catalog slug（API + Turnstile action）。 */
const SLUG = 'writing-prompt-generator';

/** DOM / 脚本 id 前缀。 */
const DOM_PREFIX = 'wpg';

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
 * 渲染 Writing prompt generator 工具页。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderWritingPromptGeneratorPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 工具规范路径（无语言前缀）。 */
	const toolPath = '/tools/writing-prompt-generator';
	/** 当前语言下的 canonical 路径。 */
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	/** 文档 title：H1 原句 + 品牌。 */
	const title = `${tx(opts.lang, 'title')} | ${t(opts.lang, 'brand')}`;
	/** meta description，与可见文案同源。 */
	const description = tx(opts.lang, 'description');

	/** 顶栏导航项。 */
	const navItems = buildToolPageNavItems(opts.lang, opts.defaultLang);

	/**
	 * 语言切换链接始终带显式语言段。
	 * @param code 语言码
	 * @param pathname 工具路径
	 */
	const withExplicitLangPrefix = (code: SiteLang, pathname: string) => {
		const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
		return `/${code}${safe}`.replace(/\/{2,}/g, '/');
	};

	/** header 语言菜单用的绝对路径映射。 */
	const langAlternates: Record<string, string> = Object.fromEntries(
		(supportedLangs || []).map((code) => [code, withExplicitLangPrefix(code, toolPath)])
	);

	/** hreflang 列表。 */
	const alternates: HreflangAlternate[] = (supportedLangs || []).map((code) => ({
		lang: code,
		href: `https://onlinefreetools.org${withLangPrefix(code, toolPath, opts.defaultLang)}`,
	}));

	/** 站点顶栏 HTML。 */
	const headerHtml = renderHeader({
		lang: opts.lang,
		brandHref: withLangPrefix(opts.lang, '/', opts.defaultLang),
		navItems,
		enabledLangs: supportedLangs,
		langAlternates,
	});

	/** 工具侧栏 HTML。 */
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

	/** 页脚 HTML。 */
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

	/** 页面 scoped CSS。 */
	const extraHeadHtml = `
  <style>
    .wpg-field { min-height: 72px; font-size: .875rem; }
    .wpg-out { white-space: pre-wrap; word-break: break-word; background: #fff; border: 1px solid #dee2e6; border-radius: .5rem; padding: 1rem; overflow: auto; min-height: 220px; font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: .875rem; }
    .wpg-meta { font-size: .85rem; color: #6c757d; }
    .wpg-platforms { font-size: .9rem; color: #495057; margin-bottom: .75rem; }
    .wpg-mode-label { font-size: .875rem; font-weight: 600; margin-bottom: .35rem; }
    .wpg-mode-group .btn { font-size: .8125rem; }
    .wpg-panel-hidden { display: none !important; }
  </style>`;

	/** 首屏：写作模式芯片 + 各模式字段 + 构建/随机。 */
	const contentHtml = `
    <div id="builder" class="tool-hero">
      <h1 class="tool-title">${escapeHtml(tx(opts.lang, 'title'))}</h1>
      <p class="tool-lead">${escapeHtml(description)}</p>
      <p class="wpg-platforms">${escapeHtml(tx(opts.lang, 'platforms_lead'))}</p>
    </div>

    <div class="tool-panel">
      <p class="wpg-mode-label" id="wpgModeLabel">${escapeHtml(tx(opts.lang, 'mode_label'))}</p>
      <div class="btn-group btn-group-sm flex-wrap wpg-mode-group mb-3" role="group" aria-labelledby="wpgModeLabel">
        <button type="button" class="btn btn-outline-secondary wpg-mode active" data-mode="dialogue">${escapeHtml(tx(opts.lang, 'mode_dialogue'))}</button>
        <button type="button" class="btn btn-outline-secondary wpg-mode" data-mode="character">${escapeHtml(tx(opts.lang, 'mode_character'))}</button>
        <button type="button" class="btn btn-outline-secondary wpg-mode" data-mode="script">${escapeHtml(tx(opts.lang, 'mode_script'))}</button>
        <button type="button" class="btn btn-outline-secondary wpg-mode" data-mode="random">${escapeHtml(tx(opts.lang, 'mode_random'))}</button>
      </div>

      <div id="wpgPanelDialogue" class="wpg-panel mb-3">
        <div class="row g-3">
          <div class="col-md-6"><label class="form-label" for="wpgDlgGenre">${escapeHtml(tx(opts.lang, 'dlg_genre_label'))}</label><input id="wpgDlgGenre" class="form-control wpg-field" type="text" spellcheck="false" placeholder="${escapeHtml(tx(opts.lang, 'dlg_genre_ph'))}"></div>
          <div class="col-md-6"><label class="form-label" for="wpgDlgCharacters">${escapeHtml(tx(opts.lang, 'dlg_characters_label'))}</label><input id="wpgDlgCharacters" class="form-control wpg-field" type="text" spellcheck="false" placeholder="${escapeHtml(tx(opts.lang, 'dlg_characters_ph'))}"></div>
          <div class="col-md-6"><label class="form-label" for="wpgDlgSetting">${escapeHtml(tx(opts.lang, 'dlg_setting_label'))}</label><input id="wpgDlgSetting" class="form-control wpg-field" type="text" spellcheck="false" placeholder="${escapeHtml(tx(opts.lang, 'dlg_setting_ph'))}"></div>
          <div class="col-md-6"><label class="form-label" for="wpgDlgConflict">${escapeHtml(tx(opts.lang, 'dlg_conflict_label'))}</label><input id="wpgDlgConflict" class="form-control wpg-field" type="text" spellcheck="false" placeholder="${escapeHtml(tx(opts.lang, 'dlg_conflict_ph'))}"></div>
          <div class="col-12"><label class="form-label" for="wpgDlgTone">${escapeHtml(tx(opts.lang, 'dlg_tone_label'))}</label><input id="wpgDlgTone" class="form-control wpg-field" type="text" spellcheck="false" placeholder="${escapeHtml(tx(opts.lang, 'dlg_tone_ph'))}"></div>
        </div>
      </div>

      <div id="wpgPanelCharacter" class="wpg-panel wpg-panel-hidden mb-3">
        <div class="row g-3">
          <div class="col-md-6"><label class="form-label" for="wpgCharName">${escapeHtml(tx(opts.lang, 'char_name_label'))}</label><input id="wpgCharName" class="form-control wpg-field" type="text" spellcheck="false" placeholder="${escapeHtml(tx(opts.lang, 'char_name_ph'))}"></div>
          <div class="col-md-6"><label class="form-label" for="wpgCharVoice">${escapeHtml(tx(opts.lang, 'char_voice_label'))}</label><input id="wpgCharVoice" class="form-control wpg-field" type="text" spellcheck="false" placeholder="${escapeHtml(tx(opts.lang, 'char_voice_ph'))}"></div>
          <div class="col-12"><label class="form-label" for="wpgCharTraits">${escapeHtml(tx(opts.lang, 'char_traits_label'))}</label><textarea id="wpgCharTraits" class="form-control wpg-field" rows="2" spellcheck="false" placeholder="${escapeHtml(tx(opts.lang, 'char_traits_ph'))}"></textarea></div>
          <div class="col-md-6"><label class="form-label" for="wpgCharGoal">${escapeHtml(tx(opts.lang, 'char_goal_label'))}</label><input id="wpgCharGoal" class="form-control wpg-field" type="text" spellcheck="false" placeholder="${escapeHtml(tx(opts.lang, 'char_goal_ph'))}"></div>
          <div class="col-md-6"><label class="form-label" for="wpgCharFlaw">${escapeHtml(tx(opts.lang, 'char_flaw_label'))}</label><input id="wpgCharFlaw" class="form-control wpg-field" type="text" spellcheck="false" placeholder="${escapeHtml(tx(opts.lang, 'char_flaw_ph'))}"></div>
        </div>
      </div>

      <div id="wpgPanelScript" class="wpg-panel wpg-panel-hidden mb-3">
        <div class="row g-3">
          <div class="col-12"><label class="form-label" for="wpgScrPremise">${escapeHtml(tx(opts.lang, 'scr_premise_label'))}</label><textarea id="wpgScrPremise" class="form-control wpg-field" rows="2" spellcheck="false" placeholder="${escapeHtml(tx(opts.lang, 'scr_premise_ph'))}"></textarea></div>
          <div class="col-md-6"><label class="form-label" for="wpgScrStructure">${escapeHtml(tx(opts.lang, 'scr_structure_label'))}</label><input id="wpgScrStructure" class="form-control wpg-field" type="text" spellcheck="false" placeholder="${escapeHtml(tx(opts.lang, 'scr_structure_ph'))}"></div>
          <div class="col-md-6"><label class="form-label" for="wpgScrNotes">${escapeHtml(tx(opts.lang, 'scr_notes_label'))}</label><input id="wpgScrNotes" class="form-control wpg-field" type="text" spellcheck="false" placeholder="${escapeHtml(tx(opts.lang, 'scr_notes_ph'))}"></div>
        </div>
      </div>

      <div id="wpgPanelRandom" class="wpg-panel wpg-panel-hidden mb-3">
        <p class="small text-muted mb-2">${escapeHtml(tx(opts.lang, 'random_lead'))}</p>
        <div class="row g-3 align-items-end">
          <div class="col-md-4"><label class="form-label" for="wpgRandSeed">${escapeHtml(tx(opts.lang, 'random_seed_label'))}</label><input id="wpgRandSeed" class="form-control" type="number" min="1" step="1" placeholder="${escapeHtml(tx(opts.lang, 'random_seed_ph'))}"></div>
          <div class="col-md-8"><button type="button" id="wpgBtnRoll" class="btn btn-outline-primary btn-sm">${escapeHtml(tx(opts.lang, 'random_roll'))}</button></div>
        </div>
      </div>

      <div class="d-flex align-items-center tools-bar mb-3 flex-wrap gap-2">
        <div class="btn-group btn-group-sm" role="group" aria-label="${escapeHtml(tx(opts.lang, 'fmt_label'))}">
          <input type="radio" class="btn-check" name="wpgFmt" id="wpgFmtMd" value="md" checked>
          <label class="btn btn-outline-secondary" for="wpgFmtMd">${escapeHtml(tx(opts.lang, 'fmt_md'))}</label>
          <input type="radio" class="btn-check" name="wpgFmt" id="wpgFmtJson" value="json">
          <label class="btn btn-outline-secondary" for="wpgFmtJson">${escapeHtml(tx(opts.lang, 'fmt_json'))}</label>
        </div>
        <button type="button" id="wpgBtnBuild" class="btn btn-primary btn-sm">${escapeHtml(tx(opts.lang, 'build'))}</button>
        <button type="button" id="wpgBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx(opts.lang, 'load_sample'))}</button>
        <button type="button" id="wpgBtnCopy" class="btn btn-outline-secondary btn-sm" disabled>${escapeHtml(tx(opts.lang, 'copy'))}</button>
        <button type="button" id="wpgBtnDownload" class="btn btn-outline-secondary btn-sm" disabled>${escapeHtml(tx(opts.lang, 'download'))}</button>
        <button type="button" id="wpgBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx(opts.lang, 'clear'))}</button>
      </div>

      ${renderPromptAiPanelHtml({ prefix: DOM_PREFIX, slug: SLUG, labels: aiLabels })}

      <p id="wpgError" class="alert alert-danger py-2 small mb-2" style="display:none;" role="alert"></p>
      <p id="wpgStatus" class="wpg-meta mb-2" role="status"></p>
      <label class="form-label" for="wpgResult">${escapeHtml(tx(opts.lang, 'result_label'))}</label>
      <pre id="wpgResult" class="wpg-out" aria-live="polite"></pre>
    </div>`;

	/** How / Rules / Example / Use cases。 */
	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: PREFIX,
		mode: 'rules',
		usecaseCount: 4,
		ruleItemCount: 4,
		howItemCount: 4,
	});

	/** 权威引用。 */
	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: 'OpenAI — Prompt engineering guide',
				href: 'https://platform.openai.com/docs/guides/prompt-engineering',
			},
			{
				label: 'NaNoWriMo — Writing prompts resource',
				href: 'https://nanowrimo.org/',
			},
		],
	});

	/** 浏览器内组装写作 Prompt；进页自动 loadSample()。 */
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
      var resultEl = document.getElementById('wpgResult');
      var errEl = document.getElementById('wpgError');
      var statusEl = document.getElementById('wpgStatus');
      var btnBuild = document.getElementById('wpgBtnBuild');
      var btnSample = document.getElementById('wpgBtnSample');
      var btnCopy = document.getElementById('wpgBtnCopy');
      var btnDownload = document.getElementById('wpgBtnDownload');
      var btnClear = document.getElementById('wpgBtnClear');
      var btnRoll = document.getElementById('wpgBtnRoll');
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

      var currentMode = 'dialogue';
      var lastOut = '';
      var lastExt = 'md';

      var PRESETS = ${JSON.stringify(WRITING_PROMPT_PRESETS)};

      var RANDOM = ${JSON.stringify(WRITING_PROMPT_RANDOM)};

      /**
       * 显示或隐藏错误。
       * @param {string} text 错误文案
       */
      function setError(text) {
        errEl.textContent = text || '';
        errEl.style.display = text ? '' : 'none';
      }

      /**
       * 更新状态行。
       * @param {string} text 状态文案
       */
      function setStatus(text) {
        statusEl.textContent = text || '';
      }

      /**
       * 读取输入值并 trim。
       * @param {HTMLElement|null} el 元素
       * @returns {string}
       */
      function val(el) {
        return el && el.value ? String(el.value).trim() : '';
      }

      /**
       * 当前输出格式。
       * @returns {'md'|'json'}
       */
      function currentFmt() {
        var el = document.querySelector('input[name="wpgFmt"]:checked');
        return el && el.value === 'json' ? 'json' : 'md';
      }

      /**
       * 切换可见模式面板。
       * @param {string} mode dialogue|character|script|random
       */
      function showMode(mode) {
        currentMode = mode;
        document.querySelectorAll('.wpg-mode').forEach(function (btn) {
          btn.classList.toggle('active', btn.getAttribute('data-mode') === mode);
        });
        ['dialogue', 'character', 'script', 'random'].forEach(function (m) {
          var panel = document.getElementById('wpgPanel' + m.charAt(0).toUpperCase() + m.slice(1));
          if (panel) panel.classList.toggle('wpg-panel-hidden', m !== mode);
        });
        btnBuild.style.display = mode === 'random' ? 'none' : '';
      }

      /**
       * Mulberry32 可复现随机。
       * @param {number} seed 种子
       * @returns {() => number}
       */
      function mulberry32(seed) {
        return function () {
          seed |= 0;
          seed = (seed + 0x6d2b79f5) | 0;
          var t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
          t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
          return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
        };
      }

      /**
       * 从数组随机取一项。
       * @param {string[]} arr 选项
       * @param {() => number} rnd 随机函数
       */
      function pick(arr, rnd) {
        return arr[Math.floor(rnd() * arr.length)];
      }

      /**
       * 收集当前模式字段。
       * @returns {Record<string, string>}
       */
      function collectFields() {
        if (currentMode === 'dialogue') {
          return {
            genre: val(document.getElementById('wpgDlgGenre')),
            characters: val(document.getElementById('wpgDlgCharacters')),
            setting: val(document.getElementById('wpgDlgSetting')),
            conflict: val(document.getElementById('wpgDlgConflict')),
            tone: val(document.getElementById('wpgDlgTone'))
          };
        }
        if (currentMode === 'character') {
          return {
            name: val(document.getElementById('wpgCharName')),
            traits: val(document.getElementById('wpgCharTraits')),
            goal: val(document.getElementById('wpgCharGoal')),
            flaw: val(document.getElementById('wpgCharFlaw')),
            voice: val(document.getElementById('wpgCharVoice'))
          };
        }
        if (currentMode === 'script') {
          return {
            premise: val(document.getElementById('wpgScrPremise')),
            structure: val(document.getElementById('wpgScrStructure')),
            notes: val(document.getElementById('wpgScrNotes'))
          };
        }
        return {};
      }

      /**
       * 对象是否全空。
       * @param {Record<string, string>} o 字段
       */
      function isEmpty(o) {
        return !Object.keys(o).some(function (k) { return o[k]; });
      }

      /**
       * 组装 Role/Task/Constraints/Output 四段 Markdown。
       * @param {string} mode 模式
       * @param {Record<string, string>} f 字段
       */
      function buildBlocks(mode, f) {
        var role = 'You are a creative writing coach who outputs clear, paste-ready prompts — not finished prose.';
        var task = '';
        var constraints = 'Stay in English unless the user specifies otherwise. Do not write the full story — output only what the prompt asks for.';
        var output = '';

        if (mode === 'dialogue') {
          task = 'Draft a dialogue scene prompt for ' + (f.genre || 'fiction') + '. Characters: ' + (f.characters || '(unspecified)') +
            '. Setting: ' + (f.setting || '(unspecified)') + '. Central conflict: ' + (f.conflict || '(unspecified)') + '.';
          if (f.tone) constraints += ' Tone: ' + f.tone + '.';
          output = 'A single scene outline with 6–10 lines of sample dialogue and a one-sentence beat summary.';
        } else if (mode === 'character') {
          task = 'Build a character study prompt for ' + (f.name || 'an unnamed character') + '. Traits: ' + (f.traits || '(unspecified)') +
            '. Goal: ' + (f.goal || '(unspecified)') + '. Flaw: ' + (f.flaw || '(unspecified)') + '.';
          if (f.voice) constraints += ' Voice notes: ' + f.voice + '.';
          output = 'Character sheet bullets + a 150-word internal monologue sample in that voice.';
        } else if (mode === 'script') {
          task = 'Outline a script/story prompt. Premise: ' + (f.premise || '(unspecified)') + '. Structure: ' + (f.structure || '(unspecified)') + '.';
          if (f.notes) constraints += ' ' + f.notes;
          output = 'Beat sheet with scene headings and one-line purpose per beat.';
        } else {
          task = 'Random writing prompt (rolled on this page).';
          output = 'Opening paragraph hook + three bullet directions the writer could take.';
        }

        return { role: role, task: task, constraints: constraints, output: output };
      }

      /**
       * 格式化为 Markdown。
       * @param {{role:string,task:string,constraints:string,output:string}} b 四段
       */
      function toMarkdown(b) {
        return ['## ' + msg.secRole, b.role, '', '## ' + msg.secTask, b.task, '', '## ' + msg.secConstraints, b.constraints, '', '## ' + msg.secOutput, b.output].join('\\n');
      }

      /**
       * 格式化为 JSON。
       * @param {string} mode 模式
       * @param {Record<string, string>} f 字段
       * @param {{role:string,task:string,constraints:string,output:string}} b 四段
       */
      function toJson(mode, f, b) {
        return JSON.stringify({ mode: mode, fields: f, role: b.role, task: b.task, constraints: b.constraints, output: b.output }, null, 2);
      }

      /**
       * 写入结果区并启用复制/下载。
       * @param {string} text 输出
       * @param {string} ext 扩展名
       */
      function showResult(text, ext) {
        lastOut = text;
        lastExt = ext;
        resultEl.textContent = text;
        btnCopy.disabled = !text;
        btnDownload.disabled = !text;
        setStatus(msg.done);
      }

      /**
       * 构建当前模式 Prompt。
       */
      function buildPrompt() {
        setError('');
        setStatus(msg.working);
        var f = collectFields();
        if (isEmpty(f)) {
          setError(msg.empty);
          setStatus('');
          return;
        }
        var b = buildBlocks(currentMode, f);
        var fmt = currentFmt();
        showResult(fmt === 'json' ? toJson(currentMode, f, b) : toMarkdown(b), fmt === 'json' ? 'json' : 'md');
      }

      /**
       * 随机模式：掷种子并构建 Prompt。
       */
      function rollRandom() {
        setError('');
        setStatus(msg.working);
        var seedRaw = val(document.getElementById('wpgRandSeed'));
        var rnd = seedRaw ? mulberry32(parseInt(seedRaw, 10) || 1) : Math.random;
        var f = {
          genre: pick(RANDOM.genres, rnd),
          setting: pick(RANDOM.settings, rnd),
          object: pick(RANDOM.objects, rnd),
          emotion: pick(RANDOM.emotions, rnd),
          conflict: pick(RANDOM.conflicts, rnd)
        };
        var task = 'Write a ' + f.genre + ' story starter. Setting: ' + f.setting + '. Emotion: ' + f.emotion +
          '. Include this object: ' + f.object + '. Conflict: ' + f.conflict + '.';
        var b = {
          role: 'You are a creative writing coach who outputs paste-ready story prompts.',
          task: task,
          constraints: 'Do not write the full story. Random rolls are inspiration only — quality is not guaranteed.',
          output: 'One paragraph hook + three bullet plot directions.'
        };
        if (seedRaw) b.constraints += ' Seed: ' + seedRaw + ' (reproducible roll).';
        var fmt = currentFmt();
        showResult(fmt === 'json' ? toJson('random', f, b) : toMarkdown(b), fmt === 'json' ? 'json' : 'md');
      }

      /**
       * 应用预设并构建。
       * @param {keyof typeof PRESETS} modeKey 模式
       */
      function applyPreset(modeKey) {
        showMode(modeKey);
        var p = PRESETS[modeKey];
        if (modeKey === 'dialogue') {
          document.getElementById('wpgDlgGenre').value = p.genre;
          document.getElementById('wpgDlgCharacters').value = p.characters;
          document.getElementById('wpgDlgSetting').value = p.setting;
          document.getElementById('wpgDlgConflict').value = p.conflict;
          document.getElementById('wpgDlgTone').value = p.tone;
        } else if (modeKey === 'character') {
          document.getElementById('wpgCharName').value = p.name;
          document.getElementById('wpgCharTraits').value = p.traits;
          document.getElementById('wpgCharGoal').value = p.goal;
          document.getElementById('wpgCharFlaw').value = p.flaw;
          document.getElementById('wpgCharVoice').value = p.voice;
        } else if (modeKey === 'script') {
          document.getElementById('wpgScrPremise').value = p.premise;
          document.getElementById('wpgScrStructure').value = p.structure;
          document.getElementById('wpgScrNotes').value = p.notes;
        }
        buildPrompt();
      }

      /**
       * 进页样例：对白预设并构建 Markdown。
       * 函数名必须是 loadSample，以满足 lint:tool-page --require-html。
       */
      function loadSample() {
        applyPreset('dialogue');
      }

      /** 清空表单与输出。 */
      function reset() {
        document.querySelectorAll('.wpg-panel input, .wpg-panel textarea').forEach(function (el) {
          el.value = '';
        });
        resultEl.textContent = '';
        lastOut = '';
        btnCopy.disabled = true;
        btnDownload.disabled = true;
        setError('');
        setStatus('');
      }

      document.querySelectorAll('.wpg-mode').forEach(function (btn) {
        btn.addEventListener('click', function () {
          showMode(btn.getAttribute('data-mode') || 'dialogue');
        });
      });

      btnBuild.addEventListener('click', buildPrompt);
      btnSample.addEventListener('click', loadSample);
      btnClear.addEventListener('click', reset);
      if (btnRoll) btnRoll.addEventListener('click', rollRandom);

      document.querySelectorAll('input[name="wpgFmt"]').forEach(function (el) {
        el.addEventListener('change', function () {
          if (lastOut) buildPrompt();
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
        a.download = 'writing-prompt.' + lastExt;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      });

      window.promptAiAssembleInput = function (action) {
        if (action === 'polish' && lastOut) return lastOut;
        if (currentMode === 'random') return lastOut || '';
        var f = collectFields();
        if (isEmpty(f)) return '';
        var b = buildBlocks(currentMode, f);
        return currentFmt() === 'json' ? toJson(currentMode, f, b) : toMarkdown(b);
      };

      window.promptAiApplyText = function (action, text) {
        if (action === 'polish') {
          showResult(text, currentFmt() === 'json' ? 'json' : 'md');
          return;
        }
        var firstLine = (text || '').split('\\n')[0] || '';
        if (currentMode === 'dialogue') {
          var g = document.getElementById('wpgDlgGenre');
          if (g && firstLine) g.value = firstLine.slice(0, 500);
        }
        buildPrompt();
      };

` + promptAiScript + `

      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadSample);
      } else {
        loadSample();
      }
    })();
  </script>
` + PROMPT_AI_TURNSTILE_SCRIPT;

	/** catalog 元数据。 */
	const toolMeta = getToolBySlug(SLUG);
	/** FAQ / related。 */
	const toolSeoHtml = toolMeta
		? renderToolExtraSections({ lang: opts.lang, defaultLang: opts.defaultLang, tool: toolMeta })
		: '';
	/** JSON-LD。 */
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
