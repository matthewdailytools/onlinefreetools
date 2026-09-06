/**
 * 文本 Diff 对比器工具页：双栏粘贴、行/词/字符级对比、本地计算。
 * slug: text-diff；主方向 A（见 work-tasks/text-diff/02-tool-info.md）。
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
	buildToolJsonLd,
	renderToolReferencesSection,
} from './site/toolContent';

/** 为路径加上语言前缀（默认语无前缀）。 */
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * 渲染文本 Diff 工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表（语言切换器用全量 supportedLangs）
 */
export const renderTextDiffPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/text-diff';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_text_diff_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_text_diff_description');

	const navItems = buildToolPageNavItems(opts.lang, opts.defaultLang);

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


	const sidebarHtml = renderSidebar({
		title: t(opts.lang, 'nav_tools'),
		groups: buildToolSidebarItems({ lang: opts.lang, defaultLang: opts.defaultLang, currentSlug: 'text-diff', currentAnchor: '#text-diff' }),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	/** 页内样式：双栏 textarea、Diff 高亮块。 */
	const extraHeadHtml = `
  <style>
    #textA, #textB { min-height: 220px; font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: .9rem; }
    #diffOut { min-height: 160px; max-height: 480px; overflow: auto; background: #fff; border: 1px solid #dee2e6; border-radius: .5rem; padding: .75rem 1rem; font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: .875rem; white-space: pre-wrap; word-break: break-word; }
    .diff-add { background: #d1e7dd; color: #0f5132; }
    .diff-del { background: #f8d7da; color: #842029; text-decoration: line-through; }
    .diff-eq { color: #212529; }
    .tools-bar { gap: .5rem; }
    .mode-group .btn { min-width: 4.5rem; }
  </style>`;

	const contentHtml = `
    <div id="text-diff" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(t(opts.lang, 'tool_text_diff_title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="d-flex align-items-center tools-bar mb-3 flex-wrap">
      <div class="btn-group mode-group" role="group" aria-label="${escapeHtml(t(opts.lang, 'tool_text_diff_mode_label'))}">
        <input type="radio" class="btn-check" name="diffMode" id="modeLines" value="lines" checked>
        <label class="btn btn-outline-primary btn-sm" for="modeLines">${escapeHtml(t(opts.lang, 'tool_text_diff_mode_lines'))}</label>
        <input type="radio" class="btn-check" name="diffMode" id="modeWords" value="words">
        <label class="btn btn-outline-primary btn-sm" for="modeWords">${escapeHtml(t(opts.lang, 'tool_text_diff_mode_words'))}</label>
        <input type="radio" class="btn-check" name="diffMode" id="modeChars" value="chars">
        <label class="btn btn-outline-primary btn-sm" for="modeChars">${escapeHtml(t(opts.lang, 'tool_text_diff_mode_chars'))}</label>
      </div>
      <div class="form-check ms-1">
        <input class="form-check-input" type="checkbox" id="ignoreWs">
        <label class="form-check-label" for="ignoreWs">${escapeHtml(t(opts.lang, 'tool_text_diff_ignore_ws'))}</label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="normEol" checked>
        <label class="form-check-label" for="normEol">${escapeHtml(t(opts.lang, 'tool_text_diff_normalize_eol'))}</label>
      </div>
      <button type="button" id="btnCompare" class="btn btn-primary btn-sm">${escapeHtml(t(opts.lang, 'tool_text_diff_compare'))}</button>
      <button type="button" id="btnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_text_diff_load_sample'))}</button>
      <button type="button" id="btnSwap" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_text_diff_swap'))}</button>
      <button type="button" id="btnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, 'tool_text_diff_clear'))}</button>
    </div>

    <div class="row g-3 mb-3">
      <div class="col-12 col-lg-6">
        <label for="textA" class="form-label">${escapeHtml(t(opts.lang, 'tool_text_diff_label_a'))}</label>
        <textarea id="textA" class="form-control" placeholder="${escapeHtml(t(opts.lang, 'tool_text_diff_placeholder_a'))}"></textarea>
      </div>
      <div class="col-12 col-lg-6">
        <label for="textB" class="form-label">${escapeHtml(t(opts.lang, 'tool_text_diff_label_b'))}</label>
        <textarea id="textB" class="form-control" placeholder="${escapeHtml(t(opts.lang, 'tool_text_diff_placeholder_b'))}"></textarea>
      </div>
    </div>

    <p id="diffSummary" class="small text-muted mb-2" aria-live="polite"></p>
    <p id="diffWarn" class="small text-warning mb-2" style="display:none;"></p>
    <p class="small text-muted mb-1">${escapeHtml(t(opts.lang, 'tool_text_diff_legend'))}</p>
    <div id="diffOut" class="mb-4" aria-label="${escapeHtml(t(opts.lang, 'tool_text_diff_result_label'))}"></div>`;

	/** How、Rules、Example 与 Use cases 使用统一的可见 IG 区块。 */
	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: 'tool_text_diff',
		mode: 'rules',
		usecaseCount: 3,
		ruleItemCount: 4,
		howItemCount: 4,
	});

	/** 权威说明 + 实现库。 */
	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{ label: 'Wikipedia — Diff', href: 'https://en.wikipedia.org/wiki/Diff' },
			{ label: 'GNU Diffutils manual', href: 'https://www.gnu.org/software/diffutils/manual/diffutils.html' },
			{ label: 'jsdiff (npm: diff)', href: 'https://github.com/kpdecker/jsdiff' },
		],
	});
	/** 客户端：加载 jsdiff，本地计算增删高亮与摘要。 */
	const extraBodyHtml = `
  <script src="/vendor/diff/diff.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script>
    (function () {
      /** 单侧粘贴软上限（字符），超出仍可对比但提示卡顿风险 */
      var SOFT_LIMIT = 100000;
      var textA = document.getElementById('textA');
      var textB = document.getElementById('textB');
      var diffOut = document.getElementById('diffOut');
      var diffSummary = document.getElementById('diffSummary');
      var diffWarn = document.getElementById('diffWarn');
      var ignoreWs = document.getElementById('ignoreWs');
      var normEol = document.getElementById('normEol');
      var btnCompare = document.getElementById('btnCompare');
      var btnSample = document.getElementById('btnSample');
      var btnSwap = document.getElementById('btnSwap');
      var btnClear = document.getElementById('btnClear');

      var msgEmpty = ${JSON.stringify(t(opts.lang, 'tool_text_diff_empty_hint'))};
      var msgNoDiff = ${JSON.stringify(t(opts.lang, 'tool_text_diff_no_diff'))};
      var msgLarge = ${JSON.stringify(t(opts.lang, 'tool_text_diff_large_warn'))};
      var msgSummary = ${JSON.stringify(t(opts.lang, 'tool_text_diff_summary'))};
      var msgNeedLib = ${JSON.stringify(t(opts.lang, 'tool_text_diff_need_lib'))};

      /** 读取当前 Diff 粒度：lines | words | chars */
      function getMode() {
        var el = document.querySelector('input[name="diffMode"]:checked');
        return el ? el.value : 'lines';
      }

      /**
       * 同步当前模式可用的选项。
       * 字符比较不支持忽略空白，切入时关闭并禁用该复选框，避免静默无效。
       */
      function syncModeOptions() {
        var characterMode = getMode() === 'chars';
        if (characterMode) ignoreWs.checked = false;
        ignoreWs.disabled = characterMode;
      }

      /** 规范化换行：CRLF / CR → LF */
      function normalizeNewlines(s) {
        return String(s || '').replace(/\\r\\n/g, '\\n').replace(/\\r/g, '\\n');
      }

      /** HTML 转义，避免粘贴内容注入 */
      function esc(s) {
        return String(s)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      }

      /**
       * 执行 Diff 并渲染高亮与摘要。
       * 依赖全局 Diff（jsdiff UMD）。
       */
      function runDiff() {
        if (typeof Diff === 'undefined') {
          diffOut.textContent = msgNeedLib;
          diffSummary.textContent = '';
          return;
        }

        var a = textA.value || '';
        var b = textB.value || '';
        if (!a && !b) {
          diffOut.textContent = '';
          diffSummary.textContent = msgEmpty;
          diffWarn.style.display = 'none';
          return;
        }

        if (a.length > SOFT_LIMIT || b.length > SOFT_LIMIT) {
          diffWarn.textContent = msgLarge;
          diffWarn.style.display = '';
        } else {
          diffWarn.style.display = 'none';
        }

        if (normEol.checked) {
          a = normalizeNewlines(a);
          b = normalizeNewlines(b);
        }

        var mode = getMode();
        var opts = { ignoreWhitespace: !!ignoreWs.checked };
        var parts;
        if (mode === 'words') {
          parts = ignoreWs.checked ? Diff.diffWords(a, b) : Diff.diffWordsWithSpace(a, b);
        }
        else if (mode === 'chars') parts = Diff.diffChars(a, b);
        else parts = Diff.diffLines(a, b, opts);

        var added = 0;
        var removed = 0;
        var html = '';
        for (var i = 0; i < parts.length; i++) {
          var p = parts[i];
          var cls = p.added ? 'diff-add' : p.removed ? 'diff-del' : 'diff-eq';
          if (p.added) added += 1;
          if (p.removed) removed += 1;
          html += '<span class="' + cls + '">' + esc(p.value) + '</span>';
        }
        diffOut.innerHTML = html;

        if (added === 0 && removed === 0) {
          diffSummary.textContent = msgNoDiff;
        } else {
          diffSummary.textContent = msgSummary
            .replace('{added}', String(added))
            .replace('{removed}', String(removed));
        }
      }

      /**
       * 载入本地化样例，并通过与主按钮相同的比较路径输出结果。
       */
      function loadSample() {
        textA.value = ${JSON.stringify(t(opts.lang, 'tool_text_diff_sample_a'))};
        textB.value = ${JSON.stringify(t(opts.lang, 'tool_text_diff_sample_b'))};
        runDiff();
      }

      btnCompare.addEventListener('click', runDiff);
      btnSample.addEventListener('click', loadSample);
      btnSwap.addEventListener('click', function () {
        var tmp = textA.value;
        textA.value = textB.value;
        textB.value = tmp;
        runDiff();
      });
      btnClear.addEventListener('click', function () {
        textA.value = '';
        textB.value = '';
        diffOut.innerHTML = '';
        diffSummary.textContent = msgEmpty;
        diffWarn.style.display = 'none';
      });
      ['change', 'input'].forEach(function (evt) {
        ignoreWs.addEventListener(evt, runDiff);
        normEol.addEventListener(evt, runDiff);
      });
      document.querySelectorAll('input[name="diffMode"]').forEach(function (el) {
        el.addEventListener('change', function () {
          syncModeOptions();
          runDiff();
        });
      });

      syncModeOptions();
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('text-diff');
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
		contentHtml: `${contentHtml}${igHtml}${toolSeoHtml}${referencesHtml}`,
		footerHtml,
		extraHeadHtml: `${extraHeadHtml}${toolJsonLd}`,
		extraBodyHtml,
		includeSidebarToggleScript: true,
		sidebarAutoCloseSelector: '#toolNav a',
	});
};
