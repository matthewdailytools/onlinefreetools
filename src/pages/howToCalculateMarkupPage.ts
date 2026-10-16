/**
 * 加价率计算器：成本+售价 → 加价% / 成本+加价% → 售价 / 售价+加价% → 成本，
 * 并并排显示毛利率以便区分 markup 与 margin。教育用途，非财务建议。
 * slug: how-to-calculate-markup（见 work-tasks/how-to-calculate-markup/02-tool-info.md）。
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
const PREFIX = 'tool_markup';

/** 为路径加上语言前缀（默认语无前缀）。 */
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * 渲染 how-to-calculate-markup 工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 * @returns 完整页面 HTML
 */
export const renderHowToCalculateMarkupPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 读取本工具键。 */
	const tx = (key: string) => t(opts.lang, `${PREFIX}_${key}` as keyof typeof import('../site/i18n/en').default);

	const toolPath = '/tools/how-to-calculate-markup';
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
			currentSlug: 'how-to-calculate-markup',
			currentAnchor: '#markup',
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
    .result { background:#f8f9fa; padding:1rem; border-radius:8px; margin-top:1rem; }
    .mk-out { font-size:1.35rem; font-weight:600; font-variant-numeric:tabular-nums; }
    .mk-row { color:#495057; font-size:.92rem; margin-top:.4rem; }
    .mk-row strong { color:#343a40; }
    .mk-h { font-size:1rem; font-weight:600; margin:1rem 0 .35rem; }
    .mk-steps { margin:0; padding-inline-start:1.3rem; font-size:.92rem; }
    .mk-steps li { margin-bottom:.35rem; }
    .result .muted { color:#6c757d; font-size:.9rem; margin-top:.75rem; }
    .result .muted.mk-err { color:#b02a37; font-weight:500; margin-top:0; }
    .mk-field[hidden] { display:none !important; }
  </style>`;

	const contentHtml = `
    <div id="markup" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(tx('title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <form id="calcForm" novalidate>
          <div class="form-group">
            <label class="form-label" for="mode">${escapeHtml(tx('mode_label'))}</label>
            <select id="mode" class="input-lg">
              <option value="pct" selected>${escapeHtml(tx('mode_pct'))}</option>
              <option value="sell">${escapeHtml(tx('mode_sell'))}</option>
              <option value="cost">${escapeHtml(tx('mode_cost'))}</option>
            </select>
          </div>
          <span class="form-hint">${escapeHtml(tx('hint'))}</span>
          <div class="form-row">
            <div class="form-group mk-field" data-for="pct sell" id="fgCost">
              <label class="form-label" for="cost">${escapeHtml(tx('cost_label'))}</label>
              <input id="cost" class="input-lg" type="text" inputmode="decimal" autocomplete="off" placeholder="${escapeHtml(tx('cost_ph'))}">
            </div>
            <div class="form-group mk-field" data-for="pct cost" id="fgSell">
              <label class="form-label" for="sell">${escapeHtml(tx('sell_label'))}</label>
              <input id="sell" class="input-lg" type="text" inputmode="decimal" autocomplete="off" placeholder="${escapeHtml(tx('sell_ph'))}">
            </div>
            <div class="form-group mk-field" data-for="sell cost" id="fgMk">
              <label class="form-label" for="mkPct">${escapeHtml(tx('mk_label'))}</label>
              <input id="mkPct" class="input-lg" type="text" inputmode="decimal" autocomplete="off" placeholder="${escapeHtml(tx('mk_ph'))}">
            </div>
          </div>
          <div class="btn-row">
            <button type="submit" class="btn btn-primary">${escapeHtml(tx('calculate'))}</button>
            <button type="button" id="btnSample" class="btn btn-outline-secondary">${escapeHtml(tx('sample'))}</button>
            <button type="button" id="btnClear" class="btn btn-outline-secondary">${escapeHtml(tx('clear'))}</button>
          </div>
        </form>
        <div id="calcResult" class="result" style="display:none" aria-live="polite">
          <div class="mk-out"><span id="mkPrimaryLabel">${escapeHtml(tx('markupOut_label'))}</span>: <span id="mkPrimary"></span></div>
          <div id="mkRows"></div>
          <div id="mkStepsWrap">
            <div class="mk-h">${escapeHtml(tx('steps_title'))}</div>
            <ol id="mkSteps" class="mk-steps"></ol>
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
			{ label: tx('ref_a_label'), href: 'https://www.investopedia.com/terms/m/markup.asp' },
			{ label: tx('ref_b_label'), href: 'https://www.investopedia.com/terms/p/profitmargin.asp' },
		],
	});

	/** 前端文案。 */
	const clientText = {
		lang: opts.lang,
		err: tx('err_generic'),
		note: tx('result_note'),
		labelPct: tx('markupOut_label'),
		labelSell: tx('sellOut_label'),
		labelCost: tx('costOut_label'),
		rowProfit: tx('profitOut_label'),
		rowMargin: tx('marginOut_label'),
		rowCost: tx('cost_label'),
		rowSell: tx('sell_label'),
		stepPct: tx('step_pct_tpl'),
		stepSell: tx('step_sell_tpl'),
		stepCost: tx('step_cost_tpl'),
		stepMargin: tx('step_margin_tpl'),
	};

	const extraBodyHtml = `
  <script>
    (function () {
      /** 表单与结果。 */
      var form = document.getElementById('calcForm');
      var modeEl = document.getElementById('mode');
      var costEl = document.getElementById('cost');
      var sellEl = document.getElementById('sell');
      var mkEl = document.getElementById('mkPct');
      var result = document.getElementById('calcResult');
      var primaryLabel = document.getElementById('mkPrimaryLabel');
      var primaryOut = document.getElementById('mkPrimary');
      var rowsEl = document.getElementById('mkRows');
      var stepsEl = document.getElementById('mkSteps');
      var stepsWrap = document.getElementById('mkStepsWrap');
      var noteEl = document.getElementById('calcNote');
      var T = ${JSON.stringify(clientText)};
      var sampleIndex = 0;
      /** 样例：求加价% / 求售价 / 求成本。 */
      var SAMPLES = [
        { mode: 'pct', cost: '50', sell: '80', mk: '' },
        { mode: 'sell', cost: '40', sell: '', mk: '25' },
        { mode: 'cost', cost: '', sell: '120', mk: '50' },
        { mode: 'pct', cost: '100', sell: '100', mk: '' }
      ];

      /**
       * 解析非负有限数（允许小数逗号）。
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
       * 格式化数字。
       * @param {number} n 数值
       * @param {number} d 小数位
       * @returns {string}
       */
      function fmt(n, d) {
        d = d == null ? 2 : d;
        if (!isFinite(n)) return '—';
        var s = n.toFixed(d);
        if (d === 2 && s.slice(-3) === '.00') return s.slice(0, -3);
        return s;
      }

      /** 模板替换。 */
      function fill(tpl, map) {
        var s = String(tpl || '');
        Object.keys(map).forEach(function (k) { s = s.split('{' + k + '}').join(String(map[k])); });
        return s;
      }

      /** 按模式显隐字段。 */
      function syncFields() {
        var mode = modeEl.value;
        var fields = document.querySelectorAll('.mk-field');
        for (var i = 0; i < fields.length; i++) {
          var el = fields[i];
          var ok = (' ' + String(el.getAttribute('data-for') || '') + ' ').indexOf(' ' + mode + ' ') >= 0;
          if (ok) el.removeAttribute('hidden');
          else el.setAttribute('hidden', '');
        }
      }

      /** 显示错误。 */
      function showError(msg) {
        result.style.display = 'block';
        primaryOut.textContent = '—';
        rowsEl.innerHTML = '';
        stepsEl.innerHTML = '';
        stepsWrap.style.display = 'none';
        noteEl.className = 'muted mk-err';
        noteEl.textContent = msg;
      }

      /** 计算并刷新。 */
      function run() {
        var mode = modeEl.value;
        var cost = parseNum(costEl.value, false);
        var sell = parseNum(sellEl.value, true);
        var mk = parseNum(mkEl.value, true);
        var dollar = 0;
        var markupPct = 0;
        var marginPct = 0;
        var steps = [];

        if (mode === 'pct') {
          if (!(cost && sell != null)) return showError(T.err);
          dollar = sell - cost;
          markupPct = (dollar / cost) * 100;
          marginPct = sell > 0 ? (dollar / sell) * 100 : 0;
          primaryLabel.textContent = T.labelPct;
          primaryOut.textContent = fmt(markupPct) + '%';
          steps = [
            fill(T.stepPct, { cost: fmt(cost), sell: fmt(sell), dollar: fmt(dollar), pct: fmt(markupPct) }),
            fill(T.stepMargin, { dollar: fmt(dollar), sell: fmt(sell), margin: fmt(marginPct) })
          ];
        } else if (mode === 'sell') {
          if (!(cost && mk != null)) return showError(T.err);
          sell = cost * (1 + mk / 100);
          dollar = sell - cost;
          markupPct = mk;
          marginPct = sell > 0 ? (dollar / sell) * 100 : 0;
          primaryLabel.textContent = T.labelSell;
          primaryOut.textContent = fmt(sell);
          steps = [
            fill(T.stepSell, { cost: fmt(cost), pct: fmt(mk), sell: fmt(sell) }),
            fill(T.stepMargin, { dollar: fmt(dollar), sell: fmt(sell), margin: fmt(marginPct) })
          ];
        } else {
          if (!(sell != null && sell > 0 && mk != null)) return showError(T.err);
          if (mk <= -100) return showError(T.err);
          cost = sell / (1 + mk / 100);
          if (!(cost > 0)) return showError(T.err);
          dollar = sell - cost;
          markupPct = mk;
          marginPct = (dollar / sell) * 100;
          primaryLabel.textContent = T.labelCost;
          primaryOut.textContent = fmt(cost);
          steps = [
            fill(T.stepCost, { sell: fmt(sell), pct: fmt(mk), cost: fmt(cost) }),
            fill(T.stepMargin, { dollar: fmt(dollar), sell: fmt(sell), margin: fmt(marginPct) })
          ];
        }

        rowsEl.innerHTML =
          '<div class="mk-row"><strong>' + T.rowCost + ':</strong> ' + fmt(cost) + '</div>' +
          '<div class="mk-row"><strong>' + T.rowSell + ':</strong> ' + fmt(sell) + '</div>' +
          '<div class="mk-row"><strong>' + T.rowProfit + ':</strong> ' + fmt(dollar) + '</div>' +
          '<div class="mk-row"><strong>' + T.labelPct + ':</strong> ' + fmt(markupPct) + '%</div>' +
          '<div class="mk-row"><strong>' + T.rowMargin + ':</strong> ' + fmt(marginPct) + '%</div>';
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
        costEl.value = s.cost;
        sellEl.value = s.sell;
        mkEl.value = s.mk;
        syncFields();
        run();
      }

      /** 清空。 */
      function clearAll() {
        form.reset();
        modeEl.value = 'pct';
        syncFields();
        result.style.display = 'none';
        costEl.focus();
      }

      modeEl.addEventListener('change', function () { syncFields(); });
      form.addEventListener('submit', function (e) { e.preventDefault(); run(); });
      document.getElementById('btnSample').addEventListener('click', loadSample);
      document.getElementById('btnClear').addEventListener('click', clearAll);
      syncFields();
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('how-to-calculate-markup');
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
