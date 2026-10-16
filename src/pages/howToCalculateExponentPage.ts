/**
 * 指数计算器工具页：求幂 a^b、由 a^b = c 反求底数 a 或指数 b，并给出分步过程。
 * 整数幂用 BigInt 给出精确整数（≤3000 位）、负整数指数给出精确分数；分数指数按「先开方再乘方」，
 * 负底数配奇分母给实数根、配偶分母给复数主值；超出双精度范围时用 log10 写成科学计数法。
 * slug: how-to-calculate-exponent（见 work-tasks/how-to-calculate-exponent/02-tool-info.md）。
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
const PREFIX = 'tool_exponent';

/** 以逗号作小数点的页面语言（输入解析与样例显示用）。 */
const DECIMAL_COMMA_LANGS: string[] = ['de', 'es', 'pt', 'fr', 'ru', 'id'];

/** 为路径加上语言前缀（默认语无前缀）。 */
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * 渲染 how-to-calculate-exponent 工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 * @returns 完整页面 HTML
 */
export const renderHowToCalculateExponentPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 读取本工具键（自动拼前缀）。 */
	const tx = (key: string) => t(opts.lang, `${PREFIX}_${key}` as keyof typeof import('../site/i18n/en').default);

	const toolPath = '/tools/how-to-calculate-exponent';
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
			currentSlug: 'how-to-calculate-exponent',
			currentAnchor: '#exponent',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	const extraHeadHtml = `
  <style>
    .tool-card { max-width: var(--content-max); width: 100%; margin: 0 0 1.5rem; }
    .form-label { display:block; margin-bottom:.5rem; color:#495057; font-weight:500 }
    .form-hint { display:block; color:#6c757d; font-size:.85rem; margin:-.25rem 0 .75rem; }
    .form-group { margin-bottom:1rem; }
    .form-row2 { display:grid; grid-template-columns:repeat(2, minmax(0, 1fr)); gap:0 1rem; }
    @media (max-width:576px) { .form-row2 { grid-template-columns:minmax(0, 1fr); } }
    .form-row2 .input-lg { width:100%; max-width:100%; box-sizing:border-box; }
    .btn-row { display:flex; flex-wrap:wrap; gap:.5rem; align-items:center; }
    .result { background:#f8f9fa; padding:1rem; border-radius:8px; margin-top:1rem; }
    .ex-main-label { text-align:center; color:#495057; font-size:.95rem; }
    .ex-main { font-size:1.6rem; font-weight:600; text-align:center; margin:.15rem 0 .5rem; font-variant-numeric:tabular-nums; overflow-wrap:anywhere; }
    .ex-main sup, .ex-row sup, .ex-steps sup { font-size:.62em; }
    .ex-row { color:#495057; font-size:.92rem; margin-top:.45rem; font-variant-numeric:tabular-nums; overflow-wrap:anywhere; }
    .ex-row strong { color:#343a40; }
    .ex-big { margin-top:.3rem; max-height:9rem; overflow:auto; background:#fff; border:1px solid #dee2e6; border-radius:6px; padding:.4rem .55rem; font-family:ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size:.85rem; word-break:break-all; }
    .ex-h { font-size:1rem; font-weight:600; margin:1rem 0 .35rem; }
    .ex-steps { margin:0; padding-inline-start:1.3rem; font-size:.92rem; color:#343a40; }
    .ex-steps li { margin-bottom:.35rem; overflow-wrap:anywhere; }
    .result .muted { color:#6c757d; font-size:.9rem; margin-top:.75rem; }
    .result .muted.ex-err { color:#b02a37; font-weight:500; margin-top:0; }
  </style>`;

	const contentHtml = `
    <div id="exponent" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(tx('title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <form id="calcForm" novalidate>
          <div class="form-row2">
            <div class="form-group">
              <label class="form-label" for="exMode">${escapeHtml(tx('mode_label'))}</label>
              <select id="exMode" class="input-lg">
                <option value="power" selected>${escapeHtml(tx('mode_power'))}</option>
                <option value="base">${escapeHtml(tx('mode_base'))}</option>
                <option value="exp">${escapeHtml(tx('mode_exp'))}</option>
              </select>
            </div>
          </div>
          <div class="form-row2">
            <div class="form-group" id="exWrapA">
              <label class="form-label" for="exA">${escapeHtml(tx('base_label'))}</label>
              <input id="exA" class="input-lg" type="text" autocomplete="off" spellcheck="false" placeholder="${escapeHtml(tx('base_ph'))}">
            </div>
            <div class="form-group" id="exWrapB">
              <label class="form-label" for="exB">${escapeHtml(tx('exp_label'))}</label>
              <input id="exB" class="input-lg" type="text" autocomplete="off" spellcheck="false" placeholder="${escapeHtml(tx('exp_ph'))}">
            </div>
            <div class="form-group" id="exWrapC" style="display:none">
              <label class="form-label" for="exC">${escapeHtml(tx('res_label'))}</label>
              <input id="exC" class="input-lg" type="text" autocomplete="off" spellcheck="false" placeholder="${escapeHtml(tx('res_ph'))}">
            </div>
          </div>
          <span class="form-hint">${escapeHtml(tx('hint'))}</span>
          <div class="btn-row">
            <button type="submit" id="exBtnCalc" class="btn btn-primary">${escapeHtml(tx('calculate'))}</button>
            <button type="button" id="exBtnSample" class="btn btn-outline-secondary">${escapeHtml(tx('sample'))}</button>
            <button type="button" id="exBtnClear" class="btn btn-outline-secondary">${escapeHtml(tx('clear'))}</button>
          </div>
        </form>
        <div id="calcResult" class="result" style="display:none" aria-live="polite">
          <div id="exMainLabel" class="ex-main-label"></div>
          <div id="exMain" class="ex-main"></div>
          <div id="exRows"></div>
          <div id="exStepsWrap">
            <div class="ex-h">${escapeHtml(tx('steps_title'))}</div>
            <ol id="exSteps" class="ex-steps"></ol>
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
				label: tx('ref_exp_label'),
				href: 'https://en.wikipedia.org/wiki/Exponentiation',
			},
			{
				label: tx('ref_zero_label'),
				href: 'https://en.wikipedia.org/wiki/Zero_to_the_power_of_zero',
			},
		],
	});

	/** 前端脚本需要的文案（一次性注入）。 */
	const clientText = {
		lang: opts.lang,
		decComma: DECIMAL_COMMA_LANGS.includes(opts.lang),
		fieldA: tx('base_label'),
		fieldB: tx('exp_label'),
		fieldC: tx('res_label'),
		outPower: tx('out_power'),
		outBase: tx('out_base'),
		outExp: tx('out_exp'),
		rowExact: tx('row_exact'),
		rowDecimal: tx('row_decimal'),
		rowFrac: tx('row_frac'),
		rowSci: tx('row_sci'),
		rowDigits: tx('row_digits'),
		digitsTpl: tx('digits_tpl'),
		rowCheck: tx('row_check'),
		rowLog: tx('row_log'),
		rowComplex: tx('row_complex'),
		noReal: tx('no_real'),
		stepPow0: tx('step_pow0_tpl'),
		stepZeroPos: tx('step_zero_pos_tpl'),
		stepRepeat: tx('step_repeat_tpl'),
		stepRepeatMany: tx('step_repeat_many_tpl'),
		stepNeg: tx('step_neg_tpl'),
		stepSign: tx('step_sign_tpl'),
		stepDec: tx('step_dec_tpl'),
		stepFrac: tx('step_frac_tpl'),
		stepOddRoot: tx('step_odd_root_tpl'),
		stepEvenRoot: tx('step_even_root_tpl'),
		stepComplex: tx('step_complex_tpl'),
		stepExpLog: tx('step_explog_tpl'),
		stepSci: tx('step_sci_tpl'),
		stepBaseInt: tx('step_base_int_tpl'),
		stepBaseFrac: tx('step_base_frac_tpl'),
		stepBaseNeg: tx('step_base_neg'),
		stepExp: tx('step_exp_tpl'),
		noteZeroZero: tx('note_zero_zero'),
		noteDecExp: tx('note_dec_exp'),
		noteBasePm: tx('note_base_pm_tpl'),
		noteExpLog: tx('note_exp_log'),
		noteRound: tx('result_note'),
		errNum: tx('err_num_tpl'),
		errZeroNeg: tx('err_zero_neg'),
		errExpBase: tx('err_exp_base'),
		errExpResult: tx('err_exp_result'),
		errBaseAny: tx('err_base_any'),
		errBaseNone: tx('err_base_none'),
		errBaseZero: tx('err_base_zero'),
		errBaseNoreal: tx('err_base_noreal'),
		errRange: tx('err_range'),
	};

	const extraBodyHtml = `
  <script>
    (function () {
      /** 表单与输入控件。 */
      var form = document.getElementById('calcForm');
      var modeEl = document.getElementById('exMode');
      var aEl = document.getElementById('exA');
      var bEl = document.getElementById('exB');
      var cEl = document.getElementById('exC');
      /** 三个输入框的外层（按模式显隐）。 */
      var boxA = document.getElementById('exWrapA');
      var boxB = document.getElementById('exWrapB');
      var boxC = document.getElementById('exWrapC');
      /** 结果区各输出位。 */
      var result = document.getElementById('calcResult');
      var mainLabelEl = document.getElementById('exMainLabel');
      var mainEl = document.getElementById('exMain');
      var rowsEl = document.getElementById('exRows');
      var stepsWrap = document.getElementById('exStepsWrap');
      var stepsEl = document.getElementById('exSteps');
      var noteEl = document.getElementById('calcNote');
      /** 本地化文案字典。 */
      var T = ${JSON.stringify(clientText)};
      /** 精确整数 / 分数最多展示的位数，超过改用科学计数法。 */
      var MAX_EXACT_DIGITS = 3000;
      /** log10 绝对值上限：超过后尾数已无有效精度。 */
      var MAX_LOG10 = 1e15;
      /** 不换行空格（输入清洗用）。 */
      var NBSP = String.fromCharCode(160);
      /** 十进制数：符号、整数部分、小数部分、可选 e 指数。 */
      var NUM_RE = /^([+-]?)([0-9]*)(?:[.]([0-9]*))?(?:[eE]([+-]?[0-9]+))?$/;
      /** 英文式千分位（如 1,024 或 12,345,678）。 */
      var GROUP_RE = /^[+-]?[0-9]{1,3}(,[0-9]{3})+$/;
      /** 常用 BigInt 常量。 */
      var B0 = BigInt(0);
      var B1 = BigInt(1);
      var B2 = BigInt(2);
      var B5 = BigInt(5);
      var B10 = BigInt(10);
      /** 每种模式需要的输入框。 */
      var NEED = { power: ['a', 'b'], base: ['b', 'c'], exp: ['a', 'c'] };
      /** 样例轮换；首个与 Example 一致。 */
      var SAMPLES = [
        { mode: 'power', a: '2', b: '10' },
        { mode: 'power', a: '2', b: '100' },
        { mode: 'power', a: '5', b: '-3' },
        { mode: 'power', a: '-8', b: '1/3' },
        { mode: 'power', a: '16', b: '0.75' },
        { mode: 'base', b: '3', c: '343' },
        { mode: 'exp', a: '1.05', c: '2' }
      ];
      /** 下一次点击「加载样例」使用的样例下标。 */
      var sampleIndex = 0;
      /** 本地化数字格式器缓存。 */
      var nfCache = {};

      /**
       * 取（并缓存）一个本地化数字格式器（拉丁数字）。
       * @param {string} key 缓存键
       * @param {Object} o Intl.NumberFormat 选项
       * @returns {Intl.NumberFormat}
       */
      function nfGet(key, o) {
        if (!nfCache[key]) nfCache[key] = new Intl.NumberFormat(T.lang + '-u-nu-latn', o);
        return nfCache[key];
      }

      /**
       * 按有效数字位格式化数字。
       * @param {number} v 数值
       * @param {number} sig 最多有效数字
       * @returns {string}
       */
      function nfSig(v, sig) {
        return nfGet('s' + sig, { maximumSignificantDigits: sig }).format(v);
      }

      /**
       * 格式化整数（带分组）。
       * @param {number} v 整数
       * @returns {string}
       */
      function nfInt(v) {
        return nfGet('i', { maximumFractionDigits: 0 }).format(v);
      }

      /**
       * 按固定最多小数位格式化（用于有限小数的精确显示）。
       * @param {number} v 数值
       * @param {number} places 最多小数位
       * @returns {string}
       */
      function nfFix(v, places) {
        return nfGet('f' + places, { maximumFractionDigits: places }).format(v);
      }

      /**
       * BigInt 带分组显示；浏览器不支持时退回原始数字串。
       * @param {bigint} x 整数
       * @returns {string}
       */
      function groupBig(x) {
        try {
          return nfGet('b', { maximumFractionDigits: 0 }).format(x);
        } catch (e) {
          return x.toString();
        }
      }

      /**
       * HTML 转义。
       * @param {*} s 文本
       * @returns {string}
       */
      function escapeH(s) {
        return String(s).replace(/[&<>"]/g, function (ch) {
          return ch === '&' ? '&amp;' : ch === '<' ? '&lt;' : ch === '>' ? '&gt;' : '&quot;';
        });
      }

      /**
       * 纯文本模板占位替换（{key} → 值）。
       * @param {string} tpl 模板
       * @param {Object} map 键值
       * @returns {string}
       */
      function fill(tpl, map) {
        var s = String(tpl || '');
        Object.keys(map).forEach(function (k) { s = s.split('{' + k + '}').join(String(map[k])); });
        return s;
      }

      /**
       * HTML 模板替换：模板先转义，占位值按已转义 HTML 原样插入。
       * @param {string} tpl 模板（纯文本）
       * @param {Object} map 键 → HTML 片段
       * @returns {string}
       */
      function fillH(tpl, map) {
        return fill(escapeH(tpl), map);
      }

      /**
       * 以「尾数 × 10^指数」显示（由 log10 推出，避免溢出）。
       * @param {number} sign 1 或 -1
       * @param {number} L log10 |值|
       * @param {number} sig 尾数有效位
       * @returns {string} HTML
       */
      function fmtSci(sign, L, sig) {
        var k = Math.floor(L);
        var m = Number(Math.pow(10, L - k).toPrecision(sig));
        if (m >= 10) { m = 1; k += 1; }
        return (sign < 0 ? '-' : '') + escapeH(nfSig(m, sig)) + ' × 10<sup>' + escapeH(nfInt(k)) + '</sup>';
      }

      /**
       * 普通数字显示：适中量级用本地化小数，极大极小用科学计数法。
       * @param {number} v 数值
       * @param {number} sig 有效位
       * @returns {string} HTML
       */
      function fmtNum(v, sig) {
        if (v === 0) return '0';
        var av = Math.abs(v);
        if (av >= 1e-6 && av < 1e15) return escapeH(nfSig(v, sig));
        return fmtSci(v < 0 ? -1 : 1, Math.log10(av), sig);
      }

      /** BigInt 绝对值。 */
      function babs(x) {
        return x < B0 ? -x : x;
      }

      /**
       * BigInt 最大公约数。
       * @param {bigint} a
       * @param {bigint} b
       * @returns {bigint}
       */
      function gcd(a, b) {
        a = babs(a);
        b = babs(b);
        while (b > B0) { var r = a % b; a = b; b = r; }
        return a;
      }

      /**
       * 有理数规范化：分母为正、约分。
       * @param {bigint} n 分子
       * @param {bigint} d 分母（≠0）
       * @returns {{n: bigint, d: bigint}}
       */
      function ratNorm(n, d) {
        if (d < B0) { n = -n; d = -d; }
        var g = gcd(n, d);
        if (g > B1) { n = n / g; d = d / g; }
        return { n: n, d: d };
      }

      /**
       * 正 BigInt 的 log10（取前 15 位尾数 + 位数）。
       * @param {bigint} x 正整数
       * @returns {number}
       */
      function log10Big(x) {
        var s = x.toString();
        if (s.length <= 15) return Math.log10(Number(s));
        return Math.log10(Number(s.slice(0, 15))) + (s.length - 15);
      }

      /**
       * 有理数绝对值的 log10。
       * @param {{n: bigint, d: bigint}} r 非零有理数
       * @returns {number}
       */
      function ratL(r) {
        return log10Big(babs(r.n)) - log10Big(r.d);
      }

      /** BigInt 十进制位数（不含符号）。 */
      function digitsOf(x) {
        return babs(x).toString().length;
      }

      /**
       * 整数 k 次方根（向下取整），Newton 迭代自上界出发。
       * @param {bigint} N 非负整数
       * @param {number} k 根指数 ≥ 1
       * @returns {bigint}
       */
      function iroot(N, k) {
        if (N < B2 || k === 1) return N;
        var K = BigInt(k);
        var K1 = K - B1;
        var x = B1 << BigInt(Math.ceil(N.toString(2).length / k));
        for (;;) {
          var y = (K1 * x + N / (x ** K1)) / K;
          if (y >= x) return x;
          x = y;
        }
      }

      /**
       * 若 N 是完全 k 次方则返回其 k 次方根，否则 null。
       * @param {bigint} N 非负整数
       * @param {number} k 根指数
       * @returns {bigint|null}
       */
      function exactRoot(N, k) {
        if (N.toString().length > 600) return null;
        var r = iroot(N, k);
        return r ** BigInt(k) === N ? r : null;
      }

      /**
       * 有理数开 k 次方根（仅当分子分母都是完全 k 次方）。负数只在 k 为奇数时有根。
       * @param {{n: bigint, d: bigint}} r 有理数
       * @param {number} k 根指数
       * @returns {{n: bigint, d: bigint}|null}
       */
      function ratRoot(r, k) {
        var neg = r.n < B0;
        if (neg && k % 2 === 0) return null;
        var rn = exactRoot(babs(r.n), k);
        var rd = rn === null ? null : exactRoot(r.d, k);
        if (rn === null || rd === null) return null;
        return { n: neg ? -rn : rn, d: rd };
      }

      /**
       * 估算有理数 e 次幂的十进制位数（分子分母中较大者）。
       * @param {{n: bigint, d: bigint}} r 有理数
       * @param {number} e 整数指数
       * @returns {number}
       */
      function digitsEst(r, e) {
        var ln = r.n === B0 ? 0 : log10Big(babs(r.n));
        return Math.abs(e) * Math.max(ln, log10Big(r.d)) + 1;
      }

      /**
       * 有理数的整数次幂（精确）。调用前须用 digitsEst 控制规模，且 0 不可取负次幂。
       * @param {{n: bigint, d: bigint}} r 有理数
       * @param {number} e 整数指数
       * @returns {{n: bigint, d: bigint}}
       */
      function ratPowInt(r, e) {
        var E = BigInt(Math.abs(e));
        var n = r.n ** E;
        var d = r.d ** E;
        return e >= 0 ? { n: n, d: d } : ratNorm(d, n);
      }

      /**
       * 有理数转双精度数；超出范围返回 null。
       * @param {{n: bigint, d: bigint}} r 有理数
       * @returns {number|null}
       */
      function ratToNumber(r) {
        if (r.n === B0) return 0;
        var lim = BigInt(9007199254740991);
        if (babs(r.n) <= lim && r.d <= lim) return Number(r.n) / Number(r.d);
        var L = ratL(r);
        if (Math.abs(L) > 300) return null;
        return (r.n < B0 ? -1 : 1) * Math.pow(10, L);
      }

      /**
       * 若分母只含因子 2 和 5（有限小数），返回小数位数；否则 -1。
       * @param {bigint} d 正分母
       * @returns {number}
       */
      function terminatingPlaces(d) {
        if (d.toString().length > 400) return -1;
        var c2 = 0;
        var c5 = 0;
        while (d % B2 === B0) { d = d / B2; c2++; }
        while (d % B5 === B0) { d = d / B5; c5++; }
        return d === B1 ? Math.max(c2, c5) : -1;
      }

      /**
       * 有限小数且有效数字 ≤ 15 位时，返回精确的「尾数 × 10^k」HTML；否则 null。
       * @param {{n: bigint, d: bigint}} r 非零有理数
       * @returns {string|null}
       */
      function exactDecSci(r) {
        var places = terminatingPlaces(r.d);
        if (places < 0 || places > 2000) return null;
        var M = babs(r.n) * (B10 ** BigInt(places)) / r.d;
        var s = M.toString();
        var sig = s.replace(/0+$/, '');
        if (sig.length > 15) return null;
        var k = (s.length - 1) - places;
        var mant = sig.length > 1 ? sig.charAt(0) + '.' + sig.slice(1) : sig;
        return (r.n < B0 ? '-' : '') + escapeH(nfSig(Number(mant), 15)) + ' × 10<sup>' + escapeH(nfInt(k)) + '</sup>';
      }

      /** 分数 n/d 的 HTML。 */
      function ratFracH(r) {
        return escapeH(groupBig(r.n)) + '/' + escapeH(groupBig(r.d));
      }

      /**
       * 有理数的小数显示：有限且位数少时用「=」，否则「≈」12 位有效数字。
       * @param {{n: bigint, d: bigint}} r 有理数
       * @returns {string} HTML（含 = 或 ≈ 前缀）
       */
      function ratDecH(r) {
        var v = ratToNumber(r);
        if (v === null) return '≈ ' + fmtSci(r.n < B0 ? -1 : 1, ratL(r), 12);
        var places = terminatingPlaces(r.d);
        if (places >= 0 && places <= 12 && digitsOf(r.n) <= 15) return '= ' + escapeH(nfFix(v, places));
        var es = exactDecSci(r);
        if (es) return '= ' + es;
        return '≈ ' + fmtNum(v, 12);
      }

      /**
       * 有理数的简短显示（主结果 / 步骤内使用）。近似值以「≈ 」开头。
       * @param {{n: bigint, d: bigint}} r 有理数
       * @param {boolean} preferDec 输入含小数时优先显示有限小数
       * @returns {string} HTML
       */
      function ratShortH(r, preferDec) {
        var nd = digitsOf(r.n);
        if (r.d === B1) {
          return nd <= 24 ? escapeH(groupBig(r.n)) : '≈ ' + fmtSci(r.n < B0 ? -1 : 1, ratL(r), 12);
        }
        var places = terminatingPlaces(r.d);
        if (preferDec && places >= 0 && places <= 12 && nd <= 15) return escapeH(nfFix(Number(r.n) / Number(r.d), places));
        if (nd + digitsOf(r.d) > 20) {
          var es = exactDecSci(r);
          if (es) return es;
        }
        if (nd + digitsOf(r.d) <= 30) return ratFracH(r);
        var v = ratToNumber(r);
        return '≈ ' + (v === null ? fmtSci(r.n < B0 ? -1 : 1, ratL(r), 12) : fmtNum(v, 12));
      }

      /**
       * 解析一个十进制数（支持逗号小数、千分位、e 记数），同时给出精确有理数。
       * @param {string} s 已去空格的文本
       * @returns {{v: number, r: ({n: bigint, d: bigint}|null), dec: boolean}|null}
       */
      function parseDec(s) {
        var hasDot = s.indexOf('.') >= 0;
        var hasComma = s.indexOf(',') >= 0;
        if (hasDot && hasComma) {
          s = T.decComma ? s.split('.').join('').replace(',', '.') : s.split(',').join('');
        } else if (hasComma) {
          s = (!T.decComma && GROUP_RE.test(s)) ? s.split(',').join('') : s.replace(',', '.');
        }
        var m = NUM_RE.exec(s);
        if (!m || (!m[2] && !m[3])) return null;
        var intD = m[2] || '';
        var fracD = m[3] || '';
        var e = m[4] ? parseInt(m[4], 10) : 0;
        var v = Number((m[1] === '-' ? '-' : '') + (intD || '0') + '.' + (fracD || '0') + 'e' + e);
        if (!isFinite(v)) return null;
        var r = null;
        if (intD.length + fracD.length <= 400 && Math.abs(e) <= 400) {
          var num = BigInt((intD + fracD) || '0');
          var den = B1;
          var p10 = e - fracD.length;
          if (p10 >= 0) num = num * (B10 ** BigInt(p10));
          else den = B10 ** BigInt(-p10);
          if (m[1] === '-') num = -num;
          r = ratNorm(num, den);
        }
        return { v: v, r: r, dec: fracD.length > 0 || e < 0 };
      }

      /**
       * 解析输入框：整数、小数、e 记数或分数 p/q（p、q 可为小数）。
       * @param {string} raw 原始文本
       * @returns {Object|null} {v, r, dec, frac, html}
       */
      function parseNum(raw) {
        var s = String(raw || '').split(NBSP).join('').split(' ').join('').split('−').join('-').split('–').join('-');
        if (!s) return null;
        var out;
        var slash = s.indexOf('/');
        if (slash >= 0) {
          var p = parseDec(s.slice(0, slash));
          var q = parseDec(s.slice(slash + 1));
          if (!p || !q || q.v === 0) return null;
          var v = p.v / q.v;
          if (!isFinite(v)) return null;
          out = {
            v: v,
            r: (p.r && q.r) ? ratNorm(p.r.n * q.r.d, p.r.d * q.r.n) : null,
            dec: false,
            frac: true,
            html: fmtNum(p.v, 15) + '/' + fmtNum(q.v, 15)
          };
        } else {
          out = parseDec(s);
          if (!out) return null;
          out.frac = false;
          out.html = fmtNum(out.v, 15);
        }
        if (out.r && out.r.n === B0) out.v = 0;
        return out;
      }

      /**
       * 底数显示：负数或分数加括号。
       * @param {string} html 数字 HTML
       * @param {boolean} wrap 是否加括号
       * @returns {string}
       */
      function wrapB(html, wrap) {
        return wrap ? '(' + html + ')' : html;
      }

      /** 解析后输入作为底数的 HTML。 */
      function baseH(P) {
        return wrapB(P.html, P.v < 0 || P.frac);
      }

      /** 幂的 HTML：底数 + 上标指数。 */
      function powH(base, exp) {
        return base + '<sup>' + exp + '</sup>';
      }

      /**
       * 根式 HTML：2 次根写 √，其余带上标根指数。
       * @param {number} d 根指数
       * @param {string} inner 被开方数 HTML
       * @returns {string}
       */
      function rootH(d, inner) {
        return d === 2 ? '√' + inner : '<sup>' + escapeH(nfInt(d)) + '</sup>√' + inner;
      }

      /**
       * 新建结果对象。
       * @param {string} label 主结果标题
       * @returns {Object}
       */
      function newRes(label) {
        return { label: label, main: '', rows: [], steps: [], notes: [] };
      }

      /** 追加一行「标签：值」。 */
      function addRow(res, label, html) {
        res.rows.push('<div class="ex-row"><strong>' + escapeH(label) + ':</strong> ' + html + '</div>');
      }

      /** 长数字放进可滚动等宽框。 */
      function bigBox(html) {
        return '<div class="ex-big">' + html + '</div>';
      }

      /**
       * 展示精确有理数结果：主结果 + 精确 / 小数 / 位数等辅助行。
       * @param {Object} res 结果对象
       * @param {string} ex 表达式 HTML
       * @param {{n: bigint, d: bigint}} r 结果
       * @param {boolean} preferDec 优先显示有限小数
       * @returns {string} 简短值 HTML（步骤用）
       */
      function presentRational(res, ex, r, preferDec) {
        var vh = ratShortH(r, preferDec);
        var approx = vh.indexOf('≈') === 0;
        res.main = ex + (approx ? ' ' : ' = ') + vh;
        var nd = digitsOf(r.n);
        if (r.d === B1) {
          if (nd > 24) addRow(res, T.rowExact, bigBox(escapeH(groupBig(r.n))));
          if (nd > 6) addRow(res, T.rowDigits, escapeH(fill(T.digitsTpl, { n: nfInt(nd) })));
          if (nd > 12 && nd <= 24) addRow(res, T.rowSci, fmtSci(r.n < B0 ? -1 : 1, ratL(r), 12));
        } else if (!approx && vh !== ratFracH(r)) {
          addRow(res, T.rowFrac, ratFracH(r));
        } else if (!approx) {
          addRow(res, T.rowDecimal, ratDecH(r));
        } else {
          addRow(res, T.rowExact, bigBox(ratFracH(r)));
        }
        return vh;
      }

      /**
       * 展示近似结果；双精度溢出时由 log10 写成科学计数法。
       * @param {Object} res 结果对象
       * @param {string} ex 表达式 HTML
       * @param {number} v 双精度值（可能为 Infinity / 0）
       * @param {number} sign 结果符号
       * @param {number} L log10 |结果|
       * @returns {string} 简短值 HTML
       */
      function presentApprox(res, ex, v, sign, L) {
        var vh;
        if (isFinite(v) && v !== 0 && Math.abs(L) < 300) {
          vh = '≈ ' + fmtNum(v, 12);
          if (Math.abs(L) >= 6 && Math.abs(L) < 15) addRow(res, T.rowSci, fmtSci(sign, L, 12));
        } else {
          vh = '≈ ' + fmtSci(sign, L, 12);
        }
        res.main = ex + ' ' + vh;
        return vh;
      }

      /** BigInt 是否为奇数。 */
      function isOddBig(x) {
        return babs(x) % B2 === B1;
      }

      /**
       * 求幂 a^b。
       * @param {Object} A 底数
       * @param {Object} B 指数
       * @returns {Object} 结果对象或 {error}
       */
      function solvePower(A, B) {
        var a = A.v;
        var b = B.v;
        var res = newRes(T.outPower);
        var ex = powH(baseH(A), B.html);
        if (a === 0) {
          if (b > 0) {
            res.main = ex + ' = 0';
            res.steps.push(fillH(T.stepZeroPos, { expr: ex }));
            return res;
          }
          if (b === 0) {
            res.main = ex + ' = 1';
            res.notes.push(T.noteZeroZero);
            return res;
          }
          return { error: T.errZeroNeg };
        }
        var R = B.r;
        var absA = Math.abs(a);
        var la = A.r ? ratL(A.r) : Math.log10(absA);
        var preferDec = A.dec || B.dec;
        var vh;
        if (B.dec && R && R.d > B1 && R.d <= BigInt(1000)) {
          res.steps.push(fillH(T.stepDec, { dec: B.html, frac: ratFracH(R) }));
        }
        var bInt = R ? R.d === B1 : Number.isInteger(b);
        if (bInt) {
          var e = R ? Number(R.n) : b;
          var neg = a < 0 && (R ? isOddBig(R.n) : Math.abs(e) % 2 === 1);
          var L = e * la;
          if (!isFinite(L) || Math.abs(L) > MAX_LOG10) return { error: T.errRange };
          var exact = (A.r && Math.abs(e) <= 1e6 && digitsEst(A.r, e) <= MAX_EXACT_DIGITS) ? ratPowInt(A.r, e) : null;
          if (exact) vh = presentRational(res, ex, exact, preferDec);
          else vh = presentApprox(res, ex, Math.pow(a, e), neg ? -1 : 1, L);
          if (e === 0) {
            res.steps.push(fillH(T.stepPow0, { expr: ex }));
          } else if (e >= 2 && e <= 10 && exact && vh.indexOf('≈') < 0) {
            var factors = [];
            for (var i = 0; i < e; i++) factors.push(baseH(A));
            res.steps.push(fillH(T.stepRepeat, { expr: ex, a: baseH(A), b: escapeH(nfInt(e)), mult: factors.join(' × '), val: vh }));
          } else if (e > 10) {
            res.steps.push(fillH(T.stepRepeatMany, { expr: ex, a: baseH(A), b: escapeH(nfInt(e)) }));
          } else if (e < 0) {
            var posEx = powH(baseH(A), escapeH(nfInt(-e)));
            var posVal = exact ? ratShortH(ratPowInt(A.r, -e), preferDec) : fmtNum(Math.pow(absA, -e) * (neg ? -1 : 1), 12);
            res.steps.push(fillH(T.stepNeg, { expr: ex, pos: posEx, posval: posVal, val: vh.replace('≈ ', '') }));
          }
          if (a < 0 && e !== 0) res.steps.push(escapeH(T.stepSign));
          if (!exact && Math.abs(L) >= 15) {
            res.steps.push(fillH(T.stepSci, { b: B.html, absa: fmtNum(absA, 15), L: escapeH(nfSig(L, 12)), val: vh.replace('≈ ', '') }));
          }
          return res;
        }
        var dNum = R ? Number(R.d) : 0;
        var nNum = R ? Number(R.n) : 0;
        var oddDen = R && R.d % B2 === B1;
        var Lf = b * la;
        if (!isFinite(Lf) || Math.abs(Lf) > MAX_LOG10) return { error: T.errRange };
        if (a < 0 && !oddDen) {
          res.main = ex + ': ' + escapeH(T.noReal);
          res.steps.push(fillH(T.stepEvenRoot, { expr: ex }));
          var mag = Math.pow(absA, b);
          if (isFinite(mag) && mag > 0) {
            var th = Math.PI * b;
            var re = mag * Math.cos(th);
            var im = mag * Math.sin(th);
            if (Math.abs(re) < mag * 1e-12) re = 0;
            if (Math.abs(im) < mag * 1e-12) im = 0;
            var cH = re === 0 ? '' : fmtNum(re, 12);
            if (im !== 0) cH += (re === 0 ? (im < 0 ? '-' : '') : (im < 0 ? ' - ' : ' + ')) + (Math.abs(im) === 1 ? '' : fmtNum(Math.abs(im), 12)) + 'i';
            addRow(res, T.rowComplex, cH || '0');
            res.steps.push(fillH(T.stepComplex, { val: cH || '0' }));
          }
          if (B.dec) res.notes.push(T.noteDecExp);
          return res;
        }
        var sign = (a < 0 && isOddBig(R.n)) ? -1 : 1;
        var r0 = (A.r && R && dNum <= 64) ? ratRoot(A.r, dNum) : null;
        var exactF = (r0 && Math.abs(nNum) <= 1e6 && (r0.n !== B0) && digitsEst(r0, nNum) <= MAX_EXACT_DIGITS) ? ratPowInt(r0, nNum) : null;
        if (exactF) vh = presentRational(res, ex, exactF, preferDec);
        else vh = presentApprox(res, ex, sign * Math.pow(absA, b), sign, Lf);
        var valPlain = vh.replace('≈ ', '');
        if (a < 0) {
          var rootVal = r0 ? ratShortH(r0, preferDec) : fmtNum(-Math.pow(absA, 1 / dNum), 12);
          res.steps.push(fillH(T.stepOddRoot, { d: escapeH(nfInt(dNum)), root: rootH(dNum, baseH(A)), rootval: rootVal }));
        }
        if (R && dNum <= 1000) {
          var rootHtml = rootH(dNum, baseH(A));
          var form = nNum === 1 ? rootHtml : powH('(' + rootHtml + ')', escapeH(nfInt(nNum)));
          if (r0 && nNum !== 1) form += ' = ' + powH(wrapB(ratShortH(r0, preferDec), r0.n < B0 || (r0.d !== B1 && !preferDec)), escapeH(nfInt(nNum)));
          res.steps.push(fillH(T.stepFrac, { expr: ex, form: form, val: valPlain }));
        } else if (a > 0) {
          res.steps.push(fillH(T.stepExpLog, { expr: ex, epow: powH('e', escapeH(nfSig(b * Math.log(a), 12))), val: valPlain }));
        }
        if (!exactF && Math.abs(Lf) >= 300) {
          res.steps.push(fillH(T.stepSci, { b: B.html, absa: fmtNum(absA, 15), L: escapeH(nfSig(Lf, 12)), val: valPlain }));
        }
        return res;
      }

      /**
       * 由 a^b = c 求底数 a。
       * @param {Object} B 指数
       * @param {Object} C 结果
       * @returns {Object} 结果对象或 {error}
       */
      function solveBase(B, C) {
        var b = B.v;
        var c = C.v;
        var res = newRes(T.outBase);
        if (b === 0) return { error: c === 1 ? T.errBaseAny : T.errBaseNone };
        if (c === 0) {
          if (b > 0) {
            res.main = 'a = 0';
            return res;
          }
          return { error: T.errBaseZero };
        }
        var R = B.r;
        var oddDen = R && R.d % B2 === B1;
        var oddNum = R && isOddBig(R.n);
        var neg = false;
        if (c < 0) {
          if (oddDen && oddNum) neg = true;
          else return { error: T.errBaseNoreal };
        }
        var pm = c > 0 && oddDen && !oddNum;
        var absC = Math.abs(c);
        var L = (C.r ? ratL(C.r) : Math.log10(absC)) / b;
        if (!isFinite(L) || Math.abs(L) > MAX_LOG10) return { error: T.errRange };
        var preferDec = B.dec || C.dec;
        var exact = null;
        if (R && C.r && babs(R.n) <= BigInt(1000) && R.d <= BigInt(1000)) {
          var absCr = { n: babs(C.r.n), d: C.r.d };
          var root = ratRoot(absCr, Number(babs(R.n)));
          if (root && root.n !== B0 && digitsEst(root, Number(R.d)) <= MAX_EXACT_DIGITS) {
            exact = ratPowInt(root, Number(R.d));
            if (R.n < B0) exact = ratNorm(exact.d, exact.n);
            if (neg) exact = { n: -exact.n, d: exact.d };
          }
        }
        var vh;
        var aVal = (neg ? -1 : 1) * Math.pow(absC, 1 / b);
        if (exact) {
          vh = ratShortH(exact, preferDec);
        } else if (isFinite(aVal) && aVal !== 0 && Math.abs(L) < 300) {
          vh = '≈ ' + fmtNum(aVal, 12);
        } else {
          vh = '≈ ' + fmtSci(neg ? -1 : 1, L, 12);
        }
        var approx = vh.indexOf('≈') === 0;
        var shown = vh.replace('≈ ', '');
        res.main = 'a ' + (approx ? '≈ ' : '= ') + (pm ? '±' : '') + shown;
        var fracShown = !!exact && exact.d !== B1 && vh === ratFracH(exact);
        if (fracShown) addRow(res, T.rowDecimal, ratDecH(exact));
        var nInt = R && R.d === B1 && R.n > B0;
        if (nInt) {
          res.steps.push(fillH(T.stepBaseInt, { root: rootH(Number(R.n), wrapB(C.html, c < 0 || C.frac)), val: shown }));
        } else {
          var invR = R ? ratNorm(R.d, R.n) : null;
          var inv = invR ? (invR.d === B1 ? escapeH(groupBig(invR.n)) : ratFracH(invR)) : fmtNum(1 / b, 12);
          res.steps.push(fillH(T.stepBaseFrac, { form: powH(wrapB(C.html, c < 0 || C.frac), inv), val: shown }));
        }
        if (neg) res.steps.push(escapeH(T.stepBaseNeg));
        var checkBase = wrapB(shown, neg || fracShown);
        var fwd = (neg ? -1 : 1) * Math.pow(Math.abs(aVal), b);
        addRow(res, T.rowCheck, powH(checkBase, B.html) + (exact ? ' = ' + C.html : ' ≈ ' + (isFinite(fwd) && fwd !== 0 ? fmtNum(fwd, 12) : C.html)));
        if (pm) res.notes.push(fill(T.noteBasePm, { r: shown.replace(/<[^>]*>/g, '') }));
        return res;
      }

      /**
       * 由 a^b = c 求指数 b（即 log_a c）。
       * @param {Object} A 底数
       * @param {Object} C 结果
       * @returns {Object} 结果对象或 {error}
       */
      function solveExp(A, C) {
        var a = A.v;
        var c = C.v;
        if (!(a > 0) || a === 1) return { error: T.errExpBase };
        if (!(c > 0)) return { error: T.errExpResult };
        var res = newRes(T.outExp);
        var la = A.r ? ratL(A.r) : Math.log10(a);
        var lc = C.r ? ratL(C.r) : Math.log10(c);
        var b = lc / la;
        if (!isFinite(b)) return { error: T.errRange };
        var exactH = null;
        var exactIsFrac = false;
        if (A.r && C.r) {
          var k = Math.round(b);
          if (Math.abs(b - k) < 1e-9 && Math.abs(k) <= 1e6 && digitsEst(A.r, k) <= MAX_EXACT_DIGITS) {
            var p = ratPowInt(A.r, k);
            if (p.n === C.r.n && p.d === C.r.d) exactH = escapeH(nfInt(k));
          }
          for (var den = 2; !exactH && den <= 12; den++) {
            var num = Math.round(b * den);
            if (Math.abs(b * den - num) > 1e-9 || num === 0 || Number(gcd(BigInt(num), BigInt(den))) !== 1) continue;
            if (digitsEst(A.r, num) > MAX_EXACT_DIGITS || digitsEst(C.r, den) > MAX_EXACT_DIGITS) continue;
            var lhs = ratPowInt(A.r, num);
            var rhs = ratPowInt(C.r, den);
            if (lhs.n === rhs.n && lhs.d === rhs.d) {
              exactH = escapeH(nfInt(num)) + '/' + escapeH(nfInt(den));
              exactIsFrac = true;
            }
          }
        }
        var approxH = fmtNum(b, 12);
        res.main = 'b ' + (exactH ? '= ' + exactH : '≈ ' + approxH);
        if (exactIsFrac) addRow(res, T.rowDecimal, '≈ ' + approxH);
        addRow(res, T.rowLog, 'b = log<sub>' + A.html + '</sub>(' + C.html + ')');
        var lnc = lc * Math.LN10;
        var lna = la * Math.LN10;
        res.steps.push(fillH(T.stepExp, { lnc: fmtNum(lnc, 10), lna: fmtNum(lna, 10), val: exactH || approxH }));
        var fwdL = b * la;
        var fwd = Math.abs(fwdL) < 300 ? fmtNum(Math.pow(10, fwdL), 12) : fmtSci(1, fwdL, 12);
        addRow(res, T.rowCheck, powH(baseH(A), exactH || approxH) + (exactH ? ' = ' + C.html : ' ≈ ' + fwd));
        res.notes.push(T.noteExpLog);
        return res;
      }

      /** 按模式显示所需输入框。 */
      function syncMode() {
        var need = NEED[modeEl.value] || NEED.power;
        boxA.style.display = need.indexOf('a') >= 0 ? '' : 'none';
        boxB.style.display = need.indexOf('b') >= 0 ? '' : 'none';
        boxC.style.display = need.indexOf('c') >= 0 ? '' : 'none';
      }

      /**
       * 在结果区显示错误（红字）。
       * @param {string} msg 错误文案
       */
      function showError(msg) {
        result.style.display = 'block';
        mainLabelEl.textContent = '';
        mainEl.innerHTML = '';
        rowsEl.innerHTML = '';
        stepsEl.innerHTML = '';
        stepsWrap.style.display = 'none';
        noteEl.className = 'muted ex-err';
        noteEl.textContent = msg;
      }

      /**
       * 渲染结果对象。
       * @param {Object} res 结果对象
       */
      function render(res) {
        result.style.display = 'block';
        mainLabelEl.textContent = res.label;
        mainEl.innerHTML = res.main;
        rowsEl.innerHTML = res.rows.join('');
        stepsEl.innerHTML = res.steps.map(function (s) { return '<li>' + s + '</li>'; }).join('');
        stepsWrap.style.display = res.steps.length ? '' : 'none';
        noteEl.className = 'muted';
        noteEl.textContent = res.notes.concat([T.noteRound]).join(' ');
      }

      /** 读取输入、求解并刷新结果区。 */
      function run() {
        var mode = modeEl.value;
        var need = NEED[mode] || NEED.power;
        var vals = {};
        var fields = { a: [aEl, T.fieldA], b: [bEl, T.fieldB], c: [cEl, T.fieldC] };
        for (var i = 0; i < need.length; i++) {
          var key = need[i];
          var parsed = parseNum(fields[key][0].value);
          if (!parsed) {
            showError(fill(T.errNum, { field: fields[key][1] }));
            return;
          }
          vals[key] = parsed;
        }
        var res;
        try {
          if (mode === 'base') res = solveBase(vals.b, vals.c);
          else if (mode === 'exp') res = solveExp(vals.a, vals.c);
          else res = solvePower(vals.a, vals.b);
        } catch (err) {
          res = { error: T.errRange };
        }
        if (res.error) showError(res.error);
        else render(res);
      }

      /**
       * 样例值按页面语言换成逗号小数。
       * @param {string} s 样例文本
       * @returns {string}
       */
      function sampleVal(s) {
        return T.decComma ? String(s || '').replace('.', ',') : String(s || '');
      }

      /** 加载下一个样例并计算（轮换）。 */
      function loadSample() {
        var s = SAMPLES[sampleIndex % SAMPLES.length];
        sampleIndex += 1;
        modeEl.value = s.mode;
        aEl.value = sampleVal(s.a);
        bEl.value = sampleVal(s.b);
        cEl.value = sampleVal(s.c);
        syncMode();
        run();
      }

      /** 清空：清输入、回到「求幂」，隐藏结果；不重载样例。 */
      function clearAll() {
        modeEl.value = 'power';
        aEl.value = '';
        bEl.value = '';
        cEl.value = '';
        syncMode();
        result.style.display = 'none';
        aEl.focus();
      }

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        run();
      });
      modeEl.addEventListener('change', function () {
        syncMode();
        result.style.display = 'none';
      });
      document.getElementById('exBtnSample').addEventListener('click', loadSample);
      document.getElementById('exBtnClear').addEventListener('click', clearAll);
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('how-to-calculate-exponent');
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
