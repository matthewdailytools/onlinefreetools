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
const P = 'tool_reduce_an_mp3_file_size';

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
 * Compress an existing MP3 and measure the resulting file size.
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderReduceAnMp3FileSizePage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/reduce-an-mp3-file-size';
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
			currentSlug: 'reduce-an-mp3-file-size',
			currentAnchor: '#mp3-size',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

  const tr = (key: string) => escapeHtml(t(opts.lang, `${P}_${key}`));
  const uiKeys = ['read','decode','encode','done','failed','elapsed','err_file','err_format','err_limit','err_decode','err_encoder','sample_name','result','empty','saved','not_smaller'];
  const messages = Object.fromEntries(uiKeys.map(key => [key, t(opts.lang, `${P}_${key}`)]));
  const contentHtml = `
    <div id="mp3-size" class="tool-page-heading mb-3"><h1 class="h4">${tr('title')}</h1><p>${tr('desc')}</p></div>
    <section class="tool-panel" id="sizePanel">
      <label class="tool-dropzone mb-3" id="sizeDrop" for="sizeFile"><input id="sizeFile" type="file" accept=".mp3,audio/mpeg"><span class="tool-dropzone-title">${tr('choose')}</span><span class="tool-dropzone-hint">${tr('hint')}</span><span id="sizeName" class="tool-dropzone-file"></span></label>
      <div class="tools-bar d-flex flex-wrap mb-3" style="gap:.5rem">
        <button id="sizeConvert" class="btn btn-primary" type="button">${tr('convert')}</button>
        <button id="sizeDownload" class="btn btn-outline-primary" type="button" disabled>${tr('download')}</button>
        <button id="sizeSample" class="btn btn-outline-secondary" type="button">${tr('sample')}</button>
        <button id="sizeClear" class="btn btn-outline-secondary" type="button">${tr('clear')}</button>
      </div>
      <details class="mb-3"><summary>${tr('advanced')}</summary><label for="sizeBitrate" class="form-label mt-2">${tr('bitrate')}</label><select id="sizeBitrate" class="form-select form-select-sm"><option value="64">64 kbps</option><option value="96">96 kbps</option><option value="128" selected>128 kbps</option><option value="192">192 kbps</option></select><label for="sizeChannels" class="form-label mt-2">${tr('channels')}</label><select id="sizeChannels" class="form-select form-select-sm"><option value="keep">${tr('keep')}</option><option value="mono">${tr('mono')}</option></select><p class="form-text">${tr('settings_hint')}</p></details>
      <div id="sizeHud" class="bcw-hud mb-3" role="status" aria-live="polite" hidden>
        <div class="bcw-hud-top"><div class="bcw-hud-spin" aria-hidden="true"></div><div class="bcw-hud-pct" id="sizePct">0%</div><div class="bcw-hud-copy"><div class="bcw-hud-title">${tr('progress')}</div><div class="bcw-hud-step" id="sizeStep"></div><div class="bcw-hud-time" id="sizeTime"></div></div></div>
        <div class="progress" style="height:1.35rem"><div id="sizeBar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div><span class="bcw-hud-sheen" aria-hidden="true"></span></div>
        <ol class="bcw-hud-steps"><li data-step="read">${tr('read')}</li><li data-step="decode">${tr('decode')}</li><li data-step="encode">${tr('encode')}</li></ol><div class="bcw-hud-url" id="sizeCurrent"></div>
      </div>
      <div id="sizeOutput" hidden><h2 class="h5">${tr('preview')}</h2><p id="sizeResult"></p><p id="sizeSavings" class="fw-semibold"></p><audio id="sizeAudio" controls preload="metadata" style="max-width:100%" aria-label="${tr('preview')}"></audio></div>
    </section>`;
  const igHtml = renderToolIgSections({lang:opts.lang,prefix:P,mode:'rules',howItemCount:3,whyChooseItemCount:3,ruleItemCount:3,usecaseCount:2});
  const referencesHtml = renderToolReferencesSection({lang:opts.lang,links:[{label:'MDN: decodeAudioData',href:'https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/decodeAudioData'}]});
  const extraHeadHtml = `<style>${bcwHudCss({hudId:'sizeHud',convertBtnId:'sizeConvert'})}#sizeHud.is-error{border-color:#b91c1c;background:#fff1f2}#sizeHud:not(.is-on) .bcw-hud-spin{animation:none}#sizeBitrate,#sizeChannels{max-width:18rem}.site-footer nav.d-inline{display:inline-flex!important;flex-wrap:wrap;justify-content:center;max-width:100%}</style>`;
  const extraBodyHtml = `<script>
  (function(){
    'use strict';
    const M = ${JSON.stringify(messages).replace(/</g, '\u003c')};
    const $ = id => document.getElementById(id);
    const panel=$('sizePanel'), fileInput=$('sizeFile'), bitrate=$('sizeBitrate'), channels=$('sizeChannels'), hud=$('sizeHud'), audio=$('sizeAudio');
    let selected=null, busy=false, outputUrl='', encoderPromise=null, timer=0, started=0;
    const yieldUi = () => new Promise(resolve => requestAnimationFrame(() => setTimeout(resolve,0)));
    const fill = (text, values) => text.replace(/{(\\w+)}/g, (_,key) => String(values[key] ?? ''));
    function discard(){audio.pause();audio.removeAttribute('src');audio.load();if(outputUrl)URL.revokeObjectURL(outputUrl);outputUrl='';$('sizeDownload').disabled=true;$('sizeOutput').hidden=true;}
    function lock(on){busy=on;panel.querySelectorAll('button,input,select').forEach(el=>el.disabled=on);$('sizeDownload').disabled=on||!outputUrl;$('sizeConvert').setAttribute('aria-busy',String(on));}
    function progress(pct,step){$('sizePct').textContent=Math.round(pct)+'%';$('sizeBar').style.width=pct+'%';$('sizeBar').setAttribute('aria-valuenow',String(Math.round(pct)));$('sizeStep').textContent=M[step];hud.querySelectorAll('[data-step]').forEach(el=>el.classList.toggle('is-on',el.dataset.step===step));}
    function fail(key){hud.hidden=false;hud.classList.remove('is-on');hud.classList.remove('is-done');hud.classList.add('is-error','is-fail');$('sizePct').textContent='—';$('sizeBar').style.width='0%';$('sizeBar').setAttribute('aria-valuenow','0');hud.setAttribute('role','alert');$('sizeStep').textContent=M[key]||M.failed;}
    function choose(file){if(busy)return;discard();selected=file||null;$('sizeName').textContent=file?file.name:'';hud.hidden=true;fileInput.value='';}
    // Bound decoded duration by walking Layer III frames before allocating PCM.
    function inspectMp3(bytes){
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
        if(duration>600.1)throw Error('err_limit');
      }
      if(frames<2||at!==b.length)throw Error('err_format');
      return {...first,duration};
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
      lock(true);hud.hidden=false;hud.className='bcw-hud is-on mb-3';hud.setAttribute('role','status');$('sizeCurrent').textContent=selected.name;started=performance.now();
      const clock=()=>{$('sizeTime').textContent=fill(M.elapsed,{s:((performance.now()-started)/1000).toFixed(1)});};clock();timer=setInterval(clock,100);
      try{
        progress(2,'read');await yieldUi();
        if(selected.size>40*1024*1024)throw Error('err_limit');
        const bytes=await selected.arrayBuffer();const info=inspectMp3(bytes);
        progress(12,'decode');await yieldUi();
        const Offline=window.OfflineAudioContext||window.webkitOfflineAudioContext;if(!Offline)throw Error('err_decode');
        let decoded;try{decoded=await new Offline(info.channels,1,44100).decodeAudioData(bytes);}catch(e){throw Error('err_decode');}
        if(decoded.duration>600.01||decoded.numberOfChannels!==info.channels)throw Error('err_limit');
        progress(22,'encode');await yieldUi();const lame=await loadEncoder();
        const kbps=Number(bitrate.value);if(![64,96,128,192].includes(kbps))throw Error('err_encoder');
        const count=channels.value==='mono'?1:info.channels;
        const encoder=new lame.Mp3Encoder(count,44100,kbps), parts=[];
        const left=decoded.getChannelData(0),right=info.channels===2?decoded.getChannelData(1):null;
        const pcm=(data,start,end)=>{const out=new Int16Array(end-start);for(let i=start;i<end;i++){const value=Number.isFinite(data[i])?Math.max(-1,Math.min(1,data[i])):0;out[i-start]=Math.round(value*(value<0?32768:32767));}return out;};
        let last=performance.now();
        for(let start=0;start<decoded.length;start+=1152){
          const end=Math.min(start+1152,decoded.length), l=pcm(left,start,end);
          if(count===1&&right){for(let i=start;i<end;i++){const v=Math.max(-1,Math.min(1,(left[i]+right[i])/2));l[i-start]=Math.round(v*(v<0?32768:32767));}}
          const chunk=count===2?encoder.encodeBuffer(l,pcm(right,start,end)):encoder.encodeBuffer(l);if(chunk.length)parts.push(new Uint8Array(chunk));
          if(performance.now()-last>40){progress(22+75*end/decoded.length,'encode');await yieldUi();last=performance.now();}
        }
        const final=encoder.flush();if(final.length)parts.push(new Uint8Array(final));
        const blob=new Blob(parts,{type:'audio/mpeg'});if(!blob.size)throw Error('err_encoder');
        outputUrl=URL.createObjectURL(blob);audio.src=outputUrl;$('sizeOutput').hidden=false;
        $('sizeResult').textContent=fill(M.result,{seconds:decoded.duration.toFixed(2),input:(selected.size/1024).toFixed(1),output:(blob.size/1024).toFixed(1),kbps,channels:count});
        $('sizeSavings').textContent=blob.size<selected.size?fill(M.saved,{percent:((1-blob.size/selected.size)*100).toFixed(1)}):M.not_smaller;$('sizeSavings').className=blob.size<selected.size?'text-success fw-semibold':'text-warning-emphasis fw-semibold';
        progress(100,'done');hud.classList.remove('is-on');hud.classList.add('is-done');
      }catch(e){discard();fail(e&&M[e.message]?e.message:'failed');}
      finally{clearInterval(timer);clock();lock(false);}
    }
    async function loadSample(){
      if(busy)return;discard();lock(true);hud.hidden=false;hud.className='bcw-hud is-on mb-3';hud.setAttribute('role','status');progress(0,'encode');$('sizeCurrent').textContent=M.sample_name;
      started=performance.now();const clock=()=>{$('sizeTime').textContent=fill(M.elapsed,{s:((performance.now()-started)/1000).toFixed(1)});};clock();timer=setInterval(clock,100);
      let sample;
      try{
        await yieldUi();const lame=await loadEncoder(), rate=44100, frames=rate*3, enc=new lame.Mp3Encoder(2,rate,192), parts=[];
        for(let at=0;at<frames;at+=1152){
          const n=Math.min(1152,frames-at),l=new Int16Array(n),r=new Int16Array(n);
          for(let i=0;i<n;i++){const t=(at+i)/rate,fade=Math.min(1,t*20,(3-t)*20);l[i]=Math.round(Math.sin(2*Math.PI*440*t)*8000*fade);r[i]=Math.round(Math.sin(2*Math.PI*660*t)*8000*fade);}
          const chunk=enc.encodeBuffer(l,r);if(chunk.length)parts.push(new Uint8Array(chunk));
          if(at%11520===0){progress(80*at/frames,'encode');await yieldUi();}
        }
        const tail=enc.flush();if(tail.length)parts.push(new Uint8Array(tail));
        sample=new File(parts,M.sample_name+'.mp3',{type:'audio/mpeg'});
      }catch(e){selected=null;$('sizeName').textContent='';fail('err_encoder');}
      finally{clearInterval(timer);clock();lock(false);}
      if(sample){bitrate.value='128';channels.value='keep';choose(sample);await convert();}
    }
    fileInput.addEventListener('change',()=>choose(fileInput.files[0]));
    $('sizeDrop').addEventListener('dragover',event=>event.preventDefault());
    $('sizeDrop').addEventListener('drop',event=>{event.preventDefault();if(busy)return;const files=event.dataTransfer.files;if(files.length!==1){choose(null);fail('err_file');return;}choose(files[0]);});
    [bitrate,channels].forEach(el=>el.addEventListener('change',()=>{discard();hud.hidden=true;}));
    $('sizeConvert').addEventListener('click',convert);$('sizeSample').addEventListener('click',loadSample);
    $('sizeClear').addEventListener('click',()=>choose(null));
    $('sizeDownload').addEventListener('click',()=>{if(!outputUrl||busy)return;const link=document.createElement('a');link.href=outputUrl;link.download=(selected.name.replace(/\\.[^.]+$/,'')||'audio')+'-smaller.mp3';document.body.appendChild(link);link.click();link.remove();});
    window.addEventListener('pagehide',()=>{clearInterval(timer);if(outputUrl)URL.revokeObjectURL(outputUrl);});
    loadSample();
  })();</script>`;
  const toolMeta=getToolBySlug('reduce-an-mp3-file-size');
  const extraSectionsHtml=toolMeta?renderToolExtraSections({lang:opts.lang,defaultLang:opts.defaultLang,tool:toolMeta}):'';
  const toolJsonLd=toolMeta?buildToolJsonLd({lang:opts.lang,defaultLang:opts.defaultLang,tool:toolMeta,name:t(opts.lang,`${P}_title`),description,canonicalPath}):'';
  return renderLayout({lang:opts.lang,title,description,canonicalPath,ogImageUrl:'https://onlinefreetools.org/og-image.png',ogType:'website',alternates,headerHtml,sidebarHtml,contentHtml:`<div dir="${opts.lang === 'ar' ? 'rtl' : 'ltr'}">${contentHtml}${igHtml}${extraSectionsHtml}${referencesHtml}</div>`,footerHtml,extraHeadHtml:`${extraHeadHtml}${toolJsonLd}`,extraBodyHtml,mainClass:'container py-4 tool-page',includeSidebarToggleScript:true,sidebarAutoCloseSelector:'#toolNav a'});
};
