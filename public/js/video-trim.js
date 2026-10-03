/* One local video interval to H.264/AAC MP4; bounded BufferTarget or OPFS stream. */
(() => {
  'use strict';
  const M = window.videoTrimMessages || {};
  const $ = (id) => document.getElementById(id);
  const panel = $('vtPanel'); if (!panel) return;
  const input = $('vtFile'), source = $('vtSource'), outputVideo = $('vtVideo');
  let selected = null, sourceUrl = '', outputUrl = '', outputCleanup = null;
  let busy = false, aborter = null, token = 0, sampleRequest = 0, timer = 0, started = 0, modPromise = null, choosingPromise = Promise.resolve();
  const fill = (s, v) => String(s || '').replace(/{(\w+)}/g, (_, k) => String(v[k] ?? ''));
  const mib = (n) => (n / 1048576).toFixed(2) + ' MiB';
  const loadMod = () => modPromise ||= import('/vendor/mediabunny/mkv-to-mp4-loader.js').catch((e) => { modPromise = null; throw e; });
  const yieldUi = () => new Promise((resolve) => { let done = false; const finish = () => { if (!done) { done = true; resolve(); } }; if (document.hidden && typeof MessageChannel === 'function') { const c = new MessageChannel(); c.port1.onmessage = () => { c.port1.close(); c.port2.close(); finish(); }; c.port2.postMessage(0); } else { requestAnimationFrame(finish); setTimeout(finish, 50); } });
  async function clearOutput() {
    outputVideo.pause(); outputVideo.removeAttribute('src'); outputVideo.load();
    if (outputUrl) URL.revokeObjectURL(outputUrl); outputUrl = '';
    if (outputCleanup) { const cleanup = outputCleanup; outputCleanup = null; await cleanup().catch(() => {}); }
    $('vtDownload').disabled = true; $('vtOutput').hidden = true; $('vtEmpty').hidden = false;
  }
  function clearSource() { source.pause(); source.removeAttribute('src'); source.load(); if (sourceUrl) URL.revokeObjectURL(sourceUrl); sourceUrl = ''; }
  async function choose(file, isSample = false) {
    if (busy) return;
    if (!isSample) sampleRequest++;
    const id = ++token;
    selected = file || null;
    if (!selected) input.value = '';
    await clearOutput();
    if (id !== token) return;
    clearSource();
    $('vtName').textContent = selected ? selected.name : '';
    $('vtHud').hidden = true;
    if (selected) { sourceUrl = URL.createObjectURL(selected); source.src = sourceUrl; source.load(); }
  }
  function lock(on) {
    busy = on;
    panel.querySelectorAll('button,input,select').forEach((el) => { if (el.id === 'vtStop') el.disabled = !on; else if (el.id === 'vtDownload') el.disabled = on || !outputUrl; else el.disabled = on; });
    $('vtConvert').setAttribute('aria-busy', String(on));
  }
  function progress(pct, step) {
    pct = Math.min(100, Math.max(0, pct));
    $('vtPct').textContent = Math.round(pct) + '%'; $('vtBar').style.width = pct + '%'; $('vtBar').setAttribute('aria-valuenow', String(Math.round(pct)));
    $('vtStep').textContent = step;
    $('vtHud').querySelectorAll('[data-step]').forEach((el) => el.classList.toggle('is-on', el.textContent === step));
  }
  function fail(key) { const hud = $('vtHud'); hud.hidden = false; hud.classList.remove('is-on','is-done'); hud.classList.add('is-error','is-fail'); hud.setAttribute('role','alert'); progress(0, M[key] || M.failed); $('vtPct').textContent = '—'; }
  function download() { if (!outputUrl || busy) return; const a = document.createElement('a'); a.href = outputUrl; a.download = (selected?.name || 'video').replace(/\.[^.]+$/, '').replace(/[^a-z0-9_-]+/gi,'-').slice(0,50) + '-trimmed.mp4'; document.body.append(a); a.click(); a.remove(); }
  async function convert() {
    if (busy) return;
    await choosingPromise;
    if (busy) return;
    await clearOutput();
    if (!selected?.size) { fail('err_file'); return; }
    const start = Number($('vtStart').value), end = Number($('vtEnd').value);
    if (!Number.isFinite(start) || !Number.isFinite(end) || start < 0 || end <= start) { fail('err_range'); return; }
    const id = ++token, hud = $('vtHud');
    aborter = new AbortController(); lock(true); hud.hidden = false; hud.classList.remove('is-error','is-fail','is-done'); hud.classList.add('is-on'); hud.setAttribute('role','status');
    started = Date.now(); timer = setInterval(() => { $('vtTime').textContent = fill(M.elapsed, { s: Math.floor((Date.now() - started) / 1000) }); }, 1000);
    try {
      progress(3, $('vtHud').querySelector('[data-step="read"]').textContent);
      const mod = await loadMod();
      const caps = await mod.getConvertCapabilities();
      if (selected.size > caps.maxBytes) throw new Error('err_limit');
      const info = await mod.inspectVideoFile(selected);
      if (id !== token || aborter.signal.aborted) throw new Error('err_aborted');
      if (!info.canDecodeVideo) throw new Error('err_codec');
      if (info.audioCodec !== 'none' && !info.canDecodeAudio) throw new Error('err_audio');
      if (!info.canEncodeAvc) throw new Error('err_video');
      if (!(info.duration > 0) || end > info.duration + 0.05 || end - start < 0.1) throw new Error('err_range');
      await yieldUi();
      progress(10, $('vtHud').querySelector('[data-step="encode"]').textContent);
      const result = await mod.trimVideoClipToMp4(selected, { start, end, quality: $('vtQuality').value, numberOfChannels: Number($('vtChannels').value), preferOpfs: selected.size > caps.smallBufferMaxBytes, keepOpfsOutput: selected.size > caps.smallBufferMaxBytes, signal: aborter.signal, onProgress: (ratio) => progress(10 + ratio * 78, $('vtHud').querySelector('[data-step="encode"]').textContent) });
      if (id !== token || aborter.signal.aborted) { await result.cleanup?.(); throw new Error('err_aborted'); }
      progress(90, $('vtHud').querySelector('[data-step="check"]').textContent);
      const checked = await mod.inspectVideoFile(result.blob);
      if (checked.videoCodec !== 'avc' || !checked.canDecodeVideo || info.audioCodec !== 'none' && checked.audioCodec !== 'aac' || checked.duration < end - start - 0.2 || checked.duration > end - start + 0.3) { await result.cleanup?.(); throw new Error('err_encoder'); }
      outputCleanup = result.cleanup || null;
      outputUrl = URL.createObjectURL(result.blob);
      outputVideo.src = outputUrl; outputVideo.load();
      $('vtResult').textContent = fill(M.result, { start: start.toFixed(2), end: end.toFixed(2), duration: checked.duration.toFixed(2), video: checked.videoCodec.toUpperCase(), audio: checked.audioCodec === 'none' ? M.silent : checked.audioCodec.toUpperCase(), source: mib(selected.size), output: mib(result.size), route: result.via.toUpperCase() });
      $('vtOutput').hidden = false; $('vtEmpty').hidden = true; $('vtDownload').disabled = false;
      hud.classList.remove('is-on'); hud.classList.add('is-done'); progress(100, M.done);
    } catch (e) { const key = e?.code || e?.message; fail(key === 'err_aborted' ? 'stopped' : M[key] ? key : 'err_encoder'); }
    finally { clearInterval(timer); aborter = null; lock(false); }
  }
  async function loadSample() {
    if (busy) return;
    const id = ++sampleRequest;
    try { const res = await fetch('/samples/trim-a-video-clip-and-export.mp4', { cache:'force-cache' }); if (!res.ok) throw Error(); const blob = await res.blob(); if (id !== sampleRequest || busy) return; choosingPromise = choose(new File([blob], 'moving-video-sample.mp4', { type:'video/mp4' }), true); await choosingPromise; await convert(); }
    catch { if (id === sampleRequest) fail('err_sample'); }
  }
  window.videoTrimLoadSample = loadSample;
  input.addEventListener('change', () => { choosingPromise = choose(input.files?.[0]); });
  $('vtConvert').addEventListener('click', convert); $('vtDownload').addEventListener('click', download);
  $('vtStop').addEventListener('click', () => { token++; aborter?.abort(); });
  $('vtSample').addEventListener('click', loadSample);
  $('vtClear').addEventListener('click', () => { choosingPromise = choose(null); });
  loadSample();
})();
