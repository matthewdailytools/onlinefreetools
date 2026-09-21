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
const P = 'tool_match_podcast_loudness_to_minus_16_lufs';

/**
 * 非默认语言时为路径加语言前缀。
 * @param lang 当前 UI 语言
 * @param pathname 站点路径
 * @param defaultLang 无前缀的默认语
 */
const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

/**
 * 将播客响度对齐到目标近似 LUFS，导出 16-bit WAV（S17）。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderMatchPodcastLoudnessToMinus16LufsPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 工具规范路径（无语言前缀）。 */
	const toolPath = '/tools/match-podcast-loudness-to-minus-16-lufs';
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
			currentSlug: 'match-podcast-loudness-to-minus-16-lufs',
			currentAnchor: '#lufs-match',
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
		'measure',
		'match',
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
		'result_protect',
		'empty',
	];
	/** 消息字典：键 → 当前语言字符串。 */
	const messages = Object.fromEntries(uiKeys.map((key) => [key, t(opts.lang, `${P}_${key}`)]));

	/** 工具主面板与结果区 markup。 */
	const contentHtml = `
    <div id="lufs-match" class="tool-page-heading mb-3"><h1 class="h4">${tr('title')}</h1><p>${tr('desc')}</p></div>
    <section class="tool-panel" id="lufsPanel">
      <label class="tool-dropzone mb-3" id="lufsDrop" for="lufsFile"><input id="lufsFile" type="file" accept=".wav,.mp3,.m4a,.aac,.ogg,audio/*"><span class="tool-dropzone-title">${tr('choose')}</span><span class="tool-dropzone-hint">${tr('hint')}</span><span id="lufsName" class="tool-dropzone-file"></span></label>
      <div class="tools-bar d-flex flex-wrap mb-3" style="gap:.5rem">
        <button id="lufsConvert" class="btn btn-primary" type="button">${tr('convert')}</button>
        <button id="lufsDownload" class="btn btn-outline-primary" type="button" disabled>${tr('download')}</button>
        <button id="lufsSample" class="btn btn-outline-secondary" type="button">${tr('sample')}</button>
        <button id="lufsClear" class="btn btn-outline-secondary" type="button">${tr('clear')}</button>
      </div>
      <details class="mb-3" open><summary>${tr('advanced')}</summary>
        <p class="form-label mt-2 mb-1">${tr('target_label')}</p>
        <div class="lufs-target-chips mb-2" id="lufsTargetChips" role="group" aria-label="${tr('target_label')}">
          <button type="button" class="btn btn-sm btn-primary" data-lufs="-16" aria-pressed="true">−16 LUFS</button>
          <button type="button" class="btn btn-sm btn-outline-secondary" data-lufs="-14" aria-pressed="false">−14 LUFS</button>
          <button type="button" class="btn btn-sm btn-outline-secondary" data-lufs="-24" aria-pressed="false">−24 LUFS</button>
        </div>
        <p class="form-text">${tr('settings_hint')}</p>
      </details>
      <div id="lufsHud" class="bcw-hud mb-3" role="status" aria-live="polite" hidden>
        <div class="bcw-hud-top"><div class="bcw-hud-spin" aria-hidden="true"></div><div class="bcw-hud-pct" id="lufsPct">0%</div><div class="bcw-hud-copy"><div class="bcw-hud-title">${tr('progress')}</div><div class="bcw-hud-step" id="lufsStep"></div><div class="bcw-hud-time" id="lufsTime"></div></div></div>
        <div class="progress" style="height:1.35rem"><div id="lufsBar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div><span class="bcw-hud-sheen" aria-hidden="true"></span></div>
        <ol class="bcw-hud-steps"><li data-step="read">${tr('read')}</li><li data-step="decode">${tr('decode')}</li><li data-step="measure">${tr('measure')}</li><li data-step="match">${tr('match')}</li><li data-step="write">${tr('write')}</li></ol><div class="bcw-hud-url" id="lufsCurrent"></div>
      </div>
      <div id="lufsOutput" hidden><h2 class="h5">${tr('preview')}</h2><p id="lufsResult"></p><audio id="lufsAudio" controls preload="metadata" style="max-width:100%" aria-label="${tr('preview')}"></audio></div>
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
				label: 'ITU-R BS.1770 (reference)',
				href: 'https://www.itu.int/rec/R-REC-BS.1770',
			},
			{
				label: 'MDN: decodeAudioData',
				href: 'https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/decodeAudioData',
			},
		],
	});

	/** 金标 HUD、目标芯片与布局补充样式。 */
	const extraHeadHtml = `<style>${bcwHudCss({ hudId: 'lufsHud', convertBtnId: 'lufsConvert' })}#lufsHud.is-error{border-color:#b91c1c;background:#fff1f2}#lufsHud:not(.is-on) .bcw-hud-spin{animation:none}.lufs-target-chips{display:flex;flex-wrap:wrap;gap:.4rem}.site-footer nav.d-inline{display:inline-flex!important;flex-wrap:wrap;justify-content:center;max-width:100%}</style>`;

	/** 客户端转换管线（读 → 解码 → 测响度 → 对齐增益 → 写 16-bit WAV）。 */
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
    const panel = $('lufsPanel');
    /** 文件输入。 */
    const fileInput = $('lufsFile');
    /** 进度 HUD。 */
    const hud = $('lufsHud');
    /** 预览 audio。 */
    const audio = $('lufsAudio');
    /** 目标响度芯片组。 */
    const targetChips = $('lufsTargetChips');
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
    /** 当前目标响度（近似 LUFS），默认 −16。 */
    let targetLufs = -16;
    /** 允许的目标响度预设。 */
    const TARGETS = [-16, -14, -24];
    /** 软峰值保护上限（线性满幅比例）。 */
    const PEAK_LIMIT = 0.99;
    /** 让出主线程一帧，刷新 HUD。 */
    const yieldUi = () => new Promise(resolve => requestAnimationFrame(() => setTimeout(resolve, 0)));
    /**
     * 用 {key} 占位符填充模板。
     * @param {string} text 模板
     * @param {Record<string, string|number>} values 替换值
     */
    const fill = (text, values) => text.replace(/{(\\w+)}/g, (_, key) => String(values[key] ?? ''));
    /** 同步芯片选中态。 */
    function paintTarget(){
      targetChips.querySelectorAll('[data-lufs]').forEach(btn => {
        const on = Math.abs(Number(btn.dataset.lufs) - targetLufs) < 0.001;
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
      $('lufsDownload').disabled = true;
      $('lufsOutput').hidden = true;
    }
    /**
     * 忙碌锁：禁用控件；有输出时才允许下载。
     * @param {boolean} on 是否忙碌
     */
    function lock(on){
      busy = on;
      panel.querySelectorAll('button,input').forEach(el => el.disabled = on);
      $('lufsDownload').disabled = on || !outputUrl;
      $('lufsConvert').setAttribute('aria-busy', String(on));
    }
    /**
     * 更新 HUD 百分比与步骤高亮。
     * @param {number} pct 0–100
     * @param {string} step 步骤键
     */
    function progress(pct, step){
      $('lufsPct').textContent = Math.round(pct) + '%';
      $('lufsBar').style.width = pct + '%';
      $('lufsBar').setAttribute('aria-valuenow', String(Math.round(pct)));
      $('lufsStep').textContent = M[step];
      hud.querySelectorAll('[data-step]').forEach(el => el.classList.toggle('is-on', el.dataset.step === step));
    }
    /**
     * 显示失败状态。
     * @param {string} key 错误文案键
     */
    function fail(key){
      hud.hidden = false;
      hud.className = 'bcw-hud is-error is-fail mb-3';
      $('lufsPct').textContent = '—';
      $('lufsBar').style.width = '0%';
      $('lufsBar').setAttribute('aria-valuenow', '0');
      hud.setAttribute('role', 'alert');
      $('lufsStep').textContent = M[key] || M.failed;
    }
    /**
     * 选择或清空输入文件（会丢弃旧输出）。
     * @param {File|null} file 新文件
     */
    function choose(file){
      if (busy) return;
      discard();
      selected = file || null;
      $('lufsName').textContent = file ? file.name : '';
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
     * @param {Float32Array[]} channels 各声道样本
     */
    function absPeak(channels){
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
     * 设计 BS.1770 风格高架二阶节（任意采样率）。
     * @param {number} fs 采样率 Hz
     */
    function shelfCoeffs(fs){
      const f0 = 1681.974450955533;
      const G = 3.999843853973347;
      const Q = 0.7071752369554196;
      const K = Math.tan(Math.PI * f0 / fs);
      const Vh = Math.pow(10, G / 20);
      const Vb = Math.pow(Vh, 0.4996667741545416);
      const a0 = 1 + K / Q + K * K;
      return {
        b0: (Vh + Vb * K / Q + K * K) / a0,
        b1: 2 * (K * K - Vh) / a0,
        b2: (Vh - Vb * K / Q + K * K) / a0,
        a1: 2 * (K * K - 1) / a0,
        a2: (1 - K / Q + K * K) / a0
      };
    }
    /**
     * 设计 BS.1770 风格高通二阶节（任意采样率）。
     * @param {number} fs 采样率 Hz
     */
    function hpCoeffs(fs){
      const f0 = 38.13547087602444;
      const Q = 0.5003270373233663;
      const K = Math.tan(Math.PI * f0 / fs);
      const a0 = 1 + K / Q + K * K;
      return {
        b0: 1 / a0,
        b1: -2 / a0,
        b2: 1 / a0,
        a1: 2 * (K * K - 1) / a0,
        a2: (1 - K / Q + K * K) / a0
      };
    }
    /**
     * 对单声道施加级联 biquad（DF1）。
     * @param {Float32Array} input 输入样本
     * @param {{b0:number,b1:number,b2:number,a1:number,a2:number}} c 系数
     */
    function applyBiquad(input, c){
      const out = new Float32Array(input.length);
      let x1 = 0, x2 = 0, y1 = 0, y2 = 0;
      for (let i = 0; i < input.length; i++){
        const x0 = Number.isFinite(input[i]) ? input[i] : 0;
        const y0 = c.b0 * x0 + c.b1 * x1 + c.b2 * x2 - c.a1 * y1 - c.a2 * y2;
        out[i] = y0;
        x2 = x1; x1 = x0; y2 = y1; y1 = y0;
      }
      return out;
    }
    /**
     * K 加权：高架 + 高通（纯 JS 近似 ITU-R BS.1770，非厂商校准表）。
     * @param {Float32Array} input 声道样本
     * @param {number} rate 采样率
     */
    function kWeight(input, rate){
      return applyBiquad(applyBiquad(input, shelfCoeffs(rate)), hpCoeffs(rate));
    }
    /**
     * 均方能量 → 近似 LUFS（单声道权重常数 −0.691）。
     * @param {number} meanSquare 均方
     */
    function msToLufs(meanSquare){
      if (!(meanSquare > 1e-20)) return -120;
      return -0.691 + 10 * Math.log10(meanSquare);
    }
    /**
     * 估计综合响度：K 加权 + 400 ms 块绝对/相对门控均值（浏览器近似 LUFS）。
     * @param {Float32Array[]} channels 源声道（1–2）
     * @param {number} rate 采样率
     */
    function measureLoudness(channels, rate){
      const frames = channels[0].length;
      const weighted = channels.map(ch => kWeight(ch, rate));
      const block = Math.max(1, Math.round(0.4 * rate));
      const hop = Math.max(1, Math.round(0.1 * rate));
      const powers = [];
      for (let start = 0; start + block <= frames; start += hop){
        let sum = 0;
        let n = 0;
        for (let c = 0; c < weighted.length; c++){
          const data = weighted[c];
          for (let i = start; i < start + block; i++){
            const s = data[i];
            sum += s * s;
            n++;
          }
        }
        powers.push(sum / Math.max(1, n));
      }
      if (!powers.length){
        let sum = 0;
        let n = 0;
        for (let c = 0; c < weighted.length; c++){
          const data = weighted[c];
          for (let i = 0; i < data.length; i++){
            sum += data[i] * data[i];
            n++;
          }
        }
        return msToLufs(sum / Math.max(1, n));
      }
      const absGate = Math.pow(10, (-70 + 0.691) / 10);
      const aboveAbs = powers.filter(p => p > absGate);
      if (!aboveAbs.length) return msToLufs(powers.reduce((a, b) => a + b, 0) / powers.length);
      const ungated = aboveAbs.reduce((a, b) => a + b, 0) / aboveAbs.length;
      const relGate = ungated * Math.pow(10, -1);
      const gated = aboveAbs.filter(p => p > relGate);
      const mean = (gated.length ? gated : aboveAbs).reduce((a, b) => a + b, 0) / (gated.length || aboveAbs.length);
      return msToLufs(mean);
    }
    /**
     * 按目标近似 LUFS 施加整段增益，并做软峰值保护。
     * @param {AudioBuffer} buffer 解码缓冲
     * @param {number} target 目标近似 LUFS
     */
    function matchLoudness(buffer, target){
      const channels = Math.min(2, buffer.numberOfChannels);
      const frames = buffer.length;
      const rate = Math.round(buffer.sampleRate);
      const src = [];
      for (let c = 0; c < channels; c++) src.push(buffer.getChannelData(c));
      const peakBefore = absPeak(src);
      if (!(peakBefore > 1e-8)) throw Error('err_silence');
      const measured = measureLoudness(src, rate);
      if (!(measured > -119)) throw Error('err_silence');
      let gainDb = target - measured;
      let scale = Math.pow(10, gainDb / 20);
      if (peakBefore * scale > PEAK_LIMIT){
        scale = PEAK_LIMIT / peakBefore;
        gainDb = 20 * Math.log10(scale);
      }
      const out = [];
      for (let c = 0; c < channels; c++){
        const dest = new Float32Array(frames);
        for (let i = 0; i < frames; i++){
          const s = Number.isFinite(src[c][i]) ? src[c][i] : 0;
          dest[i] = s * scale;
        }
        out.push(dest);
      }
      const peakAfter = absPeak(out);
      const protectedPeak = peakBefore * Math.pow(10, (target - measured) / 20) > PEAK_LIMIT + 1e-9;
      return {
        channels: out,
        measured,
        target,
        gainDb,
        requestedGainDb: target - measured,
        peakBefore,
        peakAfter,
        protectedPeak,
        rate
      };
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
    /** 主转换：读 → 解码 → 测响度 → 对齐 → 写 WAV。 */
    async function convert(){
      if (busy) return;
      discard();
      if (!selected){ fail('empty'); return; }
      lock(true);
      hud.hidden = false;
      hud.className = 'bcw-hud is-on mb-3';
      hud.setAttribute('role', 'status');
      $('lufsCurrent').textContent = selected.name;
      started = performance.now();
      const clock = () => { $('lufsTime').textContent = fill(M.elapsed, { s: ((performance.now() - started) / 1000).toFixed(1) }); };
      clock();
      timer = setInterval(clock, 100);
      try {
        progress(2, 'read');
        await yieldUi();
        if (selected.size > 40 * 1024 * 1024) throw Error('err_limit');
        if (!isAudio(selected)) throw Error('err_format');
        const bytes = await selected.arrayBuffer();
        progress(12, 'decode');
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
        if (!TARGETS.some(v => Math.abs(v - targetLufs) < 0.001)) throw Error('err_encoder');
        progress(32, 'measure');
        await yieldUi();
        progress(48, 'match');
        await yieldUi();
        const matched = matchLoudness(decoded, targetLufs);
        progress(78, 'write');
        await yieldUi();
        const blob = writeWav(matched.channels, matched.rate);
        if (!blob.size) throw Error('err_encoder');
        outputUrl = URL.createObjectURL(blob);
        audio.src = outputUrl;
        $('lufsOutput').hidden = false;
        const fmt = (n) => (Math.round(n * 10) / 10).toFixed(1);
        const tpl = matched.protectedPeak ? M.result_protect : M.result;
        $('lufsResult').textContent = fill(tpl, {
          seconds: decoded.duration.toFixed(2),
          measured: fmt(matched.measured),
          target: fmt(matched.target),
          gainDb: fmt(matched.gainDb),
          requestedGainDb: fmt(matched.requestedGainDb),
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
     * 合成约 2 s、48 kHz 单声道偏安静 16-bit WAV 样例（响度明显低于 −16，便于听出对齐）。
     * @returns {File}
     */
    function sampleWav(){
      const rate = 48000;
      const frames = rate * 2;
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
        const fade = Math.min(1, i / 2400, (frames - i) / 2400);
        v.setInt16(44 + i * 2, Math.sin(2 * Math.PI * 440 * i / rate) * 1200 * fade, true);
      }
      return new File([bytes], M.sample_name + '.wav', { type: 'audio/wav' });
    }
    /** 进页或点 Sample：加载安静样例并以默认 −16 LUFS 自动对齐。 */
    async function loadSample(){
      if (busy) return;
      targetLufs = -16;
      paintTarget();
      choose(sampleWav());
      await convert();
    }
    fileInput.addEventListener('change', () => choose(fileInput.files[0]));
    $('lufsDrop').addEventListener('dragover', event => event.preventDefault());
    $('lufsDrop').addEventListener('drop', event => {
      event.preventDefault();
      if (busy) return;
      const files = event.dataTransfer.files;
      if (files.length !== 1){ choose(null); fail('err_file'); return; }
      choose(files[0]);
    });
    targetChips.addEventListener('click', event => {
      const btn = event.target.closest('[data-lufs]');
      if (!btn || busy) return;
      targetLufs = Number(btn.dataset.lufs);
      paintTarget();
      discard();
      hud.hidden = true;
    });
    $('lufsConvert').addEventListener('click', convert);
    $('lufsSample').addEventListener('click', loadSample);
    $('lufsClear').addEventListener('click', () => choose(null));
    $('lufsDownload').addEventListener('click', () => {
      if (!outputUrl || busy) return;
      const link = document.createElement('a');
      link.href = outputUrl;
      link.download = (selected.name.replace(/\\.[^.]+$/, '') || 'audio') + '-lufs-matched.wav';
      document.body.appendChild(link);
      link.click();
      link.remove();
    });
    window.addEventListener('pagehide', () => {
      clearInterval(timer);
      if (outputUrl) URL.revokeObjectURL(outputUrl);
    });
    paintTarget();
    loadSample();
  })();
</script>`;

	/** catalog 元数据（related / schema）。 */
	const toolMeta = getToolBySlug('match-podcast-loudness-to-minus-16-lufs');
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
