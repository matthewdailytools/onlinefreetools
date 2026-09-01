/**
 * Prompt AI API 限流：分钟级（isolate 内存）+ 日级（KV，跨 isolate）。
 */

/** 滑动窗口桶（内存）。 */
interface RateBucket {
	count: number;
	resetAt: number;
}

/** 分钟级限流表：ip → bucket */
const minuteBuckets = new Map<string, RateBucket>();

/** 滑动窗口毫秒（1 分钟）。 */
const MINUTE_WINDOW_MS = 60_000;

/**
 * 读取 UTC 日期键 `YYYY-MM-DD`（Neurons 日切对齐 UTC）。
 */
export const utcDateKey = (): string => new Date().toISOString().slice(0, 10);

/**
 * isolate 内滑动窗口限流。
 * @param ip 客户端 IP
 * @param limit 窗口内最大次数
 */
export const allowMinuteRate = (ip: string, limit: number): boolean => {
	const now = Date.now();
	const bucket = minuteBuckets.get(ip);
	if (!bucket || now >= bucket.resetAt) {
		minuteBuckets.set(ip, { count: 1, resetAt: now + MINUTE_WINDOW_MS });
		return true;
	}
	if (bucket.count >= limit) return false;
	bucket.count += 1;
	return true;
};

/**
 * KV 计数器：读取当前值。
 * @param kv KV 命名空间
 * @param key 键
 */
const kvGetCount = async (kv: KVNamespace, key: string): Promise<number> => {
	const raw = await kv.get(key);
	if (!raw) return 0;
	const n = Number.parseInt(raw, 10);
	return Number.isFinite(n) && n >= 0 ? n : 0;
};

/**
 * KV 日配额：超限返回 false；否则递增并返回 true。
 * @param kv KV 命名空间
 * @param key 键（含日期）
 * @param limit 日上限
 * @param ttlSeconds KV 过期（秒）
 */
export const allowKvDailyRate = async (
	kv: KVNamespace,
	key: string,
	limit: number,
	ttlSeconds = 86_400 * 2,
): Promise<boolean> => {
	const current = await kvGetCount(kv, key);
	if (current >= limit) return false;
	await kv.put(key, String(current + 1), { expirationTtl: ttlSeconds });
	return true;
};

/**
 * 组合 IP 日限 + 全站日限（KV 不可用时仅分钟限流 + 放行日限）。
 * @param opts 参数
 */
export const checkPromptAiDailyLimits = async (opts: {
	kv: KVNamespace | undefined;
	ip: string;
	ipDailyLimit: number;
	siteDailyLimit: number;
}): Promise<{ ok: true } | { ok: false; code: 'rate_limit_ip' | 'rate_limit_site' }> => {
	if (!opts.kv) {
		return { ok: true };
	}
	const day = utcDateKey();
	const ipKey = `prompt-ai:ip:${opts.ip}:${day}`;
	const siteKey = `prompt-ai:site:${day}`;

	const siteCount = await kvGetCount(opts.kv, siteKey);
	if (siteCount >= opts.siteDailyLimit) {
		return { ok: false, code: 'rate_limit_site' };
	}

	const ipCount = await kvGetCount(opts.kv, ipKey);
	if (ipCount >= opts.ipDailyLimit) {
		return { ok: false, code: 'rate_limit_ip' };
	}

	await opts.kv.put(ipKey, String(ipCount + 1), { expirationTtl: 86_400 * 2 });
	await opts.kv.put(siteKey, String(siteCount + 1), { expirationTtl: 86_400 * 2 });
	return { ok: true };
};
