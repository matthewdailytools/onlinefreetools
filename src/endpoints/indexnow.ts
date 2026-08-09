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

/** 每分钟每 IP 的 Resolve（解析 sitemap）上限 */
const RESOLVE_RATE_LIMIT = 20;

/** 每分钟每 IP 的 Submit 上限 */
const SUBMIT_RATE_LIMIT = 12;

/** 滑动窗口时长（毫秒） */
const RATE_WINDOW_MS = 60_000;

/** sitemapindex 最大递归深度 */
const MAX_SITEMAP_DEPTH = 3;

/** 单次解析最多拉取的子 sitemap 数（防滥用） */
const MAX_SITEMAP_FETCHES = 40;

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

/** Resolve-urls 限流表：clientIp → bucket */
const resolveBuckets = new Map<string, RateBucket>();

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
 * 从 sitemap / sitemapindex XML 中提取全部 `<loc>` 文本。
 * @param xml XML 正文
 * @returns loc URL 列表（可能含重复）
 */
const extractLocTexts = (xml: string): string[] => {
  /** 匹配到的 loc 列表 */
  const list: string[] = [];
  const re = /<loc>\s*([^<\s]+)\s*<\/loc>/gi;
  let match = re.exec(xml);
  while (match) {
    const url = match[1].trim();
    if (url) list.push(url);
    match = re.exec(xml);
  }
  return list;
};

/**
 * 判断 XML 是否为 sitemap index（子项是 sitemap，不是页面）。
 * @param xml XML 正文
 */
const isSitemapIndexXml = (xml: string): boolean => /<sitemapindex[\s>]/i.test(xml);

/**
 * 判断文本是否像 sitemap / sitemapindex XML。
 * @param text 用户粘贴内容
 */
const looksLikeSitemapXml = (text: string): boolean =>
  /<urlset[\s>]/i.test(text) || /<sitemapindex[\s>]/i.test(text);

/**
 * 判断绝对 URL 是否像 sitemap 资源（应解析展开，而非当作页面提交）。
 * @param raw 绝对 URL
 */
const looksLikeSitemapUrl = (raw: string): boolean => {
  let u: URL;
  try {
    u = new URL(raw.trim());
  } catch {
    return false;
  }
  /** 小写 pathname */
  const path = u.pathname.toLowerCase();
  if (path.endsWith('.xml') || path.endsWith('.xml.gz')) {
    return path.includes('sitemap');
  }
  return /\/sitemap(?:[_-]|$|index)/i.test(path);
};

/**
 * 去重并保持首次出现顺序。
 * @param list URL 列表
 */
const uniquePreserveOrder = (list: string[]): string[] => {
  /** 已见集合 */
  const seen = new Set<string>();
  /** 输出 */
  const out: string[] = [];
  for (const item of list) {
    if (!item || seen.has(item)) continue;
    seen.add(item);
    out.push(item);
  }
  return out;
};

/**
 * 从多行文本或粘贴的 sitemap XML 提取候选 URL（可能仍含子 sitemap URL）。
 * @param raw 文本框原文
 */
const extractCandidateUrlsFromText = (raw: string): string[] => {
  /** 原文 */
  const text = raw || '';
  if (looksLikeSitemapXml(text)) {
    return uniquePreserveOrder(extractLocTexts(text));
  }
  /** 按行解析的 https URL */
  const urls: string[] = [];
  for (const line of text.split(/\r?\n/)) {
    const s = line.replace(/#.*$/, '').trim();
    if (!s) continue;
    if (/^https?:\/\//i.test(s)) urls.push(s);
  }
  return uniquePreserveOrder(urls);
};

/**
 * 拉取单个 sitemap 并展开为页面 URL；sitemapindex 则递归子 sitemap。
 * IndexNow 协议只接受页面 urlList，不能把 sitemap 地址本身当作变更页提交。
 *
 * @param source sitemap 绝对 URL
 * @param expectedHost 规范化 host（仅接受同 host）
 * @param depth 当前递归深度
 * @param visited 已访问来源（防环）
 * @param fetchCount 可变计数器：已 fetch 次数
 * @returns 页面绝对 URL 列表
 */
const loadPageUrlsFromSitemapSource = async (
  source: string,
  expectedHost: string,
  depth: number,
  visited: Set<string>,
  fetchCount: { n: number },
): Promise<string[]> => {
  if (depth > MAX_SITEMAP_DEPTH) {
    throw new Error(`Sitemap index nesting too deep (>${MAX_SITEMAP_DEPTH}): ${source}`);
  }
  if (visited.has(source)) return [];
  visited.add(source);

  const parsedSource = parseUrlForHost(source, expectedHost);
  if ('error' in parsedSource) {
    throw new Error(parsedSource.error);
  }

  if (fetchCount.n >= MAX_SITEMAP_FETCHES) {
    throw new Error(`Too many sitemap fetches (max ${MAX_SITEMAP_FETCHES})`);
  }
  fetchCount.n += 1;

  let res: Response;
  try {
    res = await fetchWithTimeout(parsedSource.url, {
      method: 'GET',
      redirect: 'follow',
      headers: {
        Accept: 'application/xml,text/xml,*/*',
        'User-Agent': 'onlinefreetools/indexnow-resolve-sitemap',
      },
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Sitemap fetch failed';
    throw new Error(`${message}: ${source}`);
  }
  if (!res.ok) {
    throw new Error(`Failed to fetch sitemap ${source}: HTTP ${res.status}`);
  }

  /** 最终落地 URL（跟随重定向后）须仍同 host */
  const finalUrl = res.url || parsedSource.url;
  let finalHost = '';
  try {
    finalHost = new URL(finalUrl).hostname.toLowerCase();
  } catch {
    finalHost = '';
  }
  if (!finalHost || finalHost !== expectedHost) {
    throw new Error(`Sitemap redirected to a different host: ${source} → ${finalUrl}`);
  }

  /** sitemap XML 正文 */
  const xml = await res.text();
  /** 全部 loc */
  const locs = extractLocTexts(xml);
  if (locs.length === 0) {
    throw new Error(`No <loc> found in sitemap: ${source}`);
  }

  if (isSitemapIndexXml(xml)) {
    /** 子 sitemap 展开后的页面 URL */
    const nested: string[] = [];
    for (const child of locs) {
      nested.push(
        ...(await loadPageUrlsFromSitemapSource(
          child,
          expectedHost,
          depth + 1,
          visited,
          fetchCount,
        )),
      );
    }
    return nested;
  }

  // urlset：只保留同 host 的页面 URL；若 loc 仍像子 sitemap 则再展开
  /** 页面 URL 累积 */
  const pages: string[] = [];
  for (const loc of locs) {
    const parsed = parseUrlForHost(loc, expectedHost);
    if ('error' in parsed) continue;
    if (looksLikeSitemapUrl(parsed.url)) {
      pages.push(
        ...(await loadPageUrlsFromSitemapSource(
          parsed.url,
          expectedHost,
          depth + 1,
          visited,
          fetchCount,
        )),
      );
      continue;
    }
    pages.push(parsed.url);
  }
  return pages;
};

/**
 * 把候选 URL（页面或 sitemap）展开为最终应提交的页面 urlList。
 * @param candidates 候选绝对 URL
 * @param expectedHost 规范化 host
 */
const expandCandidatesToPageUrls = async (
  candidates: string[],
  expectedHost: string,
): Promise<{ urlList: string[]; sitemapSources: string[]; fetchCount: number }> => {
  /** 最终页面 URL */
  const pages: string[] = [];
  /** 被当作 sitemap 展开的来源 */
  const sitemapSources: string[] = [];
  /** 已访问 sitemap（防环） */
  const visited = new Set<string>();
  /** fetch 计数 */
  const fetchCount = { n: 0 };

  for (const raw of candidates) {
    const parsed = parseUrlForHost(raw, expectedHost);
    if ('error' in parsed) {
      throw new Error(parsed.error);
    }
    if (looksLikeSitemapUrl(parsed.url)) {
      sitemapSources.push(parsed.url);
      pages.push(
        ...(await loadPageUrlsFromSitemapSource(
          parsed.url,
          expectedHost,
          0,
          visited,
          fetchCount,
        )),
      );
      continue;
    }
    pages.push(parsed.url);
  }

  return {
    urlList: uniquePreserveOrder(pages),
    sitemapSources: uniquePreserveOrder(sitemapSources),
    fetchCount: fetchCount.n,
  };
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
 * POST /api/tools/indexnow/resolve-urls
 * body: { host, text? } 或 { host, urlList? }
 * 解析粘贴的 sitemap XML / sitemap URL，展开为页面 urlList（绝不把 sitemap 本身当页面提交）。
 *
 * @param c Hono 上下文
 */
export const handleIndexnowResolveUrls = async (c: Context) => {
  if (!allowRate(resolveBuckets, clientIp(c), RESOLVE_RATE_LIMIT)) {
    return c.json({ error: 'Too many resolve-urls requests; try again shortly' }, 429);
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

  /** 候选 URL（可能含 sitemap） */
  let candidates: string[] = [];
  if (typeof b.text === 'string' && b.text.trim()) {
    candidates = extractCandidateUrlsFromText(b.text);
  } else if (Array.isArray(b.urlList)) {
    candidates = uniquePreserveOrder(
      b.urlList.map((item) => String(item ?? '').trim()).filter(Boolean),
    );
  }

  if (candidates.length === 0) {
    return c.json(
      { error: 'Add at least one URL, a sitemap URL, or sitemap XML with <loc>' },
      400,
    );
  }
  if (candidates.length > MAX_URLS_PER_REQUEST) {
    return c.json(
      { error: `Input exceeds limit of ${MAX_URLS_PER_REQUEST} URLs/locs per request` },
      400,
    );
  }

  try {
    const expanded = await expandCandidatesToPageUrls(candidates, hostResult.host);
    /** 截断到工具上限（与 submit 一致） */
    const truncated = expanded.urlList.length > MAX_URLS_PER_REQUEST;
    const urlList = expanded.urlList.slice(0, MAX_URLS_PER_REQUEST);
    if (urlList.length === 0) {
      return c.json({ error: 'No page URLs after expanding sitemap(s)' }, 400);
    }
    return c.json({
      ok: true,
      host: hostResult.host,
      urlList,
      urlCount: urlList.length,
      totalBeforeCap: expanded.urlList.length,
      truncated,
      sitemapSources: expanded.sitemapSources,
      sitemapFetchCount: expanded.fetchCount,
      note:
        expanded.sitemapSources.length > 0
          ? 'Sitemap URL(s) were fetched and expanded to page <loc> URLs; the sitemap itself is not submitted to IndexNow.'
          : undefined,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Failed to resolve URLs';
    return c.json({ error: message }, 400);
  }
};

/**
 * POST /api/tools/indexnow/submit
 * body: { host, key, keyLocation?, urlList, endpoint? }
 * 校验后：若 urlList 含 sitemap URL 则先展开为页面列表，再转发至 IndexNow / Bing。
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

  /** 输入候选（可能含 sitemap URL） */
  const candidates = uniquePreserveOrder(
    b.urlList.map((item) => String(item ?? '').trim()).filter(Boolean),
  );

  /** 展开后的页面 URL（IndexNow 只提交页面，不提交 sitemap 地址） */
  let urlList: string[] = [];
  /** 被展开的 sitemap 来源 */
  let sitemapSources: string[] = [];
  try {
    const expanded = await expandCandidatesToPageUrls(candidates, hostResult.host);
    sitemapSources = expanded.sitemapSources;
    urlList = expanded.urlList;
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Failed to expand sitemap URLs';
    return c.json({ error: message }, 400);
  }

  if (urlList.length === 0) {
    return c.json({ error: 'No valid page URLs after expanding sitemap(s)' }, 400);
  }
  if (urlList.length > MAX_URLS_PER_REQUEST) {
    return c.json(
      {
        error: `Expanded urlList exceeds limit of ${MAX_URLS_PER_REQUEST} URLs (got ${urlList.length}). Narrow the sitemap or submit in batches.`,
      },
      400,
    );
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
    sitemapSources,
    bodyPreview: responseBody.slice(0, 500),
  });
};
