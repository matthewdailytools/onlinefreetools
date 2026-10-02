/**
 * 本地音频/视频音轨 → 带时间轴 SRT（同域 Whisper tiny q8；可选 Web Speech 麦克风口述）。
 * slug: make-srt-subtitles-from-an-audio-file
 * 规格：work-tasks/make-srt-subtitles-from-an-audio-file/02-tool-info.md
 * 进页不自动跑样例（首屏拉 ~45 MB 模型会打坏 LCP）；Load sample 才触发。
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
const P = 'tool_make_srt_subtitles_from_an_audio_file';

/**
 * 非默认语言时为路径加语言前缀。
 * @param lang 当前 UI 语言
 * @param pathname 站点路径
 * @param defaultLang 无前缀的默认语
 */
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	/** 规范化为以 / 开头的路径。 */
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * 渲染「从音频文件生成 SRT 字幕」工具页（page.style: opts）。
 * 主路径：动态 import `/vendor/whisper/whisper-loader.js` → createTranscriber → decode → transcribe → chunksToSrt。
 * 次路径：浏览器 Web Speech 麦克风口述（缺失则隐藏/禁用，不阻挡 Whisper）。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderMakeSrtSubtitlesFromAnAudioFilePage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 工具规范路径（无语言前缀）。 */
	const toolPath = '/tools/make-srt-subtitles-from-an-audio-file';
	/** 当前语言的规范 URL 路径。 */
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	/** 文档标题：工具名 | 品牌。 */
	const title = `${t(opts.lang, `${P}_title`)} | ${t(opts.lang, 'brand')}`;
	/** Meta description（SEO）。 */
	const description = t(opts.lang, `${P}_description`);

	/** 顶栏导航项。 */
	const navItems = buildToolPageNavItems(opts.lang, opts.defaultLang);

	/**
	 * hreflang 映射始终带显式语言段。
	 * @param code 语言码
	 * @param pathname 站点路径
	 */
	const withExplicitLangPrefix = (code: SiteLang, pathname: string) => {
		/** 规范化路径。 */
		const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
		return `/${code}${safe}`.replace(/\/{2,}/g, '/');
	};

	/** 语言切换器用的显式语言路径表。 */
	const langAlternates: Record<string, string> = Object.fromEntries(
		(supportedLangs || []).map((code) => [code, withExplicitLangPrefix(code, toolPath)])
	);

	/** hreflang alternate 绝对 URL 列表。 */
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
			currentSlug: 'make-srt-subtitles-from-an-audio-file',
			currentAnchor: '#make-srt',
		}),
		id: 'toolNav',
	});

	/** 页脚 HTML。 */
	const footerHtml = renderFooter({ lang: opts.lang });

	/**
	 * 转义后的工具文案（防 XSS）。
	 * @param key 去掉前缀后的键名
	 */
	const tr = (key: string) => escapeHtml(t(opts.lang, `${P}_${key}`));

	/** 内联脚本用的 UI 消息键（须与 en.ts 对齐）。 */
	const uiKeys = [
		'model',
		'decode',
		'transcribe',
		'write',
		'done',
		'failed',
		'elapsed',
		'err_file',
		'err_format',
		'err_limit',
		'err_decode',
		'err_unsupported',
		'err_permission',
		'err_empty_srt',
		'err_model',
		'sample_name',
		'result',
		'empty',
		'file_label',
		'status_mic_unsupported',
		'status_listening',
		'status_mic',
		'status_model',
		'status_decode',
		'status_transcribe',
		'status_transcribe_window',
		'status_write',
		'status_stopped',
		'interim_label',
		'hud_title',
		'hud_pct',
		'hud_next',
		'hud_fail_title',
		'hud_fail_hint',
		'hud_model_progress',
		'hud_working',
	];
	/** 消息字典：键 → 当前语言字符串。 */
	const messages = Object.fromEntries(uiKeys.map((key) => [key, t(opts.lang, `${P}_${key}`)]));
	/** UI 语言码，供麦克风 Web Speech 与语言下拉默认。 */
	const uiLang = opts.lang;

	/** 工具主面板与结果区 markup。 */
	const contentHtml = `
    <div id="make-srt" class="tool-page-heading mb-3"><h1 class="h4">${tr('title')}</h1><p>${tr('desc')}</p></div>
    <section class="tool-panel" id="srtPanel">
      <div id="srtMicUnsupported" class="alert alert-secondary mb-3" role="status" hidden>${tr('status_mic_unsupported')}</div>
      <label class="tool-dropzone mb-3" id="srtDrop" for="srtAudio">
        <input id="srtAudio" type="file" accept="audio/*,video/*,.wav,.mp3,.m4a,.aac,.ogg,.flac,.opus,.webm,.mp4,.m4v,.mov,.mkv,.avi">
        <span class="tool-dropzone-title">${tr('choose')}</span>
        <span class="tool-dropzone-hint">${tr('hint')}</span>
        <span id="srtFileName" class="tool-dropzone-file"></span>
      </label>
      <div id="srtSourcePlay" class="srt-source-play mb-3" hidden>
        <label class="form-label" for="srtSourceAudio">${tr('source_play')}</label>
        <audio id="srtSourceAudio" controls preload="metadata" style="width:100%;max-width:28rem" aria-label="${tr('source_play')}"></audio>
        <video id="srtSourceVideo" controls preload="metadata" playsinline style="width:100%;max-width:28rem;max-height:12rem;background:#111" aria-label="${tr('source_play')}" hidden></video>
      </div>
      <div class="mb-3">
        <label class="form-label" for="srtLang">${tr('lang_label')}</label>
        <select id="srtLang" class="form-select" style="max-width:18rem">
          <option value="auto">${tr('lang_auto')}</option>
          <option value="en">${tr('lang_en')}</option>
          <option value="zh">${tr('lang_zh')}</option>
          <option value="es">${tr('lang_es')}</option>
          <option value="ja">${tr('lang_ja')}</option>
          <option value="de">${tr('lang_de')}</option>
          <option value="fr">${tr('lang_fr')}</option>
          <option value="pt">${tr('lang_pt')}</option>
          <option value="id">${tr('lang_id')}</option>
          <option value="ar">${tr('lang_ar')}</option>
          <option value="ru">${tr('lang_ru')}</option>
        </select>
        <p class="form-text">${tr('lang_hint')}</p>
      </div>
      <div class="tools-bar d-flex flex-wrap mb-3" style="gap:.5rem">
        <button id="srtConvert" class="btn btn-primary" type="button">${tr('convert')}</button>
        <button id="srtMic" class="btn btn-outline-primary" type="button">${tr('mic')}</button>
        <button id="srtStop" class="btn btn-outline-danger" type="button" disabled>${tr('stop')}</button>
        <button id="srtDownload" class="btn btn-outline-primary" type="button" disabled>${tr('download')}</button>
        <button id="srtSample" class="btn btn-outline-secondary" type="button">${tr('sample')}</button>
        <button id="srtClear" class="btn btn-outline-secondary" type="button">${tr('clear')}</button>
      </div>
      <details class="mb-3"><summary>${tr('advanced')}</summary>
        <p class="form-text mt-2">${tr('settings_hint')}</p>
      </details>
      <div id="srtHud" class="oft-pdf-work-progress bcw-hud mb-3" role="status" aria-live="polite" hidden>
        <div class="bcw-hud-top">
          <div class="bcw-hud-spin" aria-hidden="true"></div>
          <div class="bcw-hud-pct" id="srtPct">0%</div>
          <div class="bcw-hud-copy">
            <div class="bcw-hud-title" id="srtHudTitle">${tr('hud_title')}</div>
            <div class="bcw-hud-step" id="srtStep"></div>
            <div class="bcw-hud-time" id="srtTime"></div>
          </div>
        </div>
        <div class="progress" style="height:1.35rem">
          <div id="srtBar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width:0%"></div>
          <span class="bcw-hud-sheen" aria-hidden="true"></span>
        </div>
        <ol class="bcw-hud-steps" id="srtHudSteps">
          <li data-step="model">${tr('model')}</li>
          <li data-step="decode">${tr('decode')}</li>
          <li data-step="transcribe">${tr('transcribe')}</li>
          <li data-step="write">${tr('write')}</li>
        </ol>
        <div class="bcw-hud-url" id="srtCurrent"></div>
      </div>
      <div id="srtEmpty" class="srt-empty mb-3" role="status">${tr('empty_state')}</div>
      <p id="srtLiveStatus" class="small text-muted mb-2" role="status" aria-live="polite"></p>
      <div id="srtInterimWrap" hidden>
        <label class="form-label" for="srtInterim">${tr('interim_label')}</label>
        <textarea id="srtInterim" class="form-control mb-3" rows="2" readonly></textarea>
      </div>
      <label class="form-label" for="srtOut">${tr('preview')}</label>
      <textarea id="srtOut" class="form-control mb-3" rows="10" spellcheck="false" style="font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;font-size:.9rem"></textarea>
      <p id="srtResult" class="small text-muted" hidden></p>
    </section>`;

	/** How / Why / Rules / Use cases IG 块。 */
	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: P,
		mode: 'rules',
		howItemCount: 4,
		whyChooseItemCount: 4,
		ruleItemCount: 4,
		usecaseCount: 3,
	});

	/** 权威参考链接（transformers.js + OpenAI Whisper + SRT）。 */
	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: 'Hugging Face transformers.js',
				href: 'https://github.com/huggingface/transformers.js',
			},
			{
				label: 'OpenAI Whisper',
				href: 'https://github.com/openai/whisper',
			},
			{
				label: 'SRT file format',
				href: 'https://docs.fileformat.com/video/srt/',
			},
		],
	});

	/** 金标 HUD 与布局补充样式。 */
	const extraHeadHtml = `<style>
    .tools-bar { gap: .5rem; }
    ${bcwHudCss({ hudId: 'srtHud', convertBtnId: 'srtConvert' })}
    #srtHud.is-error{border-color:#b91c1c;background:#fff1f2}
    #srtHud:not(.is-on) .bcw-hud-spin{animation:none}
    .srt-empty{padding:.75rem 1rem;border:1px dashed var(--border,#ced4da);border-radius:.5rem;color:var(--bs-secondary-color,#6c757d);font-size:.95rem}
    .srt-source-play audio,.srt-source-play video{display:block}
    .site-footer nav.d-inline{display:inline-flex!important;flex-wrap:wrap;justify-content:center;max-width:100%}
  </style>`;

	/**
	 * 客户端：Whisper 主路径 + 可选 Web Speech 麦克风。
	 * 正则字类须写成 \\w / \\d（模板字符串否则会被吃掉）。
	 * 进页不调用 loadSample。
	 */
	const extraBodyHtml = `<script>
  (function(){
    'use strict';
    /** 当前语言的运行时文案。 */
    const M = ${JSON.stringify(messages).replace(/</g, '\\u003c')};
    /** 页面 UI 语言。 */
    const UI_LANG = ${JSON.stringify(uiLang)};
    /** 同域 Whisper 加载器路径（动态 import）。 */
    const WHISPER_LOADER = '/vendor/whisper/whisper-loader.js';
    /** 公开领域短演讲样例。 */
    const SAMPLE_URL = '/samples/make-srt-subtitles-from-an-audio-file.wav';
    /** 体积上限约 120 MiB（滑窗识别后可高于旧 40 MiB；整文件仍须一次解码）。 */
    const MAX_BYTES = 120 * 1024 * 1024;
    /** 解码后时长上限约 2 小时（秒）；外层按窗转写以降低峰值内存。 */
    const MAX_DURATION = 2 * 60 * 60;
    /** 麦克风口述最短 cue 时长（秒）。 */
    const MIN_CUE = 0.4;
    /** UI 码 → Whisper language 全名；auto 表示省略 language。 */
    const WHISPER_LANG = {
      en: 'english', zh: 'chinese', es: 'spanish', ja: 'japanese', de: 'german',
      fr: 'french', pt: 'portuguese', id: 'indonesian', ar: 'arabic', ru: 'russian'
    };
    /** UI 码 → Web Speech Recognition.lang。 */
    const SPEECH_LANG = {
      en: 'en-US', zh: 'zh-CN', es: 'es-ES', ja: 'ja-JP', de: 'de-DE',
      fr: 'fr-FR', pt: 'pt-BR', id: 'id-ID', ar: 'ar-SA', ru: 'ru-RU'
    };
    /** HUD 步骤顺序：Model → Decode → Transcribe → Write SRT。 */
    const STEPS = ['model', 'decode', 'transcribe', 'write'];

    /**
     * 按 id 取 DOM 元素。
     * @param {string} id 元素 id
     * @returns {HTMLElement|null}
     */
    const $ = id => document.getElementById(id);

    /** SpeechRecognition 构造函数（可选；缺失不挡 Whisper）。 */
    const Rec = window.SpeechRecognition || window.webkitSpeechRecognition || null;
    /** 文件输入。 */
    const audioInput = $('srtAudio');
    /** 金标 HUD 根节点。 */
    const hud = $('srtHud');
    /** HUD 标题。 */
    const hudTitleEl = $('srtHudTitle');
    /** HUD 默认标题文案。 */
    const hudTitleDefault = M.hud_title || '';
    /** 空状态提示。 */
    const emptyState = $('srtEmpty');
    /** 麦克风口述 interim 区包裹。 */
    const interimWrap = $('srtInterimWrap');
    /** 麦克风次按钮。 */
    const micBtn = $('srtMic');
    /** 原音/原片播放区（有文件时显示）。 */
    const sourcePlay = $('srtSourcePlay');
    /** 原音频播放器（音频文件）。 */
    const sourceAudio = /** @type {HTMLAudioElement|null} */ ($('srtSourceAudio'));
    /** 原视频播放器（含音轨视频，便于听原声对照字幕）。 */
    const sourceVideo = /** @type {HTMLVideoElement|null} */ ($('srtSourceVideo'));

    /** 当前选中的本地文件。 */
    let audioFile = null;
    /** 原音预览用的 object URL（换文件 / 清空时须 revoke）。 */
    let sourceObjectUrl = null;
    /** 麦克风口述 cue 列表：{ start, end, text }。 */
    let cues = [];
    /** 上一条 cue 的结束时刻（秒）。 */
    let lastEnd = 0;
    /** 是否正在处理。 */
    let busy = false;
    /** HUD 已用时定时器 id。 */
    let timer = null;
    /** 本批开始时刻（performance.now）。 */
    let started = 0;
    /** 当前 Web Speech 识别实例。 */
    let recognition = null;
    /** 麦克风模式是否请求停止。 */
    let stopRequested = false;
    /** 文件 Whisper 路径的 AbortController（Stop 可中止滑窗）。 */
    let fileAbort = null;
    /** 运行模式：file（Whisper）| mic（Web Speech）。 */
    let mode = 'file';
    /** Whisper 模块缓存（createTranscriber / transcribeAudioBuffer / chunksToSrt）。 */
    let whisperMod = null;

    /**
     * 无 Web Speech 时隐藏/禁用麦克风，并显示说明；不禁用 Make SRT。
     */
    function setupMicAvailability(){
      if (Rec){
        $('srtMicUnsupported').hidden = true;
        micBtn.hidden = false;
        micBtn.disabled = false;
        return;
      }
      $('srtMicUnsupported').hidden = false;
      micBtn.hidden = true;
      micBtn.disabled = true;
      if (interimWrap) interimWrap.hidden = true;
    }
    setupMicAvailability();

    /**
     * 进页默认「自动检测」。UI 语言 ≠ 录音语种；跟 UI 预选中文会把英文样例识别成胡话。
     */
    function pickDefaultLang(){
      const sel = $('srtLang');
      if (!sel) return;
      for (let i = 0; i < sel.options.length; i++){
        if (sel.options[i].value === 'auto'){ sel.selectedIndex = i; break; }
      }
    }
    pickDefaultLang();

    /**
     * 把语言下拉设到指定 value（auto / en / zh …）。
     * @param {string} code 选项 value
     */
    function setLangSelect(code){
      const sel = $('srtLang');
      if (!sel) return;
      for (let i = 0; i < sel.options.length; i++){
        if (sel.options[i].value === code){ sel.selectedIndex = i; break; }
      }
    }

    /**
     * 占位符填充。字类必须写成 \\w。
     * @param {string} template 模板
     * @param {Record<string, string|number>} vars 替换表
     * @returns {string}
     */
    function fill(template, vars){
      return String(template || '').replace(/\\{(\\w+)\\}/g, (_, key) => (vars[key] != null ? String(vars[key]) : ''));
    }

    /**
     * 让出一帧再短延迟，先画出 HUD 再跑解码/WASM。
     * @returns {Promise<void>}
     */
    function yieldUi(){
      return new Promise(resolve => {
        /** 是否已 resolve。 */
        let done = false;
        /** 只 resolve 一次；后台标签页不触发 rAF，隐藏时走 MessageChannel，可见时 90ms 兜底。 */
        const finish = () => { if (!done){ done = true; resolve(); } };
        if (document.hidden && typeof MessageChannel === 'function'){
          const ch = new MessageChannel();
          ch.port1.onmessage = finish;
          ch.port2.postMessage(0);
          return;
        }
        requestAnimationFrame(() => setTimeout(finish, 40));
        setTimeout(finish, 90);
      });
    }

    /** 刷新空状态可见性。 */
    function refreshEmpty(){
      if (emptyState) emptyState.hidden = !!audioFile || ($('srtOut').value || '').trim().length > 0;
    }

    /**
     * 锁定/解锁主控件。
     * @param {boolean} on 是否忙碌
     */
    function lock(on){
      busy = on;
      $('srtConvert').disabled = on;
      micBtn.disabled = on || !Rec;
      $('srtSample').disabled = on;
      $('srtClear').disabled = on;
      audioInput.disabled = on;
      $('srtLang').disabled = on;
      $('srtStop').disabled = !on;
      if (on) $('srtConvert').setAttribute('aria-busy', 'true');
      else $('srtConvert').removeAttribute('aria-busy');
      if (!on) $('srtDownload').disabled = !($('srtOut').value || '').trim();
    }

    /**
     * 更新金标 HUD 百分比与步骤胶囊。
     * @param {number|null} pct 0–100；null 显示 …
     * @param {string} stepKey model|decode|transcribe|write|done
     * @param {string} [detail] 步骤说明
     * @param {string} [urlLine] 底部文件名/进度行
     */
    function progress(pct, stepKey, detail, urlLine){
      const pctEl = $('srtPct');
      const bar = $('srtBar');
      let pctText = '…';
      let width = 8;
      if (pct != null && isFinite(pct)){
        const value = Math.max(0, Math.min(100, Math.round(pct)));
        pctText = fill(M.hud_pct || '{pct}%', { pct: value });
        width = Math.max(4, value);
        bar.setAttribute('aria-valuenow', String(value));
      } else {
        bar.setAttribute('aria-valuenow', '0');
      }
      pctEl.textContent = pctText;
      bar.style.width = width + '%';
      bar.textContent = pct != null && isFinite(pct) ? pctText : '';
      const label = stepKey === 'done' ? M.done : (detail || M[stepKey] || stepKey);
      $('srtStep').textContent = label;
      if (urlLine != null) $('srtCurrent').textContent = urlLine;
      const idx = STEPS.indexOf(stepKey);
      const done = stepKey === 'done';
      hud.querySelectorAll('.bcw-hud-steps li').forEach(li => {
        const name = li.getAttribute('data-step');
        const pos = STEPS.indexOf(name);
        li.classList.toggle('is-active', !done && name === stepKey);
        li.classList.toggle('is-on', !done && name === stepKey);
        li.classList.toggle('is-done', done || (idx >= 0 && pos < idx));
      });
    }

    /**
     * 打开 HUD 并开始计时。
     * @param {string} [fileLabel] 底部文件名
     */
    function openHud(fileLabel){
      hud.hidden = false;
      hud.className = 'oft-pdf-work-progress bcw-hud is-on mb-3';
      hud.setAttribute('role', 'status');
      if (hudTitleEl) hudTitleEl.textContent = hudTitleDefault;
      $('srtCurrent').textContent = fileLabel || '';
      started = performance.now();
      const clock = () => {
        $('srtTime').textContent = fill(M.elapsed, { s: ((performance.now() - started) / 1000).toFixed(1) });
      };
      clock();
      if (timer) clearInterval(timer);
      timer = setInterval(clock, 200);
      progress(null, 'model', M.hud_working, fileLabel || '');
    }

    /** 停止 HUD 计时。 */
    function stopHudClock(){
      if (timer){ clearInterval(timer); timer = null; }
    }

    /**
     * 成功结束：留在 100%，提示下一步下载。
     */
    function finishHudOk(){
      progress(100, 'done', M.done, M.hud_next || '');
      hud.classList.remove('is-on');
      hud.classList.add('is-done');
      stopHudClock();
      if (emptyState) emptyState.hidden = true;
    }

    /**
     * 失败卡片（同等尺寸 HUD）。
     * @param {string} key 文案键或已译字符串
     */
    function fail(key){
      const hint = M[key] || key || M.failed;
      hud.hidden = false;
      hud.className = 'oft-pdf-work-progress bcw-hud is-error is-fail is-on mb-3';
      hud.setAttribute('role', 'alert');
      if (hudTitleEl) hudTitleEl.textContent = M.hud_fail_title || M.failed;
      $('srtPct').textContent = '—';
      $('srtBar').style.width = '0%';
      $('srtBar').setAttribute('aria-valuenow', '0');
      $('srtBar').textContent = '';
      $('srtStep').textContent = '';
      $('srtCurrent').textContent = hint || M.hud_fail_hint || M.failed;
      stopHudClock();
    }

    /**
     * 是否接受为候选媒体（音频或常见扩展；视频也允许，解码失败再报错）。
     * @param {File} file 用户文件
     * @returns {boolean}
     */
    function isMediaCandidate(file){
      if (!file) return false;
      if (/\\.(wav|mp3|m4a|aac|ogg|flac|opus|webm|mp4|m4v|mov|mkv|avi)$/i.test(file.name)) return true;
      const type = file.type || '';
      return type.indexOf('audio/') === 0 || type.indexOf('video/') === 0;
    }

    /**
     * 判断文件是否更宜用 video 元素播放（听原声 / 对照字幕）。
     * @param {File} file 本地文件
     * @returns {boolean}
     */
    function isVideoLike(file){
      if (!file) return false;
      if ((file.type || '').indexOf('video/') === 0) return true;
      return /\\.(mp4|m4v|mov|mkv|avi|webm)$/i.test(file.name || '');
    }

    /**
     * 停止原音预览并释放 object URL。
     */
    function clearSourcePreview(){
      try { if (sourceAudio){ sourceAudio.pause(); sourceAudio.removeAttribute('src'); sourceAudio.load(); } } catch (_) {}
      try { if (sourceVideo){ sourceVideo.pause(); sourceVideo.removeAttribute('src'); sourceVideo.load(); } } catch (_) {}
      if (sourceObjectUrl){
        try { URL.revokeObjectURL(sourceObjectUrl); } catch (_) {}
        sourceObjectUrl = null;
      }
      if (sourceAudio) sourceAudio.hidden = false;
      if (sourceVideo) sourceVideo.hidden = true;
      if (sourcePlay) sourcePlay.hidden = true;
    }

    /**
     * 为当前文件挂载原音/原片播放器（不自动播放）。
     * @param {File} file 本地媒体
     */
    function setSourcePreview(file){
      clearSourcePreview();
      if (!file || !sourcePlay || (!sourceAudio && !sourceVideo)) return;
      sourceObjectUrl = URL.createObjectURL(file);
      const useVideo = isVideoLike(file);
      if (useVideo && sourceVideo){
        if (sourceAudio) sourceAudio.hidden = true;
        sourceVideo.hidden = false;
        sourceVideo.src = sourceObjectUrl;
      } else if (sourceAudio){
        if (sourceVideo) sourceVideo.hidden = true;
        sourceAudio.hidden = false;
        sourceAudio.src = sourceObjectUrl;
      }
      sourcePlay.hidden = false;
    }

    /**
     * 选择文件（不自动跑 Whisper）。
     * @param {File|null} file 文件或清空
     */
    function chooseAudio(file){
      if (busy) return;
      stopMic();
      audioFile = null;
      audioInput.value = '';
      clearSourcePreview();
      if (!file){
        $('srtFileName').textContent = '';
        refreshEmpty();
        return;
      }
      if (!isMediaCandidate(file)){ fail('err_format'); refreshEmpty(); return; }
      if (file.size > MAX_BYTES){ fail('err_limit'); refreshEmpty(); return; }
      audioFile = file;
      $('srtFileName').textContent = fill(M.file_label, { name: file.name });
      setSourcePreview(file);
      hud.hidden = true;
      refreshEmpty();
    }

    /**
     * 秒 → SRT 时间码 HH:MM:SS,mmm（麦克风路径用）。
     * @param {number} sec 秒
     * @returns {string}
     */
    function toSrtTime(sec){
      const s = Math.max(0, Number(sec) || 0);
      const h = Math.floor(s / 3600);
      const m = Math.floor((s % 3600) / 60);
      const whole = Math.floor(s % 60);
      const ms = Math.round((s - Math.floor(s)) * 1000);
      const pad = (n, w) => String(n).padStart(w, '0');
      return pad(h, 2) + ':' + pad(m, 2) + ':' + pad(whole, 2) + ',' + pad(ms, 3);
    }

    /**
     * 把麦克风 cues 格式化为标准 SRT。
     * @param {Array<{start:number,end:number,text:string}>} list cue 列表
     * @returns {string}
     */
    function formatSrt(list){
      return list.map((c, i) => {
        const text = String(c.text || '').replace(/\\r?\\n/g, ' ').trim();
        return (i + 1) + '\\n' + toSrtTime(c.start) + ' --> ' + toSrtTime(c.end) + '\\n' + text;
      }).join('\\n\\n');
    }

    /**
     * 刷新预览、结果行与下载按钮。
     * @param {string} [body] 直接写入的 SRT；缺省用 cues
     * @param {number} [cueCount] 显示用条数
     */
    function refreshOut(body, cueCount){
      const textBody = body != null ? body : formatSrt(cues);
      $('srtOut').value = textBody;
      const text = textBody.trim();
      $('srtDownload').disabled = !text;
      $('srtResult').hidden = !text;
      if (text){
        const count = cueCount != null ? cueCount : cues.length;
        $('srtResult').textContent = fill(M.result, { cues: count, chars: text.length });
      }
      refreshEmpty();
    }

    /**
     * 读取当前语言选择 → Whisper language 全名或 undefined（auto）。
     * @returns {string|undefined}
     */
    function selectedWhisperLanguage(){
      const code = ($('srtLang') && $('srtLang').value) || 'auto';
      if (code === 'auto') return undefined;
      return WHISPER_LANG[code] || undefined;
    }

    /**
     * 读取麦克风 Web Speech 语言码。
     * @returns {string}
     */
    function selectedSpeechLang(){
      const code = ($('srtLang') && $('srtLang').value) || 'auto';
      if (code === 'auto') return SPEECH_LANG[UI_LANG] || 'en-US';
      return SPEECH_LANG[code] || 'en-US';
    }

    /**
     * 懒加载同域 Whisper 模块。
     * @returns {Promise<{createTranscriber:Function,transcribeAudioBuffer:Function,chunksToSrt:Function}>}
     */
    async function loadWhisper(){
      if (whisperMod) return whisperMod;
      whisperMod = await import(WHISPER_LOADER);
      return whisperMod;
    }

    /**
     * transformers.js 进度回调 → HUD Model 步骤。
     * @param {object} p progress_callback 数据
     */
    function onModelProgress(p){
      /* 本轮已结束或已取消：忽略迟到的模型进度，避免错误 HUD 被进度条文覆盖 */
      if (!busy || stopRequested || (fileAbort && fileAbort.signal.aborted)) return;
      if (!p || !p.status) return;
      if (p.status === 'progress' && p.file){
        const pct = p.total ? Math.round((100 * p.loaded) / p.total) : 0;
        const detail = fill(M.hud_model_progress || '{file} {pct}%', {
          file: String(p.file).split('/').pop() || p.file,
          pct: pct
        });
        progress(Math.min(34, Math.round(pct * 0.34)), 'model', detail, detail);
        $('srtLiveStatus').textContent = detail;
        return;
      }
      if (p.status === 'ready' || p.status === 'done'){
        progress(36, 'model', M.status_model, audioFile && audioFile.name || '');
      }
    }

    /**
     * 主路径：读文件 → 滑窗 Whisper → 填 SRT 预览（可 Stop 中止并保留已出句段）。
     * @returns {Promise<void>}
     */
    async function makeSrtFromFile(){
      if (busy) return;
      if (!audioFile){ fail('empty'); return; }
      stopMic();
      mode = 'file';
      stopRequested = false;
      if (fileAbort){ try { fileAbort.abort(); } catch (_) {} }
      fileAbort = typeof AbortController !== 'undefined' ? new AbortController() : null;
      cues = [];
      lastEnd = 0;
      $('srtOut').value = '';
      $('srtInterim').value = '';
      if (interimWrap) interimWrap.hidden = true;
      lock(true);
      openHud(audioFile.name || '');
      /** 滑窗过程中已累积的句段（取消时尽量保留）。 */
      let partialChunks = [];
      try {
        if (!isMediaCandidate(audioFile)) throw Error('err_format');
        if (audioFile.size > MAX_BYTES) throw Error('err_limit');

        progress(4, 'model', M.status_model, audioFile.name || '');
        await yieldUi();
        const mod = await loadWhisper();
        await mod.createTranscriber(onModelProgress, {
          signal: fileAbort ? fileAbort.signal : undefined,
          timeoutMs: 90000,
        });
        progress(38, 'model', M.status_model, audioFile.name || '');
        await yieldUi();

        progress(42, 'decode', M.status_decode, audioFile.name || '');
        await yieldUi();
        const AC = window.AudioContext || window.webkitAudioContext;
        if (!AC) throw Error('err_unsupported');
        /** Web Audio 解码上下文（用完关闭）。 */
        const audioCtx = new AC();
        /** 解码后的 AudioBuffer（转写完成后尽快丢弃引用）。 */
        let buffer;
        try {
          const ab = await audioFile.arrayBuffer();
          if (fileAbort && fileAbort.signal.aborted) throw Error('aborted');
          buffer = await audioCtx.decodeAudioData(ab.slice(0));
        } catch (e) {
          try { await audioCtx.close(); } catch (_) {}
          if (e && (e.message === 'aborted' || e.name === 'AbortError')) throw Error('aborted');
          throw Error('err_decode');
        }
        try { await audioCtx.close(); } catch (_) {}
        if (!Number.isFinite(buffer.duration) || buffer.duration <= 0) throw Error('err_decode');
        if (buffer.duration > MAX_DURATION + 0.05) throw Error('err_limit');

        progress(50, 'transcribe', M.status_transcribe, audioFile.name || '');
        await yieldUi();
        $('srtLiveStatus').textContent = M.status_transcribe;
        /** Whisper 转写选项：仅本页开启 sliding_windows，避免改公共 loader 默认行为影响 POC/他页。 */
        const asrOpts = {
          task: 'transcribe',
          condition_on_previous_text: false,
          sliding_windows: true,
          signal: fileAbort ? fileAbort.signal : undefined,
          onWindowProgress: (info) => {
            const n = (info && info.index != null ? info.index : 0) + 1;
            const total = Math.max(1, info && info.total ? info.total : 1);
            const detail = fill(M.status_transcribe_window || M.status_transcribe, { n: n, total: total });
            const pct = 50 + Math.round((38 * Math.min(n, total)) / total);
            progress(Math.min(88, pct), 'transcribe', detail, audioFile.name || '');
            $('srtLiveStatus').textContent = detail;
          }
        };
        const langName = selectedWhisperLanguage();
        if (langName) asrOpts.language = langName;
        const result = await mod.transcribeAudioBuffer(buffer, asrOpts);
        buffer = null;
        partialChunks = (result && result.chunks) || [];
        progress(88, 'write', M.status_write, audioFile.name || '');
        await yieldUi();
        const srt = mod.chunksToSrt(partialChunks);
        if (result && result.aborted){
          if (!String(srt || '').trim()) throw Error('aborted');
          refreshOut(srt, partialChunks.filter(c => String(c.text || '').trim()).length);
          $('srtLiveStatus').textContent = M.status_stopped || '';
          finishHudOk();
          return;
        }
        // 无可用句段时不要把整段纯文本塞进假的 0–2s cue（语种选错时常见胡话复读）。
        if (!String(srt || '').trim()) throw Error('err_empty_srt');
        refreshOut(srt, partialChunks.filter(c => String(c.text || '').trim()).length);
        $('srtLiveStatus').textContent = '';
        finishHudOk();
      } catch (e) {
        const msg = e && e.message ? e.message : '';
        if (msg === 'aborted' || (e && e.name === 'AbortError')){
          if (partialChunks.length){
            try {
              const mod = whisperMod || await loadWhisper();
              const srt = mod.chunksToSrt(partialChunks);
              if (String(srt || '').trim()){
                refreshOut(srt, partialChunks.filter(c => String(c.text || '').trim()).length);
                $('srtLiveStatus').textContent = M.status_stopped || '';
                finishHudOk();
                return;
              }
            } catch (_) {}
          }
          fail('status_stopped');
          $('srtLiveStatus').textContent = '';
          return;
        }
        const key = msg && M[msg] ? msg : (msg === 'Failed to fetch' ? 'err_model' : 'failed');
        fail(key);
        $('srtLiveStatus').textContent = '';
      } finally {
        fileAbort = null;
        lock(false);
      }
    }

    /**
     * 麦克风时钟（秒）：会话耗时。
     * @returns {number}
     */
    function clockSec(){
      return Math.max(0, (performance.now() - started) / 1000);
    }

    /**
     * 追加一条麦克风 final cue。
     * @param {string} text 识别文本
     */
    function pushCue(text){
      const trimmed = String(text || '').trim();
      if (!trimmed) return;
      const now = clockSec();
      let start = lastEnd;
      if (now - lastEnd > 1.5) start = Math.max(0, now - 1.2);
      const end = Math.max(start + MIN_CUE, now);
      cues.push({ start, end, text: trimmed });
      lastEnd = end;
      refreshOut();
    }

    /**
     * Web Speech 结果回调。
     * @param {SpeechRecognitionEvent} event 识别事件
     */
    function onSpeechResult(event){
      let interim = '';
      for (let i = event.resultIndex; i < event.results.length; i++){
        const r = event.results[i];
        const t = (r[0] && r[0].transcript) || '';
        if (r.isFinal) pushCue(t);
        else interim += t;
      }
      $('srtInterim').value = interim;
    }

    /**
     * 暂停原音预览（麦克风口述时避免回授；不释放 URL）。
     */
    function pauseSourcePreview(){
      try { if (sourceAudio) sourceAudio.pause(); } catch (_) {}
      try { if (sourceVideo) sourceVideo.pause(); } catch (_) {}
    }

    /** 停止麦克风识别（不关 Whisper）。 */
    function stopMic(){
      stopRequested = true;
      try { if (recognition) recognition.stop(); } catch (_) {}
      recognition = null;
      $('srtLiveStatus').textContent = '';
      $('srtInterim').value = '';
    }

    /**
     * 创建并配置 SpeechRecognition。
     * @returns {SpeechRecognition}
     */
    function createRecognition(){
      if (!Rec) throw Error('err_unsupported');
      const rec = new Rec();
      rec.continuous = true;
      rec.interimResults = true;
      rec.maxAlternatives = 1;
      rec.lang = selectedSpeechLang();
      rec.onresult = onSpeechResult;
      rec.onerror = (ev) => {
        if (ev && (ev.error === 'not-allowed' || ev.error === 'service-not-allowed')){
          fail('err_permission');
        }
      };
      return rec;
    }

    /**
     * 次路径：麦克风实时口述 → 估算时间轴 SRT。
     * @returns {Promise<void>}
     */
    async function dictateMic(){
      if (busy) return;
      if (!Rec){ fail('err_unsupported'); return; }
      pauseSourcePreview();
      stopMic();
      stopRequested = false;
      mode = 'mic';
      cues = [];
      lastEnd = 0;
      $('srtOut').value = '';
      $('srtInterim').value = '';
      if (interimWrap) interimWrap.hidden = false;
      lock(true);
      openHud('mic');
      try {
        progress(20, 'transcribe', M.status_mic, 'mic');
        recognition = createRecognition();
        $('srtLiveStatus').textContent = M.status_mic;
        recognition.onend = () => {
          if (!stopRequested && busy && mode === 'mic'){
            try { recognition.start(); } catch (_) {}
          }
        };
        recognition.start();
        progress(50, 'transcribe', M.status_mic, 'mic');
      } catch (e) {
        fail(e && M[e.message] ? e.message : 'err_permission');
        lock(false);
      }
    }

    /** 用户点 Stop：麦克风结束会话；文件路径中止滑窗/模型加载（尽量保留已出 SRT）。 */
    function userStop(){
      if (!busy) return;
      stopRequested = true;
      if (mode === 'file'){
        try { if (fileAbort) fileAbort.abort(); } catch (_) {}
        try {
          if (whisperMod && typeof whisperMod.cancelWhisperLoad === 'function') whisperMod.cancelWhisperLoad();
        } catch (_) {}
        progress(95, 'write', M.status_stopped || M.status_write, audioFile && audioFile.name || '');
        return;
      }
      if (mode !== 'mic') return;
      try { if (recognition) recognition.stop(); } catch (_) {}
      progress(95, 'write', M.status_write, 'mic');
      refreshOut();
      finishHudOk();
      stopMic();
      lock(false);
    }

    /**
     * 加载样例 WAV 并跑 Make SRT（门禁要求函数名 loadSample；进页不自动调用）。
     * @returns {Promise<void>}
     */
    async function loadSample(){
      if (busy) return;
      try {
        // 样例是英文公开演讲；先把语种锁到 en，避免中文页默认/手选中文导致胡编复读。
        setLangSelect('en');
        const res = await fetch(SAMPLE_URL, { cache: 'force-cache' });
        if (!res.ok) throw Error('err_file');
        const blob = await res.blob();
        const name = (M.sample_name || 'make-srt-subtitles-from-an-audio-file') + '.wav';
        const file = new File([blob], name, { type: blob.type || 'audio/wav' });
        chooseAudio(file);
        await makeSrtFromFile();
      } catch (_) {
        fail('err_file');
      }
    }

    /** 清空文件、预览与 HUD。 */
    function clearAll(){
      if (busy) return;
      stopMic();
      chooseAudio(null);
      cues = [];
      lastEnd = 0;
      $('srtOut').value = '';
      $('srtInterim').value = '';
      if (interimWrap) interimWrap.hidden = true;
      $('srtResult').hidden = true;
      hud.hidden = true;
      stopHudClock();
      refreshOut('');
    }

    audioInput.addEventListener('change', () => chooseAudio(audioInput.files && audioInput.files[0]));
    $('srtDrop').addEventListener('dragover', e => e.preventDefault());
    $('srtDrop').addEventListener('drop', e => {
      e.preventDefault();
      if (busy) return;
      const files = e.dataTransfer && e.dataTransfer.files;
      if (!files || files.length !== 1){ chooseAudio(null); fail('err_file'); return; }
      chooseAudio(files[0]);
    });
    $('srtConvert').addEventListener('click', makeSrtFromFile);
    micBtn.addEventListener('click', dictateMic);
    $('srtStop').addEventListener('click', userStop);
    $('srtSample').addEventListener('click', loadSample);
    $('srtClear').addEventListener('click', clearAll);
    $('srtOut').addEventListener('input', () => {
      const text = ($('srtOut').value || '').trim();
      $('srtDownload').disabled = !text;
      $('srtResult').hidden = !text;
      if (text){
        const cueCount = (text.match(/^\\d+$/gm) || []).length || cues.length || 1;
        $('srtResult').textContent = fill(M.result, { cues: cueCount, chars: text.length });
      }
      refreshEmpty();
    });
    $('srtDownload').addEventListener('click', () => {
      const text = ($('srtOut').value || '').trim();
      if (!text || busy) return;
      const blob = new Blob([text + '\\n'], { type: 'application/x-subrip;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = (audioFile && audioFile.name ? audioFile.name.replace(/\\.[^.]+$/, '') : 'subtitles') + '.srt';
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    });
    window.addEventListener('pagehide', () => { stopHudClock(); stopMic(); clearSourcePreview(); });

    /** 进页不自动 loadSample：首次模型 ~45 MB 会打坏 LCP。函数须存在供按钮与 lint。 */
  })();
</script>`;

	/** catalog 元数据。 */
	const toolMeta = getToolBySlug('make-srt-subtitles-from-an-audio-file');
	/** related 等扩展区块。 */
	const extraSectionsHtml = toolMeta
		? renderToolExtraSections({ lang: opts.lang, defaultLang: opts.defaultLang, tool: toolMeta })
		: '';
	/** WebApplication + BreadcrumbList JSON-LD。 */
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
		contentHtml: `<div dir="${opts.lang === 'ar' ? 'rtl' : 'ltr'}">${contentHtml}${igHtml}${extraSectionsHtml}${referencesHtml}</div>`,
		footerHtml,
		extraHeadHtml: `${extraHeadHtml}${toolJsonLd}`,
		extraBodyHtml,
		mainClass: 'container py-4 tool-page',
		includeSidebarToggleScript: true,
		sidebarAutoCloseSelector: '#toolNav a',
	});
};
