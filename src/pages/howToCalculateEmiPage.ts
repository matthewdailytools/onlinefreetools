/**
 * EMI / 等额本息贷款计算器工具页：月供或双周供、摊还表、YMYL 免责与权威引用。
 * slug: how-to-calculate-emi（见 work-tasks/how-to-calculate-emi/02-tool-info.md）。
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
 * 渲染 EMI 计算器工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表（签名与其他计算器页一致）
 */
export const renderHowToCalculateEmiPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/how-to-calculate-emi';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_emi_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_emi_description');

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
			currentSlug: 'how-to-calculate-emi',
			currentAnchor: '#emi',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	/** 表单、结果区与摊还表样式。 */
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
    .emi-schedule-wrap { margin-top:1rem; overflow-x:auto; max-height:22rem; overflow-y:auto; }
    .emi-schedule { width:100%; border-collapse:collapse; font-size:.9rem }
    .emi-schedule th, .emi-schedule td { border:1px solid var(--border,#dee2e6); padding:.35rem .5rem; text-align:right }
    .emi-schedule th:first-child, .emi-schedule td:first-child { text-align:center }
    .emi-schedule thead th { position:sticky; top:0; background:#e9ecef }
  </style>`;

	const contentHtml = `
    <div id="emi" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(t(opts.lang, 'tool_emi_title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <form id="emiForm">
          <div class="form-group">
            <label class="form-label" for="emiInputMode">${escapeHtml(t(opts.lang, 'tool_emi_input_mode_label'))}</label>
            <select id="emiInputMode" class="input-lg">
              <option value="loan">${escapeHtml(t(opts.lang, 'tool_emi_input_mode_loan'))}</option>
              <option value="home">${escapeHtml(t(opts.lang, 'tool_emi_input_mode_home'))}</option>
            </select>
          </div>

          <div id="emiLoanGroup" class="form-group">
            <label class="form-label" for="emiPrincipal">${escapeHtml(t(opts.lang, 'tool_emi_principal_label'))}</label>
            <input id="emiPrincipal" class="input-lg" type="number" min="0" step="any"
              placeholder="${escapeHtml(t(opts.lang, 'tool_emi_principal_placeholder'))}">
          </div>

          <div id="emiHomeGroup" class="form-row" style="display:none">
            <div class="form-group">
              <label class="form-label" for="emiPrice">${escapeHtml(t(opts.lang, 'tool_emi_price_label'))}</label>
              <input id="emiPrice" class="input-lg" type="number" min="0" step="any"
                placeholder="${escapeHtml(t(opts.lang, 'tool_emi_price_placeholder'))}">
            </div>
            <div class="form-group">
              <label class="form-label" for="emiDown">${escapeHtml(t(opts.lang, 'tool_emi_down_label'))}</label>
              <input id="emiDown" class="input-lg" type="number" min="0" step="any"
                placeholder="${escapeHtml(t(opts.lang, 'tool_emi_down_placeholder'))}">
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label class="form-label" for="emiRate">${escapeHtml(t(opts.lang, 'tool_emi_rate_label'))}</label>
              <input id="emiRate" class="input-lg" type="number" min="0" step="any"
                placeholder="${escapeHtml(t(opts.lang, 'tool_emi_rate_placeholder'))}" required>
            </div>
            <div class="form-group">
              <label class="form-label" for="emiYears">${escapeHtml(t(opts.lang, 'tool_emi_years_label'))}</label>
              <input id="emiYears" class="input-lg" type="number" min="0" step="any"
                placeholder="${escapeHtml(t(opts.lang, 'tool_emi_years_placeholder'))}" required>
            </div>
          </div>

          <div class="form-group">
            <label class="form-label" for="emiFreq">${escapeHtml(t(opts.lang, 'tool_emi_freq_label'))}</label>
            <select id="emiFreq" class="input-lg">
              <option value="12" selected>${escapeHtml(t(opts.lang, 'tool_emi_freq_monthly'))}</option>
              <option value="26">${escapeHtml(t(opts.lang, 'tool_emi_freq_biweekly'))}</option>
            </select>
          </div>

          <div class="btn-row">
            <button type="submit" class="btn btn-primary">${escapeHtml(t(opts.lang, 'tool_emi_calculate'))}</button>
            <button type="button" id="emiSample" class="btn btn-outline-secondary">${escapeHtml(t(opts.lang, 'tool_emi_sample'))}</button>
            <button type="button" id="emiClear" class="btn btn-outline-secondary">${escapeHtml(t(opts.lang, 'tool_emi_clear'))}</button>
          </div>
        </form>

        <div id="emiResult" class="result" style="display:none" aria-live="polite">
          <div><strong>${escapeHtml(t(opts.lang, 'tool_emi_result_emi'))}:</strong> <span id="emiPayment"></span></div>
          <div class="muted"><strong>${escapeHtml(t(opts.lang, 'tool_emi_result_periods'))}:</strong> <span id="emiPeriods"></span></div>
          <div class="muted"><strong>${escapeHtml(t(opts.lang, 'tool_emi_result_total'))}:</strong> <span id="emiTotal"></span></div>
          <div class="muted"><strong>${escapeHtml(t(opts.lang, 'tool_emi_result_interest'))}:</strong> <span id="emiInterest"></span></div>
          <div id="emiNote" class="muted"></div>
          <div class="emi-schedule-wrap">
            <div class="d-flex justify-content-between align-items-center mb-2">
              <strong id="emiScheduleHeading">${escapeHtml(t(opts.lang, 'tool_emi_schedule_title'))}</strong>
              <button type="button" id="emiToggleSchedule" class="btn btn-sm btn-outline-secondary">${escapeHtml(t(opts.lang, 'tool_emi_schedule_show_all'))}</button>
            </div>
            <table class="emi-schedule" id="emiScheduleTable">
              <thead>
                <tr>
                  <th>${escapeHtml(t(opts.lang, 'tool_emi_col_period'))}</th>
                  <th>${escapeHtml(t(opts.lang, 'tool_emi_col_payment'))}</th>
                  <th>${escapeHtml(t(opts.lang, 'tool_emi_col_interest'))}</th>
                  <th>${escapeHtml(t(opts.lang, 'tool_emi_col_principal'))}</th>
                  <th>${escapeHtml(t(opts.lang, 'tool_emi_col_balance'))}</th>
                </tr>
              </thead>
              <tbody id="emiScheduleBody"></tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    ${renderToolIgSections({ lang: opts.lang, prefix: 'tool_emi', mode: 'formula' })}`;

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: t(opts.lang, 'tool_emi_ref_emi_label'),
				href: 'https://www.investopedia.com/terms/e/equated_monthly_installment.asp',
			},
			{
				label: t(opts.lang, 'tool_emi_ref_cfpb_label'),
				href: 'https://www.consumerfinance.gov/owning-a-home/explore-rates/',
			},
		],
	});

	const extraBodyHtml = `
  <script>
    (function () {
      /** @type {HTMLFormElement} */
      var form = document.getElementById('emiForm');
      var inputModeEl = document.getElementById('emiInputMode');
      var loanGroup = document.getElementById('emiLoanGroup');
      var homeGroup = document.getElementById('emiHomeGroup');
      var principalEl = document.getElementById('emiPrincipal');
      var priceEl = document.getElementById('emiPrice');
      var downEl = document.getElementById('emiDown');
      var rateEl = document.getElementById('emiRate');
      var yearsEl = document.getElementById('emiYears');
      var freqEl = document.getElementById('emiFreq');
      var result = document.getElementById('emiResult');
      var paymentEl = document.getElementById('emiPayment');
      var periodsEl = document.getElementById('emiPeriods');
      var totalEl = document.getElementById('emiTotal');
      var interestEl = document.getElementById('emiInterest');
      var noteEl = document.getElementById('emiNote');
      var scheduleBody = document.getElementById('emiScheduleBody');
      var scheduleHeading = document.getElementById('emiScheduleHeading');
      var btnToggle = document.getElementById('emiToggleSchedule');
      var btnSample = document.getElementById('emiSample');
      var btnClear = document.getElementById('emiClear');

      var msgBadPrincipal = ${JSON.stringify(t(opts.lang, 'tool_emi_err_principal'))};
      var msgBadYears = ${JSON.stringify(t(opts.lang, 'tool_emi_err_years'))};
      var msgBadRate = ${JSON.stringify(t(opts.lang, 'tool_emi_err_rate'))};
      var msgBadPeriods = ${JSON.stringify(t(opts.lang, 'tool_emi_err_periods'))};
      var msgOverflow = ${JSON.stringify(t(opts.lang, 'tool_emi_err_overflow'))};
      var noteEdu = ${JSON.stringify(t(opts.lang, 'tool_emi_result_note'))};
      var labelYear = ${JSON.stringify(t(opts.lang, 'tool_emi_schedule_title'))};
      var labelShowAll = ${JSON.stringify(t(opts.lang, 'tool_emi_schedule_show_all'))};
      var labelShowYear = ${JSON.stringify(t(opts.lang, 'tool_emi_schedule_show_year'))};

      /** 缓存最近一次摊还行，供展开/收起。 */
      var lastRows = [];
      /** 是否展示全部期数。 */
      var showAll = false;

      /** 金额格式化为两位小数（或破折号）。 */
      function formatMoney(n) {
        return Number.isFinite(n) ? n.toFixed(2) : '—';
      }

      /** 按输入模式切换本金 vs 房价/首付控件。 */
      function syncInputMode() {
        var home = inputModeEl.value === 'home';
        loanGroup.style.display = home ? 'none' : '';
        homeGroup.style.display = home ? '' : 'none';
      }

      /**
       * 解析当前贷款本金 P。
       * @returns {number} 本金；无效时为 NaN
       */
      function resolvePrincipal() {
        if (inputModeEl.value === 'home') {
          var price = parseFloat(priceEl.value);
          var down = parseFloat(downEl.value);
          if (!(price > 0) || !(down >= 0) || !Number.isFinite(down)) return NaN;
          return price - down;
        }
        return parseFloat(principalEl.value);
      }

      /**
       * 渲染摊还表行（前 12 期或全部）。
       * @param {Array<{period:number,payment:number,interest:number,principal:number,balance:number}>} rows
       */
      function renderSchedule(rows) {
        lastRows = rows || [];
        var limit = showAll ? lastRows.length : Math.min(12, lastRows.length);
        var html = '';
        for (var i = 0; i < limit; i++) {
          var row = lastRows[i];
          html += '<tr>'
            + '<td>' + row.period + '</td>'
            + '<td>' + formatMoney(row.payment) + '</td>'
            + '<td>' + formatMoney(row.interest) + '</td>'
            + '<td>' + formatMoney(row.principal) + '</td>'
            + '<td>' + formatMoney(row.balance) + '</td>'
            + '</tr>';
        }
        scheduleBody.innerHTML = html;
        scheduleHeading.textContent = showAll
          ? labelYear.replace(/\\(.*\\)/, '').trim() || labelYear
          : labelYear;
        btnToggle.textContent = showAll ? labelShowYear : labelShowAll;
        btnToggle.style.display = lastRows.length > 12 ? '' : 'none';
      }

      /**
       * 按当前表单计算 EMI、汇总与摊还表。
       * @returns {boolean} 是否算出有效结果
       */
      function runCalc() {
        var P = resolvePrincipal();
        var ratePct = parseFloat(rateEl.value);
        var years = parseFloat(yearsEl.value);
        var m = parseInt(freqEl.value, 10) || 12;

        if (!(P > 0)) {
          result.style.display = 'block';
          paymentEl.textContent = '—';
          periodsEl.textContent = '—';
          totalEl.textContent = '—';
          interestEl.textContent = '—';
          noteEl.textContent = msgBadPrincipal;
          scheduleBody.innerHTML = '';
          return false;
        }
        if (!(years > 0)) {
          result.style.display = 'block';
          paymentEl.textContent = '—';
          periodsEl.textContent = '—';
          totalEl.textContent = '—';
          interestEl.textContent = '—';
          noteEl.textContent = msgBadYears;
          scheduleBody.innerHTML = '';
          return false;
        }
        if (!(ratePct >= 0) || !Number.isFinite(ratePct)) {
          result.style.display = 'block';
          paymentEl.textContent = '—';
          periodsEl.textContent = '—';
          totalEl.textContent = '—';
          interestEl.textContent = '—';
          noteEl.textContent = msgBadRate;
          scheduleBody.innerHTML = '';
          return false;
        }

        var n = Math.round(years * m);
        if (!(n >= 1)) {
          result.style.display = 'block';
          paymentEl.textContent = '—';
          periodsEl.textContent = '—';
          totalEl.textContent = '—';
          interestEl.textContent = '—';
          noteEl.textContent = msgBadPeriods;
          scheduleBody.innerHTML = '';
          return false;
        }

        var r = (ratePct / 100) / m;
        var E;
        if (r === 0) {
          E = P / n;
        } else {
          var factor = Math.pow(1 + r, n);
          E = P * r * factor / (factor - 1);
        }

        if (!Number.isFinite(E)) {
          result.style.display = 'block';
          paymentEl.textContent = '—';
          periodsEl.textContent = '—';
          totalEl.textContent = '—';
          interestEl.textContent = '—';
          noteEl.textContent = msgOverflow;
          scheduleBody.innerHTML = '';
          return false;
        }

        /** 固定每期还款（末期本金按余额校正，避免浮点残留）。 */
        var fixedE = E;
        var balance = P;
        var rows = [];
        var totalInterest = 0;
        for (var i = 1; i <= n; i++) {
          var interest = balance * r;
          var principalPart = fixedE - interest;
          if (i === n) {
            principalPart = balance;
          }
          var pay = principalPart + interest;
          balance = Math.max(0, balance - principalPart);
          totalInterest += interest;
          rows.push({
            period: i,
            payment: pay,
            interest: interest,
            principal: principalPart,
            balance: balance
          });
        }

        paymentEl.textContent = formatMoney(fixedE);
        periodsEl.textContent = String(n);
        totalEl.textContent = formatMoney(P + totalInterest);
        interestEl.textContent = formatMoney(totalInterest);
        noteEl.textContent = noteEdu;
        showAll = false;
        renderSchedule(rows);
        result.style.display = 'block';
        return true;
      }

      /** 填入默认样例（本金 100000、年利率 6%、5 年、按月）并计算。 */
      function loadSample() {
        inputModeEl.value = 'loan';
        principalEl.value = '100000';
        priceEl.value = '';
        downEl.value = '';
        rateEl.value = '6';
        yearsEl.value = '5';
        freqEl.value = '12';
        syncInputMode();
        runCalc();
      }

      inputModeEl.addEventListener('change', syncInputMode);
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        runCalc();
      });
      btnSample.addEventListener('click', loadSample);
      btnClear.addEventListener('click', function () {
        form.reset();
        freqEl.value = '12';
        syncInputMode();
        result.style.display = 'none';
        scheduleBody.innerHTML = '';
        lastRows = [];
        showAll = false;
      });
      btnToggle.addEventListener('click', function () {
        showAll = !showAll;
        renderSchedule(lastRows);
      });

      syncInputMode();
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('how-to-calculate-emi');
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
