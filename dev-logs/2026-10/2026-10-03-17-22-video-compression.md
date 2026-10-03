Date: 2026-10-03 17:22
Summary: Implemented and browser-tested a ten-language local video compressor with target-height resizing and OPFS large-file output.
Visibility: project

[question]
Implement every unimplemented browser-feasible AV tool from the capability map in priority order, with early intent terms, independent information gain, large-task stability and full local browser/output tests.

[try to solve]
## Fourteenth local item

`/tools/compress-a-video-file` accepts a browser-decodable MP4, MOV or WebM and produces an H.264 MP4 with AAC when sound exists. The user can choose target height, video bitrate, an approximate target size and audio channels. Target-height mode absorbs `resize-a-video-to-a-target-resolution`; output preserves aspect ratio and never upscales. The page previews input/output, estimates size, then reports actual pixels, codecs, bytes, reduction or growth and storage path. Lossy encoding and uncertain reduction are explicit. Large input/output uses OPFS; >80 MiB input without OPFS fails before memory output. Selection changes and output cleanup use version guards, with stop and retry.

## SEO and executable evidence

- Applied `tool-coverage-pass`, `tool-token-efficiency`, `converter-serp-landing-seo`, `converter-input-ui` and `keyword-to-tool-funnel`. Coverage phases 0b, 2, 4 and all exited 0. Ten locale shards cover local compress-video and reduce-MP4-size intent in H1/opening copy; settings, How, FAQ and measured results explain bitrate, target pixels and the non-guarantee.
- `npm run build:site` exited 0 for 304 tools × ten languages (`/tmp/compress-full-build.log`). `node scripts/tool-modules/test-video-compress-browser.mjs` exited 0 (`/tmp/compress-full-browser2.log`): automatic sample genuinely shrank; broken input rejected; MOV and WebM converted to real downloadable H.264 MP4; 240p target measured; approximate MiB option measured; an already-efficient silent source grew and was reported as larger; >80 MiB source compressed/downloaded via OPFS; active large conversion stopped and smaller job retried; no-OPFS large job rejected; all ten mobile locale pages downloaded real MP4, Arabic RTL and overflow checked.
- `npm run coverage:gate -- --slug=compress-a-video-file --phase=all`, `npm run lint:seo`, `npm run lint:tool-page -- --slug=compress-a-video-file --require-html`, `CROSS_TOOL_UPDATE=1 TOOL_SLUG=compress-a-video-file npm run lint:tool-isolation` and `CROSS_TOOL_UPDATE=1 npm run verify:tool -- --slug=compress-a-video-file` exited 0. Verify log: `/tmp/compress-final-verify.log`.

[actions]
- Added catalog shard, page, conversion UI, sample, icon, ten locale shards, four briefs and repeatable Playwright/ffprobe acceptance. Updated related links, README and capability map with resize absorption and local-only status. No deployment was made.
