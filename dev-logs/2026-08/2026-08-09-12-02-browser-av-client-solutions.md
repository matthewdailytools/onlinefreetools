Date: 2026-08-09 12:02
Summary: Surveyed browser AV stacks beyond FFmpeg.wasm; recommend Mediabunny (L2) plus lamejs/gifenc (L1), FFmpeg as heavy fallback.

[question]
同样调研音视频其他浏览器端的解决方案

[try to solve]
Wrote `docs/2026-08-09-browser-av-client-solutions.md` with L0–L3 tiers: native Canvas/WebAudio/MediaRecorder; lamejs (~65 KiB gzip), gifenc (already in repo), mp4box, mediainfo.js (~940 KiB gzip wasm); Mediabunny 1.53 (MPL-2.0, min ~161 KiB gzip) + mp3-encoder (~129 KiB gzip) as preferred transcoder; WebAV for editing; Remotion excluded (proprietary); FFmpeg.wasm ~31 MiB GPL as optional fallback. Mapped Aconvert AV tools to stacks; updated pilot suite C and feasibility doc pointer.

[actions]
- docs/2026-08-09-browser-av-client-solutions.md (new)
- docs/2026-08-09-browser-media-ebook-pilot-options.md (suite C + A1/V options)
- docs/2026-08-09-ffmpeg-wasm-vs-aconvert-av-and-ebook-alts.md (link)
- docs/competitor-refs/aconvert-2026-08-09/README.md (link)
- docs/2026-06-23-10-15-js-media-conversion-feasibility.md (pointer that FFmpeg-only view is outdated)
