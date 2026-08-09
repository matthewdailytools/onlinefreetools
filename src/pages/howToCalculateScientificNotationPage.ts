/**
 * 科学计数法计算器 计算器工具页。
 * slug: how-to-calculate-scientific-notation（见 work-tasks/how-to-calculate-scientific-notation/02-tool-info.md）。
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
 * 渲染 how-to-calculate-scientific-notation 工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderHowToCalculateScientificNotationPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/how-to-calculate-scientific-notation';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_scientific_notation_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_scientific_notation_description');

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
			currentSlug: 'how-to-calculate-scientific-notation',
			currentAnchor: '#scientific-notation',
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
    <div id="scientific-notation" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(t(opts.lang, 'tool_scientific_notation_title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <form id="calcForm">
          <div class="form-row">

          <div class="form-group form-half">
            <label class="form-label" for="mode">${escapeHtml(t(opts.lang, 'tool_scientific_notation_mode_label'))}</label>
            <select id="mode" class="input-lg">
              <option value="toSci" selected>${escapeHtml(t(opts.lang, 'tool_scientific_notation_mode_toSci'))}</option>
              <option value="toDec">${escapeHtml(t(opts.lang, 'tool_scientific_notation_mode_toDec'))}</option>
            </select>
          </div>

          <div class="form-group form-half">
            <label class="form-label" for="value">${escapeHtml(t(opts.lang, 'tool_scientific_notation_value_label'))}</label>
            <input id="value" class="input-lg" type="text"
              placeholder="${escapeHtml(t(opts.lang, 'tool_scientific_notation_value_ph'))}">
          </div>
          </div>
          <div class="btn-row">
            <button type="submit" class="btn btn-primary">${escapeHtml(t(opts.lang, 'tool_scientific_notation_calculate'))}</button>
            <button type="button" id="btnSample" class="btn btn-outline-secondary">${escapeHtml(t(opts.lang, 'tool_scientific_notation_sample'))}</button>
            <button type="button" id="btnClear" class="btn btn-outline-secondary">${escapeHtml(t(opts.lang, 'tool_scientific_notation_clear'))}</button>
          </div>
        </form>
        <div id="calcResult" class="result" style="display:none" aria-live="polite">
          <div><strong>${escapeHtml(t(opts.lang, 'tool_scientific_notation_resultOut_label'))}:</strong> <span id="resultOut"></span></div>
          <div class="muted"><strong>${escapeHtml(t(opts.lang, 'tool_scientific_notation_coeffOut_label'))}:</strong> <span id="coeffOut"></span></div>
          <div class="muted"><strong>${escapeHtml(t(opts.lang, 'tool_scientific_notation_expOut_label'))}:</strong> <span id="expOut"></span></div>
          <div id="calcNote" class="muted"></div>
        </div>
      </div>
    </div>

    ${renderToolIgSections({ lang: opts.lang, prefix: 'tool_scientific_notation', mode: 'formula' })}`;

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: t(opts.lang, 'tool_scientific_notation_ref_sci_label'),
				href: 'https://en.wikipedia.org/wiki/Scientific_notation',
			},
			{
				label: t(opts.lang, 'tool_scientific_notation_ref_exp_label'),
				href: 'https://en.wikipedia.org/wiki/Exponentiation',
			}
		],
	});

	const extraBodyHtml = `
  <script>
    (function () {
      var form = document.getElementById('calcForm');
      var result = document.getElementById('calcResult');
      var noteEl = document.getElementById('calcNote');
      var modeEl = document.getElementById('mode');
      var valueEl = document.getElementById('value');
      var resultOutEl = document.getElementById('resultOut');
      var coeffOutEl = document.getElementById('coeffOut');
      var expOutEl = document.getElementById('expOut');
      var msgErr = ${JSON.stringify(t(opts.lang, 'tool_scientific_notation_err_generic'))};
      var noteEdu = ${JSON.stringify(t(opts.lang, 'tool_scientific_notation_result_note'))};

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

        /** 解析科学计数字符串（e / E / ×10^ / *10^）。 */
        function parseSci(raw) {
          var s = String(raw).trim().replace(/,/g, '').replace(/\\s+/g, '');
          s = s.replace(/[×xX]/g, '*');
          var m = s.match(/^([+-]?(?:\\d+\\.?\\d*|\\.\\d+))(?:[eE]|\\*10\\^)([+-]?\\d+)$/);
          if (m) {
            var a = parseFloat(m[1]);
            var b = parseInt(m[2], 10);
            if (!Number.isFinite(a) || !Number.isFinite(b)) return null;
            return a * Math.pow(10, b);
          }
          var n = Number(s);
          return Number.isFinite(n) ? n : null;
        }
        /** 归一化为 a×10^b。 */
        function toSciParts(n) {
          if (n === 0) return { a: 0, b: 0, text: '0×10^0' };
          var sign = n < 0 ? -1 : 1;
          var abs = Math.abs(n);
          var b = Math.floor(Math.log10(abs));
          var a = sign * (abs / Math.pow(10, b));
          if (Math.abs(a) >= 10) { a /= 10; b += 1; }
          if (Math.abs(a) < 1) { a *= 10; b -= 1; }
          var aStr = String(parseFloat(a.toPrecision(12)));
          return { a: parseFloat(aStr), b: b, text: aStr + '×10^' + b };
        }
        var mode = modeEl.value;
        var raw = String(valueEl.value || '').trim();
        if (!raw) return { ok: false, error: msgErr };
        if (mode === 'toSci') {
          var n = Number(raw.replace(/,/g, ''));
          if (!Number.isFinite(n)) return { ok: false, error: msgErr };
          var parts = toSciParts(n);
          return { ok: true, values: { resultOut: parts.text, coeffOut: fmt(parts.a, 6), expOut: String(parts.b) } };
        }
        var dec = parseSci(raw);
        if (dec == null || !Number.isFinite(dec)) return { ok: false, error: msgErr };
        var back = toSciParts(dec);
        return { ok: true, values: { resultOut: String(dec), coeffOut: fmt(back.a, 6), expOut: String(back.b) } };

      }

      /** 执行计算并刷新结果区。 */
      function runCalc() {
        var out = compute();
        result.style.display = 'block';
        if (!out || !out.ok) {
          resultOutEl.textContent = '—';
          coeffOutEl.textContent = '—';
          expOutEl.textContent = '—';
          noteEl.textContent = (out && out.error) || msgErr;
          return false;
        }
        var v = out.values || {};
        resultOutEl.textContent = v.resultOut != null ? String(v.resultOut) : '—';
        coeffOutEl.textContent = v.coeffOut != null ? String(v.coeffOut) : '—';
        expOutEl.textContent = v.expOut != null ? String(v.expOut) : '—';
        noteEl.textContent = noteEdu;
        return true;
      }

      /** 加载进页样例。 */
      function loadSample() {

        modeEl.value = 'toSci';
        valueEl.value = '12300';

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

	const toolMeta = getToolBySlug('how-to-calculate-scientific-notation');
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
