/**
 * 置信区间计算器 计算器工具页。
 * slug: how-to-calculate-confidence-interval（见 work-tasks/how-to-calculate-confidence-interval/02-tool-info.md）。
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
 * 渲染 how-to-calculate-confidence-interval 工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderHowToCalculateConfidenceIntervalPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/how-to-calculate-confidence-interval';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_confidence_interval_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_confidence_interval_description');

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
			currentSlug: 'how-to-calculate-confidence-interval',
			currentAnchor: '#confidence-interval',
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
    <div id="confidence-interval" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(t(opts.lang, 'tool_confidence_interval_title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <form id="calcForm">
          <div class="form-row">

          <div class="form-group form-half">
            <label class="form-label" for="mean">${escapeHtml(t(opts.lang, 'tool_confidence_interval_mean_label'))}</label>
            <input id="mean" class="input-lg" type="number" step="any"
              placeholder="${escapeHtml(t(opts.lang, 'tool_confidence_interval_mean_ph'))}">
          </div>

          <div class="form-group form-half">
            <label class="form-label" for="sd">${escapeHtml(t(opts.lang, 'tool_confidence_interval_sd_label'))}</label>
            <input id="sd" class="input-lg" type="number" step="any"
              placeholder="${escapeHtml(t(opts.lang, 'tool_confidence_interval_sd_ph'))}">
          </div>

          <div class="form-group form-half">
            <label class="form-label" for="n">${escapeHtml(t(opts.lang, 'tool_confidence_interval_n_label'))}</label>
            <input id="n" class="input-lg" type="number" step="any"
              placeholder="${escapeHtml(t(opts.lang, 'tool_confidence_interval_n_ph'))}">
          </div>

          <div class="form-group form-half">
            <label class="form-label" for="conf">${escapeHtml(t(opts.lang, 'tool_confidence_interval_conf_label'))}</label>
            <select id="conf" class="input-lg">
              <option value="90">${escapeHtml(t(opts.lang, 'tool_confidence_interval_conf_90'))}</option>
              <option value="95" selected>${escapeHtml(t(opts.lang, 'tool_confidence_interval_conf_95'))}</option>
              <option value="99">${escapeHtml(t(opts.lang, 'tool_confidence_interval_conf_99'))}</option>
            </select>
          </div>
          </div>
          <div class="btn-row">
            <button type="submit" class="btn btn-primary">${escapeHtml(t(opts.lang, 'tool_confidence_interval_calculate'))}</button>
            <button type="button" id="btnSample" class="btn btn-outline-secondary">${escapeHtml(t(opts.lang, 'tool_confidence_interval_sample'))}</button>
            <button type="button" id="btnClear" class="btn btn-outline-secondary">${escapeHtml(t(opts.lang, 'tool_confidence_interval_clear'))}</button>
          </div>
        </form>
        <div id="calcResult" class="result" style="display:none" aria-live="polite">
          <div><strong>${escapeHtml(t(opts.lang, 'tool_confidence_interval_lowerOut_label'))}:</strong> <span id="lowerOut"></span></div>
          <div class="muted"><strong>${escapeHtml(t(opts.lang, 'tool_confidence_interval_upperOut_label'))}:</strong> <span id="upperOut"></span></div>
          <div class="muted"><strong>${escapeHtml(t(opts.lang, 'tool_confidence_interval_seOut_label'))}:</strong> <span id="seOut"></span></div>
          <div class="muted"><strong>${escapeHtml(t(opts.lang, 'tool_confidence_interval_marginOut_label'))}:</strong> <span id="marginOut"></span></div>
          <div id="calcNote" class="muted"></div>
        </div>
      </div>
    </div>

    ${renderToolIgSections({ lang: opts.lang, prefix: 'tool_confidence_interval', mode: 'formula' })}`;

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: t(opts.lang, 'tool_confidence_interval_ref_ci_label'),
				href: 'https://en.wikipedia.org/wiki/Confidence_interval',
			},
			{
				label: t(opts.lang, 'tool_confidence_interval_ref_se_label'),
				href: 'https://en.wikipedia.org/wiki/Standard_error',
			}
		],
	});

	const extraBodyHtml = `
  <script>
    (function () {
      var form = document.getElementById('calcForm');
      var result = document.getElementById('calcResult');
      var noteEl = document.getElementById('calcNote');
      var meanEl = document.getElementById('mean');
      var sdEl = document.getElementById('sd');
      var nEl = document.getElementById('n');
      var confEl = document.getElementById('conf');
      var lowerOutEl = document.getElementById('lowerOut');
      var upperOutEl = document.getElementById('upperOut');
      var seOutEl = document.getElementById('seOut');
      var marginOutEl = document.getElementById('marginOut');
      var msgErr = ${JSON.stringify(t(opts.lang, 'tool_confidence_interval_err_generic'))};
      var noteEdu = ${JSON.stringify(t(opts.lang, 'tool_confidence_interval_result_note'))};

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

        var mean = parseFloat(meanEl.value);
        var sd = parseFloat(sdEl.value);
        var n = parseFloat(nEl.value);
        var conf = confEl.value;
        var zMap = { '90': 1.645, '95': 1.96, '99': 2.576 };
        var zc = zMap[conf];
        if (!Number.isFinite(mean) || !(sd > 0) || !(n >= 2) || !zc) {
          return { ok: false, error: msgErr };
        }
        var se = sd / Math.sqrt(n);
        var margin = zc * se;
        return {
          ok: true,
          values: {
            lowerOut: fmt(mean - margin),
            upperOut: fmt(mean + margin),
            seOut: fmt(se),
            marginOut: fmt(margin)
          }
        };

      }

      /** 执行计算并刷新结果区。 */
      function runCalc() {
        var out = compute();
        result.style.display = 'block';
        if (!out || !out.ok) {
          lowerOutEl.textContent = '—';
          upperOutEl.textContent = '—';
          seOutEl.textContent = '—';
          marginOutEl.textContent = '—';
          noteEl.textContent = (out && out.error) || msgErr;
          return false;
        }
        var v = out.values || {};
        lowerOutEl.textContent = v.lowerOut != null ? String(v.lowerOut) : '—';
        upperOutEl.textContent = v.upperOut != null ? String(v.upperOut) : '—';
        seOutEl.textContent = v.seOut != null ? String(v.seOut) : '—';
        marginOutEl.textContent = v.marginOut != null ? String(v.marginOut) : '—';
        noteEl.textContent = noteEdu;
        return true;
      }

      /** 加载进页样例。 */
      function loadSample() {

        meanEl.value = '50';
        sdEl.value = '10';
        nEl.value = '100';
        confEl.value = '95';

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

	const toolMeta = getToolBySlug('how-to-calculate-confidence-interval');
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
