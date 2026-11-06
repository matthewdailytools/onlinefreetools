import { sha256 } from './moss-support.mjs';
import { MODEL_CDN, MODEL_PATH, MODEL_VERSION, tokenizerFile, upstreamUrl } from './model-files.mjs';

const CACHE_NAME = `oft-moss-nano-${MODEL_VERSION}`;
const NETWORK_IDLE_MS = 45_000;
const WRITE_BATCH = 1024 * 1024;
let preferredHost;

async function openDirectory() {
  try {
    const root = await navigator.storage.getDirectory();
    return await root.getDirectoryHandle(CACHE_NAME, { create: true });
  } catch (cause) {
    throw new Error('storage', { cause });
  }
}

async function findFile(directory, { name, size }) {
  try {
    const file = await (await directory.getFileHandle(name)).getFile();
    return file.size === size ? file : null;
  } catch (error) {
    if (error.name === 'NotFoundError') return null;
    throw new Error('storage', { cause: error });
  }
}

function sourceUrls(asset) {
  const loopback = ['localhost', '127.0.0.1', '[::1]'].includes(location.hostname);
  const staticBase = loopback ? new URL(MODEL_PATH, location.origin).href : MODEL_CDN;
  // The public .bin keys are eligible for Cloudflare's default edge cache.
  const staticName = loopback ? asset.name : `${asset.name}.bin`;
  const urls = [
    staticBase + staticName,
    upstreamUrl('huggingface.co', asset),
    upstreamUrl('hf-mirror.com', asset),
  ];
  const preferred = urls.findIndex((url) => new URL(url).host === preferredHost);
  if (preferred > 0) urls.unshift(urls.splice(preferred, 1)[0]);
  return urls;
}

async function downloadFile(directory, asset, url, onBytes) {
  const controller = new AbortController();
  let timer;
  let writer;
  function resetTimeout() {
    clearTimeout(timer);
    timer = setTimeout(() => controller.abort(), NETWORK_IDLE_MS);
  }

  try {
    resetTimeout();
    const response = await fetch(url, {
      credentials: 'omit', referrerPolicy: 'no-referrer', signal: controller.signal,
    });
    if (response.status !== 200 || !response.body) throw new Error(`HTTP ${response.status}`);

    try {
      const handle = await directory.getFileHandle(asset.name, { create: true });
      writer = await handle.createWritable();
    } catch (cause) {
      throw new Error('storage', { cause });
    }

    const reader = response.body.getReader();
    const hash = sha256.create();
    const pending = new Uint8Array(Math.min(WRITE_BATCH, asset.size));
    let buffered = 0;
    let received = 0;
    let lastUpdate = 0;
    async function flush() {
      try {
        await writer.write(pending.subarray(0, buffered));
        buffered = 0;
      } catch (cause) {
        throw new Error('storage', { cause });
      }
    }
    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;
      received += value.length;
      if (received > asset.size) throw new Error('Unexpected model size');
      hash.update(value);
      for (let offset = 0; offset < value.length;) {
        const count = Math.min(pending.length - buffered, value.length - offset);
        pending.set(value.subarray(offset, offset + count), buffered);
        buffered += count;
        offset += count;
        if (buffered === pending.length) await flush();
      }
      resetTimeout();
      const now = performance.now();
      if (received < asset.size && now - lastUpdate >= 125) {
        onBytes(received);
        lastUpdate = now;
      }
    }
    const digest = Array.from(hash.digest(), (byte) => byte.toString(16).padStart(2, '0')).join('');
    if (received !== asset.size || digest !== asset.sha256) throw new Error('Model verification failed');
    if (buffered) await flush();
    try {
      // OPFS replaces the previous file only after close.
      await writer.close();
      writer = null;
    } catch (cause) {
      throw new Error('storage', { cause });
    }
  } finally {
    clearTimeout(timer);
    controller.abort();
    await writer?.abort().catch(() => {});
  }
}

export async function prepareModelFiles(assets, progress, validateText) {
  async function prepare() {
    const directory = await openDirectory();
    const files = new Map();
    let total = 0;
    for (const asset of assets) {
      const file = await findFile(directory, asset);
      if (file) {
        files.set(asset.name, file);
      } else {
        total += asset.size;
      }
    }
    let complete = 0;
    const report = (received = 0) => {
      if (total > 0) progress(complete + received, total);
    };

    async function ensureFile(asset) {
      const cached = files.get(asset.name);
      if (cached) return cached;
      let error;
      for (const url of sourceUrls(asset)) {
        report();
        try {
          await downloadFile(directory, asset, url, report);
          preferredHost = new URL(url).host;
          error = null;
          break;
        } catch (cause) {
          if (cause.message === 'storage') throw cause;
          error = cause;
          console.warn(`MOSS model ${asset.name} from ${new URL(url).hostname}: ${cause.message}`);
        }
      }
      if (error) throw new Error('network', { cause: error });
      const file = await findFile(directory, asset);
      files.set(asset.name, file);
      complete += asset.size;
      report();
      return file;
    }

    report();
    // Check the token limit before fetching the larger weights.
    await validateText(await ensureFile(tokenizerFile));
    if (total > complete) {
      const estimate = await navigator.storage.estimate().catch(() => ({}));
      if (estimate.quota && estimate.quota - (estimate.usage ?? 0) < total - complete) {
        throw new Error('storage');
      }
    }
    for (const asset of assets) {
      if (asset !== tokenizerFile) await ensureFile(asset);
    }
    return files;
  }
  // Sharing the lock also keeps a second tab from downloading the same weights.
  return navigator.locks ? navigator.locks.request(CACHE_NAME, prepare) : prepare();
}
