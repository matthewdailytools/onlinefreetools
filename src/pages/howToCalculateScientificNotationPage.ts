/**
 * 科学计数法计算器工具页。
 * slug: how-to-calculate-scientific-notation（见 work-tasks/how-to-calculate-scientific-notation/02-tool-info.md）。
 *
 * 交互要点（2026-10-14 改写）：
 * - 单输入框自动识别「小数 → 科学计数」或「科学计数 → 小数」，不再需要方向下拉；
 * - 按字符串精确移位（不走浮点乘法），长常数与极小数保留全部数字；
 * - 一次输出科学计数 a×10ⁿ、E 记数、工程记数（含 SI 前缀）、小数形式、有效数字与移位过程；
 * - 可选有效数字（四舍五入到第 n 位），用于消除整数末尾 0 的歧义。
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
const PREFIX = 'tool_scientific_notation';

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
 * 渲染 how-to-calculate-scientific-notation 工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 * @returns 完整页面 HTML
 */
export const renderHowToCalculateScientificNotationPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 读取本工具键（自动拼前缀）。 */
	const tx = (key: string) => t(opts.lang, `${PREFIX}_${key}` as keyof typeof import('../site/i18n/en').default);

	const toolPath = '/tools/how-to-calculate-scientific-notation';
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
			currentSlug: 'how-to-calculate-scientific-notation',
			currentAnchor: '#scientific-notation',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	/** 有效数字下拉选项：保留输入位数 + 1…10 位。 */
	const sigOptionsHtml = [
		`<option value="all" selected>${escapeHtml(tx('sigfigs_all'))}</option>`,
		...Array.from({ length: 10 }, (_, i) => `<option value="${i + 1}">${i + 1}</option>`),
	].join('');

	const extraHeadHtml = `
  <style>
    .tool-card { max-width: var(--content-max); width: 100%; margin: 0 0 1.5rem; }
    .form-label { display:block; margin-bottom:.5rem; color:#495057; font-weight:500 }
    .form-group { margin-bottom:1rem; }
    .form-row { display:grid; grid-template-columns:2fr 1fr; gap:1rem; }
    @media (max-width:576px) { .form-row { grid-template-columns:1fr; } }
    .btn-row { display:flex; flex-wrap:wrap; gap:.5rem; align-items:center; }
    .result { background:#f8f9fa; padding:1rem; border-radius:8px; margin-top:1rem; }
    .sn-main { font-size:1.6rem; font-weight:600; text-align:center; margin:.25rem 0 .75rem; word-break:break-all; }
    .sn-grid { display:grid; grid-template-columns:auto 1fr; gap:.35rem .75rem; font-size:.95rem; }
    .sn-grid dt { color:#495057; font-weight:500; }
    .sn-grid dd { margin:0; word-break:break-all; font-variant-numeric:tabular-nums; }
    .result .muted { color:#6c757d; font-size:.9rem; margin-top:.75rem; }
  </style>`;

	const contentHtml = `
    <div id="scientific-notation" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(tx('title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <form id="calcForm" novalidate>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label" for="snValue">${escapeHtml(tx('value_label'))}</label>
              <input id="snValue" class="input-lg" type="text" inputmode="text" autocomplete="off" spellcheck="false"
                dir="ltr" placeholder="${escapeHtml(tx('value_ph'))}">
            </div>
            <div class="form-group">
              <label class="form-label" for="snSigfigs">${escapeHtml(tx('sigfigs_label'))}</label>
              <select id="snSigfigs" class="input-lg">${sigOptionsHtml}</select>
            </div>
          </div>
          <div class="btn-row">
            <button type="submit" id="snBtnConvert" class="btn btn-primary">${escapeHtml(tx('convert'))}</button>
            <button type="button" id="snBtnSample" class="btn btn-outline-secondary">${escapeHtml(tx('sample'))}</button>
            <button type="button" id="snBtnClear" class="btn btn-outline-secondary">${escapeHtml(tx('clear'))}</button>
          </div>
        </form>
        <div id="calcResult" class="result" style="display:none" aria-live="polite">
          <div id="snSciOut" class="sn-main" dir="ltr"></div>
          <dl id="snDetails" class="sn-grid">
            <dt>${escapeHtml(tx('e_label'))}</dt><dd id="snEOut" dir="ltr"></dd>
            <dt>${escapeHtml(tx('eng_label'))}</dt><dd id="snEngOut" dir="ltr"></dd>
            <dt>${escapeHtml(tx('dec_label'))}</dt><dd id="snDecOut" dir="ltr"></dd>
            <dt>${escapeHtml(tx('sig_label'))}</dt><dd id="snSigOut"></dd>
            <dt>${escapeHtml(tx('work_label'))}</dt><dd id="snWorkOut"></dd>
          </dl>
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
				label: tx('ref_sci_label'),
				href: 'https://en.wikipedia.org/wiki/Scientific_notation',
			},
			{
				label: tx('ref_si_label'),
				href: 'https://www.nist.gov/pml/owm/metric-si-prefixes',
			},
		],
	});

	/** 前端脚本需要的文案（一次性注入，避免逐个 JSON.stringify）。 */
	const clientText = {
		errEmpty: tx('err_empty'),
		errNan: tx('err_nan'),
		errRange: tx('err_range'),
		note: tx('result_note'),
		zeroNote: tx('zero_note'),
		workLeft: tx('work_left'),
		workRight: tx('work_right'),
		workZero: tx('work_zero'),
		expRight: tx('work_exp_right'),
		expLeft: tx('work_exp_left'),
		expZero: tx('work_exp_zero'),
		normNote: tx('work_norm'),
		sigPlain: tx('sig_plain'),
		sigAmbiguous: tx('sig_ambiguous'),
		sigSet: tx('sig_set'),
		decTooLong: tx('dec_too_long'),
	};

	const extraBodyHtml = `
  <script>
    (function () {
      /** 表单与输入控件。 */
      var form = document.getElementById('calcForm');
      var valueEl = document.getElementById('snValue');
      var sigEl = document.getElementById('snSigfigs');
      /** 结果区与各输出位。 */
      var result = document.getElementById('calcResult');
      var detailsEl = document.getElementById('snDetails');
      var sciOutEl = document.getElementById('snSciOut');
      var eOutEl = document.getElementById('snEOut');
      var engOutEl = document.getElementById('snEngOut');
      var decOutEl = document.getElementById('snDecOut');
      var sigOutEl = document.getElementById('snSigOut');
      var workOutEl = document.getElementById('snWorkOut');
      var noteEl = document.getElementById('calcNote');
      /** 当前页面语言（决定小数点写法与逗号解析）。 */
      var LANG = ${JSON.stringify(opts.lang)};
      /** 本地化文案字典。 */
      var T = ${JSON.stringify(clientText)};
      /** 样例轮换：首个与 Example 文案一致（小数点在 DEC 确定后替换为本地写法）。 */
      var SAMPLES = ['0.00004508', '6.02214076e23', '45.6 × 10^3', '12300'];
      /** 下一次点击「加载样例」使用的样例下标。 */
      var sampleIndex = 0;
      /** 指数绝对值上限（防止超长字符串）。 */
      var MAX_EXP = 100000;
      /** 小数形式最多展开到的指数绝对值；超过则只给科学形式。 */
      var MAX_DEC_EXP = 300;
      /** 上标字符与对应普通字符（教材里复制来的 10⁻⁵）。 */
      var SUP = '⁰¹²³⁴⁵⁶⁷⁸⁹⁻⁺';
      var SUP_PLAIN = '0123456789-+';
      /** 视为分组/空白而直接去掉的字符编码：空格、Tab、换行、NBSP、细空格、窄 NBSP、撇号、下划线。 */
      var SKIP_CODES = [32, 9, 10, 13, 160, 8201, 8202, 8239, 39, 8217, 95];
      /** 工程记数的 SI 前缀（键 = 10 的指数）。 */
      var SI = { '-30': 'q', '-27': 'r', '-24': 'y', '-21': 'z', '-18': 'a', '-15': 'f', '-12': 'p', '-9': 'n', '-6': 'µ', '-3': 'm', '3': 'k', '6': 'M', '9': 'G', '12': 'T', '15': 'P', '18': 'E', '21': 'Z', '24': 'Y', '27': 'R', '30': 'Q' };

      /** 页面语言的小数点字符（Intl 不可用时为点）。 */
      var DEC = '.';
      try {
        var parts = new Intl.NumberFormat(LANG + '-u-nu-latn').formatToParts(1.5);
        for (var pi = 0; pi < parts.length; pi++) {
          if (parts[pi].type === 'decimal') DEC = parts[pi].value;
        }
      } catch (e) {
        DEC = '.';
      }
      /** 小数样例改用本地小数点；E 记数样例（下标 1）保持点，与计算器写法一致。 */
      SAMPLES[0] = SAMPLES[0].replace('.', DEC);
      SAMPLES[2] = SAMPLES[2].replace('.', DEC);

      /**
       * 用 split/join 替换 {name} 占位符（避免正则在模板字符串里被转义）。
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
       * 生成 n 个 0 组成的字符串。
       * @param {number} n 个数（≥0）
       * @returns {string} 0 串
       */
      function zeros(n) {
        return n > 0 ? new Array(n + 1).join('0') : '';
      }

      /**
       * 指数显示用的负号改为数学负号 −。
       * @param {number} n 指数
       * @returns {string} 显示文本
       */
      function expText(n) {
        return n < 0 ? '−' + String(-n) : String(n);
      }

      /**
       * 整数指数转上标文本（工程记数一行用纯文本，便于复制）。
       * @param {number} n 指数
       * @returns {string} 上标串，如 ⁻⁶
       */
      function toSup(n) {
        var s = String(n);
        var out = '';
        for (var i = 0; i < s.length; i++) {
          var idx = SUP_PLAIN.indexOf(s.charAt(i));
          out += idx >= 0 ? SUP.charAt(idx) : s.charAt(i);
        }
        return out;
      }

      /**
       * 规整输入：去空白/分组符，统一乘号与负号，上标转 ^ 指数，** 转 ^。
       * @param {string} raw 原始输入
       * @returns {string} 规整后的串（^ 已替换成字母 p 便于正则）
       */
      function normalizeInput(raw) {
        var s = String(raw || '');
        var out = '';
        var inSup = false;
        for (var i = 0; i < s.length; i++) {
          var ch = s.charAt(i);
          var supIdx = SUP.indexOf(ch);
          if (supIdx >= 0) {
            if (!inSup) out += '^';
            out += SUP_PLAIN.charAt(supIdx);
            inSup = true;
            continue;
          }
          inSup = false;
          if (SKIP_CODES.indexOf(ch.charCodeAt(0)) >= 0) continue;
          if (ch === '×' || ch === '·' || ch === '⋅' || ch === '∙' || ch === 'x' || ch === 'X') ch = '*';
          if (ch === '−' || ch === '–') ch = '-';
          out += ch;
        }
        out = out.split('**').join('^');
        return out.split('^').join('p');
      }

      /**
       * 决定点与逗号哪个是小数点：两者都有时取最后出现者；只有一个逗号时按页面语言判断；
       * 多个同号视为千分位。
       * @param {string} s 规整后的串
       * @returns {string} 只保留「.」作小数点的串
       */
      function resolveSeparators(s) {
        var dots = s.split('.').length - 1;
        var commas = s.split(',').length - 1;
        if (dots && commas) {
          var decChar = s.lastIndexOf('.') > s.lastIndexOf(',') ? '.' : ',';
          var groupChar = decChar === '.' ? ',' : '.';
          s = s.split(groupChar).join('');
          return decChar === ',' ? s.replace(',', '.') : s;
        }
        if (commas) {
          if (commas === 1 && DEC === ',') return s.replace(',', '.');
          return s.split(',').join('');
        }
        if (dots > 1 && DEC === ',') return s.split('.').join('');
        return s;
      }

      /**
       * 解析为「符号 + 整数部分 + 小数部分 + 指数」，不做任何浮点运算。
       * @param {string} raw 原始输入
       * @returns {{ ok: boolean, error?: string, neg?: boolean, intPart?: string, fracPart?: string, hasPoint?: boolean, exp?: number, isSci?: boolean }}
       */
      function parseValue(raw) {
        var trimmed = String(raw || '').trim();
        if (!trimmed) return { ok: false, error: T.errEmpty };
        var s = resolveSeparators(normalizeInput(trimmed));
        var m = s.match(/^([+-]?)([0-9]+[.]?[0-9]*|[.][0-9]+)(?:e([+-]?[0-9]+)|[*]10p([+-]?[0-9]+))?$/i);
        var neg;
        var mant;
        var expStr;
        if (m) {
          neg = m[1] === '-';
          mant = m[2];
          expStr = m[3] != null ? m[3] : m[4];
        } else {
          var m2 = s.match(/^([+-]?)10p([+-]?[0-9]+)$/i);
          if (!m2) return { ok: false, error: fill(T.errNan, { token: trimmed }) };
          neg = m2[1] === '-';
          mant = '1';
          expStr = m2[2];
        }
        var exp = expStr != null ? parseInt(expStr, 10) : 0;
        if (!Number.isFinite(exp) || Math.abs(exp) > MAX_EXP) return { ok: false, error: T.errRange };
        var dot = mant.indexOf('.');
        return {
          ok: true,
          neg: neg,
          intPart: dot >= 0 ? mant.slice(0, dot) : mant,
          fracPart: dot >= 0 ? mant.slice(dot + 1) : '',
          hasPoint: dot >= 0,
          exp: exp,
          isSci: expStr != null,
        };
      }

      /**
       * 把数字串四舍五入到 n 位（只看第 n+1 位，逢 5 进位）；不足 n 位补 0。
       * @param {string} digits 有效数字串（首位非 0）
       * @param {number} n 目标位数
       * @returns {{ digits: string, carry: boolean }} 新数字串；carry 表示 9…9 进位多出一位（指数需 +1）
       */
      function roundDigits(digits, n) {
        if (digits.length <= n) return { digits: digits + zeros(n - digits.length), carry: false };
        var keep = digits.slice(0, n).split('');
        if (digits.charAt(n) >= '5') {
          var i = keep.length - 1;
          while (i >= 0) {
            if (keep[i] === '9') {
              keep[i] = '0';
              i -= 1;
            } else {
              keep[i] = String(Number(keep[i]) + 1);
              break;
            }
          }
          if (i < 0) {
            keep.unshift('1');
            keep.pop();
            return { digits: keep.join(''), carry: true };
          }
        }
        return { digits: keep.join(''), carry: false };
      }

      /**
       * 把数字串在第 k 位后插入本地小数点。
       * @param {string} digits 数字串
       * @param {number} k 小数点前的位数（≥1）
       * @param {string} sep 小数点字符
       * @returns {string} 带小数点的文本（无小数部分时不加点）
       */
      function withPoint(digits, k, sep) {
        if (digits.length < k) digits += zeros(k - digits.length);
        return digits.length > k ? digits.slice(0, k) + sep + digits.slice(k) : digits;
      }

      /**
       * 由系数数字串与指数生成小数形式。
       * @param {string} c 系数数字串（a = c[0].c[1..]）
       * @param {number} b 指数
       * @returns {string} 小数文本（本地小数点）
       */
      function decimalForm(c, b) {
        var pos = 1 + b;
        if (pos <= 0) return '0' + DEC + zeros(-pos) + c;
        if (pos >= c.length) return c + zeros(pos - c.length);
        return c.slice(0, pos) + DEC + c.slice(pos);
      }

      /**
       * 把科学形式写进主结果位：系数 × 10 + 上标指数（用 DOM 节点，不拼 innerHTML）。
       * @param {string} coef 带符号系数文本
       * @param {number} b 指数
       */
      function renderSci(coef, b) {
        sciOutEl.textContent = coef + ' × 10';
        var sup = document.createElement('sup');
        sup.textContent = expText(b);
        sciOutEl.appendChild(sup);
      }

      /**
       * 核心换算：返回所有写法与说明文本。
       * @returns {{ ok: boolean, error?: string, values?: Object }}
       */
      function compute() {
        var p = parseValue(valueEl.value);
        if (!p.ok) return p;
        var all = p.intPart + p.fracPart;
        var lead = 0;
        while (lead < all.length && all.charAt(lead) === '0') lead += 1;
        var sig = all.slice(lead);
        if (!sig) return { ok: true, zero: true };

        /** 指数：value = sig × 10^(exp − 小数位数)，再把 sig 写成 d.ddd。 */
        var b = sig.length - 1 + p.exp - p.fracPart.length;
        /** 整数（无小数点）末尾的 0 有歧义：不计入有效数字。 */
        var ambiguous = false;
        var c = sig;
        if (!p.hasPoint) {
          var trimmed = sig.replace(/0+$/, '');
          ambiguous = trimmed.length < sig.length;
          c = trimmed;
        }
        var sigMode = sigEl.value;
        var sigLine;
        if (sigMode !== 'all') {
          var r = roundDigits(c, parseInt(sigMode, 10));
          c = r.digits;
          if (r.carry) b += 1;
          sigLine = fill(T.sigSet, { n: c.length });
        } else if (ambiguous) {
          sigLine = fill(T.sigAmbiguous, { n: c.length, max: sig.length });
        } else {
          sigLine = fill(T.sigPlain, { n: c.length });
        }

        var sign = p.neg ? '-' : '';
        var signShow = p.neg ? '−' : '';
        var coef = signShow + withPoint(c, 1, DEC);
        var eForm = sign + withPoint(c, 1, '.') + 'e' + b;

        /** 工程记数：指数取 3 的倍数，系数 1…999。 */
        var b3 = Math.floor(b / 3) * 3;
        var engCoef = signShow + withPoint(c, 1 + (b - b3), DEC);
        var engForm = engCoef + ' × 10' + toSup(b3);
        if (SI[String(b3)]) engForm += ' (' + SI[String(b3)] + ')';

        var decForm = Math.abs(b) > MAX_DEC_EXP
          ? fill(T.decTooLong, { n: Math.abs(b) + 1 })
          : signShow + decimalForm(c, b);

        /** 移位过程：小数输入讲「化成科学形式」，科学输入讲「展开成小数」。 */
        var n = Math.abs(b);
        var work;
        if (!p.isSci) {
          work = b > 0 ? fill(T.workLeft, { n: n, b: expText(b) })
            : b < 0 ? fill(T.workRight, { n: n, b: expText(b) })
            : T.workZero;
        } else {
          var lead1 = p.intPart.replace(/^0+/, '');
          var normalized = lead1.length === 1;
          work = b > 0 ? fill(T.expRight, { n: n, b: expText(b) })
            : b < 0 ? fill(T.expLeft, { n: n, b: expText(b) })
            : T.expZero;
          if (!normalized) {
            var typed = signShow + (p.intPart || '0') + (p.hasPoint ? DEC + p.fracPart : '');
            work = fill(T.normNote, { a: typed, e: expText(p.exp), sci: coef + ' × 10^' + expText(b) }) + ' ' + work;
          }
        }
        return {
          ok: true,
          values: { coef: coef, b: b, e: eForm, eng: engForm, dec: decForm, sig: sigLine, work: work },
        };
      }

      /** 执行换算并刷新结果区；失败时隐藏明细并显示具体错误。 */
      function runCalc() {
        var out = compute();
        result.style.display = 'block';
        if (!out || !out.ok) {
          sciOutEl.textContent = '—';
          detailsEl.style.display = 'none';
          noteEl.textContent = (out && out.error) || T.errEmpty;
          return false;
        }
        if (out.zero) {
          renderSci('0', 0);
          detailsEl.style.display = 'none';
          noteEl.textContent = T.zeroNote;
          return true;
        }
        var v = out.values;
        renderSci(v.coef, v.b);
        eOutEl.textContent = v.e;
        engOutEl.textContent = v.eng;
        decOutEl.textContent = v.dec;
        sigOutEl.textContent = v.sig;
        workOutEl.textContent = v.work;
        detailsEl.style.display = '';
        noteEl.textContent = T.note;
        return true;
      }

      /** 加载样例：依次轮换四个样例（首个与 Example 一致），有效数字重置为保留输入位数。 */
      function loadSample() {
        valueEl.value = SAMPLES[sampleIndex];
        sampleIndex = (sampleIndex + 1) % SAMPLES.length;
        sigEl.value = 'all';
        runCalc();
      }

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        runCalc();
      });
      /** 改有效数字时，若已有输入则立即重算。 */
      sigEl.addEventListener('change', function () {
        if (String(valueEl.value || '').trim()) runCalc();
      });
      document.getElementById('snBtnSample').addEventListener('click', loadSample);
      /** 清空：只清输入并隐藏结果，不重新加载样例。 */
      document.getElementById('snBtnClear').addEventListener('click', function () {
        valueEl.value = '';
        sigEl.value = 'all';
        result.style.display = 'none';
        valueEl.focus();
      });
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('how-to-calculate-scientific-notation');
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
