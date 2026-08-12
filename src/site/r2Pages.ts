/**
 * R2 预渲染 HTML 服务：Cache API → R2（gzip 存盘）→ 未命中则 404。
 *
 * R2 仅存 gzip 以省空间；**对外始终返回未压缩 HTML**，由运行时/边缘按
 * Accept-Encoding 再压缩。避免 `encodeBody: manual` 在 Cache 往返后失效导致双重 gzip（浏览器乱码）。
 *
 * **`public/_pages/` 不进 Cloudflare Assets**（见 `public/.assetsignore`）；HTML 权威源只有 R2。
 * 本地开发须 `upload:r2:local` / `start:dev` 灌桶。
 *
 * R2 key 形态：`_pages/{lang}/…/*.html.gz`（见 docs/worker+R2架构/design.md）。
 */

/** Worker 绑定中与页面存储相关的环境字段。 */
export type PagesBindings = {
	/** 存放 gzip HTML 的 R2 桶。 */
	PAGES_BUCKET: R2Bucket;
	/** 静态资源（css/js/vendor 等；不含 `_pages` HTML）。 */
	ASSETS: Fetcher;
	/** 可选：发版时递增，使 Cache API key 失效。 */
	PAGES_CACHE_VERSION?: string;
	/** 可选：R2 key 前缀（如 `builds/abc/`），默认空。 */
	PAGES_R2_PREFIX?: string;
};

/** HTML 边缘缓存时长（秒，s-maxage）。 */
const HTML_S_MAXAGE = 86400;

/**
 * 将 Assets 明文路径转为 R2 object key（含 .gz）。
 * @param assetHtmlPath 如 `/_pages/en/tools/text-diff.html`
 * @param prefix 可选 R2 前缀
 */
export const assetHtmlPathToR2Key = (assetHtmlPath: string, prefix = ''): string => {
	const trimmed = assetHtmlPath.startsWith('/') ? assetHtmlPath.slice(1) : assetHtmlPath;
	const withGz = trimmed.endsWith('.gz') ? trimmed : `${trimmed}.gz`;
	const p = String(prefix || '').replace(/^\/+|\/+$/g, '');
	return p ? `${p}/${withGz}` : withGz;
};

/**
 * 构造 Cache API 用的 Request（公开 URL + 版本号；只缓存明文变体）。
 * @param request 原始请求
 * @param cacheVersion 可选版本串
 */
export const buildHtmlCacheKey = (request: Request, cacheVersion?: string): Request => {
	const url = new URL(request.url);
	url.search = '';
	url.searchParams.set('__ce', 'identity');
	if (cacheVersion) url.searchParams.set('__v', cacheVersion);
	return new Request(url.toString(), { method: 'GET' });
};

/**
 * 将 ArrayBuffer 解为 gzip 后的明文。
 * @param gzipBytes R2 中的 gzip 字节
 */
const gunzipToArrayBuffer = async (gzipBytes: ArrayBuffer): Promise<ArrayBuffer> => {
	const stream = new Blob([gzipBytes]).stream().pipeThrough(new DecompressionStream('gzip'));
	return new Response(stream).arrayBuffer();
};

/**
 * 返回明文 HTML（不设 Content-Encoding，交由运行时协商压缩）。
 * @param body 明文字节或字符串
 * @param etag 可选 ETag
 */
const identityHtmlResponse = (body: ArrayBuffer | Uint8Array | string, etag?: string): Response => {
	const headers = new Headers({
		'Content-Type': 'text/html; charset=utf-8',
		'Cache-Control': `public, s-maxage=${HTML_S_MAXAGE}, max-age=0`,
		/** 仍声明 Vary，便于边缘对同一 URL 存压缩变体 */
		Vary: 'Accept-Encoding',
	});
	if (etag) headers.set('ETag', etag);
	return new Response(body, { status: 200, headers });
};

/**
 * 服务预渲染 HTML：Cache → R2（gunzip）；R2 未命中则 404（不回退 Assets）。
 *
 * @param opts.request 入站请求（公开 URL）
 * @param opts.env 绑定
 * @param opts.ctx 用于 waitUntil 写缓存
 * @param opts.assetHtmlPath 内部明文路径，如 `/_pages/zh/tools/text-diff.html`
 */
export const servePrerenderedHtml = async (opts: {
	request: Request;
	env: PagesBindings;
	ctx: ExecutionContext;
	assetHtmlPath: string;
}): Promise<Response> => {
	const { request, env, ctx, assetHtmlPath } = opts;
	const cacheVersion = env.PAGES_CACHE_VERSION || '';
	const cacheKey = buildHtmlCacheKey(request, cacheVersion);

	try {
		const cached = await caches.default.match(cacheKey);
		if (cached) return cached;
	} catch {
		// Cache API 在部分本地场景不可用，忽略
	}

	const r2Key = assetHtmlPathToR2Key(assetHtmlPath, env.PAGES_R2_PREFIX);
	let gzipBytes: ArrayBuffer | null = null;
	let etag: string | undefined;

	try {
		const obj = await env.PAGES_BUCKET.get(r2Key);
		if (obj) {
			gzipBytes = await obj.arrayBuffer();
			etag = obj.httpEtag;
		}
	} catch {
		gzipBytes = null;
	}

	if (!gzipBytes) {
		return new Response('Not Found', { status: 404, headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
	}

	const plain = await gunzipToArrayBuffer(gzipBytes);
	const res = identityHtmlResponse(plain, etag);
	ctx.waitUntil(caches.default.put(cacheKey, res.clone()).catch(() => undefined));
	return res;
};

/** @deprecated 保留导出，避免外部引用断裂；对外已不再协商 gzip 预压缩体。 */
export const clientAcceptsGzip = (request: Request): boolean => {
	const cf = (request as Request & { cf?: { clientAcceptEncoding?: string } }).cf;
	const raw = (cf?.clientAcceptEncoding || request.headers.get('Accept-Encoding') || '').toLowerCase();
	return raw.includes('gzip');
};

export default {
	assetHtmlPathToR2Key,
	clientAcceptsGzip,
	servePrerenderedHtml,
};
