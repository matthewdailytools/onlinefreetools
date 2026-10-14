/**
 * 给 PDF 加文字：在指定页的坐标盖一行（或多行）文字，预览后下载（纯客户端）。
 * slug: add-text-to-pdf-file（见 work-tasks/add-text-to-pdf-file/02-tool-info.md）。
 *
 * 交互要点（2026-10-14 改写）：
 * - 文字、字号、颜色、透明度、旋转；粗体（Latin-1 / Helvetica）；
 * - 位置：左下 / 下中 / 右下 / 左上 / 上中 / 右上 / 页中 / 自定义 X·Y；
 *   预设按页宽高与边距算点；自定义可手输，也可点预览图落点；
 * - 对齐：左 / 中 / 右（相对锚点）；
 * - 页范围：全部 / 仅当前预览页 / 自定义（1-3, 5, 8-）；
 * - 高级：边距 %、最大行宽（折行）、旋转角度；
 * - 不改原有文字层；扫描件也可盖；中日韩 / 阿拉伯文走 Canvas 栅格化（pdfWorkUi.drawPageText）；
 * - Clear 清空且不重载样例；进页自动样例（2 页 + CONFIDENTIAL）。
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
import {
	pdfWorkUiBlockHtml,
	pdfWorkUiClientScript,
	pdfWorkUiCss,
	pdfWorkUiLabels,
} from './site/pdfWorkUi';

/** 本工具 i18n 键前缀。 */
const PREFIX = 'tool_add_text_to_pdf_file';

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
 * 渲染 add-text-to-pdf-file 工具页 HTML。
 * @param opts.lang 当前语言
 * @param opts.defaultLang 站点默认语言
 * @param opts.enabledLangs 启用语言列表
 * @returns 完整页面 HTML
 */
export const renderAddTextToPdfFilePage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 读取本工具键（自动拼前缀）。 */
	const tx = (key: string) => t(opts.lang, `${PREFIX}_${key}` as keyof typeof import('../site/i18n/en').default);

	const toolPath = '/tools/add-text-to-pdf-file';
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
			currentSlug: 'add-text-to-pdf-file',
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

	/** 页内样式：设置网格、坐标行、点选光标。 */
	const extraHeadHtml = `
  <style>
    ${pdfWorkUiCss()}
    .tools-bar { gap: .5rem; }
    .atp-grid { display:grid; grid-template-columns: repeat(auto-fit, minmax(11rem, 1fr)); gap:.5rem .75rem; margin-bottom:.75rem; }
    .atp-grid label { font-size:.875rem; margin-bottom:.15rem; display:block; }
    #atpRangeWrap[hidden], #atpXyWrap[hidden] { display:none !important; }
    #atpPdfCanvas { cursor: crosshair; }
    #atpStats { font-size:.9rem; background:#f8f9fa; border:1px solid #e9ecef; border-radius:.25rem; padding:.5rem .75rem; }
    .atp-color-row { display:flex; align-items:center; gap:.5rem; }
  </style>`;

	const contentHtml = `
    <div id="converter" class="tool-page-heading mb-3">
      <h1 class="h4 mb-0">${escapeHtml(tx('title'))}</h1>
    </div>

    <label class="tool-dropzone mb-2" for="atpFile" id="atpDrop">
      <input type="file" id="atpFile" accept="application/pdf,.pdf">
      <span class="tool-dropzone-title">${escapeHtml(tx('choose_file'))}</span>
      <span class="tool-dropzone-hint">${escapeHtml(tx('drop_hint'))}</span>
    </label>
    <p class="small text-muted mb-3" id="atpFileName"></p>

    <div class="mb-2">
      <label class="form-label" for="atpText">${escapeHtml(tx('text_label'))}</label>
      <textarea id="atpText" class="form-control form-control-sm" rows="2" maxlength="200" placeholder="${escapeHtml(tx('text_ph'))}">CONFIDENTIAL</textarea>
      <p class="form-text small mb-0">${escapeHtml(tx('text_hint'))}</p>
    </div>

    <div class="atp-grid">
      <div>
        <label for="atpPages">${escapeHtml(tx('pages_label'))}</label>
        <select id="atpPages" class="form-select form-select-sm">${optionsHtml([
					['all', tx('pages_all'), true],
					['current', tx('pages_current')],
					['custom', tx('pages_custom')],
				])}</select>
      </div>
      <div id="atpRangeWrap" hidden>
        <label for="atpRange">${escapeHtml(tx('range_label'))}</label>
        <input type="text" id="atpRange" class="form-control form-control-sm" placeholder="${escapeHtml(tx('range_ph'))}" autocomplete="off" inputmode="numeric">
      </div>
      <div>
        <label for="atpPos">${escapeHtml(tx('pos_label'))}</label>
        <select id="atpPos" class="form-select form-select-sm">${optionsHtml([
					['br', tx('pos_br'), true],
					['bc', tx('pos_bc')],
					['bl', tx('pos_bl')],
					['tr', tx('pos_tr')],
					['tc', tx('pos_tc')],
					['tl', tx('pos_tl')],
					['center', tx('pos_center')],
					['custom', tx('pos_custom')],
				])}</select>
      </div>
      <div>
        <label for="atpAlign">${escapeHtml(tx('align_label'))}</label>
        <select id="atpAlign" class="form-select form-select-sm">${optionsHtml([
					['left', tx('align_left')],
					['center', tx('align_center'), true],
					['right', tx('align_right')],
				])}</select>
      </div>
      <div>
        <label for="atpSize">${escapeHtml(tx('font_size'))}</label>
        <input id="atpSize" class="form-control form-control-sm" type="number" value="18" min="6" max="96" step="1">
      </div>
      <div>
        <label for="atpColor">${escapeHtml(tx('color_label'))}</label>
        <div class="atp-color-row">
          <input type="color" id="atpColor" class="form-control form-control-color form-control-sm" value="#c62828" title="${escapeHtml(tx('color_label'))}">
        </div>
      </div>
    </div>

    <div id="atpXyWrap" class="atp-grid" hidden>
      <div>
        <label for="atpX">${escapeHtml(tx('x_label'))}</label>
        <input id="atpX" class="form-control form-control-sm" type="number" value="48" step="1">
      </div>
      <div>
        <label for="atpY">${escapeHtml(tx('y_label'))}</label>
        <input id="atpY" class="form-control form-control-sm" type="number" value="48" step="1">
      </div>
      <div class="align-self-end">
        <p class="small text-muted mb-0" id="atpClickHint">${escapeHtml(tx('click_hint'))}</p>
      </div>
    </div>

    <div class="d-flex align-items-center tools-bar mb-2 flex-wrap">
      <button type="button" id="atpBtnApply" class="btn btn-primary btn-sm">${escapeHtml(tx('apply'))}</button>
      <button type="button" id="atpBtnDownload" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(tx('download'))}</button>
      <button type="button" id="atpBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx('sample'))}</button>
      <button type="button" id="atpBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx('clear'))}</button>
    </div>

    <details class="mb-3" id="atpAdvanced">
      <summary>${escapeHtml(tx('advanced'))}</summary>
      <div class="atp-grid mt-2">
        <div>
          <label for="atpMargin">${escapeHtml(tx('margin_label'))}</label>
          <select id="atpMargin" class="form-select form-select-sm">${optionsHtml([
						['2', tx('margin_2')],
						['5', tx('margin_5'), true],
						['8', tx('margin_8')],
						['12', tx('margin_12')],
					])}</select>
        </div>
        <div>
          <label for="atpOpacity">${escapeHtml(tx('opacity_label'))}</label>
          <input type="range" id="atpOpacity" class="form-range" min="15" max="100" step="5" value="85">
          <span id="atpOpacityVal" class="small">85%</span>
        </div>
        <div>
          <label for="atpRotate">${escapeHtml(tx('rotate_label'))}</label>
          <select id="atpRotate" class="form-select form-select-sm">${optionsHtml([
						['0', tx('rotate_0'), true],
						['15', tx('rotate_15')],
						['30', tx('rotate_30')],
						['45', tx('rotate_45')],
						['-45', tx('rotate_m45')],
					])}</select>
        </div>
        <div>
          <label for="atpMaxW">${escapeHtml(tx('maxw_label'))}</label>
          <input id="atpMaxW" class="form-control form-control-sm" type="number" value="" min="40" max="2000" step="10" placeholder="${escapeHtml(tx('maxw_ph'))}">
        </div>
      </div>
      <div class="form-check mt-1">
        <input class="form-check-input" type="checkbox" id="atpBold">
        <label class="form-check-label small" for="atpBold">${escapeHtml(tx('bold'))}</label>
      </div>
      <p class="form-text small mb-0">${escapeHtml(tx('advanced_hint'))}</p>
    </details>

    <p id="atpError" class="small text-danger mb-2" style="display:none;" role="alert"></p>
    <p id="atpWarn" class="small text-warning mb-2" style="display:none;" role="status"></p>
    <p id="atpStatus" class="small text-muted mb-2" role="status"></p>
    <div id="atpStats" class="mb-2" style="display:none;" aria-live="polite"></div>
    ${pdfWorkUiBlockHtml({ idPrefix: 'atpPdf', labels: pdfWorkLabels })}

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
			{ label: tx('ref_a_label'), href: 'https://pdf-lib.js.org/' },
			{ label: tx('ref_b_label'), href: 'https://mozilla.github.io/pdf.js/' },
		],
	});

	/** 前端脚本需要的文案（一次性注入）。 */
	const clientText = {
		empty: tx('empty'),
		emptyText: tx('empty_text'),
		errType: tx('err_type'),
		errLoad: tx('err_load'),
		errEncrypted: tx('err_encrypted'),
		errConvert: tx('err_convert'),
		errLib: tx('err_lib'),
		errRange: tx('err_range_tpl'),
		errNone: tx('err_none'),
		errSample: tx('err_sample'),
		warnLarge: tx('warn_large'),
		working: tx('status_working'),
		done: tx('status_done'),
		stats: tx('stats_tpl'),
		xySet: tx('xy_set_tpl'),
	};

	/**
	 * 客户端脚本：读入 PDF → 按页范围与位置预设盖字 → 预览 / 下载。
	 * 坐标原点在页左下；点预览图可写入自定义 X·Y。
	 */
	const extraBodyHtml = `
  ${pdfWorkUiClientScript()}
  <script src="/vendor/pdf-lib/pdf-lib.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script>
    (function () {
      /** 超过此字节数时软警告。 */
      var SOFT_BYTES = 25 * 1024 * 1024;
      /** 当前页面语言（数字格式）。 */
      var LANG = ${JSON.stringify(opts.lang)};
      /** 本地化文案。 */
      var T = ${JSON.stringify(clientText)};

      var fileInput = document.getElementById('atpFile');
      var fileNameEl = document.getElementById('atpFileName');
      var textEl = document.getElementById('atpText');
      var pagesEl = document.getElementById('atpPages');
      var rangeWrap = document.getElementById('atpRangeWrap');
      var rangeEl = document.getElementById('atpRange');
      var posEl = document.getElementById('atpPos');
      var alignEl = document.getElementById('atpAlign');
      var sizeEl = document.getElementById('atpSize');
      var colorEl = document.getElementById('atpColor');
      var xyWrap = document.getElementById('atpXyWrap');
      var xEl = document.getElementById('atpX');
      var yEl = document.getElementById('atpY');
      var marginEl = document.getElementById('atpMargin');
      var opacityEl = document.getElementById('atpOpacity');
      var opacityVal = document.getElementById('atpOpacityVal');
      var rotateEl = document.getElementById('atpRotate');
      var maxwEl = document.getElementById('atpMaxW');
      var boldEl = document.getElementById('atpBold');
      var btnApply = document.getElementById('atpBtnApply');
      var btnDownload = document.getElementById('atpBtnDownload');
      var btnSample = document.getElementById('atpBtnSample');
      var btnClear = document.getElementById('atpBtnClear');
      var errEl = document.getElementById('atpError');
      var warnEl = document.getElementById('atpWarn');
      var statusEl = document.getElementById('atpStatus');
      var statsEl = document.getElementById('atpStats');
      var canvas = document.getElementById('atpPdfCanvas');
      /** 共用进度条 + 预览。 */
      var work = window.OftPdfWork.bind('atpPdf', {
        onPageChange: function (n) { state.previewPage = n; }
      });
      var busyBtns = [btnApply, btnSample, btnClear, btnDownload];

      /**
       * 工具状态。
       * @type {{ bytes: Uint8Array|null, name: string, sizes: Array<{w:number,h:number}>, previewPage: number, result: Uint8Array|null, token: number }}
       */
      var state = { bytes: null, name: '', sizes: [], previewPage: 1, result: null, token: 0 };

      /**
       * 用 split/join 替换 {name} 占位符。
       * @param {string} tpl 模板
       * @param {Object<string, string|number>} map 占位符 → 值
       * @returns {string}
       */
      function fill(tpl, map) {
        var s = String(tpl || '');
        Object.keys(map || {}).forEach(function (k) {
          s = s.split('{' + k + '}').join(String(map[k]));
        });
        return s;
      }

      /** @param {string} text */
      function setErr(text) {
        errEl.textContent = text || '';
        errEl.style.display = text ? '' : 'none';
      }
      /** @param {string} text */
      function setWarn(text) {
        warnEl.textContent = text || '';
        warnEl.style.display = text ? '' : 'none';
      }
      /** @param {string} text */
      function setStatus(text) { statusEl.textContent = text || ''; }

      /** 显示/隐藏页码范围与自定义坐标。 */
      function syncForm() {
        rangeWrap.hidden = pagesEl.value !== 'custom';
        xyWrap.hidden = posEl.value !== 'custom';
        opacityVal.textContent = String(opacityEl.value) + '%';
        /* 预设位置时对齐跟锚点：左右角用左右对齐，中/中下用居中 */
        if (posEl.value === 'bl' || posEl.value === 'tl') alignEl.value = 'left';
        else if (posEl.value === 'br' || posEl.value === 'tr') alignEl.value = 'right';
        else if (posEl.value === 'bc' || posEl.value === 'tc' || posEl.value === 'center') alignEl.value = 'center';
      }

      /**
       * 解析页码范围文本为 1 起页码数组（按输入顺序，可重复）。
       * @param {string} text
       * @param {number} total
       * @returns {{ ok: true, pages: number[] }|{ ok: false, bad: string }}
       */
      function parseRange(text, total) {
        var raw = String(text || '').trim();
        if (!raw) return { ok: false, bad: '' };
        var parts = raw.split(/[,;\\s]+/).filter(Boolean);
        var out = [];
        for (var i = 0; i < parts.length; i++) {
          var p = parts[i];
          var m = p.match(/^(\\d+)\\s*-\\s*(\\d+)?$/);
          if (m) {
            var a = parseInt(m[1], 10);
            var b = m[2] ? parseInt(m[2], 10) : total;
            if (!(a >= 1 && a <= total && b >= 1 && b <= total && a <= b)) return { ok: false, bad: p };
            for (var n = a; n <= b; n++) out.push(n);
            continue;
          }
          if (!/^\\d+$/.test(p)) return { ok: false, bad: p };
          var one = parseInt(p, 10);
          if (!(one >= 1 && one <= total)) return { ok: false, bad: p };
          out.push(one);
        }
        if (!out.length) return { ok: false, bad: raw };
        return { ok: true, pages: out };
      }

      /**
       * 要盖字的页码列表（1 起）。
       * @param {number} total
       * @returns {{ ok: true, pages: number[] }|{ ok: false, bad: string }}
       */
      function targetPages(total) {
        var mode = pagesEl.value;
        if (mode === 'all') {
          var all = [];
          for (var i = 1; i <= total; i++) all.push(i);
          return { ok: true, pages: all };
        }
        if (mode === 'current') {
          var cur = Math.max(1, Math.min(total, state.previewPage || 1));
          return { ok: true, pages: [cur] };
        }
        return parseRange(rangeEl.value, total);
      }

      /**
       * 把 #rrggbb 转成 pdf-lib rgb(0–1)。
       * @param {string} hex
       * @returns {any}
       */
      function colorFromHex(hex) {
        var h = String(hex || '#000000').replace('#', '');
        if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
        var n = parseInt(h, 16);
        if (!isFinite(n)) n = 0;
        return PDFLib.rgb(((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255);
      }

      /**
       * 按位置预设与边距算出锚点（页左下为原点）。
       * @param {number} W 页宽 pt
       * @param {number} H 页高 pt
       * @param {number} size 字号 pt
       * @returns {{ x: number, y: number }}
       */
      function anchorFor(W, H, size) {
        var m = (Number(marginEl.value) || 5) / 100;
        var mx = W * m;
        var my = H * m;
        var pos = posEl.value;
        if (pos === 'custom') {
          return { x: Number(xEl.value) || 0, y: Number(yEl.value) || 0 };
        }
        if (pos === 'bl') return { x: mx, y: my };
        if (pos === 'bc') return { x: W / 2, y: my };
        if (pos === 'br') return { x: W - mx, y: my };
        if (pos === 'tl') return { x: mx, y: H - my - size };
        if (pos === 'tc') return { x: W / 2, y: H - my - size };
        if (pos === 'tr') return { x: W - mx, y: H - my - size };
        /* center */
        return { x: W / 2, y: H / 2 - size / 2 };
      }

      /**
       * 按对齐把锚点 X 调成 drawText 的左缘。
       * @param {number} x
       * @param {number} width
       * @returns {number}
       */
      function adjustX(x, width) {
        var a = alignEl.value;
        if (a === 'center') return x - width / 2;
        if (a === 'right') return x - width;
        return x;
      }

      /**
       * 在一页上盖字。
       * @param {any} doc
       * @param {any} page
       * @param {string} text
       * @param {any} font
       * @param {any} boldFont
       * @returns {Promise<{x:number,y:number}>}
       */
      function stampPage(doc, page, text, font, boldFont) {
        var size = Math.max(6, Math.min(96, Number(sizeEl.value) || 18));
        var box = page.getSize();
        var W = box.width;
        var H = box.height;
        var useFont = boldEl.checked && boldFont ? boldFont : font;
        var anchor = anchorFor(W, H, size);
        var maxW = Number(maxwEl.value);
        var measureOpts = isFinite(maxW) && maxW > 0 ? maxW : undefined;
        var lines = window.OftPdfWork.wrapTextLines(text, size, measureOpts, useFont);
        var width = 0;
        lines.forEach(function (ln) {
          width = Math.max(width, window.OftPdfWork.measureTextWidth(ln, size, useFont));
        });
        var x = adjustX(anchor.x, width);
        var y = anchor.y;
        var deg = Number(rotateEl.value) || 0;
        var rotate = deg ? PDFLib.degrees(deg) : undefined;
        var opacity = Math.max(0.15, Math.min(1, (Number(opacityEl.value) || 85) / 100));
        return window.OftPdfWork.drawPageText(doc, page, text, {
          x: x,
          y: y,
          size: size,
          font: useFont,
          color: colorFromHex(colorEl.value),
          opacity: opacity,
          rotate: rotate,
          maxWidth: measureOpts,
        }).then(function () {
          return { x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 };
        });
      }

      /**
       * 盖字并刷新预览。
       * @returns {Promise<void>}
       */
      function runApply() {
        if (!state.bytes) { setErr(T.empty); return Promise.resolve(); }
        var text = String(textEl.value || '').replace(/^\\s+|\\s+$/g, '');
        if (!text) { setErr(T.emptyText); return Promise.resolve(); }
        if (typeof PDFLib === 'undefined' || !PDFLib.PDFDocument) { setErr(T.errLib); return Promise.resolve(); }

        var token = ++state.token;
        work.setBusy(busyBtns, true);
        work.setProgress(null);
        setErr('');
        setStatus(T.working);
        btnDownload.disabled = true;
        statsEl.style.display = 'none';

        return window.OftPdfWork.yieldUi().then(function () {
          return PDFLib.PDFDocument.load(state.bytes.slice(0));
        }).then(function (doc) {
          if (token !== state.token) return null;
          var total = doc.getPageCount();
          var targets = targetPages(total);
          if (!targets.ok) {
            setErr(fill(T.errRange, { bad: targets.bad || '—' }));
            return null;
          }
          if (!targets.pages.length) {
            setErr(T.errNone);
            return null;
          }
          var fonts = PDFLib.StandardFonts;
          return Promise.all([
            doc.embedFont(fonts.Helvetica),
            doc.embedFont(fonts.HelveticaBold),
          ]).then(function (pair) {
            var font = pair[0];
            var boldFont = pair[1];
            var pages = doc.getPages();
            var list = targets.pages;
            var chain = Promise.resolve({ x: 0, y: 0 });
            var last = { x: 0, y: 0 };
            list.forEach(function (n, idx) {
              chain = chain.then(function () {
                if (token !== state.token) return last;
                var page = pages[n - 1];
                return stampPage(doc, page, text, font, boldFont).then(function (xy) {
                  last = xy;
                  work.setProgress(((idx + 1) / list.length) * 85);
                  return xy;
                });
              });
            });
            return chain.then(function (xy) {
              return doc.save().then(function (bytes) {
                return { bytes: new Uint8Array(bytes), count: list.length, xy: xy };
              });
            });
          });
        }).then(function (out) {
          if (!out || token !== state.token) return;
          state.result = out.bytes;
          work.setProgress(92);
          return work.showPreview(out.bytes).then(function () {
            work.setProgress(100);
            btnDownload.disabled = false;
            setStatus(T.done);
            statsEl.style.display = '';
            statsEl.textContent = fill(T.stats, {
              n: out.count,
              x: out.xy.x,
              y: out.xy.y,
              size: Number(sizeEl.value) || 18,
            });
          });
        }).catch(function (err) {
          if (token !== state.token) return;
          var msg = String((err && err.message) || err || '');
          if (/password|encrypt/i.test(msg)) setErr(T.errEncrypted);
          else setErr(T.errConvert);
          setStatus('');
        }).finally(function () {
          if (token !== state.token) return;
          work.setBusy(busyBtns, false);
          work.hideProgress();
          btnDownload.disabled = !state.result;
        });
      }

      /** 下载：<原名>-text.pdf */
      function downloadResult() {
        if (!state.result) return;
        var base = (state.name || 'document').replace(/[.]pdf$/i, '') || 'document';
        var blob = new Blob([state.result], { type: 'application/pdf' });
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = base + '-text.pdf';
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      }

      /**
       * 读入源 PDF 字节并刷新源预览。
       * @param {Uint8Array} bytes
       * @param {string} name
       * @returns {Promise<void>}
       */
      function loadBytes(bytes, name) {
        setErr('');
        state.token += 1;
        state.bytes = bytes;
        state.name = name || 'document.pdf';
        state.result = null;
        state.previewPage = 1;
        state.sizes = [];
        btnDownload.disabled = true;
        statsEl.style.display = 'none';
        work.clearPreview();
        if (typeof PDFLib === 'undefined' || !PDFLib.PDFDocument) {
          setErr(T.errLib);
          return Promise.resolve();
        }
        return PDFLib.PDFDocument.load(bytes.slice(0)).then(function (doc) {
          state.sizes = doc.getPages().map(function (p) {
            var s = p.getSize();
            return { w: s.width, h: s.height };
          });
          return work.showPreview(bytes);
        }).catch(function (err) {
          var msg = String((err && err.message) || '');
          if (/password|encrypt/i.test(msg)) setErr(T.errEncrypted);
          else setErr(T.errLoad);
          state.bytes = null;
        });
      }

      /**
       * 打开用户文件。
       * @param {File} file
       * @returns {Promise<void>}
       */
      function openFile(file) {
        setErr('');
        setWarn('');
        setStatus('');
        var isPdf = /pdf/i.test(file.type || '') || /[.]pdf$/i.test(file.name || '');
        if (!isPdf) { setErr(T.errType); return Promise.resolve(); }
        if (file.size > SOFT_BYTES) setWarn(T.warnLarge);
        fileNameEl.textContent = file.name || '';
        work.setBusy(busyBtns, true);
        return file.arrayBuffer().then(function (ab) {
          return loadBytes(new Uint8Array(ab), file.name || 'document.pdf');
        }).catch(function () {
          setErr(T.errLoad);
        }).finally(function () {
          work.setBusy(busyBtns, false);
          work.hideProgress();
        });
      }

      /**
       * 生成 2 页 US Letter 样例并盖 CONFIDENTIAL。
       * @returns {Promise<void>}
       */
      function loadSample() {
        setErr('');
        setWarn('');
        if (typeof PDFLib === 'undefined' || !PDFLib.PDFDocument) {
          setErr(T.errSample);
          return Promise.resolve();
        }
        var L = PDFLib;
        textEl.value = 'CONFIDENTIAL';
        posEl.value = 'br';
        alignEl.value = 'right';
        sizeEl.value = '18';
        colorEl.value = '#c62828';
        pagesEl.value = 'all';
        rangeEl.value = '';
        opacityEl.value = '85';
        rotateEl.value = '0';
        maxwEl.value = '';
        boldEl.checked = true;
        syncForm();
        return L.PDFDocument.create().then(function (doc) {
          doc.setTitle('Add-text sample');
          return doc.embedFont(L.StandardFonts.Helvetica).then(function (font) {
            for (var n = 1; n <= 2; n++) {
              var page = doc.addPage([612, 792]);
              page.drawText('Sample PDF — page ' + n + ' of 2', {
                x: 48, y: 720, size: 16, font: font, color: L.rgb(0.15, 0.2, 0.35)
              });
              page.drawText('Click Add text to stamp every page. Click the preview to set a custom spot.', {
                x: 48, y: 690, size: 11, font: font, color: L.rgb(0.35, 0.35, 0.35)
              });
              page.drawRectangle({
                x: 48, y: 120, width: 516, height: 480,
                borderColor: L.rgb(0.7, 0.75, 0.85), borderWidth: 1
              });
            }
            return doc.save();
          });
        }).then(function (bytes) {
          fileInput.value = '';
          fileNameEl.textContent = '';
          return loadBytes(new Uint8Array(bytes), 'add-text-sample.pdf').then(function () {
            return runApply();
          });
        }).catch(function () { setErr(T.errSample); });
      }

      /** 清空：不重载样例。 */
      function clearAll() {
        state.token += 1;
        state.bytes = null;
        state.name = '';
        state.sizes = [];
        state.previewPage = 1;
        state.result = null;
        fileInput.value = '';
        fileNameEl.textContent = '';
        textEl.value = '';
        pagesEl.value = 'all';
        rangeEl.value = '';
        posEl.value = 'br';
        alignEl.value = 'right';
        sizeEl.value = '18';
        colorEl.value = '#c62828';
        xEl.value = '48';
        yEl.value = '48';
        marginEl.value = '5';
        opacityEl.value = '85';
        rotateEl.value = '0';
        maxwEl.value = '';
        boldEl.checked = false;
        btnDownload.disabled = true;
        statsEl.style.display = 'none';
        work.clearPreview();
        work.hideProgress();
        setErr('');
        setWarn('');
        setStatus('');
        syncForm();
      }

      /**
       * 预览画布点击 → 写入自定义 X·Y（PDF 点，原点左下）。
       * @param {MouseEvent} e
       */
      function onCanvasClick(e) {
        if (!canvas || !state.bytes || !state.sizes.length) return;
        var idx = Math.max(0, Math.min(state.sizes.length - 1, (state.previewPage || 1) - 1));
        var sz = state.sizes[idx];
        var rect = canvas.getBoundingClientRect();
        if (!rect.width || !rect.height) return;
        var sx = (e.clientX - rect.left) / rect.width;
        var sy = (e.clientY - rect.top) / rect.height;
        if (sx < 0 || sx > 1 || sy < 0 || sy > 1) return;
        var pdfX = Math.round(sx * sz.w * 10) / 10;
        var pdfY = Math.round((1 - sy) * sz.h * 10) / 10;
        posEl.value = 'custom';
        xEl.value = String(pdfX);
        yEl.value = String(pdfY);
        syncForm();
        setStatus(fill(T.xySet, { x: pdfX, y: pdfY }));
      }

      /* —— 事件 —— */
      fileInput.addEventListener('change', function () {
        var f = fileInput.files && fileInput.files[0];
        if (f) openFile(f);
        fileInput.value = '';
      });
      var dropLabel = document.getElementById('atpDrop');
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
      pagesEl.addEventListener('change', syncForm);
      posEl.addEventListener('change', syncForm);
      opacityEl.addEventListener('input', function () { opacityVal.textContent = String(opacityEl.value) + '%'; });
      btnApply.addEventListener('click', function () { runApply(); });
      btnDownload.addEventListener('click', downloadResult);
      btnSample.addEventListener('click', function () { loadSample(); });
      btnClear.addEventListener('click', clearAll);
      if (canvas) canvas.addEventListener('click', onCanvasClick);

      syncForm();
      /** 进页自动样例（lint:tool-page 要求字面 loadSample）。 */
      loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('add-text-to-pdf-file');
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
