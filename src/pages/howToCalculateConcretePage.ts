/**
 * 混凝土方量计算器：板 / 矩形柱 / 圆柱几何体积，可选袋数（写明袋容积假设）。
 * slug: how-to-calculate-concrete（见 work-tasks/how-to-calculate-concrete/02-tool-info.md）。
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
 * 渲染混凝土方量计算器工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderHowToCalculateConcretePage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/how-to-calculate-concrete';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_concrete_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_concrete_description');

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
		groups: buildToolSidebarItems({
			lang: opts.lang,
			defaultLang: opts.defaultLang,
			currentSlug: 'how-to-calculate-concrete',
			currentAnchor: '#concrete',
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
    .shape-toggle, .unit-toggle { display:flex; gap:.5rem; margin-bottom:1rem; flex-wrap:wrap }
    .shape-toggle button, .unit-toggle button {
      padding:.45rem .75rem; border-radius:8px; border:1px solid #ced4da; background:#e9ecef; cursor:pointer
    }
    .shape-toggle button.active, .unit-toggle button.active { background:#0d6efd; color:#fff; border-color:#0d6efd }
    .result { background:#f8f9fa; padding:1rem; border-radius:8px; margin-top:1rem; text-align:center }
    .result .muted { color:#6c757d; font-size:.9rem; margin-top:.35rem }
    .bags-row { display:flex; align-items:center; gap:.5rem; margin:1rem 0 }
  </style>`;

	const contentHtml = `
    <div id="concrete" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(t(opts.lang, 'tool_concrete_title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <div class="form-group">
          <span class="form-label">${escapeHtml(t(opts.lang, 'tool_concrete_shape_label'))}</span>
          <div class="shape-toggle" role="group" aria-label="${escapeHtml(t(opts.lang, 'tool_concrete_shape_label'))}">
            <button type="button" id="shapeSlab" class="active" data-shape="slab">${escapeHtml(t(opts.lang, 'tool_concrete_shape_slab'))}</button>
            <button type="button" id="shapeColumn" data-shape="column">${escapeHtml(t(opts.lang, 'tool_concrete_shape_column'))}</button>
            <button type="button" id="shapeCylinder" data-shape="cylinder">${escapeHtml(t(opts.lang, 'tool_concrete_shape_cylinder'))}</button>
          </div>
        </div>
        <div class="form-group">
          <span class="form-label">${escapeHtml(t(opts.lang, 'tool_concrete_unit_label'))}</span>
          <div class="unit-toggle" role="group" aria-label="${escapeHtml(t(opts.lang, 'tool_concrete_unit_label'))}">
            <button type="button" id="unitM" class="active" data-unit="m">${escapeHtml(t(opts.lang, 'tool_concrete_unit_m'))}</button>
            <button type="button" id="unitFt" data-unit="ft">${escapeHtml(t(opts.lang, 'tool_concrete_unit_ft'))}</button>
          </div>
        </div>
        <form id="concreteForm">
          <div class="form-row" id="dimsRect">
            <div class="form-group">
              <label class="form-label" for="cLength">${escapeHtml(t(opts.lang, 'tool_concrete_length_label'))}</label>
              <input id="cLength" class="input-lg" type="number" min="0" step="any"
                placeholder="${escapeHtml(t(opts.lang, 'tool_concrete_length_ph'))}" required>
            </div>
            <div class="form-group">
              <label class="form-label" for="cWidth">${escapeHtml(t(opts.lang, 'tool_concrete_width_label'))}</label>
              <input id="cWidth" class="input-lg" type="number" min="0" step="any"
                placeholder="${escapeHtml(t(opts.lang, 'tool_concrete_width_ph'))}" required>
            </div>
          </div>
          <div class="form-group" id="dimThicknessWrap">
            <label class="form-label" for="cThickness" id="cThicknessLabel">${escapeHtml(t(opts.lang, 'tool_concrete_thickness_label'))}</label>
            <input id="cThickness" class="input-lg" type="number" min="0" step="any"
              placeholder="${escapeHtml(t(opts.lang, 'tool_concrete_thickness_ph'))}" required>
          </div>
          <div class="form-row" id="dimsCylinder" style="display:none">
            <div class="form-group">
              <label class="form-label" for="cDiameter">${escapeHtml(t(opts.lang, 'tool_concrete_diameter_label'))}</label>
              <input id="cDiameter" class="input-lg" type="number" min="0" step="any"
                placeholder="${escapeHtml(t(opts.lang, 'tool_concrete_diameter_ph'))}">
            </div>
            <div class="form-group">
              <label class="form-label" for="cCylHeight">${escapeHtml(t(opts.lang, 'tool_concrete_height_label'))}</label>
              <input id="cCylHeight" class="input-lg" type="number" min="0" step="any"
                placeholder="${escapeHtml(t(opts.lang, 'tool_concrete_height_ph'))}">
            </div>
          </div>
          <div class="bags-row">
            <input type="checkbox" id="cBags" checked>
            <label for="cBags" class="mb-0">${escapeHtml(t(opts.lang, 'tool_concrete_bags_check'))}</label>
          </div>
          <div class="btn-row">
            <button type="submit" class="btn btn-primary">${escapeHtml(t(opts.lang, 'tool_concrete_calculate'))}</button>
            <button type="button" id="cSample" class="btn btn-outline-secondary">${escapeHtml(t(opts.lang, 'tool_concrete_sample'))}</button>
            <button type="button" id="cClear" class="btn btn-outline-secondary">${escapeHtml(t(opts.lang, 'tool_concrete_clear'))}</button>
          </div>
        </form>
        <div id="cResult" class="result" style="display:none" aria-live="polite">
          <div><strong>${escapeHtml(t(opts.lang, 'tool_concrete_result_volume'))}:</strong> <span id="cVolume"></span></div>
          <div id="cBagsLine" style="display:none"><strong>${escapeHtml(t(opts.lang, 'tool_concrete_result_bags'))}:</strong> <span id="cBagsValue"></span></div>
          <div id="cNote" class="muted"></div>
        </div>
      </div>
    </div>

    ${renderToolIgSections({ lang: opts.lang, prefix: 'tool_concrete', mode: 'formula' })}`;

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: t(opts.lang, 'tool_concrete_ref_nist_label'),
				href: 'https://www.nist.gov/pml/special-publication-811',
			},
			{
				label: t(opts.lang, 'tool_concrete_ref_pca_label'),
				href: 'https://www.cement.org/learn/',
			},
		],
	});

	const extraBodyHtml = `
  <script>
    (function () {
      var form = document.getElementById('concreteForm');
      var shapeBtns = [document.getElementById('shapeSlab'), document.getElementById('shapeColumn'), document.getElementById('shapeCylinder')];
      var unitM = document.getElementById('unitM');
      var unitFt = document.getElementById('unitFt');
      var dimsRect = document.getElementById('dimsRect');
      var dimsCylinder = document.getElementById('dimsCylinder');
      var dimThicknessWrap = document.getElementById('dimThicknessWrap');
      var cLength = document.getElementById('cLength');
      var cWidth = document.getElementById('cWidth');
      var cThickness = document.getElementById('cThickness');
      var cThicknessLabel = document.getElementById('cThicknessLabel');
      var cDiameter = document.getElementById('cDiameter');
      var cCylHeight = document.getElementById('cCylHeight');
      var cBags = document.getElementById('cBags');
      var result = document.getElementById('cResult');
      var volumeEl = document.getElementById('cVolume');
      var bagsLine = document.getElementById('cBagsLine');
      var bagsValue = document.getElementById('cBagsValue');
      var noteEl = document.getElementById('cNote');
      var msgDims = ${JSON.stringify(t(opts.lang, 'tool_concrete_err_dims'))};
      var bagsNote = ${JSON.stringify(t(opts.lang, 'tool_concrete_bags_note'))};
      var labelThickness = ${JSON.stringify(t(opts.lang, 'tool_concrete_thickness_label'))};
      var labelHeight = ${JSON.stringify(t(opts.lang, 'tool_concrete_height_label'))};
      /** 公制袋容积假设（m³）。 */
      var BAG_M3 = 0.015;
      /** 英制袋容积假设（ft³）。 */
      var BAG_FT3 = 0.45;
      var shape = 'slab';
      var unit = 'm';

      /** 高亮一组按钮中的当前项。 */
      function setActive(group, activeBtn) {
        group.forEach(function (b) { b.classList.remove('active'); });
        activeBtn.classList.add('active');
      }

      /** 按形状显示板/柱字段或圆柱字段。 */
      function syncShapeUi() {
        var isCyl = shape === 'cylinder';
        dimsRect.style.display = isCyl ? 'none' : 'grid';
        dimThicknessWrap.style.display = isCyl ? 'none' : 'block';
        dimsCylinder.style.display = isCyl ? 'grid' : 'none';
        cThicknessLabel.textContent = shape === 'column' ? labelHeight : labelThickness;
        cLength.required = !isCyl;
        cWidth.required = !isCyl;
        cThickness.required = !isCyl;
        cDiameter.required = isCyl;
        cCylHeight.required = isCyl;
      }

      shapeBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
          shape = btn.getAttribute('data-shape');
          setActive(shapeBtns, btn);
          syncShapeUi();
        });
      });
      unitM.addEventListener('click', function () {
        unit = 'm';
        setActive([unitM, unitFt], unitM);
      });
      unitFt.addEventListener('click', function () {
        unit = 'ft';
        setActive([unitM, unitFt], unitFt);
      });

      /** 格式化体积数值（最多 4 位小数，去掉尾零）。 */
      function fmtVol(n) {
        if (!Number.isFinite(n)) return '—';
        var s = n.toFixed(4).replace(/\\.?0+$/, '');
        return s + ' ' + (unit === 'm' ? 'm³' : 'ft³');
      }

      /**
       * 按当前形状与单位计算体积，并可选袋数。
       * @returns {boolean} 输入合法并已写出结果时为 true
       */
      function runCalc() {
        result.style.display = 'block';
        var vol = NaN;
        if (shape === 'cylinder') {
          var d = parseFloat(cDiameter.value);
          var h = parseFloat(cCylHeight.value);
          if (!(d > 0) || !(h > 0)) {
            volumeEl.textContent = '—';
            bagsLine.style.display = 'none';
            noteEl.textContent = msgDims;
            return false;
          }
          var r = d / 2;
          vol = Math.PI * r * r * h;
        } else {
          var L = parseFloat(cLength.value);
          var W = parseFloat(cWidth.value);
          var T = parseFloat(cThickness.value);
          if (!(L > 0) || !(W > 0) || !(T > 0)) {
            volumeEl.textContent = '—';
            bagsLine.style.display = 'none';
            noteEl.textContent = msgDims;
            return false;
          }
          vol = L * W * T;
        }
        volumeEl.textContent = fmtVol(vol);
        if (cBags.checked) {
          var bagVol = unit === 'm' ? BAG_M3 : BAG_FT3;
          var bags = Math.ceil(vol / bagVol - 1e-12);
          bagsValue.textContent = String(bags);
          bagsLine.style.display = 'block';
          noteEl.textContent = bagsNote;
        } else {
          bagsLine.style.display = 'none';
          noteEl.textContent = '';
        }
        return true;
      }

      /** 加载默认样例：板 5×4×0.1 m → 2.0 m³。 */
      function loadSample() {
        shape = 'slab';
        unit = 'm';
        setActive(shapeBtns, document.getElementById('shapeSlab'));
        setActive([unitM, unitFt], unitM);
        syncShapeUi();
        cLength.value = '5';
        cWidth.value = '4';
        cThickness.value = '0.1';
        cDiameter.value = '';
        cCylHeight.value = '';
        cBags.checked = true;
        runCalc();
      }

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        runCalc();
      });
      document.getElementById('cSample').addEventListener('click', loadSample);
      document.getElementById('cClear').addEventListener('click', function () {
        form.reset();
        cBags.checked = false;
        result.style.display = 'none';
      });
      syncShapeUi();
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('how-to-calculate-concrete');
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
