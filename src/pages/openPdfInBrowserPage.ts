/**
 * 在浏览器中打开 PDF：pdf.js 阅读器（纯客户端）。
 * slug: open-pdf-in-browser（见 work-tasks/open-pdf-in-browser/02-tool-info.md）。
 *
 * 交互要点（2026-10-14 改写）：
 * - 文档只解析一次；翻页（按钮 / 页码框 / 键盘）、缩放（适合宽度 / 整页 / 百分比）、旋转、全屏；
 * - 全文查找：逐页读取文本层，列出命中页并依次跳转；扫描页无文本时说明原因；
 * - 加密 PDF：识别「需要密码 / 密码错误」，在页内输入密码后打开；
 * - 文档信息：文件名、大小、页数、PDF 版本、当前页尺寸（mm / in + A4/Letter 等）、标题 / 作者 / 生成工具、当前页是否有可选文字；
 * - 「在新标签页用浏览器自带阅读器打开」。
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
import { pdfWorkUiClientScript, pdfWorkUiCss, pdfWorkUiLabels, pdfWorkUiProgressHtml } from './site/pdfWorkUi';

/** 本工具 i18n 键前缀。 */
const PREFIX = 'tool_open_pdf_in_browser';

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
 * 渲染 open-pdf-in-browser 工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 * @returns 完整页面 HTML
 */
export const renderOpenPdfInBrowserPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 读取本工具键（自动拼前缀）。 */
	const tx = (key: string) => t(opts.lang, `${PREFIX}_${key}` as keyof typeof import('../site/i18n/en').default);

	const toolPath = '/tools/open-pdf-in-browser';
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
			currentSlug: 'open-pdf-in-browser',
			currentAnchor: '#converter',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });
	const pdfWorkLabels = pdfWorkUiLabels(opts.lang);

	/** 缩放选项：[值, 显示文字]；width / page 为自适应。 */
	const zoomChoices: Array<[string, string]> = [
		['width', tx('zoom_width')],
		['page', tx('zoom_page')],
		['0.5', '50%'],
		['0.75', '75%'],
		['1', '100%'],
		['1.25', '125%'],
		['1.5', '150%'],
		['2', '200%'],
		['3', '300%'],
	];

	/** 页内样式：工具栏、阅读区、信息表。 */
	const extraHeadHtml = `
  <style>
    ${pdfWorkUiCss()}
    .tools-bar { gap: .5rem; }
    .opv-bar { display:flex; flex-wrap:wrap; gap:.5rem; align-items:center; margin-bottom:.5rem; }
    .opv-group { display:flex; gap:.25rem; align-items:center; }
    .opv-page-input { width: 4.5rem; text-align: center; }
    .opv-find-input { width: 14rem; max-width: 100%; }
    #opvViewer { overflow:auto; max-height: 75vh; border:1px solid #dee2e6; border-radius:.25rem; background:#e9ecef; padding:.75rem; outline:none; }
    #opvViewer:focus-visible { box-shadow: 0 0 0 .2rem rgba(13,110,253,.35); }
    #opvViewer:fullscreen { max-height:none; background:#495057; }
    #opvCanvas { display:block; margin:0 auto; background:#fff; box-shadow: 0 1px 4px rgba(0,0,0,.25); }
    .opv-info { width:100%; font-size:.9rem; border-collapse:collapse; }
    .opv-info th { text-align:start; font-weight:500; color:#495057; padding:.25rem .75rem .25rem 0; white-space:nowrap; vertical-align:top; width:1%; }
    .opv-info td { padding:.25rem 0; word-break:break-word; }
    #opvPwdRow[hidden] { display:none !important; }
  </style>`;

	const contentHtml = `
    <div id="converter" class="tool-page-heading mb-3">
      <h1 class="h4 mb-0">${escapeHtml(tx('title'))}</h1>
    </div>

    <label class="tool-dropzone mb-3" for="opvFile">
      <input type="file" id="opvFile" accept="application/pdf,.pdf">
      <span class="tool-dropzone-title">${escapeHtml(tx('choose_file'))}</span>
      <span class="tool-dropzone-hint">${escapeHtml(tx('drop_hint'))}</span>
      <span id="opvFileName" class="tool-dropzone-file"></span>
    </label>

    <div id="opvPwdRow" class="opv-bar" hidden>
      <label class="small" for="opvPwd" id="opvPwdLabel">${escapeHtml(tx('password_label'))}</label>
      <input type="password" id="opvPwd" class="form-control form-control-sm" style="width:14rem" autocomplete="off">
      <button type="button" id="opvPwdBtn" class="btn btn-primary btn-sm">${escapeHtml(tx('password_btn'))}</button>
    </div>

    <div class="opv-bar">
      <div class="opv-group">
        <button type="button" id="opvPrev" class="btn btn-outline-secondary btn-sm" disabled>${escapeHtml(tx('prev'))}</button>
        <label class="small mb-0" for="opvPage">${escapeHtml(tx('page_label'))}</label>
        <input type="number" id="opvPage" class="form-control form-control-sm opv-page-input" min="1" value="1" disabled>
        <span id="opvPageTotal" class="small text-muted"></span>
        <button type="button" id="opvNext" class="btn btn-outline-secondary btn-sm" disabled>${escapeHtml(tx('next'))}</button>
      </div>
      <div class="opv-group">
        <button type="button" id="opvZoomOut" class="btn btn-outline-secondary btn-sm" title="${escapeHtml(tx('zoom_out'))}" aria-label="${escapeHtml(tx('zoom_out'))}">−</button>
        <select id="opvZoom" class="form-select form-select-sm" aria-label="${escapeHtml(tx('zoom_label'))}" style="width:auto">
          ${zoomChoices.map(([value, label]) => `<option value="${value}"${value === 'width' ? ' selected' : ''}>${escapeHtml(label)}</option>`).join('')}
        </select>
        <button type="button" id="opvZoomIn" class="btn btn-outline-secondary btn-sm" title="${escapeHtml(tx('zoom_in'))}" aria-label="${escapeHtml(tx('zoom_in'))}">+</button>
      </div>
      <button type="button" id="opvRotate" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx('rotate'))}</button>
      <button type="button" id="opvFull" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx('fullscreen'))}</button>
      <button type="button" id="opvOpenTab" class="btn btn-outline-secondary btn-sm" disabled>${escapeHtml(tx('open_tab'))}</button>
    </div>

    <form id="opvFindForm" class="opv-bar" novalidate>
      <label class="small mb-0" for="opvFind">${escapeHtml(tx('find_label'))}</label>
      <input type="search" id="opvFind" class="form-control form-control-sm opv-find-input" placeholder="${escapeHtml(tx('find_ph'))}" autocomplete="off">
      <button type="submit" id="opvFindBtn" class="btn btn-outline-primary btn-sm">${escapeHtml(tx('find_btn'))}</button>
      <span id="opvFindOut" class="small text-muted" role="status" aria-live="polite"></span>
    </form>

    <div class="d-flex align-items-center tools-bar mb-2 flex-wrap">
      <button type="button" id="opvSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx('sample'))}</button>
      <button type="button" id="opvClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx('clear'))}</button>
      <span class="small text-muted">${escapeHtml(tx('keys_hint'))}</span>
    </div>

    <p id="opvError" class="small text-danger mb-2" style="display:none;" role="alert"></p>
    <p id="opvWarn" class="small text-warning mb-2" style="display:none;" role="status"></p>
    ${pdfWorkUiProgressHtml({ idPrefix: 'opvPdf', labels: pdfWorkLabels })}

    <div id="opvViewer" class="mb-3" tabindex="0" aria-label="${escapeHtml(tx('viewer_label'))}">
      <canvas id="opvCanvas"></canvas>
    </div>

    <details class="mb-3" id="opvInfoBox" open>
      <summary>${escapeHtml(tx('info_title'))}</summary>
      <table class="opv-info mt-2">
        <tbody>
          <tr><th scope="row">${escapeHtml(tx('info_file'))}</th><td id="opvInfoFile">—</td></tr>
          <tr><th scope="row">${escapeHtml(tx('info_size'))}</th><td id="opvInfoSize">—</td></tr>
          <tr><th scope="row">${escapeHtml(tx('info_pages'))}</th><td id="opvInfoPages">—</td></tr>
          <tr><th scope="row">${escapeHtml(tx('info_version'))}</th><td id="opvInfoVersion">—</td></tr>
          <tr><th scope="row">${escapeHtml(tx('info_page_size'))}</th><td id="opvInfoPageSize">—</td></tr>
          <tr><th scope="row">${escapeHtml(tx('info_text'))}</th><td id="opvInfoText">—</td></tr>
          <tr><th scope="row">${escapeHtml(tx('info_doc_title'))}</th><td id="opvInfoTitle">—</td></tr>
          <tr><th scope="row">${escapeHtml(tx('info_author'))}</th><td id="opvInfoAuthor">—</td></tr>
          <tr><th scope="row">${escapeHtml(tx('info_producer'))}</th><td id="opvInfoProducer">—</td></tr>
        </tbody>
      </table>
    </details>

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
			{ label: tx('ref_a_label'), href: 'https://mozilla.github.io/pdf.js/' },
			{ label: tx('ref_b_label'), href: 'https://pdfa.org/resource/iso-32000-2/' },
		],
	});

	/** 前端脚本需要的文案（一次性注入）。 */
	const clientText = {
		pageTotal: tx('page_total_tpl'),
		errLoad: tx('err_load'),
		errPdfjs: tx('err_pdfjs'),
		errSample: tx('err_sample'),
		errType: tx('err_type'),
		pwdNeed: tx('password_need'),
		pwdWrong: tx('password_wrong'),
		warnLarge: tx('warn_large'),
		findResult: tx('find_result_tpl'),
		findNone: tx('find_none_tpl'),
		findEmpty: tx('find_empty'),
		findSearching: tx('find_searching_tpl'),
		findNoDoc: tx('find_no_doc'),
		textYes: tx('text_yes'),
		textNo: tx('text_no'),
		portrait: tx('orient_portrait'),
		landscape: tx('orient_landscape'),
		square: tx('orient_square'),
		fullExit: tx('fullscreen_exit'),
		fullEnter: tx('fullscreen'),
	};

	/**
	 * 客户端脚本：pdf.js 打开一次文档 → 渲染当前页（高 DPI）；查找、密码、信息表、全屏、新标签页。
	 */
	const extraBodyHtml = `
  ${pdfWorkUiClientScript()}
  <script src="/vendor/pdf-lib/pdf-lib.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script>
    (function () {
      /** 超过此字节数时软警告。 */
      var SOFT_BYTES = 100 * 1024 * 1024;
      /** 缩放阶梯（+ / − 按钮在此间跳）。 */
      var ZOOM_STEPS = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 2, 3, 4];
      /** 常见纸张尺寸（mm，竖向）；与页面尺寸相差 ≤ 2 mm 视为同一种。 */
      var PAPER = [
        ['A3', 297, 420], ['A4', 210, 297], ['A5', 148, 210], ['A6', 105, 148],
        ['B5', 176, 250], ['Letter', 215.9, 279.4], ['Legal', 215.9, 355.6], ['Tabloid', 279.4, 431.8]
      ];
      /** 当前页面语言（数字格式）。 */
      var LANG = ${JSON.stringify(opts.lang)};
      /** 本地化文案字典。 */
      var T = ${JSON.stringify(clientText)};

      /** 页面控件。 */
      var fileInput = document.getElementById('opvFile');
      var fileNameEl = document.getElementById('opvFileName');
      var pwdRow = document.getElementById('opvPwdRow');
      var pwdLabel = document.getElementById('opvPwdLabel');
      var pwdEl = document.getElementById('opvPwd');
      var pwdBtn = document.getElementById('opvPwdBtn');
      var btnPrev = document.getElementById('opvPrev');
      var btnNext = document.getElementById('opvNext');
      var pageEl = document.getElementById('opvPage');
      var pageTotalEl = document.getElementById('opvPageTotal');
      var zoomEl = document.getElementById('opvZoom');
      var btnZoomOut = document.getElementById('opvZoomOut');
      var btnZoomIn = document.getElementById('opvZoomIn');
      var btnRotate = document.getElementById('opvRotate');
      var btnFull = document.getElementById('opvFull');
      var btnOpenTab = document.getElementById('opvOpenTab');
      var findForm = document.getElementById('opvFindForm');
      var findEl = document.getElementById('opvFind');
      var findOut = document.getElementById('opvFindOut');
      var btnSample = document.getElementById('opvSample');
      var btnClear = document.getElementById('opvClear');
      var errEl = document.getElementById('opvError');
      var warnEl = document.getElementById('opvWarn');
      var viewer = document.getElementById('opvViewer');
      var canvas = document.getElementById('opvCanvas');
      var info = {
        file: document.getElementById('opvInfoFile'),
        size: document.getElementById('opvInfoSize'),
        pages: document.getElementById('opvInfoPages'),
        version: document.getElementById('opvInfoVersion'),
        pageSize: document.getElementById('opvInfoPageSize'),
        text: document.getElementById('opvInfoText'),
        title: document.getElementById('opvInfoTitle'),
        author: document.getElementById('opvInfoAuthor'),
        producer: document.getElementById('opvInfoProducer')
      };
      /** 共用进度条（pdfWorkUi）。 */
      var work = window.OftPdfWork.bind('opvPdf');

      /** 数字格式器（最多 1 位小数，用于 mm / in）。 */
      var numFormat = null;
      try {
        numFormat = new Intl.NumberFormat(LANG + '-u-nu-latn', { maximumFractionDigits: 1 });
      } catch (e) {
        numFormat = null;
      }

      /**
       * 阅读器状态。
       * @type {{ doc: any, bytes: Uint8Array|null, name: string, page: number, total: number, rotation: number, scale: number, texts: Array<string|undefined>, hits: number[], query: string, renderTask: any, token: number, tabUrl: string|null }}
       */
      var state = { doc: null, bytes: null, name: '', page: 1, total: 0, rotation: 0, scale: 1, texts: [], hits: [], query: '', renderTask: null, token: 0, tabUrl: null };

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
       * 数字本地格式（最多 1 位小数）。
       * @param {number} n 数值
       * @returns {string} 文本
       */
      function fmt(n) { return numFormat ? numFormat.format(n) : String(Math.round(n * 10) / 10); }

      /**
       * 格式化字节数。
       * @param {number} n 字节
       * @returns {string} 如 1.2 MB
       */
      function formatBytes(n) {
        if (n < 1024) return n + ' B';
        if (n < 1024 * 1024) return (n / 1024).toFixed(1) + ' KB';
        return (n / (1024 * 1024)).toFixed(2) + ' MB';
      }

      /** 显示或隐藏错误行。 */
      function setErr(text) { errEl.textContent = text || ''; errEl.style.display = text ? '' : 'none'; }

      /** 显示或隐藏警告行。 */
      function setWarn(text) { warnEl.textContent = text || ''; warnEl.style.display = text ? '' : 'none'; }

      /** 同步翻页按钮、页码框与总页数。 */
      function syncNav() {
        var has = !!state.doc;
        btnPrev.disabled = !has || state.page <= 1;
        btnNext.disabled = !has || state.page >= state.total;
        pageEl.disabled = !has;
        pageEl.max = String(state.total || 1);
        pageEl.value = String(has ? state.page : 1);
        pageTotalEl.textContent = has ? fill(T.pageTotal, { total: state.total }) : '';
        btnOpenTab.disabled = !state.bytes;
      }

      /**
       * 从文件头读取 PDF 版本（%PDF-x.y）。
       * @param {Uint8Array} bytes 文件字节
       * @returns {string} 版本号或 —
       */
      function pdfVersion(bytes) {
        var head = '';
        var n = Math.min(bytes.length, 1024);
        for (var i = 0; i < n; i++) head += String.fromCharCode(bytes[i]);
        var m = head.match(/%PDF-([0-9][.][0-9])/);
        return m ? m[1] : '—';
      }

      /**
       * 页面尺寸文字：mm 与 in，并识别常见纸张与方向。
       * @param {number} wPt 宽（pt，未旋转显示时）
       * @param {number} hPt 高（pt）
       * @returns {string} 如 210 × 297 mm (8.3 × 11.7 in) · A4, portrait
       */
      function pageSizeText(wPt, hPt) {
        var wmm = wPt * 25.4 / 72;
        var hmm = hPt * 25.4 / 72;
        var s = fmt(wmm) + ' × ' + fmt(hmm) + ' mm (' + fmt(wPt / 72) + ' × ' + fmt(hPt / 72) + ' in)';
        var orient = Math.abs(wmm - hmm) < 1 ? T.square : (wmm > hmm ? T.landscape : T.portrait);
        var shortSide = Math.min(wmm, hmm);
        var longSide = Math.max(wmm, hmm);
        var name = '';
        for (var i = 0; i < PAPER.length; i++) {
          if (Math.abs(PAPER[i][1] - shortSide) <= 2 && Math.abs(PAPER[i][2] - longSide) <= 2) { name = PAPER[i][0]; break; }
        }
        return s + ' · ' + (name ? name + ', ' : '') + orient;
      }

      /**
       * 读取（并缓存）某页文本层，拼成一个字符串。
       * @param {number} n 页码（1 起）
       * @returns {Promise<string>}
       */
      function pageText(n) {
        if (state.texts[n] !== undefined) return Promise.resolve(state.texts[n]);
        var doc = state.doc;
        return doc.getPage(n).then(function (page) { return page.getTextContent(); }).then(function (tc) {
          var s = tc.items.map(function (it) { return it.str || ''; }).join(' ');
          if (doc === state.doc) state.texts[n] = s;
          return s;
        });
      }

      /**
       * 计算当前缩放比例（自适应宽度 / 整页 / 固定百分比）。
       * @param {any} page pdf.js 页面
       * @returns {number} 比例
       */
      function resolveScale(page) {
        var vp = page.getViewport({ scale: 1, rotation: (page.rotate + state.rotation) % 360 });
        var cs = getComputedStyle(viewer);
        var availW = Math.max(100, viewer.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight) - 2);
        var availH = Math.max(100, (document.fullscreenElement === viewer ? window.innerHeight : window.innerHeight * 0.75) - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom) - 4);
        if (zoomEl.value === 'width') return availW / vp.width;
        if (zoomEl.value === 'page') return Math.min(availW / vp.width, availH / vp.height);
        var v = Number(zoomEl.value);
        return v > 0 ? v : 1;
      }

      /**
       * 渲染当前页（取消上一次未完成的渲染；按设备像素比输出清晰画面），并刷新页面信息。
       * @returns {Promise<void>}
       */
      function renderPage() {
        if (!state.doc) return Promise.resolve();
        var token = ++state.token;
        var doc = state.doc;
        var num = state.page;
        syncNav();
        return doc.getPage(num).then(function (page) {
          if (token !== state.token) return;
          state.scale = resolveScale(page);
          var rotation = (page.rotate + state.rotation) % 360;
          var vp = page.getViewport({ scale: state.scale, rotation: rotation });
          var dpr = Math.min(window.devicePixelRatio || 1, 3);
          canvas.width = Math.floor(vp.width * dpr);
          canvas.height = Math.floor(vp.height * dpr);
          canvas.style.width = Math.floor(vp.width) + 'px';
          canvas.style.height = Math.floor(vp.height) + 'px';
          var ctx = canvas.getContext('2d');
          if (state.renderTask) { try { state.renderTask.cancel(); } catch (e) {} }
          var task = page.render({ canvasContext: ctx, viewport: vp, transform: dpr !== 1 ? [dpr, 0, 0, dpr, 0, 0] : null });
          state.renderTask = task;
          var base = page.getViewport({ scale: 1, rotation: page.rotate % 360 });
          info.pageSize.textContent = pageSizeText(base.width, base.height);
          pageText(num).then(function (s) {
            if (doc === state.doc && num === state.page) info.text.textContent = s.replace(/[ ]+/g, '').length ? T.textYes : T.textNo;
          }).catch(function () {});
          return task.promise.catch(function (err) {
            if (!err || err.name !== 'RenderingCancelledException') throw err;
          });
        }).catch(function () {
          if (token === state.token) setErr(T.errLoad);
        });
      }

      /**
       * 跳到指定页。
       * @param {number} n 目标页码
       */
      function goTo(n) {
        if (!state.doc) return;
        var p = Math.max(1, Math.min(state.total, Math.round(n) || 1));
        if (p === state.page) { syncNav(); return; }
        state.page = p;
        renderPage();
      }

      /** 释放当前文档与新标签页链接。 */
      function closeDoc() {
        state.token += 1;
        if (state.renderTask) { try { state.renderTask.cancel(); } catch (e) {} state.renderTask = null; }
        if (state.doc) { try { state.doc.destroy(); } catch (e) {} }
        if (state.tabUrl) { URL.revokeObjectURL(state.tabUrl); state.tabUrl = null; }
        state.doc = null;
        state.total = 0;
        state.page = 1;
        state.rotation = 0;
        state.texts = [];
        state.hits = [];
        state.query = '';
      }

      /** 把信息表全部重置为 —。 */
      function resetInfo() {
        for (var k in info) {
          if (Object.prototype.hasOwnProperty.call(info, k)) info[k].textContent = '—';
        }
      }

      /**
       * 用 pdf.js 打开字节（可带密码）；成功后渲染第 1 页并填写信息表。
       * @param {Uint8Array} bytes 文件字节
       * @param {string|null} password 密码
       * @returns {Promise<void>}
       */
      function openBytes(bytes, password) {
        setErr('');
        work.setProgress(null);
        return window.OftPdfWork.ensurePdfJs().catch(function () {
          throw new Error('pdfjs');
        }).then(function (pdfjsLib) {
          var params = { data: bytes.slice(0) };
          if (password) params.password = password;
          var task = pdfjsLib.getDocument(params);
          task.onProgress = function (p) {
            if (p && p.total) work.setProgress(Math.min(99, (p.loaded / p.total) * 100));
          };
          return task.promise;
        }).then(function (doc) {
          closeDoc();
          state.doc = doc;
          state.bytes = bytes;
          state.total = doc.numPages;
          state.page = 1;
          pwdRow.hidden = true;
          pwdEl.value = '';
          info.file.textContent = state.name || '—';
          info.size.textContent = formatBytes(bytes.length);
          info.pages.textContent = String(doc.numPages);
          info.version.textContent = pdfVersion(bytes);
          findOut.textContent = '';
          doc.getMetadata().then(function (md) {
            if (doc !== state.doc) return;
            var i = (md && md.info) || {};
            info.title.textContent = i.Title || '—';
            info.author.textContent = i.Author || '—';
            info.producer.textContent = [i.Creator, i.Producer].filter(function (x) { return x; }).join(' / ') || '—';
          }).catch(function () {});
          work.setProgress(100);
          return renderPage();
        }).catch(function (err) {
          if (err && err.name === 'PasswordException') {
            state.bytes = bytes;
            pwdRow.hidden = false;
            pwdLabel.textContent = err.code === 2 ? T.pwdWrong : T.pwdNeed;
            pwdEl.focus();
            syncNav();
            return;
          }
          setErr(err && err.message === 'pdfjs' ? T.errPdfjs : T.errLoad);
        }).finally(function () {
          work.hideProgress();
        });
      }

      /**
       * 打开用户选择的文件。
       * @param {File} file PDF 文件
       * @returns {Promise<void>}
       */
      function openFile(file) {
        setErr('');
        setWarn('');
        var isPdf = /pdf/i.test(file.type || '') || /[.]pdf$/i.test(file.name || '');
        if (!isPdf) { setErr(T.errType); return Promise.resolve(); }
        if (file.size > SOFT_BYTES) setWarn(T.warnLarge);
        closeDoc();
        resetInfo();
        state.bytes = null;
        state.name = file.name || '';
        fileNameEl.textContent = state.name;
        return file.arrayBuffer().then(function (buf) { return openBytes(new Uint8Array(buf), null); });
      }

      /**
       * 全文查找：逐页读文本层，记录命中页；再次查找同一词时跳到下一命中页。
       * @returns {Promise<void>}
       */
      function find() {
        var q = String(findEl.value || '').trim();
        if (!state.doc) { findOut.textContent = T.findNoDoc; return Promise.resolve(); }
        if (!q) { findOut.textContent = T.findEmpty; return Promise.resolve(); }
        if (q.toLowerCase() === state.query && state.hits.length) {
          var next = state.hits.filter(function (p) { return p > state.page; })[0] || state.hits[0];
          goTo(next);
          return Promise.resolve();
        }
        var needle = q.toLowerCase();
        var doc = state.doc;
        var hits = [];
        var count = 0;
        var n = 1;
        /** 逐页搜索（每页后让出主线程以刷新进度）。 */
        function step() {
          if (doc !== state.doc) return Promise.resolve(false);
          if (n > state.total) return Promise.resolve(true);
          findOut.textContent = fill(T.findSearching, { i: n, n: state.total });
          work.setProgress((n / state.total) * 100);
          return pageText(n).then(function (s) {
            var hay = s.toLowerCase();
            var c = 0;
            var at = hay.indexOf(needle);
            while (at >= 0) { c += 1; at = hay.indexOf(needle, at + needle.length); }
            if (c) { hits.push(n); count += c; }
            n += 1;
            return new Promise(function (r) { setTimeout(r, 0); }).then(step);
          });
        }
        return step().then(function (done) {
          work.hideProgress();
          if (!done) return;
          state.query = needle;
          state.hits = hits;
          if (!hits.length) { findOut.textContent = fill(T.findNone, { q: q }); return; }
          findOut.textContent = fill(T.findResult, { q: q, pages: hits.join(', '), count: count });
          var target = hits.filter(function (p) { return p >= state.page; })[0] || hits[0];
          if (target !== state.page) goTo(target);
        }).catch(function () {
          work.hideProgress();
          setErr(T.errLoad);
        });
      }

      /**
       * 生成 3 页英文样例 PDF（A4 竖 / Letter 横 / A5，含元数据；第 1、3 页含单词 browser）。
       * @returns {Promise<void>}
       */
      function loadSample() {
        setErr('');
        setWarn('');
        if (typeof PDFLib === 'undefined' || !PDFLib.PDFDocument) { setErr(T.errSample); return Promise.resolve(); }
        var L = PDFLib;
        return L.PDFDocument.create().then(function (doc) {
          doc.setTitle('Sample document for the PDF viewer');
          doc.setAuthor('onlinefreetools.org');
          doc.setCreator('onlinefreetools.org sample');
          return Promise.all([doc.embedFont(L.StandardFonts.HelveticaBold), doc.embedFont(L.StandardFonts.Helvetica)]).then(function (fonts) {
            var bold = fonts[0];
            var regular = fonts[1];
            /** 每页：[宽 pt, 高 pt, 标题, 正文行]。 */
            var pages = [
              [595.28, 841.89, 'Sample PDF - page 1 of 3', ['This first page is A4 portrait (210 x 297 mm).', 'Use Next, the page box or the arrow keys to turn pages.', 'Search for the word browser to jump between pages 1 and 3.']],
              [792, 612, 'Page 2 of 3', ['This page is US Letter in landscape (279.4 x 215.9 mm).', 'Try Rotate, Whole page and the zoom buttons here.']],
              [419.53, 595.28, 'Page 3 of 3', ['This page is A5 (148 x 210 mm).', 'A browser viewer reads the size of every page separately.']]
            ];
            pages.forEach(function (p) {
              var page = doc.addPage([p[0], p[1]]);
              page.drawRectangle({ x: 24, y: 24, width: p[0] - 48, height: p[1] - 48, borderColor: L.rgb(0.75, 0.8, 0.88), borderWidth: 2 });
              page.drawText(p[2], { x: 48, y: p[1] - 90, size: 22, font: bold, color: L.rgb(0.1, 0.2, 0.45) });
              p[3].forEach(function (line, i) {
                page.drawText(line, { x: 48, y: p[1] - 140 - i * 26, size: 13, font: regular, color: L.rgb(0.15, 0.15, 0.15) });
              });
            });
            return doc.save();
          });
        }).then(function (bytes) {
          closeDoc();
          resetInfo();
          state.name = 'sample.pdf';
          fileNameEl.textContent = '';
          return openBytes(new Uint8Array(bytes), null);
        }).catch(function () { setErr(T.errSample); });
      }

      /** 清空：关闭文档、清画布与信息表；不重新加载样例。 */
      function clearAll() {
        closeDoc();
        state.bytes = null;
        state.name = '';
        fileInput.value = '';
        fileNameEl.textContent = '';
        pwdRow.hidden = true;
        pwdEl.value = '';
        findEl.value = '';
        findOut.textContent = '';
        zoomEl.value = 'width';
        canvas.width = 0;
        canvas.height = 0;
        canvas.style.width = '0';
        canvas.style.height = '0';
        setErr('');
        setWarn('');
        resetInfo();
        work.hideProgress();
        syncNav();
      }

      /**
       * 缩放一档（+1 放大 / −1 缩小），从当前实际比例出发。
       * @param {number} dir 方向
       */
      function zoomStep(dir) {
        var cur = state.scale || 1;
        var next = cur;
        if (dir > 0) next = ZOOM_STEPS.filter(function (z) { return z > cur + 0.01; })[0] || ZOOM_STEPS[ZOOM_STEPS.length - 1];
        else next = ZOOM_STEPS.filter(function (z) { return z < cur - 0.01; }).pop() || ZOOM_STEPS[0];
        var opt = zoomEl.querySelector('option[value="' + next + '"]');
        if (!opt) {
          opt = document.createElement('option');
          opt.value = String(next);
          opt.textContent = Math.round(next * 100) + '%';
          zoomEl.appendChild(opt);
        }
        zoomEl.value = String(next);
        renderPage();
      }

      fileInput.addEventListener('change', function () {
        var f = fileInput.files && fileInput.files[0];
        if (f) openFile(f);
      });
      var dropLabel = fileInput.closest('label');
      if (dropLabel) {
        dropLabel.addEventListener('dragover', function (e) { e.preventDefault(); dropLabel.classList.add('dragover'); });
        dropLabel.addEventListener('dragleave', function () { dropLabel.classList.remove('dragover'); });
        dropLabel.addEventListener('drop', function (e) {
          e.preventDefault();
          dropLabel.classList.remove('dragover');
          var f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
          if (f) openFile(f);
        });
      }
      pwdBtn.addEventListener('click', function () { if (state.bytes) openBytes(state.bytes, pwdEl.value); });
      pwdEl.addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); pwdBtn.click(); } });
      btnPrev.addEventListener('click', function () { goTo(state.page - 1); });
      btnNext.addEventListener('click', function () { goTo(state.page + 1); });
      pageEl.addEventListener('change', function () { goTo(Number(pageEl.value)); });
      zoomEl.addEventListener('change', function () { renderPage(); });
      btnZoomIn.addEventListener('click', function () { zoomStep(1); });
      btnZoomOut.addEventListener('click', function () { zoomStep(-1); });
      btnRotate.addEventListener('click', function () { state.rotation = (state.rotation + 90) % 360; renderPage(); });
      btnFull.addEventListener('click', function () {
        if (document.fullscreenElement) { document.exitFullscreen(); return; }
        if (viewer.requestFullscreen) viewer.requestFullscreen().then(function () { viewer.focus(); }).catch(function () {});
      });
      document.addEventListener('fullscreenchange', function () {
        btnFull.textContent = document.fullscreenElement === viewer ? T.fullExit : T.fullEnter;
        renderPage();
      });
      btnOpenTab.addEventListener('click', function () {
        if (!state.bytes) return;
        if (!state.tabUrl) state.tabUrl = URL.createObjectURL(new Blob([state.bytes], { type: 'application/pdf' }));
        window.open(state.tabUrl, '_blank', 'noopener');
      });
      findForm.addEventListener('submit', function (e) { e.preventDefault(); find(); });
      findEl.addEventListener('input', function () { state.hits = []; state.query = ''; });
      /** 阅读区键盘：← → / PgUp PgDn 翻页，+ − 缩放，Home / End 首尾页。 */
      viewer.addEventListener('keydown', function (e) {
        if (!state.doc) return;
        var k = e.key;
        if (k === 'ArrowLeft' || k === 'PageUp') { e.preventDefault(); goTo(state.page - 1); }
        else if (k === 'ArrowRight' || k === 'PageDown') { e.preventDefault(); goTo(state.page + 1); }
        else if (k === 'Home') { e.preventDefault(); goTo(1); }
        else if (k === 'End') { e.preventDefault(); goTo(state.total); }
        else if (k === '+' || k === '=') { e.preventDefault(); zoomStep(1); }
        else if (k === '-') { e.preventDefault(); zoomStep(-1); }
      });
      /** 窗口宽度变化时，自适应缩放重新排版。 */
      var resizeTimer = 0;
      window.addEventListener('resize', function () {
        if (zoomEl.value !== 'width' && zoomEl.value !== 'page') return;
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(renderPage, 150);
      });
      btnSample.addEventListener('click', function () { loadSample(); });
      btnClear.addEventListener('click', clearAll);

      syncNav();
      /** 进页自动打开样例。 */
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('open-pdf-in-browser');
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
