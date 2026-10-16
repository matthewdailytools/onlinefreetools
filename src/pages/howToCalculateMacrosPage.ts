/**
 * 宏量营养素计算器：日热量 + 蛋白/碳水/脂肪百分比 → 克数（4/4/9 kcal/g）。
 * YMYL：教育算术，非营养治疗或医疗建议。
 * slug: how-to-calculate-macros（见 work-tasks/how-to-calculate-macros/02-tool-info.md）。
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
const PREFIX = 'tool_macros';

/** 为路径加上语言前缀（默认语无前缀）。 */
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * 渲染 how-to-calculate-macros 工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 * @returns 完整页面 HTML
 */
export const renderHowToCalculateMacrosPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 读取本工具键。 */
	const tx = (key: string) => t(opts.lang, `${PREFIX}_${key}` as keyof typeof import('../site/i18n/en').default);

	const toolPath = '/tools/how-to-calculate-macros';
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
			currentSlug: 'how-to-calculate-macros',
			currentAnchor: '#macros',
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
    .mac-warn { background:#fff3cd; border:1px solid #ffecb5; color:#664d03; padding:.75rem 1rem; border-radius:8px; margin-bottom:1rem; font-size:.92rem; }
    .result { background:#f8f9fa; padding:1rem; border-radius:8px; margin-top:1rem; }
    .mac-out { font-size:1.2rem; font-weight:600; font-variant-numeric:tabular-nums; margin-bottom:.35rem; }
    .mac-row { color:#495057; font-size:.92rem; margin-top:.35rem; }
    .mac-row strong { color:#343a40; }
    .mac-h { font-size:1rem; font-weight:600; margin:1rem 0 .35rem; }
    .mac-steps { margin:0; padding-inline-start:1.3rem; font-size:.92rem; }
    .mac-steps li { margin-bottom:.35rem; }
    .result .muted { color:#6c757d; font-size:.9rem; margin-top:.75rem; }
    .result .muted.mac-err { color:#b02a37; font-weight:500; margin-top:0; }
  </style>`;

	const contentHtml = `
    <div id="macros" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(tx('title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <div class="mac-warn" role="note">${escapeHtml(tx('safety_banner'))}</div>
        <form id="calcForm" novalidate>
          <span class="form-hint">${escapeHtml(tx('hint'))}</span>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label" for="cal">${escapeHtml(tx('cal_label'))}</label>
              <input id="cal" class="input-lg" type="text" inputmode="decimal" autocomplete="off" placeholder="${escapeHtml(tx('cal_ph'))}">
            </div>
            <div class="form-group">
              <label class="form-label" for="pPct">${escapeHtml(tx('pPct_label'))}</label>
              <input id="pPct" class="input-lg" type="text" inputmode="decimal" autocomplete="off" placeholder="${escapeHtml(tx('pPct_ph'))}">
            </div>
            <div class="form-group">
              <label class="form-label" for="cPct">${escapeHtml(tx('cPct_label'))}</label>
              <input id="cPct" class="input-lg" type="text" inputmode="decimal" autocomplete="off" placeholder="${escapeHtml(tx('cPct_ph'))}">
            </div>
            <div class="form-group">
              <label class="form-label" for="fPct">${escapeHtml(tx('fPct_label'))}</label>
              <input id="fPct" class="input-lg" type="text" inputmode="decimal" autocomplete="off" placeholder="${escapeHtml(tx('fPct_ph'))}">
            </div>
          </div>
          <div class="chip-row" id="macChips" aria-label="${escapeHtml(tx('chips_label'))}"></div>
          <div class="btn-row">
            <button type="submit" class="btn btn-primary">${escapeHtml(tx('calculate'))}</button>
            <button type="button" id="btnSample" class="btn btn-outline-secondary">${escapeHtml(tx('sample'))}</button>
            <button type="button" id="btnClear" class="btn btn-outline-secondary">${escapeHtml(tx('clear'))}</button>
          </div>
        </form>
        <div id="calcResult" class="result" style="display:none" aria-live="polite">
          <div class="mac-out"><strong>${escapeHtml(tx('pG_label'))}:</strong> <span id="pG"></span></div>
          <div class="mac-out"><strong>${escapeHtml(tx('cG_label'))}:</strong> <span id="cG"></span></div>
          <div class="mac-out"><strong>${escapeHtml(tx('fG_label'))}:</strong> <span id="fG"></span></div>
          <div id="macRows"></div>
          <div id="macStepsWrap">
            <div class="mac-h">${escapeHtml(tx('steps_title'))}</div>
            <ol id="macSteps" class="mac-steps"></ol>
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
			{ label: tx('ref_a_label'), href: 'https://en.wikipedia.org/wiki/Food_energy' },
			{ label: tx('ref_b_label'), href: 'https://www.cdc.gov/nutrition/' },
		],
	});

	/** 前端文案。 */
	const clientText = {
		lang: opts.lang,
		err: tx('err_generic'),
		note: tx('result_note'),
		rowSum: tx('sumOut_label'),
		rowKcalP: tx('kcalP_label'),
		rowKcalC: tx('kcalC_label'),
		rowKcalF: tx('kcalF_label'),
		stepP: tx('step_p_tpl'),
		stepC: tx('step_c_tpl'),
		stepF: tx('step_f_tpl'),
		stepSum: tx('step_sum_tpl'),
		chip304030: tx('chip_304030'),
		chip404020: tx('chip_404020'),
		chip255025: tx('chip_255025'),
	};

	const extraBodyHtml = `
  <script>
    (function () {
      /** 控件。 */
      var form = document.getElementById('calcForm');
      var calEl = document.getElementById('cal');
      var pPctEl = document.getElementById('pPct');
      var cPctEl = document.getElementById('cPct');
      var fPctEl = document.getElementById('fPct');
      var chipsEl = document.getElementById('macChips');
      var result = document.getElementById('calcResult');
      var pGEl = document.getElementById('pG');
      var cGEl = document.getElementById('cG');
      var fGEl = document.getElementById('fG');
      var rowsEl = document.getElementById('macRows');
      var stepsEl = document.getElementById('macSteps');
      var stepsWrap = document.getElementById('macStepsWrap');
      var noteEl = document.getElementById('calcNote');
      var T = ${JSON.stringify(clientText)};
      var sampleIndex = 0;
      var SAMPLES = [
        { cal: '2000', p: '30', c: '40', f: '30' },
        { cal: '1800', p: '40', c: '40', f: '20' },
        { cal: '2500', p: '25', c: '50', f: '25' },
        { cal: '2200', p: '30', c: '35', f: '35' }
      ];

      /**
       * 解析非负有限数。
       * @param {string} raw 原文
       * @param {boolean} requirePositive 是否要求 > 0
       * @returns {number|null}
       */
      function parseNum(raw, requirePositive) {
        var s = String(raw == null ? '' : raw).trim().replace(',', '.');
        if (!s) return null;
        var n = Number(s);
        if (!isFinite(n)) return null;
        if (requirePositive ? !(n > 0) : n < 0) return null;
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
        var d = digits == null ? 2 : digits;
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

      /** 渲染百分比拆分芯片。 */
      function renderChips() {
        var chips = [
          { label: T.chip304030, p: '30', c: '40', f: '30' },
          { label: T.chip404020, p: '40', c: '40', f: '20' },
          { label: T.chip255025, p: '25', c: '50', f: '25' }
        ];
        chipsEl.innerHTML = '';
        chips.forEach(function (ch) {
          var b = document.createElement('button');
          b.type = 'button';
          b.className = 'btn btn-outline-secondary btn-sm';
          b.textContent = ch.label;
          b.addEventListener('click', function () {
            pPctEl.value = ch.p;
            cPctEl.value = ch.c;
            fPctEl.value = ch.f;
            run();
          });
          chipsEl.appendChild(b);
        });
      }

      /**
       * 显示错误。
       * @param {string} msg 错误文案
       */
      function showError(msg) {
        result.style.display = 'block';
        pGEl.textContent = '—';
        cGEl.textContent = '—';
        fGEl.textContent = '—';
        rowsEl.innerHTML = '';
        stepsEl.innerHTML = '';
        stepsWrap.style.display = 'none';
        noteEl.className = 'muted mac-err';
        noteEl.textContent = msg;
      }

      /** 核心计算。 */
      function run() {
        var cal = parseNum(calEl.value, true);
        var p = parseNum(pPctEl.value, false);
        var c = parseNum(cPctEl.value, false);
        var f = parseNum(fPctEl.value, false);
        if (cal == null || p == null || c == null || f == null) return showError(T.err);
        if (Math.abs(p + c + f - 100) > 1e-6) return showError(T.err);

        var kcalP = (cal * p) / 100;
        var kcalC = (cal * c) / 100;
        var kcalF = (cal * f) / 100;
        var pG = kcalP / 4;
        var cG = kcalC / 4;
        var fG = kcalF / 9;

        pGEl.textContent = fmt(pG, 2) + ' g';
        cGEl.textContent = fmt(cG, 2) + ' g';
        fGEl.textContent = fmt(fG, 2) + ' g';
        rowsEl.innerHTML =
          '<div class="mac-row"><strong>' + T.rowKcalP + ':</strong> ' + fmt(kcalP, 1) + '</div>' +
          '<div class="mac-row"><strong>' + T.rowKcalC + ':</strong> ' + fmt(kcalC, 1) + '</div>' +
          '<div class="mac-row"><strong>' + T.rowKcalF + ':</strong> ' + fmt(kcalF, 1) + '</div>' +
          '<div class="mac-row"><strong>' + T.rowSum + ':</strong> ' + fmt(p + c + f, 1) + '%</div>';

        var steps = [
          fill(T.stepP, { cal: fmt(cal, 0), pct: fmt(p, 1), kcal: fmt(kcalP, 1), g: fmt(pG, 2) }),
          fill(T.stepC, { cal: fmt(cal, 0), pct: fmt(c, 1), kcal: fmt(kcalC, 1), g: fmt(cG, 2) }),
          fill(T.stepF, { cal: fmt(cal, 0), pct: fmt(f, 1), kcal: fmt(kcalF, 1), g: fmt(fG, 2) }),
          fill(T.stepSum, { p: fmt(p, 1), c: fmt(c, 1), f: fmt(f, 1) })
        ];
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
        calEl.value = s.cal;
        pPctEl.value = s.p;
        cPctEl.value = s.c;
        fPctEl.value = s.f;
        run();
      }

      /** 清空。 */
      function clearAll() {
        form.reset();
        result.style.display = 'none';
        calEl.focus();
      }

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        run();
      });
      document.getElementById('btnSample').addEventListener('click', loadSample);
      document.getElementById('btnClear').addEventListener('click', clearAll);
      renderChips();
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('how-to-calculate-macros');
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
