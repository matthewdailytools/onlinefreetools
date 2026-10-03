/* Local sequential audio-to-SRT queue; one cached Whisper model for the batch. */
(() => {
  'use strict';
  const M = window.batchAudioSrtMessages || {}, $ = id => document.getElementById(id);
  const panel = $('basPanel'); if (!panel) return;
  const MAX_FILES = 10, MAX_BYTES = 120*1024*1024, MAX_DURATION = 2*60*60;
  let files = [], rows = [], busy = false, aborted = false, controller = null, whisper = null, epoch = 0, run = 0;
  const fill = (s,v) => String(s||'').replace(/{(\w+)}/g,(_,k)=>String(v[k]??''));
  const yieldUi = () => new Promise(resolve=>{requestAnimationFrame(resolve);setTimeout(resolve,50);});
  const isAudio = f => !!f && (f.type.startsWith('audio/') || /\.(wav|mp3|m4a|aac|ogg|opus|flac|aiff|aif|webm)$/i.test(f.name));
  function lock(on){busy=on;panel.querySelectorAll('button,input,select').forEach(el=>{if(el.id==='basStop')el.disabled=!on;else if(el.classList.contains('bas-download'))el.disabled=false;else el.disabled=on;});$('basMake').setAttribute('aria-busy',String(on));}
  function progress(p,step){const v=Math.round(Math.max(0,Math.min(100,p)));$('basPct').textContent=v+'%';$('basBar').style.width=v+'%';$('basBar').setAttribute('aria-valuenow',String(v));$('basStep').textContent=step;}
  function fail(key){const hud=$('basHud');hud.hidden=false;hud.className='bcw-hud is-error mb-3';hud.setAttribute('role','alert');progress(0,M[key]||M.failed);$('basPct').textContent='—';}
  function safeName(s){return (s||'audio').replace(/\.[^.]+$/,'').replace(/[^a-z0-9_-]+/gi,'-').replace(/^-|-$/g,'').slice(0,64)||'audio';}
  function render(){const list=$('basList');list.replaceChildren();files.forEach((f,i)=>{const li=document.createElement('li');li.className='list-group-item';const head=document.createElement('div');head.className='d-flex flex-wrap gap-2 align-items-center';const name=document.createElement('strong');name.className='flex-grow-1 text-break';name.textContent=f.name;const status=document.createElement('span');status.className='small';status.textContent=rows[i]?.status||M.pending;head.append(name,status);li.append(head);if(rows[i]?.srt){const ta=document.createElement('textarea');ta.className='form-control mt-2';ta.rows=9;ta.setAttribute('aria-label',fill(M.edit_label,{name:f.name}));ta.value=rows[i].srt;ta.addEventListener('input',()=>{rows[i].srt=ta.value;});const dl=document.createElement('button');dl.type='button';dl.className='btn btn-outline-primary btn-sm mt-2 bas-download';dl.textContent=M.download_one;dl.addEventListener('click',()=>downloadOne(i));li.append(ta,dl);}list.append(li);});$('basEmpty').hidden=files.length>0;$('basMeta').textContent=fill(M.count,{n:files.length});}
  function downloadOne(i){const item=rows[i];if(!item?.srt?.trim())return;const blob=new Blob([item.srt.replace(/\r?\n/g,'\r\n')],{type:'application/x-subrip;charset=utf-8'});const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=item.name||safeName(files[i].name)+'.srt';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),60000);}
  function setFiles(input){if(busy)return;epoch++;files=Array.from(input||[]);rows=files.map(()=>({status:M.pending,srt:''}));$('basHud').hidden=true;render();}
  async function loadModel(mod){await mod.createTranscriber(p=>{if(!busy||aborted)return;if(p?.status==='progress'&&p.total){progress(Math.min(27,Math.round(27*p.loaded/p.total)),fill(M.model_progress,{percent:Math.round(100*p.loaded/p.total)}));}}, {signal:controller?.signal,timeoutMs:90000});}
  async function process(){
    if(busy)return;
    if(files.length<2||files.length>MAX_FILES){fail('err_files');return;}
    aborted=false;controller=new AbortController();const token=++run;lock(true);const hud=$('basHud');hud.hidden=false;hud.className='bcw-hud is-on mb-3';hud.setAttribute('role','status');let good=rows.filter(r=>r.srt).length,bad=0;
    try{
      progress(2,M.status_model);await yieldUi();whisper=whisper||await import('/vendor/whisper/whisper-loader.js');await loadModel(whisper);progress(28,M.status_model);
      const lang=$('basLang').value;
      for(let i=0;i<files.length;i++){
        if(aborted||controller.signal.aborted||token!==run)break;
        if(rows[i].srt)continue;
        const f=files[i];rows[i].status=fill(M.running,{n:i+1,total:files.length});render();progress(28+65*i/files.length,fill(M.decode,{name:f.name}));await yieldUi();
        try{
          if(!isAudio(f)||!f.size)throw Error('err_format');if(f.size>MAX_BYTES)throw Error('err_limit');
          const AC=window.AudioContext||window.webkitAudioContext;if(!AC)throw Error('err_unsupported');const ctx=new AC();let audio;
          try{const data=await f.arrayBuffer();if(controller.signal.aborted)throw Error('aborted');audio=await ctx.decodeAudioData(data.slice(0));}catch(e){if(e?.message==='aborted')throw e;throw Error('err_decode');}finally{try{await ctx.close();}catch{}}
          if(!(audio.duration>0)||audio.duration>MAX_DURATION+0.05)throw Error('err_limit');
          progress(30+65*i/files.length,fill(M.transcribe,{name:f.name}));await yieldUi();
          const opts={task:'transcribe',condition_on_previous_text:false,sliding_windows:true,signal:controller.signal,onWindowProgress:info=>{const n=(info?.index??0)+1,total=Math.max(1,info?.total||1);progress(30+65*(i+Math.min(1,n/total))/files.length,fill(M.window,{file:i+1,total:files.length,n,windows:total}));}};
          if(lang!=='auto')opts.language=lang;
          const result=await whisper.transcribeAudioBuffer(audio,opts);audio=null;
          const chunks=result?.chunks||[],srt=whisper.chunksToSrt(chunks);
          if(!srt?.trim())throw Error(result?.aborted?'aborted':'err_empty');
          rows[i].srt=srt;rows[i].name=safeName(f.name)+'.srt';rows[i].status=fill(result?.aborted?M.partial:M.ready,{cues:chunks.filter(c=>String(c.text||'').trim()).length});good++;render();
          if(result?.aborted){aborted=true;break;}
        }catch(e){if(e?.message==='aborted'||e?.name==='AbortError'){aborted=true;rows[i].status=M.stopped;render();break;}bad++;rows[i].status=M[e?.message]||M.err_transcribe;render();}
        await yieldUi();
      }
      if(good){$('basResult').textContent=fill(M.result,{ok:good,failed:bad});$('basOutput').hidden=false;hud.className='bcw-hud is-done mb-3';progress(100,aborted?M.stopped:M.done);}else fail(aborted?'stopped':'err_none');
    }catch(e){fail(e?.name==='AbortError'||e?.message==='aborted'?'stopped':M[e?.message]?e.message:'err_model');}
    finally{controller=null;lock(false);}
  }
  async function loadSample(){if(busy)return;const token=++epoch;try{const r=await fetch('/samples/make-srt-subtitles-from-an-audio-file.wav');if(!r.ok)throw Error();const b=await r.blob();if(token!==epoch)return;setFiles([new File([b],'speech-a.wav',{type:'audio/wav'}),new File([b],'speech-b.wav',{type:'audio/wav'})]);}catch{if(token===epoch)fail('err_sample');}}
  $('basFile').addEventListener('change',e=>setFiles(e.target.files));$('basMake').addEventListener('click',process);$('basSample').addEventListener('click',loadSample);$('basClear').addEventListener('click',()=>setFiles([]));$('basStop').addEventListener('click',()=>{aborted=true;controller?.abort();});$('basLang').addEventListener('change',()=>{if(!busy)rows=files.map(()=>({status:M.pending,srt:''}));render();});window.addEventListener('pagehide',()=>controller?.abort());window.batchAudioSrtLoadSample=loadSample;render();
})();
