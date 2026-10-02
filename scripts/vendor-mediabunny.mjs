#!/usr/bin/env node
/**
 * 将 mediabunny + AC-3/E-AC-3 + AAC 编码器同域 vendor 到 public/vendor/mediabunny/。
 * 用于 D2：convert-an-mkv-file-to-an-mp4-file（点击后懒加载；禁止 CDN）。
 *
 * 用法：node scripts/vendor-mediabunny.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const outDir = path.join(root, 'public', 'vendor', 'mediabunny');

/** @type {{ from: string, to: string }[]} */
const copies = [
	{
		from: 'node_modules/mediabunny/dist/bundles/mediabunny.min.mjs',
		to: 'mediabunny.min.mjs',
	},
	{
		from: 'node_modules/@mediabunny/ac3/dist/bundles/mediabunny-ac3.min.mjs',
		to: 'mediabunny-ac3.min.mjs',
	},
	{
		from: 'node_modules/@mediabunny/aac-encoder/dist/bundles/mediabunny-aac-encoder.min.mjs',
		to: 'mediabunny-aac-encoder.min.mjs',
	},
	{
		from: 'node_modules/mediabunny/LICENSE',
		to: 'LICENSE-mediabunny',
	},
];

/**
 * 确保目录存在。
 * @param {string} dir 目录绝对路径
 */
function ensureDir(dir) {
	fs.mkdirSync(dir, { recursive: true });
}

/**
 * 复制单个文件并打印相对路径。
 * @param {string} fromAbs 源绝对路径
 * @param {string} toAbs 目标绝对路径
 */
function copyFile(fromAbs, toAbs) {
	if (!fs.existsSync(fromAbs)) {
		console.error('Missing:', fromAbs);
		process.exit(1);
	}
	ensureDir(path.dirname(toAbs));
	fs.copyFileSync(fromAbs, toAbs);
	console.log('Copied', path.relative(root, fromAbs), '→', path.relative(root, toAbs));
}

ensureDir(outDir);
for (const item of copies) {
	copyFile(path.join(root, item.from), path.join(outDir, item.to));
}

/**
 * 将扩展包中的裸模块说明符 `mediabunny` 改写为同目录相对路径。
 * 浏览器无法解析 bare specifier；官方 npm 包依赖 bundler / import map。
 * @param {string} fileAbs 目标文件绝对路径
 */
function rewriteBareMediabunnyImports(fileAbs) {
	const before = fs.readFileSync(fileAbs, 'utf8');
	const after = before
		.replace(/from\s*["']mediabunny["']/g, 'from"./mediabunny.min.mjs"')
		.replace(/import\s*\(\s*["']mediabunny["']\s*\)/g, 'import("./mediabunny.min.mjs")');
	if (after === before) {
		console.warn('No bare mediabunny imports found in', path.relative(root, fileAbs));
		return;
	}
	fs.writeFileSync(fileAbs, after, 'utf8');
	console.log('Rewrote bare mediabunny → ./mediabunny.min.mjs in', path.relative(root, fileAbs));
}

rewriteBareMediabunnyImports(path.join(outDir, 'mediabunny-ac3.min.mjs'));
rewriteBareMediabunnyImports(path.join(outDir, 'mediabunny-aac-encoder.min.mjs'));

/**
 * 懒加载入口：注册 AC-3 解码与 AAC 编码，并导出 Conversion API。
 * 大文件走 OPFS + StreamTarget（约 5 GiB）；小文件仍可用 BufferTarget。
 * 页面通过 `import('/vendor/mediabunny/mkv-to-mp4-loader.js')` 取得 `convertMkvToMp4`。
 */
const loaderSrc = `/**
 * 同域 mediabunny 懒加载：MKV→MP4（AAC 立体声）。
 * 大文件：BlobSource（有限缓存）+ StreamTarget → OPFS WritableStream，避免整段 MP4 进 RAM。
 * 小文件：BufferTarget。
 * 扩展包已由 vendor 脚本把 from"mediabunny" 改写为相对路径。
 */

/** @type {Promise<any> | null} */
let loadPromise = null;

/** 有 OPFS 时体积硬上限（字节）：约 5 GiB。 */
export const HARD_MAX_BYTES = 5 * 1024 * 1024 * 1024;
/** 无 OPFS 时体积硬上限（字节）：约 1 GiB（输出仍可能进内存汇聚）。 */
export const HARD_MAX_BYTES_NO_OPFS = 1024 * 1024 * 1024;
/** 小于此体积可用 BufferTarget（字节）：约 80 MiB。 */
export const SMALL_BUFFER_MAX_BYTES = 80 * 1024 * 1024;
/** BlobSource 读缓存上限（字节）。 */
const BLOB_CACHE_BYTES = 32 * 1024 * 1024;
/** StreamTarget 写出块大小（字节）。 */
const STREAM_CHUNK_BYTES = 16 * 1024 * 1024;
/** OPFS 子目录名。 */
const OPFS_DIR = 'oft-mkv-to-mp4';

/**
 * 探测是否可用 OPFS 写出。
 * @returns {Promise<boolean>}
 */
async function canUseOpfs() {
	try {
		if (typeof navigator === 'undefined' || !navigator.storage || typeof navigator.storage.getDirectory !== 'function') {
			return false;
		}
		const root = await navigator.storage.getDirectory();
		const dir = await root.getDirectoryHandle(OPFS_DIR, { create: true });
		const probe = await dir.getFileHandle('.__probe', { create: true });
		const w = await probe.createWritable({ keepExistingData: false });
		await w.write(new Uint8Array([0]));
		await w.close();
		try {
			await dir.removeEntry('.__probe');
		} catch {
			/* ignore */
		}
		return true;
	} catch {
		return false;
	}
}

/**
 * 返回当前浏览器下的体积上限与路径标签。
 * @returns {Promise<{ opfs: boolean, maxBytes: number, smallBufferMaxBytes: number }>}
 */
export async function getConvertCapabilities() {
	const opfs = await canUseOpfs();
	return {
		opfs,
		maxBytes: opfs ? HARD_MAX_BYTES : HARD_MAX_BYTES_NO_OPFS,
		smallBufferMaxBytes: SMALL_BUFFER_MAX_BYTES,
	};
}

/**
 * 加载 mediabunny 主库与扩展（只执行一次；失败后允许重试）。
 * @returns {Promise<any>}
 */
async function loadMediabunny() {
	if (loadPromise) return loadPromise;
	loadPromise = (async () => {
		const base = new URL('./', import.meta.url);
		const mb = await import(new URL('mediabunny.min.mjs', base).href);
		const ac3 = await import(new URL('mediabunny-ac3.min.mjs', base).href);
		const aac = await import(new URL('mediabunny-aac-encoder.min.mjs', base).href);
		if (typeof ac3.registerAc3Decoder === 'function') {
			ac3.registerAc3Decoder();
		}
		if (!(await mb.canEncodeAudio('aac')) && typeof aac.registerAacEncoder === 'function') {
			aac.registerAacEncoder();
		} else if (typeof aac.registerAacEncoder === 'function') {
			try {
				aac.registerAacEncoder();
			} catch {
				/* 已注册则忽略 */
			}
		}
		return mb;
	})().catch((err) => {
		loadPromise = null;
		throw err;
	});
	return loadPromise;
}

/**
 * 在 OPFS 中创建可随机定位写入的 StreamTarget 汇聚器。
 * @param {any} mb mediabunny 模块
 * @param {string} baseName 建议文件名（会加时间戳）
 * @returns {Promise<{
 *   target: any,
 *   finalize: () => Promise<Blob>,
 *   cleanup: () => Promise<void>,
 * }>}
 */
async function openOpfsStreamTarget(mb, baseName) {
	const root = await navigator.storage.getDirectory();
	const dir = await root.getDirectoryHandle(OPFS_DIR, { create: true });
	const safe = String(baseName || 'out').replace(/[^a-zA-Z0-9._-]+/g, '_').slice(0, 48);
	const name = safe + '-' + Date.now() + '-' + Math.random().toString(36).slice(2, 8) + '.mp4';
	const fh = await dir.getFileHandle(name, { create: true });
	const writable = await fh.createWritable({ keepExistingData: false });
	let closed = false;
	/**
	 * 将 mediabunny StreamTargetChunk 转写到 FileSystemWritableFileStream。
	 * 不直接传入原生 writable：部分 UA 在未显式 close 时 getFile().size 为 0。
	 */
	const adapter = new WritableStream({
		async write(chunk) {
			if (!chunk || chunk.type !== 'write') return;
			await writable.write({
				type: 'write',
				position: chunk.position,
				data: chunk.data,
			});
		},
		async close() {
			if (closed) return;
			closed = true;
			await writable.close();
		},
		async abort(reason) {
			if (closed) return;
			closed = true;
			try {
				await writable.abort(reason);
			} catch {
				try {
					await writable.close();
				} catch {
					/* ignore */
				}
			}
		},
	});
	const target = new mb.StreamTarget(adapter, {
		chunked: true,
		chunkSize: STREAM_CHUNK_BYTES,
	});
	return {
		target,
		finalize: async () => {
			if (!closed) {
				try {
					await writable.close();
				} catch {
					/* StreamTarget 可能已关闭 */
				}
				closed = true;
			}
			const file = await fh.getFile();
			return file;
		},
		cleanup: async () => {
			try {
				if (!closed) {
					try {
						await writable.abort();
					} catch {
						/* ignore */
					}
					closed = true;
				}
			} catch {
				/* ignore */
			}
			try {
				await dir.removeEntry(name);
			} catch {
				/* ignore */
			}
		},
	};
}

/**
 * 将本地 MKV File/Blob 转为 AAC（默认定立体声）MP4 Blob。
 * 多 GiB：OPFS 流式写出；小文件：内存 BufferTarget。
 * @param {File|Blob} file 输入 MKV
 * @param {{
 *   numberOfChannels?: number,
 *   quality?: 'low'|'medium'|'high',
 *   onProgress?: (ratio: number) => void,
 *   signal?: AbortSignal,
 * }} [opts] 转换选项
 * @returns {Promise<{
 *   blob: Blob,
 *   buffer?: ArrayBuffer,
 *   size: number,
 *   via: 'opfs'|'memory',
 *   discarded: Array<{ reason: string }>,
 *   cleanup?: () => Promise<void>,
 * }>}
 */
export async function convertMkvToMp4(file, opts = {}) {
	const mb = await loadMediabunny();
	const caps = await getConvertCapabilities();
	const size = file && typeof file.size === 'number' ? file.size : 0;
	if (size > caps.maxBytes) {
		const err = new Error('err_limit');
		err.code = 'err_limit';
		throw err;
	}

	const channels = opts.numberOfChannels === 1 ? 1 : 2;
	const qualityMap = {
		low: mb.QUALITY_LOW,
		medium: mb.QUALITY_MEDIUM,
		high: mb.QUALITY_HIGH,
	};
	const quality = qualityMap[opts.quality || 'high'] || mb.QUALITY_HIGH;

	const useOpfs = caps.opfs && size > SMALL_BUFFER_MAX_BYTES;
	/** @type {{ target: any, finalize?: () => Promise<Blob>, cleanup?: () => Promise<void> } | null} */
	let sink = null;
	/** @type {any} */
	let target;
	/** @type {'opfs'|'memory'} */
	let via = 'memory';

	if (useOpfs) {
		try {
			sink = await openOpfsStreamTarget(mb, (file && file.name) || 'mkv');
			target = sink.target;
			via = 'opfs';
		} catch {
			/* OPFS 失败则回退；若超无 OPFS 上限则拒绝 */
			if (size > HARD_MAX_BYTES_NO_OPFS) {
				const err = new Error('err_limit');
				err.code = 'err_limit';
				throw err;
			}
			target = new mb.BufferTarget();
			via = 'memory';
			sink = null;
		}
	} else {
		if (size > HARD_MAX_BYTES_NO_OPFS) {
			const err = new Error('err_limit');
			err.code = 'err_limit';
			throw err;
		}
		/* 小文件（含样例）走 BufferTarget，兼容仍只读 result.buffer 的旧页面脚本 */
		target = new mb.BufferTarget();
		via = 'memory';
	}

	const input = new mb.Input({
		source: new mb.BlobSource(file, { maxCacheSize: BLOB_CACHE_BYTES }),
		formats: mb.ALL_FORMATS,
	});
	const output = new mb.Output({
		format: new mb.Mp4OutputFormat({
			/* OPFS/StreamTarget：false 把 moov 放末尾，可随机写；避免 reserve 需 maximumPacketCount */
			fastStart: via === 'opfs' ? false : 'in-memory',
		}),
		target,
	});

	const conversion = await mb.Conversion.init({
		input,
		output,
		audio: {
			codec: 'aac',
			numberOfChannels: channels,
			quality,
			forceTranscode: true,
		},
		showWarnings: false,
	});

	if (!conversion.isValid) {
		if (sink && sink.cleanup) await sink.cleanup().catch(() => {});
		const reasons = (conversion.discardedTracks || []).map((d) => d.reason || 'unknown');
		const err = new Error(reasons.join(',') || 'invalid_conversion');
		err.code = reasons.includes('undecodable_source_codec')
			? 'err_codec'
			: reasons.includes('unknown_source_codec')
				? 'err_codec'
				: 'err_container';
		err.discarded = conversion.discardedTracks || [];
		throw err;
	}

	if (typeof opts.onProgress === 'function') {
		conversion.onProgress = (ratio) => {
			try {
				opts.onProgress(Number(ratio) || 0);
			} catch {
				/* ignore UI errors */
			}
		};
	}

	/** @type {(() => void) | null} */
	let onAbort = null;
	if (opts.signal) {
		if (opts.signal.aborted) {
			await conversion.cancel();
			if (sink && sink.cleanup) await sink.cleanup().catch(() => {});
			const err = new Error('aborted');
			err.code = 'err_aborted';
			throw err;
		}
		onAbort = () => {
			conversion.cancel().catch(() => {});
		};
		opts.signal.addEventListener('abort', onAbort, { once: true });
	}

	try {
		await conversion.execute();
	} catch (e) {
		if (sink && sink.cleanup) await sink.cleanup().catch(() => {});
		if (opts.signal?.aborted || (e && e.name === 'ConversionCanceledError')) {
			const err = new Error('aborted');
			err.code = 'err_aborted';
			throw err;
		}
		throw e;
	} finally {
		if (onAbort && opts.signal) {
			opts.signal.removeEventListener('abort', onAbort);
		}
	}

	/** @type {Blob} */
	let blob;
	/** @type {ArrayBuffer|undefined} */
	let buffer;
	if (via === 'opfs' && sink && sink.finalize) {
		blob = await sink.finalize();
		if (!blob || !blob.size) {
			if (sink.cleanup) await sink.cleanup().catch(() => {});
			const err = new Error('empty_output');
			err.code = 'err_encoder';
			throw err;
		}
		/* 小结果拷贝进独立 Blob，避免 OPFS 清理后 object URL 变空；大文件保留 OPFS File 句柄 */
		if (blob.size <= SMALL_BUFFER_MAX_BYTES) {
			const ab = await blob.arrayBuffer();
			blob = new Blob([ab], { type: 'video/mp4' });
			if (sink.cleanup) {
				await sink.cleanup().catch(() => {});
				sink = null;
			}
		}
	} else {
		buffer = target.buffer;
		if (!buffer) {
			const err = new Error('empty_output');
			err.code = 'err_encoder';
			throw err;
		}
		blob = new Blob([buffer], { type: 'video/mp4' });
	}

	return {
		blob,
		buffer,
		size: blob.size,
		via,
		discarded: (conversion.discardedTracks || []).map((d) => ({
			reason: String(d.reason || ''),
		})),
		cleanup: sink && sink.cleanup ? sink.cleanup : undefined,
	};
}

export { loadMediabunny };
`;

fs.writeFileSync(path.join(outDir, 'mkv-to-mp4-loader.js'), loaderSrc, 'utf8');
console.log('Wrote', path.relative(root, path.join(outDir, 'mkv-to-mp4-loader.js')));
console.log('vendor-mediabunny OK');
