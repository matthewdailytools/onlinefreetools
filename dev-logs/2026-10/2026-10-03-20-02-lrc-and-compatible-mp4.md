Date: 2026-10-03 20:02
Summary: Implemented and browser-tested manual LRC lyric syncing and mixed-source H.264/AAC MP4 conversion in ten languages.
Visibility: project

[question]
Continue the next two browser-feasible AV tools, verify each locally, and wait for confirmation before another pair. Start the local development service.

## Tool links (English)
- https://onlinefreetools.org/tools/convert-a-video-to-an-mp4-with-aac-audio
- https://onlinefreetools.org/tools/sync-song-lyrics-to-lrc-by-tapping

[try to solve]
## Local outcomes

The LRC page plays a local audio file through a Blob URL, records integer-millisecond time for each lyric line, supports retapping, ±100 ms correction and an overall offset, and blocks export for missing, negative or reversed times. It saves actual UTF-8 LRC. The browser regression at `/tmp/lrc-browser-final.log` downloaded a four-line sample and user-supplied timed output, checked invalid and incomplete input, rendered 1,000 lines, opened a >80 MiB local WAV without full PCM loading, and downloaded real LRC from ten mobile locale pages including Arabic RTL. Audio codec availability still depends on the browser; this is manual line timing, not automatic transcription or word-level karaoke.

The compatible MP4 page accepts one MOV, WebM, MKV or MP4 video, reads the actual tracks, copies compatible H.264 or transcodes decodable pictures to H.264, encodes source sound as AAC, and preserves a video-only source as video-only. It re-inspects the MP4 container, video codec, required audio codec and duration before enabling Download. The browser regression at `/tmp/compat-browser-final3.log` downloaded and probed the VP9/Opus WebM sample, H.264/AAC MOV, MKV, silent MP4 and an >80 MiB input/output through OPFS. It rejected a damaged file, stopped and retried a conversion, and downloaded verified MP4 from ten mobile locale pages. HEVC without a decoder and other unsupported source/target codecs remain device-specific failures; H.264/AAC is a common playback target, not a guarantee for every device.

## Coverage and verification

Applied `tool-coverage-pass` and `tool-token-efficiency` to both slugs; applied `converter-serp-landing-seo` and `converter-input-ui` to the MP4 converter. Both slugs passed coverage phases 0b, 2, 4 and all and page wiring with `--require-html`. The final full `npm run build:site` generated 310 tools across ten languages (`/tmp/av-next-responsive-build2.log`). `npm run lint:seo` passed after expanding three short descriptions (`/tmp/av-next-lint-seo4.log`). Each `CROSS_TOOL_UPDATE=1 npm run verify:tool -- --slug=…` passed (`/tmp/lrc-final-verify.log`, `/tmp/compat-final-verify.log`). Local R2 was updated and the development server served both new English tool paths with HTTP 200. No production deployment was made.

[actions]
- Added both catalog shards, page implementations, icons, ten locale shards, briefs and executable browser regression scripts. Added the LRC timing core/UI and a playable four-second sample. Reused the existing Mediabunny conversion engine for mixed video containers.
- Updated README and the browser AV capability map with actual local acceptance status.
