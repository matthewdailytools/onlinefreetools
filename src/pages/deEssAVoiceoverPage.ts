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
const P = 'tool_de_ess_a_voiceover';

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
 * 给人声配音去齿音：齿音频段能量驱动的动态高架衰减，导出 16-bit WAV（S31）。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderDeEssAVoiceoverPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 工具规范路径（无语言前缀）。 */
	const toolPath = '/tools/de-ess-a-voiceover';
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
			currentSlug: 'de-ess-a-voiceover',
			currentAnchor: '#deess',
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
		'deess',
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
		'sens_light',
		'sens_medium',
		'sens_strong',
	];
	/** 消息字典：键 → 当前语言字符串。 */
	const messages = Object.fromEntries(uiKeys.map((key) => [key, t(opts.lang, `${P}_${key}`)]));

	/** 工具主面板与结果区 markup。 */
	const contentHtml = `
    <div id="deess" class="tool-page-heading mb-3"><h1 class="h4">${tr('title')}</h1><p>${tr('desc')}</p></div>
    <section class="tool-panel" id="desPanel">
      <label class="tool-dropzone mb-3" id="desDrop" for="desFile"><input id="desFile" type="file" accept=".wav,.mp3,.m4a,.aac,.ogg,audio/*"><span class="tool-dropzone-title">${tr('choose')}</span><span class="tool-dropzone-hint">${tr('hint')}</span><span id="desName" class="tool-dropzone-file"></span></label>
      <div class="tools-bar d-flex flex-wrap mb-3" style="gap:.5rem">
        <button id="desConvert" class="btn btn-primary" type="button">${tr('convert')}</button>
        <button id="desDownload" class="btn btn-outline-primary" type="button" disabled>${tr('download')}</button>
        <button id="desSample" class="btn btn-outline-secondary" type="button">${tr('sample')}</button>
        <button id="desClear" class="btn btn-outline-secondary" type="button">${tr('clear')}</button>
      </div>
      <details class="mb-3" open><summary>${tr('advanced')}</summary>
        <p class="form-label mt-2 mb-1">${tr('sens_label')}</p>
        <div class="des-preset-chips mb-2" id="desSensChips" role="group" aria-label="${tr('sens_label')}">
          <button type="button" class="btn btn-sm btn-outline-secondary" data-sens="light" aria-pressed="false">${tr('sens_light')}</button>
          <button type="button" class="btn btn-sm btn-primary" data-sens="medium" aria-pressed="true">${tr('sens_medium')}</button>
          <button type="button" class="btn btn-sm btn-outline-secondary" data-sens="strong" aria-pressed="false">${tr('sens_strong')}</button>
        </div>
        <p class="form-text">${tr('settings_hint')}</p>
      </details>
      <div id="desHud" class="bcw-hud mb-3" role="status" aria-live="polite" hidden>
        <div class="bcw-hud-top"><div class="bcw-hud-spin" aria-hidden="true"></div><div class="bcw-hud-pct" id="desPct">0%</div><div class="bcw-hud-copy"><div class="bcw-hud-title">${tr('progress')}</div><div class="bcw-hud-step" id="desStep"></div><div class="bcw-hud-time" id="desTime"></div></div></div>
        <div class="progress" style="height:1.35rem"><div id="desBar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div><span class="bcw-hud-sheen" aria-hidden="true"></span></div>
        <ol class="bcw-hud-steps"><li data-step="read">${tr('read')}</li><li data-step="decode">${tr('decode')}</li><li data-step="deess">${tr('deess')}</li><li data-step="write">${tr('write')}</li></ol><div class="bcw-hud-url" id="desCurrent"></div>
      </div>
      <div id="desOutput" hidden><h2 class="h5">${tr('preview')}</h2><p id="desResult"></p><audio id="desAudio" controls preload="metadata" style="max-width:100%" aria-label="${tr('preview')}"></audio></div>
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
				label: 'MDN: OfflineAudioContext',
				href: 'https://developer.mozilla.org/en-US/docs/Web/API/OfflineAudioContext',
			},
			{
				label: 'Wikipedia: De-esser',
				href: 'https://en.wikipedia.org/wiki/De-esser',
			},
		],
	});

	/** 金标 HUD、预设芯片与布局补充样式。 */
	const extraHeadHtml = `<style>${bcwHudCss({ hudId: 'desHud', convertBtnId: 'desConvert' })}#desHud.is-error{border-color:#b91c1c;background:#fff1f2}#desHud:not(.is-on) .bcw-hud-spin{animation:none}.des-preset-chips{display:flex;flex-wrap:wrap;gap:.4rem}.site-footer nav.d-inline{display:inline-flex!important;flex-wrap:wrap;justify-content:center;max-width:100%}</style>`;

	/** 客户端转换管线（读 → 解码 → 齿音检测/动态高架衰减 → 写 16-bit WAV）。 */
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
    /** 文件输入。 */
    const fileInput = $('desFile');
    /** 灵敏度芯片容器。 */
    const sensChips = $('desSensChips');
    /** 进度 HUD。 */
    const hud = $('desHud');
    /** 预览 audio。 */
    const audio = $('desAudio');
    /** 峰值软保护上限。 */
    const PEAK_LIMIT = 0.98;
    /** 合法灵敏度键。 */
    const SENS_KEYS = ['light', 'medium', 'strong'];
    /**
     * 灵敏度：齿音比阈值、最大混音、高架频率/增益、包络攻放、膝宽。
     * @type {Record<string,{thresh:number,maxBlend:number,shelfHz:number,shelfGain:number,bandHz:number,bandQ:number,attack:number,release:number,knee:number}>}
     */
    const SENS = {
      light: { thresh: 0.52, maxBlend: 0.55, shelfHz: 6800, shelfGain: -5, bandHz: 6500, bandQ: 1.1, attack: 0.01, release: 0.09, knee: 0.22 },
      medium: { thresh: 0.40, maxBlend: 0.78, shelfHz: 6200, shelfGain: -9, bandHz: 6200, bandQ: 1.0, attack: 0.006, release: 0.06, knee: 0.18 },
      strong: { thresh: 0.30, maxBlend: 0.95, shelfHz: 5600, shelfGain: -13, bandHz: 5800, bandQ: 0.9, attack: 0.004, release: 0.045, knee: 0.14 }
    };
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
    /** 当前灵敏度。 */
    let sensitivity = 'medium';
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
      $('desOutput').hidden = true;
      $('desResult').textContent = '';
      $('desDownload').disabled = true;
    }
    /**
     * 锁定或解锁控件。
     * @param {boolean} on 是否锁定
     */
    function lock(on){
      busy = on;
      $('desConvert').disabled = on;
      $('desSample').disabled = on;
      $('desClear').disabled = on;
      fileInput.disabled = on;
      sensChips.querySelectorAll('button').forEach(btn => { btn.disabled = on; });
      if (!on) $('desDownload').disabled = !outputUrl;
    }
    /** 刷新灵敏度芯片选中态。 */
    function paintSens(){
      sensChips.querySelectorAll('[data-sens]').forEach(btn => {
        const on = btn.dataset.sens === sensitivity;
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
      $('desPct').textContent = value + '%';
      $('desBar').style.width = value + '%';
      $('desBar').setAttribute('aria-valuenow', String(value));
      const label = stepKey === 'done' ? M.done : (M[stepKey] || stepKey);
      $('desStep').textContent = label;
      hud.querySelectorAll('.bcw-hud-steps li').forEach(li => {
        const name = li.getAttribute('data-step');
        li.classList.toggle('is-active', name === stepKey);
        li.classList.toggle('is-done', ['read','decode','deess','write'].indexOf(name) < ['read','decode','deess','write'].indexOf(stepKey) || stepKey === 'done');
      });
    }
    /**
     * 以错误态显示失败。
     * @param {string} key 消息键
     */
    function fail(key){
      hud.hidden = false;
      hud.className = 'bcw-hud is-error is-fail mb-3';
      $('desPct').textContent = '—';
      $('desBar').style.width = '0%';
      $('desBar').setAttribute('aria-valuenow', '0');
      hud.setAttribute('role', 'alert');
      $('desStep').textContent = M[key] || M.failed;
    }
    /**
     * 选择或清空输入文件（会丢弃旧输出）。
     * @param {File|null} file 新文件
     */
    function choose(file){
      if (busy) return;
      discard();
      selected = file || null;
      $('desName').textContent = file ? file.name : '';
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
     * OfflineAudioContext 单节 Biquad 渲染。
     * @param {AudioBuffer} buffer 源缓冲
     * @param {BiquadFilterType} type 滤波器类型
     * @param {number} frequency 中心/截止频率 Hz
     * @param {number} Q Q 值
     * @param {number|null} gainDb 增益 dB（高架等需要）
     */
    async function renderBiquad(buffer, type, frequency, Q, gainDb){
      const Offline = window.OfflineAudioContext || window.webkitOfflineAudioContext;
      if (!Offline) throw Error('err_decode');
      const channels = Math.min(2, buffer.numberOfChannels);
      const offline = new Offline(channels, buffer.length, buffer.sampleRate);
      const src = offline.createBufferSource();
      src.buffer = buffer;
      const bq = offline.createBiquadFilter();
      bq.type = type;
      bq.frequency.value = frequency;
      bq.Q.value = Q;
      if (gainDb != null) bq.gain.value = gainDb;
      src.connect(bq);
      bq.connect(offline.destination);
      src.start(0);
      return offline.startRendering();
    }
    /**
     * 由侧链绝对值构建平滑包络（攻击/释放）。
     * @param {Float32Array} side 侧链样本
     * @param {number} rate 采样率
     * @param {{attack:number,release:number}} cfg 攻放秒
     */
    function envelopeFollow(side, rate, cfg){
      const n = side.length;
      const out = new Float32Array(n);
      const atk = Math.exp(-1 / Math.max(1, cfg.attack * rate));
      const rel = Math.exp(-1 / Math.max(1, cfg.release * rate));
      let env = 0;
      for (let i = 0; i < n; i++){
        const x = Math.abs(Number.isFinite(side[i]) ? side[i] : 0);
        const coeff = x > env ? atk : rel;
        env = coeff * env + (1 - coeff) * x;
        out[i] = env;
      }
      return out;
    }
    /**
     * 齿音比 → 混音增益：相对宽带能量超过阈值时推向湿声（高架衰减版）。
     * @param {Float32Array} fullEnv 全频包络
     * @param {Float32Array} sideEnv 齿音频段包络
     * @param {{thresh:number,maxBlend:number,knee:number}} cfg 灵敏度
     */
    function blendFromRatio(fullEnv, sideEnv, cfg){
      const n = fullEnv.length;
      const gain = new Float32Array(n);
      let active = 0;
      for (let i = 0; i < n; i++){
        const ratio = sideEnv[i] / (fullEnv[i] + 1e-6);
        let t = (ratio - cfg.thresh) / Math.max(1e-4, cfg.knee);
        if (t < 0) t = 0;
        else if (t > 1) t = 1;
        const g = t * t * (3 - 2 * t) * cfg.maxBlend;
        gain[i] = g;
        if (g > 0.05) active++;
      }
      return { gain, activePct: (100 * active) / Math.max(1, n) };
    }
    /**
     * 按样本混音干湿声道。
     * @param {Float32Array} dry 干声
     * @param {Float32Array} wet 湿声（高架衰减）
     * @param {Float32Array} gain 0=全干 1=全湿
     */
    function mixChannel(dry, wet, gain){
      const n = dry.length;
      const out = new Float32Array(n);
      for (let i = 0; i < n; i++){
        const g = gain[i];
        const d = Number.isFinite(dry[i]) ? dry[i] : 0;
        const w = Number.isFinite(wet[i]) ? wet[i] : 0;
        out[i] = d * (1 - g) + w * g;
      }
      return out;
    }
    /**
     * 对 AudioBuffer 做去齿音：侧链检测齿音频段能量，动态混入高架衰减版，再软峰值保护。
     * @param {AudioBuffer} buffer 解码缓冲
     * @param {string} sensKey 灵敏度键
     */
    async function deessBuffer(buffer, sensKey){
      const cfg = SENS[sensKey];
      if (!cfg) throw Error('err_encoder');
      const peakBefore = absPeak(buffer);
      if (!(peakBefore > 1e-8)) throw Error('err_silence');
      const wetBuf = await renderBiquad(buffer, 'highshelf', cfg.shelfHz, 0.7, cfg.shelfGain);
      const sideBuf = await renderBiquad(buffer, 'bandpass', cfg.bandHz, cfg.bandQ, null);
      const channels = Math.min(2, buffer.numberOfChannels);
      const frames = buffer.length;
      const rate = Math.round(buffer.sampleRate);
      const out = [];
      let activeSum = 0;
      let peakAfter = 0;
      for (let c = 0; c < channels; c++){
        const dry = buffer.getChannelData(c);
        const wet = wetBuf.getChannelData(Math.min(c, wetBuf.numberOfChannels - 1));
        const side = sideBuf.getChannelData(Math.min(c, sideBuf.numberOfChannels - 1));
        const fullEnv = envelopeFollow(dry, rate, cfg);
        const sideEnv = envelopeFollow(side, rate, cfg);
        const blended = blendFromRatio(fullEnv, sideEnv, cfg);
        activeSum += blended.activePct;
        const mixed = mixChannel(dry, wet, blended.gain);
        out.push(mixed);
        for (let i = 0; i < frames; i++){
          const v = Math.abs(mixed[i]);
          if (v > peakAfter) peakAfter = v;
        }
      }
      let scale = 1;
      if (peakAfter > PEAK_LIMIT) scale = PEAK_LIMIT / peakAfter;
      if (scale !== 1){
        peakAfter = 0;
        for (let c = 0; c < channels; c++){
          for (let i = 0; i < frames; i++){
            out[c][i] *= scale;
            const v = Math.abs(out[c][i]);
            if (v > peakAfter) peakAfter = v;
          }
        }
      }
      return { channels: out, rate, active: activeSum / channels, peakBefore, peakAfter };
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
    /** 主转换：读 → 解码 → De-ess → 写 WAV。 */
    async function convert(){
      if (busy) return;
      discard();
      if (!selected){ fail('empty'); return; }
      lock(true);
      hud.hidden = false;
      hud.className = 'bcw-hud is-on mb-3';
      hud.setAttribute('role', 'status');
      $('desCurrent').textContent = selected.name;
      started = performance.now();
      const clock = () => { $('desTime').textContent = fill(M.elapsed, { s: ((performance.now() - started) / 1000).toFixed(1) }); };
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
        if (SENS_KEYS.indexOf(sensitivity) < 0) throw Error('err_encoder');
        progress(42, 'deess');
        await yieldUi();
        const fixed = await deessBuffer(decoded, sensitivity);
        progress(78, 'write');
        await yieldUi();
        const blob = writeWav(fixed.channels, fixed.rate);
        if (!blob.size) throw Error('err_encoder');
        outputUrl = URL.createObjectURL(blob);
        audio.src = outputUrl;
        $('desOutput').hidden = false;
        const sensLabel = M['sens_' + sensitivity] || sensitivity;
        $('desResult').textContent = fill(M.result, {
          seconds: decoded.duration.toFixed(2),
          sensitivity: sensLabel,
          active: fixed.active.toFixed(1),
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
     * 合成约 3 s、48 kHz 单声道含人造刺耳齿音突发的样例。
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
      /** 齿音突发中心（秒）。 */
      const bursts = [0.55, 1.15, 1.75, 2.35];
      let noise = 0;
      for (let i = 0; i < frames; i++){
        const t = i / rate;
        const fade = Math.min(1, i / 2000, (frames - i) / 2000);
        const env = (t > 0.2 && t < 2.75) ? (0.55 + 0.45 * Math.sin(2 * Math.PI * 2.2 * t)) : 0.05;
        let sample = env * (
          0.42 * Math.sin(2 * Math.PI * 180 * t) +
          0.28 * Math.sin(2 * Math.PI * 360 * t) +
          0.18 * Math.sin(2 * Math.PI * 720 * t) +
          0.1 * Math.sin(2 * Math.PI * 1440 * t)
        );
        noise = noise * 0.97 + (Math.random() * 2 - 1) * 0.03;
        for (let b = 0; b < bursts.length; b++){
          const d = Math.abs(t - bursts[b]);
          if (d < 0.07){
            const shape = Math.cos((d / 0.07) * Math.PI * 0.5);
            const hiss = noise * 0.55 + Math.sin(2 * Math.PI * (5200 + b * 400) * t) * 0.35;
            sample += hiss * shape * shape * 0.85;
          }
        }
        sample *= fade;
        v.setInt16(44 + i * 2, Math.max(-32768, Math.min(32767, Math.round(sample * 24000))), true);
      }
      return new File([bytes], M.sample_name + '.wav', { type: 'audio/wav' });
    }
    /** 进页或点 Sample：加载带齿音样例并以默认 Medium 自动 De-ess。 */
    async function loadSample(){
      if (busy) return;
      sensitivity = 'medium';
      paintSens();
      choose(sampleWav());
      await convert();
    }
    fileInput.addEventListener('change', () => choose(fileInput.files[0]));
    $('desDrop').addEventListener('dragover', event => event.preventDefault());
    $('desDrop').addEventListener('drop', event => {
      event.preventDefault();
      if (busy) return;
      const files = event.dataTransfer.files;
      if (files.length !== 1){ choose(null); fail('err_file'); return; }
      choose(files[0]);
    });
    sensChips.addEventListener('click', event => {
      const btn = event.target.closest('[data-sens]');
      if (!btn || busy) return;
      sensitivity = btn.dataset.sens;
      paintSens();
      discard();
      hud.hidden = true;
    });
    $('desConvert').addEventListener('click', convert);
    $('desSample').addEventListener('click', loadSample);
    $('desClear').addEventListener('click', () => choose(null));
    $('desDownload').addEventListener('click', () => {
      if (!outputUrl || busy) return;
      const link = document.createElement('a');
      link.href = outputUrl;
      link.download = (selected.name.replace(/\\.[^.]+$/, '') || 'audio') + '-deess.wav';
      document.body.appendChild(link);
      link.click();
      link.remove();
    });
    window.addEventListener('pagehide', () => {
      clearInterval(timer);
      if (outputUrl) URL.revokeObjectURL(outputUrl);
    });
    paintSens();
    loadSample();
  })();
</script>`;

	/** catalog 元数据（related / schema）。 */
	const toolMeta = getToolBySlug('de-ess-a-voiceover');
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
