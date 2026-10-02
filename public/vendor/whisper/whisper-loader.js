/**
 * 同域 Whisper 加载器（ESM）。配置 transformers.js 只读 /vendor/whisper，拼接超大 onnx 切片。
 * 长音频：按窗从 AudioBuffer 重采样为 16 kHz 单声道再识别，避免整段 16 kHz PCM 常驻，并支持 AbortSignal。
 * 用法：
 *   import { createTranscriber, transcribeAudioBuffer } from '/vendor/whisper/whisper-loader.js';
 */
import { pipeline, env } from '/vendor/whisper/transformers.bundle.js';

/** 模型 id（与 manifest 一致）。 */
export const MODEL_ID = 'onnx-community/whisper-tiny';
/** 默认 dtype。 */
export const DEFAULT_DTYPE = 'q8';
/** Whisper 期望采样率（Hz）。 */
export const TARGET_SAMPLE_RATE = 16000;
/**
 * 外层滑窗时长（秒）。
 * 单窗内仍由 transformers.js 按 chunk_length_s≈30 再切；外窗用于限峰内存与进度/取消。
 */
export const DEFAULT_WINDOW_LENGTH_S = 120;
/** 相邻外窗重叠（秒）；后窗丢弃重叠区内的句段，避免边界重复。 */
export const DEFAULT_WINDOW_OVERLAP_S = 5;
/** ASR 内部块长（秒）。 */
export const DEFAULT_CHUNK_LENGTH_S = 30;
/** ASR 内部块步长重叠（秒）。 */
export const DEFAULT_STRIDE_LENGTH_S = 5;

/** 是否已完成 env 配置。 */
let configured = false;
/** 缓存的 ASR pipeline（已就绪）。 */
let cachedPipeline = null;
/** 进行中的加载 Promise（多调用方共享，避免重复 pipeline）。 */
let inflightLoad = null;
/**
 * 加载代数：Stop / 超时后递增，使迟到的成功结果被丢弃，便于重试。
 * @type {number}
 */
let loadGeneration = 0;
/**
 * 当前共享加载的无进度监听集合：预取/pipeline 进度时通知每一位 raceLoad 调用方。
 * @type {Set<() => void>}
 */
let sharedLoadActivityListeners = new Set();
/**
 * 通知所有无进度监听者重置计时。
 */
function notifyLoadActivity() {
	for (const fn of sharedLoadActivityListeners) {
		try {
			fn();
		} catch (_) {}
	}
}
/** 同域模型根路径（与 env.localModelPath + MODEL_ID 对齐）。 */
const MODEL_BASE = '/vendor/whisper/models/' + MODEL_ID + '/';
/** 默认加载超时（毫秒）：无进度达到此时长才判失败（非总时长上限）。 */
export const DEFAULT_LOAD_TIMEOUT_MS = 90000;
/** 预取时每收到多少字节就重置一次“无进度”计时（避免极慢流也每秒重置）。 */
const PROGRESS_BYTE_STEP = 256 * 1024;

/**
 * 配置 transformers.js：禁止远程、指定本地模型与 wasm 路径、切片 fetch。
 */
export function configureWhisperEnv() {
	if (configured) return;
	env.allowRemoteModels = false;
	env.allowLocalModels = true;
	env.localModelPath = '/vendor/whisper/models/';
	/* 强制走站内文件；避免损坏的 IndexedDB 缓存让 pipeline 静默挂起 */
	env.useBrowserCache = false;
	env.backends.onnx = env.backends.onnx || {};
	env.backends.onnx.wasm = env.backends.onnx.wasm || {};
	env.backends.onnx.wasm.wasmPaths = {
		mjs: '/vendor/whisper/ort-wasm-simd-threaded.mjs',
		wasm: '/vendor/whisper/ort-wasm-simd-threaded.wasm',
	};
	// 无 COOP/COEP 时多线程 WASM 不可用；固定 1，避免控制台警告。
	env.backends.onnx.wasm.numThreads = 1;
	const nativeFetch = globalThis.fetch.bind(globalThis);
	env.fetch = async (url, init) => {
		const href = typeof url === 'string' ? url : String(url);
		// 仅对切片过的 decoder 探测 .chunks.json，避免对 encoder 打 404。
		const chunksUrl = href.endsWith('decoder_model_merged_quantized.onnx') ? href + '.chunks.json' : null;
		if (chunksUrl) {
			const metaRes = await nativeFetch(chunksUrl, { cache: 'force-cache' }).catch(() => null);
			if (metaRes && metaRes.ok) {
				const meta = await metaRes.json();
				const baseDir = href.slice(0, href.lastIndexOf('/') + 1);
				const parts = [];
				for (const part of meta.parts) {
					const partRes = await nativeFetch(baseDir + part, init);
					if (!partRes.ok) throw new Error('Failed to fetch model chunk: ' + part);
					parts.push(new Uint8Array(await partRes.arrayBuffer()));
				}
				const total = parts.reduce((n, b) => n + b.byteLength, 0);
				const out = new Uint8Array(total);
				let offset = 0;
				for (const part of parts) {
					out.set(part, offset);
					offset += part.byteLength;
				}
				if (meta.size && total !== meta.size) {
					throw new Error('Chunked model size mismatch: got ' + total + ' expected ' + meta.size);
				}
				return new Response(out, {
					status: 200,
					headers: {
						'Content-Type': 'application/octet-stream',
						'Content-Length': String(total),
					},
				});
			}
		}
		return nativeFetch(url, init);
	};
	configured = true;
}

/**
 * 使进行中的模型加载结果作废，便于 Stop 后立刻重试。
 */
export function cancelWhisperLoad() {
	loadGeneration += 1;
	inflightLoad = null;
	sharedLoadActivityListeners.clear();
}

/**
 * 若 AbortSignal 已中止则抛 AbortError。
 * @param {AbortSignal | undefined | null} signal
 */
function throwIfAborted(signal) {
	if (signal && signal.aborted) {
		const err = new Error('aborted');
		err.name = 'AbortError';
		throw err;
	}
}

/**
 * 预取站内 Whisper 权重，尽早暴露网络/404，并向 HUD 汇报字节进度。
 * decoder 仅存切片（.part*），勿用原生 fetch 拉虚拟的合并 .onnx。
 * @param {(data: object) => void} [onProgress]
 * @param {AbortSignal | undefined} signal
 * @param {() => void} [onActivity] 有字节/文件进度时调用，用于重置无进度超时
 * @returns {Promise<void>}
 */
async function prefetchWhisperAssets(onProgress, signal, onActivity) {
	/** 相对 MODEL_BASE 的小配置文件。 */
	const smallFiles = [
		'config.json',
		'tokenizer.json',
		'tokenizer_config.json',
		'preprocessor_config.json',
		'generation_config.json',
	];
	/** 权重相对路径（encoder 整文件 + decoder 各切片）。 */
	const weightFiles = ['onnx/encoder_model_quantized.onnx'];
	const chunksMetaUrl = MODEL_BASE + 'onnx/decoder_model_merged_quantized.onnx.chunks.json';
	/** 已完成字节（估算进度用）。 */
	let loaded = 0;
	/** 粗估总量：约 45 MiB。 */
	const totalHint = 45 * 1024 * 1024;
	/**
	 * 上报进度并通知活动。
	 * @param {string} rel 相对路径
	 * @param {number} [fileLoaded] 单文件已读字节（流式）
	 * @param {number} [fileTotal] 单文件总字节
	 */
	function report(rel, fileLoaded, fileTotal) {
		if (typeof onActivity === 'function') onActivity();
		if (typeof onProgress !== 'function') return;
		onProgress({
			status: 'progress',
			file: rel,
			loaded: Math.min(loaded + (fileLoaded || 0), totalHint),
			total: totalHint,
			fileLoaded: fileLoaded,
			fileTotal: fileTotal,
		});
	}
	/**
	 * 流式拉取并累计进度。
	 * @param {string} rel 相对 MODEL_BASE 的路径
	 */
	async function pull(rel) {
		throwIfAborted(signal);
		report(rel, 0, 0);
		const res = await fetch(MODEL_BASE + rel, { cache: 'force-cache' });
		if (!res.ok) throw new Error('err_model');
		const contentLength = Number(res.headers.get('content-length') || 0);
		/** 本文件已读。 */
		let fileLoaded = 0;
		/** 上次触发活动的字节水位。 */
		let lastActive = 0;
		if (res.body && typeof res.body.getReader === 'function') {
			const reader = res.body.getReader();
			/** 分块缓冲。 */
			const chunks = [];
			for (;;) {
				throwIfAborted(signal);
				const { done, value } = await reader.read();
				if (done) break;
				chunks.push(value);
				fileLoaded += value.byteLength;
				if (fileLoaded - lastActive >= PROGRESS_BYTE_STEP || fileLoaded === contentLength) {
					lastActive = fileLoaded;
					report(rel, fileLoaded, contentLength || undefined);
				}
			}
			loaded += fileLoaded;
		} else {
			const buf = await res.arrayBuffer();
			fileLoaded = buf.byteLength;
			loaded += fileLoaded;
		}
		throwIfAborted(signal);
		report(rel, fileLoaded, fileLoaded);
	}
	for (const name of smallFiles) await pull(name);
	const metaRes = await fetch(chunksMetaUrl, { cache: 'force-cache' });
	if (!metaRes.ok) throw new Error('err_model');
	const meta = await metaRes.json();
	if (meta && Array.isArray(meta.parts)) {
		for (const part of meta.parts) weightFiles.push('onnx/' + part);
	}
	for (const name of weightFiles) await pull(name);
}

/**
 * 无进度超时：有活动则重置计时；Abort 时拒绝。
 * @template T
 * @param {Promise<T>} promise
 * @param {AbortSignal | undefined} signal
 * @param {number} timeoutMs 无活动达到此时长才失败
 * @returns {Promise<T>}
 */
function raceLoad(promise, signal, timeoutMs) {
	return new Promise((resolve, reject) => {
		/** @type {ReturnType<typeof setTimeout> | undefined} */
		let timer;
		/** @type {(() => void) | undefined} */
		let onAbort;
		/** 是否已结束。 */
		let settled = false;
		const idleMs = Math.max(5000, timeoutMs || DEFAULT_LOAD_TIMEOUT_MS);
		const arm = () => {
			if (timer) clearTimeout(timer);
			timer = setTimeout(() => {
				const err = new Error('err_model');
				err.code = 'err_model';
				fail(err);
			}, idleMs);
		};
		sharedLoadActivityListeners.add(arm);
		const cleanup = () => {
			if (timer) clearTimeout(timer);
			sharedLoadActivityListeners.delete(arm);
			if (signal && onAbort) signal.removeEventListener('abort', onAbort);
		};
		const fail = (err) => {
			if (settled) return;
			settled = true;
			cleanup();
			reject(err);
		};
		const ok = (v) => {
			if (settled) return;
			settled = true;
			cleanup();
			resolve(v);
		};
		arm();
		if (signal) {
			if (signal.aborted) {
				const err = new Error('aborted');
				err.name = 'AbortError';
				fail(err);
				return;
			}
			onAbort = () => {
				const err = new Error('aborted');
				err.name = 'AbortError';
				fail(err);
			};
			signal.addEventListener('abort', onAbort, { once: true });
		}
		promise.then(ok, fail);
	});
}

/**
 * 创建（或复用）ASR pipeline。
 * @param {(data: object) => void} [onProgress] transformers.js / 预取进度回调
 * @param {{ signal?: AbortSignal, timeoutMs?: number }} [opts] 可取消与超时
 * @returns {Promise<Function>}
 */
export async function createTranscriber(onProgress, opts = {}) {
	configureWhisperEnv();
	if (cachedPipeline) return cachedPipeline;
	/** @type {AbortSignal | undefined} */
	const signal = opts && opts.signal;
	const timeoutMs = (opts && opts.timeoutMs) || DEFAULT_LOAD_TIMEOUT_MS;
	throwIfAborted(signal);

	/** 本调用方绑定的代数（作废后忽略进度）。 */
	const gen = loadGeneration;
	/**
	 * 进度回调：本代数作废后忽略；有进度时重置无进度计时。
	 * @param {object} data
	 */
	function gatedProgress(data) {
		if (gen !== loadGeneration) return;
		notifyLoadActivity();
		if (typeof onProgress === 'function') onProgress(data);
	}

	if (!inflightLoad) {
		/** 本轮加载 Promise（finally 仅在仍是当前 inflight 时清空）。 */
		const p = (async () => {
			/* 预取不绑定某一调用方 signal，避免 A 取消拖死共享加载；代数负责作废 */
			await prefetchWhisperAssets(gatedProgress, undefined, notifyLoadActivity);
			if (gen !== loadGeneration) {
				const err = new Error('aborted');
				err.name = 'AbortError';
				throw err;
			}
			notifyLoadActivity();
			if (typeof onProgress === 'function' && gen === loadGeneration) {
				onProgress({ status: 'initiate', file: 'onnx-wasm' });
			}
			const asr = await pipeline('automatic-speech-recognition', MODEL_ID, {
				dtype: DEFAULT_DTYPE,
				device: 'wasm',
				progress_callback: gatedProgress,
			});
			if (gen !== loadGeneration) {
				const err = new Error('aborted');
				err.name = 'AbortError';
				throw err;
			}
			cachedPipeline = asr;
			return asr;
		})().finally(() => {
			if (inflightLoad === p) inflightLoad = null;
		});
		inflightLoad = p;
	}

	try {
		return await raceLoad(inflightLoad, signal, timeoutMs);
	} catch (e) {
		/* 调用方超时/取消：作废代数，允许下次重新加载 */
		if (e && (e.name === 'AbortError' || e.message === 'err_model' || e.code === 'err_model')) {
			cancelWhisperLoad();
		}
		throw e;
	}
}

/**
 * 让出事件循环，便于 HUD 刷新与取消响应。
 * @returns {Promise<void>}
 */
function yieldTick() {
	return new Promise((resolve) => setTimeout(resolve, 0));
}

/**
 * 把 AudioBuffer / Float32Array 转写为带句段时间戳的结果。
 *
 * **默认（兼容 POC / 未来工具）**：整段重采样为 16 kHz 单声道后一次 ASR（内部仍按 chunk_length_s≈30 切）。
 * **显式 `sliding_windows: true`（本站长文件页）**：外层按时间窗重采样，限峰内存，并支持 AbortSignal / onWindowProgress。
 *
 * @param {AudioBuffer | Float32Array | Float32Array[]} audio 16 kHz 单声道优先；AudioBuffer 会在内部重采样
 * @param {{
 *   language?: string,
 *   task?: 'transcribe' | 'translate',
 *   chunk_length_s?: number,
 *   stride_length_s?: number,
 *   sliding_windows?: boolean,
 *   window_length_s?: number,
 *   window_overlap_s?: number,
 *   condition_on_previous_text?: boolean,
 *   onProgress?: Function,
 *   onWindowProgress?: (info: { index: number, total: number, timeOffset: number, windowDuration: number }) => void,
 *   signal?: AbortSignal
 * }} [opts]
 * @returns {Promise<{ text: string, chunks: Array<{ text: string, timestamp: [number, number] }>, aborted?: boolean }>}
 */
export async function transcribeAudioBuffer(audio, opts = {}) {
	const asr = await createTranscriber(opts.onProgress);
	const chunkLengthS = opts.chunk_length_s ?? DEFAULT_CHUNK_LENGTH_S;
	const strideLengthS = opts.stride_length_s ?? DEFAULT_STRIDE_LENGTH_S;
	/** @type {AbortSignal | undefined} */
	const signal = opts.signal;

	throwIfAborted(signal);

	/** ASR 调用公共选项。 */
	const asrOpts = {
		return_timestamps: true,
		chunk_length_s: chunkLengthS,
		stride_length_s: strideLengthS,
		language: opts.language,
		task: opts.task || 'transcribe',
		// 默认关闭上文条件，减轻语种选错或短静音时的复读幻觉。
		condition_on_previous_text: opts.condition_on_previous_text ?? false,
	};

	const useSliding = opts.sliding_windows === true;
	const windowLengthS = opts.window_length_s ?? DEFAULT_WINDOW_LENGTH_S;
	const windowOverlapS = opts.window_overlap_s ?? DEFAULT_WINDOW_OVERLAP_S;

	// —— 默认兼容路径：整段一次 ASR（POC / 未开滑窗的调用方）——
	if (!useSliding) {
		/** @type {Float32Array | Float32Array[]} */
		let input = audio;
		if (typeof AudioBuffer !== 'undefined' && audio instanceof AudioBuffer) {
			input = downsampleToMono16k(audio);
		}
		throwIfAborted(signal);
		const result = await asr(input, asrOpts);
		throwIfAborted(signal);
		return normalizeAsrResult(result);
	}

	// —— 显式滑窗：仅长文件工具页开启 ——
	if (!(typeof AudioBuffer !== 'undefined' && audio instanceof AudioBuffer)) {
		return transcribePcmWindows(asr, audio, {
			asrOpts,
			windowLengthS,
			windowOverlapS,
			signal,
			onWindowProgress: opts.onWindowProgress,
		});
	}

	/** @type {AudioBuffer} */
	const buffer = audio;
	const duration = buffer.duration;
	if (!Number.isFinite(duration) || duration <= 0) {
		return { text: '', chunks: [] };
	}

	// 短于约 1.2 窗：单次重采样整段即可（样例与短备忘）。
	if (duration <= windowLengthS * 1.2) {
		throwIfAborted(signal);
		const pcm = downsampleToMono16k(buffer);
		throwIfAborted(signal);
		const result = await asr(pcm, asrOpts);
		throwIfAborted(signal);
		return normalizeAsrResult(result);
	}

	return transcribeAudioBufferWindows(asr, buffer, {
		asrOpts,
		windowLengthS,
		windowOverlapS,
		signal,
		onWindowProgress: opts.onWindowProgress,
	});
}

/**
 * 对已是 PCM 的输入做外层滑窗转写。
 * @param {Function} asr
 * @param {Float32Array | Float32Array[]} audio
 * @param {object} ctx
 * @returns {Promise<{ text: string, chunks: Array<{ text: string, timestamp: [number, number] }>, aborted?: boolean }>}
 */
async function transcribePcmWindows(asr, audio, ctx) {
	const { asrOpts, windowLengthS, windowOverlapS, signal, onWindowProgress } = ctx;
	/** @type {Float32Array} */
	const pcm = Array.isArray(audio) ? mixDownChannels(audio) : audio;
	const windowSamples = Math.max(1, Math.round(windowLengthS * TARGET_SAMPLE_RATE));
	const overlapSamples = Math.max(0, Math.round(windowOverlapS * TARGET_SAMPLE_RATE));
	const stepSamples = Math.max(1, windowSamples - overlapSamples);
	const totalSamples = pcm.length;
	const duration = totalSamples / TARGET_SAMPLE_RATE;

	if (duration <= windowLengthS * 1.2) {
		throwIfAborted(signal);
		const result = await asr(pcm, asrOpts);
		throwIfAborted(signal);
		return normalizeAsrResult(result);
	}

	const totalWindows = Math.max(1, Math.ceil((totalSamples - overlapSamples) / stepSamples));
	/** @type {Array<{ text: string, timestamp: [number, number] }>} */
	const merged = [];
	let aborted = false;
	let offset = 0;
	let index = 0;

	while (offset < totalSamples) {
		try {
			throwIfAborted(signal);
		} catch (e) {
			aborted = true;
			break;
		}
		const end = Math.min(offset + windowSamples, totalSamples);
		const timeOffset = offset / TARGET_SAMPLE_RATE;
		const windowDuration = (end - offset) / TARGET_SAMPLE_RATE;
		if (typeof onWindowProgress === 'function') {
			onWindowProgress({ index, total: totalWindows, timeOffset, windowDuration });
		}
		await yieldTick();
		const slice = pcm.subarray(offset, end);
		let result;
		try {
			result = await asr(slice, asrOpts);
		} catch (e) {
			if (signal && signal.aborted) {
				aborted = true;
				break;
			}
			throw e;
		}
		appendWindowChunks(merged, result, {
			timeOffset,
			dropLeadingOverlapS: index === 0 ? 0 : windowOverlapS,
		});
		index += 1;
		if (signal && signal.aborted) {
			aborted = true;
			break;
		}
		if (end >= totalSamples) break;
		offset += stepSamples;
		await yieldTick();
	}

	return {
		text: merged.map((c) => c.text).join(' ').trim(),
		chunks: merged,
		aborted,
	};
}

/**
 * 从 AudioBuffer 按时间窗重采样并转写（不分配整段 16 kHz PCM）。
 * @param {Function} asr
 * @param {AudioBuffer} buffer
 * @param {object} ctx
 * @returns {Promise<{ text: string, chunks: Array<{ text: string, timestamp: [number, number] }>, aborted?: boolean }>}
 */
async function transcribeAudioBufferWindows(asr, buffer, ctx) {
	const { asrOpts, windowLengthS, windowOverlapS, signal, onWindowProgress } = ctx;
	const duration = buffer.duration;
	const stepS = Math.max(0.5, windowLengthS - windowOverlapS);
	const totalWindows = Math.max(1, Math.ceil((duration - windowOverlapS) / stepS));
	/** @type {Array<{ text: string, timestamp: [number, number] }>} */
	const merged = [];
	let aborted = false;
	let index = 0;

	for (let timeOffset = 0; timeOffset < duration; timeOffset += stepS) {
		try {
			throwIfAborted(signal);
		} catch (_) {
			aborted = true;
			break;
		}
		const windowEnd = Math.min(timeOffset + windowLengthS, duration);
		const windowDuration = windowEnd - timeOffset;
		if (typeof onWindowProgress === 'function') {
			onWindowProgress({ index, total: totalWindows, timeOffset, windowDuration });
		}
		await yieldTick();
		const pcm = downsampleRegionToMono16k(buffer, timeOffset, windowEnd);
		let result;
		try {
			throwIfAborted(signal);
			result = await asr(pcm, asrOpts);
		} catch (e) {
			if (signal && signal.aborted) {
				aborted = true;
				break;
			}
			throw e;
		}
		appendWindowChunks(merged, result, {
			timeOffset,
			dropLeadingOverlapS: index === 0 ? 0 : windowOverlapS,
		});
		index += 1;
		if (signal && signal.aborted) {
			aborted = true;
			break;
		}
		if (windowEnd >= duration - 0.001) break;
		await yieldTick();
	}

	return {
		text: merged.map((c) => c.text).join(' ').trim(),
		chunks: merged,
		aborted,
	};
}

/**
 * 把一窗 ASR 结果并入总列表（后窗丢掉重叠头，避免重复字幕）。
 * @param {Array<{ text: string, timestamp: [number, number] }>} merged
 * @param {{ chunks?: Array<{ text: string, timestamp: [number, number|null] }>, text?: string }} result
 * @param {{ timeOffset: number, dropLeadingOverlapS: number }} meta
 */
function appendWindowChunks(merged, result, meta) {
	const { timeOffset, dropLeadingOverlapS } = meta;
	const chunks = (result && result.chunks) || [];
	for (const chunk of chunks) {
		const text = String(chunk.text || '').trim();
		if (!text) continue;
		const relStart = Number(chunk.timestamp?.[0] ?? 0);
		if (dropLeadingOverlapS > 0 && relStart < dropLeadingOverlapS - 0.05) continue;
		let relEnd = chunk.timestamp?.[1];
		if (relEnd == null || Number.isNaN(Number(relEnd))) relEnd = relStart + 2;
		relEnd = Number(relEnd);
		if (relEnd <= relStart) relEnd = relStart + 0.5;
		merged.push({
			text,
			timestamp: [timeOffset + relStart, timeOffset + relEnd],
		});
	}
}

/**
 * 统一 ASR 短结果形状。
 * @param {{ text?: string, chunks?: Array<{ text: string, timestamp: [number, number|null] }> }} result
 * @returns {{ text: string, chunks: Array<{ text: string, timestamp: [number, number] }> }}
 */
function normalizeAsrResult(result) {
	const chunks = [];
	for (const chunk of (result && result.chunks) || []) {
		const text = String(chunk.text || '').trim();
		if (!text) continue;
		const start = Number(chunk.timestamp?.[0] ?? 0);
		let end = chunk.timestamp?.[1];
		if (end == null || Number.isNaN(Number(end))) end = start + 2;
		end = Number(end);
		if (end <= start) end = start + 0.5;
		chunks.push({ text, timestamp: [start, end] });
	}
	return {
		text: String((result && result.text) || chunks.map((c) => c.text).join(' ')).trim(),
		chunks,
	};
}

/**
 * 多声道 Float32Array[] → 单声道。
 * @param {Float32Array[]} channels
 * @returns {Float32Array}
 */
function mixDownChannels(channels) {
	if (!channels || !channels.length) return new Float32Array(0);
	if (channels.length === 1) return channels[0];
	const length = channels[0].length;
	const mixed = new Float32Array(length);
	const n = channels.length;
	for (let c = 0; c < n; c++) {
		const data = channels[c];
		for (let i = 0; i < length; i++) mixed[i] += data[i] / n;
	}
	return mixed;
}

/**
 * AudioBuffer → 整段 16 kHz 单声道 Float32Array（短音频路径）。
 * @param {AudioBuffer} buffer
 * @returns {Float32Array}
 */
export function downsampleToMono16k(buffer) {
	return downsampleRegionToMono16k(buffer, 0, buffer.duration);
}

/**
 * 只重采样 AudioBuffer 的一段时间窗 → 16 kHz 单声道（长音频滑窗用）。
 * @param {AudioBuffer} buffer 源缓冲
 * @param {number} startSec 窗起点（秒）
 * @param {number} endSec 窗终点（秒）
 * @returns {Float32Array}
 */
export function downsampleRegionToMono16k(buffer, startSec, endSec) {
	const targetRate = TARGET_SAMPLE_RATE;
	const srcRate = buffer.sampleRate;
	const channels = buffer.numberOfChannels;
	const startSample = Math.max(0, Math.floor(startSec * srcRate));
	const endSample = Math.min(buffer.length, Math.ceil(endSec * srcRate));
	const length = Math.max(0, endSample - startSample);
	if (length <= 0) return new Float32Array(0);

	const mixed = new Float32Array(length);
	for (let c = 0; c < channels; c++) {
		const data = buffer.getChannelData(c);
		for (let i = 0; i < length; i++) mixed[i] += data[startSample + i] / channels;
	}
	if (srcRate === targetRate) return mixed;

	const ratio = srcRate / targetRate;
	const newLen = Math.max(1, Math.round(length / ratio));
	const out = new Float32Array(newLen);
	for (let i = 0; i < newLen; i++) {
		const src = i * ratio;
		const i0 = Math.floor(src);
		const i1 = Math.min(i0 + 1, length - 1);
		const t = src - i0;
		out[i] = mixed[i0] * (1 - t) + mixed[i1] * t;
	}
	return out;
}

/**
 * 把句段 chunks 格式化为 SRT 文本。
 * @param {Array<{ text: string, timestamp: [number, number|null] }>} chunks
 * @returns {string}
 */
export function chunksToSrt(chunks) {
	const lines = [];
	let index = 1;
	for (const chunk of chunks || []) {
		const text = String(chunk.text || '').trim();
		if (!text) continue;
		const start = Number(chunk.timestamp?.[0] ?? 0);
		let end = chunk.timestamp?.[1];
		if (end == null || Number.isNaN(Number(end))) end = start + 2;
		end = Number(end);
		if (end <= start) end = start + 0.5;
		lines.push(String(index++));
		lines.push(formatSrtTime(start) + ' --> ' + formatSrtTime(end));
		lines.push(text);
		lines.push('');
	}
	return lines.join('\n');
}

/**
 * 秒 → SRT 时间码 HH:MM:SS,mmm。
 * @param {number} seconds
 * @returns {string}
 */
function formatSrtTime(seconds) {
	const msTotal = Math.max(0, Math.round(seconds * 1000));
	const ms = msTotal % 1000;
	const sTotal = Math.floor(msTotal / 1000);
	const s = sTotal % 60;
	const mTotal = Math.floor(sTotal / 60);
	const m = mTotal % 60;
	const h = Math.floor(mTotal / 60);
	const pad = (n, w) => String(n).padStart(w, '0');
	return pad(h, 2) + ':' + pad(m, 2) + ':' + pad(s, 2) + ',' + pad(ms, 3);
}
