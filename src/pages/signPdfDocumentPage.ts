/**
 * 在 PDF 上盖手写/打字签名图（PNG 盖章，非 PKI 数字签名）。
 * slug: sign-pdf-document
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

/** 非默认语言时为路径加语言前缀。 */
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * 渲染 sign-pdf-document 工具页。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderSignPdfDocumentPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 工具路径。 */
	const toolPath = '/tools/sign-pdf-document';
	/** 当前语言规范路径。 */
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);

	/** 文案 i18n 前缀。 */
	const prefix = 'tool_sign_pdf_document';
	/** 页面 <title>。 */
	const title = `${t(opts.lang, prefix + '_title')} | ${t(opts.lang, 'brand')}`;
	/** meta / 页首摘要。 */
	const description = t(opts.lang, prefix + '_description');

	/** 顶部导航项。 */
	const navItems = buildToolPageNavItems(opts.lang, opts.defaultLang);

	/** hreflang 映射始终带显式语言段。 */
	const withExplicitLangPrefix = (code: SiteLang, pathname: string) => {
		const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
		return `/${code}${safe}`.replace(/\/{2,}/g, '/');
	};

	/** 语言切换器备选 href。 */
	const langAlternates: Record<string, string> = Object.fromEntries(
		(supportedLangs || []).map((code) => [code, withExplicitLangPrefix(code, toolPath)])
	);

	/** 绝对 hreflang 列表。 */
	const alternates: HreflangAlternate[] = (supportedLangs || []).map((code) => ({
		lang: code,
		href: `https://onlinefreetools.org${withLangPrefix(code, toolPath, opts.defaultLang)}`,
	}));

	/** 页头 HTML。 */
	const headerHtml = renderHeader({
		lang: opts.lang,
		brandHref: withLangPrefix(opts.lang, '/', opts.defaultLang),
		navItems,
		enabledLangs: supportedLangs,
		langAlternates,
	});

	/** 侧栏 HTML。 */
	const sidebarHtml = renderSidebar({
		title: t(opts.lang, 'nav_tools'),
		groups: buildToolSidebarItems({
			lang: opts.lang,
			defaultLang: opts.defaultLang,
			currentSlug: 'sign-pdf-document',
			currentAnchor: '#converter',
		}),
		id: 'toolNav',
	});

	/** 页脚 HTML。 */
	const footerHtml = renderFooter({ lang: opts.lang });

	/** PDF 进度/预览共用文案。 */
	const pdfWorkLabels = pdfWorkUiLabels(opts.lang);
	/** 页内样式：签名画布描边。 */
	const extraHeadHtml = `
  <style>
    .tools-bar { gap: .5rem; }
    #signPdfPad { display: block; width: 100%; max-width: 360px; height: 110px; border: 1px dashed #adb5bd; border-radius: .25rem; background: #fff; touch-action: none; cursor: crosshair; }
    .sign-pdf-ink-row { gap: .4rem; }
    .sign-pdf-ink-preview { font-style: italic; font-family: "Segoe Script", "Brush Script MT", "Apple Chancery", cursive; font-size: 1.35rem; line-height: 1; color: #1a237e; min-width: 1.5rem; }
    .sign-pdf-ink-swatch { width: 1.2rem; height: 1.2rem; border: 1px solid #ced4da; border-radius: 50%; padding: 0; cursor: pointer; flex: 0 0 auto; }
    .sign-pdf-ink-swatch[aria-pressed="true"] { outline: 2px solid #0d6efd; outline-offset: 1px; }
    .sign-pdf-pos-grid { display: grid; grid-template-columns: 1fr auto 1fr; grid-template-areas: "tl . tr" ". center ." "bl . br"; gap: .35rem .75rem; max-width: 22rem; align-items: center; }
    .sign-pdf-pos-grid .pos-tl { grid-area: tl; }
    .sign-pdf-pos-grid .pos-tr { grid-area: tr; justify-self: end; }
    .sign-pdf-pos-grid .pos-center { grid-area: center; }
    .sign-pdf-pos-grid .pos-bl { grid-area: bl; }
    .sign-pdf-pos-grid .pos-br { grid-area: br; justify-self: end; }
    .sign-pdf-pos-grid .form-check { margin: 0; }
    ${pdfWorkUiCss()}
  </style>`;

	/** 首屏交互区。 */
	const contentHtml = `
    <div id="converter" class="tool-page-heading mb-3">
      <h1 class="h4 mb-0">${escapeHtml(t(opts.lang, prefix + '_title'))}</h1>
    </div>

    <label class="tool-dropzone mb-3" id="signPdfDrop" for="signPdfFile">
      <input type="file" id="signPdfFile" accept="application/pdf,.pdf">
      <span class="tool-dropzone-title">${escapeHtml(t(opts.lang, prefix + '_choose_file'))}</span>
      <span class="tool-dropzone-hint">${escapeHtml(t(opts.lang, prefix + '_drop_hint'))}</span>
    </label>

    <p id="signPdfMeta" class="small text-muted mb-2" style="display:none;"></p>

    <div class="row g-2 mb-2">
      <div class="col-12 col-md-4">
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="signPdfMode" id="signPdfModeType" value="type" checked>
          <label class="form-check-label" for="signPdfModeType">${escapeHtml(t(opts.lang, prefix + '_mode_type'))}</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="signPdfMode" id="signPdfModeDraw" value="draw">
          <label class="form-check-label" for="signPdfModeDraw">${escapeHtml(t(opts.lang, prefix + '_mode_draw'))}</label>
        </div>
      </div>
      <div class="col-12 col-md-5">
        <label class="form-label" for="signPdfName">${escapeHtml(t(opts.lang, prefix + '_name_label'))}</label>
        <input id="signPdfName" class="form-control form-control-sm" type="text" value="Jane Sample" maxlength="80">
      </div>
      <div class="col-12 col-md-3">
        <label class="form-label" for="signPdfColor">${escapeHtml(t(opts.lang, prefix + '_color_label'))}</label>
        <div class="d-flex align-items-center sign-pdf-ink-row flex-wrap">
          <input type="color" id="signPdfColor" class="form-control form-control-color form-control-sm" value="#1a237e" aria-label="${escapeHtml(t(opts.lang, prefix + '_color_label'))}">
          <span id="signPdfInkPreview" class="sign-pdf-ink-preview" aria-hidden="true">Aa</span>
          <button type="button" class="sign-pdf-ink-swatch" data-ink="#111111" title="#111111" aria-label="#111111" style="background:#111111"></button>
          <button type="button" class="sign-pdf-ink-swatch" data-ink="#1a237e" title="#1a237e" aria-label="#1a237e" style="background:#1a237e"></button>
          <button type="button" class="sign-pdf-ink-swatch" data-ink="#1565c0" title="#1565c0" aria-label="#1565c0" style="background:#1565c0"></button>
          <button type="button" class="sign-pdf-ink-swatch" data-ink="#c62828" title="#c62828" aria-label="#c62828" style="background:#c62828"></button>
        </div>
      </div>
      <div class="col-12">
        <p class="small text-muted mb-1">${escapeHtml(t(opts.lang, prefix + '_draw_hint'))}</p>
        <canvas id="signPdfPad" width="360" height="110" aria-label="${escapeHtml(t(opts.lang, prefix + '_mode_draw'))}"></canvas>
        <button type="button" id="signPdfBtnClearPad" class="btn btn-outline-secondary btn-sm mt-1">${escapeHtml(t(opts.lang, prefix + '_clear_pad'))}</button>
      </div>
      <div class="col-12">
        <span class="form-label d-block" id="signPdfPosLabel">${escapeHtml(t(opts.lang, prefix + '_pos_label'))}</span>
        <div class="sign-pdf-pos-grid" role="radiogroup" aria-labelledby="signPdfPosLabel">
          <div class="form-check pos-tl">
            <input class="form-check-input" type="radio" name="signPdfPos" id="signPdfPosTl" value="tl">
            <label class="form-check-label" for="signPdfPosTl">${escapeHtml(t(opts.lang, prefix + '_pos_tl'))}</label>
          </div>
          <div class="form-check pos-tr">
            <input class="form-check-input" type="radio" name="signPdfPos" id="signPdfPosTr" value="tr">
            <label class="form-check-label" for="signPdfPosTr">${escapeHtml(t(opts.lang, prefix + '_pos_tr'))}</label>
          </div>
          <div class="form-check pos-center">
            <input class="form-check-input" type="radio" name="signPdfPos" id="signPdfPosCenter" value="center">
            <label class="form-check-label" for="signPdfPosCenter">${escapeHtml(t(opts.lang, prefix + '_pos_center'))}</label>
          </div>
          <div class="form-check pos-bl">
            <input class="form-check-input" type="radio" name="signPdfPos" id="signPdfPosBl" value="bl">
            <label class="form-check-label" for="signPdfPosBl">${escapeHtml(t(opts.lang, prefix + '_pos_bl'))}</label>
          </div>
          <div class="form-check pos-br">
            <input class="form-check-input" type="radio" name="signPdfPos" id="signPdfPosBr" value="br" checked>
            <label class="form-check-label" for="signPdfPosBr">${escapeHtml(t(opts.lang, prefix + '_pos_br'))}</label>
          </div>
        </div>
      </div>
      <div class="col-4">
        <label class="form-label" for="signPdfX">${escapeHtml(t(opts.lang, prefix + '_x_label'))}</label>
        <input id="signPdfX" class="form-control form-control-sm" type="number" step="any" value="">
      </div>
      <div class="col-4">
        <label class="form-label" for="signPdfY">${escapeHtml(t(opts.lang, prefix + '_y_label'))}</label>
        <input id="signPdfY" class="form-control form-control-sm" type="number" step="any" value="">
      </div>
      <div class="col-4">
        <label class="form-label" for="signPdfPage">${escapeHtml(t(opts.lang, prefix + '_page_label'))}</label>
        <select id="signPdfPage" class="form-select form-select-sm">
          <option value="all">${escapeHtml(t(opts.lang, prefix + '_page_all'))}</option>
          <option value="1" selected>${escapeHtml(t(opts.lang, prefix + '_page_option').replace('{n}', '1'))}</option>
        </select>
      </div>
    </div>

    <div class="d-flex align-items-center tools-bar mb-2 flex-wrap">
      <button type="button" id="signPdfBtnApply" class="btn btn-primary btn-sm">${escapeHtml(t(opts.lang, prefix + '_apply'))}</button>
      <button type="button" id="signPdfBtnDownload" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(t(opts.lang, prefix + '_download'))}</button>
      <button type="button" id="signPdfBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, prefix + '_sample'))}</button>
      <button type="button" id="signPdfBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, prefix + '_clear'))}</button>
    </div>

    <p id="signPdfError" class="small text-danger mb-2" style="display:none;" role="alert"></p>
    <p id="signPdfStatus" class="small text-muted mb-2" role="status"></p>
    ${pdfWorkUiBlockHtml({ idPrefix: 'signPdf', labels: pdfWorkLabels })}

    <p class="tool-lead mb-4">${escapeHtml(description)}</p>`;

	/** How / Rules / Example / Use cases。 */
	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix,
		mode: 'rules',
		usecaseCount: 3,
		ruleItemCount: 4,
	});

	/** 权威引用。 */
	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{ label: 'pdf-lib', href: 'https://pdf-lib.js.org/' },
			{ label: 'PDF 1.7 — appearance streams (ISO 32000)', href: 'https://www.iso.org/standard/51502.html' },
		],
	});

	/**
	 * 客户端脚本：手写画布或打字姓名 → PNG → pdf-lib embedPng 盖到指定页 X/Y。
	 */
	const extraBodyHtml = `
  ${pdfWorkUiClientScript()}
  <script src="/vendor/pdf-lib/pdf-lib.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script>
    (function () {
      /** 单文件软警告阈值（字节）。 */
      var SOFT_BYTES = 25 * 1024 * 1024;
      /** 文件输入。 */
      var fileInput = document.getElementById('signPdfFile');
      /** 拖放区。 */
      var dropEl = document.getElementById('signPdfDrop');
      /** 元信息。 */
      var metaEl = document.getElementById('signPdfMeta');
      /** 打字姓名。 */
      var nameInput = document.getElementById('signPdfName');
      /** 签名墨水颜色选择器。 */
      var colorInput = document.getElementById('signPdfColor');
      /** 颜色预览字样。 */
      var inkPreview = document.getElementById('signPdfInkPreview');
      /** 常用墨水色块。 */
      var inkSwatches = Array.prototype.slice.call(document.querySelectorAll('.sign-pdf-ink-swatch'));
      /** 默认签名墨水色（与历史样例一致）。 */
      var DEFAULT_INK = '#1a237e';
      /** 打字模式单选。 */
      var modeType = document.getElementById('signPdfModeType');
      /** 手写模式单选。 */
      var modeDraw = document.getElementById('signPdfModeDraw');
      /** 手写画布。 */
      var pad = document.getElementById('signPdfPad');
      /** 清空画布。 */
      var btnClearPad = document.getElementById('signPdfBtnClearPad');
      /** X 坐标（PDF 点，原点左下）。 */
      var xInput = document.getElementById('signPdfX');
      /** Y 坐标（PDF 点，原点左下）。 */
      var yInput = document.getElementById('signPdfY');
      /** 页码下拉（含全部页）。 */
      var pageInput = document.getElementById('signPdfPage');
      /** 位置快捷单选。 */
      var posRadios = Array.prototype.slice.call(document.querySelectorAll('input[name="signPdfPos"]'));
      /** 签名图在 PDF 上的宽度（点）。 */
      var STAMP_W = 160;
      /** 画板高/宽，用于估算盖章高度。 */
      var PAD_ASPECT = 110 / 360;
      /** 四角边距（点）。 */
      var POS_MARGIN = 36;
      /** 无 PDF 时的回退页面尺寸（A4）。 */
      var FALLBACK_SIZE = { width: 595, height: 842 };
      /** 当前选中的位置预设：tl/tr/bl/br/center，空字符串表示自定义坐标。 */
      var activePreset = 'br';
      /** 正在由预设回写坐标，避免误清单选。 */
      var syncingPos = false;
      /** 各页宽高（PDF 点）。 */
      var pageSizes = [];
      /** 盖章按钮。 */
      var btnApply = document.getElementById('signPdfBtnApply');
      /** 下载按钮。 */
      var btnDownload = document.getElementById('signPdfBtnDownload');
      /** 样例按钮。 */
      var btnSample = document.getElementById('signPdfBtnSample');
      /** 清空全部。 */
      var btnClear = document.getElementById('signPdfBtnClear');
      /** 错误行。 */
      var errEl = document.getElementById('signPdfError');
      /** 状态行。 */
      var statusEl = document.getElementById('signPdfStatus');
      /** 进度 + 结果 PDF 预览。 */
      var work = window.OftPdfWork.bind('signPdf');
      /** 忙碌按钮组。 */
      var busyBtns = [btnApply, btnSample, btnClear, btnDownload, btnClearPad];

      /** 源 PDF 字节。 */
      var sourceBytes = null;
      /** 源文件名。 */
      var sourceName = '';
      /** 盖章后 PDF。 */
      var resultBytes = null;
      /** 画布是否已有笔迹。 */
      var padDirty = false;

      /** 页面可见文案。 */
      var msg = {
        empty: ${JSON.stringify(t(opts.lang, prefix + '_empty'))},
        loadFail: ${JSON.stringify(t(opts.lang, prefix + '_err_load'))},
        convertFail: ${JSON.stringify(t(opts.lang, prefix + '_err_convert'))},
        encrypted: ${JSON.stringify(t(opts.lang, prefix + '_err_encrypted'))},
        noSig: ${JSON.stringify(t(opts.lang, prefix + '_err_nosig'))},
        working: ${JSON.stringify(t(opts.lang, prefix + '_status_working'))},
        done: ${JSON.stringify(t(opts.lang, prefix + '_status_done'))},
        large: ${JSON.stringify(t(opts.lang, prefix + '_warn_large'))},
        pageAll: ${JSON.stringify(t(opts.lang, prefix + '_page_all'))},
        pageOption: ${JSON.stringify(t(opts.lang, prefix + '_page_option'))}
      };

      /**
       * 显示或隐藏错误。
       * @param {string} text
       */
      function setErr(text) {
        if (!text) { errEl.style.display = 'none'; errEl.textContent = ''; return; }
        errEl.textContent = text;
        errEl.style.display = '';
      }

      /**
       * 更新状态行。
       * @param {string} text
       */
      function setStatus(text) {
        statusEl.textContent = text || '';
      }

      /**
       * 刷新文件元信息。
       * @param {string} name
       * @param {number} bytesLen
       */
      function setMeta(name, bytesLen) {
        if (!name) { metaEl.style.display = 'none'; metaEl.textContent = ''; return; }
        metaEl.textContent = name + ' · ' + (bytesLen / 1024).toFixed(1) + ' KB';
        metaEl.style.display = '';
      }

      /** pdf-lib 是否可用。 */
      function hasPdfLib() {
        return typeof PDFLib !== 'undefined' && PDFLib && typeof PDFLib.PDFDocument === 'function';
      }

      /**
       * 估算或按实际图片得到盖章宽高。
       * @param {number} [imgW]
       * @param {number} [imgH]
       * @returns {{w:number,h:number}}
       */
      function stampSize(imgW, imgH) {
        var w = STAMP_W;
        var ratio = (imgW > 0 && imgH > 0) ? (imgH / imgW) : PAD_ASPECT;
        return { w: w, h: w * ratio };
      }

      /**
       * 按预设计算 PDF 坐标（原点左下）。
       * @param {string} pos tl/tr/bl/br/center
       * @param {number} pageW
       * @param {number} pageH
       * @param {number} stampW
       * @param {number} stampH
       * @returns {{x:number,y:number}}
       */
      function coordsForPreset(pos, pageW, pageH, stampW, stampH) {
        var m = POS_MARGIN;
        var x = m;
        var y = m;
        if (pos === 'tr' || pos === 'br') x = Math.max(m, pageW - stampW - m);
        if (pos === 'tl' || pos === 'tr') y = Math.max(m, pageH - stampH - m);
        if (pos === 'center') {
          x = Math.max(0, (pageW - stampW) / 2);
          y = Math.max(0, (pageH - stampH) / 2);
        }
        return { x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 };
      }

      /**
       * 当前下拉对应的页面尺寸（全部页用第 1 页展示坐标）。
       * @returns {{width:number,height:number}}
       */
      function currentPageSize() {
        if (!pageSizes.length) return FALLBACK_SIZE;
        if (pageInput && pageInput.value === 'all') return pageSizes[0];
        var idx = Math.max(0, Math.min(pageSizes.length - 1, (Number(pageInput && pageInput.value) || 1) - 1));
        return pageSizes[idx];
      }

      /**
       * 把预设坐标写入 X/Y 输入框。
       * @param {string} pos
       */
      function applyPresetToInputs(pos) {
        if (!xInput || !yInput) return;
        var size = currentPageSize();
        var sz = stampSize();
        var xy = coordsForPreset(pos, size.width, size.height, sz.w, sz.h);
        syncingPos = true;
        xInput.value = String(xy.x);
        yInput.value = String(xy.y);
        syncingPos = false;
      }

      /**
       * 当前勾选的位置预设，无勾选则空串。
       * @returns {string}
       */
      function selectedPreset() {
        var hit = posRadios.filter(function (r) { return r.checked; })[0];
        return hit ? String(hit.value || '') : '';
      }

      /**
       * 用页数重建页码下拉，并尽量保留原选项。
       * @param {number} count
       */
      function fillPageSelect(count) {
        if (!pageInput) return;
        var prev = pageInput.value;
        var n = Math.max(1, count || 1);
        pageInput.innerHTML = '';
        var allOpt = document.createElement('option');
        allOpt.value = 'all';
        allOpt.textContent = msg.pageAll;
        pageInput.appendChild(allOpt);
        for (var i = 1; i <= n; i++) {
          var opt = document.createElement('option');
          opt.value = String(i);
          opt.textContent = String(msg.pageOption || '{n}').replace('{n}', String(i));
          pageInput.appendChild(opt);
        }
        if (prev === 'all') pageInput.value = 'all';
        else if (Number(prev) >= 1 && Number(prev) <= n) pageInput.value = String(Number(prev));
        else pageInput.value = String(n);
      }

      /**
       * 读取 PDF 各页尺寸并刷新页码列表 / 预设坐标。
       * @param {Uint8Array} pdfBytes
       * @returns {Promise<void>}
       */
      function refreshPageMeta(pdfBytes) {
        if (!hasPdfLib() || !pdfBytes) {
          pageSizes = [];
          fillPageSelect(1);
          if (activePreset) applyPresetToInputs(activePreset);
          return Promise.resolve();
        }
        return PDFLib.PDFDocument.load(pdfBytes.slice(0)).then(function (doc) {
          pageSizes = doc.getPages().map(function (p) {
            var box = p.getSize();
            return { width: box.width, height: box.height };
          });
          fillPageSelect(pageSizes.length);
          activePreset = selectedPreset() || activePreset;
          if (activePreset) applyPresetToInputs(activePreset);
        });
      }

      /**
       * 盖章目标页下标（0-based）。
       * @param {number} pageCount
       * @returns {number[]}
       */
      function targetPageIndexes(pageCount) {
        if (pageInput && pageInput.value === 'all') {
          var all = [];
          for (var i = 0; i < pageCount; i++) all.push(i);
          return all;
        }
        var idx = Math.max(0, Math.min(pageCount - 1, (Number(pageInput && pageInput.value) || 1) - 1));
        return [idx];
      }

      /** 当前是否打字模式。 */
      function isTypeMode() {
        return !!(modeType && modeType.checked);
      }

      /**
       * 读取当前签名墨水颜色。
       * @returns {string} 合法 #rrggbb，否则回退默认海军蓝
       */
      function getInkColor() {
        var v = colorInput && colorInput.value ? String(colorInput.value).trim() : '';
        return /^#[0-9a-fA-F]{6}$/.test(v) ? v.toLowerCase() : DEFAULT_INK;
      }

      /**
       * 把当前墨水色同步到画笔、预览字样与色块选中态。
       */
      function applyInkColor() {
        var ink = getInkColor();
        if (pad) {
          var ctx = pad.getContext('2d');
          ctx.strokeStyle = ink;
        }
        if (inkPreview) inkPreview.style.color = ink;
        inkSwatches.forEach(function (btn) {
          var match = String(btn.getAttribute('data-ink') || '').toLowerCase() === ink;
          btn.setAttribute('aria-pressed', match ? 'true' : 'false');
        });
      }

      /** 绑定手写画布。 */
      function bindPad() {
        if (!pad) return;
        var ctx = pad.getContext('2d');
        ctx.strokeStyle = getInkColor();
        ctx.lineWidth = 2.2;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        /** 是否正在落笔。 */
        var drawing = false;
        /**
         * 事件坐标映射到画布像素。
         * @param {MouseEvent|TouchEvent} ev
         */
        function pos(ev) {
          var r = pad.getBoundingClientRect();
          var t = ev.touches && ev.touches[0] ? ev.touches[0] : ev;
          return {
            x: (t.clientX - r.left) * (pad.width / r.width),
            y: (t.clientY - r.top) * (pad.height / r.height)
          };
        }
        function start(ev) {
          ev.preventDefault();
          drawing = true;
          padDirty = true;
          ctx.strokeStyle = getInkColor();
          var p = pos(ev);
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
        }
        function move(ev) {
          if (!drawing) return;
          ev.preventDefault();
          var p = pos(ev);
          ctx.lineTo(p.x, p.y);
          ctx.stroke();
        }
        function end(ev) {
          if (!drawing) return;
          ev.preventDefault();
          drawing = false;
        }
        pad.addEventListener('mousedown', start);
        pad.addEventListener('mousemove', move);
        window.addEventListener('mouseup', end);
        pad.addEventListener('touchstart', start, { passive: false });
        pad.addEventListener('touchmove', move, { passive: false });
        pad.addEventListener('touchend', end);
      }

      /** 清空手写画布。 */
      function clearPad() {
        if (!pad) return;
        var ctx = pad.getContext('2d');
        ctx.clearRect(0, 0, pad.width, pad.height);
        padDirty = false;
      }

      /**
       * 把画布导出为 PNG 字节。
       * @param {HTMLCanvasElement} canvas
       * @returns {Promise<Uint8Array>}
       */
      function canvasToPng(canvas) {
        return new Promise(function (resolve, reject) {
          canvas.toBlob(function (blob) {
            if (!blob) return reject(new Error('png'));
            blob.arrayBuffer().then(function (ab) {
              resolve(new Uint8Array(ab));
            }).catch(reject);
          }, 'image/png');
        });
      }

      /**
       * 用姓名绘制打字签名 PNG。
       * @param {string} name
       * @returns {Promise<Uint8Array>}
       */
      function typedSigPng(name) {
        var c = document.createElement('canvas');
        c.width = 360;
        c.height = 110;
        var ctx = c.getContext('2d');
        ctx.clearRect(0, 0, 360, 110);
        ctx.fillStyle = getInkColor();
        ctx.font = 'italic 36px "Segoe Script", "Brush Script MT", "Apple Chancery", cursive';
        ctx.fillText(String(name || '').slice(0, 40), 12, 70);
        return canvasToPng(c);
      }

      /**
       * 取得当前签名 PNG。
       * @returns {Promise<Uint8Array>}
       */
      function getSignaturePng() {
        if (isTypeMode()) {
          var name = (nameInput.value || '').trim();
          if (!name) return Promise.reject(new Error('nosig'));
          return typedSigPng(name);
        }
        if (!padDirty) return Promise.reject(new Error('nosig'));
        return canvasToPng(pad);
      }

      /**
       * 把 PNG 盖到所选页（或全部页）的 X/Y。
       * @param {Uint8Array} pdfBytes
       * @param {Uint8Array} pngBytes
       * @returns {Promise<Uint8Array>}
       */
      function stampPng(pdfBytes, pngBytes) {
        if (!hasPdfLib()) return Promise.reject(new Error('pdflib'));
        return PDFLib.PDFDocument.load(pdfBytes.slice(0)).then(function (doc) {
          return doc.embedPng(pngBytes).then(function (img) {
            var pages = doc.getPages();
            var sz = stampSize(img.width, img.height);
            var preset = selectedPreset() || activePreset;
            var customX = Number(xInput && xInput.value);
            var customY = Number(yInput && yInput.value);
            targetPageIndexes(pages.length).forEach(function (idx) {
              var page = pages[idx];
              var box = page.getSize();
              var x;
              var y;
              if (preset) {
                var xy = coordsForPreset(preset, box.width, box.height, sz.w, sz.h);
                x = xy.x;
                y = xy.y;
              } else {
                x = customX;
                y = customY;
                if (!isFinite(x)) x = POS_MARGIN;
                if (!isFinite(y)) y = POS_MARGIN;
              }
              page.drawImage(img, { x: x, y: y, width: sz.w, height: sz.h });
            });
            return doc.save();
          });
        }).then(function (bytes) {
          return new Uint8Array(bytes);
        });
      }

      /**
       * 把错误映射为可读文案。
       * @param {unknown} err
       * @returns {string}
       */
      function mapErr(err) {
        var s = String(err && (err.message || err) || '');
        if (s === 'nosig' || /nosig/i.test(s)) return msg.noSig;
        if (/empty/i.test(s)) return msg.empty;
        if (/password|encrypt/i.test(s)) return msg.encrypted;
        return msg.convertFail;
      }

      /** 下载盖章后的 PDF。 */
      function downloadResult() {
        if (!resultBytes) return;
        var blob = new Blob([resultBytes], { type: 'application/pdf' });
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = 'signed.pdf';
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      }

      /**
       * 盖章并预览。
       * @returns {Promise<void>}
       */
      function runApply() {
        if (!sourceBytes) { setErr(msg.empty); return Promise.resolve(); }
        setErr('');
        resultBytes = null;
        btnDownload.disabled = true;
        work.setBusy(busyBtns, true);
        work.setProgress(null);
        setStatus(msg.working);
        return window.OftPdfWork.yieldUi()
          .then(function () { return getSignaturePng(); })
          .then(function (png) {
            work.setProgress(40);
            return stampPng(sourceBytes, png);
          })
          .then(function (bytes) {
            resultBytes = bytes;
            work.setProgress(90);
            return work.showPreview(bytes);
          })
          .then(function () {
            work.setProgress(100);
            btnDownload.disabled = false;
            setStatus(msg.done);
          })
          .catch(function (err) {
            setErr(mapErr(err));
            setStatus('');
          })
          .finally(function () {
            work.setBusy(busyBtns, false);
            work.hideProgress();
            btnDownload.disabled = !resultBytes;
          });
      }

      /**
       * 接收用户 PDF。
       * @param {File} file
       */
      function acceptFile(file) {
        if (!file) return;
        if (!(file.type === 'application/pdf' || /\\.pdf$/i.test(file.name || ''))) {
          setErr(msg.loadFail);
          return;
        }
        setErr('');
        setStatus(file.size > SOFT_BYTES ? msg.large : '');
        resultBytes = null;
        btnDownload.disabled = true;
        work.setBusy(busyBtns, true);
        file.arrayBuffer().then(function (ab) {
          sourceBytes = new Uint8Array(ab);
          sourceName = file.name || 'document.pdf';
          setMeta(sourceName, sourceBytes.length);
          return refreshPageMeta(sourceBytes).then(function () {
            return work.showPreview(sourceBytes);
          });
        }).catch(function () {
          sourceBytes = null;
          setErr(msg.loadFail);
        }).finally(function () {
          work.setBusy(busyBtns, false);
        });
      }

      /**
       * 样例：造一页 PDF + 打字签名盖章。
       * lint:tool-page 要求字面 loadSample。
       * @returns {Promise<void>}
       */
      function loadSample() {
        if (!hasPdfLib()) { setErr(msg.convertFail); return Promise.resolve(); }
        setErr('');
        setStatus('');
        if (modeType) modeType.checked = true;
        if (nameInput && !nameInput.value.trim()) nameInput.value = 'Jane Sample';
        work.setBusy(busyBtns, true);
        return PDFLib.PDFDocument.create().then(function (doc) {
          var page = doc.addPage([420, 300]);
          return doc.embedFont(PDFLib.StandardFonts.Helvetica).then(function (font) {
            page.drawText('Sample agreement', { x: 48, y: 220, size: 16, font: font });
            page.drawText('Sign on the line below.', { x: 48, y: 190, size: 12, font: font });
            return doc.save();
          });
        }).then(function (bytes) {
          sourceBytes = new Uint8Array(bytes);
          sourceName = 'sample.pdf';
          setMeta(sourceName, sourceBytes.length);
          return refreshPageMeta(sourceBytes).then(function () {
            return runApply();
          });
        }).catch(function (err) {
          setErr(mapErr(err));
          work.setBusy(busyBtns, false);
          work.hideProgress();
        });
      }

      bindPad();
      applyInkColor();
      if (colorInput) {
        colorInput.addEventListener('input', applyInkColor);
        colorInput.addEventListener('change', applyInkColor);
      }
      inkSwatches.forEach(function (btn) {
        btn.addEventListener('click', function () {
          var ink = String(btn.getAttribute('data-ink') || '');
          if (!/^#[0-9a-fA-F]{6}$/.test(ink)) return;
          if (colorInput) colorInput.value = ink;
          applyInkColor();
        });
      });
      posRadios.forEach(function (radio) {
        radio.addEventListener('change', function () {
          if (!radio.checked) return;
          activePreset = String(radio.value || '');
          applyPresetToInputs(activePreset);
        });
      });
      [xInput, yInput].forEach(function (el) {
        if (!el) return;
        el.addEventListener('input', function () {
          if (syncingPos) return;
          activePreset = '';
          posRadios.forEach(function (r) { r.checked = false; });
        });
      });
      if (pageInput) {
        pageInput.addEventListener('change', function () {
          if (activePreset) applyPresetToInputs(activePreset);
        });
      }
      applyPresetToInputs(activePreset);
      fileInput.addEventListener('change', function () {
        if (fileInput.files && fileInput.files[0]) acceptFile(fileInput.files[0]);
        fileInput.value = '';
      });
      ['dragover', 'dragenter'].forEach(function (evName) {
        dropEl.addEventListener(evName, function (ev) { ev.preventDefault(); });
      });
      dropEl.addEventListener('drop', function (ev) {
        ev.preventDefault();
        var f = ev.dataTransfer && ev.dataTransfer.files && ev.dataTransfer.files[0];
        if (f) acceptFile(f);
      });
      btnClearPad.addEventListener('click', clearPad);
      btnApply.addEventListener('click', function () { runApply(); });
      btnDownload.addEventListener('click', downloadResult);
      btnSample.addEventListener('click', function () { loadSample(); });
      btnClear.addEventListener('click', function () {
        sourceBytes = null;
        sourceName = '';
        resultBytes = null;
        pageSizes = [];
        activePreset = 'br';
        posRadios.forEach(function (r) { r.checked = r.value === 'br'; });
        fillPageSelect(1);
        applyPresetToInputs('br');
        clearPad();
        setMeta('', 0);
        setErr('');
        setStatus('');
        btnDownload.disabled = true;
        work.clearPreview();
        work.hideProgress();
      });

      loadSample();
    })();
  </script>`;

	/** catalog 元数据。 */
	const toolMeta = getToolBySlug('sign-pdf-document');
	/** FAQ / related / 分享 / YMYL。 */
	const toolSeoHtml = toolMeta
		? renderToolExtraSections({
				lang: opts.lang,
				defaultLang: opts.defaultLang,
				tool: toolMeta,
				enabledLangs: supportedLangs,
			})
		: '';

	/** JSON-LD。 */
	const toolJsonLd = toolMeta
		? buildToolJsonLd({
				lang: opts.lang,
				defaultLang: opts.defaultLang,
				tool: toolMeta,
				name: t(opts.lang, toolMeta.i18nKey as any),
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
		contentHtml: contentHtml + igHtml + (toolSeoHtml || '') + referencesHtml,
		footerHtml,
		extraHeadHtml: extraHeadHtml + toolJsonLd,
		extraBodyHtml,
		includeSidebarToggleScript: true,
		sidebarAutoCloseSelector: '#toolNav a',
	});
};
