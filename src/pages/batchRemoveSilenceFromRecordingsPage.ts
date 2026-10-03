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
const P = 'tool_batch_remove_silence_from_recordings';

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
 * 对每份浏览器可解码音频检测长静音并缩短，然后分别输出 PCM WAV。
 * 管线：格式签名 → 逐件解码、窗 RMS 检测 → 保留短间隔 → 分块 WAV 写出。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderBatchRemoveSilenceFromRecordingsPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 工具规范路径（无语言前缀）。 */
	const toolPath = '/tools/batch-remove-silence-from-recordings';
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
			currentSlug: 'batch-remove-silence-from-recordings',
			currentAnchor: '#batch-silence-audio',
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
		'detect',
		'write',
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
		'err_silence',
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
		'preview_audio',
		'silence_result',
	];
	/** 消息字典：键 → 当前语言字符串。 */
	const messages = Object.fromEntries(uiKeys.map((key) => [key, t(opts.lang, `${P}_${key}`)]));

	/** 工具主面板与结果区 markup。 */
	const contentHtml = `
    <div id="batch-silence-audio" class="tool-page-heading mb-3"><h1 class="h4">${tr('title')}</h1><p>${tr('desc')}</p></div>
    <section class="tool-panel" id="bnPanel">
      <label class="tool-dropzone mb-3" id="bnDrop" for="bnFile"><input id="bnFile" type="file" multiple accept=".mp3,.wav,.wave,.m4a,.flac,.ogg,.oga,audio/*"><span class="tool-dropzone-title">${tr('choose')}</span><span class="tool-dropzone-hint">${tr('hint')}</span><span id="bnName" class="tool-dropzone-file"></span></label>
      <p class="form-label mb-1">${tr('list_label')}</p>
      <ul id="bnList" class="list-group mb-2 bn-list" aria-live="polite"></ul>
      <p id="bnQueueMeta" class="form-text mb-3">${tr('queue_count').replace('{n}', '0')}</p>
      <label for="bnTarget" class="form-label">${tr('threshold_label')}</label><select id="bnTarget" class="form-select mb-3" style="max-width:18rem"><option value="-50">-50 dBFS</option><option value="-40" selected>-40 dBFS</option><option value="-30">-30 dBFS</option></select>
      <div class="tools-bar d-flex flex-wrap mb-3" style="gap:.5rem">
        <button id="bnConvert" class="btn btn-primary" type="button">${tr('convert')}</button>
        <button id="bnStop" class="btn btn-outline-secondary" type="button" disabled>${tr('stop')}</button>
        <button id="bnRetry" class="btn btn-outline-secondary" type="button" disabled>${tr('retry')}</button>
        <button id="bnSample" class="btn btn-outline-secondary" type="button">${tr('sample')}</button>
        <button id="bnClear" class="btn btn-outline-secondary" type="button">${tr('clear')}</button>
      </div>
      <details class="mb-3"><summary>${tr('advanced')}</summary><label for="bnMin" class="form-label mt-2">${tr('min_label')}</label><select id="bnMin" class="form-select form-select-sm"><option value="0.25">0.25 s</option><option value="0.4" selected>0.4 s</option><option value="0.7">0.7 s</option></select><label for="bnKeep" class="form-label mt-2">${tr('keep_label')}</label><select id="bnKeep" class="form-select form-select-sm"><option value="0.1">0.1 s</option><option value="0.15" selected>0.15 s</option><option value="0.25">0.25 s</option></select><p class="form-text">${tr('settings_hint')}</p></details>
      <div id="bnHud" class="bcw-hud mb-3" role="status" aria-live="polite" hidden>
        <div class="bcw-hud-top"><div class="bcw-hud-spin" aria-hidden="true"></div><div class="bcw-hud-pct" id="bnPct">0%</div><div class="bcw-hud-copy"><div class="bcw-hud-title">${tr('progress')}</div><div class="bcw-hud-step" id="bnStep"></div><div class="bcw-hud-time" id="bnTime"></div></div></div>
        <div class="progress" style="height:1.35rem"><div id="bnBar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div><span class="bcw-hud-sheen" aria-hidden="true"></span></div>
        <ol class="bcw-hud-steps"><li data-step="read">${tr('read')}</li><li data-step="decode">${tr('decode')}</li><li data-step="detect">${tr('detect')}</li><li data-step="write">${tr('write')}</li></ol><div class="bcw-hud-url" id="bnCurrent"></div>
      </div>
      <div id="bnEmpty" class="bn-empty mb-3" role="status">${tr('empty_state')}</div>
      <div id="bnOutput" hidden><h2 class="h5">${tr('preview')}</h2><p id="bnResult"></p></div>
    </section>`;

	/** How / Why / Rules / Use cases IG 块。 */
	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: P,
		mode: 'rules',
		howItemCount: 4,
		whyChooseItemCount: 4,
		ruleItemCount: 4,
		usecaseCount: 3,
	});

	/** 权威参考链接。 */
	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: 'Audacity: Truncate Silence',
				href: 'https://www.audacityteam.org/manual/effects/special/truncate-silence/',
			},
			{
				label: 'MDN: decodeAudioData',
				href: 'https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/decodeAudioData',
			},
		],
	});

	/** 金标 HUD、队列列表与布局补充样式。 */
	const extraHeadHtml = `<style>${bcwHudCss({ hudId: 'bnHud', convertBtnId: 'bnConvert' })}#bnHud.is-error{border-color:#b91c1c;background:#fff1f2}#bnHud:not(.is-on) .bcw-hud-spin{animation:none}#bnTarget,#bnMin,#bnKeep{max-width:18rem}.bn-list{gap:.35rem}.bn-list .list-group-item{display:flex;flex-wrap:wrap;align-items:center;gap:.4rem}.bn-list .bn-name{flex:1 1 10rem;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.bn-list audio{max-width:100%;width:15rem}.bn-empty{padding:.75rem 1rem;border:1px dashed var(--border,#ced4da);border-radius:.5rem;color:var(--bs-secondary-color,#6c757d);font-size:.95rem}.site-footer nav.d-inline{display:inline-flex!important;flex-wrap:wrap;justify-content:center;max-width:100%}</style>`;

	/** 客户端批量去静音管线：逐文件读、解码、检测、分块写出、独立下载。 */
	const extraBodyHtml = `<script>
  (function(){
    'use strict';
    const M = ${JSON.stringify(messages).replace(/</g, '\\u003c')};
    const $ = id => document.getElementById(id);
    const panel = $('bnPanel'), fileInput = $('bnFile'), hud = $('bnHud');
    const rows = [];
    const MAX_FILES = 20, MAX_BYTES = 20 * 1024 * 1024, MAX_SEC = 300;
    const MAX_OUTPUT_BYTES = 96 * 1024 * 1024, MAX_WAV_BYTES = 60 * 1024 * 1024;
    const storageName = 'batch-silence-audio-' + Date.now() + '-' + Math.random().toString(36).slice(2);
    let storagePromise = null;
    let busy = false, stopRequested = false, started = 0, timer = 0;
    const yieldUi = () => new Promise(resolve => requestAnimationFrame(() => setTimeout(resolve, 0)));
    const fill = (value, vars) => value.replace(/{(\\w+)}/g, (_, key) => String(vars[key] ?? ''));
    const errorText = key => M[key] || M.failed;
    const fmtSize = bytes => (bytes / 1024).toFixed(1);
    function statusText(row){
      if(row.status === 'ready') return fill(M.silence_result, {before:row.sourceSeconds.toFixed(2), after:row.seconds.toFixed(2), removed:row.removedSeconds.toFixed(2), percent:row.removedPercent.toFixed(1), gaps:row.gaps}) + ' · ' + fill(M.row_result, {
        input: fmtSize(row.file.size), output: fmtSize(row.outputBytes), rate:row.rate, channels:row.channels
      });
      if(row.status === 'failed') return errorText(row.error);
      return M[row.status] || M.pending;
    }
    function renderRows(){
      const list = $('bnList');
      for(const row of rows) if(row.audio){row.audio.pause();URL.revokeObjectURL(row.audio.src);row.audio=null;}
      list.replaceChildren();
      rows.forEach((row, index) => {
        const li = document.createElement('li'); li.className = 'list-group-item';
        li.dataset.status = row.status;
        const name = document.createElement('strong'); name.className = 'bn-name'; name.textContent = row.file.name;
        const status = document.createElement('span'); status.className = 'small'; status.textContent = statusText(row);
        li.append(name, status);
        if(row.status === 'ready'){
          const preview = document.createElement('button'); preview.type = 'button';
          preview.className = 'btn btn-sm btn-outline-secondary'; preview.textContent = M.preview_audio;
          preview.addEventListener('click', () => previewRow(row,li)); li.appendChild(preview);
          const save = document.createElement('button'); save.type = 'button';
          save.className = 'btn btn-sm btn-outline-primary'; save.textContent = M.download;
          save.addEventListener('click', () => downloadRow(row)); li.appendChild(save);
        }
        const remove = document.createElement('button'); remove.type = 'button';
        remove.className = 'btn btn-sm btn-outline-secondary'; remove.textContent = M.remove;
        remove.disabled = busy; remove.addEventListener('click', () => { releaseRow(row); rows.splice(index, 1); renderRows(); });
        li.appendChild(remove); list.appendChild(li);
      });
      $('bnQueueMeta').textContent = fill(M.queue_count, {n: rows.length});
      $('bnName').textContent = rows.length ? fill(M.queue_count, {n: rows.length}) : '';
      $('bnEmpty').hidden = rows.length > 0;
      $('bnRetry').disabled = busy || !rows.some(row => row.status === 'failed');
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
    async function previewRow(row,li){
      try{
        for(const item of rows)if(item.audio){item.audio.pause();URL.revokeObjectURL(item.audio.src);item.audio.remove();item.audio=null;}
        const file=row.handle?await row.handle.getFile():row.blob;
        if(!file)throw Error('err_output');
        const audio=document.createElement('audio');audio.controls=true;audio.preload='metadata';
        audio.src=URL.createObjectURL(file);row.audio=audio;
        li.appendChild(audio);await audio.play();
      }catch{showError('err_output');}
    }
    async function getStorage(){
      if(!navigator.storage?.getDirectory) return null;
      if(!storagePromise) storagePromise = navigator.storage.getDirectory()
        .then(root => root.getDirectoryHandle(storageName, {create:true})).catch(() => null);
      return storagePromise;
    }
    async function releaseRow(row){
      if(row.audio){row.audio.pause();URL.revokeObjectURL(row.audio.src);row.audio=null;}
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
      $('bnPct').textContent = pct + '%'; $('bnBar').style.width = pct + '%';
      $('bnBar').setAttribute('aria-valuenow', String(pct)); $('bnStep').textContent = M[step] || step;
      hud.querySelectorAll('[data-step]').forEach(el => el.classList.toggle('is-on', el.dataset.step === step));
    }
    function showError(key){
      hud.hidden = false; hud.className = 'bcw-hud is-error is-fail mb-3';
      hud.setAttribute('role', 'alert'); $('bnStep').textContent = errorText(key);
    }
    function lock(on){
      busy = on;
      for(const id of ['bnFile','bnSample','bnClear','bnConvert','bnTarget','bnMin','bnKeep']) $(id).disabled = on;
      $('bnStop').disabled = !on; $('bnRetry').disabled = on || !rows.some(row => row.status === 'failed');
      $('bnConvert').setAttribute('aria-busy', String(on)); renderRows();
    }
    function inspect(file, bytes){
      const ext=(file.name.match(/\\.([^.]+)$/)||[,''])[1].toLowerCase();
      const b=new Uint8Array(bytes,0,Math.min(bytes.byteLength,16));
      const tag=at=>String.fromCharCode(...b.slice(at,at+4));
      const valid=(ext==='mp3'&&(tag(0).startsWith('ID3')||(b[0]===255&&(b[1]&224)===224)))||
        ((ext==='wav'||ext==='wave')&&tag(0)==='RIFF'&&tag(8)==='WAVE')||
        (ext==='flac'&&tag(0)==='fLaC')||((ext==='ogg'||ext==='oga')&&tag(0)==='OggS')||
        (ext==='m4a'&&tag(4)==='ftyp');
      if(!valid)throw Error('err_format');
    }
    async function detectSilence(decoded, thresholdDb, minSec, keepSec, onProgress){
      const channels=Array.from({length:decoded.numberOfChannels},(_,c)=>decoded.getChannelData(c));
      const rate=decoded.sampleRate, win=Math.max(1,Math.round(rate*.01));
      const limit=Math.pow(10,thresholdDb/20), minFrames=Math.round(minSec*rate), keepFrames=Math.round(keepSec*rate);
      const runs=[];let runStart=-1,peak=0,last=performance.now();
      for(let at=0;at<decoded.length;at+=win){
        const end=Math.min(decoded.length,at+win);let energy=0;
        for(const data of channels)for(let i=at;i<end;i++){
          const value=Number.isFinite(data[i])?data[i]:0;energy+=value*value;peak=Math.max(peak,Math.abs(value));
        }
        const quiet=Math.sqrt(energy/((end-at)*channels.length))<limit;
        if(quiet&&runStart<0)runStart=at;
        if((!quiet||end===decoded.length)&&runStart>=0){
          const stop=quiet&&end===decoded.length?end:at;
          if(stop-runStart>=minFrames)runs.push({start:runStart,end:stop});
          runStart=-1;
        }
        if(performance.now()-last>40){onProgress(end/decoded.length);await yieldUi();last=performance.now();}
      }
      if(peak<1e-8)throw Error('err_silence');
      const kept=[];let cursor=0;
      for(const run of runs){
        if(run.start>cursor)kept.push({start:cursor,end:run.start});
        const padding=Math.min(keepFrames,run.end-run.start),left=Math.floor(padding/2),right=padding-left;
        if(left)kept.push({start:run.start,end:run.start+left});
        if(right)kept.push({start:run.end-right,end:run.end});
        cursor=run.end;
      }
      if(cursor<decoded.length)kept.push({start:cursor,end:decoded.length});
      const frames=kept.reduce((sum,part)=>sum+part.end-part.start,0);
      if(!frames)throw Error('err_silence');
      return {kept,frames,gaps:runs.length};
    }
    async function writeWav(decoded, plan, row, onProgress){
      const channels=decoded.numberOfChannels,rate=decoded.sampleRate,frames=plan.frames;
      if(![1,2].includes(channels)) throw Error('err_limit');
      const estimated = 44 + frames * channels * 2;
      if(estimated > MAX_WAV_BYTES) throw Error('err_limit');
      const dir = row.sample ? null : await getStorage();
      const held = rows.reduce((sum, item) => sum + (item.blob?.size || 0), 0);
      if(!dir && held + estimated > MAX_OUTPUT_BYTES) throw Error('err_output');
      let handle = null, writable = null;
      const parts = [];
      try{
        if(dir){ handle = await dir.getFileHandle(row.outputName, {create:true}); writable = await handle.createWritable(); }
        const write = async chunk => { if(writable) await writable.write(chunk); else parts.push(chunk); };
        const header = new ArrayBuffer(44), view = new DataView(header);
        const tag = (at, value) => { for(let i=0;i<value.length;i++)view.setUint8(at+i,value.charCodeAt(i)); };
        tag(0,'RIFF'); view.setUint32(4,estimated-8,true); tag(8,'WAVE'); tag(12,'fmt ');
        view.setUint32(16,16,true); view.setUint16(20,1,true); view.setUint16(22,channels,true);
        view.setUint32(24,rate,true); view.setUint32(28,rate*channels*2,true);
        view.setUint16(32,channels*2,true); view.setUint16(34,16,true);
        tag(36,'data'); view.setUint32(40,estimated-44,true); await write(header);
        const source=Array.from({length:channels},(_,c)=>decoded.getChannelData(c));
        let last=performance.now(),written=0;
        const fade=Math.max(1,Math.round(rate*.005));
        for(let segment=0;segment<plan.kept.length;segment++){
          const part=plan.kept[segment],length=part.end-part.start;
          for(let start=0;start<length;start+=8192){
            const end=Math.min(start+8192,length),chunk=new ArrayBuffer((end-start)*channels*2),pcm=new DataView(chunk);
            for(let i=start;i<end;i++){
              const level=Math.min(1,segment?i/fade:1,segment<plan.kept.length-1?(length-1-i)/fade:1);
              for(let c=0;c<channels;c++){
                const value=source[c][part.start+i]*Math.max(0,level);
                const x=Math.max(-1,Math.min(1,Number.isFinite(value)?value:0));
                pcm.setInt16(((i-start)*channels+c)*2,Math.round(x*(x<0?32768:32767)),true);
              }
            }
            await write(chunk);written+=end-start;
            if(performance.now()-last>40){onProgress(written/frames);await yieldUi();last=performance.now();}
          }
        }
        if(writable){await writable.close();row.handle=handle;}
        else row.blob=new Blob(parts,{type:'audio/wav'});
        row.outputBytes=estimated; row.rate=rate; row.channels=channels;
      }catch(e){
        try{await writable?.abort();}catch{}
        if(dir)try{await dir.removeEntry(row.outputName);}catch{}
        throw Error(e?.message==='err_limit'?e.message:'err_output');
      }
    }
    function outputName(file){
      const stem = (file.name.replace(/\\.[^.]+$/, '') || 'audio').replace(/[^\\w\\u4e00-\\u9fff.-]+/g, '_');
      let name = stem + '-pauses-shortened.wav', n = 2;
      while(rows.some(row => row.outputName === name)){ name = stem + '-pauses-shortened-' + n++ + '.wav'; }
      return name;
    }
    async function convert(){
      if(busy) return;
      if(!rows.some(row => row.status === 'pending')){ showError('empty'); return; }
      stopRequested = false; lock(true); started = performance.now();
      hud.hidden = false; hud.className = 'bcw-hud is-on mb-3'; hud.setAttribute('role','status');
      const clock = () => { $('bnTime').textContent = fill(M.elapsed, {s:((performance.now()-started)/1000).toFixed(1)}); };
      clock(); timer = setInterval(clock, 100);
      const pending = rows.filter(row => row.status === 'pending');
      let done = 0;
      try{
        const rate=44100,thresholdDb=Number($('bnTarget').value),minSec=Number($('bnMin').value),keepSec=Number($('bnKeep').value);
        if(![-50,-40,-30].includes(thresholdDb)||![.25,.4,.7].includes(minSec)||![.1,.15,.25].includes(keepSec))throw Error('err_encoder');
        const Offline = window.OfflineAudioContext || window.webkitOfflineAudioContext;
        if(!Offline) throw Error('err_decode');
        for(const row of pending){
          if(stopRequested) break;
          row.status = 'working'; renderRows(); $('bnCurrent').textContent = row.file.name + ' (' + (done + 1) + '/' + pending.length + ')';
          const base = done / pending.length * 100, span = 100 / pending.length;
          try{
            progress(base + span * .05, 'read'); await yieldUi();
            if(row.file.size > MAX_BYTES || !row.file.size) throw Error('err_limit');
            const bytes = await row.file.arrayBuffer(); inspect(row.file, bytes);
            progress(base + span * .18, 'decode'); await yieldUi();
            let decoded;
            try{ decoded = await new Offline(2, 1, rate).decodeAudioData(bytes.slice(0)); }
            catch(e){ throw Error('err_decode'); }
            if(decoded.duration > MAX_SEC + .01 || ![1,2].includes(decoded.numberOfChannels)) throw Error('err_limit');
            progress(base + span * .28, 'detect'); await yieldUi();
            const plan=await detectSilence(decoded,thresholdDb,minSec,keepSec,fraction=>progress(base+span*(.28+fraction*.18),'detect'));
            progress(base + span * .48, 'write'); await yieldUi();
            const sourceSeconds=decoded.duration;
            row.outputName = outputName(row.file);
            await writeWav(decoded,plan,row,fraction => progress(base + span * (.48 + fraction * .48), 'write'));
            decoded = null;
            row.sourceSeconds=sourceSeconds;row.seconds=plan.frames/rate;row.removedSeconds=sourceSeconds-row.seconds;
            row.removedPercent=100*row.removedSeconds/sourceSeconds;row.gaps=plan.gaps;
            row.status = 'ready'; row.error = '';
          }catch(e){
            row.status = 'failed'; row.error = e && M[e.message] ? e.message : 'failed';
            await releaseRow(row); row.outputName = '';
          }
          done++; renderRows(); await yieldUi();
        }
        const ok = rows.filter(row => row.status === 'ready').length;
        const fail = rows.filter(row => row.status === 'failed').length;
        const remaining = rows.filter(row => row.status === 'pending').length;
        $('bnOutput').hidden = false;
        $('bnResult').textContent = fill(M.result, {ok, fail, pending:remaining, threshold:thresholdDb});
        if(!ok) showError('failed');
        else { progress(stopRequested ? done / pending.length * 100 : 100, 'done'); hud.classList.remove('is-on'); hud.classList.add('is-done');
          if(stopRequested) $('bnStep').textContent = M.stopped;
        }
      }catch(e){ showError(e && M[e.message] ? e.message : 'failed'); }
      finally{ clearInterval(timer); clock(); lock(false); }
    }
    async function loadSample(){
      if(busy) return;
      rows.forEach(releaseRow); rows.length = 0; lock(true); hud.hidden = false; hud.className = 'bcw-hud is-on mb-3'; progress(2, 'read');
      try{
        const rate=44100,frames=rate*3;
        for(const [label,gaps,freq] of [['one',[ [0.8,1.65] ],440],['two',[ [0.45,1.05],[1.7,2.5] ],660]]){
          const bytes=new ArrayBuffer(44+frames*4),view=new DataView(bytes);
          const tag=(at,value)=>{for(let i=0;i<value.length;i++)view.setUint8(at+i,value.charCodeAt(i));};
          tag(0,'RIFF');view.setUint32(4,bytes.byteLength-8,true);tag(8,'WAVE');tag(12,'fmt ');
          view.setUint32(16,16,true);view.setUint16(20,1,true);view.setUint16(22,2,true);
          view.setUint32(24,rate,true);view.setUint32(28,rate*4,true);view.setUint16(32,4,true);view.setUint16(34,16,true);
          tag(36,'data');view.setUint32(40,frames*4,true);
          for(let i=0;i<frames;i++){
            const time=i/rate,quiet=gaps.some(([start,end])=>time>=start&&time<end);
            const fade=Math.min(1,i/2205,(frames-i)/2205),v=quiet?0:Math.sin(2*Math.PI*freq*i/rate)*.3*fade;
            view.setInt16(44+i*4,Math.round(v*32767),true);view.setInt16(46+i*4,Math.round(v*32767),true);
            if(i%11025===0)await yieldUi();
          }
          rows.push({file:new File([bytes],M.sample_name+'-'+label+'.wav',{type:'audio/wav'}),sample:true,status:'pending',blob:null,handle:null,outputBytes:0,error:'',seconds:0,outputName:''});
        }
        $('bnTarget').value='-40';$('bnMin').value='0.4';$('bnKeep').value='0.15'; lock(false); await convert();
      }catch(e){ showError('err_sample'); } finally { lock(false); }
    }
    fileInput.addEventListener('change', () => addFiles(fileInput.files));
    $('bnDrop').addEventListener('dragover', event => event.preventDefault());
    $('bnDrop').addEventListener('drop', event => { event.preventDefault(); addFiles(event.dataTransfer.files); });
    $('bnConvert').addEventListener('click', convert);
    $('bnStop').addEventListener('click', () => { stopRequested = true; });
    $('bnRetry').addEventListener('click', () => { for(const row of rows) if(row.status === 'failed'){ row.status = 'pending'; row.error = ''; } renderRows(); convert(); });
    $('bnSample').addEventListener('click', loadSample);
    $('bnClear').addEventListener('click', () => { if(busy) return; rows.forEach(releaseRow); rows.length = 0; renderRows(); hud.hidden = true; $('bnOutput').hidden = true; });
    window.addEventListener('pagehide', () => { rows.forEach(releaseRow); });
    renderRows(); loadSample();
  })();
</script>`;
	/** 当前工具 catalog 元数据。 */
	const toolMeta = getToolBySlug('batch-remove-silence-from-recordings');
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
