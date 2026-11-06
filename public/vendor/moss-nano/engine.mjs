// Browser implementation of the fixed sampler flow in OpenMOSS MOSS-TTS-Nano
// ort_cpu_runtime.py (Apache-2.0). See THIRD-PARTY.md for the pinned artifacts.
import { env, InferenceSession, Tensor } from './ort.wasm.min.mjs';
import { encoderGraph, encoderWeights, graphs, weights } from './model-files.mjs';
import { prompt } from './voice-presets.mjs';

const CODEBOOKS = 16;
const CODEBOOK_SIZE = 1024;
const ROW_WIDTH = CODEBOOKS + 1;
const HIDDEN_SIZE = 768;
const MAX_FRAMES = 375;
export const SAMPLE_RATE = 48000;
const CHANNELS = 2;

env.wasm.numThreads = self.crossOriginIsolated ? Math.min(navigator.hardwareConcurrency || 1, 4) : 1;
env.wasm.proxy = false;
env.wasm.wasmPaths = {
  mjs: new URL('../whisper/ort-wasm-simd-threaded.mjs', import.meta.url).href,
  wasm: new URL('../whisper/ort-wasm-simd-threaded.wasm', import.meta.url).href,
};

const int32 = (values, dims = [values.length]) => new Tensor('int32', Int32Array.from(values), dims);
const randomFloat = () => Math.min(Math.random(), 0.99999994);

async function openSession(files, graph, external, data) {
  return InferenceSession.create(new Uint8Array(await files.get(graph.name).arrayBuffer()), {
    executionProviders: ['wasm'],
    graphOptimizationLevel: 'basic',
    externalData: [{ path: external.name, data }],
  });
}

export async function openEngine(files, progress) {
  const sessions = {};
  try {
    // The prefill and decode graphs use the same external file. Read it once,
    // then drop the JS copy before preparing the remaining sessions.
    let data = new Uint8Array(await files.get(weights.global.name).arrayBuffer());
    sessions.prefill = await openSession(files, graphs.prefill, weights.global, data);
    progress(1, 4);
    sessions.decode = await openSession(files, graphs.decode, weights.global, data);
    progress(2, 4);
    data = new Uint8Array(await files.get(weights.local.name).arrayBuffer());
    sessions.sample = await openSession(files, graphs.sample, weights.local, data);
    progress(3, 4);
    data = new Uint8Array(await files.get(weights.audio.name).arrayBuffer());
    sessions.audio = await openSession(files, graphs.audio, weights.audio, data);
    progress(4, 4);
    return sessions;
  } catch (cause) {
    await Promise.allSettled(Object.values(sessions).map((session) => session.release()));
    throw new Error('initialize', { cause });
  }
}

export async function openReferenceEncoder(files) {
  const data = new Uint8Array(await files.get(encoderWeights.name).arrayBuffer());
  return openSession(files, encoderGraph, encoderWeights, data);
}

export async function encodeReference(encoder, { pcm, frames }) {
  const { audio_codes: codes, audio_code_lengths: lengths } = await encoder.run({
    waveform: new Tensor('float32', pcm, [1, CHANNELS, frames]),
    input_lengths: int32([frames]),
  });
  try {
    const length = Number(lengths.data[0]);
    if (codes.dims[2] !== CODEBOOKS || length < 1 || length > codes.dims[1]) throw new Error('reference');
    return Array.from({ length }, (_, index) => codes.data.slice(index * CODEBOOKS, (index + 1) * CODEBOOKS));
  } finally {
    codes.dispose();
    lengths.dispose();
  }
}

function promptRows(textIds, referenceCodes) {
  const prefix = [...prompt.prefix, 6];
  const suffix = [7, ...prompt.afterReference, ...textIds, ...prompt.assistant, 6];
  const length = prefix.length + referenceCodes.length + suffix.length;
  const data = new Int32Array(length * ROW_WIDTH).fill(CODEBOOK_SIZE);
  let index = 0;
  for (const token of prefix) data[index++ * ROW_WIDTH] = token;
  for (const codes of referenceCodes) {
    const offset = index++ * ROW_WIDTH;
    data[offset] = 8;
    data.set(codes, offset + 1);
  }
  for (const token of suffix) data[index++ * ROW_WIDTH] = token;
  return { data, length };
}

function takeState(output) {
  const { global_hidden: hidden, ...present } = output;
  const last = new Tensor('float32', hidden.data.slice(-HIDDEN_SIZE), [1, HIDDEN_SIZE]);
  hidden.dispose();
  const past = Object.fromEntries(Object.entries(present).map(([key, value]) => [key.replace('present_', 'past_'), value]));
  return { last, past };
}

function disposeState({ last, past }) {
  last.dispose();
  for (const tensor of Object.values(past)) tensor.dispose();
}

async function generateCodes(sessions, textIds, referenceCodes, progress) {
  const rows = promptRows(textIds, referenceCodes);
  const inputIds = new Tensor('int32', rows.data, [1, rows.length, ROW_WIDTH]);
  const attention = new Tensor('int32', new Int32Array(rows.length).fill(1), [1, rows.length]);
  let state = takeState(await sessions.prefill.run({ input_ids: inputIds, attention_mask: attention }));
  const seen = new Int32Array(CODEBOOKS * CODEBOOK_SIZE);
  const mask = new Tensor('int32', seen, [1, CODEBOOKS, CODEBOOK_SIZE]);
  const codes = [];
  try {
    for (let index = 0; index < MAX_FRAMES; index += 1) {
      const sampled = await sessions.sample.run({
        global_hidden: state.last,
        repetition_seen_mask: mask,
        assistant_random_u: new Tensor('float32', [randomFloat()], [1]),
        audio_random_u: new Tensor('float32', Array.from({ length: CODEBOOKS }, randomFloat), [1, CODEBOOKS]),
      });
      const more = Boolean(sampled.should_continue.data[0]);
      const frame = Array.from(sampled.frame_token_ids.data, Number);
      sampled.should_continue.dispose();
      sampled.frame_token_ids.dispose();
      if (!more) return codes;
      codes.push(...frame);
      frame.forEach((token, codebook) => { seen[codebook * CODEBOOK_SIZE + token] = 1; });
      const next = await sessions.decode.run({
        input_ids: int32([9, ...frame], [1, 1, ROW_WIDTH]),
        past_valid_lengths: int32([rows.length + index]),
        ...state.past,
      });
      disposeState(state);
      state = takeState(next);
      progress(index + 1, MAX_FRAMES);
    }
    throw new Error('limit');
  } finally {
    disposeState(state);
  }
}

function waveFile(audio, frames, stride) {
  const dataLength = frames * CHANNELS * 2;
  const bytes = new ArrayBuffer(44 + dataLength);
  const view = new DataView(bytes);
  function tag(offset, value) {
    for (let index = 0; index < value.length; index += 1) view.setUint8(offset + index, value.charCodeAt(index));
  }
  tag(0, 'RIFF');
  view.setUint32(4, 36 + dataLength, true);
  tag(8, 'WAVE');
  tag(12, 'fmt ');
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, CHANNELS, true);
  view.setUint32(24, SAMPLE_RATE, true);
  view.setUint32(28, SAMPLE_RATE * CHANNELS * 2, true);
  view.setUint16(32, CHANNELS * 2, true);
  view.setUint16(34, 16, true);
  tag(36, 'data');
  view.setUint32(40, dataLength, true);
  for (let frame = 0; frame < frames; frame += 1) {
    for (let channel = 0; channel < CHANNELS; channel += 1) {
      const value = audio[channel * stride + frame];
      if (!Number.isFinite(value)) throw new Error('synthesis');
      const clipped = Math.max(-1, Math.min(1, value));
      view.setInt16(44 + (frame * CHANNELS + channel) * 2, Math.round(clipped * (clipped < 0 ? 32768 : 32767)), true);
    }
  }
  return bytes;
}

export async function synthesize(sessions, textIds, referenceCodes, update) {
  const codes = await generateCodes(sessions, textIds, referenceCodes, (current, total) => update('generate', current, total));
  if (codes.length === 0) throw new Error('synthesis');
  update('output', 0, 1);
  const frameCount = codes.length / CODEBOOKS;
  const { audio, audio_lengths: lengths } = await sessions.audio.run({
    audio_codes: int32(codes, [1, frameCount, CODEBOOKS]),
    audio_code_lengths: int32([frameCount]),
  });
  try {
    const frames = Number(lengths.data[0]);
    const stride = audio.dims[2];
    if (audio.dims[1] !== CHANNELS || !Number.isInteger(frames) || frames < 1 || frames > stride) {
      throw new Error('synthesis');
    }
    return { wav: waveFile(audio.data, frames, stride), seconds: frames / SAMPLE_RATE };
  } finally {
    audio.dispose();
    lengths.dispose();
  }
}
