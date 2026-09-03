Date: 2026-09-03 14:55
Summary: Re-ranked batch-capable tools as separate slugs with independent IG; chose bulk vs batch from search wording, not as synonyms on one page.
Visibility: people

[question]
增加批量处理能力的工具，需要单独立项写增益和单独slug，增加bulk或者batch（评估用户搜索习惯进行选择），按照这个逻辑重新整理清单

[try to solve]
## Context

The previous review treated batch as an enhancement on existing single-file URLs (`multiple` + ZIP on `image-compress`, etc.). The user overrode that: each batch job must be a **new tool** — its own brief, its own Information Gain, and a distinct slug that contains either `bulk` or `batch`, chosen from how people actually search.

That still has to satisfy split-page rules: a new URL is allowed only when the **primary control** differs (queue, shared settings, skip-on-fail, ZIP/CSV versus one-file preview). Same job with a synonym slug (`bulk-compress` plus `batch-compress`) is not allowed. Same pixel filter sold three times (`bulk-grayscale` / `bulk-flip` / `bulk-border`) is not allowed.

## Process

1. Re-read funnel + §3.3 H (scene-task slug; split by job type) and IG quota (tool-i18n-seo).
2. Re-cluster the earlier 50 file tools by **job type**, not by 1:1 pairing with every single-file sibling.
3. Choose `bulk` vs `batch` from public tool titles and how-to language (not Planner volume — none was run):
   - **bulk**: quantity (“in bulk”, bulk compressor/converter/resize) for product photos, WebP folders, SVG sets, Amazon specs, EXIF strip.
   - **batch**: run-the-same-process-over-a-set (batch watermark, batch compress PDF, batch checksum) for stamps, office PDFs, release hashes.
4. Draft ≥3 IG items per independent URL that are **not** true of the single-file sibling (queue miss table, ZIP rename, manifest compare, etc.).
5. Land an authority note under `docs/seo/keywords/bulk-batch/`, pool rows, tracker log, and refresh the analysis canvas. Did **not** create `work-tasks/` (user did not name a slug to implement).

## Root cause / analysis

Single-file compress and bulk product-photo compress are different jobs: one is a quality slider on one image; the other is a shared size cap, a per-file fail table, and a ZIP. That is a legitimate split. What is not legitimate is stuffing both `bulk` and `batch` into two URLs for the same queue, or minting a bulk clone of every existing image filter.

Head queries such as `bulk image compressor` are already occupied by cloud hubs. Scene H1 (`Bulk compress product photos`) is the title-gap fallback until Planner/SERP exist. Without SERP, nothing in this batch is `long_gap` for the weekly attack slot.

## Solution

**P0 independent URLs** (build, `week_attack=no` until SERP):

| slug | H1 | Word | Sibling not to absorb into |
| --- | --- | --- | --- |
| `bulk-compress-product-photos` | Bulk compress product photos | bulk | `image-compress` |
| `bulk-convert-images-to-webp` | Bulk convert images to WebP | bulk | `image-format-converter` |
| `batch-watermark-product-photos` | Batch watermark product photos | batch | `add-watermark` |
| `batch-compress-pdfs-for-email` | Batch compress PDFs for email | batch | `compress-pdf` |
| `batch-checksum-release-files` | Batch checksum release files | batch | `file-hash` |

**P1** (still new URLs, later): PDF draft watermark, password-protect, owned unlock, SVG icon set, Amazon cover-fill bulk (other social specs as chips — not six bulk-platform URLs), EXIF strip, WASM hero optimize, rotate scans.

**One URL + chips, do not split:** grayscale + flip + border; Amazon bulk + IG/YT/LinkedIn/OG sizes.

**No new slug:** existing N→1 / 1→N tools, interactive crop/overlay, compares, extractors, calculators.

Single-file pages stay single-file so they do not pretend the queue job is already shipped.

## Notes / boundaries

- Opening `work-tasks/{slug}/` still requires an explicit “create this slug” from the user.
- Next coverage step: Keyword Planner + Bing/Google SERP on the P0 five; then 0b briefs.
- zh H1 should follow local wording (批量…), not force the English tokens `bulk`/`batch` into Chinese titles.

[actions]
- Rewrote analysis canvas `tool-batch-capability-review.canvas.tsx`
- Added `docs/seo/keywords/bulk-batch/` authority note + README
- Appended pool rows; updated `keyword-to-tool-tracker.md` snapshot and decision log
- Linked theme from `docs/seo/keywords/README.md`
