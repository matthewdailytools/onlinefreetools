Date: 2026-09-30 19:29
Summary: Construction deep scan found no long-gap tool; the best next step is upgrading the existing concrete page (mix-by-grade, local bag sizes, waste, footing shapes) and adding tsubo/jo/mu to unit-converter, with PDF plan takeoff and site-photo GPS stamping as the top new-URL candidates.
Visibility: project

[question]
专项：详细调研建筑施工相关网站和工具，

[try to solve]
## Context
Follow-up to the same-day industry gap scan. The user asked for a dedicated, detailed study of construction websites and tools. The goal was to map competitors, compare tool categories, capture locale-specific needs, and decide what the site should build or upgrade. This was planning only: no tool pages, no `work-tasks/`, no deploy.

## Process
1. Inventoried the site's construction scenario tools (concrete, tile, paint, square-feet) and read their page code to confirm real capabilities.
2. Pulled GSC page and query metrics from the 2026-09-10 export.
3. Read the archived Omni (156 tools) and ToolDone (138 tools) construction lists.
4. Ran 20 WebSearch top-5 checks across en/ja/ru/zh/id/es/ar/de:
   - competitor landscape;
   - PDF takeoff, photo GPS stamping, photo report PDFs;
   - rebar, concrete bags, concrete mix by grade;
   - tsubo/jo, strip foundations, brick/AAC block walls;
   - German screed, roof pitch, drywall, IFC viewers.
5. Checked adjacent slugs:
   - `how-to-calculate-slope` is two-point math with no roof pitch;
   - `image-exif` reads and strips GPS but cannot stamp it.
6. Applied the keyword-to-tool funnel rules. Any capability that is not implemented cannot be marked `absorb`, even when it will land on an existing slug.

## Root cause / analysis
- Construction calculator SERPs are saturated. Head suites and a wave of 2025–2026 niche sites exist, with 5+ free pages per category. Result: zero `long_gap` candidates.
- The site's concrete page only computes geometric volume with one fixed bag constant. It has no waste %, no bag-size choice, no mix proportions and no footing/steps shapes, yet the zh page already has 56 impressions at average position 7.7.
- Four markets search for the same job, "grade → cement bags + sand + gravel per m³", under different standards:
  - zh: C grades under JGJ 55-2011;
  - id: K-225 under SNI 7394:2008;
  - es: f'c under ACI 211.1;
  - ar: 1:2:4 dry-volume method (×1.54).
- Japanese area searches need tsubo (400/121 m²) and five tatami sizes (1.62 m² advertising default). Chinese land use needs mu (10000/15 m²). `unit-converter` has none of these.
- File-based construction jobs fit vendored engines and are less commoditized as combined workflows:
  - PDF plan takeoff with pdfjs;
  - batch EXIF date/GPS stamping with exifr, the watermark tools and jszip;
  - photo report PDFs with pdf-lib.

## Solution
- Wrote `docs/seo/keywords/construction/2026-09-30-construction-tools-deep-scan.md` (Chinese). It covers:
  - current coverage and GSC;
  - competitor site map (global, niche, vendor, per-locale, file tools);
  - category matrix against Omni/ToolDone;
  - locale needs table with standards and defaults;
  - file-based jobs;
  - an upgrade list for existing slugs;
  - a P1–P3 pool and an explicit do-not-build list.
- Appended 14 rows to `docs/seo/keyword-daily-pool.tsv`:
  - all `defer` (10 `mid_covered`, 4 `head`), each validated at 15 fields;
  - three rows target existing slugs (concrete ×2 via capability upgrades, unit-converter) rather than new URLs.
- Registered the `construction/` folder in the keywords README and added a tracker decision-log row.

## Notes / boundaries
- Tiers are drafts from WebSearch top 5, not manual Google/Bing SERPs. Keyword Planner was not run.
- Mix-proportion numbers are commonly published reference values. Any page must say results depend on the design mix, trial batches or package yield.
- Do not build: fence/deck variant pages (doorway/scaled content risk), structural load design (safety liability), DWG viewing (closed format), estimating SaaS.
- Implementing the concrete upgrade requires `tool-coverage-pass`, ten-locale rewrites and `npm run verify:tool -- --slug=how-to-calculate-concrete`. New URLs need explicit user approval before `work-tasks/`.

[actions]
- Added `docs/seo/keywords/construction/2026-09-30-construction-tools-deep-scan.md`
- Appended 14 rows to `docs/seo/keyword-daily-pool.tsv`
- Updated `docs/seo/keywords/README.md` and `docs/seo/keyword-to-tool-tracker.md`
