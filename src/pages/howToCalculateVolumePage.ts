/**
 * 体积计算器：长方体 / 立方体 / 球 / 圆柱 / 圆锥。
 * 显示所用公式、逐步展开与样例轮换；浏览器本地计算。
 * slug: how-to-calculate-volume（见 work-tasks/how-to-calculate-volume/02-tool-info.md）。
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
const PREFIX = 'tool_volume';

/** 为路径加上语言前缀（默认语无前缀）。 */
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * 渲染 how-to-calculate-volume 工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 * @returns 完整页面 HTML
 */
export const renderHowToCalculateVolumePage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 读取本工具键。 */
	const tx = (key: string) => t(opts.lang, `${PREFIX}_${key}` as keyof typeof import('../site/i18n/en').default);

	const toolPath = '/tools/how-to-calculate-volume';
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
			currentSlug: 'how-to-calculate-volume',
			currentAnchor: '#volume',
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
    .vol-out { font-size:1.35rem; font-weight:600; font-variant-numeric:tabular-nums; }
    .vol-row { color:#495057; font-size:.92rem; margin-top:.4rem; }
    .vol-row strong { color:#343a40; }
    .vol-h { font-size:1rem; font-weight:600; margin:1rem 0 .35rem; }
    .vol-steps { margin:0; padding-inline-start:1.3rem; font-size:.92rem; }
    .vol-steps li { margin-bottom:.35rem; }
    .result .muted { color:#6c757d; font-size:.9rem; margin-top:.75rem; }
    .result .muted.vol-err { color:#b02a37; font-weight:500; margin-top:0; }
    .vol-field[hidden] { display:none !important; }
  </style>`;

	const contentHtml = `
    <div id="volume" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(tx('title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <form id="calcForm" novalidate>
          <div class="form-group">
            <label class="form-label" for="shape">${escapeHtml(tx('shape_label'))}</label>
            <select id="shape" class="input-lg">
              <option value="box" selected>${escapeHtml(tx('shape_box'))}</option>
              <option value="cube">${escapeHtml(tx('shape_cube'))}</option>
              <option value="sphere">${escapeHtml(tx('shape_sphere'))}</option>
              <option value="cylinder">${escapeHtml(tx('shape_cylinder'))}</option>
              <option value="cone">${escapeHtml(tx('shape_cone'))}</option>
            </select>
          </div>
          <span class="form-hint">${escapeHtml(tx('hint'))}</span>
          <div class="form-row">
            <div class="form-group vol-field" data-for="box cube" id="fgL">
              <label class="form-label" for="l" id="lblL">${escapeHtml(tx('l_label'))}</label>
              <input id="l" class="input-lg" type="text" inputmode="decimal" autocomplete="off" placeholder="${escapeHtml(tx('l_ph'))}">
            </div>
            <div class="form-group vol-field" data-for="box" id="fgW">
              <label class="form-label" for="w">${escapeHtml(tx('w_label'))}</label>
              <input id="w" class="input-lg" type="text" inputmode="decimal" autocomplete="off" placeholder="${escapeHtml(tx('w_ph'))}">
            </div>
            <div class="form-group vol-field" data-for="box cylinder cone" id="fgH">
              <label class="form-label" for="h">${escapeHtml(tx('h_label'))}</label>
              <input id="h" class="input-lg" type="text" inputmode="decimal" autocomplete="off" placeholder="${escapeHtml(tx('h_ph'))}">
            </div>
            <div class="form-group vol-field" data-for="sphere cylinder cone" id="fgR">
              <label class="form-label" for="radius">${escapeHtml(tx('radius_label'))}</label>
              <input id="radius" class="input-lg" type="text" inputmode="decimal" autocomplete="off" placeholder="${escapeHtml(tx('radius_ph'))}">
            </div>
          </div>
          <div class="btn-row">
            <button type="submit" class="btn btn-primary">${escapeHtml(tx('calculate'))}</button>
            <button type="button" id="btnSample" class="btn btn-outline-secondary">${escapeHtml(tx('sample'))}</button>
            <button type="button" id="btnClear" class="btn btn-outline-secondary">${escapeHtml(tx('clear'))}</button>
          </div>
        </form>
        <div id="calcResult" class="result" style="display:none" aria-live="polite">
          <div class="vol-out"><span id="volLabel">${escapeHtml(tx('volOut_label'))}</span>: <span id="volOut"></span></div>
          <div id="volRows"></div>
          <div id="volStepsWrap">
            <div class="vol-h">${escapeHtml(tx('steps_title'))}</div>
            <ol id="volSteps" class="vol-steps"></ol>
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
			{ label: tx('ref_a_label'), href: 'https://en.wikipedia.org/wiki/Volume' },
			{ label: tx('ref_b_label'), href: 'https://en.wikipedia.org/wiki/Sphere' },
			{ label: tx('ref_c_label'), href: 'https://en.wikipedia.org/wiki/Cylinder' },
		],
	});

	/** 前端文案。 */
	const clientText = {
		lang: opts.lang,
		err: tx('err_generic'),
		note: tx('result_note'),
		rowFormula: tx('row_formula'),
		rowUnit: tx('row_unit'),
		sideLabel: tx('l_label'),
		cubeSide: tx('cube_side'),
		stepBox: tx('step_box_tpl'),
		stepCube: tx('step_cube_tpl'),
		stepSphere: tx('step_sphere_tpl'),
		stepCyl: tx('step_cyl_tpl'),
		stepCone: tx('step_cone_tpl'),
		formulaBox: tx('formula_box'),
		formulaCube: tx('formula_cube'),
		formulaSphere: tx('formula_sphere'),
		formulaCyl: tx('formula_cylinder'),
		formulaCone: tx('formula_cone'),
	};

	const extraBodyHtml = `
  <script>
    (function () {
      /** 表单与结果控件。 */
      var form = document.getElementById('calcForm');
      var shapeEl = document.getElementById('shape');
      var lEl = document.getElementById('l');
      var wEl = document.getElementById('w');
      var hEl = document.getElementById('h');
      var rEl = document.getElementById('radius');
      var lblL = document.getElementById('lblL');
      var result = document.getElementById('calcResult');
      var volOut = document.getElementById('volOut');
      var rowsEl = document.getElementById('volRows');
      var stepsEl = document.getElementById('volSteps');
      var stepsWrap = document.getElementById('volStepsWrap');
      var noteEl = document.getElementById('calcNote');
      var T = ${JSON.stringify(clientText)};
      /** 样例轮换索引。 */
      var sampleIndex = 0;
      /** 样例：盒 / 立方 / 球 / 圆柱 / 圆锥。 */
      var SAMPLES = [
        { shape: 'box', l: '2', w: '3', h: '4', r: '' },
        { shape: 'cube', l: '5', w: '', h: '', r: '' },
        { shape: 'sphere', l: '', w: '', h: '', r: '3' },
        { shape: 'cylinder', l: '', w: '', h: '10', r: '2' },
        { shape: 'cone', l: '', w: '', h: '9', r: '3' }
      ];

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
       * 格式化体积（最多 8 位有效、去尾零）。
       * @param {number} n 数值
       * @returns {string}
       */
      function fmt(n) {
        if (!isFinite(n)) return '—';
        var s = n.toPrecision(8);
        if (s.indexOf('e') >= 0 || s.indexOf('E') >= 0) {
          return Number(n).toLocaleString(T.lang + '-u-nu-latn', { maximumSignificantDigits: 8 });
        }
        s = String(Number(s));
        return s;
      }

      /** 模板替换。 */
      function fill(tpl, map) {
        var s = String(tpl || '');
        Object.keys(map).forEach(function (k) { s = s.split('{' + k + '}').join(String(map[k])); });
        return s;
      }

      /** 按形状显示/隐藏字段。 */
      function syncFields() {
        var shape = shapeEl.value;
        var fields = document.querySelectorAll('.vol-field');
        for (var i = 0; i < fields.length; i++) {
          var el = fields[i];
          var ok = (' ' + String(el.getAttribute('data-for') || '') + ' ').indexOf(' ' + shape + ' ') >= 0;
          if (ok) el.removeAttribute('hidden');
          else el.setAttribute('hidden', '');
        }
        lblL.textContent = shape === 'cube' ? T.cubeSide : T.sideLabel;
      }

      /** 显示错误。 */
      function showError(msg) {
        result.style.display = 'block';
        volOut.textContent = '—';
        rowsEl.innerHTML = '';
        stepsEl.innerHTML = '';
        stepsWrap.style.display = 'none';
        noteEl.className = 'muted vol-err';
        noteEl.textContent = msg;
      }

      /** 计算体积。 */
      function run() {
        var shape = shapeEl.value;
        var L = parsePos(lEl.value);
        var W = parsePos(wEl.value);
        var H = parsePos(hEl.value);
        var R = parsePos(rEl.value);
        var vol = 0;
        var formula = '';
        var step = '';
        var map = {};

        if (shape === 'box') {
          if (!(L && W && H)) return showError(T.err);
          vol = L * W * H;
          formula = T.formulaBox;
          map = { L: fmt(L), W: fmt(W), H: fmt(H), V: fmt(vol) };
          step = fill(T.stepBox, map);
        } else if (shape === 'cube') {
          if (!L) return showError(T.err);
          vol = L * L * L;
          formula = T.formulaCube;
          map = { a: fmt(L), V: fmt(vol) };
          step = fill(T.stepCube, map);
        } else if (shape === 'sphere') {
          if (!R) return showError(T.err);
          vol = (4 / 3) * Math.PI * R * R * R;
          formula = T.formulaSphere;
          map = { r: fmt(R), r3: fmt(R * R * R), V: fmt(vol) };
          step = fill(T.stepSphere, map);
        } else if (shape === 'cylinder') {
          if (!(R && H)) return showError(T.err);
          vol = Math.PI * R * R * H;
          formula = T.formulaCyl;
          map = { r: fmt(R), r2: fmt(R * R), H: fmt(H), V: fmt(vol) };
          step = fill(T.stepCyl, map);
        } else if (shape === 'cone') {
          if (!(R && H)) return showError(T.err);
          vol = (1 / 3) * Math.PI * R * R * H;
          formula = T.formulaCone;
          map = { r: fmt(R), r2: fmt(R * R), H: fmt(H), V: fmt(vol) };
          step = fill(T.stepCone, map);
        } else {
          return showError(T.err);
        }

        volOut.textContent = fmt(vol);
        rowsEl.innerHTML =
          '<div class="vol-row"><strong>' + T.rowFormula + ':</strong> ' + formula + '</div>' +
          '<div class="vol-row"><strong>' + T.rowUnit + ':</strong> ' + T.note + '</div>';
        stepsEl.innerHTML = '<li>' + step + '</li>';
        stepsWrap.style.display = '';
        noteEl.className = 'muted';
        noteEl.textContent = T.note;
        result.style.display = 'block';
      }

      /** 加载样例。 */
      function loadSample() {
        var s = SAMPLES[sampleIndex % SAMPLES.length];
        sampleIndex += 1;
        shapeEl.value = s.shape;
        lEl.value = s.l;
        wEl.value = s.w;
        hEl.value = s.h;
        rEl.value = s.r;
        syncFields();
        run();
      }

      /** 清空。 */
      function clearAll() {
        form.reset();
        shapeEl.value = 'box';
        syncFields();
        result.style.display = 'none';
        lEl.focus();
      }

      shapeEl.addEventListener('change', function () { syncFields(); });
      form.addEventListener('submit', function (e) { e.preventDefault(); run(); });
      document.getElementById('btnSample').addEventListener('click', loadSample);
      document.getElementById('btnClear').addEventListener('click', clearAll);
      syncFields();
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('how-to-calculate-volume');
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
