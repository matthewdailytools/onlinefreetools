Date: 2026-09-03 15:35
Summary: Listed viable bulk-compress slugs: product photos, keep-PNG, and PDFs; GIF later; no catch-all compressor URL.
Visibility: people

[question]
批量压缩slug有哪些可以做的

[try to solve]
## Context

After splitting convert by output format, the user asked which **compress** slugs are actually worth independent URLs.

## Process

Mapped search wording (compress jpg / png / pdf / gif / svg / 200kb) onto job types using the single-file tools `image-compress`, `compress-pdf`, `image-optimizer`, `svg-optimizer`. Split only where Rules differ: photos going smaller as JPEG/WebP versus PNG that must stay PNG versus PDF raster rebuild versus animated GIF.

## Root cause / analysis

A generic `bulk-image-compress` with a format dropdown repeats the convert mistake: visitors search the object they have (JPG photos, PNG logos, PDFs), not a codec name. Target-KB and jpeg/jpg are the same photo-compress job (chips). Compressing PNG into JPEG is convert, not compress-png.

## Solution

Ship three compress URLs: `bulk-compress-product-photos`, `bulk-compress-png-images`, `batch-compress-pdfs-for-email`. Defer `bulk-compress-gif-images`. Absorb “compress svg” into `bulk-optimize-svg-icon-set`. Do not add webp-only compress, video, zip-as-compress, or a hub slug.

Wrote this into `docs/seo/keywords/bulk-batch/2026-09-03-bulk-vs-batch-tool-split.md` §0.2, pool, tracker, canvas.

## Notes / boundaries

No work-tasks. Compress pages must not be format converters in disguise.

[actions]
- Updated bulk-batch authority note, README, keyword pool, tracker, canvas
