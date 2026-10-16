/**
 * CAGR 计算器：求复合年增长率 / 期末价值 / 年数；YMYL 教育用途，非投资建议。
 * slug: how-to-calculate-cagr（见 work-tasks/how-to-calculate-cagr/02-tool-info.md）。
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
const PREFIX = 'tool_cagr';

/** 为路径加上语言前缀（默认语无前缀）。 */
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * 渲染 how-to-calculate-cagr 工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 * @returns 完整页面 HTML
 */
export const renderHowToCalculateCagrPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 读取本工具键。 */
	const tx = (key: string) => t(opts.lang, `${PREFIX}_${key}` as keyof typeof import('../site/i18n/en').default);

	const toolPath = '/tools/how-to-calculate-cagr';
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
			currentSlug: 'how-to-calculate-cagr',
			currentAnchor: '#cagr',
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
    .cagr-warn { background:#fff3cd; border:1px solid #ffecb5; color:#664d03; padding:.75rem 1rem; border-radius:8px; margin-bottom:1rem; font-size:.92rem; }
    .result { background:#f8f9fa; padding:1rem; border-radius:8px; margin-top:1rem; }
    .cagr-out { font-size:1.35rem; font-weight:600; font-variant-numeric:tabular-nums; }
    .cagr-row { color:#495057; font-size:.92rem; margin-top:.4rem; }
    .cagr-row strong { color:#343a40; }
    .cagr-h { font-size:1rem; font-weight:600; margin:1rem 0 .35rem; }
    .cagr-steps { margin:0; padding-inline-start:1.3rem; font-size:.92rem; }
    .cagr-steps li { margin-bottom:.35rem; }
    .result .muted { color:#6c757d; font-size:.9rem; margin-top:.75rem; }
    .result .muted.cagr-err { color:#b02a37; font-weight:500; margin-top:0; }
    .cagr-field[hidden] { display:none !important; }
  </style>`;

	const contentHtml = `
    <div id="cagr" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(tx('title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <div class="cagr-warn" role="note">${escapeHtml(tx('safety_banner'))}</div>
        <form id="calcForm" novalidate>
          <div class="form-group">
            <label class="form-label" for="mode">${escapeHtml(tx('mode_label'))}</label>
            <select id="mode" class="input-lg">
              <option value="rate" selected>${escapeHtml(tx('mode_rate'))}</option>
              <option value="end">${escapeHtml(tx('mode_end'))}</option>
              <option value="years">${escapeHtml(tx('mode_years'))}</option>
            </select>
          </div>
          <span class="form-hint">${escapeHtml(tx('hint'))}</span>
          <div class="form-row">
            <div class="form-group" id="fgBegin">
              <label class="form-label" for="begin">${escapeHtml(tx('begin_label'))}</label>
              <input id="begin" class="input-lg" type="text" inputmode="decimal" autocomplete="off" placeholder="${escapeHtml(tx('begin_ph'))}">
            </div>
            <div class="form-group cagr-field" data-for="rate years" id="fgEnd">
              <label class="form-label" for="end">${escapeHtml(tx('end_label'))}</label>
              <input id="end" class="input-lg" type="text" inputmode="decimal" autocomplete="off" placeholder="${escapeHtml(tx('end_ph'))}">
            </div>
            <div class="form-group cagr-field" data-for="end years" id="fgRate">
              <label class="form-label" for="rate">${escapeHtml(tx('rate_label'))}</label>
              <input id="rate" class="input-lg" type="text" inputmode="decimal" autocomplete="off" placeholder="${escapeHtml(tx('rate_ph'))}">
            </div>
            <div class="form-group cagr-field" data-for="rate end" id="fgYears">
              <label class="form-label" for="years">${escapeHtml(tx('years_label'))}</label>
              <input id="years" class="input-lg" type="text" inputmode="decimal" autocomplete="off" placeholder="${escapeHtml(tx('years_ph'))}">
            </div>
          </div>
          <div class="btn-row">
            <button type="submit" class="btn btn-primary">${escapeHtml(tx('calculate'))}</button>
            <button type="button" id="btnSample" class="btn btn-outline-secondary">${escapeHtml(tx('sample'))}</button>
            <button type="button" id="btnClear" class="btn btn-outline-secondary">${escapeHtml(tx('clear'))}</button>
          </div>
        </form>
        <div id="calcResult" class="result" style="display:none" aria-live="polite">
          <div class="cagr-out"><span id="cagrPrimaryLabel">${escapeHtml(tx('result_label'))}</span>: <span id="cagrPrimary"></span></div>
          <div id="cagrRows"></div>
          <div id="cagrStepsWrap">
            <div class="cagr-h">${escapeHtml(tx('steps_title'))}</div>
            <ol id="cagrSteps" class="cagr-steps"></ol>
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
			{ label: tx('ref_cagr_label'), href: 'https://www.investopedia.com/terms/c/cagr.asp' },
			{
				label: tx('ref_formula_label'),
				href: 'https://www.investopedia.com/ask/answers/071014/what-formula-calculating-compound-annual-growth-rate-cagr.asp',
			},
		],
	});

	/** 前端文案。 */
	const clientText = {
		lang: opts.lang,
		err: tx('err_generic'),
		note: tx('result_note'),
		labelRate: tx('result_label'),
		labelEnd: tx('endOut_label'),
		labelYears: tx('yearsOut_label'),
		labelMult: tx('multOut_label'),
		stepRate: tx('step_rate_tpl'),
		stepEnd: tx('step_end_tpl'),
		stepYears: tx('step_years_tpl'),
		stepCheck: tx('step_check_tpl'),
	};

	const extraBodyHtml = `
  <script>
    (function () {
      /** 控件。 */
      var form = document.getElementById('calcForm');
      var modeEl = document.getElementById('mode');
      var beginEl = document.getElementById('begin');
      var endEl = document.getElementById('end');
      var rateEl = document.getElementById('rate');
      var yearsEl = document.getElementById('years');
      var fields = Array.prototype.slice.call(document.querySelectorAll('.cagr-field'));
      var result = document.getElementById('calcResult');
      var primaryLabel = document.getElementById('cagrPrimaryLabel');
      var primaryOut = document.getElementById('cagrPrimary');
      var rowsEl = document.getElementById('cagrRows');
      var stepsEl = document.getElementById('cagrSteps');
      var stepsWrap = document.getElementById('cagrStepsWrap');
      var noteEl = document.getElementById('calcNote');
      var T = ${JSON.stringify(clientText)};
      var sampleIndex = 0;
      var SAMPLES = [
        { mode: 'rate', begin: '10000', end: '16105.1', rate: '', years: '5' },
        { mode: 'end', begin: '10000', end: '', rate: '10', years: '5' },
        { mode: 'years', begin: '10000', end: '16105.1', rate: '10', years: '' },
        { mode: 'rate', begin: '5000', end: '8000', rate: '', years: '3' }
      ];

      /**
       * 解析正数。
       * @param {string} raw 原文
       * @returns {number|null}
       */
      function parsePos(raw) {
        var s = String(raw == null ? '' : raw).trim().replace(',', '.');
        if (!s) return null;
        var n = Number(s);
        if (!isFinite(n) || !(n > 0)) return null;
        return n;
      }

      /**
       * 格式化数字。
       * @param {number} n 数值
       * @param {number} digits 小数位
       * @returns {string}
       */
      function fmt(n, digits) {
        if (!isFinite(n)) return '—';
        var d = digits == null ? 4 : digits;
        try {
          return new Intl.NumberFormat(T.lang + '-u-nu-latn', {
            maximumFractionDigits: d,
            minimumFractionDigits: 0
          }).format(n);
        } catch (e) {
          return n.toFixed(d);
        }
      }

      /**
       * 模板替换。
       * @param {string} tpl 模板
       * @param {Object} map 键值
       * @returns {string}
       */
      function fill(tpl, map) {
        var s = String(tpl || '');
        Object.keys(map).forEach(function (k) {
          s = s.split('{' + k + '}').join(String(map[k]));
        });
        return s;
      }

      /** 按模式显示字段。 */
      function syncFields() {
        var mode = modeEl.value;
        fields.forEach(function (el) {
          var forModes = (el.getAttribute('data-for') || '').split(' ');
          var show = forModes.indexOf(mode) !== -1;
          if (show) el.removeAttribute('hidden');
          else el.setAttribute('hidden', '');
        });
      }

      /**
       * 显示错误。
       * @param {string} msg 错误文案
       */
      function showError(msg) {
        result.style.display = 'block';
        primaryOut.textContent = '—';
        rowsEl.innerHTML = '';
        stepsEl.innerHTML = '';
        stepsWrap.style.display = 'none';
        noteEl.className = 'muted cagr-err';
        noteEl.textContent = msg;
      }

      /** 核心计算。 */
      function run() {
        var mode = modeEl.value;
        var begin = parsePos(beginEl.value);
        if (begin == null) return showError(T.err);
        var end = 0;
        var years = 0;
        var ratePct = 0;
        var steps = [];

        if (mode === 'rate') {
          end = parsePos(endEl.value);
          years = parsePos(yearsEl.value);
          if (end == null || years == null) return showError(T.err);
          ratePct = (Math.pow(end / begin, 1 / years) - 1) * 100;
          primaryLabel.textContent = T.labelRate;
          primaryOut.textContent = fmt(ratePct, 2) + '%';
          steps.push(fill(T.stepRate, { end: fmt(end, 2), begin: fmt(begin, 2), years: fmt(years, 2), rate: fmt(ratePct, 2) }));
        } else if (mode === 'end') {
          ratePct = parsePos(rateEl.value);
          years = parsePos(yearsEl.value);
          if (ratePct == null || years == null) return showError(T.err);
          end = begin * Math.pow(1 + ratePct / 100, years);
          primaryLabel.textContent = T.labelEnd;
          primaryOut.textContent = fmt(end, 2);
          steps.push(fill(T.stepEnd, { begin: fmt(begin, 2), rate: fmt(ratePct, 2), years: fmt(years, 2), end: fmt(end, 2) }));
        } else {
          end = parsePos(endEl.value);
          ratePct = parsePos(rateEl.value);
          if (end == null || ratePct == null || ratePct === 0) return showError(T.err);
          if (ratePct === -100) return showError(T.err);
          var base = 1 + ratePct / 100;
          if (!(base > 0) || !(end / begin > 0)) return showError(T.err);
          years = Math.log(end / begin) / Math.log(base);
          if (!(years > 0) || !isFinite(years)) return showError(T.err);
          primaryLabel.textContent = T.labelYears;
          primaryOut.textContent = fmt(years, 4);
          steps.push(fill(T.stepYears, { end: fmt(end, 2), begin: fmt(begin, 2), rate: fmt(ratePct, 2), years: fmt(years, 4) }));
        }

        var mult = end / begin;
        rowsEl.innerHTML = '<div class="cagr-row"><strong>' + T.labelMult + ':</strong> ' + fmt(mult, 4) + '×</div>';
        steps.push(fill(T.stepCheck, { begin: fmt(begin, 2), rate: fmt(ratePct, 2), years: fmt(years, 4), end: fmt(begin * Math.pow(1 + ratePct / 100, years), 2) }));
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
        beginEl.value = s.begin;
        endEl.value = s.end;
        rateEl.value = s.rate;
        yearsEl.value = s.years;
        syncFields();
        run();
      }

      /** 清空。 */
      function clearAll() {
        form.reset();
        modeEl.value = 'rate';
        syncFields();
        result.style.display = 'none';
        beginEl.focus();
      }

      modeEl.addEventListener('change', function () {
        syncFields();
        run();
      });
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        run();
      });
      document.getElementById('btnSample').addEventListener('click', loadSample);
      document.getElementById('btnClear').addEventListener('click', clearAll);
      syncFields();
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('how-to-calculate-cagr');
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
