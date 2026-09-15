import type { SiteLang } from '../site/i18n';
import { t, supportedLangs } from '../site/i18n';
import { renderFooter } from './site/footer';
import { renderHeader } from './site/header';
import { buildToolPageNavItems } from './site/nav';
import { renderLayout, type HreflangAlternate, escapeHtml } from './site/layout';
import { renderSidebar, buildToolSidebarItems } from './site/sidebar';
import { getToolBySlug } from '../site/tools';
import { renderToolExtraSections, renderToolIgSections, renderToolReferencesSection, buildToolJsonLd } from './site/toolContent';
import { bcwHudCss } from './site/bcwHudCss';

const P = 'tool_record_a_voice_memo_in_the_browser';

const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

export const renderRecordAVoiceMemoInTheBrowserPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/record-a-voice-memo-in-the-browser';
	const canonicalPath = withLangPrefix(opts.lang, toolPath, opts.defaultLang);
	const title = `${t(opts.lang, `${P}_title`)} | ${t(opts.lang, 'brand')}`;
	const description = t(opts.lang, `${P}_description`);
	const navItems = buildToolPageNavItems(opts.lang, opts.defaultLang);
	const langAlternates: Record<string, string> = Object.fromEntries(
		(supportedLangs || []).map((code) => [code, `/${code}${toolPath}`])
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
		groups: buildToolSidebarItems({ lang: opts.lang, defaultLang: opts.defaultLang, currentSlug: 'record-a-voice-memo-in-the-browser', currentAnchor: '#voice-memo' }),
		id: 'toolNav',
	});
	const footerHtml = renderFooter({ lang: opts.lang });

	const extraHeadHtml = `
  <style>
    .vm-actions { gap:.5rem; }
    .vm-meter { height:1.1rem; background:#e9ecef; border-radius:999px; overflow:hidden; }
    .vm-meter > span { display:block; width:0; height:100%; background:linear-gradient(90deg,#198754,#ffc107,#dc3545); transition:width .08s linear; }
    .vm-result { border:1px solid var(--border,#dee2e6); border-radius:.5rem; padding:.85rem; background:#fff; }
    .vm-time { font-variant-numeric:tabular-nums; font-size:1.4rem; font-weight:700; }
    ${bcwHudCss({ hudId: 'vmHud', convertBtnId: 'vmStart' })}
  </style>`;

	const contentHtml = `
    <div id="voice-memo" class="tool-page-heading mb-3">
      <h1 class="h4 mb-0">${escapeHtml(t(opts.lang, `${P}_title`))}</h1>
      <p class="text-muted mb-0">${escapeHtml(t(opts.lang, `${P}_desc`))}</p>
    </div>
    <div class="tool-panel mb-3">
      <div class="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-2">
        <span id="vmTimer" class="vm-time">00:00 / 10:00</span>
        <span id="vmFormat" class="small text-muted"></span>
      </div>
      <label class="form-label small" for="vmMeter">${escapeHtml(t(opts.lang, `${P}_level`))}</label>
      <div id="vmMeter" class="vm-meter mb-3" role="meter" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><span></span></div>
      <div class="d-flex align-items-center flex-wrap vm-actions tools-bar">
        <button type="button" id="vmStart" class="btn btn-primary btn-sm">${escapeHtml(t(opts.lang, `${P}_start`))}</button>
        <button type="button" id="vmPause" class="btn btn-outline-secondary btn-sm" disabled>${escapeHtml(t(opts.lang, `${P}_pause`))}</button>
        <button type="button" id="vmStop" class="btn btn-outline-danger btn-sm" disabled>${escapeHtml(t(opts.lang, `${P}_stop`))}</button>
        <button type="button" id="vmSample" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, `${P}_sample`))}</button>
        <button type="button" id="vmClear" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, `${P}_clear`))}</button>
      </div>
      <p id="vmStatus" class="small text-muted mt-2 mb-0" role="status" aria-live="polite">${escapeHtml(t(opts.lang, `${P}_ready`))}</p>
      <div id="vmError" class="alert alert-danger mt-3 mb-0" role="alert" hidden></div>
    </div>
    <section id="vmHud" class="bcw-hud mb-3" role="status" aria-live="polite" hidden>
      <div class="bcw-hud-top"><div class="bcw-hud-spin" aria-hidden="true"></div><div class="bcw-hud-pct" id="vmHudPct">0%</div>
        <div class="bcw-hud-copy"><div class="bcw-hud-title" id="vmHudTitle">${escapeHtml(t(opts.lang, `${P}_hud_title`))}</div><div class="bcw-hud-step" id="vmHudStep"></div><div class="bcw-hud-time" id="vmHudTime"></div></div></div>
      <div class="progress"><div id="vmHudBar" class="progress-bar progress-bar-striped" style="width:0%"></div><div class="bcw-hud-sheen"></div></div>
      <ul class="bcw-hud-steps"><li id="vmStepPermission">${escapeHtml(t(opts.lang, `${P}_hud_step_permission`))}</li><li id="vmStepRecording">${escapeHtml(t(opts.lang, `${P}_hud_step_recording`))}</li><li id="vmStepReady">${escapeHtml(t(opts.lang, `${P}_hud_step_ready`))}</li></ul>
    </section>
    <section id="vmResult" class="vm-result mb-3" hidden>
      <p id="vmResultMeta" class="small text-muted mb-2"></p>
      <audio id="vmAudio" class="w-100 mb-2" controls preload="metadata"></audio>
      <div class="d-flex flex-wrap vm-actions tools-bar">
        <button type="button" id="vmPlay" class="btn btn-outline-primary btn-sm">${escapeHtml(t(opts.lang, `${P}_play`))}</button>
        <button type="button" id="vmDownload" class="btn btn-outline-primary btn-sm" disabled>${escapeHtml(t(opts.lang, `${P}_download`))}</button>
      </div>
    </section>`;

	const igHtml = renderToolIgSections({ lang: opts.lang, prefix: P, mode: 'rules', ruleItemCount: 4, howItemCount: 4 });
	const referencesHtml = renderToolReferencesSection({
		lang: opts.lang,
		links: [
			{ label: 'MDN: MediaDevices.getUserMedia()', href: 'https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia' },
			{ label: 'MDN: MediaRecorder', href: 'https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder' },
		],
	});

	const extraBodyHtml = `
  <script>
    (function () {
      var MAX_MS = 600000;
      var el = function (id) { return document.getElementById(id); };
      var startBtn=el('vmStart'), pauseBtn=el('vmPause'), stopBtn=el('vmStop'), sampleBtn=el('vmSample'), clearBtn=el('vmClear');
      var playBtn=el('vmPlay'), downloadBtn=el('vmDownload'), audio=el('vmAudio'), result=el('vmResult'), resultMeta=el('vmResultMeta');
      var status=el('vmStatus'), error=el('vmError'), timer=el('vmTimer'), format=el('vmFormat'), meter=el('vmMeter'), meterFill=meter.querySelector('span');
      var hud=el('vmHud'), hudPct=el('vmHudPct'), hudBar=el('vmHudBar'), hudStep=el('vmHudStep'), hudTime=el('vmHudTime');
      var steps=[el('vmStepPermission'),el('vmStepRecording'),el('vmStepReady')];
      var recorder=null, stream=null, chunks=[], startedAt=0, pausedAt=0, pausedTotal=0, tick=0, raf=0, analyser=null, source=null, audioCtx=null, objectUrl='', resultBlob=null, resultExt='webm';
      var txt=${JSON.stringify({
			permission: t(opts.lang, `${P}_hud_permission`), recording: t(opts.lang, `${P}_hud_recording`), paused: t(opts.lang, `${P}_hud_paused`), ready: t(opts.lang, `${P}_hud_ready`), sample: t(opts.lang, `${P}_hud_sample`), fail: t(opts.lang, `${P}_hud_fail`),
			recordingStatus: t(opts.lang, `${P}_recording`), pausedStatus: t(opts.lang, `${P}_paused`), readyStatus: t(opts.lang, `${P}_ready`), done: t(opts.lang, `${P}_done`), format: t(opts.lang, `${P}_format`), timer: t(opts.lang, `${P}_timer`),
			pause: t(opts.lang, `${P}_pause`), resume: t(opts.lang, `${P}_resume`), play: t(opts.lang, `${P}_play`), pausePlayback: t(opts.lang, `${P}_pause_playback`), sampleName: t(opts.lang, `${P}_sample_name`),
			errSupport: t(opts.lang, `${P}_err_support`), errSecure: t(opts.lang, `${P}_err_secure`), errPermission: t(opts.lang, `${P}_err_permission`), errDevice: t(opts.lang, `${P}_err_device`), errEmpty: t(opts.lang, `${P}_err_empty`), errInterrupted: t(opts.lang, `${P}_err_interrupted`),
		})};
      function fill(s, vals){ return String(s).replace(/{(\\w+)}/g,function(_,k){return vals[k] == null ? '' : String(vals[k]);}); }
      function fmt(ms){ var sec=Math.max(0,Math.floor(ms/1000)); return String(Math.floor(sec/60)).padStart(2,'0')+':'+String(sec%60).padStart(2,'0'); }
      function yieldUi(){ return new Promise(function(resolve){ requestAnimationFrame(function(){setTimeout(resolve,30);});}); }
      function mimeChoice(){ var list=['audio/webm;codecs=opus','audio/ogg;codecs=opus','audio/mp4','audio/webm']; for(var i=0;i<list.length;i++) if(MediaRecorder.isTypeSupported(list[i])) return list[i]; return ''; }
      function extension(type){ if(type.indexOf('ogg')>=0)return'ogg'; if(type.indexOf('mp4')>=0)return'm4a'; if(type.indexOf('wav')>=0)return'wav'; return'webm'; }
      function setStep(index){ steps.forEach(function(x,i){x.className=i<index?'is-done':i===index?'is-on':'';}); }
      function showHud(pct,msg,index,done,fail){ hud.hidden=false; hud.className='bcw-hud mb-3 is-on'+(done?' is-done':'')+(fail?' is-fail':''); var p=Math.max(0,Math.min(100,Math.round(pct))); hudPct.textContent=p+'%'; hudBar.style.width=p+'%'; hudBar.textContent=p+'%'; hudStep.textContent=msg; setStep(index); }
      function showError(msg){ error.textContent=msg; error.hidden=false; showHud(0,msg,0,false,true); hud.querySelector('.bcw-hud-title').textContent=txt.fail; }
      function stopTracks(){ if(stream)stream.getTracks().forEach(function(track){track.stop();}); stream=null; if(source)try{source.disconnect();}catch(e){} source=null; analyser=null; if(audioCtx)try{audioCtx.close();}catch(e){} audioCtx=null; cancelAnimationFrame(raf); }
      function setIdle(){ startBtn.disabled=false; pauseBtn.disabled=true; stopBtn.disabled=true; sampleBtn.disabled=false; clearBtn.disabled=false; startBtn.removeAttribute('aria-busy'); }
      function elapsed(){ return recorder&&recorder.state==='paused' ? pausedAt-startedAt-pausedTotal : Date.now()-startedAt-pausedTotal; }
      function updateTick(){ var ms=elapsed(); timer.textContent=fmt(ms)+' / 10:00'; hudTime.textContent=fmt(ms); showHud(ms/MAX_MS*100,recorder&&recorder.state==='paused'?txt.paused:txt.recording,1,false,false); if(ms>=MAX_MS&&recorder&&recorder.state!=='inactive') recorder.stop(); }
      function meterLoop(){ if(!analyser)return; var data=new Uint8Array(analyser.fftSize); analyser.getByteTimeDomainData(data); var sum=0; for(var i=0;i<data.length;i++){var v=(data[i]-128)/128;sum+=v*v;} var level=Math.min(100,Math.sqrt(sum/data.length)*240); meterFill.style.width=level+'%'; meter.setAttribute('aria-valuenow',String(Math.round(level))); raf=requestAnimationFrame(meterLoop); }
      function setResult(blob,dur,type,name){ if(objectUrl)URL.revokeObjectURL(objectUrl); resultBlob=blob; resultExt=extension(type); objectUrl=URL.createObjectURL(blob); audio.src=objectUrl; result.hidden=false; downloadBtn.disabled=false; resultMeta.textContent=name||fill(txt.done,{dur:(dur/1000).toFixed(1),type:type||blob.type||'audio'}); format.textContent=fill(txt.format,{type:type||blob.type||'audio'}); showHud(100,name?txt.sample:txt.ready,2,true,false); setStep(2); }
      async function startRecording(){ error.hidden=true; if(!window.isSecureContext){showError(txt.errSecure);return;} if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia||!window.MediaRecorder){showError(txt.errSupport);return;} clearResult(); startBtn.disabled=true; sampleBtn.disabled=true; clearBtn.disabled=true; startBtn.setAttribute('aria-busy','true'); showHud(2,txt.permission,0,false,false); await yieldUi(); try{
        stream=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:true,noiseSuppression:true},video:false}); var type=mimeChoice(); recorder=type?new MediaRecorder(stream,{mimeType:type}):new MediaRecorder(stream); chunks=[];
        recorder.ondataavailable=function(e){if(e.data&&e.data.size)chunks.push(e.data);};
        recorder.onerror=function(){showError(txt.errInterrupted);stopTracks();setIdle();};
        recorder.onstop=function(){clearInterval(tick);var dur=elapsed();var actual=recorder.mimeType||type||'audio/webm';var blob=new Blob(chunks,{type:actual});stopTracks();setIdle();pauseBtn.textContent=txt.pause; if(!blob.size){showError(txt.errEmpty);return;} setResult(blob,dur,actual,'');status.textContent=fill(txt.done,{dur:(dur/1000).toFixed(1),type:actual});};
        audioCtx=new (window.AudioContext||window.webkitAudioContext)(); source=audioCtx.createMediaStreamSource(stream); analyser=audioCtx.createAnalyser(); analyser.fftSize=512; source.connect(analyser); meterLoop();
        startedAt=Date.now();pausedTotal=0;recorder.start(500);pauseBtn.disabled=false;stopBtn.disabled=false;startBtn.removeAttribute('aria-busy');status.textContent=txt.recordingStatus;tick=setInterval(updateTick,200);updateTick();
      }catch(e){setIdle();stopTracks();var msg=e&&e.name==='NotAllowedError'?txt.errPermission:e&&e.name==='NotFoundError'?txt.errDevice:txt.errInterrupted;showError(msg);}}
      function pauseResume(){if(!recorder)return;if(recorder.state==='recording'){recorder.pause();pausedAt=Date.now();pauseBtn.textContent=txt.resume;status.textContent=txt.pausedStatus;}else if(recorder.state==='paused'){pausedTotal+=Date.now()-pausedAt;recorder.resume();pauseBtn.textContent=txt.pause;status.textContent=txt.recordingStatus;}updateTick();}
      function stopRecording(){if(recorder&&recorder.state!=='inactive'){if(recorder.state==='paused'){pausedTotal+=Date.now()-pausedAt;pausedAt=Date.now();}recorder.stop();}}
      function clearResult(){audio.pause();audio.removeAttribute('src');audio.load();if(objectUrl)URL.revokeObjectURL(objectUrl);objectUrl='';resultBlob=null;result.hidden=true;downloadBtn.disabled=true;format.textContent='';playBtn.textContent=txt.play;}
      function clearAll(){if(recorder&&recorder.state!=='inactive')recorder.stop();stopTracks();clearInterval(tick);clearResult();hud.hidden=true;error.hidden=true;timer.textContent='00:00 / 10:00';meterFill.style.width='0%';status.textContent=txt.readyStatus;setIdle();}
      function wavSample(){var rate=16000,dur=3,n=rate*dur,buf=new ArrayBuffer(44+n*2),v=new DataView(buf);function w(o,s){for(var i=0;i<s.length;i++)v.setUint8(o+i,s.charCodeAt(i));}w(0,'RIFF');v.setUint32(4,36+n*2,true);w(8,'WAVEfmt ');v.setUint32(16,16,true);v.setUint16(20,1,true);v.setUint16(22,1,true);v.setUint32(24,rate,true);v.setUint32(28,rate*2,true);v.setUint16(32,2,true);v.setUint16(34,16,true);w(36,'data');v.setUint32(40,n*2,true);for(var i=0;i<n;i++){var sec=i/rate,f=sec<1?330:sec<2?440:550;var fade=Math.min(1,sec*6,(dur-sec)*6);v.setInt16(44+i*2,Math.sin(2*Math.PI*f*sec)*0.28*fade*32767,true);}return new Blob([buf],{type:'audio/wav'});}
      function loadSample(){clearAll();var blob=wavSample();setResult(blob,3000,'audio/wav',txt.sampleName);status.textContent=txt.sampleName;timer.textContent='00:03 / 10:00';}
      function download(){if(!resultBlob)return;var a=document.createElement('a'),d=new Date(),stamp=d.toISOString().replace(/[-:]/g,'').slice(0,15);a.href=objectUrl;a.download='voice-memo-'+stamp+'.'+resultExt;document.body.appendChild(a);a.click();a.remove();}
      startBtn.addEventListener('click',startRecording);pauseBtn.addEventListener('click',pauseResume);stopBtn.addEventListener('click',stopRecording);sampleBtn.addEventListener('click',loadSample);clearBtn.addEventListener('click',clearAll);downloadBtn.addEventListener('click',download);
      playBtn.addEventListener('click',function(){if(audio.paused){audio.play();playBtn.textContent=txt.pausePlayback;}else{audio.pause();playBtn.textContent=txt.play;}});audio.addEventListener('ended',function(){playBtn.textContent=txt.play;});
      window.addEventListener('pagehide',stopTracks);loadSample();
    })();
  </script>`;

	const toolMeta = getToolBySlug('record-a-voice-memo-in-the-browser');
	const extraSectionsHtml = toolMeta ? renderToolExtraSections({ lang: opts.lang, defaultLang: opts.defaultLang, tool: toolMeta }) : '';
	const toolJsonLd = toolMeta ? buildToolJsonLd({ lang: opts.lang, defaultLang: opts.defaultLang, tool: toolMeta, name: t(opts.lang, `${P}_title`), description, canonicalPath }) : '';
	return renderLayout({
		lang: opts.lang, title, description, canonicalPath, ogImageUrl: 'https://onlinefreetools.org/og-image.png', ogType: 'website', alternates,
		headerHtml, sidebarHtml, contentHtml: `${contentHtml}${igHtml}${extraSectionsHtml}${referencesHtml}`, footerHtml,
		extraHeadHtml: `${extraHeadHtml}${toolJsonLd}`, extraBodyHtml, mainClass: 'container py-4 tool-page', includeSidebarToggleScript: true, sidebarAutoCloseSelector: '#toolNav a',
	});
};
