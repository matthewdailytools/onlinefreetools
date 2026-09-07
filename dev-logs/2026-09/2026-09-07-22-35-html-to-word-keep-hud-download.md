Date: 2026-09-07 22:35
Summary: HTML-to-Word keeps the progress HUD after Convert succeeds and points to Download as the next step with a green callout and pulsing Download button.
Visibility: people

[question]
进度完成时候保留进度界面，并明显提示下一步是下载

## Tool links (English)
- https://onlinefreetools.org/tools/convert-html-web-pages-to-word-document
Chinese: https://onlinefreetools.org/zh/tools/convert-html-web-pages-to-word-document

[try to solve]
## Context
The progress card copied from batch webpage-to-PDF hid itself 900 ms after 100%. Convert on this page is often fast, so the HUD vanished before the user saw that Download was the next action. The toolbar Download button also stayed visually quiet (outline, no pulse).

## Process
Removed the auto-hide timeout in `finishHud`. Success now leaves the card at 100% with a green check, green bar, and a callout: next step is download, plus an in-card **Download the Word file** button that runs the same `download()` as the toolbar. The toolbar Download button gets `.is-ready` (green ring pulse). Clear or a failed Convert still closes the HUD. A new Convert resets it.

Ten-locale `hud_next` / `hud_download` and a tighter `status_done` were written independently (zh: 「转换完成。下一步：把 .docx 下载到本机…」).

## Root cause / analysis
Hiding the HUD matched the PDF batch page, where a result table remains. This slug has no table—only Convert then Download. Folding the only progress surface made the Convert → Download handoff easy to miss.

## Solution
Finish Convert → HUD stays, green “next: download” block, pulsing Download. Verified locally after cache bump to 4.61.

## Notes / boundaries
Clear still dismisses the card. The in-HUD button is the same `.docx` blob as the toolbar Download, not a second file.

[actions]
- `convertHtmlWebPagesToWordDocumentPage.ts`: keep HUD on success; `chwHudNext` / `chwHudDownload`; `.is-ready` on toolbar Download
- Ten-locale `hud_next`, `hud_download`, `status_done`
- `wrangler.jsonc`: `PAGES_CACHE_VERSION` 4.61
