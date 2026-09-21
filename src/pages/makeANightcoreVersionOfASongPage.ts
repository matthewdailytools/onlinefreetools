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
const P = 'tool_make_a_nightcore_version_of_a_song';

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
 * 制作歌曲夜核版：按倍率重采样同时加速并升调，导出 16-bit WAV（S34）。
 * ≠ S32 只变速保音高；≠ S33 只变调保时长。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderMakeANightcoreVersionOfASongPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 工具规范路径（无语言前缀）。 */
	const toolPath = '/tools/make-a-nightcore-version-of-a-song';
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
			currentSlug: 'make-a-nightcore-version-of-a-song',
			currentAnchor: '#nightcore',
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
		'nightcore',
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
		'speed_125',
		'speed_135',
		'speed_150',
		'speed_custom',
	];
	/** 消息字典：键 → 当前语言字符串。 */
	const messages = Object.fromEntries(uiKeys.map((key) => [key, t(opts.lang, `${P}_${key}`)]));

	/** 工具主面板与结果区 markup。 */
	const contentHtml = `
    <div id="nightcore" class="tool-page-heading mb-3"><h1 class="h4">${tr('title')}</h1><p>${tr('desc')}</p></div>
    <section class="tool-panel" id="ncPanel">
      <label class="tool-dropzone mb-3" id="ncDrop" for="ncFile"><input id="ncFile" type="file" accept=".wav,.mp3,.m4a,.aac,.ogg,audio/*"><span class="tool-dropzone-title">${tr('choose')}</span><span class="tool-dropzone-hint">${tr('hint')}</span><span id="ncName" class="tool-dropzone-file"></span></label>
      <div class="tools-bar d-flex flex-wrap mb-3" style="gap:.5rem">
        <button id="ncConvert" class="btn btn-primary" type="button">${tr('convert')}</button>
        <button id="ncDownload" class="btn btn-outline-primary" type="button" disabled>${tr('download')}</button>
        <button id="ncSample" class="btn btn-outline-secondary" type="button">${tr('sample')}</button>
        <button id="ncClear" class="btn btn-outline-secondary" type="button">${tr('clear')}</button>
      </div>
      <details class="mb-3" open><summary>${tr('advanced')}</summary>
        <p class="form-label mt-2 mb-1">${tr('speed_label')}</p>
        <div class="nc-preset-chips mb-2" id="ncSpeedChips" role="group" aria-label="${tr('speed_label')}">
          <button type="button" class="btn btn-sm btn-primary" data-speed="1.25" aria-pressed="true">${tr('speed_125')}</button>
          <button type="button" class="btn btn-sm btn-outline-secondary" data-speed="1.35" aria-pressed="false">${tr('speed_135')}</button>
          <button type="button" class="btn btn-sm btn-outline-secondary" data-speed="1.5" aria-pressed="false">${tr('speed_150')}</button>
          <button type="button" class="btn btn-sm btn-outline-secondary" data-speed="custom" aria-pressed="false">${tr('speed_custom')}</button>
        </div>
        <label class="form-label" for="ncCustom">${tr('custom_label')}</label>
        <input id="ncCustom" class="form-control mb-2" type="number" min="1.1" max="1.8" step="0.01" value="1.3" disabled style="max-width:10rem" inputmode="decimal">
        <p class="form-text">${tr('settings_hint')}</p>
      </details>
      <div id="ncHud" class="bcw-hud mb-3" role="status" aria-live="polite" hidden>
        <div class="bcw-hud-top"><div class="bcw-hud-spin" aria-hidden="true"></div><div class="bcw-hud-pct" id="ncPct">0%</div><div class="bcw-hud-copy"><div class="bcw-hud-title">${tr('progress')}</div><div class="bcw-hud-step" id="ncStep"></div><div class="bcw-hud-time" id="ncTime"></div></div></div>
        <div class="progress" style="height:1.35rem"><div id="ncBar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div><span class="bcw-hud-sheen" aria-hidden="true"></span></div>
        <ol class="bcw-hud-steps"><li data-step="read">${tr('read')}</li><li data-step="decode">${tr('decode')}</li><li data-step="nightcore">${tr('nightcore')}</li><li data-step="write">${tr('write')}</li></ol><div class="bcw-hud-url" id="ncCurrent"></div>
      </div>
      <div id="ncOutput" hidden><h2 class="h5">${tr('preview')}</h2><p id="ncResult"></p><audio id="ncAudio" controls preload="metadata" style="max-width:100%" aria-label="${tr('preview')}"></audio></div>
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
				label: 'Wikipedia: Nightcore',
				href: 'https://en.wikipedia.org/wiki/Nightcore',
			},
			{
				label: 'Wikipedia: Audio time stretching and pitch scaling',
				href: 'https://en.wikipedia.org/wiki/Audio_time_stretching_and_pitch_scaling',
			},
		],
	});

	/** 金标 HUD、预设芯片与布局补充样式。 */
	const extraHeadHtml = `<style>${bcwHudCss({ hudId: 'ncHud', convertBtnId: 'ncConvert' })}#ncHud.is-error{border-color:#b91c1c;background:#fff1f2}#ncHud:not(.is-on) .bcw-hud-spin{animation:none}.nc-preset-chips{display:flex;flex-wrap:wrap;gap:.4rem}.site-footer nav.d-inline{display:inline-flex!important;flex-wrap:wrap;justify-content:center;max-width:100%}</style>`;

	/** 客户端转换管线（读 → 解码 → 夜核重采样加速+升调 → 写 16-bit WAV）。 */
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
    const fileInput = $('ncFile');
    /** 速度芯片容器。 */
    const speedChips = $('ncSpeedChips');
    /** 自定义倍率输入。 */
    const customInput = $('ncCustom');
    /** 进度 HUD。 */
    const hud = $('ncHud');
    /** 预览 audio。 */
    const audio = $('ncAudio');
    /** 峰值软保护上限。 */
    const PEAK_LIMIT = 0.98;
    /** 预设倍率（不含 custom）。 */
    const PRESET_SPEED = [1.25, 1.35, 1.5];
    /** 允许的最小自定义倍率。 */
    const SPEED_MIN = 1.1;
    /** 允许的最大自定义倍率。 */
    const SPEED_MAX = 1.8;
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
    let speedMode = '1.25';
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
      $('ncOutput').hidden = true;
      $('ncResult').textContent = '';
      $('ncDownload').disabled = true;
    }
    /**
     * 锁定或解锁控件。
     * @param {boolean} on 是否锁定
     */
    function lock(on){
      busy = on;
      $('ncConvert').disabled = on;
      $('ncSample').disabled = on;
      $('ncClear').disabled = on;
      fileInput.disabled = on;
      customInput.disabled = on || speedMode !== 'custom';
      speedChips.querySelectorAll('button').forEach(btn => { btn.disabled = on; });
      if (!on) $('ncDownload').disabled = !outputUrl;
    }
    /** 刷新速度芯片选中态与自定义输入可用态。 */
    function paintSpeed(){
      speedChips.querySelectorAll('[data-speed]').forEach(btn => {
        const on = btn.dataset.speed === speedMode;
        btn.classList.toggle('btn-primary', on);
        btn.classList.toggle('btn-outline-secondary', !on);
        btn.setAttribute('aria-pressed', on ? 'true' : 'false');
      });
      customInput.disabled = busy || speedMode !== 'custom';
    }
    /**
     * 解析当前有效夜核倍率。
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
     * 倍率换算约合半音（展示用）。
     * @param {number} ratio 夜核倍率
     */
    function ratioToSemitones(ratio){
      return (12 * Math.log(ratio) / Math.log(2));
    }
    /**
     * 更新 HUD 百分比与步骤高亮。
     * @param {number} pct 百分比
     * @param {string} stepKey 步骤键或 done
     */
    function progress(pct, stepKey){
      const value = Math.max(0, Math.min(100, Math.round(pct)));
      $('ncPct').textContent = value + '%';
      $('ncBar').style.width = value + '%';
      $('ncBar').setAttribute('aria-valuenow', String(value));
      const label = stepKey === 'done' ? M.done : (M[stepKey] || stepKey);
      $('ncStep').textContent = label;
      hud.querySelectorAll('.bcw-hud-steps li').forEach(li => {
        const name = li.getAttribute('data-step');
        li.classList.toggle('is-active', name === stepKey);
        li.classList.toggle('is-done', ['read','decode','nightcore','write'].indexOf(name) < ['read','decode','nightcore','write'].indexOf(stepKey) || stepKey === 'done');
      });
    }
    /**
     * 以错误态显示失败。
     * @param {string} key 消息键
     */
    function fail(key){
      hud.hidden = false;
      hud.className = 'bcw-hud is-error is-fail mb-3';
      $('ncPct').textContent = '—';
      $('ncBar').style.width = '0%';
      $('ncBar').setAttribute('aria-valuenow', '0');
      hud.setAttribute('role', 'alert');
      $('ncStep').textContent = M[key] || M.failed;
    }
    /**
     * 选择或清空输入文件（会丢弃旧输出）。
     * @param {File|null} file 新文件
     */
    function choose(file){
      if (busy) return;
      discard();
      selected = file || null;
      $('ncName').textContent = file ? file.name : '';
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
     * 线性插值重采样：ratio>1 升高音高并缩短时长（经典夜核 combo）。
     * @param {Float32Array} input 输入样本
     * @param {number} ratio 夜核倍率
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
     * 对 AudioBuffer 做夜核：重采样同时加速并升调，软峰值保护（不做 WSOLA 回正）。
     * @param {AudioBuffer} buffer 解码缓冲
     * @param {number} ratio 夜核倍率（>1）
     */
    async function nightcoreBuffer(buffer, ratio){
      const channels = Math.min(2, buffer.numberOfChannels);
      const rate = Math.round(buffer.sampleRate);
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
      const out = [];
      for (let c = 0; c < channels; c++){
        progress(44 + (c / channels) * 28, 'nightcore');
        await yieldUi();
        out.push(resampleChannel(src[c], ratio));
      }
      let frames = out[0].length;
      for (let c = 1; c < channels; c++) frames = Math.min(frames, out[c].length);
      for (let c = 0; c < channels; c++){
        if (out[c].length !== frames){
          const trimmed = new Float32Array(frames);
          trimmed.set(out[c].subarray(0, frames));
          out[c] = trimmed;
        }
      }
      let peakAfter = absPeakChannels(out);
      if (peakAfter > PEAK_LIMIT){
        const scale = PEAK_LIMIT / peakAfter;
        for (let c = 0; c < channels; c++){
          for (let i = 0; i < frames; i++) out[c][i] *= scale;
        }
        peakAfter = PEAK_LIMIT;
      }
      return { channels: out, rate, peakBefore, peakAfter, outSeconds: frames / rate };
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
    /** 主转换：读 → 解码 → Nightcore → 写 WAV。 */
    async function convert(){
      if (busy) return;
      if (!selected){ fail('empty'); return; }
      if (!isAudio(selected)){ fail('err_format'); return; }
      if (selected.size > 40 * 1024 * 1024){ fail('err_limit'); return; }
      let speed;
      try { speed = resolveSpeed(); } catch (e){ fail(e && e.message === 'err_speed' ? 'err_speed' : 'err_speed'); return; }
      discard();
      lock(true);
      hud.hidden = false;
      hud.className = 'bcw-hud is-on mb-3';
      hud.setAttribute('role', 'status');
      started = Date.now();
      clearInterval(timer);
      timer = setInterval(() => {
        $('ncTime').textContent = fill(M.elapsed, { s: ((Date.now() - started) / 1000).toFixed(1) });
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
        progress(40, 'nightcore');
        await yieldUi();
        const shifted = await nightcoreBuffer(decoded, speed);
        progress(86, 'write');
        await yieldUi();
        const blob = writeWav(shifted.channels, shifted.rate);
        outputUrl = URL.createObjectURL(blob);
        audio.src = outputUrl;
        $('ncOutput').hidden = false;
        const inSec = decoded.duration;
        const st = ratioToSemitones(speed);
        $('ncResult').textContent = fill(M.result, {
          seconds: inSec.toFixed(2),
          outSeconds: shifted.outSeconds.toFixed(2),
          speed: speed.toFixed(2),
          semitones: (st >= 0 ? '+' : '') + st.toFixed(1),
          output: Math.round(blob.size / 1024)
        });
        progress(100, 'done');
        $('ncDownload').disabled = false;
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
     * 生成三秒谐波演示 WAV（有清晰音高，便于听夜核加速+升调）。
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
      return new File([bytes], (M.sample_name || 'nightcore-demo') + '.wav', { type: 'audio/wav' });
    }
    /** 加载样例并以默认 1.25× 自动夜核。 */
    async function loadSample(){
      if (busy) return;
      speedMode = '1.25';
      customInput.value = '1.3';
      paintSpeed();
      choose(sampleWav());
      await convert();
    }
    fileInput.addEventListener('change', () => choose(fileInput.files[0]));
    $('ncDrop').addEventListener('dragover', event => event.preventDefault());
    $('ncDrop').addEventListener('drop', event => {
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
    customInput.addEventListener('input', () => {
      if (busy || speedMode !== 'custom') return;
      discard();
      hud.hidden = true;
    });
    $('ncConvert').addEventListener('click', convert);
    $('ncSample').addEventListener('click', loadSample);
    $('ncClear').addEventListener('click', () => choose(null));
    $('ncDownload').addEventListener('click', () => {
      if (!outputUrl || busy) return;
      const link = document.createElement('a');
      link.href = outputUrl;
      link.download = (selected.name.replace(/\\.[^.]+$/, '') || 'audio') + '-nightcore.wav';
      document.body.appendChild(link);
      link.click();
      link.remove();
    });
    window.addEventListener('pagehide', () => {
      clearInterval(timer);
      if (outputUrl) URL.revokeObjectURL(outputUrl);
    });
    paintSpeed();
    loadSample();
  })();
</script>`;

	/** catalog 元数据（related / schema）。 */
	const toolMeta = getToolBySlug('make-a-nightcore-version-of-a-song');
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
