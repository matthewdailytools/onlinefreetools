/**
 * BMR / TDEE / 卡路里 计算器工具页。
 * slug: how-to-calculate-bmr-tdee（见 work-tasks/how-to-calculate-bmr-tdee/02-tool-info.md）。
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
 * 渲染 how-to-calculate-bmr-tdee 工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderHowToCalculateBmrTdeePage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/how-to-calculate-bmr-tdee';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_bmr_tdee_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_bmr_tdee_description');

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
			currentSlug: 'how-to-calculate-bmr-tdee',
			currentAnchor: '#bmr-tdee',
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
  </style>`;

	const contentHtml = `
    <div id="bmr-tdee" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(t(opts.lang, 'tool_bmr_tdee_title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <form id="calcForm">
          <div class="form-row">

          <div class="form-group form-half">
            <label class="form-label" for="sex">${escapeHtml(t(opts.lang, 'tool_bmr_tdee_sex_label'))}</label>
            <select id="sex" class="input-lg">
              <option value="male" selected>${escapeHtml(t(opts.lang, 'tool_bmr_tdee_sex_male'))}</option>
              <option value="female">${escapeHtml(t(opts.lang, 'tool_bmr_tdee_sex_female'))}</option>
            </select>
          </div>

          <div class="form-group form-half">
            <label class="form-label" for="age">${escapeHtml(t(opts.lang, 'tool_bmr_tdee_age_label'))}</label>
            <input id="age" class="input-lg" type="number" step="any"
              placeholder="${escapeHtml(t(opts.lang, 'tool_bmr_tdee_age_ph'))}">
          </div>

          <div class="form-group form-half">
            <label class="form-label" for="weight">${escapeHtml(t(opts.lang, 'tool_bmr_tdee_weight_label'))}</label>
            <input id="weight" class="input-lg" type="number" step="any"
              placeholder="${escapeHtml(t(opts.lang, 'tool_bmr_tdee_weight_ph'))}">
          </div>

          <div class="form-group form-half">
            <label class="form-label" for="height">${escapeHtml(t(opts.lang, 'tool_bmr_tdee_height_label'))}</label>
            <input id="height" class="input-lg" type="number" step="any"
              placeholder="${escapeHtml(t(opts.lang, 'tool_bmr_tdee_height_ph'))}">
          </div>

          <div class="form-group form-half">
            <label class="form-label" for="formula">${escapeHtml(t(opts.lang, 'tool_bmr_tdee_formula_label'))}</label>
            <select id="formula" class="input-lg">
              <option value="mifflin" selected>${escapeHtml(t(opts.lang, 'tool_bmr_tdee_formula_mifflin'))}</option>
              <option value="harris">${escapeHtml(t(opts.lang, 'tool_bmr_tdee_formula_harris'))}</option>
              <option value="katch">${escapeHtml(t(opts.lang, 'tool_bmr_tdee_formula_katch'))}</option>
            </select>
          </div>

          <div class="form-group form-half">
            <label class="form-label" for="activity">${escapeHtml(t(opts.lang, 'tool_bmr_tdee_activity_label'))}</label>
            <select id="activity" class="input-lg">
              <option value="1.2">${escapeHtml(t(opts.lang, 'tool_bmr_tdee_act_12'))}</option>
              <option value="1.375">${escapeHtml(t(opts.lang, 'tool_bmr_tdee_act_1375'))}</option>
              <option value="1.55" selected>${escapeHtml(t(opts.lang, 'tool_bmr_tdee_act_155'))}</option>
              <option value="1.725">${escapeHtml(t(opts.lang, 'tool_bmr_tdee_act_1725'))}</option>
              <option value="1.9">${escapeHtml(t(opts.lang, 'tool_bmr_tdee_act_19'))}</option>
            </select>
          </div>

          <div class="form-group form-half">
            <label class="form-label" for="bodyfat">${escapeHtml(t(opts.lang, 'tool_bmr_tdee_bodyfat_label'))}</label>
            <input id="bodyfat" class="input-lg" type="number" step="any"
              placeholder="${escapeHtml(t(opts.lang, 'tool_bmr_tdee_bodyfat_ph'))}">
          </div>
          </div>
          <div class="btn-row">
            <button type="submit" class="btn btn-primary">${escapeHtml(t(opts.lang, 'tool_bmr_tdee_calculate'))}</button>
            <button type="button" id="btnSample" class="btn btn-outline-secondary">${escapeHtml(t(opts.lang, 'tool_bmr_tdee_sample'))}</button>
            <button type="button" id="btnClear" class="btn btn-outline-secondary">${escapeHtml(t(opts.lang, 'tool_bmr_tdee_clear'))}</button>
          </div>
        </form>
        <div id="calcResult" class="result" style="display:none" aria-live="polite">
          <div><strong>${escapeHtml(t(opts.lang, 'tool_bmr_tdee_bmrOut_label'))}:</strong> <span id="bmrOut"></span></div>
          <div class="muted"><strong>${escapeHtml(t(opts.lang, 'tool_bmr_tdee_tdeeOut_label'))}:</strong> <span id="tdeeOut"></span></div>
          <div id="calcNote" class="muted"></div>
        </div>
      </div>
    </div>

    ${renderToolIgSections({ lang: opts.lang, prefix: 'tool_bmr_tdee', mode: 'formula' })}`;

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: t(opts.lang, 'tool_bmr_tdee_ref_ncbi_label'),
				href: 'https://www.ncbi.nlm.nih.gov/books/NBK278991/',
			},
			{
				label: t(opts.lang, 'tool_bmr_tdee_ref_nhlbi_label'),
				href: 'https://www.nhlbi.nih.gov/health/educational/lose_wt/BMI/bmicalc.htm',
			}
		],
	});

	const extraBodyHtml = `
  <script>
    (function () {
      var form = document.getElementById('calcForm');
      var result = document.getElementById('calcResult');
      var noteEl = document.getElementById('calcNote');
      var sexEl = document.getElementById('sex');
      var ageEl = document.getElementById('age');
      var weightEl = document.getElementById('weight');
      var heightEl = document.getElementById('height');
      var formulaEl = document.getElementById('formula');
      var activityEl = document.getElementById('activity');
      var bodyfatEl = document.getElementById('bodyfat');
      var bmrOutEl = document.getElementById('bmrOut');
      var tdeeOutEl = document.getElementById('tdeeOut');
      var msgErr = ${JSON.stringify(t(opts.lang, 'tool_bmr_tdee_err_generic'))};
      var noteEdu = ${JSON.stringify(t(opts.lang, 'tool_bmr_tdee_result_note'))};

      /** 格式化数字（默认 2 位小数）。 */
      function fmt(n, d) {
        d = d == null ? 2 : d;
        return Number.isFinite(n) ? n.toFixed(d) : '—';
      }

      /**
       * 核心计算（由工具定义注入）。
       * @returns {{ ok: boolean, error?: string, values?: Record<string, string|number> }}
       */
      function compute() {

        var sex = sexEl.value;
        var w = parseFloat(weightEl.value);
        var h = parseFloat(heightEl.value);
        var age = parseFloat(ageEl.value);
        var formula = formulaEl.value;
        var act = parseFloat(activityEl.value);
        var bf = parseFloat(bodyfatEl.value);
        if (!(w > 0 && h > 0 && age > 0) || !Number.isFinite(act)) {
          return { ok: false, error: msgErr };
        }
        var bmr;
        if (formula === 'mifflin') {
          bmr = sex === 'male' ? 10 * w + 6.25 * h - 5 * age + 5 : 10 * w + 6.25 * h - 5 * age - 161;
        } else if (formula === 'harris') {
          bmr = sex === 'male'
            ? 88.362 + 13.397 * w + 4.799 * h - 5.677 * age
            : 447.593 + 9.247 * w + 3.098 * h - 4.330 * age;
        } else {
          if (!(bf >= 0 && bf < 100) || !Number.isFinite(bf)) return { ok: false, error: msgErr };
          var lbm = w * (1 - bf / 100);
          bmr = 370 + 21.6 * lbm;
        }
        if (!Number.isFinite(bmr)) return { ok: false, error: msgErr };
        var tdee = bmr * act;
        return { ok: true, values: { bmrOut: fmt(bmr), tdeeOut: fmt(tdee) } };

      }

      /** 执行计算并刷新结果区。 */
      function runCalc() {
        var out = compute();
        result.style.display = 'block';
        if (!out || !out.ok) {
          bmrOutEl.textContent = '—';
          tdeeOutEl.textContent = '—';
          noteEl.textContent = (out && out.error) || msgErr;
          return false;
        }
        var v = out.values || {};
        bmrOutEl.textContent = v.bmrOut != null ? String(v.bmrOut) : '—';
        tdeeOutEl.textContent = v.tdeeOut != null ? String(v.tdeeOut) : '—';
        noteEl.textContent = noteEdu;
        return true;
      }

      /** 加载进页样例。 */
      function loadSample() {

        sexEl.value = 'male';
        weightEl.value = '70';
        heightEl.value = '175';
        ageEl.value = '30';
        formulaEl.value = 'mifflin';
        activityEl.value = '1.55';
        bodyfatEl.value = '';

        runCalc();
      }

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        runCalc();
      });
      document.getElementById('btnSample').addEventListener('click', loadSample);
      document.getElementById('btnClear').addEventListener('click', function () {
        form.reset();
        result.style.display = 'none';
      });
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('how-to-calculate-bmr-tdee');
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
