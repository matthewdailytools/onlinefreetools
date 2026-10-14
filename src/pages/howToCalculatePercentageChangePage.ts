/**
 * 百分比变化计算器工具页。
 * slug: how-to-calculate-percentage-change（见 work-tasks/how-to-calculate-percentage-change/02-tool-info.md）。
 *
 * 交互要点（2026-10-14 改写）：
 * - 旧值 → 新值：带符号的涨跌幅 + 「增加 / 减少 / 不变」文字；写出代入过程；
 * - 同屏给出绝对变化、倍数（新 ÷ 旧）、回到旧值所需的反向百分比、对称的百分比差异；
 * - 输入带 % 或勾选「两个值都是百分比」时，额外给出百分点变化；
 * - 旧值为 0：百分比变化无定义，仍给出绝对变化；旧值为负：按 |旧值| 作分母并提示解读风险。
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
const PREFIX = 'tool_percentage_change';

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
 * 渲染 how-to-calculate-percentage-change 工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 * @returns 完整页面 HTML
 */
export const renderHowToCalculatePercentageChangePage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 读取本工具键（自动拼前缀）。 */
	const tx = (key: string) => t(opts.lang, `${PREFIX}_${key}` as keyof typeof import('../site/i18n/en').default);

	const toolPath = '/tools/how-to-calculate-percentage-change';
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
			currentSlug: 'how-to-calculate-percentage-change',
			currentAnchor: '#percentage-change',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	const extraHeadHtml = `
  <style>
    .tool-card { max-width: var(--content-max); width: 100%; margin: 0 0 1.5rem; }
    .form-label { display:block; margin-bottom:.5rem; color:#495057; font-weight:500 }
    .form-hint { display:block; color:#6c757d; font-size:.85rem; margin-top:.3rem; }
    .form-group { margin-bottom:1rem; }
    .form-row { display:grid; grid-template-columns:1fr 1fr; gap:1rem; }
    @media (max-width:576px) { .form-row { grid-template-columns:1fr; } }
    .form-check { display:flex; gap:.5rem; align-items:flex-start; margin-bottom:1rem; }
    .form-check input { margin-top:.3rem; }
    .btn-row { display:flex; flex-wrap:wrap; gap:.5rem; align-items:center; }
    .result { background:#f8f9fa; padding:1rem; border-radius:8px; margin-top:1rem; }
    .pc-main { font-size:1.8rem; font-weight:600; text-align:center; margin:.25rem 0 0; font-variant-numeric:tabular-nums; }
    .pc-main.pc-up { color:#146c43; }
    .pc-main.pc-down { color:#b02a37; }
    .pc-sub { text-align:center; color:#495057; font-size:.95rem; margin-top:.25rem; }
    .pc-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(11rem,1fr)); gap:.5rem; margin-top:1rem; }
    .pc-cell { background:#fff; border:1px solid #dee2e6; border-radius:6px; padding:.5rem .6rem; }
    .pc-cell .pc-k { color:#6c757d; font-size:.82rem; }
    .pc-cell .pc-v { font-weight:600; font-variant-numeric:tabular-nums; margin-top:.15rem; }
    .pc-line { color:#495057; font-size:.92rem; margin-top:.6rem; }
    .result .muted { color:#6c757d; font-size:.9rem; margin-top:.75rem; }
  </style>`;

	const contentHtml = `
    <div id="percentage-change" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(tx('title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <form id="calcForm" novalidate>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label" for="pcOld">${escapeHtml(tx('old_label'))}</label>
              <input id="pcOld" class="input-lg" type="text" inputmode="decimal" autocomplete="off" placeholder="${escapeHtml(tx('old_ph'))}">
            </div>
            <div class="form-group">
              <label class="form-label" for="pcNew">${escapeHtml(tx('new_label'))}</label>
              <input id="pcNew" class="input-lg" type="text" inputmode="decimal" autocomplete="off" placeholder="${escapeHtml(tx('new_ph'))}">
            </div>
          </div>
          <div class="form-check">
            <input id="pcRates" type="checkbox">
            <label for="pcRates">${escapeHtml(tx('rates_label'))}<span class="form-hint">${escapeHtml(tx('rates_hint'))}</span></label>
          </div>
          <div class="btn-row">
            <button type="submit" id="pcBtnCalc" class="btn btn-primary">${escapeHtml(tx('calculate'))}</button>
            <button type="button" id="pcBtnSample" class="btn btn-outline-secondary">${escapeHtml(tx('sample'))}</button>
            <button type="button" id="pcBtnClear" class="btn btn-outline-secondary">${escapeHtml(tx('clear'))}</button>
          </div>
        </form>
        <div id="calcResult" class="result" style="display:none" aria-live="polite">
          <div class="pc-sub">${escapeHtml(tx('result_label'))}</div>
          <div id="pcMain" class="pc-main"></div>
          <div id="pcDir" class="pc-sub"></div>
          <div id="pcDetails">
            <div class="pc-grid">
              <div class="pc-cell"><div class="pc-k">${escapeHtml(tx('abs_label'))}</div><div id="pcAbs" class="pc-v"></div></div>
              <div class="pc-cell"><div class="pc-k">${escapeHtml(tx('mult_label'))}</div><div id="pcMult" class="pc-v"></div></div>
              <div class="pc-cell"><div class="pc-k">${escapeHtml(tx('undo_label'))}</div><div id="pcUndo" class="pc-v"></div></div>
              <div class="pc-cell"><div class="pc-k">${escapeHtml(tx('diff_label'))}</div><div id="pcDiff" class="pc-v"></div></div>
              <div id="pcPpCell" class="pc-cell"><div class="pc-k">${escapeHtml(tx('pp_label'))}</div><div id="pcPp" class="pc-v"></div></div>
            </div>
            <div class="pc-line"><strong>${escapeHtml(tx('work_label'))}:</strong> <span id="pcWork"></span></div>
            <div id="pcExtra" class="pc-line"></div>
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
				href: 'https://en.wikipedia.org/wiki/Relative_change',
			},
			{
				label: tx('ref_b_label'),
				href: 'https://en.wikipedia.org/wiki/Percentage_point',
			},
		],
	});

	/** 前端脚本需要的文案（一次性注入）。 */
	const clientText = {
		errOld: tx('err_old'),
		errNew: tx('err_new'),
		inc: tx('increase'),
		dec: tx('decrease'),
		flat: tx('no_change'),
		work: tx('work_tpl'),
		undoNone: tx('undo_none'),
		pp: tx('pp_tpl'),
		zero: tx('zero_note'),
		neg: tx('neg_note'),
		times: tx('times_note'),
		note: tx('result_note'),
	};

	const extraBodyHtml = `
  <script>
    (function () {
      /** 表单与输入控件。 */
      var form = document.getElementById('calcForm');
      var oldEl = document.getElementById('pcOld');
      var newEl = document.getElementById('pcNew');
      var ratesEl = document.getElementById('pcRates');
      /** 结果区各输出位。 */
      var result = document.getElementById('calcResult');
      var detailsEl = document.getElementById('pcDetails');
      var mainEl = document.getElementById('pcMain');
      var dirEl = document.getElementById('pcDir');
      var absEl = document.getElementById('pcAbs');
      var multEl = document.getElementById('pcMult');
      var undoEl = document.getElementById('pcUndo');
      var diffEl = document.getElementById('pcDiff');
      var ppCellEl = document.getElementById('pcPpCell');
      var ppEl = document.getElementById('pcPp');
      var workEl = document.getElementById('pcWork');
      var extraEl = document.getElementById('pcExtra');
      var noteEl = document.getElementById('calcNote');
      /** 当前页面语言（决定数字格式与小数逗号解析）。 */
      var LANG = ${JSON.stringify(opts.lang)};
      /** 本地化文案字典。 */
      var T = ${JSON.stringify(clientText)};
      /** 样例轮换：[旧值, 新值, 是否为百分比]；首个与 Example 一致（数字用点小数，进页时按本地写法转换）。 */
      var SAMPLES = [
        ['80', '100', false],
        ['10', '12', true],
        ['40', '34', false],
        ['-200', '50', false]
      ];
      /** 下一次点击「加载样例」使用的样例下标。 */
      var sampleIndex = 0;

      /** 数值格式器：普通数最多 4 位小数（去掉浮点噪声）；百分比最多 2 位小数。 */
      var numFormat = null;
      var pctFormat = null;
      try {
        numFormat = new Intl.NumberFormat(LANG + '-u-nu-latn', { maximumFractionDigits: 4 });
        pctFormat = new Intl.NumberFormat(LANG + '-u-nu-latn', { maximumFractionDigits: 2 });
      } catch (e) {
        numFormat = null;
        pctFormat = null;
      }
      /** 百分号写法（法/德等语言数字与 % 之间有空格）。 */
      var PCT_SUFFIX = '%';
      try {
        var pp = new Intl.NumberFormat(LANG + '-u-nu-latn', { style: 'percent' }).formatToParts(0.25);
        var lit = '';
        for (var qi = 0; qi < pp.length; qi++) {
          if (pp[qi].type === 'literal' && qi > 0 && pp[qi - 1].type === 'integer') lit = pp[qi].value;
        }
        PCT_SUFFIX = lit + '%';
      } catch (e) {
        PCT_SUFFIX = '%';
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
       * 普通数值显示（最多 4 位小数）；负号统一为 −。
       * @param {number} n 数值
       * @param {boolean} [signed] 是否给正数加 +
       * @returns {string} 本地格式文本
       */
      function num(n, signed) {
        var v = Math.round(n * 10000) / 10000;
        if (Math.abs(v) < 0.00005) v = 0;
        var body = numFormat ? numFormat.format(Math.abs(v)) : String(Math.abs(v));
        if (v < 0) return '−' + body;
        return (signed && v > 0 ? '+' : '') + body;
      }

      /**
       * 百分比显示：最多 2 位小数；非零但绝对值 < 0.01 时保留 2 位有效数字，避免显示成 0%。
       * @param {number} p 百分数（25 表示 25%）
       * @param {boolean} [signed] 是否给正数加 +
       * @returns {string} 如 +25%、−20%、+33.33%
       */
      function pct(p, signed) {
        var a = Math.abs(p);
        var body;
        if (a > 0 && a < 0.005) {
          body = a.toPrecision(2);
          if (DEC !== '.') body = body.split('.').join(DEC);
        } else {
          var r = Math.round(a * 100) / 100;
          if (r === 0) p = 0;
          body = pctFormat ? pctFormat.format(r) : String(r);
        }
        var sign = p < 0 ? '−' : (signed && p > 0 ? '+' : '');
        return sign + body + PCT_SUFFIX;
      }

      /**
       * 解析单个数值：去货币符号、撇号、不换行空格与空格（法/俄千分位）；识别 %；
       * 英文类页面逗号是千分位，小数逗号语种逗号是小数点（「1.234,5」也可）。
       * @param {string} raw 原始输入
       * @returns {{ ok: boolean, value?: number, percent?: boolean }} 解析结果
       */
      function parseValue(raw) {
        var s = '';
        var text = String(raw || '').trim();
        var percent = false;
        for (var i = 0; i < text.length; i++) {
          var ch = text.charAt(i);
          var code = text.charCodeAt(i);
          if ('$€£¥₹₩₽'.indexOf(ch) >= 0 || code === 39 || code === 8217 || code === 160 || code === 8239 || ch === ' ') continue;
          if (ch === '%' || ch === '٪') {
            percent = true;
            continue;
          }
          if (ch === '−') ch = '-';
          s += ch;
        }
        if (!s) return { ok: false };
        if (DEC === ',') {
          if (/^[-+]?[0-9]{1,3}([.][0-9]{3})+(,[0-9]+)?$/.test(s)) s = s.split('.').join('');
          s = s.replace(',', '.');
        } else if (/^[-+]?[0-9]{1,3}(,[0-9]{3})+([.][0-9]+)?$/.test(s)) {
          s = s.split(',').join('');
        }
        if (!/^[-+]?([0-9]+[.]?[0-9]*|[.][0-9]+)(e[-+]?[0-9]+)?$/i.test(s)) return { ok: false };
        var v = Number(s);
        return Number.isFinite(v) ? { ok: true, value: v, percent: percent } : { ok: false };
      }

      /**
       * 计算百分比变化及相关指标。
       * @returns {{ ok: boolean, error?: string, v?: Object }}
       */
      function compute() {
        var a = parseValue(oldEl.value);
        if (!a.ok) return { ok: false, error: T.errOld };
        var b = parseValue(newEl.value);
        if (!b.ok) return { ok: false, error: T.errNew };
        /** 任一输入带 % 时自动视为百分比数值。 */
        if (a.percent || b.percent) ratesEl.checked = true;
        var o = a.value;
        var n = b.value;
        var delta = n - o;
        var v = { o: o, n: n, delta: delta, rates: ratesEl.checked, zero: o === 0 };
        if (o !== 0) {
          v.change = delta / Math.abs(o) * 100;
          v.mult = n / o;
        }
        /** 反向百分比：从新值回到旧值所需的变化；新值为 0 时不可能。 */
        if (n !== 0) v.undo = (o - n) / Math.abs(n) * 100;
        /** 对称百分比差异：|a − b| ÷ 两者绝对值的平均。 */
        var mean = (Math.abs(o) + Math.abs(n)) / 2;
        if (mean > 0) v.diff = Math.abs(delta) / mean * 100;
        return { ok: true, v: v };
      }

      /**
       * 代入过程文本：(新 − 旧) ÷ |旧| × 100 = Δ ÷ |旧| × 100 = 结果。
       * @param {Object} v compute() 的 v
       * @returns {string} 过程
       */
      function workText(v) {
        var oTxt = v.o < 0 ? '(' + num(v.o) + ')' : num(v.o);
        var base = num(Math.abs(v.o));
        if (v.o < 0) base = '|' + num(v.o) + '|';
        return fill(T.work, {
          'new': num(v.n),
          old: oTxt,
          base: base,
          delta: num(v.delta),
          pct: pct(v.change, true),
        });
      }

      /** 执行计算并刷新结果区；失败时隐藏明细并显示具体错误。 */
      function runCalc() {
        var out = compute();
        result.style.display = 'block';
        mainEl.className = 'pc-main';
        if (!out.ok) {
          mainEl.textContent = '—';
          dirEl.textContent = '';
          detailsEl.style.display = 'none';
          noteEl.textContent = out.error;
          return false;
        }
        var v = out.v;
        var extra = [];
        absEl.textContent = num(v.delta, true);
        diffEl.textContent = v.diff == null ? '—' : pct(v.diff, false);
        ppCellEl.style.display = v.rates ? '' : 'none';
        ppEl.textContent = fill(T.pp, { v: num(v.delta, true) });
        if (v.zero) {
          mainEl.textContent = '—';
          dirEl.textContent = '';
          multEl.textContent = '—';
          undoEl.textContent = v.n === 0 ? '—' : pct(v.undo, true);
          workEl.textContent = T.zero;
        } else {
          mainEl.textContent = pct(v.change, true);
          if (v.change > 0) {
            mainEl.className = 'pc-main pc-up';
            dirEl.textContent = T.inc;
          } else if (v.change < 0) {
            mainEl.className = 'pc-main pc-down';
            dirEl.textContent = T.dec;
          } else {
            dirEl.textContent = T.flat;
          }
          multEl.textContent = '× ' + num(v.mult);
          undoEl.textContent = v.n === 0 ? T.undoNone : pct(v.undo, true);
          workEl.textContent = workText(v);
          if (v.o < 0) extra.push(T.neg);
          if (v.o > 0 && v.change >= 100) extra.push(fill(T.times, { pct: pct(v.change, true), m: num(v.mult) }));
        }
        extraEl.textContent = extra.join(' ');
        extraEl.style.display = extra.length ? '' : 'none';
        detailsEl.style.display = '';
        noteEl.textContent = T.note;
        return true;
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
        oldEl.value = localize(smp[0]) + (smp[2] ? '%' : '');
        newEl.value = localize(smp[1]) + (smp[2] ? '%' : '');
        ratesEl.checked = smp[2];
        runCalc();
      }

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        runCalc();
      });
      /** 勾选/取消「百分比」后，若已有结果则立即刷新。 */
      ratesEl.addEventListener('change', function () {
        if (result.style.display !== 'none') runCalc();
      });
      document.getElementById('pcBtnSample').addEventListener('click', loadSample);
      /** 清空：只清输入、取消百分比勾选并隐藏结果，不重新加载样例。 */
      document.getElementById('pcBtnClear').addEventListener('click', function () {
        oldEl.value = '';
        newEl.value = '';
        ratesEl.checked = false;
        result.style.display = 'none';
        oldEl.focus();
      });
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('how-to-calculate-percentage-change');
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
