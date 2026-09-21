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
const P = 'tool_extract_audio_from_a_video_file';

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
 * 从本地视频文件提取音轨并导出 WAV/MP3（F7 A1）。
 * 管线：读文件 → decodeAudioData（浏览器从视频容器解音轨）→ 提取声道 → 写 16-bit WAV 或 lamejs MP3。
 * 仅本地文件；不做 YouTube/URL 代抓。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderExtractAudioFromAVideoFilePage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 工具规范路径（无语言前缀）。 */
	const toolPath = '/tools/extract-audio-from-a-video-file';
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
			currentSlug: 'extract-audio-from-a-video-file',
			currentAnchor: '#extract-audio',
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
		'extract',
		'write',
		'done',
		'failed',
		'elapsed',
		'err_file',
		'err_format',
		'err_limit',
		'err_decode',
		'err_encoder',
		'err_sample',
		'sample_name',
		'result',
		'empty',
		'format_wav',
		'format_mp3',
		'download_wav',
		'download_mp3',
	];
	/** 消息字典：键 → 当前语言字符串。 */
	const messages = Object.fromEntries(uiKeys.map((key) => [key, t(opts.lang, `${P}_${key}`)]));

	/** 工具主面板与结果区 markup。 */
	const contentHtml = `
    <div id="extract-audio" class="tool-page-heading mb-3"><h1 class="h4">${tr('title')}</h1><p>${tr('desc')}</p></div>
    <section class="tool-panel" id="eaPanel">
      <label class="tool-dropzone mb-3" id="eaDrop" for="eaFile"><input id="eaFile" type="file" accept="video/*,.mp4,.webm,.mov,.m4v,video/mp4,video/webm,video/quicktime"><span class="tool-dropzone-title">${tr('choose')}</span><span class="tool-dropzone-hint">${tr('hint')}</span><span id="eaName" class="tool-dropzone-file"></span></label>
      <div class="tools-bar d-flex flex-wrap mb-3" style="gap:.5rem">
        <button id="eaConvert" class="btn btn-primary" type="button">${tr('convert')}</button>
        <button id="eaDownload" class="btn btn-outline-primary" type="button" disabled>${tr('download_wav')}</button>
        <button id="eaSample" class="btn btn-outline-secondary" type="button">${tr('sample')}</button>
        <button id="eaClear" class="btn btn-outline-secondary" type="button">${tr('clear')}</button>
      </div>
      <details class="mb-3" open><summary>${tr('advanced')}</summary>
        <p class="form-label mt-2 mb-1">${tr('format_label')}</p>
        <div class="ea-format-chips mb-2" id="eaFormatChips" role="group" aria-label="${tr('format_label')}">
          <button type="button" class="btn btn-sm btn-primary" data-format="wav" aria-pressed="true">${tr('format_wav')}</button>
          <button type="button" class="btn btn-sm btn-outline-secondary" data-format="mp3" aria-pressed="false">${tr('format_mp3')}</button>
        </div>
        <label for="eaBitrate" class="form-label">${tr('bitrate')}</label>
        <select id="eaBitrate" class="form-select form-select-sm mb-2"><option value="128">128 kbps</option><option value="192" selected>192 kbps</option><option value="320">320 kbps</option></select>
        <p class="form-text">${tr('settings_hint')}</p>
      </details>
      <div id="eaHud" class="bcw-hud mb-3" role="status" aria-live="polite" hidden>
        <div class="bcw-hud-top"><div class="bcw-hud-spin" aria-hidden="true"></div><div class="bcw-hud-pct" id="eaPct">0%</div><div class="bcw-hud-copy"><div class="bcw-hud-title">${tr('progress')}</div><div class="bcw-hud-step" id="eaStep"></div><div class="bcw-hud-time" id="eaTime"></div></div></div>
        <div class="progress" style="height:1.35rem"><div id="eaBar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div><span class="bcw-hud-sheen" aria-hidden="true"></span></div>
        <ol class="bcw-hud-steps"><li data-step="read">${tr('read')}</li><li data-step="decode">${tr('decode')}</li><li data-step="extract">${tr('extract')}</li><li data-step="write">${tr('write')}</li></ol><div class="bcw-hud-url" id="eaCurrent"></div>
      </div>
      <div id="eaEmpty" class="ea-empty mb-3" role="status">${tr('empty_state')}</div>
      <div id="eaOutput" hidden><h2 class="h5">${tr('preview')}</h2><p id="eaResult"></p><audio id="eaAudio" controls preload="metadata" style="max-width:100%" aria-label="${tr('preview')}"></audio></div>
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
				label: 'MDN: decodeAudioData',
				href: 'https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/decodeAudioData',
			},
			{
				label: 'MDN: Media container formats',
				href: 'https://developer.mozilla.org/en-US/docs/Web/Media/Formats',
			},
		],
	});

	/** 金标 HUD、格式芯片与布局补充样式。 */
	const extraHeadHtml = `<style>${bcwHudCss({ hudId: 'eaHud', convertBtnId: 'eaConvert' })}#eaHud.is-error{border-color:#b91c1c;background:#fff1f2}#eaHud:not(.is-on) .bcw-hud-spin{animation:none}.ea-format-chips{display:flex;flex-wrap:wrap;gap:.4rem}#eaBitrate{max-width:18rem}.ea-empty{padding:.75rem 1rem;border:1px dashed var(--border,#ced4da);border-radius:.5rem;color:var(--bs-secondary-color,#6c757d);font-size:.95rem}.site-footer nav.d-inline{display:inline-flex!important;flex-wrap:wrap;justify-content:center;max-width:100%}</style>`;

	/** 客户端提取管线（读 → 解码视频容器音轨 → 提取声道 → 写 WAV/MP3）。 */
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
    const fileInput = $('eaFile');
    /** 格式芯片容器。 */
    const formatChips = $('eaFormatChips');
    /** MP3 码率选择。 */
    const bitrateEl = $('eaBitrate');
    /** 进度 HUD。 */
    const hud = $('eaHud');
    /** 预览 audio。 */
    const audio = $('eaAudio');
    /** 空状态提示（无自动样例时可见）。 */
    const emptyState = $('eaEmpty');
    /** 单文件体积上限：80 MiB（视频容器通常比纯音频大）。 */
    const MAX_BYTES = 80 * 1024 * 1024;
    /** 时长上限：10 分钟。 */
    const MAX_DURATION = 600;
    /** lamejs 脚本路径。 */
    const LAME_SRC = '/vendor/lamejs/lamejs.iife.js';
    /** HUD 步骤顺序。 */
    const STEPS = ['read','decode','extract','write'];
    /** 当前选中文件。 */
    let selected = null;
    /** 输出 object URL。 */
    let outputUrl = null;
    /** 输出扩展名：wav | mp3。 */
    let outExt = 'wav';
    /** 是否忙。 */
    let busy = false;
    /** 计时器。 */
    let timer = null;
    /** 开始时间。 */
    let started = 0;
    /** 导出格式：wav | mp3。 */
    let format = 'wav';
    /** lamejs 加载 Promise 缓存。 */
    let encoderPromise = null;
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
      return new Promise(resolve => requestAnimationFrame(() => setTimeout(resolve, 0)));
    }
    /** 丢弃旧输出。 */
    function discard(){
      if (outputUrl){ URL.revokeObjectURL(outputUrl); outputUrl = null; }
      outExt = format === 'mp3' ? 'mp3' : 'wav';
      audio.pause();
      audio.removeAttribute('src');
      audio.load();
      $('eaOutput').hidden = true;
      $('eaResult').textContent = '';
      $('eaDownload').disabled = true;
      $('eaDownload').textContent = format === 'mp3' ? M.download_mp3 : M.download_wav;
    }
    /**
     * 锁定或解锁控件。
     * @param {boolean} on 是否锁定
     */
    function lock(on){
      busy = on;
      $('eaConvert').disabled = on;
      $('eaSample').disabled = on;
      $('eaClear').disabled = on;
      fileInput.disabled = on;
      bitrateEl.disabled = on;
      formatChips.querySelectorAll('button').forEach(btn => { btn.disabled = on; });
      if (!on) $('eaDownload').disabled = !outputUrl;
      $('eaConvert').setAttribute('aria-busy', String(on));
    }
    /**
     * 刷新格式芯片选中态与下载按钮文案。
     * @param {string} mode wav|mp3
     */
    function paintFormat(mode){
      formatChips.querySelectorAll('[data-format]').forEach(btn => {
        const on = btn.dataset.format === mode;
        btn.classList.toggle('btn-primary', on);
        btn.classList.toggle('btn-outline-secondary', !on);
        btn.setAttribute('aria-pressed', on ? 'true' : 'false');
      });
      $('eaDownload').textContent = mode === 'mp3' ? M.download_mp3 : M.download_wav;
    }
    /**
     * 切换导出格式并清空旧输出。
     * @param {string} mode wav|mp3
     */
    function setFormat(mode){
      if ((mode !== 'wav' && mode !== 'mp3') || busy) return;
      format = mode;
      paintFormat(mode);
      discard();
      hud.hidden = true;
    }
    /**
     * 更新 HUD 百分比与步骤高亮。
     * @param {number} pct 百分比
     * @param {string} stepKey 步骤键或 done
     */
    function progress(pct, stepKey){
      const value = Math.max(0, Math.min(100, Math.round(pct)));
      $('eaPct').textContent = value + '%';
      $('eaBar').style.width = value + '%';
      $('eaBar').setAttribute('aria-valuenow', String(value));
      const label = stepKey === 'done' ? M.done : (M[stepKey] || stepKey);
      $('eaStep').textContent = label;
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
      $('eaPct').textContent = '—';
      $('eaBar').style.width = '0%';
      $('eaBar').setAttribute('aria-valuenow', '0');
      hud.setAttribute('role', 'alert');
      $('eaStep').textContent = M[key] || M.failed;
    }
    /**
     * 选择或清空输入文件（会丢弃旧输出）。
     * @param {File|null} file 新文件
     */
    function choose(file){
      if (busy) return;
      discard();
      selected = file || null;
      $('eaName').textContent = file ? file.name : '';
      hud.hidden = true;
      fileInput.value = '';
      if (emptyState) emptyState.hidden = !!file;
    }
    /**
     * 是否为可尝试解码的常见视频容器。
     * @param {File} file 候选文件
     */
    function isVideo(file){
      if (!file) return false;
      if (/\\.(mp4|webm|mov|m4v)$/i.test(file.name)) return true;
      if (file.type && file.type.indexOf('video/') === 0) return true;
      return false;
    }
    /**
     * 懒加载 lamejs IIFE。
     * @returns {Promise<any>}
     */
    function loadEncoder(){
      if (window.lamejs && window.lamejs.Mp3Encoder) return Promise.resolve(window.lamejs);
      if (!encoderPromise){
        encoderPromise = new Promise((resolve, reject) => {
          const script = document.createElement('script');
          let timeout;
          const bad = () => {
            clearTimeout(timeout);
            script.remove();
            encoderPromise = null;
            reject(Error('err_encoder'));
          };
          script.src = LAME_SRC;
          script.onerror = bad;
          script.onload = () => {
            clearTimeout(timeout);
            if (window.lamejs && window.lamejs.Mp3Encoder) resolve(window.lamejs);
            else bad();
          };
          timeout = setTimeout(bad, 20000);
          document.head.appendChild(script);
        });
      }
      return encoderPromise;
    }
    /**
     * Float32 通道 → Int16 PCM。
     * @param {Float32Array} data 浮点样本
     * @returns {Int16Array}
     */
    function toInt16(data){
      const out = new Int16Array(data.length);
      for (let i = 0; i < data.length; i++){
        const value = Number.isFinite(data[i]) ? Math.max(-1, Math.min(1, data[i])) : 0;
        out[i] = Math.round(value * (value < 0 ? 32768 : 32767));
      }
      return out;
    }
    /**
     * AudioBuffer → 16-bit PCM WAV Blob。
     * @param {AudioBuffer} buf 解码缓冲
     * @returns {Blob}
     */
    function bufferToWav(buf){
      const ch = buf.numberOfChannels;
      const rate = buf.sampleRate;
      const len = buf.length;
      const dataSize = len * ch * 2;
      const ab = new ArrayBuffer(44 + dataSize);
      const view = new DataView(ab);
      /**
       * 写入 ASCII 四字符标记。
       * @param {number} off 偏移
       * @param {string} s 四字符
       */
      const wstr = (off, s) => { for (let i = 0; i < s.length; i++) view.setUint8(off + i, s.charCodeAt(i)); };
      wstr(0, 'RIFF');
      view.setUint32(4, 36 + dataSize, true);
      wstr(8, 'WAVE');
      wstr(12, 'fmt ');
      view.setUint32(16, 16, true);
      view.setUint16(20, 1, true);
      view.setUint16(22, ch, true);
      view.setUint32(24, rate, true);
      view.setUint32(28, rate * ch * 2, true);
      view.setUint16(32, ch * 2, true);
      view.setUint16(34, 16, true);
      wstr(36, 'data');
      view.setUint32(40, dataSize, true);
      let offset = 44;
      for (let i = 0; i < len; i++){
        for (let c = 0; c < ch; c++){
          const s = Math.max(-1, Math.min(1, buf.getChannelData(c)[i]));
          view.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7fff, true);
          offset += 2;
        }
      }
      return new Blob([ab], { type: 'audio/wav' });
    }
    /**
     * AudioBuffer → MP3 Blob（CBR，分块编码并让出 UI）。
     * @param {AudioBuffer} buf 缓冲
     * @param {number} kbps 码率
     * @param {(pct:number)=>void} onPct 写进度回调
     * @returns {Promise<Blob>}
     */
    async function bufferToMp3(buf, kbps, onPct){
      const lame = await loadEncoder();
      const ch = buf.numberOfChannels >= 2 ? 2 : 1;
      const enc = new lame.Mp3Encoder(ch, buf.sampleRate, kbps);
      const left = toInt16(buf.getChannelData(0));
      const right = ch === 2 ? toInt16(buf.getChannelData(1)) : null;
      const block = 1152;
      const parts = [];
      let last = performance.now();
      for (let i = 0; i < left.length; i += block){
        const l = left.subarray(i, i + block);
        const chunk = ch === 2 ? enc.encodeBuffer(l, right.subarray(i, i + block)) : enc.encodeBuffer(l);
        if (chunk && chunk.length) parts.push(new Uint8Array(chunk));
        if (performance.now() - last > 40){
          onPct(70 + 25 * Math.min(1, (i + block) / left.length));
          await yieldUi();
          last = performance.now();
        }
      }
      const end = enc.flush();
      if (end && end.length) parts.push(new Uint8Array(end));
      const blob = new Blob(parts, { type: 'audio/mpeg' });
      if (!blob.size) throw Error('err_encoder');
      return blob;
    }
    /**
     * 将解码结果规范为 1–2 声道 AudioBuffer（多声道取前两路）。
     * @param {AudioBuffer} decoded 原始解码
     * @returns {AudioBuffer}
     */
    function extractChannels(decoded){
      const ch = Math.min(2, Math.max(1, decoded.numberOfChannels));
      if (decoded.numberOfChannels === ch) return decoded;
      const Offline = window.OfflineAudioContext || window.webkitOfflineAudioContext;
      const ctx = new Offline(ch, decoded.length, decoded.sampleRate);
      const out = ctx.createBuffer(ch, decoded.length, decoded.sampleRate);
      for (let c = 0; c < ch; c++) out.copyToChannel(decoded.getChannelData(c), c);
      return out;
    }
    /**
     * 主提取管线：Read → Decode → Extract → Write。
     */
    async function extract(){
      if (busy) return;
      discard();
      if (!selected){ fail('empty'); return; }
      if (!isVideo(selected)){ fail('err_format'); return; }
      lock(true);
      hud.hidden = false;
      hud.className = 'bcw-hud is-on mb-3';
      hud.setAttribute('role', 'status');
      $('eaCurrent').textContent = selected.name;
      started = performance.now();
      /**
       * 刷新已用时间文案。
       */
      const clock = () => {
        $('eaTime').textContent = fill(M.elapsed, { s: ((performance.now() - started) / 1000).toFixed(1) });
      };
      clock();
      timer = setInterval(clock, 100);
      try {
        progress(2, 'read');
        await yieldUi();
        if (selected.size > MAX_BYTES) throw Error('err_limit');
        const bytes = await selected.arrayBuffer();
        progress(18, 'decode');
        await yieldUi();
        const Offline = window.OfflineAudioContext || window.webkitOfflineAudioContext;
        if (!Offline) throw Error('err_decode');
        let decoded;
        try {
          decoded = await new Offline(1, 1, 44100).decodeAudioData(bytes.slice(0));
        } catch (e) {
          throw Error('err_decode');
        }
        if (!decoded || !decoded.length) throw Error('err_decode');
        if (decoded.duration > MAX_DURATION + 0.01) throw Error('err_limit');
        if (decoded.numberOfChannels < 1) throw Error('err_format');
        progress(45, 'extract');
        await yieldUi();
        const extracted = extractChannels(decoded);
        if (extracted.numberOfChannels > 2) throw Error('err_limit');
        progress(65, 'write');
        await yieldUi();
        let blob;
        if (format === 'mp3'){
          const kbps = Number(bitrateEl.value);
          if (![128, 192, 320].includes(kbps)) throw Error('err_encoder');
          blob = await bufferToMp3(extracted, kbps, pct => progress(pct, 'write'));
          outExt = 'mp3';
        } else {
          blob = bufferToWav(extracted);
          outExt = 'wav';
        }
        outputUrl = URL.createObjectURL(blob);
        audio.src = outputUrl;
        $('eaOutput').hidden = false;
        $('eaResult').textContent = fill(M.result, {
          seconds: extracted.duration.toFixed(2),
          channels: extracted.numberOfChannels,
          rate: extracted.sampleRate,
          format: format === 'mp3' ? 'MP3' : 'WAV',
          output: (blob.size / 1024).toFixed(1)
        });
        progress(100, 'done');
        hud.classList.remove('is-on');
        hud.classList.add('is-done');
        if (emptyState) emptyState.hidden = true;
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
     * 用 MediaRecorder 合成约 1.5 秒带音轨的短 WebM（样例）。
     * @returns {Promise<File>}
     */
    function makeSampleVideo(){
      return new Promise((resolve, reject) => {
        if (typeof MediaRecorder === 'undefined' || !HTMLCanvasElement.prototype.captureStream){
          reject(Error('err_sample'));
          return;
        }
        /** 画布：静止色块作视频轨。 */
        const canvas = document.createElement('canvas');
        canvas.width = 160;
        canvas.height = 120;
        const c2d = canvas.getContext('2d');
        if (!c2d){ reject(Error('err_sample')); return; }
        c2d.fillStyle = '#0f766e';
        c2d.fillRect(0, 0, 160, 120);
        c2d.fillStyle = '#ecfdf5';
        c2d.font = '14px sans-serif';
        c2d.fillText('audio', 55, 66);
        /** 合成视频流。 */
        const videoStream = canvas.captureStream(8);
        const AC = window.AudioContext || window.webkitAudioContext;
        if (!AC){ reject(Error('err_sample')); return; }
        /** 音频上下文：440 Hz 短音。 */
        const ac = new AC();
        const osc = ac.createOscillator();
        const gain = ac.createGain();
        gain.gain.value = 0.12;
        const dest = ac.createMediaStreamDestination();
        osc.frequency.value = 440;
        osc.connect(gain);
        gain.connect(dest);
        dest.stream.getAudioTracks().forEach(track => videoStream.addTrack(track));
        /** 选择浏览器支持的 WebM MIME。 */
        const mimeCandidates = [
          'video/webm;codecs=vp8,opus',
          'video/webm;codecs=vp9,opus',
          'video/webm'
        ];
        const mime = mimeCandidates.find(m => MediaRecorder.isTypeSupported(m)) || '';
        if (!mime){ ac.close(); reject(Error('err_sample')); return; }
        /** 录制器与分片。 */
        const rec = new MediaRecorder(videoStream, { mimeType: mime });
        const chunks = [];
        rec.ondataavailable = ev => { if (ev.data && ev.data.size) chunks.push(ev.data); };
        rec.onerror = () => { try { ac.close(); } catch (_) {} reject(Error('err_sample')); };
        rec.onstop = () => {
          try { osc.stop(); } catch (_) {}
          try { ac.close(); } catch (_) {}
          videoStream.getTracks().forEach(t => t.stop());
          const blob = new Blob(chunks, { type: 'video/webm' });
          if (!blob.size){ reject(Error('err_sample')); return; }
          resolve(new File([blob], (M.sample_name || 'sample') + '.webm', { type: 'video/webm' }));
        };
        osc.start();
        rec.start(100);
        /** 约 1.5 秒后停止录制。 */
        setTimeout(() => {
          try { rec.stop(); } catch (_) { reject(Error('err_sample')); }
        }, 1500);
      });
    }
    /**
     * 加载合成样例并运行提取（门禁要求存在 loadSample；不在首屏自动播放）。
     */
    async function loadSample(){
      if (busy) return;
      try {
        const file = await makeSampleVideo();
        choose(file);
        await extract();
      } catch (e) {
        choose(null);
        fail(e && M[e.message] ? e.message : 'err_sample');
      }
    }
    fileInput.addEventListener('change', () => choose(fileInput.files && fileInput.files[0]));
    $('eaDrop').addEventListener('dragover', event => event.preventDefault());
    $('eaDrop').addEventListener('drop', event => {
      event.preventDefault();
      if (busy) return;
      const files = event.dataTransfer && event.dataTransfer.files;
      if (!files || files.length !== 1){ choose(null); fail('err_file'); return; }
      choose(files[0]);
    });
    formatChips.addEventListener('click', event => {
      const btn = event.target.closest('[data-format]');
      if (!btn || busy) return;
      setFormat(btn.dataset.format);
    });
    bitrateEl.addEventListener('change', () => { discard(); hud.hidden = true; });
    $('eaConvert').addEventListener('click', extract);
    $('eaSample').addEventListener('click', loadSample);
    $('eaClear').addEventListener('click', () => choose(null));
    $('eaDownload').addEventListener('click', () => {
      if (!outputUrl || busy) return;
      const link = document.createElement('a');
      link.href = outputUrl;
      link.download = (selected && selected.name ? selected.name.replace(/\\.[^.]+$/, '') : 'audio') + '.' + outExt;
      document.body.appendChild(link);
      link.click();
      link.remove();
    });
    window.addEventListener('pagehide', () => {
      clearInterval(timer);
      if (outputUrl) URL.revokeObjectURL(outputUrl);
    });
    paintFormat('wav');
    // 跳过自动样例：视频样例依赖 MediaRecorder，首屏保持清晰空状态。
  })();
</script>`;

	/** catalog 元数据（related / schema）。 */
	const toolMeta = getToolBySlug('extract-audio-from-a-video-file');
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
