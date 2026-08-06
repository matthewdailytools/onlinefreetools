import type { Context } from 'hono';

/** Cloudflare DNS-over-HTTPS JSON API 根地址 */
const DOH_ENDPOINT = 'https://cloudflare-dns.com/dns-query';

/** 单次上游 DoH 请求超时（毫秒） */
const FETCH_TIMEOUT_MS = 8_000;

/** 本端点允许的 DNS 记录类型（查询参数 `type`，大小写不敏感） */
const ALLOWED_DNS_TYPES = ['A', 'AAAA', 'CNAME'] as const;

/** 允许的 DNS 记录类型联合类型 */
type AllowedDnsType = (typeof ALLOWED_DNS_TYPES)[number];

/** DoH JSON 中单条资源记录（Answer / Authority 等）的精简形状 */
interface DohResourceRecord {
  name: string;
  type: number;
  TTL: number;
  data: string;
}

/** Cloudflare DoH 返回的 JSON 响应体（仅保留本端点会用到的字段） */
interface DohJsonResponse {
  Status: number;
  Answer?: DohResourceRecord[];
  Authority?: DohResourceRecord[];
  Additional?: DohResourceRecord[];
}

/** 本端点成功响应体：透传 DoH 关键字段，并附上规范化后的查询名与类型 */
interface DnsLookupSuccessBody {
  name: string;
  type: AllowedDnsType;
  Status: number;
  Answer?: DohResourceRecord[];
  Authority?: DohResourceRecord[];
}

/**
 * 校验单个 DNS 标签（label）是否符合主机名规则。
 * 允许 punycode（xn-- 前缀）等国际域名的 ASCII 表示；仅允许字母、数字与连字符，
 * 且不得以连字符开头或结尾。
 *
 * @param label - 主机名中的一个点分段标签
 * @returns 标签合法时返回 true，否则 false
 */
const isValidHostnameLabel = (label: string): boolean => {
  if (label.length < 1 || label.length > 63) {
    return false;
  }
  return /^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(label);
};

/**
 * 规范化并校验用户传入的主机名（`name` 查询参数）。
 * 流程：trim → 小写 → 去掉末尾根点 → 拒绝 URL/路径/空格 → 按标签校验长度与字符集。
 *
 * @param raw - 原始查询字符串
 * @returns 校验通过时返回规范化主机名；失败时返回 `{ error }` 供 400 响应使用
 */
const normalizeAndValidateHostname = (
  raw: string,
): { name: string } | { error: string } => {
  let name = raw.trim().toLowerCase();

  if (name.endsWith('.')) {
    name = name.slice(0, -1);
  }

  if (!name) {
    return { error: 'Hostname is required' };
  }

  if (name.includes('://') || name.includes('/') || name.includes(' ')) {
    return { error: 'Invalid hostname' };
  }

  if (name.length > 253) {
    return { error: 'Hostname exceeds 253 characters' };
  }

  const labels = name.split('.');
  for (const label of labels) {
    if (!isValidHostnameLabel(label)) {
      return { error: 'Invalid hostname label' };
    }
  }

  return { name };
};

/**
 * 解析并校验 DNS 记录类型查询参数。
 * 未传时默认为 `A`；仅允许 A、AAAA、CNAME（每次请求一种类型）。
 *
 * @param raw - `type` 查询参数原始值，可为 undefined
 * @returns 校验通过时返回大写类型名；失败时返回 `{ error }` 供 400 响应使用
 */
const parseDnsType = (
  raw: string | undefined,
): { type: AllowedDnsType } | { error: string } => {
  const normalized = (raw?.trim() || 'A').toUpperCase();

  if (!ALLOWED_DNS_TYPES.includes(normalized as AllowedDnsType)) {
    return { error: 'Invalid type; allowed: A, AAAA, CNAME' };
  }

  return { type: normalized as AllowedDnsType };
};

/**
 * 向 Cloudflare DoH 发起 JSON 查询，并在超时时间内等待响应。
 *
 * @param name - 已规范化且校验通过的主机名
 * @param type - 已校验通过的记录类型（A / AAAA / CNAME）
 * @returns 解析后的 DoH JSON；网络/超时/非 2xx/JSON 解析失败时抛出 Error
 */
const fetchDohJson = async (
  name: string,
  type: AllowedDnsType,
): Promise<DohJsonResponse> => {
  const url = `${DOH_ENDPOINT}?name=${encodeURIComponent(name)}&type=${type}`;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort('timeout'), FETCH_TIMEOUT_MS);

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/dns-json',
      },
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(`DoH upstream returned HTTP ${response.status}`);
    }

    const payload = (await response.json()) as DohJsonResponse;

    if (typeof payload.Status !== 'number') {
      throw new Error('DoH upstream returned invalid JSON');
    }

    return payload;
  } catch (error: unknown) {
    if (error instanceof Error && error.name === 'AbortError') {
      throw new Error('DoH upstream timed out');
    }
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('DoH upstream request failed');
  } finally {
    clearTimeout(timeoutId);
  }
};

/**
 * DNS-over-HTTPS 查询 API 处理器（Hono Context）。
 *
 * 查询参数：
 * - `name`（必填）：主机名，规范化后转发至 Cloudflare DoH
 * - `type`（可选）：A | AAAA | CNAME，默认 A；每次请求仅支持一种类型
 *
 * 成功（200）：`{ name, type, Status, Answer?, Authority? }`，字段主要来自 DoH JSON。
 * 校验失败（400）：`{ error: string }`。
 * 上游失败（502）：`{ error: string }`（超时、HTTP 错误或无效响应等）。
 *
 * @param c - Hono 请求上下文
 * @returns JSON 响应
 */
export const handleDnsLookup = async (c: Context) => {
  const hostnameResult = normalizeAndValidateHostname(c.req.query('name') || '');
  if ('error' in hostnameResult) {
    return c.json({ error: hostnameResult.error }, 400);
  }

  const typeResult = parseDnsType(c.req.query('type'));
  if ('error' in typeResult) {
    return c.json({ error: typeResult.error }, 400);
  }

  const { name } = hostnameResult;
  const { type } = typeResult;

  let dohPayload: DohJsonResponse;
  try {
    dohPayload = await fetchDohJson(name, type);
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : 'DoH upstream request failed';
    return c.json({ error: message }, 502);
  }

  const body: DnsLookupSuccessBody = {
    name,
    type,
    Status: dohPayload.Status,
  };

  if (dohPayload.Answer !== undefined) {
    body.Answer = dohPayload.Answer;
  }

  if (dohPayload.Authority !== undefined) {
    body.Authority = dohPayload.Authority;
  }

  return c.json(body);
};
