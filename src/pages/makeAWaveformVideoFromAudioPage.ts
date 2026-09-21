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
const P = 'tool_make_a_waveform_video_from_audio';

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
 * 从本地音频制作唱片式波形视频并下载（A5）。
 * 管线：读音频 → decodeAudioData → 峰值下采样 → canvas 动画波形 + MediaStreamDestination → MediaRecorder（多为 WebM）。
 * ≠ 抽音（A1）；≠ 单点裁剪（S1）；≠ YouTube；诚实重编码 / WebM 限制。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderMakeAWaveformVideoFromAudioPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 工具规范路径（无语言前缀）。 */
	const toolPath = '/tools/make-a-waveform-video-from-audio';
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

	/** 侧栏占位。 */
	const sidebarHtml = renderSidebar({
		title: t(opts.lang, 'nav_tools'),
		groups: buildToolSidebarItems({
			lang: opts.lang,
			defaultLang: opts.defaultLang,
			currentSlug: 'make-a-waveform-video-from-audio',
			currentAnchor: '#waveform-video',
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

	/** 内联脚本用的 UI 消息键。 */
	const uiKeys = [
		'read',
		'decode',
		'draw',
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
		'file_label',
	];
	/** 消息字典：键 → 当前语言字符串。 */
	const messages = Object.fromEntries(uiKeys.map((key) => [key, t(opts.lang, `${P}_${key}`)]));

	/** 工具主面板与结果区 markup。 */
	const contentHtml = `
    <div id="waveform-video" class="tool-page-heading mb-3"><h1 class="h4">${tr('title')}</h1><p>${tr('desc')}</p></div>
    <section class="tool-panel" id="wvPanel">
      <label class="tool-dropzone mb-3" id="wvDrop" for="wvAudio"><input id="wvAudio" type="file" accept="audio/*,.wav,.mp3,.m4a,.aac,.ogg,.flac,audio/wav,audio/mpeg,audio/mp4,audio/ogg"><span class="tool-dropzone-title">${tr('choose')}</span><span class="tool-dropzone-hint">${tr('hint')}</span><span id="wvFileName" class="tool-dropzone-file"></span></label>
      <div class="tools-bar d-flex flex-wrap mb-3" style="gap:.5rem">
        <button id="wvConvert" class="btn btn-primary" type="button">${tr('convert')}</button>
        <button id="wvDownload" class="btn btn-outline-primary" type="button" disabled>${tr('download')}</button>
        <button id="wvSample" class="btn btn-outline-secondary" type="button">${tr('sample')}</button>
        <button id="wvClear" class="btn btn-outline-secondary" type="button">${tr('clear')}</button>
      </div>
      <details class="mb-3" open><summary>${tr('advanced')}</summary>
        <p class="form-text mt-2">${tr('settings_hint')}</p>
      </details>
      <div id="wvHud" class="bcw-hud mb-3" role="status" aria-live="polite" hidden>
        <div class="bcw-hud-top"><div class="bcw-hud-spin" aria-hidden="true"></div><div class="bcw-hud-pct" id="wvPct">0%</div><div class="bcw-hud-copy"><div class="bcw-hud-title">${tr('progress')}</div><div class="bcw-hud-step" id="wvStep"></div><div class="bcw-hud-time" id="wvTime"></div></div></div>
        <div class="progress" style="height:1.35rem"><div id="wvBar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div><span class="bcw-hud-sheen" aria-hidden="true"></span></div>
        <ol class="bcw-hud-steps"><li data-step="read">${tr('read')}</li><li data-step="decode">${tr('decode')}</li><li data-step="draw">${tr('draw')}</li><li data-step="write">${tr('write')}</li></ol><div class="bcw-hud-url" id="wvCurrent"></div>
      </div>
      <div id="wvEmpty" class="wv-empty mb-3" role="status">${tr('empty_state')}</div>
      <div id="wvOutput" hidden><h2 class="h5">${tr('preview')}</h2><p id="wvResult"></p><video id="wvPreview" controls preload="metadata" playsinline style="max-width:100%" aria-label="${tr('preview')}"></video></div>
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
				label: 'MDN: HTMLCanvasElement.captureStream',
				href: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/captureStream',
			},
			{
				label: 'MDN: MediaRecorder',
				href: 'https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder',
			},
			{
				label: 'MDN: AudioContext.decodeAudioData',
				href: 'https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/decodeAudioData',
			},
		],
	});

	/** 金标 HUD 与布局补充样式。 */
	const extraHeadHtml = `<style>${bcwHudCss({ hudId: 'wvHud', convertBtnId: 'wvConvert' })}#wvHud.is-error{border-color:#b91c1c;background:#fff1f2}#wvHud:not(.is-on) .bcw-hud-spin{animation:none}.wv-empty{padding:.75rem 1rem;border:1px dashed var(--border,#ced4da);border-radius:.5rem;color:var(--bs-secondary-color,#6c757d);font-size:.95rem}.site-footer nav.d-inline{display:inline-flex!important;flex-wrap:wrap;justify-content:center;max-width:100%}</style>`;

	/** 客户端波形视频管线（读 → 解码 → 绘制 → 写）。 */
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
    /** 音频文件输入。 */
    const audioInput = $('wvAudio');
    /** 进度 HUD。 */
    const hud = $('wvHud');
    /** 预览 video。 */
    const preview = $('wvPreview');
    /** 空状态提示。 */
    const emptyState = $('wvEmpty');
    /** HUD 步骤顺序。 */
    const STEPS = ['read','decode','draw','write'];
    /** 音频体积上限（字节）。 */
    const MAX_BYTES = 40 * 1024 * 1024;
    /** 最大音频时长（秒）。 */
    const MAX_DURATION = 180;
    /** 画布宽度。 */
    const CANVAS_W = 960;
    /** 画布高度。 */
    const CANVAS_H = 540;
    /** 波形柱数量。 */
    const BAR_COUNT = 96;
    /** 录制帧率提示。 */
    const CAPTURE_FPS = 30;
    /** 当前音频 File。 */
    let audioFile = null;
    /** 输出 object URL。 */
    let outputUrl = null;
    /** 输出 MIME。 */
    let outMime = 'video/webm';
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
    /** 让出主线程一帧。 */
    function yieldUi(){
      return new Promise(resolve => requestAnimationFrame(() => resolve()));
    }
    /** 丢弃输出预览。 */
    function discardOut(){
      if (outputUrl){ URL.revokeObjectURL(outputUrl); outputUrl = null; }
      preview.removeAttribute('src');
      preview.load();
      $('wvOutput').hidden = true;
      $('wvResult').textContent = '';
      $('wvDownload').disabled = true;
    }
    /** 刷新空状态可见性。 */
    function refreshEmpty(){
      if (emptyState) emptyState.hidden = !!audioFile;
    }
    /**
     * 锁定或解锁控件。
     * @param {boolean} on 是否锁定
     */
    function lock(on){
      busy = on;
      $('wvConvert').disabled = on;
      $('wvSample').disabled = on;
      $('wvClear').disabled = on;
      audioInput.disabled = on;
      if (!on) $('wvDownload').disabled = !outputUrl;
    }
    /**
     * 更新 HUD。
     * @param {number} pct 百分比
     * @param {string} stepKey 步骤键
     */
    function progress(pct, stepKey){
      const value = Math.max(0, Math.min(100, Math.round(pct)));
      $('wvPct').textContent = value + '%';
      $('wvBar').style.width = value + '%';
      $('wvBar').setAttribute('aria-valuenow', String(value));
      const label = stepKey === 'done' ? M.done : (M[stepKey] || stepKey);
      $('wvStep').textContent = label;
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
      $('wvPct').textContent = '—';
      $('wvBar').style.width = '0%';
      $('wvBar').setAttribute('aria-valuenow', '0');
      hud.setAttribute('role', 'alert');
      $('wvStep').textContent = M[key] || M.failed;
    }
    /**
     * 是否为可尝试的本地音频。
     * @param {File} file 候选
     */
    function isAudio(file){
      if (!file) return false;
      if (/\\.(wav|mp3|m4a|aac|ogg|flac|opus)$/i.test(file.name)) return true;
      return !!(file.type && file.type.indexOf('audio/') === 0);
    }
    /**
     * 选择音频。
     * @param {File|null} file 文件
     */
    function chooseAudio(file){
      if (busy) return;
      discardOut();
      hud.hidden = true;
      audioFile = null;
      audioInput.value = '';
      if (!file){
        $('wvFileName').textContent = '';
        refreshEmpty();
        return;
      }
      if (!isAudio(file)){ fail('err_format'); refreshEmpty(); return; }
      if (file.size > MAX_BYTES){ fail('err_limit'); refreshEmpty(); return; }
      audioFile = file;
      $('wvFileName').textContent = fill(M.file_label, { name: file.name });
      refreshEmpty();
    }
    /**
     * 选择 MediaRecorder 支持的含音频视频 MIME。
     * @returns {string}
     */
    function pickMime(){
      const candidates = [
        'video/webm;codecs=vp9,opus',
        'video/webm;codecs=vp8,opus',
        'video/webm;codecs=vp9',
        'video/webm;codecs=vp8',
        'video/webm',
        'video/mp4'
      ];
      if (typeof MediaRecorder === 'undefined' || !MediaRecorder.isTypeSupported) return '';
      return candidates.find(m => MediaRecorder.isTypeSupported(m)) || '';
    }
    /**
     * 从 AudioBuffer 下采样为柱状峰值（0..1）。
     * @param {AudioBuffer} buffer 解码缓冲
     * @param {number} bars 柱数
     * @returns {Float32Array}
     */
    function buildPeaks(buffer, bars){
      /** 合并声道的采样数。 */
      const total = buffer.length;
      /** 输出峰值数组。 */
      const peaks = new Float32Array(bars);
      /** 每柱覆盖的采样数。 */
      const block = Math.max(1, Math.floor(total / bars));
      /** 声道数。 */
      const ch = buffer.numberOfChannels;
      for (let b = 0; b < bars; b++){
        let peak = 0;
        const start = b * block;
        const end = Math.min(total, start + block);
        for (let c = 0; c < ch; c++){
          const data = buffer.getChannelData(c);
          for (let i = start; i < end; i++){
            const v = Math.abs(data[i]);
            if (v > peak) peak = v;
          }
        }
        peaks[b] = peak;
      }
      /** 归一化到最大柱为 1。 */
      let max = 0;
      for (let i = 0; i < bars; i++) if (peaks[i] > max) max = peaks[i];
      if (max > 0){
        for (let i = 0; i < bars; i++) peaks[i] = peaks[i] / max;
      }
      return peaks;
    }
    /**
     * 在 2D 上下文上绘制某一时刻的波形帧。
     * @param {CanvasRenderingContext2D} ctx 上下文
     * @param {Float32Array} peaks 峰值
     * @param {number} t 当前时间（秒）
     * @param {number} duration 总时长（秒）
     */
    function drawFrame(ctx, peaks, t, duration){
      const w = CANVAS_W;
      const h = CANVAS_H;
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(0, 0, w, h);
      /** 顶部淡渐变。 */
      const grad = ctx.createLinearGradient(0, 0, 0, h);
      grad.addColorStop(0, '#0f172a');
      grad.addColorStop(1, '#1e293b');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);
      const midY = h * 0.52;
      const maxBarH = h * 0.34;
      const gap = 3;
      const barW = (w - 80 - (peaks.length - 1) * gap) / peaks.length;
      const playFrac = duration > 0 ? Math.min(1, Math.max(0, t / duration)) : 0;
      const playIdx = Math.floor(playFrac * peaks.length);
      for (let i = 0; i < peaks.length; i++){
        const amp = Math.max(0.04, peaks[i]);
        const bh = amp * maxBarH;
        const x = 40 + i * (barW + gap);
        const y = midY - bh;
        ctx.fillStyle = i <= playIdx ? '#38bdf8' : '#334155';
        ctx.fillRect(x, y, Math.max(1, barW), bh * 2);
      }
      /** 播放头竖线。 */
      const px = 40 + playFrac * (w - 80);
      ctx.strokeStyle = '#f8fafc';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(px, midY - maxBarH - 12);
      ctx.lineTo(px, midY + maxBarH + 12);
      ctx.stroke();
      ctx.fillStyle = '#94a3b8';
      ctx.font = '20px system-ui,sans-serif';
      ctx.fillText((t).toFixed(1) + ' / ' + duration.toFixed(1) + ' s', 40, 40);
    }
    /**
     * 用 AudioContext 解码音频文件。
     * @param {File} file 音频
     * @returns {Promise<{ac: AudioContext, buffer: AudioBuffer}>}
     */
    async function decodeAudio(file){
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) throw Error('err_encoder');
      const ac = new AC();
      try {
        const buf = await file.arrayBuffer();
        const audioBuf = await ac.decodeAudioData(buf.slice(0));
        return { ac: ac, buffer: audioBuf };
      } catch (_) {
        try { await ac.close(); } catch (__) {}
        throw Error('err_decode');
      }
    }
    /**
     * 录制波形视频。
     * @param {File} file 音频
     * @returns {Promise<{blob: Blob, seconds: number, mime: string}>}
     */
    function recordWaveformVideo(file){
      return new Promise(async (resolve, reject) => {
        if (typeof MediaRecorder === 'undefined' || !HTMLCanvasElement.prototype.captureStream){
          reject(Error('err_encoder'));
          return;
        }
        const mime = pickMime();
        if (!mime){ reject(Error('err_encoder')); return; }
        progress(18, 'decode');
        await yieldUi();
        let decoded;
        try {
          decoded = await decodeAudio(file);
        } catch (e) {
          reject(e);
          return;
        }
        const { ac, buffer } = decoded;
        const duration = buffer.duration;
        if (!Number.isFinite(duration) || duration <= 0){
          try { await ac.close(); } catch (_) {}
          reject(Error('err_decode'));
          return;
        }
        if (duration > MAX_DURATION + 0.05){
          try { await ac.close(); } catch (_) {}
          reject(Error('err_limit'));
          return;
        }
        progress(35, 'draw');
        await yieldUi();
        /** 峰值柱。 */
        const peaks = buildPeaks(buffer, BAR_COUNT);
        /** 离屏画布。 */
        const canvas = document.createElement('canvas');
        canvas.width = CANVAS_W;
        canvas.height = CANVAS_H;
        const ctx = canvas.getContext('2d');
        if (!ctx){
          try { await ac.close(); } catch (_) {}
          reject(Error('err_encoder'));
          return;
        }
        drawFrame(ctx, peaks, 0, duration);
        /** 画布视频轨。 */
        let videoStream;
        try {
          videoStream = canvas.captureStream(CAPTURE_FPS);
        } catch (_) {
          try { await ac.close(); } catch (__) {}
          reject(Error('err_encoder'));
          return;
        }
        if (!videoStream.getVideoTracks().length){
          try { await ac.close(); } catch (_) {}
          reject(Error('err_encoder'));
          return;
        }
        /** 音频目的地。 */
        const dest = ac.createMediaStreamDestination();
        const src = ac.createBufferSource();
        src.buffer = buffer;
        const gain = ac.createGain();
        gain.gain.value = 0.95;
        src.connect(gain);
        gain.connect(dest);
        const combined = new MediaStream([
          ...videoStream.getVideoTracks(),
          ...dest.stream.getAudioTracks()
        ]);
        progress(45, 'draw');
        await yieldUi();
        const chunks = [];
        let rec;
        try {
          rec = new MediaRecorder(combined, { mimeType: mime });
        } catch (_) {
          combined.getTracks().forEach(t => { try { t.stop(); } catch (__) {} });
          try { await ac.close(); } catch (__) {}
          reject(Error('err_encoder'));
          return;
        }
        /** 动画开始时间戳。 */
        let animStart = 0;
        /** rAF 句柄。 */
        let raf = 0;
        /**
         * 每帧重绘波形。
         * @param {number} now 性能时钟
         */
        function tick(now){
          if (!animStart) animStart = now;
          const t = Math.min(duration, (now - animStart) / 1000);
          drawFrame(ctx, peaks, t, duration);
          if (t < duration && busy){
            raf = requestAnimationFrame(tick);
          }
        }
        rec.ondataavailable = ev => { if (ev.data && ev.data.size) chunks.push(ev.data); };
        rec.onerror = () => {
          cancelAnimationFrame(raf);
          combined.getTracks().forEach(t => { try { t.stop(); } catch (_) {} });
          try { ac.close(); } catch (_) {}
          reject(Error('err_encoder'));
        };
        rec.onstop = () => {
          cancelAnimationFrame(raf);
          combined.getTracks().forEach(t => { try { t.stop(); } catch (_) {} });
          videoStream.getTracks().forEach(t => { try { t.stop(); } catch (_) {} });
          try { ac.close(); } catch (_) {}
          const blob = new Blob(chunks, { type: mime.split(';')[0] || 'video/webm' });
          if (!blob.size){ reject(Error('err_encoder')); return; }
          resolve({ blob: blob, seconds: duration, mime: blob.type || mime });
        };
        try {
          if (ac.state === 'suspended') await ac.resume();
          src.start(0);
          raf = requestAnimationFrame(tick);
          rec.start(200);
        } catch (_) {
          cancelAnimationFrame(raf);
          combined.getTracks().forEach(t => { try { t.stop(); } catch (__) {} });
          try { await ac.close(); } catch (__) {}
          reject(Error('err_decode'));
          return;
        }
        const stopAt = Math.max(250, Math.ceil(duration * 1000) + 320);
        const hudTick = setInterval(() => {
          if (!busy){ clearInterval(hudTick); return; }
          const elapsed = animStart ? Math.min(duration, (performance.now() - animStart) / 1000) : 0;
          const pct = 45 + Math.min(40, (elapsed / duration) * 40);
          progress(pct, 'draw');
        }, 200);
        setTimeout(() => {
          clearInterval(hudTick);
          try { src.stop(); } catch (_) {}
          try { if (rec.state !== 'inactive') rec.stop(); } catch (_) { reject(Error('err_encoder')); }
        }, stopAt);
      });
    }
    /** 主流程：Read → Decode → Draw → Write。 */
    async function makeVideo(){
      if (busy) return;
      if (!audioFile){ fail('empty'); return; }
      discardOut();
      lock(true);
      hud.hidden = false;
      hud.className = 'bcw-hud is-on mb-3';
      hud.setAttribute('role', 'status');
      $('wvCurrent').textContent = audioFile.name || '';
      started = performance.now();
      const clock = () => {
        $('wvTime').textContent = fill(M.elapsed, { s: ((performance.now() - started) / 1000).toFixed(1) });
      };
      clock();
      timer = setInterval(clock, 100);
      try {
        progress(6, 'read');
        await yieldUi();
        if (!isAudio(audioFile)) throw Error('err_format');
        if (audioFile.size > MAX_BYTES) throw Error('err_limit');
        const result = await recordWaveformVideo(audioFile);
        progress(90, 'write');
        await yieldUi();
        outMime = result.mime || 'video/webm';
        outputUrl = URL.createObjectURL(result.blob);
        preview.src = outputUrl;
        $('wvOutput').hidden = false;
        $('wvResult').textContent = fill(M.result, {
          seconds: result.seconds.toFixed(2),
          mime: outMime,
          output: (result.blob.size / 1024).toFixed(1)
        });
        progress(100, 'done');
        hud.classList.remove('is-on');
        hud.classList.add('is-done');
        if (emptyState) emptyState.hidden = true;
      } catch (e) {
        discardOut();
        fail(e && M[e.message] ? e.message : 'failed');
      } finally {
        clearInterval(timer);
        clock();
        lock(false);
      }
    }
    /**
     * 合成短正弦 WAV 样例。
     * @returns {File}
     */
    function makeSampleWav(){
      const RATE = 44100;
      const seconds = 1.6;
      const frames = Math.round(RATE * seconds);
      const data = new Float32Array(frames);
      for (let i = 0; i < frames; i++){
        const t = i / RATE;
        const env = Math.min(1, t * 8) * Math.min(1, (seconds - t) * 6);
        data[i] = Math.sin(2 * Math.PI * 440 * t) * 0.22 * env
          + Math.sin(2 * Math.PI * 660 * t) * 0.08 * env;
      }
      const bytes = new ArrayBuffer(44 + frames * 2);
      const view = new DataView(bytes);
      /**
       * 写入 ASCII。
       * @param {number} at 偏移
       * @param {string} text 文本
       */
      const put = (at, text) => { for (let i = 0; i < text.length; i++) view.setUint8(at + i, text.charCodeAt(i)); };
      put(0, 'RIFF');
      view.setUint32(4, bytes.byteLength - 8, true);
      put(8, 'WAVE');
      put(12, 'fmt ');
      view.setUint32(16, 16, true);
      view.setUint16(20, 1, true);
      view.setUint16(22, 1, true);
      view.setUint32(24, RATE, true);
      view.setUint32(28, RATE * 2, true);
      view.setUint16(32, 2, true);
      view.setUint16(34, 16, true);
      put(36, 'data');
      view.setUint32(40, frames * 2, true);
      let at = 44;
      for (let i = 0; i < frames; i++){
        const s = Math.max(-1, Math.min(1, data[i]));
        view.setInt16(at, Math.round(s * (s < 0 ? 32768 : 32767)), true);
        at += 2;
      }
      return new File([bytes], (M.sample_name || 'waveform-video-sample') + '.wav', { type: 'audio/wav' });
    }
    /**
     * 加载样例并运行制作（门禁要求存在 loadSample）。
     */
    async function loadSample(){
      if (busy) return;
      try {
        chooseAudio(makeSampleWav());
        await makeVideo();
      } catch (e) {
        chooseAudio(null);
        fail(e && M[e.message] ? e.message : 'failed');
      }
    }
    /** 清空选择。 */
    function clearAll(){
      if (busy) return;
      chooseAudio(null);
      hud.hidden = true;
    }
    audioInput.addEventListener('change', () => chooseAudio(audioInput.files && audioInput.files[0]));
    $('wvDrop').addEventListener('dragover', event => event.preventDefault());
    $('wvDrop').addEventListener('drop', event => {
      event.preventDefault();
      if (busy) return;
      const files = event.dataTransfer && event.dataTransfer.files;
      if (!files || files.length !== 1){ chooseAudio(null); fail('err_file'); return; }
      chooseAudio(files[0]);
    });
    $('wvConvert').addEventListener('click', makeVideo);
    $('wvSample').addEventListener('click', loadSample);
    $('wvClear').addEventListener('click', clearAll);
    $('wvDownload').addEventListener('click', () => {
      if (!outputUrl || busy) return;
      const ext = (outMime.indexOf('mp4') >= 0) ? 'mp4' : 'webm';
      const link = document.createElement('a');
      link.href = outputUrl;
      link.download = (audioFile && audioFile.name ? audioFile.name.replace(/\\.[^.]+$/, '') : 'waveform') + '-waveform.' + ext;
      document.body.appendChild(link);
      link.click();
      link.remove();
    });
    window.addEventListener('pagehide', () => {
      clearInterval(timer);
      discardOut();
    });
  })();
</script>`;

	/** catalog 元数据。 */
	const toolMeta = getToolBySlug('make-a-waveform-video-from-audio');
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
