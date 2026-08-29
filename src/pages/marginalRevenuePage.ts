/**
 * 边际收益（MR）计算器：可见公式推导、两档销量示例、YMYL 免责与权威引用。
 * slug: how-to-calculate-marginal-revenue；主方向 C（见 work-tasks/how-to-calculate-marginal-revenue/02-tool-info.md）。
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
 * 渲染边际收益计算器工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表（保留与其他计算器页一致的签名）
 */
export const renderMarginalRevenuePage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/how-to-calculate-marginal-revenue';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_marginal_revenue_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_marginal_revenue_description');

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
		groups: buildToolSidebarItems({ lang: opts.lang, defaultLang: opts.defaultLang, currentSlug: 'how-to-calculate-marginal-revenue', currentAnchor: '#mr' }),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	/** MR 表单与结果区样式。 */
	const extraHeadHtml = `
  <style>
    .mr-card { max-width: var(--content-max); width: 100%; margin: 0 0 1.5rem; }
    .form-label { display:block; margin-bottom:.5rem; color:#495057; font-weight:500 }
    .form-group { margin-bottom:1rem; }
    .result { background:#f8f9fa; padding:1rem; border-radius:8px; margin-top:1rem; text-align:center }
  </style>`;

	const contentHtml = `
    <div id="mr" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(t(opts.lang, 'tool_marginal_revenue_title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card mr-card">
      <div class="card-body">
        <form id="mrForm">
          <div class="form-group">
            <label class="form-label" for="q1">${escapeHtml(t(opts.lang, 'tool_marginal_revenue_q1_label'))}</label>
            <input id="q1" class="input-lg" type="number" step="any"
              placeholder="${escapeHtml(t(opts.lang, 'tool_marginal_revenue_q1_placeholder'))}" required />
          </div>
          <div class="form-group">
            <label class="form-label" for="tr1">${escapeHtml(t(opts.lang, 'tool_marginal_revenue_tr1_label'))}</label>
            <input id="tr1" class="input-lg" type="number" step="any"
              placeholder="${escapeHtml(t(opts.lang, 'tool_marginal_revenue_tr1_placeholder'))}" required />
          </div>
          <div class="form-group">
            <label class="form-label" for="q2">${escapeHtml(t(opts.lang, 'tool_marginal_revenue_q2_label'))}</label>
            <input id="q2" class="input-lg" type="number" step="any"
              placeholder="${escapeHtml(t(opts.lang, 'tool_marginal_revenue_q2_placeholder'))}" required />
          </div>
          <div class="form-group">
            <label class="form-label" for="tr2">${escapeHtml(t(opts.lang, 'tool_marginal_revenue_tr2_label'))}</label>
            <input id="tr2" class="input-lg" type="number" step="any"
              placeholder="${escapeHtml(t(opts.lang, 'tool_marginal_revenue_tr2_placeholder'))}" required />
          </div>
          <button type="submit" class="btn btn-primary">${escapeHtml(t(opts.lang, 'tool_marginal_revenue_calculate'))}</button>

          <div id="mrResult" class="result" style="display:none;">
            <div><strong>${escapeHtml(t(opts.lang, 'tool_marginal_revenue_result_label'))}:</strong> <span id="mrValue"></span></div>
            <div id="mrDetail" class="mt-2 text-muted small"></div>
          </div>
        </form>
      </div>
    </div>

    ${renderToolIgSections({ lang: opts.lang, prefix: 'tool_marginal_revenue', mode: 'formula' })}`;

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: t(opts.lang, 'tool_marginal_revenue_ref_investopedia_label'),
				href: 'https://www.investopedia.com/terms/m/marginal-revenue-mr.asp',
			},
			{
				label: t(opts.lang, 'tool_marginal_revenue_ref_openstax_label'),
				href: 'https://openstax.org/books/principles-microeconomics-3e/pages/9-1-perfect-competition-and-why-it-matters',
			},
		],
	});

	const extraBodyHtml = `
  <script>
    (function () {
      var form = document.getElementById('mrForm');
      var q1 = document.getElementById('q1');
      var q2 = document.getElementById('q2');
      var tr1 = document.getElementById('tr1');
      var tr2 = document.getElementById('tr2');
      var mrResult = document.getElementById('mrResult');
      var mrValue = document.getElementById('mrValue');
      var mrDetail = document.getElementById('mrDetail');
      var msgZeroDq = ${JSON.stringify(t(opts.lang, 'tool_marginal_revenue_zero_dq'))};
      var detailTpl = ${JSON.stringify(t(opts.lang, 'tool_marginal_revenue_detail_tpl'))};

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var Q1 = parseFloat(q1.value);
        var Q2 = parseFloat(q2.value);
        var TR1 = parseFloat(tr1.value);
        var TR2 = parseFloat(tr2.value);

        if (isNaN(Q1) || isNaN(Q2) || isNaN(TR1) || isNaN(TR2)) {
          mrResult.style.display = 'none';
          return;
        }

        var dQ = Q2 - Q1;
        var dTR = TR2 - TR1;
        if (dQ === 0) {
          mrValue.textContent = '—';
          mrDetail.textContent = msgZeroDq;
          mrResult.style.display = 'block';
          return;
        }

        var mr = dTR / dQ;
        mrValue.textContent = Number.isFinite(mr) ? mr.toFixed(4) : '—';
        mrDetail.textContent = detailTpl
          .replace('{dTR}', String(dTR))
          .replace('{dQ}', String(dQ))
          .replace('{mr}', Number.isFinite(mr) ? mr.toFixed(4) : '—');
        mrResult.style.display = 'block';
      });
    })();
  </script>`;

	const toolMeta = getToolBySlug('how-to-calculate-marginal-revenue');
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
