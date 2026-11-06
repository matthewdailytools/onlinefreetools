import { spawn } from 'node:child_process';
import { createHash } from 'node:crypto';
import { createReadStream } from 'node:fs';
import { mkdir, rename, rm, stat } from 'node:fs/promises';
import { resolve } from 'node:path';
import { cloneFiles, upstreamUrl } from '../public/vendor/moss-nano/model-files.mjs';

const dir = resolve(process.argv.find((arg) => arg.startsWith('--dir='))?.slice(6) || '.cache/moss-models');
const host = process.argv.includes('--mirror') ? 'hf-mirror.com' : 'huggingface.co';
const curl = process.platform === 'win32' ? 'curl.exe' : 'curl';
await mkdir(dir, { recursive: true });

async function verified(file, asset) {
  const info = await stat(file).catch(() => null);
  if (info?.size !== asset.size) return false;
  const hash = createHash('sha256');
  for await (const chunk of createReadStream(file)) hash.update(chunk);
  return hash.digest('hex') === asset.sha256;
}

for (const asset of cloneFiles) {
  const file = resolve(dir, asset.name);
  if (!await verified(file, asset)) {
    const partial = file + '.partial-' + process.pid;
    try {
      await new Promise((complete, reject) => {
        const download = spawn(curl, [
          '--fail', '--location', '--silent', '--show-error', '--retry', '2',
          '--connect-timeout', '20', '--max-time', '900', '--output', partial, upstreamUrl(host, asset),
        ], { stdio: 'inherit' });
        download.on('error', reject);
        download.on('exit', (code) => code === 0 ? complete() : reject(new Error(`curl failed for ${asset.name}: ${code}`)));
      });
      if (!await verified(partial, asset)) throw new Error(`Checksum mismatch: ${asset.name}`);
      await rename(partial, file);
    } finally {
      await rm(partial, { force: true });
    }
  }
  console.log(`Verified ${asset.name} (${asset.size} bytes)`);
}
console.log(`MOSS static assets ready in ${dir}`);
