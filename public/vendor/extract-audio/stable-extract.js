/**
 * 本机视频抽音轨（稳内存）：
 * 1) 短小文件 → decodeAudioData（可 WAV/MP3）
 * 2) MP4/MOV/M4V 大文件 → TypedArray 索引 + File.slice 单包 + WebCodecs → OPFS/内存汇聚流式 lame MP3
 * 3) 其它容器大文件 → MediaElement 流式 MP3（回退；上限更紧）
 *
 * 挂到 window.OftExtractAudio。页面须先可加载 /vendor/lamejs/lamejs.iife.js；
 * WebCodecs 路径会懒加载 /vendor/extract-audio/mp4box.all.iife.js。
 */
(function (global) {
	'use strict';

	/** 小文件整段解码体积上限（字节）。 */
	var DECODE_MAX_BYTES = 40 * 1024 * 1024;
	/** 小文件整段解码时长上限（秒）。 */
	var DECODE_MAX_DURATION = 15 * 60;
	/**
	 * WebCodecs demux + OPFS 流式写出时的体积硬上限（字节）：约 5 GiB。
	 * 索引用 TypedArray；MP3 写入 OPFS，峰值不是整段 PCM/整段 mdat。
	 */
	var HARD_MAX_BYTES = 5 * 1024 * 1024 * 1024;
	/**
	 * 无 OPFS 时 demux 路径体积上限（字节）：约 1 GiB（MP3 仍在内存汇聚）。
	 */
	var HARD_MAX_BYTES_NO_OPFS = 1024 * 1024 * 1024;
	/** 硬上限时长（秒）：约 6 小时（与体积分限）。 */
	var HARD_MAX_DURATION = 6 * 60 * 60;
	/**
	 * MediaElement 回退路径上限（非 MP4 或 WebCodecs 不可用时）。
	 * 仍受实时播放约束，故低于硬上限。
	 */
	var STREAM_FALLBACK_BYTES = 500 * 1024 * 1024;
	/** MediaElement 回退时长上限（秒）。 */
	var STREAM_FALLBACK_DURATION = 4 * 60 * 60;
	/** 批量最多文件数。 */
	var BATCH_MAX_FILES = 30;
	/** MediaElement 流式倍速。 */
	var STREAM_PLAYBACK_RATE = 2;
	/** 向 mp4box 追加的分片大小（字节）。 */
	var MP4_FEED_CHUNK = 2 * 1024 * 1024;
	/** 内存汇聚时，每满此字节打成一个 Blob，降低小片段数量。 */
	var MEM_BLOB_COALESCE = 2 * 1024 * 1024;
	/** mp4box IIFE 路径。 */
	var MP4BOX_SRC = '/vendor/extract-audio/mp4box.all.iife.js';

	/**
	 * 一次 OPFS 失败后（或自动化 WebDriver 下）改走内存汇聚。
	 * Headless Chrome 的 OPFS 在连续 demux 时偶发 NotFoundError，自动化默认内存 sink。
	 */
	var forceMemorySink = !!(global.navigator && global.navigator.webdriver);

	/**
	 * 是否可用 Origin Private File System 流式写出。
	 * @returns {boolean}
	 */
	function supportsOpfs() {
		if (forceMemorySink) return false;
		try {
			return !!(
				global.navigator &&
				global.navigator.storage &&
				typeof global.navigator.storage.getDirectory === 'function'
			);
		} catch (_) {
			return false;
		}
	}

	/**
	 * 判定是否为 OPFS/文件句柄丢失类错误。
	 * @param {any} e
	 * @returns {boolean}
	 */
	function isOpfsGoneError(e) {
		if (!e) return false;
		var name = e.name || '';
		var msg = String(e.message || '');
		return name === 'NotFoundError' || name === 'InvalidStateError' || /could not be found|not found/i.test(msg);
	}

	/**
	 * 创建 MP3 写出汇聚器：优先 OPFS WritableStream，否则内存 Blob 汇聚。
	 * @returns {Promise<{kind:string, write:Function, finalize:Function, abort:Function}>}
	 */
	async function createMp3Sink() {
		if (supportsOpfs()) {
			try {
				var root = await global.navigator.storage.getDirectory();
				var dir = await root.getDirectoryHandle('oft-extract-audio', { create: true });
				var name = 'out-' + Date.now() + '-' + Math.random().toString(36).slice(2, 8) + '.mp3';
				var fh = await dir.getFileHandle(name, { create: true });
				var writable = await fh.createWritable();
				return {
					kind: 'opfs',
					/**
					 * @param {Uint8Array} u8
					 * @returns {Promise<void>}
					 */
					write: function (u8) {
						if (!u8 || !u8.length) return Promise.resolve();
						return writable.write(u8);
					},
					/**
					 * @returns {Promise<Blob>}
					 */
					finalize: async function () {
						await writable.close();
						var file = await fh.getFile();
						var blob = file.slice(0, file.size, 'audio/mpeg');
						try {
							await dir.removeEntry(name);
						} catch (_) {}
						return blob;
					},
					/**
					 * @returns {Promise<void>}
					 */
					abort: async function () {
						try {
							await writable.abort();
						} catch (_) {}
						try {
							await dir.removeEntry(name);
						} catch (_) {}
					},
				};
			} catch (e) {
				forceMemorySink = true;
				/* fall through to memory */
			}
		}

		/** @type {Blob[]} */
		var chunks = [];
		/** @type {Uint8Array[]} */
		var buf = [];
		var bufBytes = 0;
		return {
			kind: 'memory',
			/**
			 * @param {Uint8Array} u8
			 * @returns {Promise<void>}
			 */
			write: function (u8) {
				if (!u8 || !u8.length) return Promise.resolve();
				buf.push(u8);
				bufBytes += u8.length;
				if (bufBytes >= MEM_BLOB_COALESCE) {
					chunks.push(new Blob(buf));
					buf = [];
					bufBytes = 0;
				}
				return Promise.resolve();
			},
			/**
			 * @returns {Promise<Blob>}
			 */
			finalize: async function () {
				if (buf.length) {
					chunks.push(new Blob(buf));
					buf = [];
					bufBytes = 0;
				}
				return new Blob(chunks, { type: 'audio/mpeg' });
			},
			/**
			 * @returns {Promise<void>}
			 */
			abort: async function () {
				chunks = [];
				buf = [];
				bufBytes = 0;
			},
		};
	}

	/** @type {Promise<any>|null} */
	var mp4boxPromise = null;

	/**
	 * 让出主线程，便于刷新 HUD。
	 * @returns {Promise<void>}
	 */
	function yieldUi() {
		return new Promise(function (resolve) {
			requestAnimationFrame(function () {
				setTimeout(resolve, 0);
			});
		});
	}

	/**
	 * 若 AbortSignal 已中止则抛错。
	 * @param {AbortSignal|undefined} signal
	 */
	function throwIfAborted(signal) {
		if (signal && signal.aborted) {
			var err = new Error('aborted');
			err.name = 'AbortError';
			throw err;
		}
	}

	/**
	 * Float32 → Int16 PCM。
	 * @param {Float32Array} input
	 * @returns {Int16Array}
	 */
	function toInt16(input) {
		var out = new Int16Array(input.length);
		for (var i = 0; i < input.length; i++) {
			var s = Math.max(-1, Math.min(1, input[i]));
			out[i] = s < 0 ? s * 0x8000 : s * 0x7fff;
		}
		return out;
	}

	/**
	 * 是否为 ISOBMFF 系（可用 mp4box demux）。
	 * @param {File} file
	 * @returns {boolean}
	 */
	function isIsoBmff(file) {
		if (!file) return false;
		var n = String(file.name || '').toLowerCase();
		if (/\.(mp4|m4v|mov|m4a)$/.test(n)) return true;
		var t = String(file.type || '').toLowerCase();
		return (
			t === 'video/mp4' ||
			t === 'video/quicktime' ||
			t === 'audio/mp4' ||
			t === 'audio/x-m4a'
		);
	}

	/**
	 * 是否为可尝试 MediaElement 回退的常见容器（非 demux 主路径）。
	 * @param {File} file
	 * @returns {boolean}
	 */
	function isFallbackContainer(file) {
		if (!file) return false;
		if (isIsoBmff(file)) return false;
		var n = String(file.name || '').toLowerCase();
		if (/\.(webm|mkv|avi|mpeg|mpg|ogv)$/.test(n)) return true;
		var t = String(file.type || '').toLowerCase();
		return (
			t === 'video/webm' ||
			t === 'video/x-matroska' ||
			t === 'video/avi' ||
			t === 'video/mpeg' ||
			t === 'video/ogg' ||
			t.indexOf('video/') === 0
		);
	}

	/**
	 * 文件选择器 accept 字符串（总闸：引擎当前愿意尝试的类型）。
	 * @returns {string}
	 */
	function supportedAccept() {
		return 'video/*,.mp4,.m4v,.mov,.m4a,.webm,.mkv,video/mp4,video/webm,video/quicktime,video/x-matroska';
	}

	/**
	 * 运行时能力快照（页面 accept / 文案 / 预检共用）。
	 * @returns {{
	 *   accept: string,
	 *   opfs: boolean,
	 *   demuxMaxBytes: number,
	 *   demuxMaxBytesNoOpfs: number,
	 *   demuxMaxDuration: number,
	 *   fallbackMaxBytes: number,
	 *   fallbackMaxDuration: number,
	 *   decodeMaxBytes: number,
	 *   batchMaxFiles: number,
	 *   demuxExts: string[],
	 *   paths: {demux:string, fallback:string, decode:string}
	 * }}
	 */
	function getCapabilities() {
		var opfs = supportsOpfs();
		return {
			accept: supportedAccept(),
			opfs: opfs,
			demuxMaxBytes: opfs ? HARD_MAX_BYTES : HARD_MAX_BYTES_NO_OPFS,
			demuxMaxBytesNoOpfs: HARD_MAX_BYTES_NO_OPFS,
			demuxMaxBytesWithOpfs: HARD_MAX_BYTES,
			demuxMaxDuration: HARD_MAX_DURATION,
			fallbackMaxBytes: STREAM_FALLBACK_BYTES,
			fallbackMaxDuration: STREAM_FALLBACK_DURATION,
			decodeMaxBytes: DECODE_MAX_BYTES,
			decodeMaxDuration: DECODE_MAX_DURATION,
			batchMaxFiles: BATCH_MAX_FILES,
			demuxExts: ['.mp4', '.m4v', '.mov', '.m4a'],
			fallbackExts: ['.webm', '.mkv', '.avi', '.mpeg', '.mpg', '.ogv'],
			paths: {
				demux: 'ISOBMFF + WebCodecs + OPFS/memory sink',
				fallback: 'MediaElement stream MP3',
				decode: 'decodeAudioData (small files)',
			},
		};
	}

	/**
	 * 分类文件应走哪条路径及是否直接拒绝。
	 * @param {File} file
	 * @returns {{
	 *   path: 'decode'|'demux'|'fallback'|'reject',
	 *   reason: string,
	 *   maxBytes: number,
	 *   maxDuration: number,
	 *   container: 'isobmff'|'fallback'|'unknown'
	 * }}
	 */
	function classifyFile(file) {
		if (!file) {
			return {
				path: 'reject',
				reason: 'err_file',
				maxBytes: 0,
				maxDuration: 0,
				container: 'unknown',
			};
		}
		var opfs = supportsOpfs();
		var demuxCap = opfs ? HARD_MAX_BYTES : HARD_MAX_BYTES_NO_OPFS;
		if (isIsoBmff(file)) {
			if (file.size > demuxCap) {
				return {
					path: 'reject',
					reason: 'err_limit',
					maxBytes: demuxCap,
					maxDuration: HARD_MAX_DURATION,
					container: 'isobmff',
				};
			}
			if (file.size <= DECODE_MAX_BYTES) {
				return {
					path: 'decode',
					reason: 'ok_small',
					maxBytes: DECODE_MAX_BYTES,
					maxDuration: DECODE_MAX_DURATION,
					container: 'isobmff',
				};
			}
			return {
				path: 'demux',
				reason: 'ok_demux',
				maxBytes: demuxCap,
				maxDuration: HARD_MAX_DURATION,
				container: 'isobmff',
			};
		}
		if (isFallbackContainer(file) || (file.type && String(file.type).indexOf('video/') === 0)) {
			if (file.size > STREAM_FALLBACK_BYTES) {
				return {
					path: 'reject',
					reason: 'err_container',
					maxBytes: STREAM_FALLBACK_BYTES,
					maxDuration: STREAM_FALLBACK_DURATION,
					container: 'fallback',
				};
			}
			if (file.size <= DECODE_MAX_BYTES) {
				return {
					path: 'decode',
					reason: 'ok_small',
					maxBytes: DECODE_MAX_BYTES,
					maxDuration: DECODE_MAX_DURATION,
					container: 'fallback',
				};
			}
			return {
				path: 'fallback',
				reason: 'ok_fallback',
				maxBytes: STREAM_FALLBACK_BYTES,
				maxDuration: STREAM_FALLBACK_DURATION,
				container: 'fallback',
			};
		}
		return {
			path: 'reject',
			reason: 'err_container',
			maxBytes: 0,
			maxDuration: 0,
			container: 'unknown',
		};
	}

	/**
	 * 懒加载 mp4box IIFE → window.MP4BoxNS。
	 * @returns {Promise<any>}
	 */
	function loadMp4Box() {
		if (global.MP4BoxNS && typeof global.MP4BoxNS.createFile === 'function') {
			return Promise.resolve(global.MP4BoxNS);
		}
		if (!mp4boxPromise) {
			mp4boxPromise = new Promise(function (resolve, reject) {
				var script = document.createElement('script');
				var done = false;
				/**
				 * 失败清理。
				 */
				function bad() {
					if (done) return;
					done = true;
					script.remove();
					mp4boxPromise = null;
					reject(new Error('err_encoder'));
				}
				script.src = MP4BOX_SRC;
				script.async = true;
				script.onerror = bad;
				script.onload = function () {
					if (global.MP4BoxNS && typeof global.MP4BoxNS.createFile === 'function') {
						done = true;
						resolve(global.MP4BoxNS);
					} else bad();
				};
				document.head.appendChild(script);
				setTimeout(bad, 30000);
			});
		}
		return mp4boxPromise;
	}

	/**
	 * AudioBuffer → WAV。
	 * @param {AudioBuffer} buf
	 * @returns {Blob}
	 */
	function bufferToWav(buf) {
		var ch = Math.min(2, Math.max(1, buf.numberOfChannels));
		var rate = buf.sampleRate;
		var frames = buf.length;
		var inter = new Int16Array(frames * ch);
		var c0 = buf.getChannelData(0);
		var c1 = ch === 2 ? buf.getChannelData(1) : null;
		for (var i = 0; i < frames; i++) {
			var s0 = Math.max(-1, Math.min(1, c0[i]));
			inter[i * ch] = s0 < 0 ? s0 * 0x8000 : s0 * 0x7fff;
			if (c1) {
				var s1 = Math.max(-1, Math.min(1, c1[i]));
				inter[i * ch + 1] = s1 < 0 ? s1 * 0x8000 : s1 * 0x7fff;
			}
		}
		var bytes = inter.length * 2;
		var header = new ArrayBuffer(44);
		var view = new DataView(header);
		/**
		 * @param {number} offset
		 * @param {string} str
		 */
		function writeStr(offset, str) {
			for (var j = 0; j < str.length; j++) view.setUint8(offset + j, str.charCodeAt(j));
		}
		writeStr(0, 'RIFF');
		view.setUint32(4, 36 + bytes, true);
		writeStr(8, 'WAVE');
		writeStr(12, 'fmt ');
		view.setUint32(16, 16, true);
		view.setUint16(20, 1, true);
		view.setUint16(22, ch, true);
		view.setUint32(24, rate, true);
		view.setUint32(28, rate * ch * 2, true);
		view.setUint16(32, ch * 2, true);
		view.setUint16(34, 16, true);
		writeStr(36, 'data');
		view.setUint32(40, bytes, true);
		return new Blob([header, inter], { type: 'audio/wav' });
	}

	/**
	 * AudioBuffer → MP3。
	 * @param {AudioBuffer} buf
	 * @param {number} kbps
	 * @param {(pct:number)=>void} [onPct]
	 * @returns {Promise<Blob>}
	 */
	async function bufferToMp3(buf, kbps, onPct) {
		var lame = global.lamejs;
		if (!lame || !lame.Mp3Encoder) throw new Error('err_encoder');
		var ch = buf.numberOfChannels >= 2 ? 2 : 1;
		var enc = new lame.Mp3Encoder(ch, buf.sampleRate, kbps);
		var left = toInt16(buf.getChannelData(0));
		var right = ch === 2 ? toInt16(buf.getChannelData(1)) : null;
		var block = 1152;
		var parts = [];
		var last = performance.now();
		for (var i = 0; i < left.length; i += block) {
			var l = left.subarray(i, i + block);
			var chunk =
				ch === 2 ? enc.encodeBuffer(l, right.subarray(i, i + block)) : enc.encodeBuffer(l);
			if (chunk && chunk.length) parts.push(new Uint8Array(chunk));
			if (onPct && performance.now() - last > 40) {
				onPct(70 + 25 * Math.min(1, (i + block) / left.length));
				await yieldUi();
				last = performance.now();
			}
		}
		var end = enc.flush();
		if (end && end.length) parts.push(new Uint8Array(end));
		var blob = new Blob(parts, { type: 'audio/mpeg' });
		if (!blob.size) throw new Error('err_encoder');
		return blob;
	}

	/**
	 * 规范为 1–2 声道。
	 * @param {AudioBuffer} decoded
	 * @returns {AudioBuffer}
	 */
	function extractChannels(decoded) {
		var ch = Math.min(2, Math.max(1, decoded.numberOfChannels));
		if (decoded.numberOfChannels === ch) return decoded;
		var Offline = global.OfflineAudioContext || global.webkitOfflineAudioContext;
		var ctx = new Offline(ch, decoded.length, decoded.sampleRate);
		var out = ctx.createBuffer(ch, decoded.length, decoded.sampleRate);
		for (var c = 0; c < ch; c++) out.copyToChannel(decoded.getChannelData(c), c);
		return out;
	}

	/**
	 * 探测时长（不整段解码）。
	 * @param {File|Blob} file
	 * @param {AbortSignal} [signal]
	 * @returns {Promise<{duration:number, objectUrl:string, video:HTMLVideoElement}>}
	 */
	function probeDuration(file, signal) {
		return new Promise(function (resolve, reject) {
			throwIfAborted(signal);
			var url = URL.createObjectURL(file);
			var video = document.createElement('video');
			video.preload = 'metadata';
			video.muted = true;
			video.playsInline = true;
			video.setAttribute('playsinline', '');
			/**
			 * @param {Error} err
			 */
			function fail(err) {
				URL.revokeObjectURL(url);
				reject(err);
			}
			video.onloadedmetadata = function () {
				var d = Number(video.duration);
				if (!Number.isFinite(d) || d <= 0) {
					fail(new Error('err_decode'));
					return;
				}
				resolve({ duration: d, objectUrl: url, video: video });
			};
			video.onerror = function () {
				fail(new Error('err_decode'));
			};
			if (signal) {
				signal.addEventListener(
					'abort',
					function () {
						fail(new Error('aborted'));
					},
					{ once: true }
				);
			}
			video.src = url;
		});
	}

	/**
	 * 从 mp4box audio sample entry 取 AudioSpecificConfig（AAC description）。
	 * @param {any} isoFile
	 * @param {number} trackId
	 * @returns {Uint8Array|undefined}
	 */
	function getAudioSpecificConfig(isoFile, trackId) {
		try {
			var trak = isoFile.getTrackById(trackId);
			var entry = trak && trak.mdia && trak.mdia.minf && trak.mdia.minf.stbl && trak.mdia.minf.stbl.stsd
				? trak.mdia.minf.stbl.stsd.entries[0]
				: null;
			if (!entry || !entry.esds || !entry.esds.esd || !entry.esds.esd.descs) return undefined;
			var decConfig = null;
			for (var i = 0; i < entry.esds.esd.descs.length; i++) {
				if (entry.esds.esd.descs[i].tag === 4) {
					decConfig = entry.esds.esd.descs[i];
					break;
				}
			}
			if (!decConfig || !decConfig.descs) return undefined;
			for (var j = 0; j < decConfig.descs.length; j++) {
				if (decConfig.descs[j].tag === 5 && decConfig.descs[j].data) {
					return decConfig.descs[j].data;
				}
			}
		} catch (_) {}
		return undefined;
	}

	/**
	 * 小文件 decode 路径。
	 * @param {File} file
	 * @param {{format:'wav'|'mp3', bitrate?:number, signal?:AbortSignal, onProgress?:Function}} opts
	 */
	async function extractViaDecode(file, opts) {
		var onProgress = opts.onProgress || function () {};
		var signal = opts.signal;
		throwIfAborted(signal);
		onProgress(4, 'read');
		await yieldUi();
		var bytes = await file.arrayBuffer();
		throwIfAborted(signal);
		onProgress(20, 'decode');
		await yieldUi();
		var Offline = global.OfflineAudioContext || global.webkitOfflineAudioContext;
		if (!Offline) throw new Error('err_decode');
		var decoded;
		try {
			decoded = await new Offline(1, 1, 44100).decodeAudioData(bytes.slice(0));
		} catch (_) {
			throw new Error('err_decode');
		}
		bytes = null;
		if (!decoded || !decoded.length) throw new Error('err_decode');
		if (decoded.duration > DECODE_MAX_DURATION + 0.05) throw new Error('err_limit');
		onProgress(48, 'extract');
		await yieldUi();
		var extracted = extractChannels(decoded);
		decoded = null;
		onProgress(62, 'write');
		await yieldUi();
		var format = opts.format === 'mp3' ? 'mp3' : 'wav';
		var blob;
		var ext;
		if (format === 'mp3') {
			var kbps = opts.bitrate || 192;
			if ([128, 192, 320].indexOf(kbps) < 0) throw new Error('err_encoder');
			blob = await bufferToMp3(extracted, kbps, function (pct) {
				onProgress(pct, 'write');
			});
			ext = 'mp3';
		} else {
			blob = bufferToWav(extracted);
			ext = 'wav';
		}
		var meta = {
			blob: blob,
			ext: ext,
			duration: extracted.duration,
			channels: extracted.numberOfChannels,
			sampleRate: extracted.sampleRate,
			mode: 'decode',
		};
		extracted = null;
		onProgress(100, 'done');
		return meta;
	}

	/**
	 * 阶段 A：discard mdat 解析 moov，把 audio sample 压成 TypedArray 索引 + ASC。
	 * @param {any} MP4BoxNS
	 * @param {File} file
	 * @param {AbortSignal|undefined} signal
	 * @param {(pct:number,stage:string)=>void} onProgress
	 * @returns {Promise<{audioInfo:any, count:number, offsets:Float64Array, sizes:Uint32Array, cts:Float64Array, durations:Uint32Array, keys:Uint8Array, timescale:number, description?:ArrayBuffer, durationSec:number}>}
	 */
	function parseMp4AudioIndex(MP4BoxNS, file, signal, onProgress) {
		return new Promise(function (resolve, reject) {
			/** discardMdatData=true：只建表，不把整段 mdat 留在 RAM */
			var iso = MP4BoxNS.createFile(false);
			var settled = false;
			/**
			 * @param {Error} err
			 */
			function fail(err) {
				if (settled) return;
				settled = true;
				reject(err);
			}
			/**
			 * @param {any} value
			 */
			function ok(value) {
				if (settled) return;
				settled = true;
				resolve(value);
			}

			iso.onError = function () {
				fail(new Error('err_decode'));
			};

			iso.onReady = function (info) {
				try {
					throwIfAborted(signal);
					var timescale = info.timescale || 1;
					var durationSec = info.duration && timescale ? info.duration / timescale : 0;
					if (durationSec > HARD_MAX_DURATION + 0.05) {
						fail(new Error('err_limit'));
						return;
					}
					/** @type {any} */
					var audioInfo = null;
					for (var i = 0; i < (info.tracks || []).length; i++) {
						var t = info.tracks[i];
						if (t.type === 'audio' || t.audio) {
							audioInfo = t;
							break;
						}
					}
					if (!audioInfo) {
						fail(new Error('err_decode'));
						return;
					}
					var trak = iso.getTrackById(audioInfo.id);
					var raw = (trak && trak.samples) || [];
					if (!raw.length) {
						fail(new Error('err_decode'));
						return;
					}
					var n = raw.length;
					var offsets = new Float64Array(n);
					var sizes = new Uint32Array(n);
					var ctsArr = new Float64Array(n);
					var durations = new Uint32Array(n);
					var keys = new Uint8Array(n);
					var trackTimescale = audioInfo.timescale || timescale;
					var count = 0;
					for (var s = 0; s < n; s++) {
						var sample = raw[s];
						if (!sample || !(sample.size > 0) || !(sample.offset >= 0)) continue;
						offsets[count] = sample.offset;
						sizes[count] = sample.size >>> 0;
						ctsArr[count] = sample.cts;
						durations[count] = sample.duration >>> 0;
						keys[count] = sample.is_sync || sample.is_rap ? 1 : 0;
						if (sample.timescale) trackTimescale = sample.timescale;
						count++;
					}
					if (!count) {
						fail(new Error('err_decode'));
						return;
					}
					if (count !== n) {
						offsets = offsets.slice(0, count);
						sizes = sizes.slice(0, count);
						ctsArr = ctsArr.slice(0, count);
						durations = durations.slice(0, count);
						keys = keys.slice(0, count);
					}
					var desc = getAudioSpecificConfig(iso, audioInfo.id);
					var description =
						desc && desc.byteLength
							? desc.buffer.slice(desc.byteOffset, desc.byteOffset + desc.byteLength)
							: undefined;
					/** 尽快丢掉 mp4box 内部大对象引用，交给 GC */
					try {
						iso.onSamples = undefined;
						iso.onReady = undefined;
					} catch (_) {}
					ok({
						audioInfo: audioInfo,
						count: count,
						offsets: offsets,
						sizes: sizes,
						cts: ctsArr,
						durations: durations,
						keys: keys,
						timescale: trackTimescale,
						description: description,
						durationSec: durationSec,
					});
				} catch (e) {
					fail(e instanceof Error ? e : new Error('err_decode'));
				}
			};

			if (signal) {
				signal.addEventListener(
					'abort',
					function () {
						fail(new Error('aborted'));
					},
					{ once: true }
				);
			}

			(async function feedIndex() {
				try {
					var offset = 0;
					while (offset < file.size) {
						throwIfAborted(signal);
						var end = Math.min(offset + MP4_FEED_CHUNK, file.size);
						var slice = await file.slice(offset, end).arrayBuffer();
						var buf = MP4BoxNS.MP4BoxBuffer.fromArrayBuffer(slice, offset);
						/** discard 模式下可用 seek 提示跳到 moov，避免扫完整 mdat */
						var next = iso.appendBuffer(buf);
						offset = typeof next === 'number' && next > offset ? next : end;
						onProgress(3 + Math.round(10 * (offset / Math.max(1, file.size))), 'read');
						await yieldUi();
					}
					iso.flush();
					if (!settled) fail(new Error('err_decode'));
				} catch (e) {
					fail(e instanceof Error ? e : new Error('err_decode'));
				}
			})();
		});
	}

	/**
	 * MP4 系大文件稳内存主路径：
	 * TypedArray 索引 + File.slice + WebCodecs + OPFS/内存汇聚 lame MP3。
	 * @param {File} file
	 * @param {{bitrate?:number, signal?:AbortSignal, onProgress?:Function}} opts
	 */
	async function extractViaMp4WebCodecs(file, opts) {
		var onProgress = opts.onProgress || function () {};
		var signal = opts.signal;
		if (typeof AudioDecoder === 'undefined') throw new Error('err_unsupported');
		var lame = global.lamejs;
		if (!lame || !lame.Mp3Encoder) throw new Error('err_encoder');

		var opfs = supportsOpfs();
		var sizeCap = opfs ? HARD_MAX_BYTES : HARD_MAX_BYTES_NO_OPFS;
		if (file.size > sizeCap) throw new Error('err_limit');

		var MP4BoxNS = await loadMp4Box();
		throwIfAborted(signal);

		onProgress(3, 'read');
		await yieldUi();

		var index = await parseMp4AudioIndex(MP4BoxNS, file, signal, onProgress);
		throwIfAborted(signal);

		var audioInfo = index.audioInfo;
		var durationSec = index.durationSec || 0;
		var sampleRate = (audioInfo.audio && audioInfo.audio.sample_rate) || 44100;
		var rawChannels = (audioInfo.audio && audioInfo.audio.channel_count) || 1;
		/** 超过立体声仍可下混到 2ch；>8 视为引擎不支持的多声道布局 */
		if (rawChannels > 8) throw new Error('err_channels');
		var channels = Math.min(2, Math.max(1, rawChannels));
		var codecStr = String(audioInfo.codec || '').toLowerCase();
		/** 明确不在浏览器 demux 主路径的编解码（如 E-AC-3 / TrueHD） */
		if (
			codecStr.indexOf('ec-3') >= 0 ||
			codecStr.indexOf('eac3') >= 0 ||
			codecStr.indexOf('ac-3') >= 0 ||
			codecStr.indexOf('true-hd') >= 0 ||
			codecStr.indexOf('mlp') >= 0 ||
			codecStr.indexOf('dts') >= 0
		) {
			throw new Error('err_codec');
		}
		var trackTimescale = index.timescale || audioInfo.timescale || sampleRate;
		/** @type {any} */
		var encoder = null;
		var framesEncoded = 0;
		var totalFramesEst = durationSec > 0 ? Math.max(1, Math.floor(durationSec * sampleRate)) : 0;
		/** @type {Error|null} */
		var decodeError = null;
		/** @type {Error|null} */
		var writeError = null;

		var sink = await createMp3Sink();
		/** @type {Promise<void>} */
		var writeChain = Promise.resolve();
		/**
		 * 异步串行写出（AudioDecoder output 回调内不可 await）。
		 * @param {Uint8Array|Int8Array} chunk
		 */
		function enqueueWrite(chunk) {
			if (!chunk || !chunk.length || writeError) return;
			var copy = chunk instanceof Uint8Array ? chunk.slice() : new Uint8Array(chunk);
			writeChain = writeChain
				.then(function () {
					if (writeError) return;
					return sink.write(copy);
				})
				.catch(function (e) {
					writeError = e instanceof Error ? e : new Error('err_encoder');
				});
		}

		/**
		 * 将 AudioData 送入 lame，再排队写出。
		 * @param {AudioData} audioData
		 */
		function onAudioData(audioData) {
			try {
				if (!encoder) {
					sampleRate = audioData.sampleRate || sampleRate;
					channels = Math.min(2, Math.max(1, audioData.numberOfChannels || 1));
					encoder = new lame.Mp3Encoder(channels, sampleRate, opts.bitrate || 192);
					if (durationSec > 0) totalFramesEst = Math.max(1, Math.floor(durationSec * sampleRate));
				}
				var frames = audioData.numberOfFrames;
				var left = new Float32Array(frames);
				audioData.copyTo(left, { planeIndex: 0, format: 'f32-planar' });
				var leftI = toInt16(left);
				var rightI = null;
				if (channels === 2 && audioData.numberOfChannels >= 2) {
					var right = new Float32Array(frames);
					audioData.copyTo(right, { planeIndex: 1, format: 'f32-planar' });
					rightI = toInt16(right);
				}
				audioData.close();
				var block = 1152;
				for (var i = 0; i < leftI.length; i += block) {
					var l = leftI.subarray(i, i + block);
					var chunk =
						channels === 2 && rightI
							? encoder.encodeBuffer(l, rightI.subarray(i, i + block))
							: encoder.encodeBuffer(l);
					if (chunk && chunk.length) enqueueWrite(chunk);
				}
				framesEncoded += frames;
				if (totalFramesEst > 0) {
					var pct = 18 + Math.round(76 * Math.min(1, framesEncoded / totalFramesEst));
					onProgress(Math.min(94, pct), 'write');
				}
			} catch (e) {
				decodeError = e instanceof Error ? e : new Error('err_decode');
			}
		}

		var config = {
			codec: audioInfo.codec,
			sampleRate: sampleRate,
			numberOfChannels: channels,
		};
		if (index.description) config.description = index.description;

		var decoder = new AudioDecoder({
			output: onAudioData,
			error: function (e) {
				decodeError = e instanceof Error ? e : new Error('err_decode');
			},
		});
		try {
			decoder.configure(config);
		} catch (cfgErr) {
			try {
				decoder.close();
			} catch (_) {}
			throw mapExtractError(cfgErr);
		}
		onProgress(16, 'decode');
		await yieldUi();

		var count = index.count;
		var offsets = index.offsets;
		var sizes = index.sizes;
		var ctsArr = index.cts;
		var durations = index.durations;
		var keys = index.keys;

		try {
			for (var i = 0; i < count; i++) {
				throwIfAborted(signal);
				if (decodeError || writeError) break;
				while (decoder.decodeQueueSize > 24) {
					throwIfAborted(signal);
					if (decodeError || writeError) break;
					await yieldUi();
				}
				if (decodeError || writeError) break;

				var off = offsets[i];
				var sz = sizes[i];
				var packet = await file.slice(off, off + sz).arrayBuffer();
				decoder.decode(
					new EncodedAudioChunk({
						type: keys[i] ? 'key' : 'delta',
						timestamp: Math.round((ctsArr[i] * 1e6) / trackTimescale),
						duration: Math.round((durations[i] * 1e6) / trackTimescale),
						data: packet,
					})
				);

				if (i % 64 === 0) {
					onProgress(16 + Math.round(78 * ((i + 1) / count)), 'decode');
					await yieldUi();
				}
			}

			await decoder.flush();
			await writeChain;

			if (decodeError) throw decodeError instanceof Error ? decodeError : new Error('err_decode');
			if (writeError) throw writeError instanceof Error ? writeError : new Error('err_encoder');
			if (!encoder) throw new Error('err_empty');

			var flush = encoder.flush();
			if (flush && flush.length) {
				enqueueWrite(flush);
				await writeChain;
			}
			if (writeError) throw writeError instanceof Error ? writeError : new Error('err_encoder');

			var blob = await sink.finalize();
			try {
				decoder.close();
			} catch (_) {}
			if (!blob.size) throw new Error('err_encoder');
			onProgress(100, 'done');
			return {
				blob: blob,
				ext: 'mp3',
				duration: durationSec || framesEncoded / sampleRate,
				channels: channels,
				sampleRate: sampleRate,
				mode: sink.kind === 'opfs' ? 'mp4-webcodecs-opfs' : 'mp4-webcodecs',
				sink: sink.kind,
			};
		} catch (e) {
			try {
				await sink.abort();
			} catch (_) {}
			try {
				decoder.close();
			} catch (_) {}
			if (e && (e.message === 'aborted' || e.name === 'AbortError')) throw e;
			throw e instanceof Error ? e : new Error('err_decode');
		}
	}

	/**
	 * MediaElement 流式 MP3（回退路径）。
	 * @param {File} file
	 * @param {{bitrate?:number, signal?:AbortSignal, onProgress?:Function}} opts
	 */
	async function extractViaStreamMp3(file, opts) {
		var onProgress = opts.onProgress || function () {};
		var signal = opts.signal;
		var lame = global.lamejs;
		if (!lame || !lame.Mp3Encoder) throw new Error('err_encoder');
		var AC = global.AudioContext || global.webkitAudioContext;
		if (!AC) throw new Error('err_unsupported');

		onProgress(3, 'read');
		await yieldUi();
		var probe = await probeDuration(file, signal);
		var duration = probe.duration;
		var video = probe.video;
		var objectUrl = probe.objectUrl;
		if (duration > STREAM_FALLBACK_DURATION + 0.05) {
			URL.revokeObjectURL(objectUrl);
			throw new Error('err_limit');
		}

		onProgress(12, 'decode');
		await yieldUi();

		var audioCtx = new AC();
		var parts = [];
		var sampleRate = 0;
		var channels = 1;
		/** @type {any} */
		var enc = null;
		var finished = false;
		var playError = null;

		try {
			throwIfAborted(signal);
			if (audioCtx.state === 'suspended') await audioCtx.resume();
			var source = audioCtx.createMediaElementSource(video);
			var processor = audioCtx.createScriptProcessor(4096, 2, 2);
			var mute = audioCtx.createGain();
			mute.gain.value = 0;
			source.connect(processor);
			processor.connect(mute);
			mute.connect(audioCtx.destination);
			video.playbackRate = STREAM_PLAYBACK_RATE;
			video.currentTime = 0;

			await new Promise(function (resolve, reject) {
				/**
				 * @param {Error} err
				 */
				function fail(err) {
					if (finished) return;
					finished = true;
					reject(err);
				}
				/**
				 * 成功。
				 */
				function ok() {
					if (finished) return;
					finished = true;
					resolve();
				}
				processor.onaudioprocess = function (ev) {
					if (finished) return;
					try {
						throwIfAborted(signal);
						var input = ev.inputBuffer;
						if (!enc) {
							sampleRate = input.sampleRate || audioCtx.sampleRate;
							channels = input.numberOfChannels >= 2 ? 2 : 1;
							enc = new lame.Mp3Encoder(channels, sampleRate, opts.bitrate || 192);
						}
						var left = toInt16(input.getChannelData(0));
						var right = channels === 2 ? toInt16(input.getChannelData(1)) : null;
						var block = 1152;
						for (var i = 0; i < left.length; i += block) {
							var l = left.subarray(i, i + block);
							var chunk =
								channels === 2
									? enc.encodeBuffer(l, right.subarray(i, i + block))
									: enc.encodeBuffer(l);
							if (chunk && chunk.length) parts.push(new Uint8Array(chunk));
						}
						if (duration > 0) {
							var t = Math.min(duration, video.currentTime || 0);
							onProgress(15 + Math.round(80 * (t / duration)), 'write');
						}
					} catch (e) {
						playError = e;
						try {
							video.pause();
						} catch (_) {}
						fail(e instanceof Error ? e : new Error('err_encoder'));
					}
				};
				video.onended = function () {
					ok();
				};
				video.onerror = function () {
					fail(new Error('err_decode'));
				};
				if (signal) {
					signal.addEventListener(
						'abort',
						function () {
							fail(new Error('aborted'));
						},
						{ once: true }
					);
				}
				var playPromise = video.play();
				if (playPromise && typeof playPromise.then === 'function') {
					playPromise.catch(function () {
						fail(new Error('err_decode'));
					});
				}
			});

			if (playError) throw playError;
			throwIfAborted(signal);
			if (!enc) throw new Error('err_empty');
			var flush = enc.flush();
			if (flush && flush.length) parts.push(new Uint8Array(flush));
			var blob = new Blob(parts, { type: 'audio/mpeg' });
			if (!blob.size) throw new Error('err_encoder');
			onProgress(100, 'done');
			return {
				blob: blob,
				ext: 'mp3',
				duration: duration,
				channels: channels,
				sampleRate: sampleRate,
				mode: 'stream-mp3',
			};
		} finally {
			try {
				video.pause();
			} catch (_) {}
			try {
				video.removeAttribute('src');
				video.load();
			} catch (_) {}
			URL.revokeObjectURL(objectUrl);
			try {
				await audioCtx.close();
			} catch (_) {}
		}
	}

	/**
	 * 将 WebCodecs/容器失败映射为更诚实的业务错误码。
	 * @param {any} e
	 * @returns {Error}
	 */
	function mapExtractError(e) {
		if (!e) return new Error('err_decode');
		if (e instanceof Error) {
			var m = e.message || '';
			if (
				m === 'err_limit' ||
				m === 'err_container' ||
				m === 'err_codec' ||
				m === 'err_channels' ||
				m === 'err_file' ||
				m === 'err_empty' ||
				m === 'err_encoder' ||
				m === 'err_unsupported' ||
				m === 'aborted'
			) {
				return e;
			}
			if (e.name === 'AbortError') return new Error('aborted');
			if (e.name === 'NotSupportedError' || /unsupported|codec/i.test(m)) {
				return new Error('err_codec');
			}
		}
		return e instanceof Error ? e : new Error('err_decode');
	}

	/**
	 * 统一入口：先 classifyFile，再按路径抽取。
	 * @param {File} file
	 * @param {{format?:'wav'|'mp3', bitrate?:number, signal?:AbortSignal, onProgress?:Function}} opts
	 */
	async function extractFile(file, opts) {
		opts = opts || {};
		if (!file) throw new Error('err_file');

		var classified = classifyFile(file);
		if (classified.path === 'reject') {
			throw new Error(classified.reason || 'err_limit');
		}

		var wantFormat = opts.format === 'mp3' ? 'mp3' : 'wav';
		var useDecode = classified.path === 'decode';
		var duration = 0;

		try {
			var probe = await probeDuration(file, opts.signal);
			duration = probe.duration;
			URL.revokeObjectURL(probe.objectUrl);
			try {
				probe.video.removeAttribute('src');
				probe.video.load();
			} catch (_) {}
			if (classified.container === 'isobmff' && duration > HARD_MAX_DURATION) {
				throw new Error('err_limit');
			}
			if (classified.container !== 'isobmff' && duration > STREAM_FALLBACK_DURATION) {
				throw new Error('err_limit');
			}
			if (useDecode && duration > DECODE_MAX_DURATION) {
				useDecode = false;
				if (classified.container === 'isobmff') {
					classified = {
						path: 'demux',
						reason: 'ok_demux',
						maxBytes: classified.maxBytes,
						maxDuration: HARD_MAX_DURATION,
						container: 'isobmff',
					};
				} else {
					classified = {
						path: 'fallback',
						reason: 'ok_fallback',
						maxBytes: STREAM_FALLBACK_BYTES,
						maxDuration: STREAM_FALLBACK_DURATION,
						container: classified.container,
					};
				}
			}
		} catch (e) {
			if (e && (e.message === 'err_limit' || e.message === 'err_container')) throw e;
			if (e && (e.message === 'aborted' || e.name === 'AbortError')) throw e;
			useDecode = file.size <= DECODE_MAX_BYTES && classified.path === 'decode';
		}

		if (useDecode) {
			try {
				return await extractViaDecode(file, {
					format: wantFormat,
					bitrate: opts.bitrate,
					signal: opts.signal,
					onProgress: opts.onProgress,
				});
			} catch (e) {
				throw mapExtractError(e);
			}
		}

		// 大文件优先 WebCodecs demux（MP4/MOV 系）
		if (
			(classified.path === 'demux' || classified.container === 'isobmff') &&
			typeof AudioDecoder !== 'undefined'
		) {
			try {
				var wc = await extractViaMp4WebCodecs(file, {
					bitrate: opts.bitrate || 192,
					signal: opts.signal,
					onProgress: opts.onProgress,
				});
				wc.forcedMp3 = wantFormat === 'wav';
				return wc;
			} catch (e) {
				if (isOpfsGoneError(e)) {
					forceMemorySink = true;
					try {
						var wc2 = await extractViaMp4WebCodecs(file, {
							bitrate: opts.bitrate || 192,
							signal: opts.signal,
							onProgress: opts.onProgress,
						});
						wc2.forcedMp3 = wantFormat === 'wav';
						return wc2;
					} catch (e2) {
						e = e2;
					}
				}
				var mapped = mapExtractError(e);
				if (
					mapped.message === 'aborted' ||
					mapped.message === 'err_limit' ||
					mapped.message === 'err_codec' ||
					mapped.message === 'err_channels'
				) {
					throw mapped;
				}
				// 非致命 demux 失败：回退 MediaElement（仍受 fallback 上限）
			}
		}

		if (file.size > STREAM_FALLBACK_BYTES || duration > STREAM_FALLBACK_DURATION) {
			/** 非 ISOBMFF 超限：容器路径不支持大文件，而非笼统 size limit */
			if (classified.container !== 'isobmff') throw new Error('err_container');
			throw new Error('err_limit');
		}

		try {
			var streamed = await extractViaStreamMp3(file, {
				bitrate: opts.bitrate || 192,
				signal: opts.signal,
				onProgress: opts.onProgress,
			});
			streamed.forcedMp3 = wantFormat === 'wav';
			return streamed;
		} catch (e) {
			throw mapExtractError(e);
		}
	}

	/** 对外 API（含兼容旧字段名）。 */
	var api = {
		DECODE_MAX_BYTES: DECODE_MAX_BYTES,
		DECODE_MAX_DURATION: DECODE_MAX_DURATION,
		HARD_MAX_BYTES: HARD_MAX_BYTES,
		HARD_MAX_BYTES_NO_OPFS: HARD_MAX_BYTES_NO_OPFS,
		HARD_MAX_DURATION: HARD_MAX_DURATION,
		STREAM_FALLBACK_BYTES: STREAM_FALLBACK_BYTES,
		STREAM_FALLBACK_DURATION: STREAM_FALLBACK_DURATION,
		/** @deprecated 兼容旧调用：等同 HARD_MAX_BYTES */
		STREAM_MAX_BYTES: HARD_MAX_BYTES,
		/** @deprecated 兼容旧调用：等同 HARD_MAX_DURATION */
		STREAM_MAX_DURATION: HARD_MAX_DURATION,
		BATCH_MAX_FILES: BATCH_MAX_FILES,
		supportsOpfs: supportsOpfs,
		supportedAccept: supportedAccept,
		getCapabilities: getCapabilities,
		classifyFile: classifyFile,
		isFallbackContainer: isFallbackContainer,
		extractFile: extractFile,
		extractViaDecode: extractViaDecode,
		extractViaMp4WebCodecs: extractViaMp4WebCodecs,
		extractViaStreamMp3: extractViaStreamMp3,
		bufferToWav: bufferToWav,
		bufferToMp3: bufferToMp3,
		probeDuration: probeDuration,
		isIsoBmff: isIsoBmff,
		yieldUi: yieldUi,
		mapExtractError: mapExtractError,
	};

	global.OftExtractAudio = api;
})(typeof window !== 'undefined' ? window : globalThis);
