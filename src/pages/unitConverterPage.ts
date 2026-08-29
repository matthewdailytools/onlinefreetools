/**
 * 通用单位换算枢纽：长度/质量/温度/面积/体积/速度同页多类别。
 * slug: unit-converter（见 work-tasks/unit-converter/02-tool-info.md）。
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
 * 渲染通用单位换算工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderUnitConverterPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/unit-converter';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_unit_converter_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_unit_converter_description');

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
			currentSlug: 'unit-converter',
			currentAnchor: '#unit-converter',
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
    .cat-tabs { display:flex; flex-wrap:wrap; gap:.4rem; margin-bottom:1rem; }
    .cat-tabs button { padding:.4rem .7rem; border-radius:8px; border:1px solid #ced4da; background:#e9ecef; cursor:pointer; font-size:.9rem }
    .cat-tabs button.active { background:#0d6efd; color:#fff; border-color:#0d6efd }
  </style>`;

	/** 类别按钮文案（服务端注入，避免客户端再查 i18n）。 */
	const catButtons = (
		[
			['length', 'tool_unit_converter_cat_length'],
			['mass', 'tool_unit_converter_cat_mass'],
			['temperature', 'tool_unit_converter_cat_temperature'],
			['area', 'tool_unit_converter_cat_area'],
			['volume', 'tool_unit_converter_cat_volume'],
			['speed', 'tool_unit_converter_cat_speed'],
		] as const
	)
		.map(
			([id, key], i) =>
				`<button type="button" class="uc-cat${i === 0 ? ' active' : ''}" data-cat="${id}">${escapeHtml(
					t(opts.lang, key)
				)}</button>`
		)
		.join('');

	const contentHtml = `
    <div id="unit-converter" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(t(opts.lang, 'tool_unit_converter_title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <div class="form-group">
          <span class="form-label">${escapeHtml(t(opts.lang, 'tool_unit_converter_category_label'))}</span>
          <div class="cat-tabs" role="group" aria-label="${escapeHtml(t(opts.lang, 'tool_unit_converter_category_label'))}">
            ${catButtons}
          </div>
        </div>
        <form id="ucForm">
          <div class="form-group">
            <label class="form-label" for="ucValue">${escapeHtml(t(opts.lang, 'tool_unit_converter_value_label'))}</label>
            <input id="ucValue" class="input-lg" type="number" step="any"
              placeholder="${escapeHtml(t(opts.lang, 'tool_unit_converter_value_ph'))}" required>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label" for="ucFrom">${escapeHtml(t(opts.lang, 'tool_unit_converter_from_label'))}</label>
              <select id="ucFrom" class="input-lg"></select>
            </div>
            <div class="form-group">
              <label class="form-label" for="ucTo">${escapeHtml(t(opts.lang, 'tool_unit_converter_to_label'))}</label>
              <select id="ucTo" class="input-lg"></select>
            </div>
          </div>
          <div class="btn-row">
            <button type="submit" class="btn btn-primary">${escapeHtml(t(opts.lang, 'tool_unit_converter_calculate'))}</button>
            <button type="button" id="ucSample" class="btn btn-outline-secondary">${escapeHtml(t(opts.lang, 'tool_unit_converter_sample'))}</button>
            <button type="button" id="ucClear" class="btn btn-outline-secondary">${escapeHtml(t(opts.lang, 'tool_unit_converter_clear'))}</button>
          </div>
        </form>
        <div id="ucResult" class="result" style="display:none" aria-live="polite">
          <div><strong>${escapeHtml(t(opts.lang, 'tool_unit_converter_result_label'))}:</strong> <span id="ucOut"></span></div>
          <div id="ucNote" class="muted"></div>
        </div>
      </div>
    </div>

    ${renderToolIgSections({ lang: opts.lang, prefix: 'tool_unit_converter', mode: 'formula' })}`;

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: t(opts.lang, 'tool_unit_converter_ref_nist_label'),
				href: 'https://www.nist.gov/pml/owm/metric-si/si-units',
			},
			{
				label: t(opts.lang, 'tool_unit_converter_ref_wiki_label'),
				href: 'https://en.wikipedia.org/wiki/Conversion_of_units',
			},
		],
	});

	const extraBodyHtml = `
  <script>
    (function () {
      /** 线性类别：单位 → 相对 SI 基准的乘数。 */
      var TABLES = {
        length: { m:1, cm:0.01, mm:0.001, km:1000, in:0.0254, ft:0.3048, yd:0.9144, mi:1609.344 },
        mass: { kg:1, g:0.001, mg:1e-6, lb:0.45359237, oz:0.028349523125, t:1000 },
        area: { 'm²':1, 'cm²':1e-4, 'km²':1e6, 'in²':0.00064516, 'ft²':0.09290304, 'yd²':0.83612736, acre:4046.8564224, ha:10000 },
        volume: { 'm³':1, L:0.001, mL:1e-6, gal:0.003785411784, qt:0.000946352946, 'ft³':0.028316846592, 'in³':1.6387064e-5 },
        speed: { 'm/s':1, 'km/h':1/3.6, mph:0.44704, kn:0.514444, 'ft/s':0.3048 },
        temperature: { '°C':1, '°F':1, K:1 }
      };
      var DEFAULT_PAIR = {
        length: ['mi', 'km'],
        mass: ['lb', 'kg'],
        temperature: ['°C', '°F'],
        area: ['ft²', 'm²'],
        volume: ['gal', 'L'],
        speed: ['mph', 'km/h']
      };
      var cat = 'length';
      var form = document.getElementById('ucForm');
      var valueEl = document.getElementById('ucValue');
      var fromEl = document.getElementById('ucFrom');
      var toEl = document.getElementById('ucTo');
      var result = document.getElementById('ucResult');
      var outEl = document.getElementById('ucOut');
      var noteEl = document.getElementById('ucNote');
      var msgVal = ${JSON.stringify(t(opts.lang, 'tool_unit_converter_err_value'))};
      var msgTemp = ${JSON.stringify(t(opts.lang, 'tool_unit_converter_err_temp'))};
      var noteEdu = ${JSON.stringify(t(opts.lang, 'tool_unit_converter_result_note'))};

      /** 填充源/目标单位下拉。 */
      function fillUnits(preserve) {
        var units = Object.keys(TABLES[cat]);
        var prevFrom = preserve ? fromEl.value : '';
        var prevTo = preserve ? toEl.value : '';
        fromEl.innerHTML = '';
        toEl.innerHTML = '';
        units.forEach(function (u) {
          var o1 = document.createElement('option');
          o1.value = u; o1.textContent = u;
          fromEl.appendChild(o1);
          var o2 = document.createElement('option');
          o2.value = u; o2.textContent = u;
          toEl.appendChild(o2);
        });
        var pair = DEFAULT_PAIR[cat];
        fromEl.value = units.indexOf(prevFrom) >= 0 ? prevFrom : pair[0];
        toEl.value = units.indexOf(prevTo) >= 0 ? prevTo : pair[1];
      }

      /** 温度：任意标度 → 摄氏。 */
      function toCelsius(v, unit) {
        if (unit === '°C') return v;
        if (unit === '°F') return (v - 32) * 5 / 9;
        if (unit === 'K') return v - 273.15;
        return NaN;
      }

      /** 摄氏 → 目标温度标度。 */
      function fromCelsius(c, unit) {
        if (unit === '°C') return c;
        if (unit === '°F') return c * 9 / 5 + 32;
        if (unit === 'K') return c + 273.15;
        return NaN;
      }

      /** 执行换算。 */
      function runCalc() {
        var v = parseFloat(valueEl.value);
        result.style.display = 'block';
        if (!Number.isFinite(v)) {
          outEl.textContent = '—';
          noteEl.textContent = msgVal;
          return false;
        }
        var from = fromEl.value;
        var to = toEl.value;
        var out;
        if (cat === 'temperature') {
          var c = toCelsius(v, from);
          if (!(c >= -273.15)) {
            outEl.textContent = '—';
            noteEl.textContent = msgTemp;
            return false;
          }
          out = fromCelsius(c, to);
        } else {
          var table = TABLES[cat];
          out = (v * table[from]) / table[to];
        }
        if (!Number.isFinite(out)) {
          outEl.textContent = '—';
          noteEl.textContent = msgVal;
          return false;
        }
        /** 避免 toPrecision 尾零把 10 变成 1。 */
        var abs = Math.abs(out);
        var text = (!abs || (abs >= 1e-4 && abs < 1e7))
          ? String(Number(out.toPrecision(10)))
          : out.toExponential(6);
        outEl.textContent = text + ' ' + to;
        noteEl.textContent = noteEdu;
        return true;
      }

      /** 加载当前类别默认样例。 */
      function loadSample() {
        var pair = DEFAULT_PAIR[cat];
        fromEl.value = pair[0];
        toEl.value = pair[1];
        valueEl.value = cat === 'temperature' ? '0' : '1';
        runCalc();
      }

      document.querySelectorAll('.uc-cat').forEach(function (btn) {
        btn.addEventListener('click', function () {
          document.querySelectorAll('.uc-cat').forEach(function (b) { b.classList.remove('active'); });
          btn.classList.add('active');
          cat = btn.getAttribute('data-cat');
          fillUnits(false);
          loadSample();
        });
      });

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        runCalc();
      });
      document.getElementById('ucSample').addEventListener('click', loadSample);
      document.getElementById('ucClear').addEventListener('click', function () {
        form.reset();
        fillUnits(false);
        result.style.display = 'none';
      });
      fillUnits(false);
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('unit-converter');
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
