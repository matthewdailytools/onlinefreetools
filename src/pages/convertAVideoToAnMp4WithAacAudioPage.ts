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
const P = 'tool_convert_a_video_to_an_mp4_with_aac_audio';

/** 工具 slug。 */
const SLUG = 'convert-a-video-to-an-mp4-with-aac-audio';

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
 * 渲染 mixed-container→H.264/AAC MP4 工具页；兼容 H.264 视频可复制，其它轨道须真实检验。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderConvertAVideoToAnMp4WithAacAudioPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = `/tools/${SLUG}`;
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, `${P}_title`)} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, `${P}_description`);

	const navItems = buildToolPageNavItems(opts.lang, opts.defaultLang);

	/**
	 * hreflang 映射始终带显式语言段。
	 * @param code 语言码
	 * @param pathname 路径
	 */
	const withExplicitLangPrefix = (code: SiteLang, pathname: string) => {
		const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
		return `/${code}${safe}`.replace(/\/{2,}/g, '/');
	};

	const langAlternates: Record<string, string> = Object.fromEntries(
		(supportedLangs || []).map((code) => [code, withExplicitLangPrefix(code, toolPath)])
	);

	const alternates: HreflangAlternate[] = (supportedLangs || []).map((code) => ({
		lang: code,
		href: `https://onlinefreetools.org${withLangPrefix(code, toolPath, opts.defaultLang)}`,
	}));

	const headerHtml = renderHeader({
		lang: opts.lang,
		brandHref: withLangPrefix(opts.lang, '/', opts.defaultLang),
		navItems,
		enabledLangs: supportedLangs,
		langAlternates,
	});

	const sidebarHtml = renderSidebar({
		title: t(opts.lang, 'nav_tools'),
		groups: buildToolSidebarItems({
			lang: opts.lang,
			defaultLang: opts.defaultLang,
			currentSlug: SLUG,
			currentAnchor: '#compatible-mp4',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	const tr = (key: string) => escapeHtml(t(opts.lang, `${P}_${key}`));
	const uiKeys = [
		'load',
		'read',
		'decode',
		'encode',
		'write',
		'done',
		'failed',
		'elapsed',
		'err_file',
		'err_format',
		'err_limit',
		'err_container',
		'err_codec',
		'err_encoder',
		'err_sample',
		'err_engine',
		'err_aborted',
		'sample_name',
		'result',
		'no_audio',
		'empty',
		'status_stopped',
		'err_no_avc',
		'err_hevc',
		'mode_copy',
		'mode_transcode',
	];
	const messages = Object.fromEntries(uiKeys.map((key) => [key, t(opts.lang, `${P}_${key}`)]));

	const contentHtml = `
    <div id="compatible-mp4" class="tool-page-heading mb-3"><h1 class="h4">${tr('title')}</h1><p>${tr('desc')}</p></div>
    <section class="tool-panel" id="cmkPanel">
      <label class="tool-dropzone mb-3" id="cmkDrop" for="cmkFile"><input id="cmkFile" type="file" accept="video/*,.mp4,.mov,.webm,.mkv,.m4v"><span class="tool-dropzone-title">${tr('choose')}</span><span class="tool-dropzone-hint">${tr('hint')}</span><span id="cmkName" class="tool-dropzone-file"></span></label>
      <div class="tools-bar d-flex flex-wrap mb-3" style="gap:.5rem">
        <button id="cmkConvert" class="btn btn-primary" type="button">${tr('convert')}</button>
        <button id="cmkDownload" class="btn btn-outline-primary" type="button" disabled>${tr('download')}</button>
        <button id="cmkStop" class="btn btn-outline-secondary" type="button" disabled>${tr('stop')}</button>
        <button id="cmkSample" class="btn btn-outline-secondary" type="button">${tr('sample')}</button>
        <button id="cmkClear" class="btn btn-outline-secondary" type="button">${tr('clear')}</button>
      </div>
      <details class="mb-3"><summary>${tr('advanced')}</summary>
        <label for="cmkChannels" class="form-label mt-2">${tr('channels_label')}</label>
        <select id="cmkChannels" class="form-select form-select-sm mb-2"><option value="2" selected>${tr('channels_stereo')}</option><option value="1">${tr('channels_mono')}</option></select>
        <label for="cmkQuality" class="form-label">${tr('quality_label')}</label>
        <select id="cmkQuality" class="form-select form-select-sm"><option value="high" selected>${tr('quality_high')}</option><option value="medium">${tr('quality_medium')}</option><option value="low">${tr('quality_low')}</option></select>
        <p class="form-text">${tr('settings_hint')}</p>
      </details>
      <div id="cmkHud" class="bcw-hud mb-3" role="status" aria-live="polite" hidden>
        <div class="bcw-hud-top"><div class="bcw-hud-spin" aria-hidden="true"></div><div class="bcw-hud-pct" id="cmkPct">0%</div><div class="bcw-hud-copy"><div class="bcw-hud-title">${tr('progress')}</div><div class="bcw-hud-step" id="cmkStep"></div><div class="bcw-hud-time" id="cmkTime"></div></div></div>
        <div class="progress" style="height:1.35rem"><div id="cmkBar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div><span class="bcw-hud-sheen" aria-hidden="true"></span></div>
        <ol class="bcw-hud-steps"><li data-step="load">${tr('load')}</li><li data-step="read">${tr('read')}</li><li data-step="decode">${tr('decode')}</li><li data-step="encode">${tr('encode')}</li><li data-step="write">${tr('write')}</li></ol><div class="bcw-hud-url" id="cmkCurrent"></div>
      </div>
      <div id="cmkEmpty" class="cmk-empty mb-3" role="status">${tr('empty_state')}</div>
      <div id="cmkOutput" hidden><h2 class="h5">${tr('preview')}</h2><p id="cmkResult"></p><video id="cmkVideo" controls preload="metadata" style="max-width:100%;max-height:320px" aria-label="${tr('preview')}"></video></div>
    </section>`;

	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: P,
		mode: 'rules',
		howItemCount: 4,
		whyChooseItemCount: 4,
		ruleItemCount: 4,
		usecaseCount: 3,
	});
	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{ label: 'Mediabunny: Converting media files', href: 'https://mediabunny.dev/guide/converting-media-files' },
			{
				label: 'MDN: WebCodecs codec selection',
				href: 'https://developer.mozilla.org/en-US/docs/Web/API/WebCodecs_API/Codec_selection',
			},
		],
	});
	const extraHeadHtml = `<style>${bcwHudCss({ hudId: 'cmkHud', convertBtnId: 'cmkConvert' })}#content{min-width:0;overflow-wrap:anywhere}#cmkPanel{min-width:0}#cmkDrop{position:relative;display:block;max-width:100%;min-width:0;overflow:hidden;box-sizing:border-box}#cmkFile{position:absolute;width:1px;height:1px;opacity:0;pointer-events:none}#cmkVideo{display:block;width:100%;max-width:300px;min-width:0}#cmkHud.is-error{border-color:#b91c1c;background:#fff1f2}#cmkHud:not(.is-on) .bcw-hud-spin{animation:none}#cmkChannels,#cmkQuality{max-width:18rem}.cmk-empty{padding:.75rem 1rem;border:1px dashed var(--border,#ced4da);border-radius:.5rem;color:var(--bs-secondary-color,#6c757d);font-size:.95rem}.site-footer nav.d-inline{display:inline-flex!important;flex-wrap:wrap;justify-content:center;max-width:100%}</style>`;

	const extraBodyHtml = `<script>
  (function(){
    'use strict';
    const M = ${JSON.stringify(messages).replace(/</g, '\\u003c')};
    /** 保护内存的代码上限，不代表都已通过实测。 */
    let MAX_BYTES = 80 * 1024 * 1024;
    const SAMPLE_URL = '/samples/convert-a-webm-file-to-an-mp4-file.webm';
    const $ = (id) => document.getElementById(id);
    const panel = $('cmkPanel'), fileInput = $('cmkFile'), channels = $('cmkChannels'), quality = $('cmkQuality');
    const hud = $('cmkHud'), video = $('cmkVideo'), empty = $('cmkEmpty');
    let selected = null, busy = false, outputUrl = '', timer = 0, started = 0, abortCtrl = null, convertMod = null;
    /** OPFS 临时文件清理函数（若引擎返回）。 */
    let outputCleanup = null;
    /** 让出主线程刷新 HUD；后台标签页不触发 rAF，隐藏时走 MessageChannel，可见时 50ms 兜底。 */
    const yieldUi = () => new Promise((resolve) => {
      /** 是否已 resolve。 */
      let done = false;
      /** 只 resolve 一次。 */
      const finish = () => { if (!done) { done = true; resolve(); } };
      if (document.hidden && typeof MessageChannel === 'function') {
        const ch = new MessageChannel();
        ch.port1.onmessage = finish;
        ch.port2.postMessage(0);
        return;
      }
      requestAnimationFrame(() => setTimeout(finish, 0));
      setTimeout(finish, 50);
    });
    const fill = (text, values) => text.replace(/{(\\w+)}/g, (_, key) => String(values[key] ?? ''));
    async function discard(){
      video.pause(); video.removeAttribute('src'); video.load();
      if (outputUrl) URL.revokeObjectURL(outputUrl);
      outputUrl = '';
      if (outputCleanup) {
        try { await outputCleanup(); } catch (_) {}
        outputCleanup = null;
      }
      $('cmkDownload').disabled = true;
      $('cmkOutput').hidden = true;
      $('cmkResult').textContent = '';
      empty.hidden = false;
    }
    function lock(on){
      busy = on;
      panel.querySelectorAll('button,input,select').forEach((el) => {
        if (el.id === 'cmkStop') { el.disabled = !on; return; }
        if (el.id === 'cmkDownload') { el.disabled = on || !outputUrl; return; }
        el.disabled = on;
      });
      $('cmkConvert').setAttribute('aria-busy', String(on));
    }
    function progress(pct, step){
      $('cmkPct').textContent = Math.round(pct) + '%';
      $('cmkBar').style.width = pct + '%';
      $('cmkBar').setAttribute('aria-valuenow', String(Math.round(pct)));
      $('cmkStep').textContent = M[step] || step;
      hud.querySelectorAll('[data-step]').forEach((el) => el.classList.toggle('is-on', el.dataset.step === step));
    }
    function fail(key){
      hud.hidden = false;
      hud.classList.remove('is-on', 'is-done');
      hud.classList.add('is-error', 'is-fail');
      $('cmkPct').textContent = '—';
      $('cmkBar').style.width = '0%';
      $('cmkBar').setAttribute('aria-valuenow', '0');
      hud.setAttribute('role', 'alert');
      $('cmkStep').textContent = M[key] || M.failed;
    }
    function isVideo(file){
      const name = (file && file.name ? file.name : '').toLowerCase();
      const type = (file && file.type ? file.type : '').toLowerCase();
      return /\\.(mp4|mov|webm|mkv|m4v)$/.test(name) || /^video\\/(mp4|quicktime|webm|x-matroska)$/.test(type);
    }
    function choose(file){
      if (busy) return;
      discard();
      selected = file || null;
      $('cmkName').textContent = file ? file.name : '';
      hud.hidden = true;
      empty.hidden = !!file;
      fileInput.value = '';
    }
    function formatSize(n){
      const v = Number(n) || 0;
      if (v >= 1024 * 1024 * 1024) return (v / (1024 * 1024 * 1024)).toFixed(2) + ' GiB';
      if (v >= 1024 * 1024) return (v / (1024 * 1024)).toFixed(1) + ' MiB';
      return (v / 1024).toFixed(1) + ' KiB';
    }
    async function ensureEngine(){
      if (convertMod) return convertMod;
      progress(4, 'load');
      await yieldUi();
      convertMod = await import('/vendor/mediabunny/mkv-to-mp4-loader.js');
      if (!convertMod || typeof convertMod.convertMkvToMp4 !== 'function' || typeof convertMod.inspectVideoFile !== 'function') throw Error('err_engine');
      if (typeof convertMod.getConvertCapabilities === 'function') {
        try {
          const caps = await convertMod.getConvertCapabilities();
          MAX_BYTES = caps && caps.opfs ? 500 * 1024 * 1024 : 80 * 1024 * 1024;
        } catch (_) {}
      }
      return convertMod;
    }
    async function convert(){
      if (busy) return;
      await discard();
      if (!selected) { fail('empty'); return; }
      if (!isVideo(selected)) { fail('err_format'); return; }
      lock(true);
      hud.hidden = false;
      hud.className = 'bcw-hud is-on mb-3';
      hud.setAttribute('role', 'status');
      $('cmkCurrent').textContent = selected.name;
      started = performance.now();
      const clock = () => { $('cmkTime').textContent = fill(M.elapsed, { s: ((performance.now() - started) / 1000).toFixed(1) }); };
      clock();
      timer = setInterval(clock, 100);
      abortCtrl = new AbortController();
      try {
        const mod = await ensureEngine();
        if (selected.size > MAX_BYTES) { fail('err_limit'); return; }
        progress(10, 'read');
        await yieldUi();
        progress(18, 'decode');
        let source;
        try { source = await mod.inspectVideoFile(selected); }
        catch (_) { throw Error('err_container'); }
        if (!source || !source.videoCodec) throw Error('err_container');
        if (!/(mp4|quicktime|webm|matroska)/i.test(String(source.mimeType || ''))) throw Error('err_format');
        if (!source.canDecodeVideo) throw Error(source.videoCodec === 'hevc' ? 'err_hevc' : 'err_codec');
        if (!source.canDecodeAudio) throw Error('err_codec');
        const copyVideo = source.videoCodec === 'avc';
        if (!copyVideo && !source.canEncodeAvc) throw Error('err_no_avc');
        const ch = Number(channels.value) === 1 ? 1 : 2;
        const q = ['low', 'medium', 'high'].includes(quality.value) ? quality.value : 'high';
        const result = await mod.convertMkvToMp4(selected, {
          videoCodec: copyVideo ? undefined : 'avc',
          preferOpfs: true,
          numberOfChannels: ch,
          quality: q,
          signal: abortCtrl.signal,
          onProgress: (ratio) => {
            const r = Math.max(0, Math.min(1, Number(ratio) || 0));
            const pct = 18 + r * 72;
            progress(pct, r < 0.55 ? 'decode' : 'encode');
          },
        });
        progress(95, 'write');
        await yieldUi();
        const blob = result.blob || (result.buffer ? new Blob([result.buffer], { type: 'video/mp4' }) : null);
        if (!blob || !blob.size) throw Error('err_encoder');
        outputCleanup = typeof result.cleanup === 'function' ? result.cleanup : null;
        let actual;
        try { actual = await mod.inspectVideoFile(blob); }
        catch (_) { throw Error('err_codec'); }
        if (actual.videoCodec !== 'avc' || !String(actual.mimeType || '').includes('mp4') ||
            (source.audioCodec !== 'none' && actual.audioCodec !== 'aac') ||
            (source.audioCodec === 'none' && actual.audioCodec !== 'none') ||
            (source.duration > 0 && actual.duration > 0 &&
             Math.abs(actual.duration - source.duration) > Math.max(0.5, source.duration * 0.05))) {
          throw Error('err_codec');
        }
        outputUrl = URL.createObjectURL(blob);
        /* 超大文件仍挂 blob URL；浏览器按需拉流，勿再整段读进 ArrayBuffer */
        video.src = outputUrl;
        $('cmkOutput').hidden = false;
        empty.hidden = true;
        $('cmkResult').textContent = fill(M.result, {
          input: formatSize(selected.size),
          output: formatSize(blob.size),
          videoCodec: source.videoCodec,
          audioCodec: source.audioCodec === 'none' ? M.no_audio : source.audioCodec,
          targetAudio: source.audioCodec === 'none' ? M.no_audio : 'AAC',
          width: source.width,
          height: source.height,
          duration: Number(source.duration || 0).toFixed(2),
          mode: copyVideo ? M.mode_copy : M.mode_transcode,
        });
        progress(100, 'done');
        hud.classList.remove('is-on');
        hud.classList.add('is-done');
        $('cmkStep').textContent = M.done;
      } catch (e) {
        await discard();
        const code = e && e.code ? e.code : (e && e.message ? e.message : '');
        if (code === 'err_aborted' || (abortCtrl && abortCtrl.signal.aborted)) {
          fail('err_aborted');
          $('cmkStep').textContent = M.status_stopped;
        } else if (M[code]) fail(code);
        else fail('failed');
      } finally {
        clearInterval(timer);
        clock();
        abortCtrl = null;
        lock(false);
      }
    }
    async function loadSample(){
      if (busy) return;
      try {
        const res = await fetch(SAMPLE_URL, { credentials: 'same-origin' });
        if (!res.ok) throw Error('err_sample');
        const blob = await res.blob();
        const file = new File([blob], M.sample_name + '.webm', { type: 'video/webm' });
        channels.value = '2';
        quality.value = 'high';
        choose(file);
        await convert();
      } catch (e) {
        choose(null);
        fail(e && M[e.message] ? e.message : 'err_sample');
      }
    }
    fileInput.addEventListener('change', () => {
      const f = fileInput.files && fileInput.files[0];
      if (!f) { choose(null); return; }
      if (!isVideo(f)) { choose(null); fail('err_format'); return; }
      choose(f);
    });
    $('cmkDrop').addEventListener('dragover', (event) => event.preventDefault());
    $('cmkDrop').addEventListener('drop', (event) => {
      event.preventDefault();
      if (busy) return;
      const files = event.dataTransfer && event.dataTransfer.files;
      if (!files || files.length !== 1) { choose(null); fail('err_file'); return; }
      if (!isVideo(files[0])) { choose(null); fail('err_format'); return; }
      choose(files[0]);
    });
    channels.addEventListener('change', () => { discard(); hud.hidden = true; empty.hidden = !selected; });
    quality.addEventListener('change', () => { discard(); hud.hidden = true; empty.hidden = !selected; });
    $('cmkConvert').addEventListener('click', convert);
    $('cmkSample').addEventListener('click', loadSample);
    $('cmkClear').addEventListener('click', () => choose(null));
    $('cmkStop').addEventListener('click', () => { if (abortCtrl) abortCtrl.abort(); });
    $('cmkDownload').addEventListener('click', () => {
      if (!outputUrl || busy) return;
      const link = document.createElement('a');
      link.href = outputUrl;
      link.download = (selected && selected.name ? selected.name.replace(/\\.[^.]+$/, '') : 'video') + '.mp4';
      document.body.appendChild(link);
      link.click();
      link.remove();
    });
    window.addEventListener('pagehide', () => {
      clearInterval(timer);
      if (abortCtrl) abortCtrl.abort();
      if (outputUrl) URL.revokeObjectURL(outputUrl);
    });
  })();
</script>`;

	const toolMeta = getToolBySlug(SLUG);
	const extraSectionsHtml = toolMeta
		? renderToolExtraSections({ lang: opts.lang, defaultLang: opts.defaultLang, tool: toolMeta })
		: '';
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
