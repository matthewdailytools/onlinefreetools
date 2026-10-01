Date: 2026-10-01 20:48
Summary: Shipped browser MKV→MP4 with forced AAC stereo via mediabunny + ac3 + aac-encoder, and fixed bare `mediabunny` imports so the vendor extensions load without a bundler.
Visibility: people

[question]
立项和实现D2

## Tool links (English)
- https://onlinefreetools.org/tools/convert-an-mkv-file-to-an-mp4-file
- Chinese: https://onlinefreetools.org/zh/tools/convert-an-mkv-file-to-an-mp4-file

[try to solve]
## Context
D1 only updated extract-audio copy (desktop ffmpeg → AAC MP4 → extract). D2 is the conversion product: a single-file tool that turns a local MKV into an MP4 with **AAC stereo** in the tab, without uploading. The AV capability map listed this as V1 (mediabunny + `@mediabunny/ac3` + `@mediabunny/aac-encoder`), not ffmpeg.wasm (~31 MiB WASM exceeds Cloudflare Assets’ ~25 MiB object limit).

Goals: conversion-pair slug/H1, honest limits (~500 MiB / ~2 h), gold-standard progress HUD, ten-locale rewrite, and a working Load sample → Download path.

## Process
1. Briefed under `work-tasks/convert-an-mkv-file-to-an-mp4-file/` (`00`–`03`), coverage gates 0b/0i → phase 2 → phase 4.
2. Added `scripts/vendor-mediabunny.mjs` → `public/vendor/mediabunny/` (main bundle, AC-3, AAC encoder, loader, LICENSE); wired `lint:vendor` / `copy-tool-libs` required files.
3. Implemented `src/pages/convertAnMkvFileToAnMp4FilePage.ts` with Convert → Download, collapsed channels/quality, HUD steps (load/read/decode/encode/write), Stop, sample MKV.
4. Catalog + ten-locale i18n shards; related inbound from extract MKV/MP4 catalogs; README + capability map D2 checked.
5. `npm run build:site` / `verify:tool` (with `CROSS_TOOL_UPDATE=1` for intentional related-tool wiring).
6. Local smoke failed first: HUD showed “Convert failed” after ~0.2s. CDP replay captured:
   `Failed to resolve module specifier "mediabunny"`.
7. Root cause: npm extension bundles use bare `from"mediabunny"`. Same-origin static ES modules cannot resolve bare specifiers without an import map or rewrite.
8. Fixed in `vendor-mediabunny.mjs`: after copy, rewrite bare imports to `./mediabunny.min.mjs`; loader clears `loadPromise` on failure so retries work. Re-vendored; engine convert of the sample returned ~26 KiB MP4 in ~273 ms; UI Load sample → Download enabled, HUD `is-done`.

## Root cause / analysis
Choosing mediabunny over ffmpeg.wasm was correct for size and Conversion API (force AAC + optional AC-3/E-AC-3 decode). The first ship miss was packaging: the published `dist/bundles/*` assume a bundler or import map. For this repo’s “vendor into `public/vendor/` and lazy `import()`” pattern, rewriting bare imports at vendor time matches how other same-origin modules are served and avoids a second page-level import map colliding with future maps.

Sample file is short H.264 + AAC mono in Matroska (~23 KiB)—enough to exercise demux, AAC force-transcode to stereo, and MP4 mux without needing a DDP track for the happy path. DDP remains covered by registering `registerAc3Decoder` and copy/FAQ honesty from D1.

## Solution
- Tool: `/tools/convert-an-mkv-file-to-an-mp4-file` (opts page, mediabunny Conversion, `forceTranscode: true` for AAC, default stereo).
- Vendor: `npm run vendor:mediabunny` (or `node scripts/vendor-mediabunny.mjs`) must rewrite extension bare imports; tracked under `public/vendor/mediabunny/`.
- Verified locally at `http://127.0.0.1:8787/tools/convert-an-mkv-file-to-an-mp4-file`: Load sample → result “Input 22.3 KiB → MP4 25.9 KiB”, Download enabled.

## Notes / boundaries
- Not pure remux; not YouTube download; large MKV / exotic codecs may still fail—FAQ points to desktop ffmpeg then extract tools.
- Soft limits ~500 MiB / long runtimes; Stop aborts Conversion.
- Do not swap to full ffmpeg.wasm without an Assets size plan.
- Deploy is separate; this log covers local brief → verified implementation.

[actions]
- Added work-tasks, catalog, ten-locale i18n, Page, sample MKV, vendor mediabunny + rewrite, related-tool wiring, capability-map D2 checkbox
- Fixed bare `mediabunny` imports in AC-3 / AAC vendor bundles; re-ran Load sample smoke successfully
