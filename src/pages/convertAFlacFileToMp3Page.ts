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
const P = 'tool_convert_a_flac_file_to_mp3';

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
 * Render the complete FLAC to MP3 conversion job (P4).
 * @param opts.lang 当前 UI 语言
 * @param opts.defaultLang 默认（无前缀）语言
 * @param opts.enabledLangs 启用语言列表
 */
export const renderConvertAFlacFileToMp3Page = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/convert-a-flac-file-to-mp3';
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
			currentSlug: 'convert-a-flac-file-to-mp3',
			currentAnchor: '#flac-mp3',
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
    <div id="flac-mp3" class="tool-page-heading mb-3"><h1 class="h4">${tr('title')}</h1><p>${tr('desc')}</p></div>
    <section class="tool-panel" id="flacPanel">
      <label class="tool-dropzone mb-3" id="flacDrop" for="flacFile"><input id="flacFile" type="file" accept=".flac,audio/flac,audio/x-flac"><span class="tool-dropzone-title">${tr('choose')}</span><span class="tool-dropzone-hint">${tr('hint')}</span><span id="flacName" class="tool-dropzone-file"></span></label>
      <div class="tools-bar d-flex flex-wrap mb-3" style="gap:.5rem">
        <button id="flacConvert" class="btn btn-primary" type="button">${tr('convert')}</button>
        <button id="flacDownload" class="btn btn-outline-primary" type="button" disabled>${tr('download')}</button>
        <button id="flacSample" class="btn btn-outline-secondary" type="button">${tr('sample')}</button>
        <button id="flacClear" class="btn btn-outline-secondary" type="button">${tr('clear')}</button>
      </div>
      <details class="mb-3"><summary>${tr('advanced')}</summary><label for="flacBitrate" class="form-label mt-2">${tr('bitrate')}</label><select id="flacBitrate" class="form-select form-select-sm"><option value="128">128 kbps</option><option value="192" selected>192 kbps</option><option value="320">320 kbps</option></select><p class="form-text">${tr('settings_hint')}</p></details>
      <div id="flacHud" class="bcw-hud mb-3" role="status" aria-live="polite" hidden>
        <div class="bcw-hud-top"><div class="bcw-hud-spin" aria-hidden="true"></div><div class="bcw-hud-pct" id="flacPct">0%</div><div class="bcw-hud-copy"><div class="bcw-hud-title">${tr('progress')}</div><div class="bcw-hud-step" id="flacStep"></div><div class="bcw-hud-time" id="flacTime"></div></div></div>
        <div class="progress" style="height:1.35rem"><div id="flacBar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div><span class="bcw-hud-sheen" aria-hidden="true"></span></div>
        <ol class="bcw-hud-steps"><li data-step="read">${tr('read')}</li><li data-step="decode">${tr('decode')}</li><li data-step="encode">${tr('encode')}</li></ol><div class="bcw-hud-url" id="flacCurrent"></div>
      </div>
      <div id="flacOutput" hidden><h2 class="h5">${tr('preview')}</h2><p id="flacResult"></p><audio id="flacAudio" controls preload="metadata" style="max-width:100%" aria-label="${tr('preview')}"></audio></div>
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
	const extraHeadHtml = `<style>${bcwHudCss({ hudId: 'flacHud', convertBtnId: 'flacConvert' })}#flacHud.is-error{border-color:#b91c1c;background:#fff1f2}#flacHud:not(.is-on) .bcw-hud-spin{animation:none}#flacBitrate{max-width:18rem}.site-footer nav.d-inline{display:inline-flex!important;flex-wrap:wrap;justify-content:center;max-width:100%}</style>`;
	const extraBodyHtml = `<script>
  (function(){
    'use strict';
    const M = ${JSON.stringify(messages).replace(/</g, '\\u003c')};
    const $ = id => document.getElementById(id);
    const panel=$('flacPanel'), fileInput=$('flacFile'), bitrate=$('flacBitrate'), hud=$('flacHud'), audio=$('flacAudio');
    let selected=null, busy=false, outputUrl='', encoderPromise=null, timer=0, started=0;
    const yieldUi = () => new Promise(resolve => requestAnimationFrame(() => setTimeout(resolve,0)));
    const fill = (text, values) => text.replace(/{(\\w+)}/g, (_,key) => String(values[key] ?? ''));
    function discard(){audio.pause();audio.removeAttribute('src');audio.load();if(outputUrl)URL.revokeObjectURL(outputUrl);outputUrl='';$('flacDownload').disabled=true;$('flacOutput').hidden=true;}
    function lock(on){busy=on;panel.querySelectorAll('button,input,select').forEach(el=>el.disabled=on);$('flacDownload').disabled=on||!outputUrl;$('flacConvert').setAttribute('aria-busy',String(on));}
    function progress(pct,step){$('flacPct').textContent=Math.round(pct)+'%';$('flacBar').style.width=pct+'%';$('flacBar').setAttribute('aria-valuenow',String(Math.round(pct)));$('flacStep').textContent=M[step];hud.querySelectorAll('[data-step]').forEach(el=>el.classList.toggle('is-on',el.dataset.step===step));}
    function fail(key){hud.hidden=false;hud.classList.remove('is-on');hud.classList.remove('is-done');hud.classList.add('is-error','is-fail');$('flacPct').textContent='—';$('flacBar').style.width='0%';$('flacBar').setAttribute('aria-valuenow','0');hud.setAttribute('role','alert');$('flacStep').textContent=M[key]||M.failed;}
    function choose(file){if(busy)return;discard();selected=file||null;$('flacName').textContent=file?file.name:'';hud.hidden=true;fileInput.value='';}
    /** Validate native FLAC signature and STREAMINFO bounds before decodeAudioData. */
    function inspectFlac(bytes){
      const u=new Uint8Array(bytes), n=u.byteLength;
      if(n<42||String.fromCharCode(u[0],u[1],u[2],u[3])!=='fLaC')throw Error('err_format');
      let p=4, sawStream=false, channels=0, rate=0, totalSamples=0, blocks=0;
      while(p+4<=n){
        if(++blocks>64)throw Error('err_format');
        const header=u[p], isLast=(header&128)!==0, type=header&127, size=(u[p+1]<<16)|(u[p+2]<<8)|u[p+3];
        p+=4; if(size<0||p+size>n)throw Error('err_format');
        if(type===0){
          if(sawStream||size<18)throw Error('err_format');
          sawStream=true;
          rate=((u[p+10]<<12)|(u[p+11]<<4)|(u[p+12]>>4))>>>0;
          channels=((u[p+12]>>1)&7)+1;
          const hi=u[p+13]&15; totalSamples=(hi*4294967296)+((u[p+14]<<24)|(u[p+15]<<16)|(u[p+16]<<8)|u[p+17])>>>0;
          if(!rate||rate<8000||rate>192000||![1,2].includes(channels))throw Error('err_format');
        } else if(type>6) throw Error('err_format');
        p+=size; if(isLast)break;
      }
      if(!sawStream)throw Error('err_format');
      const duration=totalSamples>0?totalSamples/rate:(n/(rate*channels*2));
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
      lock(true);hud.hidden=false;hud.className='bcw-hud is-on mb-3';hud.setAttribute('role','status');$('flacCurrent').textContent=selected.name;started=performance.now();
      const clock=()=>{$('flacTime').textContent=fill(M.elapsed,{s:((performance.now()-started)/1000).toFixed(1)});};clock();timer=setInterval(clock,100);
      try{
        progress(2,'read');await yieldUi();
        if(selected.size>40*1024*1024)throw Error('err_limit');
        const bytes=await selected.arrayBuffer();const info=inspectFlac(bytes);
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
        outputUrl=URL.createObjectURL(blob);audio.src=outputUrl;$('flacOutput').hidden=false;
        $('flacResult').textContent=fill(M.result,{seconds:info.duration.toFixed(2),input:(selected.size/1024).toFixed(1),output:(blob.size/1024).toFixed(1),kbps,channels:info.channels});
        progress(100,'done');hud.classList.remove('is-on');hud.classList.add('is-done');
      }catch(e){discard();fail(e&&M[e.message]?e.message:'failed');}
      finally{clearInterval(timer);clock();lock(false);}
    }
    async function loadSample(){
      if(busy)return;choose(null);lock(true);hud.hidden=false;hud.className='bcw-hud is-on mb-3';hud.setAttribute('role','status');progress(2,'read');
      try{
        await yieldUi();
        const response=await fetch('/samples/convert-a-flac-file-to-mp3.flac');
        if(!response.ok)throw Error('err_sample');
        const bytes=await response.arrayBuffer();
        lock(false);bitrate.value='192';choose(new File([bytes],M.sample_name+'.flac',{type:'audio/flac'}));await convert();
      }catch(e){fail('err_sample');}finally{lock(false);}
    }
    fileInput.addEventListener('change',()=>choose(fileInput.files[0]));
    $('flacDrop').addEventListener('dragover',event=>event.preventDefault());
    $('flacDrop').addEventListener('drop',event=>{event.preventDefault();if(busy)return;const files=event.dataTransfer.files;if(files.length!==1){choose(null);fail('err_file');return;}choose(files[0]);});
    bitrate.addEventListener('change',()=>{discard();hud.hidden=true;});
    $('flacConvert').addEventListener('click',convert);$('flacSample').addEventListener('click',loadSample);
    $('flacClear').addEventListener('click',()=>choose(null));
    $('flacDownload').addEventListener('click',()=>{if(!outputUrl||busy)return;const link=document.createElement('a');link.href=outputUrl;link.download=(selected.name.replace(/\\.[^.]+$/,'')||'audio')+'.mp3';document.body.appendChild(link);link.click();link.remove();});
    window.addEventListener('pagehide',()=>{clearInterval(timer);if(outputUrl)URL.revokeObjectURL(outputUrl);});
    loadSample();
  })();</script>`;
	const toolMeta = getToolBySlug('convert-a-flac-file-to-mp3');
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
