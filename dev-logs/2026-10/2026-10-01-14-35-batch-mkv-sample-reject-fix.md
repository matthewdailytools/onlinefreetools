Date: 2026-10-01 14:35
Summary: Fixed batch MKV Load sample by correcting a copy-paste ReferenceError and refreshing local HTML Cache via PAGES_CACHE_VERSION 4.84.
Visibility: people

[question]
需要（修批量 MKV Load sample）

## Tool links (English)
- https://onlinefreetools.org/tools/batch-extract-audio-from-mkv-files
- https://onlinefreetools.org/tools/extract-audio-from-an-mkv-file

[try to solve]
## Context
Local-online E2E showed **Batch extract audio from MKV files → Load sample** failing both rows, while the single-file MKV sample worked.

## Process
1. Compared batch vs single MKV pages and the convert loop.
2. Found `mp4PageRejectReason(...)` called in the batch MKV page while only `mkvPageRejectReason` is defined → `ReferenceError` caught as generic `failed`.
3. Fixed call sites, sample filenames (`.mkv`), and MediaRecorder MIME preference (WebM first, then MP4 bytes labeled `.mkv` for accept/classify).
4. Aligned single MKV sample MIME candidates the same way.
5. `npm run build:site`, full local R2 seed, then discovered Wrangler still served old HTML via Cache API (`PAGES_CACHE_VERSION` still `4.83`).
6. Bumped `PAGES_CACHE_VERSION` to `4.84`, refreshed local meta, restarted wrangler, retested.

## Root cause / analysis
Primary: copy-paste leftover from the MP4 batch page (`mp4PageRejectReason` undefined on MKV batch). Secondary for local QA: HTML Cache API keyed by `PAGES_CACHE_VERSION` kept the pre-fix composed page even after R2 already held the new `.html.gz`.

## Solution
- `batchExtractAudioFromMkvFilesPage.ts`: use `mkvPageRejectReason`; sample names `*-1.mkv` / `*-2.mkv`; WebM-first recorder.
- `extractAudioFromAnMkvFilePage.ts`: same WebM-first sample MIME list.
- `wrangler.jsonc`: `PAGES_CACHE_VERSION` `4.83` → `4.84`.
- Local retest: both queue rows **Done**, ZIP ~393 KiB, HUD done. `lint:tool-page --require-html` OK for both MKV slugs.

## Notes / boundaries
- Production still needs remote `upload:r2` + Worker deploy with `4.84` before live pages pick this up.
- Browser cannot emit true Matroska; demos use WebM/MP4 bytes under `.mkv` / `video/x-matroska` so the page accept path and fallback/decode path are exercised.

[actions]
- Patched batch/single MKV sample + reject helper calls
- `npm run build:site`; local R2 seed; `PAGES_CACHE_VERSION=4.84`
- Playwright Load sample on batch MKV: 2/2 Done
