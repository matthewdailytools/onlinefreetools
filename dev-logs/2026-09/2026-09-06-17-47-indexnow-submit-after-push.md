Date: 2026-09-06 17:47
Summary: After pushing SEO copy, IndexNow accepted 290 git-mapped URLs (HTTP 200) plus 972 previously unknown sitemap URLs (HTTP 200).
Visibility: people

[question]
indexnow 提交

[try to solve]
## Context

Content and H1s had just been pushed to `main`. The publish checklist’s usual `--since-git origin/main` is empty once that push lands, so the submit has to use the commits that actually changed pages.

## Process

1. Confirm the two SEO commits sit on `HEAD` (`seo: clear lint:seo…` then `site: rebuild homes…`). The parent is `HEAD~2`.
2. Dry-run `npm run indexnow -- --since-git HEAD~2`: 28 tools (copy + related hosts) × 10 langs + 10 language homes = 290 URLs; `home=true`.
3. Live submit with `--require-live-key`: key file HTTP 200 and body match, then `api.indexnow.org` batch HTTP 200 for 290 URLs.
4. Incremental from local `public/sitemap.xml` so new sitemap locs (including newly indexed people devlogs) are notified: 972 pending, HTTP 200; local state total 3272.

## Root cause / analysis

`--incremental` only POSTs URLs missing from `.run/indexnow-state.json`. It does **not** re-notify engines when an already-known URL’s title or description changed. After a push, `--since-git origin/main` also does nothing. `HEAD~N` (here N=2) maps i18n/catalog/home files to the URL list that actually changed.

## Solution

Use `--since-git HEAD~2 --require-live-key` for this content update, then `--incremental --sitemap public/sitemap.xml` for new locs. Both batches returned HTTP 200. Bing Webmaster → IndexNow can confirm receipt; 200 only means the endpoint accepted the list.

## Notes / boundaries

- Do not paste the live key into logs or chat; it lives at the site-root `{key}.txt` verification file.
- Cloudflare may still be rolling Worker Assets; tool HTML authority is R2 (`upload:r2`). IndexNow asks engines to recrawl; it does not wait for deploy.
- Default state file is gitignored (`.run/indexnow-state.json`).

[actions]
- Ran npm run indexnow -- --since-git HEAD~2 --require-live-key (290 URLs, HTTP 200)
- Ran npm run indexnow -- --incremental --sitemap public/sitemap.xml (972 URLs, HTTP 200)
