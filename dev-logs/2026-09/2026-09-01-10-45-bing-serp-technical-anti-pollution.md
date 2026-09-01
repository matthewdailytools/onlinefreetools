Date: 2026-09-01 10:45
Summary: Bing SERP scraper v0.3 adds technical isolation (new BrowserContext, index-lock query params, strip pq/cvid, international toggle, language:en last resort) so CN session bleed is not treated as a long_gap.

[question]
技术也针对bing serp进行策略优化处理

[try to solve]
User-habit query rewriting (v0.2) was not enough: search-box submits often drop `ensearch=1` and attach `pq=` from the previous keyword, and one Playwright page still shares cookies (`MUID`, conversation id). Technical layer now:

- New `BrowserContext` per query with `Accept-Language: en-US`, US timezone/geolocation.
- URL lock: `setmkt` + `ensearch=1` + `qs=n` + `sp=-1` + `lq=0` (does not change the user's query text).
- After the search box submits, reload without `pq`/`cvid` and restore the lock.
- Click the on-page 国际版 control when present; skip ad packs; CJK-heavy titles or captcha → `unusable`.
- If habit variants are still polluted, one extra fetch with `language:en` (research only, never an H1).

Documented as strategy §3.3 I.2. Flags: `--reuse-page`, `--no-lang-lock`.

[actions]
- Updated `ops/seo/bing_serp/{browser_util,bing_parse,query_strategy,run_bing_serp,analyze}` to v0.3.0
- Extended `docs/seo/2026-08-20-long-tail-gap-strategy.md` §3.3 I.2 and bing_serp README
