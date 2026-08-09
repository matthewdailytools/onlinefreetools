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

  /** 重定向链最长 5 跳，防止无限循环。 */
  const MAX_REDIRECTS = 5;
  /** 每跳记录：状态码、Location、来源 URL。 */
  const redirects: Array<{ status: number; location: string; from: string }> = [];

  /**
   * 以指定方法请求目标，返回原始响应（redirect: manual，不自动跟随）。
   * @param target 完整 URL
   * @param method HEAD 或 GET
   */
  const fetchOnce = async (target: string, method: 'HEAD' | 'GET') => {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort('timeout'), 10_000);
    try {
      return await fetch(target, {
        method,
        redirect: 'manual',
        signal: controller.signal,
        headers: {
          'user-agent': 'onlinefreetools/website-headers',
          accept: '*/*',
        },
      });
    } finally {
      clearTimeout(timeout);
    }
  };

  let current = url.toString();
  let method: 'HEAD' | 'GET' = 'HEAD';
  let res: Response | undefined;

  // 手动跟随重定向，收集每一跳；HEAD 被拒（405/501）时改用 GET 重试同一 URL。
  for (let hop = 0; hop <= MAX_REDIRECTS; ) {
    res = await fetchOnce(current, method);
    const status = res.status;
    const location = res.headers.get('location');

    if (method === 'HEAD' && (status === 405 || status === 501)) {
      method = 'GET';
      continue;
    }

    if (status >= 300 && status < 400 && location) {
      redirects.push({ status, location, from: current });
      try {
        current = new URL(location, current).toString();
      } catch {
        break; // Location 无法解析为 URL —— 保留当前响应
      }
      hop++;
      continue;
    }
    break;
  }

  if (!res) {
    return c.json({ error: 'Request failed' }, 502);
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
    redirects,
  });
};
