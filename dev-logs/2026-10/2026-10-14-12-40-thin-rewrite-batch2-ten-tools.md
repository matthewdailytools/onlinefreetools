Date: 2026-10-14 12:40
Summary: Rewrote thin-queue tools #11–#20 with verifiable information gain and fixed several broken behaviours, then ran an incremental R2 upload and deploy for batch 2.
Visibility: people

[question]
按顺序逐一处理工具直到处理完成，每处理10个工具完毕，进行增量deploy和upload r2

## Tool links (English)
- https://onlinefreetools.org/tools/add-watermark
- https://onlinefreetools.org/tools/combine-files-into-one-pdf
- https://onlinefreetools.org/tools/how-to-calculate-date-difference
- https://onlinefreetools.org/tools/how-to-calculate-payback-period
- https://onlinefreetools.org/tools/how-to-calculate-percentage-change
- https://onlinefreetools.org/tools/how-to-calculate-permutation-combination
- https://onlinefreetools.org/tools/how-to-calculate-scientific-notation
- https://onlinefreetools.org/tools/image-grayscale
- https://onlinefreetools.org/tools/images-to-gif
- https://onlinefreetools.org/tools/open-pdf-in-browser

[try to solve]
## Context
The 2026-10-13 SEO review queued 87 thin tool pages for people-first rewrites (`docs/seo/reviews/2026-10-13/05-thin-rewrite-queue.md`). They are processed in queue order, with an incremental build, `upload:r2` and `git:deploy` after every 10 finished slugs. Batch 1 (#1–#10) shipped earlier the same day; this log covers batch 2, queue rows #11–#20.

## Process
1. Per slug: audit the live page against the main search task, rewrite `src/pages/*Page.ts` where the tool was broken or too shallow, rewrite the English master, update catalog `related`, rewrite `work-tasks/{slug}/02-tool-info.md` and `03-locale-briefs.md` (0b / 1b / 2b coverage rounds), then three locale subagents (zh/ja/ar, es/pt/fr, de/ru/id) rewrite the copy for search intent rather than translating it.
2. Gates per slug: key-set match across 10 locales, `bump-tool-updated-at`, `validate-tool-coverage-rounds --phase=all`, `verify-tool`, tool isolation, and a browser run of the auto sample plus invalid input, Clear and download.
3. After #20: `node scripts/build-site.mjs --slug=<10 slugs>` (100 prerendered HTML files, gzip state for 10 slugs), then `npm run upload:r2` (hash-incremental, 100/100 objects, exit 0), commit and `npm run git:deploy`.

## Root cause / analysis
Several pages were not just thin but functionally wrong before the rewrite, which is the real reason they could not satisfy the search task:
- **date-difference**: a broken regular expression rejected every input. Now it gives days, years/months/days, weeks, working days and an inclusive-end option (2024-01-01 → 2024-03-15 = 74 days, 2 months 14 days, 54 working days). Arabic defaults to a Friday + Saturday weekend.
- **scientific-notation**: large numbers expanded back into `e` notation with floating-point error. Now expansion is an exact string shift (4.35×10² → 435), with a working line for how many places and which direction.
- **permutation-combination**: results showed `.00` and big values were rounded. Now it uses BigInt (52! has 68 digits) and shows all four counts side by side (n=10, r=4 → 5,040 / 210 / 10,000 / 715).
- **payback-period**: only equal cash flows were supported. Now it takes one number or a list, with simple vs discounted payback (10,000 / 2,500 / 8% → 4.00 vs 5.01 years) and a cumulative table.
- **percentage-change**: a negative base gave the wrong sign. Now it shows the signed change plus a working line, the reverse percentage needed to undo it (−15% needs +17.65%), percentage difference and percentage points.
- **images-to-gif**: the stats line was broken and loop=1 played twice. Now it has per-frame delay, reorderable frames, a loop count written as total plays, and a progress HUD.
- **image-grayscale**: seven conversion methods (Rec.601 / Rec.709 / average / lightness / single channel), a strength slider, and an honest note that browsers save RGB files.
- **open-pdf-in-browser**: re-parsed the file on every page. Now one load with zoom, rotate, full screen, search across pages, a password row and a document-details table.
- **combine-files-into-one-pdf**: PDFs, photos (EXIF orientation honoured) and text notes merge in a user-chosen order. Unsupported types such as DOCX/HEIC are skipped with a warning.
- **add-watermark**: text watermark with one-corner or tiled layout, nine-position grid plus click-to-place, size relative to image width, opacity, rotation, shadow/outline, format and resize options, and a © quick-insert button.

## Solution
All ten slugs are marked `done 2026-10-14` in the queue file. Each passed the key match, coverage gate, `verify-tool` and isolation checks. Browser checks covered real outputs. Examples:
- **combine-files-into-one-pdf**: portrait EXIF photo upright, WebP on a landscape page, and selectable text lines; a damaged PDF shows a readable error.
- **add-watermark**: the 336 px text box sits 22 px from the right edge on the 960 px sample, tile mode covers all four quadrants and switches to −30° / 25%, PNG alpha is kept, and the download is named `lake-sunset-watermarked.jpg`.

## Notes / boundaries
- Skills applied: `tool-coverage-pass` and `tool-token-efficiency` for every slug; `converter-input-ui` and `converter-serp-landing-seo` for the image/PDF converters.
- Pre-existing, not tool-specific: Arabic tool pages still show the shared section headings "Frequently asked questions", "Related tools" and "References" in English. This is site-wide chrome, outside the per-slug rewrite scope, and is left for a separate decision.
- `Disallow: /devlogs/` is still deferred until Search Console confirms the logs are out of the index.
- Next: queue #21 (print-pdf) onward; the next deploy follows #30.

[actions]
- Rewrote pages / i18n / catalog related / work-tasks for queue #11–#20
- Updated `docs/seo/reviews/2026-10-13/05-thin-rewrite-queue.md` statuses
- `node scripts/build-site.mjs --slug=<batch2>`
- `npm run upload:r2`
- Commit + `npm run git:deploy`
