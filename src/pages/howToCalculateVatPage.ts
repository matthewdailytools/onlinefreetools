/**
 * 增值税/GST 计算器：含税加价或从含税价拆税，常用税率芯片与验算步骤。
 * 用户自填税率，无国家税率矩阵；教育用途，非报税建议。
 * slug: how-to-calculate-vat（见 work-tasks/how-to-calculate-vat/02-tool-info.md）。
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

/** 本工具 i18n 键前缀。 */
const PREFIX = 'tool_vat';

/** 为路径加上语言前缀（默认语无前缀）。 */
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * 渲染 how-to-calculate-vat 工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 * @returns 完整页面 HTML
 */
export const renderHowToCalculateVatPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 读取本工具键。 */
	const tx = (key: string) => t(opts.lang, `${PREFIX}_${key}` as keyof typeof import('../site/i18n/en').default);

	const toolPath = '/tools/how-to-calculate-vat';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${tx('title')} | ${t(opts.lang, 'brand')}`;
	const description = tx('description');

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
			currentSlug: 'how-to-calculate-vat',
			currentAnchor: '#vat',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	const extraHeadHtml = `
  <style>
    .tool-card { max-width: var(--content-max); width: 100%; margin: 0 0 1.5rem; }
    .form-label { display:block; margin-bottom:.5rem; color:#495057; font-weight:500 }
    .form-hint { display:block; color:#6c757d; font-size:.85rem; margin:-.25rem 0 .75rem; }
    .form-group { margin-bottom:1rem; }
    .form-row { display:grid; grid-template-columns:repeat(2, minmax(0, 1fr)); gap:0 1rem; }
    @media (max-width:576px) { .form-row { grid-template-columns:minmax(0, 1fr); } }
    .btn-row { display:flex; flex-wrap:wrap; gap:.5rem; align-items:center; }
    .chip-row { display:flex; flex-wrap:wrap; gap:.4rem; margin-bottom:.75rem; }
    .chip-row button { font-size:.85rem; }
    .result { background:#f8f9fa; padding:1rem; border-radius:8px; margin-top:1rem; }
    .vat-out { font-size:1.2rem; font-weight:600; font-variant-numeric:tabular-nums; }
    .vat-row { color:#495057; font-size:.92rem; margin-top:.4rem; }
    .vat-row strong { color:#343a40; }
    .vat-h { font-size:1rem; font-weight:600; margin:1rem 0 .35rem; }
    .vat-steps { margin:0; padding-inline-start:1.3rem; font-size:.92rem; }
    .vat-steps li { margin-bottom:.35rem; }
    .result .muted { color:#6c757d; font-size:.9rem; margin-top:.75rem; }
    .result .muted.vat-err { color:#b02a37; font-weight:500; margin-top:0; }
    .vat-warn { background:#fff3cd; color:#664d03; border-radius:6px; padding:.6rem .75rem; font-size:.9rem; margin-bottom:1rem; }
  </style>`;

	const contentHtml = `
    <div id="vat" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(tx('title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <div class="vat-warn" role="note">${escapeHtml(tx('safety_banner'))}</div>
        <form id="calcForm" novalidate>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label" for="mode">${escapeHtml(tx('mode_label'))}</label>
              <select id="mode" class="input-lg">
                <option value="add" selected>${escapeHtml(tx('mode_add'))}</option>
                <option value="extract">${escapeHtml(tx('mode_extract'))}</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label" for="amount">${escapeHtml(tx('amount_label'))}</label>
              <input id="amount" class="input-lg" type="text" inputmode="decimal" autocomplete="off" placeholder="${escapeHtml(tx('amount_ph'))}">
            </div>
            <div class="form-group">
              <label class="form-label" for="rate">${escapeHtml(tx('rate_label'))}</label>
              <input id="rate" class="input-lg" type="text" inputmode="decimal" autocomplete="off" placeholder="${escapeHtml(tx('rate_ph'))}">
            </div>
          </div>
          <span class="form-hint">${escapeHtml(tx('hint'))}</span>
          <div class="chip-row" id="vatChips" aria-label="${escapeHtml(tx('chips_label'))}"></div>
          <div class="btn-row">
            <button type="submit" class="btn btn-primary">${escapeHtml(tx('calculate'))}</button>
            <button type="button" id="btnSample" class="btn btn-outline-secondary">${escapeHtml(tx('sample'))}</button>
            <button type="button" id="btnClear" class="btn btn-outline-secondary">${escapeHtml(tx('clear'))}</button>
          </div>
        </form>
        <div id="calcResult" class="result" style="display:none" aria-live="polite">
          <div class="vat-out"><span>${escapeHtml(tx('grossOut_label'))}</span>: <span id="grossOut"></span></div>
          <div id="vatRows"></div>
          <div id="vatStepsWrap">
            <div class="vat-h">${escapeHtml(tx('steps_title'))}</div>
            <ol id="vatSteps" class="vat-steps"></ol>
          </div>
          <div id="calcNote" class="muted"></div>
        </div>
      </div>
    </div>

    ${renderToolIgSections({
			lang: opts.lang,
			prefix: PREFIX,
			mode: 'formula',
			howItemCount: 4,
			whyChooseItemCount: 5,
			usecaseCount: 4,
			formulaItemCount: 5,
		})}`;

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{ label: tx('ref_a_label'), href: 'https://www.investopedia.com/terms/v/valueaddedtax.asp' },
			{ label: tx('ref_b_label'), href: 'https://www.investopedia.com/terms/s/salestax.asp' },
		],
	});

	/** 前端文案。 */
	const clientText = {
		lang: opts.lang,
		err: tx('err_generic'),
		note: tx('result_note'),
		rowNet: tx('netOut_label'),
		rowTax: tx('taxOut_label'),
		rowCheck: tx('row_check'),
		stepAdd: tx('step_add_tpl'),
		stepExtract: tx('step_extract_tpl'),
		stepTax: tx('step_tax_tpl'),
		stepCheck: tx('step_check_tpl'),
		chip5: tx('chip_5'),
		chip10: tx('chip_10'),
		chip20: tx('chip_20'),
		chip21: tx('chip_21'),
	};

	const extraBodyHtml = `
  <script>
    (function () {
      /** 控件。 */
      var form = document.getElementById('calcForm');
      var modeEl = document.getElementById('mode');
      var amountEl = document.getElementById('amount');
      var rateEl = document.getElementById('rate');
      var chipsEl = document.getElementById('vatChips');
      var result = document.getElementById('calcResult');
      var grossOut = document.getElementById('grossOut');
      var rowsEl = document.getElementById('vatRows');
      var stepsEl = document.getElementById('vatSteps');
      var stepsWrap = document.getElementById('vatStepsWrap');
      var noteEl = document.getElementById('calcNote');
      var T = ${JSON.stringify(clientText)};
      var sampleIndex = 0;
      var SAMPLES = [
        { mode: 'add', amount: '100', rate: '20' },
        { mode: 'extract', amount: '120', rate: '20' },
        { mode: 'add', amount: '50', rate: '10' },
        { mode: 'extract', amount: '107.1', rate: '7' }
      ];

      /**
       * 解析非负有限数。
       * @param {string} raw 原文
       * @param {boolean} allowZero 是否允许 0
       * @returns {number|null}
       */
      function parseNum(raw, allowZero) {
        var s = String(raw == null ? '' : raw).trim().replace(',', '.');
        if (!s) return null;
        var n = Number(s);
        if (!isFinite(n)) return null;
        if (allowZero ? n < 0 : !(n > 0)) return null;
        return n;
      }

      /**
       * 格式化金额。
       * @param {number} n 数值
       * @returns {string}
       */
      function fmt(n) {
        if (!isFinite(n)) return '—';
        var s = n.toFixed(2);
        if (s.slice(-3) === '.00') return s.slice(0, -3);
        return s;
      }

      /** 模板替换。 */
      function fill(tpl, map) {
        var s = String(tpl || '');
        Object.keys(map).forEach(function (k) { s = s.split('{' + k + '}').join(String(map[k])); });
        return s;
      }

      /** 渲染税率芯片。 */
      function renderChips() {
        var chips = [
          { label: T.chip5, rate: '5' },
          { label: T.chip10, rate: '10' },
          { label: T.chip20, rate: '20' },
          { label: T.chip21, rate: '21' }
        ];
        chipsEl.innerHTML = '';
        chips.forEach(function (ch) {
          var b = document.createElement('button');
          b.type = 'button';
          b.className = 'btn btn-outline-secondary btn-sm';
          b.textContent = ch.label;
          b.addEventListener('click', function () {
            rateEl.value = ch.rate;
            run();
          });
          chipsEl.appendChild(b);
        });
      }

      /** 显示错误。 */
      function showError(msg) {
        result.style.display = 'block';
        grossOut.textContent = '—';
        rowsEl.innerHTML = '';
        stepsEl.innerHTML = '';
        stepsWrap.style.display = 'none';
        noteEl.className = 'muted vat-err';
        noteEl.textContent = msg;
      }

      /** 计算。 */
      function run() {
        var mode = modeEl.value;
        var amount = parseNum(amountEl.value, false);
        var ratePct = parseNum(rateEl.value, true);
        if (!(amount && ratePct != null)) return showError(T.err);
        var r = ratePct / 100;
        var net = 0;
        var gross = 0;
        var tax = 0;
        var steps = [];

        if (mode === 'extract') {
          gross = amount;
          net = gross / (1 + r);
          tax = gross - net;
          steps = [
            fill(T.stepExtract, { gross: fmt(gross), pct: fmt(ratePct), net: fmt(net) }),
            fill(T.stepTax, { gross: fmt(gross), net: fmt(net), tax: fmt(tax) }),
            fill(T.stepCheck, { net: fmt(net), pct: fmt(ratePct), gross: fmt(net * (1 + r)) })
          ];
        } else {
          net = amount;
          gross = net * (1 + r);
          tax = gross - net;
          steps = [
            fill(T.stepAdd, { net: fmt(net), pct: fmt(ratePct), gross: fmt(gross) }),
            fill(T.stepTax, { gross: fmt(gross), net: fmt(net), tax: fmt(tax) }),
            fill(T.stepCheck, { net: fmt(gross / (1 + r)), pct: fmt(ratePct), gross: fmt(gross) })
          ];
        }

        grossOut.textContent = fmt(gross);
        rowsEl.innerHTML =
          '<div class="vat-row"><strong>' + T.rowNet + ':</strong> ' + fmt(net) + '</div>' +
          '<div class="vat-row"><strong>' + T.rowTax + ':</strong> ' + fmt(tax) + '</div>' +
          '<div class="vat-row"><strong>' + T.rowCheck + ':</strong> ' + fmt(net) + ' × (1 + ' + fmt(ratePct) + '/100) = ' + fmt(net * (1 + r)) + '</div>';
        stepsEl.innerHTML = steps.map(function (s) { return '<li>' + s + '</li>'; }).join('');
        stepsWrap.style.display = '';
        noteEl.className = 'muted';
        noteEl.textContent = T.note;
        result.style.display = 'block';
      }

      /** 加载样例。 */
      function loadSample() {
        var s = SAMPLES[sampleIndex % SAMPLES.length];
        sampleIndex += 1;
        modeEl.value = s.mode;
        amountEl.value = s.amount;
        rateEl.value = s.rate;
        run();
      }

      /** 清空。 */
      function clearAll() {
        form.reset();
        modeEl.value = 'add';
        result.style.display = 'none';
        amountEl.focus();
      }

      form.addEventListener('submit', function (e) { e.preventDefault(); run(); });
      document.getElementById('btnSample').addEventListener('click', loadSample);
      document.getElementById('btnClear').addEventListener('click', clearAll);
      renderChips();
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('how-to-calculate-vat');
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
