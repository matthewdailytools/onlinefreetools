/**
 * 宽高比计算器：由宽×高求最简比，并按目标宽/高等比缩放另一边。
 * slug: how-to-calculate-aspect-ratio（见 work-tasks/how-to-calculate-aspect-ratio/02-tool-info.md）。
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
 * 渲染宽高比计算器工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderHowToCalculateAspectRatioPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/how-to-calculate-aspect-ratio';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_aspect_ratio_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_aspect_ratio_description');

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
			currentSlug: 'how-to-calculate-aspect-ratio',
			currentAnchor: '#aspect-ratio',
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
    @media (max-width:576px) { .form-row { grid-template-columns:1fr; } }
    .btn-row { display:flex; flex-wrap:wrap; gap:.5rem; align-items:center; }
    .mode-toggle { display:flex; gap:.5rem; margin-bottom:1rem; flex-wrap:wrap }
    .mode-toggle button {
      padding:.45rem .75rem; border-radius:8px; border:1px solid #ced4da; background:#e9ecef; cursor:pointer
    }
    .mode-toggle button.active { background:#0d6efd; color:#fff; border-color:#0d6efd }
    .result { background:#f8f9fa; padding:1rem; border-radius:8px; margin-top:1rem; text-align:center }
    .result .muted { color:#6c757d; font-size:.9rem; margin-top:.35rem }
    .hint { color:#6c757d; font-size:.875rem; margin-top:.25rem }
  </style>`;

	const contentHtml = `
    <div id="aspect-ratio" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(t(opts.lang, 'tool_aspect_ratio_title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <div class="form-group">
          <label class="form-label" for="arPreset">${escapeHtml(t(opts.lang, 'tool_aspect_ratio_preset_label'))}</label>
          <select id="arPreset" class="input-lg">
            <option value="custom">${escapeHtml(t(opts.lang, 'tool_aspect_ratio_preset_custom'))}</option>
            <option value="16:9">${escapeHtml(t(opts.lang, 'tool_aspect_ratio_preset_16_9'))}</option>
            <option value="4:3">${escapeHtml(t(opts.lang, 'tool_aspect_ratio_preset_4_3'))}</option>
            <option value="1:1">${escapeHtml(t(opts.lang, 'tool_aspect_ratio_preset_1_1'))}</option>
          </select>
        </div>
        <form id="aspectForm">
          <div class="form-row">
            <div class="form-group">
              <label class="form-label" for="arW">${escapeHtml(t(opts.lang, 'tool_aspect_ratio_w_label'))}</label>
              <input id="arW" class="input-lg" type="number" min="0" step="any"
                placeholder="${escapeHtml(t(opts.lang, 'tool_aspect_ratio_w_ph'))}" required>
            </div>
            <div class="form-group">
              <label class="form-label" for="arH">${escapeHtml(t(opts.lang, 'tool_aspect_ratio_h_label'))}</label>
              <input id="arH" class="input-lg" type="number" min="0" step="any"
                placeholder="${escapeHtml(t(opts.lang, 'tool_aspect_ratio_h_ph'))}" required>
            </div>
          </div>
          <div class="form-group">
            <span class="form-label">${escapeHtml(t(opts.lang, 'tool_aspect_ratio_scale_mode_label'))}</span>
            <div class="mode-toggle" role="group" aria-label="${escapeHtml(t(opts.lang, 'tool_aspect_ratio_scale_mode_label'))}">
              <button type="button" id="scaleByW" class="active" data-mode="w">${escapeHtml(t(opts.lang, 'tool_aspect_ratio_scale_by_w'))}</button>
              <button type="button" id="scaleByH" data-mode="h">${escapeHtml(t(opts.lang, 'tool_aspect_ratio_scale_by_h'))}</button>
            </div>
          </div>
          <div class="form-group" id="targetWWrap">
            <label class="form-label" for="arTargetW">${escapeHtml(t(opts.lang, 'tool_aspect_ratio_target_w_label'))}</label>
            <input id="arTargetW" class="input-lg" type="number" min="0" step="any"
              placeholder="${escapeHtml(t(opts.lang, 'tool_aspect_ratio_target_w_ph'))}">
          </div>
          <div class="form-group" id="targetHWrap" style="display:none">
            <label class="form-label" for="arTargetH">${escapeHtml(t(opts.lang, 'tool_aspect_ratio_target_h_label'))}</label>
            <input id="arTargetH" class="input-lg" type="number" min="0" step="any"
              placeholder="${escapeHtml(t(opts.lang, 'tool_aspect_ratio_target_h_ph'))}">
          </div>
          <div class="btn-row">
            <button type="submit" class="btn btn-primary">${escapeHtml(t(opts.lang, 'tool_aspect_ratio_calculate'))}</button>
            <button type="button" id="arSample" class="btn btn-outline-secondary">${escapeHtml(t(opts.lang, 'tool_aspect_ratio_sample'))}</button>
            <button type="button" id="arClear" class="btn btn-outline-secondary">${escapeHtml(t(opts.lang, 'tool_aspect_ratio_clear'))}</button>
          </div>
        </form>
        <div id="arResult" class="result" style="display:none" aria-live="polite">
          <div><strong>${escapeHtml(t(opts.lang, 'tool_aspect_ratio_result_ratio'))}:</strong> <span id="arRatio"></span></div>
          <div class="muted"><strong>${escapeHtml(t(opts.lang, 'tool_aspect_ratio_result_scaled'))}:</strong> <span id="arScaled"></span></div>
          <div id="arNote" class="muted"></div>
        </div>
      </div>
    </div>

    ${renderToolIgSections({ lang: opts.lang, prefix: 'tool_aspect_ratio', mode: 'formula' })}`;

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: t(opts.lang, 'tool_aspect_ratio_ref_nist_label'),
				href: 'https://www.nist.gov/pml/special-publication-811',
			},
		],
	});

	const extraBodyHtml = `
  <script>
    (function () {
      var form = document.getElementById('aspectForm');
      var preset = document.getElementById('arPreset');
      var arW = document.getElementById('arW');
      var arH = document.getElementById('arH');
      var scaleByWBtn = document.getElementById('scaleByW');
      var scaleByHBtn = document.getElementById('scaleByH');
      var targetWWrap = document.getElementById('targetWWrap');
      var targetHWrap = document.getElementById('targetHWrap');
      var arTargetW = document.getElementById('arTargetW');
      var arTargetH = document.getElementById('arTargetH');
      var result = document.getElementById('arResult');
      var ratioEl = document.getElementById('arRatio');
      var scaledEl = document.getElementById('arScaled');
      var noteEl = document.getElementById('arNote');
      var msgErr = ${JSON.stringify(t(opts.lang, 'tool_aspect_ratio_err_input'))};
      /** 缩放模式：w = 按目标宽求高；h = 按目标高求宽。 */
      var scaleMode = 'w';

      /**
       * 求两非负整数的最大公约数。
       * @param {number} a
       * @param {number} b
       * @returns {number}
       */
      function gcd(a, b) {
        a = Math.abs(Math.round(a));
        b = Math.abs(Math.round(b));
        if (!a && !b) return 1;
        while (b) {
          var t = b;
          b = a % b;
          a = t;
        }
        return a || 1;
      }

      /** 高亮一组按钮中的当前项。 */
      function setActive(group, activeBtn) {
        group.forEach(function (b) { b.classList.remove('active'); });
        activeBtn.classList.add('active');
      }

      /** 按缩放模式切换目标宽/高输入。 */
      function syncScaleUi() {
        var byW = scaleMode === 'w';
        targetWWrap.style.display = byW ? 'block' : 'none';
        targetHWrap.style.display = byW ? 'none' : 'block';
      }

      /**
       * 格式化尺寸数值（整数直接显示，否则最多 4 位小数去尾零）。
       * @param {number} n
       * @returns {string}
       */
      function fmtSize(n) {
        if (!Number.isFinite(n)) return '—';
        if (Math.abs(n - Math.round(n)) < 1e-9) return String(Math.round(n));
        return n.toFixed(4).replace(/\\.?0+$/, '');
      }

      /** 应用预设：填入常见像素尺寸（非独立 URL）。 */
      function applyPreset() {
        var v = preset.value;
        if (v === '16:9') {
          arW.value = '1920';
          arH.value = '1080';
        } else if (v === '4:3') {
          arW.value = '1600';
          arH.value = '1200';
        } else if (v === '1:1') {
          arW.value = '1080';
          arH.value = '1080';
        }
      }

      /**
       * 按当前输入计算最简比与缩放尺寸。
       * @returns {boolean} 输入合法并已写出结果时为 true
       */
      function runCalc() {
        result.style.display = 'block';
        var W = parseFloat(arW.value);
        var H = parseFloat(arH.value);
        if (!(W > 0) || !(H > 0)) {
          ratioEl.textContent = '—';
          scaledEl.textContent = '—';
          noteEl.textContent = msgErr;
          return false;
        }
        var g = gcd(W, H);
        var rw = Math.round(W) / g;
        var rh = Math.round(H) / g;
        ratioEl.textContent = rw + ':' + rh;

        if (scaleMode === 'w') {
          var tw = parseFloat(arTargetW.value);
          if (!(tw > 0)) {
            scaledEl.textContent = '—';
            noteEl.textContent = msgErr;
            return false;
          }
          var th = tw * H / W;
          scaledEl.textContent = fmtSize(tw) + ' × ' + fmtSize(th);
        } else {
          var th2 = parseFloat(arTargetH.value);
          if (!(th2 > 0)) {
            scaledEl.textContent = '—';
            noteEl.textContent = msgErr;
            return false;
          }
          var tw2 = th2 * W / H;
          scaledEl.textContent = fmtSize(tw2) + ' × ' + fmtSize(th2);
        }
        noteEl.textContent = '';
        return true;
      }

      /** 加载默认样例：1920×1080 → 16:9；目标宽 1280 → 高 720。 */
      function loadSample() {
        preset.value = '16:9';
        arW.value = '1920';
        arH.value = '1080';
        scaleMode = 'w';
        setActive([scaleByWBtn, scaleByHBtn], scaleByWBtn);
        syncScaleUi();
        arTargetW.value = '1280';
        arTargetH.value = '';
        runCalc();
      }

      preset.addEventListener('change', function () {
        if (preset.value !== 'custom') {
          applyPreset();
          runCalc();
        }
      });
      scaleByWBtn.addEventListener('click', function () {
        scaleMode = 'w';
        setActive([scaleByWBtn, scaleByHBtn], scaleByWBtn);
        syncScaleUi();
      });
      scaleByHBtn.addEventListener('click', function () {
        scaleMode = 'h';
        setActive([scaleByWBtn, scaleByHBtn], scaleByHBtn);
        syncScaleUi();
      });
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        runCalc();
      });
      document.getElementById('arSample').addEventListener('click', loadSample);
      document.getElementById('arClear').addEventListener('click', function () {
        form.reset();
        preset.value = 'custom';
        scaleMode = 'w';
        setActive([scaleByWBtn, scaleByHBtn], scaleByWBtn);
        syncScaleUi();
        result.style.display = 'none';
      });
      syncScaleUi();
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('how-to-calculate-aspect-ratio');
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
