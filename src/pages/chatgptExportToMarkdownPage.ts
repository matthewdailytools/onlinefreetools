/**
 * ChatGPT 导出转 Markdown 工具页：解析 conversations/mapping 或扁平消息 → MD/JSON/CSV。
 * slug: chatgpt-export-to-markdown；见 work-tasks/chatgpt-export-to-markdown/02-tool-info.md。
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
const PREFIX = 'tool_chatgpt_export_to_markdown';

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
 * 渲染 ChatGPT 导出转 Markdown 工具页。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderChatgptExportToMarkdownPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 工具规范路径（无语言前缀）。 */
	const toolPath = '/tools/chatgpt-export-to-markdown';
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
			currentSlug: 'chatgpt-export-to-markdown',
			currentAnchor: '#converter',
		}),
		id: 'toolNav',
	});

	/** 页脚 HTML。 */
	const footerHtml = renderFooter({ lang: opts.lang });

	/** 本页局部样式：等宽输入输出。 */
	const extraHeadHtml = `
  <style>
    .cem-io { min-height: 280px; font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: .875rem; }
    .cem-out { white-space: pre-wrap; word-break: break-word; background: #fff; border: 1px solid #dee2e6; border-radius: .5rem; padding: 1rem; overflow: auto; min-height: 280px; }
    .cem-meta { font-size: .85rem; color: #6c757d; }
  </style>`;

	/** 首屏交互区：文件/粘贴、MD/JSON/CSV、转换与下载。 */
	const contentHtml = `
    <div id="converter" class="tool-hero">
      <h1 class="tool-title">${escapeHtml(tx(opts.lang, 'title'))}</h1>
      <p class="tool-lead">${escapeHtml(description)}</p>
    </div>

    <div class="tool-panel">
      <label class="tool-dropzone mb-3" id="cemDrop" for="cemFile">
        <input type="file" id="cemFile" accept=".json,application/json,text/plain">
        <span class="tool-dropzone-title">${escapeHtml(tx(opts.lang, 'choose_file'))}</span>
        <span class="tool-dropzone-hint">${escapeHtml(tx(opts.lang, 'drop_hint'))}</span>
      </label>

      <label class="form-label" for="cemInput">${escapeHtml(tx(opts.lang, 'input_label'))}</label>
      <textarea id="cemInput" class="form-control cem-io mb-3" rows="10" spellcheck="false" placeholder="${escapeHtml(tx(opts.lang, 'input_ph'))}"></textarea>

      <div class="d-flex align-items-center tools-bar mb-3 flex-wrap gap-2">
        <div class="btn-group btn-group-sm" role="group" aria-label="${escapeHtml(tx(opts.lang, 'fmt_label'))}">
          <input type="radio" class="btn-check" name="cemFmt" id="cemFmtMd" value="md" checked>
          <label class="btn btn-outline-secondary" for="cemFmtMd">${escapeHtml(tx(opts.lang, 'fmt_md'))}</label>
          <input type="radio" class="btn-check" name="cemFmt" id="cemFmtJson" value="json">
          <label class="btn btn-outline-secondary" for="cemFmtJson">${escapeHtml(tx(opts.lang, 'fmt_json'))}</label>
          <input type="radio" class="btn-check" name="cemFmt" id="cemFmtCsv" value="csv">
          <label class="btn btn-outline-secondary" for="cemFmtCsv">${escapeHtml(tx(opts.lang, 'fmt_csv'))}</label>
        </div>
        <button type="button" id="cemBtnConvert" class="btn btn-primary btn-sm">${escapeHtml(tx(opts.lang, 'convert'))}</button>
        <button type="button" id="cemBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx(opts.lang, 'load_sample'))}</button>
        <button type="button" id="cemBtnCopy" class="btn btn-outline-secondary btn-sm" disabled>${escapeHtml(tx(opts.lang, 'copy'))}</button>
        <button type="button" id="cemBtnDownload" class="btn btn-outline-secondary btn-sm" disabled>${escapeHtml(tx(opts.lang, 'download'))}</button>
        <button type="button" id="cemBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx(opts.lang, 'clear'))}</button>
      </div>

      <p id="cemError" class="alert alert-danger py-2 small mb-2" style="display:none;" role="alert"></p>
      <p id="cemStatus" class="cem-meta mb-2" role="status"></p>
      <label class="form-label" for="cemOutput">${escapeHtml(tx(opts.lang, 'output_label'))}</label>
      <pre id="cemOutput" class="cem-out" aria-live="polite"></pre>
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

	/** 权威引用：OpenAI 数据导出帮助。 */
	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: 'OpenAI Help — How do I export my ChatGPT data?',
				href: 'https://help.openai.com/en/articles/7260999-how-do-i-export-my-chatgpt-history-and-data',
			},
		],
	});

	/** 浏览器内解析导出；进页自动 loadSample()。 */
	const extraBodyHtml = `
  <script>
    (function () {
      /** 拖放区。 */
      var drop = document.getElementById('cemDrop');
      /** 文件选择。 */
      var fileInput = document.getElementById('cemFile');
      /** 输入区。 */
      var inputEl = document.getElementById('cemInput');
      /** 输出区。 */
      var outputEl = document.getElementById('cemOutput');
      /** 转换。 */
      var btnConvert = document.getElementById('cemBtnConvert');
      /** 样例。 */
      var btnSample = document.getElementById('cemBtnSample');
      /** 复制。 */
      var btnCopy = document.getElementById('cemBtnCopy');
      /** 下载。 */
      var btnDownload = document.getElementById('cemBtnDownload');
      /** 清空。 */
      var btnClear = document.getElementById('cemBtnClear');
      /** 错误条。 */
      var errEl = document.getElementById('cemError');
      /** 状态条。 */
      var statusEl = document.getElementById('cemStatus');

      /** 界面文案。 */
      var msg = {
        empty: ${JSON.stringify(tx(opts.lang, 'empty'))},
        parse: ${JSON.stringify(tx(opts.lang, 'err_parse'))},
        none: ${JSON.stringify(tx(opts.lang, 'err_none'))},
        working: ${JSON.stringify(tx(opts.lang, 'status_working'))},
        done: ${JSON.stringify(tx(opts.lang, 'status_done'))},
        copied: ${JSON.stringify(tx(opts.lang, 'status_copied'))},
        roleUser: ${JSON.stringify(tx(opts.lang, 'role_user'))},
        roleAssistant: ${JSON.stringify(tx(opts.lang, 'role_assistant'))},
        roleSystem: ${JSON.stringify(tx(opts.lang, 'role_system'))},
        roleTool: ${JSON.stringify(tx(opts.lang, 'role_tool'))}
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
       * 当前输出格式。
       * @returns {'md'|'json'|'csv'}
       */
      function currentFmt() {
        var el = document.querySelector('input[name="cemFmt"]:checked');
        var v = el && el.value ? el.value : 'md';
        return v === 'json' || v === 'csv' ? v : 'md';
      }

      /**
       * 从 content 节点取纯文本。
       * @param {any} content message.content
       * @returns {string}
       */
      function contentToText(content) {
        if (content == null) return '';
        if (typeof content === 'string') return content;
        if (Array.isArray(content.parts)) {
          return content.parts.map(function (p) {
            if (typeof p === 'string') return p;
            if (p && typeof p === 'object' && typeof p.text === 'string') return p.text;
            return '';
          }).filter(Boolean).join('\\n');
        }
        if (typeof content.text === 'string') return content.text;
        return '';
      }

      /**
       * 规范化角色名。
       * @param {string} role 原始角色
       * @returns {string}
       */
      function normRole(role) {
        var r = String(role || '').toLowerCase();
        if (r === 'human' || r === 'user') return 'user';
        if (r === 'assistant' || r === 'bot' || r === 'chatgpt' || r === 'claude') return 'assistant';
        if (r === 'system') return 'system';
        if (r === 'tool' || r === 'function') return 'tool';
        return r || 'unknown';
      }

      /**
       * 角色显示标题。
       * @param {string} role 规范化角色
       * @returns {string}
       */
      function roleLabel(role) {
        if (role === 'user') return msg.roleUser;
        if (role === 'assistant') return msg.roleAssistant;
        if (role === 'system') return msg.roleSystem;
        if (role === 'tool') return msg.roleTool;
        return role;
      }

      /**
       * 从 ChatGPT mapping 树展开 turns。
       * @param {Record<string, any>} mapping id → node
       * @returns {{role:string,content:string}[]}
       */
      function turnsFromMapping(mapping) {
        var nodes = mapping || {};
        var rootId = null;
        Object.keys(nodes).forEach(function (id) {
          var n = nodes[id];
          if (n && (n.parent == null || n.parent === '') && !rootId) rootId = id;
        });
        if (!rootId) {
          var keys = Object.keys(nodes);
          rootId = keys.length ? keys[0] : null;
        }
        /** @type {{role:string,content:string}[]} */
        var turns = [];
        var cur = rootId;
        var guard = 0;
        while (cur && nodes[cur] && guard < 5000) {
          guard += 1;
          var node = nodes[cur];
          var message = node.message;
          if (message && message.author) {
            var role = normRole(message.author.role || message.author.name);
            var text = contentToText(message.content).trim();
            if (text && role !== 'system') {
              turns.push({ role: role, content: text });
            }
          }
          var children = node.children;
          if (Array.isArray(children) && children.length) {
            cur = children[children.length - 1];
          } else {
            cur = null;
          }
        }
        return turns;
      }

      /**
       * 从任意已解析对象提取 turns + 可选标题。
       * @param {any} data JSON 根
       * @returns {{title:string,turns:{role:string,content:string}[],source:string}}
       */
      function extractConversation(data) {
        var title = '';
        /** @type {{role:string,content:string}[]} */
        var turns = [];
        var source = 'unknown';

        var root = data;
        if (Array.isArray(data) && data.length === 1) root = data[0];
        if (Array.isArray(data) && data.length > 1 && data[0] && data[0].mapping) {
          root = data[0];
        }

        if (root && typeof root === 'object' && !Array.isArray(root) && root.mapping) {
          title = typeof root.title === 'string' ? root.title : '';
          turns = turnsFromMapping(root.mapping);
          source = 'chatgpt-mapping';
          return { title: title, turns: turns, source: source };
        }

        if (root && typeof root === 'object' && Array.isArray(root.chat_messages)) {
          title = typeof root.name === 'string' ? root.name : (typeof root.title === 'string' ? root.title : '');
          turns = root.chat_messages.map(function (m) {
            var role = normRole(m.sender || m.role || '');
            var text = typeof m.text === 'string' ? m.text : contentToText(m.content);
            return { role: role, content: String(text || '').trim() };
          }).filter(function (t) { return t.content; });
          source = 'claude-chat-messages';
          return { title: title, turns: turns, source: source };
        }

        if (root && typeof root === 'object' && Array.isArray(root.messages)) {
          title = typeof root.title === 'string' ? root.title : '';
          turns = root.messages.map(function (m) {
            return {
              role: normRole(m.role || m.sender || ''),
              content: String(typeof m.content === 'string' ? m.content : contentToText(m.content) || m.text || '').trim()
            };
          }).filter(function (t) { return t.content; });
          source = 'messages-array';
          return { title: title, turns: turns, source: source };
        }

        if (Array.isArray(data)) {
          var looksFlat = data.every(function (m) {
            return m && typeof m === 'object' && (m.role || m.sender) && (m.content != null || m.text != null);
          });
          if (looksFlat) {
            turns = data.map(function (m) {
              return {
                role: normRole(m.role || m.sender || ''),
                content: String(typeof m.content === 'string' ? m.content : contentToText(m.content) || m.text || '').trim()
              };
            }).filter(function (t) { return t.content; });
            source = 'flat-array';
            return { title: title, turns: turns, source: source };
          }
        }

        return { title: title, turns: turns, source: source };
      }

      /**
       * turns → Markdown。
       * @param {{title:string,turns:{role:string,content:string}[]}} conv 对话
       * @returns {string}
       */
      function toMarkdown(conv) {
        var lines = [];
        if (conv.title) lines.push('# ' + conv.title, '');
        conv.turns.forEach(function (t) {
          lines.push('## ' + roleLabel(t.role), '', t.content, '');
        });
        return lines.join('\\n').trim() + '\\n';
      }

      /**
       * turns → 规范化 JSON。
       * @param {{title:string,turns:{role:string,content:string}[],source:string}} conv 对话
       * @returns {string}
       */
      function toJson(conv) {
        return JSON.stringify({
          title: conv.title || null,
          source: conv.source,
          turns: conv.turns
        }, null, 2) + '\\n';
      }

      /**
       * CSV 单元格转义。
       * @param {string} s 原文
       * @returns {string}
       */
      function csvCell(s) {
        var t = String(s == null ? '' : s);
        if (/[",\\n\\r]/.test(t)) return '"' + t.replace(/"/g, '""') + '"';
        return t;
      }

      /**
       * turns → CSV。
       * @param {{turns:{role:string,content:string}[]}} conv 对话
       * @returns {string}
       */
      function toCsv(conv) {
        var rows = ['role,content'];
        conv.turns.forEach(function (t) {
          rows.push(csvCell(t.role) + ',' + csvCell(t.content));
        });
        return rows.join('\\n') + '\\n';
      }

      /**
       * 执行转换并写入输出。
       */
      function convert() {
        var raw = (inputEl.value || '').trim();
        if (!raw) {
          setError(msg.empty);
          return;
        }
        setError('');
        setStatus(msg.working);
        var data;
        try {
          data = JSON.parse(raw);
        } catch (e) {
          setError(msg.parse);
          setStatus('');
          return;
        }
        var conv = extractConversation(data);
        if (!conv.turns.length) {
          setError(msg.none);
          setStatus('');
          return;
        }
        var fmt = currentFmt();
        var out = fmt === 'json' ? toJson(conv) : fmt === 'csv' ? toCsv(conv) : toMarkdown(conv);
        lastOut = out;
        lastExt = fmt === 'json' ? 'json' : fmt === 'csv' ? 'csv' : 'md';
        outputEl.textContent = out;
        btnCopy.disabled = false;
        btnDownload.disabled = false;
        setStatus(msg.done.replace('{n}', String(conv.turns.length)).replace('{source}', conv.source));
      }

      /** 内置样例：两轮 ChatGPT mapping 形。 */
      var SAMPLE = {
        title: 'Sample chat',
        create_time: 1700000000,
        mapping: {
          root: { id: 'root', parent: null, children: ['m1'], message: null },
          m1: {
            id: 'm1',
            parent: 'root',
            children: ['m2'],
            message: {
              author: { role: 'user' },
              content: { content_type: 'text', parts: ['What is 2 + 2?'] }
            }
          },
          m2: {
            id: 'm2',
            parent: 'm1',
            children: [],
            message: {
              author: { role: 'assistant' },
              content: { content_type: 'text', parts: ['2 + 2 equals 4.'] }
            }
          }
        }
      };

      /**
       * 进页样例：写入 SAMPLE 并转 Markdown。
       * 函数名必须是 loadSample，以满足 lint:tool-page --require-html。
       */
      function loadSample() {
        inputEl.value = JSON.stringify(SAMPLE, null, 2);
        var mdRadio = document.getElementById('cemFmtMd');
        if (mdRadio) mdRadio.checked = true;
        convert();
      }

      /** 清空。 */
      function reset() {
        inputEl.value = '';
        outputEl.textContent = '';
        lastOut = '';
        btnCopy.disabled = true;
        btnDownload.disabled = true;
        setError('');
        setStatus('');
        fileInput.value = '';
      }

      /**
       * 读取本地文件到输入框。
       * @param {File} file 文件
       */
      function loadFile(file) {
        var reader = new FileReader();
        reader.onload = function () {
          inputEl.value = String(reader.result || '');
          convert();
        };
        reader.onerror = function () {
          setError(msg.parse);
        };
        reader.readAsText(file);
      }

      drop.addEventListener('dragover', function (e) {
        e.preventDefault();
        drop.classList.add('dragover');
      });
      drop.addEventListener('dragleave', function () { drop.classList.remove('dragover'); });
      drop.addEventListener('drop', function (e) {
        e.preventDefault();
        drop.classList.remove('dragover');
        var f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) loadFile(f);
      });
      fileInput.addEventListener('change', function () {
        var f = fileInput.files && fileInput.files[0];
        if (f) loadFile(f);
        fileInput.value = '';
      });
      btnConvert.addEventListener('click', convert);
      btnSample.addEventListener('click', loadSample);
      btnClear.addEventListener('click', reset);
      document.querySelectorAll('input[name="cemFmt"]').forEach(function (el) {
        el.addEventListener('change', function () {
          if ((inputEl.value || '').trim()) convert();
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
        a.download = 'chatgpt-export.' + lastExt;
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
	const toolMeta = getToolBySlug('chatgpt-export-to-markdown');
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
