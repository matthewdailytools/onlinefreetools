/**
 * 现值（PV）/ 终值（FV）计算器工具页。
 * slug: how-to-calculate-present-value（见 work-tasks/how-to-calculate-present-value/02-tool-info.md）。
 *
 * 交互要点（2026-10-15 改写）：
 * - 两种方向：由终值求现值 / 由现值求终值；一次性金额与每期付款（年金）可单独或同时填写；
 * - 复利频率：每年 / 每半年 / 每季 / 每月 / 每日 / 连续复利（连续复利只用于一次性金额）；
 * - 付款时点：期末（普通年金）或期初（先付年金，付款部分 × (1 + i)）；
 * - 写出 i = r ÷ m、N = m × t、(1 + i)^N、一次性金额与付款两部分的代入算式，以及实际年利率；
 * - 利率 ±1 个百分点的敏感度、收付总额与利息差额，以及逐年余额表（末行回到目标金额以便验算）。
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
const PREFIX = 'tool_present_value';

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
 * 渲染 how-to-calculate-present-value 工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 * @returns 完整页面 HTML
 */
export const renderHowToCalculatePresentValuePage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 读取本工具键（自动拼前缀）。 */
	const tx = (key: string) => t(opts.lang, `${PREFIX}_${key}` as keyof typeof import('../site/i18n/en').default);

	const toolPath = '/tools/how-to-calculate-present-value';
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
			currentSlug: 'how-to-calculate-present-value',
			currentAnchor: '#present-value',
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
    .form-row { display:grid; grid-template-columns:1fr 1fr 1fr; gap:1rem; }
    @media (max-width:768px) { .form-row { grid-template-columns:1fr; } }
    .btn-row { display:flex; flex-wrap:wrap; gap:.5rem; align-items:center; }
    .result { background:#f8f9fa; padding:1rem; border-radius:8px; margin-top:1rem; }
    .pv-main { font-size:1.6rem; font-weight:600; text-align:center; margin:.25rem 0 0; font-variant-numeric:tabular-nums; }
    .pv-sub { text-align:center; color:#495057; font-size:.95rem; margin-top:.25rem; }
    .pv-line { color:#495057; font-size:.92rem; margin-top:.6rem; }
    .pv-work div { margin-top:.2rem; font-variant-numeric:tabular-nums; }
    .pv-table-wrap { overflow-x:auto; margin-top:1rem; }
    .pv-caption { color:#495057; font-size:.88rem; margin:0 0 .35rem; }
    .pv-table { width:100%; border-collapse:collapse; font-size:.9rem; font-variant-numeric:tabular-nums; }
    .pv-table th, .pv-table td { padding:.35rem .5rem; border-bottom:1px solid #dee2e6; text-align:end; white-space:nowrap; }
    .pv-table th:first-child, .pv-table td:first-child { text-align:start; }
    .pv-table td.pv-neg { color:#b02a37; }
    .result .muted { color:#6c757d; font-size:.9rem; margin-top:.75rem; }
  </style>`;

	const contentHtml = `
    <div id="present-value" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(tx('title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <form id="calcForm" novalidate>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label" for="pvMode">${escapeHtml(tx('mode_label'))}</label>
              <select id="pvMode" class="input-lg">
                <option value="pv" selected>${escapeHtml(tx('mode_pv'))}</option>
                <option value="fv">${escapeHtml(tx('mode_fv'))}</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label" for="pvAmount" id="pvAmountLabel">${escapeHtml(tx('amount_label_pv'))}</label>
              <input id="pvAmount" class="input-lg" type="text" inputmode="decimal" autocomplete="off" placeholder="${escapeHtml(tx('amount_ph'))}">
            </div>
            <div class="form-group">
              <label class="form-label" for="pvPmt" id="pvPmtLabel">${escapeHtml(tx('pmt_label_pv'))}</label>
              <input id="pvPmt" class="input-lg" type="text" inputmode="decimal" autocomplete="off" placeholder="${escapeHtml(tx('pmt_ph'))}">
              <span class="form-hint">${escapeHtml(tx('pmt_hint'))}</span>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label" for="pvRate">${escapeHtml(tx('rate_label'))}</label>
              <input id="pvRate" class="input-lg" type="text" inputmode="decimal" autocomplete="off" placeholder="${escapeHtml(tx('rate_ph'))}">
            </div>
            <div class="form-group">
              <label class="form-label" for="pvYears">${escapeHtml(tx('years_label'))}</label>
              <input id="pvYears" class="input-lg" type="text" inputmode="decimal" autocomplete="off" placeholder="${escapeHtml(tx('years_ph'))}">
            </div>
            <div class="form-group">
              <label class="form-label" for="pvComp">${escapeHtml(tx('comp_label'))}</label>
              <select id="pvComp" class="input-lg">
                <option value="1" selected>${escapeHtml(tx('comp_1'))}</option>
                <option value="2">${escapeHtml(tx('comp_2'))}</option>
                <option value="4">${escapeHtml(tx('comp_4'))}</option>
                <option value="12">${escapeHtml(tx('comp_12'))}</option>
                <option value="365">${escapeHtml(tx('comp_365'))}</option>
                <option value="0">${escapeHtml(tx('comp_cont'))}</option>
              </select>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label" for="pvTiming">${escapeHtml(tx('timing_label'))}</label>
              <select id="pvTiming" class="input-lg">
                <option value="end" selected>${escapeHtml(tx('timing_end'))}</option>
                <option value="begin">${escapeHtml(tx('timing_begin'))}</option>
              </select>
            </div>
          </div>
          <div class="btn-row">
            <button type="submit" id="pvBtnCalc" class="btn btn-primary">${escapeHtml(tx('calculate'))}</button>
            <button type="button" id="pvBtnSample" class="btn btn-outline-secondary">${escapeHtml(tx('sample'))}</button>
            <button type="button" id="pvBtnClear" class="btn btn-outline-secondary">${escapeHtml(tx('clear'))}</button>
          </div>
        </form>
        <div id="calcResult" class="result" style="display:none" aria-live="polite">
          <div id="pvMainLabel" class="pv-sub"></div>
          <div id="pvMain" class="pv-main"></div>
          <div id="pvMainSub" class="pv-sub"></div>
          <div id="pvDetails">
            <div class="pv-line"><strong>${escapeHtml(tx('work_label'))}:</strong><div id="pvWork" class="pv-work"></div></div>
            <div id="pvEarRow" class="pv-line"><strong>${escapeHtml(tx('ear_label'))}:</strong> <span id="pvEar"></span></div>
            <div class="pv-line"><strong>${escapeHtml(tx('total_label'))}:</strong> <span id="pvTotal"></span></div>
            <div id="pvSensRow" class="pv-line"><strong>${escapeHtml(tx('sens_label'))}:</strong> <span id="pvSens"></span></div>
            <div class="pv-table-wrap">
              <p id="pvCaption" class="pv-caption"></p>
              <table class="pv-table">
                <thead><tr>
                  <th scope="col">${escapeHtml(tx('col_year'))}</th>
                  <th scope="col">${escapeHtml(tx('col_interest'))}</th>
                  <th scope="col">${escapeHtml(tx('col_flow'))}</th>
                  <th scope="col">${escapeHtml(tx('col_balance'))}</th>
                </tr></thead>
                <tbody id="pvBody"></tbody>
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
				href: 'https://www.investopedia.com/terms/p/presentvalue.asp',
			},
			{
				label: tx('ref_b_label'),
				href: 'https://support.microsoft.com/en-us/office/pv-function-23879d31-0e02-4321-be01-da16e8168cbd',
			},
		],
	});

	/** 前端脚本需要的文案（一次性注入）。 */
	const clientText = {
		amountPv: tx('amount_label_pv'),
		amountFv: tx('amount_label_fv'),
		pmtPv: tx('pmt_label_pv'),
		pmtFv: tx('pmt_label_fv'),
		outPv: tx('out_pv'),
		outFv: tx('out_fv'),
		sub: tx('sub_tpl'),
		comp: {
			'1': tx('comp_1'),
			'2': tx('comp_2'),
			'4': tx('comp_4'),
			'12': tx('comp_12'),
			'365': tx('comp_365'),
			'0': tx('comp_cont'),
		},
		rate: tx('rate_tpl'),
		cont: tx('cont_tpl'),
		lumpPv: tx('lump_pv_tpl'),
		lumpFv: tx('lump_fv_tpl'),
		annPv: tx('ann_pv_tpl'),
		annFv: tx('ann_fv_tpl'),
		annZero: tx('ann_zero_tpl'),
		due: tx('due_tpl'),
		sum: tx('sum_tpl'),
		totalPv: tx('total_pv_tpl'),
		totalFv: tx('total_fv_tpl'),
		sens: tx('sens_tpl'),
		capPv: tx('table_pv_note'),
		capPvLump: tx('table_pv_lump_note'),
		capFv: tx('table_fv_note'),
		errAmount: tx('err_amount'),
		errRate: tx('err_rate'),
		errYears: tx('err_years'),
		errWhole: tx('err_whole'),
		note: tx('result_note'),
	};

	const extraBodyHtml = `
  <script>
    (function () {
      /** 表单与输入控件。 */
      var form = document.getElementById('calcForm');
      var modeEl = document.getElementById('pvMode');
      var amountEl = document.getElementById('pvAmount');
      var amountLabelEl = document.getElementById('pvAmountLabel');
      var pmtEl = document.getElementById('pvPmt');
      var pmtLabelEl = document.getElementById('pvPmtLabel');
      var rateEl = document.getElementById('pvRate');
      var yearsEl = document.getElementById('pvYears');
      var compEl = document.getElementById('pvComp');
      var timingEl = document.getElementById('pvTiming');
      /** 结果区各输出位。 */
      var result = document.getElementById('calcResult');
      var detailsEl = document.getElementById('pvDetails');
      var mainLabelEl = document.getElementById('pvMainLabel');
      var mainEl = document.getElementById('pvMain');
      var mainSubEl = document.getElementById('pvMainSub');
      var workEl = document.getElementById('pvWork');
      var earRowEl = document.getElementById('pvEarRow');
      var earEl = document.getElementById('pvEar');
      var totalEl = document.getElementById('pvTotal');
      var sensRowEl = document.getElementById('pvSensRow');
      var sensEl = document.getElementById('pvSens');
      var captionEl = document.getElementById('pvCaption');
      var bodyEl = document.getElementById('pvBody');
      var noteEl = document.getElementById('calcNote');
      /** 当前页面语言（决定数字格式与小数逗号解析）。 */
      var LANG = ${JSON.stringify(opts.lang)};
      /** 本地化文案字典。 */
      var T = ${JSON.stringify(clientText)};
      /** 年数上限。 */
      var MAX_YEARS = 200;
      /** 逐年表最多显示的行数（超出时省略中间、保留末行）。 */
      var MAX_ROWS = 100;
      /** 样例轮换：[方向, 一次性金额, 每期付款, 年利率%, 年数, 复利频率, 付款时点]；首个与 Example 一致。 */
      var SAMPLES = [
        ['pv', '10000', '', '5', '5', '1', 'end'],
        ['pv', '', '500', '6', '10', '12', 'end'],
        ['fv', '5000', '200', '7', '20', '12', 'end']
      ];
      /** 下一次点击「加载样例」使用的样例下标。 */
      var sampleIndex = 0;

      /** 金额 / 百分比 / 系数 / 普通数字格式器（拉丁数字）。 */
      var centsFormat = null;
      var pctFormat = null;
      var pctFineFormat = null;
      var factorFormat = null;
      var numFormat = null;
      try {
        centsFormat = new Intl.NumberFormat(LANG + '-u-nu-latn', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        pctFormat = new Intl.NumberFormat(LANG + '-u-nu-latn', { style: 'percent', maximumFractionDigits: 2 });
        pctFineFormat = new Intl.NumberFormat(LANG + '-u-nu-latn', { style: 'percent', maximumFractionDigits: 4 });
        factorFormat = new Intl.NumberFormat(LANG + '-u-nu-latn', { maximumFractionDigits: 6 });
        numFormat = new Intl.NumberFormat(LANG + '-u-nu-latn', { maximumFractionDigits: 2 });
      } catch (e) {
        centsFormat = null;
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
       * 金额显示：固定 2 位小数（负数保留负号）。
       * @param {number} n 金额
       * @returns {string} 本地格式文本
       */
      function money(n) {
        if (!Number.isFinite(n)) return '—';
        var v = Math.round(n * 100) / 100;
        if (Math.abs(v) < 0.005) v = 0;
        return centsFormat ? centsFormat.format(v) : v.toFixed(2);
      }

      /**
       * 百分比显示（最多 2 位小数；输入为小数）。
       * @param {number} r 比率（0.05 → 5%）
       * @returns {string} 本地格式文本
       */
      function pct(r) {
        if (!Number.isFinite(r)) return '—';
        return pctFormat ? pctFormat.format(r) : Math.round(r * 10000) / 100 + '%';
      }

      /**
       * 每期利率显示（最多 4 位小数，如 0.4167%）。
       * @param {number} r 比率
       * @returns {string} 本地格式文本
       */
      function pctFine(r) {
        return pctFineFormat ? pctFineFormat.format(r) : Math.round(r * 1e6) / 1e4 + '%';
      }

      /**
       * 复利系数 / 年金系数显示（最多 6 位小数）。
       * @param {number} n 系数
       * @returns {string} 本地格式文本
       */
      function factor(n) {
        return factorFormat ? factorFormat.format(n) : String(Math.round(n * 1e6) / 1e6);
      }

      /**
       * 普通数字显示（年数、期数；最多 2 位小数）。
       * @param {number} n 数字
       * @returns {string} 本地格式文本
       */
      function num(n) {
        return numFormat ? numFormat.format(n) : String(Math.round(n * 100) / 100);
      }

      /**
       * 解析单个数值输入：去掉货币符号、百分号、空格与撇号；英文类页面逗号是千分位，小数逗号语种逗号是小数点。
       * @param {string} raw 原始输入
       * @returns {number|null} 数值；留空返回 null；无效返回 NaN
       */
      function parseNum(raw) {
        var s = '';
        var text = String(raw || '');
        for (var i = 0; i < text.length; i++) {
          var ch = text.charAt(i);
          var code = text.charCodeAt(i);
          if ('$€£¥₹₩₽%'.indexOf(ch) >= 0 || code === 32 || code === 39 || code === 8217 || code === 160 || code === 8239 || code === 9) continue;
          if (ch === '−') ch = '-';
          s += ch;
        }
        if (s === '') return null;
        if (DEC === ',') {
          if (/^-?[0-9]{1,3}([.][0-9]{3})+(,[0-9]+)?$/.test(s)) s = s.split('.').join('');
          s = s.replace(',', '.');
        } else if (/^-?[0-9]{1,3}(,[0-9]{3})+([.][0-9]+)?$/.test(s)) {
          s = s.split(',').join('');
        }
        if (!/^-?([0-9]+([.][0-9]*)?|[.][0-9]+)$/.test(s)) return NaN;
        return Number(s);
      }

      /**
       * 计算 k 期后的账户余额（闭式公式）。
       * @param {Object} v compute 返回的参数
       * @param {number} k 已过期数（连续复利时为年数）
       * @returns {number} 余额
       */
      function balanceAt(v, k) {
        if (v.m === 0) return v.start * Math.exp(v.r * k);
        var g = Math.pow(1 + v.i, k);
        var s = v.i === 0 ? k : (g - 1) / v.i;
        if (v.due) s *= 1 + v.i;
        return v.start * g + v.sign * v.pmt * s;
      }

      /**
       * 按给定年利率计算主结果（用于敏感度对比）。
       * @param {Object} v compute 返回的参数
       * @param {number} r 名义年利率（小数）
       * @returns {number} 现值或终值
       */
      function valueAtRate(v, r) {
        if (v.m === 0) {
          var gc = Math.exp(r * v.t);
          return v.mode === 'pv' ? v.amt / gc : v.amt * gc;
        }
        var i = r / v.m;
        var g = Math.pow(1 + i, v.N);
        var lump = v.mode === 'pv' ? v.amt / g : v.amt * g;
        var af = i === 0 ? v.N : v.mode === 'pv' ? (1 - 1 / g) / i : (g - 1) / i;
        if (v.due) af *= 1 + i;
        return lump + v.pmt * af;
      }

      /**
       * 读取输入并计算。
       * @returns {{ ok: boolean, error?: string, values?: Object }}
       */
      function compute() {
        var mode = modeEl.value === 'fv' ? 'fv' : 'pv';
        var m = Number(compEl.value);
        var amt = parseNum(amountEl.value);
        var pmt = m === 0 ? null : parseNum(pmtEl.value);
        var ratePct = parseNum(rateEl.value);
        var t = parseNum(yearsEl.value);
        if (amt == null) amt = 0;
        if (pmt == null) pmt = 0;
        if (!Number.isFinite(amt) || !Number.isFinite(pmt) || amt < 0 || pmt < 0 || !(amt > 0 || pmt > 0)) return { ok: false, error: T.errAmount };
        if (ratePct == null || !Number.isFinite(ratePct) || !(ratePct > -100) || ratePct > 1000) return { ok: false, error: T.errRate };
        if (t == null || !Number.isFinite(t) || !(t > 0) || t > MAX_YEARS) return { ok: false, error: T.errYears };
        var r = ratePct / 100;
        var due = timingEl.value === 'begin';
        if (m === 0) {
          var gc = Math.exp(r * t);
          var lumpC = mode === 'pv' ? amt / gc : amt * gc;
          return { ok: true, values: { mode: mode, m: 0, amt: amt, pmt: 0, r: r, t: t, due: false, g: gc, lump: lumpC, ann: 0, total: lumpC } };
        }
        var N = m * t;
        if (pmt > 0 && Math.abs(N - Math.round(N)) > 1e-9) return { ok: false, error: T.errWhole };
        if (pmt > 0) N = Math.round(N);
        var i = r / m;
        var g = Math.pow(1 + i, N);
        var lump = mode === 'pv' ? amt / g : amt * g;
        var af0 = i === 0 ? N : mode === 'pv' ? (1 - 1 / g) / i : (g - 1) / i;
        var ann0 = pmt * af0;
        var ann = due ? ann0 * (1 + i) : ann0;
        return { ok: true, values: { mode: mode, m: m, amt: amt, pmt: pmt, r: r, t: t, due: due, i: i, N: N, g: g, lump: lump, af0: af0, ann0: ann0, ann: ann, total: lump + ann } };
      }

      /**
       * 写出代入数字的计算过程（每行一个 div）。
       * @param {Object} v compute 返回的参数
       */
      function renderWork(v) {
        var lines = [];
        if (v.m === 0) {
          lines.push(fill(T.cont, { r: pct(v.r), t: num(v.t), g: factor(v.g) }));
        } else {
          lines.push(fill(T.rate, { r: pct(v.r), m: v.m, i: pctFine(v.i), t: num(v.t), N: num(v.N), g: factor(v.g) }));
        }
        if (v.amt > 0) {
          lines.push(fill(v.mode === 'pv' ? T.lumpPv : T.lumpFv, { a: money(v.amt), g: factor(v.g), v: money(v.lump) }));
        }
        if (v.pmt > 0) {
          if (v.i === 0) {
            lines.push(fill(T.annZero, { p: money(v.pmt), N: num(v.N), v: money(v.ann0) }));
          } else {
            lines.push(fill(v.mode === 'pv' ? T.annPv : T.annFv, { p: money(v.pmt), g: factor(v.g), i: pctFine(v.i), af: factor(v.af0), v: money(v.ann0) }));
          }
          if (v.due) lines.push(fill(T.due, { a: money(v.ann0), i: pctFine(v.i), v: money(v.ann) }));
          if (v.amt > 0) lines.push(fill(T.sum, { a: money(v.lump), b: money(v.ann), v: money(v.total) }));
        }
        while (workEl.firstChild) workEl.removeChild(workEl.firstChild);
        for (var j = 0; j < lines.length; j++) {
          var div = document.createElement('div');
          div.textContent = lines[j];
          workEl.appendChild(div);
        }
      }

      /**
       * 逐年余额表：PV 方向从现值起步、每期取出付款，末行回到终值；FV 方向从现值起步、每期存入付款。
       * @param {Object} v compute 返回的参数
       */
      function renderTable(v) {
        while (bodyEl.firstChild) bodyEl.removeChild(bodyEl.firstChild);
        v.start = v.mode === 'pv' ? v.total : v.amt;
        v.sign = v.mode === 'pv' ? -1 : 1;
        captionEl.textContent = v.mode === 'fv' ? T.capFv : v.pmt > 0 ? T.capPv : T.capPvLump;
        var marks = [];
        var whole = Math.floor(v.t + 1e-9);
        for (var y = 1; y <= whole; y++) marks.push(y);
        if (v.t - whole > 1e-9) marks.push(v.t);
        var prevBal = v.start;
        var prevK = 0;
        for (var j = 0; j < marks.length; j++) {
          var yr = marks[j];
          var k = v.m === 0 ? yr : j === marks.length - 1 ? v.N : v.m * yr;
          var bal = j === marks.length - 1 ? (v.mode === 'pv' ? v.amt : v.total) : balanceAt(v, k);
          var flow = v.m === 0 ? 0 : v.sign * v.pmt * (k - prevK);
          var interest = bal - prevBal - flow;
          prevBal = bal;
          prevK = k;
          if (j >= MAX_ROWS - 1 && j !== marks.length - 1) continue;
          var tr = document.createElement('tr');
          var label = num(yr);
          if (j === marks.length - 1 && j >= MAX_ROWS) label = '… ' + label;
          var cells = [label, money(interest), money(flow), money(bal)];
          for (var c = 0; c < cells.length; c++) {
            var td = document.createElement('td');
            td.textContent = cells[c];
            if (c > 0 && /^-/.test(cells[c])) td.className = 'pv-neg';
            tr.appendChild(td);
          }
          bodyEl.appendChild(tr);
        }
      }

      /** 执行计算并刷新结果区；失败时隐藏明细并显示具体错误。 */
      function runCalc() {
        var out = compute();
        result.style.display = 'block';
        mainLabelEl.textContent = modeEl.value === 'fv' ? T.outFv : T.outPv;
        if (!out || !out.ok) {
          mainEl.textContent = '—';
          mainSubEl.textContent = '';
          detailsEl.style.display = 'none';
          noteEl.textContent = (out && out.error) || T.errAmount;
          return false;
        }
        var v = out.values;
        mainEl.textContent = money(v.total);
        mainSubEl.textContent = fill(T.sub, { r: pct(v.r), comp: T.comp[String(v.m)], t: num(v.t) });
        renderWork(v);
        /** 实际年利率：仅当不是每年复利一次时显示。 */
        if (v.m !== 1) {
          earRowEl.style.display = '';
          earEl.textContent = pct(v.m === 0 ? Math.exp(v.r) - 1 : Math.pow(1 + v.i, v.m) - 1);
        } else {
          earRowEl.style.display = 'none';
        }
        /** 名义收付总额：PV 方向为将来收到的总额，FV 方向为投入的总额。 */
        var paid = v.amt + v.pmt * (v.N || 0);
        totalEl.textContent = fill(v.mode === 'pv' ? T.totalPv : T.totalFv, { total: money(paid), v: money(v.total), d: money(Math.abs(paid - v.total)) });
        /** 敏感度：利率 −1 / +1 个百分点（下限必须高于 −100%）。 */
        var lo = v.r - 0.01;
        var hi = v.r + 0.01;
        if (lo > -1) {
          sensRowEl.style.display = '';
          sensEl.textContent = fill(T.sens, { r1: pct(lo), v1: money(valueAtRate(v, lo)), r2: pct(hi), v2: money(valueAtRate(v, hi)) });
        } else {
          sensRowEl.style.display = 'none';
        }
        renderTable(v);
        detailsEl.style.display = '';
        noteEl.textContent = T.note;
        return true;
      }

      /** 按方向切换金额 / 付款标签；连续复利时禁用付款与付款时点。 */
      function syncLabels() {
        var fv = modeEl.value === 'fv';
        amountLabelEl.textContent = fv ? T.amountFv : T.amountPv;
        pmtLabelEl.textContent = fv ? T.pmtFv : T.pmtPv;
        var cont = compEl.value === '0';
        pmtEl.disabled = cont;
        timingEl.disabled = cont;
      }

      /**
       * 把样例里的点小数换成本地小数点。
       * @param {string} s 样例文本
       * @returns {string} 本地写法
       */
      function localize(s) {
        return DEC === '.' ? s : s.split('.').join(DEC);
      }

      /** 加载样例：依次轮换（首个与 Example 一致）。 */
      function loadSample() {
        var smp = SAMPLES[sampleIndex];
        sampleIndex = (sampleIndex + 1) % SAMPLES.length;
        modeEl.value = smp[0];
        amountEl.value = localize(smp[1]);
        pmtEl.value = localize(smp[2]);
        rateEl.value = localize(smp[3]);
        yearsEl.value = localize(smp[4]);
        compEl.value = smp[5];
        timingEl.value = smp[6];
        syncLabels();
        runCalc();
      }

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        runCalc();
      });
      modeEl.addEventListener('change', syncLabels);
      compEl.addEventListener('change', syncLabels);
      document.getElementById('pvBtnSample').addEventListener('click', loadSample);
      /** 清空：只清输入、恢复默认选项并隐藏结果，不重新加载样例。 */
      document.getElementById('pvBtnClear').addEventListener('click', function () {
        amountEl.value = '';
        pmtEl.value = '';
        rateEl.value = '';
        yearsEl.value = '';
        modeEl.value = 'pv';
        compEl.value = '1';
        timingEl.value = 'end';
        syncLabels();
        result.style.display = 'none';
        amountEl.focus();
      });
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('how-to-calculate-present-value');
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
