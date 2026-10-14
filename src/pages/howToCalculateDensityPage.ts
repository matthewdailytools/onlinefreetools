/**
 * 密度计算器：ρ = m ÷ V，可反求质量或体积（纯客户端）。
 * slug: how-to-calculate-density（见 work-tasks/how-to-calculate-density/02-tool-info.md）。
 *
 * 交互要点（2026-10-14 改写）：
 * - 求解对象：密度 / 质量 / 体积；被求的那一栏变为只读结果栏，其单位下拉即输出单位；
 * - 每个量都可选单位（mg/g/kg/t/oz/lb；mL·cm³/L/m³/in³/ft³/US gal/US fl oz；g/cm³/kg/m³/kg/L/lb/ft³/lb/in³/lb/gal）；
 * - 体积来源：直接输入 / 排水法（前后水位差）/ 长方体（长×宽×高）/ 圆柱（直径、高）；
 * - 结果附：计算过程、同一密度的各单位换算、比重（水 = 1）与浮沉、最接近的常见材料（±6% 内）。
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
const PREFIX = 'tool_density';

/** 质量单位：[代码, 显示, 换算到 kg 的系数]。 */
const MASS_UNITS: Array<[string, string, number]> = [
	['mg', 'mg', 1e-6],
	['g', 'g', 1e-3],
	['kg', 'kg', 1],
	['t', 't', 1000],
	['oz', 'oz', 0.028349523125],
	['lb', 'lb', 0.45359237],
];

/** 体积单位：[代码, 显示, 换算到 m³ 的系数]。 */
const VOLUME_UNITS: Array<[string, string, number]> = [
	['ml', 'mL (cm³)', 1e-6],
	['l', 'L', 1e-3],
	['m3', 'm³', 1],
	['in3', 'in³', 1.6387064e-5],
	['ft3', 'ft³', 0.028316846592],
	['gal', 'US gal', 0.003785411784],
	['floz', 'US fl oz', 2.95735295625e-5],
];

/** 密度单位：[代码, 显示, 换算到 kg/m³ 的系数]。 */
const DENSITY_UNITS: Array<[string, string, number]> = [
	['gcm3', 'g/cm³ (g/mL)', 1000],
	['kgm3', 'kg/m³', 1],
	['kgl', 'kg/L', 1000],
	['lbft3', 'lb/ft³', 16.018463373960138],
	['lbin3', 'lb/in³', 27679.904710203125],
	['lbgal', 'lb/US gal', 119.82642731689663],
];

/** 尺寸单位：[代码, 显示, 换算到 m 的系数]。 */
const LENGTH_UNITS: Array<[string, string, number]> = [
	['mm', 'mm', 0.001],
	['cm', 'cm', 0.01],
	['m', 'm', 1],
	['in', 'in', 0.0254],
	['ft', 'ft', 0.3048],
];

/** 常见材料密度（g/cm³，约 20 °C、1 atm；冰为 0 °C）：[i18n 键后缀, 密度]。 */
const MATERIALS: Array<[string, number]> = [
	['cork', 0.24],
	['pine', 0.5],
	['gasoline', 0.74],
	['ethanol', 0.789],
	['olive_oil', 0.91],
	['ice', 0.917],
	['water', 0.998],
	['seawater', 1.025],
	['pvc', 1.38],
	['concrete', 2.4],
	['glass', 2.5],
	['aluminium', 2.7],
	['titanium', 4.51],
	['steel', 7.85],
	['brass', 8.5],
	['copper', 8.96],
	['silver', 10.49],
	['lead', 11.34],
	['mercury', 13.53],
	['gold', 19.32],
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
 * 渲染 how-to-calculate-density 工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 * @returns 完整页面 HTML
 */
export const renderHowToCalculateDensityPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 读取本工具键（自动拼前缀）。 */
	const tx = (key: string) => t(opts.lang, `${PREFIX}_${key}` as never);

	const toolPath = '/tools/how-to-calculate-density';
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
			currentSlug: 'how-to-calculate-density',
			currentAnchor: '#density',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	/**
	 * 单位下拉 HTML。
	 * @param id 元素 id
	 * @param units 单位表
	 * @param def 默认代码
	 * @param label 无障碍名称
	 * @returns select HTML
	 */
	const unitSelect = (id: string, units: Array<[string, string, number]>, def: string, label: string) =>
		`<select id="${id}" class="form-select den-unit" aria-label="${escapeHtml(label)}">${units
			.map(([code, text]) => `<option value="${code}"${code === def ? ' selected' : ''}>${escapeHtml(text)}</option>`)
			.join('')}</select>`;

	/**
	 * 数值输入 + 单位下拉的一行。
	 * @param id 输入框 id
	 * @param labelKey 标签键（不含前缀）
	 * @param phKey 占位键（不含前缀）
	 * @param unitHtml 单位下拉 HTML（可空）
	 * @returns 字段 HTML
	 */
	const numField = (id: string, labelKey: string, phKey: string, unitHtml: string) => `
          <div class="form-group" data-field="${id}">
            <label class="form-label" for="${id}"><span>${escapeHtml(tx(labelKey))}</span> <span class="den-tag" hidden>${escapeHtml(tx('result_tag'))}</span></label>
            <div class="den-pair">
              <input id="${id}" class="input-lg" type="number" step="any" min="0" inputmode="decimal" placeholder="${escapeHtml(tx(phKey))}">
              ${unitHtml}
            </div>
          </div>`;

	/** 页内样式。 */
	const extraHeadHtml = `
  <style>
    .tool-card { max-width: var(--content-max); width: 100%; margin: 0 0 1.5rem; }
    .form-label { display:block; margin-bottom:.4rem; color:#495057; font-weight:500 }
    .form-group { margin-bottom:1rem; }
    .form-group[hidden], .den-vol[hidden] { display:none !important; }
    .den-pair { display:flex; gap:.5rem; }
    .den-pair input { flex:1 1 auto; min-width:0; }
    .den-pair .den-unit { flex:0 0 auto; width:auto; max-width:11rem; }
    .den-grid { display:grid; grid-template-columns: repeat(auto-fit, minmax(9rem, 1fr)); gap:.5rem .75rem; }
    .den-tag { font-size:.75rem; background:#e7f1ff; color:#0a58ca; border-radius:.25rem; padding:.05rem .4rem; font-weight:500; }
    input[readonly].input-lg { background:#f1f3f5; font-weight:600; }
    .btn-row { display:flex; flex-wrap:wrap; gap:.5rem; align-items:center; }
    .result { background:#f8f9fa; padding:1rem; border-radius:8px; margin-top:1rem; }
    .result .main { font-size:1.15rem; text-align:center; }
    .result .muted { color:#6c757d; font-size:.9rem; margin-top:.35rem }
    .result .work { font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size:.92rem; margin-top:.5rem; word-break:break-word; text-align:center; }
    .den-conv { width:100%; max-width:28rem; margin:.75rem auto 0; font-size:.92rem; border-collapse:collapse; }
    .den-conv th, .den-conv td { padding:.2rem .5rem; border-bottom:1px solid #e9ecef; }
    .den-conv th { text-align:start; font-weight:500; color:#495057; }
    .den-conv td { text-align:end; font-variant-numeric: tabular-nums; }
    .den-facts { margin:.75rem 0 0; padding-inline-start:1.2rem; font-size:.92rem; }
  </style>`;

	const contentHtml = `
    <div id="density" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(tx('title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <form id="calcForm" novalidate>
          <div class="form-group">
            <label class="form-label" for="solve">${escapeHtml(tx('solve_label'))}</label>
            <select id="solve" class="form-select">
              <option value="density" selected>${escapeHtml(tx('solve_density'))}</option>
              <option value="mass">${escapeHtml(tx('solve_mass'))}</option>
              <option value="volume">${escapeHtml(tx('solve_volume'))}</option>
            </select>
          </div>
          ${numField('mass', 'mass_label', 'mass_ph', unitSelect('massUnit', MASS_UNITS, 'g', tx('mass_label')))}
          <div class="form-group" id="volModeWrap">
            <label class="form-label" for="volMode">${escapeHtml(tx('vol_mode_label'))}</label>
            <select id="volMode" class="form-select">
              <option value="direct" selected>${escapeHtml(tx('vol_direct'))}</option>
              <option value="displace">${escapeHtml(tx('vol_displace'))}</option>
              <option value="box">${escapeHtml(tx('vol_box'))}</option>
              <option value="cyl">${escapeHtml(tx('vol_cyl'))}</option>
            </select>
          </div>
          ${numField('volume', 'volume_label', 'volume_ph', unitSelect('volumeUnit', VOLUME_UNITS, 'ml', tx('volume_label')))}
          <div class="den-vol form-group" data-vol="displace" hidden>
            <div class="den-grid">
              <div><label class="form-label" for="before">${escapeHtml(tx('before_label'))}</label><input id="before" class="input-lg" type="number" step="any" min="0" inputmode="decimal"></div>
              <div><label class="form-label" for="after">${escapeHtml(tx('after_label'))}</label><input id="after" class="input-lg" type="number" step="any" min="0" inputmode="decimal"></div>
            </div>
            <p class="small text-muted mb-0 mt-1">${escapeHtml(tx('displace_hint'))}</p>
          </div>
          <div class="den-vol form-group" data-vol="box" hidden>
            <div class="den-grid">
              <div><label class="form-label" for="boxL">${escapeHtml(tx('len_label'))}</label><input id="boxL" class="input-lg" type="number" step="any" min="0" inputmode="decimal"></div>
              <div><label class="form-label" for="boxW">${escapeHtml(tx('wid_label'))}</label><input id="boxW" class="input-lg" type="number" step="any" min="0" inputmode="decimal"></div>
              <div><label class="form-label" for="boxH">${escapeHtml(tx('hei_label'))}</label><input id="boxH" class="input-lg" type="number" step="any" min="0" inputmode="decimal"></div>
            </div>
          </div>
          <div class="den-vol form-group" data-vol="cyl" hidden>
            <div class="den-grid">
              <div><label class="form-label" for="cylD">${escapeHtml(tx('dia_label'))}</label><input id="cylD" class="input-lg" type="number" step="any" min="0" inputmode="decimal"></div>
              <div><label class="form-label" for="cylH">${escapeHtml(tx('hei_label'))}</label><input id="cylH" class="input-lg" type="number" step="any" min="0" inputmode="decimal"></div>
            </div>
          </div>
          <div class="den-vol form-group" data-vol="dims" hidden>
            <label class="form-label" for="lenUnit">${escapeHtml(tx('len_unit_label'))}</label>
            ${unitSelect('lenUnit', LENGTH_UNITS, 'cm', tx('len_unit_label'))}
          </div>
          ${numField('dens', 'density_label', 'density_ph', unitSelect('densUnit', DENSITY_UNITS, 'gcm3', tx('density_label')))}
          <div class="btn-row">
            <button type="submit" class="btn btn-primary">${escapeHtml(tx('calculate'))}</button>
            <button type="button" id="btnSample" class="btn btn-outline-secondary">${escapeHtml(tx('sample'))}</button>
            <button type="button" id="btnClear" class="btn btn-outline-secondary">${escapeHtml(tx('clear'))}</button>
          </div>
        </form>
        <div id="calcResult" class="result" style="display:none" aria-live="polite">
          <div class="main"><strong id="outLabel"></strong>: <span id="mainOut"></span></div>
          <div id="workWrap" class="work"><strong>${escapeHtml(tx('work_label'))}:</strong> <span id="workOut" dir="ltr"></span></div>
          <div id="extraWrap">
            <table class="den-conv">
              <caption class="small text-muted">${escapeHtml(tx('conv_label'))}</caption>
              <tbody id="convBody"></tbody>
            </table>
            <ul class="den-facts">
              <li id="sgOut"></li>
              <li id="matOut"></li>
            </ul>
          </div>
          <div id="calcNote" class="muted text-center"></div>
        </div>
      </div>
    </div>

    ${renderToolIgSections({ lang: opts.lang, prefix: PREFIX, mode: 'formula', howItemCount: 4, whyChooseItemCount: 4, ruleItemCount: 5, usecaseCount: 4 })}`;

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{ label: tx('ref_a_label'), href: 'https://www.nist.gov/pml/special-publication-811' },
			{ label: tx('ref_b_label'), href: 'https://www.engineeringtoolbox.com/density-solids-d_1265.html' },
		],
	});

	/** 前端脚本需要的文案（一次性注入）。 */
	const clientText = {
		density: tx('density_label'),
		mass: tx('mass_label'),
		volume: tx('volume_label'),
		errFinite: tx('err_finite'),
		errPositive: tx('err_positive'),
		errDisplace: tx('err_displace'),
		sgTpl: tx('sg_tpl'),
		sink: tx('sink'),
		float: tx('float'),
		neutral: tx('neutral'),
		closestTpl: tx('closest_tpl'),
		closestNone: tx('closest_none'),
		note: tx('result_note'),
		materials: Object.fromEntries(MATERIALS.map(([k]) => [k, tx(`mat_${k}`)])),
	};

	/** 单位表 → 前端用的 {代码: [显示, 系数]}。 */
	const unitMap = (units: Array<[string, string, number]>) =>
		Object.fromEntries(units.map(([code, text, f]) => [code, [text, f]]));

	const extraBodyHtml = `
  <script>
    (function () {
      /** 当前页面语言（数字格式）。 */
      var LANG = ${JSON.stringify(opts.lang)};
      /** 本地化文案。 */
      var T = ${JSON.stringify(clientText)};
      /** 单位表：代码 → [显示, 换算到 SI 的系数]。 */
      var MU = ${JSON.stringify(unitMap(MASS_UNITS))};
      var VU = ${JSON.stringify(unitMap(VOLUME_UNITS))};
      var DU = ${JSON.stringify(unitMap(DENSITY_UNITS))};
      var LU = ${JSON.stringify(unitMap(LENGTH_UNITS))};
      /** 常见材料：[键, g/cm³]。 */
      var MATS = ${JSON.stringify(MATERIALS)};
      /** 水的密度（g/cm³，4 °C）——比重的参照。 */
      var WATER = 1.0;

      var form = document.getElementById('calcForm');
      var solveEl = document.getElementById('solve');
      var volModeEl = document.getElementById('volMode');
      var volModeWrap = document.getElementById('volModeWrap');
      var massEl = document.getElementById('mass');
      var volumeEl = document.getElementById('volume');
      var densEl = document.getElementById('dens');
      var massUnitEl = document.getElementById('massUnit');
      var volumeUnitEl = document.getElementById('volumeUnit');
      var densUnitEl = document.getElementById('densUnit');
      var lenUnitEl = document.getElementById('lenUnit');
      var result = document.getElementById('calcResult');
      var outLabel = document.getElementById('outLabel');
      var mainOut = document.getElementById('mainOut');
      var workWrap = document.getElementById('workWrap');
      var workOut = document.getElementById('workOut');
      var extraWrap = document.getElementById('extraWrap');
      var convBody = document.getElementById('convBody');
      var sgOut = document.getElementById('sgOut');
      var matOut = document.getElementById('matOut');
      var noteEl = document.getElementById('calcNote');

      /** 数字格式器：最多 4 位有效小数，不分组（过程行）与分组（结果）。 */
      var nf = new Intl.NumberFormat(LANG + '-u-nu-latn', { maximumSignificantDigits: 6, useGrouping: false });
      var nfg = new Intl.NumberFormat(LANG + '-u-nu-latn', { maximumSignificantDigits: 5 });

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
       * 格式化数值：极大 / 极小时用科学记数法。
       * @param {number} n 数值
       * @param {boolean} group 是否千分位分组
       * @returns {string}
       */
      function fmt(n, group) {
        if (!Number.isFinite(n)) return '—';
        var a = Math.abs(n);
        if (a !== 0 && (a >= 1e9 || a < 1e-4)) return n.toExponential(4).replace('e', ' × 10^').replace('^+', '^');
        return (group ? nfg : nf).format(n);
      }

      /**
       * 读取输入框数值；空为 NaN。
       * @param {string} id 元素 id
       * @returns {number}
       */
      function num(id) {
        var raw = document.getElementById(id).value;
        return raw === '' ? NaN : Number(raw);
      }

      /** 体积是否作为输入（求密度或质量时）。 */
      function volumeIsInput() { return solveEl.value !== 'volume'; }

      /** 同步：被求栏只读并加标记；体积来源只在体积为输入时出现；尺寸单位只在长方体 / 圆柱时出现。 */
      function syncForm() {
        var target = solveEl.value;
        [['density', densEl], ['mass', massEl], ['volume', volumeEl]].forEach(function (pair) {
          var isOut = pair[0] === target;
          pair[1].readOnly = isOut;
          pair[1].tabIndex = isOut ? -1 : 0;
          if (isOut) pair[1].value = '';
          var tag = pair[1].closest('.form-group').querySelector('.den-tag');
          tag.hidden = !isOut;
        });
        var mode = volumeIsInput() ? volModeEl.value : 'direct';
        volModeWrap.hidden = !volumeIsInput();
        volumeEl.closest('.form-group').querySelector('input').readOnly = target === 'volume' || mode !== 'direct';
        Array.prototype.forEach.call(form.querySelectorAll('.den-vol'), function (el) {
          var k = el.getAttribute('data-vol');
          el.hidden = k === 'dims' ? !(mode === 'box' || mode === 'cyl') : k !== mode;
        });
      }

      /**
       * 由体积来源求体积（m³），并给出过程片段。
       * @returns {{ ok: boolean, error?: string, v?: number, work?: string }}
       */
      function readVolume() {
        var mode = volModeEl.value;
        var vu = VU[volumeUnitEl.value];
        if (mode === 'direct') {
          var v = num('volume');
          if (!Number.isFinite(v)) return { ok: false, error: T.errFinite };
          if (!(v > 0)) return { ok: false, error: T.errPositive };
          return { ok: true, v: v * vu[1], work: '' };
        }
        if (mode === 'displace') {
          var b = num('before');
          var a = num('after');
          if (!Number.isFinite(b) || !Number.isFinite(a)) return { ok: false, error: T.errFinite };
          if (!(a > b)) return { ok: false, error: T.errDisplace };
          var dv = a - b;
          volumeEl.value = String(+dv.toPrecision(10));
          return { ok: true, v: dv * vu[1], work: 'V = ' + fmt(a) + ' − ' + fmt(b) + ' = ' + fmt(dv) + ' ' + vu[0] + '; ' };
        }
        var lu = LU[lenUnitEl.value];
        var cubic;
        var work;
        if (mode === 'box') {
          var l = num('boxL'), w = num('boxW'), h = num('boxH');
          if (![l, w, h].every(Number.isFinite)) return { ok: false, error: T.errFinite };
          if (!(l > 0 && w > 0 && h > 0)) return { ok: false, error: T.errPositive };
          cubic = l * w * h;
          work = 'V = ' + fmt(l) + ' × ' + fmt(w) + ' × ' + fmt(h) + ' = ' + fmt(cubic) + ' ' + lu[0] + '³; ';
        } else {
          var d = num('cylD'), hc = num('cylH');
          if (![d, hc].every(Number.isFinite)) return { ok: false, error: T.errFinite };
          if (!(d > 0 && hc > 0)) return { ok: false, error: T.errPositive };
          cubic = Math.PI * (d / 2) * (d / 2) * hc;
          work = 'V = π × (' + fmt(d) + ' ÷ 2)² × ' + fmt(hc) + ' = ' + fmt(cubic) + ' ' + lu[0] + '³; ';
        }
        var m3 = cubic * Math.pow(lu[1], 3);
        volumeEl.value = String(+(m3 / vu[1]).toPrecision(8));
        return { ok: true, v: m3, work: work };
      }

      /**
       * 计算所求量（内部统一 SI：kg、m³、kg/m³）。
       * @returns {{ ok: boolean, error?: string, kind?: string, value?: number, unit?: string, work?: string, rho?: number }}
       */
      function compute() {
        var kind = solveEl.value;
        var mu = MU[massUnitEl.value];
        var vu = VU[volumeUnitEl.value];
        var du = DU[densUnitEl.value];
        if (kind === 'density') {
          var m = num('mass');
          if (!Number.isFinite(m)) return { ok: false, error: T.errFinite };
          if (!(m > 0)) return { ok: false, error: T.errPositive };
          var vol = readVolume();
          if (!vol.ok) return vol;
          var rho = (m * mu[1]) / vol.v;
          var shownV = vol.v / vu[1];
          var out = rho / du[1];
          return { ok: true, kind: kind, value: out, unit: du[0], rho: rho,
            work: vol.work + 'ρ = m ÷ V = ' + fmt(m) + ' ' + mu[0] + ' ÷ ' + fmt(shownV) + ' ' + vu[0] + ' = ' + fmt(out) + ' ' + du[0] };
        }
        if (kind === 'mass') {
          var r = num('dens');
          if (!Number.isFinite(r)) return { ok: false, error: T.errFinite };
          if (!(r > 0)) return { ok: false, error: T.errPositive };
          var vol2 = readVolume();
          if (!vol2.ok) return vol2;
          var kg = r * du[1] * vol2.v;
          var outM = kg / mu[1];
          return { ok: true, kind: kind, value: outM, unit: mu[0], rho: r * du[1],
            work: vol2.work + 'm = ρ × V = ' + fmt(r) + ' ' + du[0] + ' × ' + fmt(vol2.v / vu[1]) + ' ' + vu[0] + ' = ' + fmt(outM) + ' ' + mu[0] };
        }
        var m3 = num('mass');
        var r3 = num('dens');
        if (!Number.isFinite(m3) || !Number.isFinite(r3)) return { ok: false, error: T.errFinite };
        if (!(m3 > 0 && r3 > 0)) return { ok: false, error: T.errPositive };
        var v3 = (m3 * mu[1]) / (r3 * du[1]);
        var outV = v3 / vu[1];
        return { ok: true, kind: kind, value: outV, unit: vu[0], rho: r3 * du[1],
          work: 'V = m ÷ ρ = ' + fmt(m3) + ' ' + mu[0] + ' ÷ ' + fmt(r3) + ' ' + du[0] + ' = ' + fmt(outV) + ' ' + vu[0] };
      }

      /**
       * 填写换算表、比重与最接近材料。
       * @param {number} rho 密度（kg/m³）
       */
      function renderExtras(rho) {
        convBody.textContent = '';
        Object.keys(DU).forEach(function (code) {
          var tr = document.createElement('tr');
          var th = document.createElement('th');
          th.scope = 'row';
          th.textContent = DU[code][0];
          var td = document.createElement('td');
          td.textContent = fmt(rho / DU[code][1], true);
          tr.appendChild(th);
          tr.appendChild(td);
          convBody.appendChild(tr);
        });
        var g = rho / 1000;
        var sg = g / WATER;
        var verdict = sg > 1.01 ? T.sink : (sg < 0.99 ? T.float : T.neutral);
        sgOut.textContent = fill(T.sgTpl, { sg: fmt(+sg.toPrecision(4), true) }) + ' — ' + verdict;
        var best = null;
        var bestDiff = Infinity;
        MATS.forEach(function (mt) {
          var diff = Math.abs(Math.log(g / mt[1]));
          if (diff < bestDiff) { bestDiff = diff; best = mt; }
        });
        if (best && bestDiff <= Math.log(1.06)) matOut.textContent = fill(T.closestTpl, { name: T.materials[best[0]], rho: fmt(best[1], true) });
        else matOut.textContent = T.closestNone;
      }

      /** 执行计算并刷新结果区。 */
      function runCalc() {
        var out = compute();
        result.style.display = 'block';
        outLabel.textContent = T[solveEl.value];
        if (!out || !out.ok) {
          mainOut.textContent = '—';
          workWrap.style.display = 'none';
          extraWrap.style.display = 'none';
          noteEl.textContent = (out && out.error) || T.errFinite;
          return false;
        }
        var target = out.kind === 'density' ? densEl : (out.kind === 'mass' ? massEl : volumeEl);
        target.value = String(+out.value.toPrecision(6));
        mainOut.textContent = fmt(out.value, true) + ' ' + out.unit;
        workOut.textContent = out.work;
        workWrap.style.display = '';
        renderExtras(out.rho);
        extraWrap.style.display = '';
        noteEl.textContent = T.note;
        return true;
      }

      /** 样例：54 g、20 mL → 2.7 g/cm³（接近铝）。 */
      function loadSample() {
        solveEl.value = 'density';
        volModeEl.value = 'direct';
        massUnitEl.value = 'g';
        volumeUnitEl.value = 'ml';
        densUnitEl.value = 'gcm3';
        syncForm();
        massEl.value = '54';
        volumeEl.value = '20';
        runCalc();
      }

      /** 清空：所有输入与结果；单位与求解对象恢复默认；不重载样例。 */
      function clearAll() {
        form.reset();
        solveEl.value = 'density';
        volModeEl.value = 'direct';
        syncForm();
        result.style.display = 'none';
      }

      solveEl.addEventListener('change', function () { syncForm(); result.style.display = 'none'; });
      volModeEl.addEventListener('change', function () { syncForm(); result.style.display = 'none'; });
      /** 改单位时，若已有结果则立即按新单位重算。 */
      [massUnitEl, volumeUnitEl, densUnitEl, lenUnitEl].forEach(function (el) {
        el.addEventListener('change', function () { if (result.style.display !== 'none') runCalc(); });
      });
      form.addEventListener('submit', function (e) { e.preventDefault(); runCalc(); });
      document.getElementById('btnSample').addEventListener('click', loadSample);
      document.getElementById('btnClear').addEventListener('click', clearAll);
      syncForm();
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('how-to-calculate-density');
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
