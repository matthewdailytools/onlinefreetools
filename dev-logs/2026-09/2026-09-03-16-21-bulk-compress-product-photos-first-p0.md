Date: 2026-09-03 18:33
Summary: Shipped all eight P0 bulk/batch table slugs as independent URLs; last two are email PDF ZIP compress and release-file checksum tables.
Visibility: people

[question]
按表格逐一立项和创建工具

[try to solve]
## Context
The bulk/batch table in `docs/seo/keywords/bulk-batch/2026-09-03-bulk-vs-batch-tool-split.md` lists eight P0 independent URLs. The user asked to brief **and implement** them one by one, then to keep running gates without pausing for confirmation. Batch work is a new tool per job, not `multiple` on an existing single-file page. Each slug contains only one of `bulk` or `batch`. Related links on first-shipped pages may point only at already-live catalog slugs.

## Process
1. Copied `work-tasks/_template/` to all eight P0 slugs and filled `00`–`03` (coverage table, intent review, ten-locale search briefs, Planner marked 不适用). All eight `coverage:gate --phase=0b` passed before engineering.
2. Implemented serially (Page/i18n of slug B only after slug A `phase=4`): product-photo compress, PNG compress, convert-to-JPG, convert-to-PNG, convert-to-WebP, watermark product photos, compress PDFs for email, checksum release files.
3. Each slug followed the same gate chain: English master → `03` row `1b` → `merge:tools` → `lint:tool-page` → `coverage:gate --phase=2` → nine locales from briefs (batches of three) → `2b` listing `en,zh,es,ja` → `coverage:gate --phase=4` → README zh+en bullets → `$env:CROSS_TOOL_UPDATE='1'; npm run verify:tool -- --slug=…`. Isolation needs that flag because sibling `work-tasks/` folders sit in the same dirty tree.
4. Watermark `verify:tool` first failed on illegal XML control characters in the SVG comment and a short zh `description` (118 &lt; 120). Rewrote the icon as clean ASCII and lengthened zh copy, then re-ran verify green. WebP had the same icon-control-char failure earlier; a clean SVG plus a later full `lint:seo` (during PDF/checksum verify) confirmed the icon.
5. PDF page rasterizes each file with pdf.js + pdf-lib (email/print/max presets), skips encrypted/broken rows, and ZIPs **separate** PDFs (not a merge). Checksum page hashes with chunked `File.slice` + Web Crypto SHA-256, optional MD5 via crypto-js CDN, pastes SHA256SUMS for match/mismatch/missing, and exports CSV + SUMS text with **no** ZIP of the binaries.
6. Inbound `related` on live neighbors: `add-watermark` → watermark; `compress-pdf` → email PDF batch; `file-hash` → checksum. Confirmed prerendered H1s: zh PDF 「批量压缩 PDF 以便发邮件」, zh checksum 「批量计算发版文件校验和」; English checksum H1 and `loadSample` present. Home cards appear on `public/index.html` and `public/zh/index.html`. No browser tab in this session.

## Root cause / analysis
A queue job has different primary controls than the single-file neighbor (shared preset, skip table, ZIP-or-export, compare column). Splitting by object and verb (compress vs convert vs watermark vs checksum) matches how people search and avoids a format-dropdown hub. English H1 stays the long-tail sentence; Chinese H1 uses 批量… without stuffing `bulk`/`batch`. Compress must not become convert; checksum must not ZIP the originals.

## Solution
All eight P0 URLs are in the catalog (`opts`, `localProcessing: true`) with ten locales:

| slug | Job |
|---|---|
| `bulk-compress-product-photos` | JPEG/WebP toward a listing-size cap, ZIP |
| `bulk-compress-png-images` | Always PNG+alpha, ZIP |
| `bulk-convert-images-to-jpg` | Always JPEG + white matte, ZIP |
| `bulk-convert-images-to-png` | Always PNG, ZIP |
| `bulk-convert-images-to-webp` | Always WebP, no JPEG fallback, ZIP |
| `batch-watermark-product-photos` | Shared stamp, preview one, apply all, ZIP |
| `batch-compress-pdfs-for-email` | Shared email preset, ZIP of N PDFs |
| `batch-checksum-release-files` | SHA-256 table, SUMS compare, CSV/SUMS export |

## Notes / boundaries
- No Keyword Planner CSV for this theme; not a `long_gap` weekly attack.
- fflate / pdf.js / pdf-lib / crypto-js may load from jsDelivr; FAQ in every locale states files stay on the device and are not uploaded to a server.
- Isolation for this dirty tree needs `CROSS_TOOL_UPDATE=1`.
- P1 rows (watermark PDFs, password/unlock PDFs, SVG set, Amazon resize, strip EXIF, hero WASM, rotate PDFs, convert AVIF, compress GIF) were not in this pass.

[actions]
- Added catalog, page, icon, ten i18n shards, README lines for the six remaining P0 slugs after product-photo and PNG compress
- Fixed watermark and WebP SVG illegal XML control characters; lengthened watermark zh description
- Pointed `add-watermark`, `compress-pdf`, and `file-hash` related arrays at the new batch pages
- Ran `coverage:gate` 0b/2/4 and `verify:tool` with `CROSS_TOOL_UPDATE=1` for each shipped slug
