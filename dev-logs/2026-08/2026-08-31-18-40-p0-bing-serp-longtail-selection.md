Date: 2026-08-31 18:40
Summary: P0 scene slugs got Bing SERP plus user-also-search long-tails; CN Bing hijacks were discarded and no week-attack build was added.

[question]
为p0在bing上跑serp，以及用户也搜的词，用来做长尾词选择

[try to solve]
Ran CloakBrowser Bing `en-US` batches for the five product P0 scene queries and expansions (`docs/seo/keywords/p0-scene/`). CN international index hijacked most brand/verb queries (Amazon homepage, Minecraft Create, OG slang, etc.) and Related searches were empty, so script `long_gap` drafts were discarded (strategy §3.3 D).

Human long-tail picks (one URL per job-type):
- `create-zip-file`: do not attack H1 `zip files online` (Google ezyZip / desktop zip); optional H1 `Create zip file` / `Zip folder online`; password/folder as chips.
- `amazon-main-image-size`: H1 `Amazon main image size`; `2000×2000` / zoom 1000px as title_gap chips.
- `iphone-app-store-screenshot`: H1 `iPhone 6.9 screenshot size` (1320×2868 class); drop 6.7 as H1.
- `apple-touch-icon`: H1 `apple-touch-icon` / `180×180`; `apple-touch-icon generator` is head (tool≈10).
- `open-graph-image-size`: cleanest Bing seed; H1 `Open Graph image size`; do not query short `og image`.

Pool: 11 rows, all `defer`/`drop`; no `work-tasks`. Inventory §0 iPhone row now says 6.9-inch.

[actions]
- Scraped Bing batches under `docs/seo/keywords/p0-scene/`
- Wrote `2026-08-31-p0-scene-longtail-selection.md`; appended `keyword-daily-pool.tsv`; updated tracker
- Related-search parse: scroll + extra selectors (CN related still empty)
