/**
 * 体积计算器 计算器工具页。
 * slug: how-to-calculate-volume（见 work-tasks/how-to-calculate-volume/02-tool-info.md）。
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
 * 渲染 how-to-calculate-volume 工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderHowToCalculateVolumePage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/how-to-calculate-volume';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_volume_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_volume_description');

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
			currentSlug: 'how-to-calculate-volume',
			currentAnchor: '#volume',
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
    .form-half { }
    @media (max-width:576px) { .form-row { grid-template-columns:1fr; } }
    .btn-row { display:flex; flex-wrap:wrap; gap:.5rem; align-items:center; }
    .result { background:#f8f9fa; padding:1rem; border-radius:8px; margin-top:1rem; text-align:center }
    .result .muted { color:#6c757d; font-size:.9rem; margin-top:.35rem }
  </style>`;

	const contentHtml = `
    <div id="volume" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(t(opts.lang, 'tool_volume_title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <form id="calcForm">
          <div class="form-row">

          <div class="form-group form-half">
            <label class="form-label" for="shape">${escapeHtml(t(opts.lang, 'tool_volume_shape_label'))}</label>
            <select id="shape" class="input-lg">
              <option value="box" selected>${escapeHtml(t(opts.lang, 'tool_volume_shape_box'))}</option>
              <option value="sphere">${escapeHtml(t(opts.lang, 'tool_volume_shape_sphere'))}</option>
            </select>
          </div>

          <div class="form-group form-half">
            <label class="form-label" for="l">${escapeHtml(t(opts.lang, 'tool_volume_l_label'))}</label>
            <input id="l" class="input-lg" type="number" step="any" placeholder="${escapeHtml(t(opts.lang, 'tool_volume_l_ph'))}">
          </div>

          <div class="form-group form-half">
            <label class="form-label" for="w">${escapeHtml(t(opts.lang, 'tool_volume_w_label'))}</label>
            <input id="w" class="input-lg" type="number" step="any" placeholder="${escapeHtml(t(opts.lang, 'tool_volume_w_ph'))}">
          </div>

          <div class="form-group form-half">
            <label class="form-label" for="h">${escapeHtml(t(opts.lang, 'tool_volume_h_label'))}</label>
            <input id="h" class="input-lg" type="number" step="any" placeholder="${escapeHtml(t(opts.lang, 'tool_volume_h_ph'))}">
          </div>

          <div class="form-group form-half">
            <label class="form-label" for="radius">${escapeHtml(t(opts.lang, 'tool_volume_radius_label'))}</label>
            <input id="radius" class="input-lg" type="number" step="any" placeholder="${escapeHtml(t(opts.lang, 'tool_volume_radius_ph'))}">
          </div>
          </div>
          <div class="btn-row">
            <button type="submit" class="btn btn-primary">${escapeHtml(t(opts.lang, 'tool_volume_calculate'))}</button>
            <button type="button" id="btnSample" class="btn btn-outline-secondary">${escapeHtml(t(opts.lang, 'tool_volume_sample'))}</button>
            <button type="button" id="btnClear" class="btn btn-outline-secondary">${escapeHtml(t(opts.lang, 'tool_volume_clear'))}</button>
          </div>
        </form>
        <div id="calcResult" class="result" style="display:none" aria-live="polite">
          <div><strong>${escapeHtml(t(opts.lang, 'tool_volume_volOut_label'))}:</strong> <span id="volOut"></span></div>
          <div id="calcNote" class="muted"></div>
        </div>
      </div>
    </div>

    ${renderToolIgSections({ lang: opts.lang, prefix: 'tool_volume', mode: 'formula' })}`;

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: t(opts.lang, 'tool_volume_ref_a_label'),
				href: 'https://en.wikipedia.org/wiki/Volume',
			},
			{
				label: t(opts.lang, 'tool_volume_ref_b_label'),
				href: 'https://en.wikipedia.org/wiki/Sphere',
			}
		],
	});

	const extraBodyHtml = `
  <script>
    (function () {
      var form = document.getElementById('calcForm');
      var result = document.getElementById('calcResult');
      var noteEl = document.getElementById('calcNote');
      var shapeEl = document.getElementById('shape');
      var lEl = document.getElementById('l');
      var wEl = document.getElementById('w');
      var hEl = document.getElementById('h');
      var radiusEl = document.getElementById('radius');
      var volOutEl = document.getElementById('volOut');
      var msgErr = ${JSON.stringify(t(opts.lang, 'tool_volume_err_generic'))};
      var noteEdu = ${JSON.stringify(t(opts.lang, 'tool_volume_result_note'))};

      /** 格式化数字（默认 2 位小数）。 */
      function fmt(n, d) {
        d = d == null ? 2 : d;
        return Number.isFinite(n) ? n.toFixed(d) : '—';
      }

      /**
       * 核心计算（由工具定义注入）。
       * @returns {{ ok: boolean, error?: string, values?: Record<string, string|number> }}
       */
      function compute() {

        var shape=shapeEl.value;
        if(shape==='sphere'){
          var radius=parseFloat(radiusEl.value);
          if(!(radius>0)) return {ok:false,error:msgErr};
          return {ok:true, values:{ volOut:fmt((4/3)*Math.PI*radius*radius*radius) }};
        }
        var L=parseFloat(lEl.value), W=parseFloat(wEl.value), H=parseFloat(hEl.value);
        if(!(L>0)||!(W>0)||!(H>0)) return {ok:false,error:msgErr};
        return {ok:true, values:{ volOut:fmt(L*W*H) }};

      }

      /** 执行计算并刷新结果区。 */
      function runCalc() {
        var out = compute();
        result.style.display = 'block';
        if (!out || !out.ok) {
          volOutEl.textContent = '—';
          noteEl.textContent = (out && out.error) || msgErr;
          return false;
        }
        var v = out.values || {};
        volOutEl.textContent = v.volOut != null ? String(v.volOut) : '—';
        noteEl.textContent = noteEdu;
        return true;
      }

      /** 加载进页样例。 */
      function loadSample() {

        shapeEl.value='box';
        lEl.value='2';
        wEl.value='3';
        hEl.value='4';

        runCalc();
      }

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        runCalc();
      });
      document.getElementById('btnSample').addEventListener('click', loadSample);
      document.getElementById('btnClear').addEventListener('click', function () {
        form.reset();
        result.style.display = 'none';
      });
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('how-to-calculate-volume');
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
