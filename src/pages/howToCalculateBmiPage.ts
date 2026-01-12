import type { SiteLang } from '../site/i18n';
import { t, supportedLangs } from '../site/i18n';
import { renderFooter } from './site/footer';
import { renderHeader } from './site/header';
import { renderLayout, type HreflangAlternate, escapeHtml } from './site/layout';
import { renderSidebar } from './site/sidebar';

const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

export const renderHowToCalculateBmiPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const canonicalPath = withLangPrefix(opts.lang, '/tools/how-to-calculate-bmi', opts.defaultLang);
	const title = `${t(opts.lang, 'tool_bmi_title')} | ${t(opts.lang, 'brand')}`;
  const description = t(opts.lang, 'tool_bmi_description');
  const article = t(opts.lang, 'tool_bmi_article');

	const navItems = [
		{ href: withLangPrefix(opts.lang, '/', opts.defaultLang), label: t(opts.lang, 'nav_home') },
		{ href: withLangPrefix(opts.lang, '/#all-tools', opts.defaultLang), label: t(opts.lang, 'nav_tools') },
		{ href: '/devlogs/', label: t(opts.lang, 'nav_devlogs') },
	];

  const withExplicitLangPrefix = (code: SiteLang, pathname: string) => {
    const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
    return `/${code}${safe}`.replace(/\/{2,}/g, '/');
  };

  const langAlternates: Record<string, string> = Object.fromEntries(
    (supportedLangs || []).map((code) => [code, withExplicitLangPrefix(code, '/tools/how-to-calculate-bmi')])
  );

	const alternates: HreflangAlternate[] = (opts.enabledLangs || []).map((code) => ({
		lang: code,
		href: `https://onlinefreetools.org${withLangPrefix(code, '/tools/how-to-calculate-bmi', opts.defaultLang)}`,
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
		items: [{ href: '#bmi', label: t(opts.lang, 'tool_bmi_title') }],
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

  const extraHeadHtml = `
  <style>
    .bmi-card {
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.08);
      padding: 1.5rem;
      background-color: #fff;
      max-width: 500px;
      margin: 0 auto 2rem;
    }
    
    .bmi-form-group {
      margin-bottom: 1.25rem;
    }
    
    .bmi-form-label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: 500;
      color: #495057;
    }
    
    .bmi-input {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid #ced4da;
      border-radius: 8px;
      font-size: 1rem;
      transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
      box-sizing: border-box;
    }
    
    .bmi-input:focus {
      border-color: #86b7fe;
      outline: 0;
      box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
    }
    
    .bmi-btn {
      background-color: #0d6efd;
      border: none;
      color: white;
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
      border-radius: 8px;
      cursor: pointer;
      width: 100%;
      font-weight: 500;
      transition: background-color 0.2s;
    }
    
    .bmi-btn:hover {
      background-color: #0b5ed7;
    }
    
    .bmi-result-container {
      text-align: center;
      margin-top: 1.5rem;
      padding: 1.5rem;
      border-radius: 8px;
      background-color: #f8f9fa;
    }
    
    .bmi-result-value {
      font-size: 1.8rem;
      font-weight: bold;
      margin: 0.5rem 0;
    }
    
    .bmi-result-category {
      font-size: 1.2rem;
      font-weight: 500;
      margin-top: 0.5rem;
    }
    
    .bmi-info-section {
      background-color: #f8f9fa;
      border-radius: 8px;
      padding: 1.25rem;
      margin-top: 1.5rem;
    }
    
    .bmi-intro {
      text-align: center;
      margin-bottom: 1.5rem;
    }
    
    .bmi-intro h1 {
      color: #212529;
      font-size: 1.75rem;
      margin-bottom: 0.5rem;
    }
    
    .bmi-intro p {
      color: #6c757d;
      margin-bottom: 0;
    }
    
    .bmi-chart {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      gap: 0.5rem;
      margin-top: 1rem;
    }
    
    .bmi-category {
      padding: 0.75rem;
      border-radius: 6px;
      text-align: center;
      font-size: 0.85rem;
    }
    
    .underweight { background-color: #e7f1ff; color: #084298; }
    .normal { background-color: #d1e7dd; color: #0f5132; }
    .overweight { background-color: #fff3cd; color: #856404; }
    .obese { background-color: #f8d7da; color: #721c24; }
    
    .unit-toggle {
      display: flex;
      justify-content: center;
      margin-bottom: 1rem;
    }
    
    .unit-toggle button {
      background-color: #e9ecef;
      border: 1px solid #ced4da;
      padding: 0.5rem 1rem;
      cursor: pointer;
      font-size: 0.9rem;
    }
    
    .unit-toggle button.active {
      background-color: #0d6efd;
      color: white;
    }
    
    .unit-toggle button:first-child {
      border-radius: 8px 0 0 8px;
      border-right: none;
    }
    
    .unit-toggle button:last-child {
      border-radius: 0 8px 8px 0;
    }
    
    .bmi-form-row {
      display: flex;
      gap: 1rem;
      margin-bottom: 1.25rem;
    }
    
    .bmi-form-col {
      flex: 1;
    }
  </style>`;

	const contentHtml = `
    <div class="bmi-intro">
      <h1>${escapeHtml(t(opts.lang, 'tool_bmi_title'))}</h1>
      <p class="text-muted">${escapeHtml(description)}</p>
    </div>
    
    <div class="bmi-card">
      <div class="unit-toggle">
        <button id="metricBtn" class="active">${t(opts.lang, 'bmi_metric_units') || 'Metric Units'}</button>
        <button id="imperialBtn">${t(opts.lang, 'bmi_imperial_units') || 'Imperial Units'}</button>
      </div>
      
      <form id="bmiInputForm" class="mb-3">
        <div id="metricFields">
          <div class="bmi-form-group">
            <label for="bmiWeight" class="bmi-form-label">${escapeHtml(t(opts.lang, 'tool_bmi_weight_label'))}</label>
            <input 
              type="number" 
              id="bmiWeight" 
              class="bmi-input" 
              min="1" 
              step="any" 
              required 
              placeholder="${escapeHtml(t(opts.lang, 'tool_bmi_weight_placeholder'))}">
          </div>
          
          <div class="bmi-form-group">
            <label for="bmiHeight" class="bmi-form-label">${escapeHtml(t(opts.lang, 'tool_bmi_height_label'))}</label>
            <input 
              type="number" 
              id="bmiHeight" 
              class="bmi-input" 
              min="1" 
              step="any" 
              required 
              placeholder="${escapeHtml(t(opts.lang, 'tool_bmi_height_placeholder'))}">
          </div>
        </div>
        
        <div id="imperialFields" style="display: none;">
          <div class="bmi-form-row">
            <div class="bmi-form-col">
              <label for="bmiWeightLbs" class="bmi-form-label">${t(opts.lang, 'bmi_weight_lbs') || 'Weight (lbs)'}</label>
              <input 
                type="number" 
                id="bmiWeightLbs" 
                class="bmi-input" 
                min="1" 
                step="any" 
                required 
                placeholder="${t(opts.lang, 'bmi_weight_lbs_placeholder') || 'Weight in lbs'}">
            </div>
            
            <div class="bmi-form-col">
              <label for="bmiHeightFt" class="bmi-form-label">${t(opts.lang, 'bmi_height_ft') || 'Height (ft)'}</label>
              <input 
                type="number" 
                id="bmiHeightFt" 
                class="bmi-input" 
                min="0" 
                max="9" 
                step="0.1" 
                required 
                placeholder="${t(opts.lang, 'bmi_height_ft_placeholder') || 'Feet'}">
            </div>
          </div>
          
          <div class="bmi-form-group">
            <label for="bmiHeightIn" class="bmi-form-label">${t(opts.lang, 'bmi_height_in') || 'Height (in)'}</label>
            <input 
              type="number" 
              id="bmiHeightIn" 
              class="bmi-input" 
              min="0" 
              max="11.99" 
              step="0.1" 
              required 
              placeholder="${t(opts.lang, 'bmi_height_in_placeholder') || 'Inches'}">
          </div>
        </div>
        
        <button type="submit" class="bmi-btn">${escapeHtml(t(opts.lang, 'tool_bmi_calculate'))}</button>
      </form>
      
      <div id="bmiResultContainer" class="bmi-result-container" style="display: none;">
        <div>Your BMI</div>
        <div id="bmiResultValue" class="bmi-result-value"></div>
        <div id="bmiResultCategory" class="bmi-result-category"></div>
        <div id="bmiInterpretation" class="mt-2"></div>
      </div>
    </div>
    
    <div class="bmi-info-section">
      <h3 class="h5">${escapeHtml(t(opts.lang, 'tool_bmi_title'))}</h3>
      <p class="mb-3">${escapeHtml(article)}</p>
      
      <h4 class="h6 mt-4">${t(opts.lang, 'bmi_chart_title') || 'BMI Categories'}</h4>
      <div class="bmi-chart">
        <div class="bmi-category underweight">
          <div>&lt; 18.5</div>
          <div>${t(opts.lang, 'bmi_underweight') || 'Underweight'}</div>
        </div>
        <div class="bmi-category normal">
          <div>18.5 - 24.9</div>
          <div>${t(opts.lang, 'bmi_normal') || 'Normal'}</div>
        </div>
        <div class="bmi-category overweight">
          <div>25 - 29.9</div>
          <div>${t(opts.lang, 'bmi_overweight') || 'Overweight'}</div>
        </div>
        <div class="bmi-category obese">
          <div>≥ 30</div>
          <div>${t(opts.lang, 'bmi_obese') || 'Obese'}</div>
        </div>
      </div>
    </div>`;

	const extraBodyHtml = `
  <script>
    const metricBtn = document.getElementById('metricBtn');
    const imperialBtn = document.getElementById('imperialBtn');
    const metricFields = document.getElementById('metricFields');
    const imperialFields = document.getElementById('imperialFields');
    const bmiForm = document.getElementById('bmiInputForm');
    const bmiWeight = document.getElementById('bmiWeight');
    const bmiHeight = document.getElementById('bmiHeight');
    const bmiWeightLbs = document.getElementById('bmiWeightLbs');
    const bmiHeightFt = document.getElementById('bmiHeightFt');
    const bmiHeightIn = document.getElementById('bmiHeightIn');
    const bmiResultContainer = document.getElementById('bmiResultContainer');
    const bmiResultValue = document.getElementById('bmiResultValue');
    const bmiResultCategory = document.getElementById('bmiResultCategory');
    const bmiInterpretation = document.getElementById('bmiInterpretation');
    
    // Toggle between metric and imperial units
    metricBtn.addEventListener('click', function() {
      metricBtn.classList.add('active');
      imperialBtn.classList.remove('active');
      metricFields.style.display = 'block';
      imperialFields.style.display = 'none';
    });
    
    imperialBtn.addEventListener('click', function() {
      imperialBtn.classList.add('active');
      metricBtn.classList.remove('active');
      metricFields.style.display = 'none';
      imperialFields.style.display = 'block';
    });
    
    bmiForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      let weight, height, bmi;
      
      if (metricBtn.classList.contains('active')) {
        // Metric calculation
        weight = parseFloat(bmiWeight.value);
        height = parseFloat(bmiHeight.value) / 100; // convert cm to meters
        
        if (!weight || !height) {
          bmiResultContainer.style.display = 'none';
          return;
        }
        
        bmi = weight / (height * height);
      } else {
        // Imperial calculation
        weight = parseFloat(bmiWeightLbs.value);
        const heightFt = parseFloat(bmiHeightFt.value);
        const heightIn = parseFloat(bmiHeightIn.value);
        
        height = (heightFt * 12) + heightIn; // convert feet/inches to total inches
        
        if (!weight || !height) {
          bmiResultContainer.style.display = 'none';
          return;
        }
        
        bmi = (weight * 703) / (height * height); // Imperial BMI formula
      }
      
      const roundedBmi = bmi.toFixed(1);
      
      // Determine BMI category and interpretation
      let category = '';
      let categoryClass = '';
      let interpretation = '';
      
      if (bmi < 18.5) {
        category = '${t(opts.lang, 'bmi_underweight') || 'Underweight'}';
        categoryClass = 'underweight';
        interpretation = '${t(opts.lang, 'bmi_interpretation_underweight') || 'You may be underweight. Consider consulting with a healthcare professional.'}';
      } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = '${t(opts.lang, 'bmi_normal') || 'Normal'}';
        categoryClass = 'normal';
        interpretation = '${t(opts.lang, 'bmi_interpretation_normal') || 'Congratulations! Your weight appears to be within a healthy range.'}';
      } else if (bmi >= 25 && bmi <= 29.9) {
        category = '${t(opts.lang, 'bmi_overweight') || 'Overweight'}';
        categoryClass = 'overweight';
        interpretation = '${t(opts.lang, 'bmi_interpretation_overweight') || 'You may be overweight. Consider consulting with a healthcare professional.'}';
      } else {
        category = '${t(opts.lang, 'bmi_obese') || 'Obese'}';
        categoryClass = 'obese';
        interpretation = '${t(opts.lang, 'bmi_interpretation_obese') || 'You may be obese. Consider consulting with a healthcare professional.'}';
      }
      
      bmiResultValue.textContent = roundedBmi + ' (BMI)';
      bmiResultCategory.textContent = category;
      bmiResultCategory.className = 'bmi-result-category ' + categoryClass;
      bmiInterpretation.textContent = interpretation;
      bmiResultContainer.style.display = 'block';
    });
  </script>`;

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
    contentHtml,
    footerHtml,
    extraHeadHtml,
    extraBodyHtml,
    includeSidebarToggleScript: true,
    sidebarAutoCloseSelector: '#toolNav a',
  });
};