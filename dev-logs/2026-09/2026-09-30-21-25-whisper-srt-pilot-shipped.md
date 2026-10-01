Date: 2026-09-30 21:25
Summary: Shipped an on-device Whisper tiny stack under `/vendor/whisper` and upgraded Make SRT subtitles from an audio file so local speech files become editable timed `.srt` without a microphone loopback.
Visibility: people

[question]
立项和实现一个，先进行测试，没有问题后再覆盖其他whisper工具

## Tool links (English)
- https://onlinefreetools.org/tools/make-srt-subtitles-from-an-audio-file

Chinese: https://onlinefreetools.org/zh/tools/make-srt-subtitles-from-an-audio-file

[try to solve]
## Context
The subtitle and Whisper coverage maps showed that the existing SRT page relied on browser SpeechRecognition (microphone path) while competitors already run Whisper in the browser. The user asked to create and implement one pilot tool, test it, and only then expand to other Whisper tools. Hosting decision: chunk model files under 25 MiB into `public/vendor/whisper/` (git-tracked). Pilot slug: keep `make-srt-subtitles-from-an-audio-file`.

## Process
1. Pinned `@huggingface/transformers@4.3.0` and wrote `scripts/vendor-whisper.mjs` to:
   - esbuild-bundle a browser entry;
   - vendor onnxruntime-web WASM (13.6 MB, under the asset cap);
   - download whisper-tiny q8 at revision `ff4177…`;
   - split the 29.3 MB decoder into two 16 MiB chunks with `.chunks.json`;
   - emit `whisper-loader.js` (custom fetch joins chunks; remote HF disabled).
2. Standalone POC against JFK speech: model load ~0.9 s from disk, ASR ~1.9 s, correct transcript and SRT.
3. Brief refresh (`02` / `03`): 0b + 0i, then `coverage:gate --phase=0b`.
4. Rewrote the page to dynamic-import the Whisper loader, gold HUD (Model / Decode / Transcribe / Write SRT), language auto + chips, optional Web Speech mic as secondary path, no auto `loadSample` (OCR precedent for large first download).
5. Rewrote ten locales; `coverage:gate --phase=2|4|all` green.
6. Extended vendor lint + isolation allowlists for whisper scripts and `.wav` samples.
7. `npm run build:site` and `npm run verify:tool -- --slug=make-srt-subtitles-from-an-audio-file` green.
8. Browser acceptance on prerendered HTML: Load sample → SRT with JFK text → Download enabled; initial auto-run absent.

## Root cause / analysis
SpeechRecognition cannot honestly subtitle an uploaded file in most browsers. Whisper in-tab can, but Assets reject files over 25 MiB and this repo forbids CDN model fetches. Chunking the decoder and serving everything from `/vendor/whisper` clears both constraints. First-run cost (~45 MB) must stay behind a click, not an auto sample.

## Solution
- Shared stack: `public/vendor/whisper/` + `npm run vendor:whisper`.
- Pilot tool: Make SRT now reads local audio (and video when the browser can decode it), runs Whisper tiny q8, edits cues, downloads `.srt`.
- Gates: coverage all, lint:tool-page (with HTML), lint:vendor, lint:tool-isolation, verify:tool, browser sample path.
- Other Whisper tools (transcribe, filler remover, transcript editor, LRC auto-align, burn-in captions) stay deferred until this pilot is stable in production.

## Notes / boundaries
- Device is WASM-only for this ship (WebGPU jsep.wasm is >25 MiB; can be chunked later).
- Cue times are Whisper segments, not frame-level forced alignment.
- Optional mic dictation may still use a browser vendor speech service; the file path does not upload audio.
- Model hosting stays git-chunked; switching to R2 would be a separate ops change.
- Do not expand to other Whisper slugs until live-site soak of this page looks healthy.

[actions]
- Added `scripts/vendor-whisper.mjs`, `scripts/whisper-browser-entry.mjs`, `public/vendor/whisper/**`, sample WAV
- Upgraded `src/pages/makeSrtSubtitlesFromAnAudioFilePage.ts` and ten-locale i18n
- Updated vendor lint, isolation allowlist, work-tasks briefs, package.json dependency
- Ran coverage gates, build:site, verify:tool, Playwright sample acceptance
