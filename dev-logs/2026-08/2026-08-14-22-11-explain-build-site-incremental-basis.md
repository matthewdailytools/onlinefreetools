Date: 2026-08-14 22:11
Summary: Explained what `npm run build:site` uses to decide incremental work.

[question]
build site 根据什么来增量build

[try to solve]
Checked `scripts/build-site.mjs`, `scripts/lib/changed-tools.mjs`, and `scripts/gzip-pages.mjs`. `npm run build:site` runs `node scripts/build-site.mjs --changed-tools`, so tool-page prerendering is incremental by comparing each catalog shard's `updatedAt` with the local `.cache/tool-build-state.json` `toolGeneratedAt` marker. Missing `updatedAt` or missing baseline means the tool is treated as needing generation. If the `_pages` gzip baseline is missing, build-site falls back to a full tool prerender. Shared pages such as home, about, privacy, terms, contact, taxonomy, dev logs, and sitemap are still refreshed every run. Gzip scans `_pages` HTML and skips existing `.gz` files whose mtime is newer than or equal to the source HTML unless forced.

[actions]
- Inspected `scripts/build-site.mjs`
- Inspected `scripts/lib/changed-tools.mjs`
- Inspected `scripts/gzip-pages.mjs`
