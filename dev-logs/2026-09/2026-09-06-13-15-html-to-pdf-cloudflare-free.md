Date: 2026-09-06 13:15
Summary: The current convert-html-to-pdf split (Worker fetch HTML + per-image proxy, browser html2pdf) fits Cloudflare Workers Free, with CPU and daily-request multipliers as the real ceilings.
Visibility: people

[question]
分析目前这种模式，cloudflare free能否适用

## Tool links (English)
- https://onlinefreetools.org/tools/convert-html-to-pdf
Chinese: https://onlinefreetools.org/zh/tools/convert-html-to-pdf

[try to solve]
## Context
The tool loads a URL through a Worker (`GET /api/tools/convert-html-to-pdf?url=`), proxies some images (`/asset`), then runs html2pdf.js in the tab. The question is whether that design stays inside Cloudflare’s free allowances (Workers Free + R2 free tier), not whether every live site will convert.

Official limits used here: [Workers limits](https://developers.cloudflare.com/workers/platform/limits/) (updated 2026-09-05) and [R2 pricing / free tier](https://developers.cloudflare.com/r2/pricing/).

## Process
Mapped each hop to a quota:

1. **PDF itself never runs on the Worker.** html2canvas / jsPDF stay in the browser. That avoids Free’s **10 ms CPU / request** and Browser Rendering’s **10 minutes/day**.
2. **HTML API** does one `fetch` (plus up to 5 redirects), caps the body at **2 MB**, rewrites CSS/image URLs with HTMLRewriter, does not download CSS or images in that same invocation. Subrequests stay far under Free’s **50 / invocation**.
3. **Asset API** is one Worker request per image (client cap **80**, concurrency **4**), **1.5 MB** each. Subrequests = 1. CPU is mostly `arrayBuffer` + magic-byte sniff.
4. **R2** only stores prerendered tool HTML. Conversion responses are not written to R2.

## Root cause / analysis
Free is usable **because** work is split across many short invocations and the heavy screenshot stays on-device. A single-invocation “fetch page + all images + render PDF” Worker would fail Free (CPU, 50 subrequests, and Browser Rendering quota).

Risks that remain on Free:

- **10 ms CPU** on a large HTML rewrite (Cloudflare notes parse-heavy work often uses 10–20 ms). Waiting on `fetch` does not count; HTMLRewriter + `TextDecoder` on a 2 MB page might. Occasional overage is tolerated; consistent overage returns Error 1102.
- **100,000 Worker requests / day** counts the HTML fetch **and** every `/asset` call. One image-heavy convert can be ~1 + 80 invocations, plus normal page views through the same Worker/R2 path.
- **No rate limit** on these two APIs today; a scraper would burn the daily cap for the whole site (same Worker).
- Sites that block datacenter IPs still fail (`Could not load that URL`). Paid Workers does not give residential IPs.
- Using the pair of endpoints as a general open proxy can trip abuse review; SSRF checks exist, but quota and ToS are still the operator’s problem.

R2 free (10 GB-month, 1M Class A, 10M Class B, free egress) is not the bottleneck for this tool.

## Solution
**Yes, Cloudflare Free applies to the current pattern** for small-to-moderate traffic, as long as PDF stays in the tab and the Worker only does short fetch/rewrite/proxy. Upgrade to **Workers Paid** (~$5/month) when: HTML rewrite hits 1102, daily 100k invocations, or you need a real headless browser. Do not move html2pdf onto the Worker on Free.

## Notes / boundaries
- Workers Free ≠ Cloudflare website Free; this analysis is Workers + R2 free tiers on the existing custom domain.
- Workers AI on the same Worker has a separate 10k Neurons/day cap; this tool does not use it.
- Paste-HTML-only conversion uses **zero** of these fetch APIs.

[actions]
- Analysis only; no code change
