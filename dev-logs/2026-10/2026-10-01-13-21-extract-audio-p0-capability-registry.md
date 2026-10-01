Date: 2026-10-01 13:21
Summary: Shipped extract-audio P0 capability registry with honest dual-path caps, wired hub+batch pages, and green local browser gates (large MP4 demux, batch ZIP, Witcher MKV err_container).
Visibility: people

[question]
Implement the Extract-audio P0 then per-format slugs plan (capability registry, hub+batch honesty, local verify, then MP4→MOV→WebM→MKV families).

## Tool links (English)
- https://onlinefreetools.org/tools/batch-extract-audio-from-mkv-files
- https://onlinefreetools.org/tools/batch-extract-audio-from-mov-files
- https://onlinefreetools.org/tools/batch-extract-audio-from-mp4-files
- https://onlinefreetools.org/tools/batch-extract-audio-from-video-files
- https://onlinefreetools.org/tools/batch-extract-audio-from-webm-files
- https://onlinefreetools.org/tools/extract-audio-from-a-mov-file
- https://onlinefreetools.org/tools/extract-audio-from-a-video-file
- https://onlinefreetools.org/tools/extract-audio-from-a-webm-file
- https://onlinefreetools.org/tools/extract-audio-from-an-mkv-file
- https://onlinefreetools.org/tools/extract-audio-from-an-mp4-file

[try to solve]
## Context
Large-file extract needed a shared engine that tells the truth about which containers get demux+OPFS (ISOBMFF) versus MediaElement fallback, and hub/batch UI copy had drifted to stale 200 MiB assumptions. P0 locks registry + honesty + local gates before new format landings.

## Process
1. Extended `public/vendor/extract-audio/stable-extract.js` with `getCapabilities()`, `supportedAccept()`, `classifyFile()`, distinct reject reasons (`err_limit` / `err_container` / `err_codec` / `err_channels`), and OPFS-gone retry / WebDriver memory-sink guard for stable demux in automation.
2. Wired `extractAudioFromAVideoFilePage.ts` and `batchExtractAudioFromVideoFilesPage.ts` to registry accept + classifyFile pre-checks; added UI keys for new errors.
3. Rewrote en masters (hub reposition + mixed-format batch IG) and synced ten locales; updated work-tasks multipass rows; `npm run merge:tools` + `build:site`.
4. Local Playwright harness `scripts/dev/extract-audio-p0-browser-test.mjs` on localhost static `public/`:
   - ~49 MiB `large-stream.mp4` → `mode: mp4-webcodecs`
   - small clip → `decode`
   - batch 2 small + 1 large → ZIP `okCount: 3`
   - Witcher-class MKV metadata (~2.8 GiB) → `classify reject` + `err_container` in ~0 ms
5. Shipped format families on the same engine: MP4 + MOV (ISOBMFF demux+OPFS), WebM + MKV (honest MediaElement fallback ~500 MiB / 4 h, no fake 5 GiB claim). Each has single + format-batch; hub related mesh updated; README tool list updated.

## Root cause / analysis
Non-ISOBMFF containers never enter mp4box demux; treating oversize MKV as generic `err_limit` hid the real product boundary. Pages must not hardcode STREAM_MAX alone—`classifyFile` is the single pre-check source. Headless Chrome OPFS is flaky under rapid demux; automation uses memory sink while still exercising the WebCodecs demux path (`mp4-webcodecs`).

## Solution
Capability registry drives accept, pre-check, and error codes; hub is the common-video entry with dual-path copy; hub batch keeps mixed queues and partial ZIP; P0 browser report at `/tmp/ea-fixtures/p0-browser-test-report.json` is green; MP4 landings ship with MP4-only accept on the same engine.

## Notes / boundaries
- P0 does not add Matroska/WebM wasm demux or E-AC-3 decoding.
- Large MKV remains an expected fail with `err_container` until MKV demux ships.
- Production HTML still needs deploy/R2 reseed after this local build for live copy to match.

[actions]
- Updated `public/vendor/extract-audio/stable-extract.js` (registry, classifyFile, OPFS guards)
- Updated hub + batch Pages and ten-locale i18n honesty
- Added `scripts/dev/extract-audio-p0-browser-test.mjs`
- Shipped MP4/MOV/WebM/MKV single + format-batch; README + hub related mesh
- `npm run build:site` refreshes prerendered HTML / sitemap after merge
- Local P0 report: `/tmp/ea-fixtures/p0-browser-test-report.json`
