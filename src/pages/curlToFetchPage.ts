/**
 * cURL 转 JavaScript fetch 工具页：浏览器内解析 cURL，生成 fetch 代码片段。
 * slug: curl-to-fetch；见 work-tasks/curl-to-fetch/02-tool-info.md。
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
const PREFIX = 'tool_curl_to_fetch';

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
 * 渲染 cURL → fetch 转换工具页。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderCurlToFetchPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 工具规范路径（无语言前缀）。 */
	const toolPath = '/tools/curl-to-fetch';
	/** 当前语言 canonical 路径。 */
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	/** 文档 title：H1 + 品牌。 */
	const title = `${tx(opts.lang, 'title')} | ${t(opts.lang, 'brand')}`;
	/** meta description，与可见导语同源。 */
	const description = tx(opts.lang, 'description');

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

	/** header 语言菜单用的路径映射。 */
	const langAlternates: Record<string, string> = Object.fromEntries(
		(supportedLangs || []).map((code) => [code, withExplicitLangPrefix(code, toolPath)])
	);

	/** hreflang 交替链接。 */
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
			currentSlug: 'curl-to-fetch',
			currentAnchor: '#converter',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	/** 页内样式：等宽输入/输出、输出格式芯片。 */
	const extraHeadHtml = `
  <style>
    .tools-bar { gap: .5rem; }
    #ctfInput {
      min-height: 160px;
      font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
      font-size: .85rem;
    }
    #ctfOutput {
      min-height: 200px; max-height: 420px; overflow: auto;
      font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
      font-size: .82rem;
      white-space: pre-wrap; word-break: break-word;
    }
    .ctf-chip-group { gap: .35rem; }
  </style>`;

	const contentHtml = `
    <div id="converter" class="tool-hero">
      <h1 class="tool-title">${escapeHtml(tx(opts.lang, 'title'))}</h1>
      <p class="tool-lead">${escapeHtml(description)}</p>
    </div>

    <div class="tool-panel">
    <div class="d-flex align-items-center tools-bar mb-2 flex-wrap">
      <button type="button" id="ctfBtnConvert" class="btn btn-primary">${escapeHtml(tx(opts.lang, 'convert'))}</button>
      <button type="button" id="ctfBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx(opts.lang, 'load_sample'))}</button>
      <button type="button" id="ctfBtnCopy" class="btn btn-outline-primary btn-sm">${escapeHtml(tx(opts.lang, 'copy'))}</button>
      <button type="button" id="ctfBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx(opts.lang, 'clear'))}</button>
    </div>

    <div class="d-flex flex-wrap align-items-center ctf-chip-group mb-3 small">
      <span class="text-muted mb-0">${escapeHtml(tx(opts.lang, 'output_style_label'))}</span>
      <div class="btn-group" role="group" aria-label="${escapeHtml(tx(opts.lang, 'output_style_label'))}">
        <input type="radio" class="btn-check" name="ctfStyle" id="ctfStyleFetch" value="fetch" checked>
        <label class="btn btn-outline-primary btn-sm" for="ctfStyleFetch">${escapeHtml(tx(opts.lang, 'output_style_fetch'))}</label>
        <input type="radio" class="btn-check" name="ctfStyle" id="ctfStyleAsync" value="async">
        <label class="btn btn-outline-primary btn-sm" for="ctfStyleAsync">${escapeHtml(tx(opts.lang, 'output_style_async'))}</label>
      </div>
    </div>

    <div id="ctfWarn" class="alert alert-warning py-2 small mb-2" style="display:none" role="status"></div>
    <div id="ctfError" class="alert alert-danger py-2 small mb-2" style="display:none" role="alert"></div>
    <div id="ctfStatus" class="alert alert-success py-2 small mb-2" style="display:none" role="status"></div>

    <div class="mb-3">
      <label for="ctfInput" class="form-label">${escapeHtml(tx(opts.lang, 'input_label'))}</label>
      <textarea id="ctfInput" class="form-control" placeholder="${escapeHtml(tx(opts.lang, 'input_placeholder'))}" spellcheck="false"></textarea>
    </div>

    <div class="mb-0">
      <label class="form-label" for="ctfOutput">${escapeHtml(tx(opts.lang, 'output_label'))}</label>
      <pre id="ctfOutput" class="result mb-0 border rounded p-2 bg-light" tabindex="0"></pre>
    </div>
    </div>`;

	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: PREFIX,
		mode: 'rules',
		usecaseCount: 3,
		ruleItemCount: 4,
	});

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: 'MDN — fetch()',
				href: 'https://developer.mozilla.org/en-US/docs/Web/API/fetch',
			},
			{
				label: 'curl man page — curl.se',
				href: 'https://curl.se/docs/manpage.html',
			},
		],
	});

	/** 客户端：Tier 0 原生 cURL 解析与 fetch 代码生成（无网络请求）。 */
	const extraBodyHtml = `
  <script>
    (function () {
      /** 粘贴软上限（字符），超出仍可转换但提示卡顿 */
      var SOFT_LIMIT = 50000;
      /** 与 Example / loadSample 一致的 POST JSON cURL */
      var SAMPLE_CURL = ${JSON.stringify(tx(opts.lang, 'sample_curl'))};

      var ctfInput = document.getElementById('ctfInput');
      var ctfOutput = document.getElementById('ctfOutput');
      var ctfBtnConvert = document.getElementById('ctfBtnConvert');
      var ctfBtnSample = document.getElementById('ctfBtnSample');
      var ctfBtnCopy = document.getElementById('ctfBtnCopy');
      var ctfBtnClear = document.getElementById('ctfBtnClear');
      var ctfWarn = document.getElementById('ctfWarn');
      var ctfError = document.getElementById('ctfError');
      var ctfStatus = document.getElementById('ctfStatus');
      var ctfStyleFetch = document.getElementById('ctfStyleFetch');
      var ctfStyleAsync = document.getElementById('ctfStyleAsync');

      var msgEmpty = ${JSON.stringify(tx(opts.lang, 'error_empty'))};
      var msgNoUrl = ${JSON.stringify(tx(opts.lang, 'error_no_url'))};
      var msgUnclosed = ${JSON.stringify(tx(opts.lang, 'error_unclosed_quote'))};
      var msgParse = ${JSON.stringify(tx(opts.lang, 'error_parse'))};
      var msgLarge = ${JSON.stringify(tx(opts.lang, 'large_warn'))};
      var msgCopyEmpty = ${JSON.stringify(tx(opts.lang, 'copy_empty'))};
      var msgCopyDone = ${JSON.stringify(tx(opts.lang, 'copy_done'))};
      var msgDone = ${JSON.stringify(tx(opts.lang, 'status_done'))};
      var msgUnknownFlags = ${JSON.stringify(tx(opts.lang, 'warn_unknown_flags'))};

      /** 上次成功生成的 fetch 代码 */
      var lastOkOut = '';

      /**
       * 隐藏状态/错误条。
       */
      function hideAlerts() {
        ctfWarn.style.display = 'none';
        ctfError.style.display = 'none';
        ctfStatus.style.display = 'none';
        ctfWarn.textContent = '';
        ctfError.textContent = '';
        ctfStatus.textContent = '';
      }

      /**
       * 展示错误信息。
       * @param {string} msg 用户可见错误文案
       */
      function showError(msg) {
        hideAlerts();
        ctfError.textContent = msg;
        ctfError.style.display = '';
      }

      /**
       * 展示成功状态。
       * @param {string} msg 用户可见成功文案
       */
      function showStatus(msg) {
        ctfStatus.textContent = msg;
        ctfStatus.style.display = '';
      }

      /**
       * 按输入长度显示软上限警告。
       * @param {string} text cURL 原文
       */
      function maybeWarnSize(text) {
        if ((text || '').length > SOFT_LIMIT) {
          ctfWarn.textContent = msgLarge;
          ctfWarn.style.display = '';
        } else {
          ctfWarn.style.display = 'none';
        }
      }

      /**
       * 合并行续符（反斜杠 + 换行）为空白。
       * @param {string} raw 原始粘贴
       * @returns {string} 单行化后的命令体
       */
      function normalizeContinuations(raw) {
        return (raw || '').replace(/\\\\\\s*[\\r\\n]+/g, ' ');
      }

      /**
       * 去掉可选 leading curl 命令名。
       * @param {string} s 已合并续行的字符串
       * @returns {string} 参数段
       */
      function stripCurlCommand(s) {
        var t = (s || '').trim();
        if (/^curl\\b/i.test(t)) {
          t = t.replace(/^curl\\b\\s*/i, '');
        }
        return t.trim();
      }

      /**
       * 将命令行拆成 token（支持单/双引号与反斜杠转义）。
       * @param {string} s 参数段
       * @returns {string[]} token 列表
       */
      function tokenize(s) {
        var tokens = [];
        var i = 0;
        while (i < s.length) {
          while (i < s.length && /\\s/.test(s[i])) i++;
          if (i >= s.length) break;
          var ch = s[i];
          if (ch === '"' || ch === "'") {
            var quote = ch;
            i++;
            var val = '';
            while (i < s.length) {
              if (s[i] === '\\\\' && i + 1 < s.length) {
                val += s[i + 1];
                i += 2;
              } else if (s[i] === quote) {
                i++;
                break;
              } else {
                val += s[i];
                i++;
              }
            }
            if (i <= s.length && s[i - 1] !== quote && quote === s[s.length - 1]) {
              /* ok closed at end */
            }
            tokens.push(val);
          } else if (ch === '-') {
            var flag = '';
            while (i < s.length && !/\\s/.test(s[i])) {
              flag += s[i];
              i++;
            }
            tokens.push(flag);
          } else {
            var bare = '';
            while (i < s.length && !/\\s/.test(s[i])) {
              bare += s[i];
              i++;
            }
            tokens.push(bare);
          }
        }
        return tokens;
      }

      /**
       * 检测引号是否可能在 tokenize 前未闭合（粗检）。
       * @param {string} s 原始输入
       */
      function assertQuotesBalanced(s) {
        var inSingle = false;
        var inDouble = false;
        for (var i = 0; i < s.length; i++) {
          var c = s[i];
          if (c === '\\\\' && i + 1 < s.length) {
            i++;
            continue;
          }
          if (c === "'" && !inDouble) inSingle = !inSingle;
          if (c === '"' && !inSingle) inDouble = !inDouble;
        }
        if (inSingle || inDouble) throw new Error(msgUnclosed);
      }

      /**
       * 判断字符串是否像 URL。
       * @param {string} v token
       */
      function looksLikeUrl(v) {
        return /^https?:\\/\\//i.test(v) || v.indexOf('//') === 0;
      }

      /**
       * 解析 cURL token 为中间结构。
       * @param {string[]} tokens token 列表
       * @returns {{ url: string, method: string, headers: Record<string,string>, body: string|null, useGetQuery: boolean, unknown: string[] }}
       */
      function parseTokens(tokens) {
        var url = '';
        var method = 'GET';
        var headers = {};
        var bodyParts = [];
        var useGetQuery = false;
        var unknown = [];
        var dataFlags = ['-d', '--data', '--data-raw', '--data-binary', '--data-urlencode'];

        for (var i = 0; i < tokens.length; i++) {
          var tok = tokens[i];
          var low = tok.toLowerCase();

          if (low === '-g' || low === '--get') {
            useGetQuery = true;
            continue;
          }

          if (low === '-x' || low === '--request') {
            method = (tokens[++i] || 'GET').toUpperCase();
            continue;
          }

          if (low === '-h' || low === '--header') {
            var hv = tokens[++i] || '';
            var colon = hv.indexOf(':');
            if (colon >= 0) {
              var hk = hv.slice(0, colon).trim();
              var hval = hv.slice(colon + 1).trim();
              headers[hk] = hval;
            } else {
              headers[hv] = '';
            }
            continue;
          }

          if (dataFlags.indexOf(low) >= 0) {
            bodyParts.push(tokens[++i] || '');
            if (method === 'GET') method = useGetQuery ? 'GET' : 'POST';
            continue;
          }

          if (low === '-u' || low === '--user') {
            var cred = tokens[++i] || '';
            var user = cred;
            var pass = '';
            var at = cred.indexOf(':');
            if (at >= 0) {
              user = cred.slice(0, at);
              pass = cred.slice(at + 1);
            }
            var basic = btoa(unescape(encodeURIComponent(user + ':' + pass)));
            headers['Authorization'] = 'Basic ' + basic;
            continue;
          }

          if (low === '--url') {
            url = tokens[++i] || url;
            continue;
          }

          if (tok.charAt(0) === '-') {
            unknown.push(tok);
            if (i + 1 < tokens.length && tokens[i + 1].charAt(0) !== '-') {
              i++;
            }
            continue;
          }

          if (!url && looksLikeUrl(tok)) {
            url = tok;
            continue;
          }
        }

        var body = bodyParts.length ? bodyParts.join('&') : null;
        if (body && !useGetQuery && method === 'GET') {
          method = 'POST';
        }

        return {
          url: url,
          method: method,
          headers: headers,
          body: body,
          useGetQuery: useGetQuery,
          unknown: unknown,
        };
      }

      /**
       * 将 -G 场景的 body 拼到 URL 查询串。
       * @param {string} baseUrl 基础 URL
       * @param {string|null} body 查询片段
       */
      function appendQuery(baseUrl, body) {
        if (!body) return baseUrl;
        var sep = baseUrl.indexOf('?') >= 0 ? '&' : '?';
        return baseUrl + sep + body;
      }

      /**
       * 生成 fetch options 对象字面量文本。
       * @param {{ method: string, headers: Record<string,string>, body: string|null }} parsed 解析结果
       */
      function formatOptions(parsed) {
        var lines = [];
        if (parsed.method && parsed.method !== 'GET') {
          lines.push("  method: '" + parsed.method + "',");
        }
        var keys = Object.keys(parsed.headers || {});
        if (keys.length) {
          lines.push('  headers: {');
          keys.forEach(function (k) {
            lines.push('    ' + JSON.stringify(k) + ': ' + JSON.stringify(parsed.headers[k]) + ',');
          });
          lines.push('  },');
        }
        if (parsed.body) {
          lines.push('  body: ' + JSON.stringify(parsed.body) + ',');
        }
        if (!lines.length) return '';
        return ', {\\n' + lines.join('\\n') + '\\n}';
      }

      /**
       * 由解析结果生成 JavaScript fetch 代码。
       * @param {{ url: string, method: string, headers: Record<string,string>, body: string|null, useGetQuery: boolean, unknown: string[] }} parsed
       * @param {boolean} wrapAsync 是否包 async function
       */
      function generateFetchCode(parsed, wrapAsync) {
        var finalUrl = parsed.useGetQuery ? appendQuery(parsed.url, parsed.body) : parsed.url;
        var bodyForOpts = parsed.useGetQuery ? null : parsed.body;
        var optParsed = {
          method: parsed.method,
          headers: parsed.headers,
          body: bodyForOpts,
        };
        var optsBlock = formatOptions(optParsed);
        var urlLit = JSON.stringify(finalUrl);
        var lines = [];
        if (wrapAsync) {
          lines.push('async function request() {');
          lines.push('  const response = await fetch(' + urlLit + optsBlock + ');');
          lines.push('  return response;');
          lines.push('}');
        } else {
          lines.push('fetch(' + urlLit + optsBlock + ');');
        }
        return lines.join('\\n');
      }

      /**
       * 完整转换流水线：校验 → 解析 → 生成代码。
       * @param {string} raw 用户粘贴的 cURL
       * @param {boolean} wrapAsync 输出 async/await 包装
       */
      function convertCurl(raw, wrapAsync) {
        var trimmed = (raw || '').trim();
        if (!trimmed) throw new Error(msgEmpty);
        assertQuotesBalanced(trimmed);
        var normalized = stripCurlCommand(normalizeContinuations(trimmed));
        var tokens = tokenize(normalized);
        if (!tokens.length) throw new Error(msgParse);
        var parsed = parseTokens(tokens);
        if (!parsed.url) throw new Error(msgNoUrl);
        return { code: generateFetchCode(parsed, wrapAsync), parsed: parsed };
      }

      /** 当前是否选中 async/await 输出芯片 */
      function isAsyncStyle() {
        return ctfStyleAsync && ctfStyleAsync.checked;
      }

      /** 执行转换并刷新输出区 */
      function runConvert() {
        hideAlerts();
        maybeWarnSize(ctfInput.value);
        try {
          var result = convertCurl(ctfInput.value, isAsyncStyle());
          lastOkOut = result.code;
          ctfOutput.textContent = lastOkOut;
          showStatus(msgDone);
          if (result.parsed.unknown && result.parsed.unknown.length) {
            ctfWarn.textContent = msgUnknownFlags.replace('{flags}', result.parsed.unknown.join(', '));
            ctfWarn.style.display = '';
          }
        } catch (err) {
          lastOkOut = '';
          ctfOutput.textContent = '';
          showError(err && err.message ? err.message : msgParse);
        }
      }

      /** 加载内置样例并转换 */
      function loadSample() {
        ctfInput.value = SAMPLE_CURL;
        runConvert();
      }

      /** 清空输入输出 */
      function clearAll() {
        ctfInput.value = '';
        ctfOutput.textContent = '';
        lastOkOut = '';
        hideAlerts();
      }

      /** 复制生成代码到剪贴板 */
      function copyOut() {
        if (!lastOkOut) {
          showError(msgCopyEmpty);
          return;
        }
        navigator.clipboard.writeText(lastOkOut).then(function () {
          var prev = ctfBtnCopy.textContent;
          ctfBtnCopy.textContent = msgCopyDone;
          setTimeout(function () { ctfBtnCopy.textContent = prev; }, 1200);
        });
      }

      ctfBtnConvert.addEventListener('click', runConvert);
      ctfBtnSample.addEventListener('click', loadSample);
      ctfBtnCopy.addEventListener('click', copyOut);
      ctfBtnClear.addEventListener('click', clearAll);
      if (ctfStyleFetch) ctfStyleFetch.addEventListener('change', function () { if (ctfInput.value.trim()) runConvert(); });
      if (ctfStyleAsync) ctfStyleAsync.addEventListener('change', function () { if (ctfInput.value.trim()) runConvert(); });

      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('curl-to-fetch');
	const toolSeoHtml = toolMeta
		? renderToolExtraSections({ lang: opts.lang, defaultLang: opts.defaultLang, tool: toolMeta })
		: '';
	const toolJsonLd = toolMeta
		? buildToolJsonLd({
				lang: opts.lang,
				defaultLang: opts.defaultLang,
				tool: toolMeta,
				name: t(opts.lang, toolMeta.i18nKey as Parameters<typeof t>[1]),
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
