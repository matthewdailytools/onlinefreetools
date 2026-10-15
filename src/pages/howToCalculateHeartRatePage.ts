/**
 * 心率区间计算器工具页。
 * slug: how-to-calculate-heart-rate（见 work-tasks/how-to-calculate-heart-rate/02-tool-info.md）。
 *
 * 交互要点（2026-10-15 改写）：
 * - 最大心率来源：220 − 年龄 / Tanaka（208 − 0.7 × 年龄）/ Gulati（206 − 0.88 × 年龄，女性）/ 自己实测的最大心率；
 * - 可选静息心率：启用心率储备（Karvonen）法，并按 AHA 区间给出静息心率说明；
 * - 五个训练区间（50–60 / 60–70 / 70–80 / 80–90 / 90–100%）的 bpm 范围与「30 秒数脉搏」次数；
 * - 同时列出 AHA 中等强度（50–70%）与高强度（70–85%）目标心率，以及三种年龄公式的对照。
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
const PREFIX = 'tool_heart_rate';

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
 * 渲染 how-to-calculate-heart-rate 工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 * @returns 完整页面 HTML
 */
export const renderHowToCalculateHeartRatePage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 读取本工具键（自动拼前缀）。 */
	const tx = (key: string) => t(opts.lang, `${PREFIX}_${key}` as keyof typeof import('../site/i18n/en').default);

	const toolPath = '/tools/how-to-calculate-heart-rate';
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
			currentSlug: 'how-to-calculate-heart-rate',
			currentAnchor: '#heart-rate',
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
    .form-row { display:grid; grid-template-columns:1fr 1fr 1fr; gap:1rem; }
    @media (max-width:768px) { .form-row { grid-template-columns:1fr; } }
    .btn-row { display:flex; flex-wrap:wrap; gap:.5rem; align-items:center; }
    .result { background:#f8f9fa; padding:1rem; border-radius:8px; margin-top:1rem; }
    .hr-main { font-size:1.6rem; font-weight:600; text-align:center; margin:.25rem 0 0; font-variant-numeric:tabular-nums; }
    .hr-sub { text-align:center; color:#495057; font-size:.95rem; margin-top:.25rem; }
    .hr-line { color:#495057; font-size:.92rem; margin-top:.6rem; }
    .hr-table-wrap { overflow-x:auto; margin-top:1rem; }
    .hr-caption { color:#495057; font-size:.88rem; margin:0 0 .35rem; }
    .hr-table { width:100%; border-collapse:collapse; font-size:.9rem; font-variant-numeric:tabular-nums; }
    .hr-table th, .hr-table td { padding:.35rem .5rem; border-bottom:1px solid #dee2e6; text-align:end; white-space:nowrap; }
    .hr-table th:nth-child(-n+2), .hr-table td:nth-child(-n+2) { text-align:start; }
    .result .muted { color:#6c757d; font-size:.9rem; margin-top:.75rem; }
  </style>`;

	const contentHtml = `
    <div id="heart-rate" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(tx('title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <form id="calcForm" novalidate>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label" for="hrFormula">${escapeHtml(tx('formula_label'))}</label>
              <select id="hrFormula" class="input-lg">
                <option value="fox" selected>${escapeHtml(tx('formula_fox'))}</option>
                <option value="tanaka">${escapeHtml(tx('formula_tanaka'))}</option>
                <option value="gulati">${escapeHtml(tx('formula_gulati'))}</option>
                <option value="measured">${escapeHtml(tx('formula_measured'))}</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label" for="hrAge">${escapeHtml(tx('age_label'))}</label>
              <input id="hrAge" class="input-lg" type="text" inputmode="numeric" autocomplete="off" placeholder="${escapeHtml(tx('age_ph'))}">
            </div>
            <div class="form-group" id="hrMaxWrap" style="display:none">
              <label class="form-label" for="hrMax">${escapeHtml(tx('max_label'))}</label>
              <input id="hrMax" class="input-lg" type="text" inputmode="numeric" autocomplete="off" placeholder="${escapeHtml(tx('max_ph'))}">
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label" for="hrRest">${escapeHtml(tx('rest_label'))}</label>
              <input id="hrRest" class="input-lg" type="text" inputmode="numeric" autocomplete="off" placeholder="${escapeHtml(tx('rest_ph'))}">
              <span class="form-hint">${escapeHtml(tx('rest_hint'))}</span>
            </div>
            <div class="form-group">
              <label class="form-label" for="hrMethod">${escapeHtml(tx('method_label'))}</label>
              <select id="hrMethod" class="input-lg">
                <option value="pct" selected>${escapeHtml(tx('method_pct'))}</option>
                <option value="hrr">${escapeHtml(tx('method_hrr'))}</option>
              </select>
            </div>
          </div>
          <div class="btn-row">
            <button type="submit" id="hrBtnCalc" class="btn btn-primary">${escapeHtml(tx('calculate'))}</button>
            <button type="button" id="hrBtnSample" class="btn btn-outline-secondary">${escapeHtml(tx('sample'))}</button>
            <button type="button" id="hrBtnClear" class="btn btn-outline-secondary">${escapeHtml(tx('clear'))}</button>
          </div>
        </form>
        <div id="calcResult" class="result" style="display:none" aria-live="polite">
          <div class="hr-sub">${escapeHtml(tx('out_max'))}</div>
          <div id="hrMain" class="hr-main"></div>
          <div id="hrMainSub" class="hr-sub"></div>
          <div id="hrDetails">
            <div id="hrCmpRow" class="hr-line"><strong>${escapeHtml(tx('cmp_label'))}:</strong> <span id="hrCmp"></span></div>
            <div id="hrHrrRow" class="hr-line"><strong>${escapeHtml(tx('hrr_label'))}:</strong> <span id="hrHrr"></span></div>
            <div id="hrRestRow" class="hr-line"><strong>${escapeHtml(tx('rest_status_label'))}:</strong> <span id="hrRestStatus"></span></div>
            <div class="hr-line"><strong>${escapeHtml(tx('aha_label'))}:</strong> <span id="hrAha"></span></div>
            <div class="hr-line"><strong>${escapeHtml(tx('work_label'))}:</strong> <span id="hrWork"></span></div>
            <div class="hr-table-wrap">
              <p id="hrCaption" class="hr-caption"></p>
              <table class="hr-table">
                <thead><tr>
                  <th scope="col">${escapeHtml(tx('col_zone'))}</th>
                  <th scope="col">${escapeHtml(tx('col_effort'))}</th>
                  <th scope="col">${escapeHtml(tx('col_pct'))}</th>
                  <th scope="col">${escapeHtml(tx('col_bpm'))}</th>
                  <th scope="col">${escapeHtml(tx('col_30s'))}</th>
                </tr></thead>
                <tbody id="hrBody"></tbody>
              </table>
            </div>
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
				href: 'https://www.heart.org/en/healthy-living/fitness/fitness-basics/target-heart-rates',
			},
			{
				label: tx('ref_b_label'),
				href: 'https://pubmed.ncbi.nlm.nih.gov/11153730/',
			},
		],
	});

	/** 前端脚本需要的文案（一次性注入）。 */
	const clientText = {
		bpm: tx('bpm_tpl'),
		subFox: tx('sub_fox'),
		subTanaka: tx('sub_tanaka'),
		subGulati: tx('sub_gulati'),
		subMeasured: tx('sub_measured'),
		cmp: tx('cmp_tpl'),
		hrr: tx('hrr_tpl'),
		aha: tx('aha_tpl'),
		workPct: tx('work_pct_tpl'),
		workHrr: tx('work_hrr_tpl'),
		capPct: tx('cap_pct'),
		capHrr: tx('cap_hrr'),
		zones: [tx('zone_1'), tx('zone_2'), tx('zone_3'), tx('zone_4'), tx('zone_5')],
		restLow: tx('rest_low_tpl'),
		restAthlete: tx('rest_athlete_tpl'),
		restNormal: tx('rest_normal_tpl'),
		restHigh: tx('rest_high_tpl'),
		errAge: tx('err_age'),
		errMax: tx('err_max'),
		errRest: tx('err_rest'),
		errRestNeeded: tx('err_rest_needed'),
		errRestHigh: tx('err_rest_high'),
		note: tx('result_note'),
	};

	const extraBodyHtml = `
  <script>
    (function () {
      /** 表单与输入控件。 */
      var form = document.getElementById('calcForm');
      var formulaEl = document.getElementById('hrFormula');
      var ageEl = document.getElementById('hrAge');
      var maxWrapEl = document.getElementById('hrMaxWrap');
      var maxEl = document.getElementById('hrMax');
      var restEl = document.getElementById('hrRest');
      var methodEl = document.getElementById('hrMethod');
      /** 结果区各输出位。 */
      var result = document.getElementById('calcResult');
      var detailsEl = document.getElementById('hrDetails');
      var mainEl = document.getElementById('hrMain');
      var mainSubEl = document.getElementById('hrMainSub');
      var cmpRowEl = document.getElementById('hrCmpRow');
      var cmpEl = document.getElementById('hrCmp');
      var hrrRowEl = document.getElementById('hrHrrRow');
      var hrrEl = document.getElementById('hrHrr');
      var restRowEl = document.getElementById('hrRestRow');
      var restStatusEl = document.getElementById('hrRestStatus');
      var ahaEl = document.getElementById('hrAha');
      var workEl = document.getElementById('hrWork');
      var captionEl = document.getElementById('hrCaption');
      var bodyEl = document.getElementById('hrBody');
      var noteEl = document.getElementById('calcNote');
      /** 当前页面语言（决定数字格式）。 */
      var LANG = ${JSON.stringify(opts.lang)};
      /** 本地化文案字典。 */
      var T = ${JSON.stringify(clientText)};
      /** 五个训练区间的百分比边界（%）。 */
      var ZONE_EDGES = [50, 60, 70, 80, 90, 100];
      /** 样例轮换：[最大心率来源, 年龄, 实测最大心率, 静息心率, 区间算法]；首个与 Example 一致。 */
      var SAMPLES = [
        ['fox', '30', '', '', 'pct'],
        ['tanaka', '45', '', '60', 'hrr'],
        ['measured', '38', '185', '52', 'hrr']
      ];
      /** 下一次点击「加载样例」使用的样例下标。 */
      var sampleIndex = 0;

      /** 数字与百分比格式器（拉丁数字）。 */
      var numFormat = null;
      var pctFormat = null;
      try {
        numFormat = new Intl.NumberFormat(LANG + '-u-nu-latn', { maximumFractionDigits: 2 });
        pctFormat = new Intl.NumberFormat(LANG + '-u-nu-latn', { style: 'percent', maximumFractionDigits: 0 });
      } catch (e) {
        numFormat = null;
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
       * 数字显示（最多 2 位小数）。
       * @param {number} n 数字
       * @returns {string} 本地格式文本
       */
      function num(n) {
        return numFormat ? numFormat.format(n) : String(Math.round(n * 100) / 100);
      }

      /**
       * 百分比显示（整数）。
       * @param {number} p 百分数（70 → 70%）
       * @returns {string} 本地格式文本
       */
      function pct(p) {
        return pctFormat ? pctFormat.format(p / 100) : p + '%';
      }

      /**
       * 带单位的心率显示。
       * @param {string|number} v 数值或范围文本
       * @returns {string} 如「190 bpm」
       */
      function bpm(v) {
        return fill(T.bpm, { v: v });
      }

      /**
       * 解析整数 / 小数输入（去掉空格；逗号视为小数点）。
       * @param {string} raw 原始输入
       * @returns {number|null} 数值；留空返回 null；无效返回 NaN
       */
      function parseNum(raw) {
        var s = String(raw || '').split(' ').join('').replace(',', '.');
        if (s === '') return null;
        if (!/^([0-9]+([.][0-9]*)?|[.][0-9]+)$/.test(s)) return NaN;
        return Number(s);
      }

      /**
       * 年龄公式估算最大心率（未取整）。用整数运算避免浮点误差。
       * @param {string} f 公式：fox / tanaka / gulati
       * @param {number} age 年龄（整数）
       * @returns {number} 最大心率
       */
      function maxByFormula(f, age) {
        if (f === 'tanaka') return (2080 - 7 * age) / 10;
        if (f === 'gulati') return (20600 - 88 * age) / 100;
        return 220 - age;
      }

      /**
       * 公式代入式文本，如「208 − 0.7 × 45 = 176.5 ≈ 177」。
       * @param {string} f 公式
       * @param {number} age 年龄
       * @param {number} raw 未取整结果
       * @param {number} max 取整后的最大心率
       * @returns {string} 代入式
       */
      function formulaText(f, age, raw, max) {
        var head = f === 'tanaka' ? '208 − ' + num(0.7) + ' × ' + age : f === 'gulati' ? '206 − ' + num(0.88) + ' × ' + age : '220 − ' + age;
        return head + ' = ' + num(raw) + (raw === max ? '' : ' ≈ ' + max);
      }

      /**
       * 区间边界：按最大心率百分比，或 Karvonen（静息 + 百分比 × 储备）。
       * @param {Object} v compute 返回的参数
       * @param {number} p 百分数（整数）
       * @returns {number} 心率（四舍五入到整数 bpm）
       */
      function edge(v, p) {
        if (v.method === 'hrr') return Math.round(v.rest + (v.hrr * p) / 100 + 1e-9);
        return Math.round((v.max * p) / 100 + 1e-9);
      }

      /**
       * 读取输入并计算。
       * @returns {{ ok: boolean, error?: string, values?: Object }}
       */
      function compute() {
        var f = formulaEl.value;
        var age = parseNum(ageEl.value);
        var measured = f === 'measured';
        var ageOk = age != null && Number.isFinite(age) && Math.floor(age) === age && age >= 10 && age <= 100;
        if (!measured && !ageOk) return { ok: false, error: T.errAge };
        if (measured && age != null && !ageOk) return { ok: false, error: T.errAge };
        var raw;
        var max;
        if (measured) {
          var m = parseNum(maxEl.value);
          if (m == null || !Number.isFinite(m) || Math.floor(m) !== m || m < 100 || m > 230) return { ok: false, error: T.errMax };
          raw = m;
          max = m;
        } else {
          raw = maxByFormula(f, age);
          max = Math.round(raw + 1e-9);
        }
        var rest = parseNum(restEl.value);
        if (rest != null && (!Number.isFinite(rest) || Math.floor(rest) !== rest || rest < 30 || rest > 120)) return { ok: false, error: T.errRest };
        if (rest != null && rest >= max) return { ok: false, error: T.errRestHigh };
        var method = methodEl.value === 'hrr' ? 'hrr' : 'pct';
        if (method === 'hrr' && rest == null) return { ok: false, error: T.errRestNeeded };
        return { ok: true, values: { f: f, age: ageOk ? age : null, raw: raw, max: max, rest: rest, hrr: rest == null ? null : max - rest, method: method } };
      }

      /**
       * 静息心率说明（依据 AHA：多数成年人 60–100，运动员可低至 40）。
       * @param {number} r 静息心率
       * @returns {string} 说明文案
       */
      function restText(r) {
        var tpl = r < 40 ? T.restLow : r < 60 ? T.restAthlete : r <= 100 ? T.restNormal : T.restHigh;
        return fill(tpl, { r: r });
      }

      /**
       * 训练区间表。
       * @param {Object} v compute 返回的参数
       */
      function renderTable(v) {
        while (bodyEl.firstChild) bodyEl.removeChild(bodyEl.firstChild);
        captionEl.textContent = v.method === 'hrr' ? T.capHrr : T.capPct;
        for (var z = 0; z < 5; z++) {
          var lo = edge(v, ZONE_EDGES[z]);
          var hi = edge(v, ZONE_EDGES[z + 1]);
          var cells = [
            String(z + 1),
            T.zones[z],
            pct(ZONE_EDGES[z]) + '–' + pct(ZONE_EDGES[z + 1]),
            lo + '–' + hi,
            Math.round(lo / 2) + '–' + Math.round(hi / 2)
          ];
          var tr = document.createElement('tr');
          for (var c = 0; c < cells.length; c++) {
            var td = document.createElement('td');
            td.textContent = cells[c];
            tr.appendChild(td);
          }
          bodyEl.appendChild(tr);
        }
      }

      /** 执行计算并刷新结果区；失败时隐藏明细并显示具体错误。 */
      function runCalc() {
        var out = compute();
        result.style.display = 'block';
        if (!out || !out.ok) {
          mainEl.textContent = '—';
          mainSubEl.textContent = '';
          detailsEl.style.display = 'none';
          noteEl.textContent = (out && out.error) || T.errAge;
          return false;
        }
        var v = out.values;
        mainEl.textContent = bpm(v.max);
        if (v.f === 'measured') {
          mainSubEl.textContent = T.subMeasured;
        } else {
          var subTpl = v.f === 'tanaka' ? T.subTanaka : v.f === 'gulati' ? T.subGulati : T.subFox;
          mainSubEl.textContent = fill(subTpl, { work: formulaText(v.f, v.age, v.raw, v.max) });
        }
        /** 三种年龄公式对照（有年龄时显示）。 */
        if (v.age != null) {
          cmpRowEl.style.display = '';
          cmpEl.textContent = fill(T.cmp, {
            a: Math.round(maxByFormula('fox', v.age) + 1e-9),
            b: Math.round(maxByFormula('tanaka', v.age) + 1e-9),
            c: Math.round(maxByFormula('gulati', v.age) + 1e-9)
          });
        } else {
          cmpRowEl.style.display = 'none';
        }
        /** 心率储备与静息心率说明（填了静息心率时显示）。 */
        if (v.rest != null) {
          hrrRowEl.style.display = '';
          restRowEl.style.display = '';
          hrrEl.textContent = fill(T.hrr, { max: v.max, rest: v.rest, hrr: v.hrr });
          restStatusEl.textContent = restText(v.rest);
        } else {
          hrrRowEl.style.display = 'none';
          restRowEl.style.display = 'none';
        }
        /** AHA 目标心率：按最大心率的 50–70% 与 70–85%。 */
        var p50 = Math.round(v.max * 0.5 + 1e-9);
        var p70 = Math.round((v.max * 70) / 100 + 1e-9);
        var p85 = Math.round((v.max * 85) / 100 + 1e-9);
        ahaEl.textContent = fill(T.aha, { m: p50 + '–' + p70, v: p70 + '–' + p85 });
        workEl.textContent = v.method === 'hrr'
          ? fill(T.workHrr, { rest: v.rest, hrr: v.hrr, p: pct(70), v: edge(v, 70) })
          : fill(T.workPct, { max: v.max, p: pct(70), v: edge(v, 70) });
        renderTable(v);
        detailsEl.style.display = '';
        noteEl.textContent = T.note;
        return true;
      }

      /** 选择「实测最大心率」时显示对应输入框。 */
      function syncFormula() {
        maxWrapEl.style.display = formulaEl.value === 'measured' ? '' : 'none';
      }

      /** 加载样例：依次轮换（首个与 Example 一致）。 */
      function loadSample() {
        var smp = SAMPLES[sampleIndex];
        sampleIndex = (sampleIndex + 1) % SAMPLES.length;
        formulaEl.value = smp[0];
        ageEl.value = smp[1];
        maxEl.value = smp[2];
        restEl.value = smp[3];
        methodEl.value = smp[4];
        syncFormula();
        runCalc();
      }

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        runCalc();
      });
      formulaEl.addEventListener('change', syncFormula);
      document.getElementById('hrBtnSample').addEventListener('click', loadSample);
      /** 清空：只清输入、恢复默认选项并隐藏结果，不重新加载样例。 */
      document.getElementById('hrBtnClear').addEventListener('click', function () {
        ageEl.value = '';
        maxEl.value = '';
        restEl.value = '';
        formulaEl.value = 'fox';
        methodEl.value = 'pct';
        syncFormula();
        result.style.display = 'none';
        ageEl.focus();
      });
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('how-to-calculate-heart-rate');
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
