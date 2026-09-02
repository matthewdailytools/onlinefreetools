/**
 * web-check 五件套 Worker API：
 * - check-robots-txt-url-blocked
 * - find-and-validate-xml-sitemap
 * - validate-security-txt
 * - check-ssl-certificate-expiration（crt.sh CT，非握手）
 * - spf-dkim-dmarc-checker
 */
import type { Context } from 'hono';
import {
	extractSitemapDirectives,
	evaluateRobotsPath,
	parseRobotsTxt,
} from './robotsTxtParse';
import {
	fetchWithTimeout,
	isBlockedHostname,
	normalizeHostnameOrThrow,
	parseHttpUrlOrThrow,
} from './remoteFetchGuard';
import { fetchDohJson } from '../endpoints/dnsDoh';

const UA = 'onlinefreetools/web-check';

/**
 * GET /api/tools/check-robots-txt-url-blocked?url=&ua=
 * 拉取站点 /robots.txt，判断目标路径对 UA 是否允许。
 * 非 2xx 或 HTML 正文不当作 robots.txt（常见 404 落地页）。
 */
export const handleCheckRobotsTxtUrlBlocked = async (c: Context) => {
	try {
		const { url, hostname } = parseHttpUrlOrThrow(c.req.query('url') || '');
		if (isBlockedHostname(hostname)) return c.json({ error: 'Blocked hostname' }, 400);
		const ua = (c.req.query('ua') || 'Googlebot').trim() || 'Googlebot';
		const robotsUrl = `${url.protocol}//${url.host}/robots.txt`;
		const res = await fetchWithTimeout(
			robotsUrl,
			{
				method: 'GET',
				redirect: 'follow',
				headers: { 'user-agent': UA, accept: 'text/plain,*/*' },
			},
			10_000,
			'robots.txt',
		);
		const text = await res.text();
		const contentType = (res.headers.get('content-type') || '').toLowerCase();
		const looksHtml =
			contentType.includes('text/html') ||
			/^\s*<(!doctype|html|head|body)\b/i.test(text);
		/** 缺文件 / 错误页：按常见爬虫惯例视为 allow-all，但不展示 HTML 伪预览 */
		const robotsMissing = !res.ok || looksHtml;
		const robotsBody = robotsMissing ? '' : text;
		const groups = parseRobotsTxt(robotsBody);
		const pathWithQuery = `${url.pathname || '/'}${url.search || ''}`;
		const verdict = robotsMissing
			? { allowed: true, matched: null as null, groupAgents: ['*'] }
			: evaluateRobotsPath(groups, ua, pathWithQuery);
		return c.json({
			ok: true,
			url: url.toString(),
			robotsUrl,
			httpStatus: res.status,
			userAgent: ua,
			path: pathWithQuery,
			allowed: verdict.allowed,
			matched: verdict.matched,
			groupAgents: verdict.groupAgents,
			robotsMissing,
			robotsPreview: robotsMissing ? '' : robotsBody.slice(0, 4000),
			previewNote: robotsMissing
				? 'robots.txt missing or non-text response; treated as allow-all'
				: null,
			groupCount: groups.length,
		});
	} catch (e: unknown) {
		const message = e instanceof Error ? e.message : 'robots check failed';
		const status = /Missing|Invalid|Blocked|Only http/.test(message) ? 400 : 502;
		return c.json({ error: message }, status);
	}
};

/**
 * 粗判是否像 sitemap XML。
 * @param text 响应正文
 */
const looksLikeSitemap = (text: string): boolean =>
	/<urlset[\s>]/i.test(text) || /<sitemapindex[\s>]/i.test(text);

/**
 * 统计 <loc> 数量并取样本。
 * @param text XML
 * @param limit 样本条数
 */
const extractLocSamples = (text: string, limit = 8): { count: number; samples: string[] } => {
	const samples: string[] = [];
	const re = /<loc>\s*([^<]+?)\s*<\/loc>/gi;
	let m: RegExpExecArray | null;
	let count = 0;
	while ((m = re.exec(text)) !== null) {
		count += 1;
		if (samples.length < limit) samples.push(m[1].trim());
	}
	return { count, samples };
};

/**
 * GET /api/tools/find-and-validate-xml-sitemap?url=
 * 从 robots Sitemap: 与常见路径发现 sitemap，并做结构校验摘要。
 */
export const handleFindAndValidateXmlSitemap = async (c: Context) => {
	try {
		const { url, hostname } = parseHttpUrlOrThrow(c.req.query('url') || '');
		if (isBlockedHostname(hostname)) return c.json({ error: 'Blocked hostname' }, 400);
		const origin = `${url.protocol}//${url.host}`;
		const candidates: string[] = [];
		const seen = new Set<string>();
		const push = (u: string) => {
			try {
				const abs = new URL(u, origin).toString();
				if (!seen.has(abs)) {
					seen.add(abs);
					candidates.push(abs);
				}
			} catch {
				/* ignore */
			}
		};

		try {
			const robotsRes = await fetchWithTimeout(`${origin}/robots.txt`, {
				method: 'GET',
				headers: { 'user-agent': UA },
			});
			if (robotsRes.ok) {
				const robotsText = await robotsRes.text();
				for (const s of extractSitemapDirectives(robotsText)) push(s);
			}
		} catch {
			/* robots optional */
		}
		push(`${origin}/sitemap.xml`);
		push(`${origin}/sitemap_index.xml`);
		push(`${origin}/sitemap-index.xml`);

		const findings: Array<Record<string, unknown>> = [];
		for (const sm of candidates.slice(0, 6)) {
			try {
				const smHost = new URL(sm).hostname.toLowerCase();
				if (smHost !== hostname || isBlockedHostname(smHost)) continue;
				const res = await fetchWithTimeout(sm, {
					method: 'GET',
					headers: { 'user-agent': UA, accept: 'application/xml,text/xml,*/*' },
				});
				const text = (await res.text()).slice(0, 500_000);
				const isXml = looksLikeSitemap(text);
				const kind = /<sitemapindex[\s>]/i.test(text)
					? 'sitemapindex'
					: /<urlset[\s>]/i.test(text)
						? 'urlset'
						: 'unknown';
				const locs = extractLocSamples(text);
				findings.push({
					url: sm,
					httpStatus: res.status,
					validStructure: isXml && res.ok,
					kind,
					locCount: locs.count,
					locSamples: locs.samples,
				});
			} catch (err: unknown) {
				findings.push({
					url: sm,
					error: err instanceof Error ? err.message : 'fetch failed',
					validStructure: false,
				});
			}
		}

		const primary = findings.find((f) => f.validStructure) || findings[0] || null;
		return c.json({
			ok: true,
			site: origin,
			candidatesTried: candidates.slice(0, 6),
			findings,
			primary,
		});
	} catch (e: unknown) {
		const message = e instanceof Error ? e.message : 'sitemap check failed';
		const status = /Missing|Invalid|Blocked|Only http/.test(message) ? 400 : 502;
		return c.json({ error: message }, status);
	}
};

/**
 * 解析 security.txt 字段。
 * @param text 文件正文
 */
const parseSecurityTxt = (text: string): Record<string, string[]> => {
	const fields: Record<string, string[]> = {};
	for (const rawLine of (text || '').split(/\r?\n/)) {
		const line = rawLine.trim();
		if (!line || line.startsWith('#')) continue;
		const idx = line.indexOf(':');
		if (idx < 0) continue;
		const key = line.slice(0, idx).trim();
		const value = line.slice(idx + 1).trim();
		if (!fields[key]) fields[key] = [];
		fields[key].push(value);
	}
	return fields;
};

/**
 * GET /api/tools/validate-security-txt?url=
 * 拉取 /.well-known/security.txt（回退 /security.txt）并做 RFC 9116 字段检查。
 */
export const handleValidateSecurityTxt = async (c: Context) => {
	try {
		const { url, hostname } = parseHttpUrlOrThrow(c.req.query('url') || '');
		if (isBlockedHostname(hostname)) return c.json({ error: 'Blocked hostname' }, 400);
		const origin = `${url.protocol}//${url.host}`;
		const paths = [`${origin}/.well-known/security.txt`, `${origin}/security.txt`];
		let chosen: string | null = null;
		let text = '';
		let httpStatus = 0;
		for (const p of paths) {
			const res = await fetchWithTimeout(p, {
				method: 'GET',
				headers: { 'user-agent': UA, accept: 'text/plain,*/*' },
			});
			httpStatus = res.status;
			if (res.ok) {
				text = await res.text();
				chosen = p;
				break;
			}
		}
		if (!chosen) {
			return c.json({
				ok: true,
				found: false,
				httpStatus,
				tried: paths,
				error: 'security.txt not found',
			});
		}
		const fields = parseSecurityTxt(text.slice(0, 100_000));
		const contacts = fields.Contact || [];
		const expires = fields.Expires?.[0] || null;
		let expiresValid = false;
		let expired = false;
		if (expires) {
			const t = Date.parse(expires);
			if (!Number.isNaN(t)) {
				expiresValid = true;
				expired = t < Date.now();
			}
		}
		const missing: string[] = [];
		if (!contacts.length) missing.push('Contact');
		if (!expires) missing.push('Expires');
		return c.json({
			ok: true,
			found: true,
			url: chosen,
			httpStatus,
			fields,
			missingRequired: missing,
			expiresValid,
			expired,
			preview: text.slice(0, 4000),
		});
	} catch (e: unknown) {
		const message = e instanceof Error ? e.message : 'security.txt check failed';
		const status = /Missing|Invalid|Blocked|Only http/.test(message) ? 400 : 502;
		return c.json({ error: message }, status);
	}
};

/** crt.sh JSON 行（子集） */
type CrtShRow = {
	id?: number;
	common_name?: string;
	name_value?: string;
	issuer_name?: string;
	not_before?: string;
	not_after?: string;
};

/**
 * GET /api/tools/check-ssl-certificate-expiration?host=
 * 经 crt.sh CT 日志查询证书过期（Workers 无法读对端证书）。
 */
export const handleCheckSslCertificateExpiration = async (c: Context) => {
	try {
		const host = normalizeHostnameOrThrow(c.req.query('host') || c.req.query('url') || '');
		const api = `https://crt.sh/?q=${encodeURIComponent(host)}&output=json`;
		const res = await fetchWithTimeout(
			api,
			{ method: 'GET', headers: { 'user-agent': UA, accept: 'application/json' } },
			15_000,
		);
		if (!res.ok) {
			return c.json({ error: `crt.sh HTTP ${res.status}` }, 502);
		}
		const rawText = await res.text();
		let rows: CrtShRow[] = [];
		try {
			rows = JSON.parse(rawText) as CrtShRow[];
		} catch {
			return c.json({ error: 'crt.sh returned non-JSON (rate limit or HTML)' }, 502);
		}
		if (!Array.isArray(rows) || rows.length === 0) {
			return c.json({ ok: true, host, found: false, source: 'crt.sh', note: 'No CT rows' });
		}
		const sorted = [...rows].sort((a, b) => {
			const ta = Date.parse(a.not_before || '') || 0;
			const tb = Date.parse(b.not_before || '') || 0;
			return tb - ta;
		});
		const newest = sorted[0];
		const notAfter = newest.not_after || null;
		const notBefore = newest.not_before || null;
		const afterMs = notAfter ? Date.parse(notAfter) : NaN;
		const daysLeft = Number.isFinite(afterMs)
			? Math.floor((afterMs - Date.now()) / (24 * 3600 * 1000))
			: null;
		return c.json({
			ok: true,
			host,
			found: true,
			source: 'crt.sh',
			disclaimer: 'CT log lag — not a live TLS handshake peer certificate',
			newest: {
				commonName: newest.common_name || null,
				names: newest.name_value || null,
				issuer: newest.issuer_name || null,
				notBefore,
				notAfter,
				daysLeft,
				expired: typeof daysLeft === 'number' ? daysLeft < 0 : null,
			},
			rowCount: rows.length,
		});
	} catch (e: unknown) {
		const message = e instanceof Error ? e.message : 'ssl check failed';
		const status = /Missing|Invalid|Blocked/.test(message) ? 400 : 502;
		return c.json({ error: message }, status);
	}
};

/**
 * 拼接 DoH TXT 字符串。
 * @param answers Answer 数组
 */
const joinTxt = (answers: Array<{ data?: string }> | undefined): string[] => {
	if (!answers?.length) return [];
	return answers
		.map((a) => (a.data || '').replace(/^"|"$/g, '').replace(/"\s*"/g, ''))
		.filter(Boolean);
};

/**
 * GET /api/tools/spf-dkim-dmarc-checker?domain=&selector=
 * DoH TXT：SPF / DMARC / DKIM，并做简短策略说明。
 */
export const handleSpfDkimDmarcChecker = async (c: Context) => {
	try {
		const domain = normalizeHostnameOrThrow(c.req.query('domain') || c.req.query('host') || '');
		const selector = ((c.req.query('selector') || 'google').trim() || 'google').toLowerCase();

		const [spfDoh, dmarcDoh, dkimDoh] = await Promise.all([
			fetchDohJson(domain, 'TXT'),
			fetchDohJson(`_dmarc.${domain}`, 'TXT'),
			fetchDohJson(`${selector}._domainkey.${domain}`, 'TXT'),
		]);

		const spfRecords = joinTxt(spfDoh.Answer).filter((t) => /v=spf1/i.test(t));
		const dmarcRecords = joinTxt(dmarcDoh.Answer).filter((t) => /v=DMARC1/i.test(t));
		const dkimRecords = joinTxt(dkimDoh.Answer).filter((t) => /v=DKIM1|p=/i.test(t));

		const spf = spfRecords[0] || null;
		const dmarc = dmarcRecords[0] || null;
		const dkim = dkimRecords[0] || null;

		const dmarcPolicy = dmarc?.match(/\bp=([a-z]+)/i)?.[1] || null;
		const dmarcPct = dmarc?.match(/\bpct=(\d+)/i)?.[1] || null;
		const spfAll = spf?.match(/([~?\-+])all\b/)?.[1] || null;

		return c.json({
			ok: true,
			domain,
			selector,
			spf: {
				found: Boolean(spf),
				record: spf,
				allQualifier: spfAll,
				explain:
					spfAll === '-'
						? 'Hard fail (-all)'
						: spfAll === '~'
							? 'Soft fail (~all)'
							: spfAll === '?'
								? 'Neutral (?all)'
								: spfAll === '+'
									? 'Pass (+all) — unusual'
									: spf
										? 'No clear all mechanism'
										: 'No SPF TXT',
			},
			dmarc: {
				found: Boolean(dmarc),
				record: dmarc,
				policy: dmarcPolicy,
				pct: dmarcPct,
				explain: dmarcPolicy
					? `DMARC p=${dmarcPolicy}${dmarcPct ? ` pct=${dmarcPct}` : ''}`
					: 'No DMARC record on _dmarc',
			},
			dkim: {
				found: Boolean(dkim),
				selector,
				record: dkim,
				hasPublicKey: Boolean(dkim && /(?:^|;)\s*p=[A-Za-z0-9+/=]+/i.test(dkim)),
				explain: dkim
					? `DKIM selector ${selector} has a key record`
					: `No DKIM TXT at ${selector}._domainkey.${domain}`,
			},
		});
	} catch (e: unknown) {
		const message = e instanceof Error ? e.message : 'email auth check failed';
		const status = /Missing|Invalid|Blocked/.test(message) ? 400 : 502;
		return c.json({ error: message }, status);
	}
};
