/**
 * 对数计算器工具页。
 * slug: how-to-calculate-logarithm（见 work-tasks/how-to-calculate-logarithm/02-tool-info.md）。
 *
 * 交互要点（2026-10-15 改写）：
 * - 两种求解：求对数 log_b(x)，或求反对数 x = b^y；底数预设 10 / e / 2，也可自定义（大于 0 且不等于 1）；
 * - 输入可写小数、分数（1/8）、幂（2^10）、科学计数法（3.2e-5）或常数 e，小数点按页面语言；
 * - 能化成整数或简单分数的对数给出精确值并说明理由（log₄ 8 = 3/2，因为 4^(3/2) = 8）；
 * - 给出换底公式算式、反向验算、同一个数在 log₁₀ / ln / log₂ 下的值；
 * - 按常用对数给出首数与尾数（真数小于 1 时附对数表的「横线」写法，如 2̄.5378）、科学计数法与位数 / 前导零个数；
 * - 真数为 0、负数，底数为 1 或非正数，结果溢出时分别给出具体提示。
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
const PREFIX = 'tool_logarithm';

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
 * 渲染 how-to-calculate-logarithm 工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 * @returns 完整页面 HTML
 */
export const renderHowToCalculateLogarithmPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 读取本工具键（自动拼前缀）。 */
	const tx = (key: string) => t(opts.lang, `${PREFIX}_${key}` as keyof typeof import('../site/i18n/en').default);

	const toolPath = '/tools/how-to-calculate-logarithm';
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
			currentSlug: 'how-to-calculate-logarithm',
			currentAnchor: '#logarithm',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	/** 结果区一行：标签 + 输出位。 */
	const row = (id: string, labelKey: string) =>
		`<div id="${id}Row" class="lg-line"><strong>${escapeHtml(tx(labelKey))}:</strong> <span id="${id}"></span></div>`;

	const extraHeadHtml = `
  <style>
    .tool-card { max-width: var(--content-max); width: 100%; margin: 0 0 1.5rem; }
    .form-label { display:block; margin-bottom:.5rem; color:#495057; font-weight:500 }
    .form-hint { display:block; color:#6c757d; font-size:.85rem; margin:-.25rem 0 .75rem; }
    .form-group { margin-bottom:1rem; }
    .form-row { display:grid; grid-template-columns:1fr 1fr; gap:1rem; }
    @media (max-width:768px) { .form-row { grid-template-columns:1fr; } }
    .btn-row { display:flex; flex-wrap:wrap; gap:.5rem; align-items:center; }
    .result { background:#f8f9fa; padding:1rem; border-radius:8px; margin-top:1rem; }
    .lg-main { font-size:1.6rem; font-weight:600; text-align:center; margin:.25rem 0 0; font-variant-numeric:tabular-nums; overflow-wrap:anywhere; }
    .lg-sub { text-align:center; color:#495057; font-size:.95rem; margin-top:.25rem; }
    .lg-line { color:#495057; font-size:.92rem; margin-top:.5rem; font-variant-numeric:tabular-nums; overflow-wrap:anywhere; }
    .lg-work div { margin-top:.2rem; }
    .result .muted { color:#6c757d; font-size:.9rem; margin-top:.75rem; }
  </style>`;

	const contentHtml = `
    <div id="logarithm" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(tx('title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <form id="calcForm" novalidate>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label" for="lgMode">${escapeHtml(tx('mode_label'))}</label>
              <select id="lgMode" class="input-lg">
                <option value="log" selected>${escapeHtml(tx('mode_log'))}</option>
                <option value="antilog">${escapeHtml(tx('mode_antilog'))}</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label" for="lgBase">${escapeHtml(tx('base_label'))}</label>
              <select id="lgBase" class="input-lg">
                <option value="10" selected>${escapeHtml(tx('base_10'))}</option>
                <option value="e">${escapeHtml(tx('base_e'))}</option>
                <option value="2">${escapeHtml(tx('base_2'))}</option>
                <option value="custom">${escapeHtml(tx('base_custom'))}</option>
              </select>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label" id="lgXLabel" for="lgX">${escapeHtml(tx('x_label_log'))}</label>
              <input id="lgX" class="input-lg" type="text" inputmode="decimal" autocomplete="off" placeholder="${escapeHtml(tx('x_ph_log'))}">
            </div>
            <div class="form-group" id="lgCustomWrap" style="display:none">
              <label class="form-label" for="lgCustom">${escapeHtml(tx('custom_label'))}</label>
              <input id="lgCustom" class="input-lg" type="text" inputmode="decimal" autocomplete="off" placeholder="${escapeHtml(tx('custom_ph'))}">
            </div>
          </div>
          <span class="form-hint">${escapeHtml(tx('input_hint'))}</span>
          <div class="btn-row">
            <button type="submit" id="lgBtnCalc" class="btn btn-primary">${escapeHtml(tx('calculate'))}</button>
            <button type="button" id="lgBtnSample" class="btn btn-outline-secondary">${escapeHtml(tx('sample'))}</button>
            <button type="button" id="lgBtnClear" class="btn btn-outline-secondary">${escapeHtml(tx('clear'))}</button>
          </div>
        </form>
        <div id="calcResult" class="result" style="display:none" aria-live="polite">
          <div id="lgMainLabel" class="lg-sub">${escapeHtml(tx('out_log'))}</div>
          <div id="lgMain" class="lg-main"></div>
          <div id="lgMainSub" class="lg-sub"></div>
          <div id="lgDetails">
            <div class="lg-line"><strong>${escapeHtml(tx('work_label'))}:</strong><div id="lgWork" class="lg-work"></div></div>
            ${row('lgCheck', 'check_label')}
            ${row('lgOther', 'other_label')}
            ${row('lgChar', 'char_label')}
            ${row('lgSci', 'sci_label')}
            ${row('lgPlaces', 'places_label')}
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
				label: tx('ref_log_label'),
				href: 'https://en.wikipedia.org/wiki/Logarithm',
			},
			{
				label: tx('ref_ln_label'),
				href: 'https://en.wikipedia.org/wiki/Natural_logarithm',
			},
		],
	});

	/** 前端脚本需要的文案（一次性注入）。 */
	const clientText = {
		outLog: tx('out_log'),
		outAntilog: tx('out_antilog'),
		xLog: tx('x_label_log'),
		xAntilog: tx('x_label_antilog'),
		phLog: tx('x_ph_log'),
		phAntilog: tx('x_ph_antilog'),
		exact: tx('exact_tpl'),
		approx: tx('sub_approx'),
		inverse: tx('inverse_tpl'),
		change: tx('work_change'),
		charTpl: tx('char_tpl'),
		charBar: tx('char_bar_tpl'),
		placesInt: tx('places_int_tpl'),
		placesFrac: tx('places_frac_tpl'),
		errEmpty: tx('err_empty'),
		errNum: tx('err_num'),
		errZero: tx('err_zero'),
		errNeg: tx('err_neg'),
		errBase: tx('err_base'),
		errRange: tx('err_range'),
		note: tx('result_note'),
	};

	const extraBodyHtml = `
  <script>
    (function () {
      /** 表单与输入控件。 */
      var form = document.getElementById('calcForm');
      var modeEl = document.getElementById('lgMode');
      var baseEl = document.getElementById('lgBase');
      var customWrap = document.getElementById('lgCustomWrap');
      var customEl = document.getElementById('lgCustom');
      var xEl = document.getElementById('lgX');
      var xLabelEl = document.getElementById('lgXLabel');
      /** 结果区各输出位。 */
      var result = document.getElementById('calcResult');
      var detailsEl = document.getElementById('lgDetails');
      var mainLabelEl = document.getElementById('lgMainLabel');
      var mainEl = document.getElementById('lgMain');
      var mainSubEl = document.getElementById('lgMainSub');
      var workEl = document.getElementById('lgWork');
      var noteEl = document.getElementById('calcNote');
      /** 当前页面语言（决定小数点与数字格式）。 */
      var LANG = ${JSON.stringify(opts.lang)};
      /** 本地化文案字典。 */
      var T = ${JSON.stringify(clientText)};
      /** 样例轮换：[模式, 底数选项, 自定义底数, 输入值]；首个与 Example 一致。 */
      var SAMPLES = [
        ['log', '10', '', '1000'],
        ['log', 'custom', '4', '8'],
        ['log', '10', '', '0.0345'],
        ['antilog', '10', '', '2.5']
      ];
      /** 下一次点击「加载样例」使用的样例下标。 */
      var sampleIndex = 0;
      /** 上标与下标数字表（下标用于 log₁₀ 这类函数名，上标用于整数指数）。 */
      var SUP = '⁰¹²³⁴⁵⁶⁷⁸⁹';
      var SUB = '₀₁₂₃₄₅₆₇₈₉';
      /** 对数表「横线」记号用的组合长音符字符（U+0304，与正文 2̄ 写法一致）。 */
      var BAR = String.fromCharCode(772);

      /** 10 位有效数字格式器（拉丁数字、不分组）。 */
      var sigFormat = null;
      try {
        sigFormat = new Intl.NumberFormat(LANG + '-u-nu-latn', { maximumSignificantDigits: 10, useGrouping: false });
      } catch (e) {
        sigFormat = null;
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
       * 把整数写成上标（负号用 ⁻）。
       * @param {number} n 整数
       * @returns {string} 上标文本
       */
      function sup(n) {
        var s = String(Math.abs(n));
        var out = n < 0 ? '⁻' : '';
        for (var i = 0; i < s.length; i++) out += SUP.charAt(Number(s.charAt(i)));
        return out;
      }

      /**
       * 把非负整数写成下标。
       * @param {number} n 非负整数
       * @returns {string} 下标文本
       */
      function subDigits(n) {
        var s = String(n);
        var out = '';
        for (var i = 0; i < s.length; i++) out += SUB.charAt(Number(s.charAt(i)));
        return out;
      }

      /**
       * 10 位有效数字的普通写法（本地小数点、真减号）。
       * @param {number} v 数值
       * @returns {string} 文本
       */
      function sig(v) {
        var s = sigFormat ? sigFormat.format(v) : String(Number(v.toPrecision(10)));
        return s.replace('-', '−');
      }

      /**
       * 把数值分解为 a × 10^n（1 ≤ |a| < 10，a 保留 10 位有效数字）。
       * @param {number} v 非零数值
       * @returns {{a: number, n: number}} 尾数与指数
       */
      function split10(v) {
        var n = Math.floor(Math.log10(Math.abs(v)));
        var a = Number((v / Math.pow(10, n)).toPrecision(10));
        if (Math.abs(a) >= 10) {
          a = Number((a / 10).toPrecision(10));
          n += 1;
        } else if (Math.abs(a) < 1) {
          a = Number((a * 10).toPrecision(10));
          n -= 1;
        }
        return { a: a, n: n };
      }

      /**
       * 数值显示：接近整数时取整；很大或很小时写成 a × 10ⁿ；其余 10 位有效数字。
       * @param {number} v 数值
       * @returns {string} 文本
       */
      function fmt(v) {
        if (v === 0) return '0';
        var r = Math.round(v);
        if (Math.abs(v) < 1e15 && Math.abs(v - r) < 1e-10 * Math.max(1, Math.abs(v))) v = r;
        var av = Math.abs(v);
        if (av >= 1e15 || av < 1e-6) {
          var p = split10(v);
          return sig(p.a) + ' × 10' + sup(p.n);
        }
        return sig(v);
      }

      /**
       * 解析单个数：小数、科学计数法（3.2e-5）或常数 e。
       * @param {string} s 已去空格、已统一小数点的文本
       * @returns {number} 数值；无效时 NaN
       */
      function parseAtom(s) {
        if (s === 'e') return Math.E;
        if (s === '-e') return -Math.E;
        if (!/^[-+]?([0-9]+[.]?[0-9]*|[.][0-9]+)(e[-+]?[0-9]+)?$/.test(s)) return NaN;
        return Number(s);
      }

      /**
       * 解析输入：支持 a、a/b、a^b（a、b 可为小数、科学计数法或 e）。
       * @param {string} raw 原始输入
       * @returns {number|null|undefined} 数值；留空 undefined；无效 null
       */
      function parse(raw) {
        var s = String(raw || '').split(' ').join('').split('−').join('-').toLowerCase();
        if (s === '') return undefined;
        if (DEC === ',') s = s.split(',').join('.');
        else if (/^[-+]?[0-9]{1,3}(,[0-9]{3})+([.][0-9]*)?$/.test(s)) s = s.split(',').join('');
        var v = NaN;
        var hat = s.indexOf('^');
        var slash = s.indexOf('/');
        if (hat > 0) {
          var exp = s.slice(hat + 1);
          if (exp.charAt(0) === '(' && exp.charAt(exp.length - 1) === ')') exp = exp.slice(1, -1);
          var ex = exp.indexOf('/') > 0 ? parseAtom(exp.split('/')[0]) / parseAtom(exp.split('/')[1]) : parseAtom(exp);
          v = Math.pow(parseAtom(s.slice(0, hat)), ex);
        } else if (slash > 0) {
          var den = parseAtom(s.slice(slash + 1));
          v = den === 0 ? NaN : parseAtom(s.slice(0, slash)) / den;
        } else {
          v = parseAtom(s);
        }
        return isNaN(v) ? null : v;
      }

      /**
       * 最大公约数（正整数）。
       * @param {number} a 整数
       * @param {number} b 整数
       * @returns {number} 最大公约数
       */
      function gcd(a, b) {
        a = Math.abs(a);
        b = Math.abs(b);
        while (b) {
          var r = a % b;
          a = b;
          b = r;
        }
        return a;
      }

      /**
       * 识别精确对数：y 能写成 p/q（q ≤ 12）且 b^(p/q) 回代等于 x 时返回分数。
       * @param {number} y 对数近似值
       * @param {number} b 底数
       * @param {number} x 真数
       * @returns {{p: number, q: number}|null} 最简分数；不是简单分数时 null
       */
      function exactLog(y, b, x) {
        for (var q = 1; q <= 12; q++) {
          var p = Math.round(y * q);
          if (Math.abs(y * q - p) > 1e-9 * q) continue;
          var back = Math.pow(b, p / q);
          if (Math.abs(back - x) <= 1e-9 * Math.abs(x)) {
            var g = gcd(p, q) || 1;
            return { p: p / g, q: q / g };
          }
        }
        return null;
      }

      /**
       * 分数指数文本：整数原样（真减号），否则 p/q。
       * @param {{p: number, q: number}} f 分数
       * @returns {string} 文本
       */
      function fracText(f) {
        var s = (f.p < 0 ? '−' : '') + String(Math.abs(f.p));
        return f.q === 1 ? s : s + '/' + f.q;
      }

      /**
       * 幂的写法：整数指数用上标（10³），分数或负小数加括号（4^(3/2)、10^(−1.46)）。
       * @param {string} bt 底数文本
       * @param {{p: number, q: number}|null} f 精确分数指数（可空）
       * @param {number} y 指数数值
       * @returns {string} 幂文本
       */
      function pow(bt, f, y) {
        if (f && f.q === 1 && Math.abs(f.p) < 1000) return bt + sup(f.p);
        var et = f ? fracText(f) : fmt(y);
        return bt + '^' + (f || y < 0 ? '(' + et + ')' : et);
      }

      /**
       * 对数函数名：log₁₀、ln、log₂、logₙ 或 log_(b)。
       * @param {string} key 底数选项
       * @param {number} b 底数
       * @returns {string} 函数名
       */
      function logName(key, b) {
        if (key === '10') return 'log₁₀';
        if (key === 'e') return 'ln';
        if (key === '2') return 'log₂';
        if (Math.floor(b) === b && b > 1 && b < 1000) return 'log' + subDigits(b);
        return 'log_(' + fmt(b) + ')';
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
       * 填写常用对数相关行：首数 / 尾数、科学计数法、位数或前导零。
       * @param {number} x 正数
       * @param {string} xt 正数显示文本
       */
      function fillCommonLog(x, xt) {
        var p = split10(x);
        var c = p.n;
        var m = Math.log10(x) - c;
        if (m < 1e-12) m = 0;
        if (m > 1 - 1e-12) m = 0;
        var mt = sig(Number(m.toPrecision(10)));
        if (c >= 0) {
          setRow('lgChar', fill(T.charTpl, { c: String(c), m: mt }));
          setRow('lgPlaces', fill(T.placesInt, { x: xt, d: String(c + 1) }));
        } else {
          var cs = String(-c);
          var bar = '';
          for (var i = 0; i < cs.length; i++) bar += cs.charAt(i) + BAR;
          var tailDigits = m === 0 ? '0' : mt.slice(mt.indexOf(DEC) + 1);
          setRow('lgChar', fill(T.charBar, { c: '−' + cs, m: mt, bar: bar + DEC + tailDigits }));
          setRow('lgPlaces', fill(T.placesFrac, { x: xt, z: String(-c - 1) }));
        }
        var sciText = sig(p.a) + ' × 10' + sup(c);
        setRow('lgSci', xt === sciText ? sciText : xt + ' = ' + sciText);
      }

      /**
       * 读取输入并计算。
       * @returns {{ ok: boolean, error?: string, values?: Object }}
       */
      function compute() {
        var mode = modeEl.value === 'antilog' ? 'antilog' : 'log';
        var key = baseEl.value;
        var b = key === 'e' ? Math.E : key === '2' ? 2 : key === 'custom' ? NaN : 10;
        if (key === 'custom') {
          var bv = parse(customEl.value);
          if (bv === undefined) return { ok: false, error: T.errBase };
          if (bv === null) return { ok: false, error: fill(T.errNum, { v: String(customEl.value).trim() }) };
          b = bv;
        }
        if (!(b > 0) || Math.abs(b - 1) < 1e-15 || !isFinite(b)) return { ok: false, error: T.errBase };
        var v = parse(xEl.value);
        if (v === undefined) return { ok: false, error: T.errEmpty };
        if (v === null || !isFinite(v)) return { ok: false, error: fill(T.errNum, { v: String(xEl.value).trim() }) };
        if (mode === 'log') {
          if (v === 0) return { ok: false, error: T.errZero };
          if (v < 0) return { ok: false, error: T.errNeg };
          var y = key === '10' ? Math.log10(v) : key === '2' ? Math.log2(v) : key === 'e' ? Math.log(v) : Math.log(v) / Math.log(b);
          return { ok: true, values: { mode: mode, key: key, b: b, x: v, y: y } };
        }
        var x = Math.pow(b, v);
        if (!isFinite(x) || x === 0) return { ok: false, error: T.errRange };
        return { ok: true, values: { mode: mode, key: key, b: b, x: x, y: v } };
      }

      /** 执行计算并刷新结果区；失败时隐藏明细并显示具体错误。 */
      function runCalc() {
        var out = compute();
        result.style.display = 'block';
        mainLabelEl.textContent = modeEl.value === 'antilog' ? T.outAntilog : T.outLog;
        if (!out || !out.ok) {
          mainEl.textContent = '—';
          mainSubEl.textContent = '';
          detailsEl.style.display = 'none';
          noteEl.textContent = (out && out.error) || T.errEmpty;
          return false;
        }
        var v = out.values;
        var name = logName(v.key, v.b);
        var bt = v.key === 'e' ? 'e' : fmt(v.b);
        var xt = fmt(v.x);
        var lines = [];
        if (v.mode === 'log') {
          var f = exactLog(v.y, v.b, v.x);
          var yt = f ? fmt(f.p / f.q) : fmt(v.y);
          mainEl.textContent = name + '(' + xt + ') = ' + yt;
          mainSubEl.textContent = f ? fill(T.exact, { f: fracText(f), pow: pow(bt, f, v.y), x: xt }) : T.approx;
          if (v.key === 'e') {
            lines.push(T.change + ': ln(' + xt + ') = log₁₀(' + xt + ') ÷ log₁₀(e) = ' + fmt(Math.log10(v.x)) + ' ÷ ' + fmt(Math.LOG10E) + ' = ' + yt);
          } else {
            lines.push(T.change + ': ' + name + '(' + xt + ') = ln(' + xt + ') ÷ ln(' + bt + ') = ' + fmt(Math.log(v.x)) + ' ÷ ' + fmt(Math.log(v.b)) + ' = ' + yt);
          }
          setRow('lgCheck', pow(bt, f, Number(Number(v.y).toPrecision(10))) + (f ? ' = ' : ' ≈ ') + xt);
          setRow('lgOther', 'log₁₀ = ' + fmt(Math.log10(v.x)) + ' · ln = ' + fmt(Math.log(v.x)) + ' · log₂ = ' + fmt(Math.log2(v.x)));
        } else {
          var yf = Math.floor(v.y) === v.y ? { p: v.y, q: 1 } : null;
          mainEl.textContent = pow(bt, yf, v.y) + ' = ' + xt;
          mainSubEl.textContent = fill(T.inverse, { s: name + '(' + xt + ') = ' + fmt(v.y) });
          lines.push('x = ' + pow(bt, yf, v.y) + ' = e^(' + fmt(v.y) + ' × ln ' + bt + ') = e^(' + fmt(v.y * Math.log(v.b)) + ') = ' + xt);
          setRow('lgCheck', null);
          setRow('lgOther', null);
        }
        fillCommonLog(v.x, xt);
        while (workEl.firstChild) workEl.removeChild(workEl.firstChild);
        for (var j = 0; j < lines.length; j++) {
          var d = document.createElement('div');
          d.textContent = lines[j];
          workEl.appendChild(d);
        }
        detailsEl.style.display = '';
        noteEl.textContent = T.note;
        return true;
      }

      /** 按模式与底数选项切换输入框标签、占位符和自定义底数框。 */
      function syncForm() {
        var anti = modeEl.value === 'antilog';
        xLabelEl.textContent = anti ? T.xAntilog : T.xLog;
        xEl.placeholder = anti ? T.phAntilog : T.phLog;
        customWrap.style.display = baseEl.value === 'custom' ? '' : 'none';
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
        baseEl.value = smp[1];
        customEl.value = localize(smp[2]);
        xEl.value = localize(smp[3]);
        syncForm();
        runCalc();
      }

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        runCalc();
      });
      modeEl.addEventListener('change', syncForm);
      baseEl.addEventListener('change', syncForm);
      document.getElementById('lgBtnSample').addEventListener('click', loadSample);
      /** 清空：只清输入、恢复默认模式与底数并隐藏结果，不重新加载样例。 */
      document.getElementById('lgBtnClear').addEventListener('click', function () {
        xEl.value = '';
        customEl.value = '';
        modeEl.value = 'log';
        baseEl.value = '10';
        syncForm();
        result.style.display = 'none';
        xEl.focus();
      });
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('how-to-calculate-logarithm');
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
