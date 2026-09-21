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
const P = 'tool_split_stereo_into_left_and_right_files';

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
 * 拆左右为双 mono 文件（ZIP）或交换 L-R 导出立体声 WAV（S13）。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderSplitStereoIntoLeftAndRightFilesPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 工具规范路径（无语言前缀）。 */
	const toolPath = '/tools/split-stereo-into-left-and-right-files';
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
			currentSlug: 'split-stereo-into-left-and-right-files',
			currentAnchor: '#split-lr',
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
		'split',
		'swap',
		'write',
		'done_split',
		'done_swap',
		'failed',
		'elapsed',
		'err_file',
		'err_format',
		'err_limit',
		'err_mono',
		'err_decode',
		'err_encoder',
		'err_zip',
		'sample_name',
		'result_split',
		'result_swap',
		'empty',
		'mode_split',
		'mode_swap',
		'download_zip',
		'download_wav',
		'left_name',
		'right_name',
	];
	/** 消息字典：键 → 当前语言字符串。 */
	const messages = Object.fromEntries(uiKeys.map((key) => [key, t(opts.lang, `${P}_${key}`)]));

	/** 工具主面板与结果区 markup。 */
	const contentHtml = `
    <div id="split-lr" class="tool-page-heading mb-3"><h1 class="h4">${tr('title')}</h1><p>${tr('desc')}</p></div>
    <section class="tool-panel" id="lrPanel">
      <label class="tool-dropzone mb-3" id="lrDrop" for="lrFile"><input id="lrFile" type="file" accept=".wav,.mp3,.m4a,.aac,.ogg,audio/*"><span class="tool-dropzone-title">${tr('choose')}</span><span class="tool-dropzone-hint">${tr('hint')}</span><span id="lrName" class="tool-dropzone-file"></span></label>
      <div class="tools-bar d-flex flex-wrap mb-3" style="gap:.5rem">
        <button id="lrConvert" class="btn btn-primary" type="button">${tr('convert')}</button>
        <button id="lrDownload" class="btn btn-outline-primary" type="button" disabled>${tr('download_zip')}</button>
        <button id="lrSample" class="btn btn-outline-secondary" type="button">${tr('sample')}</button>
        <button id="lrClear" class="btn btn-outline-secondary" type="button">${tr('clear')}</button>
      </div>
      <details class="mb-3" open><summary>${tr('advanced')}</summary>
        <p class="form-label mt-2 mb-1">${tr('output_mode')}</p>
        <div class="lr-mode-chips mb-2" id="lrModeChips" role="group" aria-label="${tr('output_mode')}">
          <button type="button" class="btn btn-sm btn-primary" data-mode="split" aria-pressed="true">${tr('mode_split')}</button>
          <button type="button" class="btn btn-sm btn-outline-secondary" data-mode="swap" aria-pressed="false">${tr('mode_swap')}</button>
        </div>
        <p class="form-text">${tr('settings_hint')}</p>
      </details>
      <div id="lrHud" class="bcw-hud mb-3" role="status" aria-live="polite" hidden>
        <div class="bcw-hud-top"><div class="bcw-hud-spin" aria-hidden="true"></div><div class="bcw-hud-pct" id="lrPct">0%</div><div class="bcw-hud-copy"><div class="bcw-hud-title">${tr('progress')}</div><div class="bcw-hud-step" id="lrStep"></div><div class="bcw-hud-time" id="lrTime"></div></div></div>
        <div class="progress" style="height:1.35rem"><div id="lrBar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div><span class="bcw-hud-sheen" aria-hidden="true"></span></div>
        <ol class="bcw-hud-steps"><li data-step="read">${tr('read')}</li><li data-step="decode">${tr('decode')}</li><li data-step="work" id="lrWorkStep">${tr('split')}</li><li data-step="write">${tr('write')}</li></ol><div class="bcw-hud-url" id="lrCurrent"></div>
      </div>
      <div id="lrOutput" hidden><h2 class="h5">${tr('preview')}</h2><p id="lrResult"></p><audio id="lrAudio" controls preload="metadata" style="max-width:100%" aria-label="${tr('preview')}"></audio></div>
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
				label: 'MDN: decodeAudioData',
				href: 'https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/decodeAudioData',
			},
		],
	});

	/** 金标 HUD 与模式芯片样式。 */
	const extraHeadHtml = `<style>${bcwHudCss({ hudId: 'lrHud', convertBtnId: 'lrConvert' })}#lrHud.is-error{border-color:#b91c1c;background:#fff1f2}#lrHud:not(.is-on) .bcw-hud-spin{animation:none}.lr-mode-chips{display:flex;flex-wrap:wrap;gap:.4rem}.site-footer nav.d-inline{display:inline-flex!important;flex-wrap:wrap;justify-content:center;max-width:100%}</style>`;

	/** 客户端：读 → 解码 → 拆 ZIP 或交换 → 写。 */
	const extraBodyHtml = `<script>
  (function(){
    'use strict';
    /** 当前语言的运行时文案。 */
    const M = ${JSON.stringify(messages).replace(/</g, '\\u003c')};
    /** JSZip 同域路径（Download 时再加载）。 */
    const JSZIP_SRC = '/vendor/jszip/jszip.min.js';
    /**
     * 按 id 取 DOM 元素。
     * @param {string} id 元素 id
     */
    const $ = id => document.getElementById(id);
    /** 工具面板根节点。 */
    const panel = $('lrPanel');
    /** 文件输入。 */
    const fileInput = $('lrFile');
    /** 进度 HUD。 */
    const hud = $('lrHud');
    /** 预览 audio。 */
    const audio = $('lrAudio');
    /** 当前选中的输入文件。 */
    let selected = null;
    /** 是否正在转换。 */
    let busy = false;
    /** 输出 object URL（需 revoke；ZIP 或交换后的 WAV）。 */
    let outputUrl = '';
    /** 预览用 object URL（拆分模式下为左声道，与 ZIP 不同）。 */
    let previewUrl = '';
    /** 计时器句柄。 */
    let timer = 0;
    /** 转换开始时间戳（ms）。 */
    let started = 0;
    /** 当前模式：split | swap。 */
    let mode = 'split';
    /** JSZip 是否已插入。 */
    let zipLoaded = false;
    /** 让出主线程一帧，刷新 HUD。 */
    const yieldUi = () => new Promise(resolve => requestAnimationFrame(() => setTimeout(resolve, 0)));
    /**
     * 用 {key} 占位符填充模板。
     * @param {string} text 模板
     * @param {Record<string, string|number>} values 替换值
     */
    const fill = (text, values) => text.replace(/{(\\w+)}/g, (_, key) => String(values[key] ?? ''));
    /** 同步芯片、下载按钮文案与 HUD 第三步标签。 */
    function paintMode(){
      $('lrModeChips').querySelectorAll('[data-mode]').forEach(btn => {
        const on = btn.dataset.mode === mode;
        btn.classList.toggle('btn-primary', on);
        btn.classList.toggle('btn-outline-secondary', !on);
        btn.setAttribute('aria-pressed', String(on));
      });
      $('lrDownload').textContent = mode === 'swap' ? M.download_wav : M.download_zip;
      $('lrWorkStep').textContent = mode === 'swap' ? M.swap : M.split;
    }
    /** 丢弃预览与下载 URL，并禁用下载。 */
    function discard(){
      audio.pause();
      audio.removeAttribute('src');
      audio.load();
      if (previewUrl && previewUrl !== outputUrl) URL.revokeObjectURL(previewUrl);
      previewUrl = '';
      if (outputUrl) URL.revokeObjectURL(outputUrl);
      outputUrl = '';
      $('lrDownload').disabled = true;
      $('lrOutput').hidden = true;
    }
    /**
     * 忙碌锁。
     * @param {boolean} on 是否忙碌
     */
    function lock(on){
      busy = on;
      panel.querySelectorAll('button,input').forEach(el => el.disabled = on);
      $('lrDownload').disabled = on || !outputUrl;
      $('lrConvert').setAttribute('aria-busy', String(on));
    }
    /**
     * 更新 HUD。
     * @param {number} pct 0–100
     * @param {string} step 步骤键
     */
    function progress(pct, step){
      $('lrPct').textContent = Math.round(pct) + '%';
      $('lrBar').style.width = pct + '%';
      $('lrBar').setAttribute('aria-valuenow', String(Math.round(pct)));
      const label = step === 'work' ? (mode === 'swap' ? M.swap : M.split) : M[step];
      $('lrStep').textContent = label || '';
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
      $('lrPct').textContent = '—';
      $('lrBar').style.width = '0%';
      $('lrBar').setAttribute('aria-valuenow', '0');
      hud.setAttribute('role', 'alert');
      $('lrStep').textContent = M[key] || M.failed;
    }
    /**
     * 选择或清空输入文件。
     * @param {File|null} file 新文件
     */
    function choose(file){
      if (busy) return;
      discard();
      selected = file || null;
      $('lrName').textContent = file ? file.name : '';
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
     * 懒加载 JSZip。
     * @returns {Promise<any>}
     */
    function loadJsZip(){
      if (typeof JSZip !== 'undefined') return Promise.resolve(JSZip);
      return new Promise((resolve, reject) => {
        const s = document.createElement('script');
        s.src = JSZIP_SRC;
        s.async = true;
        s.onload = () => {
          zipLoaded = true;
          if (typeof JSZip !== 'undefined') resolve(JSZip);
          else reject(Error('err_zip'));
        };
        s.onerror = () => reject(Error('err_zip'));
        document.head.appendChild(s);
      });
    }
    /**
     * 将 float PCM 写成 16-bit little-endian WAV（1 或 2 声道）。
     * @param {Float32Array[]} channels 声道数据
     * @param {number} rate 采样率 Hz
     */
    function writeWav(channels, rate){
      const ch = channels.length;
      const frames = channels[0].length;
      const dataBytes = frames * ch * 2;
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
      view.setUint32(28, rate * ch * 2, true);
      view.setUint16(32, ch * 2, true);
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
    /** 主转换。 */
    async function convert(){
      if (busy) return;
      discard();
      if (!selected){ fail('empty'); return; }
      lock(true);
      hud.hidden = false;
      hud.className = 'bcw-hud is-on mb-3';
      hud.setAttribute('role', 'status');
      $('lrCurrent').textContent = selected.name;
      started = performance.now();
      const clock = () => { $('lrTime').textContent = fill(M.elapsed, { s: ((performance.now() - started) / 1000).toFixed(1) }); };
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
        if (decoded.duration > 600.01) throw Error('err_limit');
        if (decoded.numberOfChannels < 2) throw Error('err_mono');
        if (decoded.numberOfChannels > 2) throw Error('err_limit');
        if (!['split', 'swap'].includes(mode)) throw Error('err_encoder');
        progress(40, 'work');
        await yieldUi();
        const rate = Math.round(decoded.sampleRate);
        const left = decoded.getChannelData(0);
        const right = decoded.getChannelData(1);
        let blob;
        let previewBlob;
        if (mode === 'swap'){
          blob = writeWav([right, left], rate);
          previewBlob = blob;
        } else {
          const leftBlob = writeWav([left], rate);
          const rightBlob = writeWav([right], rate);
          progress(60, 'write');
          await yieldUi();
          const JSZipCtor = await loadJsZip();
          const zip = new JSZipCtor();
          const stem = (selected.name.replace(/\\.[^.]+$/, '') || 'audio');
          zip.file(stem + '-' + M.left_name + '.wav', leftBlob);
          zip.file(stem + '-' + M.right_name + '.wav', rightBlob);
          blob = await zip.generateAsync({ type: 'blob' });
          previewBlob = leftBlob;
        }
        progress(72, 'write');
        await yieldUi();
        if (!blob.size) throw Error('err_encoder');
        outputUrl = URL.createObjectURL(blob);
        previewUrl = mode === 'swap' ? outputUrl : URL.createObjectURL(previewBlob);
        audio.src = previewUrl;
        $('lrOutput').hidden = false;
        const modeLabel = mode === 'swap' ? M.mode_swap : M.mode_split;
        const template = mode === 'swap' ? M.result_swap : M.result_split;
        $('lrResult').textContent = fill(template, {
          seconds: decoded.duration.toFixed(2),
          sourceChannels: decoded.numberOfChannels,
          mode: modeLabel,
          output: (blob.size / 1024).toFixed(1)
        });
        progress(100, 'done');
        $('lrStep').textContent = mode === 'swap' ? M.done_swap : M.done_split;
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
     * 合成约 2 s、48 kHz 立体声样例。
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
    /** 进页或点 Sample：立体声样例并自动 Split。 */
    async function loadSample(){
      if (busy) return;
      mode = 'split';
      paintMode();
      choose(sampleWav());
      await convert();
    }
    fileInput.addEventListener('change', () => choose(fileInput.files[0]));
    $('lrDrop').addEventListener('dragover', event => event.preventDefault());
    $('lrDrop').addEventListener('drop', event => {
      event.preventDefault();
      if (busy) return;
      const files = event.dataTransfer.files;
      if (files.length !== 1){ choose(null); fail('err_file'); return; }
      choose(files[0]);
    });
    $('lrModeChips').addEventListener('click', event => {
      const btn = event.target.closest('[data-mode]');
      if (!btn || busy) return;
      mode = btn.dataset.mode;
      paintMode();
      discard();
      hud.hidden = true;
    });
    $('lrConvert').addEventListener('click', convert);
    $('lrSample').addEventListener('click', loadSample);
    $('lrClear').addEventListener('click', () => choose(null));
    $('lrDownload').addEventListener('click', () => {
      if (!outputUrl || busy) return;
      const link = document.createElement('a');
      link.href = outputUrl;
      const stem = (selected.name.replace(/\\.[^.]+$/, '') || 'audio');
      link.download = mode === 'swap' ? stem + '-swapped.wav' : stem + '-left-right.zip';
      document.body.appendChild(link);
      link.click();
      link.remove();
    });
    window.addEventListener('pagehide', () => {
      clearInterval(timer);
      if (previewUrl && previewUrl !== outputUrl) URL.revokeObjectURL(previewUrl);
      if (outputUrl) URL.revokeObjectURL(outputUrl);
    });
    paintMode();
    loadSample();
  })();
</script>`;

	/** catalog 元数据。 */
	const toolMeta = getToolBySlug('split-stereo-into-left-and-right-files');
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
