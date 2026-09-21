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
const P = 'tool_reduce_background_noise_on_a_voice_memo';

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
 * 给人声备忘录降低背景噪音，导出 16-bit WAV（S24）。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderReduceBackgroundNoiseOnAVoiceMemoPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 工具规范路径（无语言前缀）。 */
	const toolPath = '/tools/reduce-background-noise-on-a-voice-memo';
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
			currentSlug: 'reduce-background-noise-on-a-voice-memo',
			currentAnchor: '#voice-denoise',
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
		'denoise',
		'write',
		'done',
		'failed',
		'elapsed',
		'err_file',
		'err_format',
		'err_limit',
		'err_decode',
		'err_encoder',
		'err_silence',
		'sample_name',
		'result',
		'empty',
		'preset_light',
		'preset_medium',
		'preset_strong',
	];
	/** 消息字典：键 → 当前语言字符串。 */
	const messages = Object.fromEntries(uiKeys.map((key) => [key, t(opts.lang, `${P}_${key}`)]));

	/** 工具主面板与结果区 markup。 */
	const contentHtml = `
    <div id="voice-denoise" class="tool-page-heading mb-3"><h1 class="h4">${tr('title')}</h1><p>${tr('desc')}</p></div>
    <section class="tool-panel" id="dnPanel">
      <label class="tool-dropzone mb-3" id="dnDrop" for="dnFile"><input id="dnFile" type="file" accept=".wav,.mp3,.m4a,.aac,.ogg,audio/*"><span class="tool-dropzone-title">${tr('choose')}</span><span class="tool-dropzone-hint">${tr('hint')}</span><span id="dnName" class="tool-dropzone-file"></span></label>
      <div class="tools-bar d-flex flex-wrap mb-3" style="gap:.5rem">
        <button id="dnConvert" class="btn btn-primary" type="button">${tr('convert')}</button>
        <button id="dnDownload" class="btn btn-outline-primary" type="button" disabled>${tr('download')}</button>
        <button id="dnSample" class="btn btn-outline-secondary" type="button">${tr('sample')}</button>
        <button id="dnClear" class="btn btn-outline-secondary" type="button">${tr('clear')}</button>
      </div>
      <details class="mb-3" open><summary>${tr('advanced')}</summary>
        <p class="form-label mt-2 mb-1">${tr('preset_label')}</p>
        <div class="dn-preset-chips mb-2" id="dnPresetChips" role="group" aria-label="${tr('preset_label')}">
          <button type="button" class="btn btn-sm btn-outline-secondary" data-preset="light" aria-pressed="false">${tr('preset_light')}</button>
          <button type="button" class="btn btn-sm btn-primary" data-preset="medium" aria-pressed="true">${tr('preset_medium')}</button>
          <button type="button" class="btn btn-sm btn-outline-secondary" data-preset="strong" aria-pressed="false">${tr('preset_strong')}</button>
        </div>
        <p class="form-text">${tr('settings_hint')}</p>
      </details>
      <div id="dnHud" class="bcw-hud mb-3" role="status" aria-live="polite" hidden>
        <div class="bcw-hud-top"><div class="bcw-hud-spin" aria-hidden="true"></div><div class="bcw-hud-pct" id="dnPct">0%</div><div class="bcw-hud-copy"><div class="bcw-hud-title">${tr('progress')}</div><div class="bcw-hud-step" id="dnStep"></div><div class="bcw-hud-time" id="dnTime"></div></div></div>
        <div class="progress" style="height:1.35rem"><div id="dnBar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div><span class="bcw-hud-sheen" aria-hidden="true"></span></div>
        <ol class="bcw-hud-steps"><li data-step="read">${tr('read')}</li><li data-step="decode">${tr('decode')}</li><li data-step="denoise">${tr('denoise')}</li><li data-step="write">${tr('write')}</li></ol><div class="bcw-hud-url" id="dnCurrent"></div>
      </div>
      <div id="dnOutput" hidden><h2 class="h5">${tr('preview')}</h2><p id="dnResult"></p><audio id="dnAudio" controls preload="metadata" style="max-width:100%" aria-label="${tr('preview')}"></audio></div>
    </section>`;

	/** How / Why / Rules / Use cases IG 块（本批 sound 强制更丰富条目数）。 */
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
				label: 'MDN: BiquadFilterNode',
				href: 'https://developer.mozilla.org/en-US/docs/Web/API/BiquadFilterNode',
			},
			{
				label: 'Wikipedia: Noise gate',
				href: 'https://en.wikipedia.org/wiki/Noise_gate',
			},
			{
				label: 'Wikipedia: Spectral subtraction',
				href: 'https://en.wikipedia.org/wiki/Spectral_subtraction',
			},
		],
	});

	/** 金标 HUD、预设芯片与布局补充样式。 */
	const extraHeadHtml = `<style>${bcwHudCss({ hudId: 'dnHud', convertBtnId: 'dnConvert' })}#dnHud.is-error{border-color:#b91c1c;background:#fff1f2}#dnHud:not(.is-on) .bcw-hud-spin{animation:none}.dn-preset-chips{display:flex;flex-wrap:wrap;gap:.4rem}.site-footer nav.d-inline{display:inline-flex!important;flex-wrap:wrap;justify-content:center;max-width:100%}</style>`;

	/** 客户端转换管线（读 → 解码 → 高通+噪声底门控 → 写 16-bit WAV）。 */
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
    /** 工具面板根节点。 */
    const panel = $('dnPanel');
    /** 文件输入。 */
    const fileInput = $('dnFile');
    /** 预设芯片容器。 */
    const presetChips = $('dnPresetChips');
    /** 进度 HUD。 */
    const hud = $('dnHud');
    /** 预览 audio。 */
    const audio = $('dnAudio');
    /** 峰值软保护上限。 */
    const PEAK_LIMIT = 0.98;
    /** 强度预设：高通截止、门控底增益、噪声分位、平滑。 */
    const PRESETS = {
      light: { hpHz: 70, gateFloor: 0.42, floorPct: 0.18, attack: 0.25, release: 0.08 },
      medium: { hpHz: 95, gateFloor: 0.22, floorPct: 0.14, attack: 0.35, release: 0.12 },
      strong: { hpHz: 120, gateFloor: 0.08, floorPct: 0.10, attack: 0.45, release: 0.16 }
    };
    /** 合法预设键。 */
    const PRESET_KEYS = Object.keys(PRESETS);
    /** 当前选中文件。 */
    let selected = null;
    /** 输出 object URL。 */
    let outputUrl = null;
    /** 是否忙。 */
    let busy = false;
    /** 计时器。 */
    let timer = null;
    /** 开始时间。 */
    let started = 0;
    /** 当前预设键。 */
    let presetKey = 'medium';
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
    /** 丢弃旧输出。 */
    function discard(){
      if (outputUrl){ URL.revokeObjectURL(outputUrl); outputUrl = null; }
      audio.removeAttribute('src');
      audio.load();
      $('dnOutput').hidden = true;
      $('dnResult').textContent = '';
      $('dnDownload').disabled = true;
    }
    /**
     * 锁定或解锁控件。
     * @param {boolean} on 是否锁定
     */
    function lock(on){
      busy = on;
      $('dnConvert').disabled = on;
      $('dnSample').disabled = on;
      $('dnClear').disabled = on;
      fileInput.disabled = on;
      presetChips.querySelectorAll('button').forEach(btn => { btn.disabled = on; });
      if (!on) $('dnDownload').disabled = !outputUrl;
    }
    /** 刷新预设芯片选中态。 */
    function paintPreset(){
      presetChips.querySelectorAll('[data-preset]').forEach(btn => {
        const on = btn.dataset.preset === presetKey;
        btn.classList.toggle('btn-primary', on);
        btn.classList.toggle('btn-outline-secondary', !on);
        btn.setAttribute('aria-pressed', on ? 'true' : 'false');
      });
    }
    /**
     * 更新 HUD 百分比与步骤高亮。
     * @param {number} pct 百分比
     * @param {string} stepKey 步骤键或 done
     */
    function progress(pct, stepKey){
      const value = Math.max(0, Math.min(100, Math.round(pct)));
      $('dnPct').textContent = value + '%';
      $('dnBar').style.width = value + '%';
      $('dnBar').setAttribute('aria-valuenow', String(value));
      const label = stepKey === 'done' ? M.done : (M[stepKey] || stepKey);
      $('dnStep').textContent = label;
      hud.querySelectorAll('.bcw-hud-steps li').forEach(li => {
        const name = li.getAttribute('data-step');
        li.classList.toggle('is-active', name === stepKey);
        li.classList.toggle('is-done', ['read','decode','denoise','write'].indexOf(name) < ['read','decode','denoise','write'].indexOf(stepKey) || stepKey === 'done');
      });
    }
    /**
     * 以错误态显示失败。
     * @param {string} key 消息键
     */
    function fail(key){
      hud.hidden = false;
      hud.className = 'bcw-hud is-error is-fail mb-3';
      $('dnPct').textContent = '—';
      $('dnBar').style.width = '0%';
      $('dnBar').setAttribute('aria-valuenow', '0');
      hud.setAttribute('role', 'alert');
      $('dnStep').textContent = M[key] || M.failed;
    }
    /**
     * 选择或清空输入文件（会丢弃旧输出）。
     * @param {File|null} file 新文件
     */
    function choose(file){
      if (busy) return;
      discard();
      selected = file || null;
      $('dnName').textContent = file ? file.name : '';
      hud.hidden = true;
      fileInput.value = '';
    }
    /**
     * 是否为浏览器可尝试解码的常见音频。
     * @param {File} file 候选文件
     */
    function isAudio(file){
      return file && (/\\.(wav|mp3|m4a|aac|ogg)$/i.test(file.name) || (file.type && file.type.indexOf('audio/') === 0));
    }
    /**
     * 计算缓冲中所有声道的绝对峰值。
     * @param {AudioBuffer} buffer 音频缓冲
     */
    function absPeak(buffer){
      let peak = 0;
      for (let c = 0; c < buffer.numberOfChannels; c++){
        const data = buffer.getChannelData(c);
        for (let i = 0; i < data.length; i++){
          const v = Math.abs(Number.isFinite(data[i]) ? data[i] : 0);
          if (v > peak) peak = v;
        }
      }
      return peak;
    }
    /**
     * OfflineAudioContext 高通滤波。
     * @param {AudioBuffer} buffer 源缓冲
     * @param {number} hpHz 截止频率
     */
    async function highpassBuffer(buffer, hpHz){
      const channels = Math.min(2, buffer.numberOfChannels);
      const frames = buffer.length;
      const rate = Math.round(buffer.sampleRate);
      const Offline = window.OfflineAudioContext || window.webkitOfflineAudioContext;
      if (!Offline) throw Error('err_encoder');
      const offline = new Offline(channels, frames, rate);
      const source = offline.createBufferSource();
      /** 将源缓冲裁成 1–2 声道副本。 */
      const srcBuf = offline.createBuffer(channels, frames, rate);
      for (let c = 0; c < channels; c++){
        srcBuf.getChannelData(c).set(buffer.getChannelData(c).subarray(0, frames));
      }
      source.buffer = srcBuf;
      const hp = offline.createBiquadFilter();
      hp.type = 'highpass';
      hp.frequency.setValueAtTime(hpHz, 0);
      hp.Q.setValueAtTime(0.707, 0);
      source.connect(hp);
      hp.connect(offline.destination);
      source.start(0);
      return offline.startRendering();
    }
    /**
     * 从帧 RMS 估计噪声底，并对近底噪帧做 soft gate。
     * @param {Float32Array} data 单声道样本
     * @param {number} rate 采样率
     * @param {{gateFloor:number,floorPct:number,attack:number,release:number}} cfg 门控配置
     */
    function gateChannel(data, rate, cfg){
      const frames = data.length;
      const hop = Math.max(64, Math.round(rate * 0.01));
      const win = hop * 2;
      /** 每帧 RMS。 */
      const rmsList = [];
      for (let i = 0; i < frames; i += hop){
        let sum = 0;
        let n = 0;
        const end = Math.min(frames, i + win);
        for (let j = i; j < end; j++){
          const s = Number.isFinite(data[j]) ? data[j] : 0;
          sum += s * s;
          n++;
        }
        rmsList.push(Math.sqrt(sum / Math.max(1, n)));
      }
      const sorted = rmsList.slice().sort((a, b) => a - b);
      const idx = Math.min(sorted.length - 1, Math.max(0, Math.floor(sorted.length * cfg.floorPct)));
      const floor = Math.max(1e-6, sorted[idx] || 1e-6);
      const thresh = floor * 1.6;
      const out = new Float32Array(frames);
      let gain = 1;
      let cursor = 0;
      for (let f = 0; f < rmsList.length; f++){
        const rms = rmsList[f];
        /** 目标增益：高于门限则放行，近噪声底则压到 gateFloor。 */
        let target = 1;
        if (rms <= floor) target = cfg.gateFloor;
        else if (rms < thresh){
          const t = (rms - floor) / Math.max(1e-9, thresh - floor);
          target = cfg.gateFloor + (1 - cfg.gateFloor) * t * t;
        }
        const coeff = target < gain ? cfg.attack : cfg.release;
        gain += (target - gain) * coeff;
        const start = f * hop;
        const stop = Math.min(frames, start + hop);
        for (let i = start; i < stop; i++){
          out[i] = (Number.isFinite(data[i]) ? data[i] : 0) * gain;
        }
        cursor = stop;
      }
      for (let i = cursor; i < frames; i++) out[i] = (Number.isFinite(data[i]) ? data[i] : 0) * gain;
      return { out, floor };
    }
    /**
     * 高通 + 噪声底 soft gate 降噪近似。
     * @param {AudioBuffer} buffer 解码缓冲
     * @param {string} key 预设键
     */
    async function denoiseBuffer(buffer, key){
      const cfg = PRESETS[key];
      if (!cfg) throw Error('err_encoder');
      const peakBefore = absPeak(buffer);
      if (!(peakBefore > 1e-8)) throw Error('err_silence');
      const filtered = await highpassBuffer(buffer, cfg.hpHz);
      const channels = Math.min(2, filtered.numberOfChannels);
      const frames = filtered.length;
      const rate = Math.round(filtered.sampleRate);
      const out = [];
      let floor = 0;
      for (let c = 0; c < channels; c++){
        const gated = gateChannel(filtered.getChannelData(c), rate, cfg);
        out.push(gated.out);
        if (gated.floor > floor) floor = gated.floor;
      }
      let peakMid = 0;
      for (let c = 0; c < channels; c++){
        for (let i = 0; i < frames; i++){
          const v = Math.abs(out[c][i]);
          if (v > peakMid) peakMid = v;
        }
      }
      let scale = 1;
      if (peakMid > PEAK_LIMIT) scale = PEAK_LIMIT / peakMid;
      let peakAfter = 0;
      for (let c = 0; c < channels; c++){
        for (let i = 0; i < frames; i++){
          out[c][i] *= scale;
          const v = Math.abs(out[c][i]);
          if (v > peakAfter) peakAfter = v;
        }
      }
      return { channels: out, rate, floor, peakBefore, peakAfter };
    }
    /**
     * 将 float 声道写成 16-bit little-endian PCM WAV（保留 1–2 声道）。
     * @param {Float32Array[]} channels 声道样本
     * @param {number} rate 采样率 Hz
     */
    function writeWav(channels, rate){
      const ch = channels.length;
      const frames = channels[0].length;
      const blockAlign = ch * 2;
      const dataBytes = frames * blockAlign;
      const bytes = new ArrayBuffer(44 + dataBytes);
      const view = new DataView(bytes);
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
    /** 主转换：读 → 解码 → Denoise → 写 WAV。 */
    async function convert(){
      if (busy) return;
      discard();
      if (!selected){ fail('empty'); return; }
      lock(true);
      hud.hidden = false;
      hud.className = 'bcw-hud is-on mb-3';
      hud.setAttribute('role', 'status');
      $('dnCurrent').textContent = selected.name;
      started = performance.now();
      const clock = () => { $('dnTime').textContent = fill(M.elapsed, { s: ((performance.now() - started) / 1000).toFixed(1) }); };
      clock();
      timer = setInterval(clock, 100);
      try {
        progress(2, 'read');
        await yieldUi();
        if (selected.size > 40 * 1024 * 1024) throw Error('err_limit');
        if (!isAudio(selected)) throw Error('err_format');
        const bytes = await selected.arrayBuffer();
        progress(18, 'decode');
        await yieldUi();
        const Context = window.AudioContext || window.webkitAudioContext;
        if (!Context) throw Error('err_decode');
        const context = new Context();
        let decoded;
        try {
          decoded = await context.decodeAudioData(bytes.slice(0));
        } catch (e) {
          throw Error('err_decode');
        } finally {
          if (context.close) context.close();
        }
        if (decoded.duration > 600.01 || decoded.numberOfChannels < 1 || decoded.numberOfChannels > 2) throw Error('err_limit');
        if (PRESET_KEYS.indexOf(presetKey) < 0) throw Error('err_encoder');
        progress(42, 'denoise');
        await yieldUi();
        const denoised = await denoiseBuffer(decoded, presetKey);
        progress(78, 'write');
        await yieldUi();
        const blob = writeWav(denoised.channels, denoised.rate);
        if (!blob.size) throw Error('err_encoder');
        outputUrl = URL.createObjectURL(blob);
        audio.src = outputUrl;
        $('dnOutput').hidden = false;
        const presetLabel = M['preset_' + presetKey] || presetKey;
        $('dnResult').textContent = fill(M.result, {
          seconds: decoded.duration.toFixed(2),
          preset: presetLabel,
          floor: denoised.floor.toFixed(4),
          output: (blob.size / 1024).toFixed(1)
        });
        progress(100, 'done');
        hud.classList.remove('is-on');
        hud.classList.add('is-done');
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
     * 合成约 3 s、48 kHz 单声道嘈杂备忘录样例（人声带 + 稳态嘶声）。
     * @returns {File}
     */
    function sampleWav(){
      const rate = 48000;
      const frames = rate * 3;
      const bytes = new ArrayBuffer(44 + frames * 2);
      const v = new DataView(bytes);
      const str = (at, text) => { for (let i = 0; i < text.length; i++) v.setUint8(at + i, text.charCodeAt(i)); };
      str(0, 'RIFF');
      v.setUint32(4, bytes.byteLength - 8, true);
      str(8, 'WAVE');
      str(12, 'fmt ');
      v.setUint32(16, 16, true);
      v.setUint16(20, 1, true);
      v.setUint16(22, 1, true);
      v.setUint32(24, rate, true);
      v.setUint32(28, rate * 2, true);
      v.setUint16(32, 2, true);
      v.setUint16(34, 16, true);
      str(36, 'data');
      v.setUint32(40, frames * 2, true);
      let noise = 0;
      for (let i = 0; i < frames; i++){
        const t = i / rate;
        const fade = Math.min(1, i / 2000, (frames - i) / 2000);
        const env = (t > 0.35 && t < 2.55) ? (0.55 + 0.45 * Math.sin(2 * Math.PI * 3.2 * t)) : 0.08;
        const voice = env * (
          0.42 * Math.sin(2 * Math.PI * 180 * t) +
          0.28 * Math.sin(2 * Math.PI * 360 * t) +
          0.18 * Math.sin(2 * Math.PI * 720 * t) +
          0.10 * Math.sin(2 * Math.PI * 1450 * t)
        );
        noise = noise * 0.97 + (Math.random() * 2 - 1) * 0.03;
        const hiss = 0.12 * noise + 0.05 * (Math.random() * 2 - 1);
        const sample = (voice + hiss) * fade;
        v.setInt16(44 + i * 2, Math.max(-32768, Math.min(32767, Math.round(sample * 26000))), true);
      }
      return new File([bytes], M.sample_name + '.wav', { type: 'audio/wav' });
    }
    /** 进页或点 Sample：加载嘈杂样例并以默认 Medium 自动 Denoise。 */
    async function loadSample(){
      if (busy) return;
      presetKey = 'medium';
      paintPreset();
      choose(sampleWav());
      await convert();
    }
    fileInput.addEventListener('change', () => choose(fileInput.files[0]));
    $('dnDrop').addEventListener('dragover', event => event.preventDefault());
    $('dnDrop').addEventListener('drop', event => {
      event.preventDefault();
      if (busy) return;
      const files = event.dataTransfer.files;
      if (files.length !== 1){ choose(null); fail('err_file'); return; }
      choose(files[0]);
    });
    presetChips.addEventListener('click', event => {
      const btn = event.target.closest('[data-preset]');
      if (!btn || busy) return;
      presetKey = btn.dataset.preset;
      paintPreset();
      discard();
      hud.hidden = true;
    });
    $('dnConvert').addEventListener('click', convert);
    $('dnSample').addEventListener('click', loadSample);
    $('dnClear').addEventListener('click', () => choose(null));
    $('dnDownload').addEventListener('click', () => {
      if (!outputUrl || busy) return;
      const link = document.createElement('a');
      link.href = outputUrl;
      link.download = (selected.name.replace(/\\.[^.]+$/, '') || 'audio') + '-denoise.wav';
      document.body.appendChild(link);
      link.click();
      link.remove();
    });
    window.addEventListener('pagehide', () => {
      clearInterval(timer);
      if (outputUrl) URL.revokeObjectURL(outputUrl);
    });
    paintPreset();
    loadSample();
  })();
</script>`;

	/** catalog 元数据（related / schema）。 */
	const toolMeta = getToolBySlug('reduce-background-noise-on-a-voice-memo');
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
