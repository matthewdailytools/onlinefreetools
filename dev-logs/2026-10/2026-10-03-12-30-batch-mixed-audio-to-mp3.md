Date: 2026-10-03 12:30
Summary: Implemented and locally verified a mixed-format batch audio-to-MP3 tool with ten localized pages and per-file outputs.
Visibility: project

[question]
Implement every unimplemented browser-feasible audio/video function from the capability map in priority order, with search-intent SEO, verifiable information gain, and complete local page functionality tests. The user clarified that this scope covers the whole map rather than only batch slugs.

[try to solve]
## First completed item

`/tools/batch-convert-audio-files-to-mp3` is the first §11.4 candidate. It accepts a mixed queue of M4A, FLAC, OGG, and WAV and creates separate MP3 results. This distinct task has per-file state, partial success, same-name output numbering, stop after current file, retry-failed, and independent downloads. The page explains codec-dependent browser decoding, loss from MP3 re-encoding, file/queue limits, and output storage. Search-intent phrases are in title, lead, description, How, use cases, and FAQ rather than a keyword list.

## Implementation and recovery

The initial in-memory ZIP approach could have retained too much output for a longer queue. The tool instead prefers on-device browser storage for real outputs and keeps a bounded 96 MiB memory fallback. Built-in samples remain in short-lived memory to avoid leaving browser storage after ordinary visits. The sample uses existing M4A and FLAC fixtures and actually converts on page entry. An initial SEO lint failure identified nine descriptions without an explicit process/example phrase and a short Chinese description; each was amended with a concrete localized input-to-output example. Related links from the M4A, FLAC, and OGG single-file tools prevent an orphaned new URL.

## Verification

- `coverage:gate` phases 0b, 2, 4, and all: passed.
- `CROSS_TOOL_UPDATE=1 npm run verify:tool -- --slug=batch-convert-audio-files-to-mp3`: passed after correcting SEO descriptions; source wiring, HTML smoke, SEO, vendor, and isolation green.
- `npm run build:site`: passed and refreshed ten-language tool pages, home pages, sitemap, and chrome.
- `node scripts/tool-modules/test-batch-audio-browser.mjs`: passed on the final full build. The downloaded sample MP3 decoded to about 5.04 seconds of non-silent stereo audio; OGG plus damaged M4A showed partial success and retry; all ten mobile locales produced real results without horizontal overflow or JavaScript errors; 20 same-name files produced distinct downloads; stop/resume and oversized rejection worked. Conversion made no unexpected remote requests.
- `git diff --check`: passed.

## Limits and next work

This is local implementation only, not production deployment. The 40 MiB/10-minute per-file value is a hard limit; the biggest successful local fixture in this run was a five-second file, while the 20-file test repeated short M4A inputs. Larger valid-file and storage-quota tests remain for broader §12 claims. The next priority is an independently justified MP3 batch task, then other unimplemented browser-feasible capabilities in the map, each with its own brief, coverage gates, ten-language copy, build, and real browser output checks.

[actions]
- Added `work-tasks/batch-convert-audio-files-to-mp3/` brief and coverage records.
- Added catalog/page/icon and ten localized shards for `/tools/batch-convert-audio-files-to-mp3`.
- Added browser regression `scripts/tool-modules/test-batch-audio-browser.mjs` and related links from M4A/FLAC/OGG pages.
- Updated `docs/media/2026-10-01-browser-av-capability-map.md` with local implementation status.
