/**
 * NPV 计算器：年折现率、初始投资与各年现金流 → 净现值。
 * slug: how-to-calculate-npv（见 work-tasks/how-to-calculate-npv/02-tool-info.md）。
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
 * 渲染 NPV 计算器工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderHowToCalculateNpvPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/how-to-calculate-npv';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_npv_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_npv_description');

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
			currentSlug: 'how-to-calculate-npv',
			currentAnchor: '#npv',
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
    .form-hint { color:#6c757d; font-size:.875rem; margin-top:.35rem }
    .btn-row { display:flex; flex-wrap:wrap; gap:.5rem; align-items:center; }
    .result { background:#f8f9fa; padding:1rem; border-radius:8px; margin-top:1rem; text-align:center }
    .result .muted { color:#6c757d; font-size:.9rem; margin-top:.35rem }
    textarea.input-lg { min-height:6.5rem; resize:vertical; font-family:inherit }
  </style>`;

	const contentHtml = `
    <div id="npv" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(t(opts.lang, 'tool_npv_title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <form id="npvForm">
          <div class="form-row">
            <div class="form-group">
              <label class="form-label" for="npvRate">${escapeHtml(t(opts.lang, 'tool_npv_rate_label'))}</label>
              <input id="npvRate" class="input-lg" type="number" step="any"
                placeholder="${escapeHtml(t(opts.lang, 'tool_npv_rate_ph'))}" required>
            </div>
            <div class="form-group">
              <label class="form-label" for="npvInvest">${escapeHtml(t(opts.lang, 'tool_npv_invest_label'))}</label>
              <input id="npvInvest" class="input-lg" type="number" min="0" step="any"
                placeholder="${escapeHtml(t(opts.lang, 'tool_npv_invest_ph'))}" required>
            </div>
          </div>
          <div class="form-group">
            <label class="form-label" for="npvCashFlows">${escapeHtml(t(opts.lang, 'tool_npv_cf_label'))}</label>
            <textarea id="npvCashFlows" class="input-lg" rows="4"
              placeholder="${escapeHtml(t(opts.lang, 'tool_npv_cf_ph'))}" required></textarea>
            <p class="form-hint">${escapeHtml(t(opts.lang, 'tool_npv_cf_hint'))}</p>
          </div>
          <div class="btn-row">
            <button type="submit" class="btn btn-primary">${escapeHtml(t(opts.lang, 'tool_npv_calculate'))}</button>
            <button type="button" id="npvSample" class="btn btn-outline-secondary">${escapeHtml(t(opts.lang, 'tool_npv_sample'))}</button>
            <button type="button" id="npvClear" class="btn btn-outline-secondary">${escapeHtml(t(opts.lang, 'tool_npv_clear'))}</button>
          </div>
        </form>
        <div id="npvResult" class="result" style="display:none" aria-live="polite">
          <div><strong>${escapeHtml(t(opts.lang, 'tool_npv_result_label'))}:</strong> <span id="npvValue"></span></div>
          <div id="npvNote" class="muted"></div>
        </div>
      </div>
    </div>

    ${renderToolIgSections({ lang: opts.lang, prefix: 'tool_npv', mode: 'formula' })}`;

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: t(opts.lang, 'tool_npv_ref_npv_label'),
				href: 'https://www.investopedia.com/terms/n/npv.asp',
			},
			{
				label: t(opts.lang, 'tool_npv_ref_pv_label'),
				href: 'https://www.investopedia.com/ask/answers/032615/whats-difference-between-present-value-and-net-present-value.asp',
			},
		],
	});

	const extraBodyHtml = `
  <script>
    (function () {
      var form = document.getElementById('npvForm');
      var rateEl = document.getElementById('npvRate');
      var investEl = document.getElementById('npvInvest');
      var cfEl = document.getElementById('npvCashFlows');
      var result = document.getElementById('npvResult');
      var valueEl = document.getElementById('npvValue');
      var noteEl = document.getElementById('npvNote');
      var msgRate = ${JSON.stringify(t(opts.lang, 'tool_npv_err_rate'))};
      var msgInvest = ${JSON.stringify(t(opts.lang, 'tool_npv_err_invest'))};
      var msgCf = ${JSON.stringify(t(opts.lang, 'tool_npv_err_cf'))};
      var noteEdu = ${JSON.stringify(t(opts.lang, 'tool_npv_result_note'))};

      /**
       * 将金额格式化为两位小数（千分位由浏览器本地化）。
       * @param {number} n 数值
       * @returns {string}
       */
      function fmtMoney(n) {
        if (!Number.isFinite(n)) return '—';
        return n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      }

      /**
       * 解析 textarea：逗号/换行/空白分隔的现金流列表。
       * @param {string} raw 原始文本
       * @returns {number[]|null} 至少一项合法数字时返回数组，否则 null
       */
      function parseCashFlows(raw) {
        var parts = String(raw || '').split(/[\\s,;，、]+/).filter(Boolean);
        var out = [];
        for (var i = 0; i < parts.length; i++) {
          var v = parseFloat(parts[i]);
          if (!Number.isFinite(v)) return null;
          out.push(v);
        }
        return out.length ? out : null;
      }

      /**
       * 按 NPV = -I0 + sum(CFt / (1+r)^t) 计算净现值。
       * @returns {boolean} 输入合法并已写出结果时为 true
       */
      function runCalc() {
        var ratePct = parseFloat(rateEl.value);
        var invest = parseFloat(investEl.value);
        var flows = parseCashFlows(cfEl.value);
        result.style.display = 'block';
        if (!Number.isFinite(ratePct) || ratePct <= -100) {
          valueEl.textContent = '—';
          noteEl.textContent = msgRate;
          return false;
        }
        if (!(invest > 0)) {
          valueEl.textContent = '—';
          noteEl.textContent = msgInvest;
          return false;
        }
        if (!flows) {
          valueEl.textContent = '—';
          noteEl.textContent = msgCf;
          return false;
        }
        var r = ratePct / 100;
        var npv = -invest;
        for (var t = 1; t <= flows.length; t++) {
          npv += flows[t - 1] / Math.pow(1 + r, t);
        }
        valueEl.textContent = fmtMoney(npv);
        noteEl.textContent = noteEdu;
        return true;
      }

      /** 加载默认样例：I0=10000、r=10%、CF=3000/4200/6800 → NPV ≈ 1307.29。 */
      function loadSample() {
        rateEl.value = '10';
        investEl.value = '10000';
        cfEl.value = '3000, 4200, 6800';
        runCalc();
      }

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        runCalc();
      });
      document.getElementById('npvSample').addEventListener('click', loadSample);
      document.getElementById('npvClear').addEventListener('click', function () {
        form.reset();
        result.style.display = 'none';
      });
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('how-to-calculate-npv');
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
