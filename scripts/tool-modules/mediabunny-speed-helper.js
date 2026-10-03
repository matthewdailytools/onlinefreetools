/* Bounded pitch-preserving WSOLA for the video-speed option. Adapted from the existing audio tempo page. */
function hannWindow(n){
      const win = new Float32Array(n);
      if (n < 2){ win[0] = 1; return win; }
      for (let i = 0; i < n; i++) win[i] = 0.5 - 0.5 * Math.cos((2 * Math.PI * i) / (n - 1));
      return win;
    }
    /**
     * 在搜索半径内找与参考片段互相关最大的输入起点（WSOLA 对齐）。
     * @param {Float32Array} input 单声道输入
     * @param {number} expected 期望起点
     * @param {Float32Array} ref 参考重叠区样本
     * @param {number} search 搜索半径（样本）
     * @param {number} overlap 重叠长度
     */
    function bestOffset(input, expected, ref, search, overlap){
      const n = input.length;
      let bestPos = expected;
      let bestScore = -Infinity;
      const lo = Math.max(0, expected - search);
      const hi = Math.min(n - overlap, expected + search);
      if (hi < lo) return Math.max(0, Math.min(n - overlap, expected));
      for (let pos = lo; pos <= hi; pos++){
        let num = 0;
        let denA = 0;
        let denB = 0;
        for (let i = 0; i < overlap; i++){
          const a = input[pos + i];
          const b = ref[i];
          num += a * b;
          denA += a * a;
          denB += b * b;
        }
        const score = num / (Math.sqrt(denA * denB) + 1e-12);
        if (score > bestScore){
          bestScore = score;
          bestPos = pos;
        }
      }
      return bestPos;
    }
    /**
     * 对单声道做 WSOLA 时间拉伸：speed>1 更快更短，speed<1 更慢更长；音高大致保留。
     * @param {Float32Array} input 输入样本
     * @param {number} rate 采样率
     * @param {number} speed 速度倍率
     * @param {(p:number)=>void} [onProgress] 可选进度回调 0–1
     */
    async function wsolaChannel(input, rate, speed, onProgress){
      if (!(input.length > 0)) return new Float32Array(0);
      if (Math.abs(speed - 1) < 0.002){
        const copy = new Float32Array(input.length);
        copy.set(input);
        return copy;
      }
      /** 分析/合成帧长约 40 ms。 */
      let frame = Math.max(64, Math.round(rate * 0.04));
      if (frame % 2) frame += 1;
      /** 合成 hop：约 50% 重叠。 */
      const synthHop = Math.max(1, Math.floor(frame / 2));
      /** 分析 hop：按速度缩放。 */
      const analysisHop = Math.max(1, Math.round(synthHop * speed));
      /** ±8 ms 搜索窗。 */
      const search = Math.max(0, Math.round(rate * 0.008));
      /** 重叠比较长度。 */
      const overlap = Math.min(frame, synthHop);
      const win = hannWindow(frame);
      /** 输出长度约 input/speed，并预留一帧。 */
      const outLen = Math.max(frame, Math.ceil(input.length / speed) + frame);
      const output = new Float32Array(outLen);
      const norm = new Float32Array(outLen);
      /** 上一帧在输入中的起点。 */
      let inPos = 0;
      /** 输出写入位置。 */
      let outPos = 0;
      /** 参考重叠缓冲。 */
      const ref = new Float32Array(overlap);
      let framesDone = 0;
      const approxFrames = Math.max(1, Math.ceil((input.length - frame) / analysisHop));
      while (inPos + frame < input.length && outPos + frame < outLen){
        let take = inPos;
        if (framesDone > 0){
          const expected = inPos;
          for (let i = 0; i < overlap; i++){
            const oi = outPos - overlap + i;
            ref[i] = oi >= 0 ? output[oi] / (norm[oi] + 1e-12) : 0;
          }
          take = bestOffset(input, expected, ref, search, overlap);
        }
        for (let i = 0; i < frame; i++){
          const s = Number.isFinite(input[take + i]) ? input[take + i] : 0;
          const w = win[i];
          output[outPos + i] += s * w;
          norm[outPos + i] += w;
        }
        inPos = take + analysisHop;
        outPos += synthHop;
        framesDone++;
        if (framesDone % 24 === 0){
          if (onProgress) onProgress(Math.min(0.98, framesDone / approxFrames));
          await new Promise(resolve => setTimeout(resolve, 0));
        }
      }
      /** 归一化 OLA 权重。 */
      const trim = Math.min(outPos + (frame - synthHop), outLen);
      const result = new Float32Array(Math.max(1, trim));
      for (let i = 0; i < trim; i++){
        result[i] = norm[i] > 1e-8 ? output[i] / norm[i] : 0;
      }
      return result;
    }
/** Decode at most one minute of audio and stretch it before the video conversion. */
async function preparePitchPreservedAudio(mb, input, speed, signal, onProgress) {
  const track = await input.getPrimaryAudioTrack();
  if (!track) return null;
  const [duration, sampleRate, numberOfChannels] = await Promise.all([
    track.getDurationFromMetadata(), track.getSampleRate(), track.getNumberOfChannels(),
  ]);
  if (!(duration > 0) || duration > 60 || ![1, 2].includes(numberOfChannels) || !(sampleRate >= 8000 && sampleRate <= 96000)) {
    const err = new Error('err_pitch_limit'); err.code = 'err_pitch_limit'; throw err;
  }
  const chunks = Array.from({length:numberOfChannels}, () => []);
  let frames = 0;
  const sink = new mb.AudioSampleSink(track);
  for await (const sample of sink.samples()) {
    if (signal?.aborted) { sample.close(); const err = new Error('err_aborted'); err.code = 'err_aborted'; throw err; }
    const buffer = sample.toAudioBuffer();
    if (buffer.sampleRate !== sampleRate || buffer.numberOfChannels !== numberOfChannels) {
      sample.close(); const err = new Error('err_pitch_limit'); err.code = 'err_pitch_limit'; throw err;
    }
    for (let c = 0; c < numberOfChannels; c++) chunks[c].push(new Float32Array(buffer.getChannelData(c)));
    frames += buffer.length;
    sample.close();
    if (frames > sampleRate * 60.1) { const err = new Error('err_pitch_limit'); err.code = 'err_pitch_limit'; throw err; }
    onProgress?.(Math.min(0.1, frames / (sampleRate * duration) * 0.1));
  }
  const expected = Math.max(1, Math.round(frames / speed));
  const channels = [];
  for (let c = 0; c < numberOfChannels; c++) {
    const source = new Float32Array(frames);
    let offset = 0;
    for (const chunk of chunks[c]) { source.set(chunk, offset); offset += chunk.length; }
    const stretched = await wsolaChannel(source, sampleRate, speed, p => {
      if (signal?.aborted) { const err = new Error('err_aborted'); err.code = 'err_aborted'; throw err; }
      onProgress?.(0.1 + (c + p) / numberOfChannels * 0.15);
    });
    const normalized = new Float32Array(expected);
    normalized.set(stretched.subarray(0, expected));
    channels.push(normalized);
  }
  let cursor = 0;
  return {
    numberOfChannels, sampleRate,
    next(sample) {
      const count = Math.max(1, Math.round(sample.numberOfFrames / speed));
      const buffer = new AudioBuffer({numberOfChannels, length:count, sampleRate});
      for (let c = 0; c < numberOfChannels; c++) {
        const end = Math.min(expected, cursor + count);
        if (cursor < end) buffer.getChannelData(c).set(channels[c].subarray(cursor, end));
      }
      const timestamp = cursor / sampleRate;
      cursor += count;
      return mb.AudioSample.fromAudioBuffer(buffer, timestamp);
    },
  };
}
