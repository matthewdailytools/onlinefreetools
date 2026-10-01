Date: 2026-10-01 10:30
Summary: Shipped end-to-end brief, catalog, Page, and ten-locale i18n for sequential batch extract-audio → ZIP.
Visibility: people

[question]
Create NEW tool slug `batch-extract-audio-from-video-files` end-to-end (brief + catalog + Page + icon already at public/icons/tools/batch-extract-audio-from-video-files.svg + 10 locale shards). Skills: tool-coverage-pass + tool-token-efficiency + converter-input-ui. Update extract-audio related. Run merge:tools and coverage:gate 0b/2. Do not deploy.

## Tool links (English)
- https://onlinefreetools.org/tools/batch-extract-audio-from-video-files
- https://onlinefreetools.org/tools/extract-audio-from-a-video-file

[try to solve]
## Context
Need a batch companion to the single-file extract-audio page: many local videos → sequential `OftExtractAudio.extractFile` → ZIP of WAV/MP3, with memory-safe one-at-a-time processing, per-row skip, anti-YouTube FAQ, and a pointer to the single-file tool.

## Process
1. Wrote `work-tasks/batch-extract-audio-from-video-files/{00–03}` with 清单前检索覆盖, 同意图相关搜索词, 用户意图审查, Ads N/A, and multipass rows `0b`/`1b`/`2b` dated 2026-10-01; statuses `ready` / `i18n-done`.
2. Added catalog shard (`primaryTopic: sound-editor`, related extract + trim, `page.style: opts`, module `batchExtractAudioFromVideoFilesPage`). Confirmed single extract related already lists batch first with bumped `updatedAt`.
3. Implemented `batchExtractAudioFromVideoFilesPage.ts` mirroring batch-trim queue UI (Convert / Stop / Download ZIP / Sample / Clear, format chips, bitrate) and extract pipeline (lamejs → stable-extract → JSZip; serial `extractFile`; release refs; BATCH_MAX_FILES 30; two synthetic WebM samples).
4. Wrote ten locale shards under `src/site/i18n/tools/batch-extract-audio-from-video-files/` with prefix `tool_batch_extract_audio_from_video_files_`.
5. Ran `npm run merge:tools` and `coverage:gate` phases `0b`, `2`, and `4` — all green. No deploy.

## Root cause / analysis
Batch extract is a same-intent multi-file job that must stay separate from the single-file page (different primary control: queue + ZIP) while sharing the stable-extract library. Sequential processing prevents holding every AudioBuffer; FAQ must refuse YouTube/URL and route one-file users to the neighbor tool.

## Solution
Local-only batch tool with gold HUD, per-row status, Stop/Abort, ZIP download after successes, and ten-locale search-intent copy. Coverage gates 0b/2/4 pass after merge.

## Notes / boundaries
- Icon was pre-supplied at `public/icons/tools/batch-extract-audio-from-video-files.svg`.
- Full `build:site` / `verify:tool` / deploy not requested in this turn.
- Skills applied: tool-coverage-pass, tool-token-efficiency, converter-input-ui.

[actions]
- Added work-tasks/batch-extract-audio-from-video-files/*
- Added src/site/tool-catalog.d/batch-extract-audio-from-video-files.json
- Added src/pages/batchExtractAudioFromVideoFilesPage.ts
- Added src/site/i18n/tools/batch-extract-audio-from-video-files/{en,zh,es,ja,ar,pt,de,fr,id,ru}.ts
- Confirmed extract-audio-from-a-video-file related includes batch first
- Ran merge:tools; coverage:gate phase=0b|2|4 OK
