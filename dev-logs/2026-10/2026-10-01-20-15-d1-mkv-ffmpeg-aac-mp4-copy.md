Date: 2026-10-01 20:15
Summary: D1 shipped as copy-only honesty—large MKV/DDP users are guided to desktop ffmpeg AAC MP4, then existing extract pages (no new convert engine).
Visibility: people

[question]
立项和实现D1

## Tool links (English)
- https://onlinefreetools.org/tools/extract-audio-from-an-mkv-file
- https://onlinefreetools.org/tools/batch-extract-audio-from-mkv-files
- https://onlinefreetools.org/tools/extract-audio-from-a-video-file
- https://onlinefreetools.org/tools/batch-extract-audio-from-video-files

Chinese: https://onlinefreetools.org/zh/tools/extract-audio-from-an-mkv-file

[try to solve]
## Context
Capability map item D1: keep the browser extract engine as-is. Multi-gigabyte MKV and E-AC-3 / DDP / Atmos tracks cannot demux or decode in-page. The user-facing fix is honest copy: convert on the computer to AAC stereo MP4 with ffmpeg, then use the existing MP4 extract (or batch) landings.

## Process
- Confirmed EN masters for single MKV, batch MKV, video hub, and hub batch.
- Rewrote ten locales for both MKV slugs (removed Spanish clones on ja/fr/id/pt/ru/ar).
- Inserted hub FAQ q5 (Atmos/DDP) and shifted later FAQ keys; patched hub-batch err_codec / faq_a6.
- Recorded 1b/2b rows in each slug’s `03-locale-briefs.md`.
- Ran `coverage:gate --phase=all` for four slugs, `npm run build:site`, `lint:tool-page --require-html`, `lint:seo`, and `lint:tool-isolation` with `CROSS_TOOL_UPDATE=1` (dirty tree includes the related extract family).

## Root cause / analysis
No Matroska demux and no E-AC-3 decoder exist in the vendor stack. Marketing a 5 GiB MKV path would be false. Pure remux into MP4 without AAC still fails if the track stays E-AC-3. D1 therefore documents a desktop ffmpeg transcode, not a new WASM convert tool (that is D2/D8).

## Solution
FAQ, hints, Rules, and `err_container` / `err_codec` now include an example:

`ffmpeg -i input.mkv -map 0:v:0 -map 0:a:0 -c:v copy -c:a aac -ac 2 -b:a 192k output.mp4`

then Extract audio from an MP4 file (or the MP4 batch page). Caps stay ~500 MiB / 4 h on the MediaElement fallback.

## Notes / boundaries
- No ffmpeg.wasm, no MKV→MP4 engine, no Page.ts behavior change.
- Isolation without `CROSS_TOOL_UPDATE=1` fails because this working tree already contains other extract/SRT edits.
- Next map items remain D8 then D2.

[actions]
- Updated i18n shards for four extract slugs (en + nine locales)
- Appended D1 1b/2b rows in four work-tasks `03-locale-briefs.md`
- `npm run coverage:gate --phase=all` (four slugs) green
- `npm run build:site` green
- `lint:tool-page --require-html` (four slugs) green
- `npm run lint:seo` green
- `CROSS_TOOL_UPDATE=1` isolation green
