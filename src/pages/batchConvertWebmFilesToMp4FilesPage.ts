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
const P = 'tool_batch_convert_webm_files_to_mp4_files';

/** 工具 slug。 */
const SLUG = 'batch-convert-webm-files-to-mp4-files';

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
 * 渲染批量 WebM→H.264/AAC MP4 页；每个产物独立保留和下载。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderBatchConvertWebmFilesToMp4FilesPage = (opts: {
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
			currentAnchor: '#batch-webm-mp4',
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
		'err_no_avc',
		'err_total_limit',
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
		'download_one',
		'retry',
		'no_audio',
	];
	const messages = Object.fromEntries(uiKeys.map((key) => [key, t(opts.lang, `${P}_${key}`)]));

	const contentHtml = `
    <div id="batch-convert-webm" class="tool-page-heading mb-3"><h1 class="h4">${tr('title')}</h1><p>${tr('desc')}</p></div>
    <section class="tool-panel" id="bcwmPanel">
      <label class="tool-dropzone mb-3" id="bcwmDrop" for="bcwmFile"><input id="bcwmFile" type="file" multiple accept=".webm,video/webm"><span class="tool-dropzone-title">${tr('choose')}</span><span class="tool-dropzone-hint">${tr('hint')}</span><span id="bcwmName" class="tool-dropzone-file"></span></label>
      <p class="form-label mb-1">${tr('list_label')}</p>
      <ul id="bcwmList" class="list-group mb-2 bcwm-list" aria-live="polite"></ul>
      <p id="bcwmQueueMeta" class="form-text mb-3">${tr('queue_count').replace('{n}', '0')}</p>
      <div class="tools-bar d-flex flex-wrap mb-3" style="gap:.5rem">
        <button id="bcwmConvert" class="btn btn-primary" type="button">${tr('convert')}</button>
        <button id="bcwmDownload" class="btn btn-outline-primary" type="button" disabled>${tr('download')}</button>
        <button id="bcwmStop" class="btn btn-outline-secondary" type="button" disabled>${tr('stop')}</button>
        <button id="bcwmSample" class="btn btn-outline-secondary" type="button">${tr('sample')}</button>
        <button id="bcwmClear" class="btn btn-outline-secondary" type="button">${tr('clear')}</button>
      </div>
      <details class="mb-3"><summary>${tr('advanced')}</summary>
        <label for="bcwmChannels" class="form-label mt-2">${tr('channels_label')}</label>
        <select id="bcwmChannels" class="form-select form-select-sm mb-2"><option value="2" selected>${tr('channels_stereo')}</option><option value="1">${tr('channels_mono')}</option></select>
        <label for="bcwmQuality" class="form-label">${tr('quality_label')}</label>
        <select id="bcwmQuality" class="form-select form-select-sm"><option value="high" selected>${tr('quality_high')}</option><option value="medium">${tr('quality_medium')}</option><option value="low">${tr('quality_low')}</option></select>
        <p class="form-text mt-2">${tr('settings_hint')}</p>
      </details>
      <div id="bcwmHud" class="bcw-hud mb-3" role="status" aria-live="polite" hidden>
        <div class="bcw-hud-top"><div class="bcw-hud-spin" aria-hidden="true"></div><div class="bcw-hud-pct" id="bcwmPct">0%</div><div class="bcw-hud-copy"><div class="bcw-hud-title">${tr('progress')}</div><div class="bcw-hud-step" id="bcwmStep"></div><div class="bcw-hud-time" id="bcwmTime"></div></div></div>
        <div class="progress" style="height:1.35rem"><div id="bcwmBar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div><span class="bcw-hud-sheen" aria-hidden="true"></span></div>
        <ol class="bcw-hud-steps"><li data-step="load">${tr('load')}</li><li data-step="read">${tr('read')}</li><li data-step="decode">${tr('decode')}</li><li data-step="encode">${tr('encode')}</li><li data-step="pack">${tr('pack')}</li></ol><div class="bcw-hud-url" id="bcwmCurrent"></div>
      </div>
      <div id="bcwmEmpty" class="bcwm-empty mb-3" role="status">${tr('empty_state')}</div>
      <div id="bcwmOutput" hidden><h2 class="h5">${tr('preview')}</h2><p id="bcwmResult"></p></div>
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
	const extraHeadHtml = `<style>${bcwHudCss({ hudId: 'bcwmHud', convertBtnId: 'bcwmConvert' })}#bcwmHud.is-error{border-color:#b91c1c;background:#fff1f2}#bcwmHud:not(.is-on) .bcw-hud-spin{animation:none}#bcwmChannels,#bcwmQuality{max-width:18rem}.bcwm-list{gap:.35rem}.bcwm-list .list-group-item{display:flex;flex-wrap:wrap;align-items:center;gap:.4rem}.bcwm-list .bcwm-name{flex:1 1 10rem;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.bcwm-list .bcwm-status{font-size:.85rem;color:var(--bs-secondary-color,#6c757d)}.bcwm-list .bcwm-status.is-ok{color:#15803d}.bcwm-list .bcwm-status.is-fail{color:#b91c1c}.bcwm-empty{padding:.75rem 1rem;border:1px dashed var(--border,#ced4da);border-radius:.5rem;color:var(--bs-secondary-color,#6c757d);font-size:.95rem}.site-footer nav.d-inline{display:inline-flex!important;flex-wrap:wrap;justify-content:center;max-width:100%}</style>`;

	const extraBodyHtml = `<script>
  (function(){
    'use strict';
    const M = ${JSON.stringify(messages).replace(/</g, '\\u003c')};
    const MAX_BYTES = 80 * 1024 * 1024;
    const MEMORY_RESULTS_MAX_BYTES = 128 * 1024 * 1024;
    const BATCH_MAX_FILES = 20;
    const SAMPLE_URL = '/samples/convert-a-webm-file-to-an-mp4-file.webm';
    const $ = (id) => document.getElementById(id);
    const panel = $('bcwmPanel'), fileInput = $('bcwmFile'), channels = $('bcwmChannels'), quality = $('bcwmQuality');
    const hud = $('bcwmHud'), empty = $('bcwmEmpty');
    let queue = [], rowStatus = [], rowErrors = [], output = [], busy = false, stopRequested = false, timer = 0, started = 0;
    let fileAbort = null, convertMod = null, sampleEpoch = 0;
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
    function isWebm(file){
      if (!file) return false;
      const name = String(file.name || '').toLowerCase();
      const type = String(file.type || '').toLowerCase();
      return name.endsWith('.webm') || type.indexOf('webm') !== -1;
    }
    async function discard(){
      const old = output;
      output = [];
      rowStatus = queue.map(() => 'pending');
      $('bcwmDownload').disabled = true;
      $('bcwmOutput').hidden = true;
      empty.hidden = queue.length > 0;
      renderQueue();
      for (const item of old) {
        if (!item) continue;
        if (item.url) URL.revokeObjectURL(item.url);
        if (item.cleanup) { try { await item.cleanup(); } catch (_) {} }
      }
    }
    function lock(on){
      busy = on;
      panel.querySelectorAll('button,input,select').forEach((el) => {
        if (el.id === 'bcwmStop') { el.disabled = !on; return; }
        if (el.id === 'bcwmDownload') { el.disabled = on || !output.some(Boolean); return; }
        el.disabled = on;
      });
      $('bcwmConvert').setAttribute('aria-busy', String(on));
    }
    function progress(pct, step){
      $('bcwmPct').textContent = Math.round(pct) + '%';
      $('bcwmBar').style.width = pct + '%';
      $('bcwmBar').setAttribute('aria-valuenow', String(Math.round(pct)));
      $('bcwmStep').textContent = M[step] || step;
      hud.querySelectorAll('.bcw-hud-steps li').forEach((li) => {
        const key = li.getAttribute('data-step');
        li.classList.toggle('is-active', key === step);
        li.classList.toggle('is-done', ['load','read','decode','encode','pack','done'].indexOf(key) < ['load','read','decode','encode','pack','done'].indexOf(step));
      });
    }
    function fail(key){
      hud.hidden = false;
      hud.className = 'bcw-hud mb-3 is-error is-fail';
      $('bcwmPct').textContent = '—';
      $('bcwmBar').style.width = '0%';
      $('bcwmBar').setAttribute('aria-valuenow', '0');
      $('bcwmStep').textContent = M[key] || M.failed;
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
      const list = $('bcwmList');
      list.innerHTML = '';
      queue.forEach((file, i) => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        const name = document.createElement('span');
        name.className = 'bcwm-name';
        name.textContent = file.name;
        const st = document.createElement('span');
        st.className = 'bcwm-status' + (rowStatus[i] === 'ok' ? ' is-ok' : (rowStatus[i] === 'fail' ? ' is-fail' : ''));
        st.textContent = output[i]
          ? statusLabel('ok') + ' · ' + output[i].report
          : statusLabel(rowStatus[i] || 'pending') + (rowStatus[i] === 'fail' && rowErrors[i] ? ' · ' + rowErrors[i] : '');
        if (output[i]) {
          const dl = document.createElement('button');
          dl.type = 'button';
          dl.className = 'btn btn-sm btn-outline-primary';
          dl.textContent = M.download_one;
          dl.disabled = busy;
          dl.addEventListener('click', () => downloadOne(i));
          li.appendChild(dl);
        }
        const rm = document.createElement('button');
        rm.type = 'button';
        rm.className = 'btn btn-sm btn-outline-secondary';
        rm.textContent = M.remove;
        rm.disabled = busy;
        rm.addEventListener('click', async () => {
          if (busy) return;
          sampleEpoch++;
          const old = output[i];
          queue.splice(i, 1);
          rowStatus.splice(i, 1);
          rowErrors.splice(i, 1);
          output.splice(i, 1);
          renderQueue();
          if (old && old.url) URL.revokeObjectURL(old.url);
          if (old && old.cleanup) { try { await old.cleanup(); } catch (_) {} }
        });
        li.appendChild(name);
        li.appendChild(st);
        li.appendChild(rm);
        list.appendChild(li);
      });
      $('bcwmQueueMeta').textContent = fill(M.queue_count, { n: queue.length });
      $('bcwmName').textContent = queue.length ? fill(M.queue_count, { n: queue.length }) : '';
      empty.hidden = queue.length > 0;
      $('bcwmDownload').disabled = busy || !output.some(Boolean);
    }
    function addFiles(fileList){
      const files = Array.from(fileList || []);
      if (!files.length) return;
      sampleEpoch++;
      for (const file of files){
        if (queue.length >= BATCH_MAX_FILES) { fail('err_too_many'); break; }
        if (!isWebm(file)) { fail('err_format'); continue; }
        queue.push(file);
        rowStatus.push('pending');
        rowErrors.push('');
      }
      renderQueue();
    }
    async function ensureEngine(){
      if (convertMod) return convertMod;
      progress(3, 'load');
      await yieldUi();
      convertMod = await import('/vendor/mediabunny/mkv-to-mp4-loader.js');
      if (!convertMod || typeof convertMod.convertMkvToMp4 !== 'function' || typeof convertMod.inspectVideoFile !== 'function') throw Error('err_engine');
      if (typeof convertMod.getConvertCapabilities === 'function') {
        try {
          const caps = await convertMod.getConvertCapabilities();
          engineMaxBytes = caps && caps.opfs ? 500 * 1024 * 1024 : 80 * 1024 * 1024;
        } catch (_) {}
      }
      return convertMod;
    }
    function stemName(name){
      return String(name || 'video').replace(/\\.[^.]+$/, '') || 'video';
    }
    function downloadOne(i){
      const item = output[i];
      if (!item || busy) return;
      const link = document.createElement('a');
      link.href = item.url;
      link.download = item.name;
      document.body.appendChild(link);
      link.click();
      link.remove();
    }
    function stopBatch(){
      stopRequested = true;
      if (fileAbort) {
        try { fileAbort.abort(); } catch (_) {}
      }
    }
    async function convert(){
      if (busy) return;
      sampleEpoch++;
      if (!queue.length) { fail('empty'); return; }
      stopRequested = false;
      for (let i = 0; i < rowStatus.length; i++) if (!output[i]) rowStatus[i] = 'pending';
      renderQueue();
      lock(true);
      hud.hidden = false;
      hud.className = 'bcw-hud is-on mb-3';
      hud.setAttribute('role', 'status');
      started = performance.now();
      const clock = () => { $('bcwmTime').textContent = fill(M.elapsed, { s: ((performance.now() - started) / 1000).toFixed(1) }); };
      clock();
      timer = setInterval(clock, 100);
      let ok = output.filter(Boolean).length;
      let failCount = 0;
      try {
        if (queue.length > BATCH_MAX_FILES) throw Error('err_too_many');
        const mod = await ensureEngine();
        const total = queue.length;
        const ch = Number(channels.value) === 1 ? 1 : 2;
        const q = ['low', 'medium', 'high'].includes(quality.value) ? quality.value : 'high';
        for (let i = 0; i < total; i++){
          if (output[i]) continue;
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
          $('bcwmCurrent').textContent = file.name + ' (' + (i + 1) + '/' + total + ')';
          const base = 5 + (88 * i) / total;
          progress(base, 'read');
          await yieldUi();
          fileAbort = typeof AbortController !== 'undefined' ? new AbortController() : null;
          let pendingCleanup = null;
          try {
            if (!file || !isWebm(file)) throw Error('err_format');
            if (file.size > engineMaxBytes) throw Error('err_limit');
            progress(base + 2, 'decode');
            let source;
            try { source = await mod.inspectVideoFile(file); } catch (_) { throw Error('err_container'); }
            if (!source || !source.videoCodec) throw Error('err_container');
            if (!String(source.mimeType || '').includes('webm')) throw Error('err_format');
            if (!source.canEncodeAvc) throw Error('err_no_avc');
            const result = await mod.convertMkvToMp4(file, {
              videoCodec: 'avc',
              preferOpfs: true,
              keepOpfsOutput: true,
              numberOfChannels: ch,
              quality: q,
              signal: fileAbort ? fileAbort.signal : undefined,
              onProgress: (ratio) => {
                const r = Math.max(0, Math.min(1, Number(ratio) || 0));
                progress(base + 2 + r * (88 / total), r < 0.55 ? 'decode' : 'encode');
              },
            });
            pendingCleanup = typeof result.cleanup === 'function' ? result.cleanup : null;
            const outBlob = result && result.blob
              ? result.blob
              : (result && result.buffer ? new Blob([result.buffer], { type: 'video/mp4' }) : null);
            if (!outBlob || !outBlob.size) throw Error('err_encoder');
            if (result.via !== 'opfs' && outBlob.size + output.reduce((n, item) => n + (item && item.via !== 'opfs' ? item.size : 0), 0) > MEMORY_RESULTS_MAX_BYTES) {
              throw Error('err_total_limit');
            }
            let actual;
            try { actual = await mod.inspectVideoFile(outBlob); } catch (_) { throw Error('err_codec'); }
            if (actual.videoCodec !== 'avc' || !String(actual.mimeType || '').includes('mp4') ||
                (source.audioCodec !== 'none' && actual.audioCodec !== 'aac') ||
                (source.audioCodec === 'none' && actual.audioCodec !== 'none') ||
                (source.duration > 0 && actual.duration > 0 &&
                 Math.abs(actual.duration - source.duration) > Math.max(0.5, source.duration * 0.05))) {
              throw Error('err_codec');
            }
            let entry = stemName(file.name) + '.mp4';
            let n = 2;
            while (output.some((item) => item && item.name === entry)){
              entry = stemName(file.name) + '-' + n + '.mp4';
              n++;
            }
            output[i] = {
              name: entry,
              url: URL.createObjectURL(outBlob),
              cleanup: pendingCleanup,
              via: result.via,
              size: outBlob.size,
              report: source.videoCodec + '/' + (source.audioCodec === 'none' ? M.no_audio : source.audioCodec) +
                ' → H.264/' + (actual.audioCodec === 'none' ? M.no_audio : 'AAC') +
                ' · ' + source.width + '×' + source.height + ' · ' + Number(source.duration || 0).toFixed(2) + 's' +
                ' · ' + (file.size / 1048576).toFixed(1) + '→' + (outBlob.size / 1048576).toFixed(1) + ' MiB',
            };
            pendingCleanup = null;
            rowStatus[i] = 'ok';
            rowErrors[i] = '';
            ok++;
          } catch (e) {
            if (pendingCleanup) { try { await pendingCleanup(); } catch (_) {} }
            const code = e && e.code ? e.code : (e && e.message ? e.message : '');
            if (code === 'err_aborted' || (e && e.name === 'AbortError') || stopRequested || (fileAbort && fileAbort.signal && fileAbort.signal.aborted)){
              rowStatus[i] = 'stopped';
            } else {
              rowStatus[i] = 'fail';
              failCount++;
              rowErrors[i] = M[code] || M.failed;
              $('bcwmCurrent').textContent = file.name + ': ' + rowErrors[i];
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
        $('bcwmOutput').hidden = false;
        empty.hidden = true;
        $('bcwmResult').textContent = failCount || stopRequested
          ? fill(M.partial, { ok, fail: failCount })
          : fill(M.result, { n: ok });
        progress(100, 'done');
        hud.classList.remove('is-on');
        hud.classList.add('is-done');
        $('bcwmStep').textContent = M.done;
      } catch (e) {
        const msg = e && e.message ? e.message : '';
        fail(e && M[msg] ? msg : 'failed');
      } finally {
        clearInterval(timer);
        clock();
        stopRequested = false;
        fileAbort = null;
        lock(false);
        renderQueue();
      }
    }
    async function loadSample(){
      if (busy) return;
      const epoch = ++sampleEpoch;
      try {
        await discard();
        const res = await fetch(SAMPLE_URL, { credentials: 'same-origin' });
        if (!res.ok) throw Error('err_sample');
        const blob = await res.blob();
        if (!blob.size) throw Error('err_sample');
        if (epoch !== sampleEpoch) return;
        channels.value = '2';
        quality.value = 'high';
        queue = [
          new File([blob], M.sample_name + '.webm', { type: 'video/webm' }),
          new File([blob], M.sample_name + '.webm', { type: 'video/webm' }),
        ];
        rowStatus = ['pending', 'pending'];
        rowErrors = ['', ''];
        renderQueue();
        await convert();
      } catch (e) {
        if (epoch !== sampleEpoch) return;
        queue = [];
        rowStatus = [];
        rowErrors = [];
        renderQueue();
        fail(e && M[e.message] ? e.message : 'err_sample');
      }
    }
    fileInput.addEventListener('change', () => {
      /* FileList 是活引用：须先拷成数组，再清空 value，否则队列永远为空 */
      const files = Array.from(fileInput.files || []);
      fileInput.value = '';
      if (!files.length) return;
      void addFiles(files);
    });
    $('bcwmDrop').addEventListener('dragover', (event) => event.preventDefault());
    $('bcwmDrop').addEventListener('drop', (event) => {
      event.preventDefault();
      if (busy) return;
      const files = event.dataTransfer && event.dataTransfer.files;
      if (!files || !files.length) { fail('err_file'); return; }
      void addFiles(files);
    });
    channels.addEventListener('change', () => { void discard(); });
    quality.addEventListener('change', () => { void discard(); });
    $('bcwmConvert').addEventListener('click', convert);
    $('bcwmSample').addEventListener('click', loadSample);
    $('bcwmClear').addEventListener('click', () => {
      if (busy) return;
      sampleEpoch++;
      queue = [];
      rowStatus = [];
      rowErrors = [];
      void discard();
      hud.hidden = true;
      renderQueue();
    });
    $('bcwmStop').addEventListener('click', stopBatch);
    $('bcwmDownload').addEventListener('click', () => {
      const first = output.findIndex(Boolean);
      if (first >= 0) downloadOne(first);
    });
    window.addEventListener('pagehide', () => {
      clearInterval(timer);
      stopBatch();
      void discard();
    });
    renderQueue();
    void loadSample();
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
