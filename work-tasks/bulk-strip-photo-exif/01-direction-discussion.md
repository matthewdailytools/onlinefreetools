# Direction

Direction A: a concrete file-processing task. Bulk remove photo EXIF.

Existing neighbor `image-exif` supplies reusable browser processing but has a different primary output or lacks a batch report. Keep that URL intact. This implementation is explicitly user requested, not justified by invented search volume.

JPEG, PNG and static WebP → browser-decoded pixels → fresh PNG files plus CSV in ZIP; 20 files, 25 MiB each, 100 MiB total, 24 megapixels each. Pixels are re-encoded; original format, animation and color profiles are not preserved. EXIF orientation is applied by browser decoding.

Reference: https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob
