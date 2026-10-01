Date: 2026-10-01 11:41
Summary: Raised MP4 extract hard cap to about 5 GiB when OPFS streaming is available, with TypedArray sample indexes and streamed MP3 writes; about 1 GiB without OPFS.
Visibility: people

[question]
按照这个方案改一版本

## Tool links (English)
- https://onlinefreetools.org/tools/extract-audio-from-a-video-file
- https://onlinefreetools.org/tools/batch-extract-audio-from-video-files

[try to solve]
## Context
User asked for the multi‑GB plan (not a bare number bump): compact index, stream MP3 off the heap, separate size vs duration, honest OPFS vs no‑OPFS caps, then raise toward 5 GiB for MP4 demux.

## Process
1. Reworked `public/vendor/extract-audio/stable-extract.js`:
   - `HARD_MAX_BYTES = 5 GiB`, `HARD_MAX_BYTES_NO_OPFS = 1 GiB`, duration still 6 h.
   - `parseMp4AudioIndex` packs offsets/sizes/cts/durations/keys into TypedArrays (Float64 offsets for >4 GiB files).
   - `createMp3Sink()` prefers OPFS `createWritable()`; memory path coalesces into ~2 MiB Blobs.
   - Decoder callback enqueues async writes; finalize returns a Blob (OPFS file then deleted).
   - Mode `mp4-webcodecs-opfs` vs `mp4-webcodecs`.
2. Updated extract + batch i18n limit copy across 10 locales (5 GiB with private-file streaming / ~1 GiB otherwise).
3. `npm run merge:tools`; Playwright harness on ~49 MiB fixture → `mode: mp4-webcodecs-opfs`, `hard: 5368709120`, MP3 ~401 KB in ~0.9 s.

## Root cause / analysis
Holding object-per-sample indexes and an in-memory `mp3Parts[]` would still blow RAM on multi‑GB / long tracks. TypedArrays + OPFS address those two peaks; without OPFS, capping at 1 GiB stays honest.

## Solution
Ship the dual-cap demux path in vendor JS and align user-facing limits. Production still needs a deploy of vendor + rebuilt HTML before live users see 5 GiB.

## Notes / boundaries
- 5 GiB applies to ISOBMFF + WebCodecs demux only; MediaElement fallback stays ~500 MiB.
- OPFS availability varies by browser; Chrome-class engines are the intended path for the high cap.
- mp4box still builds an internal sample list during moov parse—TypedArray copy then drops our object graph; further moov-window parsing can wait.
- Do not put >25 MiB fixtures under `public/` (Workers Assets limit).

[actions]
- Rewrote demux sink/index in `public/vendor/extract-audio/stable-extract.js`
- Updated extract + batch i18n limit strings (10 locales)
- Local regress: `/tmp/ea-5gib-regress.json`
