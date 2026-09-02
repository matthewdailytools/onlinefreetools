/**
 * 远程抓取 SSRF 防护与限时 fetch（web-check 边缘工具共用）。
 * 禁止 localhost / 私网 / link-local；仅 http(s)。
 */
export type ParsedHttpUrl = {
	/** 规范化后的 URL 对象 */
	url: URL;
	/** 小写 hostname */
	hostname: string;
};

/**
 * 解析用户输入为 http(s) URL；失败抛错。
 * @param raw 用户粘贴的 URL（可缺协议，默认补 https://）
 */
export const parseHttpUrlOrThrow = (raw: string): ParsedHttpUrl => {
	const trimmed = (raw || '').trim();
	if (!trimmed) throw new Error('Missing URL');
	let candidate = trimmed;
	if (!/^https?:\/\//i.test(candidate)) {
		candidate = `https://${candidate}`;
	}
	let url: URL;
	try {
		url = new URL(candidate);
	} catch {
		throw new Error('Invalid URL');
	}
	if (url.protocol !== 'http:' && url.protocol !== 'https:') {
		throw new Error('Only http/https URLs are supported');
	}
	return { url, hostname: url.hostname.toLowerCase() };
};

/**
 * 判断 IPv4 是否私网 / 环回 / 链路本地。
 * @param ip 点分十进制
 */
const isPrivateIpv4 = (ip: string): boolean => {
	const m = ip.match(/^(\d+)\.(\d+)\.(\d+)\.(\d+)$/);
	if (!m) return false;
	const a = Number(m[1]);
	const b = Number(m[2]);
	if (a === 10 || a === 127 || a === 0) return true;
	if (a === 169 && b === 254) return true;
	if (a === 192 && b === 168) return true;
	if (a === 172 && b >= 16 && b <= 31) return true;
	return false;
};

/**
 * 是否禁止作为抓取目标的 hostname。
 * @param hostname 小写主机名
 */
export const isBlockedHostname = (hostname: string): boolean => {
	const h = hostname.toLowerCase();
	if (h === 'localhost' || h.endsWith('.localhost') || h.endsWith('.local')) return true;
	if (h === '::1') return true;
	if (isPrivateIpv4(h)) return true;
	if (h.includes(':')) {
		if (h.startsWith('fc') || h.startsWith('fd') || h.startsWith('fe80:')) return true;
	}
	return false;
};

/**
 * 将上游 fetch 失败映射为可展示给用户的短句（避免直接抛 workerd 内部文案）。
 * @param err catch 到的异常
 * @param what 失败对象描述，如 robots.txt / sitemap
 */
export const mapUpstreamFetchError = (err: unknown, what = 'remote URL'): string => {
	const msg = err instanceof Error ? err.message : String(err || '');
	if (/timeout|aborted|AbortError/i.test(msg)) {
		return `Timeout fetching ${what}`;
	}
	if (/Network connection lost|fetch failed|ECONNRESET|ENOTFOUND|Failed to fetch/i.test(msg)) {
		return `Could not reach the site to fetch ${what}`;
	}
	return msg || `Failed to fetch ${what}`;
};

/**
 * 带超时的 fetch；超时/断连时抛出 {@link mapUpstreamFetchError} 文案。
 * @param target 绝对 URL
 * @param init RequestInit（可覆盖 method/headers）
 * @param timeoutMs 超时毫秒，默认 10000
 * @param what 错误文案中的对象名
 */
export const fetchWithTimeout = async (
	target: string,
	init: RequestInit = {},
	timeoutMs = 10_000,
	what = 'remote URL',
): Promise<Response> => {
	const controller = new AbortController();
	const timeout = setTimeout(() => controller.abort('timeout'), timeoutMs);
	try {
		return await fetch(target, {
			...init,
			signal: controller.signal,
		});
	} catch (err) {
		throw new Error(mapUpstreamFetchError(err, what));
	} finally {
		clearTimeout(timeout);
	}
};

/**
 * 规范化域名（去协议与路径），用于 DNS / CT 查询。
 * @param raw 用户输入
 */
export const normalizeHostnameOrThrow = (raw: string): string => {
	const trimmed = (raw || '').trim().toLowerCase();
	if (!trimmed) throw new Error('Missing hostname');
	if (trimmed.includes('://')) {
		const { hostname } = parseHttpUrlOrThrow(trimmed);
		if (isBlockedHostname(hostname)) throw new Error('Blocked hostname');
		return hostname;
	}
	const host = trimmed.replace(/\/.*$/, '').replace(/\.$/, '');
	if (!/^[a-z0-9.-]+$/i.test(host) || host.length > 253) {
		throw new Error('Invalid hostname');
	}
	if (isBlockedHostname(host)) throw new Error('Blocked hostname');
	return host;
};
