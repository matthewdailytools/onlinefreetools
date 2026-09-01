/**
 * Prompt 模板构建器工具页：自由文本与 Role/Task/Constraints/Output 字段 → Markdown/JSON 模板。
 * slug: prompt-template-builder；见 work-tasks/prompt-template-builder/02-tool-info.md。
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

/** 本工具 i18n 键前缀，与 catalog faqPrefix 一致。 */
const PREFIX = 'tool_prompt_template_builder';

/** Turnstile 公开 sitekey（与 domain-lookup 相同 widget；secret 仅 Worker） */
const TURNSTILE_SITEKEY = '0x4AAAAAAEKPkweeKKHYjYJX';

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
 * 渲染 Prompt 模板构建器工具页。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderPromptTemplateBuilderPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 工具规范路径（无语言前缀）。 */
	const toolPath = '/tools/prompt-template-builder';
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
			currentSlug: 'prompt-template-builder',
			currentAnchor: '#builder',
		}),
		id: 'toolNav',
	});

	/** 页脚 HTML。 */
	const footerHtml = renderFooter({ lang: opts.lang });

	/** 本页局部样式：字段与等宽输出。 */
	const extraHeadHtml = `
  <style>
    .ptb-field { font-size: .875rem; }
    .ptb-free { min-height: 120px; font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: .875rem; }
    .ptb-out { white-space: pre-wrap; word-break: break-word; background: #fff; border: 1px solid #dee2e6; border-radius: .5rem; padding: 1rem; overflow: auto; min-height: 220px; font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: .875rem; }
    .ptb-meta { font-size: .85rem; color: #6c757d; }
    .ptb-platforms { font-size: .9rem; color: #495057; margin-bottom: .75rem; }
    .ptb-scene-label { font-size: .875rem; font-weight: 600; margin-bottom: .35rem; }
    .ptb-scene-group .btn { font-size: .8125rem; }
  </style>`;

	/** 首屏交互区：平台说明、场景芯片、自由文本、四字段、MD/JSON 芯片与操作按钮。 */
	const contentHtml = `
    <div id="builder" class="tool-hero">
      <h1 class="tool-title">${escapeHtml(tx(opts.lang, 'title'))}</h1>
      <p class="tool-lead">${escapeHtml(description)}</p>
      <p class="ptb-platforms">${escapeHtml(tx(opts.lang, 'platforms_lead'))}</p>
    </div>

    <div class="tool-panel">
      <p class="ptb-scene-label" id="ptbSceneLabel">${escapeHtml(tx(opts.lang, 'scene_label'))}</p>
      <div class="btn-group btn-group-sm flex-wrap ptb-scene-group mb-3" role="group" aria-labelledby="ptbSceneLabel">
        <button type="button" class="btn btn-outline-secondary ptb-scene" data-scene="code">${escapeHtml(tx(opts.lang, 'scene_code'))}</button>
        <button type="button" class="btn btn-outline-secondary ptb-scene" data-scene="movie">${escapeHtml(tx(opts.lang, 'scene_movie'))}</button>
        <button type="button" class="btn btn-outline-secondary ptb-scene" data-scene="shortDrama">${escapeHtml(tx(opts.lang, 'scene_short_drama'))}</button>
        <button type="button" class="btn btn-outline-secondary ptb-scene" data-scene="android">${escapeHtml(tx(opts.lang, 'scene_android'))}</button>
        <button type="button" class="btn btn-outline-secondary ptb-scene" data-scene="ios">${escapeHtml(tx(opts.lang, 'scene_ios'))}</button>
      </div>
      <label class="form-label" for="ptbFree">${escapeHtml(tx(opts.lang, 'free_label'))}</label>
      <textarea id="ptbFree" class="form-control ptb-free mb-3" rows="5" spellcheck="false" placeholder="${escapeHtml(tx(opts.lang, 'free_ph'))}"></textarea>

      <div class="row g-3 mb-3">
        <div class="col-md-6">
          <label class="form-label" for="ptbRole">${escapeHtml(tx(opts.lang, 'role_label'))}</label>
          <textarea id="ptbRole" class="form-control ptb-field" rows="2" spellcheck="false" placeholder="${escapeHtml(tx(opts.lang, 'role_ph'))}"></textarea>
        </div>
        <div class="col-md-6">
          <label class="form-label" for="ptbTask">${escapeHtml(tx(opts.lang, 'task_label'))}</label>
          <textarea id="ptbTask" class="form-control ptb-field" rows="2" spellcheck="false" placeholder="${escapeHtml(tx(opts.lang, 'task_ph'))}"></textarea>
        </div>
        <div class="col-md-6">
          <label class="form-label" for="ptbConstraints">${escapeHtml(tx(opts.lang, 'constraints_label'))}</label>
          <textarea id="ptbConstraints" class="form-control ptb-field" rows="2" spellcheck="false" placeholder="${escapeHtml(tx(opts.lang, 'constraints_ph'))}"></textarea>
        </div>
        <div class="col-md-6">
          <label class="form-label" for="ptbOutput">${escapeHtml(tx(opts.lang, 'output_fmt_label'))}</label>
          <textarea id="ptbOutput" class="form-control ptb-field" rows="2" spellcheck="false" placeholder="${escapeHtml(tx(opts.lang, 'output_fmt_ph'))}"></textarea>
        </div>
      </div>

      <div class="d-flex align-items-center tools-bar mb-3 flex-wrap gap-2">
        <div class="btn-group btn-group-sm" role="group" aria-label="${escapeHtml(tx(opts.lang, 'fmt_label'))}">
          <input type="radio" class="btn-check" name="ptbFmt" id="ptbFmtMd" value="md" checked>
          <label class="btn btn-outline-secondary" for="ptbFmtMd">${escapeHtml(tx(opts.lang, 'fmt_md'))}</label>
          <input type="radio" class="btn-check" name="ptbFmt" id="ptbFmtJson" value="json">
          <label class="btn btn-outline-secondary" for="ptbFmtJson">${escapeHtml(tx(opts.lang, 'fmt_json'))}</label>
        </div>
        <button type="button" id="ptbBtnBuild" class="btn btn-primary btn-sm">${escapeHtml(tx(opts.lang, 'build'))}</button>
        <button type="button" id="ptbBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx(opts.lang, 'load_sample'))}</button>
        <button type="button" id="ptbBtnCopy" class="btn btn-outline-secondary btn-sm" disabled>${escapeHtml(tx(opts.lang, 'copy'))}</button>
        <button type="button" id="ptbBtnDownload" class="btn btn-outline-secondary btn-sm" disabled>${escapeHtml(tx(opts.lang, 'download'))}</button>
        <button type="button" id="ptbBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx(opts.lang, 'clear'))}</button>
      </div>

      <div class="border rounded p-3 mb-3 bg-light-subtle" id="ptbAiPanel">
        <p class="small fw-semibold mb-2">${escapeHtml(tx(opts.lang, 'ai_panel_label'))}</p>
        <div class="d-flex flex-wrap gap-2 mb-2">
          <button type="button" id="ptbBtnAiExpand" class="btn btn-outline-primary btn-sm">${escapeHtml(tx(opts.lang, 'ai_expand'))}</button>
          <button type="button" id="ptbBtnAiPolish" class="btn btn-outline-primary btn-sm">${escapeHtml(tx(opts.lang, 'ai_polish'))}</button>
        </div>
        <div id="ptbTurnstileWrap">
          <div class="cf-turnstile" data-sitekey="${TURNSTILE_SITEKEY}" data-action="prompt-template-builder-ai" data-callback="__ptbTurnstileOk" data-expired-callback="__ptbTurnstileClear" data-error-callback="__ptbTurnstileClear"></div>
        </div>
      </div>

      <div class="modal fade" id="ptbAiConsentModal" tabindex="-1" aria-labelledby="ptbAiConsentTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h2 class="modal-title h6" id="ptbAiConsentTitle">${escapeHtml(tx(opts.lang, 'ai_consent_title'))}</h2>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body"><p class="mb-0 small">${escapeHtml(tx(opts.lang, 'ai_consent_body'))}</p></div>
            <div class="modal-footer">
              <button type="button" class="btn btn-outline-secondary btn-sm" data-bs-dismiss="modal">${escapeHtml(tx(opts.lang, 'ai_consent_cancel'))}</button>
              <button type="button" class="btn btn-primary btn-sm" id="ptbAiConsentConfirm">${escapeHtml(tx(opts.lang, 'ai_consent_ok'))}</button>
            </div>
          </div>
        </div>
      </div>

      <p id="ptbError" class="alert alert-danger py-2 small mb-2" style="display:none;" role="alert"></p>
      <p id="ptbStatus" class="ptb-meta mb-2" role="status"></p>
      <label class="form-label" for="ptbResult">${escapeHtml(tx(opts.lang, 'result_label'))}</label>
      <pre id="ptbResult" class="ptb-out" aria-live="polite"></pre>
    </div>`;

	/** How / Rules / Example / Use cases。 */
	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: PREFIX,
		mode: 'rules',
		usecaseCount: 6,
		ruleItemCount: 4,
		howItemCount: 4,
	});

	/** 权威引用：OpenAI / Anthropic prompting。 */
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

	/** 浏览器内构建模板；进页自动 loadSample()。 */
	const extraBodyHtml = `
  <script>
    (function () {
      /** 自由文本区。 */
      var freeEl = document.getElementById('ptbFree');
      /** Role 字段。 */
      var roleEl = document.getElementById('ptbRole');
      /** Task 字段。 */
      var taskEl = document.getElementById('ptbTask');
      /** Constraints 字段。 */
      var constraintsEl = document.getElementById('ptbConstraints');
      /** Output format 字段。 */
      var outputEl = document.getElementById('ptbOutput');
      /** 结果区。 */
      var resultEl = document.getElementById('ptbResult');
      /** 构建按钮。 */
      var btnBuild = document.getElementById('ptbBtnBuild');
      /** 样例按钮。 */
      var btnSample = document.getElementById('ptbBtnSample');
      /** 复制按钮。 */
      var btnCopy = document.getElementById('ptbBtnCopy');
      /** 下载按钮。 */
      var btnDownload = document.getElementById('ptbBtnDownload');
      /** 清空按钮。 */
      var btnClear = document.getElementById('ptbBtnClear');
      /** 错误条。 */
      var errEl = document.getElementById('ptbError');
      /** 状态条。 */
      var statusEl = document.getElementById('ptbStatus');

      /** 界面文案。 */
      var msg = {
        empty: ${JSON.stringify(tx(opts.lang, 'empty'))},
        working: ${JSON.stringify(tx(opts.lang, 'status_working'))},
        done: ${JSON.stringify(tx(opts.lang, 'status_done'))},
        copied: ${JSON.stringify(tx(opts.lang, 'status_copied'))},
        secRole: ${JSON.stringify(tx(opts.lang, 'sec_role'))},
        secTask: ${JSON.stringify(tx(opts.lang, 'sec_task'))},
        secConstraints: ${JSON.stringify(tx(opts.lang, 'sec_constraints'))},
        secOutput: ${JSON.stringify(tx(opts.lang, 'sec_output'))},
        aiWorking: ${JSON.stringify(tx(opts.lang, 'ai_working'))},
        aiDone: ${JSON.stringify(tx(opts.lang, 'ai_done'))},
        aiErrGeneric: ${JSON.stringify(tx(opts.lang, 'ai_err_generic'))},
        aiErrRate: ${JSON.stringify(tx(opts.lang, 'ai_err_rate'))},
        aiErrTurnstile: ${JSON.stringify(tx(opts.lang, 'ai_err_turnstile'))}
      };

      /** Turnstile token（单次 AI 请求）。 */
      var turnstileToken = '';
      /** 待执行的 AI action（consent 后）。 */
      var pendingAiAction = '';
      var btnAiExpand = document.getElementById('ptbBtnAiExpand');
      var btnAiPolish = document.getElementById('ptbBtnAiPolish');
      var aiPanel = document.getElementById('ptbAiPanel');
      var consentModalEl = document.getElementById('ptbAiConsentModal');
      var consentConfirm = document.getElementById('ptbAiConsentConfirm');
      var consentStorageKey = 'oft-ptb-ai-consent-v1';

      /** Turnstile 回调（全局，供 widget 调用）。 */
      window.__ptbTurnstileOk = function (token) { turnstileToken = token || ''; };
      window.__ptbTurnstileClear = function () { turnstileToken = ''; };

      /**
       * 读取 Turnstile hidden input。
       * @returns {string}
       */
      function readTurnstileToken() {
        if (turnstileToken) return turnstileToken;
        var el = document.querySelector('#ptbTurnstileWrap [name="cf-turnstile-response"]');
        return el && el.value ? String(el.value).trim() : '';
      }

      /**
       * 重置 Turnstile widget。
       */
      function resetTurnstileWidget() {
        turnstileToken = '';
        if (window.turnstile && typeof window.turnstile.reset === 'function') {
          try { window.turnstile.reset(); } catch (e) { /* ignore */ }
        }
      }

      /**
       * 组装发往 AI 的输入文本。
       * @param {'expand'|'polish'} action
       * @returns {string}
       */
      function assembleInputForAi(action) {
        if (action === 'polish' && lastOut) return lastOut;
        var parts = collectParts();
        var chunks = [];
        if (parts.role) chunks.push('Role: ' + parts.role);
        if (parts.task) chunks.push('Task: ' + parts.task);
        if (parts.constraints) chunks.push('Constraints: ' + parts.constraints);
        if (parts.output) chunks.push('Output: ' + parts.output);
        if (val(freeEl)) chunks.push(val(freeEl));
        return chunks.join('\\n\\n').trim();
      }

      /**
       * 将 AI 返回文本写回表单。
       * @param {'expand'|'polish'} action
       * @param {string} text
       */
      function applyAiText(action, text) {
        if (action === 'expand') {
          var parsed = parseFreeText(text);
          if (parsed.role) roleEl.value = parsed.role;
          if (parsed.task) taskEl.value = parsed.task;
          if (parsed.constraints) constraintsEl.value = parsed.constraints;
          if (parsed.output) outputEl.value = parsed.output;
          if (!parsed.role && !parsed.task) freeEl.value = text;
        } else {
          freeEl.value = text;
        }
        buildTemplate();
      }

      /**
       * POST Cloudflare Workers AI。
       * @param {'expand'|'polish'} action
       */
      function runAiAction(action) {
        setError('');
        var input = assembleInputForAi(action);
        if (!input) {
          setError(msg.empty);
          return;
        }
        var token = readTurnstileToken();
        if (!token) {
          setError(msg.aiErrTurnstile);
          return;
        }
        setStatus(msg.aiWorking);
        if (btnAiExpand) btnAiExpand.disabled = true;
        if (btnAiPolish) btnAiPolish.disabled = true;
        fetch('/api/tools/prompt-template-builder/ai', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ action: action, input: input, turnstile: token })
        }).then(function (res) {
          return res.json().then(function (data) {
            return { status: res.status, data: data };
          });
        }).then(function (pack) {
          var data = pack.data || {};
          if (!data.ok) {
            var code = data.code || '';
            if (code.indexOf('rate') >= 0 || code === 'neurons_exhausted') setError(msg.aiErrRate);
            else if (code === 'turnstile') setError(msg.aiErrTurnstile);
            else setError(msg.aiErrGeneric);
            setStatus('');
            return;
          }
          applyAiText(action, String(data.text || ''));
          setStatus(msg.aiDone);
        }).catch(function () {
          setError(msg.aiErrGeneric);
          setStatus('');
        }).finally(function () {
          if (btnAiExpand) btnAiExpand.disabled = false;
          if (btnAiPolish) btnAiPolish.disabled = false;
          resetTurnstileWidget();
        });
      }

      /**
       * 首次使用前 consent；之后直接跑 AI。
       * @param {'expand'|'polish'} action
       */
      function ensureConsentThenRun(action) {
        pendingAiAction = action;
        try {
          if (localStorage.getItem(consentStorageKey) === '1') {
            runAiAction(action);
            return;
          }
        } catch (e) { /* ignore */ }
        if (consentModalEl && window.bootstrap && window.bootstrap.Modal) {
          var modal = window.bootstrap.Modal.getOrCreateInstance(consentModalEl);
          modal.show();
        } else if (window.confirm(${JSON.stringify(tx(opts.lang, 'ai_consent_body'))})) {
          try { localStorage.setItem(consentStorageKey, '1'); } catch (e2) { /* ignore */ }
          runAiAction(action);
        }
      }

      if (consentConfirm) {
        consentConfirm.addEventListener('click', function () {
          try { localStorage.setItem(consentStorageKey, '1'); } catch (e) { /* ignore */ }
          if (consentModalEl && window.bootstrap && window.bootstrap.Modal) {
            window.bootstrap.Modal.getOrCreateInstance(consentModalEl).hide();
          }
          if (pendingAiAction) runAiAction(pendingAiAction);
        });
      }

      if (btnAiExpand) btnAiExpand.addEventListener('click', function () { ensureConsentThenRun('expand'); });
      if (btnAiPolish) btnAiPolish.addEventListener('click', function () { ensureConsentThenRun('polish'); });

      fetch('/api/tools/prompt-template-builder/ai/health').then(function (r) { return r.json(); }).then(function (d) {
        if (d && d.enabled === false && aiPanel) aiPanel.style.display = 'none';
      }).catch(function () { /* keep panel */ });

      /** 场景预设：代码审查 / 电影 / 短剧 / Android / iOS。 */
      var PRESETS = {
        code: {
          free: '',
          role: 'You are a senior code reviewer focused on security and readability.',
          task: 'Review the pull request diff. List blocking issues first, then suggestions. Reference file and line when possible.',
          constraints: 'Stay factual. Do not rewrite the whole patch. Max 12 bullet points.',
          output: 'Markdown with sections: Blocking, Suggestions, Questions.'
        },
        movie: {
          free: '',
          role: 'You are a feature-film screenwriting consultant.',
          task: 'From the logline in my next message, draft a three-act beat sheet with scene headings, turning points, and character goals.',
          constraints: 'Show do not tell. One protagonist arc. Keep under 900 words unless I ask for more.',
          output: 'Markdown: Logline recap, Act I/II/III beats, optional dialogue seed for the midpoint.'
        },
        shortDrama: {
          free: '',
          role: 'You are a vertical short-drama (1–3 minute episodes) story editor.',
          task: 'Turn my premise into a serial outline: episode hooks, cliffhangers, and payoffs for binge-style mobile viewing.',
          constraints: 'Fast dialogue. 8–12 episodes by default. Each episode ends on a visual or emotional hook.',
          output: 'Markdown table: Episode #, Hook, Core conflict, Cliffhanger.'
        },
        android: {
          free: '',
          role: 'You are a senior Android engineer (Kotlin, Jetpack Compose, Material 3).',
          task: 'Implement the feature I describe in the next message with production-minded structure and tests in mind.',
          constraints: 'MVVM or MVI. No deprecated APIs. Call out Gradle/module boundaries when relevant.',
          output: 'Kotlin snippets + brief package layout + one unit-test sketch.'
        },
        ios: {
          free: '',
          role: 'You are a senior iOS engineer (Swift, SwiftUI, iOS 17+).',
          task: 'Implement the feature I describe in the next message following Apple HIG and modern concurrency.',
          constraints: 'Prefer async/await. Mention target + test targets. No force-unwrap in sample code.',
          output: 'Swift snippets + file layout + PreviewProvider or test stub.'
        }
      };

      /** 最近一次输出文本。 */
      var lastOut = '';
      /** 最近一次输出扩展名。 */
      var lastExt = 'md';

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
       * 读取字段值并 trim。
       * @param {HTMLTextAreaElement|null} el 输入框
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
        var el = document.querySelector('input[name="ptbFmt"]:checked');
        return el && el.value === 'json' ? 'json' : 'md';
      }

      /**
       * 从自由文本轻量解析 Role/Task/Constraints/Output 分段。
       * 识别行首 Role:/Task:/Constraints:/Output:（大小写不敏感）。
       * @param {string} text 自由文本
       * @returns {{role:string,task:string,constraints:string,output:string}}
       */
      function parseFreeText(text) {
        var lines = String(text || '').split(/\\r?\\n/);
        /** @type {{role:string,task:string,constraints:string,output:string}} */
        var out = { role: '', task: '', constraints: '', output: '' };
        var current = '';
        /** @type {string[]} */
        var buf = [];

        /**
         * 刷当前缓冲到对应键。
         */
        function flush() {
          if (!current) return;
          var joined = buf.join('\\n').trim();
          if (current === 'role') out.role = joined;
          else if (current === 'task') out.task = joined;
          else if (current === 'constraints') out.constraints = joined;
          else if (current === 'output') out.output = joined;
          buf = [];
        }

        var headerRe = /^\\s*(role|task|constraints|constraint|output(?:\\s+format)?)\\s*[:：]\\s*(.*)$/i;
        lines.forEach(function (line) {
          var m = line.match(headerRe);
          if (m) {
            flush();
            var key = m[1].toLowerCase();
            if (key.indexOf('constraint') === 0) current = 'constraints';
            else if (key.indexOf('output') === 0) current = 'output';
            else current = key;
            var rest = m[2] ? m[2].trim() : '';
            if (rest) buf.push(rest);
          } else if (current) {
            buf.push(line);
          } else if (line.trim()) {
            if (!out.task) out.task = line.trim();
            else out.task += '\\n' + line;
          }
        });
        flush();
        return out;
      }

      /**
       * 合并显式字段与自由文本解析结果；字段非空优先。
       * @returns {{role:string,task:string,constraints:string,output:string}}
       */
      function collectParts() {
        var parsed = parseFreeText(val(freeEl));
        return {
          role: val(roleEl) || parsed.role,
          task: val(taskEl) || parsed.task,
          constraints: val(constraintsEl) || parsed.constraints,
          output: val(outputEl) || parsed.output
        };
      }

      /**
       * 判断四段是否全空。
       * @param {{role:string,task:string,constraints:string,output:string}} parts 分段
       * @returns {boolean}
       */
      function isEmpty(parts) {
        return !parts.role && !parts.task && !parts.constraints && !parts.output;
      }

      /**
       * 结构化块 → Markdown 模板。
       * @param {{role:string,task:string,constraints:string,output:string}} parts 分段
       * @returns {string}
       */
      function toMarkdown(parts) {
        var lines = [];
        if (parts.role) lines.push('## ' + msg.secRole, '', parts.role, '');
        if (parts.task) lines.push('## ' + msg.secTask, '', parts.task, '');
        if (parts.constraints) lines.push('## ' + msg.secConstraints, '', parts.constraints, '');
        if (parts.output) lines.push('## ' + msg.secOutput, '', parts.output, '');
        return lines.join('\\n').trim() + '\\n';
      }

      /**
       * 结构化块 → JSON 对象字符串。
       * @param {{role:string,task:string,constraints:string,output:string}} parts 分段
       * @returns {string}
       */
      function toJson(parts) {
        return JSON.stringify({
          role: parts.role || '',
          task: parts.task || '',
          constraints: parts.constraints || '',
          output: parts.output || ''
        }, null, 2) + '\\n';
      }

      /**
       * 执行构建并写入结果区。
       */
      function buildTemplate() {
        setError('');
        setStatus(msg.working);
        var parts = collectParts();
        if (isEmpty(parts)) {
          setError(msg.empty);
          setStatus('');
          resultEl.textContent = '';
          btnCopy.disabled = true;
          btnDownload.disabled = true;
          lastOut = '';
          return;
        }
        var fmt = currentFmt();
        var out = fmt === 'json' ? toJson(parts) : toMarkdown(parts);
        lastOut = out;
        lastExt = fmt === 'json' ? 'json' : 'md';
        resultEl.textContent = out;
        btnCopy.disabled = false;
        btnDownload.disabled = false;
        setStatus(msg.done);
      }

      /** 内置样例：代码审查 Agent（与 PRESETS.code 一致）。 */
      var SAMPLE = PRESETS.code;

      /**
       * 写入某一场景预设并构建 Markdown。
       * @param {keyof typeof PRESETS} sceneKey 场景键
       */
      function applyPreset(sceneKey) {
        var preset = PRESETS[sceneKey] || PRESETS.code;
        freeEl.value = preset.free;
        roleEl.value = preset.role;
        taskEl.value = preset.task;
        constraintsEl.value = preset.constraints;
        outputEl.value = preset.output;
        var mdRadio = document.getElementById('ptbFmtMd');
        if (mdRadio) mdRadio.checked = true;
        buildTemplate();
      }

      /**
       * 进页样例：写入 code 预设并构建 Markdown。
       * 函数名必须是 loadSample，以满足 lint:tool-page --require-html。
       */
      function loadSample() {
        applyPreset('code');
      }

      /** 清空所有输入与输出。 */
      function reset() {
        freeEl.value = '';
        roleEl.value = '';
        taskEl.value = '';
        constraintsEl.value = '';
        outputEl.value = '';
        resultEl.textContent = '';
        lastOut = '';
        btnCopy.disabled = true;
        btnDownload.disabled = true;
        setError('');
        setStatus('');
      }

      btnBuild.addEventListener('click', buildTemplate);
      btnSample.addEventListener('click', loadSample);
      btnClear.addEventListener('click', reset);
      document.querySelectorAll('.ptb-scene').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var key = btn.getAttribute('data-scene') || 'code';
          applyPreset(key);
        });
      });
      document.querySelectorAll('input[name="ptbFmt"]').forEach(function (el) {
        el.addEventListener('change', function () {
          if (lastOut || !isEmpty(collectParts())) buildTemplate();
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
        a.download = 'prompt-template.' + lastExt;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      });

      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadSample);
      } else {
        loadSample();
      }
    })();
  </script>
  <script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>`;

	/** catalog 元数据。 */
	const toolMeta = getToolBySlug('prompt-template-builder');
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
