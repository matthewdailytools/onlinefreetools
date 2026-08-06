/**
 * Markdown ↔ HTML 双向转换工具页。
 * slug: markdown-to-html；增强现有页（Tab），不拆 html-to-markdown。
 * 见 work-tasks/markdown-to-html/02-tool-info.md。
 */
import type { SiteLang } from '../site/i18n';
import { t, supportedLangs } from '../site/i18n';
import { renderFooter } from './site/footer';
import { renderHeader } from './site/header';
import { renderLayout, type HreflangAlternate, escapeHtml } from './site/layout';
import { renderSidebar } from './site/sidebar';
import { TOOL_PAGES, getToolBySlug } from '../site/tools';
import { renderToolExtraSections, buildToolJsonLd } from './site/toolContent';

/** 为路径加上语言前缀（默认语无前缀）。 */
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * 渲染 Markdown ↔ HTML 工具页。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表（语言切换器用全量 supportedLangs）
 */
export const renderMarkdownToHtmlPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/markdown-to-html';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_markdown_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_markdown_description');

	const navItems = [
		{ href: withLangPrefix(opts.lang, '/', opts.defaultLang), label: t(opts.lang, 'nav_home') },
		{ href: withLangPrefix(opts.lang, '/#all-tools', opts.defaultLang), label: t(opts.lang, 'nav_tools') },
		{ href: '/devlogs/', label: t(opts.lang, 'nav_devlogs') },
	];

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

	const toolLinks = (TOOL_PAGES || []).map((p) => ({
		href: withLangPrefix(opts.lang, p.path, opts.defaultLang),
		label: t(opts.lang, p.i18nKey),
	}));

	const sidebarHtml = renderSidebar({
		title: t(opts.lang, 'nav_tools'),
		items: [{ href: '#converter', label: t(opts.lang, 'tool_markdown_title') }, ...toolLinks],
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	/** 页内样式：双栏等高、Tab、Markdown 输出等宽。 */
	const extraHeadHtml = `
  <style>
    textarea { min-height: 320px; box-sizing: border-box; }
    #preview { min-height: 320px; background: #fff; border: 1px solid #dee2e6; border-radius: .5rem; padding: 1rem; box-sizing: border-box; overflow: auto; }
    #mdOutput { min-height: 320px; font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: .9rem; white-space: pre-wrap; word-break: break-word; background: #fff; border: 1px solid #dee2e6; border-radius: .5rem; padding: 1rem; box-sizing: border-box; overflow: auto; }
    .tools-bar { gap: .5rem; }
    .row.g-3 { align-items: stretch; }
    .row.g-3 > .col-12 { display: flex; flex-direction: column; }
    .row.g-3 > .col-12 > label { margin-bottom: .5rem; }
    #mdInput, #htmlInput { min-height: 320px; height: auto; resize: vertical; flex: 1 1 auto; box-sizing: border-box; font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: .9rem; }
    #preview, #mdOutput { min-height: 320px; height: auto; flex: 1 1 auto; }
    .dir-pane[hidden] { display: none !important; }
  </style>`;

	const contentHtml = `
    <div id="converter" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(t(opts.lang, 'tool_markdown_title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="d-flex align-items-center tools-bar mb-3 flex-wrap">
      <div class="btn-group" role="group" aria-label="${escapeHtml(t(opts.lang, 'tool_markdown_dir_label'))}">
        <input type="radio" class="btn-check" name="mdDir" id="dirMdHtml" value="md-html" checked>
        <label class="btn btn-outline-primary btn-sm" for="dirMdHtml">${escapeHtml(t(opts.lang, 'tool_markdown_tab_md_html'))}</label>
        <input type="radio" class="btn-check" name="mdDir" id="dirHtmlMd" value="html-md">
        <label class="btn btn-outline-primary btn-sm" for="dirHtmlMd">${escapeHtml(t(opts.lang, 'tool_markdown_tab_html_md'))}</label>
      </div>
      <button type="button" id="btnCopy" class="btn btn-primary btn-sm">${escapeHtml(t(opts.lang, 'tool_markdown_copy'))}</button>
      <button type="button" id="btnDownload" class="btn btn-outline-primary btn-sm">${escapeHtml(t(opts.lang, 'tool_markdown_download'))}</button>
      <button type="button" id="btnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_markdown_clear'))}</button>
      <div class="form-check ms-2" id="fullDocWrap">
        <input class="form-check-input" type="checkbox" id="fullDoc" checked>
        <label class="form-check-label" for="fullDoc">${escapeHtml(t(opts.lang, 'tool_markdown_full_doc'))}</label>
      </div>
    </div>

    <p id="convertWarn" class="small text-warning mb-2" style="display:none;" role="status"></p>
    <p id="convertHint" class="small text-muted mb-2" style="display:none;" role="status"></p>

    <div id="paneMdHtml" class="dir-pane row g-3 mb-4">
      <div class="col-12 col-lg-6">
        <label for="mdInput" class="form-label">${escapeHtml(t(opts.lang, 'tool_markdown_input_label'))}</label>
        <textarea id="mdInput" class="form-control" placeholder="${escapeHtml(t(opts.lang, 'tool_markdown_placeholder'))}"></textarea>
      </div>
      <div class="col-12 col-lg-6">
        <label class="form-label" for="preview">${escapeHtml(t(opts.lang, 'tool_markdown_preview_label'))}</label>
        <div id="preview" class="result" tabindex="0"></div>
      </div>
    </div>

    <div id="paneHtmlMd" class="dir-pane row g-3 mb-4" hidden>
      <div class="col-12 col-lg-6">
        <label for="htmlInput" class="form-label">${escapeHtml(t(opts.lang, 'tool_markdown_html_input_label'))}</label>
        <textarea id="htmlInput" class="form-control" placeholder="${escapeHtml(t(opts.lang, 'tool_markdown_html_placeholder'))}"></textarea>
      </div>
      <div class="col-12 col-lg-6">
        <label class="form-label" for="mdOutput">${escapeHtml(t(opts.lang, 'tool_markdown_md_output_label'))}</label>
        <div id="mdOutput" class="result" tabindex="0"></div>
      </div>
    </div>

    <section class="mt-4" id="how-it-works" aria-labelledby="how-heading">
      <h2 class="h5" id="how-heading">${escapeHtml(t(opts.lang, 'tool_markdown_how_title'))}</h2>
      <p class="text-muted">${escapeHtml(t(opts.lang, 'tool_markdown_how_body'))}</p>
    </section>

    <section class="mt-4" id="rules" aria-labelledby="rules-heading">
      <h2 class="h5" id="rules-heading">${escapeHtml(t(opts.lang, 'tool_markdown_rules_title'))}</h2>
      <p class="text-muted">${escapeHtml(t(opts.lang, 'tool_markdown_rules_intro'))}</p>
      <ul class="text-muted">
        <li>${escapeHtml(t(opts.lang, 'tool_markdown_rules_item_md_html'))}</li>
        <li>${escapeHtml(t(opts.lang, 'tool_markdown_rules_item_html_md'))}</li>
        <li>${escapeHtml(t(opts.lang, 'tool_markdown_rules_item_loss'))}</li>
      </ul>
      <p class="text-muted mb-0">${escapeHtml(t(opts.lang, 'tool_markdown_rules_privacy'))}</p>
    </section>

    <section class="mt-4" id="example" aria-labelledby="example-heading">
      <h2 class="h5" id="example-heading">${escapeHtml(t(opts.lang, 'tool_markdown_example_title'))}</h2>
      <p class="text-muted mb-0">${escapeHtml(t(opts.lang, 'tool_markdown_example'))}</p>
    </section>

    <section class="mt-4" id="use-cases" aria-labelledby="usecases-heading">
      <h2 class="h5" id="usecases-heading">${escapeHtml(t(opts.lang, 'tool_markdown_usecases_title'))}</h2>
      <ul class="text-muted mb-0">
        <li>${escapeHtml(t(opts.lang, 'tool_markdown_usecase_1'))}</li>
        <li>${escapeHtml(t(opts.lang, 'tool_markdown_usecase_2'))}</li>
        <li>${escapeHtml(t(opts.lang, 'tool_markdown_usecase_3'))}</li>
      </ul>
    </section>`;

	/** References 放在 FAQ / Related 之后。 */
	const referencesHtml = `
    <section class="mt-4" id="references" aria-labelledby="refs-heading">
      <h2 class="h5" id="refs-heading">${escapeHtml(t(opts.lang, 'tool_references_title'))}</h2>
      <ul class="mb-0">
        <li><a href="https://github.com/markedjs/marked" rel="noopener noreferrer" target="_blank">marked</a></li>
        <li><a href="https://github.com/cure53/DOMPurify" rel="noopener noreferrer" target="_blank">DOMPurify</a></li>
        <li><a href="https://github.com/mixmark-io/turndown" rel="noopener noreferrer" target="_blank">Turndown</a></li>
        <li><a href="https://commonmark.org/" rel="noopener noreferrer" target="_blank">CommonMark</a></li>
      </ul>
    </section>`;

	/** 客户端：marked + DOMPurify + turndown；按方向切换面板与复制/下载行为。 */
	const extraBodyHtml = `
  <script src="https://cdnjs.cloudflare.com/ajax/libs/marked/11.1.1/marked.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/dompurify/3.0.5/purify.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script src="https://cdn.jsdelivr.net/npm/turndown@7.2.0/dist/turndown.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script>
    (function () {
      /** 粘贴软上限（字符），超出仍可转换但提示卡顿风险 */
      var SOFT_LIMIT = 200000;
      var lang = ${JSON.stringify(opts.lang)};
      var exportTitle = ${JSON.stringify(t(opts.lang, 'tool_markdown_export_title'))};
      var exportDesc = ${JSON.stringify(t(opts.lang, 'tool_markdown_export_description'))};

      var mdInput = document.getElementById('mdInput');
      var htmlInput = document.getElementById('htmlInput');
      var preview = document.getElementById('preview');
      var mdOutput = document.getElementById('mdOutput');
      var paneMdHtml = document.getElementById('paneMdHtml');
      var paneHtmlMd = document.getElementById('paneHtmlMd');
      var fullDocWrap = document.getElementById('fullDocWrap');
      var fullDoc = document.getElementById('fullDoc');
      var btnCopy = document.getElementById('btnCopy');
      var btnDownload = document.getElementById('btnDownload');
      var btnClear = document.getElementById('btnClear');
      var convertWarn = document.getElementById('convertWarn');
      var convertHint = document.getElementById('convertHint');

      var labelCopyHtml = ${JSON.stringify(t(opts.lang, 'tool_markdown_copy'))};
      var labelCopyMd = ${JSON.stringify(t(opts.lang, 'tool_markdown_copy_md'))};
      var labelCopyDone = ${JSON.stringify(t(opts.lang, 'tool_markdown_copy_done'))};
      var labelDlHtml = ${JSON.stringify(t(opts.lang, 'tool_markdown_download'))};
      var labelDlMd = ${JSON.stringify(t(opts.lang, 'tool_markdown_download_md'))};
      var msgLarge = ${JSON.stringify(t(opts.lang, 'tool_markdown_large_warn'))};
      var msgNeedLib = ${JSON.stringify(t(opts.lang, 'tool_markdown_need_lib'))};
      var msgLoss = ${JSON.stringify(t(opts.lang, 'tool_markdown_loss_hint'))};
      var sampleMd = ${JSON.stringify(t(opts.lang, 'tool_markdown_sample_md'))};
      var sampleHtml = ${JSON.stringify(t(opts.lang, 'tool_markdown_sample_html'))};

      /** Turndown 单例（ATX 标题 + fenced 代码块） */
      var turndownSvc = null;

      /** 当前方向：md-html | html-md */
      function getDir() {
        var el = document.querySelector('input[name="mdDir"]:checked');
        return el ? el.value : 'md-html';
      }

      /** 是否为 Markdown → HTML 方向 */
      function isMdHtml() {
        return getDir() === 'md-html';
      }

      /**
       * 按长度显示软上限警告。
       * @param {string} text 当前输入
       */
      function maybeWarnSize(text) {
        if ((text || '').length > SOFT_LIMIT) {
          convertWarn.textContent = msgLarge;
          convertWarn.style.display = '';
        } else {
          convertWarn.style.display = 'none';
        }
      }

      /**
       * Markdown → 消毒后的 HTML 片段。
       * @param {string} md Markdown 源
       * @returns {string} 安全 HTML
       */
      function toHTML(md) {
        if (typeof marked === 'undefined' || typeof DOMPurify === 'undefined') {
          return '';
        }
        var raw = marked.parse(md || '');
        return DOMPurify.sanitize(raw);
      }

      /**
       * 将 body HTML 包进基础文档模板（用于下载/复制完整页）。
       * @param {string} bodyHTML 已消毒的正文
       * @returns {string} 完整 HTML 文档
       */
      function wrapHTML(bodyHTML) {
        return (
          '<!doctype html>\\n' +
          '<html lang="' + lang + '">\\n' +
          '<head>\\n' +
          '  <meta charset="utf-8" />\\n' +
          '  <meta name="viewport" content="width=device-width,initial-scale=1" />\\n' +
          '  <title>' + exportTitle + '</title>\\n' +
          '  <meta name="description" content="' + exportDesc + '" />\\n' +
          '</head>\\n' +
          '<body>\\n' +
          bodyHTML +
          '\\n</body>\\n' +
          '</html>'
        );
      }

      /**
       * 确保 Turndown 已初始化。
       * @returns {boolean} 是否可用
       */
      function ensureTurndown() {
        if (turndownSvc) return true;
        if (typeof TurndownService === 'undefined') return false;
        turndownSvc = new TurndownService({
          headingStyle: 'atx',
          codeBlockStyle: 'fenced',
          bulletListMarker: '-',
        });
        return true;
      }

      /**
       * HTML → Markdown：先消毒再 turndown，避免脚本进入转换链。
       * @param {string} html 原始 HTML
       * @returns {string} Markdown
       */
      function toMarkdown(html) {
        if (!ensureTurndown() || typeof DOMPurify === 'undefined') return '';
        var clean = DOMPurify.sanitize(html || '', {
          USE_PROFILES: { html: true },
        });
        return turndownSvc.turndown(clean);
      }

      /** 渲染 MD→HTML 预览 */
      function renderMdHtml() {
        if (typeof marked === 'undefined' || typeof DOMPurify === 'undefined') {
          preview.textContent = msgNeedLib;
          return;
        }
        maybeWarnSize(mdInput.value);
        convertHint.style.display = 'none';
        preview.innerHTML = toHTML(mdInput.value);
      }

      /** 渲染 HTML→MD 输出 */
      function renderHtmlMd() {
        if (!ensureTurndown() || typeof DOMPurify === 'undefined') {
          mdOutput.textContent = msgNeedLib;
          return;
        }
        maybeWarnSize(htmlInput.value);
        var md = toMarkdown(htmlInput.value);
        mdOutput.textContent = md;
        var raw = (htmlInput.value || '').trim();
        if (raw && !md.trim()) {
          convertHint.textContent = msgLoss;
          convertHint.style.display = '';
        } else {
          convertHint.style.display = 'none';
        }
      }

      /** 按当前方向刷新结果 */
      function render() {
        if (isMdHtml()) renderMdHtml();
        else renderHtmlMd();
      }

      /** 切换 Tab：面板、按钮文案、完整文档选项 */
      function applyDirUi() {
        var mdHtml = isMdHtml();
        paneMdHtml.hidden = !mdHtml;
        paneHtmlMd.hidden = mdHtml;
        fullDocWrap.style.display = mdHtml ? '' : 'none';
        btnCopy.textContent = mdHtml ? labelCopyHtml : labelCopyMd;
        btnDownload.textContent = mdHtml ? labelDlHtml : labelDlMd;
        convertHint.style.display = 'none';
        render();
      }

      /** 复制当前方向的输出 */
      async function copyOut() {
        var value;
        if (isMdHtml()) {
          var html = toHTML(mdInput.value);
          value = fullDoc.checked ? wrapHTML(html) : html;
        } else {
          value = toMarkdown(htmlInput.value);
        }
        await navigator.clipboard.writeText(value);
        var restore = isMdHtml() ? labelCopyHtml : labelCopyMd;
        btnCopy.textContent = labelCopyDone;
        setTimeout(function () {
          btnCopy.textContent = restore;
        }, 1200);
      }

      /** 下载当前方向的输出文件 */
      function downloadOut() {
        var value;
        var filename;
        var mime;
        if (isMdHtml()) {
          var html = toHTML(mdInput.value);
          value = fullDoc.checked ? wrapHTML(html) : html;
          filename = 'markdown.html';
          mime = 'text/html;charset=utf-8';
        } else {
          value = toMarkdown(htmlInput.value);
          filename = 'content.md';
          mime = 'text/markdown;charset=utf-8';
        }
        var blob = new Blob([value], { type: mime });
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      }

      mdInput.addEventListener('input', function () {
        if (isMdHtml()) renderMdHtml();
      });
      htmlInput.addEventListener('input', function () {
        if (!isMdHtml()) renderHtmlMd();
      });
      btnCopy.addEventListener('click', copyOut);
      btnDownload.addEventListener('click', downloadOut);
      btnClear.addEventListener('click', function () {
        if (isMdHtml()) {
          mdInput.value = '';
          preview.innerHTML = '';
        } else {
          htmlInput.value = '';
          mdOutput.textContent = '';
        }
        convertWarn.style.display = 'none';
        convertHint.style.display = 'none';
      });
      document.querySelectorAll('input[name="mdDir"]').forEach(function (el) {
        el.addEventListener('change', applyDirUi);
      });

      // 预填各语样例（与 Example 同语种）
      mdInput.value = sampleMd;
      htmlInput.value = sampleHtml;
      applyDirUi();
    })();
  </script>`;

	const toolMeta = getToolBySlug('markdown-to-html');
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
		contentHtml: `${contentHtml}${toolSeoHtml}${referencesHtml}`,
		footerHtml,
		extraHeadHtml: `${extraHeadHtml}${toolJsonLd}`,
		extraBodyHtml,
		includeSidebarToggleScript: true,
		sidebarAutoCloseSelector: '#toolNav a',
	});
};
