Date: 2026-09-06 13:11
Summary: convert-html-to-pdf no longer auto-fetches or auto-converts on page entry; Load URL fills preview only, Convert runs on click.
Visibility: people

[question]
”Could not load that URL. Check the address, or the site may block fetches“ 这个不再做自动load，点击才load convert

## Tool links (English)
- https://onlinefreetools.org/tools/convert-html-to-pdf
Chinese: https://onlinefreetools.org/zh/tools/convert-html-to-pdf

[try to solve]
## Context
Opening the tool showed the URL-fetch error even though the visitor had not asked to load a page. The URL field defaults to `https://example.com`. Page-entry `loadSample()` plus Load URL calling `runConvert()` made fetch/convert happen without an explicit Convert click. Sites that block the Worker fetch then painted `Could not load that URL…` immediately.

## Process
1. Removed the init `loadSample()` call. The `loadSample` function stays for the Sample button (lint still requires it).
2. Load URL now writes the fetched HTML into the textarea and refreshes the HTML preview only. It does **not** call `runConvert()`.
3. Convert still runs only on the Convert button (and Sample / Paste, which are explicit clicks).
4. Local check: after 2.5s idle, error empty, textarea empty, no `/api/tools/convert-html-to-pdf` requests, download disabled. Sample click with wait 0 still reaches 「完成」.

## Root cause / analysis
Auto-run on entry treated a default URL / sample as a user request. A blocked fetch then looked like a broken tool. Fetch and PDF export should be separate, click-driven steps.

## Solution
Idle page is empty aside from the default URL value. Click **Load URL** to fetch; click **Convert** to export PDF. `PAGES_CACHE_VERSION` 4.35.

## Notes / boundaries
- Enter in the URL field still triggers Load URL (same as the button), not Convert.
- Sample still converts immediately because that button means “run a demo.”

[actions]
- `src/pages/convertHtmlToPdfPage.ts`: drop init auto-run; Load URL no longer converts
- `wrangler.jsonc`: cache 4.35
- `src/site/tool-catalog.d/convert-html-to-pdf.json`: `updatedAt`
