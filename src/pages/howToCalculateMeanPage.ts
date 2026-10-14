/**
 * 平均数计算器 计算器工具页。
 * slug: how-to-calculate-mean（见 work-tasks/how-to-calculate-mean/02-tool-info.md）。
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
 * 渲染 how-to-calculate-mean 工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderHowToCalculateMeanPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/how-to-calculate-mean';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_mean_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_mean_description');

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
			currentSlug: 'how-to-calculate-mean',
			currentAnchor: '#mean',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	const extraHeadHtml = `
  <style>
    .tool-card { max-width: var(--content-max); width: 100%; margin: 0 0 1.5rem; }
    .form-label { display:block; margin-bottom:.5rem; color:#495057; font-weight:500 }
    .form-group { margin-bottom:1rem; }
    .form-row { display:grid; grid-template-columns:1fr 1fr; gap:1rem; }
    .form-half { }
    @media (max-width:576px) { .form-row { grid-template-columns:1fr; } }
    .btn-row { display:flex; flex-wrap:wrap; gap:.5rem; align-items:center; }
    .result { background:#f8f9fa; padding:1rem; border-radius:8px; margin-top:1rem; text-align:center }
    .result .muted { color:#6c757d; font-size:.9rem; margin-top:.35rem }
  </style>`;

	const contentHtml = `
    <div id="mean" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(t(opts.lang, 'tool_mean_title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <form id="calcForm">
          <div class="form-row">

          <div class="form-group" style="grid-column:1/-1">
            <label class="form-label" for="nums">${escapeHtml(t(opts.lang, 'tool_mean_nums_label'))}</label>
            <textarea id="nums" class="input-lg" rows="4"
              placeholder="${escapeHtml(t(opts.lang, 'tool_mean_nums_ph'))}" style="min-height:6rem;resize:vertical;font-family:inherit"></textarea>
          </div>

          <div class="form-group form-half">
            <label class="form-label" for="type">${escapeHtml(t(opts.lang, 'tool_mean_type_label'))}</label>
            <select id="type" class="input-lg">
              <option value="arithmetic" selected>${escapeHtml(t(opts.lang, 'tool_mean_type_arithmetic'))}</option>
              <option value="geometric">${escapeHtml(t(opts.lang, 'tool_mean_type_geometric'))}</option>
              <option value="harmonic">${escapeHtml(t(opts.lang, 'tool_mean_type_harmonic'))}</option>
            </select>
          </div>
          </div>
          <div class="btn-row">
            <button type="submit" class="btn btn-primary">${escapeHtml(t(opts.lang, 'tool_mean_calculate'))}</button>
            <button type="button" id="btnSample" class="btn btn-outline-secondary">${escapeHtml(t(opts.lang, 'tool_mean_sample'))}</button>
            <button type="button" id="btnClear" class="btn btn-outline-secondary">${escapeHtml(t(opts.lang, 'tool_mean_clear'))}</button>
          </div>
        </form>
        <div id="calcResult" class="result" style="display:none" aria-live="polite">
          <div><strong>${escapeHtml(t(opts.lang, 'tool_mean_meanOut_label'))}:</strong> <span id="meanOut"></span></div>
          <div id="calcDetails">
            <div class="muted"><span>${escapeHtml(t(opts.lang, 'tool_mean_count_label'))}:</span> <span id="countOut"></span></div>
            <div class="muted"><span>${escapeHtml(t(opts.lang, 'tool_mean_work_label'))}:</span> <span id="workOut" dir="ltr"></span></div>
            <div class="muted"><span>${escapeHtml(t(opts.lang, 'tool_mean_compare_label'))}:</span> <span id="compareOut"></span></div>
          </div>
          <div id="calcNote" class="muted"></div>
        </div>
      </div>
    </div>

    ${renderToolIgSections({ lang: opts.lang, prefix: 'tool_mean', mode: 'formula', usecaseCount: 4 })}`;

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: t(opts.lang, 'tool_mean_ref_a_label'),
				href: 'https://en.wikipedia.org/wiki/Mean',
			},
			{
				label: t(opts.lang, 'tool_mean_ref_b_label'),
				href: 'https://www.itl.nist.gov/div898/handbook/eda/section3/eda351.htm',
			}
		],
	});

	const extraBodyHtml = `
  <script>
    (function () {
      var form = document.getElementById('calcForm');
      var result = document.getElementById('calcResult');
      var noteEl = document.getElementById('calcNote');
      var numsEl = document.getElementById('nums');
      var typeEl = document.getElementById('type');
      var meanOutEl = document.getElementById('meanOut');
      var detailsEl = document.getElementById('calcDetails');
      var countOutEl = document.getElementById('countOut');
      var workOutEl = document.getElementById('workOut');
      var compareOutEl = document.getElementById('compareOut');
      /** 当前页面语言（决定结果的小数点写法）。 */
      var LANG = ${JSON.stringify(opts.lang)};
      var msgErr = ${JSON.stringify(t(opts.lang, 'tool_mean_err_generic'))};
      var msgEmpty = ${JSON.stringify(t(opts.lang, 'tool_mean_err_empty'))};
      var msgNan = ${JSON.stringify(t(opts.lang, 'tool_mean_err_nan'))};
      var msgGeo = ${JSON.stringify(t(opts.lang, 'tool_mean_err_geo'))};
      var msgHarm = ${JSON.stringify(t(opts.lang, 'tool_mean_err_harm'))};
      var noteEdu = ${JSON.stringify(t(opts.lang, 'tool_mean_result_note'))};
      /** 三种平均数的本地名称（对照行用）。 */
      var labelArith = ${JSON.stringify(t(opts.lang, 'tool_mean_type_arithmetic'))};
      var labelGeo = ${JSON.stringify(t(opts.lang, 'tool_mean_type_geometric'))};
      var labelHarm = ${JSON.stringify(t(opts.lang, 'tool_mean_type_harmonic'))};

      /** 本地数字格式：最多 4 位小数、不分组、拉丁数字；Intl 不可用时退回 toFixed 去尾零。 */
      var numberFormat = null;
      try {
        numberFormat = new Intl.NumberFormat(LANG + '-u-nu-latn', { maximumFractionDigits: 4, useGrouping: false });
      } catch (e) {
        numberFormat = null;
      }

      /**
       * 格式化数字（最多 4 位小数，按页面语言的小数点）。
       * @param {number} n 数值
       * @returns {string} 显示文本；非有限数为 —
       */
      function fmt(n) {
        if (!Number.isFinite(n)) return '—';
        if (numberFormat) return numberFormat.format(n);
        return String(Math.round(n * 10000) / 10000);
      }

      /**
       * 用 split/join 替换占位符（避免正则在模板字符串里被转义）。
       * @param {string} template 含 {token} 的文案
       * @param {string} token 替换值
       * @returns {string} 替换结果
       */
      function fillToken(template, token) {
        return String(template).split('{token}').join(token);
      }

      /**
       * 解析输入：默认按空白与逗号分隔；出现分号时按分号/空白分隔，并把逗号视为小数点（2,5; 3,5）。
       * @param {string} raw 原始输入
       * @returns {{ ok: boolean, error?: string, xs?: number[] }} 数值列表或错误
       */
      function parseNumbers(raw) {
        var text = String(raw || '').trim();
        if (!text) return { ok: false, error: msgEmpty };
        var decimalComma = text.indexOf(';') >= 0;
        var parts = text.split(decimalComma ? /[;\\s]+/ : /[\\s,]+/).filter(Boolean);
        var xs = [];
        for (var i = 0; i < parts.length; i++) {
          var token = decimalComma ? parts[i].replace(',', '.') : parts[i];
          var x = Number(token);
          if (!Number.isFinite(x)) return { ok: false, error: fillToken(msgNan, parts[i]) };
          xs.push(x);
        }
        if (!xs.length) return { ok: false, error: msgEmpty };
        return { ok: true, xs: xs };
      }

      /**
       * 计算所选平均数，并给出个数、计算过程与三种平均数对照。
       * @returns {{ ok: boolean, error?: string, values?: { mean: string, count: string, work: string, compare: string } }}
       */
      function compute() {
        var parsed = parseNumbers(numsEl.value);
        if (!parsed.ok) return parsed;
        var xs = parsed.xs;
        var n = xs.length;
        var kind = typeEl.value;
        var sum = 0;
        var lnSum = 0;
        var invSum = 0;
        var allPositive = true;
        for (var i = 0; i < n; i++) {
          sum += xs[i];
          if (xs[i] > 0) {
            lnSum += Math.log(xs[i]);
            invSum += 1 / xs[i];
          } else {
            allPositive = false;
          }
        }
        if (kind === 'geometric' && !allPositive) return { ok: false, error: msgGeo };
        if (kind === 'harmonic' && !allPositive) return { ok: false, error: msgHarm };

        var arith = sum / n;
        var geo = allPositive ? Math.exp(lnSum / n) : NaN;
        var harm = allPositive ? n / invSum : NaN;
        var mean = arith;
        var work = fmt(sum) + ' ÷ ' + n + ' = ' + fmt(arith);
        if (kind === 'geometric') {
          mean = geo;
          var product = Math.exp(lnSum);
          work = Number.isFinite(product) && product < 1e12
            ? '(' + fmt(product) + ')^(1/' + n + ') = ' + fmt(geo)
            : 'exp(' + fmt(lnSum) + ' ÷ ' + n + ') = ' + fmt(geo);
        } else if (kind === 'harmonic') {
          mean = harm;
          work = n + ' ÷ ' + fmt(invSum) + ' = ' + fmt(harm);
        }
        var compare = labelArith + ' ' + fmt(arith) + ' · ' + labelGeo + ' ' + fmt(geo) + ' · ' + labelHarm + ' ' + fmt(harm);
        return { ok: true, values: { mean: fmt(mean), count: String(n), work: work, compare: compare } };
      }

      /** 执行计算并刷新结果区；失败时隐藏明细、显示具体错误。 */
      function runCalc() {
        var out = compute();
        result.style.display = 'block';
        if (!out || !out.ok) {
          meanOutEl.textContent = '—';
          detailsEl.style.display = 'none';
          noteEl.textContent = (out && out.error) || msgErr;
          return false;
        }
        var v = out.values;
        meanOutEl.textContent = v.mean;
        countOutEl.textContent = v.count;
        workOutEl.textContent = v.work;
        compareOutEl.textContent = v.compare;
        detailsEl.style.display = '';
        noteEl.textContent = noteEdu;
        return true;
      }

      /** 加载进页样例（与 Example 文案一致：1–5 算术平均 → 3）。 */
      function loadSample() {
        numsEl.value = '1, 2, 3, 4, 5';
        typeEl.value = 'arithmetic';
        runCalc();
      }

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        runCalc();
      });
      document.getElementById('btnSample').addEventListener('click', loadSample);
      document.getElementById('btnClear').addEventListener('click', function () {
        form.reset();
        result.style.display = 'none';
      });
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('how-to-calculate-mean');
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
