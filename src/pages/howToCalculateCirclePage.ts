/**
 * 圆计算器：已知半径、直径、周长或面积中的任意一个，求出其余三个（纯客户端）。
 * slug: how-to-calculate-circle（见 work-tasks/how-to-calculate-circle/02-tool-info.md）。
 *
 * 交互要点（2026-10-14 改写）：
 * - 已知量：半径 r / 直径 d / 周长 C / 面积 A；长度单位 mm、cm、m、km、in、ft、yd、mi（面积为其平方）；
 * - π 取值：计算器精度（Math.PI）/ 3.14 / 22/7（课本常用近似）；小数位 2 / 4 / 6；
 * - 结果：r、d、C、A 四个量 + 每一步代入过程；已知 r 或 d 且用精确 π 时给出「含 π」形式（如 49π）；
 *   附半圆面积、半圆周长（弧 + 直径）与面积单位换算（cm²、m²、in²、ft²）；
 * - 输入或选项改变即时重算；Clear 不重载样例。
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
const PREFIX = 'tool_circle';

/** 长度单位：[代码, 显示, 换算到 m 的系数]。 */
const LENGTH_UNITS: Array<[string, string, number]> = [
	['mm', 'mm', 0.001],
	['cm', 'cm', 0.01],
	['m', 'm', 1],
	['km', 'km', 1000],
	['in', 'in', 0.0254],
	['ft', 'ft', 0.3048],
	['yd', 'yd', 0.9144],
	['mi', 'mi', 1609.344],
];

/** 面积换算表的目标单位：[显示, 1 单位对应的 m²]。 */
const AREA_TARGETS: Array<[string, number]> = [
	['cm²', 1e-4],
	['m²', 1],
	['in²', 0.00064516],
	['ft²', 0.09290304],
];

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
 * 渲染 how-to-calculate-circle 工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 * @returns 完整页面 HTML
 */
export const renderHowToCalculateCirclePage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 读取本工具键（自动拼前缀）。 */
	const tx = (key: string) => t(opts.lang, `${PREFIX}_${key}` as never);

	const toolPath = '/tools/how-to-calculate-circle';
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
			currentSlug: 'how-to-calculate-circle',
			currentAnchor: '#circle',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	/**
	 * 生成 <option> 列表。
	 * @param choices [值, 显示文本] 数组
	 * @param selected 默认选中值
	 * @returns option HTML
	 */
	const optionsHtml = (choices: Array<[string, string]>, selected: string) =>
		choices
			.map(([value, text]) => `<option value="${value}"${value === selected ? ' selected' : ''}>${escapeHtml(text)}</option>`)
			.join('');

	/** 页内样式。 */
	const extraHeadHtml = `
  <style>
    .tool-card { max-width: var(--content-max); width: 100%; margin: 0 0 1.5rem; }
    .form-label { display:block; margin-bottom:.4rem; color:#495057; font-weight:500 }
    .form-group { margin-bottom:1rem; }
    .cir-grid { display:grid; grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr)); gap:.75rem 1rem; }
    .cir-pair { display:flex; gap:.5rem; }
    .cir-pair input { flex:1 1 auto; min-width:0; }
    .cir-pair select { flex:0 0 auto; width:auto; }
    .btn-row { display:flex; flex-wrap:wrap; gap:.5rem; align-items:center; }
    .result { background:#f8f9fa; padding:1rem; border-radius:8px; margin-top:1rem; }
    .cir-out { width:100%; border-collapse:collapse; font-size:.98rem; }
    .cir-out th, .cir-out td { padding:.35rem .5rem; border-bottom:1px solid #e9ecef; vertical-align:top; }
    .cir-out th { text-align:start; font-weight:500; color:#495057; white-space:nowrap; }
    .cir-out td.val { text-align:end; font-weight:600; font-variant-numeric: tabular-nums; white-space:nowrap; }
    .cir-out td.work { font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size:.86rem; color:#495057; word-break:break-word; }
    .cir-out tr.is-known th, .cir-out tr.is-known td.val { color:#0a58ca; }
    .cir-exact { margin:.75rem 0 0; text-align:center; font-weight:500; }
    .cir-sub { margin:.75rem 0 0; padding-inline-start:1.2rem; font-size:.92rem; }
    .cir-conv { width:100%; max-width:24rem; margin:.75rem auto 0; font-size:.92rem; border-collapse:collapse; }
    .cir-conv th, .cir-conv td { padding:.2rem .5rem; border-bottom:1px solid #e9ecef; }
    .cir-conv th { text-align:start; font-weight:500; color:#495057; }
    .cir-conv td { text-align:end; font-variant-numeric: tabular-nums; }
    .result .muted { color:#6c757d; font-size:.9rem; margin-top:.5rem; text-align:center; }
  </style>`;

	const contentHtml = `
    <div id="circle" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(tx('title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <form id="calcForm" novalidate>
          <div class="cir-grid">
            <div class="form-group">
              <label class="form-label" for="known">${escapeHtml(tx('known_label'))}</label>
              <select id="known" class="form-select">${optionsHtml(
								[
									['r', tx('known_r')],
									['d', tx('known_d')],
									['c', tx('known_c')],
									['a', tx('known_a')],
								],
								'r'
							)}</select>
            </div>
            <div class="form-group">
              <label class="form-label" for="val" id="valLabel">${escapeHtml(tx('known_r'))}</label>
              <div class="cir-pair">
                <input id="val" class="input-lg" type="number" step="any" min="0" inputmode="decimal" placeholder="${escapeHtml(tx('value_ph'))}">
                <select id="unit" class="form-select" aria-label="${escapeHtml(tx('unit_label'))}">${optionsHtml(
									LENGTH_UNITS.map(([code, text]) => [code, text] as [string, string]),
									'cm'
								)}</select>
              </div>
            </div>
          </div>
          <div class="cir-grid">
            <div class="form-group">
              <label class="form-label" for="piMode">${escapeHtml(tx('pi_label'))}</label>
              <select id="piMode" class="form-select">${optionsHtml(
								[
									['full', tx('pi_full')],
									['314', tx('pi_314')],
									['227', tx('pi_227')],
								],
								'full'
							)}</select>
            </div>
            <div class="form-group">
              <label class="form-label" for="decimals">${escapeHtml(tx('decimals_label'))}</label>
              <select id="decimals" class="form-select">${optionsHtml(
								[
									['2', '2'],
									['4', '4'],
									['6', '6'],
								],
								'2'
							)}</select>
            </div>
          </div>
          <div class="btn-row">
            <button type="submit" class="btn btn-primary">${escapeHtml(tx('calculate'))}</button>
            <button type="button" id="btnSample" class="btn btn-outline-secondary">${escapeHtml(tx('sample'))}</button>
            <button type="button" id="btnClear" class="btn btn-outline-secondary">${escapeHtml(tx('clear'))}</button>
          </div>
        </form>
        <div id="calcResult" class="result" style="display:none" aria-live="polite">
          <div id="okWrap">
            <table class="cir-out">
              <tbody>
                <tr data-k="r"><th scope="row">${escapeHtml(tx('out_r'))}</th><td class="val" id="outR"></td><td class="work" id="workR" dir="ltr"></td></tr>
                <tr data-k="d"><th scope="row">${escapeHtml(tx('out_d'))}</th><td class="val" id="outD"></td><td class="work" id="workD" dir="ltr"></td></tr>
                <tr data-k="c"><th scope="row">${escapeHtml(tx('out_c'))}</th><td class="val" id="outC"></td><td class="work" id="workC" dir="ltr"></td></tr>
                <tr data-k="a"><th scope="row">${escapeHtml(tx('out_a'))}</th><td class="val" id="outA"></td><td class="work" id="workA" dir="ltr"></td></tr>
              </tbody>
            </table>
            <p class="cir-exact" id="exactOut"></p>
            <ul class="cir-sub">
              <li id="semiAOut"></li>
              <li id="semiPOut"></li>
            </ul>
            <table class="cir-conv">
              <caption class="small text-muted">${escapeHtml(tx('conv_label'))}</caption>
              <tbody id="convBody"></tbody>
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
			{ label: tx('ref_a_label'), href: 'https://mathworld.wolfram.com/Circle.html' },
			{ label: tx('ref_b_label'), href: 'https://en.wikipedia.org/wiki/Approximations_of_%CF%80' },
		],
	});

	/** 前端脚本需要的文案（一次性注入）。 */
	const clientText = {
		known: { r: tx('known_r'), d: tx('known_d'), c: tx('known_c'), a: tx('known_a') },
		errFinite: tx('err_finite'),
		errPositive: tx('err_positive'),
		exactTpl: tx('exact_tpl'),
		semiATpl: tx('semi_a_tpl'),
		semiPTpl: tx('semi_p_tpl'),
		note: tx('result_note'),
	};

	/** 长度单位表 → 前端用的 {代码: [显示, 系数]}。 */
	const unitMap = Object.fromEntries(LENGTH_UNITS.map(([code, text, f]) => [code, [text, f]]));

	const extraBodyHtml = `
  <script>
    (function () {
      /** 当前页面语言（数字格式）。 */
      var LANG = ${JSON.stringify(opts.lang)};
      /** 本地化文案。 */
      var T = ${JSON.stringify(clientText)};
      /** 长度单位：代码 → [显示, 换算到 m 的系数]。 */
      var LU = ${JSON.stringify(unitMap)};
      /** 面积换算目标：[显示, 每单位 m²]。 */
      var AREA = ${JSON.stringify(AREA_TARGETS)};
      /** π 取值：数值与过程里的写法。 */
      var PI = { full: [Math.PI, 'π'], '314': [3.14, '3.14'], '227': [22 / 7, '22/7'] };

      var form = document.getElementById('calcForm');
      var knownEl = document.getElementById('known');
      var valEl = document.getElementById('val');
      var valLabel = document.getElementById('valLabel');
      var unitEl = document.getElementById('unit');
      var piEl = document.getElementById('piMode');
      var decEl = document.getElementById('decimals');
      var result = document.getElementById('calcResult');
      var okWrap = document.getElementById('okWrap');
      var exactOut = document.getElementById('exactOut');
      var semiAOut = document.getElementById('semiAOut');
      var semiPOut = document.getElementById('semiPOut');
      var convBody = document.getElementById('convBody');
      var noteEl = document.getElementById('calcNote');

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
       * 按所选小数位格式化（结果栏，带千分位）。
       * @param {number} n 数值
       * @returns {string}
       */
      function fmt(n) {
        if (!Number.isFinite(n)) return '—';
        var d = Number(decEl.value) || 2;
        var a = Math.abs(n);
        if (a !== 0 && (a >= 1e12 || a < Math.pow(10, -d))) return n.toExponential(Math.max(2, d - 1)).replace('e', ' × 10^').replace('^+', '^');
        return new Intl.NumberFormat(LANG + '-u-nu-latn', { minimumFractionDigits: d, maximumFractionDigits: d }).format(n);
      }

      /**
       * 换算表用的数字：5 位有效数字 + 千分位（小面积换成 m² 时不会被固定小数位截成 0.02）。
       * @param {number} n 数值
       * @returns {string}
       */
      function fmtSig(n) {
        if (!Number.isFinite(n)) return '—';
        var a = Math.abs(n);
        if (a !== 0 && (a >= 1e12 || a < 1e-6)) return n.toExponential(4).replace('e', ' × 10^').replace('^+', '^');
        return new Intl.NumberFormat(LANG + '-u-nu-latn', { maximumSignificantDigits: 5 }).format(n);
      }

      /**
       * 过程行用的数字（不分组，最多 6 位有效数字，避免过程里出现长串小数；≥ 10⁶ 取整，不把 78539816 截成 78539800）。
       * @param {number} n 数值
       * @returns {string}
       */
      function w(n) {
        if (!Number.isFinite(n)) return '—';
        var a = Math.abs(n);
        if (a !== 0 && (a >= 1e12 || a < 1e-6)) return n.toExponential(4);
        if (a >= 1e6) return String(Math.round(n));
        return String(+n.toPrecision(6));
      }

      /** 已知量下拉改变时，同步数值栏的标签。 */
      function syncLabel() {
        valLabel.textContent = T.known[knownEl.value];
      }

      /**
       * 计算四个量与过程（长度单位 = 所选单位，面积 = 单位²）。
       * @returns {{ ok: boolean, error?: string, r?: number, d?: number, c?: number, a?: number, work?: Object<string, string> }}
       */
      function compute() {
        var raw = valEl.value;
        var v = raw === '' ? NaN : Number(raw);
        if (!Number.isFinite(v)) return { ok: false, error: T.errFinite };
        if (!(v > 0)) return { ok: false, error: T.errPositive };
        var p = PI[piEl.value] || PI.full;
        var pi = p[0], ps = p[1];
        var k = knownEl.value;
        var r, d, c, a;
        var work = { r: '', d: '', c: '', a: '' };
        if (k === 'r') {
          r = v; d = 2 * r; c = 2 * pi * r; a = pi * r * r;
          work.d = 'd = 2 × r = 2 × ' + w(r) + ' = ' + w(d);
          work.c = 'C = 2 × ' + ps + ' × r = 2 × ' + ps + ' × ' + w(r) + ' = ' + w(c);
          work.a = 'A = ' + ps + ' × r² = ' + ps + ' × ' + w(r) + '² = ' + w(a);
        } else if (k === 'd') {
          d = v; r = d / 2; c = pi * d; a = pi * r * r;
          work.r = 'r = d ÷ 2 = ' + w(d) + ' ÷ 2 = ' + w(r);
          work.c = 'C = ' + ps + ' × d = ' + ps + ' × ' + w(d) + ' = ' + w(c);
          work.a = 'A = ' + ps + ' × r² = ' + ps + ' × ' + w(r) + '² = ' + w(a);
        } else if (k === 'c') {
          c = v; r = c / (2 * pi); d = c / pi; a = (c * c) / (4 * pi);
          work.r = 'r = C ÷ (2 × ' + ps + ') = ' + w(c) + ' ÷ (2 × ' + ps + ') = ' + w(r);
          work.d = 'd = C ÷ ' + ps + ' = ' + w(c) + ' ÷ ' + ps + ' = ' + w(d);
          work.a = 'A = C² ÷ (4 × ' + ps + ') = ' + w(c) + '² ÷ (4 × ' + ps + ') = ' + w(a);
        } else {
          a = v; r = Math.sqrt(a / pi); d = 2 * r; c = 2 * pi * r;
          work.r = 'r = √(A ÷ ' + ps + ') = √(' + w(a) + ' ÷ ' + ps + ') = ' + w(r);
          work.d = 'd = 2 × r = 2 × ' + w(r) + ' = ' + w(d);
          work.c = 'C = 2 × ' + ps + ' × r = 2 × ' + ps + ' × ' + w(r) + ' = ' + w(c);
        }
        return { ok: true, r: r, d: d, c: c, a: a, work: work, pi: pi, ps: ps, k: k };
      }

      /** 执行计算并刷新结果区。 */
      function runCalc() {
        var out = compute();
        result.style.display = 'block';
        if (!out.ok) {
          okWrap.style.display = 'none';
          noteEl.textContent = out.error;
          return false;
        }
        var u = LU[unitEl.value] || LU.cm;
        var lu = u[0], au = u[0] + '²';
        var vals = { r: [out.r, lu], d: [out.d, lu], c: [out.c, lu], a: [out.a, au] };
        ['r', 'd', 'c', 'a'].forEach(function (key) {
          var up = key.toUpperCase();
          document.getElementById('out' + up).textContent = fmt(vals[key][0]) + ' ' + vals[key][1];
          document.getElementById('work' + up).textContent = out.work[key];
          document.querySelector('.cir-out tr[data-k="' + key + '"]').classList.toggle('is-known', key === out.k);
        });
        if (out.ps === 'π' && (out.k === 'r' || out.k === 'd')) {
          exactOut.textContent = fill(T.exactTpl, { a: w(out.r * out.r), c: w(out.d), u: lu });
          exactOut.style.display = '';
        } else {
          exactOut.style.display = 'none';
        }
        semiAOut.textContent = fill(T.semiATpl, { v: fmt(out.a / 2) + ' ' + au });
        semiPOut.textContent = fill(T.semiPTpl, { v: fmt(out.pi * out.r + 2 * out.r) + ' ' + lu });
        convBody.textContent = '';
        var m2 = out.a * u[1] * u[1];
        AREA.forEach(function (row) {
          var tr = document.createElement('tr');
          var th = document.createElement('th');
          th.scope = 'row';
          th.textContent = row[0];
          var td = document.createElement('td');
          td.textContent = fmtSig(m2 / row[1]);
          tr.appendChild(th);
          tr.appendChild(td);
          convBody.appendChild(tr);
        });
        okWrap.style.display = '';
        noteEl.textContent = T.note;
        return true;
      }

      /** 样例：半径 7 cm，精确 π，2 位小数 → 面积 153.94 cm²，周长 43.98 cm。 */
      function loadSample() {
        knownEl.value = 'r';
        unitEl.value = 'cm';
        piEl.value = 'full';
        decEl.value = '2';
        syncLabel();
        valEl.value = '7';
        runCalc();
      }

      /** 清空：输入与结果；选项恢复默认；不重载样例。 */
      function clearAll() {
        form.reset();
        knownEl.value = 'r';
        unitEl.value = 'cm';
        piEl.value = 'full';
        decEl.value = '2';
        syncLabel();
        result.style.display = 'none';
      }

      knownEl.addEventListener('change', function () {
        syncLabel();
        if (valEl.value !== '') runCalc(); else result.style.display = 'none';
      });
      /** 改单位、π 或小数位时，若已有结果则立即重算。 */
      [unitEl, piEl, decEl].forEach(function (el) {
        el.addEventListener('change', function () { if (result.style.display !== 'none') runCalc(); });
      });
      valEl.addEventListener('input', function () { if (valEl.value !== '') runCalc(); });
      form.addEventListener('submit', function (e) { e.preventDefault(); runCalc(); });
      document.getElementById('btnSample').addEventListener('click', loadSample);
      document.getElementById('btnClear').addEventListener('click', clearAll);
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('how-to-calculate-circle');
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
