/**
 * 图片优化引擎（Tier 2）：按需加载 MozJPEG / WebP / AVIF / OxiPNG WASM。
 * 由页面在用户点击「加载优化引擎」后动态 import。
 * AVIF 强制单线程编码器，避免主线程缺少 COOP/COEP 时 MT 失败。
 */

/** @typedef {'mozjpeg'|'webp'|'avif'|'oxipng'} CodecId */

const BASE = '/vendor/jsquash';

/** @type {Record<string, any>} */
const encoders = {};

/**
 * 确保 MozJPEG 编码器已初始化。
 * @returns {Promise<(data: ImageData, opts?: object) => Promise<ArrayBuffer>>}
 */
async function ensureMozjpeg() {
	if (encoders.mozjpeg) return encoders.mozjpeg;
	const mod = await import(`${BASE}/jpeg/encode.js`);
	await mod.init();
	encoders.mozjpeg = mod.default;
	return encoders.mozjpeg;
}

/**
 * 确保 WebP 编码器已初始化（可走 SIMD 变体）。
 * @returns {Promise<(data: ImageData, opts?: object) => Promise<ArrayBuffer>>}
 */
async function ensureWebp() {
	if (encoders.webp) return encoders.webp;
	const mod = await import(`${BASE}/webp/encode.js`);
	await mod.init();
	encoders.webp = mod.default;
	return encoders.webp;
}

/**
 * 确保 AVIF 单线程编码器已初始化（不走 avif_enc_mt）。
 * @returns {Promise<(data: ImageData, opts?: object) => Promise<ArrayBuffer>>}
 */
async function ensureAvif() {
	if (encoders.avif) return encoders.avif;
	const [{ defaultOptions }, { initEmscriptenModule }, avifEncMod] = await Promise.all([
		import(`${BASE}/avif/meta.js`),
		import(`${BASE}/avif/utils.js`),
		import(`${BASE}/avif/codec/enc/avif_enc.js`),
	]);
	const emscriptenModule = initEmscriptenModule(avifEncMod.default);
	/**
	 * @param {ImageData} data
	 * @param {object} [options]
	 */
	encoders.avif = async (data, options = {}) => {
		const _options = { ...defaultOptions, ...options };
		const module = await emscriptenModule;
		const output = module.encode(new Uint8Array(data.data.buffer), data.width, data.height, _options);
		if (!output) throw new Error('avif-encode');
		return output.buffer;
	};
	return encoders.avif;
}

/**
 * 确保 OxiPNG 优化器已初始化（主线程走单线程包）。
 * @returns {Promise<(data: ImageData, opts?: object) => Promise<ArrayBuffer>>}
 */
async function ensureOxipng() {
	if (encoders.oxipng) return encoders.oxipng;
	const mod = await import(`${BASE}/oxipng/optimise.js`);
	await mod.init();
	encoders.oxipng = mod.default;
	return encoders.oxipng;
}

/**
 * 预热默认编码器（MozJPEG），验证 vendor 路径可用。
 * @returns {Promise<void>}
 */
export async function warmEngine() {
	await ensureMozjpeg();
}

/**
 * 用选定编码器编码 ImageData。
 * @param {CodecId} codec
 * @param {ImageData} imageData
 * @param {{ quality?: number, effort?: number }} [opts] quality 0–100；effort 影响 WebP method / AVIF speed / OxiPNG level
 * @returns {Promise<{ buffer: ArrayBuffer, mime: string, ext: string, codec: string }>}
 */
export async function encodeImage(codec, imageData, opts = {}) {
	const quality = Math.max(1, Math.min(100, Number(opts.quality) || 75));
	/** effort：1(快)–10(慢)，映射到各编码器速度旋钮 */
	const effort = Math.max(1, Math.min(10, Number(opts.effort) || 5));

	if (codec === 'mozjpeg') {
		const encode = await ensureMozjpeg();
		const buffer = await encode(imageData, { quality });
		return { buffer, mime: 'image/jpeg', ext: 'jpg', codec: 'MozJPEG' };
	}
	if (codec === 'webp') {
		const encode = await ensureWebp();
		/** method 0–6；effort 越高 method 越大 */
		const method = Math.max(0, Math.min(6, Math.round((effort / 10) * 6)));
		const buffer = await encode(imageData, { quality, method });
		return { buffer, mime: 'image/webp', ext: 'webp', codec: 'WebP' };
	}
	if (codec === 'avif') {
		const encode = await ensureAvif();
		/** speed 0(慢优)–10(快)；effort 高 → speed 低 */
		const speed = Math.max(0, Math.min(10, 10 - effort));
		const buffer = await encode(imageData, { quality, speed });
		return { buffer, mime: 'image/avif', ext: 'avif', codec: 'AVIF' };
	}
	if (codec === 'oxipng') {
		const optimise = await ensureOxipng();
		/** level 0–6 */
		const level = Math.max(0, Math.min(6, Math.round((effort / 10) * 6)));
		const buffer = await optimise(imageData, { level, interlace: false, optimiseAlpha: false });
		return { buffer, mime: 'image/png', ext: 'png', codec: 'OxiPNG' };
	}
	throw new Error('unknown-codec');
}

export const CODECS = [
	{ id: 'mozjpeg', mime: 'image/jpeg' },
	{ id: 'webp', mime: 'image/webp' },
	{ id: 'avif', mime: 'image/avif' },
	{ id: 'oxipng', mime: 'image/png' },
];
