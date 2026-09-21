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
const P = 'tool_mix_a_voiceover_with_background_music';

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
 * 将口播与背景音乐叠加混音并导出 16-bit WAV（F7 M1）。
 * 管线：双文件读 → decodeAudioData → 采样率/声道对齐 → 增益 + 可选闪避 → 叠混 → 写 WAV。
 * ≠ 首尾相接（A2）；≠ 交叉淡化（M2）；≠ 视频抽音（A1）。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderMixAVoiceoverWithBackgroundMusicPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 工具规范路径（无语言前缀）。 */
	const toolPath = '/tools/mix-a-voiceover-with-background-music';
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

	/** 侧栏占位（边缘注入真实 chrome）。 */
	const sidebarHtml = renderSidebar({
		title: t(opts.lang, 'nav_tools'),
		groups: buildToolSidebarItems({
			lang: opts.lang,
			defaultLang: opts.defaultLang,
			currentSlug: 'mix-a-voiceover-with-background-music',
			currentAnchor: '#mix-voiceover',
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

	/** 内联脚本用的 UI 消息键（未经 HTML 转义，由 JSON.stringify 注入）。 */
	const uiKeys = [
		'read',
		'decode',
		'mix',
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
		'voice_label',
		'bed_label',
	];
	/** 消息字典：键 → 当前语言字符串。 */
	const messages = Object.fromEntries(uiKeys.map((key) => [key, t(opts.lang, `${P}_${key}`)]));

	/** 工具主面板与结果区 markup。 */
	const contentHtml = `
    <div id="mix-voiceover" class="tool-page-heading mb-3"><h1 class="h4">${tr('title')}</h1><p>${tr('desc')}</p></div>
    <section class="tool-panel" id="mvPanel">
      <label class="tool-dropzone mb-2" id="mvVoiceDrop" for="mvVoice"><input id="mvVoice" type="file" accept=".wav,.mp3,.m4a,.aac,.ogg,audio/*"><span class="tool-dropzone-title">${tr('choose_voice')}</span><span class="tool-dropzone-hint">${tr('hint_voice')}</span><span id="mvVoiceName" class="tool-dropzone-file"></span></label>
      <label class="tool-dropzone mb-3" id="mvBedDrop" for="mvBed"><input id="mvBed" type="file" accept=".wav,.mp3,.m4a,.aac,.ogg,audio/*"><span class="tool-dropzone-title">${tr('choose_bed')}</span><span class="tool-dropzone-hint">${tr('hint_bed')}</span><span id="mvBedName" class="tool-dropzone-file"></span></label>
      <div class="mb-2">
        <label class="form-label" for="mvVoiceGain">${tr('voice_gain')} <span id="mvVoiceGainVal">100%</span></label>
        <input id="mvVoiceGain" class="form-range" type="range" min="0" max="150" value="100" step="1">
      </div>
      <div class="mb-2">
        <label class="form-label" for="mvBedGain">${tr('bed_gain')} <span id="mvBedGainVal">40%</span></label>
        <input id="mvBedGain" class="form-range" type="range" min="0" max="150" value="40" step="1">
      </div>
      <div class="form-check mb-3">
        <input class="form-check-input" type="checkbox" id="mvDuck">
        <label class="form-check-label" for="mvDuck">${tr('duck')}</label>
        <p class="form-text mb-0">${tr('duck_hint')}</p>
      </div>
      <div class="tools-bar d-flex flex-wrap mb-3" style="gap:.5rem">
        <button id="mvConvert" class="btn btn-primary" type="button">${tr('convert')}</button>
        <button id="mvDownload" class="btn btn-outline-primary" type="button" disabled>${tr('download')}</button>
        <button id="mvSample" class="btn btn-outline-secondary" type="button">${tr('sample')}</button>
        <button id="mvClear" class="btn btn-outline-secondary" type="button">${tr('clear')}</button>
      </div>
      <details class="mb-3" open><summary>${tr('advanced')}</summary>
        <p class="form-text mt-2">${tr('settings_hint')}</p>
      </details>
      <div id="mvHud" class="bcw-hud mb-3" role="status" aria-live="polite" hidden>
        <div class="bcw-hud-top"><div class="bcw-hud-spin" aria-hidden="true"></div><div class="bcw-hud-pct" id="mvPct">0%</div><div class="bcw-hud-copy"><div class="bcw-hud-title">${tr('progress')}</div><div class="bcw-hud-step" id="mvStep"></div><div class="bcw-hud-time" id="mvTime"></div></div></div>
        <div class="progress" style="height:1.35rem"><div id="mvBar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div><span class="bcw-hud-sheen" aria-hidden="true"></span></div>
        <ol class="bcw-hud-steps"><li data-step="read">${tr('read')}</li><li data-step="decode">${tr('decode')}</li><li data-step="mix">${tr('mix')}</li><li data-step="write">${tr('write')}</li></ol><div class="bcw-hud-url" id="mvCurrent"></div>
      </div>
      <div id="mvEmpty" class="mv-empty mb-3" role="status">${tr('empty_state')}</div>
      <div id="mvOutput" hidden><h2 class="h5">${tr('preview')}</h2><p id="mvResult"></p><audio id="mvAudio" controls preload="metadata" style="max-width:100%" aria-label="${tr('preview')}"></audio></div>
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
				label: 'MDN: AudioBuffer',
				href: 'https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer',
			},
			{
				label: 'MDN: OfflineAudioContext',
				href: 'https://developer.mozilla.org/en-US/docs/Web/API/OfflineAudioContext',
			},
		],
	});

	/** 金标 HUD 与布局补充样式。 */
	const extraHeadHtml = `<style>${bcwHudCss({ hudId: 'mvHud', convertBtnId: 'mvConvert' })}#mvHud.is-error{border-color:#b91c1c;background:#fff1f2}#mvHud:not(.is-on) .bcw-hud-spin{animation:none}.mv-empty{padding:.75rem 1rem;border:1px dashed var(--border,#ced4da);border-radius:.5rem;color:var(--bs-secondary-color,#6c757d);font-size:.95rem}.site-footer nav.d-inline{display:inline-flex!important;flex-wrap:wrap;justify-content:center;max-width:100%}</style>`;

	/** 客户端叠混管线（读 → 解码 → 增益/闪避混音 → 写 WAV）。 */
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
    /** 口播文件输入。 */
    const voiceInput = $('mvVoice');
    /** 垫乐文件输入。 */
    const bedInput = $('mvBed');
    /** 口播增益滑杆。 */
    const voiceGainEl = $('mvVoiceGain');
    /** 垫乐增益滑杆。 */
    const bedGainEl = $('mvBedGain');
    /** 闪避开关。 */
    const duckEl = $('mvDuck');
    /** 进度 HUD。 */
    const hud = $('mvHud');
    /** 预览 audio。 */
    const audio = $('mvAudio');
    /** 空状态提示。 */
    const emptyState = $('mvEmpty');
    /** HUD 步骤顺序。 */
    const STEPS = ['read','decode','mix','write'];
    /** 单文件体积上限（字节）。 */
    const MAX_BYTES = 40 * 1024 * 1024;
    /** 混音后最大时长（秒）。 */
    const MAX_DURATION = 1200;
    /** 口播 File。 */
    let voiceFile = null;
    /** 垫乐 File。 */
    let bedFile = null;
    /** 输出 object URL。 */
    let outputUrl = null;
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
    /** 让出主线程一帧，刷新 HUD。 */
    function yieldUi(){
      return new Promise(resolve => requestAnimationFrame(() => resolve()));
    }
    /** 同步增益百分比标签。 */
    function syncGainLabels(){
      $('mvVoiceGainVal').textContent = String(voiceGainEl.value) + '%';
      $('mvBedGainVal').textContent = String(bedGainEl.value) + '%';
    }
    /** 丢弃旧输出。 */
    function discard(){
      if (outputUrl){ URL.revokeObjectURL(outputUrl); outputUrl = null; }
      audio.removeAttribute('src');
      audio.load();
      $('mvOutput').hidden = true;
      $('mvResult').textContent = '';
      $('mvDownload').disabled = true;
    }
    /**
     * 锁定或解锁控件。
     * @param {boolean} on 是否锁定
     */
    function lock(on){
      busy = on;
      $('mvConvert').disabled = on;
      $('mvSample').disabled = on;
      $('mvClear').disabled = on;
      voiceInput.disabled = on;
      bedInput.disabled = on;
      voiceGainEl.disabled = on;
      bedGainEl.disabled = on;
      duckEl.disabled = on;
      if (!on) $('mvDownload').disabled = !outputUrl;
    }
    /**
     * 更新 HUD 百分比与步骤高亮。
     * @param {number} pct 百分比
     * @param {string} stepKey 步骤键或 done
     */
    function progress(pct, stepKey){
      const value = Math.max(0, Math.min(100, Math.round(pct)));
      $('mvPct').textContent = value + '%';
      $('mvBar').style.width = value + '%';
      $('mvBar').setAttribute('aria-valuenow', String(value));
      const label = stepKey === 'done' ? M.done : (M[stepKey] || stepKey);
      $('mvStep').textContent = label;
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
      $('mvPct').textContent = '—';
      $('mvBar').style.width = '0%';
      $('mvBar').setAttribute('aria-valuenow', '0');
      hud.setAttribute('role', 'alert');
      $('mvStep').textContent = M[key] || M.failed;
    }
    /**
     * 是否为浏览器可尝试解码的常见音频。
     * @param {File} file 候选文件
     */
    function isAudio(file){
      return file && (/\\.(wav|mp3|m4a|aac|ogg)$/i.test(file.name) || (file.type && file.type.indexOf('audio/') === 0));
    }
    /** 刷新文件名与空状态。 */
    function renderMeta(){
      $('mvVoiceName').textContent = voiceFile ? fill(M.voice_label, { name: voiceFile.name }) : '';
      $('mvBedName').textContent = bedFile ? fill(M.bed_label, { name: bedFile.name }) : '';
      if (emptyState) emptyState.hidden = !!(voiceFile && bedFile);
    }
    /**
     * 设置口播或垫乐文件。
     * @param {'voice'|'bed'} which 槽位
     * @param {File|null} file 文件
     */
    function setFile(which, file){
      if (busy) return;
      discard();
      hud.hidden = true;
      if (file){
        if (!isAudio(file)){ fail('err_format'); return; }
        if (file.size > MAX_BYTES){ fail('err_limit'); return; }
      }
      if (which === 'voice') voiceFile = file;
      else bedFile = file;
      renderMeta();
    }
    /** 清空双轨与输出。 */
    function clearAll(){
      if (busy) return;
      voiceFile = null;
      bedFile = null;
      voiceInput.value = '';
      bedInput.value = '';
      discard();
      hud.hidden = true;
      renderMeta();
    }
    /**
     * 将 AudioBuffer 重采样到目标采样率并规范为 1–2 声道。
     * @param {AudioBuffer} buffer 源缓冲
     * @param {number} targetRate 目标采样率
     * @param {number} targetCh 目标声道数（1 或 2）
     * @returns {Promise<AudioBuffer>}
     */
    async function alignBuffer(buffer, targetRate, targetCh){
      const ch = Math.min(2, Math.max(1, targetCh));
      const rate = Math.round(targetRate);
      const frames = Math.max(1, Math.ceil(buffer.duration * rate));
      const Offline = window.OfflineAudioContext || window.webkitOfflineAudioContext;
      if (!Offline) throw Error('err_decode');
      const ctx = new Offline(ch, frames, rate);
      const src = ctx.createBufferSource();
      let playBuf = buffer;
      if (buffer.numberOfChannels !== ch || Math.round(buffer.sampleRate) !== rate){
        const tmp = ctx.createBuffer(ch, buffer.length, buffer.sampleRate);
        for (let c = 0; c < ch; c++){
          const srcCh = buffer.getChannelData(Math.min(c, buffer.numberOfChannels - 1));
          tmp.copyToChannel(srcCh, c);
        }
        playBuf = tmp;
      }
      src.buffer = playBuf;
      src.connect(ctx.destination);
      src.start(0);
      return ctx.startRendering();
    }
    /**
     * 将 float 声道写成 16-bit little-endian PCM WAV。
     * @param {Float32Array[]} channels 声道样本
     * @param {number} rate 采样率 Hz
     * @returns {Blob}
     */
    function writeWav(channels, rate){
      const ch = channels.length;
      const frames = channels[0].length;
      const blockAlign = ch * 2;
      const dataBytes = frames * blockAlign;
      const bytes = new ArrayBuffer(44 + dataBytes);
      const view = new DataView(bytes);
      /**
       * 写入 ASCII 标记。
       * @param {number} at 偏移
       * @param {string} text 四字符
       */
      const put = (at, text) => { for (let i = 0; i < text.length; i++) view.setUint8(at + i, text.charCodeAt(i)); };
      put(0, 'RIFF');
      view.setUint32(4, bytes.byteLength - 8, true);
      put(8, 'WAVE');
      put(12, 'fmt ');
      view.setUint32(16, 16, true);
      view.setUint16(20, 1, true);
      view.setUint16(22, ch, true);
      view.setUint32(24, rate, true);
      view.setUint32(28, rate * blockAlign, true);
      view.setUint16(32, blockAlign, true);
      view.setUint16(34, 16, true);
      put(36, 'data');
      view.setUint32(40, dataBytes, true);
      let at = 44;
      for (let i = 0; i < frames; i++){
        for (let c = 0; c < ch; c++){
          const sample = Number.isFinite(channels[c][i]) ? Math.max(-1, Math.min(1, channels[c][i])) : 0;
          view.setInt16(at, Math.round(sample * (sample < 0 ? 32768 : 32767)), true);
          at += 2;
        }
      }
      return new Blob([bytes], { type: 'audio/wav' });
    }
    /**
     * 合成短纯音 WAV File（样例用）。
     * @param {number} freqHz 频率
     * @param {number} seconds 时长
     * @param {number} amp 振幅
     * @param {string} name 文件名
     * @returns {File}
     */
    function makeToneWav(freqHz, seconds, amp, name){
      const rate = 44100;
      const frames = Math.round(rate * seconds);
      const data = new Float32Array(frames);
      for (let i = 0; i < frames; i++){
        const t = i / rate;
        const env = t < 0.02 ? t / 0.02 : (t > seconds - 0.04 ? Math.max(0, (seconds - t) / 0.04) : 1);
        data[i] = Math.sin(2 * Math.PI * freqHz * t) * amp * env;
      }
      const blob = writeWav([data], rate);
      return new File([blob], name, { type: 'audio/wav' });
    }
    /**
     * 解码单个音频文件。
     * @param {File} file 源文件
     * @returns {Promise<AudioBuffer>}
     */
    async function decodeFile(file){
      const Offline = window.OfflineAudioContext || window.webkitOfflineAudioContext;
      if (!Offline) throw Error('err_decode');
      const bytes = await file.arrayBuffer();
      try {
        return await new Offline(1, 1, 44100).decodeAudioData(bytes.slice(0));
      } catch (e) {
        throw Error('err_decode');
      }
    }
    /**
     * 简易能量闪避：按窗口根据口播 RMS 压低垫乐增益。
     * @param {Float32Array} voiceMono 口播单声道
     * @param {number} frames 总帧数
     * @returns {Float32Array} 每帧垫乐倍率（0.25–1）
     */
    function duckCurve(voiceMono, frames){
      const win = 1024;
      const curve = new Float32Array(frames);
      for (let i = 0; i < frames; i += win){
        let sum = 0;
        const end = Math.min(frames, i + win);
        for (let j = i; j < end; j++){
          const s = voiceMono[j] || 0;
          sum += s * s;
        }
        const rms = Math.sqrt(sum / Math.max(1, end - i));
        const factor = rms > 0.04 ? 0.28 : (rms > 0.015 ? 0.55 : 1);
        for (let j = i; j < end; j++) curve[j] = factor;
      }
      return curve;
    }
    /** 主混音：Read → Decode → Mix → Write。 */
    async function mix(){
      if (busy) return;
      if (!voiceFile || !bedFile){ fail('empty'); return; }
      discard();
      lock(true);
      hud.hidden = false;
      hud.className = 'bcw-hud is-on mb-3';
      hud.setAttribute('role', 'status');
      $('mvCurrent').textContent = (voiceFile.name || 'voice') + ' + ' + (bedFile.name || 'bed');
      started = performance.now();
      const clock = () => {
        $('mvTime').textContent = fill(M.elapsed, { s: ((performance.now() - started) / 1000).toFixed(1) });
      };
      clock();
      timer = setInterval(clock, 100);
      try {
        progress(4, 'read');
        await yieldUi();
        if (!isAudio(voiceFile) || !isAudio(bedFile)) throw Error('err_format');
        if (voiceFile.size > MAX_BYTES || bedFile.size > MAX_BYTES) throw Error('err_limit');
        progress(20, 'decode');
        await yieldUi();
        const voiceBuf = await decodeFile(voiceFile);
        progress(40, 'decode');
        await yieldUi();
        const bedBuf = await decodeFile(bedFile);
        if (!voiceBuf || !voiceBuf.length || !bedBuf || !bedBuf.length) throw Error('err_decode');
        progress(55, 'mix');
        await yieldUi();
        const targetRate = Math.round(voiceBuf.sampleRate) || 44100;
        const targetCh = Math.min(2, Math.max(1, Math.max(voiceBuf.numberOfChannels, bedBuf.numberOfChannels) >= 2 ? 2 : 1));
        const voiceAligned = await alignBuffer(voiceBuf, targetRate, targetCh);
        const bedAligned = await alignBuffer(bedBuf, targetRate, targetCh);
        const frames = Math.max(voiceAligned.length, bedAligned.length);
        if (frames / targetRate > MAX_DURATION + 0.01) throw Error('err_limit');
        const vGain = Math.max(0, Number(voiceGainEl.value) || 0) / 100;
        const bGain = Math.max(0, Number(bedGainEl.value) || 0) / 100;
        const useDuck = !!duckEl.checked;
        /** 口播单声道能量参考。 */
        const voiceMono = new Float32Array(frames);
        for (let i = 0; i < voiceAligned.length; i++){
          let s = 0;
          for (let c = 0; c < voiceAligned.numberOfChannels; c++) s += voiceAligned.getChannelData(c)[i];
          voiceMono[i] = s / voiceAligned.numberOfChannels;
        }
        const duck = useDuck ? duckCurve(voiceMono, frames) : null;
        const channels = [];
        for (let c = 0; c < targetCh; c++){
          const out = new Float32Array(frames);
          const vCh = voiceAligned.getChannelData(Math.min(c, voiceAligned.numberOfChannels - 1));
          const bCh = bedAligned.getChannelData(Math.min(c, bedAligned.numberOfChannels - 1));
          for (let i = 0; i < frames; i++){
            const v = i < vCh.length ? vCh[i] * vGain : 0;
            const bedMul = duck ? duck[i] : 1;
            const b = i < bCh.length ? bCh[i] * bGain * bedMul : 0;
            out[i] = Math.max(-1, Math.min(1, v + b));
          }
          channels.push(out);
        }
        progress(84, 'write');
        await yieldUi();
        const blob = writeWav(channels, targetRate);
        if (!blob.size) throw Error('err_encoder');
        outputUrl = URL.createObjectURL(blob);
        audio.src = outputUrl;
        $('mvOutput').hidden = false;
        $('mvResult').textContent = fill(M.result, {
          seconds: (frames / targetRate).toFixed(2),
          channels: targetCh,
          rate: targetRate,
          voice: voiceGainEl.value,
          bed: bedGainEl.value,
          output: (blob.size / 1024).toFixed(1)
        });
        progress(100, 'done');
        hud.classList.remove('is-on');
        hud.classList.add('is-done');
        if (emptyState) emptyState.hidden = true;
      } catch (e) {
        discard();
        fail(e && M[e.message] ? e.message : 'failed');
      } finally {
        clearInterval(timer);
        clock();
        lock(false);
      }
    }
    /**
     * 加载两段短音样例并运行混音（门禁要求存在 loadSample；不在首屏自动播放）。
     */
    async function loadSample(){
      if (busy) return;
      try {
        const base = M.sample_name || 'mix-tone';
        const voice = makeToneWav(520, 1.1, 0.28, base + '-voice.wav');
        const bed = makeToneWav(220, 1.4, 0.14, base + '-bed.wav');
        discard();
        hud.hidden = true;
        voiceFile = voice;
        bedFile = bed;
        voiceInput.value = '';
        bedInput.value = '';
        voiceGainEl.value = '100';
        bedGainEl.value = '40';
        duckEl.checked = true;
        syncGainLabels();
        renderMeta();
        await mix();
      } catch (e) {
        clearAll();
        fail(e && M[e.message] ? e.message : 'failed');
      }
    }
    voiceInput.addEventListener('change', () => setFile('voice', voiceInput.files && voiceInput.files[0]));
    bedInput.addEventListener('change', () => setFile('bed', bedInput.files && bedInput.files[0]));
    $('mvVoiceDrop').addEventListener('dragover', event => event.preventDefault());
    $('mvVoiceDrop').addEventListener('drop', event => {
      event.preventDefault();
      if (busy) return;
      const files = event.dataTransfer && event.dataTransfer.files;
      if (files && files[0]) setFile('voice', files[0]);
    });
    $('mvBedDrop').addEventListener('dragover', event => event.preventDefault());
    $('mvBedDrop').addEventListener('drop', event => {
      event.preventDefault();
      if (busy) return;
      const files = event.dataTransfer && event.dataTransfer.files;
      if (files && files[0]) setFile('bed', files[0]);
    });
    voiceGainEl.addEventListener('input', () => { syncGainLabels(); discard(); });
    bedGainEl.addEventListener('input', () => { syncGainLabels(); discard(); });
    duckEl.addEventListener('change', () => discard());
    $('mvConvert').addEventListener('click', mix);
    $('mvSample').addEventListener('click', loadSample);
    $('mvClear').addEventListener('click', clearAll);
    $('mvDownload').addEventListener('click', () => {
      if (!outputUrl || busy) return;
      const link = document.createElement('a');
      link.href = outputUrl;
      link.download = 'voiceover-mix.wav';
      document.body.appendChild(link);
      link.click();
      link.remove();
    });
    window.addEventListener('pagehide', () => {
      clearInterval(timer);
      if (outputUrl) URL.revokeObjectURL(outputUrl);
    });
    syncGainLabels();
    renderMeta();
  })();
</script>`;

	/** catalog 元数据（related / schema）。 */
	const toolMeta = getToolBySlug('mix-a-voiceover-with-background-music');
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
