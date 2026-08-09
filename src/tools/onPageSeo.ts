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
    const res = await fetch(url.toString(), {
      method: 'GET',
      redirect: 'follow',
      signal: controller.signal,
      headers: {
        'user-agent': 'onlinefreetools/on-page-seo-checker',
        accept: 'text/html,application/xhtml+xml',
      },
    });

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
      finalUrl: res.url,
      status: res.status,
      html,
    });
  } catch (e: any) {
    return c.json({ error: e?.message || 'Request failed' }, 502);
  } finally {
    clearTimeout(timeout);
  }
};
