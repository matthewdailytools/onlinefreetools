/**
 * 图片转 Word 工具页：把多张本地图片按列表顺序插入一个 Word（.docx）文档并下载，不上传。
 * slug: images-to-word（单页；照片 / 截图 / 扫描件插入 Word 均在本页，不拆近义 URL；OCR 识别文字走 batch-convert-jpg-to-editable-word-with-ocr）。
 * Spec: work-tasks/images-to-word/02-tool-info.md
 *
 * 交互要点（2026-10-14 改写）：
 * - 版式：每页 1 张 / 每页 2 张（上下）/ 每页 4 张（2 × 2 表格）/ 连续排列（不分页）；纸张 A4 / US Letter；纵向 / 横向；
 * - 列表：缩略图 + 尺寸 + 单张旋转 90° + 上移 / 下移 / 删除；按文件名自然排序、倒序；
 * - 高级设置收起：页边距（标准 2.54 cm / 窄 1.27 cm）、图注（无 / 文件名 / 「图 N」）、图片大小（铺满可用空间 / 实际尺寸 96 ppi 仅缩小）、画质（原图 / 小文件 1600 px）；
 * - JPEG（无方向标记、非 CMYK）与 PNG 原样放入 DOCX；旋转、方向标记、CMYK、WebP / GIF / BMP 才经画布重编码；小文件档若反而更大则保留原数据；
 * - 页面版式预览（与写入 DOCX 的尺寸同一套计算）；主按钮 Convert to Word → Download .docx；金标 .bcw-hud 进度；Clear 不重载样例。
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
 * 渲染图片转 Word 工具页。
 * @param opts.lang 当前界面语言
 * @param opts.defaultLang 默认语言
 * @param opts.enabledLangs 已启用语言列表
 * @returns 完整页面 HTML
 */
export const renderImagesToWordPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/images-to-word';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	/** 取本工具 i18n 文案。 */
	const tx = (key: string) => t(opts.lang, `tool_images_to_word_${key}` as never);
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
			currentSlug: 'images-to-word',
			currentAnchor: '#converter',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	/** 需要识别图中文字时指向的 OCR 工具链接（当前语言路径）。 */
	const ocrHref = withLangPrefix(opts.lang, '/tools/batch-convert-jpg-to-editable-word-with-ocr', opts.defaultLang);

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

	/** 页内样式：文件列表、HUD、页面版式预览。 */
	const extraHeadHtml = `
  <style>
    ${bcwHudCss({ hudId: 'i2wHud', convertBtnId: 'i2wBtnConvert' })}
    #i2wHud.is-error { border-color:#b91c1c; background:#fff1f2; }
    #i2wHud:not(.is-on) .bcw-hud-spin { animation:none; }
    .tools-bar { gap: .5rem; }
    .i2w-list { list-style: none; padding: 0; margin: 0; }
    .i2w-item { display: flex; align-items: center; gap: .5rem; padding: .35rem 0; border-bottom: 1px solid #eee; }
    .i2w-num { width: 1.6rem; text-align: end; font-size: .8rem; color: #6c757d; flex-shrink: 0; }
    .i2w-thumb { width: 48px; height: 48px; object-fit: contain; border-radius: .25rem; border: 1px solid #dee2e6; background: #f8f9fa; flex-shrink: 0; transition: transform .15s; }
    .i2w-meta { flex: 1; min-width: 0; font-size: .85rem; }
    .i2w-name { word-break: break-all; }
    .i2w-dims { color: #6c757d; font-size: .78rem; }
    .i2w-actions { display: flex; gap: .25rem; flex-shrink: 0; }
    .i2w-list-tools { gap: .4rem; }
    .i2w-list-tools[hidden] { display: none !important; }
    .i2w-pages { display: flex; flex-wrap: wrap; gap: .75rem; align-items: flex-start; }
    .i2w-page { position: relative; background: #fff; border: 1px solid #cbd5e1; box-shadow: 0 1px 3px rgba(15,23,42,.12); overflow: hidden; }
    .i2w-page-box { position: absolute; outline: 1px dashed #e2e8f0; }
    .i2w-page img { position: absolute; display: block; }
    .i2w-page-cap { position: absolute; height: 2px; background: #94a3b8; }
    .i2w-page-no { font-size: .72rem; color: #6c757d; text-align: center; margin-top: .2rem; }
    .i2w-more { font-size: .8rem; color: #6c757d; align-self: center; }
  </style>`;

	const contentHtml = `
    <div id="converter" class="tool-page-heading mb-3">
      <h1 class="h4 mb-0">${escapeHtml(tx('title'))}</h1>
    </div>

    <label class="tool-dropzone i2w-drop mb-1" id="i2wDrop" for="i2wFiles">
      <input type="file" id="i2wFiles" accept="image/jpeg,image/png,image/webp,image/gif,image/bmp,image/*" multiple>
      <span class="tool-dropzone-title">${escapeHtml(tx('choose_files'))}</span>
      <span class="tool-dropzone-hint">${escapeHtml(tx('drop_hint'))}</span>
    </label>
    <p class="form-text mt-0 mb-3">${escapeHtml(tx('ocr_hint'))} <a href="${escapeHtml(ocrHref)}">${escapeHtml(tx('ocr_link'))}</a></p>

    <div id="i2wListTools" class="d-flex align-items-center i2w-list-tools mb-1 flex-wrap" hidden>
      <span id="i2wCount" class="small text-muted me-auto"></span>
      <button type="button" id="i2wSortName" class="btn btn-link btn-sm p-0">${escapeHtml(tx('sort_name'))}</button>
      <button type="button" id="i2wReverse" class="btn btn-link btn-sm p-0">${escapeHtml(tx('reverse'))}</button>
    </div>
    <ol id="i2wList" class="i2w-list mb-3" aria-live="polite"></ol>

    <div class="row g-2 mb-2 align-items-start">
      <div class="col-12 col-md-5">
        <label class="form-label mb-0" for="i2wLayout">${escapeHtml(tx('layout_label'))}</label>
        <select id="i2wLayout" class="form-select form-select-sm">${optionsHtml(
					[
						['one', 'layout_one'],
						['two', 'layout_two'],
						['grid', 'layout_grid'],
						['flow', 'layout_flow'],
					],
					'one'
				)}</select>
      </div>
      <div class="col-6 col-md-4">
        <label class="form-label mb-0" for="i2wPaper">${escapeHtml(tx('paper_label'))}</label>
        <select id="i2wPaper" class="form-select form-select-sm">${optionsHtml(
					[
						['a4', 'paper_a4'],
						['letter', 'paper_letter'],
					],
					'a4'
				)}</select>
      </div>
      <div class="col-6 col-md-3">
        <label class="form-label mb-0" for="i2wOrient">${escapeHtml(tx('orient_label'))}</label>
        <select id="i2wOrient" class="form-select form-select-sm">${optionsHtml(
					[
						['portrait', 'orient_portrait'],
						['landscape', 'orient_landscape'],
					],
					'portrait'
				)}</select>
      </div>
    </div>
    <p class="form-text mt-0 mb-2">${escapeHtml(tx('layout_hint'))}</p>

    <div class="d-flex align-items-center tools-bar mb-2 flex-wrap">
      <button type="button" id="i2wBtnConvert" class="btn btn-primary btn-sm">${escapeHtml(tx('convert'))}</button>
      <button type="button" id="i2wBtnDownload" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(tx('download'))}</button>
      <button type="button" id="i2wBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx('sample'))}</button>
      <button type="button" id="i2wBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx('clear'))}</button>
    </div>

    <details class="mb-3" id="i2wAdvanced">
      <summary>${escapeHtml(tx('advanced'))}</summary>
      <div class="row g-2 mt-1">
        <div class="col-6 col-md-3">
          <label class="form-label mb-0" for="i2wMargin">${escapeHtml(tx('margin_label'))}</label>
          <select id="i2wMargin" class="form-select form-select-sm">${optionsHtml(
						[
							['1440', 'margin_normal'],
							['720', 'margin_narrow'],
						],
						'1440'
					)}</select>
        </div>
        <div class="col-6 col-md-3">
          <label class="form-label mb-0" for="i2wCaption">${escapeHtml(tx('caption_label'))}</label>
          <select id="i2wCaption" class="form-select form-select-sm">${optionsHtml(
						[
							['none', 'caption_none'],
							['name', 'caption_name'],
							['figure', 'caption_figure'],
						],
						'none'
					)}</select>
        </div>
        <div class="col-12 col-md-6">
          <label class="form-label mb-0" for="i2wSize">${escapeHtml(tx('size_label'))}</label>
          <select id="i2wSize" class="form-select form-select-sm">${optionsHtml(
						[
							['fit', 'size_fit'],
							['actual', 'size_actual'],
						],
						'fit'
					)}</select>
        </div>
        <div class="col-12 col-md-6">
          <label class="form-label mb-0" for="i2wQuality">${escapeHtml(tx('quality_label'))}</label>
          <select id="i2wQuality" class="form-select form-select-sm">${optionsHtml(
						[
							['original', 'quality_original'],
							['small', 'quality_small'],
						],
						'original'
					)}</select>
        </div>
        <div class="col-12 col-md-6">
          <p class="form-text mb-0">${escapeHtml(tx('quality_hint'))}</p>
        </div>
      </div>
    </details>

    <div id="i2wHud" class="bcw-hud mb-3" role="status" aria-live="polite" hidden>
      <div class="bcw-hud-top">
        <div class="bcw-hud-spin" aria-hidden="true"></div>
        <div class="bcw-hud-pct" id="i2wPct">0%</div>
        <div class="bcw-hud-copy">
          <div class="bcw-hud-title">${escapeHtml(tx('progress'))}</div>
          <div class="bcw-hud-step" id="i2wStep"></div>
          <div class="bcw-hud-time" id="i2wTime"></div>
        </div>
      </div>
      <div class="progress" style="height:1.35rem">
        <div id="i2wBar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
        <span class="bcw-hud-sheen" aria-hidden="true"></span>
      </div>
      <ol class="bcw-hud-steps">
        <li data-step="read">${escapeHtml(tx('step_read'))}</li>
        <li data-step="embed">${escapeHtml(tx('step_embed'))}</li>
        <li data-step="save">${escapeHtml(tx('step_save'))}</li>
      </ol>
    </div>

    <p id="i2wWarn" class="small text-warning mb-2" style="display:none;" role="status"></p>
    <p id="i2wError" class="small text-danger mb-2" style="display:none;" role="alert"></p>
    <p id="i2wStatus" class="small text-muted mb-2" role="status"></p>
    <p id="i2wStats" class="small text-muted mb-3" style="display:none;"></p>

    <div id="i2wPreviewWrap" class="mb-4" hidden>
      <div class="small fw-semibold mb-1">${escapeHtml(tx('preview_label'))}</div>
      <p class="form-text mt-0 mb-2">${escapeHtml(tx('preview_hint'))}</p>
      <div id="i2wPages" class="i2w-pages"></div>
    </div>

    <p class="tool-lead mb-4">${escapeHtml(description)}</p>`;

	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: 'tool_images_to_word',
		mode: 'rules',
		howItemCount: 4,
		whyChooseItemCount: 5,
		usecaseCount: 4,
		ruleItemCount: 5,
	});

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{ label: tx('ref_a_label'), href: 'https://docx.js.org/#/usage/images' },
			{ label: tx('ref_b_label'), href: 'https://ecma-international.org/publications-and-standards/standards/ecma-376/' },
		],
	});

	/** 前端脚本需要的文案（一次性注入）。 */
	const clientText = {
		empty: tx('empty'),
		decodeFail: tx('err_decode'),
		encodeFail: tx('err_encode'),
		libFail: tx('err_lib'),
		large: tx('warn_large'),
		edge: tx('warn_edge'),
		animation: tx('warn_animation'),
		skipped: tx('warn_skipped'),
		converting: tx('status_converting'),
		done: tx('status_done'),
		moveUp: tx('move_up'),
		moveDown: tx('move_down'),
		rotate: tx('rotate'),
		remove: tx('remove'),
		countTpl: tx('count_tpl'),
		statsTpl: tx('stats_tpl'),
		figureTpl: tx('figure_tpl'),
		morePagesTpl: tx('more_pages_tpl'),
		readStep: tx('read_step'),
		embedStep: tx('embed_step'),
		saveStep: tx('save_step'),
		elapsed: tx('elapsed'),
	};

	/**
	 * 客户端脚本：解码 → 计算版式（预览与 DOCX 共用）→ 逐张嵌入（原样或重编码）→ docx 打包；金标 HUD；Clear 不重载样例。
	 */
	const extraBodyHtml = `
  <script>
    (function () {
      /** 单文件超过此字节数时软警告。 */
      var SOFT_BYTES = 25 * 1024 * 1024;
      /** 边长超过此像素时软警告。 */
      var SOFT_EDGE = 8192;
      /** 纸张尺寸（twip，1 twip = 1/1440 in，纵向宽 × 高）。 */
      var PAPER = { a4: [11906, 16838], letter: [12240, 15840] };
      /** twip → 96 ppi 像素（Word 图片尺寸单位）。 */
      var TW_PER_PX = 15;
      /** 每个图片行额外预留的像素（行内图片所在行的字体下沉部分，避免被挤到下一页）。 */
      var LINE_SAFE_PX = 10;
      /** 图注占用的高度（3 pt 段前 + 9 pt 一行，像素）。 */
      var CAPTION_PX = 20;
      /** 「连续排列」时图片之间的段前间距（twip，8 pt）。 */
      var FLOW_GAP_TW = 160;
      /** 「每页 2 张 / 4 张」时上下两张之间的段前间距（twip，12 pt）。 */
      var STACK_GAP_TW = 240;
      /** 2 × 2 表格单元格左右内边距（twip）。 */
      var CELL_PAD_TW = 60;
      /** 画质档：最长边像素与 JPEG 质量（original 不缩放，0.92 只用于必须重编码时）。 */
      var QUALITY = { original: { edge: 0, q: 0.92 }, small: { edge: 1600, q: 0.8 } };
      /** 预览里每页缩略图的宽度（CSS 像素）。 */
      var PREVIEW_PAGE_W = 120;
      /** 预览最多画出的页数。 */
      var PREVIEW_MAX_PAGES = 12;

      /** 页面控件。 */
      var drop = document.getElementById('i2wDrop');
      var fileInput = document.getElementById('i2wFiles');
      var listEl = document.getElementById('i2wList');
      var listTools = document.getElementById('i2wListTools');
      var countEl = document.getElementById('i2wCount');
      var btnSortName = document.getElementById('i2wSortName');
      var btnReverse = document.getElementById('i2wReverse');
      var layoutEl = document.getElementById('i2wLayout');
      var paperEl = document.getElementById('i2wPaper');
      var orientEl = document.getElementById('i2wOrient');
      var marginEl = document.getElementById('i2wMargin');
      var captionEl = document.getElementById('i2wCaption');
      var sizeEl = document.getElementById('i2wSize');
      var qualityEl = document.getElementById('i2wQuality');
      var btnConvert = document.getElementById('i2wBtnConvert');
      var btnDownload = document.getElementById('i2wBtnDownload');
      var btnSample = document.getElementById('i2wBtnSample');
      var btnClear = document.getElementById('i2wBtnClear');
      var warnEl = document.getElementById('i2wWarn');
      var errEl = document.getElementById('i2wError');
      var statusEl = document.getElementById('i2wStatus');
      var statsEl = document.getElementById('i2wStats');
      var hud = document.getElementById('i2wHud');
      var pctEl = document.getElementById('i2wPct');
      var stepEl = document.getElementById('i2wStep');
      var timeEl = document.getElementById('i2wTime');
      var barEl = document.getElementById('i2wBar');
      var previewWrap = document.getElementById('i2wPreviewWrap');
      var pagesEl = document.getElementById('i2wPages');

      /** 本地化文案字典。 */
      var msg = ${JSON.stringify(clientText)};

      /**
       * @typedef {{ id: string, file: File, bitmap: ImageBitmap|HTMLImageElement, w: number, h: number, thumbUrl: string, rot: number }} WordItem
       * w / h 为浏览器按 EXIF 方向摆正后的像素尺寸；rot 为用户追加的顺时针旋转（0 / 90 / 180 / 270）。
       */

      /** @type {WordItem[]} 按文档顺序排列的图片。 */
      var items = [];
      /** @type {Blob|null} 上次生成的 DOCX。 */
      var resultBlob = null;
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
      /** @type {Promise<any>|null} docx 库加载缓存。 */
      var docxPromise = null;

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

      /**
       * 取文件名（去扩展名）。
       * @param {File} file 文件
       * @returns {string} 基础名
       */
      function baseName(file) {
        return file && file.name ? file.name.replace(/[.][^.]+$/, '') : 'image';
      }

      /**
       * 懒加载同域 docx 库（UMD，挂到 window.docx）。
       * @returns {Promise<any>} docx 命名空间
       */
      function loadDocx() {
        if (window.docx && window.docx.Document) return Promise.resolve(window.docx);
        if (docxPromise) return docxPromise;
        docxPromise = new Promise(function (resolve, reject) {
          var s = document.createElement('script');
          s.src = '/vendor/docx/index.umd.js';
          s.async = true;
          s.onload = function () {
            if (window.docx && window.docx.Document) resolve(window.docx);
            else reject(new Error('lib'));
          };
          s.onerror = function () { reject(new Error('lib')); };
          document.head.appendChild(s);
        });
        docxPromise.catch(function () { docxPromise = null; });
        return docxPromise;
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
        [btnConvert, btnSample, btnClear, fileInput, layoutEl, paperEl, orientEl, marginEl, captionEl, sizeEl, qualityEl, btnSortName, btnReverse].forEach(function (el) { el.disabled = on; });
        btnDownload.disabled = on || !resultBlob;
        btnConvert.setAttribute('aria-busy', String(on));
        if (!on) renderList();
        else listEl.querySelectorAll('button').forEach(function (b) { b.disabled = true; });
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

      /** 清空 DOCX 结果（设置或顺序改变后需重新转换），并刷新预览。 */
      function clearResult() {
        resultBlob = null;
        btnDownload.disabled = true;
        statsEl.style.display = 'none';
        statsEl.textContent = '';
        setStatus('');
        renderPreview();
      }

      /**
       * 读取 JPEG 的 EXIF 方向与颜色分量数（用于判断能否原样放入）。
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
       * 画布上是否有半透明 / 透明像素。
       * @param {CanvasRenderingContext2D} ctx 画布上下文
       * @param {number} w 宽
       * @param {number} h 高
       * @returns {boolean} 有透明像素
       */
      function hasAlpha(ctx, w, h) {
        var d = ctx.getImageData(0, 0, w, h).data;
        for (var i = 3; i < d.length; i += 4) if (d[i] < 255) return true;
        return false;
      }

      /**
       * 经画布重编码一张图：套用用户旋转，按最长边缩放；有透明像素或 PNG 源保持 PNG，否则白底 JPEG。
       * @param {WordItem} item 图片项
       * @param {number} maxEdge 最长边像素（0 = 不缩放）
       * @param {boolean} preferPng 源是 PNG（线条图 / 截图保持无损）
       * @param {number} q JPEG 质量
       * @returns {Promise<Uint8Array>} 编码后字节
       */
      function reencode(item, maxEdge, preferPng, q) {
        var swap = item.rot === 90 || item.rot === 270;
        var k = maxEdge > 0 ? Math.min(1, maxEdge / Math.max(item.w, item.h)) : 1;
        var sw = Math.max(1, Math.round(item.w * k));
        var sh = Math.max(1, Math.round(item.h * k));
        var cw = swap ? sh : sw;
        var ch = swap ? sw : sh;
        var c = document.createElement('canvas');
        c.width = cw;
        c.height = ch;
        var ctx = c.getContext('2d');
        if (!ctx) return Promise.reject(new Error('encode'));
        ctx.imageSmoothingEnabled = true;
        if ('imageSmoothingQuality' in ctx) ctx.imageSmoothingQuality = 'high';
        ctx.translate(cw / 2, ch / 2);
        ctx.rotate((item.rot * Math.PI) / 180);
        ctx.drawImage(item.bitmap, -sw / 2, -sh / 2, sw, sh);
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        var png = preferPng || hasAlpha(ctx, cw, ch);
        if (!png) {
          ctx.globalCompositeOperation = 'destination-over';
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(0, 0, cw, ch);
        }
        return new Promise(function (resolve, reject) {
          c.toBlob(function (blob) {
            if (!blob) { reject(new Error('encode')); return; }
            blob.arrayBuffer().then(function (buf) { resolve(new Uint8Array(buf)); }, reject);
          }, png ? 'image/png' : 'image/jpeg', png ? undefined : q);
        });
      }

      /**
       * 取写入 DOCX 的图片字节：能原样就原样（JPEG 无方向标记且非 CMYK、PNG，且未旋转），否则重编码；小文件档若更大则回退原数据。
       * @param {WordItem} item 图片项
       * @param {string} quality original|small
       * @returns {Promise<{ bytes: Uint8Array, raw: boolean }>}
       */
      function imageBytes(item, quality) {
        var preset = QUALITY[quality] || QUALITY.original;
        return item.file.arrayBuffer().then(function (buf) {
          var u8 = new Uint8Array(buf);
          var kind = sniff(u8);
          var rawOk = item.rot === 0 && (kind === 'png' || (kind === 'jpeg' && (function () {
            var info = jpegInfo(u8);
            return info.orientation === 1 && info.components !== 4;
          })()));
          if (rawOk && quality === 'original') return { bytes: u8, raw: true };
          var keepPng = kind === 'png' && quality === 'original';
          return reencode(item, preset.edge, keepPng, preset.q).then(function (bytes) {
            var shrinks = preset.edge > 0 && Math.max(item.w, item.h) > preset.edge;
            if (rawOk && !shrinks && bytes.length >= u8.length) return { bytes: u8, raw: true };
            return { bytes: bytes, raw: false };
          });
        });
      }

      /**
       * 当前页面几何（像素，96 ppi）。
       * @returns {{ pw: number, ph: number, m: number, cw: number, ch: number, landscape: boolean, paper: number[], marginTw: number }}
       */
      function pageGeom() {
        var paper = PAPER[paperEl.value] || PAPER.a4;
        var landscape = orientEl.value === 'landscape';
        var marginTw = Number(marginEl.value) || 1440;
        var pw = (landscape ? paper[1] : paper[0]) / TW_PER_PX;
        var ph = (landscape ? paper[0] : paper[1]) / TW_PER_PX;
        var m = marginTw / TW_PER_PX;
        return { pw: pw, ph: ph, m: m, cw: pw - m * 2, ch: ph - m * 2, landscape: landscape, paper: paper, marginTw: marginTw };
      }

      /**
       * 把图片缩放进一个框。
       * @param {WordItem} item 图片项
       * @param {number} bw 框宽（像素）
       * @param {number} bh 框高（像素）
       * @returns {{ w: number, h: number }} 显示尺寸（整数像素）
       */
      function fitBox(item, bw, bh) {
        var swap = item.rot === 90 || item.rot === 270;
        var iw = swap ? item.h : item.w;
        var ih = swap ? item.w : item.h;
        var s = Math.min(bw / iw, bh / ih);
        if (sizeEl.value === 'actual') s = Math.min(1, s);
        return { w: Math.max(1, Math.floor(iw * s)), h: Math.max(1, Math.floor(ih * s)) };
      }

      /**
       * 计算版式：每张图的显示尺寸和所在页、页内位置（预览与 DOCX 共用同一结果）。
       * @returns {{ g: object, pages: Array<Array<{ item: WordItem, idx: number, x: number, y: number, w: number, h: number, bx: number, by: number, bw: number, bh: number }>>, sizes: Object<string, {w:number,h:number}> }}
       * x/y 为图片相对内容区左上角的位置；bx/by/bw/bh 为该图可用的框。
       */
      function plan() {
        var g = pageGeom();
        var cap = captionEl.value === 'none' ? 0 : CAPTION_PX;
        var mode = layoutEl.value;
        var pages = [];
        var sizes = {};
        var per = mode === 'two' ? 2 : mode === 'grid' ? 4 : 1;
        if (mode === 'flow') {
          var bh = g.ch - cap - LINE_SAFE_PX;
          var y = 0;
          var cur = [];
          items.forEach(function (item, idx) {
            var d = fitBox(item, g.cw, bh);
            var gap = cur.length ? FLOW_GAP_TW / TW_PER_PX : 0;
            var need = gap + d.h + cap + LINE_SAFE_PX;
            if (cur.length && y + need > g.ch) { pages.push(cur); cur = []; y = 0; gap = 0; need = d.h + cap + LINE_SAFE_PX; }
            cur.push({ item: item, idx: idx, x: (g.cw - d.w) / 2, y: y + gap, w: d.w, h: d.h, bx: 0, by: y + gap, bw: g.cw, bh: d.h + cap });
            sizes[item.id] = d;
            y += need;
          });
          if (cur.length) pages.push(cur);
        } else if (mode === 'grid') {
          var gapG = STACK_GAP_TW / TW_PER_PX;
          var colW = g.cw / 2;
          var bwG = colW - (CELL_PAD_TW * 2) / TW_PER_PX - 1;
          var bhG = (g.ch - 2 - gapG - 2 * (cap + LINE_SAFE_PX)) / 2;
          for (var p = 0; p * per < items.length; p++) {
            var pg = [];
            var rowTop = 2;
            for (var r = 0; r < 2; r++) {
              var rowH = 0;
              var top = rowTop + (r ? gapG : 0);
              for (var c = 0; c < 2; c++) {
                var idxG = p * per + r * 2 + c;
                if (idxG >= items.length) break;
                var itG = items[idxG];
                var dG = fitBox(itG, bwG, bhG);
                sizes[itG.id] = dG;
                pg.push({ item: itG, idx: idxG, x: c * colW + (colW - dG.w) / 2, y: top, w: dG.w, h: dG.h, bx: c * colW, by: top, bw: colW, bh: bhG + cap });
                rowH = Math.max(rowH, dG.h + cap + LINE_SAFE_PX);
              }
              rowTop = top + rowH;
            }
            pages.push(pg);
          }
        } else {
          var gapS = mode === 'two' ? STACK_GAP_TW / TW_PER_PX : 0;
          var bhS = mode === 'two' ? (g.ch - gapS - 2 * (cap + LINE_SAFE_PX)) / 2 : g.ch - cap - LINE_SAFE_PX;
          for (var pS = 0; pS * per < items.length; pS++) {
            var pgS = [];
            var yS = 0;
            for (var k = 0; k < per; k++) {
              var idxS = pS * per + k;
              if (idxS >= items.length) break;
              var itS = items[idxS];
              var dS = fitBox(itS, g.cw, bhS);
              sizes[itS.id] = dS;
              var gS = k ? gapS : 0;
              pgS.push({ item: itS, idx: idxS, x: (g.cw - dS.w) / 2, y: yS + gS, w: dS.w, h: dS.h, bx: 0, by: yS + gS, bw: g.cw, bh: bhS + cap });
              yS += gS + dS.h + cap + LINE_SAFE_PX;
            }
            pages.push(pgS);
          }
        }
        return { g: g, pages: pages, sizes: sizes };
      }

      /**
       * 图注文字。
       * @param {WordItem} item 图片项
       * @param {number} idx 序号（0 起）
       * @returns {string} 图注；无图注时为空串
       */
      function captionText(item, idx) {
        if (captionEl.value === 'name') return item.file.name || ('#' + (idx + 1));
        if (captionEl.value === 'figure') return fill(msg.figureTpl, { n: String(idx + 1) });
        return '';
      }

      /** 画页面版式预览（最多 PREVIEW_MAX_PAGES 页）。 */
      function renderPreview() {
        pagesEl.innerHTML = '';
        if (!items.length) { previewWrap.hidden = true; return; }
        previewWrap.hidden = false;
        var pl = plan();
        var g = pl.g;
        var k = PREVIEW_PAGE_W / g.pw;
        pl.pages.slice(0, PREVIEW_MAX_PAGES).forEach(function (pg, pi) {
          var wrap = document.createElement('div');
          var page = document.createElement('div');
          page.className = 'i2w-page';
          page.style.width = PREVIEW_PAGE_W + 'px';
          page.style.height = Math.round(g.ph * k) + 'px';
          pg.forEach(function (b) {
            var ox = (g.m + b.x) * k;
            var oy = (g.m + b.y) * k;
            var img = document.createElement('img');
            img.alt = '';
            img.src = b.item.thumbUrl;
            var swap = b.item.rot === 90 || b.item.rot === 270;
            var w = b.w * k, h = b.h * k;
            img.style.width = (swap ? h : w) + 'px';
            img.style.height = (swap ? w : h) + 'px';
            img.style.left = (ox + (swap ? (w - h) / 2 : 0)) + 'px';
            img.style.top = (oy + (swap ? (h - w) / 2 : 0)) + 'px';
            if (b.item.rot) img.style.transform = 'rotate(' + b.item.rot + 'deg)';
            page.appendChild(img);
            if (captionEl.value !== 'none') {
              var capBar = document.createElement('div');
              capBar.className = 'i2w-page-cap';
              var cwBar = Math.max(6, w * 0.45);
              capBar.style.width = cwBar + 'px';
              capBar.style.left = (ox + (w - cwBar) / 2) + 'px';
              capBar.style.top = (oy + h + 4 * k + 3) + 'px';
              page.appendChild(capBar);
            }
          });
          var no = document.createElement('div');
          no.className = 'i2w-page-no';
          no.textContent = String(pi + 1);
          wrap.appendChild(page);
          wrap.appendChild(no);
          pagesEl.appendChild(wrap);
        });
        if (pl.pages.length > PREVIEW_MAX_PAGES) {
          var more = document.createElement('div');
          more.className = 'i2w-more';
          more.textContent = fill(msg.morePagesTpl, { n: String(pl.pages.length - PREVIEW_MAX_PAGES) });
          pagesEl.appendChild(more);
        }
      }

      /**
       * 生成 DOCX（按版式写入段落 / 表格）。
       * @param {any} D docx 命名空间（window.docx）
       * @returns {Promise<{ blob: Blob, raw: number, re: number, pages: number }>}
       */
      function buildDocx(D) {
        var pl = plan();
        var g = pl.g;
        var mode = layoutEl.value;
        var quality = qualityEl.value;
        var raw = 0, re = 0;
        /** @type {Object<string, Uint8Array>} 每张图写入的字节。 */
        var data = {};
        var chain = Promise.resolve();
        items.forEach(function (item, idx) {
          chain = chain.then(function () {
            progress(8 + (78 * idx) / items.length, 'embed', fill(msg.embedStep, { i: String(idx + 1), n: String(items.length) }));
            return imageBytes(item, quality).then(function (r) {
              if (r.raw) raw++; else re++;
              data[item.id] = r.bytes;
              return new Promise(function (res) { setTimeout(res, 0); });
            });
          });
        });
        return chain.then(function () {
          progress(90, 'save', msg.saveStep);
          var hasCap = captionEl.value !== 'none';
          /**
           * 一张图的图片段落。
           * @param {WordItem} item 图片项
           * @param {number} before 段前间距（twip）
           * @param {boolean} breakBefore 段前分页
           */
          var imagePara = function (item, before, breakBefore) {
            var d = pl.sizes[item.id];
            var name = item.file.name || 'image';
            return new D.Paragraph({
              alignment: D.AlignmentType.CENTER,
              spacing: { before: before, after: 0 },
              keepNext: hasCap,
              pageBreakBefore: breakBefore,
              children: [new D.ImageRun({ data: data[item.id], transformation: { width: d.w, height: d.h }, altText: { name: name, description: name, title: name } })]
            });
          };
          /** 一张图的图注段落。 */
          var captionPara = function (item, idx) {
            return new D.Paragraph({
              alignment: D.AlignmentType.CENTER,
              spacing: { before: 60, after: 0 },
              children: [new D.TextRun({ text: captionText(item, idx), italics: true, size: 18, color: '555555' })]
            });
          };
          /** 几乎不占高度的空段落（表格前分页 / 文末收尾用）。 */
          var tinyPara = function (breakBefore) {
            return new D.Paragraph({ pageBreakBefore: breakBefore, spacing: { before: 0, after: 0, line: 20, lineRule: D.LineRuleType.EXACT }, children: [] });
          };
          var children = [];
          if (mode === 'grid') {
            var colTw = Math.floor((g.cw * TW_PER_PX) / 2);
            pl.pages.forEach(function (pg, pi) {
              children.push(tinyPara(pi > 0));
              var rows = [];
              for (var r = 0; r < 2; r++) {
                var cells = [];
                for (var c = 0; c < 2; c++) {
                  var b = pg[r * 2 + c];
                  var kids = [];
                  if (b) {
                    kids.push(imagePara(b.item, r ? STACK_GAP_TW : 0, false));
                    if (hasCap) kids.push(captionPara(b.item, b.idx));
                  } else {
                    kids.push(new D.Paragraph({ children: [] }));
                  }
                  cells.push(new D.TableCell({ width: { size: colTw, type: D.WidthType.DXA }, children: kids }));
                }
                if (r === 1 && !pg[2]) break;
                rows.push(new D.TableRow({ cantSplit: true, children: cells }));
              }
              children.push(new D.Table({
                rows: rows,
                width: { size: colTw * 2, type: D.WidthType.DXA },
                columnWidths: [colTw, colTw],
                layout: D.TableLayoutType.FIXED,
                borders: D.TableBorders.NONE,
                margins: { left: CELL_PAD_TW, right: CELL_PAD_TW, top: 0, bottom: 0 }
              }));
            });
            children.push(tinyPara(false));
          } else {
            pl.pages.forEach(function (pg, pi) {
              pg.forEach(function (b, k) {
                var before = k === 0 ? 0 : mode === 'flow' ? FLOW_GAP_TW : STACK_GAP_TW;
                children.push(imagePara(b.item, before, mode !== 'flow' && pi > 0 && k === 0));
                if (hasCap) children.push(captionPara(b.item, b.idx));
              });
            });
          }
          var doc = new D.Document({
            creator: 'onlinefreetools.org',
            title: items.length === 1 ? baseName(items[0].file) : 'Images',
            sections: [{
              properties: {
                page: {
                  size: { width: g.paper[0], height: g.paper[1], orientation: g.landscape ? D.PageOrientation.LANDSCAPE : D.PageOrientation.PORTRAIT },
                  margin: { top: g.marginTw, right: g.marginTw, bottom: g.marginTw, left: g.marginTw, header: 708, footer: 708, gutter: 0 }
                }
              },
              children: children
            }]
          });
          return D.Packer.toBlob(doc);
        }).then(function (blob) {
          return { blob: blob, raw: raw, re: re, pages: pl.pages.length };
        });
      }

      /** 重绘文件列表（序号、缩略图、尺寸、旋转 / 上移 / 下移 / 删除）。 */
      function renderList() {
        listEl.innerHTML = '';
        items.forEach(function (item, idx) {
          var li = document.createElement('li');
          li.className = 'i2w-item';
          var num = document.createElement('span');
          num.className = 'i2w-num';
          num.textContent = String(idx + 1);
          var img = document.createElement('img');
          img.className = 'i2w-thumb';
          img.alt = '';
          img.src = item.thumbUrl;
          img.style.transform = item.rot ? 'rotate(' + item.rot + 'deg)' : '';
          var meta = document.createElement('span');
          meta.className = 'i2w-meta';
          var name = document.createElement('span');
          name.className = 'i2w-name d-block';
          name.textContent = item.file.name || ('#' + (idx + 1));
          var dims = document.createElement('span');
          dims.className = 'i2w-dims d-block';
          var swap = item.rot === 90 || item.rot === 270;
          dims.textContent = (swap ? item.h : item.w) + ' × ' + (swap ? item.w : item.h) + ' px · ' + formatBytes(item.file.size) + (item.rot ? ' · ' + item.rot + '°' : '');
          meta.appendChild(name);
          meta.appendChild(dims);
          var actions = document.createElement('span');
          actions.className = 'i2w-actions';
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
          actions.appendChild(mk('btn-outline-secondary i2w-rot', msg.rotate, '\\u21bb', false));
          actions.appendChild(mk('btn-outline-secondary i2w-up', msg.moveUp, '\\u2191', idx === 0));
          actions.appendChild(mk('btn-outline-secondary i2w-down', msg.moveDown, '\\u2193', idx === items.length - 1));
          actions.appendChild(mk('btn-outline-danger i2w-remove', msg.remove, '\\u00d7', false));
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

      /** 刷新文件大小、边长、动图、跳过文件警告。 */
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
        setWarn(warns.join(' '));
      }

      /**
       * 追加文件（逐个解码；解码失败的跳过并在警告里列出，不影响其它文件）。
       * @param {FileList|File[]} files 文件
       * @returns {Promise<void>}
       */
      function addFiles(files) {
        setError('');
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
          clearResult();
          if (!items.length && skippedNames.length) setError(msg.decodeFail);
        });
      }

      /** 生成 DOCX 并启用下载。 */
      function convert() {
        setError('');
        resultBlob = null;
        btnDownload.disabled = true;
        statsEl.style.display = 'none';
        if (!items.length) { setError(msg.empty); return Promise.resolve(); }
        lock(true);
        setStatus(msg.converting);
        startedAt = Date.now();
        if (tickTimer) clearInterval(tickTimer);
        tickTimer = setInterval(tickTime, 250);
        tickTime();
        progress(4, 'read', msg.readStep);
        return loadDocx()
          .then(function (D) { return buildDocx(D); })
          .then(function (out) {
            resultBlob = out.blob;
            statsEl.textContent = fill(msg.statsTpl, {
              pages: String(out.pages),
              n: String(items.length),
              bytes: formatBytes(out.blob.size),
              raw: String(out.raw),
              re: String(out.re)
            });
            statsEl.style.display = '';
            setStatus(msg.done);
            progress(100, 'save', msg.saveStep);
            endHud(true);
            lock(false);
          })
          .catch(function (err) {
            resultBlob = null;
            setError(err && err.message === 'lib' ? msg.libFail : msg.encodeFail);
            setStatus('');
            endHud(false);
            lock(false);
          });
      }

      /** 下载上次生成的 DOCX（单张用原文件名，多张用 images.docx）。 */
      function downloadResult() {
        if (!resultBlob) return;
        var url = URL.createObjectURL(resultBlob);
        var a = document.createElement('a');
        a.href = url;
        a.download = (items.length === 1 ? baseName(items[0].file) : 'images') + '.docx';
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
       * 样例：横向现场照片 JPEG（1600 × 1200）+ 竖向白板照片 JPEG（1200 × 1600）+ 柱状图 PNG（900 × 600）+ 网页截图 PNG（1280 × 720），
       * 默认 A4 纵向 / 每页 1 张 / 标准边距转换：4 页，四张都原样放入。
       * @returns {Promise<void>}
       */
      function loadSample() {
        clearAll(false);
        var site = makeSample('site-photo-1.jpg', 1600, 1200, 'image/jpeg', function (ctx) {
          var sky = ctx.createLinearGradient(0, 0, 0, 1200);
          sky.addColorStop(0, '#7fb3e0'); sky.addColorStop(0.6, '#dbeaf6'); sky.addColorStop(1, '#a3a3a3');
          ctx.fillStyle = sky; ctx.fillRect(0, 0, 1600, 1200);
          ctx.fillStyle = '#8b5e3c'; ctx.fillRect(300, 520, 1000, 520);
          ctx.fillStyle = '#d6d3d1';
          for (var i = 0; i < 4; i++) ctx.fillRect(380 + i * 240, 620, 140, 180);
          ctx.fillStyle = '#57534e'; ctx.fillRect(0, 1040, 1600, 160);
        });
        var board = makeSample('whiteboard-2.jpg', 1200, 1600, 'image/jpeg', function (ctx) {
          ctx.fillStyle = '#f8fafc'; ctx.fillRect(0, 0, 1200, 1600);
          ctx.strokeStyle = '#94a3b8'; ctx.lineWidth = 18; ctx.strokeRect(40, 40, 1120, 1520);
          ctx.fillStyle = '#1d4ed8'; ctx.font = 'bold 72px sans-serif'; ctx.fillText('Sprint plan', 120, 220);
          ctx.fillStyle = '#334155';
          for (var i = 0; i < 9; i++) ctx.fillRect(120, 330 + i * 120, i % 3 === 2 ? 520 : 860, 22);
        });
        var chart = makeSample('chart-3.png', 900, 600, 'image/png', function (ctx) {
          ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, 900, 600);
          var vals = [0.4, 0.65, 0.5, 0.9, 0.75];
          var cols = ['#2563eb', '#16a34a', '#f59e0b', '#dc2626', '#7c3aed'];
          for (var i = 0; i < vals.length; i++) { ctx.fillStyle = cols[i]; ctx.fillRect(90 + i * 155, 540 - vals[i] * 460, 110, vals[i] * 460); }
          ctx.fillStyle = '#111827'; ctx.fillRect(70, 540, 780, 4);
        });
        var shot = makeSample('screenshot-4.png', 1280, 720, 'image/png', function (ctx) {
          ctx.fillStyle = '#f1f5f9'; ctx.fillRect(0, 0, 1280, 720);
          ctx.fillStyle = '#0f172a'; ctx.fillRect(0, 0, 1280, 64);
          ctx.fillStyle = '#ffffff'; ctx.fillRect(40, 100, 760, 580);
          ctx.fillStyle = '#e2e8f0'; ctx.fillRect(840, 100, 400, 580);
          ctx.fillStyle = '#64748b';
          for (var i = 0; i < 10; i++) ctx.fillRect(80, 150 + i * 50, i % 4 === 3 ? 380 : 660, 16);
        });
        return Promise.all([site, board, chart, shot])
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
        layoutEl.value = 'one';
        paperEl.value = 'a4';
        orientEl.value = 'portrait';
        marginEl.value = '1440';
        captionEl.value = 'none';
        sizeEl.value = 'fit';
        qualityEl.value = 'original';
        clearResult();
        renderList();
        setError('');
        setWarn('');
        hud.hidden = true;
        hud.classList.remove('is-on', 'is-done', 'is-error');
      }

      /** 列表行按钮：旋转 / 上移 / 下移 / 删除。 */
      listEl.addEventListener('click', function (e) {
        var el = e.target && e.target.closest ? e.target.closest('button[data-id]') : null;
        if (!el || busy) return;
        var id = el.getAttribute('data-id');
        var idx = -1;
        for (var i = 0; i < items.length; i++) if (items[i].id === id) { idx = i; break; }
        if (idx < 0) return;
        if (el.classList.contains('i2w-rot')) {
          items[idx].rot = (items[idx].rot + 90) % 360;
        } else if (el.classList.contains('i2w-up') && idx > 0) {
          var a = items[idx - 1]; items[idx - 1] = items[idx]; items[idx] = a;
        } else if (el.classList.contains('i2w-down') && idx < items.length - 1) {
          var b = items[idx + 1]; items[idx + 1] = items[idx]; items[idx] = b;
        } else if (el.classList.contains('i2w-remove')) {
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

      [layoutEl, paperEl, orientEl, marginEl, captionEl, sizeEl, qualityEl].forEach(function (el) {
        el.addEventListener('change', function () { clearResult(); });
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

      /** 进页自动跑样例，让下载按钮对应真实结果。 */
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('images-to-word');
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
