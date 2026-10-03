Date: 2026-10-03 17:02
Summary: Implemented and browser-tested a ten-language local video clip trimmer with H.264/AAC MP4 export and OPFS large-file path.
Visibility: project

[question]
Implement every unimplemented browser-feasible AV tool from the capability map in priority order. Pages need early local intent terms, independent information gain, large-input stability and complete local browser/output tests.

[try to solve]
## Thirteenth local item

`/tools/trim-a-video-clip-and-export` accepts one MP4, MOV or WebM that this browser can decode. Start/end seconds select one continuous interval. The local Mediabunny conversion explicitly uses `trim` and H.264/AAC transcode; a nonzero start is not advertised as lossless packet copy. The page previews the source, gives obvious progress/stop, checks the finished MP4 video and expected audio track, then reports actual duration, codecs, input/output bytes and storage path before enabling download. A silent source stays silent. OPFS stores larger output without building an output ArrayBuffer; >80 MiB input without OPFS is rejected before memory conversion. A file-selection race after asynchronous OPFS cleanup was found by repeated browser interaction and fixed by clearing the input immediately and awaiting the latest choice before conversion.

## SEO and executable evidence

- Applied `tool-coverage-pass`, `tool-token-efficiency`, `converter-serp-landing-seo`, `converter-input-ui` and `keyword-to-tool-funnel`. Coverage 0b, 2, 4 and all exited 0. Ten locale shards have 71 matching keys each. Each local H1 and opening description target video trimming and MP4 clip cutting, while How, Rules, Example and FAQ explain actual duration, audio, transcoding and limits.
- A real eight-second moving H.264/AAC POC cut seconds 2–5 into MP4 with a 3.000-second video stream and ~3.042-second AAC stream, both starting at zero. The browser acceptance script checked the downloaded clip's first second against source time 2 using SSIM, and confirmed it differs from source time zero.
- Full `node scripts/tool-modules/test-video-trim-browser.mjs` exited 0 (`/tmp/trim-full-browser5.log`): automatic sample and actual-content check, broken input and invalid range rejection, MOV and WebM sources, silent source, >80 MiB input trimmed at 35–37 seconds through OPFS and downloaded, stop/retry, injected OPFS failure rejection, and actual MP4 downloads in all ten mobile locale pages with Arabic RTL and no horizontal overflow.
- `npm run lint:seo` exited 0 (`/tmp/trim-seo.log`); `npm run lint:tool-page -- --slug=trim-a-video-clip-and-export --require-html` exited 0 (`/tmp/trim-page-lint.log`); `CROSS_TOOL_UPDATE=1 TOOL_SLUG=trim-a-video-clip-and-export npm run lint:tool-isolation` exited 0 (`/tmp/trim-isolation.log`). Final full `npm run build:site` exited 0 for 303 tools × ten languages (`/tmp/trim-final-build.log`). Final `CROSS_TOOL_UPDATE=1 npm run verify:tool -- --slug=trim-a-video-clip-and-export` exited 0 (`/tmp/trim-final-verify.log`); browser/output acceptance was separate.

[actions]
- Added catalog shard, dedicated page, same-origin loader trim option, moving sample, SVG icon, ten locale shards, four briefs and repeatable Playwright/ffprobe/SSIM acceptance.
- Linked from related video tools and updated README and the capability map with local status. No deployment was made.
