/**
 * 盈亏平衡计算器：固定成本 / 单价 / 单位变动成本 → 保本销量与收入。
 * slug: how-to-calculate-break-even（见 work-tasks/how-to-calculate-break-even/02-tool-info.md）。
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
 * 渲染盈亏平衡计算器工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderHowToCalculateBreakEvenPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/how-to-calculate-break-even';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_break_even_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_break_even_description');

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
			currentSlug: 'how-to-calculate-break-even',
			currentAnchor: '#break-even',
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
    <div id="break-even" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(t(opts.lang, 'tool_break_even_title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <form id="beForm">
          <div class="form-group">
            <label class="form-label" for="beFixed">${escapeHtml(t(opts.lang, 'tool_break_even_fixed_label'))}</label>
            <input id="beFixed" class="input-lg" type="number" min="0" step="any"
              placeholder="${escapeHtml(t(opts.lang, 'tool_break_even_fixed_ph'))}" required>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label" for="bePrice">${escapeHtml(t(opts.lang, 'tool_break_even_price_label'))}</label>
              <input id="bePrice" class="input-lg" type="number" min="0" step="any"
                placeholder="${escapeHtml(t(opts.lang, 'tool_break_even_price_ph'))}" required>
            </div>
            <div class="form-group">
              <label class="form-label" for="beVar">${escapeHtml(t(opts.lang, 'tool_break_even_var_label'))}</label>
              <input id="beVar" class="input-lg" type="number" min="0" step="any"
                placeholder="${escapeHtml(t(opts.lang, 'tool_break_even_var_ph'))}" required>
            </div>
          </div>
          <div class="btn-row">
            <button type="submit" class="btn btn-primary">${escapeHtml(t(opts.lang, 'tool_break_even_calculate'))}</button>
            <button type="button" id="beSample" class="btn btn-outline-secondary">${escapeHtml(t(opts.lang, 'tool_break_even_sample'))}</button>
            <button type="button" id="beClear" class="btn btn-outline-secondary">${escapeHtml(t(opts.lang, 'tool_break_even_clear'))}</button>
          </div>
        </form>
        <div id="beResult" class="result" style="display:none" aria-live="polite">
          <div><strong>${escapeHtml(t(opts.lang, 'tool_break_even_result_units'))}:</strong> <span id="beUnits"></span></div>
          <div class="muted"><strong>${escapeHtml(t(opts.lang, 'tool_break_even_result_revenue'))}:</strong> <span id="beRevenue"></span></div>
          <div class="muted"><strong>${escapeHtml(t(opts.lang, 'tool_break_even_result_cm'))}:</strong> <span id="beCm"></span></div>
          <div id="beNote" class="muted"></div>
        </div>
      </div>
    </div>

    ${renderToolIgSections({ lang: opts.lang, prefix: 'tool_break_even', mode: 'formula' })}`;

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: t(opts.lang, 'tool_break_even_ref_bep_label'),
				href: 'https://www.investopedia.com/terms/b/breakevenpoint.asp',
			},
			{
				label: t(opts.lang, 'tool_break_even_ref_cm_label'),
				href: 'https://www.investopedia.com/terms/c/contributionmargin.asp',
			},
		],
	});

	const extraBodyHtml = `
  <script>
    (function () {
      var form = document.getElementById('beForm');
      var fixedEl = document.getElementById('beFixed');
      var priceEl = document.getElementById('bePrice');
      var varEl = document.getElementById('beVar');
      var result = document.getElementById('beResult');
      var unitsEl = document.getElementById('beUnits');
      var revenueEl = document.getElementById('beRevenue');
      var cmEl = document.getElementById('beCm');
      var noteEl = document.getElementById('beNote');
      var msgFc = ${JSON.stringify(t(opts.lang, 'tool_break_even_err_fixed'))};
      var msgPrice = ${JSON.stringify(t(opts.lang, 'tool_break_even_err_price'))};
      var msgMargin = ${JSON.stringify(t(opts.lang, 'tool_break_even_err_margin'))};
      var noteEdu = ${JSON.stringify(t(opts.lang, 'tool_break_even_result_note'))};

      /** 金额/数量格式化为两位小数。 */
      function fmt(n) {
        return Number.isFinite(n) ? n.toFixed(2) : '—';
      }

      /** 计算盈亏平衡销量与收入。 */
      function runCalc() {
        var fc = parseFloat(fixedEl.value);
        var price = parseFloat(priceEl.value);
        var vc = parseFloat(varEl.value);
        result.style.display = 'block';
        if (!(fc > 0)) {
          unitsEl.textContent = revenueEl.textContent = cmEl.textContent = '—';
          noteEl.textContent = msgFc;
          return false;
        }
        if (!(price > 0) || !(vc >= 0)) {
          unitsEl.textContent = revenueEl.textContent = cmEl.textContent = '—';
          noteEl.textContent = msgPrice;
          return false;
        }
        var cm = price - vc;
        if (!(cm > 0)) {
          unitsEl.textContent = revenueEl.textContent = cmEl.textContent = '—';
          noteEl.textContent = msgMargin;
          return false;
        }
        var q = fc / cm;
        unitsEl.textContent = fmt(q);
        revenueEl.textContent = fmt(q * price);
        cmEl.textContent = fmt(cm);
        noteEl.textContent = noteEdu;
        return true;
      }

      /** 加载默认样例：固定成本 10000、单价 50、变动成本 30 → 500 件。 */
      function loadSample() {
        fixedEl.value = '10000';
        priceEl.value = '50';
        varEl.value = '30';
        runCalc();
      }

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        runCalc();
      });
      document.getElementById('beSample').addEventListener('click', loadSample);
      document.getElementById('beClear').addEventListener('click', function () {
        form.reset();
        result.style.display = 'none';
      });
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('how-to-calculate-break-even');
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
