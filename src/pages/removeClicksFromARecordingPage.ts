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
const P = 'tool_remove_clicks_from_a_recording';

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
 * 从录音中去除咔哒与短爆音，导出 16-bit WAV（S27）。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderRemoveClicksFromARecordingPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 工具规范路径（无语言前缀）。 */
	const toolPath = '/tools/remove-clicks-from-a-recording';
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
			currentSlug: 'remove-clicks-from-a-recording',
			currentAnchor: '#declick',
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
		'declick',
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
    <div id="declick" class="tool-page-heading mb-3"><h1 class="h4">${tr('title')}</h1><p>${tr('desc')}</p></div>
    <section class="tool-panel" id="clkPanel">
      <label class="tool-dropzone mb-3" id="clkDrop" for="clkFile"><input id="clkFile" type="file" accept=".wav,.mp3,.m4a,.aac,.ogg,audio/*"><span class="tool-dropzone-title">${tr('choose')}</span><span class="tool-dropzone-hint">${tr('hint')}</span><span id="clkName" class="tool-dropzone-file"></span></label>
      <div class="tools-bar d-flex flex-wrap mb-3" style="gap:.5rem">
        <button id="clkConvert" class="btn btn-primary" type="button">${tr('convert')}</button>
        <button id="clkDownload" class="btn btn-outline-primary" type="button" disabled>${tr('download')}</button>
        <button id="clkSample" class="btn btn-outline-secondary" type="button">${tr('sample')}</button>
        <button id="clkClear" class="btn btn-outline-secondary" type="button">${tr('clear')}</button>
      </div>
      <details class="mb-3" open><summary>${tr('advanced')}</summary>
        <p class="form-label mt-2 mb-1">${tr('sens_label')}</p>
        <div class="clk-preset-chips mb-2" id="clkSensChips" role="group" aria-label="${tr('sens_label')}">
          <button type="button" class="btn btn-sm btn-outline-secondary" data-sens="light" aria-pressed="false">${tr('sens_light')}</button>
          <button type="button" class="btn btn-sm btn-primary" data-sens="medium" aria-pressed="true">${tr('sens_medium')}</button>
          <button type="button" class="btn btn-sm btn-outline-secondary" data-sens="strong" aria-pressed="false">${tr('sens_strong')}</button>
        </div>
        <p class="form-text">${tr('settings_hint')}</p>
      </details>
      <div id="clkHud" class="bcw-hud mb-3" role="status" aria-live="polite" hidden>
        <div class="bcw-hud-top"><div class="bcw-hud-spin" aria-hidden="true"></div><div class="bcw-hud-pct" id="clkPct">0%</div><div class="bcw-hud-copy"><div class="bcw-hud-title">${tr('progress')}</div><div class="bcw-hud-step" id="clkStep"></div><div class="bcw-hud-time" id="clkTime"></div></div></div>
        <div class="progress" style="height:1.35rem"><div id="clkBar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div><span class="bcw-hud-sheen" aria-hidden="true"></span></div>
        <ol class="bcw-hud-steps"><li data-step="read">${tr('read')}</li><li data-step="decode">${tr('decode')}</li><li data-step="declick">${tr('declick')}</li><li data-step="write">${tr('write')}</li></ol><div class="bcw-hud-url" id="clkCurrent"></div>
      </div>
      <div id="clkOutput" hidden><h2 class="h5">${tr('preview')}</h2><p id="clkResult"></p><audio id="clkAudio" controls preload="metadata" style="max-width:100%" aria-label="${tr('preview')}"></audio></div>
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
				label: 'Wikipedia: Click and pop',
				href: 'https://en.wikipedia.org/wiki/Click_and_pop',
			},
			{
				label: 'Wikipedia: Median filter',
				href: 'https://en.wikipedia.org/wiki/Median_filter',
			},
		],
	});

	/** 金标 HUD、预设芯片与布局补充样式。 */
	const extraHeadHtml = `<style>${bcwHudCss({ hudId: 'clkHud', convertBtnId: 'clkConvert' })}#clkHud.is-error{border-color:#b91c1c;background:#fff1f2}#clkHud:not(.is-on) .bcw-hud-spin{animation:none}.clk-preset-chips{display:flex;flex-wrap:wrap;gap:.4rem}.site-footer nav.d-inline{display:inline-flex!important;flex-wrap:wrap;justify-content:center;max-width:100%}</style>`;

	/** 客户端转换管线（读 → 解码 → 短尖峰检测/插值 → 写 16-bit WAV）。 */
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
    const fileInput = $('clkFile');
    /** 灵敏度芯片容器。 */
    const sensChips = $('clkSensChips');
    /** 进度 HUD。 */
    const hud = $('clkHud');
    /** 预览 audio。 */
    const audio = $('clkAudio');
    /** 峰值软保护上限。 */
    const PEAK_LIMIT = 0.98;
    /** 合法灵敏度键。 */
    const SENS_KEYS = ['light', 'medium', 'strong'];
    /**
     * 灵敏度参数：阈值倍率、最大尖峰毫秒、中值半窗。
     * @type {Record<string,{thresh:number,maxMs:number,half:number}>}
     */
    const SENS = {
      light: { thresh: 8.5, maxMs: 1.2, half: 4 },
      medium: { thresh: 6.0, maxMs: 2.0, half: 5 },
      strong: { thresh: 4.2, maxMs: 3.2, half: 6 }
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
      $('clkOutput').hidden = true;
      $('clkResult').textContent = '';
      $('clkDownload').disabled = true;
    }
    /**
     * 锁定或解锁控件。
     * @param {boolean} on 是否锁定
     */
    function lock(on){
      busy = on;
      $('clkConvert').disabled = on;
      $('clkSample').disabled = on;
      $('clkClear').disabled = on;
      fileInput.disabled = on;
      sensChips.querySelectorAll('button').forEach(btn => { btn.disabled = on; });
      if (!on) $('clkDownload').disabled = !outputUrl;
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
      $('clkPct').textContent = value + '%';
      $('clkBar').style.width = value + '%';
      $('clkBar').setAttribute('aria-valuenow', String(value));
      const label = stepKey === 'done' ? M.done : (M[stepKey] || stepKey);
      $('clkStep').textContent = label;
      hud.querySelectorAll('.bcw-hud-steps li').forEach(li => {
        const name = li.getAttribute('data-step');
        li.classList.toggle('is-active', name === stepKey);
        li.classList.toggle('is-done', ['read','decode','declick','write'].indexOf(name) < ['read','decode','declick','write'].indexOf(stepKey) || stepKey === 'done');
      });
    }
    /**
     * 以错误态显示失败。
     * @param {string} key 消息键
     */
    function fail(key){
      hud.hidden = false;
      hud.className = 'bcw-hud is-error is-fail mb-3';
      $('clkPct').textContent = '—';
      $('clkBar').style.width = '0%';
      $('clkBar').setAttribute('aria-valuenow', '0');
      hud.setAttribute('role', 'alert');
      $('clkStep').textContent = M[key] || M.failed;
    }
    /**
     * 选择或清空输入文件（会丢弃旧输出）。
     * @param {File|null} file 新文件
     */
    function choose(file){
      if (busy) return;
      discard();
      selected = file || null;
      $('clkName').textContent = file ? file.name : '';
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
     * 对奇数长度窗口求中值（拷贝排序）。
     * @param {Float32Array} src 源样本
     * @param {number} center 中心索引
     * @param {number} half 半窗长度
     */
    function medianAt(src, center, half){
      const vals = [];
      const lo = Math.max(0, center - half);
      const hi = Math.min(src.length - 1, center + half);
      for (let i = lo; i <= hi; i++) vals.push(Number.isFinite(src[i]) ? src[i] : 0);
      vals.sort((a, b) => a - b);
      return vals[(vals.length - 1) >> 1];
    }
    /**
     * 单声道：检测短尖峰并用线性插值修复。
     * @param {Float32Array} src 源样本
     * @param {number} rate 采样率
     * @param {{thresh:number,maxMs:number,half:number}} cfg 灵敏度
     */
    function declickChannel(src, rate, cfg){
      const n = src.length;
      const out = new Float32Array(n);
      out.set(src);
      const maxLen = Math.max(2, Math.round((cfg.maxMs / 1000) * rate));
      /** 先估局部偏离尺度用的粗略 MAD 代理：全局中位数绝对偏差近似。 */
      let absSum = 0;
      const step = Math.max(1, Math.floor(n / 4000));
      let count = 0;
      for (let i = 0; i < n; i += step){
        const med = medianAt(src, i, cfg.half);
        absSum += Math.abs((Number.isFinite(src[i]) ? src[i] : 0) - med);
        count++;
      }
      const floor = Math.max(1e-4, (absSum / Math.max(1, count)) * cfg.thresh);
      /** @type {boolean[]} */
      const bad = new Array(n);
      for (let i = 0; i < n; i++) bad[i] = false;
      for (let i = cfg.half; i < n - cfg.half; i++){
        const med = medianAt(src, i, cfg.half);
        const sample = Number.isFinite(src[i]) ? src[i] : 0;
        if (Math.abs(sample - med) > floor) bad[i] = true;
      }
      let repaired = 0;
      let i = 0;
      while (i < n){
        if (!bad[i]){ i++; continue; }
        let j = i;
        while (j < n && bad[j] && (j - i) < maxLen) j++;
        const len = j - i;
        if (len >= 1 && len <= maxLen){
          const left = i > 0 ? out[i - 1] : 0;
          const right = j < n ? out[j] : left;
          for (let k = 0; k < len; k++){
            const t = (k + 1) / (len + 1);
            out[i + k] = left + (right - left) * t;
          }
          repaired++;
        }
        i = Math.max(j, i + 1);
      }
      return { data: out, clicks: repaired };
    }
    /**
     * 对 AudioBuffer 各声道做去咔哒，再软峰值保护。
     * @param {AudioBuffer} buffer 解码缓冲
     * @param {string} sensKey 灵敏度键
     */
    function declickBuffer(buffer, sensKey){
      const cfg = SENS[sensKey];
      if (!cfg) throw Error('err_encoder');
      const channels = Math.min(2, buffer.numberOfChannels);
      const frames = buffer.length;
      const rate = Math.round(buffer.sampleRate);
      const peakBefore = absPeak(buffer);
      if (!(peakBefore > 1e-8)) throw Error('err_silence');
      const out = [];
      let clicks = 0;
      let peakAfter = 0;
      for (let c = 0; c < channels; c++){
        const src = buffer.getChannelData(c);
        const repaired = declickChannel(src, rate, cfg);
        clicks += repaired.clicks;
        out.push(repaired.data);
        for (let i = 0; i < frames; i++){
          const v = Math.abs(repaired.data[i]);
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
      return { channels: out, rate, clicks, peakBefore, peakAfter };
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
    /** 主转换：读 → 解码 → Declick → 写 WAV。 */
    async function convert(){
      if (busy) return;
      discard();
      if (!selected){ fail('empty'); return; }
      lock(true);
      hud.hidden = false;
      hud.className = 'bcw-hud is-on mb-3';
      hud.setAttribute('role', 'status');
      $('clkCurrent').textContent = selected.name;
      started = performance.now();
      const clock = () => { $('clkTime').textContent = fill(M.elapsed, { s: ((performance.now() - started) / 1000).toFixed(1) }); };
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
        progress(42, 'declick');
        await yieldUi();
        const fixed = declickBuffer(decoded, sensitivity);
        progress(78, 'write');
        await yieldUi();
        const blob = writeWav(fixed.channels, fixed.rate);
        if (!blob.size) throw Error('err_encoder');
        outputUrl = URL.createObjectURL(blob);
        audio.src = outputUrl;
        $('clkOutput').hidden = false;
        const sensLabel = M['sens_' + sensitivity] || sensitivity;
        $('clkResult').textContent = fill(M.result, {
          seconds: decoded.duration.toFixed(2),
          sensitivity: sensLabel,
          clicks: fixed.clicks,
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
     * 合成约 3 s、48 kHz 单声道含人造咔哒尖峰的样例。
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
      /** 尖峰中心（秒）。 */
      const spikes = [0.45, 0.92, 1.35, 1.88, 2.4];
      for (let i = 0; i < frames; i++){
        const t = i / rate;
        const fade = Math.min(1, i / 2000, (frames - i) / 2000);
        const env = (t > 0.25 && t < 2.7) ? (0.5 + 0.5 * Math.sin(2 * Math.PI * 2.8 * t)) : 0.06;
        let sample = env * (
          0.4 * Math.sin(2 * Math.PI * 190 * t) +
          0.26 * Math.sin(2 * Math.PI * 380 * t) +
          0.16 * Math.sin(2 * Math.PI * 760 * t) +
          0.1 * Math.sin(2 * Math.PI * 1520 * t)
        );
        for (let s = 0; s < spikes.length; s++){
          const d = Math.abs(t - spikes[s]);
          if (d < 0.0012){
            const shape = 1 - d / 0.0012;
            sample += (s % 2 === 0 ? 1 : -1) * 0.95 * shape * shape;
          }
        }
        sample *= fade;
        v.setInt16(44 + i * 2, Math.max(-32768, Math.min(32767, Math.round(sample * 26000))), true);
      }
      return new File([bytes], M.sample_name + '.wav', { type: 'audio/wav' });
    }
    /** 进页或点 Sample：加载带咔哒样例并以默认 Medium 自动 Declick。 */
    async function loadSample(){
      if (busy) return;
      sensitivity = 'medium';
      paintSens();
      choose(sampleWav());
      await convert();
    }
    fileInput.addEventListener('change', () => choose(fileInput.files[0]));
    $('clkDrop').addEventListener('dragover', event => event.preventDefault());
    $('clkDrop').addEventListener('drop', event => {
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
    $('clkConvert').addEventListener('click', convert);
    $('clkSample').addEventListener('click', loadSample);
    $('clkClear').addEventListener('click', () => choose(null));
    $('clkDownload').addEventListener('click', () => {
      if (!outputUrl || busy) return;
      const link = document.createElement('a');
      link.href = outputUrl;
      link.download = (selected.name.replace(/\\.[^.]+$/, '') || 'audio') + '-declick.wav';
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
	const toolMeta = getToolBySlug('remove-clicks-from-a-recording');
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
