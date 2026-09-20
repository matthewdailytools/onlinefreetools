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
const P = 'tool_convert_audio_sample_rate_and_bit_depth';

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
 * 整段改采样率与 PCM 位深，导出可下载 WAV（S11）。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderConvertAudioSampleRateAndBitDepthPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 工具规范路径（无语言前缀）。 */
	const toolPath = '/tools/convert-audio-sample-rate-and-bit-depth';
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
			currentSlug: 'convert-audio-sample-rate-and-bit-depth',
			currentAnchor: '#rate-depth',
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
		'resample',
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
		'source_float',
	];
	/** 消息字典：键 → 当前语言字符串。 */
	const messages = Object.fromEntries(uiKeys.map((key) => [key, t(opts.lang, `${P}_${key}`)]));

	/** 工具主面板与结果区 markup。 */
	const contentHtml = `
    <div id="rate-depth" class="tool-page-heading mb-3"><h1 class="h4">${tr('title')}</h1><p>${tr('desc')}</p></div>
    <section class="tool-panel" id="ratePanel">
      <label class="tool-dropzone mb-3" id="rateDrop" for="rateFile"><input id="rateFile" type="file" accept=".wav,.mp3,.m4a,.aac,.ogg,audio/*"><span class="tool-dropzone-title">${tr('choose')}</span><span class="tool-dropzone-hint">${tr('hint')}</span><span id="rateName" class="tool-dropzone-file"></span></label>
      <div class="tools-bar d-flex flex-wrap mb-3" style="gap:.5rem">
        <button id="rateConvert" class="btn btn-primary" type="button">${tr('convert')}</button>
        <button id="rateDownload" class="btn btn-outline-primary" type="button" disabled>${tr('download')}</button>
        <button id="rateSample" class="btn btn-outline-secondary" type="button">${tr('sample')}</button>
        <button id="rateClear" class="btn btn-outline-secondary" type="button">${tr('clear')}</button>
      </div>
      <details class="mb-3" open><summary>${tr('advanced')}</summary>
        <label for="rateSampleRate" class="form-label mt-2">${tr('sample_rate')}</label>
        <select id="rateSampleRate" class="form-select form-select-sm">
          <option value="22050">22.05 kHz</option>
          <option value="44100" selected>44.1 kHz</option>
          <option value="48000">48 kHz</option>
          <option value="96000">96 kHz</option>
        </select>
        <label for="rateBitDepth" class="form-label mt-2">${tr('bit_depth')}</label>
        <select id="rateBitDepth" class="form-select form-select-sm">
          <option value="16" selected>16-bit</option>
          <option value="24">24-bit</option>
        </select>
        <p class="form-text">${tr('settings_hint')}</p>
      </details>
      <div id="rateHud" class="bcw-hud mb-3" role="status" aria-live="polite" hidden>
        <div class="bcw-hud-top"><div class="bcw-hud-spin" aria-hidden="true"></div><div class="bcw-hud-pct" id="ratePct">0%</div><div class="bcw-hud-copy"><div class="bcw-hud-title">${tr('progress')}</div><div class="bcw-hud-step" id="rateStep"></div><div class="bcw-hud-time" id="rateTime"></div></div></div>
        <div class="progress" style="height:1.35rem"><div id="rateBar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div><span class="bcw-hud-sheen" aria-hidden="true"></span></div>
        <ol class="bcw-hud-steps"><li data-step="read">${tr('read')}</li><li data-step="decode">${tr('decode')}</li><li data-step="resample">${tr('resample')}</li><li data-step="write">${tr('write')}</li></ol><div class="bcw-hud-url" id="rateCurrent"></div>
      </div>
      <div id="rateOutput" hidden><h2 class="h5">${tr('preview')}</h2><p id="rateResult"></p><audio id="rateAudio" controls preload="metadata" style="max-width:100%" aria-label="${tr('preview')}"></audio></div>
    </section>`;

	/** How / Why / Rules / Use cases IG 块。 */
	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: P,
		mode: 'rules',
		howItemCount: 3,
		whyChooseItemCount: 3,
		ruleItemCount: 3,
		usecaseCount: 2,
	});

	/** 权威参考链接。 */
	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: 'MDN: OfflineAudioContext',
				href: 'https://developer.mozilla.org/en-US/docs/Web/API/OfflineAudioContext',
			},
			{
				label: 'MDN: decodeAudioData',
				href: 'https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/decodeAudioData',
			},
		],
	});

	/** 金标 HUD 与布局补充样式。 */
	const extraHeadHtml = `<style>${bcwHudCss({ hudId: 'rateHud', convertBtnId: 'rateConvert' })}#rateHud.is-error{border-color:#b91c1c;background:#fff1f2}#rateHud:not(.is-on) .bcw-hud-spin{animation:none}#rateSampleRate,#rateBitDepth{max-width:18rem}.site-footer nav.d-inline{display:inline-flex!important;flex-wrap:wrap;justify-content:center;max-width:100%}</style>`;

	/** 客户端转换管线（读 → 解码 → 重采样 → 写 PCM WAV）。 */
	const extraBodyHtml = `<script>
  (function(){
    'use strict';
    /** 当前语言的运行时文案。 */
    const M = ${JSON.stringify(messages).replace(/</g, '\u003c')};
    /**
     * 按 id 取 DOM 元素。
     * @param {string} id 元素 id
     */
    const $ = id => document.getElementById(id);
    /** 工具面板根节点。 */
    const panel = $('ratePanel');
    /** 文件输入。 */
    const fileInput = $('rateFile');
    /** 目标采样率选择。 */
    const rateSelect = $('rateSampleRate');
    /** 目标位深选择。 */
    const bitSelect = $('rateBitDepth');
    /** 进度 HUD。 */
    const hud = $('rateHud');
    /** 预览 audio。 */
    const audio = $('rateAudio');
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
    /** 让出主线程一帧，刷新 HUD。 */
    const yieldUi = () => new Promise(resolve => requestAnimationFrame(() => setTimeout(resolve, 0)));
    /**
     * 用 {key} 占位符填充模板。
     * @param {string} text 模板
     * @param {Record<string, string|number>} values 替换值
     */
    const fill = (text, values) => text.replace(/{(\\w+)}/g, (_, key) => String(values[key] ?? ''));
    /** 丢弃预览与下载 URL，并禁用下载。 */
    function discard(){
      audio.pause();
      audio.removeAttribute('src');
      audio.load();
      if (outputUrl) URL.revokeObjectURL(outputUrl);
      outputUrl = '';
      $('rateDownload').disabled = true;
      $('rateOutput').hidden = true;
    }
    /**
     * 忙碌锁：禁用控件；有输出时才允许下载。
     * @param {boolean} on 是否忙碌
     */
    function lock(on){
      busy = on;
      panel.querySelectorAll('button,input,select').forEach(el => el.disabled = on);
      $('rateDownload').disabled = on || !outputUrl;
      $('rateConvert').setAttribute('aria-busy', String(on));
    }
    /**
     * 更新 HUD 百分比与步骤高亮。
     * @param {number} pct 0–100
     * @param {string} step 步骤键
     */
    function progress(pct, step){
      $('ratePct').textContent = Math.round(pct) + '%';
      $('rateBar').style.width = pct + '%';
      $('rateBar').setAttribute('aria-valuenow', String(Math.round(pct)));
      $('rateStep').textContent = M[step];
      hud.querySelectorAll('[data-step]').forEach(el => el.classList.toggle('is-on', el.dataset.step === step));
    }
    /**
     * 显示失败状态。
     * @param {string} key 错误文案键
     */
    function fail(key){
      hud.hidden = false;
      hud.classList.remove('is-on');
      hud.classList.remove('is-done');
      hud.classList.add('is-error', 'is-fail');
      $('ratePct').textContent = '—';
      $('rateBar').style.width = '0%';
      $('rateBar').setAttribute('aria-valuenow', '0');
      hud.setAttribute('role', 'alert');
      $('rateStep').textContent = M[key] || M.failed;
    }
    /**
     * 选择或清空输入文件（会丢弃旧输出）。
     * @param {File|null} file 新文件
     */
    function choose(file){
      if (busy) return;
      discard();
      selected = file || null;
      $('rateName').textContent = file ? file.name : '';
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
     * 将 float PCM 缓冲写成 16/24-bit little-endian PCM WAV。
     * @param {AudioBuffer} buffer 已在目标采样率的缓冲
     * @param {number} rate 采样率 Hz
     * @param {number} bitDepth 16 或 24
     */
    function writeWav(buffer, rate, bitDepth){
      const channels = Math.min(2, buffer.numberOfChannels);
      const frames = buffer.length;
      const bytesPerSample = bitDepth === 24 ? 3 : 2;
      const blockAlign = channels * bytesPerSample;
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
      view.setUint16(22, channels, true);
      view.setUint32(24, rate, true);
      view.setUint32(28, rate * blockAlign, true);
      view.setUint16(32, blockAlign, true);
      view.setUint16(34, bitDepth, true);
      put(36, 'data');
      view.setUint32(40, dataBytes, true);
      const data = [];
      for (let c = 0; c < channels; c++) data.push(buffer.getChannelData(c));
      let at = 44;
      for (let i = 0; i < frames; i++){
        for (let c = 0; c < channels; c++){
          const sample = Number.isFinite(data[c][i]) ? Math.max(-1, Math.min(1, data[c][i])) : 0;
          if (bitDepth === 24){
            const n = Math.round(sample * (sample < 0 ? 8388608 : 8388607));
            const clamped = Math.max(-8388608, Math.min(8388607, n));
            view.setUint8(at, clamped & 0xff);
            view.setUint8(at + 1, (clamped >> 8) & 0xff);
            view.setUint8(at + 2, (clamped >> 16) & 0xff);
            at += 3;
          } else {
            view.setInt16(at, Math.round(sample * (sample < 0 ? 32768 : 32767)), true);
            at += 2;
          }
        }
      }
      return new Blob([bytes], { type: 'audio/wav' });
    }
    /**
     * 若目标率不同，用 OfflineAudioContext 重采样；否则原样返回。
     * @param {AudioBuffer} buffer 解码后的缓冲
     * @param {number} targetRate 目标 Hz
     */
    async function resampleBuffer(buffer, targetRate){
      if (Math.round(buffer.sampleRate) === targetRate) return buffer;
      const Offline = window.OfflineAudioContext || window.webkitOfflineAudioContext;
      if (!Offline) throw Error('err_decode');
      const channels = Math.min(2, buffer.numberOfChannels);
      const frames = Math.max(1, Math.ceil(buffer.duration * targetRate));
      const offline = new Offline(channels, frames, targetRate);
      const source = offline.createBufferSource();
      /** 若声道被截断到 2，复制到临时缓冲。 */
      let play = buffer;
      if (buffer.numberOfChannels > 2){
        play = offline.createBuffer(2, buffer.length, buffer.sampleRate);
        play.copyToChannel(buffer.getChannelData(0), 0);
        play.copyToChannel(buffer.getChannelData(1), 1);
      }
      source.buffer = play;
      source.connect(offline.destination);
      source.start(0);
      return await offline.startRendering();
    }
    /** 主转换：读 → 解码 → 重采样 → 写 WAV。 */
    async function convert(){
      if (busy) return;
      discard();
      if (!selected){ fail('empty'); return; }
      lock(true);
      hud.hidden = false;
      hud.className = 'bcw-hud is-on mb-3';
      hud.setAttribute('role', 'status');
      $('rateCurrent').textContent = selected.name;
      started = performance.now();
      const clock = () => { $('rateTime').textContent = fill(M.elapsed, { s: ((performance.now() - started) / 1000).toFixed(1) }); };
      clock();
      timer = setInterval(clock, 100);
      try {
        progress(2, 'read');
        await yieldUi();
        if (selected.size > 40 * 1024 * 1024) throw Error('err_limit');
        if (!isAudio(selected)) throw Error('err_format');
        const bytes = await selected.arrayBuffer();
        progress(14, 'decode');
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
        const targetRate = Number(rateSelect.value);
        const bitDepth = Number(bitSelect.value);
        if (![22050, 44100, 48000, 96000].includes(targetRate)) throw Error('err_encoder');
        if (![16, 24].includes(bitDepth)) throw Error('err_encoder');
        progress(40, 'resample');
        await yieldUi();
        const rendered = await resampleBuffer(decoded, targetRate);
        progress(72, 'write');
        await yieldUi();
        const blob = writeWav(rendered, targetRate, bitDepth);
        if (!blob.size) throw Error('err_encoder');
        outputUrl = URL.createObjectURL(blob);
        audio.src = outputUrl;
        $('rateOutput').hidden = false;
        $('rateResult').textContent = fill(M.result, {
          seconds: decoded.duration.toFixed(2),
          sourceRate: Math.round(decoded.sampleRate),
          sourceBit: M.source_float,
          targetRate: targetRate,
          targetBit: bitDepth,
          output: (blob.size / 1024).toFixed(1),
          channels: Math.min(2, decoded.numberOfChannels)
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
     * 合成约 2 s、48 kHz 立体声 16-bit WAV 样例 File。
     * @returns {File}
     */
    function sampleWav(){
      const rate = 48000;
      const frames = rate * 2;
      const bytes = new ArrayBuffer(44 + frames * 4);
      const v = new DataView(bytes);
      const str = (at, text) => { for (let i = 0; i < text.length; i++) v.setUint8(at + i, text.charCodeAt(i)); };
      str(0, 'RIFF');
      v.setUint32(4, bytes.byteLength - 8, true);
      str(8, 'WAVE');
      str(12, 'fmt ');
      v.setUint32(16, 16, true);
      v.setUint16(20, 1, true);
      v.setUint16(22, 2, true);
      v.setUint32(24, rate, true);
      v.setUint32(28, rate * 4, true);
      v.setUint16(32, 4, true);
      v.setUint16(34, 16, true);
      str(36, 'data');
      v.setUint32(40, frames * 4, true);
      for (let i = 0; i < frames; i++){
        const fade = Math.min(1, i / 2400, (frames - i) / 2400);
        v.setInt16(44 + i * 4, Math.sin(2 * Math.PI * 440 * i / rate) * 6500 * fade, true);
        v.setInt16(46 + i * 4, Math.sin(2 * Math.PI * 660 * i / rate) * 6500 * fade, true);
      }
      return new File([bytes], M.sample_name + '.wav', { type: 'audio/wav' });
    }
    /** 进页或点 Sample：加载 48 kHz 样例并自动转到默认 44.1/16。 */
    async function loadSample(){
      if (busy) return;
      rateSelect.value = '44100';
      bitSelect.value = '16';
      choose(sampleWav());
      await convert();
    }
    fileInput.addEventListener('change', () => choose(fileInput.files[0]));
    $('rateDrop').addEventListener('dragover', event => event.preventDefault());
    $('rateDrop').addEventListener('drop', event => {
      event.preventDefault();
      if (busy) return;
      const files = event.dataTransfer.files;
      if (files.length !== 1){ choose(null); fail('err_file'); return; }
      choose(files[0]);
    });
    [rateSelect, bitSelect].forEach(el => el.addEventListener('change', () => { discard(); hud.hidden = true; }));
    $('rateConvert').addEventListener('click', convert);
    $('rateSample').addEventListener('click', loadSample);
    $('rateClear').addEventListener('click', () => choose(null));
    $('rateDownload').addEventListener('click', () => {
      if (!outputUrl || busy) return;
      const link = document.createElement('a');
      link.href = outputUrl;
      link.download = (selected.name.replace(/\\.[^.]+$/, '') || 'audio') + '.wav';
      document.body.appendChild(link);
      link.click();
      link.remove();
    });
    window.addEventListener('pagehide', () => {
      clearInterval(timer);
      if (outputUrl) URL.revokeObjectURL(outputUrl);
    });
    loadSample();
  })();
</script>`;

	/** catalog 元数据（related / schema）。 */
	const toolMeta = getToolBySlug('convert-audio-sample-rate-and-bit-depth');
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
