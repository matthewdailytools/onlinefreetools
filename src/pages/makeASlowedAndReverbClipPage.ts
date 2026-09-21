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
const P = 'tool_make_a_slowed_and_reverb_clip';

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
 * 制作 slowed + reverb 剪辑：减速重采样（降调拉长）+ 反馈延迟混响，导出 16-bit WAV（S35）。
 * ≠ S32 只变速保音高；≠ S34 夜核加速升调；≠ S40 只混响。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderMakeASlowedAndReverbClipPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 工具规范路径（无语言前缀）。 */
	const toolPath = '/tools/make-a-slowed-and-reverb-clip';
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
			currentSlug: 'make-a-slowed-and-reverb-clip',
			currentAnchor: '#slowed-reverb',
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
		'slow',
		'reverb',
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
		'err_speed',
		'sample_name',
		'result',
		'empty',
		'speed_075',
		'speed_080',
		'speed_085',
		'speed_custom',
		'reverb_soft',
		'reverb_medium',
		'reverb_heavy',
	];
	/** 消息字典：键 → 当前语言字符串。 */
	const messages = Object.fromEntries(uiKeys.map((key) => [key, t(opts.lang, `${P}_${key}`)]));

	/** 工具主面板与结果区 markup。 */
	const contentHtml = `
    <div id="slowed-reverb" class="tool-page-heading mb-3"><h1 class="h4">${tr('title')}</h1><p>${tr('desc')}</p></div>
    <section class="tool-panel" id="srPanel">
      <label class="tool-dropzone mb-3" id="srDrop" for="srFile"><input id="srFile" type="file" accept=".wav,.mp3,.m4a,.aac,.ogg,audio/*"><span class="tool-dropzone-title">${tr('choose')}</span><span class="tool-dropzone-hint">${tr('hint')}</span><span id="srName" class="tool-dropzone-file"></span></label>
      <div class="tools-bar d-flex flex-wrap mb-3" style="gap:.5rem">
        <button id="srConvert" class="btn btn-primary" type="button">${tr('convert')}</button>
        <button id="srDownload" class="btn btn-outline-primary" type="button" disabled>${tr('download')}</button>
        <button id="srSample" class="btn btn-outline-secondary" type="button">${tr('sample')}</button>
        <button id="srClear" class="btn btn-outline-secondary" type="button">${tr('clear')}</button>
      </div>
      <details class="mb-3" open><summary>${tr('advanced')}</summary>
        <p class="form-label mt-2 mb-1">${tr('speed_label')}</p>
        <div class="sr-preset-chips mb-2" id="srSpeedChips" role="group" aria-label="${tr('speed_label')}">
          <button type="button" class="btn btn-sm btn-outline-secondary" data-speed="0.75" aria-pressed="false">${tr('speed_075')}</button>
          <button type="button" class="btn btn-sm btn-primary" data-speed="0.8" aria-pressed="true">${tr('speed_080')}</button>
          <button type="button" class="btn btn-sm btn-outline-secondary" data-speed="0.85" aria-pressed="false">${tr('speed_085')}</button>
          <button type="button" class="btn btn-sm btn-outline-secondary" data-speed="custom" aria-pressed="false">${tr('speed_custom')}</button>
        </div>
        <label class="form-label" for="srCustom">${tr('custom_label')}</label>
        <input id="srCustom" class="form-control mb-2" type="number" min="0.55" max="0.95" step="0.01" value="0.7" disabled style="max-width:10rem" inputmode="decimal">
        <p class="form-label mb-1">${tr('reverb_label')}</p>
        <div class="sr-preset-chips mb-2" id="srReverbChips" role="group" aria-label="${tr('reverb_label')}">
          <button type="button" class="btn btn-sm btn-outline-secondary" data-reverb="soft" aria-pressed="false">${tr('reverb_soft')}</button>
          <button type="button" class="btn btn-sm btn-primary" data-reverb="medium" aria-pressed="true">${tr('reverb_medium')}</button>
          <button type="button" class="btn btn-sm btn-outline-secondary" data-reverb="heavy" aria-pressed="false">${tr('reverb_heavy')}</button>
        </div>
        <p class="form-text">${tr('settings_hint')}</p>
      </details>
      <div id="srHud" class="bcw-hud mb-3" role="status" aria-live="polite" hidden>
        <div class="bcw-hud-top"><div class="bcw-hud-spin" aria-hidden="true"></div><div class="bcw-hud-pct" id="srPct">0%</div><div class="bcw-hud-copy"><div class="bcw-hud-title">${tr('progress')}</div><div class="bcw-hud-step" id="srStep"></div><div class="bcw-hud-time" id="srTime"></div></div></div>
        <div class="progress" style="height:1.35rem"><div id="srBar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div><span class="bcw-hud-sheen" aria-hidden="true"></span></div>
        <ol class="bcw-hud-steps"><li data-step="read">${tr('read')}</li><li data-step="decode">${tr('decode')}</li><li data-step="slow">${tr('slow')}</li><li data-step="reverb">${tr('reverb')}</li><li data-step="write">${tr('write')}</li></ol><div class="bcw-hud-url" id="srCurrent"></div>
      </div>
      <div id="srOutput" hidden><h2 class="h5">${tr('preview')}</h2><p id="srResult"></p><audio id="srAudio" controls preload="metadata" style="max-width:100%" aria-label="${tr('preview')}"></audio></div>
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
				label: 'MDN: AudioBuffer',
				href: 'https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer',
			},
			{
				label: 'Wikipedia: Reverberation',
				href: 'https://en.wikipedia.org/wiki/Reverberation',
			},
			{
				label: 'Wikipedia: Audio time stretching and pitch scaling',
				href: 'https://en.wikipedia.org/wiki/Audio_time_stretching_and_pitch_scaling',
			},
		],
	});

	/** 金标 HUD、预设芯片与布局补充样式。 */
	const extraHeadHtml = `<style>${bcwHudCss({ hudId: 'srHud', convertBtnId: 'srConvert' })}#srHud.is-error{border-color:#b91c1c;background:#fff1f2}#srHud:not(.is-on) .bcw-hud-spin{animation:none}.sr-preset-chips{display:flex;flex-wrap:wrap;gap:.4rem}.site-footer nav.d-inline{display:inline-flex!important;flex-wrap:wrap;justify-content:center;max-width:100%}</style>`;

	/** 客户端转换管线（读 → 解码 → 减速重采样 → 反馈混响 → 写 16-bit WAV）。 */
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
    const fileInput = $('srFile');
    /** 减速芯片容器。 */
    const speedChips = $('srSpeedChips');
    /** 混响芯片容器。 */
    const reverbChips = $('srReverbChips');
    /** 自定义倍率输入。 */
    const customInput = $('srCustom');
    /** 进度 HUD。 */
    const hud = $('srHud');
    /** 预览 audio。 */
    const audio = $('srAudio');
    /** 峰值软保护上限。 */
    const PEAK_LIMIT = 0.98;
    /** 预设减速倍率（不含 custom）。 */
    const PRESET_SPEED = [0.75, 0.8, 0.85];
    /** 允许的最小自定义倍率。 */
    const SPEED_MIN = 0.55;
    /** 允许的最大自定义倍率。 */
    const SPEED_MAX = 0.95;
    /** 混响档位参数：湿声、反馈、尾音秒数。 */
    const REVERB = {
      soft: { wet: 0.22, feedback: 0.32, tail: 0.55 },
      medium: { wet: 0.38, feedback: 0.48, tail: 0.95 },
      heavy: { wet: 0.52, feedback: 0.62, tail: 1.45 }
    };
    /** HUD 步骤顺序。 */
    const STEPS = ['read','decode','slow','reverb','write'];
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
    /** 芯片模式：预设数字字符串或 'custom'。 */
    let speedMode = '0.8';
    /** 混响档：soft | medium | heavy。 */
    let reverbMode = 'medium';
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
      $('srOutput').hidden = true;
      $('srResult').textContent = '';
      $('srDownload').disabled = true;
    }
    /**
     * 锁定或解锁控件。
     * @param {boolean} on 是否锁定
     */
    function lock(on){
      busy = on;
      $('srConvert').disabled = on;
      $('srSample').disabled = on;
      $('srClear').disabled = on;
      fileInput.disabled = on;
      customInput.disabled = on || speedMode !== 'custom';
      speedChips.querySelectorAll('button').forEach(btn => { btn.disabled = on; });
      reverbChips.querySelectorAll('button').forEach(btn => { btn.disabled = on; });
      if (!on) $('srDownload').disabled = !outputUrl;
    }
    /** 刷新减速芯片选中态与自定义输入可用态。 */
    function paintSpeed(){
      speedChips.querySelectorAll('[data-speed]').forEach(btn => {
        const on = btn.dataset.speed === speedMode;
        btn.classList.toggle('btn-primary', on);
        btn.classList.toggle('btn-outline-secondary', !on);
        btn.setAttribute('aria-pressed', on ? 'true' : 'false');
      });
      customInput.disabled = busy || speedMode !== 'custom';
    }
    /** 刷新混响芯片选中态。 */
    function paintReverb(){
      reverbChips.querySelectorAll('[data-reverb]').forEach(btn => {
        const on = btn.dataset.reverb === reverbMode;
        btn.classList.toggle('btn-primary', on);
        btn.classList.toggle('btn-outline-secondary', !on);
        btn.setAttribute('aria-pressed', on ? 'true' : 'false');
      });
    }
    /**
     * 解析当前有效减速倍率。
     * @returns {number}
     */
    function resolveSpeed(){
      if (speedMode === 'custom'){
        const v = Number(customInput.value);
        if (!Number.isFinite(v) || v < SPEED_MIN || v > SPEED_MAX) throw Error('err_speed');
        return v;
      }
      const v = Number(speedMode);
      if (!Number.isFinite(v) || PRESET_SPEED.indexOf(v) < 0) throw Error('err_speed');
      return v;
    }
    /**
     * 倍率换算约合半音（展示用；减速为负）。
     * @param {number} ratio 减速倍率
     */
    function ratioToSemitones(ratio){
      return (12 * Math.log(ratio) / Math.log(2));
    }
    /**
     * 混响档展示文案。
     * @param {string} mode soft|medium|heavy
     */
    function reverbLabel(mode){
      if (mode === 'soft') return M.reverb_soft;
      if (mode === 'heavy') return M.reverb_heavy;
      return M.reverb_medium;
    }
    /**
     * 更新 HUD 百分比与步骤高亮。
     * @param {number} pct 百分比
     * @param {string} stepKey 步骤键或 done
     */
    function progress(pct, stepKey){
      const value = Math.max(0, Math.min(100, Math.round(pct)));
      $('srPct').textContent = value + '%';
      $('srBar').style.width = value + '%';
      $('srBar').setAttribute('aria-valuenow', String(value));
      const label = stepKey === 'done' ? M.done : (M[stepKey] || stepKey);
      $('srStep').textContent = label;
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
      $('srPct').textContent = '—';
      $('srBar').style.width = '0%';
      $('srBar').setAttribute('aria-valuenow', '0');
      hud.setAttribute('role', 'alert');
      $('srStep').textContent = M[key] || M.failed;
    }
    /**
     * 选择或清空输入文件（会丢弃旧输出）。
     * @param {File|null} file 新文件
     */
    function choose(file){
      if (busy) return;
      discard();
      selected = file || null;
      $('srName').textContent = file ? file.name : '';
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
     * @param {Float32Array[]} channels 声道样本数组
     */
    function absPeakChannels(channels){
      let peak = 0;
      for (let c = 0; c < channels.length; c++){
        const data = channels[c];
        for (let i = 0; i < data.length; i++){
          const v = Math.abs(Number.isFinite(data[i]) ? data[i] : 0);
          if (v > peak) peak = v;
        }
      }
      return peak;
    }
    /**
     * 线性插值重采样：ratio&lt;1 降低音高并拉长时长（经典 slowed）。
     * @param {Float32Array} input 输入样本
     * @param {number} ratio 减速倍率（0&lt;ratio&lt;1）
     */
    function resampleChannel(input, ratio){
      if (!(input.length > 0)) return new Float32Array(0);
      if (Math.abs(ratio - 1) < 1e-6){
        const copy = new Float32Array(input.length);
        copy.set(input);
        return copy;
      }
      const outLen = Math.max(1, Math.floor(input.length / ratio));
      const out = new Float32Array(outLen);
      for (let i = 0; i < outLen; i++){
        const src = i * ratio;
        const i0 = Math.floor(src);
        const i1 = Math.min(input.length - 1, i0 + 1);
        const f = src - i0;
        const a = Number.isFinite(input[i0]) ? input[i0] : 0;
        const b = Number.isFinite(input[i1]) ? input[i1] : 0;
        out[i] = a + (b - a) * f;
      }
      return out;
    }
    /**
     * 多抽头反馈延迟混响（convolution-lite），末尾留尾音。
     * @param {Float32Array} input 已减速声道
     * @param {number} rate 采样率 Hz
     * @param {{wet:number,feedback:number,tail:number}} cfg 混响参数
     */
    function reverbChannel(input, rate, cfg){
      const delaysSec = [0.0297, 0.0371, 0.0411, 0.0437];
      const delays = delaysSec.map(s => Math.max(1, Math.floor(s * rate)));
      const maxDelay = Math.max.apply(null, delays);
      const tailFrames = Math.max(0, Math.floor(cfg.tail * rate));
      const outLen = input.length + tailFrames + maxDelay;
      const out = new Float32Array(outLen);
      const lines = delays.map(() => new Float32Array(maxDelay + 8));
      const writeIdx = delays.map(() => 0);
      const dry = 1 - cfg.wet;
      for (let i = 0; i < outLen; i++){
        const drySample = i < input.length && Number.isFinite(input[i]) ? input[i] : 0;
        let wetSum = 0;
        for (let L = 0; L < delays.length; L++){
          const d = delays[L];
          const buf = lines[L];
          const r = (writeIdx[L] - d + buf.length) % buf.length;
          const delayed = buf[r];
          const fed = drySample + delayed * cfg.feedback;
          buf[writeIdx[L]] = Number.isFinite(fed) ? Math.max(-1.5, Math.min(1.5, fed)) : 0;
          writeIdx[L] = (writeIdx[L] + 1) % buf.length;
          wetSum += delayed;
        }
        out[i] = dry * drySample + cfg.wet * (wetSum / delays.length);
      }
      return out;
    }
    /**
     * 对 AudioBuffer 做 slowed+reverb：减速重采样 → 反馈混响 → 软峰值保护。
     * @param {AudioBuffer} buffer 解码缓冲
     * @param {number} ratio 减速倍率（&lt;1）
     * @param {string} revMode soft|medium|heavy
     */
    async function slowedReverbBuffer(buffer, ratio, revMode){
      const channels = Math.min(2, buffer.numberOfChannels);
      const rate = Math.round(buffer.sampleRate);
      const cfg = REVERB[revMode] || REVERB.medium;
      /** 先读出各声道。 */
      const src = [];
      for (let c = 0; c < channels; c++){
        const data = buffer.getChannelData(c);
        const copy = new Float32Array(data.length);
        copy.set(data);
        src.push(copy);
      }
      const peakBefore = absPeakChannels(src);
      if (!(peakBefore > 1e-8)) throw Error('err_silence');
      const slowed = [];
      for (let c = 0; c < channels; c++){
        progress(38 + (c / channels) * 18, 'slow');
        await yieldUi();
        slowed.push(resampleChannel(src[c], ratio));
      }
      const wet = [];
      for (let c = 0; c < channels; c++){
        progress(58 + (c / channels) * 22, 'reverb');
        await yieldUi();
        wet.push(reverbChannel(slowed[c], rate, cfg));
      }
      let frames = wet[0].length;
      for (let c = 1; c < channels; c++) frames = Math.min(frames, wet[c].length);
      for (let c = 0; c < channels; c++){
        if (wet[c].length !== frames){
          const trimmed = new Float32Array(frames);
          trimmed.set(wet[c].subarray(0, frames));
          wet[c] = trimmed;
        }
      }
      let peakAfter = absPeakChannels(wet);
      if (peakAfter > PEAK_LIMIT){
        const scale = PEAK_LIMIT / peakAfter;
        for (let c = 0; c < channels; c++){
          for (let i = 0; i < frames; i++) wet[c][i] *= scale;
        }
        peakAfter = PEAK_LIMIT;
      }
      return { channels: wet, rate, peakBefore, peakAfter, outSeconds: frames / rate };
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
    /** 主转换：读 → 解码 → Slow → Reverb → 写 WAV。 */
    async function convert(){
      if (busy) return;
      if (!selected){ fail('empty'); return; }
      if (!isAudio(selected)){ fail('err_format'); return; }
      if (selected.size > 40 * 1024 * 1024){ fail('err_limit'); return; }
      let speed;
      try { speed = resolveSpeed(); } catch (e){ fail('err_speed'); return; }
      if (!REVERB[reverbMode]){ fail('err_speed'); return; }
      discard();
      lock(true);
      hud.hidden = false;
      hud.className = 'bcw-hud is-on mb-3';
      hud.setAttribute('role', 'status');
      started = Date.now();
      clearInterval(timer);
      timer = setInterval(() => {
        $('srTime').textContent = fill(M.elapsed, { s: ((Date.now() - started) / 1000).toFixed(1) });
      }, 200);
      try {
        progress(4, 'read');
        await yieldUi();
        const buf = await selected.arrayBuffer();
        progress(18, 'decode');
        await yieldUi();
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        let decoded;
        try {
          decoded = await ctx.decodeAudioData(buf.slice(0));
        } finally {
          if (ctx.close) try { await ctx.close(); } catch (_){}
        }
        if (!decoded || decoded.numberOfChannels < 1 || decoded.numberOfChannels > 2) throw Error('err_limit');
        if (decoded.duration > 600) throw Error('err_limit');
        progress(36, 'slow');
        await yieldUi();
        const processed = await slowedReverbBuffer(decoded, speed, reverbMode);
        progress(88, 'write');
        await yieldUi();
        const blob = writeWav(processed.channels, processed.rate);
        outputUrl = URL.createObjectURL(blob);
        audio.src = outputUrl;
        $('srOutput').hidden = false;
        const inSec = decoded.duration;
        const st = ratioToSemitones(speed);
        $('srResult').textContent = fill(M.result, {
          seconds: inSec.toFixed(2),
          outSeconds: processed.outSeconds.toFixed(2),
          speed: speed.toFixed(2),
          semitones: (st >= 0 ? '+' : '') + st.toFixed(1),
          reverb: reverbLabel(reverbMode),
          output: Math.round(blob.size / 1024)
        });
        progress(100, 'done');
        $('srDownload').disabled = false;
      } catch (err){
        const key = err && typeof err.message === 'string' && M[err.message] ? err.message : 'failed';
        fail(key === 'failed' && err && /decode|EncodingError|NotSupported/i.test(String(err)) ? 'err_decode' : key);
        discard();
      } finally {
        clearInterval(timer);
        lock(false);
        hud.classList.remove('is-on');
      }
    }
    /**
     * 生成三秒谐波演示 WAV（有清晰音高，便于听减速+混响）。
     */
    function sampleWav(){
      const rate = 22050;
      const seconds = 3;
      const frames = rate * seconds;
      const data = new Float32Array(frames);
      for (let i = 0; i < frames; i++){
        const t = i / rate;
        const env = Math.min(1, t * 8) * Math.min(1, (seconds - t) * 4);
        data[i] = env * (0.45 * Math.sin(2 * Math.PI * 220 * t) + 0.28 * Math.sin(2 * Math.PI * 330 * t) + 0.18 * Math.sin(2 * Math.PI * 440 * t));
      }
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
      view.setUint32(24, rate, true);
      view.setUint32(28, rate * 2, true);
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
      return new File([bytes], (M.sample_name || 'slowed-reverb-demo') + '.wav', { type: 'audio/wav' });
    }
    /** 加载样例并以默认 0.8× + Medium 自动处理。 */
    async function loadSample(){
      if (busy) return;
      speedMode = '0.8';
      reverbMode = 'medium';
      customInput.value = '0.7';
      paintSpeed();
      paintReverb();
      choose(sampleWav());
      await convert();
    }
    fileInput.addEventListener('change', () => choose(fileInput.files[0]));
    $('srDrop').addEventListener('dragover', event => event.preventDefault());
    $('srDrop').addEventListener('drop', event => {
      event.preventDefault();
      if (busy) return;
      const files = event.dataTransfer.files;
      if (files.length !== 1){ choose(null); fail('err_file'); return; }
      choose(files[0]);
    });
    speedChips.addEventListener('click', event => {
      const btn = event.target.closest('[data-speed]');
      if (!btn || busy) return;
      speedMode = btn.dataset.speed;
      paintSpeed();
      discard();
      hud.hidden = true;
    });
    reverbChips.addEventListener('click', event => {
      const btn = event.target.closest('[data-reverb]');
      if (!btn || busy) return;
      reverbMode = btn.dataset.reverb;
      paintReverb();
      discard();
      hud.hidden = true;
    });
    customInput.addEventListener('input', () => {
      if (busy || speedMode !== 'custom') return;
      discard();
      hud.hidden = true;
    });
    $('srConvert').addEventListener('click', convert);
    $('srSample').addEventListener('click', loadSample);
    $('srClear').addEventListener('click', () => choose(null));
    $('srDownload').addEventListener('click', () => {
      if (!outputUrl || busy) return;
      const link = document.createElement('a');
      link.href = outputUrl;
      link.download = (selected.name.replace(/\\.[^.]+$/, '') || 'audio') + '-slowed-reverb.wav';
      document.body.appendChild(link);
      link.click();
      link.remove();
    });
    window.addEventListener('pagehide', () => {
      clearInterval(timer);
      if (outputUrl) URL.revokeObjectURL(outputUrl);
    });
    paintSpeed();
    paintReverb();
    loadSample();
  })();
</script>`;

	/** catalog 元数据（related / schema）。 */
	const toolMeta = getToolBySlug('make-a-slowed-and-reverb-clip');
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
