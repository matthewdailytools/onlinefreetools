/**
 * 本地音频做成约 30 秒 MP3 铃声（淡入淡出；点 Export MP3 才加载 lamejs）。
 * slug: make-a-30-second-mp3-ringtone
 * 规格：work-tasks/make-a-30-second-mp3-ringtone/02-tool-info.md
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
const P = 'tool_make_a_30_second_mp3_ringtone';

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
 * 渲染「做成 30 秒 MP3 铃声」工具页。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderMakeA30SecondMp3RingtonePage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/make-a-30-second-mp3-ringtone';
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
			currentSlug: 'make-a-30-second-mp3-ringtone',
			currentAnchor: '#ringtone',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	/** 30 秒窗 + 淡入淡出 + 波形预览 + 金标 HUD / Make ringtone 忙碌转圈。 */
	const extraHeadHtml = `
  <style>
    .tools-bar { gap: .5rem; }
    .rt30-times { display: flex; flex-wrap: wrap; gap: .75rem 1.25rem; }
    .rt30-times label { min-width: 10rem; }
    .rt30-chips { display: flex; flex-wrap: wrap; gap: .4rem; margin-top: .35rem; }
    .rt30-preview { border: 1px solid var(--border, #dee2e6); border-radius: 8px; overflow: hidden; background: #fff; }
    .rt30-preview-bar { display: flex; flex-wrap: wrap; align-items: center; gap: .5rem .75rem; padding: .5rem .75rem; border-bottom: 1px solid var(--border, #dee2e6); }
    .rt30-wave-wrap { position: relative; background: #0f172a; height: 96px; }
    .rt30-wave { display: block; width: 100%; height: 96px; cursor: ew-resize; touch-action: none; }
    .rt30-dim { position: absolute; top: 0; bottom: 0; background: rgba(2, 6, 23, 0.58); pointer-events: none; }
    .rt30-sel { position: absolute; top: 0; bottom: 0; background: rgba(96, 165, 250, 0.12); box-shadow: inset 0 0 0 1px rgba(191, 219, 254, 0.55); pointer-events: none; }
    .rt30-handle { position: absolute; top: 0; bottom: 0; width: 3px; margin-left: -1px; background: #e2e8f0; pointer-events: none; }
    .rt30-head { position: absolute; top: 0; bottom: 0; width: 2px; background: #fbbf24; pointer-events: none; }
    ${bcwHudCss({ hudId: 'rt30Hud', convertBtnId: 'rt30BtnMake' })}
  </style>`;

	const contentHtml = `
    <div id="ringtone" class="tool-page-heading mb-3">
      <h1 class="h4 mb-0">${escapeHtml(t(opts.lang, `${P}_title`))}</h1>
      <p class="text-muted mb-0">${escapeHtml(t(opts.lang, `${P}_desc`))}</p>
    </div>

    <label class="tool-dropzone mb-3" id="rt30Drop" for="rt30File">
      <input type="file" id="rt30File" accept="audio/wav,audio/mpeg,audio/mp4,audio/aac,audio/ogg,audio/webm,audio/flac,audio/x-wav,audio/x-m4a,.wav,.mp3,.m4a,.aac,.ogg,.oga,.webm,.flac">
      <span class="tool-dropzone-title">${escapeHtml(t(opts.lang, `${P}_choose_file`))}</span>
      <span class="tool-dropzone-hint">${escapeHtml(t(opts.lang, `${P}_drop_hint`))}</span>
      <span id="rt30FileName" class="tool-dropzone-file"></span>
    </label>

    <div id="rt30Preview" class="rt30-preview mb-3" hidden>
      <div class="rt30-preview-bar">
        <button type="button" id="rt30BtnPlay" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, `${P}_play`))}</button>
        <span id="rt30Clock" class="small text-muted"></span>
        <span class="small text-muted">${escapeHtml(t(opts.lang, `${P}_preview_hint`))}</span>
      </div>
      <div class="rt30-wave-wrap">
        <canvas id="rt30Wave" class="rt30-wave" width="600" height="96" aria-label="${escapeHtml(t(opts.lang, `${P}_preview_hint`))}"></canvas>
        <div id="rt30DimL" class="rt30-dim"></div>
        <div id="rt30DimR" class="rt30-dim"></div>
        <div id="rt30Sel" class="rt30-sel"></div>
        <div id="rt30HandleStart" class="rt30-handle"></div>
        <div id="rt30HandleEnd" class="rt30-handle"></div>
        <div id="rt30Head" class="rt30-head" hidden></div>
      </div>
    </div>

    <div class="rt30-times mb-3">
      <div>
        <label class="form-label small mb-1" for="rt30Start">${escapeHtml(t(opts.lang, `${P}_start`))}</label>
        <input type="number" id="rt30Start" class="form-control form-control-sm" value="1" min="0" step="0.01" inputmode="decimal">
      </div>
      <div>
        <label class="form-label small mb-1" for="rt30Dur">${escapeHtml(t(opts.lang, `${P}_duration`))}</label>
        <input type="number" id="rt30Dur" class="form-control form-control-sm" value="30" min="0.2" max="40" step="0.01" inputmode="decimal">
        <div class="rt30-chips" id="rt30DurChips">
          <button type="button" class="btn btn-outline-secondary btn-sm" data-sec="15">15s</button>
          <button type="button" class="btn btn-outline-secondary btn-sm" data-sec="20">20s</button>
          <button type="button" class="btn btn-outline-secondary btn-sm" data-sec="30">30s</button>
          <button type="button" class="btn btn-outline-secondary btn-sm" data-sec="40">40s</button>
        </div>
        <p class="form-text mb-0">${escapeHtml(t(opts.lang, `${P}_duration_hint`))}</p>
      </div>
      <div>
        <label class="form-label small mb-1" for="rt30FadeIn">${escapeHtml(t(opts.lang, `${P}_fade_in`))}</label>
        <input type="number" id="rt30FadeIn" class="form-control form-control-sm" value="0.5" min="0" max="8" step="0.1" inputmode="decimal">
        <div class="rt30-chips" id="rt30FadeInChips">
          <button type="button" class="btn btn-outline-secondary btn-sm" data-sec="0">0</button>
          <button type="button" class="btn btn-outline-secondary btn-sm" data-sec="0.3">0.3s</button>
          <button type="button" class="btn btn-outline-secondary btn-sm" data-sec="0.5">0.5s</button>
          <button type="button" class="btn btn-outline-secondary btn-sm" data-sec="1">1s</button>
        </div>
      </div>
      <div>
        <label class="form-label small mb-1" for="rt30FadeOut">${escapeHtml(t(opts.lang, `${P}_fade_out`))}</label>
        <input type="number" id="rt30FadeOut" class="form-control form-control-sm" value="1.5" min="0" max="8" step="0.1" inputmode="decimal">
        <div class="rt30-chips" id="rt30FadeOutChips">
          <button type="button" class="btn btn-outline-secondary btn-sm" data-sec="0">0</button>
          <button type="button" class="btn btn-outline-secondary btn-sm" data-sec="0.5">0.5s</button>
          <button type="button" class="btn btn-outline-secondary btn-sm" data-sec="1.5">1.5s</button>
          <button type="button" class="btn btn-outline-secondary btn-sm" data-sec="3">3s</button>
        </div>
        <p class="form-text mb-0">${escapeHtml(t(opts.lang, `${P}_fade_hint`))}</p>
      </div>
    </div>

    <details class="mb-2">
      <summary>${escapeHtml(t(opts.lang, `${P}_advanced`))}</summary>
      <div class="mt-2">
        <div class="form-check mb-2">
          <input class="form-check-input" type="checkbox" id="rt30Zero" checked>
          <label class="form-check-label small" for="rt30Zero">${escapeHtml(t(opts.lang, `${P}_zerocross`))}</label>
        </div>
        <p class="form-text">${escapeHtml(t(opts.lang, `${P}_zerocross_hint`))}</p>
        <label class="form-label small mb-1" for="rt30Bitrate">${escapeHtml(t(opts.lang, `${P}_bitrate`))}</label>
        <select id="rt30Bitrate" class="form-select form-select-sm" style="width:auto;max-width:12rem;">
          <option value="96">96 kbps</option>
          <option value="128" selected>128 kbps</option>
          <option value="192">192 kbps</option>
        </select>
        <p class="form-text mb-0">${escapeHtml(t(opts.lang, `${P}_bitrate_hint`))}</p>
      </div>
    </details>

    <div class="d-flex align-items-center tools-bar mb-2 flex-wrap">
      <button type="button" id="rt30BtnMake" class="btn btn-primary btn-sm">${escapeHtml(t(opts.lang, `${P}_make`))}</button>
      <button type="button" id="rt30BtnMp3" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(t(opts.lang, `${P}_export_mp3`))}</button>
      <button type="button" id="rt30BtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, `${P}_sample`))}</button>
      <button type="button" id="rt30BtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, `${P}_clear`))}</button>
    </div>

    <p id="rt30Meta" class="small text-muted mb-2" style="display:none;"></p>
    <p id="rt30Result" class="small text-success mb-2" style="display:none;"></p>
    <p id="rt30Error" class="small text-danger mb-2" style="display:none;" role="alert"></p>
    <p id="rt30Status" class="small text-muted mb-2" role="status" aria-live="polite"></p>

    <div id="rt30Hud" class="oft-pdf-work-progress bcw-hud mb-3" hidden>
      <div class="bcw-hud-top">
        <div class="bcw-hud-spin" aria-hidden="true"></div>
        <div class="bcw-hud-pct" id="rt30HudPct">0%</div>
        <div class="bcw-hud-copy">
          <div class="bcw-hud-title" id="rt30HudTitle">${escapeHtml(t(opts.lang, `${P}_hud_title`))}</div>
          <div class="bcw-hud-step" id="rt30HudStep"></div>
          <div class="bcw-hud-time" id="rt30HudTime"></div>
        </div>
      </div>
      <div class="progress" style="height: 1.35rem;">
        <div id="rt30HudBar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width: 0%"></div>
        <span class="bcw-hud-sheen" aria-hidden="true"></span>
      </div>
      <ol class="bcw-hud-steps" id="rt30HudSteps">
        <li data-step="decode">${escapeHtml(t(opts.lang, `${P}_hud_step_decode`))}</li>
        <li data-step="fade">${escapeHtml(t(opts.lang, `${P}_hud_step_fade`))}</li>
        <li data-step="encode">${escapeHtml(t(opts.lang, `${P}_hud_step_encode`))}</li>
      </ol>
      <div class="bcw-hud-url" id="rt30HudUrl"></div>
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
				label: 'Apple: Change sounds and vibrations on iPhone',
				href: 'https://support.apple.com/guide/iphone/change-the-ringtone-and-sounds-iph2153a0b7d/ios',
			},
		],
	});

	/**
	 * 客户端：解码/淡入淡出在标签页；Export MP3 才加载 /vendor/lamejs。
	 * 正则字类须写成 \\w / \\d。
	 */
	const extraBodyHtml = `
  <script>
    (function () {
      /** lamejs IIFE 同域路径（点 Export MP3 再加载）。 */
      var LAME_SRC = '/vendor/lamejs/lamejs.iife.js';
      /** 过零点搜索窗口（采样点数）。 */
      var ZERO_WIN = 512;
      /** 样例时长（秒）：略长于默认 30 秒窗，进页能跑出真实 30 秒结果。 */
      var SAMPLE_SEC = 32;
      /** 样例默认起点（秒）。 */
      var SAMPLE_START = 1;
      /** 样例 / 进页默认时长（秒）。 */
      var SAMPLE_DUR = 30;
      /** 铃声选区上限（秒）：对齐常见 iPhone 40s 帽，默认仍是 30。 */
      var MAX_RING_SEC = 40;
      /** 默认淡入（秒）。 */
      var DEFAULT_FADE_IN = 0.5;
      /** 默认淡出（秒）。 */
      var DEFAULT_FADE_OUT = 1.5;

      var drop = document.getElementById('rt30Drop');
      var fileInput = document.getElementById('rt30File');
      var fileNameEl = document.getElementById('rt30FileName');
      var startEl = document.getElementById('rt30Start');
      var durEl = document.getElementById('rt30Dur');
      var fadeInEl = document.getElementById('rt30FadeIn');
      var fadeOutEl = document.getElementById('rt30FadeOut');
      var zeroEl = document.getElementById('rt30Zero');
      var bitrateEl = document.getElementById('rt30Bitrate');
      var metaEl = document.getElementById('rt30Meta');
      var resultEl = document.getElementById('rt30Result');
      var errEl = document.getElementById('rt30Error');
      var statusEl = document.getElementById('rt30Status');
      var btnMake = document.getElementById('rt30BtnMake');
      var btnMp3 = document.getElementById('rt30BtnMp3');
      var btnSample = document.getElementById('rt30BtnSample');
      var btnClear = document.getElementById('rt30BtnClear');
      var btnPlay = document.getElementById('rt30BtnPlay');
      var previewWrap = document.getElementById('rt30Preview');
      var waveCanvas = document.getElementById('rt30Wave');
      var selEl = document.getElementById('rt30Sel');
      var dimLEl = document.getElementById('rt30DimL');
      var dimREl = document.getElementById('rt30DimR');
      var handleStartEl = document.getElementById('rt30HandleStart');
      var handleEndEl = document.getElementById('rt30HandleEnd');
      var headEl = document.getElementById('rt30Head');
      var clockEl = document.getElementById('rt30Clock');
      var busyBtns = [btnMake, btnSample, btnClear, btnPlay, startEl, durEl, fadeInEl, fadeOutEl, zeroEl, fileInput];
      var hudWrap = document.getElementById('rt30Hud');
      var hudPctEl = document.getElementById('rt30HudPct');
      var hudTitleEl = document.getElementById('rt30HudTitle');
      var hudStepEl = document.getElementById('rt30HudStep');
      var hudTimeEl = document.getElementById('rt30HudTime');
      var hudUrlEl = document.getElementById('rt30HudUrl');
      var hudBar = document.getElementById('rt30HudBar');
      var hudStepLis = document.querySelectorAll('#rt30HudSteps [data-step]');
      var hudTitleDefault = ${JSON.stringify(t(opts.lang, `${P}_hud_title`))};

      var msg = {
        empty: ${JSON.stringify(t(opts.lang, `${P}_empty`))},
        errCaps: ${JSON.stringify(t(opts.lang, `${P}_err_caps`))},
        errDecode: ${JSON.stringify(t(opts.lang, `${P}_err_decode`))},
        errEmpty: ${JSON.stringify(t(opts.lang, `${P}_err_empty`))},
        errLame: ${JSON.stringify(t(opts.lang, `${P}_err_lame`))},
        errRange: ${JSON.stringify(t(opts.lang, `${P}_err_range`))},
        errFade: ${JSON.stringify(t(opts.lang, `${P}_err_fade`))},
        errLong: ${JSON.stringify(t(opts.lang, `${P}_err_long`))},
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
        hudFade: ${JSON.stringify(t(opts.lang, `${P}_hud_fade`))},
        hudEncode: ${JSON.stringify(t(opts.lang, `${P}_hud_encode`))},
        hudWorking: ${JSON.stringify(t(opts.lang, `${P}_hud_working`))},
        play: ${JSON.stringify(t(opts.lang, `${P}_play`))},
        pause: ${JSON.stringify(t(opts.lang, `${P}_pause`))}
      };

      /** @type {AudioContext | null} 复用解码上下文。 */
      var audioCtx = null;
      /** @type {AudioBuffer | null} 解码后的整段。 */
      var sourceBuffer = null;
      /** @type {AudioBuffer | null} 淡入淡出后的铃声缓冲。 */
      var ringBuffer = null;
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
        var order = ['decode', 'fade', 'encode'];
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
       * 忙碌态：禁用输入与 Make ringtone / Sample / Clear。
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
       * 读取起点秒数。
       * @returns {number}
       */
      function readStart() {
        var n = Number(startEl && startEl.value);
        return isFinite(n) ? Math.max(0, n) : 0;
      }

      /**
       * 读取时长秒数。
       * @returns {number}
       */
      function readDur() {
        var n = Number(durEl && durEl.value);
        return isFinite(n) && n > 0 ? n : SAMPLE_DUR;
      }

      /**
       * 当前选区终点（起点 + 时长，夹在文件内）。
       * @returns {number}
       */
      function currentEnd() {
        var start = readStart();
        var end = start + readDur();
        if (sourceBuffer) end = Math.min(sourceBuffer.duration, end);
        return end;
      }

      /**
       * 用起止秒写回 Start + Duration，并夹紧到 40 秒帽与文件长度。
       * @param {number} start
       * @param {number} end
       */
      function setStartEnd(start, end) {
        var d = sourceBuffer ? sourceBuffer.duration : end;
        start = Math.max(0, start);
        end = Math.min(d, Math.max(start + 0.02, end));
        var dur = end - start;
        if (dur > MAX_RING_SEC) {
          dur = MAX_RING_SEC;
          end = start + dur;
          if (end > d) {
            end = d;
            start = Math.max(0, end - MAX_RING_SEC);
            dur = end - start;
          }
        }
        if (startEl) startEl.value = fmtSec(start);
        if (durEl) durEl.value = fmtSec(dur);
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
        clockEl.textContent = fmtSec(readStart()) + '–' + fmtSec(currentEnd()) + ' / ' + fmtSec(sourceBuffer.duration);
      }

      /**
       * 按当前 Start/Duration 画选区、外侧变暗和两端手柄。
       */
      function paintSel() {
        if (!sourceBuffer) return;
        var d = sourceBuffer.duration;
        var a = readStart();
        var b = currentEnd();
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
       * 改起点、时长或淡化后作废已做好的铃声，需再点 Make ringtone。
       */
      function onRangeEdit() {
        ringBuffer = null;
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
        if (ringBuffer) {
          src.buffer = ringBuffer;
          src.loop = true;
          src.connect(ctx.destination);
          playFromSec = 0;
          playStartCtx = ctx.currentTime;
          src.start(0);
          playingSource = src;
          if (btnPlay) btnPlay.textContent = msg.pause;
          if (headEl) headEl.hidden = false;
          function tickLoop() {
            if (!playingSource || !ringBuffer || !sourceBuffer) return;
            var t = (getCtx().currentTime - playStartCtx) % ringBuffer.duration;
            var a = readStart();
            var b = currentEnd();
            if (!isFinite(a) || !isFinite(b) || b <= a) {
              a = 0;
              b = sourceBuffer.duration;
            }
            var span = Math.max(0.02, b - a);
            var srcT = a + (t / ringBuffer.duration) * span;
            if (headEl) headEl.style.left = (srcT / sourceBuffer.duration * 100) + '%';
            if (clockEl) clockEl.textContent = fmtSec(t) + ' / ' + fmtSec(ringBuffer.duration);
            playRaf = requestAnimationFrame(tickLoop);
          }
          tickLoop();
          return;
        }
        var a = readStart();
        var b = currentEnd();
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
       * 线性淡入淡出：增益曲线，不缩短时长。
       * @param {AudioBuffer} region 选区缓冲
       * @param {number} fadeInSec 淡入秒数
       * @param {number} fadeOutSec 淡出秒数
       * @returns {AudioBuffer}
       */
      function applyFades(region, fadeInSec, fadeOutSec) {
        var rate = region.sampleRate;
        var ch = region.numberOfChannels;
        var fadeIn = Math.max(0, Math.round(fadeInSec * rate));
        var fadeOut = Math.max(0, Math.round(fadeOutSec * rate));
        if (fadeIn + fadeOut >= region.length) throw new Error('fade');
        var out = getCtx().createBuffer(ch, region.length, rate);
        var c, i, src, dst, g;
        for (c = 0; c < ch; c++) {
          src = region.getChannelData(c);
          dst = out.getChannelData(c);
          for (i = 0; i < region.length; i++) {
            g = 1;
            if (fadeIn > 0 && i < fadeIn) g *= i / fadeIn;
            if (fadeOut > 0 && i >= region.length - fadeOut) g *= (region.length - 1 - i) / fadeOut;
            dst[i] = src[i] * g;
          }
        }
        return out;
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
       * 合成 32 秒样例：前 1 秒轻、1–31 秒副歌响、末尾轻，便于听出淡入淡出。
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
          var f = t < 1 ? 220 : (t < 31 ? 273 : 196);
          var amp = t < 1 ? 0.08 : (t < 31 ? 0.28 : 0.1);
          data[i] = amp * Math.sin(2 * Math.PI * f * t);
        }
        return buf;
      }

      /**
       * 启用或禁用 Export MP3。
       * @param {boolean} on
       */
      function setExportEnabled(on) {
        if (btnMp3) btnMp3.disabled = !on;
      }

      /**
       * 执行 Make ringtone：选区切片 + 线性淡入淡出。
       * @returns {boolean}
       */
      function runMakeRingtone() {
        if (!sourceBuffer) {
          setError(msg.errEmpty);
          return false;
        }
        var startSec = readStart();
        var endSec = currentEnd();
        if (!isFinite(startSec) || !isFinite(endSec) || endSec <= startSec || startSec < 0 || endSec > sourceBuffer.duration + 0.001) {
          setError(msg.errRange);
          return false;
        }
        var dur = endSec - startSec;
        if (dur > MAX_RING_SEC + 0.001) {
          setError(msg.errLong);
          return false;
        }
        var fadeIn = Number(fadeInEl && fadeInEl.value);
        var fadeOut = Number(fadeOutEl && fadeOutEl.value);
        if (!isFinite(fadeIn) || fadeIn < 0) fadeIn = DEFAULT_FADE_IN;
        if (!isFinite(fadeOut) || fadeOut < 0) fadeOut = DEFAULT_FADE_OUT;
        if (fadeIn + fadeOut >= dur - 0.001) {
          setError(msg.errFade);
          return false;
        }
        var snap = !!(zeroEl && zeroEl.checked);
        try {
          var region = sliceBuffer(sourceBuffer, startSec, endSec, snap);
          ringBuffer = applyFades(region, fadeIn, fadeOut);
        } catch (err) {
          setError(msg.errFade);
          return false;
        }
        setExportEnabled(true);
        if (resultEl) {
          resultEl.style.display = '';
          resultEl.textContent = fillTpl(msg.resultTpl, {
            dur: fmtSec(ringBuffer.duration),
            start: fmtSec(startSec),
            end: fmtSec(endSec),
            fadeIn: fmtSec(fadeIn),
            fadeOut: fmtSec(fadeOut)
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
          ringBuffer = null;
          setExportEnabled(false);
          if (resultEl) resultEl.style.display = 'none';
          setStartEnd(0, Math.min(SAMPLE_DUR, buf.duration));
          paintMeta();
          drawWave();
        }).catch(function (err) {
          if (String(err && err.message) === 'caps') throw err;
          setError(msg.errDecode);
          throw err;
        });
      }

      /**
       * Load sample：填 32s 音、Start 1 / Duration 30、淡入 0.5 / 淡出 1.5、自动 Make ringtone。
       * @returns {Promise<void>}
       */
      function loadSample() {
        setError('');
        setBusy(true);
        /** 进页静默样例不打开 HUD，避免挡住下方介绍；用户点 Make ringtone 仍走金标卡片。 */
        return yieldUi().then(function () {
          displayName = 'sample.wav';
          if (fileNameEl) fileNameEl.textContent = displayName;
          sourceBuffer = makeSampleBuffer();
          setStartEnd(SAMPLE_START, SAMPLE_START + SAMPLE_DUR);
          if (fadeInEl) fadeInEl.value = String(DEFAULT_FADE_IN);
          if (fadeOutEl) fadeOutEl.value = String(DEFAULT_FADE_OUT);
          paintMeta();
          drawWave();
          return yieldUi();
        }).then(function () {
          if (!runMakeRingtone()) throw new Error('fade');
          hideHud();
        }).catch(function (err) {
          setError(errEl && errEl.textContent ? errEl.textContent : msg.hudFailHint);
        }).then(function () {
          setBusy(false);
        });
      }

      /**
       * 打开用户文件并解码（不自动 Make ringtone）。
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
          hudState.phase = 'fade';
          hudState.pct = 35;
          hudState.detail = msg.hudFade;
          hudState.url = displayName;
          paintHud();
          yieldUi().then(function () {
            if (!runMakeRingtone()) throw new Error('fade');
            finishHud(msg.hudNext);
          }).catch(function () {
            failHud(errEl && errEl.textContent ? errEl.textContent : msg.hudFailHint);
          }).then(function () {
            setBusy(false);
          });
        });
      }

      if (btnMp3) {
        btnMp3.addEventListener('click', function () {
          if (!ringBuffer) return;
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
            var blob = bufferToMp3(ringBuffer, kbps);
            var base = (displayName || 'clip').replace(/\\.[^.]+$/, '');
            downloadBlob(blob, base + '-ringtone.mp3');
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
          ringBuffer = null;
          displayName = '';
          if (fileInput) fileInput.value = '';
          if (fileNameEl) fileNameEl.textContent = '';
          startEl.value = String(SAMPLE_START);
          if (durEl) durEl.value = String(SAMPLE_DUR);
          if (fadeInEl) fadeInEl.value = String(DEFAULT_FADE_IN);
          if (fadeOutEl) fadeOutEl.value = String(DEFAULT_FADE_OUT);
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
      if (durEl) durEl.addEventListener('input', onRangeEdit);
      if (fadeInEl) fadeInEl.addEventListener('input', onRangeEdit);
      if (fadeOutEl) fadeOutEl.addEventListener('input', onRangeEdit);
      if (zeroEl) zeroEl.addEventListener('change', onRangeEdit);
      var durChips = document.getElementById('rt30DurChips');
      if (durChips) {
        durChips.addEventListener('click', function (e) {
          var el = e.target;
          if (el && el.nodeType === 3) el = el.parentElement;
          var btn = el && el.closest ? el.closest('[data-sec]') : null;
          if (!btn || !durEl) return;
          var sec = Number(btn.getAttribute('data-sec'));
          if (!isFinite(sec) || sec <= 0) return;
          var start = readStart();
          setStartEnd(start, start + sec);
          onRangeEdit();
        });
      }
      function bindFadeChips(id, input, fallback) {
        var wrap = document.getElementById(id);
        if (!wrap) return;
        wrap.addEventListener('click', function (e) {
          var el = e.target;
          if (el && el.nodeType === 3) el = el.parentElement;
          var btn = el && el.closest ? el.closest('[data-sec]') : null;
          if (!btn || !input) return;
          input.value = btn.getAttribute('data-sec') || fallback;
          onRangeEdit();
        });
      }
      bindFadeChips('rt30FadeInChips', fadeInEl, String(DEFAULT_FADE_IN));
      bindFadeChips('rt30FadeOutChips', fadeOutEl, String(DEFAULT_FADE_OUT));
      if (waveCanvas) {
        waveCanvas.addEventListener('pointerdown', function (e) {
          if (!sourceBuffer) return;
          e.preventDefault();
          waveCanvas.setPointerCapture(e.pointerId);
          var rect = waveCanvas.getBoundingClientRect();
          var sec = xToSec(e.clientX, rect);
          var a = readStart();
          var b = currentEnd();
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
            var endv = currentEnd();
            if (sec >= endv) sec = Math.max(0, endv - 0.01);
            setStartEnd(Math.max(0, sec), endv);
          } else if (dragMode === 'end') {
            var startv = readStart();
            if (sec <= startv) sec = startv + 0.01;
            setStartEnd(startv, Math.min(sourceBuffer.duration, sec));
          } else {
            var lo = Math.min(dragAnchor, sec);
            var hi = Math.max(dragAnchor, sec);
            if (hi - lo < 0.02) hi = lo + 0.02;
            setStartEnd(lo, Math.min(sourceBuffer.duration, hi));
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
            var a = readStart();
            var b = currentEnd();
            var nearerStart = !isFinite(a) || !isFinite(b) || Math.abs(sec - a) <= Math.abs(sec - b);
            if (nearerStart) {
              if (isFinite(b) && sec >= b) sec = Math.max(0, b - 0.01);
              setStartEnd(Math.max(0, sec), b);
            } else {
              if (isFinite(a) && sec <= a) sec = a + 0.01;
              setStartEnd(a, Math.min(sourceBuffer.duration, sec));
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
	const toolMeta = getToolBySlug('make-a-30-second-mp3-ringtone');
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
