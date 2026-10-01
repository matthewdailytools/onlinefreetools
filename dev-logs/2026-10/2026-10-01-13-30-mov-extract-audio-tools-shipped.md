Date: 2026-10-01 13:30
Summary: Shipped QuickTime MOV-only extract-audio pair with full gates and hub/MP4 related mesh updates.

[question]
Implement COMPLETE tools extract-audio-from-a-mov-file and batch-extract-audio-from-mov-files (clone MP4 pair; MOV-only accept; verify:tool both).

## Tool links (English)
- https://onlinefreetools.org/tools/extract-audio-from-a-mov-file
- https://onlinefreetools.org/tools/batch-extract-audio-from-mov-files

[try to solve]
## Context
Users searching mov to mp3 / QuickTime audio extract need a dedicated landing—not an MP4 doorway—while reusing the same ISOBMFF demux engine (`OftExtractAudio`).

## Process
Cloned MP4 work-tasks, `*Page.ts`, catalog shards, ten-locale i18n, and icons; tightened accept to `.mov` + `video/quicktime` with explicit MP4/WebM/MKV rejection (`err_format`). Updated hub and MP4 catalog `related` arrays with MOV slugs (`CROSS_TOOL_UPDATE=1`).

## Root cause / analysis
Format-specific slugs share demux code but must diverge on accept rules and copy (QuickTime/iPhone/Final Cut IG) to avoid mixed-container doorway pages.

## Solution
- Single: `src/pages/extractAudioFromAMovFilePage.ts` — HUD, sample saved as `.mov`, `isMovContainer` / `movPageRejectReason`.
- Batch: `src/pages/batchExtractAudioFromMovFilesPage.ts` — serial queue + ZIP, MOV-only precheck.
- Gates: `coverage:gate` 0b/2/4/all green both slugs; `CROSS_TOOL_UPDATE=1 npm run verify:tool` OK both (evidence under `.cache/verify-tool/`).

## Notes / boundaries
No WebM/MKV work in this delivery. Browser sample still depends on MediaRecorder ISOBMFF blob labeled QuickTime.

[actions]
- Added MOV catalog shards, pages, i18n, icons, work-tasks briefs; updated hub/MP4 related; README entries; `npm run build:site`.
