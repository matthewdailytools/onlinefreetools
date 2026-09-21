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
const P = 'tool_limit_peaks_so_a_file_does_not_clip';

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
 * 限制超限峰值以防削波，导出 16-bit WAV（S19）。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderLimitPeaksSoAFileDoesNotClipPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 工具规范路径（无语言前缀）。 */
	const toolPath = '/tools/limit-peaks-so-a-file-does-not-clip';
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
			currentSlug: 'limit-peaks-so-a-file-does-not-clip',
			currentAnchor: '#peak-limit',
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
		'limit',
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
		'result_passthrough',
		'empty',
		'mode_soft',
		'mode_brickwall',
		'limited_yes',
		'limited_no',
	];
	/** 消息字典：键 → 当前语言字符串。 */
	const messages = Object.fromEntries(uiKeys.map((key) => [key, t(opts.lang, `${P}_${key}`)]));

	/** 工具主面板与结果区 markup。 */
	const contentHtml = `
    <div id="peak-limit" class="tool-page-heading mb-3"><h1 class="h4">${tr('title')}</h1><p>${tr('desc')}</p></div>
    <section class="tool-panel" id="limPanel">
      <label class="tool-dropzone mb-3" id="limDrop" for="limFile"><input id="limFile" type="file" accept=".wav,.mp3,.m4a,.aac,.ogg,audio/*"><span class="tool-dropzone-title">${tr('choose')}</span><span class="tool-dropzone-hint">${tr('hint')}</span><span id="limName" class="tool-dropzone-file"></span></label>
      <div class="tools-bar d-flex flex-wrap mb-3" style="gap:.5rem">
        <button id="limConvert" class="btn btn-primary" type="button">${tr('convert')}</button>
        <button id="limDownload" class="btn btn-outline-primary" type="button" disabled>${tr('download')}</button>
        <button id="limSample" class="btn btn-outline-secondary" type="button">${tr('sample')}</button>
        <button id="limClear" class="btn btn-outline-secondary" type="button">${tr('clear')}</button>
      </div>
      <details class="mb-3" open><summary>${tr('advanced')}</summary>
        <p class="form-label mt-2 mb-1">${tr('ceiling_label')}</p>
        <div class="lim-ceiling-chips mb-2" id="limCeilingChips" role="group" aria-label="${tr('ceiling_label')}">
          <button type="button" class="btn btn-sm btn-outline-secondary" data-db="-0.1" aria-pressed="false">−0.1 dBFS</button>
          <button type="button" class="btn btn-sm btn-primary" data-db="-1" aria-pressed="true">−1 dBFS</button>
        </div>
        <p class="form-label mb-1">${tr('mode_label')}</p>
        <div class="lim-mode-chips mb-2" id="limModeChips" role="group" aria-label="${tr('mode_label')}">
          <button type="button" class="btn btn-sm btn-primary" data-mode="soft" aria-pressed="true">${tr('mode_soft')}</button>
          <button type="button" class="btn btn-sm btn-outline-secondary" data-mode="brickwall" aria-pressed="false">${tr('mode_brickwall')}</button>
        </div>
        <p class="form-text">${tr('settings_hint')}</p>
      </details>
      <div id="limHud" class="bcw-hud mb-3" role="status" aria-live="polite" hidden>
        <div class="bcw-hud-top"><div class="bcw-hud-spin" aria-hidden="true"></div><div class="bcw-hud-pct" id="limPct">0%</div><div class="bcw-hud-copy"><div class="bcw-hud-title">${tr('progress')}</div><div class="bcw-hud-step" id="limStep"></div><div class="bcw-hud-time" id="limTime"></div></div></div>
        <div class="progress" style="height:1.35rem"><div id="limBar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div><span class="bcw-hud-sheen" aria-hidden="true"></span></div>
        <ol class="bcw-hud-steps"><li data-step="read">${tr('read')}</li><li data-step="decode">${tr('decode')}</li><li data-step="limit">${tr('limit')}</li><li data-step="write">${tr('write')}</li></ol><div class="bcw-hud-url" id="limCurrent"></div>
      </div>
      <div id="limOutput" hidden><h2 class="h5">${tr('preview')}</h2><p id="limResult"></p><audio id="limAudio" controls preload="metadata" style="max-width:100%" aria-label="${tr('preview')}"></audio></div>
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
				label: 'MDN: decodeAudioData',
				href: 'https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/decodeAudioData',
			},
		],
	});

	/** 金标 HUD、ceiling/模式芯片与布局补充样式。 */
	const extraHeadHtml = `<style>${bcwHudCss({ hudId: 'limHud', convertBtnId: 'limConvert' })}#limHud.is-error{border-color:#b91c1c;background:#fff1f2}#limHud:not(.is-on) .bcw-hud-spin{animation:none}.lim-ceiling-chips,.lim-mode-chips{display:flex;flex-wrap:wrap;gap:.4rem}.site-footer nav.d-inline{display:inline-flex!important;flex-wrap:wrap;justify-content:center;max-width:100%}</style>`;

	/** 客户端转换管线（读 → 解码 → brickwall/soft 限幅 → 写 16-bit WAV）。 */
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
    const panel = $('limPanel');
    /** 文件输入。 */
    const fileInput = $('limFile');
    /** 进度 HUD。 */
    const hud = $('limHud');
    /** 预览 audio。 */
    const audio = $('limAudio');
    /** Ceiling 芯片组。 */
    const ceilingChips = $('limCeilingChips');
    /** 模式芯片组。 */
    const modeChips = $('limModeChips');
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
    /** 当前 ceiling（dBFS），默认 −1。 */
    let ceilingDb = -1;
    /** 当前限幅模式：soft | brickwall。 */
    let modeKey = 'soft';
    /** 允许的 ceiling 预设。 */
    const CEILINGS = [-0.1, -1];
    /** 允许的模式键。 */
    const MODES = ['soft', 'brickwall'];
    /** Soft 膝起点相对 ceiling 的比例（膝下原样通过）。 */
    const SOFT_KNEE_RATIO = 0.75;
    /** 让出主线程一帧，刷新 HUD。 */
    const yieldUi = () => new Promise(resolve => requestAnimationFrame(() => setTimeout(resolve, 0)));
    /**
     * 用 {key} 占位符填充模板。
     * @param {string} text 模板
     * @param {Record<string, string|number>} values 替换值
     */
    const fill = (text, values) => text.replace(/{(\\w+)}/g, (_, key) => String(values[key] ?? ''));
    /** 同步 ceiling 芯片选中态。 */
    function paintCeiling(){
      ceilingChips.querySelectorAll('[data-db]').forEach(btn => {
        const on = Math.abs(Number(btn.dataset.db) - ceilingDb) < 0.001;
        btn.classList.toggle('btn-primary', on);
        btn.classList.toggle('btn-outline-secondary', !on);
        btn.setAttribute('aria-pressed', String(on));
      });
    }
    /** 同步模式芯片选中态。 */
    function paintMode(){
      modeChips.querySelectorAll('[data-mode]').forEach(btn => {
        const on = btn.dataset.mode === modeKey;
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
      $('limDownload').disabled = true;
      $('limOutput').hidden = true;
    }
    /**
     * 忙碌锁：禁用控件；有输出时才允许下载。
     * @param {boolean} on 是否忙碌
     */
    function lock(on){
      busy = on;
      panel.querySelectorAll('button,input').forEach(el => el.disabled = on);
      $('limDownload').disabled = on || !outputUrl;
      $('limConvert').setAttribute('aria-busy', String(on));
    }
    /**
     * 更新 HUD 百分比与步骤高亮。
     * @param {number} pct 0–100
     * @param {string} step 步骤键
     */
    function progress(pct, step){
      $('limPct').textContent = Math.round(pct) + '%';
      $('limBar').style.width = pct + '%';
      $('limBar').setAttribute('aria-valuenow', String(Math.round(pct)));
      $('limStep').textContent = M[step];
      hud.querySelectorAll('[data-step]').forEach(el => el.classList.toggle('is-on', el.dataset.step === step));
    }
    /**
     * 显示失败状态。
     * @param {string} key 错误文案键
     */
    function fail(key){
      hud.hidden = false;
      hud.className = 'bcw-hud is-error is-fail mb-3';
      $('limPct').textContent = '—';
      $('limBar').style.width = '0%';
      $('limBar').setAttribute('aria-valuenow', '0');
      hud.setAttribute('role', 'alert');
      $('limStep').textContent = M[key] || M.failed;
    }
    /**
     * 选择或清空输入文件（会丢弃旧输出）。
     * @param {File|null} file 新文件
     */
    function choose(file){
      if (busy) return;
      discard();
      selected = file || null;
      $('limName').textContent = file ? file.name : '';
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
     * 将 dBFS 转为线性满幅比例（0–1）。
     * @param {number} db ceiling dBFS（通常 ≤ 0）
     */
    function dbfsToLinear(db){
      return Math.pow(10, db / 20);
    }
    /**
     * Soft 膝限幅：膝下原样；膝上指数逼近 ceiling，从不抬升。
     * @param {number} sample 线性样本
     * @param {number} ceiling 线性天花板
     * @param {number} kneeStart 膝起点（线性）
     */
    function softLimitSample(sample, ceiling, kneeStart){
      const sign = sample < 0 ? -1 : 1;
      const a = Math.abs(sample);
      if (a <= kneeStart) return sample;
      const head = Math.max(1e-12, ceiling - kneeStart);
      const shaped = kneeStart + head * (1 - Math.exp(-(a - kneeStart) / head));
      return sign * Math.min(shaped, ceiling);
    }
    /**
     * Brickwall：硬夹在 ±ceiling。
     * @param {number} sample 线性样本
     * @param {number} ceiling 线性天花板
     */
    function brickwallSample(sample, ceiling){
      if (sample > ceiling) return ceiling;
      if (sample < -ceiling) return -ceiling;
      return sample;
    }
    /**
     * 对解码缓冲做限幅：仅压超限峰值，不放大未超限素材。
     * @param {AudioBuffer} buffer 解码后的缓冲
     * @param {number} db ceiling dBFS
     * @param {string} mode soft | brickwall
     */
    function limitBuffer(buffer, db, mode){
      const channels = Math.min(2, buffer.numberOfChannels);
      const frames = buffer.length;
      /** 各声道源样本视图。 */
      const src = [];
      /** 各声道输出样本。 */
      const out = [];
      for (let c = 0; c < channels; c++){
        src.push(buffer.getChannelData(c));
        out.push(new Float32Array(frames));
      }
      const peakBefore = absPeak(src);
      if (!(peakBefore > 1e-8)) throw Error('err_silence');
      const ceiling = dbfsToLinear(db);
      const kneeStart = ceiling * SOFT_KNEE_RATIO;
      let limitedAny = false;
      for (let c = 0; c < channels; c++){
        for (let i = 0; i < frames; i++){
          const s = Number.isFinite(src[c][i]) ? src[c][i] : 0;
          let y;
          if (mode === 'brickwall'){
            y = brickwallSample(s, ceiling);
            if (Math.abs(s) > ceiling + 1e-12) limitedAny = true;
          } else {
            y = softLimitSample(s, ceiling, kneeStart);
            if (Math.abs(s) > kneeStart + 1e-12) limitedAny = true;
          }
          out[c][i] = y;
        }
      }
      const peakAfter = absPeak(out);
      return {
        channels: out,
        peakBefore,
        peakAfter,
        ceiling,
        limitedAny,
        rate: Math.round(buffer.sampleRate)
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
    /** 主转换：读 → 解码 → 限幅 → 写 WAV。 */
    async function convert(){
      if (busy) return;
      discard();
      if (!selected){ fail('empty'); return; }
      lock(true);
      hud.hidden = false;
      hud.className = 'bcw-hud is-on mb-3';
      hud.setAttribute('role', 'status');
      $('limCurrent').textContent = selected.name;
      started = performance.now();
      const clock = () => { $('limTime').textContent = fill(M.elapsed, { s: ((performance.now() - started) / 1000).toFixed(1) }); };
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
        if (!CEILINGS.some(v => Math.abs(v - ceilingDb) < 0.001)) throw Error('err_encoder');
        if (MODES.indexOf(modeKey) < 0) throw Error('err_encoder');
        progress(42, 'limit');
        await yieldUi();
        const limited = limitBuffer(decoded, ceilingDb, modeKey);
        progress(78, 'write');
        await yieldUi();
        const blob = writeWav(limited.channels, limited.rate);
        if (!blob.size) throw Error('err_encoder');
        outputUrl = URL.createObjectURL(blob);
        audio.src = outputUrl;
        $('limOutput').hidden = false;
        const modeLabel = M['mode_' + modeKey] || modeKey;
        const tpl = limited.limitedAny ? M.result : M.result_passthrough;
        $('limResult').textContent = fill(tpl, {
          seconds: decoded.duration.toFixed(2),
          ceiling: (Math.round(ceilingDb * 10) / 10).toFixed(1),
          mode: modeLabel,
          limited: limited.limitedAny ? M.limited_yes : M.limited_no,
          peakBefore: limited.peakBefore.toFixed(3),
          peakAfter: limited.peakAfter.toFixed(3),
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
     * 合成约 2 s、48 kHz 单声道过热 16-bit WAV 样例（尖峰超满幅，便于听出限幅）。
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
        const t = i / rate;
        const hot = (t % 0.4) < 0.12;
        const amp = hot ? 32000 : 9000;
        const fade = Math.min(1, i / 1200, (frames - i) / 1200);
        v.setInt16(44 + i * 2, Math.sin(2 * Math.PI * 440 * i / rate) * amp * fade, true);
      }
      return new File([bytes], M.sample_name + '.wav', { type: 'audio/wav' });
    }
    /** 进页或点 Sample：加载过热样例并以默认 −1 Soft 自动限幅。 */
    async function loadSample(){
      if (busy) return;
      ceilingDb = -1;
      modeKey = 'soft';
      paintCeiling();
      paintMode();
      choose(sampleWav());
      await convert();
    }
    fileInput.addEventListener('change', () => choose(fileInput.files[0]));
    $('limDrop').addEventListener('dragover', event => event.preventDefault());
    $('limDrop').addEventListener('drop', event => {
      event.preventDefault();
      if (busy) return;
      const files = event.dataTransfer.files;
      if (files.length !== 1){ choose(null); fail('err_file'); return; }
      choose(files[0]);
    });
    ceilingChips.addEventListener('click', event => {
      const btn = event.target.closest('[data-db]');
      if (!btn || busy) return;
      ceilingDb = Number(btn.dataset.db);
      paintCeiling();
      discard();
      hud.hidden = true;
    });
    modeChips.addEventListener('click', event => {
      const btn = event.target.closest('[data-mode]');
      if (!btn || busy) return;
      modeKey = btn.dataset.mode;
      paintMode();
      discard();
      hud.hidden = true;
    });
    $('limConvert').addEventListener('click', convert);
    $('limSample').addEventListener('click', loadSample);
    $('limClear').addEventListener('click', () => choose(null));
    $('limDownload').addEventListener('click', () => {
      if (!outputUrl || busy) return;
      const link = document.createElement('a');
      link.href = outputUrl;
      link.download = (selected.name.replace(/\\.[^.]+$/, '') || 'audio') + '-limited.wav';
      document.body.appendChild(link);
      link.click();
      link.remove();
    });
    window.addEventListener('pagehide', () => {
      clearInterval(timer);
      if (outputUrl) URL.revokeObjectURL(outputUrl);
    });
    paintCeiling();
    paintMode();
    loadSample();
  })();
</script>`;

	/** catalog 元数据（related / schema）。 */
	const toolMeta = getToolBySlug('limit-peaks-so-a-file-does-not-clip');
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
