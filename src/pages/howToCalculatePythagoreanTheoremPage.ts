/**
 * 勾股定理计算器：在直角三角形中求缺失边 a / b / c，并给出平方验算、面积、周长、斜边上的高。
 * 若三边成比例于常见勾股数组（3-4-5、5-12-13 等），额外标注。
 * slug: how-to-calculate-pythagorean-theorem（见 work-tasks/how-to-calculate-pythagorean-theorem/02-tool-info.md）。
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
const PREFIX = 'tool_pythagorean';

/** 以逗号作小数点的页面语言。 */
const DECIMAL_COMMA_LANGS: string[] = ['de', 'es', 'pt', 'fr', 'ru', 'id'];

/**
 * 常见本原勾股数组（升序 [a,b,c]）。
 * 结果若为这些数组的正整数倍，则标为勾股数组。
 */
const PRIMITIVE_TRIPLES: Array<[number, number, number]> = [
	[3, 4, 5],
	[5, 12, 13],
	[8, 15, 17],
	[7, 24, 25],
	[20, 21, 29],
	[12, 35, 37],
	[9, 40, 41],
	[28, 45, 53],
	[11, 60, 61],
	[33, 56, 65],
	[16, 63, 65],
	[36, 77, 85],
	[39, 80, 89],
	[48, 55, 73],
];

/** 为路径加上语言前缀（默认语无前缀）。 */
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * 渲染 how-to-calculate-pythagorean-theorem 工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 * @returns 完整页面 HTML
 */
export const renderHowToCalculatePythagoreanTheoremPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 读取本工具键（自动拼前缀）。 */
	const tx = (key: string) => t(opts.lang, `${PREFIX}_${key}` as keyof typeof import('../site/i18n/en').default);

	const toolPath = '/tools/how-to-calculate-pythagorean-theorem';
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
			currentSlug: 'how-to-calculate-pythagorean-theorem',
			currentAnchor: '#pythagorean-theorem',
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
    .py-main-label { text-align:center; color:#495057; font-size:.95rem; }
    .py-main { font-size:1.6rem; font-weight:600; text-align:center; margin:.15rem 0 .5rem; font-variant-numeric:tabular-nums; }
    .py-row { color:#495057; font-size:.92rem; margin-top:.45rem; font-variant-numeric:tabular-nums; }
    .py-row strong { color:#343a40; }
    .py-h { font-size:1rem; font-weight:600; margin:1rem 0 .35rem; }
    .py-steps { margin:0; padding-inline-start:1.3rem; font-size:.92rem; color:#343a40; }
    .py-steps li { margin-bottom:.35rem; }
    .py-svg-wrap { display:flex; justify-content:center; margin:0.75rem 0 0.25rem; }
    .py-svg-wrap svg { max-width:220px; width:100%; height:auto; }
    .result .muted { color:#6c757d; font-size:.9rem; margin-top:.75rem; }
    .result .muted.py-err { color:#b02a37; font-weight:500; margin-top:0; }
  </style>`;

	const contentHtml = `
    <div id="pythagorean-theorem" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(tx('title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <form id="calcForm" novalidate>
          <div class="form-row2">
            <div class="form-group">
              <label class="form-label" for="pySolve">${escapeHtml(tx('solve_label'))}</label>
              <select id="pySolve" class="input-lg">
                <option value="c" selected>${escapeHtml(tx('solve_c'))}</option>
                <option value="a">${escapeHtml(tx('solve_a'))}</option>
                <option value="b">${escapeHtml(tx('solve_b'))}</option>
              </select>
            </div>
          </div>
          <div class="form-row2">
            <div class="form-group">
              <label class="form-label" for="pyK1" id="pyK1Lab">${escapeHtml(tx('leg_a'))}</label>
              <input id="pyK1" class="input-lg" type="text" inputmode="decimal" autocomplete="off" placeholder="${escapeHtml(tx('ph_leg'))}">
            </div>
            <div class="form-group">
              <label class="form-label" for="pyK2" id="pyK2Lab">${escapeHtml(tx('leg_b'))}</label>
              <input id="pyK2" class="input-lg" type="text" inputmode="decimal" autocomplete="off" placeholder="${escapeHtml(tx('ph_leg'))}">
            </div>
          </div>
          <span class="form-hint">${escapeHtml(tx('hint'))}</span>
          <div class="btn-row">
            <button type="submit" id="pyBtnCalc" class="btn btn-primary">${escapeHtml(tx('calculate'))}</button>
            <button type="button" id="pyBtnSample" class="btn btn-outline-secondary">${escapeHtml(tx('sample'))}</button>
            <button type="button" id="pyBtnClear" class="btn btn-outline-secondary">${escapeHtml(tx('clear'))}</button>
          </div>
        </form>
        <div id="calcResult" class="result" style="display:none" aria-live="polite">
          <div id="pyMainLabel" class="py-main-label"></div>
          <div id="pyMain" class="py-main"></div>
          <div class="py-svg-wrap" id="pySvgWrap" hidden></div>
          <div id="pyRows"></div>
          <div id="pyStepsWrap">
            <div class="py-h">${escapeHtml(tx('steps_title'))}</div>
            <ol id="pySteps" class="py-steps"></ol>
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
				label: tx('ref_py_label'),
				href: 'https://en.wikipedia.org/wiki/Pythagorean_theorem',
			},
			{
				label: tx('ref_rt_label'),
				href: 'https://en.wikipedia.org/wiki/Right_triangle',
			},
		],
	});

	/** 前端脚本需要的文案（一次性注入）。 */
	const clientText = {
		lang: opts.lang,
		decComma: DECIMAL_COMMA_LANGS.includes(opts.lang),
		legA: tx('leg_a'),
		legB: tx('leg_b'),
		hypC: tx('hyp_c'),
		phLeg: tx('ph_leg'),
		phHyp: tx('ph_hyp'),
		outA: tx('out_a'),
		outB: tx('out_b'),
		outC: tx('out_c'),
		rowCheck: tx('row_check'),
		rowArea: tx('row_area'),
		rowPerim: tx('row_perim'),
		rowAlt: tx('row_alt'),
		rowTriple: tx('row_triple'),
		tripleTpl: tx('triple_tpl'),
		tripleScaledTpl: tx('triple_scaled_tpl'),
		stepC: tx('step_c_tpl'),
		stepA: tx('step_a_tpl'),
		stepB: tx('step_b_tpl'),
		stepArea: tx('step_area_tpl'),
		errNum: tx('err_num'),
		errHyp: tx('err_hyp'),
		noteEdu: tx('result_note'),
	};

	const extraBodyHtml = `
  <script>
    (function () {
      /** 表单与输入控件。 */
      var form = document.getElementById('calcForm');
      var solveEl = document.getElementById('pySolve');
      var k1El = document.getElementById('pyK1');
      var k2El = document.getElementById('pyK2');
      var k1Lab = document.getElementById('pyK1Lab');
      var k2Lab = document.getElementById('pyK2Lab');
      /** 结果区。 */
      var result = document.getElementById('calcResult');
      var mainLabelEl = document.getElementById('pyMainLabel');
      var mainEl = document.getElementById('pyMain');
      var svgWrap = document.getElementById('pySvgWrap');
      var rowsEl = document.getElementById('pyRows');
      var stepsWrap = document.getElementById('pyStepsWrap');
      var stepsEl = document.getElementById('pySteps');
      var noteEl = document.getElementById('calcNote');
      /** 本地化文案。 */
      var T = ${JSON.stringify(clientText)};
      /** 本原勾股数组。 */
      var TRIPLES = ${JSON.stringify(PRIMITIVE_TRIPLES)};
      /** 不换行空格。 */
      var NBSP = String.fromCharCode(160);
      /** 样例轮换。 */
      var SAMPLES = [
        { solve: 'c', k1: '3', k2: '4' },
        { solve: 'c', k1: '5', k2: '12' },
        { solve: 'a', k1: '8', k2: '10' },
        { solve: 'c', k1: '6', k2: '8' }
      ];
      var sampleIndex = 0;
      var nfCache = {};

      /**
       * 取本地化数字格式器（拉丁数字）。
       * @param {string} key 缓存键
       * @param {Object} o 选项
       * @returns {Intl.NumberFormat}
       */
      function nfGet(key, o) {
        if (!nfCache[key]) nfCache[key] = new Intl.NumberFormat(T.lang + '-u-nu-latn', o);
        return nfCache[key];
      }

      /**
       * 格式化长度（最多 6 位小数，去掉末尾零）。
       * @param {number} v 数值
       * @returns {string}
       */
      function nf(v) {
        return nfGet('len', { maximumFractionDigits: 6, minimumFractionDigits: 0 }).format(v);
      }

      /**
       * 格式化面积等（最多 4 位小数）。
       * @param {number} v 数值
       * @returns {string}
       */
      function nf4(v) {
        return nfGet('a4', { maximumFractionDigits: 4, minimumFractionDigits: 0 }).format(v);
      }

      /** HTML 转义。 */
      function escapeH(s) {
        return String(s).replace(/[&<>"]/g, function (ch) {
          return ch === '&' ? '&amp;' : ch === '<' ? '&lt;' : ch === '>' ? '&gt;' : '&quot;';
        });
      }

      /** 模板替换。 */
      function fill(tpl, map) {
        var s = String(tpl || '');
        Object.keys(map).forEach(function (k) { s = s.split('{' + k + '}').join(String(map[k])); });
        return s;
      }

      /** HTML 模板。 */
      function fillH(tpl, map) {
        return fill(escapeH(tpl), map);
      }

      /**
       * 解析正数（支持逗号小数）。
       * @param {string} raw 原始文本
       * @returns {number|null}
       */
      function parsePos(raw) {
        var s = String(raw || '').split(NBSP).join('').split(' ').join('').split('−').join('-');
        if (!s) return null;
        var hasDot = s.indexOf('.') >= 0;
        var hasComma = s.indexOf(',') >= 0;
        if (hasDot && hasComma) {
          s = T.decComma ? s.split('.').join('').replace(',', '.') : s.split(',').join('');
        } else if (hasComma) {
          s = T.decComma || !/^[+-]?[0-9]{1,3}(,[0-9]{3})+$/.test(s) ? s.replace(',', '.') : s.split(',').join('');
        }
        var v = Number(s);
        return isFinite(v) && v > 0 ? v : null;
      }

      /**
       * 最大公约数（正整数）。
       * @param {number} x
       * @param {number} y
       * @returns {number}
       */
      function gcd(x, y) {
        x = Math.round(Math.abs(x));
        y = Math.round(Math.abs(y));
        while (y) { var t = x % y; x = y; y = t; }
        return x || 1;
      }

      /**
       * 若三边（在容差内）为整数勾股数组，返回 {a,b,c,k,prim}；否则 null。
       * @param {number} a 直角边
       * @param {number} b 直角边
       * @param {number} c 斜边
       * @returns {Object|null}
       */
      function matchTriple(a, b, c) {
        var legs = [a, b].sort(function (x, y) { return x - y; });
        var aa = legs[0];
        var bb = legs[1];
        if (Math.abs(aa * aa + bb * bb - c * c) > 1e-6) return null;
        var near = [aa, bb, c].every(function (v) { return Math.abs(v - Math.round(v)) < 1e-6; });
        if (!near) return null;
        var A = Math.round(aa);
        var B = Math.round(bb);
        var C = Math.round(c);
        var g = gcd(gcd(A, B), C);
        var pA = A / g;
        var pB = B / g;
        var pC = C / g;
        for (var i = 0; i < TRIPLES.length; i++) {
          var t = TRIPLES[i];
          if (t[0] === pA && t[1] === pB && t[2] === pC) {
            return { a: A, b: B, c: C, k: g, prim: t[0] + '-' + t[1] + '-' + t[2] };
          }
        }
        if (A * A + B * B === C * C) {
          return { a: A, b: B, c: C, k: g, prim: pA + '-' + pB + '-' + pC };
        }
        return null;
      }

      /**
       * 画简化直角三角形示意图（标注 a、b、c）。
       * @param {number} a 直角边 a
       * @param {number} b 直角边 b
       * @param {number} c 斜边
       * @returns {string} SVG HTML
       */
      function drawSvg(a, b, c) {
        var W = 220;
        var H = 150;
        var pad = 28;
        var scale = Math.min((W - 2 * pad) / b, (H - 2 * pad) / a);
        var bw = Math.max(40, b * scale);
        var ah = Math.max(40, a * scale);
        var x0 = pad;
        var y0 = H - pad;
        var x1 = x0 + bw;
        var y1 = y0;
        var x2 = x0;
        var y2 = y0 - ah;
        var sq = 12;
        return '<svg viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-hidden="true">' +
          '<polygon points="' + x0 + ',' + y0 + ' ' + x1 + ',' + y1 + ' ' + x2 + ',' + y2 + '" fill="#e7f1ff" stroke="#0d6efd" stroke-width="2"/>' +
          '<path d="M ' + x0 + ' ' + (y0 - sq) + ' L ' + (x0 + sq) + ' ' + (y0 - sq) + ' L ' + (x0 + sq) + ' ' + y0 + '" fill="none" stroke="#0d6efd" stroke-width="1.5"/>' +
          '<text x="' + (x0 - 14) + '" y="' + ((y0 + y2) / 2) + '" font-size="13" fill="#343a40" text-anchor="middle">a</text>' +
          '<text x="' + ((x0 + x1) / 2) + '" y="' + (y0 + 16) + '" font-size="13" fill="#343a40" text-anchor="middle">b</text>' +
          '<text x="' + ((x1 + x2) / 2 + 8) + '" y="' + ((y1 + y2) / 2) + '" font-size="13" fill="#343a40" text-anchor="middle">c</text>' +
          '</svg>';
      }

      /** 追加结果行。 */
      function addRow(html, label, value) {
        return html + '<div class="py-row"><strong>' + escapeH(label) + ':</strong> ' + value + '</div>';
      }

      /** 按求解目标更新两个输入框的标签与占位。 */
      function syncSolve() {
        var s = solveEl.value;
        if (s === 'c') {
          k1Lab.textContent = T.legA;
          k2Lab.textContent = T.legB;
          k1El.placeholder = T.phLeg;
          k2El.placeholder = T.phLeg;
        } else if (s === 'a') {
          k1Lab.textContent = T.legB;
          k2Lab.textContent = T.hypC;
          k1El.placeholder = T.phLeg;
          k2El.placeholder = T.phHyp;
        } else {
          k1Lab.textContent = T.legA;
          k2Lab.textContent = T.hypC;
          k1El.placeholder = T.phLeg;
          k2El.placeholder = T.phHyp;
        }
      }

      /** 显示错误。 */
      function showError(msg) {
        result.style.display = 'block';
        mainLabelEl.textContent = '';
        mainEl.textContent = '';
        svgWrap.hidden = true;
        svgWrap.innerHTML = '';
        rowsEl.innerHTML = '';
        stepsEl.innerHTML = '';
        stepsWrap.style.display = 'none';
        noteEl.className = 'muted py-err';
        noteEl.textContent = msg;
      }

      /** 求解并刷新。 */
      function run() {
        var solve = solveEl.value;
        var k1 = parsePos(k1El.value);
        var k2 = parsePos(k2El.value);
        if (k1 == null || k2 == null) {
          showError(T.errNum);
          return;
        }
        var a;
        var b;
        var c;
        var steps = [];
        if (solve === 'c') {
          a = k1;
          b = k2;
          c = Math.sqrt(a * a + b * b);
          steps.push(fillH(T.stepC, { a: escapeH(nf(a)), b: escapeH(nf(b)), a2: escapeH(nf(a * a)), b2: escapeH(nf(b * b)), sum: escapeH(nf(a * a + b * b)), c: escapeH(nf(c)) }));
          mainLabelEl.textContent = T.outC;
        } else if (solve === 'a') {
          b = k1;
          c = k2;
          if (!(c > b)) {
            showError(T.errHyp);
            return;
          }
          a = Math.sqrt(c * c - b * b);
          steps.push(fillH(T.stepA, { b: escapeH(nf(b)), c: escapeH(nf(c)), c2: escapeH(nf(c * c)), b2: escapeH(nf(b * b)), diff: escapeH(nf(c * c - b * b)), a: escapeH(nf(a)) }));
          mainLabelEl.textContent = T.outA;
        } else {
          a = k1;
          c = k2;
          if (!(c > a)) {
            showError(T.errHyp);
            return;
          }
          b = Math.sqrt(c * c - a * a);
          steps.push(fillH(T.stepB, { a: escapeH(nf(a)), c: escapeH(nf(c)), c2: escapeH(nf(c * c)), a2: escapeH(nf(a * a)), diff: escapeH(nf(c * c - a * a)), b: escapeH(nf(b)) }));
          mainLabelEl.textContent = T.outB;
        }
        if (!(a > 0) || !(b > 0) || !(c > 0) || !isFinite(a) || !isFinite(b) || !isFinite(c)) {
          showError(T.errNum);
          return;
        }
        var area = (a * b) / 2;
        var peri = a + b + c;
        var alt = (a * b) / c;
        var check = escapeH(nf(a) + '² + ' + nf(b) + '² = ' + nf(a * a) + ' + ' + nf(b * b) + ' = ' + nf(a * a + b * b) + ' = ' + nf(c) + '²');
        var rows = '';
        rows = addRow(rows, T.rowCheck, check);
        rows = addRow(rows, T.rowArea, escapeH(nf4(area)));
        rows = addRow(rows, T.rowPerim, escapeH(nf(peri)));
        rows = addRow(rows, T.rowAlt, escapeH(nf(alt)));
        var trip = matchTriple(a, b, c);
        if (trip) {
          var tripText = trip.k === 1
            ? fill(T.tripleTpl, { t: trip.prim })
            : fill(T.tripleScaledTpl, { t: trip.prim, k: String(trip.k), a: String(trip.a), b: String(trip.b), c: String(trip.c) });
          rows = addRow(rows, T.rowTriple, escapeH(tripText));
        }
        steps.push(fillH(T.stepArea, { a: escapeH(nf(a)), b: escapeH(nf(b)), area: escapeH(nf4(area)) }));

        mainEl.textContent = nf(solve === 'c' ? c : solve === 'a' ? a : b);
        svgWrap.innerHTML = drawSvg(a, b, c);
        svgWrap.hidden = false;
        rowsEl.innerHTML = rows;
        stepsEl.innerHTML = steps.map(function (s) { return '<li>' + s + '</li>'; }).join('');
        stepsWrap.style.display = '';
        noteEl.className = 'muted';
        noteEl.textContent = T.noteEdu;
        result.style.display = 'block';
      }

      /** 样例小数点本地化。 */
      function sampleVal(s) {
        return T.decComma ? String(s || '').replace('.', ',') : String(s || '');
      }

      /** 加载样例。 */
      function loadSample() {
        var s = SAMPLES[sampleIndex % SAMPLES.length];
        sampleIndex += 1;
        solveEl.value = s.solve;
        k1El.value = sampleVal(s.k1);
        k2El.value = sampleVal(s.k2);
        syncSolve();
        run();
      }

      /** 清空。 */
      function clearAll() {
        solveEl.value = 'c';
        k1El.value = '';
        k2El.value = '';
        syncSolve();
        result.style.display = 'none';
        k1El.focus();
      }

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        run();
      });
      solveEl.addEventListener('change', function () {
        syncSolve();
        result.style.display = 'none';
      });
      document.getElementById('pyBtnSample').addEventListener('click', loadSample);
      document.getElementById('pyBtnClear').addEventListener('click', clearAll);
      syncSolve();
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('how-to-calculate-pythagorean-theorem');
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
