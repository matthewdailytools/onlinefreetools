Date: 2026-10-01 14:12
Summary: Local wrangler on :8787 served all extract-audio landings; Playwright plus Cursor browser confirmed sample extract, large MP4 demux, batch ZIP, and Witcher MKV reject.
Visibility: people

[question]
启动本地浏览器服务，进行本地线上完整测试

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
After shipping the extract-audio hub, format landings, and capability registry, the local site needed a full “online-like” pass: Wrangler (not a static folder), prerendered HTML from local R2, then real UI sample clicks plus fixture extracts.

## Process
1. Started `npm run start:dev -- --no-build`. Merge/vendor copy ran, then `upload:r2:local` seeded 580 changed objects. Wrangler became ready at `http://127.0.0.1:8787/`. Smoke GET of a newest tool page succeeded.
2. HTTP-checked ten extract slugs in English and Chinese: all 200. Vendor engine `stable-extract.js` 200.
3. Playwright against the Wrangler origin: load each landing, inject the same origin vendor scripts the pages lazy-load, click **Load sample**, then run fixture extracts on the hub and MP4 page.
4. Cursor browser on the same origin: clicked **Load sample** on the hub and on Extract audio from an MP4 file; HUD reached 100% with a WAV preview.

## Root cause / analysis
`OftExtractAudio` is not on `window` until convert/sample loads `/vendor/extract-audio/stable-extract.js`. Tests that wait for the global immediately after `DOMContentLoaded` time out even when the page is healthy. Fixture extracts must load that script first, matching production lazy load.

Synthetic **batch MKV** samples are MediaRecorder MP4 labeled `video/x-matroska`. The page then classifies them as MKV fallback and the batch HUD fails both rows. Single-file MKV sample still succeeded. That is a sample-pipeline mismatch, not a Wrangler/R2 miss.

## Solution
Local origin is usable for full extract-audio QA:

- Hub + MP4/MOV/WebM/MKV singles: sample extract succeeded (Playwright). Cursor browser: hub WAV 258.4 KiB; MP4 landing WAV 253.6 KiB.
- Large MP4 (~49 MiB): `classifyFile` path `demux`, mode `mp4-webcodecs`, ~1.2–1.5 s, MP3 ~602 KiB (hub and MP4 page).
- Small MP4/MOV: path `decode`.
- Batch hub ZIP: 3/3 OK (two decode + one `mp4-webcodecs`), zip ~797 KiB.
- Witcher MKV ~2.8 GiB: classify `reject` / `err_container` (expected honesty).

## Notes / boundaries
- Dev URL: `http://127.0.0.1:8787/` (stop with `npm run stop:dev`). `--no-build` reused existing prerender; R2 seed still ran.
- Production HTML is still a separate deploy/R2 reseed; this pass is local Wrangler only.
- Batch MKV **Load sample** failed in Playwright; do not treat that landing’s sample as a green path until the recorder MIME matches a real Matroska file.

[actions]
- Ran `npm run start:dev -- --no-build` (Wrangler `http://127.0.0.1:8787/`)
- HTTP 200 on 10 extract slugs × en/zh
- Playwright + Cursor browser sample/fixture extracts against that origin
