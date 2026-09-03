Date: 2026-09-03 14:25
Summary: Reviewed all 162 shipped tools for batch-processing fit; recommended adding N→N queues on existing image/PDF pages, not new batch URLs.
Visibility: people

[question]
review 目前的工具，分析哪些能够增加批量处理的能力

[try to solve]
## Context

The ask was a product review of the live catalog: which existing tools should gain batch processing (many files, same settings, one download), which already have it, and which should stay single-item. This is a capability gap versus cloud hubs such as iLoveIMG, but this site’s constraint is local in-browser processing and people-first pages (no doorway “batch-compress” URLs).

## Process

1. Loaded the merged catalog (`src/site/tool-catalog.json`): **162** tools in five categories (calculator 63, developer 55, image 29, pdf 11, design 4).
2. Scanned every `src/pages/*Page.ts` for `<input type="file">`, the `multiple` attribute, `files[0]` (first-file-only), and ZIP helpers (`downloadZip` / `fflate.zipSync`).
3. Classified file tools by job shape:
   - **N→1 combine** (already): merge many inputs into one output.
   - **1→N explode** (already): one input becomes many files in a ZIP.
   - **N→N same transform** (the gap): apply one settings panel to many files, download a ZIP.
   - **N→report**: many files → a table/CSV, no binary ZIP required.
   - **Pairwise / interactive-1**: crop boxes, overlays, diffs — per-item unique UI.
4. Separately listed text/line batch that already exists (`uuid-generator`, `password-generator`, `indexnow`, `sitemap-xml-generator`, `ip-range-to-cidr`).
5. Recorded the review as a filterable Canvas (P0 / P1 / already / skip) rather than a one-off chat table.

Counts from the scan:

| Bucket | Count |
| --- | --- |
| File-input tools | 50 |
| `multiple` already | 7 |
| Single-file (`files[0]`) | 43 |
| 1→N ZIP from one asset | 3 icon/screenshot packs, plus `split-pdf` / `pdf-to-jpg` |
| Calculators / no file | 112 (default: do not add file batch) |

The seven existing `multiple` pages: `create-zip-file`, `image-merge`, `images-to-gif`, `images-to-pdf`, `images-to-ppt`, `images-to-word`, `merge-pdf`.

## Root cause / analysis

Batch value is not “every tool should accept a folder.” It is **settings reuse**. If the user would apply the same quality, codec, watermark text, PDF password, or crop box to 20 files, N→N is a real job. If the user must place a crop rectangle, stack two layers, or compare two documents, batch would flatten the product.

A second split: **transform** (encode/stamp → ZIP) vs **inspect** (hash/EXIF/metadata → table). Inspect tools do not need ZIP to be useful.

Competitive framing from the earlier iLoveIMG review still holds: do not chase unlimited cloud queues. The increment here is local, sequential, capped (about 20–50 files), one decoded buffer at a time, ZIP via the fflate path already used by `split-pdf` and `pdf-to-jpg`. SEO: absorb into the current slug; never ship `batch-image-compress` style URLs.

## Solution

**P0 (add N→N or N→report on the existing page)**

- `image-compress` — first implementation; becomes the shared queue + ZIP shell for the image cluster.
- `image-format-converter`, `add-watermark`, `image-grayscale`, `flip-image`, `image-border`, `svg-optimizer` — same shell, existing codecs/filters.
- `file-hash` — multi-file table + CSV (no ZIP required).
- `compress-pdf`, `pdf-watermark` — same idea after the image shell is stable (pdf-lib is heavier; must stay serial).

**P1**

- WASM: `image-optimizer` (serial + cancel; AVIF is slow).
- PDF same-settings: `protect-pdf`, `unlock-pdf`, `rotate-pdf`, `crop-pdf`, `pdf-page-numbers`, `pdf-to-markdown`; multi-PDF extension of `pdf-to-jpg` / `pdf-page-to-image-sizes`.
- Inspect: `image-exif`, `file-metadata-analyzer`, `image-to-base64` (cap output size).
- Scene size tools (`amazon-main-image-size`, Instagram/YouTube/LinkedIn/OG): batch only as **auto cover-fill**; keep interactive framing as the default single-file path.

**Already enough:** N→1 combiners, 1→N icon packs, UUID/password counts, IndexNow/sitemap/CIDR line lists.

**Do not add file batch:** `image-crop`, `image-overlay`, `color-from-image`, `organize-pdf`, the three compare tools, archive extractors, `chatgpt-export-to-markdown`, plus all calculators, prompt builders, and rate-limited network checkers.

**Ship rule:** enhance the current tool page; sequential queue; file cap; reuse in-repo fflate/vendor ZIP, not a new CDN.

## Notes / boundaries

- This turn did not implement UI. Next concrete step, if requested: Wave 1 on `image-compress` only.
- Browser RAM is the real limit, not catalog size.
- Text converters (`csv-json`, `yaml-json`, `markdown-to-html`) can grow folder→ZIP later; they are lower than image/PDF.
- Canvas path (IDE, not a site page): `canvases/tool-batch-capability-review.canvas.tsx` under the Cursor project canvases directory.

[actions]
- Reviewed `src/site/tool-catalog.json` and file-input pages under `src/pages/`
- Added analysis canvas `tool-batch-capability-review.canvas.tsx` (Cursor canvases directory)
