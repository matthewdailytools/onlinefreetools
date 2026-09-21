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
const P = 'tool_remove_the_audio_track_from_a_video';

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
 * 从本地视频去掉音轨并下载静音成片（F7 V1）。
 * 管线：读视频 → captureStream 仅视频轨 → MediaRecorder 重编码 → 下载（多为 WebM）。
 * ≠ 视频抽音（A1）；≠ YouTube/URL 代抓；诚实写浏览器重编码限制。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderRemoveTheAudioTrackFromAVideoPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 工具规范路径（无语言前缀）。 */
	const toolPath = '/tools/remove-the-audio-track-from-a-video';
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
			currentSlug: 'remove-the-audio-track-from-a-video',
			currentAnchor: '#remove-audio',
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
		'capture',
		'record',
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
    <div id="remove-audio" class="tool-page-heading mb-3"><h1 class="h4">${tr('title')}</h1><p>${tr('desc')}</p></div>
    <section class="tool-panel" id="raPanel">
      <label class="tool-dropzone mb-3" id="raDrop" for="raFile"><input id="raFile" type="file" accept="video/*,.mp4,.webm,.mov,.m4v,video/mp4,video/webm,video/quicktime"><span class="tool-dropzone-title">${tr('choose')}</span><span class="tool-dropzone-hint">${tr('hint')}</span><span id="raName" class="tool-dropzone-file"></span></label>
      <div class="tools-bar d-flex flex-wrap mb-3" style="gap:.5rem">
        <button id="raConvert" class="btn btn-primary" type="button">${tr('convert')}</button>
        <button id="raDownload" class="btn btn-outline-primary" type="button" disabled>${tr('download')}</button>
        <button id="raSample" class="btn btn-outline-secondary" type="button">${tr('sample')}</button>
        <button id="raClear" class="btn btn-outline-secondary" type="button">${tr('clear')}</button>
      </div>
      <details class="mb-3" open><summary>${tr('advanced')}</summary>
        <p class="form-text mt-2">${tr('settings_hint')}</p>
      </details>
      <div id="raHud" class="bcw-hud mb-3" role="status" aria-live="polite" hidden>
        <div class="bcw-hud-top"><div class="bcw-hud-spin" aria-hidden="true"></div><div class="bcw-hud-pct" id="raPct">0%</div><div class="bcw-hud-copy"><div class="bcw-hud-title">${tr('progress')}</div><div class="bcw-hud-step" id="raStep"></div><div class="bcw-hud-time" id="raTime"></div></div></div>
        <div class="progress" style="height:1.35rem"><div id="raBar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div><span class="bcw-hud-sheen" aria-hidden="true"></span></div>
        <ol class="bcw-hud-steps"><li data-step="read">${tr('read')}</li><li data-step="capture">${tr('capture')}</li><li data-step="record">${tr('record')}</li><li data-step="write">${tr('write')}</li></ol><div class="bcw-hud-url" id="raCurrent"></div>
      </div>
      <div id="raEmpty" class="ra-empty mb-3" role="status">${tr('empty_state')}</div>
      <div id="raOutput" hidden><h2 class="h5">${tr('preview')}</h2><p id="raResult"></p><video id="raVideo" controls preload="metadata" playsinline style="max-width:100%" aria-label="${tr('preview')}"></video></div>
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
				label: 'MDN: HTMLMediaElement.captureStream',
				href: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/captureStream',
			},
			{
				label: 'MDN: MediaRecorder',
				href: 'https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder',
			},
		],
	});

	/** 金标 HUD 与布局补充样式。 */
	const extraHeadHtml = `<style>${bcwHudCss({ hudId: 'raHud', convertBtnId: 'raConvert' })}#raHud.is-error{border-color:#b91c1c;background:#fff1f2}#raHud:not(.is-on) .bcw-hud-spin{animation:none}.ra-empty{padding:.75rem 1rem;border:1px dashed var(--border,#ced4da);border-radius:.5rem;color:var(--bs-secondary-color,#6c757d);font-size:.95rem}.site-footer nav.d-inline{display:inline-flex!important;flex-wrap:wrap;justify-content:center;max-width:100%}</style>`;

	/** 客户端去音轨管线（读 → capture 无音轨 → MediaRecorder → 写）。 */
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
    /** 视频文件输入。 */
    const fileInput = $('raFile');
    /** 进度 HUD。 */
    const hud = $('raHud');
    /** 预览 video。 */
    const preview = $('raVideo');
    /** 空状态提示。 */
    const emptyState = $('raEmpty');
    /** HUD 步骤顺序。 */
    const STEPS = ['read','capture','record','write'];
    /** 单文件体积上限（字节）。 */
    const MAX_BYTES = 80 * 1024 * 1024;
    /** 最大时长（秒）。 */
    const MAX_DURATION = 180;
    /** 当前源 File。 */
    let selected = null;
    /** 源 object URL（预加载用）。 */
    let sourceUrl = null;
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
      $('raOutput').hidden = true;
      $('raResult').textContent = '';
      $('raDownload').disabled = true;
    }
    /** 丢弃源 URL。 */
    function discardSource(){
      if (sourceUrl){ URL.revokeObjectURL(sourceUrl); sourceUrl = null; }
    }
    /**
     * 锁定或解锁控件。
     * @param {boolean} on 是否锁定
     */
    function lock(on){
      busy = on;
      $('raConvert').disabled = on;
      $('raSample').disabled = on;
      $('raClear').disabled = on;
      fileInput.disabled = on;
      if (!on) $('raDownload').disabled = !outputUrl;
    }
    /**
     * 更新 HUD。
     * @param {number} pct 百分比
     * @param {string} stepKey 步骤键
     */
    function progress(pct, stepKey){
      const value = Math.max(0, Math.min(100, Math.round(pct)));
      $('raPct').textContent = value + '%';
      $('raBar').style.width = value + '%';
      $('raBar').setAttribute('aria-valuenow', String(value));
      const label = stepKey === 'done' ? M.done : (M[stepKey] || stepKey);
      $('raStep').textContent = label;
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
      $('raPct').textContent = '—';
      $('raBar').style.width = '0%';
      $('raBar').setAttribute('aria-valuenow', '0');
      hud.setAttribute('role', 'alert');
      $('raStep').textContent = M[key] || M.failed;
    }
    /**
     * 是否为可尝试的本地视频。
     * @param {File} file 候选
     */
    function isVideo(file){
      if (!file) return false;
      if (/\\.(mp4|webm|mov|m4v)$/i.test(file.name)) return true;
      return !!(file.type && file.type.indexOf('video/') === 0);
    }
    /**
     * 选择源文件。
     * @param {File|null} file 文件
     */
    function choose(file){
      if (busy) return;
      discardOut();
      discardSource();
      hud.hidden = true;
      selected = null;
      fileInput.value = '';
      if (!file){
        $('raName').textContent = '';
        if (emptyState) emptyState.hidden = false;
        return;
      }
      if (!isVideo(file)){ fail('err_format'); if (emptyState) emptyState.hidden = false; return; }
      if (file.size > MAX_BYTES){ fail('err_limit'); if (emptyState) emptyState.hidden = false; return; }
      selected = file;
      $('raName').textContent = fill(M.file_label, { name: file.name });
      if (emptyState) emptyState.hidden = true;
    }
    /**
     * 等待 video 元数据就绪。
     * @param {HTMLVideoElement} el 元素
     * @returns {Promise<void>}
     */
    function waitMeta(el){
      return new Promise((resolve, reject) => {
        if (el.readyState >= 1 && Number.isFinite(el.duration) && el.duration > 0){ resolve(); return; }
        const onOk = () => { cleanup(); resolve(); };
        const onErr = () => { cleanup(); reject(Error('err_decode')); };
        /**
         * 移除监听。
         */
        const cleanup = () => {
          el.removeEventListener('loadedmetadata', onOk);
          el.removeEventListener('error', onErr);
        };
        el.addEventListener('loadedmetadata', onOk);
        el.addEventListener('error', onErr);
      });
    }
    /**
     * 选择 MediaRecorder 支持的视频 MIME。
     * @returns {string}
     */
    function pickMime(){
      const candidates = [
        'video/webm;codecs=vp9',
        'video/webm;codecs=vp8',
        'video/webm',
        'video/mp4'
      ];
      if (typeof MediaRecorder === 'undefined' || !MediaRecorder.isTypeSupported) return '';
      return candidates.find(m => MediaRecorder.isTypeSupported(m)) || '';
    }
    /**
     * 从 video 捕获仅含视频轨的流并用 MediaRecorder 录制静音成片。
     * @param {File} file 源文件
     * @returns {Promise<{blob: Blob, seconds: number, mime: string}>}
     */
    function muteVideo(file){
      return new Promise(async (resolve, reject) => {
        if (typeof MediaRecorder === 'undefined'){ reject(Error('err_encoder')); return; }
        const mime = pickMime();
        if (!mime){ reject(Error('err_encoder')); return; }
        const el = document.createElement('video');
        el.muted = true;
        el.playsInline = true;
        el.preload = 'auto';
        discardSource();
        sourceUrl = URL.createObjectURL(file);
        el.src = sourceUrl;
        try {
          await waitMeta(el);
        } catch (e) {
          reject(Error('err_decode'));
          return;
        }
        const duration = el.duration;
        if (!Number.isFinite(duration) || duration <= 0){ reject(Error('err_decode')); return; }
        if (duration > MAX_DURATION + 0.05){ reject(Error('err_limit')); return; }
        progress(28, 'capture');
        await yieldUi();
        /** @type {MediaStream|null} */
        let stream = null;
        try {
          if (typeof el.captureStream === 'function') stream = el.captureStream();
          else if (typeof el.mozCaptureStream === 'function') stream = el.mozCaptureStream();
        } catch (_) {
          stream = null;
        }
        if (!stream || !stream.getVideoTracks().length){
          reject(Error('err_encoder'));
          return;
        }
        /** 丢弃音轨，只保留画面。 */
        stream.getAudioTracks().forEach(track => {
          try { track.stop(); } catch (_) {}
          try { stream.removeTrack(track); } catch (_) {}
        });
        const videoOnly = new MediaStream(stream.getVideoTracks());
        progress(40, 'record');
        await yieldUi();
        const chunks = [];
        let rec;
        try {
          rec = new MediaRecorder(videoOnly, { mimeType: mime });
        } catch (_) {
          videoOnly.getTracks().forEach(t => t.stop());
          reject(Error('err_encoder'));
          return;
        }
        rec.ondataavailable = ev => { if (ev.data && ev.data.size) chunks.push(ev.data); };
        rec.onerror = () => {
          videoOnly.getTracks().forEach(t => t.stop());
          reject(Error('err_encoder'));
        };
        rec.onstop = () => {
          videoOnly.getTracks().forEach(t => t.stop());
          stream.getTracks().forEach(t => { try { t.stop(); } catch (_) {} });
          const blob = new Blob(chunks, { type: mime.split(';')[0] || 'video/webm' });
          if (!blob.size){ reject(Error('err_encoder')); return; }
          resolve({ blob: blob, seconds: duration, mime: blob.type || mime });
        };
        try {
          el.currentTime = 0;
          await el.play();
        } catch (_) {
          videoOnly.getTracks().forEach(t => t.stop());
          reject(Error('err_decode'));
          return;
        }
        rec.start(200);
        const stopAt = Math.max(200, Math.ceil(duration * 1000) + 250);
        const tick = setInterval(() => {
          if (!busy){ clearInterval(tick); return; }
          const pct = 40 + Math.min(45, (el.currentTime / duration) * 45);
          progress(pct, 'record');
        }, 200);
        setTimeout(() => {
          clearInterval(tick);
          try { el.pause(); } catch (_) {}
          try { if (rec.state !== 'inactive') rec.stop(); } catch (_) { reject(Error('err_encoder')); }
        }, stopAt);
      });
    }
    /** 主流程：Read → Capture → Record → Write。 */
    async function removeAudio(){
      if (busy) return;
      if (!selected){ fail('empty'); return; }
      discardOut();
      lock(true);
      hud.hidden = false;
      hud.className = 'bcw-hud is-on mb-3';
      hud.setAttribute('role', 'status');
      $('raCurrent').textContent = selected.name || '';
      started = performance.now();
      const clock = () => {
        $('raTime').textContent = fill(M.elapsed, { s: ((performance.now() - started) / 1000).toFixed(1) });
      };
      clock();
      timer = setInterval(clock, 100);
      try {
        progress(6, 'read');
        await yieldUi();
        if (!isVideo(selected)) throw Error('err_format');
        if (selected.size > MAX_BYTES) throw Error('err_limit');
        const result = await muteVideo(selected);
        progress(90, 'write');
        await yieldUi();
        outMime = result.mime || 'video/webm';
        outputUrl = URL.createObjectURL(result.blob);
        preview.src = outputUrl;
        $('raOutput').hidden = false;
        $('raResult').textContent = fill(M.result, {
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
     * 用 MediaRecorder 合成约 1.4 秒带音轨的短 WebM（样例），再去音。
     * @returns {Promise<File>}
     */
    function makeSampleVideo(){
      return new Promise((resolve, reject) => {
        if (typeof MediaRecorder === 'undefined' || !HTMLCanvasElement.prototype.captureStream){
          reject(Error('err_encoder'));
          return;
        }
        const canvas = document.createElement('canvas');
        canvas.width = 160;
        canvas.height = 120;
        const c2d = canvas.getContext('2d');
        if (!c2d){ reject(Error('err_encoder')); return; }
        c2d.fillStyle = '#9a3412';
        c2d.fillRect(0, 0, 160, 120);
        c2d.fillStyle = '#ffedd5';
        c2d.font = '14px sans-serif';
        c2d.fillText('mute', 58, 66);
        const videoStream = canvas.captureStream(10);
        const AC = window.AudioContext || window.webkitAudioContext;
        if (!AC){ reject(Error('err_encoder')); return; }
        const ac = new AC();
        const osc = ac.createOscillator();
        const gain = ac.createGain();
        gain.gain.value = 0.12;
        const dest = ac.createMediaStreamDestination();
        osc.frequency.value = 440;
        osc.connect(gain);
        gain.connect(dest);
        dest.stream.getAudioTracks().forEach(track => videoStream.addTrack(track));
        const mimeCandidates = [
          'video/webm;codecs=vp8,opus',
          'video/webm;codecs=vp9,opus',
          'video/webm'
        ];
        const mime = mimeCandidates.find(m => MediaRecorder.isTypeSupported(m)) || '';
        if (!mime){ ac.close(); reject(Error('err_encoder')); return; }
        const rec = new MediaRecorder(videoStream, { mimeType: mime });
        const chunks = [];
        rec.ondataavailable = ev => { if (ev.data && ev.data.size) chunks.push(ev.data); };
        rec.onerror = () => { try { ac.close(); } catch (_) {} reject(Error('err_encoder')); };
        rec.onstop = () => {
          try { osc.stop(); } catch (_) {}
          try { ac.close(); } catch (_) {}
          videoStream.getTracks().forEach(t => t.stop());
          const blob = new Blob(chunks, { type: 'video/webm' });
          if (!blob.size){ reject(Error('err_encoder')); return; }
          resolve(new File([blob], (M.sample_name || 'mute-sample') + '.webm', { type: 'video/webm' }));
        };
        osc.start();
        rec.start(100);
        setTimeout(() => {
          try { rec.stop(); } catch (_) { reject(Error('err_encoder')); }
        }, 1400);
      });
    }
    /**
     * 加载样例并运行去音（门禁要求存在 loadSample）。
     */
    async function loadSample(){
      if (busy) return;
      try {
        const file = await makeSampleVideo();
        choose(file);
        await removeAudio();
      } catch (e) {
        choose(null);
        fail(e && M[e.message] ? e.message : 'failed');
      }
    }
    fileInput.addEventListener('change', () => choose(fileInput.files && fileInput.files[0]));
    $('raDrop').addEventListener('dragover', event => event.preventDefault());
    $('raDrop').addEventListener('drop', event => {
      event.preventDefault();
      if (busy) return;
      const files = event.dataTransfer && event.dataTransfer.files;
      if (!files || files.length !== 1){ choose(null); fail('err_file'); return; }
      choose(files[0]);
    });
    $('raConvert').addEventListener('click', removeAudio);
    $('raSample').addEventListener('click', loadSample);
    $('raClear').addEventListener('click', () => choose(null));
    $('raDownload').addEventListener('click', () => {
      if (!outputUrl || busy) return;
      const ext = (outMime.indexOf('mp4') >= 0) ? 'mp4' : 'webm';
      const link = document.createElement('a');
      link.href = outputUrl;
      link.download = (selected && selected.name ? selected.name.replace(/\\.[^.]+$/, '') : 'muted') + '-muted.' + ext;
      document.body.appendChild(link);
      link.click();
      link.remove();
    });
    window.addEventListener('pagehide', () => {
      clearInterval(timer);
      discardOut();
      discardSource();
    });
  })();
</script>`;

	/** catalog 元数据。 */
	const toolMeta = getToolBySlug('remove-the-audio-track-from-a-video');
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
