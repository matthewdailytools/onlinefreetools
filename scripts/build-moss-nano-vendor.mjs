import { copyFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { build } from 'esbuild';

const root = fileURLToPath(new URL('../', import.meta.url));
const output = resolve(root, 'public/vendor/moss-nano');

await build({
  stdin: {
    contents: [
      "export { SentencePieceProcessor } from '@sctg/sentencepiece-js';",
      "export { sha256 } from '@noble/hashes/sha2.js';",
    ].join('\n'),
    resolveDir: root,
  },
  bundle: true,
  platform: 'browser',
  format: 'esm',
  external: ['module'], // Emscripten imports this only in its Node branch.
  minify: true,
  legalComments: 'inline',
  outfile: resolve(output, 'moss-support.mjs'),
  plugins: [{
    name: 'sentencepiece-browser-shims',
    setup(builder) {
      // Only the in-memory model API is used. The package also exports a
      // filesystem loader and initializes Buffer for base64 decoding.
      builder.onResolve({ filter: /^(fs|buffer)$/ }, ({ path }) => ({ path, namespace: 'sentencepiece-browser' }));
      builder.onLoad({ filter: /.*/, namespace: 'sentencepiece-browser' }, ({ path }) => ({
        contents: path === 'fs'
          ? "export function readFileSync() { throw new Error('Use the in-memory SentencePiece loader'); }"
          : "export const Buffer = { from: (value) => Uint8Array.from(atob(value), (byte) => byte.charCodeAt(0)) };",
      }));
    },
  }],
});

// The same pinned ORT build already supplies the site's Whisper WASM files.
await copyFile(
  resolve(root, 'node_modules/onnxruntime-web/dist/ort.wasm.min.mjs'),
  resolve(output, 'ort.wasm.min.mjs'),
);
await copyFile(resolve(root, 'node_modules/@noble/hashes/LICENSE'), resolve(output, 'LICENSE.noble-hashes'));
