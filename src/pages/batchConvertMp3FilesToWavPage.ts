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
const P = 'tool_batch_convert_mp3_files_to_wav';

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
 * 批量把本地 MP3 转成独立的 PCM WAV。
 * 管线：多文件队列 → 每文件 MP3 帧校验 / decodeAudioData → 分块 WAV 写出。
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderBatchConvertMp3FilesToWavPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	/** 工具规范路径（无语言前缀）。 */
	const toolPath = '/tools/batch-convert-mp3-files-to-wav';
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
			currentSlug: 'batch-convert-mp3-files-to-wav',
			currentAnchor: '#batch-mp3-wav',
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
		'expanded',
	];
	/** 消息字典：键 → 当前语言字符串。 */
	const messages = Object.fromEntries(uiKeys.map((key) => [key, t(opts.lang, `${P}_${key}`)]));

	/** 工具主面板与结果区 markup。 */
	const contentHtml = `
    <div id="batch-mp3-wav" class="tool-page-heading mb-3"><h1 class="h4">${tr('title')}</h1><p>${tr('desc')}</p></div>
    <section class="tool-panel" id="bwPanel">
      <label class="tool-dropzone mb-3" id="bwDrop" for="bwFile"><input id="bwFile" type="file" multiple accept=".mp3,audio/mpeg"><span class="tool-dropzone-title">${tr('choose')}</span><span class="tool-dropzone-hint">${tr('hint')}</span><span id="bwName" class="tool-dropzone-file"></span></label>
      <p class="form-label mb-1">${tr('list_label')}</p>
      <ul id="bwList" class="list-group mb-2 bw-list" aria-live="polite"></ul>
      <p id="bwQueueMeta" class="form-text mb-3">${tr('queue_count').replace('{n}', '0')}</p>
      <div class="tools-bar d-flex flex-wrap mb-3" style="gap:.5rem">
        <button id="bwConvert" class="btn btn-primary" type="button">${tr('convert')}</button>
        <button id="bwStop" class="btn btn-outline-secondary" type="button" disabled>${tr('stop')}</button>
        <button id="bwRetry" class="btn btn-outline-secondary" type="button" disabled>${tr('retry')}</button>
        <button id="bwSample" class="btn btn-outline-secondary" type="button">${tr('sample')}</button>
        <button id="bwClear" class="btn btn-outline-secondary" type="button">${tr('clear')}</button>
      </div>
      <details class="mb-3"><summary>${tr('advanced')}</summary><label for="bwRate" class="form-label mt-2">${tr('bitrate')}</label><select id="bwRate" class="form-select form-select-sm"><option value="44100" selected>44.1 kHz</option><option value="48000">48 kHz</option></select><label for="bwChannels" class="form-label mt-2">${tr('channels')}</label><select id="bwChannels" class="form-select form-select-sm"><option value="keep">${tr('keep')}</option><option value="mono">${tr('mono')}</option></select><p class="form-text">${tr('settings_hint')}</p></details>
      <div id="bwHud" class="bcw-hud mb-3" role="status" aria-live="polite" hidden>
        <div class="bcw-hud-top"><div class="bcw-hud-spin" aria-hidden="true"></div><div class="bcw-hud-pct" id="bwPct">0%</div><div class="bcw-hud-copy"><div class="bcw-hud-title">${tr('progress')}</div><div class="bcw-hud-step" id="bwStep"></div><div class="bcw-hud-time" id="bwTime"></div></div></div>
        <div class="progress" style="height:1.35rem"><div id="bwBar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div><span class="bcw-hud-sheen" aria-hidden="true"></span></div>
        <ol class="bcw-hud-steps"><li data-step="read">${tr('read')}</li><li data-step="decode">${tr('decode')}</li><li data-step="encode">${tr('encode')}</li></ol><div class="bcw-hud-url" id="bwCurrent"></div>
      </div>
      <div id="bwEmpty" class="bw-empty mb-3" role="status">${tr('empty_state')}</div>
      <div id="bwOutput" hidden><h2 class="h5">${tr('preview')}</h2><p id="bwResult"></p></div>
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
	const extraHeadHtml = `<style>${bcwHudCss({ hudId: 'bwHud', convertBtnId: 'bwConvert' })}#bwHud.is-error{border-color:#b91c1c;background:#fff1f2}#bwHud:not(.is-on) .bcw-hud-spin{animation:none}#bwRate,#bwChannels{max-width:18rem}.bw-list{gap:.35rem}.bw-list .list-group-item{display:flex;flex-wrap:wrap;align-items:center;gap:.4rem}.bw-list .bw-name{flex:1 1 10rem;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.bw-empty{padding:.75rem 1rem;border:1px dashed var(--border,#ced4da);border-radius:.5rem;color:var(--bs-secondary-color,#6c757d);font-size:.95rem}.site-footer nav.d-inline{display:inline-flex!important;flex-wrap:wrap;justify-content:center;max-width:100%}</style>`;

	/** 客户端批量减重管线：逐文件读、解码、编码、独立下载。 */
	const extraBodyHtml = `<script>
  (function(){
    'use strict';
    const M = ${JSON.stringify(messages).replace(/</g, '\\u003c')};
    const $ = id => document.getElementById(id);
    const panel = $('bwPanel'), fileInput = $('bwFile'), hud = $('bwHud');
    const rows = [];
    const MAX_FILES = 20, MAX_BYTES = 20 * 1024 * 1024, MAX_SEC = 300;
    const MAX_OUTPUT_BYTES = 96 * 1024 * 1024, MAX_WAV_BYTES = 60 * 1024 * 1024;
    const storageName = 'batch-mp3-wav-' + Date.now() + '-' + Math.random().toString(36).slice(2);
    let storagePromise = null;
    let busy = false, stopRequested = false, encoderPromise = null, started = 0, timer = 0;
    const yieldUi = () => new Promise(resolve => requestAnimationFrame(() => setTimeout(resolve, 0)));
    const fill = (value, vars) => value.replace(/{(\\w+)}/g, (_, key) => String(vars[key] ?? ''));
    const errorText = key => M[key] || M.failed;
    const fmtSize = bytes => (bytes / 1024).toFixed(1);
    function statusText(row){
      if(row.status === 'ready') return fill(M.expanded, {ratio:(row.outputBytes/row.file.size).toFixed(1)}) + ' · ' + fill(M.row_result, {
        seconds: row.seconds.toFixed(2), input: fmtSize(row.file.size), output: fmtSize(row.outputBytes), rate:row.rate, channels:row.channels
      });
      if(row.status === 'failed') return errorText(row.error);
      return M[row.status] || M.pending;
    }
    function renderRows(){
      const list = $('bwList'); list.replaceChildren();
      rows.forEach((row, index) => {
        const li = document.createElement('li'); li.className = 'list-group-item';
        li.dataset.status = row.status;
        const name = document.createElement('strong'); name.className = 'bw-name'; name.textContent = row.file.name;
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
      $('bwQueueMeta').textContent = fill(M.queue_count, {n: rows.length});
      $('bwName').textContent = rows.length ? fill(M.queue_count, {n: rows.length}) : '';
      $('bwEmpty').hidden = rows.length > 0;
      $('bwRetry').disabled = busy || !rows.some(row => row.status === 'failed');
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
      $('bwPct').textContent = pct + '%'; $('bwBar').style.width = pct + '%';
      $('bwBar').setAttribute('aria-valuenow', String(pct)); $('bwStep').textContent = M[step] || step;
      hud.querySelectorAll('[data-step]').forEach(el => el.classList.toggle('is-on', el.dataset.step === step));
    }
    function showError(key){
      hud.hidden = false; hud.className = 'bcw-hud is-error is-fail mb-3';
      hud.setAttribute('role', 'alert'); $('bwStep').textContent = errorText(key);
    }
    function lock(on){
      busy = on;
      for(const id of ['bwFile','bwSample','bwClear','bwConvert','bwRate','bwChannels']) $(id).disabled = on;
      $('bwStop').disabled = !on; $('bwRetry').disabled = on || !rows.some(row => row.status === 'failed');
      $('bwConvert').setAttribute('aria-busy', String(on)); renderRows();
    }
    function inspect(file, bytes){
      if(!/\\.mp3$/i.test(file.name)) throw Error('err_format');
      const b=new Uint8Array(bytes);let at=0, duration=0, frames=0, first=null;
      const tag=(p,s)=>s.split('').every((c,i)=>b[p+i]===c.charCodeAt(0));
      if(tag(0,'ID3')){
        if(b.length<10||b[3]<2||b[3]>4||[b[6],b[7],b[8],b[9]].some(x=>x>127))throw Error('err_format');
        at=10+(b[6]*2097152+b[7]*16384+b[8]*128+b[9])+((b[3]===4&&(b[5]&16))?10:0);
      }
      while(at+4<=b.length){
        if(tag(at,'TAG')&&b.length-at===128){at=b.length;break;}
        if(b[at]!==255||(b[at+1]&224)!==224)throw Error('err_format');
        const version=(b[at+1]>>3)&3, layer=(b[at+1]>>1)&3, index=b[at+2]>>4, sr=(b[at+2]>>2)&3;
        if(version===1||layer!==1||index===0||index===15||sr===3)throw Error('err_format');
        const rate=[44100,48000,32000][sr]/(version===3?1:version===2?2:4);
        const kbps=(version===3?[0,32,40,48,56,64,80,96,112,128,160,192,224,256,320]:[0,8,16,24,32,40,48,56,64,80,96,112,128,144,160])[index];
        const length=Math.floor((version===3?144000:72000)*kbps/rate)+((b[at+2]>>1)&1);
        const count=(b[at+3]>>6)===3?1:2;
        if(at+length>b.length||length<4)throw Error('err_format');
        if(first&&(first.rate!==rate||first.channels!==count))throw Error('err_format');
        if(!first)first={rate,channels:count};
        duration+=(version===3?1152:576)/rate;frames++;at+=length;
        if(duration>300.1)throw Error('err_limit');
      }
      if(frames<2||at!==b.length)throw Error('err_format');
      return {...first,duration};
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
    async function writeWav(decoded, rate, channelMode, row, onProgress){
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
        let last = performance.now();
        for(let start=0;start<frames;start+=8192){
          const end=Math.min(start+8192,frames), chunk=new ArrayBuffer((end-start)*channels*2), pcm=new DataView(chunk);
          for(let i=start;i<end;i++){
            const at=Math.min(decoded.length-1,Math.floor(i*decoded.sampleRate/rate));
            const a=Number.isFinite(left[at])?left[at]:0, b=right&&Number.isFinite(right[at])?right[at]:a;
            const sample=(value)=>{const x=Math.max(-1,Math.min(1,value));return Math.round(x*(x<0?32768:32767));};
            pcm.setInt16((i-start)*channels*2,sample(channelMode==='mono'&&right?(a+b)/2:a),true);
            if(channels===2)pcm.setInt16((i-start)*4+2,sample(b),true);
          }
          await write(chunk);
          if(performance.now()-last>40){onProgress(end/frames);await yieldUi();last=performance.now();}
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
      let name = stem + '.wav', n = 2;
      while(rows.some(row => row.outputName === name)){ name = stem + '-' + n++ + '.wav'; }
      return name;
    }
    async function convert(){
      if(busy) return;
      if(!rows.some(row => row.status === 'pending')){ showError('empty'); return; }
      stopRequested = false; lock(true); started = performance.now();
      hud.hidden = false; hud.className = 'bcw-hud is-on mb-3'; hud.setAttribute('role','status');
      const clock = () => { $('bwTime').textContent = fill(M.elapsed, {s:((performance.now()-started)/1000).toFixed(1)}); };
      clock(); timer = setInterval(clock, 100);
      const pending = rows.filter(row => row.status === 'pending');
      let done = 0;
      try{
        const rate = Number($('bwRate').value);
        if(![44100,48000].includes(rate)) throw Error('err_encoder');
        const channelMode = $('bwChannels').value;
        if(!['keep','mono'].includes(channelMode)) throw Error('err_encoder');
        const Offline = window.OfflineAudioContext || window.webkitOfflineAudioContext;
        if(!Offline) throw Error('err_decode');
        for(const row of pending){
          if(stopRequested) break;
          row.status = 'working'; renderRows(); $('bwCurrent').textContent = row.file.name + ' (' + (done + 1) + '/' + pending.length + ')';
          const base = done / pending.length * 100, span = 100 / pending.length;
          try{
            progress(base + span * .05, 'read'); await yieldUi();
            if(row.file.size > MAX_BYTES || !row.file.size) throw Error('err_limit');
            const bytes = await row.file.arrayBuffer(); const info = inspect(row.file, bytes);
            progress(base + span * .18, 'decode'); await yieldUi();
            let decoded;
            try{ decoded = await new Offline(2, 1, rate).decodeAudioData(bytes.slice(0)); }
            catch(e){ throw Error('err_decode'); }
            if(decoded.duration > MAX_SEC + .01 || decoded.numberOfChannels !== info.channels) throw Error('err_limit');
            progress(base + span * .28, 'encode'); await yieldUi();
            const seconds = decoded.duration;
            row.outputName = outputName(row.file);
            await writeWav(decoded, rate, channelMode, row, fraction => progress(base + span * (.28 + fraction * .68), 'encode'));
            decoded = null;
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
        $('bwOutput').hidden = false;
        $('bwResult').textContent = fill(M.result, {ok, fail, pending:remaining, rate:rate/1000});
        if(!ok) showError('failed');
        else { progress(stopRequested ? done / pending.length * 100 : 100, 'done'); hud.classList.remove('is-on'); hud.classList.add('is-done');
          if(stopRequested) $('bwStep').textContent = M.stopped;
        }
      }catch(e){ showError(e && M[e.message] ? e.message : 'failed'); }
      finally{ clearInterval(timer); clock(); lock(false); }
    }
    async function loadSample(){
      if(busy) return;
      rows.forEach(releaseRow); rows.length = 0; lock(true); hud.hidden = false; hud.className = 'bcw-hud is-on mb-3'; progress(2, 'read');
      try{
        const lame = await loadEncoder();
        const rate = 44100, frames = rate * 3;
        for(const [sourceRate, freq] of [[192,440],[64,660]]){
          const encoder = new lame.Mp3Encoder(2, rate, sourceRate), parts = [];
          for(let at=0;at<frames;at+=1152){
            const n = Math.min(1152, frames-at), left = new Int16Array(n), right = new Int16Array(n);
            for(let i=0;i<n;i++){
              const t=(at+i)/rate, fade=Math.min(1,t*20,(3-t)*20);
              left[i]=Math.round(Math.sin(2*Math.PI*freq*t)*8000*fade);
              right[i]=Math.round(Math.sin(2*Math.PI*(freq+110)*t)*8000*fade);
            }
            const chunk=encoder.encodeBuffer(left,right); if(chunk.length) parts.push(new Uint8Array(chunk));
            if(at%11520===0) await yieldUi();
          }
          const tail=encoder.flush(); if(tail.length) parts.push(new Uint8Array(tail));
          rows.push({file:new File(parts, M.sample_name + '-' + sourceRate + 'kbps.mp3',{type:'audio/mpeg'}), sample:true, status:'pending', blob:null, handle:null, outputBytes:0, error:'', seconds:0, outputName:''});
        }
        $('bwRate').value = '44100'; $('bwChannels').value = 'keep'; lock(false); await convert();
      }catch(e){ showError('err_sample'); } finally { lock(false); }
    }
    fileInput.addEventListener('change', () => addFiles(fileInput.files));
    $('bwDrop').addEventListener('dragover', event => event.preventDefault());
    $('bwDrop').addEventListener('drop', event => { event.preventDefault(); addFiles(event.dataTransfer.files); });
    $('bwConvert').addEventListener('click', convert);
    $('bwStop').addEventListener('click', () => { stopRequested = true; });
    $('bwRetry').addEventListener('click', () => { for(const row of rows) if(row.status === 'failed'){ row.status = 'pending'; row.error = ''; } renderRows(); convert(); });
    $('bwSample').addEventListener('click', loadSample);
    $('bwClear').addEventListener('click', () => { if(busy) return; rows.forEach(releaseRow); rows.length = 0; renderRows(); hud.hidden = true; $('bwOutput').hidden = true; });
    window.addEventListener('pagehide', () => { rows.forEach(releaseRow); });
    renderRows(); loadSample();
  })();
</script>`;
	/** 当前工具 catalog 元数据。 */
	const toolMeta = getToolBySlug('batch-convert-mp3-files-to-wav');
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
		ogType: 'webwite',
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
