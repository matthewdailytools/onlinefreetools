Date: 2026-09-21 11:05
Summary: Four local file workflows for scanned text, photo metadata, PDF watermarks and SVG icon cleanup.
Visibility: people

[question]
立项和实现：扫描 PDF → TXT、批量清除照片 EXIF、批量 PDF 水印、批量 SVG 优化。

## Tool links (English)

- https://onlinefreetools.org/tools/extract-text-from-a-scanned-pdf
- https://onlinefreetools.org/tools/bulk-strip-photo-exif
- https://onlinefreetools.org/tools/batch-watermark-pdf-drafts
- https://onlinefreetools.org/tools/bulk-optimize-svg-icon-set

[try to solve]

## Context

The existing site had scanned-PDF-to-Word OCR, single-photo metadata inspection,
single-PDF watermarks and a lightweight SVG optimizer. These four workflows need
different acceptance criteria: editable plain text, clean image copies with a
report, consistent placement across mixed PDF pages, and SVG cleanup that retains
internal references. Simply adding a multiple-file picker would not meet them.

## Processing decisions

Scanned PDF pages use the same PDF.js rasterization and Tesseract recognition
sequence as the existing Word workflow. The result is page-separated text in an
editor, and the TXT download reflects the user's corrections. Recognition starts
only after a click because loading OCR models is expensive. English, simplified
Chinese, Japanese and Arabic are the available recognition languages; the ten
interface languages do not imply ten OCR packs. Blank or failed pages appear in
the report instead of silently disappearing.

The photo workflow creates new PNG files from browser-decoded pixels. This avoids
retaining EXIF, GPS data or embedded thumbnails from source containers. It also
means that JPEG and WebP inputs do not keep their original format, output files
may grow, and color profiles are not preserved. The browser applies EXIF orientation
while decoding. Animation is rejected instead of silently keeping one frame. The
ZIP includes a CSV row for every input, including skipped files. Removing metadata
does not remove visible identifying details or sensitive filenames.

The PDF workflow renders one text template as a transparent image. Each page gets
a centered stamp sized against its own crop box, accounting for page rotation and
crop offsets. The rotated rectangle is constrained to the visible page area. A
file is included only after all of its pages succeed; encrypted or damaged inputs
do not discard successful neighbors. A watermark is not encryption, redaction or
a guarantee that a digital signature remains valid.

The SVG workflow intentionally avoids numeric rounding and ID renaming. It checks
IDs and local fragment references before and after removing comments, unreferenced
metadata and safe structural whitespace. Text whitespace remains intact. Stylesheets
cause structural whitespace and metadata to be retained to avoid changing selector
behavior. If serialization saves no bytes, the validated original is kept. Active
content, external resources and unsupported SVG constructs are skipped. Previews
use images, not insertion of uploaded markup into the page DOM. Project import
paths are outside this per-file reference check.

## Shared interaction and limits

A shared file workbench provides one dropzone, collapsed settings, disabled controls
while processing, a prominent progress display, per-file results and a download
button that becomes available only when output exists. Changing input or settings
invalidates stale downloads. Batch outputs use unique, sanitized names; CSV cells
are quoted and leading formula characters are neutralized. Processing is sequential
to reduce simultaneous memory use. Every tool exposes its file, page or pixel caps.

The three lighter workflows run a generated sample automatically. OCR is the
explicit exception and requires a user click. All scripts and OCR models load from
the site's existing vendor paths. Files remain in the browser; no upload service
or new dependency is introduced.

## Verification approach and boundaries

Acceptance checks use actual browser downloads: OCR text after editing, PNG chunks
and oriented pixels, rendered watermarks on mixed-size pages, and SVG reference
fixtures with before/after pixel comparisons. Invalid-input, retry and all-failed
states are tested separately from successful conversion. The local acceptance
records live with each tool's brief; local implementation and verification do not
by themselves establish that a release has been deployed.
