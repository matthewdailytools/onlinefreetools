/**
 * 扫描 PDF 队列：pdf.js 逐页光栅 → 串行 OCR → 一份分节 DOCX（点后加载；进页不自动跑）。
 * slug: batch-convert-scanned-pdf-to-word-with-ocr
 * 规格：work-tasks/batch-convert-scanned-pdf-to-word-with-ocr/02-tool-info.md
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

/** 本工具 i18n 键前缀，与 catalog faqPrefix 一致。 */
const PREFIX = 'tool_batch_convert_scanned_pdf_to_word_with_ocr';

/**
 * 为路径加上语言前缀（默认语无前缀）。
 * @param lang 当前 UI 语言
 * @param pathname 以 / 开头的路径
 * @param defaultLang 站点默认语言
 */
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * 读取本工具某一 i18n 后缀键。
 * @param lang 当前语言
 * @param suffix 如 title、description
 */
const tx = (lang: SiteLang, suffix: string) => t(lang, `${PREFIX}_${suffix}` as Parameters<typeof t>[1]);

/**
 * 渲染「用 OCR 批量把扫描 PDF 转成 Word」工具页。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderBatchConvertScannedPdfToWordWithOcrPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 工具规范路径。 */
	const toolPath = '/tools/batch-convert-scanned-pdf-to-word-with-ocr';
	/** 当前语言 canonical。 */
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	/** 文档 title。 */
	const title = `${tx(opts.lang, 'title')} | ${t(opts.lang, 'brand')}`;
	/** meta description。 */
	const description = tx(opts.lang, 'description');
	/** 顶栏导航。 */
	const navItems = buildToolPageNavItems(opts.lang, opts.defaultLang);

	/**
	 * 语言切换用显式语言段。
	 * @param code 语言码
	 * @param pathname 工具路径
	 */
	const withExplicitLangPrefix = (code: SiteLang, pathname: string) => {
		const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
		return `/${code}${safe}`.replace(/\/{2,}/g, '/');
	};

	/** header 语言菜单映射。 */
	const langAlternates: Record<string, string> = Object.fromEntries(
		(supportedLangs || []).map((code) => [code, withExplicitLangPrefix(code, toolPath)])
	);

	/** hreflang。 */
	const alternates: HreflangAlternate[] = (supportedLangs || []).map((code) => ({
		lang: code,
		href: `https://onlinefreetools.org${withLangPrefix(code, toolPath, opts.defaultLang)}`,
	}));

	/** 顶栏 HTML。 */
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
			currentSlug: 'batch-convert-scanned-pdf-to-word-with-ocr',
			currentAnchor: '#converter',
		}),
		id: 'toolNav',
	});

	/** 页脚。 */
	const footerHtml = renderFooter({ lang: opts.lang });

	/** 队列表、金标 HUD、Convert 忙碌转圈。 */
	const extraHeadHtml = `
  <style>
    .tools-bar { gap: .5rem; }
    .ocr-pdf-word-table { font-size: .85rem; }
    .ocr-pdf-word-table td, .ocr-pdf-word-table th { vertical-align: middle; }
    #ocrPdfWordLangChips, #ocrPdfWordOutChips { display: flex; flex-wrap: wrap; gap: .5rem 1rem; }
    #ocrPdfWordLangChips label, #ocrPdfWordOutChips label { font-size: .875rem; }
    #ocrPdfWordBtnConvert[aria-busy="true"]::after {
      content: '';
      display: inline-block;
      width: 0.85em;
      height: 0.85em;
      margin-left: 0.4em;
      border: 2px solid currentColor;
      border-right-color: transparent;
      border-radius: 50%;
      animation: bcw-hud-spin 0.7s linear infinite;
      vertical-align: -0.15em;
    }
    .bcw-hud {
      border: 1px solid #0d6efd;
      border-radius: 0.5rem;
      background: #f8fbff;
      padding: 0.9rem 1rem 1rem;
      box-shadow: 0 0.5rem 1.25rem rgba(13, 110, 253, 0.12);
    }
    #ocrPdfWordHud.is-on {
      position: sticky;
      top: 0.5rem;
      z-index: 20;
    }
    .bcw-hud-top { display: flex; align-items: center; gap: 0.85rem; margin-bottom: 0.65rem; }
    .bcw-hud-spin {
      flex: 0 0 auto;
      width: 2.35rem;
      height: 2.35rem;
      border: 3px solid rgba(13, 110, 253, 0.22);
      border-top-color: #0d6efd;
      border-radius: 50%;
      animation: bcw-hud-spin 0.7s linear infinite;
      will-change: transform;
    }
    .bcw-hud.is-done .bcw-hud-spin { animation: none; border-color: #198754; border-top-color: #198754; }
    .bcw-hud.is-fail { border-color: #dc3545; background: #fff8f8; box-shadow: 0 0.5rem 1.25rem rgba(220, 53, 69, 0.12); }
    .bcw-hud.is-fail .bcw-hud-spin { animation: none; border-color: #dc3545; border-top-color: #dc3545; }
    .bcw-hud.is-fail .bcw-hud-pct { color: #dc3545; }
    .bcw-hud-pct {
      font-size: 1.85rem;
      font-weight: 700;
      line-height: 1;
      font-variant-numeric: tabular-nums;
      color: #0d6efd;
      min-width: 4.25rem;
    }
    .bcw-hud-copy { min-width: 0; flex: 1; }
    .bcw-hud-title { font-weight: 600; margin-bottom: 0.15rem; }
    .bcw-hud-step { font-size: 0.9rem; color: #0d6efd; }
    .bcw-hud-time { font-size: 0.8rem; color: #6c757d; }
    .bcw-hud .progress { height: 1.35rem; overflow: hidden; position: relative; }
    .bcw-hud .progress-bar {
      font-size: 0.8rem;
      font-weight: 600;
      line-height: 1.35rem;
      transition: width 0.28s ease;
    }
    .bcw-hud-sheen {
      position: absolute;
      inset: 0 auto 0 0;
      width: 40%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.45), transparent);
      animation: bcw-hud-sheen 1.1s linear infinite;
      will-change: transform;
      pointer-events: none;
    }
    .bcw-hud.is-done .bcw-hud-sheen, .bcw-hud.is-fail .bcw-hud-sheen { display: none; }
    .bcw-hud-steps {
      display: flex;
      gap: 0.4rem;
      list-style: none;
      padding: 0;
      margin: 0.65rem 0 0.35rem;
      flex-wrap: wrap;
    }
    .bcw-hud-steps li {
      font-size: 0.75rem;
      padding: 0.2rem 0.55rem;
      border-radius: 999px;
      border: 1px solid #cfe2ff;
      color: #6c757d;
      background: #fff;
    }
    .bcw-hud-steps li.is-on { border-color: #0d6efd; color: #0d6efd; background: #e7f1ff; font-weight: 600; }
    .bcw-hud-steps li.is-done { border-color: #198754; color: #198754; background: #eaf7ef; }
    .bcw-hud-url { font-size: 0.8rem; color: #495057; word-break: break-all; }
    @keyframes bcw-hud-spin { to { transform: rotate(360deg); } }
    @keyframes bcw-hud-sheen { from { transform: translateX(-120%); } to { transform: translateX(320%); } }
  </style>`;

	/** 首屏：多 PDF 队列、整批语种、Convert all、Download Word、金标 HUD。 */
	const contentHtml = `
    <div id="converter" class="tool-page-heading mb-3">
      <h1 class="h4 mb-0">${escapeHtml(tx(opts.lang, 'title'))}</h1>
    </div>

    <label class="tool-dropzone mb-3" id="ocrPdfWordDrop" for="ocrPdfWordFile">
      <input type="file" id="ocrPdfWordFile" accept="application/pdf,.pdf" multiple>
      <span class="tool-dropzone-title">${escapeHtml(tx(opts.lang, 'choose_files'))}</span>
      <span class="tool-dropzone-hint">${escapeHtml(tx(opts.lang, 'drop_hint'))}</span>
      <span id="ocrPdfWordFileCount" class="tool-dropzone-file"></span>
    </label>

    <fieldset class="mb-3">
      <legend class="form-label small mb-1">${escapeHtml(tx(opts.lang, 'lang_legend'))}</legend>
      <div id="ocrPdfWordLangChips">
        <label><input type="radio" name="ocrPdfWordLang" value="zh_en" checked> ${escapeHtml(tx(opts.lang, 'lang_zh_en'))}</label>
        <label><input type="radio" name="ocrPdfWordLang" value="en"> ${escapeHtml(tx(opts.lang, 'lang_en'))}</label>
        <label><input type="radio" name="ocrPdfWordLang" value="zh"> ${escapeHtml(tx(opts.lang, 'lang_zh'))}</label>
        <label><input type="radio" name="ocrPdfWordLang" value="ar"> ${escapeHtml(tx(opts.lang, 'lang_ar'))}</label>
        <label><input type="radio" name="ocrPdfWordLang" value="ja"> ${escapeHtml(tx(opts.lang, 'lang_ja'))}</label>
      </div>
    </fieldset>

    <fieldset class="mb-3">
      <legend class="form-label small mb-1">${escapeHtml(tx(opts.lang, 'output_legend'))}</legend>
      <div id="ocrPdfWordOutChips">
        <label><input type="radio" name="ocrPdfWordOut" value="merge" checked> ${escapeHtml(tx(opts.lang, 'output_merge'))}</label>
        <label><input type="radio" name="ocrPdfWordOut" value="split"> ${escapeHtml(tx(opts.lang, 'output_split'))}</label>
      </div>
      <p class="form-text mb-0">${escapeHtml(tx(opts.lang, 'output_hint'))}</p>
    </fieldset>

    <details class="mb-2">
      <summary>${escapeHtml(tx(opts.lang, 'advanced'))}</summary>
      <div class="mt-2">
        <div class="form-check mb-2">
          <input class="form-check-input" type="checkbox" id="ocrPdfWordPhotoCb" checked>
          <label class="form-check-label small" for="ocrPdfWordPhotoCb">${escapeHtml(tx(opts.lang, 'page_label'))}</label>
          <p class="form-text mb-0">${escapeHtml(tx(opts.lang, 'page_hint'))}</p>
        </div>
        <label class="form-label small mb-1" for="ocrPdfWordMaxEdge">${escapeHtml(tx(opts.lang, 'max_edge'))}</label>
        <input type="number" id="ocrPdfWordMaxEdge" class="form-control form-control-sm" value="2048" min="800" max="4096" inputmode="numeric">
        <p class="form-text mb-0">${escapeHtml(tx(opts.lang, 'max_edge_hint'))}</p>
      </div>
    </details>

    <div class="d-flex align-items-center tools-bar mb-2 flex-wrap">
      <button type="button" id="ocrPdfWordBtnConvert" class="btn btn-primary btn-sm">${escapeHtml(tx(opts.lang, 'convert_all'))}</button>
      <button type="button" id="ocrPdfWordBtnDownload" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(tx(opts.lang, 'download_word'))}</button>
      <button type="button" id="ocrPdfWordBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx(opts.lang, 'sample'))}</button>
      <button type="button" id="ocrPdfWordBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx(opts.lang, 'clear'))}</button>
    </div>

    <p id="ocrPdfWordError" class="small text-danger mb-2" style="display:none;" role="alert"></p>
    <p id="ocrPdfWordStatus" class="small text-muted mb-2" role="status" aria-live="polite"></p>

    <div id="ocrPdfWordHud" class="oft-pdf-work-progress bcw-hud mb-3" hidden>
      <div class="bcw-hud-top">
        <div class="bcw-hud-spin" aria-hidden="true"></div>
        <div class="bcw-hud-pct" id="ocrPdfWordHudPct">0%</div>
        <div class="bcw-hud-copy">
          <div class="bcw-hud-title" id="ocrPdfWordHudTitle">${escapeHtml(tx(opts.lang, 'hud_title'))}</div>
          <div class="bcw-hud-step" id="ocrPdfWordHudStep"></div>
          <div class="bcw-hud-time" id="ocrPdfWordHudTime"></div>
        </div>
      </div>
      <div class="progress" style="height: 1.35rem;">
        <div id="ocrPdfWordHudBar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width: 0%"></div>
        <span class="bcw-hud-sheen" aria-hidden="true"></span>
      </div>
      <ol class="bcw-hud-steps" id="ocrPdfWordHudSteps">
        <li data-step="load">${escapeHtml(tx(opts.lang, 'hud_step_load'))}</li>
        <li data-step="render">${escapeHtml(tx(opts.lang, 'hud_step_render'))}</li>
        <li data-step="read">${escapeHtml(tx(opts.lang, 'hud_step_read'))}</li>
        <li data-step="pack">${escapeHtml(tx(opts.lang, 'hud_step_pack'))}</li>
      </ol>
      <div class="bcw-hud-url" id="ocrPdfWordHudUrl"></div>
    </div>

    <div class="table-responsive mb-3">
      <table class="table table-sm table-striped ocr-pdf-word-table mb-0">
        <thead>
          <tr>
            <th>${escapeHtml(tx(opts.lang, 'col_name'))}</th>
            <th>${escapeHtml(tx(opts.lang, 'col_pages'))}</th>
            <th>${escapeHtml(tx(opts.lang, 'col_status'))}</th>
            <th>${escapeHtml(tx(opts.lang, 'col_notes'))}</th>
          </tr>
        </thead>
        <tbody id="ocrPdfWordTbody"></tbody>
      </table>
    </div>

    <p class="tool-lead mb-4">${escapeHtml(tx(opts.lang, 'desc'))}</p>`;

	/** How / Rules / Example / Use cases。 */
	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: PREFIX,
		mode: 'rules',
		usecaseCount: 3,
		ruleItemCount: 4,
		howItemCount: 5,
	});

	/** 权威引用：光栅、OCR、组 Word。 */
	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{ label: 'Tesseract OCR', href: 'https://github.com/tesseract-ocr/tesseract' },
			{ label: 'tesseract.js', href: 'https://github.com/naptha/tesseract.js' },
			{ label: 'PDF.js', href: 'https://mozilla.github.io/pdf.js/' },
			{ label: 'docx', href: 'https://docx.js.org/' },
			{ label: 'fflate', href: 'https://github.com/101arrowz/fflate' },
		],
	});

	/**
	 * 客户端：点 Convert all 才加载 pdf.js / Tesseract / docx；进页不自动 OCR。
	 * 正则字类必须写成 \\w / \\d，否则预渲染会把反斜杠吃掉。
	 */
	const extraBodyHtml = `
  <script>
    (function () {
      /** 队列最多 PDF 个数。 */
      var MAX_FILES = 5;
      /** 整批最多页数。 */
      var MAX_PAGES = 20;
      /** 单文件上限（字节）。 */
      var MAX_BYTES = 12 * 1024 * 1024;
      /** Word 内页图目标宽度（CSS 像素，供 ImageRun）。 */
      var IMG_WIDTH_PX = 480;
      /** Tesseract OEM LSTM_ONLY。 */
      var OEM_LSTM = 1;
      /** 同域脚本与模型。 */
      var TESS_JS = '/vendor/tesseract/tesseract.min.js';
      var WORKER_PATH = '/vendor/tesseract/worker.min.js';
      var CORE_PATH = '/vendor/tesseract/core';
      var LANG_PATH = '/vendor/tesseract/lang';
      var PDF_JS = '/vendor/pdfjs/pdf.min.mjs';
      var PDF_WORKER = '/vendor/pdfjs/pdf.worker.min.mjs';
      var PDF_LIB_JS = '/vendor/pdf-lib/pdf-lib.min.js';
      var DOCX_JS = '/vendor/docx/index.umd.js';
      var FFLATE_JS = '/vendor/fflate/index.js';

      /** 投放区。 */
      var drop = document.getElementById('ocrPdfWordDrop');
      /** 文件选择框。 */
      var fileInput = document.getElementById('ocrPdfWordFile');
      /** 队列计数文案。 */
      var countEl = document.getElementById('ocrPdfWordFileCount');
      /** 队列表体。 */
      var tbody = document.getElementById('ocrPdfWordTbody');
      /** Convert all 按钮。 */
      var btnConvert = document.getElementById('ocrPdfWordBtnConvert');
      /** Download Word 按钮。 */
      var btnDownload = document.getElementById('ocrPdfWordBtnDownload');
      /** Load sample 按钮。 */
      var btnSample = document.getElementById('ocrPdfWordBtnSample');
      /** Clear 按钮。 */
      var btnClear = document.getElementById('ocrPdfWordBtnClear');
      /** 行级错误提示。 */
      var errEl = document.getElementById('ocrPdfWordError');
      /** aria-live 状态行。 */
      var statusEl = document.getElementById('ocrPdfWordStatus');
      /** 是否插入页图。 */
      var photoCb = document.getElementById('ocrPdfWordPhotoCb');
      /** 最长边输入。 */
      var maxEdgeInput = document.getElementById('ocrPdfWordMaxEdge');
      /** 金标 HUD 根节点。 */
      var hudWrap = document.getElementById('ocrPdfWordHud');
      /** HUD 百分比数字。 */
      var hudPctEl = document.getElementById('ocrPdfWordHudPct');
      /** HUD 标题（成功/失败会改写）。 */
      var hudTitleEl = document.getElementById('ocrPdfWordHudTitle');
      /** HUD 当前步骤句。 */
      var hudStepEl = document.getElementById('ocrPdfWordHudStep');
      /** HUD 已用秒。 */
      var hudTimeEl = document.getElementById('ocrPdfWordHudTime');
      /** HUD 当前文件·页。 */
      var hudUrlEl = document.getElementById('ocrPdfWordHudUrl');
      /** HUD 进度条。 */
      var hudBar = document.getElementById('ocrPdfWordHudBar');
      /** HUD 步骤胶囊。 */
      var hudStepLis = document.querySelectorAll('#ocrPdfWordHudSteps [data-step]');
      /** 默认 HUD 标题文案。 */
      var hudTitleDefault = ${JSON.stringify(tx(opts.lang, 'hud_title'))};
      /** 忙碌时禁用的动作按钮。 */
      var busyBtns = [btnConvert, btnSample, btnClear];

      /** 界面文案包（预渲染进页面，避免运行时再查 i18n）。 */
      var msg = {
        empty: ${JSON.stringify(tx(opts.lang, 'empty'))},
        errEmpty: ${JSON.stringify(tx(opts.lang, 'err_empty'))},
        errEngine: ${JSON.stringify(tx(opts.lang, 'err_engine'))},
        errLoad: ${JSON.stringify(tx(opts.lang, 'err_load'))},
        errImage: ${JSON.stringify(tx(opts.lang, 'err_image'))},
        errSize: ${JSON.stringify(tx(opts.lang, 'err_size'))},
        errDocx: ${JSON.stringify(tx(opts.lang, 'err_docx'))},
        errFflate: ${JSON.stringify(tx(opts.lang, 'err_fflate'))},
        errTooMany: ${JSON.stringify(tx(opts.lang, 'err_too_many'))},
        errTooManyPages: ${JSON.stringify(tx(opts.lang, 'err_too_many_pages'))},
        errEncrypted: ${JSON.stringify(tx(opts.lang, 'err_encrypted'))},
        errPdfjs: ${JSON.stringify(tx(opts.lang, 'err_pdfjs'))},
        loading: ${JSON.stringify(tx(opts.lang, 'status_loading'))},
        progress: ${JSON.stringify(tx(opts.lang, 'status_progress'))},
        packing: ${JSON.stringify(tx(opts.lang, 'status_packing'))},
        downloadWord: ${JSON.stringify(tx(opts.lang, 'download_word'))},
        downloadZip: ${JSON.stringify(tx(opts.lang, 'download_zip'))},
        done: ${JSON.stringify(tx(opts.lang, 'status_done'))},
        countTpl: ${JSON.stringify(tx(opts.lang, 'count_tpl'))},
        pagesTpl: ${JSON.stringify(tx(opts.lang, 'pages_tpl'))},
        progressTpl: ${JSON.stringify(tx(opts.lang, 'progress_tpl'))},
        stQueued: ${JSON.stringify(tx(opts.lang, 'st_queued'))},
        stWorking: ${JSON.stringify(tx(opts.lang, 'st_working'))},
        stRendering: ${JSON.stringify(tx(opts.lang, 'st_rendering'))},
        stReading: ${JSON.stringify(tx(opts.lang, 'st_reading'))},
        stDone: ${JSON.stringify(tx(opts.lang, 'st_done'))},
        stSkipped: ${JSON.stringify(tx(opts.lang, 'st_skipped'))},
        hudWorking: ${JSON.stringify(tx(opts.lang, 'hud_working'))},
        hudElapsed: ${JSON.stringify(tx(opts.lang, 'hud_elapsed_tpl'))},
        hudPct: ${JSON.stringify(tx(opts.lang, 'hud_pct_tpl'))},
        hudNext: ${JSON.stringify(tx(opts.lang, 'hud_next'))},
        hudFailTitle: ${JSON.stringify(tx(opts.lang, 'hud_fail_title'))},
        hudFailHint: ${JSON.stringify(tx(opts.lang, 'hud_fail_hint'))}
      };

      /**
       * @typedef {{pageNum: number, status: string, text: string, error: string, pngBytes: Uint8Array|null, w: number, h: number}} PageRow
       * @typedef {{file: File, name: string, bytes: Uint8Array|null, pageCount: number, pages: PageRow[], status: string, error: string}} QueueRow
       */
      /** @type {QueueRow[]} PDF 队列。 */
      var queue = [];
      /** @type {Blob|null} 最近一份 DOCX 或 ZIP。 */
      var resultBlob = null;
      /** 下载文件名（.docx 或 .zip）。 */
      var resultDownloadName = 'ocr-scanned-pdf.docx';
      /** @type {Promise<object>|null} docx UMD 缓存。 */
      var docxLibPromise = null;
      /** @type {Promise<object>|null} fflate 缓存（分文件多份时才加载）。 */
      var fflatePromise = null;
      /** @type {Promise<object>|null} pdf-lib 缓存（仅样例）。 */
      var pdfLibPromise = null;
      /** @type {any} Tesseract worker 缓存。 */
      var tessWorker = null;
      /** @type {string} worker 对应的语种键。 */
      var tessWorkerKey = '';
      /** HUD 计时器 id。 */
      var hudClockId = 0;
      /** 本批开始时间戳。 */
      var hudClockStart = 0;
      /** @type {{pct:number|null, phase:string, url:string, done:boolean, fail:boolean}} HUD 状态。 */
      var hudState = { pct: 0, phase: '', url: '', done: false, fail: false };

      /**
       * 填充 {key} 模板。字类必须写成 \\w。
       * @param {string} tpl 模板
       * @param {Record<string, string|number>} map 替换表
       * @returns {string}
       */
      function fillTpl(tpl, map) {
        return String(tpl || '').replace(/\\{(\\w+)\\}/g, function (_, k) {
          return map[k] == null ? '' : String(map[k]);
        });
      }

      /**
       * 让出一帧再短延迟，先画出 HUD 再跑 WASM / 光栅。
       * @returns {Promise<void>}
       */
      function yieldUi() {
        return new Promise(function (resolve) {
          requestAnimationFrame(function () {
            setTimeout(resolve, 40);
          });
        });
      }

      /**
       * 显示或隐藏整页错误行。
       * @param {string} text 人话错误；空则隐藏
       */
      function setError(text) {
        errEl.textContent = text || '';
        errEl.style.display = text ? 'block' : 'none';
      }

      /**
       * 更新 aria-live 状态行。
       * @param {string} text 状态文案
       */
      function setStatus(text) {
        statusEl.textContent = text || '';
      }

      /**
       * 忙碌时禁用输入与动作按钮（Download 仍按是否有产物）。
       * @param {boolean} on 是否忙碌
       */
      function setBusy(on) {
        busyBtns.forEach(function (b) { b.disabled = on; });
        fileInput.disabled = on;
        drop.style.pointerEvents = on ? 'none' : '';
        document.querySelectorAll('input[name="ocrPdfWordLang"]').forEach(function (el) { el.disabled = on; });
        document.querySelectorAll('input[name="ocrPdfWordOut"]').forEach(function (el) { el.disabled = on; });
        photoCb.disabled = on;
        maxEdgeInput.disabled = on;
        if (on) btnConvert.setAttribute('aria-busy', 'true');
        else btnConvert.removeAttribute('aria-busy');
      }

      /**
       * 读取导出模式：merge 一份 Word；split 每个 PDF 一份。
       * @returns {'merge'|'split'}
       */
      function selectedOutMode() {
        var checked = document.querySelector('input[name="ocrPdfWordOut"]:checked');
        return checked && checked.value === 'split' ? 'split' : 'merge';
      }

      /**
       * 有成功页的 PDF 行。
       * @returns {QueueRow[]}
       */
      function filesWithText() {
        return queue.filter(function (r) {
          return r.pages.some(function (p) { return p.status === 'done' && p.text; });
        });
      }

      /**
       * 按当前模式刷新 Download 按钮文案（How 用词须等于按钮）。
       */
      function updateDownloadLabel() {
        var useZip = selectedOutMode() === 'split' && filesWithText().length > 1;
        btnDownload.textContent = useZip ? msg.downloadZip : msg.downloadWord;
      }

      /**
       * 有成功产物才启用 Download；文案随 merge/split 切换。
       */
      function syncOutputButtons() {
        updateDownloadLabel();
        btnDownload.disabled = !resultBlob;
      }

      /**
       * 刷新 HUD 已用时。
       */
      function tickHudClock() {
        if (!hudTimeEl) return;
        var s = Math.max(0, Math.floor((Date.now() - hudClockStart) / 1000));
        hudTimeEl.textContent = fillTpl(msg.hudElapsed, { s: s });
      }

      /**
       * 开始或重置本批计时。
       */
      function startHudClock() {
        hudClockStart = Date.now();
        if (hudClockId) clearInterval(hudClockId);
        tickHudClock();
        hudClockId = setInterval(tickHudClock, 200);
      }

      /**
       * 停止本批计时。
       */
      function stopHudClock() {
        if (hudClockId) {
          clearInterval(hudClockId);
          hudClockId = 0;
        }
      }

      /**
       * 把 hudState 画到百分比、步骤胶囊、当前文件·页。
       */
      function paintHud() {
        if (!hudWrap) return;
        hudWrap.classList.toggle('is-done', !!hudState.done);
        hudWrap.classList.toggle('is-fail', !!hudState.fail);
        var pct = hudState.pct;
        var pctText = pct == null || !isFinite(pct) ? '…' : fillTpl(msg.hudPct, { pct: Math.round(pct) });
        if (hudPctEl) hudPctEl.textContent = pctText;
        if (hudBar) {
          hudBar.style.width = (pct == null || !isFinite(pct) ? 8 : Math.max(4, Math.min(100, pct))) + '%';
          hudBar.textContent = pct == null || !isFinite(pct) ? '' : pctText;
          hudBar.setAttribute('aria-valuenow', pct == null || !isFinite(pct) ? '0' : String(Math.round(pct)));
        }
        if (hudStepEl) hudStepEl.textContent = hudState.phase || '';
        if (hudUrlEl) hudUrlEl.textContent = hudState.url || '';
        var order = ['load', 'render', 'read', 'pack'];
        var idx = order.indexOf(hudState.phase);
        if (hudState.done) idx = order.length;
        for (var i = 0; i < hudStepLis.length; i++) {
          var li = hudStepLis[i];
          var name = li.getAttribute('data-step');
          var pos = order.indexOf(name);
          li.classList.toggle('is-on', !hudState.done && !hudState.fail && pos === idx);
          li.classList.toggle('is-done', hudState.done || (idx >= 0 && pos < idx));
        }
      }

      /**
       * 显示进度面板并开始计时。
       */
      function openHud() {
        hudState.done = false;
        hudState.fail = false;
        hudState.pct = null;
        hudState.phase = 'load';
        hudState.url = '';
        if (hudTitleEl) hudTitleEl.textContent = hudTitleDefault;
        hudWrap.hidden = false;
        hudWrap.classList.add('is-on');
        startHudClock();
        paintHud();
      }

      /**
       * 立刻收起进度面板（清空队列时）。
       */
      function closeHud() {
        stopHudClock();
        hudState.done = false;
        hudState.fail = false;
        hudState.url = '';
        hudState.phase = '';
        hudWrap.hidden = true;
        hudWrap.classList.remove('is-on');
        paintHud();
      }

      /**
       * 成功结束：留在 100%，提示下一步 Download Word。
       */
      function finishHudOk() {
        hudState.done = true;
        hudState.fail = false;
        hudState.pct = 100;
        hudState.phase = 'pack';
        hudState.url = msg.hudNext;
        stopHudClock();
        paintHud();
      }

      /**
       * 失败卡片：同等尺寸 HUD，禁止收成一行小 alert。
       * @param {string} hint 失败说明
       */
      function finishHudFail(hint) {
        hudState.done = false;
        hudState.fail = true;
        hudState.pct = hudState.pct == null ? 0 : hudState.pct;
        hudState.phase = '';
        hudState.url = hint || msg.hudFailHint;
        if (hudTitleEl) hudTitleEl.textContent = msg.hudFailTitle;
        stopHudClock();
        hudWrap.hidden = false;
        hudWrap.classList.add('is-on');
        paintHud();
      }

      /**
       * 读取语种芯片 → Tesseract 语言代码数组。
       * @returns {string[]}
       */
      function selectedTessLangs() {
        var checked = document.querySelector('input[name="ocrPdfWordLang"]:checked');
        var v = checked ? checked.value : 'zh_en';
        if (v === 'en') return ['eng'];
        if (v === 'zh') return ['chi_sim'];
        if (v === 'ar') return ['ara'];
        if (v === 'ja') return ['jpn'];
        return ['chi_sim', 'eng'];
      }

      /**
       * 读取最长边上限。
       * @returns {number}
       */
      function maxEdge() {
        var n = parseInt(maxEdgeInput.value, 10);
        if (!n || n < 800) return 2048;
        if (n > 4096) return 4096;
        return n;
      }

      /**
       * 文件行状态文案。
       * @param {string} status queued|working|done|skipped
       * @returns {string}
       */
      function statusLabel(status) {
        if (status === 'working') return msg.stWorking;
        if (status === 'rendering') return msg.stRendering;
        if (status === 'reading') return msg.stReading;
        if (status === 'done') return msg.stDone;
        if (status === 'skipped') return msg.stSkipped;
        return msg.stQueued;
      }

      /**
       * 已入队页数合计。
       * @returns {number}
       */
      function totalQueuedPages() {
        return queue.reduce(function (sum, row) { return sum + (row.pageCount || 0); }, 0);
      }

      /**
       * 重绘画队列表。
       */
      function renderQueue() {
        tbody.textContent = '';
        queue.forEach(function (row) {
          var tr = document.createElement('tr');
          var pages = row.pageCount ? fillTpl(msg.pagesTpl, { n: row.pageCount }) : '—';
          var doneN = row.pages.filter(function (p) { return p.status === 'done'; }).length;
          var skipN = row.pages.filter(function (p) { return p.status === 'skipped'; }).length;
          var note = row.error || (doneN || skipN ? doneN + '/' + row.pageCount : '');
          [row.name, pages, statusLabel(row.status), note].forEach(function (cell) {
            var td = document.createElement('td');
            td.textContent = cell;
            tr.appendChild(td);
          });
          tbody.appendChild(tr);
        });
        countEl.textContent = queue.length ? fillTpl(msg.countTpl, { n: queue.length }) : '';
      }

      /**
       * 懒加载 pdf.js（入队数页 + Convert 光栅）。
       * @returns {Promise<object>}
       */
      function ensurePdfJs() {
        if (window.pdfjsLib) return Promise.resolve(window.pdfjsLib);
        return import(PDF_JS).then(function (mod) {
          mod.GlobalWorkerOptions.workerSrc = PDF_WORKER;
          window.pdfjsLib = mod;
          return mod;
        }).catch(function () {
          throw new Error('pdfjs');
        });
      }

      /**
       * 从同域 /vendor/docx 加载 UMD。
       * @returns {Promise<object>}
       */
      function loadDocxLib() {
        if (docxLibPromise) return docxLibPromise;
        docxLibPromise = new Promise(function (resolve, reject) {
          if (window.docx && window.docx.Document) {
            resolve(window.docx);
            return;
          }
          var script = document.createElement('script');
          script.src = DOCX_JS;
          script.onload = function () {
            if (window.docx && window.docx.Document) resolve(window.docx);
            else reject(new Error('docx'));
          };
          script.onerror = function () { reject(new Error('docx')); };
          document.head.appendChild(script);
        });
        return docxLibPromise;
      }

      /**
       * 懒加载同域 fflate（仅「每个 PDF 一份 Word」且成功文件 ≥2 时）。
       * @returns {Promise<any>}
       */
      function loadFflate() {
        if (fflatePromise) return fflatePromise;
        fflatePromise = new Promise(function (resolve, reject) {
          if (window.fflate && typeof window.fflate.zipSync === 'function') {
            resolve(window.fflate);
            return;
          }
          var script = document.createElement('script');
          script.src = FFLATE_JS;
          script.onload = function () {
            if (window.fflate && typeof window.fflate.zipSync === 'function') resolve(window.fflate);
            else reject(new Error('fflate'));
          };
          script.onerror = function () { reject(new Error('fflate')); };
          document.head.appendChild(script);
        });
        return fflatePromise;
      }

      /**
       * 懒加载 pdf-lib（仅 Load sample 合成两页印刷 PDF）。
       * @returns {Promise<object>}
       */
      function loadPdfLib() {
        if (pdfLibPromise) return pdfLibPromise;
        pdfLibPromise = new Promise(function (resolve, reject) {
          if (window.PDFLib && window.PDFLib.PDFDocument) {
            resolve(window.PDFLib);
            return;
          }
          var script = document.createElement('script');
          script.src = PDF_LIB_JS;
          script.onload = function () {
            if (window.PDFLib && window.PDFLib.PDFDocument) resolve(window.PDFLib);
            else reject(new Error('pdflib'));
          };
          script.onerror = function () { reject(new Error('pdflib')); };
          document.head.appendChild(script);
        });
        return pdfLibPromise;
      }

      /**
       * 懒加载 tesseract.min.js（仅一次）。
       * @returns {Promise<any>}
       */
      function loadTessScript() {
        if (window.Tesseract) return Promise.resolve(window.Tesseract);
        return new Promise(function (resolve, reject) {
          var s = document.createElement('script');
          s.src = TESS_JS;
          s.onload = function () {
            if (window.Tesseract) resolve(window.Tesseract);
            else reject(new Error('engine'));
          };
          s.onerror = function () { reject(new Error('engine')); };
          document.head.appendChild(s);
        });
      }

      /**
       * 取得或重建 worker（语种变化则 terminate 后重开）。整批复用一个 worker。
       * @param {string[]} langs Tesseract 语言码
       * @returns {Promise<any>}
       */
      function getWorker(langs) {
        var key = langs.slice().sort().join('+');
        if (tessWorker && tessWorkerKey === key) return Promise.resolve(tessWorker);
        var prev = tessWorker;
        tessWorker = null;
        tessWorkerKey = '';
        var start = prev && prev.terminate ? Promise.resolve(prev.terminate()) : Promise.resolve();
        return start.then(function () {
          return loadTessScript();
        }).then(function (Tesseract) {
          setStatus(msg.loading);
          hudState.phase = 'load';
          paintHud();
          return Tesseract.createWorker(langs, OEM_LSTM, {
            workerPath: WORKER_PATH,
            corePath: CORE_PATH,
            langPath: LANG_PATH,
            workerBlobURL: false,
            logger: function (m) {
              if (!m || !m.status) return;
              if (String(m.status).indexOf('loading') !== -1) setStatus(msg.loading);
            }
          });
        }).then(function (worker) {
          tessWorker = worker;
          tessWorkerKey = key;
          return worker;
        });
      }

      /**
       * Canvas 导出 PNG 字节，供 Word ImageRun。
       * @param {HTMLCanvasElement} canvas 已绘制画布
       * @returns {Promise<Uint8Array>}
       */
      function canvasToPngBytes(canvas) {
        return new Promise(function (resolve, reject) {
          canvas.toBlob(function (blob) {
            if (!blob) {
              reject(new Error('load'));
              return;
            }
            blob.arrayBuffer().then(function (ab) {
              resolve(new Uint8Array(ab));
            }).catch(reject);
          }, 'image/png');
        });
      }

      /**
       * 把 pdf.js 页画到最长边上限的 canvas。
       * @param {object} page pdf.js 页面
       * @returns {Promise<{canvas: HTMLCanvasElement, w: number, h: number}>}
       */
      function renderPageToCanvas(page) {
        var base = page.getViewport({ scale: 1 });
        var edge = maxEdge();
        var scale = edge / Math.max(base.width, base.height);
        if (!isFinite(scale) || scale <= 0) scale = 1;
        var viewport = page.getViewport({ scale: scale });
        var canvas = document.createElement('canvas');
        canvas.width = Math.max(1, Math.floor(viewport.width));
        canvas.height = Math.max(1, Math.floor(viewport.height));
        var ctx = canvas.getContext('2d');
        if (!ctx) return Promise.reject(new Error('load'));
        return page.render({ canvasContext: ctx, viewport: viewport }).promise.then(function () {
          return { canvas: canvas, w: canvas.width, h: canvas.height };
        });
      }

      /**
       * 判断入队类型。
       * @param {File} file 用户文件
       * @returns {string} 'ok' | 'image' | 'type' | 'size'
       */
      function classifyFile(file) {
        var name = (file && file.name ? file.name : '').toLowerCase();
        var type = (file && file.type ? file.type : '').toLowerCase();
        var isImage = type.indexOf('image/') === 0
          || /\\.(jpe?g|png|webp|gif|bmp|heic|tiff?)$/.test(name);
        if (isImage) return 'image';
        var isPdf = type === 'application/pdf' || /\\.pdf$/.test(name);
        if (!isPdf) return 'type';
        if (file.size > MAX_BYTES) return 'size';
        return 'ok';
      }

      /**
       * 解析 PDF 页数（入队时调用，尚未 OCR）。
       * @param {File} file PDF
       * @returns {Promise<{bytes: Uint8Array, pageCount: number}>}
       */
      function peekPdf(file) {
        return file.arrayBuffer().then(function (buf) {
          var bytes = new Uint8Array(buf);
          return ensurePdfJs().then(function (pdfjsLib) {
            return pdfjsLib.getDocument({ data: bytes.slice(0) }).promise;
          }).then(function (doc) {
            var n = doc.numPages || 0;
            if (doc.destroy) doc.destroy();
            return { bytes: bytes, pageCount: n };
          });
        });
      }

      /**
       * 空页槽位。
       * @param {number} pageNum 1-based 页码
       * @returns {PageRow}
       */
      function emptyPage(pageNum) {
        return { pageNum: pageNum, status: 'queued', text: '', error: '', pngBytes: null, w: 0, h: 0 };
      }

      /**
       * 把 PDF 追加进队列（上限 5 文件 / 20 页；图片拒绝）。
       * @param {FileList|File[]} files 新文件
       * @returns {Promise<void>}
       */
      function addFiles(files) {
        setError('');
        var list = Array.prototype.slice.call(files || []);
        var chain = Promise.resolve();
        var extraFiles = false;
        var extraPages = false;
        list.forEach(function (file) {
          chain = chain.then(function () {
            if (queue.length >= MAX_FILES) {
              extraFiles = true;
              return;
            }
            var kind = classifyFile(file);
            if (kind === 'image') {
              setError(msg.errImage);
              return;
            }
            if (kind === 'type') {
              setError(msg.errLoad);
              return;
            }
            if (kind === 'size') {
              setError(msg.errSize);
              return;
            }
            return peekPdf(file).then(function (meta) {
              if (!meta.pageCount) {
                setError(msg.errLoad);
                return;
              }
              if (totalQueuedPages() + meta.pageCount > MAX_PAGES) {
                extraPages = true;
                return;
              }
              var pages = [];
              for (var p = 1; p <= meta.pageCount; p++) pages.push(emptyPage(p));
              queue.push({
                file: file,
                name: file.name || 'scan.pdf',
                bytes: meta.bytes,
                pageCount: meta.pageCount,
                pages: pages,
                status: 'queued',
                error: ''
              });
              resultBlob = null;
              renderQueue();
              syncOutputButtons();
            }).catch(function (err) {
              var s = String(err && (err.message || err) || '');
              if (/password|encrypt|encrypted/i.test(s)) setError(msg.errEncrypted);
              else if (s === 'pdfjs') setError(msg.errPdfjs);
              else setError(msg.errLoad);
            });
          });
        });
        return chain.then(function () {
          if (extraFiles) setError(msg.errTooMany);
          else if (extraPages) setError(msg.errTooManyPages);
        });
      }

      /**
       * 取出 recognize 结果的 data 字段。
       * @param {any} result tesseract 返回值
       * @returns {any}
       */
      function outData(result) {
        return result && result.data ? result.data : {};
      }

      /**
       * 识别某一 PDF 的某一页；失败 skip，不抛到整批。
       * @param {QueueRow} row 文件行
       * @param {PageRow} pageRow 页行
       * @param {object} pdfDoc pdf.js 文档
       * @param {any} worker Tesseract worker
       * @param {number} jobIndex 1-based 全局进度
       * @param {number} jobTotal 总页作业数
       * @returns {Promise<void>}
       */
      function recognizePage(row, pageRow, pdfDoc, worker, jobIndex, jobTotal) {
        pageRow.status = 'queued';
        row.status = 'working';
        hudState.phase = 'render';
        hudState.url = fillTpl(msg.progressTpl, { file: row.name, page: pageRow.pageNum, pages: row.pageCount });
        hudState.pct = Math.min(88, Math.round(((jobIndex - 1) / Math.max(1, jobTotal)) * 88));
        setStatus(fillTpl(msg.progress, { i: jobIndex, n: jobTotal, name: row.name }));
        paintHud();
        renderQueue();
        return yieldUi().then(function () {
          return pdfDoc.getPage(pageRow.pageNum);
        }).then(function (page) {
          return renderPageToCanvas(page);
        }).then(function (out) {
          pageRow.w = out.w;
          pageRow.h = out.h;
          pageRow.status = 'reading';
          hudState.phase = 'read';
          paintHud();
          renderQueue();
          return canvasToPngBytes(out.canvas).then(function (png) {
            pageRow.pngBytes = png;
            return yieldUi().then(function () {
              return worker.recognize(out.canvas);
            });
          });
        }).then(function (result) {
          var data = outData(result);
          var text = String(data.text || '').replace(/^\\s+/g, '').replace(/\\s+$/g, '');
          if (!text) {
            pageRow.status = 'skipped';
            pageRow.error = msg.errEmpty;
            pageRow.pngBytes = null;
            return;
          }
          pageRow.status = 'done';
          pageRow.text = text;
          pageRow.error = '';
        }).catch(function () {
          pageRow.status = 'skipped';
          pageRow.error = msg.errLoad;
          pageRow.pngBytes = null;
        }).then(function () {
          renderQueue();
        });
      }

      /**
       * 把若干成功 PDF 行打成一份 DOCX（merge 用全部行；split 每次一行）。
       * @param {QueueRow[]} filesDone 至少有一页成功文本的文件
       * @returns {Promise<Blob>}
       */
      function buildDocxFromRows(filesDone) {
        if (!filesDone.length) return Promise.reject(new Error('empty'));
        var includeImg = !!(photoCb && photoCb.checked);
        return loadDocxLib().then(function (docx) {
          var Document = docx.Document;
          var Packer = docx.Packer;
          var Paragraph = docx.Paragraph;
          var TextRun = docx.TextRun;
          var ImageRun = docx.ImageRun;
          var PageBreak = docx.PageBreak;
          var HeadingLevel = docx.HeadingLevel || {};
          var children = [];
          filesDone.forEach(function (row, fileIdx) {
            var pagesDone = row.pages.filter(function (p) { return p.status === 'done' && p.text; });
            children.push(new Paragraph({
              heading: HeadingLevel.HEADING_1,
              children: [new TextRun(String(row.name || 'scan.pdf'))]
            }));
            pagesDone.forEach(function (pageRow, pageIdx) {
              if (includeImg && pageRow.pngBytes && pageRow.pngBytes.length && pageRow.w && pageRow.h) {
                var targetH = Math.max(1, Math.round(pageRow.h * (IMG_WIDTH_PX / pageRow.w)));
                children.push(new Paragraph({
                  children: [
                    new ImageRun({
                      data: pageRow.pngBytes,
                      transformation: { width: IMG_WIDTH_PX, height: targetH }
                    })
                  ]
                }));
              }
              String(pageRow.text).split(/\\n/).forEach(function (line) {
                children.push(new Paragraph({
                  children: [new TextRun(line || ' ')]
                }));
              });
              var morePages = pageIdx < pagesDone.length - 1;
              var moreFiles = fileIdx < filesDone.length - 1;
              if (morePages || moreFiles) {
                children.push(new Paragraph({ children: [new PageBreak()] }));
              }
            });
          });
          var doc = new Document({ sections: [{ children: children }] });
          return Packer.toBlob(doc);
        });
      }

      /**
       * ZIP 内唯一 .docx 名（去掉扩展名，避开路径字符）。
       * @param {Object<string, boolean>} used 已占用名
       * @param {string} original 原 PDF 文件名
       * @returns {string}
       */
      function uniqueDocxName(used, original) {
        var stem = String(original || 'scan').replace(/\\.[^.]+$/, '') || 'scan';
        stem = stem.replace(/[\\\\/:*?"<>|]+/g, '_') || 'scan';
        var name = stem + '.docx';
        var n = 2;
        while (used[name]) {
          name = stem + ' (' + n + ').docx';
          n += 1;
        }
        used[name] = true;
        return name;
      }

      /**
       * Blob → Uint8Array（ZIP 条目）。
       * @param {Blob} blob DOCX blob
       * @returns {Promise<Uint8Array>}
       */
      function blobToBytes(blob) {
        return blob.arrayBuffer().then(function (ab) {
          return new Uint8Array(ab);
        });
      }

      /**
       * 按当前导出模式打包：一份 Word，或每个 PDF 一份（多份则 ZIP）。
       * @returns {Promise<Blob>}
       */
      function packOutputs() {
        var filesDone = filesWithText();
        if (!filesDone.length) return Promise.reject(new Error('empty'));
        setStatus(msg.packing);
        hudState.phase = 'pack';
        hudState.pct = 94;
        paintHud();
        var mode = selectedOutMode();
        if (mode !== 'split' || filesDone.length === 1) {
          var rows = mode === 'split' ? [filesDone[0]] : filesDone;
          return buildDocxFromRows(rows).then(function (blob) {
            resultBlob = blob;
            resultDownloadName = mode === 'split'
              ? uniqueDocxName({}, filesDone[0].name)
              : 'ocr-scanned-pdf.docx';
            return blob;
          });
        }
        var used = {};
        /** @type {Array<{zipName: string, bytes: Uint8Array}>} */
        var parts = [];
        var chain = Promise.resolve();
        filesDone.forEach(function (row) {
          chain = chain.then(function () {
            return buildDocxFromRows([row]).then(function (blob) {
              return blobToBytes(blob).then(function (bytes) {
                parts.push({ zipName: uniqueDocxName(used, row.name), bytes: bytes });
              });
            });
          });
        });
        return chain.then(function () {
          return loadFflate();
        }).then(function (ff) {
          var files = {};
          parts.forEach(function (p) { files[p.zipName] = p.bytes; });
          var zipped = ff.zipSync(files, { level: 1 });
          resultBlob = new Blob([zipped], { type: 'application/zip' });
          resultDownloadName = 'ocr-scanned-pdf.zip';
          return resultBlob;
        });
      }

      /**
       * 同步文件行总状态（全 skip / 有成功 / 仍在排队）。
       * @param {QueueRow} row 文件行
       */
      function syncFileStatus(row) {
        var anyDone = row.pages.some(function (p) { return p.status === 'done'; });
        var anyLeft = row.pages.some(function (p) { return p.status === 'queued' || p.status === 'reading'; });
        if (anyLeft) row.status = 'working';
        else if (anyDone) {
          row.status = 'done';
          row.error = '';
        } else {
          row.status = 'skipped';
          if (!row.error) row.error = msg.errLoad;
        }
      }

      /**
       * 整批串行 Convert all。引擎失败则停止后续页，保留已完成页。
       * @returns {Promise<void>}
       */
      function convertAll() {
        if (!queue.length) {
          setError(msg.empty);
          return Promise.resolve();
        }
        setError('');
        setBusy(true);
        resultBlob = null;
        resultDownloadName = 'ocr-scanned-pdf.docx';
        syncOutputButtons();
        openHud();
        setStatus(msg.loading);
        var langs = selectedTessLangs();
        /** @type {{row: QueueRow, pageRow: PageRow}[]} 页作业表。 */
        var jobs = [];
        queue.forEach(function (row) {
          row.pages.forEach(function (pageRow) {
            if (pageRow.status === 'done' && pageRow.text) return;
            if (pageRow.status === 'skipped' && pageRow.error && pageRow.error !== msg.errEmpty) return;
            pageRow.status = 'queued';
            pageRow.text = '';
            pageRow.error = '';
            pageRow.pngBytes = null;
            jobs.push({ row: row, pageRow: pageRow });
          });
          if (!jobs.some(function (j) { return j.row === row; }) && row.pages.some(function (p) { return p.status === 'done'; })) {
            row.status = 'done';
          } else {
            row.status = 'queued';
            row.error = '';
          }
        });
        renderQueue();
        if (!jobs.length && !queue.some(function (r) { return r.pages.some(function (p) { return p.status === 'done'; }); })) {
          setError(msg.empty);
          setBusy(false);
          closeHud();
          return Promise.resolve();
        }
        var jobTotal = jobs.length;
        /** 若无需新识别（已有成功页），只重打包。 */
        var engineStart = jobs.length
          ? yieldUi().then(function () { return getWorker(langs); })
          : Promise.resolve(null);
        return engineStart.then(function (worker) {
          var jobIndex = 0;
          var fileIdx = 0;
          function nextFile() {
            if (fileIdx >= queue.length) return Promise.resolve();
            var row = queue[fileIdx];
            fileIdx += 1;
            var pageJobs = jobs.filter(function (j) { return j.row === row; });
            if (!pageJobs.length || !worker) return nextFile();
            return ensurePdfJs().then(function (pdfjsLib) {
              return pdfjsLib.getDocument({ data: row.bytes.slice(0) }).promise;
            }).then(function (pdfDoc) {
              var p = 0;
              function nextPage() {
                if (p >= pageJobs.length) {
                  if (pdfDoc.destroy) pdfDoc.destroy();
                  syncFileStatus(row);
                  renderQueue();
                  return Promise.resolve();
                }
                var job = pageJobs[p];
                p += 1;
                jobIndex += 1;
                return recognizePage(job.row, job.pageRow, pdfDoc, worker, jobIndex, jobTotal).then(nextPage);
              }
              return nextPage();
            }).then(nextFile);
          }
          return nextFile();
        }).then(function () {
          if (!queue.some(function (r) { return r.pages.some(function (p) { return p.status === 'done' && p.text; }); })) {
            setStatus('');
            finishHudFail(msg.errEmpty);
            return;
          }
          return yieldUi().then(function () {
            return packOutputs();
          }).then(function () {
            setStatus(msg.done);
            finishHudOk();
          });
        }).catch(function (err) {
          if (err && err.message === 'docx') setError(msg.errDocx);
          else if (err && err.message === 'fflate') setError(msg.errFflate);
          else if (err && err.message === 'pdfjs') setError(msg.errPdfjs);
          else setError(msg.errEngine);
          queue.forEach(function (row) {
            row.pages.forEach(function (pageRow) {
              if (pageRow.status === 'queued' || pageRow.status === 'reading') {
                pageRow.status = 'skipped';
                pageRow.error = msg.errEngine;
              }
            });
            syncFileStatus(row);
          });
          renderQueue();
          setStatus('');
          finishHudFail(msg.hudFailHint);
        }).then(function () {
          setBusy(false);
          syncOutputButtons();
        });
      }

      /**
       * 下载最近一份 Word 或 ZIP。
       */
      function downloadWord() {
        if (!resultBlob) return;
        var url = URL.createObjectURL(resultBlob);
        var a = document.createElement('a');
        a.href = url;
        a.download = resultDownloadName || 'ocr-scanned-pdf.docx';
        document.body.appendChild(a);
        a.click();
        a.remove();
        setTimeout(function () { URL.revokeObjectURL(url); }, 2000);
      }

      /**
       * 页图或导出模式变化后，若已有成功页则重打包（不重跑 OCR）。
       */
      function rebuildIfReady() {
        if (!queue.some(function (r) { return r.pages.some(function (p) { return p.status === 'done' && p.text; }); })) {
          syncOutputButtons();
          return;
        }
        setBusy(true);
        hudWrap.hidden = false;
        hudState.done = false;
        hudState.fail = false;
        hudState.phase = 'pack';
        hudState.pct = 90;
        paintHud();
        packOutputs().then(function () {
          setStatus(msg.done);
          finishHudOk();
        }).catch(function (err) {
          if (err && err.message === 'fflate') setError(msg.errFflate);
          else setError(msg.errDocx);
          finishHudFail(err && err.message === 'fflate' ? msg.errFflate : msg.errDocx);
        }).then(function () {
          setBusy(false);
          syncOutputButtons();
        });
      }

      /**
       * 合成两页印刷体样例 PDF 并走 Convert all（进页不自动调用）。
       * @returns {Promise<void>}
       */
      function loadSample() {
        return loadPdfLib().then(function (PDFLib) {
          return PDFLib.PDFDocument.create().then(function (doc) {
            var Helvetica = PDFLib.StandardFonts && PDFLib.StandardFonts.Helvetica;
            return doc.embedFont(Helvetica).then(function (font) {
              var page1 = doc.addPage([612, 792]);
              page1.drawText('ONLINEFREETOOLS', { x: 72, y: 700, size: 28, font: font });
              page1.drawText('The quick brown fox', { x: 72, y: 650, size: 22, font: font });
              var page2 = doc.addPage([612, 792]);
              page2.drawText('SAMPLE TWO', { x: 72, y: 700, size: 28, font: font });
              page2.drawText('Printed sample page', { x: 72, y: 650, size: 22, font: font });
              return doc.save();
            });
          });
        }).then(function (bytes) {
          var file = new File([bytes], 'sample-scan.pdf', { type: 'application/pdf' });
          queue = [];
          resultBlob = null;
          resultDownloadName = 'ocr-scanned-pdf.docx';
          return addFiles([file]).then(function () {
            return convertAll();
          });
        }).catch(function () {
          setError(msg.errEngine);
        });
      }

      /**
       * 清空队列与结果。
       */
      function clearAll() {
        queue = [];
        resultBlob = null;
        resultDownloadName = 'ocr-scanned-pdf.docx';
        fileInput.value = '';
        renderQueue();
        syncOutputButtons();
        setError('');
        setStatus('');
        closeHud();
      }

      drop.addEventListener('dragover', function (e) {
        e.preventDefault();
        drop.classList.add('dragover');
      });
      drop.addEventListener('dragleave', function () { drop.classList.remove('dragover'); });
      drop.addEventListener('drop', function (e) {
        e.preventDefault();
        drop.classList.remove('dragover');
        var fs = e.dataTransfer && e.dataTransfer.files;
        if (fs && fs.length) addFiles(fs);
      });
      fileInput.addEventListener('change', function () {
        if (fileInput.files && fileInput.files.length) addFiles(fileInput.files);
        fileInput.value = '';
      });

      btnConvert.addEventListener('click', function () { convertAll(); });
      btnDownload.addEventListener('click', downloadWord);
      btnSample.addEventListener('click', function () { loadSample(); });
      btnClear.addEventListener('click', clearAll);
      photoCb.addEventListener('change', rebuildIfReady);
      document.querySelectorAll('input[name="ocrPdfWordOut"]').forEach(function (el) {
        el.addEventListener('change', rebuildIfReady);
      });

      renderQueue();
      /** 进页不自动 loadSample：Tier 2 WASM（PDF + 多页 OCR + 组 DOCX）会打坏 LCP。函数须存在供按钮与 lint。 */
    })();
  </script>`;

	const toolMeta = getToolBySlug('batch-convert-scanned-pdf-to-word-with-ocr');
	const toolSeoHtml = toolMeta
		? renderToolExtraSections({ lang: opts.lang, defaultLang: opts.defaultLang, tool: toolMeta })
		: '';
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
		contentHtml: `${contentHtml}${igHtml}${toolSeoHtml}${referencesHtml}`,
		footerHtml,
		extraHeadHtml: `${extraHeadHtml}${toolJsonLd}`,
		extraBodyHtml,
		includeSidebarToggleScript: true,
		sidebarAutoCloseSelector: '#toolNav a',
	});
};
