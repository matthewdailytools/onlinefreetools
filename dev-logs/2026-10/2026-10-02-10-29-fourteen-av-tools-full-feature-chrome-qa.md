Date: 2026-10-02 10:29
Summary: Full Chrome feature matrix for 14 AV tools found and fixed batch MKV file-picker and batch MOV accept/sample bugs; validated real outputs (MP4/WAV/MP3/ZIP/SRT).
Visibility: people

[question]
需要补齐

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

Chinese spot-check: https://onlinefreetools.org/zh/tools/convert-an-mkv-file-to-an-mp4-file

[try to solve]
## Context
The previous Chrome pass only covered sample happy-paths for the 14 AV tools shipped in commit `1bfef00d`. The user asked to complete full feature verification on local `127.0.0.1:8787`: real inputs, every setting that matters, Stop/Clear/Remove, error paths, and **downloaded output validation** (not just an enabled Download button).

## Process
1. Built a local QA media kit under `.cache/qa-media/` (gitignored): ffmpeg fixtures for MKV/MP4/MOV/WebM with AAC/AC-3/E-AC-3/Opus/FLAC/HEVC/VP8/VP9, speech WAV/MP3 (en/zh), corrupt files, ~147 MiB “big” remux inputs, plus a CORS static server on `:8799` and an in-page harness (`harness.js`) that injects `File`s via `DataTransfer`, intercepts `<a download>` clicks, and probes outputs (WAV headers, MP3 frames, mediabunny container probe + RMS, JSZip entries, SRT timestamps).
2. Exercised each tool in Chrome (CDP `Runtime.evaluate`) against Wrangler local (`PAGES_CACHE_VERSION` advanced to **4.89** during the pass).
3. When defects appeared, fixed source, bumped catalog `updatedAt`, ran `merge:tools` → `build-site --changed-tools` → `upload:r2:local`, restarted local Wrangler, and retested.

## Root cause / analysis
Two **product** bugs blocked real file flows:

1. **Batch MKV→MP4 file picker emptied the queue**  
   `change` did `const files = fileInput.files; fileInput.value = '';` then `addFiles(files)`. In Chromium, `FileList` is live: clearing `value` zeroes the same object, so user/OS picks never entered the queue. Sample worked because it calls `addFiles` with `File[]` directly. Fix: `Array.from(fileInput.files || [])` **before** clearing.

2. **Batch MOV extract rejected every real `.mov`**  
   `isMovContainer` / `movPageRejectReason` were still the MP4 clone (`video/mp4` + `.mp4|.m4v`). Sample renamed MediaRecorder blobs to `.mp4`, so the page only “worked” on fake MP4s mislabeled as MOV. Fix: align checks and sample naming with the single MOV page (`.mov` / `video/quicktime`); correct EN + ZH copy and critical title/`err_format` strings in other locales (non-EN bodies still carry some older mixed-hub wording and should get a full rewrite pass later).

Documented (not bugs): MKV extract MediaElement path cannot decode AC-3/E-AC-3; copy already points users at ffmpeg → AAC MP4 → MP4 extract.

Intermittent: first Whisper load on a fresh SRT page can sit at “Loading… ~45 MB” without fetching model bytes; Stop + retry completed in ~5 s with local `/vendor/whisper/models/`.

## Solution
### Fixes shipped locally
- `src/pages/batchConvertMkvFilesToMp4FilesPage.ts` — FileList copy-before-clear.
- `src/pages/batchExtractAudioFromMovFilesPage.ts` — MOV accept/reject + sample `.mov`/`video/quicktime`.
- i18n: EN + full ZH rewrite for batch MOV; title/choose/`err_format` patches for es/de/fr/pt/id/ja/ru/ar.
- Local cache `4.87`→`4.89`; prerender + R2 upload for changed tools.

### Verification outcomes (local Chrome, outputs probed)
| Tool | Key results |
| --- | --- |
| convert MKV→MP4 | AAC/AC-3/E-AC-3→AAC, Opus, FLAC, HEVC copy, no-audio OK; mono/stereo + quality; Stop on ~147 MiB; Clear; wrong ext; oversize `err_limit`; sample → playable MP4; ZH page OK; big file 147 MiB → MP4 ~147 MiB, audio RMS non-zero |
| batch MKV→MP4 | After fix: 3× real MKVs → ZIP of valid MP4s; partial ZIP keeps successes; Remove works; sample OK |
| extract MP4/WebM/MOV/video | WAV + MP3 (128/320 kbps verified); mono; wrong-format reject; no-audio/corrupt fail; sample WAV playable |
| extract MKV | AAC/Opus/FLAC OK; AC-3/E-AC-3 fail as documented |
| batch extract MP4/WebM/MOV/MKV/video | ZIP entries decoded; mixed hub 4 formats × WAV OK; partial skip-on-fail; MOV batch after fix OK |
| SRT audio | EN speech → valid SRT (`tsOk`, correct words); ZH tiny Whisper approximate; Clear OK |
| SRT video | After Stop+retry: correct EN transcript from H.264+AAC MP4; Stop keeps partial behavior as labeled |

Mic dictate was not exercised (needs real mic permission). Multi-GiB Witcher episode was not re-run end-to-end in this pass (prior dedicated log exists); OPFS path exercised via 147 MiB MKV→MP4.

## Notes / boundaries
- QA fixtures and harness live only under `.cache/qa-media/` (not committed).
- Do not restart Wrangler while `build-site` is vendor-copying `jsquash` — watcher hit `ENOENT` on `decode.d.ts` and killed the local server mid-test.
- Remaining follow-ups: full people-first rewrite of non-EN **body** copy for `batch-extract-audio-from-mov-files` (titles/`err_format` already fixed); optional first-load Whisper hang investigation; optional future Matroska demux for AC-3/E-AC-3 on MKV extract pages.

[actions]
- Fixed `batchConvertMkvFilesToMp4FilesPage.ts` FileList handling
- Fixed `batchExtractAudioFromMovFilesPage.ts` accept/sample + i18n (EN/ZH + critical strings)
- Local rebuild/upload; `PAGES_CACHE_VERSION` 4.89
- Full Chrome matrix with output probing for 14 tools
