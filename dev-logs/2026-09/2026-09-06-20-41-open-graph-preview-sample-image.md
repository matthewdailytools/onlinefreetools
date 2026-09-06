Date: 2026-09-06 20:48
Summary: Open Graph Preview now uses a real 1200×630 sample image, and the page-URL field plus Fetch URL button stay visible on first paint.
Visibility: people

[question]
无法从该 URL 读取图片尺寸。替换为可用的image url
https://onlinefreetools.org/zh/tools/open-graph-preview

Follow-up: 抓取url功能没有实现，没有url的输入框。
Follow-up: http://localhost:8788/og-image.png 上传后，域名会变化

## Tool links (English)
- https://onlinefreetools.org/tools/open-graph-preview
Chinese: https://onlinefreetools.org/zh/tools/open-graph-preview

[try to solve]
## Context

Two first-paint problems on the Chinese Open Graph Preview page:

1. The sample ratio check showed “无法从该 URL 读取图片尺寸。” even though the Example copy promises a 1200×630 image.
2. There was no visible URL field. The Worker fetch API already existed, but the input lived behind a small “抓取 URL” tab (`display:none` until click). People looking at the default paste textarea concluded fetch was not implemented.

## Process

1. The unknown-size warning is `tool_og_ratio_unknown`. `readImageSize()` loads `og:image` with a browser `Image()` after a placeholder note. `loadSample()` used `https://example.com/og-1200x630.png`, which does not exist, so `onerror` left the warning in place.
2. Confirmed `public/og-image.png` is a real 1200×630 PNG and `https://onlinefreetools.org/og-image.png` returns HTTP 200. An early sample used `location.origin + '/og-image.png'`, which became `http://localhost:8788/og-image.png` in local preview. The sample is now baked as `https://onlinefreetools.org/og-image.png` so local and production tags match.
3. Chromium on the prerendered Chinese HTML then showed `1200×630 像素 · og:image 接近 1200×630 像素（1.91:1）。`
4. The URL pane was `#ogUrlPane { display:none }` with tab buttons. Competitor SERP tools put a URL box on the first screen. The tabs were easy to miss next to a large textarea.
5. Removed the tabs. The card now always shows a URL input, a **抓取 URL** button, and the paste textarea. Fetch fills the textarea with extracted meta tags and renders the cards. Enter in the URL field also fetches.
6. How step 1 in all ten locales now says to type a page URL and click Fetch URL (or paste tags). Production API still fetches public HTML (ogp.me / example.com / wikipedia returned 200).

## Root cause / analysis

The size check was fine; the sample image URL was a dummy. Fetch was also implemented (`GET /api/tools/open-graph-preview`); hiding the input behind a tab made the feature look missing. Open Graph checkers are used mainly by pasting a live URL, so that field belongs on first paint, not behind a mode switch.

## Solution

- Sample `og:image` / `twitter:image` are the production URL `https://onlinefreetools.org/og-image.png` (1200×630), not `location.origin`.
- URL input + Fetch URL button are always visible; paste tags stay below. Fetch reuses the existing Worker and writes extracted tags into the textarea so they can be edited.

## Notes / boundaries

- Production still serves the old prerender until this change is pushed, R2 HTML is uploaded, and Cloudflare deploys.
- Fetching this site’s own tool URLs can fail the HTML content-type check (Worker-to-self). Public HTML pages fetch normally.
- `lint:tool-isolation` for this slug can fail if other tools are dirty in the working tree.

[actions]
- src/pages/openGraphPreviewPage.ts: real sample image URL; always-visible URL field and Fetch button
- src/site/i18n/tools/open-graph-preview/{en,zh,es,de,fr,ja,pt,id,ru,ar}.ts: How step 1 names the URL field
- work-tasks/open-graph-preview/02-tool-info.md: interaction spec no longer hides URL behind a tab
- src/site/tool-catalog.d/open-graph-preview.json: updatedAt via `tool:touch`
- prerendered `open-graph-preview` HTML for all ten locales
