/**
 * 重建 extract-audio vendor：mp4box IIFE + 校验 LICENSE。
 * 用法：node scripts/vendor-extract-audio.mjs
 */
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.join(root, 'public/vendor/extract-audio');
fs.mkdirSync(outDir, { recursive: true });
const entry = path.join(root, 'node_modules/mp4box/dist/mp4box.all.mjs');
const out = path.join(outDir, 'mp4box.all.iife.js');
execFileSync(
	process.platform === 'win32' ? 'npx.cmd' : 'npx',
	['esbuild', entry, '--bundle', '--format=iife', '--global-name=MP4BoxNS', `--outfile=${out}`],
	{ cwd: root, stdio: 'inherit' }
);
fs.copyFileSync(path.join(root, 'node_modules/mp4box/LICENSE'), path.join(outDir, 'mp4box.LICENSE'));
console.log('vendor-extract-audio OK →', out);
