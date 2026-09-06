import type { Context } from 'hono';

/** 拉取单页 HTML 供 on-page-seo-checker 的 URL 模式使用；仅当次请求不存储。 */

export const parseUrlOrThrow = (raw: string) => {
  let url: URL;
  try {
    url = new URL(raw);
  } catch {
    throw new Error('Invalid URL');
  }

  if (url.protocol !== 'http:' && url.protocol !== 'https:') {
    throw new Error('Only http/https URLs are supported');
  }

  return url;
};

const isPrivateIpv4 = (ip: string) => {
  const m = ip.match(/^(\d+)\.(\d+)\.(\d+)\.(\d+)$/);
  if (!m) return false;
  const a = Number(m[1]);
  const b = Number(m[2]);

  if (a === 10) return true;
  if (a === 127) return true;
  if (a === 0) return true;
  if (a === 169 && b === 254) return true;
  if (a === 192 && b === 168) return true;
  if (a === 172 && b >= 16 && b <= 31) return true;
  return false;
};

export const isBlockedHostname = (hostname: string) => {
  const h = hostname.toLowerCase();
  if (h === 'localhost' || h.endsWith('.localhost') || h.endsWith('.local')) return true;
  if (h === '::1') return true;
  if (isPrivateIpv4(h)) return true;

  // IPv6 literal hostnames (URL.hostname is without brackets)
  if (h.includes(':')) {
    // fc00::/7 unique local, fe80::/10 link local
    if (h.startsWith('fc') || h.startsWith('fd')) return true;
    if (h.startsWith('fe80:')) return true;
  }

  return false;
};

/** 单次抓取允许的最大重定向跳数。 */
const MAX_REDIRECTS = 5;

/**
 * 逐跳跟随重定向，并对每一跳的主机名重新做私网/localhost 拦截。
 * `redirect: 'follow'` 只校验首跳，公网页面可用 302 把请求带向内网地址。
 *
 * @param startUrl 起始 URL（调用方须已校验协议与主机名）
 * @param userAgent 抓取时使用的 UA
 * @param signal 超时中断信号
 * @param accept 请求 Accept 头；默认 HTML，拉 CSS/JS 时由调用方改写
 * @returns 最终（非重定向）响应与其对应的最终 URL
 */
export const fetchHtmlFollowingRedirects = async (
  startUrl: URL,
  userAgent: string,
  signal: AbortSignal,
  accept = 'text/html,application/xhtml+xml',
): Promise<{ res: Response; finalUrl: string }> => {
  let current = startUrl;
  for (let hop = 0; hop <= MAX_REDIRECTS; hop++) {
    const res = await fetch(current.toString(), {
      method: 'GET',
      redirect: 'manual',
      signal,
      headers: {
        'user-agent': userAgent,
        accept,
      },
    });

    const location = res.headers.get('location');
    if (!(res.status >= 300 && res.status < 400 && location)) {
      return { res, finalUrl: current.toString() };
    }

    let next: URL;
    try {
      next = new URL(location, current);
    } catch {
      throw new Error('Invalid redirect target');
    }
    if (next.protocol !== 'http:' && next.protocol !== 'https:') {
      throw new Error('Only http/https URLs are supported');
    }
    if (isBlockedHostname(next.hostname)) {
      throw new Error('Blocked hostname');
    }
    current = next;
  }
  throw new Error('Too many redirects');
};

export const handleOnPageSeoApi = async (c: Context) => {
  const raw = (c.req.query('url') || '').trim();
  if (!raw) return c.json({ error: 'Missing url' }, 400);

  let url: URL;
  try {
    url = parseUrlOrThrow(raw);
  } catch (e: any) {
    return c.json({ error: e?.message || 'Invalid URL' }, 400);
  }

  if (isBlockedHostname(url.hostname)) {
    return c.json({ error: 'Blocked hostname' }, 400);
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort('timeout'), 10_000);
  try {
    const { res, finalUrl } = await fetchHtmlFollowingRedirects(
      url,
      'onlinefreetools/on-page-seo-checker',
      controller.signal,
    );

    const contentType = (res.headers.get('content-type') || '').toLowerCase();
    if (!contentType.includes('html') && !contentType.includes('xml')) {
      return c.json({ error: 'URL does not return HTML content' }, 400);
    }

    /** 限制正文大小，防止大页/流式滥用。 */
    const MAX_BYTES = 2_000_000;
    const buf = await res.arrayBuffer();
    if (buf.byteLength > MAX_BYTES) {
      return c.json({ error: 'Page is too large to check (limit 2 MB)' }, 413);
    }

    const html = new TextDecoder('utf-8', { fatal: false }).decode(buf);
    return c.json({
      inputUrl: raw,
      finalUrl,
      status: res.status,
      html,
    });
  } catch (e: any) {
    return c.json({ error: e?.message || 'Request failed' }, 502);
  } finally {
    clearTimeout(timeout);
  }
};
