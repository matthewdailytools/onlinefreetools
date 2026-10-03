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
const P = 'tool_batch_normalize_audio_files_to_peak';

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
 * 批量把浏览器可解码音频分别标准化到样本峰值目标并输出 PCM WAV。
 * 管线：格式签名 → 逐件解码、峰值扫描 → 统一目标增益 → 分块 WAV 写出。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderBatchNormalizeAudioFilesToPeakPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 工具规范路径（无语言前缀）。 */
	const toolPath = '/tools/batch-normalize-audio-files-to-peak';
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
			currentSlug: 'batch-normalize-audio-files-to-peak',
			currentAnchor: '#batch-peak-audio',
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
		'normalize',
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
		'peak_result',
	];
	/** 消息字典：键 → 当前语言字符串。 */
	const messages = Object.fromEntries(uiKeys.map((key) => [key, t(opts.lang, `${P}_${key}`)]));

	/** 工具主面板与结果区 markup。 */
	const contentHtml = `
    <div id="batch-peak-audio" class="tool-page-heading mb-3"><h1 class="h4">${tr('title')}</h1><p>${tr('desc')}</p></div>
    <section class="tool-panel" id="bnPanel">
      <label class="tool-dropzone mb-3" id="bnDrop" for="bnFile"><input id="bnFile" type="file" multiple accept=".mp3,.wav,.wave,.m4a,.flac,.ogg,.oga,audio/*"><span class="tool-dropzone-title">${tr('choose')}</span><span class="tool-dropzone-hint">${tr('hint')}</span><span id="bnName" class="tool-dropzone-file"></span></label>
      <p class="form-label mb-1">${tr('list_label')}</p>
      <ul id="bnList" class="list-group mb-2 bn-list" aria-live="polite"></ul>
      <p id="bnQueueMeta" class="form-text mb-3">${tr('queue_count').replace('{n}', '0')}</p>
      <label for="bnTarget" class="form-label">${tr('target_label')}</label><select id="bnTarget" class="form-select mb-3" style="max-width:18rem"><option value="-1" selected>-1 dBFS</option><option value="-3">-3 dBFS</option><option value="-6">-6 dBFS</option></select>
      <div class="tools-bar d-flex flex-wrap mb-3" style="gap:.5rem">
        <button id="bnConvert" class="btn btn-primary" type="button">${tr('convert')}</button>
        <button id="bnStop" class="btn btn-outline-secondary" type="button" disabled>${tr('stop')}</button>
        <button id="bnRetry" class="btn btn-outline-secondary" type="button" disabled>${tr('retry')}</button>
        <button id="bnSample" class="btn btn-outline-secondary" type="button">${tr('sample')}</button>
        <button id="bnClear" class="btn btn-outline-secondary" type="button">${tr('clear')}</button>
      </div>
      <details class="mb-3"><summary>${tr('advanced')}</summary><label for="bnRate" class="form-label mt-2">${tr('bitrate')}</label><select id="bnRate" class="form-select form-select-sm"><option value="44100" selected>44.1 kHz</option><option value="48000">48 kHz</option></select><label for="bnChannels" class="form-label mt-2">${tr('channels')}</label><select id="bnChannels" class="form-select form-select-sm"><option value="keep">${tr('keep')}</option><option value="mono">${tr('mono')}</option></select><p class="form-text">${tr('settings_hint')}</p></details>
      <div id="bnHud" class="bcw-hud mb-3" role="status" aria-live="polite" hidden>
        <div class="bcw-hud-top"><div class="bcw-hud-spin" aria-hidden="true"></div><div class="bcw-hud-pct" id="bnPct">0%</div><div class="bcw-hud-copy"><div class="bcw-hud-title">${tr('progress')}</div><div class="bcw-hud-step" id="bnStep"></div><div class="bcw-hud-time" id="bnTime"></div></div></div>
        <div class="progress" style="height:1.35rem"><div id="bnBar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div><span class="bcw-hud-sheen" aria-hidden="true"></span></div>
        <ol class="bcw-hud-steps"><li data-step="read">${tr('read')}</li><li data-step="decode">${tr('decode')}</li><li data-step="normalize">${tr('normalize')}</li><li data-step="write">${tr('write')}</li></ol><div class="bcw-hud-url" id="bnCurrent"></div>
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
				label: 'MDN: decodeAudioData',
				href: 'https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/decodeAudioData',
			},
		],
	});

	/** 金标 HUD、队列列表与布局补充样式。 */
	const extraHeadHtml = `<style>${bcwHudCss({ hudId: 'bnHud', convertBtnId: 'bnConvert' })}#bnHud.is-error{border-color:#b91c1c;background:#fff1f2}#bnHud:not(.is-on) .bcw-hud-spin{animation:none}#bnTarget,#bnRate,#bnChannels{max-width:18rem}.bn-list{gap:.35rem}.bn-list .list-group-item{display:flex;flex-wrap:wrap;align-items:center;gap:.4rem}.bn-list .bn-name{flex:1 1 10rem;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.bn-empty{padding:.75rem 1rem;border:1px dashed var(--border,#ced4da);border-radius:.5rem;color:var(--bs-secondary-color,#6c757d);font-size:.95rem}.site-footer nav.d-inline{display:inline-flex!important;flex-wrap:wrap;justify-content:center;max-width:100%}</style>`;

	/** 客户端批量减重管线：逐文件读、解码、编码、独立下载。 */
	const extraBodyHtml = `<script>
  (function(){
    'use strict';
    const M = ${JSON.stringify(messages).replace(/</g, '\\u003c')};
    const $ = id => document.getElementById(id);
    const panel = $('bnPanel'), fileInput = $('bnFile'), hud = $('bnHud');
    const rows = [];
    const MAX_FILES = 20, MAX_BYTES = 20 * 1024 * 1024, MAX_SEC = 300;
    const MAX_OUTPUT_BYTES = 96 * 1024 * 1024, MAX_WAV_BYTES = 60 * 1024 * 1024;
    const storageName = 'batch-peak-audio-' + Date.now() + '-' + Math.random().toString(36).slice(2);
    let storagePromise = null;
    let busy = false, stopRequested = false, started = 0, timer = 0;
    const yieldUi = () => new Promise(resolve => requestAnimationFrame(() => setTimeout(resolve, 0)));
    const fill = (value, vars) => value.replace(/{(\\w+)}/g, (_, key) => String(vars[key] ?? ''));
    const errorText = key => M[key] || M.failed;
    const fmtSize = bytes => (bytes / 1024).toFixed(1);
    function statusText(row){
      if(row.status === 'ready') return fill(M.peak_result, {before:row.before.toFixed(1), gain:row.gainDb.toFixed(1), after:row.after.toFixed(1)}) + ' · ' + fill(M.row_result, {
        seconds: row.seconds.toFixed(2), input: fmtSize(row.file.size), output: fmtSize(row.outputBytes), rate:row.rate, channels:row.channels
      });
      if(row.status === 'failed') return errorText(row.error);
      return M[row.status] || M.pending;
    }
    function renderRows(){
      const list = $('bnList'); list.replaceChildren();
      rows.forEach((row, index) => {
        const li = document.createElement('li'); li.className = 'list-group-item';
        li.dataset.status = row.status;
        const name = document.createElement('strong'); name.className = 'bn-name'; name.textContent = row.file.name;
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
    async function getStorage(){
      if(!navigator.storage?.getDirectory) return null;
      if(!storagePromise) storagePromise = navigator.storage.getDirectory()
        .then(root => root.getDirectoryHandle(storageName, {create:true})).catch(() => null);
      return storagePromise;
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
      for(const id of ['bnFile','bnSample','bnClear','bnConvert','bnTarget','bnRate','bnChannels']) $(id).disabled = on;
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
    async function measurePeak(decoded, channelMode, onProgress){
      const left=decoded.getChannelData(0),right=decoded.numberOfChannels===2?decoded.getChannelData(1):null;
      let peak=0,last=performance.now();
      for(let i=0;i<decoded.length;i++){
        const a=Number.isFinite(left[i])?left[i]:0;
        if(channelMode==='mono'&&right){const b=Number.isFinite(right[i])?right[i]:0;peak=Math.max(peak,Math.abs((a+b)/2));}
        else{peak=Math.max(peak,Math.abs(a));if(right)peak=Math.max(peak,Math.abs(Number.isFinite(right[i])?right[i]:0));}
        if(i%65536===0&&performance.now()-last>40){onProgress(i/decoded.length);await yieldUi();last=performance.now();}
      }
      if(!(peak>1e-8))throw Error('err_silence');
      return peak;
    }
    async function writeWav(decoded, rate, channelMode, gain, row, onProgress){
      const sourceChannels = decoded.numberOfChannels;
      if(![1,2].includes(sourceChannels)) throw Error('err_limit');
      const channels = channelMode === 'mono' ? 1 : sourceChannels;
      const frames = Math.ceil(decoded.duration * rate), estimated = 44 + frames * channels * 2;
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
        const left = decoded.getChannelData(0), right = sourceChannels === 2 ? decoded.getChannelData(1) : null;
        let last = performance.now(), outputPeak = 0;
        const sample = value => {
          const x=Math.max(-1,Math.min(1,value*gain));
          const quantized=Math.round(x*(x<0?32768:32767));
          outputPeak=Math.max(outputPeak,Math.abs(quantized/(quantized<0?32768:32767)));
          return quantized;
        };
        for(let start=0;start<frames;start+=8192){
          const end=Math.min(start+8192,frames), chunk=new ArrayBuffer((end-start)*channels*2), pcm=new DataView(chunk);
          for(let i=start;i<end;i++){
            const at=Math.min(decoded.length-1,Math.floor(i*decoded.sampleRate/rate));
            const a=Number.isFinite(left[at])?left[at]:0, b=right&&Number.isFinite(right[at])?right[at]:a;
            pcm.setInt16((i-start)*channels*2,sample(channelMode==='mono'&&right?(a+b)/2:a),true);
            if(channels===2)pcm.setInt16((i-start)*4+2,sample(b),true);
          }
          await write(chunk);
          if(performance.now()-last>40){onProgress(end/frames);await yieldUi();last=performance.now();}
        }
        if(writable){await writable.close();row.handle=handle;}
        else row.blob=new Blob(parts,{type:'audio/wav'});
        row.outputBytes=estimated; row.rate=rate; row.channels=channels;
        row.after=20*Math.log10(Math.max(outputPeak,1e-8));
      }catch(e){
        try{await writable?.abort();}catch{}
        if(dir)try{await dir.removeEntry(row.outputName);}catch{}
        throw Error(e?.message==='err_limit'?e.message:'err_output');
      }
    }
    function outputName(file){
      const stem = (file.name.replace(/\\.[^.]+$/, '') || 'audio').replace(/[^\\w\\u4e00-\\u9fff.-]+/g, '_');
      let name = stem + '-peak-normalized.wav', n = 2;
      while(rows.some(row => row.outputName === name)){ name = stem + '-peak-normalized-' + n++ + '.wav'; }
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
        const rate = Number($('bnRate').value);
        if(![44100,48000].includes(rate)) throw Error('err_encoder');
        const targetDb=Number($('bnTarget').value);
        if(![-1,-3,-6].includes(targetDb))throw Error('err_encoder');
        const channelMode = $('bnChannels').value;
        if(!['keep','mono'].includes(channelMode)) throw Error('err_encoder');
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
            progress(base + span * .28, 'normalize'); await yieldUi();
            const peak=await measurePeak(decoded,channelMode,fraction=>progress(base+span*(.28+fraction*.18),'normalize'));
            const before=20*Math.log10(peak),gainDb=targetDb-before,gain=Math.pow(10,targetDb/20)/peak;
            progress(base + span * .48, 'write'); await yieldUi();
            const seconds = decoded.duration;
            row.outputName = outputName(row.file);
            await writeWav(decoded, rate, channelMode, gain, row, fraction => progress(base + span * (.48 + fraction * .48), 'write'));
            decoded = null;
            row.seconds = seconds; row.before=before; row.gainDb=gainDb; row.status = 'ready'; row.error = '';
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
        $('bnResult').textContent = fill(M.result, {ok, fail, pending:remaining, target:targetDb});
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
        const rate=44100,frames=rate*2;
        for(const [label,amplitude,freq] of [['quiet',.2,440],['loud',.6,660]]){
          const bytes=new ArrayBuffer(44+frames*4),view=new DataView(bytes);
          const tag=(at,value)=>{for(let i=0;i<value.length;i++)view.setUint8(at+i,value.charCodeAt(i));};
          tag(0,'RIFF');view.setUint32(4,bytes.byteLength-8,true);tag(8,'WAVE');tag(12,'fmt ');
          view.setUint32(16,16,true);view.setUint16(20,1,true);view.setUint16(22,2,true);
          view.setUint32(24,rate,true);view.setUint32(28,rate*4,true);view.setUint16(32,4,true);view.setUint16(34,16,true);
          tag(36,'data');view.setUint32(40,frames*4,true);
          for(let i=0;i<frames;i++){
            const fade=Math.min(1,i/2205,(frames-i)/2205),v=Math.sin(2*Math.PI*freq*i/rate)*amplitude*fade;
            view.setInt16(44+i*4,Math.round(v*32767),true);view.setInt16(46+i*4,Math.round(v*32767),true);
            if(i%11025===0)await yieldUi();
          }
          rows.push({file:new File([bytes],M.sample_name+'-'+label+'.wav',{type:'audio/wav'}),sample:true,status:'pending',blob:null,handle:null,outputBytes:0,error:'',seconds:0,outputName:''});
        }
        $('bnTarget').value='-1';$('bnRate').value = '44100'; $('bnChannels').value = 'keep'; lock(false); await convert();
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
	const toolMeta = getToolBySlug('batch-normalize-audio-files-to-peak');
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
