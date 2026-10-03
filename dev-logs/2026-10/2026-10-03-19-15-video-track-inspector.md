Date: 2026-10-03 19:15
Summary: Implemented and browser-tested a ten-language video and audio track inspector with JSON reports.
Visibility: project

[question]
Continue implementing the browser-feasible AV backlog and pause for confirmation after two completed and tested tools.

## Tool links (English)
- https://onlinefreetools.org/tools/inspect-video-file-tracks

[try to solve]
## Diagnostic task

This tool reads a local video's container and every video/audio track through Mediabunny BlobSource inside a Web Worker. It shows codecs and detailed codec parameters, video dimensions and rotation, audio language/channels/sample rate, per-track starts and metadata end times, and whether the current browser reports that it can decode each track. A reusable helper also checks whether MP4 or WebM accepts each codec family; the page explicitly says this does not guarantee successful remuxing, transcoding or playback. It separates no audio track from audio that exists but cannot decode here. Metadata times are labeled approximate and browser decodability is not a promise for other devices. Up to 30 files are inspected serially; one broken file does not remove completed reports. Each successful report downloads as JSON, and Stop cancels the active worker.

## SEO and executable evidence

- Applied `tool-coverage-pass` and `tool-token-efficiency`. Coverage phases 0b, 2, 4 and all passed. Ten locale shards use local video-track/codec-checker intent in H1 and opening copy, then explain container versus codec, secondary languages, no-audio versus unsupported audio, metadata timing and device-specific decoding in Rules/Example/FAQ.
- `node scripts/tool-modules/test-video-track-inspect-browser.mjs` exited 0 (`/tmp/tracks-browser-final.log`). The downloaded JSON for the automatic sample reported H.264 video and English/Spanish AAC tracks, plus MP4/WebM codec-family checks. The suite checked silent MP4, MOV with PCM, VP9/Opus WebM, H.264/AAC MKV, a broken file, a 25-file queue with one failure and final success, an >80 MiB file inspected via bounded BlobSource in about 225 ms, stop/retry, and actual JSON downloads in ten mobile locale pages with Arabic RTL and no horizontal overflow.
- Final full `npm run build:site` exited 0 with 308 tools × ten languages (`/tmp/av-two-tools-final-build.log`); `npm run lint:seo`, `npm run lint:tool-page -- --slug=inspect-video-file-tracks --require-html` and `CROSS_TOOL_UPDATE=1 npm run verify:tool -- --slug=inspect-video-file-tracks` (`/tmp/tracks-final-verify2.log`) exited 0. No deployment was made.

[actions]
- Added catalog shard, page, Web Worker, reusable codec-family helper, UI script, two-language MP4 sample, icon, ten locale shards, four briefs and Playwright/JSON regression. Updated README and capability map.
