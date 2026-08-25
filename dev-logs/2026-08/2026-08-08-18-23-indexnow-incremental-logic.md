Date: 2026-08-08 18:23
Summary: Explained npm run indexnow:incremental flow (remote sitemap − state → POST → update state).

[question]
npm run indexnow:incremental的逻辑

[try to solve]
`indexnow:incremental` = `--incremental --remote-sitemap`.

Flow: fetch all `<loc>` from the production sitemap → read `.run/indexnow-state.json` → drop URLs already in state → POST remaining URLs to IndexNow (default api.indexnow.org) → merge only 200/202 batches back into state. If pending=0, skip submit. Does not inspect page content or lastmod; a previously pushed URL will not be re-pushed when content changes (use `--since-git` / `--tool` for content updates). Use `--baseline` to seed state first; `--reset-state` to clear.

[actions]
- (Explanatory answer only; no code changes)
