/**
 * 本地录音按静音中点切成多段并打包 ZIP（点 Download ZIP 才加载 JSZip / lamejs）。
 * slug: split-a-recording-on-silence
 * 规格：work-tasks/split-a-recording-on-silence/02-tool-info.md
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
const P = 'tool_split_a_recording_on_silence';

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
 * 渲染「按静音把一段录音切成多段」工具页。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderSplitARecordingOnSilencePage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/split-a-recording-on-silence';
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
			currentSlug: 'split-a-recording-on-silence',
			currentAnchor: '#split-on-silence',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	/** 波形预览 + 金标 HUD / Split on silence 忙碌转圈。 */
	const extraHeadHtml = `
  <style>
    .tools-bar { gap: .5rem; }
    .split-sil-preview { border: 1px solid var(--border, #dee2e6); border-radius: 8px; overflow: hidden; background: #fff; }
    .split-sil-preview-bar { display: flex; flex-wrap: wrap; align-items: center; gap: .5rem .75rem; padding: .5rem .75rem; border-bottom: 1px solid var(--border, #dee2e6); }
    .split-sil-wave-wrap { position: relative; background: #0f172a; height: 96px; }
    .split-sil-wave { display: block; width: 100%; height: 96px; }
    .split-sil-gap { position: absolute; top: 0; bottom: 0; background: rgba(248, 113, 113, 0.28); pointer-events: none; }
    .split-sil-cut { position: absolute; top: 0; bottom: 0; width: 2px; background: #f8fafc; pointer-events: none; }
    .split-sil-head { position: absolute; top: 0; bottom: 0; width: 2px; background: #fbbf24; pointer-events: none; }
    .split-sil-adv-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr)); gap: .75rem 1rem; }
    .split-sil-presets { display: flex; flex-wrap: wrap; gap: .4rem; }
    .split-sil-clip-row { display: flex; flex-wrap: wrap; align-items: center; gap: .5rem; }
    ${bcwHudCss({ hudId: 'splitSilHud', convertBtnId: 'splitSilBtnSplit' })}
  </style>`;

	const contentHtml = `
    <div id="split-on-silence" class="tool-page-heading mb-3">
      <h1 class="h4 mb-0">${escapeHtml(t(opts.lang, `${P}_title`))}</h1>
      <p class="text-muted mb-0">${escapeHtml(t(opts.lang, `${P}_desc`))}</p>
    </div>

    <label class="tool-dropzone mb-3" id="splitSilDrop" for="splitSilFile">
      <input type="file" id="splitSilFile" accept="audio/wav,audio/mpeg,audio/mp4,audio/aac,audio/ogg,audio/webm,audio/flac,audio/x-wav,audio/x-m4a,.wav,.mp3,.m4a,.aac,.ogg,.oga,.webm,.flac">
      <span class="tool-dropzone-title">${escapeHtml(t(opts.lang, `${P}_choose_file`))}</span>
      <span class="tool-dropzone-hint">${escapeHtml(t(opts.lang, `${P}_drop_hint`))}</span>
      <span id="splitSilFileName" class="tool-dropzone-file"></span>
    </label>

    <div id="splitSilPreview" class="split-sil-preview mb-3" hidden>
      <div class="split-sil-preview-bar">
        <button type="button" id="splitSilBtnPlay" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, `${P}_play`))}</button>
        <span id="splitSilClock" class="small text-muted"></span>
        <span class="small text-muted">${escapeHtml(t(opts.lang, `${P}_preview_hint`))}</span>
      </div>
      <div class="split-sil-wave-wrap">
        <canvas id="splitSilWave" class="split-sil-wave" width="600" height="96" aria-label="${escapeHtml(t(opts.lang, `${P}_preview_hint`))}"></canvas>
        <div id="splitSilGaps"></div>
        <div id="splitSilHead" class="split-sil-head" hidden></div>
      </div>
    </div>

    <details class="mb-2">
      <summary>${escapeHtml(t(opts.lang, `${P}_advanced`))}</summary>
      <div class="mt-2">
        <p class="small text-muted mb-2">${escapeHtml(t(opts.lang, `${P}_preset_hint`))}</p>
        <div class="split-sil-presets mb-3">
          <button type="button" class="btn btn-outline-secondary btn-sm" data-preset="speech">${escapeHtml(t(opts.lang, `${P}_preset_speech`))}</button>
          <button type="button" class="btn btn-outline-secondary btn-sm" data-preset="lecture">${escapeHtml(t(opts.lang, `${P}_preset_lecture`))}</button>
          <button type="button" class="btn btn-outline-secondary btn-sm" data-preset="album">${escapeHtml(t(opts.lang, `${P}_preset_album`))}</button>
        </div>
        <div class="split-sil-adv-grid mb-2">
          <div>
            <label class="form-label small mb-1" for="splitSilThr">${escapeHtml(t(opts.lang, `${P}_threshold`))}</label>
            <input type="number" id="splitSilThr" class="form-control form-control-sm" value="-40" min="-60" max="-20" step="1" inputmode="decimal">
            <p class="form-text mb-0">${escapeHtml(t(opts.lang, `${P}_threshold_hint`))}</p>
          </div>
          <div>
            <label class="form-label small mb-1" for="splitSilMin">${escapeHtml(t(opts.lang, `${P}_min_silence`))}</label>
            <input type="number" id="splitSilMin" class="form-control form-control-sm" value="1" min="0.1" max="8" step="0.05" inputmode="decimal">
            <p class="form-text mb-0">${escapeHtml(t(opts.lang, `${P}_min_silence_hint`))}</p>
          </div>
          <div>
            <label class="form-label small mb-1" for="splitSilMinClip">${escapeHtml(t(opts.lang, `${P}_min_clip`))}</label>
            <input type="number" id="splitSilMinClip" class="form-control form-control-sm" value="0.3" min="0.05" max="5" step="0.05" inputmode="decimal">
            <p class="form-text mb-0">${escapeHtml(t(opts.lang, `${P}_min_clip_hint`))}</p>
          </div>
        </div>
        <div class="split-sil-adv-grid mb-2">
          <div>
            <label class="form-label small mb-1" for="splitSilFormat">${escapeHtml(t(opts.lang, `${P}_format`))}</label>
            <select id="splitSilFormat" class="form-select form-select-sm" style="width:auto;max-width:12rem;">
              <option value="wav" selected>${escapeHtml(t(opts.lang, `${P}_format_wav`))}</option>
              <option value="mp3">${escapeHtml(t(opts.lang, `${P}_format_mp3`))}</option>
            </select>
            <p class="form-text mb-0">${escapeHtml(t(opts.lang, `${P}_format_hint`))}</p>
          </div>
          <div>
            <label class="form-label small mb-1" for="splitSilBitrate">${escapeHtml(t(opts.lang, `${P}_bitrate`))}</label>
            <select id="splitSilBitrate" class="form-select form-select-sm" style="width:auto;max-width:12rem;">
              <option value="96">96 kbps</option>
              <option value="128" selected>128 kbps</option>
              <option value="192">192 kbps</option>
            </select>
            <p class="form-text mb-0">${escapeHtml(t(opts.lang, `${P}_bitrate_hint`))}</p>
          </div>
        </div>
      </div>
    </details>

    <div class="d-flex align-items-center tools-bar mb-2 flex-wrap">
      <button type="button" id="splitSilBtnSplit" class="btn btn-primary btn-sm">${escapeHtml(t(opts.lang, `${P}_split`))}</button>
      <button type="button" id="splitSilBtnZip" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(t(opts.lang, `${P}_download_zip`))}</button>
      <button type="button" id="splitSilBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, `${P}_sample`))}</button>
      <button type="button" id="splitSilBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, `${P}_clear`))}</button>
    </div>

    <div id="splitSilClips" class="mb-3" hidden>
      <p class="small mb-2">${escapeHtml(t(opts.lang, `${P}_clips_title`))}</p>
      <ol id="splitSilClipList" class="list-group list-group-flush border rounded"></ol>
    </div>

    <p id="splitSilMeta" class="small text-muted mb-2" style="display:none;"></p>
    <p id="splitSilResult" class="small text-success mb-2" style="display:none;"></p>
    <p id="splitSilError" class="small text-danger mb-2" style="display:none;" role="alert"></p>
    <p id="splitSilStatus" class="small text-muted mb-2" role="status" aria-live="polite"></p>

    <div id="splitSilHud" class="oft-pdf-work-progress bcw-hud mb-3" hidden>
      <div class="bcw-hud-top">
        <div class="bcw-hud-spin" aria-hidden="true"></div>
        <div class="bcw-hud-pct" id="splitSilHudPct">0%</div>
        <div class="bcw-hud-copy">
          <div class="bcw-hud-title" id="splitSilHudTitle">${escapeHtml(t(opts.lang, `${P}_hud_title`))}</div>
          <div class="bcw-hud-step" id="splitSilHudStep"></div>
          <div class="bcw-hud-time" id="splitSilHudTime"></div>
        </div>
      </div>
      <div class="progress" style="height: 1.35rem;">
        <div id="splitSilHudBar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width: 0%"></div>
        <span class="bcw-hud-sheen" aria-hidden="true"></span>
      </div>
      <ol class="bcw-hud-steps" id="splitSilHudSteps">
        <li data-step="decode">${escapeHtml(t(opts.lang, `${P}_hud_step_decode`))}</li>
        <li data-step="detect">${escapeHtml(t(opts.lang, `${P}_hud_step_detect`))}</li>
        <li data-step="split">${escapeHtml(t(opts.lang, `${P}_hud_step_split`))}</li>
        <li data-step="pack">${escapeHtml(t(opts.lang, `${P}_hud_step_pack`))}</li>
      </ol>
      <div class="bcw-hud-url" id="splitSilHudUrl"></div>
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
			{
				label: 'Audacity: Silence Finder and Sound Finder',
				href: 'https://manual.audacityteam.org/man/silence_finder_and_sound_finder.html',
			},
			{ label: 'MDN: AudioBuffer', href: 'https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer' },
			{
				label: 'FFmpeg: silencedetect',
				href: 'https://ffmpeg.org/ffmpeg-filters.html#silencedetect',
			},
		],
	});

	/**
	 * 客户端：分窗 RMS 检测 + 静音中点切开；Download ZIP 才加载 JSZip / lamejs。
	 * 正则字类须写成 \\w / \\d。
	 */
	const extraBodyHtml = `
  <script>
    (function () {
      /** lamejs IIFE 同域路径（ZIP 内要 MP3 再加载）。 */
      var LAME_SRC = '/vendor/lamejs/lamejs.iife.js';
      /** JSZip 同域路径（点 Download ZIP 再加载）。 */
      var JSZIP_SRC = '/vendor/jszip/jszip.min.js';
      /** RMS 窗长（秒）。 */
      var WIN_SEC = 0.05;
      /** 样例总时长（秒）：0.80 + 1.20 + 0.80 + 1.20 + 1.00。 */
      var SAMPLE_SEC = 5;
      /** 样例两段静音各长（秒）。 */
      var SAMPLE_GAP = 1.2;
      /** 样例音块时长（秒）。 */
      var SAMPLE_A = 0.8;
      var SAMPLE_B = 0.8;
      var SAMPLE_C = 1.0;
      /** 最多切段数；超出拒绝而非截断。 */
      var MAX_CLIPS = 50;
      /** Speech / Lecture / Album 预设：阈值 dB、最短静音、最短片段。 */
      var PRESETS = {
        speech: { thr: -40, min: 1.0, minClip: 0.3 },
        lecture: { thr: -40, min: 2.0, minClip: 0.5 },
        album: { thr: -45, min: 1.5, minClip: 1.0 }
      };

      var drop = document.getElementById('splitSilDrop');
      var fileInput = document.getElementById('splitSilFile');
      var fileNameEl = document.getElementById('splitSilFileName');
      var thrEl = document.getElementById('splitSilThr');
      var minEl = document.getElementById('splitSilMin');
      var minClipEl = document.getElementById('splitSilMinClip');
      var formatEl = document.getElementById('splitSilFormat');
      var bitrateEl = document.getElementById('splitSilBitrate');
      var metaEl = document.getElementById('splitSilMeta');
      var resultEl = document.getElementById('splitSilResult');
      var errEl = document.getElementById('splitSilError');
      var statusEl = document.getElementById('splitSilStatus');
      var btnSplit = document.getElementById('splitSilBtnSplit');
      var btnZip = document.getElementById('splitSilBtnZip');
      var btnSample = document.getElementById('splitSilBtnSample');
      var btnClear = document.getElementById('splitSilBtnClear');
      var btnPlay = document.getElementById('splitSilBtnPlay');
      var previewWrap = document.getElementById('splitSilPreview');
      var waveCanvas = document.getElementById('splitSilWave');
      var gapsEl = document.getElementById('splitSilGaps');
      var headEl = document.getElementById('splitSilHead');
      var clockEl = document.getElementById('splitSilClock');
      var clipsWrap = document.getElementById('splitSilClips');
      var clipListEl = document.getElementById('splitSilClipList');
      var busyBtns = [btnSplit, btnSample, btnClear, btnPlay, thrEl, minEl, minClipEl, formatEl, fileInput];
      var hudWrap = document.getElementById('splitSilHud');
      var hudPctEl = document.getElementById('splitSilHudPct');
      var hudTitleEl = document.getElementById('splitSilHudTitle');
      var hudStepEl = document.getElementById('splitSilHudStep');
      var hudTimeEl = document.getElementById('splitSilHudTime');
      var hudUrlEl = document.getElementById('splitSilHudUrl');
      var hudBar = document.getElementById('splitSilHudBar');
      var hudStepLis = document.querySelectorAll('#splitSilHudSteps [data-step]');
      var hudTitleDefault = ${JSON.stringify(t(opts.lang, `${P}_hud_title`))};

      var msg = {
        empty: ${JSON.stringify(t(opts.lang, `${P}_empty`))},
        errCaps: ${JSON.stringify(t(opts.lang, `${P}_err_caps`))},
        errDecode: ${JSON.stringify(t(opts.lang, `${P}_err_decode`))},
        errEmpty: ${JSON.stringify(t(opts.lang, `${P}_err_empty`))},
        errNoClips: ${JSON.stringify(t(opts.lang, `${P}_err_no_clips`))},
        errTooMany: ${JSON.stringify(t(opts.lang, `${P}_err_too_many`))},
        errLame: ${JSON.stringify(t(opts.lang, `${P}_err_lame`))},
        errZip: ${JSON.stringify(t(opts.lang, `${P}_err_zip`))},
        errVideo: ${JSON.stringify(t(opts.lang, `${P}_err_video`))},
        done: ${JSON.stringify(t(opts.lang, `${P}_status_done`))},
        metaTpl: ${JSON.stringify(t(opts.lang, `${P}_meta_tpl`))},
        resultTpl: ${JSON.stringify(t(opts.lang, `${P}_result_tpl`))},
        resultOne: ${JSON.stringify(t(opts.lang, `${P}_result_one`))},
        clipRow: ${JSON.stringify(t(opts.lang, `${P}_clip_row_tpl`))},
        clipDownload: ${JSON.stringify(t(opts.lang, `${P}_clip_download`))},
        clipPlay: ${JSON.stringify(t(opts.lang, `${P}_clip_play`))},
        hudElapsed: ${JSON.stringify(t(opts.lang, `${P}_hud_elapsed_tpl`))},
        hudPct: ${JSON.stringify(t(opts.lang, `${P}_hud_pct_tpl`))},
        hudNext: ${JSON.stringify(t(opts.lang, `${P}_hud_next`))},
        hudNextZip: ${JSON.stringify(t(opts.lang, `${P}_hud_next_zip`))},
        hudFailTitle: ${JSON.stringify(t(opts.lang, `${P}_hud_fail_title`))},
        hudFailHint: ${JSON.stringify(t(opts.lang, `${P}_hud_fail_hint`))},
        hudDecode: ${JSON.stringify(t(opts.lang, `${P}_hud_decode`))},
        hudDetect: ${JSON.stringify(t(opts.lang, `${P}_hud_detect`))},
        hudSplit: ${JSON.stringify(t(opts.lang, `${P}_hud_split`))},
        hudPack: ${JSON.stringify(t(opts.lang, `${P}_hud_pack`))},
        hudEncode: ${JSON.stringify(t(opts.lang, `${P}_hud_encode`))},
        hudWorking: ${JSON.stringify(t(opts.lang, `${P}_hud_working`))},
        play: ${JSON.stringify(t(opts.lang, `${P}_play`))},
        pause: ${JSON.stringify(t(opts.lang, `${P}_pause`))}
      };

      /** @type {AudioContext | null} 复用解码上下文。 */
      var audioCtx = null;
      /** @type {AudioBuffer | null} 解码后的整段。 */
      var sourceBuffer = null;
      /**
       * 切开后的片段。
       * @type {{ buf: AudioBuffer, start: number, end: number }[]}
       */
      var clipParts = [];
      /** 当前文件显示名。 */
      var displayName = '';
      /** lamejs 脚本是否已插入。 */
      var lameLoaded = false;
      /** JSZip 脚本是否已插入。 */
      var zipLoaded = false;
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
      /**
       * 检出的静音区间（秒）。
       * @type {{ start: number, end: number }[]}
       */
      var silentRanges = [];
      /** 设置改动后延迟重跑 Detect。 */
      var detectTimer = 0;

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

      /** 刷新 HUD 已用时。 */
      function tickHudClock() {
        if (!hudTimeEl) return;
        var s = Math.max(0, Math.floor((Date.now() - hudClockStart) / 1000));
        hudTimeEl.textContent = fillTpl(msg.hudElapsed, { s: s });
      }

      /** 开始本批计时。 */
      function startHudClock() {
        hudClockStart = Date.now();
        if (hudClockId) clearInterval(hudClockId);
        tickHudClock();
        hudClockId = setInterval(tickHudClock, 200);
      }

      /** 停止本批计时。 */
      function stopHudClock() {
        if (hudClockId) {
          clearInterval(hudClockId);
          hudClockId = 0;
        }
      }

      /** 把 hudState 画到百分比、步骤胶囊、当前说明。 */
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
        var order = ['decode', 'detect', 'split', 'pack'];
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

      /** 显示进度面板并开始计时。 */
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

      /** 收起进度卡片（进页自动样例结束后用）。 */
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
       * 忙碌态：禁用输入与主按钮。
       * @param {boolean} on
       */
      function setBusy(on) {
        if (on) stopPreview();
        if (btnSplit) btnSplit.setAttribute('aria-busy', on ? 'true' : 'false');
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
        if (audioCtx.state === 'suspended') audioCtx.resume();
        return audioCtx;
      }

      /**
       * 秒数显示两位小数。
       * @param {number} n
       * @returns {string}
       */
      function fmtSec(n) {
        if (!isFinite(n)) return '0.00';
        return (Math.round(n * 100) / 100).toFixed(2);
      }

      /**
       * 读取阈值 / 最短静音 / 最短片段。
       * @returns {{ thr: number, min: number, minClip: number, format: string, kbps: number }}
       */
      function readSettings() {
        var thr = Number(thrEl && thrEl.value);
        var min = Number(minEl && minEl.value);
        var minClip = Number(minClipEl && minClipEl.value);
        var format = String((formatEl && formatEl.value) || 'wav').toLowerCase();
        var kbps = Number(bitrateEl && bitrateEl.value) || 128;
        if (!isFinite(thr)) thr = -40;
        if (!isFinite(min) || min < 0.05) min = 1;
        if (!isFinite(minClip) || minClip < 0.05) minClip = 0.3;
        thr = Math.max(-60, Math.min(-20, thr));
        if (format !== 'mp3') format = 'wav';
        return { thr: thr, min: min, minClip: minClip, format: format, kbps: kbps };
      }

      /** 写出解码后元数据。 */
      function paintMeta() {
        if (!metaEl || !sourceBuffer) {
          if (metaEl) metaEl.style.display = 'none';
          return;
        }
        metaEl.style.display = '';
        metaEl.textContent = fillTpl(msg.metaTpl, {
          name: displayName || 'audio',
          dur: fmtSec(sourceBuffer.duration),
          rate: Math.round(sourceBuffer.sampleRate),
          ch: sourceBuffer.numberOfChannels
        });
      }

      /** 停预览播放。 */
      function stopPreview() {
        if (playRaf) {
          cancelAnimationFrame(playRaf);
          playRaf = 0;
        }
        if (playingSource) {
          try { playingSource.stop(); } catch (e) {}
          playingSource = null;
        }
        if (headEl) headEl.hidden = true;
        if (btnPlay) btnPlay.textContent = msg.play;
      }

      /**
       * 一窗 RMS → dBFS（满刻度 1.0）。
       * @param {AudioBuffer} buf
       * @param {number} startSample
       * @param {number} win
       * @returns {number}
       */
      function windowDb(buf, startSample, win) {
        var ch = buf.numberOfChannels;
        var acc = 0;
        var n = 0;
        for (var c = 0; c < ch; c++) {
          var data = buf.getChannelData(c);
          for (var i = 0; i < win; i++) {
            var idx = startSample + i;
            var v = idx < data.length ? data[idx] : 0;
            acc += v * v;
            n++;
          }
        }
        var rms = Math.sqrt(acc / Math.max(1, n));
        if (rms < 1e-12) return -120;
        return 20 * Math.log(rms) / Math.LN10;
      }

      /**
       * 找出够长的静音段（秒）。
       * @param {AudioBuffer} buf
       * @param {number} thrDb
       * @param {number} minSec
       * @returns {{ start: number, end: number }[]}
       */
      function detectSilence(buf, thrDb, minSec) {
        var rate = buf.sampleRate;
        var win = Math.max(1, Math.round(WIN_SEC * rate));
        var minSamp = Math.max(1, Math.round(minSec * rate));
        var ranges = [];
        var runStart = -1;
        var i = 0;
        while (i < buf.length) {
          var w = Math.min(win, buf.length - i);
          var db = windowDb(buf, i, w);
          var silent = db < thrDb;
          if (silent && runStart < 0) runStart = i;
          if ((!silent || i + w >= buf.length) && runStart >= 0) {
            var runEnd = silent && i + w >= buf.length ? buf.length : i;
            if (runEnd - runStart >= minSamp) {
              ranges.push({ start: runStart / rate, end: runEnd / rate });
            }
            runStart = -1;
          }
          i += win;
        }
        return ranges;
      }

      /**
       * 从整段切出 [startSec, endSec) 的独立缓冲。
       * @param {AudioBuffer} buf
       * @param {number} startSec
       * @param {number} endSec
       * @returns {AudioBuffer | null}
       */
      function sliceBuffer(buf, startSec, endSec) {
        var rate = buf.sampleRate;
        var a = Math.max(0, Math.round(startSec * rate));
        var b = Math.min(buf.length, Math.round(endSec * rate));
        var len = b - a;
        if (len < 8) return null;
        var out = getCtx().createBuffer(buf.numberOfChannels, len, rate);
        for (var c = 0; c < buf.numberOfChannels; c++) {
          out.getChannelData(c).set(buf.getChannelData(c).subarray(a, b));
        }
        return out;
      }

      /**
       * 在每段合格静音的中点切开，丢弃短于 minClipSec 的片段。
       * @param {AudioBuffer} buf
       * @param {{ start: number, end: number }[]} ranges
       * @param {number} minClipSec
       * @returns {{ buf: AudioBuffer, start: number, end: number }[] | string} 片段数组，或 'too-many' / 'empty'
       */
      function splitClips(buf, ranges, minClipSec) {
        var cuts = [];
        for (var r = 0; r < ranges.length; r++) {
          cuts.push((ranges[r].start + ranges[r].end) / 2);
        }
        cuts.sort(function (a, b) { return a - b; });
        var points = [0].concat(cuts);
        points.push(buf.duration);
        var clips = [];
        for (var i = 0; i < points.length - 1; i++) {
          var start = points[i];
          var end = points[i + 1];
          if (end - start < minClipSec) continue;
          var piece = sliceBuffer(buf, start, end);
          if (piece) clips.push({ buf: piece, start: start, end: end });
        }
        if (!clips.length) return 'empty';
        if (clips.length > MAX_CLIPS) return 'too-many';
        return clips;
      }

      /** 画波形与将被挖掉的红区。 */
      function drawWave() {
        if (!waveCanvas || !sourceBuffer) return;
        if (previewWrap) previewWrap.hidden = false;
        var wrap = waveCanvas.parentElement;
        var w = Math.max(320, Math.floor((wrap && wrap.clientWidth) || 600));
        var h = 96;
        if (waveCanvas.width !== w) waveCanvas.width = w;
        var ctx = waveCanvas.getContext('2d');
        if (!ctx) return;
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(0, 0, w, h);
        var data = sourceBuffer.getChannelData(0);
        var step = Math.max(1, Math.floor(data.length / w));
        ctx.strokeStyle = '#5eead4';
        ctx.beginPath();
        for (var x = 0; x < w; x++) {
          var min = 1;
          var max = -1;
          var i0 = x * step;
          for (var i = 0; i < step && i0 + i < data.length; i++) {
            var v = data[i0 + i];
            if (v < min) min = v;
            if (v > max) max = v;
          }
          var y1 = (1 - (max + 1) / 2) * h;
          var y2 = (1 - (min + 1) / 2) * h;
          ctx.moveTo(x + 0.5, y1);
          ctx.lineTo(x + 0.5, y2);
        }
        ctx.stroke();
        if (!gapsEl) return;
        gapsEl.innerHTML = '';
        var dur = sourceBuffer.duration || 1;
        for (var g = 0; g < silentRanges.length; g++) {
          var left = (silentRanges[g].start / dur) * 100;
          var width = ((silentRanges[g].end - silentRanges[g].start) / dur) * 100;
          var div = document.createElement('div');
          div.className = 'split-sil-gap';
          div.style.left = left + '%';
          div.style.width = Math.max(0.2, width) + '%';
          gapsEl.appendChild(div);
          var cut = document.createElement('div');
          cut.className = 'split-sil-cut';
          cut.style.left = (((silentRanges[g].start + silentRanges[g].end) / 2) / dur) * 100 + '%';
          gapsEl.appendChild(cut);
        }
      }

      /** 按当前设置重跑 Detect 并刷新红区。 */
      function runDetect() {
        if (!sourceBuffer) {
          silentRanges = [];
          return;
        }
        var s = readSettings();
        silentRanges = detectSilence(sourceBuffer, s.thr, s.min);
        drawWave();
      }

      /**
       * 执行 Split on silence（与按钮同一管线）。
       * @returns {boolean}
       */
      function runSplit() {
        if (!sourceBuffer) {
          setError(msg.errEmpty);
          return false;
        }
        var s = readSettings();
        silentRanges = detectSilence(sourceBuffer, s.thr, s.min);
        drawWave();
        var out = splitClips(sourceBuffer, silentRanges, s.minClip);
        if (out === 'too-many') {
          setError(msg.errTooMany);
          clipParts = [];
          setZipEnabled(false);
          paintClips();
          return false;
        }
        if (out === 'empty') {
          setError(msg.errNoClips);
          clipParts = [];
          setZipEnabled(false);
          paintClips();
          return false;
        }
        clipParts = out;
        setZipEnabled(true);
        paintClips();
        var list = clipParts.map(function (p) { return fmtSec(p.buf.duration); }).join(' / ');
        if (resultEl) {
          resultEl.style.display = '';
          resultEl.textContent = silentRanges.length
            ? fillTpl(msg.resultTpl, {
                orig: fmtSec(sourceBuffer.duration),
                gaps: silentRanges.length,
                count: clipParts.length,
                list: list
              })
            : fillTpl(msg.resultOne, { orig: fmtSec(sourceBuffer.duration) });
        }
        if (statusEl) statusEl.textContent = msg.done;
        setError('');
        return true;
      }

      /**
       * 画出切段列表（可单段下载 / 播放）。
       */
      function paintClips() {
        if (!clipsWrap || !clipListEl) return;
        clipListEl.innerHTML = '';
        if (!clipParts.length) {
          clipsWrap.hidden = true;
          return;
        }
        clipsWrap.hidden = false;
        clipParts.forEach(function (part, idx) {
          var li = document.createElement('li');
          li.className = 'list-group-item split-sil-clip-row';
          var label = document.createElement('span');
          label.className = 'small';
          label.textContent = fillTpl(msg.clipRow, {
            n: pad2(idx + 1),
            dur: fmtSec(part.buf.duration),
            start: fmtSec(part.start),
            end: fmtSec(part.end)
          });
          var playBtn = document.createElement('button');
          playBtn.type = 'button';
          playBtn.className = 'btn btn-outline-secondary btn-sm';
          playBtn.textContent = msg.clipPlay;
          playBtn.addEventListener('click', function () { playBuffer(part.buf); });
          var dlBtn = document.createElement('button');
          dlBtn.type = 'button';
          dlBtn.className = 'btn btn-outline-secondary btn-sm';
          dlBtn.textContent = msg.clipDownload;
          dlBtn.addEventListener('click', function () { downloadOneClip(idx); });
          li.appendChild(label);
          li.appendChild(playBtn);
          li.appendChild(dlBtn);
          clipListEl.appendChild(li);
        });
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
       * 懒加载 JSZip。
       * @returns {Promise<any>}
       */
      function loadJsZip() {
        if (typeof JSZip !== 'undefined') return Promise.resolve(JSZip);
        if (zipLoaded && typeof JSZip !== 'undefined') return Promise.resolve(JSZip);
        return new Promise(function (resolve, reject) {
          var s = document.createElement('script');
          s.src = JSZIP_SRC;
          s.async = true;
          s.onload = function () {
            zipLoaded = true;
            if (typeof JSZip !== 'undefined') resolve(JSZip);
            else reject(new Error('jszip'));
          };
          s.onerror = function () { reject(new Error('jszip')); };
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
       * 合成 5 秒样例：两段 1.20 s 数字零夹在短音之间。
       * @returns {AudioBuffer}
       */
      function makeSampleBuffer() {
        var ctx = getCtx();
        var rate = 44100;
        var len = Math.round(rate * SAMPLE_SEC);
        var buf = ctx.createBuffer(1, len, rate);
        var data = buf.getChannelData(0);
        var aEnd = Math.round(rate * SAMPLE_A);
        var g1End = aEnd + Math.round(rate * SAMPLE_GAP);
        var bEnd = g1End + Math.round(rate * SAMPLE_B);
        var g2End = bEnd + Math.round(rate * SAMPLE_GAP);
        for (var i = 0; i < len; i++) {
          var inTone = i < aEnd || (i >= g1End && i < bEnd) || i >= g2End;
          if (!inTone) {
            data[i] = 0;
            continue;
          }
          var t = i / rate;
          data[i] = 0.28 * Math.sin(2 * Math.PI * 440 * t);
        }
        return buf;
      }

      /**
       * 两位序号（01, 02…）。
       * @param {number} n
       * @returns {string}
       */
      function pad2(n) {
        var s = String(n);
        return s.length >= 2 ? s : '0' + s;
      }

      /**
       * 启用或禁用 ZIP 下载。
       * @param {boolean} on
       */
      function setZipEnabled(on) {
        if (btnZip) btnZip.disabled = !on;
      }

      /**
       * 把一段编码为当前 ZIP 格式。
       * @param {AudioBuffer} buf
       * @returns {Promise<Blob>}
       */
      function encodeClip(buf) {
        var s = readSettings();
        if (s.format === 'mp3') {
          return loadLame().then(function () {
            return bufferToMp3(buf, s.kbps);
          });
        }
        return Promise.resolve(bufferToWav(buf));
      }

      /**
       * 单段下载（跟 ZIP 同一格式）。
       * @param {number} idx
       */
      function downloadOneClip(idx) {
        var part = clipParts[idx];
        if (!part) return;
        var ext = readSettings().format === 'mp3' ? 'mp3' : 'wav';
        encodeClip(part.buf).then(function (blob) {
          downloadBlob(blob, stemName() + '-' + pad2(idx + 1) + '.' + ext);
        }).catch(function () {
          setError(readSettings().format === 'mp3' ? msg.errLame : msg.errZip);
        });
      }

      /**
       * 打包全部切段为 ZIP 并下载。
       * @returns {Promise<void>}
       */
      function packZip() {
        if (!clipParts.length) return Promise.reject(new Error('empty'));
        var s = readSettings();
        var ext = s.format === 'mp3' ? 'mp3' : 'wav';
        hudState.phase = 'pack';
        hudState.pct = s.format === 'mp3' ? 45 : 70;
        hudState.detail = s.format === 'mp3' ? msg.hudEncode : msg.hudPack;
        paintHud();
        var ready = s.format === 'mp3' ? loadLame() : Promise.resolve();
        return ready.then(function () {
          return loadJsZip();
        }).then(function () {
          hudState.detail = msg.hudPack;
          hudState.pct = 80;
          paintHud();
          var zip = new JSZip();
          var stem = stemName();
          clipParts.forEach(function (part, idx) {
            var blob = s.format === 'mp3' ? bufferToMp3(part.buf, s.kbps) : bufferToWav(part.buf);
            zip.file(stem + '-' + pad2(idx + 1) + '.' + ext, blob);
          });
          return zip.generateAsync({ type: 'blob' });
        }).then(function (blob) {
          downloadBlob(blob, stemName() + '-on-silence.zip');
        });
      }

      /**
       * 下载文件名主干。
       * @returns {string}
       */
      function stemName() {
        var n = String(displayName || 'recording').replace(/\\.[^.]+$/, '');
        n = n.replace(/[^\\w\\-]+/g, '-').replace(/^-+|-+$/g, '');
        return n || 'recording';
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
          clipParts = [];
          setZipEnabled(false);
          paintClips();
          if (resultEl) resultEl.style.display = 'none';
          paintMeta();
          hudState.phase = 'detect';
          hudState.pct = 55;
          hudState.detail = msg.hudDetect;
          paintHud();
          runDetect();
        }).catch(function (err) {
          if (String(err && err.message) === 'caps') throw err;
          setError(msg.errDecode);
          throw err;
        });
      }

      /**
       * Load sample：填 5s 音、自动 Split on silence。
       * @returns {Promise<void>}
       */
      function loadSample() {
        setError('');
        setBusy(true);
        return yieldUi().then(function () {
          displayName = 'sample.wav';
          if (fileNameEl) fileNameEl.textContent = displayName;
          if (thrEl) thrEl.value = String(PRESETS.speech.thr);
          if (minEl) minEl.value = String(PRESETS.speech.min);
          if (minClipEl) minClipEl.value = String(PRESETS.speech.minClip);
          sourceBuffer = makeSampleBuffer();
          clipParts = [];
          paintMeta();
          runDetect();
          return yieldUi();
        }).then(function () {
          if (!runSplit()) throw new Error('split');
          hideHud();
        }).catch(function () {
          setError(errEl && errEl.textContent ? errEl.textContent : msg.hudFailHint);
        }).then(function () {
          setBusy(false);
        });
      }

      /**
       * 打开用户文件并解码（不自动 Split）。
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
          finishHud(${JSON.stringify(t(opts.lang, `${P}_hud_decoded`))});
        }).catch(function () {
          failHud(errEl && errEl.textContent ? errEl.textContent : msg.hudFailHint);
        }).then(function () {
          setBusy(false);
        });
      }

      /**
       * 播放指定缓冲（默认整段源）。
       * @param {AudioBuffer | null} [target]
       */
      function playBuffer(target) {
        if (playingSource) {
          stopPreview();
          if (!target) return;
        }
        var buf = target || sourceBuffer;
        if (!buf) return;
        var ctx = getCtx();
        var src = ctx.createBufferSource();
        src.buffer = buf;
        src.connect(ctx.destination);
        playingSource = src;
        playStartCtx = ctx.currentTime;
        if (btnPlay) btnPlay.textContent = msg.pause;
        if (headEl) headEl.hidden = false;
        src.onended = function () { stopPreview(); };
        src.start();
        function tick() {
          if (!playingSource) return;
          var t = ctx.currentTime - playStartCtx;
          if (clockEl) clockEl.textContent = fmtSec(t) + ' / ' + fmtSec(buf.duration);
          if (headEl && previewWrap) {
            var pct = Math.max(0, Math.min(1, t / buf.duration));
            headEl.style.left = (pct * 100) + '%';
          }
          playRaf = requestAnimationFrame(tick);
        }
        tick();
      }

      /**
       * 播放当前整段（波形预览按钮）。
       */
      function playPreview() {
        playBuffer(sourceBuffer);
      }

      if (btnSplit) {
        btnSplit.addEventListener('click', function () {
          if (!sourceBuffer) {
            setError(msg.errEmpty);
            return;
          }
          setError('');
          setBusy(true);
          showHud();
          hudState.phase = 'detect';
          hudState.pct = 30;
          hudState.detail = msg.hudDetect;
          paintHud();
          yieldUi().then(function () {
            hudState.phase = 'split';
            hudState.pct = 70;
            hudState.detail = msg.hudSplit;
            paintHud();
            return yieldUi();
          }).then(function () {
            if (!runSplit()) throw new Error('split');
            finishHud(msg.hudNext);
          }).catch(function () {
            failHud(errEl && errEl.textContent ? errEl.textContent : msg.hudFailHint);
          }).then(function () {
            setBusy(false);
          });
        });
      }
      if (btnZip) {
        btnZip.addEventListener('click', function () {
          if (!clipParts.length) return;
          setBusy(true);
          showHud();
          yieldUi().then(function () {
            return packZip();
          }).then(function () {
            finishHud(msg.hudNextZip);
          }).catch(function (err) {
            var lameFail = String(err && err.message) === 'lamejs';
            setError(lameFail ? msg.errLame : msg.errZip);
            failHud(lameFail ? msg.errLame : msg.errZip);
          }).then(function () {
            setBusy(false);
          });
        });
      }

      if (btnSample) btnSample.addEventListener('click', function () { loadSample(); });
      if (btnClear) {
        btnClear.addEventListener('click', function () {
          stopPreview();
          sourceBuffer = null;
          clipParts = [];
          silentRanges = [];
          displayName = '';
          if (fileInput) fileInput.value = '';
          if (fileNameEl) fileNameEl.textContent = '';
          if (previewWrap) previewWrap.hidden = true;
          if (resultEl) resultEl.style.display = 'none';
          if (metaEl) metaEl.style.display = 'none';
          if (statusEl) statusEl.textContent = '';
          if (clockEl) clockEl.textContent = '';
          setZipEnabled(false);
          paintClips();
          setError('');
          hideHud();
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
      document.querySelectorAll('[data-preset]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var key = btn.getAttribute('data-preset');
          var p = PRESETS[key];
          if (!p) return;
          if (thrEl) thrEl.value = String(p.thr);
          if (minEl) minEl.value = String(p.min);
          if (minClipEl) minClipEl.value = String(p.minClip);
          clipParts = [];
          setZipEnabled(false);
          paintClips();
          if (resultEl) resultEl.style.display = 'none';
          runDetect();
        });
      });
      function scheduleDetect() {
        if (detectTimer) clearTimeout(detectTimer);
        detectTimer = setTimeout(function () {
          clipParts = [];
          setZipEnabled(false);
          paintClips();
          if (resultEl) resultEl.style.display = 'none';
          runDetect();
        }, 120);
      }
      [thrEl, minEl, minClipEl].forEach(function (el) {
        if (el) el.addEventListener('input', scheduleDetect);
      });
      window.addEventListener('resize', function () {
        if (sourceBuffer) drawWave();
      });

      loadSample();
    })();
  </script>`;

	/** Catalog 元数据：相关工具、JSON-LD、主题面包屑。 */
	const toolMeta = getToolBySlug('split-a-recording-on-silence');
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
