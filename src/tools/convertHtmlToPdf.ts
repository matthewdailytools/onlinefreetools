/**
 * convert-html-to-pdf 的 URL 拉取 API：给定页面地址，抓取 HTML，
 * 把 CSS / 图片的相对引用改成绝对 http(s) 链接后返回（不内联文件正文）。
 * 另提供 `/asset`：同源代理远程图片，供浏览器解码 webp 并转成 PNG 再截图。
 * 仅当次请求返回、不落盘；校验协议、拦截私网/localhost、限制类型与大小。
 */
import type { Context } from 'hono';
import { fetchWithTimeout, parseHttpUrlOrThrow } from './remoteFetchGuard';
import { fetchHtmlFollowingRedirects, isBlockedHostname } from './onPageSeo';

/** 单次抓取 HTML 正文上限（字节），与 on-page-seo / open-graph 一致。 */
const MAX_BYTES = 2_000_000;

/** 抓取时使用的 User-Agent。 */
const FETCH_UA = 'onlinefreetools/convert-html-to-pdf';

/**
 * 在 HTML 中插入 <base href>，给未改写到的相对路径做兜底。
 * 已有 <base> 则不重复插入。
 * @param html 源站 HTML
 * @param finalUrl 跟随重定向后的最终地址
 * @returns 带 base 的 HTML
 */
const injectBaseHref = (html: string, finalUrl: string): string => {
	if (/<base\s/i.test(html)) return html;
	const href = String(finalUrl || '')
		.replace(/&/g, '&amp;')
		.replace(/"/g, '&quot;')
		.replace(/</g, '&lt;');
	const tag = `<base href="${href}">`;
	if (/<head[\s>]/i.test(html)) {
		return html.replace(/<head([^>]*)>/i, `<head$1>${tag}`);
	}
	return `${tag}${html}`;
};

/**
 * 把相对 / 协议相对地址解析成 http(s) 绝对 URL；data/blob/私网返回 null。
 * @param raw href、src 或 CSS url() 内的原始值
 * @param pageUrl 页面最终 URL，作相对解析基准
 */
const resolveHttpUrl = (raw: string | null, pageUrl: URL): string | null => {
	if (!raw) return null;
	const trimmed = raw.trim();
	if (!trimmed) return null;
	if (/^(data:|blob:|javascript:|vbscript:|#)/i.test(trimmed)) return null;
	try {
		const abs = new URL(trimmed, pageUrl);
		if (abs.protocol !== 'http:' && abs.protocol !== 'https:') return null;
		if (isBlockedHostname(abs.hostname)) return null;
		return abs.href;
	} catch {
		return null;
	}
};

/**
 * 把 CSS 里的相对 url() / @import 改成绝对地址（不拉取 CSS 文件正文）。
 * @param css 样式正文或 style 属性
 * @param base 解析基准（页面最终 URL）
 */
const rewriteCssDocumentUrls = (css: string, base: URL): string => {
	/** 把单个 CSS 引用解析为绝对 URL；不能解析则保持原文。 */
	const toAbs = (raw: string): string | null => resolveHttpUrl(raw.replace(/^['"]|['"]$/g, ''), base);

	let out = css.replace(/url\(\s*(['"]?)([^)'"]+?)\1\s*\)/gi, (all, quote: string, inner: string) => {
		const abs = toAbs(inner);
		if (!abs) return all;
		return `url(${quote}${abs}${quote})`;
	});
	out = out.replace(/@import\s+url\(\s*(['"]?)([^)'"]+?)\1\s*\)/gi, (all, quote: string, inner: string) => {
		const abs = toAbs(inner);
		if (!abs) return all;
		return `@import url(${quote}${abs}${quote})`;
	});
	out = out.replace(/@import\s+(['"])([^'"]+)\1/gi, (all, quote: string, inner: string) => {
		const abs = toAbs(inner);
		if (!abs) return all;
		return `@import ${quote}${abs}${quote}`;
	});
	return out;
};

/**
 * 把 srcset 里每一项的 URL 改成绝对地址。
 * @param raw srcset 属性值
 * @param pageUrl 页面最终 URL
 */
const rewriteSrcset = (raw: string, pageUrl: URL): string => {
	return raw
		.split(',')
		.map((part) => {
			const trimmed = part.trim();
			if (!trimmed) return part;
			const match = trimmed.match(/^(\S+)(\s+.*)?$/);
			if (!match) return part;
			const abs = resolveHttpUrl(match[1], pageUrl);
			if (!abs) return part;
			return abs + (match[2] || '');
		})
		.join(', ');
};

/**
 * 若属性存在且能解析为绝对 URL，则写回该属性。
 * @param el HTMLRewriter 元素
 * @param name 属性名
 * @param pageUrl 页面最终 URL
 */
const absolutizeAttr = (el: Element, name: string, pageUrl: URL): void => {
	const raw = el.getAttribute(name);
	const abs = resolveHttpUrl(raw, pageUrl);
	if (abs) el.setAttribute(name, abs);
};

/**
 * 把 HTML 中 CSS 与图片引用改成绝对链接，不抓取、不内联文件正文。
 * @param html 已插入 base 的 HTML
 * @param finalUrl 最终页地址
 */
const absolutizeCssAndImageUrls = async (html: string, finalUrl: string): Promise<string> => {
	/** 相对路径的解析基准。 */
	const pageUrl = new URL(finalUrl);
	/** 当前 <style> 文本块缓冲（HTMLRewriter 可能分片）。 */
	let styleBuf = '';

	return await new HTMLRewriter()
		.on('link', {
			element(el) {
				absolutizeAttr(el, 'href', pageUrl);
			},
		})
		.on('img', {
			element(el) {
				absolutizeAttr(el, 'src', pageUrl);
				const srcset = el.getAttribute('srcset');
				if (srcset) el.setAttribute('srcset', rewriteSrcset(srcset, pageUrl));
			},
		})
		.on('source', {
			element(el) {
				absolutizeAttr(el, 'src', pageUrl);
				const srcset = el.getAttribute('srcset');
				if (srcset) el.setAttribute('srcset', rewriteSrcset(srcset, pageUrl));
			},
		})
		.on('video', {
			element(el) {
				absolutizeAttr(el, 'poster', pageUrl);
			},
		})
		.on('image', {
			element(el) {
				absolutizeAttr(el, 'href', pageUrl);
				absolutizeAttr(el, 'src', pageUrl);
			},
		})
		.on('input', {
			element(el) {
				if ((el.getAttribute('type') || '').toLowerCase() === 'image') {
					absolutizeAttr(el, 'src', pageUrl);
				}
			},
		})
		.on('*', {
			element(el) {
				const style = el.getAttribute('style');
				if (!style || !/url\(/i.test(style)) return;
				el.setAttribute('style', rewriteCssDocumentUrls(style, pageUrl));
			},
		})
		.on('style', {
			text(chunk) {
				styleBuf += chunk.text;
				if (chunk.lastInTextNode) {
					chunk.replace(rewriteCssDocumentUrls(styleBuf, pageUrl));
					styleBuf = '';
				} else {
					chunk.remove();
				}
			},
		})
		.transform(new Response(html))
		.text();
};

/**
 * GET /api/tools/convert-html-to-pdf?url=
 * 成功返回 { html, finalUrl, status, inputUrl }；失败返回 { error }。
 * @param c Hono 上下文
 */
export const handleConvertHtmlToPdfFetchApi = async (c: Context) => {
	const raw = (c.req.query('url') || '').trim();
	if (!raw) return c.json({ error: 'Missing url' }, 400);

	/** 规范化后的 http(s) URL（缺协议时补 https）。 */
	let parsed: ReturnType<typeof parseHttpUrlOrThrow>;
	try {
		parsed = parseHttpUrlOrThrow(raw);
	} catch (e: unknown) {
		const msg = e instanceof Error ? e.message : 'Invalid URL';
		return c.json({ error: msg }, 400);
	}

	if (isBlockedHostname(parsed.hostname)) {
		return c.json({ error: 'Blocked hostname' }, 400);
	}

	const controller = new AbortController();
	const timeout = setTimeout(() => controller.abort('timeout'), 10_000);
	try {
		const { res, finalUrl } = await fetchHtmlFollowingRedirects(
			parsed.url,
			FETCH_UA,
			controller.signal,
		);

		const buf = await res.arrayBuffer();
		if (buf.byteLength > MAX_BYTES) {
			return c.json({ error: 'Page is too large (limit 2 MB)' }, 413);
		}

		const html = new TextDecoder('utf-8', { fatal: false }).decode(buf);
		const contentType = (res.headers.get('content-type') || '').toLowerCase();
		const typeLooksHtml = contentType.includes('html') || contentType.includes('xml');
		const bodyLooksHtml = /^\s*</.test(html);
		if (!typeLooksHtml && !bodyLooksHtml) {
			return c.json({ error: 'URL does not return HTML content' }, 400);
		}

		/** 带 <base> 的原文；改写失败时仍返回它。 */
		let htmlOut = injectBaseHref(html, finalUrl);
		try {
			htmlOut = await absolutizeCssAndImageUrls(htmlOut, finalUrl);
		} catch {
			/* 改写失败不阻断整页 HTML */
		}

		return c.json({
			inputUrl: raw,
			finalUrl,
			status: res.status,
			html: htmlOut,
		});
	} catch (e: unknown) {
		const name = e && typeof e === 'object' && 'name' in e ? String((e as { name?: string }).name) : '';
		if (name === 'AbortError') {
			return c.json({ error: 'Request timeout' }, 502);
		}
		const msg = e instanceof Error ? e.message : 'Request failed';
		return c.json({ error: msg }, 502);
	} finally {
		clearTimeout(timeout);
	}
};

/** 单张代理图片上限（字节）。 */
const MAX_ASSET_BYTES = 1_500_000;

/** 代理图片抓取超时（毫秒）。 */
const ASSET_TIMEOUT_MS = 8_000;

/**
 * 根据文件头判断是否为浏览器可解码的图片；HTML/未知则返回 null。
 * @param buf 响应正文
 * @returns MIME 或 null
 */
const sniffImageMime = (buf: ArrayBuffer): string | null => {
	const u = new Uint8Array(buf);
	if (u.length >= 12 && u[0] === 0x52 && u[1] === 0x49 && u[2] === 0x46 && u[3] === 0x46) {
		if (u[8] === 0x57 && u[9] === 0x45 && u[10] === 0x42 && u[11] === 0x50) return 'image/webp';
	}
	if (u.length >= 8 && u[0] === 0x89 && u[1] === 0x50 && u[2] === 0x4e && u[3] === 0x47) return 'image/png';
	if (u.length >= 3 && u[0] === 0xff && u[1] === 0xd8 && u[2] === 0xff) return 'image/jpeg';
	if (u.length >= 6 && u[0] === 0x47 && u[1] === 0x49 && u[2] === 0x46) return 'image/gif';
	if (u.length >= 4 && u[0] === 0x00 && u[1] === 0x00 && u[2] === 0x01 && u[3] === 0x00) {
		return 'image/x-icon';
	}
	if (u.length >= 12) {
		const brand = new TextDecoder().decode(u.subarray(4, 12));
		if (brand.startsWith('ftyp')) {
			const minor = new TextDecoder().decode(u.subarray(8, 12));
			if (minor === 'avif' || minor === 'avis' || minor === 'mif1') return 'image/avif';
		}
	}
	const head = new TextDecoder().decode(u.subarray(0, Math.min(u.length, 96))).trimStart();
	if (/^<svg[\s>]/i.test(head) || /^<\?xml[\s\S]*<svg[\s>]/i.test(head)) return 'image/svg+xml';
	if (head.startsWith('<') || head.startsWith('<!')) return null;
	return null;
};

/**
 * 声明的 Content-Type 是否像图片（含 octet-stream，需再靠文件头确认）。
 * @param contentType 响应 Content-Type
 */
const declaredImageTypeOk = (contentType: string): boolean => {
	const t = contentType.split(';')[0].trim().toLowerCase();
	if (!t) return false;
	if (t === 'application/octet-stream') return true;
	return t.startsWith('image/');
};

/**
 * GET /api/tools/convert-html-to-pdf/asset?url=
 * 同源代理远程图片：校验 SSRF、类型与大小，原样返回字节（不落盘）。
 * 浏览器再解码 webp/avif/svg 并转成 PNG，供 html2canvas 截图。
 * @param c Hono 上下文
 */
export const handleConvertHtmlToPdfAssetApi = async (c: Context) => {
	const raw = (c.req.query('url') || '').trim();
	if (!raw) return c.json({ error: 'Missing url' }, 400);

	/** 规范化后的 http(s) URL。 */
	let parsed: ReturnType<typeof parseHttpUrlOrThrow>;
	try {
		parsed = parseHttpUrlOrThrow(raw);
	} catch (e: unknown) {
		const msg = e instanceof Error ? e.message : 'Invalid URL';
		return c.json({ error: msg }, 400);
	}

	if (isBlockedHostname(parsed.hostname)) {
		return c.json({ error: 'Blocked hostname' }, 400);
	}

	try {
		const res = await fetchWithTimeout(
			parsed.url.href,
			{
				headers: {
					'user-agent': FETCH_UA,
					accept: 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
				},
				redirect: 'follow',
			},
			ASSET_TIMEOUT_MS,
			'image',
		);

		/** 跟随重定向后的最终地址，再拦一次私网。 */
		let finalHost = parsed.hostname;
		try {
			finalHost = new URL(res.url).hostname.toLowerCase();
		} catch {
			/* 保留原 hostname */
		}
		if (isBlockedHostname(finalHost)) {
			return c.json({ error: 'Blocked hostname' }, 400);
		}

		if (!res.ok) {
			return c.json({ error: 'Image fetch failed' }, 502);
		}

		const buf = await res.arrayBuffer();
		if (buf.byteLength > MAX_ASSET_BYTES) {
			return c.json({ error: 'Image is too large (limit 1.5 MB)' }, 413);
		}

		const declared = (res.headers.get('content-type') || '').toLowerCase();
		const sniffed = sniffImageMime(buf);
		if (!sniffed && !declaredImageTypeOk(declared)) {
			return c.json({ error: 'URL does not return an image' }, 400);
		}
		if (!sniffed && declared.startsWith('text/')) {
			return c.json({ error: 'URL does not return an image' }, 400);
		}

		/** 优先文件头，其次上游声明。 */
		const mime = sniffed || declared.split(';')[0].trim() || 'application/octet-stream';
		return new Response(buf, {
			status: 200,
			headers: {
				'content-type': mime,
				'cache-control': 'private, max-age=120',
				'x-content-type-options': 'nosniff',
			},
		});
	} catch (e: unknown) {
		const msg = e instanceof Error ? e.message : 'Request failed';
		return c.json({ error: msg }, 502);
	}
};
