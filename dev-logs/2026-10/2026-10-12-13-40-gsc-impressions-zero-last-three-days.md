Date: 2026-10-12 13:40
Summary: Clarity zeros rule out GSC-only lag; live probes show intermittent empty HTML 404s on some Cloudflare PoPs while Assets/API stay 200 — the leading technical cause for both dashboards going flat.
Visibility: people

[question]
git pull，然后分析为什么前三天开始，谷歌的曝光突然清零

Follow-up: 但是 clarify没有数据

[try to solve]
## Context
On 2026-10-12 the operator reported Google Search Console impressions at zero for about the last three days, then clarified that **Microsoft Clarity also showed no sessions** for the same window. GSC pipeline delay alone cannot explain Clarity. Local `main` was `fb986716` (14 commits ahead of `origin/main`); `git pull`/`git fetch` hung on GitHub SSH.

## Process
1. Confirmed live `robots.txt` still allows `/` (only `/api/` disallowed) and `sitemap.xml` returns 200.
2. Confirmed Worker ops `GET /api/ops/pages-build`: `pagesCacheVersion`/`r2MetaVersion` `4.93`, `aligned: true`.
3. Confirmed Clarity project id `xbc0iytpn7` is still injected on home and tool HTML (after `window.load` + idle). In a live browser tab, resource timing showed `clarity.ms/tag`, `scripts.clarity.ms/.../clarity.js`, and `g.clarity.ms/collect` all firing — so **install is not broken right now**.
4. Compared Google Ranking dashboard and industry notes: September 2026 spam update ran **2026-09-24 → 2026-10-08**; Performance-report lag was widely reported **2026-10-10/11**.
5. Probed HTML vs non-HTML from multiple paths:
   - Browser navigation / SIN PoP: home and `/tools/text-diff` returned full HTML 200.
   - Same session `fetch()` once returned **status 404, body length 0, `Content-Type` null** for `/`, `/tools/text-diff`, `/privacy`, while vendor CSS, sitemap, robots, and `/api/ops/pages-build` stayed 200.
   - AMS-edge `curl` earlier also saw bare Cloudflare HTML 404s (no Worker `text/plain Not Found` body) interleaved with successful 200s.

## Root cause / analysis
### What Clarity changes
Clarity only records visits that successfully load the page and run JS. A three-day Clarity flatline means either almost nobody reached a working HTML response, or something blocked collect for that period. It is **not** explained by Search Console’s delayed Performance report.

Live check today: Clarity script is present and `g.clarity.ms/collect` succeeds when HTML loads. Clarity itself is not in a confirmed multi-day outage (StatusGator last flagged Sep 29). So the dashboard empty period points at **missing successful page views**, not a removed tag.

### Leading cause: intermittent HTML 404 at the edge
The failure shape is specific:

| Path | Observed |
| --- | --- |
| `/`, `/tools/*`, `/privacy` | Sometimes empty **404** (0 bytes, no content-type) |
| `/vendor/*`, `/sitemap.xml`, `/robots.txt`, `/api/ops/pages-build` | Stable **200** |

That pattern matches **document HTML serving** (Worker → Cache/Assets/R2) failing on some Cloudflare PoPs or requests, while Static Assets and Worker API routes keep working. It is **not** the app’s intentional Hono `Not Found` body (`text/plain; charset=utf-8` “Not Found”).

If Googlebot and users in affected regions hit those empty 404s for days:

- SERP impressions collapse (pages fail live crawl / stop earning impressions).
- Clarity sessions collapse (script never runs on a blank 404).
- Sitemap/robots still look healthy, so the outage is easy to miss if you only check those.

This is a stronger joint explanation for **GSC + Clarity both zero** than “GSC lag only.”

### Secondary / parallel: spam update + GSC lag
- September 2026 spam update completed **2026-10-08 ~04:37 ET**. Public impact waves were roughly Sep 25–27, Sep 30, Oct 4–6. A cliff only on Oct 9–12 may still include residual demotion after rollout finished, but must be separated from the HTML 404 evidence.
- Industry GSC Performance delays of 50–64+ hours on Oct 10–11 can still inflate the *appearance* of the last 1–2 GSC days being zero. That lag does **not** erase Clarity.

### Ruled out / weak
- Sitewide `noindex` or robots block: not present.
- Clarity tag removed from build: still on live HTML.
- R2/Worker version skew: `pages-build` reports aligned `4.93`.
- Full global wipe of the Google index: branded tool URLs still appear in search snippets when HTML is reachable.

## Solution
1. **Cloudflare first (today):** In Workers & Pages → `onlinefreetools` → Metrics / Logs, filter last 7 days for **404** on HTML paths (`/`, `/tools/*`). Check Custom Domains for `onlinefreetools.org`, recent deployments, and any WAF/Bot Fight rules that might strip HTML on some PoPs. Compare AMS vs other regions with curl and URL Inspection live test.
2. **Clarity sanity:** Clear all filters → Last 7 / 28 days → Dashboard. Open Realtime, load the site in a private window, confirm a session appears within ~30 minutes. If realtime works but historical days are empty, traffic really was missing those days.
3. **Cloudflare Web Analytics / zone Traffic:** Compare eyeball requests and 404 rate for Oct 6–12 vs prior week. If requests exist but Clarity is empty, dig into client JS; if requests themselves cratered with HTML 404s, fix edge serving.
4. **GSC after edge is stable:** URL Inspection live test on `/` and a former high-impression tool; Manual actions; Coverage. Only after HTML 404s stop, judge the Sep 24–Oct 8 spam window with equal weekday comparisons.
5. Do not bulk-rewrite tools or change robots while empty HTML 404s are still reproducible.

## Notes / boundaries
- `git pull` did not finish; analysis used live production + local tree.
- Repo GSC CSV exports stop at 2026-09-10 (daily impressions then were hundreds/day, not zero).
- Clarity project id in HTML: `xbc0iytpn7`.
- Follow-up clarification: the operator uses a local VPN. Empty HTML 404s seen from AMS/`curl` may be **VPN/egress artifacts**, not production truth. Non-VPN WebFetch of `/` and `/tools/text-diff` returned full HTML; `pages-build` stayed aligned.
- Ranking dashboard: https://status.search.google.com/products/rGHU1u87FJnkP6W2GwMi/history
- Spam update done note: https://www.seroundtable.com/google-september-2026-spam-update-done-42235.html
- GSC Performance delay note: https://www.seroundtable.com/google-search-console-performance-report-delayed-42271.html

### GSC cliff date (operator-confirmed 2026-10-13)
Operator confirmed the Performance **Dates** chart cliff is on **2026-10-06**, not only a post–Oct-8 three-day tail.

**Timeline fit with September 2026 spam update:** **strong.** Public impact waves included **October 4–6**; rollout completed **2026-10-08 ~04:37 ET**. An Oct-6 impressions cliff that stays low afterward is the clean spam-window signature, not mere end-of-report lag (lag can still soften the newest 1–2 days, but does not invent an Oct-6 break).

Revised odds given this date + prior content exposure:

| Judgment | Approx. odds |
| --- | --- |
| Sept 2026 spam update was a **material cause** of the drop | **High (~70–85%)** |
| Drop is **only** GSC reporting lag | **Low (~10–20%)** |
| Same-GSC deleted spam site is the **main** cause | Still **low–medium** unless redirects/site-group signals exist |

Still separate: Clarity flatline (real traffic) vs GSC-only; Cloudflare zone analytics; Manual actions empty; which URL clusters died on Oct 6.

### Operator update 2026-10-13 — sitewide near-zero
Impressions collapsed sitewide after the Oct-6 cliff; only scattered impressions remain. Recovery plan written under `docs/seo/reviews/2026-10-13/` (`01` analysis, `02` strategy, `03` todo): freeze thin clusters, reduce calculator/prompt surface, reinforce survivors, expect months for automated reassessment (no reconsideration request for automated spam).

### Content-based spam-hit probability (project pages, not GSC proof)
Calibrated from catalog shape + sample copy (not a Manual Action check):

| Judgment | Approx. odds | Why |
| --- | --- | --- |
| Site has **scaled-content exposure** (template clusters × 10 locales) | **High (~75–85%)** | ~218 tools × 10 langs; ~60 `how-to-calculate-*`; prompt-builder FAQ boilerplate shared across Midjourney/Film siblings; PDF + batch-convert families; 2026-09-07 GSC already showed selective non-index of those clusters |
| Sept 2026 spam update was a **material cause of a sustained ranking/traffic cut** | **Medium (~40–55%)** | Exposure + free-tools niche fit SpamBrain targets; mitigators: real interactive tools, IG gates, no parasite/expired-domain/PBN pattern |
| Spam **alone** explains **only** Oct 9–12 absolute zero (GSC + Clarity) | **Lower (~20–35%)** | Cleanest spam signature is during Sep 24–Oct 8 waves; 3-day post-completion cliff still needs Dates/Clarity curves vs GSC lag |

Highest-risk clusters if demoted: calculator how-tos (short isomorphic FAQ), prompt-builder family (near-copy FAQ shells), PDF suite and webpage batch-convert siblings (functional IG exists but SERP chrome looks scaled). Lower-risk exemplars: distinctive single-job tools with unique interaction (e.g. text-diff).

### How to verify (operator)
1. GSC Performance → Dates, last 3 months: mark Sep 24, Oct 8; compare equal weekday blocks **Sep 10–23 vs Oct 9–12 (after backfill)** and **Sep 24–Oct 8 during rollout**.
2. Clarity: clear filters; daily sessions Sep 10–Oct 12. If Clarity dipped on Sep 25–27 / Sep 30 / Oct 4–6 and stayed low after Oct 8 → traffic real, spam-compatible. If Clarity only zeros the last 1–2 days → reporting/filter more likely.
3. GSC Manual actions + URL Inspection live test (Google’s fetch, not local VPN).
4. Cloudflare zone analytics (not VPN-dependent): eyeball requests / 404 rate Oct 6–12 vs prior week.
5. Ignore local VPN `curl` 404s unless URL Inspection or CF analytics corroborate.

[actions]
- Live-checked robots, sitemap, pages-build, home/tool HTML
- Verified Clarity tag + `g.clarity.ms/collect` in browser
- Observed intermittent empty HTML 404 from VPN-adjacent egress; later non-VPN WebFetch got full HTML
- Compared spam-update window and GSC reporting-lag reports
- Documented verification steps for spam vs lag vs technical
