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
const P = 'tool_convert_an_ogg_file_to_mp3';

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
 * Render the complete OGG/Opus to MP3 conversion job (P5).
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderConvertAnOggFileToMp3Page = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/convert-an-ogg-file-to-mp3';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, `${P}_title`)} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, `${P}_description`);

	const navItems = buildToolPageNavItems(opts.lang, opts.defaultLang);

	/** hreflang 映射始终带显式语言段。 */
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
			currentSlug: 'convert-an-ogg-file-to-mp3',
			currentAnchor: '#ogg-mp3',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

	const tr = (key: string) => escapeHtml(t(opts.lang, `${P}_${key}`));
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
	const messages = Object.fromEntries(uiKeys.map((key) => [key, t(opts.lang, `${P}_${key}`)]));
	const contentHtml = `
    <div id="ogg-mp3" class="tool-page-heading mb-3"><h1 class="h4">${tr('title')}</h1><p>${tr('desc')}</p></div>
    <section class="tool-panel" id="oggPanel">
      <label class="tool-dropzone mb-3" id="oggDrop" for="oggFile"><input id="oggFile" type="file" accept=".ogg,.oga,.opus,audio/ogg,audio/opus,application/ogg"><span class="tool-dropzone-title">${tr('choose')}</span><span class="tool-dropzone-hint">${tr('hint')}</span><span id="oggName" class="tool-dropzone-file"></span></label>
      <div class="tools-bar d-flex flex-wrap mb-3" style="gap:.5rem">
        <button id="oggConvert" class="btn btn-primary" type="button">${tr('convert')}</button>
        <button id="oggDownload" class="btn btn-outline-primary" type="button" disabled>${tr('download')}</button>
        <button id="oggSample" class="btn btn-outline-secondary" type="button">${tr('sample')}</button>
        <button id="oggClear" class="btn btn-outline-secondary" type="button">${tr('clear')}</button>
      </div>
      <details class="mb-3"><summary>${tr('advanced')}</summary><label for="oggBitrate" class="form-label mt-2">${tr('bitrate')}</label><select id="oggBitrate" class="form-select form-select-sm"><option value="128">128 kbps</option><option value="192" selected>192 kbps</option><option value="320">320 kbps</option></select><p class="form-text">${tr('settings_hint')}</p></details>
      <div id="oggHud" class="bcw-hud mb-3" role="status" aria-live="polite" hidden>
        <div class="bcw-hud-top"><div class="bcw-hud-spin" aria-hidden="true"></div><div class="bcw-hud-pct" id="oggPct">0%</div><div class="bcw-hud-copy"><div class="bcw-hud-title">${tr('progress')}</div><div class="bcw-hud-step" id="oggStep"></div><div class="bcw-hud-time" id="oggTime"></div></div></div>
        <div class="progress" style="height:1.35rem"><div id="oggBar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div><span class="bcw-hud-sheen" aria-hidden="true"></span></div>
        <ol class="bcw-hud-steps"><li data-step="read">${tr('read')}</li><li data-step="decode">${tr('decode')}</li><li data-step="encode">${tr('encode')}</li></ol><div class="bcw-hud-url" id="oggCurrent"></div>
      </div>
      <div id="oggOutput" hidden><h2 class="h5">${tr('preview')}</h2><p id="oggResult"></p><audio id="oggAudio" controls preload="metadata" style="max-width:100%" aria-label="${tr('preview')}"></audio></div>
    </section>`;

	const igHtml = renderToolIgSections({
		lang: opts.lang,
		prefix: P,
		mode: 'rules',
		howItemCount: 4,
		whyChooseItemCount: 4,
		ruleItemCount: 4,
		usecaseCount: 2,
	});
	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{
				label: 'MDN: decodeAudioData',
				href: 'https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/decodeAudioData',
			},
		],
	});
	const extraHeadHtml = `<style>${bcwHudCss({ hudId: 'oggHud', convertBtnId: 'oggConvert' })}#oggHud.is-error{border-color:#b91c1c;background:#fff1f2}#oggHud:not(.is-on) .bcw-hud-spin{animation:none}#oggBitrate{max-width:18rem}.site-footer nav.d-inline{display:inline-flex!important;flex-wrap:wrap;justify-content:center;max-width:100%}</style>`;
	const extraBodyHtml = `<script>
  (function(){
    'use strict';
    const M = ${JSON.stringify(messages).replace(/</g, '\\u003c')};
    const $ = id => document.getElementById(id);
    const panel=$('oggPanel'), fileInput=$('oggFile'), bitrate=$('oggBitrate'), hud=$('oggHud'), audio=$('oggAudio');
    let selected=null, busy=false, outputUrl='', encoderPromise=null, timer=0, started=0;
    const yieldUi = () => new Promise(resolve => requestAnimationFrame(() => setTimeout(resolve,0)));
    const fill = (text, values) => text.replace(/{(\\w+)}/g, (_,key) => String(values[key] ?? ''));
    function discard(){audio.pause();audio.removeAttribute('src');audio.load();if(outputUrl)URL.revokeObjectURL(outputUrl);outputUrl='';$('oggDownload').disabled=true;$('oggOutput').hidden=true;}
    function lock(on){busy=on;panel.querySelectorAll('button,input,select').forEach(el=>el.disabled=on);$('oggDownload').disabled=on||!outputUrl;$('oggConvert').setAttribute('aria-busy',String(on));}
    function progress(pct,step){$('oggPct').textContent=Math.round(pct)+'%';$('oggBar').style.width=pct+'%';$('oggBar').setAttribute('aria-valuenow',String(Math.round(pct)));$('oggStep').textContent=M[step];hud.querySelectorAll('[data-step]').forEach(el=>el.classList.toggle('is-on',el.dataset.step===step));}
    function fail(key){hud.hidden=false;hud.classList.remove('is-on');hud.classList.remove('is-done');hud.classList.add('is-error','is-fail');$('oggPct').textContent='—';$('oggBar').style.width='0%';$('oggBar').setAttribute('aria-valuenow','0');hud.setAttribute('role','alert');$('oggStep').textContent=M[key]||M.failed;}
    function choose(file){if(busy)return;discard();selected=file||null;$('oggName').textContent=file?file.name:'';hud.hidden=true;fileInput.value='';}
    /** Validate OggS pages and Vorbis/Opus identification before decodeAudioData. */
    function inspectOgg(bytes){
      const u=new Uint8Array(bytes), n=u.byteLength;
      const ascii=(at,len)=>String.fromCharCode(...u.subarray(at,at+len));
      if(n<27||ascii(0,4)!=='OggS')throw Error('err_format');
      let p=0, pages=0, sawCodec=false, sawOpus=false, channels=0, rate=0, granule=-1;
      while(p+27<=n){
        if(++pages>20000||ascii(p,4)!=='OggS')throw Error('err_format');
        const header=p, segs=u[header+26]; if(header+27+segs>n)throw Error('err_format');
        let body=0; for(let i=0;i<segs;i++)body+=u[header+27+i];
        const start=header+27+segs, end=start+body; if(end>n)throw Error('err_format');
        const gLo=(u[header+6]|(u[header+7]<<8)|(u[header+8]<<16)|(u[header+9]<<24))>>>0;
        const gHi=(u[header+10]|(u[header+11]<<8)|(u[header+12]<<16)|(u[header+13]<<24))>>>0;
        if(!(gLo===0xffffffff&&gHi===0xffffffff))granule=gHi*4294967296+gLo;
        if(!sawCodec){
          const payload=u.subarray(start,end); const text=ascii(start, Math.min(payload.length,16));
          if(text.startsWith('OpusHead')&&payload.length>=19){
            channels=payload[9]; rate=(payload[12]|(payload[13]<<8)|(payload[14]<<16)|(payload[15]<<24))>>>0||48000; sawCodec=true; sawOpus=true;
          } else if(payload.length>=30&&payload[0]===1&&ascii(start+1,6)==='vorbis'){
            channels=payload[11]; rate=(payload[12]|(payload[13]<<8)|(payload[14]<<16)|(payload[15]<<24))>>>0; sawCodec=true;
          }
        }
        p=end; if((u[header+5]&4)!==0&&sawCodec)break;
      }
      if(!sawCodec||![1,2].includes(channels)||!rate||rate<8000||rate>192000)throw Error('err_format');
      const duration=granule>=0?(sawOpus?granule/48000:granule/rate):(n/(rate*channels));
      if(duration>600.1)throw Error('err_limit');
      return {channels, rate, duration};
    }
    function loadEncoder(){
      if(window.lamejs)return Promise.resolve(window.lamejs);
      if(!encoderPromise)encoderPromise=new Promise((resolve,reject)=>{
        const script=document.createElement('script');let timeout;
        const bad=()=>{clearTimeout(timeout);script.remove();encoderPromise=null;reject(Error('err_encoder'));};
        script.src='/vendor/lamejs/lamejs.iife.js';script.onerror=bad;
        script.onload=()=>{clearTimeout(timeout);if(window.lamejs)resolve(window.lamejs);else bad();};
        timeout=setTimeout(bad,20000);document.head.appendChild(script);
      });return encoderPromise;
    }
    async function convert(){
      if(busy)return;discard();if(!selected){fail('empty');return;}
      lock(true);hud.hidden=false;hud.className='bcw-hud is-on mb-3';hud.setAttribute('role','status');$('oggCurrent').textContent=selected.name;started=performance.now();
      const clock=()=>{$('oggTime').textContent=fill(M.elapsed,{s:((performance.now()-started)/1000).toFixed(1)});};clock();timer=setInterval(clock,100);
      try{
        progress(2,'read');await yieldUi();
        if(selected.size>40*1024*1024)throw Error('err_limit');
        const bytes=await selected.arrayBuffer();const info=inspectOgg(bytes);
        progress(12,'decode');await yieldUi();
        const Offline=window.OfflineAudioContext||window.webkitOfflineAudioContext;if(!Offline)throw Error('err_decode');
        let decoded;try{decoded=await new Offline(info.channels,1,44100).decodeAudioData(bytes.slice(0));}catch(e){throw Error('err_decode');}
        if(decoded.duration>600.01||![1,2].includes(decoded.numberOfChannels))throw Error('err_limit');
        info.channels=decoded.numberOfChannels;info.duration=decoded.duration;
        progress(22,'encode');await yieldUi();const lame=await loadEncoder();
        const kbps=Number(bitrate.value);if(![128,192,320].includes(kbps))throw Error('err_encoder');
        const encoder=new lame.Mp3Encoder(info.channels,44100,kbps), parts=[];
        const left=decoded.getChannelData(0),right=info.channels===2?decoded.getChannelData(1):null;
        const pcm=(data,start,end)=>{const out=new Int16Array(end-start);for(let i=start;i<end;i++){const value=Number.isFinite(data[i])?Math.max(-1,Math.min(1,data[i])):0;out[i-start]=Math.round(value*(value<0?32768:32767));}return out;};
        let last=performance.now();
        for(let start=0;start<decoded.length;start+=1152){
          const end=Math.min(start+1152,decoded.length), l=pcm(left,start,end);
          const chunk=right?encoder.encodeBuffer(l,pcm(right,start,end)):encoder.encodeBuffer(l);if(chunk.length)parts.push(new Uint8Array(chunk));
          if(performance.now()-last>40){progress(22+75*end/decoded.length,'encode');await yieldUi();last=performance.now();}
        }
        const final=encoder.flush();if(final.length)parts.push(new Uint8Array(final));
        const blob=new Blob(parts,{type:'audio/mpeg'});if(!blob.size)throw Error('err_encoder');
        outputUrl=URL.createObjectURL(blob);audio.src=outputUrl;$('oggOutput').hidden=false;
        $('oggResult').textContent=fill(M.result,{seconds:info.duration.toFixed(2),input:(selected.size/1024).toFixed(1),output:(blob.size/1024).toFixed(1),kbps,channels:info.channels});
        progress(100,'done');hud.classList.remove('is-on');hud.classList.add('is-done');
      }catch(e){discard();fail(e&&M[e.message]?e.message:'failed');}
      finally{clearInterval(timer);clock();lock(false);}
    }
    async function loadSample(){
      if(busy)return;choose(null);lock(true);hud.hidden=false;hud.className='bcw-hud is-on mb-3';hud.setAttribute('role','status');progress(2,'read');
      try{
        await yieldUi();
        const response=await fetch('/samples/convert-an-ogg-file-to-mp3.ogg');
        if(!response.ok)throw Error('err_sample');
        const bytes=await response.arrayBuffer();
        lock(false);bitrate.value='192';choose(new File([bytes],M.sample_name+'.ogg',{type:'audio/ogg'}));await convert();
      }catch(e){fail('err_sample');}finally{lock(false);}
    }
    fileInput.addEventListener('change',()=>choose(fileInput.files[0]));
    $('oggDrop').addEventListener('dragover',event=>event.preventDefault());
    $('oggDrop').addEventListener('drop',event=>{event.preventDefault();if(busy)return;const files=event.dataTransfer.files;if(files.length!==1){choose(null);fail('err_file');return;}choose(files[0]);});
    bitrate.addEventListener('change',()=>{discard();hud.hidden=true;});
    $('oggConvert').addEventListener('click',convert);$('oggSample').addEventListener('click',loadSample);
    $('oggClear').addEventListener('click',()=>choose(null));
    $('oggDownload').addEventListener('click',()=>{if(!outputUrl||busy)return;const link=document.createElement('a');link.href=outputUrl;link.download=(selected.name.replace(/\\.[^.]+$/,'')||'audio')+'.mp3';document.body.appendChild(link);link.click();link.remove();});
    window.addEventListener('pagehide',()=>{clearInterval(timer);if(outputUrl)URL.revokeObjectURL(outputUrl);});
    loadSample();
  })();</script>`;
	const toolMeta = getToolBySlug('convert-an-ogg-file-to-mp3');
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
