/**
 * 一次最大重量（1RM）估算页：Epley / Brzycki / Lombardi 对比，
 * 并给出常用训练百分比负荷表；教育用途，非教练建议。
 * slug: how-to-calculate-one-rep-max（见 work-tasks/how-to-calculate-one-rep-max/02-tool-info.md）。
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
const PREFIX = 'tool_one_rep_max';

/** 为路径加上语言前缀（默认语无前缀）。 */
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * 渲染 how-to-calculate-one-rep-max 工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 * @returns 完整页面 HTML
 */
export const renderHowToCalculateOneRepMaxPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 读取本工具键。 */
	const tx = (key: string) => t(opts.lang, `${PREFIX}_${key}` as keyof typeof import('../site/i18n/en').default);

	const toolPath = '/tools/how-to-calculate-one-rep-max';
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
			currentSlug: 'how-to-calculate-one-rep-max',
			currentAnchor: '#one-rep-max',
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
    .orm-out { font-size:1.35rem; font-weight:600; font-variant-numeric:tabular-nums; }
    .orm-row { color:#495057; font-size:.92rem; margin-top:.4rem; }
    .orm-row strong { color:#343a40; }
    .orm-h { font-size:1rem; font-weight:600; margin:1rem 0 .35rem; }
    .orm-table { width:100%; border-collapse:collapse; font-size:.9rem; font-variant-numeric:tabular-nums; }
    .orm-table th, .orm-table td { padding:.3rem .5rem; border-bottom:1px solid #dee2e6; text-align:start; }
    .orm-table th { color:#495057; font-weight:600; }
    .orm-steps { margin:0; padding-inline-start:1.3rem; font-size:.92rem; }
    .orm-steps li { margin-bottom:.35rem; }
    .result .muted { color:#6c757d; font-size:.9rem; margin-top:.75rem; }
    .result .muted.orm-err { color:#b02a37; font-weight:500; margin-top:0; }
    .orm-warn { background:#fff3cd; color:#664d03; border-radius:6px; padding:.6rem .75rem; font-size:.9rem; margin-bottom:1rem; }
  </style>`;

	const contentHtml = `
    <div id="one-rep-max" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(tx('title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <div class="orm-warn" role="note">${escapeHtml(tx('safety_banner'))}</div>
        <form id="calcForm" novalidate>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label" for="weight">${escapeHtml(tx('weight_label'))}</label>
              <input id="weight" class="input-lg" type="text" inputmode="decimal" autocomplete="off" placeholder="${escapeHtml(tx('weight_ph'))}">
            </div>
            <div class="form-group">
              <label class="form-label" for="reps">${escapeHtml(tx('reps_label'))}</label>
              <input id="reps" class="input-lg" type="text" inputmode="numeric" autocomplete="off" placeholder="${escapeHtml(tx('reps_ph'))}">
            </div>
          </div>
          <span class="form-hint">${escapeHtml(tx('hint'))}</span>
          <div class="btn-row">
            <button type="submit" class="btn btn-primary">${escapeHtml(tx('calculate'))}</button>
            <button type="button" id="btnSample" class="btn btn-outline-secondary">${escapeHtml(tx('sample'))}</button>
            <button type="button" id="btnClear" class="btn btn-outline-secondary">${escapeHtml(tx('clear'))}</button>
          </div>
        </form>
        <div id="calcResult" class="result" style="display:none" aria-live="polite">
          <div class="orm-out"><span>${escapeHtml(tx('ormOut_label'))}</span>: <span id="ormOut"></span></div>
          <div id="ormRows"></div>
          <div id="ormPctWrap">
            <div class="orm-h">${escapeHtml(tx('pct_title'))}</div>
            <table class="orm-table">
              <thead><tr><th>${escapeHtml(tx('pct_col_pct'))}</th><th>${escapeHtml(tx('pct_col_load'))}</th></tr></thead>
              <tbody id="ormPctBody"></tbody>
            </table>
          </div>
          <div id="ormStepsWrap">
            <div class="orm-h">${escapeHtml(tx('steps_title'))}</div>
            <ol id="ormSteps" class="orm-steps"></ol>
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
			{ label: tx('ref_a_label'), href: 'https://en.wikipedia.org/wiki/One-repetition_maximum' },
			{ label: tx('ref_b_label'), href: 'https://en.wikipedia.org/wiki/Strength_training' },
		],
	});

	/** 前端文案。 */
	const clientText = {
		lang: opts.lang,
		err: tx('err_generic'),
		errHigh: tx('err_high_reps'),
		note: tx('result_note'),
		rowEpley: tx('row_epley'),
		rowBrzycki: tx('row_brzycki'),
		rowLombardi: tx('row_lombardi'),
		rowSpread: tx('row_spread_tpl'),
		stepEpley: tx('step_epley_tpl'),
		stepBrzycki: tx('step_brzycki_tpl'),
		stepLombardi: tx('step_lombardi_tpl'),
		stepPct: tx('step_pct_tpl'),
	};

	const extraBodyHtml = `
  <script>
    (function () {
      /** 输入与结果控件。 */
      var form = document.getElementById('calcForm');
      var weightEl = document.getElementById('weight');
      var repsEl = document.getElementById('reps');
      var result = document.getElementById('calcResult');
      var ormOut = document.getElementById('ormOut');
      var rowsEl = document.getElementById('ormRows');
      var pctBody = document.getElementById('ormPctBody');
      var stepsEl = document.getElementById('ormSteps');
      var stepsWrap = document.getElementById('ormStepsWrap');
      var noteEl = document.getElementById('calcNote');
      var T = ${JSON.stringify(clientText)};
      /** 样例轮换。 */
      var SAMPLES = [
        { w: '100', r: '5' },
        { w: '60', r: '8' },
        { w: '80', r: '3' },
        { w: '135', r: '1' }
      ];
      var sampleIndex = 0;
      /** 常用训练百分比。 */
      var PCTS = [50, 60, 70, 75, 80, 85, 90, 95];

      /**
       * 解析正数（允许小数逗号）。
       * @param {string} raw 原文
       * @returns {number|null}
       */
      function parsePos(raw) {
        var s = String(raw == null ? '' : raw).trim().replace(',', '.');
        if (!s) return null;
        var n = Number(s);
        return isFinite(n) && n > 0 ? n : null;
      }

      /**
       * 解析正整数次数。
       * @param {string} raw 原文
       * @returns {number|null}
       */
      function parseReps(raw) {
        var s = String(raw == null ? '' : raw).trim();
        if (!s || s.indexOf('.') >= 0 || s.indexOf(',') >= 0) return null;
        var n = Number(s);
        return Number.isInteger(n) && n >= 1 ? n : null;
      }

      /**
       * 格式化重量（两位小数，去无意义尾零）。
       * @param {number} n 数值
       * @returns {string}
       */
      function fmt(n) {
        if (!isFinite(n)) return '—';
        var s = n.toFixed(2);
        if (s.slice(-3) === '.00') return s.slice(0, -3);
        if (s.charAt(s.length - 1) === '0') return s.slice(0, -1);
        return s;
      }

      /** 模板替换。 */
      function fill(tpl, map) {
        var s = String(tpl || '');
        Object.keys(map).forEach(function (k) { s = s.split('{' + k + '}').join(String(map[k])); });
        return s;
      }

      /** 显示错误。 */
      function showError(msg) {
        result.style.display = 'block';
        ormOut.textContent = '—';
        rowsEl.innerHTML = '';
        pctBody.innerHTML = '';
        stepsEl.innerHTML = '';
        stepsWrap.style.display = 'none';
        noteEl.className = 'muted orm-err';
        noteEl.textContent = msg;
      }

      /** 估算 1RM 并刷新百分比表。 */
      function run() {
        var w = parsePos(weightEl.value);
        var r = parseReps(repsEl.value);
        if (!(w && r)) return showError(T.err);
        if (r > 12) return showError(T.errHigh);

        var epley = w * (1 + r / 30);
        var brzycki = r === 1 ? w : w * (36 / (37 - r));
        var lombardi = w * Math.pow(r, 0.1);
        var lo = Math.min(epley, brzycki, lombardi);
        var hi = Math.max(epley, brzycki, lombardi);

        ormOut.textContent = fmt(epley);
        rowsEl.innerHTML =
          '<div class="orm-row"><strong>' + T.rowEpley + ':</strong> ' + fmt(epley) + '</div>' +
          '<div class="orm-row"><strong>' + T.rowBrzycki + ':</strong> ' + fmt(brzycki) + '</div>' +
          '<div class="orm-row"><strong>' + T.rowLombardi + ':</strong> ' + fmt(lombardi) + '</div>' +
          '<div class="orm-row">' + fill(T.rowSpread, { lo: fmt(lo), hi: fmt(hi) }) + '</div>';

        var pctHtml = '';
        for (var i = 0; i < PCTS.length; i++) {
          var p = PCTS[i];
          pctHtml += '<tr><td>' + p + '%</td><td>' + fmt(epley * p / 100) + '</td></tr>';
        }
        pctBody.innerHTML = pctHtml;

        stepsEl.innerHTML = [
          fill(T.stepEpley, { w: fmt(w), r: String(r), orm: fmt(epley) }),
          fill(T.stepBrzycki, { w: fmt(w), r: String(r), orm: fmt(brzycki) }),
          fill(T.stepLombardi, { w: fmt(w), r: String(r), orm: fmt(lombardi) }),
          fill(T.stepPct, { orm: fmt(epley), p80: fmt(epley * 0.8) })
        ].map(function (s) { return '<li>' + s + '</li>'; }).join('');
        stepsWrap.style.display = '';
        noteEl.className = 'muted';
        noteEl.textContent = T.note;
        result.style.display = 'block';
      }

      /** 加载样例。 */
      function loadSample() {
        var s = SAMPLES[sampleIndex % SAMPLES.length];
        sampleIndex += 1;
        weightEl.value = s.w;
        repsEl.value = s.r;
        run();
      }

      /** 清空。 */
      function clearAll() {
        form.reset();
        result.style.display = 'none';
        weightEl.focus();
      }

      form.addEventListener('submit', function (e) { e.preventDefault(); run(); });
      document.getElementById('btnSample').addEventListener('click', loadSample);
      document.getElementById('btnClear').addEventListener('click', clearAll);
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('how-to-calculate-one-rep-max');
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
