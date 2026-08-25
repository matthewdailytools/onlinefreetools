Date: 2026-08-07 16:47
Summary: Rebuilt static home pages so Image Optimizer appears in nav, cards, and sitemap.

[question]
首页页面没有对应入口

[try to solve]
Root cause: home pages are static under `public/_pages/{lang}/index.html`. The tool was already in the catalog, but `build:site` had not been run, so the home UI had no entry.

Ran `npm run build:site`. English and Chinese home nav dropdowns, Featured, All tools, and the sitemap now include Image Optimizer (zh card label: image optimization). Refresh the local home page to see it.

[actions]
- Ran `npm run build:site` (refreshed `_pages` and sitemap)
