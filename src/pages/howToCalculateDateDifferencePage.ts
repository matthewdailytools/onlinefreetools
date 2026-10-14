/**
 * 日期间隔计算器工具页。
 * slug: how-to-calculate-date-difference（见 work-tasks/how-to-calculate-date-difference/02-tool-info.md）。
 *
 * 交互要点（2026-10-14 改写）：
 * - 修复旧版正则在模板字符串里丢失反斜杠导致永远报错的问题（改用 [0-9]）；
 * - 总天数 + 年/月/日 + 周和天 + 小数周 + 工作日（周一至周五）/ 周末天数 + 小时数；
 * - 「包含结束日」选项（首尾都算）；「今天」快捷按钮；结束日早于开始日时自动对调并提示；
 * - 写出「先数整月、再数余下天数」的过程，并提示区间内的闰日（2 月 29 日）。
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
const PREFIX = 'tool_date_difference';

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
 * 渲染 how-to-calculate-date-difference 工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 * @returns 完整页面 HTML
 */
export const renderHowToCalculateDateDifferencePage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 读取本工具键（自动拼前缀）。 */
	const tx = (key: string) => t(opts.lang, `${PREFIX}_${key}` as keyof typeof import('../site/i18n/en').default);

	const toolPath = '/tools/how-to-calculate-date-difference';
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
			currentSlug: 'how-to-calculate-date-difference',
			currentAnchor: '#date-difference',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	/**
	 * 渲染一个「数字 + 标签」统计格。
	 * @param id 数字元素 id
	 * @param labelKey 标签文案键
	 * @returns 统计格 HTML
	 */
	const stat = (id: string, labelKey: string) => `
            <div class="dd-stat"><div id="${id}" class="dd-num"></div><div class="dd-lab">${escapeHtml(tx(labelKey))}</div></div>`;

	/** 默认周末方案：阿拉伯语页默认周五 + 周六（沙特、埃及等），其余周六 + 周日。 */
	const defaultWeekend = opts.lang === 'ar' ? 'fri-sat' : 'sat-sun';

	/** 周末方案下拉选项：[值, 文案键]。 */
	const weekendChoices: Array<[string, string]> = [
		['sat-sun', 'weekend_opt_sat_sun'],
		['fri-sat', 'weekend_opt_fri_sat'],
		['sun', 'weekend_opt_sun'],
		['fri', 'weekend_opt_fri'],
	];

	/** 周末方案下拉 option HTML。 */
	const weekendOptions = weekendChoices
		.map(
			([value, key]) =>
				`<option value="${value}"${value === defaultWeekend ? ' selected' : ''}>${escapeHtml(tx(key))}</option>`
		)
		.join('');

	const extraHeadHtml = `
  <style>
    .tool-card { max-width: var(--content-max); width: 100%; margin: 0 0 1.5rem; }
    .form-label { display:block; margin-bottom:.5rem; color:#495057; font-weight:500 }
    .form-group { margin-bottom:1rem; }
    .form-row { display:grid; grid-template-columns:1fr 1fr; gap:1rem; }
    @media (max-width:576px) { .form-row { grid-template-columns:1fr; } }
    .dd-date { display:flex; gap:.5rem; align-items:stretch; }
    .dd-date input { flex:1; min-width:0; }
    .dd-check { display:inline-flex; align-items:center; gap:.4rem; cursor:pointer; margin-bottom:.25rem; }
    .form-hint { display:block; color:#6c757d; font-size:.85rem; margin-bottom:1rem; }
    .btn-row { display:flex; flex-wrap:wrap; gap:.5rem; align-items:center; }
    .result { background:#f8f9fa; padding:1rem; border-radius:8px; margin-top:1rem; }
    .dd-span { text-align:center; color:#495057; font-size:.95rem; }
    .dd-total-lab { text-align:center; color:#495057; margin-top:.5rem; }
    .dd-main { font-size:1.8rem; font-weight:600; text-align:center; font-variant-numeric:tabular-nums; }
    .dd-grid { display:grid; grid-template-columns:repeat(3, 1fr); gap:.5rem; margin-top:.75rem; }
    @media (max-width:576px) { .dd-grid { grid-template-columns:repeat(2, 1fr); } }
    .dd-stat { background:#fff; border:1px solid #e9ecef; border-radius:6px; padding:.5rem; text-align:center; }
    .dd-num { font-size:1.15rem; font-weight:600; font-variant-numeric:tabular-nums; }
    .dd-lab { color:#6c757d; font-size:.82rem; }
    .dd-line { color:#495057; font-size:.92rem; margin-top:.6rem; }
    .result .muted { color:#6c757d; font-size:.9rem; margin-top:.75rem; }
  </style>`;

	const contentHtml = `
    <div id="date-difference" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(tx('title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <form id="calcForm" novalidate>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label" for="ddStart">${escapeHtml(tx('start_label'))}</label>
              <div class="dd-date">
                <input id="ddStart" class="input-lg" type="date" min="0001-01-01" max="9999-12-31">
                <button type="button" id="ddStartToday" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx('today'))}</button>
              </div>
            </div>
            <div class="form-group">
              <label class="form-label" for="ddEnd">${escapeHtml(tx('end_label'))}</label>
              <div class="dd-date">
                <input id="ddEnd" class="input-lg" type="date" min="0001-01-01" max="9999-12-31">
                <button type="button" id="ddEndToday" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx('today'))}</button>
              </div>
            </div>
          </div>
          <label class="dd-check"><input type="checkbox" id="ddInclude"> ${escapeHtml(tx('include_label'))}</label>
          <span class="form-hint">${escapeHtml(tx('include_hint'))}</span>
          <div class="form-group">
            <label class="form-label" for="ddWeekendSel">${escapeHtml(tx('weekend_sel_label'))}</label>
            <select id="ddWeekendSel" class="input-lg">
              ${weekendOptions}
            </select>
          </div>
          <div class="btn-row">
            <button type="submit" id="ddBtnCalc" class="btn btn-primary">${escapeHtml(tx('calculate'))}</button>
            <button type="button" id="ddBtnSample" class="btn btn-outline-secondary">${escapeHtml(tx('sample'))}</button>
            <button type="button" id="ddBtnClear" class="btn btn-outline-secondary">${escapeHtml(tx('clear'))}</button>
          </div>
        </form>
        <div id="calcResult" class="result" style="display:none" aria-live="polite">
          <div id="ddSpan" class="dd-span"></div>
          <div id="ddTotalLab" class="dd-total-lab"></div>
          <div id="ddMain" class="dd-main"></div>
          <div id="ddDetails">
            <div class="dd-grid">${stat('ddYears', 'years_label')}${stat('ddMonths', 'months_label')}${stat('ddDays', 'days_label')}
            </div>
            <div class="dd-grid">${stat('ddWeeksDays', 'weeksdays_label')}${stat('ddWorkdays', 'workdays_label')}${stat('ddWeekend', 'weekend_label')}${stat('ddWeeks', 'weeks_label')}${stat('ddHours', 'hours_label')}
            </div>
            <div class="dd-line"><strong>${escapeHtml(tx('work_label'))}:</strong> <span id="ddWork"></span></div>
            <div id="ddExtra" class="dd-line"></div>
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
				href: 'https://en.wikipedia.org/wiki/ISO_8601',
			},
			{
				label: tx('ref_b_label'),
				href: 'https://en.wikipedia.org/wiki/Gregorian_calendar',
			},
		],
	});

	/** 前端脚本需要的文案（一次性注入）。 */
	const clientText = {
		errDate: tx('err_date'),
		note: tx('result_note'),
		total: tx('total_label'),
		totalIncl: tx('total_incl_label'),
		wd: tx('wd_tpl'),
		workMonths: tx('work_months'),
		workWeeks: tx('work_weeks'),
		swap: tx('swap_note'),
		incl: tx('incl_note'),
		leap: tx('leap_tpl'),
	};

	const extraBodyHtml = `
  <script>
    (function () {
      /** 表单与输入控件。 */
      var form = document.getElementById('calcForm');
      var startEl = document.getElementById('ddStart');
      var endEl = document.getElementById('ddEnd');
      var includeEl = document.getElementById('ddInclude');
      var weekendEl = document.getElementById('ddWeekendSel');
      /** 周末方案 → 星期序号（0 = 周日 … 6 = 周六）。 */
      var WEEKENDS = { 'sat-sun': [6, 0], 'fri-sat': [5, 6], sun: [0], fri: [5] };
      /** 本语言页面的默认周末方案（清空时恢复）。 */
      var DEFAULT_WEEKEND = ${JSON.stringify(defaultWeekend)};
      /** 结果区各输出位。 */
      var result = document.getElementById('calcResult');
      var detailsEl = document.getElementById('ddDetails');
      var spanEl = document.getElementById('ddSpan');
      var totalLabEl = document.getElementById('ddTotalLab');
      var mainEl = document.getElementById('ddMain');
      var workEl = document.getElementById('ddWork');
      var extraEl = document.getElementById('ddExtra');
      var noteEl = document.getElementById('calcNote');
      /** 当前页面语言（决定日期与数字格式）。 */
      var LANG = ${JSON.stringify(opts.lang)};
      /** 本地化文案字典。 */
      var T = ${JSON.stringify(clientText)};
      /** 一天的毫秒数。 */
      var DAY = 86400000;
      /** 样例轮换：[开始, 结束, 是否包含结束日]；首个与 Example 一致。 */
      var SAMPLES = [
        ['2024-01-01', '2024-03-15', false],
        ['2023-01-31', '2023-03-01', false],
        ['2026-01-05', '2026-01-30', true],
        ['1990-05-17', '2026-10-14', false]
      ];
      /** 下一次点击「加载样例」使用的样例下标。 */
      var sampleIndex = 0;

      /** 整数与小数格式器（拉丁数字）。 */
      var intFormat = null;
      var decFormat = null;
      /** 长日期（含星期）与中等日期格式器，固定 UTC 以免时区偏移一天。 */
      var longDate = null;
      var midDate = null;
      try {
        intFormat = new Intl.NumberFormat(LANG + '-u-nu-latn', { maximumFractionDigits: 0 });
        decFormat = new Intl.NumberFormat(LANG + '-u-nu-latn', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        longDate = new Intl.DateTimeFormat(LANG + '-u-nu-latn', { dateStyle: 'full', timeZone: 'UTC' });
        midDate = new Intl.DateTimeFormat(LANG + '-u-nu-latn', { dateStyle: 'medium', timeZone: 'UTC' });
      } catch (e) {
        intFormat = null;
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
       * 整数显示（本地千分位）。
       * @param {number} n 整数
       * @returns {string} 本地格式文本
       */
      function num(n) {
        return intFormat ? intFormat.format(n) : String(n);
      }

      /**
       * 日期显示。
       * @param {number} ms UTC 毫秒
       * @param {boolean} full 是否含星期的长格式
       * @returns {string} 本地格式日期
       */
      function dateText(ms, full) {
        var f = full ? longDate : midDate;
        if (f) {
          try {
            return f.format(new Date(ms));
          } catch (e) {
            /* 回退到 ISO 写法 */
          }
        }
        return new Date(ms).toISOString().slice(0, 10);
      }

      /**
       * 构造 UTC 日期毫秒（setUTCFullYear 避免 0–99 年被当成 1900 年代）。
       * @param {number} y 年
       * @param {number} m 月（0 起）
       * @param {number} d 日
       * @returns {number} UTC 毫秒
       */
      function utc(y, m, d) {
        var dt = new Date(Date.UTC(2000, 0, 1));
        dt.setUTCFullYear(y, m, d);
        return dt.getTime();
      }

      /**
       * 某年某月的天数。
       * @param {number} y 年
       * @param {number} m 月（0 起，可越界，自动折算）
       * @returns {number} 天数
       */
      function daysInMonth(y, m) {
        return new Date(utc(y, m + 1, 0)).getUTCDate();
      }

      /**
       * 解析 YYYY-MM-DD；校验日期真实存在。
       * @param {string} s 输入值
       * @returns {number|null} UTC 毫秒；无效返回 null
       */
      function parseYMD(s) {
        var m = /^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})$/.exec(String(s || '').trim());
        if (!m) return null;
        var y = +m[1];
        var mo = +m[2] - 1;
        var d = +m[3];
        if (y < 1) return null;
        var ms = utc(y, mo, d);
        var dt = new Date(ms);
        if (dt.getUTCFullYear() !== y || dt.getUTCMonth() !== mo || dt.getUTCDate() !== d) return null;
        return ms;
      }

      /**
       * 从 a 起加若干个月（日超出月末时取月末）。
       * @param {number} a 起点 UTC 毫秒
       * @param {number} n 月数
       * @returns {number} UTC 毫秒
       */
      function addMonths(a, n) {
        var A = new Date(a);
        var total = A.getUTCMonth() + n;
        var y = A.getUTCFullYear() + Math.floor(total / 12);
        var mo = ((total % 12) + 12) % 12;
        return utc(y, mo, Math.min(A.getUTCDate(), daysInMonth(y, mo)));
      }

      /**
       * 区间 [a, a + days) 内的工作日天数（周末按所选方案扣除）。
       * @param {number} a 起点（含）
       * @param {number} days 天数
       * @param {number[]} weekend 周末星期序号（0 = 周日 … 6 = 周六）
       * @returns {number} 工作日天数
       */
      function countWeekdays(a, days, weekend) {
        var full = Math.floor(days / 7);
        var count = full * (7 - weekend.length);
        var w = new Date(a).getUTCDay();
        for (var i = 0; i < days % 7; i++) {
          if (weekend.indexOf((w + i) % 7) < 0) count++;
        }
        return count;
      }

      /**
       * 区间 [a, b) 内的 2 月 29 日个数。
       * @param {number} a 起点（含）
       * @param {number} b 终点（不含）
       * @returns {number} 闰日个数
       */
      function countLeapDays(a, b) {
        var n = 0;
        var y1 = new Date(a).getUTCFullYear();
        var y2 = new Date(b).getUTCFullYear();
        for (var y = y1; y <= y2; y++) {
          var isLeap = (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;
          if (!isLeap) continue;
          var leap = utc(y, 1, 29);
          if (leap >= a && leap < b) n++;
        }
        return n;
      }

      /**
       * 计算两个日期之间的各项间隔。
       * @returns {{ ok: boolean, error?: string, values?: Object }}
       */
      function compute() {
        var a = parseYMD(startEl.value);
        var b = parseYMD(endEl.value);
        if (a == null || b == null) return { ok: false, error: T.errDate };
        var swapped = b < a;
        if (swapped) {
          var tmp = a;
          a = b;
          b = tmp;
        }
        var include = !!includeEl.checked;
        /** 包含结束日：把终点后移一天，所有统计按 [a, end) 计算。 */
        var end = include ? b + DAY : b;
        var days = Math.round((end - a) / DAY);
        var A = new Date(a);
        var E = new Date(end);
        var months = (E.getUTCFullYear() - A.getUTCFullYear()) * 12 + (E.getUTCMonth() - A.getUTCMonth());
        if (addMonths(a, months) > end) months--;
        var anchor = addMonths(a, months);
        var restDays = Math.round((end - anchor) / DAY);
        var workdays = countWeekdays(a, days, WEEKENDS[weekendEl.value] || WEEKENDS['sat-sun']);
        return {
          ok: true,
          values: {
            a: a, b: b, end: end, swapped: swapped, include: include, days: days,
            years: Math.floor(months / 12), monthsRest: months % 12, months: months,
            anchor: anchor, restDays: restDays, workdays: workdays,
            leap: countLeapDays(a, end),
          },
        };
      }

      /**
       * 写入统计格数字。
       * @param {string} id 元素 id
       * @param {string} text 文本
       */
      function setStat(id, text) {
        document.getElementById(id).textContent = text;
      }

      /** 执行计算并刷新结果区；失败时隐藏明细并显示具体错误。 */
      function runCalc() {
        var out = compute();
        result.style.display = 'block';
        if (!out || !out.ok) {
          spanEl.textContent = '';
          totalLabEl.textContent = '';
          mainEl.textContent = '—';
          detailsEl.style.display = 'none';
          noteEl.textContent = (out && out.error) || T.errDate;
          return false;
        }
        var v = out.values;
        spanEl.textContent = dateText(v.a, true) + ' → ' + dateText(v.b, true);
        totalLabEl.textContent = v.include ? T.totalIncl : T.total;
        mainEl.textContent = num(v.days);
        setStat('ddYears', num(v.years));
        setStat('ddMonths', num(v.monthsRest));
        setStat('ddDays', num(v.restDays));
        setStat('ddWeeksDays', fill(T.wd, { w: num(Math.floor(v.days / 7)), d: v.days % 7 }));
        setStat('ddWorkdays', num(v.workdays));
        setStat('ddWeekend', num(v.days - v.workdays));
        setStat('ddWeeks', decFormat ? decFormat.format(v.days / 7) : (v.days / 7).toFixed(2));
        setStat('ddHours', num(v.days * 24));
        workEl.textContent = fill(T.workMonths, {
          start: dateText(v.a, false),
          anchor: dateText(v.anchor, false),
          end: dateText(v.end, false),
          months: num(v.months),
          days: num(v.restDays),
        }) + ' ' + fill(T.workWeeks, { days: num(v.days), w: num(Math.floor(v.days / 7)), r: v.days % 7 });
        var extra = [];
        if (v.swapped) extra.push(T.swap);
        if (v.include) extra.push(fill(T.incl, { next: dateText(v.end, false) }));
        if (v.leap > 0) extra.push(fill(T.leap, { n: num(v.leap) }));
        extraEl.textContent = extra.join(' ');
        extraEl.style.display = extra.length ? '' : 'none';
        detailsEl.style.display = '';
        noteEl.textContent = T.note;
        return true;
      }

      /**
       * 用户本地时区的今天（YYYY-MM-DD）。
       * @returns {string} 今天的日期
       */
      function todayText() {
        var now = new Date();
        var mm = String(now.getMonth() + 1);
        var dd = String(now.getDate());
        return now.getFullYear() + '-' + (mm.length < 2 ? '0' + mm : mm) + '-' + (dd.length < 2 ? '0' + dd : dd);
      }

      /** 加载样例：依次轮换（首个与 Example 一致）。 */
      function loadSample() {
        var smp = SAMPLES[sampleIndex];
        sampleIndex = (sampleIndex + 1) % SAMPLES.length;
        startEl.value = smp[0];
        endEl.value = smp[1];
        includeEl.checked = smp[2];
        runCalc();
      }

      /** 两个日期都已填写时立即重算（用于勾选与「今天」按钮）。 */
      function recalcIfReady() {
        if (String(startEl.value).trim() && String(endEl.value).trim()) runCalc();
      }

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        runCalc();
      });
      includeEl.addEventListener('change', recalcIfReady);
      weekendEl.addEventListener('change', recalcIfReady);
      document.getElementById('ddStartToday').addEventListener('click', function () {
        startEl.value = todayText();
        recalcIfReady();
      });
      document.getElementById('ddEndToday').addEventListener('click', function () {
        endEl.value = todayText();
        recalcIfReady();
      });
      document.getElementById('ddBtnSample').addEventListener('click', loadSample);
      /** 清空：只清输入并隐藏结果，不重新加载样例。 */
      document.getElementById('ddBtnClear').addEventListener('click', function () {
        startEl.value = '';
        endEl.value = '';
        includeEl.checked = false;
        weekendEl.value = DEFAULT_WEEKEND;
        result.style.display = 'none';
        startEl.focus();
      });
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('how-to-calculate-date-difference');
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
