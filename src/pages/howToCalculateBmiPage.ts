/**
 * BMI 计算器工具页：公制（kg、cm）、美制（lb、ft、in）与英制（st、lb、ft、in）输入；
 * WHO / CDC 成人分类（含肥胖 I–III 级）或 NHS 对高风险族裔背景的较低切点（23 / 27.5）；
 * 输出 BMI、所在区间刻度条、身高对应的健康体重范围、与范围边界的差值、BMI Prime 与计算过程。
 * slug: how-to-calculate-bmi；YMYL（见 work-tasks/how-to-calculate-bmi/02-tool-info.md）。
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
	renderContextualToolLinks,
} from './site/toolContent';

/** 本工具 i18n 键前缀。 */
const PREFIX = 'tool_bmi';

/**
 * 成人分类区间：[分类键, 下限（含）, 上限（不含）, 色块 class]。
 * 分类按保留 1 位小数后的 BMI 判断，因此 24.95 显示为 25.0 时归入超重，避免「25.0 · 正常」的矛盾。
 */
type BmiBand = [string, number, number, string];

/** 标准成人切点（WHO、CDC）：含肥胖 I / II / III 级。 */
const BANDS_STD: BmiBand[] = [
	['cat_under', 0, 18.5, 'bm-under'],
	['cat_healthy', 18.5, 25, 'bm-healthy'],
	['cat_over', 25, 30, 'bm-over'],
	['cat_ob1', 30, 35, 'bm-ob1'],
	['cat_ob2', 35, 40, 'bm-ob2'],
	['cat_ob3', 40, Infinity, 'bm-ob3'],
];

/** NHS 对南亚、华人、其他亚洲、中东、非洲黑人与非裔加勒比背景的较低切点。 */
const BANDS_ASIAN: BmiBand[] = [
	['cat_under', 0, 18.5, 'bm-under'],
	['cat_healthy', 18.5, 23, 'bm-healthy'],
	['cat_over', 23, 27.5, 'bm-over'],
	['cat_ob', 27.5, Infinity, 'bm-ob2'],
];

/** 为路径加上语言前缀（默认语无前缀）。 */
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * 渲染 BMI 计算器工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 * @returns 完整页面 HTML
 */
export const renderHowToCalculateBmiPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 读取本工具键（自动拼前缀）。 */
	const tx = (key: string) => t(opts.lang, `${PREFIX}_${key}` as keyof typeof import('../site/i18n/en').default);

	const toolPath = '/tools/how-to-calculate-bmi';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${tx('title')} | ${t(opts.lang, 'brand')}`;
	const description = tx('description');

	const navItems = buildToolPageNavItems(opts.lang, opts.defaultLang);

	/** 语言切换链接始终带显式语言前缀（含默认语）。 */
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
		groups: buildToolSidebarItems({ lang: opts.lang, defaultLang: opts.defaultLang, currentSlug: 'how-to-calculate-bmi', currentAnchor: '#bmi' }),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	/** 一位小数的本地化格式器（拉丁数字）。 */
	const nf1 = new Intl.NumberFormat(`${opts.lang}-u-nu-latn`, { minimumFractionDigits: 1, maximumFractionDigits: 1 });

	/**
	 * 区间的 BMI 范围文字：如「< 18.5」「18.5 – 24.9」「≥ 40.0」。
	 * @param lo 下限（含）
	 * @param hi 上限（不含）
	 * @returns 范围文字
	 */
	const bandRange = (lo: number, hi: number) => {
		if (lo === 0) return `< ${nf1.format(hi)}`;
		if (hi === Infinity) return `≥ ${nf1.format(lo)}`;
		return `${nf1.format(lo)} – ${nf1.format(hi - 0.1)}`;
	};

	/** 服务端预渲染的标准分类表行（前端切换切点时会重绘）。 */
	const tableRowsHtml = BANDS_STD.map(
		([key, lo, hi, cls]) =>
			`<tr class="${cls}"><td><span class="bm-dot"></span>${escapeHtml(tx(key))}</td><td>${escapeHtml(bandRange(lo, hi))}</td></tr>`
	).join('');

	/** BMI 表单、刻度条与分类表样式。 */
	const extraHeadHtml = `
  <style>
    .tool-card { max-width: var(--content-max); width: 100%; margin: 0 0 1.5rem; }
    .form-label { display:block; margin-bottom:.5rem; color:#495057; font-weight:500 }
    .form-group { margin-bottom:1rem; }
    .form-row2 { display:grid; grid-template-columns:repeat(2, minmax(0, 1fr)); gap:0 1rem; }
    @media (max-width:576px) { .form-row2 { grid-template-columns:minmax(0, 1fr); } }
    .form-row2 .input-lg, #bmUnit { width:100%; max-width:100%; box-sizing:border-box; }
    .bm-check { display:flex; gap:.5rem; align-items:flex-start; font-size:.9rem; color:#495057; margin:.25rem 0 1rem; }
    .bm-check input { margin-top:.2rem; flex:0 0 auto; }
    .btn-row { display:flex; flex-wrap:wrap; gap:.5rem; align-items:center; }
    .result { background:#f8f9fa; padding:1rem; border-radius:8px; margin-top:1rem; }
    .bm-main-label { text-align:center; color:#495057; font-size:.95rem; }
    .bm-main { font-size:1.9rem; font-weight:700; text-align:center; margin:.15rem 0 .25rem; font-variant-numeric:tabular-nums; }
    .bm-badge { display:block; width:max-content; max-width:100%; margin:0 auto .5rem; padding:.2rem .75rem; border-radius:999px; font-weight:600; font-size:.95rem; }
    .bm-meaning { text-align:center; color:#495057; font-size:.92rem; margin-bottom:.75rem; }
    .bm-scale { position:relative; height:12px; border-radius:6px; overflow:hidden; display:flex; margin:1.4rem 0 .35rem; }
    .bm-scale span { display:block; height:100%; }
    .bm-scale-wrap { position:relative; }
    .bm-marker { position:absolute; z-index:2; top:-1.15rem; transform:translateX(-50%); font-size:.8rem; font-weight:700; white-space:nowrap; }
    .bm-marker::after { content:''; display:block; width:2px; height:1.55rem; background:#212529; margin:0 auto; }
    .bm-ticks { position:relative; height:1rem; font-size:.75rem; color:#6c757d; font-variant-numeric:tabular-nums; }
    .bm-ticks span { position:absolute; transform:translateX(-50%); }
    .bm-row { color:#495057; font-size:.92rem; margin-top:.45rem; font-variant-numeric:tabular-nums; }
    .bm-table { width:100%; border-collapse:collapse; font-size:.9rem; margin-top:.5rem; font-variant-numeric:tabular-nums; }
    .bm-table th, .bm-table td { padding:.35rem .5rem; border-bottom:1px solid #dee2e6; text-align:start; }
    .bm-table th { color:#495057; font-weight:600; }
    .bm-table tr.bm-current td { font-weight:700; }
    .bm-dot { display:inline-block; width:.7rem; height:.7rem; border-radius:50%; margin-inline-end:.45rem; vertical-align:-.05rem; }
    .bm-under .bm-dot, .bm-scale .bm-under, .bm-badge.bm-under { background:#cfe2ff; color:#084298; }
    .bm-healthy .bm-dot, .bm-scale .bm-healthy, .bm-badge.bm-healthy { background:#d1e7dd; color:#0f5132; }
    .bm-over .bm-dot, .bm-scale .bm-over, .bm-badge.bm-over { background:#fff3cd; color:#664d03; }
    .bm-ob1 .bm-dot, .bm-scale .bm-ob1, .bm-badge.bm-ob1 { background:#fcd9bd; color:#7a3e00; }
    .bm-ob2 .bm-dot, .bm-scale .bm-ob2, .bm-badge.bm-ob2 { background:#f8d7da; color:#842029; }
    .bm-ob3 .bm-dot, .bm-scale .bm-ob3, .bm-badge.bm-ob3 { background:#f1aeb5; color:#58151c; }
    .result .muted { color:#6c757d; font-size:.88rem; margin-top:.75rem; }
  </style>`;

	const contentHtml = `
    <div id="bmi" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(tx('title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <form id="bmForm" novalidate>
          <div class="form-group">
            <label class="form-label" for="bmUnit">${escapeHtml(tx('unit_label'))}</label>
            <select id="bmUnit" class="input-lg">
              <option value="metric" selected>${escapeHtml(tx('unit_metric'))}</option>
              <option value="us">${escapeHtml(tx('unit_us'))}</option>
              <option value="uk">${escapeHtml(tx('unit_uk'))}</option>
            </select>
          </div>
          <div class="form-row2 bm-u-metric">
            <div class="form-group">
              <label class="form-label" for="bmKg">${escapeHtml(tx('kg_label'))}</label>
              <input id="bmKg" class="input-lg" type="text" inputmode="decimal" autocomplete="off" placeholder="${escapeHtml(tx('kg_ph'))}">
            </div>
            <div class="form-group">
              <label class="form-label" for="bmCm">${escapeHtml(tx('cm_label'))}</label>
              <input id="bmCm" class="input-lg" type="text" inputmode="decimal" autocomplete="off" placeholder="${escapeHtml(tx('cm_ph'))}">
            </div>
          </div>
          <div class="form-row2 bm-u-us" style="display:none">
            <div class="form-group">
              <label class="form-label" for="bmLb">${escapeHtml(tx('lb_label'))}</label>
              <input id="bmLb" class="input-lg" type="text" inputmode="decimal" autocomplete="off" placeholder="${escapeHtml(tx('lb_ph'))}">
            </div>
          </div>
          <div class="form-row2 bm-u-uk" style="display:none">
            <div class="form-group">
              <label class="form-label" for="bmSt">${escapeHtml(tx('st_label'))}</label>
              <input id="bmSt" class="input-lg" type="text" inputmode="decimal" autocomplete="off" placeholder="${escapeHtml(tx('st_ph'))}">
            </div>
            <div class="form-group">
              <label class="form-label" for="bmStLb">${escapeHtml(tx('stlb_label'))}</label>
              <input id="bmStLb" class="input-lg" type="text" inputmode="decimal" autocomplete="off" placeholder="${escapeHtml(tx('stlb_ph'))}">
            </div>
          </div>
          <div class="form-row2 bm-u-us bm-u-uk" style="display:none">
            <div class="form-group">
              <label class="form-label" for="bmFt">${escapeHtml(tx('ft_label'))}</label>
              <input id="bmFt" class="input-lg" type="text" inputmode="decimal" autocomplete="off" placeholder="${escapeHtml(tx('ft_ph'))}">
            </div>
            <div class="form-group">
              <label class="form-label" for="bmIn">${escapeHtml(tx('in_label'))}</label>
              <input id="bmIn" class="input-lg" type="text" inputmode="decimal" autocomplete="off" placeholder="${escapeHtml(tx('in_ph'))}">
            </div>
          </div>
          <label class="bm-check"><input type="checkbox" id="bmAsian"> <span>${escapeHtml(tx('asian_label'))}</span></label>
          <div class="btn-row">
            <button type="submit" id="bmBtnCalc" class="btn btn-primary">${escapeHtml(tx('calculate'))}</button>
            <button type="button" id="bmBtnSample" class="btn btn-outline-secondary">${escapeHtml(tx('sample'))}</button>
            <button type="button" id="bmBtnClear" class="btn btn-outline-secondary">${escapeHtml(tx('clear'))}</button>
          </div>
        </form>

        <div id="bmResult" class="result" style="display:none" aria-live="polite">
          <div class="bm-main-label">${escapeHtml(tx('result_label'))}</div>
          <div id="bmMain" class="bm-main"></div>
          <span id="bmBadge" class="bm-badge"></span>
          <div id="bmMeaning" class="bm-meaning"></div>
          <div id="bmScaleWrap" class="bm-scale-wrap" role="img" aria-label="${escapeHtml(tx('scale_label'))}">
            <div id="bmMarker" class="bm-marker"></div>
            <div id="bmScale" class="bm-scale"></div>
            <div id="bmTicks" class="bm-ticks"></div>
          </div>
          <div id="bmRows"></div>
          <div id="bmNote" class="muted"></div>
        </div>

        <h2 class="h6 mt-4 mb-0">${escapeHtml(tx('table_title'))}</h2>
        <table class="bm-table">
          <thead><tr><th>${escapeHtml(tx('table_col_cat'))}</th><th>${escapeHtml(tx('table_col_range'))}</th></tr></thead>
          <tbody id="bmTable">${tableRowsHtml}</tbody>
        </table>
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
		})}
    ${renderContextualToolLinks({
			lang: opts.lang,
			defaultLang: opts.defaultLang,
			lead: tx('ctx_lead'),
			slugs: ['how-to-calculate-bmr-tdee', 'how-to-calculate-body-fat', 'how-to-calculate-ideal-weight'],
		})}`;

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: tx('ref_who_label'),
				href: 'https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight',
			},
			{
				label: tx('ref_cdc_label'),
				href: 'https://www.cdc.gov/bmi/adult-calculator/bmi-categories.html',
			},
			{
				label: tx('ref_nhs_label'),
				href: 'https://www.nhs.uk/conditions/obesity/',
			},
		],
	});

	/** 前端脚本需要的文案（一次性注入）。 */
	const clientText = {
		lang: opts.lang,
		cats: Object.fromEntries(
			['cat_under', 'cat_healthy', 'cat_over', 'cat_ob1', 'cat_ob2', 'cat_ob3', 'cat_ob'].map((k) => [k, tx(k)])
		),
		meanings: {
			cat_under: tx('meaning_under'),
			cat_healthy: tx('meaning_healthy'),
			cat_over: tx('meaning_over'),
			cat_ob1: tx('meaning_ob'),
			cat_ob2: tx('meaning_ob'),
			cat_ob3: tx('meaning_ob'),
			cat_ob: tx('meaning_ob'),
		},
		symKg: tx('sym_kg'),
		symLb: tx('sym_lb'),
		symSt: tx('sym_st'),
		rowWork: tx('row_work'),
		rowRange: tx('row_range'),
		rowTarget: tx('row_target'),
		rowPrime: tx('row_prime'),
		rowCutoffs: tx('row_cutoffs'),
		workMetric: tx('work_metric_tpl'),
		workImp: tx('work_imp_tpl'),
		rangeTpl: tx('range_tpl'),
		targetAbove: tx('target_above_tpl'),
		targetBelow: tx('target_below_tpl'),
		targetIn: tx('target_in'),
		primeTpl: tx('prime_tpl'),
		cutoffsStd: tx('cutoffs_std'),
		cutoffsAsian: tx('cutoffs_asian'),
		compareStd: tx('compare_std_tpl'),
		errWeight: tx('err_weight'),
		errHeight: tx('err_height'),
		errInch: tx('err_inch'),
		errStLb: tx('err_stlb'),
		errRange: tx('err_range'),
		note: tx('result_note'),
	};

	const extraBodyHtml = `
  <script>
    (function () {
      /** 表单与输入控件。 */
      var form = document.getElementById('bmForm');
      var unitEl = document.getElementById('bmUnit');
      var kgEl = document.getElementById('bmKg');
      var cmEl = document.getElementById('bmCm');
      var lbEl = document.getElementById('bmLb');
      var stEl = document.getElementById('bmSt');
      var stLbEl = document.getElementById('bmStLb');
      var ftEl = document.getElementById('bmFt');
      var inEl = document.getElementById('bmIn');
      var asianEl = document.getElementById('bmAsian');
      /** 结果区各输出位。 */
      var result = document.getElementById('bmResult');
      var mainEl = document.getElementById('bmMain');
      var badgeEl = document.getElementById('bmBadge');
      var meaningEl = document.getElementById('bmMeaning');
      var scaleWrap = document.getElementById('bmScaleWrap');
      var markerEl = document.getElementById('bmMarker');
      var scaleEl = document.getElementById('bmScale');
      var ticksEl = document.getElementById('bmTicks');
      var rowsEl = document.getElementById('bmRows');
      var noteEl = document.getElementById('bmNote');
      var tableEl = document.getElementById('bmTable');
      /** 本地化文案字典。 */
      var T = ${JSON.stringify(clientText)};
      /** 两套切点：标准（WHO、CDC）与 NHS 较低切点。 */
      var BANDS = { std: ${JSON.stringify(BANDS_STD.map(([k, lo, hi, c]) => [k, lo, hi === Infinity ? null : hi, c]))}, asian: ${JSON.stringify(BANDS_ASIAN.map(([k, lo, hi, c]) => [k, lo, hi === Infinity ? null : hi, c]))} };
      /** 1 磅的千克数（国际磅，精确值）。 */
      var KG_PER_LB = 0.45359237;
      /** 1 英寸的米数（精确值）。 */
      var M_PER_IN = 0.0254;
      /** 刻度条显示的 BMI 范围。 */
      var SCALE_MIN = 15;
      var SCALE_MAX = 40;
      /** 数字输入：整数或小数（点或逗号）。 */
      var NUM_RE = /^[0-9]+([.][0-9]+)?$|^[.][0-9]+$/;
      /** 样例轮换；首个与 Example 一致。 */
      var SAMPLES = [
        { unit: 'metric', kg: '70', cm: '175', asian: false },
        { unit: 'us', lb: '200', ft: '5', inch: '10', asian: false },
        { unit: 'metric', kg: '64', cm: '165', asian: true },
        { unit: 'uk', st: '11', stlb: '0', ft: '5', inch: '7', asian: false }
      ];
      /** 下一次点击「加载样例」使用的样例下标。 */
      var sampleIndex = 0;
      /** 本地化数字格式器缓存。 */
      var nfCache = {};

      /**
       * 按页面语言格式化数字（拉丁数字），小数位在 [minD, maxD] 之间。
       * @param {number} v 数值
       * @param {number} minD 最少小数位
       * @param {number} maxD 最多小数位
       * @returns {string}
       */
      function nf(v, minD, maxD) {
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
       * 解析非负数（小数点或小数逗号，忽略空格）；空串返回 null，格式错返回 NaN。
       * @param {string} raw 输入
       * @returns {number|null}
       */
      function parseNum(raw) {
        var s = String(raw || '').trim().split(' ').join('').split(',').join('.');
        if (!s) return null;
        if (!NUM_RE.test(s)) return NaN;
        return parseFloat(s);
      }

      /**
       * 千克写成当前单位体系的体重文字。
       * @param {number} kg 千克
       * @param {string} unit metric | us | uk
       * @returns {string}
       */
      function weightText(kg, unit) {
        if (unit === 'metric') return nf(kg, 1, 1) + ' ' + T.symKg;
        var lb = kg / KG_PER_LB;
        if (unit === 'us') return nf(lb, 1, 1) + ' ' + T.symLb;
        var total = Math.round(lb);
        return Math.floor(total / 14) + ' ' + T.symSt + ' ' + (total % 14) + ' ' + T.symLb;
      }

      /**
       * 次要单位的体重文字（公制显示磅，其余显示千克）。
       * @param {number} kg 千克
       * @param {string} unit metric | us | uk
       * @returns {string}
       */
      function weightAlt(kg, unit) {
        return unit === 'metric' ? nf(kg / KG_PER_LB, 1, 1) + ' ' + T.symLb : nf(kg, 1, 1) + ' ' + T.symKg;
      }

      /**
       * 在当前切点下查找 BMI 所在区间（按 1 位小数后的值）。
       * @param {number} bmi1 已保留 1 位小数的 BMI
       * @param {Array} bands 区间表
       * @returns {Array} [键, 下限, 上限|null, class]
       */
      function findBand(bmi1, bands) {
        for (var i = 0; i < bands.length; i++) {
          var hi = bands[i][2];
          if (hi === null || bmi1 < hi) return bands[i];
        }
        return bands[bands.length - 1];
      }

      /**
       * 区间范围文字：< 18.5、18.5 – 24.9、≥ 40.0。
       * @param {number} lo 下限
       * @param {number|null} hi 上限（不含）
       * @returns {string}
       */
      function bandRange(lo, hi) {
        if (lo === 0) return '< ' + nf(hi, 1, 1);
        if (hi === null) return '≥ ' + nf(lo, 1, 1);
        return nf(lo, 1, 1) + ' – ' + nf(hi - 0.1, 1, 1);
      }

      /**
       * 重绘分类表并标出当前所在行。
       * @param {Array} bands 区间表
       * @param {string|null} currentKey 当前分类键
       */
      function renderTable(bands, currentKey) {
        tableEl.textContent = '';
        bands.forEach(function (b) {
          var tr = document.createElement('tr');
          tr.className = b[3] + (b[0] === currentKey ? ' bm-current' : '');
          var td1 = document.createElement('td');
          var dot = document.createElement('span');
          dot.className = 'bm-dot';
          td1.appendChild(dot);
          td1.appendChild(document.createTextNode(T.cats[b[0]]));
          var td2 = document.createElement('td');
          td2.textContent = bandRange(b[1], b[2]);
          tr.appendChild(td1);
          tr.appendChild(td2);
          tableEl.appendChild(tr);
        });
      }

      /**
       * BMI 在刻度条上的百分比位置（15–40 之外贴边）。
       * @param {number} v BMI
       * @returns {number} 0–100
       */
      function pos(v) {
        return Math.max(0, Math.min(100, (v - SCALE_MIN) / (SCALE_MAX - SCALE_MIN) * 100));
      }

      /**
       * 绘制刻度条：按切点分段着色、标出切点刻度与当前 BMI。
       * @param {Array} bands 区间表
       * @param {number} bmi1 已保留 1 位小数的 BMI
       */
      function renderScale(bands, bmi1) {
        scaleEl.textContent = '';
        ticksEl.textContent = '';
        bands.forEach(function (b, i) {
          var lo = Math.max(b[1], SCALE_MIN);
          var hi = b[2] === null ? SCALE_MAX : Math.min(b[2], SCALE_MAX);
          if (hi <= lo) return;
          var seg = document.createElement('span');
          seg.className = b[3];
          seg.style.width = (pos(hi) - pos(lo)) + '%';
          scaleEl.appendChild(seg);
          if (i > 0) {
            var tick = document.createElement('span');
            tick.style.left = pos(b[1]) + '%';
            tick.textContent = nf(b[1], 0, 1);
            ticksEl.appendChild(tick);
          }
        });
        markerEl.style.left = pos(bmi1) + '%';
        markerEl.textContent = nf(bmi1, 1, 1);
      }

      /**
       * 结果区追加一行「标签：值」。
       * @param {string} label 标签
       * @param {string} value 值
       */
      function addRow(label, value) {
        var div = document.createElement('div');
        div.className = 'bm-row';
        var strong = document.createElement('strong');
        strong.textContent = label + ': ';
        div.appendChild(strong);
        div.appendChild(document.createTextNode(value));
        rowsEl.appendChild(div);
      }

      /**
       * 显示错误（隐藏刻度条与明细）。
       * @param {string} msg 文案
       */
      function showError(msg) {
        result.style.display = 'block';
        mainEl.textContent = '—';
        badgeEl.style.display = 'none';
        meaningEl.textContent = '';
        scaleWrap.style.display = 'none';
        rowsEl.textContent = '';
        noteEl.textContent = msg;
        renderTable(asianEl.checked ? BANDS.asian : BANDS.std, null);
      }

      /**
       * 读取当前输入，换算成千克与米；出错返回错误文案。
       * @returns {{ kg: number, m: number, lb: number, inch: number }|{ err: string }}
       */
      function readInputs() {
        var unit = unitEl.value;
        var kg;
        var m;
        if (unit === 'metric') {
          kg = parseNum(kgEl.value);
          var cm = parseNum(cmEl.value);
          if (!(kg > 0)) return { err: T.errWeight };
          if (!(cm > 0)) return { err: T.errHeight };
          m = cm / 100;
        } else {
          var lb;
          if (unit === 'us') {
            lb = parseNum(lbEl.value);
          } else {
            var st = parseNum(stEl.value);
            var extra = parseNum(stLbEl.value);
            if (st !== null && isNaN(st)) return { err: T.errWeight };
            if (extra !== null && isNaN(extra)) return { err: T.errWeight };
            if (st && extra !== null && extra >= 14) return { err: T.errStLb };
            lb = (st || 0) * 14 + (extra || 0);
          }
          if (!(lb > 0)) return { err: T.errWeight };
          var ft = parseNum(ftEl.value);
          var inch = parseNum(inEl.value);
          if ((ft !== null && isNaN(ft)) || (inch !== null && isNaN(inch))) return { err: T.errHeight };
          if (ft && inch !== null && inch >= 12) return { err: T.errInch };
          var totalIn = (ft || 0) * 12 + (inch || 0);
          if (!(totalIn > 0)) return { err: T.errHeight };
          kg = lb * KG_PER_LB;
          m = totalIn * M_PER_IN;
        }
        if (m < 0.5 || m > 2.72 || kg < 10 || kg > 650) return { err: T.errRange };
        return { kg: kg, m: m, lb: kg / KG_PER_LB, inch: m / M_PER_IN };
      }

      /** 计算并显示 BMI、分类、刻度、健康范围、差值、BMI Prime 与计算过程。 */
      function run() {
        var unit = unitEl.value;
        var asian = asianEl.checked;
        var bands = asian ? BANDS.asian : BANDS.std;
        var r = readInputs();
        if (r.err) return showError(r.err);
        var bmi = r.kg / (r.m * r.m);
        var bmi1 = Math.round(bmi * 10) / 10;
        var band = findBand(bmi1, bands);
        var top = asian ? 22.9 : 24.9;
        result.style.display = 'block';
        mainEl.textContent = nf(bmi1, 1, 1);
        badgeEl.style.display = '';
        badgeEl.className = 'bm-badge ' + band[3];
        badgeEl.textContent = T.cats[band[0]];
        meaningEl.textContent = T.meanings[band[0]];
        scaleWrap.style.display = '';
        renderScale(bands, bmi1);
        rowsEl.textContent = '';
        var work = unit === 'metric'
          ? fill(T.workMetric, { w: nf(r.kg, 0, 2), h: nf(r.m, 2, 3), h2: nf(r.m * r.m, 2, 4), bmi: nf(bmi1, 1, 1) })
          : fill(T.workImp, { lb: nf(r.lb, 0, 2), inch: nf(r.inch, 0, 2), bmi: nf(bmi1, 1, 1), kg: nf(r.kg, 1, 2), m: nf(r.m, 3, 3) });
        addRow(T.rowWork, work);
        if (asian) {
          var stdBand = findBand(bmi1, BANDS.std);
          if (stdBand[0] !== band[0]) addRow(T.rowCutoffs, T.cutoffsAsian + ' — ' + fill(T.compareStd, { c: T.cats[stdBand[0]] }));
          else addRow(T.rowCutoffs, T.cutoffsAsian);
        } else {
          addRow(T.rowCutoffs, T.cutoffsStd);
        }
        var h2 = r.m * r.m;
        var loKg = 18.5 * h2;
        var hiKg = top * h2;
        addRow(T.rowRange, fill(T.rangeTpl, { lo: weightText(loKg, unit), hi: weightText(hiKg, unit), alt: weightAlt(loKg, unit) + ' – ' + weightAlt(hiKg, unit), top: nf(top, 1, 1) }));
        if (bmi1 > top) {
          addRow(T.rowTarget, fill(T.targetAbove, { top: nf(top, 1, 1), w: weightText(hiKg, unit), d: weightText(r.kg - hiKg, unit === 'uk' ? 'us' : unit) }));
        } else if (bmi1 < 18.5) {
          addRow(T.rowTarget, fill(T.targetBelow, { w: weightText(loKg, unit), d: weightText(loKg - r.kg, unit === 'uk' ? 'us' : unit) }));
        } else {
          addRow(T.rowTarget, T.targetIn);
        }
        var u = asian ? 23 : 25;
        addRow(T.rowPrime, fill(T.primeTpl, { p: nf(bmi / u, 2, 2), u: nf(u, 0, 0) }));
        noteEl.textContent = T.note;
        renderTable(bands, band[0]);
      }

      /** 按单位体系显隐输入组。 */
      function syncUnit() {
        var unit = unitEl.value;
        document.querySelectorAll('.bm-u-metric, .bm-u-us, .bm-u-uk').forEach(function (el) {
          el.style.display = el.className.indexOf('bm-u-' + unit) >= 0 ? '' : 'none';
        });
      }

      /**
       * 把样例中的小数点换成页面语言习惯的小数符号（逗号语种）。
       * @param {string} v 样例值
       * @returns {string}
       */
      function localNum(v) {
        return nf(1.5, 1, 1).indexOf(',') >= 0 ? String(v).split('.').join(',') : String(v);
      }

      /** 加载样例：公制 → 美制 → 较低切点 → 英制，轮换。 */
      function loadSample() {
        var s = SAMPLES[sampleIndex];
        sampleIndex = (sampleIndex + 1) % SAMPLES.length;
        unitEl.value = s.unit;
        kgEl.value = localNum(s.kg || '');
        cmEl.value = localNum(s.cm || '');
        lbEl.value = localNum(s.lb || '');
        stEl.value = s.st || '';
        stLbEl.value = s.stlb || '';
        ftEl.value = s.ft || '';
        inEl.value = s.inch || '';
        asianEl.checked = !!s.asian;
        syncUnit();
        run();
      }

      /** 清空：清输入、恢复公制与标准切点、隐藏结果；不重载样例。 */
      function clearAll() {
        [kgEl, cmEl, lbEl, stEl, stLbEl, ftEl, inEl].forEach(function (el) { el.value = ''; });
        unitEl.value = 'metric';
        asianEl.checked = false;
        syncUnit();
        result.style.display = 'none';
        renderTable(BANDS.std, null);
        kgEl.focus();
      }

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        run();
      });
      unitEl.addEventListener('change', function () {
        syncUnit();
        result.style.display = 'none';
      });
      asianEl.addEventListener('change', function () {
        if (result.style.display !== 'none' && mainEl.textContent !== '—') run();
        else renderTable(asianEl.checked ? BANDS.asian : BANDS.std, null);
      });
      document.getElementById('bmBtnSample').addEventListener('click', loadSample);
      document.getElementById('bmBtnClear').addEventListener('click', clearAll);
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('how-to-calculate-bmi');
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
