/**
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

/** Read the primary tracks without decoding the full file. */
export async function inspectVideoFile(file) {
	const mb = await loadMediabunny();
	const input = new mb.Input({
		source: new mb.BlobSource(file, { maxCacheSize: BLOB_CACHE_BYTES }),
		formats: mb.ALL_FORMATS,
	});
	try {
		const video = await input.getPrimaryVideoTrack();
		if (!video) {
			const err = new Error('err_container');
			err.code = 'err_container';
			throw err;
		}
		const audio = await input.getPrimaryAudioTrack();
		const [videoCodec, audioCodec, width, height, duration, mimeType, canDecodeVideo, canDecodeAudio] = await Promise.all([
			video.getCodec(),
			audio ? audio.getCodec() : Promise.resolve(null),
			video.getDisplayWidth(),
			video.getDisplayHeight(),
			video.getDurationFromMetadata(),
			input.getMimeType(),
			video.canDecode(),
			audio ? audio.canDecode() : Promise.resolve(true),
		]);
		return {
			videoCodec: videoCodec || 'unknown',
			audioCodec: audioCodec || 'none',
			width,
			height,
			duration: duration || 0,
			mimeType,
			canDecodeVideo,
			canDecodeAudio,
			canEncodeAvc: await mb.canEncodeVideo('avc', { width, height }),
			canEncodeVp9: await mb.canEncodeVideo('vp9', { width, height }),
			canEncodeOpus: await mb.canEncodeAudio('opus'),
		};
	} finally {
		input.dispose();
	}
}

/**
 * 在 OPFS 中创建可随机定位写入的 StreamTarget 汇聚器。
 * @param {any} mb mediabunny 模块
 * @param {string} baseName 建议文件名（会加时间戳）
 * @param {'mp4'|'webm'} [extension] 目标容器扩展名
 * @returns {Promise<{
 *   target: any,
 *   finalize: () => Promise<Blob>,
 *   cleanup: () => Promise<void>,
 * }>}
 */
export async function openOpfsStreamTarget(mb, baseName, extension = 'mp4') {
	const root = await navigator.storage.getDirectory();
	const dir = await root.getDirectoryHandle(OPFS_DIR, { create: true });
	const safe = String(baseName || 'out').replace(/[^a-zA-Z0-9._-]+/g, '_').slice(0, 48);
	const name = safe + '-' + Date.now() + '-' + Math.random().toString(36).slice(2, 8) + '.' + extension;
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
 * 将本地媒体 File/Blob 转为 MP4（默认 AAC）或显式指定的 VP9/Opus WebM。
 * 多 GiB：OPFS 流式写出；小文件：内存 BufferTarget。
 * @param {File|Blob} file 输入 MKV
 * @param {{
 *   numberOfChannels?: number,
 *   quality?: 'low'|'medium'|'high',
 *   videoCodec?: string,
 *   videoWidth?: number,
 *   videoHeight?: number,
 *   videoBitrate?: number,
 *   videoProcess?: (sample: any) => CanvasImageSource | any,
 *   videoRotate?: 0|90|180|270,
 *   bakeVideoRotation?: boolean,
 *   playbackRate?: number,
 *   muteAudio?: boolean,
 *   preserveAudioPitch?: boolean,
 *   outputFormat?: 'mp4'|'webm',
 *   preferOpfs?: boolean,
 *   requireOpfs?: boolean,
 *   keepOpfsOutput?: boolean,
 *   trim?: { start: number, end: number },
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
	const toWebm = opts.outputFormat === 'webm';
	const caps = await getConvertCapabilities();
	const size = file && typeof file.size === 'number' ? file.size : 0;
	if (opts.trim && (!(opts.trim.start >= 0) || !(opts.trim.end > opts.trim.start) || !Number.isFinite(opts.trim.end))) {
		const err = new Error('err_range');
		err.code = 'err_range';
		throw err;
	}
	if (size > caps.maxBytes) {
		const err = new Error('err_limit');
		err.code = 'err_limit';
		throw err;
	}
	if ((opts.preferOpfs && size > SMALL_BUFFER_MAX_BYTES || opts.requireOpfs) && !caps.opfs) {
		const err = new Error('err_limit');
		err.code = 'err_limit';
		throw err;
	}

	const channels = opts.numberOfChannels === 1 ? 1 : 2;
	const playbackRate = Number.isFinite(opts.playbackRate) ? Number(opts.playbackRate) : 1;
	if (opts.muteAudio && opts.preserveAudioPitch) {
		const err = new Error('err_settings');
		err.code = 'err_settings';
		throw err;
	}
	if (playbackRate < 0.5 || playbackRate > 2) {
		const err = new Error('err_settings');
		err.code = 'err_settings';
		throw err;
	}
	const qualityMap = {
		low: mb.QUALITY_LOW,
		medium: mb.QUALITY_MEDIUM,
		high: mb.QUALITY_HIGH,
	};
	const quality = qualityMap[opts.quality || 'high'] || mb.QUALITY_HIGH;

	const useOpfs = caps.opfs && (opts.preferOpfs || size > SMALL_BUFFER_MAX_BYTES);
	/** @type {{ target: any, finalize?: () => Promise<Blob>, cleanup?: () => Promise<void> } | null} */
	let sink = null;
	/** @type {any} */
	let target;
	/** @type {'opfs'|'memory'} */
	let via = 'memory';

	if (useOpfs) {
		try {
			sink = await openOpfsStreamTarget(mb, (file && file.name) || 'mkv', toWebm ? 'webm' : 'mp4');
			target = sink.target;
			via = 'opfs';
		} catch {
			/* 显式 OPFS 大任务不可回退到 BufferTarget：目标可能远大于输入。 */
			if (opts.requireOpfs || opts.preferOpfs && size > SMALL_BUFFER_MAX_BYTES) {
				const err = new Error('err_encoder');
				err.code = 'err_encoder';
				throw err;
			}
			/* 旧调用的小文件仍可回退；若超无 OPFS 上限则拒绝 */
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
		format: toWebm ? new mb.WebMOutputFormat() : new mb.Mp4OutputFormat({
			/* OPFS/StreamTarget：false 把 moov 放末尾，可随机写；避免 reserve 需 maximumPacketCount */
			fastStart: via === 'opfs' ? false : 'in-memory',
		}),
		target,
	});
	let preservedAudio = null;
	try {
		if (opts.preserveAudioPitch && playbackRate !== 1 && !opts.muteAudio) {
			preservedAudio = await preparePitchPreservedAudio(mb, input, playbackRate, opts.signal, opts.onProgress);
		}
	} catch (error) {
		if (sink && sink.cleanup) await sink.cleanup().catch(() => {});
		throw error;
	}

	const conversion = await mb.Conversion.init({
		input,
		output,
		trim: opts.trim,
		video: opts.videoCodec === 'avc' || opts.videoCodec === 'vp9' ? {
			codec: opts.videoCodec,
			...(Number.isInteger(opts.videoWidth) && opts.videoWidth > 0 ? { width: opts.videoWidth } : {}),
			...(Number.isInteger(opts.videoHeight) && opts.videoHeight > 0 ? { height: opts.videoHeight } : {}),
			...(Number.isFinite(opts.videoBitrate) && opts.videoBitrate > 0 ? { bitrate: opts.videoBitrate } : {}),
			...([0, 90, 180, 270].includes(opts.videoRotate) ? { rotate: opts.videoRotate } : {}),
			...(opts.bakeVideoRotation ? { allowTransformationMetadata: false } : {}),
			...(opts.videoProcess || playbackRate !== 1 ? { process: (sample) => {
				if (playbackRate !== 1) {
					sample.setTimestamp(sample.timestamp / playbackRate);
					sample.setDuration(sample.duration / playbackRate);
				}
				return opts.videoProcess ? opts.videoProcess(sample) : sample;
			} } : {}),
			...(Number.isFinite(opts.videoBitrate) && opts.videoBitrate > 0 ? {} : { quality }),
			forceTranscode: true,
		} : undefined,
		audio: opts.muteAudio ? { discard: true } : {
			codec: toWebm ? 'opus' : 'aac',
			numberOfChannels: preservedAudio ? preservedAudio.numberOfChannels : channels,
			...(preservedAudio ? { sampleRate: preservedAudio.sampleRate } : {}),
			quality,
			forceTranscode: true,
			...(preservedAudio ? { process: (sample) => preservedAudio.next(sample) } : playbackRate !== 1 ? { process: (sample) => {
				const source = sample.toAudioBuffer();
				const frames = Math.max(1, Math.round(source.length / playbackRate));
				const out = new AudioBuffer({
					numberOfChannels: source.numberOfChannels,
					length: frames,
					sampleRate: source.sampleRate,
				});
				for (let channel = 0; channel < source.numberOfChannels; channel++) {
					const inputData = source.getChannelData(channel);
					const outputData = out.getChannelData(channel);
					for (let i = 0; i < frames; i++) {
						const at = Math.min(inputData.length - 1, i * playbackRate);
						const lo = Math.floor(at);
						const hi = Math.min(inputData.length - 1, lo + 1);
						const mix = at - lo;
						outputData[i] = inputData[lo] * (1 - mix) + inputData[hi] * mix;
					}
				}
				return mb.AudioSample.fromAudioBuffer(out, sample.timestamp / playbackRate);
			} } : {}),
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
				opts.onProgress(preservedAudio ? 0.25 + (Number(ratio) || 0) * 0.75 : Number(ratio) || 0);
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
		if (blob.size <= SMALL_BUFFER_MAX_BYTES && !opts.keepOpfsOutput) {
			const ab = await blob.arrayBuffer();
			blob = new Blob([ab], { type: toWebm ? 'video/webm' : 'video/mp4' });
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
		blob = new Blob([buffer], { type: toWebm ? 'video/webm' : 'video/mp4' });
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

/** Encode an MP4 source as real VP9/Opus WebM using the same bounded OPFS path. */
export async function convertMp4ToWebm(file, opts = {}) {
	return convertMkvToMp4(file, { ...opts, outputFormat: 'webm', videoCodec: 'vp9' });
}

/** Trim one decodable video interval into H.264/AAC MP4. Non-zero starts require transcoding. */
export async function trimVideoClipToMp4(file, opts = {}) {
	return convertMkvToMp4(file, { ...opts, outputFormat: 'mp4', videoCodec: 'avc', trim: { start: opts.start, end: opts.end } });
}

export { loadMediabunny };

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
