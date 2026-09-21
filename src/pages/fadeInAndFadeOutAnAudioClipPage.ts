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
const P = 'tool_fade_in_and_fade_out_an_audio_clip';

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
 * 给音频剪辑加头尾淡入淡出，导出 16-bit WAV（S22）。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderFadeInAndFadeOutAnAudioClipPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 工具规范路径（无语言前缀）。 */
	const toolPath = '/tools/fade-in-and-fade-out-an-audio-clip';
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
			currentSlug: 'fade-in-and-fade-out-an-audio-clip',
			currentAnchor: '#fade-io',
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
		'fade',
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
		'err_short',
		'sample_name',
		'result',
		'empty',
		'curve_linear',
		'curve_equal',
	];
	/** 消息字典：键 → 当前语言字符串。 */
	const messages = Object.fromEntries(uiKeys.map((key) => [key, t(opts.lang, `${P}_${key}`)]));

	/** 工具主面板与结果区 markup。 */
	const contentHtml = `
    <div id="fade-io" class="tool-page-heading mb-3"><h1 class="h4">${tr('title')}</h1><p>${tr('desc')}</p></div>
    <section class="tool-panel" id="fadePanel">
      <label class="tool-dropzone mb-3" id="fadeDrop" for="fadeFile"><input id="fadeFile" type="file" accept=".wav,.mp3,.m4a,.aac,.ogg,audio/*"><span class="tool-dropzone-title">${tr('choose')}</span><span class="tool-dropzone-hint">${tr('hint')}</span><span id="fadeName" class="tool-dropzone-file"></span></label>
      <div class="tools-bar d-flex flex-wrap mb-3" style="gap:.5rem">
        <button id="fadeConvert" class="btn btn-primary" type="button">${tr('convert')}</button>
        <button id="fadeDownload" class="btn btn-outline-primary" type="button" disabled>${tr('download')}</button>
        <button id="fadeSample" class="btn btn-outline-secondary" type="button">${tr('sample')}</button>
        <button id="fadeClear" class="btn btn-outline-secondary" type="button">${tr('clear')}</button>
      </div>
      <details class="mb-3" open><summary>${tr('advanced')}</summary>
        <p class="form-label mt-2 mb-1">${tr('fade_in_label')}</p>
        <div class="fade-dur-chips mb-2" id="fadeInChips" role="group" aria-label="${tr('fade_in_label')}">
          <button type="button" class="btn btn-sm btn-outline-secondary" data-sec="0.5" aria-pressed="false">0.5s</button>
          <button type="button" class="btn btn-sm btn-primary" data-sec="1" aria-pressed="true">1s</button>
          <button type="button" class="btn btn-sm btn-outline-secondary" data-sec="2" aria-pressed="false">2s</button>
          <button type="button" class="btn btn-sm btn-outline-secondary" data-sec="3" aria-pressed="false">3s</button>
        </div>
        <p class="form-label mb-1">${tr('fade_out_label')}</p>
        <div class="fade-dur-chips mb-2" id="fadeOutChips" role="group" aria-label="${tr('fade_out_label')}">
          <button type="button" class="btn btn-sm btn-outline-secondary" data-sec="0.5" aria-pressed="false">0.5s</button>
          <button type="button" class="btn btn-sm btn-primary" data-sec="1" aria-pressed="true">1s</button>
          <button type="button" class="btn btn-sm btn-outline-secondary" data-sec="2" aria-pressed="false">2s</button>
          <button type="button" class="btn btn-sm btn-outline-secondary" data-sec="3" aria-pressed="false">3s</button>
        </div>
        <p class="form-label mb-1">${tr('curve_label')}</p>
        <div class="fade-curve-chips mb-2" id="fadeCurveChips" role="group" aria-label="${tr('curve_label')}">
          <button type="button" class="btn btn-sm btn-outline-secondary" data-curve="linear" aria-pressed="false">${tr('curve_linear')}</button>
          <button type="button" class="btn btn-sm btn-primary" data-curve="equal" aria-pressed="true">${tr('curve_equal')}</button>
        </div>
        <p class="form-text">${tr('settings_hint')}</p>
      </details>
      <div id="fadeHud" class="bcw-hud mb-3" role="status" aria-live="polite" hidden>
        <div class="bcw-hud-top"><div class="bcw-hud-spin" aria-hidden="true"></div><div class="bcw-hud-pct" id="fadePct">0%</div><div class="bcw-hud-copy"><div class="bcw-hud-title">${tr('progress')}</div><div class="bcw-hud-step" id="fadeStep"></div><div class="bcw-hud-time" id="fadeTime"></div></div></div>
        <div class="progress" style="height:1.35rem"><div id="fadeBar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div><span class="bcw-hud-sheen" aria-hidden="true"></span></div>
        <ol class="bcw-hud-steps"><li data-step="read">${tr('read')}</li><li data-step="decode">${tr('decode')}</li><li data-step="fade">${tr('fade')}</li><li data-step="write">${tr('write')}</li></ol><div class="bcw-hud-url" id="fadeCurrent"></div>
      </div>
      <div id="fadeOutput" hidden><h2 class="h5">${tr('preview')}</h2><p id="fadeResult"></p><audio id="fadeAudio" controls preload="metadata" style="max-width:100%" aria-label="${tr('preview')}"></audio></div>
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
				label: 'Wikipedia: Fade (audio engineering)',
				href: 'https://en.wikipedia.org/wiki/Fade_(audio_engineering)',
			},
		],
	});

	/** 金标 HUD、时长/曲线芯片与布局补充样式。 */
	const extraHeadHtml = `<style>${bcwHudCss({ hudId: 'fadeHud', convertBtnId: 'fadeConvert' })}#fadeHud.is-error{border-color:#b91c1c;background:#fff1f2}#fadeHud:not(.is-on) .bcw-hud-spin{animation:none}.fade-dur-chips,.fade-curve-chips{display:flex;flex-wrap:wrap;gap:.4rem}.site-footer nav.d-inline{display:inline-flex!important;flex-wrap:wrap;justify-content:center;max-width:100%}</style>`;

	/** 客户端转换管线（读 → 解码 → 头尾包络 → 写 16-bit WAV）。 */
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
    const panel = $('fadePanel');
    /** 文件输入。 */
    const fileInput = $('fadeFile');
    /** 进度 HUD。 */
    const hud = $('fadeHud');
    /** 预览 audio。 */
    const audio = $('fadeAudio');
    /** 淡入时长芯片组。 */
    const fadeInChips = $('fadeInChips');
    /** 淡出时长芯片组。 */
    const fadeOutChips = $('fadeOutChips');
    /** 曲线芯片组。 */
    const curveChips = $('fadeCurveChips');
    /** 当前选中的输入文件。 */
    let selected = null;
    /** 是否正在转换。 */
    let busy = false;
    /** 输出 object URL（需 revoke）。 */
    let outputUrl = '';
    /** 计时器句柄。 */
    let timer = 0;
    /** 转换开始时间戳（ms）。 */
    let started = 0;
    /** 淡入秒数。 */
    let fadeInSec = 1;
    /** 淡出秒数。 */
    let fadeOutSec = 1;
    /** 曲线键：linear | equal。 */
    let curveKey = 'equal';
    /** 允许的时长芯片秒数。 */
    const DUR_OPTS = [0.5, 1, 2, 3];
    /** 允许的曲线键。 */
    const CURVE_KEYS = ['linear', 'equal'];
    /** 让出主线程一帧，刷新 HUD。 */
    const yieldUi = () => new Promise(resolve => requestAnimationFrame(() => setTimeout(resolve, 0)));
    /**
     * 用 {key} 占位符填充模板。
     * @param {string} text 模板
     * @param {Record<string, string|number>} values 替换值
     */
    const fill = (text, values) => text.replace(/{(\\w+)}/g, (_, key) => String(values[key] ?? ''));
    /**
     * 同步一组时长芯片的选中态。
     * @param {HTMLElement} root 芯片容器
     * @param {number} sec 当前秒数
     */
    function paintDur(root, sec){
      root.querySelectorAll('[data-sec]').forEach(btn => {
        const on = Number(btn.dataset.sec) === sec;
        btn.classList.toggle('btn-primary', on);
        btn.classList.toggle('btn-outline-secondary', !on);
        btn.setAttribute('aria-pressed', String(on));
      });
    }
    /** 同步曲线芯片选中态。 */
    function paintCurve(){
      curveChips.querySelectorAll('[data-curve]').forEach(btn => {
        const on = btn.dataset.curve === curveKey;
        btn.classList.toggle('btn-primary', on);
        btn.classList.toggle('btn-outline-secondary', !on);
        btn.setAttribute('aria-pressed', String(on));
      });
    }
    /** 丢弃预览与下载 URL，并禁用下载。 */
    function discard(){
      audio.pause();
      audio.removeAttribute('src');
      audio.load();
      if (outputUrl) URL.revokeObjectURL(outputUrl);
      outputUrl = '';
      $('fadeDownload').disabled = true;
      $('fadeOutput').hidden = true;
    }
    /**
     * 忙碌锁：禁用控件；有输出时才允许下载。
     * @param {boolean} on 是否忙碌
     */
    function lock(on){
      busy = on;
      panel.querySelectorAll('button,input').forEach(el => el.disabled = on);
      $('fadeDownload').disabled = on || !outputUrl;
      $('fadeConvert').setAttribute('aria-busy', String(on));
    }
    /**
     * 更新 HUD 百分比与步骤高亮。
     * @param {number} pct 0–100
     * @param {string} step 步骤键
     */
    function progress(pct, step){
      $('fadePct').textContent = Math.round(pct) + '%';
      $('fadeBar').style.width = pct + '%';
      $('fadeBar').setAttribute('aria-valuenow', String(Math.round(pct)));
      $('fadeStep').textContent = M[step];
      hud.querySelectorAll('[data-step]').forEach(el => el.classList.toggle('is-on', el.dataset.step === step));
    }
    /**
     * 显示失败状态。
     * @param {string} key 错误文案键
     */
    function fail(key){
      hud.hidden = false;
      hud.className = 'bcw-hud is-error is-fail mb-3';
      $('fadePct').textContent = '—';
      $('fadeBar').style.width = '0%';
      $('fadeBar').setAttribute('aria-valuenow', '0');
      hud.setAttribute('role', 'alert');
      $('fadeStep').textContent = M[key] || M.failed;
    }
    /**
     * 选择或清空输入文件（会丢弃旧输出）。
     * @param {File|null} file 新文件
     */
    function choose(file){
      if (busy) return;
      discard();
      selected = file || null;
      $('fadeName').textContent = file ? file.name : '';
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
     * 线性或等功率增益曲线（t∈[0,1] → 0…1）。
     * @param {number} t 归一化进度
     * @param {string} curve linear | equal
     */
    function ramp(t, curve){
      const x = Math.max(0, Math.min(1, t));
      if (curve === 'equal') return Math.sin(x * Math.PI / 2);
      return x;
    }
    /**
     * 对解码缓冲施加头尾淡入淡出包络（≠ 环绕交叉淡化）。
     * @param {AudioBuffer} buffer 解码缓冲
     * @param {number} inSec 请求的淡入秒数
     * @param {number} outSec 请求的淡出秒数
     * @param {string} curve 曲线键
     */
    function fadeBuffer(buffer, inSec, outSec, curve){
      const channels = Math.min(2, buffer.numberOfChannels);
      const frames = buffer.length;
      const rate = Math.round(buffer.sampleRate);
      const duration = frames / rate;
      if (!(duration > 0.05)) throw Error('err_short');
      const peakBefore = absPeak(buffer);
      if (!(peakBefore > 1e-8)) throw Error('err_silence');
      /** 两端请求时长；若总和超过片长则按比例缩短。 */
      let inUse = Math.max(0, Math.min(inSec, duration));
      let outUse = Math.max(0, Math.min(outSec, duration));
      if (inUse + outUse > duration){
        const scale = duration / (inUse + outUse);
        inUse *= scale;
        outUse *= scale;
      }
      const inN = Math.round(inUse * rate);
      const outN = Math.round(outUse * rate);
      const out = [];
      for (let c = 0; c < channels; c++){
        const src = buffer.getChannelData(c);
        const dest = new Float32Array(frames);
        for (let i = 0; i < frames; i++){
          let g = 1;
          if (inN > 0 && i < inN) g *= ramp(i / inN, curve);
          if (outN > 0 && i >= frames - outN){
            const t = (frames - 1 - i) / outN;
            g *= ramp(t, curve);
          }
          const s = Number.isFinite(src[i]) ? src[i] * g : 0;
          dest[i] = s;
        }
        out.push(dest);
      }
      return { channels: out, rate, fadeIn: inUse, fadeOut: outUse };
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
    /** 主转换：读 → 解码 → Fade → 写 WAV。 */
    async function convert(){
      if (busy) return;
      discard();
      if (!selected){ fail('empty'); return; }
      lock(true);
      hud.hidden = false;
      hud.className = 'bcw-hud is-on mb-3';
      hud.setAttribute('role', 'status');
      $('fadeCurrent').textContent = selected.name;
      started = performance.now();
      const clock = () => { $('fadeTime').textContent = fill(M.elapsed, { s: ((performance.now() - started) / 1000).toFixed(1) }); };
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
        if (DUR_OPTS.indexOf(fadeInSec) < 0 || DUR_OPTS.indexOf(fadeOutSec) < 0) throw Error('err_encoder');
        if (CURVE_KEYS.indexOf(curveKey) < 0) throw Error('err_encoder');
        progress(42, 'fade');
        await yieldUi();
        const faded = fadeBuffer(decoded, fadeInSec, fadeOutSec, curveKey);
        progress(78, 'write');
        await yieldUi();
        const blob = writeWav(faded.channels, faded.rate);
        if (!blob.size) throw Error('err_encoder');
        outputUrl = URL.createObjectURL(blob);
        audio.src = outputUrl;
        $('fadeOutput').hidden = false;
        const curveLabel = curveKey === 'equal' ? M.curve_equal : M.curve_linear;
        $('fadeResult').textContent = fill(M.result, {
          seconds: decoded.duration.toFixed(2),
          fadeIn: faded.fadeIn.toFixed(2),
          fadeOut: faded.fadeOut.toFixed(2),
          curve: curveLabel,
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
     * 合成约 4 s、48 kHz 单声道突兀样例（无头尾淡化，便于听出软起软收）。
     * @returns {File}
     */
    function sampleWav(){
      const rate = 48000;
      const frames = rate * 4;
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
        const tone = 0.32 * Math.sin(2 * Math.PI * 440 * t) + 0.12 * Math.sin(2 * Math.PI * 880 * t);
        v.setInt16(44 + i * 2, Math.max(-32768, Math.min(32767, Math.round(tone * 28000))), true);
      }
      return new File([bytes], M.sample_name + '.wav', { type: 'audio/wav' });
    }
    /** 进页或点 Sample：加载突兀样例并以默认 1s/1s 等功率自动 Fade。 */
    async function loadSample(){
      if (busy) return;
      fadeInSec = 1;
      fadeOutSec = 1;
      curveKey = 'equal';
      paintDur(fadeInChips, fadeInSec);
      paintDur(fadeOutChips, fadeOutSec);
      paintCurve();
      choose(sampleWav());
      await convert();
    }
    fileInput.addEventListener('change', () => choose(fileInput.files[0]));
    $('fadeDrop').addEventListener('dragover', event => event.preventDefault());
    $('fadeDrop').addEventListener('drop', event => {
      event.preventDefault();
      if (busy) return;
      const files = event.dataTransfer.files;
      if (files.length !== 1){ choose(null); fail('err_file'); return; }
      choose(files[0]);
    });
    /**
     * 绑定时长芯片点击。
     * @param {HTMLElement} root 芯片容器
     * @param {'in'|'out'} which 淡入或淡出
     */
    function bindDur(root, which){
      root.addEventListener('click', event => {
        const btn = event.target.closest('[data-sec]');
        if (!btn || busy) return;
        const sec = Number(btn.dataset.sec);
        if (DUR_OPTS.indexOf(sec) < 0) return;
        if (which === 'in') fadeInSec = sec;
        else fadeOutSec = sec;
        paintDur(root, sec);
        discard();
        hud.hidden = true;
      });
    }
    bindDur(fadeInChips, 'in');
    bindDur(fadeOutChips, 'out');
    curveChips.addEventListener('click', event => {
      const btn = event.target.closest('[data-curve]');
      if (!btn || busy) return;
      curveKey = btn.dataset.curve;
      paintCurve();
      discard();
      hud.hidden = true;
    });
    $('fadeConvert').addEventListener('click', convert);
    $('fadeSample').addEventListener('click', loadSample);
    $('fadeClear').addEventListener('click', () => choose(null));
    $('fadeDownload').addEventListener('click', () => {
      if (!outputUrl || busy) return;
      const link = document.createElement('a');
      link.href = outputUrl;
      link.download = (selected.name.replace(/\\.[^.]+$/, '') || 'audio') + '-fade.wav';
      document.body.appendChild(link);
      link.click();
      link.remove();
    });
    window.addEventListener('pagehide', () => {
      clearInterval(timer);
      if (outputUrl) URL.revokeObjectURL(outputUrl);
    });
    paintDur(fadeInChips, fadeInSec);
    paintDur(fadeOutChips, fadeOutSec);
    paintCurve();
    loadSample();
  })();
</script>`;

	/** catalog 元数据（related / schema）。 */
	const toolMeta = getToolBySlug('fade-in-and-fade-out-an-audio-clip');
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
