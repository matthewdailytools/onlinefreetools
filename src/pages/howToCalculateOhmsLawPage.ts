/**
 * 欧姆定律计算器：三模式求 R / V / I，并显示功率；理想直流教学用途。
 * slug: how-to-calculate-ohms-law。
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
const PREFIX = 'tool_ohms_law';

/** 为路径加上语言前缀（默认语无前缀）。 */
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * 渲染 how-to-calculate-ohms-law 工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 * @returns 完整页面 HTML
 */
export const renderHowToCalculateOhmsLawPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 读取本工具键。 */
	const tx = (key: string) => t(opts.lang, `${PREFIX}_${key}` as keyof typeof import('../site/i18n/en').default);

	const toolPath = '/tools/how-to-calculate-ohms-law';
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
			currentSlug: 'how-to-calculate-ohms-law',
			currentAnchor: '#ohms-law',
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
    .ohm-warn { background:#fff3cd; border:1px solid #ffecb5; color:#664d03; padding:.75rem 1rem; border-radius:8px; margin-bottom:1rem; font-size:.92rem; }
    .result { background:#f8f9fa; padding:1rem; border-radius:8px; margin-top:1rem; }
    .ohm-out { font-size:1.35rem; font-weight:600; font-variant-numeric:tabular-nums; }
    .ohm-row { color:#495057; font-size:.92rem; margin-top:.4rem; }
    .ohm-row strong { color:#343a40; }
    .ohm-h { font-size:1rem; font-weight:600; margin:1rem 0 .35rem; }
    .ohm-steps { margin:0; padding-inline-start:1.3rem; font-size:.92rem; }
    .ohm-steps li { margin-bottom:.35rem; }
    .result .muted { color:#6c757d; font-size:.9rem; margin-top:.75rem; }
    .result .muted.ohm-err { color:#b02a37; font-weight:500; margin-top:0; }
  </style>`;

	const contentHtml = `
    <div id="ohms-law" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(tx('title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <div class="ohm-warn" role="note">${escapeHtml(tx('safety_banner'))}</div>
        <form id="calcForm" novalidate>
          <span class="form-hint">${escapeHtml(tx('hint'))}</span>
          <div class="form-group">
            <label class="form-label" for="mode">${escapeHtml(tx('mode_label'))}</label>
            <select id="mode" class="input-lg">
              <option value="r">${escapeHtml(tx('mode_r'))}</option>
              <option value="v">${escapeHtml(tx('mode_v'))}</option>
              <option value="i">${escapeHtml(tx('mode_i'))}</option>
            </select>
          </div>
          <div class="form-row">
            <div class="form-group" id="wrapV">
              <label class="form-label" for="V">${escapeHtml(tx('V_label'))}</label>
              <input id="V" class="input-lg" type="text" inputmode="decimal" autocomplete="off" placeholder="${escapeHtml(tx('V_ph'))}">
            </div>
            <div class="form-group" id="wrapI">
              <label class="form-label" for="I">${escapeHtml(tx('I_label'))}</label>
              <input id="I" class="input-lg" type="text" inputmode="decimal" autocomplete="off" placeholder="${escapeHtml(tx('I_ph'))}">
            </div>
            <div class="form-group" id="wrapR" style="display:none">
              <label class="form-label" for="R">${escapeHtml(tx('R_label'))}</label>
              <input id="R" class="input-lg" type="text" inputmode="decimal" autocomplete="off" placeholder="${escapeHtml(tx('R_ph'))}">
            </div>
          </div>
          <div class="btn-row">
            <button type="submit" class="btn btn-primary">${escapeHtml(tx('calculate'))}</button>
            <button type="button" id="btnSample" class="btn btn-outline-secondary">${escapeHtml(tx('sample'))}</button>
            <button type="button" id="btnClear" class="btn btn-outline-secondary">${escapeHtml(tx('clear'))}</button>
          </div>
        </form>
        <div id="calcResult" class="result" style="display:none" aria-live="polite">
          <div class="ohm-out"><span id="primaryLabel"></span>: <span id="primaryOut"></span></div>
          <div id="ohmRows"></div>
          <div id="ohmStepsWrap">
            <div class="ohm-h">${escapeHtml(tx('steps_title'))}</div>
            <ol id="ohmSteps" class="ohm-steps"></ol>
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
			{ label: tx('ref_a_label'), href: 'https://en.wikipedia.org/wiki/Ohm%27s_law' },
			{ label: tx('ref_b_label'), href: 'https://en.wikipedia.org/wiki/Electric_power' },
		],
	});

	/** 前端文案。 */
	const clientText = {
		lang: opts.lang,
		err: tx('err_generic'),
		note: tx('result_note'),
		labelR: tx('rOut_label'),
		labelV: tx('vOut_label'),
		labelI: tx('iOut_label'),
		labelP: tx('pOut_label'),
		stepR: tx('step_r_tpl'),
		stepV: tx('step_v_tpl'),
		stepI: tx('step_i_tpl'),
		stepP: tx('step_p_tpl'),
	};

	const extraBodyHtml = `
  <script>
    (function () {
      /** 控件。 */
      var form = document.getElementById('calcForm');
      var modeEl = document.getElementById('mode');
      var VEl = document.getElementById('V');
      var IEl = document.getElementById('I');
      var REl = document.getElementById('R');
      var wrapV = document.getElementById('wrapV');
      var wrapI = document.getElementById('wrapI');
      var wrapR = document.getElementById('wrapR');
      var result = document.getElementById('calcResult');
      var primaryLabel = document.getElementById('primaryLabel');
      var primaryOut = document.getElementById('primaryOut');
      var rowsEl = document.getElementById('ohmRows');
      var stepsEl = document.getElementById('ohmSteps');
      var stepsWrap = document.getElementById('ohmStepsWrap');
      var noteEl = document.getElementById('calcNote');
      var T = ${JSON.stringify(clientText)};
      var sampleIndex = 0;
      var SAMPLES = [
        { mode: 'r', V: '12', I: '2', R: '' },
        { mode: 'v', V: '', I: '2', R: '6' },
        { mode: 'i', V: '12', I: '', R: '6' }
      ];

      /**
       * 解析有限数。
       * @param {string} raw 原文
       * @param {boolean} requirePositive 是否要求 > 0
       * @returns {number|null}
       */
      function parseNum(raw, requirePositive) {
        var s = String(raw == null ? '' : raw).trim().replace(',', '.');
        if (!s) return null;
        var n = Number(s);
        if (!isFinite(n)) return null;
        if (requirePositive && !(n > 0)) return null;
        return n;
      }

      /**
       * 格式化。
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
          return n.toFixed(Math.min(d, 6));
        }
      }

      /**
       * 模板填充。
       * @param {string} tpl 模板
       * @param {Record<string,string>} map 映射
       * @returns {string}
       */
      function fill(tpl, map) {
        var out = String(tpl || '');
        Object.keys(map).forEach(function (k) {
          out = out.split('{' + k + '}').join(map[k]);
        });
        return out;
      }

      /** 按模式显示/隐藏输入。 */
      function syncModeUi() {
        var m = modeEl.value;
        wrapV.style.display = m === 'v' ? 'none' : '';
        wrapI.style.display = m === 'i' ? 'none' : '';
        wrapR.style.display = m === 'r' ? 'none' : '';
      }

      /** 核心计算。 */
      function runCalc() {
        var m = modeEl.value;
        result.style.display = 'block';
        rowsEl.innerHTML = '';
        stepsEl.innerHTML = '';
        var V = parseNum(VEl.value, false);
        var I = parseNum(IEl.value, false);
        var R = parseNum(REl.value, true);
        var ok = false;
        var primary = '';
        var primaryLbl = '';
        var steps = [];
        var map = {};

        if (m === 'r') {
          if (V == null || I == null || I === 0) {
            noteEl.className = 'muted ohm-err';
            noteEl.textContent = T.err;
            primaryOut.textContent = '—';
            primaryLabel.textContent = T.labelR;
            stepsWrap.style.display = 'none';
            return false;
          }
          R = V / I;
          primary = fmt(R) + ' Ω';
          primaryLbl = T.labelR;
          map = { v: fmt(V), i: fmt(I), r: fmt(R), p: fmt(V * I) };
          steps.push('<li>' + fill(T.stepR, map) + '</li>');
          steps.push('<li>' + fill(T.stepP, map) + '</li>');
          ok = true;
        } else if (m === 'v') {
          if (I == null || R == null) {
            noteEl.className = 'muted ohm-err';
            noteEl.textContent = T.err;
            primaryOut.textContent = '—';
            primaryLabel.textContent = T.labelV;
            stepsWrap.style.display = 'none';
            return false;
          }
          V = I * R;
          primary = fmt(V) + ' V';
          primaryLbl = T.labelV;
          map = { v: fmt(V), i: fmt(I), r: fmt(R), p: fmt(V * I) };
          steps.push('<li>' + fill(T.stepV, map) + '</li>');
          steps.push('<li>' + fill(T.stepP, map) + '</li>');
          ok = true;
        } else {
          if (V == null || R == null) {
            noteEl.className = 'muted ohm-err';
            noteEl.textContent = T.err;
            primaryOut.textContent = '—';
            primaryLabel.textContent = T.labelI;
            stepsWrap.style.display = 'none';
            return false;
          }
          I = V / R;
          primary = fmt(I) + ' A';
          primaryLbl = T.labelI;
          map = { v: fmt(V), i: fmt(I), r: fmt(R), p: fmt(V * I) };
          steps.push('<li>' + fill(T.stepI, map) + '</li>');
          steps.push('<li>' + fill(T.stepP, map) + '</li>');
          ok = true;
        }

        if (!ok) return false;
        primaryLabel.textContent = primaryLbl;
        primaryOut.textContent = primary;
        rowsEl.innerHTML = '<div class="ohm-row"><strong>' + T.labelP + ':</strong> ' + map.p + ' W</div>';
        stepsEl.innerHTML = steps.join('');
        stepsWrap.style.display = '';
        noteEl.className = 'muted';
        noteEl.textContent = T.note;
        return true;
      }

      /** 轮换样例。 */
      function loadSample() {
        var s = SAMPLES[sampleIndex % SAMPLES.length];
        sampleIndex += 1;
        modeEl.value = s.mode;
        VEl.value = s.V;
        IEl.value = s.I;
        REl.value = s.R;
        syncModeUi();
        runCalc();
      }

      modeEl.addEventListener('change', function () {
        syncModeUi();
      });
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        runCalc();
      });
      document.getElementById('btnSample').addEventListener('click', loadSample);
      document.getElementById('btnClear').addEventListener('click', function () {
        form.reset();
        modeEl.value = 'r';
        syncModeUi();
        result.style.display = 'none';
      });
      syncModeUi();
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('how-to-calculate-ohms-law');
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
