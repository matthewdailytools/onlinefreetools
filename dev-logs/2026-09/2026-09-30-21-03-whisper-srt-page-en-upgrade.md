Date: 2026-09-30 21:03
Summary: Upgraded make-srt-subtitles-from-an-audio-file to same-origin Whisper tiny with gold HUD; en master rewritten; phase=2 and lint:tool-page green.
Visibility: people

[question]
Rewrite makeSrtSubtitlesFromAnAudioFilePage.ts and en.ts so the tool uses the vendored browser Whisper stack (POC-proven). Keep opts export, gold HUD, no auto loadSample, mic as optional Web Speech. Run coverage:gate phase=2 and lint:tool-page. Update 03 1b. Do not edit other locales or run build:site.

## Tool links (English)
- https://onlinefreetools.org/tools/make-srt-subtitles-from-an-audio-file

[try to solve]
## Context
The existing page used SpeechRecognition with speaker/mic loopback—honest but did not satisfy “audio file → timed SRT”. Vendor Whisper tiny (q8) under `/vendor/whisper` was already POC-proven via `whisper-loader.js` (`createTranscriber`, `transcribeAudioBuffer`, `chunksToSrt`).

## Process
1. Read `02-tool-info.md`, `whisper-loader.js`, OCR gold HUD pattern (`convertAJpgToTextWithOcrPage.ts`), and the existing page shell.
2. Rewrote the page client: dynamic `import('/vendor/whisper/whisper-loader.js')`, language chip `auto` + ten locales mapped to Whisper names, HUD steps Model/Decode/Transcribe/Write SRT with model download progress, decode via `AudioContext.decodeAudioData` (video candidates allowed; clear `err_decode` on failure), ~40 MiB / ~30 min caps, `loadSample` fetches `/samples/make-srt-subtitles-from-an-audio-file.wav` without auto-run on init.
3. Kept Dictate with mic on Web Speech when present; hide/disable when missing so Whisper is never blocked.
4. Rewrote en master for on-device Whisper (Steps + Example, privacy, FAQ vs transcribe / burn-in). Updated `03-locale-briefs.md` row `1b`.
5. Ran `merge:tools`, then `coverage:gate --phase=2` and `lint:tool-page`—both OK.

## Root cause / analysis
File→SRT needs real offline ASR in the tab. Web Speech cannot reliably subtitle uploaded files. Same-origin Whisper fixes the user task while preserving privacy copy and CWV (no auto sample that pulls ~45 MB on every landing).

## Solution
Primary button Make SRT drives Whisper; gold HUD mirrors OCR; references point to transformers.js, OpenAI Whisper, and SRT format docs. Other locales intentionally untouched pending phase=4.

## Notes / boundaries
- Do not run `build:site` in this pass (per request).
- Other locale shards still describe SpeechRecognition until rewritten.
- `usecaseCount: 3`; template regex uses `\\w` / `\\d`.

[actions]
- Rewrote `src/pages/makeSrtSubtitlesFromAnAudioFilePage.ts`
- Rewrote `src/site/i18n/tools/make-srt-subtitles-from-an-audio-file/en.ts`
- Updated `work-tasks/make-srt-subtitles-from-an-audio-file/03-locale-briefs.md` (1b)
- Ran `npm run merge:tools`, `coverage:gate --phase=2`, `lint:tool-page`
