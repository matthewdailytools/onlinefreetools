Date: 2026-08-09 11:29
Summary: Mapped Aconvert AV tools to FFmpeg.wasm capabilities and surveyed browser ebook alternatives (foliate-js, epub-ts, etc.).

[question]
FFmpeg.wasm是否能够完成目前 aconvert的相关音视频相关工具功能，给出工具对应解决技术能力；另外调研其他电子书的解决方案

[try to solve]
FFmpeg.wasm can cover most Aconvert video/audio *operations* (convert/cut/merge/compress/extract/rotate/crop/pad) for mainstream codecs (MP4/WebM/MOV, MP3/WAV/Opus/FLAC…), but not format-parity for WMV/RM/WMA etc., nor cloud-scale 200MB UX; GPL core ~31 MiB. Recommended fewer combined slugs with a finite support table. Ebook: FFmpeg irrelevant; prefer JSZip/epub-ts + Turndown and foliate-js (EPUB/MOBI/AZW3/FB2/CBZ read/export); reject Calibre/LibreOffice WASM full matrices and writing MOBI/AZW3. Full tables in `docs/2026-08-09-ffmpeg-wasm-vs-aconvert-av-and-ebook-alts.md`.

[actions]
- docs/2026-08-09-ffmpeg-wasm-vs-aconvert-av-and-ebook-alts.md (new)
- docs/competitor-refs/aconvert-2026-08-09/README.md (link)
- docs/2026-08-09-browser-media-ebook-pilot-options.md (link)
