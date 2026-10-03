Date: 2026-10-03 16:41
Summary: Implemented and browser-tested a ten-language video-to-JPG/PNG frame extractor with single timestamp, interval, individual downloads and bounded ZIP.
Visibility: project

[question]
Implement every unimplemented browser-feasible AV tool from the capability map in priority order. Pages need early local intent terms, independent information gain, large-input stability and complete local browser/output tests.

[try to solve]
## Twelfth local item

`/tools/extract-frames-from-a-video-as-images` accepts one local video and seeks its Blob URL rather than requiring a static server's Range support. The default captures three separate JPG files at 0, 1 and 2 seconds from an automatic moving MP4 sample. Advanced settings offer start/end/interval, a single-timestamp thumbnail mode, JPG or PNG, maximum width and JPG quality. Each result reports actual video time, dimensions and byte size; users can preview, download one image or download a small ZIP. Single-video thumbnail intent is handled by the one-frame mode, so `make-a-video-thumbnail-image` does not need a duplicate URL.

The input code cap is 1 GiB. A job is capped at 60 frames, 30 million total processed pixels and 32 MiB combined images. These limits are not universally tested maxima. Larger source videos can be seeked to a short window without decoding the full file. An image/ZIP budget error, unsupported codec or seek failure is explicit; completed frames survive a later error or stop. The ZIP uses stored already-compressed image blobs and is generated only from bounded results.

## SEO and executable evidence

- Applied `tool-coverage-pass`, `tool-token-efficiency`, `converter-serp-landing-seo`, `converter-input-ui` and `keyword-to-tool-funnel`. Coverage 0b, 2, 4 and all exited 0. Ten locale shards contain 76 matching native keys each. H1 and the first description target video frame extraction and video-to-images intent; How, Rules, Example and FAQ explain interval vs timestamp, JPG/PNG, actual times, source seeking and limits.
- `ONLY_EN=1 node scripts/tool-modules/test-video-frames-browser.mjs` exited 0 (`/tmp/video-frames-master-browser3.log`): three distinct sample JPGs, per-image download and ZIP; damaged input; PNG thumbnail at 2s; frame-budget rejection; >80 MiB video captured at 35s; stop/retry produced 30 images and ZIP.
- Full `node scripts/tool-modules/test-video-frames-browser.mjs` exited 0 (`/tmp/video-frames-full-browser.log`): all the above plus actual three-image ZIP downloads on ten mobile locale pages, Arabic RTL, no horizontal overflow and no page errors. `npm run lint:seo` exited 0 (`/tmp/video-frames-seo.log`). Final `npm run build:site` after the ZIP-stop-control edit exited 0 for 302 tools × ten languages (`/tmp/video-frames-ship-build.log`). Final `CROSS_TOOL_UPDATE=1 npm run verify:tool -- --slug=extract-frames-from-a-video-as-images` exited 0 (`/tmp/video-frames-ship-verify.log`); the reverse video-to-GIF page also passed `verify:tool` (`/tmp/video-gif-after-frames-verify.log`).

[actions]
- Added catalog shard, dedicated page and browser script, moving sample, SVG icon, ten locale shards, briefs and repeatable Playwright/ffprobe/unzip acceptance.
- Linked from the video-to-GIF page, updated README and capability map with local status and the absorbed thumbnail mode.
