/**
 * 中位数与众数计算器工具页。
 * slug: how-to-calculate-median（见 work-tasks/how-to-calculate-median/02-tool-info.md）。
 *
 * 交互要点（2026-10-15 改写）：
 * - 两种数据：数字列表（逗号 / 空格 / 换行分隔）与分组数据（每行「下限-上限 频数」的频数表）；
 * - 列表：排序后高亮中间值，写出奇数 / 偶数个时的位置推导；列出全部众数，或说明「无众数」；
 *   同时给出平均数、极差与「平均数被大 / 小值拉偏」的偏态提示；
 * - 分组：累计频数表 + 中位数组插值 L + (N/2 − cf) ÷ f × h、众数公式 L + (f₁ − f₀) ÷ (2f₁ − f₀ − f₂) × h、
 *   组中值平均数；不连续组限（10–19、20–29）自动按半个间隔换算为组界（9.5–19.5）。
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
	buildToolJsonLd,
	renderToolIgSections,
	renderToolReferencesSection,
} from './site/toolContent';

/** 本工具 i18n 键前缀。 */
const PREFIX = 'tool_median';

/**
 * 为路径加上语言前缀（默认语无前缀）。
 * @param lang 当前语言
 * @param pathname 站内路径
 * @param defaultLang 站点默认语言
 * @returns 带（或不带）语言前缀的路径
 */
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * 渲染 how-to-calculate-median 工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 * @returns 完整页面 HTML
 */
export const renderHowToCalculateMedianPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 读取本工具键（自动拼前缀）。 */
	const tx = (key: string) => t(opts.lang, `${PREFIX}_${key}` as keyof typeof import('../site/i18n/en').default);

	const toolPath = '/tools/how-to-calculate-median';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${tx('title')} | ${t(opts.lang, 'brand')}`;
	const description = tx('description');

	const navItems = buildToolPageNavItems(opts.lang, opts.defaultLang);

	/** 语言切换链接始终带显式语言前缀。 */
	const withExplicitLangPrefix = (code: SiteLang, pathname: string) => {
		const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
		return `/${code}${safe}`.replace(/\/{2,}/g, '/');
	};

	/** 语言切换器用的各语言链接。 */
	const langAlternates: Record<string, string> = Object.fromEntries(
		(supportedLangs || []).map((code) => [code, withExplicitLangPrefix(code, toolPath)])
	);

	/** hreflang 备用链接。 */
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
			currentSlug: 'how-to-calculate-median',
			currentAnchor: '#median',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	const extraHeadHtml = `
  <style>
    .tool-card { max-width: var(--content-max); width: 100%; margin: 0 0 1.5rem; }
    .form-label { display:block; margin-bottom:.5rem; color:#495057; font-weight:500 }
    .form-hint { display:block; color:#6c757d; font-size:.85rem; margin-top:.3rem; }
    .form-group { margin-bottom:1rem; }
    .btn-row { display:flex; flex-wrap:wrap; gap:.5rem; align-items:center; }
    .md-modes { display:flex; flex-wrap:wrap; gap:1rem; margin-bottom:.75rem; }
    .md-modes label { display:flex; align-items:center; gap:.35rem; cursor:pointer; }
    .result { background:#f8f9fa; padding:1rem; border-radius:8px; margin-top:1rem; }
    .md-main { font-size:1.6rem; font-weight:600; text-align:center; margin:.25rem 0 0; font-variant-numeric:tabular-nums; }
    .md-sub { text-align:center; color:#495057; font-size:.95rem; margin-top:.25rem; }
    .md-line { color:#495057; font-size:.92rem; margin-top:.6rem; }
    .md-sorted { display:flex; flex-wrap:wrap; gap:.3rem; margin-top:.35rem; font-variant-numeric:tabular-nums; }
    .md-sorted span { padding:.1rem .45rem; border:1px solid #dee2e6; border-radius:4px; background:#fff; font-size:.9rem; }
    .md-sorted span.md-mid { background:#e7f1ff; border-color:#86b7fe; font-weight:600; }
    .md-sorted span.md-gap { border:0; background:transparent; }
    .md-table-wrap { overflow-x:auto; margin-top:1rem; }
    .md-table { width:100%; border-collapse:collapse; font-size:.9rem; font-variant-numeric:tabular-nums; }
    .md-table th, .md-table td { padding:.35rem .5rem; border-bottom:1px solid #dee2e6; text-align:end; white-space:nowrap; }
    .md-table th:first-child, .md-table td:first-child { text-align:start; }
    .md-table tr.md-hit td { background:#e7f1ff; font-weight:600; }
    .result .muted { color:#6c757d; font-size:.9rem; margin-top:.75rem; }
  </style>`;

	const contentHtml = `
    <div id="median" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(tx('title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <form id="calcForm" novalidate>
          <div class="md-modes" role="radiogroup" aria-label="${escapeHtml(tx('mode_label'))}">
            <label><input type="radio" name="mdMode" id="mdModeList" value="list" checked> ${escapeHtml(tx('mode_list'))}</label>
            <label><input type="radio" name="mdMode" id="mdModeGrouped" value="grouped"> ${escapeHtml(tx('mode_grouped'))}</label>
          </div>
          <div class="form-group" id="mdListWrap">
            <label class="form-label" for="mdNums">${escapeHtml(tx('nums_label'))}</label>
            <textarea id="mdNums" class="input-lg" rows="3" style="min-height:4.5rem;resize:vertical;font-family:inherit"
              placeholder="${escapeHtml(tx('nums_ph'))}"></textarea>
            <span class="form-hint">${escapeHtml(tx('nums_hint'))}</span>
          </div>
          <div class="form-group" id="mdGroupWrap" style="display:none">
            <label class="form-label" for="mdGroups">${escapeHtml(tx('groups_label'))}</label>
            <textarea id="mdGroups" class="input-lg" rows="5" style="min-height:7rem;resize:vertical;font-family:inherit"
              placeholder="${escapeHtml(tx('groups_ph'))}"></textarea>
            <span class="form-hint">${escapeHtml(tx('groups_hint'))}</span>
          </div>
          <div class="btn-row">
            <button type="submit" id="mdBtnCalc" class="btn btn-primary">${escapeHtml(tx('calculate'))}</button>
            <button type="button" id="mdBtnSample" class="btn btn-outline-secondary">${escapeHtml(tx('sample'))}</button>
            <button type="button" id="mdBtnClear" class="btn btn-outline-secondary">${escapeHtml(tx('clear'))}</button>
          </div>
        </form>
        <div id="calcResult" class="result" style="display:none" aria-live="polite">
          <div class="md-sub">${escapeHtml(tx('medianOut_label'))}</div>
          <div id="mdMain" class="md-main"></div>
          <div id="mdCount" class="md-sub"></div>
          <div id="mdDetails">
            <div id="mdSortedRow" class="md-line"><strong>${escapeHtml(tx('sorted_label'))}:</strong><div id="mdSorted" class="md-sorted"></div></div>
            <div class="md-line"><strong>${escapeHtml(tx('work_label'))}:</strong> <span id="mdWork"></span></div>
            <div class="md-line"><strong>${escapeHtml(tx('modeOut_label'))}:</strong> <span id="mdMode"></span></div>
            <div class="md-line"><strong>${escapeHtml(tx('mean_label'))}:</strong> <span id="mdMean"></span></div>
            <div id="mdRangeRow" class="md-line"><strong>${escapeHtml(tx('range_label'))}:</strong> <span id="mdRange"></span></div>
            <div id="mdExtra" class="md-line"></div>
            <div id="mdTableWrap" class="md-table-wrap">
              <table class="md-table">
                <thead><tr>
                  <th scope="col">${escapeHtml(tx('col_class'))}</th>
                  <th scope="col">${escapeHtml(tx('col_f'))}</th>
                  <th scope="col">${escapeHtml(tx('col_cf'))}</th>
                  <th scope="col">${escapeHtml(tx('col_mid'))}</th>
                </tr></thead>
                <tbody id="mdBody"></tbody>
              </table>
            </div>
          </div>
          <div id="calcNote" class="muted"></div>
        </div>
      </div>
    </div>

    ${renderToolIgSections({
			lang: opts.lang,
			prefix: PREFIX,
			mode: 'formula',
			howItemCount: 4,
			whyChooseItemCount: 5,
			usecaseCount: 4,
			ruleItemCount: 5,
		})}`;

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: tx('ref_a_label'),
				href: 'https://www.itl.nist.gov/div898/handbook/eda/section3/eda351.htm',
			},
			{
				label: tx('ref_b_label'),
				href: 'https://en.wikipedia.org/wiki/Median#Median_for_grouped_data',
			},
		],
	});

	/** 前端脚本需要的文案（一次性注入）。 */
	const clientText = {
		errEmpty: tx('err_empty'),
		errToken: tx('err_token'),
		errLine: tx('err_line'),
		errOrder: tx('err_order'),
		errZero: tx('err_zero'),
		errMany: tx('err_many'),
		noteList: tx('note_list'),
		noteGrouped: tx('note_grouped'),
		count: tx('count_tpl'),
		total: tx('total_tpl'),
		odd: tx('odd_tpl'),
		even: tx('even_tpl'),
		modeOne: tx('mode_one_tpl'),
		modeMulti: tx('mode_multi_tpl'),
		modeNoneOnce: tx('mode_none_once'),
		modeNoneEqual: tx('mode_none_equal_tpl'),
		range: tx('range_tpl'),
		skewRight: tx('skew_right'),
		skewLeft: tx('skew_left'),
		gMedian: tx('g_median_tpl'),
		gMode: tx('g_mode_tpl'),
		gModeFlat: tx('g_mode_flat_tpl'),
		gModeMulti: tx('g_mode_multi_tpl'),
		gMean: tx('g_mean_tpl'),
		gBound: tx('g_bound_tpl'),
	};

	const extraBodyHtml = `
  <script>
    (function () {
      /** 表单与输入控件。 */
      var form = document.getElementById('calcForm');
      var modeListEl = document.getElementById('mdModeList');
      var modeGroupedEl = document.getElementById('mdModeGrouped');
      var listWrapEl = document.getElementById('mdListWrap');
      var groupWrapEl = document.getElementById('mdGroupWrap');
      var numsEl = document.getElementById('mdNums');
      var groupsEl = document.getElementById('mdGroups');
      /** 结果区各输出位。 */
      var result = document.getElementById('calcResult');
      var detailsEl = document.getElementById('mdDetails');
      var mainEl = document.getElementById('mdMain');
      var countEl = document.getElementById('mdCount');
      var sortedRowEl = document.getElementById('mdSortedRow');
      var sortedEl = document.getElementById('mdSorted');
      var workEl = document.getElementById('mdWork');
      var modeEl = document.getElementById('mdMode');
      var meanEl = document.getElementById('mdMean');
      var rangeRowEl = document.getElementById('mdRangeRow');
      var rangeEl = document.getElementById('mdRange');
      var extraEl = document.getElementById('mdExtra');
      var tableWrapEl = document.getElementById('mdTableWrap');
      var bodyEl = document.getElementById('mdBody');
      var noteEl = document.getElementById('calcNote');
      /** 当前页面语言（决定数字格式与小数逗号解析）。 */
      var LANG = ${JSON.stringify(opts.lang)};
      /** 本地化文案字典。 */
      var T = ${JSON.stringify(clientText)};
      /** 列表最多接受的数值个数。 */
      var MAX_VALUES = 10000;
      /** 分组数据最多接受的组数。 */
      var MAX_CLASSES = 100;
      /** 排序列表完整显示的上限（超过则只显示首尾与中间附近）。 */
      var SHOW_ALL = 300;
      /** 样例轮换：[模式, 文本]；首个与 Example 一致（点小数，进页时按本地写法转换）。 */
      var SAMPLES = [
        ['list', '12 5 8 3 9 7 41 7'],
        ['list', '2 4 4 5 7 7 9'],
        ['grouped', '0-10 5\\n10-20 8\\n20-30 12\\n30-40 9\\n40-50 6']
      ];
      /** 下一次点击「加载样例」使用的样例下标。 */
      var sampleIndex = 0;

      /** 数值格式器：列表最多 4 位小数，分组结果最多 2 位小数（拉丁数字）。 */
      var fmt4 = null;
      var fmt2 = null;
      try {
        fmt4 = new Intl.NumberFormat(LANG + '-u-nu-latn', { maximumFractionDigits: 4 });
        fmt2 = new Intl.NumberFormat(LANG + '-u-nu-latn', { maximumFractionDigits: 2 });
      } catch (e) {
        fmt4 = null;
      }
      /** 页面语言的小数点字符。 */
      var DEC = '.';
      try {
        var parts = new Intl.NumberFormat(LANG + '-u-nu-latn').formatToParts(1.5);
        for (var pi = 0; pi < parts.length; pi++) {
          if (parts[pi].type === 'decimal') DEC = parts[pi].value;
        }
      } catch (e) {
        DEC = '.';
      }

      /**
       * 用 split/join 替换 {name} 占位符。
       * @param {string} template 含占位符的文案
       * @param {Object<string, string|number>} map 占位符 → 替换值
       * @returns {string} 替换结果
       */
      function fill(template, map) {
        var s = String(template);
        for (var k in map) {
          if (Object.prototype.hasOwnProperty.call(map, k)) s = s.split('{' + k + '}').join(String(map[k]));
        }
        return s;
      }

      /**
       * 数值显示（最多 4 位小数）。
       * @param {number} n 数值
       * @returns {string} 本地格式文本
       */
      function num(n) {
        if (!Number.isFinite(n)) return '—';
        var v = Math.abs(n) < 1e-12 ? 0 : n;
        return fmt4 ? fmt4.format(v) : String(Math.round(v * 10000) / 10000);
      }

      /**
       * 分组结果显示（最多 2 位小数）。
       * @param {number} n 数值
       * @returns {string} 本地格式文本
       */
      function num2(n) {
        if (!Number.isFinite(n)) return '—';
        var v = Math.abs(n) < 1e-12 ? 0 : n;
        return fmt2 ? fmt2.format(v) : String(Math.round(v * 100) / 100);
      }

      /**
       * 解析一个数字记号（小数逗号语种把逗号视为小数点；支持 Unicode 减号）。
       * @param {string} token 记号
       * @returns {number} 数值；无效为 NaN
       */
      function toNumber(token) {
        var s = String(token).split('−').join('-');
        if (DEC === ',') s = s.replace(',', '.');
        if (s === '' || s === '-' || s === '.') return NaN;
        var v = Number(s);
        return Number.isFinite(v) ? v : NaN;
      }

      /**
       * 把列表文本切成记号：空白、分号、竖线始终是分隔符；小数点为「.」的语种逗号也是分隔符。
       * @param {string} raw 原始文本
       * @returns {string[]} 记号列表
       */
      function tokenize(raw) {
        var tokens = [];
        var cur = '';
        var text = String(raw || '');
        for (var i = 0; i < text.length; i++) {
          var ch = text.charAt(i);
          var code = text.charCodeAt(i);
          var sep = code <= 32 || code === 160 || code === 8239 || ch === ';' || ch === '|' || ch === '、' || ch === '，' || (ch === ',' && DEC === '.');
          if (sep) {
            if (cur) tokens.push(cur);
            cur = '';
          } else {
            cur += ch;
          }
        }
        if (cur) tokens.push(cur);
        return tokens;
      }

      /**
       * 列表统计：排序、中位数、众数、平均数、极差。
       * @returns {{ ok: boolean, error?: string, values?: Object }}
       */
      function computeList() {
        var tokens = tokenize(numsEl.value);
        if (!tokens.length) return { ok: false, error: T.errEmpty };
        if (tokens.length > MAX_VALUES) return { ok: false, error: T.errMany };
        var xs = [];
        for (var i = 0; i < tokens.length; i++) {
          var v = toNumber(tokens[i]);
          if (!Number.isFinite(v)) return { ok: false, error: fill(T.errToken, { token: tokens[i] }) };
          xs.push(v);
        }
        var s = xs.slice().sort(function (a, b) { return a - b; });
        var n = s.length;
        var median = n % 2 === 1 ? s[(n - 1) / 2] : (s[n / 2 - 1] + s[n / 2]) / 2;
        /** 频数统计（按排序后相邻相等计数）。 */
        var vals = [];
        var cnts = [];
        for (var j = 0; j < n; j++) {
          if (j > 0 && s[j] === s[j - 1]) cnts[cnts.length - 1]++;
          else {
            vals.push(s[j]);
            cnts.push(1);
          }
        }
        var maxC = Math.max.apply(null, cnts);
        var modes = [];
        for (var m = 0; m < vals.length; m++) if (cnts[m] === maxC) modes.push(vals[m]);
        var sum = 0;
        for (var q = 0; q < n; q++) sum += s[q];
        return { ok: true, values: { sorted: s, n: n, median: median, modes: modes, maxC: maxC, distinct: vals.length, mean: sum / n } };
      }

      /**
       * 解析分组数据：每行取出三个非负数「下限 上限 频数」。
       * @returns {{ ok: boolean, error?: string, rows?: Array<{lo:number, hi:number, f:number, label:string}> }}
       */
      function parseGroups() {
        var lines = String(groupsEl.value || '').split('\\n');
        var re = DEC === ',' ? /[0-9]+(?:[.,][0-9]+)?/g : /[0-9]+(?:[.][0-9]+)?/g;
        var rows = [];
        for (var i = 0; i < lines.length; i++) {
          var line = lines[i].trim();
          if (!line) continue;
          var found = line.match(re) || [];
          if (found.length !== 3) return { ok: false, error: fill(T.errLine, { line: line }) };
          var lo = toNumber(found[0]);
          var hi = toNumber(found[1]);
          var f = toNumber(found[2]);
          if (!(hi > lo) || !(f >= 0)) return { ok: false, error: fill(T.errLine, { line: line }) };
          rows.push({ lo: lo, hi: hi, f: f, label: num(lo) + '–' + num(hi) });
          if (rows.length > MAX_CLASSES) return { ok: false, error: T.errMany };
        }
        if (!rows.length) return { ok: false, error: T.errEmpty };
        for (var k = 1; k < rows.length; k++) {
          if (rows[k].lo < rows[k - 1].hi) return { ok: false, error: fill(T.errOrder, { line: rows[k].label }) };
        }
        return { ok: true, rows: rows };
      }

      /**
       * 分组统计：组界换算、累计频数、中位数、众数、组中值平均数。
       * @returns {{ ok: boolean, error?: string, values?: Object }}
       */
      function computeGrouped() {
        var p = parseGroups();
        if (!p.ok) return p;
        var rows = p.rows;
        /** 组限有统一间隔（如 10–19、20–29）时，上下各扩半个间隔得到组界。 */
        var gap = 0;
        if (rows.length > 1) {
          gap = rows[1].lo - rows[0].hi;
          for (var g = 2; g < rows.length; g++) {
            if (Math.abs(rows[g].lo - rows[g - 1].hi - gap) > 1e-9) gap = 0;
          }
          if (gap < 0 || gap > (rows[0].hi - rows[0].lo)) gap = 0;
        }
        var bounds = rows.map(function (r) {
          return { lo: r.lo - gap / 2, hi: r.hi + gap / 2, f: r.f, label: r.label };
        });
        var N = 0;
        for (var i = 0; i < bounds.length; i++) N += bounds[i].f;
        if (!(N > 0)) return { ok: false, error: T.errZero };
        /** 中位数组：累计频数首次达到 N/2 的组。 */
        var half = N / 2;
        var cf = 0;
        var mi = 0;
        var cfBefore = 0;
        var cfs = [];
        for (var j = 0; j < bounds.length; j++) {
          cf += bounds[j].f;
          cfs.push(cf);
        }
        for (var k = 0; k < bounds.length; k++) {
          if (cfs[k] >= half && bounds[k].f > 0) {
            mi = k;
            cfBefore = k > 0 ? cfs[k - 1] : 0;
            break;
          }
        }
        var mc = bounds[mi];
        var hM = mc.hi - mc.lo;
        var median = mc.lo + ((half - cfBefore) / mc.f) * hM;
        /** 众数组：频数最大的组（并列时全部列出）。 */
        var maxF = 0;
        for (var a = 0; a < bounds.length; a++) if (bounds[a].f > maxF) maxF = bounds[a].f;
        var modal = [];
        for (var b = 0; b < bounds.length; b++) if (bounds[b].f === maxF) modal.push(b);
        var mode = null;
        if (modal.length === 1) {
          var oi = modal[0];
          var f1 = bounds[oi].f;
          var f0 = oi > 0 ? bounds[oi - 1].f : 0;
          var f2 = oi < bounds.length - 1 ? bounds[oi + 1].f : 0;
          var den = 2 * f1 - f0 - f2;
          var hO = bounds[oi].hi - bounds[oi].lo;
          mode = { idx: oi, f1: f1, f0: f0, f2: f2, h: hO, L: bounds[oi].lo, flat: !(den > 0), v: den > 0 ? bounds[oi].lo + ((f1 - f0) / den) * hO : (bounds[oi].lo + bounds[oi].hi) / 2 };
        }
        var sfx = 0;
        for (var c = 0; c < bounds.length; c++) sfx += bounds[c].f * (bounds[c].lo + bounds[c].hi) / 2;
        return { ok: true, values: { rows: bounds, cfs: cfs, gap: gap, N: N, half: half, mi: mi, cfBefore: cfBefore, hM: hM, median: median, modal: modal, mode: mode, sfx: sfx, mean: sfx / N } };
      }

      /**
       * 渲染排序列表：中间值高亮；超过上限时只显示首尾各 10 个与中间附近。
       * @param {number[]} s 排序后数据
       */
      function renderSorted(s) {
        while (sortedEl.firstChild) sortedEl.removeChild(sortedEl.firstChild);
        var n = s.length;
        var midA = n % 2 === 1 ? (n - 1) / 2 : n / 2 - 1;
        var midB = n % 2 === 1 ? midA : n / 2;
        var show = [];
        if (n <= SHOW_ALL) {
          for (var i = 0; i < n; i++) show.push(i);
        } else {
          for (var a = 0; a < 10; a++) show.push(a);
          show.push(-1);
          for (var b = midA - 5; b <= midB + 5; b++) show.push(b);
          show.push(-1);
          for (var c = n - 10; c < n; c++) show.push(c);
        }
        for (var k = 0; k < show.length; k++) {
          var span = document.createElement('span');
          if (show[k] < 0) {
            span.className = 'md-gap';
            span.textContent = '…';
          } else {
            span.textContent = num(s[show[k]]);
            if (show[k] === midA || show[k] === midB) span.className = 'md-mid';
          }
          sortedEl.appendChild(span);
        }
      }

      /**
       * 渲染分组频数表：中位数组与众数组高亮。
       * @param {Object} v computeGrouped() 的 values
       */
      function renderTable(v) {
        while (bodyEl.firstChild) bodyEl.removeChild(bodyEl.firstChild);
        for (var i = 0; i < v.rows.length; i++) {
          var r = v.rows[i];
          var tr = document.createElement('tr');
          if (i === v.mi || (v.mode && i === v.mode.idx)) tr.className = 'md-hit';
          var label = v.gap > 0 ? r.label + ' (' + num(r.lo) + '–' + num(r.hi) + ')' : r.label;
          var cells = [label, num(r.f), num(v.cfs[i]), num((r.lo + r.hi) / 2)];
          for (var c = 0; c < cells.length; c++) {
            var td = document.createElement('td');
            td.textContent = cells[c];
            tr.appendChild(td);
          }
          bodyEl.appendChild(tr);
        }
      }

      /**
       * 输出列表结果。
       * @param {Object} v computeList() 的 values
       */
      function showList(v) {
        var s = v.sorted;
        var n = v.n;
        mainEl.textContent = num(v.median);
        countEl.textContent = fill(T.count, { n: n });
        sortedRowEl.style.display = '';
        renderSorted(s);
        if (n % 2 === 1) {
          workEl.textContent = fill(T.odd, { n: n, pos: (n + 1) / 2, v: num(v.median) });
        } else {
          workEl.textContent = fill(T.even, { n: n, a: n / 2, b: n / 2 + 1, x: num(s[n / 2 - 1]), y: num(s[n / 2]), v: num(v.median) });
        }
        if (v.maxC === 1) modeEl.textContent = T.modeNoneOnce;
        else if (v.modes.length === v.distinct && v.distinct > 1) modeEl.textContent = fill(T.modeNoneEqual, { c: v.maxC });
        else if (v.modes.length === 1) modeEl.textContent = fill(T.modeOne, { v: num(v.modes[0]), c: v.maxC });
        else modeEl.textContent = fill(T.modeMulti, { list: v.modes.map(num).join(', '), c: v.maxC });
        meanEl.textContent = num(v.mean);
        rangeRowEl.style.display = '';
        rangeEl.textContent = fill(T.range, { max: num(s[n - 1]), min: s[0] < 0 ? '(' + num(s[0]) + ')' : num(s[0]), r: num(s[n - 1] - s[0]) });
        /** 平均数与中位数相差超过极差的 10% 时提示偏态。 */
        var spread = s[n - 1] - s[0];
        var diff = v.mean - v.median;
        var extra = '';
        if (spread > 0 && Math.abs(diff) > spread * 0.1) extra = diff > 0 ? T.skewRight : T.skewLeft;
        extraEl.textContent = extra;
        extraEl.style.display = extra ? '' : 'none';
        tableWrapEl.style.display = 'none';
        noteEl.textContent = T.noteList;
      }

      /**
       * 输出分组结果。
       * @param {Object} v computeGrouped() 的 values
       */
      function showGrouped(v) {
        var mc = v.rows[v.mi];
        mainEl.textContent = num2(v.median);
        countEl.textContent = fill(T.total, { n: num(v.N) });
        sortedRowEl.style.display = 'none';
        workEl.textContent = fill(T.gMedian, {
          N: num(v.N), half: num(v.half), cls: mc.label, cf: num(v.cfBefore), f: num(mc.f), h: num(v.hM), L: num(mc.lo), v: num2(v.median),
        });
        if (v.mode && !v.mode.flat) {
          var oc = v.rows[v.mode.idx];
          modeEl.textContent = fill(T.gMode, {
            cls: oc.label, f1: num(v.mode.f1), f0: num(v.mode.f0), f2: num(v.mode.f2), L: num(v.mode.L), h: num(v.mode.h), v: num2(v.mode.v),
          });
        } else if (v.mode) {
          modeEl.textContent = fill(T.gModeFlat, { cls: v.rows[v.mode.idx].label, mid: num2(v.mode.v) });
        } else {
          modeEl.textContent = fill(T.gModeMulti, { list: v.modal.map(function (i) { return v.rows[i].label; }).join(', ') });
        }
        meanEl.textContent = fill(T.gMean, { sum: num(v.sfx), N: num(v.N), v: num2(v.mean) });
        rangeRowEl.style.display = 'none';
        var extra = v.gap > 0 ? fill(T.gBound, { gap: num(v.gap), lo: num(v.rows[0].lo), hi: num(v.rows[0].hi) }) : '';
        extraEl.textContent = extra;
        extraEl.style.display = extra ? '' : 'none';
        tableWrapEl.style.display = '';
        renderTable(v);
        noteEl.textContent = T.noteGrouped;
      }

      /** 执行计算并刷新结果区；失败时隐藏明细并显示具体错误。 */
      function runCalc() {
        var grouped = modeGroupedEl.checked;
        var out = grouped ? computeGrouped() : computeList();
        result.style.display = 'block';
        if (!out || !out.ok) {
          mainEl.textContent = '—';
          countEl.textContent = '';
          detailsEl.style.display = 'none';
          noteEl.textContent = (out && out.error) || T.errEmpty;
          return false;
        }
        detailsEl.style.display = '';
        if (grouped) showGrouped(out.values);
        else showList(out.values);
        return true;
      }

      /** 按当前模式切换显示列表框或频数表框。 */
      function syncMode() {
        var grouped = modeGroupedEl.checked;
        listWrapEl.style.display = grouped ? 'none' : '';
        groupWrapEl.style.display = grouped ? '' : 'none';
      }

      /**
       * 把样例里的点小数换成本地小数点。
       * @param {string} s 样例文本
       * @returns {string} 本地写法
       */
      function localize(s) {
        return DEC === '.' ? s : s.split('.').join(DEC);
      }

      /** 加载样例：依次轮换（首个与 Example 一致），并切到对应模式。 */
      function loadSample() {
        var smp = SAMPLES[sampleIndex];
        sampleIndex = (sampleIndex + 1) % SAMPLES.length;
        if (smp[0] === 'grouped') {
          modeGroupedEl.checked = true;
          groupsEl.value = localize(smp[1]);
        } else {
          modeListEl.checked = true;
          numsEl.value = localize(smp[1]);
        }
        syncMode();
        runCalc();
      }

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        runCalc();
      });
      modeListEl.addEventListener('change', function () {
        syncMode();
        result.style.display = 'none';
      });
      modeGroupedEl.addEventListener('change', function () {
        syncMode();
        result.style.display = 'none';
      });
      document.getElementById('mdBtnSample').addEventListener('click', loadSample);
      /** 清空：清空两个输入框、回到列表模式并隐藏结果，不重新加载样例。 */
      document.getElementById('mdBtnClear').addEventListener('click', function () {
        numsEl.value = '';
        groupsEl.value = '';
        modeListEl.checked = true;
        syncMode();
        result.style.display = 'none';
        numsEl.focus();
      });
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('how-to-calculate-median');
	const toolSeoHtml = toolMeta
		? renderToolExtraSections({ lang: opts.lang, defaultLang: opts.defaultLang, tool: toolMeta })
		: '';
	const toolJsonLd = toolMeta
		? buildToolJsonLd({
				lang: opts.lang,
				defaultLang: opts.defaultLang,
				tool: toolMeta,
				name: t(opts.lang, toolMeta.i18nKey as keyof typeof import('../site/i18n/en').default),
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
