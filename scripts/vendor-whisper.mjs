#!/usr/bin/env node
/**
 * 一次性（或升级时）把浏览器 Whisper 运行时与 whisper-tiny q8 模型写入 public/vendor/whisper/。
 *
 * 背景：
 * - Cloudflare Assets 单文件 ≤ 25 MiB；decoder q8 ≈ 29.3 MB，须切片。
 * - 禁止 CDN / huggingface.co 运行时拉取；模型与 wasm 须同域且入库 Git。
 * - copy-tool-libs-vendor.mjs 只校验本目录存在，不重新下载（对照 tesseract lang）。
 *
 * 用法：
 *   node scripts/vendor-whisper.mjs
 *   WHISPER_MODEL_SRC=/path/to/files node scripts/vendor-whisper.mjs   # 跳过下载，用本地目录
 *
 * 固定版本见下方常量；升级须同步 package.json 与本脚本。
 */
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import { execFileSync } from 'node:child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const nm = path.join(root, 'node_modules');
const outRoot = path.join(root, 'public', 'vendor', 'whisper');
const require = createRequire(import.meta.url);
const esbuild = require('esbuild');

/** 锁定的 transformers.js 版本（须与 package.json 一致）。 */
const TRANSFORMERS_VERSION = '4.3.0';
/** 锁定的 onnxruntime-web 版本（transformers 4.3.0 所依赖）。 */
const ORT_VERSION = '1.31.0-dev.20260914-8d85527a0';
/** Hugging Face 模型 id。 */
const MODEL_ID = 'onnx-community/whisper-tiny';
/** 模型 revision（commit sha）。 */
const MODEL_REVISION = 'ff4177021cc41f7db950912b73ea4fdf7d01d8e7';
/** 切片上限（字节）；须低于 Cloudflare Assets 25 MiB。 */
const CHUNK_BYTES = 16 * 1024 * 1024;
/** 下载镜像（可用 WHISPER_HF_BASE 覆盖）。 */
const HF_BASE = process.env.WHISPER_HF_BASE || 'https://hf-mirror.com';

/**
 * 计算文件 SHA-256（hex）。
 * @param {string} filePath 本地路径
 * @returns {string}
 */
function sha256File(filePath) {
	const hash = crypto.createHash('sha256');
	hash.update(fs.readFileSync(filePath));
	return hash.digest('hex');
}

/**
 * 确保目录存在。
 * @param {string} dir 目录
 */
function ensureDir(dir) {
	fs.mkdirSync(dir, { recursive: true });
}

/**
 * 复制文件并打印相对路径。
 * @param {string} from 源
 * @param {string} to 目标
 */
function copyFile(from, to) {
	if (!fs.existsSync(from)) {
		console.error('Missing:', from);
		process.exit(1);
	}
	ensureDir(path.dirname(to));
	fs.copyFileSync(from, to);
	console.log('Copied', path.relative(root, from), '→', path.relative(root, to));
}

/**
 * 用 curl 下载到目标（失败则退出）。
 * @param {string} url 远程 URL
 * @param {string} dest 本地路径
 */
function download(url, dest) {
	ensureDir(path.dirname(dest));
	console.log('GET', url);
	execFileSync('curl', ['-sL', '--max-time', '180', '-A', 'Mozilla/5.0', '-o', dest, url], {
		stdio: 'inherit',
	});
	if (!fs.existsSync(dest) || fs.statSync(dest).size < 16) {
		console.error('Download failed or empty:', dest);
		process.exit(1);
	}
}

/**
 * 把大文件切成 ≤ CHUNK_BYTES 的分片，写出 .partN 与 .chunks.json。
 * @param {string} filePath 完整文件路径
 * @returns {{ parts: string[], size: number, sha256: string }}
 */
function chunkFile(filePath) {
	const buf = fs.readFileSync(filePath);
	const sha256 = crypto.createHash('sha256').update(buf).digest('hex');
	/** @type {string[]} */
	const parts = [];
	let offset = 0;
	let index = 0;
	while (offset < buf.length) {
		const end = Math.min(offset + CHUNK_BYTES, buf.length);
		const partName = `${path.basename(filePath)}.part${index}`;
		const partPath = path.join(path.dirname(filePath), partName);
		fs.writeFileSync(partPath, buf.subarray(offset, end));
		parts.push(partName);
		console.log('Chunk', path.relative(root, partPath), `(${end - offset} bytes)`);
		offset = end;
		index += 1;
	}
	const meta = { parts, size: buf.length, sha256 };
	fs.writeFileSync(filePath + '.chunks.json', JSON.stringify(meta, null, 2) + '\n');
	fs.unlinkSync(filePath);
	console.log('Removed unchunked', path.relative(root, filePath), '→ use .chunks.json');
	return meta;
}

/**
 * 校验已安装的 npm 包版本。
 */
function assertNpmVersions() {
	const tfPkg = JSON.parse(fs.readFileSync(path.join(nm, '@huggingface/transformers/package.json'), 'utf8'));
	const ortPkg = JSON.parse(fs.readFileSync(path.join(nm, 'onnxruntime-web/package.json'), 'utf8'));
	if (tfPkg.version !== TRANSFORMERS_VERSION) {
		console.error(`Expected @huggingface/transformers@${TRANSFORMERS_VERSION}, got ${tfPkg.version}`);
		process.exit(1);
	}
	if (ortPkg.version !== ORT_VERSION) {
		console.error(`Expected onnxruntime-web@${ORT_VERSION}, got ${ortPkg.version}`);
		process.exit(1);
	}
}

/**
 * esbuild 打包浏览器入口（含 onnxruntime-web，排除 Node 专用 sharp）。
 */
function bundleTransformers() {
	const entry = path.join(root, 'scripts', 'whisper-browser-entry.mjs');
	const outfile = path.join(outRoot, 'transformers.bundle.js');
	ensureDir(outRoot);
	esbuild.buildSync({
		entryPoints: [entry],
		bundle: true,
		format: 'esm',
		platform: 'browser',
		target: ['es2022'],
		outfile,
		logLevel: 'warning',
		external: ['sharp', 'onnxruntime-node', 'node:*'],
		mainFields: ['browser', 'module', 'main'],
		conditions: ['browser', 'import', 'default'],
		define: {
			'process.env.NODE_ENV': '"production"',
		},
	});
	console.log('Bundled', path.relative(root, outfile), `(${fs.statSync(outfile).size} bytes)`);
}

/**
 * 复制 onnxruntime-web 的 wasm + mjs（WASM 后端；不引入超 25 MiB 的 jsep）。
 * 若 node_modules 缺 wasm，从 jsDelivr 拉取同版本文件。
 */
function copyOrtWasm() {
	const dist = path.join(nm, 'onnxruntime-web', 'dist');
	const names = ['ort-wasm-simd-threaded.mjs', 'ort-wasm-simd-threaded.wasm'];
	for (const name of names) {
		const from = path.join(dist, name);
		const to = path.join(outRoot, name);
		if (fs.existsSync(from) && fs.statSync(from).size > 1000) {
			copyFile(from, to);
			continue;
		}
		const url = `https://cdn.jsdelivr.net/npm/onnxruntime-web@${ORT_VERSION}/dist/${name}`;
		download(url, to);
		console.log('Downloaded', path.relative(root, to));
	}
	const wasmPath = path.join(outRoot, 'ort-wasm-simd-threaded.wasm');
	const wasmSize = fs.statSync(wasmPath).size;
	if (wasmSize > 25 * 1024 * 1024) {
		console.error('ort wasm exceeds 25 MiB; chunking required:', wasmSize);
		process.exit(1);
	}
}

/**
 * 写入模型文件：小文件原样复制；decoder 切片。
 * @param {string} srcDir 已下载的模型根目录（含 config.json 与 onnx/）
 */
function installModel(srcDir) {
	const modelOut = path.join(outRoot, 'models', MODEL_ID);
	ensureDir(modelOut);
	ensureDir(path.join(modelOut, 'onnx'));

	/** 须存在的配置 / tokenizer 文件。 */
	const smallFiles = [
		'config.json',
		'generation_config.json',
		'preprocessor_config.json',
		'tokenizer.json',
		'tokenizer_config.json',
		'special_tokens_map.json',
		'added_tokens.json',
		'merges.txt',
		'vocab.json',
		'normalizer.json',
		'quantize_config.json',
	];
	for (const name of smallFiles) {
		copyFile(path.join(srcDir, name), path.join(modelOut, name));
	}

	/** 期望的 ONNX 文件与 sha256（锁定 revision 时的真值）。 */
	const onnxExpected = {
		'encoder_model_quantized.onnx': {
			size: 10124990,
			sha256: '2af4a414ca47aa30f61246017e5fe82b0a8d229281d1255ba666a2a7f6b84d19',
		},
		'decoder_model_merged_quantized.onnx': {
			size: 30719241,
			sha256: '25e807a962b6349356d0ea5d0dfe530b7e5bf0e2a484aeca0359d03143faddd3',
		},
	};

	for (const [name, expect] of Object.entries(onnxExpected)) {
		const from = path.join(srcDir, 'onnx', name);
		const to = path.join(modelOut, 'onnx', name);
		copyFile(from, to);
		const size = fs.statSync(to).size;
		const hash = sha256File(to);
		if (size !== expect.size || hash !== expect.sha256) {
			console.error(`Hash/size mismatch for ${name}: size=${size} sha256=${hash}`);
			process.exit(1);
		}
		if (size > 25 * 1024 * 1024) {
			chunkFile(to);
		}
	}
}

/**
 * 写出 manifest，供页面与 POC 读取版本 / 路径。
 * @param {object} extra 额外字段
 */
function writeManifest(extra) {
	const manifest = {
		transformersVersion: TRANSFORMERS_VERSION,
		ortVersion: ORT_VERSION,
		modelId: MODEL_ID,
		modelRevision: MODEL_REVISION,
		dtype: 'q8',
		device: 'wasm',
		bundle: '/vendor/whisper/transformers.bundle.js',
		wasmPaths: {
			mjs: '/vendor/whisper/ort-wasm-simd-threaded.mjs',
			wasm: '/vendor/whisper/ort-wasm-simd-threaded.wasm',
		},
		localModelPath: '/vendor/whisper/models/',
		generatedAt: new Date().toISOString(),
		...extra,
	};
	const dest = path.join(outRoot, 'manifest.json');
	fs.writeFileSync(dest, JSON.stringify(manifest, null, 2) + '\n');
	console.log('Wrote', path.relative(root, dest));
}

/**
 * 同步浏览器端 loader：文件为手写维护（含 sliding_windows 可选滑窗），
 * `vendor:whisper` **不得**用旧 stub 覆盖，只把 MODEL_ID 与脚本常量对齐。
 * 若文件缺失须先从 git 恢复，避免静默写回破坏公共 API 的旧实现。
 */
function writeLoader() {
	const dest = path.join(outRoot, 'whisper-loader.js');
	if (!fs.existsSync(dest)) {
		throw new Error(
			'Missing public/vendor/whisper/whisper-loader.js (hand-maintained). Restore from git before npm run vendor:whisper.',
		);
	}
	let source = fs.readFileSync(dest, 'utf8');
	const next = source.replace(
		/export const MODEL_ID = ["'][^"']+["']/,
		`export const MODEL_ID = ${JSON.stringify(MODEL_ID)}`,
	);
	if (next === source && !source.includes(`export const MODEL_ID = ${JSON.stringify(MODEL_ID)}`)) {
		throw new Error('whisper-loader.js: could not find export const MODEL_ID to sync');
	}
	if (next !== source) fs.writeFileSync(dest, next);
	console.log('Preserved hand-maintained', path.relative(root, dest), '(MODEL_ID synced; sliding_windows stays opt-in)');
}

/**
 * 写出独立 POC HTML（仅本地验收，不进 sitemap）。
 */
function writePocHtml() {
	const dest = path.join(outRoot, 'poc.html');
	const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="robots" content="noindex,nofollow" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Whisper vendor POC (local only)</title>
  <style>
    body { font-family: system-ui, sans-serif; max-width: 52rem; margin: 1.5rem auto; padding: 0 1rem; }
    pre { white-space: pre-wrap; background: #f6f8fa; padding: 0.75rem; border-radius: 6px; }
    .err { color: #b00020; }
    .ok { color: #0a7a32; }
  </style>
</head>
<body>
  <h1>Whisper vendor POC</h1>
  <p>Loads <code>/vendor/whisper</code> locally. Pick a speech WAV/MP3 (try JFK sample).</p>
  <p><input id="file" type="file" accept="audio/*" /> <button id="run" type="button">Transcribe</button></p>
  <pre id="log">Ready.</pre>
  <h2>SRT</h2>
  <pre id="srt"></pre>
  <script type="module">
    import { createTranscriber, transcribeAudioBuffer, chunksToSrt, downsampleToMono16k } from './whisper-loader.js';

    const logEl = document.getElementById('log');
    const srtEl = document.getElementById('srt');
    function log(msg, cls) {
      logEl.className = cls || '';
      logEl.textContent = msg;
    }

    document.getElementById('run').addEventListener('click', async () => {
      const file = document.getElementById('file').files?.[0];
      if (!file) { log('Choose an audio file first.', 'err'); return; }
      try {
        log('Loading model (first time downloads from this origin into Cache Storage)...');
        const t0 = performance.now();
        await createTranscriber((p) => {
          if (p?.status === 'progress' && p.file) {
            const pct = p.total ? Math.round((100 * p.loaded) / p.total) : 0;
            log('Download ' + p.file + ' ' + pct + '%');
          } else if (p?.status) {
            log(JSON.stringify(p));
          }
        });
        log('Model ready in ' + Math.round(performance.now() - t0) + ' ms. Decoding audio...');
        const ab = await file.arrayBuffer();
        const audioCtx = new AudioContext();
        const audioBuf = await audioCtx.decodeAudioData(ab.slice(0));
        await audioCtx.close();
        const mono = downsampleToMono16k(audioBuf);
        log('Transcribing ' + (mono.length / 16000).toFixed(1) + 's @16kHz...');
        const t1 = performance.now();
        const result = await transcribeAudioBuffer(mono, { language: 'english' });
        const srt = chunksToSrt(result.chunks || []);
        srtEl.textContent = srt || '(no chunks)\\n\\n' + (result.text || '');
        log('OK in ' + Math.round(performance.now() - t1) + ' ms.\\n' + (result.text || ''), 'ok');
      } catch (err) {
        console.error(err);
        log(String(err && err.stack || err), 'err');
      }
    });
  </script>
</body>
</html>
`;
	fs.writeFileSync(dest, html);
	console.log('Wrote', path.relative(root, dest));
}

/**
 * 若未提供 WHISPER_MODEL_SRC，则下载到 .cache/whisper-tiny 再安装。
 * @returns {string} 模型源目录
 */
function resolveModelSrc() {
	if (process.env.WHISPER_MODEL_SRC) {
		return path.resolve(process.env.WHISPER_MODEL_SRC);
	}
	const cache = path.join(root, '.cache', 'whisper-tiny', MODEL_REVISION);
	ensureDir(path.join(cache, 'onnx'));
	const base = `${HF_BASE}/${MODEL_ID}/resolve/${MODEL_REVISION}`;
	const smallFiles = [
		'config.json',
		'generation_config.json',
		'preprocessor_config.json',
		'tokenizer.json',
		'tokenizer_config.json',
		'special_tokens_map.json',
		'added_tokens.json',
		'merges.txt',
		'vocab.json',
		'normalizer.json',
		'quantize_config.json',
	];
	for (const name of smallFiles) {
		const dest = path.join(cache, name);
		if (!fs.existsSync(dest) || fs.statSync(dest).size < 16) {
			download(`${base}/${name}`, dest);
		}
	}
	for (const name of ['encoder_model_quantized.onnx', 'decoder_model_merged_quantized.onnx']) {
		const dest = path.join(cache, 'onnx', name);
		if (!fs.existsSync(dest) || fs.statSync(dest).size < 1000) {
			download(`${base}/onnx/${name}`, dest);
		}
	}
	return cache;
}

assertNpmVersions();
bundleTransformers();
copyOrtWasm();
const modelSrc = resolveModelSrc();
installModel(modelSrc);
writeLoader();
writePocHtml();
writeManifest({});
console.log('vendor-whisper done →', path.relative(root, outRoot));
