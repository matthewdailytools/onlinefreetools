Date: 2026-08-09 11:16
Summary: Measured FFmpeg.wasm npm core size (~31 MiB wasm) and clarified Calibre WASM has no production npm artifact.

[question]
Calibre WASM 和 FFmpeg是否现有解决方案，直接引用，大小多大

[try to solve]
FFmpeg.wasm: yes — `@ffmpeg/ffmpeg` 0.12.15 + `@ffmpeg/core` 0.12.10; `ffmpeg-core.wasm` = 32,718,323 bytes (~31.2 MiB), gzip ~9.8 MiB; load via npm/CDN after click; GPL-2.0-or-later. Calibre: no official WASM; `ebook-converter-wasm` is experimental, not on npm, Docker self-build only, size unpublished (Pyodide base alone ~13.9 MB unpacked); LibreOffice WASM npm exists but ~77 MB gz assets / much larger runtime — not Calibre and not recommended for light pilots. Documented in pilot-options §5.

[actions]
- docs/2026-08-09-browser-media-ebook-pilot-options.md (§5 engine sizes)
