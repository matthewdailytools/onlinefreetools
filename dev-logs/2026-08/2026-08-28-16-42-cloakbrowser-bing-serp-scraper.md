Date: 2026-08-28 16:42
Summary: Added a shared CloakBrowser Bing SERP scraper under ops/seo/bing_serp that records organic results and drafts competition_tier for the keyword funnel.

[question]
创建一个公用的功能脚本，调用cloakbrowser（本地已安装），在bing进行搜索搜索，对各个长尾词 SERP进行记录和分析。

[try to solve]
Shipped `ops/seo/bing_serp/` (Python): CloakBrowser launch, Bing organic/related parsing, heuristic result_type + competition_tier drafts, JSON under `.cache/serp/bing/` (gitignored), optional sanitized Markdown via `--write-batch-md` into `docs/seo/serp-batches/`. Wired docs in `ops/seo/keyword-to-tool-ops.md`, `ops/README.md`, and `docs/seo/serp-batches/README.md`. Smoke-tested `terraform cidrsubnet` successfully (exit 0); Bing results follow local IP locale — use VPN/`--mkt` carefully and always human-review tiers before pool ingest.

[actions]
- Added `ops/seo/bing_serp/{__init__,browser_util,bing_parse,analyze,io_util,run_bing_serp,README}.py/md`
- Updated `ops/seo/keyword-to-tool-ops.md`, `ops/README.md`, `docs/seo/serp-batches/README.md`
