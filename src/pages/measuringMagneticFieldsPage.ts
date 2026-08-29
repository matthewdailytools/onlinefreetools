/**
 * 测量磁场 / 磁场强度计算器工具页。
 * slug: measuring-magnetic-fields（见 work-tasks/measuring-magnetic-fields/02-tool-info.md）。
 * 主交互：把仪器读数换成 T/G 等；次交互（折叠）：按牌号与尺寸估算轴上场。
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

/** i18n 键前缀（与 catalog faqPrefix 一致）。 */
const PREFIX = 'tool_measuring_magnetic_fields';

/** 为路径加上语言前缀（默认语无前缀）。 */
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * 读取本工具 i18n 字符串。
 * @param lang 当前语言
 * @param suffix 前缀之后的键名，如 `title`
 */
const tx = (lang: SiteLang, suffix: string) =>
	t(lang, `${PREFIX}_${suffix}` as keyof typeof import('../site/i18n/en').default);

/**
 * 渲染 measuring-magnetic-fields 工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderMeasuringMagneticFieldsPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 规范路径（无语言前缀）。 */
	const toolPath = '/tools/measuring-magnetic-fields';
	/** 当前语种下的 canonical 路径。 */
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	/** 文档 title：工具 H1 + 品牌。 */
	const title = `${tx(opts.lang, 'title')} | ${t(opts.lang, 'brand')}`;
	/** meta / 摘要用 description。 */
	const description = tx(opts.lang, 'description');

	/** 顶栏导航项。 */
	const navItems = buildToolPageNavItems(opts.lang, opts.defaultLang);

	/** 语言切换链接始终带显式语言前缀。 */
	const withExplicitLangPrefix = (code: SiteLang, pathname: string) => {
		const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
		return `/${code}${safe}`.replace(/\/{2,}/g, '/');
	};

	/** 顶栏语言菜单用的各语种 URL。 */
	const langAlternates: Record<string, string> = Object.fromEntries(
		(supportedLangs || []).map((code) => [code, withExplicitLangPrefix(code, toolPath)])
	);

	/** hreflang 交替链接。 */
	const alternates: HreflangAlternate[] = (supportedLangs || []).map((code) => ({
		lang: code,
		href: `https://onlinefreetools.org${withLangPrefix(code, toolPath, opts.defaultLang)}`,
	}));

	/** 页头 HTML。 */
	const headerHtml = renderHeader({
		lang: opts.lang,
		brandHref: withLangPrefix(opts.lang, '/', opts.defaultLang),
		navItems,
		enabledLangs: supportedLangs,
		langAlternates,
	});

	/** 侧栏工具列表。 */
	const sidebarHtml = renderSidebar({
		title: t(opts.lang, 'nav_tools'),
		groups: buildToolSidebarItems({
			lang: opts.lang,
			defaultLang: opts.defaultLang,
			currentSlug: 'measuring-magnetic-fields',
			currentAnchor: '#measuring-magnetic-fields',
		}),
		id: 'toolNav',
	});

	/** 页脚 HTML。 */
	const footerHtml = renderFooter({ lang: opts.lang });

	/** 本页局部样式：换算表、对照表、次模式折叠区。 */
	const extraHeadHtml = `
  <style>
    .tool-card { max-width: var(--content-max); width: 100%; margin: 0 0 1.5rem; }
    .form-label { display:block; margin-bottom:.5rem; color:#495057; font-weight:500 }
    .form-group { margin-bottom:1rem; }
    .form-row { display:grid; grid-template-columns:1fr 1fr; gap:1rem; }
    .form-check { display:flex; align-items:flex-start; gap:.5rem; margin:0 0 1rem; }
    .form-check input { margin-top:.25rem; }
    @media (max-width:576px) { .form-row { grid-template-columns:1fr; } }
    .btn-row { display:flex; flex-wrap:wrap; gap:.5rem; align-items:center; }
    .result { background:#f8f9fa; padding:1rem; border-radius:8px; margin-top:1rem; text-align:left }
    .result .muted { color:#6c757d; font-size:.9rem; margin-top:.35rem }
    .mmf-table { width:100%; border-collapse:collapse; font-size:.95rem }
    .mmf-table th { text-align:left; font-weight:500; color:#495057; padding:.2rem .5rem .2rem 0; width:55% }
    .mmf-table td { text-align:right; font-variant-numeric:tabular-nums; padding:.2rem 0 }
    .mmf-chart { width:100%; border-collapse:collapse; font-size:.92rem }
    .mmf-chart th, .mmf-chart td { border-bottom:1px solid #dee2e6; padding:.45rem .35rem; vertical-align:top }
    .mmf-chart th { color:#495057; font-weight:600 }
    .mmf-details { margin-top:1.25rem; border-top:1px solid #e9ecef; padding-top:1rem }
    .mmf-details > summary { cursor:pointer; font-weight:500; color:#343a40 }
  </style>`;

	/** 主内容：H1、换算表单、对照表、折叠估算、How/Formula 等。 */
	const contentHtml = `
    <div id="measuring-magnetic-fields" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(tx(opts.lang, 'title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <h2 class="h6 mb-3">${escapeHtml(tx(opts.lang, 'convert_heading'))}</h2>
        <form id="calcForm">
          <div class="form-row">
            <div class="form-group">
              <label class="form-label" for="mmfValue">${escapeHtml(tx(opts.lang, 'value_label'))}</label>
              <input id="mmfValue" class="input-lg" type="number" min="0" step="any" placeholder="${escapeHtml(tx(opts.lang, 'value_ph'))}">
            </div>
            <div class="form-group">
              <label class="form-label" for="mmfUnit">${escapeHtml(tx(opts.lang, 'unit_label'))}</label>
              <select id="mmfUnit" class="input-lg">
                <option value="T">T</option>
                <option value="mT">mT</option>
                <option value="uT">µT</option>
                <option value="nT">nT</option>
                <option value="G" selected>G</option>
                <option value="mG">mG</option>
                <option value="kG">kG</option>
              </select>
            </div>
          </div>
          <label class="form-check">
            <input id="mmfVacuum" type="checkbox">
            <span>${escapeHtml(tx(opts.lang, 'vacuum_label'))}</span>
          </label>
          <div class="btn-row">
            <button type="submit" class="btn btn-primary">${escapeHtml(tx(opts.lang, 'calculate'))}</button>
            <button type="button" id="btnSample" class="btn btn-outline-secondary">${escapeHtml(tx(opts.lang, 'sample'))}</button>
            <button type="button" id="btnClear" class="btn btn-outline-secondary">${escapeHtml(tx(opts.lang, 'clear'))}</button>
          </div>
        </form>
        <div id="calcResult" class="result" style="display:none" aria-live="polite">
          <table class="mmf-table">
            <tbody>
              <tr><th>${escapeHtml(tx(opts.lang, 'result_t'))}</th><td id="outT"></td></tr>
              <tr><th>${escapeHtml(tx(opts.lang, 'result_mt'))}</th><td id="outMt"></td></tr>
              <tr><th>${escapeHtml(tx(opts.lang, 'result_ut'))}</th><td id="outUt"></td></tr>
              <tr><th>${escapeHtml(tx(opts.lang, 'result_nt'))}</th><td id="outNt"></td></tr>
              <tr><th>${escapeHtml(tx(opts.lang, 'result_g'))}</th><td id="outG"></td></tr>
              <tr><th>${escapeHtml(tx(opts.lang, 'result_mg'))}</th><td id="outMg"></td></tr>
              <tr><th>${escapeHtml(tx(opts.lang, 'result_kg'))}</th><td id="outKg"></td></tr>
              <tr id="rowH" style="display:none"><th>${escapeHtml(tx(opts.lang, 'result_h'))}</th><td id="outH"></td></tr>
              <tr id="rowOe" style="display:none"><th>${escapeHtml(tx(opts.lang, 'result_oe'))}</th><td id="outOe"></td></tr>
            </tbody>
          </table>
          <div id="outEarth" class="muted"></div>
          <div id="calcNote" class="muted"></div>
        </div>

        <details class="mmf-details" id="estimatePanel">
          <summary>${escapeHtml(tx(opts.lang, 'estimate_heading'))}</summary>
          <form id="estForm" class="mt-3 mb-0">
            <div class="form-row">
              <div class="form-group">
                <label class="form-label" for="mmfGrade">${escapeHtml(tx(opts.lang, 'grade_label'))}</label>
                <select id="mmfGrade" class="input-lg">
                  <option value="N35">N35</option>
                  <option value="N38">N38</option>
                  <option value="N40">N40</option>
                  <option value="N42" selected>N42</option>
                  <option value="N45">N45</option>
                  <option value="N48">N48</option>
                  <option value="N50">N50</option>
                  <option value="N52">N52</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label" for="mmfShape">${escapeHtml(tx(opts.lang, 'shape_label'))}</label>
                <select id="mmfShape" class="input-lg">
                  <option value="disc">${escapeHtml(tx(opts.lang, 'shape_disc'))}</option>
                  <option value="block">${escapeHtml(tx(opts.lang, 'shape_block'))}</option>
                </select>
              </div>
            </div>
            <div id="discFields" class="form-row">
              <div class="form-group">
                <label class="form-label" for="mmfDiam">${escapeHtml(tx(opts.lang, 'diam_label'))}</label>
                <input id="mmfDiam" class="input-lg" type="number" min="0" step="any" placeholder="10">
              </div>
              <div class="form-group">
                <label class="form-label" for="mmfThick">${escapeHtml(tx(opts.lang, 'thick_label'))}</label>
                <input id="mmfThick" class="input-lg" type="number" min="0" step="any" placeholder="3">
              </div>
            </div>
            <div id="blockFields" class="form-row" style="display:none">
              <div class="form-group">
                <label class="form-label" for="mmfLen">${escapeHtml(tx(opts.lang, 'len_label'))}</label>
                <input id="mmfLen" class="input-lg" type="number" min="0" step="any" placeholder="20">
              </div>
              <div class="form-group">
                <label class="form-label" for="mmfWidth">${escapeHtml(tx(opts.lang, 'width_label'))}</label>
                <input id="mmfWidth" class="input-lg" type="number" min="0" step="any" placeholder="10">
              </div>
              <div class="form-group">
                <label class="form-label" for="mmfBlockThick">${escapeHtml(tx(opts.lang, 'thick_label'))}</label>
                <input id="mmfBlockThick" class="input-lg" type="number" min="0" step="any" placeholder="5">
              </div>
            </div>
            <div class="form-group">
              <label class="form-label" for="mmfZ">${escapeHtml(tx(opts.lang, 'z_label'))}</label>
              <input id="mmfZ" class="input-lg" type="number" min="0" step="any" placeholder="0">
            </div>
            <div class="btn-row">
              <button type="submit" class="btn btn-outline-primary">${escapeHtml(tx(opts.lang, 'estimate'))}</button>
            </div>
          </form>
          <div id="estResult" class="result" style="display:none" aria-live="polite">
            <div><strong>${escapeHtml(tx(opts.lang, 'estimate_out_t'))}:</strong> <span id="estT"></span></div>
            <div class="muted"><strong>${escapeHtml(tx(opts.lang, 'estimate_out_g'))}:</strong> <span id="estG"></span></div>
            <div id="estNote" class="muted"></div>
          </div>
        </details>
      </div>
    </div>

    <section class="mt-0 mb-4 tool-section" id="magnet-strength-chart" aria-labelledby="chart-heading">
      <h2 class="h5" id="chart-heading">${escapeHtml(tx(opts.lang, 'chart_title'))}</h2>
      <table class="mmf-chart">
        <thead>
          <tr>
            <th>${escapeHtml(tx(opts.lang, 'chart_col_source'))}</th>
            <th>${escapeHtml(tx(opts.lang, 'chart_col_b'))}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>${escapeHtml(tx(opts.lang, 'chart_earth'))}</td>
            <td>${escapeHtml(tx(opts.lang, 'chart_earth_b'))}</td>
          </tr>
          <tr>
            <td>${escapeHtml(tx(opts.lang, 'chart_fridge'))}</td>
            <td>${escapeHtml(tx(opts.lang, 'chart_fridge_b'))}</td>
          </tr>
          <tr>
            <td>${escapeHtml(tx(opts.lang, 'chart_ndfeb'))}</td>
            <td>${escapeHtml(tx(opts.lang, 'chart_ndfeb_b'))}</td>
          </tr>
          <tr>
            <td>${escapeHtml(tx(opts.lang, 'chart_mri'))}</td>
            <td>${escapeHtml(tx(opts.lang, 'chart_mri_b'))}</td>
          </tr>
        </tbody>
      </table>
    </section>

    ${renderToolIgSections({ lang: opts.lang, prefix: PREFIX, mode: 'formula', ruleItemCount: 4, howItemCount: 5 })}`;

	/** 权威出站引用（BIPM / NIST / NOAA）。 */
	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: tx(opts.lang, 'ref_bipm_label'),
				href: 'https://www.bipm.org/en/si-brochure',
			},
			{
				label: tx(opts.lang, 'ref_nist_label'),
				href: 'https://physics.nist.gov/cgi-bin/cuu/Value?mu0',
			},
			{
				label: tx(opts.lang, 'ref_noaa_label'),
				href: 'https://www.ngdc.noaa.gov/geomag/faqgeom.shtml',
			},
		],
	});

	/** 非 YMYL 仍须可见的估算/安全边界。 */
	const disclaimerHtml = `
    <p class="small text-muted mt-3 mb-0" id="disclaimer">${escapeHtml(tx(opts.lang, 'disclaimer'))}</p>`;

	/** 浏览器内换算与圆片轴上场估算（进页自动跑 200 G 样例）。 */
	const extraBodyHtml = `
  <script>
    (function () {
      /** 换算表单。 */
      var form = document.getElementById('calcForm');
      /** 换算结果容器。 */
      var result = document.getElementById('calcResult');
      /** 换算说明行。 */
      var noteEl = document.getElementById('calcNote');
      /** 读数输入。 */
      var valueEl = document.getElementById('mmfValue');
      /** 源单位选择。 */
      var unitEl = document.getElementById('mmfUnit');
      /** 是否同时显示真空 H。 */
      var vacuumEl = document.getElementById('mmfVacuum');
      /** 地磁场对照句。 */
      var earthEl = document.getElementById('outEarth');
      /** H 行（A/m）。 */
      var rowH = document.getElementById('rowH');
      /** Oe 行。 */
      var rowOe = document.getElementById('rowOe');
      /** 估算表单。 */
      var estForm = document.getElementById('estForm');
      /** 估算结果容器。 */
      var estResult = document.getElementById('estResult');
      /** 形状选择（圆片 / 方块）。 */
      var shapeEl = document.getElementById('mmfShape');
      /** 圆片尺寸行。 */
      var discFields = document.getElementById('discFields');
      /** 方块尺寸行。 */
      var blockFields = document.getElementById('blockFields');
      /** 非法读数错误文案。 */
      var msgErr = ${JSON.stringify(tx(opts.lang, 'err_generic'))};
      /** 负数拒绝文案。 */
      var msgNeg = ${JSON.stringify(tx(opts.lang, 'err_negative'))};
      /** z&lt;0 错误文案。 */
      var msgZ = ${JSON.stringify(tx(opts.lang, 'err_z'))};
      /** 未知牌号错误文案。 */
      var msgGrade = ${JSON.stringify(tx(opts.lang, 'err_grade'))};
      /** 尺寸非法错误文案。 */
      var msgDims = ${JSON.stringify(tx(opts.lang, 'err_dims'))};
      /** 换算结果说明。 */
      var noteEdu = ${JSON.stringify(tx(opts.lang, 'result_note'))};
      /** 地磁倍数句模板（{n} 为倍数）。 */
      var earthTpl = ${JSON.stringify(tx(opts.lang, 'earth_line'))};
      /** 估算结果说明。 */
      var estNoteTxt = ${JSON.stringify(tx(opts.lang, 'estimate_note'))};
      /** 真空磁导率 μ₀ (N·A⁻²)。 */
      var MU0 = 4 * Math.PI * 1e-7;
      /** 教学用地磁场中点 (T)。 */
      var EARTH_T = 50e-6;
      /** 源单位 → 特斯拉的换算系数。 */
      var TO_TESLA = { T: 1, mT: 1e-3, uT: 1e-6, nT: 1e-9, G: 1e-4, mG: 1e-7, kG: 0.1 };
      /** N 级剩磁 Br 中点 (T)。 */
      var BR = { N35: 1.19, N38: 1.24, N40: 1.27, N42: 1.30, N45: 1.35, N48: 1.40, N50: 1.43, N52: 1.45 };

      /**
       * 把有限数字格式化为短十进制或科学计数。
       * @param {number} n 数值
       * @returns {string} 可见字符串
       */
      function fmtNum(n) {
        if (!Number.isFinite(n)) return '—';
        var a = Math.abs(n);
        if (a === 0) return '0';
        if (a >= 1e7 || a < 1e-4) return n.toExponential(3);
        return String(parseFloat(n.toPrecision(4)));
      }

      /**
       * 把仪器读数换成特斯拉。
       * @param {number} value 读数
       * @param {string} unit 源单位键
       * @returns {number} B (T)
       */
      function toTesla(value, unit) {
        var f = TO_TESLA[unit];
        return f == null ? NaN : value * f;
      }

      /**
       * 圆片均匀轴向磁化时轴上场。
       * @param {number} br 剩磁 (T)
       * @param {number} radiusM 半径 (m)
       * @param {number} lengthM 轴向厚度 (m)
       * @param {number} zM 离表面距离 (m)
       * @returns {number} B_z (T)
       */
      function discBz(br, radiusM, lengthM, zM) {
        var r2 = radiusM * radiusM;
        var lz = lengthM + zM;
        var termA = lz / Math.sqrt(r2 + lz * lz);
        var termB = zM / Math.sqrt(r2 + zM * zM);
        return (br / 2) * (termA - termB);
      }

      /**
       * 核心换算：读数 → 各 B 单位 + 可选 H。
       * @returns {{ ok: boolean, error?: string, values?: Record<string, string> }}
       */
      function compute() {
        var raw = parseFloat(valueEl.value);
        if (!Number.isFinite(raw)) return { ok: false, error: msgErr };
        if (raw < 0) return { ok: false, error: msgNeg };
        var tVal = toTesla(raw, unitEl.value);
        if (!Number.isFinite(tVal) || tVal < 0) return { ok: false, error: msgErr };
        var earthN = EARTH_T > 0 ? tVal / EARTH_T : NaN;
        var showH = vacuumEl.checked;
        var hAm = showH ? tVal / MU0 : NaN;
        var oe = showH ? tVal * 1e4 : NaN;
        return {
          ok: true,
          values: {
            outT: fmtNum(tVal),
            outMt: fmtNum(tVal * 1e3),
            outUt: fmtNum(tVal * 1e6),
            outNt: fmtNum(tVal * 1e9),
            outG: fmtNum(tVal * 1e4),
            outMg: fmtNum(tVal * 1e7),
            outKg: fmtNum(tVal * 10),
            earth: earthTpl.replace('{n}', fmtNum(earthN)),
            showH: showH ? '1' : '0',
            outH: showH ? fmtNum(hAm) : '',
            outOe: showH ? fmtNum(oe) : ''
          }
        };
      }

      /**
       * 把换算结果写进表格；失败时显示错误、不得静默空白。
       * @returns {boolean} 是否成功
       */
      function runCalc() {
        var out = compute();
        result.style.display = 'block';
        var ids = ['outT', 'outMt', 'outUt', 'outNt', 'outG', 'outMg', 'outKg', 'outH', 'outOe'];
        if (!out || !out.ok) {
          ids.forEach(function (id) {
            var el = document.getElementById(id);
            if (el) el.textContent = '—';
          });
          earthEl.textContent = '';
          rowH.style.display = 'none';
          rowOe.style.display = 'none';
          noteEl.textContent = (out && out.error) || msgErr;
          return false;
        }
        var v = out.values || {};
        document.getElementById('outT').textContent = v.outT;
        document.getElementById('outMt').textContent = v.outMt;
        document.getElementById('outUt').textContent = v.outUt;
        document.getElementById('outNt').textContent = v.outNt;
        document.getElementById('outG').textContent = v.outG;
        document.getElementById('outMg').textContent = v.outMg;
        document.getElementById('outKg').textContent = v.outKg;
        var showH = v.showH === '1';
        rowH.style.display = showH ? '' : 'none';
        rowOe.style.display = showH ? '' : 'none';
        document.getElementById('outH').textContent = showH ? v.outH : '';
        document.getElementById('outOe').textContent = showH ? v.outOe : '';
        earthEl.textContent = v.earth || '';
        noteEl.textContent = noteEdu;
        return true;
      }

      /**
       * 进页 / Load sample：200 G → 0.02 T（与 H2 Example 一致）。
       */
      function loadSample() {
        valueEl.value = '200';
        unitEl.value = 'G';
        vacuumEl.checked = false;
        runCalc();
      }

      /**
       * 圆片 / 方块字段显隐。
       */
      function syncShape() {
        var disc = shapeEl.value === 'disc';
        discFields.style.display = disc ? '' : 'none';
        blockFields.style.display = disc ? 'none' : '';
      }

      /**
       * 按牌号与几何估算轴上场（不覆盖主换算结果）。
       * @returns {{ ok: boolean, error?: string, values?: Record<string, string> }}
       */
      function computeEstimate() {
        var br = BR[document.getElementById('mmfGrade').value];
        if (!Number.isFinite(br)) return { ok: false, error: msgGrade };
        var zMm = parseFloat(document.getElementById('mmfZ').value);
        if (!Number.isFinite(zMm)) return { ok: false, error: msgErr };
        if (zMm < 0) return { ok: false, error: msgZ };
        var radiusM;
        var lengthM;
        if (shapeEl.value === 'disc') {
          var diamMm = parseFloat(document.getElementById('mmfDiam').value);
          var thickMm = parseFloat(document.getElementById('mmfThick').value);
          if (!Number.isFinite(diamMm) || !Number.isFinite(thickMm) || diamMm <= 0 || thickMm <= 0) {
            return { ok: false, error: msgDims };
          }
          radiusM = (diamMm / 2) / 1000;
          lengthM = thickMm / 1000;
        } else {
          var lenMm = parseFloat(document.getElementById('mmfLen').value);
          var widthMm = parseFloat(document.getElementById('mmfWidth').value);
          var blockThickMm = parseFloat(document.getElementById('mmfBlockThick').value);
          if (
            !Number.isFinite(lenMm) ||
            !Number.isFinite(widthMm) ||
            !Number.isFinite(blockThickMm) ||
            lenMm <= 0 ||
            widthMm <= 0 ||
            blockThickMm <= 0
          ) {
            return { ok: false, error: msgDims };
          }
          radiusM = Math.sqrt((lenMm * widthMm) / Math.PI) / 1000;
          lengthM = blockThickMm / 1000;
        }
        var bz = discBz(br, radiusM, lengthM, zMm / 1000);
        if (!Number.isFinite(bz)) return { ok: false, error: msgErr };
        return { ok: true, values: { estT: fmtNum(bz), estG: fmtNum(bz * 1e4) } };
      }

      /**
       * 刷新估算结果区。
       * @returns {boolean} 是否成功
       */
      function runEstimate() {
        var out = computeEstimate();
        estResult.style.display = 'block';
        var tEl = document.getElementById('estT');
        var gEl = document.getElementById('estG');
        var nEl = document.getElementById('estNote');
        if (!out || !out.ok) {
          tEl.textContent = '—';
          gEl.textContent = '—';
          nEl.textContent = (out && out.error) || msgErr;
          return false;
        }
        tEl.textContent = out.values.estT;
        gEl.textContent = out.values.estG;
        nEl.textContent = estNoteTxt;
        return true;
      }

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        runCalc();
      });
      document.getElementById('btnSample').addEventListener('click', loadSample);
      document.getElementById('btnClear').addEventListener('click', function () {
        form.reset();
        unitEl.value = 'G';
        result.style.display = 'none';
      });
      vacuumEl.addEventListener('change', function () {
        if (result.style.display !== 'none') runCalc();
      });
      estForm.addEventListener('submit', function (e) {
        e.preventDefault();
        runEstimate();
      });
      shapeEl.addEventListener('change', syncShape);
      syncShape();
      loadSample();
    })();
  </script>`;

	/** catalog 元数据（FAQ / related / updatedAt）。 */
	const toolMeta = getToolBySlug('measuring-magnetic-fields');
	/** FAQ、相关工具、分享与反馈。 */
	const toolSeoHtml = toolMeta
		? renderToolExtraSections({ lang: opts.lang, defaultLang: opts.defaultLang, tool: toolMeta })
		: '';
	/** WebApplication + BreadcrumbList JSON-LD。 */
	const toolJsonLd = toolMeta
		? buildToolJsonLd({
				lang: opts.lang,
				defaultLang: opts.defaultLang,
				tool: toolMeta,
				name: tx(opts.lang, 'title'),
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
		contentHtml: `${contentHtml}${toolSeoHtml}${referencesHtml}${disclaimerHtml}`,
		footerHtml,
		extraHeadHtml: `${extraHeadHtml}${toolJsonLd}`,
		extraBodyHtml,
		includeSidebarToggleScript: true,
		sidebarAutoCloseSelector: '#toolNav a',
	});
};
