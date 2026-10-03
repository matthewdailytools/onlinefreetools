Date: 2026-10-03 21:07
Summary: Added and locally verified browser subtitle burning and ordered video joining as separate video workflows.
Visibility: project

[question]
确认开始下一批

## Tool links (English)
- https://onlinefreetools.org/tools/burn-subtitles-into-a-video
- https://onlinefreetools.org/tools/merge-video-clips-in-order

[try to solve]
## Context

The AV capability map had two unbuilt comprehensive video tasks: permanently draw existing timed subtitles into a video, and join multiple clips into one ordered file. The user authorized this next pair, with a pause after exactly two completed tools. Both require real media output, meaningful search-intent copy, ten locales and local browser tests. Production deployment was not requested.

## Process

For subtitle burning, the existing bounded Mediabunny conversion loader gained an optional video-frame processing hook. The new engine parses SRT or VTT, advances through cues as frames arrive, draws outlined text with wrapping and a safe bottom margin, writes H.264/AAC MP4 through OPFS when available, and reopens the output to verify its tracks. The page includes video and subtitle inputs, optional appearance settings, progress, stop, sample, preview and download.

For joining, a dedicated engine reads each source with bounded BlobSource caches. It decodes clips serially, letterboxes differing frame sizes into the first clip's canvas, normalizes audio samples to 48 kHz stereo, shifts timestamps into one timeline, and encodes one H.264/AAC MP4. The page exposes up/down ordering and a per-source codec/duration report. Both pages explain re-encoding and device limits rather than implying lossless or universal format support.

The work-task briefs passed coverage phases 0b, 2 and 4. All ten locales have full tool-specific page copy, including the opening search intent, How, rules, examples, use cases and FAQ. The related graph now points to each new tool from a relevant existing page.

## Analysis and verification

The first media prototype proved that returning a captioned canvas from Mediabunny's decoded-frame process produces real H.264/AAC output. The second prototype exposed a sample-rate mismatch between WebM and MOV; the merge engine therefore normalizes audio before encoding. Direct media tests inspected downloaded files with ffprobe rather than relying on a success label.

`node scripts/tool-modules/test-burn-subtitles-browser.mjs` passed: auto sample, actual timed caption pixels at one second but not at 0.1 seconds, invalid SRT followed by valid VTT, stop/retry, a 65-second source, a source above 80 MiB using OPFS, and downloaded MP4s on mobile-width pages in all ten locales. A Spanish mobile input overflow was found by the test and fixed.

`node scripts/tool-modules/test-merge-video-clips-browser.mjs` passed: WebM+MOV output is one H.264/AAC MP4, 44.1/48 kHz source sound becomes 48 kHz stereo, colored clips show correct and reversed actual frame order after row movement, a silent first clip remains silent before audio starts, a damaged clip is rejected, stop/retry works, a timeline above 65 seconds completes, a source above 80 MiB uses OPFS, and all ten mobile locale pages download valid MP4s.

Each tool's `verify:tool` passed the artifact, coverage, wiring, prerender HTML, SEO, vendor and isolation gates. The full `npm run verify` passed `build:site`, `lint:seo` and `lint:vendor`, then failed at `lint:taxonomy`: the shared subject enum omits `video`, which is already used by earlier video tools. Both pages passed `lint:tool-page --require-html`. The repository Wrangler dev server twice timed out before logging or binding; a static preview of the built pages returns HTTP 200 for both tool URLs on port 8787. Browser conversion tests ran separately against the same prerendered pages and vendor files.

## Notes and boundaries

These are local implementations and have not been uploaded or deployed to production. The subtitle tool needs a prepared SRT/VTT and re-encodes every frame; VTT positioning and advanced styling are not preserved. The merge tool also re-encodes and has a 500 MiB aggregate input code limit; that limit is not a tested maximum on all devices. Browser codecs, local storage quota and hardware remain real constraints. A batch video compressor or soft-subtitle mux is a separate future task, outside this two-tool batch.
