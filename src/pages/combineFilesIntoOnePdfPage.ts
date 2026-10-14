/**
 * 多种文件合并为一个 PDF 工具页。
 * slug: combine-files-into-one-pdf（见 work-tasks/combine-files-into-one-pdf/02-tool-info.md）。
 *
 * 交互要点（2026-10-14 改写）：
 * - 一个拖放区可混合添加 PDF、图片（JPG / PNG / WebP / GIF / BMP / SVG / AVIF）与纯文本（TXT / MD / CSV / LOG）；
 * - 列表可上下移动、删除、按文件名自然排序；PDF 行可填页码范围（如 1-3, 5）只取部分页；
 * - 主选项行：图片与文本页的纸张（A4 / Letter / 与图片同尺寸）、边距、输出文件名；
 * - 高级设置折叠：双面打印时每个文件从正面开始（自动补空白页）、缩小大照片；
 * - JPEG 按 EXIF 方向摆正（手机竖拍照片不再横躺）；
 * - 先「合并为 PDF」再「下载」；金标进度 HUD（读取 → 添加页面 → 保存）；结果可逐页预览；Clear 恢复默认、不重载样例。
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

/** 本工具 i18n 键前缀。 */
const PREFIX = 'tool_combine_files_into_one_pdf';

/**
 * 为路径加上语言前缀（默认语无前缀）。
 * @param lang 当前语言
 * @param pathname 站内路径
 * @param defaultLang 站点默认语言
 * @returns 带（或不带）语言前缀的路径
 */
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * 渲染 combine-files-into-one-pdf 工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 * @returns 完整页面 HTML
 */
export const renderCombineFilesIntoOnePdfPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 读取本工具键（自动拼前缀）。 */
	const tx = (key: string) => t(opts.lang, `${PREFIX}_${key}` as keyof typeof import('../site/i18n/en').default);

	const toolPath = '/tools/combine-files-into-one-pdf';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${tx('title')} | ${t(opts.lang, 'brand')}`;
	const description = tx('description');

	const navItems = buildToolPageNavItems(opts.lang, opts.defaultLang);

	/** 语言切换链接始终带显式语言前缀。 */
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
			currentSlug: 'combine-files-into-one-pdf',
			currentAnchor: '#converter',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	/** 结果预览（pdf.js 画布 + 翻页）共用标签。 */
	const pdfWorkLabels = pdfWorkUiLabels(opts.lang);

	/** 页内样式：文件列表、HUD、预览。 */
	const extraHeadHtml = `
  <style>
    ${bcwHudCss({ hudId: 'cfpHud', convertBtnId: 'cfpBtnCombine' })}
    ${pdfWorkUiCss()}
    #cfpHud.is-error { border-color:#b91c1c; background:#fff1f2; }
    #cfpHud:not(.is-on) .bcw-hud-spin { animation:none; }
    .tools-bar { gap: .5rem; }
    .cfp-list-head { display:flex; flex-wrap:wrap; gap:.5rem; align-items:center; justify-content:space-between; margin-bottom:.25rem; }
    .cfp-file-list { list-style:none; padding:0; margin:0; counter-reset: cfp; }
    .cfp-file-item { display:flex; flex-wrap:wrap; align-items:center; gap:.5rem; padding:.4rem 0; border-bottom:1px solid #eee; }
    .cfp-file-item::before { counter-increment: cfp; content: counter(cfp); min-width:1.5rem; text-align:end; color:#6c757d; font-size:.8rem; }
    .cfp-kind { min-width:3.6rem; text-align:center; }
    .cfp-file-main { flex:1 1 12rem; min-width:0; }
    .cfp-file-name { display:block; font-size:.85rem; word-break:break-all; }
    .cfp-file-meta { display:block; font-size:.75rem; color:#6c757d; }
    .cfp-range { width:8.5rem; }
    .cfp-file-actions { display:flex; gap:.25rem; flex-shrink:0; }
  </style>`;

	const contentHtml = `
    <div id="converter" class="tool-page-heading mb-3">
      <h1 class="h4 mb-0">${escapeHtml(tx('title'))}</h1>
    </div>

    <label class="tool-dropzone mb-3" id="cfpDrop" for="cfpFiles">
      <input type="file" id="cfpFiles" multiple
        accept="application/pdf,.pdf,image/jpeg,image/png,image/webp,image/gif,image/bmp,image/svg+xml,image/avif,.jpg,.jpeg,.png,.webp,.gif,.bmp,.svg,.avif,text/plain,text/markdown,text/csv,.txt,.md,.csv,.log">
      <span class="tool-dropzone-title">${escapeHtml(tx('choose_files'))}</span>
      <span class="tool-dropzone-hint">${escapeHtml(tx('drop_hint'))}</span>
    </label>

    <div id="cfpListWrap" class="mb-3" hidden>
      <div class="cfp-list-head">
        <span class="small text-muted">${escapeHtml(tx('list_hint'))}</span>
        <button type="button" id="cfpBtnSort" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx('sort_name'))}</button>
      </div>
      <ul id="cfpList" class="cfp-file-list" aria-live="polite"></ul>
    </div>

    <div class="row g-2 mb-2 align-items-end">
      <div class="col-6 col-md-4">
        <label class="form-label mb-0" for="cfpSize">${escapeHtml(tx('size_label'))}</label>
        <select id="cfpSize" class="form-select form-select-sm">
          <option value="a4" selected>${escapeHtml(tx('size_a4'))}</option>
          <option value="letter">${escapeHtml(tx('size_letter'))}</option>
          <option value="fit">${escapeHtml(tx('size_fit'))}</option>
        </select>
        <p class="form-text mb-0">${escapeHtml(tx('size_hint'))}</p>
      </div>
      <div class="col-6 col-md-4">
        <label class="form-label mb-0" for="cfpMargin">${escapeHtml(tx('margin_label'))}</label>
        <select id="cfpMargin" class="form-select form-select-sm">
          <option value="0">${escapeHtml(tx('margin_0'))}</option>
          <option value="10" selected>${escapeHtml(tx('margin_10'))}</option>
          <option value="20">${escapeHtml(tx('margin_20'))}</option>
        </select>
        <p class="form-text mb-0">${escapeHtml(tx('margin_hint'))}</p>
      </div>
      <div class="col-12 col-md-4">
        <label class="form-label mb-0" for="cfpName">${escapeHtml(tx('name_label'))}</label>
        <input type="text" id="cfpName" class="form-control form-control-sm" value="combined" maxlength="120" autocomplete="off">
        <p class="form-text mb-0">${escapeHtml(tx('name_hint'))}</p>
      </div>
    </div>

    <div class="d-flex align-items-center tools-bar mb-2 flex-wrap">
      <button type="button" id="cfpBtnCombine" class="btn btn-primary btn-sm">${escapeHtml(tx('combine'))}</button>
      <button type="button" id="cfpBtnDownload" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(tx('download'))}</button>
      <button type="button" id="cfpBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx('sample'))}</button>
      <button type="button" id="cfpBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx('clear'))}</button>
    </div>

    <details class="mb-3" id="cfpAdvanced">
      <summary>${escapeHtml(tx('advanced'))}</summary>
      <div class="row g-2 mt-1">
        <div class="col-12 col-md-6">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="cfpDuplex">
            <label class="form-check-label" for="cfpDuplex">${escapeHtml(tx('duplex_label'))}</label>
          </div>
          <p class="form-text mb-0">${escapeHtml(tx('duplex_hint'))}</p>
        </div>
        <div class="col-12 col-md-6">
          <label class="form-label mb-0" for="cfpShrink">${escapeHtml(tx('shrink_label'))}</label>
          <select id="cfpShrink" class="form-select form-select-sm">
            <option value="0" selected>${escapeHtml(tx('shrink_off'))}</option>
            <option value="2400">${escapeHtml(tx('shrink_2400'))}</option>
            <option value="1600">${escapeHtml(tx('shrink_1600'))}</option>
          </select>
          <p class="form-text mb-0">${escapeHtml(tx('shrink_hint'))}</p>
        </div>
      </div>
    </details>

    <div id="cfpHud" class="bcw-hud mb-3" role="status" aria-live="polite" hidden>
      <div class="bcw-hud-top">
        <div class="bcw-hud-spin" aria-hidden="true"></div>
        <div class="bcw-hud-pct" id="cfpPct">0%</div>
        <div class="bcw-hud-copy">
          <div class="bcw-hud-title">${escapeHtml(tx('progress'))}</div>
          <div class="bcw-hud-step" id="cfpStep"></div>
          <div class="bcw-hud-time" id="cfpTime"></div>
        </div>
      </div>
      <div class="progress" style="height:1.35rem">
        <div id="cfpBar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
        <span class="bcw-hud-sheen" aria-hidden="true"></span>
      </div>
      <ol class="bcw-hud-steps">
        <li data-step="read">${escapeHtml(tx('step_read'))}</li>
        <li data-step="add">${escapeHtml(tx('step_add'))}</li>
        <li data-step="save">${escapeHtml(tx('step_save'))}</li>
      </ol>
    </div>

    <p id="cfpWarn" class="small text-warning mb-2" style="display:none;" role="status"></p>
    <p id="cfpError" class="small text-danger mb-2" style="display:none;" role="alert"></p>
    <p id="cfpStatus" class="small text-muted mb-2" role="status"></p>
    <p id="cfpStats" class="small text-muted mb-2" style="display:none;"></p>

    ${pdfWorkUiPreviewHtml({ idPrefix: 'cfpPdf', labels: pdfWorkLabels })}

    <p class="tool-lead mb-4">${escapeHtml(description)}</p>`;

	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: PREFIX,
		mode: 'rules',
		howItemCount: 4,
		whyChooseItemCount: 5,
		usecaseCount: 4,
		ruleItemCount: 5,
	});

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{ label: tx('ref_a_label'), href: 'https://pdf-lib.js.org/' },
			{ label: tx('ref_b_label'), href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/image-orientation' },
		],
	});

	/** 前端脚本需要的文案（一次性注入）。 */
	const clientText = {
		kindPdf: tx('kind_pdf'),
		kindImage: tx('kind_image'),
		kindText: tx('kind_text'),
		pagesTpl: tx('pages_tpl'),
		imageTpl: tx('image_tpl'),
		linesTpl: tx('lines_tpl'),
		rangeLabel: tx('range_label'),
		rangePh: tx('range_ph'),
		moveUp: tx('move_up'),
		moveDown: tx('move_down'),
		remove: tx('remove'),
		readStep: tx('read_step'),
		addStep: tx('add_step'),
		saveStep: tx('save_step'),
		elapsed: tx('elapsed'),
		done: tx('status_done'),
		statsTpl: tx('stats_tpl'),
		empty: tx('empty'),
		errEncrypted: tx('err_encrypted'),
		errPdf: tx('err_pdf'),
		errImage: tx('err_image'),
		errText: tx('err_text'),
		errRange: tx('err_range'),
		errSave: tx('err_save'),
		warnSkipped: tx('warn_skipped'),
		warnLarge: tx('warn_large'),
		warnPdflib: tx('warn_pdflib'),
	};

	/**
	 * 客户端脚本：读取文件 → 逐个加入 pdf-lib 文档（PDF 拷页 / 图片嵌入 / 文本排版）→ 保存；金标 HUD；Clear 不重载样例。
	 * 全部在浏览器内运行，不上传服务器。
	 */
	const extraBodyHtml = `
  ${pdfWorkUiClientScript()}
  <script src="/vendor/pdf-lib/pdf-lib.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script>
    (function () {
      /** 队列总字节超过此值时软警告（手机上可能很慢）。 */
      var SOFT_TOTAL_BYTES = 100 * 1024 * 1024;
      /** 1 毫米 = 72 / 25.4 点（PDF 用点作单位）。 */
      var PT_PER_MM = 72 / 25.4;
      /** 图片「与图片同尺寸」时按 96 dpi 换算：1 px = 0.75 pt。 */
      var PT_PER_PX = 0.75;
      /** 纸张尺寸（纵向，单位点）。 */
      var PAPER = { a4: [595.28, 841.89], letter: [612, 792] };
      /** 文本页：字号、行高（点）与最小边距（毫米，避免文字贴边）。 */
      var TEXT_SIZE = 11;
      var TEXT_LINE = 14.5;
      var TEXT_MIN_MARGIN_MM = 15;
      /** 默认设置（Clear 恢复）。 */
      var DEFAULTS = { size: 'a4', margin: '10', name: 'combined', duplex: false, shrink: '0' };

      /** 页面控件。 */
      var drop = document.getElementById('cfpDrop');
      var fileInput = document.getElementById('cfpFiles');
      var listWrap = document.getElementById('cfpListWrap');
      var listEl = document.getElementById('cfpList');
      var btnSort = document.getElementById('cfpBtnSort');
      var sizeEl = document.getElementById('cfpSize');
      var marginEl = document.getElementById('cfpMargin');
      var nameEl = document.getElementById('cfpName');
      var duplexEl = document.getElementById('cfpDuplex');
      var shrinkEl = document.getElementById('cfpShrink');
      var btnCombine = document.getElementById('cfpBtnCombine');
      var btnDownload = document.getElementById('cfpBtnDownload');
      var btnSample = document.getElementById('cfpBtnSample');
      var btnClear = document.getElementById('cfpBtnClear');
      var warnEl = document.getElementById('cfpWarn');
      var errEl = document.getElementById('cfpError');
      var statusEl = document.getElementById('cfpStatus');
      var statsEl = document.getElementById('cfpStats');
      var hud = document.getElementById('cfpHud');
      var pctEl = document.getElementById('cfpPct');
      var stepEl = document.getElementById('cfpStep');
      var timeEl = document.getElementById('cfpTime');
      var barEl = document.getElementById('cfpBar');
      /** 结果预览（只用画布与翻页，进度由 HUD 负责）。 */
      var preview = window.OftPdfWork.bind('cfpPdf');

      /** 本地化文案字典。 */
      var msg = ${JSON.stringify(clientText)};
      /** 类型徽标文字。 */
      var KIND_LABEL = { pdf: msg.kindPdf, image: msg.kindImage, text: msg.kindText };

      /**
       * @typedef {{ id: string, file: File, kind: 'pdf'|'image'|'text', pages: number, w: number, h: number, lines: number, range: string, sub: string }} QueueItem
       */
      /** @type {QueueItem[]} 按合并顺序排列的文件。 */
      var items = [];
      /** @type {Uint8Array|null} 上次合并结果。 */
      var resultBytes = null;
      /** 列表行自增 id。 */
      var nextId = 1;
      /** 队列世代：清空时递增，丢弃清空前仍在读取的文件回调。 */
      var epoch = 0;
      /** 忙碌锁。 */
      var busy = false;
      /** HUD 计时起点与计时器句柄。 */
      var startedAt = 0;
      var tickTimer = 0;
      /** 本次添加时被跳过的文件名与读取错误（合并显示）。 */
      var skippedNames = [];
      var addErrors = [];

      /**
       * 用 split/join 替换 {name} 占位符。
       * @param {string} tpl 模板
       * @param {Object<string, string|number>} map 占位符 → 值
       * @returns {string} 替换结果
       */
      function fill(tpl, map) {
        var s = String(tpl);
        for (var k in map) {
          if (Object.prototype.hasOwnProperty.call(map, k)) s = s.split('{' + k + '}').join(String(map[k]));
        }
        return s;
      }

      /**
       * 格式化字节数。
       * @param {number} n 字节
       * @returns {string} 如 12.3 KB
       */
      function formatBytes(n) {
        if (n < 1024) return n + ' B';
        if (n < 1024 * 1024) return (n / 1024).toFixed(1) + ' KB';
        return (n / (1024 * 1024)).toFixed(2) + ' MB';
      }

      /**
       * HTML 转义（列表用 innerHTML 渲染）。
       * @param {string} s 原文
       * @returns {string} 转义后文本
       */
      function escapeHtml(s) {
        return String(s)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
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

      /** pdf-lib 是否已加载。 */
      function hasPdfLib() {
        return typeof PDFLib !== 'undefined' && PDFLib && typeof PDFLib.PDFDocument === 'function';
      }

      /**
       * 按 MIME 与扩展名判断文件类别。
       * @param {File} f 文件
       * @returns {'pdf'|'image'|'text'|null} 类别；不支持时为 null
       */
      function detectKind(f) {
        var name = String(f.name || '').toLowerCase();
        var type = String(f.type || '').toLowerCase();
        var ext = name.lastIndexOf('.') >= 0 ? name.slice(name.lastIndexOf('.') + 1) : '';
        if (type === 'application/pdf' || ext === 'pdf') return 'pdf';
        if (['jpg', 'jpeg', 'png', 'webp', 'gif', 'bmp', 'svg', 'avif'].indexOf(ext) >= 0) return 'image';
        if (['txt', 'md', 'csv', 'log'].indexOf(ext) >= 0) return 'text';
        if (type.indexOf('image/') === 0 && type !== 'image/heic' && type !== 'image/heif' && type !== 'image/tiff') return 'image';
        if (type === 'text/plain' || type === 'text/markdown' || type === 'text/csv') return 'text';
        return null;
      }

      /**
       * 图片子类型（决定能否直接嵌入）。
       * @param {File} f 文件
       * @returns {'jpg'|'png'|'other'} JPEG / PNG 可直接嵌入，其余需经画布转换
       */
      function imageSub(f) {
        var name = String(f.name || '').toLowerCase();
        var type = String(f.type || '').toLowerCase();
        if (type === 'image/jpeg' || /[.]jpe?g$/.test(name)) return 'jpg';
        if (type === 'image/png' || /[.]png$/.test(name)) return 'png';
        return 'other';
      }

      /**
       * 读取 JPEG 的 EXIF 方向（1–8）；无 EXIF 或非 JPEG 时返回 1。
       * @param {Uint8Array} b JPEG 字节
       * @returns {number} 方向值
       */
      function jpegOrientation(b) {
        if (b.length < 4 || b[0] !== 0xFF || b[1] !== 0xD8) return 1;
        var p = 2;
        while (p + 4 < b.length) {
          if (b[p] !== 0xFF) return 1;
          var marker = b[p + 1];
          var len = (b[p + 2] << 8) | b[p + 3];
          if (marker === 0xDA || marker === 0xD9) return 1;
          /** APP1 段且以 "Exif\\0\\0" 开头 */
          if (marker === 0xE1 && b[p + 4] === 0x45 && b[p + 5] === 0x78 && b[p + 6] === 0x69 && b[p + 7] === 0x66) {
            var tiff = p + 10;
            var little = b[tiff] === 0x49;
            var rd16 = function (o) { return little ? (b[o] | (b[o + 1] << 8)) : ((b[o] << 8) | b[o + 1]); };
            var rd32 = function (o) { return little ? (b[o] | (b[o + 1] << 8) | (b[o + 2] << 16) | (b[o + 3] << 24)) : ((b[o] << 24) | (b[o + 1] << 16) | (b[o + 2] << 8) | b[o + 3]); };
            var ifd = tiff + rd32(tiff + 4);
            if (ifd + 2 > b.length) return 1;
            var count = rd16(ifd);
            for (var i = 0; i < count; i++) {
              var entry = ifd + 2 + i * 12;
              if (entry + 10 > b.length) return 1;
              if (rd16(entry) === 0x0112) {
                var v = rd16(entry + 8);
                return v >= 1 && v <= 8 ? v : 1;
              }
            }
            return 1;
          }
          p += 2 + len;
        }
        return 1;
      }

      /**
       * 解码图片为可绘制对象（按 EXIF 方向摆正）。
       * @param {Blob} blob 图片数据
       * @returns {Promise<{ src: ImageBitmap|HTMLImageElement, w: number, h: number, close: function(): void }>}
       */
      function decodeImage(blob) {
        /** 回退：用 <img> 解码（浏览器同样按 EXIF 摆正）。 */
        function viaImg() {
          return new Promise(function (resolve, reject) {
            var url = URL.createObjectURL(blob);
            var img = new Image();
            img.onload = function () {
              var w = img.naturalWidth || img.width;
              var h = img.naturalHeight || img.height;
              if (!w || !h) { URL.revokeObjectURL(url); reject(new Error('decode')); return; }
              resolve({ src: img, w: w, h: h, close: function () { URL.revokeObjectURL(url); } });
            };
            img.onerror = function () { URL.revokeObjectURL(url); reject(new Error('decode')); };
            img.src = url;
          });
        }
        if (typeof createImageBitmap === 'function' && blob.type !== 'image/svg+xml') {
          return createImageBitmap(blob, { imageOrientation: 'from-image' })
            .then(function (bmp) {
              return { src: bmp, w: bmp.width, h: bmp.height, close: function () { if (bmp.close) bmp.close(); } };
            })
            .catch(viaImg);
        }
        return viaImg();
      }

      /**
       * 规范化文本：统一换行、制表符换 4 个空格、去掉其它控制字符。
       * @param {string} s 原文
       * @returns {string} 规范化后的文本
       */
      function normalizeText(s) {
        var out = '';
        var str = String(s || '');
        if (str.charCodeAt(0) === 0xFEFF) str = str.slice(1);
        for (var i = 0; i < str.length; i++) {
          var c = str.charCodeAt(i);
          if (c === 13) {
            out += String.fromCharCode(10);
            if (str.charCodeAt(i + 1) === 10) i++;
          } else if (c === 9) {
            out += '    ';
          } else if (c === 10 || c >= 32) {
            out += str.charAt(i);
          }
        }
        return out;
      }

      /**
       * 解析页码范围（如 "1-3, 5, 8-"；也可倒序 "5-1"）；空 = 全部页。
       * @param {string} raw 用户输入
       * @param {number} n 文件总页数
       * @returns {number[]|null} 从 0 开始的页序号；格式或越界错误时为 null
       */
      function parseRange(raw, n) {
        var s = String(raw || '').split(' ').join('').split('–').join('-').split('—').join('-');
        if (!s) {
          var all = [];
          for (var a = 0; a < n; a++) all.push(a);
          return all;
        }
        var out = [];
        var parts = s.split(/[,;]/);
        for (var i = 0; i < parts.length; i++) {
          var part = parts[i];
          if (!part) continue;
          var m = /^([0-9]*)-([0-9]*)$/.exec(part);
          var from;
          var to;
          if (m) {
            from = m[1] ? parseInt(m[1], 10) : 1;
            to = m[2] ? parseInt(m[2], 10) : n;
          } else if (/^[0-9]+$/.test(part)) {
            from = to = parseInt(part, 10);
          } else {
            return null;
          }
          if (from < 1 || to < 1 || from > n || to > n) return null;
          var step = from <= to ? 1 : -1;
          for (var p = from; step > 0 ? p <= to : p >= to; p += step) out.push(p - 1);
        }
        return out.length ? out : null;
      }

      /**
       * 生成或锁定期间禁用控件。
       * @param {boolean} on 是否锁定
       */
      function lock(on) {
        busy = on;
        [btnCombine, btnSample, btnClear, btnSort, fileInput, sizeEl, marginEl, nameEl, duplexEl, shrinkEl].forEach(function (el) {
          el.disabled = on;
        });
        listEl.querySelectorAll('input, button').forEach(function (el) { el.disabled = on; });
        if (!on) renderList();
        btnDownload.disabled = on || !resultBytes;
        btnCombine.setAttribute('aria-busy', String(on));
      }

      /** 刷新 HUD 已用时。 */
      function tickTime() {
        var sec = Math.max(0, Math.floor((Date.now() - startedAt) / 1000));
        timeEl.textContent = fill(msg.elapsed, { s: String(sec) });
      }

      /**
       * 更新进度 HUD。
       * @param {number} pct 0–100
       * @param {string} stepKey read|add|save
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
        var order = ['read', 'add', 'save'];
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

      /** 作废上次合并结果（列表或设置变化后需重新合并）。 */
      function clearResult() {
        resultBytes = null;
        btnDownload.disabled = true;
        statsEl.style.display = 'none';
        statsEl.textContent = '';
        preview.clearPreview();
      }

      /** 重新渲染文件列表（序号、类型、名称、信息、PDF 页码范围、上移 / 下移 / 删除）。 */
      function renderList() {
        listEl.innerHTML = '';
        listWrap.hidden = items.length === 0;
        items.forEach(function (item, idx) {
          var meta = item.kind === 'pdf'
            ? fill(msg.pagesTpl, { n: item.pages })
            : item.kind === 'image'
              ? fill(msg.imageTpl, { w: item.w, h: item.h })
              : fill(msg.linesTpl, { n: item.lines });
          var li = document.createElement('li');
          li.className = 'cfp-file-item';
          li.innerHTML =
            '<span class="badge text-bg-secondary cfp-kind">' + escapeHtml(KIND_LABEL[item.kind]) + '</span>' +
            '<span class="cfp-file-main"><span class="cfp-file-name">' + escapeHtml(item.file.name || ('#' + (idx + 1))) + '</span>' +
            '<span class="cfp-file-meta">' + escapeHtml(meta + ' · ' + formatBytes(item.file.size)) + '</span></span>' +
            (item.kind === 'pdf'
              ? '<input type="text" class="form-control form-control-sm cfp-range" data-id="' + escapeHtml(item.id) + '"' +
                ' placeholder="' + escapeHtml(msg.rangePh) + '" title="' + escapeHtml(msg.rangeLabel) + '" aria-label="' + escapeHtml(msg.rangeLabel) + '"' +
                ' value="' + escapeHtml(item.range) + '" autocomplete="off">'
              : '') +
            '<span class="cfp-file-actions">' +
            '<button type="button" class="btn btn-outline-secondary btn-sm cfp-up" data-id="' + escapeHtml(item.id) + '" title="' + escapeHtml(msg.moveUp) + '" aria-label="' + escapeHtml(msg.moveUp) + '"' + (idx === 0 ? ' disabled' : '') + '>&#8593;</button>' +
            '<button type="button" class="btn btn-outline-secondary btn-sm cfp-down" data-id="' + escapeHtml(item.id) + '" title="' + escapeHtml(msg.moveDown) + '" aria-label="' + escapeHtml(msg.moveDown) + '"' + (idx === items.length - 1 ? ' disabled' : '') + '>&#8595;</button>' +
            '<button type="button" class="btn btn-outline-danger btn-sm cfp-remove" data-id="' + escapeHtml(item.id) + '" title="' + escapeHtml(msg.remove) + '" aria-label="' + escapeHtml(msg.remove) + '">&times;</button>' +
            '</span>';
          listEl.appendChild(li);
        });
      }

      /** 汇总跳过文件与体积警告。 */
      function refreshWarnings() {
        var warns = [];
        if (skippedNames.length) warns.push(fill(msg.warnSkipped, { names: skippedNames.join(', ') }));
        var total = 0;
        items.forEach(function (it) { total += it.file.size || 0; });
        if (total > SOFT_TOTAL_BYTES) warns.push(msg.warnLarge);
        setWarn(warns.join(' '));
      }

      /**
       * 读取单个文件的元信息（PDF 页数 / 图片尺寸 / 文本行数）。
       * @param {File} f 文件
       * @param {'pdf'|'image'|'text'} kind 类别
       * @returns {Promise<QueueItem>} 队列项；读取失败时 reject 并带本地化错误文案
       */
      function readItem(f, kind) {
        var item = { id: 'f' + (nextId++), file: f, kind: kind, pages: 0, w: 0, h: 0, lines: 0, range: '', sub: kind === 'image' ? imageSub(f) : '' };
        var name = f.name || 'file';
        if (kind === 'pdf') {
          return f.arrayBuffer()
            .then(function (ab) { return PDFLib.PDFDocument.load(ab, { updateMetadata: false }); })
            .then(function (doc) { item.pages = doc.getPageCount(); return item; })
            .catch(function (err) {
              var s = String(err && err.message ? err.message : err);
              throw new Error(/encrypt/i.test(s) ? fill(msg.errEncrypted, { name: name }) : fill(msg.errPdf, { name: name }));
            });
        }
        if (kind === 'image') {
          return decodeImage(f)
            .then(function (d) { item.w = d.w; item.h = d.h; d.close(); return item; })
            .catch(function () { throw new Error(fill(msg.errImage, { name: name })); });
        }
        return f.text()
          .then(function (txt) { item.lines = normalizeText(txt).split(String.fromCharCode(10)).length; return item; })
          .catch(function () { throw new Error(fill(msg.errText, { name: name })); });
      }

      /**
       * 追加文件到队列（不清空已有项）；不支持的类型跳过并提示，读取失败的文件逐个点名。
       * @param {FileList|File[]} fileList 新选择或拖入的文件
       * @returns {Promise<void>}
       */
      function addFiles(fileList) {
        if (!hasPdfLib()) { setError(msg.warnPdflib); return Promise.resolve(); }
        var arr = Array.prototype.slice.call(fileList || []);
        if (!arr.length) return Promise.resolve();
        var myEpoch = epoch;
        skippedNames = [];
        addErrors = [];
        setError('');
        clearResult();
        var chain = Promise.resolve();
        arr.forEach(function (f) {
          var kind = detectKind(f);
          if (!kind) { skippedNames.push(f.name || '?'); return; }
          chain = chain.then(function () {
            return readItem(f, kind).then(function (item) {
              if (myEpoch === epoch) items.push(item);
            }, function (err) {
              addErrors.push(String(err && err.message ? err.message : err));
            });
          });
        });
        return chain.then(function () {
          if (myEpoch !== epoch) return;
          renderList();
          refreshWarnings();
          setError(addErrors.join(' '));
        });
      }

      /**
       * 把图片转成可嵌入 PDF 的 JPEG / PNG 字节：JPEG、PNG 无需改动时原样嵌入；
       * 需要按 EXIF 摆正、缩小或格式不受 pdf-lib 支持时经画布重绘。
       * @param {QueueItem} item 图片项
       * @param {Uint8Array} bytes 原始字节
       * @param {number} maxEdge 最长边上限（0 = 不缩小）
       * @returns {Promise<{ bytes: Uint8Array, type: 'jpg'|'png' }>}
       */
      function prepareImage(item, bytes, maxEdge) {
        var needShrink = maxEdge > 0 && Math.max(item.w, item.h) > maxEdge;
        if (item.sub === 'png' && !needShrink) return Promise.resolve({ bytes: bytes, type: 'png' });
        if (item.sub === 'jpg' && !needShrink && jpegOrientation(bytes) === 1) return Promise.resolve({ bytes: bytes, type: 'jpg' });
        return decodeImage(item.file).then(function (d) {
          var scale = needShrink ? maxEdge / Math.max(d.w, d.h) : 1;
          var cw = Math.max(1, Math.round(d.w * scale));
          var ch = Math.max(1, Math.round(d.h * scale));
          var canvas = document.createElement('canvas');
          canvas.width = cw;
          canvas.height = ch;
          var ctx = canvas.getContext('2d');
          /** 透明 PNG / GIF / SVG 保留 PNG；JPEG、WebP、AVIF、BMP 铺白底后存 JPEG（体积小，页面本来就是白色）。 */
          var asPng = item.sub === 'png' || /[.](gif|svg)$/i.test(item.file.name || '') || item.file.type === 'image/gif' || item.file.type === 'image/svg+xml';
          if (!asPng) {
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(0, 0, cw, ch);
          }
          ctx.drawImage(d.src, 0, 0, cw, ch);
          d.close();
          return new Promise(function (resolve, reject) {
            canvas.toBlob(function (blob) {
              if (!blob) { reject(new Error('canvas')); return; }
              blob.arrayBuffer().then(function (ab) {
                resolve({ bytes: new Uint8Array(ab), type: asPng ? 'png' : 'jpg' });
              }, reject);
            }, asPng ? 'image/png' : 'image/jpeg', 0.9);
          });
        });
      }

      /**
       * 计算图片或文本页的纸张尺寸（点）。
       * @param {number} w 内容宽（像素，用于判断横竖与「同尺寸」）
       * @param {number} h 内容高
       * @param {number} margin 边距（点）
       * @returns {number[]} [页宽, 页高]
       */
      function pageSizeFor(w, h, margin) {
        if (sizeEl.value === 'fit') return [w * PT_PER_PX + margin * 2, h * PT_PER_PX + margin * 2];
        var base = PAPER[sizeEl.value] || PAPER.a4;
        return w > h ? [base[1], base[0]] : [base[0], base[1]];
      }

      /**
       * 把一个图片项加成一页：在边距内按比例居中放到最大。
       * @param {any} doc 目标 PDFDocument
       * @param {QueueItem} item 图片项
       * @param {Uint8Array} bytes 原始字节
       * @returns {Promise<void>}
       */
      function addImagePage(doc, item, bytes) {
        var margin = parseInt(marginEl.value, 10) * PT_PER_MM;
        return prepareImage(item, bytes, parseInt(shrinkEl.value, 10) || 0).then(function (prep) {
          return prep.type === 'png' ? doc.embedPng(prep.bytes) : doc.embedJpg(prep.bytes);
        }).then(function (img) {
          var size = pageSizeFor(item.w, item.h, margin);
          var page = doc.addPage(size);
          var innerW = size[0] - margin * 2;
          var innerH = size[1] - margin * 2;
          var s = Math.min(innerW / item.w, innerH / item.h);
          var dw = item.w * s;
          var dh = item.h * s;
          page.drawImage(img, { x: (size[0] - dw) / 2, y: (size[1] - dh) / 2, width: dw, height: dh });
        }, function () {
          throw new Error(fill(msg.errImage, { name: item.file.name || '' }));
        });
      }

      /**
       * 把文本文件排成若干页：Latin-1 文字保留为可选中的文字，其它文字（中文、阿拉伯文等）逐行栅格化。
       * @param {any} doc 目标 PDFDocument
       * @param {QueueItem} item 文本项
       * @param {Uint8Array} bytes UTF-8 字节
       * @param {any} font 已嵌入的 Helvetica
       * @returns {Promise<void>}
       */
      function addTextPages(doc, item, bytes, font) {
        var text = normalizeText(new TextDecoder('utf-8').decode(bytes));
        var margin = Math.max(parseInt(marginEl.value, 10), TEXT_MIN_MARGIN_MM) * PT_PER_MM;
        var base = PAPER[sizeEl.value] || PAPER.a4;
        var pw = base[0];
        var ph = base[1];
        var innerW = pw - margin * 2;
        var lines = window.OftPdfWork.wrapTextLines(text, TEXT_SIZE, innerW, font);
        var perPage = Math.max(1, Math.floor((ph - margin * 2) / TEXT_LINE));
        var chain = Promise.resolve();
        for (var start = 0; start < lines.length; start += perPage) {
          (function (chunk) {
            chain = chain.then(function () {
              var page = doc.addPage([pw, ph]);
              var y = ph - margin - TEXT_SIZE;
              var inner = Promise.resolve();
              chunk.forEach(function (line, k) {
                inner = inner.then(function () {
                  if (!line) return null;
                  return window.OftPdfWork.drawPageText(doc, page, line, {
                    x: margin,
                    y: y - k * TEXT_LINE,
                    size: TEXT_SIZE,
                    font: font,
                    color: PDFLib.rgb(0.1, 0.1, 0.12),
                  });
                });
              });
              return inner.then(function () { return window.OftPdfWork.yieldUi(); });
            });
          })(lines.slice(start, start + perPage));
        }
        return chain;
      }

      /**
       * 合并整个队列：校验页码范围 → 读取字节 → 逐个加入 → 保存；成功后显示统计与预览。
       * @returns {Promise<void>}
       */
      function combine() {
        if (busy) return Promise.resolve();
        setError('');
        if (!hasPdfLib()) { setError(msg.warnPdflib); return Promise.resolve(); }
        if (!items.length) { setError(msg.empty); return Promise.resolve(); }
        /** 先校验全部 PDF 页码范围，错误时不开始合并。 */
        var ranges = {};
        for (var r = 0; r < items.length; r++) {
          var it = items[r];
          if (it.kind !== 'pdf') continue;
          var idx = parseRange(it.range, it.pages);
          if (!idx) {
            setError(fill(msg.errRange, { name: it.file.name || '', range: it.range, n: it.pages }));
            return Promise.resolve();
          }
          ranges[it.id] = idx;
        }
        clearResult();
        lock(true);
        setStatus('');
        startedAt = Date.now();
        tickTime();
        tickTimer = setInterval(tickTime, 500);
        var queue = items.slice();
        var n = queue.length;
        var datas = [];
        var doc = null;
        var font = null;
        var failName = '';
        progress(1, 'read', fill(msg.readStep, { i: 1, n: n }));
        var chain = window.OftPdfWork.yieldUi();
        queue.forEach(function (item, i) {
          chain = chain.then(function () {
            progress(1 + (i / n) * 19, 'read', fill(msg.readStep, { i: i + 1, n: n }));
            return item.file.arrayBuffer().then(function (ab) { datas[i] = new Uint8Array(ab); });
          });
        });
        chain = chain.then(function () {
          return PDFLib.PDFDocument.create().then(function (d) {
            doc = d;
            return doc.embedFont(PDFLib.StandardFonts.Helvetica);
          }).then(function (f) { font = f; });
        });
        queue.forEach(function (item, i) {
          chain = chain.then(function () {
            failName = item.file.name || '';
            progress(20 + (i / n) * 70, 'add', fill(msg.addStep, { i: i + 1, n: n, name: failName }));
            return window.OftPdfWork.yieldUi().then(function () {
              /** 双面打印：前面页数为奇数时补一张空白页，让本文件从正面开始。 */
              var count = doc.getPageCount();
              if (duplexEl.checked && i > 0 && count % 2 === 1) {
                var last = doc.getPage(count - 1).getSize();
                doc.addPage([last.width, last.height]);
              }
              if (item.kind === 'pdf') {
                return PDFLib.PDFDocument.load(datas[i], { updateMetadata: false }).then(function (src) {
                  return doc.copyPages(src, ranges[item.id]);
                }).then(function (pages) {
                  pages.forEach(function (pg) { doc.addPage(pg); });
                }, function (err) {
                  var s = String(err && err.message ? err.message : err);
                  throw new Error(/encrypt/i.test(s) ? fill(msg.errEncrypted, { name: failName }) : fill(msg.errPdf, { name: failName }));
                });
              }
              if (item.kind === 'image') return addImagePage(doc, item, datas[i]);
              return addTextPages(doc, item, datas[i], font);
            }).then(function () { datas[i] = null; });
          });
        });
        return chain
          .then(function () {
            progress(92, 'save', msg.saveStep);
            doc.setTitle(String(nameEl.value || '').trim().replace(/[.]pdf$/i, '') || DEFAULTS.name);
            doc.setProducer('onlinefreetools.org / pdf-lib');
            doc.setCreator('onlinefreetools.org — Combine files into one PDF');
            return window.OftPdfWork.yieldUi().then(function () { return doc.save(); });
          })
          .then(function (bytes) {
            resultBytes = new Uint8Array(bytes);
            endHud(true);
            setStatus(msg.done);
            statsEl.textContent = fill(msg.statsTpl, { pages: doc.getPageCount(), files: n, bytes: formatBytes(resultBytes.byteLength) });
            statsEl.style.display = '';
            lock(false);
            return preview.showPreview(resultBytes).catch(function () {});
          })
          .catch(function (err) {
            var s = String(err && err.message ? err.message : err);
            endHud(false);
            resultBytes = null;
            setError(s && s.indexOf(failName) >= 0 && failName ? s : msg.errSave);
            lock(false);
          });
      }

      /** 下载合并结果；文件名去掉非法字符并补 .pdf。 */
      function downloadResult() {
        if (!resultBytes) return;
        var base = String(nameEl.value || '').trim().replace(/[.]pdf$/i, '').replace(/[\\\\/:*?"<>|]+/g, '-') || DEFAULTS.name;
        var blob = new Blob([resultBytes], { type: 'application/pdf' });
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = base + '.pdf';
        document.body.appendChild(a);
        a.click();
        a.remove();
        setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
      }

      /** 恢复默认设置。 */
      function resetSettings() {
        sizeEl.value = DEFAULTS.size;
        marginEl.value = DEFAULTS.margin;
        nameEl.value = DEFAULTS.name;
        duplexEl.checked = DEFAULTS.duplex;
        shrinkEl.value = DEFAULTS.shrink;
      }

      /**
       * 真正清空：移除全部文件、作废结果、恢复默认设置；不重新加载样例。
       */
      function clearAll() {
        epoch += 1;
        if (tickTimer) { clearInterval(tickTimer); tickTimer = 0; }
        items = [];
        skippedNames = [];
        addErrors = [];
        fileInput.value = '';
        renderList();
        clearResult();
        setError('');
        setWarn('');
        setStatus('');
        hud.hidden = true;
        hud.classList.remove('is-on', 'is-done', 'is-error');
        resetSettings();
      }

      /**
       * 画样例柱状图（900 × 560 PNG）。
       * @returns {Promise<File|null>}
       */
      function makeSampleChart() {
        return new Promise(function (resolve) {
          var c = document.createElement('canvas');
          c.width = 900;
          c.height = 560;
          var ctx = c.getContext('2d');
          if (!ctx) { resolve(null); return; }
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(0, 0, 900, 560);
          ctx.fillStyle = '#0f172a';
          ctx.font = 'bold 30px sans-serif';
          ctx.fillText('Sales by quarter', 48, 64);
          var vals = [42, 58, 51, 73];
          var colors = ['#2563eb', '#16a34a', '#f59e0b', '#dc2626'];
          ctx.fillStyle = '#94a3b8';
          ctx.fillRect(80, 480, 760, 3);
          vals.forEach(function (v, i) {
            var h = v * 5;
            ctx.fillStyle = colors[i];
            ctx.fillRect(120 + i * 180, 480 - h, 110, h);
            ctx.fillStyle = '#0f172a';
            ctx.font = '22px sans-serif';
            ctx.fillText('Q' + (i + 1), 158 + i * 180, 515);
            ctx.fillText(String(v), 158 + i * 180, 470 - h);
          });
          c.toBlob(function (blob) {
            resolve(blob ? new File([blob], 'sales-chart.png', { type: 'image/png' }) : null);
          }, 'image/png');
        });
      }

      /**
       * 生成样例 PDF：2 页 A4 报告。
       * @returns {Promise<File>}
       */
      function makeSamplePdf() {
        var doc;
        return PDFLib.PDFDocument.create().then(function (d) {
          doc = d;
          return doc.embedFont(PDFLib.StandardFonts.HelveticaBold);
        }).then(function (bold) {
          return doc.embedFont(PDFLib.StandardFonts.Helvetica).then(function (reg) {
            for (var p = 1; p <= 2; p++) {
              var page = doc.addPage(PAPER.a4);
              page.drawText('Quarterly report', { x: 72, y: 760, size: 26, font: bold, color: PDFLib.rgb(0.06, 0.09, 0.16) });
              page.drawText('Page ' + p + ' of 2', { x: 72, y: 728, size: 12, font: reg, color: PDFLib.rgb(0.4, 0.45, 0.5) });
              page.drawText(p === 1 ? 'Summary: revenue grew in three of four quarters.' : 'Details: see the chart and meeting notes that follow.', { x: 72, y: 680, size: 13, font: reg });
            }
            return doc.save();
          });
        }).then(function (bytes) {
          return new File([bytes], 'report.pdf', { type: 'application/pdf' });
        });
      }

      /**
       * 样例：2 页 PDF 报告 + PNG 柱状图 + 文本笔记 → 合并成 4 页 PDF（A4、10 mm 边距）；自动运行。
       * @returns {Promise<void>}
       */
      function loadSample() {
        clearAll();
        if (!hasPdfLib()) { setError(msg.warnPdflib); return Promise.resolve(); }
        var nl = String.fromCharCode(10);
        var notes = ['Meeting notes', '', '- Q4 was the strongest quarter (73).', '- Q2 to Q3 dipped from 58 to 51.', '- Next step: send the combined PDF to the team.'].join(nl);
        var txt = new File([notes], 'meeting-notes.txt', { type: 'text/plain' });
        return Promise.all([makeSamplePdf(), makeSampleChart()])
          .then(function (files) { return addFiles([files[0], files[1], txt].filter(Boolean)); })
          .then(function () { if (items.length) return combine(); });
      }

      /** 文件列表：上移 / 下移 / 删除。 */
      listEl.addEventListener('click', function (e) {
        var tEl = e.target;
        if (!tEl || !tEl.closest || busy) return;
        var btn = tEl.closest('.cfp-up, .cfp-down, .cfp-remove');
        if (!btn) return;
        var id = btn.getAttribute('data-id');
        var idx = items.findIndex(function (it) { return it.id === id; });
        if (idx < 0) return;
        if (btn.classList.contains('cfp-up') && idx > 0) {
          var tmp = items[idx - 1];
          items[idx - 1] = items[idx];
          items[idx] = tmp;
        } else if (btn.classList.contains('cfp-down') && idx < items.length - 1) {
          var tmp2 = items[idx + 1];
          items[idx + 1] = items[idx];
          items[idx] = tmp2;
        } else if (btn.classList.contains('cfp-remove')) {
          items.splice(idx, 1);
          refreshWarnings();
        }
        renderList();
        clearResult();
      });

      /** PDF 页码范围：输入即保存，作废旧结果。 */
      listEl.addEventListener('input', function (e) {
        var el = e.target;
        if (!el || !el.classList || !el.classList.contains('cfp-range')) return;
        var it = items.find(function (x) { return x.id === el.getAttribute('data-id'); });
        if (!it) return;
        it.range = el.value;
        clearResult();
      });

      /** 按文件名自然排序（scan-2 排在 scan-10 前）。 */
      btnSort.addEventListener('click', function () {
        items.sort(function (a, b) {
          return String(a.file.name || '').localeCompare(String(b.file.name || ''), undefined, { numeric: true, sensitivity: 'base' });
        });
        renderList();
        clearResult();
      });

      /** 任一设置变化：作废结果，需重新合并（文件名只影响下载名，不作废）。 */
      [sizeEl, marginEl, duplexEl, shrinkEl].forEach(function (el) {
        el.addEventListener('change', clearResult);
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

      btnCombine.addEventListener('click', function () { combine(); });
      btnDownload.addEventListener('click', downloadResult);
      btnSample.addEventListener('click', function () { loadSample(); });
      btnClear.addEventListener('click', clearAll);

      /** 进页：首帧绘制后自动跑样例（pdf-lib 已同步加载）。 */
      if (typeof requestAnimationFrame === 'function') {
        requestAnimationFrame(function () { setTimeout(loadSample, 0); });
      } else {
        setTimeout(loadSample, 0);
      }
    })();
  </script>`;

	const toolMeta = getToolBySlug('combine-files-into-one-pdf');
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
