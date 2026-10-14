/**
 * 平方英尺面积页：房间长×宽求面积，或已知面积在 ft² ↔ m² 之间换算，附计算过程与 NIST 因子。
 * slug: square-feet（见 work-tasks/square-feet/02-tool-info.md）。
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
 * 渲染平方英尺面积工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderSquareFeetPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/square-feet';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_squarefeet_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_squarefeet_description');

	const navItems = buildToolPageNavItems(opts.lang, opts.defaultLang);

	/** 语言切换链接始终带显式语言前缀（含默认语）。 */
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
			currentSlug: 'square-feet',
			currentAnchor: '#calc',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	const extraHeadHtml = `
  <style>
    .sf-card { max-width: var(--content-max); width: 100%; margin: 0 0 1.5rem; }
    .form-label { display:block; margin-bottom:.5rem; color:#495057; font-weight:500 }
    .form-group { margin-bottom:1rem; }
    .form-row { display:grid; grid-template-columns:1fr 1fr; gap:1rem; }
    @media (max-width:576px) { .form-row { grid-template-columns:1fr; } }
    .btn-row { display:flex; flex-wrap:wrap; gap:.5rem; align-items:center; }
    .mode-group[hidden] { display:none !important; }
    .result { background:#f8f9fa; padding:1rem; border-radius:8px; margin-top:1rem; text-align:center }
    .result .muted { color:#6c757d; font-size:.9rem; margin-top:.35rem }
    .result .work { font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size:.92rem; margin-top:.35rem; word-break:break-word }
  </style>`;

	const contentHtml = `
    <div id="calc" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(t(opts.lang, 'tool_squarefeet_title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card sf-card">
      <div class="card-body">
        <form id="sfForm">
          <div class="form-group">
            <label class="form-label" for="sfMode">${escapeHtml(t(opts.lang, 'tool_squarefeet_mode_label'))}</label>
            <select id="sfMode" class="input-lg">
              <option value="dims" selected>${escapeHtml(t(opts.lang, 'tool_squarefeet_mode_dims'))}</option>
              <option value="area">${escapeHtml(t(opts.lang, 'tool_squarefeet_mode_area'))}</option>
            </select>
          </div>

          <div class="mode-group" data-mode="dims">
            <div class="form-group">
              <label class="form-label" for="sfDimUnit">${escapeHtml(t(opts.lang, 'tool_squarefeet_dim_unit_label'))}</label>
              <select id="sfDimUnit" class="input-lg">
                <option value="ft" selected>${escapeHtml(t(opts.lang, 'tool_squarefeet_unit_ft'))}</option>
                <option value="m">${escapeHtml(t(opts.lang, 'tool_squarefeet_unit_m'))}</option>
                <option value="in">${escapeHtml(t(opts.lang, 'tool_squarefeet_unit_in'))}</option>
              </select>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label class="form-label" for="sfLength">${escapeHtml(t(opts.lang, 'tool_squarefeet_length_label'))}</label>
                <input id="sfLength" class="input-lg" type="number" min="0" step="any" inputmode="decimal"
                  placeholder="${escapeHtml(t(opts.lang, 'tool_squarefeet_length_placeholder'))}" />
              </div>
              <div class="form-group">
                <label class="form-label" for="sfWidth">${escapeHtml(t(opts.lang, 'tool_squarefeet_width_label'))}</label>
                <input id="sfWidth" class="input-lg" type="number" min="0" step="any" inputmode="decimal"
                  placeholder="${escapeHtml(t(opts.lang, 'tool_squarefeet_width_placeholder'))}" />
              </div>
            </div>
          </div>

          <div class="mode-group" data-mode="area" hidden>
            <div class="form-row">
              <div class="form-group">
                <label class="form-label" for="sfArea">${escapeHtml(t(opts.lang, 'tool_squarefeet_area_label'))}</label>
                <input id="sfArea" class="input-lg" type="number" min="0" step="any" inputmode="decimal"
                  placeholder="${escapeHtml(t(opts.lang, 'tool_squarefeet_area_placeholder'))}" />
              </div>
              <div class="form-group">
                <label class="form-label" for="sfAreaUnit">${escapeHtml(t(opts.lang, 'tool_squarefeet_area_unit_label'))}</label>
                <select id="sfAreaUnit" class="input-lg">
                  <option value="sqft" selected>${escapeHtml(t(opts.lang, 'tool_squarefeet_unit_sqft'))}</option>
                  <option value="sqm">${escapeHtml(t(opts.lang, 'tool_squarefeet_unit_sqm'))}</option>
                </select>
              </div>
            </div>
          </div>

          <div class="btn-row">
            <button type="submit" class="btn btn-primary">${escapeHtml(t(opts.lang, 'tool_squarefeet_calculate'))}</button>
            <button type="button" id="btnSample" class="btn btn-outline-secondary">${escapeHtml(t(opts.lang, 'tool_squarefeet_sample'))}</button>
            <button type="button" id="btnClear" class="btn btn-outline-secondary">${escapeHtml(t(opts.lang, 'tool_squarefeet_clear'))}</button>
          </div>
        </form>

        <div id="sfResult" class="result" style="display:none" aria-live="polite">
          <div><strong>${escapeHtml(t(opts.lang, 'tool_squarefeet_sqft_label'))}:</strong> <span id="sfOut"></span></div>
          <div><strong>${escapeHtml(t(opts.lang, 'tool_squarefeet_sqm_label'))}:</strong> <span id="sqmOut"></span></div>
          <div id="workWrap" class="work"><strong>${escapeHtml(t(opts.lang, 'tool_squarefeet_work_label'))}:</strong> <span id="workOut" dir="ltr"></span></div>
          <div id="sfNote" class="muted"></div>
        </div>
      </div>
    </div>

    ${renderToolIgSections({ lang: opts.lang, prefix: 'tool_squarefeet', mode: 'formula', usecaseCount: 4 })}`;

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: t(opts.lang, 'tool_squarefeet_ref_nist_label'),
				href: 'https://www.nist.gov/pml/special-publication-811',
			},
			{
				label: t(opts.lang, 'tool_squarefeet_ref_wiki_label'),
				href: 'https://en.wikipedia.org/wiki/Square_foot',
			},
		],
	});

	const extraBodyHtml = `
  <script>
    (function () {
      var form = document.getElementById('sfForm');
      var modeEl = document.getElementById('sfMode');
      var result = document.getElementById('sfResult');
      var sfOut = document.getElementById('sfOut');
      var sqmOut = document.getElementById('sqmOut');
      var workWrap = document.getElementById('workWrap');
      var workOut = document.getElementById('workOut');
      var noteEl = document.getElementById('sfNote');
      /** 当前页面语言（数字小数点格式）。 */
      var LANG = ${JSON.stringify(opts.lang)};
      /** 1 ft² = 0.09290304 m²（NIST / SI）。 */
      var SQFT_TO_SQM = 0.09290304;
      var msgInvalid = ${JSON.stringify(t(opts.lang, 'tool_squarefeet_invalid_input'))};
      var noteEdu = ${JSON.stringify(t(opts.lang, 'tool_squarefeet_result_note'))};
      var nf = new Intl.NumberFormat(LANG + '-u-nu-latn', { maximumFractionDigits: 2, useGrouping: false });
      /** NIST 因子须显示完整 8 位小数，避免被收成 0.0929。 */
      var nfFactor = new Intl.NumberFormat(LANG + '-u-nu-latn', {
        minimumFractionDigits: 8,
        maximumFractionDigits: 8,
        useGrouping: false,
      });

      /** 格式化数字；非有限值显示破折号。digits==='factor' 时用完整 NIST 因子。 */
      function fmt(n, digits) {
        if (!Number.isFinite(n)) return '—';
        return digits === 'factor' ? nfFactor.format(n) : nf.format(n);
      }

      /** 读取输入框数值。 */
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
       * 按模式计算 ft² 与 m²，并生成计算过程。
       * @returns {{ ok: boolean, error?: string, sqft?: number, sqm?: number, work?: string }}
       */
      function compute() {
        if (modeEl.value === 'area') {
          var area = num('sfArea');
          if (!(area > 0)) return { ok: false, error: msgInvalid };
          var aUnit = document.getElementById('sfAreaUnit').value;
          var sqftA = aUnit === 'sqm' ? area / SQFT_TO_SQM : area;
          var sqmA = sqftA * SQFT_TO_SQM;
          var workA = aUnit === 'sqm'
            ? fmt(area) + ' m² ÷ ' + fmt(SQFT_TO_SQM, 'factor') + ' = ' + fmt(sqftA) + ' ft²'
            : fmt(area) + ' ft² × ' + fmt(SQFT_TO_SQM, 'factor') + ' = ' + fmt(sqmA) + ' m²';
          return { ok: true, sqft: sqftA, sqm: sqmA, work: workA };
        }
        var len = num('sfLength');
        var wid = num('sfWidth');
        if (!(len > 0) || !(wid > 0)) return { ok: false, error: msgInvalid };
        var dUnit = document.getElementById('sfDimUnit').value;
        var sqft = 0;
        var work = '';
        if (dUnit === 'm') {
          var sqmRaw = len * wid;
          sqft = sqmRaw / SQFT_TO_SQM;
          work = fmt(len) + ' × ' + fmt(wid) + ' = ' + fmt(sqmRaw) + ' m² → ÷ ' + fmt(SQFT_TO_SQM, 'factor') + ' = ' + fmt(sqft) + ' ft²';
        } else if (dUnit === 'in') {
          var lFt = len / 12;
          var wFt = wid / 12;
          sqft = lFt * wFt;
          work = '(' + fmt(len) + '÷12) × (' + fmt(wid) + '÷12) = ' + fmt(lFt) + ' × ' + fmt(wFt) + ' = ' + fmt(sqft) + ' ft²';
        } else {
          sqft = len * wid;
          work = fmt(len) + ' × ' + fmt(wid) + ' = ' + fmt(sqft) + ' ft²';
        }
        return { ok: true, sqft: sqft, sqm: sqft * SQFT_TO_SQM, work: work };
      }

      /** 执行计算并刷新结果区。 */
      function runCalc() {
        var out = compute();
        result.style.display = 'block';
        if (!out || !out.ok) {
          sfOut.textContent = '—';
          sqmOut.textContent = '—';
          workWrap.style.display = 'none';
          noteEl.textContent = (out && out.error) || msgInvalid;
          return false;
        }
        sfOut.textContent = fmt(out.sqft);
        sqmOut.textContent = fmt(out.sqm);
        workOut.textContent = out.work;
        workWrap.style.display = '';
        noteEl.textContent = noteEdu;
        return true;
      }

      /** 进页样例：10 ft × 12 ft → 120 ft² ≈ 11.15 m²。 */
      function loadSample() {
        modeEl.value = 'dims';
        syncMode();
        document.getElementById('sfDimUnit').value = 'ft';
        document.getElementById('sfLength').value = '10';
        document.getElementById('sfWidth').value = '12';
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

	const toolMeta = getToolBySlug('square-feet');
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

export default renderSquareFeetPage;
