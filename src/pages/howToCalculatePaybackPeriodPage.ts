/**
 * 投资回收期计算器工具页。
 * slug: how-to-calculate-payback-period（见 work-tasks/how-to-calculate-payback-period/02-tool-info.md）。
 *
 * 交互要点（2026-10-14 改写）：
 * - 现金流一个框：只填一个数 = 每年相同；填一串 = 第 1、2、3… 年各不相同（可含负数）；
 * - 可选折现率：同时给出折现回收期（年末现金流按 (1+r)^t 折现）；
 * - 按年累计表 + 插值过程（整年 + 剩余额 ÷ 当年现金流），并换算为「年 + 月」；
 * - 识别「列出年份内收不回」与「回本后累计又转负」两种情况。
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
const PREFIX = 'tool_payback_period';

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
 * 渲染 how-to-calculate-payback-period 工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 * @returns 完整页面 HTML
 */
export const renderHowToCalculatePaybackPeriodPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 读取本工具键（自动拼前缀）。 */
	const tx = (key: string) => t(opts.lang, `${PREFIX}_${key}` as keyof typeof import('../site/i18n/en').default);

	const toolPath = '/tools/how-to-calculate-payback-period';
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
			currentSlug: 'how-to-calculate-payback-period',
			currentAnchor: '#payback-period',
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
    .form-row { display:grid; grid-template-columns:1fr 1fr; gap:1rem; }
    @media (max-width:576px) { .form-row { grid-template-columns:1fr; } }
    .btn-row { display:flex; flex-wrap:wrap; gap:.5rem; align-items:center; }
    .result { background:#f8f9fa; padding:1rem; border-radius:8px; margin-top:1rem; }
    .pb-main { font-size:1.6rem; font-weight:600; text-align:center; margin:.25rem 0 0; font-variant-numeric:tabular-nums; }
    .pb-sub { text-align:center; color:#495057; font-size:.95rem; margin-top:.25rem; }
    .pb-line { color:#495057; font-size:.92rem; margin-top:.6rem; }
    .pb-table-wrap { overflow-x:auto; margin-top:1rem; }
    .pb-table { width:100%; border-collapse:collapse; font-size:.9rem; font-variant-numeric:tabular-nums; }
    .pb-table th, .pb-table td { padding:.35rem .5rem; border-bottom:1px solid #dee2e6; text-align:end; white-space:nowrap; }
    .pb-table th:first-child, .pb-table td:first-child { text-align:start; }
    .pb-table tr.pb-hit td { background:#e7f1ff; font-weight:600; }
    .pb-table td.pb-neg { color:#b02a37; }
    .result .muted { color:#6c757d; font-size:.9rem; margin-top:.75rem; }
  </style>`;

	const contentHtml = `
    <div id="payback-period" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(tx('title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <form id="calcForm" novalidate>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label" for="pbInvest">${escapeHtml(tx('invest_label'))}</label>
              <input id="pbInvest" class="input-lg" type="text" inputmode="decimal" autocomplete="off" placeholder="${escapeHtml(tx('invest_ph'))}">
            </div>
            <div class="form-group">
              <label class="form-label" for="pbRate">${escapeHtml(tx('rate_label'))}</label>
              <input id="pbRate" class="input-lg" type="text" inputmode="decimal" autocomplete="off" placeholder="${escapeHtml(tx('rate_ph'))}">
              <span class="form-hint">${escapeHtml(tx('rate_hint'))}</span>
            </div>
          </div>
          <div class="form-group">
            <label class="form-label" for="pbFlows">${escapeHtml(tx('cf_label'))}</label>
            <textarea id="pbFlows" class="input-lg" rows="3" style="min-height:4.5rem;resize:vertical;font-family:inherit"
              placeholder="${escapeHtml(tx('cf_ph'))}"></textarea>
            <span class="form-hint">${escapeHtml(tx('cf_hint'))}</span>
          </div>
          <div class="btn-row">
            <button type="submit" id="pbBtnCalc" class="btn btn-primary">${escapeHtml(tx('calculate'))}</button>
            <button type="button" id="pbBtnSample" class="btn btn-outline-secondary">${escapeHtml(tx('sample'))}</button>
            <button type="button" id="pbBtnClear" class="btn btn-outline-secondary">${escapeHtml(tx('clear'))}</button>
          </div>
        </form>
        <div id="calcResult" class="result" style="display:none" aria-live="polite">
          <div class="pb-sub">${escapeHtml(tx('yearsOut_label'))}</div>
          <div id="pbMain" class="pb-main"></div>
          <div id="pbMainYm" class="pb-sub"></div>
          <div id="pbDetails">
            <div id="pbDiscRow" class="pb-line"><strong>${escapeHtml(tx('disc_label'))}:</strong> <span id="pbDisc"></span></div>
            <div class="pb-line"><strong>${escapeHtml(tx('work_label'))}:</strong> <span id="pbWork"></span></div>
            <div id="pbDiscWorkRow" class="pb-line"><strong>${escapeHtml(tx('disc_work_label'))}:</strong> <span id="pbDiscWork"></span></div>
            <div id="pbWarn" class="pb-line"></div>
            <div class="pb-table-wrap">
              <table class="pb-table">
                <thead><tr>
                  <th scope="col">${escapeHtml(tx('col_year'))}</th>
                  <th scope="col">${escapeHtml(tx('col_cf'))}</th>
                  <th scope="col">${escapeHtml(tx('col_cum'))}</th>
                  <th scope="col" class="pb-dcol">${escapeHtml(tx('col_dcf'))}</th>
                  <th scope="col" class="pb-dcol">${escapeHtml(tx('col_dcum'))}</th>
                </tr></thead>
                <tbody id="pbBody"></tbody>
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
				href: 'https://www.investopedia.com/terms/p/paybackperiod.asp',
			},
			{
				label: tx('ref_b_label'),
				href: 'https://www.investopedia.com/terms/d/discounted-payback-period.asp',
			},
		],
	});

	/** 前端脚本需要的文案（一次性注入）。 */
	const clientText = {
		errInvest: tx('err_invest'),
		errFlows: tx('err_flows'),
		errToken: tx('err_token'),
		errRate: tx('err_rate'),
		note: tx('result_note'),
		years: tx('years_tpl'),
		ym: tx('ym_tpl'),
		workSplit: tx('work_split'),
		workExact: tx('work_exact'),
		workConst: tx('work_const'),
		never: tx('never_tpl'),
		neverDisc: tx('never_disc_tpl'),
		dip: tx('dip_tpl'),
		discOff: tx('disc_off'),
	};

	const extraBodyHtml = `
  <script>
    (function () {
      /** 表单与输入控件。 */
      var form = document.getElementById('calcForm');
      var investEl = document.getElementById('pbInvest');
      var flowsEl = document.getElementById('pbFlows');
      var rateEl = document.getElementById('pbRate');
      /** 结果区各输出位。 */
      var result = document.getElementById('calcResult');
      var detailsEl = document.getElementById('pbDetails');
      var mainEl = document.getElementById('pbMain');
      var mainYmEl = document.getElementById('pbMainYm');
      var discRowEl = document.getElementById('pbDiscRow');
      var discEl = document.getElementById('pbDisc');
      var workEl = document.getElementById('pbWork');
      var discWorkRowEl = document.getElementById('pbDiscWorkRow');
      var discWorkEl = document.getElementById('pbDiscWork');
      var warnEl = document.getElementById('pbWarn');
      var bodyEl = document.getElementById('pbBody');
      var noteEl = document.getElementById('calcNote');
      /** 当前页面语言（决定数字格式与小数逗号解析）。 */
      var LANG = ${JSON.stringify(opts.lang)};
      /** 本地化文案字典。 */
      var T = ${JSON.stringify(clientText)};
      /** 等额现金流时最多推算的年数。 */
      var HORIZON = 100;
      /** 表格最多显示的年数行。 */
      var MAX_ROWS = 60;
      /** 样例轮换：[投资, 现金流, 折现率]；首个与 Example 一致（数字用点小数，进页时按本地写法转换）。 */
      var SAMPLES = [
        ['10000', '2500', '8'],
        ['50000', '10000 15000 20000 25000', ''],
        ['12000', '1100', '5']
      ];
      /** 下一次点击「加载样例」使用的样例下标。 */
      var sampleIndex = 0;

      /** 金额格式器：整数不带小数，非整数固定 2 位（避免 1,557.2 这类写法）；年数格式器固定 2 位。 */
      var moneyFormat = null;
      var centsFormat = null;
      var yearsFormat = null;
      try {
        moneyFormat = new Intl.NumberFormat(LANG + '-u-nu-latn', { maximumFractionDigits: 2 });
        centsFormat = new Intl.NumberFormat(LANG + '-u-nu-latn', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        yearsFormat = new Intl.NumberFormat(LANG + '-u-nu-latn', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      } catch (e) {
        moneyFormat = null;
        centsFormat = null;
        yearsFormat = null;
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
       * 金额显示。
       * @param {number} n 金额
       * @returns {string} 本地格式文本
       */
      function money(n) {
        if (!Number.isFinite(n)) return '—';
        var v = Math.round(n * 100) / 100;
        if (Math.abs(v) < 0.005) v = 0;
        var whole = Math.abs(v - Math.round(v)) < 1e-9;
        if (whole) return moneyFormat ? moneyFormat.format(v) : String(v);
        return centsFormat ? centsFormat.format(v) : v.toFixed(2);
      }

      /**
       * 年数显示（2 位小数）。
       * @param {number} n 年数
       * @returns {string} 本地格式文本
       */
      function yearsText(n) {
        return yearsFormat ? yearsFormat.format(n) : n.toFixed(2);
      }

      /**
       * 年数换算为「年 + 月」（月数四舍五入，满 12 进 1 年）。
       * @param {number} y 年数
       * @returns {string} 如 3 yr 2 mo
       */
      function ymText(y) {
        var full = Math.floor(y);
        var months = Math.round((y - full) * 12);
        if (months === 12) {
          full += 1;
          months = 0;
        }
        return fill(T.ym, { y: full, m: months });
      }

      /**
       * 解析单个金额记号；英文类页面逗号是千分位，小数逗号语种逗号是小数点。
       * @param {string} token 记号（已去货币符号）
       * @returns {number[]|null} 解析出的金额（英文页「10000,15000」可拆成多个）；无效 null
       */
      function parseToken(token) {
        var s = token;
        if (!s) return [];
        if (DEC === ',') {
          if (/^-?[0-9]{1,3}([.][0-9]{3})+(,[0-9]+)?$/.test(s)) s = s.split('.').join('');
          s = s.replace(',', '.');
          var v1 = Number(s);
          return Number.isFinite(v1) ? [v1] : null;
        }
        if (/^-?[0-9]{1,3}(,[0-9]{3})+([.][0-9]+)?$/.test(s)) {
          var v2 = Number(s.split(',').join(''));
          return Number.isFinite(v2) ? [v2] : null;
        }
        var pieces = s.split(',').filter(function (p) { return p !== ''; });
        var out = [];
        for (var i = 0; i < pieces.length; i++) {
          var v3 = Number(pieces[i]);
          if (!Number.isFinite(v3)) return null;
          out.push(v3);
        }
        return out;
      }

      /**
       * 解析一串金额：按空格、换行、分号分隔；去掉货币符号、撇号与不换行空格（法/俄千分位）。
       * @param {string} raw 原始输入
       * @param {boolean} single 单值字段（投资、折现率）：去掉全部空白，「10 000」视为一个数
       * @returns {{ ok: boolean, values?: number[], bad?: string }} 金额列表或第一个无效记号
       */
      function parseList(raw, single) {
        var cleaned = '';
        var text = String(raw || '');
        for (var i = 0; i < text.length; i++) {
          var ch = text.charAt(i);
          var code = text.charCodeAt(i);
          if ('$€£¥₹₩₽'.indexOf(ch) >= 0 || code === 39 || code === 8217 || code === 160 || code === 8239) continue;
          if (ch === '−') ch = '-';
          if (ch === ';' || code === 9 || code === 10 || code === 13) ch = ' ';
          if (single && ch === ' ') continue;
          cleaned += ch;
        }
        var tokens = cleaned.split(' ').filter(function (x) { return x !== ''; });
        var values = [];
        for (var j = 0; j < tokens.length; j++) {
          var parsed = parseToken(tokens[j]);
          if (parsed == null) return { ok: false, bad: tokens[j] };
          values = values.concat(parsed);
        }
        return { ok: true, values: values };
      }

      /**
       * 在现金流序列上求回收期（年末累计首次 ≥ 0，年内按均匀流入插值）。
       * @param {number} invest 初始投资（> 0）
       * @param {number[]} flows 第 1…n 年现金流
       * @returns {{ found: boolean, years?: number, full?: number, recovered?: number, left?: number, cf?: number, exact?: boolean, short?: number, dipYear?: number }}
       */
      function payback(invest, flows) {
        var cum = -invest;
        var res = { found: false };
        for (var t = 1; t <= flows.length; t++) {
          var prev = cum;
          cum += flows[t - 1];
          if (!res.found && cum >= -1e-9) {
            var frac = flows[t - 1] > 0 ? -prev / flows[t - 1] : 0;
            res = {
              found: true,
              years: t - 1 + frac,
              full: t - 1,
              recovered: invest + prev,
              left: -prev,
              cf: flows[t - 1],
              exact: Math.abs(cum) < 1e-9,
            };
          } else if (res.found && res.dipYear == null && cum < -1e-9) {
            res.dipYear = t;
          }
        }
        if (!res.found) res.short = -cum;
        return res;
      }

      /**
       * 回收过程说明文本。
       * @param {Object} r payback() 结果
       * @returns {string} 说明
       */
      function workText(r) {
        if (r.exact) return fill(T.workExact, { y: r.full + 1, years: yearsText(r.years) });
        return fill(T.workSplit, {
          full: r.full,
          recovered: money(r.recovered),
          left: money(r.left),
          next: r.full + 1,
          cf: money(r.cf),
          frac: yearsText(r.years - r.full),
          years: yearsText(r.years),
        });
      }

      /**
       * 计算简单与折现回收期并生成表格数据。
       * @returns {{ ok: boolean, error?: string, values?: Object }}
       */
      function compute() {
        var inv = parseList(investEl.value, true);
        if (!inv.ok || !inv.values || inv.values.length !== 1 || !(inv.values[0] > 0)) return { ok: false, error: T.errInvest };
        var invest = inv.values[0];
        var fl = parseList(flowsEl.value, false);
        if (!fl.ok) return { ok: false, error: fill(T.errToken, { token: fl.bad }) };
        if (!fl.values.length) return { ok: false, error: T.errFlows };
        var rateRaw = String(rateEl.value || '').trim().replace('%', '');
        var rate = 0;
        if (rateRaw) {
          var rp = parseList(rateRaw, true);
          if (!rp.ok || rp.values.length !== 1 || !(rp.values[0] >= 0) || rp.values[0] > 100) return { ok: false, error: T.errRate };
          rate = rp.values[0] / 100;
        }
        /** 只填一个数：视为每年相同，推算至 HORIZON 年。 */
        var constant = fl.values.length === 1;
        var flows = constant ? [] : fl.values.slice();
        if (constant) {
          for (var i = 0; i < HORIZON; i++) flows.push(fl.values[0]);
        }
        var dflows = flows.map(function (cf, idx) { return cf / Math.pow(1 + rate, idx + 1); });
        var simple = payback(invest, flows);
        var disc = rate > 0 ? payback(invest, dflows) : null;
        return {
          ok: true,
          values: { invest: invest, flows: flows, dflows: dflows, simple: simple, disc: disc, rate: rate, constant: constant, cf0: fl.values[0] },
        };
      }

      /**
       * 渲染逐年累计表（显示到回本年份之后 1 年，或列出的全部年份）。
       * @param {Object} v compute() 的 values
       */
      function renderTable(v) {
        var last = v.flows.length;
        var hits = [];
        if (v.simple.found) hits.push(Math.ceil(v.simple.years - 1e-9) || 1);
        if (v.disc && v.disc.found) hits.push(Math.ceil(v.disc.years - 1e-9) || 1);
        if (v.constant) {
          /** 等额现金流：显示到最晚回本年的下一年；若有一项收不回，至少显示 15 年。 */
          var allFound = hits.length === (v.disc ? 2 : 1);
          last = hits.length ? Math.max.apply(null, hits) + 1 : 15;
          if (!allFound) last = Math.max(last, 15);
        }
        last = Math.min(last, v.flows.length, MAX_ROWS);
        var showDisc = v.rate > 0;
        var cols = document.querySelectorAll('.pb-dcol');
        for (var c = 0; c < cols.length; c++) cols[c].style.display = showDisc ? '' : 'none';
        while (bodyEl.firstChild) bodyEl.removeChild(bodyEl.firstChild);
        var cum = -v.invest;
        var dcum = -v.invest;
        /** 生成一行。 */
        function addRow(year, cf, cumV, dcf, dcumV, hit) {
          var tr = document.createElement('tr');
          if (hit) tr.className = 'pb-hit';
          var cells = [String(year), money(cf), money(cumV)];
          if (showDisc) cells.push(money(dcf), money(dcumV));
          for (var k = 0; k < cells.length; k++) {
            var td = document.createElement('td');
            td.textContent = cells[k];
            if (k > 0 && /^-/.test(cells[k])) td.className = 'pb-neg';
            tr.appendChild(td);
          }
          bodyEl.appendChild(tr);
        }
        addRow(0, -v.invest, cum, -v.invest, dcum, false);
        for (var t = 1; t <= last; t++) {
          cum += v.flows[t - 1];
          dcum += v.dflows[t - 1];
          var hit = hits.indexOf(t) >= 0;
          addRow(t, v.flows[t - 1], cum, v.dflows[t - 1], dcum, hit);
        }
      }

      /** 执行计算并刷新结果区；失败时隐藏明细并显示具体错误。 */
      function runCalc() {
        var out = compute();
        result.style.display = 'block';
        if (!out || !out.ok) {
          mainEl.textContent = '—';
          mainYmEl.textContent = '';
          detailsEl.style.display = 'none';
          noteEl.textContent = (out && out.error) || T.errInvest;
          return false;
        }
        var v = out.values;
        var s = v.simple;
        var horizonYears = v.flows.length;
        var warn = [];
        if (s.found) {
          mainEl.textContent = fill(T.years, { v: yearsText(s.years) });
          mainYmEl.textContent = ymText(s.years);
          /** 等额现金流直接用「投资 ÷ 年现金流」捷径；不等额写出整年 + 插值过程。 */
          workEl.textContent = v.constant
            ? fill(T.workConst, { invest: money(v.invest), cf: money(v.cf0), years: yearsText(s.years) })
            : workText(s);
          if (s.dipYear) warn.push(fill(T.dip, { y: s.dipYear }));
        } else {
          mainEl.textContent = '—';
          mainYmEl.textContent = '';
          workEl.textContent = fill(T.never, { n: horizonYears, short: money(s.short) });
        }
        if (v.disc) {
          discRowEl.style.display = '';
          discWorkRowEl.style.display = '';
          var rateTxt = moneyFormat ? moneyFormat.format(v.rate * 100) : String(v.rate * 100);
          if (v.disc.found) {
            discEl.textContent = fill(T.years, { v: yearsText(v.disc.years) }) + ' (' + ymText(v.disc.years) + ')';
            discWorkEl.textContent = workText(v.disc);
          } else {
            discEl.textContent = '—';
            discWorkEl.textContent = fill(T.neverDisc, { rate: rateTxt, n: horizonYears, short: money(v.disc.short) });
          }
        } else {
          discRowEl.style.display = '';
          discEl.textContent = T.discOff;
          discWorkRowEl.style.display = 'none';
        }
        warnEl.textContent = warn.join(' ');
        warnEl.style.display = warn.length ? '' : 'none';
        renderTable(v);
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
        rateEl.value = localize(smp[2]);
        runCalc();
      }

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        runCalc();
      });
      document.getElementById('pbBtnSample').addEventListener('click', loadSample);
      /** 清空：只清输入并隐藏结果，不重新加载样例。 */
      document.getElementById('pbBtnClear').addEventListener('click', function () {
        investEl.value = '';
        flowsEl.value = '';
        rateEl.value = '';
        result.style.display = 'none';
        investEl.focus();
      });
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('how-to-calculate-payback-period');
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
