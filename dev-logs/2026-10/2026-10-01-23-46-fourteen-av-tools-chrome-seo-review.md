Date: 2026-10-01 23:46
Summary: Chrome-tested all 14 AV tools locally; fixed batch MKV→MP4 empty-output on OPFS by preferring BufferTarget for small files; tightened convert SERP meta and EN MKV grammar; refreshed pages cache to 4.86.
Visibility: people

[question]
对14个工具启动本地服务进行chrome浏览器完整测试，review seo和info gain ， 根据结果进行优化

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
After shipping the extract-audio suite, MKV→MP4 convert/batch, and Whisper SRT pages, we needed a full local Chrome pass: Load sample → primary action → Download ready, plus SEO/IG review (title/H1/meta snippet window, How/Why/Rules, honest limits).

## Process
1. Confirmed `coverage:gate --phase=all` and `lint:seo` green for all 14 slugs; local wrangler on `:8787`.
2. Chrome automation (CDP) smoked each EN tool: Load sample → Convert/Extract/Make SRT → Download enabled.
3. Batch convert initially failed in ~0.3s with `err_encoder` while direct `convertMkvToMp4` succeeded. Served inline HTML still did `result.buffer` only; OPFS path returned `blob` without `buffer`.
4. Engine fix: use OPFS StreamTarget only when `size > SMALL_BUFFER_MAX_BYTES` (~80 MiB); samples/small files use `BufferTarget` so both old `buffer`-only pages and new `blob` pages work. Re-vendored loader; rebuilt/uploaded local R2; bumped `PAGES_CACHE_VERSION` to **4.86**.
5. SEO/IG edits: tightened EN convert/batch meta for SERP first ~160 chars; soft-updated remaining batch-convert locales still saying 500 MiB; fixed EN “Extract audio from **a** MKV” → **an** MKV.

## Root cause / analysis
The batch failure was a **version skew**: page HTML in local R2 lagged the Page.ts/`blob` fix, while the loader already streamed to OPFS for every file including tiny samples. Preferring memory targets under 80 MiB restores `result.buffer` for samples and keeps multi-GiB OPFS streaming for real large MKVs.

Meta lengths for extract hubs are long but `lint:seo` accepts them; converter SERP skill still wants the **front** of meta to carry verb + format + one differentiator—convert/batch EN copy was shortened accordingly. IG Rules/Why sections were present on convert and extract pages (Rules H2 sometimes titled as honesty/limits rather than “Rules”).

## Solution
- Loader: `useOpfs = caps.opfs && size > SMALL_BUFFER_MAX_BYTES`.
- Cache **4.86** + local R2 refresh.
- Copy: convert/batch EN meta polish; batch-convert ar/de/es/fr/id/ja/pt limit strings; MKV extract EN article/title grammar.
- Smoke result: **14/14** Load sample → download-ready on EN pages.

## Notes / boundaries
- Skills applied: `tool-coverage-pass`, `converter-serp-landing-seo`, `converter-input-ui`.
- Gates: coverage phase=all OK; lint:seo OK; browser smoke is architectural proof for samples, not a multi-GiB endurance encode.
- Production deploy still separate; local verify at `http://127.0.0.1:8787/tools/...`.

[actions]
- `scripts/vendor-mediabunny.mjs` / `public/vendor/mediabunny/mkv-to-mp4-loader.js` — small-file BufferTarget
- i18n convert/batch/mkv-extract EN (+ batch locales limit soft-fix)
- `wrangler.jsonc` PAGES_CACHE_VERSION 4.86; local `upload:r2:local`
