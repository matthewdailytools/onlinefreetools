/**
 * IRR（内部收益率）计算器工具页。
 * slug: how-to-calculate-irr（见 work-tasks/how-to-calculate-irr/02-tool-info.md）。
 *
 * 交互要点（2026-10-15 改写）：
 * - 初始投资（可留空：列表第一项即第 0 期）+ 现金流列表（空格 / 换行分隔，1100*12 表示重复 12 期）；
 * - 每期长度：年 / 季 / 月；按 (1 + r)^k − 1 换算年化有效 IRR，并给出名义年率 r × k；
 * - 在 −99% 到 1000%（每期）之间扫描 NPV 变号并二分求根，找出全部 IRR（多 IRR 时明确提示）；
 * - 可选要求收益率：给出该收益率下的 NPV 与 MIRR（融资与再投资同用该收益率）；
 * - 写出教材式试错插值（相邻两个整数百分比的 NPV）与「按 IRR 折现 NPV = 0」验算表。
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
const PREFIX = 'tool_irr';

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
 * 渲染 how-to-calculate-irr 工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 * @returns 完整页面 HTML
 */
export const renderHowToCalculateIrrPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 读取本工具键（自动拼前缀）。 */
	const tx = (key: string) => t(opts.lang, `${PREFIX}_${key}` as keyof typeof import('../site/i18n/en').default);

	const toolPath = '/tools/how-to-calculate-irr';
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
			currentSlug: 'how-to-calculate-irr',
			currentAnchor: '#irr',
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
    .irr-main { font-size:1.6rem; font-weight:600; text-align:center; margin:.25rem 0 0; font-variant-numeric:tabular-nums; }
    .irr-sub { text-align:center; color:#495057; font-size:.95rem; margin-top:.25rem; }
    .irr-line { color:#495057; font-size:.92rem; margin-top:.6rem; }
    .irr-warn { color:#8a5300; font-size:.92rem; margin-top:.6rem; }
    .irr-table-wrap { overflow-x:auto; margin-top:1rem; }
    .irr-table { width:100%; border-collapse:collapse; font-size:.9rem; font-variant-numeric:tabular-nums; }
    .irr-table th, .irr-table td { padding:.35rem .5rem; border-bottom:1px solid #dee2e6; text-align:end; white-space:nowrap; }
    .irr-table th:first-child, .irr-table td:first-child { text-align:start; }
    .irr-table td.irr-neg { color:#b02a37; }
    .result .muted { color:#6c757d; font-size:.9rem; margin-top:.75rem; }
  </style>`;

	const contentHtml = `
    <div id="irr" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(tx('title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <form id="calcForm" novalidate>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label" for="irrInvest">${escapeHtml(tx('invest_label'))}</label>
              <input id="irrInvest" class="input-lg" type="text" inputmode="decimal" autocomplete="off" placeholder="${escapeHtml(tx('invest_ph'))}">
              <span class="form-hint">${escapeHtml(tx('invest_hint'))}</span>
            </div>
            <div class="form-group">
              <label class="form-label" for="irrPeriod">${escapeHtml(tx('period_label'))}</label>
              <select id="irrPeriod" class="input-lg">
                <option value="1">${escapeHtml(tx('period_year'))}</option>
                <option value="4">${escapeHtml(tx('period_quarter'))}</option>
                <option value="12">${escapeHtml(tx('period_month'))}</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label" for="irrRate">${escapeHtml(tx('rate_label'))}</label>
              <input id="irrRate" class="input-lg" type="text" inputmode="decimal" autocomplete="off" placeholder="${escapeHtml(tx('rate_ph'))}">
              <span class="form-hint">${escapeHtml(tx('rate_hint'))}</span>
            </div>
          </div>
          <div class="form-group">
            <label class="form-label" for="irrFlows">${escapeHtml(tx('cf_label'))}</label>
            <textarea id="irrFlows" class="input-lg" rows="3" style="min-height:4.5rem;resize:vertical;font-family:inherit"
              placeholder="${escapeHtml(tx('cf_ph'))}"></textarea>
            <span class="form-hint">${escapeHtml(tx('cf_hint'))}</span>
          </div>
          <div class="btn-row">
            <button type="submit" id="irrBtnCalc" class="btn btn-primary">${escapeHtml(tx('calculate'))}</button>
            <button type="button" id="irrBtnSample" class="btn btn-outline-secondary">${escapeHtml(tx('sample'))}</button>
            <button type="button" id="irrBtnClear" class="btn btn-outline-secondary">${escapeHtml(tx('clear'))}</button>
          </div>
        </form>
        <div id="calcResult" class="result" style="display:none" aria-live="polite">
          <div class="irr-sub">${escapeHtml(tx('irrOut_label'))}</div>
          <div id="irrMain" class="irr-main"></div>
          <div id="irrMainSub" class="irr-sub"></div>
          <div id="irrDetails">
            <div id="irrAnnualRow" class="irr-line"><strong>${escapeHtml(tx('annual_label'))}:</strong> <span id="irrAnnual"></span></div>
            <div class="irr-line"><strong>${escapeHtml(tx('npv_label'))}:</strong> <span id="irrNpv"></span></div>
            <div id="irrMirrRow" class="irr-line"><strong>${escapeHtml(tx('mirr_label'))}:</strong> <span id="irrMirr"></span></div>
            <div id="irrInterpRow" class="irr-line"><strong>${escapeHtml(tx('interp_label'))}:</strong> <span id="irrInterp"></span></div>
            <div id="irrCheckRow" class="irr-line"><strong>${escapeHtml(tx('check_label'))}:</strong> <span id="irrCheck"></span></div>
            <div id="irrWarn" class="irr-warn"></div>
            <div id="irrTableWrap" class="irr-table-wrap">
              <table class="irr-table">
                <thead><tr>
                  <th scope="col">${escapeHtml(tx('col_period'))}</th>
                  <th scope="col">${escapeHtml(tx('col_cf'))}</th>
                  <th scope="col">${escapeHtml(tx('col_df'))}</th>
                  <th scope="col">${escapeHtml(tx('col_pv'))}</th>
                  <th scope="col">${escapeHtml(tx('col_cum'))}</th>
                </tr></thead>
                <tbody id="irrBody"></tbody>
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
				href: 'https://www.investopedia.com/terms/i/irr.asp',
			},
			{
				label: tx('ref_b_label'),
				href: 'https://support.microsoft.com/en-us/office/irr-function-64925eaa-9988-495b-b290-3ad0c163c1bc',
			},
		],
	});

	/** 前端脚本需要的文案（一次性注入）。 */
	const clientText = {
		errInvest: tx('err_invest'),
		errFlows: tx('err_flows'),
		errToken: tx('err_token'),
		errRate: tx('err_rate'),
		errMany: tx('err_many'),
		errSigns: tx('err_signs'),
		errNone: tx('err_none'),
		note: tx('result_note'),
		unitYear: tx('unit_year'),
		unitQuarter: tx('unit_quarter'),
		unitMonth: tx('unit_month'),
		annual: tx('annual_tpl'),
		npv: tx('npv_tpl'),
		above: tx('verdict_above'),
		below: tx('verdict_below'),
		nonconv: tx('verdict_nonconv'),
		rateNone: tx('rate_none'),
		perYear: tx('per_year_tpl'),
		interp: tx('interp_tpl'),
		check: tx('check_tpl'),
		multi: tx('multi_tpl'),
		signs: tx('signs_tpl'),
	};

	const extraBodyHtml = `
  <script>
    (function () {
      /** 表单与输入控件。 */
      var form = document.getElementById('calcForm');
      var investEl = document.getElementById('irrInvest');
      var flowsEl = document.getElementById('irrFlows');
      var periodEl = document.getElementById('irrPeriod');
      var rateEl = document.getElementById('irrRate');
      /** 结果区各输出位。 */
      var result = document.getElementById('calcResult');
      var detailsEl = document.getElementById('irrDetails');
      var mainEl = document.getElementById('irrMain');
      var mainSubEl = document.getElementById('irrMainSub');
      var annualRowEl = document.getElementById('irrAnnualRow');
      var annualEl = document.getElementById('irrAnnual');
      var npvEl = document.getElementById('irrNpv');
      var mirrRowEl = document.getElementById('irrMirrRow');
      var mirrEl = document.getElementById('irrMirr');
      var interpRowEl = document.getElementById('irrInterpRow');
      var interpEl = document.getElementById('irrInterp');
      var checkRowEl = document.getElementById('irrCheckRow');
      var checkEl = document.getElementById('irrCheck');
      var warnEl = document.getElementById('irrWarn');
      var tableWrapEl = document.getElementById('irrTableWrap');
      var bodyEl = document.getElementById('irrBody');
      var noteEl = document.getElementById('calcNote');
      /** 当前页面语言（决定数字格式与小数逗号解析）。 */
      var LANG = ${JSON.stringify(opts.lang)};
      /** 本地化文案字典。 */
      var T = ${JSON.stringify(clientText)};
      /** 最多允许的期数（不含第 0 期）。 */
      var MAX_PERIODS = 600;
      /** 表格最多显示的行数。 */
      var MAX_ROWS = 120;
      /** 样例轮换：[初始投资, 现金流, 每年期数, 要求收益率]；首个与 Example 一致。 */
      var SAMPLES = [
        ['1000', '300 420 680', '1', '10'],
        ['1600', '10000 -10000', '1', '10'],
        ['12000', '1100*12', '12', '8']
      ];
      /** 下一次点击「加载样例」使用的样例下标。 */
      var sampleIndex = 0;

      /** 金额 / 百分比 / 折现系数格式器（拉丁数字）。 */
      var moneyFormat = null;
      var centsFormat = null;
      var pctFormat = null;
      var pctWholeFormat = null;
      var pctRateFormat = null;
      var dfFormat = null;
      try {
        moneyFormat = new Intl.NumberFormat(LANG + '-u-nu-latn', { maximumFractionDigits: 2 });
        centsFormat = new Intl.NumberFormat(LANG + '-u-nu-latn', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        pctFormat = new Intl.NumberFormat(LANG + '-u-nu-latn', { style: 'percent', minimumFractionDigits: 2, maximumFractionDigits: 2 });
        pctWholeFormat = new Intl.NumberFormat(LANG + '-u-nu-latn', { style: 'percent', maximumFractionDigits: 0 });
        pctRateFormat = new Intl.NumberFormat(LANG + '-u-nu-latn', { style: 'percent', maximumFractionDigits: 2 });
        dfFormat = new Intl.NumberFormat(LANG + '-u-nu-latn', { minimumFractionDigits: 4, maximumFractionDigits: 4 });
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
       * 金额显示：整数不带小数，非整数固定 2 位。
       * @param {number} n 金额
       * @returns {string} 本地格式文本
       */
      function money(n) {
        if (!Number.isFinite(n)) return '—';
        var v = Math.round(n * 100) / 100;
        if (Math.abs(v) < 0.005) v = 0;
        var whole = Math.abs(v - Math.round(v)) < 1e-9;
        if (!moneyFormat) return whole ? String(v) : v.toFixed(2);
        return whole ? moneyFormat.format(v) : centsFormat.format(v);
      }

      /**
       * 百分比显示（输入为小数，2 位小数）。
       * @param {number} r 比率（0.1634 → 16.34%）
       * @returns {string} 本地格式文本
       */
      function pct(r) {
        if (!Number.isFinite(r)) return '—';
        return pctFormat ? pctFormat.format(r) : (r * 100).toFixed(2) + '%';
      }

      /**
       * 整数百分比显示（插值用的两个试算利率）。
       * @param {number} r 比率（0.16 → 16%）
       * @returns {string} 本地格式文本
       */
      function pctWhole(r) {
        return pctWholeFormat ? pctWholeFormat.format(r) : Math.round(r * 100) + '%';
      }

      /**
       * 用户输入的要求收益率显示（最多 2 位小数，10 → 10%）。
       * @param {number} r 比率
       * @returns {string} 本地格式文本
       */
      function pctRate(r) {
        return pctRateFormat ? pctRateFormat.format(r) : Math.round(r * 10000) / 100 + '%';
      }

      /**
       * 折现系数显示（4 位小数）。
       * @param {number} n 折现系数
       * @returns {string} 本地格式文本
       */
      function dfText(n) {
        return dfFormat ? dfFormat.format(n) : n.toFixed(4);
      }

      /**
       * 解析单个金额记号；支持「金额*期数」重复写法；英文类页面逗号是千分位，小数逗号语种逗号是小数点。
       * @param {string} token 记号（已去货币符号）
       * @returns {number[]|null} 解析出的金额列表；无效 null
       */
      function parseToken(token) {
        var s = token;
        if (!s) return [];
        var rep = /^(.+?)[*×xX]([0-9]+)$/.exec(s);
        if (rep) {
          var count = Number(rep[2]);
          var base = parseToken(rep[1]);
          if (!base || base.length !== 1 || !(count >= 1) || count > MAX_PERIODS) return null;
          var out0 = [];
          for (var r = 0; r < count; r++) out0.push(base[0]);
          return out0;
        }
        if (DEC === ',') {
          if (/^-?[0-9]{1,3}([.][0-9]{3})+(,[0-9]+)?$/.test(s)) s = s.split('.').join('');
          s = s.replace(',', '.');
          var v1 = Number(s);
          return Number.isFinite(v1) && s !== '' && s !== '-' ? [v1] : null;
        }
        if (/^-?[0-9]{1,3}(,[0-9]{3})+([.][0-9]+)?$/.test(s)) {
          var v2 = Number(s.split(',').join(''));
          return Number.isFinite(v2) ? [v2] : null;
        }
        var pieces = s.split(',').filter(function (p) { return p !== ''; });
        var out = [];
        for (var i = 0; i < pieces.length; i++) {
          if (pieces[i] === '-') return null;
          var v3 = Number(pieces[i]);
          if (!Number.isFinite(v3)) return null;
          out.push(v3);
        }
        return out;
      }

      /**
       * 解析一串金额：按空格、换行、制表符、分号分隔；去掉货币符号、撇号与不换行空格（法/俄千分位）。
       * @param {string} raw 原始输入
       * @param {boolean} single 单值字段（投资、收益率）：去掉全部空白，「10 000」视为一个数
       * @returns {{ ok: boolean, values?: number[], bad?: string }} 金额列表或第一个无效记号
       */
      function parseList(raw, single) {
        var cleaned = '';
        var text = String(raw || '');
        for (var i = 0; i < text.length; i++) {
          var ch = text.charAt(i);
          var code = text.charCodeAt(i);
          if ('$€£¥₹₩₽%'.indexOf(ch) >= 0 || code === 39 || code === 8217 || code === 160 || code === 8239) continue;
          if (ch === '−') ch = '-';
          if (ch === ';' || code === 9 || code === 10 || code === 13) ch = ' ';
          if (single && ch === ' ') continue;
          cleaned += ch;
        }
        cleaned = cleaned.replace(/ *[*×] */g, '*');
        var tokens = cleaned.split(' ').filter(function (x) { return x !== ''; });
        var values = [];
        for (var j = 0; j < tokens.length; j++) {
          var parsed = parseToken(tokens[j]);
          if (parsed == null) return { ok: false, bad: tokens[j] };
          values = values.concat(parsed);
          if (values.length > MAX_PERIODS + 1) return { ok: true, values: values };
        }
        return { ok: true, values: values };
      }

      /**
       * 计算 NPV（第 0 期不折现）。
       * @param {number[]} flows 第 0…n 期现金流
       * @param {number} r 每期折现率
       * @returns {number} 净现值
       */
      function npv(flows, r) {
        var s = 0;
        for (var t = 0; t < flows.length; t++) s += flows[t] / Math.pow(1 + r, t);
        return s;
      }

      /**
       * 在 −99% 到 1000%（每期）之间找出全部 IRR：对 ln(1 + r) 均匀取 4000 点找变号，再二分 200 次。
       * @param {number[]} flows 现金流
       * @returns {number[]} IRR 列表（小数，升序）
       */
      function allIrr(flows) {
        var n = flows.length - 1;
        var xmin = Math.max(Math.log(0.01), -700 / Math.max(n, 1));
        var xmax = Math.log(11);
        var steps = 4000;
        var roots = [];
        var px = xmin;
        var pv = npv(flows, Math.exp(px) - 1);
        for (var i = 1; i <= steps; i++) {
          var x = xmin + ((xmax - xmin) * i) / steps;
          var v = npv(flows, Math.exp(x) - 1);
          if (pv === 0) {
            roots.push(Math.exp(px) - 1);
          } else if (pv * v < 0) {
            var a = px;
            var b = x;
            var fa = pv;
            for (var k = 0; k < 200; k++) {
              var m = (a + b) / 2;
              var fm = npv(flows, Math.exp(m) - 1);
              if (fa * fm <= 0) {
                b = m;
              } else {
                a = m;
                fa = fm;
              }
            }
            roots.push(Math.exp((a + b) / 2) - 1);
          }
          px = x;
          pv = v;
        }
        return roots;
      }

      /**
       * MIRR：负现金流按 r 折现到第 0 期，正现金流按 r 复利到第 n 期。
       * @param {number[]} flows 现金流
       * @param {number} r 每期融资 / 再投资率
       * @returns {number} 每期 MIRR（无法计算时 NaN）
       */
      function mirr(flows, r) {
        var n = flows.length - 1;
        var pvNeg = 0;
        var fvPos = 0;
        for (var t = 0; t <= n; t++) {
          if (flows[t] < 0) pvNeg += flows[t] / Math.pow(1 + r, t);
          else fvPos += flows[t] * Math.pow(1 + r, n - t);
        }
        if (!(pvNeg < 0) || !(fvPos > 0) || n < 1) return NaN;
        return Math.pow(fvPos / -pvNeg, 1 / n) - 1;
      }

      /**
       * 统计现金流变号次数（忽略 0）。
       * @param {number[]} flows 现金流
       * @returns {number} 变号次数
       */
      function signChanges(flows) {
        var last = 0;
        var count = 0;
        for (var i = 0; i < flows.length; i++) {
          var s = flows[i] > 0 ? 1 : flows[i] < 0 ? -1 : 0;
          if (s === 0) continue;
          if (last !== 0 && s !== last) count++;
          last = s;
        }
        return count;
      }

      /**
       * 每期利率换算为年化有效利率。
       * @param {number} r 每期利率
       * @param {number} k 每年期数
       * @returns {number} 年化有效利率
       */
      function toAnnual(r, k) {
        return Math.pow(1 + r, k) - 1;
      }

      /**
       * 读取输入并计算。
       * @returns {{ ok: boolean, error?: string, values?: Object }}
       */
      function compute() {
        var investRaw = String(investEl.value || '').trim();
        var flows = [];
        var fl = parseList(flowsEl.value, false);
        if (!fl.ok) return { ok: false, error: fill(T.errToken, { token: fl.bad }) };
        if (investRaw) {
          var inv = parseList(investRaw, true);
          if (!inv.ok || !inv.values || inv.values.length !== 1 || !(inv.values[0] > 0)) return { ok: false, error: T.errInvest };
          if (!fl.values.length) return { ok: false, error: T.errFlows };
          flows = [-inv.values[0]].concat(fl.values);
        } else {
          if (fl.values.length < 2) return { ok: false, error: T.errFlows };
          flows = fl.values.slice();
        }
        if (flows.length - 1 > MAX_PERIODS) return { ok: false, error: T.errMany };
        var k = Number(periodEl.value) || 1;
        var rateRaw = String(rateEl.value || '').trim();
        var rate = null;
        if (rateRaw) {
          var rp = parseList(rateRaw, true);
          if (!rp.ok || rp.values.length !== 1 || !(rp.values[0] >= 0) || rp.values[0] > 100) return { ok: false, error: T.errRate };
          rate = rp.values[0] / 100;
        }
        var hasNeg = false;
        var hasPos = false;
        for (var i = 0; i < flows.length; i++) {
          if (flows[i] < 0) hasNeg = true;
          if (flows[i] > 0) hasPos = true;
        }
        if (!hasNeg || !hasPos) return { ok: false, error: T.errSigns };
        var roots = allIrr(flows);
        if (!roots.length) return { ok: false, error: T.errNone };
        return { ok: true, values: { flows: flows, k: k, rate: rate, roots: roots, changes: signChanges(flows) } };
      }

      /**
       * 渲染「按 IRR 折现」验算表：期数、现金流、折现系数、现值、累计现值（末行应为 0）。
       * @param {number[]} flows 现金流
       * @param {number} r IRR（每期）
       */
      function renderTable(flows, r) {
        while (bodyEl.firstChild) bodyEl.removeChild(bodyEl.firstChild);
        var cum = 0;
        var rows = Math.min(flows.length, MAX_ROWS);
        for (var t = 0; t < flows.length; t++) {
          var df = 1 / Math.pow(1 + r, t);
          var pvT = flows[t] * df;
          cum += pvT;
          if (t >= rows && t !== flows.length - 1) continue;
          var tr = document.createElement('tr');
          var cells = [String(t), money(flows[t]), dfText(df), money(pvT), money(cum)];
          if (t === flows.length - 1 && t >= rows) cells[0] = '… ' + t;
          for (var c = 0; c < cells.length; c++) {
            var td = document.createElement('td');
            td.textContent = cells[c];
            if (c > 0 && c !== 2 && /^-/.test(cells[c])) td.className = 'irr-neg';
            tr.appendChild(td);
          }
          bodyEl.appendChild(tr);
        }
      }

      /** 执行计算并刷新结果区；失败时隐藏明细并显示具体错误。 */
      function runCalc() {
        var out = compute();
        result.style.display = 'block';
        if (!out || !out.ok) {
          mainEl.textContent = '—';
          mainSubEl.textContent = '';
          detailsEl.style.display = 'none';
          noteEl.textContent = (out && out.error) || T.errFlows;
          return false;
        }
        var v = out.values;
        var k = v.k;
        var unit = k === 12 ? T.unitMonth : k === 4 ? T.unitQuarter : T.unitYear;
        var single = v.roots.length === 1;
        var r = v.roots[0];
        var warn = [];
        mainEl.textContent = v.roots.map(pct).join(' / ');
        mainSubEl.textContent = unit;
        /** 年化：仅当每期不是一年时显示。 */
        if (k !== 1) {
          annualRowEl.style.display = '';
          annualEl.textContent = v.roots.map(function (x) {
            return fill(T.annual, { annual: pct(toAnnual(x, k)), irr: pct(x), k: k, nominal: pct(x * k) });
          }).join(' / ');
        } else {
          annualRowEl.style.display = 'none';
        }
        /** 要求收益率（年）→ 每期，求 NPV 与 MIRR。 */
        if (v.rate != null) {
          var rp = Math.pow(1 + v.rate, 1 / k) - 1;
          var npvR = npv(v.flows, rp);
          var conventional = v.changes === 1 && v.flows[0] < 0 && single;
          var verdict = '';
          if (conventional) {
            verdict = npvR >= 0
              ? fill(T.above, { irr: pct(toAnnual(r, k)), rate: pctRate(v.rate) })
              : fill(T.below, { irr: pct(toAnnual(r, k)), rate: pctRate(v.rate) });
          } else {
            verdict = T.nonconv;
          }
          npvEl.textContent = fill(T.npv, { npv: money(npvR), rate: pctRate(v.rate) }) + ' ' + verdict;
          var m = mirr(v.flows, rp);
          mirrRowEl.style.display = Number.isFinite(m) ? '' : 'none';
          mirrEl.textContent = k === 1 ? pct(m) : fill(T.perYear, { p: pct(m), a: pct(toAnnual(m, k)) });
        } else {
          npvEl.textContent = T.rateNone;
          mirrRowEl.style.display = 'none';
        }
        if (single) {
          /** 教材式试错：取 IRR 两侧相邻的整数百分比，线性插值。 */
          var r1 = Math.floor(r * 100 + 1e-9) / 100;
          var r2 = r1 + 0.01;
          var n1 = npv(v.flows, r1);
          var n2 = npv(v.flows, r2);
          var est = n1 !== n2 ? r1 + (n1 / (n1 - n2)) * (r2 - r1) : r1;
          interpRowEl.style.display = '';
          interpEl.textContent = fill(T.interp, { r1: pctWhole(r1), r2: pctWhole(r2), n1: money(n1), n2: money(n2), est: pct(est), irr: pct(r) });
          checkRowEl.style.display = '';
          checkEl.textContent = fill(T.check, { irr: pct(r), npv: money(npv(v.flows, r)) });
          tableWrapEl.style.display = '';
          renderTable(v.flows, r);
          if (v.changes > 1) warn.push(fill(T.signs, { k: v.changes }));
        } else {
          interpRowEl.style.display = 'none';
          checkRowEl.style.display = 'none';
          tableWrapEl.style.display = 'none';
          warn.push(fill(T.multi, { k: v.changes, n: v.roots.length, list: v.roots.map(pct).join(', ') }));
        }
        warnEl.textContent = warn.join(' ');
        warnEl.style.display = warn.length ? '' : 'none';
        detailsEl.style.display = '';
        noteEl.textContent = T.note;
        return true;
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
        investEl.value = localize(smp[0]);
        flowsEl.value = localize(smp[1]);
        periodEl.value = smp[2];
        rateEl.value = localize(smp[3]);
        runCalc();
      }

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        runCalc();
      });
      document.getElementById('irrBtnSample').addEventListener('click', loadSample);
      /** 清空：只清输入、每期恢复为年并隐藏结果，不重新加载样例。 */
      document.getElementById('irrBtnClear').addEventListener('click', function () {
        investEl.value = '';
        flowsEl.value = '';
        rateEl.value = '';
        periodEl.value = '1';
        result.style.display = 'none';
        investEl.focus();
      });
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('how-to-calculate-irr');
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
