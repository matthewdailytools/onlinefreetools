import { loadMediabunny, openOpfsStreamTarget, inspectVideoFile } from './mkv-to-mp4-loader.js';

const MAX_TOTAL_BYTES = 500 * 1024 * 1024;
const MEMORY_LIMIT = 80 * 1024 * 1024;
const CACHE_BYTES = 32 * 1024 * 1024;
const AUDIO_RATE = 48000;
const AUDIO_CHANNELS = 2;

const fail = (code) => Object.assign(new Error(code), { code });

function audioAtRate(mb, sample, timestamp) {
  const source = sample.toAudioBuffer();
  const count = Math.max(1, Math.round(source.length * AUDIO_RATE / source.sampleRate));
  const data = new Float32Array(count * AUDIO_CHANNELS);
  const left = source.getChannelData(0);
  const right = source.getChannelData(Math.min(1, source.numberOfChannels - 1));
  for (let i = 0; i < count; i++) {
    const at = Math.min(source.length - 1, i * source.sampleRate / AUDIO_RATE);
    const lo = Math.floor(at);
    const hi = Math.min(lo + 1, source.length - 1);
    const f = at - lo;
    data[i * 2] = left[lo] * (1 - f) + left[hi] * f;
    data[i * 2 + 1] = right[lo] * (1 - f) + right[hi] * f;
  }
  return new mb.AudioSample({ data, format: 'f32', numberOfChannels: AUDIO_CHANNELS, sampleRate: AUDIO_RATE, timestamp });
}

/** Merge ordered clips into one decoded/re-encoded H.264/AAC MP4. Each source is read in bounded chunks. */
export async function mergeVideoClips(files, { signal, onProgress, quality = 'medium' } = {}) {
  if (!Array.isArray(files) || files.length < 2 || files.length > 30) throw fail('err_count');
  const totalBytes = files.reduce((sum, file) => sum + file.size, 0);
  if (!totalBytes || totalBytes > MAX_TOTAL_BYTES) throw fail('err_limit');
  const mb = await loadMediabunny();
  const opfs = typeof navigator.storage?.getDirectory === 'function';
  if (!opfs && totalBytes > MEMORY_LIMIT) throw fail('err_limit');
  const inputs = [];
  let sink = null;
  let output = null;
  let complete = false;
  try {
    const tracks = [];
    for (const file of files) {
      if (signal?.aborted) throw fail('err_aborted');
      const input = new mb.Input({ source: new mb.BlobSource(file, { maxCacheSize: CACHE_BYTES }), formats: mb.ALL_FORMATS });
      inputs.push(input);
      const video = await input.getPrimaryVideoTrack();
      if (!video || !(await video.canDecode())) throw fail('err_codec');
      const audio = await input.getPrimaryAudioTrack();
      if (audio && !(await audio.canDecode())) throw fail('err_codec');
      const duration = await video.getDurationFromMetadata();
      const width = await video.getDisplayWidth();
      const height = await video.getDisplayHeight();
      if (!(duration > 0) || !(width > 0) || !(height > 0)) throw fail('err_format');
      tracks.push({ video, audio, duration, width, height, videoCodec: await video.getCodec(), audioCodec: audio ? await audio.getCodec() : 'none' });
    }
    const width = Math.max(2, Math.round(tracks[0].width / 2) * 2);
    const height = Math.max(2, Math.round(tracks[0].height / 2) * 2);
    if (!(await mb.canEncodeVideo('avc', { width, height }))) throw fail('err_encoder');
    if (tracks.some((track) => track.audio) && !(await mb.canEncodeAudio('aac'))) throw fail('err_encoder');
    const useOpfs = opfs;
    sink = useOpfs ? await openOpfsStreamTarget(mb, 'merged-video-clips') : null;
    const target = sink?.target || new mb.BufferTarget();
    output = new mb.Output({ format: new mb.Mp4OutputFormat({ fastStart: sink ? false : 'in-memory' }), target });
    const q = quality === 'high' ? mb.QUALITY_HIGH : quality === 'low' ? mb.QUALITY_LOW : mb.QUALITY_MEDIUM;
    const videoSource = new mb.VideoSampleSource({ codec: 'avc', quality: q });
    const audioSource = tracks.some((track) => track.audio) ? new mb.AudioSampleSource({ codec: 'aac', quality: q }) : null;
    output.addVideoTrack(videoSource);
    if (audioSource) output.addAudioTrack(audioSource);
    await output.start();
    const canvas = new OffscreenCanvas(width, height);
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) throw fail('err_encoder');
    const totalDuration = tracks.reduce((sum, track) => sum + track.duration, 0);
    let offset = 0;
    for (let index = 0; index < tracks.length; index++) {
      if (signal?.aborted) throw fail('err_aborted');
      const track = tracks[index];
      const videoSink = new mb.VideoSampleSink(track.video);
      const audioSink = track.audio && audioSource ? new mb.AudioSampleSink(track.audio) : null;
      let frames = 0;
      let videoEnd = 0;
      let audioEnd = 0;
      const videoJob = (async () => {
        let start = null;
        for await (const sample of videoSink.samples()) {
          if (signal?.aborted) { sample.close(); throw fail('err_aborted'); }
          if (start === null) start = sample.timestamp;
          const local = Math.max(0, sample.timestamp - start);
          const fit = Math.min(width / sample.displayWidth, height / sample.displayHeight);
          const drawWidth = sample.displayWidth * fit;
          const drawHeight = sample.displayHeight * fit;
          ctx.fillStyle = '#000';
          ctx.fillRect(0, 0, width, height);
          sample.draw(ctx, (width - drawWidth) / 2, (height - drawHeight) / 2, drawWidth, drawHeight);
          const frame = new mb.VideoSample(canvas, { timestamp: offset + local, duration: sample.duration });
          try { await videoSource.add(frame, frames === 0 ? { keyFrame: true } : undefined); }
          finally { frame.close(); sample.close(); }
          frames++;
          videoEnd = Math.max(videoEnd, local + sample.duration);
          onProgress?.(Math.min(0.98, (offset + local) / totalDuration), index, files.length);
        }
      })();
      const audioJob = (async () => {
        if (!audioSink) return;
        let start = null;
        for await (const sample of audioSink.samples()) {
          if (signal?.aborted) { sample.close(); throw fail('err_aborted'); }
          if (start === null) start = sample.timestamp;
          const local = Math.max(0, sample.timestamp - start);
          const normalized = audioAtRate(mb, sample, offset + local);
          try { await audioSource.add(normalized); }
          finally { normalized.close(); sample.close(); }
          audioEnd = Math.max(audioEnd, local + sample.duration);
        }
      })();
      await Promise.all([videoJob, audioJob]);
      if (!frames) throw fail('err_codec');
      offset += Math.max(track.duration, videoEnd, audioEnd);
    }
    await output.finalize();
    const blob = sink ? await sink.finalize() : new Blob([target.buffer], { type: 'video/mp4' });
    const info = await inspectVideoFile(blob);
    if (info.videoCodec !== 'avc' || (audioSource ? info.audioCodec !== 'aac' : info.audioCodec !== 'none') ||
        Math.abs(info.duration - offset) > Math.max(0.6, offset * 0.05)) throw fail('err_output');
    complete = true;
    return { blob, duration: info.duration, width, height, info, clips: tracks.map(({ duration, width, height, videoCodec, audioCodec }) => ({ duration, width, height, videoCodec, audioCodec })), via: sink ? 'opfs' : 'memory', cleanup: sink?.cleanup || (async () => {}) };
  } catch (error) {
    await output?.cancel().catch(() => {});
    throw error;
  } finally {
    for (const input of inputs) input.dispose();
    if (!complete) await sink?.cleanup().catch(() => {});
  }
}
