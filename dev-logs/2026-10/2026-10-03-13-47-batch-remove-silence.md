Date: 2026-10-03 13:47
Summary: Implemented and locally verified ten-language batch audio silence removal with per-file duration reports and large WAV output.
Visibility: project

[question]
Implement every unimplemented browser-feasible AV function in the capability map one at a time, with search intent up front, information gain, and complete local page tests.

[try to solve]
## Fifth completed item

`/tools/batch-remove-silence-from-recordings` applies a shared 10 ms RMS silence threshold, minimum quiet duration and retained gap to up to 20 independent MP3/WAV/M4A/FLAC/OGG recordings. Each row shows detected gaps, original/output duration, seconds and percentage removed, actual WAV size, preview and individual download. Completely silent or damaged items fail independently. The ten localized openings state the batch task and per-file result; Rules and FAQ distinguish threshold detection from speech understanding and noise removal.

The output writer concatenates kept sample ranges with short boundary fades into chunked 16-bit PCM WAV. Real files use OPFS where available; a 96 MiB retained-output memory fallback applies without OPFS. Code caps are 20 files, 20 MiB/5 minutes per input and 60 MiB per WAV; these are not all empirically tested maxima.

## Verification

- `coverage:gate` 0b/2/4/all, `npm run build:site`, `CROSS_TOOL_UPDATE=1 npm run verify:tool -- --slug=batch-remove-silence-from-recordings`: passed. Gate evidence `.cache/verify-tool/batch-remove-silence-from-recordings/1791006394324-d8c660e5-ad1e-4e96-b50b-c0908358af42`.
- Final-build `node scripts/tool-modules/test-batch-silence-browser.mjs`: passed. Two 3-second samples downloaded as 2.30- and 1.90-second WAVs; raising the minimum pause and kept gap produced a 2.45-second WAV. A no-long-gap file reported zero removal. Preview audio control worked. Mixed OGG/ID3 MP3 succeeded while silent/damaged inputs failed independently; retry, twenty same-name inputs, stop/resume, over-limit input, ten mobile locales and RTL passed.
- A real 285-second MP3 with a 15-second internal gap generated a >40 MiB OPFS WAV. `ffprobe` confirmed PCM 16-bit, 44.1 kHz, stereo and 270.16 seconds. Download, OPFS cleanup and no-OPFS fallback passed. No unexpected network request or page exception occurred.

## Limits and next work

This is local only, not deployed. The configured maximum input size, twenty simultaneous long inputs, storage-quota exhaustion and crash recovery remain untested. Single WebM/MOV-to-MP4 conversions are next before video batch pages; other unimplemented video, subtitle and comprehensive functions remain in the queue.

[actions]
- Added catalog, page, icon, ten locale shards, briefs and browser acceptance script.
- Added an inbound related link from the existing single-file silence remover.
- Updated the capability map with local acceptance and next priority.
