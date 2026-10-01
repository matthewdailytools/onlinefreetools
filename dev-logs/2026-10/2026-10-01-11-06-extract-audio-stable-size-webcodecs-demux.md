Date: 2026-10-01 11:06
Summary: Fixed MP4 large-file extract so the 1 GiB hard cap is backed by a real memory-stable demux path (index + File.slice + WebCodecs), not a silent MediaElement fallback.
Visibility: people

[question]
我需要的是稳定增加可处理文件大小上限，而不是只改数字

## Tool links (English)
- https://onlinefreetools.org/tools/extract-audio-from-a-video-file
- https://onlinefreetools.org/tools/batch-extract-audio-from-video-files

[try to solve]
## Context
Raising `HARD_MAX_BYTES` to ~1 GiB only helps if large MP4s actually take the demux path. The previous `extractViaMp4WebCodecs` implementation returned `err_empty` and the UI silently fell back to MediaElement streaming (~realtime playback), which is not a stable size increase.

## Process
1. Direct-called `extractViaMp4WebCodecs` on a ~49 MiB `large-stream.mp4` fixture → `err_empty`.
2. Probed mp4box sample extraction: `sampleCount === 0` even when `AudioDecoder.isConfigSupported` was true for `mp4a.40.2`.
3. Found two interacting bugs:
   - `MP4BoxNS.createFile()` defaults to `keepMdatData=false` → `discardMdatData=true`, so sample payloads are unavailable for extraction.
   - The feed loop treated `appendBuffer()`’s seek hint as the next file offset. For classic MP4 (`mdat` then `moov` at end), that skipped most of `mdat`, so only a partial buffer remained (`nextSample` stuck ~45 of 1078).
4. Verified a two-pass design:
   - Pass A: `createFile(false)` + allow seek-ahead to build the audio sample table + ASC without retaining mdat.
   - Pass B: `file.slice(offset, offset+size)` per packet → `AudioDecoder` → streaming lame MP3, with `decodeQueueSize` backpressure.
5. Playwright harness: `extractFile` on 49 MiB / 45 MiB fixtures returned `mode: "mp4-webcodecs"` in ~3 s (401 KB / 353 KB MP3); small clip still used `mode: "decode"`.
6. Synced stale locale limit copy (still saying 80 MiB / 10 min or 3 h in several languages) to ~1 GiB / 6 h to match the working hard cap.

## Root cause / analysis
The “stable size” requirement needs a path whose peak memory is roughly **sample index + decode queue + encoder state**, not full PCM and not realtime-play of the whole file. Keeping whole mdat in mp4box for moov-at-end files would reintroduce file-sized RAM. Index-then-slice avoids that while still supporting 1 GiB / 6 h for ISOBMFF. Non-MP4 containers still use the tighter MediaElement fallback (`STREAM_FALLBACK_*`).

## Solution
Rewrote `public/vendor/extract-audio/stable-extract.js`:
- `parseMp4AudioIndex` (discard mdat, seek OK)
- `extractViaMp4WebCodecs` (File.slice packets + WebCodecs + lame, queue backpressure)
- Hard cap remains 1 GiB / 6 h for this path; i18n limit strings aligned across locales for both single and batch tools.

## Notes / boundaries
- Requires browser `AudioDecoder` + AAC (or other declared codec) support; otherwise fallback or fail.
- Non-MP4/WebM/MOV-as-ISOBMFF still capped by `STREAM_FALLBACK_BYTES` / duration.
- Very long files build a JS sample-index array (metadata only); packing into TypedArrays can be a later optimization if index RAM becomes hot.
- Dev worker on `:8787` was returning 404 during this session; regression used a local static harness over `public/vendor`.

[actions]
- Rewrote WebCodecs demux in `public/vendor/extract-audio/stable-extract.js`
- Aligned limit copy in extract + batch i18n locales (de/es/fr/ja/id/pt/ar/ru)
- Playwright verified `mode: mp4-webcodecs` on large MP4 fixtures
