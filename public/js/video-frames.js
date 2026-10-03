/* Local video frame extraction with bounded JPG/PNG output and optional small ZIP. */
(() => {
  'use strict';
  const M = window.videoFramesMessages || {};
  const $ = (id) => document.getElementById(id);
  const panel = $('vfPanel');
  if (!panel) return;
  const input = $('vfFile');
  const video = document.createElement('video');
  video.muted = true;
  video.playsInline = true;
  video.preload = 'auto';
  video.hidden = true;
  panel.append(video);
  const SOURCE_LIMIT = 1024 * 1024 * 1024;
  const FRAME_LIMIT = 60;
  const PIXEL_LIMIT = 30_000_000;
  const OUTPUT_LIMIT = 32 * 1024 * 1024;
  let selected = null;
  let sourceUrl = '';
  let zipUrl = '';
  let outputs = [];
  let busy = false;
  let run = 0;
  let aborter = null;
  let sampleRequest = 0;
  let elapsedTimer = 0;
  let startedAt = 0;
  let zipPromise = null;
  const fill = (s, values) => String(s || '').replace(/{(\w+)}/g, (_, key) => String(values[key] ?? ''));
  const bytes = (n) => (n / 1024 / 1024).toFixed(2) + ' MiB';
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
  function clearResults() {
    for (const item of outputs) URL.revokeObjectURL(item.url);
    outputs = [];
    if (zipUrl) URL.revokeObjectURL(zipUrl);
    zipUrl = '';
    $('vfList').replaceChildren();
    $('vfOutput').hidden = true;
    $('vfEmpty').hidden = false;
    $('vfZip').disabled = true;
  }
  function releaseVideo() {
    video.pause();
    video.removeAttribute('src');
    video.load();
    if (sourceUrl) URL.revokeObjectURL(sourceUrl);
    sourceUrl = '';
  }
  function lock(on, stoppable = on) {
    busy = on;
    panel.querySelectorAll('button,input,select').forEach((el) => {
      if (el.id === 'vfStop') el.disabled = !stoppable;
      else if (el.id === 'vfZip') el.disabled = on || outputs.length === 0;
      else el.disabled = on;
    });
    $('vfExtract').setAttribute('aria-busy', String(on));
  }
  function progress(pct, step) {
    $('vfPct').textContent = Math.round(pct) + '%';
    $('vfBar').style.width = pct + '%';
    $('vfBar').setAttribute('aria-valuenow', String(Math.round(pct)));
    $('vfStep').textContent = step;
    $('vfHud').querySelectorAll('[data-step]').forEach((el) => el.classList.toggle('is-on', el.dataset.step === step));
  }
  function fail(key) {
    const hud = $('vfHud');
    hud.hidden = false;
    hud.classList.remove('is-on', 'is-done');
    hud.classList.add('is-error', 'is-fail');
    hud.setAttribute('role', 'alert');
    progress(0, M[key] || M.failed);
    $('vfPct').textContent = '—';
  }
  function plan() {
    const mode = $('vfMode').value;
    const start = Number($('vfStart').value);
    const end = Number($('vfEnd').value);
    const interval = Number($('vfInterval').value);
    const format = $('vfFormat').value;
    const width = Math.min(Number($('vfWidth').value), video.videoWidth || Number($('vfWidth').value));
    const height = Math.max(2, Math.round(width * (video.videoHeight && video.videoWidth ? video.videoHeight / video.videoWidth : 9 / 16) / 2) * 2);
    const count = mode === 'single' ? 1 : Number.isFinite(start) && Number.isFinite(end) && interval > 0 ? Math.ceil((end - start) / interval) : 0;
    $('vfBudget').textContent = fill(M.budget, { count, width, height, limit: FRAME_LIMIT });
    $('vfEndWrap').hidden = mode === 'single';
    $('vfIntervalWrap').hidden = mode === 'single';
    $('vfQualityWrap').hidden = format !== 'jpeg';
    return { mode, start, end, interval, format, width, height, count, quality: Number($('vfQuality').value) };
  }
  function choose(file) {
    if (busy) return;
    sampleRequest++;
    run++;
    aborter?.abort();
    clearResults();
    releaseVideo();
    selected = file || null;
    if (!selected) input.value = '';
    $('vfName').textContent = selected ? selected.name : '';
    $('vfHud').hidden = true;
    $('vfStart').value = '0';
    $('vfEnd').value = '3';
    plan();
    if (selected && selected.size > SOURCE_LIMIT) fail('err_size');
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
  function drawResults() {
    const list = $('vfList');
    list.replaceChildren();
    let total = 0;
    for (const item of outputs) {
      total += item.blob.size;
      const col = document.createElement('div');
      col.className = 'col-6 col-md-4';
      const card = document.createElement('div');
      card.className = 'vf-card';
      const image = document.createElement('img');
      image.src = item.url;
      image.alt = item.name;
      const text = document.createElement('p');
      text.className = 'small mb-1';
      text.textContent = fill(M.item, { index: item.index, time: item.time.toFixed(2), width: item.width, height: item.height, size: bytes(item.blob.size) });
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'btn btn-outline-primary btn-sm';
      button.textContent = M.download_one;
      button.addEventListener('click', () => downloadUrl(item.url, item.name));
      card.append(image, text, button);
      col.append(card);
      list.append(col);
    }
    $('vfResult').textContent = fill(M.result, {
      count: outputs.length, total: bytes(total), first: outputs[0].time.toFixed(2),
      last: outputs.at(-1).time.toFixed(2), source: bytes(selected?.size || 0),
    });
    $('vfOutput').hidden = false;
    $('vfEmpty').hidden = true;
    $('vfZip').disabled = busy || outputs.length === 0;
  }
  function downloadUrl(url, name) {
    const link = document.createElement('a');
    link.href = url;
    link.download = name;
    document.body.append(link);
    link.click();
    link.remove();
  }
  async function extract() {
    if (busy) return;
    clearResults();
    if (!selected || !selected.size) { fail('err_file'); return; }
    if (selected.size > SOURCE_LIMIT) { fail('err_size'); return; }
    const id = ++run;
    aborter = new AbortController();
    lock(true);
    const hud = $('vfHud');
    hud.hidden = false;
    hud.classList.remove('is-error', 'is-fail', 'is-done');
    hud.classList.add('is-on');
    hud.setAttribute('role', 'status');
    startedAt = Date.now();
    elapsedTimer = setInterval(() => { $('vfTime').textContent = fill(M.elapsed, { s: Math.floor((Date.now() - startedAt) / 1000) }); }, 1000);
    try {
      progress(2, $('vfHud').querySelector('[data-step="read"]').textContent);
      sourceUrl = URL.createObjectURL(selected);
      const loaded = waitEvent(video, 'loadeddata', aborter.signal, 20000, 'err_decode');
      video.src = sourceUrl;
      video.load();
      await loaded;
      checkRun(id);
      if (!Number.isFinite(video.duration) || video.duration <= 0 || !video.videoWidth || !video.videoHeight) throw new Error('err_decode');
      const cfg = plan();
      if (!(cfg.start >= 0 && cfg.start < video.duration) || cfg.mode === 'interval' && !(cfg.end > cfg.start && cfg.end <= video.duration + 0.03 && cfg.interval >= 0.1)) throw new Error('err_range');
      if (cfg.count < 1 || cfg.count > FRAME_LIMIT || cfg.width * cfg.height * cfg.count > PIXEL_LIMIT) throw new Error('err_budget');
      const canvas = document.createElement('canvas');
      canvas.width = cfg.width;
      canvas.height = cfg.height;
      const context = canvas.getContext('2d', { alpha: false });
      if (!context) throw new Error('err_encode');
      const base = (selected.name || 'video').replace(/\.[^.]+$/, '').replace(/[^a-z0-9_-]+/gi, '-').slice(0, 60) || 'video';
      const ext = cfg.format === 'png' ? 'png' : 'jpg';
      const mime = cfg.format === 'png' ? 'image/png' : 'image/jpeg';
      let total = 0;
      await yieldUi();
      for (let i = 0; i < cfg.count; i++) {
        checkRun(id);
        const requested = cfg.mode === 'single' ? cfg.start : Math.min(cfg.end - 0.001, cfg.start + i * cfg.interval);
        const actual = await seek(requested, aborter.signal);
        checkRun(id);
        context.drawImage(video, 0, 0, cfg.width, cfg.height);
        const blob = await new Promise((resolve, reject) => canvas.toBlob((b) => b ? resolve(b) : reject(new Error('err_encode')), mime, cfg.quality));
        checkRun(id);
        if (blob.type !== mime || !blob.size) throw new Error('err_encode');
        if (total + blob.size > OUTPUT_LIMIT) throw new Error('err_budget');
        total += blob.size;
        const name = base + '-frame-' + String(i + 1).padStart(4, '0') + '-t' + actual.toFixed(2) + '.' + ext;
        outputs.push({ index: i + 1, name, blob, url: URL.createObjectURL(blob), time: actual, width: cfg.width, height: cfg.height });
        progress(5 + 90 * (i + 1) / cfg.count, fill(M.frame_status, { index: i + 1, count: cfg.count, time: actual.toFixed(2) }));
        await yieldUi();
      }
      checkRun(id);
      drawResults();
      hud.classList.remove('is-on');
      hud.classList.add('is-done');
      progress(100, M.done);
    } catch (error) {
      if (outputs.length) drawResults();
      fail(error?.name === 'AbortError' ? 'stopped' : M[error?.message] ? error.message : 'err_encode');
      if (outputs.length) $('vfStep').textContent += ' ' + fill(M.partial, { count: outputs.length });
    } finally {
      clearInterval(elapsedTimer);
      releaseVideo();
      aborter = null;
      lock(false);
    }
  }
  function loadZipLibrary() {
    if (window.JSZip) return Promise.resolve(window.JSZip);
    if (!zipPromise) zipPromise = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = '/vendor/jszip/jszip.min.js';
      script.onload = () => window.JSZip ? resolve(window.JSZip) : reject(new Error('err_zip'));
      script.onerror = () => reject(new Error('err_zip'));
      document.head.append(script);
    }).catch((error) => { zipPromise = null; throw error; });
    return zipPromise;
  }
  async function downloadZip() {
    if (busy || !outputs.length) return;
    lock(true, false);
    const hud = $('vfHud');
    hud.hidden = false;
    hud.classList.remove('is-error', 'is-fail', 'is-done');
    hud.classList.add('is-on');
    try {
      progress(0, $('vfHud').querySelector('[data-step="save"]').textContent);
      const Zip = await loadZipLibrary();
      const zip = new Zip();
      for (const item of outputs) zip.file(item.name, item.blob, { binary: true, compression: 'STORE' });
      const result = await zip.generateAsync({ type: 'blob', compression: 'STORE', streamFiles: true }, (meta) => progress(meta.percent, $('vfHud').querySelector('[data-step="save"]').textContent));
      if (result.size > OUTPUT_LIMIT + 1024 * 1024) throw new Error('err_zip');
      if (zipUrl) URL.revokeObjectURL(zipUrl);
      zipUrl = URL.createObjectURL(result);
      downloadUrl(zipUrl, (selected?.name || 'video').replace(/\.[^.]+$/, '') + '-frames.zip');
      hud.classList.remove('is-on');
      hud.classList.add('is-done');
      progress(100, M.done);
    } catch {
      fail('err_zip');
    } finally {
      lock(false);
    }
  }
  async function loadSample() {
    if (busy) return;
    const token = ++sampleRequest;
    try {
      const response = await fetch('/samples/extract-frames-from-a-video-as-images.mp4');
      if (!response.ok) throw new Error('sample');
      const blob = await response.blob();
      if (token !== sampleRequest || selected || busy) return;
      choose(new File([blob], 'video-frame-example.mp4', { type: 'video/mp4' }));
      await extract();
    } catch {
      if (token === sampleRequest && !selected) fail('err_sample');
    }
  }
  input.addEventListener('change', () => choose(input.files?.[0] || null));
  $('vfDrop').addEventListener('dragover', (event) => event.preventDefault());
  $('vfDrop').addEventListener('drop', (event) => {
    event.preventDefault();
    if (busy) return;
    const files = event.dataTransfer?.files;
    if (!files || files.length !== 1) { choose(null); fail('err_file'); return; }
    choose(files[0]);
  });
  for (const id of ['vfMode', 'vfStart', 'vfEnd', 'vfInterval', 'vfFormat', 'vfWidth', 'vfQuality']) {
    $(id).addEventListener('change', () => { if (!busy) { clearResults(); plan(); } });
  }
  $('vfExtract').addEventListener('click', extract);
  $('vfZip').addEventListener('click', downloadZip);
  $('vfStop').addEventListener('click', () => aborter?.abort());
  $('vfSample').addEventListener('click', () => { if (selected) choose(null); loadSample(); });
  $('vfClear').addEventListener('click', () => choose(null));
  window.addEventListener('pagehide', () => {
    sampleRequest++;
    aborter?.abort();
    clearResults();
    releaseVideo();
    clearInterval(elapsedTimer);
  });
  plan();
  window.videoFramesLoadSample = loadSample;
  window.loadSample();
})();
