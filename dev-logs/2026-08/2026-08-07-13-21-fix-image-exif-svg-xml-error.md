Date: 2026-08-07 13:21
Summary: Fixed an invalid control character in the image-exif.svg XML comment (and the same class of bug in image-compress.svg).

[question]
http://localhost:8787/icons/tools/image-exif.svgThis page contains the following errors:
error on line 6 at column 8: xmlParseComment: invalid xmlChar value 7
Below is a rendering of the page up to the first error

[try to solve]
Root cause: line 6 of `public/icons/tools/image-exif.svg` had an illegal control character `0x07` (BEL) inside an XML comment, which XML parsers reject.

Replaced the corrupted comment with a clean EXIF metadata-bar comment (same Chinese comment style as sibling `image-format-converter.svg`). PowerShell XML parse succeeded afterward.

Also fixed the same class of corrupted comments in `image-compress.svg` (illegal chars including `0x1A`) to prevent the same error.

[actions]
- `public/icons/tools/image-exif.svg`: fixed line 6 comment
- `public/icons/tools/image-compress.svg`: fixed lines 3 and 7 comments
