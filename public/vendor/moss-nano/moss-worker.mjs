import { SentencePieceProcessor } from './moss-support.mjs';
import { prepareModelFiles } from './model-store.mjs';
import { cloneFiles, speechFiles } from './model-files.mjs';
import { presets } from './voice-presets.mjs';

let tokenizer;
let engineModule;
let sessions;
let encoder;
let busy = false;

function progress(stage, current, total) {
  postMessage({ type: 'progress', stage, current, total });
}

async function tokenize(text, file) {
  if (!tokenizer) {
    const bytes = new Uint8Array(await file.arrayBuffer());
    const encoded = typeof bytes.toBase64 === 'function'
      ? bytes.toBase64()
      : btoa(Array.from(bytes, (byte) => String.fromCharCode(byte)).join(''));
    const processor = new SentencePieceProcessor();
    await processor.loadFromB64StringModel(encoded);
    tokenizer = processor;
  }
  const ids = tokenizer.encodeIds(text);
  if (!ids.length || ids.length > 80) throw new Error('limit');
  return ids;
}

self.onmessage = async ({ data }) => {
  if (data.type !== 'generate' || busy) return;
  busy = true;
  try {
    const text = data.text.trim().replace(/\s+/gu, ' ');
    if (!/[\p{L}\p{N}]/u.test(text) || text.length > 240) {
      throw new Error('input');
    }
    const cloning = data.mode === 'clone';
    if (cloning) {
      if (data.authorized !== true) throw new Error('consent');
      const { pcm, frames } = data.reference ?? {};
      if (!(pcm instanceof Float32Array) || !Number.isInteger(frames) ||
          frames < 96_000 || frames > 576_000 || pcm.length !== frames * 2) {
        throw new Error('reference');
      }
    } else if (!Object.hasOwn(presets, data.voice)) {
      throw new Error('input');
    }
    const assets = cloning ? cloneFiles : speechFiles;
    const needsFiles = !sessions || (cloning && !encoder);
    let ids;
    let files;
    if (needsFiles) {
      files = await prepareModelFiles(assets, (current, total) => progress('download', current, total), async (file) => {
        ids = await tokenize(text, file);
      });
    } else {
      ids = await tokenize(text);
    }
    if (!sessions) {
      progress('initialize', 0, 4);
      engineModule ??= await import('./engine.mjs');
      sessions = await engineModule.openEngine(files, (current, total) => progress('initialize', current, total));
    }
    let codes = presets[data.voice];
    if (cloning) {
      progress('reference', 0, 1);
      try {
        encoder ??= await engineModule.openReferenceEncoder(files);
        codes = await engineModule.encodeReference(encoder, data.reference);
      } catch (cause) {
        throw new Error('encode_reference', { cause });
      }
    }
    progress('generate', 0, 375);
    const { wav, seconds } = await engineModule.synthesize(sessions, ids, codes, progress);
    postMessage({ type: 'result', wav, seconds }, [wav]);
  } catch (error) {
    console.warn('MOSS Nano:', error);
    postMessage({ type: 'error', code: error.message });
  } finally {
    busy = false;
  }
};
