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
const P = 'tool_crossfade_two_audio_files';

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
 * 将两段音频交叉淡化并导出 16-bit WAV（F7 M2）。
 * 管线：双文件读 → decodeAudioData → 采样率/声道对齐 → 尾头等功率（或线性）重叠 → 写 WAV。
 * ≠ 硬切首尾相接（A2）；≠ 全程叠加混音（M1）；≠ 单文件环绕无缝循环。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderCrossfadeTwoAudioFilesPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 工具规范路径（无语言前缀）。 */
	const toolPath = '/tools/crossfade-two-audio-files';
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
			currentSlug: 'crossfade-two-audio-files',
			currentAnchor: '#crossfade-two',
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
		'crossfade',
		'write',
		'done',
		'failed',
		'elapsed',
		'err_file',
		'err_format',
		'err_limit',
		'err_decode',
		'err_encoder',
		'err_fade',
		'sample_name',
		'result',
		'empty',
		'a_label',
		'b_label',
		'curve_linear',
		'curve_equal',
	];
	/** 消息字典：键 → 当前语言字符串。 */
	const messages = Object.fromEntries(uiKeys.map((key) => [key, t(opts.lang, `${P}_${key}`)]));

	/** 工具主面板与结果区 markup。 */
	const contentHtml = `
    <div id="crossfade-two" class="tool-page-heading mb-3"><h1 class="h4">${tr('title')}</h1><p>${tr('desc')}</p></div>
    <section class="tool-panel" id="xfPanel">
      <label class="tool-dropzone mb-2" id="xfADrop" for="xfA"><input id="xfA" type="file" accept=".wav,.mp3,.m4a,.aac,.ogg,audio/*"><span class="tool-dropzone-title">${tr('choose_a')}</span><span class="tool-dropzone-hint">${tr('hint_a')}</span><span id="xfAName" class="tool-dropzone-file"></span></label>
      <label class="tool-dropzone mb-3" id="xfBDrop" for="xfB"><input id="xfB" type="file" accept=".wav,.mp3,.m4a,.aac,.ogg,audio/*"><span class="tool-dropzone-title">${tr('choose_b')}</span><span class="tool-dropzone-hint">${tr('hint_b')}</span><span id="xfBName" class="tool-dropzone-file"></span></label>
      <div class="tools-bar d-flex flex-wrap mb-3" style="gap:.5rem">
        <button id="xfConvert" class="btn btn-primary" type="button">${tr('convert')}</button>
        <button id="xfDownload" class="btn btn-outline-primary" type="button" disabled>${tr('download')}</button>
        <button id="xfSample" class="btn btn-outline-secondary" type="button">${tr('sample')}</button>
        <button id="xfClear" class="btn btn-outline-secondary" type="button">${tr('clear')}</button>
      </div>
      <details class="mb-3" open><summary>${tr('advanced')}</summary>
        <p class="form-label mt-2 mb-1">${tr('fade_label')}</p>
        <div class="xf-dur-chips mb-2" id="xfFadeChips" role="group" aria-label="${tr('fade_label')}">
          <button type="button" class="btn btn-sm btn-outline-secondary" data-sec="1" aria-pressed="false">1s</button>
          <button type="button" class="btn btn-sm btn-primary" data-sec="2" aria-pressed="true">2s</button>
          <button type="button" class="btn btn-sm btn-outline-secondary" data-sec="3" aria-pressed="false">3s</button>
          <button type="button" class="btn btn-sm btn-outline-secondary" data-sec="5" aria-pressed="false">5s</button>
        </div>
        <p class="form-label mb-1">${tr('curve_label')}</p>
        <div class="xf-curve-chips mb-2" id="xfCurveChips" role="group" aria-label="${tr('curve_label')}">
          <button type="button" class="btn btn-sm btn-outline-secondary" data-curve="linear" aria-pressed="false">${tr('curve_linear')}</button>
          <button type="button" class="btn btn-sm btn-primary" data-curve="equal" aria-pressed="true">${tr('curve_equal')}</button>
        </div>
        <p class="form-text">${tr('settings_hint')}</p>
      </details>
      <div id="xfHud" class="bcw-hud mb-3" role="status" aria-live="polite" hidden>
        <div class="bcw-hud-top"><div class="bcw-hud-spin" aria-hidden="true"></div><div class="bcw-hud-pct" id="xfPct">0%</div><div class="bcw-hud-copy"><div class="bcw-hud-title">${tr('progress')}</div><div class="bcw-hud-step" id="xfStep"></div><div class="bcw-hud-time" id="xfTime"></div></div></div>
        <div class="progress" style="height:1.35rem"><div id="xfBar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div><span class="bcw-hud-sheen" aria-hidden="true"></span></div>
        <ol class="bcw-hud-steps"><li data-step="read">${tr('read')}</li><li data-step="decode">${tr('decode')}</li><li data-step="crossfade">${tr('crossfade')}</li><li data-step="write">${tr('write')}</li></ol><div class="bcw-hud-url" id="xfCurrent"></div>
      </div>
      <div id="xfEmpty" class="xf-empty mb-3" role="status">${tr('empty_state')}</div>
      <div id="xfOutput" hidden><h2 class="h5">${tr('preview')}</h2><p id="xfResult"></p><audio id="xfAudio" controls preload="metadata" style="max-width:100%" aria-label="${tr('preview')}"></audio></div>
    </section>`;

	/** How / Why / Rules / Use cases IG 块。 */
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
				label: 'MDN: OfflineAudioContext',
				href: 'https://developer.mozilla.org/en-US/docs/Web/API/OfflineAudioContext',
			},
		],
	});

	/** 金标 HUD 与布局补充样式。 */
	const extraHeadHtml = `<style>${bcwHudCss({ hudId: 'xfHud', convertBtnId: 'xfConvert' })}#xfHud.is-error{border-color:#b91c1c;background:#fff1f2}#xfHud:not(.is-on) .bcw-hud-spin{animation:none}.xf-dur-chips,.xf-curve-chips{display:flex;flex-wrap:wrap;gap:.4rem}.xf-empty{padding:.75rem 1rem;border:1px dashed var(--border,#ced4da);border-radius:.5rem;color:var(--bs-secondary-color,#6c757d);font-size:.95rem}.site-footer nav.d-inline{display:inline-flex!important;flex-wrap:wrap;justify-content:center;max-width:100%}</style>`;

	/** 客户端交叉淡化管线（读 → 解码 → 尾头重叠 → 写 WAV）。 */
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
    /** 第一轨文件输入。 */
    const aInput = $('xfA');
    /** 第二轨文件输入。 */
    const bInput = $('xfB');
    /** 进度 HUD。 */
    const hud = $('xfHud');
    /** 预览 audio。 */
    const audio = $('xfAudio');
    /** 空状态提示。 */
    const emptyState = $('xfEmpty');
    /** HUD 步骤顺序。 */
    const STEPS = ['read','decode','crossfade','write'];
    /** 单文件体积上限（字节）。 */
    const MAX_BYTES = 40 * 1024 * 1024;
    /** 输出最大时长（秒）。 */
    const MAX_DURATION = 1200;
    /** 当前淡化秒数。 */
    let fadeSec = 2;
    /** 当前曲线：equal | linear。 */
    let curve = 'equal';
    /** 第一轨 File。 */
    let fileA = null;
    /** 第二轨 File。 */
    let fileB = null;
    /** 输出 object URL。 */
    let outputUrl = null;
    /** 是否忙。 */
    let busy = false;
    /** 计时器。 */
    let timer = null;
    /** 开始时间。 */
    let started = 0;
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
    /**
     * 同步芯片选中态。
     * @param {HTMLElement} root 芯片容器
     * @param {string} attr 属性名
     * @param {string} value 选中值
     */
    function syncChips(root, attr, value){
      root.querySelectorAll('[' + attr + ']').forEach(btn => {
        const on = btn.getAttribute(attr) === String(value);
        btn.classList.toggle('btn-primary', on);
        btn.classList.toggle('btn-outline-secondary', !on);
        btn.setAttribute('aria-pressed', on ? 'true' : 'false');
      });
    }
    /** 丢弃旧输出。 */
    function discard(){
      if (outputUrl){ URL.revokeObjectURL(outputUrl); outputUrl = null; }
      audio.removeAttribute('src');
      audio.load();
      $('xfOutput').hidden = true;
      $('xfResult').textContent = '';
      $('xfDownload').disabled = true;
    }
    /**
     * 锁定或解锁控件。
     * @param {boolean} on 是否锁定
     */
    function lock(on){
      busy = on;
      $('xfConvert').disabled = on;
      $('xfSample').disabled = on;
      $('xfClear').disabled = on;
      aInput.disabled = on;
      bInput.disabled = on;
      $('xfFadeChips').querySelectorAll('button').forEach(b => { b.disabled = on; });
      $('xfCurveChips').querySelectorAll('button').forEach(b => { b.disabled = on; });
      if (!on) $('xfDownload').disabled = !outputUrl;
    }
    /**
     * 更新 HUD 百分比与步骤高亮。
     * @param {number} pct 百分比
     * @param {string} stepKey 步骤键或 done
     */
    function progress(pct, stepKey){
      const value = Math.max(0, Math.min(100, Math.round(pct)));
      $('xfPct').textContent = value + '%';
      $('xfBar').style.width = value + '%';
      $('xfBar').setAttribute('aria-valuenow', String(value));
      const label = stepKey === 'done' ? M.done : (M[stepKey] || stepKey);
      $('xfStep').textContent = label;
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
      $('xfPct').textContent = '—';
      $('xfBar').style.width = '0%';
      $('xfBar').setAttribute('aria-valuenow', '0');
      hud.setAttribute('role', 'alert');
      $('xfStep').textContent = M[key] || M.failed;
    }
    /**
     * 是否为浏览器可尝试解码的常见音频。
     * @param {File} file 候选文件
     */
    function isAudio(file){
      return file && (/\\.(wav|mp3|m4a|aac|ogg)$/i.test(file.name) || (file.type && file.type.indexOf('audio/') === 0));
    }
    /** 刷新文件名与空状态。 */
    function renderMeta(){
      $('xfAName').textContent = fileA ? fill(M.a_label, { name: fileA.name }) : '';
      $('xfBName').textContent = fileB ? fill(M.b_label, { name: fileB.name }) : '';
      if (emptyState) emptyState.hidden = !!(fileA && fileB);
    }
    /**
     * 设置第一或第二轨文件。
     * @param {'a'|'b'} which 槽位
     * @param {File|null} file 文件
     */
    function setFile(which, file){
      if (busy) return;
      discard();
      hud.hidden = true;
      if (file){
        if (!isAudio(file)){ fail('err_format'); return; }
        if (file.size > MAX_BYTES){ fail('err_limit'); return; }
      }
      if (which === 'a') fileA = file;
      else fileB = file;
      renderMeta();
    }
    /** 清空双轨与输出。 */
    function clearAll(){
      if (busy) return;
      fileA = null;
      fileB = null;
      aInput.value = '';
      bInput.value = '';
      discard();
      hud.hidden = true;
      renderMeta();
    }
    /**
     * 将 AudioBuffer 重采样到目标采样率并规范为 1–2 声道。
     * @param {AudioBuffer} buffer 源缓冲
     * @param {number} targetRate 目标采样率
     * @param {number} targetCh 目标声道数（1 或 2）
     * @returns {Promise<AudioBuffer>}
     */
    async function alignBuffer(buffer, targetRate, targetCh){
      const ch = Math.min(2, Math.max(1, targetCh));
      const rate = Math.round(targetRate);
      const frames = Math.max(1, Math.ceil(buffer.duration * rate));
      const Offline = window.OfflineAudioContext || window.webkitOfflineAudioContext;
      if (!Offline) throw Error('err_decode');
      const ctx = new Offline(ch, frames, rate);
      const src = ctx.createBufferSource();
      let playBuf = buffer;
      if (buffer.numberOfChannels !== ch || Math.round(buffer.sampleRate) !== rate){
        const tmp = ctx.createBuffer(ch, buffer.length, buffer.sampleRate);
        for (let c = 0; c < ch; c++){
          const srcCh = buffer.getChannelData(Math.min(c, buffer.numberOfChannels - 1));
          tmp.copyToChannel(srcCh, c);
        }
        playBuf = tmp;
      }
      src.buffer = playBuf;
      src.connect(ctx.destination);
      src.start(0);
      return ctx.startRendering();
    }
    /**
     * 将 float 声道写成 16-bit little-endian PCM WAV。
     * @param {Float32Array[]} channels 声道样本
     * @param {number} rate 采样率 Hz
     * @returns {Blob}
     */
    function writeWav(channels, rate){
      const ch = channels.length;
      const frames = channels[0].length;
      const blockAlign = ch * 2;
      const dataBytes = frames * blockAlign;
      const bytes = new ArrayBuffer(44 + dataBytes);
      const view = new DataView(bytes);
      /**
       * 写入 ASCII 标记。
       * @param {number} at 偏移
       * @param {string} text 四字符
       */
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
    /**
     * 合成短纯音 WAV File（样例用）。
     * @param {number} freqHz 频率
     * @param {number} seconds 时长
     * @param {number} amp 振幅
     * @param {string} name 文件名
     * @returns {File}
     */
    function makeToneWav(freqHz, seconds, amp, name){
      const rate = 44100;
      const frames = Math.round(rate * seconds);
      const data = new Float32Array(frames);
      for (let i = 0; i < frames; i++){
        const t = i / rate;
        const env = t < 0.02 ? t / 0.02 : (t > seconds - 0.04 ? Math.max(0, (seconds - t) / 0.04) : 1);
        data[i] = Math.sin(2 * Math.PI * freqHz * t) * amp * env;
      }
      const blob = writeWav([data], rate);
      return new File([blob], name, { type: 'audio/wav' });
    }
    /**
     * 解码单个音频文件。
     * @param {File} file 源文件
     * @returns {Promise<AudioBuffer>}
     */
    async function decodeFile(file){
      const Offline = window.OfflineAudioContext || window.webkitOfflineAudioContext;
      if (!Offline) throw Error('err_decode');
      const bytes = await file.arrayBuffer();
      try {
        return await new Offline(1, 1, 44100).decodeAudioData(bytes.slice(0));
      } catch (e) {
        throw Error('err_decode');
      }
    }
    /**
     * 归一化进度 → 淡出增益（equal-power 用 cos，linear 用 1−g）。
     * @param {number} g 0…1
     * @param {string} mode equal | linear
     */
    function fadeOutGain(g, mode){
      const x = Math.max(0, Math.min(1, g));
      return mode === 'equal' ? Math.cos(x * Math.PI / 2) : (1 - x);
    }
    /**
     * 归一化进度 → 淡入增益（equal-power 用 sin，linear 用 g）。
     * @param {number} g 0…1
     * @param {string} mode equal | linear
     */
    function fadeInGain(g, mode){
      const x = Math.max(0, Math.min(1, g));
      return mode === 'equal' ? Math.sin(x * Math.PI / 2) : x;
    }
    /**
     * 两缓冲尾头交叉淡化。
     * @param {AudioBuffer} bufA 先播
     * @param {AudioBuffer} bufB 后接
     * @param {number} fadeSamples 重叠样本数
     * @param {string} mode 曲线
     * @returns {Float32Array[]}
     */
    function crossfadeBuffers(bufA, bufB, fadeSamples, mode){
      const ch = Math.min(2, Math.max(bufA.numberOfChannels, bufB.numberOfChannels));
      const aLen = bufA.length;
      const bLen = bufB.length;
      const fade = Math.max(1, Math.min(fadeSamples, aLen - 1, bLen - 1));
      const outLen = aLen + bLen - fade;
      const channels = [];
      for (let c = 0; c < ch; c++){
        const aCh = bufA.getChannelData(Math.min(c, bufA.numberOfChannels - 1));
        const bCh = bufB.getChannelData(Math.min(c, bufB.numberOfChannels - 1));
        const out = new Float32Array(outLen);
        for (let i = 0; i < aLen - fade; i++) out[i] = aCh[i];
        for (let i = 0; i < fade; i++){
          const g = fade === 1 ? 1 : i / (fade - 1);
          const a = aCh[aLen - fade + i] * fadeOutGain(g, mode);
          const b = bCh[i] * fadeInGain(g, mode);
          out[aLen - fade + i] = Math.max(-1, Math.min(1, a + b));
        }
        for (let i = fade; i < bLen; i++) out[aLen - fade + i] = bCh[i];
        channels.push(out);
      }
      return channels;
    }
    /** 主交叉淡化：Read → Decode → Crossfade → Write。 */
    async function runCrossfade(){
      if (busy) return;
      if (!fileA || !fileB){ fail('empty'); return; }
      discard();
      lock(true);
      hud.hidden = false;
      hud.className = 'bcw-hud is-on mb-3';
      hud.setAttribute('role', 'status');
      $('xfCurrent').textContent = (fileA.name || 'A') + ' → ' + (fileB.name || 'B');
      started = performance.now();
      const clock = () => {
        $('xfTime').textContent = fill(M.elapsed, { s: ((performance.now() - started) / 1000).toFixed(1) });
      };
      clock();
      timer = setInterval(clock, 100);
      try {
        progress(4, 'read');
        await yieldUi();
        if (!isAudio(fileA) || !isAudio(fileB)) throw Error('err_format');
        if (fileA.size > MAX_BYTES || fileB.size > MAX_BYTES) throw Error('err_limit');
        progress(20, 'decode');
        await yieldUi();
        const bufA = await decodeFile(fileA);
        progress(40, 'decode');
        await yieldUi();
        const bufB = await decodeFile(fileB);
        if (!bufA || !bufA.length || !bufB || !bufB.length) throw Error('err_decode');
        progress(55, 'crossfade');
        await yieldUi();
        const targetRate = Math.round(bufA.sampleRate) || 44100;
        const targetCh = Math.min(2, Math.max(1, Math.max(bufA.numberOfChannels, bufB.numberOfChannels) >= 2 ? 2 : 1));
        const alignedA = await alignBuffer(bufA, targetRate, targetCh);
        const alignedB = await alignBuffer(bufB, targetRate, targetCh);
        const fadeSamples = Math.round(fadeSec * targetRate);
        if (fadeSamples >= alignedA.length || fadeSamples >= alignedB.length) throw Error('err_fade');
        const channels = crossfadeBuffers(alignedA, alignedB, fadeSamples, curve);
        const frames = channels[0].length;
        if (frames / targetRate > MAX_DURATION + 0.01) throw Error('err_limit');
        progress(84, 'write');
        await yieldUi();
        const blob = writeWav(channels, targetRate);
        if (!blob.size) throw Error('err_encoder');
        outputUrl = URL.createObjectURL(blob);
        audio.src = outputUrl;
        $('xfOutput').hidden = false;
        $('xfResult').textContent = fill(M.result, {
          seconds: (frames / targetRate).toFixed(2),
          fade: fadeSec,
          curve: curve === 'equal' ? M.curve_equal : M.curve_linear,
          channels: targetCh,
          rate: targetRate,
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
     * 加载两段短音样例并运行交叉淡化（门禁要求存在 loadSample；不在首屏自动播放）。
     */
    async function loadSample(){
      if (busy) return;
      try {
        const base = M.sample_name || 'crossfade-tone';
        const a = makeToneWav(440, 2.2, 0.26, base + '-a.wav');
        const b = makeToneWav(660, 2.2, 0.26, base + '-b.wav');
        discard();
        hud.hidden = true;
        fileA = a;
        fileB = b;
        aInput.value = '';
        bInput.value = '';
        fadeSec = 1;
        curve = 'equal';
        syncChips($('xfFadeChips'), 'data-sec', fadeSec);
        syncChips($('xfCurveChips'), 'data-curve', curve);
        renderMeta();
        await runCrossfade();
      } catch (e) {
        clearAll();
        fail(e && M[e.message] ? e.message : 'failed');
      }
    }
    aInput.addEventListener('change', () => setFile('a', aInput.files && aInput.files[0]));
    bInput.addEventListener('change', () => setFile('b', bInput.files && bInput.files[0]));
    $('xfADrop').addEventListener('dragover', event => event.preventDefault());
    $('xfADrop').addEventListener('drop', event => {
      event.preventDefault();
      if (busy) return;
      const files = event.dataTransfer && event.dataTransfer.files;
      if (files && files[0]) setFile('a', files[0]);
    });
    $('xfBDrop').addEventListener('dragover', event => event.preventDefault());
    $('xfBDrop').addEventListener('drop', event => {
      event.preventDefault();
      if (busy) return;
      const files = event.dataTransfer && event.dataTransfer.files;
      if (files && files[0]) setFile('b', files[0]);
    });
    $('xfFadeChips').addEventListener('click', event => {
      const btn = event.target.closest('[data-sec]');
      if (!btn || busy) return;
      fadeSec = Number(btn.getAttribute('data-sec')) || 2;
      syncChips($('xfFadeChips'), 'data-sec', fadeSec);
      discard();
    });
    $('xfCurveChips').addEventListener('click', event => {
      const btn = event.target.closest('[data-curve]');
      if (!btn || busy) return;
      curve = btn.getAttribute('data-curve') === 'linear' ? 'linear' : 'equal';
      syncChips($('xfCurveChips'), 'data-curve', curve);
      discard();
    });
    $('xfConvert').addEventListener('click', runCrossfade);
    $('xfSample').addEventListener('click', loadSample);
    $('xfClear').addEventListener('click', clearAll);
    $('xfDownload').addEventListener('click', () => {
      if (!outputUrl || busy) return;
      const link = document.createElement('a');
      link.href = outputUrl;
      link.download = 'crossfade.wav';
      document.body.appendChild(link);
      link.click();
      link.remove();
    });
    window.addEventListener('pagehide', () => {
      clearInterval(timer);
      if (outputUrl) URL.revokeObjectURL(outputUrl);
    });
    syncChips($('xfFadeChips'), 'data-sec', fadeSec);
    syncChips($('xfCurveChips'), 'data-curve', curve);
    renderMeta();
  })();
</script>`;

	/** catalog 元数据（related / schema）。 */
	const toolMeta = getToolBySlug('crossfade-two-audio-files');
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
