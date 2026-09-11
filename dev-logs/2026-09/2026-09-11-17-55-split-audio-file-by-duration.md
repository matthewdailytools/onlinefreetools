Date: 2026-09-11 17:55
Summary: Briefed and shipped split-an-audio-file-by-duration (S3): equal-length ZIP clips with remainder last piece, ten locales, coverage gates green.
Visibility: people

[question]
立项和实现split-an-audio-file-by-duration

## Tool links (English)
- https://onlinefreetools.org/tools/split-an-audio-file-by-duration
Chinese: https://onlinefreetools.org/zh/tools/split-an-audio-file-by-duration

[try to solve]
## Context
Doc 12 row **S3** is the job “split a file into equal-length parts by duration and take a ZIP home.” Neighbors already live: S1 trim, S2 one-file silence removal, A3 silence-midpoint ZIP. The user named the draft slug, so this round both wrote `work-tasks/split-an-audio-file-by-duration/` and implemented the page. Ahrefs was down; coverage used public SERP (ChunkAudio, Piliapp, Tools321, Elysia, MyConvert) plus the 12 search cluster. No Keyword Planner CSV for this slug.

## Process
1. Copied the work-tasks template and filled 00–03 from direction A (browser Web Audio) with an intent boundary against A3/S1/S2/cue/size-split.
2. Wrote the 0b coverage table, full same-intent related-search table, and 0i intent review: one dropzone, visible seconds field + chips, Split by duration / Download ZIP, equal-parts N only in Advanced settings.
3. `coverage:gate --phase=0b` green, then catalog `opts`, icon, Page, English i18n, `lint:tool-page`, `coverage:gate --phase=2`.
4. Rewrote the other nine locales from local briefs (not English locked skeletons). Sample langs en/zh/es/ja re-checked for H1 + desc/FAQ absorb terms.
5. Reverse-linked A3 and S2 `related` (`CROSS_TOOL_UPDATE=1`), README Tools List, and doc 12 progress.
6. `npm run verify:tool -- --slug=split-an-audio-file-by-duration` green (coverage all, full `build:site`, HTML smoke, lint:seo, vendor, isolation).

## Root cause / analysis
SERP mixers put duration, equal parts, silence, manual points, and size on one URL. That is three jobs on this site (S3 / A3 / S1) plus two we refuse (size, cue). H1 stays the task sentence **Split an audio file by duration**, not “Audio Splitter Online.” Equal parts is the same ZIP-of-clock-cuts job, so it is absorbed as optional N, not a second URL. Remainder honesty (last clip shorter, no padded silence) is the IG most equal-parts pages skip in Example numbers.

## Solution
- **Input**: one local audio dropzone (same MIME family as S1/A3).
- **Primary setting**: chunk seconds (default **2** for the 5 s sample); chips 30 s / 60 s / 3 min / 5 min. Not in the button row.
- **Actions**: **Split by duration** → **Download ZIP** (disabled until clips exist) / Load sample / Clear.
- **Advanced**: N equal parts (2–50) sets `D = T / N` for that run; ZIP WAV (default) or MP3 (lamejs on download).
- **Algorithm**: cuts at `k × D`; last clip `[floor(T/D)×D, T]`. Cap 50 clips **refuses** instead of truncating. Desktop ~40 MB / 20 min; narrow ~20 MB / 8 min.
- **Sample**: 5.00 s 440 Hz tone, 2 s chunks → **2.00 / 2.00 / 1.00 s**; `loadSample()` auto-splits on enter. HUD Decode / Split / Pack (JSZip / lamejs lazy).
- English URL has no `/en` prefix. Files stay on the device and are not uploaded.

## Notes / boundaries
- Not silence split (A3), not one-file silence removal (S2), not hand trim (S1), not cue, not split-by-MB, not video mute, not YouTube rip.
- Browser end-to-end click-through was not run here (no live app session); ship gates included prerender HTML smoke (`loadSample` present) and the home card for this slug on `/`.
- Isolation allowed A3/S2 related edits via `CROSS_TOOL_UPDATE=1`.

[actions]
- Added `work-tasks/split-an-audio-file-by-duration/` (00–03, notes)
- Added catalog shard, `splitAnAudioFileByDurationPage.ts`, ten i18n shards, tool icon
- Updated A3 and S2 catalog `related`, README Tools List, `docs/sound-editor/12-slug-hub-and-scene.md`
- Ran `coverage:gate` 0b/2/4/all and `verify:tool -- --slug=split-an-audio-file-by-duration`
