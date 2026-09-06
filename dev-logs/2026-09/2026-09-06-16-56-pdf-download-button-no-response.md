Date: 2026-09-06 16:56
Summary: PDF-to-DWG and PDF-to-PDF/A Download is a real blob link, so a click saves instead of a silent programmatic a.click().
Visibility: people

[question]
http://127.0.0.1:8788/zh/tools/convert-pdf-to-dwg 点击下载.dxf没有反应
http://127.0.0.1:8788/zh/tools/convert-pdf-to-pdf-a 也是一样的问题，点击下载没有反应

## Tool links (English)
- https://onlinefreetools.org/tools/convert-pdf-to-dwg
- https://onlinefreetools.org/tools/convert-pdf-to-pdf-a
Chinese: https://onlinefreetools.org/zh/tools/convert-pdf-to-dwg
Chinese: https://onlinefreetools.org/zh/tools/convert-pdf-to-pdf-a

[try to solve]
## Context
On the local Chinese tool pages, Load sample (and a user PDF) showed a preview and an enabled Download control, but clicking it did nothing: no file, no error, no status change. The same pattern appeared on Convert PDF to DWG (Download .dxf) and Convert PDF to PDF/A.

## Process
1. Confirmed the DWG page after sample: status「完成」, DXF textarea filled (~419 bytes of ASCII `SECTION` / `ENTITIES`), `#cpdBtnDownload` enabled. Headless Chrome then *did* receive `sample-pdf-to-dwg.dxf` from a click — so the save path itself was not dead once a result existed.
2. Read `downloadResult`: `if (!result) return;` / `if (!resultBytes) return;` with no `setError`. A click with an empty result is indistinguishable from a frozen button.
3. Traced `window.OftPdfWork.setBusy(buttons, busy)`. When `busy` is false it sets `btn.disabled = false` on **every** button in the array. Both pages put Download in `busyBtns`.
4. `loadFile` ends with `setBusy(false)` after `showPreview`. That paints the PDF canvas **and** lights Download while `result` / `resultBytes` is still null. Convert runs only after that (sample path) or after a second click on Convert (user file). The preview makes the page look finished, so Download is the natural next click — and it no-ops.
5. Applied the same fix on both pages: keep Download out of `busyBtns`; after load, `btnDownload.disabled = !result`; delay `URL.revokeObjectURL` by 2s (DWG also uses `application/octet-stream` so an unknown `.dxf` MIME cannot cancel a blob navigation). Cache version 4.52 so the Worker HTML Cache API drops the old script.

## Root cause / analysis
Two independent states were collapsed onto one control. Preview-ready is not file-ready. `setBusy(false)` treated “not busy” as “all actions available”. Combined with a silent early return, the UI lied: Download looked clickable and then did nothing. Immediate `revokeObjectURL` after `a.click()` can also abort a blob download in some browsers, especially for non-PDF types such as DXF; that was a second, smaller failure mode after a real result existed.

## Solution
- `src/pages/convertPdfToDwgPage.ts` and `src/pages/convertPdfToPdfAPage.ts`: Download is enabled only when the converted bytes/string exist. A click without a result shows the existing empty/convert error instead of returning quietly. Blob URLs are revoked after 2 seconds.
- Local check on `http://127.0.0.1:8788/zh/tools/convert-pdf-to-pdf-a` and `.../convert-pdf-to-dwg`: after sample status「完成」, click Download → `sample-pdf-a-pdfa.pdf` and `sample-pdf-to-dwg.dxf`, no `pageerror`.
- `PAGES_CACHE_VERSION` 4.51 → 4.53.

## Second pass (native `<a download>`)
The first pass still used a hidden `<a>` plus `a.click()`. That is a programmatic download: Playwright records it, but Cursor’s preview pane and some browsers swallow it with no UI. The user reported PDF/A still “did nothing” after 4.52.

Download is now a real `<a class="btn">`. After convert, `setDownloadReady` points `href` at a live blob URL and sets `download=filename`. The user click is a normal link activation, not `element.click()` on a detached node. Blob URLs stay until the next convert/clear.

Rechecked `http://127.0.0.1:8788/zh/tools/convert-pdf-to-pdf-a`: status「完成」, `#cpaBtnDownload` is an `A` with `blob:` href and `download="sample-pdf-a-pdfa.pdf"`, click saves that name, no `pageerror`. Hard-refresh the local page so the 4.53 HTML replaces the old button.

## Notes / boundaries
- Other PDF tools that put Download in `busyBtns` and call `setBusy(false)` from `loadFile` can show the same fake-enabled button. They were not changed in this pass.
- Convert PDF to PDF/A is still a best-effort metadata/font embed, not a veraPDF-certified PDF/A.
- Convert PDF to DWG still writes ASCII DXF (TEXT + page-frame LINE), not proprietary DWG binary.
- Production still needs R2 upload of the new HTML after this cache bump.
- Embedded browsers that block all blob downloads will still not save a file; the control is a real link (`blob:`) so a full Chrome/Safari/Firefox window will.

[actions]
- `src/pages/convertPdfToDwgPage.ts`: Download not in busyBtns; native `<a download>` blob link
- `src/pages/convertPdfToPdfAPage.ts`: same
- `wrangler.jsonc`: `PAGES_CACHE_VERSION` 4.51 → 4.53
- `npm run tool:touch -- --slug=convert-pdf-to-pdf-a,convert-pdf-to-dwg`
