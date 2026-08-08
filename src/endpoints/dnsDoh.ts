/**
 * Cloudflare DoH（DNS-over-HTTPS JSON）共享客户端与主机名校验。
 * 供 `dnsLookup` 与 `domainLookup` 端点复用。
 */

/** Cloudflare DNS-over-HTTPS JSON API 根地址 */
export const DOH_ENDPOINT = 'https://cloudflare-dns.com/dns-query';

/** 单次上游 DoH 请求超时（毫秒） */
export const DOH_FETCH_TIMEOUT_MS = 8_000;

/**
 * 本站 DoH 代理允许的 DNS 记录类型（查询参数 `type`，大小写不敏感）。
 * 含 MX/NS/TXT/SOA，供域名查询工具使用；`dns-lookup` 端点同样允许这些类型。
 */
export const ALLOWED_DNS_TYPES = [
	'A',
	'AAAA',
	'CNAME',
	'MX',
	'NS',
	'TXT',
	'SOA',
] as const;

/** 允许的 DNS 记录类型联合类型 */
export type AllowedDnsType = (typeof ALLOWED_DNS_TYPES)[number];

/** DoH JSON 中单条资源记录（Answer / Authority 等）的精简形状 */
export interface DohResourceRecord {
	/** 记录所属名称 */
	name: string;
	/** DNS 类型号（如 A=1、AAAA=28） */
	type: number;
	/** TTL（秒） */
	TTL: number;
	/** 记录数据（IP、主机名、MX 优先级+主机等） */
	data: string;
}

/** Cloudflare DoH 返回的 JSON 响应体（仅保留本端点会用到的字段） */
export interface DohJsonResponse {
	/** RCODE（0=NOERROR） */
	Status: number;
	/** 应答记录 */
	Answer?: DohResourceRecord[];
	/** 权威段 */
	Authority?: DohResourceRecord[];
	/** 附加段 */
	Additional?: DohResourceRecord[];
}

/**
 * 校验单个 DNS 标签（label）是否符合主机名规则。
 * 允许 punycode（xn-- 前缀）等国际域名的 ASCII 表示；仅允许字母、数字与连字符，
 * 且不得以连字符开头或结尾。
 *
 * @param label - 主机名中的一个点分段标签
 * @returns 标签合法时返回 true，否则 false
 */
export const isValidHostnameLabel = (label: string): boolean => {
	if (label.length < 1 || label.length > 63) {
		return false;
	}
	return /^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(label);
};

/**
 * 规范化并校验用户传入的主机名（`name` 查询参数）。
 * 流程：trim → 小写 → 去掉协议/路径 → 去掉末尾根点 → 按标签校验。
 *
 * @param raw - 原始查询字符串
 * @returns 校验通过时返回规范化主机名；失败时返回 `{ error }` 供 400 响应使用
 */
export const normalizeAndValidateHostname = (
	raw: string,
): { name: string } | { error: string } => {
	let name = raw.trim().toLowerCase();

	/** 用户误贴完整 URL 时剥协议与路径 */
	if (name.includes('://')) {
		try {
			const u = new URL(name.includes('://') ? name : `https://${name}`);
			name = u.hostname.toLowerCase();
		} catch {
			return { error: 'Invalid hostname' };
		}
	} else if (name.includes('/')) {
		name = name.split('/')[0] || '';
	}

	if (name.endsWith('.')) {
		name = name.slice(0, -1);
	}

	if (!name) {
		return { error: 'Hostname is required' };
	}

	if (name.includes(' ') || name.includes(':')) {
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
 * 未传时默认为 `A`；仅允许 {@link ALLOWED_DNS_TYPES} 中的类型。
 *
 * @param raw - `type` 查询参数原始值，可为 undefined
 * @returns 校验通过时返回大写类型名；失败时返回 `{ error }` 供 400 响应使用
 */
export const parseDnsType = (
	raw: string | undefined,
): { type: AllowedDnsType } | { error: string } => {
	const normalized = (raw?.trim() || 'A').toUpperCase();

	if (!ALLOWED_DNS_TYPES.includes(normalized as AllowedDnsType)) {
		return {
			error: `Invalid type; allowed: ${ALLOWED_DNS_TYPES.join(', ')}`,
		};
	}

	return { type: normalized as AllowedDnsType };
};

/**
 * 向 Cloudflare DoH 发起 JSON 查询，并在超时时间内等待响应。
 *
 * @param name - 已规范化且校验通过的主机名
 * @param type - 已校验通过的记录类型
 * @returns 解析后的 DoH JSON；网络/超时/非 2xx/JSON 解析失败时抛出 Error
 */
export const fetchDohJson = async (
	name: string,
	type: AllowedDnsType,
): Promise<DohJsonResponse> => {
	const url = `${DOH_ENDPOINT}?name=${encodeURIComponent(name)}&type=${type}`;

	const controller = new AbortController();
	const timeoutId = setTimeout(() => controller.abort('timeout'), DOH_FETCH_TIMEOUT_MS);

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
 * 并行查询多种 DNS 记录类型，汇总为扁平记录列表。
 *
 * @param name - 已规范化主机名
 * @param types - 要查询的类型列表（默认全部允许类型）
 * @returns 成功时含 records；若全部类型请求失败则 error 非空
 */
export const fetchAllDnsRecordTypes = async (
	name: string,
	types: readonly AllowedDnsType[] = ALLOWED_DNS_TYPES,
): Promise<{
	records: Array<DohResourceRecord & { typeName: AllowedDnsType }>;
	errors: string[];
}> => {
	const settled = await Promise.allSettled(
		types.map(async (typeName) => {
			const payload = await fetchDohJson(name, typeName);
			const answers = payload.Answer || [];
			return answers.map((rr) => ({ ...rr, typeName }));
		}),
	);

	/** 扁平化的成功记录 */
	const records: Array<DohResourceRecord & { typeName: AllowedDnsType }> = [];
	/** 各类型失败信息 */
	const errors: string[] = [];

	settled.forEach((result, index) => {
		const typeName = types[index];
		if (result.status === 'fulfilled') {
			records.push(...result.value);
		} else {
			const message =
				result.reason instanceof Error ? result.reason.message : 'DoH request failed';
			errors.push(`${typeName}: ${message}`);
		}
	});

	return { records, errors };
};
