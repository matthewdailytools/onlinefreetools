/**
 * 有效数字计算器工具页：数有效数字（逐位标注）、按 N 位有效数字修约（四舍五入 / 四舍六入五成双）、
 * 按有效数字规则做加减乘除。全部用字符串与 BigInt 做十进制运算，避免浮点误差。
 * slug: how-to-calculate-significant-figures（见 work-tasks/how-to-calculate-significant-figures/02-tool-info.md）。
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
const PREFIX = 'tool_significant_figures';

/** 使用小数逗号的页面语言（输入单个逗号按小数点理解，输出也用逗号）。 */
const DECIMAL_COMMA_LANGS: SiteLang[] = ['de', 'es', 'pt', 'fr', 'ru', 'id'] as SiteLang[];

/** 为路径加上语言前缀（默认语无前缀）。 */
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * 渲染 how-to-calculate-significant-figures 工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 * @returns 完整页面 HTML
 */
export const renderHowToCalculateSignificantFiguresPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 读取本工具键（自动拼前缀）。 */
	const tx = (key: string) => t(opts.lang, `${PREFIX}_${key}` as keyof typeof import('../site/i18n/en').default);

	const toolPath = '/tools/how-to-calculate-significant-figures';
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
			currentSlug: 'how-to-calculate-significant-figures',
			currentAnchor: '#significant-figures',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	/**
	 * 文本输入框表单组。
	 * @param id 输入框 id
	 * @param labelKey 标签键
	 * @param phKey 占位符键
	 * @param cls 外层类名（按模式显隐）
	 * @param inputmode 移动端键盘类型
	 * @returns 表单组 HTML
	 */
	const textField = (id: string, labelKey: string, phKey: string, cls: string, inputmode = 'text') => `
            <div class="form-group ${cls}">
              <label class="form-label" for="${id}">${escapeHtml(tx(labelKey))}</label>
              <input id="${id}" class="input-lg" type="text" inputmode="${inputmode}" autocomplete="off" spellcheck="false" placeholder="${escapeHtml(tx(phKey))}">
            </div>`;

	const extraHeadHtml = `
  <style>
    .tool-card { max-width: var(--content-max); width: 100%; margin: 0 0 1.5rem; }
    .form-label { display:block; margin-bottom:.5rem; color:#495057; font-weight:500 }
    .form-hint { display:block; color:#6c757d; font-size:.85rem; margin:-.25rem 0 .75rem; }
    .form-group { margin-bottom:1rem; }
    .form-row2 { display:grid; grid-template-columns:repeat(2, 1fr); gap:0 1rem; }
    .form-row3 { display:grid; grid-template-columns:2fr 1fr 2fr; gap:0 1rem; }
    @media (max-width:576px) { .form-row2, .form-row3 { grid-template-columns:1fr; } }
    .btn-row { display:flex; flex-wrap:wrap; gap:.5rem; align-items:center; }
    .result { background:#f8f9fa; padding:1rem; border-radius:8px; margin-top:1rem; }
    .sf-main-label { text-align:center; color:#495057; font-size:.95rem; }
    .sf-main { font-size:1.6rem; font-weight:600; text-align:center; margin:.15rem 0 .5rem; font-variant-numeric:tabular-nums; word-break:break-all; }
    .sf-digits { display:flex; flex-wrap:wrap; justify-content:center; align-items:flex-end; gap:2px; margin:.25rem 0 .5rem; font-family:ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size:1.35rem; direction:ltr; }
    .sf-d { display:inline-block; min-width:1.15em; padding:.1em .15em; text-align:center; border-radius:4px; border-bottom:3px solid transparent; }
    .sf-d.sf-sig { background:#d1e7dd; border-bottom-color:#198754; color:#0f5132; font-weight:600; }
    .sf-d.sf-no { background:#e9ecef; color:#6c757d; }
    .sf-d.sf-amb { background:#fff3cd; border-bottom-color:#cc9a06; color:#664d03; }
    .sf-d.sf-sym { background:transparent; color:#495057; min-width:.5em; padding:.1em 0; }
    .sf-legend { display:flex; flex-wrap:wrap; justify-content:center; gap:.4rem 1rem; font-size:.85rem; color:#495057; margin-bottom:.5rem; }
    .sf-legend .sf-d { font-size:.8rem; min-width:1.2em; padding:0 .3em; }
    .sf-rows { margin:0; }
    .sf-row { color:#495057; font-size:.92rem; margin-top:.45rem; font-variant-numeric:tabular-nums; }
    .result .muted { color:#6c757d; font-size:.9rem; margin-top:.75rem; }
  </style>`;

	const contentHtml = `
    <div id="significant-figures" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(tx('title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <form id="calcForm" novalidate>
          <div class="form-group">
            <label class="form-label" for="sfMode">${escapeHtml(tx('mode_label'))}</label>
            <select id="sfMode" class="input-lg">
              <option value="count" selected>${escapeHtml(tx('mode_count'))}</option>
              <option value="round">${escapeHtml(tx('mode_round'))}</option>
              <option value="calc">${escapeHtml(tx('mode_calc'))}</option>
            </select>
          </div>
          ${textField('sfNum', 'num_label', 'num_ph', 'sf-m-count sf-m-round')}
          <div class="form-row3 sf-m-calc" style="display:none">
            ${textField('sfA', 'a_label', 'a_ph', '')}
            <div class="form-group">
              <label class="form-label" for="sfOp">${escapeHtml(tx('op_label'))}</label>
              <select id="sfOp" class="input-lg">
                <option value="add">${escapeHtml(tx('op_add'))}</option>
                <option value="sub">${escapeHtml(tx('op_sub'))}</option>
                <option value="mul" selected>${escapeHtml(tx('op_mul'))}</option>
                <option value="div">${escapeHtml(tx('op_div'))}</option>
              </select>
            </div>
            ${textField('sfB', 'b_label', 'b_ph', '')}
          </div>
          <div class="form-row2">
            ${textField('sfN', 'n_label', 'n_ph', 'sf-m-round', 'numeric')}
            <div class="form-group sf-m-round sf-m-calc" style="display:none">
              <label class="form-label" for="sfMethod">${escapeHtml(tx('method_label'))}</label>
              <select id="sfMethod" class="input-lg">
                <option value="up" selected>${escapeHtml(tx('method_up'))}</option>
                <option value="even">${escapeHtml(tx('method_even'))}</option>
              </select>
            </div>
          </div>
          <span id="sfHint" class="form-hint">${escapeHtml(tx('num_hint'))}</span>
          <div class="btn-row">
            <button type="submit" id="sfBtnCalc" class="btn btn-primary">${escapeHtml(tx('calculate'))}</button>
            <button type="button" id="sfBtnSample" class="btn btn-outline-secondary">${escapeHtml(tx('sample'))}</button>
            <button type="button" id="sfBtnClear" class="btn btn-outline-secondary">${escapeHtml(tx('clear'))}</button>
          </div>
        </form>
        <div id="calcResult" class="result" style="display:none" aria-live="polite">
          <div id="sfMainLabel" class="sf-main-label"></div>
          <div id="sfMain" class="sf-main"></div>
          <div id="sfDigits" class="sf-digits" aria-hidden="true"></div>
          <div id="sfLegend" class="sf-legend">
            <span><span class="sf-d sf-sig">4</span> ${escapeHtml(tx('legend_sig'))}</span>
            <span><span class="sf-d sf-no">0</span> ${escapeHtml(tx('legend_no'))}</span>
            <span><span class="sf-d sf-amb">0</span> ${escapeHtml(tx('legend_amb'))}</span>
          </div>
          <div id="sfRows" class="sf-rows"></div>
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
			ruleItemCount: 6,
		})}`;

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: tx('ref_sig_label'),
				href: 'https://en.wikipedia.org/wiki/Significant_figures',
			},
			{
				label: tx('ref_round_label'),
				href: 'https://en.wikipedia.org/wiki/Rounding',
			},
		],
	});

	/** 前端脚本需要的文案（一次性注入）。 */
	const clientText = {
		decComma: DECIMAL_COMMA_LANGS.includes(opts.lang),
		numHint: tx('num_hint'),
		calcHint: tx('calc_hint'),
		legendSig: tx('legend_sig'),
		legendNo: tx('legend_no'),
		legendAmb: tx('legend_amb'),
		rowRead: tx('row_read'),
		rowCount: tx('row_count'),
		rowBreak: tx('row_break'),
		rowSci: tx('row_sci'),
		rowPlace: tx('row_place'),
		rowRounded: tx('row_rounded'),
		rowStep: tx('row_step'),
		rowExact: tx('row_exact'),
		rowRule: tx('row_rule'),
		rowNote: tx('row_note'),
		rowAlt: tx('row_alt'),
		mainCount: tx('main_count'),
		mainRound: tx('main_round_tpl'),
		mainCalc: tx('main_calc'),
		breakTpl: tx('break_tpl'),
		ambTpl: tx('amb_tpl'),
		zeroNote: tx('zero_note'),
		placeDec: tx('place_dec_tpl'),
		placeInt: tx('place_int_tpl'),
		step: tx('step_tpl'),
		stepPad: tx('step_pad_tpl'),
		dirUp: tx('dir_up'),
		dirDown: tx('dir_down'),
		dirEven: tx('dir_even'),
		roundAmb: tx('round_amb_tpl'),
		altEven: tx('alt_even_tpl'),
		altUp: tx('alt_up_tpl'),
		ruleMul: tx('rule_mul_tpl'),
		ruleAdd: tx('rule_add_tpl'),
		errNum: tx('err_num'),
		errNumB: tx('err_num_b'),
		errN: tx('err_n'),
		errDivZero: tx('err_div_zero'),
		errZeroMulDiv: tx('err_zero_muldiv'),
		errLimit: tx('err_limit'),
		noteCount: tx('note_count'),
		noteRound: tx('note_round'),
		noteCalc: tx('note_calc'),
	};

	const extraBodyHtml = `
  <script>
    (function () {
      /** 表单与输入控件。 */
      var form = document.getElementById('calcForm');
      var modeEl = document.getElementById('sfMode');
      var numEl = document.getElementById('sfNum');
      var nEl = document.getElementById('sfN');
      var methodEl = document.getElementById('sfMethod');
      var aEl = document.getElementById('sfA');
      var opEl = document.getElementById('sfOp');
      var bEl = document.getElementById('sfB');
      var hintEl = document.getElementById('sfHint');
      /** 结果区各输出位。 */
      var result = document.getElementById('calcResult');
      var mainLabelEl = document.getElementById('sfMainLabel');
      var mainEl = document.getElementById('sfMain');
      var digitsEl = document.getElementById('sfDigits');
      var legendEl = document.getElementById('sfLegend');
      var rowsEl = document.getElementById('sfRows');
      var noteEl = document.getElementById('calcNote');
      /** 本地化文案字典。 */
      var T = ${JSON.stringify(clientText)};
      /** 输出用小数点字符。 */
      var DEC = T.decComma ? ',' : '.';
      /** 输入上限：有效位数、10 的幂次、修约位数。 */
      var MAX_DIGITS = 40;
      var MAX_EXP = 100;
      var MAX_N = 30;
      /** 指数串（可带正负号的整数）。 */
      var INT_RE = /^[+-]?[0-9]+$/;
      /** 尾数串：数字与至多一个小数点。 */
      var MANT_RE = /^[0-9]*[.]?[0-9]*$/;
      /** 至少含一位数字。 */
      var DIGIT_RE = /[0-9]/;
      /** 英文式千分位分组（1,234,567）。 */
      var GROUP_RE = /^[0-9]{1,3}(,[0-9]{3})+$/;
      /** 全零串。 */
      var ZERO_RE = /^0*$/;
      /** 末尾零。 */
      var TRAIL0_RE = /0+$/;
      /** 输入时忽略的分组字符：空格、不换行空格、窄空格、细空格、撇号。 */
      var SKIP = {};
      [32, 160, 8201, 8239, 39, 8217].forEach(function (c) { SKIP[c] = true; });
      /** 上标数字与符号 → 普通字符（10⁻³ 写法）。 */
      var SUP_IN = { 8304: '0', 185: '1', 178: '2', 179: '3', 8308: '4', 8309: '5', 8310: '6', 8311: '7', 8312: '8', 8313: '9', 8315: '-', 8314: '+' };
      /** 普通数字与负号 → 上标字符（输出科学计数法）。 */
      var SUP_OUT = { '0': 8304, '1': 185, '2': 178, '3': 179, '4': 8308, '5': 8309, '6': 8310, '7': 8311, '8': 8312, '9': 8313, '-': 8315 };
      /** 乘号类字符（×、·、⋅、⨯）统一当作 x。 */
      var TIMES = { 215: true, 183: true, 8901: true, 10799: true };
      /** 样例轮换；首个与 Example 一致。 */
      var SAMPLES = [
        { mode: 'count', num: '0.004050' },
        { mode: 'round', num: '1299.7', n: '3', method: 'up' },
        { mode: 'calc', a: '4.56', op: 'mul', b: '1.4', method: 'up' },
        { mode: 'calc', a: '12.11', op: 'add', b: '18.0', method: 'up' }
      ];
      /** 下一次点击「加载样例」使用的样例下标。 */
      var sampleIndex = 0;

      /**
       * 模板占位替换（{key} → 值）。
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
       * n 个零组成的串。
       * @param {number} n 个数
       * @returns {string}
       */
      function zeros(n) {
        return n > 0 ? new Array(n + 1).join('0') : '';
      }

      /**
       * 10 的 n 次幂（BigInt）。
       * @param {number} n 非负整数
       * @returns {bigint}
       */
      function pow10(n) {
        return BigInt('1' + zeros(n));
      }

      /**
       * 去掉前导零（全零返回 '0'）。
       * @param {string} d 数字串
       * @returns {string}
       */
      function stripLead(d) {
        var i = 0;
        while (i < d.length - 1 && d.charAt(i) === '0') i++;
        return d.slice(i);
      }

      /**
       * 整数转上标串（10 的幂次）。
       * @param {number} n 幂次
       * @returns {string}
       */
      function sup(n) {
        return String(n).split('').map(function (ch) { return String.fromCharCode(SUP_OUT[ch]); }).join('');
      }

      /**
       * 统计字符出现次数。
       * @param {string} s 串
       * @param {string} ch 字符
       * @returns {number}
       */
      function countChar(s, ch) {
        return s.split(ch).length - 1;
      }

      /**
       * 清理原始输入：去分组空格，上标改为 ^ 幂次，统一负号与乘号，转小写。
       * @param {string} raw 输入
       * @returns {string}
       */
      function cleanRaw(raw) {
        var s = String(raw || '').trim();
        var out = '';
        var prevSup = false;
        for (var i = 0; i < s.length; i++) {
          var code = s.charCodeAt(i);
          if (SKIP[code]) continue;
          var su = SUP_IN[code];
          if (su != null) {
            if (!prevSup) out += '^';
            out += su;
            prevSup = true;
            continue;
          }
          prevSup = false;
          if (code === 8722 || code === 8211) out += '-';
          else if (TIMES[code]) out += 'x';
          else out += s.charAt(i);
        }
        return out.toLowerCase();
      }

      /**
       * 归一化尾数里的逗号与点：两者都有时最后出现的是小数点；
       * 只有逗号时按页面语言判断小数逗号或千分位；多个点视为分组。
       * @param {string} m 尾数（无正负号）
       * @returns {string|null} 只含数字与至多一个点的串
       */
      function normSep(m) {
        var c = countChar(m, ',');
        var d = countChar(m, '.');
        if (c && d) {
          var decCh = m.lastIndexOf(',') > m.lastIndexOf('.') ? ',' : '.';
          var grpCh = decCh === ',' ? '.' : ',';
          if (countChar(m, decCh) > 1) return null;
          return m.split(grpCh).join('').split(decCh).join('.');
        }
        if (c) {
          if (c > 1) return GROUP_RE.test(m) ? m.split(',').join('') : null;
          if (!T.decComma && GROUP_RE.test(m)) return m.split(',').join('');
          return m.split(',').join('.');
        }
        if (d > 1) return m.split('.').join('');
        return m;
      }

      /**
       * 解析数字串（支持 1.20e3、6.02 × 10^23、6.02×10²³、小数逗号与千分位）。
       * @param {string} raw 输入
       * @returns {{ neg: boolean, intStr: string, fracStr: string, hasPoint: boolean, exp: number, sci: boolean }|{ limit: true }|null}
       */
      function parseNum(raw) {
        var s = cleanRaw(raw);
        if (!s) return null;
        var mant = s;
        var expStr = '0';
        var sci = false;
        var k = s.indexOf('e');
        if (k >= 0) {
          mant = s.slice(0, k);
          expStr = s.slice(k + 1);
          sci = true;
        } else {
          k = s.indexOf('10^');
          if (k > 0 && (s.charAt(k - 1) === 'x' || s.charAt(k - 1) === '*')) {
            mant = s.slice(0, k - 1);
            expStr = s.slice(k + 3);
            sci = true;
          }
        }
        if (!INT_RE.test(expStr)) return null;
        var exp = parseInt(expStr, 10);
        var neg = false;
        var c0 = mant.charAt(0);
        if (c0 === '-' || c0 === '+') {
          neg = c0 === '-';
          mant = mant.slice(1);
        }
        mant = normSep(mant);
        if (mant == null || !MANT_RE.test(mant) || !DIGIT_RE.test(mant)) return null;
        var p = mant.indexOf('.');
        var intStr = p >= 0 ? mant.slice(0, p) : mant;
        var fracStr = p >= 0 ? mant.slice(p + 1) : '';
        if ((intStr + fracStr).length > MAX_DIGITS || Math.abs(exp) > MAX_EXP) return { limit: true };
        return { neg: neg, intStr: intStr, fracStr: fracStr, hasPoint: p >= 0, exp: exp, sci: sci };
      }

      /**
       * 逐位分析有效数字。
       * @param {Object} n parseNum 结果
       * @returns {Object} kinds 每位类别（sig / no / amb），sig 有效位数，各类计数，place 末位有效数字的 10 的幂次，digits 有效数字串，msd 首位有效数字的幂次，C/e 数值（C × 10^e）
       */
      function analyze(n) {
        var all = n.intStr + n.fracStr;
        var L = all.length;
        var f = -1;
        var l = -1;
        for (var i = 0; i < L; i++) {
          if (all.charAt(i) !== '0') {
            if (f < 0) f = i;
            l = i;
          }
        }
        var res = { kinds: [], sig: 0, lead: 0, nz: 0, cap: 0, trail: 0, amb: 0, zero: f < 0, C: BigInt(all || '0'), e: n.exp - n.fracStr.length, neg: n.neg };
        if (f < 0) {
          for (var z = 0; z < L; z++) res.kinds.push('no');
          res.place = n.exp - n.fracStr.length;
          res.decimals = Math.max(0, -res.place);
          return res;
        }
        for (var j = 0; j < L; j++) {
          var ch = all.charAt(j);
          var kind;
          if (j < f) { kind = 'no'; res.lead++; }
          else if (ch !== '0') { kind = 'sig'; res.nz++; }
          else if (j < l) { kind = 'sig'; res.cap++; }
          else if (n.hasPoint) { kind = 'sig'; res.trail++; }
          else { kind = 'amb'; res.amb++; }
          res.kinds.push(kind);
        }
        res.sig = res.nz + res.cap + res.trail;
        var lastIdx = n.hasPoint ? L - 1 : l;
        res.place = (L - 1 - lastIdx) - n.fracStr.length + n.exp;
        res.digits = all.slice(f, lastIdx + 1);
        res.msd = (L - 1 - f) - n.fracStr.length + n.exp;
        return res;
      }

      /**
       * 由系数串与幂次写成普通记数（K × 10^e）。
       * @param {string} K 系数数字串
       * @param {number} e 幂次
       * @param {boolean} neg 是否为负
       * @returns {string}
       */
      function plain(K, e, neg) {
        var s;
        if (e >= 0) s = K + zeros(e);
        else {
          var pos = K.length + e;
          s = pos > 0 ? K.slice(0, pos) + DEC + K.slice(pos) : '0' + DEC + zeros(-pos) + K;
        }
        return neg && !ZERO_RE.test(K) ? '-' + s : s;
      }

      /**
       * 科学计数法（保留给定的有效数字串）。
       * @param {string} D 有效数字串（首位非零）
       * @param {number} msd 首位幂次
       * @param {boolean} neg 是否为负
       * @returns {{ pretty: string, enote: string }}
       */
      function sciOf(D, msd, neg) {
        if (!D || ZERO_RE.test(D)) return { pretty: '0', enote: '0' };
        var m = D.charAt(0) + (D.length > 1 ? DEC + D.slice(1) : '');
        var sign = neg ? '-' : '';
        return { pretty: sign + m + ' × 10' + sup(msd), enote: sign + m + 'e' + msd };
      }

      /**
       * 位值写法（10 的 p 次幂：100、1、0.01）。
       * @param {number} p 幂次
       * @returns {string}
       */
      function placeStr(p) {
        if (p > 6 || p < -6) return '10' + sup(p);
        return p >= 0 ? '1' + zeros(p) : '0' + DEC + zeros(-p - 1) + '1';
      }

      /**
       * 科学计数法一行（两种写法相同时只写一次）。
       * @param {{ pretty: string, enote: string }} s sciOf 结果
       * @returns {string}
       */
      function sciLine(s) {
        return s.pretty === s.enote ? s.pretty : s.pretty + '  ·  ' + s.enote;
      }

      /**
       * 精度说明（到哪一位、几位小数）。
       * @param {number} p 末位幂次
       * @returns {string}
       */
      function placeText(p) {
        return p < 0 ? fill(T.placeDec, { p: placeStr(p), d: -p }) : fill(T.placeInt, { p: placeStr(p) });
      }

      /**
       * 输入回显（按页面小数点写回，科学计数法保留幂次）。
       * @param {Object} n parseNum 结果
       * @returns {string}
       */
      function readAs(n) {
        var s = (n.neg ? '-' : '') + n.intStr + (n.hasPoint ? DEC + n.fracStr : '');
        return n.sci ? s + ' × 10' + sup(n.exp) : s;
      }

      /**
       * 是否应进位（四舍五入：5 进；五成双：恰好一半时看保留末位奇偶）。
       * @param {string} keep 保留部分
       * @param {string} rest 舍去部分
       * @param {string} method up | even
       * @returns {boolean}
       */
      function decideUp(keep, rest, method) {
        var d = rest.charCodeAt(0) - 48;
        if (d !== 5) return d > 5;
        if (!ZERO_RE.test(rest.slice(1))) return true;
        if (method === 'even') return (keep.charCodeAt(keep.length - 1) - 48) % 2 === 1;
        return true;
      }

      /**
       * 修约到 N 位有效数字（字符串运算，无浮点误差）。
       * @param {string} D0 数字串
       * @param {number} e 幂次（值 = D0 × 10^e）
       * @param {number} N 有效位数
       * @param {string} method up | even
       * @returns {{ K: string, e: number, padded: number, have: number, next?: string, tie?: boolean, up?: boolean, lastKept?: string, placeExp?: number }}
       */
      function roundSig(D0, e, N, method) {
        var D = stripLead(D0);
        var have = D.replace(TRAIL0_RE, '').length;
        if (D.length <= N) {
          var pad = N - D.length;
          return { K: D + zeros(pad), e: e - pad, padded: pad, have: have };
        }
        var keep = D.slice(0, N);
        var rest = D.slice(N);
        var up = decideUp(keep, rest, method);
        var K = up ? (BigInt(keep) + BigInt(1)).toString() : keep;
        var e2 = e + rest.length;
        if (K.length > N) {
          K = K.slice(0, N);
          e2 += 1;
        }
        return {
          K: K,
          e: e2,
          padded: 0,
          have: have,
          next: rest.charAt(0),
          tie: rest.charAt(0) === '5' && ZERO_RE.test(rest.slice(1)),
          up: up,
          lastKept: keep.charAt(N - 1),
          placeExp: e + rest.length
        };
      }

      /**
       * 修约到指定位（加减法：到较粗的那一位）。
       * @param {bigint} S 带符号系数
       * @param {number} e 幂次
       * @param {number} P 目标末位幂次
       * @param {string} method up | even
       * @returns {{ C: string, e: number, neg: boolean }}
       */
      function roundPlace(S, e, P, method) {
        var neg = S < BigInt(0);
        var M = neg ? -S : S;
        if (P <= e) return { C: (M * pow10(e - P)).toString(), e: P, neg: neg };
        var div = pow10(P - e);
        var q = M / div;
        var r = M % div;
        var twice = r * BigInt(2);
        if (twice > div || (twice === div && (method !== 'even' || q % BigInt(2) === BigInt(1)))) q = q + BigInt(1);
        return { C: q.toString(), e: P, neg: neg && q !== BigInt(0) };
      }

      /**
       * 写出精确结果（BigInt 系数 × 10^e），去掉小数部分多余的零。
       * @param {bigint} S 带符号系数
       * @param {number} e 幂次
       * @returns {string}
       */
      function exactStr(S, e) {
        var neg = S < BigInt(0);
        var D = (neg ? -S : S).toString();
        while (e < 0 && D.length > 1 && D.charAt(D.length - 1) === '0') {
          D = D.slice(0, -1);
          e += 1;
        }
        return plain(D, e, neg);
      }

      /**
       * 由系数与幂次构造「读数」对象，供逐位标注结果。
       * @param {string} K 系数串
       * @param {number} e 幂次
       * @param {boolean} neg 是否为负
       * @returns {Object} 与 parseNum 同形
       */
      function numFrom(K, e, neg) {
        var s = plain(K, e, false);
        var p = s.indexOf(DEC);
        return { neg: neg && !ZERO_RE.test(K), intStr: p >= 0 ? s.slice(0, p) : s, fracStr: p >= 0 ? s.slice(p + 1) : '', hasPoint: p >= 0, exp: 0, sci: false };
      }

      /**
       * 逐位标注数字（有效 / 不计 / 有歧义）。
       * @param {Object} n 读数对象
       * @param {string[]} kinds 每位类别
       */
      function renderDigits(n, kinds) {
        digitsEl.textContent = '';
        var tips = { sig: T.legendSig, no: T.legendNo, amb: T.legendAmb };
        /**
         * 追加一个格子。
         * @param {string} text 文本
         * @param {string} cls 类别
         */
        function cell(text, cls) {
          var sp = document.createElement('span');
          sp.className = 'sf-d sf-' + cls;
          sp.textContent = text;
          if (tips[cls]) sp.title = tips[cls];
          digitsEl.appendChild(sp);
        }
        if (n.neg) cell('-', 'sym');
        var all = n.intStr + n.fracStr;
        for (var i = 0; i < all.length; i++) {
          if (n.hasPoint && i === n.intStr.length) cell(DEC, 'sym');
          cell(all.charAt(i), kinds[i] || 'no');
        }
        if (n.hasPoint && !n.fracStr) cell(DEC, 'sym');
        if (n.sci) cell(' × 10' + sup(n.exp), 'sym');
        var hasAmb = kinds.indexOf('amb') >= 0;
        legendEl.lastElementChild.style.display = hasAmb ? '' : 'none';
        digitsEl.style.display = '';
        legendEl.style.display = '';
      }

      /**
       * 结果区追加一行「标签：值」。
       * @param {string} label 标签
       * @param {string} value 值
       */
      function addRow(label, value) {
        var div = document.createElement('div');
        div.className = 'sf-row';
        var strong = document.createElement('strong');
        strong.textContent = label + ': ';
        div.appendChild(strong);
        div.appendChild(document.createTextNode(value));
        rowsEl.appendChild(div);
      }

      /**
       * 显示错误（隐藏逐位标注与明细）。
       * @param {string} msg 错误文案
       */
      function showError(msg) {
        result.style.display = 'block';
        mainLabelEl.textContent = '';
        mainEl.textContent = '—';
        digitsEl.style.display = 'none';
        legendEl.style.display = 'none';
        rowsEl.textContent = '';
        noteEl.textContent = msg;
      }

      /**
       * 准备结果区（清空明细并显示主结果）。
       * @param {string} label 主结果标签
       * @param {string} main 主结果
       */
      function startResult(label, main) {
        result.style.display = 'block';
        rowsEl.textContent = '';
        mainLabelEl.textContent = label;
        mainEl.textContent = main;
      }

      /** 数有效数字。 */
      function runCount() {
        var n = parseNum(numEl.value);
        if (!n) return showError(T.errNum);
        if (n.limit) return showError(T.errLimit);
        var a = analyze(n);
        var shown = readAs(n);
        if (a.zero) {
          startResult(T.mainCount, '0');
          renderDigits(n, a.kinds);
          addRow(T.rowRead, shown);
          addRow(T.rowNote, fill(T.zeroNote, { d: a.decimals }));
          noteEl.textContent = T.noteCount;
          return;
        }
        startResult(T.mainCount, String(a.sig));
        renderDigits(n, a.kinds);
        addRow(T.rowRead, shown);
        addRow(T.rowBreak, fill(T.breakTpl, { nz: a.nz, cap: a.cap, trail: a.trail, lead: a.lead }));
        if (a.amb) {
          var full = sciOf(a.digits + zeros(a.amb), a.msd, n.neg).pretty;
          addRow(T.rowNote, fill(T.ambTpl, { z: a.amb, num: shown, min: a.sig, max: a.sig + a.amb, sci: full }));
        }
        var s = sciOf(a.digits, a.msd, n.neg);
        addRow(T.rowSci, sciLine(s));
        addRow(T.rowPlace, placeText(a.place));
        noteEl.textContent = T.noteCount;
      }

      /**
       * 读修约位数。
       * @returns {number|null} 1–MAX_N 的整数
       */
      function readN() {
        var raw = String(nEl.value || '').trim();
        if (!INT_RE.test(raw)) return null;
        var v = parseInt(raw, 10);
        return v >= 1 && v <= MAX_N ? v : null;
      }

      /**
       * 修约结果的明细行（步骤、歧义提示、另一种舍入方式）。
       * @param {Object} r roundSig 结果
       * @param {number} N 有效位数
       * @param {boolean} neg 是否为负
       * @param {string} D 原数字串
       * @param {number} e 原幂次
       * @param {string} method 当前方式
       */
      function roundDetails(r, N, neg, D, e, method) {
        var std = plain(r.K, r.e, neg);
        var s = sciOf(r.K, r.K.length - 1 + r.e, neg);
        addRow(T.rowSci, sciLine(s));
        if (r.padded) addRow(T.rowStep, fill(T.stepPad, { have: r.have, n: N, out: std }));
        else {
          var dir = r.tie && method === 'even' ? T.dirEven : r.up ? T.dirUp : T.dirDown;
          addRow(T.rowStep, fill(T.step, { k: r.lastKept, p: placeStr(r.placeExp), d: r.next, dir: dir }));
        }
        var visible = r.e >= 0 ? r.K.replace(TRAIL0_RE, '').length : r.K.length;
        if (visible < N) addRow(T.rowNote, fill(T.roundAmb, { std: std, vis: visible, sci: s.pretty, n: N }));
        var other = method === 'even' ? 'up' : 'even';
        var alt = roundSig(D, e, N, other);
        var altStd = plain(alt.K, alt.e, neg);
        if (altStd !== std) addRow(T.rowAlt, fill(other === 'even' ? T.altEven : T.altUp, { v: altStd }));
      }

      /** 修约到 N 位有效数字。 */
      function runRound() {
        var n = parseNum(numEl.value);
        if (!n) return showError(T.errNum);
        if (n.limit) return showError(T.errLimit);
        var N = readN();
        if (N == null) return showError(T.errN);
        var a = analyze(n);
        var method = methodEl.value;
        var D = n.intStr + n.fracStr;
        var r = roundSig(D, a.e, N, method);
        if (a.zero) r = { K: zeros(1), e: 0, padded: 0, have: 0 };
        var std = plain(r.K, r.e, n.neg);
        startResult(fill(T.mainRound, { n: N }), std);
        var rn = numFrom(r.K, r.e, n.neg);
        renderDigits(rn, analyze(rn).kinds);
        addRow(T.rowRead, readAs(n));
        addRow(T.rowCount, a.zero ? '0' : String(a.sig));
        if (!a.zero) roundDetails(r, N, n.neg, D, a.e, method);
        noteEl.textContent = T.noteRound;
      }

      /** 按有效数字规则做加减乘除。 */
      function runCalc() {
        var pa = parseNum(aEl.value);
        if (!pa) return showError(T.errNum);
        var pb = parseNum(bEl.value);
        if (!pb) return showError(String(bEl.value || '').trim() ? T.errNum : T.errNumB);
        if (pa.limit || pb.limit) return showError(T.errLimit);
        var A = analyze(pa);
        var B = analyze(pb);
        var op = opEl.value;
        var method = methodEl.value;
        var sa = pa.neg ? -A.C : A.C;
        var sb = pb.neg ? -B.C : B.C;
        var shownA = readAs(pa);
        var shownB = readAs(pb);
        var std;
        if (op === 'add' || op === 'sub') {
          var em = Math.min(A.e, B.e);
          var termA = sa * pow10(A.e - em);
          var termB = sb * pow10(B.e - em);
          var S = op === 'sub' ? termA - termB : termA + termB;
          var P = Math.max(A.place, B.place);
          var rp = roundPlace(S, em, P, method);
          std = plain(rp.C, rp.e, rp.neg);
          startResult(T.mainCalc, std);
          var rn = numFrom(rp.C, rp.e, rp.neg);
          renderDigits(rn, analyze(rn).kinds);
          addRow(T.rowExact, exactStr(S, em));
          addRow(T.rowRule, fill(T.ruleAdd, { a: shownA, pa: placeStr(A.place), b: shownB, pb: placeStr(B.place), p: placeStr(P) }));
          var digits = stripLead(rp.C);
          var s = sciOf(digits, digits.length - 1 + rp.e, rp.neg);
          addRow(T.rowSci, sciLine(s));
          noteEl.textContent = T.noteCalc;
          return;
        }
        if (B.zero && op === 'div') return showError(T.errDivZero);
        if (A.zero || B.zero) return showError(T.errZeroMulDiv);
        var N = Math.min(A.sig, B.sig);
        var neg = pa.neg !== pb.neg;
        var D;
        var e;
        var exact;
        if (op === 'mul') {
          var prod = A.C * B.C;
          D = prod.toString();
          e = A.e + B.e;
          exact = exactStr(neg ? -prod : prod, e);
        } else {
          var k = 30 + Math.max(A.C.toString().length, B.C.toString().length);
          var num = A.C * pow10(k);
          var q = num / B.C;
          var inexact = num % B.C !== BigInt(0);
          D = q.toString();
          e = A.e - B.e - k;
          if (inexact) {
            var shown = roundSig(D, e, 12, 'up');
            exact = '≈ ' + plain(shown.K, shown.e, neg);
            D = D + '1';
            e -= 1;
          } else {
            exact = exactStr(neg ? -q : q, e);
          }
        }
        var r = roundSig(D, e, N, method);
        std = plain(r.K, r.e, neg);
        startResult(T.mainCalc, std);
        var rn2 = numFrom(r.K, r.e, neg);
        renderDigits(rn2, analyze(rn2).kinds);
        addRow(T.rowExact, exact);
        addRow(T.rowRule, fill(T.ruleMul, { a: shownA, sa: A.sig, b: shownB, sb: B.sig, n: N }));
        roundDetails(r, N, neg, D, e, method);
        noteEl.textContent = T.noteCalc;
      }

      /** 按模式显隐输入组与提示。 */
      function syncMode() {
        var mode = modeEl.value;
        ['count', 'round', 'calc'].forEach(function (m) {
          document.querySelectorAll('.sf-m-' + m).forEach(function (el) {
            el.style.display = el.className.indexOf('sf-m-' + mode) >= 0 ? '' : 'none';
          });
        });
        hintEl.textContent = mode === 'calc' ? T.calcHint : T.numHint;
      }

      /** 按当前模式计算。 */
      function run() {
        var mode = modeEl.value;
        if (mode === 'round') runRound();
        else if (mode === 'calc') runCalc();
        else runCount();
      }

      /** 加载样例：数位 → 修约（进位 + 歧义）→ 乘法 → 加法，轮换。 */
      function loadSample() {
        var s = SAMPLES[sampleIndex];
        sampleIndex = (sampleIndex + 1) % SAMPLES.length;
        modeEl.value = s.mode;
        if (s.num != null) numEl.value = s.num;
        if (s.n != null) nEl.value = s.n;
        if (s.method) methodEl.value = s.method;
        if (s.a != null) aEl.value = s.a;
        if (s.op) opEl.value = s.op;
        if (s.b != null) bEl.value = s.b;
        if (T.decComma) {
          [numEl, aEl, bEl].forEach(function (el) { el.value = el.value.split('.').join(','); });
        }
        syncMode();
        run();
      }

      /** 清空：清输入、恢复「数有效数字」模式与默认选项，隐藏结果；不重载样例。 */
      function clearAll() {
        numEl.value = '';
        nEl.value = '';
        aEl.value = '';
        bEl.value = '';
        modeEl.value = 'count';
        methodEl.value = 'up';
        opEl.value = 'mul';
        syncMode();
        result.style.display = 'none';
        rowsEl.textContent = '';
        noteEl.textContent = '';
        numEl.focus();
      }

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        run();
      });
      modeEl.addEventListener('change', function () {
        syncMode();
        result.style.display = 'none';
      });
      document.getElementById('sfBtnSample').addEventListener('click', loadSample);
      document.getElementById('sfBtnClear').addEventListener('click', clearAll);
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('how-to-calculate-significant-figures');
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
