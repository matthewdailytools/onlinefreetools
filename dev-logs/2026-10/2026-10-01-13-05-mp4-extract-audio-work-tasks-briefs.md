Date: 2026-10-01 13:05
Summary: Added full work-tasks briefs (00–03) for MP4 single and batch extract-audio slugs with green coverage:gate phase=0b.
Visibility: people

[question]
Create FULL work-tasks briefs (00, 01, 02, 03) for TWO new slugs ONLY (do not implement Page/i18n/catalog yet):
1. extract-audio-from-an-mp4-file
2. batch-extract-audio-from-mp4-files

[try to solve]
## Context
Sound-editor hub `extract-audio-from-a-video-file` and mixed batch page exist; product needs MP4 container landing pages with distinct IG (ISOBMFF/AAC/demux+OPFS, anti-YouTube) and MP4-only batch accept with related mesh to hub, mixed batch, and future format siblings.

## Process
Copied structure from `work-tasks/extract-audio-from-a-video-file` and `work-tasks/batch-extract-audio-from-video-files`. Applied tool-coverage-pass 0b tables, same-intent keyword tables, intent review, ten-locale H1 rows in `03`, and `coverage:gate --phase=0b` for each slug.

## Root cause / analysis
Hub intent is generic video containers; MP4 searches need a dedicated task sentence without doorway duplication—differentiated by accept, default narrative (demux path), and FAQ routing to hub/mixed batch.

## Solution
Created eight markdown files under `work-tasks/{slug}/` with `02` status `ready`, `03` status `briefs-ready`, page.style opts and localProcessing documented, sound-editor topic, unchecked page module checklist until implementation.

## Notes / boundaries
No catalog shards, Page.ts, git commit, or plan file edits in this pass. Next step: catalog + Page + i18n then phases 2/4 gates.

[actions]
- Added work-tasks folders and 00–03 for both MP4 slugs; ran `npm run coverage:gate -- --phase=0b` (both OK).
