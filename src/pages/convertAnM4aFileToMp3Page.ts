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
const P = 'tool_convert_an_m4a_file_to_mp3';

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
 * Render a complete M4A/AAC to MP3 conversion.
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderConvertAnM4aFileToMp3Page = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/convert-an-m4a-file-to-mp3';
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
			currentSlug: 'convert-an-m4a-file-to-mp3',
			currentAnchor: '#m4a-mp3',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

  const tr = (key: string) => escapeHtml(t(opts.lang, `${P}_${key}`));
  const uiKeys = ['read','decode','encode','done','failed','elapsed','err_file','err_format','err_limit','err_decode','err_encoder','err_sample','sample_name','result','empty'];
  const messages = Object.fromEntries(uiKeys.map(key => [key, t(opts.lang, `${P}_${key}`)]));
  const contentHtml = `
    <div id="m4a-mp3" class="tool-page-heading mb-3"><h1 class="h4">${tr('title')}</h1><p>${tr('desc')}</p></div>
    <section class="tool-panel" id="m4aPanel">
      <label class="tool-dropzone mb-3" id="m4aDrop" for="m4aFile"><input id="m4aFile" type="file" accept=".m4a,.aac,audio/mp4,audio/x-m4a,audio/aac"><span class="tool-dropzone-title">${tr('choose')}</span><span class="tool-dropzone-hint">${tr('hint')}</span><span id="m4aName" class="tool-dropzone-file"></span></label>
      <div class="tools-bar d-flex flex-wrap mb-3" style="gap:.5rem">
        <button id="m4aConvert" class="btn btn-primary" type="button">${tr('convert')}</button>
        <button id="m4aDownload" class="btn btn-outline-primary" type="button" disabled>${tr('download')}</button>
        <button id="m4aSample" class="btn btn-outline-secondary" type="button">${tr('sample')}</button>
        <button id="m4aClear" class="btn btn-outline-secondary" type="button">${tr('clear')}</button>
      </div>
      <details class="mb-3"><summary>${tr('advanced')}</summary><label for="m4aBitrate" class="form-label mt-2">${tr('bitrate')}</label><select id="m4aBitrate" class="form-select form-select-sm"><option value="128">128 kbps</option><option value="192" selected>192 kbps</option><option value="320">320 kbps</option></select><p class="form-text">${tr('settings_hint')}</p></details>
      <div id="m4aHud" class="bcw-hud mb-3" role="status" aria-live="polite" hidden>
        <div class="bcw-hud-top"><div class="bcw-hud-spin" aria-hidden="true"></div><div class="bcw-hud-pct" id="m4aPct">0%</div><div class="bcw-hud-copy"><div class="bcw-hud-title">${tr('progress')}</div><div class="bcw-hud-step" id="m4aStep"></div><div class="bcw-hud-time" id="m4aTime"></div></div></div>
        <div class="progress" style="height:1.35rem"><div id="m4aBar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div><span class="bcw-hud-sheen" aria-hidden="true"></span></div>
        <ol class="bcw-hud-steps"><li data-step="read">${tr('read')}</li><li data-step="decode">${tr('decode')}</li><li data-step="encode">${tr('encode')}</li></ol><div class="bcw-hud-url" id="m4aCurrent"></div>
      </div>
      <div id="m4aOutput" hidden><h2 class="h5">${tr('preview')}</h2><p id="m4aResult"></p><audio id="m4aAudio" controls preload="metadata" style="max-width:100%" aria-label="${tr('preview')}"></audio></div>
    </section>`;
  const igHtml = renderToolIgSections({lang:opts.lang,prefix:P,mode:'rules',howItemCount:3,whyChooseItemCount:3,ruleItemCount:3,usecaseCount:2});
  const referencesHtml = renderToolReferencesSection({lang:opts.lang,links:[{label:'MDN: decodeAudioData',href:'https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/decodeAudioData'}]});
  const extraHeadHtml = `<style>${bcwHudCss({hudId:'m4aHud',convertBtnId:'m4aConvert'})}#m4aHud.is-error{border-color:#b91c1c;background:#fff1f2}#m4aHud:not(.is-on) .bcw-hud-spin{animation:none}#m4aBitrate{max-width:18rem}.site-footer nav.d-inline{display:inline-flex!important;flex-wrap:wrap;justify-content:center;max-width:100%}</style>`;
  const extraBodyHtml = `<script>
  (function(){
    'use strict';
    const M = ${JSON.stringify(messages).replace(/</g, '\\u003c')};
    const $ = id => document.getElementById(id);
    const panel=$('m4aPanel'), fileInput=$('m4aFile'), bitrate=$('m4aBitrate'), hud=$('m4aHud'), audio=$('m4aAudio');
    let selected=null, busy=false, outputUrl='', encoderPromise=null, timer=0, started=0;
    const yieldUi = () => new Promise(resolve => requestAnimationFrame(() => setTimeout(resolve,0)));
    const fill = (text, values) => text.replace(/{(\\w+)}/g, (_,key) => String(values[key] ?? ''));
    function discard(){audio.pause();audio.removeAttribute('src');audio.load();if(outputUrl)URL.revokeObjectURL(outputUrl);outputUrl='';$('m4aDownload').disabled=true;$('m4aOutput').hidden=true;}
    function lock(on){busy=on;panel.querySelectorAll('button,input,select').forEach(el=>el.disabled=on);$('m4aDownload').disabled=on||!outputUrl;$('m4aConvert').setAttribute('aria-busy',String(on));}
    function progress(pct,step){$('m4aPct').textContent=Math.round(pct)+'%';$('m4aBar').style.width=pct+'%';$('m4aBar').setAttribute('aria-valuenow',String(Math.round(pct)));$('m4aStep').textContent=M[step];hud.querySelectorAll('[data-step]').forEach(el=>el.classList.toggle('is-on',el.dataset.step===step));}
    function fail(key){hud.hidden=false;hud.classList.remove('is-on');hud.classList.remove('is-done');hud.classList.add('is-error','is-fail');$('m4aPct').textContent='—';$('m4aBar').style.width='0%';$('m4aBar').setAttribute('aria-valuenow','0');hud.setAttribute('role','alert');$('m4aStep').textContent=M[key]||M.failed;}
    function choose(file){if(busy)return;discard();selected=file||null;$('m4aName').textContent=file?file.name:'';hud.hidden=true;fileInput.value='';}
    // Bound container traversal and reject video/encrypted tracks before decoding.
    function inspectInput(bytes){
      const v=new DataView(bytes),n=v.byteLength,u=new Uint8Array(bytes);
      const tag=at=>String.fromCharCode(...u.subarray(at,at+4));
      if(n<8)throw Error('err_format');
      if(u[0]===255&&(u[1]&246)===240){
        let p=0,duration=0,channels=0;const rates=[96000,88200,64000,48000,44100,32000,24000,22050,16000,12000,11025,8000,7350];
        while(p<n){
          if(p+7>n||u[p]!==255||(u[p+1]&246)!==240)throw Error('err_format');
          const rate=rates[(u[p+2]>>2)&15],ch=((u[p+2]&1)<<2)|(u[p+3]>>6);
          const size=((u[p+3]&3)<<11)|(u[p+4]<<3)|(u[p+5]>>5),header=(u[p+1]&1)?7:9;
          if(!rate||![1,2].includes(ch)||size<=header||p+size>n||(channels&&channels!==ch))throw Error('err_format');
          channels=ch;duration+=1024*((u[p+6]&3)+1)/rate;p+=size;
          if(duration>600.1)throw Error('err_limit');
        }
        return {channels,duration};
      }
      if(tag(4)!=='ftyp')throw Error('err_format');
      let boxes=0;
      function walk(from,to,depth=0){
        if(depth>8)throw Error('err_format');
        const out=[];let p=from;
        while(p<to){
          if(++boxes>20000||p+8>to)throw Error('err_format');
          let size=v.getUint32(p),header=8;const type=tag(p+4);
          if(size===1){if(p+16>to)throw Error('err_format');size=v.getUint32(p+8)*4294967296+v.getUint32(p+12);header=16;}
          if(size===0)size=to-p;
          if(!Number.isSafeInteger(size)||size<header||p+size>to)throw Error('err_format');
          out.push({type,start:p+header,end:p+size});p+=size;
        }return out;
      }
      const top=walk(0,n),moov=top.find(b=>b.type==='moov');
      if(!moov||!top.some(b=>b.type==='mdat')||top.some(b=>b.type==='moof'))throw Error('err_format');
      let audioTracks=0,info;
      for(const track of walk(moov.start,moov.end).filter(b=>b.type==='trak')){
        const mdia=walk(track.start,track.end).find(b=>b.type==='mdia');if(!mdia)throw Error('err_format');
        const children=walk(mdia.start,mdia.end),handler=children.find(b=>b.type==='hdlr'),mdhd=children.find(b=>b.type==='mdhd');
        if(!handler||handler.end-handler.start<12||tag(handler.start+8)!=='soun')throw Error('err_format');
        if(++audioTracks!==1||!mdhd)throw Error('err_format');
        const version=v.getUint8(mdhd.start);let scale,duration;
        if(version===0&&mdhd.end-mdhd.start>=20){scale=v.getUint32(mdhd.start+12);duration=v.getUint32(mdhd.start+16);}
        else if(version===1&&mdhd.end-mdhd.start>=32){scale=v.getUint32(mdhd.start+20);duration=v.getUint32(mdhd.start+24)*4294967296+v.getUint32(mdhd.start+28);}
        else throw Error('err_format');
        if(!scale||!duration||!Number.isSafeInteger(duration))throw Error('err_format');
        duration/=scale;if(duration>600.1)throw Error('err_limit');
        const minf=children.find(b=>b.type==='minf');if(!minf)throw Error('err_format');
        const stbl=walk(minf.start,minf.end).find(b=>b.type==='stbl');if(!stbl)throw Error('err_format');
        const stsd=walk(stbl.start,stbl.end).find(b=>b.type==='stsd');
        if(!stsd||stsd.end-stsd.start<8||v.getUint32(stsd.start+4)!==1)throw Error('err_format');
        const entries=walk(stsd.start+8,stsd.end),entry=entries[0];
        if(entries.length!==1||!['mp4a','alac'].includes(entry.type)||entry.end-entry.start<28)throw Error('err_format');
        const channels=v.getUint16(entry.start+16);if(![1,2].includes(channels))throw Error('err_limit');
        info={channels,duration};
      }
      if(!info)throw Error('err_format');return info;
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
      lock(true);hud.hidden=false;hud.className='bcw-hud is-on mb-3';hud.setAttribute('role','status');$('m4aCurrent').textContent=selected.name;started=performance.now();
      const clock=()=>{$('m4aTime').textContent=fill(M.elapsed,{s:((performance.now()-started)/1000).toFixed(1)});};clock();timer=setInterval(clock,100);
      try{
        progress(2,'read');await yieldUi();
        if(selected.size>40*1024*1024)throw Error('err_limit');
        const bytes=await selected.arrayBuffer();const info=inspectInput(bytes);
        progress(12,'decode');await yieldUi();
        const Offline=window.OfflineAudioContext||window.webkitOfflineAudioContext;if(!Offline)throw Error('err_decode');
        let decoded;try{decoded=await new Offline(info.channels,1,44100).decodeAudioData(bytes);}catch(e){throw Error('err_decode');}
        if(decoded.duration>600.01||![1,2].includes(decoded.numberOfChannels))throw Error('err_limit');
        // The MP4 sample entry may declare stereo for a mono AAC stream.
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
        outputUrl=URL.createObjectURL(blob);audio.src=outputUrl;$('m4aOutput').hidden=false;
        $('m4aResult').textContent=fill(M.result,{seconds:info.duration.toFixed(2),input:(selected.size/1024).toFixed(1),output:(blob.size/1024).toFixed(1),kbps,channels:info.channels});
        progress(100,'done');hud.classList.remove('is-on');hud.classList.add('is-done');
      }catch(e){discard();fail(e&&M[e.message]?e.message:'failed');}
      finally{clearInterval(timer);clock();lock(false);}
    }
    async function loadSample(){
      if(busy)return;choose(null);lock(true);hud.hidden=false;hud.className='bcw-hud is-on mb-3';hud.setAttribute('role','status');progress(2,'read');
      try{
        await yieldUi();
        const response=await fetch('/samples/convert-an-m4a-file-to-mp3.m4a');
        if(!response.ok)throw Error('err_sample');
        const bytes=await response.arrayBuffer();
        lock(false);bitrate.value='192';choose(new File([bytes],M.sample_name+'.m4a',{type:'audio/mp4'}));await convert();
      }catch(e){fail('err_sample');}finally{lock(false);}
    }
    fileInput.addEventListener('change',()=>choose(fileInput.files[0]));
    $('m4aDrop').addEventListener('dragover',event=>event.preventDefault());
    $('m4aDrop').addEventListener('drop',event=>{event.preventDefault();if(busy)return;const files=event.dataTransfer.files;if(files.length!==1){choose(null);fail('err_file');return;}choose(files[0]);});
    bitrate.addEventListener('change',()=>{discard();hud.hidden=true;});
    $('m4aConvert').addEventListener('click',convert);$('m4aSample').addEventListener('click',loadSample);
    $('m4aClear').addEventListener('click',()=>choose(null));
    $('m4aDownload').addEventListener('click',()=>{if(!outputUrl||busy)return;const link=document.createElement('a');link.href=outputUrl;link.download=(selected.name.replace(/\\.[^.]+$/,'')||'audio')+'.mp3';document.body.appendChild(link);link.click();link.remove();});
    window.addEventListener('pagehide',()=>{clearInterval(timer);if(outputUrl)URL.revokeObjectURL(outputUrl);});
    loadSample();
  })();</script>`;
  const toolMeta=getToolBySlug('convert-an-m4a-file-to-mp3');
  const extraSectionsHtml=toolMeta?renderToolExtraSections({lang:opts.lang,defaultLang:opts.defaultLang,tool:toolMeta}):'';
  const toolJsonLd=toolMeta?buildToolJsonLd({lang:opts.lang,defaultLang:opts.defaultLang,tool:toolMeta,name:t(opts.lang,`${P}_title`),description,canonicalPath}):'';
  return renderLayout({lang:opts.lang,title,description,canonicalPath,ogImageUrl:'https://onlinefreetools.org/og-image.png',ogType:'website',alternates,headerHtml,sidebarHtml,contentHtml:`<div dir="${opts.lang === 'ar' ? 'rtl' : 'ltr'}">${contentHtml}${igHtml}${extraSectionsHtml}${referencesHtml}</div>`,footerHtml,extraHeadHtml:`${extraHeadHtml}${toolJsonLd}`,extraBodyHtml,mainClass:'container py-4 tool-page',includeSidebarToggleScript:true,sidebarAutoCloseSelector:'#toolNav a'});
};
