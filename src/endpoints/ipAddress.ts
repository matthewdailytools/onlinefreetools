import type { Context } from 'hono';

/**
 * 从可能含多跳的 X-Forwarded-For 等头中提取第一个 IP 字符串。
 * @param raw 原始头值
 */
const normalizeClientIp = (raw: string | undefined | null): string | null => {
  if (!raw) return null;
  const first = raw.split(',')[0]?.trim();
  return first || null;
};

/**
 * 判断地址为 IPv4 还是 IPv6（基于本次连接所见字符串，非同时获取双栈）。
 * @param ip IP 字符串
 */
export const detectIpVersion = (ip: string): '4' | '6' | null => {
  const trimmed = ip.trim();
  if (!trimmed) return null;
  if (trimmed.includes(':')) return '6';
  if (/^\d{1,3}(\.\d{1,3}){3}$/.test(trimmed)) return '4';
  return null;
};

/**
 * 公网 IP 查询 API：返回边缘所见 **一条** 客户端地址（IPv4 **或** IPv6，取决于本次请求走哪条路径）。
 * 非同时拉取双栈两个地址；双栈用户刷新或换网络后结果可能切换。
 */
export const handleIpAddress = async (c: Context) => {
  let clientIp =
    normalizeClientIp(c.req.header('CF-Connecting-IP')) ||
    normalizeClientIp(c.req.header('X-Forwarded-For')) ||
    normalizeClientIp(c.req.header('X-Real-IP'));

  if (!clientIp) {
    const cf = c.req.raw.cf as { 'client-ip'?: string } | undefined;
    if (cf && typeof cf['client-ip'] === 'string') {
      clientIp = normalizeClientIp(cf['client-ip']);
    } else {
      clientIp =
        normalizeClientIp(c.req.header('x-real-ip')) ||
        normalizeClientIp(c.req.raw.headers.get('x-forwarded-for'));
    }
  }

  if (!clientIp) {
    return c.json({ error: 'Unable to determine client IP address' }, 400);
  }

  const version = detectIpVersion(clientIp);
  return c.json({ ip: clientIp, version });
};
