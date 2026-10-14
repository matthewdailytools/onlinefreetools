/**
 * 打印 PDF：打印前整理页面，再交给浏览器打印对话框（纯客户端）。
 * slug: print-pdf（见 work-tasks/print-pdf/02-tool-info.md）。
 *
 * 交互要点（2026-10-14 改写）：
 * - 选页：全部 / 自定义页码范围（1-3, 5, 8-；按输入顺序，可重复）；
 * - 单双面：全部 / 只打奇数页（正面）/ 只打偶数页（背面）——单面打印机手动双面；
 *   偶数页选中数少于奇数页时自动补 1 张空白页，倒序后与正面纸叠对齐；
 * - 纸张：保持原尺寸 / A4 / US Letter，按页边距等比缩放并居中（默认不放大小页面）；
 * - 每张纸 1 / 2 / 4 页（讲义、省纸），可给每页加细边框；倒序打印；
 * - 「按图片打印」：用 pdf.js 把整理后的每页渲染成 150 / 300 dpi 图片再打印，绕开缺字体、乱码、打印机内存不足；
 * - 加密 PDF：不做任何改动，原样预览与打印（选页交给系统打印对话框）；
 * - 每次改设置自动重建「打印用 PDF」，摘要显示页数、纸张张数、纸张、缩放比例与打印顺序。
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
const PREFIX = 'tool_print_pdf';

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
 * 渲染 print-pdf 工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 * @returns 完整页面 HTML
 */
export const renderPrintPdfPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 读取本工具键（自动拼前缀）。 */
	const tx = (key: string) => t(opts.lang, `${PREFIX}_${key}` as keyof typeof import('../site/i18n/en').default);

	const toolPath = '/tools/print-pdf';
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
			currentSlug: 'print-pdf',
			currentAnchor: '#converter',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });
	const pdfWorkLabels = pdfWorkUiLabels(opts.lang);

	/**
	 * 生成 <option> 列表。
	 * @param items [值, 显示文字, 是否默认选中]
	 * @returns option HTML
	 */
	const optionsHtml = (items: Array<[string, string, boolean?]>) =>
		items
			.map(([v, label, sel]) => `<option value="${escapeHtml(v)}"${sel ? ' selected' : ''}>${escapeHtml(label)}</option>`)
			.join('');

	/** 页内样式：设置网格、预览框、摘要。 */
	const extraHeadHtml = `
  <style>
    ${pdfWorkUiCss()}
    .tools-bar { gap: .5rem; }
    .ppr-grid { display:grid; grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr)); gap:.5rem .75rem; margin-bottom:.75rem; }
    .ppr-grid label { font-size:.875rem; margin-bottom:.15rem; display:block; }
    #pprRangeWrap[hidden] { display:none !important; }
    #pprFrame { width:100%; height:560px; border:1px solid #dee2e6; border-radius:.25rem; background:#fff; }
    #pprSummary { font-size:.9rem; background:#f8f9fa; border:1px solid #e9ecef; border-radius:.25rem; padding:.5rem .75rem; }
    #pprSummary div + div { margin-top:.2rem; }
    #pprDuplex[hidden], #pprEnc[hidden] { display:none !important; }
  </style>`;

	const contentHtml = `
    <div id="converter" class="tool-page-heading mb-3">
      <h1 class="h4 mb-0">${escapeHtml(tx('title'))}</h1>
    </div>

    <label class="tool-dropzone mb-2" for="pprFile">
      <input type="file" id="pprFile" accept="application/pdf,.pdf">
      <span class="tool-dropzone-title">${escapeHtml(tx('choose_file'))}</span>
      <span class="tool-dropzone-hint">${escapeHtml(tx('drop_hint'))}</span>
    </label>
    <p class="small text-muted mb-3" id="pprFileName"></p>

    <div class="ppr-grid">
      <div>
        <label for="pprPages">${escapeHtml(tx('pages_label'))}</label>
        <select id="pprPages" class="form-select form-select-sm">${optionsHtml([
					['all', tx('pages_all'), true],
					['custom', tx('pages_custom')],
				])}</select>
      </div>
      <div id="pprRangeWrap" hidden>
        <label for="pprRange">${escapeHtml(tx('range_label'))}</label>
        <input type="text" id="pprRange" class="form-control form-control-sm" placeholder="${escapeHtml(tx('range_ph'))}" autocomplete="off" inputmode="numeric">
      </div>
      <div>
        <label for="pprSides">${escapeHtml(tx('sides_label'))}</label>
        <select id="pprSides" class="form-select form-select-sm">${optionsHtml([
					['all', tx('sides_all'), true],
					['odd', tx('sides_odd')],
					['even', tx('sides_even')],
				])}</select>
      </div>
      <div>
        <label for="pprPaper">${escapeHtml(tx('paper_label'))}</label>
        <select id="pprPaper" class="form-select form-select-sm">${optionsHtml([
					['keep', tx('paper_keep'), true],
					['a4', tx('paper_a4')],
					['letter', tx('paper_letter')],
				])}</select>
      </div>
      <div>
        <label for="pprNup">${escapeHtml(tx('nup_label'))}</label>
        <select id="pprNup" class="form-select form-select-sm">${optionsHtml([
					['1', '1', true],
					['2', '2'],
					['4', '4'],
				])}</select>
      </div>
    </div>

    <div class="d-flex align-items-center tools-bar mb-2 flex-wrap">
      <button type="button" id="pprBtnPrint" class="btn btn-primary btn-sm" disabled>${escapeHtml(tx('print'))}</button>
      <button type="button" id="pprBtnDownload" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(tx('download'))}</button>
      <button type="button" id="pprBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx('sample'))}</button>
      <button type="button" id="pprBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx('clear'))}</button>
    </div>

    <details class="mb-3" id="pprAdvanced">
      <summary>${escapeHtml(tx('advanced'))}</summary>
      <div class="ppr-grid mt-2">
        <div>
          <label for="pprMargin">${escapeHtml(tx('margin_label'))}</label>
          <select id="pprMargin" class="form-select form-select-sm">${optionsHtml([
						['0', tx('margin_0')],
						['5', tx('margin_5'), true],
						['10', tx('margin_10')],
					])}</select>
        </div>
        <div>
          <label for="pprImage">${escapeHtml(tx('image_label'))}</label>
          <select id="pprImage" class="form-select form-select-sm">${optionsHtml([
						['0', tx('image_off'), true],
						['150', tx('image_150')],
						['300', tx('image_300')],
					])}</select>
        </div>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="pprReverse">
        <label class="form-check-label small" for="pprReverse">${escapeHtml(tx('reverse'))}</label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="pprEnlarge">
        <label class="form-check-label small" for="pprEnlarge">${escapeHtml(tx('enlarge'))}</label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="pprFrameBorder">
        <label class="form-check-label small" for="pprFrameBorder">${escapeHtml(tx('border'))}</label>
      </div>
    </details>

    <p id="pprError" class="small text-danger mb-2" style="display:none;" role="alert"></p>
    <p id="pprWarn" class="small text-warning mb-2" style="display:none;" role="status"></p>
    <p id="pprEnc" class="small text-warning mb-2" hidden>${escapeHtml(tx('enc_note'))}</p>
    ${pdfWorkUiProgressHtml({ idPrefix: 'pprPdf', labels: pdfWorkLabels })}

    <div id="pprSummary" class="mb-2" aria-live="polite">
      <div id="pprSumMain">—</div>
      <div id="pprSumOrder" class="text-muted"></div>
    </div>
    <p id="pprDuplex" class="small alert alert-info py-2 mb-2" hidden></p>
    <p id="pprStatus" class="small text-muted mb-2" role="status"></p>

    <p class="small text-muted mb-1">${escapeHtml(tx('viewer_label'))}</p>
    <iframe id="pprFrame" title="${escapeHtml(tx('viewer_label'))}"></iframe>

    <p class="tool-lead mt-3 mb-4">${escapeHtml(description)}</p>`;

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
			{ label: tx('ref_a_label'), href: 'https://developer.mozilla.org/en-US/docs/Web/API/Window/print' },
			{ label: tx('ref_b_label'), href: 'https://www.iso.org/standard/36631.html' },
		],
	});

	/** 前端脚本需要的文案（一次性注入）。 */
	const clientText = {
		sumMain: tx('summary_tpl'),
		sumOrder: tx('order_tpl'),
		paperA4: tx('paper_a4'),
		paperLetter: tx('paper_letter'),
		paperOriginal: tx('paper_original_tpl'),
		paperFirst: tx('paper_first_tpl'),
		mixed: tx('mixed_sizes'),
		blank: tx('blank_page'),
		duplexOdd: tx('duplex_odd'),
		duplexEven: tx('duplex_even'),
		duplexBlank: tx('duplex_blank'),
		errType: tx('err_type'),
		errLoad: tx('err_load'),
		errRange: tx('err_range_tpl'),
		errNone: tx('err_none'),
		errLib: tx('err_lib'),
		errPdfjs: tx('err_pdfjs'),
		errPrint: tx('err_print'),
		errSample: tx('err_sample'),
		warnLarge: tx('warn_large'),
		empty: tx('empty'),
		preparing: tx('status_preparing_tpl'),
		ready: tx('status_ready'),
		opened: tx('status_opened'),
		newTab: tx('status_new_tab'),
	};

	/**
	 * 客户端脚本：pdf-lib 读入源文件 → 按设置重排到新 PDF（可选 pdf.js 栅格化）→ iframe 预览并调用打印。
	 */
	const extraBodyHtml = `
  ${pdfWorkUiClientScript()}
  <script src="/vendor/pdf-lib/pdf-lib.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script>
    (function () {
      /** 超过此字节数时软警告。 */
      var SOFT_BYTES = 100 * 1024 * 1024;
      /** 1 mm = 72 / 25.4 pt。 */
      var MM = 72 / 25.4;
      /** 目标纸张（pt，竖向）。 */
      var SHEETS = { a4: [595.28, 841.89], letter: [612, 792] };
      /** 常见纸张（mm，竖向）；与页面相差 ≤ 2 mm 视为同一种。 */
      var PAPER = [
        ['A3', 297, 420], ['A4', 210, 297], ['A5', 148, 210], ['A6', 105, 148],
        ['B5', 176, 250], ['US Letter', 215.9, 279.4], ['US Legal', 215.9, 355.6], ['Tabloid', 279.4, 431.8]
      ];
      /** 摘要中最多列出的打印顺序项数。 */
      var ORDER_MAX = 40;
      /** 当前页面语言（数字格式）。 */
      var LANG = ${JSON.stringify(opts.lang)};
      /** 本地化文案字典。 */
      var T = ${JSON.stringify(clientText)};
      /** 两句提示之间的分隔：中日文句号后不加空格。 */
      var SENT_GAP = LANG === 'zh' || LANG === 'ja' ? '' : ' ';

      /** 页面控件。 */
      var fileInput = document.getElementById('pprFile');
      var fileNameEl = document.getElementById('pprFileName');
      var pagesEl = document.getElementById('pprPages');
      var rangeWrap = document.getElementById('pprRangeWrap');
      var rangeEl = document.getElementById('pprRange');
      var sidesEl = document.getElementById('pprSides');
      var paperEl = document.getElementById('pprPaper');
      var nupEl = document.getElementById('pprNup');
      var marginEl = document.getElementById('pprMargin');
      var imageEl = document.getElementById('pprImage');
      var reverseEl = document.getElementById('pprReverse');
      var enlargeEl = document.getElementById('pprEnlarge');
      var borderEl = document.getElementById('pprFrameBorder');
      var btnPrint = document.getElementById('pprBtnPrint');
      var btnDownload = document.getElementById('pprBtnDownload');
      var btnSample = document.getElementById('pprBtnSample');
      var btnClear = document.getElementById('pprBtnClear');
      var errEl = document.getElementById('pprError');
      var warnEl = document.getElementById('pprWarn');
      var encEl = document.getElementById('pprEnc');
      var sumMain = document.getElementById('pprSumMain');
      var sumOrder = document.getElementById('pprSumOrder');
      var duplexEl = document.getElementById('pprDuplex');
      var statusEl = document.getElementById('pprStatus');
      var frame = document.getElementById('pprFrame');
      /** 共用进度条（pdfWorkUi）。 */
      var work = window.OftPdfWork.bind('pprPdf');
      /** 会被加密 PDF 禁用的设置控件。 */
      var optionEls = [pagesEl, rangeEl, sidesEl, paperEl, nupEl, marginEl, imageEl, reverseEl, enlargeEl, borderEl];

      /** 整数百分比格式器。 */
      var pctFormat = null;
      try { pctFormat = new Intl.NumberFormat(LANG + '-u-nu-latn', { maximumFractionDigits: 0 }); } catch (e) { pctFormat = null; }

      /**
       * 工具状态。
       * @type {{ src: any, bytes: Uint8Array|null, name: string, total: number, encrypted: boolean, out: Uint8Array|null, outUrl: string|null, token: number, timer: number, frameLoaded: boolean }}
       */
      var state = { src: null, bytes: null, name: '', total: 0, encrypted: false, out: null, outUrl: null, token: 0, timer: 0, frameLoaded: false };

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
       * 百分比文字（四舍五入到整数）。
       * @param {number} r 比例（1 = 100%）
       * @returns {string} 如 93%
       */
      function pct(r) {
        var n = Math.round(r * 100);
        return (pctFormat ? pctFormat.format(n) : String(n)) + '%';
      }

      /** 显示或隐藏错误行。 */
      function setErr(text) { errEl.textContent = text || ''; errEl.style.display = text ? '' : 'none'; }

      /** 显示或隐藏警告行。 */
      function setWarn(text) { warnEl.textContent = text || ''; warnEl.style.display = text ? '' : 'none'; }

      /** 设置状态行。 */
      function setStatus(text) { statusEl.textContent = text || ''; }

      /**
       * 识别纸张名（如 A4 / US Letter），否则返回 mm 尺寸。
       * @param {number} wPt 宽（pt）
       * @param {number} hPt 高（pt）
       * @returns {string} 纸张名或 “210 × 297 mm”
       */
      function paperName(wPt, hPt) {
        var a = Math.min(wPt, hPt) / MM;
        var b = Math.max(wPt, hPt) / MM;
        for (var i = 0; i < PAPER.length; i++) {
          if (Math.abs(PAPER[i][1] - a) <= 2 && Math.abs(PAPER[i][2] - b) <= 2) return PAPER[i][0];
        }
        return Math.round(wPt / MM) + ' × ' + Math.round(hPt / MM) + ' mm';
      }

      /**
       * 解析页码列表（1-3, 5, 8-；-3 表示 1–3）；按输入顺序，可重复。
       * @param {string} text 用户输入
       * @param {number} total 总页数
       * @returns {number[]|null} 0 起页索引；无效返回 null
       */
      function parseRange(text, total) {
        var s = String(text || '').replace(/[–—~～]/g, '-').replace(/ +/g, '');
        if (!s) return null;
        var parts = s.split(/[,，、;；]+/).filter(function (p) { return p; });
        var out = [];
        for (var i = 0; i < parts.length; i++) {
          var p = parts[i];
          var single = p.match(/^([0-9]+)$/);
          var span = p.match(/^([0-9]*)-([0-9]*)$/);
          if (single) {
            var n = Number(single[1]);
            if (n < 1 || n > total) return null;
            out.push(n - 1);
          } else if (span && (span[1] || span[2])) {
            var a = span[1] ? Number(span[1]) : 1;
            var b = span[2] ? Number(span[2]) : total;
            if (a < 1 || b < 1 || a > total || b > total) return null;
            var step = a <= b ? 1 : -1;
            for (var k = a; step > 0 ? k <= b : k >= b; k += step) out.push(k - 1);
          } else {
            return null;
          }
        }
        return out.length ? out : null;
      }

      /**
       * 读取当前设置。
       * @returns {{ pages: string, range: string, sides: string, paper: string, nup: number, margin: number, dpi: number, reverse: boolean, enlarge: boolean, border: boolean }}
       */
      function readOptions() {
        return {
          pages: pagesEl.value,
          range: rangeEl.value,
          sides: sidesEl.value,
          paper: paperEl.value,
          nup: Number(nupEl.value) || 1,
          margin: Number(marginEl.value) || 0,
          dpi: Number(imageEl.value) || 0,
          reverse: reverseEl.checked,
          enlarge: enlargeEl.checked,
          border: borderEl.checked
        };
      }

      /**
       * 按设置算出打印序列（页索引；-1 表示补的空白页）。
       * @param {ReturnType<typeof readOptions>} o 设置
       * @returns {{ list: number[], blankAdded: boolean, error: string }}
       */
      function buildSequence(o) {
        var base = [];
        if (o.pages === 'custom') {
          var parsed = parseRange(o.range, state.total);
          if (!parsed) return { list: [], blankAdded: false, error: fill(T.errRange, { v: o.range || '', total: state.total }) };
          base = parsed;
        } else {
          for (var i = 0; i < state.total; i++) base.push(i);
        }
        var list = base;
        var blankAdded = false;
        if (o.sides === 'odd') list = base.filter(function (_, i) { return i % 2 === 0; });
        if (o.sides === 'even') {
          list = base.filter(function (_, i) { return i % 2 === 1; });
          if (base.length % 2 === 1 && list.length) { list.push(-1); blankAdded = true; }
        }
        if (!list.length) return { list: [], blankAdded: false, error: T.errNone };
        if (o.reverse) list = list.slice().reverse();
        return { list: list, blankAdded: blankAdded, error: '' };
      }

      /**
       * 读取源页显示尺寸（考虑 /Rotate）。
       * @param {number} idx 页索引
       * @returns {{ w: number, h: number, rot: number }} 显示宽高（pt）与旋转角
       */
      function srcPageInfo(idx) {
        var page = state.src.getPage(idx);
        var size = page.getSize();
        var rot = ((page.getRotation().angle % 360) + 360) % 360;
        var swap = rot === 90 || rot === 270;
        return { w: swap ? size.height : size.width, h: swap ? size.width : size.height, rot: rot };
      }

      /**
       * 把嵌入页按缩放放进目标框（处理 /Rotate），并可画边框。
       * @param {any} sheet 目标页（pdf-lib PDFPage）
       * @param {any} emb 嵌入页（PDFEmbeddedPage）
       * @param {number} rot 源页 /Rotate
       * @param {number} x 显示框左下 x
       * @param {number} y 显示框左下 y
       * @param {number} s 缩放
       * @param {boolean} border 是否画边框
       */
      function placePage(sheet, emb, rot, x, y, s, border) {
        var L = PDFLib;
        var w = emb.width * s;
        var h = emb.height * s;
        var ax = x;
        var ay = y;
        if (rot === 90) { ay = y + w; }
        else if (rot === 180) { ax = x + w; ay = y + h; }
        else if (rot === 270) { ax = x + h; }
        sheet.drawPage(emb, { x: ax, y: ay, xScale: s, yScale: s, rotate: L.degrees(-rot) });
        if (border) {
          var bw = rot === 90 || rot === 270 ? h : w;
          var bh = rot === 90 || rot === 270 ? w : h;
          sheet.drawRectangle({ x: x, y: y, width: bw, height: bh, borderColor: L.rgb(0.6, 0.6, 0.6), borderWidth: 0.5 });
        }
      }

      /** 让出主线程一帧，刷新进度条。 */
      function yieldUi() { return new Promise(function (r) { setTimeout(r, 0); }); }

      /**
       * 按设置生成打印用 PDF（矢量），并返回摘要所需数据。
       * @param {ReturnType<typeof readOptions>} o 设置
       * @param {number[]} list 打印序列
       * @param {number} token 本次任务令牌
       * @returns {Promise<{ bytes: Uint8Array, sheets: number, paper: string, minScale: number, maxScale: number }|null>}
       */
      function buildVector(o, list, token) {
        var L = PDFLib;
        var passthrough = o.paper === 'keep' && o.nup === 1;
        return L.PDFDocument.create().then(function (out) {
          out.setTitle(state.name.replace(/[.]pdf$/i, '') || 'print');
          out.setCreator('onlinefreetools.org print-pdf');
          var real = list.filter(function (i) { return i >= 0; });
          if (passthrough) {
            return out.copyPages(state.src, real).then(function (copied) {
              var ci = 0;
              var last = null;
              list.forEach(function (idx) {
                if (idx < 0) {
                  var sz = last ? last.getSize() : { width: 612, height: 792 };
                  out.addPage([sz.width, sz.height]);
                } else {
                  last = out.addPage(copied[ci++]);
                }
              });
              var names = {};
              real.forEach(function (i) { var p = srcPageInfo(i); names[paperName(p.w, p.h)] = 1; });
              var keys = Object.keys(names);
              return out.save().then(function (b) {
                return { bytes: new Uint8Array(b), sheets: list.length, paper: fill(T.paperOriginal, { size: keys.length === 1 ? keys[0] : T.mixed }), minScale: 1, maxScale: 1 };
              });
            });
          }
          var unique = real.filter(function (v, i, a) { return a.indexOf(v) === i; });
          return out.embedPdf(state.src, unique).then(function (embs) {
            var embMap = {};
            unique.forEach(function (idx, i) { embMap[idx] = embs[i]; });
            var first = srcPageInfo(real[0]);
            var basePortrait;
            var paperLabel;
            if (o.paper === 'keep') {
              basePortrait = [Math.min(first.w, first.h), Math.max(first.w, first.h)];
              paperLabel = fill(T.paperFirst, { size: paperName(first.w, first.h) });
            } else {
              basePortrait = SHEETS[o.paper];
              paperLabel = o.paper === 'a4' ? T.paperA4 : T.paperLetter;
            }
            var m = o.margin * MM;
            var minS = Infinity;
            var maxS = 0;
            var sheets = 0;
            var firstLandscape = first.w > first.h;
            var i = 0;
            /** 逐张纸排版（每张后让出主线程刷新进度）。 */
            function nextSheet() {
              if (token !== state.token) return Promise.resolve(false);
              if (i >= list.length) return Promise.resolve(true);
              var group = list.slice(i, i + o.nup);
              var sw;
              var sh;
              var cols = 1;
              var rows = 1;
              if (o.nup === 1) {
                var info1 = group[0] >= 0 ? srcPageInfo(group[0]) : first;
                var land = info1.w > info1.h;
                sw = land ? basePortrait[1] : basePortrait[0];
                sh = land ? basePortrait[0] : basePortrait[1];
              } else if (o.nup === 2) {
                sw = firstLandscape ? basePortrait[0] : basePortrait[1];
                sh = firstLandscape ? basePortrait[1] : basePortrait[0];
                cols = firstLandscape ? 1 : 2;
                rows = firstLandscape ? 2 : 1;
              } else {
                sw = firstLandscape ? basePortrait[1] : basePortrait[0];
                sh = firstLandscape ? basePortrait[0] : basePortrait[1];
                cols = 2;
                rows = 2;
              }
              var sheet = out.addPage([sw, sh]);
              var slotW = (sw - m * (cols + 1)) / cols;
              var slotH = (sh - m * (rows + 1)) / rows;
              group.forEach(function (idx, gi) {
                if (idx < 0) return;
                var info = srcPageInfo(idx);
                var s = Math.min(slotW / info.w, slotH / info.h);
                if (!o.enlarge && s > 1) s = 1;
                minS = Math.min(minS, s);
                maxS = Math.max(maxS, s);
                var col = gi % cols;
                var row = Math.floor(gi / cols);
                var slotX = m + col * (slotW + m);
                var slotTop = sh - m - row * (slotH + m);
                var x = slotX + (slotW - info.w * s) / 2;
                var y = slotTop - slotH + (slotH - info.h * s) / 2;
                placePage(sheet, embMap[idx], info.rot, x, y, s, o.border);
              });
              sheets += 1;
              i += o.nup;
              work.setProgress(Math.min(90, (i / list.length) * (o.dpi ? 40 : 90)));
              return yieldUi().then(nextSheet);
            }
            return nextSheet().then(function (done) {
              if (!done) return null;
              return out.save().then(function (b) {
                return { bytes: new Uint8Array(b), sheets: sheets, paper: paperLabel, minScale: minS === Infinity ? 1 : minS, maxScale: maxS || 1 };
              });
            });
          });
        });
      }

      /**
       * 「按图片打印」：pdf.js 把每页渲染为 JPEG（指定 dpi），重新组成同尺寸 PDF。
       * @param {Uint8Array} bytes 矢量 PDF
       * @param {number} dpi 分辨率
       * @param {number} token 任务令牌
       * @returns {Promise<Uint8Array|null>}
       */
      function rasterize(bytes, dpi, token) {
        var L = PDFLib;
        return window.OftPdfWork.ensurePdfJs().catch(function () { throw new Error('pdfjs'); }).then(function (pdfjsLib) {
          return pdfjsLib.getDocument({ data: bytes.slice(0) }).promise;
        }).then(function (doc) {
          return L.PDFDocument.create().then(function (out) {
            out.setTitle(state.name.replace(/[.]pdf$/i, '') || 'print');
            var n = 1;
            /** 逐页渲染。 */
            function step() {
              if (token !== state.token) return Promise.resolve(false);
              if (n > doc.numPages) return Promise.resolve(true);
              setStatus(fill(T.preparing, { i: n, n: doc.numPages }));
              return doc.getPage(n).then(function (page) {
                var vp1 = page.getViewport({ scale: 1 });
                var vp = page.getViewport({ scale: dpi / 72 });
                var canvas = document.createElement('canvas');
                canvas.width = Math.round(vp.width);
                canvas.height = Math.round(vp.height);
                var ctx = canvas.getContext('2d');
                ctx.fillStyle = '#ffffff';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                return page.render({ canvasContext: ctx, viewport: vp }).promise.then(function () {
                  return new Promise(function (res, rej) {
                    canvas.toBlob(function (b) { b ? res(b) : rej(new Error('blob')); }, 'image/jpeg', 0.92);
                  });
                }).then(function (blob) { return blob.arrayBuffer(); }).then(function (ab) {
                  return out.embedJpg(ab);
                }).then(function (img) {
                  var pg = out.addPage([vp1.width, vp1.height]);
                  pg.drawImage(img, { x: 0, y: 0, width: vp1.width, height: vp1.height });
                  canvas.width = 0;
                  canvas.height = 0;
                  work.setProgress(40 + (n / doc.numPages) * 55);
                  n += 1;
                  return yieldUi().then(step);
                });
              });
            }
            return step().then(function (done) {
              try { doc.destroy(); } catch (e) {}
              if (!done) return null;
              return out.save().then(function (b) { return new Uint8Array(b); });
            });
          });
        });
      }

      /**
       * 把打印用 PDF 放进预览框，启用打印 / 下载。
       * @param {Uint8Array} bytes 打印用 PDF
       */
      function showOutput(bytes) {
        if (state.outUrl) URL.revokeObjectURL(state.outUrl);
        state.out = bytes;
        state.outUrl = URL.createObjectURL(new Blob([bytes], { type: 'application/pdf' }));
        state.frameLoaded = false;
        frame.src = state.outUrl;
        btnPrint.disabled = false;
        btnDownload.disabled = false;
      }

      /** 清掉打印用 PDF 与预览。 */
      function clearOutput() {
        if (state.outUrl) URL.revokeObjectURL(state.outUrl);
        state.out = null;
        state.outUrl = null;
        state.frameLoaded = false;
        frame.removeAttribute('src');
        btnPrint.disabled = true;
        btnDownload.disabled = true;
      }

      /** 根据设置显示 / 隐藏范围框，并禁用无效的页边距。 */
      function syncControls() {
        rangeWrap.hidden = pagesEl.value !== 'custom';
        optionEls.forEach(function (el) { el.disabled = state.encrypted; });
        if (!state.encrypted) marginEl.disabled = paperEl.value === 'keep' && nupEl.value === '1';
        enlargeEl.disabled = state.encrypted || (paperEl.value === 'keep' && nupEl.value === '1');
      }

      /**
       * 按当前设置重建打印用 PDF 并刷新摘要（新任务会作废旧任务）。
       * @returns {Promise<void>}
       */
      function prepare() {
        var token = ++state.token;
        clearTimeout(state.timer);
        setErr('');
        syncControls();
        if (!state.bytes) return Promise.resolve();
        if (state.encrypted) {
          sumMain.textContent = '—';
          sumOrder.textContent = '';
          duplexEl.hidden = true;
          showOutput(state.bytes);
          setStatus(T.ready);
          return Promise.resolve();
        }
        var o = readOptions();
        var seq = buildSequence(o);
        if (seq.error) {
          clearOutput();
          sumMain.textContent = '—';
          sumOrder.textContent = '';
          duplexEl.hidden = true;
          setErr(seq.error);
          setStatus('');
          return Promise.resolve();
        }
        var orderText = seq.list.slice(0, ORDER_MAX).map(function (i) { return i < 0 ? T.blank : String(i + 1); }).join(', ') + (seq.list.length > ORDER_MAX ? ', …' : '');
        if (o.sides === 'odd') { duplexEl.textContent = T.duplexOdd; duplexEl.hidden = false; }
        else if (o.sides === 'even') { duplexEl.textContent = T.duplexEven + (seq.blankAdded ? SENT_GAP + T.duplexBlank : ''); duplexEl.hidden = false; }
        else duplexEl.hidden = true;
        work.setBusy([btnPrint, btnDownload], true);
        work.setProgress(0);
        setStatus(fill(T.preparing, { i: 1, n: seq.list.length }));
        return buildVector(o, seq.list, token).then(function (res) {
          if (!res || token !== state.token) return null;
          if (!o.dpi) return res;
          return rasterize(res.bytes, o.dpi, token).then(function (img) {
            if (!img) return null;
            res.bytes = img;
            return res;
          });
        }).then(function (res) {
          if (!res || token !== state.token) return;
          var realCount = seq.list.filter(function (i) { return i >= 0; }).length;
          var scaleText = Math.round(res.minScale * 100) === Math.round(res.maxScale * 100) ? pct(res.minScale) : pct(res.minScale) + '–' + pct(res.maxScale);
          sumMain.textContent = fill(T.sumMain, { pages: realCount, sheets: res.sheets, paper: res.paper, scale: scaleText });
          sumOrder.textContent = fill(T.sumOrder, { order: orderText });
          showOutput(res.bytes);
          work.setProgress(100);
          setStatus(T.ready);
        }).catch(function (err) {
          if (token !== state.token) return;
          clearOutput();
          setErr(err && err.message === 'pdfjs' ? T.errPdfjs : T.errLoad);
          setStatus('');
        }).finally(function () {
          if (token !== state.token) return;
          work.setBusy([btnPrint, btnDownload], false);
          btnPrint.disabled = !state.out;
          btnDownload.disabled = !state.out;
          work.hideProgress();
        });
      }

      /** 设置变化后稍等再重建（连续输入页码时不反复生成）。 */
      function schedulePrepare() {
        clearTimeout(state.timer);
        state.timer = setTimeout(prepare, 300);
      }

      /**
       * 读入源 PDF（pdf-lib）；加密文件改为原样打印模式。
       * @param {Uint8Array} bytes 文件字节
       * @param {string} name 文件名
       * @returns {Promise<void>}
       */
      function loadBytes(bytes, name) {
        setErr('');
        if (typeof PDFLib === 'undefined' || !PDFLib.PDFDocument) { setErr(T.errLib); return Promise.resolve(); }
        state.token += 1;
        clearOutput();
        state.src = null;
        state.bytes = bytes;
        state.name = name;
        state.encrypted = false;
        state.total = 0;
        encEl.hidden = true;
        return PDFLib.PDFDocument.load(bytes, { updateMetadata: false }).then(function (doc) {
          try { doc.getForm().flatten(); } catch (e) {}
          state.src = doc;
          state.total = doc.getPageCount();
          return prepare();
        }).catch(function (err) {
          var msg = String((err && err.message) || '');
          if (/encrypt/i.test(msg)) {
            state.encrypted = true;
            encEl.hidden = false;
            return prepare();
          }
          state.bytes = null;
          setErr(T.errLoad);
          syncControls();
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
        fileNameEl.textContent = file.name || '';
        return file.arrayBuffer().then(function (buf) { return loadBytes(new Uint8Array(buf), file.name || 'document.pdf'); }).catch(function () { setErr(T.errLoad); });
      }

      /**
       * 打印：等预览框加载完，再调用其打印；失败则在新标签页打开打印用 PDF。
       */
      function doPrint() {
        if (!state.out) { setErr(T.empty); return; }
        setErr('');
        /** 真正调用打印对话框。 */
        function go() {
          try {
            frame.contentWindow.focus();
            frame.contentWindow.print();
            setStatus(T.opened);
          } catch (e) {
            var w = window.open(state.outUrl, '_blank', 'noopener');
            if (w) setStatus(T.newTab);
            else setErr(T.errPrint);
          }
        }
        if (state.frameLoaded) { go(); return; }
        var waited = 0;
        var iv = setInterval(function () {
          waited += 100;
          if (state.frameLoaded || waited >= 3000) { clearInterval(iv); go(); }
        }, 100);
      }

      /** 下载打印用 PDF：文件名 <原名>-print.pdf。 */
      function download() {
        if (!state.out) return;
        var base = (state.name || 'document').replace(/[.]pdf$/i, '');
        var a = document.createElement('a');
        a.href = state.outUrl;
        a.download = base + '-print.pdf';
        document.body.appendChild(a);
        a.click();
        a.remove();
      }

      /**
       * 生成 5 页 US Letter 英文样例（大号页码、正反面标注），并用当前设置生成打印用 PDF。
       * @returns {Promise<void>}
       */
      function loadSample() {
        setErr('');
        setWarn('');
        if (typeof PDFLib === 'undefined' || !PDFLib.PDFDocument) { setErr(T.errSample); return Promise.resolve(); }
        var L = PDFLib;
        return L.PDFDocument.create().then(function (doc) {
          doc.setTitle('Print sample');
          return Promise.all([doc.embedFont(L.StandardFonts.HelveticaBold), doc.embedFont(L.StandardFonts.Helvetica)]).then(function (fonts) {
            var bold = fonts[0];
            var regular = fonts[1];
            for (var n = 1; n <= 5; n++) {
              var page = doc.addPage([612, 792]);
              page.drawRectangle({ x: 36, y: 36, width: 540, height: 720, borderColor: L.rgb(0.55, 0.65, 0.8), borderWidth: 3 });
              page.drawText('Page ' + n + ' of 5', { x: 72, y: 680, size: 30, font: bold, color: L.rgb(0.1, 0.2, 0.45) });
              page.drawText(n % 2 ? 'Odd page - front side of the sheet' : 'Even page - back side of the sheet', { x: 72, y: 640, size: 15, font: regular, color: L.rgb(0.2, 0.2, 0.2) });
              page.drawText('US Letter, 8.5 x 11 in (215.9 x 279.4 mm)', { x: 72, y: 612, size: 13, font: regular, color: L.rgb(0.35, 0.35, 0.35) });
              page.drawText(String(n), { x: 250, y: 260, size: 220, font: bold, color: L.rgb(0.85, 0.88, 0.94) });
            }
            return doc.save();
          });
        }).then(function (bytes) {
          fileInput.value = '';
          fileNameEl.textContent = '';
          return loadBytes(new Uint8Array(bytes), 'print-sample.pdf');
        }).catch(function () { setErr(T.errSample); });
      }

      /** 清空：移除文件、预览与摘要，设置恢复默认；不重新加载样例。 */
      function clearAll() {
        state.token += 1;
        clearTimeout(state.timer);
        clearOutput();
        state.src = null;
        state.bytes = null;
        state.name = '';
        state.total = 0;
        state.encrypted = false;
        fileInput.value = '';
        fileNameEl.textContent = '';
        pagesEl.value = 'all';
        rangeEl.value = '';
        sidesEl.value = 'all';
        paperEl.value = 'keep';
        nupEl.value = '1';
        marginEl.value = '5';
        imageEl.value = '0';
        reverseEl.checked = false;
        enlargeEl.checked = false;
        borderEl.checked = false;
        encEl.hidden = true;
        duplexEl.hidden = true;
        sumMain.textContent = '—';
        sumOrder.textContent = '';
        setErr('');
        setWarn('');
        setStatus('');
        work.hideProgress();
        syncControls();
      }

      frame.addEventListener('load', function () { state.frameLoaded = true; });
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
      pagesEl.addEventListener('change', function () {
        syncControls();
        if (pagesEl.value === 'custom') { rangeEl.focus(); if (!rangeEl.value) return; }
        schedulePrepare();
      });
      rangeEl.addEventListener('input', schedulePrepare);
      [sidesEl, paperEl, nupEl, marginEl, imageEl, reverseEl, enlargeEl, borderEl].forEach(function (el) {
        el.addEventListener('change', function () { syncControls(); schedulePrepare(); });
      });
      btnPrint.addEventListener('click', doPrint);
      btnDownload.addEventListener('click', download);
      btnSample.addEventListener('click', function () { loadSample(); });
      btnClear.addEventListener('click', clearAll);

      syncControls();
      /** 进页自动生成样例。 */
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('print-pdf');
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
