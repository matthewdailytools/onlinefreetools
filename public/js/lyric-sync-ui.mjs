import { parseLines, formatStamp, buildLrc } from './lyric-sync-core.mjs';
const $ = (id) => document.getElementById(id);
const m = window.lyricSyncMessages || {};
let lines = [];
let times = [];
let current = 0;
let objectUrl = '';
let fileName = 'synced-lyrics';
const audio = $('lsAudio');
const status = (message, error = false) => { $('lsStatus').textContent = message; $('lsStatus').className = error ? 'alert alert-danger mb-2' : 'alert alert-info mb-2'; };
const escapeName = (name) => name.replace(/\.[^.]+$/, '').replace(/[^\p{L}\p{N}_.-]+/gu, '-').slice(0, 80) || 'synced-lyrics';
const offset = () => Math.round(Number($('lsOffset').value) || 0);
function preview() {
  try {
    const result = buildLrc(lines, times, offset());
    $('lsPreview').value = result;
    $('lsDownload').disabled = false;
    return result;
  } catch (error) {
    $('lsPreview').value = '';
    $('lsDownload').disabled = true;
    return null;
  }
}
function draw() {
  $('lsCurrent').textContent = lines.length && current < lines.length ? `${current + 1}/${lines.length} · ${lines[current]}` : m.status_done;
  $('lsRows').replaceChildren();
  for (let i = 0; i < lines.length; i++) {
    const row = document.createElement('div'); row.className = 'ls-row';
    const line = document.createElement('span'); line.textContent = `${i + 1}. ${lines[i]}`;
    const stamp = document.createElement('strong'); stamp.textContent = times[i] == null ? '—' : formatStamp(times[i]);
    const early = document.createElement('button'); early.type = 'button'; early.className = 'btn btn-sm btn-outline-secondary'; early.textContent = '−0.1'; early.setAttribute('aria-label', `${m.earlier} ${i + 1}`); early.disabled = times[i] == null;
    const late = document.createElement('button'); late.type = 'button'; late.className = 'btn btn-sm btn-outline-secondary'; late.textContent = '+0.1'; late.setAttribute('aria-label', `${m.later} ${i + 1}`); late.disabled = times[i] == null;
    const retap = document.createElement('button'); retap.type = 'button'; retap.className = 'btn btn-sm btn-outline-primary ls-retap'; retap.textContent = m.retap; retap.setAttribute('aria-label', `${m.retap} ${i + 1}`);
    early.addEventListener('click', () => { times[i] = Math.max(0, times[i] - 100); draw(); });
    late.addEventListener('click', () => { times[i] += 100; draw(); });
    retap.addEventListener('click', () => { if (!audio.src) return status(m.status_audio, true); times[i] = Math.round(audio.currentTime * 1000); current = Math.max(current, i + 1); draw(); });
    row.append(line, stamp, early, late, retap); $('lsRows').append(row);
  }
  preview();
}
function prepare() {
  const next = parseLines($('lsLyrics').value);
  if (!next.length) return status(m.status_empty, true);
  if (next.length > 1000) return status(m.status_limit, true);
  lines = next; times = Array(lines.length).fill(null); current = 0;
  status(m.status_ready); draw();
}
function tap() {
  if (!audio.src) return status(m.status_audio, true);
  if (!lines.length) return status(m.status_empty, true);
  if (current >= lines.length) return status(m.status_done);
  times[current] = Math.round(audio.currentTime * 1000);
  current++;
  draw();
  status(current === lines.length ? m.status_done : m.status_next.replace('{number}', String(current + 1)));
}
function setAudioUrl(url, name) {
  if (objectUrl) URL.revokeObjectURL(objectUrl);
  objectUrl = url.startsWith('blob:') ? url : '';
  audio.src = url; audio.load(); fileName = escapeName(name); $('lsName').textContent = name;
}
function loadSample() {
  setAudioUrl('/samples/lyric-tap-sample.wav', 'lyric-tap-sample.wav');
  $('lsLyrics').value = m.sample_lines;
  lines = parseLines(m.sample_lines);
  times = [0, 1000, 2000, 3000].slice(0, lines.length);
  current = lines.length;
  $('lsOffset').value = '0'; $('lsSpeed').value = '1'; audio.playbackRate = 1;
  status(m.status_ready); draw();
}
window.lyricSyncLoadSample = loadSample;
$('lsFile').addEventListener('change', () => { const file = $('lsFile').files?.[0]; if (!file) return; if (!file.type.startsWith('audio/') && !/\.(mp3|m4a|wav|ogg|flac)$/i.test(file.name)) return status(m.status_audio, true); setAudioUrl(URL.createObjectURL(file), file.name); });
audio.addEventListener('error', () => { if (audio.src) status(m.status_play, true); });
$('lsPrepare').addEventListener('click', prepare);
$('lsTap').addEventListener('click', tap);
$('lsOffset').addEventListener('input', () => { preview(); });
$('lsSpeed').addEventListener('change', () => { audio.playbackRate = Number($('lsSpeed').value); });
$('lsDownload').addEventListener('click', () => { try { const data = buildLrc(lines, times, offset()); const url = URL.createObjectURL(new Blob(['\ufeff', data], { type: 'text/plain;charset=utf-8' })); const link = document.createElement('a'); link.href = url; link.download = `${fileName}.lrc`; link.click(); setTimeout(() => URL.revokeObjectURL(url), 15000); status(m.status_done); } catch (error) { status(m['status_' + error.message] || m.status_missing, true); } });
$('lsSample').addEventListener('click', loadSample);
$('lsClear').addEventListener('click', () => { if (objectUrl) URL.revokeObjectURL(objectUrl); objectUrl = ''; audio.removeAttribute('src'); audio.load(); $('lsFile').value = ''; $('lsName').textContent = ''; $('lsLyrics').value = ''; $('lsPreview').value = ''; $('lsRows').replaceChildren(); $('lsCurrent').textContent = ''; $('lsDownload').disabled = true; lines = []; times = []; current = 0; $('lsStatus').textContent = ''; });
document.addEventListener('keydown', (event) => { if (event.code !== 'Space' || event.repeat || event.altKey || event.ctrlKey || event.metaKey || ['INPUT','TEXTAREA','BUTTON','SELECT'].includes(document.activeElement?.tagName)) return; event.preventDefault(); tap(); });
window.addEventListener('pagehide', () => { if (objectUrl) URL.revokeObjectURL(objectUrl); });
loadSample();
