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
const P = 'tool_convert_a_wav_file_to_mp3';

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
 * Render the complete WAV to MP3 conversion job.
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderConvertAWavFileToMp3Page = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/convert-a-wav-file-to-mp3';
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
			currentSlug: 'convert-a-wav-file-to-mp3',
			currentAnchor: '#wav-mp3',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

  const tr = (key: string) => escapeHtml(t(opts.lang, `${P}_${key}`));
  const uiKeys = ['read','decode','encode','done','failed','elapsed','err_file','err_format','err_limit','err_decode','err_encoder','sample_name','result','empty'];
  const messages = Object.fromEntries(uiKeys.map(key => [key, t(opts.lang, `${P}_${key}`)]));
  const contentHtml = `
    <div id="wav-mp3" class="tool-page-heading mb-3"><h1 class="h4">${tr('title')}</h1><p>${tr('desc')}</p></div>
    <section class="tool-panel" id="wavPanel">
      <label class="tool-dropzone mb-3" id="wavDrop" for="wavFile"><input id="wavFile" type="file" accept=".wav,.wave,audio/wav,audio/x-wav"><span class="tool-dropzone-title">${tr('choose')}</span><span class="tool-dropzone-hint">${tr('hint')}</span><span id="wavName" class="tool-dropzone-file"></span></label>
      <div class="tools-bar d-flex flex-wrap mb-3" style="gap:.5rem">
        <button id="wavConvert" class="btn btn-primary" type="button">${tr('convert')}</button>
        <button id="wavDownload" class="btn btn-outline-primary" type="button" disabled>${tr('download')}</button>
        <button id="wavSample" class="btn btn-outline-secondary" type="button">${tr('sample')}</button>
        <button id="wavClear" class="btn btn-outline-secondary" type="button">${tr('clear')}</button>
      </div>
      <details class="mb-3"><summary>${tr('advanced')}</summary><label for="wavBitrate" class="form-label mt-2">${tr('bitrate')}</label><select id="wavBitrate" class="form-select form-select-sm"><option value="128">128 kbps</option><option value="192" selected>192 kbps</option><option value="320">320 kbps</option></select><p class="form-text">${tr('settings_hint')}</p></details>
      <div id="wavHud" class="bcw-hud mb-3" role="status" aria-live="polite" hidden>
        <div class="bcw-hud-top"><div class="bcw-hud-spin" aria-hidden="true"></div><div class="bcw-hud-pct" id="wavPct">0%</div><div class="bcw-hud-copy"><div class="bcw-hud-title">${tr('progress')}</div><div class="bcw-hud-step" id="wavStep"></div><div class="bcw-hud-time" id="wavTime"></div></div></div>
        <div class="progress" style="height:1.35rem"><div id="wavBar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div><span class="bcw-hud-sheen" aria-hidden="true"></span></div>
        <ol class="bcw-hud-steps"><li data-step="read">${tr('read')}</li><li data-step="decode">${tr('decode')}</li><li data-step="encode">${tr('encode')}</li></ol><div class="bcw-hud-url" id="wavCurrent"></div>
      </div>
      <div id="wavOutput" hidden><h2 class="h5">${tr('preview')}</h2><p id="wavResult"></p><audio id="wavAudio" controls preload="metadata" style="max-width:100%" aria-label="${tr('preview')}"></audio></div>
    </section>`;
  const igHtml = renderToolIgSections({lang:opts.lang,prefix:P,mode:'rules',howItemCount:3,whyChooseItemCount:3,ruleItemCount:3,usecaseCount:2});
  const referencesHtml = renderToolReferencesSection({lang:opts.lang,links:[{label:'MDN: decodeAudioData',href:'https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/decodeAudioData'}]});
  const extraHeadHtml = `<style>${bcwHudCss({hudId:'wavHud',convertBtnId:'wavConvert'})}#wavHud.is-error{border-color:#b91c1c;background:#fff1f2}#wavHud:not(.is-on) .bcw-hud-spin{animation:none}#wavBitrate{max-width:18rem}.site-footer nav.d-inline{display:inline-flex!important;flex-wrap:wrap;justify-content:center;max-width:100%}</style>`;
  const extraBodyHtml = `<script>
  (function(){
    'use strict';
    const M = ${JSON.stringify(messages).replace(/</g, '\u003c')};
    const $ = id => document.getElementById(id);
    const panel=$('wavPanel'), fileInput=$('wavFile'), bitrate=$('wavBitrate'), hud=$('wavHud'), audio=$('wavAudio');
    let selected=null, busy=false, outputUrl='', encoderPromise=null, timer=0, started=0;
    const yieldUi = () => new Promise(resolve => requestAnimationFrame(() => setTimeout(resolve,0)));
    const fill = (text, values) => text.replace(/{(\\w+)}/g, (_,key) => String(values[key] ?? ''));
    function discard(){audio.pause();audio.removeAttribute('src');audio.load();if(outputUrl)URL.revokeObjectURL(outputUrl);outputUrl='';$('wavDownload').disabled=true;$('wavOutput').hidden=true;}
    function lock(on){busy=on;panel.querySelectorAll('button,input,select').forEach(el=>el.disabled=on);$('wavDownload').disabled=on||!outputUrl;$('wavConvert').setAttribute('aria-busy',String(on));}
    function progress(pct,step){$('wavPct').textContent=Math.round(pct)+'%';$('wavBar').style.width=pct+'%';$('wavBar').setAttribute('aria-valuenow',String(Math.round(pct)));$('wavStep').textContent=M[step];hud.querySelectorAll('[data-step]').forEach(el=>el.classList.toggle('is-on',el.dataset.step===step));}
    function fail(key){hud.hidden=false;hud.classList.remove('is-on');hud.classList.remove('is-done');hud.classList.add('is-error','is-fail');$('wavPct').textContent='—';$('wavBar').style.width='0%';$('wavBar').setAttribute('aria-valuenow','0');hud.setAttribute('role','alert');$('wavStep').textContent=M[key]||M.failed;}
    function choose(file){if(busy)return;discard();selected=file||null;$('wavName').textContent=file?file.name:'';hud.hidden=true;fileInput.value='';}
    // Validate RIFF chunks and decoded-memory bounds before the browser decoder runs.
    function inspectWav(bytes){
      const v=new DataView(bytes), n=v.byteLength;
      const tag=at=>String.fromCharCode(v.getUint8(at),v.getUint8(at+1),v.getUint8(at+2),v.getUint8(at+3));
      if(n<44||tag(0)!=='RIFF'||tag(8)!=='WAVE')throw Error('err_format');
      const end=v.getUint32(4,true)+8;if(end>n||end<44)throw Error('err_format');
      let fmt=null, dataSize=0, dataSeen=false;
      for(let p=12;p+8<=end;){
        const type=tag(p), size=v.getUint32(p+4,true), start=p+8;
        if(start+size>end)throw Error('err_format');
        if(type==='fmt '){if(fmt||size<16)throw Error('err_format');fmt={code:v.getUint16(start,true),channels:v.getUint16(start+2,true),rate:v.getUint32(start+4,true),byteRate:v.getUint32(start+8,true),align:v.getUint16(start+12,true),bits:v.getUint16(start+14,true)};}
        if(type==='data'){if(dataSeen)throw Error('err_format');dataSeen=true;dataSize=size;}
        p=start+size+(size%2);
      }
      if(!fmt||!dataSize||![1,2].includes(fmt.channels)||fmt.rate<8000||fmt.rate>192000)throw Error('err_format');
      if(!((fmt.code===1&&[8,16,24,32].includes(fmt.bits))||(fmt.code===3&&fmt.bits===32)))throw Error('err_format');
      if(fmt.align!==fmt.channels*fmt.bits/8||fmt.byteRate!==fmt.rate*fmt.align||dataSize%fmt.align)throw Error('err_format');
      const duration=dataSize/fmt.byteRate;if(duration>600)throw Error('err_limit');return {...fmt,duration};
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
      lock(true);hud.hidden=false;hud.className='bcw-hud is-on mb-3';hud.setAttribute('role','status');$('wavCurrent').textContent=selected.name;started=performance.now();
      const clock=()=>{$('wavTime').textContent=fill(M.elapsed,{s:((performance.now()-started)/1000).toFixed(1)});};clock();timer=setInterval(clock,100);
      try{
        progress(2,'read');await yieldUi();
        if(selected.size>40*1024*1024)throw Error('err_limit');
        const bytes=await selected.arrayBuffer();const info=inspectWav(bytes);
        progress(12,'decode');await yieldUi();
        const Offline=window.OfflineAudioContext||window.webkitOfflineAudioContext;if(!Offline)throw Error('err_decode');
        let decoded;try{decoded=await new Offline(info.channels,1,44100).decodeAudioData(bytes);}catch(e){throw Error('err_decode');}
        if(decoded.duration>600.01||decoded.numberOfChannels!==info.channels)throw Error('err_limit');
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
        outputUrl=URL.createObjectURL(blob);audio.src=outputUrl;$('wavOutput').hidden=false;
        $('wavResult').textContent=fill(M.result,{seconds:info.duration.toFixed(2),input:(selected.size/1024).toFixed(1),output:(blob.size/1024).toFixed(1),kbps,channels:info.channels});
        progress(100,'done');hud.classList.remove('is-on');hud.classList.add('is-done');
      }catch(e){discard();fail(e&&M[e.message]?e.message:'failed');}
      finally{clearInterval(timer);clock();lock(false);}
    }
    function sampleWav(){
      const rate=44100,frames=rate*5,bytes=new ArrayBuffer(44+frames*4),v=new DataView(bytes);
      const str=(at,text)=>{for(let i=0;i<text.length;i++)v.setUint8(at+i,text.charCodeAt(i));};
      str(0,'RIFF');v.setUint32(4,bytes.byteLength-8,true);str(8,'WAVE');str(12,'fmt ');v.setUint32(16,16,true);v.setUint16(20,1,true);v.setUint16(22,2,true);v.setUint32(24,rate,true);v.setUint32(28,rate*4,true);v.setUint16(32,4,true);v.setUint16(34,16,true);str(36,'data');v.setUint32(40,frames*4,true);
      for(let i=0;i<frames;i++){const fade=Math.min(1,i/2205,(frames-i)/2205);v.setInt16(44+i*4,Math.sin(2*Math.PI*440*i/rate)*6500*fade,true);v.setInt16(46+i*4,Math.sin(2*Math.PI*660*i/rate)*6500*fade,true);}
      return new File([bytes],M.sample_name+'.wav',{type:'audio/wav'});
    }
    async function loadSample(){if(busy)return;bitrate.value='192';choose(sampleWav());await convert();}
    fileInput.addEventListener('change',()=>choose(fileInput.files[0]));
    $('wavDrop').addEventListener('dragover',event=>event.preventDefault());
    $('wavDrop').addEventListener('drop',event=>{event.preventDefault();if(busy)return;const files=event.dataTransfer.files;if(files.length!==1){choose(null);fail('err_file');return;}choose(files[0]);});
    bitrate.addEventListener('change',()=>{discard();hud.hidden=true;});
    $('wavConvert').addEventListener('click',convert);$('wavSample').addEventListener('click',loadSample);
    $('wavClear').addEventListener('click',()=>choose(null));
    $('wavDownload').addEventListener('click',()=>{if(!outputUrl||busy)return;const link=document.createElement('a');link.href=outputUrl;link.download=(selected.name.replace(/\\.[^.]+$/,'')||'audio')+'.mp3';document.body.appendChild(link);link.click();link.remove();});
    window.addEventListener('pagehide',()=>{clearInterval(timer);if(outputUrl)URL.revokeObjectURL(outputUrl);});
    loadSample();
  })();</script>`;
  const toolMeta=getToolBySlug('convert-a-wav-file-to-mp3');
  const extraSectionsHtml=toolMeta?renderToolExtraSections({lang:opts.lang,defaultLang:opts.defaultLang,tool:toolMeta}):'';
  const toolJsonLd=toolMeta?buildToolJsonLd({lang:opts.lang,defaultLang:opts.defaultLang,tool:toolMeta,name:t(opts.lang,`${P}_title`),description,canonicalPath}):'';
  return renderLayout({lang:opts.lang,title,description,canonicalPath,ogImageUrl:'https://onlinefreetools.org/og-image.png',ogType:'website',alternates,headerHtml,sidebarHtml,contentHtml:`<div dir="${opts.lang === 'ar' ? 'rtl' : 'ltr'}">${contentHtml}${igHtml}${extraSectionsHtml}${referencesHtml}</div>`,footerHtml,extraHeadHtml:`${extraHeadHtml}${toolJsonLd}`,extraBodyHtml,mainClass:'container py-4 tool-page',includeSidebarToggleScript:true,sidebarAutoCloseSelector:'#toolNav a'});
};
