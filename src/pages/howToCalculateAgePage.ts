/**
 * 年龄计算器 计算器工具页。
 * slug: how-to-calculate-age（见 work-tasks/how-to-calculate-age/02-tool-info.md）。
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
 * 渲染 how-to-calculate-age 工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderHowToCalculateAgePage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/how-to-calculate-age';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_age_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_age_description');

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
		items: buildToolSidebarItems({
			lang: opts.lang,
			defaultLang: opts.defaultLang,
			currentSlug: 'how-to-calculate-age',
			currentAnchor: '#age',
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
    <div id="age" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(t(opts.lang, 'tool_age_title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <form id="calcForm">
          <div class="form-row">

          <div class="form-group form-half">
            <label class="form-label" for="birth">${escapeHtml(t(opts.lang, 'tool_age_birth_label'))}</label>
            <input id="birth" class="input-lg" type="date">
          </div>

          <div class="form-group form-half">
            <label class="form-label" for="asof">${escapeHtml(t(opts.lang, 'tool_age_asof_label'))}</label>
            <input id="asof" class="input-lg" type="date">
          </div>
          </div>
          <div class="btn-row">
            <button type="submit" class="btn btn-primary">${escapeHtml(t(opts.lang, 'tool_age_calculate'))}</button>
            <button type="button" id="btnSample" class="btn btn-outline-secondary">${escapeHtml(t(opts.lang, 'tool_age_sample'))}</button>
            <button type="button" id="btnClear" class="btn btn-outline-secondary">${escapeHtml(t(opts.lang, 'tool_age_clear'))}</button>
          </div>
        </form>
        <div id="calcResult" class="result" style="display:none" aria-live="polite">
          <div><strong>${escapeHtml(t(opts.lang, 'tool_age_yearsOut_label'))}:</strong> <span id="yearsOut"></span></div>
          <div class="muted"><strong>${escapeHtml(t(opts.lang, 'tool_age_monthsOut_label'))}:</strong> <span id="monthsOut"></span></div>
          <div class="muted"><strong>${escapeHtml(t(opts.lang, 'tool_age_daysOut_label'))}:</strong> <span id="daysOut"></span></div>
          <div class="muted"><strong>${escapeHtml(t(opts.lang, 'tool_age_totalDaysOut_label'))}:</strong> <span id="totalDaysOut"></span></div>
          <div id="calcNote" class="muted"></div>
        </div>
      </div>
    </div>

    ${renderToolIgSections({ lang: opts.lang, prefix: 'tool_age', mode: 'formula' })}`;

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: t(opts.lang, 'tool_age_ref_a_label'),
				href: 'https://en.wikipedia.org/wiki/Ageing',
			},
			{
				label: t(opts.lang, 'tool_age_ref_b_label'),
				href: 'https://en.wikipedia.org/wiki/Calendar_date',
			}
		],
	});

	const extraBodyHtml = `
  <script>
    (function () {
      var form = document.getElementById('calcForm');
      var result = document.getElementById('calcResult');
      var noteEl = document.getElementById('calcNote');
      var birthEl = document.getElementById('birth');
      var asofEl = document.getElementById('asof');
      var yearsOutEl = document.getElementById('yearsOut');
      var monthsOutEl = document.getElementById('monthsOut');
      var daysOutEl = document.getElementById('daysOut');
      var totalDaysOutEl = document.getElementById('totalDaysOut');
      var msgErr = ${JSON.stringify(t(opts.lang, 'tool_age_err_generic'))};
      var noteEdu = ${JSON.stringify(t(opts.lang, 'tool_age_result_note'))};

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

        function parseYMD(s){
          var m=/^(d{4})-(d{2})-(d{2})$/.exec(String(s||'').trim());
          if(!m) return null;
          var y=+m[1], mo=+m[2]-1, d=+m[3];
          var dt=new Date(Date.UTC(y,mo,d));
          if(dt.getUTCFullYear()!==y||dt.getUTCMonth()!==mo||dt.getUTCDate()!==d) return null;
          return dt;
        }
        var birth=parseYMD(birthEl.value), asof=parseYMD(asofEl.value);
        if(!birth||!asof||asof.getTime()<birth.getTime()) return {ok:false,error:msgErr};
        var years=asof.getUTCFullYear()-birth.getUTCFullYear();
        var months=asof.getUTCMonth()-birth.getUTCMonth();
        var days=asof.getUTCDate()-birth.getUTCDate();
        if(days<0){
          months--;
          var prev=new Date(Date.UTC(asof.getUTCFullYear(), asof.getUTCMonth(), 0));
          days+=prev.getUTCDate();
        }
        if(months<0){ years--; months+=12; }
        var totalDays=Math.round((asof.getTime()-birth.getTime())/86400000);
        return {ok:true, values:{ yearsOut:String(years), monthsOut:String(months), daysOut:String(days), totalDaysOut:String(totalDays) }};

      }

      /** 执行计算并刷新结果区。 */
      function runCalc() {
        var out = compute();
        result.style.display = 'block';
        if (!out || !out.ok) {
          yearsOutEl.textContent = '—';
          monthsOutEl.textContent = '—';
          daysOutEl.textContent = '—';
          totalDaysOutEl.textContent = '—';
          noteEl.textContent = (out && out.error) || msgErr;
          return false;
        }
        var v = out.values || {};
        yearsOutEl.textContent = v.yearsOut != null ? String(v.yearsOut) : '—';
        monthsOutEl.textContent = v.monthsOut != null ? String(v.monthsOut) : '—';
        daysOutEl.textContent = v.daysOut != null ? String(v.daysOut) : '—';
        totalDaysOutEl.textContent = v.totalDaysOut != null ? String(v.totalDaysOut) : '—';
        noteEl.textContent = noteEdu;
        return true;
      }

      /** 加载进页样例。 */
      function loadSample() {

        birthEl.value='2000-01-01';
        asofEl.value='2026-08-09';

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

	const toolMeta = getToolBySlug('how-to-calculate-age');
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
