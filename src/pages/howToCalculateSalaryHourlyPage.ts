/**
 * 年薪时薪计算器 计算器工具页。
 * slug: how-to-calculate-salary-hourly（见 work-tasks/how-to-calculate-salary-hourly/02-tool-info.md）。
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
 * 渲染 how-to-calculate-salary-hourly 工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderHowToCalculateSalaryHourlyPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/how-to-calculate-salary-hourly';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_salary_hourly_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_salary_hourly_description');

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
			currentSlug: 'how-to-calculate-salary-hourly',
			currentAnchor: '#salary-hourly',
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
    <div id="salary-hourly" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(t(opts.lang, 'tool_salary_hourly_title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <form id="calcForm">
          <div class="form-row">

          <div class="form-group form-half">
            <label class="form-label" for="mode">${escapeHtml(t(opts.lang, 'tool_salary_hourly_mode_label'))}</label>
            <select id="mode" class="input-lg">
              <option value="annual" selected>${escapeHtml(t(opts.lang, 'tool_salary_hourly_mode_annual'))}</option>
              <option value="monthly">${escapeHtml(t(opts.lang, 'tool_salary_hourly_mode_monthly'))}</option>
              <option value="hourly">${escapeHtml(t(opts.lang, 'tool_salary_hourly_mode_hourly'))}</option>
            </select>
          </div>

          <div class="form-group form-half">
            <label class="form-label" for="pay">${escapeHtml(t(opts.lang, 'tool_salary_hourly_pay_label'))}</label>
            <input id="pay" class="input-lg" type="number" step="any"
              placeholder="${escapeHtml(t(opts.lang, 'tool_salary_hourly_pay_ph'))}">
          </div>

          <div class="form-group form-half">
            <label class="form-label" for="hours">${escapeHtml(t(opts.lang, 'tool_salary_hourly_hours_label'))}</label>
            <input id="hours" class="input-lg" type="number" step="any"
              placeholder="${escapeHtml(t(opts.lang, 'tool_salary_hourly_hours_ph'))}">
          </div>

          <div class="form-group form-half">
            <label class="form-label" for="weeks">${escapeHtml(t(opts.lang, 'tool_salary_hourly_weeks_label'))}</label>
            <input id="weeks" class="input-lg" type="number" step="any"
              placeholder="${escapeHtml(t(opts.lang, 'tool_salary_hourly_weeks_ph'))}">
          </div>
          </div>
          <div class="btn-row">
            <button type="submit" class="btn btn-primary">${escapeHtml(t(opts.lang, 'tool_salary_hourly_calculate'))}</button>
            <button type="button" id="btnSample" class="btn btn-outline-secondary">${escapeHtml(t(opts.lang, 'tool_salary_hourly_sample'))}</button>
            <button type="button" id="btnClear" class="btn btn-outline-secondary">${escapeHtml(t(opts.lang, 'tool_salary_hourly_clear'))}</button>
          </div>
        </form>
        <div id="calcResult" class="result" style="display:none" aria-live="polite">
          <div><strong>${escapeHtml(t(opts.lang, 'tool_salary_hourly_hourlyOut_label'))}:</strong> <span id="hourlyOut"></span></div>
          <div class="muted"><strong>${escapeHtml(t(opts.lang, 'tool_salary_hourly_annualOut_label'))}:</strong> <span id="annualOut"></span></div>
          <div class="muted"><strong>${escapeHtml(t(opts.lang, 'tool_salary_hourly_monthlyOut_label'))}:</strong> <span id="monthlyOut"></span></div>
          <div class="muted"><strong>${escapeHtml(t(opts.lang, 'tool_salary_hourly_weeklyOut_label'))}:</strong> <span id="weeklyOut"></span></div>
          <div id="calcNote" class="muted"></div>
        </div>
      </div>
    </div>

    ${renderToolIgSections({ lang: opts.lang, prefix: 'tool_salary_hourly', mode: 'formula' })}`;

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: t(opts.lang, 'tool_salary_hourly_ref_bls_label'),
				href: 'https://www.bls.gov/oes/',
			},
			{
				label: t(opts.lang, 'tool_salary_hourly_ref_investopedia_label'),
				href: 'https://www.investopedia.com/terms/h/hourlyrate.asp',
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
      var payEl = document.getElementById('pay');
      var hoursEl = document.getElementById('hours');
      var weeksEl = document.getElementById('weeks');
      var hourlyOutEl = document.getElementById('hourlyOut');
      var annualOutEl = document.getElementById('annualOut');
      var monthlyOutEl = document.getElementById('monthlyOut');
      var weeklyOutEl = document.getElementById('weeklyOut');
      var msgErr = ${JSON.stringify(t(opts.lang, 'tool_salary_hourly_err_generic'))};
      var noteEdu = ${JSON.stringify(t(opts.lang, 'tool_salary_hourly_result_note'))};

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

        var mode = modeEl.value;
        var pay = parseFloat(payEl.value);
        var hpw = parseFloat(hoursEl.value);
        var wpy = parseFloat(weeksEl.value);
        if (!(pay > 0 && hpw > 0 && wpy > 0)) {
          return { ok: false, error: msgErr };
        }
        var annualHours = hpw * wpy;
        var annual, monthly, hourly, weekly;
        if (mode === 'annual') {
          annual = pay;
          hourly = annual / annualHours;
          monthly = annual / 12;
          weekly = annual / wpy;
        } else if (mode === 'monthly') {
          monthly = pay;
          annual = monthly * 12;
          hourly = annual / annualHours;
          weekly = annual / wpy;
        } else {
          hourly = pay;
          annual = hourly * annualHours;
          monthly = annual / 12;
          weekly = hourly * hpw;
        }
        return {
          ok: true,
          values: {
            hourlyOut: fmt(hourly),
            annualOut: fmt(annual),
            monthlyOut: fmt(monthly),
            weeklyOut: fmt(weekly)
          }
        };

      }

      /** 执行计算并刷新结果区。 */
      function runCalc() {
        var out = compute();
        result.style.display = 'block';
        if (!out || !out.ok) {
          hourlyOutEl.textContent = '—';
          annualOutEl.textContent = '—';
          monthlyOutEl.textContent = '—';
          weeklyOutEl.textContent = '—';
          noteEl.textContent = (out && out.error) || msgErr;
          return false;
        }
        var v = out.values || {};
        hourlyOutEl.textContent = v.hourlyOut != null ? String(v.hourlyOut) : '—';
        annualOutEl.textContent = v.annualOut != null ? String(v.annualOut) : '—';
        monthlyOutEl.textContent = v.monthlyOut != null ? String(v.monthlyOut) : '—';
        weeklyOutEl.textContent = v.weeklyOut != null ? String(v.weeklyOut) : '—';
        noteEl.textContent = noteEdu;
        return true;
      }

      /** 加载进页样例。 */
      function loadSample() {

        modeEl.value = 'annual';
        payEl.value = '52000';
        hoursEl.value = '40';
        weeksEl.value = '52';

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

	const toolMeta = getToolBySlug('how-to-calculate-salary-hourly');
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
