import { convertMkvToMp4, inspectVideoFile, loadMediabunny } from './mkv-to-mp4-loader.js';
import { parseSubtitle } from '../../js/subtitle-convert-engine.mjs';

const fail = (code) => Object.assign(new Error(code), { code });

function wrapText(ctx, text, maxWidth) {
  const lines = [];
  for (const paragraph of text.split('\n')) {
    let line = '';
    for (const character of paragraph) {
      if (line && ctx.measureText(line + character).width > maxWidth) {
        lines.push(line.trim());
        line = character;
      } else line += character;
    }
    if (line.trim()) lines.push(line.trim());
  }
  return lines;
}

function drawCues(ctx, active, width, height, settings) {
  if (!active.length) return;
  const text = active.slice(0, 2).map((cue) => cue.text.replace(/<[^>]*>/g, '').replace(/\{[^}]*\}/g, '')).join('\n');
  const base = Math.max(16, Math.round(height * settings.fontPercent / 100));
  const safe = Math.round(height * settings.safePercent / 100);
  const maxWidth = width * 0.86;
  let fontSize = base;
  let lines;
  do {
    ctx.font = `700 ${fontSize}px system-ui, sans-serif`;
    lines = wrapText(ctx, text, maxWidth);
    if (lines.length <= 4 || fontSize <= 16) break;
    fontSize = Math.max(16, fontSize - 2);
  } while (true);
  if (lines.length > 5) lines = lines.slice(0, 5);
  const lineHeight = fontSize * 1.27;
  const blockHeight = lines.length * lineHeight;
  let y = height - safe - blockHeight + lineHeight * 0.8;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.lineJoin = 'round';
  ctx.lineWidth = Math.max(3, fontSize * 0.16);
  ctx.strokeStyle = '#111';
  ctx.fillStyle = settings.color;
  for (const line of lines) {
    ctx.strokeText(line, width / 2, y);
    ctx.fillText(line, width / 2, y);
    y += lineHeight;
  }
}

/** Burn SRT or VTT cues into every decoded video frame and export a verified MP4. */
export async function burnSubtitles(videoFile, subtitleText, format, options = {}) {
  if (!videoFile?.size || !/^video\//.test(videoFile.type || '') && !/\.(mp4|mov|webm|mkv|m4v)$/i.test(videoFile.name || '')) throw fail('err_file');
  if (!['srt', 'vtt'].includes(format)) throw fail('err_subtitle');
  let parsed;
  try { parsed = parseSubtitle(subtitleText, format); }
  catch { throw fail('err_subtitle'); }
  const cues = parsed.cues.slice().sort((a, b) => a.start - b.start);
  if (cues.length > 100000 || subtitleText.length > 10 * 1024 * 1024) throw fail('err_limit');
  const settings = {
    fontPercent: Number.isFinite(+options.fontPercent) ? Math.min(12, Math.max(3, +options.fontPercent)) : 5,
    safePercent: Number.isFinite(+options.safePercent) ? Math.min(25, Math.max(3, +options.safePercent)) : 8,
    color: /^#[0-9a-f]{6}$/i.test(options.color || '') ? options.color : '#ffffff',
  };
  const source = await inspectVideoFile(videoFile);
  if (!source.canDecodeVideo || !source.canDecodeAudio) throw fail('err_codec');
  if (!(source.width > 0) || !(source.height > 0)) throw fail('err_format');
  const mb = await loadMediabunny();
  if (!(await mb.canEncodeVideo('avc', { width: source.width, height: source.height }))) throw fail('err_encoder');
  let canvas;
  let ctx;
  let frames = 0;
  let nextCue = 0;
  let active = [];
  let lastMs = -Infinity;
  const result = await convertMkvToMp4(videoFile, {
    videoCodec: 'avc',
    preferOpfs: true,
    requireOpfs: videoFile.size > 80 * 1024 * 1024,
    keepOpfsOutput: true,
    quality: options.quality || 'high',
    signal: options.signal,
    onProgress: options.onProgress,
    videoProcess(sample) {
      if (!canvas) {
        canvas = new OffscreenCanvas(sample.displayWidth, sample.displayHeight);
        ctx = canvas.getContext('2d', { alpha: false });
        if (!ctx) throw fail('err_encoder');
      }
      sample.draw(ctx, 0, 0, canvas.width, canvas.height);
      const ms = sample.timestamp * 1000;
      if (ms < lastMs) { nextCue = 0; active = []; }
      while (nextCue < cues.length && cues[nextCue].start <= ms) active.push(cues[nextCue++]);
      active = active.filter((cue) => ms < cue.end);
      drawCues(ctx, active, canvas.width, canvas.height, settings);
      lastMs = ms;
      frames++;
      return canvas;
    },
  });
  if (!frames) { await result.cleanup?.(); throw fail('err_codec'); }
  const info = await inspectVideoFile(result.blob);
  if (info.videoCodec !== 'avc' || source.audioCodec !== 'none' && info.audioCodec !== 'aac') {
    await result.cleanup?.();
    throw fail('err_output');
  }
  return { ...result, cues: cues.length, frames, info, source };
}
