/**
 * 勾股定理计算器 计算器工具页。
 * slug: how-to-calculate-pythagorean-theorem（见 work-tasks/how-to-calculate-pythagorean-theorem/02-tool-info.md）。
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
 * 渲染 how-to-calculate-pythagorean-theorem 工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderHowToCalculatePythagoreanTheoremPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/how-to-calculate-pythagorean-theorem';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_pythagorean_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_pythagorean_description');

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
			currentSlug: 'how-to-calculate-pythagorean-theorem',
			currentAnchor: '#pythagorean-theorem',
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
    <div id="pythagorean-theorem" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(t(opts.lang, 'tool_pythagorean_title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <form id="calcForm">
          <div class="form-row">

          <div class="form-group form-half">
            <label class="form-label" for="solve">${escapeHtml(t(opts.lang, 'tool_pythagorean_solve_label'))}</label>
            <select id="solve" class="input-lg">
              <option value="c" selected>${escapeHtml(t(opts.lang, 'tool_pythagorean_solve_c'))}</option>
              <option value="a">${escapeHtml(t(opts.lang, 'tool_pythagorean_solve_a'))}</option>
              <option value="b">${escapeHtml(t(opts.lang, 'tool_pythagorean_solve_b'))}</option>
            </select>
          </div>

          <div class="form-group form-half">
            <label class="form-label" for="known1">${escapeHtml(t(opts.lang, 'tool_pythagorean_known1_label'))}</label>
            <input id="known1" class="input-lg" type="number" step="any"
              placeholder="${escapeHtml(t(opts.lang, 'tool_pythagorean_known1_ph'))}">
          </div>

          <div class="form-group form-half">
            <label class="form-label" for="known2">${escapeHtml(t(opts.lang, 'tool_pythagorean_known2_label'))}</label>
            <input id="known2" class="input-lg" type="number" step="any"
              placeholder="${escapeHtml(t(opts.lang, 'tool_pythagorean_known2_ph'))}">
          </div>
          </div>
          <div class="btn-row">
            <button type="submit" class="btn btn-primary">${escapeHtml(t(opts.lang, 'tool_pythagorean_calculate'))}</button>
            <button type="button" id="btnSample" class="btn btn-outline-secondary">${escapeHtml(t(opts.lang, 'tool_pythagorean_sample'))}</button>
            <button type="button" id="btnClear" class="btn btn-outline-secondary">${escapeHtml(t(opts.lang, 'tool_pythagorean_clear'))}</button>
          </div>
        </form>
        <div id="calcResult" class="result" style="display:none" aria-live="polite">
          <div><strong>${escapeHtml(t(opts.lang, 'tool_pythagorean_sideOut_label'))}:</strong> <span id="sideOut"></span></div>
          <div id="calcNote" class="muted"></div>
        </div>
      </div>
    </div>

    ${renderToolIgSections({ lang: opts.lang, prefix: 'tool_pythagorean', mode: 'formula' })}`;

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: t(opts.lang, 'tool_pythagorean_ref_py_label'),
				href: 'https://en.wikipedia.org/wiki/Pythagorean_theorem',
			},
			{
				label: t(opts.lang, 'tool_pythagorean_ref_rt_label'),
				href: 'https://en.wikipedia.org/wiki/Right_triangle',
			}
		],
	});

	const extraBodyHtml = `
  <script>
    (function () {
      var form = document.getElementById('calcForm');
      var result = document.getElementById('calcResult');
      var noteEl = document.getElementById('calcNote');
      var solveEl = document.getElementById('solve');
      var known1El = document.getElementById('known1');
      var known2El = document.getElementById('known2');
      var sideOutEl = document.getElementById('sideOut');
      var msgErr = ${JSON.stringify(t(opts.lang, 'tool_pythagorean_err_generic'))};
      var noteEdu = ${JSON.stringify(t(opts.lang, 'tool_pythagorean_result_note'))};

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

        var solve = solveEl.value;
        var k1 = parseFloat(known1El.value);
        var k2 = parseFloat(known2El.value);
        if (!(k1 > 0) || !(k2 > 0) || !Number.isFinite(k1) || !Number.isFinite(k2)) {
          return { ok: false, error: msgErr };
        }
        var out;
        if (solve === 'c') {
          out = Math.sqrt(k1 * k1 + k2 * k2);
        } else if (solve === 'a') {
          if (!(k2 > k1)) return { ok: false, error: msgErr };
          out = Math.sqrt(k2 * k2 - k1 * k1);
        } else {
          if (!(k2 > k1)) return { ok: false, error: msgErr };
          out = Math.sqrt(k2 * k2 - k1 * k1);
        }
        if (!Number.isFinite(out) || !(out > 0)) return { ok: false, error: msgErr };
        return { ok: true, values: { sideOut: fmt(out, 6) } };

      }

      /** 执行计算并刷新结果区。 */
      function runCalc() {
        var out = compute();
        result.style.display = 'block';
        if (!out || !out.ok) {
          sideOutEl.textContent = '—';
          noteEl.textContent = (out && out.error) || msgErr;
          return false;
        }
        var v = out.values || {};
        sideOutEl.textContent = v.sideOut != null ? String(v.sideOut) : '—';
        noteEl.textContent = noteEdu;
        return true;
      }

      /** 加载进页样例。 */
      function loadSample() {

        solveEl.value = 'c';
        known1El.value = '3';
        known2El.value = '4';

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

	const toolMeta = getToolBySlug('how-to-calculate-pythagorean-theorem');
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
