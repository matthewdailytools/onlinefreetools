/**
 * 图片转 PDF 工具页：多张本地图片按列表顺序合成一个 PDF（每张一页），不上传。
 * slug: images-to-pdf（单页；JPG / PNG / WebP / 截图转 PDF 均在本页，不拆近义 URL）。
 * Spec: work-tasks/images-to-pdf/02-tool-info.md
 *
 * 交互要点（2026-10-14 改写）：
 * - 页面尺寸：与每张图片相同（无白边）/ A4 / US Letter；方向：自动（随每张图）/ 纵向 / 横向；页边距：无 / 6 / 12 / 20 mm；
 * - 列表：缩略图 + 尺寸 + 单张旋转 90° + 上移 / 下移 / 删除；按文件名排序、倒序；
 * - 高级设置收起：适配（完整显示 / 铺满裁边）与图片质量（原样嵌入 / 均衡 2480 px / 小文件 1600 px）；
 * - 「原样」时 JPEG / PNG 直接嵌入不重新压缩；带 EXIF 方向、CMYK、WebP / GIF 等才经画布重编码；压缩档若反而更大则保留原数据；
 * - 主按钮 Convert to PDF → Download；金标 .bcw-hud 进度；pdf.js 画布预览；Clear 不重载样例。
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
	renderToolIgSections,
	renderToolReferencesSection,
	buildToolJsonLd,
} from './site/toolContent';
import { pdfWorkUiClientScript, pdfWorkUiCss, pdfWorkUiLabels, pdfWorkUiPreviewHtml } from './site/pdfWorkUi';
import { bcwHudCss } from './site/bcwHudCss';

/**
 * 非默认语言时在路径前加语言前缀。
 * @param lang 当前界面语言
 * @param pathname 站点路径
 * @param defaultLang 默认（无前缀）语言
 * @returns 带（或不带）语言前缀的路径
 */
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * 渲染图片转 PDF 工具页。
 * @param opts.lang 当前界面语言
 * @param opts.defaultLang 默认语言
 * @param opts.enabledLangs 已启用语言列表
 * @returns 完整页面 HTML
 */
export const renderImagesToPdfPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/images-to-pdf';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	/** 取本工具 i18n 文案。 */
	const tx = (key: string) => t(opts.lang, `tool_images_to_pdf_${key}` as never);
	const title = `${tx('title')} | ${t(opts.lang, 'brand')}`;
	const description = tx('description');

	const navItems = buildToolPageNavItems(opts.lang, opts.defaultLang);

	/** hreflang 映射始终带语言段。 */
	const withExplicitLangPrefix = (code: SiteLang, pathname: string) => {
		const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
		return `/${code}${safe}`.replace(/\/{2,}/g, '/');
	};

	/** 语言切换器用的各语言链接。 */
	const langAlternates: Record<string, string> = Object.fromEntries(
		(supportedLangs || []).map((code) => [code, withExplicitLangPrefix(code, toolPath)])
	);

	/** hreflang 备用链接。 */
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
			currentSlug: 'images-to-pdf',
			currentAnchor: '#converter',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	/** pdf.js 画布预览的共用文案（core i18n，十语已有）。 */
	const pdfWorkLabels = pdfWorkUiLabels(opts.lang);

	/**
	 * 生成 <option> 列表。
	 * @param choices [值, 文案键] 数组
	 * @param selected 默认选中值
	 * @returns option HTML
	 */
	const optionsHtml = (choices: Array<[string, string]>, selected: string) =>
		choices
			.map(([value, key]) => `<option value="${value}"${value === selected ? ' selected' : ''}>${escapeHtml(tx(key))}</option>`)
			.join('');

	/** 页内样式：文件列表、HUD、预览。 */
	const extraHeadHtml = `
  <style>
    ${bcwHudCss({ hudId: 'i2pHud', convertBtnId: 'i2pBtnConvert' })}
    #i2pHud.is-error { border-color:#b91c1c; background:#fff1f2; }
    #i2pHud:not(.is-on) .bcw-hud-spin { animation:none; }
    .tools-bar { gap: .5rem; }
    .i2p-list { list-style: none; padding: 0; margin: 0; counter-reset: i2p; }
    .i2p-item { display: flex; align-items: center; gap: .5rem; padding: .35rem 0; border-bottom: 1px solid #eee; }
    .i2p-num { width: 1.6rem; text-align: end; font-size: .8rem; color: #6c757d; flex-shrink: 0; }
    .i2p-thumb { width: 48px; height: 48px; object-fit: contain; border-radius: .25rem; border: 1px solid #dee2e6; background: #f8f9fa; flex-shrink: 0; transition: transform .15s; }
    .i2p-meta { flex: 1; min-width: 0; font-size: .85rem; }
    .i2p-name { word-break: break-all; }
    .i2p-dims { color: #6c757d; font-size: .78rem; }
    .i2p-actions { display: flex; gap: .25rem; flex-shrink: 0; }
    .i2p-list-tools { gap: .4rem; }
    .i2p-list-tools[hidden] { display: none !important; }
    #i2pOrient[disabled] { opacity: .55; }
    ${pdfWorkUiCss()}
  </style>`;

	const contentHtml = `
    <div id="converter" class="tool-page-heading mb-3">
      <h1 class="h4 mb-0">${escapeHtml(tx('title'))}</h1>
    </div>

    <label class="tool-dropzone i2p-drop mb-3" id="i2pDrop" for="i2pFiles">
      <input type="file" id="i2pFiles" accept="image/jpeg,image/png,image/webp,image/gif,image/bmp,image/*" multiple>
      <span class="tool-dropzone-title">${escapeHtml(tx('choose_files'))}</span>
      <span class="tool-dropzone-hint">${escapeHtml(tx('drop_hint'))}</span>
    </label>

    <div id="i2pListTools" class="d-flex align-items-center i2p-list-tools mb-1 flex-wrap" hidden>
      <span id="i2pCount" class="small text-muted me-auto"></span>
      <button type="button" id="i2pSortName" class="btn btn-link btn-sm p-0">${escapeHtml(tx('sort_name'))}</button>
      <button type="button" id="i2pReverse" class="btn btn-link btn-sm p-0">${escapeHtml(tx('reverse'))}</button>
    </div>
    <ol id="i2pList" class="i2p-list mb-3" aria-live="polite"></ol>

    <div class="row g-2 mb-2 align-items-start">
      <div class="col-12 col-md-4">
        <label class="form-label mb-0" for="i2pSize">${escapeHtml(tx('size_label'))}</label>
        <select id="i2pSize" class="form-select form-select-sm">${optionsHtml(
					[
						['a4', 'size_a4'],
						['letter', 'size_letter'],
						['fit', 'size_fit'],
					],
					'a4'
				)}</select>
      </div>
      <div class="col-6 col-md-4">
        <label class="form-label mb-0" for="i2pOrient">${escapeHtml(tx('orient_label'))}</label>
        <select id="i2pOrient" class="form-select form-select-sm">${optionsHtml(
					[
						['auto', 'orient_auto'],
						['portrait', 'orient_portrait'],
						['landscape', 'orient_landscape'],
					],
					'auto'
				)}</select>
      </div>
      <div class="col-6 col-md-4">
        <label class="form-label mb-0" for="i2pMargin">${escapeHtml(tx('margin_label'))}</label>
        <select id="i2pMargin" class="form-select form-select-sm">${optionsHtml(
					[
						['0', 'margin_none'],
						['6', 'margin_small'],
						['12', 'margin_normal'],
						['20', 'margin_wide'],
					],
					'6'
				)}</select>
      </div>
    </div>
    <p class="form-text mt-0 mb-2">${escapeHtml(tx('size_hint'))}</p>

    <div class="d-flex align-items-center tools-bar mb-2 flex-wrap">
      <button type="button" id="i2pBtnConvert" class="btn btn-primary btn-sm">${escapeHtml(tx('convert'))}</button>
      <button type="button" id="i2pBtnDownload" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(tx('download'))}</button>
      <button type="button" id="i2pBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx('sample'))}</button>
      <button type="button" id="i2pBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx('clear'))}</button>
    </div>

    <details class="mb-3" id="i2pAdvanced">
      <summary>${escapeHtml(tx('advanced'))}</summary>
      <div class="row g-2 mt-1">
        <div class="col-12 col-md-5">
          <label class="form-label mb-0" for="i2pFit">${escapeHtml(tx('fit_label'))}</label>
          <select id="i2pFit" class="form-select form-select-sm">${optionsHtml(
						[
							['contain', 'fit_contain'],
							['cover', 'fit_cover'],
						],
						'contain'
					)}</select>
          <p class="form-text mb-0">${escapeHtml(tx('fit_hint'))}</p>
        </div>
        <div class="col-12 col-md-7">
          <label class="form-label mb-0" for="i2pQuality">${escapeHtml(tx('quality_label'))}</label>
          <select id="i2pQuality" class="form-select form-select-sm">${optionsHtml(
						[
							['original', 'quality_original'],
							['balanced', 'quality_balanced'],
							['small', 'quality_small'],
						],
						'original'
					)}</select>
          <p class="form-text mb-0">${escapeHtml(tx('quality_hint'))}</p>
        </div>
      </div>
    </details>

    <div id="i2pHud" class="bcw-hud mb-3" role="status" aria-live="polite" hidden>
      <div class="bcw-hud-top">
        <div class="bcw-hud-spin" aria-hidden="true"></div>
        <div class="bcw-hud-pct" id="i2pPct">0%</div>
        <div class="bcw-hud-copy">
          <div class="bcw-hud-title">${escapeHtml(tx('progress'))}</div>
          <div class="bcw-hud-step" id="i2pStep"></div>
          <div class="bcw-hud-time" id="i2pTime"></div>
        </div>
      </div>
      <div class="progress" style="height:1.35rem">
        <div id="i2pBar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
        <span class="bcw-hud-sheen" aria-hidden="true"></span>
      </div>
      <ol class="bcw-hud-steps">
        <li data-step="read">${escapeHtml(tx('step_read'))}</li>
        <li data-step="embed">${escapeHtml(tx('step_embed'))}</li>
        <li data-step="save">${escapeHtml(tx('step_save'))}</li>
      </ol>
    </div>

    <p id="i2pWarn" class="small text-warning mb-2" style="display:none;" role="status"></p>
    <p id="i2pError" class="small text-danger mb-2" style="display:none;" role="alert"></p>
    <p id="i2pStatus" class="small text-muted mb-2" role="status"></p>
    <p id="i2pStats" class="small text-muted mb-3" style="display:none;"></p>
    ${pdfWorkUiPreviewHtml({ idPrefix: 'i2pPdf', labels: pdfWorkLabels })}

    <p class="tool-lead mb-4">${escapeHtml(description)}</p>`;

	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: 'tool_images_to_pdf',
		mode: 'rules',
		howItemCount: 4,
		whyChooseItemCount: 5,
		usecaseCount: 4,
		ruleItemCount: 5,
	});

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{ label: tx('ref_a_label'), href: 'https://www.iso.org/standard/36631.html' },
			{ label: tx('ref_b_label'), href: 'https://pdf-lib.js.org/docs/api/classes/pdfdocument#embedjpg' },
		],
	});

	/** 前端脚本需要的文案（一次性注入）。 */
	const clientText = {
		empty: tx('empty'),
		decodeFail: tx('err_decode'),
		encodeFail: tx('err_encode'),
		large: tx('warn_large'),
		edge: tx('warn_edge'),
		animation: tx('warn_animation'),
		pdflibMissing: tx('warn_pdflib'),
		skipped: tx('warn_skipped'),
		converting: tx('status_converting'),
		done: tx('status_done'),
		moveUp: tx('move_up'),
		moveDown: tx('move_down'),
		rotate: tx('rotate'),
		remove: tx('remove'),
		countTpl: tx('count_tpl'),
		statsTpl: tx('stats_tpl'),
		readStep: tx('read_step'),
		embedStep: tx('embed_step'),
		saveStep: tx('save_step'),
		elapsed: tx('elapsed'),
	};

	/**
	 * 客户端脚本：解码 → 逐张嵌入（原样或重编码）→ 按页面规则排版 → 保存；金标 HUD；pdf.js 预览；Clear 不重载样例。
	 */
	const extraBodyHtml = `
  ${pdfWorkUiClientScript()}
  <script src="/vendor/pdf-lib/pdf-lib.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script>
    (function () {
      /** 单文件超过此字节数时软警告。 */
      var SOFT_BYTES = 25 * 1024 * 1024;
      /** 边长超过此像素时软警告。 */
      var SOFT_EDGE = 8192;
      /** 纸张尺寸（PDF 点，1 pt = 1/72 in，纵向）。 */
      var PAPER = { a4: [595.28, 841.89], letter: [612, 792] };
      /** 「与图片相同」时每像素对应的点数（96 dpi）。 */
      var PT_PER_PX = 0.75;
      /** PDF 单页边长上限（点）。 */
      var MAX_PAGE_PT = 14400;
      /** 毫米 → 点。 */
      var PT_PER_MM = 72 / 25.4;
      /** 质量档：最长边像素与 JPEG 质量（original = 不缩放，0.92 仅用于必须重编码时）。 */
      var QUALITY = { original: { edge: 0, q: 0.92 }, balanced: { edge: 2480, q: 0.85 }, small: { edge: 1600, q: 0.7 } };

      /** 页面控件。 */
      var drop = document.getElementById('i2pDrop');
      var fileInput = document.getElementById('i2pFiles');
      var listEl = document.getElementById('i2pList');
      var listTools = document.getElementById('i2pListTools');
      var countEl = document.getElementById('i2pCount');
      var btnSortName = document.getElementById('i2pSortName');
      var btnReverse = document.getElementById('i2pReverse');
      var sizeEl = document.getElementById('i2pSize');
      var orientEl = document.getElementById('i2pOrient');
      var marginEl = document.getElementById('i2pMargin');
      var fitEl = document.getElementById('i2pFit');
      var qualityEl = document.getElementById('i2pQuality');
      var btnConvert = document.getElementById('i2pBtnConvert');
      var btnDownload = document.getElementById('i2pBtnDownload');
      var btnSample = document.getElementById('i2pBtnSample');
      var btnClear = document.getElementById('i2pBtnClear');
      var warnEl = document.getElementById('i2pWarn');
      var errEl = document.getElementById('i2pError');
      var statusEl = document.getElementById('i2pStatus');
      var statsEl = document.getElementById('i2pStats');
      var hud = document.getElementById('i2pHud');
      var pctEl = document.getElementById('i2pPct');
      var stepEl = document.getElementById('i2pStep');
      var timeEl = document.getElementById('i2pTime');
      var barEl = document.getElementById('i2pBar');
      /** pdf.js 结果预览（id 前缀须与 HTML 一致）。 */
      var work = window.OftPdfWork.bind('i2pPdf');

      /** 本地化文案字典。 */
      var msg = ${JSON.stringify(clientText)};

      /**
       * @typedef {{ id: string, file: File, bitmap: ImageBitmap|HTMLImageElement, w: number, h: number, thumbUrl: string, rot: number }} PdfItem
       * w / h 为浏览器按 EXIF 方向摆正后的像素尺寸；rot 为用户追加的顺时针旋转（0 / 90 / 180 / 270）。
       */

      /** @type {PdfItem[]} 按页序排列的图片。 */
      var items = [];
      /** @type {Uint8Array|null} 上次生成的 PDF。 */
      var resultBytes = null;
      /** 列表行自增 id。 */
      var nextId = 1;
      /** 忙碌锁。 */
      var busy = false;
      /** HUD 计时起点。 */
      var startedAt = 0;
      /** HUD 计时器句柄。 */
      var tickTimer = 0;
      /** 本轮添加时无法解码而跳过的文件名。 */
      var skippedNames = [];

      /**
       * 用 split/join 替换 {name} 占位符。
       * @param {string} tpl 模板
       * @param {Object<string, string>} map 占位符 → 值
       * @returns {string} 替换结果
       */
      function fill(tpl, map) {
        var s = String(tpl);
        for (var k in map) {
          if (Object.prototype.hasOwnProperty.call(map, k)) s = s.split('{' + k + '}').join(String(map[k]));
        }
        return s;
      }

      /** 显示或隐藏警告行。 */
      function setWarn(text) {
        if (!text) { warnEl.style.display = 'none'; warnEl.textContent = ''; return; }
        warnEl.textContent = text;
        warnEl.style.display = '';
      }

      /** 显示或隐藏错误行。 */
      function setError(text) {
        if (!text) { errEl.style.display = 'none'; errEl.textContent = ''; return; }
        errEl.textContent = text;
        errEl.style.display = '';
      }

      /** 更新状态行。 */
      function setStatus(text) { statusEl.textContent = text || ''; }

      /**
       * 格式化字节数。
       * @param {number} n 字节
       * @returns {string} 如 1.25 MB
       */
      function formatBytes(n) {
        if (n < 1024) return n + ' B';
        if (n < 1024 * 1024) return (n / 1024).toFixed(1) + ' KB';
        return (n / (1024 * 1024)).toFixed(2) + ' MB';
      }

      /** pdf-lib 是否可用。 */
      function hasPdfLib() {
        return typeof PDFLib !== 'undefined' && PDFLib && typeof PDFLib.PDFDocument === 'function';
      }

      /** 刷新 HUD 已用时。 */
      function tickTime() {
        var sec = Math.max(0, Math.floor((Date.now() - startedAt) / 1000));
        timeEl.textContent = fill(msg.elapsed, { s: String(sec) });
      }

      /**
       * 更新进度 HUD。
       * @param {number} pct 0–100
       * @param {string} stepKey read|embed|save
       * @param {string} stepText 步骤说明
       */
      function progress(pct, stepKey, stepText) {
        hud.hidden = false;
        hud.classList.add('is-on');
        hud.classList.remove('is-error', 'is-done');
        var p = Math.max(0, Math.min(100, Math.round(pct)));
        pctEl.textContent = p + '%';
        barEl.style.width = p + '%';
        barEl.setAttribute('aria-valuenow', String(p));
        stepEl.textContent = stepText || '';
        var order = ['read', 'embed', 'save'];
        hud.querySelectorAll('.bcw-hud-steps li').forEach(function (li) {
          var k = li.getAttribute('data-step');
          li.classList.toggle('is-done', k !== stepKey && order.indexOf(k) < order.indexOf(stepKey));
          li.classList.toggle('is-active', k === stepKey);
        });
      }

      /**
       * 结束 HUD。
       * @param {boolean} ok 是否成功
       */
      function endHud(ok) {
        if (tickTimer) { clearInterval(tickTimer); tickTimer = 0; }
        hud.classList.remove('is-on');
        if (ok) {
          hud.classList.add('is-done');
          pctEl.textContent = '100%';
          barEl.style.width = '100%';
        } else {
          hud.classList.add('is-error');
        }
      }

      /**
       * 转换期间禁用控件。
       * @param {boolean} on 是否锁定
       */
      function lock(on) {
        busy = on;
        [btnConvert, btnSample, btnClear, fileInput, sizeEl, marginEl, fitEl, qualityEl, btnSortName, btnReverse].forEach(function (el) { el.disabled = on; });
        listEl.querySelectorAll('button').forEach(function (b) { b.disabled = on; });
        btnDownload.disabled = on || !resultBytes;
        btnConvert.setAttribute('aria-busy', String(on));
        syncUi();
        if (!on) renderList();
      }

      /** 「与图片相同」时方向由图片决定、页面无留白，禁用方向与边距下拉。 */
      function syncUi() {
        orientEl.disabled = busy || sizeEl.value === 'fit';
        marginEl.disabled = busy || sizeEl.value === 'fit';
      }

      /**
       * 将 Blob 解码为 ImageBitmap 或 HTMLImageElement（浏览器会按 EXIF 方向摆正）。
       * @param {Blob} blob 图片数据
       * @returns {Promise<{ bitmap: ImageBitmap|HTMLImageElement, w: number, h: number }>}
       */
      function decodeImage(blob) {
        if (typeof createImageBitmap === 'function') {
          return createImageBitmap(blob).then(function (bmp) {
            return { bitmap: bmp, w: bmp.width, h: bmp.height };
          });
        }
        return new Promise(function (resolve, reject) {
          var url = URL.createObjectURL(blob);
          var img = new Image();
          img.onload = function () {
            URL.revokeObjectURL(url);
            resolve({ bitmap: img, w: img.naturalWidth || img.width, h: img.naturalHeight || img.height });
          };
          img.onerror = function () {
            URL.revokeObjectURL(url);
            reject(new Error('decode'));
          };
          img.src = url;
        });
      }

      /** 释放单项的 object URL 与位图。 */
      function disposeItem(item) {
        if (item.thumbUrl) URL.revokeObjectURL(item.thumbUrl);
        if (item.bitmap && typeof item.bitmap.close === 'function') item.bitmap.close();
      }

      /** 清空 PDF 结果与预览（设置或顺序改变后需重新转换）。 */
      function clearResult() {
        resultBytes = null;
        btnDownload.disabled = true;
        statsEl.style.display = 'none';
        statsEl.textContent = '';
        setStatus('');
        work.clearPreview();
      }

      /**
       * 读取 JPEG 的 EXIF 方向与颜色分量数（用于判断能否原样嵌入）。
       * @param {Uint8Array} u8 文件字节
       * @returns {{ orientation: number, components: number }} orientation 1 = 正常；components 4 = CMYK
       */
      function jpegInfo(u8) {
        var info = { orientation: 1, components: 3 };
        var off = 2;
        while (off + 9 < u8.length) {
          if (u8[off] !== 0xff) break;
          var marker = u8[off + 1];
          var len = (u8[off + 2] << 8) | u8[off + 3];
          if (marker === 0xe1 && u8[off + 4] === 0x45 && u8[off + 5] === 0x78 && u8[off + 6] === 0x69 && u8[off + 7] === 0x66) {
            var tiff = off + 10;
            var le = u8[tiff] === 0x49;
            var r16 = function (p) { return le ? u8[p] | (u8[p + 1] << 8) : (u8[p] << 8) | u8[p + 1]; };
            var r32 = function (p) { return le ? (u8[p] | (u8[p + 1] << 8) | (u8[p + 2] << 16) | (u8[p + 3] << 24)) >>> 0 : ((u8[p] << 24) | (u8[p + 1] << 16) | (u8[p + 2] << 8) | u8[p + 3]) >>> 0; };
            var ifd = tiff + r32(tiff + 4);
            if (ifd + 2 < u8.length) {
              var n = r16(ifd);
              for (var i = 0; i < n; i++) {
                var e = ifd + 2 + i * 12;
                if (e + 10 > u8.length) break;
                if (r16(e) === 0x0112) { info.orientation = r16(e + 8); break; }
              }
            }
          }
          if (marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc) {
            info.components = u8[off + 9];
            break;
          }
          if (marker === 0xda) break;
          off += 2 + len;
        }
        return info;
      }

      /**
       * 判断文件字节的真实格式（看文件头，不信扩展名）。
       * @param {Uint8Array} u8 文件字节
       * @returns {string} jpeg|png|other
       */
      function sniff(u8) {
        if (u8.length > 3 && u8[0] === 0xff && u8[1] === 0xd8 && u8[2] === 0xff) return 'jpeg';
        if (u8.length > 8 && u8[0] === 0x89 && u8[1] === 0x50 && u8[2] === 0x4e && u8[3] === 0x47) return 'png';
        return 'other';
      }

      /**
       * 经画布重编码一张图（白底，按最长边缩放）。
       * @param {PdfItem} item 图片项
       * @param {number} maxEdge 最长边像素（0 = 不缩放）
       * @param {string} mime image/jpeg|image/png
       * @param {number} q JPEG 质量
       * @returns {Promise<Uint8Array>} 编码后字节
       */
      function reencode(item, maxEdge, mime, q) {
        var k = maxEdge > 0 ? Math.min(1, maxEdge / Math.max(item.w, item.h)) : 1;
        var cw = Math.max(1, Math.round(item.w * k));
        var ch = Math.max(1, Math.round(item.h * k));
        var c = document.createElement('canvas');
        c.width = cw;
        c.height = ch;
        var ctx = c.getContext('2d');
        if (!ctx) return Promise.reject(new Error('encode'));
        if (mime === 'image/jpeg') { ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, cw, ch); }
        ctx.imageSmoothingEnabled = true;
        if ('imageSmoothingQuality' in ctx) ctx.imageSmoothingQuality = 'high';
        ctx.drawImage(item.bitmap, 0, 0, cw, ch);
        return new Promise(function (resolve, reject) {
          c.toBlob(function (blob) {
            if (!blob) { reject(new Error('encode')); return; }
            blob.arrayBuffer().then(function (buf) { resolve(new Uint8Array(buf)); }, reject);
          }, mime, mime === 'image/png' ? undefined : q);
        });
      }

      /**
       * 把一张图嵌入 PDF：能原样就原样（JPEG 正向 RGB / 灰度、PNG），否则重编码；压缩档若更大则回退原数据。
       * @param {any} doc PDFDocument
       * @param {PdfItem} item 图片项
       * @param {string} quality original|balanced|small
       * @returns {Promise<{ image: any, raw: boolean }>} 嵌入对象与是否原样
       */
      function embedItem(doc, item, quality) {
        var preset = QUALITY[quality] || QUALITY.original;
        return item.file.arrayBuffer().then(function (buf) {
          var u8 = new Uint8Array(buf);
          var kind = sniff(u8);
          var rawOk = false;
          if (kind === 'jpeg') {
            var info = jpegInfo(u8);
            rawOk = info.orientation === 1 && info.components !== 4;
          } else if (kind === 'png') {
            rawOk = true;
          }
          /** 尝试原样嵌入；失败返回 null。 */
          var embedRaw = function () {
            var p = kind === 'jpeg' ? doc.embedJpg(u8) : doc.embedPng(u8);
            return p.then(function (img) { return { image: img, raw: true }; }, function () { return null; });
          };
          /** 重编码后嵌入（PNG 源在原样档保持 PNG 以免透明 / 线条图失真）。 */
          var embedRe = function () {
            var keepPng = kind === 'png' && quality === 'original';
            var mime = keepPng ? 'image/png' : 'image/jpeg';
            return reencode(item, preset.edge, mime, preset.q).then(function (bytes) {
              if (rawOk && quality !== 'original' && bytes.length >= u8.length && Math.max(item.w, item.h) <= preset.edge) return null;
              var p = mime === 'image/png' ? doc.embedPng(bytes) : doc.embedJpg(bytes);
              return p.then(function (img) { return { image: img, raw: false }; });
            });
          };
          if (rawOk && quality === 'original') {
            return embedRaw().then(function (r) { return r || embedRe(); });
          }
          return embedRe().then(function (r) { return r || embedRaw(); }).then(function (r) {
            if (!r) throw new Error('encode');
            return r;
          });
        });
      }

      /**
       * 计算一页的页面尺寸与图片放置（PDF 点，原点左下）。
       * @param {PdfItem} item 图片项
       * @returns {{ pw: number, ph: number, bx: number, by: number, bw: number, bh: number, dw: number, dh: number }}
       * pw/ph 页面；bx/by/bw/bh 内容框（页边距内）；dw/dh 旋转后图片在页上的显示尺寸
       */
      function layout(item) {
        var swap = item.rot === 90 || item.rot === 270;
        var iw = swap ? item.h : item.w;
        var ih = swap ? item.w : item.h;
        var m = sizeEl.value === 'fit' ? 0 : Number(marginEl.value) * PT_PER_MM;
        var pw, ph;
        if (sizeEl.value === 'fit') {
          var k = PT_PER_PX;
          var maxSide = Math.max(iw, ih) * k + m * 2;
          if (maxSide > MAX_PAGE_PT) k = (MAX_PAGE_PT - m * 2) / Math.max(iw, ih);
          pw = iw * k + m * 2;
          ph = ih * k + m * 2;
        } else {
          var paper = PAPER[sizeEl.value] || PAPER.a4;
          var landscape = orientEl.value === 'landscape' || (orientEl.value === 'auto' && iw > ih);
          pw = landscape ? paper[1] : paper[0];
          ph = landscape ? paper[0] : paper[1];
        }
        var bw = Math.max(1, pw - m * 2);
        var bh = Math.max(1, ph - m * 2);
        var s = fitEl.value === 'cover' && sizeEl.value !== 'fit' ? Math.max(bw / iw, bh / ih) : Math.min(bw / iw, bh / ih);
        return { pw: pw, ph: ph, bx: m, by: m, bw: bw, bh: bh, dw: iw * s, dh: ih * s };
      }

      /**
       * 在页面上按旋转角度绘制图片（drawImage 绕左下角逆时针旋转，故顺时针 r 用 -r 并平移锚点）。
       * @param {any} page PDFPage
       * @param {any} image 嵌入的图片
       * @param {number} rot 顺时针角度
       * @param {number} x 显示框左
       * @param {number} y 显示框下
       * @param {number} dw 显示宽
       * @param {number} dh 显示高
       */
      function drawRotated(page, image, rot, x, y, dw, dh) {
        var deg = PDFLib.degrees;
        if (rot === 90) page.drawImage(image, { x: x, y: y + dh, width: dh, height: dw, rotate: deg(-90) });
        else if (rot === 180) page.drawImage(image, { x: x + dw, y: y + dh, width: dw, height: dh, rotate: deg(180) });
        else if (rot === 270) page.drawImage(image, { x: x + dw, y: y, width: dh, height: dw, rotate: deg(90) });
        else page.drawImage(image, { x: x, y: y, width: dw, height: dh });
      }

      /**
       * 生成 PDF（按列表顺序每张一页）。
       * @returns {Promise<{ bytes: Uint8Array, raw: number, re: number, sizes: string }>}
       */
      function buildPdf() {
        var L = PDFLib;
        var quality = qualityEl.value;
        var raw = 0, re = 0;
        var sizeSet = {};
        return L.PDFDocument.create().then(function (doc) {
          doc.setTitle(items.length === 1 ? baseName(items[0].file) : 'Images');
          doc.setProducer('onlinefreetools.org images-to-pdf');
          var chain = Promise.resolve();
          items.forEach(function (item, idx) {
            chain = chain.then(function () {
              progress(10 + (80 * idx) / items.length, 'embed', fill(msg.embedStep, { i: String(idx + 1), n: String(items.length) }));
              return embedItem(doc, item, quality).then(function (r) {
                if (r.raw) raw++; else re++;
                var g = layout(item);
                var page = doc.addPage([g.pw, g.ph]);
                sizeSet[Math.round(g.pw / PT_PER_MM) + ' × ' + Math.round(g.ph / PT_PER_MM) + ' mm'] = 1;
                var x = g.bx + (g.bw - g.dw) / 2;
                var y = g.by + (g.bh - g.dh) / 2;
                var clipNeeded = g.dw > g.bw + 0.01 || g.dh > g.bh + 0.01;
                if (clipNeeded) {
                  page.pushOperators(L.pushGraphicsState(), L.rectangle(g.bx, g.by, g.bw, g.bh), L.clip(), L.endPath());
                }
                drawRotated(page, r.image, item.rot, x, y, g.dw, g.dh);
                if (clipNeeded) page.pushOperators(L.popGraphicsState());
                return new Promise(function (res) { setTimeout(res, 0); });
              });
            });
          });
          return chain.then(function () {
            progress(92, 'save', msg.saveStep);
            return doc.save();
          }).then(function (bytes) {
            var sizes = Object.keys(sizeSet);
            return { bytes: bytes, raw: raw, re: re, sizes: sizes.length > 3 ? sizes.slice(0, 3).join(', ') + ', …' : sizes.join(', ') };
          });
        });
      }

      /**
       * 取文件名（去扩展名）。
       * @param {File} file 文件
       * @returns {string} 基础名
       */
      function baseName(file) {
        return file && file.name ? file.name.replace(/[.][^.]+$/, '') : 'image';
      }

      /** 重绘文件列表（序号、缩略图、尺寸、旋转 / 上移 / 下移 / 删除）。 */
      function renderList() {
        listEl.innerHTML = '';
        items.forEach(function (item, idx) {
          var li = document.createElement('li');
          li.className = 'i2p-item';
          var num = document.createElement('span');
          num.className = 'i2p-num';
          num.textContent = String(idx + 1);
          var img = document.createElement('img');
          img.className = 'i2p-thumb';
          img.alt = '';
          img.src = item.thumbUrl;
          img.style.transform = item.rot ? 'rotate(' + item.rot + 'deg)' : '';
          var meta = document.createElement('span');
          meta.className = 'i2p-meta';
          var name = document.createElement('span');
          name.className = 'i2p-name d-block';
          name.textContent = item.file.name || ('#' + (idx + 1));
          var dims = document.createElement('span');
          dims.className = 'i2p-dims d-block';
          var swap = item.rot === 90 || item.rot === 270;
          dims.textContent = (swap ? item.h : item.w) + ' × ' + (swap ? item.w : item.h) + ' px · ' + formatBytes(item.file.size) + (item.rot ? ' · ' + item.rot + '°' : '');
          meta.appendChild(name);
          meta.appendChild(dims);
          var actions = document.createElement('span');
          actions.className = 'i2p-actions';
          /** 生成一个行内操作按钮。 */
          var mk = function (cls, label, text, disabled) {
            var b = document.createElement('button');
            b.type = 'button';
            b.className = 'btn btn-sm ' + cls;
            b.setAttribute('data-id', item.id);
            b.title = label;
            b.setAttribute('aria-label', label);
            b.textContent = text;
            b.disabled = !!disabled || busy;
            return b;
          };
          actions.appendChild(mk('btn-outline-secondary i2p-rot', msg.rotate, '\\u21bb', false));
          actions.appendChild(mk('btn-outline-secondary i2p-up', msg.moveUp, '\\u2191', idx === 0));
          actions.appendChild(mk('btn-outline-secondary i2p-down', msg.moveDown, '\\u2193', idx === items.length - 1));
          actions.appendChild(mk('btn-outline-danger i2p-remove', msg.remove, '\\u00d7', false));
          li.appendChild(num);
          li.appendChild(img);
          li.appendChild(meta);
          li.appendChild(actions);
          listEl.appendChild(li);
        });
        listTools.hidden = items.length === 0;
        btnSortName.disabled = busy || items.length < 2;
        btnReverse.disabled = busy || items.length < 2;
        countEl.textContent = items.length ? fill(msg.countTpl, { n: String(items.length) }) : '';
      }

      /** 刷新文件大小、边长、动图、跳过文件、pdf-lib 缺失警告。 */
      function refreshWarnings() {
        var warns = [];
        var hasGif = false, hasLarge = false, hasEdge = false;
        items.forEach(function (it) {
          if (it.file.size > SOFT_BYTES) hasLarge = true;
          if (it.w > SOFT_EDGE || it.h > SOFT_EDGE) hasEdge = true;
          if ((it.file.type || '').indexOf('gif') >= 0 || /[.]gif$/i.test(it.file.name || '')) hasGif = true;
        });
        if (skippedNames.length) warns.push(fill(msg.skipped, { names: skippedNames.join(', ') }));
        if (hasLarge) warns.push(msg.large);
        if (hasEdge) warns.push(msg.edge);
        if (hasGif) warns.push(msg.animation);
        if (!hasPdfLib()) warns.push(msg.pdflibMissing);
        setWarn(warns.join(' '));
      }

      /**
       * 追加文件（逐个解码；解码失败的跳过并在警告里列出，不影响其它文件）。
       * @param {FileList|File[]} files 文件
       * @returns {Promise<void>}
       */
      function addFiles(files) {
        setError('');
        clearResult();
        skippedNames = [];
        var arr = Array.prototype.slice.call(files || []);
        if (!arr.length) return Promise.resolve();
        var chain = Promise.resolve();
        arr.forEach(function (file) {
          chain = chain.then(function () {
            return decodeImage(file).then(function (dec) {
              items.push({ id: String(nextId++), file: file, bitmap: dec.bitmap, w: dec.w, h: dec.h, thumbUrl: URL.createObjectURL(file), rot: 0 });
            }, function () {
              skippedNames.push(file.name || '?');
            });
          });
        });
        return chain.then(function () {
          renderList();
          refreshWarnings();
          if (!items.length && skippedNames.length) setError(msg.decodeFail);
        });
      }

      /** 生成 PDF、预览并启用下载。 */
      function convert() {
        setError('');
        clearResult();
        if (!items.length) { setError(msg.empty); return Promise.resolve(); }
        if (!hasPdfLib()) { setError(msg.pdflibMissing); refreshWarnings(); return Promise.resolve(); }
        lock(true);
        setStatus(msg.converting);
        startedAt = Date.now();
        if (tickTimer) clearInterval(tickTimer);
        tickTimer = setInterval(tickTime, 250);
        tickTime();
        progress(4, 'read', msg.readStep);
        return window.OftPdfWork.yieldUi()
          .then(function () { return buildPdf(); })
          .then(function (out) {
            resultBytes = out.bytes;
            statsEl.textContent = fill(msg.statsTpl, {
              n: String(items.length),
              size: out.sizes,
              bytes: formatBytes(out.bytes.length),
              raw: String(out.raw),
              re: String(out.re)
            });
            statsEl.style.display = '';
            setStatus(msg.done);
            progress(100, 'save', msg.saveStep);
            endHud(true);
            lock(false);
            return work.showPreview(out.bytes);
          })
          .catch(function () {
            resultBytes = null;
            setError(msg.encodeFail);
            setStatus('');
            endHud(false);
            lock(false);
          });
      }

      /** 下载上次生成的 PDF（单张用原文件名，多张用 images.pdf）。 */
      function downloadResult() {
        if (!resultBytes) return;
        var blob = new Blob([resultBytes], { type: 'application/pdf' });
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = (items.length === 1 ? baseName(items[0].file) : 'images') + '.pdf';
        document.body.appendChild(a);
        a.click();
        a.remove();
        setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
      }

      /**
       * 画一张样例图并转成 File。
       * @param {string} name 文件名
       * @param {number} w 宽
       * @param {number} h 高
       * @param {string} mime image/jpeg|image/png
       * @param {function(CanvasRenderingContext2D): void} paint 绘制函数
       * @returns {Promise<File|null>}
       */
      function makeSample(name, w, h, mime, paint) {
        return new Promise(function (resolve) {
          var c = document.createElement('canvas');
          c.width = w;
          c.height = h;
          var ctx = c.getContext('2d');
          if (!ctx) { resolve(null); return; }
          paint(ctx);
          c.toBlob(function (blob) { resolve(blob ? new File([blob], name, { type: mime }) : null); }, mime, 0.9);
        });
      }

      /**
       * 样例：横向照片 JPEG（1200 × 800）+ 纵向文档 JPEG（800 × 1131，A4 比例）+ 方形透明图表 PNG（800 × 800），
       * 用默认 A4 / 自动方向 / 6 mm 边距转换：第 1 页横向、第 2–3 页纵向，三张都原样嵌入。
       * @returns {Promise<void>}
       */
      function loadSample() {
        clearAll(false);
        var photo = makeSample('1-landscape-photo.jpg', 1200, 800, 'image/jpeg', function (ctx) {
          var sky = ctx.createLinearGradient(0, 0, 0, 800);
          sky.addColorStop(0, '#4f9fd8'); sky.addColorStop(0.7, '#cfe8f7'); sky.addColorStop(1, '#88b04b');
          ctx.fillStyle = sky; ctx.fillRect(0, 0, 1200, 800);
          ctx.fillStyle = '#5b7f3a';
          ctx.beginPath(); ctx.moveTo(0, 620); ctx.lineTo(300, 480); ctx.lineTo(620, 600); ctx.lineTo(900, 450); ctx.lineTo(1200, 580); ctx.lineTo(1200, 800); ctx.lineTo(0, 800); ctx.closePath(); ctx.fill();
          ctx.fillStyle = '#fff6c2'; ctx.beginPath(); ctx.arc(960, 180, 70, 0, Math.PI * 2); ctx.fill();
        });
        var doc = makeSample('2-scanned-page.jpg', 800, 1131, 'image/jpeg', function (ctx) {
          ctx.fillStyle = '#fbfaf7'; ctx.fillRect(0, 0, 800, 1131);
          ctx.fillStyle = '#1f2937'; ctx.font = 'bold 40px sans-serif'; ctx.fillText('Invoice #1042', 70, 120);
          ctx.fillStyle = '#9ca3af';
          for (var i = 0; i < 18; i++) ctx.fillRect(70, 190 + i * 46, i % 4 === 3 ? 380 : 660, 14);
        });
        var chart = makeSample('3-chart.png', 800, 800, 'image/png', function (ctx) {
          var vals = [0.35, 0.6, 0.45, 0.85, 0.7];
          var cols = ['#2563eb', '#16a34a', '#f59e0b', '#dc2626', '#7c3aed'];
          for (var i = 0; i < vals.length; i++) { ctx.fillStyle = cols[i]; ctx.fillRect(80 + i * 135, 720 - vals[i] * 620, 100, vals[i] * 620); }
          ctx.fillStyle = '#111827'; ctx.fillRect(60, 720, 690, 4);
        });
        return Promise.all([photo, doc, chart])
          .then(function (files) { return addFiles(files.filter(Boolean)); })
          .then(function () { if (items.length) return convert(); });
      }

      /**
       * 真正清空，不重新加载样例；设置恢复默认。
       * @param {boolean} resetInput 是否清空文件输入
       */
      function clearAll(resetInput) {
        if (tickTimer) { clearInterval(tickTimer); tickTimer = 0; }
        items.forEach(disposeItem);
        items = [];
        skippedNames = [];
        if (resetInput !== false) fileInput.value = '';
        clearResult();
        renderList();
        setError('');
        setWarn('');
        hud.hidden = true;
        hud.classList.remove('is-on', 'is-done', 'is-error');
        sizeEl.value = 'a4';
        orientEl.value = 'auto';
        marginEl.value = '6';
        fitEl.value = 'contain';
        qualityEl.value = 'original';
        syncUi();
        refreshWarnings();
      }

      /** 列表行按钮：旋转 / 上移 / 下移 / 删除。 */
      listEl.addEventListener('click', function (e) {
        var el = e.target && e.target.closest ? e.target.closest('button[data-id]') : null;
        if (!el || busy) return;
        var id = el.getAttribute('data-id');
        var idx = -1;
        for (var i = 0; i < items.length; i++) if (items[i].id === id) { idx = i; break; }
        if (idx < 0) return;
        if (el.classList.contains('i2p-rot')) {
          items[idx].rot = (items[idx].rot + 90) % 360;
        } else if (el.classList.contains('i2p-up') && idx > 0) {
          var a = items[idx - 1]; items[idx - 1] = items[idx]; items[idx] = a;
        } else if (el.classList.contains('i2p-down') && idx < items.length - 1) {
          var b = items[idx + 1]; items[idx + 1] = items[idx]; items[idx] = b;
        } else if (el.classList.contains('i2p-remove')) {
          disposeItem(items[idx]);
          items.splice(idx, 1);
          refreshWarnings();
        }
        renderList();
        clearResult();
      });

      /** 按文件名自然排序（IMG_2 在 IMG_10 前）。 */
      btnSortName.addEventListener('click', function () {
        items.sort(function (x, y) {
          return String(x.file.name || '').localeCompare(String(y.file.name || ''), undefined, { numeric: true, sensitivity: 'base' });
        });
        renderList();
        clearResult();
      });
      btnReverse.addEventListener('click', function () {
        items.reverse();
        renderList();
        clearResult();
      });

      [sizeEl, orientEl, marginEl, fitEl, qualityEl].forEach(function (el) {
        el.addEventListener('change', function () { syncUi(); clearResult(); });
      });

      drop.addEventListener('dragover', function (e) {
        e.preventDefault();
        drop.classList.add('dragover');
      });
      drop.addEventListener('dragleave', function () { drop.classList.remove('dragover'); });
      drop.addEventListener('drop', function (e) {
        e.preventDefault();
        drop.classList.remove('dragover');
        var fs = e.dataTransfer && e.dataTransfer.files;
        if (fs && fs.length && !busy) addFiles(fs);
      });
      fileInput.addEventListener('change', function () {
        if (fileInput.files && fileInput.files.length) addFiles(fileInput.files);
        fileInput.value = '';
      });

      btnConvert.addEventListener('click', function () { convert(); });
      btnDownload.addEventListener('click', downloadResult);
      btnSample.addEventListener('click', function () { loadSample(); });
      btnClear.addEventListener('click', function () { clearAll(true); });

      syncUi();
      /** 进页自动跑样例，让下载按钮对应真实结果。 */
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('images-to-pdf');
	const toolSeoHtml = toolMeta
		? renderToolExtraSections({ lang: opts.lang, defaultLang: opts.defaultLang, tool: toolMeta })
		: '';
	const toolJsonLd = toolMeta
		? buildToolJsonLd({
				lang: opts.lang,
				defaultLang: opts.defaultLang,
				tool: toolMeta,
				name: t(opts.lang, toolMeta.i18nKey as never),
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
		contentHtml: `${contentHtml}${igHtml}${toolSeoHtml}${referencesHtml}`,
		footerHtml,
		extraHeadHtml: `${extraHeadHtml}${toolJsonLd}`,
		extraBodyHtml,
		includeSidebarToggleScript: true,
		sidebarAutoCloseSelector: '#toolNav a',
	});
};
