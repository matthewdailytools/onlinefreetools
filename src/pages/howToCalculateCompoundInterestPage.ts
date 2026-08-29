/**
 * 复利计算器工具页：复利/单利终值、频率选项、YMYL 免责与 Investopedia 引用。
 * slug: how-to-calculate-compound-interest（见 work-tasks/how-to-calculate-compound-interest/02-tool-info.md）。
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
 * 渲染复利计算器工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表（签名与其他计算器页一致）
 */
export const renderHowToCalculateCompoundInterestPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/how-to-calculate-compound-interest';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_compound_interest_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_compound_interest_description');

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
			currentSlug: 'how-to-calculate-compound-interest',
			currentAnchor: '#compound-interest',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	/** 表单与结果区样式。 */
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
    <div id="compound-interest" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(t(opts.lang, 'tool_compound_interest_title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <form id="ciForm">
          <div class="form-group">
            <label class="form-label" for="ciMode">${escapeHtml(t(opts.lang, 'tool_compound_interest_mode_label'))}</label>
            <select id="ciMode" class="input-lg">
              <option value="compound">${escapeHtml(t(opts.lang, 'tool_compound_interest_mode_compound'))}</option>
              <option value="simple">${escapeHtml(t(opts.lang, 'tool_compound_interest_mode_simple'))}</option>
            </select>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label class="form-label" for="ciPrincipal">${escapeHtml(t(opts.lang, 'tool_compound_interest_principal_label'))}</label>
              <input id="ciPrincipal" class="input-lg" type="number" min="0" step="any"
                placeholder="${escapeHtml(t(opts.lang, 'tool_compound_interest_principal_placeholder'))}" required>
            </div>
            <div class="form-group">
              <label class="form-label" for="ciRate">${escapeHtml(t(opts.lang, 'tool_compound_interest_rate_label'))}</label>
              <input id="ciRate" class="input-lg" type="number" min="0" step="any"
                placeholder="${escapeHtml(t(opts.lang, 'tool_compound_interest_rate_placeholder'))}" required>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label class="form-label" for="ciYears">${escapeHtml(t(opts.lang, 'tool_compound_interest_years_label'))}</label>
              <input id="ciYears" class="input-lg" type="number" min="0" step="any"
                placeholder="${escapeHtml(t(opts.lang, 'tool_compound_interest_years_placeholder'))}" required>
            </div>
            <div class="form-group" id="ciFreqGroup">
              <label class="form-label" for="ciFreq">${escapeHtml(t(opts.lang, 'tool_compound_interest_freq_label'))}</label>
              <select id="ciFreq" class="input-lg">
                <option value="1">${escapeHtml(t(opts.lang, 'tool_compound_interest_freq_1'))}</option>
                <option value="2">${escapeHtml(t(opts.lang, 'tool_compound_interest_freq_2'))}</option>
                <option value="4">${escapeHtml(t(opts.lang, 'tool_compound_interest_freq_4'))}</option>
                <option value="12" selected>${escapeHtml(t(opts.lang, 'tool_compound_interest_freq_12'))}</option>
                <option value="365">${escapeHtml(t(opts.lang, 'tool_compound_interest_freq_365'))}</option>
              </select>
            </div>
          </div>

          <div class="btn-row">
            <button type="submit" class="btn btn-primary">${escapeHtml(t(opts.lang, 'tool_compound_interest_calculate'))}</button>
            <button type="button" id="ciSample" class="btn btn-outline-secondary">${escapeHtml(t(opts.lang, 'tool_compound_interest_sample'))}</button>
            <button type="button" id="ciClear" class="btn btn-outline-secondary">${escapeHtml(t(opts.lang, 'tool_compound_interest_clear'))}</button>
          </div>
        </form>

        <div id="ciResult" class="result" style="display:none" aria-live="polite">
          <div><strong>${escapeHtml(t(opts.lang, 'tool_compound_interest_result_future'))}:</strong> <span id="ciFuture"></span></div>
          <div class="muted"><strong>${escapeHtml(t(opts.lang, 'tool_compound_interest_result_interest'))}:</strong> <span id="ciInterest"></span></div>
          <div id="ciNote" class="muted"></div>
        </div>
      </div>
    </div>

    ${renderToolIgSections({ lang: opts.lang, prefix: 'tool_compound_interest', mode: 'formula' })}`;

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: t(opts.lang, 'tool_compound_interest_ref_compound_label'),
				href: 'https://www.investopedia.com/terms/c/compoundinterest.asp',
			},
			{
				label: t(opts.lang, 'tool_compound_interest_ref_simple_label'),
				href: 'https://www.investopedia.com/terms/s/simple_interest.asp',
			},
		],
	});

	const extraBodyHtml = `
  <script>
    (function () {
      var form = document.getElementById('ciForm');
      var modeEl = document.getElementById('ciMode');
      var principalEl = document.getElementById('ciPrincipal');
      var rateEl = document.getElementById('ciRate');
      var yearsEl = document.getElementById('ciYears');
      var freqEl = document.getElementById('ciFreq');
      var freqGroup = document.getElementById('ciFreqGroup');
      var result = document.getElementById('ciResult');
      var futureEl = document.getElementById('ciFuture');
      var interestEl = document.getElementById('ciInterest');
      var noteEl = document.getElementById('ciNote');
      var btnSample = document.getElementById('ciSample');
      var btnClear = document.getElementById('ciClear');

      var msgBadPrincipal = ${JSON.stringify(t(opts.lang, 'tool_compound_interest_err_principal'))};
      var msgBadYears = ${JSON.stringify(t(opts.lang, 'tool_compound_interest_err_years'))};
      var msgBadRate = ${JSON.stringify(t(opts.lang, 'tool_compound_interest_err_rate'))};
      var msgOverflow = ${JSON.stringify(t(opts.lang, 'tool_compound_interest_err_overflow'))};
      var noteEdu = ${JSON.stringify(t(opts.lang, 'tool_compound_interest_result_note'))};

      /** 金额格式化为两位小数（或破折号）。 */
      function formatMoney(n) {
        return Number.isFinite(n) ? n.toFixed(2) : '—';
      }

      /** 简单模式时隐藏复利频率选择。 */
      function syncFreqVisibility() {
        var simple = modeEl.value === 'simple';
        freqGroup.style.display = simple ? 'none' : '';
      }

      /**
       * 按当前表单计算终值与利息并更新结果区。
       * @returns {boolean} 是否算出有效结果
       */
      function runCalc() {
        var P = parseFloat(principalEl.value);
        var ratePct = parseFloat(rateEl.value);
        var tYears = parseFloat(yearsEl.value);
        var n = parseInt(freqEl.value, 10) || 1;
        var simple = modeEl.value === 'simple';

        if (!(P > 0)) {
          result.style.display = 'block';
          futureEl.textContent = '—';
          interestEl.textContent = '—';
          noteEl.textContent = msgBadPrincipal;
          return false;
        }
        if (!(tYears > 0)) {
          result.style.display = 'block';
          futureEl.textContent = '—';
          interestEl.textContent = '—';
          noteEl.textContent = msgBadYears;
          return false;
        }
        if (!(ratePct >= 0) || !Number.isFinite(ratePct)) {
          result.style.display = 'block';
          futureEl.textContent = '—';
          interestEl.textContent = '—';
          noteEl.textContent = msgBadRate;
          return false;
        }

        var r = ratePct / 100;
        var A;
        if (simple) {
          A = P * (1 + r * tYears);
        } else {
          A = P * Math.pow(1 + r / n, n * tYears);
        }

        if (!Number.isFinite(A)) {
          result.style.display = 'block';
          futureEl.textContent = '—';
          interestEl.textContent = '—';
          noteEl.textContent = msgOverflow;
          return false;
        }

        var interest = A - P;
        futureEl.textContent = formatMoney(A);
        interestEl.textContent = formatMoney(interest);
        noteEl.textContent = noteEdu;
        result.style.display = 'block';
        return true;
      }

      /** 填入默认样例（本金 10000、年利率 5%、10 年、年复利）并计算。 */
      function loadSample() {
        modeEl.value = 'compound';
        principalEl.value = '10000';
        rateEl.value = '5';
        yearsEl.value = '10';
        freqEl.value = '1';
        syncFreqVisibility();
        runCalc();
      }

      modeEl.addEventListener('change', syncFreqVisibility);
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        runCalc();
      });
      btnSample.addEventListener('click', loadSample);
      btnClear.addEventListener('click', function () {
        form.reset();
        freqEl.value = '12';
        syncFreqVisibility();
        result.style.display = 'none';
      });

      syncFreqVisibility();
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('how-to-calculate-compound-interest');
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
