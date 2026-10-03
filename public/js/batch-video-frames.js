/* Extract corresponding frames from several local videos into source folders. */
(() => {
  'use strict';
  const M = window.batchVideoFramesMessages || {};
  const $ = (id) => document.getElementById(id);
  const panel = $('bvfPanel');
  if (!panel) return;
  const input = $('bvfFile');
  const video = document.createElement('video');
  video.muted = true; video.playsInline = true; video.preload = 'auto'; video.hidden = true;
  panel.append(video);
  const SOURCE_LIMIT = 1024 * 1024 * 1024;
  const MAX_FILES = 20, MAX_TIMES = 8, MAX_FRAMES = 80, PIXEL_BUDGET = 80_000_000, OUTPUT_BUDGET = 48 * 1024 * 1024;
  let files = [], rows = [], frames = [], busy = false, aborter = null, sourceUrl = '', zipUrl = '', sampleEpoch = 0, zipPromise = null;
  const fill = (s, map) => String(s || '').replace(/{(\w+)}/g, (_, k) => String(map[k] ?? ''));
  const bytes = (n) => (n / 1048576).toFixed(2) + ' MiB';
  const yieldUi = () => new Promise((resolve) => { requestAnimationFrame(resolve); setTimeout(resolve, 50); });
  const stopped = () => new DOMException('Stopped', 'AbortError');
  const check = () => { if (aborter?.signal.aborted) throw stopped(); };
  function releaseVideo(){ video.pause(); video.removeAttribute('src'); video.load(); if (sourceUrl) URL.revokeObjectURL(sourceUrl); sourceUrl = ''; }
  function clearOutput(){ frames = []; rows = []; if (zipUrl) URL.revokeObjectURL(zipUrl); zipUrl = ''; $('bvfZip').disabled = true; $('bvfOutput').hidden = true; $('bvfResult').textContent = ''; renderRows(); }
  function setFiles(next){ if (busy) return; sampleEpoch++; clearOutput(); files = Array.from(next || []).slice(0, MAX_FILES); $('bvfName').textContent = fill(M.queue_count, { n: files.length }); $('bvfHud').hidden = true; renderRows(); }
  function renderRows(){
    const list = $('bvfList'); list.replaceChildren();
    files.forEach((file, i) => { const li = document.createElement('li'); li.className = 'list-group-item d-flex flex-wrap gap-2 align-items-center'; const name = document.createElement('span'); name.className = 'flex-grow-1 text-break'; name.textContent = file.name; const state = document.createElement('span'); state.className = 'small'; state.textContent = rows[i]?.text || M.status_pending; li.append(name, state); list.append(li); });
    $('bvfEmpty').hidden = files.length > 0;
  }
  function lock(on){ busy = on; panel.querySelectorAll('button,input,select').forEach((el) => { if (el.id === 'bvfStop') el.disabled = !on; else if (el.id === 'bvfZip') el.disabled = on || !frames.length; else el.disabled = on; }); $('bvfExtract').setAttribute('aria-busy', String(on)); }
  function progress(p, step){ const v = Math.round(Math.max(0, Math.min(100, p))); $('bvfPct').textContent = v + '%'; $('bvfBar').style.width = v + '%'; $('bvfBar').setAttribute('aria-valuenow', String(v)); $('bvfStep').textContent = step; }
  function fail(key){ const hud = $('bvfHud'); hud.hidden = false; hud.className = 'bcw-hud is-error mb-3'; hud.setAttribute('role','alert'); progress(0, M[key] || M.failed); $('bvfPct').textContent = '—'; }
  function waitEvent(name, timeout, errorKey){ return new Promise((resolve, reject) => { let timer; const done = () => { cleanup(); resolve(); }; const error = () => { cleanup(); reject(Error(errorKey)); }; const abort = () => { cleanup(); reject(stopped()); }; const cleanup = () => { video.removeEventListener(name, done); video.removeEventListener('error', error); aborter?.signal.removeEventListener('abort', abort); clearTimeout(timer); }; video.addEventListener(name, done, { once:true }); video.addEventListener('error', error, { once:true }); aborter?.signal.addEventListener('abort', abort, { once:true }); timer = setTimeout(error, timeout); if (aborter?.signal.aborted) abort(); }); }
  async function seek(time){ if (Math.abs(video.currentTime-time)<0.015 && video.readyState>=2) return video.currentTime; const done = waitEvent('seeked', 15000, 'err_seek'); video.currentTime = time; await done; if (Math.abs(video.currentTime-time)>0.15 || video.readyState<2) throw Error('err_seek'); return video.currentTime; }
  function times(){ const raw = $('bvfTimes').value.split(/[\s,;]+/).filter(Boolean); const values = raw.map(Number); if (!values.length || values.length>MAX_TIMES || values.some(v => !Number.isFinite(v) || v<0) || new Set(values).size !== values.length) throw Error('err_times'); return values; }
  function folderName(name, used){ const base = (name.replace(/\.[^.]+$/, '').replace(/[^a-z0-9_-]+/gi, '-').replace(/^-|-$/g,'').slice(0,52) || 'video'); let candidate = base, i = 2; while (used.has(candidate)) candidate = base + '-' + i++; used.add(candidate); return candidate; }
  async function extract(){
    if (busy) return;
    clearOutput();
    if (files.length<2 || files.length>MAX_FILES){ fail('err_files'); return; }
    let at; try { at = times(); } catch { fail('err_times'); return; }
    if (files.length * at.length > MAX_FRAMES){ fail('err_budget'); return; }
    const width = Number($('bvfWidth').value), quality = Number($('bvfQuality').value);
    if (![320,640,1280].includes(width) || !(quality>=0.5 && quality<=0.95)){ fail('err_budget'); return; }
    aborter = new AbortController(); lock(true);
    const hud = $('bvfHud'); hud.hidden = false; hud.className = 'bcw-hud is-on mb-3'; hud.setAttribute('role','status');
    const used = new Set(); let totalBytes = 0, totalPixels = 0, ok = 0, bad = 0;
    const manifest = [['source','folder','requested_seconds','actual_seconds','image','status']];
    try {
      for (let i=0; i<files.length; i++){
        check(); const file = files[i], folder = folderName(file.name, used);
        const beforeFrames = frames.length, beforeBytes = totalBytes, beforePixels = totalPixels, beforeManifest = manifest.length;
        rows[i] = { text: M.status_running }; renderRows(); progress(100*i/files.length, fill(M.current, { n:i+1, total:files.length, name:file.name })); await yieldUi();
        try {
          if (!file.size || file.size>SOURCE_LIMIT || !(file.type.startsWith('video/') || /\.(mp4|mov|m4v|webm|mkv)$/i.test(file.name))) throw Error('err_file');
          sourceUrl = URL.createObjectURL(file); const loaded = waitEvent('loadeddata', 20000, 'err_decode'); video.src = sourceUrl; video.load(); await loaded; check();
          if (!(video.duration>0) || !video.videoWidth || !video.videoHeight) throw Error('err_decode');
          if (at.some(t => t >= video.duration - 0.001)) throw Error('err_short');
          const h = Math.max(2,Math.round(Math.min(width,video.videoWidth)*video.videoHeight/video.videoWidth/2)*2), w = Math.min(width,video.videoWidth);
          if (totalPixels + w*h*at.length > PIXEL_BUDGET) throw Error('err_budget');
          const canvas = document.createElement('canvas'); canvas.width = w; canvas.height = h; const ctx = canvas.getContext('2d',{alpha:false}); if (!ctx) throw Error('err_encode');
          const startFrames = frames.length;
          for (let j=0; j<at.length; j++){
            check(); const actual = await seek(at[j]); ctx.drawImage(video,0,0,w,h);
            const blob = await new Promise((resolve,reject) => canvas.toBlob(b => b ? resolve(b) : reject(Error('err_encode')),'image/jpeg',quality)); check();
            if (!blob.size || totalBytes+blob.size>OUTPUT_BUDGET) throw Error('err_budget');
            const path = folder + '/frame-' + String(j+1).padStart(3,'0') + '-t' + actual.toFixed(2) + '.jpg';
            frames.push({ path, blob }); totalBytes += blob.size; totalPixels += w*h;
            manifest.push([file.name,folder,at[j].toFixed(2),actual.toFixed(2),path,'ok']);
            progress(100*(i+(j+1)/at.length)/files.length, fill(M.frame_status,{file:i+1,total:files.length,frame:j+1,count:at.length})); await yieldUi();
          }
          ok++; rows[i] = { text:fill(M.row_ok,{count:frames.length-startFrames,size:bytes(frames.slice(startFrames).reduce((n,f)=>n+f.blob.size,0))}) };
        } catch (e){
          frames.length = beforeFrames; totalBytes = beforeBytes; totalPixels = beforePixels; manifest.length = beforeManifest;
          if (e?.name==='AbortError') throw e;
          bad++; rows[i] = { text:M[e?.message] || M.err_decode, error:true };
          manifest.push([file.name,folder,'','','',rows[i].text]);
        } finally { releaseVideo(); renderRows(); }
      }
      if (!frames.length) throw Error('err_none');
      frames.push({ path:'manifest.csv', blob:new Blob([manifest.map(row=>row.map(v=>'"'+String(v).replace(/"/g,'""')+'"').join(',')).join('\r\n')],{type:'text/csv'}) });
      $('bvfResult').textContent = fill(M.result,{files:ok,failed:bad,frames:frames.length-1,size:bytes(totalBytes)});
      $('bvfOutput').hidden = false; $('bvfZip').disabled = false;
      hud.className='bcw-hud is-done mb-3'; progress(100,M.done);
    } catch(e){
      if (e?.name==='AbortError') { const active = rows.findIndex(row=>row?.text===M.status_running); if (active>=0) rows[active]={ text:M.stopped, error:true }; renderRows(); }
      if (e?.name==='AbortError' && frames.length){
        frames.push({ path:'manifest.csv', blob:new Blob([manifest.map(row=>row.map(v=>'"'+String(v).replace(/"/g,'""')+'"').join(',')).join('\r\n')],{type:'text/csv'}) });
        $('bvfResult').textContent = fill(M.result,{files:ok,failed:bad,frames:frames.length-1,size:bytes(totalBytes)});
        $('bvfOutput').hidden = false;
        $('bvfZip').disabled = false;
      }
      fail(e?.name==='AbortError'?'stopped':M[e?.message]?e.message:'err_none');
    }
    finally { releaseVideo(); aborter=null; lock(false); }
  }
  function loadZip(){ if (window.JSZip) return Promise.resolve(window.JSZip); if (!zipPromise) zipPromise = new Promise((resolve,reject)=>{ const s=document.createElement('script'); s.src='/vendor/jszip/jszip.min.js'; s.onload=()=>window.JSZip?resolve(window.JSZip):reject(Error('err_zip')); s.onerror=()=>reject(Error('err_zip')); document.head.append(s); }).catch(e=>{zipPromise=null;throw e;}); return zipPromise; }
  async function downloadZip(){ if (busy || !frames.length) return; lock(true); const hud=$('bvfHud'); hud.hidden=false; hud.className='bcw-hud is-on mb-3'; try { const Zip=await loadZip(), zip=new Zip(); for (const item of frames) zip.file(item.path,item.blob,{binary:true,compression:'STORE'}); const out=await zip.generateAsync({type:'blob',compression:'STORE',streamFiles:true},m=>progress(m.percent,M.pack)); if(out.size>OUTPUT_BUDGET+1024*1024) throw Error('err_zip'); if(zipUrl) URL.revokeObjectURL(zipUrl); zipUrl=URL.createObjectURL(out); const a=document.createElement('a');a.href=zipUrl;a.download='batch-video-frames.zip';document.body.append(a);a.click();a.remove();hud.className='bcw-hud is-done mb-3';progress(100,M.done); } catch{ fail('err_zip'); } finally { lock(false); } }
  async function loadSample(){ if(busy)return; const epoch=++sampleEpoch; try { const r=await fetch('/samples/extract-frames-from-a-video-as-images.mp4'); if(!r.ok)throw Error(); const b=await r.blob(); if(epoch!==sampleEpoch)return; setFiles([new File([b],'example-a.mp4',{type:'video/mp4'}),new File([b],'example-b.mp4',{type:'video/mp4'})]); await extract(); } catch { if(epoch===sampleEpoch) fail('err_sample'); } }
  input.addEventListener('change',()=>setFiles(input.files)); $('bvfExtract').addEventListener('click',extract); $('bvfZip').addEventListener('click',downloadZip); $('bvfStop').addEventListener('click',()=>aborter?.abort()); $('bvfSample').addEventListener('click',loadSample); $('bvfClear').addEventListener('click',()=>setFiles([]));
  for(const id of ['bvfTimes','bvfWidth','bvfQuality']) $(id).addEventListener('change',()=>{ if(!busy)clearOutput(); });
  window.addEventListener('pagehide',()=>{aborter?.abort();releaseVideo();if(zipUrl)URL.revokeObjectURL(zipUrl);});
  window.batchVideoFramesLoadSample=loadSample; loadSample();
})();
