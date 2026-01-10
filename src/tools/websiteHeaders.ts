import type { Context } from 'hono';

const parseUrlOrThrow = (raw: string) => {
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

const isBlockedHostname = (hostname: string) => {
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

export const handleWebsiteHeadersApi = async (c: Context) => {
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

  const fetchOnce = async (method: 'HEAD' | 'GET') => {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort('timeout'), 10_000);
    try {
      const res = await fetch(url.toString(), {
        method,
        redirect: 'follow',
        signal: controller.signal,
        headers: {
          'user-agent': 'onlinefreetools/website-headers',
          accept: '*/*',
        },
      });
      return res;
    } finally {
      clearTimeout(timeout);
    }
  };

  let res = await fetchOnce('HEAD');
  if (res.status === 405 || res.status === 501) {
    res = await fetchOnce('GET');
  }

  const headers: Record<string, string> = {};
  res.headers.forEach((value, key) => {
    headers[key] = value;
  });

  return c.json({
    inputUrl: raw,
    finalUrl: res.url,
    status: res.status,
    statusText: res.statusText,
    headers,
  });
};
