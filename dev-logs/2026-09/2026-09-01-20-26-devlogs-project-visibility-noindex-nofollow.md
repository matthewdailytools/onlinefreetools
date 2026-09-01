Date: 2026-09-01 20:26
Summary: Project-only dev logs use Visibility: project for noindex,nofollow and sitemap exclusion while people-helpful logs stay indexable.
Visibility: people

[question]
对项目需要记录的，需要的devlog的，但是对人没有帮助的，写的log条件 noindex ，nofollow

[try to solve]
## Context
After switching to “write when helpful to people,” the user still needs project audit trails that are not people-first content. Those must remain on disk and browsable under `/devlogs/`, but must not compete in search: emit `noindex, nofollow` and keep them out of `sitemap.xml`.

## Process
1. Extended `renderLayout` with `robotsNofollow` and `robotsContent` so pages can emit `noindex, nofollow` (not only bare `noindex`).
2. Added `parseDevLogMeta` in `scripts/site/devlogs.mjs` to read `Visibility:` / `Robots:` from log headers (`project` / `internal` / `noindex` / `private` → project; default `people`).
3. Wired `buildDevLogs` to pass robots meta for project posts; left them on the human index list.
4. Updated `collectDevlogSitemapEntries` to omit project posts from the sitemap while keeping index pagination based on all public `.md` files.
5. Synced `.cursor/rules/dev-logs.mdc`, `project-core.mdc`, `seo-html-defaults.mdc`, `.github/copilot-instructions.md`, and `dev-logs/_archive/README.md`.

## Root cause / analysis
Indexing every project-only note would recreate scaled thin content risk. Archiving them under `_archive/` hides useful internal history from the live site. Per-URL robots meta + sitemap omission matches Google guidance for pages that should stay crawl-reachable when linked but not indexed.

## Solution
- People logs: omit `Visibility` or set `Visibility: people` → indexable + sitemap + detailed process narrative.
- Project logs: set `Visibility: project` (or `Robots: noindex, nofollow`) → HTML meta `noindex, nofollow`, excluded from sitemap, still listed on `/devlogs/`.
- Agents choose visibility when writing; builders enforce it mechanically.

## Notes / boundaries
- Pure git-only sessions and secrets still are not logged.
- Existing historical `.md` files without `Visibility` remain people/indexable until curated.
- After changing visibility headers, run `npm run build:logs` (or `build:site`) so HTML and sitemap refresh.

[actions]
- `scripts/site/layout.mjs`: robotsContent / robotsNofollow
- `scripts/site/devlogs.mjs`: parseDevLogMeta + sitemap filter
- `scripts/build-site.mjs`: apply robots on project posts
- `.cursor/rules/dev-logs.mdc`, `project-core.mdc`, `seo-html-defaults.mdc`
- `.github/copilot-instructions.md`, `dev-logs/_archive/README.md`
