/**
 * 瓷砖用量计算器：房间面积（或长×宽）+ 单片 cm 尺寸 + 损耗% → 片数（向上取整）。
 * slug: how-to-calculate-tile（见 work-tasks/how-to-calculate-tile/02-tool-info.md）。
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
 * 渲染瓷砖用量计算器工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderHowToCalculateTilePage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/how-to-calculate-tile';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, 'tool_tile_title')} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, 'tool_tile_description');

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
			currentSlug: 'how-to-calculate-tile',
			currentAnchor: '#tile',
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
    <div id="tile" class="mb-3">
      <h1 class="h4 mb-1">${escapeHtml(t(opts.lang, 'tool_tile_title'))}</h1>
      <p class="text-muted mb-0">${escapeHtml(description)}</p>
    </div>

    <div class="card tool-card">
      <div class="card-body">
        <div class="form-group">
          <span class="form-label">${escapeHtml(t(opts.lang, 'tool_tile_mode_label'))}</span>
          <div class="mode-toggle" role="group" aria-label="${escapeHtml(t(opts.lang, 'tool_tile_mode_label'))}">
            <button type="button" id="modeArea" class="active" data-mode="area">${escapeHtml(t(opts.lang, 'tool_tile_mode_area'))}</button>
            <button type="button" id="modeLw" data-mode="lw">${escapeHtml(t(opts.lang, 'tool_tile_mode_lw'))}</button>
          </div>
        </div>
        <form id="tileForm">
          <div class="form-group" id="areaWrap">
            <label class="form-label" for="tArea">${escapeHtml(t(opts.lang, 'tool_tile_area_label'))}</label>
            <input id="tArea" class="input-lg" type="number" min="0" step="any"
              placeholder="${escapeHtml(t(opts.lang, 'tool_tile_area_ph'))}" required>
          </div>
          <div class="form-row" id="lwWrap" style="display:none">
            <div class="form-group">
              <label class="form-label" for="tRoomL">${escapeHtml(t(opts.lang, 'tool_tile_room_l_label'))}</label>
              <input id="tRoomL" class="input-lg" type="number" min="0" step="any"
                placeholder="${escapeHtml(t(opts.lang, 'tool_tile_room_l_ph'))}">
            </div>
            <div class="form-group">
              <label class="form-label" for="tRoomW">${escapeHtml(t(opts.lang, 'tool_tile_room_w_label'))}</label>
              <input id="tRoomW" class="input-lg" type="number" min="0" step="any"
                placeholder="${escapeHtml(t(opts.lang, 'tool_tile_room_w_ph'))}">
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label" for="tTileL">${escapeHtml(t(opts.lang, 'tool_tile_tile_l_label'))}</label>
              <input id="tTileL" class="input-lg" type="number" min="0" step="any"
                placeholder="${escapeHtml(t(opts.lang, 'tool_tile_tile_l_ph'))}" required>
            </div>
            <div class="form-group">
              <label class="form-label" for="tTileW">${escapeHtml(t(opts.lang, 'tool_tile_tile_w_label'))}</label>
              <input id="tTileW" class="input-lg" type="number" min="0" step="any"
                placeholder="${escapeHtml(t(opts.lang, 'tool_tile_tile_w_ph'))}" required>
            </div>
          </div>
          <div class="form-group">
            <label class="form-label" for="tWaste">${escapeHtml(t(opts.lang, 'tool_tile_waste_label'))}</label>
            <input id="tWaste" class="input-lg" type="number" min="0" step="any" value="10"
              placeholder="${escapeHtml(t(opts.lang, 'tool_tile_waste_ph'))}" required>
            <p class="hint mb-0">${escapeHtml(t(opts.lang, 'tool_tile_waste_hint'))}</p>
          </div>
          <div class="btn-row">
            <button type="submit" class="btn btn-primary">${escapeHtml(t(opts.lang, 'tool_tile_calculate'))}</button>
            <button type="button" id="tSample" class="btn btn-outline-secondary">${escapeHtml(t(opts.lang, 'tool_tile_sample'))}</button>
            <button type="button" id="tClear" class="btn btn-outline-secondary">${escapeHtml(t(opts.lang, 'tool_tile_clear'))}</button>
          </div>
        </form>
        <div id="tResult" class="result" style="display:none" aria-live="polite">
          <div><strong>${escapeHtml(t(opts.lang, 'tool_tile_result_tiles'))}:</strong> <span id="tTiles"></span></div>
          <div class="muted"><strong>${escapeHtml(t(opts.lang, 'tool_tile_result_area'))}:</strong> <span id="tAreaUsed"></span></div>
          <div class="muted"><strong>${escapeHtml(t(opts.lang, 'tool_tile_result_tile_area'))}:</strong> <span id="tTileArea"></span></div>
          <div id="tNote" class="muted"></div>
        </div>
      </div>
    </div>

    ${renderToolIgSections({ lang: opts.lang, prefix: 'tool_tile', mode: 'formula' })}`;

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: t(opts.lang, 'tool_tile_ref_nist_label'),
				href: 'https://www.nist.gov/pml/special-publication-811',
			},
			{
				label: t(opts.lang, 'tool_tile_ref_tcna_label'),
				href: 'https://www.tcnatile.com/',
			},
		],
	});

	const extraBodyHtml = `
  <script>
    (function () {
      var form = document.getElementById('tileForm');
      var modeAreaBtn = document.getElementById('modeArea');
      var modeLwBtn = document.getElementById('modeLw');
      var areaWrap = document.getElementById('areaWrap');
      var lwWrap = document.getElementById('lwWrap');
      var tArea = document.getElementById('tArea');
      var tRoomL = document.getElementById('tRoomL');
      var tRoomW = document.getElementById('tRoomW');
      var tTileL = document.getElementById('tTileL');
      var tTileW = document.getElementById('tTileW');
      var tWaste = document.getElementById('tWaste');
      var result = document.getElementById('tResult');
      var tilesEl = document.getElementById('tTiles');
      var areaUsedEl = document.getElementById('tAreaUsed');
      var tileAreaEl = document.getElementById('tTileArea');
      var noteEl = document.getElementById('tNote');
      var msgErr = ${JSON.stringify(t(opts.lang, 'tool_tile_err_input'))};
      /** 当前输入模式：area = 直接面积；lw = 长×宽。 */
      var mode = 'area';

      /** 高亮一组按钮中的当前项。 */
      function setActive(group, activeBtn) {
        group.forEach(function (b) { b.classList.remove('active'); });
        activeBtn.classList.add('active');
      }

      /** 按模式显示面积字段或长宽字段。 */
      function syncModeUi() {
        var isArea = mode === 'area';
        areaWrap.style.display = isArea ? 'block' : 'none';
        lwWrap.style.display = isArea ? 'none' : 'grid';
        tArea.required = isArea;
        tRoomL.required = !isArea;
        tRoomW.required = !isArea;
      }

      modeAreaBtn.addEventListener('click', function () {
        mode = 'area';
        setActive([modeAreaBtn, modeLwBtn], modeAreaBtn);
        syncModeUi();
      });
      modeLwBtn.addEventListener('click', function () {
        mode = 'lw';
        setActive([modeAreaBtn, modeLwBtn], modeLwBtn);
        syncModeUi();
      });

      /**
       * 格式化平方米数值（最多 4 位小数，去掉尾零）。
       * @param {number} n
       * @returns {string}
       */
      function fmtM2(n) {
        if (!Number.isFinite(n)) return '—';
        var s = n.toFixed(4).replace(/\\.?0+$/, '');
        return s + ' m²';
      }

      /**
       * 按当前输入计算所需瓷砖片数（含损耗，向上取整）。
       * @returns {boolean} 输入合法并已写出结果时为 true
       */
      function runCalc() {
        result.style.display = 'block';
        var A = NaN;
        if (mode === 'area') {
          A = parseFloat(tArea.value);
        } else {
          var L = parseFloat(tRoomL.value);
          var W = parseFloat(tRoomW.value);
          if (L > 0 && W > 0) A = L * W;
        }
        var tileLcm = parseFloat(tTileL.value);
        var tileWcm = parseFloat(tTileW.value);
        var waste = parseFloat(tWaste.value);
        if (!(A > 0) || !(tileLcm > 0) || !(tileWcm > 0) || !(waste >= 0) || !Number.isFinite(waste)) {
          tilesEl.textContent = '—';
          areaUsedEl.textContent = '—';
          tileAreaEl.textContent = '—';
          noteEl.textContent = msgErr;
          return false;
        }
        var tileArea = (tileLcm / 100) * (tileWcm / 100);
        var needed = A * (1 + waste / 100);
        var tiles = Math.ceil(needed / tileArea - 1e-12);
        tilesEl.textContent = String(tiles);
        areaUsedEl.textContent = fmtM2(A);
        tileAreaEl.textContent = fmtM2(tileArea);
        noteEl.textContent = '';
        return true;
      }

      /** 加载默认样例：12 m²、30×30 cm、损耗 10% → 147 片。 */
      function loadSample() {
        mode = 'area';
        setActive([modeAreaBtn, modeLwBtn], modeAreaBtn);
        syncModeUi();
        tArea.value = '12';
        tRoomL.value = '';
        tRoomW.value = '';
        tTileL.value = '30';
        tTileW.value = '30';
        tWaste.value = '10';
        runCalc();
      }

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        runCalc();
      });
      document.getElementById('tSample').addEventListener('click', loadSample);
      document.getElementById('tClear').addEventListener('click', function () {
        form.reset();
        tWaste.value = '10';
        mode = 'area';
        setActive([modeAreaBtn, modeLwBtn], modeAreaBtn);
        syncModeUi();
        result.style.display = 'none';
      });
      syncModeUi();
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('how-to-calculate-tile');
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
