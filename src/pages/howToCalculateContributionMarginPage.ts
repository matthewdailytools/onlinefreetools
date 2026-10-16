/**
 * 边际贡献计算器：单价−变动成本 → CM 与比率；可选件数得总 CM；可选固定成本得盈亏平衡件数。
 * YMYL：教育用途，非经营/投资建议。
 * slug: how-to-calculate-contribution-margin。
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
const PREFIX = 'tool_contribution_margin';

/** 为路径加上语言前缀（默认语无前缀）。 */
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * 渲染 how-to-calculate-contribution-margin 工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 * @returns 完整页面 HTML
 */
export const renderHowToCalculateContributionMarginPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 读取本工具键。 */
	const tx = (key: string) => t(opts.lang, `${PREFIX}_${key}` as keyof typeof import('../site/i18n/en').default);

	const toolPath = '/tools/how-to-calculate-contribution-margin';
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
			currentSlug: 'how-to-calculate-contribution-margin',
			currentAnchor: '#contribution-margin',
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
    .cm-warn { background:#fff3cd; border:1px solid #ffecb5; color:#664d03; padding:.75rem 1rem; border-radius:8px; margin-bottom:1rem; font-size:.92rem; }
    .result { background:#f8f9fa; padding:1rem; border-radius:8px; margin-top:1rem; }
    .cm-out { font-size:1.35rem; font-weight:600; font-variant-numeric:tabular-nums; }
    .cm-row { color:#495057; font-size:.92rem; margin-top:.4rem; }
    .cm-row strong { color:#343a40; }
    .cm-h { font-size:1rem; font-weight:600; margin:1rem 0 .35rem; }
    .cm-steps { margin:0; padding-inline-start:1.3rem; font-size:.92rem; }
    .cm-steps li { margin-bottom:.35rem; }
    .result .muted { color:#6c757d; font-size:.9rem; margin-top:.75rem; }
    .result .muted.cm-err { color:#b02a37; font-weight:500; margin-top:0; }
  </style>`;

	const contentHtml = `
    <div id="contribution-margin" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(tx('title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <div class="cm-warn" role="note">${escapeHtml(tx('safety_banner'))}</div>
        <form id="calcForm" novalidate>
          <span class="form-hint">${escapeHtml(tx('hint'))}</span>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label" for="price">${escapeHtml(tx('price_label'))}</label>
              <input id="price" class="input-lg" type="text" inputmode="decimal" autocomplete="off" placeholder="${escapeHtml(tx('price_ph'))}">
            </div>
            <div class="form-group">
              <label class="form-label" for="vc">${escapeHtml(tx('vc_label'))}</label>
              <input id="vc" class="input-lg" type="text" inputmode="decimal" autocomplete="off" placeholder="${escapeHtml(tx('vc_ph'))}">
            </div>
            <div class="form-group">
              <label class="form-label" for="units">${escapeHtml(tx('units_label'))}</label>
              <input id="units" class="input-lg" type="text" inputmode="decimal" autocomplete="off" placeholder="${escapeHtml(tx('units_ph'))}">
            </div>
            <div class="form-group">
              <label class="form-label" for="fixed">${escapeHtml(tx('fixed_label'))}</label>
              <input id="fixed" class="input-lg" type="text" inputmode="decimal" autocomplete="off" placeholder="${escapeHtml(tx('fixed_ph'))}">
            </div>
          </div>
          <div class="btn-row">
            <button type="submit" class="btn btn-primary">${escapeHtml(tx('calculate'))}</button>
            <button type="button" id="btnSample" class="btn btn-outline-secondary">${escapeHtml(tx('sample'))}</button>
            <button type="button" id="btnClear" class="btn btn-outline-secondary">${escapeHtml(tx('clear'))}</button>
          </div>
        </form>
        <div id="calcResult" class="result" style="display:none" aria-live="polite">
          <div class="cm-out">${escapeHtml(tx('cmOut_label'))}: <span id="cmPrimary"></span></div>
          <div id="cmRows"></div>
          <div id="cmStepsWrap">
            <div class="cm-h">${escapeHtml(tx('steps_title'))}</div>
            <ol id="cmSteps" class="cm-steps"></ol>
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
			{ label: tx('ref_a_label'), href: 'https://www.investopedia.com/terms/c/contributionmargin.asp' },
			{ label: tx('ref_b_label'), href: 'https://www.investopedia.com/terms/b/breakevenanalysis.asp' },
		],
	});

	/** 前端文案。 */
	const clientText = {
		lang: opts.lang,
		err: tx('err_generic'),
		note: tx('result_note'),
		labelRatio: tx('cmrOut_label'),
		labelTotal: tx('totalOut_label'),
		labelBe: tx('beOut_label'),
		stepCm: tx('step_cm_tpl'),
		stepRatio: tx('step_ratio_tpl'),
		stepTotal: tx('step_total_tpl'),
		stepBe: tx('step_be_tpl'),
	};

	const extraBodyHtml = `
  <script>
    (function () {
      /** 控件。 */
      var form = document.getElementById('calcForm');
      var priceEl = document.getElementById('price');
      var vcEl = document.getElementById('vc');
      var unitsEl = document.getElementById('units');
      var fixedEl = document.getElementById('fixed');
      var result = document.getElementById('calcResult');
      var primaryOut = document.getElementById('cmPrimary');
      var rowsEl = document.getElementById('cmRows');
      var stepsEl = document.getElementById('cmSteps');
      var stepsWrap = document.getElementById('cmStepsWrap');
      var noteEl = document.getElementById('calcNote');
      var T = ${JSON.stringify(clientText)};
      var sampleIndex = 0;
      var SAMPLES = [
        { price: '50', vc: '30', units: '', fixed: '' },
        { price: '50', vc: '30', units: '100', fixed: '' },
        { price: '50', vc: '30', units: '', fixed: '10000' },
        { price: '40', vc: '28', units: '200', fixed: '4800' }
      ];

      /**
       * 解析非负有限数。
       * @param {string} raw 原文
       * @param {boolean} requirePositive 是否要求 > 0
       * @param {boolean} allowEmpty 空串是否返回 null（可选字段）
       * @returns {number|null}
       */
      function parseNum(raw, requirePositive, allowEmpty) {
        var s = String(raw == null ? '' : raw).trim().replace(',', '.');
        if (!s) return allowEmpty ? null : null;
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
        noteEl.className = 'muted cm-err';
        noteEl.textContent = msg;
      }

      /** 核心计算。 */
      function run() {
        var price = parseNum(priceEl.value, true, false);
        var vc = parseNum(vcEl.value, false, false);
        if (price == null || vc == null) return showError(T.err);
        if (vc > price) return showError(T.err);

        var unitsRaw = String(unitsEl.value || '').trim();
        var fixedRaw = String(fixedEl.value || '').trim();
        var units = unitsRaw === '' ? null : parseNum(unitsRaw, true, true);
        var fixed = fixedRaw === '' ? null : parseNum(fixedRaw, false, true);
        if (unitsRaw !== '' && units == null) return showError(T.err);
        if (fixedRaw !== '' && fixed == null) return showError(T.err);

        var cm = price - vc;
        var ratio = (cm / price) * 100;
        primaryOut.textContent = fmt(cm, 2);
        var rows = ['<div class="cm-row"><strong>' + T.labelRatio + ':</strong> ' + fmt(ratio, 2) + '%</div>'];
        var steps = [
          fill(T.stepCm, { price: fmt(price, 2), vc: fmt(vc, 2), cm: fmt(cm, 2) }),
          fill(T.stepRatio, { cm: fmt(cm, 2), price: fmt(price, 2), ratio: fmt(ratio, 2) })
        ];

        if (units != null) {
          var total = cm * units;
          rows.push('<div class="cm-row"><strong>' + T.labelTotal + ':</strong> ' + fmt(total, 2) + '</div>');
          steps.push(fill(T.stepTotal, { cm: fmt(cm, 2), units: fmt(units, 2), total: fmt(total, 2) }));
        }
        if (fixed != null) {
          if (!(cm > 0)) return showError(T.err);
          var be = fixed / cm;
          rows.push('<div class="cm-row"><strong>' + T.labelBe + ':</strong> ' + fmt(be, 2) + '</div>');
          steps.push(fill(T.stepBe, { fixed: fmt(fixed, 2), cm: fmt(cm, 2), be: fmt(be, 2) }));
        }

        rowsEl.innerHTML = rows.join('');
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
        priceEl.value = s.price;
        vcEl.value = s.vc;
        unitsEl.value = s.units;
        fixedEl.value = s.fixed;
        run();
      }

      /** 清空。 */
      function clearAll() {
        form.reset();
        result.style.display = 'none';
        priceEl.focus();
      }

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        run();
      });
      document.getElementById('btnSample').addEventListener('click', loadSample);
      document.getElementById('btnClear').addEventListener('click', clearAll);
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('how-to-calculate-contribution-margin');
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
