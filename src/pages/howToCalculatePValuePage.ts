/**
 * p 值计算器：由标准正态 z 求单侧或双侧尾概率（erfc 近似）。
 * 教育用途；非 t/χ²/完整假设检验套件。
 * slug: how-to-calculate-p-value（见 work-tasks/how-to-calculate-p-value/02-tool-info.md）。
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
const PREFIX = 'tool_p_value';

/** 为路径加上语言前缀（默认语无前缀）。 */
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * 渲染 how-to-calculate-p-value 工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 * @returns 完整页面 HTML
 */
export const renderHowToCalculatePValuePage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 读取本工具键。 */
	const tx = (key: string) => t(opts.lang, `${PREFIX}_${key}` as keyof typeof import('../site/i18n/en').default);

	const toolPath = '/tools/how-to-calculate-p-value';
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
			currentSlug: 'how-to-calculate-p-value',
			currentAnchor: '#p-value',
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
    .btn-row { display:flex; flex-wrap:wrap; gap:.5rem; align-items:center; }
    .chip-row { display:flex; flex-wrap:wrap; gap:.4rem; margin-bottom:.75rem; }
    .chip-row button { font-size:.85rem; }
    .result { background:#f8f9fa; padding:1rem; border-radius:8px; margin-top:1rem; }
    .pv-out { font-size:1.35rem; font-weight:600; font-variant-numeric:tabular-nums; }
    .pv-row { color:#495057; font-size:.92rem; margin-top:.4rem; }
    .pv-row strong { color:#343a40; }
    .pv-h { font-size:1rem; font-weight:600; margin:1rem 0 .35rem; }
    .pv-steps { margin:0; padding-inline-start:1.3rem; font-size:.92rem; }
    .pv-steps li { margin-bottom:.35rem; }
    .result .muted { color:#6c757d; font-size:.9rem; margin-top:.75rem; }
    .result .muted.pv-err { color:#b02a37; font-weight:500; margin-top:0; }
  </style>`;

	const contentHtml = `
    <div id="p-value" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(tx('title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <form id="calcForm" novalidate>
          <div class="form-group">
            <label class="form-label" for="mode">${escapeHtml(tx('mode_label'))}</label>
            <select id="mode" class="input-lg">
              <option value="two" selected>${escapeHtml(tx('mode_two'))}</option>
              <option value="one">${escapeHtml(tx('mode_one'))}</option>
            </select>
          </div>
          <span class="form-hint">${escapeHtml(tx('hint'))}</span>
          <div class="form-group">
            <label class="form-label" for="z">${escapeHtml(tx('z_label'))}</label>
            <input id="z" class="input-lg" type="text" inputmode="decimal" autocomplete="off" placeholder="${escapeHtml(tx('z_ph'))}">
          </div>
          <div class="chip-row" id="pvChips" aria-label="${escapeHtml(tx('chips_label'))}"></div>
          <div class="btn-row">
            <button type="submit" class="btn btn-primary">${escapeHtml(tx('calculate'))}</button>
            <button type="button" id="btnSample" class="btn btn-outline-secondary">${escapeHtml(tx('sample'))}</button>
            <button type="button" id="btnClear" class="btn btn-outline-secondary">${escapeHtml(tx('clear'))}</button>
          </div>
        </form>
        <div id="calcResult" class="result" style="display:none" aria-live="polite">
          <div class="pv-out"><span id="pvPrimaryLabel">${escapeHtml(tx('pOut_label'))}</span>: <span id="pvPrimary"></span></div>
          <div id="pvRows"></div>
          <div id="pvStepsWrap">
            <div class="pv-h">${escapeHtml(tx('steps_title'))}</div>
            <ol id="pvSteps" class="pv-steps"></ol>
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
			{ label: tx('ref_pvalue_label'), href: 'https://en.wikipedia.org/wiki/P-value' },
			{ label: tx('ref_normal_label'), href: 'https://en.wikipedia.org/wiki/Normal_distribution' },
		],
	});

	/** 前端文案。 */
	const clientText = {
		lang: opts.lang,
		err: tx('err_generic'),
		note: tx('result_note'),
		labelTwo: tx('pOut_label'),
		labelOne: tx('pOneOut_label'),
		labelAlt: tx('altOut_label'),
		labelAbs: tx('absOut_label'),
		stepTwo: tx('step_two_tpl'),
		stepOne: tx('step_one_tpl'),
		stepAbs: tx('step_abs_tpl'),
		chip1645: tx('chip_1645'),
		chip196: tx('chip_196'),
		chip2576: tx('chip_2576'),
	};

	const extraBodyHtml = `
  <script>
    (function () {
      /** 控件。 */
      var form = document.getElementById('calcForm');
      var modeEl = document.getElementById('mode');
      var zEl = document.getElementById('z');
      var chipsEl = document.getElementById('pvChips');
      var result = document.getElementById('calcResult');
      var primaryLabel = document.getElementById('pvPrimaryLabel');
      var primaryOut = document.getElementById('pvPrimary');
      var rowsEl = document.getElementById('pvRows');
      var stepsEl = document.getElementById('pvSteps');
      var stepsWrap = document.getElementById('pvStepsWrap');
      var noteEl = document.getElementById('calcNote');
      var T = ${JSON.stringify(clientText)};
      var sampleIndex = 0;
      var SAMPLES = [
        { mode: 'two', z: '1.96' },
        { mode: 'one', z: '1.96' },
        { mode: 'two', z: '0' },
        { mode: 'two', z: '2.576' }
      ];

      /**
       * Abramowitz–Stegun 风格 erfc 近似（正态尾）。
       * @param {number} x 输入
       * @returns {number}
       */
      function erfc(x) {
        var ax = Math.abs(x);
        var t = 1 / (1 + 0.5 * ax);
        var tau =
          t *
          Math.exp(
            -ax * ax -
              1.26551223 +
              t *
                (1.00002368 +
                  t *
                    (0.37409196 +
                      t *
                        (0.09678418 +
                          t *
                            (-0.18628806 +
                              t *
                                (0.27886807 +
                                  t *
                                    (-1.13520398 +
                                      t * (1.48851587 + t * (-0.82215223 + t * 0.17087277))))))))
          );
        return x >= 0 ? tau : 2 - tau;
      }

      /**
       * 解析有限数。
       * @param {string} raw 原文
       * @returns {number|null}
       */
      function parseNum(raw) {
        var s = String(raw == null ? '' : raw).trim().replace(',', '.');
        if (!s) return null;
        var n = Number(s);
        return isFinite(n) ? n : null;
      }

      /**
       * 格式化概率。
       * @param {number} n 数值
       * @returns {string}
       */
      function fmt(n) {
        if (!isFinite(n)) return '—';
        try {
          return new Intl.NumberFormat(T.lang + '-u-nu-latn', {
            maximumFractionDigits: 6,
            minimumFractionDigits: 0
          }).format(n);
        } catch (e) {
          return n.toFixed(6);
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

      /** 渲染临界 z 芯片。 */
      function renderChips() {
        var chips = [
          { label: T.chip1645, z: '1.645' },
          { label: T.chip196, z: '1.96' },
          { label: T.chip2576, z: '2.576' }
        ];
        chipsEl.innerHTML = '';
        chips.forEach(function (ch) {
          var b = document.createElement('button');
          b.type = 'button';
          b.className = 'btn btn-outline-secondary btn-sm';
          b.textContent = ch.label;
          b.addEventListener('click', function () {
            zEl.value = ch.z;
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
        primaryOut.textContent = '—';
        rowsEl.innerHTML = '';
        stepsEl.innerHTML = '';
        stepsWrap.style.display = 'none';
        noteEl.className = 'muted pv-err';
        noteEl.textContent = msg;
      }

      /** 核心计算。 */
      function run() {
        var mode = modeEl.value;
        var z = parseNum(zEl.value);
        if (z == null) return showError(T.err);
        var absZ = Math.abs(z);
        var two = erfc(absZ / Math.SQRT2);
        var one = two / 2;
        var primary = mode === 'one' ? one : two;
        var alt = mode === 'one' ? two : one;

        primaryLabel.textContent = mode === 'one' ? T.labelOne : T.labelTwo;
        primaryOut.textContent = fmt(primary);
        rowsEl.innerHTML =
          '<div class="pv-row"><strong>' +
          T.labelAbs +
          ':</strong> ' +
          fmt(absZ) +
          '</div>' +
          '<div class="pv-row"><strong>' +
          T.labelAlt +
          ':</strong> ' +
          fmt(alt) +
          '</div>';

        var steps = [
          fill(T.stepAbs, { z: fmt(z), abs: fmt(absZ) }),
          fill(T.stepTwo, { abs: fmt(absZ), p: fmt(two) }),
          fill(T.stepOne, { two: fmt(two), one: fmt(one) })
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
        modeEl.value = s.mode;
        zEl.value = s.z;
        run();
      }

      /** 清空。 */
      function clearAll() {
        form.reset();
        modeEl.value = 'two';
        result.style.display = 'none';
        zEl.focus();
      }

      modeEl.addEventListener('change', run);
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

	const toolMeta = getToolBySlug('how-to-calculate-p-value');
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
