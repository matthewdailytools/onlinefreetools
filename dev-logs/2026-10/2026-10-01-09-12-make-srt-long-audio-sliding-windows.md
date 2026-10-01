Date: 2026-10-01 09:12
Summary: Long audio on Make SRT now uses opt-in sliding-window Whisper (about 120 MiB / 2 hours, Stop keeps partial SRT) without changing the shared loader default used by the POC or future tools.
Visibility: people

[question]
根据建议进行优化（稳定支持更长语音）；继续时注意不要影响其他工具，注意公共调用的文件。

## Tool links (English)
- https://onlinefreetools.org/tools/make-srt-subtitles-from-an-audio-file
- Chinese: https://onlinefreetools.org/zh/tools/make-srt-subtitles-from-an-audio-file

[try to solve]
## Context
The pilot page capped files at about 40 MiB / 30 minutes because it decoded and held a full 16 kHz PCM before ASR. The recommended path was sliding windows + cancel + raised limits. `/vendor/whisper/whisper-loader.js` is shared (POC + future Whisper tools), so behavior changes there must stay backward-compatible.

## Process
1. Confirmed only `make-srt-subtitles-from-an-audio-file` (and local `poc.html`) import the loader today—no other product tools yet.
2. Extended `whisper-loader.js` with region downsample and window merge, but gated behind **`sliding_windows: true`**. Default path remains: full `downsampleToMono16k` + one ASR call (internal 30s chunks)—same as before for POC/future callers.
3. SRT page alone passes `sliding_windows: true`, AbortSignal, and `onWindowProgress` (HUD “window n of N”). Stop works on the file path and keeps partial SRT when cues exist.
4. Raised page limits to about **120 MiB / 2 hours**; updated ten-locale limit/progress copy.
5. Changed `scripts/vendor-whisper.mjs` `writeLoader()` so re-vendor **preserves** the hand-maintained loader (only syncs `MODEL_ID`) instead of overwriting with the old stub.
6. Incremental prerender/gzip for this slug only; local R2 upload; `PAGES_CACHE_VERSION` 4.82; Playwright Load sample still returns JFK English SRT.

## Root cause / analysis
Whole-file 16 kHz PCM plus one giant ASR job blows memory on long clips. Outer ~2-minute windows keep peak closer to one window after decode. Auto-enabling that in the shared loader would surprise other callers; opt-in keeps isolation.

## Solution
- Shared: additive API (`sliding_windows`, `signal`, `onWindowProgress`, `downsampleRegionToMono16k`); default unchanged.
- Page-only: limits, Stop, window HUD, i18n.
- Vendor script: no clobber of hand-maintained loader.

## Notes / boundaries
- Decode still loads the whole file once via Web Audio—streaming demux/WebCodecs not in this pass; low-memory phones may still fail near the new ceiling.
- WebGPU/jsep still deferred.
- Production deploy not requested.
- Skills: `tool-coverage-pass` + `tool-token-efficiency` (limit/UI copy update; no H1 rewrite). Smoke: zh Load sample OK with `sliding_windows: true` in HTML.

[actions]
- Updated `public/vendor/whisper/whisper-loader.js` (opt-in sliding windows)
- Updated `src/pages/makeSrtSubtitlesFromAnAudioFilePage.ts` (limits, Stop, sliding_windows: true)
- Updated ten locale shards + `scripts/vendor-whisper.mjs` preserve-loader
- Prerender/gzip this slug; local R2; cache 4.82
