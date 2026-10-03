const $ = (id) => document.getElementById(id);
const msg = window.subtitleConvertMessages || {};
const fmt = (template, values) => String(template || '').replace(/\{(\w+)\}/g, (_, key) => String(values[key] ?? ''));
const el = Object.fromEntries(['scFile','scName','scTarget','scEncoding','scBom','scConvert','scDownloadZip','scStop','scSample','scClear','scHud','scPct','scStep','scTime','scBar','scEmpty','scOutput','scRows'].map((id) => [id, $(id)]));
let selected = [];
let results = [];
let stopped = false;
let busy = false;
let worker = null;
let cancelWorker = null;
let started = 0;
let timer = null;

const yieldUi = () => new Promise((resolve) => requestAnimationFrame(() => setTimeout(resolve, 18)));
const readable = (bytes) => bytes < 1024 * 1024 ? (bytes / 1024).toFixed(1) + ' KiB' : (bytes / 1024 / 1024).toFixed(1) + ' MiB';
const clock = (ms) => { const sec = Math.floor(ms / 1000); return `${String(Math.floor(sec / 3600)).padStart(2,'0')}:${String(Math.floor(sec / 60) % 60).padStart(2,'0')}:${String(sec % 60).padStart(2,'0')}.${String(ms % 1000).padStart(3,'0')}`; };
function setBusy(next) {
  busy = next;
  for (const id of ['scFile','scTarget','scEncoding','scBom','scConvert','scSample','scClear']) el[id].disabled = next;
  el.scStop.disabled = !next;
  el.scConvert.setAttribute('aria-busy', String(next));
  if (next) { started = Date.now(); timer = setInterval(() => { el.scTime.textContent = Math.floor((Date.now() - started) / 1000) + ' s'; }, 250); }
  else { clearInterval(timer); timer = null; }
}
function showHud(percent, step, error = false) {
  el.scHud.hidden = false;
  el.scHud.classList.toggle('is-error', error);
  el.scPct.textContent = Math.round(percent) + '%';
  el.scBar.style.width = Math.max(0, Math.min(100, percent)) + '%';
  el.scBar.setAttribute('aria-valuenow', String(Math.round(percent)));
  el.scStep.textContent = step;
  for (const item of el.scHud.querySelectorAll('[data-step]')) item.classList.toggle('is-active', item.getAttribute('data-step') === step);
}
function errorMessage(text) { showHud(0, text, true); el.scHud.setAttribute('role', 'alert'); }
function updateNames() { el.scName.textContent = selected.length ? selected.map((f) => f.name).slice(0, 3).join(', ') + (selected.length > 3 ? ` +${selected.length - 3}` : '') : ''; }
function uniqueName(name, seen) {
  const normalized = name.replace(/[^\p{L}\p{N}._-]+/gu, '-').replace(/^[-.]+/, '') || 'subtitle';
  const count = seen.get(normalized) || 0; seen.set(normalized, count + 1);
  if (!count) return normalized;
  const dot = normalized.lastIndexOf('.');
  return dot > 0 ? `${normalized.slice(0, dot)}-${count + 1}${normalized.slice(dot)}` : `${normalized}-${count + 1}`;
}
function download(result) {
  const url = URL.createObjectURL(result.blob);
  const anchor = document.createElement('a'); anchor.href = url; anchor.download = result.name; document.body.append(anchor); anchor.click(); anchor.remove();
  setTimeout(() => URL.revokeObjectURL(url), 30000);
}
function row(file, status, details, result) {
  const tr = document.createElement('tr');
  for (const value of [file, status, details]) { const td = document.createElement('td'); td.textContent = value; tr.append(td); }
  const action = document.createElement('td');
  if (result) { const button = document.createElement('button'); button.type = 'button'; button.className = 'btn btn-outline-primary btn-sm'; button.textContent = msg.download; button.addEventListener('click', () => download(result)); action.append(button); }
  tr.append(action); el.scRows.append(tr);
  return tr;
}
function work(bytes, name, target, encoding, bom) {
  return new Promise((resolve, reject) => {
    worker = new Worker('/js/subtitle-convert-worker.mjs', { type: 'module' });
    cancelWorker = () => { worker?.terminate(); worker = null; cancelWorker = null; reject(new Error('Stopped')); };
    worker.onmessage = (event) => { worker.terminate(); worker = null; cancelWorker = null; event.data.ok ? resolve(event.data) : reject(new Error(event.data.error)); };
    worker.onerror = (event) => { worker.terminate(); worker = null; cancelWorker = null; reject(new Error(event.message || 'Worker error')); };
    worker.postMessage({ bytes, name, target, encoding, bom }, [bytes]);
  });
}
function updateZip() {
  const total = results.reduce((sum, result) => sum + result.blob.size, 0);
  el.scDownloadZip.disabled = results.length < 2 || total > 30 * 1024 * 1024 || busy;
}
async function convert() {
  if (busy) return;
  if (!selected.length) { errorMessage(msg.err_files); return; }
  if (selected.length > 30 || selected.some((f) => f.size > 50 * 1024 * 1024) || selected.reduce((sum, f) => sum + f.size, 0) > 200 * 1024 * 1024) { errorMessage(msg.err_limit); return; }
  results = []; stopped = false; el.scRows.replaceChildren(); el.scOutput.hidden = false; el.scEmpty.hidden = true; updateZip(); setBusy(true);
  showHud(0, msg.read); await yieldUi();
  const seen = new Map(); let failures = 0;
  try {
    for (let i = 0; i < selected.length; i++) {
      if (stopped) break;
      const file = selected[i]; const startPct = i / selected.length * 100;
      showHud(startPct, `${msg.read}: ${file.name}`); await yieldUi();
      try {
        const bytes = await file.arrayBuffer();
        if (stopped) break;
        showHud(startPct + 30 / selected.length, `${msg.parse}: ${file.name}`); await yieldUi();
        const converted = await work(bytes, file.name, el.scTarget.value, el.scEncoding.value, el.scBom.checked);
        if (stopped) break;
        const outputName = uniqueName(file.name.replace(/\.[^.]+$/, '') + '.' + el.scTarget.value, seen);
        const result = { name: outputName, blob: new Blob([converted.bytes], { type: 'text/plain;charset=utf-8' }) };
        results.push(result);
        const summary = fmt(msg.summary, { count: converted.count, first: clock(converted.first), last: clock(converted.last), encoding: converted.encoding, source: converted.source.toUpperCase(), output: el.scTarget.value.toUpperCase(), losses: converted.losses.join('; ') || msg.none });
        row(file.name, msg.done, `${summary} ${fmt(msg.preview, { text: converted.preview })} ${readable(file.size)} → ${readable(result.blob.size)}`, result);
      } catch (error) { if (stopped) break; failures++; row(file.name, msg.failed, String(error.message || error), null); }
      showHud((i + 1) / selected.length * 100, `${msg.check}: ${file.name}`); updateZip(); await yieldUi();
    }
    const status = stopped ? msg.stopped : failures ? `${msg.done}: ${results.length}; ${msg.failed}: ${failures}` : `${msg.done}: ${results.length}`;
    showHud(stopped ? Math.round((results.length + failures) / selected.length * 100) : 100, status, failures > 0 && !results.length);
  } finally { setBusy(false); updateZip(); }
}
async function loadZip() {
  if (el.scDownloadZip.disabled) return;
  try {
    if (!window.fflate?.zipSync) await new Promise((resolve, reject) => { const script = document.createElement('script'); script.src = '/vendor/fflate/index.js'; script.onload = resolve; script.onerror = reject; document.head.append(script); });
    const entries = {};
    for (const result of results) entries[result.name] = new Uint8Array(await result.blob.arrayBuffer());
    const archive = window.fflate.zipSync(entries, { level: 1 });
    download({ name: 'converted-subtitles.zip', blob: new Blob([archive], { type: 'application/zip' }) });
  } catch { errorMessage(msg.err_zip); }
}
function clear() { if (busy) return; selected = []; results = []; el.scFile.value = ''; updateNames(); el.scRows.replaceChildren(); el.scOutput.hidden = true; el.scEmpty.hidden = false; el.scHud.hidden = true; updateZip(); }
function sample() { if (busy) return; selected = [new File(['1\n00:00:01,000 --> 00:00:03,000\nHello\n\n2\n00:00:04,000 --> 00:00:06,000\nWorld\n'], 'two-cues.srt', { type: 'text/plain' })]; el.scTarget.value = 'vtt'; updateNames(); convert(); }
el.scFile.addEventListener('change', () => { selected = [...el.scFile.files]; updateNames(); });
el.scConvert.addEventListener('click', convert); el.scSample.addEventListener('click', sample); el.scClear.addEventListener('click', clear); el.scDownloadZip.addEventListener('click', loadZip);
el.scStop.addEventListener('click', () => { stopped = true; cancelWorker?.(); showHud(0, msg.stopped); });
window.subtitleConvertLoadSample = sample;
setTimeout(sample, 50);
