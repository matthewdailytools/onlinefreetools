Date: 2026-10-02 10:48
Summary: Rewrote non-English batch MOV extract copy to MOV-only, and hardened Whisper first-load so SRT tools stop hanging on a stuck model download.
Visibility: people

[question]
优化：非英文 batch-extract-audio-from-mov-files 正文仍有旧「混合视频枢纽」残留，建议单独做一轮完整 i18n 重写。
Whisper 首次加载偶发挂起可单独排。

## Tool links (English)
- https://onlinefreetools.org/tools/batch-extract-audio-from-mov-files
- https://onlinefreetools.org/tools/make-srt-subtitles-from-an-audio-file
- https://onlinefreetools.org/tools/make-srt-subtitles-from-a-video-file

Chinese: https://onlinefreetools.org/zh/tools/batch-extract-audio-from-mov-files

[try to solve]
## Context
After the fourteen AV-tool Chrome QA pass, two follow-ups remained. Non-English pages for `batch-extract-audio-from-mov-files` still read like the older mixed-video batch hub (WebM samples, MP4/WebM/MKV demux caps, “hub” product framing) even though the product is MOV-only. Separately, Whisper tiny’s first load on the SRT tools sometimes froze at “Loading… ~45 MB” with almost no network activity, and Stop did not make a clean retry possible.

## Process
1. Took English/Chinese MOV-only shards as the master and fully rewrote es, de, fr, pt, id, ja, ru, and ar: H1/title, meta description, How/Why/Rules/FAQ/usecases, UI strings, and error codes. Mentions of WebM/MKV/MP4 now only appear as redirect guidance to the mixed batch sibling—not as accepted inputs or sample claims.
2. Updated `work-tasks/batch-extract-audio-from-mov-files/03-locale-briefs.md` with a new `2b` row documenting the rewrite and `en,zh,es,ja` spot-check.
3. Hardened `public/vendor/whisper/whisper-loader.js`: disable IndexedDB browser cache (`useBrowserCache=false`), share one in-flight load with a generation counter, add `cancelWhisperLoad()`, prefetch real assets (JSON + encoder + decoder `.part*` via `.chunks.json`, never a virtual merged `.onnx`), and race loads against AbortSignal plus a default 90s timeout.
4. Wired both SRT pages to pass `{ signal, timeoutMs: 90000 }` into `createTranscriber` and call `cancelWhisperLoad()` from Stop.
5. Bumped catalog `updatedAt` for the MOV batch and both SRT tools, ran `coverage:gate --phase=4|all`, `merge:tools`, `build:site`, and `upload:r2:local`.

## Root cause / analysis
- MOV locale residue came from an earlier aggressive m4v/hub strip that left non-English body copy still describing the mixed-format hub. EN/ZH had already been corrected; other locales needed a full search-localized rewrite, not a search-and-replace.
- Whisper hang: transformers.js could sit on a bad IndexedDB cache with no visible fetches; Stop cleared UI waiters while the pipeline kept running, so retries returned in ~5s without progress. Prefetching real chunk files plus timeouts/cancel generation makes failure visible and retryable.

## Solution
- Non-English MOV batch copy is MOV-only again (serial extract → ZIP; reject non-`.mov`; sibling links for single MOV and mixed batch). Live spot-check on local `:8787` confirmed Spanish/German H1 and meta match the rewrite; WebM/MKV wording only appears in “go to mixed batch” guidance.
- Whisper loader exports `cancelWhisperLoad` / `DEFAULT_LOAD_TIMEOUT_MS`; cold-create after cancel completed in under a second when HTTP cache was warm; UI Make SRT on the sample WAV produced timed cues (`00:00:00,000 --> 00:00:11,000`) in about 3s with a warm model.
- Gates: `coverage:gate` phase=4 and phase=all OK for `batch-extract-audio-from-mov-files`; `lint:tool-page --require-html` OK for MOV batch and audio SRT. `lint:tool-isolation` failed only because the dirty tree still contains related AV-tool edits from the broader session (`CROSS_TOOL_UPDATE` would be needed for a clean single-slug isolation pass).

## Notes / boundaries
- Skills applied: `tool-coverage-pass`, `tool-token-efficiency` (rewrite + ship without skipping phase 4 / build).
- Cache version remained `PAGES_CACHE_VERSION=4.89` after local R2 upload; wrangler on `:8787` served the new HTML without a version bump.
- Whisper timeout surfaces as `err_model`; it does not magically finish a dead IndexedDB session—it fails fast and allows Stop/retry with a new generation.
- No production deploy or git commit in this pass.

[actions]
- Rewrote `src/site/i18n/tools/batch-extract-audio-from-mov-files/{es,de,fr,pt,id,ja,ru,ar}.ts`
- Updated `work-tasks/batch-extract-audio-from-mov-files/03-locale-briefs.md` (2b row)
- Hardened `public/vendor/whisper/whisper-loader.js`; Stop/timeout wiring in both SRT `*Page.ts`
- Bumped `updatedAt` on MOV batch + both SRT catalog shards; merge/build/upload local R2
