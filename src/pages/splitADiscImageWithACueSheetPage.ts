/**
 * 本地按 cue sheet（INDEX 01）把整轨镜像切成多轨并打包 ZIP（点 Download ZIP 才加载 JSZip / lamejs）。
 * slug: split-a-disc-image-with-a-cue-sheet
 * 规格：work-tasks/split-a-disc-image-with-a-cue-sheet/02-tool-info.md
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
const P = 'tool_split_a_disc_image_with_a_cue_sheet';

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
 * 渲染「用 cue 表把整轨镜像分轨」工具页。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderSplitADiscImageWithACueSheetPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/split-a-disc-image-with-a-cue-sheet';
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
			currentSlug: 'split-a-disc-image-with-a-cue-sheet',
			currentAnchor: '#split-cue',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	/** 波形预览 + 金标 HUD / Split tracks 忙碌转圈。 */
	const extraHeadHtml = `
  <style>
    .tools-bar { gap: .5rem; }
    .split-cue-preview { border: 1px solid var(--border, #dee2e6); border-radius: 8px; overflow: hidden; background: #fff; }
    .split-cue-preview-bar { display: flex; flex-wrap: wrap; align-items: center; gap: .5rem .75rem; padding: .5rem .75rem; border-bottom: 1px solid var(--border, #dee2e6); }
    .split-cue-wave-wrap { position: relative; background: #0f172a; height: 96px; }
    .split-cue-wave { display: block; width: 100%; height: 96px; }
    .split-cue-cut { position: absolute; top: 0; bottom: 0; width: 2px; background: #f8fafc; pointer-events: none; }
    .split-cue-head { position: absolute; top: 0; bottom: 0; width: 2px; background: #fbbf24; pointer-events: none; }
    .split-cue-adv-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr)); gap: .75rem 1rem; }
    .split-cue-clip-row { display: flex; flex-wrap: wrap; align-items: center; gap: .5rem; }
    .split-cue-files { font-size: .85rem; }
    ${bcwHudCss({ hudId: 'splitCueHud', convertBtnId: 'splitCueBtnSplit' })}
  </style>`;

	const contentHtml = `
    <div id="split-cue" class="tool-page-heading mb-3">
      <h1 class="h4 mb-0">${escapeHtml(t(opts.lang, `${P}_title`))}</h1>
      <p class="text-muted mb-0">${escapeHtml(t(opts.lang, `${P}_desc`))}</p>
    </div>

    <label class="tool-dropzone mb-2" id="splitCueDrop" for="splitCueFile">
      <input type="file" id="splitCueFile" multiple accept="audio/wav,audio/mpeg,audio/mp4,audio/aac,audio/ogg,audio/webm,audio/flac,audio/x-wav,audio/x-m4a,.wav,.mp3,.m4a,.aac,.ogg,.oga,.webm,.flac,.bin,.cue,application/x-cue">
      <span class="tool-dropzone-title">${escapeHtml(t(opts.lang, `${P}_choose_file`))}</span>
      <span class="tool-dropzone-hint">${escapeHtml(t(opts.lang, `${P}_drop_hint`))}</span>
      <span id="splitCueFileName" class="tool-dropzone-file split-cue-files"></span>
    </label>

    <details class="mb-3">
      <summary>${escapeHtml(t(opts.lang, `${P}_paste_summary`))}</summary>
      <label class="form-label small mt-2 mb-1" for="splitCuePaste">${escapeHtml(t(opts.lang, `${P}_cue_file`))}</label>
      <textarea id="splitCuePaste" class="form-control form-control-sm font-monospace" rows="8" spellcheck="false"></textarea>
      <p class="form-text mb-0">${escapeHtml(t(opts.lang, `${P}_paste_hint`))}</p>
    </details>

    <div id="splitCuePreview" class="split-cue-preview mb-3" hidden>
      <div class="split-cue-preview-bar">
        <button type="button" id="splitCueBtnPlay" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, `${P}_play`))}</button>
        <span id="splitCueClock" class="small text-muted"></span>
        <span class="small text-muted">${escapeHtml(t(opts.lang, `${P}_preview_hint`))}</span>
      </div>
      <div class="split-cue-wave-wrap">
        <canvas id="splitCueWave" class="split-cue-wave" width="600" height="96" aria-label="${escapeHtml(t(opts.lang, `${P}_preview_hint`))}"></canvas>
        <div id="splitCueCuts"></div>
        <div id="splitCueHead" class="split-cue-head" hidden></div>
      </div>
    </div>

    <details class="mb-2">
      <summary>${escapeHtml(t(opts.lang, `${P}_advanced`))}</summary>
      <div class="mt-2">
        <div class="split-cue-adv-grid mb-2">
          <div>
            <label class="form-label small mb-1" for="splitCueFormat">${escapeHtml(t(opts.lang, `${P}_format`))}</label>
            <select id="splitCueFormat" class="form-select form-select-sm" style="width:auto;max-width:12rem;">
              <option value="wav" selected>${escapeHtml(t(opts.lang, `${P}_format_wav`))}</option>
              <option value="mp3">${escapeHtml(t(opts.lang, `${P}_format_mp3`))}</option>
            </select>
            <p class="form-text mb-0">${escapeHtml(t(opts.lang, `${P}_format_hint`))}</p>
          </div>
          <div>
            <label class="form-label small mb-1" for="splitCueBitrate">${escapeHtml(t(opts.lang, `${P}_bitrate`))}</label>
            <select id="splitCueBitrate" class="form-select form-select-sm" style="width:auto;max-width:12rem;">
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
      <button type="button" id="splitCueBtnSplit" class="btn btn-primary btn-sm">${escapeHtml(t(opts.lang, `${P}_split`))}</button>
      <button type="button" id="splitCueBtnZip" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(t(opts.lang, `${P}_download_zip`))}</button>
      <button type="button" id="splitCueBtnSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, `${P}_sample`))}</button>
      <button type="button" id="splitCueBtnClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, `${P}_clear`))}</button>
    </div>

    <div id="splitCueClips" class="mb-3" hidden>
      <p class="small mb-2">${escapeHtml(t(opts.lang, `${P}_tracks_title`))}</p>
      <ol id="splitCueClipList" class="list-group list-group-flush border rounded"></ol>
    </div>

    <p id="splitCueMeta" class="small text-muted mb-2" style="display:none;"></p>
    <p id="splitCueResult" class="small text-success mb-2" style="display:none;"></p>
    <p id="splitCueError" class="small text-danger mb-2" style="display:none;" role="alert"></p>
    <p id="splitCueStatus" class="small text-muted mb-2" role="status" aria-live="polite"></p>

    <div id="splitCueHud" class="oft-pdf-work-progress bcw-hud mb-3" hidden>
      <div class="bcw-hud-top">
        <div class="bcw-hud-spin" aria-hidden="true"></div>
        <div class="bcw-hud-pct" id="splitCueHudPct">0%</div>
        <div class="bcw-hud-copy">
          <div class="bcw-hud-title" id="splitCueHudTitle">${escapeHtml(t(opts.lang, `${P}_hud_title`))}</div>
          <div class="bcw-hud-step" id="splitCueHudStep"></div>
          <div class="bcw-hud-time" id="splitCueHudTime"></div>
        </div>
      </div>
      <div class="progress" style="height: 1.35rem;">
        <div id="splitCueHudBar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width: 0%"></div>
        <span class="bcw-hud-sheen" aria-hidden="true"></span>
      </div>
      <ol class="bcw-hud-steps" id="splitCueHudSteps">
        <li data-step="parse">${escapeHtml(t(opts.lang, `${P}_hud_step_parse`))}</li>
        <li data-step="decode">${escapeHtml(t(opts.lang, `${P}_hud_step_decode`))}</li>
        <li data-step="split">${escapeHtml(t(opts.lang, `${P}_hud_step_split`))}</li>
        <li data-step="pack">${escapeHtml(t(opts.lang, `${P}_hud_step_pack`))}</li>
      </ol>
      <div class="bcw-hud-url" id="splitCueHudUrl"></div>
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
				label: 'Wikipedia: Cue sheet',
				href: 'https://en.wikipedia.org/wiki/Cue_sheet_(computing)',
			},
			{
				label: 'Hydrogenaudio: Cue sheet',
				href: 'https://wiki.hydrogenaudio.org/index.php?title=Cue_sheet',
			},
			{
				label: 'ArchWiki: CUE Splitting',
				href: 'https://wiki.archlinux.org/title/CUE_Splitting',
			},
		],
	});

	/**
	 * 客户端：解析 cue、按 INDEX 01 切片；Download ZIP 才加载 JSZip / lamejs。
	 * 正则字类须写成 \\w / \\d。
	 */
	const extraBodyHtml = `
  <script>
    (function () {
      /** lamejs IIFE 同域路径（ZIP 内要 MP3 再加载）。 */
      var LAME_SRC = '/vendor/lamejs/lamejs.iife.js';
      /** JSZip 同域路径（点 Download ZIP 再加载）。 */
      var JSZIP_SRC = '/vendor/jszip/jszip.min.js';
      /** 样例总时长（秒），与 H2 Example 对齐。 */
      var SAMPLE_SEC = 6;
      /** 每段样例秒数（三轨）。 */
      var SAMPLE_TRACK = 2;
      /** 最多轨数；超出拒绝而非截断。 */
      var MAX_TRACKS = 50;
      /** 解码成 Float32 后的内存上限（字节），防止整轨 FLAC 撑爆标签页。 */
      var MAX_PCM_BYTES = 280 * 1024 * 1024;
      /** CD-DA 每扇区字节（BINARY .bin）。 */
      var CDDA_SECTOR = 2352;

      var drop = document.getElementById('splitCueDrop');
      var fileInput = document.getElementById('splitCueFile');
      var fileNameEl = document.getElementById('splitCueFileName');
      var pasteEl = document.getElementById('splitCuePaste');
      var formatEl = document.getElementById('splitCueFormat');
      var bitrateEl = document.getElementById('splitCueBitrate');
      var metaEl = document.getElementById('splitCueMeta');
      var resultEl = document.getElementById('splitCueResult');
      var errEl = document.getElementById('splitCueError');
      var statusEl = document.getElementById('splitCueStatus');
      var btnSplit = document.getElementById('splitCueBtnSplit');
      var btnZip = document.getElementById('splitCueBtnZip');
      var btnSample = document.getElementById('splitCueBtnSample');
      var btnClear = document.getElementById('splitCueBtnClear');
      var btnPlay = document.getElementById('splitCueBtnPlay');
      var previewWrap = document.getElementById('splitCuePreview');
      var waveCanvas = document.getElementById('splitCueWave');
      var cutsEl = document.getElementById('splitCueCuts');
      var headEl = document.getElementById('splitCueHead');
      var clockEl = document.getElementById('splitCueClock');
      var clipsWrap = document.getElementById('splitCueClips');
      var clipListEl = document.getElementById('splitCueClipList');
      var busyBtns = [btnSplit, btnSample, btnClear, btnPlay, formatEl, bitrateEl, fileInput, pasteEl];
      var hudWrap = document.getElementById('splitCueHud');
      var hudPctEl = document.getElementById('splitCueHudPct');
      var hudTitleEl = document.getElementById('splitCueHudTitle');
      var hudStepEl = document.getElementById('splitCueHudStep');
      var hudTimeEl = document.getElementById('splitCueHudTime');
      var hudUrlEl = document.getElementById('splitCueHudUrl');
      var hudBar = document.getElementById('splitCueHudBar');
      var hudStepLis = document.querySelectorAll('#splitCueHudSteps [data-step]');
      var hudTitleDefault = ${JSON.stringify(t(opts.lang, `${P}_hud_title`))};

      var msg = {
        empty: ${JSON.stringify(t(opts.lang, `${P}_empty`))},
        emptyAudio: ${JSON.stringify(t(opts.lang, `${P}_empty_audio`))},
        emptyCue: ${JSON.stringify(t(opts.lang, `${P}_empty_cue`))},
        errCaps: ${JSON.stringify(t(opts.lang, `${P}_err_caps`))},
        errDecode: ${JSON.stringify(t(opts.lang, `${P}_err_decode`))},
        errEmpty: ${JSON.stringify(t(opts.lang, `${P}_err_empty`))},
        errTooMany: ${JSON.stringify(t(opts.lang, `${P}_err_too_many`))},
        errLame: ${JSON.stringify(t(opts.lang, `${P}_err_lame`))},
        errZip: ${JSON.stringify(t(opts.lang, `${P}_err_zip`))},
        errVideo: ${JSON.stringify(t(opts.lang, `${P}_err_video`))},
        errApe: ${JSON.stringify(t(opts.lang, `${P}_err_ape`))},
        errMulti: ${JSON.stringify(t(opts.lang, `${P}_err_multi_file`))},
        errNoIndex: ${JSON.stringify(t(opts.lang, `${P}_err_no_index`))},
        errData: ${JSON.stringify(t(opts.lang, `${P}_err_data`))},
        errCue: ${JSON.stringify(t(opts.lang, `${P}_err_cue_parse`))},
        done: ${JSON.stringify(t(opts.lang, `${P}_status_done`))},
        metaTpl: ${JSON.stringify(t(opts.lang, `${P}_meta_tpl`))},
        resultTpl: ${JSON.stringify(t(opts.lang, `${P}_result_tpl`))},
        trackRow: ${JSON.stringify(t(opts.lang, `${P}_track_row_tpl`))},
        clipDownload: ${JSON.stringify(t(opts.lang, `${P}_clip_download`))},
        clipPlay: ${JSON.stringify(t(opts.lang, `${P}_clip_play`))},
        imageFile: ${JSON.stringify(t(opts.lang, `${P}_image_file`))},
        cueFile: ${JSON.stringify(t(opts.lang, `${P}_cue_file`))},
        hudElapsed: ${JSON.stringify(t(opts.lang, `${P}_hud_elapsed_tpl`))},
        hudPct: ${JSON.stringify(t(opts.lang, `${P}_hud_pct_tpl`))},
        hudNext: ${JSON.stringify(t(opts.lang, `${P}_hud_next`))},
        hudNextZip: ${JSON.stringify(t(opts.lang, `${P}_hud_next_zip`))},
        hudFailTitle: ${JSON.stringify(t(opts.lang, `${P}_hud_fail_title`))},
        hudFailHint: ${JSON.stringify(t(opts.lang, `${P}_hud_fail_hint`))},
        hudParse: ${JSON.stringify(t(opts.lang, `${P}_hud_parse`))},
        hudDecode: ${JSON.stringify(t(opts.lang, `${P}_hud_decode`))},
        hudSplit: ${JSON.stringify(t(opts.lang, `${P}_hud_split`))},
        hudPack: ${JSON.stringify(t(opts.lang, `${P}_hud_pack`))},
        hudEncode: ${JSON.stringify(t(opts.lang, `${P}_hud_encode`))},
        hudWorking: ${JSON.stringify(t(opts.lang, `${P}_hud_working`))},
        play: ${JSON.stringify(t(opts.lang, `${P}_play`))},
        pause: ${JSON.stringify(t(opts.lang, `${P}_pause`))}
      };

      /** @type {AudioContext | null} 复用解码上下文。 */
      var audioCtx = null;
      /** @type {AudioBuffer | null} 解码后的整轨镜像。 */
      var sourceBuffer = null;
      /**
       * 切开后的曲目。
       * @type {{ buf: AudioBuffer, start: number, end: number, title: string, n: number }[]}
       */
      var clipParts = [];
      /** 镜像显示名。 */
      var imageName = '';
      /** cue 显示名。 */
      var cueName = '';
      /** 粘贴或读入的 cue 原文。 */
      var cueText = '';
      /**
       * 解析后的 cue。
       * @type {{ albumTitle: string, albumPerformer: string, tracks: { n: number, title: string, performer: string, index01: number, index00: number|null }[] } | null}
       */
      var parsedCue = null;
      /** lamejs 脚本是否已插入。 */
      var lameLoaded = false;
      /** JSZip 脚本是否已插入。 */
      var zipLoaded = false;
      /** HUD 计时器。 */
      var hudClockId = 0;
      var hudClockStart = 0;
      /** HUD 绘制状态。 */
      var hudState = { phase: 'parse', pct: 0, detail: '', url: '', done: false, fail: false };
      /** @type {AudioBufferSourceNode | null} 预览播放源。 */
      var playingSource = null;
      /** 预览播放动画帧。 */
      var playRaf = 0;
      /** 预览开始时 AudioContext.currentTime。 */
      var playStartCtx = 0;

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
        var order = ['parse', 'decode', 'split', 'pack'];
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
        hudState = { phase: 'parse', pct: 4, detail: msg.hudWorking, url: imageName || cueName || '', done: false, fail: false };
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
        if (isNarrow()) return { bytes: 30 * 1024 * 1024, seconds: 10 * 60 };
        return { bytes: 80 * 1024 * 1024, seconds: 30 * 60 };
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
       * 读取 ZIP 格式与码率。
       * @returns {{ format: string, kbps: number }}
       */
      function readZipSettings() {
        var format = formatEl && formatEl.value === 'mp3' ? 'mp3' : 'wav';
        var kbps = bitrateEl ? Number(bitrateEl.value) : 128;
        if ([96, 128, 192].indexOf(kbps) < 0) kbps = 128;
        return { format: format, kbps: kbps };
      }

      /** INDEX MM:SS:FF → 秒（75 帧/秒）。 */
      function cueTimeToSec(mm, ss, ff) {
        return Number(mm) * 60 + Number(ss) + Number(ff) / 75;
      }

      /**
       * 解析 cue 文本：单 FILE、AUDIO 轨、INDEX 01。
       * @param {string} text
       * @returns {{ albumTitle: string, albumPerformer: string, tracks: object[] } | { error: string }}
       */
      function parseCueSheet(text) {
        var raw = String(text || '').replace(/^\\uFEFF/, '');
        if (!String(raw).trim()) return { error: 'parse' };
        var lines = raw.split(/\\r?\\n/);
        var albumTitle = '';
        var albumPerformer = '';
        var fileCount = 0;
        var hasData = false;
        var sawAudio = false;
        var tracks = [];
        var cur = null;
        function finishCur() {
          if (cur) tracks.push(cur);
          cur = null;
        }
        for (var i = 0; i < lines.length; i++) {
          var line = String(lines[i] || '').trim();
          if (!line) continue;
          var up = line.toUpperCase();
          if (up.indexOf('REM ') === 0) continue;
          var fileM = line.match(/^FILE\\s+(?:"([^"]*)"|(\\S+))\\s+(\\S+)/i);
          if (fileM) {
            fileCount += 1;
            if (fileCount > 1) return { error: 'multi' };
            continue;
          }
          var trackM = line.match(/^TRACK\\s+(\\d+)\\s+(\\S+)/i);
          if (trackM) {
            finishCur();
            var mode = String(trackM[2] || '').toUpperCase();
            if (mode.indexOf('AUDIO') >= 0) {
              sawAudio = true;
              cur = { n: Number(trackM[1]), title: '', performer: '', index01: null, index00: null };
            } else {
              hasData = true;
              cur = null;
            }
            continue;
          }
          var titleM = line.match(/^TITLE\\s+(?:"([^"]*)"|(.+))$/i);
          if (titleM) {
            var tt = String(titleM[1] != null ? titleM[1] : titleM[2] || '').trim();
            if (cur) cur.title = tt;
            else albumTitle = tt;
            continue;
          }
          var perfM = line.match(/^PERFORMER\\s+(?:"([^"]*)"|(.+))$/i);
          if (perfM) {
            var pf = String(perfM[1] != null ? perfM[1] : perfM[2] || '').trim();
            if (cur) cur.performer = pf;
            else albumPerformer = pf;
            continue;
          }
          var idxM = line.match(/^INDEX\\s+(\\d+)\\s+(\\d{1,3}):(\\d{2}):(\\d{2})\\s*$/i);
          if (idxM && cur) {
            var nn = Number(idxM[1]);
            var ff = Number(idxM[4]);
            if (ff > 74) ff = 74;
            var sec = cueTimeToSec(idxM[2], idxM[3], ff);
            if (nn === 1) cur.index01 = sec;
            if (nn === 0) cur.index00 = sec;
          }
        }
        finishCur();
        if (hasData && !sawAudio) return { error: 'data' };
        var withIdx = tracks.filter(function (tr) {
          return tr.index01 != null && isFinite(tr.index01);
        });
        if (!withIdx.length) return { error: 'noindex' };
        if (withIdx.length > MAX_TRACKS) return { error: 'too-many' };
        withIdx.sort(function (a, b) { return a.index01 - b.index01; });
        return { albumTitle: albumTitle, albumPerformer: albumPerformer, tracks: withIdx };
      }

      /**
       * 把解析错误码换成可见句子。
       * @param {string} code
       */
      function cueErrorText(code) {
        if (code === 'multi') return msg.errMulti;
        if (code === 'data') return msg.errData;
        if (code === 'noindex') return msg.errNoIndex;
        if (code === 'too-many') return msg.errTooMany;
        return msg.errCue;
      }

      /** 画出文件名。 */
      function paintFileNames() {
        if (!fileNameEl) return;
        var bits = [];
        if (imageName) bits.push(msg.imageFile + ': ' + imageName);
        if (cueName) bits.push(msg.cueFile + ': ' + cueName);
        fileNameEl.textContent = bits.join(' · ');
      }

      /** 画出镜像时长与 INDEX 数量。 */
      function paintMeta() {
        if (!metaEl || !sourceBuffer) {
          if (metaEl) metaEl.style.display = 'none';
          return;
        }
        metaEl.style.display = '';
        metaEl.textContent = fillTpl(msg.metaTpl, {
          name: imageName || 'audio',
          dur: fmtSec(sourceBuffer.duration),
          rate: Math.round(sourceBuffer.sampleRate),
          ch: sourceBuffer.numberOfChannels,
          tracks: parsedCue && parsedCue.tracks ? parsedCue.tracks.length : 0
        });
      }

      /** 停掉预览播放。 */
      function stopPreview() {
        if (playRaf) {
          cancelAnimationFrame(playRaf);
          playRaf = 0;
        }
        if (playingSource) {
          try { playingSource.stop(); } catch (e) {}
          playingSource = null;
        }
        if (btnPlay) btnPlay.textContent = msg.play;
        if (headEl) headEl.hidden = true;
        if (clockEl && sourceBuffer) clockEl.textContent = '0.00 / ' + fmtSec(sourceBuffer.duration);
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
       * 按 INDEX 01 切开；末轨接到 EOF。
       * @returns {{ buf: AudioBuffer, start: number, end: number, title: string, n: number }[] | string}
       */
      function splitTracks() {
        if (!sourceBuffer || !parsedCue || !parsedCue.tracks.length) return 'empty';
        var total = sourceBuffer.duration;
        var rows = parsedCue.tracks;
        if (rows.length > MAX_TRACKS) return 'too-many';
        var clips = [];
        for (var i = 0; i < rows.length; i++) {
          var start = Math.max(0, rows[i].index01);
          var end = i + 1 < rows.length ? rows[i + 1].index01 : total;
          if (end <= start) end = Math.min(total, start + 0.05);
          if (end > total) end = total;
          var piece = sliceBuffer(sourceBuffer, start, end);
          if (piece) {
            clips.push({
              buf: piece,
              start: start,
              end: end,
              title: rows[i].title || ('Track ' + rows[i].n),
              n: rows[i].n || (i + 1)
            });
          }
        }
        if (!clips.length) return 'empty';
        if (clips.length > MAX_TRACKS) return 'too-many';
        return clips;
      }

      /** 画波形与 INDEX 01 切线。 */
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
        if (!cutsEl) return;
        cutsEl.innerHTML = '';
        var marks = parsedCue && parsedCue.tracks ? parsedCue.tracks : [];
        marks.forEach(function (tr) {
          if (!tr.index01) return;
          var mark = document.createElement('div');
          mark.className = 'split-cue-cut';
          mark.style.left = (Math.max(0, Math.min(1, tr.index01 / sourceBuffer.duration)) * 100) + '%';
          cutsEl.appendChild(mark);
        });
      }

      /**
       * 执行 Split tracks（与按钮同一管线）。
       * @returns {boolean}
       */
      function runSplit() {
        if (!sourceBuffer) {
          setError(msg.emptyAudio);
          return false;
        }
        if (!parsedCue) {
          setError(msg.emptyCue);
          return false;
        }
        var out = splitTracks();
        if (out === 'too-many') {
          setError(msg.errTooMany);
          clipParts = [];
          setZipEnabled(false);
          paintClips();
          return false;
        }
        if (out === 'empty' || !out.length) {
          setError(msg.errEmpty);
          clipParts = [];
          setZipEnabled(false);
          paintClips();
          return false;
        }
        clipParts = out;
        setZipEnabled(true);
        paintClips();
        drawWave();
        if (resultEl) {
          resultEl.style.display = '';
          var list = clipParts.map(function (p) { return fmtSec(p.buf.duration); }).join(' / ');
          resultEl.textContent = fillTpl(msg.resultTpl, {
            orig: fmtSec(sourceBuffer.duration),
            count: clipParts.length,
            list: list
          });
        }
        if (statusEl) statusEl.textContent = msg.done;
        return true;
      }

      /** 渲染曲目列表（可单轨试听/下载）。 */
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
          li.className = 'list-group-item split-cue-clip-row';
          var label = document.createElement('span');
          label.className = 'small';
          label.textContent = fillTpl(msg.trackRow, {
            n: pad2(part.n || (idx + 1)),
            title: part.title || ('Track ' + (idx + 1)),
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
        var a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = filename;
        a.click();
        setTimeout(function () { URL.revokeObjectURL(a.href); }, 4000);
      }

      /**
       * 曲目文件名安全片段。
       * @param {string} s
       */
      function safeTitle(s) {
        var n = String(s || '').trim() || 'track';
        n = n.replace(/[\\\\\\/:*?"<>|]+/g, '_').replace(/\\s+/g, ' ');
        return n.slice(0, 80);
      }

      /**
       * 两位序号（01, 02…）。
       * @param {number} n
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
       * ZIP 文件名主干（专辑名或镜像名）。
       * @returns {string}
       */
      function stemName() {
        var n = (parsedCue && parsedCue.albumTitle) || String(imageName || 'album');
        n = n.replace(/\\.[^.]+$/, '');
        n = n.replace(/[^\\w\\-]+/g, '-').replace(/^-+|-+$/g, '');
        return n || 'album';
      }

      /**
       * 单轨下载。
       * @param {number} idx
       */
      function downloadOneClip(idx) {
        var part = clipParts[idx];
        if (!part) return;
        var s = readZipSettings();
        var ext = s.format === 'mp3' ? 'mp3' : 'wav';
        var blob = s.format === 'mp3' ? null : bufferToWav(part.buf);
        var name = pad2(part.n) + ' ' + safeTitle(part.title) + '.' + ext;
        if (s.format !== 'mp3') {
          downloadBlob(blob, name);
          return;
        }
        loadLame().then(function () {
          downloadBlob(bufferToMp3(part.buf, s.kbps), name);
        }).catch(function () {
          setError(msg.errLame);
        });
      }

      /**
       * 打包 ZIP 并触发下载。
       * @returns {Promise<void>}
       */
      function packZip() {
        var s = readZipSettings();
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
          clipParts.forEach(function (part) {
            var blob = s.format === 'mp3' ? bufferToMp3(part.buf, s.kbps) : bufferToWav(part.buf);
            zip.file(pad2(part.n) + ' ' + safeTitle(part.title) + '.' + ext, blob);
          });
          return zip.generateAsync({ type: 'blob' });
        }).then(function (blob) {
          downloadBlob(blob, stemName() + '-cue-tracks.zip');
        });
      }

      /**
       * 合成 6 s 三段频率样例。
       * @returns {AudioBuffer}
       */
      function makeSampleBuffer() {
        var ctx = getCtx();
        var rate = 44100;
        var len = Math.round(rate * SAMPLE_SEC);
        var buf = ctx.createBuffer(1, len, rate);
        var data = buf.getChannelData(0);
        var freqs = [440, 550, 660];
        for (var i = 0; i < len; i++) {
          var t = i / rate;
          var band = Math.min(2, Math.floor(t / SAMPLE_TRACK));
          data[i] = 0.28 * Math.sin(2 * Math.PI * freqs[band] * t);
        }
        return buf;
      }

      /** 样例 cue 文本（与 Example 对齐）。 */
      function sampleCueText() {
        return [
          'PERFORMER "Sample Artist"',
          'TITLE "Sample Album"',
          'FILE "sample.wav" WAVE',
          '  TRACK 01 AUDIO',
          '    TITLE "Intro Tone"',
          '    INDEX 01 00:00:00',
          '  TRACK 02 AUDIO',
          '    TITLE "Middle Tone"',
          '    INDEX 01 00:02:00',
          '  TRACK 03 AUDIO',
          '    TITLE "Outro Tone"',
          '    INDEX 01 00:04:00'
        ].join('\\n');
      }

      /**
       * 16-bit PCM WAV 头解析；非 PCM 则返回 null。
       * @param {ArrayBuffer} ab
       */
      function parseWavPcm(ab) {
        if (!ab || ab.byteLength < 44) return null;
        var view = new DataView(ab);
        function str(off, n) {
          var s = '';
          for (var i = 0; i < n; i++) s += String.fromCharCode(view.getUint8(off + i));
          return s;
        }
        if (str(0, 4) !== 'RIFF' || str(8, 4) !== 'WAVE') return null;
        var off = 12;
        var fmt = null;
        var dataOff = 0;
        var dataLen = 0;
        while (off + 8 <= ab.byteLength) {
          var id = str(off, 4);
          var sz = view.getUint32(off + 4, true);
          if (id === 'fmt ') {
            fmt = {
              audioFormat: view.getUint16(off + 8, true),
              ch: view.getUint16(off + 10, true),
              rate: view.getUint32(off + 12, true),
              bits: view.getUint16(off + 22, true)
            };
          } else if (id === 'data') {
            dataOff = off + 8;
            dataLen = sz;
            break;
          }
          off += 8 + sz + (sz % 2);
        }
        if (!fmt || fmt.audioFormat !== 1 || fmt.bits !== 16 || !fmt.ch || !fmt.rate) return null;
        return {
          sampleRate: fmt.rate,
          channels: fmt.ch,
          dataOffset: dataOff,
          dataBytes: dataLen,
          duration: dataLen / (fmt.rate * fmt.ch * 2)
        };
      }

      /**
       * 把交错 Int16 PCM 填进 AudioBuffer。
       * @param {ArrayBuffer} ab
       * @param {{ sampleRate: number, channels: number, dataOffset: number, dataBytes: number }} meta
       * @returns {AudioBuffer | null}
       */
      function pcmToAudioBuffer(ab, meta) {
        var frames = Math.floor(meta.dataBytes / (meta.channels * 2));
        if (frames < 8) return null;
        var est = frames * meta.channels * 4;
        if (est > MAX_PCM_BYTES) return null;
        var buf = getCtx().createBuffer(meta.channels, frames, meta.sampleRate);
        var view = new DataView(ab, meta.dataOffset, frames * meta.channels * 2);
        for (var i = 0; i < frames; i++) {
          for (var c = 0; c < meta.channels; c++) {
            var s = view.getInt16((i * meta.channels + c) * 2, true);
            buf.getChannelData(c)[i] = s < 0 ? s / 0x8000 : s / 0x7fff;
          }
        }
        return buf;
      }

      /**
       * BINARY .bin 按 CD-DA 扇区解读。
       * @param {ArrayBuffer} ab
       * @param {string} name
       */
      function parseBinCdda(ab, name) {
        if (!/\\.bin$/i.test(name || '')) return null;
        if (!ab || ab.byteLength < CDDA_SECTOR * 8) return null;
        var sectors = Math.floor(ab.byteLength / CDDA_SECTOR);
        return {
          sampleRate: 44100,
          channels: 2,
          dataOffset: 0,
          dataBytes: sectors * CDDA_SECTOR,
          duration: sectors / 75,
          sector: true
        };
      }

      /**
       * CD-DA .bin（2352 字节/扇区）转 AudioBuffer。
       * @param {ArrayBuffer} ab
       * @param {{ dataBytes: number }} meta
       */
      function binToAudioBuffer(ab, meta) {
        var sectors = Math.floor(meta.dataBytes / CDDA_SECTOR);
        var framesPerSector = 588;
        var frames = sectors * framesPerSector;
        var est = frames * 2 * 4;
        if (est > MAX_PCM_BYTES) return null;
        var buf = getCtx().createBuffer(2, frames, 44100);
        var view = new DataView(ab);
        var fi = 0;
        for (var sec = 0; sec < sectors; sec++) {
          var off = sec * CDDA_SECTOR;
          for (var s = 0; s < framesPerSector; s++) {
            buf.getChannelData(0)[fi] = view.getInt16(off, true) / 0x8000;
            buf.getChannelData(1)[fi] = view.getInt16(off + 2, true) / 0x8000;
            off += 4;
            fi += 1;
          }
        }
        return buf;
      }

      /**
       * 应用 cue 文本并画切线。
       * @param {string} text
       * @returns {boolean}
       */
      function applyCueText(text) {
        cueText = String(text || '');
        var parsed = parseCueSheet(cueText);
        if (parsed.error) {
          parsedCue = null;
          setError(cueErrorText(parsed.error));
          return false;
        }
        parsedCue = parsed;
        paintMeta();
        if (sourceBuffer) drawWave();
        return true;
      }

      /**
       * 解码镜像 ArrayBuffer。
       * @param {ArrayBuffer} ab
       * @param {string} name
       * @returns {Promise<AudioBuffer>}
       */
      function decodeImage(ab, name) {
        var lim = caps();
        var wav = parseWavPcm(ab);
        if (wav) {
          if (wav.duration > lim.seconds) return Promise.reject(new Error('caps'));
          var pcm = pcmToAudioBuffer(ab, wav);
          if (!pcm) return Promise.reject(new Error('caps'));
          return Promise.resolve(pcm);
        }
        var bin = parseBinCdda(ab, name);
        if (bin) {
          if (bin.duration > lim.seconds) return Promise.reject(new Error('caps'));
          var pcmBin = binToAudioBuffer(ab, bin);
          if (!pcmBin) return Promise.reject(new Error('caps'));
          return Promise.resolve(pcmBin);
        }
        return getCtx().decodeAudioData(ab.slice(0)).then(function (buf) {
          if (buf.duration > lim.seconds) throw new Error('caps');
          var est = buf.length * buf.numberOfChannels * 4;
          if (est > MAX_PCM_BYTES) throw new Error('caps');
          return buf;
        });
      }

      /**
       * 分类用户丢入的文件。
       * @param {FileList|File[]} list
       */
      function classifyFiles(list) {
        var audio = null;
        var cueFile = null;
        var ape = null;
        var video = null;
        for (var i = 0; i < list.length; i++) {
          var f = list[i];
          var n = String(f.name || '').toLowerCase();
          var mime = String(f.type || '').toLowerCase();
          if (n.slice(-4) === '.cue' || mime.indexOf('cue') >= 0) cueFile = f;
          else if (n.slice(-4) === '.ape') ape = f;
          else if (mime.indexOf('video/') === 0) video = f;
          else if (
            mime.indexOf('audio/') === 0 ||
            /\\.(wav|flac|mp3|m4a|aac|ogg|oga|webm|bin)$/.test(n)
          ) {
            audio = f;
          }
        }
        return { audio: audio, cueFile: cueFile, ape: ape, video: video };
      }

      /**
       * 读入镜像文件。
       * @param {File} file
       * @returns {Promise<void>}
       */
      function ingestImage(file) {
        imageName = file.name || 'audio';
        paintFileNames();
        var mime = String(file.type || '').toLowerCase();
        if (mime.indexOf('video/') === 0) {
          setError(msg.errVideo);
          return Promise.reject(new Error('video'));
        }
        if (/\\.ape$/i.test(file.name || '')) {
          setError(msg.errApe);
          return Promise.reject(new Error('ape'));
        }
        var lim = caps();
        if (file.size > lim.bytes) {
          setError(msg.errCaps);
          return Promise.reject(new Error('caps'));
        }
        hudState.phase = 'decode';
        hudState.pct = 28;
        hudState.detail = msg.hudDecode;
        hudState.url = imageName;
        paintHud();
        return file.arrayBuffer().then(function (ab) {
          return decodeImage(ab, file.name || '');
        }).then(function (buf) {
          sourceBuffer = buf;
          clipParts = [];
          setZipEnabled(false);
          paintClips();
          if (resultEl) resultEl.style.display = 'none';
          paintMeta();
          drawWave();
        }).catch(function (err) {
          if (String(err && err.message) === 'caps') {
            setError(msg.errCaps);
            throw err;
          }
          if (String(err && err.message) === 'ape' || String(err && err.message) === 'video') throw err;
          setError(msg.errDecode);
          throw err;
        });
      }

      /**
       * 读入 .cue 文件。
       * @param {File} file
       * @returns {Promise<void>}
       */
      function ingestCueFile(file) {
        cueName = file.name || 'sheet.cue';
        paintFileNames();
        hudState.phase = 'parse';
        hudState.pct = 16;
        hudState.detail = msg.hudParse;
        hudState.url = cueName;
        paintHud();
        return file.text().then(function (text) {
          if (pasteEl) pasteEl.value = text;
          if (!applyCueText(text)) throw new Error('cue');
        });
      }

      /**
       * 打开用户文件：镜像 + cue（可分两次丢）。
       * @param {FileList|File[]} list
       */
      function onPickFiles(list) {
        var files = Array.prototype.slice.call(list || []);
        if (!files.length) return;
        var kind = classifyFiles(files);
        if (kind.video) {
          setError(msg.errVideo);
          failHud(msg.errVideo);
          return;
        }
        if (kind.ape) {
          setError(msg.errApe);
          failHud(msg.errApe);
          return;
        }
        setError('');
        setBusy(true);
        showHud();
        yieldUi().then(function () {
          var chain = Promise.resolve();
          if (kind.cueFile) {
            chain = chain.then(function () { return ingestCueFile(kind.cueFile); });
          }
          if (kind.audio) {
            chain = chain.then(function () { return ingestImage(kind.audio); });
          }
          return chain;
        }).then(function () {
          if (!kind.audio && !sourceBuffer) {
            if (statusEl) statusEl.textContent = msg.emptyAudio;
          }
          if (!kind.cueFile && !parsedCue) {
            if (statusEl) statusEl.textContent = msg.emptyCue;
          }
          finishHud(${JSON.stringify(t(opts.lang, `${P}_hud_decoded`))});
        }).catch(function () {
          failHud(errEl && errEl.textContent ? errEl.textContent : msg.hudFailHint);
        }).then(function () {
          setBusy(false);
        });
      }

      /**
       * Load sample：6 s 三段音 + cue，自动 Split tracks。
       * @returns {Promise<void>}
       */
      function loadSample() {
        setError('');
        setBusy(true);
        return yieldUi().then(function () {
          imageName = 'sample.wav';
          cueName = 'sample.cue';
          var text = sampleCueText();
          if (pasteEl) pasteEl.value = text;
          paintFileNames();
          if (!applyCueText(text)) throw new Error('cue');
          sourceBuffer = makeSampleBuffer();
          clipParts = [];
          paintMeta();
          drawWave();
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

      if (btnSplit) {
        btnSplit.addEventListener('click', function () {
          if (!sourceBuffer) {
            setError(msg.emptyAudio);
            return;
          }
          if (pasteEl && pasteEl.value && String(pasteEl.value).trim()) {
            if (!applyCueText(pasteEl.value)) return;
          }
          if (!parsedCue) {
            setError(msg.emptyCue);
            return;
          }
          setError('');
          setBusy(true);
          showHud();
          hudState.phase = 'split';
          hudState.pct = 62;
          hudState.detail = msg.hudSplit;
          paintHud();
          yieldUi().then(function () {
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
          parsedCue = null;
          cueText = '';
          imageName = '';
          cueName = '';
          if (fileInput) fileInput.value = '';
          if (pasteEl) pasteEl.value = '';
          paintFileNames();
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
          if (fileInput.files && fileInput.files.length) onPickFiles(fileInput.files);
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
          if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length) {
            onPickFiles(e.dataTransfer.files);
          }
        });
      }
      if (btnPlay) btnPlay.addEventListener('click', function () { playBuffer(sourceBuffer); });
      if (pasteEl) {
        pasteEl.addEventListener('change', function () {
          if (!String(pasteEl.value || '').trim()) return;
          cueName = cueName || 'pasted.cue';
          paintFileNames();
          applyCueText(pasteEl.value);
        });
      }
      window.addEventListener('resize', function () {
        if (sourceBuffer) drawWave();
      });

      loadSample();
    })();
  </script>`;

	/** Catalog 元数据：相关工具、JSON-LD、主题面包屑。 */
	const toolMeta = getToolBySlug('split-a-disc-image-with-a-cue-sheet');
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
