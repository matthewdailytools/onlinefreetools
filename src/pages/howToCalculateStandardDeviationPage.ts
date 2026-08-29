/**
 * 标准差 / 方差计算器：数值列表 + 样本(n−1)/总体(n) 模式 → SD 与方差。
 * slug: how-to-calculate-standard-deviation（见 work-tasks/.../02-tool-info.md）。
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
 * 渲染标准差计算器工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderHowToCalculateStandardDeviationPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/how-to-calculate-standard-deviation';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_std_dev_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_std_dev_description');

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
			currentSlug: 'how-to-calculate-standard-deviation',
			currentAnchor: '#std-dev',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	const extraHeadHtml = `
  <style>
    .tool-card { max-width: var(--content-max); width: 100%; margin: 0 0 1.5rem; }
    .form-label { display:block; margin-bottom:.5rem; color:#495057; font-weight:500 }
    .form-group { margin-bottom:1rem; }
    .btn-row { display:flex; flex-wrap:wrap; gap:.5rem; align-items:center; }
    .mode-row { display:flex; flex-wrap:wrap; gap:1rem; align-items:center; }
    .mode-row label { display:inline-flex; align-items:center; gap:.35rem; font-weight:500; color:#495057; cursor:pointer; }
    .result { background:#f8f9fa; padding:1rem; border-radius:8px; margin-top:1rem; }
    .result-grid { display:grid; grid-template-columns:1fr 1fr; gap:.65rem 1rem; }
    @media (max-width:576px) { .result-grid { grid-template-columns:1fr; } }
    .result .muted { color:#6c757d; font-size:.9rem; margin-top:.5rem }
    .result .k { color:#6c757d; font-size:.85rem }
    .result .v { font-weight:700; font-size:1.15rem }
    textarea.input-lg { min-height:7rem; width:100%; resize:vertical; }
  </style>`;

	const contentHtml = `
    <div id="std-dev" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(t(opts.lang, 'tool_std_dev_title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <form id="stdDevForm">
          <div class="form-group">
            <label class="form-label" for="stdDevNumbers">${escapeHtml(t(opts.lang, 'tool_std_dev_numbers_label'))}</label>
            <textarea id="stdDevNumbers" class="input-lg" rows="5"
              placeholder="${escapeHtml(t(opts.lang, 'tool_std_dev_numbers_ph'))}" required></textarea>
            <div class="form-text text-muted">${escapeHtml(t(opts.lang, 'tool_std_dev_numbers_hint'))}</div>
          </div>
          <div class="form-group">
            <div class="form-label">${escapeHtml(t(opts.lang, 'tool_std_dev_mode_label'))}</div>
            <div class="mode-row">
              <label>
                <input type="radio" name="stdDevMode" value="sample" id="stdDevModeSample">
                ${escapeHtml(t(opts.lang, 'tool_std_dev_mode_sample'))}
              </label>
              <label>
                <input type="radio" name="stdDevMode" value="population" id="stdDevModePopulation" checked>
                ${escapeHtml(t(opts.lang, 'tool_std_dev_mode_population'))}
              </label>
            </div>
          </div>
          <div class="btn-row">
            <button type="submit" class="btn btn-primary">${escapeHtml(t(opts.lang, 'tool_std_dev_calculate'))}</button>
            <button type="button" id="stdDevSample" class="btn btn-outline-secondary">${escapeHtml(t(opts.lang, 'tool_std_dev_sample'))}</button>
            <button type="button" id="stdDevClear" class="btn btn-outline-secondary">${escapeHtml(t(opts.lang, 'tool_std_dev_clear'))}</button>
          </div>
        </form>
        <div id="stdDevResult" class="result" style="display:none" aria-live="polite">
          <div class="result-grid">
            <div><div class="k">${escapeHtml(t(opts.lang, 'tool_std_dev_result_count'))}</div><div class="v" id="stdDevCount"></div></div>
            <div><div class="k">${escapeHtml(t(opts.lang, 'tool_std_dev_result_mean'))}</div><div class="v" id="stdDevMean"></div></div>
            <div><div class="k">${escapeHtml(t(opts.lang, 'tool_std_dev_result_variance'))}</div><div class="v" id="stdDevVariance"></div></div>
            <div><div class="k">${escapeHtml(t(opts.lang, 'tool_std_dev_result_sd'))}</div><div class="v" id="stdDevSd"></div></div>
          </div>
          <div id="stdDevNote" class="muted"></div>
        </div>
      </div>
    </div>

    ${renderToolIgSections({ lang: opts.lang, prefix: 'tool_std_dev', mode: 'formula' })}`;

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: t(opts.lang, 'tool_std_dev_ref_sd_label'),
				href: 'https://en.wikipedia.org/wiki/Standard_deviation',
			},
			{
				label: t(opts.lang, 'tool_std_dev_ref_var_label'),
				href: 'https://en.wikipedia.org/wiki/Variance',
			},
		],
	});

	const extraBodyHtml = `
  <script>
    (function () {
      var form = document.getElementById('stdDevForm');
      var numbersEl = document.getElementById('stdDevNumbers');
      var result = document.getElementById('stdDevResult');
      var countEl = document.getElementById('stdDevCount');
      var meanEl = document.getElementById('stdDevMean');
      var varianceEl = document.getElementById('stdDevVariance');
      var sdEl = document.getElementById('stdDevSd');
      var noteEl = document.getElementById('stdDevNote');
      var msgEmpty = ${JSON.stringify(t(opts.lang, 'tool_std_dev_err_empty'))};
      var msgSampleN = ${JSON.stringify(t(opts.lang, 'tool_std_dev_err_sample_n'))};
      var noteSample = ${JSON.stringify(t(opts.lang, 'tool_std_dev_result_note_sample'))};
      var notePop = ${JSON.stringify(t(opts.lang, 'tool_std_dev_result_note_population'))};

      /**
       * 从文本解析浮点列表（逗号/分号/空白分隔）。
       * @param {string} text
       * @returns {number[]}
       */
      function parseNumbers(text) {
        var parts = String(text || '').split(/[,;\\s]+/);
        var out = [];
        for (var i = 0; i < parts.length; i++) {
          var p = parts[i].trim();
          if (!p) continue;
          var n = Number(p);
          if (Number.isFinite(n)) out.push(n);
        }
        return out;
      }

      /** 数值格式化为最多 6 位有效小数（去尾零）。 */
      function fmt(n) {
        if (!Number.isFinite(n)) return '—';
        var s = n.toFixed(6);
        return s.replace(/\\.?0+$/, '');
      }

      /** 当前模式：sample | population。 */
      function currentMode() {
        var el = form.querySelector('input[name="stdDevMode"]:checked');
        return el && el.value === 'sample' ? 'sample' : 'population';
      }

      /**
       * 计算均值、方差与标准差并写入结果区。
       * @returns {boolean}
       */
      function runCalc() {
        var nums = parseNumbers(numbersEl.value);
        var mode = currentMode();
        result.style.display = 'block';
        if (nums.length < 1) {
          countEl.textContent = '—';
          meanEl.textContent = '—';
          varianceEl.textContent = '—';
          sdEl.textContent = '—';
          noteEl.textContent = msgEmpty;
          return false;
        }
        if (mode === 'sample' && nums.length < 2) {
          countEl.textContent = String(nums.length);
          meanEl.textContent = '—';
          varianceEl.textContent = '—';
          sdEl.textContent = '—';
          noteEl.textContent = msgSampleN;
          return false;
        }
        var n = nums.length;
        var sum = 0;
        for (var i = 0; i < n; i++) sum += nums[i];
        var mean = sum / n;
        var ss = 0;
        for (var j = 0; j < n; j++) {
          var d = nums[j] - mean;
          ss += d * d;
        }
        var denom = mode === 'sample' ? n - 1 : n;
        var variance = ss / denom;
        var sd = Math.sqrt(variance);
        countEl.textContent = String(n);
        meanEl.textContent = fmt(mean);
        varianceEl.textContent = fmt(variance);
        sdEl.textContent = fmt(sd);
        noteEl.textContent = mode === 'sample' ? noteSample : notePop;
        return true;
      }

      /** 加载经典样例并默认总体模式（σ = 2）。 */
      function loadSample() {
        numbersEl.value = '2, 4, 4, 4, 5, 5, 7, 9';
        document.getElementById('stdDevModePopulation').checked = true;
        runCalc();
      }

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        runCalc();
      });
      form.querySelectorAll('input[name="stdDevMode"]').forEach(function (r) {
        r.addEventListener('change', function () {
          if (numbersEl.value.trim()) runCalc();
        });
      });
      document.getElementById('stdDevSample').addEventListener('click', loadSample);
      document.getElementById('stdDevClear').addEventListener('click', function () {
        form.reset();
        document.getElementById('stdDevModePopulation').checked = true;
        result.style.display = 'none';
      });
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('how-to-calculate-standard-deviation');
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
