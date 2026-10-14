/**
 * 一元二次方程求解器：ax² + bx + c = 0（纯客户端）。
 * slug: how-to-calculate-quadratic-equation（见 work-tasks/how-to-calculate-quadratic-equation/02-tool-info.md）。
 *
 * 交互要点（2026-10-14 改写）：
 * - a、b、c 可输入整数、小数或分数（1/2、-3/4），输入时即时预览方程；
 * - 结果：判别式与根的情况；两个根（小数）+ 精确形式（分数 / 最简根式 / 复数 i）；
 *   因式分解形式（有理根时）、顶点式、顶点与最值、对称轴、y 轴截距、两根之和与积（韦达定理）；
 * - 逐行求解过程 + SVG 抛物线图（标出实根与顶点）；
 * - a = 0 时按一次方程 bx + c = 0 求解并提示；小数位 2 / 4 / 6；Clear 不重载样例。
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
const PREFIX = 'tool_quadratic_equation';

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
 * 渲染 how-to-calculate-quadratic-equation 工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 * @returns 完整页面 HTML
 */
export const renderHowToCalculateQuadraticEquationPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 读取本工具键（自动拼前缀）。 */
	const tx = (key: string) => t(opts.lang, `${PREFIX}_${key}` as never);

	const toolPath = '/tools/how-to-calculate-quadratic-equation';
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
			currentSlug: 'how-to-calculate-quadratic-equation',
			currentAnchor: '#quadratic-equation',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	/**
	 * 系数输入框字段（文本框，允许分数）。
	 * @param id 元素 id
	 * @param key 标签 / 占位键前缀（a / b / c）
	 * @returns 字段 HTML
	 */
	const coefField = (id: string, key: string) => `
            <div class="form-group">
              <label class="form-label" for="${id}">${escapeHtml(tx(`${key}_label`))}</label>
              <input id="${id}" class="input-lg" type="text" inputmode="decimal" autocomplete="off" spellcheck="false" placeholder="${escapeHtml(tx(`${key}_ph`))}">
            </div>`;

	/**
	 * 结果表中的一行。
	 * @param id 值单元格 id（行 id = id + 'Row'）
	 * @param key 行标题键（不含前缀）
	 * @returns tr HTML
	 */
	const outRow = (id: string, key: string) =>
		`<tr id="${id}Row"><th scope="row">${escapeHtml(tx(key))}</th><td id="${id}" dir="ltr"></td></tr>`;

	/** 页内样式。 */
	const extraHeadHtml = `
  <style>
    .tool-card { max-width: var(--content-max); width: 100%; margin: 0 0 1.5rem; }
    .form-label { display:block; margin-bottom:.4rem; color:#495057; font-weight:500 }
    .form-group { margin-bottom:1rem; }
    .qe-grid { display:grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap:0 .75rem; }
    @media (max-width:480px) { .qe-grid { grid-template-columns: 1fr; } }
    .qe-preview { font-size:1.15rem; text-align:center; margin:.25rem 0 1rem; font-family: "Cambria Math", "STIX Two Math", Georgia, serif; }
    .qe-row { display:flex; flex-wrap:wrap; gap:.75rem; align-items:flex-end; justify-content:space-between; }
    .btn-row { display:flex; flex-wrap:wrap; gap:.5rem; align-items:center; }
    .result { background:#f8f9fa; padding:1rem; border-radius:8px; margin-top:1rem; }
    .qe-nature { text-align:center; font-weight:600; margin-bottom:.5rem; }
    .qe-out { width:100%; border-collapse:collapse; font-size:.98rem; }
    .qe-out th, .qe-out td { padding:.35rem .5rem; border-bottom:1px solid #e9ecef; vertical-align:top; }
    .qe-out th { text-align:start; font-weight:500; color:#495057; width:40%; }
    .qe-out td { font-variant-numeric: tabular-nums; font-weight:600; }
    .qe-work { margin:.75rem 0 0; padding-inline-start:1.4rem; font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size:.88rem; color:#495057; }
    .qe-work li { word-break:break-word; margin:.15rem 0; }
    .qe-graph { display:block; width:100%; max-width:420px; height:auto; margin:.75rem auto 0; background:#fff; border:1px solid #e9ecef; border-radius:6px; }
    .result .muted { color:#6c757d; font-size:.9rem; margin-top:.5rem; text-align:center; }
  </style>`;

	const contentHtml = `
    <div id="quadratic-equation" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(tx('title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <form id="calcForm" novalidate>
          <div class="qe-grid">
            ${coefField('qA', 'a')}
            ${coefField('qB', 'b')}
            ${coefField('qC', 'c')}
          </div>
          <p class="small text-muted mb-2">${escapeHtml(tx('coef_hint'))}</p>
          <div class="qe-preview" dir="ltr" aria-live="polite"><span class="visually-hidden">${escapeHtml(tx('preview_label'))}: </span><span id="qPreview">ax² + bx + c = 0</span></div>
          <div class="qe-row">
            <div class="btn-row">
              <button type="submit" class="btn btn-primary">${escapeHtml(tx('calculate'))}</button>
              <button type="button" id="btnSample" class="btn btn-outline-secondary">${escapeHtml(tx('sample'))}</button>
              <button type="button" id="btnClear" class="btn btn-outline-secondary">${escapeHtml(tx('clear'))}</button>
            </div>
            <div>
              <label class="form-label small mb-1" for="qDec">${escapeHtml(tx('dec_label'))}</label>
              <select id="qDec" class="form-select form-select-sm">
                <option value="2">2</option>
                <option value="4" selected>4</option>
                <option value="6">6</option>
              </select>
            </div>
          </div>
        </form>
        <div id="calcResult" class="result" style="display:none" aria-live="polite">
          <div id="okWrap">
            <p class="qe-nature" id="qNature"></p>
            <table class="qe-out">
              <tbody>
                ${outRow('qDisc', 'out_disc')}
                ${outRow('qRoots', 'out_roots')}
                ${outRow('qExact', 'out_exact')}
                ${outRow('qFactored', 'out_factored')}
                ${outRow('qVertexForm', 'out_vertex_form')}
                ${outRow('qVertex', 'out_vertex')}
                ${outRow('qAxis', 'out_axis')}
                ${outRow('qYint', 'out_yint')}
                ${outRow('qVieta', 'out_vieta')}
              </tbody>
            </table>
            <p class="small text-muted text-center mt-2 mb-0" id="qOpens"></p>
            <h2 class="h6 mt-3 mb-1">${escapeHtml(tx('work_label'))}</h2>
            <ol class="qe-work" id="qWork" dir="ltr"></ol>
            <svg id="qGraph" class="qe-graph" viewBox="0 0 320 200" role="img" aria-label="${escapeHtml(tx('graph_label'))}"></svg>
          </div>
          <div id="calcNote" class="muted"></div>
        </div>
      </div>
    </div>

    ${renderToolIgSections({ lang: opts.lang, prefix: PREFIX, mode: 'formula', howItemCount: 4, whyChooseItemCount: 4, ruleItemCount: 5, usecaseCount: 4 })}`;

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{ label: tx('ref_a_label'), href: 'https://mathworld.wolfram.com/QuadraticEquation.html' },
			{ label: tx('ref_b_label'), href: 'https://en.wikipedia.org/wiki/Discriminant' },
		],
	});

	/** 前端脚本需要的文案（一次性注入）。 */
	const clientText = {
		natureTwo: tx('nature_two'),
		natureOne: tx('nature_one'),
		natureComplex: tx('nature_complex'),
		factoredNone: tx('factored_none'),
		opensUp: tx('opens_up'),
		opensDown: tx('opens_down'),
		minTpl: tx('min_tpl'),
		maxTpl: tx('max_tpl'),
		vietaTpl: tx('vieta_tpl'),
		linearTpl: tx('linear_tpl'),
		linearNone: tx('linear_none'),
		linearAll: tx('linear_all'),
		errParse: tx('err_parse'),
		note: tx('result_note'),
	};

	const extraBodyHtml = `
  <script>
    (function () {
      /** 本地化文案。 */
      var T = ${JSON.stringify(clientText)};
      /** 精确运算允许的最大整数系数（避免超出安全整数）。 */
      var EXACT_MAX = 1e6;

      var form = document.getElementById('calcForm');
      var aEl = document.getElementById('qA');
      var bEl = document.getElementById('qB');
      var cEl = document.getElementById('qC');
      var decEl = document.getElementById('qDec');
      var previewEl = document.getElementById('qPreview');
      var result = document.getElementById('calcResult');
      var okWrap = document.getElementById('okWrap');
      var noteEl = document.getElementById('calcNote');
      var natureEl = document.getElementById('qNature');
      var opensEl = document.getElementById('qOpens');
      var workEl = document.getElementById('qWork');
      var graphEl = document.getElementById('qGraph');

      /**
       * 最大公约数（非负整数）。
       * @param {number} x
       * @param {number} y
       * @returns {number}
       */
      function gcd(x, y) {
        x = Math.abs(x); y = Math.abs(y);
        while (y) { var t = x % y; x = y; y = t; }
        return x;
      }

      /**
       * 构造约分后的分数（分母恒为正）。
       * @param {number} n 分子
       * @param {number} d 分母（非 0）
       * @returns {{ n: number, d: number }}
       */
      function frac(n, d) {
        if (d < 0) { n = -n; d = -d; }
        var g = gcd(n, d) || 1;
        return { n: n / g, d: d / g };
      }

      /** 分数乘法。 */
      function fMul(x, y) { return frac(x.n * y.n, x.d * y.d); }
      /** 分数加法。 */
      function fAdd(x, y) { return frac(x.n * y.d + y.n * x.d, x.d * y.d); }

      /**
       * 分数转文本：整数直接写，否则 p/q；负号用 −。
       * @param {{ n: number, d: number }} f
       * @returns {string}
       */
      function fStr(f) {
        var s = f.d === 1 ? String(Math.abs(f.n)) : Math.abs(f.n) + '/' + f.d;
        return (f.n < 0 ? '−' : '') + s;
      }

      /**
       * 解析一个十进制数串为分数（最多 9 位小数）；含 e 记数法时返回 null（只做小数近似）。
       * @param {string} s
       * @returns {{ n: number, d: number } | null}
       */
      function decToFrac(s) {
        if (s === '' || s === '+' || s === '-' || s.toLowerCase().indexOf('e') >= 0) return null;
        var v = Number(s);
        if (!Number.isFinite(v)) return null;
        var dot = s.indexOf('.');
        var places = dot < 0 ? 0 : s.length - dot - 1;
        if (places > 9) return null;
        var den = Math.pow(10, places);
        return frac(Math.round(v * den), den);
      }

      /**
       * 解析系数输入：整数、小数（点或逗号）、分数 p/q；空串视为 0。
       * @param {string} raw 原始输入
       * @returns {{ ok: boolean, v?: number, f?: { n: number, d: number } | null, txt?: string }}
       */
      function parseCoef(raw) {
        var s = String(raw).trim().split('−').join('-').split(',').join('.').split(' ').join('');
        if (s === '') return { ok: true, v: 0, f: { n: 0, d: 1 }, txt: '0' };
        var parts = s.split('/');
        if (parts.length > 2) return { ok: false };
        var v0 = Number(parts[0]);
        if (parts[0] === '' || !Number.isFinite(v0)) return { ok: false };
        if (parts.length === 1) return { ok: true, v: v0, f: decToFrac(parts[0]), txt: s };
        var v1 = Number(parts[1]);
        if (parts[1] === '' || !Number.isFinite(v1) || v1 === 0) return { ok: false };
        var f0 = decToFrac(parts[0]);
        var f1 = decToFrac(parts[1]);
        var f = f0 && f1 && f1.n !== 0 ? frac(f0.n * f1.d, f0.d * f1.n) : null;
        return { ok: true, v: v0 / v1, f: f, txt: s };
      }

      /**
       * 小数格式化：按所选位数四舍五入并去掉多余 0；负号用 −。
       * @param {number} n
       * @returns {string}
       */
      function fmt(n) {
        if (!Number.isFinite(n)) return '—';
        var d = Number(decEl.value) || 4;
        var a = Math.abs(n);
        var s;
        if (a !== 0 && (a >= 1e12 || a < Math.pow(10, -d))) s = a.toExponential(Math.max(2, d - 1)).replace('e', ' × 10^').replace('^+', '^');
        else s = String(+a.toFixed(d));
        if (s === '0') return '0';
        return (n < 0 ? '−' : '') + s;
      }

      /**
       * 过程行里的数字：负数加括号（用于代入）。
       * @param {number} n
       * @returns {string}
       */
      function par(n) {
        return n < 0 ? '(' + fmt(n) + ')' : fmt(n);
      }

      /**
       * 生成方程预览文本（如 2x² + 3x − 2 = 0）。
       * @param {string[]} tx 三个系数的显示文本
       * @param {number[]} vs 三个系数数值
       * @returns {string}
       */
      function equationText(tx, vs) {
        var terms = [];
        var pow = ['x²', 'x', ''];
        for (var i = 0; i < 3; i++) {
          if (vs[i] === 0) continue;
          var neg = vs[i] < 0;
          var body = tx[i].charAt(0) === '-' || tx[i].charAt(0) === '+' ? tx[i].slice(1) : tx[i];
          if (body.indexOf('/') >= 0 && pow[i]) body = '(' + body + ')';
          if (pow[i] && Math.abs(vs[i]) === 1 && body.indexOf('/') < 0) body = '';
          var piece = body + pow[i];
          if (!terms.length) terms.push((neg ? '−' : '') + piece);
          else terms.push((neg ? ' − ' : ' + ') + piece);
        }
        return (terms.length ? terms.join('') : '0') + ' = 0';
      }

      /** 刷新方程预览。 */
      function refreshPreview() {
        var ps = [aEl, bEl, cEl].map(function (el) { return parseCoef(el.value); });
        var allEmpty = [aEl, bEl, cEl].every(function (el) { return el.value.trim() === ''; });
        if (allEmpty || ps.some(function (p) { return !p.ok; })) { previewEl.textContent = 'ax² + bx + c = 0'; return; }
        previewEl.textContent = equationText(ps.map(function (p) { return p.txt; }), ps.map(function (p) { return p.v; }));
      }

      /**
       * 把 n 拆成 k² × m（m 无平方因子）。
       * @param {number} n 非负整数
       * @returns {{ k: number, m: number }}
       */
      function sqrtSplit(n) {
        var k = 1, m = n;
        for (var i = 2; i * i <= m; i++) {
          while (m % (i * i) === 0) { m /= i * i; k *= i; }
        }
        return { k: k, m: m };
      }

      /**
       * 精确解：系数化为互素整数 A、B、C 后求根式 / 分数 / 复数形式与因式分解。
       * @param {Array<{ n: number, d: number }>} fs 三个系数的分数
       * @returns {Object|null} 超出范围时为 null
       */
      function exactSolve(fs) {
        var L = fs.reduce(function (acc, f) { return acc / gcd(acc, f.d) * f.d; }, 1);
        var ints = fs.map(function (f) { return f.n * (L / f.d); });
        var g = ints.reduce(function (acc, v) { return gcd(acc, v); }, 0) || 1;
        if (ints[0] < 0) g = -g;
        var A = ints[0] / g, B = ints[1] / g, C = ints[2] / g;
        if ([A, B, C].some(function (v) { return Math.abs(v) > EXACT_MAX; })) return null;
        /** 原多项式 = scale × (Ax² + Bx + C)。 */
        var scale = frac(g, L);
        var D = B * B - 4 * A * C;
        var out = { A: A, B: B, C: C, D: D, scale: scale, roots: '', factored: '', rational: false };
        if (D === 0) {
          var r = frac(-B, 2 * A);
          out.roots = 'x = ' + fStr(r);
          out.rational = true;
          out.factored = factorText(scale, [r, r]);
          return out;
        }
        var sp = sqrtSplit(Math.abs(D));
        if (D > 0 && sp.m === 1) {
          var r1 = frac(-B + sp.k, 2 * A), r2 = frac(-B - sp.k, 2 * A);
          out.roots = 'x₁ = ' + fStr(r1) + ', x₂ = ' + fStr(r2);
          out.rational = true;
          out.factored = factorText(scale, [r1, r2]);
          return out;
        }
        var gg = gcd(gcd(B, sp.k), 2 * A) || 1;
        var P = -B / gg, K = sp.k / gg, Q = (2 * A) / gg;
        if (Q < 0) { P = -P; Q = -Q; }
        /** 根式部分：实数写 K√m；复数按惯例把 i 放在根号前（2i、i√3、2i√3），避免误读成 √(3i)。 */
        var rad = D < 0
          ? (K === 1 ? '' : String(K)) + 'i' + (sp.m === 1 ? '' : '√' + sp.m)
          : (K === 1 ? '' : String(K)) + (sp.m === 1 ? '' : '√' + sp.m);
        if (rad === '') rad = '1';
        var core = (P === 0 ? '' : fStr({ n: P, d: 1 }) + ' ') + '± ' + rad;
        out.roots = 'x = ' + (Q === 1 ? core : '(' + core + ') / ' + Q);
        return out;
      }

      /**
       * 由有理根生成因式分解文本：scale × (q₁x − p₁)(q₂x − p₂)。
       * @param {{ n: number, d: number }} scale 前置常数
       * @param {Array<{ n: number, d: number }>} roots 两个有理根
       * @returns {string}
       */
      function factorText(scale, roots) {
        var factors = roots.map(function (r) {
          var lead = r.d === 1 ? 'x' : r.d + 'x';
          if (r.n === 0) return lead === 'x' ? 'x' : '(' + lead + ')';
          return '(' + lead + (r.n > 0 ? ' − ' : ' + ') + Math.abs(r.n) + ')';
        });
        var body;
        if (factors[0] === factors[1]) body = factors[0] === 'x' ? 'x²' : factors[0] + '²';
        else body = factors.join('');
        if (scale.n === scale.d) return body;
        if (scale.n === -scale.d) return '−' + body;
        var c = fStr(scale);
        return (scale.d === 1 ? c : '(' + c + ')') + body;
      }

      /**
       * 绘制抛物线 SVG（标出实根与顶点）。
       * @param {number} a
       * @param {number} b
       * @param {number} c
       * @param {number[]} realRoots 实根（可空）
       * @param {number} h 顶点横坐标
       * @param {number} k 顶点纵坐标
       */
      function drawGraph(a, b, c, realRoots, h, k) {
        var W = 320, H = 200, pad = 12;
        var span = realRoots.length === 2 ? Math.abs(realRoots[0] - realRoots[1]) / 2 : Math.sqrt(Math.abs(k / a));
        span = Math.max(span, 1) * 1.8;
        var x0 = h - span, x1 = h + span;
        var pts = [];
        var ymin = Math.min(0, k), ymax = Math.max(0, k);
        for (var i = 0; i <= 80; i++) {
          var x = x0 + ((x1 - x0) * i) / 80;
          var y = a * x * x + b * x + c;
          pts.push([x, y]);
          if (y < ymin) ymin = y;
          if (y > ymax) ymax = y;
        }
        if (ymax - ymin < 1e-9) { ymax += 1; ymin -= 1; }
        var yp = (ymax - ymin) * 0.08;
        ymin -= yp; ymax += yp;
        /** 数据坐标 → SVG 坐标。 */
        function sx(x) { return pad + ((x - x0) / (x1 - x0)) * (W - 2 * pad); }
        function sy(y) { return H - pad - ((y - ymin) / (ymax - ymin)) * (H - 2 * pad); }
        var svg = '';
        if (ymin <= 0 && ymax >= 0) svg += '<line x1="0" x2="' + W + '" y1="' + sy(0).toFixed(1) + '" y2="' + sy(0).toFixed(1) + '" stroke="#adb5bd" stroke-width="1"/>';
        if (x0 <= 0 && x1 >= 0) svg += '<line y1="0" y2="' + H + '" x1="' + sx(0).toFixed(1) + '" x2="' + sx(0).toFixed(1) + '" stroke="#adb5bd" stroke-width="1"/>';
        svg += '<line y1="0" y2="' + H + '" x1="' + sx(h).toFixed(1) + '" x2="' + sx(h).toFixed(1) + '" stroke="#ced4da" stroke-width="1" stroke-dasharray="4 4"/>';
        svg += '<polyline fill="none" stroke="#0d6efd" stroke-width="2" points="' + pts.map(function (p) { return sx(p[0]).toFixed(1) + ',' + sy(p[1]).toFixed(1); }).join(' ') + '"/>';
        realRoots.forEach(function (r) { svg += '<circle cx="' + sx(r).toFixed(1) + '" cy="' + sy(0).toFixed(1) + '" r="4" fill="#dc3545"/>'; });
        svg += '<circle cx="' + sx(h).toFixed(1) + '" cy="' + sy(k).toFixed(1) + '" r="4" fill="#212529"/>';
        graphEl.innerHTML = svg;
      }

      /**
       * 设置结果表某行的文本；空文本则隐藏该行。
       * @param {string} id 单元格 id
       * @param {string} text 文本
       */
      function setRow(id, text) {
        document.getElementById(id).textContent = text;
        document.getElementById(id + 'Row').style.display = text ? '' : 'none';
      }

      /**
       * 往有序列表填入步骤。
       * @param {string[]} items
       */
      function setWork(items) {
        workEl.textContent = '';
        items.forEach(function (s) {
          var li = document.createElement('li');
          li.textContent = s;
          workEl.appendChild(li);
        });
      }

      /** 隐藏二次方程专属的结果行与图（用于一次方程情形）。 */
      function hideQuadraticParts() {
        ['qDisc', 'qRoots', 'qExact', 'qFactored', 'qVertexForm', 'qVertex', 'qAxis', 'qYint', 'qVieta'].forEach(function (id) { setRow(id, ''); });
        opensEl.textContent = '';
        graphEl.innerHTML = '';
        graphEl.style.display = 'none';
      }

      /** 执行求解并刷新结果区。 */
      function runCalc() {
        refreshPreview();
        var ps = [aEl, bEl, cEl].map(function (el) { return parseCoef(el.value); });
        result.style.display = 'block';
        if (ps.some(function (p) { return !p.ok; }) || [aEl, bEl, cEl].every(function (el) { return el.value.trim() === ''; })) {
          okWrap.style.display = 'none';
          noteEl.textContent = T.errParse;
          return false;
        }
        var a = ps[0].v, b = ps[1].v, c = ps[2].v;
        okWrap.style.display = '';
        noteEl.textContent = T.note;
        var work = ['a = ' + fmt(a) + ', b = ' + fmt(b) + ', c = ' + fmt(c)];

        if (a === 0) {
          hideQuadraticParts();
          if (b === 0) {
            natureEl.textContent = c === 0 ? T.linearAll : T.linearNone;
          } else {
            var xl = -c / b;
            var fl = ps[1].f && ps[2].f ? fStr(fMul(frac(-ps[2].f.n, ps[2].f.d), frac(ps[1].f.d, ps[1].f.n))) : '';
            natureEl.textContent = T.linearTpl.split('{x}').join(fmt(xl) + (fl && fl !== fmt(xl) ? ' (' + fl + ')' : ''));
            work.push('x = −c ÷ b = ' + fmt(-c) + ' ÷ ' + par(b) + ' = ' + fmt(xl));
          }
          setWork(work);
          return true;
        }

        graphEl.style.display = '';
        /** 能精确时先做精确解，判别式符号以精确值为准（避免 0.04 − 0.04 的浮点残差被当成两个不同实根）。 */
        var fs = ps.map(function (p) { return p.f; });
        var ex = fs.every(function (f) { return f; }) ? exactSolve(fs) : null;
        var D = b * b - 4 * a * c;
        if (ex && ex.D === 0) D = 0;
        else if (ex && ex.D < 0 && D >= 0) D = -Math.abs(D) || -Number.MIN_VALUE;
        else if (ex && ex.D > 0 && D <= 0) D = Math.abs(D) || Number.MIN_VALUE;
        var h = -b / (2 * a);
        var k = c - (b * b) / (4 * a);
        var realRoots = [];
        work.push('Δ = b² − 4ac = ' + par(b) + '² − 4 × ' + par(a) + ' × ' + par(c) + ' = ' + fmt(b * b) + ' ' + (4 * a * c < 0 ? '+ ' + fmt(-4 * a * c) : '− ' + fmt(4 * a * c)) + ' = ' + fmt(D));
        var rootsTxt;
        if (D > 0) {
          var sq = Math.sqrt(D);
          var q = -0.5 * (b + (b < 0 ? -sq : sq));
          var x1 = q / a, x2 = q !== 0 ? c / q : -x1;
          if (x1 < x2) { var tmp = x1; x1 = x2; x2 = tmp; }
          realRoots = [x1, x2];
          natureEl.textContent = T.natureTwo;
          work.push('√Δ = √' + fmt(D) + ' = ' + fmt(sq));
          work.push('x = (−b ± √Δ) ÷ (2a) = (' + fmt(-b) + ' ± ' + fmt(sq) + ') ÷ ' + par(2 * a));
          work.push('x₁ = ' + fmt(x1) + ', x₂ = ' + fmt(x2));
          rootsTxt = 'x₁ = ' + fmt(x1) + ', x₂ = ' + fmt(x2);
        } else if (D === 0) {
          realRoots = [h];
          natureEl.textContent = T.natureOne;
          work.push('x = −b ÷ (2a) = ' + fmt(-b) + ' ÷ ' + par(2 * a) + ' = ' + fmt(h));
          rootsTxt = 'x₁ = x₂ = ' + fmt(h);
        } else {
          var im = Math.sqrt(-D) / (2 * Math.abs(a));
          natureEl.textContent = T.natureComplex;
          work.push('√Δ = √(' + fmt(D) + ') = ' + fmt(Math.sqrt(-D)) + 'i');
          work.push('x = (−b ± √Δ) ÷ (2a) = (' + fmt(-b) + ' ± ' + fmt(Math.sqrt(-D)) + 'i) ÷ ' + par(2 * a));
          rootsTxt = 'x = ' + (h === 0 ? '' : fmt(h) + ' ') + '± ' + fmt(im) + 'i';
          work.push(rootsTxt);
        }
        setRow('qDisc', 'Δ = ' + fmt(D));
        setRow('qRoots', rootsTxt);

        setRow('qExact', ex ? ex.roots : '');
        setRow('qFactored', ex ? (ex.rational ? ex.factored + ' = 0' : (D < 0 ? '' : T.factoredNone)) : '');

        /** 顶点 / 顶点式 / 韦达：能精确时用分数，否则用小数。 */
        var hTxt = fmt(h), kTxt = fmt(k), aTxt = fmt(a), sumTxt = fmt(-b / a), prodTxt = fmt(c / a);
        if (fs.every(function (f) { return f; })) {
          var fa = fs[0], fb = fs[1], fc = fs[2];
          var fh = frac(-fb.n * fa.d, 2 * fb.d * fa.n);
          var fk = fAdd(fc, frac(-fb.n * fb.n * fa.d, 4 * fb.d * fb.d * fa.n));
          if ([fh.n, fh.d, fk.n, fk.d].every(function (v) { return Math.abs(v) < 1e12; })) {
            /** 用精确值覆盖浮点 h、k（例如 0.5x² + 0.2x + 0.02 的 k 应为 0，而不是 −3.5e-18）。 */
            h = fh.n / fh.d;
            k = fk.n / fk.d;
            hTxt = fStr(fh); kTxt = fStr(fk); aTxt = fStr(fa);
            sumTxt = fStr(frac(-fb.n * fa.d, fb.d * fa.n));
            prodTxt = fStr(frac(fc.n * fa.d, fc.d * fa.n));
          }
        }
        var aLead = aTxt === '1' ? '' : aTxt === '−1' ? '−' : (aTxt.indexOf('/') >= 0 ? '(' + aTxt + ')' : aTxt);
        var hPart = h === 0 ? 'x²' : '(x ' + (h > 0 ? '− ' + hTxt : '+ ' + hTxt.replace('−', '')) + ')²';
        var kPart = k === 0 ? '' : (k > 0 ? ' + ' + kTxt : ' − ' + kTxt.replace('−', ''));
        setRow('qVertexForm', 'y = ' + aLead + hPart + kPart);
        setRow('qVertex', '(' + hTxt + ', ' + kTxt + ')' + (hTxt !== fmt(h) || kTxt !== fmt(k) ? ' ≈ (' + fmt(h) + ', ' + fmt(k) + ')' : ''));
        setRow('qAxis', 'x = ' + hTxt);
        setRow('qYint', '(0, ' + (fs[2] ? fStr(fs[2]) : fmt(c)) + ')');
        setRow('qVieta', T.vietaTpl.split('{sum}').join(sumTxt).split('{prod}').join(prodTxt));
        opensEl.textContent = (a > 0 ? T.opensUp : T.opensDown) + ' ' + (a > 0 ? T.minTpl : T.maxTpl).split('{k}').join(kTxt).split('{h}').join(hTxt);
        setWork(work);
        drawGraph(a, b, c, realRoots, h, k);
        return true;
      }

      /** 样例：2x² + 3x − 2 = 0 → Δ = 25，x = 1/2 与 −2，(2x − 1)(x + 2)。 */
      function loadSample() {
        aEl.value = '2';
        bEl.value = '3';
        cEl.value = '-2';
        decEl.value = '4';
        runCalc();
      }

      /** 清空：系数与结果；小数位恢复默认；不重载样例。 */
      function clearAll() {
        form.reset();
        decEl.value = '4';
        refreshPreview();
        result.style.display = 'none';
      }

      [aEl, bEl, cEl].forEach(function (el) { el.addEventListener('input', refreshPreview); });
      decEl.addEventListener('change', function () { if (result.style.display !== 'none') runCalc(); });
      form.addEventListener('submit', function (e) { e.preventDefault(); runCalc(); });
      document.getElementById('btnSample').addEventListener('click', loadSample);
      document.getElementById('btnClear').addEventListener('click', clearAll);
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('how-to-calculate-quadratic-equation');
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
