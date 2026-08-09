/**
 * IRR 计算器 计算器工具页。
 * slug: how-to-calculate-irr（见 work-tasks/how-to-calculate-irr/02-tool-info.md）。
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
 * 渲染 how-to-calculate-irr 工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderHowToCalculateIrrPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/how-to-calculate-irr';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_irr_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_irr_description');

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
			currentSlug: 'how-to-calculate-irr',
			currentAnchor: '#irr',
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
    <div id="irr" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(t(opts.lang, 'tool_irr_title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <form id="calcForm">
          <div class="form-row">

          <div class="form-group" style="grid-column:1/-1">
            <label class="form-label" for="cf">${escapeHtml(t(opts.lang, 'tool_irr_cf_label'))}</label>
            <textarea id="cf" class="input-lg" rows="5"
              placeholder="${escapeHtml(t(opts.lang, 'tool_irr_cf_ph'))}" style="min-height:6rem;resize:vertical;font-family:inherit"></textarea>
          </div>
          </div>
          <div class="btn-row">
            <button type="submit" class="btn btn-primary">${escapeHtml(t(opts.lang, 'tool_irr_calculate'))}</button>
            <button type="button" id="btnSample" class="btn btn-outline-secondary">${escapeHtml(t(opts.lang, 'tool_irr_sample'))}</button>
            <button type="button" id="btnClear" class="btn btn-outline-secondary">${escapeHtml(t(opts.lang, 'tool_irr_clear'))}</button>
          </div>
        </form>
        <div id="calcResult" class="result" style="display:none" aria-live="polite">
          <div><strong>${escapeHtml(t(opts.lang, 'tool_irr_irrOut_label'))}:</strong> <span id="irrOut"></span></div>
          <div id="calcNote" class="muted"></div>
        </div>
      </div>
    </div>

    ${renderToolIgSections({ lang: opts.lang, prefix: 'tool_irr', mode: 'formula' })}`;

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: t(opts.lang, 'tool_irr_ref_a_label'),
				href: 'https://www.investopedia.com/terms/i/irr.asp',
			},
			{
				label: t(opts.lang, 'tool_irr_ref_b_label'),
				href: 'https://www.investopedia.com/terms/n/npv.asp',
			}
		],
	});

	const extraBodyHtml = `
  <script>
    (function () {
      var form = document.getElementById('calcForm');
      var result = document.getElementById('calcResult');
      var noteEl = document.getElementById('calcNote');
      var cfEl = document.getElementById('cf');
      var irrOutEl = document.getElementById('irrOut');
      var msgErr = ${JSON.stringify(t(opts.lang, 'tool_irr_err_generic'))};
      var noteEdu = ${JSON.stringify(t(opts.lang, 'tool_irr_result_note'))};

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

        var parts = String(cfEl.value||'').split(/[s,;，、]+/).filter(Boolean);
        var flows = [];
        for (var i=0;i<parts.length;i++){ var v=parseFloat(parts[i]); if(!Number.isFinite(v)) return {ok:false,error:msgErr}; flows.push(v); }
        if (flows.length < 2) return {ok:false,error:msgErr};
        function npv(r){ var s=0; for (var t=0;t<flows.length;t++) s += flows[t]/Math.pow(1+r,t); return s; }
        function dnpv(r){ var s=0; for (var t=1;t<flows.length;t++) s += -t*flows[t]/Math.pow(1+r,t+1); return s; }
        var r = 0.1;
        for (var k=0;k<50;k++){
          var f = npv(r), df = dnpv(r);
          if (!Number.isFinite(f) || !Number.isFinite(df) || Math.abs(df) < 1e-12) break;
          var nr = r - f/df;
          if (!Number.isFinite(nr) || nr <= -0.999999) break;
          if (Math.abs(nr - r) < 1e-10) { r = nr; break; }
          r = nr;
        }
        if (!Number.isFinite(r) || Math.abs(npv(r)) > 1e-3) return {ok:false,error:msgErr};
        return { ok:true, values:{ irrOut: fmt(r*100) + '%' } };

      }

      /** 执行计算并刷新结果区。 */
      function runCalc() {
        var out = compute();
        result.style.display = 'block';
        if (!out || !out.ok) {
          irrOutEl.textContent = '—';
          noteEl.textContent = (out && out.error) || msgErr;
          return false;
        }
        var v = out.values || {};
        irrOutEl.textContent = v.irrOut != null ? String(v.irrOut) : '—';
        noteEl.textContent = noteEdu;
        return true;
      }

      /** 加载进页样例。 */
      function loadSample() {

        cfEl.value='-1000, 300, 420, 680';

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

	const toolMeta = getToolBySlug('how-to-calculate-irr');
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
