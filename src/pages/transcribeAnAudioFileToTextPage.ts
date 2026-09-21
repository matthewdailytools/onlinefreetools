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
const P = 'tool_transcribe_an_audio_file_to_text';

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
 * 用浏览器 SpeechRecognition 尽力把本地音频转成文字（A4）。
 * 诚实：无内置 Whisper/wasm；文件转写依赖本机识别器 + 播放/环回；否则回退麦克风口述。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderTranscribeAnAudioFileToTextPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 工具规范路径（无语言前缀）。 */
	const toolPath = '/tools/transcribe-an-audio-file-to-text';
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

	/** 侧栏占位。 */
	const sidebarHtml = renderSidebar({
		title: t(opts.lang, 'nav_tools'),
		groups: buildToolSidebarItems({
			lang: opts.lang,
			defaultLang: opts.defaultLang,
			currentSlug: 'transcribe-an-audio-file-to-text',
			currentAnchor: '#transcribe-audio',
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

	/** 内联脚本用的 UI 消息键。 */
	const uiKeys = [
		'read',
		'decode',
		'listen',
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
		'sample_name',
		'result',
		'empty',
		'file_label',
		'status_unsupported',
		'status_listening',
		'status_mic',
		'status_playing',
		'interim_label',
	];
	/** 消息字典：键 → 当前语言字符串。 */
	const messages = Object.fromEntries(uiKeys.map((key) => [key, t(opts.lang, `${P}_${key}`)]));
	/** UI 语言码，供 SpeechRecognition.lang 默认。 */
	const uiLang = opts.lang;

	/** 工具主面板与结果区 markup。 */
	const contentHtml = `
    <div id="transcribe-audio" class="tool-page-heading mb-3"><h1 class="h4">${tr('title')}</h1><p>${tr('desc')}</p></div>
    <section class="tool-panel" id="trPanel">
      <div id="trUnsupported" class="alert alert-warning mb-3" role="status" hidden>${tr('status_unsupported')}</div>
      <label class="tool-dropzone mb-3" id="trDrop" for="trAudio"><input id="trAudio" type="file" accept="audio/*,.wav,.mp3,.m4a,.aac,.ogg,.flac,audio/wav,audio/mpeg,audio/mp4"><span class="tool-dropzone-title">${tr('choose')}</span><span class="tool-dropzone-hint">${tr('hint')}</span><span id="trFileName" class="tool-dropzone-file"></span></label>
      <div class="mb-3">
        <label class="form-label" for="trLang">${tr('lang_label')}</label>
        <select id="trLang" class="form-select" style="max-width:18rem">
          <option value="en-US">en-US</option>
          <option value="zh-CN">zh-CN</option>
          <option value="es-ES">es-ES</option>
          <option value="ja-JP">ja-JP</option>
          <option value="de-DE">de-DE</option>
          <option value="fr-FR">fr-FR</option>
          <option value="pt-BR">pt-BR</option>
          <option value="id-ID">id-ID</option>
          <option value="ar-SA">ar-SA</option>
          <option value="ru-RU">ru-RU</option>
        </select>
        <p class="form-text">${tr('lang_hint')}</p>
      </div>
      <div class="tools-bar d-flex flex-wrap mb-3" style="gap:.5rem">
        <button id="trConvert" class="btn btn-primary" type="button">${tr('convert')}</button>
        <button id="trMic" class="btn btn-outline-primary" type="button">${tr('mic')}</button>
        <button id="trStop" class="btn btn-outline-danger" type="button" disabled>${tr('stop')}</button>
        <button id="trDownload" class="btn btn-outline-primary" type="button" disabled>${tr('download')}</button>
        <button id="trSample" class="btn btn-outline-secondary" type="button">${tr('sample')}</button>
        <button id="trClear" class="btn btn-outline-secondary" type="button">${tr('clear')}</button>
      </div>
      <details class="mb-3" open><summary>${tr('advanced')}</summary>
        <p class="form-text mt-2">${tr('settings_hint')}</p>
      </details>
      <div id="trHud" class="bcw-hud mb-3" role="status" aria-live="polite" hidden>
        <div class="bcw-hud-top"><div class="bcw-hud-spin" aria-hidden="true"></div><div class="bcw-hud-pct" id="trPct">0%</div><div class="bcw-hud-copy"><div class="bcw-hud-title">${tr('progress')}</div><div class="bcw-hud-step" id="trStep"></div><div class="bcw-hud-time" id="trTime"></div></div></div>
        <div class="progress" style="height:1.35rem"><div id="trBar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div><span class="bcw-hud-sheen" aria-hidden="true"></span></div>
        <ol class="bcw-hud-steps"><li data-step="read">${tr('read')}</li><li data-step="decode">${tr('decode')}</li><li data-step="listen">${tr('listen')}</li><li data-step="write">${tr('write')}</li></ol><div class="bcw-hud-url" id="trCurrent"></div>
      </div>
      <div id="trEmpty" class="tr-empty mb-3" role="status">${tr('empty_state')}</div>
      <p id="trLiveStatus" class="small text-muted mb-2" role="status" aria-live="polite"></p>
      <label class="form-label" for="trInterim">${tr('interim_label')}</label>
      <textarea id="trInterim" class="form-control mb-3" rows="2" readonly></textarea>
      <label class="form-label" for="trOut">${tr('preview')}</label>
      <textarea id="trOut" class="form-control mb-3" rows="8" spellcheck="true"></textarea>
      <p id="trResult" class="small text-muted" hidden></p>
    </section>`;

	/** How / Why / Rules / Use cases IG 块。 */
	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: P,
		mode: 'rules',
		howItemCount: 4,
		whyChooseItemCount: 4,
		ruleItemCount: 4,
		usecaseCount: 2,
	});

	/** 权威参考链接。 */
	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: 'MDN: SpeechRecognition',
				href: 'https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition',
			},
			{
				label: 'MDN: BaseAudioContext.decodeAudioData',
				href: 'https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/decodeAudioData',
			},
		],
	});

	/** 金标 HUD 与布局补充样式。 */
	const extraHeadHtml = `<style>${bcwHudCss({ hudId: 'trHud', convertBtnId: 'trConvert' })}#trHud.is-error{border-color:#b91c1c;background:#fff1f2}#trHud:not(.is-on) .bcw-hud-spin{animation:none}.tr-empty{padding:.75rem 1rem;border:1px dashed var(--border,#ced4da);border-radius:.5rem;color:var(--bs-secondary-color,#6c757d);font-size:.95rem}.site-footer nav.d-inline{display:inline-flex!important;flex-wrap:wrap;justify-content:center;max-width:100%}</style>`;

	/** 客户端转写管线（播放文件 + SpeechRecognition，或麦克风口述）。 */
	const extraBodyHtml = `<script>
  (function(){
    'use strict';
    /** 当前语言的运行时文案。 */
    const M = ${JSON.stringify(messages).replace(/</g, '\\u003c')};
    /** 页面 UI 语言。 */
    const UI_LANG = ${JSON.stringify(uiLang)};
    /**
     * 按 id 取 DOM 元素。
     * @param {string} id 元素 id
     */
    const $ = id => document.getElementById(id);
    /** SpeechRecognition 构造函数（若可用）。 */
    const Rec = window.SpeechRecognition || window.webkitSpeechRecognition || null;
    /** 音频输入。 */
    const audioInput = $('trAudio');
    /** HUD。 */
    const hud = $('trHud');
    /** 空状态。 */
    const emptyState = $('trEmpty');
    /** HUD 步骤。 */
    const STEPS = ['read','decode','listen','write'];
    /** 体积上限。 */
    const MAX_BYTES = 40 * 1024 * 1024;
    /** 时长上限（秒）。 */
    const MAX_DURATION = 180;
    /** 当前文件。 */
    let audioFile = null;
    /** 最终文本块。 */
    let finalChunks = [];
    /** 是否忙。 */
    let busy = false;
    /** 计时器。 */
    let timer = null;
    /** 开始时刻。 */
    let started = 0;
    /** 当前识别实例。 */
    let recognition = null;
    /** AudioContext。 */
    let audioCtx = null;
    /** BufferSource。 */
    let bufferSource = null;
    /** 停止标志。 */
    let stopRequested = false;
    /** 模式：file | mic。 */
    let mode = 'file';

    if (!Rec){
      $('trUnsupported').hidden = false;
      $('trConvert').disabled = true;
      $('trMic').disabled = true;
    }

    /**
     * 按 UI 语言预选识别语言。
     */
    function pickDefaultLang(){
      const map = { en:'en-US', zh:'zh-CN', es:'es-ES', ja:'ja-JP', de:'de-DE', fr:'fr-FR', pt:'pt-BR', id:'id-ID', ar:'ar-SA', ru:'ru-RU' };
      const want = map[UI_LANG] || 'en-US';
      const sel = $('trLang');
      for (let i = 0; i < sel.options.length; i++){
        if (sel.options[i].value === want){ sel.selectedIndex = i; break; }
      }
    }
    pickDefaultLang();

    /**
     * 占位符填充。
     * @param {string} template
     * @param {Record<string, string|number>} vars
     */
    function fill(template, vars){
      return String(template || '').replace(/\\{(\\w+)\\}/g, (_, key) => (vars[key] != null ? String(vars[key]) : ''));
    }
    /** 让出一帧。 */
    function yieldUi(){
      return new Promise(resolve => requestAnimationFrame(() => resolve()));
    }
    /** 刷新空状态。 */
    function refreshEmpty(){
      if (emptyState) emptyState.hidden = !!audioFile || ($('trOut').value || '').trim().length > 0;
    }
    /**
     * 锁定控件。
     * @param {boolean} on
     */
    function lock(on){
      busy = on;
      $('trConvert').disabled = on || !Rec;
      $('trMic').disabled = on || !Rec;
      $('trSample').disabled = on;
      $('trClear').disabled = on;
      audioInput.disabled = on;
      $('trLang').disabled = on;
      $('trStop').disabled = !on;
      if (!on) $('trDownload').disabled = !($('trOut').value || '').trim();
    }
    /**
     * 更新 HUD。
     * @param {number} pct
     * @param {string} stepKey
     */
    function progress(pct, stepKey){
      const value = Math.max(0, Math.min(100, Math.round(pct)));
      $('trPct').textContent = value + '%';
      $('trBar').style.width = value + '%';
      $('trBar').setAttribute('aria-valuenow', String(value));
      const label = stepKey === 'done' ? M.done : (M[stepKey] || stepKey);
      $('trStep').textContent = label;
      hud.querySelectorAll('.bcw-hud-steps li').forEach(li => {
        const name = li.getAttribute('data-step');
        li.classList.toggle('is-active', name === stepKey);
        li.classList.toggle('is-done', STEPS.indexOf(name) < STEPS.indexOf(stepKey) || stepKey === 'done');
      });
    }
    /**
     * 失败态。
     * @param {string} key
     */
    function fail(key){
      hud.hidden = false;
      hud.className = 'bcw-hud is-error is-fail mb-3';
      $('trPct').textContent = '—';
      $('trBar').style.width = '0%';
      $('trBar').setAttribute('aria-valuenow', '0');
      hud.setAttribute('role', 'alert');
      $('trStep').textContent = M[key] || M.failed;
    }
    /**
     * 是否可尝试音频。
     * @param {File} file
     */
    function isAudio(file){
      if (!file) return false;
      if (/\\.(wav|mp3|m4a|aac|ogg|flac)$/i.test(file.name)) return true;
      return !!(file.type && file.type.indexOf('audio/') === 0);
    }
    /**
     * 选择文件。
     * @param {File|null} file
     */
    function chooseAudio(file){
      if (busy) return;
      stopAll();
      audioFile = null;
      audioInput.value = '';
      if (!file){
        $('trFileName').textContent = '';
        refreshEmpty();
        return;
      }
      if (!isAudio(file)){ fail('err_format'); refreshEmpty(); return; }
      if (file.size > MAX_BYTES){ fail('err_limit'); refreshEmpty(); return; }
      audioFile = file;
      $('trFileName').textContent = fill(M.file_label, { name: file.name });
      hud.hidden = true;
      refreshEmpty();
    }
    /** 刷新结果行与下载按钮。 */
    function refreshOut(){
      const text = ($('trOut').value || '').trim();
      $('trDownload').disabled = !text;
      $('trResult').hidden = !text;
      if (text){
        $('trResult').textContent = fill(M.result, { chars: text.length, words: text.split(/\\s+/).filter(Boolean).length });
      }
      refreshEmpty();
    }
    /**
     * 把识别结果写入输出。
     * @param {SpeechRecognitionEvent} event
     */
    function onResult(event){
      let interim = '';
      for (let i = event.resultIndex; i < event.results.length; i++){
        const r = event.results[i];
        const t = (r[0] && r[0].transcript) || '';
        if (r.isFinal) finalChunks.push(t.trim());
        else interim += t;
      }
      $('trOut').value = finalChunks.filter(Boolean).join(' ').trim();
      $('trInterim').value = interim;
      refreshOut();
    }
    /** 停止播放与识别。 */
    function stopAll(){
      stopRequested = true;
      try { if (recognition) recognition.stop(); } catch (_) {}
      recognition = null;
      try { if (bufferSource) bufferSource.stop(); } catch (_) {}
      bufferSource = null;
      if (audioCtx){
        try { audioCtx.close(); } catch (_) {}
        audioCtx = null;
      }
      $('trLiveStatus').textContent = '';
      $('trInterim').value = '';
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
      rec.lang = $('trLang').value || 'en-US';
      rec.onresult = onResult;
      rec.onerror = (ev) => {
        if (ev && (ev.error === 'not-allowed' || ev.error === 'service-not-allowed')){
          fail('err_permission');
        }
      };
      return rec;
    }
    /**
     * 播放文件并通过扬声器环回尽力识别（诚实：识别器听麦克风）。
     */
    async function transcribeFile(){
      if (busy) return;
      if (!Rec){ fail('err_unsupported'); return; }
      if (!audioFile){ fail('empty'); return; }
      stopAll();
      stopRequested = false;
      mode = 'file';
      finalChunks = [];
      $('trOut').value = '';
      $('trInterim').value = '';
      lock(true);
      hud.hidden = false;
      hud.className = 'bcw-hud is-on mb-3';
      hud.setAttribute('role', 'status');
      $('trCurrent').textContent = audioFile.name || '';
      started = performance.now();
      const clock = () => {
        $('trTime').textContent = fill(M.elapsed, { s: ((performance.now() - started) / 1000).toFixed(1) });
      };
      clock();
      timer = setInterval(clock, 100);
      try {
        progress(8, 'read');
        await yieldUi();
        if (!isAudio(audioFile)) throw Error('err_format');
        if (audioFile.size > MAX_BYTES) throw Error('err_limit');
        progress(20, 'decode');
        await yieldUi();
        const AC = window.AudioContext || window.webkitAudioContext;
        if (!AC) throw Error('err_unsupported');
        audioCtx = new AC();
        let buffer;
        try {
          const ab = await audioFile.arrayBuffer();
          buffer = await audioCtx.decodeAudioData(ab.slice(0));
        } catch (_) {
          throw Error('err_decode');
        }
        if (!Number.isFinite(buffer.duration) || buffer.duration <= 0) throw Error('err_decode');
        if (buffer.duration > MAX_DURATION + 0.05) throw Error('err_limit');
        progress(40, 'listen');
        await yieldUi();
        if (audioCtx.state === 'suspended') await audioCtx.resume();
        recognition = createRecognition();
        $('trLiveStatus').textContent = M.status_playing;
        try { recognition.start(); } catch (_) { throw Error('err_unsupported'); }
        bufferSource = audioCtx.createBufferSource();
        bufferSource.buffer = buffer;
        bufferSource.connect(audioCtx.destination);
        const playDone = new Promise((resolve) => {
          bufferSource.onended = () => resolve();
        });
        bufferSource.start(0);
        const tick = setInterval(() => {
          if (!busy || !audioCtx){ clearInterval(tick); return; }
          const t = Math.min(buffer.duration, audioCtx.currentTime);
          progress(40 + Math.min(45, (t / buffer.duration) * 45), 'listen');
        }, 200);
        await playDone;
        clearInterval(tick);
        progress(90, 'write');
        await yieldUi();
        try { if (recognition) recognition.stop(); } catch (_) {}
        await new Promise(r => setTimeout(r, 400));
        refreshOut();
        if (!($('trOut').value || '').trim()){
          $('trLiveStatus').textContent = M.status_listening;
        }
        progress(100, 'done');
        hud.classList.remove('is-on');
        hud.classList.add('is-done');
        if (emptyState) emptyState.hidden = true;
      } catch (e) {
        fail(e && M[e.message] ? e.message : 'failed');
      } finally {
        clearInterval(timer);
        clock();
        stopAll();
        lock(false);
      }
    }
    /**
     * 麦克风实时口述回退路径。
     */
    async function dictateMic(){
      if (busy) return;
      if (!Rec){ fail('err_unsupported'); return; }
      stopAll();
      stopRequested = false;
      mode = 'mic';
      finalChunks = [];
      $('trOut').value = '';
      $('trInterim').value = '';
      lock(true);
      hud.hidden = false;
      hud.className = 'bcw-hud is-on mb-3';
      hud.setAttribute('role', 'status');
      $('trCurrent').textContent = 'mic';
      started = performance.now();
      const clock = () => {
        $('trTime').textContent = fill(M.elapsed, { s: ((performance.now() - started) / 1000).toFixed(1) });
      };
      clock();
      timer = setInterval(clock, 100);
      try {
        progress(15, 'listen');
        recognition = createRecognition();
        $('trLiveStatus').textContent = M.status_mic;
        recognition.onend = () => {
          if (!stopRequested && busy && mode === 'mic'){
            try { recognition.start(); } catch (_) {}
          }
        };
        recognition.start();
        progress(50, 'listen');
      } catch (e) {
        clearInterval(timer);
        fail(e && M[e.message] ? e.message : 'err_permission');
        lock(false);
      }
    }
    /** 用户点停止（麦克风模式）。 */
    function userStop(){
      if (!busy) return;
      stopRequested = true;
      try { if (recognition) recognition.stop(); } catch (_) {}
      progress(95, 'write');
      refreshOut();
      progress(100, 'done');
      hud.classList.remove('is-on');
      hud.classList.add('is-done');
      clearInterval(timer);
      stopAll();
      lock(false);
    }
    /**
     * 样例：短 WAV（无语音）；加载后提示用麦克风或自备人声文件。
     * @returns {File}
     */
    function makeSampleWav(){
      const RATE = 44100;
      const frames = Math.round(RATE * 1.2);
      const bytes = new ArrayBuffer(44 + frames * 2);
      const view = new DataView(bytes);
      const put = (at, text) => { for (let i = 0; i < text.length; i++) view.setUint8(at + i, text.charCodeAt(i)); };
      put(0, 'RIFF');
      view.setUint32(4, bytes.byteLength - 8, true);
      put(8, 'WAVE');
      put(12, 'fmt ');
      view.setUint32(16, 16, true);
      view.setUint16(20, 1, true);
      view.setUint16(22, 1, true);
      view.setUint32(24, RATE, true);
      view.setUint32(28, RATE * 2, true);
      view.setUint16(32, 2, true);
      view.setUint16(34, 16, true);
      put(36, 'data');
      view.setUint32(40, frames * 2, true);
      let at = 44;
      for (let i = 0; i < frames; i++){
        const s = Math.sin(2 * Math.PI * 440 * (i / RATE)) * 0.05;
        view.setInt16(at, Math.round(s * 32767), true);
        at += 2;
      }
      return new File([bytes], (M.sample_name || 'transcribe-sample') + '.wav', { type: 'audio/wav' });
    }
    /**
     * 加载样例并尝试文件转写路径（门禁 loadSample）。
     */
    async function loadSample(){
      if (busy) return;
      chooseAudio(makeSampleWav());
      if (Rec) await transcribeFile();
    }
    /** 清空。 */
    function clearAll(){
      if (busy) return;
      stopAll();
      chooseAudio(null);
      finalChunks = [];
      $('trOut').value = '';
      $('trInterim').value = '';
      $('trResult').hidden = true;
      hud.hidden = true;
      refreshOut();
    }
    audioInput.addEventListener('change', () => chooseAudio(audioInput.files && audioInput.files[0]));
    $('trDrop').addEventListener('dragover', e => e.preventDefault());
    $('trDrop').addEventListener('drop', e => {
      e.preventDefault();
      if (busy) return;
      const files = e.dataTransfer && e.dataTransfer.files;
      if (!files || files.length !== 1){ chooseAudio(null); fail('err_file'); return; }
      chooseAudio(files[0]);
    });
    $('trConvert').addEventListener('click', transcribeFile);
    $('trMic').addEventListener('click', dictateMic);
    $('trStop').addEventListener('click', userStop);
    $('trSample').addEventListener('click', loadSample);
    $('trClear').addEventListener('click', clearAll);
    $('trOut').addEventListener('input', refreshOut);
    $('trDownload').addEventListener('click', () => {
      const text = ($('trOut').value || '').trim();
      if (!text || busy) return;
      const blob = new Blob([text + '\\n'], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = (audioFile && audioFile.name ? audioFile.name.replace(/\\.[^.]+$/, '') : 'transcript') + '.txt';
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    });
    window.addEventListener('pagehide', () => { clearInterval(timer); stopAll(); });
  })();
</script>`;

	/** catalog 元数据。 */
	const toolMeta = getToolBySlug('transcribe-an-audio-file-to-text');
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
