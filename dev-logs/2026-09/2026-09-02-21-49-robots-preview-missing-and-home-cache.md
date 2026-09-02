Date: 2026-09-02 21:49
Summary: Fixed robots.txt HTML-as-preview bug and cleared stale homepage Newest via PAGES_CACHE_VERSION bump after launchedAt correction.
Visibility: project

[question]
首页为什么没有列出最新工具（续：robots 预览 + 本地 / 仍旧列表）

[try to solve]
## Context
Five web-check tools were already in catalog/nav; Newest omitted them due to earlier noon launchedAt. After correcting launchedAt, disk and `/index.html` showed the five tools, but browser `/` still showed the prompt pack. Separately, robots checker preview showed Example Domain HTML.

## Process
1. API: treat non-OK or HTML robots body as `robotsMissing` (allow-all, empty preview).
2. Page/i18n: show missing message; sample URL → `https://www.google.com/search`.
3. Confirmed `/` Cache API HIT kept ETag from ~13:36 while ASSETS `/index.html` already had new Newest; curl without `Accept: text/html` 404s by design.
4. No local `CACHE_ADMIN_TOKEN`; bumped `PAGES_CACHE_VERSION` 4.6 → 4.7, reseeded R2 meta, restarted wrangler.

## Root cause / analysis
Newest = top 8 by `launchedAt`. Stale `caches.default` for public `/` survives naive expectations that ASSETS refresh alone updates Worker-served home. Robots sample used example.com which returns HTML 404 as “robots.txt”.

## Solution
Correct launchedAt; API/UI for missing robots; invalidate HTML cache via version bump; hard-refresh `/` and `/zh/`.

## Notes / boundaries
Prefer exact-key purge when `CACHE_ADMIN_TOKEN` is set; version bump is release-wide. Do not bump `launchedAt` via routine `tool:touch`.

[actions]
- webCheckApis robotsMissing; checkRobotsTxtUrlBlockedPage + 10 locales; wrangler PAGES_CACHE_VERSION 4.7; restart:dev 8788
