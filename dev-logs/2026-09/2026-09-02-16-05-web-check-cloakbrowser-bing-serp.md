Date: 2026-09-02 16:05
Summary: Ran CloakBrowser Bing SERP for 15 web-check search queries; all usable, human review found zero long-gap build candidates.
Visibility: people

[question]
调用cloakbrowser bing serp

[try to solve]
## Context
After the Web-Check job inventory, the funnel still needed a live Bing SERP pass. The user asked to invoke the existing CloakBrowser Bing scraper (`ops/seo/bing_serp/run_bing_serp.py`), not to invent a new crawler.

## Process
1. Confirmed CloakBrowser Chromium is at `%USERPROFILE%\.cloakbrowser`. The documented sibling venv `~/vscodeai/aibrowsercrawler/venv` is not present on this Windows machine.
2. Import succeeded with `C:\Users\matth\AppData\Local\Programs\Python\Python311\python.exe` (`cloakbrowser` 0.3.31; launcher warned 0.5.10 is available — not upgraded in this pass).
3. Wrote 15 user-habit queries (no quotes, no brand inversion) to `docs/seo/keywords/web-check/2026-09-02-web-check-bing-queries.txt`.
4. Ran `--theme web-check --write-batch-md --batch-id 2026-09-02-web-check-bing-serp` with isolated contexts, international lock, delays 4–9s. Wall time ~12 minutes. Result: **ok=15 err=0**.
5. Every query bounced `www.bing.com` → `cn.bing.com?...&ensearch=1` (expected in CN). Related searches parsed empty on all 15; organic titles stayed on-topic, so none were marked `unusable`.
6. Human-reviewed organic titles against draft `competition_tier`. Raised whois / HTTP headers / robots.txt checker / security.txt from draft mid or “possible gap” to **head**. Confirmed `ssl certificate checker` titles already contain that phrase → **§3.3 G does not apply**.

## Root cause / analysis
The inventory’s only speculative gap (`security.txt checker`) is already a dense checker SERP (sectools, URIports, securitytxts, and similar). SSL long-tail wording does not unlock a title-gap H1. Existing absorb targets (whois/dns → `domain-lookup`; headers/redirects/HSTS → `website-headers`; OG preview; robots/sitemap fetch scenes on generator pages) remain correct. Related-empty is a CN international parse limit, not pollution.

## Solution
- Batch markdown: `docs/seo/keywords/web-check/2026-09-02-web-check-bing-serp.md` (includes human review table)
- Pool rows for the 15 queries updated to `source_batch` = that file; **0 `build` / 0 `long_gap`**
- Tracker snapshot and decision log updated
- No `work-tasks/` created

## Notes / boundaries
- Interpreter used: system Python 3.11 with cloakbrowser already installed; do not `pip install` inside this repo.
- JSON cache is local-only under `.cache/serp/bing/` (gitignored).
- Cookie / “what is my ip” / carbon / ports were not in this 15-query set.

[actions]
- Added query list + Bing batch markdown under `docs/seo/keywords/web-check/`
- Updated `docs/seo/keyword-daily-pool.tsv` and `docs/seo/keyword-to-tool-tracker.md`
- Noted Bing confirmation in the web-check inventory
