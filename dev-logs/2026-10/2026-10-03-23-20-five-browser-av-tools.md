[question]
继续立项和完成剩下的5个工具

## Tool links (English)
- https://onlinefreetools.org/tools/add-soft-subtitles-to-an-mp4
- https://onlinefreetools.org/tools/batch-compress-video-files
- https://onlinefreetools.org/tools/batch-extract-frames-from-videos
- https://onlinefreetools.org/tools/batch-make-srt-subtitles-from-audio-files
- https://onlinefreetools.org/tools/batch-trim-video-clips-by-time

[try to solve]

## Context
The browser AV capability map had five actionable gaps: repeat compression, repeat timed trimming, frame extraction from multiple videos, repeated audio-to-SRT transcription, and a selectable MP4 subtitle track. Each needed a distinct file/result workflow, ten-language search-intent copy, bounded resource use, and a real downloaded-output test before being marked locally implemented.

## Process and analysis
The four batch tasks were built as independent per-source jobs. Compression and trimming keep a successful MP4 available when another source fails. Frame extraction groups JPGs by source inside a ZIP and includes a manifest. Audio-to-SRT loads a local Whisper model only after an explicit action, reuses it across a serial queue, exposes auto detection plus 99 spoken-language choices, and lets users edit each SRT independently. The spoken language is independent of the page language.

For soft subtitles, a WebVTT track produced by the first container approach was not recognized as a subtitle stream by the local playback probe. A mov_text (`tx3g`) track created by MP4Box passed `ffprobe` and round-trip SRT extraction. This path preserves the encoded H.264/AAC samples; it rewrites only the MP4 container. Browser video controls do not necessarily expose the track, so the page also downloads an SRT sidecar and explains player compatibility.

## Solution and verification
Five catalog shards, page modules, icons, locale shards, work-task briefs and runtime modules were added. The five corresponding local tool pages passed coverage, page wiring, SEO, vendor and isolation gates through `verify:tool`. Browser tests confirmed two compressed MP4 outputs with H.264/AAC; two three-second trimmed MP4 outputs; a four-JPG ZIP with separate source folders and manifest; two editable audio SRT results plus mixed valid/broken input; and a downloadable MP4 containing an English mov_text track. The latter was decoded with FFmpeg and its subtitle stream extracted back to the expected 1–4 second cue. An overlapping SRT was rejected and a corrected file succeeded on retry. A 75.6 MiB MP4 also muxed in headless Chrome; both copied video and audio packet hashes matched the source, and the subtitle cue round-tripped through FFmpeg. A full site build generated 317 tools in ten locales. These are local tests, not production deployment.

## Notes and boundaries
Code limits and tested file sizes are distinct. MP4 soft subtitle muxing is limited to a 160 MiB MP4 and 2 MiB SRT because the container is rewritten in browser memory. The frame ZIP has aggregate output limits. Whisper transcription requires human review. The capability map and README now describe these local implementations; none of this turn deployed them to production.
