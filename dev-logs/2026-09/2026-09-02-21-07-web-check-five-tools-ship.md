Date: 2026-09-02 21:07
Summary: Shipped five web-check tools from Bing title-proxy H1s with Worker APIs, ten-locale copy, and build:site.
Visibility: people

[question]
按照建议立项工具和实现

[try to solve]
## Context
User confirmed the web-check implement queue after Bing Related-longtail selection (Related empty → organic title proxies). Required: open work-tasks and ship all five slugs.

## Process
1. Read coverage / token-efficiency / tool-creation rules; explored website-headers, domain-lookup, indexnow, open-graph-preview patterns.
2. Created shared `remoteFetchGuard.ts`, `robotsTxtParse.ts`, and `webCheckApis.ts`; registered five `GET /api/tools/...` routes in `src/index.ts`.
3. Parallel briefs to `ready` + `coverage:gate --phase=0b` for all five slugs.
4. Serial Page + ten-locale i18n per coverage Skill (robots → sitemap → security.txt → SSL → SPF/DKIM/DMARC), each through phase 2/4/all + lint:tool-page.
5. `npm run build:site` (167 tools); reverse `related` links with `CROSS_TOOL_UPDATE=1`; isolation OK; tracker updated.

## Root cause / analysis
- Generate ≠ check: each checker is a separate URL from generators.
- Workers cannot read peer TLS certificates; SSL tool uses crt.sh CT with explicit disclaimer.
- CN Bing Related stayed empty; H1/slug already fixed in selection.md before implementation.

## Solution
| H1 | slug | API |
|---|---|---|
| Check if a URL is blocked by robots.txt | `check-robots-txt-url-blocked` | fetch `/robots.txt` + RFC 9309-style match |
| Find and validate XML sitemap | `find-and-validate-xml-sitemap` | robots Sitemap: + common paths + structure |
| Validate security.txt | `validate-security-txt` | `/.well-known/security.txt` RFC 9116 fields |
| Check SSL certificate expiration | `check-ssl-certificate-expiration` | crt.sh CT (not live handshake) |
| SPF DKIM DMARC checker | `spf-dkim-dmarc-checker` | DoH TXT + policy explain |

All: `page.style: opts`, `localProcessing: false`, ten locales, loadSample, README entries, prerendered HTML.

## Notes / boundaries
- Not deployed (`deploy` / R2 upload / git push) unless user asks.
- SSL days-left can lag live cert rotation.
- Isolation for a single slug in a multi-tool batch needs `CROSS_TOOL_UPDATE=1`.

[actions]
- Added src/tools/remoteFetchGuard.ts, robotsTxtParse.ts, webCheckApis.ts; wired APIs in src/index.ts
- work-tasks + catalog + pages + i18n ×5; reverse related on several existing shards
- npm run build:site; updated docs/seo/keyword-to-tool-tracker.md
