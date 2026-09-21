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
const P = 'tool_make_a_quiet_recording_louder';

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
 * 整段 dB 增益放大安静录音，峰值保护后导出 16-bit WAV（S15）。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderMakeAQuietRecordingLouderPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 工具规范路径（无语言前缀）。 */
	const toolPath = '/tools/make-a-quiet-recording-louder';
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
			currentSlug: 'make-a-quiet-recording-louder',
			currentAnchor: '#quiet-louder',
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
		'amplify',
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
		'result_clipped',
		'empty',
	];
	/** 消息字典：键 → 当前语言字符串。 */
	const messages = Object.fromEntries(uiKeys.map((key) => [key, t(opts.lang, `${P}_${key}`)]));

	/** 工具主面板与结果区 markup。 */
	const contentHtml = `
    <div id="quiet-louder" class="tool-page-heading mb-3"><h1 class="h4">${tr('title')}</h1><p>${tr('desc')}</p></div>
    <section class="tool-panel" id="loudPanel">
      <label class="tool-dropzone mb-3" id="loudDrop" for="loudFile"><input id="loudFile" type="file" accept=".wav,.mp3,.m4a,.aac,.ogg,audio/*"><span class="tool-dropzone-title">${tr('choose')}</span><span class="tool-dropzone-hint">${tr('hint')}</span><span id="loudName" class="tool-dropzone-file"></span></label>
      <div class="tools-bar d-flex flex-wrap mb-3" style="gap:.5rem">
        <button id="loudConvert" class="btn btn-primary" type="button">${tr('convert')}</button>
        <button id="loudDownload" class="btn btn-outline-primary" type="button" disabled>${tr('download')}</button>
        <button id="loudSample" class="btn btn-outline-secondary" type="button">${tr('sample')}</button>
        <button id="loudClear" class="btn btn-outline-secondary" type="button">${tr('clear')}</button>
      </div>
      <details class="mb-3" open><summary>${tr('advanced')}</summary>
        <p class="form-label mt-2 mb-1">${tr('gain_label')}</p>
        <div class="loud-gain-chips mb-2" id="loudGainChips" role="group" aria-label="${tr('gain_label')}">
          <button type="button" class="btn btn-sm btn-outline-secondary" data-gain="3" aria-pressed="false">+3 dB</button>
          <button type="button" class="btn btn-sm btn-primary" data-gain="6" aria-pressed="true">+6 dB</button>
          <button type="button" class="btn btn-sm btn-outline-secondary" data-gain="9" aria-pressed="false">+9 dB</button>
          <button type="button" class="btn btn-sm btn-outline-secondary" data-gain="12" aria-pressed="false">+12 dB</button>
        </div>
        <label class="form-label" for="loudGain">${tr('gain_custom')}</label>
        <div class="d-flex align-items-center flex-wrap mb-2" style="gap:.75rem">
          <input id="loudGain" class="form-range" type="range" min="0" max="24" step="0.5" value="6" style="flex:1;min-width:10rem" aria-valuemin="0" aria-valuemax="24" aria-valuenow="6">
          <span id="loudGainValue" class="form-text mb-0" style="min-width:4.5rem">+6 dB</span>
        </div>
        <p class="form-text">${tr('settings_hint')}</p>
      </details>
      <div id="loudHud" class="bcw-hud mb-3" role="status" aria-live="polite" hidden>
        <div class="bcw-hud-top"><div class="bcw-hud-spin" aria-hidden="true"></div><div class="bcw-hud-pct" id="loudPct">0%</div><div class="bcw-hud-copy"><div class="bcw-hud-title">${tr('progress')}</div><div class="bcw-hud-step" id="loudStep"></div><div class="bcw-hud-time" id="loudTime"></div></div></div>
        <div class="progress" style="height:1.35rem"><div id="loudBar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div><span class="bcw-hud-sheen" aria-hidden="true"></span></div>
        <ol class="bcw-hud-steps"><li data-step="read">${tr('read')}</li><li data-step="decode">${tr('decode')}</li><li data-step="amplify">${tr('amplify')}</li><li data-step="write">${tr('write')}</li></ol><div class="bcw-hud-url" id="loudCurrent"></div>
      </div>
      <div id="loudOutput" hidden><h2 class="h5">${tr('preview')}</h2><p id="loudResult"></p><audio id="loudAudio" controls preload="metadata" style="max-width:100%" aria-label="${tr('preview')}"></audio></div>
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

	/** 金标 HUD、增益芯片与布局补充样式。 */
	const extraHeadHtml = `<style>${bcwHudCss({ hudId: 'loudHud', convertBtnId: 'loudConvert' })}#loudHud.is-error{border-color:#b91c1c;background:#fff1f2}#loudHud:not(.is-on) .bcw-hud-spin{animation:none}.loud-gain-chips{display:flex;flex-wrap:wrap;gap:.4rem}.site-footer nav.d-inline{display:inline-flex!important;flex-wrap:wrap;justify-content:center;max-width:100%}</style>`;

	/** 客户端转换管线（读 → 解码 → 增益+峰值保护 → 写 16-bit WAV）。 */
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
    const panel = $('loudPanel');
    /** 文件输入。 */
    const fileInput = $('loudFile');
    /** 进度 HUD。 */
    const hud = $('loudHud');
    /** 预览 audio。 */
    const audio = $('loudAudio');
    /** 增益滑条。 */
    const gainInput = $('loudGain');
    /** 增益数值显示。 */
    const gainValue = $('loudGainValue');
    /** 预设芯片组。 */
    const gainChips = $('loudGainChips');
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
    /** 当前请求增益（dB），默认温和 +6。 */
    let gainDb = 6;
    /** 让出主线程一帧，刷新 HUD。 */
    const yieldUi = () => new Promise(resolve => requestAnimationFrame(() => setTimeout(resolve, 0)));
    /**
     * 用 {key} 占位符填充模板。
     * @param {string} text 模板
     * @param {Record<string, string|number>} values 替换值
     */
    const fill = (text, values) => text.replace(/{(\\w+)}/g, (_, key) => String(values[key] ?? ''));
    /**
     * 格式化增益标签（如 +6 dB）。
     * @param {number} db 增益分贝
     */
    function formatGain(db){
      const n = Math.round(db * 10) / 10;
      const sign = n > 0 ? '+' : '';
      return sign + n + ' dB';
    }
    /** 同步芯片、滑条与数值显示。 */
    function paintGain(){
      gainInput.value = String(gainDb);
      gainInput.setAttribute('aria-valuenow', String(gainDb));
      gainValue.textContent = formatGain(gainDb);
      const preset = [3, 6, 9, 12].find(v => Math.abs(v - gainDb) < 0.001);
      gainChips.querySelectorAll('[data-gain]').forEach(btn => {
        const on = preset != null && Number(btn.dataset.gain) === preset;
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
      $('loudDownload').disabled = true;
      $('loudOutput').hidden = true;
    }
    /**
     * 忙碌锁：禁用控件；有输出时才允许下载。
     * @param {boolean} on 是否忙碌
     */
    function lock(on){
      busy = on;
      panel.querySelectorAll('button,input').forEach(el => el.disabled = on);
      $('loudDownload').disabled = on || !outputUrl;
      $('loudConvert').setAttribute('aria-busy', String(on));
    }
    /**
     * 更新 HUD 百分比与步骤高亮。
     * @param {number} pct 0–100
     * @param {string} step 步骤键
     */
    function progress(pct, step){
      $('loudPct').textContent = Math.round(pct) + '%';
      $('loudBar').style.width = pct + '%';
      $('loudBar').setAttribute('aria-valuenow', String(Math.round(pct)));
      $('loudStep').textContent = M[step];
      hud.querySelectorAll('[data-step]').forEach(el => el.classList.toggle('is-on', el.dataset.step === step));
    }
    /**
     * 显示失败状态。
     * @param {string} key 错误文案键
     */
    function fail(key){
      hud.hidden = false;
      hud.className = 'bcw-hud is-error is-fail mb-3';
      $('loudPct').textContent = '—';
      $('loudBar').style.width = '0%';
      $('loudBar').setAttribute('aria-valuenow', '0');
      hud.setAttribute('role', 'alert');
      $('loudStep').textContent = M[key] || M.failed;
    }
    /**
     * 选择或清空输入文件（会丢弃旧输出）。
     * @param {File|null} file 新文件
     */
    function choose(file){
      if (busy) return;
      discard();
      selected = file || null;
      $('loudName').textContent = file ? file.name : '';
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
     * 对解码缓冲施加线性增益，必要时按峰值等比回缩，返回新 Float 声道数组。
     * @param {AudioBuffer} buffer 解码后的缓冲
     * @param {number} db 请求增益 dB
     */
    function amplifyBuffer(buffer, db){
      const channels = Math.min(2, buffer.numberOfChannels);
      const frames = buffer.length;
      const src = [];
      const out = [];
      for (let c = 0; c < channels; c++){
        src.push(buffer.getChannelData(c));
        out.push(new Float32Array(frames));
      }
      const peakBefore = absPeak(src);
      const linear = Math.pow(10, db / 20);
      for (let c = 0; c < channels; c++){
        for (let i = 0; i < frames; i++){
          const s = Number.isFinite(src[c][i]) ? src[c][i] : 0;
          out[c][i] = s * linear;
        }
      }
      const peakRaw = absPeak(out);
      let protectScale = 1;
      let clipped = false;
      if (peakRaw > 1){
        protectScale = 1 / peakRaw;
        clipped = true;
        for (let c = 0; c < channels; c++){
          for (let i = 0; i < frames; i++) out[c][i] *= protectScale;
        }
      }
      const peakAfter = absPeak(out);
      const effectiveLinear = linear * protectScale;
      const effectiveDb = 20 * Math.log10(Math.max(effectiveLinear, 1e-12));
      return { channels: out, peakBefore, peakAfter, clipped, effectiveDb, rate: Math.round(buffer.sampleRate) };
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
    /** 主转换：读 → 解码 → 增益+峰值保护 → 写 WAV。 */
    async function convert(){
      if (busy) return;
      discard();
      if (!selected){ fail('empty'); return; }
      lock(true);
      hud.hidden = false;
      hud.className = 'bcw-hud is-on mb-3';
      hud.setAttribute('role', 'status');
      $('loudCurrent').textContent = selected.name;
      started = performance.now();
      const clock = () => { $('loudTime').textContent = fill(M.elapsed, { s: ((performance.now() - started) / 1000).toFixed(1) }); };
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
        if (!(gainDb >= 0 && gainDb <= 24)) throw Error('err_encoder');
        progress(40, 'amplify');
        await yieldUi();
        const amplified = amplifyBuffer(decoded, gainDb);
        progress(72, 'write');
        await yieldUi();
        const blob = writeWav(amplified.channels, amplified.rate);
        if (!blob.size) throw Error('err_encoder');
        outputUrl = URL.createObjectURL(blob);
        audio.src = outputUrl;
        $('loudOutput').hidden = false;
        const template = amplified.clipped ? M.result_clipped : M.result;
        $('loudResult').textContent = fill(template, {
          seconds: decoded.duration.toFixed(2),
          gainDb: (Math.round(gainDb * 10) / 10).toFixed(1),
          effectiveDb: (Math.round(amplified.effectiveDb * 10) / 10).toFixed(1),
          peakBefore: amplified.peakBefore.toFixed(3),
          peakAfter: amplified.peakAfter.toFixed(3),
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
     * 合成约 2 s、48 kHz 单声道偏安静 16-bit WAV 样例（便于听出增益）。
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
        v.setInt16(44 + i * 2, Math.sin(2 * Math.PI * 440 * i / rate) * 1800 * fade, true);
      }
      return new File([bytes], M.sample_name + '.wav', { type: 'audio/wav' });
    }
    /** 进页或点 Sample：加载安静样例并以默认 +6 dB 自动放大。 */
    async function loadSample(){
      if (busy) return;
      gainDb = 6;
      paintGain();
      choose(sampleWav());
      await convert();
    }
    fileInput.addEventListener('change', () => choose(fileInput.files[0]));
    $('loudDrop').addEventListener('dragover', event => event.preventDefault());
    $('loudDrop').addEventListener('drop', event => {
      event.preventDefault();
      if (busy) return;
      const files = event.dataTransfer.files;
      if (files.length !== 1){ choose(null); fail('err_file'); return; }
      choose(files[0]);
    });
    gainChips.addEventListener('click', event => {
      const btn = event.target.closest('[data-gain]');
      if (!btn || busy) return;
      gainDb = Number(btn.dataset.gain);
      paintGain();
      discard();
      hud.hidden = true;
    });
    gainInput.addEventListener('input', () => {
      if (busy) return;
      gainDb = Number(gainInput.value);
      paintGain();
      discard();
      hud.hidden = true;
    });
    $('loudConvert').addEventListener('click', convert);
    $('loudSample').addEventListener('click', loadSample);
    $('loudClear').addEventListener('click', () => choose(null));
    $('loudDownload').addEventListener('click', () => {
      if (!outputUrl || busy) return;
      const link = document.createElement('a');
      link.href = outputUrl;
      link.download = (selected.name.replace(/\\.[^.]+$/, '') || 'audio') + '-louder.wav';
      document.body.appendChild(link);
      link.click();
      link.remove();
    });
    window.addEventListener('pagehide', () => {
      clearInterval(timer);
      if (outputUrl) URL.revokeObjectURL(outputUrl);
    });
    paintGain();
    loadSample();
  })();
</script>`;

	/** catalog 元数据（related / schema）。 */
	const toolMeta = getToolBySlug('make-a-quiet-recording-louder');
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
