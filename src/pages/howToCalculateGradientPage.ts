/**
 * 多元函数梯度计算器：在选定示例函数上求 ∇f、计算过程与模长；区分两点斜率。
 * slug: how-to-calculate-gradient（见 work-tasks/how-to-calculate-gradient/02-tool-info.md）。
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

/** 为路径加上语言前缀（默认语无前缀）。 */
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * 渲染多元函数梯度计算器工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderHowToCalculateGradientPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/how-to-calculate-gradient';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_gradient_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_gradient_description');

	const navItems = buildToolPageNavItems(opts.lang, opts.defaultLang);

	/** 语言切换链接始终带显式语言前缀（含默认语）。 */
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
			currentSlug: 'how-to-calculate-gradient',
			currentAnchor: '#gradient',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	/** 取本工具 i18n 文案。 */
	const tx = (key: string) => t(opts.lang, `tool_gradient_${key}` as never);

	const extraHeadHtml = `
  <style>
    .grad-card { max-width: var(--content-max); width: 100%; margin: 0 0 1.5rem; }
    .form-label { display:block; margin-bottom:.5rem; color:#495057; font-weight:500 }
    .form-group { margin-bottom:1rem; }
    .form-row { display:grid; grid-template-columns:1fr 1fr; gap:1rem; }
    @media (max-width:576px) { .form-row { grid-template-columns:1fr; } }
    .btn-row { display:flex; flex-wrap:wrap; gap:.5rem; align-items:center; }
    .grad-fn { background:#f8f9fa;padding:.75rem;border-radius:6px;font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;overflow:auto;font-size:.92rem;white-space:pre-wrap }
    .result { background:#f8f9fa; padding:1rem; border-radius:8px; margin-top:1rem; }
    .result .main { font-weight:700; font-size:1.2rem; font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace; text-align:center }
    .result .work { font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace; font-size:.92rem; margin-top:.5rem; word-break:break-word }
    .result .muted { color:#6c757d; font-size:.9rem; margin-top:.35rem }
    .result dl { display:grid; grid-template-columns:auto 1fr; gap:.25rem 1rem; margin:.75rem 0 0; }
    .result dt { color:#495057; font-weight:500; }
    .result dd { margin:0; font-variant-numeric: tabular-nums; font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace; }
  </style>`;

	const contentHtml = `
    <div id="gradient" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(tx('title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card grad-card">
      <div class="card-body">
        <form id="gradForm">
          <div class="form-group">
            <label class="form-label" for="gradFn">${escapeHtml(tx('fn_label'))}</label>
            <select id="gradFn" class="input-lg">
              <option value="xy3y" selected>${escapeHtml(tx('fn_xy3y'))}</option>
              <option value="x2y2">${escapeHtml(tx('fn_x2y2'))}</option>
              <option value="xy">${escapeHtml(tx('fn_xy'))}</option>
              <option value="sincos">${escapeHtml(tx('fn_sincos'))}</option>
            </select>
          </div>
          <pre class="grad-fn mb-3" id="gradFnBox" dir="ltr"></pre>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label" for="gradX">${escapeHtml(tx('x_label'))}</label>
              <input id="gradX" class="input-lg" type="number" step="any" inputmode="decimal" placeholder="${escapeHtml(tx('x_placeholder'))}">
            </div>
            <div class="form-group">
              <label class="form-label" for="gradY">${escapeHtml(tx('y_label'))}</label>
              <input id="gradY" class="input-lg" type="number" step="any" inputmode="decimal" placeholder="${escapeHtml(tx('y_placeholder'))}">
            </div>
          </div>
          <div class="btn-row">
            <button type="submit" class="btn btn-primary">${escapeHtml(tx('calculate'))}</button>
            <button type="button" id="btnSample" class="btn btn-outline-secondary">${escapeHtml(tx('sample'))}</button>
            <button type="button" id="btnClear" class="btn btn-outline-secondary">${escapeHtml(tx('clear'))}</button>
          </div>
        </form>
        <div id="gradResult" class="result" style="display:none" aria-live="polite">
          <div class="text-muted text-center">${escapeHtml(tx('result_label'))}</div>
          <div class="main" id="gradValue" dir="ltr"></div>
          <div class="work"><strong>${escapeHtml(tx('work_label'))}:</strong> <span id="gradWork" dir="ltr"></span></div>
          <dl>
            <dt>${escapeHtml(tx('mag_label'))}</dt><dd id="gradMag" dir="ltr"></dd>
            <dt>${escapeHtml(tx('unit_label'))}</dt><dd id="gradUnit" dir="ltr"></dd>
          </dl>
          <div id="gradNote" class="muted"></div>
        </div>
      </div>
    </div>

    ${renderToolIgSections({ lang: opts.lang, prefix: 'tool_gradient', mode: 'formula', usecaseCount: 4 })}`;

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{ label: tx('ref_wiki_label'), href: 'https://en.wikipedia.org/wiki/Gradient' },
			{
				label: tx('ref_khan_label'),
				href: 'https://www.khanacademy.org/math/multivariable-calculus/multivariable-derivatives/partial-derivative-and-gradient-articles/a/the-gradient',
			},
		],
	});

	const extraBodyHtml = `
  <script>
    (function () {
      var form = document.getElementById('gradForm');
      var fnEl = document.getElementById('gradFn');
      var fnBox = document.getElementById('gradFnBox');
      var xEl = document.getElementById('gradX');
      var yEl = document.getElementById('gradY');
      var res = document.getElementById('gradResult');
      var valEl = document.getElementById('gradValue');
      var workEl = document.getElementById('gradWork');
      var magEl = document.getElementById('gradMag');
      var unitEl = document.getElementById('gradUnit');
      var noteEl = document.getElementById('gradNote');
      var LANG = ${JSON.stringify(opts.lang)};
      var msgInvalid = ${JSON.stringify(tx('invalid_input'))};
      var noteTpl = ${JSON.stringify(tx('result_note'))};
      var zeroMag = ${JSON.stringify(tx('zero_mag'))};
      var boxTpl = {
        xy3y: ${JSON.stringify(tx('box_xy3y'))},
        x2y2: ${JSON.stringify(tx('box_x2y2'))},
        xy: ${JSON.stringify(tx('box_xy'))},
        sincos: ${JSON.stringify(tx('box_sincos'))}
      };
      var nf = new Intl.NumberFormat(LANG + '-u-nu-latn', { maximumFractionDigits: 4, useGrouping: false });

      /** 格式化数字。 */
      function fmt(n) {
        return Number.isFinite(n) ? nf.format(n) : '—';
      }

      /** 计算过程中的操作数：负数加括号。 */
      function par(n) {
        return n < 0 ? '(' + fmt(n) + ')' : fmt(n);
      }

      /** 用 {key} 填充模板。 */
      function fill(tpl, map) {
        return tpl.replace(/\\{(\\w+)\\}/g, function (_, k) { return map[k] != null ? map[k] : ''; });
      }

      /** 刷新公式预览框。 */
      function syncFn() {
        fnBox.textContent = boxTpl[fnEl.value] || '';
      }

      /**
       * 按选定示例函数求 ∇f。
       * @returns {{ ok: boolean, error?: string, gx?: number, gy?: number, work?: string }}
       */
      function compute() {
        var x = xEl.value === '' ? NaN : Number(xEl.value);
        var y = yEl.value === '' ? NaN : Number(yEl.value);
        if (!Number.isFinite(x) || !Number.isFinite(y)) return { ok: false, error: msgInvalid };
        var kind = fnEl.value;
        var gx, gy, work;
        if (kind === 'x2y2') {
          gx = 2 * x;
          gy = 2 * y;
          work = '∂f/∂x = 2×' + par(x) + ' = ' + fmt(gx) + '; ∂f/∂y = 2×' + par(y) + ' = ' + fmt(gy);
        } else if (kind === 'xy') {
          gx = y;
          gy = x;
          work = '∂f/∂x = ' + fmt(y) + '; ∂f/∂y = ' + fmt(x);
        } else if (kind === 'sincos') {
          gx = Math.cos(x);
          gy = -Math.sin(y);
          work = '∂f/∂x = cos(' + fmt(x) + ') = ' + fmt(gx) + '; ∂f/∂y = −sin(' + fmt(y) + ') = ' + fmt(gy);
        } else {
          gx = 2 * x * y;
          gy = x * x + 3;
          work = '∂f/∂x = 2×' + par(x) + '×' + par(y) + ' = ' + fmt(gx) + '; ∂f/∂y = ' + par(x) + '² + 3 = ' + fmt(gy);
        }
        return { ok: true, gx: gx, gy: gy, work: work };
      }

      /** 执行计算并刷新结果区。 */
      function runCalc() {
        var out = compute();
        res.style.display = 'block';
        if (!out.ok) {
          valEl.textContent = '—';
          workEl.textContent = '';
          magEl.textContent = '—';
          unitEl.textContent = '—';
          noteEl.textContent = out.error || msgInvalid;
          return false;
        }
        var mag = Math.sqrt(out.gx * out.gx + out.gy * out.gy);
        valEl.textContent = '∇f = (' + fmt(out.gx) + ', ' + fmt(out.gy) + ')';
        workEl.textContent = out.work;
        magEl.textContent = fmt(mag);
        if (mag < 1e-12) {
          unitEl.textContent = zeroMag;
        } else {
          unitEl.textContent = '(' + fmt(out.gx / mag) + ', ' + fmt(out.gy / mag) + ')';
        }
        noteEl.textContent = fill(noteTpl, { x: fmt(Number(xEl.value)), y: fmt(Number(yEl.value)) });
        return true;
      }

      /** 样例：默认函数在 (1, 2) → ∇f=(4,4)。 */
      function loadSample() {
        fnEl.value = 'xy3y';
        syncFn();
        xEl.value = '1';
        yEl.value = '2';
        runCalc();
      }

      fnEl.addEventListener('change', function () {
        syncFn();
        res.style.display = 'none';
      });
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        runCalc();
      });
      document.getElementById('btnSample').addEventListener('click', loadSample);
      document.getElementById('btnClear').addEventListener('click', function () {
        form.reset();
        syncFn();
        res.style.display = 'none';
      });
      syncFn();
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('how-to-calculate-gradient');
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

export default renderHowToCalculateGradientPage;
