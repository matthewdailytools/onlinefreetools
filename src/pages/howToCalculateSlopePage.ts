/**
 * 斜率计算器工具页。
 * slug: how-to-calculate-slope（见 work-tasks/how-to-calculate-slope/02-tool-info.md）。
 *
 * 交互要点（2026-10-15 改写）：
 * - 两种已知条件：两个点 / 一个点 + 斜率；坐标与斜率可写整数、小数或分数（3/4），用 BigInt 精确约分；
 * - 输出斜率（最简分数 ≈ 小数）、代入算式、截距 b 的算式、斜截式 / 点斜式 / 一般式方程、两轴截距；
 * - 倾斜角 θ = arctan(m)、坡度百分比 m × 100%、升高 : 水平距离（含 ≈ 1 : n，坡道 / 屋面常用）、垂线斜率 −1/m；
 * - 两点模式另给两点距离（整数差时化简根式，如 √20 = 2√5）与中点；点斜模式另给直线上的第二个点；
 * - 竖直线（Δx = 0）给出 x = c 与「斜率不存在」，水平线给出 m = 0；两点重合时明确报错。
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
const PREFIX = 'tool_slope';

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
 * 渲染 how-to-calculate-slope 工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 * @returns 完整页面 HTML
 */
export const renderHowToCalculateSlopePage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 读取本工具键（自动拼前缀）。 */
	const tx = (key: string) => t(opts.lang, `${PREFIX}_${key}` as keyof typeof import('../site/i18n/en').default);

	const toolPath = '/tools/how-to-calculate-slope';
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
			currentSlug: 'how-to-calculate-slope',
			currentAnchor: '#slope',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	/** 结果区一行：标签 + 输出位。 */
	const row = (id: string, labelKey: string) =>
		`<div id="${id}Row" class="sl-line"><strong>${escapeHtml(tx(labelKey))}:</strong> <span id="${id}"></span></div>`;

	const extraHeadHtml = `
  <style>
    .tool-card { max-width: var(--content-max); width: 100%; margin: 0 0 1.5rem; }
    .form-label { display:block; margin-bottom:.5rem; color:#495057; font-weight:500 }
    .form-hint { display:block; color:#6c757d; font-size:.85rem; margin:-.25rem 0 .75rem; }
    .form-group { margin-bottom:1rem; }
    .form-row { display:grid; grid-template-columns:1fr 1fr; gap:1rem; }
    .form-row4 { display:grid; grid-template-columns:repeat(4, 1fr); gap:1rem; }
    @media (max-width:768px) { .form-row, .form-row4 { grid-template-columns:1fr 1fr; } }
    .btn-row { display:flex; flex-wrap:wrap; gap:.5rem; align-items:center; }
    .result { background:#f8f9fa; padding:1rem; border-radius:8px; margin-top:1rem; }
    .sl-main { font-size:1.6rem; font-weight:600; text-align:center; margin:.25rem 0 0; font-variant-numeric:tabular-nums; }
    .sl-sub { text-align:center; color:#495057; font-size:.95rem; margin-top:.25rem; }
    .sl-line { color:#495057; font-size:.92rem; margin-top:.5rem; font-variant-numeric:tabular-nums; }
    .sl-work div { margin-top:.2rem; }
    .result .muted { color:#6c757d; font-size:.9rem; margin-top:.75rem; }
  </style>`;

	const contentHtml = `
    <div id="slope" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(tx('title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <form id="calcForm" novalidate>
          <div class="form-group">
            <label class="form-label" for="slMode">${escapeHtml(tx('mode_label'))}</label>
            <select id="slMode" class="input-lg">
              <option value="two" selected>${escapeHtml(tx('mode_two'))}</option>
              <option value="ps">${escapeHtml(tx('mode_ps'))}</option>
            </select>
          </div>
          <div class="form-row4">
            <div class="form-group">
              <label class="form-label" for="slX1">${escapeHtml(tx('x1_label'))}</label>
              <input id="slX1" class="input-lg" type="text" inputmode="decimal" autocomplete="off" placeholder="${escapeHtml(tx('x1_ph'))}">
            </div>
            <div class="form-group">
              <label class="form-label" for="slY1">${escapeHtml(tx('y1_label'))}</label>
              <input id="slY1" class="input-lg" type="text" inputmode="decimal" autocomplete="off" placeholder="${escapeHtml(tx('y1_ph'))}">
            </div>
            <div class="form-group sl-two">
              <label class="form-label" for="slX2">${escapeHtml(tx('x2_label'))}</label>
              <input id="slX2" class="input-lg" type="text" inputmode="decimal" autocomplete="off" placeholder="${escapeHtml(tx('x2_ph'))}">
            </div>
            <div class="form-group sl-two">
              <label class="form-label" for="slY2">${escapeHtml(tx('y2_label'))}</label>
              <input id="slY2" class="input-lg" type="text" inputmode="decimal" autocomplete="off" placeholder="${escapeHtml(tx('y2_ph'))}">
            </div>
            <div class="form-group sl-ps" style="display:none">
              <label class="form-label" for="slM">${escapeHtml(tx('m_label'))}</label>
              <input id="slM" class="input-lg" type="text" inputmode="decimal" autocomplete="off" placeholder="${escapeHtml(tx('m_ph'))}">
            </div>
          </div>
          <span class="form-hint">${escapeHtml(tx('coords_hint'))}</span>
          <div class="btn-row">
            <button type="submit" id="slBtnCalc" class="btn btn-primary">${escapeHtml(tx('calculate'))}</button>
            <button type="button" id="slBtnSample" class="btn btn-outline-secondary">${escapeHtml(tx('sample'))}</button>
            <button type="button" id="slBtnClear" class="btn btn-outline-secondary">${escapeHtml(tx('clear'))}</button>
          </div>
        </form>
        <div id="calcResult" class="result" style="display:none" aria-live="polite">
          <div class="sl-sub">${escapeHtml(tx('slopeOut_label'))}</div>
          <div id="slMain" class="sl-main"></div>
          <div id="slMainSub" class="sl-sub"></div>
          <div id="slDetails">
            <div class="sl-line"><strong>${escapeHtml(tx('work_label'))}:</strong><div id="slWork" class="sl-work"></div></div>
            ${row('slSi', 'eq_si_label')}
            ${row('slPs', 'eq_ps_label')}
            ${row('slStd', 'eq_std_label')}
            ${row('slInt', 'int_label')}
            ${row('slAngle', 'angle_label')}
            ${row('slGrade', 'grade_label')}
            ${row('slRatio', 'ratio_label')}
            ${row('slPerp', 'perp_label')}
            ${row('slDist', 'dist_label')}
            ${row('slMid', 'mid_label')}
            ${row('slP2', 'point2_label')}
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
				label: tx('ref_slope_label'),
				href: 'https://en.wikipedia.org/wiki/Slope',
			},
			{
				label: tx('ref_line_label'),
				href: 'https://en.wikipedia.org/wiki/Linear_equation',
			},
		],
	});

	/** 前端脚本需要的文案（一次性注入）。 */
	const clientText = {
		up: tx('dir_up'),
		down: tx('dir_down'),
		flat: tx('dir_flat'),
		vert: tx('dir_vert'),
		undef: tx('undefined'),
		noSi: tx('no_si'),
		intTpl: tx('int_tpl'),
		intFlat: tx('int_flat_tpl'),
		intVert: tx('int_vert_tpl'),
		intXAxis: tx('int_xaxis'),
		intYAxis: tx('int_yaxis'),
		perpVert: tx('perp_vert'),
		errEmptyTwo: tx('err_empty_two'),
		errEmptyPs: tx('err_empty_ps'),
		errNum: tx('err_num'),
		errSame: tx('err_same'),
		note: tx('result_note'),
	};

	const extraBodyHtml = `
  <script>
    (function () {
      /** 表单与输入控件。 */
      var form = document.getElementById('calcForm');
      var modeEl = document.getElementById('slMode');
      var x1El = document.getElementById('slX1');
      var y1El = document.getElementById('slY1');
      var x2El = document.getElementById('slX2');
      var y2El = document.getElementById('slY2');
      var mEl = document.getElementById('slM');
      /** 结果区各输出位。 */
      var result = document.getElementById('calcResult');
      var detailsEl = document.getElementById('slDetails');
      var mainEl = document.getElementById('slMain');
      var mainSubEl = document.getElementById('slMainSub');
      var workEl = document.getElementById('slWork');
      var noteEl = document.getElementById('calcNote');
      /** 当前页面语言（决定小数点与数字格式）。 */
      var LANG = ${JSON.stringify(opts.lang)};
      /** 本地化文案字典。 */
      var T = ${JSON.stringify(clientText)};
      /** BigInt 常量。 */
      var ZERO = BigInt(0);
      var ONE = BigInt(1);
      var TWO = BigInt(2);
      /** 样例轮换：[模式, x₁, y₁, x₂, y₂, m]；首个与 Example 一致。 */
      var SAMPLES = [
        ['two', '1', '2', '3', '6', ''],
        ['two', '-2', '3', '4', '-1', ''],
        ['ps', '0', '0', '', '', '1/12']
      ];
      /** 下一次点击「加载样例」使用的样例下标。 */
      var sampleIndex = 0;

      /** 小数 / 百分比格式器（拉丁数字）。 */
      var decFormat = null;
      var pctFormat = null;
      try {
        decFormat = new Intl.NumberFormat(LANG + '-u-nu-latn', { maximumFractionDigits: 4, useGrouping: false });
        pctFormat = new Intl.NumberFormat(LANG + '-u-nu-latn', { style: 'percent', maximumFractionDigits: 2 });
      } catch (e) {
        decFormat = null;
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
      /** 坐标分隔符：小数逗号语种用分号，避免 (2,5, 4) 这类歧义。 */
      var SEP = DEC === ',' ? '; ' : ', ';

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
       * BigInt 最大公约数（非负）。
       * @param {bigint} a 整数
       * @param {bigint} b 整数
       * @returns {bigint} 最大公约数
       */
      function gcd(a, b) {
        if (a < ZERO) a = -a;
        if (b < ZERO) b = -b;
        while (b !== ZERO) {
          var r = a % b;
          a = b;
          b = r;
        }
        return a;
      }

      /**
       * 构造最简分数（分母为正）。
       * @param {bigint} n 分子
       * @param {bigint} d 分母（非 0）
       * @returns {{n: bigint, d: bigint}} 分数
       */
      function frac(n, d) {
        if (d < ZERO) {
          n = -n;
          d = -d;
        }
        var g = gcd(n, d);
        if (g > ONE) {
          n = n / g;
          d = d / g;
        }
        return { n: n, d: d };
      }

      /** 分数四则运算。 */
      function add(a, b) { return frac(a.n * b.d + b.n * a.d, a.d * b.d); }
      function sub(a, b) { return frac(a.n * b.d - b.n * a.d, a.d * b.d); }
      function mul(a, b) { return frac(a.n * b.n, a.d * b.d); }
      function div(a, b) { return frac(a.n * b.d, a.d * b.n); }

      /**
       * 分数转浮点数（用于角度、距离等近似值）。
       * @param {{n: bigint, d: bigint}} f 分数
       * @returns {number} 近似值
       */
      function toNum(f) {
        return Number(f.n) / Number(f.d);
      }

      /**
       * 把 BigInt 写成带真减号的文本。
       * @param {bigint} n 整数
       * @returns {string} 文本
       */
      function intText(n) {
        return n < ZERO ? '−' + String(-n) : String(n);
      }

      /**
       * 分数的精确写法：整数或 p/q（负号在前）。
       * @param {{n: bigint, d: bigint}} f 分数
       * @returns {string} 文本
       */
      function exact(f) {
        if (f.d === ONE) return intText(f.n);
        return intText(f.n) + '/' + String(f.d);
      }

      /**
       * 小数近似（最多 4 位，本地小数点，真减号）。
       * @param {number} x 数值
       * @returns {string} 文本
       */
      function dec(x) {
        if (Math.abs(x) < 5e-5) x = 0;
        var s = decFormat ? decFormat.format(x) : String(Math.round(x * 10000) / 10000);
        return s.replace('-', '−');
      }

      /**
       * 分数显示：整数直接写；非整数写 p/q ≈ 小数；小数本身有限时保留分数。
       * @param {{n: bigint, d: bigint}} f 分数
       * @returns {string} 文本
       */
      function show(f) {
        if (f.d === ONE) return intText(f.n);
        return exact(f) + ' ≈ ' + dec(toNum(f));
      }

      /**
       * 负数加括号（用于减数代入）。
       * @param {string} s 文本
       * @returns {string} 文本
       */
      function paren(s) {
        return s.charAt(0) === '−' ? '(' + s + ')' : s;
      }

      /**
       * 乘除运算数：负数或分数加括号，避免 −2 ÷ 3/2 这类歧义。
       * @param {{n: bigint, d: bigint}} f 分数
       * @returns {string} 文本
       */
      function operand(f) {
        var s = exact(f);
        return f.n < ZERO || f.d !== ONE ? '(' + s + ')' : s;
      }

      /**
       * 解析一个数：整数、小数（按页面小数点）或分数 a/b，可带负号。
       * @param {string} raw 原始输入
       * @returns {{n: bigint, d: bigint}|null|undefined} 分数；留空 undefined；无效 null
       */
      function parse(raw) {
        var s = String(raw || '').split(' ').join('').split('−').join('-');
        if (s === '') return undefined;
        if (DEC === ',') s = s.split(',').join('.');
        var fm = /^(-?[0-9]+)[/](-?[0-9]+)$/.exec(s);
        if (fm) {
          var den = BigInt(fm[2]);
          if (den === ZERO) return null;
          return frac(BigInt(fm[1]), den);
        }
        var dm = /^(-?)([0-9]*)(?:[.]([0-9]*))?$/.exec(s);
        if (!dm || (dm[2] === '' && !dm[3])) return null;
        var whole = dm[2] || '0';
        var fr = dm[3] || '';
        var n = BigInt(whole + fr);
        var d = BigInt('1' + new Array(fr.length + 1).join('0'));
        if (dm[1] === '-') n = -n;
        return frac(n, d);
      }

      /**
       * 斜截式里 m 的系数写法：1 → 空，−1 → −，整数原样，分数加括号。
       * @param {{n: bigint, d: bigint}} m 斜率
       * @returns {string} 系数文本
       */
      function coef(m) {
        if (m.d === ONE) {
          if (m.n === ONE) return '';
          if (m.n === -ONE) return '−';
          return intText(m.n);
        }
        return m.n < ZERO ? '−(' + exact({ n: -m.n, d: m.d }) + ')' : '(' + exact(m) + ')';
      }

      /**
       * 「± 常数」尾项（0 时为空）。
       * @param {{n: bigint, d: bigint}} c 常数
       * @returns {string} 文本
       */
      function tail(c) {
        if (c.n === ZERO) return '';
        return c.n > ZERO ? ' + ' + exact(c) : ' − ' + exact({ n: -c.n, d: c.d });
      }

      /**
       * 「v − c」写法（c 为 0 时只写 v，c 为负时写 v + |c|）。
       * @param {string} v 变量名
       * @param {{n: bigint, d: bigint}} c 常数
       * @returns {string} 文本
       */
      function shift(v, c) {
        if (c.n === ZERO) return v;
        return c.n > ZERO ? v + ' − ' + exact(c) : v + ' + ' + exact({ n: -c.n, d: c.d });
      }

      /**
       * 一般式 Ax + By = C（整数系数、A ≥ 0、约去公因数）。
       * @param {{n: bigint, d: bigint}} m 斜率
       * @param {{n: bigint, d: bigint}} b 截距
       * @returns {string} 方程文本
       */
      function standard(m, b) {
        var L = (m.d * b.d) / gcd(m.d, b.d);
        var A = -m.n * (L / m.d);
        var B = L;
        var C = b.n * (L / b.d);
        if (A < ZERO || (A === ZERO && B < ZERO)) {
          A = -A;
          B = -B;
          C = -C;
        }
        var g = gcd(gcd(A, B), C);
        if (g > ONE) {
          A = A / g;
          B = B / g;
          C = C / g;
        }
        var left = '';
        if (A !== ZERO) left = (A === ONE ? '' : intText(A)) + 'x';
        if (B !== ZERO) {
          var absB = B < ZERO ? -B : B;
          var termB = (absB === ONE ? '' : String(absB)) + 'y';
          left = left ? left + (B < ZERO ? ' − ' : ' + ') + termB : (B < ZERO ? '−' : '') + termB;
        }
        return left + ' = ' + intText(C);
      }

      /**
       * 化简 √N（N 为非负整数且不超过 1e12）：返回「√N = k√r」或整数。
       * @param {bigint} N 被开方数
       * @returns {string} 精确写法
       */
      function radical(N) {
        var num = Number(N);
        var root = Math.round(Math.sqrt(num));
        if (root * root === num) return '√' + String(N) + ' = ' + String(root);
        var k = Math.floor(Math.sqrt(num));
        for (; k > 1; k--) {
          if (num % (k * k) === 0) return '√' + String(N) + ' = ' + k + '√' + num / (k * k);
        }
        return '√' + String(N);
      }

      /**
       * 坐标点文本。
       * @param {string} x 横坐标文本
       * @param {string} y 纵坐标文本
       * @returns {string} (x, y)
       */
      function pt(x, y) {
        return '(' + x + SEP + y + ')';
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
       * 读取输入并计算。
       * @returns {{ ok: boolean, error?: string, values?: Object }}
       */
      function compute() {
        var mode = modeEl.value === 'ps' ? 'ps' : 'two';
        var fields = mode === 'two' ? [x1El, y1El, x2El, y2El] : [x1El, y1El, mEl];
        var vals = [];
        for (var i = 0; i < fields.length; i++) {
          var v = parse(fields[i].value);
          if (v === undefined) return { ok: false, error: mode === 'two' ? T.errEmptyTwo : T.errEmptyPs };
          if (v === null) return { ok: false, error: fill(T.errNum, { v: String(fields[i].value).trim() }) };
          vals.push(v);
        }
        var x1 = vals[0];
        var y1 = vals[1];
        if (mode === 'ps') return { ok: true, values: { mode: mode, x1: x1, y1: y1, m: vals[2], vertical: false } };
        var x2 = vals[2];
        var y2 = vals[3];
        var dx = sub(x2, x1);
        var dy = sub(y2, y1);
        if (dx.n === ZERO && dy.n === ZERO) return { ok: false, error: T.errSame };
        return { ok: true, values: { mode: mode, x1: x1, y1: y1, x2: x2, y2: y2, dx: dx, dy: dy, vertical: dx.n === ZERO, m: dx.n === ZERO ? null : div(dy, dx) } };
      }

      /** 执行计算并刷新结果区；失败时隐藏明细并显示具体错误。 */
      function runCalc() {
        var out = compute();
        result.style.display = 'block';
        if (!out || !out.ok) {
          mainEl.textContent = '—';
          mainSubEl.textContent = '';
          detailsEl.style.display = 'none';
          noteEl.textContent = (out && out.error) || T.errEmptyTwo;
          return false;
        }
        var v = out.values;
        var lines = [];
        if (v.mode === 'two') {
          lines.push('m = (y₂ − y₁) ÷ (x₂ − x₁) = (' + exact(v.y2) + ' − ' + paren(exact(v.y1)) + ') ÷ (' + exact(v.x2) + ' − ' + paren(exact(v.x1)) + ') = ' + exact(v.dy) + ' ÷ ' + operand(v.dx) + (v.vertical ? '' : ' = ' + exact(v.m)));
        }
        if (v.vertical) {
          /** 竖直线：x = c。 */
          mainEl.textContent = T.undef;
          mainSubEl.textContent = T.vert;
          var c = v.x1;
          setRow('slSi', T.noSi);
          setRow('slPs', null);
          setRow('slStd', c.d === ONE ? 'x = ' + intText(c.n) : String(c.d) + 'x = ' + intText(c.n));
          setRow('slInt', c.n === ZERO ? T.intYAxis : fill(T.intVert, { a: exact(c) }));
          setRow('slAngle', 'θ = 90°');
          setRow('slGrade', null);
          setRow('slRatio', null);
          setRow('slPerp', '0');
        } else {
          var m = v.m;
          var b = sub(v.y1, mul(m, v.x1));
          lines.push('b = y₁ − m · x₁ = ' + exact(v.y1) + ' − ' + operand(m) + ' × ' + operand(v.x1) + ' = ' + exact(b));
          mainEl.textContent = show(m);
          mainSubEl.textContent = m.n > ZERO ? T.up : m.n < ZERO ? T.down : T.flat;
          setRow('slSi', 'y = ' + (m.n === ZERO ? exact(b) : coef(m) + 'x' + tail(b)));
          setRow('slPs', shift('y', v.y1) + ' = ' + (m.n === ZERO ? '0' : coef(m) + (v.x1.n === ZERO ? 'x' : '(' + shift('x', v.x1) + ')')));
          setRow('slStd', standard(m, b));
          if (m.n === ZERO) {
            setRow('slInt', b.n === ZERO ? T.intXAxis : fill(T.intFlat, { b: exact(b) }));
          } else {
            var xi = div({ n: -b.n, d: b.d }, m);
            setRow('slInt', fill(T.intTpl, { b: exact(b), a: exact(xi) }));
          }
          var mNum = toNum(m);
          setRow('slAngle', 'θ = arctan(' + exact(m) + ') = ' + dec(Math.round((Math.atan(mNum) * 180 / Math.PI) * 100) / 100) + '°');
          setRow('slGrade', pctFormat ? pctFormat.format(mNum).replace('-', '−') : dec(mNum * 100) + '%');
          if (m.n === ZERO) {
            setRow('slRatio', '0 : 1');
          } else {
            var absN = m.n < ZERO ? -m.n : m.n;
            var ratio = intText(m.n) + ' : ' + String(m.d);
            if (absN !== ONE && absN < m.d) ratio += ' ≈ ' + (m.n < ZERO ? '−' : '') + '1 : ' + dec(Number(m.d) / Number(absN));
            setRow('slRatio', ratio);
          }
          setRow('slPerp', m.n === ZERO ? T.perpVert : show(div({ n: -ONE, d: ONE }, m)));
        }
        if (v.mode === 'two') {
          /** 两点距离与中点。 */
          var sq = add(mul(v.dx, v.dx), mul(v.dy, v.dy));
          var dist = Math.sqrt(toNum(sq));
          var distText = '√((' + exact(v.dx) + ')² + (' + exact(v.dy) + ')²) = ';
          if (sq.d === ONE && sq.n <= BigInt(1000000000000)) {
            var rad = radical(sq.n);
            distText += rad + (/= [0-9]+$/.test(rad) ? '' : ' ≈ ' + dec(dist));
          } else {
            /** 分数平方和：分子分母都是完全平方数时写出精确值（√(25/4) = 5/2）。 */
            var rn = Math.round(Math.sqrt(Number(sq.n)));
            var rd = Math.round(Math.sqrt(Number(sq.d)));
            var perfect = BigInt(rn) * BigInt(rn) === sq.n && BigInt(rd) * BigInt(rd) === sq.d;
            distText += '√(' + exact(sq) + ')' + (perfect ? ' = ' + rn + '/' + rd : ' ≈ ' + dec(dist));
          }
          setRow('slDist', distText);
          setRow('slMid', pt(exact(div(add(v.x1, v.x2), { n: TWO, d: ONE })), exact(div(add(v.y1, v.y2), { n: TWO, d: ONE }))));
          setRow('slP2', null);
        } else {
          setRow('slDist', null);
          setRow('slMid', null);
          setRow('slP2', pt(exact(add(v.x1, { n: v.m.d, d: ONE })), exact(add(v.y1, { n: v.m.n, d: ONE }))));
        }
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

      /** 按模式显示第二个点或斜率输入框。 */
      function syncMode() {
        var ps = modeEl.value === 'ps';
        var twos = document.querySelectorAll('.sl-two');
        for (var i = 0; i < twos.length; i++) twos[i].style.display = ps ? 'none' : '';
        var pss = document.querySelectorAll('.sl-ps');
        for (var k = 0; k < pss.length; k++) pss[k].style.display = ps ? '' : 'none';
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
        x1El.value = localize(smp[1]);
        y1El.value = localize(smp[2]);
        x2El.value = localize(smp[3]);
        y2El.value = localize(smp[4]);
        mEl.value = localize(smp[5]);
        syncMode();
        runCalc();
      }

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        runCalc();
      });
      modeEl.addEventListener('change', syncMode);
      document.getElementById('slBtnSample').addEventListener('click', loadSample);
      /** 清空：只清输入、恢复两点模式并隐藏结果，不重新加载样例。 */
      document.getElementById('slBtnClear').addEventListener('click', function () {
        x1El.value = '';
        y1El.value = '';
        x2El.value = '';
        y2El.value = '';
        mEl.value = '';
        modeEl.value = 'two';
        syncMode();
        result.style.display = 'none';
        x1El.focus();
      });
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('how-to-calculate-slope');
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
