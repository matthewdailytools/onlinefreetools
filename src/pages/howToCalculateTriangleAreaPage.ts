/**
 * 三角形面积计算器 计算器工具页。
 * slug: how-to-calculate-triangle-area（见 work-tasks/how-to-calculate-triangle-area/02-tool-info.md）。
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

/** 为路径加上语言前缀（默认语无前缀）。 */
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * 渲染 how-to-calculate-triangle-area 工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderHowToCalculateTriangleAreaPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/how-to-calculate-triangle-area';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_triangle_area_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_triangle_area_description');

	const navItems = buildToolPageNavItems(opts.lang, opts.defaultLang);

	/** 语言切换链接始终带显式语言前缀。 */
	const withExplicitLangPrefix = (code: SiteLang, pathname: string) => {
		const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
		return `/${code}${safe}`.replace(/\/{2,}/g, '/');
	};

	const langAlternates: Record<string, string> = Object.fromEntries(
		(supportedLangs || []).map((code) => [code, withExplicitLangPrefix(code, toolPath)])
	);

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
			currentSlug: 'how-to-calculate-triangle-area',
			currentAnchor: '#triangle-area',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	const extraHeadHtml = `
  <style>
    .tool-card { max-width: var(--content-max); width: 100%; margin: 0 0 1.5rem; }
    .form-label { display:block; margin-bottom:.5rem; color:#495057; font-weight:500 }
    .form-group { margin-bottom:1rem; }
    .form-row { display:grid; grid-template-columns:1fr 1fr; gap:1rem; }
    .form-half { }
    @media (max-width:576px) { .form-row { grid-template-columns:1fr; } }
    .btn-row { display:flex; flex-wrap:wrap; gap:.5rem; align-items:center; }
    .result { background:#f8f9fa; padding:1rem; border-radius:8px; margin-top:1rem; text-align:center }
    .result .muted { color:#6c757d; font-size:.9rem; margin-top:.35rem }
    .result .work { font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size:.92rem; margin-top:.35rem; word-break:break-word }
    .point-row { display:grid; grid-template-columns:1fr 1fr; gap:.5rem; }
    .mode-group[hidden] { display:none !important; }
  </style>`;

	/** 模式分组输入框的 HTML 片段：label + number input。 */
	const numField = (id: string, labelKey: string, ph: string) => `
            <div class="form-group form-half">
              <label class="form-label" for="${id}">${escapeHtml(t(opts.lang, labelKey as never))}</label>
              <input id="${id}" class="input-lg" type="number" step="any" inputmode="decimal" placeholder="${escapeHtml(ph)}">
            </div>`;

	/** 坐标模式中单个顶点（x, y）两格输入。 */
	const pointField = (n: number, labelKey: string, phX: string, phY: string) => `
            <div class="form-group">
              <span class="form-label">${escapeHtml(t(opts.lang, labelKey as never))}</span>
              <div class="point-row">
                <input id="x${n}" class="input-lg" type="number" step="any" inputmode="decimal" aria-label="x${n}" placeholder="x = ${escapeHtml(phX)}">
                <input id="y${n}" class="input-lg" type="number" step="any" inputmode="decimal" aria-label="y${n}" placeholder="y = ${escapeHtml(phY)}">
              </div>
            </div>`;

	const contentHtml = `
    <div id="triangle-area" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(t(opts.lang, 'tool_triangle_area_title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <form id="calcForm">
          <div class="form-group">
            <label class="form-label" for="mode">${escapeHtml(t(opts.lang, 'tool_triangle_area_mode_label'))}</label>
            <select id="mode" class="input-lg">
              <option value="bh" selected>${escapeHtml(t(opts.lang, 'tool_triangle_area_mode_bh'))}</option>
              <option value="sss">${escapeHtml(t(opts.lang, 'tool_triangle_area_mode_sss'))}</option>
              <option value="sas">${escapeHtml(t(opts.lang, 'tool_triangle_area_mode_sas'))}</option>
              <option value="coords">${escapeHtml(t(opts.lang, 'tool_triangle_area_mode_coords'))}</option>
            </select>
          </div>

          <div class="form-row mode-group" data-mode="bh">${numField('base', 'tool_triangle_area_base_label', t(opts.lang, 'tool_triangle_area_base_ph'))}${numField('height', 'tool_triangle_area_height_label', t(opts.lang, 'tool_triangle_area_height_ph'))}
          </div>
          <div class="form-row mode-group" data-mode="sss" hidden>${numField('sideA', 'tool_triangle_area_side_a_label', '3')}${numField('sideB', 'tool_triangle_area_side_b_label', '4')}${numField('sideC', 'tool_triangle_area_side_c_label', '5')}
          </div>
          <div class="form-row mode-group" data-mode="sas" hidden>${numField('sasA', 'tool_triangle_area_side_a_label', '5')}${numField('sasB', 'tool_triangle_area_side_b_label', '7')}${numField('sasAngle', 'tool_triangle_area_angle_label', '30')}
          </div>
          <div class="mode-group" data-mode="coords" hidden>${pointField(1, 'tool_triangle_area_point_a', '0', '0')}${pointField(2, 'tool_triangle_area_point_b', '4', '0')}${pointField(3, 'tool_triangle_area_point_c', '0', '3')}
          </div>
          <div class="btn-row">
            <button type="submit" class="btn btn-primary">${escapeHtml(t(opts.lang, 'tool_triangle_area_calculate'))}</button>
            <button type="button" id="btnSample" class="btn btn-outline-secondary">${escapeHtml(t(opts.lang, 'tool_triangle_area_sample'))}</button>
            <button type="button" id="btnClear" class="btn btn-outline-secondary">${escapeHtml(t(opts.lang, 'tool_triangle_area_clear'))}</button>
          </div>
        </form>
        <div id="calcResult" class="result" style="display:none" aria-live="polite">
          <div><strong>${escapeHtml(t(opts.lang, 'tool_triangle_area_areaOut_label'))}:</strong> <span id="areaOut"></span></div>
          <div id="workWrap" class="work"><strong>${escapeHtml(t(opts.lang, 'tool_triangle_area_work_label'))}:</strong> <span id="workOut" dir="ltr"></span></div>
          <div id="calcNote" class="muted"></div>
        </div>
      </div>
    </div>

    ${renderToolIgSections({ lang: opts.lang, prefix: 'tool_triangle_area', mode: 'formula', usecaseCount: 4 })}`;

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: t(opts.lang, 'tool_triangle_area_ref_a_label'),
				href: 'https://en.wikipedia.org/wiki/Triangle',
			},
			{
				label: t(opts.lang, 'tool_triangle_area_ref_b_label'),
				href: 'https://mathworld.wolfram.com/TriangleArea.html',
			}
		],
	});

	const extraBodyHtml = `
  <script>
    (function () {
      var form = document.getElementById('calcForm');
      var result = document.getElementById('calcResult');
      var noteEl = document.getElementById('calcNote');
      var modeEl = document.getElementById('mode');
      var areaOutEl = document.getElementById('areaOut');
      var workWrapEl = document.getElementById('workWrap');
      var workOutEl = document.getElementById('workOut');
      /** 当前页面语言（用于数字小数点格式）。 */
      var LANG = ${JSON.stringify(opts.lang)};
      var msgErr = ${JSON.stringify(t(opts.lang, 'tool_triangle_area_err_generic'))};
      var msgPositive = ${JSON.stringify(t(opts.lang, 'tool_triangle_area_err_positive'))};
      var msgInequality = ${JSON.stringify(t(opts.lang, 'tool_triangle_area_err_inequality'))};
      var msgAngle = ${JSON.stringify(t(opts.lang, 'tool_triangle_area_err_angle'))};
      var msgCollinear = ${JSON.stringify(t(opts.lang, 'tool_triangle_area_err_collinear'))};
      var noteEdu = ${JSON.stringify(t(opts.lang, 'tool_triangle_area_result_note'))};
      /** 按页面语言格式化：最多 4 位小数、拉丁数字、无千分位。 */
      var nf = new Intl.NumberFormat(LANG + '-u-nu-latn', { maximumFractionDigits: 4, useGrouping: false });

      /** 格式化数字；非有限值显示破折号。 */
      function fmt(n) {
        return Number.isFinite(n) ? nf.format(n) : '—';
      }

      /** 负数加括号再格式化，避免过程里出现「4−-1」。 */
      function par(n) {
        return n < 0 ? '(' + fmt(n) + ')' : fmt(n);
      }

      /** 读取输入框数值；空或非数字返回 NaN。 */
      function num(id) {
        var raw = document.getElementById(id).value;
        return raw === '' ? NaN : Number(raw);
      }

      /** 仅显示当前模式的输入分组。 */
      function syncMode() {
        var groups = form.querySelectorAll('.mode-group');
        for (var i = 0; i < groups.length; i++) {
          groups[i].hidden = groups[i].getAttribute('data-mode') !== modeEl.value;
        }
      }

      /**
       * 按当前模式计算面积，并生成计算过程。
       * @returns {{ ok: boolean, error?: string, area?: number, work?: string }}
       */
      function compute() {
        var mode = modeEl.value;
        if (mode === 'sss') {
          var a = num('sideA'), b = num('sideB'), c = num('sideC');
          if (!(a > 0) || !(b > 0) || !(c > 0)) return { ok: false, error: msgPositive };
          var sides = [a, b, c].sort(function (p, q) { return p - q; });
          if (sides[0] + sides[1] <= sides[2]) return { ok: false, error: msgInequality };
          var s = (a + b + c) / 2;
          var prod = s * (s - a) * (s - b) * (s - c);
          var areaS = Math.sqrt(prod);
          return {
            ok: true,
            area: areaS,
            work: 's = (' + fmt(a) + ' + ' + fmt(b) + ' + ' + fmt(c) + ') ÷ 2 = ' + fmt(s) +
              '; A = √(' + fmt(s) + ' × ' + fmt(s - a) + ' × ' + fmt(s - b) + ' × ' + fmt(s - c) + ') = √' + fmt(prod) + ' = ' + fmt(areaS)
          };
        }
        if (mode === 'sas') {
          var sa = num('sasA'), sb = num('sasB'), deg = num('sasAngle');
          if (!(sa > 0) || !(sb > 0)) return { ok: false, error: msgPositive };
          if (!(deg > 0 && deg < 180)) return { ok: false, error: msgAngle };
          var sinC = Math.sin(deg * Math.PI / 180);
          var areaA = 0.5 * sa * sb * sinC;
          return {
            ok: true,
            area: areaA,
            work: 'A = ½ × ' + fmt(sa) + ' × ' + fmt(sb) + ' × sin(' + fmt(deg) + '°) = ½ × ' + fmt(sa) + ' × ' + fmt(sb) + ' × ' + fmt(sinC) + ' = ' + fmt(areaA)
          };
        }
        if (mode === 'coords') {
          var x1 = num('x1'), y1 = num('y1'), x2 = num('x2'), y2 = num('y2'), x3 = num('x3'), y3 = num('y3');
          if (![x1, y1, x2, y2, x3, y3].every(Number.isFinite)) return { ok: false, error: msgErr };
          var cross = x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2);
          if (Math.abs(cross) < 1e-12) return { ok: false, error: msgCollinear };
          var areaC = Math.abs(cross) / 2;
          return {
            ok: true,
            area: areaC,
            work: 'A = |' + par(x1) + '×(' + par(y2) + '−' + par(y3) + ') + ' + par(x2) + '×(' + par(y3) + '−' + par(y1) + ') + ' + par(x3) + '×(' + par(y1) + '−' + par(y2) + ')| ÷ 2 = |' + fmt(cross) + '| ÷ 2 = ' + fmt(areaC)
          };
        }
        var base = num('base'), height = num('height');
        if (!(base > 0) || !(height > 0)) return { ok: false, error: msgPositive };
        var areaB = base * height / 2;
        return { ok: true, area: areaB, work: 'A = ' + fmt(base) + ' × ' + fmt(height) + ' ÷ 2 = ' + fmt(areaB) };
      }

      /** 执行计算并刷新结果区；失败时隐藏计算过程并显示具体原因。 */
      function runCalc() {
        var out = compute();
        result.style.display = 'block';
        if (!out || !out.ok) {
          areaOutEl.textContent = '—';
          workWrapEl.style.display = 'none';
          noteEl.textContent = (out && out.error) || msgErr;
          return false;
        }
        areaOutEl.textContent = fmt(out.area);
        workOutEl.textContent = out.work;
        workWrapEl.style.display = '';
        noteEl.textContent = noteEdu;
        return true;
      }

      /** 加载进页样例（与 Example 文案一致：底 10、高 6 → 30）。 */
      function loadSample() {
        modeEl.value = 'bh';
        syncMode();
        document.getElementById('base').value = '10';
        document.getElementById('height').value = '6';
        runCalc();
      }

      modeEl.addEventListener('change', function () {
        syncMode();
        result.style.display = 'none';
      });
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        runCalc();
      });
      document.getElementById('btnSample').addEventListener('click', loadSample);
      document.getElementById('btnClear').addEventListener('click', function () {
        form.reset();
        syncMode();
        result.style.display = 'none';
      });
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('how-to-calculate-triangle-area');
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
