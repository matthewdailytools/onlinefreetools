/**
 * 速度计算器工具页。
 * slug: how-to-calculate-velocity（见 work-tasks/how-to-calculate-velocity/02-tool-info.md）。
 *
 * 交互要点（2026-10-15 改写）：
 * - 四种模式：求速度（v = d ÷ t）/ 求距离（d = v × t）/ 求时间（t = d ÷ v）/ 多段行程平均速度；
 * - 前三种模式各自带单位（m、km、mi、ft、nmi；s、min、h；m/s、km/h、mph、ft/s、kn），
 *   结果单位随输入自动匹配（如 km 配 km/h），并给出换算步骤与全部单位的换算行；
 * - 求时间结果用 h:mm:ss 显示，同时给出小时与分钟的小数值；
 * - 多段行程：最多 3 段（每段距离 + 速度），总距离 ÷ 总时间得平均速度，
 *   演示「各段速度简单平均」偏高多少；可选填起点到终点的直线距离（位移），给出平均速度矢量的大小；
 * - 输入容错：千分位、小数逗号；负数、零时间、零速度、位移大于路程等分别提示。
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
const PREFIX = 'tool_velocity';

/** 距离单位：值 → [符号键, 换算成米的系数]。 */
const DIST_UNITS: Array<[string, string, number]> = [
	['m', 'sym_m', 1],
	['km', 'sym_km', 1000],
	['mi', 'sym_mi', 1609.344],
	['ft', 'sym_ft', 0.3048],
	['nmi', 'sym_nmi', 1852],
];

/** 时间单位：值 → [符号键, 换算成秒的系数]。 */
const TIME_UNITS: Array<[string, string, number]> = [
	['s', 'sym_s', 1],
	['min', 'sym_min', 60],
	['h', 'sym_h', 3600],
];

/** 速度单位：值 → [符号键, 换算成 m/s 的系数]。 */
const SPEED_UNITS: Array<[string, string, number]> = [
	['ms', 'sym_ms', 1],
	['kmh', 'sym_kmh', 1000 / 3600],
	['mph', 'sym_mph', 0.44704],
	['fts', 'sym_fts', 0.3048],
	['kn', 'sym_kn', 1852 / 3600],
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
 * 渲染 how-to-calculate-velocity 工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 * @returns 完整页面 HTML
 */
export const renderHowToCalculateVelocityPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 读取本工具键（自动拼前缀）。 */
	const tx = (key: string) => t(opts.lang, `${PREFIX}_${key}` as keyof typeof import('../site/i18n/en').default);

	const toolPath = '/tools/how-to-calculate-velocity';
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
			currentSlug: 'how-to-calculate-velocity',
			currentAnchor: '#velocity',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	/** 结果区一行：标签 + 输出位。 */
	const row = (id: string, labelKey: string) =>
		`<div id="${id}Row" class="vl-line"><strong>${escapeHtml(tx(labelKey))}:</strong> <span id="${id}"></span></div>`;

	/**
	 * 单位下拉选项。
	 * @param units 单位表
	 * @param selected 默认选中值
	 * @returns option 列表 HTML
	 */
	const unitOptions = (units: Array<[string, string, number]>, selected: string) =>
		units
			.map(([value, symKey]) => `<option value="${value}"${value === selected ? ' selected' : ''}>${escapeHtml(tx(symKey))}</option>`)
			.join('');

	/**
	 * 数值输入 + 单位下拉的一组表单。
	 * @param id 输入框 id（单位下拉为 id + 'Unit'）
	 * @param labelKey 标签键
	 * @param phKey 占位符键
	 * @param units 单位表
	 * @param selected 默认单位
	 * @param cls 外层类名（按模式显隐）
	 * @returns 表单组 HTML
	 */
	const unitField = (
		id: string,
		labelKey: string,
		phKey: string,
		units: Array<[string, string, number]>,
		selected: string,
		cls: string
	) => `
            <div class="form-group ${cls}">
              <label class="form-label" for="${id}">${escapeHtml(tx(labelKey))}</label>
              <div class="vl-pair">
                <input id="${id}" class="input-lg" type="text" inputmode="decimal" autocomplete="off" placeholder="${escapeHtml(tx(phKey))}">
                <select id="${id}Unit" class="input-lg" aria-label="${escapeHtml(tx('unit_label'))}">${unitOptions(units, selected)}</select>
              </div>
            </div>`;

	/**
	 * 多段行程中某一段的距离与速度输入。
	 * @param n 段号（1–3）
	 * @returns 表单组 HTML
	 */
	const legFields = (n: number) => `
            <div class="form-group">
              <label class="form-label" for="vlD${n}">${escapeHtml(tx('leg_dist_tpl').split('{n}').join(String(n)))}</label>
              <input id="vlD${n}" class="input-lg" type="text" inputmode="decimal" autocomplete="off">
            </div>
            <div class="form-group">
              <label class="form-label" for="vlV${n}">${escapeHtml(tx('leg_speed_tpl').split('{n}').join(String(n)))}</label>
              <input id="vlV${n}" class="input-lg" type="text" inputmode="decimal" autocomplete="off">
            </div>`;

	const extraHeadHtml = `
  <style>
    .tool-card { max-width: var(--content-max); width: 100%; margin: 0 0 1.5rem; }
    .form-label { display:block; margin-bottom:.5rem; color:#495057; font-weight:500 }
    .form-hint { display:block; color:#6c757d; font-size:.85rem; margin:-.25rem 0 .75rem; }
    .form-group { margin-bottom:1rem; }
    .form-row2 { display:grid; grid-template-columns:repeat(2, 1fr); gap:0 1rem; }
    @media (max-width:576px) { .form-row2 { grid-template-columns:1fr; } }
    .vl-pair { display:flex; gap:.5rem; }
    .vl-pair input { flex:1 1 auto; min-width:0; }
    .vl-pair select { flex:0 0 7rem; }
    .btn-row { display:flex; flex-wrap:wrap; gap:.5rem; align-items:center; }
    .result { background:#f8f9fa; padding:1rem; border-radius:8px; margin-top:1rem; }
    .vl-main { font-size:1.6rem; font-weight:600; text-align:center; margin:.25rem 0 0; font-variant-numeric:tabular-nums; }
    .vl-sub { text-align:center; color:#495057; font-size:.95rem; margin-top:.25rem; }
    .vl-line { color:#495057; font-size:.92rem; margin-top:.5rem; font-variant-numeric:tabular-nums; }
    .result .muted { color:#6c757d; font-size:.9rem; margin-top:.75rem; }
  </style>`;

	const contentHtml = `
    <div id="velocity" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(tx('title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <form id="calcForm" novalidate>
          <div class="form-group">
            <label class="form-label" for="vlMode">${escapeHtml(tx('mode_label'))}</label>
            <select id="vlMode" class="input-lg">
              <option value="velocity" selected>${escapeHtml(tx('mode_velocity'))}</option>
              <option value="distance">${escapeHtml(tx('mode_distance'))}</option>
              <option value="time">${escapeHtml(tx('mode_time'))}</option>
              <option value="legs">${escapeHtml(tx('mode_legs'))}</option>
            </select>
          </div>
          <div class="form-row2 vl-basic">
            ${unitField('vlDist', 'dist_label', 'dist_ph', DIST_UNITS, 'm', 'vl-d')}
            ${unitField('vlTime', 'time_label', 'time_ph', TIME_UNITS, 's', 'vl-t')}
            ${unitField('vlSpeed', 'speed_label', 'speed_ph', SPEED_UNITS, 'kmh', 'vl-v')}
          </div>
          <div class="vl-legs" style="display:none">
            <div class="form-group">
              <label class="form-label" for="vlSys">${escapeHtml(tx('sys_label'))}</label>
              <select id="vlSys" class="input-lg">
                <option value="metric" selected>${escapeHtml(tx('sym_km'))} · ${escapeHtml(tx('sym_kmh'))}</option>
                <option value="imperial">${escapeHtml(tx('sym_mi'))} · ${escapeHtml(tx('sym_mph'))}</option>
                <option value="si">${escapeHtml(tx('sym_m'))} · ${escapeHtml(tx('sym_ms'))}</option>
              </select>
            </div>
            <div class="form-row2">
              ${legFields(1)}
              ${legFields(2)}
              ${legFields(3)}
            </div>
            <div class="form-group">
              <label class="form-label" for="vlDisp">${escapeHtml(tx('disp_label'))}</label>
              <input id="vlDisp" class="input-lg" type="text" inputmode="decimal" autocomplete="off" placeholder="${escapeHtml(tx('disp_ph'))}">
            </div>
          </div>
          <span id="vlHint" class="form-hint">${escapeHtml(tx('hint_basic'))}</span>
          <div class="btn-row">
            <button type="submit" id="vlBtnCalc" class="btn btn-primary">${escapeHtml(tx('calculate'))}</button>
            <button type="button" id="vlBtnSample" class="btn btn-outline-secondary">${escapeHtml(tx('sample'))}</button>
            <button type="button" id="vlBtnClear" class="btn btn-outline-secondary">${escapeHtml(tx('clear'))}</button>
          </div>
        </form>
        <div id="calcResult" class="result" style="display:none" aria-live="polite">
          <div id="vlMainLabel" class="vl-sub">${escapeHtml(tx('out_velocity'))}</div>
          <div id="vlMain" class="vl-main"></div>
          <div id="vlMainSub" class="vl-sub"></div>
          <div id="vlDetails">
            ${row('vlStep', 'step_label')}
            ${row('vlWork', 'work_label')}
            ${row('vlConv', 'conv_label')}
            ${row('vlLegs', 'legs_label')}
            ${row('vlTrap', 'trap_label')}
            ${row('vlAvgVel', 'avgvel_label')}
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
				href: 'https://en.wikipedia.org/wiki/Velocity',
			},
			{
				label: tx('ref_b_label'),
				href: 'https://en.wikipedia.org/wiki/Speed',
			},
		],
	});

	/** 单位符号表（前端用）：值 → 本地化符号。 */
	const symbols: Record<string, string> = {};
	for (const [value, symKey] of [...DIST_UNITS, ...TIME_UNITS, ...SPEED_UNITS]) symbols[value] = tx(symKey);

	/** 前端脚本需要的文案（一次性注入）。 */
	const clientText = {
		sym: symbols,
		outVelocity: tx('out_velocity'),
		outDistance: tx('out_distance'),
		outTime: tx('out_time'),
		outLegs: tx('out_legs'),
		hintBasic: tx('hint_basic'),
		hintLegs: tx('hint_legs'),
		subVelocity: tx('sub_velocity_tpl'),
		subDistance: tx('sub_distance_tpl'),
		subTime: tx('sub_time_tpl'),
		subLegs: tx('sub_legs_tpl'),
		workVelocity: tx('work_velocity_tpl'),
		workDistance: tx('work_distance_tpl'),
		workTime: tx('work_time_tpl'),
		legWork: tx('leg_work_tpl'),
		trap: tx('trap_tpl'),
		avgVel: tx('avgvel_tpl'),
		errNum: tx('err_num'),
		errDist: tx('err_dist'),
		errTime: tx('err_time'),
		errSpeed: tx('err_speed'),
		errLeg: tx('err_leg'),
		errDisp: tx('err_disp'),
		noteBasic: tx('result_note_basic'),
		noteLegs: tx('result_note_legs'),
	};

	/** 前端用的单位系数表。 */
	const factors = {
		dist: Object.fromEntries(DIST_UNITS.map(([v, , f]) => [v, f])),
		time: Object.fromEntries(TIME_UNITS.map(([v, , f]) => [v, f])),
		speed: Object.fromEntries(SPEED_UNITS.map(([v, , f]) => [v, f])),
	};

	const extraBodyHtml = `
  <script>
    (function () {
      /** 表单与输入控件。 */
      var form = document.getElementById('calcForm');
      var modeEl = document.getElementById('vlMode');
      var distEl = document.getElementById('vlDist');
      var distUnitEl = document.getElementById('vlDistUnit');
      var timeEl = document.getElementById('vlTime');
      var timeUnitEl = document.getElementById('vlTimeUnit');
      var speedEl = document.getElementById('vlSpeed');
      var speedUnitEl = document.getElementById('vlSpeedUnit');
      var sysEl = document.getElementById('vlSys');
      var dispEl = document.getElementById('vlDisp');
      var hintEl = document.getElementById('vlHint');
      /** 结果区各输出位。 */
      var result = document.getElementById('calcResult');
      var detailsEl = document.getElementById('vlDetails');
      var mainLabelEl = document.getElementById('vlMainLabel');
      var mainEl = document.getElementById('vlMain');
      var mainSubEl = document.getElementById('vlMainSub');
      var noteEl = document.getElementById('calcNote');
      /** 当前页面语言（决定小数点与数字格式）。 */
      var LANG = ${JSON.stringify(opts.lang)};
      /** 本地化文案字典。 */
      var T = ${JSON.stringify(clientText)};
      /** 单位换算系数：距离 → 米，时间 → 秒，速度 → m/s。 */
      var F = ${JSON.stringify(factors)};
      /** 求速度时按距离单位选结果单位：[速度单位, 时间单位]。 */
      var SPEED_FOR_DIST = { m: ['ms', 's'], km: ['kmh', 'h'], mi: ['mph', 'h'], ft: ['fts', 's'], nmi: ['kn', 'h'] };
      /** 求距离 / 时间时按速度单位选配套单位：[距离单位, 时间单位]。 */
      var DIST_FOR_SPEED = { ms: ['m', 's'], kmh: ['km', 'h'], mph: ['mi', 'h'], fts: ['ft', 's'], kn: ['nmi', 'h'] };
      /** 多段行程的单位制：[距离单位, 速度单位, 时间单位]。 */
      var SYS = { metric: ['km', 'kmh', 'h'], imperial: ['mi', 'mph', 'h'], si: ['m', 'ms', 's'] };
      /** 样例轮换；首个与 Example 一致。 */
      var SAMPLES = [
        { mode: 'velocity', d: '100', du: 'm', t: '9.58', tu: 's' },
        { mode: 'time', d: '42.195', du: 'km', v: '12', vu: 'kmh' },
        { mode: 'distance', v: '65', vu: 'mph', t: '2.5', tu: 'h' },
        { mode: 'legs', sys: 'metric', legs: [['60', '60'], ['60', '40'], ['', '']], disp: '0' }
      ];
      /** 下一次点击「加载样例」使用的样例下标。 */
      var sampleIndex = 0;

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
      /** 按最大小数位缓存的数字格式器。 */
      var formatters = {};

      /**
       * 数字格式化：最多 digits 位小数、带千分位（拉丁数字、真减号）。
       * @param {number} v 数值
       * @param {number} digits 最多小数位
       * @returns {string} 文本
       */
      function num(v, digits) {
        if (!formatters[digits]) {
          try {
            formatters[digits] = new Intl.NumberFormat(LANG + '-u-nu-latn', { maximumFractionDigits: digits });
          } catch (e) {
            formatters[digits] = { format: function (x) { return String(Math.round(x * Math.pow(10, digits)) / Math.pow(10, digits)); } };
          }
        }
        if (Math.abs(v) < Math.pow(10, -digits) / 2) v = 0;
        return formatters[digits].format(v).replace('-', '−');
      }

      /**
       * 带单位的数值文本，如「10.44 m/s」。
       * @param {number} v 数值
       * @param {string} unit 单位值（如 kmh）
       * @param {number} digits 最多小数位
       * @returns {string} 文本
       */
      function withUnit(v, unit, digits) {
        return num(v, digits) + ' ' + T.sym[unit];
      }

      /**
       * 秒数转 h:mm:ss（秒保留一位小数，必要时进位）。
       * @param {number} sec 秒数
       * @returns {string} 文本
       */
      function clock(sec) {
        var total = Math.round(sec * 10) / 10;
        var h = Math.floor(total / 3600);
        var m = Math.floor((total - h * 3600) / 60);
        var s = Math.round((total - h * 3600 - m * 60) * 10) / 10;
        var whole = Math.floor(s);
        var tenth = Math.round((s - whole) * 10);
        return h + ':' + (m < 10 ? '0' : '') + m + ':' + (whole < 10 ? '0' : '') + whole + (tenth ? DEC + tenth : '');
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
       * 解析数字：容忍千分位与本地小数点；留空 undefined，无效 NaN。
       * @param {string} raw 原始输入
       * @returns {number|undefined} 数值
       */
      function parseNum(raw) {
        var s = String(raw || '').split(' ').join('').split(String.fromCharCode(160)).join('').split(String.fromCharCode(8239)).join('').split('−').join('-');
        if (s === '') return undefined;
        var other = DEC === ',' ? '.' : ',';
        if (new RegExp('^-?[0-9]{1,3}([' + other + '][0-9]{3})+([' + DEC + '][0-9]*)?$').test(s)) {
          s = s.split(other).join('');
        }
        s = s.split(',').join('.');
        if (!/^-?([0-9]+[.]?[0-9]*|[.][0-9]+)$/.test(s)) return NaN;
        return Number(s);
      }

      /**
       * 判断 parseNum 结果是否为「填了但不是数字」（留空的 undefined 不算无效）。
       * @param {number|undefined} v parseNum 返回值
       * @returns {boolean} 是否无效
       */
      function invalid(v) {
        return v !== undefined && isNaN(v);
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
       * 单位换算步骤文本（同单位时返回 null）。
       * @param {number} v 原值
       * @param {string} from 原单位
       * @param {string} to 目标单位
       * @param {number} factorFrom 原单位系数
       * @param {number} factorTo 目标单位系数
       * @returns {string|null} 如「90 min = 1.5 h」
       */
      function stepText(v, from, to, factorFrom, factorTo) {
        if (from === to) return null;
        return withUnit(v, from, 6) + ' = ' + withUnit(v * factorFrom / factorTo, to, 6);
      }

      /**
       * 读取输入、校验并计算。
       * @returns {{ ok: boolean, error?: string, values?: Object }}
       */
      function compute() {
        var mode = modeEl.value;
        if (mode === 'legs') return computeLegs();
        var d = parseNum(distEl.value);
        var tt = parseNum(timeEl.value);
        var v = parseNum(speedEl.value);
        if (mode === 'velocity') {
          if (invalid(d) || invalid(tt)) return { ok: false, error: T.errNum };
          if (d === undefined || d < 0) return { ok: false, error: T.errDist };
          if (!(tt > 0)) return { ok: false, error: T.errTime };
          return { ok: true, values: { mode: mode, d: d, du: distUnitEl.value, t: tt, tu: timeUnitEl.value } };
        }
        if (mode === 'distance') {
          if (invalid(v) || invalid(tt)) return { ok: false, error: T.errNum };
          if (v === undefined || v < 0) return { ok: false, error: T.errSpeed };
          if (!(tt > 0)) return { ok: false, error: T.errTime };
          return { ok: true, values: { mode: mode, v: v, vu: speedUnitEl.value, t: tt, tu: timeUnitEl.value } };
        }
        if (invalid(d) || invalid(v)) return { ok: false, error: T.errNum };
        if (d === undefined || d < 0) return { ok: false, error: T.errDist };
        if (!(v > 0)) return { ok: false, error: T.errSpeed };
        return { ok: true, values: { mode: 'time', d: d, du: distUnitEl.value, v: v, vu: speedUnitEl.value } };
      }

      /**
       * 读取多段行程输入并校验。
       * @returns {{ ok: boolean, error?: string, values?: Object }}
       */
      function computeLegs() {
        var legs = [];
        for (var n = 1; n <= 3; n++) {
          var dRaw = document.getElementById('vlD' + n).value;
          var vRaw = document.getElementById('vlV' + n).value;
          var d = parseNum(dRaw);
          var v = parseNum(vRaw);
          if (invalid(d) || invalid(v)) return { ok: false, error: T.errNum };
          if (d === undefined && v === undefined && n === 3) continue;
          if (!(d > 0) || !(v > 0)) return { ok: false, error: T.errLeg };
          legs.push({ n: n, d: d, v: v });
        }
        var disp = parseNum(dispEl.value);
        if (invalid(disp)) return { ok: false, error: T.errNum };
        var total = 0;
        for (var i = 0; i < legs.length; i++) total += legs[i].d;
        if (disp !== undefined && (disp < 0 || disp > total + 1e-9)) return { ok: false, error: T.errDisp };
        return { ok: true, values: { mode: 'legs', sys: SYS[sysEl.value] || SYS.metric, legs: legs, disp: disp, total: total } };
      }

      /**
       * 渲染求速度 / 求距离 / 求时间结果。
       * @param {Object} v compute() 返回的数值
       */
      function renderBasic(v) {
        var steps = [];
        var step;
        if (v.mode === 'velocity') {
          var pair = SPEED_FOR_DIST[v.du];
          var tConv = v.t * F.time[v.tu] / F.time[pair[1]];
          step = stepText(v.t, v.tu, pair[1], F.time[v.tu], F.time[pair[1]]);
          if (step) steps.push(step);
          var vel = v.d / tConv;
          var ms = vel * F.speed[pair[0]];
          mainLabelEl.textContent = T.outVelocity;
          mainEl.textContent = withUnit(vel, pair[0], 2);
          mainSubEl.textContent = fill(T.subVelocity, { d: withUnit(v.d, v.du, 6), t: withUnit(v.t, v.tu, 6) });
          setRow('vlWork', fill(T.workVelocity, { d: withUnit(v.d, v.du, 6), t: withUnit(tConv, pair[1], 6), v: withUnit(vel, pair[0], 4) }));
          setRow('vlConv', ['ms', 'kmh', 'mph', 'fts', 'kn'].map(function (u) { return withUnit(ms / F.speed[u], u, 2); }).join(' = '));
        } else if (v.mode === 'distance') {
          var dp = DIST_FOR_SPEED[v.vu];
          var tC = v.t * F.time[v.tu] / F.time[dp[1]];
          step = stepText(v.t, v.tu, dp[1], F.time[v.tu], F.time[dp[1]]);
          if (step) steps.push(step);
          var dist = v.v * tC;
          var meters = dist * F.dist[dp[0]];
          mainLabelEl.textContent = T.outDistance;
          mainEl.textContent = withUnit(dist, dp[0], 2);
          mainSubEl.textContent = fill(T.subDistance, { v: withUnit(v.v, v.vu, 6), t: withUnit(v.t, v.tu, 6) });
          setRow('vlWork', fill(T.workDistance, { v: withUnit(v.v, v.vu, 6), t: withUnit(tC, dp[1], 6), d: withUnit(dist, dp[0], 4) }));
          setRow('vlConv', ['m', 'km', 'mi', 'ft', 'nmi'].map(function (u) { return withUnit(meters / F.dist[u], u, 2); }).join(' = '));
        } else {
          var tp = DIST_FOR_SPEED[v.vu];
          var dC = v.d * F.dist[v.du] / F.dist[tp[0]];
          step = stepText(v.d, v.du, tp[0], F.dist[v.du], F.dist[tp[0]]);
          if (step) steps.push(step);
          var tm = dC / v.v;
          var sec = tm * F.time[tp[1]];
          mainLabelEl.textContent = T.outTime;
          mainEl.textContent = clock(sec);
          mainSubEl.textContent = fill(T.subTime, { d: withUnit(v.d, v.du, 6), v: withUnit(v.v, v.vu, 6) });
          setRow('vlWork', fill(T.workTime, { d: withUnit(dC, tp[0], 6), v: withUnit(v.v, v.vu, 6), t: withUnit(tm, tp[1], 4) }));
          setRow('vlConv', withUnit(sec / 3600, 'h', 4) + ' = ' + withUnit(sec / 60, 'min', 2) + ' = ' + withUnit(sec, 's', 1));
        }
        setRow('vlStep', steps.length ? steps.join('; ') : null);
        setRow('vlLegs', null);
        setRow('vlTrap', null);
        setRow('vlAvgVel', null);
        noteEl.textContent = T.noteBasic;
      }

      /**
       * 渲染多段行程：各段用时、总平均速度、简单平均误区与平均速度矢量大小。
       * @param {Object} v computeLegs() 返回的数值
       */
      function renderLegs(v) {
        var du = v.sys[0];
        var vu = v.sys[1];
        var tu = v.sys[2];
        var totalT = 0;
        var sumV = 0;
        var lines = [];
        for (var i = 0; i < v.legs.length; i++) {
          var leg = v.legs[i];
          var lt = leg.d / leg.v;
          totalT += lt;
          sumV += leg.v;
          lines.push(fill(T.legWork, { n: leg.n, d: withUnit(leg.d, du, 6), v: withUnit(leg.v, vu, 6), t: withUnit(lt, tu, 4) }));
        }
        var avg = v.total / totalT;
        var mean = sumV / v.legs.length;
        mainLabelEl.textContent = T.outLegs;
        mainEl.textContent = withUnit(avg, vu, 2);
        mainSubEl.textContent = fill(T.subLegs, { d: withUnit(v.total, du, 6), t: withUnit(totalT, tu, 4), c: clock(totalT * F.time[tu]) });
        setRow('vlStep', null);
        setRow('vlWork', null);
        setRow('vlConv', null);
        setRow('vlLegs', lines.join('; '));
        setRow('vlTrap', Math.abs(mean - avg) > 1e-9 ? fill(T.trap, { w: withUnit(mean, vu, 2), x: withUnit(mean - avg, vu, 2) }) : null);
        setRow('vlAvgVel', v.disp !== undefined ? fill(T.avgVel, { s: withUnit(v.disp, du, 6), t: withUnit(totalT, tu, 4), v: withUnit(v.disp / totalT, vu, 2) }) : null);
        noteEl.textContent = T.noteLegs;
      }

      /** 执行计算并刷新结果区；失败时隐藏明细并显示具体错误。 */
      function runCalc() {
        var out = compute();
        result.style.display = 'block';
        if (!out || !out.ok) {
          mainLabelEl.textContent = labelFor(modeEl.value);
          mainEl.textContent = '—';
          mainSubEl.textContent = '';
          detailsEl.style.display = 'none';
          noteEl.textContent = (out && out.error) || T.errNum;
          return false;
        }
        if (out.values.mode === 'legs') renderLegs(out.values);
        else renderBasic(out.values);
        detailsEl.style.display = '';
        return true;
      }

      /**
       * 各模式的主结果标签。
       * @param {string} mode 模式
       * @returns {string} 标签
       */
      function labelFor(mode) {
        if (mode === 'distance') return T.outDistance;
        if (mode === 'time') return T.outTime;
        if (mode === 'legs') return T.outLegs;
        return T.outVelocity;
      }

      /**
       * 按类名批量显隐。
       * @param {string} selector CSS 选择器
       * @param {boolean} show 是否显示
       */
      function toggle(selector, show) {
        var els = document.querySelectorAll(selector);
        for (var i = 0; i < els.length; i++) els[i].style.display = show ? '' : 'none';
      }

      /** 按模式切换输入：求哪一项就隐藏哪一项；多段行程显示分段输入。 */
      function syncMode() {
        var mode = modeEl.value;
        var legs = mode === 'legs';
        toggle('.vl-basic', !legs);
        toggle('.vl-legs', legs);
        toggle('.vl-d', mode !== 'distance');
        toggle('.vl-t', mode !== 'time');
        toggle('.vl-v', mode !== 'velocity');
        hintEl.textContent = legs ? T.hintLegs : T.hintBasic;
      }

      /**
       * 把样例里的点小数换成本地小数点。
       * @param {string} s 样例文本
       * @returns {string} 本地写法
       */
      function localize(s) {
        return !s || DEC === '.' ? s || '' : s.split('.').join(DEC);
      }

      /** 清空全部输入（不改模式）。 */
      function clearInputs() {
        distEl.value = '';
        timeEl.value = '';
        speedEl.value = '';
        dispEl.value = '';
        for (var n = 1; n <= 3; n++) {
          document.getElementById('vlD' + n).value = '';
          document.getElementById('vlV' + n).value = '';
        }
      }

      /** 加载样例：依次轮换（首个与 Example 一致）。 */
      function loadSample() {
        var smp = SAMPLES[sampleIndex];
        sampleIndex = (sampleIndex + 1) % SAMPLES.length;
        clearInputs();
        modeEl.value = smp.mode;
        if (smp.d) { distEl.value = localize(smp.d); distUnitEl.value = smp.du; }
        if (smp.t) { timeEl.value = localize(smp.t); timeUnitEl.value = smp.tu; }
        if (smp.v) { speedEl.value = localize(smp.v); speedUnitEl.value = smp.vu; }
        if (smp.legs) {
          sysEl.value = smp.sys;
          for (var n = 1; n <= 3; n++) {
            document.getElementById('vlD' + n).value = localize(smp.legs[n - 1][0]);
            document.getElementById('vlV' + n).value = localize(smp.legs[n - 1][1]);
          }
          dispEl.value = localize(smp.disp);
        }
        syncMode();
        runCalc();
      }

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        runCalc();
      });
      modeEl.addEventListener('change', syncMode);
      document.getElementById('vlBtnSample').addEventListener('click', loadSample);
      /** 清空：只清输入、恢复求速度模式与默认单位并隐藏结果，不重新加载样例。 */
      document.getElementById('vlBtnClear').addEventListener('click', function () {
        clearInputs();
        modeEl.value = 'velocity';
        distUnitEl.value = 'm';
        timeUnitEl.value = 's';
        speedUnitEl.value = 'kmh';
        sysEl.value = 'metric';
        syncMode();
        result.style.display = 'none';
        distEl.focus();
      });
      syncMode();
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('how-to-calculate-velocity');
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
