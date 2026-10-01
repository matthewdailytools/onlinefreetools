Date: 2026-09-30 22:20
Summary: Fixed Chinese-locale Load sample hallucinating repeated Chinese text by defaulting language to auto, forcing English for the English sample clip, and rejecting no-chunk fallback cues; local Cache API also needed a PAGES_CACHE_VERSION bump.
Visibility: people

[question]
http://127.0.0.1:8787/zh/tools/make-srt-subtitles-from-an-audio-file 加载样例，出来结果是重复的「我會做什麼…」和假的 00:00:00→00:00:02

## Tool links (English)
- https://onlinefreetools.org/tools/make-srt-subtitles-from-an-audio-file

Chinese: https://onlinefreetools.org/zh/tools/make-srt-subtitles-from-an-audio-file

[try to solve]
## Context
The sample WAV is English public speech (~11 s, JFK). On the Chinese UI, Load sample produced Traditional Chinese gibberish that repeated “我會做什麼” inside a fake cue from 0:00 to 0:02.

## Process
1. Confirmed the page preselected Whisper language from the UI locale (`zh` → Chinese).
2. Confirmed a fallback path stuffed plain `result.text` into a hard-coded `00:00:00,000 --> 00:00:02,000` cue when segment chunks were empty—matching the user’s output exactly.
3. Patched the page: default language = `auto`; Load sample forces `en`; remove the fake 2 s fallback; pass `condition_on_previous_text: false`.
4. Rebuilt and seeded local R2. Served HTML stayed old until we found Worker Cache API blobs still holding the previous script under `PAGES_CACHE_VERSION=4.79`. Bumped to `4.80` and restarted.
5. Playwright on the Chinese URL: default `auto` → after sample `en`; SRT is the English JFK line spanning 0–11 s.

## Root cause / analysis
Whisper tiny, forced to Chinese on English audio, hallucinates and often returns text without usable timestamp chunks. The UI then made it worse by inventing a 2-second cue for that text. Separately, local wrangler Cache API can keep serving stale tool HTML after R2 is updated if the cache version string does not change.

## Solution
- Default language chip: auto-detect.
- Load sample: set language to English before transcription.
- No SRT chunks → error, do not invent a 0–2 s cue.
- Local verify: bump `PAGES_CACHE_VERSION` when HTML updates must invalidate Cache API.

## Notes / boundaries
- Users with a hard-forced wrong language on their own files can still get weak output; auto or the spoken language is required.
- Production needs a normal deploy (build + upload R2 + Assets with the new cache version) before the live site picks this up.

[actions]
- Updated `src/pages/makeSrtSubtitlesFromAnAudioFilePage.ts`, `public/vendor/whisper/whisper-loader.js`, `scripts/vendor-whisper.mjs`
- Bumped `wrangler.jsonc` `PAGES_CACHE_VERSION` 4.79 → 4.80
- Local rebuild / R2 seed / Playwright acceptance on zh Load sample
