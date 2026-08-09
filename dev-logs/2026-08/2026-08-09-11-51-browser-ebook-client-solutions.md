Date: 2026-08-09 11:51
Summary: Deep-dived client-side ebook libraries (sizes, licenses, read vs export vs write) and recommended phased stack for the site.

[question]
电子书客户端方案继续调研

[try to solve]
Documented `docs/2026-08-09-browser-ebook-client-solutions.md`: split capabilities into read/export vs format-matrix write; measured epub-ts (~64 KiB gzip ESM), foliate-js (~72 KiB gzip all modules, MIT, EPUB/MOBI/AZW3/FB2/CBZ), lingo parsers (lighter export-only), turndown/pdf-lib for export, DjVu.js self-host P2, reject Calibre/AGPL kookit/MOBI writers. Recommended P0 EPUB export → P1 foliate multi-format tabs on one slug; linked from Aconvert ref and pilot options.

[actions]
- docs/2026-08-09-browser-ebook-client-solutions.md (new)
- docs/2026-08-09-ffmpeg-wasm-vs-aconvert-av-and-ebook-alts.md (link)
- docs/2026-08-09-browser-media-ebook-pilot-options.md (D1/D1b update)
- docs/competitor-refs/aconvert-2026-08-09/README.md (link)
