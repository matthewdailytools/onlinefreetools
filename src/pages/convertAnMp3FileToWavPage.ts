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
const P = 'tool_convert_an_mp3_file_to_wav';

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
export const renderConvertAnMp3FileToWavPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/convert-an-mp3-file-to-wav';
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
			currentSlug: 'convert-an-mp3-file-to-wav',
			currentAnchor: '#mp3-wav',
		}),
		id: 'toolNav',
	});

	const footerHtml = renderFooter({ lang: opts.lang });

  const tr = (key: string) => escapeHtml(t(opts.lang, `${P}_${key}`));
  const uiKeys = ['read','decode','encode','done','failed','elapsed','err_file','err_format','err_limit','err_decode','err_encoder','sample_name','result','empty'];
  const messages = Object.fromEntries(uiKeys.map(key => [key, t(opts.lang, `${P}_${key}`)]));
  const contentHtml = `
    <div id="mp3-wav" class="tool-page-heading mb-3"><h1 class="h4">${tr('title')}</h1><p>${tr('desc')}</p></div>
    <section class="tool-panel" id="mp3Panel">
      <label class="tool-dropzone mb-3" id="mp3Drop" for="mp3File"><input id="mp3File" type="file" accept=".mp3,audio/mpeg,audio/mp3"><span class="tool-dropzone-title">${tr('choose')}</span><span class="tool-dropzone-hint">${tr('hint')}</span><span id="mp3Name" class="tool-dropzone-file"></span></label>
      <div class="tools-bar d-flex flex-wrap mb-3" style="gap:.5rem">
        <button id="mp3Convert" class="btn btn-primary" type="button">${tr('convert')}</button>
        <button id="mp3Download" class="btn btn-outline-primary" type="button" disabled>${tr('download')}</button>
        <button id="mp3Sample" class="btn btn-outline-secondary" type="button">${tr('sample')}</button>
        <button id="mp3Clear" class="btn btn-outline-secondary" type="button">${tr('clear')}</button>
      </div>
      <details class="mb-3"><summary>${tr('advanced')}</summary><label for="mp3Rate" class="form-label mt-2">${tr('bitrate')}</label><select id="mp3Rate" class="form-select form-select-sm"><option value="44100" selected>44.1 kHz</option><option value="48000">48 kHz</option></select><p class="form-text">${tr('settings_hint')}</p></details>
      <div id="mp3Hud" class="bcw-hud mb-3" role="status" aria-live="polite" hidden>
        <div class="bcw-hud-top"><div class="bcw-hud-spin" aria-hidden="true"></div><div class="bcw-hud-pct" id="mp3Pct">0%</div><div class="bcw-hud-copy"><div class="bcw-hud-title">${tr('progress')}</div><div class="bcw-hud-step" id="mp3Step"></div><div class="bcw-hud-time" id="mp3Time"></div></div></div>
        <div class="progress" style="height:1.35rem"><div id="mp3Bar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div><span class="bcw-hud-sheen" aria-hidden="true"></span></div>
        <ol class="bcw-hud-steps"><li data-step="read">${tr('read')}</li><li data-step="decode">${tr('decode')}</li><li data-step="encode">${tr('encode')}</li></ol><div class="bcw-hud-url" id="mp3Current"></div>
      </div>
      <div id="mp3Output" hidden><h2 class="h5">${tr('preview')}</h2><p id="mp3Result"></p><audio id="mp3Audio" controls preload="metadata" style="max-width:100%" aria-label="${tr('preview')}"></audio></div>
    </section>`;
  const igHtml = renderToolIgSections({lang:opts.lang,prefix:P,mode:'rules',howItemCount:3,whyChooseItemCount:3,ruleItemCount:3,usecaseCount:2});
  const referencesHtml = renderToolReferencesSection({lang:opts.lang,links:[{label:'MDN: decodeAudioData',href:'https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/decodeAudioData'}]});
  const extraHeadHtml = `<style>${bcwHudCss({hudId:'mp3Hud',convertBtnId:'mp3Convert'})}#mp3Hud.is-error{border-color:#b91c1c;background:#fff1f2}#mp3Hud:not(.is-on) .bcw-hud-spin{animation:none}#mp3Rate{max-width:18rem}.site-footer nav.d-inline{display:inline-flex!important;flex-wrap:wrap;justify-content:center;max-width:100%}</style>`;
  const extraBodyHtml = `<script>
  (function(){
    'use strict';
    const M = ${JSON.stringify(messages).replace(/</g, '\u003c')};
    const $ = id => document.getElementById(id);
    const panel=$('mp3Panel'), fileInput=$('mp3File'), bitrate=$('mp3Rate'), hud=$('mp3Hud'), audio=$('mp3Audio');
    let selected=null, busy=false, outputUrl='', encoderPromise=null, timer=0, started=0;
    const yieldUi = () => new Promise(resolve => requestAnimationFrame(() => setTimeout(resolve,0)));
    const fill = (text, values) => text.replace(/{(\\w+)}/g, (_,key) => String(values[key] ?? ''));
    function discard(){audio.pause();audio.removeAttribute('src');audio.load();if(outputUrl)URL.revokeObjectURL(outputUrl);outputUrl='';$('mp3Download').disabled=true;$('mp3Output').hidden=true;}
    function lock(on){busy=on;panel.querySelectorAll('button,input,select').forEach(el=>el.disabled=on);$('mp3Download').disabled=on||!outputUrl;$('mp3Convert').setAttribute('aria-busy',String(on));}
    function progress(pct,step){$('mp3Pct').textContent=Math.round(pct)+'%';$('mp3Bar').style.width=pct+'%';$('mp3Bar').setAttribute('aria-valuenow',String(Math.round(pct)));$('mp3Step').textContent=M[step];hud.querySelectorAll('[data-step]').forEach(el=>el.classList.toggle('is-on',el.dataset.step===step));}
    function fail(key){hud.hidden=false;hud.classList.remove('is-on');hud.classList.remove('is-done');hud.classList.add('is-error','is-fail');$('mp3Pct').textContent='—';$('mp3Bar').style.width='0%';$('mp3Bar').setAttribute('aria-valuenow','0');hud.setAttribute('role','alert');$('mp3Step').textContent=M[key]||M.failed;}
    function choose(file){if(busy)return;discard();selected=file||null;$('mp3Name').textContent=file?file.name:'';hud.hidden=true;fileInput.value='';}
    // Validate RIFF chunks and decoded-memory bounds before the browser decoder runs.
    function isMp3(file){return file&&(/\\.mp3$/i.test(file.name)||file.type==='audio/mpeg'||file.type==='audio/mp3');}
    function writeWav(buffer,rate){const channels=Math.min(2,buffer.numberOfChannels),frames=Math.ceil(buffer.duration*rate),bytes=new ArrayBuffer(44+frames*channels*2),view=new DataView(bytes),put=(at,text)=>{for(let i=0;i<text.length;i++)view.setUint8(at+i,text.charCodeAt(i));};put(0,'RIFF');view.setUint32(4,bytes.byteLength-8,true);put(8,'WAVE');put(12,'fmt ');view.setUint32(16,16,true);view.setUint16(20,1,true);view.setUint16(22,channels,true);view.setUint32(24,rate,true);view.setUint32(28,rate*channels*2,true);view.setUint16(32,channels*2,true);view.setUint16(34,16,true);put(36,'data');view.setUint32(40,frames*channels*2,true);const data=[];for(let c=0;c<channels;c++)data.push(buffer.getChannelData(c));for(let i=0,at=44;i<frames;i++)for(let c=0;c<channels;c++,at+=2){const p=Math.min(data[c].length-1,Math.floor(i*buffer.sampleRate/rate)),v=Number.isFinite(data[c][p])?Math.max(-1,Math.min(1,data[c][p])):0;view.setInt16(at,Math.round(v*(v<0?32768:32767)),true);}return new Blob([bytes],{type:'audio/wav'});}
    async function convert(){if(busy)return;discard();if(!selected){fail('empty');return;}lock(true);hud.hidden=false;hud.className='bcw-hud is-on mb-3';hud.setAttribute('role','status');$('mp3Current').textContent=selected.name;started=performance.now();const clock=()=>{$('mp3Time').textContent=fill(M.elapsed,{s:((performance.now()-started)/1000).toFixed(1)});};clock();timer=setInterval(clock,100);try{progress(2,'read');await yieldUi();if(selected.size>40*1024*1024)throw Error('err_limit');if(!isMp3(selected))throw Error('err_format');const bytes=await selected.arrayBuffer();progress(12,'decode');await yieldUi();const Context=window.AudioContext||window.webkitAudioContext;if(!Context)throw Error('err_decode');const context=new Context();let decoded;try{decoded=await context.decodeAudioData(bytes.slice(0));}catch(e){throw Error('err_decode');}finally{if(context.close)context.close();}if(decoded.duration>600.01||decoded.numberOfChannels<1||decoded.numberOfChannels>2)throw Error('err_limit');progress(22,'encode');await yieldUi();const rate=Number(bitrate.value);if(![44100,48000].includes(rate))throw Error('err_encoder');const blob=writeWav(decoded,rate);if(!blob.size)throw Error('err_encoder');outputUrl=URL.createObjectURL(blob);audio.src=outputUrl;$('mp3Output').hidden=false;$('mp3Result').textContent=fill(M.result,{seconds:decoded.duration.toFixed(2),input:(selected.size/1024).toFixed(1),output:(blob.size/1024).toFixed(1),kbps:rate,channels:decoded.numberOfChannels});progress(100,'done');hud.classList.remove('is-on');hud.classList.add('is-done');}catch(e){discard();fail(e&&M[e.message]?e.message:'failed');}finally{clearInterval(timer);clock();lock(false);}}
    function sampleWav(){
      const rate=44100,frames=rate*5,bytes=new ArrayBuffer(44+frames*4),v=new DataView(bytes);
      const str=(at,text)=>{for(let i=0;i<text.length;i++)v.setUint8(at+i,text.charCodeAt(i));};
      str(0,'RIFF');v.setUint32(4,bytes.byteLength-8,true);str(8,'WAVE');str(12,'fmt ');v.setUint32(16,16,true);v.setUint16(20,1,true);v.setUint16(22,2,true);v.setUint32(24,rate,true);v.setUint32(28,rate*4,true);v.setUint16(32,4,true);v.setUint16(34,16,true);str(36,'data');v.setUint32(40,frames*4,true);
      for(let i=0;i<frames;i++){const fade=Math.min(1,i/2205,(frames-i)/2205);v.setInt16(44+i*4,Math.sin(2*Math.PI*440*i/rate)*6500*fade,true);v.setInt16(46+i*4,Math.sin(2*Math.PI*660*i/rate)*6500*fade,true);}
      return new File([bytes],M.sample_name+'.wav',{type:'audio/wav'});
    }
    async function loadSample(){
      if(busy)return;
      try{if(!window.lamejs)await new Promise((resolve,reject)=>{const s=document.createElement('script');s.src='/vendor/lamejs/lamejs.iife.js';s.onload=resolve;s.onerror=reject;document.head.appendChild(s);});const rate=44100,frames=rate*2,pcm=new Int16Array(frames),enc=new window.lamejs.Mp3Encoder(1,rate,128),parts=[];for(let i=0;i<frames;i++)pcm[i]=Math.round(Math.sin(2*Math.PI*440*i/rate)*9000);for(let at=0;at<frames;at+=1152){const part=enc.encodeBuffer(pcm.subarray(at,Math.min(at+1152,frames)));if(part.length)parts.push(new Uint8Array(part));}const tail=enc.flush();if(tail.length)parts.push(new Uint8Array(tail));choose(new File([new Blob(parts,{type:'audio/mpeg'})],M.sample_name+'.mp3',{type:'audio/mpeg'}));await convert();}catch(e){fail('err_encoder');}
    }
    fileInput.addEventListener('change',()=>choose(fileInput.files[0]));
    $('mp3Drop').addEventListener('dragover',event=>event.preventDefault());
    $('mp3Drop').addEventListener('drop',event=>{event.preventDefault();if(busy)return;const files=event.dataTransfer.files;if(files.length!==1){choose(null);fail('err_file');return;}choose(files[0]);});
    bitrate.addEventListener('change',()=>{discard();hud.hidden=true;});
    $('mp3Convert').addEventListener('click',convert);$('mp3Sample').addEventListener('click',loadSample);
    $('mp3Clear').addEventListener('click',()=>choose(null));
    $('mp3Download').addEventListener('click',()=>{if(!outputUrl||busy)return;const link=document.createElement('a');link.href=outputUrl;link.download=(selected.name.replace(/\\.[^.]+$/,'')||'audio')+'.wav';document.body.appendChild(link);link.click();link.remove();});
    window.addEventListener('pagehide',()=>{clearInterval(timer);if(outputUrl)URL.revokeObjectURL(outputUrl);});
    loadSample();
  })();</script>`;
  const toolMeta=getToolBySlug('convert-an-mp3-file-to-wav');
  const extraSectionsHtml=toolMeta?renderToolExtraSections({lang:opts.lang,defaultLang:opts.defaultLang,tool:toolMeta}):'';
  const toolJsonLd=toolMeta?buildToolJsonLd({lang:opts.lang,defaultLang:opts.defaultLang,tool:toolMeta,name:t(opts.lang,`${P}_title`),description,canonicalPath}):'';
  return renderLayout({lang:opts.lang,title,description,canonicalPath,ogImageUrl:'https://onlinefreetools.org/og-image.png',ogType:'website',alternates,headerHtml,sidebarHtml,contentHtml:`<div dir="${opts.lang === 'ar' ? 'rtl' : 'ltr'}">${contentHtml}${igHtml}${extraSectionsHtml}${referencesHtml}</div>`,footerHtml,extraHeadHtml:`${extraHeadHtml}${toolJsonLd}`,extraBodyHtml,mainClass:'container py-4 tool-page',includeSidebarToggleScript:true,sidebarAutoCloseSelector:'#toolNav a'});
};
