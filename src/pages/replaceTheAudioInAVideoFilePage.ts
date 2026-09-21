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
const P = 'tool_replace_the_audio_in_a_video_file';

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
 * 用另一条本地音轨替换视频原声并下载成片（F7 V3）。
 * 管线：读视频+音频 → 解码音 → capture 画面（丢原音）+ MediaStream 音轨 → MediaRecorder。
 * ≠ 去音轨（V1）；≠ 仅加轨（V2）；≠ YouTube；诚实重编码限制。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderReplaceTheAudioInAVideoFilePage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 工具规范路径（无语言前缀）。 */
	const toolPath = '/tools/replace-the-audio-in-a-video-file';
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
			currentSlug: 'replace-the-audio-in-a-video-file',
			currentAnchor: '#replace-audio',
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
		'merge',
		'write',
		'done',
		'failed',
		'elapsed',
		'err_file',
		'err_format',
		'err_limit',
		'err_decode',
		'err_encoder',
		'sample_name',
		'result',
		'empty',
		'video_label',
		'audio_label',
	];
	/** 消息字典：键 → 当前语言字符串。 */
	const messages = Object.fromEntries(uiKeys.map((key) => [key, t(opts.lang, `${P}_${key}`)]));

	/** 工具主面板与结果区 markup。 */
	const contentHtml = `
    <div id="replace-audio" class="tool-page-heading mb-3"><h1 class="h4">${tr('title')}</h1><p>${tr('desc')}</p></div>
    <section class="tool-panel" id="raPanel">
      <label class="tool-dropzone mb-3" id="raVideoDrop" for="raVideo"><input id="raVideo" type="file" accept="video/*,.mp4,.webm,.mov,.m4v,video/mp4,video/webm,video/quicktime"><span class="tool-dropzone-title">${tr('choose_video')}</span><span class="tool-dropzone-hint">${tr('hint_video')}</span><span id="raVideoName" class="tool-dropzone-file"></span></label>
      <label class="tool-dropzone mb-3" id="raAudioDrop" for="raAudio"><input id="raAudio" type="file" accept="audio/*,.wav,.mp3,.m4a,.aac,.ogg,.flac,audio/wav,audio/mpeg,audio/mp4"><span class="tool-dropzone-title">${tr('choose_audio')}</span><span class="tool-dropzone-hint">${tr('hint_audio')}</span><span id="raAudioName" class="tool-dropzone-file"></span></label>
      <div class="tools-bar d-flex flex-wrap mb-3" style="gap:.5rem">
        <button id="raConvert" class="btn btn-primary" type="button">${tr('convert')}</button>
        <button id="raDownload" class="btn btn-outline-primary" type="button" disabled>${tr('download')}</button>
        <button id="raSample" class="btn btn-outline-secondary" type="button">${tr('sample')}</button>
        <button id="raClear" class="btn btn-outline-secondary" type="button">${tr('clear')}</button>
      </div>
      <details class="mb-3" open><summary>${tr('advanced')}</summary>
        <p class="form-text mt-2">${tr('settings_hint')}</p>
      </details>
      <div id="raHud" class="bcw-hud mb-3" role="status" aria-live="polite" hidden>
        <div class="bcw-hud-top"><div class="bcw-hud-spin" aria-hidden="true"></div><div class="bcw-hud-pct" id="raPct">0%</div><div class="bcw-hud-copy"><div class="bcw-hud-title">${tr('progress')}</div><div class="bcw-hud-step" id="raStep"></div><div class="bcw-hud-time" id="raTime"></div></div></div>
        <div class="progress" style="height:1.35rem"><div id="raBar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div><span class="bcw-hud-sheen" aria-hidden="true"></span></div>
        <ol class="bcw-hud-steps"><li data-step="read">${tr('read')}</li><li data-step="decode">${tr('decode')}</li><li data-step="merge">${tr('merge')}</li><li data-step="write">${tr('write')}</li></ol><div class="bcw-hud-url" id="raCurrent"></div>
      </div>
      <div id="raEmpty" class="ra-empty mb-3" role="status">${tr('empty_state')}</div>
      <div id="raOutput" hidden><h2 class="h5">${tr('preview')}</h2><p id="raResult"></p><video id="raPreview" controls preload="metadata" playsinline style="max-width:100%" aria-label="${tr('preview')}"></video></div>
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
				label: 'MDN: HTMLMediaElement.captureStream',
				href: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/captureStream',
			},
			{
				label: 'MDN: MediaRecorder',
				href: 'https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder',
			},
		],
	});

	/** 金标 HUD 与布局补充样式。 */
	const extraHeadHtml = `<style>${bcwHudCss({ hudId: 'raHud', convertBtnId: 'raConvert' })}#raHud.is-error{border-color:#b91c1c;background:#fff1f2}#raHud:not(.is-on) .bcw-hud-spin{animation:none}.ra-empty{padding:.75rem 1rem;border:1px dashed var(--border,#ced4da);border-radius:.5rem;color:var(--bs-secondary-color,#6c757d);font-size:.95rem}.site-footer nav.d-inline{display:inline-flex!important;flex-wrap:wrap;justify-content:center;max-width:100%}</style>`;

	/** 客户端换轨管线（读 → 解码 → 替换 → 写）。 */
	const extraBodyHtml = `<script>
  (function(){
    'use strict';
    /** 当前语言的运行时文案。 */
    const M = ${JSON.stringify(messages).replace(/</g, '\\u003c')};
    /**
     * 按 id 取 DOM 元素。
     * @param {string} id 元素 id
     */
    const $ = id => document.getElementById(id);
    /** 视频文件输入。 */
    const videoInput = $('raVideo');
    /** 音频文件输入。 */
    const audioInput = $('raAudio');
    /** 进度 HUD。 */
    const hud = $('raHud');
    /** 预览 video。 */
    const preview = $('raPreview');
    /** 空状态提示。 */
    const emptyState = $('raEmpty');
    /** HUD 步骤顺序。 */
    const STEPS = ['read','decode','merge','write'];
    /** 视频体积上限。 */
    const MAX_VIDEO_BYTES = 80 * 1024 * 1024;
    /** 音频体积上限。 */
    const MAX_AUDIO_BYTES = 40 * 1024 * 1024;
    /** 最大视频时长（秒）。 */
    const MAX_DURATION = 180;
    /** 当前视频 File。 */
    let videoFile = null;
    /** 当前音频 File。 */
    let audioFile = null;
    /** 源视频 object URL。 */
    let sourceVideoUrl = null;
    /** 输出 object URL。 */
    let outputUrl = null;
    /** 输出 MIME。 */
    let outMime = 'video/webm';
    /** 是否忙。 */
    let busy = false;
    /** 计时器。 */
    let timer = null;
    /** 开始时间。 */
    let started = 0;
    /**
     * 用占位符填充文案。
     * @param {string} template 模板
     * @param {Record<string, string|number>} vars 变量
     */
    function fill(template, vars){
      return String(template || '').replace(/\\{(\\w+)\\}/g, (_, key) => (vars[key] != null ? String(vars[key]) : ''));
    }
    /** 让出主线程一帧。 */
    function yieldUi(){
      return new Promise(resolve => requestAnimationFrame(() => resolve()));
    }
    /** 丢弃输出预览。 */
    function discardOut(){
      if (outputUrl){ URL.revokeObjectURL(outputUrl); outputUrl = null; }
      preview.removeAttribute('src');
      preview.load();
      $('raOutput').hidden = true;
      $('raResult').textContent = '';
      $('raDownload').disabled = true;
    }
    /** 丢弃源视频 URL。 */
    function discardSource(){
      if (sourceVideoUrl){ URL.revokeObjectURL(sourceVideoUrl); sourceVideoUrl = null; }
    }
    /** 刷新空状态可见性。 */
    function refreshEmpty(){
      if (emptyState) emptyState.hidden = !!(videoFile && audioFile);
    }
    /**
     * 锁定或解锁控件。
     * @param {boolean} on 是否锁定
     */
    function lock(on){
      busy = on;
      $('raConvert').disabled = on;
      $('raSample').disabled = on;
      $('raClear').disabled = on;
      videoInput.disabled = on;
      audioInput.disabled = on;
      if (!on) $('raDownload').disabled = !outputUrl;
    }
    /**
     * 更新 HUD。
     * @param {number} pct 百分比
     * @param {string} stepKey 步骤键
     */
    function progress(pct, stepKey){
      const value = Math.max(0, Math.min(100, Math.round(pct)));
      $('raPct').textContent = value + '%';
      $('raBar').style.width = value + '%';
      $('raBar').setAttribute('aria-valuenow', String(value));
      const label = stepKey === 'done' ? M.done : (M[stepKey] || stepKey);
      $('raStep').textContent = label;
      hud.querySelectorAll('.bcw-hud-steps li').forEach(li => {
        const name = li.getAttribute('data-step');
        li.classList.toggle('is-active', name === stepKey);
        li.classList.toggle('is-done', STEPS.indexOf(name) < STEPS.indexOf(stepKey) || stepKey === 'done');
      });
    }
    /**
     * 以错误态显示失败。
     * @param {string} key 消息键
     */
    function fail(key){
      hud.hidden = false;
      hud.className = 'bcw-hud is-error is-fail mb-3';
      $('raPct').textContent = '—';
      $('raBar').style.width = '0%';
      $('raBar').setAttribute('aria-valuenow', '0');
      hud.setAttribute('role', 'alert');
      $('raStep').textContent = M[key] || M.failed;
    }
    /**
     * 是否为可尝试的本地视频。
     * @param {File} file 候选
     */
    function isVideo(file){
      if (!file) return false;
      if (/\\.(mp4|webm|mov|m4v)$/i.test(file.name)) return true;
      return !!(file.type && file.type.indexOf('video/') === 0);
    }
    /**
     * 是否为可尝试的本地音频。
     * @param {File} file 候选
     */
    function isAudio(file){
      if (!file) return false;
      if (/\\.(wav|mp3|m4a|aac|ogg|flac)$/i.test(file.name)) return true;
      return !!(file.type && file.type.indexOf('audio/') === 0);
    }
    /**
     * 选择视频。
     * @param {File|null} file 文件
     */
    function chooseVideo(file){
      if (busy) return;
      discardOut();
      hud.hidden = true;
      videoFile = null;
      videoInput.value = '';
      if (!file){
        $('raVideoName').textContent = '';
        refreshEmpty();
        return;
      }
      if (!isVideo(file)){ fail('err_format'); refreshEmpty(); return; }
      if (file.size > MAX_VIDEO_BYTES){ fail('err_limit'); refreshEmpty(); return; }
      videoFile = file;
      $('raVideoName').textContent = fill(M.video_label, { name: file.name });
      refreshEmpty();
    }
    /**
     * 选择音频。
     * @param {File|null} file 文件
     */
    function chooseAudio(file){
      if (busy) return;
      discardOut();
      hud.hidden = true;
      audioFile = null;
      audioInput.value = '';
      if (!file){
        $('raAudioName').textContent = '';
        refreshEmpty();
        return;
      }
      if (!isAudio(file)){ fail('err_format'); refreshEmpty(); return; }
      if (file.size > MAX_AUDIO_BYTES){ fail('err_limit'); refreshEmpty(); return; }
      audioFile = file;
      $('raAudioName').textContent = fill(M.audio_label, { name: file.name });
      refreshEmpty();
    }
    /**
     * 等待 video 元数据就绪。
     * @param {HTMLVideoElement} el 元素
     * @returns {Promise<void>}
     */
    function waitMeta(el){
      return new Promise((resolve, reject) => {
        if (el.readyState >= 1 && Number.isFinite(el.duration) && el.duration > 0){ resolve(); return; }
        const onOk = () => { cleanup(); resolve(); };
        const onErr = () => { cleanup(); reject(Error('err_decode')); };
        /**
         * 移除监听。
         */
        const cleanup = () => {
          el.removeEventListener('loadedmetadata', onOk);
          el.removeEventListener('error', onErr);
        };
        el.addEventListener('loadedmetadata', onOk);
        el.addEventListener('error', onErr);
      });
    }
    /**
     * 选择 MediaRecorder 支持的含音频视频 MIME。
     * @returns {string}
     */
    function pickMime(){
      const candidates = [
        'video/webm;codecs=vp9,opus',
        'video/webm;codecs=vp8,opus',
        'video/webm;codecs=vp9',
        'video/webm;codecs=vp8',
        'video/webm',
        'video/mp4'
      ];
      if (typeof MediaRecorder === 'undefined' || !MediaRecorder.isTypeSupported) return '';
      return candidates.find(m => MediaRecorder.isTypeSupported(m)) || '';
    }
    /**
     * 用 AudioContext 解码音频文件。
     * @param {File} file 音频
     * @returns {Promise<AudioBuffer>}
     */
    async function decodeAudio(file){
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) throw Error('err_encoder');
      const ac = new AC();
      try {
        const buf = await file.arrayBuffer();
        const audioBuf = await ac.decodeAudioData(buf.slice(0));
        return { ac: ac, buffer: audioBuf };
      } catch (_) {
        try { await ac.close(); } catch (__) {}
        throw Error('err_decode');
      }
    }
    /**
     * 丢弃原音轨、挂上新音并用 MediaRecorder 写出。
     * @param {File} vFile 视频
     * @param {File} aFile 音频
     * @returns {Promise<{blob: Blob, seconds: number, mime: string}>}
     */
    function mergeVideoAudio(vFile, aFile){
      return new Promise(async (resolve, reject) => {
        if (typeof MediaRecorder === 'undefined'){ reject(Error('err_encoder')); return; }
        const mime = pickMime();
        if (!mime){ reject(Error('err_encoder')); return; }
        progress(18, 'decode');
        await yieldUi();
        let decoded;
        try {
          decoded = await decodeAudio(aFile);
        } catch (e) {
          reject(e);
          return;
        }
        const { ac, buffer } = decoded;
        const el = document.createElement('video');
        el.muted = true;
        el.playsInline = true;
        el.preload = 'auto';
        discardSource();
        sourceVideoUrl = URL.createObjectURL(vFile);
        el.src = sourceVideoUrl;
        try {
          await waitMeta(el);
        } catch (e) {
          try { await ac.close(); } catch (_) {}
          reject(Error('err_decode'));
          return;
        }
        const duration = el.duration;
        if (!Number.isFinite(duration) || duration <= 0){
          try { await ac.close(); } catch (_) {}
          reject(Error('err_decode'));
          return;
        }
        if (duration > MAX_DURATION + 0.05){
          try { await ac.close(); } catch (_) {}
          reject(Error('err_limit'));
          return;
        }
        progress(35, 'merge');
        await yieldUi();
        /** @type {MediaStream|null} */
        let captured = null;
        try {
          if (typeof el.captureStream === 'function') captured = el.captureStream();
          else if (typeof el.mozCaptureStream === 'function') captured = el.mozCaptureStream();
        } catch (_) {
          captured = null;
        }
        if (!captured || !captured.getVideoTracks().length){
          try { await ac.close(); } catch (_) {}
          reject(Error('err_encoder'));
          return;
        }
        captured.getAudioTracks().forEach(track => {
          try { track.stop(); } catch (_) {}
          try { captured.removeTrack(track); } catch (_) {}
        });
        const dest = ac.createMediaStreamDestination();
        const src = ac.createBufferSource();
        src.buffer = buffer;
        const gain = ac.createGain();
        gain.gain.value = 0.9;
        src.connect(gain);
        gain.connect(dest);
        const combined = new MediaStream([
          ...captured.getVideoTracks(),
          ...dest.stream.getAudioTracks()
        ]);
        progress(45, 'merge');
        await yieldUi();
        const chunks = [];
        let rec;
        try {
          rec = new MediaRecorder(combined, { mimeType: mime });
        } catch (_) {
          combined.getTracks().forEach(t => { try { t.stop(); } catch (__) {} });
          try { await ac.close(); } catch (__) {}
          reject(Error('err_encoder'));
          return;
        }
        rec.ondataavailable = ev => { if (ev.data && ev.data.size) chunks.push(ev.data); };
        rec.onerror = () => {
          combined.getTracks().forEach(t => { try { t.stop(); } catch (_) {} });
          try { ac.close(); } catch (_) {}
          reject(Error('err_encoder'));
        };
        rec.onstop = () => {
          combined.getTracks().forEach(t => { try { t.stop(); } catch (_) {} });
          captured.getTracks().forEach(t => { try { t.stop(); } catch (_) {} });
          try { ac.close(); } catch (_) {}
          const blob = new Blob(chunks, { type: mime.split(';')[0] || 'video/webm' });
          if (!blob.size){ reject(Error('err_encoder')); return; }
          resolve({ blob: blob, seconds: duration, mime: blob.type || mime });
        };
        try {
          el.currentTime = 0;
          await el.play();
          if (ac.state === 'suspended') await ac.resume();
          src.start(0);
        } catch (_) {
          combined.getTracks().forEach(t => { try { t.stop(); } catch (__) {} });
          try { await ac.close(); } catch (__) {}
          reject(Error('err_decode'));
          return;
        }
        rec.start(200);
        const stopAt = Math.max(200, Math.ceil(duration * 1000) + 280);
        const tick = setInterval(() => {
          if (!busy){ clearInterval(tick); return; }
          const pct = 45 + Math.min(40, (el.currentTime / duration) * 40);
          progress(pct, 'merge');
        }, 200);
        setTimeout(() => {
          clearInterval(tick);
          try { el.pause(); } catch (_) {}
          try { src.stop(); } catch (_) {}
          try { if (rec.state !== 'inactive') rec.stop(); } catch (_) { reject(Error('err_encoder')); }
        }, stopAt);
      });
    }
    /** 主流程：Read → Decode → Replace → Write。 */
    async function addAudio(){
      if (busy) return;
      if (!videoFile || !audioFile){ fail('empty'); return; }
      discardOut();
      lock(true);
      hud.hidden = false;
      hud.className = 'bcw-hud is-on mb-3';
      hud.setAttribute('role', 'status');
      $('raCurrent').textContent = (videoFile.name || '') + ' + ' + (audioFile.name || '');
      started = performance.now();
      const clock = () => {
        $('raTime').textContent = fill(M.elapsed, { s: ((performance.now() - started) / 1000).toFixed(1) });
      };
      clock();
      timer = setInterval(clock, 100);
      try {
        progress(6, 'read');
        await yieldUi();
        if (!isVideo(videoFile) || !isAudio(audioFile)) throw Error('err_format');
        if (videoFile.size > MAX_VIDEO_BYTES || audioFile.size > MAX_AUDIO_BYTES) throw Error('err_limit');
        const result = await mergeVideoAudio(videoFile, audioFile);
        progress(90, 'write');
        await yieldUi();
        outMime = result.mime || 'video/webm';
        outputUrl = URL.createObjectURL(result.blob);
        preview.src = outputUrl;
        $('raOutput').hidden = false;
        $('raResult').textContent = fill(M.result, {
          seconds: result.seconds.toFixed(2),
          mime: outMime,
          output: (result.blob.size / 1024).toFixed(1)
        });
        progress(100, 'done');
        hud.classList.remove('is-on');
        hud.classList.add('is-done');
        if (emptyState) emptyState.hidden = true;
      } catch (e) {
        discardOut();
        fail(e && M[e.message] ? e.message : 'failed');
      } finally {
        clearInterval(timer);
        clock();
        lock(false);
      }
    }
    /**
     * 合成带旧音的样例视频与新音调，演示替换。
     * @returns {Promise<{video: File, audio: File}>}
     */
    function makeSamplePair(){
      return new Promise(async (resolve, reject) => {
        if (typeof MediaRecorder === 'undefined' || !HTMLCanvasElement.prototype.captureStream){
          reject(Error('err_encoder'));
          return;
        }
        const canvas = document.createElement('canvas');
        canvas.width = 160;
        canvas.height = 120;
        const c2d = canvas.getContext('2d');
        if (!c2d){ reject(Error('err_encoder')); return; }
        c2d.fillStyle = '#1e3a8a';
        c2d.fillRect(0, 0, 160, 120);
        c2d.fillStyle = '#bfdbfe';
        c2d.font = '14px sans-serif';
        c2d.fillText('swap', 58, 66);
        /** 样例视频带旧音（低频），再换成新音（高频）以演示替换。 */
        const AC = window.AudioContext || window.webkitAudioContext;
        if (!AC){ reject(Error('err_encoder')); return; }
        const ac = new AC();
        const oldOsc = ac.createOscillator();
        oldOsc.frequency.value = 220;
        const oldGain = ac.createGain();
        oldGain.gain.value = 0.18;
        const oldDest = ac.createMediaStreamDestination();
        oldOsc.connect(oldGain);
        oldGain.connect(oldDest);
        const canvasStream = canvas.captureStream(10);
        const videoStream = new MediaStream([
          ...canvasStream.getVideoTracks(),
          ...oldDest.stream.getAudioTracks()
        ]);
        const mimeCandidates = [
          'video/webm;codecs=vp8,opus',
          'video/webm;codecs=vp9,opus',
          'video/webm;codecs=vp8',
          'video/webm;codecs=vp9',
          'video/webm'
        ];
        const mime = mimeCandidates.find(m => MediaRecorder.isTypeSupported(m)) || '';
        if (!mime){
          try { await ac.close(); } catch (_) {}
          reject(Error('err_encoder'));
          return;
        }
        const vRec = new MediaRecorder(videoStream, { mimeType: mime });
        const vChunks = [];
        vRec.ondataavailable = ev => { if (ev.data && ev.data.size) vChunks.push(ev.data); };
        const videoDone = new Promise((res, rej) => {
          vRec.onerror = () => rej(Error('err_encoder'));
          vRec.onstop = () => {
            videoStream.getTracks().forEach(t => { try { t.stop(); } catch (_) {} });
            canvasStream.getTracks().forEach(t => { try { t.stop(); } catch (_) {} });
            try { oldOsc.stop(); } catch (_) {}
            try { ac.close(); } catch (_) {}
            const blob = new Blob(vChunks, { type: 'video/webm' });
            if (!blob.size){ rej(Error('err_encoder')); return; }
            res(new File([blob], (M.sample_name || 'replace-audio-sample') + '.webm', { type: 'video/webm' }));
          };
        });
        try {
          if (ac.state === 'suspended') await ac.resume();
          oldOsc.start(0);
        } catch (_) {
          try { await ac.close(); } catch (__) {}
          reject(Error('err_encoder'));
          return;
        }
        vRec.start(100);
        setTimeout(() => { try { vRec.stop(); } catch (_) { reject(Error('err_encoder')); } }, 1400);

        /**
         * 写一段指定频率的短正弦 WAV。
         * @param {number} hz 频率
         * @param {string} name 文件名
         * @returns {File}
         */
        function makeToneWav(hz, name){
          const RATE = 44100;
          const frames = Math.round(RATE * 1.2);
          const data = new Float32Array(frames);
          for (let i = 0; i < frames; i++){
            data[i] = Math.sin(2 * Math.PI * hz * (i / RATE)) * 0.2;
          }
          const bytes = new ArrayBuffer(44 + frames * 2);
          const view = new DataView(bytes);
          /**
           * 写入 ASCII。
           * @param {number} at 偏移
           * @param {string} text 文本
           */
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
            const sample = Math.max(-1, Math.min(1, data[i]));
            view.setInt16(at, Math.round(sample * (sample < 0 ? 32768 : 32767)), true);
            at += 2;
          }
          return new File([bytes], name, { type: 'audio/wav' });
        }
        /** 新音轨：更高音调，替换样例视频里的旧音。 */
        const audioFileOut = makeToneWav(660, (M.sample_name || 'replace-audio-sample') + '.wav');
        try {
          const videoOut = await videoDone;
          resolve({ video: videoOut, audio: audioFileOut });
        } catch (e) {
          reject(e);
        }
      });
    }
    /**
     * 加载样例并运行换轨（门禁要求存在 loadSample）。
     */
    async function loadSample(){
      if (busy) return;
      try {
        const pair = await makeSamplePair();
        chooseVideo(pair.video);
        chooseAudio(pair.audio);
        await addAudio();
      } catch (e) {
        chooseVideo(null);
        chooseAudio(null);
        fail(e && M[e.message] ? e.message : 'failed');
      }
    }
    /** 清空视频与新音轨选择。 */
    function clearAll(){
      if (busy) return;
      chooseVideo(null);
      chooseAudio(null);
      discardSource();
      hud.hidden = true;
    }
    videoInput.addEventListener('change', () => chooseVideo(videoInput.files && videoInput.files[0]));
    audioInput.addEventListener('change', () => chooseAudio(audioInput.files && audioInput.files[0]));
    $('raVideoDrop').addEventListener('dragover', event => event.preventDefault());
    $('raVideoDrop').addEventListener('drop', event => {
      event.preventDefault();
      if (busy) return;
      const files = event.dataTransfer && event.dataTransfer.files;
      if (!files || files.length !== 1){ chooseVideo(null); fail('err_file'); return; }
      chooseVideo(files[0]);
    });
    $('raAudioDrop').addEventListener('dragover', event => event.preventDefault());
    $('raAudioDrop').addEventListener('drop', event => {
      event.preventDefault();
      if (busy) return;
      const files = event.dataTransfer && event.dataTransfer.files;
      if (!files || files.length !== 1){ chooseAudio(null); fail('err_file'); return; }
      chooseAudio(files[0]);
    });
    $('raConvert').addEventListener('click', addAudio);
    $('raSample').addEventListener('click', loadSample);
    $('raClear').addEventListener('click', clearAll);
    $('raDownload').addEventListener('click', () => {
      if (!outputUrl || busy) return;
      const ext = (outMime.indexOf('mp4') >= 0) ? 'mp4' : 'webm';
      const link = document.createElement('a');
      link.href = outputUrl;
      link.download = (videoFile && videoFile.name ? videoFile.name.replace(/\\.[^.]+$/, '') : 'replaced') + '-replaced-audio.' + ext;
      document.body.appendChild(link);
      link.click();
      link.remove();
    });
    window.addEventListener('pagehide', () => {
      clearInterval(timer);
      discardOut();
      discardSource();
    });
  })();
</script>`;

	/** catalog 元数据。 */
	const toolMeta = getToolBySlug('replace-the-audio-in-a-video-file');
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
