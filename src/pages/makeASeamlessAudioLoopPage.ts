/**
 * 本地音频做成无缝循环并导出 WAV/MP3（点 Export MP3 才加载 lamejs）。
 * slug: make-a-seamless-audio-loop
 * 规格：work-tasks/make-a-seamless-audio-loop/02-tool-info.md
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
const P = 'tool_make_a_seamless_audio_loop';

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
 * 渲染「把音频做成无缝循环」工具页。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderMakeASeamlessAudioLoopPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/make-a-seamless-audio-loop';
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
			currentSlug: 'make-a-seamless-audio-loop',
			currentAnchor: '#seamless-loop',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	/** 选区 + 交叉淡化芯片 + 波形预览 + 金标 HUD / Make loop 忙碌转圈。 */
	const extraHeadHtml = `
  <style>
    .tools-bar { gap: .5rem; }
    .seam-loop-times { display: flex; flex-wrap: wrap; gap: .75rem 1.25rem; }
    .seam-loop-times label { min-width: 10rem; }
    .seam-loop-chips { display: flex; flex-wrap: wrap; gap: .4rem; margin-top: .35rem; }
    .seam-loop-preview { border: 1px solid var(--border, #dee2e6); border-radius: 8px; overflow: hidden; background: #fff; }
    .seam-loop-preview-bar { display: flex; flex-wrap: wrap; align-items: center; gap: .5rem .75rem; padding: .5rem .75rem; border-bottom: 1px solid var(--border, #dee2e6); }
    .seam-loop-wave-wrap { position: relative; background: #0f172a; height: 96px; }
    .seam-loop-wave { display: block; width: 100%; height: 96px; cursor: ew-resize; touch-action: none; }
    .seam-loop-dim { position: absolute; top: 0; bottom: 0; background: rgba(2, 6, 23, 0.58); pointer-events: none; }
    .seam-loop-sel { position: absolute; top: 0; bottom: 0; background: rgba(96, 165, 250, 0.12); box-shadow: inset 0 0 0 1px rgba(191, 219, 254, 0.55); pointer-events: none; }
    .seam-loop-handle { position: absolute; top: 0; bottom: 0; width: 3px; margin-left: -1px; background: #e2e8f0; pointer-events: none; }
    .seam-loop-head { position: absolute; top: 0; bottom: 0; width: 2px; background: #fbbf24; pointer-events: none; }
    ${bcwHudCss({ hudId: 'seamLoopHud', convertBtnId: 'seamLoopBtnMake' })}
  </style>`;

	const contentHtml = `
    <div id="seamless-loop" class="tool-page-heading mb-3">
      <h1 class="h4 mb-0">${escapeHtml(t(opts.lang, `${P}_title`))}</h1>
      <p class="text-muted mb-0">${escapeHtml(t(opts.lang, `${P}_desc`))}</p>
    </div>

    <label class="tool-dropzone mb-3" id="seamLoopDrop" for="seamLoopFile">
      <input type="file" id="seamLoopFile" accept="audio/wav,audio/mpeg,audio/mp4,audio/aac,audio/ogg,audio/webm,audio/flac,audio/x-wav,audio/x-m4a,.wav,.mp3,.m4a,.aac,.ogg,.oga,.webm,.flac">
      <span class="tool-dropzone-title">${escapeHtml(t(opts.lang, `${P}_choose_file`))}</span>
      <span class="tool-dropzone-hint">${escapeHtml(t(opts.lang, `${P}_drop_hint`))}</span>
      <span id="seamLoopFileName" class="tool-dropzone-file"></span>
    </label>

    <div id="seamLoopPreview" class="seam-loop-preview mb-3" hidden>
      <div class="seam-loop-preview-bar">
        <button type="button" id="seamLoopBtnPlay" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, `${P}_play`))}</button>
        <span id="seamLoopClock" class="small text-muted"></span>
        <span class="small text-muted">${escapeHtml(t(opts.lang, `${P}_preview_hint`))}</span>
      </div>
      <div class="seam-loop-wave-wrap">
        <canvas id="seamLoopWave" class="seam-loop-wave" width="600" height="96" aria-label="${escapeHtml(t(opts.lang, `${P}_preview_hint`))}"></canvas>
        <div id="seamLoopDimL" class="seam-loop-dim"></div>
        <div id="seamLoopDimR" class="seam-loop-dim"></div>
        <div id="seamLoopSel" class="seam-loop-sel"></div>
        <div id="seamLoopHandleStart" class="seam-loop-handle"></div>
        <div id="seamLoopHandleEnd" class="seam-loop-handle"></div>
        <div id="seamLoopHead" class="seam-loop-head" hidden></div>
      </div>
    </div>

    <div class="seam-loop-times mb-3">
      <div>
        <label class="form-label small mb-1" for="seamLoopStart">${escapeHtml(t(opts.lang, `${P}_start`))}</label>
        <input type="number" id="seamLoopStart" class="form-control form-control-sm" value="1" min="0" step="0.01" inputmode="decimal">
      </div>
      <div>
        <label class="form-label small mb-1" for="seamLoopEnd">${escapeHtml(t(opts.lang, `${P}_end`))}</label>
        <input type="number" id="seamLoopEnd" class="form-control form-control-sm" value="3" min="0" step="0.01" inputmode="decimal">
      </div>
      <div>
        <label class="form-label small mb-1" for="seamLoopXfade">${escapeHtml(t(opts.lang, `${P}_crossfade`))}</label>
        <input type="number" id="seamLoopXfade" class="form-control form-control-sm" value="50" min="0" max="2000" step="1" inputmode="numeric">
        <div class="seam-loop-chips" id="seamLoopXfadeChips">
          <button type="button" class="btn btn-outline-secondary btn-sm" data-ms="20">20 ms</button>
          <button type="button" class="btn btn-outline-secondary btn-sm" data-ms="50">50 ms</button>
          <button type="button" class="btn btn-outline-secondary btn-sm" data-ms="200">200 ms</button>
          <button type="button" class="btn btn-outline-secondary btn-sm" data-ms="500">500 ms</button>
        </div>
        <p class="form-text mb-0">${escapeHtml(t(opts.lang, `${P}_crossfade_hint`))}</p>
      </div>
    </div>

    <details class="mb-2">
      <summary>${escapeHtml(t(opts.lang, `${P}_advanced`))}</summary>
      <div class="mt-2">
        <div class="form-check mb-2">
          <input class="form-check-input" type="checkbox" id="seamLoopEqual" checked>
          <label class="form-check-label small" for="seamLoopEqual">${escapeHtml(t(opts.lang, `${P}_equal_power`))}</label>
        </div>
        <p class="form-text">${escapeHtml(t(opts.lang, `${P}_equal_power_hint`))}</p>
        <div class="form-check mb-2">
          <input class="form-check-input" type="checkbox" id="seamLoopZero" checked>
          <label class="form-check-label small" for="seamLoopZero">${escapeHtml(t(opts.lang, `${P}_zerocross`))}</label>
        </div>
        <p class="form-text">${escapeHtml(t(opts.lang, `${P}_zerocross_hint`))}</p>
        <label class="form-label small mb-1" for="seamLoopRepeats">${escapeHtml(t(opts.lang, `${P}_repeats`))}</label>
        <input type="number" id="seamLoopRepeats" class="form-control form-control-sm" value="1" min="1" max="20" step="1" inputmode="numeric" style="max-width:8rem;">
        <div class="seam-loop-chips" id="seamLoopRepeatChips">
          <button type="button" class="btn btn-outline-secondary btn-sm" data-n="1">1</button>
          <button type="button" class="btn btn-outline-secondary btn-sm" data-n="4">4</button>
          <button type="button" class="btn btn-outline-secondary btn-sm" data-n="8">8</button>
        </div>
        <p class="form-text">${escapeHtml(t(opts.lang, `${P}_repeats_hint`))}</p>
        <label class="form-label small mb-1" for="seamLoopBitrate">${escapeHtml(t(opts.lang, `${P}_bitrate`))}</label>
        <select id="seamLoopBitrate" class="form-select form-select-sm" style="width:auto;max-width:12rem;">
          <option value="96">96 kbps</option>
          <option value="128" selected>128 kbps</option>
          <option value="192">192 kbps</option>
        </select>
        <p class="form-text mb-0">${escapeHtml(t(opts.lang, `${P}_bitrate_hint`))}</p>
      </div>
    </details>

    <div class="d-flex align-items-center tools-bar mb-2 flex-wrap">
      <button type="button" id="seamLoopBtnMake" class="btn btn-primary btn-sm">${escapeHtml(t(opts.lang, `${P}_make`))}</button>
      <button type="button" id="seamLoopBtnWav" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(t(opts.lang, `${P}_export_wav`))}</button>
      <button type="button" id="seamLoopBtnMp3" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(t(opts.lang, `${P}_export_mp3`))}</button>
      <button type="button" id="seamLoopBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, `${P}_sample`))}</button>
      <button type="button" id="seamLoopBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, `${P}_clear`))}</button>
    </div>

    <p id="seamLoopMeta" class="small text-muted mb-2" style="display:none;"></p>
    <p id="seamLoopResult" class="small text-success mb-2" style="display:none;"></p>
    <p id="seamLoopError" class="small text-danger mb-2" style="display:none;" role="alert"></p>
    <p id="seamLoopStatus" class="small text-muted mb-2" role="status" aria-live="polite"></p>

    <div id="seamLoopHud" class="oft-pdf-work-progress bcw-hud mb-3" hidden>
      <div class="bcw-hud-top">
        <div class="bcw-hud-spin" aria-hidden="true"></div>
        <div class="bcw-hud-pct" id="seamLoopHudPct">0%</div>
        <div class="bcw-hud-copy">
          <div class="bcw-hud-title" id="seamLoopHudTitle">${escapeHtml(t(opts.lang, `${P}_hud_title`))}</div>
          <div class="bcw-hud-step" id="seamLoopHudStep"></div>
          <div class="bcw-hud-time" id="seamLoopHudTime"></div>
        </div>
      </div>
      <div class="progress" style="height: 1.35rem;">
        <div id="seamLoopHudBar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width: 0%"></div>
        <span class="bcw-hud-sheen" aria-hidden="true"></span>
      </div>
      <ol class="bcw-hud-steps" id="seamLoopHudSteps">
        <li data-step="decode">${escapeHtml(t(opts.lang, `${P}_hud_step_decode`))}</li>
        <li data-step="loop">${escapeHtml(t(opts.lang, `${P}_hud_step_loop`))}</li>
        <li data-step="encode">${escapeHtml(t(opts.lang, `${P}_hud_step_encode`))}</li>
      </ol>
      <div class="bcw-hud-url" id="seamLoopHudUrl"></div>
    </div>

    <p class="tool-lead mb-4">${escapeHtml(description)}</p>`;

	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: P,
		mode: 'rules',
		usecaseCount: 3,
		ruleItemCount: 5,
		howItemCount: 4,
		whyChooseItemCount: 4,
	});

	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{ label: 'MDN: AudioBuffer', href: 'https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer' },
			{
				label: 'MDN: decodeAudioData',
				href: 'https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/decodeAudioData',
			},
			{
				label: 'Wikipedia: Crossfade',
				href: 'https://en.wikipedia.org/wiki/Crossfade',
			},
		],
	});

	/**
	 * 客户端：解码/环绕交叉淡化在标签页；Export MP3 才加载 /vendor/lamejs。
	 * 正则字类须写成 \\w / \\d。
	 */
	const extraBodyHtml = `
  <script>
    (function () {
      /** lamejs IIFE 同域路径（点 Export MP3 再加载）。 */
      var LAME_SRC = '/vendor/lamejs/lamejs.iife.js';
      /** 过零点搜索窗口（采样点数）。 */
      var ZERO_WIN = 512;
      /** 样例时长（秒）。 */
      var SAMPLE_SEC = 5;
      /** 样例默认起止（秒）。 */
      var SAMPLE_START = 1;
      var SAMPLE_END = 3;
      /** 烘焙后输出时长上限（秒）。 */
      var MAX_OUT_SEC = 180;

      var drop = document.getElementById('seamLoopDrop');
      var fileInput = document.getElementById('seamLoopFile');
      var fileNameEl = document.getElementById('seamLoopFileName');
      var startEl = document.getElementById('seamLoopStart');
      var endEl = document.getElementById('seamLoopEnd');
      var xfadeEl = document.getElementById('seamLoopXfade');
      var equalEl = document.getElementById('seamLoopEqual');
      var repeatsEl = document.getElementById('seamLoopRepeats');
      var zeroEl = document.getElementById('seamLoopZero');
      var bitrateEl = document.getElementById('seamLoopBitrate');
      var metaEl = document.getElementById('seamLoopMeta');
      var resultEl = document.getElementById('seamLoopResult');
      var errEl = document.getElementById('seamLoopError');
      var statusEl = document.getElementById('seamLoopStatus');
      var btnMake = document.getElementById('seamLoopBtnMake');
      var btnWav = document.getElementById('seamLoopBtnWav');
      var btnMp3 = document.getElementById('seamLoopBtnMp3');
      var btnSample = document.getElementById('seamLoopBtnSample');
      var btnClear = document.getElementById('seamLoopBtnClear');
      var btnPlay = document.getElementById('seamLoopBtnPlay');
      var previewWrap = document.getElementById('seamLoopPreview');
      var waveCanvas = document.getElementById('seamLoopWave');
      var selEl = document.getElementById('seamLoopSel');
      var dimLEl = document.getElementById('seamLoopDimL');
      var dimREl = document.getElementById('seamLoopDimR');
      var handleStartEl = document.getElementById('seamLoopHandleStart');
      var handleEndEl = document.getElementById('seamLoopHandleEnd');
      var headEl = document.getElementById('seamLoopHead');
      var clockEl = document.getElementById('seamLoopClock');
      var busyBtns = [btnMake, btnSample, btnClear, btnPlay, startEl, endEl, xfadeEl, equalEl, repeatsEl, zeroEl, fileInput];
      var hudWrap = document.getElementById('seamLoopHud');
      var hudPctEl = document.getElementById('seamLoopHudPct');
      var hudTitleEl = document.getElementById('seamLoopHudTitle');
      var hudStepEl = document.getElementById('seamLoopHudStep');
      var hudTimeEl = document.getElementById('seamLoopHudTime');
      var hudUrlEl = document.getElementById('seamLoopHudUrl');
      var hudBar = document.getElementById('seamLoopHudBar');
      var hudStepLis = document.querySelectorAll('#seamLoopHudSteps [data-step]');
      var hudTitleDefault = ${JSON.stringify(t(opts.lang, `${P}_hud_title`))};

      var msg = {
        empty: ${JSON.stringify(t(opts.lang, `${P}_empty`))},
        errCaps: ${JSON.stringify(t(opts.lang, `${P}_err_caps`))},
        errDecode: ${JSON.stringify(t(opts.lang, `${P}_err_decode`))},
        errEmpty: ${JSON.stringify(t(opts.lang, `${P}_err_empty`))},
        errLame: ${JSON.stringify(t(opts.lang, `${P}_err_lame`))},
        errRange: ${JSON.stringify(t(opts.lang, `${P}_err_range`))},
        errFade: ${JSON.stringify(t(opts.lang, `${P}_err_fade`))},
        errBake: ${JSON.stringify(t(opts.lang, `${P}_err_bake`))},
        errVideo: ${JSON.stringify(t(opts.lang, `${P}_err_video`))},
        done: ${JSON.stringify(t(opts.lang, `${P}_status_done`))},
        metaTpl: ${JSON.stringify(t(opts.lang, `${P}_meta_tpl`))},
        resultTpl: ${JSON.stringify(t(opts.lang, `${P}_result_tpl`))},
        hudElapsed: ${JSON.stringify(t(opts.lang, `${P}_hud_elapsed_tpl`))},
        hudPct: ${JSON.stringify(t(opts.lang, `${P}_hud_pct_tpl`))},
        hudNext: ${JSON.stringify(t(opts.lang, `${P}_hud_next`))},
        hudNextMp3: ${JSON.stringify(t(opts.lang, `${P}_hud_next_mp3`))},
        hudFailTitle: ${JSON.stringify(t(opts.lang, `${P}_hud_fail_title`))},
        hudFailHint: ${JSON.stringify(t(opts.lang, `${P}_hud_fail_hint`))},
        hudDecode: ${JSON.stringify(t(opts.lang, `${P}_hud_decode`))},
        hudDecoded: ${JSON.stringify(t(opts.lang, `${P}_hud_decoded`))},
        hudLoop: ${JSON.stringify(t(opts.lang, `${P}_hud_loop`))},
        hudEncode: ${JSON.stringify(t(opts.lang, `${P}_hud_encode`))},
        hudWorking: ${JSON.stringify(t(opts.lang, `${P}_hud_working`))},
        play: ${JSON.stringify(t(opts.lang, `${P}_play`))},
        pause: ${JSON.stringify(t(opts.lang, `${P}_pause`))}
      };

      /** @type {AudioContext | null} 复用解码上下文。 */
      var audioCtx = null;
      /** @type {AudioBuffer | null} 解码后的整段。 */
      var sourceBuffer = null;
      /** @type {AudioBuffer | null} 环绕交叉淡化后的循环缓冲。 */
      var loopBuffer = null;
      /** 当前文件显示名。 */
      var displayName = '';
      /** lamejs 脚本是否已插入。 */
      var lameLoaded = false;
      /** HUD 计时器。 */
      var hudClockId = 0;
      var hudClockStart = 0;
      /** HUD 绘制状态。 */
      var hudState = { phase: 'decode', pct: 0, detail: '', url: '', done: false, fail: false };
      /** @type {AudioBufferSourceNode | null} 预览播放源。 */
      var playingSource = null;
      /** 预览播放动画帧。 */
      var playRaf = 0;
      /** 预览开始时 AudioContext.currentTime。 */
      var playStartCtx = 0;
      /** 预览起点（秒）。 */
      var playFromSec = 0;
      /** 波形拖选模式：pending / range / start / end。 */
      var dragMode = null;
      /** 拖选锚点秒数（从空白处拖出选区时用）。 */
      var dragAnchor = 0;
      /** pointerdown 时的 clientX，用来区分点击与拖动。 */
      var dragStartX = 0;

      /**
       * 替换 {name} 类占位。
       * @param {string} tpl
       * @param {Record<string, string|number>} map
       */
      function fillTpl(tpl, map) {
        return String(tpl || '').replace(/\\{(\\w+)\\}/g, function (_, k) {
          return map[k] == null ? '' : String(map[k]);
        });
      }

      /**
       * 让出一帧再短延迟，先画出 HUD。
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
       * 开始本批计时。
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
        var order = ['decode', 'loop', 'encode'];
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
      function showHud() {
        if (!hudWrap) return;
        hudWrap.hidden = false;
        hudWrap.classList.add('is-on');
        hudWrap.classList.remove('is-done', 'is-fail');
        if (hudTitleEl) hudTitleEl.textContent = hudTitleDefault;
        hudState = { phase: 'decode', pct: 4, detail: msg.hudWorking, url: displayName || '', done: false, fail: false };
        startHudClock();
        paintHud();
      }

      /**
       * HUD 成功结束。
       * @param {string} nextText
       */
      function finishHud(nextText) {
        hudState.done = true;
        hudState.fail = false;
        hudState.pct = 100;
        hudState.detail = nextText || msg.hudNext;
        stopHudClock();
        paintHud();
        if (hudWrap) hudWrap.classList.add('is-on');
      }

      /**
       * 收起进度卡片（进页自动样例结束后用，避免挡住下方介绍）。
       */
      function hideHud() {
        stopHudClock();
        if (!hudWrap) return;
        hudWrap.hidden = true;
        hudWrap.classList.remove('is-on', 'is-done', 'is-fail');
      }

      /**
       * HUD 失败卡片。
       * @param {string} errText
       */
      function failHud(errText) {
        hudState.fail = true;
        hudState.done = false;
        hudState.detail = errText || msg.hudFailHint;
        if (hudTitleEl) hudTitleEl.textContent = msg.hudFailTitle;
        stopHudClock();
        paintHud();
      }

      /**
       * 忙碌态：禁用输入与 Make loop / Sample / Clear。
       * @param {boolean} on
       */
      function setBusy(on) {
        if (on) stopPreview();
        if (btnMake) btnMake.setAttribute('aria-busy', on ? 'true' : 'false');
        busyBtns.forEach(function (el) {
          if (el) el.disabled = on;
        });
      }

      /**
       * 显示或清空错误。
       * @param {string} text
       */
      function setError(text) {
        if (!errEl) return;
        if (!text) {
          errEl.style.display = 'none';
          errEl.textContent = '';
          return;
        }
        errEl.style.display = '';
        errEl.textContent = text;
      }

      /**
       * 窄屏用更紧的文件帽。
       * @returns {boolean}
       */
      function isNarrow() {
        return window.matchMedia && window.matchMedia('(max-width: 767.98px)').matches;
      }

      /**
       * 体积与时长上限。
       * @returns {{ bytes: number, seconds: number }}
       */
      function caps() {
        if (isNarrow()) return { bytes: 20 * 1024 * 1024, seconds: 8 * 60 };
        return { bytes: 40 * 1024 * 1024, seconds: 20 * 60 };
      }

      /**
       * 取得或创建 AudioContext。
       * @returns {AudioContext}
       */
      function getCtx() {
        if (!audioCtx) {
          var AC = window.AudioContext || window.webkitAudioContext;
          audioCtx = new AC();
        }
        if (audioCtx.state === 'suspended' && audioCtx.resume) audioCtx.resume();
        return audioCtx;
      }

      /**
       * 秒数格式化为两位小数。
       * @param {number} n
       * @returns {string}
       */
      function fmtSec(n) {
        return (Math.round(n * 100) / 100).toFixed(2);
      }

      /**
       * 刷新源文件元信息行。
       */
      function paintMeta() {
        if (!metaEl || !sourceBuffer) {
          if (metaEl) metaEl.style.display = 'none';
          return;
        }
        metaEl.style.display = '';
        metaEl.textContent = fillTpl(msg.metaTpl, {
          name: displayName || 'audio',
          dur: fmtSec(sourceBuffer.duration),
          rate: String(sourceBuffer.sampleRate),
          ch: String(sourceBuffer.numberOfChannels)
        });
      }

      /**
       * 停止预览播放并复位播放头。
       */
      function stopPreview() {
        if (playingSource) {
          try { playingSource.stop(); } catch (e) {}
          playingSource = null;
        }
        if (playRaf) {
          cancelAnimationFrame(playRaf);
          playRaf = 0;
        }
        if (btnPlay) btnPlay.textContent = msg.play;
        if (headEl) headEl.hidden = true;
        paintClock();
      }

      /**
       * 把像素 X 换成时间秒。
       * @param {number} clientX
       * @param {DOMRect} rect
       * @returns {number}
       */
      function xToSec(clientX, rect) {
        var d = sourceBuffer ? sourceBuffer.duration : 0;
        if (!d || !rect.width) return 0;
        var r = (clientX - rect.left) / rect.width;
        return Math.max(0, Math.min(d, r * d));
      }

      /**
       * 刷新起止时钟文案。
       */
      function paintClock() {
        if (!clockEl) return;
        if (!sourceBuffer) {
          clockEl.textContent = '';
          return;
        }
        clockEl.textContent = fmtSec(Number(startEl.value) || 0) + '–' + fmtSec(Number(endEl.value) || 0) + ' / ' + fmtSec(sourceBuffer.duration);
      }

      /**
       * 按当前 Start/End 画选区、外侧变暗和两端手柄。
       */
      function paintSel() {
        if (!sourceBuffer) return;
        var d = sourceBuffer.duration;
        var a = Number(startEl.value);
        var b = Number(endEl.value);
        var ok = isFinite(a) && isFinite(b) && b > a && d > 0;
        var leftPct = ok ? (a / d * 100) : 0;
        var widthPct = ok ? ((b - a) / d * 100) : 0;
        var rightPct = ok ? (b / d * 100) : 100;
        if (selEl) {
          selEl.style.left = leftPct + '%';
          selEl.style.width = widthPct + '%';
        }
        if (dimLEl) {
          dimLEl.style.left = '0';
          dimLEl.style.width = leftPct + '%';
        }
        if (dimREl) {
          dimREl.style.left = rightPct + '%';
          dimREl.style.width = (100 - rightPct) + '%';
        }
        if (handleStartEl) handleStartEl.style.left = leftPct + '%';
        if (handleEndEl) handleEndEl.style.left = rightPct + '%';
        paintClock();
      }

      /**
       * 把通道 0 画成单轨峰值波形（按整段峰值拉高，安静文件也能看清）。
       */
      function drawWave() {
        if (!sourceBuffer || !waveCanvas) return;
        if (previewWrap) previewWrap.hidden = false;
        var wrap = waveCanvas.parentNode;
        var cssW = Math.max(2, (wrap && wrap.clientWidth) || waveCanvas.clientWidth || 600);
        var cssH = 96;
        var dpr = window.devicePixelRatio || 1;
        waveCanvas.width = Math.floor(cssW * dpr);
        waveCanvas.height = Math.floor(cssH * dpr);
        waveCanvas.style.width = cssW + 'px';
        waveCanvas.style.height = cssH + 'px';
        var ch = sourceBuffer.getChannelData(0);
        var cols = waveCanvas.width;
        var step = ch.length / cols;
        var peakAll = 0;
        var skip = Math.max(1, Math.floor(ch.length / 12000));
        for (var s = 0; s < ch.length; s += skip) {
          var av = Math.abs(ch[s]);
          if (av > peakAll) peakAll = av;
        }
        /** 把最高峰值拉到画布高度的约 88%，避免 0.22 振幅的样例看起来像一条线。 */
        var gain = peakAll > 0.001 ? 0.88 / peakAll : 1;
        var ctx2 = waveCanvas.getContext('2d');
        ctx2.fillStyle = '#0f172a';
        ctx2.fillRect(0, 0, waveCanvas.width, waveCanvas.height);
        ctx2.fillStyle = '#93c5fd';
        var mid = waveCanvas.height / 2;
        for (var i = 0; i < cols; i++) {
          var from = Math.floor(i * step);
          var to = Math.min(ch.length, Math.floor((i + 1) * step));
          var peak = 0;
          for (var j = from; j < to; j++) {
            var v = Math.abs(ch[j]);
            if (v > peak) peak = v;
          }
          var ph = Math.max(1, peak * gain * mid);
          ctx2.fillRect(i, mid - ph, 1, ph * 2);
        }
        paintSel();
      }

      /**
       * 改起止或交叉淡化后作废已做好的循环，需再点 Make loop。
       */
      function onRangeEdit() {
        loopBuffer = null;
        setExportEnabled(false);
        if (resultEl) resultEl.style.display = 'none';
        stopPreview();
        paintSel();
      }

      /**
       * 试听：无结果时播放选区一遍；有循环结果时 loop=true 听接缝。
       */
      function playPreview() {
        if (!sourceBuffer) return;
        if (playingSource) {
          stopPreview();
          return;
        }
        var ctx = getCtx();
        var src = ctx.createBufferSource();
        if (loopBuffer) {
          src.buffer = loopBuffer;
          src.loop = true;
          src.connect(ctx.destination);
          playFromSec = 0;
          playStartCtx = ctx.currentTime;
          src.start(0);
          playingSource = src;
          if (btnPlay) btnPlay.textContent = msg.pause;
          if (headEl) headEl.hidden = false;
          function tickLoop() {
            if (!playingSource || !loopBuffer || !sourceBuffer) return;
            var t = (getCtx().currentTime - playStartCtx) % loopBuffer.duration;
            var a = Number(startEl.value);
            var b = Number(endEl.value);
            if (!isFinite(a) || !isFinite(b) || b <= a) {
              a = 0;
              b = sourceBuffer.duration;
            }
            var span = Math.max(0.02, b - a);
            var srcT = a + (t / loopBuffer.duration) * span;
            if (headEl) headEl.style.left = (srcT / sourceBuffer.duration * 100) + '%';
            if (clockEl) clockEl.textContent = fmtSec(t) + ' / ' + fmtSec(loopBuffer.duration);
            playRaf = requestAnimationFrame(tickLoop);
          }
          tickLoop();
          return;
        }
        var a = Number(startEl.value);
        var b = Number(endEl.value);
        if (!isFinite(a) || !isFinite(b) || b <= a) {
          a = 0;
          b = sourceBuffer.duration;
        }
        a = Math.max(0, a);
        b = Math.min(sourceBuffer.duration, b);
        src.buffer = sourceBuffer;
        src.connect(ctx.destination);
        playFromSec = a;
        playStartCtx = ctx.currentTime;
        src.onended = function () { stopPreview(); };
        src.start(0, a, Math.max(0.02, b - a));
        playingSource = src;
        if (btnPlay) btnPlay.textContent = msg.pause;
        if (headEl) headEl.hidden = false;
        function tick() {
          if (!playingSource || !sourceBuffer) return;
          var t = playFromSec + (getCtx().currentTime - playStartCtx);
          if (t >= b) {
            stopPreview();
            return;
          }
          if (headEl) headEl.style.left = (t / sourceBuffer.duration * 100) + '%';
          if (clockEl) clockEl.textContent = fmtSec(t) + ' / ' + fmtSec(sourceBuffer.duration);
          playRaf = requestAnimationFrame(tick);
        }
        tick();
      }

      /**
       * 在通道 0 上找最近过零点。
       * @param {Float32Array} data
       * @param {number} index
       * @returns {number}
       */
      function nearestZero(data, index) {
        var i0 = Math.max(0, Math.min(data.length - 1, index | 0));
        var lo = Math.max(1, i0 - ZERO_WIN);
        var hi = Math.min(data.length - 1, i0 + ZERO_WIN);
        var best = i0;
        var bestDist = ZERO_WIN + 1;
        for (var i = lo; i <= hi; i++) {
          var a = data[i - 1];
          var b = data[i];
          if ((a <= 0 && b >= 0) || (a >= 0 && b <= 0)) {
            var d = Math.abs(i - i0);
            if (d < bestDist) {
              bestDist = d;
              best = i;
            }
          }
        }
        return best;
      }

      /**
       * 按起止秒切片；可选过零点吸附。
       * @param {AudioBuffer} buf
       * @param {number} startSec
       * @param {number} endSec
       * @param {boolean} snap
       * @returns {AudioBuffer}
       */
      function sliceBuffer(buf, startSec, endSec, snap) {
        var rate = buf.sampleRate;
        var ch = buf.numberOfChannels;
        var startI = Math.round(startSec * rate);
        var endI = Math.round(endSec * rate);
        startI = Math.max(0, Math.min(buf.length - 1, startI));
        endI = Math.max(startI + 1, Math.min(buf.length, endI));
        if (snap) {
          var c0 = buf.getChannelData(0);
          startI = nearestZero(c0, startI);
          endI = nearestZero(c0, endI);
          if (endI <= startI) endI = Math.min(buf.length, startI + 1);
        }
        var len = endI - startI;
        var out = getCtx().createBuffer(ch, len, rate);
        for (var c = 0; c < ch; c++) {
          out.getChannelData(c).set(buf.getChannelData(c).subarray(startI, endI));
        }
        return out;
      }

      /**
       * 等功率（或线性）环绕交叉淡化：把选区尾叠到头，输出缩短 fade 个采样。
       * @param {AudioBuffer} region 选区缓冲
       * @param {number} fadeSamples 交叉淡化采样数
       * @param {boolean} equalPower 为真用 sin/cos 等功率，否则线性
       * @returns {AudioBuffer}
       */
      function wrapCrossfade(region, fadeSamples, equalPower) {
        var rate = region.sampleRate;
        var ch = region.numberOfChannels;
        var fade = Math.max(0, Math.min(fadeSamples | 0, region.length - 2));
        var outLen = region.length - fade;
        if (outLen < 2) throw new Error('fade');
        var out = getCtx().createBuffer(ch, outLen, rate);
        var c, i, src, dst, g, fadeIn, fadeOut;
        for (c = 0; c < ch; c++) {
          src = region.getChannelData(c);
          dst = out.getChannelData(c);
          for (i = 0; i < outLen; i++) {
            if (fade > 0 && i < fade) {
              g = i / fade;
              fadeIn = equalPower ? Math.sin(g * Math.PI / 2) : g;
              fadeOut = equalPower ? Math.cos(g * Math.PI / 2) : (1 - g);
              dst[i] = src[i] * fadeIn + src[region.length - fade + i] * fadeOut;
            } else {
              dst[i] = src[i];
            }
          }
        }
        return out;
      }

      /**
       * 把一圈首尾相接烘焙 n 次（圈间不再二次淡化）。
       * @param {AudioBuffer} cycle 已经做好接缝的一圈
       * @param {number} n 圈数
       * @returns {AudioBuffer}
       */
      function tileBuffer(cycle, n) {
        var reps = Math.max(1, n | 0);
        if (reps === 1) return cycle;
        var out = getCtx().createBuffer(cycle.numberOfChannels, cycle.length * reps, cycle.sampleRate);
        var c, r;
        for (c = 0; c < cycle.numberOfChannels; c++) {
          var src = cycle.getChannelData(c);
          var dst = out.getChannelData(c);
          for (r = 0; r < reps; r++) dst.set(src, r * cycle.length);
        }
        return out;
      }

      /**
       * AudioBuffer → 16-bit PCM WAV Blob。
       * @param {AudioBuffer} buf
       * @returns {Blob}
       */
      function bufferToWav(buf) {
        var ch = buf.numberOfChannels;
        var rate = buf.sampleRate;
        var len = buf.length;
        var dataSize = len * ch * 2;
        var ab = new ArrayBuffer(44 + dataSize);
        var view = new DataView(ab);
        function wstr(off, s) {
          for (var i = 0; i < s.length; i++) view.setUint8(off + i, s.charCodeAt(i));
        }
        wstr(0, 'RIFF');
        view.setUint32(4, 36 + dataSize, true);
        wstr(8, 'WAVE');
        wstr(12, 'fmt ');
        view.setUint32(16, 16, true);
        view.setUint16(20, 1, true);
        view.setUint16(22, ch, true);
        view.setUint32(24, rate, true);
        view.setUint32(28, rate * ch * 2, true);
        view.setUint16(32, ch * 2, true);
        view.setUint16(34, 16, true);
        wstr(36, 'data');
        view.setUint32(40, dataSize, true);
        var offset = 44;
        for (var i = 0; i < len; i++) {
          for (var c = 0; c < ch; c++) {
            var s = buf.getChannelData(c)[i];
            s = Math.max(-1, Math.min(1, s));
            view.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7fff, true);
            offset += 2;
          }
        }
        return new Blob([ab], { type: 'audio/wav' });
      }

      /**
       * 通道数据转 Int16。
       * @param {Float32Array} f32
       * @returns {Int16Array}
       */
      function toInt16(f32) {
        var out = new Int16Array(f32.length);
        for (var i = 0; i < f32.length; i++) {
          var s = Math.max(-1, Math.min(1, f32[i]));
          out[i] = s < 0 ? s * 0x8000 : s * 0x7fff;
        }
        return out;
      }

      /**
       * 懒加载 lamejs IIFE。
       * @returns {Promise<any>}
       */
      function loadLame() {
        if (window.lamejs && window.lamejs.Mp3Encoder) return Promise.resolve(window.lamejs);
        if (lameLoaded && window.lamejs) return Promise.resolve(window.lamejs);
        return new Promise(function (resolve, reject) {
          var s = document.createElement('script');
          s.src = LAME_SRC;
          s.async = true;
          s.onload = function () {
            lameLoaded = true;
            if (window.lamejs && window.lamejs.Mp3Encoder) resolve(window.lamejs);
            else reject(new Error('lamejs'));
          };
          s.onerror = function () { reject(new Error('lamejs')); };
          document.head.appendChild(s);
        });
      }

      /**
       * AudioBuffer → MP3 Blob（CBR）。
       * @param {AudioBuffer} buf
       * @param {number} kbps
       * @returns {Blob}
       */
      function bufferToMp3(buf, kbps) {
        var lame = window.lamejs;
        var ch = buf.numberOfChannels >= 2 ? 2 : 1;
        var enc = new lame.Mp3Encoder(ch, buf.sampleRate, kbps);
        var left = toInt16(buf.getChannelData(0));
        var right = ch === 2 ? toInt16(buf.getChannelData(1)) : null;
        var block = 1152;
        var parts = [];
        for (var i = 0; i < left.length; i += block) {
          var l = left.subarray(i, i + block);
          var chunk = ch === 2 ? enc.encodeBuffer(l, right.subarray(i, i + block)) : enc.encodeBuffer(l);
          if (chunk && chunk.length) parts.push(chunk);
        }
        var end = enc.flush();
        if (end && end.length) parts.push(end);
        return new Blob(parts, { type: 'audio/mpeg' });
      }

      /**
       * 触发本地下载。
       * @param {Blob} blob
       * @param {string} filename
       */
      function downloadBlob(blob, filename) {
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.click();
        setTimeout(function () { URL.revokeObjectURL(url); }, 2000);
      }

      /**
       * 合成 5 秒样例：1–3 秒头尾电平不同、频率不落整数周，无淡化时接缝可闻。
       * @returns {AudioBuffer}
       */
      function makeSampleBuffer() {
        var ctx = getCtx();
        var rate = 44100;
        var len = rate * SAMPLE_SEC;
        var buf = ctx.createBuffer(1, len, rate);
        var data = buf.getChannelData(0);
        for (var i = 0; i < len; i++) {
          var t = i / rate;
          var f;
          var amp;
          if (t < 1) {
            f = 220;
            amp = 0.08;
          } else if (t < 3) {
            f = 273;
            amp = 0.32 - 0.22 * ((t - 1) / 2);
          } else {
            f = 330;
            amp = 0.1;
          }
          data[i] = amp * Math.sin(2 * Math.PI * f * t);
        }
        return buf;
      }

      /**
       * 启用或禁用导出按钮。
       * @param {boolean} on
       */
      function setExportEnabled(on) {
        if (btnWav) btnWav.disabled = !on;
        if (btnMp3) btnMp3.disabled = !on;
      }

      /**
       * 执行 Make loop：选区切片 + 环绕交叉淡化 + 可选烘焙圈数。
       * @returns {boolean}
       */
      function runMakeLoop() {
        if (!sourceBuffer) {
          setError(msg.errEmpty);
          return false;
        }
        var startSec = Number(startEl.value);
        var endSec = Number(endEl.value);
        if (!isFinite(startSec) || !isFinite(endSec) || endSec <= startSec || startSec < 0 || endSec > sourceBuffer.duration + 0.001) {
          setError(msg.errRange);
          return false;
        }
        var fadeMs = Number(xfadeEl && xfadeEl.value);
        if (!isFinite(fadeMs) || fadeMs < 0) fadeMs = 50;
        var fadeSec = fadeMs / 1000;
        if (fadeSec >= (endSec - startSec) - 0.001) {
          setError(msg.errFade);
          return false;
        }
        var snap = !!(zeroEl && zeroEl.checked);
        var equal = !(equalEl) || !!equalEl.checked;
        var region;
        var cycle;
        var reps;
        try {
          region = sliceBuffer(sourceBuffer, startSec, endSec, snap);
          var fadeSamples = Math.round(fadeSec * region.sampleRate);
          cycle = wrapCrossfade(region, fadeSamples, equal);
          reps = Number(repeatsEl && repeatsEl.value);
          if (!isFinite(reps) || reps < 1) reps = 1;
          reps = Math.min(20, Math.max(1, Math.round(reps)));
          if (cycle.duration * reps > MAX_OUT_SEC + 0.01) {
            setError(msg.errBake);
            return false;
          }
          loopBuffer = tileBuffer(cycle, reps);
        } catch (err) {
          setError(msg.errFade);
          return false;
        }
        setExportEnabled(true);
        if (resultEl) {
          resultEl.style.display = '';
          resultEl.textContent = fillTpl(msg.resultTpl, {
            dur: fmtSec(loopBuffer.duration),
            start: fmtSec(startSec),
            end: fmtSec(endSec),
            fade: String(Math.round(fadeMs)),
            n: String(reps)
          });
        }
        if (statusEl) statusEl.textContent = msg.done;
        setError('');
        return true;
      }

      /**
       * 解码用户文件。
       * @param {File} file
       * @returns {Promise<void>}
       */
      function ingestFile(file) {
        displayName = file.name || 'audio';
        if (fileNameEl) fileNameEl.textContent = displayName;
        var mime = String(file.type || '').toLowerCase();
        if (mime.indexOf('video/') === 0) {
          setError(msg.errVideo);
          failHud(msg.errVideo);
          return Promise.reject(new Error('video'));
        }
        var lim = caps();
        if (file.size > lim.bytes) {
          setError(msg.errCaps);
          failHud(msg.errCaps);
          return Promise.reject(new Error('caps'));
        }
        hudState.phase = 'decode';
        hudState.pct = 12;
        hudState.detail = msg.hudDecode;
        hudState.url = displayName;
        paintHud();
        return file.arrayBuffer().then(function (ab) {
          return getCtx().decodeAudioData(ab.slice(0));
        }).then(function (buf) {
          if (buf.duration > lim.seconds) {
            setError(msg.errCaps);
            throw new Error('caps');
          }
          sourceBuffer = buf;
          loopBuffer = null;
          setExportEnabled(false);
          if (resultEl) resultEl.style.display = 'none';
          startEl.value = '0';
          endEl.value = fmtSec(buf.duration);
          paintMeta();
          drawWave();
        }).catch(function (err) {
          if (String(err && err.message) === 'caps') throw err;
          setError(msg.errDecode);
          throw err;
        });
      }

      /**
       * Load sample：填 5s 音、1–3s、50 ms、自动 Make loop。
       * @returns {Promise<void>}
       */
      function loadSample() {
        setError('');
        setBusy(true);
        /** 进页静默样例不打开 HUD，避免挡住下方介绍；用户点 Make loop 仍走金标卡片。 */
        return yieldUi().then(function () {
          displayName = 'sample.wav';
          if (fileNameEl) fileNameEl.textContent = displayName;
          sourceBuffer = makeSampleBuffer();
          startEl.value = String(SAMPLE_START);
          endEl.value = String(SAMPLE_END);
          if (xfadeEl) xfadeEl.value = '50';
          if (repeatsEl) repeatsEl.value = '1';
          if (equalEl) equalEl.checked = true;
          paintMeta();
          drawWave();
          return yieldUi();
        }).then(function () {
          if (!runMakeLoop()) throw new Error('loop');
          hideHud();
        }).catch(function (err) {
          setError(errEl && errEl.textContent ? errEl.textContent : msg.hudFailHint);
        }).then(function () {
          setBusy(false);
        });
      }

      /**
       * 打开用户文件并解码（不自动 Make loop）。
       * @param {File} file
       */
      function onPickFile(file) {
        if (!file) return;
        setError('');
        setBusy(true);
        showHud();
        yieldUi().then(function () {
          return ingestFile(file);
        }).then(function () {
          finishHud(msg.hudDecoded);
          if (hudTitleEl) hudTitleEl.textContent = hudTitleDefault;
          if (statusEl) statusEl.textContent = '';
        }).catch(function () {
          failHud(errEl && errEl.textContent ? errEl.textContent : msg.hudFailHint);
        }).then(function () {
          setBusy(false);
        });
      }

      if (btnMake) {
        btnMake.addEventListener('click', function () {
          setError('');
          if (!sourceBuffer) {
            setError(msg.empty);
            return;
          }
          setBusy(true);
          showHud();
          hudState.phase = 'loop';
          hudState.pct = 35;
          hudState.detail = msg.hudLoop;
          hudState.url = displayName;
          paintHud();
          yieldUi().then(function () {
            if (!runMakeLoop()) throw new Error('loop');
            finishHud(msg.hudNext);
          }).catch(function () {
            failHud(errEl && errEl.textContent ? errEl.textContent : msg.hudFailHint);
          }).then(function () {
            setBusy(false);
          });
        });
      }

      if (btnWav) {
        btnWav.addEventListener('click', function () {
          if (!loopBuffer) return;
          var blob = bufferToWav(loopBuffer);
          var base = (displayName || 'clip').replace(/\\.[^.]+$/, '');
          downloadBlob(blob, base + '-loop.wav');
        });
      }

      if (btnMp3) {
        btnMp3.addEventListener('click', function () {
          if (!loopBuffer) return;
          setError('');
          setBusy(true);
          if (btnMp3) btnMp3.setAttribute('aria-busy', 'true');
          showHud();
          hudState.phase = 'encode';
          hudState.pct = 30;
          hudState.detail = msg.hudEncode;
          hudState.url = displayName;
          paintHud();
          yieldUi().then(function () {
            return loadLame();
          }).then(function () {
            hudState.pct = 70;
            paintHud();
            var kbps = Number(bitrateEl && bitrateEl.value) || 128;
            var blob = bufferToMp3(loopBuffer, kbps);
            var base = (displayName || 'clip').replace(/\\.[^.]+$/, '');
            downloadBlob(blob, base + '-loop.mp3');
            finishHud(msg.hudNextMp3);
          }).catch(function () {
            setError(msg.errLame);
            failHud(msg.errLame);
          }).then(function () {
            setBusy(false);
            if (btnMp3) btnMp3.setAttribute('aria-busy', 'false');
          });
        });
      }

      if (btnSample) btnSample.addEventListener('click', function () { loadSample(); });

      if (btnClear) {
        btnClear.addEventListener('click', function () {
          sourceBuffer = null;
          loopBuffer = null;
          displayName = '';
          if (fileInput) fileInput.value = '';
          if (fileNameEl) fileNameEl.textContent = '';
          startEl.value = String(SAMPLE_START);
          endEl.value = String(SAMPLE_END);
          if (xfadeEl) xfadeEl.value = '50';
          if (repeatsEl) repeatsEl.value = '1';
          if (equalEl) equalEl.checked = true;
          setExportEnabled(false);
          if (metaEl) metaEl.style.display = 'none';
          if (resultEl) resultEl.style.display = 'none';
          if (statusEl) statusEl.textContent = '';
          setError('');
          if (hudWrap) hudWrap.hidden = true;
          if (previewWrap) previewWrap.hidden = true;
          stopPreview();
        });
      }

      if (fileInput) {
        fileInput.addEventListener('change', function () {
          var f = fileInput.files && fileInput.files[0];
          if (f) onPickFile(f);
        });
      }
      if (drop) {
        drop.addEventListener('dragover', function (e) {
          e.preventDefault();
          drop.classList.add('dragover');
        });
        drop.addEventListener('dragleave', function () { drop.classList.remove('dragover'); });
        drop.addEventListener('drop', function (e) {
          e.preventDefault();
          drop.classList.remove('dragover');
          var f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
          if (f) onPickFile(f);
        });
      }

      if (btnPlay) btnPlay.addEventListener('click', function () { playPreview(); });
      if (startEl) startEl.addEventListener('input', onRangeEdit);
      if (endEl) endEl.addEventListener('input', onRangeEdit);
      if (xfadeEl) xfadeEl.addEventListener('input', onRangeEdit);
      if (repeatsEl) repeatsEl.addEventListener('input', onRangeEdit);
      if (equalEl) equalEl.addEventListener('change', onRangeEdit);
      if (zeroEl) zeroEl.addEventListener('change', onRangeEdit);
      var xfadeChips = document.getElementById('seamLoopXfadeChips');
      if (xfadeChips) {
        xfadeChips.addEventListener('click', function (e) {
          var el = e.target;
          if (el && el.nodeType === 3) el = el.parentElement;
          var btn = el && el.closest ? el.closest('[data-ms]') : null;
          if (!btn || !xfadeEl) return;
          xfadeEl.value = btn.getAttribute('data-ms') || '50';
          onRangeEdit();
        });
      }
      var repeatChips = document.getElementById('seamLoopRepeatChips');
      if (repeatChips) {
        repeatChips.addEventListener('click', function (e) {
          var el = e.target;
          if (el && el.nodeType === 3) el = el.parentElement;
          var btn = el && el.closest ? el.closest('[data-n]') : null;
          if (!btn || !repeatsEl) return;
          repeatsEl.value = btn.getAttribute('data-n') || '1';
          onRangeEdit();
        });
      }
      if (waveCanvas) {
        waveCanvas.addEventListener('pointerdown', function (e) {
          if (!sourceBuffer) return;
          e.preventDefault();
          waveCanvas.setPointerCapture(e.pointerId);
          var rect = waveCanvas.getBoundingClientRect();
          var sec = xToSec(e.clientX, rect);
          var a = Number(startEl.value);
          var b = Number(endEl.value);
          var d = sourceBuffer.duration;
          var startX = rect.left + (a / d) * rect.width;
          var endX = rect.left + (b / d) * rect.width;
          dragStartX = e.clientX;
          dragAnchor = sec;
          if (isFinite(a) && Math.abs(e.clientX - startX) <= 10) dragMode = 'start';
          else if (isFinite(b) && Math.abs(e.clientX - endX) <= 10) dragMode = 'end';
          else dragMode = 'pending';
        });
        waveCanvas.addEventListener('pointermove', function (e) {
          if (!dragMode || !sourceBuffer) return;
          var rect = waveCanvas.getBoundingClientRect();
          var sec = xToSec(e.clientX, rect);
          if (dragMode === 'pending') {
            if (Math.abs(e.clientX - dragStartX) < 6) return;
            dragMode = 'range';
          }
          if (dragMode === 'start') {
            var endv = Number(endEl.value);
            if (sec >= endv) sec = Math.max(0, endv - 0.01);
            startEl.value = fmtSec(Math.max(0, sec));
          } else if (dragMode === 'end') {
            var startv = Number(startEl.value);
            if (sec <= startv) sec = startv + 0.01;
            endEl.value = fmtSec(Math.min(sourceBuffer.duration, sec));
          } else {
            var lo = Math.min(dragAnchor, sec);
            var hi = Math.max(dragAnchor, sec);
            if (hi - lo < 0.02) hi = lo + 0.02;
            startEl.value = fmtSec(lo);
            endEl.value = fmtSec(Math.min(sourceBuffer.duration, hi));
          }
          paintSel();
        });
        /**
         * 松开：单击把更近的一端吸到点击处；拖过则已在 move 里写成选区。
         * @param {PointerEvent} e
         */
        function endWaveDrag(e) {
          if (!dragMode || !sourceBuffer) {
            dragMode = null;
            return;
          }
          var rect = waveCanvas.getBoundingClientRect();
          var sec = xToSec(e.clientX, rect);
          if (dragMode === 'pending') {
            var a = Number(startEl.value);
            var b = Number(endEl.value);
            var nearerStart = !isFinite(a) || !isFinite(b) || Math.abs(sec - a) <= Math.abs(sec - b);
            if (nearerStart) {
              if (isFinite(b) && sec >= b) sec = Math.max(0, b - 0.01);
              startEl.value = fmtSec(Math.max(0, sec));
            } else {
              if (isFinite(a) && sec <= a) sec = a + 0.01;
              endEl.value = fmtSec(Math.min(sourceBuffer.duration, sec));
            }
          }
          dragMode = null;
          onRangeEdit();
        }
        waveCanvas.addEventListener('pointerup', endWaveDrag);
        waveCanvas.addEventListener('pointercancel', function () { dragMode = null; });
      }
      window.addEventListener('resize', function () {
        if (sourceBuffer) drawWave();
      });

      loadSample();
    })();
  </script>`;

	/** Catalog 元数据：相关工具、JSON-LD、主题面包屑。 */
	const toolMeta = getToolBySlug('make-a-seamless-audio-loop');
	const extraSectionsHtml = toolMeta
		? renderToolExtraSections({
				lang: opts.lang,
				defaultLang: opts.defaultLang,
				tool: toolMeta,
			})
		: '';
	const toolJsonLd = toolMeta
		? buildToolJsonLd({
				lang: opts.lang,
				defaultLang: opts.defaultLang,
				tool: toolMeta,
				name: t(opts.lang, `${P}_title`),
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
		contentHtml: `${contentHtml}${igHtml}${extraSectionsHtml}${referencesHtml}`,
		footerHtml,
		extraHeadHtml: `${extraHeadHtml}${toolJsonLd}`,
		extraBodyHtml,
		mainClass: 'container py-4 tool-page',
		includeSidebarToggleScript: true,
		sidebarAutoCloseSelector: '#toolNav a',
	});
};
