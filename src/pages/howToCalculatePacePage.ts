/**
 * 配速计算器工具页：由距离与用时求配速、由距离与配速求完赛时间、由用时与配速求距离；
 * 同时给出每公里 / 每英里配速、速度、400 m 圈速、分段计时表与 Riegel 成绩预测。
 * slug: how-to-calculate-pace（见 work-tasks/how-to-calculate-pace/02-tool-info.md）。
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
const PREFIX = 'tool_pace';

/** 距离预设：值 → [标签键, 距离数值, 单位]。 */
const PRESETS: Array<[string, string, string, string]> = [
	['custom', 'preset_custom', '', ''],
	['400', 'preset_400', '400', 'm'],
	['mile', 'preset_mile', '1', 'mi'],
	['5k', 'preset_5k', '5', 'km'],
	['10k', 'preset_10k', '10', 'km'],
	['half', 'preset_half', '21.0975', 'km'],
	['full', 'preset_full', '42.195', 'km'],
];

/** 为路径加上语言前缀（默认语无前缀）。 */
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * 渲染 how-to-calculate-pace 工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 * @returns 完整页面 HTML
 */
export const renderHowToCalculatePacePage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 读取本工具键（自动拼前缀）。 */
	const tx = (key: string) => t(opts.lang, `${PREFIX}_${key}` as keyof typeof import('../site/i18n/en').default);

	const toolPath = '/tools/how-to-calculate-pace';
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
			currentSlug: 'how-to-calculate-pace',
			currentAnchor: '#pace',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	/** 距离预设下拉选项。 */
	const presetOptions = PRESETS.map(
		([value, labelKey]) => `<option value="${value}"${value === '5k' ? ' selected' : ''}>${escapeHtml(tx(labelKey))}</option>`
	).join('');

	const extraHeadHtml = `
  <style>
    .tool-card { max-width: var(--content-max); width: 100%; margin: 0 0 1.5rem; }
    .form-label { display:block; margin-bottom:.5rem; color:#495057; font-weight:500 }
    .form-hint { display:block; color:#6c757d; font-size:.85rem; margin:-.25rem 0 .75rem; }
    .form-group { margin-bottom:1rem; }
    .form-row2 { display:grid; grid-template-columns:repeat(2, minmax(0, 1fr)); gap:0 1rem; }
    @media (max-width:576px) { .form-row2 { grid-template-columns:minmax(0, 1fr); } }
    .form-row2 .input-lg { width:100%; max-width:100%; box-sizing:border-box; }
    .pc-pair { display:flex; gap:.5rem; }
    .pc-pair input { flex:1 1 auto; min-width:0; }
    .form-row2 .pc-pair select { flex:0 0 5.5rem; width:5.5rem; }
    .btn-row { display:flex; flex-wrap:wrap; gap:.5rem; align-items:center; }
    .result { background:#f8f9fa; padding:1rem; border-radius:8px; margin-top:1rem; }
    .pc-main-label { text-align:center; color:#495057; font-size:.95rem; }
    .pc-main { font-size:1.6rem; font-weight:600; text-align:center; margin:.15rem 0 .5rem; font-variant-numeric:tabular-nums; }
    .pc-row { color:#495057; font-size:.92rem; margin-top:.45rem; font-variant-numeric:tabular-nums; }
    .pc-h { font-size:1rem; font-weight:600; margin:1rem 0 .35rem; }
    .pc-table { width:100%; border-collapse:collapse; font-size:.9rem; font-variant-numeric:tabular-nums; }
    .pc-table th, .pc-table td { padding:.3rem .5rem; border-bottom:1px solid #dee2e6; text-align:start; }
    .pc-table th { color:#495057; font-weight:600; }
    .pc-table tr.pc-mark td { font-weight:600; }
    .pc-scroll { max-height:16rem; overflow:auto; }
    .result .muted { color:#6c757d; font-size:.9rem; margin-top:.75rem; }
  </style>`;

	const contentHtml = `
    <div id="pace" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(tx('title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <form id="calcForm" novalidate>
          <div class="form-row2">
            <div class="form-group">
              <label class="form-label" for="pcMode">${escapeHtml(tx('mode_label'))}</label>
              <select id="pcMode" class="input-lg">
                <option value="pace" selected>${escapeHtml(tx('mode_pace'))}</option>
                <option value="time">${escapeHtml(tx('mode_time'))}</option>
                <option value="dist">${escapeHtml(tx('mode_dist'))}</option>
              </select>
            </div>
            <div class="form-group pc-need-dist">
              <label class="form-label" for="pcPreset">${escapeHtml(tx('preset_label'))}</label>
              <select id="pcPreset" class="input-lg">${presetOptions}</select>
            </div>
          </div>
          <div class="form-row2">
            <div class="form-group pc-need-dist">
              <label class="form-label" for="pcDist">${escapeHtml(tx('dist_label'))}</label>
              <div class="pc-pair">
                <input id="pcDist" class="input-lg" type="text" inputmode="decimal" autocomplete="off" placeholder="${escapeHtml(tx('dist_ph'))}">
                <select id="pcDistUnit" class="input-lg" aria-label="${escapeHtml(tx('dist_label'))}">
                  <option value="km" selected>${escapeHtml(tx('unit_km'))}</option>
                  <option value="mi">${escapeHtml(tx('unit_mi'))}</option>
                  <option value="m">${escapeHtml(tx('unit_m'))}</option>
                </select>
              </div>
            </div>
            <div class="form-group pc-need-time">
              <label class="form-label" for="pcTime">${escapeHtml(tx('time_label'))}</label>
              <input id="pcTime" class="input-lg" type="text" inputmode="decimal" autocomplete="off" placeholder="${escapeHtml(tx('time_ph'))}">
            </div>
            <div class="form-group pc-need-pace" style="display:none">
              <label class="form-label" for="pcPace">${escapeHtml(tx('pace_label'))}</label>
              <div class="pc-pair">
                <input id="pcPace" class="input-lg" type="text" inputmode="decimal" autocomplete="off" placeholder="${escapeHtml(tx('pace_ph'))}">
                <select id="pcPaceUnit" class="input-lg" aria-label="${escapeHtml(tx('pace_label'))}">
                  <option value="km" selected>${escapeHtml(tx('pace_unit_km'))}</option>
                  <option value="mi">${escapeHtml(tx('pace_unit_mi'))}</option>
                </select>
              </div>
            </div>
          </div>
          <span class="form-hint">${escapeHtml(tx('hint_time'))}</span>
          <div class="btn-row">
            <button type="submit" id="pcBtnCalc" class="btn btn-primary">${escapeHtml(tx('calculate'))}</button>
            <button type="button" id="pcBtnSample" class="btn btn-outline-secondary">${escapeHtml(tx('sample'))}</button>
            <button type="button" id="pcBtnClear" class="btn btn-outline-secondary">${escapeHtml(tx('clear'))}</button>
          </div>
        </form>
        <div id="calcResult" class="result" style="display:none" aria-live="polite">
          <div id="pcMainLabel" class="pc-main-label"></div>
          <div id="pcMain" class="pc-main"></div>
          <div id="pcRows"></div>
          <div id="pcSplitsWrap">
            <div class="pc-h">${escapeHtml(tx('splits_title'))}</div>
            <div class="pc-scroll">
              <table class="pc-table">
                <thead><tr><th>${escapeHtml(tx('splits_col_split'))}</th><th>${escapeHtml(tx('splits_col_time'))}</th></tr></thead>
                <tbody id="pcSplits"></tbody>
              </table>
            </div>
          </div>
          <div id="pcPredictWrap">
            <div class="pc-h">${escapeHtml(tx('predict_title'))}</div>
            <table class="pc-table">
              <thead><tr><th>${escapeHtml(tx('predict_col_race'))}</th><th>${escapeHtml(tx('predict_col_time'))}</th><th>${escapeHtml(tx('predict_col_pace'))}</th></tr></thead>
              <tbody id="pcPredict"></tbody>
            </table>
            <div class="muted">${escapeHtml(tx('predict_note'))}</div>
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
				href: 'https://en.wikipedia.org/wiki/Pace_(speed)',
			},
			{
				label: tx('ref_b_label'),
				href: 'https://en.wikipedia.org/wiki/Peter_Riegel',
			},
		],
	});

	/** 前端脚本需要的文案（一次性注入）。 */
	const clientText = {
		lang: opts.lang,
		decComma: (['de', 'es', 'pt', 'fr', 'ru', 'id'] as string[]).includes(opts.lang),
		unitKm: tx('unit_km'),
		unitMi: tx('unit_mi'),
		unitM: tx('unit_m'),
		paceKm: tx('pace_unit_km'),
		paceMi: tx('pace_unit_mi'),
		speedKmh: tx('speed_kmh'),
		speedMph: tx('speed_mph'),
		outPace: tx('out_pace'),
		outTime: tx('out_time'),
		outDist: tx('out_dist'),
		rowPace: tx('row_pace'),
		rowSpeed: tx('row_speed'),
		rowLap: tx('row_lap'),
		rowTime: tx('row_time'),
		rowDist: tx('row_dist'),
		rowWork: tx('row_work'),
		workPace: tx('work_pace_tpl'),
		workTime: tx('work_time_tpl'),
		workDist: tx('work_dist_tpl'),
		splitKm: tx('split_km_tpl'),
		splitMi: tx('split_mi_tpl'),
		splitFinish: tx('split_finish'),
		races: [tx('race_5k'), tx('race_10k'), tx('race_half'), tx('race_full')],
		errDist: tx('err_dist'),
		errTime: tx('err_time'),
		errPace: tx('err_pace'),
		note: tx('result_note'),
	};

	/** 距离预设（前端用）：值 → [距离, 单位]。 */
	const presetMap = Object.fromEntries(PRESETS.filter(([v]) => v !== 'custom').map(([v, , d, u]) => [v, [d, u]]));

	const extraBodyHtml = `
  <script>
    (function () {
      /** 表单与输入控件。 */
      var form = document.getElementById('calcForm');
      var modeEl = document.getElementById('pcMode');
      var presetEl = document.getElementById('pcPreset');
      var distEl = document.getElementById('pcDist');
      var distUnitEl = document.getElementById('pcDistUnit');
      var timeEl = document.getElementById('pcTime');
      var paceEl = document.getElementById('pcPace');
      var paceUnitEl = document.getElementById('pcPaceUnit');
      /** 结果区各输出位。 */
      var result = document.getElementById('calcResult');
      var mainLabelEl = document.getElementById('pcMainLabel');
      var mainEl = document.getElementById('pcMain');
      var rowsEl = document.getElementById('pcRows');
      var splitsWrap = document.getElementById('pcSplitsWrap');
      var splitsEl = document.getElementById('pcSplits');
      var predictWrap = document.getElementById('pcPredictWrap');
      var predictEl = document.getElementById('pcPredict');
      var noteEl = document.getElementById('calcNote');
      /** 本地化文案字典。 */
      var T = ${JSON.stringify(clientText)};
      /** 距离预设：值 → [距离, 单位]。 */
      var PRESET = ${JSON.stringify(presetMap)};
      /** 每单位的公里数。 */
      var KM_PER = { km: 1, mi: 1.609344, m: 0.001 };
      /** 预测表用的比赛距离（公里）。 */
      var RACES_KM = [5, 10, 21.0975, 42.195];
      /** Riegel 公式指数。 */
      var RIEGEL = 1.06;
      /** 时间各段：整数或带小数的数字。 */
      var PART_RE = /^[0-9]+([.][0-9]+)?$/;
      /** 距离：数字（小数点或逗号）。 */
      var NUM_RE = /^[0-9]*[.]?[0-9]+$|^[0-9]+[.]$/;
      /** 样例轮换；首个与 Example 一致。 */
      var SAMPLES = [
        { mode: 'pace', preset: '5k', time: '25:00' },
        { mode: 'time', preset: 'half', pace: '5:30', paceUnit: 'km' },
        { mode: 'dist', time: '1:00:00', pace: '8:00', paceUnit: 'mi', distUnit: 'mi' }
      ];
      /** 下一次点击「加载样例」使用的样例下标。 */
      var sampleIndex = 0;
      /** 本地化数字格式器缓存。 */
      var nfCache = {};

      /**
       * 按页面语言格式化数字（拉丁数字）。
       * @param {number} v 数值
       * @param {number} d 小数位
       * @returns {string}
       */
      function nf(v, d) {
        return nfRange(v, d, d);
      }

      /**
       * 按页面语言格式化数字，小数位在 [minD, maxD] 之间（去掉多余的零）。
       * @param {number} v 数值
       * @param {number} minD 最少小数位
       * @param {number} maxD 最多小数位
       * @returns {string}
       */
      function nfRange(v, minD, maxD) {
        var key = minD + '-' + maxD;
        if (!nfCache[key]) nfCache[key] = new Intl.NumberFormat(T.lang + '-u-nu-latn', { minimumFractionDigits: minD, maximumFractionDigits: maxD });
        return nfCache[key].format(v);
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
       * 两位补零。
       * @param {number} n 0–59
       * @returns {string}
       */
      function pad2(n) {
        return n < 10 ? '0' + n : String(n);
      }

      /**
       * 秒数写成 h:mm:ss 或 m:ss（四舍五入到整秒）。
       * @param {number} sec 秒
       * @returns {string}
       */
      function clock(sec) {
        var total = Math.round(sec);
        var h = Math.floor(total / 3600);
        var m = Math.floor((total % 3600) / 60);
        var s = total % 60;
        return h > 0 ? h + ':' + pad2(m) + ':' + pad2(s) : m + ':' + pad2(s);
      }

      /**
       * 解析时间：h:mm:ss、mm:ss，或纯数字（按分钟）；小数逗号可用。
       * @param {string} raw 输入
       * @returns {number|null} 秒
       */
      function parseClock(raw) {
        var s = String(raw || '').trim().split(' ').join('').split(',').join('.');
        if (!s) return null;
        var parts = s.split(':');
        if (parts.length > 3) return null;
        for (var i = 0; i < parts.length; i++) {
          if (!PART_RE.test(parts[i])) return null;
          if (i < parts.length - 1 && parts[i].indexOf('.') >= 0) return null;
        }
        var nums = parts.map(Number);
        if (nums.length === 1) return nums[0] > 0 ? nums[0] * 60 : null;
        for (var j = 1; j < nums.length; j++) if (nums[j] >= 60) return null;
        var sec = nums.length === 2 ? nums[0] * 60 + nums[1] : nums[0] * 3600 + nums[1] * 60 + nums[2];
        return sec > 0 ? sec : null;
      }

      /**
       * 解析距离（小数点或小数逗号，忽略空格）。
       * @param {string} raw 输入
       * @returns {number|null} 正数
       */
      function parseDist(raw) {
        var s = String(raw || '').trim().split(' ').join('').split(',').join('.');
        if (!NUM_RE.test(s)) return null;
        var v = parseFloat(s);
        return v > 0 ? v : null;
      }

      /**
       * 距离写法：数值 + 单位符号。
       * @param {number} v 数值
       * @param {string} unit km | mi | m
       * @param {number} [maxD] 最多小数位（输入回显用 4，计算结果用 2）
       * @returns {string}
       */
      function distText(v, unit, maxD) {
        var sym = unit === 'mi' ? T.unitMi : unit === 'm' ? T.unitM : T.unitKm;
        return nfRange(v, 0, unit === 'm' ? 0 : maxD == null ? 2 : maxD) + ' ' + sym;
      }

      /**
       * 结果区追加一行「标签：值」。
       * @param {string} label 标签
       * @param {string} value 值
       */
      function addRow(label, value) {
        var div = document.createElement('div');
        div.className = 'pc-row';
        var strong = document.createElement('strong');
        strong.textContent = label + ': ';
        div.appendChild(strong);
        div.appendChild(document.createTextNode(value));
        rowsEl.appendChild(div);
      }

      /**
       * 表格追加一行。
       * @param {HTMLElement} body tbody
       * @param {string[]} cells 单元格文本
       * @param {boolean} mark 是否加粗
       */
      function addTr(body, cells, mark) {
        var tr = document.createElement('tr');
        if (mark) tr.className = 'pc-mark';
        cells.forEach(function (c) {
          var td = document.createElement('td');
          td.textContent = c;
          tr.appendChild(td);
        });
        body.appendChild(tr);
      }

      /**
       * 显示错误。
       * @param {string} msg 文案
       */
      function showError(msg) {
        result.style.display = 'block';
        mainLabelEl.textContent = '';
        mainEl.textContent = '—';
        rowsEl.textContent = '';
        splitsWrap.style.display = 'none';
        predictWrap.style.display = 'none';
        noteEl.textContent = msg;
      }

      /**
       * 分段计时表：按距离单位逐公里或逐英里列累计用时，末行为终点。
       * @param {number} km 总距离（公里）
       * @param {number} secPerKm 每公里秒数
       * @param {string} unit 输入距离单位
       */
      function renderSplits(km, secPerKm, unit) {
        splitsEl.textContent = '';
        var perMile = unit === 'mi';
        var unitKm = perMile ? KM_PER.mi : 1;
        var total = km / unitKm;
        var whole = Math.floor(total + 1e-9);
        var step = Math.max(1, Math.ceil(whole / 50));
        for (var n = step; n <= whole; n += step) {
          if (Math.abs(n - total) < 1e-9) break;
          addTr(splitsEl, [fill(perMile ? T.splitMi : T.splitKm, { n: n }), clock(n * unitKm * secPerKm)], false);
        }
        addTr(splitsEl, [T.splitFinish + ' · ' + distText(total, perMile ? 'mi' : 'km', 4), clock(km * secPerKm)], true);
        splitsWrap.style.display = total >= 1 ? '' : 'none';
      }

      /**
       * Riegel 成绩预测：T2 = T1 × (D2 ÷ D1)^1.06；输入距离在 1.5–42.195 km 之外时隐藏。
       * @param {number} km 已知距离（公里）
       * @param {number} sec 已知用时（秒）
       */
      function renderPredict(km, sec) {
        predictEl.textContent = '';
        if (km < 1.5 || km > 42.2) {
          predictWrap.style.display = 'none';
          return;
        }
        RACES_KM.forEach(function (d, i) {
          var t2 = sec * Math.pow(d / km, RIEGEL);
          var same = Math.abs(d - km) < 0.01;
          addTr(predictEl, [T.races[i], clock(same ? sec : t2), clock((same ? sec : t2) / d) + ' ' + T.paceKm], same);
        });
        predictWrap.style.display = '';
      }

      /**
       * 输出共用部分：主结果、配速、速度、圈速、分段表、预测表。
       * @param {string} label 主结果标签
       * @param {string} main 主结果
       * @param {number} km 距离（公里）
       * @param {number} sec 用时（秒）
       * @param {string} unit 距离单位
       * @param {string} work 计算过程
       */
      function show(label, main, km, sec, unit, work) {
        var secPerKm = sec / km;
        var kmh = 3600 / secPerKm;
        result.style.display = 'block';
        rowsEl.textContent = '';
        mainLabelEl.textContent = label;
        mainEl.textContent = main;
        addRow(T.rowWork, work);
        addRow(T.rowPace, clock(secPerKm) + ' ' + T.paceKm + '  ·  ' + clock(secPerKm * KM_PER.mi) + ' ' + T.paceMi);
        addRow(T.rowSpeed, nf(kmh, 2) + ' ' + T.speedKmh + '  ·  ' + nf(kmh / KM_PER.mi, 2) + ' ' + T.speedMph);
        addRow(T.rowLap, clock(secPerKm * 0.4));
        renderSplits(km, secPerKm, unit);
        renderPredict(km, sec);
        noteEl.textContent = T.note;
      }

      /**
       * 读距离（公里）。
       * @returns {{ v: number, unit: string, km: number }|null}
       */
      function readDist() {
        var v = parseDist(distEl.value);
        if (v == null) return null;
        var unit = distUnitEl.value;
        return { v: v, unit: unit, km: v * KM_PER[unit] };
      }

      /**
       * 读配速（每公里秒数）。
       * @returns {{ raw: number, unit: string, secPerKm: number }|null}
       */
      function readPace() {
        var p = parseClock(paceEl.value);
        if (p == null) return null;
        var unit = paceUnitEl.value;
        return { raw: p, unit: unit, secPerKm: p / KM_PER[unit] };
      }

      /** 按当前模式计算。 */
      function run() {
        var mode = modeEl.value;
        var d;
        var t;
        var p;
        if (mode === 'pace') {
          d = readDist();
          if (!d) return showError(T.errDist);
          t = parseClock(timeEl.value);
          if (t == null) return showError(T.errTime);
          var paceSec = t / d.v;
          var paceUnit = d.unit === 'mi' ? T.paceMi : T.paceKm;
          var shownPace = d.unit === 'm' ? t / d.km : paceSec;
          var mainPace = clock(shownPace) + ' ' + (d.unit === 'mi' ? T.paceMi : T.paceKm);
          var work = fill(T.workPace, { t: clock(t), s: nf(Math.round(t), 0), d: distText(d.v, d.unit, 4), p: clock(shownPace) + ' ' + (d.unit === 'm' ? T.paceKm : paceUnit) });
          return show(T.outPace, mainPace, d.km, t, d.unit, work);
        }
        if (mode === 'time') {
          d = readDist();
          if (!d) return showError(T.errDist);
          p = readPace();
          if (!p) return showError(T.errPace);
          var sec = p.secPerKm * d.km;
          var distInPaceUnit = d.km / KM_PER[p.unit];
          var workT = fill(T.workTime, { d: distText(distInPaceUnit, p.unit, 4), p: clock(p.raw) + ' ' + (p.unit === 'mi' ? T.paceMi : T.paceKm), t: clock(sec) });
          return show(T.outTime, clock(sec), d.km, sec, d.unit, workT);
        }
        t = parseClock(timeEl.value);
        if (t == null) return showError(T.errTime);
        p = readPace();
        if (!p) return showError(T.errPace);
        var km = t / p.secPerKm;
        var outUnit = distUnitEl.value === 'm' ? 'km' : distUnitEl.value;
        var outVal = km / KM_PER[outUnit];
        var other = outUnit === 'mi' ? distText(km, 'km') : distText(km / KM_PER.mi, 'mi');
        var workD = fill(T.workDist, { t: clock(t), p: clock(p.raw) + ' ' + (p.unit === 'mi' ? T.paceMi : T.paceKm), d: distText(t / p.raw, p.unit) });
        show(T.outDist, distText(outVal, outUnit) + ' (' + other + ')', km, t, outUnit, workD);
      }

      /** 按模式显隐输入组。 */
      function syncMode() {
        var mode = modeEl.value;
        var need = { pace: ['dist', 'time'], time: ['dist', 'pace'], dist: ['time', 'pace'] }[mode];
        ['dist', 'time', 'pace'].forEach(function (k) {
          document.querySelectorAll('.pc-need-' + k).forEach(function (el) {
            el.style.display = need.indexOf(k) >= 0 ? '' : 'none';
          });
        });
      }

      /** 选择预设：填入距离与单位。 */
      function applyPreset() {
        var pr = PRESET[presetEl.value];
        if (!pr) return;
        distEl.value = T.decComma ? pr[0].split('.').join(',') : pr[0];
        distUnitEl.value = pr[1];
      }

      /** 手动改距离或单位时，预设切回「自定义」。 */
      function onDistEdit() {
        presetEl.value = 'custom';
      }

      /** 加载样例：5K 求配速 → 半马求完赛时间 → 1 小时按英里配速求距离，轮换。 */
      function loadSample() {
        var s = SAMPLES[sampleIndex];
        sampleIndex = (sampleIndex + 1) % SAMPLES.length;
        modeEl.value = s.mode;
        presetEl.value = s.preset || 'custom';
        if (s.preset) applyPreset();
        else {
          distEl.value = '';
          distUnitEl.value = s.distUnit || 'km';
        }
        timeEl.value = s.time || '';
        paceEl.value = s.pace || '';
        paceUnitEl.value = s.paceUnit || 'km';
        syncMode();
        run();
      }

      /** 清空：清输入、恢复「求配速」与 5K 以外的自定义距离，隐藏结果；不重载样例。 */
      function clearAll() {
        modeEl.value = 'pace';
        presetEl.value = 'custom';
        distEl.value = '';
        distUnitEl.value = 'km';
        timeEl.value = '';
        paceEl.value = '';
        paceUnitEl.value = 'km';
        syncMode();
        result.style.display = 'none';
        distEl.focus();
      }

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        run();
      });
      modeEl.addEventListener('change', function () {
        syncMode();
        result.style.display = 'none';
      });
      presetEl.addEventListener('change', applyPreset);
      distEl.addEventListener('input', onDistEdit);
      distUnitEl.addEventListener('change', onDistEdit);
      document.getElementById('pcBtnSample').addEventListener('click', loadSample);
      document.getElementById('pcBtnClear').addEventListener('click', clearAll);
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('how-to-calculate-pace');
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
