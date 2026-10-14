/**
 * 债务还清计算器：固定月供求还清月数 / 目标月数求所需月供，含额外还款对比与逐年明细。
 * slug: how-to-calculate-debt-payoff（见 work-tasks/how-to-calculate-debt-payoff/02-tool-info.md）。
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
 * 渲染 how-to-calculate-debt-payoff 工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderHowToCalculateDebtPayoffPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/how-to-calculate-debt-payoff';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_debt_payoff_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_debt_payoff_description');

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
			currentSlug: 'how-to-calculate-debt-payoff',
			currentAnchor: '#debt-payoff',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	/** 取本工具 i18n 文案（前缀 tool_debt_payoff_）。 */
	const tx = (key: string) => t(opts.lang, `tool_debt_payoff_${key}` as never);

	/**
	 * 单个数值输入字段。
	 * @param id 输入框 id
	 * @param key 文案键后缀（label 用 `${key}_label`，占位用 `${key}_ph`）
	 * @param mode 仅在该模式显示；省略则始终显示
	 */
	const numField = (id: string, key: string, mode?: string) => `
            <div class="form-group form-half"${mode ? ` data-mode="${mode}"` : ''}>
              <label class="form-label" for="${id}">${escapeHtml(tx(`${key}_label`))}</label>
              <input id="${id}" class="input-lg" type="number" step="any" min="0" inputmode="decimal" placeholder="${escapeHtml(tx(`${key}_ph`))}">
            </div>`;

	const extraHeadHtml = `
  <style>
    .tool-card { max-width: var(--content-max); width: 100%; margin: 0 0 1.5rem; }
    .form-label { display:block; margin-bottom:.5rem; color:#495057; font-weight:500 }
    .form-group { margin-bottom:1rem; }
    .form-row { display:grid; grid-template-columns:1fr 1fr; gap:1rem; }
    @media (max-width:576px) { .form-row { grid-template-columns:1fr; } }
    .form-half[hidden] { display:none !important; }
    .btn-row { display:flex; flex-wrap:wrap; gap:.5rem; align-items:center; }
    .result { background:#f8f9fa; padding:1rem; border-radius:8px; margin-top:1rem; }
    .result .main { font-size:1.15rem; text-align:center; }
    .result .muted { color:#6c757d; font-size:.9rem; margin-top:.35rem }
    .result dl { display:grid; grid-template-columns:auto 1fr; gap:.25rem 1rem; margin:.75rem 0 0; }
    .result dt { color:#495057; font-weight:500; }
    .result dd { margin:0; font-variant-numeric: tabular-nums; }
    .result .saves { margin-top:.75rem; padding:.5rem .75rem; border-left:3px solid #198754; background:#fff; }
    .schedule { margin-top:.75rem; }
    .schedule table { width:100%; border-collapse:collapse; font-size:.9rem; font-variant-numeric: tabular-nums; }
    .schedule th, .schedule td { padding:.3rem .5rem; border-bottom:1px solid #dee2e6; text-align:end; }
    .schedule th:first-child, .schedule td:first-child { text-align:start; }
  </style>`;

	const contentHtml = `
    <div id="debt-payoff" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(tx('title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <form id="calcForm">
          <div class="form-group">
            <label class="form-label" for="mode">${escapeHtml(tx('mode_label'))}</label>
            <select id="mode" class="input-lg">
              <option value="pay" selected>${escapeHtml(tx('mode_pay'))}</option>
              <option value="target">${escapeHtml(tx('mode_target'))}</option>
            </select>
          </div>
          <div class="form-row">
            ${numField('principal', 'principal')}
            ${numField('rate', 'rate')}
            ${numField('pay', 'pay', 'pay')}
            ${numField('extra', 'extra', 'pay')}
            ${numField('months', 'months', 'target')}
          </div>
          <div class="btn-row">
            <button type="submit" class="btn btn-primary">${escapeHtml(tx('calculate'))}</button>
            <button type="button" id="btnSample" class="btn btn-outline-secondary">${escapeHtml(tx('sample'))}</button>
            <button type="button" id="btnClear" class="btn btn-outline-secondary">${escapeHtml(tx('clear'))}</button>
          </div>
        </form>
        <div id="calcResult" class="result" style="display:none" aria-live="polite">
          <div id="okWrap">
            <div class="main"><strong id="mainLabel"></strong>: <span id="mainOut"></span></div>
            <dl>
              <dt>${escapeHtml(tx('paymentOut_label'))}</dt><dd id="paymentOut"></dd>
              <dt>${escapeHtml(tx('monthsOut_label'))}</dt><dd id="monthsOut"></dd>
              <dt>${escapeHtml(tx('interestOut_label'))}</dt><dd id="interestOut"></dd>
              <dt>${escapeHtml(tx('totalOut_label'))}</dt><dd id="totalOut"></dd>
              <dt>${escapeHtml(tx('lastOut_label'))}</dt><dd id="lastOut"></dd>
              <dt>${escapeHtml(tx('dateOut_label'))}</dt><dd id="dateOut"></dd>
            </dl>
            <div id="savesOut" class="saves" hidden></div>
            <details class="schedule">
              <summary>${escapeHtml(tx('schedule_label'))}</summary>
              <table>
                <thead><tr><th>${escapeHtml(tx('tbl_year'))}</th><th>${escapeHtml(tx('tbl_interest'))}</th><th>${escapeHtml(tx('tbl_principal'))}</th><th>${escapeHtml(tx('tbl_balance'))}</th></tr></thead>
                <tbody id="scheduleBody"></tbody>
              </table>
            </details>
          </div>
          <div id="calcNote" class="muted"></div>
        </div>
      </div>
    </div>

    ${renderToolIgSections({ lang: opts.lang, prefix: 'tool_debt_payoff', mode: 'formula', usecaseCount: 4 })}`;

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: tx('ref_a_label'),
				href: 'https://www.investopedia.com/terms/a/amortization.asp',
			},
			{
				label: tx('ref_b_label'),
				href: 'https://en.wikipedia.org/wiki/Amortization_calculator',
			},
		],
	});

	const extraBodyHtml = `
  <script>
    (function () {
      var form = document.getElementById('calcForm');
      var modeEl = document.getElementById('mode');
      var result = document.getElementById('calcResult');
      var okWrap = document.getElementById('okWrap');
      var noteEl = document.getElementById('calcNote');
      var savesEl = document.getElementById('savesOut');
      var bodyEl = document.getElementById('scheduleBody');
      var LANG = ${JSON.stringify(opts.lang)};
      var T = ${JSON.stringify({
				mainMonths: tx('monthsOut_label'),
				mainPay: tx('paymentOut_label'),
				duration: tx('duration_fmt'),
				saves: tx('extra_saves'),
				note: tx('result_note'),
				errBalance: tx('err_balance'),
				errRate: tx('err_rate'),
				errPayLow: tx('err_pay_low'),
				errMonths: tx('err_months'),
				errCap: tx('err_cap'),
			})};
      /** 最长模拟月数（50 年），超过即视为实际还不清。 */
      var CAP = 600;
      var nfMoney = new Intl.NumberFormat(LANG + '-u-nu-latn', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      var nfInt = new Intl.NumberFormat(LANG + '-u-nu-latn', { maximumFractionDigits: 0 });
      var dfMonth = new Intl.DateTimeFormat(LANG + '-u-nu-latn', { year: 'numeric', month: 'long' });

      /** 金额格式化（两位小数，按语言分组与小数点）。 */
      function money(n) {
        return Number.isFinite(n) ? nfMoney.format(n) : '—';
      }

      /** 四舍五入到分。 */
      function cents(n) {
        return Math.round(n * 100) / 100;
      }

      /** 读取输入；空为 NaN。 */
      function num(id) {
        var raw = document.getElementById(id).value;
        return raw === '' ? NaN : Number(raw);
      }

      /** 用 {key} 占位符填充模板。 */
      function fill(tpl, map) {
        return tpl.replace(/\\{(\\w+)\\}/g, function (_, k) { return map[k] != null ? map[k] : ''; });
      }

      /** “29 个月（2 年 5 个月）”式时长。 */
      function duration(n) {
        return fill(T.duration, { n: nfInt.format(n), y: nfInt.format(Math.floor(n / 12)), m: nfInt.format(n % 12) });
      }

      /** 按模式显隐字段。 */
      function syncMode() {
        var mode = modeEl.value;
        form.querySelectorAll('[data-mode]').forEach(function (el) {
          el.hidden = el.getAttribute('data-mode') !== mode;
        });
      }

      /**
       * 逐月摊还：每月利息 = 余额 × 年利率 ÷ 12（四舍五入到分），月供先抵利息再还本金。
       * @param {number} bal 初始余额
       * @param {number} r 月利率
       * @param {number} pay 每月还款
       * @returns {{ months: number, interest: number, last: number, years: Array<{interest:number, principal:number, balance:number}> } | null} 超过 CAP 返回 null
       */
      function simulate(bal, r, pay) {
        var months = 0, interestTotal = 0, last = 0, years = [], yi = 0, yp = 0;
        while (bal > 0.004 && months < CAP) {
          var interest = cents(bal * r);
          var p = bal + interest <= pay ? cents(bal + interest) : pay;
          interestTotal += interest;
          yi += interest;
          yp += p - interest;
          bal = cents(bal + interest - p);
          last = p;
          months++;
          if (months % 12 === 0 || bal <= 0.004) {
            years.push({ interest: yi, principal: yp, balance: Math.max(bal, 0) });
            yi = 0;
            yp = 0;
          }
        }
        if (bal > 0.004) return null;
        return { months: months, interest: cents(interestTotal), last: last, years: years };
      }

      /** 校验并计算当前模式。 */
      function compute() {
        var bal = num('principal'), apr = num('rate');
        if (!(bal > 0)) return { ok: false, error: T.errBalance };
        if (!Number.isFinite(apr) || apr < 0 || apr > 100) return { ok: false, error: T.errRate };
        var r = apr / 100 / 12;
        var firstInterest = cents(bal * r);
        if (modeEl.value === 'target') {
          var n = num('months');
          if (!(n >= 1 && n <= CAP && Math.floor(n) === n)) return { ok: false, error: T.errMonths };
          var need = r === 0 ? bal / n : (bal * r) / (1 - Math.pow(1 + r, -n));
          var payT = Math.ceil(need * 100 - 1e-6) / 100;
          var simT = simulate(bal, r, payT);
          if (!simT) return { ok: false, error: T.errCap };
          return { ok: true, mode: 'target', bal: bal, pay: payT, sim: simT };
        }
        var pay = num('pay');
        var extra = num('extra');
        if (!Number.isFinite(extra)) extra = 0;
        if (extra < 0) extra = 0;
        if (!(pay > 0) || pay <= firstInterest) return { ok: false, error: fill(T.errPayLow, { x: money(firstInterest) }) };
        var sim = simulate(bal, r, pay);
        if (!sim) return { ok: false, error: T.errCap };
        var simExtra = extra > 0 ? simulate(bal, r, pay + extra) : null;
        return { ok: true, mode: 'pay', bal: bal, pay: pay, extra: extra, sim: sim, simExtra: simExtra };
      }

      /** 执行计算并刷新结果区。 */
      function runCalc() {
        var out = compute();
        result.style.display = 'block';
        if (!out.ok) {
          okWrap.hidden = true;
          noteEl.textContent = out.error;
          return false;
        }
        okWrap.hidden = false;
        var sim = out.simExtra || out.sim;
        var payShown = out.simExtra ? out.pay + out.extra : out.pay;
        document.getElementById('mainLabel').textContent = out.mode === 'target' ? T.mainPay : T.mainMonths;
        document.getElementById('mainOut').textContent = out.mode === 'target' ? money(out.pay) : duration(sim.months);
        document.getElementById('paymentOut').textContent = money(payShown);
        document.getElementById('monthsOut').textContent = duration(sim.months);
        document.getElementById('interestOut').textContent = money(sim.interest);
        document.getElementById('totalOut').textContent = money(out.bal + sim.interest);
        document.getElementById('lastOut').textContent = money(sim.last);
        var d = new Date();
        d.setDate(1);
        d.setMonth(d.getMonth() + sim.months);
        document.getElementById('dateOut').textContent = dfMonth.format(d);
        if (out.simExtra) {
          savesEl.textContent = fill(T.saves, {
            extra: money(out.extra),
            m: nfInt.format(out.sim.months - out.simExtra.months),
            i: money(cents(out.sim.interest - out.simExtra.interest))
          });
          savesEl.hidden = false;
        } else {
          savesEl.hidden = true;
        }
        bodyEl.textContent = '';
        sim.years.forEach(function (y, i) {
          var tr = document.createElement('tr');
          [nfInt.format(i + 1), money(y.interest), money(y.principal), money(y.balance)].forEach(function (v) {
            var td = document.createElement('td');
            td.textContent = v;
            tr.appendChild(td);
          });
          bodyEl.appendChild(tr);
        });
        noteEl.textContent = T.note;
        return true;
      }

      /** 样例：5000、年利率 12%、月供 200、每月多还 50。 */
      function loadSample() {
        modeEl.value = 'pay';
        syncMode();
        document.getElementById('principal').value = '5000';
        document.getElementById('rate').value = '12';
        document.getElementById('pay').value = '200';
        document.getElementById('extra').value = '50';
        document.getElementById('months').value = '';
        runCalc();
      }

      modeEl.addEventListener('change', function () {
        syncMode();
        result.style.display = 'none';
      });
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        runCalc();
      });
      document.getElementById('btnSample').addEventListener('click', loadSample);
      document.getElementById('btnClear').addEventListener('click', function () {
        form.reset();
        syncMode();
        result.style.display = 'none';
      });
      syncMode();
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('how-to-calculate-debt-payoff');
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
