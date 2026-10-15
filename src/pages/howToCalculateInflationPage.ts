/**
 * 通胀计算器工具页。
 * slug: how-to-calculate-inflation（见 work-tasks/how-to-calculate-inflation/02-tool-info.md）。
 *
 * 交互要点（2026-10-15 改写）：
 * - 两种模式：美国 CPI 历年换算（1913–2025 年均 CPI-U，取自明尼阿波利斯联储表）/ 固定年通胀率推算未来价格（任意货币）；
 * - CPI 模式：等值金额、累计涨幅与年均通胀率、1 美元购买力、区间内最高 / 最低年度通胀（官方表的年度百分比）；
 * - 固定通胀率模式：未来价格、购买力缩水、物价翻倍年数（附 70 法则）、逐年表（年数多时按 5 年抽样）；
 * - 两种模式都可填「实际金额」（如工资、存款），给出名义变化与实际（扣除通胀）变化，回答「有没有跑赢通胀」；
 * - 输入容错：千分位、小数逗号；年份相同、金额非正、通胀率越界、年数非整数等分别提示。
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
const PREFIX = 'tool_inflation';

/** CPI 数据起始年份。 */
const CPI_FIRST_YEAR = 1913;

/**
 * 美国年均 CPI（1913–2025，逐年），来源：明尼阿波利斯联储「Consumer Price Index, 1913-」表（保留一位小数）。
 * 下标 i 对应年份 CPI_FIRST_YEAR + i。
 */
const CPI_VALUES = [
	9.9, 10.0, 10.1, 10.9, 12.8, 15.0, 17.3, 20.0, 17.9, 16.8,
	17.1, 17.1, 17.5, 17.7, 17.4, 17.2, 17.2, 16.7, 15.2, 13.6, 12.9, 13.4, 13.7, 13.9, 14.4, 14.1, 13.9,
	14.0, 14.7, 16.3, 17.3, 17.6, 18.0, 19.5, 22.3, 24.0, 23.8,
	24.1, 26.0, 26.6, 26.8, 26.9, 26.8, 27.2, 28.1, 28.9, 29.2,
	29.6, 29.9, 30.3, 30.6, 31.0, 31.5, 32.5, 33.4, 34.8, 36.7,
	38.8, 40.5, 41.8, 44.4, 49.3, 53.8, 56.9, 60.6, 65.2, 72.6,
	82.4, 90.9, 96.5, 99.6, 103.9, 107.6, 109.6, 113.6, 118.3, 124.0,
	130.7, 136.2, 140.3, 144.5, 148.2, 152.4, 156.9, 160.5, 163.0, 166.6,
	172.2, 177.1, 179.9, 184.0, 188.9, 195.3, 201.6, 207.3, 215.3, 214.5,
	218.1, 224.9, 229.6, 233.0, 236.7, 237.0, 240.0, 245.1, 251.1, 255.7,
	258.8, 271.0, 292.7, 304.7, 313.7, 321.9,
];

/**
 * 官方表中的年度通胀率（%），下标 i 对应年份 CPI_FIRST_YEAR + 1 + i（1913 年无数据）。
 */
const CPI_PCT = [
	1.3, 0.9, 7.7, 17.8, 17.3, 15.2, 15.6, -10.9, -6.2,
	1.8, 0.4, 2.4, 0.9, -1.9, -1.2, 0.0, -2.7, -8.9, -10.3, -5.2, 3.5, 2.6, 1.0, 3.7, -2.0, -1.3,
	0.7, 5.1, 10.9, 6.0, 1.6, 2.3, 8.5, 14.4, 7.7, -1.0,
	1.1, 7.9, 2.3, 0.8, 0.3, -0.3, 1.5, 3.3, 2.7, 1.08,
	1.5, 1.1, 1.2, 1.2, 1.3, 1.6, 3.0, 2.8, 4.3, 5.5,
	5.8, 4.3, 3.3, 6.2, 11.1, 9.1, 5.7, 6.5, 7.6, 11.3,
	13.5, 10.3, 6.1, 3.2, 4.3, 3.5, 1.9, 3.7, 4.1, 4.8,
	5.4, 4.2, 3.0, 3.0, 2.6, 2.8, 2.9, 2.3, 1.6, 2.2,
	3.4, 2.8, 1.6, 2.3, 2.7, 3.4, 3.2, 2.9, 3.8, -0.4,
	1.6, 3.2, 2.1, 1.5, 1.6, 0.1, 1.3, 2.1, 2.4, 1.8,
	1.2, 4.7, 8.0, 4.1, 2.9, 2.6,
];

/** CPI 数据最后年份。 */
const CPI_LAST_YEAR = CPI_FIRST_YEAR + CPI_VALUES.length - 1;

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
 * 渲染 how-to-calculate-inflation 工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 * @returns 完整页面 HTML
 */
export const renderHowToCalculateInflationPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 读取本工具键（自动拼前缀）。 */
	const tx = (key: string) => t(opts.lang, `${PREFIX}_${key}` as keyof typeof import('../site/i18n/en').default);

	const toolPath = '/tools/how-to-calculate-inflation';
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
			currentSlug: 'how-to-calculate-inflation',
			currentAnchor: '#inflation',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	/** 结果区一行：标签 + 输出位。 */
	const row = (id: string, labelKey: string) =>
		`<div id="${id}Row" class="in-line"><strong>${escapeHtml(tx(labelKey))}:</strong> <span id="${id}"></span></div>`;

	/**
	 * 年份下拉选项（新年份在前）。
	 * @param selected 默认选中的年份
	 * @returns option 列表 HTML
	 */
	const yearOptions = (selected: number) => {
		const out: string[] = [];
		for (let y = CPI_LAST_YEAR; y >= CPI_FIRST_YEAR; y--) {
			out.push(`<option value="${y}"${y === selected ? ' selected' : ''}>${y}</option>`);
		}
		return out.join('');
	};

	const extraHeadHtml = `
  <style>
    .tool-card { max-width: var(--content-max); width: 100%; margin: 0 0 1.5rem; }
    .form-label { display:block; margin-bottom:.5rem; color:#495057; font-weight:500 }
    .form-hint { display:block; color:#6c757d; font-size:.85rem; margin:-.25rem 0 .75rem; }
    .form-group { margin-bottom:1rem; }
    .form-row3 { display:grid; grid-template-columns:repeat(3, 1fr); gap:1rem; }
    @media (max-width:768px) { .form-row3 { grid-template-columns:1fr; } }
    .btn-row { display:flex; flex-wrap:wrap; gap:.5rem; align-items:center; }
    .result { background:#f8f9fa; padding:1rem; border-radius:8px; margin-top:1rem; }
    .in-main { font-size:1.6rem; font-weight:600; text-align:center; margin:.25rem 0 0; font-variant-numeric:tabular-nums; }
    .in-sub { text-align:center; color:#495057; font-size:.95rem; margin-top:.25rem; }
    .in-line { color:#495057; font-size:.92rem; margin-top:.5rem; font-variant-numeric:tabular-nums; }
    .in-table { width:100%; border-collapse:collapse; margin-top:.75rem; font-size:.9rem; font-variant-numeric:tabular-nums; }
    .in-table caption { caption-side:top; text-align:start; color:#495057; font-weight:600; padding-bottom:.25rem; }
    .in-table th, .in-table td { border-bottom:1px solid #dee2e6; padding:.3rem .5rem; text-align:end; }
    .in-table th:first-child, .in-table td:first-child { text-align:start; }
    .result .muted { color:#6c757d; font-size:.9rem; margin-top:.75rem; }
  </style>`;

	const contentHtml = `
    <div id="inflation" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(tx('title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <form id="calcForm" novalidate>
          <div class="form-group">
            <label class="form-label" for="inMode">${escapeHtml(tx('mode_label'))}</label>
            <select id="inMode" class="input-lg">
              <option value="cpi" selected>${escapeHtml(tx('mode_cpi'))}</option>
              <option value="rate">${escapeHtml(tx('mode_rate'))}</option>
            </select>
          </div>
          <div class="form-row3">
            <div class="form-group">
              <label class="form-label" for="inAmount">${escapeHtml(tx('amount_label'))}</label>
              <input id="inAmount" class="input-lg" type="text" inputmode="decimal" autocomplete="off" placeholder="${escapeHtml(tx('amount_ph'))}">
            </div>
            <div class="form-group in-cpi">
              <label class="form-label" for="inFrom">${escapeHtml(tx('from_label'))}</label>
              <select id="inFrom" class="input-lg">${yearOptions(2000)}</select>
            </div>
            <div class="form-group in-cpi">
              <label class="form-label" for="inTo">${escapeHtml(tx('to_label'))}</label>
              <select id="inTo" class="input-lg">${yearOptions(CPI_LAST_YEAR)}</select>
            </div>
            <div class="form-group in-rate" style="display:none">
              <label class="form-label" for="inRate">${escapeHtml(tx('rate_label'))}</label>
              <input id="inRate" class="input-lg" type="text" inputmode="decimal" autocomplete="off" placeholder="${escapeHtml(tx('rate_ph'))}">
            </div>
            <div class="form-group in-rate" style="display:none">
              <label class="form-label" for="inYears">${escapeHtml(tx('years_label'))}</label>
              <input id="inYears" class="input-lg" type="text" inputmode="numeric" autocomplete="off" placeholder="${escapeHtml(tx('years_ph'))}">
            </div>
          </div>
          <div class="form-group">
            <label class="form-label" id="inActualLabel" for="inActual">${escapeHtml(tx('actual_label_cpi'))}</label>
            <input id="inActual" class="input-lg" type="text" inputmode="decimal" autocomplete="off" placeholder="${escapeHtml(tx('actual_ph'))}">
          </div>
          <span class="form-hint">${escapeHtml(tx('actual_hint'))}</span>
          <div class="btn-row">
            <button type="submit" id="inBtnCalc" class="btn btn-primary">${escapeHtml(tx('calculate'))}</button>
            <button type="button" id="inBtnSample" class="btn btn-outline-secondary">${escapeHtml(tx('sample'))}</button>
            <button type="button" id="inBtnClear" class="btn btn-outline-secondary">${escapeHtml(tx('clear'))}</button>
          </div>
        </form>
        <div id="calcResult" class="result" style="display:none" aria-live="polite">
          <div id="inMainLabel" class="in-sub">${escapeHtml(tx('out_cpi'))}</div>
          <div id="inMain" class="in-main"></div>
          <div id="inMainSub" class="in-sub"></div>
          <div id="inDetails">
            ${row('inWork', 'work_label')}
            ${row('inPp', 'pp_label')}
            ${row('inExtreme', 'extreme_label')}
            ${row('inDouble', 'double_label')}
            ${row('inCompare', 'compare_label')}
            <table id="inTable" class="in-table" style="display:none">
              <caption>${escapeHtml(tx('table_caption'))}</caption>
              <thead><tr><th>${escapeHtml(tx('col_year'))}</th><th>${escapeHtml(tx('col_price'))}</th><th>${escapeHtml(tx('col_pp'))}</th></tr></thead>
              <tbody id="inBody"></tbody>
            </table>
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
				href: 'https://www.minneapolisfed.org/about-us/monetary-policy/inflation-calculator/consumer-price-index-1913-',
			},
			{
				label: tx('ref_b_label'),
				href: 'https://www.bls.gov/cpi/',
			},
		],
	});

	/** 前端脚本需要的文案（一次性注入）。 */
	const clientText = {
		outCpi: tx('out_cpi'),
		outRate: tx('out_rate'),
		actualCpi: tx('actual_label_cpi'),
		actualRate: tx('actual_label_rate'),
		mainCpi: tx('main_cpi_tpl'),
		subCpi: tx('sub_cpi_tpl'),
		subCpiOne: tx('sub_cpi_one_tpl'),
		subCpiBack: tx('sub_cpi_back_tpl'),
		subRate: tx('sub_rate_tpl'),
		workCpi: tx('work_cpi_tpl'),
		workRate: tx('work_rate_tpl'),
		ppCpi: tx('pp_cpi_tpl'),
		ppRate: tx('pp_rate_tpl'),
		extreme: tx('extreme_tpl'),
		double: tx('double_tpl'),
		doubleNone: tx('double_none'),
		up: tx('compare_up_tpl'),
		down: tx('compare_down_tpl'),
		even: tx('compare_even_tpl'),
		errAmount: tx('err_amount'),
		errSameYear: tx('err_same_year'),
		errRate: tx('err_rate'),
		errYears: tx('err_years'),
		errActual: tx('err_actual'),
		noteCpi: tx('result_note_cpi'),
		noteRate: tx('result_note_rate'),
	};

	const extraBodyHtml = `
  <script>
    (function () {
      /** 表单与输入控件。 */
      var form = document.getElementById('calcForm');
      var modeEl = document.getElementById('inMode');
      var amountEl = document.getElementById('inAmount');
      var fromEl = document.getElementById('inFrom');
      var toEl = document.getElementById('inTo');
      var rateEl = document.getElementById('inRate');
      var yearsEl = document.getElementById('inYears');
      var actualEl = document.getElementById('inActual');
      var actualLabelEl = document.getElementById('inActualLabel');
      /** 结果区各输出位。 */
      var result = document.getElementById('calcResult');
      var detailsEl = document.getElementById('inDetails');
      var mainLabelEl = document.getElementById('inMainLabel');
      var mainEl = document.getElementById('inMain');
      var mainSubEl = document.getElementById('inMainSub');
      var tableEl = document.getElementById('inTable');
      var bodyEl = document.getElementById('inBody');
      var noteEl = document.getElementById('calcNote');
      /** 当前页面语言（决定小数点与数字格式）。 */
      var LANG = ${JSON.stringify(opts.lang)};
      /** 本地化文案字典。 */
      var T = ${JSON.stringify(clientText)};
      /** CPI 起始年份、年均 CPI 序列与官方年度通胀率序列。 */
      var FIRST = ${CPI_FIRST_YEAR};
      var CPI = ${JSON.stringify(CPI_VALUES)};
      var PCT = ${JSON.stringify(CPI_PCT)};
      /** 样例轮换：[模式, 金额, 起始年, 目标年, 年通胀率, 年数, 实际金额]；首个与 Example 一致。 */
      var SAMPLES = [
        ['cpi', '100', '2000', '2025', '', '', ''],
        ['cpi', '50000', '2015', '2025', '', '', '62000'],
        ['rate', '1000', '', '', '3', '5', '']
      ];
      /** 下一次点击「加载样例」使用的样例下标。 */
      var sampleIndex = 0;

      /** 金额 / 百分比 / 普通小数格式器（拉丁数字）。 */
      var moneyFormat = null;
      var pctFormat = null;
      var numFormat = null;
      /** 官方表年度百分比格式器（1–2 位小数）。 */
      var pctRawFormat = null;
      /** CPI 指数格式器（一位小数、不分组）。 */
      var cpiFormat = null;
      try {
        cpiFormat = new Intl.NumberFormat(LANG + '-u-nu-latn', { minimumFractionDigits: 1, maximumFractionDigits: 1, useGrouping: false });
        moneyFormat = new Intl.NumberFormat(LANG + '-u-nu-latn', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        pctFormat = new Intl.NumberFormat(LANG + '-u-nu-latn', { style: 'percent', minimumFractionDigits: 2, maximumFractionDigits: 2 });
        pctRawFormat = new Intl.NumberFormat(LANG + '-u-nu-latn', { style: 'percent', minimumFractionDigits: 1, maximumFractionDigits: 2 });
        numFormat = new Intl.NumberFormat(LANG + '-u-nu-latn', { maximumFractionDigits: 6, useGrouping: false });
      } catch (e) {
        moneyFormat = null;
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
       * 金额：两位小数、带千分位（真减号）。
       * @param {number} v 数值
       * @returns {string} 文本
       */
      function money(v) {
        var s = moneyFormat ? moneyFormat.format(v) : v.toFixed(2);
        return s.replace('-', '−');
      }

      /**
       * 百分比：两位小数（v 为比例，0.05 = 5%）。
       * @param {number} v 比例
       * @param {boolean} signed 正数是否加「+」
       * @returns {string} 文本
       */
      function pct(v, signed) {
        if (Math.abs(v) < 5e-7) v = 0;
        var s = pctFormat ? pctFormat.format(v) : (v * 100).toFixed(2) + '%';
        s = s.replace('-', '−');
        return signed && v > 0 ? '+' + s : s;
      }

      /**
       * 官方表的年度百分比（已是百分数，保留原有小数位）。
       * @param {number} p 百分数
       * @returns {string} 文本
       */
      function rawPct(p) {
        var s = pctRawFormat ? pctRawFormat.format(p / 100) : String(p) + '%';
        return s.replace('-', '−');
      }

      /**
       * CPI 指数值：固定一位小数（与数据表一致，如 237.0）。
       * @param {number} c 指数值
       * @returns {string} 文本
       */
      function cpiText(c) {
        return cpiFormat ? cpiFormat.format(c) : c.toFixed(1);
      }

      /**
       * 普通小数（最多 6 位，本地小数点）。
       * @param {number} v 数值
       * @returns {string} 文本
       */
      function num(v) {
        var s = numFormat ? numFormat.format(v) : String(v);
        return s.replace('-', '−');
      }

      /**
       * 解析数字：容忍千分位与本地小数点；留空 undefined，无效 NaN。
       * @param {string} raw 原始输入
       * @returns {number|undefined} 数值
       */
      function parseNum(raw) {
        var s = String(raw || '').split(' ').join('').split(String.fromCharCode(160)).join('').split('−').join('-');
        if (s === '') return undefined;
        var other = DEC === ',' ? '.' : ',';
        if (new RegExp('^-?[0-9]{1,3}([' + other + '][0-9]{3})+([' + DEC + '][0-9]*)?$').test(s)) {
          s = s.split(other).join('');
        }
        s = s.split(',').join('.');
        if (!/^-?([0-9]+[.]?[0-9]*|[.][0-9]+)$/.test(s)) return NaN;
        return Number(s);
      }

      /**
       * 取某年的 CPI。
       * @param {number} y 年份
       * @returns {number} 年均 CPI
       */
      function cpiOf(y) {
        return CPI[y - FIRST];
      }

      /**
       * 设置某一结果行的文本；text 为 null 时隐藏该行。
       * @param {string} id 输出位 id（行 id 为 id + 'Row'）
       * @param {string|null} text 文本
       */
      function setRow(id, text) {
        var rowEl = document.getElementById(id + 'Row');
        if (text == null) {
          rowEl.style.display = 'none';
          return;
        }
        rowEl.style.display = '';
        document.getElementById(id).textContent = text;
      }

      /**
       * 「实际金额」对比文案：名义变化与扣除通胀后的实际变化。
       * @param {number} actual 实际金额
       * @param {number} start 起始金额
       * @param {number} adjusted 按通胀调整后的等值金额
       * @returns {string} 文案
       */
      function compareText(actual, start, adjusted) {
        var real = actual / adjusted - 1;
        var map = { a: money(actual), f: money(adjusted), p: pct(Math.abs(real), false), nom: pct(actual / start - 1, true), real: pct(real, true) };
        if (Math.abs(real) < 0.00005) return fill(T.even, map);
        return fill(real > 0 ? T.up : T.down, map);
      }

      /**
       * 读取输入并计算。
       * @returns {{ ok: boolean, error?: string, values?: Object }}
       */
      function compute() {
        var mode = modeEl.value === 'rate' ? 'rate' : 'cpi';
        var amount = parseNum(amountEl.value);
        if (!(amount > 0)) return { ok: false, error: T.errAmount };
        var actual = parseNum(actualEl.value);
        if (actual !== undefined && !(actual > 0)) return { ok: false, error: T.errActual };
        if (mode === 'cpi') {
          var y1 = Number(fromEl.value);
          var y2 = Number(toEl.value);
          if (y1 === y2) return { ok: false, error: T.errSameYear };
          return { ok: true, values: { mode: mode, amount: amount, actual: actual, y1: y1, y2: y2 } };
        }
        var rate = parseNum(rateEl.value);
        if (rate === undefined || isNaN(rate) || rate < -50 || rate > 100) return { ok: false, error: T.errRate };
        var n = parseNum(yearsEl.value);
        if (n === undefined || isNaN(n) || Math.floor(n) !== n || n < 1 || n > 100) return { ok: false, error: T.errYears };
        return { ok: true, values: { mode: mode, amount: amount, actual: actual, rate: rate / 100, n: n } };
      }

      /**
       * 渲染 CPI 模式结果。
       * @param {Object} v compute() 返回的数值
       */
      function renderCpi(v) {
        var c1 = cpiOf(v.y1);
        var c2 = cpiOf(v.y2);
        var ratio = c2 / c1;
        var out = v.amount * ratio;
        var span = Math.abs(v.y2 - v.y1);
        var avg = v.y2 > v.y1 ? Math.pow(ratio, 1 / span) - 1 : Math.pow(1 / ratio, 1 / span) - 1;
        mainLabelEl.textContent = T.outCpi;
        mainEl.textContent = fill(T.mainCpi, { a: money(v.amount), y1: v.y1, b: money(out), y2: v.y2 });
        var subMap = { p: pct(ratio - 1, true), y1: v.y1, y2: v.y2, avg: pct(avg, false), n: span };
        if (v.y2 < v.y1) {
          subMap.p = pct(1 - ratio, false);
          mainSubEl.textContent = fill(T.subCpiBack, subMap);
        } else {
          mainSubEl.textContent = fill(span === 1 ? T.subCpiOne : T.subCpi, subMap);
        }
        setRow('inWork', fill(T.workCpi, { a: money(v.amount), y1: v.y1, y2: v.y2, c1: cpiText(c1), c2: cpiText(c2), b: money(out) }));
        setRow('inPp', fill(T.ppCpi, { y1: v.y1, y2: v.y2, v: money(c1 / c2) }));
        /** 区间内官方年度通胀率的最高与最低年份。 */
        var lo = Math.min(v.y1, v.y2) + 1;
        var hi = Math.max(v.y1, v.y2);
        var maxY = lo;
        var minY = lo;
        for (var y = lo; y <= hi; y++) {
          var p = PCT[y - FIRST - 1];
          if (p > PCT[maxY - FIRST - 1]) maxY = y;
          if (p < PCT[minY - FIRST - 1]) minY = y;
        }
        setRow('inExtreme', span > 1 ? fill(T.extreme, { y1: maxY, p1: rawPct(PCT[maxY - FIRST - 1]), y2: minY, p2: rawPct(PCT[minY - FIRST - 1]) }) : null);
        setRow('inDouble', null);
        setRow('inCompare', v.actual !== undefined ? compareText(v.actual, v.amount, out) : null);
        tableEl.style.display = 'none';
        noteEl.textContent = T.noteCpi;
      }

      /**
       * 渲染固定通胀率模式结果（含逐年表）。
       * @param {Object} v compute() 返回的数值
       */
      function renderRate(v) {
        var factor = Math.pow(1 + v.rate, v.n);
        var future = v.amount * factor;
        mainLabelEl.textContent = T.outRate;
        mainEl.textContent = money(future);
        mainSubEl.textContent = fill(T.subRate, { p: pct(factor - 1, true), n: v.n, r: pct(v.rate, false) });
        setRow('inWork', fill(T.workRate, { a: money(v.amount), r: pct(v.rate, false), n: v.n, f: num(Math.round(factor * 1e6) / 1e6), b: money(future) }).split('+ −').join('− '));
        setRow('inPp', fill(T.ppRate, { n: v.n, a: money(v.amount), v: money(v.amount / factor) }));
        setRow('inExtreme', null);
        if (v.rate > 0) {
          var t2 = Math.log(2) / Math.log(1 + v.rate);
          setRow('inDouble', fill(T.double, { t: num(Math.round(t2 * 100) / 100), r: num(Math.round(v.rate * 10000) / 100), q: num(Math.round(70 / (v.rate * 100) * 100) / 100) }));
        } else {
          setRow('inDouble', T.doubleNone);
        }
        setRow('inCompare', v.actual !== undefined ? compareText(v.actual, v.amount, future) : null);
        /** 逐年表：30 年以内逐年，超过则每 5 年一行并补上最后一年。 */
        while (bodyEl.firstChild) bodyEl.removeChild(bodyEl.firstChild);
        var step = v.n <= 30 ? 1 : 5;
        for (var k = 0; k <= v.n; k += step) {
          appendRow(k, v);
          if (k + step > v.n && k !== v.n) appendRow(v.n, v);
        }
        tableEl.style.display = '';
        noteEl.textContent = T.noteRate;
      }

      /**
       * 逐年表追加一行：第 k 年的价格与购买力。
       * @param {number} k 年份序号
       * @param {Object} v compute() 返回的数值
       */
      function appendRow(k, v) {
        var f = Math.pow(1 + v.rate, k);
        var tr = document.createElement('tr');
        var cells = [String(k), money(v.amount * f), money(v.amount / f)];
        for (var i = 0; i < cells.length; i++) {
          var td = document.createElement('td');
          td.textContent = cells[i];
          tr.appendChild(td);
        }
        bodyEl.appendChild(tr);
      }

      /** 执行计算并刷新结果区；失败时隐藏明细并显示具体错误。 */
      function runCalc() {
        var out = compute();
        result.style.display = 'block';
        if (!out || !out.ok) {
          mainLabelEl.textContent = modeEl.value === 'rate' ? T.outRate : T.outCpi;
          mainEl.textContent = '—';
          mainSubEl.textContent = '';
          detailsEl.style.display = 'none';
          noteEl.textContent = (out && out.error) || T.errAmount;
          return false;
        }
        if (out.values.mode === 'cpi') renderCpi(out.values);
        else renderRate(out.values);
        detailsEl.style.display = '';
        return true;
      }

      /** 按模式切换 CPI 年份与通胀率 / 年数输入，以及「实际金额」标签。 */
      function syncMode() {
        var rate = modeEl.value === 'rate';
        var cpis = document.querySelectorAll('.in-cpi');
        for (var i = 0; i < cpis.length; i++) cpis[i].style.display = rate ? 'none' : '';
        var rates = document.querySelectorAll('.in-rate');
        for (var k = 0; k < rates.length; k++) rates[k].style.display = rate ? '' : 'none';
        actualLabelEl.textContent = rate ? T.actualRate : T.actualCpi;
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
        if (smp[2]) fromEl.value = smp[2];
        if (smp[3]) toEl.value = smp[3];
        rateEl.value = localize(smp[4]);
        yearsEl.value = smp[5];
        actualEl.value = localize(smp[6]);
        syncMode();
        runCalc();
      }

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        runCalc();
      });
      modeEl.addEventListener('change', syncMode);
      document.getElementById('inBtnSample').addEventListener('click', loadSample);
      /** 清空：只清输入、恢复 CPI 模式与默认年份并隐藏结果，不重新加载样例。 */
      document.getElementById('inBtnClear').addEventListener('click', function () {
        amountEl.value = '';
        rateEl.value = '';
        yearsEl.value = '';
        actualEl.value = '';
        modeEl.value = 'cpi';
        fromEl.value = '2000';
        toEl.value = String(FIRST + CPI.length - 1);
        syncMode();
        result.style.display = 'none';
        amountEl.focus();
      });
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('how-to-calculate-inflation');
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
