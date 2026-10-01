Date: 2026-09-27 22:02
Summary: Catalog is 278 tools; the 2026-09-21 P1 file queue is done, and the next new-tool picks are BPM, a metronome, and noise, after a transcription check.
Visibility: project

[question]
列出目前未实现的工具，并给出实现优先级

[try to solve]
## Context
The 2026-09-21 backlog review counted 274 catalog entries and treated historical tracker rows as stale. This pass rechecked `src/site/tool-catalog.json` on 2026-09-27 so shipped slugs are not listed again.

## Process
Compared the review’s explicit draft slugs, the keyword pool `build`/`defer` notes, and `work-tasks/` directory names against the live catalog (278 slugs).

## Root cause / analysis
Four tools from that review are now registered: `extract-text-from-a-scanned-pdf`, `bulk-strip-photo-exif`, `batch-watermark-pdf-drafts`, `bulk-optimize-svg-icon-set`. Sound still has 39 unregistered draft slugs. Ten bulk-batch drafts remain unregistered. Word-to-text, HTML/URL-to-text, PowerPoint-to-text, table-photo-to-CSV, and searchable scanned PDF are still absent. `safe-paste-cleaner`, `ai-token-counter`, and `vlsm-subnet-calculator` stay deferred. Empty `add-www-dns`, `photo-smart-compress` (`wont-create`), and the prompt topic hub are not missing tools. Pool names `robots-txt-checker`, `sitemap-checker`, `cidr-calculator`, and `magnet-pull-force-calculator` already have different live slugs.

## Solution
Do not open new URLs until file transcription and the sound hub are checked. If one new tool is chosen, prefer `detect-bpm-of-a-song`, then `tap-a-metronome-in-the-browser` and `play-white-pink-or-brown-noise`. Searchable PDF and the remaining batch jobs stay later because of cost or smaller task difference. None of these were re-certified as `long_gap`.

## Notes / boundaries
Priority is an engineering order, not a traffic forecast. Creating `work-tasks/{slug}/` still needs an explicit request. Live pages `add-digital-signature-to-pdf`, `check-pdf-a-compliance`, and `convert-pdf-to-dwg` are registered but must not be treated as full PKI, veraPDF, or DWG coverage.

[actions]
- Read catalog, keyword pool, and `docs/seo/reviews/2026-09-21/tool-backlog-priority.md`
