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
const P = 'tool_batch_convert_audio_files_to_mp3';

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
 * 批量把本地 WAV 转成 MP3 并打成 ZIP（hub A8）。
 * 管线：多文件队列 → 每文件 inspectWav / decodeAudioData / lamejs → JSZip。
 * ≠ 单文件 WAV→MP3；≠ FLAC/OGG 批量矩阵。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderBatchConvertAudioFilesToMp3Page = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 工具规范路径（无语言前缀）。 */
	const toolPath = '/tools/batch-convert-audio-files-to-mp3';
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

	/** 侧栏 HTML（当前工具高亮）。 */
	const sidebarHtml = renderSidebar({
		title: t(opts.lang, 'nav_tools'),
		groups: buildToolSidebarItems({
			lang: opts.lang,
			defaultLang: opts.defaultLang,
			currentSlug: 'batch-convert-audio-files-to-mp3',
			currentAnchor: '#batch-audio-mp3',
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
		'stop',
		'retry',
		'pending',
		'working',
		'ready',
		'stopped',
		'done',
		'failed',
		'elapsed',
		'err_file',
		'err_format',
		'err_limit',
		'err_decode',
		'err_encoder',
		'err_output',
		'err_sample',
		'row_result',
		'err_too_many',
		'sample_name',
		'result',
		'empty',
		'remove',
		'queue_count',
		'download',
	];
	/** 消息字典：键 → 当前语言字符串。 */
	const messages = Object.fromEntries(uiKeys.map((key) => [key, t(opts.lang, `${P}_${key}`)]));

	/** 工具主面板与结果区 markup。 */
	const contentHtml = `
    <div id="batch-audio-mp3" class="tool-page-heading mb-3"><h1 class="h4">${tr('title')}</h1><p>${tr('desc')}</p></div>
    <section class="tool-panel" id="baPanel">
      <label class="tool-dropzone mb-3" id="baDrop" for="baFile"><input id="baFile" type="file" multiple accept=".m4a,.flac,.ogg,.oga,.wav,.wave,audio/*"><span class="tool-dropzone-title">${tr('choose')}</span><span class="tool-dropzone-hint">${tr('hint')}</span><span id="baName" class="tool-dropzone-file"></span></label>
      <p class="form-label mb-1">${tr('list_label')}</p>
      <ul id="baList" class="list-group mb-2 ba-list" aria-live="polite"></ul>
      <p id="baQueueMeta" class="form-text mb-3">${tr('queue_count').replace('{n}', '0')}</p>
      <div class="tools-bar d-flex flex-wrap mb-3" style="gap:.5rem">
        <button id="baConvert" class="btn btn-primary" type="button">${tr('convert')}</button>
        <button id="baStop" class="btn btn-outline-secondary" type="button" disabled>${tr('stop')}</button>
        <button id="baRetry" class="btn btn-outline-secondary" type="button" disabled>${tr('retry')}</button>
        <button id="baSample" class="btn btn-outline-secondary" type="button">${tr('sample')}</button>
        <button id="baClear" class="btn btn-outline-secondary" type="button">${tr('clear')}</button>
      </div>
      <details class="mb-3"><summary>${tr('advanced')}</summary><label for="baBitrate" class="form-label mt-2">${tr('bitrate')}</label><select id="baBitrate" class="form-select form-select-sm"><option value="128">128 kbps</option><option value="192" selected>192 kbps</option><option value="320">320 kbps</option></select><p class="form-text">${tr('settings_hint')}</p></details>
      <div id="baHud" class="bcw-hud mb-3" role="status" aria-live="polite" hidden>
        <div class="bcw-hud-top"><div class="bcw-hud-spin" aria-hidden="true"></div><div class="bcw-hud-pct" id="baPct">0%</div><div class="bcw-hud-copy"><div class="bcw-hud-title">${tr('progress')}</div><div class="bcw-hud-step" id="baStep"></div><div class="bcw-hud-time" id="baTime"></div></div></div>
        <div class="progress" style="height:1.35rem"><div id="baBar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div><span class="bcw-hud-sheen" aria-hidden="true"></span></div>
        <ol class="bcw-hud-steps"><li data-step="read">${tr('read')}</li><li data-step="decode">${tr('decode')}</li><li data-step="encode">${tr('encode')}</li></ol><div class="bcw-hud-url" id="baCurrent"></div>
      </div>
      <div id="baEmpty" class="ba-empty mb-3" role="status">${tr('empty_state')}</div>
      <div id="baOutput" hidden><h2 class="h5">${tr('preview')}</h2><p id="baResult"></p></div>
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
				label: 'MDN: decodeAudioData',
				href: 'https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/decodeAudioData',
			},
		],
	});

	/** 金标 HUD、队列列表与布局补充样式。 */
	const extraHeadHtml = `<style>${bcwHudCss({ hudId: 'baHud', convertBtnId: 'baConvert' })}#baHud.is-error{border-color:#b91c1c;background:#fff1f2}#baHud:not(.is-on) .bcw-hud-spin{animation:none}#baBitrate{max-width:18rem}.ba-list{gap:.35rem}.ba-list .list-group-item{display:flex;flex-wrap:wrap;align-items:center;gap:.4rem}.ba-list .ba-name{flex:1 1 10rem;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ba-empty{padding:.75rem 1rem;border:1px dashed var(--border,#ced4da);border-radius:.5rem;color:var(--bs-secondary-color,#6c757d);font-size:.95rem}.site-footer nav.d-inline{display:inline-flex!important;flex-wrap:wrap;justify-content:center;max-width:100%}</style>`;

	/** 客户端批量转换管线：逐文件读、解码、编码、独立下载。 */
	const extraBodyHtml = `<script>
  (function(){
    'use strict';
    const M = ${JSON.stringify(messages).replace(/</g, '\\u003c')};
    const $ = id => document.getElementById(id);
    const panel = $('baPanel'), fileInput = $('baFile'), hud = $('baHud');
    const rows = [];
    const MAX_FILES = 20, MAX_BYTES = 40 * 1024 * 1024, MAX_SEC = 600;
    const MAX_OUTPUT_BYTES = 96 * 1024 * 1024;
    const storageName = 'batch-audio-mp3-' + Date.now() + '-' + Math.random().toString(36).slice(2);
    let storagePromise = null;
    let busy = false, stopRequested = false, encoderPromise = null, started = 0, timer = 0;
    const yieldUi = () => new Promise(resolve => requestAnimationFrame(() => setTimeout(resolve, 0)));
    const fill = (value, vars) => value.replace(/{(\\w+)}/g, (_, key) => String(vars[key] ?? ''));
    const errorText = key => M[key] || M.failed;
    const fmtSize = bytes => (bytes / 1024).toFixed(1);
    function statusText(row){
      if(row.status === 'ready') return M.ready + ' · ' + fill(M.row_result, {
        seconds: row.seconds.toFixed(2), input: fmtSize(row.file.size), output: fmtSize(row.outputBytes)
      });
      if(row.status === 'failed') return errorText(row.error);
      return M[row.status] || M.pending;
    }
    function renderRows(){
      const list = $('baList'); list.replaceChildren();
      rows.forEach((row, index) => {
        const li = document.createElement('li'); li.className = 'list-group-item';
        li.dataset.status = row.status;
        const name = document.createElement('strong'); name.className = 'ba-name'; name.textContent = row.file.name;
        const status = document.createElement('span'); status.className = 'small'; status.textContent = statusText(row);
        li.append(name, status);
        if(row.status === 'ready'){
          const save = document.createElement('button'); save.type = 'button';
          save.className = 'btn btn-sm btn-outline-primary'; save.textContent = M.download;
          save.addEventListener('click', () => downloadRow(row)); li.appendChild(save);
        }
        const remove = document.createElement('button'); remove.type = 'button';
        remove.className = 'btn btn-sm btn-outline-secondary'; remove.textContent = M.remove;
        remove.disabled = busy; remove.addEventListener('click', () => { releaseRow(row); rows.splice(index, 1); renderRows(); });
        li.appendChild(remove); list.appendChild(li);
      });
      $('baQueueMeta').textContent = fill(M.queue_count, {n: rows.length});
      $('baName').textContent = rows.length ? fill(M.queue_count, {n: rows.length}) : '';
      $('baEmpty').hidden = rows.length > 0;
      $('baRetry').disabled = busy || !rows.some(row => row.status === 'failed');
    }
    async function downloadRow(row){
      if(!row.blob && !row.handle) return;
      let file;
      try{ file = row.handle ? await row.handle.getFile() : row.blob; }
      catch{ showError('err_output'); return; }
      const url = URL.createObjectURL(file), link = document.createElement('a');
      link.href = url; link.download = row.outputName; document.body.appendChild(link);
      link.click(); link.remove(); setTimeout(() => URL.revokeObjectURL(url), 30000);
    }
    async function getStorage(){
      if(!navigator.storage?.getDirectory) return null;
      if(!storagePromise) storagePromise = navigator.storage.getDirectory()
        .then(root => root.getDirectoryHandle(storageName, {create:true})).catch(() => null);
      return storagePromise;
    }
    async function keepOutput(row, blob){
      const dir = row.sample ? null : await getStorage();
      if(dir){
        try{
          const handle = await dir.getFileHandle(row.outputName, {create:true});
          const writable = await handle.createWritable();
          await writable.write(blob); await writable.close();
          row.handle = handle; row.outputBytes = blob.size; return;
        }catch{
          try{ await dir.removeEntry(row.outputName); }catch{}
          /* Browsers without writable OPFS use the bounded memory path below. */
        }
      }
      const used = rows.reduce((sum, item) => sum + (item.blob?.size || 0), 0);
      if(used + blob.size > MAX_OUTPUT_BYTES) throw Error('err_output');
      row.blob = blob; row.outputBytes = blob.size;
    }
    async function releaseRow(row){
      row.blob = null;
      if(row.handle){
        const dir = await getStorage();
        try{ await dir?.removeEntry(row.outputName); }catch{}
        row.handle = null;
      }
    }
    function addFiles(files){
      if(busy) return;
      for(const file of Array.from(files || [])){
        if(rows.length >= MAX_FILES){ showError('err_too_many'); break; }
        rows.push({file, sample:false, status:'pending', blob:null, handle:null, outputBytes:0, error:'', seconds:0, outputName:''});
      }
      fileInput.value = ''; renderRows();
    }
    function progress(value, step){
      const pct = Math.max(0, Math.min(100, Math.round(value)));
      $('baPct').textContent = pct + '%'; $('baBar').style.width = pct + '%';
      $('baBar').setAttribute('aria-valuenow', String(pct)); $('baStep').textContent = M[step] || step;
      hud.querySelectorAll('[data-step]').forEach(el => el.classList.toggle('is-on', el.dataset.step === step));
    }
    function showError(key){
      hud.hidden = false; hud.className = 'bcw-hud is-error is-fail mb-3';
      hud.setAttribute('role', 'alert'); $('baStep').textContent = errorText(key);
    }
    function lock(on){
      busy = on;
      for(const id of ['baFile','baSample','baClear','baConvert','baBitrate']) $(id).disabled = on;
      $('baStop').disabled = !on; $('baRetry').disabled = on || !rows.some(row => row.status === 'failed');
      $('baConvert').setAttribute('aria-busy', String(on)); renderRows();
    }
    function inspect(file, bytes){
      const ext = (file.name.match(/\\.([^.]+)$/) || [,''])[1].toLowerCase();
      const u = new Uint8Array(bytes, 0, Math.min(bytes.byteLength, 16));
      const tag = at => String.fromCharCode(...u.slice(at, at + 4));
      const valid = (ext === 'flac' && tag(0) === 'fLaC') ||
        ((ext === 'ogg' || ext === 'oga') && tag(0) === 'OggS') ||
        (ext === 'm4a' && tag(4) === 'ftyp') ||
        ((ext === 'wav' || ext === 'wave') && tag(0) === 'RIFF' && tag(8) === 'WAVE');
      if(!valid) throw Error('err_format');
    }
    function loadEncoder(){
      if(window.lamejs && window.lamejs.Mp3Encoder) return Promise.resolve(window.lamejs);
      if(!encoderPromise) encoderPromise = new Promise((resolve, reject) => {
        const script = document.createElement('script'); let timeout;
        const bad = () => { clearTimeout(timeout); script.remove(); encoderPromise = null; reject(Error('err_encoder')); };
        script.src = '/vendor/lamejs/lamejs.iife.js'; script.onerror = bad;
        script.onload = () => { clearTimeout(timeout); window.lamejs?.Mp3Encoder ? resolve(window.lamejs) : bad(); };
        timeout = setTimeout(bad, 20000); document.head.appendChild(script);
      });
      return encoderPromise;
    }
    async function encode(decoded, kbps, lame, onProgress){
      const channels = decoded.numberOfChannels;
      if(![1,2].includes(channels)) throw Error('err_limit');
      const encoder = new lame.Mp3Encoder(channels, 44100, kbps), parts = [];
      const left = decoded.getChannelData(0), right = channels === 2 ? decoded.getChannelData(1) : null;
      const pcm = (data, start, end) => {
        const out = new Int16Array(end - start);
        for(let i = start; i < end; i++){
          const x = Number.isFinite(data[i]) ? Math.max(-1, Math.min(1, data[i])) : 0;
          out[i-start] = Math.round(x * (x < 0 ? 32768 : 32767));
        }
        return out;
      };
      let last = performance.now();
      for(let start = 0; start < decoded.length; start += 1152){
        const end = Math.min(start + 1152, decoded.length), l = pcm(left, start, end);
        const chunk = right ? encoder.encodeBuffer(l, pcm(right, start, end)) : encoder.encodeBuffer(l);
        if(chunk.length) parts.push(new Uint8Array(chunk));
        if(performance.now() - last > 40){ onProgress(end / decoded.length); await yieldUi(); last = performance.now(); }
      }
      const final = encoder.flush(); if(final.length) parts.push(new Uint8Array(final));
      const blob = new Blob(parts, {type:'audio/mpeg'}); if(!blob.size) throw Error('err_encoder');
      return blob;
    }
    function outputName(file){
      const stem = (file.name.replace(/\\.[^.]+$/, '') || 'audio').replace(/[^\\w\\u4e00-\\u9fff.-]+/g, '_');
      let name = stem + '.mp3', n = 2;
      while(rows.some(row => row.outputName === name)){ name = stem + '-' + n++ + '.mp3'; }
      return name;
    }
    async function convert(){
      if(busy) return;
      if(!rows.some(row => row.status === 'pending')){ showError('empty'); return; }
      stopRequested = false; lock(true); started = performance.now();
      hud.hidden = false; hud.className = 'bcw-hud is-on mb-3'; hud.setAttribute('role','status');
      const clock = () => { $('baTime').textContent = fill(M.elapsed, {s:((performance.now()-started)/1000).toFixed(1)}); };
      clock(); timer = setInterval(clock, 100);
      const pending = rows.filter(row => row.status === 'pending');
      let done = 0;
      try{
        const kbps = Number($('baBitrate').value);
        if(![128,192,320].includes(kbps)) throw Error('err_encoder');
        const Offline = window.OfflineAudioContext || window.webkitOfflineAudioContext;
        if(!Offline) throw Error('err_decode');
        const lame = await loadEncoder();
        for(const row of pending){
          if(stopRequested) break;
          row.status = 'working'; renderRows(); $('baCurrent').textContent = row.file.name + ' (' + (done + 1) + '/' + pending.length + ')';
          const base = done / pending.length * 100, span = 100 / pending.length;
          try{
            progress(base + span * .05, 'read'); await yieldUi();
            if(row.file.size > MAX_BYTES || !row.file.size) throw Error('err_limit');
            const bytes = await row.file.arrayBuffer(); inspect(row.file, bytes);
            progress(base + span * .18, 'decode'); await yieldUi();
            let decoded;
            try{ decoded = await new Offline(2, 1, 44100).decodeAudioData(bytes.slice(0)); }
            catch(e){ throw Error('err_decode'); }
            if(decoded.duration > MAX_SEC + .01 || ![1,2].includes(decoded.numberOfChannels)) throw Error('err_limit');
            progress(base + span * .28, 'encode'); await yieldUi();
            const seconds = decoded.duration;
            const blob = await encode(decoded, kbps, lame, fraction => progress(base + span * (.28 + fraction * .68), 'encode'));
            decoded = null;
            row.outputName = outputName(row.file);
            await keepOutput(row, blob);
            row.seconds = seconds; row.status = 'ready'; row.error = '';
          }catch(e){
            row.status = 'failed'; row.error = e && M[e.message] ? e.message : 'failed';
            await releaseRow(row); row.outputName = '';
          }
          done++; renderRows(); await yieldUi();
        }
        const ok = rows.filter(row => row.status === 'ready').length;
        const fail = rows.filter(row => row.status === 'failed').length;
        const remaining = rows.filter(row => row.status === 'pending').length;
        $('baOutput').hidden = false;
        $('baResult').textContent = fill(M.result, {ok, fail, pending:remaining, kbps});
        if(!ok) showError('failed');
        else { progress(stopRequested ? done / pending.length * 100 : 100, 'done'); hud.classList.remove('is-on'); hud.classList.add('is-done');
          if(stopRequested) $('baStep').textContent = M.stopped;
        }
      }catch(e){ showError(e && M[e.message] ? e.message : 'failed'); }
      finally{ clearInterval(timer); clock(); lock(false); }
    }
    async function loadSample(){
      if(busy) return;
      rows.forEach(releaseRow); rows.length = 0; lock(true); hud.hidden = false; hud.className = 'bcw-hud is-on mb-3'; progress(2, 'read');
      try{
        const sources = [
          ['/samples/convert-an-m4a-file-to-mp3.m4a','m4a','audio/mp4'],
          ['/samples/convert-a-flac-file-to-mp3.flac','flac','audio/flac']
        ];
        for(const [url, ext, type] of sources){
          const response = await fetch(url); if(!response.ok) throw Error('err_sample');
          rows.push({file:new File([await response.arrayBuffer()], M.sample_name + '-' + ext + '.' + ext, {type}), sample:true, status:'pending', blob:null, handle:null, outputBytes:0, error:'', seconds:0, outputName:''});
        }
        $('baBitrate').value = '192'; lock(false); await convert();
      }catch(e){ showError('err_sample'); } finally { lock(false); }
    }
    fileInput.addEventListener('change', () => addFiles(fileInput.files));
    $('baDrop').addEventListener('dragover', event => event.preventDefault());
    $('baDrop').addEventListener('drop', event => { event.preventDefault(); addFiles(event.dataTransfer.files); });
    $('baConvert').addEventListener('click', convert);
    $('baStop').addEventListener('click', () => { stopRequested = true; });
    $('baRetry').addEventListener('click', () => { for(const row of rows) if(row.status === 'failed'){ row.status = 'pending'; row.error = ''; } renderRows(); convert(); });
    $('baSample').addEventListener('click', loadSample);
    $('baClear').addEventListener('click', () => { if(busy) return; rows.forEach(releaseRow); rows.length = 0; renderRows(); hud.hidden = true; $('baOutput').hidden = true; });
    window.addEventListener('pagehide', () => { rows.forEach(releaseRow); });
    renderRows(); loadSample();
  })();
</script>`;
	/** 当前工具 catalog 元数据。 */
	const toolMeta = getToolBySlug('batch-convert-audio-files-to-mp3');
	/** related / article / FAQ 等扩展区块。 */
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
