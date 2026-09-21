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
const P = 'tool_convert_an_aiff_file_to_wav';

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
 * 渲染完整的 AIFF/CAF → WAV 转换页（decodeAudioData → 16-bit WAV）。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderConvertAnAiffFileToWavPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 工具规范路径（无语言前缀）。 */
	const toolPath = '/tools/convert-an-aiff-file-to-wav';
	/** 当前语言下的 canonical 路径。 */
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	/** 文档 title（工具名 | 品牌）。 */
	const title = `${t(opts.lang, `${P}_title`)} | ${t(opts.lang, 'brand')}`;
	/** meta description。 */
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

	/** HTML hreflang 交替链接。 */
	const alternates: HreflangAlternate[] = (supportedLangs || []).map((code) => ({
		lang: code,
		href: `https://onlinefreetools.org${withLangPrefix(code, toolPath, opts.defaultLang)}`,
	}));

	/** 页眉 HTML。 */
	const headerHtml = renderHeader({
		lang: opts.lang,
		brandHref: withLangPrefix(opts.lang, '/', opts.defaultLang),
		navItems,
		enabledLangs: supportedLangs,
		langAlternates,
	});

	/** 侧栏 HTML（当前工具高亮）。 */
	const sidebarHtml = renderSidebar({
		title: t(opts.lang, 'nav_tools'),
		groups: buildToolSidebarItems({
			lang: opts.lang,
			defaultLang: opts.defaultLang,
			currentSlug: 'convert-an-aiff-file-to-wav',
			currentAnchor: '#aiff-wav',
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
		'encode',
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
	];
	/** 消息字典：键 → 当前语言字符串。 */
	const messages = Object.fromEntries(uiKeys.map((key) => [key, t(opts.lang, `${P}_${key}`)]));

	/** 工具主面板与结果区 markup。 */
	const contentHtml = `
    <div id="aiff-wav" class="tool-page-heading mb-3"><h1 class="h4">${tr('title')}</h1><p>${tr('desc')}</p></div>
    <section class="tool-panel" id="aiffPanel">
      <label class="tool-dropzone mb-3" id="aiffDrop" for="aiffFile"><input id="aiffFile" type="file" accept=".aiff,.aif,.caf,audio/aiff,audio/x-aiff,audio/x-caf"><span class="tool-dropzone-title">${tr('choose')}</span><span class="tool-dropzone-hint">${tr('hint')}</span><span id="aiffName" class="tool-dropzone-file"></span></label>
      <div class="tools-bar d-flex flex-wrap mb-3" style="gap:.5rem">
        <button id="aiffConvert" class="btn btn-primary" type="button">${tr('convert')}</button>
        <button id="aiffDownload" class="btn btn-outline-primary" type="button" disabled>${tr('download')}</button>
        <button id="aiffSample" class="btn btn-outline-secondary" type="button">${tr('sample')}</button>
        <button id="aiffClear" class="btn btn-outline-secondary" type="button">${tr('clear')}</button>
      </div>
      <details class="mb-3"><summary>${tr('advanced')}</summary><label for="aiffRate" class="form-label mt-2">${tr('bitrate')}</label><select id="aiffRate" class="form-select form-select-sm"><option value="44100" selected>44.1 kHz</option><option value="48000">48 kHz</option></select><p class="form-text">${tr('settings_hint')}</p></details>
      <div id="aiffHud" class="bcw-hud mb-3" role="status" aria-live="polite" hidden>
        <div class="bcw-hud-top"><div class="bcw-hud-spin" aria-hidden="true"></div><div class="bcw-hud-pct" id="aiffPct">0%</div><div class="bcw-hud-copy"><div class="bcw-hud-title">${tr('progress')}</div><div class="bcw-hud-step" id="aiffStep"></div><div class="bcw-hud-time" id="aiffTime"></div></div></div>
        <div class="progress" style="height:1.35rem"><div id="aiffBar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div><span class="bcw-hud-sheen" aria-hidden="true"></span></div>
        <ol class="bcw-hud-steps"><li data-step="read">${tr('read')}</li><li data-step="decode">${tr('decode')}</li><li data-step="encode">${tr('encode')}</li></ol><div class="bcw-hud-url" id="aiffCurrent"></div>
      </div>
      <div id="aiffOutput" hidden><h2 class="h5">${tr('preview')}</h2><p id="aiffResult"></p><audio id="aiffAudio" controls preload="metadata" style="max-width:100%" aria-label="${tr('preview')}"></audio></div>
    </section>`;

	/** How / Why / Rules / Use cases（本批 sound 强制 How≥4 Why≥4 Rules≥4）。 */
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
		],
	});

	/** HUD 与布局补充样式。 */
	const extraHeadHtml = `<style>${bcwHudCss({ hudId: 'aiffHud', convertBtnId: 'aiffConvert' })}#aiffHud.is-error{border-color:#b91c1c;background:#fff1f2}#aiffHud:not(.is-on) .bcw-hud-spin{animation:none}#aiffRate{max-width:18rem}.site-footer nav.d-inline{display:inline-flex!important;flex-wrap:wrap;justify-content:center;max-width:100%}</style>`;

	/** 客户端：读 AIFF/CAF → decodeAudioData → 写 16-bit WAV。 */
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
    const panel = $('aiffPanel');
    /** 文件输入。 */
    const fileInput = $('aiffFile');
    /** 输出采样率选择。 */
    const rateSelect = $('aiffRate');
    /** 进度 HUD。 */
    const hud = $('aiffHud');
    /** 预览 audio。 */
    const audio = $('aiffAudio');
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
      $('aiffDownload').disabled = true;
      $('aiffOutput').hidden = true;
    }
    /**
     * 忙碌锁：禁用控件；有输出时才允许下载。
     * @param {boolean} on 是否忙碌
     */
    function lock(on){
      busy = on;
      panel.querySelectorAll('button,input,select').forEach(el => el.disabled = on);
      $('aiffDownload').disabled = on || !outputUrl;
      $('aiffConvert').setAttribute('aria-busy', String(on));
    }
    /**
     * 更新进度条与步骤高亮。
     * @param {number} pct 百分比
     * @param {string} step 步骤键
     */
    function progress(pct, step){
      $('aiffPct').textContent = Math.round(pct) + '%';
      $('aiffBar').style.width = pct + '%';
      $('aiffBar').setAttribute('aria-valuenow', String(Math.round(pct)));
      $('aiffStep').textContent = M[step];
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
      $('aiffPct').textContent = '—';
      $('aiffBar').style.width = '0%';
      $('aiffBar').setAttribute('aria-valuenow', '0');
      hud.setAttribute('role', 'alert');
      $('aiffStep').textContent = M[key] || M.failed;
    }
    /**
     * 选择或清空输入文件。
     * @param {File|null} file 文件或 null
     */
    function choose(file){
      if (busy) return;
      discard();
      selected = file || null;
      $('aiffName').textContent = file ? file.name : '';
      hud.hidden = true;
      fileInput.value = '';
    }
    /**
     * 粗检 AIFF（FORM/AIFF|AIFC）或 CAF（caff）魔数。
     * @param {ArrayBuffer} bytes 文件字节
     * @returns {{ok:true}}
     */
    function inspectAiffOrCaf(bytes){
      const u = new Uint8Array(bytes);
      if (u.length < 12) throw Error('err_format');
      const tag4 = (at) => String.fromCharCode(u[at], u[at + 1], u[at + 2], u[at + 3]);
      if (tag4(0) === 'FORM' && (tag4(8) === 'AIFF' || tag4(8) === 'AIFC')) return { ok: true };
      if (tag4(0) === 'caff') return { ok: true };
      throw Error('err_format');
    }
    /**
     * 将 AudioBuffer 写成 16-bit PCM WAV Blob（可重采样到目标 rate）。
     * @param {AudioBuffer} buffer 解码缓冲
     * @param {number} rate 目标采样率
     * @returns {Blob}
     */
    function writeWav(buffer, rate){
      const channels = Math.min(2, buffer.numberOfChannels);
      const frames = Math.ceil(buffer.duration * rate);
      const bytes = new ArrayBuffer(44 + frames * channels * 2);
      const view = new DataView(bytes);
      const put = (at, text) => {
        for (let i = 0; i < text.length; i++) view.setUint8(at + i, text.charCodeAt(i));
      };
      put(0, 'RIFF');
      view.setUint32(4, bytes.byteLength - 8, true);
      put(8, 'WAVE');
      put(12, 'fmt ');
      view.setUint32(16, 16, true);
      view.setUint16(20, 1, true);
      view.setUint16(22, channels, true);
      view.setUint32(24, rate, true);
      view.setUint32(28, rate * channels * 2, true);
      view.setUint16(32, channels * 2, true);
      view.setUint16(34, 16, true);
      put(36, 'data');
      view.setUint32(40, frames * channels * 2, true);
      const data = [];
      for (let c = 0; c < channels; c++) data.push(buffer.getChannelData(c));
      for (let i = 0, at = 44; i < frames; i++) {
        for (let c = 0; c < channels; c++, at += 2) {
          const p = Math.min(data[c].length - 1, Math.floor(i * buffer.sampleRate / rate));
          const v = Number.isFinite(data[c][p]) ? Math.max(-1, Math.min(1, data[c][p])) : 0;
          view.setInt16(at, Math.round(v * (v < 0 ? 32768 : 32767)), true);
        }
      }
      return new Blob([bytes], { type: 'audio/wav' });
    }
    /** 执行读 → 解码 → 写 WAV 管线。 */
    async function convert(){
      if (busy) return;
      discard();
      if (!selected) { fail('empty'); return; }
      lock(true);
      hud.hidden = false;
      hud.className = 'bcw-hud is-on mb-3';
      hud.setAttribute('role', 'status');
      $('aiffCurrent').textContent = selected.name;
      started = performance.now();
      const clock = () => {
        $('aiffTime').textContent = fill(M.elapsed, { s: ((performance.now() - started) / 1000).toFixed(1) });
      };
      clock();
      timer = setInterval(clock, 100);
      try {
        progress(2, 'read');
        await yieldUi();
        if (selected.size > 40 * 1024 * 1024) throw Error('err_limit');
        const bytes = await selected.arrayBuffer();
        inspectAiffOrCaf(bytes);
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
        if (decoded.duration > 600.01 || decoded.numberOfChannels < 1 || decoded.numberOfChannels > 2) {
          throw Error('err_limit');
        }
        progress(22, 'encode');
        await yieldUi();
        const rate = Number(rateSelect.value);
        if (![44100, 48000].includes(rate)) throw Error('err_encoder');
        const blob = writeWav(decoded, rate);
        if (!blob.size) throw Error('err_encoder');
        outputUrl = URL.createObjectURL(blob);
        audio.src = outputUrl;
        $('aiffOutput').hidden = false;
        $('aiffResult').textContent = fill(M.result, {
          seconds: decoded.duration.toFixed(2),
          input: (selected.size / 1024).toFixed(1),
          output: (blob.size / 1024).toFixed(1),
          kbps: rate,
          channels: decoded.numberOfChannels,
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
    /** 拉取站点内置 AIFF 样例并走同一转换路径。 */
    async function loadSample(){
      if (busy) return;
      choose(null);
      lock(true);
      hud.hidden = false;
      hud.className = 'bcw-hud is-on mb-3';
      hud.setAttribute('role', 'status');
      progress(2, 'read');
      try {
        await yieldUi();
        const response = await fetch('/samples/convert-an-aiff-file-to-wav.aiff');
        if (!response.ok) throw Error('err_sample');
        const bytes = await response.arrayBuffer();
        lock(false);
        rateSelect.value = '44100';
        choose(new File([bytes], M.sample_name + '.aiff', { type: 'audio/aiff' }));
        await convert();
      } catch (e) {
        fail('err_sample');
      } finally {
        lock(false);
      }
    }
    fileInput.addEventListener('change', () => choose(fileInput.files[0]));
    $('aiffDrop').addEventListener('dragover', event => event.preventDefault());
    $('aiffDrop').addEventListener('drop', event => {
      event.preventDefault();
      if (busy) return;
      const files = event.dataTransfer.files;
      if (files.length !== 1) { choose(null); fail('err_file'); return; }
      choose(files[0]);
    });
    rateSelect.addEventListener('change', () => { discard(); hud.hidden = true; });
    $('aiffConvert').addEventListener('click', convert);
    $('aiffSample').addEventListener('click', loadSample);
    $('aiffClear').addEventListener('click', () => choose(null));
    $('aiffDownload').addEventListener('click', () => {
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
  })();</script>`;

	/** catalog 元数据（related / FAQ 等）。 */
	const toolMeta = getToolBySlug('convert-an-aiff-file-to-wav');
	/** related / article 等扩展区块。 */
	const extraSectionsHtml = toolMeta
		? renderToolExtraSections({ lang: opts.lang, defaultLang: opts.defaultLang, tool: toolMeta })
		: '';
	/** JSON-LD（WebApplication + Breadcrumb）。 */
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
