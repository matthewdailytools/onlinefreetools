/**
 * 小费计算器工具页。
 * slug: how-to-calculate-tip（见 work-tasks/how-to-calculate-tip/02-tool-info.md）。
 *
 * 交互要点（2026-10-15 改写）：
 * - 小费可按百分比或固定金额输入（固定金额时反算实际小费比例），带常用比例快捷按钮；
 * - 可填账单中已含的税额，并选择按税前金额或含税总额计小费；
 * - 多人分摊时按「分」精确分配：除不尽时列出几人多付 1 分，保证各份相加等于总额；
 * - 取整方式：不取整 / 小费向上取整 / 总额向上取整 / 每人份额向上取整（并给出取整后的实际小费比例）；
 * - 代入数字的计算过程，以及 10%–25% 常用比例对照表（高亮当前比例）。
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
const PREFIX = 'tool_tip';

/** 快捷按钮与对照表使用的常用小费比例（%）。 */
const PRESET_RATES = [10, 15, 18, 20, 25];

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
 * 渲染 how-to-calculate-tip 工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 * @returns 完整页面 HTML
 */
export const renderHowToCalculateTipPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 读取本工具键（自动拼前缀）。 */
	const tx = (key: string) => t(opts.lang, `${PREFIX}_${key}` as keyof typeof import('../site/i18n/en').default);

	const toolPath = '/tools/how-to-calculate-tip';
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
			currentSlug: 'how-to-calculate-tip',
			currentAnchor: '#tip',
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
    .tp-chips { display:flex; flex-wrap:wrap; gap:.35rem; align-items:center; margin-top:.45rem; }
    .tp-chips .form-hint { margin:0 .25rem 0 0; }
    .tp-chip { padding:.15rem .6rem; font-size:.85rem; }
    .result { background:#f8f9fa; padding:1rem; border-radius:8px; margin-top:1rem; }
    .tp-main { font-size:1.6rem; font-weight:600; text-align:center; margin:.25rem 0 0; font-variant-numeric:tabular-nums; }
    .tp-sub { text-align:center; color:#495057; font-size:.95rem; margin-top:.25rem; }
    .tp-line { color:#495057; font-size:.92rem; margin-top:.6rem; }
    .tp-work div { margin-top:.2rem; font-variant-numeric:tabular-nums; }
    .tp-table-wrap { overflow-x:auto; margin-top:1rem; }
    .tp-caption { color:#495057; font-size:.88rem; margin:0 0 .35rem; }
    .tp-table { width:100%; border-collapse:collapse; font-size:.9rem; font-variant-numeric:tabular-nums; }
    .tp-table th, .tp-table td { padding:.35rem .5rem; border-bottom:1px solid #dee2e6; text-align:end; white-space:nowrap; }
    .tp-table th:first-child, .tp-table td:first-child { text-align:start; }
    .tp-table tr.tp-cur td { font-weight:600; background:#e9f2ff; }
    .result .muted { color:#6c757d; font-size:.9rem; margin-top:.75rem; }
  </style>`;

	/** 常用比例快捷按钮（文字由前端按页面语言格式化为百分比）。 */
	const chipsHtml = PRESET_RATES.map(
		(p) => `<button type="button" class="btn btn-outline-secondary tp-chip" data-rate="${p}">${p}%</button>`
	).join('');

	const contentHtml = `
    <div id="tip" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(tx('title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <form id="calcForm" novalidate>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label" for="tpBill">${escapeHtml(tx('bill_label'))}</label>
              <input id="tpBill" class="input-lg" type="text" inputmode="decimal" autocomplete="off" placeholder="${escapeHtml(tx('bill_ph'))}">
            </div>
            <div class="form-group">
              <label class="form-label" for="tpTax">${escapeHtml(tx('tax_label'))}</label>
              <input id="tpTax" class="input-lg" type="text" inputmode="decimal" autocomplete="off" placeholder="${escapeHtml(tx('tax_ph'))}">
              <span class="form-hint">${escapeHtml(tx('tax_hint'))}</span>
            </div>
            <div class="form-group">
              <label class="form-label" for="tpBase">${escapeHtml(tx('base_label'))}</label>
              <select id="tpBase" class="input-lg">
                <option value="pre" selected>${escapeHtml(tx('base_pre'))}</option>
                <option value="post">${escapeHtml(tx('base_post'))}</option>
              </select>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label" for="tpTipMode">${escapeHtml(tx('tipmode_label'))}</label>
              <select id="tpTipMode" class="input-lg">
                <option value="pct" selected>${escapeHtml(tx('tipmode_pct'))}</option>
                <option value="amt">${escapeHtml(tx('tipmode_amt'))}</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label" for="tpTip" id="tpTipLabel">${escapeHtml(tx('tip_label_pct'))}</label>
              <input id="tpTip" class="input-lg" type="text" inputmode="decimal" autocomplete="off" placeholder="${escapeHtml(tx('tip_ph_pct'))}">
              <div class="tp-chips"><span class="form-hint">${escapeHtml(tx('presets_label'))}</span>${chipsHtml}</div>
            </div>
            <div class="form-group">
              <label class="form-label" for="tpPeople">${escapeHtml(tx('people_label'))}</label>
              <input id="tpPeople" class="input-lg" type="text" inputmode="numeric" autocomplete="off" placeholder="${escapeHtml(tx('people_ph'))}">
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label" for="tpRound">${escapeHtml(tx('round_label'))}</label>
              <select id="tpRound" class="input-lg">
                <option value="none" selected>${escapeHtml(tx('round_none'))}</option>
                <option value="tip">${escapeHtml(tx('round_tip'))}</option>
                <option value="total">${escapeHtml(tx('round_total'))}</option>
                <option value="each">${escapeHtml(tx('round_each'))}</option>
              </select>
            </div>
          </div>
          <div class="btn-row">
            <button type="submit" id="tpBtnCalc" class="btn btn-primary">${escapeHtml(tx('calculate'))}</button>
            <button type="button" id="tpBtnSample" class="btn btn-outline-secondary">${escapeHtml(tx('sample'))}</button>
            <button type="button" id="tpBtnClear" class="btn btn-outline-secondary">${escapeHtml(tx('clear'))}</button>
          </div>
        </form>
        <div id="calcResult" class="result" style="display:none" aria-live="polite">
          <div class="tp-sub">${escapeHtml(tx('out_tip'))}</div>
          <div id="tpMain" class="tp-main"></div>
          <div id="tpMainSub" class="tp-sub"></div>
          <div id="tpDetails">
            <div class="tp-line"><strong>${escapeHtml(tx('total_label'))}:</strong> <span id="tpTotal"></span></div>
            <div id="tpEachRow" class="tp-line"><strong>${escapeHtml(tx('each_label'))}:</strong> <span id="tpEach"></span></div>
            <div id="tpEachTipRow" class="tp-line"><strong>${escapeHtml(tx('each_tip_label'))}:</strong> <span id="tpEachTip"></span></div>
            <div class="tp-line"><strong>${escapeHtml(tx('work_label'))}:</strong><div id="tpWork" class="tp-work"></div></div>
            <div class="tp-table-wrap">
              <p class="tp-caption">${escapeHtml(tx('table_caption'))}</p>
              <table class="tp-table">
                <thead><tr>
                  <th scope="col">${escapeHtml(tx('col_rate'))}</th>
                  <th scope="col">${escapeHtml(tx('col_tip'))}</th>
                  <th scope="col">${escapeHtml(tx('col_total'))}</th>
                  <th scope="col">${escapeHtml(tx('col_each'))}</th>
                </tr></thead>
                <tbody id="tpBody"></tbody>
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
				href: 'https://en.wikipedia.org/wiki/Gratuity',
			},
			{
				label: tx('ref_b_label'),
				href: 'https://emilypost.com/advice/general-tipping-guide',
			},
		],
	});

	/** 前端脚本需要的文案（一次性注入）。 */
	const clientText = {
		tipPct: tx('tip_label_pct'),
		tipAmt: tx('tip_label_amt'),
		phPct: tx('tip_ph_pct'),
		phAmt: tx('tip_ph_amt'),
		sub: tx('sub_tpl'),
		even: tx('split_even_tpl'),
		uneven: tx('split_uneven_tpl'),
		basePre: tx('work_base_pre_tpl'),
		basePost: tx('work_base_post_tpl'),
		tipFromPct: tx('work_tip_pct_tpl'),
		tipFromAmt: tx('work_tip_amt_tpl'),
		roundTip: tx('work_round_tip_tpl'),
		roundTotal: tx('work_round_total_tpl'),
		roundEach: tx('work_round_each_tpl'),
		total: tx('work_total_tpl'),
		split: tx('work_split_tpl'),
		effBill: tx('work_eff_bill_tpl'),
		errBill: tx('err_bill'),
		errTax: tx('err_tax'),
		errTip: tx('err_tip'),
		errPeople: tx('err_people'),
		note: tx('result_note'),
	};

	const extraBodyHtml = `
  <script>
    (function () {
      /** 表单与输入控件。 */
      var form = document.getElementById('calcForm');
      var billEl = document.getElementById('tpBill');
      var taxEl = document.getElementById('tpTax');
      var baseEl = document.getElementById('tpBase');
      var tipModeEl = document.getElementById('tpTipMode');
      var tipEl = document.getElementById('tpTip');
      var tipLabelEl = document.getElementById('tpTipLabel');
      var peopleEl = document.getElementById('tpPeople');
      var roundEl = document.getElementById('tpRound');
      /** 常用比例快捷按钮。 */
      var chipEls = document.querySelectorAll('.tp-chip');
      /** 结果区各输出位。 */
      var result = document.getElementById('calcResult');
      var detailsEl = document.getElementById('tpDetails');
      var mainEl = document.getElementById('tpMain');
      var mainSubEl = document.getElementById('tpMainSub');
      var totalEl = document.getElementById('tpTotal');
      var eachRowEl = document.getElementById('tpEachRow');
      var eachEl = document.getElementById('tpEach');
      var eachTipRowEl = document.getElementById('tpEachTipRow');
      var eachTipEl = document.getElementById('tpEachTip');
      var workEl = document.getElementById('tpWork');
      var bodyEl = document.getElementById('tpBody');
      var noteEl = document.getElementById('calcNote');
      /** 当前页面语言（决定数字格式与小数逗号解析）。 */
      var LANG = ${JSON.stringify(opts.lang)};
      /** 本地化文案字典。 */
      var T = ${JSON.stringify(clientText)};
      /** 对照表的常用比例（%）。 */
      var TABLE_RATES = [10, 15, 18, 20, 22, 25];
      /** 分摊人数上限。 */
      var MAX_PEOPLE = 100;
      /** 百分比小费上限（%）。 */
      var MAX_PCT = 1000;
      /** 样例轮换：[账单, 税额, 计费基数, 小费方式, 小费, 人数, 取整]；首个与 Example 一致。 */
      var SAMPLES = [
        ['80', '', 'pre', 'pct', '15', '1', 'none'],
        ['86.40', '6.40', 'pre', 'pct', '20', '3', 'none'],
        ['137.50', '', 'pre', 'pct', '18', '4', 'each']
      ];
      /** 下一次点击「加载样例」使用的样例下标。 */
      var sampleIndex = 0;

      /** 金额 / 百分比 / 份额（最多 4 位小数）格式器（拉丁数字）。 */
      var centsFormat = null;
      var pctFormat = null;
      var shareFormat = null;
      try {
        centsFormat = new Intl.NumberFormat(LANG + '-u-nu-latn', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        pctFormat = new Intl.NumberFormat(LANG + '-u-nu-latn', { style: 'percent', maximumFractionDigits: 2 });
        shareFormat = new Intl.NumberFormat(LANG + '-u-nu-latn', { minimumFractionDigits: 2, maximumFractionDigits: 4 });
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
       * 以「分」为单位的整数金额显示为 2 位小数。
       * @param {number} c 金额（分）
       * @returns {string} 本地格式文本
       */
      function money(c) {
        if (!Number.isFinite(c)) return '—';
        var v = c / 100;
        return centsFormat ? centsFormat.format(v) : v.toFixed(2);
      }

      /**
       * 百分比显示（最多 2 位小数；输入为小数比率）。
       * @param {number} r 比率（0.15 → 15%）
       * @returns {string} 本地格式文本
       */
      function pct(r) {
        if (!Number.isFinite(r)) return '—';
        return pctFormat ? pctFormat.format(r) : Math.round(r * 10000) / 100 + '%';
      }

      /**
       * 未取整的每人份额显示（2–4 位小数，如 34.1333）。
       * @param {number} v 金额（元）
       * @returns {string} 本地格式文本
       */
      function share(v) {
        return shareFormat ? shareFormat.format(v) : String(Math.round(v * 10000) / 10000);
      }

      /**
       * 解析金额 / 百分比输入：去掉货币符号、百分号、空格与撇号；英文类页面逗号是千分位，小数逗号语种逗号是小数点。
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
       * 金额（元）换算为整数「分」（四舍五入）。
       * @param {number} v 金额（元）
       * @returns {number} 金额（分）
       */
      function toCents(v) {
        return Math.round(v * 100 + 1e-7);
      }

      /**
       * 向上取整到整元（以分表示）。
       * @param {number} c 金额（分）
       * @returns {number} 取整后的金额（分）
       */
      function ceilWhole(c) {
        return Math.ceil(c / 100 - 1e-9) * 100;
      }

      /**
       * 读取输入并计算。
       * @returns {{ ok: boolean, error?: string, values?: Object }}
       */
      function compute() {
        var bill = parseNum(billEl.value);
        var tax = parseNum(taxEl.value);
        var tipIn = parseNum(tipEl.value);
        var people = parseNum(peopleEl.value);
        var mode = tipModeEl.value === 'amt' ? 'amt' : 'pct';
        if (bill == null || !Number.isFinite(bill) || !(bill > 0)) return { ok: false, error: T.errBill };
        if (tax == null) tax = 0;
        var billC = toCents(bill);
        var taxC = Number.isFinite(tax) ? toCents(tax) : NaN;
        if (!Number.isFinite(taxC) || taxC < 0 || taxC >= billC) return { ok: false, error: T.errTax };
        if (tipIn == null || !Number.isFinite(tipIn) || tipIn < 0 || (mode === 'pct' && tipIn > MAX_PCT)) return { ok: false, error: T.errTip };
        if (people == null) people = 1;
        if (!Number.isFinite(people) || people < 1 || people > MAX_PEOPLE || Math.floor(people) !== people) return { ok: false, error: T.errPeople };
        var pre = baseEl.value !== 'post';
        var baseC = taxC > 0 && pre ? billC - taxC : billC;
        /** 未取整的小费（分）与比例。 */
        var tip0C = mode === 'pct' ? toCents((baseC / 100) * tipIn / 100) : toCents(tipIn);
        var rate0 = mode === 'pct' ? tipIn / 100 : tip0C / baseC;
        var total0C = billC + tip0C;
        var round = roundEl.value;
        var tipC = tip0C;
        var totalC = total0C;
        var eachRoundC = 0;
        if (round === 'tip') {
          tipC = ceilWhole(tip0C);
          totalC = billC + tipC;
        } else if (round === 'total') {
          totalC = ceilWhole(total0C);
          tipC = totalC - billC;
        } else if (round === 'each') {
          eachRoundC = Math.ceil(total0C / people / 100 - 1e-9) * 100;
          totalC = eachRoundC * people;
          tipC = totalC - billC;
        } else {
          round = 'none';
        }
        return {
          ok: true,
          values: {
            mode: mode, billC: billC, taxC: taxC, pre: pre, baseC: baseC, tipIn: tipIn, rate0: rate0,
            tip0C: tip0C, total0C: total0C, round: round, tipC: tipC, totalC: totalC, eachRoundC: eachRoundC, n: people
          }
        };
      }

      /**
       * 写出代入数字的计算过程（每行一个 div）。
       * @param {Object} v compute 返回的参数
       */
      function renderWork(v) {
        var lines = [];
        if (v.taxC > 0) {
          lines.push(v.pre
            ? fill(T.basePre, { bill: money(v.billC), tax: money(v.taxC), base: money(v.baseC) })
            : fill(T.basePost, { base: money(v.baseC) }));
        }
        if (v.mode === 'pct') {
          lines.push(fill(T.tipFromPct, { base: money(v.baseC), p: pct(v.rate0), tip: money(v.tip0C) }));
        } else {
          lines.push(fill(T.tipFromAmt, { tip: money(v.tip0C), base: money(v.baseC), p: pct(v.rate0) }));
        }
        var effP = pct(v.tipC / v.baseC);
        if (v.round === 'tip' && v.tipC !== v.tip0C) {
          lines.push(fill(T.roundTip, { a: money(v.tip0C), b: money(v.tipC), p: effP }));
        } else if (v.round === 'total' && v.totalC !== v.total0C) {
          lines.push(fill(T.roundTotal, { a: money(v.total0C), b: money(v.totalC), tip: money(v.tipC), p: effP }));
        } else if (v.round === 'each') {
          lines.push(fill(T.roundEach, { a: share(v.total0C / v.n / 100), b: money(v.eachRoundC), n: v.n, total: money(v.totalC), tip: money(v.tipC), p: effP }));
        }
        lines.push(fill(T.total, { bill: money(v.billC), tip: money(v.tipC), total: money(v.totalC) }));
        if (v.n > 1 && v.round !== 'each') {
          lines.push(fill(T.split, { total: money(v.totalC), n: v.n, eq: v.totalC % v.n === 0 ? '=' : '≈', v: share(v.totalC / v.n / 100) }));
        }
        if (v.taxC > 0 && v.pre) lines.push(fill(T.effBill, { p: pct(v.tipC / v.billC) }));
        while (workEl.firstChild) workEl.removeChild(workEl.firstChild);
        for (var j = 0; j < lines.length; j++) {
          var div = document.createElement('div');
          div.textContent = lines[j];
          workEl.appendChild(div);
        }
      }

      /**
       * 按「分」把总额分给 n 人：除不尽时前 r 人各多付 1 分。
       * @param {number} totalC 总额（分）
       * @param {number} n 人数
       * @returns {string} 每人份额文案
       */
      function splitText(totalC, n) {
        var q = Math.floor(totalC / n);
        var r = totalC - q * n;
        if (r === 0) return fill(T.even, { v: money(q) });
        return fill(T.uneven, { n1: r, v1: money(q + 1), n2: n - r, v2: money(q), t: money(totalC) });
      }

      /**
       * 常用比例对照表（未取整），当前比例若不在列表中则按大小插入并高亮。
       * @param {Object} v compute 返回的参数
       */
      function renderTable(v) {
        while (bodyEl.firstChild) bodyEl.removeChild(bodyEl.firstChild);
        var cur = Math.round(v.rate0 * 10000) / 100;
        var rates = TABLE_RATES.slice();
        if (rates.indexOf(cur) < 0) {
          rates.push(cur);
          rates.sort(function (a, b) { return a - b; });
        }
        for (var j = 0; j < rates.length; j++) {
          var isCur = rates[j] === cur;
          var tipC = isCur ? v.tip0C : toCents((v.baseC / 100) * rates[j] / 100);
          var totC = v.billC + tipC;
          var cells = [pct(rates[j] / 100), money(tipC), money(totC), money(Math.ceil(totC / v.n))];
          var tr = document.createElement('tr');
          if (isCur) tr.className = 'tp-cur';
          for (var c = 0; c < cells.length; c++) {
            var td = document.createElement('td');
            td.textContent = cells[c];
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
          noteEl.textContent = (out && out.error) || T.errBill;
          return false;
        }
        var v = out.values;
        mainEl.textContent = money(v.tipC);
        mainSubEl.textContent = fill(T.sub, { p: pct(v.tipC / v.baseC), base: money(v.baseC) });
        totalEl.textContent = money(v.totalC);
        if (v.n > 1) {
          eachRowEl.style.display = '';
          eachTipRowEl.style.display = '';
          eachEl.textContent = v.round === 'each' ? fill(T.even, { v: money(v.eachRoundC) }) : splitText(v.totalC, v.n);
          eachTipEl.textContent = money(Math.round(v.tipC / v.n));
        } else {
          eachRowEl.style.display = 'none';
          eachTipRowEl.style.display = 'none';
        }
        renderWork(v);
        renderTable(v);
        detailsEl.style.display = '';
        noteEl.textContent = T.note;
        return true;
      }

      /** 按小费方式切换标签与占位符；未填税额时禁用计费基数。 */
      function syncLabels() {
        var amt = tipModeEl.value === 'amt';
        tipLabelEl.textContent = amt ? T.tipAmt : T.tipPct;
        tipEl.placeholder = amt ? T.phAmt : T.phPct;
        var tax = parseNum(taxEl.value);
        baseEl.disabled = !(tax != null && tax > 0);
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
        billEl.value = localize(smp[0]);
        taxEl.value = localize(smp[1]);
        baseEl.value = smp[2];
        tipModeEl.value = smp[3];
        tipEl.value = localize(smp[4]);
        peopleEl.value = smp[5];
        roundEl.value = smp[6];
        syncLabels();
        runCalc();
      }

      /** 快捷按钮：显示本地百分比文字；点击后切到百分比方式并立即计算。 */
      for (var ci = 0; ci < chipEls.length; ci++) {
        (function (btn) {
          var rate = Number(btn.getAttribute('data-rate'));
          btn.textContent = pct(rate / 100);
          btn.addEventListener('click', function () {
            tipModeEl.value = 'pct';
            tipEl.value = String(rate);
            syncLabels();
            runCalc();
          });
        })(chipEls[ci]);
      }

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        runCalc();
      });
      tipModeEl.addEventListener('change', syncLabels);
      taxEl.addEventListener('input', syncLabels);
      document.getElementById('tpBtnSample').addEventListener('click', loadSample);
      /** 清空：只清输入、恢复默认选项并隐藏结果，不重新加载样例。 */
      document.getElementById('tpBtnClear').addEventListener('click', function () {
        billEl.value = '';
        taxEl.value = '';
        tipEl.value = '';
        peopleEl.value = '';
        baseEl.value = 'pre';
        tipModeEl.value = 'pct';
        roundEl.value = 'none';
        syncLabels();
        result.style.display = 'none';
        billEl.focus();
      });
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('how-to-calculate-tip');
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
