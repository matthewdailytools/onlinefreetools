/**
 * JSON 语义 diff：默认忽略对象键序，路径级增删改。
 * slug: json-diff-checker-online。
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

/** 本工具 i18n 键前缀。 */
const PREFIX = 'tool_json_diff_checker_online';

/**
 * 为路径加上语言前缀。
 * @param lang 当前 UI 语言
 * @param pathname 路径
 * @param defaultLang 默认语言
 */
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * 读取本工具 i18n 后缀。
 * @param lang 语言
 * @param suffix 键后缀
 */
const tx = (lang: SiteLang, suffix: string) => t(lang, `${PREFIX}_${suffix}` as Parameters<typeof t>[1]);

/**
 * 渲染 JSON diff 工具页。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 默认语言
 * @param opts.enabledLangs 启用语言
 */
export const renderJsonDiffCheckerOnlinePage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 规范路径。 */
	const toolPath = '/tools/json-diff-checker-online';
	/** canonical。 */
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	/** title。 */
	const title = `${tx(opts.lang, 'title')} | ${t(opts.lang, 'brand')}`;
	/** description。 */
	const description = tx(opts.lang, 'description');
	/** 导航。 */
	const navItems = buildToolPageNavItems(opts.lang, opts.defaultLang);

	/**
	 * 语言切换带语言段。
	 * @param code 语言码
	 * @param pathname 路径
	 */
	const withExplicitLangPrefix = (code: SiteLang, pathname: string) => {
		const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
		return `/${code}${safe}`.replace(/\/{2,}/g, '/');
	};

	/** 语言菜单。 */
	const langAlternates: Record<string, string> = Object.fromEntries(
		(supportedLangs || []).map((code) => [code, withExplicitLangPrefix(code, toolPath)])
	);
	/** hreflang。 */
	const alternates: HreflangAlternate[] = (supportedLangs || []).map((code) => ({
		lang: code,
		href: `https://onlinefreetools.org${withLangPrefix(code, toolPath, opts.defaultLang)}`,
	}));
	/** 顶栏。 */
	const headerHtml = renderHeader({
		lang: opts.lang,
		brandHref: withLangPrefix(opts.lang, '/', opts.defaultLang),
		navItems,
		enabledLangs: supportedLangs,
		langAlternates,
	});
	/** 侧栏。 */
	const sidebarHtml = renderSidebar({
		title: t(opts.lang, 'nav_tools'),
		groups: buildToolSidebarItems({
			lang: opts.lang,
			defaultLang: opts.defaultLang,
			currentSlug: 'json-diff-checker-online',
			currentAnchor: '#json-diff',
		}),
		id: 'toolNav',
	});
	/** 页脚。 */
	const footerHtml = renderFooter({ lang: opts.lang });
	/** 双栏 JSON 样式。 */
	const extraHeadHtml = `
  <style>
    #jsonA, #jsonB { min-height: 180px; font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: .85rem; }
    #jsonDiffOut { min-height: 120px; max-height: 420px; overflow: auto; font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: .85rem; }
    .jd-add { color: #0f5132; background: #d1e7dd; }
    .jd-del { color: #842029; background: #f8d7da; }
    .jd-chg { color: #664d03; background: #fff3cd; }
  </style>`;

	/** 首屏双栏 JSON。 */
	const contentHtml = `
    <div id="json-diff" class="tool-hero">
      <h1 class="tool-title">${escapeHtml(tx(opts.lang, 'title'))}</h1>
      <p class="tool-lead">${escapeHtml(description)}</p>
    </div>
    <div class="tool-panel">
      <div class="d-flex flex-wrap gap-3 mb-3">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="jsonIgnoreKeys" checked>
          <label class="form-check-label" for="jsonIgnoreKeys">${escapeHtml(tx(opts.lang, 'ignore_keys'))}</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="jsonArraySet">
          <label class="form-check-label" for="jsonArraySet">${escapeHtml(tx(opts.lang, 'array_as_set'))}</label>
        </div>
      </div>
      <div class="row g-3 mb-3">
        <div class="col-12 col-lg-6">
          <label class="form-label" for="jsonA">${escapeHtml(tx(opts.lang, 'label_a'))}</label>
          <textarea id="jsonA" class="form-control" spellcheck="false"></textarea>
        </div>
        <div class="col-12 col-lg-6">
          <label class="form-label" for="jsonB">${escapeHtml(tx(opts.lang, 'label_b'))}</label>
          <textarea id="jsonB" class="form-control" spellcheck="false"></textarea>
        </div>
      </div>
      <div class="d-flex flex-wrap gap-2 mb-3">
        <button type="button" id="jsonBtnCompare" class="btn btn-primary btn-sm">${escapeHtml(tx(opts.lang, 'compare'))}</button>
        <button type="button" id="jsonBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx(opts.lang, 'load_sample'))}</button>
        <button type="button" id="jsonBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx(opts.lang, 'clear'))}</button>
      </div>
      <p id="jsonError" class="alert alert-danger py-2 small mb-2" style="display:none;" role="alert"></p>
      <p id="jsonSummary" class="small text-muted mb-2" aria-live="polite"></p>
      <pre id="jsonDiffOut" class="border rounded p-2 bg-white" aria-label="${escapeHtml(tx(opts.lang, 'result_label'))}"></pre>
    </div>`;

	/** IG 区块。 */
	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: PREFIX,
		mode: 'rules',
		usecaseCount: 3,
		ruleItemCount: 4,
		howItemCount: 4,
	});
	/** 权威引用。 */
	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{ label: 'json.org', href: 'https://www.json.org/json-en.html' },
			{ label: 'MDN JSON.parse', href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse' },
		],
	});

	/**
	 * 纯客户端路径 diff；进页 loadSample。
	 */
	const extraBodyHtml = `
  <script>
    (function () {
      /** 左侧 JSON。 */
      var elA = document.getElementById('jsonA');
      /** 右侧 JSON。 */
      var elB = document.getElementById('jsonB');
      /** 忽略键序。 */
      var ignoreKeys = document.getElementById('jsonIgnoreKeys');
      /** 数组当集合。 */
      var arraySet = document.getElementById('jsonArraySet');
      /** 对比。 */
      var btnCompare = document.getElementById('jsonBtnCompare');
      /** 样例。 */
      var btnSample = document.getElementById('jsonBtnSample');
      /** 清空。 */
      var btnClear = document.getElementById('jsonBtnClear');
      /** 错误。 */
      var errEl = document.getElementById('jsonError');
      /** 摘要。 */
      var summaryEl = document.getElementById('jsonSummary');
      /** 结果。 */
      var outEl = document.getElementById('jsonDiffOut');
      /** 文案。 */
      var msg = {
        empty: ${JSON.stringify(tx(opts.lang, 'empty'))},
        badA: ${JSON.stringify(tx(opts.lang, 'err_bad_a'))},
        badB: ${JSON.stringify(tx(opts.lang, 'err_bad_b'))},
        noDiff: ${JSON.stringify(tx(opts.lang, 'no_diff'))},
        summary: ${JSON.stringify(tx(opts.lang, 'summary'))},
        added: ${JSON.stringify(tx(opts.lang, 'op_added'))},
        removed: ${JSON.stringify(tx(opts.lang, 'op_removed'))},
        changed: ${JSON.stringify(tx(opts.lang, 'op_changed'))},
        sampleA: ${JSON.stringify(tx(opts.lang, 'sample_a'))},
        sampleB: ${JSON.stringify(tx(opts.lang, 'sample_b'))}
      };

      /**
       * 显示错误。
       * @param {string} text 文案
       */
      function showErr(text) {
        if (!text) { errEl.style.display = 'none'; errEl.textContent = ''; return; }
        errEl.textContent = text; errEl.style.display = '';
      }

      /**
       * HTML 转义。
       * @param {string} s 原文
       */
      function esc(s) {
        return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
      }

      /**
       * 规范化值：可选排序对象键、可选排序数组元素。
       * @param {*} v JSON 值
       * @param {boolean} sortKeys 忽略键序
       * @param {boolean} asSet 数组当集合
       */
      function canon(v, sortKeys, asSet) {
        if (v === null || typeof v !== 'object') return v;
        if (Array.isArray(v)) {
          var items = v.map(function (x) { return canon(x, sortKeys, asSet); });
          if (asSet) items = items.slice().sort(function (a, b) { return JSON.stringify(a).localeCompare(JSON.stringify(b)); });
          return items;
        }
        var keys = Object.keys(v);
        if (sortKeys) keys.sort();
        var o = {};
        for (var i = 0; i < keys.length; i++) o[keys[i]] = canon(v[keys[i]], sortKeys, asSet);
        return o;
      }

      /**
       * 深度相等（已规范化后）。
       * @param {*} a 左
       * @param {*} b 右
       */
      function eq(a, b) {
        return JSON.stringify(a) === JSON.stringify(b);
      }

      /**
       * 递归收集路径差。
       * @param {*} a 左
       * @param {*} b 右
       * @param {string} path JSON Pointer 风格
       * @param {Array} out 结果
       */
      function walk(a, b, path, out) {
        if (eq(a, b)) return;
        var ta = a === null ? 'null' : Array.isArray(a) ? 'array' : typeof a;
        var tb = b === null ? 'null' : Array.isArray(b) ? 'array' : typeof b;
        if (ta !== tb || (ta !== 'object' && ta !== 'array') || a === null || b === null) {
          if (a === undefined) out.push({ op: 'added', path: path, b: b });
          else if (b === undefined) out.push({ op: 'removed', path: path, a: a });
          else out.push({ op: 'changed', path: path, a: a, b: b });
          return;
        }
        if (ta === 'array') {
          var n = Math.max(a.length, b.length);
          for (var i = 0; i < n; i++) walk(a[i], b[i], path + '/' + i, out);
          return;
        }
        var keySet = {};
        Object.keys(a).forEach(function (k) { keySet[k] = 1; });
        Object.keys(b).forEach(function (k) { keySet[k] = 1; });
        Object.keys(keySet).sort().forEach(function (k) {
          var seg = path + '/' + String(k).replace(/~/g, '~0').replace(/\\//g, '~1');
          if (!(k in a)) out.push({ op: 'added', path: seg, b: b[k] });
          else if (!(k in b)) out.push({ op: 'removed', path: seg, a: a[k] });
          else walk(a[k], b[k], seg, out);
        });
      }

      /**
       * 解析并对比。
       */
      function runCompare() {
        showErr('');
        var sa = elA.value.trim();
        var sb = elB.value.trim();
        if (!sa && !sb) { outEl.textContent = ''; summaryEl.textContent = msg.empty; return; }
        var va, vb;
        try { va = JSON.parse(sa || 'null'); } catch (e) { showErr(msg.badA); outEl.textContent = ''; summaryEl.textContent = ''; return; }
        try { vb = JSON.parse(sb || 'null'); } catch (e) { showErr(msg.badB); outEl.textContent = ''; summaryEl.textContent = ''; return; }
        var sortKeys = !!ignoreKeys.checked;
        var asSet = !!arraySet.checked;
        var ca = canon(va, sortKeys, asSet);
        var cb = canon(vb, sortKeys, asSet);
        var diffs = [];
        walk(ca, cb, '', diffs);
        if (!diffs.length) { outEl.textContent = ''; summaryEl.textContent = msg.noDiff; return; }
        var html = '';
        var na = 0, nr = 0, nc = 0;
        for (var i = 0; i < diffs.length; i++) {
          var d = diffs[i];
          var cls = d.op === 'added' ? 'jd-add' : d.op === 'removed' ? 'jd-del' : 'jd-chg';
          var label = d.op === 'added' ? msg.added : d.op === 'removed' ? msg.removed : msg.changed;
          if (d.op === 'added') na += 1; else if (d.op === 'removed') nr += 1; else nc += 1;
          var line = (d.path || '/') + '  ' + label;
          if (d.op === 'changed') line += '  ' + JSON.stringify(d.a) + ' → ' + JSON.stringify(d.b);
          else if (d.op === 'added') line += '  ' + JSON.stringify(d.b);
          else line += '  ' + JSON.stringify(d.a);
          html += '<div class="' + cls + '">' + esc(line) + '</div>';
        }
        outEl.innerHTML = html;
        summaryEl.textContent = msg.summary.replace('{added}', String(na)).replace('{removed}', String(nr)).replace('{changed}', String(nc));
      }

      /**
       * 进页样例：键序不同但值相同，应显示无差；同时右侧改 price 以展示路径。
       * 实际样例用 i18n 两段 JSON（B 含 price 变化）。
       */
      function loadSample() {
        elA.value = msg.sampleA;
        elB.value = msg.sampleB;
        runCompare();
      }

      btnCompare.addEventListener('click', runCompare);
      btnSample.addEventListener('click', loadSample);
      btnClear.addEventListener('click', function () {
        elA.value = ''; elB.value = ''; outEl.innerHTML = ''; summaryEl.textContent = msg.empty; showErr('');
      });
      ignoreKeys.addEventListener('change', runCompare);
      arraySet.addEventListener('change', runCompare);
      if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', loadSample);
      else loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('json-diff-checker-online');
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
