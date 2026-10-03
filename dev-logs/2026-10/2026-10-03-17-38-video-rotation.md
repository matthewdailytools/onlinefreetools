Date: 2026-10-03 17:38
Summary: Implemented and browser-tested a ten-language video rotator that bakes 90/180/270-degree turns into H.264 pixels.
Visibility: project

[question]
Implement every unimplemented browser-feasible AV tool from the capability map in priority order, with early local intent terms, independent information gain, large-task stability and full local browser/output tests.

[try to solve]
## Fifteenth local item

`/tools/rotate-a-video-file` takes one browser-decodable MP4, MOV or WebM, previews it, and exports H.264 MP4 with the selected 90° clockwise, 180° or 90° counterclockwise turn baked into picture pixels (`allowTransformationMetadata:false`). The result checks actual pixel width/height, duration, video codec, AAC audio when present, bytes and storage route. A silent source stays silent. Pixel re-encoding is lossy and can change file size. Larger output uses browser-local OPFS and refuses tasks exceeding the memory budget if OPFS is unavailable. The UI has visible progress, stop and retry.

## SEO and executable evidence

- Applied `tool-coverage-pass`, `tool-token-efficiency`, `converter-serp-landing-seo`, `converter-input-ui` and `keyword-to-tool-funnel`. Coverage 0b, 2, 4 and all exited 0. Ten locale shards target their local rotate-video/fix-sideways intent in H1 and opening copy. Descriptions, How, Rules, Example and FAQ explain pixel rotation, angle/dimension behavior, loss and audio. Initial machine drafts that referred to trimming or translated result placeholders were corrected before browser acceptance.
- Engine POC: 640×360 H.264/AAC, eight seconds, produced 90°→360×640, 180°→640×360, 270°→360×640. `ffprobe` showed no rotation side data; 90° output visually matched `transpose=clock` far better than `transpose=cclock` (SSIM ~0.795 vs ~0.294). Repeatable browser acceptance additionally verified corner pixel colors in the downloaded sample.
- Full `node scripts/tool-modules/test-video-rotate-browser.mjs` exited 0 (`/tmp/rotate-full-browser2.log`): actual 90/180/270 MP4s, pixel location and no rotation flag, AAC/PCM MOV and silent VP9 WebM, broken file, >80 MiB input via OPFS and downloaded, active stop/retry, no-OPFS rejection and actual MP4 downloads in ten mobile locale pages with Arabic RTL and no horizontal overflow. A Spanish long angle label caused overflow on first run; fixed by constraining the select width and reran successfully.
- Final full `npm run build:site` produced 305 tools × ten languages and exited 0 (`/tmp/rotate-final-build.log`). `npm run coverage:gate -- --slug=rotate-a-video-file --phase=all`, `npm run lint:tool-page -- --slug=rotate-a-video-file --require-html`, `npm run lint:seo`, `CROSS_TOOL_UPDATE=1 npm run verify:tool -- --slug=rotate-a-video-file` (`/tmp/rotate-final-verify.log`), `npm run build:logs` and `git diff --check` exited 0. Browser/output acceptance was separate.

[actions]
- Added catalog shard, page, conversion script, four-color sample, SVG icon, ten locale shards, four briefs and Playwright/ffprobe output test. Updated related links, README and capability map. No deployment was made.
