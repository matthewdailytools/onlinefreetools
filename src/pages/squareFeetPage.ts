/**
 * 平方英尺面积计算器页：长×宽换算、房产/装修场景 IG、NIST 换算因子引用。
 * slug: square-feet；主方向 B（见 work-tasks/square-feet/02-tool-info.md）。
 */
import type { SiteLang } from '../site/i18n';
import { t, supportedLangs } from '../site/i18n';
import { renderFooter } from './site/footer';
import { renderHeader } from './site/header';
import { renderLayout, type HreflangAlternate, escapeHtml } from './site/layout';
import { renderSidebar } from './site/sidebar';
import { TOOL_PAGES, getToolBySlug } from '../site/tools';
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
 * 渲染平方英尺面积计算器工具页 HTML。
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

	const navItems = [
		{ href: withLangPrefix(opts.lang, '/', opts.defaultLang), label: t(opts.lang, 'nav_home') },
		{ href: withLangPrefix(opts.lang, '/#all-tools', opts.defaultLang), label: t(opts.lang, 'nav_tools') },
		{ href: '/devlogs/', label: t(opts.lang, 'nav_devlogs') },
	];

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

	const toolLinks = (TOOL_PAGES || []).map((p) => ({
		href: withLangPrefix(opts.lang, p.path, opts.defaultLang),
		label: t(opts.lang, p.i18nKey),
	}));

	const sidebarHtml = renderSidebar({
		title: t(opts.lang, 'nav_tools'),
		items: [{ href: '#calc', label: t(opts.lang, 'tool_squarefeet_title') }, ...toolLinks],
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	/** 单位切换按钮样式。 */
	const extraHeadHtml = `
  <style>
    .sf-card { max-width: 640px; margin: 0 auto 1.5rem; }
    .unit-toggle { display:flex; gap:0.5rem; margin-bottom:1rem; justify-content:center; flex-wrap:wrap }
    .unit-toggle button { padding:0.5rem 0.75rem;border-radius:8px;border:1px solid #ced4da;background:#e9ecef;cursor:pointer }
    .unit-toggle button.active { background:#0d6efd;color:#fff }
  </style>`;

	const contentHtml = `
    <div id="calc" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(t(opts.lang, 'tool_squarefeet_title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card sf-card">
      <div class="card-body">
        <div class="unit-toggle" role="group" aria-label="${escapeHtml(t(opts.lang, 'tool_squarefeet_unit_group_label'))}">
          <button type="button" id="unitFeet" class="active">${escapeHtml(t(opts.lang, 'unit_feet'))}</button>
          <button type="button" id="unitMeters">${escapeHtml(t(opts.lang, 'unit_meters'))}</button>
          <button type="button" id="unitInches">${escapeHtml(t(opts.lang, 'unit_inches'))}</button>
        </div>

        <form id="sfForm">
          <div class="mb-3">
            <label class="form-label" for="sfLength">${escapeHtml(t(opts.lang, 'tool_squarefeet_length_label'))}</label>
            <input id="sfLength" class="input-lg" type="number" min="0" step="any"
              placeholder="${escapeHtml(t(opts.lang, 'tool_squarefeet_length_placeholder'))}" required />
          </div>
          <div class="mb-3">
            <label class="form-label" for="sfWidth">${escapeHtml(t(opts.lang, 'tool_squarefeet_width_label'))}</label>
            <input id="sfWidth" class="input-lg" type="number" min="0" step="any"
              placeholder="${escapeHtml(t(opts.lang, 'tool_squarefeet_width_placeholder'))}" required />
          </div>
          <button type="submit" class="btn btn-primary">${escapeHtml(t(opts.lang, 'tool_squarefeet_calculate'))}</button>
        </form>

        <div id="sfResult" class="result mt-3" style="display:none">
          <div id="sfResultValue" class="h4 mb-1"></div>
          <div id="sfResultSqm" class="text-muted"></div>
          <div id="sfResultNote" class="text-muted mt-2 small"></div>
        </div>
      </div>
    </div>

    ${renderToolIgSections({ lang: opts.lang, prefix: 'tool_squarefeet', mode: 'formula' })}`;

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: t(opts.lang, 'tool_squarefeet_ref_nist_label'),
				href: 'https://www.nist.gov/pml/special-publication-811',
			},
		],
	});

	const extraBodyHtml = `
  <script>
    (function () {
      var unitFeet = document.getElementById('unitFeet');
      var unitMeters = document.getElementById('unitMeters');
      var unitInches = document.getElementById('unitInches');
      var sfForm = document.getElementById('sfForm');
      var sfLength = document.getElementById('sfLength');
      var sfWidth = document.getElementById('sfWidth');
      var sfResult = document.getElementById('sfResult');
      var sfResultValue = document.getElementById('sfResultValue');
      var sfResultSqm = document.getElementById('sfResultSqm');
      var sfResultNote = document.getElementById('sfResultNote');

      var labelSqft = ${JSON.stringify(t(opts.lang, 'sqft_unit'))};
      var noteText = ${JSON.stringify(t(opts.lang, 'tool_squarefeet_result_note'))};
      var sqmTemplate = ${JSON.stringify(t(opts.lang, 'tool_squarefeet_result_sqm'))};
      var msgInvalid = ${JSON.stringify(t(opts.lang, 'tool_squarefeet_invalid_input'))};
      /** 1 ft² = 0.09290304 m²（NIST / SI）。 */
      var SQFT_TO_SQM = 0.09290304;

      /** 高亮当前输入单位按钮。 */
      function setActive(btn) {
        [unitFeet, unitMeters, unitInches].forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
      }
      unitFeet.addEventListener('click', function () { setActive(unitFeet); });
      unitMeters.addEventListener('click', function () { setActive(unitMeters); });
      unitInches.addEventListener('click', function () { setActive(unitInches); });

      sfForm.addEventListener('submit', function (e) {
        e.preventDefault();
        var len = parseFloat(sfLength.value);
        var wid = parseFloat(sfWidth.value);
        if (!(len > 0) || !(wid > 0)) {
          sfResultValue.textContent = '—';
          sfResultSqm.textContent = '';
          sfResultNote.textContent = msgInvalid;
          sfResult.style.display = 'block';
          return;
        }
        var sqft = 0;
        if (unitFeet.classList.contains('active')) {
          sqft = len * wid;
        } else if (unitMeters.classList.contains('active')) {
          sqft = (len * wid) / SQFT_TO_SQM;
        } else {
          sqft = (len / 12) * (wid / 12);
        }
        var rounded = Math.round((sqft + Number.EPSILON) * 100) / 100;
        var sqm = Math.round((sqft * SQFT_TO_SQM + Number.EPSILON) * 100) / 100;
        sfResultValue.textContent = rounded + ' ' + labelSqft;
        sfResultSqm.textContent = sqmTemplate.replace('{sqm}', String(sqm));
        sfResultNote.textContent = noteText;
        sfResult.style.display = 'block';
      });
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
	});
};

export default renderSquareFeetPage;
