/**
 * 样本量计算器：问卷要回收多少份、测均值要测多少个，或已有样本的误差界（纯客户端）。
 * slug: how-to-calculate-sample-size（见 work-tasks/how-to-calculate-sample-size/02-tool-info.md）。
 *
 * 交互要点（2026-10-14 改写）：
 * - 三种用途：问卷 / 是否题（比例）求样本量；测量平均值（均值）求样本量；已有样本量反求误差界；
 * - 置信水平 80 / 85 / 90 / 95 / 98 / 99 / 99.9%，Z 值由正态分布反函数精确算出（Acklam 近似，误差 < 1.2e-9）；
 * - 误差界与预期比例用百分比输入（用户习惯 ±5%、50%）；总体规模可留空（视为无限），填了则做有限总体校正（FPC）；
 * - 更多选项：预期回收率（推算要发出多少份）与设计效应（整群抽样放大系数）；
 * - 结果：主值 + 逐行代入过程 + 不同误差界（或样本量）的对照表；Clear 不重载样例。
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
const PREFIX = 'tool_sample_size';

/** 可选置信水平（%）。 */
const CONF_LEVELS = [80, 85, 90, 95, 98, 99, 99.9];

/**
 * 标准正态分布反函数（Acklam 有理近似，相对误差 < 1.15e-9）。
 * 服务端只用于下拉文案里的 Z 值；前端脚本里有同一实现用于计算。
 * @param p 累积概率，0 < p < 1
 * @returns 对应的 z 值
 */
const invNorm = (p: number): number => {
	const a = [-39.69683028665376, 220.9460984245205, -275.9285104469687, 138.357751867269, -30.66479806614716, 2.506628277459239];
	const b = [-54.47609879822406, 161.5858368580409, -155.6989798598866, 66.80131188771972, -13.28068155288572];
	const c = [-0.007784894002430293, -0.3223964580411365, -2.400758277161838, -2.549732539343734, 4.374664141464968, 2.938163982698783];
	const d = [0.007784695709041462, 0.3224671290700398, 2.445134137142996, 3.754408661907416];
	const lo = 0.02425;
	if (p < lo) {
		const q = Math.sqrt(-2 * Math.log(p));
		return (((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) / ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1);
	}
	if (p > 1 - lo) return -invNorm(1 - p);
	const q = p - 0.5;
	const r = q * q;
	return ((((((a[0] * r + a[1]) * r + a[2]) * r + a[3]) * r + a[4]) * r + a[5]) * q) / (((((b[0] * r + b[1]) * r + b[2]) * r + b[3]) * r + b[4]) * r + 1);
};

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
 * 渲染 how-to-calculate-sample-size 工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 * @returns 完整页面 HTML
 */
export const renderHowToCalculateSampleSizePage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 读取本工具键（自动拼前缀）。 */
	const tx = (key: string) => t(opts.lang, `${PREFIX}_${key}` as never);

	const toolPath = '/tools/how-to-calculate-sample-size';
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
			currentSlug: 'how-to-calculate-sample-size',
			currentAnchor: '#sample-size',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	/**
	 * 数值输入框字段。
	 * @param id 元素 id
	 * @param labelKey 标签键（不含前缀）
	 * @param phKey 占位键（不含前缀）
	 * @param mode 所属用途（空格分隔，用于按用途显示 / 隐藏）
	 * @param hintKey 提示键（可空）
	 * @returns 字段 HTML
	 */
	const numField = (id: string, labelKey: string, phKey: string, mode: string, hintKey = '') => `
          <div class="form-group" data-modes="${mode}">
            <label class="form-label" for="${id}">${escapeHtml(tx(labelKey))}</label>
            <input id="${id}" class="input-lg" type="number" step="any" min="0" inputmode="decimal" placeholder="${escapeHtml(tx(phKey))}">
            ${hintKey ? `<p class="small text-muted mb-0 mt-1">${escapeHtml(tx(hintKey))}</p>` : ''}
          </div>`;

	/** 置信水平下拉选项（文案语言无关：95% · Z = 1.960）。 */
	const confOptions = CONF_LEVELS.map((c) => {
		const z = invNorm(1 - (1 - c / 100) / 2);
		return `<option value="${c}"${c === 95 ? ' selected' : ''}>${c}% · Z = ${z.toFixed(3)}</option>`;
	}).join('');

	/** 页内样式。 */
	const extraHeadHtml = `
  <style>
    .tool-card { max-width: var(--content-max); width: 100%; margin: 0 0 1.5rem; }
    .form-label { display:block; margin-bottom:.4rem; color:#495057; font-weight:500 }
    .form-group { margin-bottom:1rem; }
    .form-group[hidden] { display:none !important; }
    .ss-grid { display:grid; grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr)); gap:0 1rem; }
    .btn-row { display:flex; flex-wrap:wrap; gap:.5rem; align-items:center; }
    .result { background:#f8f9fa; padding:1rem; border-radius:8px; margin-top:1rem; }
    .result .main { font-size:1.25rem; text-align:center; }
    .result .muted { color:#6c757d; font-size:.9rem; margin-top:.5rem; text-align:center; }
    .ss-work { margin:.75rem auto 0; max-width:36rem; padding-inline-start:1.2rem; font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size:.88rem; color:#495057; }
    .ss-work li { word-break:break-word; margin:.15rem 0; }
    .ss-facts { margin:.75rem auto 0; max-width:36rem; padding-inline-start:1.2rem; font-size:.94rem; }
    .ss-table { width:100%; max-width:24rem; margin:.75rem auto 0; font-size:.92rem; border-collapse:collapse; }
    .ss-table th, .ss-table td { padding:.25rem .5rem; border-bottom:1px solid #e9ecef; text-align:end; font-variant-numeric: tabular-nums; }
    .ss-table thead th { color:#495057; font-weight:500; }
    .ss-table tr.is-current td { font-weight:700; color:#0a58ca; }
  </style>`;

	const contentHtml = `
    <div id="sample-size" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(tx('title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <form id="calcForm" novalidate>
          <div class="ss-grid">
            <div class="form-group">
              <label class="form-label" for="ssMode">${escapeHtml(tx('mode_label'))}</label>
              <select id="ssMode" class="form-select">
                <option value="prop" selected>${escapeHtml(tx('mode_prop'))}</option>
                <option value="mean">${escapeHtml(tx('mode_mean'))}</option>
                <option value="moe">${escapeHtml(tx('mode_moe'))}</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label" for="ssConf">${escapeHtml(tx('conf_label'))}</label>
              <select id="ssConf" class="form-select">${confOptions}</select>
            </div>
          </div>
          <div class="ss-grid">
            ${numField('ssMoe', 'moe_label', 'moe_ph', 'prop')}
            ${numField('ssSigma', 'sigma_label', 'sigma_ph', 'mean', 'sigma_hint')}
            ${numField('ssE', 'e_label', 'e_ph', 'mean')}
            ${numField('ssN', 'n_label', 'n_ph', 'moe')}
            ${numField('ssP', 'p_label', 'p_ph', 'prop moe', 'p_hint')}
            ${numField('ssPop', 'pop_label', 'pop_ph', 'prop mean moe', 'pop_hint')}
          </div>
          <details class="mb-3" id="ssAdvanced">
            <summary>${escapeHtml(tx('advanced'))}</summary>
            <div class="ss-grid mt-2">
              ${numField('ssRate', 'rate_label', 'rate_ph', 'prop mean', 'rate_hint')}
              ${numField('ssDeff', 'deff_label', 'deff_ph', 'prop mean moe', 'deff_hint')}
            </div>
          </details>
          <div class="btn-row">
            <button type="submit" class="btn btn-primary">${escapeHtml(tx('calculate'))}</button>
            <button type="button" id="btnSample" class="btn btn-outline-secondary">${escapeHtml(tx('sample'))}</button>
            <button type="button" id="btnClear" class="btn btn-outline-secondary">${escapeHtml(tx('clear'))}</button>
          </div>
        </form>
        <div id="calcResult" class="result" style="display:none" aria-live="polite">
          <div id="okWrap">
            <div class="main"><strong id="outLabel"></strong>: <span id="mainOut"></span></div>
            <ol class="ss-work" id="workOut" dir="ltr"></ol>
            <ul class="ss-facts" id="factsOut"></ul>
            <table class="ss-table" id="tableWrap">
              <caption class="small text-muted" id="tableCaption"></caption>
              <thead><tr><th scope="col" id="tableH1"></th><th scope="col" id="tableH2"></th></tr></thead>
              <tbody id="tableBody"></tbody>
            </table>
          </div>
          <div id="calcNote" class="muted"></div>
        </div>
      </div>
    </div>

    ${renderToolIgSections({ lang: opts.lang, prefix: PREFIX, mode: 'formula', howItemCount: 4, whyChooseItemCount: 4, ruleItemCount: 5, usecaseCount: 4 })}`;

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{ label: tx('ref_a_label'), href: 'https://en.wikipedia.org/wiki/Sample_size_determination' },
			{ label: tx('ref_b_label'), href: 'https://en.wikipedia.org/wiki/Margin_of_error' },
		],
	});

	/** 前端脚本需要的文案（一次性注入）。 */
	const clientText = {
		outN: tx('out_n'),
		outMoe: tx('out_moe'),
		errFinite: tx('err_finite'),
		errP: tx('err_p'),
		errMoe: tx('err_moe'),
		errPositive: tx('err_positive'),
		errPop: tx('err_pop'),
		errN: tx('err_n'),
		errRate: tx('err_rate'),
		errDeff: tx('err_deff'),
		roundUp: tx('round_up'),
		invitesTpl: tx('invites_tpl'),
		fpcTpl: tx('fpc_tpl'),
		noFpc: tx('no_fpc'),
		deffTpl: tx('deff_tpl'),
		moeFactTpl: tx('moe_fact_tpl'),
		tableCapN: tx('table_caption_n'),
		tableCapMoe: tx('table_caption_moe'),
		colMoe: tx('col_moe'),
		colN: tx('col_n'),
		note: tx('result_note'),
	};

	const extraBodyHtml = `
  <script>
    (function () {
      /** 当前页面语言（数字格式）。 */
      var LANG = ${JSON.stringify(opts.lang)};
      /** 本地化文案。 */
      var T = ${JSON.stringify(clientText)};

      var form = document.getElementById('calcForm');
      var modeEl = document.getElementById('ssMode');
      var confEl = document.getElementById('ssConf');
      var result = document.getElementById('calcResult');
      var okWrap = document.getElementById('okWrap');
      var outLabel = document.getElementById('outLabel');
      var mainOut = document.getElementById('mainOut');
      var workOut = document.getElementById('workOut');
      var factsOut = document.getElementById('factsOut');
      var tableWrap = document.getElementById('tableWrap');
      var tableCaption = document.getElementById('tableCaption');
      var tableH1 = document.getElementById('tableH1');
      var tableH2 = document.getElementById('tableH2');
      var tableBody = document.getElementById('tableBody');
      var noteEl = document.getElementById('calcNote');

      /** 整数（千分位）格式器。 */
      var nfInt = new Intl.NumberFormat(LANG + '-u-nu-latn', { maximumFractionDigits: 0 });
      /** 百分比（2 位小数）格式器。 */
      var nfPct = new Intl.NumberFormat(LANG + '-u-nu-latn', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

      /**
       * 用 split/join 替换 {name} 占位符。
       * @param {string} tpl 模板
       * @param {Object<string, string|number>} map 占位符 → 值
       * @returns {string}
       */
      function fill(tpl, map) {
        var s = String(tpl);
        for (var k in map) {
          if (Object.prototype.hasOwnProperty.call(map, k)) s = s.split('{' + k + '}').join(String(map[k]));
        }
        return s;
      }

      /**
       * 标准正态分布反函数（Acklam 近似）。
       * @param {number} p 累积概率（0, 1）
       * @returns {number} z 值
       */
      function invNorm(p) {
        var a = [-39.69683028665376, 220.9460984245205, -275.9285104469687, 138.357751867269, -30.66479806614716, 2.506628277459239];
        var b = [-54.47609879822406, 161.5858368580409, -155.6989798598866, 66.80131188771972, -13.28068155288572];
        var c = [-0.007784894002430293, -0.3223964580411365, -2.400758277161838, -2.549732539343734, 4.374664141464968, 2.938163982698783];
        var d = [0.007784695709041462, 0.3224671290700398, 2.445134137142996, 3.754408661907416];
        var lo = 0.02425;
        var q, r;
        if (p < lo) {
          q = Math.sqrt(-2 * Math.log(p));
          return (((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) / ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1);
        }
        if (p > 1 - lo) return -invNorm(1 - p);
        q = p - 0.5;
        r = q * q;
        return ((((((a[0] * r + a[1]) * r + a[2]) * r + a[3]) * r + a[4]) * r + a[5]) * q) / (((((b[0] * r + b[1]) * r + b[2]) * r + b[3]) * r + b[4]) * r + 1);
      }

      /**
       * 过程行数字：最多 2 位小数、不分组（过程里保持纯 ASCII 数字）。
       * @param {number} n 数值
       * @returns {string}
       */
      function w(n) {
        return String(+n.toFixed(2));
      }

      /**
       * 过程行里的小数（最多 4 位有效数字，如 0.05、0.0025）。
       * @param {number} n 数值
       * @returns {string}
       */
      function w4(n) {
        return String(+n.toPrecision(4));
      }

      /**
       * 读取输入框数值；空为 NaN。
       * @param {string} id 元素 id
       * @returns {number}
       */
      function num(id) {
        var raw = document.getElementById(id).value;
        return raw === '' ? NaN : Number(raw);
      }

      /** 按用途显示 / 隐藏字段（data-modes 含当前用途才显示）。 */
      function syncForm() {
        var mode = modeEl.value;
        Array.prototype.forEach.call(form.querySelectorAll('[data-modes]'), function (el) {
          el.hidden = (' ' + el.getAttribute('data-modes') + ' ').indexOf(' ' + mode + ' ') < 0;
        });
      }

      /**
       * 读取总体规模（可空 = 无限）。
       * @returns {{ ok: boolean, error?: string, pop?: number }}
       */
      function readPop() {
        var raw = document.getElementById('ssPop').value;
        if (raw === '') return { ok: true, pop: 0 };
        var pop = Number(raw);
        if (!Number.isFinite(pop) || pop < 2 || Math.floor(pop) !== pop) return { ok: false, error: T.errPop };
        return { ok: true, pop: pop };
      }

      /**
       * 读取更多选项：回收率（%）与设计效应。反求误差界时回收率栏被隐藏，按 100% 处理。
       * @param {string} mode 当前用途
       * @returns {{ ok: boolean, error?: string, rate?: number, deff?: number }}
       */
      function readAdvanced(mode) {
        var rateRaw = mode === 'moe' ? '' : document.getElementById('ssRate').value;
        var deffRaw = document.getElementById('ssDeff').value;
        var rate = rateRaw === '' ? 100 : Number(rateRaw);
        var deff = deffRaw === '' ? 1 : Number(deffRaw);
        if (!Number.isFinite(rate) || rate < 1 || rate > 100) return { ok: false, error: T.errRate };
        if (!Number.isFinite(deff) || deff < 1) return { ok: false, error: T.errDeff };
        return { ok: true, rate: rate, deff: deff };
      }

      /**
       * 由初始样本量 n0 做有限总体校正。
       * @param {number} n0 无限总体下的样本量
       * @param {number} pop 总体规模（0 = 无限）
       * @returns {number}
       */
      function fpc(n0, pop) {
        return pop > 0 ? n0 / (1 + (n0 - 1) / pop) : n0;
      }

      /**
       * 比例：给定误差界（小数）求最终样本量（向上取整）。
       * @param {number} z Z 值
       * @param {number} p 预期比例（小数）
       * @param {number} e 误差界（小数）
       * @param {number} deff 设计效应
       * @param {number} pop 总体规模（0 = 无限）
       * @returns {number}
       */
      function propN(z, p, e, deff, pop) {
        return Math.ceil(fpc((z * z * p * (1 - p) / (e * e)) * deff, pop) - 1e-9);
      }

      /**
       * 比例：给定样本量求误差界（小数）。
       * @param {number} z Z 值
       * @param {number} p 预期比例（小数）
       * @param {number} n 样本量
       * @param {number} deff 设计效应
       * @param {number} pop 总体规模（0 = 无限）
       * @returns {number}
       */
      function propMoe(z, p, n, deff, pop) {
        var e = z * Math.sqrt((deff * p * (1 - p)) / n);
        if (pop > 0) e *= Math.sqrt((pop - n) / (pop - 1));
        return e;
      }

      /**
       * 计算当前用途的结果。
       * @returns {{ ok: boolean, error?: string, label?: string, main?: string, work?: string[], facts?: string[], table?: Object }}
       */
      function compute() {
        var mode = modeEl.value;
        var conf = Number(confEl.value);
        var z = invNorm(1 - (1 - conf / 100) / 2);
        var popR = readPop();
        if (!popR.ok) return popR;
        var pop = popR.pop;
        var adv = readAdvanced(mode);
        if (!adv.ok) return adv;
        var deff = adv.deff;
        var work = ['Z = ' + z.toFixed(3) + ' (' + conf + '%)'];
        var facts = [];
        var pPct, p, n0, n, nFinal;

        if (mode === 'moe') {
          var nIn = num('ssN');
          pPct = num('ssP');
          if (!Number.isFinite(nIn) || !Number.isFinite(pPct)) return { ok: false, error: T.errFinite };
          if (!(pPct > 0 && pPct < 100)) return { ok: false, error: T.errP };
          if (nIn < 2 || Math.floor(nIn) !== nIn || (pop > 0 && nIn > pop)) return { ok: false, error: T.errN };
          p = pPct / 100;
          var e0 = z * Math.sqrt((deff * p * (1 - p)) / nIn);
          work.push('E = Z × √(' + (deff !== 1 ? 'deff × ' : '') + 'p × (1 − p) ÷ n) = ' + z.toFixed(3) + ' × √(' + (deff !== 1 ? w4(deff) + ' × ' : '') + w4(p) + ' × ' + w4(1 - p) + ' ÷ ' + nIn + ') = ' + w4(e0));
          var e = e0;
          if (pop > 0) {
            e = propMoe(z, p, nIn, deff, pop);
            work.push('E × √((N − n) ÷ (N − 1)) = ' + w4(e0) + ' × √(' + (pop - nIn) + ' ÷ ' + (pop - 1) + ') = ' + w4(e));
          }
          work.push('= ±' + (e * 100).toFixed(2) + '%');
          facts.push(fill(T.moeFactTpl, { p: nfPct.format(pPct), lo: nfPct.format(Math.max(0, pPct - e * 100)), hi: nfPct.format(Math.min(100, pPct + e * 100)), conf: conf }));
          if (pop > 0) facts.push(fill(T.fpcTpl, { n0: '±' + nfPct.format(e0 * 100) + '%', pop: nfInt.format(pop), n: '±' + nfPct.format(e * 100) + '%' }));
          /** 对照表样本量：有总体时只列小于总体的（等于总体即普查，误差界为 0，没有参考意义）。 */
          var sizes = [100, 200, 400, 600, 1000, 2000, 5000].filter(function (s) { return !(pop > 0) || s < pop; });
          if (sizes.indexOf(nIn) < 0) sizes.push(nIn);
          sizes.sort(function (x, y) { return x - y; });
          return {
            ok: true, label: T.outMoe, main: '±' + nfPct.format(e * 100) + '%', work: work, facts: facts,
            table: {
              caption: T.tableCapMoe, h1: T.colN, h2: T.colMoe,
              rows: sizes.map(function (s) { return [nfInt.format(s), '±' + nfPct.format(propMoe(z, p, s, deff, pop) * 100) + '%', s === nIn]; }),
            },
          };
        }

        if (mode === 'prop') {
          var ePct = num('ssMoe');
          pPct = num('ssP');
          if (!Number.isFinite(ePct) || !Number.isFinite(pPct)) return { ok: false, error: T.errFinite };
          if (!(ePct > 0 && ePct < 50)) return { ok: false, error: T.errMoe };
          if (!(pPct > 0 && pPct < 100)) return { ok: false, error: T.errP };
          p = pPct / 100;
          var eDec = ePct / 100;
          n0 = (z * z * p * (1 - p)) / (eDec * eDec);
          work.push('n₀ = Z² × p × (1 − p) ÷ E² = ' + z.toFixed(3) + '² × ' + w4(p) + ' × ' + w4(1 - p) + ' ÷ ' + w4(eDec) + '² = ' + w(n0));
        } else {
          var sigma = num('ssSigma');
          var em = num('ssE');
          if (!Number.isFinite(sigma) || !Number.isFinite(em)) return { ok: false, error: T.errFinite };
          if (!(sigma > 0 && em > 0)) return { ok: false, error: T.errPositive };
          n0 = Math.pow((z * sigma) / em, 2);
          work.push('n₀ = (Z × σ ÷ E)² = (' + z.toFixed(3) + ' × ' + w4(sigma) + ' ÷ ' + w4(em) + ')² = ' + w(n0));
        }
        var nBase = n0;
        if (deff !== 1) {
          nBase = n0 * deff;
          work.push('n₀ × deff = ' + w(n0) + ' × ' + w4(deff) + ' = ' + w(nBase));
          facts.push(fill(T.deffTpl, { deff: w4(deff) }));
        }
        n = fpc(nBase, pop);
        if (pop > 0) work.push('n = n₀ ÷ (1 + (n₀ − 1) ÷ N) = ' + w(nBase) + ' ÷ (1 + ' + w(nBase - 1) + ' ÷ ' + pop + ') = ' + w(n));
        nFinal = Math.ceil(n - 1e-9);
        work.push(T.roundUp + ' → ' + nFinal);
        if (pop > 0) facts.push(fill(T.fpcTpl, { n0: nfInt.format(Math.ceil(nBase - 1e-9)), pop: nfInt.format(pop), n: nfInt.format(nFinal) }));
        else facts.push(T.noFpc);
        if (adv.rate < 100) {
          var inv = Math.ceil(nFinal / (adv.rate / 100) - 1e-9);
          work.push(nFinal + ' ÷ ' + w4(adv.rate / 100) + ' = ' + inv);
          facts.push(fill(T.invitesTpl, { k: nfInt.format(inv), n: nfInt.format(nFinal), r: w(adv.rate) }));
        }
        var table = null;
        if (mode === 'prop') {
          var margins = [1, 2, 3, 4, 5, 10];
          var cur = num('ssMoe');
          if (margins.indexOf(cur) < 0) margins.push(cur);
          margins.sort(function (x, y) { return x - y; });
          table = {
            caption: T.tableCapN, h1: T.colMoe, h2: T.colN,
            rows: margins.map(function (m) { return ['±' + nfPct.format(m) + '%', nfInt.format(propN(z, p, m / 100, deff, pop)), m === cur]; }),
          };
        }
        return { ok: true, label: T.outN, main: nfInt.format(nFinal), work: work, facts: facts, table: table };
      }

      /**
       * 往列表里填文本条目。
       * @param {HTMLElement} el 列表元素
       * @param {string[]} items 文本
       */
      function fillList(el, items) {
        el.textContent = '';
        items.forEach(function (s) {
          var li = document.createElement('li');
          li.textContent = s;
          el.appendChild(li);
        });
        el.style.display = items.length ? '' : 'none';
      }

      /** 执行计算并刷新结果区。 */
      function runCalc() {
        var out = compute();
        result.style.display = 'block';
        if (!out.ok) {
          okWrap.style.display = 'none';
          noteEl.textContent = out.error || T.errFinite;
          return false;
        }
        outLabel.textContent = out.label;
        mainOut.textContent = out.main;
        fillList(workOut, out.work);
        fillList(factsOut, out.facts);
        tableBody.textContent = '';
        if (out.table) {
          tableCaption.textContent = out.table.caption;
          tableH1.textContent = out.table.h1;
          tableH2.textContent = out.table.h2;
          out.table.rows.forEach(function (row) {
            var tr = document.createElement('tr');
            if (row[2]) tr.className = 'is-current';
            [row[0], row[1]].forEach(function (v) {
              var td = document.createElement('td');
              td.textContent = v;
              tr.appendChild(td);
            });
            tableBody.appendChild(tr);
          });
          tableWrap.style.display = '';
        } else {
          tableWrap.style.display = 'none';
        }
        okWrap.style.display = '';
        noteEl.textContent = T.note;
        return true;
      }

      /** 设置默认选项（不碰输入值）。 */
      function setDefaults() {
        modeEl.value = 'prop';
        confEl.value = '95';
        syncForm();
      }

      /** 样例：问卷，95%，±5%，预期 50%，总体 1000 → 需回收 278 份。 */
      function loadSample() {
        form.reset();
        setDefaults();
        document.getElementById('ssMoe').value = '5';
        document.getElementById('ssP').value = '50';
        document.getElementById('ssPop').value = '1000';
        runCalc();
      }

      /** 清空：所有输入与结果；用途与置信水平恢复默认；不重载样例。 */
      function clearAll() {
        form.reset();
        setDefaults();
        result.style.display = 'none';
      }

      modeEl.addEventListener('change', function () {
        syncForm();
        result.style.display = 'none';
        if (modeEl.value === 'moe' && document.getElementById('ssP').value === '') document.getElementById('ssP').value = '50';
      });
      confEl.addEventListener('change', function () { if (result.style.display !== 'none') runCalc(); });
      form.addEventListener('submit', function (e) { e.preventDefault(); runCalc(); });
      document.getElementById('btnSample').addEventListener('click', loadSample);
      document.getElementById('btnClear').addEventListener('click', clearAll);
      syncForm();
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('how-to-calculate-sample-size');
	const toolSeoHtml = toolMeta
		? renderToolExtraSections({ lang: opts.lang, defaultLang: opts.defaultLang, tool: toolMeta })
		: '';
	const toolJsonLd = toolMeta
		? buildToolJsonLd({
				lang: opts.lang,
				defaultLang: opts.defaultLang,
				tool: toolMeta,
				name: t(opts.lang, toolMeta.i18nKey as never),
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
