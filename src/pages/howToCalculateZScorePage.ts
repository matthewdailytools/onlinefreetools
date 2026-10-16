/**
 * Z 分数计算器：原始分→z 或 z→原始分，分步展示 (x−μ)/σ。
 * 教育用途；不作正态检验或显著性结论。
 * slug: how-to-calculate-z-score（见 work-tasks/how-to-calculate-z-score/02-tool-info.md）。
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
const PREFIX = 'tool_z_score';

/** 为路径加上语言前缀（默认语无前缀）。 */
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * 渲染 how-to-calculate-z-score 工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 * @returns 完整页面 HTML
 */
export const renderHowToCalculateZScorePage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 读取本工具键。 */
	const tx = (key: string) => t(opts.lang, `${PREFIX}_${key}` as keyof typeof import('../site/i18n/en').default);

	const toolPath = '/tools/how-to-calculate-z-score';
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
			currentSlug: 'how-to-calculate-z-score',
			currentAnchor: '#z-score',
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
    .zs-out { font-size:1.35rem; font-weight:600; font-variant-numeric:tabular-nums; }
    .zs-row { color:#495057; font-size:.92rem; margin-top:.4rem; }
    .zs-row strong { color:#343a40; }
    .zs-h { font-size:1rem; font-weight:600; margin:1rem 0 .35rem; }
    .zs-steps { margin:0; padding-inline-start:1.3rem; font-size:.92rem; }
    .zs-steps li { margin-bottom:.35rem; }
    .result .muted { color:#6c757d; font-size:.9rem; margin-top:.75rem; }
    .result .muted.zs-err { color:#b02a37; font-weight:500; margin-top:0; }
    .zs-field[hidden] { display:none !important; }
  </style>`;

	const contentHtml = `
    <div id="z-score" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(tx('title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <form id="calcForm" novalidate>
          <div class="form-group">
            <label class="form-label" for="mode">${escapeHtml(tx('mode_label'))}</label>
            <select id="mode" class="input-lg">
              <option value="z" selected>${escapeHtml(tx('mode_z'))}</option>
              <option value="x">${escapeHtml(tx('mode_x'))}</option>
            </select>
          </div>
          <span class="form-hint">${escapeHtml(tx('hint'))}</span>
          <div class="form-row">
            <div class="form-group zs-field" data-for="z" id="fgX">
              <label class="form-label" for="x">${escapeHtml(tx('x_label'))}</label>
              <input id="x" class="input-lg" type="text" inputmode="decimal" autocomplete="off" placeholder="${escapeHtml(tx('x_ph'))}">
            </div>
            <div class="form-group zs-field" data-for="x" id="fgZ">
              <label class="form-label" for="z">${escapeHtml(tx('z_label'))}</label>
              <input id="z" class="input-lg" type="text" inputmode="decimal" autocomplete="off" placeholder="${escapeHtml(tx('z_ph'))}">
            </div>
            <div class="form-group" id="fgMean">
              <label class="form-label" for="mean">${escapeHtml(tx('mean_label'))}</label>
              <input id="mean" class="input-lg" type="text" inputmode="decimal" autocomplete="off" placeholder="${escapeHtml(tx('mean_ph'))}">
            </div>
            <div class="form-group" id="fgSd">
              <label class="form-label" for="sd">${escapeHtml(tx('sd_label'))}</label>
              <input id="sd" class="input-lg" type="text" inputmode="decimal" autocomplete="off" placeholder="${escapeHtml(tx('sd_ph'))}">
            </div>
          </div>
          <div class="btn-row">
            <button type="submit" class="btn btn-primary">${escapeHtml(tx('calculate'))}</button>
            <button type="button" id="btnSample" class="btn btn-outline-secondary">${escapeHtml(tx('sample'))}</button>
            <button type="button" id="btnClear" class="btn btn-outline-secondary">${escapeHtml(tx('clear'))}</button>
          </div>
        </form>
        <div id="calcResult" class="result" style="display:none" aria-live="polite">
          <div class="zs-out"><span id="zsPrimaryLabel">${escapeHtml(tx('zOut_label'))}</span>: <span id="zsPrimary"></span></div>
          <div id="zsRows"></div>
          <div id="zsStepsWrap">
            <div class="zs-h">${escapeHtml(tx('steps_title'))}</div>
            <ol id="zsSteps" class="zs-steps"></ol>
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
			{ label: tx('ref_z_label'), href: 'https://en.wikipedia.org/wiki/Standard_score' },
			{ label: tx('ref_sd_label'), href: 'https://en.wikipedia.org/wiki/Standard_deviation' },
		],
	});

	/** 前端文案（禁止在脚本模板字面量中使用反斜杠）。 */
	const clientText = {
		lang: opts.lang,
		err: tx('err_generic'),
		note: tx('result_note'),
		labelZ: tx('zOut_label'),
		labelX: tx('xOut_label'),
		labelDiff: tx('diffOut_label'),
		labelAbs: tx('absOut_label'),
		stepZ: tx('step_z_tpl'),
		stepX: tx('step_x_tpl'),
		stepDiff: tx('step_diff_tpl'),
		stepAbs: tx('step_abs_tpl'),
	};

	const extraBodyHtml = `
  <script>
    (function () {
      /** 控件。 */
      var form = document.getElementById('calcForm');
      var modeEl = document.getElementById('mode');
      var xEl = document.getElementById('x');
      var zEl = document.getElementById('z');
      var meanEl = document.getElementById('mean');
      var sdEl = document.getElementById('sd');
      var result = document.getElementById('calcResult');
      var primaryLabel = document.getElementById('zsPrimaryLabel');
      var primaryOut = document.getElementById('zsPrimary');
      var rowsEl = document.getElementById('zsRows');
      var stepsEl = document.getElementById('zsSteps');
      var stepsWrap = document.getElementById('zsStepsWrap');
      var noteEl = document.getElementById('calcNote');
      var fields = Array.prototype.slice.call(document.querySelectorAll('.zs-field'));
      var T = ${JSON.stringify(clientText)};
      var sampleIndex = 0;
      /** 轮换样例：求 z / 求 x / z=0 / 低于均值。 */
      var SAMPLES = [
        { mode: 'z', x: '85', z: '', mean: '70', sd: '10' },
        { mode: 'x', x: '', z: '1.5', mean: '70', sd: '10' },
        { mode: 'z', x: '70', z: '', mean: '70', sd: '10' },
        { mode: 'z', x: '55', z: '', mean: '70', sd: '10' }
      ];

      /**
       * 解析有限数（可选要求正数）。
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
       * 格式化数字（拉丁数字）。
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
        noteEl.className = 'muted zs-err';
        noteEl.textContent = msg;
      }

      /** 核心计算。 */
      function run() {
        var mode = modeEl.value;
        var mean = parseNum(meanEl.value, false);
        var sd = parseNum(sdEl.value, true);
        if (mean == null || sd == null) return showError(T.err);

        var x = 0;
        var z = 0;
        var steps = [];
        var rows = [];

        if (mode === 'x') {
          z = parseNum(zEl.value, false);
          if (z == null) return showError(T.err);
          x = mean + z * sd;
          primaryLabel.textContent = T.labelX;
          primaryOut.textContent = fmt(x, 4);
          steps.push(fill(T.stepX, { mean: fmt(mean, 4), z: fmt(z, 4), sd: fmt(sd, 4), x: fmt(x, 4) }));
        } else {
          x = parseNum(xEl.value, false);
          if (x == null) return showError(T.err);
          z = (x - mean) / sd;
          primaryLabel.textContent = T.labelZ;
          primaryOut.textContent = fmt(z, 6);
          steps.push(fill(T.stepZ, { x: fmt(x, 4), mean: fmt(mean, 4), sd: fmt(sd, 4), z: fmt(z, 6) }));
        }

        var diff = x - mean;
        var absZ = Math.abs(z);
        rows.push('<div class="zs-row"><strong>' + T.labelDiff + ':</strong> ' + fmt(diff, 4) + '</div>');
        rows.push('<div class="zs-row"><strong>' + T.labelAbs + ':</strong> ' + fmt(absZ, 4) + '</div>');
        steps.push(fill(T.stepDiff, { x: fmt(x, 4), mean: fmt(mean, 4), diff: fmt(diff, 4) }));
        steps.push(fill(T.stepAbs, { z: fmt(z, 6), abs: fmt(absZ, 4) }));

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
        modeEl.value = s.mode;
        xEl.value = s.x;
        zEl.value = s.z;
        meanEl.value = s.mean;
        sdEl.value = s.sd;
        syncFields();
        run();
      }

      /** 清空。 */
      function clearAll() {
        form.reset();
        modeEl.value = 'z';
        syncFields();
        result.style.display = 'none';
        xEl.focus();
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

	const toolMeta = getToolBySlug('how-to-calculate-z-score');
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
