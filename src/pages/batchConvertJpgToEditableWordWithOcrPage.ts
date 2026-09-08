/**
 * 多张 JPG/PNG/WebP 印刷体 OCR → 一份可编辑 DOCX（分节、可选原图；点后加载；进页不自动跑）。
 * slug: batch-convert-jpg-to-editable-word-with-ocr
 * 规格：work-tasks/batch-convert-jpg-to-editable-word-with-ocr/02-tool-info.md
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

/** 本工具 i18n 键前缀，与 catalog faqPrefix 一致。 */
const PREFIX = 'tool_batch_convert_jpg_to_editable_word_with_ocr';

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
 * 渲染「用 OCR 批量把 JPG 转成可编辑的 Word」工具页。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderBatchConvertJpgToEditableWordWithOcrPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 工具规范路径。 */
	const toolPath = '/tools/batch-convert-jpg-to-editable-word-with-ocr';
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
			currentSlug: 'batch-convert-jpg-to-editable-word-with-ocr',
			currentAnchor: '#converter',
		}),
		id: 'toolNav',
	});

	/** 页脚。 */
	const footerHtml = renderFooter({ lang: opts.lang });

	/** 队列表样式。 */
	/** 队列表、金标 HUD、Convert 忙碌转圈。 */
	const extraHeadHtml = `
  <style>
    .tools-bar { gap: .5rem; }
    .ocr-word-table { font-size: .85rem; }
    .ocr-word-table td, .ocr-word-table th { vertical-align: middle; }
    #ocrWordLangChips { display: flex; flex-wrap: wrap; gap: .5rem 1rem; }
    #ocrWordLangChips label { font-size: .875rem; }
    ${bcwHudCss({ hudId: 'ocrWordHud', convertBtnId: 'ocrWordBtnConvert' })}
  </style>`;

	/** 首屏：多文件队列、整批语种、Convert all、Download Word。 */
	const contentHtml = `
    <div id="converter" class="tool-page-heading mb-3">
      <h1 class="h4 mb-0">${escapeHtml(tx(opts.lang, 'title'))}</h1>
    </div>

    <label class="tool-dropzone mb-3" id="ocrWordDrop" for="ocrWordFile">
      <input type="file" id="ocrWordFile" accept="image/jpeg,image/png,image/webp,.jpg,.jpeg,.png,.webp" multiple>
      <span class="tool-dropzone-title">${escapeHtml(tx(opts.lang, 'choose_files'))}</span>
      <span class="tool-dropzone-hint">${escapeHtml(tx(opts.lang, 'drop_hint'))}</span>
      <span id="ocrWordFileCount" class="tool-dropzone-file"></span>
    </label>

    <fieldset class="mb-3">
      <legend class="form-label small mb-1">${escapeHtml(tx(opts.lang, 'lang_legend'))}</legend>
      <div id="ocrWordLangChips">
        <label><input type="radio" name="ocrWordLang" value="zh_en" checked> ${escapeHtml(tx(opts.lang, 'lang_zh_en'))}</label>
        <label><input type="radio" name="ocrWordLang" value="en"> ${escapeHtml(tx(opts.lang, 'lang_en'))}</label>
        <label><input type="radio" name="ocrWordLang" value="zh"> ${escapeHtml(tx(opts.lang, 'lang_zh'))}</label>
        <label><input type="radio" name="ocrWordLang" value="ar"> ${escapeHtml(tx(opts.lang, 'lang_ar'))}</label>
        <label><input type="radio" name="ocrWordLang" value="ja"> ${escapeHtml(tx(opts.lang, 'lang_ja'))}</label>
      </div>
    </fieldset>

    <details class="mb-2">
      <summary>${escapeHtml(tx(opts.lang, 'advanced'))}</summary>
      <div class="mt-2">
        <div class="form-check mb-2">
          <input class="form-check-input" type="checkbox" id="ocrWordPhotoCb" checked>
          <label class="form-check-label small" for="ocrWordPhotoCb">${escapeHtml(tx(opts.lang, 'photo_label'))}</label>
          <p class="form-text mb-0">${escapeHtml(tx(opts.lang, 'photo_hint'))}</p>
        </div>
        <label class="form-label small mb-1" for="ocrWordMaxEdge">${escapeHtml(tx(opts.lang, 'max_edge'))}</label>
        <input type="number" id="ocrWordMaxEdge" class="form-control form-control-sm" value="2048" min="800" max="4096" inputmode="numeric">
        <p class="form-text mb-0">${escapeHtml(tx(opts.lang, 'max_edge_hint'))}</p>
      </div>
    </details>

    <div class="d-flex align-items-center tools-bar mb-2 flex-wrap">
      <button type="button" id="ocrWordBtnConvert" class="btn btn-primary btn-sm">${escapeHtml(tx(opts.lang, 'convert_all'))}</button>
      <button type="button" id="ocrWordBtnDownload" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(tx(opts.lang, 'download_word'))}</button>
      <button type="button" id="ocrWordBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx(opts.lang, 'sample'))}</button>
      <button type="button" id="ocrWordBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(tx(opts.lang, 'clear'))}</button>
    </div>

    <p id="ocrWordError" class="small text-danger mb-2" style="display:none;" role="alert"></p>
    <p id="ocrWordStatus" class="small text-muted mb-2" role="status" aria-live="polite"></p>

    <div id="ocrWordHud" class="oft-pdf-work-progress bcw-hud mb-3" hidden>
      <div class="bcw-hud-top">
        <div class="bcw-hud-spin" aria-hidden="true"></div>
        <div class="bcw-hud-pct" id="ocrWordHudPct">0%</div>
        <div class="bcw-hud-copy">
          <div class="bcw-hud-title" id="ocrWordHudTitle">${escapeHtml(tx(opts.lang, 'hud_title'))}</div>
          <div class="bcw-hud-step" id="ocrWordHudStep"></div>
          <div class="bcw-hud-time" id="ocrWordHudTime"></div>
        </div>
      </div>
      <div class="progress" style="height: 1.35rem;">
        <div id="ocrWordHudBar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width: 0%"></div>
        <span class="bcw-hud-sheen" aria-hidden="true"></span>
      </div>
      <ol class="bcw-hud-steps" id="ocrWordHudSteps">
        <li data-step="load">${escapeHtml(tx(opts.lang, 'hud_step_load'))}</li>
        <li data-step="read">${escapeHtml(tx(opts.lang, 'hud_step_read'))}</li>
        <li data-step="pack">${escapeHtml(tx(opts.lang, 'hud_step_pack'))}</li>
      </ol>
      <div class="bcw-hud-url" id="ocrWordHudUrl"></div>
    </div>

    <div class="table-responsive mb-3">
      <table class="table table-sm table-striped ocr-word-table mb-0">
        <thead>
          <tr>
            <th>${escapeHtml(tx(opts.lang, 'col_name'))}</th>
            <th>${escapeHtml(tx(opts.lang, 'col_pixels'))}</th>
            <th>${escapeHtml(tx(opts.lang, 'col_status'))}</th>
            <th>${escapeHtml(tx(opts.lang, 'col_chars'))}</th>
          </tr>
        </thead>
        <tbody id="ocrWordTbody"></tbody>
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
		howItemCount: 4,
	});

	/** 权威引用。 */
	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{ label: 'Tesseract OCR', href: 'https://github.com/tesseract-ocr/tesseract' },
			{ label: 'tesseract.js', href: 'https://github.com/naptha/tesseract.js' },
			{ label: 'docx', href: 'https://docx.js.org/' },
		],
	});

	/**
	 * 客户端：点 Convert all 才加载 Tesseract 与 docx；进页不自动 OCR。
	 * 正则若加入字类，须写成 \\w / \\d。
	 */
	const extraBodyHtml = `
  <script>
    (function () {
      /** 队列上限。 */
      var MAX_FILES = 10;
      /** 单文件上限（字节）。 */
      var MAX_BYTES = 12 * 1024 * 1024;
      /** Word 内插图目标宽度（EMU 变换用 CSS 像素）。 */
      var IMG_WIDTH_PX = 480;
      /** Tesseract OEM LSTM_ONLY。 */
      var OEM_LSTM = 1;
      /** 同域脚本与模型。 */
      var TESS_JS = '/vendor/tesseract/tesseract.min.js';
      var WORKER_PATH = '/vendor/tesseract/worker.min.js';
      var CORE_PATH = '/vendor/tesseract/core';
      var LANG_PATH = '/vendor/tesseract/lang';

      var drop = document.getElementById('ocrWordDrop');
      var fileInput = document.getElementById('ocrWordFile');
      var countEl = document.getElementById('ocrWordFileCount');
      var tbody = document.getElementById('ocrWordTbody');
      var btnConvert = document.getElementById('ocrWordBtnConvert');
      var btnDownload = document.getElementById('ocrWordBtnDownload');
      var btnSample = document.getElementById('ocrWordBtnSample');
      var btnClear = document.getElementById('ocrWordBtnClear');
      var errEl = document.getElementById('ocrWordError');
      var statusEl = document.getElementById('ocrWordStatus');
      var photoCb = document.getElementById('ocrWordPhotoCb');
      var maxEdgeInput = document.getElementById('ocrWordMaxEdge');
      var busyBtns = [btnConvert, btnSample, btnClear];
      var hudWrap = document.getElementById('ocrWordHud');
      var hudPctEl = document.getElementById('ocrWordHudPct');
      var hudTitleEl = document.getElementById('ocrWordHudTitle');
      var hudStepEl = document.getElementById('ocrWordHudStep');
      var hudTimeEl = document.getElementById('ocrWordHudTime');
      var hudUrlEl = document.getElementById('ocrWordHudUrl');
      var hudBar = document.getElementById('ocrWordHudBar');
      var hudStepLis = document.querySelectorAll('#ocrWordHudSteps [data-step]');
      var hudTitleDefault = ${JSON.stringify(tx(opts.lang, 'hud_title'))};

      var msg = {
        empty: ${JSON.stringify(tx(opts.lang, 'empty'))},
        errEmpty: ${JSON.stringify(tx(opts.lang, 'err_empty'))},
        errEngine: ${JSON.stringify(tx(opts.lang, 'err_engine'))},
        errLoad: ${JSON.stringify(tx(opts.lang, 'err_load'))},
        errPdf: ${JSON.stringify(tx(opts.lang, 'err_pdf'))},
        errSize: ${JSON.stringify(tx(opts.lang, 'err_size'))},
        errDocx: ${JSON.stringify(tx(opts.lang, 'err_docx'))},
        errTooMany: ${JSON.stringify(tx(opts.lang, 'err_too_many'))},
        loading: ${JSON.stringify(tx(opts.lang, 'status_loading'))},
        progress: ${JSON.stringify(tx(opts.lang, 'status_progress'))},
        packing: ${JSON.stringify(tx(opts.lang, 'status_packing'))},
        done: ${JSON.stringify(tx(opts.lang, 'status_done'))},
        countTpl: ${JSON.stringify(tx(opts.lang, 'count_tpl'))},
        stQueued: ${JSON.stringify(tx(opts.lang, 'st_queued'))},
        stReading: ${JSON.stringify(tx(opts.lang, 'st_reading'))},
        stDone: ${JSON.stringify(tx(opts.lang, 'st_done'))},
        stSkipped: ${JSON.stringify(tx(opts.lang, 'st_skipped'))},
        hudElapsed: ${JSON.stringify(tx(opts.lang, 'hud_elapsed_tpl'))},
        hudPct: ${JSON.stringify(tx(opts.lang, 'hud_pct_tpl'))},
        hudNext: ${JSON.stringify(tx(opts.lang, 'hud_next'))},
        hudFailTitle: ${JSON.stringify(tx(opts.lang, 'hud_fail_title'))},
        hudFailHint: ${JSON.stringify(tx(opts.lang, 'hud_fail_hint'))},
        hudLoadScript: ${JSON.stringify(tx(opts.lang, 'hud_load_script'))},
        hudLoadCore: ${JSON.stringify(tx(opts.lang, 'hud_load_core'))},
        hudLoadLang: ${JSON.stringify(tx(opts.lang, 'hud_load_lang'))},
        hudLoadApi: ${JSON.stringify(tx(opts.lang, 'hud_load_api'))},
        hudLoadDocx: ${JSON.stringify(tx(opts.lang, 'hud_load_docx'))},
        hudWorking: ${JSON.stringify(tx(opts.lang, 'hud_working'))}
      };

      /** @type {Array<{file: File, name: string, w: number, h: number, status: string, text: string, error: string, pngBytes: Uint8Array|null}>} */
      var queue = [];
      /** @type {Blob|null} 最近一份 DOCX */
      var resultBlob = null;
      /** @type {Promise<object>|null} docx UMD 缓存 */
      var docxLibPromise = null;
      /** @type {any} Tesseract worker 缓存 */
      var tessWorker = null;
      /** @type {string} worker 对应的语种键 */
      var tessWorkerKey = '';
      /** HUD 计时器 id。 */
      var hudClockId = 0;
      /** 本批开始时间戳。 */
      var hudClockStart = 0;
      /** @type {{pct:number|null, phase:string, detail:string, url:string, done:boolean, fail:boolean}} HUD 状态。 */
      var hudState = { pct: 0, phase: '', detail: '', url: '', done: false, fail: false };
      /** 当前批文件总数，供 logger 估算百分比。 */
      var hudJobTotal = 1;
      /** 当前 1-based 文件序号。 */
      var hudJobIndex = 1;

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
       * 让出一帧再短延迟，先画出 HUD 再跑 WASM / OCR。
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
       * 把 hudState 画到百分比、步骤胶囊、当前文件。
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
        if (hudStepEl) hudStepEl.textContent = hudState.detail || '';
        if (hudUrlEl) hudUrlEl.textContent = hudState.url || '';
        var order = ['load', 'read', 'pack'];
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
        hudState.detail = msg.hudWorking;
        hudState.url = msg.hudLoadScript;
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
        hudState.detail = '';
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
        hudState.detail = msg.done;
        hudState.url = msg.hudNext;
        stopHudClock();
        paintHud();
      }

      /**
       * 失败卡片：同等尺寸 HUD。
       * @param {string} hint 失败说明
       */
      function finishHudFail(hint) {
        hudState.done = false;
        hudState.fail = true;
        hudState.pct = hudState.pct == null ? 0 : hudState.pct;
        hudState.phase = '';
        hudState.detail = '';
        hudState.url = hint || msg.hudFailHint;
        if (hudTitleEl) hudTitleEl.textContent = msg.hudFailTitle;
        stopHudClock();
        hudWrap.hidden = false;
        hudWrap.classList.add('is-on');
        paintHud();
      }

      /**
       * 把 tesseract.js logger 映射成人话：首次 WASM / 语种包会等很久。
       * @param {any} m tesseract logger 消息
       */
      function applyTessLogger(m) {
        if (!m || !m.status) return;
        var st = String(m.status);
        var p = typeof m.progress === 'number' && isFinite(m.progress) ? m.progress : null;
        if (st === 'recognizing text') {
          hudState.phase = 'read';
          hudState.detail = msg.stReading;
          var base = ((hudJobIndex - 1) / Math.max(1, hudJobTotal)) * 78;
          hudState.pct = 12 + Math.round(base + (p == null ? 0 : p) * (78 / Math.max(1, hudJobTotal)));
          paintHud();
          return;
        }
        hudState.phase = 'load';
        if (st.indexOf('loading tesseract core') !== -1 || st.indexOf('initializing tesseract') !== -1) {
          hudState.detail = msg.hudLoadCore;
          hudState.url = msg.hudLoadCore;
          hudState.pct = p == null ? 4 : Math.min(10, Math.round(p * 10));
        } else if (st.indexOf('language') !== -1) {
          hudState.detail = msg.hudLoadLang;
          hudState.url = msg.hudLoadLang;
          hudState.pct = p == null ? 8 : 8 + Math.round(p * 3);
        } else if (st.indexOf('initializing api') !== -1) {
          hudState.detail = msg.hudLoadApi;
          hudState.url = msg.hudLoadApi;
          hudState.pct = 11;
        } else if (st.indexOf('loading') !== -1) {
          hudState.detail = msg.hudLoadCore;
          hudState.url = msg.hudLoadCore;
        } else {
          return;
        }
        setStatus(hudState.detail);
        paintHud();
      }

      /**
       * 显示或隐藏整页错误。
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
        document.querySelectorAll('input[name="ocrWordLang"]').forEach(function (el) { el.disabled = on; });
        photoCb.disabled = on;
        maxEdgeInput.disabled = on;
        if (on) btnConvert.setAttribute('aria-busy', 'true');
        else btnConvert.removeAttribute('aria-busy');
      }

      /**
       * 有成功节才启用 Download Word。
       */
      function syncOutputButtons() {
        btnDownload.disabled = !resultBlob;
      }

      /**
       * 读取语种芯片 → Tesseract 语言代码数组。
       * @returns {string[]}
       */
      function selectedTessLangs() {
        var checked = document.querySelector('input[name="ocrWordLang"]:checked');
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
       * 行状态文案。
       * @param {string} status queued|reading|done|skipped
       * @returns {string}
       */
      function statusLabel(status) {
        if (status === 'reading') return msg.stReading;
        if (status === 'done') return msg.stDone;
        if (status === 'skipped') return msg.stSkipped;
        return msg.stQueued;
      }

      /**
       * 重绘画队列表。
       */
      function renderQueue() {
        tbody.textContent = '';
        queue.forEach(function (row) {
          var tr = document.createElement('tr');
          var px = row.w && row.h ? row.w + '×' + row.h : '—';
          var note = row.error || (row.text ? String(row.text.length) : '');
          [row.name, px, statusLabel(row.status), note].forEach(function (cell) {
            var td = document.createElement('td');
            td.textContent = cell;
            tr.appendChild(td);
          });
          tbody.appendChild(tr);
        });
        countEl.textContent = queue.length ? msg.countTpl.replace('{n}', String(queue.length)) : '';
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
          script.src = '/vendor/docx/index.umd.js';
          hudState.phase = 'pack';
          hudState.detail = msg.hudLoadDocx;
          hudState.url = msg.hudLoadDocx;
          hudState.pct = Math.max(hudState.pct || 0, 90);
          setStatus(msg.hudLoadDocx);
          paintHud();
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
          hudState.phase = 'load';
          hudState.detail = msg.hudLoadCore;
          hudState.url = msg.hudLoadCore;
          hudState.pct = 4;
          setStatus(msg.loading);
          paintHud();
          return Tesseract.createWorker(langs, OEM_LSTM, {
            workerPath: WORKER_PATH,
            corePath: CORE_PATH,
            langPath: LANG_PATH,
            workerBlobURL: false,
            logger: applyTessLogger
          });
        }).then(function (worker) {
          tessWorker = worker;
          tessWorkerKey = key;
          return worker;
        });
      }

      /**
       * 把图片缩到最长边上限后画到 canvas。
       * @param {Blob} blob 图片
       * @returns {Promise<{canvas: HTMLCanvasElement, w: number, h: number}>}
       */
      function blobToCanvas(blob) {
        return createImageBitmap(blob).then(function (bmp) {
          var w = bmp.width;
          var h = bmp.height;
          var edge = maxEdge();
          var scale = Math.min(1, edge / Math.max(w, h));
          var cw = Math.max(1, Math.round(w * scale));
          var ch = Math.max(1, Math.round(h * scale));
          var c = document.createElement('canvas');
          c.width = cw;
          c.height = ch;
          var ctx = c.getContext('2d');
          if (!ctx) {
            bmp.close();
            return Promise.reject(new Error('load'));
          }
          ctx.drawImage(bmp, 0, 0, cw, ch);
          bmp.close();
          return { canvas: c, w: cw, h: ch };
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
       * 判断是否可识别的图片类型。
       * @param {File} file 用户文件
       * @returns {string} 'ok' | 'pdf' | 'type' | 'size'
       */
      function classifyFile(file) {
        var name = (file && file.name ? file.name : '').toLowerCase();
        var type = (file && file.type ? file.type : '').toLowerCase();
        if (type === 'application/pdf' || /\\.pdf$/.test(name)) return 'pdf';
        var okType = type === 'image/jpeg' || type === 'image/jpg' || type === 'image/png' || type === 'image/webp'
          || /\\.(jpe?g|png|webp)$/.test(name);
        if (!okType) return 'type';
        if (file.size > MAX_BYTES) return 'size';
        return 'ok';
      }

      /**
       * 把文件列表追加进队列（上限 10；PDF 不入队）。
       * @param {FileList|File[]} files 新文件
       */
      function addFiles(files) {
        setError('');
        var list = Array.prototype.slice.call(files || []);
        var extra = false;
        list.forEach(function (file) {
          if (queue.length >= MAX_FILES) {
            extra = true;
            return;
          }
          var kind = classifyFile(file);
          if (kind === 'pdf') {
            setError(msg.errPdf);
            return;
          }
          if (kind === 'type') {
            queue.push({ file: file, name: file.name || 'image', w: 0, h: 0, status: 'skipped', text: '', error: msg.errLoad, pngBytes: null });
            return;
          }
          if (kind === 'size') {
            queue.push({ file: file, name: file.name || 'image', w: 0, h: 0, status: 'skipped', text: '', error: msg.errSize, pngBytes: null });
            return;
          }
          queue.push({ file: file, name: file.name || 'image', w: 0, h: 0, status: 'queued', text: '', error: '', pngBytes: null });
        });
        if (extra) setError(msg.errTooMany);
        resultBlob = null;
        renderQueue();
        syncOutputButtons();
        queue.forEach(function (row) {
          if (row.status !== 'queued' || row.w) return;
          blobToCanvas(row.file).then(function (out) {
            row.w = out.w;
            row.h = out.h;
            renderQueue();
          }).catch(function () { /* 像素预览失败等 Convert 再 skip */ });
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
       * 识别单行；失败 skip，不抛到整批。
       * @param {object} row 队列行
       * @param {any} worker Tesseract worker
       * @param {number} index 1-based 进度
       * @returns {Promise<void>}
       */
      function recognizeRow(row, worker, index) {
        row.status = 'reading';
        hudJobIndex = index;
        hudState.phase = 'read';
        hudState.detail = fillTpl(msg.progress, { i: index, n: queue.length, name: row.name });
        hudState.url = row.name;
        hudState.pct = 12 + Math.round(((index - 1) / Math.max(1, queue.length)) * 78);
        setStatus(fillTpl(msg.progress, { i: index, n: queue.length, name: row.name }));
        paintHud();
        renderQueue();
        return yieldUi().then(function () {
          return blobToCanvas(row.file);
        }).then(function (out) {
          row.w = out.w;
          row.h = out.h;
          return canvasToPngBytes(out.canvas).then(function (png) {
            row.pngBytes = png;
            return worker.recognize(out.canvas);
          });
        }).then(function (result) {
          var data = outData(result);
          var text = String(data.text || '').replace(/^\\s+/g, '').replace(/\\s+$/g, '');
          if (!text) {
            row.status = 'skipped';
            row.error = msg.errEmpty;
            row.pngBytes = null;
            return;
          }
          row.status = 'done';
          row.text = text;
          row.error = '';
        }).catch(function () {
          row.status = 'skipped';
          row.error = msg.errLoad;
          row.pngBytes = null;
        }).then(function () {
          renderQueue();
        });
      }

      /**
       * 用成功行组一份 DOCX：Heading 1=文件名、可选原图、段落、分页。
       * @returns {Promise<Blob>}
       */
      function buildDocxBlob() {
        var done = queue.filter(function (r) { return r.status === 'done' && r.text; });
        if (!done.length) return Promise.reject(new Error('empty'));
        setStatus(msg.packing);
        hudState.phase = 'pack';
        hudState.detail = msg.packing;
        hudState.url = msg.hudLoadDocx;
        hudState.pct = 92;
        paintHud();
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
          done.forEach(function (row, idx) {
            children.push(new Paragraph({
              heading: HeadingLevel.HEADING_1,
              children: [new TextRun(String(row.name || 'photo'))]
            }));
            if (includeImg && row.pngBytes && row.pngBytes.length && row.w && row.h) {
              var targetH = Math.max(1, Math.round(row.h * (IMG_WIDTH_PX / row.w)));
              children.push(new Paragraph({
                children: [
                  new ImageRun({
                    data: row.pngBytes,
                    transformation: { width: IMG_WIDTH_PX, height: targetH }
                  })
                ]
              }));
            }
            String(row.text).split(/\\n/).forEach(function (line) {
              children.push(new Paragraph({
                children: [new TextRun(line || ' ')]
              }));
            });
            if (idx < done.length - 1) {
              children.push(new Paragraph({ children: [new PageBreak()] }));
            }
          });
          var doc = new Document({ sections: [{ children: children }] });
          return Packer.toBlob(doc);
        });
      }

      /**
       * 整批串行 Convert all。引擎失败则停止后续行，保留已完成节。
       * @returns {Promise<void>}
       */
      function convertAll() {
        if (!queue.length) {
          setError(msg.empty);
          return Promise.resolve();
        }
        var hasWork = queue.some(function (r) {
          return r.status === 'queued' || (r.status === 'skipped' && r.error === msg.errEmpty);
        });
        if (!hasWork && !queue.some(function (r) { return r.status === 'done'; })) {
          setError(msg.empty);
          return Promise.resolve();
        }
        setError('');
        setBusy(true);
        resultBlob = null;
        syncOutputButtons();
        openHud();
        setStatus(msg.loading);
        var langs = selectedTessLangs();
        hudJobTotal = Math.max(1, queue.length);
        hudJobIndex = 1;
        return yieldUi().then(function () {
          return getWorker(langs);
        }).then(function (worker) {
          var i = 0;
          function next() {
            if (i >= queue.length) return Promise.resolve();
            var row = queue[i];
            i += 1;
            if (row.status === 'done' && row.text) return next();
            if (row.status === 'skipped' && row.error && row.error !== msg.errEmpty) {
              return next();
            }
            row.status = 'queued';
            row.text = '';
            row.error = '';
            row.pngBytes = null;
            return recognizeRow(row, worker, i).then(next);
          }
          return next();
        }).then(function () {
          if (!queue.some(function (r) { return r.status === 'done' && r.text; })) {
            setStatus('');
            finishHudFail(msg.errEmpty);
            return;
          }
          return yieldUi().then(function () {
            return buildDocxBlob();
          }).then(function (blob) {
            resultBlob = blob;
            setStatus(msg.done);
            finishHudOk();
          });
        }).catch(function (err) {
          if (err && err.message === 'docx') setError(msg.errDocx);
          else setError(msg.errEngine);
          queue.forEach(function (row) {
            if (row.status === 'queued' || row.status === 'reading') {
              row.status = 'skipped';
              row.error = msg.errEngine;
            }
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
       * 下载最近一份 Word。
       */
      function downloadWord() {
        if (!resultBlob) return;
        var url = URL.createObjectURL(resultBlob);
        var a = document.createElement('a');
        a.href = url;
        a.download = 'ocr-photos.docx';
        document.body.appendChild(a);
        a.click();
        a.remove();
        setTimeout(function () { URL.revokeObjectURL(url); }, 2000);
      }

      /**
       * 插图开关变化后，若已有成功行则重打包（不重跑 OCR）。
       */
      function rebuildIfReady() {
        if (!queue.some(function (r) { return r.status === 'done' && r.text; })) return;
        setBusy(true);
        buildDocxBlob().then(function (blob) {
          resultBlob = blob;
          setStatus(msg.done);
        }).catch(function () {
          setError(msg.errDocx);
        }).then(function () {
          setBusy(false);
          syncOutputButtons();
        });
      }

      /**
       * 画一张印刷体样例图。
       * @param {string[]} lines 行文
       * @param {string} filename 样例文件名
       * @returns {Promise<File>}
       */
      function makeSampleFile(lines, filename) {
        var c = document.createElement('canvas');
        c.width = 1100;
        c.height = 360;
        var ctx = c.getContext('2d');
        if (!ctx) return Promise.resolve(null);
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, c.width, c.height);
        ctx.fillStyle = '#111111';
        lines.forEach(function (line, idx) {
          ctx.font = idx === 0 ? 'bold 48px sans-serif' : '40px "PingFang SC", "Microsoft YaHei", "Noto Sans SC", sans-serif';
          ctx.fillText(line, 48, 90 + idx * 80);
        });
        return new Promise(function (resolve) {
          c.toBlob(function (blob) {
            if (!blob) { resolve(null); return; }
            resolve(new File([blob], filename, { type: 'image/jpeg' }));
          }, 'image/jpeg', 0.95);
        });
      }

      /**
       * 合成两张印刷体样例并走 Convert all（进页不自动调用）。
       * @returns {Promise<void>}
       */
      function loadSample() {
        return Promise.all([
          makeSampleFile(['ONLINEFREETOOLS', 'The quick brown fox'], 'sample-1.jpg'),
          makeSampleFile(['SAMPLE TWO', '印刷体样例'], 'sample-2.jpg')
        ]).then(function (files) {
          queue = [];
          resultBlob = null;
          addFiles(files.filter(Boolean));
          return convertAll();
        });
      }

      /**
       * 清空队列与结果。
       */
      function clearAll() {
        queue = [];
        resultBlob = null;
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

      renderQueue();
      /** 进页不自动 loadSample：WASM + 多图 + 组 DOCX 会打坏 LCP。函数须存在供按钮与 lint。 */
    })();
  </script>`;

	const toolMeta = getToolBySlug('batch-convert-jpg-to-editable-word-with-ocr');
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
