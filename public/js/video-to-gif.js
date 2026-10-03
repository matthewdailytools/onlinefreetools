/* Browser-only short video to GIF conversion. The input video is seeked from its Blob URL. */
(() => {
  'use strict';
  const M = window.videoGifMessages || {};
  const $ = (id) => document.getElementById(id);
  const panel = $('vgPanel');
  if (!panel) return;
  const input = $('vgFile');
  const video = document.createElement('video');
  video.muted = true;
  video.playsInline = true;
  video.preload = 'auto';
  video.style.display = 'none';
  panel.append(video);
  const MAX_SOURCE_BYTES = 1024 * 1024 * 1024;
  const MAX_DURATION = 10;
  const MAX_FRAMES = 100;
  const MAX_TOTAL_PIXELS = 20_000_000;
  const MAX_GIF_BYTES = 30 * 1024 * 1024;
  let selected = null;
  let sourceUrl = '';
  let gifUrl = '';
  let busy = false;
  let run = 0;
  let aborter = null;
  let elapsedTimer = 0;
  let startedAt = 0;
  let sampleRequest = 0;
  const fill = (s, values) => String(s || '').replace(/{(\w+)}/g, (_, key) => String(values[key] ?? ''));
  const yieldUi = () => new Promise((resolve) => {
    let done = false;
    const finish = () => { if (!done) { done = true; resolve(); } };
    if (document.hidden && typeof MessageChannel === 'function') {
      const c = new MessageChannel();
      c.port1.onmessage = () => { c.port1.close(); c.port2.close(); finish(); };
      c.port2.postMessage(0);
    } else {
      requestAnimationFrame(finish);
      setTimeout(finish, 50);
    }
  });
  const bytes = (n) => (n / 1024 / 1024).toFixed(2) + ' MiB';
  function discard() {
    if (gifUrl) URL.revokeObjectURL(gifUrl);
    gifUrl = '';
    $('vgImage').removeAttribute('src');
    $('vgOutput').hidden = true;
    $('vgEmpty').hidden = false;
    $('vgDownload').disabled = true;
  }
  function releaseVideo() {
    video.pause();
    video.removeAttribute('src');
    video.load();
    if (sourceUrl) URL.revokeObjectURL(sourceUrl);
    sourceUrl = '';
  }
  function lock(on) {
    busy = on;
    panel.querySelectorAll('button,input,select').forEach((el) => {
      if (el.id === 'vgStop') el.disabled = !on;
      else if (el.id === 'vgDownload') el.disabled = on || !gifUrl;
      else el.disabled = on;
    });
    $('vgConvert').setAttribute('aria-busy', String(on));
  }
  function progress(pct, step) {
    $('vgPct').textContent = Math.round(pct) + '%';
    $('vgBar').style.width = pct + '%';
    $('vgBar').setAttribute('aria-valuenow', String(Math.round(pct)));
    $('vgStep').textContent = step;
    $('vgHud').querySelectorAll('[data-step]').forEach((el) => el.classList.toggle('is-on', el.dataset.step === step));
  }
  function fail(key) {
    const hud = $('vgHud');
    hud.hidden = false;
    hud.classList.remove('is-on', 'is-done');
    hud.classList.add('is-error', 'is-fail');
    hud.setAttribute('role', 'alert');
    progress(0, M[key] || M.failed);
    $('vgPct').textContent = '—';
  }
  function estimate() {
    const start = Number($('vgStart').value);
    const end = Number($('vgEnd').value);
    const fps = Number($('vgFps').value);
    const width = Number($('vgWidth').value);
    const ratio = video.videoWidth && video.videoHeight ? video.videoHeight / video.videoWidth : 9 / 16;
    const height = Math.max(2, Math.round(width * ratio / 2) * 2);
    const count = Number.isFinite(start) && Number.isFinite(end) ? Math.ceil((end - start) * fps) : 0;
    $('vgBudget').textContent = fill(M.budget, { count, width, height, seconds: MAX_DURATION });
    return { start, end, fps, width, height, count };
  }
  function choose(file, fromSample = false) {
    if (busy) return;
    sampleRequest++;
    run++;
    aborter?.abort();
    discard();
    releaseVideo();
    selected = file || null;
    if (!selected) input.value = '';
    $('vgName').textContent = selected ? selected.name : '';
    $('vgHud').hidden = true;
    $('vgStart').value = '0';
    $('vgEnd').value = '3';
    $('vgBudget').textContent = '';
    if (!fromSample && selected && selected.size > MAX_SOURCE_BYTES) fail('err_size');
  }
  const stopError = () => new DOMException('Stopped', 'AbortError');
  function checkRun(id) {
    if (id !== run || aborter?.signal.aborted) throw stopError();
  }
  function waitEvent(element, event, signal, timeoutMs, errorKey) {
    return new Promise((resolve, reject) => {
      let timer;
      const cleanup = () => {
        element.removeEventListener(event, done);
        element.removeEventListener('error', error);
        signal?.removeEventListener('abort', abort);
        clearTimeout(timer);
      };
      const done = () => { cleanup(); resolve(); };
      const error = () => { cleanup(); reject(new Error(errorKey)); };
      const abort = () => { cleanup(); reject(stopError()); };
      element.addEventListener(event, done, { once: true });
      element.addEventListener('error', error, { once: true });
      signal?.addEventListener('abort', abort, { once: true });
      timer = setTimeout(error, timeoutMs);
      if (signal?.aborted) abort();
    });
  }
  async function seek(time, signal) {
    if (Math.abs(video.currentTime - time) < 0.015 && video.readyState >= 2) return video.currentTime;
    const done = waitEvent(video, 'seeked', signal, 15000, 'err_seek');
    video.currentTime = time;
    await done;
    if (Math.abs(video.currentTime - time) > 0.15 || video.readyState < 2) throw new Error('err_seek');
    return video.currentTime;
  }
  async function convert() {
    if (busy) return;
    discard();
    if (!selected || !selected.size) { fail('err_file'); return; }
    if (selected.size > MAX_SOURCE_BYTES) { fail('err_size'); return; }
    const id = ++run;
    aborter = new AbortController();
    lock(true);
    const hud = $('vgHud');
    hud.hidden = false;
    hud.classList.remove('is-error', 'is-fail', 'is-done');
    hud.classList.add('is-on');
    hud.setAttribute('role', 'status');
    startedAt = Date.now();
    elapsedTimer = setInterval(() => { $('vgTime').textContent = fill(M.elapsed, { s: Math.floor((Date.now() - startedAt) / 1000) }); }, 1000);
    try {
      progress(3, $('vgHud').querySelector('[data-step="read"]').textContent);
      sourceUrl = URL.createObjectURL(selected);
      const loaded = waitEvent(video, 'loadeddata', aborter.signal, 20000, 'err_decode');
      video.src = sourceUrl;
      video.load();
      await loaded;
      checkRun(id);
      if (!Number.isFinite(video.duration) || video.duration <= 0 || !video.videoWidth || !video.videoHeight) throw new Error('err_decode');
      const cfg = estimate();
      if (!(cfg.start >= 0 && cfg.end > cfg.start && cfg.end <= video.duration + 0.03 && cfg.end - cfg.start <= MAX_DURATION)) throw new Error('err_range');
      if (cfg.count < 2 || cfg.count > MAX_FRAMES || cfg.width * cfg.height * cfg.count > MAX_TOTAL_PIXELS) throw new Error('err_budget');
      const mod = await import('/vendor/gifenc/gifenc.esm.js');
      checkRun(id);
      const gif = mod.GIFEncoder();
      const canvas = document.createElement('canvas');
      canvas.width = cfg.width;
      canvas.height = cfg.height;
      const context = canvas.getContext('2d', { willReadFrequently: true, alpha: false });
      if (!context) throw new Error('err_encode');
      const actual = [];
      await yieldUi();
      for (let i = 0; i < cfg.count; i++) {
        checkRun(id);
        const time = Math.min(cfg.end - 0.001, cfg.start + i / cfg.fps);
        actual.push(await seek(time, aborter.signal));
        checkRun(id);
        context.drawImage(video, 0, 0, cfg.width, cfg.height);
        const rgba = context.getImageData(0, 0, cfg.width, cfg.height).data;
        const palette = mod.quantize(rgba, 128);
        const indexed = mod.applyPalette(rgba, palette);
        gif.writeFrame(indexed, cfg.width, cfg.height, i === 0 ?
          { palette, delay: Math.round(1000 / cfg.fps), repeat: 0 } :
          { palette, delay: Math.round(1000 / cfg.fps) });
        if (gif.bytesView().byteLength > MAX_GIF_BYTES) throw new Error('err_budget');
        progress(6 + 88 * (i + 1) / cfg.count, fill(M.frame_status, { index: i + 1, count: cfg.count, time: actual[i].toFixed(2) }));
        await yieldUi();
      }
      checkRun(id);
      progress(96, $('vgHud').querySelector('[data-step="encode"]').textContent);
      gif.finish();
      const output = gif.bytes();
      if (output.byteLength > MAX_GIF_BYTES || output.byteLength < 100 || String.fromCharCode(...output.slice(0, 6)) !== 'GIF89a') throw new Error('err_encode');
      gifUrl = URL.createObjectURL(new Blob([output], { type: 'image/gif' }));
      $('vgImage').src = gifUrl;
      $('vgOutput').hidden = false;
      $('vgEmpty').hidden = true;
      $('vgResult').textContent = fill(M.result, {
        source: bytes(selected.size), start: actual[0].toFixed(2), end: cfg.end.toFixed(2),
        count: actual.length, width: cfg.width, height: cfg.height, output: bytes(output.byteLength),
      });
      hud.classList.remove('is-on');
      hud.classList.add('is-done');
      progress(100, M.done);
    } catch (error) {
      discard();
      fail(error?.name === 'AbortError' ? 'stopped' : M[error?.message] ? error.message : 'err_encode');
    } finally {
      clearInterval(elapsedTimer);
      releaseVideo();
      aborter = null;
      lock(false);
    }
  }
  async function loadSample() {
    if (busy) return;
    const token = ++sampleRequest;
    try {
      const response = await fetch('/samples/convert-a-video-file-to-a-gif.mp4');
      if (!response.ok) throw new Error('sample');
      const blob = await response.blob();
      if (token !== sampleRequest || busy || selected) return;
      choose(new File([blob], 'video-to-gif-example.mp4', { type: 'video/mp4' }), true);
      await convert();
    } catch {
      if (token === sampleRequest && !selected) fail('err_sample');
    }
  }
  input.addEventListener('change', () => choose(input.files?.[0] || null));
  $('vgDrop').addEventListener('dragover', (event) => event.preventDefault());
  $('vgDrop').addEventListener('drop', (event) => {
    event.preventDefault();
    if (busy) return;
    const files = event.dataTransfer?.files;
    if (!files || files.length !== 1) { choose(null); fail('err_file'); return; }
    choose(files[0]);
  });
  for (const id of ['vgStart', 'vgEnd', 'vgFps', 'vgWidth']) {
    $(id).addEventListener('change', () => { if (!busy) { discard(); estimate(); } });
  }
  $('vgConvert').addEventListener('click', convert);
  $('vgSample').addEventListener('click', () => { if (!selected) loadSample(); else { choose(null); loadSample(); } });
  $('vgClear').addEventListener('click', () => choose(null));
  $('vgStop').addEventListener('click', () => { if (aborter) aborter.abort(); });
  $('vgDownload').addEventListener('click', () => {
    if (!gifUrl || busy) return;
    const a = document.createElement('a');
    a.href = gifUrl;
    a.download = (selected?.name || 'video').replace(/\.[^.]+$/, '') + '.gif';
    document.body.append(a);
    a.click();
    a.remove();
  });
  window.addEventListener('pagehide', () => {
    sampleRequest++;
    aborter?.abort();
    discard();
    releaseVideo();
    clearInterval(elapsedTimer);
  });
  estimate();
  window.videoGifLoadSample = loadSample;
  window.loadSample();
})();
