// Browser-local subtitle parsing and serialization. No network calls.
export const FORMATS = ['srt', 'vtt', 'ass', 'ssa', 'sbv', 'lrc'];
export const ENCODINGS = ['utf-8', 'gb18030', 'big5', 'shift_jis', 'windows-1251', 'windows-1252'];

const norm = (value) => String(value || '').replace(/\r\n?/g, '\n').replace(/^\uFEFF/, '');

function parseClock(raw, kind = 'normal') {
  const value = String(raw).trim();
  let match;
  if (kind === 'lrc') match = value.match(/^(\d{1,3}):(\d{2})(?:[.,](\d{1,3}))?$/);
  else if (kind === 'ass') match = value.match(/^(\d{1,3}):(\d{2}):(\d{2})[.](\d{1,2})$/);
  else match = value.match(/^(?:(\d{1,3}):)?(\d{2}):(\d{2})[.,](\d{1,3})$/);
  if (!match) throw new Error('Invalid timestamp: ' + value);
  let hour, minute, second, millis;
  if (kind === 'lrc') { hour = 0; minute = +match[1]; second = +match[2]; millis = +(match[3] || '0').padEnd(3, '0'); }
  else if (kind === 'ass') { hour = +match[1]; minute = +match[2]; second = +match[3]; millis = +match[4].padEnd(2, '0') * 10; }
  else { hour = +(match[1] || 0); minute = +match[2]; second = +match[3]; millis = +match[4].padEnd(3, '0'); }
  if (minute > 59 && kind !== 'lrc' || second > 59 || millis > 999) throw new Error('Invalid timestamp: ' + value);
  return ((hour * 60 + minute) * 60 + second) * 1000 + millis;
}

function stamp(ms, kind) {
  const total = Math.max(0, Math.round(ms));
  const hh = Math.floor(total / 3600000);
  const mm = Math.floor(total / 60000) % 60;
  const ss = Math.floor(total / 1000) % 60;
  const pad = (n, width = 2) => String(n).padStart(width, '0');
  if (kind === 'lrc') return '[' + pad(Math.floor(total / 60000)) + ':' + pad(ss) + '.' + pad(Math.floor(total % 1000 / 10)) + ']';
  if (kind === 'ass' || kind === 'ssa') return `${hh}:${pad(mm)}:${pad(ss)}.${pad(Math.round(total % 1000 / 10))}`;
  if (kind === 'sbv') return `${hh}:${pad(mm)}:${pad(ss)}.${pad(total % 1000, 3)}`;
  return `${pad(hh)}:${pad(mm)}:${pad(ss)}${kind === 'srt' ? ',' : '.'}${pad(total % 1000, 3)}`;
}

function ensureCue(cue, index) {
  if (!Number.isFinite(cue.start) || !Number.isFinite(cue.end) || cue.start < 0 || cue.end <= cue.start) throw new Error('Invalid cue time at item ' + (index + 1));
  if (!String(cue.text).trim()) throw new Error('Empty caption at item ' + (index + 1));
  return cue;
}

function parseSrtVtt(value, format) {
  const blocks = norm(value).split(/\n[\t ]*\n+/);
  const cues = []; const losses = [];
  let headerSeen = format === 'srt';
  for (const block of blocks) {
    const lines = block.split('\n').map((v) => v.trimEnd());
    if (!headerSeen && /^WEBVTT(?:[ \t].*)?$/.test(lines[0] || '')) { headerSeen = true; continue; }
    if (format === 'vtt' && /^(NOTE|STYLE|REGION)(?:\s|$)/.test(lines[0] || '')) { losses.push(lines[0].split(/\s/)[0]); continue; }
    if (!lines.some((line) => line.includes('-->'))) {
      if (lines.join('').trim()) throw new Error('Unrecognized caption block near item ' + (cues.length + 1));
      continue;
    }
    const index = lines.findIndex((line) => line.includes('-->'));
    if (index > 1) throw new Error('Invalid cue identifier near item ' + (cues.length + 1));
    const timing = lines[index].match(/^\s*(\S+)\s*-->\s*(\S+)(?:\s+(.*))?\s*$/);
    if (!timing) throw new Error('Invalid cue timing near item ' + (cues.length + 1));
    const cue = { start: parseClock(timing[1]), end: parseClock(timing[2]), text: lines.slice(index + 1).join('\n').trim(), settings: timing[3] || '', identifier: index ? lines[0] : '' };
    if (cue.settings) losses.push('cue settings');
    if (format === 'vtt' && cue.identifier) losses.push('cue identifiers');
    if (/<(?:v|c|ruby|rt|lang)\b|<\d\d:\d\d/.test(cue.text)) losses.push('VTT voice/class/ruby/timestamp markup');
    cues.push(ensureCue(cue, cues.length));
  }
  if (!headerSeen) throw new Error('Missing WEBVTT header');
  if (!cues.length) throw new Error('No valid caption cues');
  return { cues, losses };
}

function parseAss(value, format) {
  const lines = norm(value).split('\n');
  if (!lines.some((line) => /^\[Script Info\]/i.test(line))) throw new Error('Missing ASS/SSA Script Info');
  let inEvents = false; let columns = null; const cues = []; const losses = [];
  for (const line of lines) {
    if (/^\[/.test(line)) { inEvents = /^\[Events\]/i.test(line); if (/^\[V4\+? Styles\]/i.test(line)) losses.push('style definitions'); continue; }
    if (!inEvents) continue;
    if (/^Format\s*:/i.test(line)) { columns = line.replace(/^Format\s*:/i, '').split(',').map((x) => x.trim().toLowerCase()); continue; }
    if (!/^Dialogue\s*:/i.test(line)) continue;
    if (!columns) throw new Error('ASS/SSA Events Format is missing');
    const parts = line.replace(/^Dialogue\s*:/i, '').split(',');
    if (parts.length < columns.length) throw new Error('Incomplete Dialogue item ' + (cues.length + 1));
    const values = parts.slice(0, columns.length - 1).concat(parts.slice(columns.length - 1).join(','));
    const get = (key) => values[columns.indexOf(key)] || '';
    const raw = get('text');
    if (/\\(?:k|K|kf|ko)\d+/.test(raw)) losses.push('karaoke timing');
    if (/\\p[1-9]/.test(raw)) { losses.push('vector drawing'); continue; }
    if (/\{\\/.test(raw)) losses.push('override tags / positioning');
    const text = raw.replace(/\{[^}]*\}/g, '').replace(/\\[Nn]/g, '\n').replace(/\\h/g, ' ').trim();
    cues.push(ensureCue({ start: parseClock(get('start'), 'ass'), end: parseClock(get('end'), 'ass'), text }, cues.length));
  }
  if (!cues.length) throw new Error('No valid dialogue cues');
  return { cues, losses };
}

function parseSbv(value) {
  const cues = [];
  for (const block of norm(value).split(/\n[\t ]*\n+/)) {
    if (!block.trim()) continue;
    const lines = block.split('\n');
    const m = lines.shift().match(/^\s*([^,\s]+)\s*,\s*([^,\s]+)\s*$/);
    if (!m) throw new Error('Invalid SBV timing at item ' + (cues.length + 1));
    cues.push(ensureCue({ start: parseClock(m[1]), end: parseClock(m[2]), text: lines.join('\n').trim() }, cues.length));
  }
  if (!cues.length) throw new Error('No valid SBV cues');
  return { cues, losses: [] };
}

function parseLrc(value) {
  const cues = []; const losses = [];
  for (const line of norm(value).split('\n')) {
    const stamps = [...line.matchAll(/\[(\d{1,3}:\d{2}(?:[.,]\d{1,3})?)\]/g)];
    if (!stamps.length) continue;
    const text = line.replace(/\[(?:\d{1,3}:\d{2}(?:[.,]\d{1,3})?)\]/g, '').trim();
    if (!text) continue;
    if (/<\d{1,3}:\d{2}[.,]\d{1,3}>/.test(text)) losses.push('inline word timing');
    for (const match of stamps) cues.push({ start: parseClock(match[1], 'lrc'), end: 0, text: text.replace(/<\d{1,3}:\d{2}[.,]\d{1,3}>/g, '') });
  }
  cues.sort((a, b) => a.start - b.start);
  for (let i = 0; i < cues.length; i++) cues[i].end = Math.max(cues[i].start + 1, i + 1 < cues.length ? cues[i + 1].start : cues[i].start + 2000);
  if (!cues.length) throw new Error('No timed lyric lines');
  return { cues: cues.map(ensureCue), losses };
}

export function parseSubtitle(value, format) {
  if (!FORMATS.includes(format)) throw new Error('Unsupported subtitle format');
  if (format === 'srt' || format === 'vtt') return parseSrtVtt(value, format);
  if (format === 'ass' || format === 'ssa') return parseAss(value, format);
  if (format === 'sbv') return parseSbv(value);
  return parseLrc(value);
}

export function serializeSubtitle(cues, format) {
  if (!FORMATS.includes(format)) throw new Error('Unsupported target format');
  const rows = cues.map((cue, i) => ensureCue(cue, i));
  if (format === 'srt') return rows.map((c, i) => `${i + 1}\n${stamp(c.start, format)} --> ${stamp(c.end, format)}\n${c.text}`).join('\n\n') + '\n';
  if (format === 'vtt') return 'WEBVTT\n\n' + rows.map((c) => `${stamp(c.start, format)} --> ${stamp(c.end, format)}\n${c.text}`).join('\n\n') + '\n';
  if (format === 'sbv') return rows.map((c) => `${stamp(c.start, format)},${stamp(c.end, format)}\n${c.text}`).join('\n\n') + '\n';
  if (format === 'lrc') return rows.map((c) => stamp(c.start, format) + c.text.replace(/\n/g, ' ')).join('\n') + '\n';
  const style = format === 'ass' ? '[V4+ Styles]\nFormat: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding\nStyle: Default,Arial,20,&H00FFFFFF,&H000000FF,&H00000000,&H00000000,0,0,0,0,100,100,0,0,1,2,0,2,10,10,10,1\n\n' : '[V4 Styles]\nFormat: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, TertiaryColour, BackColour, Bold, Italic, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, AlphaLevel, Encoding\nStyle: Default,Arial,20,&H00FFFFFF,&H000000FF,&H00000000,&H00000000,0,0,1,2,0,2,10,10,10,0,1\n\n';
  return `[Script Info]\nScriptType: ${format === 'ass' ? 'v4.00+' : 'v4.00'}\n\n${style}[Events]\nFormat: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text\n` + rows.map((c) => `Dialogue: 0,${stamp(c.start, format)},${stamp(c.end, format)},Default,,0,0,0,,${c.text.replace(/\n/g, '\\N')}`).join('\n') + '\n';
}

export function detectFormat(name, text) {
  const ext = String(name || '').toLowerCase().match(/\.([^.]+)$/)?.[1];
  if (FORMATS.includes(ext)) return ext;
  const start = norm(text).slice(0, 500);
  if (/^WEBVTT(?:\s|$)/.test(start)) return 'vtt';
  if (/\[Script Info\]/i.test(start)) return /ScriptType:\s*v4\.00\+/i.test(start) ? 'ass' : 'ssa';
  if (/^\[\d{1,3}:\d{2}/m.test(start)) return 'lrc';
  if (/^\d+:\d\d:\d\d\.\d{3}\s*,\s*\d+:\d\d:\d\d\.\d{3}/m.test(start)) return 'sbv';
  return 'srt';
}

function scoreDecode(value) {
  let score = (value.match(/\uFFFD/g) || []).length * -100;
  score -= (value.match(/[\x00-\x08\x0E-\x1F]/g) || []).length * 20;
  score += (value.match(/[\u4e00-\u9fff\u3040-\u30ff\u0400-\u04ff\u0600-\u06ff]/g) || []).length * 2;
  score -= (value.match(/[ÃÂÐÑ�]/g) || []).length * 4;
  return score;
}

export function decodeSubtitle(bytes, requested = 'auto') {
  const array = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes);
  if (array[0] === 0xef && array[1] === 0xbb && array[2] === 0xbf) return { text: new TextDecoder('utf-8', { fatal: true }).decode(array.subarray(3)), encoding: 'utf-8 BOM' };
  if (array[0] === 0xff && array[1] === 0xfe) return { text: new TextDecoder('utf-16le', { fatal: true }).decode(array.subarray(2)), encoding: 'utf-16le BOM' };
  if (array[0] === 0xfe && array[1] === 0xff) return { text: new TextDecoder('utf-16be', { fatal: true }).decode(array.subarray(2)), encoding: 'utf-16be BOM' };
  if (requested !== 'auto') return { text: new TextDecoder(requested, { fatal: true }).decode(array), encoding: requested };
  try { return { text: new TextDecoder('utf-8', { fatal: true }).decode(array), encoding: 'utf-8' }; } catch { /* legacy candidate scoring below */ }
  let best = null;
  for (const encoding of ENCODINGS.slice(1)) {
    try { const text = new TextDecoder(encoding, { fatal: true }).decode(array); const score = scoreDecode(text.slice(0, 150000)); if (!best || score > best.score) best = { text, encoding, score }; } catch { /* try next */ }
  }
  if (!best) throw new Error('Cannot decode subtitle bytes');
  return { text: best.text, encoding: best.encoding + ' (estimated)' };
}

export function convertSubtitle(text, sourceFormat, targetFormat, bom = false) {
  const parsed = parseSubtitle(text, sourceFormat);
  const extra = [];
  if (sourceFormat === 'lrc' && targetFormat !== 'lrc') extra.push('LRC end times estimated from next line (last +2 s)');
  if (targetFormat === 'lrc' && sourceFormat !== 'lrc') extra.push('cue end times and line breaks');
  if (sourceFormat === 'vtt' && targetFormat !== 'vtt') extra.push('VTT layout/headers when present');
  if ((sourceFormat === 'ass' || sourceFormat === 'ssa') && !['ass', 'ssa'].includes(targetFormat)) extra.push('ASS/SSA styles and positioning');
  const cues = sourceFormat === 'vtt' && targetFormat !== 'vtt'
    ? parsed.cues.map((cue) => ({ ...cue, text: cue.text.replace(/<\d{2}:\d{2}(?::\d{2})?\.\d{3}>/g, '').replace(/<\/?(?:v|c|lang|ruby|rt)(?:[ .][^>]*)?>/gi, '') }))
    : parsed.cues;
  const output = serializeSubtitle(cues, targetFormat);
  const rechecked = parseSubtitle(output, targetFormat);
  if (rechecked.cues.length !== parsed.cues.length) throw new Error('Output cue count mismatch');
  return { output: (bom ? '\uFEFF' : '') + output, cues, losses: [...new Set([...parsed.losses, ...extra])], count: cues.length, first: cues[0].start, last: cues.at(-1).end };
}
