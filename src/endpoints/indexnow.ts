/**
 * IndexNow 工具页 API：检查线上 key 文件，并代理向 IndexNow 端点提交 URL。
 * 路由挂载见 src/index.ts；协议见 https://www.indexnow.org/documentation
 */
import type { Context } from 'hono';

/** 单次上游 fetch 超时（毫秒） */
const FETCH_TIMEOUT_MS = 12_000;

/** UI / 防滥用：单次提交 URL 上限（协议允许至 10_000） */
const MAX_URLS_PER_REQUEST = 500;

/** IndexNow 官方聚合端点 */
const ENDPOINT_INDEXNOW = 'https://api.indexnow.org/indexnow';

/** Bing 直连端点 */
const ENDPOINT_BING = 'https://www.bing.com/indexnow';

/** 端点别名 → 完整 URL */
const ENDPOINT_MAP: Record<string, string> = {
  indexnow: ENDPOINT_INDEXNOW,
  bing: ENDPOINT_BING,
};

/** 每分钟每 IP 的 Check 上限 */
const CHECK_RATE_LIMIT = 30;

/** 每分钟每 IP 的 Submit 上限 */
const SUBMIT_RATE_LIMIT = 12;

/** 滑动窗口时长（毫秒） */
const RATE_WINDOW_MS = 60_000;

/**
 * 简易内存限流条目（Worker isolate 内尽力而为，非全局强一致）。
 */
interface RateBucket {
  /** 窗口内计数 */
  count: number;
  /** 窗口结束时间戳 */
  resetAt: number;
}

/** Check-key 限流表：clientIp → bucket */
const checkBuckets = new Map<string, RateBucket>();

/** Submit 限流表：clientIp → bucket */
const submitBuckets = new Map<string, RateBucket>();

/**
 * 读取客户端 IP（Cloudflare / 反代常见头）。
 * @param c Hono 上下文
 * @returns IP 字符串，未知时为 unknown
 */
const clientIp = (c: Context): string => {
  const cf = c.req.header('CF-Connecting-IP');
  if (cf && cf.trim()) return cf.trim();
  const xff = c.req.header('X-Forwarded-For');
  if (xff) {
    const first = xff.split(',')[0]?.trim();
    if (first) return first;
  }
  return 'unknown';
};

/**
 * 滑动窗口限流：超限返回 false。
 * @param map 限流表
 * @param ip 客户端 IP
 * @param limit 窗口内最大次数
 */
const allowRate = (map: Map<string, RateBucket>, ip: string, limit: number): boolean => {
  const now = Date.now();
  const bucket = map.get(ip);
  if (!bucket || now >= bucket.resetAt) {
    map.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return true;
  }
  if (bucket.count >= limit) return false;
  bucket.count += 1;
  return true;
};

/**
 * 校验 IPv4 是否为私网 / 环回等不可探测地址。
 * @param ip IPv4 字符串
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
 * 是否拦截不可探测的主机名（localhost / 私网 / link-local）。
 * @param hostname URL.hostname
 */
const isBlockedHostname = (hostname: string): boolean => {
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
 * 校验 IndexNow key 字符集与长度（协议：8–128，[A-Za-z0-9-]）。
 * @param key 原始 key
 */
const validateKey = (key: string): { ok: true; key: string } | { ok: false; error: string } => {
  const k = key.trim();
  if (!/^[A-Za-z0-9-]{8,128}$/.test(k)) {
    return { ok: false, error: 'Key must be 8–128 characters of [A-Za-z0-9-]' };
  }
  return { ok: true, key: k };
};

/**
 * 规范化 host：去协议、路径、端口、尾点；小写。
 * @param raw 用户输入
 */
const normalizeHost = (raw: string): { host: string } | { error: string } => {
  let s = raw.trim().toLowerCase();
  if (!s) return { error: 'Host is required' };
  s = s.replace(/^https?:\/\//, '');
  s = s.split('/')[0] || '';
  s = s.replace(/:\d+$/, '');
  if (s.endsWith('.')) s = s.slice(0, -1);
  if (!s || s.includes(' ') || s.includes('/') || s.includes('://')) {
    return { error: 'Invalid host' };
  }
  if (s.length > 253) return { error: 'Host too long' };
  const labels = s.split('.');
  for (const label of labels) {
    if (!label || label.length > 63) return { error: 'Invalid host label' };
    if (!/^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(label)) {
      return { error: 'Invalid host label' };
    }
  }
  if (isBlockedHostname(s)) return { error: 'Blocked host' };
  return { host: s };
};

/**
 * 解析并校验绝对 http(s) URL，且 hostname 必须等于期望 host。
 * @param raw URL 字符串
 * @param expectedHost 规范化后的 host
 */
const parseUrlForHost = (
  raw: string,
  expectedHost: string,
): { url: string } | { error: string } => {
  let u: URL;
  try {
    u = new URL(raw.trim());
  } catch {
    return { error: `Invalid URL: ${raw}` };
  }
  if (u.protocol !== 'http:' && u.protocol !== 'https:') {
    return { error: `Only http/https allowed: ${raw}` };
  }
  if (isBlockedHostname(u.hostname)) {
    return { error: `Blocked hostname: ${u.hostname}` };
  }
  if (u.hostname.toLowerCase() !== expectedHost) {
    return { error: `URL host mismatch (expected ${expectedHost}): ${raw}` };
  }
  return { url: u.toString() };
};

/**
 * 带超时的 fetch。
 * @param input 请求 URL
 * @param init RequestInit
 */
const fetchWithTimeout = async (input: string, init: RequestInit = {}): Promise<Response> => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort('timeout'), FETCH_TIMEOUT_MS);
  try {
    return await fetch(input, { ...init, signal: controller.signal });
  } catch (error: unknown) {
    if (error instanceof Error && error.name === 'AbortError') {
      throw new Error('Upstream timed out');
    }
    throw error instanceof Error ? error : new Error('Upstream request failed');
  } finally {
    clearTimeout(timeoutId);
  }
};

/**
 * GET /api/tools/indexnow/check-key?url=&key=
 * 代抓 key 文件并比对正文（trim）是否等于 key；拒绝跨域重定向。
 *
 * @param c Hono 上下文
 */
export const handleIndexnowCheckKey = async (c: Context) => {
  if (!allowRate(checkBuckets, clientIp(c), CHECK_RATE_LIMIT)) {
    return c.json({ error: 'Too many check-key requests; try again shortly' }, 429);
  }

  const rawUrl = (c.req.query('url') || '').trim();
  const keyResult = validateKey(c.req.query('key') || '');
  if (!keyResult.ok) return c.json({ error: keyResult.error }, 400);
  if (!rawUrl) return c.json({ error: 'Missing url' }, 400);

  let parsed: URL;
  try {
    parsed = new URL(rawUrl);
  } catch {
    return c.json({ error: 'Invalid url' }, 400);
  }
  if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
    return c.json({ error: 'Only http/https URLs are supported' }, 400);
  }
  if (isBlockedHostname(parsed.hostname)) {
    return c.json({ error: 'Blocked hostname' }, 400);
  }

  let res: Response;
  try {
    res = await fetchWithTimeout(parsed.toString(), {
      method: 'GET',
      redirect: 'follow',
      headers: {
        Accept: 'text/plain,*/*',
        'User-Agent': 'onlinefreetools/indexnow-check-key',
      },
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Fetch failed';
    return c.json({ error: message }, 502);
  }

  /** 最终落地 URL（跟随重定向后） */
  let finalUrl = res.url || parsed.toString();
  let finalHost = '';
  try {
    finalHost = new URL(finalUrl).hostname.toLowerCase();
  } catch {
    finalHost = '';
  }
  if (!finalHost || finalHost !== parsed.hostname.toLowerCase()) {
    return c.json(
      {
        ok: false,
        status: res.status,
        inputUrl: rawUrl,
        finalUrl,
        bodyMatch: false,
        error: 'Key URL redirected to a different host',
      },
      200,
    );
  }

  const bodyText = (await res.text()).trim();
  const bodyMatch = res.status === 200 && bodyText === keyResult.key;
  const looksLikeHtml = /^\s*</.test(bodyText) || /<html/i.test(bodyText);

  return c.json({
    ok: bodyMatch,
    status: res.status,
    inputUrl: rawUrl,
    finalUrl,
    bodyMatch,
    bodyPreview: bodyText.slice(0, 160),
    looksLikeHtml,
  });
};

/**
 * POST /api/tools/indexnow/submit
 * body: { host, key, keyLocation?, urlList, endpoint? }
 * 校验后转发至 IndexNow / Bing。
 *
 * @param c Hono 上下文
 */
export const handleIndexnowSubmit = async (c: Context) => {
  if (!allowRate(submitBuckets, clientIp(c), SUBMIT_RATE_LIMIT)) {
    return c.json({ error: 'Too many submit requests; try again shortly' }, 429);
  }

  let body: unknown;
  try {
    body = await c.req.json();
  } catch {
    return c.json({ error: 'Invalid JSON body' }, 400);
  }

  if (!body || typeof body !== 'object') {
    return c.json({ error: 'Invalid JSON body' }, 400);
  }

  const b = body as Record<string, unknown>;
  const hostResult = normalizeHost(String(b.host ?? ''));
  if ('error' in hostResult) return c.json({ error: hostResult.error }, 400);

  const keyResult = validateKey(String(b.key ?? ''));
  if (!keyResult.ok) return c.json({ error: keyResult.error }, 400);

  const endpointName = String(b.endpoint || 'indexnow').toLowerCase();
  const endpoint = ENDPOINT_MAP[endpointName];
  if (!endpoint) {
    return c.json({ error: 'Invalid endpoint; use indexnow or bing' }, 400);
  }

  /** 默认 keyLocation：https://{host}/{key}.txt */
  let keyLocation = String(b.keyLocation || '').trim();
  if (!keyLocation) {
    keyLocation = `https://${hostResult.host}/${keyResult.key}.txt`;
  }

  const keyLocParsed = parseUrlForHost(keyLocation, hostResult.host);
  if ('error' in keyLocParsed) {
    return c.json({ error: `keyLocation: ${keyLocParsed.error}` }, 400);
  }
  keyLocation = keyLocParsed.url;

  if (!Array.isArray(b.urlList)) {
    return c.json({ error: 'urlList must be an array' }, 400);
  }
  if (b.urlList.length === 0) {
    return c.json({ error: 'urlList is empty' }, 400);
  }
  if (b.urlList.length > MAX_URLS_PER_REQUEST) {
    return c.json(
      { error: `urlList exceeds limit of ${MAX_URLS_PER_REQUEST} URLs per request` },
      400,
    );
  }

  /** 去重后的合法 URL */
  const urlList: string[] = [];
  const seen = new Set<string>();
  for (const item of b.urlList) {
    const raw = String(item ?? '').trim();
    if (!raw) continue;
    const parsed = parseUrlForHost(raw, hostResult.host);
    if ('error' in parsed) {
      return c.json({ error: parsed.error }, 400);
    }
    if (seen.has(parsed.url)) continue;
    seen.add(parsed.url);
    urlList.push(parsed.url);
  }
  if (urlList.length === 0) {
    return c.json({ error: 'No valid URLs after filtering' }, 400);
  }

  /** IndexNow POST JSON */
  const payload = {
    host: hostResult.host,
    key: keyResult.key,
    keyLocation,
    urlList,
  };

  let res: Response;
  try {
    res = await fetchWithTimeout(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'User-Agent': 'onlinefreetools/indexnow-submit',
      },
      body: JSON.stringify(payload),
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Upstream request failed';
    return c.json({ error: message }, 502);
  }

  const responseBody = await res.text();
  return c.json({
    ok: res.status === 200 || res.status === 202,
    status: res.status,
    endpoint,
    host: hostResult.host,
    keyLocation,
    urlCount: urlList.length,
    bodyPreview: responseBody.slice(0, 500),
  });
};
