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

const P = 'tool_record_a_voiceover_with_a_teleprompter';

const withLangPrefix = (lang: SiteLang, pathname: string, defaultLang: SiteLang) => {
	const safe = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return lang === defaultLang ? safe : `/${lang}${safe}`;
};

export const renderRecordAVoiceoverWithATeleprompterPage = (opts: {
	lang: SiteLang;
	defaultLang: SiteLang;
	enabledLangs: SiteLang[];
}) => {
	const toolPath = '/tools/record-a-voiceover-with-a-teleprompter';
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
		groups: buildToolSidebarItems({ lang: opts.lang, defaultLang: opts.defaultLang, currentSlug: 'record-a-voiceover-with-a-teleprompter', currentAnchor: '#teleprompter' }),
		id: 'toolNav',
	});
	const footerHtml = renderFooter({ lang: opts.lang });

	const extraHeadHtml = `
  <style>
    .tp-viewport { height:270px; scroll-margin-top:80px; overflow:auto; overscroll-behavior:contain; background:#101d31; color:#f8fafc; border:2px solid #376588; border-radius:12px; margin:12px 0; text-align:start; }
    .tp-text { white-space:pre-wrap; overflow-wrap:anywhere; font-size:32px; line-height:1.6; padding:30px 24px 180px; }
    .tp-script { min-height:100px; }
    .tp-settings { display:flex; flex-wrap:wrap; gap:1rem; }
    .tp-settings label { flex:1 1 190px; }
    @media(max-width:576px){.tp-viewport{height:240px}.tp-text{padding:20px 16px 160px}}
    .site-footer nav.d-inline { display:flex!important; flex-wrap:wrap; justify-content:center; row-gap:.35rem; }
    .vm-actions { gap:.5rem; }
    .vm-meter { height:1.1rem; background:#e9ecef; border-radius:999px; overflow:hidden; }
    .vm-meter > span { display:block; width:0; height:100%; background:linear-gradient(90deg,#198754,#ffc107,#dc3545); transition:width .08s linear; }
    .vm-result { border:1px solid var(--border,#dee2e6); border-radius:.5rem; padding:.85rem; background:#fff; }
    .vm-time { font-variant-numeric:tabular-nums; font-size:1.4rem; font-weight:700; }
    ${bcwHudCss({ hudId: 'vmHud', convertBtnId: 'vmStart' })}
  </style>`;

	const contentHtml = `
    <div id="teleprompter" class="tool-page-heading mb-3">
      <h1 class="h4 mb-0">${escapeHtml(t(opts.lang, `${P}_title`))}</h1>
      <p class="text-muted mb-0">${escapeHtml(t(opts.lang, `${P}_desc`))}</p>
    </div>
    <div class="tool-panel mb-3">
      <label class="form-label" for="tpScript">${escapeHtml(t(opts.lang, `${P}_script_label`))}</label>
      <textarea id="tpScript" class="form-control tp-script mb-2" rows="3" maxlength="20000" dir="auto" aria-describedby="tpHelp"></textarea>
      <p id="tpHelp" class="small text-muted">${escapeHtml(t(opts.lang, `${P}_script_help`))}</p>
      <details class="mb-2"><summary>${escapeHtml(t(opts.lang, `${P}_settings`))}</summary>
        <div class="tp-settings mt-2">
          <label for="tpSpeed">${escapeHtml(t(opts.lang, `${P}_speed`))}: <output id="tpSpeedValue">28 px/s</output><input id="tpSpeed" class="form-range" type="range" min="0" max="100" value="28"></label>
          <label for="tpSize">${escapeHtml(t(opts.lang, `${P}_font_size`))}: <output id="tpSizeValue">32 px</output><input id="tpSize" class="form-range" type="range" min="20" max="60" value="32"></label>
        </div>
      </details>
      <div id="tpViewport" class="tp-viewport" tabindex="0" role="region" aria-label="${escapeHtml(t(opts.lang, `${P}_prompt_label`))}"><div id="tpText" class="tp-text" dir="auto"></div></div>
      <div class="d-flex flex-wrap gap-2 mb-3">
        <button type="button" id="tpRehearse" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, `${P}_rehearse`))}</button>
        <button type="button" id="tpTop" class="btn btn-outline-secondary btn-sm">${escapeHtml(t(opts.lang, `${P}_back_top`))}</button>
      </div>
      <div class="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-2">
        <span id="vmTimer" class="vm-time">00:00 / 10:00</span>
        <span id="vmFormat" class="small text-muted"></span>
      </div>
      <label class="form-label small" for="vmMeter">${escapeHtml(t(opts.lang, `${P}_level`))}</label>
      <div id="vmMeter" class="vm-meter mb-3" role="meter" aria-label="${escapeHtml(t(opts.lang, `${P}_level`))}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><span></span></div>
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

	const extraBodyHtml = `<script>var txt=${JSON.stringify({pause: t(opts.lang, `${P}_pause`),resume: t(opts.lang, `${P}_resume`),rehearse: t(opts.lang, `${P}_rehearse`),rehearsalPause: t(opts.lang, `${P}_rehearsal_pause`),fail: t(opts.lang, `${P}_hud_fail`),hudTitle: t(opts.lang, `${P}_hud_title`),errScript: t(opts.lang, `${P}_err_script`),errLong: t(opts.lang, `${P}_err_long`),scriptEnd: t(opts.lang, `${P}_script_end`),paused: t(opts.lang, `${P}_hud_paused`),recording: t(opts.lang, `${P}_hud_recording`),sampleName: t(opts.lang, `${P}_sample_name`),done: t(opts.lang, `${P}_done`),format: t(opts.lang, `${P}_format`),sampleReady: t(opts.lang, `${P}_hud_sample`),ready: t(opts.lang, `${P}_hud_ready`),errSecure: t(opts.lang, `${P}_err_secure`),errSupport: t(opts.lang, `${P}_err_support`),permission: t(opts.lang, `${P}_hud_permission`),errEmpty: t(opts.lang, `${P}_err_empty`),errInterrupted: t(opts.lang, `${P}_err_interrupted`),errPermission: t(opts.lang, `${P}_err_permission`),errDevice: t(opts.lang, `${P}_err_device`),idle: t(opts.lang, `${P}_ready`),finishing: t(opts.lang, `${P}_finishing`),rehearsalStopped: t(opts.lang, `${P}_rehearsal_stopped`),rehearsal: t(opts.lang, `${P}_rehearsal_status`),sampleScript: t(opts.lang, `${P}_sample_script`),errPlay: t(opts.lang, `${P}_err_play`),pausePlayback: t(opts.lang, `${P}_pause_playback`),play: t(opts.lang, `${P}_play`)}).replace(/</g, "\\u003c")};
(function () {
  var el = function(id) { return document.getElementById(id); };
  var script=el('tpScript'), prompt=el('tpText'), viewport=el('tpViewport'), speed=el('tpSpeed'), size=el('tpSize');
  var start=el('vmStart'), pause=el('vmPause'), stop=el('vmStop'), rehearse=el('tpRehearse'), top=el('tpTop');
  var sample=el('vmSample'), clear=el('vmClear'), audio=el('vmAudio'), download=el('vmDownload'), play=el('vmPlay');
  var status=el('vmStatus'), error=el('vmError'), hud=el('vmHud'), result=el('vmResult'), meter=el('vmMeter');
  var phase='idle', rec=null, stream=null, ctx=null, analyser=null, source=null, chunks=[], url='', blob=null, ext='wav';
  var takeMs=0, activeSince=0, clock=0, anim=0, lastFrame=0, scrollY=0, requestId=0, finishMs=0, failed=false;
  var MAX_MS=600000, MAX_CHARS=20000;
  function fmt(ms) { var n=Math.max(0,Math.floor(ms/1000)); return String(Math.floor(n/60)).padStart(2,'0')+':'+String(n%60).padStart(2,'0'); }
  function fill(s,v) { return s.replace(/{(\\w+)}/g,function(_,k){return v[k]==null?'':String(v[k]);}); }
  function elapsed() { return takeMs+(phase==='recording'?performance.now()-activeSince:0); }
  function busy() { return ['requesting','recording','paused','stopping'].indexOf(phase)>=0; }
  function syncButtons() {
    start.disabled=busy(); pause.disabled=phase!=='recording'&&phase!=='paused'; stop.disabled=!busy()||phase==='stopping';
    sample.disabled=busy(); clear.disabled=busy(); script.disabled=busy(); rehearse.disabled=busy(); top.disabled=phase==='requesting'||phase==='stopping';
    pause.textContent=phase==='paused'?txt.resume:txt.pause;
    rehearse.textContent=phase==='rehearsing'?txt.rehearsalPause:txt.rehearse;
    start.setAttribute('aria-busy',String(phase==='requesting'||phase==='stopping'));
  }
  function showHud(pct,message,step,done,isError) {
    hud.hidden=false; hud.className='bcw-hud mb-3 is-on'+(done?' is-done':'')+(isError?' is-fail':'');
    el('vmHudTitle').textContent=isError?txt.fail:txt.hudTitle;
    var p=Math.round(Math.max(0,Math.min(100,pct)));
    el('vmHudPct').textContent=p+'%'; el('vmHudBar').style.width=p+'%'; el('vmHudBar').textContent=p+'%'; el('vmHudStep').textContent=message;
    ['vmStepPermission','vmStepRecording','vmStepReady'].forEach(function(id,i){el(id).className=i<step?'is-done':i===step?'is-on':'';});
  }
  function showError(message) { error.textContent=message;error.hidden=false;status.textContent=message;showHud(0,message,0,false,true); }
  function releaseMedia() {
    if(stream)stream.getTracks().forEach(function(t){t.onended=null;t.stop();});stream=null;
    if(source)try{source.disconnect();}catch(e){} source=null;analyser=null;
    if(ctx){ctx.close().catch(function(){});ctx=null;}
    meter.firstElementChild.style.width='0%';meter.setAttribute('aria-valuenow','0');
  }
  function resetScroll() { viewport.scrollTop=0;scrollY=0;lastFrame=0; }
  function refreshScript() { prompt.textContent=script.value;resetScroll(); }
  function validScript() {
    if(!script.value.trim()){showError(txt.errScript);return false;}
    if(script.value.length>MAX_CHARS){showError(txt.errLong);return false;}
    return true;
  }
  function animation(now) {
    anim=0;var moving=phase==='recording'||phase==='rehearsing';
    if(moving){
      var dt=lastFrame?Math.min((now-lastFrame)/1000,0.15):0;
      var max=Math.max(0,viewport.scrollHeight-viewport.clientHeight);
      scrollY=Math.min(max,scrollY+Number(speed.value)*dt);viewport.scrollTop=scrollY;
      if(scrollY>=max&&phase==='rehearsing'){phase='idle';syncButtons();status.textContent=txt.scriptEnd;}
    }
    lastFrame=now;
    if(analyser&&phase==='recording'){
      var data=new Uint8Array(analyser.fftSize);analyser.getByteTimeDomainData(data);var sum=0;
      for(var i=0;i<data.length;i++){var x=(data[i]-128)/128;sum+=x*x;}
      var level=Math.min(100,Math.sqrt(sum/data.length)*250);meter.firstElementChild.style.width=level+'%';meter.setAttribute('aria-valuenow',String(Math.round(level)));
    }
    if(phase==='recording'||phase==='rehearsing')anim=requestAnimationFrame(animation);
  }
  function animate() { cancelAnimationFrame(anim);lastFrame=0;anim=requestAnimationFrame(animation); }
  function tick() {
    var ms=elapsed();el('vmTimer').textContent=fmt(ms)+' / 10:00';el('vmHudTime').textContent=fmt(ms);
    if(phase==='recording'||phase==='paused')showHud(ms/MAX_MS*100,phase==='paused'?txt.paused:txt.recording,1,false,false);
    if(ms>=MAX_MS&&phase==='recording')stopRecording();
  }
  function clearResult() { audio.pause();audio.removeAttribute('src');audio.load();if(url)URL.revokeObjectURL(url);url='';blob=null;download.disabled=true;result.hidden=true;el('vmFormat').textContent=''; }
  function extension(type) { if(type.indexOf('ogg')>=0)return'ogg';if(type.indexOf('mp4')>=0)return'm4a';if(type.indexOf('wav')>=0)return'wav';return'webm'; }
  function showResult(data,ms,isSample) {
    clearResult();blob=data;ext=extension(data.type);url=URL.createObjectURL(data);audio.src=url;result.hidden=false;download.disabled=false;
    var label=isSample?txt.sampleName:fill(txt.done,{dur:(ms/1000).toFixed(1),type:data.type});
    el('vmResultMeta').textContent=label;el('vmFormat').textContent=fill(txt.format,{type:data.type});status.textContent=label;
    el('vmTimer').textContent=fmt(ms)+' / 10:00';el('vmHudTime').textContent=fmt(ms);showHud(100,isSample?txt.sampleReady:txt.ready,2,true,false);
  }
  function mimeChoice() { var a=['audio/webm;codecs=opus','audio/ogg;codecs=opus','audio/mp4','audio/webm'];return a.find(function(t){return MediaRecorder.isTypeSupported(t);})||''; }
  async function startRecording() {
    if(busy()||!validScript())return;
    if(!window.isSecureContext){showError(txt.errSecure);return;}
    if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia||!window.MediaRecorder){showError(txt.errSupport);return;}
    phase='requesting';error.hidden=true;failed=false;cancelAnimationFrame(anim);audio.pause();syncButtons();showHud(0,txt.permission,0,false,false);status.textContent=txt.permission;
    var id=++requestId;
    try {
      var granted=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:true},video:false});
      if(id!==requestId||phase!=='requesting'){granted.getTracks().forEach(function(t){t.stop();});return;}
      stream=granted;var type=mimeChoice();rec=type?new MediaRecorder(stream,{mimeType:type}):new MediaRecorder(stream);var current=rec;chunks=[];
      current.ondataavailable=function(e){if(e.data&&e.data.size)chunks.push(e.data);};
      current.onerror=function(){failed=true;stopRecording();};
      current.onstop=function(){
        var ms=phase==='stopping'?finishMs:elapsed();var data=new Blob(chunks,{type:current.mimeType||type||'audio/webm'});
        clearInterval(clock);cancelAnimationFrame(anim);releaseMedia();phase='idle';rec=null;syncButtons();
        if(data.size)showResult(data,ms,false);else showError(txt.errEmpty);
        if(failed)showError(txt.errInterrupted);
      };
      stream.getAudioTracks().forEach(function(t){t.onended=function(){failed=true;stopRecording();};});
      try {var AC=window.AudioContext||window.webkitAudioContext;if(AC){ctx=new AC();await ctx.resume();source=ctx.createMediaStreamSource(stream);analyser=ctx.createAnalyser();analyser.fftSize=256;source.connect(analyser);}}catch(e){analyser=null;}
      if(id!==requestId||phase!=='requesting'){releaseMedia();return;}
      current.start(250);clearResult();takeMs=0;activeSince=performance.now();phase='recording';resetScroll();viewport.scrollIntoView({block:'start'});syncButtons();status.textContent=txt.recording;
      clock=setInterval(tick,100);tick();animate();
      if(document.hidden)pauseResume();
    } catch(e) {
      if(id!==requestId)return;
      clearInterval(clock);cancelAnimationFrame(anim);releaseMedia();rec=null;phase='idle';syncButtons();
      showError(e&&e.name==='NotAllowedError'?txt.errPermission:e&&e.name==='NotFoundError'?txt.errDevice:txt.errInterrupted);
    }
  }
  function pauseResume() {
    if(!rec)return;
    if(phase==='recording'){takeMs=elapsed();phase='paused';rec.pause();cancelAnimationFrame(anim);meter.firstElementChild.style.width='0%';meter.setAttribute('aria-valuenow','0');status.textContent=txt.paused;}
    else if(phase==='paused'){rec.resume();activeSince=performance.now();phase='recording';status.textContent=txt.recording;animate();}
    syncButtons();tick();
  }
  function stopRecording() {
    if(phase==='requesting'){requestId++;phase='idle';releaseMedia();syncButtons();hud.hidden=true;status.textContent=txt.idle;return;}
    if(phase!=='recording'&&phase!=='paused')return;
    finishMs=elapsed();phase='stopping';clearInterval(clock);cancelAnimationFrame(anim);syncButtons();showHud(99,txt.finishing,1,false,false);
    if(rec&&rec.state!=='inactive')rec.stop();
  }
  function toggleRehearsal() {
    if(busy())return;error.hidden=true;
    if(phase==='rehearsing'){phase='idle';cancelAnimationFrame(anim);status.textContent=txt.rehearsalStopped;}
    else {if(!validScript())return;if(viewport.scrollTop>=viewport.scrollHeight-viewport.clientHeight-1)resetScroll();phase='rehearsing';status.textContent=txt.rehearsal;animate();}
    syncButtons();
  }
  function wavSample() {
    var rate=16000,n=rate*3,b=new ArrayBuffer(44+n*2),v=new DataView(b);
    function w(o,s){for(var i=0;i<s.length;i++)v.setUint8(o+i,s.charCodeAt(i));}
    w(0,'RIFF');v.setUint32(4,36+n*2,true);w(8,'WAVEfmt ');v.setUint32(16,16,true);v.setUint16(20,1,true);v.setUint16(22,1,true);v.setUint32(24,rate,true);v.setUint32(28,rate*2,true);v.setUint16(32,2,true);v.setUint16(34,16,true);w(36,'data');v.setUint32(40,n*2,true);
    for(var i=0;i<n;i++){var t=i/rate,f=t<1?330:t<2?440:550;v.setInt16(44+i*2,Math.sin(2*Math.PI*f*t)*Math.min(1,t*6,(3-t)*6)*8000,true);}
    return new Blob([b],{type:'audio/wav'});
  }
  function loadSample() { if(busy())return;phase='idle';cancelAnimationFrame(anim);error.hidden=true;script.value=txt.sampleScript;refreshScript();showResult(wavSample(),3000,true);syncButtons(); }
  start.addEventListener('click',startRecording);pause.addEventListener('click',pauseResume);stop.addEventListener('click',stopRecording);
  rehearse.addEventListener('click',toggleRehearsal);top.addEventListener('click',resetScroll);sample.addEventListener('click',loadSample);
  clear.addEventListener('click',function(){if(busy())return;phase='idle';cancelAnimationFrame(anim);script.value='';refreshScript();clearResult();error.hidden=true;hud.hidden=true;el('vmTimer').textContent='00:00 / 10:00';status.textContent=txt.idle;syncButtons();});
  script.addEventListener('input',function(){if(phase==='rehearsing'){phase='idle';cancelAnimationFrame(anim);syncButtons();}refreshScript();});
  speed.addEventListener('input',function(){el('tpSpeedValue').textContent=speed.value+' px/s';});
  size.addEventListener('input',function(){prompt.style.fontSize=size.value+'px';el('tpSizeValue').textContent=size.value+' px';scrollY=viewport.scrollTop;});
  viewport.addEventListener('scroll',function(){if(Math.abs(viewport.scrollTop-scrollY)>2)scrollY=viewport.scrollTop;},{passive:true});
  download.addEventListener('click',function(){if(!blob)return;var a=document.createElement('a');a.href=url;a.download='voiceover-'+new Date().toISOString().replace(/[-:]/g,'').slice(0,15)+'.'+ext;document.body.appendChild(a);a.click();a.remove();});
  play.addEventListener('click',function(){if(audio.paused)audio.play().catch(function(){showError(txt.errPlay);});else audio.pause();});
  audio.addEventListener('play',function(){play.textContent=txt.pausePlayback;});audio.addEventListener('pause',function(){play.textContent=txt.play;});audio.addEventListener('ended',function(){play.textContent=txt.play;});
  document.addEventListener('visibilitychange',function(){if(document.hidden){if(phase==='recording')pauseResume();else if(phase==='rehearsing')toggleRehearsal();}});
  window.addEventListener('pagehide',function(){requestId++;clearInterval(clock);cancelAnimationFrame(anim);if(rec){rec.onstop=null;rec.ondataavailable=null;rec.onerror=null;if(rec.state!=='inactive')rec.stop();}releaseMedia();phase='idle';rec=null;clearResult();syncButtons();});
  loadSample();
})();
</script>`;

	const toolMeta = getToolBySlug('record-a-voiceover-with-a-teleprompter');
	const extraSectionsHtml = toolMeta ? renderToolExtraSections({ lang: opts.lang, defaultLang: opts.defaultLang, tool: toolMeta }) : '';
	const toolJsonLd = toolMeta ? buildToolJsonLd({ lang: opts.lang, defaultLang: opts.defaultLang, tool: toolMeta, name: t(opts.lang, `${P}_title`), description, canonicalPath }) : '';
	return renderLayout({
		lang: opts.lang, title, description, canonicalPath, ogImageUrl: 'https://onlinefreetools.org/og-image.png', ogType: 'website', alternates,
		headerHtml, sidebarHtml, contentHtml: `${contentHtml}${igHtml}${extraSectionsHtml}${referencesHtml}`, footerHtml,
		extraHeadHtml: `${extraHeadHtml}${toolJsonLd}`, extraBodyHtml, mainClass: 'container py-4 tool-page', includeSidebarToggleScript: true, sidebarAutoCloseSelector: '#toolNav a',
	});
};
