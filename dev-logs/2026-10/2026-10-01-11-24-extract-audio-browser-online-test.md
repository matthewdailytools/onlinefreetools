Date: 2026-10-01 11:24
Summary: Browser online tests show production still on old extract assets/copy, while local serves the new WebCodecs demux path and passes large + batch runs.
Visibility: people

[question]
使用浏览器进行线上测试

## Tool links (English)
- https://onlinefreetools.org/tools/extract-audio-from-a-video-file
- https://onlinefreetools.org/tools/batch-extract-audio-from-video-files

[try to solve]
## Context
Validate extract-audio (and batch) in a real browser against production and the local wrangler origin after the memory-stable demux fix.

## Process
1. Opened production `https://onlinefreetools.org/tools/extract-audio-from-a-video-file` in Cursor browser.
2. Clicked **Load sample** → HUD reached 100% and Download enabled (~0.1–2 s).
3. Fetched `/vendor/extract-audio/stable-extract.js` on production → **404**; page hint still says **80 MiB / 10 minutes**.
4. Restarted local `npm run start:dev -- --no-build --no-seed-r2` (earlier crash was from a >25 MiB test MP4 under `public/`).
5. Playwright + Cursor browser on `http://127.0.0.1:8787`:
   - Sample PASS
   - ~49 MiB `large-stream.mp4` UI extract PASS in ~1.1–1.5 s with `mode: mp4-webcodecs`, `HARD_MAX_BYTES = 1 GiB`
   - Batch of 3 files (2 clips + large) PASS ZIP download; last file meta also `mp4-webcodecs`
6. Wrote machine report to `/tmp/ea-browser-online-report.json`.

## Root cause / analysis
Production HTML for this tool is live, but the new vendor tree (`stable-extract.js` / `mp4box`) is not deployed, so production cannot exercise the demux path. Local Assets serve the new vendor JS, but local R2-prerendered HTML still shows stale limit copy (**200 MiB / 3 hours**) until `build:site` + R2 reseed/upload.

## Solution
Treat environments separately:
- **Production browser:** sample works; new size path **not** online yet (vendor 404 + old copy).
- **Local browser:** demux path verified (`mp4-webcodecs`) for large MP4 and batch ZIP.

## Notes / boundaries
- Do not place fixtures >25 MiB under `public/` (Workers Assets hard limit breaks `wrangler dev`).
- Hidden `#eaFile` clears after pick; mode must be captured by wrapping `OftExtractAudio.extractFile` or by keeping the File handle.
- Next ship step for true production parity: deploy vendor + rebuilt tool HTML (not only i18n shards).

[actions]
- Cursor browser + Playwright against prod and local `:8787`
- Report: `/tmp/ea-browser-online-report.json`
