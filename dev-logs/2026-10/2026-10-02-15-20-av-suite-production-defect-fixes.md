Date: 2026-10-02 15:20
Summary: Fixed five production defects from the AV suite QA: OPFS MP3 blobs stay readable, WebM/MKV fallback records unmuted audio at 1x, yields no longer stall on hidden tabs, Whisper uses an inactivity timeout with byte progress, and WebM fr/pt/id/ja/ru/ar plus MP4/MOV gate copy were rewritten.
Visibility: people

[question]
按顺序逐一修复（引擎缺陷 1–3 优先；大文件回退用原速采集；随后 Whisper、文案与 WebM 六语）

## Tool links (English)
- https://onlinefreetools.org/tools/batch-convert-mkv-files-to-mp4-files
- https://onlinefreetools.org/tools/batch-extract-audio-from-mkv-files
- https://onlinefreetools.org/tools/batch-extract-audio-from-mov-files
- https://onlinefreetools.org/tools/batch-extract-audio-from-mp4-files
- https://onlinefreetools.org/tools/batch-extract-audio-from-video-files
- https://onlinefreetools.org/tools/batch-extract-audio-from-webm-files
- https://onlinefreetools.org/tools/convert-an-mkv-file-to-an-mp4-file
- https://onlinefreetools.org/tools/extract-audio-from-a-mov-file
- https://onlinefreetools.org/tools/extract-audio-from-a-video-file
- https://onlinefreetools.org/tools/extract-audio-from-a-webm-file
- https://onlinefreetools.org/tools/extract-audio-from-an-mkv-file
- https://onlinefreetools.org/tools/extract-audio-from-an-mp4-file
- https://onlinefreetools.org/tools/make-srt-subtitles-from-a-video-file
- https://onlinefreetools.org/tools/make-srt-subtitles-from-an-audio-file

[try to solve]
## Context

Live QA of the 14 audio/video tools found five defects. This pass fixed them in order and verified on the local wrangler + R2 stack. Production deploy is still pending approval.

## Process

1. **OPFS sink (`stable-extract.js`)** — `finalize()` used to `removeEntry()` immediately after `file.slice()`. The Blob kept a size but later reads threw `NotFoundError`. Fix: keep the OPFS entry for the page session; sweep files older than 6 hours on first sink create; delete session files on `pagehide` (non-bfcache).
2. **MediaElement fallback** — probe `<video>` was `muted=true`, so ScriptProcessor captured silence; `playbackRate=2` halved duration. Fix: unmute (speakers still silent via gain=0); force `STREAM_PLAYBACK_RATE = 1`.
3. **`yieldUi`** — rAF-only yields froze in hidden tabs. Fix in the library and 14 page scripts: when `document.hidden`, resolve via `MessageChannel`; when visible, race rAF with a 50 ms (SRT: 90 ms) timeout.
4. **Whisper loader** — hard 90 s total timeout aborted slow first downloads; superseded progress still wrote into the error HUD. Fix: inactivity timeout that resets on byte progress; streaming prefetch with `ReadableStream`; generation-gated progress; page `onModelProgress` ignores callbacks after fail/stop.
5. **Copy / i18n** — MP4/MOV `err_format` rewritten per locale for single-format gates; English residue keys translated. WebM single + batch `fr/pt/id/ja/ru/ar` fully rewritten from EN masters (Spanish leakage removed). Coverage phase=4 green for those four slugs.

## Root cause / analysis

- OPFS `File` Blobs are live views of the private file; deleting the entry invalidates later ZIP/download reads.
- Chrome feeds silence from muted media elements into `MediaElementAudioSourceNode`.
- Background tabs pause rAF; long jobs must not depend on it alone.
- Total timeouts punish slow networks; stall detection with real progress is the right model.
- Earlier WebM locale generation copied Spanish into six languages; mechanical key presence gates did not catch it.

## Solution

- Engine and Whisper vendor scripts updated under `public/vendor/`.
- Page `yieldUi` helpers updated in all 14 AV tool pages.
- MP4/MOV and WebM locale shards updated; brief `2b` rows recorded for WebM tools.
- Local verification:
  - 147 MiB MOV batch → readable MP3 in ZIP (RMS ≈ 0.06).
  - Large WebM stream path → ~15.2 s duration, RMS ≈ 0.06 (was silent ~7.7 s).
  - Simulated hidden tab (`document.hidden` + dead rAF) still finishes extract in ~1 s.
  - Whisper hung-fetch inactivity timeout fails in ~5 s with `err_model`.
  - Local ja WebM page H1 correct; zero Spanish body hits.
  - `CROSS_TOOL_UPDATE=1 npm run verify:tool` OK for WebM single and SRT audio (suite-wide catalog `updatedAt` bumps).

## Notes / boundaries

- Large WebM/MKV extract now takes wall-clock ≈ media duration (1× capture). That is the chosen correctness trade-off.
- Production is unchanged until `npm run deploy` + `git:deploy`. Cache version remains 4.89 until the next R2 upload bumps it if configured.
- Leftover `scripts/tmp/*webm*` generators that caused Spanish spread stay uncommitted and should not ship.
- Minor residual: hub `extract-audio-from-a-video-file` ja still has a few English-templated keys; out of this fix scope.

[actions]
- `public/vendor/extract-audio/stable-extract.js` — OPFS lifetime, unmuted 1× fallback, resilient `yieldUi`
- `public/vendor/whisper/whisper-loader.js` — inactivity timeout, byte prefetch, gated progress
- 14 `src/pages/*Page.ts` AV pages — `yieldUi` fallback; SRT progress ignore-after-fail
- MP4/MOV/WebM i18n shards + WebM `03-locale-briefs.md` 2b rows
- `npm run build:site`, `upload:r2:local`, local Chrome/Playwright checks, `verify:tool` (cross-tool)
