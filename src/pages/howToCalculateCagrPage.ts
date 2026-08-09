/**
 * CAGR 计算器：期初价值、期末价值与年数 → 复合年增长率 %。
 * slug: how-to-calculate-cagr（见 work-tasks/how-to-calculate-cagr/02-tool-info.md）。
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
 * 渲染 CAGR 计算器工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderHowToCalculateCagrPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/how-to-calculate-cagr';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_cagr_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_cagr_description');

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
			currentSlug: 'how-to-calculate-cagr',
			currentAnchor: '#cagr',
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
    <div id="cagr" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(t(opts.lang, 'tool_cagr_title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <form id="cagrForm">
          <div class="form-row">
            <div class="form-group">
              <label class="form-label" for="cagrBegin">${escapeHtml(t(opts.lang, 'tool_cagr_begin_label'))}</label>
              <input id="cagrBegin" class="input-lg" type="number" min="0" step="any"
                placeholder="${escapeHtml(t(opts.lang, 'tool_cagr_begin_ph'))}" required>
            </div>
            <div class="form-group">
              <label class="form-label" for="cagrEnd">${escapeHtml(t(opts.lang, 'tool_cagr_end_label'))}</label>
              <input id="cagrEnd" class="input-lg" type="number" min="0" step="any"
                placeholder="${escapeHtml(t(opts.lang, 'tool_cagr_end_ph'))}" required>
            </div>
          </div>
          <div class="form-group">
            <label class="form-label" for="cagrYears">${escapeHtml(t(opts.lang, 'tool_cagr_years_label'))}</label>
            <input id="cagrYears" class="input-lg" type="number" min="0" step="any"
              placeholder="${escapeHtml(t(opts.lang, 'tool_cagr_years_ph'))}" required>
          </div>
          <div class="btn-row">
            <button type="submit" class="btn btn-primary">${escapeHtml(t(opts.lang, 'tool_cagr_calculate'))}</button>
            <button type="button" id="cagrSample" class="btn btn-outline-secondary">${escapeHtml(t(opts.lang, 'tool_cagr_sample'))}</button>
            <button type="button" id="cagrClear" class="btn btn-outline-secondary">${escapeHtml(t(opts.lang, 'tool_cagr_clear'))}</button>
          </div>
        </form>
        <div id="cagrResult" class="result" style="display:none" aria-live="polite">
          <div><strong>${escapeHtml(t(opts.lang, 'tool_cagr_result_label'))}:</strong> <span id="cagrValue"></span></div>
          <div id="cagrNote" class="muted"></div>
        </div>
      </div>
    </div>

    ${renderToolIgSections({ lang: opts.lang, prefix: 'tool_cagr', mode: 'formula' })}`;

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: t(opts.lang, 'tool_cagr_ref_cagr_label'),
				href: 'https://www.investopedia.com/terms/c/cagr.asp',
			},
			{
				label: t(opts.lang, 'tool_cagr_ref_formula_label'),
				href: 'https://www.investopedia.com/ask/answers/071014/what-formula-calculating-compound-annual-growth-rate-cagr.asp',
			},
		],
	});

	const extraBodyHtml = `
  <script>
    (function () {
      var form = document.getElementById('cagrForm');
      var beginEl = document.getElementById('cagrBegin');
      var endEl = document.getElementById('cagrEnd');
      var yearsEl = document.getElementById('cagrYears');
      var result = document.getElementById('cagrResult');
      var valueEl = document.getElementById('cagrValue');
      var noteEl = document.getElementById('cagrNote');
      var msgBegin = ${JSON.stringify(t(opts.lang, 'tool_cagr_err_begin'))};
      var msgEnd = ${JSON.stringify(t(opts.lang, 'tool_cagr_err_end'))};
      var msgYears = ${JSON.stringify(t(opts.lang, 'tool_cagr_err_years'))};
      var noteEdu = ${JSON.stringify(t(opts.lang, 'tool_cagr_result_note'))};

      /** 百分比格式化为两位小数。 */
      function fmtPct(n) {
        return Number.isFinite(n) ? n.toFixed(2) + '%' : '—';
      }

      /**
       * 按 CAGR=((EV/BV)^(1/n)-1)*100 计算复合年增长率。
       * @returns {boolean} 输入合法并已写出结果时为 true
       */
      function runCalc() {
        var begin = parseFloat(beginEl.value);
        var end = parseFloat(endEl.value);
        var years = parseFloat(yearsEl.value);
        result.style.display = 'block';
        if (!(begin > 0)) {
          valueEl.textContent = '—';
          noteEl.textContent = msgBegin;
          return false;
        }
        if (!(end > 0)) {
          valueEl.textContent = '—';
          noteEl.textContent = msgEnd;
          return false;
        }
        if (!(years > 0)) {
          valueEl.textContent = '—';
          noteEl.textContent = msgYears;
          return false;
        }
        var cagrPct = (Math.pow(end / begin, 1 / years) - 1) * 100;
        valueEl.textContent = fmtPct(cagrPct);
        noteEl.textContent = noteEdu;
        return true;
      }

      /** 加载默认样例：期初 10000、期末 16105.1、年数 5 → CAGR 10.00%。 */
      function loadSample() {
        beginEl.value = '10000';
        endEl.value = '16105.1';
        yearsEl.value = '5';
        runCalc();
      }

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        runCalc();
      });
      document.getElementById('cagrSample').addEventListener('click', loadSample);
      document.getElementById('cagrClear').addEventListener('click', function () {
        form.reset();
        result.style.display = 'none';
      });
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('how-to-calculate-cagr');
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
