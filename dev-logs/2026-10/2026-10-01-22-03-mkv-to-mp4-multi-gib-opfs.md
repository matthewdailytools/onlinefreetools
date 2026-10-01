Date: 2026-10-01 22:03
Summary: Raised single-file browser MKV→MP4 from a memory-bound ~500 MiB path to OPFS StreamTarget streaming at about 5 GiB (about 1 GiB without OPFS).
Visibility: people

[question]
http://127.0.0.1:8787/zh/tools/convert-an-mkv-file-to-an-mp4-file 需要能支持几个G的大文件稳定转换

## Tool links (English)
- https://onlinefreetools.org/tools/convert-an-mkv-file-to-an-mp4-file
- Chinese: https://onlinefreetools.org/zh/tools/convert-an-mkv-file-to-an-mp4-file

[try to solve]
## Context
D2 already shipped mediabunny Conversion with forced AAC stereo, but the first release kept a conservative ~500 MiB / ~2 h product cap and tended to hold the whole output MP4 in RAM (`BufferTarget`). Real screen captures and ripped Matroska often sit in the multi-gigabyte range; users need a stable local path for “a few GiB,” not only short demos.

## Process
1. Compared mediabunny large-file APIs with the existing extract-audio OPFS pattern: `BlobSource` for input (bounded read cache) + `StreamTarget` writing into an OPFS `FileSystemWritableFileStream`.
2. Extended `scripts/vendor-mediabunny.mjs` / `public/vendor/mediabunny/mkv-to-mp4-loader.js`:
   - `getConvertCapabilities()` → `{ opfs, maxBytes, smallBufferMaxBytes }`
   - Hard caps: **5 GiB with OPFS**, **1 GiB without**
   - Small outputs (≤ ~80 MiB) may still use `BufferTarget`
   - Large outputs use OPFS + `fastStart: false` (moov at end) so the sink can seek/write without reserving packet counts
3. Wired the single-file page (and batch page) to probe capabilities before size checks, clean up OPFS temps after download/discard, and show GiB-aware result sizes.
4. Updated EN/ZH (and soft other locales) copy, README, and the AV capability map D2 row so limits match the engine.
5. Local smoke on `http://127.0.0.1:8787/zh/tools/convert-an-mkv-file-to-an-mp4-file` after cache bump `PAGES_CACHE_VERSION=4.85`: empty state shows the 5 GiB OPFS hint; Load sample → Convert → result `输入 22.3 KiB → MP4 25.9 KiB`, Download enabled.

## Root cause / analysis
The old ceiling was not a Matroska demux hard stop—it was memory aggregation. Keeping the finished MP4 as one in-memory buffer collapses under multi-GiB outputs even when video packets can be copied. OPFS streaming moves the write sink to the origin private file system so RAM stays near the demux/encode window (plus a small BlobSource cache), which matches how the site already handles large ISOBMFF extract-audio jobs.

Without OPFS, returning to a 1 GiB cap is honest: the fallback still may assemble output in memory. Exotic video codecs and very long AAC re-encodes can still fail or run slowly; desktop ffmpeg remains the escape hatch above ~5 GiB or when disk quota for OPFS is exhausted.

## Solution
- Engine: `convertMkvToMp4` chooses OPFS `StreamTarget` when available and the file is above the small-buffer threshold; otherwise `BufferTarget`.
- UI: `MAX_BYTES` follows `getConvertCapabilities().maxBytes`; HUD/copy state OPFS ≈ 5 GiB / no OPFS ≈ 1 GiB.
- Verified locally on the Chinese tool URL with Load sample; production URLs above after deploy.

## Notes / boundaries
- Not pure remux; audio always re-encodes to AAC stereo.
- Batch ZIP still packs completed Blobs—prefer the single-file page for one multi-GiB rip if device RAM is tight.
- Sample MKV is tiny; multi-GiB stability is architectural (OPFS stream) plus honest caps, not a multi-hour CI encode of a feature film.

[actions]
- Extended `scripts/vendor-mediabunny.mjs` / `public/vendor/mediabunny/mkv-to-mp4-loader.js` (OPFS StreamTarget, capability probe, 5 GiB / 1 GiB caps)
- Updated convert + batch page size limits and i18n/README/capability-map copy
- Local zh smoke: Load sample OK with 5 GiB hint; `PAGES_CACHE_VERSION` 4.85
