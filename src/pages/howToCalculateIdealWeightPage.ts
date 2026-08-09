/**
 * 理想体重估算：Devine / Robinson / Miller / Hamwi（厘米输入，英寸公式）。
 * slug: how-to-calculate-ideal-weight（见 work-tasks/how-to-calculate-ideal-weight/02-tool-info.md）。
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
 * 渲染理想体重计算器工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderHowToCalculateIdealWeightPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/how-to-calculate-ideal-weight';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_ideal_weight_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_ideal_weight_description');

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
			currentSlug: 'how-to-calculate-ideal-weight',
			currentAnchor: '#ideal-weight',
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
    <div id="ideal-weight" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(t(opts.lang, 'tool_ideal_weight_title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <form id="iwForm">
          <div class="form-row">
            <div class="form-group">
              <label class="form-label" for="iwSex">${escapeHtml(t(opts.lang, 'tool_ideal_weight_sex_label'))}</label>
              <select id="iwSex" class="input-lg">
                <option value="male" selected>${escapeHtml(t(opts.lang, 'tool_ideal_weight_sex_male'))}</option>
                <option value="female">${escapeHtml(t(opts.lang, 'tool_ideal_weight_sex_female'))}</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label" for="iwFormula">${escapeHtml(t(opts.lang, 'tool_ideal_weight_formula_label'))}</label>
              <select id="iwFormula" class="input-lg">
                <option value="all" selected>${escapeHtml(t(opts.lang, 'tool_ideal_weight_formula_all'))}</option>
                <option value="devine">${escapeHtml(t(opts.lang, 'tool_ideal_weight_formula_devine'))}</option>
                <option value="robinson">${escapeHtml(t(opts.lang, 'tool_ideal_weight_formula_robinson'))}</option>
                <option value="miller">${escapeHtml(t(opts.lang, 'tool_ideal_weight_formula_miller'))}</option>
                <option value="hamwi">${escapeHtml(t(opts.lang, 'tool_ideal_weight_formula_hamwi'))}</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <label class="form-label" for="iwHeight">${escapeHtml(t(opts.lang, 'tool_ideal_weight_height_label'))}</label>
            <input id="iwHeight" class="input-lg" type="number" min="0" step="any"
              placeholder="${escapeHtml(t(opts.lang, 'tool_ideal_weight_height_ph'))}" required>
          </div>
          <div class="btn-row">
            <button type="submit" class="btn btn-primary">${escapeHtml(t(opts.lang, 'tool_ideal_weight_calculate'))}</button>
            <button type="button" id="iwSample" class="btn btn-outline-secondary">${escapeHtml(t(opts.lang, 'tool_ideal_weight_sample'))}</button>
            <button type="button" id="iwClear" class="btn btn-outline-secondary">${escapeHtml(t(opts.lang, 'tool_ideal_weight_clear'))}</button>
          </div>
        </form>
        <div id="iwResult" class="result" style="display:none" aria-live="polite">
          <div><strong>${escapeHtml(t(opts.lang, 'tool_ideal_weight_result_label'))}:</strong> <span id="iwOut"></span></div>
          <div class="muted"><strong>${escapeHtml(t(opts.lang, 'tool_ideal_weight_result_range'))}:</strong> <span id="iwRange"></span></div>
          <div id="iwDetail" class="muted"></div>
          <div id="iwNote" class="muted"></div>
        </div>
      </div>
    </div>

    ${renderToolIgSections({ lang: opts.lang, prefix: 'tool_ideal_weight', mode: 'formula' })}`;

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: t(opts.lang, 'tool_ideal_weight_ref_ncbi_label'),
				href: 'https://www.ncbi.nlm.nih.gov/books/NBK541070/',
			},
			{
				label: t(opts.lang, 'tool_ideal_weight_ref_wiki_label'),
				href: 'https://en.wikipedia.org/wiki/Human_body_weight#Ideal_body_weight',
			},
		],
	});

	const extraBodyHtml = `
  <script>
    (function () {
      var form = document.getElementById('iwForm');
      var sexEl = document.getElementById('iwSex');
      var formulaEl = document.getElementById('iwFormula');
      var heightEl = document.getElementById('iwHeight');
      var result = document.getElementById('iwResult');
      var outEl = document.getElementById('iwOut');
      var rangeEl = document.getElementById('iwRange');
      var detailEl = document.getElementById('iwDetail');
      var noteEl = document.getElementById('iwNote');
      var msgH = ${JSON.stringify(t(opts.lang, 'tool_ideal_weight_err_height'))};
      var msgShort = ${JSON.stringify(t(opts.lang, 'tool_ideal_weight_err_short'))};
      var noteEdu = ${JSON.stringify(t(opts.lang, 'tool_ideal_weight_result_note'))};
      var labels = {
        devine: ${JSON.stringify(t(opts.lang, 'tool_ideal_weight_formula_devine'))},
        robinson: ${JSON.stringify(t(opts.lang, 'tool_ideal_weight_formula_robinson'))},
        miller: ${JSON.stringify(t(opts.lang, 'tool_ideal_weight_formula_miller'))},
        hamwi: ${JSON.stringify(t(opts.lang, 'tool_ideal_weight_formula_hamwi'))}
      };

      /** 厘米 → 英寸。 */
      function cmToIn(cm) { return cm / 2.54; }

      /** 计算四套 IBW（kg）。 */
      function computeAll(sex, heightCm) {
        var inches = cmToIn(heightCm);
        var x = inches - 60;
        var male = sex === 'male';
        return {
          devine: male ? 50 + 2.3 * x : 45.5 + 2.3 * x,
          robinson: male ? 52 + 1.9 * x : 49 + 1.7 * x,
          miller: male ? 56.2 + 1.41 * x : 53.1 + 1.36 * x,
          hamwi: male ? 48 + 2.7 * x : 45.5 + 2.2 * x
        };
      }

      /** 执行估算。 */
      function runCalc() {
        var height = parseFloat(heightEl.value);
        var sex = sexEl.value;
        var mode = formulaEl.value;
        result.style.display = 'block';
        if (!(height > 0)) {
          outEl.textContent = rangeEl.textContent = detailEl.textContent = '—';
          noteEl.textContent = msgH;
          return false;
        }
        var vals = computeAll(sex, height);
        var keys = ['devine', 'robinson', 'miller', 'hamwi'];
        var nums = keys.map(function (k) { return vals[k]; });
        var min = Math.min.apply(null, nums);
        var max = Math.max.apply(null, nums);
        var detail = keys.map(function (k) {
          return labels[k] + ' ' + vals[k].toFixed(1) + ' kg';
        }).join(' · ');
        if (mode === 'all') {
          outEl.textContent = vals.devine.toFixed(1) + ' kg (' + labels.devine + ')';
          rangeEl.textContent = min.toFixed(1) + '–' + max.toFixed(1) + ' kg';
        } else {
          outEl.textContent = vals[mode].toFixed(1) + ' kg';
          rangeEl.textContent = min.toFixed(1) + '–' + max.toFixed(1) + ' kg';
        }
        detailEl.textContent = detail;
        noteEl.textContent = height < 152 ? msgShort : noteEdu;
        return true;
      }

      /** 加载男性 178 cm 样例。 */
      function loadSample() {
        sexEl.value = 'male';
        formulaEl.value = 'all';
        heightEl.value = '178';
        runCalc();
      }

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        runCalc();
      });
      document.getElementById('iwSample').addEventListener('click', loadSample);
      document.getElementById('iwClear').addEventListener('click', function () {
        form.reset();
        result.style.display = 'none';
      });
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('how-to-calculate-ideal-weight');
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
