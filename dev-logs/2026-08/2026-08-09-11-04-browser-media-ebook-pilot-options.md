Date: 2026-08-09 11:04
Summary: Published browser pilot option packs for ebook/video/audio conversion under SEO and local-first constraints.

[question]
启动浏览器器ebook视频音频转码工具试点，给出解决方案供选择

[try to solve]
Documented five pilot packages in `docs/2026-08-09-browser-media-ebook-pilot-options.md`. Default recommendation is Pack A (narrow): `audio-wav-mp3` (lamejs), `video-frame-extractor` (Canvas, no FFmpeg), `epub-unpack` (JSZip). Alternatives: B audio-only; C FFmpeg.wasm single-page video transcoder with hard support limits and POC gates; D EPUB-first (D1 unpack / D2 epub→pdf / D3 Calibre WASM rejected by default); E docs-only this week. Shared red lines: no format-pair URLs, Tier-2 click-to-load WASM, no full Aconvert-style stations. Linked from Aconvert competitor-ref. Awaiting pack choice before work-tasks/POC; default does not jump existing ZIP/designer P0.

[actions]
- docs/2026-08-09-browser-media-ebook-pilot-options.md (new)
- docs/competitor-refs/aconvert-2026-08-09/README.md (link to pilot options)
