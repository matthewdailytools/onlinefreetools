Date: 2026-10-01 13:15
Summary: Shipped MP4-only single and batch extract-audio tools on OftExtractAudio with verify gates green.

[question]
Complete IMPLEMENTATION for extract-audio-from-an-mp4-file and batch-extract-audio-from-mp4-files (0b briefs ready).

## Tool links (English)
- https://onlinefreetools.org/tools/extract-audio-from-an-mp4-file
- https://onlinefreetools.org/tools/batch-extract-audio-from-mp4-files

[try to solve]
## Context
Two format-specific landing pages were briefed to complement the mixed-container hub and batch siblings, reusing `public/vendor/extract-audio/stable-extract.js` without rewriting demux.

## Process
Cloned `extractAudioFromAVideoFilePage.ts` / `batchExtractAudioFromVideoFilesPage.ts`, tightened accept to `.mp4,.m4v,video/mp4`, added `isMp4Container` + post-`loadStable` `isIsoBmff`/extension checks (`err_format` before engine would accept MOV), switched samples to H.264+AAC MP4 MediaRecorder when supported, added catalog shards, ten-locale i18n, hub related updates, README entries, `03` rows `1b`/`2b`, `i18n-done`.

## Root cause / analysis
Hub pages accept mixed containers; MP4 search intent needs MP4-only UX and copy (AAC in ISOBMFF, OPFS caps) without doorway duplication—sibling links handle MOV/WebM/MKV.

## Solution
- Pages: `src/pages/extractAudioFromAnMp4FilePage.ts`, `batchExtractAudioFromMp4FilesPage.ts`
- Gates: `coverage:gate` phase 2/4/all green both slugs; `CROSS_TOOL_UPDATE=1 npm run verify:tool` green both

## Notes / boundaries
Browser sample MP4 requires MediaRecorder MP4 support; otherwise users drop real files. Runtime browser acceptance not run in verify (noted by verify script).

[actions]
- Catalog, pages, i18n shards, icons, hub related, README
