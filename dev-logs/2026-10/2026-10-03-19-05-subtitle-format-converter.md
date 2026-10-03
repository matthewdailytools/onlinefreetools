Date: 2026-10-03 19:05
Summary: Implemented and browser-tested one local subtitle converter for SRT, VTT, ASS, SSA, SBV and LRC.
Visibility: project

[question]
Continue implementing the browser-feasible AV backlog and pause for confirmation after two completed and tested tools.

## Tool links (English)
- https://onlinefreetools.org/tools/convert-subtitle-files-between-srt-vtt-and-ass

[try to solve]
## Unified subtitle job

The capability map called for SRT↔VTT conversion. Existing subtitle SERP research grouped format conversion, legacy encoding repair and small batches into one upload-to-caption-output task. This implementation uses one URL for both directions and ASS/SSA/SBV/LRC. It parses timestamps and text, serializes the selected format, then parses the generated file again. Each result reports cue count, time range, detected source encoding, bytes, first cue and features that cannot be preserved. Legacy encodings can be overridden; output is UTF-8 with optional BOM. A Web Worker handles conversion so large text does not block the page. The queue processes up to 30 files sequentially, preserves successful rows after a failure, and offers individual downloads or a bounded ZIP.

## SEO and verification

- Applied `tool-coverage-pass`, `tool-token-efficiency`, `converter-serp-landing-seo`, `converter-input-ui` and `keyword-to-tool-funnel` for the existing subtitle keyword study. Coverage 0b, 2, 4 and all passed. Ten independently written locale shards put the local subtitle-conversion intent in H1 and opening copy; visible Rules, Example and FAQ describe syntax, encoding, loss and ZIP limits.
- `node scripts/tool-modules/test-subtitle-convert-browser.mjs` exited 0 (`/tmp/subtitle-browser-final2.log`). It downloaded and reparsed both SRT↔VTT directions and ASS/SSA/SBV/LRC to SRT, decoded GB18030 with an explicit override and wrote UTF-8 BOM, inspected a real ZIP with duplicate filename handling, processed 30 files with one invalid row and downloaded the last success, converted/downloaded/reparsed over 10 MiB and 140,000 cues, tested stop/retry, and downloaded VTT on ten mobile locale pages. A final case verifies that VTT identifiers, layout settings and voice/class tags are reported and removed from SRT rather than leaking as visible markup. The Arabic result table initially hid its download button offscreen; a mobile card layout fixed it and the full test passed.
- Full `npm run build:site` exited 0 with 308 tools × ten languages after both tools were added (`/tmp/av-two-tools-final-build.log`). `npm run lint:seo`, `npm run lint:tool-page -- --slug=convert-subtitle-files-between-srt-vtt-and-ass --require-html`, and final `CROSS_TOOL_UPDATE=1 npm run verify:tool -- --slug=convert-subtitle-files-between-srt-vtt-and-ass` (`/tmp/subtitle-final-verify2.log`) exited 0. The latter rebuilt the final page and ran vendor/isolation gates. No deployment was made.

[actions]
- Added a catalog shard, page, parser/serializer, worker, UI script, icon, ten locale shards, four briefs and browser/output regression. Updated README and the AV capability map.
