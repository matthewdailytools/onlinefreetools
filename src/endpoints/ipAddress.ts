import type { Context } from 'hono';

/** Cloudflare `request.cf` 中与本工具相关的地理与 ASN 字段（均可选）。 */
export type CfGeoIspSource = {
  country?: string;
  region?: string;
  regionCode?: string;
  city?: string;
  timezone?: string;
  asn?: number;
  asOrganization?: string;
};

/** API 返回的地理摘要（均为边缘 IP 库推断，非精确定位）。 */
export type IpGeoPayload = {
  country: string | null;
  region: string | null;
  regionCode: string | null;
  city: string | null;
  timezone: string | null;
};

/** API 返回的运营商/ASN 摘要。 */
export type IpIspPayload = {
  organization: string | null;
  asn: number | null;
};

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
 * 从 Cloudflare `request.cf` 提取轻量地理与运营商信息（无第三方 API）。
 * 字段可能缺失；VPN/代理下反映出口节点而非用户真实位置。
 * @param cf 请求上的 cf 对象
 */
export const extractCfGeoIsp = (
  cf: CfGeoIspSource | undefined | null
): { geo: IpGeoPayload | null; isp: IpIspPayload | null } => {
  if (!cf) return { geo: null, isp: null };

  const geo: IpGeoPayload = {
    country: cf.country ?? null,
    region: cf.region ?? null,
    regionCode: cf.regionCode ?? null,
    city: cf.city ?? null,
    timezone: cf.timezone ?? null,
  };

  const isp: IpIspPayload = {
    organization: cf.asOrganization ?? null,
    asn: cf.asn ?? null,
  };

  const hasGeo = Object.values(geo).some((v) => v != null && v !== '');
  const hasIsp = isp.organization != null || isp.asn != null;

  return {
    geo: hasGeo ? geo : null,
    isp: hasIsp ? isp : null,
  };
};

/**
 * 公网 IP 查询 API：返回边缘所见 **一条** 客户端地址（IPv4 **或** IPv6）及
 * Cloudflare 附带的粗略地区/运营商元数据（只读 `request.cf`，无第三方 geo API）。
 */
export const handleIpAddress = async (c: Context) => {
  let clientIp =
    normalizeClientIp(c.req.header('CF-Connecting-IP')) ||
    normalizeClientIp(c.req.header('X-Forwarded-For')) ||
    normalizeClientIp(c.req.header('X-Real-IP'));

  const cfRaw = c.req.raw.cf as (CfGeoIspSource & { 'client-ip'?: string }) | undefined;

  if (!clientIp) {
    if (cfRaw && typeof cfRaw['client-ip'] === 'string') {
      clientIp = normalizeClientIp(cfRaw['client-ip']);
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
  const { geo, isp } = extractCfGeoIsp(cfRaw);

  return c.json({ ip: clientIp, version, geo, isp });
};
