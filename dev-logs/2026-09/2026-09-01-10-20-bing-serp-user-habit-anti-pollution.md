Date: 2026-09-01 10:20
Summary: Bing SERP scraper now searches like a user (search box, fresh page, unquoted task phrases) and retries habit variants instead of treating polluted CN results as long_gap.

[question]
bing 的 serp查询，根据用户习惯修改搜索策略，尽量避免被污染

[try to solve]
P0 (2026-08-31) showed CN Bing international SERPs were hijacked when queries were unlike real tool searches: quoted strings, brand moved to the end, short verbs (`create`/`make`), `og` slang, digit-led sizes, and one reused browser page that leaked unrelated Chinese SERPs (rural bank / 135 editor / GTA mods). Quotes did not stop hijacks.

Defaults in `ops/seo/bing_serp` v0.2:

- First request already uses the international index (`ensearch=1`); no domestic-first hit.
- New Playwright page per query (session isolation).
- Open Bing home and type in the search box (`form=QBLH`); URL fallback if the box is missing.
- Strip quotes; expand `og` → `open graph`; hyphenate `apple touch icon`; move `1200x630` off the lead; rotate `create zip file` → `zip files online`.
- If organic titles miss the task tokens, or one junk host owns the page, retry up to 3 habit variants. Still dirty → draft `competition_tier=unusable` (strategy §3.3 D/I), never ingest as `long_gap`.

Did not re-scrape P0 in this turn. Next Bing batches should drop quoted/reversed-brand seed lists.

[actions]
- Added `ops/seo/bing_serp/query_strategy.py`; wired `run_bing_serp` / `analyze` / `browser_util` / `bing_parse` / `io_util`
- Documented §3.3 I in `docs/seo/2026-08-20-long-tail-gap-strategy.md`; synced Skill, funnel rule, ops README
