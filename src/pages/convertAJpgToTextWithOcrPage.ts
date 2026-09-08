/**
 * JPG/PNG/WebP 印刷体 OCR → 可复制 TXT（点后加载 Tesseract WASM；进页不自动跑）。
 * slug: convert-a-jpg-to-text-with-ocr
 * 规格：work-tasks/convert-a-jpg-to-text-with-ocr/02-tool-info.md
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

/** i18n 键前缀（与 catalog faqPrefix 一致）。 */
const P = 'tool_convert_a_jpg_to_text_with_ocr';

/**
 * 非默认语言时为路径加语言前缀。
 * @param lang 当前 UI 语言
 * @param pathname 站点路径
 * @param defaultLang 无前缀的默认语
 */
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * 渲染「用 OCR 把 JPG 转成文字」工具页。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderConvertAJpgToTextWithOcrPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/convert-a-jpg-to-text-with-ocr';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, `${P}_title`)} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, `${P}_description`);

	const navItems = buildToolPageNavItems(opts.lang, opts.defaultLang);

	/** hreflang 映射始终带显式语言段。 */
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
			currentSlug: 'convert-a-jpg-to-text-with-ocr',
			currentAnchor: '#converter',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	/** 结果区 + 金标 HUD / Convert 忙碌转圈。 */
	const extraHeadHtml = `
  <style>
    .tools-bar { gap: .5rem; }
    .ocr-jpg-meta { font-size: .85rem; color: #6c757d; }
    #ocrJpgOutput { min-height: 180px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: .85rem; }
    #ocrJpgLangChips { display: flex; flex-wrap: wrap; gap: .5rem 1rem; }
    #ocrJpgLangChips label { font-size: .875rem; }
    ${bcwHudCss({ hudId: 'ocrJpgHud', convertBtnId: 'ocrJpgBtnConvert' })}
  </style>`;

	const contentHtml = `
    <div id="converter" class="tool-page-heading mb-3">
      <h1 class="h4 mb-0">${escapeHtml(t(opts.lang, `${P}_title`))}</h1>
    </div>

    <label class="tool-dropzone mb-3" id="ocrJpgDrop" for="ocrJpgFile">
      <input type="file" id="ocrJpgFile" accept="image/jpeg,image/png,image/webp,.jpg,.jpeg,.png,.webp">
      <span class="tool-dropzone-title">${escapeHtml(t(opts.lang, `${P}_choose_file`))}</span>
      <span class="tool-dropzone-hint">${escapeHtml(t(opts.lang, `${P}_drop_hint`))}</span>
      <span id="ocrJpgFileName" class="tool-dropzone-file"></span>
    </label>

    <fieldset class="mb-3">
      <legend class="form-label small mb-1">${escapeHtml(t(opts.lang, `${P}_lang_legend`))}</legend>
      <div id="ocrJpgLangChips">
        <label><input type="radio" name="ocrJpgLang" value="zh_en" checked> ${escapeHtml(t(opts.lang, `${P}_lang_zh_en`))}</label>
        <label><input type="radio" name="ocrJpgLang" value="en"> ${escapeHtml(t(opts.lang, `${P}_lang_en`))}</label>
        <label><input type="radio" name="ocrJpgLang" value="zh"> ${escapeHtml(t(opts.lang, `${P}_lang_zh`))}</label>
        <label><input type="radio" name="ocrJpgLang" value="ar"> ${escapeHtml(t(opts.lang, `${P}_lang_ar`))}</label>
        <label><input type="radio" name="ocrJpgLang" value="ja"> ${escapeHtml(t(opts.lang, `${P}_lang_ja`))}</label>
      </div>
    </fieldset>

    <details class="mb-2">
      <summary>${escapeHtml(t(opts.lang, `${P}_advanced`))}</summary>
      <div class="mt-2">
        <div class="form-check mb-2">
          <input class="form-check-input" type="checkbox" id="ocrJpgLowConf">
          <label class="form-check-label small" for="ocrJpgLowConf">${escapeHtml(t(opts.lang, `${P}_low_conf`))}</label>
        </div>
        <label class="form-label small mb-1" for="ocrJpgMaxEdge">${escapeHtml(t(opts.lang, `${P}_max_edge`))}</label>
        <input type="number" id="ocrJpgMaxEdge" class="form-control form-control-sm" value="2048" min="800" max="4096" inputmode="numeric">
        <p class="form-text mb-0">${escapeHtml(t(opts.lang, `${P}_max_edge_hint`))}</p>
      </div>
    </details>

    <div class="d-flex align-items-center tools-bar mb-2 flex-wrap">
      <button type="button" id="ocrJpgBtnConvert" class="btn btn-primary btn-sm">${escapeHtml(t(opts.lang, `${P}_convert`))}</button>
      <button type="button" id="ocrJpgBtnCopy" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(t(opts.lang, `${P}_copy`))}</button>
      <button type="button" id="ocrJpgBtnDownload" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(t(opts.lang, `${P}_download`))}</button>
      <button type="button" id="ocrJpgBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, `${P}_sample`))}</button>
      <button type="button" id="ocrJpgBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, `${P}_clear`))}</button>
    </div>

    <p id="ocrJpgMeta" class="ocr-jpg-meta mb-2" style="display:none;"></p>
    <p id="ocrJpgError" class="small text-danger mb-2" style="display:none;" role="alert"></p>
    <p id="ocrJpgStatus" class="small text-muted mb-2" role="status" aria-live="polite"></p>
    <p id="ocrJpgConf" class="small text-muted mb-2" style="display:none;"></p>

    <div id="ocrJpgHud" class="oft-pdf-work-progress bcw-hud mb-3" hidden>
      <div class="bcw-hud-top">
        <div class="bcw-hud-spin" aria-hidden="true"></div>
        <div class="bcw-hud-pct" id="ocrJpgHudPct">0%</div>
        <div class="bcw-hud-copy">
          <div class="bcw-hud-title" id="ocrJpgHudTitle">${escapeHtml(t(opts.lang, `${P}_hud_title`))}</div>
          <div class="bcw-hud-step" id="ocrJpgHudStep"></div>
          <div class="bcw-hud-time" id="ocrJpgHudTime"></div>
        </div>
      </div>
      <div class="progress" style="height: 1.35rem;">
        <div id="ocrJpgHudBar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width: 0%"></div>
        <span class="bcw-hud-sheen" aria-hidden="true"></span>
      </div>
      <ol class="bcw-hud-steps" id="ocrJpgHudSteps">
        <li data-step="load">${escapeHtml(t(opts.lang, `${P}_hud_step_load`))}</li>
        <li data-step="read">${escapeHtml(t(opts.lang, `${P}_hud_step_read`))}</li>
      </ol>
      <div class="bcw-hud-url" id="ocrJpgHudUrl"></div>
    </div>

    <label class="form-label small mb-1" for="ocrJpgOutput">${escapeHtml(t(opts.lang, `${P}_preview_label`))}</label>
    <textarea id="ocrJpgOutput" class="form-control mb-2" readonly rows="10" aria-readonly="true"></textarea>
    <p id="ocrJpgLowWrap" class="small mb-3" style="display:none;"></p>

    <p class="tool-lead mb-4">${escapeHtml(t(opts.lang, `${P}_desc`))}</p>`;

	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: P,
		mode: 'rules',
		usecaseCount: 3,
		ruleItemCount: 4,
		howItemCount: 4,
	});

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{ label: 'Tesseract OCR', href: 'https://github.com/tesseract-ocr/tesseract' },
			{ label: 'tesseract.js', href: 'https://github.com/naptha/tesseract.js' },
		],
	});

	/**
	 * 客户端：点 Convert 才加载 /vendor/tesseract；进页不自动 OCR。
	 * 正则若将来加入字类，须写成 \\w / \\d。
	 */
	const extraBodyHtml = `
  <script>
    (function () {
      /** 单文件上限（字节）。 */
      var MAX_BYTES = 12 * 1024 * 1024;
      /** Tesseract OEM LSTM_ONLY。 */
      var OEM_LSTM = 1;
      /** 低置信词阈值（0–100）。 */
      var LOW_CONF = 50;
      /** 同域脚本与模型。 */
      var TESS_JS = '/vendor/tesseract/tesseract.min.js';
      var WORKER_PATH = '/vendor/tesseract/worker.min.js';
      var CORE_PATH = '/vendor/tesseract/core';
      var LANG_PATH = '/vendor/tesseract/lang';

      var drop = document.getElementById('ocrJpgDrop');
      var fileInput = document.getElementById('ocrJpgFile');
      var fileNameEl = document.getElementById('ocrJpgFileName');
      var metaEl = document.getElementById('ocrJpgMeta');
      var outputEl = document.getElementById('ocrJpgOutput');
      var lowWrap = document.getElementById('ocrJpgLowWrap');
      var btnConvert = document.getElementById('ocrJpgBtnConvert');
      var btnCopy = document.getElementById('ocrJpgBtnCopy');
      var btnDownload = document.getElementById('ocrJpgBtnDownload');
      var btnSample = document.getElementById('ocrJpgBtnSample');
      var btnClear = document.getElementById('ocrJpgBtnClear');
      var errEl = document.getElementById('ocrJpgError');
      var statusEl = document.getElementById('ocrJpgStatus');
      var confEl = document.getElementById('ocrJpgConf');
      var lowConfCb = document.getElementById('ocrJpgLowConf');
      var maxEdgeInput = document.getElementById('ocrJpgMaxEdge');
      var busyBtns = [btnConvert, btnSample, btnClear];
      var hudWrap = document.getElementById('ocrJpgHud');
      var hudPctEl = document.getElementById('ocrJpgHudPct');
      var hudTitleEl = document.getElementById('ocrJpgHudTitle');
      var hudStepEl = document.getElementById('ocrJpgHudStep');
      var hudTimeEl = document.getElementById('ocrJpgHudTime');
      var hudUrlEl = document.getElementById('ocrJpgHudUrl');
      var hudBar = document.getElementById('ocrJpgHudBar');
      var hudStepLis = document.querySelectorAll('#ocrJpgHudSteps [data-step]');
      var hudTitleDefault = ${JSON.stringify(t(opts.lang, `${P}_hud_title`))};

      var msg = {
        empty: ${JSON.stringify(t(opts.lang, `${P}_empty`))},
        errEmpty: ${JSON.stringify(t(opts.lang, `${P}_err_empty`))},
        errEngine: ${JSON.stringify(t(opts.lang, `${P}_err_engine`))},
        errLoad: ${JSON.stringify(t(opts.lang, `${P}_err_load`))},
        errPdf: ${JSON.stringify(t(opts.lang, `${P}_err_pdf`))},
        errSize: ${JSON.stringify(t(opts.lang, `${P}_err_size`))},
        loading: ${JSON.stringify(t(opts.lang, `${P}_status_loading`))},
        reading: ${JSON.stringify(t(opts.lang, `${P}_status_reading`))},
        done: ${JSON.stringify(t(opts.lang, `${P}_status_done`))},
        copied: ${JSON.stringify(t(opts.lang, `${P}_copied`))},
        confTpl: ${JSON.stringify(t(opts.lang, `${P}_confidence_tpl`))},
        metaTpl: ${JSON.stringify(t(opts.lang, `${P}_meta_tpl`))},
        lowLabel: ${JSON.stringify(t(opts.lang, `${P}_low_conf_label`))},
        hudElapsed: ${JSON.stringify(t(opts.lang, `${P}_hud_elapsed_tpl`))},
        hudPct: ${JSON.stringify(t(opts.lang, `${P}_hud_pct_tpl`))},
        hudNext: ${JSON.stringify(t(opts.lang, `${P}_hud_next`))},
        hudFailTitle: ${JSON.stringify(t(opts.lang, `${P}_hud_fail_title`))},
        hudFailHint: ${JSON.stringify(t(opts.lang, `${P}_hud_fail_hint`))},
        hudLoadScript: ${JSON.stringify(t(opts.lang, `${P}_hud_load_script`))},
        hudLoadCore: ${JSON.stringify(t(opts.lang, `${P}_hud_load_core`))},
        hudLoadLang: ${JSON.stringify(t(opts.lang, `${P}_hud_load_lang`))},
        hudLoadApi: ${JSON.stringify(t(opts.lang, `${P}_hud_load_api`))},
        hudWorking: ${JSON.stringify(t(opts.lang, `${P}_hud_working`))}
      };

      /** @type {File | null} 当前待识别图片 */
      var currentFile = null;
      /** @type {{ w: number, h: number } | null} 解码后像素 */
      var currentSize = null;
      /** @type {string} 识别结果 */
      var resultText = '';
      /** @type {any} Tesseract worker 缓存 */
      var tessWorker = null;
      /** @type {string} worker 对应的语种键 */
      var tessWorkerKey = '';
      /** @type {boolean} tesseract.min.js 是否已插入 */
      var tessScriptLoaded = false;
      /** HUD 计时器 id。 */
      var hudClockId = 0;
      /** 本批开始时间戳。 */
      var hudClockStart = 0;
      /** @type {{pct:number|null, phase:string, detail:string, url:string, done:boolean, fail:boolean}} HUD 状态。 */
      var hudState = { pct: 0, phase: '', detail: '', url: '', done: false, fail: false };

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
       * 把 hudState 画到百分比、步骤胶囊、当前说明。
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
        var order = ['load', 'read'];
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
       * 立刻收起进度面板（清空时）。
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
       * 成功结束：留在 100%，提示下一步复制或下载。
       */
      function finishHudOk() {
        hudState.done = true;
        hudState.fail = false;
        hudState.pct = 100;
        hudState.phase = 'read';
        hudState.detail = msg.done;
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
          hudState.detail = msg.reading;
          hudState.pct = 38 + Math.round((p == null ? 0 : p) * 57);
          setStatus(msg.reading + (p == null ? '' : ' ' + Math.round(p * 100) + '%'));
          paintHud();
          return;
        }
        hudState.phase = 'load';
        if (st.indexOf('loading tesseract core') !== -1 || st.indexOf('initializing tesseract') !== -1) {
          hudState.detail = msg.hudLoadCore;
          hudState.url = msg.hudLoadCore;
          hudState.pct = p == null ? 8 : Math.min(22, Math.round(p * 22));
        } else if (st.indexOf('language') !== -1) {
          hudState.detail = msg.hudLoadLang;
          hudState.url = msg.hudLoadLang;
          hudState.pct = p == null ? 24 : 22 + Math.round(p * 10);
        } else if (st.indexOf('initializing api') !== -1) {
          hudState.detail = msg.hudLoadApi;
          hudState.url = msg.hudLoadApi;
          hudState.pct = 34;
        } else if (st.indexOf('loading') !== -1) {
          hudState.detail = msg.hudLoadCore;
          hudState.url = msg.hudLoadCore;
          hudState.pct = p == null ? 10 : Math.min(20, Math.round(p * 20));
        } else {
          return;
        }
        setStatus(hudState.detail);
        paintHud();
      }

      /**
       * 显示或隐藏错误。
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
       * 忙碌时禁用输入与动作按钮（Copy/Download 仍按是否有产物）。
       * @param {boolean} on 是否忙碌
       */
      function setBusy(on) {
        busyBtns.forEach(function (b) { b.disabled = on; });
        fileInput.disabled = on;
        drop.style.pointerEvents = on ? 'none' : '';
        document.querySelectorAll('input[name="ocrJpgLang"]').forEach(function (el) { el.disabled = on; });
        lowConfCb.disabled = on;
        maxEdgeInput.disabled = on;
        if (on) btnConvert.setAttribute('aria-busy', 'true');
        else btnConvert.removeAttribute('aria-busy');
      }

      /**
       * 按产物启用 Copy / Download。
       */
      function syncOutputButtons() {
        var ok = resultText.length > 0;
        btnCopy.disabled = !ok;
        btnDownload.disabled = !ok;
      }

      /**
       * 清空识别结果区。
       */
      function clearResult() {
        resultText = '';
        outputEl.value = '';
        confEl.style.display = 'none';
        confEl.textContent = '';
        lowWrap.style.display = 'none';
        lowWrap.textContent = '';
        syncOutputButtons();
      }

      /**
       * 读取语种芯片 → Tesseract 语言代码数组。
       * @returns {string[]}
       */
      function selectedTessLangs() {
        var checked = document.querySelector('input[name="ocrJpgLang"]:checked');
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
       * 懒加载 tesseract.min.js（仅一次）。
       * @returns {Promise<any>}
       */
      function loadTessScript() {
        if (window.Tesseract) {
          tessScriptLoaded = true;
          return Promise.resolve(window.Tesseract);
        }
        return new Promise(function (resolve, reject) {
          var s = document.createElement('script');
          s.src = TESS_JS;
          s.onload = function () {
            tessScriptLoaded = true;
            if (window.Tesseract) resolve(window.Tesseract);
            else reject(new Error('engine'));
          };
          s.onerror = function () { reject(new Error('engine')); };
          document.head.appendChild(s);
        });
      }

      /**
       * 取得或重建 worker（语种变化则 terminate 后重开）。
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
          hudState.pct = 6;
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
       * @returns {Promise<HTMLCanvasElement>}
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
          currentSize = { w: cw, h: ch };
          return c;
        });
      }

      /**
       * 刷新文件名与像素 meta。
       */
      function refreshMeta() {
        if (!currentFile) {
          metaEl.style.display = 'none';
          fileNameEl.textContent = '';
          return;
        }
        fileNameEl.textContent = currentFile.name || '';
        var w = currentSize ? currentSize.w : '?';
        var h = currentSize ? currentSize.h : '?';
        metaEl.textContent = msg.metaTpl.replace('{name}', currentFile.name || '').replace('{w}', String(w)).replace('{h}', String(h));
        metaEl.style.display = 'block';
      }

      /**
       * 校验并收下用户文件（尚未 OCR）。
       * @param {File} file 用户选择的文件
       * @returns {Promise<void>}
       */
      function loadFile(file) {
        setError('');
        clearResult();
        currentFile = null;
        currentSize = null;
        var name = (file && file.name ? file.name : '').toLowerCase();
        var type = (file && file.type ? file.type : '').toLowerCase();
        if (type === 'application/pdf' || /\\.pdf$/.test(name)) {
          setError(msg.errPdf);
          refreshMeta();
          return Promise.resolve();
        }
        var okType = type === 'image/jpeg' || type === 'image/jpg' || type === 'image/png' || type === 'image/webp'
          || /\\.(jpe?g|png|webp)$/.test(name);
        if (!okType) {
          setError(msg.errLoad);
          refreshMeta();
          return Promise.resolve();
        }
        if (file.size > MAX_BYTES) {
          setError(msg.errSize);
          refreshMeta();
          return Promise.resolve();
        }
        currentFile = file;
        return blobToCanvas(file).then(function () {
          refreshMeta();
        }).catch(function () {
          currentFile = null;
          currentSize = null;
          setError(msg.errLoad);
          refreshMeta();
        });
      }

      /**
       * 主转换：加载引擎并识别 currentFile。
       * @returns {Promise<void>}
       */
      function convert() {
        if (!currentFile) {
          setError(msg.empty);
          return Promise.resolve();
        }
        setError('');
        clearResult();
        setBusy(true);
        openHud();
        setStatus(msg.loading);
        var langs = selectedTessLangs();
        return yieldUi().then(function () {
          hudState.phase = 'load';
          hudState.detail = msg.hudLoadScript;
          hudState.url = currentFile.name || msg.hudLoadScript;
          paintHud();
          return blobToCanvas(currentFile);
        }).then(function (canvas) {
          refreshMeta();
          return getWorker(langs).then(function (worker) {
            hudState.phase = 'read';
            hudState.detail = msg.reading;
            hudState.pct = 38;
            paintHud();
            setStatus(msg.reading);
            return yieldUi().then(function () {
              return worker.recognize(canvas);
            });
          });
        }).then(function (out) {
          var data = out && out.data ? out.data : {};
          var text = String(data.text || '').replace(/\\s+$/g, '').replace(/^\\s+/g, '');
          if (!text) {
            setError(msg.errEmpty);
            setStatus('');
            finishHudFail(msg.errEmpty);
            return;
          }
          resultText = text;
          outputEl.value = text;
          var conf = typeof data.confidence === 'number' ? Math.round(data.confidence) : null;
          if (conf !== null) {
            confEl.textContent = msg.confTpl.replace('{n}', String(conf));
            confEl.style.display = 'block';
          }
          if (lowConfCb.checked && Array.isArray(data.words)) {
            var lows = data.words.filter(function (w) {
              return w && w.text && typeof w.confidence === 'number' && w.confidence < LOW_CONF;
            }).map(function (w) { return w.text + ' (' + Math.round(w.confidence) + '%)'; });
            if (lows.length) {
              lowWrap.textContent = msg.lowLabel + ': ' + lows.join(', ');
              lowWrap.style.display = 'block';
            }
          }
          syncOutputButtons();
          setStatus(msg.done);
          finishHudOk();
        }).catch(function (err) {
          var kind = err && err.message === 'engine' ? msg.errEngine : msg.errEngine;
          setError(kind);
          setStatus('');
          finishHudFail(msg.hudFailHint);
        }).then(function () {
          setBusy(false);
        });
      }

      /**
       * 复制识别文本。
       */
      function copyResult() {
        if (!resultText) return;
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(resultText).then(function () { setStatus(msg.copied); }).catch(function () {
            outputEl.select();
            document.execCommand('copy');
            setStatus(msg.copied);
          });
        } else {
          outputEl.select();
          document.execCommand('copy');
          setStatus(msg.copied);
        }
      }

      /**
       * 下载 .txt。
       */
      function downloadResult() {
        if (!resultText) return;
        var stem = 'ocr-text';
        if (currentFile && currentFile.name) {
          stem = currentFile.name.replace(/\\.[^.]+$/, '') || stem;
        }
        var blob = new Blob([resultText], { type: 'text/plain;charset=utf-8' });
        var a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = stem + '.txt';
        a.click();
        setTimeout(function () { URL.revokeObjectURL(a.href); }, 2000);
      }

      /**
       * 合成印刷体样例 JPEG 并走 Convert 管线（进页不自动调用）。
       * @returns {Promise<void>}
       */
      function loadSample() {
        var c = document.createElement('canvas');
        c.width = 1100;
        c.height = 360;
        var ctx = c.getContext('2d');
        if (!ctx) return Promise.resolve();
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, c.width, c.height);
        ctx.fillStyle = '#111111';
        ctx.font = 'bold 48px sans-serif';
        ctx.fillText('ONLINEFREETOOLS', 48, 90);
        ctx.font = '40px sans-serif';
        ctx.fillText('The quick brown fox', 48, 170);
        ctx.font = '40px "PingFang SC", "Microsoft YaHei", "Noto Sans SC", sans-serif';
        ctx.fillText('印刷体样例', 48, 260);
        return new Promise(function (resolve) {
          c.toBlob(function (blob) {
            if (!blob) { resolve(); return; }
            var file = new File([blob], 'sample-printed.jpg', { type: 'image/jpeg' });
            loadFile(file).then(function () { return convert(); }).then(resolve).catch(function () { resolve(); });
          }, 'image/jpeg', 0.95);
        });
      }

      /**
       * 清空文件与结果。
       */
      function clearAll() {
        currentFile = null;
        currentSize = null;
        fileInput.value = '';
        refreshMeta();
        clearResult();
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
        if (fs && fs[0]) loadFile(fs[0]);
      });
      fileInput.addEventListener('change', function () {
        if (fileInput.files && fileInput.files[0]) loadFile(fileInput.files[0]);
        fileInput.value = '';
      });

      btnConvert.addEventListener('click', function () { convert(); });
      btnCopy.addEventListener('click', copyResult);
      btnDownload.addEventListener('click', downloadResult);
      btnSample.addEventListener('click', function () { loadSample(); });
      btnClear.addEventListener('click', clearAll);

      /** 进页不自动 loadSample：WASM 首屏会打坏 LCP。函数须存在供按钮与 lint。 */
    })();
  </script>`;

	const toolMeta = getToolBySlug('convert-a-jpg-to-text-with-ocr');
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
