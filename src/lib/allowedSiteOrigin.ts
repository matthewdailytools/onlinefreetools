/**
 * 校验请求是否来自本站（防跨站直接调用 Worker API）。
 */

/** 生产默认 origin（无 env 覆盖时使用）。 */
const DEFAULT_SITE_ORIGINS = [
	'https://onlinefreetools.org',
	'http://localhost:8787',
	'http://127.0.0.1:8787',
];

/**
 * 解析允许的 origin 列表（逗号分隔 env 可追加 staging）。
 * @param extraOrigins 来自 `SITE_ALLOWED_ORIGINS` 的逗号列表
 */
export const parseAllowedOrigins = (extraOrigins?: string): string[] => {
	const fromEnv = String(extraOrigins || '')
		.split(',')
		.map((s) => s.trim())
		.filter(Boolean);
	return [...new Set([...DEFAULT_SITE_ORIGINS, ...fromEnv])];
};

/**
 * 判断 Origin / Referer 是否匹配允许列表。
 * @param origin Origin 头
 * @param referer Referer 头
 * @param allowed 允许 origin 完整 URL（scheme+host+port）
 */
export const isAllowedSiteRequest = (
	origin: string | undefined,
	referer: string | undefined,
	allowed: string[],
): boolean => {
	const tryMatch = (raw: string | undefined): boolean => {
		if (!raw || !raw.trim()) return false;
		try {
			const u = new URL(raw.trim());
			const normalized = `${u.protocol}//${u.host}`;
			return allowed.some((a) => a === normalized);
		} catch {
			return false;
		}
	};
	return tryMatch(origin) || tryMatch(referer);
};
