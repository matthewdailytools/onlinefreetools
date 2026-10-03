const $ = (id) => document.getElementById(id);
const msg = window.videoTrackInspectMessages || {};
const fmt = (template, data) => String(template || '').replace(/\{(\w+)\}/g, (_, key) => String(data[key] ?? ''));
const el = Object.fromEntries(['itFile','itName','itInspect','itStop','itSample','itClear','itHud','itPct','itStep','itTime','itBar','itEmpty','itOutput','itRows'].map((id) => [id, $(id)]));
const readable = (bytes) => bytes < 1048576 ? (bytes / 1024).toFixed(1) + ' KiB' : (bytes / 1048576).toFixed(1) + ' MiB';
const seconds = (value) => Number.isFinite(value) ? Number(value).toFixed(3) : msg.unknown;
let selected = []; let reports = []; let busy = false; let stopped = false; let worker = null; let cancelWorker = null; let started = 0; let timer = null;
const yieldUi = () => new Promise((resolve) => requestAnimationFrame(() => setTimeout(resolve, 18)));
function busyState(next) {
  busy = next;
  for (const id of ['itFile','itInspect','itSample','itClear']) el[id].disabled = next;
  el.itStop.disabled = !next;
  el.itInspect.setAttribute('aria-busy', String(next));
  if (next) { started = Date.now(); timer = setInterval(() => { el.itTime.textContent = Math.floor((Date.now() - started) / 1000) + ' s'; }, 250); }
  else { clearInterval(timer); timer = null; }
}
function hud(percent, step, error = false) {
  el.itHud.hidden = false; el.itHud.classList.toggle('is-error', error); el.itHud.setAttribute('role', error ? 'alert' : 'status');
  el.itPct.textContent = Math.round(percent) + '%'; el.itBar.style.width = Math.max(0, Math.min(100, percent)) + '%'; el.itBar.setAttribute('aria-valuenow', String(Math.round(percent))); el.itStep.textContent = step;
  for (const item of el.itHud.querySelectorAll('[data-step]')) item.classList.toggle('is-active', item.getAttribute('data-step') === step);
}
function names() { el.itName.textContent = selected.length ? selected.map((f) => f.name).slice(0, 3).join(', ') + (selected.length > 3 ? ` +${selected.length - 3}` : '') : ''; }
function download(report) {
  const blob = new Blob([JSON.stringify(report, null, 2) + '\n'], { type: 'application/json' }); const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a'); anchor.href = url; anchor.download = (report.fileName.replace(/\.[^.]+$/, '').replace(/[^\p{L}\p{N}._-]+/gu, '-') || 'video') + '-tracks.json'; document.body.append(anchor); anchor.click(); anchor.remove(); setTimeout(() => URL.revokeObjectURL(url), 30000);
}
function line(parent, label, value) { const p = document.createElement('p'); const strong = document.createElement('strong'); strong.textContent = label + ' '; p.append(strong, document.createTextNode(value)); parent.append(p); }
function render(report) {
  const card = document.createElement('article'); card.className = 'it-card'; const h = document.createElement('h3'); h.className = 'h6'; h.textContent = report.fileName; card.append(h);
  const videos = report.tracks.filter((track) => track.type === 'video'); const audios = report.tracks.filter((track) => track.type === 'audio');
  const summary = document.createElement('p'); summary.textContent = fmt(msg.summary, { container: report.container, size: readable(report.fileBytes), video: videos.length, audio: audios.length }); card.append(summary);
  for (const track of report.tracks) {
    const box = document.createElement('div'); box.className = 'it-track'; const heading = document.createElement('strong'); heading.textContent = fmt(track.type === 'video' ? msg.video : msg.audio, { number: track.number }); box.append(heading);
    line(box, msg.codec_head, `${track.codec || msg.unknown}${track.codecParameter ? ' · ' + track.codecParameter : ''}${track.language && track.language !== 'und' ? ' · ' + track.language : ''}`);
    line(box, msg.detail_head, (track.type === 'video' ? fmt(msg.video_detail, { width: track.width, height: track.height, rotation: track.rotation }) : fmt(msg.audio_detail, { channels: track.channels, rate: track.sampleRate })) + ' · ' + fmt(msg.timing, { start: seconds(track.startSeconds), end: seconds(track.metadataEndSeconds) }));
    line(box, msg.decode_head, track.canDecodeHere ? msg.yes : msg.no);
    const symbol = (value) => value == null ? '?' : value ? '✓' : '×';
    line(box, msg.container_fit, `MP4 ${symbol(track.containerCodecSupport?.mp4)} · WebM ${symbol(track.containerCodecSupport?.webm)}`);
    card.append(box);
  }
  if (!audios.length) { const p = document.createElement('p'); p.className = 'text-warning-emphasis'; p.textContent = msg.none; card.append(p); }
  const button = document.createElement('button'); button.type = 'button'; button.className = 'btn btn-outline-primary'; button.textContent = msg.download; button.addEventListener('click', () => download(report)); card.append(button); el.itRows.append(card);
}
function renderError(file, error) { const card = document.createElement('article'); card.className = 'it-card border-danger'; const h = document.createElement('h3'); h.className = 'h6'; h.textContent = file; const p = document.createElement('p'); p.textContent = `${msg.failed}: ${error}`; card.append(h, p); el.itRows.append(card); }
function inspectFile(file) {
  return new Promise((resolve, reject) => {
    worker = new Worker('/js/video-track-inspect-worker.mjs', { type: 'module' });
    cancelWorker = () => { worker?.terminate(); worker = null; cancelWorker = null; reject(new Error('Stopped')); };
    worker.onmessage = (event) => { worker.terminate(); worker = null; cancelWorker = null; event.data.ok ? resolve(event.data.report) : reject(new Error(event.data.error)); };
    worker.onerror = (event) => { worker.terminate(); worker = null; cancelWorker = null; reject(new Error(event.message || 'Worker error')); };
    worker.postMessage({ file });
  });
}
async function inspect() {
  if (busy) return;
  if (!selected.length) { hud(0, msg.err_files, true); return; }
  if (selected.length > 30 || selected.some((file) => file.size > 5 * 1024 ** 3)) { hud(0, msg.err_limit, true); return; }
  reports = []; stopped = false; el.itRows.replaceChildren(); el.itOutput.hidden = false; el.itEmpty.hidden = true; busyState(true); hud(0, msg.read); await yieldUi();
  let failures = 0;
  try {
    for (let i = 0; i < selected.length; i++) {
      if (stopped) break;
      const file = selected[i]; hud(i / selected.length * 100, `${msg.read}: ${file.name}`); await yieldUi();
      try { const report = await inspectFile(file); if (stopped) break; reports.push(report); render(report); }
      catch (error) { if (stopped) break; failures++; renderError(file.name, String(error.message || error)); }
      hud((i + 1) / selected.length * 100, `${msg.report}: ${file.name}`); await yieldUi();
    }
    hud(stopped ? Math.round((reports.length + failures) / selected.length * 100) : 100, stopped ? msg.stopped : `${msg.done}: ${reports.length}${failures ? ` · ${msg.failed}: ${failures}` : ''}`, failures > 0 && !reports.length);
  } finally { busyState(false); }
}
async function sample() {
  if (busy) return;
  try { const response = await fetch('/samples/inspect-video-file-tracks.mp4'); if (!response.ok) throw Error('fetch'); selected = [new File([await response.blob()], 'two-audio-languages.mp4', { type: 'video/mp4' })]; names(); await inspect(); }
  catch { hud(0, msg.err_sample, true); }
}
function clear() { if (busy) return; selected = []; reports = []; el.itFile.value = ''; names(); el.itRows.replaceChildren(); el.itOutput.hidden = true; el.itEmpty.hidden = false; el.itHud.hidden = true; }
el.itFile.addEventListener('change', () => { selected = [...el.itFile.files]; names(); });
el.itInspect.addEventListener('click', inspect); el.itSample.addEventListener('click', sample); el.itClear.addEventListener('click', clear);
el.itStop.addEventListener('click', () => { stopped = true; cancelWorker?.(); hud(0, msg.stopped); });
window.videoTrackInspectLoadSample = sample;
setTimeout(sample, 50);
