Date: 2026-08-07 17:33
Summary: Fixed broken image tool SVG icons caused by corrupted Chinese XML comments.

[question]
http://localhost:8787/icons/tools/image-format-converter.svg；http://localhost:8787/icons/tools/image-compress.svg；图片出错

[try to solve]
A PowerShell rewrite during the palette change corrupted Chinese comment bytes in SVGs, so browsers failed XML parsing. Replaced comments in `image-compress` / `image-format-converter` / `image-exif` with ASCII, matching `image-optimizer`.

[actions]
- Fixed public/icons/tools/image-compress.svg
- Fixed public/icons/tools/image-format-converter.svg
- Fixed public/icons/tools/image-exif.svg
