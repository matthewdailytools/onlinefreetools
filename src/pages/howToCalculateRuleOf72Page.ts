/**
 * 72 法则计算器：由年化利率估算翻倍年数、由目标年数反推利率，并与精确复利公式对照。
 * 同时给出 72 / 70 / 69.3 三种口诀、误差百分比与常见利率对照表。
 * slug: how-to-calculate-rule-of-72（见 work-tasks/how-to-calculate-rule-of-72/02-tool-info.md）。
 * YMYL：仅教学估算，非投资建议。
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
const PREFIX = 'tool_rule_of_72';

/** 以逗号作小数点的页面语言。 */
const DECIMAL_COMMA_LANGS: string[] = ['de', 'es', 'pt', 'fr', 'ru', 'id'];

/** 对照表利率（百分数）：2、4、6、8、10、12。 */
const TABLE_RATES: number[] = [2, 4, 6, 8, 10, 12];

/** 为路径加上语言前缀（默认语无前缀）。 */
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * 渲染 how-to-calculate-rule-of-72 工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 * @returns 完整页面 HTML
 */
export const renderHowToCalculateRuleOf72Page = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 读取本工具键（自动拼前缀）。 */
	const tx = (key: string) => t(opts.lang, `${PREFIX}_${key}` as keyof typeof import('../site/i18n/en').default);

	const toolPath = '/tools/how-to-calculate-rule-of-72';
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
			currentSlug: 'how-to-calculate-rule-of-72',
			currentAnchor: '#rule-of-72',
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
    .r72-main-label { text-align:center; color:#495057; font-size:.95rem; }
    .r72-main { font-size:1.6rem; font-weight:600; text-align:center; margin:.15rem 0 .5rem; font-variant-numeric:tabular-nums; }
    .r72-row { color:#495057; font-size:.92rem; margin-top:.45rem; font-variant-numeric:tabular-nums; }
    .r72-row strong { color:#343a40; }
    .r72-h { font-size:1rem; font-weight:600; margin:1rem 0 .35rem; }
    .r72-steps { margin:0; padding-inline-start:1.3rem; font-size:.92rem; color:#343a40; }
    .r72-steps li { margin-bottom:.35rem; }
    .r72-table { width:100%; border-collapse:collapse; font-size:.9rem; font-variant-numeric:tabular-nums; }
    .r72-table th, .r72-table td { padding:.3rem .5rem; border-bottom:1px solid #dee2e6; text-align:start; }
    .r72-table th { color:#495057; font-weight:600; }
    .r72-table tr.r72-mark td { font-weight:600; }
    .r72-scroll { max-height:16rem; overflow:auto; }
    .result .muted { color:#6c757d; font-size:.9rem; margin-top:.75rem; }
    .result .muted.r72-err { color:#b02a37; font-weight:500; margin-top:0; }
  </style>`;

	const contentHtml = `
    <div id="rule-of-72" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(tx('title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <form id="calcForm" novalidate>
          <div class="form-row2">
            <div class="form-group">
              <label class="form-label" for="r72Mode">${escapeHtml(tx('mode_label'))}</label>
              <select id="r72Mode" class="input-lg">
                <option value="years" selected>${escapeHtml(tx('mode_years'))}</option>
                <option value="rate">${escapeHtml(tx('mode_rate'))}</option>
              </select>
            </div>
            <div class="form-group" id="r72WrapRate">
              <label class="form-label" for="r72Rate">${escapeHtml(tx('rate_label'))}</label>
              <input id="r72Rate" class="input-lg" type="text" inputmode="decimal" autocomplete="off" placeholder="${escapeHtml(tx('rate_ph'))}">
            </div>
            <div class="form-group" id="r72WrapYears" style="display:none">
              <label class="form-label" for="r72Years">${escapeHtml(tx('years_label'))}</label>
              <input id="r72Years" class="input-lg" type="text" inputmode="decimal" autocomplete="off" placeholder="${escapeHtml(tx('years_ph'))}">
            </div>
          </div>
          <span class="form-hint">${escapeHtml(tx('hint'))}</span>
          <div class="btn-row">
            <button type="submit" id="r72BtnCalc" class="btn btn-primary">${escapeHtml(tx('calculate'))}</button>
            <button type="button" id="r72BtnSample" class="btn btn-outline-secondary">${escapeHtml(tx('sample'))}</button>
            <button type="button" id="r72BtnClear" class="btn btn-outline-secondary">${escapeHtml(tx('clear'))}</button>
          </div>
        </form>
        <div id="calcResult" class="result" style="display:none" aria-live="polite">
          <div id="r72MainLabel" class="r72-main-label"></div>
          <div id="r72Main" class="r72-main"></div>
          <div id="r72Rows"></div>
          <div id="r72StepsWrap">
            <div class="r72-h">${escapeHtml(tx('steps_title'))}</div>
            <ol id="r72Steps" class="r72-steps"></ol>
          </div>
          <div id="r72TableWrap">
            <div class="r72-h">${escapeHtml(tx('table_title'))}</div>
            <div class="r72-scroll">
              <table class="r72-table">
                <thead>
                  <tr>
                    <th>${escapeHtml(tx('table_col_rate'))}</th>
                    <th>${escapeHtml(tx('table_col_72'))}</th>
                    <th>${escapeHtml(tx('table_col_exact'))}</th>
                    <th>${escapeHtml(tx('table_col_err'))}</th>
                  </tr>
                </thead>
                <tbody id="r72Table"></tbody>
              </table>
            </div>
            <div class="muted">${escapeHtml(tx('table_note'))}</div>
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
				href: 'https://www.investopedia.com/terms/r/ruleof72.asp',
			},
			{
				label: tx('ref_b_label'),
				href: 'https://en.wikipedia.org/wiki/Rule_of_72',
			},
		],
	});

	/** 前端脚本需要的文案（一次性注入）。 */
	const clientText = {
		lang: opts.lang,
		decComma: DECIMAL_COMMA_LANGS.includes(opts.lang),
		fieldRate: tx('rate_label'),
		fieldYears: tx('years_label'),
		outYears: tx('out_years'),
		outRate: tx('out_rate'),
		unitYears: tx('unit_years'),
		unitPct: tx('unit_pct'),
		rowExact: tx('row_exact'),
		rowErr: tx('row_err'),
		row70: tx('row_70'),
		row693: tx('row_693'),
		rowWork: tx('row_work'),
		errTpl: tx('err_num_tpl'),
		errRange: tx('err_range'),
		workYears: tx('work_years_tpl'),
		workRate: tx('work_rate_tpl'),
		stepYears: tx('step_years_tpl'),
		stepExactY: tx('step_exact_y_tpl'),
		stepRate: tx('step_rate_tpl'),
		stepExactR: tx('step_exact_r_tpl'),
		stepErr: tx('step_err_tpl'),
		noteLow: tx('note_low'),
		noteHigh: tx('note_high'),
		noteEdu: tx('result_note'),
		errPctTpl: tx('err_pct_tpl'),
	};

	const extraBodyHtml = `
  <script>
    (function () {
      /** 表单与输入控件。 */
      var form = document.getElementById('calcForm');
      var modeEl = document.getElementById('r72Mode');
      var rateEl = document.getElementById('r72Rate');
      var yearsEl = document.getElementById('r72Years');
      var wrapRate = document.getElementById('r72WrapRate');
      var wrapYears = document.getElementById('r72WrapYears');
      /** 结果区各输出位。 */
      var result = document.getElementById('calcResult');
      var mainLabelEl = document.getElementById('r72MainLabel');
      var mainEl = document.getElementById('r72Main');
      var rowsEl = document.getElementById('r72Rows');
      var stepsWrap = document.getElementById('r72StepsWrap');
      var stepsEl = document.getElementById('r72Steps');
      var tableEl = document.getElementById('r72Table');
      var noteEl = document.getElementById('calcNote');
      /** 本地化文案字典。 */
      var T = ${JSON.stringify(clientText)};
      /** 对照表利率（百分数）。 */
      var TABLE_RATES = ${JSON.stringify(TABLE_RATES)};
      /** 口诀常数。 */
      var RULE72 = 72;
      var RULE70 = 70;
      var RULE693 = 69.3;
      /** ln(2)，精确翻倍公式用。 */
      var LN2 = Math.LN2;
      /** 不换行空格。 */
      var NBSP = String.fromCharCode(160);
      /** 样例轮换；首个与 Example 一致。 */
      var SAMPLES = [
        { mode: 'years', rate: '6' },
        { mode: 'years', rate: '8' },
        { mode: 'rate', years: '10' },
        { mode: 'years', rate: '1' }
      ];
      /** 下一次点击「加载样例」使用的样例下标。 */
      var sampleIndex = 0;
      /** 本地化数字格式器缓存。 */
      var nfCache = {};

      /**
       * 取（并缓存）本地化数字格式器（拉丁数字）。
       * @param {string} key 缓存键
       * @param {Object} o Intl.NumberFormat 选项
       * @returns {Intl.NumberFormat}
       */
      function nfGet(key, o) {
        if (!nfCache[key]) nfCache[key] = new Intl.NumberFormat(T.lang + '-u-nu-latn', o);
        return nfCache[key];
      }

      /**
       * 固定最多小数位（去掉多余零）。
       * @param {number} v 数值
       * @param {number} maxD 最多小数位
       * @returns {string}
       */
      function nf(v, maxD) {
        return nfGet('m' + maxD, { maximumFractionDigits: maxD, minimumFractionDigits: 0 }).format(v);
      }

      /**
       * 固定小数位（用于误差百分比等）。
       * @param {number} v 数值
       * @param {number} d 小数位
       * @returns {string}
       */
      function nfFix(v, d) {
        return nfGet('f' + d, { minimumFractionDigits: d, maximumFractionDigits: d }).format(v);
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
       * HTML 模板：先转义模板，再插入已转义片段。
       * @param {string} tpl 纯文本模板
       * @param {Object} map 键 → HTML
       * @returns {string}
       */
      function fillH(tpl, map) {
        return fill(escapeH(tpl), map);
      }

      /**
       * 解析正数输入（支持逗号小数、千分位）。
       * @param {string} raw 原始文本
       * @returns {number|null}
       */
      function parsePos(raw) {
        var s = String(raw || '').split(NBSP).join('').split(' ').join('').split('−').join('-').split('%').join('');
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
       * 年化利率 r（小数）下翻倍所需年数：ln(2)/ln(1+r)。
       * @param {number} rPct 百分数利率
       * @returns {number}
       */
      function exactYears(rPct) {
        return LN2 / Math.log(1 + rPct / 100);
      }

      /**
       * 在 n 年内翻倍所需年化利率（百分数）：(2^(1/n) − 1) × 100。
       * @param {number} years 年数
       * @returns {number}
       */
      function exactRate(years) {
        return (Math.pow(2, 1 / years) - 1) * 100;
      }

      /**
       * 相对误差百分比：(approx − exact) / exact × 100。
       * @param {number} approx 口诀结果
       * @param {number} exact 精确结果
       * @returns {number}
       */
      function relErr(approx, exact) {
        return ((approx - exact) / exact) * 100;
      }

      /**
       * 误差文案（带正负号）。
       * @param {number} e 相对误差百分比
       * @returns {string}
       */
      function errText(e) {
        var sign = e > 0 ? '+' : '';
        return fill(T.errPctTpl, { e: sign + nfFix(e, 2) });
      }

      /** 追加一行「标签：值」。 */
      function addRow(html, label, value) {
        return html + '<div class="r72-row"><strong>' + escapeH(label) + ':</strong> ' + value + '</div>';
      }

      /** 按模式显示所需输入框。 */
      function syncMode() {
        var yearsMode = modeEl.value === 'years';
        wrapRate.style.display = yearsMode ? '' : 'none';
        wrapYears.style.display = yearsMode ? 'none' : '';
      }

      /**
       * 在结果区显示错误。
       * @param {string} msg 错误文案
       */
      function showError(msg) {
        result.style.display = 'block';
        mainLabelEl.textContent = '';
        mainEl.textContent = '';
        rowsEl.innerHTML = '';
        stepsEl.innerHTML = '';
        stepsWrap.style.display = 'none';
        tableEl.innerHTML = '';
        noteEl.className = 'muted r72-err';
        noteEl.textContent = msg;
      }

      /**
       * 填充对照表；可选高亮最接近当前利率的一行。
       * @param {number|null} markRate 当前利率（百分数），求利率模式传 null
       */
      function fillTable(markRate) {
        var html = '';
        var bestI = -1;
        var bestDiff = Infinity;
        if (markRate != null) {
          for (var i = 0; i < TABLE_RATES.length; i++) {
            var d = Math.abs(TABLE_RATES[i] - markRate);
            if (d < bestDiff) { bestDiff = d; bestI = i; }
          }
          if (bestDiff > 1.5) bestI = -1;
        }
        for (var j = 0; j < TABLE_RATES.length; j++) {
          var r = TABLE_RATES[j];
          var y72 = RULE72 / r;
          var yEx = exactYears(r);
          var e = relErr(y72, yEx);
          var cls = j === bestI ? ' class="r72-mark"' : '';
          html += '<tr' + cls + '><td>' + escapeH(nf(r, 2) + T.unitPct) + '</td><td>' + escapeH(nf(y72, 2)) + '</td><td>' + escapeH(nf(yEx, 2)) + '</td><td>' + escapeH(errText(e)) + '</td></tr>';
        }
        tableEl.innerHTML = html;
      }

      /** 读取输入、求解并刷新结果区。 */
      function run() {
        var mode = modeEl.value;
        var notes = [T.noteEdu];
        var rows = '';
        var steps = [];

        if (mode === 'years') {
          var rate = parsePos(rateEl.value);
          if (rate == null) {
            showError(fill(T.errTpl, { field: T.fieldRate }));
            return;
          }
          if (rate > 100) {
            showError(T.errRange);
            return;
          }
          var y72 = RULE72 / rate;
          var y70 = RULE70 / rate;
          var y693 = RULE693 / rate;
          var yEx = exactYears(rate);
          var eY = relErr(y72, yEx);
          mainLabelEl.textContent = T.outYears;
          mainEl.textContent = nf(y72, 2) + ' ' + T.unitYears;
          rows = addRow(rows, T.rowWork, escapeH(fill(T.workYears, { r: nf(rate, 4), y: nf(y72, 2) })));
          rows = addRow(rows, T.rowExact, escapeH(nf(yEx, 2) + ' ' + T.unitYears));
          rows = addRow(rows, T.rowErr, escapeH(errText(eY)));
          rows = addRow(rows, T.row70, escapeH(nf(y70, 2) + ' ' + T.unitYears));
          rows = addRow(rows, T.row693, escapeH(nf(y693, 2) + ' ' + T.unitYears));
          steps.push(fillH(T.stepYears, { r: escapeH(nf(rate, 4)), y: escapeH(nf(y72, 2)) }));
          steps.push(fillH(T.stepExactY, { r: escapeH(nf(rate, 4)), y: escapeH(nf(yEx, 2)) }));
          steps.push(fillH(T.stepErr, { e: escapeH(errText(eY)) }));
          if (rate < 4) notes.unshift(T.noteLow);
          if (rate > 12) notes.unshift(T.noteHigh);
          fillTable(rate);
        } else {
          var years = parsePos(yearsEl.value);
          if (years == null) {
            showError(fill(T.errTpl, { field: T.fieldYears }));
            return;
          }
          if (years > 500) {
            showError(T.errRange);
            return;
          }
          var r72 = RULE72 / years;
          var r70 = RULE70 / years;
          var r693 = RULE693 / years;
          var rEx = exactRate(years);
          var eR = relErr(r72, rEx);
          mainLabelEl.textContent = T.outRate;
          mainEl.textContent = nf(r72, 2) + T.unitPct;
          rows = addRow(rows, T.rowWork, escapeH(fill(T.workRate, { n: nf(years, 4), r: nf(r72, 2) })));
          rows = addRow(rows, T.rowExact, escapeH(nf(rEx, 2) + T.unitPct));
          rows = addRow(rows, T.rowErr, escapeH(errText(eR)));
          rows = addRow(rows, T.row70, escapeH(nf(r70, 2) + T.unitPct));
          rows = addRow(rows, T.row693, escapeH(nf(r693, 2) + T.unitPct));
          steps.push(fillH(T.stepRate, { n: escapeH(nf(years, 4)), r: escapeH(nf(r72, 2)) }));
          steps.push(fillH(T.stepExactR, { n: escapeH(nf(years, 4)), r: escapeH(nf(rEx, 2)) }));
          steps.push(fillH(T.stepErr, { e: escapeH(errText(eR)) }));
          if (r72 < 4) notes.unshift(T.noteLow);
          if (r72 > 12) notes.unshift(T.noteHigh);
          fillTable(r72);
        }

        result.style.display = 'block';
        rowsEl.innerHTML = rows;
        stepsEl.innerHTML = steps.map(function (s) { return '<li>' + s + '</li>'; }).join('');
        stepsWrap.style.display = '';
        noteEl.className = 'muted';
        noteEl.textContent = notes.join(' ');
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
        rateEl.value = sampleVal(s.rate);
        yearsEl.value = sampleVal(s.years);
        syncMode();
        run();
      }

      /** 清空：清输入、回到「求年数」，隐藏结果。 */
      function clearAll() {
        modeEl.value = 'years';
        rateEl.value = '';
        yearsEl.value = '';
        syncMode();
        result.style.display = 'none';
        rateEl.focus();
      }

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        run();
      });
      modeEl.addEventListener('change', function () {
        syncMode();
        result.style.display = 'none';
      });
      document.getElementById('r72BtnSample').addEventListener('click', loadSample);
      document.getElementById('r72BtnClear').addEventListener('click', clearAll);
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('how-to-calculate-rule-of-72');
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
