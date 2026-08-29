/**
 * 有效数字计算器 计算器工具页。
 * slug: how-to-calculate-significant-figures（见 work-tasks/how-to-calculate-significant-figures/02-tool-info.md）。
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
 * 渲染 how-to-calculate-significant-figures 工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderHowToCalculateSignificantFiguresPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/how-to-calculate-significant-figures';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_significant_figures_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_significant_figures_description');

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
			currentSlug: 'how-to-calculate-significant-figures',
			currentAnchor: '#significant-figures',
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
    <div id="significant-figures" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(t(opts.lang, 'tool_significant_figures_title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <form id="calcForm">
          <div class="form-row">

          <div class="form-group form-half">
            <label class="form-label" for="mode">${escapeHtml(t(opts.lang, 'tool_significant_figures_mode_label'))}</label>
            <select id="mode" class="input-lg">
              <option value="count" selected>${escapeHtml(t(opts.lang, 'tool_significant_figures_mode_count'))}</option>
              <option value="round">${escapeHtml(t(opts.lang, 'tool_significant_figures_mode_round'))}</option>
            </select>
          </div>

          <div class="form-group form-half">
            <label class="form-label" for="num">${escapeHtml(t(opts.lang, 'tool_significant_figures_num_label'))}</label>
            <input id="num" class="input-lg" type="text"
              placeholder="${escapeHtml(t(opts.lang, 'tool_significant_figures_num_ph'))}">
          </div>

          <div class="form-group form-half">
            <label class="form-label" for="n">${escapeHtml(t(opts.lang, 'tool_significant_figures_n_label'))}</label>
            <input id="n" class="input-lg" type="number" step="any"
              placeholder="${escapeHtml(t(opts.lang, 'tool_significant_figures_n_ph'))}">
          </div>
          </div>
          <div class="btn-row">
            <button type="submit" class="btn btn-primary">${escapeHtml(t(opts.lang, 'tool_significant_figures_calculate'))}</button>
            <button type="button" id="btnSample" class="btn btn-outline-secondary">${escapeHtml(t(opts.lang, 'tool_significant_figures_sample'))}</button>
            <button type="button" id="btnClear" class="btn btn-outline-secondary">${escapeHtml(t(opts.lang, 'tool_significant_figures_clear'))}</button>
          </div>
        </form>
        <div id="calcResult" class="result" style="display:none" aria-live="polite">
          <div><strong>${escapeHtml(t(opts.lang, 'tool_significant_figures_countOut_label'))}:</strong> <span id="countOut"></span></div>
          <div class="muted"><strong>${escapeHtml(t(opts.lang, 'tool_significant_figures_roundedOut_label'))}:</strong> <span id="roundedOut"></span></div>
          <div class="muted"><strong>${escapeHtml(t(opts.lang, 'tool_significant_figures_sciOut_label'))}:</strong> <span id="sciOut"></span></div>
          <div id="calcNote" class="muted"></div>
        </div>
      </div>
    </div>

    ${renderToolIgSections({ lang: opts.lang, prefix: 'tool_significant_figures', mode: 'formula' })}`;

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: t(opts.lang, 'tool_significant_figures_ref_sig_label'),
				href: 'https://en.wikipedia.org/wiki/Significant_figures',
			},
			{
				label: t(opts.lang, 'tool_significant_figures_ref_round_label'),
				href: 'https://en.wikipedia.org/wiki/Rounding',
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
      var numEl = document.getElementById('num');
      var nEl = document.getElementById('n');
      var countOutEl = document.getElementById('countOut');
      var roundedOutEl = document.getElementById('roundedOut');
      var sciOutEl = document.getElementById('sciOut');
      var msgErr = ${JSON.stringify(t(opts.lang, 'tool_significant_figures_err_generic'))};
      var noteEdu = ${JSON.stringify(t(opts.lang, 'tool_significant_figures_result_note'))};

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

        /** 从数字字符串计数有效数字（科学计数看系数；整数末尾 0 无小数点不计）。 */
        function countSigFigs(raw) {
          var s = String(raw).trim().replace(/,/g, '');
          if (!s) return null;
          var em = s.match(/^([+-]?(?:\\d+\\.?\\d*|\\.\\d+))[eE]([+-]?\\d+)$/);
          if (em) s = em[1];
          s = s.replace(/^[+-]/, '');
          if (!/^\\d*\\.?\\d+$/.test(s)) return null;
          if (/^0*\\.?0*$/.test(s)) return 1;
          var t = s.replace(/^0+/, '');
          if (t.charAt(0) === '.') {
            t = t.replace(/^\\.0*/, '');
            return t.replace(/\\./g, '').length;
          }
          if (t.indexOf('.') >= 0) {
            return t.replace(/\\./g, '').length;
          }
          return t.replace(/0+$/, '').length || 1;
        }

        /** 半远离零（正数等同 half-up）修约到 n 位有效数字。 */
        function roundSig(num, n) {
          if (!Number.isFinite(num) || !(n >= 1) || n > 15) return null;
          if (num === 0) return { rounded: '0', sci: '0e0' };
          var sign = num < 0 ? -1 : 1;
          var abs = Math.abs(num);
          var exp = Math.floor(Math.log10(abs));
          var mant = abs / Math.pow(10, exp);
          var factor = Math.pow(10, n - 1);
          var scaled = mant * factor;
          var roundedScaled = Math.floor(scaled + 0.5);
          var roundedMant = roundedScaled / factor;
          if (roundedMant >= 10) {
            roundedMant /= 10;
            exp += 1;
          }
          var value = sign * roundedMant * Math.pow(10, exp);
          var sciMant = roundedMant.toFixed(n - 1);
          var sci = (sign < 0 ? '-' : '') + sciMant + 'e' + exp;
          var rounded;
          if (exp >= n - 1) {
            rounded = String(Math.round(value));
          } else if (exp >= 0) {
            rounded = value.toFixed(n - 1 - exp);
          } else {
            rounded = value.toFixed(n - 1 - exp);
          }
          if (sign < 0 && rounded.charAt(0) !== '-') rounded = '-' + rounded;
          return { rounded: rounded, sci: sci };
        }

        var mode = modeEl.value;
        var raw = String(numEl.value || '').trim();
        if (!raw) return { ok: false, error: msgErr };
        if (mode === 'count') {
          var c = countSigFigs(raw);
          if (c == null) return { ok: false, error: msgErr };
          return { ok: true, values: { countOut: String(c), roundedOut: '—', sciOut: '—' } };
        }
        var n = parseInt(nEl.value, 10);
        var x = Number(raw.replace(/,/g, ''));
        if (!Number.isFinite(x) || !(n >= 1)) return { ok: false, error: msgErr };
        var r = roundSig(x, n);
        if (!r) return { ok: false, error: msgErr };
        return { ok: true, values: { countOut: '—', roundedOut: r.rounded, sciOut: r.sci } };

      }

      /** 执行计算并刷新结果区。 */
      function runCalc() {
        var out = compute();
        result.style.display = 'block';
        if (!out || !out.ok) {
          countOutEl.textContent = '—';
          roundedOutEl.textContent = '—';
          sciOutEl.textContent = '—';
          noteEl.textContent = (out && out.error) || msgErr;
          return false;
        }
        var v = out.values || {};
        countOutEl.textContent = v.countOut != null ? String(v.countOut) : '—';
        roundedOutEl.textContent = v.roundedOut != null ? String(v.roundedOut) : '—';
        sciOutEl.textContent = v.sciOut != null ? String(v.sciOut) : '—';
        noteEl.textContent = noteEdu;
        return true;
      }

      /** 加载进页样例。 */
      function loadSample() {

        modeEl.value = 'count';
        numEl.value = '0.00304';
        nEl.value = '3';

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

	const toolMeta = getToolBySlug('how-to-calculate-significant-figures');
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
