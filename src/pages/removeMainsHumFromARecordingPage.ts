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
const P = 'tool_remove_mains_hum_from_a_recording';

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
 * 从录音中去除市电嗡嗡，导出 16-bit WAV（S26）。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderRemoveMainsHumFromARecordingPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 工具规范路径（无语言前缀）。 */
	const toolPath = '/tools/remove-mains-hum-from-a-recording';
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
			currentSlug: 'remove-mains-hum-from-a-recording',
			currentAnchor: '#mains-dehum',
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
		'dehum',
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
		'hz_50',
		'hz_60',
		'harmonics_off',
		'harmonics_on',
	];
	/** 消息字典：键 → 当前语言字符串。 */
	const messages = Object.fromEntries(uiKeys.map((key) => [key, t(opts.lang, `${P}_${key}`)]));

	/** 工具主面板与结果区 markup。 */
	const contentHtml = `
    <div id="mains-dehum" class="tool-page-heading mb-3"><h1 class="h4">${tr('title')}</h1><p>${tr('desc')}</p></div>
    <section class="tool-panel" id="humPanel">
      <label class="tool-dropzone mb-3" id="humDrop" for="humFile"><input id="humFile" type="file" accept=".wav,.mp3,.m4a,.aac,.ogg,audio/*"><span class="tool-dropzone-title">${tr('choose')}</span><span class="tool-dropzone-hint">${tr('hint')}</span><span id="humName" class="tool-dropzone-file"></span></label>
      <div class="tools-bar d-flex flex-wrap mb-3" style="gap:.5rem">
        <button id="humConvert" class="btn btn-primary" type="button">${tr('convert')}</button>
        <button id="humDownload" class="btn btn-outline-primary" type="button" disabled>${tr('download')}</button>
        <button id="humSample" class="btn btn-outline-secondary" type="button">${tr('sample')}</button>
        <button id="humClear" class="btn btn-outline-secondary" type="button">${tr('clear')}</button>
      </div>
      <details class="mb-3" open><summary>${tr('advanced')}</summary>
        <p class="form-label mt-2 mb-1">${tr('hz_label')}</p>
        <div class="hum-preset-chips mb-2" id="humHzChips" role="group" aria-label="${tr('hz_label')}">
          <button type="button" class="btn btn-sm btn-primary" data-hz="50" aria-pressed="true">${tr('hz_50')}</button>
          <button type="button" class="btn btn-sm btn-outline-secondary" data-hz="60" aria-pressed="false">${tr('hz_60')}</button>
        </div>
        <p class="form-label mb-1">${tr('harmonics_label')}</p>
        <div class="hum-preset-chips mb-2" id="humHarmChips" role="group" aria-label="${tr('harmonics_label')}">
          <button type="button" class="btn btn-sm btn-outline-secondary" data-harmonics="off" aria-pressed="false">${tr('harmonics_off')}</button>
          <button type="button" class="btn btn-sm btn-primary" data-harmonics="on" aria-pressed="true">${tr('harmonics_on')}</button>
        </div>
        <p class="form-text">${tr('settings_hint')}</p>
      </details>
      <div id="humHud" class="bcw-hud mb-3" role="status" aria-live="polite" hidden>
        <div class="bcw-hud-top"><div class="bcw-hud-spin" aria-hidden="true"></div><div class="bcw-hud-pct" id="humPct">0%</div><div class="bcw-hud-copy"><div class="bcw-hud-title">${tr('progress')}</div><div class="bcw-hud-step" id="humStep"></div><div class="bcw-hud-time" id="humTime"></div></div></div>
        <div class="progress" style="height:1.35rem"><div id="humBar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div><span class="bcw-hud-sheen" aria-hidden="true"></span></div>
        <ol class="bcw-hud-steps"><li data-step="read">${tr('read')}</li><li data-step="decode">${tr('decode')}</li><li data-step="dehum">${tr('dehum')}</li><li data-step="write">${tr('write')}</li></ol><div class="bcw-hud-url" id="humCurrent"></div>
      </div>
      <div id="humOutput" hidden><h2 class="h5">${tr('preview')}</h2><p id="humResult"></p><audio id="humAudio" controls preload="metadata" style="max-width:100%" aria-label="${tr('preview')}"></audio></div>
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
				label: 'Wikipedia: Mains hum',
				href: 'https://en.wikipedia.org/wiki/Mains_hum',
			},
			{
				label: 'Wikipedia: Notch filter',
				href: 'https://en.wikipedia.org/wiki/Notch_filter',
			},
		],
	});

	/** 金标 HUD、预设芯片与布局补充样式。 */
	const extraHeadHtml = `<style>${bcwHudCss({ hudId: 'humHud', convertBtnId: 'humConvert' })}#humHud.is-error{border-color:#b91c1c;background:#fff1f2}#humHud:not(.is-on) .bcw-hud-spin{animation:none}.hum-preset-chips{display:flex;flex-wrap:wrap;gap:.4rem}.site-footer nav.d-inline{display:inline-flex!important;flex-wrap:wrap;justify-content:center;max-width:100%}</style>`;

	/** 客户端转换管线（读 → 解码 → Offline notch 链 → 写 16-bit WAV）。 */
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
    const panel = $('humPanel');
    /** 文件输入。 */
    const fileInput = $('humFile');
    /** 市电频率芯片容器。 */
    const hzChips = $('humHzChips');
    /** 谐波芯片容器。 */
    const harmChips = $('humHarmChips');
    /** 进度 HUD。 */
    const hud = $('humHud');
    /** 预览 audio。 */
    const audio = $('humAudio');
    /** 峰值软保护上限。 */
    const PEAK_LIMIT = 0.98;
    /** 陷波 Q（越窄越专一）。 */
    const NOTCH_Q = 35;
    /** 合法市电频率。 */
    const HZ_KEYS = [50, 60];
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
    /** 当前市电频率 Hz。 */
    let mainsHz = 50;
    /** 是否包含谐波陷波。 */
    let harmonicsOn = true;
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
      $('humOutput').hidden = true;
      $('humResult').textContent = '';
      $('humDownload').disabled = true;
    }
    /**
     * 锁定或解锁控件。
     * @param {boolean} on 是否锁定
     */
    function lock(on){
      busy = on;
      $('humConvert').disabled = on;
      $('humSample').disabled = on;
      $('humClear').disabled = on;
      fileInput.disabled = on;
      hzChips.querySelectorAll('button').forEach(btn => { btn.disabled = on; });
      harmChips.querySelectorAll('button').forEach(btn => { btn.disabled = on; });
      if (!on) $('humDownload').disabled = !outputUrl;
    }
    /** 刷新市电频率芯片选中态。 */
    function paintHz(){
      hzChips.querySelectorAll('[data-hz]').forEach(btn => {
        const on = Number(btn.dataset.hz) === mainsHz;
        btn.classList.toggle('btn-primary', on);
        btn.classList.toggle('btn-outline-secondary', !on);
        btn.setAttribute('aria-pressed', on ? 'true' : 'false');
      });
    }
    /** 刷新谐波芯片选中态。 */
    function paintHarmonics(){
      harmChips.querySelectorAll('[data-harmonics]').forEach(btn => {
        const on = (btn.dataset.harmonics === 'on') === harmonicsOn;
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
      $('humPct').textContent = value + '%';
      $('humBar').style.width = value + '%';
      $('humBar').setAttribute('aria-valuenow', String(value));
      const label = stepKey === 'done' ? M.done : (M[stepKey] || stepKey);
      $('humStep').textContent = label;
      hud.querySelectorAll('.bcw-hud-steps li').forEach(li => {
        const name = li.getAttribute('data-step');
        li.classList.toggle('is-active', name === stepKey);
        li.classList.toggle('is-done', ['read','decode','dehum','write'].indexOf(name) < ['read','decode','dehum','write'].indexOf(stepKey) || stepKey === 'done');
      });
    }
    /**
     * 以错误态显示失败。
     * @param {string} key 消息键
     */
    function fail(key){
      hud.hidden = false;
      hud.className = 'bcw-hud is-error is-fail mb-3';
      $('humPct').textContent = '—';
      $('humBar').style.width = '0%';
      $('humBar').setAttribute('aria-valuenow', '0');
      hud.setAttribute('role', 'alert');
      $('humStep').textContent = M[key] || M.failed;
    }
    /**
     * 选择或清空输入文件（会丢弃旧输出）。
     * @param {File|null} file 新文件
     */
    function choose(file){
      if (busy) return;
      discard();
      selected = file || null;
      $('humName').textContent = file ? file.name : '';
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
     * 构建陷波频率列表（基波 ± 可选谐波，低于 Nyquist）。
     * @param {number} hz 市电基波
     * @param {boolean} withHarmonics 是否含 2–5 次谐波
     * @param {number} rate 采样率
     */
    function notchFreqs(hz, withHarmonics, rate){
      const nyquist = rate / 2 - 1;
      /** @type {number[]} */
      const freqs = [];
      const maxN = withHarmonics ? 5 : 1;
      for (let n = 1; n <= maxN; n++){
        const f = hz * n;
        if (f > 0 && f < nyquist) freqs.push(f);
      }
      return freqs;
    }
    /**
     * OfflineAudioContext 串联 notch Biquad，再软峰值保护。
     * @param {AudioBuffer} buffer 解码缓冲
     * @param {number} hz 市电基波
     * @param {boolean} withHarmonics 是否含谐波
     */
    async function dehumBuffer(buffer, hz, withHarmonics){
      const channels = Math.min(2, buffer.numberOfChannels);
      const frames = buffer.length;
      const rate = Math.round(buffer.sampleRate);
      const peakBefore = absPeak(buffer);
      if (!(peakBefore > 1e-8)) throw Error('err_silence');
      const freqs = notchFreqs(hz, withHarmonics, rate);
      if (!freqs.length) throw Error('err_encoder');
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
      /** 串联 notch 链。 */
      let node = source;
      for (let i = 0; i < freqs.length; i++){
        const notch = offline.createBiquadFilter();
        notch.type = 'notch';
        notch.frequency.setValueAtTime(freqs[i], 0);
        notch.Q.setValueAtTime(NOTCH_Q, 0);
        node.connect(notch);
        node = notch;
      }
      node.connect(offline.destination);
      source.start(0);
      const rendered = await offline.startRendering();
      let peakMid = absPeak(rendered);
      let scale = 1;
      if (peakMid > PEAK_LIMIT) scale = PEAK_LIMIT / peakMid;
      const out = [];
      let peakAfter = 0;
      for (let c = 0; c < channels; c++){
        const data = rendered.getChannelData(c);
        const dest = new Float32Array(frames);
        for (let i = 0; i < frames; i++){
          const s = Number.isFinite(data[i]) ? data[i] * scale : 0;
          dest[i] = s;
          const v = Math.abs(s);
          if (v > peakAfter) peakAfter = v;
        }
        out.push(dest);
      }
      return { channels: out, rate, notches: freqs.length, peakBefore, peakAfter };
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
    /** 主转换：读 → 解码 → Dehum → 写 WAV。 */
    async function convert(){
      if (busy) return;
      discard();
      if (!selected){ fail('empty'); return; }
      lock(true);
      hud.hidden = false;
      hud.className = 'bcw-hud is-on mb-3';
      hud.setAttribute('role', 'status');
      $('humCurrent').textContent = selected.name;
      started = performance.now();
      const clock = () => { $('humTime').textContent = fill(M.elapsed, { s: ((performance.now() - started) / 1000).toFixed(1) }); };
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
        if (HZ_KEYS.indexOf(mainsHz) < 0) throw Error('err_encoder');
        progress(42, 'dehum');
        await yieldUi();
        const dehummed = await dehumBuffer(decoded, mainsHz, harmonicsOn);
        progress(78, 'write');
        await yieldUi();
        const blob = writeWav(dehummed.channels, dehummed.rate);
        if (!blob.size) throw Error('err_encoder');
        outputUrl = URL.createObjectURL(blob);
        audio.src = outputUrl;
        $('humOutput').hidden = false;
        const harmLabel = harmonicsOn ? M.harmonics_on : M.harmonics_off;
        $('humResult').textContent = fill(M.result, {
          seconds: decoded.duration.toFixed(2),
          hz: mainsHz,
          harmonics: harmLabel,
          notches: dehummed.notches,
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
     * 合成约 3 s、48 kHz 单声道含 50 Hz 市电嗡嗡的样例（人声带 + 基波与谐波）。
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
        const hum =
          0.22 * Math.sin(2 * Math.PI * 50 * t) +
          0.12 * Math.sin(2 * Math.PI * 100 * t) +
          0.07 * Math.sin(2 * Math.PI * 150 * t) +
          0.04 * Math.sin(2 * Math.PI * 200 * t) +
          0.025 * Math.sin(2 * Math.PI * 250 * t);
        const sample = (voice + hum) * fade;
        v.setInt16(44 + i * 2, Math.max(-32768, Math.min(32767, Math.round(sample * 26000))), true);
      }
      return new File([bytes], M.sample_name + '.wav', { type: 'audio/wav' });
    }
    /** 进页或点 Sample：加载嗡嗡样例并以默认 50 Hz + 谐波自动 Dehum。 */
    async function loadSample(){
      if (busy) return;
      mainsHz = 50;
      harmonicsOn = true;
      paintHz();
      paintHarmonics();
      choose(sampleWav());
      await convert();
    }
    fileInput.addEventListener('change', () => choose(fileInput.files[0]));
    $('humDrop').addEventListener('dragover', event => event.preventDefault());
    $('humDrop').addEventListener('drop', event => {
      event.preventDefault();
      if (busy) return;
      const files = event.dataTransfer.files;
      if (files.length !== 1){ choose(null); fail('err_file'); return; }
      choose(files[0]);
    });
    hzChips.addEventListener('click', event => {
      const btn = event.target.closest('[data-hz]');
      if (!btn || busy) return;
      mainsHz = Number(btn.dataset.hz);
      paintHz();
      discard();
      hud.hidden = true;
    });
    harmChips.addEventListener('click', event => {
      const btn = event.target.closest('[data-harmonics]');
      if (!btn || busy) return;
      harmonicsOn = btn.dataset.harmonics === 'on';
      paintHarmonics();
      discard();
      hud.hidden = true;
    });
    $('humConvert').addEventListener('click', convert);
    $('humSample').addEventListener('click', loadSample);
    $('humClear').addEventListener('click', () => choose(null));
    $('humDownload').addEventListener('click', () => {
      if (!outputUrl || busy) return;
      const link = document.createElement('a');
      link.href = outputUrl;
      link.download = (selected.name.replace(/\\.[^.]+$/, '') || 'audio') + '-dehum.wav';
      document.body.appendChild(link);
      link.click();
      link.remove();
    });
    window.addEventListener('pagehide', () => {
      clearInterval(timer);
      if (outputUrl) URL.revokeObjectURL(outputUrl);
    });
    paintHz();
    paintHarmonics();
    loadSample();
  })();
</script>`;

	/** catalog 元数据（related / schema）。 */
	const toolMeta = getToolBySlug('remove-mains-hum-from-a-recording');
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
