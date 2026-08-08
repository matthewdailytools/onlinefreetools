/**
 * 体脂率估算：海军/陆军围度法（厘米输入，英寸公式）。
 * slug: how-to-calculate-body-fat（见 work-tasks/how-to-calculate-body-fat/02-tool-info.md）。
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
 * 渲染体脂率计算器工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderHowToCalculateBodyFatPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/how-to-calculate-body-fat';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_body_fat_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_body_fat_description');

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
			currentSlug: 'how-to-calculate-body-fat',
			currentAnchor: '#body-fat',
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
    <div id="body-fat" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(t(opts.lang, 'tool_body_fat_title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <form id="bfForm">
          <div class="form-row">
            <div class="form-group">
              <label class="form-label" for="bfMethod">${escapeHtml(t(opts.lang, 'tool_body_fat_method_label'))}</label>
              <select id="bfMethod" class="input-lg">
                <option value="navy" selected>${escapeHtml(t(opts.lang, 'tool_body_fat_method_navy'))}</option>
                <option value="army">${escapeHtml(t(opts.lang, 'tool_body_fat_method_army'))}</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label" for="bfSex">${escapeHtml(t(opts.lang, 'tool_body_fat_sex_label'))}</label>
              <select id="bfSex" class="input-lg">
                <option value="male" selected>${escapeHtml(t(opts.lang, 'tool_body_fat_sex_male'))}</option>
                <option value="female">${escapeHtml(t(opts.lang, 'tool_body_fat_sex_female'))}</option>
              </select>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label" for="bfHeight">${escapeHtml(t(opts.lang, 'tool_body_fat_height_label'))}</label>
              <input id="bfHeight" class="input-lg" type="number" min="0" step="any"
                placeholder="${escapeHtml(t(opts.lang, 'tool_body_fat_height_ph'))}" required>
            </div>
            <div class="form-group">
              <label class="form-label" for="bfNeck">${escapeHtml(t(opts.lang, 'tool_body_fat_neck_label'))}</label>
              <input id="bfNeck" class="input-lg" type="number" min="0" step="any"
                placeholder="${escapeHtml(t(opts.lang, 'tool_body_fat_neck_ph'))}" required>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label" for="bfWaist">${escapeHtml(t(opts.lang, 'tool_body_fat_waist_label'))}</label>
              <input id="bfWaist" class="input-lg" type="number" min="0" step="any"
                placeholder="${escapeHtml(t(opts.lang, 'tool_body_fat_waist_ph'))}" required>
            </div>
            <div class="form-group" id="bfHipGroup">
              <label class="form-label" for="bfHip">${escapeHtml(t(opts.lang, 'tool_body_fat_hip_label'))}</label>
              <input id="bfHip" class="input-lg" type="number" min="0" step="any"
                placeholder="${escapeHtml(t(opts.lang, 'tool_body_fat_hip_ph'))}">
            </div>
          </div>
          <div class="btn-row">
            <button type="submit" class="btn btn-primary">${escapeHtml(t(opts.lang, 'tool_body_fat_calculate'))}</button>
            <button type="button" id="bfSample" class="btn btn-outline-secondary">${escapeHtml(t(opts.lang, 'tool_body_fat_sample'))}</button>
            <button type="button" id="bfClear" class="btn btn-outline-secondary">${escapeHtml(t(opts.lang, 'tool_body_fat_clear'))}</button>
          </div>
        </form>
        <div id="bfResult" class="result" style="display:none" aria-live="polite">
          <div><strong>${escapeHtml(t(opts.lang, 'tool_body_fat_result_label'))}:</strong> <span id="bfOut"></span></div>
          <div id="bfNote" class="muted"></div>
        </div>
      </div>
    </div>

    ${renderToolIgSections({ lang: opts.lang, prefix: 'tool_body_fat', mode: 'formula' })}`;

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: t(opts.lang, 'tool_body_fat_ref_ace_label'),
				href: 'https://www.acefitness.org/resources/everyone/body-fat-calculator/',
			},
			{
				label: t(opts.lang, 'tool_body_fat_ref_pmc_label'),
				href: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5504436/',
			},
		],
	});

	const extraBodyHtml = `
  <script>
    (function () {
      var form = document.getElementById('bfForm');
      var sexEl = document.getElementById('bfSex');
      var heightEl = document.getElementById('bfHeight');
      var neckEl = document.getElementById('bfNeck');
      var waistEl = document.getElementById('bfWaist');
      var hipEl = document.getElementById('bfHip');
      var hipGroup = document.getElementById('bfHipGroup');
      var result = document.getElementById('bfResult');
      var outEl = document.getElementById('bfOut');
      var noteEl = document.getElementById('bfNote');
      var msgIn = ${JSON.stringify(t(opts.lang, 'tool_body_fat_err_input'))};
      var msgHip = ${JSON.stringify(t(opts.lang, 'tool_body_fat_err_hip'))};
      var msgGeom = ${JSON.stringify(t(opts.lang, 'tool_body_fat_err_geom'))};
      var noteEdu = ${JSON.stringify(t(opts.lang, 'tool_body_fat_result_note'))};

      /** 厘米 → 英寸。 */
      function cmToIn(cm) { return cm / 2.54; }

      /** 按性别显示/隐藏臀围。 */
      function syncHip() {
        hipGroup.style.display = sexEl.value === 'female' ? '' : 'none';
      }

      /** 海军/陆军系围度公式（英寸）。 */
      function bodyFatPct(sex, heightIn, neckIn, waistIn, hipIn) {
        if (sex === 'female') {
          return 163.205 * Math.log10(waistIn + hipIn - neckIn) - 97.684 * Math.log10(heightIn) + 78.387;
        }
        return 86.010 * Math.log10(waistIn - neckIn) - 70.041 * Math.log10(heightIn) + 36.387;
      }

      /** 计算体脂%。 */
      function runCalc() {
        var height = parseFloat(heightEl.value);
        var neck = parseFloat(neckEl.value);
        var waist = parseFloat(waistEl.value);
        var hip = parseFloat(hipEl.value);
        var sex = sexEl.value;
        result.style.display = 'block';
        if (!(height > 0) || !(neck > 0) || !(waist > 0)) {
          outEl.textContent = '—';
          noteEl.textContent = msgIn;
          return false;
        }
        if (sex === 'female' && !(hip > 0)) {
          outEl.textContent = '—';
          noteEl.textContent = msgHip;
          return false;
        }
        var hIn = cmToIn(height);
        var nIn = cmToIn(neck);
        var wIn = cmToIn(waist);
        var hipIn = sex === 'female' ? cmToIn(hip) : 0;
        if (sex === 'female' ? !(wIn + hipIn > nIn) : !(wIn > nIn)) {
          outEl.textContent = '—';
          noteEl.textContent = msgGeom;
          return false;
        }
        var pct = bodyFatPct(sex, hIn, nIn, wIn, hipIn);
        if (!Number.isFinite(pct)) {
          outEl.textContent = '—';
          noteEl.textContent = msgIn;
          return false;
        }
        outEl.textContent = pct.toFixed(1) + '%';
        noteEl.textContent = noteEdu;
        return true;
      }

      /** 加载男性海军样例：178 / 40 / 86 → 约 15.3%。 */
      function loadSample() {
        sexEl.value = 'male';
        syncHip();
        heightEl.value = '178';
        neckEl.value = '40';
        waistEl.value = '86';
        hipEl.value = '';
        runCalc();
      }

      sexEl.addEventListener('change', syncHip);
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        runCalc();
      });
      document.getElementById('bfSample').addEventListener('click', loadSample);
      document.getElementById('bfClear').addEventListener('click', function () {
        form.reset();
        syncHip();
        result.style.display = 'none';
      });
      syncHip();
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('how-to-calculate-body-fat');
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
