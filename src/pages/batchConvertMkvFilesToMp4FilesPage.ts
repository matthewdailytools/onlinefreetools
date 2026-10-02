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
const P = 'tool_batch_convert_mkv_files_to_mp4_files';

/** 工具 slug。 */
const SLUG = 'batch-convert-mkv-files-to-mp4-files';

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
 * 渲染「批量把 MKV 转成 MP4（AAC）并打 ZIP」工具页（D3 · mediabunny + JSZip）。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderBatchConvertMkvFilesToMp4FilesPage = (opts: {
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
			currentAnchor: '#batch-mkv-mp4',
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
		'pack',
		'done',
		'failed',
		'elapsed',
		'err_file',
		'err_format',
		'err_limit',
		'err_container',
		'err_codec',
		'err_encoder',
		'err_zip',
		'err_too_many',
		'err_sample',
		'err_engine',
		'err_aborted',
		'sample_name',
		'result',
		'partial',
		'empty',
		'remove',
		'queue_count',
		'empty_state',
		'status_pending',
		'status_running',
		'status_ok',
		'status_fail',
		'status_stopped',
		'stop',
		'download',
	];
	const messages = Object.fromEntries(uiKeys.map((key) => [key, t(opts.lang, `${P}_${key}`)]));

	const contentHtml = `
    <div id="batch-convert-mkv" class="tool-page-heading mb-3"><h1 class="h4">${tr('title')}</h1><p>${tr('desc')}</p></div>
    <section class="tool-panel" id="bcmkPanel">
      <label class="tool-dropzone mb-3" id="bcmkDrop" for="bcmkFile"><input id="bcmkFile" type="file" multiple accept=".mkv,video/x-matroska,video/matroska"><span class="tool-dropzone-title">${tr('choose')}</span><span class="tool-dropzone-hint">${tr('hint')}</span><span id="bcmkName" class="tool-dropzone-file"></span></label>
      <p class="form-label mb-1">${tr('list_label')}</p>
      <ul id="bcmkList" class="list-group mb-2 bcmk-list" aria-live="polite"></ul>
      <p id="bcmkQueueMeta" class="form-text mb-3">${tr('queue_count').replace('{n}', '0')}</p>
      <div class="tools-bar d-flex flex-wrap mb-3" style="gap:.5rem">
        <button id="bcmkConvert" class="btn btn-primary" type="button">${tr('convert')}</button>
        <button id="bcmkDownload" class="btn btn-outline-primary" type="button" disabled>${tr('download')}</button>
        <button id="bcmkStop" class="btn btn-outline-secondary" type="button" disabled>${tr('stop')}</button>
        <button id="bcmkSample" class="btn btn-outline-secondary" type="button">${tr('sample')}</button>
        <button id="bcmkClear" class="btn btn-outline-secondary" type="button">${tr('clear')}</button>
      </div>
      <details class="mb-3"><summary>${tr('advanced')}</summary>
        <label for="bcmkChannels" class="form-label mt-2">${tr('channels_label')}</label>
        <select id="bcmkChannels" class="form-select form-select-sm mb-2"><option value="2" selected>${tr('channels_stereo')}</option><option value="1">${tr('channels_mono')}</option></select>
        <label for="bcmkQuality" class="form-label">${tr('quality_label')}</label>
        <select id="bcmkQuality" class="form-select form-select-sm"><option value="high" selected>${tr('quality_high')}</option><option value="medium">${tr('quality_medium')}</option><option value="low">${tr('quality_low')}</option></select>
        <p class="form-text mt-2">${tr('settings_hint')}</p>
      </details>
      <div id="bcmkHud" class="bcw-hud mb-3" role="status" aria-live="polite" hidden>
        <div class="bcw-hud-top"><div class="bcw-hud-spin" aria-hidden="true"></div><div class="bcw-hud-pct" id="bcmkPct">0%</div><div class="bcw-hud-copy"><div class="bcw-hud-title">${tr('progress')}</div><div class="bcw-hud-step" id="bcmkStep"></div><div class="bcw-hud-time" id="bcmkTime"></div></div></div>
        <div class="progress" style="height:1.35rem"><div id="bcmkBar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div><span class="bcw-hud-sheen" aria-hidden="true"></span></div>
        <ol class="bcw-hud-steps"><li data-step="load">${tr('load')}</li><li data-step="read">${tr('read')}</li><li data-step="decode">${tr('decode')}</li><li data-step="encode">${tr('encode')}</li><li data-step="pack">${tr('pack')}</li></ol><div class="bcw-hud-url" id="bcmkCurrent"></div>
      </div>
      <div id="bcmkEmpty" class="bcmk-empty mb-3" role="status">${tr('empty_state')}</div>
      <div id="bcmkOutput" hidden><h2 class="h5">${tr('preview')}</h2><p id="bcmkResult"></p></div>
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
			{ label: 'Mediabunny', href: 'https://mediabunny.dev/' },
			{
				label: 'MDN: Media container formats',
				href: 'https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Containers',
			},
		],
	});
	const extraHeadHtml = `<style>${bcwHudCss({ hudId: 'bcmkHud', convertBtnId: 'bcmkConvert' })}#bcmkHud.is-error{border-color:#b91c1c;background:#fff1f2}#bcmkHud:not(.is-on) .bcw-hud-spin{animation:none}#bcmkChannels,#bcmkQuality{max-width:18rem}.bcmk-list{gap:.35rem}.bcmk-list .list-group-item{display:flex;flex-wrap:wrap;align-items:center;gap:.4rem}.bcmk-list .bcmk-name{flex:1 1 10rem;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.bcmk-list .bcmk-status{font-size:.85rem;color:var(--bs-secondary-color,#6c757d)}.bcmk-list .bcmk-status.is-ok{color:#15803d}.bcmk-list .bcmk-status.is-fail{color:#b91c1c}.bcmk-empty{padding:.75rem 1rem;border:1px dashed var(--border,#ced4da);border-radius:.5rem;color:var(--bs-secondary-color,#6c757d);font-size:.95rem}.site-footer nav.d-inline{display:inline-flex!important;flex-wrap:wrap;justify-content:center;max-width:100%}</style>`;

	const extraBodyHtml = `<script>
  (function(){
    'use strict';
    const M = ${JSON.stringify(messages).replace(/</g, '\\u003c')};
    const MAX_BYTES = 5 * 1024 * 1024 * 1024;
    const BATCH_MAX_FILES = 20;
    const SAMPLE_URL = '/samples/convert-an-mkv-file-to-an-mp4-file.mkv';
    const ZIP_SRC = '/vendor/jszip/jszip.min.js';
    const $ = (id) => document.getElementById(id);
    const panel = $('bcmkPanel'), fileInput = $('bcmkFile'), channels = $('bcmkChannels'), quality = $('bcmkQuality');
    const hud = $('bcmkHud'), empty = $('bcmkEmpty');
    let queue = [], rowStatus = [], busy = false, stopRequested = false, outputUrl = '', timer = 0, started = 0;
    let fileAbort = null, convertMod = null, zipPromise = null;
    /** 引擎侧体积上限（探测后覆盖 MAX_BYTES）。 */
    let engineMaxBytes = MAX_BYTES;
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
    function isMkv(file){
      if (!file) return false;
      const name = String(file.name || '').toLowerCase();
      const type = String(file.type || '').toLowerCase();
      return name.endsWith('.mkv') || type.indexOf('matroska') !== -1;
    }
    function discard(){
      if (outputUrl) URL.revokeObjectURL(outputUrl);
      outputUrl = '';
      $('bcmkDownload').disabled = true;
      $('bcmkOutput').hidden = true;
      empty.hidden = queue.length > 0;
    }
    function lock(on){
      busy = on;
      panel.querySelectorAll('button,input,select').forEach((el) => {
        if (el.id === 'bcmkStop') { el.disabled = !on; return; }
        if (el.id === 'bcmkDownload') { el.disabled = on || !outputUrl; return; }
        el.disabled = on;
      });
      $('bcmkConvert').setAttribute('aria-busy', String(on));
    }
    function progress(pct, step){
      $('bcmkPct').textContent = Math.round(pct) + '%';
      $('bcmkBar').style.width = pct + '%';
      $('bcmkBar').setAttribute('aria-valuenow', String(Math.round(pct)));
      $('bcmkStep').textContent = M[step] || step;
      hud.querySelectorAll('.bcw-hud-steps li').forEach((li) => {
        const key = li.getAttribute('data-step');
        li.classList.toggle('is-active', key === step);
        li.classList.toggle('is-done', ['load','read','decode','encode','pack','done'].indexOf(key) < ['load','read','decode','encode','pack','done'].indexOf(step));
      });
    }
    function fail(key){
      hud.hidden = false;
      hud.className = 'bcw-hud mb-3 is-error is-fail';
      $('bcmkPct').textContent = '—';
      $('bcmkBar').style.width = '0%';
      $('bcmkBar').setAttribute('aria-valuenow', '0');
      $('bcmkStep').textContent = M[key] || M.failed;
      empty.hidden = true;
    }
    function statusLabel(code){
      if (code === 'pending') return M.status_pending;
      if (code === 'running') return M.status_running;
      if (code === 'ok') return M.status_ok;
      if (code === 'fail') return M.status_fail;
      if (code === 'stopped') return M.status_stopped;
      return String(code || '');
    }
    function renderQueue(){
      const list = $('bcmkList');
      list.innerHTML = '';
      queue.forEach((file, i) => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        const name = document.createElement('span');
        name.className = 'bcmk-name';
        name.textContent = file.name;
        const st = document.createElement('span');
        st.className = 'bcmk-status' + (rowStatus[i] === 'ok' ? ' is-ok' : (rowStatus[i] === 'fail' ? ' is-fail' : ''));
        st.textContent = statusLabel(rowStatus[i] || 'pending');
        const rm = document.createElement('button');
        rm.type = 'button';
        rm.className = 'btn btn-sm btn-outline-secondary';
        rm.textContent = M.remove;
        rm.disabled = busy;
        rm.addEventListener('click', () => {
          if (busy) return;
          queue.splice(i, 1);
          rowStatus.splice(i, 1);
          discard();
          renderQueue();
        });
        li.appendChild(name);
        li.appendChild(st);
        li.appendChild(rm);
        list.appendChild(li);
      });
      $('bcmkQueueMeta').textContent = fill(M.queue_count, { n: queue.length });
      $('bcmkName').textContent = queue.length ? fill(M.queue_count, { n: queue.length }) : '';
      empty.hidden = queue.length > 0;
    }
    function addFiles(fileList){
      const files = Array.from(fileList || []);
      if (!files.length) return;
      discard();
      for (const file of files){
        if (queue.length >= BATCH_MAX_FILES) { fail('err_too_many'); break; }
        if (!isMkv(file)) { fail('err_format'); continue; }
        if (file.size > engineMaxBytes) { fail('err_limit'); continue; }
        queue.push(file);
        rowStatus.push('pending');
      }
      renderQueue();
    }
    async function ensureEngine(){
      if (convertMod) return convertMod;
      progress(3, 'load');
      await yieldUi();
      convertMod = await import('/vendor/mediabunny/mkv-to-mp4-loader.js');
      if (!convertMod || typeof convertMod.convertMkvToMp4 !== 'function') throw Error('err_engine');
      if (typeof convertMod.getConvertCapabilities === 'function') {
        try {
          const caps = await convertMod.getConvertCapabilities();
          if (caps && caps.maxBytes) engineMaxBytes = caps.maxBytes;
        } catch (_) {}
      }
      return convertMod;
    }
    function loadJsZip(){
      if (zipPromise) return zipPromise;
      zipPromise = new Promise((resolve, reject) => {
        if (window.JSZip) { resolve(window.JSZip); return; }
        const script = document.createElement('script');
        script.src = ZIP_SRC;
        script.async = true;
        script.onload = () => {
          if (!window.JSZip) { reject(Error('err_zip')); return; }
          resolve(window.JSZip);
        };
        script.onerror = () => reject(Error('err_zip'));
        document.head.appendChild(script);
      });
      return zipPromise;
    }
    function stemName(name){
      return String(name || 'video').replace(/\\.[^.]+$/, '') || 'video';
    }
    function stopBatch(){
      stopRequested = true;
      if (fileAbort) {
        try { fileAbort.abort(); } catch (_) {}
      }
    }
    async function convert(){
      if (busy) return;
      discard();
      if (!queue.length) { fail('empty'); return; }
      stopRequested = false;
      for (let i = 0; i < rowStatus.length; i++) rowStatus[i] = 'pending';
      renderQueue();
      lock(true);
      hud.hidden = false;
      hud.className = 'bcw-hud is-on mb-3';
      hud.setAttribute('role', 'status');
      started = performance.now();
      const clock = () => { $('bcmkTime').textContent = fill(M.elapsed, { s: ((performance.now() - started) / 1000).toFixed(1) }); };
      clock();
      timer = setInterval(clock, 100);
      let ok = 0;
      let failCount = 0;
      try {
        if (queue.length > BATCH_MAX_FILES) throw Error('err_too_many');
        const mod = await ensureEngine();
        const JSZip = await loadJsZip();
        const zip = new JSZip();
        const total = queue.length;
        const ch = Number(channels.value) === 1 ? 1 : 2;
        const q = ['low', 'medium', 'high'].includes(quality.value) ? quality.value : 'high';
        for (let i = 0; i < total; i++){
          if (stopRequested){
            for (let j = i; j < total; j++){
              if (rowStatus[j] === 'pending') rowStatus[j] = 'stopped';
            }
            renderQueue();
            break;
          }
          const file = queue[i];
          rowStatus[i] = 'running';
          renderQueue();
          $('bcmkCurrent').textContent = file.name + ' (' + (i + 1) + '/' + total + ')';
          const base = 5 + (88 * i) / total;
          progress(base, 'read');
          await yieldUi();
          fileAbort = typeof AbortController !== 'undefined' ? new AbortController() : null;
          try {
            if (!file || !isMkv(file)) throw Error('err_format');
            if (file.size > engineMaxBytes) throw Error('err_limit');
            progress(base + 2, 'decode');
            const result = await mod.convertMkvToMp4(file, {
              numberOfChannels: ch,
              quality: q,
              signal: fileAbort ? fileAbort.signal : undefined,
              onProgress: (ratio) => {
                const r = Math.max(0, Math.min(1, Number(ratio) || 0));
                progress(base + 2 + r * 18, r < 0.55 ? 'decode' : 'encode');
              },
            });
            const outBlob = result && result.blob
              ? result.blob
              : (result && result.buffer ? new Blob([result.buffer], { type: 'video/mp4' }) : null);
            if (!outBlob || !outBlob.size) throw Error('err_encoder');
            let entry = stemName(file.name) + '.mp4';
            let n = 2;
            while (zip.file(entry)){
              entry = stemName(file.name) + '-' + n + '.mp4';
              n++;
            }
            zip.file(entry, outBlob);
            if (typeof result.cleanup === 'function') {
              try { await result.cleanup(); } catch (_) {}
            }
            rowStatus[i] = 'ok';
            ok++;
          } catch (e) {
            const code = e && e.code ? e.code : (e && e.message ? e.message : '');
            if (code === 'err_aborted' || (e && e.name === 'AbortError') || stopRequested || (fileAbort && fileAbort.signal && fileAbort.signal.aborted)){
              rowStatus[i] = 'stopped';
            } else {
              rowStatus[i] = 'fail';
              failCount++;
              $('bcmkCurrent').textContent = file.name + ': ' + (M[code] || M.failed);
            }
          } finally {
            fileAbort = null;
            renderQueue();
            await yieldUi();
          }
        }
        if (!ok) throw Error(stopRequested ? 'status_stopped' : 'failed');
        progress(96, 'pack');
        await yieldUi();
        const zipBlob = await zip.generateAsync({ type: 'blob' });
        if (!zipBlob.size) throw Error('err_zip');
        outputUrl = URL.createObjectURL(zipBlob);
        $('bcmkOutput').hidden = false;
        empty.hidden = true;
        $('bcmkResult').textContent = failCount || stopRequested
          ? fill(M.partial, { ok, fail: failCount, output: (zipBlob.size / 1024).toFixed(1) })
          : fill(M.result, { n: ok, output: (zipBlob.size / 1024).toFixed(1) });
        progress(100, 'done');
        hud.classList.remove('is-on');
        hud.classList.add('is-done');
        $('bcmkStep').textContent = M.done;
      } catch (e) {
        discard();
        const msg = e && e.message ? e.message : '';
        fail(e && M[msg] ? msg : 'failed');
      } finally {
        clearInterval(timer);
        clock();
        stopRequested = false;
        fileAbort = null;
        lock(false);
      }
    }
    async function loadSample(){
      if (busy) return;
      try {
        const res = await fetch(SAMPLE_URL, { credentials: 'same-origin' });
        if (!res.ok) throw Error('err_sample');
        const blob = await res.blob();
        if (!blob.size) throw Error('err_sample');
        channels.value = '2';
        quality.value = 'high';
        queue = [
          new File([blob], M.sample_name + '-a.mkv', { type: 'video/x-matroska' }),
          new File([blob], M.sample_name + '-b.mkv', { type: 'video/x-matroska' }),
        ];
        rowStatus = ['pending', 'pending'];
        discard();
        renderQueue();
        await convert();
      } catch (e) {
        queue = [];
        rowStatus = [];
        renderQueue();
        fail(e && M[e.message] ? e.message : 'err_sample');
      }
    }
    fileInput.addEventListener('change', () => {
      /* FileList 是活引用：须先拷成数组，再清空 value，否则队列永远为空 */
      const files = Array.from(fileInput.files || []);
      fileInput.value = '';
      if (!files.length) return;
      addFiles(files);
    });
    $('bcmkDrop').addEventListener('dragover', (event) => event.preventDefault());
    $('bcmkDrop').addEventListener('drop', (event) => {
      event.preventDefault();
      if (busy) return;
      const files = event.dataTransfer && event.dataTransfer.files;
      if (!files || !files.length) { fail('err_file'); return; }
      addFiles(files);
    });
    channels.addEventListener('change', () => { discard(); });
    quality.addEventListener('change', () => { discard(); });
    $('bcmkConvert').addEventListener('click', convert);
    $('bcmkSample').addEventListener('click', loadSample);
    $('bcmkClear').addEventListener('click', () => {
      if (busy) return;
      queue = [];
      rowStatus = [];
      discard();
      hud.hidden = true;
      renderQueue();
    });
    $('bcmkStop').addEventListener('click', stopBatch);
    $('bcmkDownload').addEventListener('click', () => {
      if (!outputUrl || busy) return;
      const link = document.createElement('a');
      link.href = outputUrl;
      link.download = 'mkv-to-mp4-batch.zip';
      document.body.appendChild(link);
      link.click();
      link.remove();
    });
    window.addEventListener('pagehide', () => {
      clearInterval(timer);
      stopBatch();
      if (outputUrl) URL.revokeObjectURL(outputUrl);
    });
    renderQueue();
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
	});
};
