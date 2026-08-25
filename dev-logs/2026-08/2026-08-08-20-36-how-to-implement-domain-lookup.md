Date: 2026-08-08 20:36
Summary: Explain how to implement domain information lookup on this Cloudflare Workers stack, layered by DNS / RDAP / HTTP.

[question]
如何实现根据域名查询相关信息

[try to solve]
The site already has DNS lookup; “look up info by domain” splits cleanly by data layer.

Domain-related info usually has several layers, each with a different implementation:

| Info type | Typical fields | Recommended approach (this CF Workers stack) |
|---|---|---|
| DNS records | A/AAAA/CNAME/MX/NS/TXT/SOA | Worker proxy to DoH (skeleton exists) |
| Registration | Registrar, expiry, status, NS | RDAP (prefer over classic WHOIS) |
| HTTP / site | Status, headers, redirects | Existing `website-headers` |
| Certificate | Issuer, SAN, expiry | Worker `fetch` TLS side or third-party API (evaluate) |
| IP ownership | ASN, country, ISP | Resolve A/AAAA then GeoIP API |

**Existing capability**

- `GET /api/tools/dns-lookup?name=&type=` → `src/endpoints/dnsLookup.ts`
- Upstream: Cloudflare DoH `https://cloudflare-dns.com/dns-query`
- Current types: only `A` / `AAAA` / `CNAME`
- Frontend usage: `add-www-to-dns` page queries apex/www in parallel

**Recommended path in this repo**

1. **DNS Lookup tool page (fastest)**  
   Extend `dnsLookup.ts` for MX/NS/TXT/SOA; new `dns-lookup` tool page: enter domain → parallel multi-type queries → table.

2. **Domain Whois / RDAP (registration)**  
   - Prefer RDAP: `https://rdap.org/domain/{domain}` or IANA bootstrap  
   - Worker proxy + timeout / rate limit / cache; parse JSON for registrar, events, status, nameservers  
   - Browser cannot open WHOIS port 43; classic WHOIS text is hard to parse; RDAP fits APIs better

3. **Combined “domain info” page (optional)**  
   One input → parallel DNS multi-type + RDAP + optional HEAD/GET headers; sectioned UI with per-block degrade on failure.

**Worker caveats**

- Validate hostname (existing `normalizeAndValidateHostname`) to limit SSRF / junk queries  
- Timeout (currently 8s), rate limits, optional short-TTL cache (KV)  
- Privacy: WHOIS/RDAP often redact; copy must not promise full contacts  
- Never hard-code third-party keys in the client; secrets via env vars

**Minimal call (existing API)**

```js
const res = await fetch(
  '/api/tools/dns-lookup?name=' + encodeURIComponent('example.com') + '&type=A',
  { headers: { Accept: 'application/json' } }
);
const data = await res.json();
// data.Answer[].data → IPv4, etc.
```

For a formal tool: brief `work-tasks/dns-lookup/` or `domain-lookup/`, then follow `tool-creation` for catalog / i18n / `build:site`.

[actions]
- Reviewed `src/endpoints/dnsLookup.ts`, `src/index.ts` routes, `addWwwToDnsPage.ts` client usage
