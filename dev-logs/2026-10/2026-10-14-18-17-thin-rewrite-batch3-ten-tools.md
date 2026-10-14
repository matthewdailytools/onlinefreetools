Date: 2026-10-14 18:17
Summary: Rewrote thin-queue tools #21–#30 (PDF, image and math calculators) with real feature depth and checked samples, then ran an incremental R2 upload and deploy for batch 3.
Visibility: people

[question]
按顺序逐一处理工具直到处理完成，每处理10个工具完毕，进行增量deploy和upload r2

## Tool links (English)
- https://onlinefreetools.org/tools/add-text-to-pdf-file
- https://onlinefreetools.org/tools/extract-text-from-pdf
- https://onlinefreetools.org/tools/how-to-calculate-circle
- https://onlinefreetools.org/tools/how-to-calculate-density
- https://onlinefreetools.org/tools/how-to-calculate-quadratic-equation
- https://onlinefreetools.org/tools/how-to-calculate-sample-size
- https://onlinefreetools.org/tools/image-border
- https://onlinefreetools.org/tools/images-to-pdf
- https://onlinefreetools.org/tools/images-to-word
- https://onlinefreetools.org/tools/print-pdf

[try to solve]
## Context
The 2026-10-13 SEO review listed 87 thin tool pages for people-first rewrites in `docs/seo/reviews/2026-10-13/05-thin-rewrite-queue.md`. They are worked in queue order, with an incremental build, `upload:r2` and `git:deploy` after every 10 finished slugs. This log covers batch 3, rows #21–#30. Batches 1 and 2 shipped earlier the same day.

## Process
1. For each slug:
   - Audit the page against the main search task.
   - Rewrite `src/pages/*Page.ts` wherever the tool was too shallow to finish that task.
   - Rewrite the English master and update catalog `related`.
   - Rewrite `work-tasks/{slug}/02-tool-info.md` and `03-locale-briefs.md`, including local titles, button names and fixed sample numbers per locale.
   - Three locale subagents (zh/ja/ar, es/pt/fr, de/ru/id) rewrite the copy around how people search in each language. They do not translate line by line.
2. Gates run for every slug:
   - Key-set match across 10 locales, with description ≥ 120 characters.
   - `bump-tool-updated-at` and `validate-tool-coverage-rounds --phase=all`.
   - `verify-tool` with `CROSS_TOOL_UPDATE=1` (SEO validator, page wiring, isolation).
   - A cross-batch isolation check.
   - Prerender and gzip.
   - Browser runs on the English page and on zh plus one other locale: auto sample, invalid input, Clear, and where relevant, download.
3. After #30, the batch deploy:
   - `node scripts/build-site.mjs --slug=<10 slugs>` wrote 100 prerendered HTML files.
   - `npm run upload:r2` (changed-only) uploaded 100 objects out of 3,670 and exited 0.
   - Then commit and `npm run git:deploy`.

## Root cause / analysis
Most pages in this batch were thin because the tool stopped one step short of the real task. Two-word FAQs and filler list items like "Pair with volume tools" padded the gap. The rewrites add the missing step:
- **print-pdf**: page scaling preview (A4 + 5 mm margin → 93%), 2 or 4 pages per sheet, odd/even and reverse order for manual duplex. The 5-page sample shows each layout's sheet count.
- **how-to-calculate-density**: solves for density, mass or volume, with volume from water displacement or dimensions. Output covers g/cm³, kg/m³ and lb/ft³, specific gravity, sink/float, and the closest common material. Sample: 54 g in 20 mL → 2.7 g/cm³, closest to aluminium.
- **image-border**: border width as a percent of the short side (so mixed cameras get equal-looking frames) or in pixels, with Polaroid-style and square/4:5/9:16 padding, and a warning before browser size limits. The 600 × 400 sample exports 640 × 440 with 20 px per side.
- **images-to-pdf**: page orientation follows each image, so mixed landscape/portrait scans land on matching A4 pages without stretching.
- **extract-text-from-pdf**: joins hard-wrapped lines back into paragraphs, re-joins hyphenated words, reads two-column pages column by column, keeps tables as tab-separated rows, strips repeated headers and footers, and flags pages with no text layer (scans).
- **images-to-word**: 1/2/4 images per page or continuous flow, captions, landscape, per-image rotation, a small-file preset, and natural filename order (IMG_2 before IMG_10). Page counts were checked in Microsoft Word.
- **how-to-calculate-circle**: any one of r/d/C/A gives the rest, with exact π forms (49π), semicircle values and unit conversion.
- **how-to-calculate-sample-size**: finite population correction, response-rate inflation, design effect, a mean (σ) mode, and margin of error back-solved from n. A comparison table shows how n changes with the margin.
- **how-to-calculate-quadratic-equation**: exact roots as fractions, simplified radicals or complex numbers, plus factored form, vertex form, Vieta check and a parabola graph. Fraction coefficients are accepted, and a = 0 falls back to a linear equation.
- **add-text-to-pdf-file**: corner presets or click-on-preview X/Y (PDF points, bottom-left origin), all/current/custom page ranges (`1-3, 5, 8-`), opacity, rotation and max line width. Text that Helvetica cannot encode (Chinese, Japanese, Arabic) is drawn as an image instead of failing.

## Solution
All ten slugs are marked `done 2026-10-14` in the queue file, and each passed every gate above. Some browser results:
- **how-to-calculate-quadratic-equation**: zh and de: 2x² + 3x − 2 = 0 → Δ 25, x = 1/2 and −2, (2x − 1)(x + 2), vertex (−3/4, −25/8).
- **add-text-to-pdf-file**:
  - zh: the auto sample stamps both pages at X=447.4, Y=39.6. Clicking the preview switches the position to custom and fills X/Y. Clear disables Download and hides the stats.
  - ja: the custom range `9` shows the localized range error.
- **how-to-calculate-sample-size**:
  - Default sample → 278.
  - No population → 385.
  - 20% response rate → 1,390.
  - Invalid inputs (n > N, 100% proportion) show messages.
- Short descriptions under 120 characters were extended with real feature details rather than filler: zh/ja for sample-size, zh for quadratic, zh for add-text-to-pdf.

## Notes / boundaries
- Skills applied: `tool-coverage-pass` and `tool-token-efficiency` for every slug. `converter-input-ui` and `converter-serp-landing-seo` were also used for the PDF and image converters.
- Pre-existing site-wide issue, not specific to these tools: on ja, de and ar pages the shared section headings "Frequently asked questions", "Related tools" and "References" still render in English. The core dictionaries for those locales are missing the heading keys. This is outside the per-slug rewrite scope and needs a separate decision.
- `Disallow: /devlogs/` stays deferred until Search Console confirms the logs are out of the index.
- Next: queue #31 (how-to-calculate-irr) onward. The next deploy follows #40.

[actions]
- Rewrote pages, i18n shards, catalog `related` and work-tasks for queue #21–#30
- Updated statuses in `docs/seo/reviews/2026-10-13/05-thin-rewrite-queue.md`
- `node scripts/build-site.mjs --slug=<batch3>`
- `npm run upload:r2`
- Commit + `npm run git:deploy`
