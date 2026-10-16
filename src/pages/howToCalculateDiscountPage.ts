/**
 * 折扣计算器：原价+%off→到手价 / 原价+到手价→折扣% / 到手价+%off→原价，
 * 支持叠第二折扣、快捷芯片与分步公式。教育用途，非结账/税引擎。
 * slug: how-to-calculate-discount（见 work-tasks/how-to-calculate-discount/02-tool-info.md）。
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
const PREFIX = 'tool_discount';

/** 为路径加上语言前缀（默认语无前缀）。 */
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * 渲染 how-to-calculate-discount 工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 * @returns 完整页面 HTML
 */
export const renderHowToCalculateDiscountPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 读取本工具键。 */
	const tx = (key: string) => t(opts.lang, `${PREFIX}_${key}` as keyof typeof import('../site/i18n/en').default);

	const toolPath = '/tools/how-to-calculate-discount';
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
			currentSlug: 'how-to-calculate-discount',
			currentAnchor: '#discount',
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
    .dc-out { font-size:1.35rem; font-weight:600; font-variant-numeric:tabular-nums; }
    .dc-row { color:#495057; font-size:.92rem; margin-top:.4rem; }
    .dc-row strong { color:#343a40; }
    .dc-h { font-size:1rem; font-weight:600; margin:1rem 0 .35rem; }
    .dc-steps { margin:0; padding-inline-start:1.3rem; font-size:.92rem; }
    .dc-steps li { margin-bottom:.35rem; }
    .result .muted { color:#6c757d; font-size:.9rem; margin-top:.75rem; }
    .result .muted.dc-err { color:#b02a37; font-weight:500; margin-top:0; }
    .dc-field[hidden] { display:none !important; }
  </style>`;

	const contentHtml = `
    <div id="discount" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(tx('title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <form id="calcForm" novalidate>
          <div class="form-group">
            <label class="form-label" for="mode">${escapeHtml(tx('mode_label'))}</label>
            <select id="mode" class="input-lg">
              <option value="sale" selected>${escapeHtml(tx('mode_sale'))}</option>
              <option value="pct">${escapeHtml(tx('mode_pct'))}</option>
              <option value="original">${escapeHtml(tx('mode_original'))}</option>
            </select>
          </div>
          <span class="form-hint">${escapeHtml(tx('hint'))}</span>
          <div class="form-row">
            <div class="form-group dc-field" data-for="sale pct" id="fgOriginal">
              <label class="form-label" for="original">${escapeHtml(tx('original_label'))}</label>
              <input id="original" class="input-lg" type="text" inputmode="decimal" autocomplete="off" placeholder="${escapeHtml(tx('original_ph'))}">
            </div>
            <div class="form-group dc-field" data-for="pct original" id="fgSale">
              <label class="form-label" for="sale">${escapeHtml(tx('sale_label'))}</label>
              <input id="sale" class="input-lg" type="text" inputmode="decimal" autocomplete="off" placeholder="${escapeHtml(tx('sale_ph'))}">
            </div>
            <div class="form-group dc-field" data-for="sale original" id="fgPct">
              <label class="form-label" for="pct">${escapeHtml(tx('pct_label'))}</label>
              <input id="pct" class="input-lg" type="text" inputmode="decimal" autocomplete="off" placeholder="${escapeHtml(tx('pct_ph'))}">
            </div>
            <div class="form-group dc-field" data-for="sale" id="fgPct2">
              <label class="form-label" for="pct2">${escapeHtml(tx('pct2_label'))}</label>
              <input id="pct2" class="input-lg" type="text" inputmode="decimal" autocomplete="off" placeholder="${escapeHtml(tx('pct2_ph'))}">
            </div>
          </div>
          <div class="chip-row dc-field" data-for="sale original" id="dcChips" aria-label="${escapeHtml(tx('chips_label'))}"></div>
          <div class="btn-row">
            <button type="submit" class="btn btn-primary">${escapeHtml(tx('calculate'))}</button>
            <button type="button" id="btnSample" class="btn btn-outline-secondary">${escapeHtml(tx('sample'))}</button>
            <button type="button" id="btnClear" class="btn btn-outline-secondary">${escapeHtml(tx('clear'))}</button>
          </div>
        </form>
        <div id="calcResult" class="result" style="display:none" aria-live="polite">
          <div class="dc-out"><span id="dcPrimaryLabel">${escapeHtml(tx('finalOut_label'))}</span>: <span id="dcPrimary"></span></div>
          <div id="dcRows"></div>
          <div id="dcStepsWrap">
            <div class="dc-h">${escapeHtml(tx('steps_title'))}</div>
            <ol id="dcSteps" class="dc-steps"></ol>
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
			{
				label: tx('ref_a_label'),
				href: 'https://www.investopedia.com/terms/d/discount.asp',
			},
			{
				label: tx('ref_b_label'),
				href: 'https://openstax.org/books/contemporary-mathematics/pages/6-2-discounts-markups-and-sales-tax',
			},
		],
	});

	/** 前端文案（禁止在脚本模板字面量中使用反斜杠）。 */
	const clientText = {
		lang: opts.lang,
		err: tx('err_generic'),
		note: tx('result_note'),
		labelFinal: tx('finalOut_label'),
		labelSaved: tx('savedOut_label'),
		labelPct: tx('pctOut_label'),
		labelOriginal: tx('originalOut_label'),
		labelEffective: tx('effectiveOut_label'),
		stepSale: tx('step_sale_tpl'),
		stepSale2: tx('step_sale2_tpl'),
		stepSaved: tx('step_saved_tpl'),
		stepPct: tx('step_pct_tpl'),
		stepOriginal: tx('step_original_tpl'),
		stepEffective: tx('step_effective_tpl'),
		chip10: tx('chip_10'),
		chip15: tx('chip_15'),
		chip20: tx('chip_20'),
		chip25: tx('chip_25'),
		chip50: tx('chip_50'),
	};

	const extraBodyHtml = `
  <script>
    (function () {
      /** 控件引用。 */
      var form = document.getElementById('calcForm');
      var modeEl = document.getElementById('mode');
      var originalEl = document.getElementById('original');
      var saleEl = document.getElementById('sale');
      var pctEl = document.getElementById('pct');
      var pct2El = document.getElementById('pct2');
      var chipsEl = document.getElementById('dcChips');
      var result = document.getElementById('calcResult');
      var primaryLabel = document.getElementById('dcPrimaryLabel');
      var primaryOut = document.getElementById('dcPrimary');
      var rowsEl = document.getElementById('dcRows');
      var stepsEl = document.getElementById('dcSteps');
      var stepsWrap = document.getElementById('dcStepsWrap');
      var noteEl = document.getElementById('calcNote');
      var fields = Array.prototype.slice.call(document.querySelectorAll('.dc-field'));
      var T = ${JSON.stringify(clientText)};
      var sampleIndex = 0;
      /** 轮换样例：到手价 / 求折扣% / 求原价 / 叠折。 */
      var SAMPLES = [
        { mode: 'sale', original: '100', sale: '', pct: '20', pct2: '' },
        { mode: 'pct', original: '100', sale: '80', pct: '', pct2: '' },
        { mode: 'original', original: '', sale: '80', pct: '20', pct2: '' },
        { mode: 'sale', original: '100', sale: '', pct: '20', pct2: '10' }
      ];

      /**
       * 解析正数（可选允许 0）。
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
       * 格式化数字（拉丁数字，最多 2 位小数）。
       * @param {number} n 数值
       * @returns {string}
       */
      function fmt(n) {
        if (!isFinite(n)) return '—';
        try {
          return new Intl.NumberFormat(T.lang + '-u-nu-latn', {
            maximumFractionDigits: 2,
            minimumFractionDigits: 0
          }).format(n);
        } catch (e) {
          var s = n.toFixed(2);
          if (s.slice(-3) === '.00') return s.slice(0, -3);
          return s;
        }
      }

      /**
       * 模板占位符替换。
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

      /** 按模式显示/隐藏字段。 */
      function syncFields() {
        var mode = modeEl.value;
        fields.forEach(function (el) {
          var forModes = (el.getAttribute('data-for') || '').split(' ');
          var show = forModes.indexOf(mode) !== -1;
          if (show) el.removeAttribute('hidden');
          else el.setAttribute('hidden', '');
        });
      }

      /** 渲染折扣%快捷芯片。 */
      function renderChips() {
        var chips = [
          { label: T.chip10, rate: '10' },
          { label: T.chip15, rate: '15' },
          { label: T.chip20, rate: '20' },
          { label: T.chip25, rate: '25' },
          { label: T.chip50, rate: '50' }
        ];
        chipsEl.innerHTML = '';
        chips.forEach(function (ch) {
          var b = document.createElement('button');
          b.type = 'button';
          b.className = 'btn btn-outline-secondary btn-sm';
          b.textContent = ch.label;
          b.addEventListener('click', function () {
            pctEl.value = ch.rate;
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
        noteEl.className = 'muted dc-err';
        noteEl.textContent = msg;
      }

      /** 核心计算并刷新结果区。 */
      function run() {
        var mode = modeEl.value;
        var steps = [];
        var rows = [];

        if (mode === 'sale') {
          var original = parseNum(originalEl.value, false);
          var d1 = parseNum(pctEl.value, true);
          var d2Raw = String(pct2El.value || '').trim();
          var d2 = d2Raw === '' ? 0 : parseNum(d2Raw, true);
          if (!(original && d1 != null && d2 != null) || d1 > 100 || d2 > 100) {
            return showError(T.err);
          }
          var after1 = original * (1 - d1 / 100);
          var final = after1 * (1 - d2 / 100);
          var saved = original - final;
          var effective = original > 0 ? (saved / original) * 100 : 0;
          primaryLabel.textContent = T.labelFinal;
          primaryOut.textContent = fmt(final);
          rows.push('<div class="dc-row"><strong>' + T.labelSaved + ':</strong> ' + fmt(saved) + '</div>');
          if (d2 > 0) {
            rows.push('<div class="dc-row"><strong>' + T.labelEffective + ':</strong> ' + fmt(effective) + '%</div>');
            steps.push(fill(T.stepSale, { original: fmt(original), pct: fmt(d1), mid: fmt(after1) }));
            steps.push(fill(T.stepSale2, { mid: fmt(after1), pct2: fmt(d2), final: fmt(final) }));
            steps.push(fill(T.stepEffective, { original: fmt(original), final: fmt(final), eff: fmt(effective) }));
          } else {
            steps.push(fill(T.stepSale, { original: fmt(original), pct: fmt(d1), mid: fmt(final) }));
            steps.push(fill(T.stepSaved, { original: fmt(original), final: fmt(final), saved: fmt(saved) }));
          }
        } else if (mode === 'pct') {
          var orig2 = parseNum(originalEl.value, false);
          var sale2 = parseNum(saleEl.value, true);
          if (!(orig2 && sale2 != null) || sale2 > orig2) {
            return showError(T.err);
          }
          var pctOff = ((orig2 - sale2) / orig2) * 100;
          var saved2 = orig2 - sale2;
          primaryLabel.textContent = T.labelPct;
          primaryOut.textContent = fmt(pctOff) + '%';
          rows.push('<div class="dc-row"><strong>' + T.labelSaved + ':</strong> ' + fmt(saved2) + '</div>');
          rows.push('<div class="dc-row"><strong>' + T.labelFinal + ':</strong> ' + fmt(sale2) + '</div>');
          steps.push(fill(T.stepPct, { original: fmt(orig2), sale: fmt(sale2), pct: fmt(pctOff) }));
          steps.push(fill(T.stepSaved, { original: fmt(orig2), final: fmt(sale2), saved: fmt(saved2) }));
        } else {
          var sale3 = parseNum(saleEl.value, false);
          var d3 = parseNum(pctEl.value, true);
          if (!(sale3 && d3 != null) || d3 >= 100) {
            return showError(T.err);
          }
          var orig3 = sale3 / (1 - d3 / 100);
          var saved3 = orig3 - sale3;
          primaryLabel.textContent = T.labelOriginal;
          primaryOut.textContent = fmt(orig3);
          rows.push('<div class="dc-row"><strong>' + T.labelSaved + ':</strong> ' + fmt(saved3) + '</div>');
          rows.push('<div class="dc-row"><strong>' + T.labelFinal + ':</strong> ' + fmt(sale3) + '</div>');
          steps.push(fill(T.stepOriginal, { sale: fmt(sale3), pct: fmt(d3), original: fmt(orig3) }));
          steps.push(fill(T.stepSaved, { original: fmt(orig3), final: fmt(sale3), saved: fmt(saved3) }));
        }

        rowsEl.innerHTML = rows.join('');
        stepsEl.innerHTML = steps.map(function (s) { return '<li>' + s + '</li>'; }).join('');
        stepsWrap.style.display = '';
        noteEl.className = 'muted';
        noteEl.textContent = T.note;
        result.style.display = 'block';
      }

      /** 加载轮换样例。 */
      function loadSample() {
        var s = SAMPLES[sampleIndex % SAMPLES.length];
        sampleIndex += 1;
        modeEl.value = s.mode;
        originalEl.value = s.original;
        saleEl.value = s.sale;
        pctEl.value = s.pct;
        pct2El.value = s.pct2;
        syncFields();
        run();
      }

      /** 清空表单。 */
      function clearAll() {
        form.reset();
        modeEl.value = 'sale';
        syncFields();
        result.style.display = 'none';
        originalEl.focus();
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
      renderChips();
      syncFields();
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('how-to-calculate-discount');
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
