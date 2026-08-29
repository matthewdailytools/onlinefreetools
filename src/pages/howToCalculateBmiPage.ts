/**
 * BMI 计算器工具页：公制/英制输入、成人筛查分类、YMYL 免责与权威引用。
 * slug: how-to-calculate-bmi；主方向 A（见 work-tasks/how-to-calculate-bmi/02-tool-info.md）。
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
	renderContextualToolLinks,
} from './site/toolContent';

/** 为路径加上语言前缀（默认语无前缀）。 */
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * 渲染 BMI 计算器工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderHowToCalculateBmiPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/how-to-calculate-bmi';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_bmi_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_bmi_description');

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
		groups: buildToolSidebarItems({ lang: opts.lang, defaultLang: opts.defaultLang, currentSlug: 'how-to-calculate-bmi', currentAnchor: '#bmi' }),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	/** BMI 表单与分类色块样式。 */
	const extraHeadHtml = `
  <style>
    .bmi-card { max-width: var(--content-max); width: 100%; margin: 0 0 1.5rem; }
    .bmi-form-label { display:block; margin-bottom:.5rem; color:#495057; font-weight:500 }
    .bmi-chart { display:grid; grid-template-columns:repeat(auto-fit,minmax(120px,1fr)); gap:.5rem; margin-top:1rem }
    .bmi-category { padding:.75rem; border-radius:6px; text-align:center; font-size:.85rem }
    .underweight { background-color: #e7f1ff; color: #084298; }
    .normal { background-color: #d1e7dd; color: #0f5132; }
    .overweight { background-color: #fff3cd; color: #856404; }
    .obese { background-color: #f8d7da; color: #721c24; }
    .unit-toggle { display:flex; justify-content:center; margin-bottom:1rem; }
    .unit-toggle button { background-color:#e9ecef; border:1px solid #ced4da; padding:.5rem 1rem; cursor:pointer; font-size:.9rem; }
    .unit-toggle button.active { background-color:#0d6efd; color:#fff; }
    .unit-toggle button:first-child { border-radius:8px 0 0 8px; border-right:none; }
    .unit-toggle button:last-child { border-radius:0 8px 8px 0; }
    .bmi-form-row { display:flex; gap:1rem; margin-bottom:1.25rem; }
    .bmi-form-col { flex:1; }
    .bmi-form-group { margin-bottom:1rem; }
  </style>`;

	const contentHtml = `
    <div id="bmi" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(t(opts.lang, 'tool_bmi_title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card bmi-card">
      <div class="card-body">
        <div class="unit-toggle" role="group" aria-label="${escapeHtml(t(opts.lang, 'bmi_unit_group_label'))}">
          <button type="button" id="metricBtn" class="active">${escapeHtml(t(opts.lang, 'bmi_metric_units'))}</button>
          <button type="button" id="imperialBtn">${escapeHtml(t(opts.lang, 'bmi_imperial_units'))}</button>
        </div>

        <form id="bmiInputForm" class="mb-3">
          <div id="metricFields">
            <div class="bmi-form-group">
              <label for="bmiWeight" class="bmi-form-label">${escapeHtml(t(opts.lang, 'tool_bmi_weight_label'))}</label>
              <input type="number" id="bmiWeight" class="input-lg" min="1" step="any" required
                placeholder="${escapeHtml(t(opts.lang, 'tool_bmi_weight_placeholder'))}">
            </div>
            <div class="bmi-form-group">
              <label for="bmiHeight" class="bmi-form-label">${escapeHtml(t(opts.lang, 'tool_bmi_height_label'))}</label>
              <input type="number" id="bmiHeight" class="input-lg" min="1" step="any" required
                placeholder="${escapeHtml(t(opts.lang, 'tool_bmi_height_placeholder'))}">
            </div>
          </div>

          <div id="imperialFields" style="display:none;">
            <div class="bmi-form-row">
              <div class="bmi-form-col">
                <label for="bmiWeightLbs" class="bmi-form-label">${escapeHtml(t(opts.lang, 'bmi_weight_lbs'))}</label>
                <input type="number" id="bmiWeightLbs" class="input-lg" min="1" step="any"
                  placeholder="${escapeHtml(t(opts.lang, 'bmi_weight_lbs_placeholder'))}">
              </div>
              <div class="bmi-form-col">
                <label for="bmiHeightFt" class="bmi-form-label">${escapeHtml(t(opts.lang, 'bmi_height_ft'))}</label>
                <input type="number" id="bmiHeightFt" class="input-lg" min="0" max="9" step="0.1"
                  placeholder="${escapeHtml(t(opts.lang, 'bmi_height_ft_placeholder'))}">
              </div>
            </div>
            <div class="bmi-form-group">
              <label for="bmiHeightIn" class="bmi-form-label">${escapeHtml(t(opts.lang, 'bmi_height_in'))}</label>
              <input type="number" id="bmiHeightIn" class="input-lg" min="0" max="11.99" step="0.1"
                placeholder="${escapeHtml(t(opts.lang, 'bmi_height_in_placeholder'))}">
            </div>
          </div>

          <button type="submit" class="btn btn-primary">${escapeHtml(t(opts.lang, 'tool_bmi_calculate'))}</button>
        </form>

        <div id="bmiResultContainer" class="result" style="display:none;text-align:center;">
          <div class="text-muted">${escapeHtml(t(opts.lang, 'bmi_result_label'))}</div>
          <div id="bmiResultValue" style="font-size:1.8rem;font-weight:700;margin:.5rem 0"></div>
          <div id="bmiResultCategory" class="bmi-result-category"></div>
          <div id="bmiInterpretation" class="mt-2 small text-muted"></div>
        </div>

        <h2 class="h6 mt-4">${escapeHtml(t(opts.lang, 'bmi_chart_title'))}</h2>
        <div class="bmi-chart">
          <div class="bmi-category underweight">
            <div>&lt; 18.5</div>
            <div>${escapeHtml(t(opts.lang, 'bmi_underweight'))}</div>
          </div>
          <div class="bmi-category normal">
            <div>18.5 – 24.9</div>
            <div>${escapeHtml(t(opts.lang, 'bmi_normal'))}</div>
          </div>
          <div class="bmi-category overweight">
            <div>25 – 29.9</div>
            <div>${escapeHtml(t(opts.lang, 'bmi_overweight'))}</div>
          </div>
          <div class="bmi-category obese">
            <div>≥ 30</div>
            <div>${escapeHtml(t(opts.lang, 'bmi_obese'))}</div>
          </div>
        </div>
      </div>
    </div>

    ${renderToolIgSections({ lang: opts.lang, prefix: 'tool_bmi', mode: 'formula' })}
    ${renderContextualToolLinks({
			lang: opts.lang,
			defaultLang: opts.defaultLang,
			lead: 'For energy needs and body composition next to BMI, also try',
			slugs: ['how-to-calculate-bmr-tdee', 'how-to-calculate-body-fat', 'how-to-calculate-ideal-weight'],
		})}`;

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: t(opts.lang, 'tool_bmi_ref_who_label'),
				href: 'https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight',
			},
			{
				label: t(opts.lang, 'tool_bmi_ref_cdc_label'),
				href: 'https://www.cdc.gov/bmi/adult-calculator/bmi-categories.html',
			},
		],
	});

	const extraBodyHtml = `
  <script>
    (function () {
      var metricBtn = document.getElementById('metricBtn');
      var imperialBtn = document.getElementById('imperialBtn');
      var metricFields = document.getElementById('metricFields');
      var imperialFields = document.getElementById('imperialFields');
      var bmiForm = document.getElementById('bmiInputForm');
      var bmiWeight = document.getElementById('bmiWeight');
      var bmiHeight = document.getElementById('bmiHeight');
      var bmiWeightLbs = document.getElementById('bmiWeightLbs');
      var bmiHeightFt = document.getElementById('bmiHeightFt');
      var bmiHeightIn = document.getElementById('bmiHeightIn');
      var bmiResultContainer = document.getElementById('bmiResultContainer');
      var bmiResultValue = document.getElementById('bmiResultValue');
      var bmiResultCategory = document.getElementById('bmiResultCategory');
      var bmiInterpretation = document.getElementById('bmiInterpretation');

      var labelUnder = ${JSON.stringify(t(opts.lang, 'bmi_underweight'))};
      var labelNormal = ${JSON.stringify(t(opts.lang, 'bmi_normal'))};
      var labelOver = ${JSON.stringify(t(opts.lang, 'bmi_overweight'))};
      var labelObese = ${JSON.stringify(t(opts.lang, 'bmi_obese'))};
      var textUnder = ${JSON.stringify(t(opts.lang, 'bmi_interpretation_underweight'))};
      var textNormal = ${JSON.stringify(t(opts.lang, 'bmi_interpretation_normal'))};
      var textOver = ${JSON.stringify(t(opts.lang, 'bmi_interpretation_overweight'))};
      var textObese = ${JSON.stringify(t(opts.lang, 'bmi_interpretation_obese'))};
      var msgInvalid = ${JSON.stringify(t(opts.lang, 'bmi_invalid_input'))};

      /** 切换到公制输入。 */
      function setMetric() {
        metricBtn.classList.add('active');
        imperialBtn.classList.remove('active');
        metricFields.style.display = 'block';
        imperialFields.style.display = 'none';
        bmiWeight.required = true;
        bmiHeight.required = true;
        bmiWeightLbs.required = false;
        bmiHeightFt.required = false;
        bmiHeightIn.required = false;
      }

      /** 切换到英制输入。 */
      function setImperial() {
        imperialBtn.classList.add('active');
        metricBtn.classList.remove('active');
        metricFields.style.display = 'none';
        imperialFields.style.display = 'block';
        bmiWeight.required = false;
        bmiHeight.required = false;
        bmiWeightLbs.required = true;
        bmiHeightFt.required = true;
        bmiHeightIn.required = true;
      }

      metricBtn.addEventListener('click', setMetric);
      imperialBtn.addEventListener('click', setImperial);

      bmiForm.addEventListener('submit', function (e) {
        e.preventDefault();
        var weight;
        var height;
        var bmi;

        if (metricBtn.classList.contains('active')) {
          weight = parseFloat(bmiWeight.value);
          height = parseFloat(bmiHeight.value) / 100;
          if (!(weight > 0) || !(height > 0)) {
            bmiResultContainer.style.display = 'block';
            bmiResultValue.textContent = '—';
            bmiResultCategory.textContent = '';
            bmiInterpretation.textContent = msgInvalid;
            return;
          }
          bmi = weight / (height * height);
        } else {
          weight = parseFloat(bmiWeightLbs.value);
          var heightFt = parseFloat(bmiHeightFt.value) || 0;
          var heightIn = parseFloat(bmiHeightIn.value) || 0;
          height = heightFt * 12 + heightIn;
          if (!(weight > 0) || !(height > 0)) {
            bmiResultContainer.style.display = 'block';
            bmiResultValue.textContent = '—';
            bmiResultCategory.textContent = '';
            bmiInterpretation.textContent = msgInvalid;
            return;
          }
          bmi = (weight * 703) / (height * height);
        }

        var category = '';
        var categoryClass = '';
        var interpretation = '';
        if (bmi < 18.5) {
          category = labelUnder;
          categoryClass = 'underweight';
          interpretation = textUnder;
        } else if (bmi < 25) {
          category = labelNormal;
          categoryClass = 'normal';
          interpretation = textNormal;
        } else if (bmi < 30) {
          category = labelOver;
          categoryClass = 'overweight';
          interpretation = textOver;
        } else {
          category = labelObese;
          categoryClass = 'obese';
          interpretation = textObese;
        }

        bmiResultValue.textContent = bmi.toFixed(1);
        bmiResultCategory.textContent = category;
        bmiResultCategory.className = 'bmi-result-category ' + categoryClass;
        bmiInterpretation.textContent = interpretation;
        bmiResultContainer.style.display = 'block';
      });
    })();
  </script>`;

	const toolMeta = getToolBySlug('how-to-calculate-bmi');
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
