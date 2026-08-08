/**
 * 域名综合查询 API：并行 DNS（DoH 多类型）+ RDAP 注册信息。
 * 路由：`GET /api/tools/domain-lookup?name=&dns=1&rdap=1&turnstile=<token>`
 * 须通过 Turnstile（`TURNSTILE_SECRET_KEY`）后方可查上游。
 */
import type { Context } from 'hono';
import {
	ALLOWED_DNS_TYPES,
	fetchAllDnsRecordTypes,
	normalizeAndValidateHostname,
	type AllowedDnsType,
	type DohResourceRecord,
} from './dnsDoh';
import { verifyTurnstileToken } from './turnstileSiteverify';

/** 单次 RDAP 上游请求超时（毫秒） */
const RDAP_FETCH_TIMEOUT_MS = 10_000;

/** IANA RDAP bootstrap 缓存 TTL（毫秒） */
const BOOTSTRAP_TTL_MS = 24 * 60 * 60 * 1000;

/** IANA DNS RDAP bootstrap JSON URL */
const IANA_RDAP_DNS_BOOTSTRAP = 'https://data.iana.org/rdap/dns.json';

/** 内存中的 bootstrap 缓存 */
let bootstrapCache: {
	/** 过期时间戳（ms） */
	expiresAt: number;
	/** TLD → RDAP base URL 列表 */
	tldToBases: Map<string, string[]>;
} | null = null;

/** RDAP 事件条目（精简） */
interface RdapEvent {
	/** 事件动作，如 registration / expiration */
	action: string;
	/** 事件时间（ISO 字符串，若有） */
	date?: string;
}

/** 成功时的注册信息摘要 */
interface RdapSummary {
	/** LDH 域名 */
	ldhName?: string;
	/** 注册商显示名 */
	registrar?: string;
	/** 状态码列表 */
	status: string[];
	/** 注册相关事件 */
	events: RdapEvent[];
	/** RDAP 侧权威 NS */
	nameservers: string[];
	/** 用于再查的权威 RDAP URL */
	rdapUrl?: string;
}

/** DNS 分区响应 */
interface DnsSection {
	/** 是否至少有一类查询成功 */
	ok: boolean;
	/** 扁平记录（含 typeName） */
	records: Array<DohResourceRecord & { typeName: AllowedDnsType }>;
	/** 错误信息（全失败或部分类型失败） */
	error?: string;
}

/** RDAP 分区响应 */
interface RdapSection {
	/** 是否成功拿到可解析 JSON */
	ok: boolean;
	/** 摘要字段 */
	summary?: RdapSummary;
	/** 错误信息 */
	error?: string;
}

/** DNS NS 与 RDAP NS 对照 */
interface NsCompare {
	/** DoH NS 数据（小写、去尾点） */
	dnsNs: string[];
	/** RDAP NS（小写、去尾点） */
	rdapNs: string[];
	/** 两边都有数据且集合不等时为 true */
	mismatch: boolean;
}

/**
 * 从 IANA bootstrap 加载 TLD → RDAP base 映射（带内存缓存）。
 *
 * @returns TLD 到 base URL 列表的 Map
 */
const loadRdapBootstrap = async (): Promise<Map<string, string[]>> => {
	const now = Date.now();
	if (bootstrapCache && bootstrapCache.expiresAt > now) {
		return bootstrapCache.tldToBases;
	}

	const controller = new AbortController();
	const timeoutId = setTimeout(() => controller.abort('timeout'), RDAP_FETCH_TIMEOUT_MS);

	try {
		const response = await fetch(IANA_RDAP_DNS_BOOTSTRAP, {
			method: 'GET',
			headers: { Accept: 'application/json' },
			signal: controller.signal,
		});
		if (!response.ok) {
			throw new Error(`RDAP bootstrap HTTP ${response.status}`);
		}
		const payload = (await response.json()) as {
			services?: Array<[string[], string[]]>;
		};
		/** TLD → bases */
		const tldToBases = new Map<string, string[]>();
		for (const service of payload.services || []) {
			const [tlds, bases] = service;
			const httpsBases = (bases || []).filter((b) => b.startsWith('https://'));
			const useBases = httpsBases.length ? httpsBases : bases || [];
			for (const tld of tlds || []) {
				tldToBases.set(tld.toLowerCase(), useBases);
			}
		}
		bootstrapCache = { expiresAt: now + BOOTSTRAP_TTL_MS, tldToBases };
		return tldToBases;
	} finally {
		clearTimeout(timeoutId);
	}
};

/**
 * 为域名选择最长匹配 TLD 的 RDAP base URL 列表。
 *
 * @param name - 规范化主机名
 * @param tldToBases - bootstrap 映射
 * @returns base URL 列表；无匹配时为空数组
 */
const resolveRdapBasesForName = (
	name: string,
	tldToBases: Map<string, string[]>,
): string[] => {
	const labels = name.split('.');
	for (let i = 0; i < labels.length; i++) {
		const tld = labels.slice(i).join('.');
		const bases = tldToBases.get(tld);
		if (bases && bases.length) {
			return bases;
		}
	}
	return [];
};

/**
 * 从 RDAP entity vCard 中取 fn 文本。
 *
 * @param entity - RDAP entity 对象（宽松类型）
 * @returns 显示名或空串
 */
const extractVcardFn = (entity: Record<string, unknown> | undefined): string => {
	if (!entity) return '';
	const vcardArray = entity.vcardArray as unknown[] | undefined;
	if (!Array.isArray(vcardArray) || vcardArray.length < 2) return '';
	const rows = vcardArray[1];
	if (!Array.isArray(rows)) return '';
	for (const row of rows) {
		if (!Array.isArray(row) || row[0] !== 'fn') continue;
		const value = row[3];
		if (typeof value === 'string' && value.trim()) return value.trim();
	}
	return '';
};

/**
 * 将上游 RDAP JSON 解析为摘要字段。
 *
 * @param payload - RDAP domain 对象
 * @param rdapUrl - 最终请求 URL
 * @returns 摘要
 */
const parseRdapDomainPayload = (
	payload: Record<string, unknown>,
	rdapUrl: string,
): RdapSummary => {
	/** 状态列表 */
	const status = Array.isArray(payload.status)
		? payload.status.filter((s): s is string => typeof s === 'string')
		: [];

	/** 事件 */
	const events: RdapEvent[] = [];
	if (Array.isArray(payload.events)) {
		for (const ev of payload.events) {
			if (!ev || typeof ev !== 'object') continue;
			const action = (ev as { eventAction?: string }).eventAction;
			const date = (ev as { eventDate?: string }).eventDate;
			if (typeof action === 'string' && action) {
				const item: RdapEvent = { action };
				if (typeof date === 'string' && date) item.date = date;
				events.push(item);
			}
		}
	}

	/** nameservers */
	const nameservers: string[] = [];
	if (Array.isArray(payload.nameservers)) {
		for (const ns of payload.nameservers) {
			if (!ns || typeof ns !== 'object') continue;
			const ldh = (ns as { ldhName?: string }).ldhName;
			if (typeof ldh === 'string' && ldh) {
				nameservers.push(ldh.replace(/\.$/, '').toLowerCase());
			}
		}
	}

	/** registrar */
	let registrar: string | undefined;
	if (Array.isArray(payload.entities)) {
		for (const ent of payload.entities) {
			if (!ent || typeof ent !== 'object') continue;
			const roles = (ent as { roles?: string[] }).roles || [];
			if (!roles.includes('registrar')) continue;
			const fn = extractVcardFn(ent as Record<string, unknown>);
			if (fn) {
				registrar = fn;
				break;
			}
			const handle = (ent as { handle?: string }).handle;
			if (typeof handle === 'string' && handle) {
				registrar = handle;
				break;
			}
		}
	}

	const summary: RdapSummary = {
		status,
		events,
		nameservers,
		rdapUrl,
	};
	if (typeof payload.ldhName === 'string') {
		summary.ldhName = payload.ldhName;
	}
	if (registrar) {
		summary.registrar = registrar;
	}
	return summary;
};

/**
 * 请求单个 RDAP domain URL（跟随有限次 redirect）。
 *
 * @param url - 完整 RDAP domain URL
 * @returns 解析后的摘要
 */
const fetchRdapUrl = async (url: string): Promise<RdapSummary> => {
	const controller = new AbortController();
	const timeoutId = setTimeout(() => controller.abort('timeout'), RDAP_FETCH_TIMEOUT_MS);

	try {
		const response = await fetch(url, {
			method: 'GET',
			headers: {
				Accept: 'application/rdap+json, application/json',
			},
			redirect: 'follow',
			signal: controller.signal,
		});

		if (response.status === 404) {
			throw new Error('RDAP: domain not found (404)');
		}
		if (!response.ok) {
			throw new Error(`RDAP upstream HTTP ${response.status}`);
		}

		const payload = (await response.json()) as Record<string, unknown>;
		if (payload.objectClassName && payload.objectClassName !== 'domain') {
			throw new Error('RDAP upstream returned unexpected object');
		}
		return parseRdapDomainPayload(payload, response.url || url);
	} catch (error: unknown) {
		if (error instanceof Error && error.name === 'AbortError') {
			throw new Error('RDAP upstream timed out');
		}
		if (error instanceof Error) throw error;
		throw new Error('RDAP upstream request failed');
	} finally {
		clearTimeout(timeoutId);
	}
};

/**
 * 通过 IANA bootstrap 解析并查询域名的 RDAP 注册信息。
 *
 * @param name - 规范化主机名
 * @returns RDAP 分区结果
 */
const lookupRdap = async (name: string): Promise<RdapSection> => {
	try {
		const tldToBases = await loadRdapBootstrap();
		const bases = resolveRdapBasesForName(name, tldToBases);
		if (!bases.length) {
			return { ok: false, error: 'No RDAP service found for this TLD' };
		}

		/** 依次尝试各 base（优先 https） */
		let lastError = 'RDAP lookup failed';
		for (const base of bases) {
			const normalizedBase = base.endsWith('/') ? base : `${base}/`;
			const url = `${normalizedBase}domain/${encodeURIComponent(name)}`;
			try {
				const summary = await fetchRdapUrl(url);
				return { ok: true, summary };
			} catch (error: unknown) {
				lastError = error instanceof Error ? error.message : lastError;
			}
		}
		return { ok: false, error: lastError };
	} catch (error: unknown) {
		const message = error instanceof Error ? error.message : 'RDAP bootstrap failed';
		return { ok: false, error: message };
	}
};

/**
 * 规范化 NS 主机名以便对照（小写、去尾点）。
 *
 * @param value - 原始 NS 字符串
 * @returns 规范化值
 */
const normalizeNsHost = (value: string): string =>
	value.trim().toLowerCase().replace(/\.$/, '');

/**
 * 从 DNS 记录中提取 NS 数据列表。
 *
 * @param records - DoH 扁平记录
 * @returns 规范化 NS 主机名（去重）
 */
const extractDnsNs = (
	records: Array<DohResourceRecord & { typeName: AllowedDnsType }>,
): string[] => {
	const set = new Set<string>();
	for (const rr of records) {
		if (rr.typeName !== 'NS') continue;
		const host = normalizeNsHost(rr.data);
		if (host) set.add(host);
	}
	return [...set].sort();
};

/**
 * 对照 DNS NS 与 RDAP NS。
 *
 * @param dnsNs - DoH NS
 * @param rdapNs - RDAP NS
 * @returns 对照结果
 */
const buildNsCompare = (dnsNs: string[], rdapNs: string[]): NsCompare => {
	const a = [...dnsNs].sort().join('|');
	const b = [...rdapNs].sort().join('|');
	const mismatch = dnsNs.length > 0 && rdapNs.length > 0 && a !== b;
	return { dnsNs, rdapNs, mismatch };
};

/**
 * 解析布尔查询参数（缺省为 true）。
 *
 * @param raw - 查询参数原始值
 * @returns 是否启用
 */
const parseEnabledFlag = (raw: string | undefined): boolean => {
	if (raw === undefined || raw === '') return true;
	const v = raw.trim().toLowerCase();
	if (v === '0' || v === 'false' || v === 'no') return false;
	return true;
};

/**
 * 域名综合查询处理器。
 *
 * 查询参数：
 * - `name`（必填）：域名/主机名
 * - `dns`（可选）：`1`/`0`，默认查 DNS
 * - `rdap`（可选）：`1`/`0`，默认查 RDAP
 *
 * 成功（200）始终返回分区对象；分区级失败写在各分区 `error`，HTTP 仍为 200（除非 name 非法 400）。
 * 若 dns 与 rdap 均关闭 → 400。
 *
 * @param c - Hono 上下文
 * @returns JSON 响应
 */
export const handleDomainLookup = async (c: Context) => {
	/** Worker 环境（含 Turnstile secret） */
	const env = c.env as { TURNSTILE_SECRET_KEY?: string };
	/** 浏览器 token：优先 query，其次 header */
	const turnstileToken =
		(c.req.query('turnstile') || '').trim() ||
		(c.req.header('cf-turnstile-response') || '').trim() ||
		(c.req.header('x-turnstile-token') || '').trim();
	/** 客户端 IP（供 siteverify 可选字段） */
	const remoteip =
		c.req.header('cf-connecting-ip') ||
		c.req.header('x-forwarded-for')?.split(',')[0]?.trim() ||
		undefined;

	const captcha = await verifyTurnstileToken(
		env.TURNSTILE_SECRET_KEY || '',
		turnstileToken,
		remoteip,
	);
	if (!captcha.ok) {
		return c.json(
			{
				error: captcha.error,
				codes: captcha.codes,
			},
			captcha.error === 'Turnstile is not configured' ? 503 : 403,
		);
	}

	const hostnameResult = normalizeAndValidateHostname(c.req.query('name') || '', {
		requireDot: true,
	});
	if ('error' in hostnameResult) {
		return c.json({ error: hostnameResult.error }, 400);
	}

	const wantDns = parseEnabledFlag(c.req.query('dns'));
	const wantRdap = parseEnabledFlag(c.req.query('rdap'));
	if (!wantDns && !wantRdap) {
		return c.json({ error: 'At least one of dns or rdap must be enabled' }, 400);
	}

	const { name } = hostnameResult;

	/** DNS 分区默认未请求 */
	let dnsSection: DnsSection = { ok: false, records: [], error: 'skipped' };
	/** RDAP 分区默认未请求 */
	let rdapSection: RdapSection = { ok: false, error: 'skipped' };

	const tasks: Array<Promise<void>> = [];

	if (wantDns) {
		tasks.push(
			(async () => {
				const { records, errors } = await fetchAllDnsRecordTypes(name, ALLOWED_DNS_TYPES);
				if (records.length === 0 && errors.length === ALLOWED_DNS_TYPES.length) {
					dnsSection = {
						ok: false,
						records: [],
						error: errors.join('; ') || 'DNS lookup failed',
					};
				} else {
					dnsSection = {
						ok: true,
						records,
						error: errors.length ? errors.join('; ') : undefined,
					};
				}
			})(),
		);
	}

	if (wantRdap) {
		tasks.push(
			(async () => {
				rdapSection = await lookupRdap(name);
			})(),
		);
	}

	await Promise.all(tasks);

	const dnsNs = extractDnsNs(dnsSection.records || []);
	const rdapNs = rdapSection.summary?.nameservers || [];
	const nsCompare = buildNsCompare(dnsNs, rdapNs);

	return c.json({
		name,
		dns: dnsSection,
		rdap: rdapSection,
		nsCompare,
	});
};
