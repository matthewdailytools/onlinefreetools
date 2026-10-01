Date: 2026-09-30 19:21
Summary: An industry-first scan of 10 verticals found no long-tail gap in 14 spot checks across five languages, so 13 candidates were pooled as defer and ranked by cluster adjacency, reusable engines, and information gain.
Visibility: project

[question]
调研本站还没有覆盖的工具，从行业出发进行调研

[try to solve]
## Context
Earlier backlog reviews (2026-09-21 and 2026-09-27) worked from existing keyword pools and draft slugs, so they mostly listed sound and batch-PDF jobs. This pass started from professions instead. It asked which recurring browser-doable jobs each industry has, and then checked whether the 278-tool catalog covers them.

## Process
1. Counted catalog tools by `scenario`: media 100, documents 55, developer 37, finance 20, math 20, seo 19, health 6, design/everyday/physics 5 each, construction 4, sports 2. Direction C in `docs/2026-07-28-tool-direction.md` already covers developer, SEO, e-commerce, finance, health, and app-store verticals.
2. Searched catalog shards, i18n shards, and page sources for business days, barcode, redact, timecode, WebVTT, word count, and duplicate-row terms. None were present, apart from an unrelated WHOIS "redacted" string.
3. Ran 14 WebSearch spot checks (top 5 results each) on concrete scenario queries in subtitling, video post-production, self-publishing, retail and logistics, bookkeeping, legal and HR, data ops, construction trades, and baking. Checks covered English plus German, Japanese, Spanish, and Chinese variants.
4. Cross-checked GSC page data from 2026-09-10. Construction pages (square feet, concrete) get impressions in es, de, zh, and fr, even though the cluster has only four tools.

## Root cause / analysis
Every query returned several dedicated "runs in your browser, no upload" tool pages. This held in the non-English checks too: Japanese PDF redaction, German business days by state, Spanish container loading, Chinese bank-statement conversion, and stair calculators built on each country's code (DIN 18065, CTE, GB 50352-2019). Under the funnel rules that makes each one `mid_covered` (KDP spine and business days are `head`). Without a matching live slug, the verdict is `defer`, not `build`. Gap hunting alone no longer separates candidates. Ranking now uses four filters: adjacency to clusters that already have impressions, reuse of vendored engines (pdfjs, pdf-lib, tesseract, papaparse, xlsx, jszip), information gain that competitors do not combine, and low YMYL weight.

## Solution
Written to `docs/seo/keywords/industry-scan/2026-09-30-industry-tool-gap-scan.md`, with 13 `defer` rows added to the keyword pool and a tracker decision-log entry.

- P1: `black-out-text-in-a-pdf-permanently`. It fills the missing redaction job in the PDF cluster, and all its engines are already vendored. Its information gain combines rasterizing only the marked pages, OCR search-to-redact on scans, stripping metadata, and a post-redaction check. P1 also includes `fix-out-of-sync-subtitles` (two-point and frame-rate resync, where competitors mostly shift by a constant) and `check-subtitle-reading-speed`. The fourth P1 item is `calculate-stair-rise-and-run-to-code`: it would support several building codes and pick one by locale, but it needs more information gain before a build.
- P2: `split-a-large-csv-into-smaller-files`, `convert-a-bank-statement-pdf-to-excel`, `how-many-cartons-fit-in-a-container`.
- P3: timecode, EAN-13 barcode (needs a new vendor library), voltage drop (electrical safety), business days (holiday dataset), KDP cover (the official tool ranks first), and baker's percentage.
- Within documents, redaction should come before `make-a-scanned-pdf-searchable`, because it does not need text-layer positioning.

## Notes / boundaries
WebSearch top-5 summaries are not the manual Google/Bing top-10 review required by the long-tail strategy, so every tier is a draft. No Keyword Planner volumes were pulled. Chinese stair sizes should cite GB 50352-2019, not GB 50096. Nothing was created under `work-tasks/`, and no tool page changed. The weekly new-tool cap of one or two, each with at least three information-gain points, still applies.

[actions]
- Added `docs/seo/keywords/industry-scan/2026-09-30-industry-tool-gap-scan.md`
- Appended 13 rows to `docs/seo/keyword-daily-pool.tsv`
- Registered the theme in `docs/seo/keywords/README.md`; added a 2026-09-30 row to `docs/seo/keyword-to-tool-tracker.md`
