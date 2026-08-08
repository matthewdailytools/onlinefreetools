/**
 * 毛利率计算器：收入与销货成本（COGS）→ 毛利金额与毛利率%。
 * slug: how-to-calculate-gross-margin（见 work-tasks/how-to-calculate-gross-margin/02-tool-info.md）。
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
 * 渲染毛利率计算器工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderHowToCalculateGrossMarginPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/how-to-calculate-gross-margin';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_gross_margin_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_gross_margin_description');

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
			currentSlug: 'how-to-calculate-gross-margin',
			currentAnchor: '#gross-margin',
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
    @media (max-width:576px) { .form-row { grid-template-columns:1fr; } }
    .btn-row { display:flex; flex-wrap:wrap; gap:.5rem; align-items:center; }
    .result { background:#f8f9fa; padding:1rem; border-radius:8px; margin-top:1rem; text-align:center }
    .result .muted { color:#6c757d; font-size:.9rem; margin-top:.35rem }
  </style>`;

	const contentHtml = `
    <div id="gross-margin" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(t(opts.lang, 'tool_gross_margin_title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <form id="gmForm">
          <div class="form-row">
            <div class="form-group">
              <label class="form-label" for="gmRevenue">${escapeHtml(t(opts.lang, 'tool_gross_margin_revenue_label'))}</label>
              <input id="gmRevenue" class="input-lg" type="number" min="0" step="any"
                placeholder="${escapeHtml(t(opts.lang, 'tool_gross_margin_revenue_ph'))}" required>
            </div>
            <div class="form-group">
              <label class="form-label" for="gmCogs">${escapeHtml(t(opts.lang, 'tool_gross_margin_cogs_label'))}</label>
              <input id="gmCogs" class="input-lg" type="number" min="0" step="any"
                placeholder="${escapeHtml(t(opts.lang, 'tool_gross_margin_cogs_ph'))}" required>
            </div>
          </div>
          <div class="btn-row">
            <button type="submit" class="btn btn-primary">${escapeHtml(t(opts.lang, 'tool_gross_margin_calculate'))}</button>
            <button type="button" id="gmSample" class="btn btn-outline-secondary">${escapeHtml(t(opts.lang, 'tool_gross_margin_sample'))}</button>
            <button type="button" id="gmClear" class="btn btn-outline-secondary">${escapeHtml(t(opts.lang, 'tool_gross_margin_clear'))}</button>
          </div>
        </form>
        <div id="gmResult" class="result" style="display:none" aria-live="polite">
          <div><strong>${escapeHtml(t(opts.lang, 'tool_gross_margin_result_profit'))}:</strong> <span id="gmProfit"></span></div>
          <div class="muted"><strong>${escapeHtml(t(opts.lang, 'tool_gross_margin_result_margin'))}:</strong> <span id="gmMargin"></span></div>
          <div id="gmNote" class="muted"></div>
        </div>
      </div>
    </div>

    ${renderToolIgSections({ lang: opts.lang, prefix: 'tool_gross_margin', mode: 'formula' })}`;

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: t(opts.lang, 'tool_gross_margin_ref_gm_label'),
				href: 'https://www.investopedia.com/terms/g/grossmargin.asp',
			},
			{
				label: t(opts.lang, 'tool_gross_margin_ref_gp_label'),
				href: 'https://www.investopedia.com/terms/g/grossprofit.asp',
			},
		],
	});

	const extraBodyHtml = `
  <script>
    (function () {
      var form = document.getElementById('gmForm');
      var revEl = document.getElementById('gmRevenue');
      var cogsEl = document.getElementById('gmCogs');
      var result = document.getElementById('gmResult');
      var profitEl = document.getElementById('gmProfit');
      var marginEl = document.getElementById('gmMargin');
      var noteEl = document.getElementById('gmNote');
      var msgRev = ${JSON.stringify(t(opts.lang, 'tool_gross_margin_err_revenue'))};
      var msgCogs = ${JSON.stringify(t(opts.lang, 'tool_gross_margin_err_cogs'))};
      var noteEdu = ${JSON.stringify(t(opts.lang, 'tool_gross_margin_result_note'))};

      /** 金额格式化为两位小数。 */
      function fmt(n) {
        return Number.isFinite(n) ? n.toFixed(2) : '—';
      }

      /** 计算毛利与毛利率。 */
      function runCalc() {
        var revenue = parseFloat(revEl.value);
        var cogs = parseFloat(cogsEl.value);
        result.style.display = 'block';
        if (!(revenue > 0)) {
          profitEl.textContent = marginEl.textContent = '—';
          noteEl.textContent = msgRev;
          return false;
        }
        if (!(cogs >= 0) || Number.isNaN(cogs)) {
          profitEl.textContent = marginEl.textContent = '—';
          noteEl.textContent = msgCogs;
          return false;
        }
        var profit = revenue - cogs;
        var marginPct = (profit / revenue) * 100;
        profitEl.textContent = fmt(profit);
        marginEl.textContent = fmt(marginPct) + '%';
        noteEl.textContent = noteEdu;
        return true;
      }

      /** 加载默认样例：收入 10000、COGS 6000 → 毛利 4000、毛利率 40%。 */
      function loadSample() {
        revEl.value = '10000';
        cogsEl.value = '6000';
        runCalc();
      }

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        runCalc();
      });
      document.getElementById('gmSample').addEventListener('click', loadSample);
      document.getElementById('gmClear').addEventListener('click', function () {
        form.reset();
        result.style.display = 'none';
      });
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('how-to-calculate-gross-margin');
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
