/**
 * 利润率计算器工具页。
 * slug: how-to-calculate-profit-margin（见 work-tasks/how-to-calculate-profit-margin/02-tool-info.md）。
 *
 * 交互要点（2026-10-15 改写）：
 * - 两种模式：利润表三级利润率（销售额、销货成本、营业费用、利息税费等）/ 按目标利润率反推售价；
 * - 利润表模式：净利率为主结果，并给出毛利率、营业利润率、净利率三行算式、销货成本加价率，
 *   以及「每 100 销售额去向」的同比例结构表（common-size income statement）；
 * - 反推售价模式：售价 = 成本 ÷ (1 − 利润率)，给出单位利润、对应加价率，
 *   并演示「把利润率当加价率加到成本上」这一常见错误实际只得到多少利润率；
 * - 亏损时净利率为负并改用亏损文案；输入容错：千分位、小数逗号；空白成本按 0 处理；
 * - 报错分别提示：销售额非正、数字格式、成本为负、单位成本非正、目标利润率越界。
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
const PREFIX = 'tool_profit_margin';

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
 * 渲染 how-to-calculate-profit-margin 工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 * @returns 完整页面 HTML
 */
export const renderHowToCalculateProfitMarginPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 读取本工具键（自动拼前缀）。 */
	const tx = (key: string) => t(opts.lang, `${PREFIX}_${key}` as keyof typeof import('../site/i18n/en').default);

	const toolPath = '/tools/how-to-calculate-profit-margin';
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
			currentSlug: 'how-to-calculate-profit-margin',
			currentAnchor: '#profit-margin',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	/** 结果区一行：标签 + 输出位。 */
	const row = (id: string, labelKey: string) =>
		`<div id="${id}Row" class="pm-line"><strong>${escapeHtml(tx(labelKey))}:</strong> <span id="${id}"></span></div>`;

	/**
	 * 文本输入框（允许千分位与小数逗号）。
	 * @param id 元素 id
	 * @param labelKey 标签键
	 * @param phKey 占位符键
	 * @param cls 外层附加类名（按模式显隐）
	 * @returns 表单组 HTML
	 */
	const field = (id: string, labelKey: string, phKey: string, cls: string) => `
            <div class="form-group ${cls}">
              <label class="form-label" for="${id}">${escapeHtml(tx(labelKey))}</label>
              <input id="${id}" class="input-lg" type="text" inputmode="decimal" autocomplete="off" placeholder="${escapeHtml(tx(phKey))}">
            </div>`;

	const extraHeadHtml = `
  <style>
    .tool-card { max-width: var(--content-max); width: 100%; margin: 0 0 1.5rem; }
    .form-label { display:block; margin-bottom:.5rem; color:#495057; font-weight:500 }
    .form-hint { display:block; color:#6c757d; font-size:.85rem; margin:-.25rem 0 .75rem; }
    .form-group { margin-bottom:1rem; }
    .form-row2 { display:grid; grid-template-columns:repeat(2, 1fr); gap:0 1rem; }
    @media (max-width:576px) { .form-row2 { grid-template-columns:1fr; } }
    .btn-row { display:flex; flex-wrap:wrap; gap:.5rem; align-items:center; }
    .result { background:#f8f9fa; padding:1rem; border-radius:8px; margin-top:1rem; }
    .pm-main { font-size:1.6rem; font-weight:600; text-align:center; margin:.25rem 0 0; font-variant-numeric:tabular-nums; }
    .pm-sub { text-align:center; color:#495057; font-size:.95rem; margin-top:.25rem; }
    .pm-line { color:#495057; font-size:.92rem; margin-top:.5rem; font-variant-numeric:tabular-nums; }
    .pm-table { width:100%; border-collapse:collapse; margin-top:.75rem; font-size:.9rem; font-variant-numeric:tabular-nums; }
    .pm-table caption { caption-side:top; text-align:start; color:#495057; font-weight:600; padding-bottom:.25rem; }
    .pm-table th, .pm-table td { border-bottom:1px solid #dee2e6; padding:.3rem .5rem; text-align:end; }
    .pm-table th:first-child, .pm-table td:first-child { text-align:start; }
    .pm-table tr.pm-total td { font-weight:600; }
    .result .muted { color:#6c757d; font-size:.9rem; margin-top:.75rem; }
  </style>`;

	const contentHtml = `
    <div id="profit-margin" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(tx('title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <form id="calcForm" novalidate>
          <div class="form-group">
            <label class="form-label" for="pmMode">${escapeHtml(tx('mode_label'))}</label>
            <select id="pmMode" class="input-lg">
              <option value="statement" selected>${escapeHtml(tx('mode_statement'))}</option>
              <option value="price">${escapeHtml(tx('mode_price'))}</option>
            </select>
          </div>
          <div class="form-row2">
            ${field('pmRev', 'rev_label', 'rev_ph', 'pm-st')}
            ${field('pmCogs', 'cogs_label', 'cogs_ph', 'pm-st')}
            ${field('pmOpex', 'opex_label', 'opex_ph', 'pm-st')}
            ${field('pmOther', 'other_label', 'other_ph', 'pm-st')}
            ${field('pmCost', 'cost_label', 'cost_ph', 'pm-pr')}
            ${field('pmTarget', 'target_label', 'target_ph', 'pm-pr')}
          </div>
          <span id="pmHint" class="form-hint">${escapeHtml(tx('hint_statement'))}</span>
          <div class="btn-row">
            <button type="submit" id="pmBtnCalc" class="btn btn-primary">${escapeHtml(tx('calculate'))}</button>
            <button type="button" id="pmBtnSample" class="btn btn-outline-secondary">${escapeHtml(tx('sample'))}</button>
            <button type="button" id="pmBtnClear" class="btn btn-outline-secondary">${escapeHtml(tx('clear'))}</button>
          </div>
        </form>
        <div id="calcResult" class="result" style="display:none" aria-live="polite">
          <div id="pmMainLabel" class="pm-sub">${escapeHtml(tx('out_net'))}</div>
          <div id="pmMain" class="pm-main"></div>
          <div id="pmMainSub" class="pm-sub"></div>
          <div id="pmDetails">
            ${row('pmWork', 'work_label')}
            ${row('pmGross', 'gross_label')}
            ${row('pmOp', 'op_label')}
            ${row('pmNet', 'net_label')}
            ${row('pmProfit', 'profit_label')}
            ${row('pmMarkup', 'markup_label')}
            ${row('pmTrap', 'trap_label')}
            <table id="pmTable" class="pm-table" style="display:none">
              <caption>${escapeHtml(tx('table_caption'))}</caption>
              <thead><tr><th>${escapeHtml(tx('col_item'))}</th><th>${escapeHtml(tx('col_amount'))}</th><th>${escapeHtml(tx('col_share'))}</th></tr></thead>
              <tbody id="pmBody"></tbody>
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
				href: 'https://www.investopedia.com/terms/p/profitmargin.asp',
			},
			{
				label: tx('ref_b_label'),
				href: 'https://www.investopedia.com/terms/o/operatingmargin.asp',
			},
		],
	});

	/** 前端脚本需要的文案（一次性注入）。 */
	const clientText = {
		outNet: tx('out_net'),
		outPrice: tx('out_price'),
		hintStatement: tx('hint_statement'),
		hintPrice: tx('hint_price'),
		subKeep: tx('sub_keep_tpl'),
		subLoss: tx('sub_loss_tpl'),
		subPrice: tx('sub_price_tpl'),
		gross: tx('gross_tpl'),
		op: tx('op_tpl'),
		net: tx('net_tpl'),
		markup: tx('markup_tpl'),
		markupNone: tx('markup_none'),
		markupPrice: tx('markup_price_tpl'),
		work: tx('work_price_tpl'),
		profit: tx('profit_tpl'),
		trap: tx('trap_tpl'),
		lineRev: tx('line_rev'),
		lineCogs: tx('line_cogs'),
		lineGross: tx('line_gross'),
		lineOpex: tx('line_opex'),
		lineOp: tx('line_op'),
		lineOther: tx('line_other'),
		lineNet: tx('line_net'),
		errRev: tx('err_rev'),
		errNum: tx('err_num'),
		errNeg: tx('err_neg'),
		errCost: tx('err_cost'),
		errTarget: tx('err_target'),
		noteStatement: tx('result_note_statement'),
		notePrice: tx('result_note_price'),
	};

	const extraBodyHtml = `
  <script>
    (function () {
      /** 表单与输入控件。 */
      var form = document.getElementById('calcForm');
      var modeEl = document.getElementById('pmMode');
      var revEl = document.getElementById('pmRev');
      var cogsEl = document.getElementById('pmCogs');
      var opexEl = document.getElementById('pmOpex');
      var otherEl = document.getElementById('pmOther');
      var costEl = document.getElementById('pmCost');
      var targetEl = document.getElementById('pmTarget');
      var hintEl = document.getElementById('pmHint');
      /** 结果区各输出位。 */
      var result = document.getElementById('calcResult');
      var detailsEl = document.getElementById('pmDetails');
      var mainLabelEl = document.getElementById('pmMainLabel');
      var mainEl = document.getElementById('pmMain');
      var mainSubEl = document.getElementById('pmMainSub');
      var tableEl = document.getElementById('pmTable');
      var bodyEl = document.getElementById('pmBody');
      var noteEl = document.getElementById('calcNote');
      /** 当前页面语言（决定小数点与数字格式）。 */
      var LANG = ${JSON.stringify(opts.lang)};
      /** 本地化文案字典。 */
      var T = ${JSON.stringify(clientText)};
      /** 样例轮换：[模式, 销售额, 销货成本, 营业费用, 利息税费等, 单位成本, 目标利润率%]；首个与 Example 一致。 */
      var SAMPLES = [
        ['statement', '250000', '150000', '60000', '12000', '', ''],
        ['statement', '80000', '52000', '31000', '', '', ''],
        ['price', '', '', '', '', '40', '25']
      ];
      /** 下一次点击「加载样例」使用的样例下标。 */
      var sampleIndex = 0;

      /** 金额与百分比格式器（两位小数、拉丁数字）。 */
      var moneyFormat = null;
      var pctFormat = null;
      try {
        moneyFormat = new Intl.NumberFormat(LANG + '-u-nu-latn', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        pctFormat = new Intl.NumberFormat(LANG + '-u-nu-latn', { style: 'percent', minimumFractionDigits: 2, maximumFractionDigits: 2 });
      } catch (e) {
        moneyFormat = null;
        pctFormat = null;
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
        if (Math.abs(v) < 0.005) v = 0;
        var s = moneyFormat ? moneyFormat.format(v) : v.toFixed(2);
        return s.replace('-', '−');
      }

      /**
       * 百分比：两位小数（v 为比例，0.05 = 5%；真减号）。
       * @param {number} v 比例
       * @returns {string} 文本
       */
      function pct(v) {
        if (Math.abs(v) < 5e-7) v = 0;
        var s = pctFormat ? pctFormat.format(v) : (v * 100).toFixed(2) + '%';
        return s.replace('-', '−');
      }

      /**
       * 解析数字：容忍千分位与本地小数点；留空 undefined，无效 NaN。
       * @param {string} raw 原始输入
       * @returns {number|undefined} 数值
       */
      function parseNum(raw) {
        var s = String(raw || '').split(' ').join('').split(String.fromCharCode(160)).join('').split(String.fromCharCode(8239)).join('').split('−').join('-');
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
       * 判断 parseNum 结果是否为「填了但不是数字」（留空的 undefined 不算无效）。
       * @param {number|undefined} v parseNum 返回值
       * @returns {boolean} 是否无效
       */
      function invalid(v) {
        return v !== undefined && isNaN(v);
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
       * 读取输入并校验。
       * @returns {{ ok: boolean, error?: string, values?: Object }}
       */
      function compute() {
        if (modeEl.value === 'price') {
          var cost = parseNum(costEl.value);
          if (invalid(cost)) return { ok: false, error: T.errNum };
          if (!(cost > 0)) return { ok: false, error: T.errCost };
          var target = parseNum(targetEl.value);
          if (target === undefined || isNaN(target) || target < 0 || target >= 100) return { ok: false, error: T.errTarget };
          return { ok: true, values: { mode: 'price', cost: cost, m: target / 100 } };
        }
        var rev = parseNum(revEl.value);
        if (invalid(rev)) return { ok: false, error: T.errNum };
        if (!(rev > 0)) return { ok: false, error: T.errRev };
        var cogs = parseNum(cogsEl.value);
        var opex = parseNum(opexEl.value);
        var other = parseNum(otherEl.value);
        if (invalid(cogs) || invalid(opex) || invalid(other)) return { ok: false, error: T.errNum };
        cogs = cogs === undefined ? 0 : cogs;
        opex = opex === undefined ? 0 : opex;
        other = other === undefined ? 0 : other;
        if (cogs < 0 || opex < 0) return { ok: false, error: T.errNeg };
        return { ok: true, values: { mode: 'statement', rev: rev, cogs: cogs, opex: opex, other: other } };
      }

      /**
       * 同比例结构表追加一行：项目、金额、占销售额比例。
       * @param {string} label 项目名
       * @param {number} amount 金额
       * @param {number} rev 销售额
       * @param {boolean} total 是否为利润小计行（加粗）
       */
      function appendLine(label, amount, rev, total) {
        var tr = document.createElement('tr');
        if (total) tr.className = 'pm-total';
        var cells = [label, money(amount), pct(amount / rev)];
        for (var i = 0; i < cells.length; i++) {
          var td = document.createElement('td');
          td.textContent = cells[i];
          tr.appendChild(td);
        }
        bodyEl.appendChild(tr);
      }

      /**
       * 渲染利润表模式：净利率、三级利润率、加价率与同比例结构表。
       * @param {Object} v compute() 返回的数值
       */
      function renderStatement(v) {
        var gross = v.rev - v.cogs;
        var op = gross - v.opex;
        var net = op - v.other;
        var nm = net / v.rev;
        var r = money(v.rev);
        mainLabelEl.textContent = T.outNet;
        mainEl.textContent = pct(nm);
        mainSubEl.textContent = fill(nm < 0 ? T.subLoss : T.subKeep, { v: money(Math.abs(nm) * 100) });
        setRow('pmWork', null);
        setRow('pmGross', fill(T.gross, { p: money(gross), r: r, m: pct(gross / v.rev) }));
        setRow('pmOp', fill(T.op, { p: money(op), r: r, m: pct(op / v.rev) }));
        setRow('pmNet', fill(T.net, { p: money(net), r: r, m: pct(nm) }));
        setRow('pmProfit', null);
        setRow('pmMarkup', v.cogs > 0 ? fill(T.markup, { p: money(gross), c: money(v.cogs), m: pct(gross / v.cogs) }) : T.markupNone);
        setRow('pmTrap', null);
        while (bodyEl.firstChild) bodyEl.removeChild(bodyEl.firstChild);
        appendLine(T.lineRev, v.rev, v.rev, false);
        appendLine(T.lineCogs, v.cogs, v.rev, false);
        appendLine(T.lineGross, gross, v.rev, true);
        appendLine(T.lineOpex, v.opex, v.rev, false);
        appendLine(T.lineOp, op, v.rev, true);
        appendLine(T.lineOther, v.other, v.rev, false);
        appendLine(T.lineNet, net, v.rev, true);
        tableEl.style.display = '';
        noteEl.textContent = T.noteStatement;
      }

      /**
       * 渲染反推售价模式：售价、单位利润、加价率与「利润率当加价率」的常见错误。
       * @param {Object} v compute() 返回的数值
       */
      function renderPrice(v) {
        var price = v.cost / (1 - v.m);
        var unit = price - v.cost;
        var mt = pct(v.m);
        mainLabelEl.textContent = T.outPrice;
        mainEl.textContent = money(price);
        mainSubEl.textContent = fill(T.subPrice, { u: money(unit), m: mt });
        setRow('pmWork', fill(T.work, { c: money(v.cost), m: mt, p: money(price) }));
        setRow('pmGross', null);
        setRow('pmOp', null);
        setRow('pmNet', null);
        setRow('pmProfit', fill(T.profit, { p: money(price), c: money(v.cost), u: money(unit) }));
        setRow('pmMarkup', fill(T.markupPrice, { u: money(unit), c: money(v.cost), k: pct(unit / v.cost) }));
        if (v.m > 0) {
          var wrong = v.cost * (1 + v.m);
          setRow('pmTrap', fill(T.trap, { m: mt, c: money(v.cost), w: money(wrong), x: pct((wrong - v.cost) / wrong), d: money(price - wrong) }));
        } else {
          setRow('pmTrap', null);
        }
        tableEl.style.display = 'none';
        noteEl.textContent = T.notePrice;
      }

      /** 执行计算并刷新结果区；失败时隐藏明细并显示具体错误。 */
      function runCalc() {
        var out = compute();
        result.style.display = 'block';
        if (!out || !out.ok) {
          mainLabelEl.textContent = modeEl.value === 'price' ? T.outPrice : T.outNet;
          mainEl.textContent = '—';
          mainSubEl.textContent = '';
          detailsEl.style.display = 'none';
          noteEl.textContent = (out && out.error) || T.errRev;
          return false;
        }
        if (out.values.mode === 'price') renderPrice(out.values);
        else renderStatement(out.values);
        detailsEl.style.display = '';
        return true;
      }

      /** 按模式切换利润表输入与反推售价输入，以及提示文案。 */
      function syncMode() {
        var price = modeEl.value === 'price';
        var sts = document.querySelectorAll('.pm-st');
        for (var i = 0; i < sts.length; i++) sts[i].style.display = price ? 'none' : '';
        var prs = document.querySelectorAll('.pm-pr');
        for (var k = 0; k < prs.length; k++) prs[k].style.display = price ? '' : 'none';
        hintEl.textContent = price ? T.hintPrice : T.hintStatement;
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
        revEl.value = localize(smp[1]);
        cogsEl.value = localize(smp[2]);
        opexEl.value = localize(smp[3]);
        otherEl.value = localize(smp[4]);
        costEl.value = localize(smp[5]);
        targetEl.value = localize(smp[6]);
        syncMode();
        runCalc();
      }

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        runCalc();
      });
      modeEl.addEventListener('change', syncMode);
      document.getElementById('pmBtnSample').addEventListener('click', loadSample);
      /** 清空：只清输入、恢复利润表模式并隐藏结果，不重新加载样例。 */
      document.getElementById('pmBtnClear').addEventListener('click', function () {
        revEl.value = '';
        cogsEl.value = '';
        opexEl.value = '';
        otherEl.value = '';
        costEl.value = '';
        targetEl.value = '';
        modeEl.value = 'statement';
        syncMode();
        result.style.display = 'none';
        revEl.focus();
      });
      syncMode();
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('how-to-calculate-profit-margin');
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
