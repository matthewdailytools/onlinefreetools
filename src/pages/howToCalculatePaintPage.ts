/**
 * 油漆用量计算器：墙面面积（或长×高×面数）+ 涂层 + 覆盖率 → 升数（可选罐数）。
 * slug: how-to-calculate-paint（见 work-tasks/how-to-calculate-paint/02-tool-info.md）。
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
 * 渲染油漆用量计算器工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderHowToCalculatePaintPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/how-to-calculate-paint';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_paint_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_paint_description');

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
			currentSlug: 'how-to-calculate-paint',
			currentAnchor: '#paint',
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
    .form-row-3 { display:grid; grid-template-columns:1fr 1fr 1fr; gap:1rem; }
    @media (max-width:576px) {
      .form-row, .form-row-3 { grid-template-columns:1fr; }
    }
    .btn-row { display:flex; flex-wrap:wrap; gap:.5rem; align-items:center; }
    .mode-toggle { display:flex; gap:.5rem; margin-bottom:1rem; flex-wrap:wrap }
    .mode-toggle button {
      padding:.45rem .75rem; border-radius:8px; border:1px solid #ced4da; background:#e9ecef; cursor:pointer
    }
    .mode-toggle button.active { background:#0d6efd; color:#fff; border-color:#0d6efd }
    .result { background:#f8f9fa; padding:1rem; border-radius:8px; margin-top:1rem; text-align:center }
    .result .muted { color:#6c757d; font-size:.9rem; margin-top:.35rem }
    .hint { color:#6c757d; font-size:.875rem; margin-top:.25rem }
    .check-row { display:flex; align-items:center; gap:.5rem; margin-bottom:1rem; }
  </style>`;

	const contentHtml = `
    <div id="paint" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(t(opts.lang, 'tool_paint_title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <div class="form-group">
          <span class="form-label">${escapeHtml(t(opts.lang, 'tool_paint_mode_label'))}</span>
          <div class="mode-toggle" role="group" aria-label="${escapeHtml(t(opts.lang, 'tool_paint_mode_label'))}">
            <button type="button" id="modeArea" class="active" data-mode="area">${escapeHtml(t(opts.lang, 'tool_paint_mode_area'))}</button>
            <button type="button" id="modeLhw" data-mode="lhw">${escapeHtml(t(opts.lang, 'tool_paint_mode_lhw'))}</button>
          </div>
        </div>
        <form id="paintForm">
          <div class="form-group" id="areaWrap">
            <label class="form-label" for="pArea">${escapeHtml(t(opts.lang, 'tool_paint_area_label'))}</label>
            <input id="pArea" class="input-lg" type="number" min="0" step="any"
              placeholder="${escapeHtml(t(opts.lang, 'tool_paint_area_ph'))}" required>
          </div>
          <div class="form-row-3" id="lhwWrap" style="display:none">
            <div class="form-group">
              <label class="form-label" for="pLen">${escapeHtml(t(opts.lang, 'tool_paint_len_label'))}</label>
              <input id="pLen" class="input-lg" type="number" min="0" step="any"
                placeholder="${escapeHtml(t(opts.lang, 'tool_paint_len_ph'))}">
            </div>
            <div class="form-group">
              <label class="form-label" for="pHeight">${escapeHtml(t(opts.lang, 'tool_paint_height_label'))}</label>
              <input id="pHeight" class="input-lg" type="number" min="0" step="any"
                placeholder="${escapeHtml(t(opts.lang, 'tool_paint_height_ph'))}">
            </div>
            <div class="form-group">
              <label class="form-label" for="pWalls">${escapeHtml(t(opts.lang, 'tool_paint_walls_label'))}</label>
              <input id="pWalls" class="input-lg" type="number" min="0" step="1"
                placeholder="${escapeHtml(t(opts.lang, 'tool_paint_walls_ph'))}">
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label" for="pCoats">${escapeHtml(t(opts.lang, 'tool_paint_coats_label'))}</label>
              <input id="pCoats" class="input-lg" type="number" min="0" step="any" value="2"
                placeholder="${escapeHtml(t(opts.lang, 'tool_paint_coats_ph'))}" required>
            </div>
            <div class="form-group">
              <label class="form-label" for="pCoverage">${escapeHtml(t(opts.lang, 'tool_paint_coverage_label'))}</label>
              <input id="pCoverage" class="input-lg" type="number" min="0" step="any" value="10"
                placeholder="${escapeHtml(t(opts.lang, 'tool_paint_coverage_ph'))}" required>
              <p class="hint mb-0">${escapeHtml(t(opts.lang, 'tool_paint_coverage_hint'))}</p>
            </div>
          </div>
          <div class="check-row">
            <input type="checkbox" id="pShowCans" checked>
            <label for="pShowCans" class="mb-0">${escapeHtml(t(opts.lang, 'tool_paint_cans_label'))}</label>
          </div>
          <div class="btn-row">
            <button type="submit" class="btn btn-primary">${escapeHtml(t(opts.lang, 'tool_paint_calculate'))}</button>
            <button type="button" id="pSample" class="btn btn-outline-secondary">${escapeHtml(t(opts.lang, 'tool_paint_sample'))}</button>
            <button type="button" id="pClear" class="btn btn-outline-secondary">${escapeHtml(t(opts.lang, 'tool_paint_clear'))}</button>
          </div>
        </form>
        <div id="pResult" class="result" style="display:none" aria-live="polite">
          <div><strong>${escapeHtml(t(opts.lang, 'tool_paint_result_liters'))}:</strong> <span id="pLiters"></span></div>
          <div class="muted"><strong>${escapeHtml(t(opts.lang, 'tool_paint_result_area'))}:</strong> <span id="pAreaUsed"></span></div>
          <div id="pCansRow" class="muted"><strong>${escapeHtml(t(opts.lang, 'tool_paint_result_cans'))}:</strong> <span id="pCans"></span></div>
          <div id="pNote" class="muted"></div>
        </div>
      </div>
    </div>

    ${renderToolIgSections({ lang: opts.lang, prefix: 'tool_paint', mode: 'formula' })}`;

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: t(opts.lang, 'tool_paint_ref_nist_label'),
				href: 'https://www.nist.gov/pml/special-publication-811',
			},
		],
	});

	const extraBodyHtml = `
  <script>
    (function () {
      var form = document.getElementById('paintForm');
      var modeAreaBtn = document.getElementById('modeArea');
      var modeLhwBtn = document.getElementById('modeLhw');
      var areaWrap = document.getElementById('areaWrap');
      var lhwWrap = document.getElementById('lhwWrap');
      var pArea = document.getElementById('pArea');
      var pLen = document.getElementById('pLen');
      var pHeight = document.getElementById('pHeight');
      var pWalls = document.getElementById('pWalls');
      var pCoats = document.getElementById('pCoats');
      var pCoverage = document.getElementById('pCoverage');
      var pShowCans = document.getElementById('pShowCans');
      var result = document.getElementById('pResult');
      var litersEl = document.getElementById('pLiters');
      var areaUsedEl = document.getElementById('pAreaUsed');
      var cansRow = document.getElementById('pCansRow');
      var cansEl = document.getElementById('pCans');
      var noteEl = document.getElementById('pNote');
      var msgErr = ${JSON.stringify(t(opts.lang, 'tool_paint_err_input'))};
      /** 当前输入模式：area = 直接面积；lhw = 长×高×面数。 */
      var mode = 'area';
      /** 可选罐体积假设（升），约等于 1 美制加仑。 */
      var CAN_L = 3.78;

      /** 高亮一组按钮中的当前项。 */
      function setActive(group, activeBtn) {
        group.forEach(function (b) { b.classList.remove('active'); });
        activeBtn.classList.add('active');
      }

      /** 按模式显示面积字段或长高面数字段。 */
      function syncModeUi() {
        var isArea = mode === 'area';
        areaWrap.style.display = isArea ? 'block' : 'none';
        lhwWrap.style.display = isArea ? 'none' : 'grid';
        pArea.required = isArea;
        pLen.required = !isArea;
        pHeight.required = !isArea;
        pWalls.required = !isArea;
      }

      /**
       * 格式化升数或面积（最多 4 位小数，去掉尾零）。
       * @param {number} n
       * @param {string} unit
       * @returns {string}
       */
      function fmt(n, unit) {
        if (!Number.isFinite(n)) return '—';
        var s = n.toFixed(4).replace(/\\.?0+$/, '');
        return s + ' ' + unit;
      }

      /**
       * 按当前输入计算所需油漆升数（与可选罐数）。
       * @returns {boolean} 输入合法并已写出结果时为 true
       */
      function runCalc() {
        result.style.display = 'block';
        var A = NaN;
        if (mode === 'area') {
          A = parseFloat(pArea.value);
        } else {
          var L = parseFloat(pLen.value);
          var H = parseFloat(pHeight.value);
          var walls = parseFloat(pWalls.value);
          if (L > 0 && H > 0 && walls > 0) A = L * H * walls;
        }
        var coats = parseFloat(pCoats.value);
        var coverage = parseFloat(pCoverage.value);
        if (!(A > 0) || !(coats > 0) || !(coverage > 0)) {
          litersEl.textContent = '—';
          areaUsedEl.textContent = '—';
          cansEl.textContent = '—';
          noteEl.textContent = msgErr;
          cansRow.style.display = pShowCans.checked ? 'block' : 'none';
          return false;
        }
        var liters = A * coats / coverage;
        litersEl.textContent = fmt(liters, 'L');
        areaUsedEl.textContent = fmt(A, 'm²');
        if (pShowCans.checked) {
          cansRow.style.display = 'block';
          cansEl.textContent = String(Math.ceil(liters / CAN_L - 1e-12));
        } else {
          cansRow.style.display = 'none';
          cansEl.textContent = '';
        }
        noteEl.textContent = '';
        return true;
      }

      /** 加载默认样例：40 m²、2 遍、10 m²/L → 8 L。 */
      function loadSample() {
        mode = 'area';
        setActive([modeAreaBtn, modeLhwBtn], modeAreaBtn);
        syncModeUi();
        pArea.value = '40';
        pLen.value = '';
        pHeight.value = '';
        pWalls.value = '';
        pCoats.value = '2';
        pCoverage.value = '10';
        pShowCans.checked = true;
        runCalc();
      }

      modeAreaBtn.addEventListener('click', function () {
        mode = 'area';
        setActive([modeAreaBtn, modeLhwBtn], modeAreaBtn);
        syncModeUi();
      });
      modeLhwBtn.addEventListener('click', function () {
        mode = 'lhw';
        setActive([modeAreaBtn, modeLhwBtn], modeLhwBtn);
        syncModeUi();
      });
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        runCalc();
      });
      pShowCans.addEventListener('change', function () {
        if (result.style.display !== 'none') runCalc();
      });
      document.getElementById('pSample').addEventListener('click', loadSample);
      document.getElementById('pClear').addEventListener('click', function () {
        form.reset();
        pCoats.value = '2';
        pCoverage.value = '10';
        pShowCans.checked = true;
        mode = 'area';
        setActive([modeAreaBtn, modeLhwBtn], modeAreaBtn);
        syncModeUi();
        result.style.display = 'none';
      });
      syncModeUi();
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('how-to-calculate-paint');
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
