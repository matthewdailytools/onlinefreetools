import { setupReferenceAudio } from './reference-audio.mjs';

const byId = (id) => document.getElementById(id);
const form = byId('mossForm');
const inputs = byId('mossInputs');
const text = byId('mossText');
const textCount = byId('mossTextCount');
const voice = byId('mossVoice');
const generate = byId('mossGenerate');
const download = byId('mossDownload');
const sample = byId('mossSample');
const cancel = byId('mossCancel');
const hud = byId('mossHud');
const status = byId('mossStatus');
const percent = byId('mossPercent');
const bar = byId('mossBar');
const workTrack = byId('mossWorkTrack');
const bytes = byId('mossBytes');
const modelDownload = byId('mossModelDownload');
const modelBar = byId('mossModelBar');
const modelPercent = byId('mossModelPercent');
const modelBytes = byId('mossModelBytes');
const elapsed = byId('mossElapsed');
const result = byId('mossResult');
const resultEmpty = byId('mossResultEmpty');
const audio = byId('mossAudio');
const example = document.querySelector('details#mossExample');
const players = [audio, byId('mossSampleAudio'), byId('mossSampleReferenceAudio'), byId('mossReferenceAudio')].filter(Boolean);
const copy = JSON.parse(byId('mossMessages').textContent);
const chips = Array.from(hud.querySelectorAll('[data-stage]'));
const secondFormat = new Intl.NumberFormat(document.documentElement.lang, { style: 'unit', unit: 'second' });
const mbFormat = new Intl.NumberFormat(document.documentElement.lang, { maximumFractionDigits: 1 });

let worker;
let objectUrl;
let started;
let timer;
let busy = false;
let recording = false;
let runId = 0;
const mode = form.dataset.mode;
const reference = mode === 'clone' ? setupReferenceAudio(copy, clearResult, (value) => {
  recording = value;
  generate.disabled = busy || recording;
  sample.disabled = busy || recording;
}) : null;
if (reference) {
  for (const player of players) {
    player.addEventListener('play', () => {
      for (const other of players) {
        if (other !== player) other.pause();
      }
    });
  }
}

function setBusy(value) {
  busy = value;
  inputs.disabled = value;
  generate.disabled = value || recording;
  generate.setAttribute('aria-busy', String(value));
  sample.disabled = value || recording;
  cancel.hidden = !value;
  hud.classList.toggle('is-on', value);
  if (!value) clearInterval(timer);
}

function showProgress(stage, current = 0, total = 1) {
  hud.hidden = false;
  const downloading = stage === 'download' && modelDownload?.hidden === false;
  percent.hidden = downloading;
  if (workTrack) workTrack.hidden = downloading;
  const index = chips.findIndex((chip) => chip.dataset.stage === stage);
  const ranges = { download: [0, 55], initialize: [55, 70], reference: [70, 75], generate: [75, 96], output: [96, 99] };
  const range = ranges[stage];
  const value = range ? Math.floor(range[0] + (range[1] - range[0]) * current / total) : 100;
  percent.textContent = `${value}%`;
  bar.style.width = `${value}%`;
  bar.setAttribute('aria-valuenow', String(value));
  const message = copy[`step_${stage}`] ?? copy.done;
  if (status.textContent !== message) status.textContent = message;
  bytes.textContent = stage === 'initialize' ? `${current} / ${total}` : '';
  chips.forEach((chip, position) => {
    chip.classList.toggle('is-on', position === index);
    chip.classList.toggle('is-done', index < 0 || position < index);
  });
}

function endWorker() {
  worker?.terminate();
  worker = undefined;
}

function showError(code) {
  setBusy(false);
  hud.hidden = false;
  hud.classList.remove('is-done');
  hud.classList.add('is-fail');
  status.textContent = copy[`error_${code}`] ?? copy.error_synthesis;
}

function showResult(ready) {
  result.hidden = !ready;
  download.disabled = !ready;
  if (resultEmpty) resultEmpty.hidden = ready;
}

function clearResult() {
  if (objectUrl) {
    audio.pause();
    audio.removeAttribute('src');
    audio.load();
    URL.revokeObjectURL(objectUrl);
    objectUrl = undefined;
  }
  showResult(false);
  hud.hidden = true;
  if (modelDownload) modelDownload.hidden = true;
}

function updateTextCount() {
  if (textCount) textCount.textContent = `${text.textLength} / ${text.maxLength}`;
}

export function loadSample({ automatic = false } = {}) {
  if (!automatic) {
    if (reference) {
      text.value = text.defaultValue;
      reference.loadSample();
    } else {
      form.reset();
      clearResult();
    }
  }
  updateTextCount();
  if (example) example.open = true;
}

function updateElapsed() {
  elapsed.textContent = secondFormat.format(Math.floor((performance.now() - started) / 1000));
}

function getWorker() {
  if (worker) return worker;
  const active = new Worker(new URL('./moss-worker.mjs', import.meta.url), { type: 'module' });
  worker = active;
  active.onmessage = ({ data }) => {
    if (worker !== active || !busy) return;
    if (data.type === 'progress') {
      if (data.stage === 'download' && modelDownload) {
        const value = Math.floor(100 * data.current / data.total);
        modelDownload.hidden = false;
        modelBar.value = value;
        modelPercent.textContent = `${value}%`;
        modelBytes.textContent = `${mbFormat.format(data.current / 1_000_000)} / ${mbFormat.format(data.total / 1_000_000)} MB`;
      }
      showProgress(data.stage, data.current, data.total);
    } else if (data.type === 'result') {
      objectUrl = URL.createObjectURL(new Blob([data.wav], { type: 'audio/wav' }));
      audio.src = objectUrl;
      if (example) example.open = false;
      showResult(true);
      setBusy(false);
      hud.classList.add('is-done');
      showProgress('done');
    } else if (data.type === 'error') {
      if (data.code !== 'limit' && data.code !== 'input') endWorker();
      showError(data.code);
    }
  };
  active.onerror = () => {
    if (worker !== active) return;
    endWorker();
    showError('initialize');
  };
  return active;
}

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  if (busy || recording) return;
  clearResult();
  players.forEach((player) => player.pause());
  const script = text.value.trim();
  hud.classList.remove('is-done', 'is-fail');
  showProgress('download');
  elapsed.textContent = '';
  if (!/[\p{L}\p{N}]/u.test(script) || script.length > 240) {
    showError('input');
    text.focus();
    return;
  }
  if (typeof Worker === 'undefined' || !navigator.storage?.getDirectory || typeof WebAssembly === 'undefined') {
    showError('initialize');
    return;
  }
  setBusy(true);
  const job = ++runId;
  started = performance.now();
  updateElapsed();
  timer = setInterval(updateElapsed, 1000);
  await new Promise((resolve) => requestAnimationFrame(() => setTimeout(resolve, 0)));
  if (job !== runId) return;
  try {
    const clip = await reference?.read();
    if (job !== runId) return;
    getWorker().postMessage({
      type: 'generate', mode, text: script, voice: voice?.value,
      reference: clip, authorized: Boolean(clip),
    }, clip ? [clip.pcm.buffer] : []);
  } catch (error) {
    if (job !== runId) return;
    const code = error.message;
    if (!copy[`error_${code}`]) endWorker();
    showError(copy[`error_${code}`] ? code : 'initialize');
  }
});

cancel.addEventListener('click', () => {
  runId += 1;
  endWorker();
  setBusy(false);
  hud.classList.add('is-fail');
  status.textContent = copy.cancelled;
  generate.focus();
});
download.addEventListener('click', () => {
  if (!objectUrl) return;
  const link = document.createElement('a');
  link.href = objectUrl;
  link.download = mode === 'clone' ? 'cloned-voice.wav' : 'voiceover.wav';
  link.click();
});
sample.addEventListener('click', () => loadSample());
text.addEventListener('input', () => {
  updateTextCount();
  clearResult();
});
voice?.addEventListener('change', clearResult);
