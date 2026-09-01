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
  </style>`;

	/** 首屏交互区：自由文本、四字段、MD/JSON 芯片与操作按钮。 */
	const contentHtml = `
    <div id="builder" class="tool-hero">
      <h1 class="tool-title">${escapeHtml(tx(opts.lang, 'title'))}</h1>
      <p class="tool-lead">${escapeHtml(description)}</p>
    </div>

    <div class="tool-panel">
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
		usecaseCount: 3,
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
        secOutput: ${JSON.stringify(tx(opts.lang, 'sec_output'))}
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

      /** 内置样例：代码审查 Agent。 */
      var SAMPLE = {
        free: '',
        role: 'You are a senior code reviewer focused on security and readability.',
        task: 'Review the pull request diff. List blocking issues first, then suggestions. Reference file and line when possible.',
        constraints: 'Stay factual. Do not rewrite the whole patch. Max 12 bullet points.',
        output: 'Markdown with sections: Blocking, Suggestions, Questions.'
      };

      /**
       * 进页样例：写入 SAMPLE 并构建 Markdown。
       * 函数名必须是 loadSample，以满足 lint:tool-page --require-html。
       */
      function loadSample() {
        freeEl.value = SAMPLE.free;
        roleEl.value = SAMPLE.role;
        taskEl.value = SAMPLE.task;
        constraintsEl.value = SAMPLE.constraints;
        outputEl.value = SAMPLE.output;
        var mdRadio = document.getElementById('ptbFmtMd');
        if (mdRadio) mdRadio.checked = true;
        buildTemplate();
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
  </script>`;

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
