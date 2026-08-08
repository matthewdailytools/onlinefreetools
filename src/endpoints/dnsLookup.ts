/**
 * DNS-over-HTTPS 单类型查询 API：`GET /api/tools/dns-lookup?name=&type=`。
 * 共享逻辑见 `dnsDoh.ts`。
 */
import type { Context } from 'hono';
import {
	fetchDohJson,
	normalizeAndValidateHostname,
	parseDnsType,
	type AllowedDnsType,
	type DohResourceRecord,
} from './dnsDoh';

/** 本端点成功响应体：透传 DoH 关键字段，并附上规范化后的查询名与类型 */
interface DnsLookupSuccessBody {
	/** 规范化主机名 */
	name: string;
	/** 查询的记录类型 */
	type: AllowedDnsType;
	/** DoH RCODE */
	Status: number;
	/** 应答记录 */
	Answer?: DohResourceRecord[];
	/** 权威段 */
	Authority?: DohResourceRecord[];
}

/**
 * DNS-over-HTTPS 查询 API 处理器（Hono Context）。
 *
 * 查询参数：
 * - `name`（必填）：主机名，规范化后转发至 Cloudflare DoH
 * - `type`（可选）：A | AAAA | CNAME | MX | NS | TXT | SOA，默认 A；每次请求仅支持一种类型
 *
 * 成功（200）：`{ name, type, Status, Answer?, Authority? }`。
 * 校验失败（400）：`{ error: string }`。
 * 上游失败（502）：`{ error: string }`。
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

	try {
		const dohPayload = await fetchDohJson(name, type);
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
	} catch (error: unknown) {
		const message =
			error instanceof Error ? error.message : 'DoH upstream request failed';
		return c.json({ error: message }, 502);
	}
};
