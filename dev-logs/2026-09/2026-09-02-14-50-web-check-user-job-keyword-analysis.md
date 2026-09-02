Date: 2026-09-02 14:50
Summary: Mapped lissy93/web-check’s OSINT dashboard into user jobs and search queries; absorbed overlap into existing tools and recorded zero week-build candidates.
Visibility: people

[question]
分析 https://github.com/lissy93/web-check 的工具，进行用户工具分析和用户搜索关键词分析

[try to solve]
## Context
The user asked for a product-and-search analysis of Web-Check (an open-source all-in-one website OSINT dashboard). This repository’s keyword funnel treats competitor inventories as pool input: cluster real user jobs, decide absorb/build/defer/drop, and never clone a category pack as a new slug.

## Process
1. Read the keyword-to-tool-funnel skill, long-tail gap strategy, and Keyword Planner playbook (no Planner CSV was provided).
2. Used the GitHub README Features list as the job inventory (the project itself notes the list can lag the code).
3. Compared each card against catalog slugs: `domain-lookup`, `ip-address`, `website-headers`, `add-www-to-dns`, `robots-txt-generator`, `sitemap-xml-generator`, `open-graph-preview`, `on-page-seo-checker`, `core-web-vitals-checker`, and related SEO generators.
4. Split “dashboard user” (paste one URL, see ~40 cards) from “search user” (one checker query at a time).
5. Wrote theme notes under `docs/seo/keywords/web-check/`, appended clustered pool rows, and updated the funnel tracker. Did not run Google/Bing SERP or create `work-tasks/`.

## Root cause / analysis
Web-Check’s unit of value is a parallel OSINT report. Search demand is almost always a single verb+object (`whois lookup`, `ssl checker`, `dmarc checker`). Cloning the dashboard would be a `*-pack` doorway and would also hit Cloudflare Workers limits (no port scan, traceroute, Chromium Lighthouse, or TLS lab). Several README cards are the same job (Whois vs Domain Info; Headers vs cookies vs HSTS vs security score vs redirects). Head terms in this space are already owned by MxToolbox, SSL Labs, SecurityHeaders, PageSpeed Insights, BuiltWith, and archive.org.

Existing pages already cover the Workers-feasible core: DNS+RDAP, visitor IP (not domain geo), response headers including redirects, www DNS instructions, OG/on-page tags, and robots/sitemap **generation** (not live fetch). Gaps that look like new tools are either head (SSL, DMARC) or out of policy (ports, malware verdicts). `security.txt` might be a thinner long tail, but without SERP it cannot be marked `long_gap`.

## Solution
- Authoritative write-up: `docs/seo/keywords/web-check/2026-09-02-web-check-tools-inventory.md`
- Pool: 22 clustered rows dated 2026-09-02; **0 `build`**, **0 `long_gap`**
- Absorb now (copy/FAQ/modules, no new URL): whois/dns → `domain-lookup`; headers/cookies/HSTS/redirects/security score → `website-headers`; OG → `open-graph-preview`; robots/sitemap **checker** scenes → existing generator slugs (fetch mode still owed)
- Defer (head + no SERP): SSL lab, DMARC explainer, domain IP geolocation, security.txt
- Drop: all-in-one analyzer, Lighthouse URL test as an attack H1, carbon, CMS fingerprint, ports, traceroute, phishing/safe-site, Wayback

## Notes / boundaries
- Volume bands in the inventory are qualitative, not Keyword Planner exports.
- `core-web-vitals-checker` grades pasted LCP/INP/CLS; it is not Web-Check’s Lighthouse job.
- `ip-address` shows the visitor egress IP; Web-Check “IP Info” is the domain’s A-record host.
- Creating any of the defer slugs still requires an explicit “create this tool” request plus SERP.

[actions]
- Added `docs/seo/keywords/web-check/` inventory and theme README
- Appended 22 rows to `docs/seo/keyword-daily-pool.tsv`
- Updated `docs/seo/keyword-to-tool-tracker.md` snapshot and decision log
- Listed the theme in `docs/seo/keywords/README.md`
