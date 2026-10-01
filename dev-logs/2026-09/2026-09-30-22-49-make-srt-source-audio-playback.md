Date: 2026-09-30 22:49
Summary: Added an on-page player for the original audio (or video) so users can listen while checking SRT cues on make-srt-subtitles-from-an-audio-file.
Visibility: people

[question]
增加播放原音频的能力

## Tool links (English)
- https://onlinefreetools.org/tools/make-srt-subtitles-from-an-audio-file
- Chinese: https://onlinefreetools.org/zh/tools/make-srt-subtitles-from-an-audio-file

[try to solve]
## Context
After the Whisper SRT pilot shipped, the page could show a timed `.srt` preview but had no way to hear the same local file while checking cues. Users (and local QA) need to play the original speech without leaving the tab or downloading the file again.

## Process
1. Inspected the existing tool UI (`makeSrtSubtitlesFromAnAudioFilePage.ts`) and nearby audio tools that use native `<audio controls>` for result preview.
2. Added a hidden **Play original audio** panel under the dropzone with:
   - `<audio id="srtSourceAudio">` for audio files
   - `<video id="srtSourceVideo">` for video-with-audio (so the soundtrack is still playable)
3. Wired object-URL lifecycle into `chooseAudio` / Clear / `pagehide`: create blob URL on select, revoke on replace or clear, never autoplay.
4. Pause the source player when starting mic dictation to avoid feedback into Web Speech.
5. Added `source_play` UI strings in all ten locales (en/zh/es/ja/de/fr/pt/id/ar/ru).
6. Ran `merge:tools` + `build:site`, `lint:tool-page --require-html`, local R2 seed, bumped `PAGES_CACHE_VERSION` to **4.81** so Worker Cache API did not keep serving the previous HTML without the player.
7. Playwright smoke on the zh URL: before pick → panel hidden; after file change → panel visible, blob `audio.src`, label「播放原音频」.

## Root cause / analysis
This was a missing UX surface, not a Whisper bug. SRT QA needs the source media in-page; relying only on the OS file player breaks the compare-cues loop. Video inputs need a video element because `<audio>` often cannot play container formats.

## Solution
- UI: `srtSourcePlay` panel with native controls; audio vs video chosen by MIME/extension.
- Lifecycle: `setSourcePreview` / `clearSourcePreview` / `pauseSourcePreview`.
- i18n: `tool_make_srt_subtitles_from_an_audio_file_source_play` in ten locales.
- Local serve: full `--local` R2 upload + cache version **4.81**; live HTML now contains `srtSourceAudio` and「播放原音频」.

## Notes / boundaries
- Playback is **opt-in** (user presses play); Load sample / Make SRT do not autoplay.
- Mic path pauses the player; Whisper file transcription does not force-pause (listening while waiting is useful).
- Production deploy was **not** requested; live site still needs a full deploy with the new page + cache version when ready.
- Skills applied: `tool-coverage-pass` + `tool-token-efficiency` (UI chrome key only; no title/H1/SEO rewrite this round). Gates: `lint:tool-page --require-html` OK; Playwright source-player smoke OK.

[actions]
- Updated `src/pages/makeSrtSubtitlesFromAnAudioFilePage.ts` (source player + URL lifecycle)
- Added `source_play` to ten locale shards under `src/site/i18n/tools/make-srt-subtitles-from-an-audio-file/`
- `npm run build:site`, `npm run lint:tool-page -- --slug=make-srt-subtitles-from-an-audio-file --require-html`
- Local R2 full upload; `PAGES_CACHE_VERSION` → 4.81; `npm run restart:dev`
