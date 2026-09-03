Date: 2026-09-04 00:35
Summary: Added missing client-only PDF scene tool pages, fixed devlog build ENOENT, and updated i18n descriptions so `lint:seo` / `verify:tool` pass.
Visibility: people
# 项目：PDF 工具页补齐与校验修复

[question]
User asked to re-initiate/redo PDF tool briefs and recreate the PDF tools in `/tools/*` following the PDF keyword planner doc, including strengthening IG and matching user intent, then implement tools automatically until all PDF tools were created.

[try to solve]
## Context
`verify:tool` and `npm run lint:seo` started failing after earlier partial generation: some tool pages were missing in `src/pages/`, the `build:site` devlogs step crashed with an `ENOENT` during cleanup, and SEO validation rejected tool meta descriptions that didn’t contain required “process/example” keywords per language.

## Process
1. Identified which tool slugs had catalog/i18n but lacked the corresponding `src/pages/*Page.ts` module.
2. Implemented missing client-side pages for the “PDF scene” set:
   - `combine-files-into-one-pdf`
   - `convert-html-to-pdf`
   - `add-text-to-pdf-file`
   - `write-pdf-document-online`
   - `check-pdf-a-compliance`
   - `compare-two-pdfs`
   - `make-pdf-flipbook`
   - `print-pdf`
3. Fixed `scripts/build-site.mjs` devlog cleanup to ignore `ENOENT` during concurrent/rep run of orphan-file cleanup.
4. Updated `src/site/i18n/tools/*/{lang}.ts` tool `*_description` strings (and then ran `npm run merge:tools`) to satisfy `scripts/validate-tool-seo.mjs`:
   - Ensure descriptions include at least one keyword from the per-language keyword list.
   - Ensure meta description length meets `MIN_DESCRIPTION_LENGTH` (>= 120).
5. Adjusted `check-pdf-a-compliance` page to define and call an explicit `loadSample()` wrapper (required by the prerender “tool-page HTML smoke” gate).
6. Re-ran `npm run lint:seo` and then `npm run verify:tool` for key slugs, using `CROSS_TOOL_UPDATE=1` once because the isolation gate detects cross-tool i18n edits.

## Root cause / analysis
- Missing tool page modules caused `verify:tool` wiring failures when prerendering tools.
- `scripts/build-site.mjs` used `fs.unlink()` on expected devlog HTML cleanup targets without guarding for concurrent runs, producing `ENOENT` and aborting site build.
- SEO validation (`validate-tool-seo.mjs`) checks per-language meta descriptions for required keyword presence and minimum length; the auto-generated `*_description` strings for some PDF tools (and a few adjacent tools) did not meet these constraints.
- The `check-pdf-a-compliance` smoke test expects a literal `loadSample()` function name in client script; the first implementation only ran sample generation via `makeSamplePdf()` without the required wrapper.
- Tool isolation failure occurred when running `verify:tool` after updating multiple tools’ i18n; the gate requires `CROSS_TOOL_UPDATE=1` for that situation.

## Solution
1. Added 8 missing tool page files under `src/pages/` (client-side, local processing only) and ensured export names match tool-catalog shards.
2. Patched `scripts/build-site.mjs` to ignore `ENOENT` when deleting orphan devlog HTML.
3. Strengthened tool meta descriptions via i18n shard edits, then regenerated merged dictionaries with `npm run merge:tools`.
4. Updated `checkPdfACompliancePage.ts` to include an explicit `loadSample()` function and call it on load, matching smoke tests.
5. Ensured `lint:seo` exits cleanly and verified tool pages with `verify:tool` (with `CROSS_TOOL_UPDATE=1`).

## Notes / boundaries
- This round only fully implemented the “PDF scene tool” subset (10/22 slugs): remaining PDF slugs listed in the planner still require tool-catalog shards, i18n, icons, and page implementations.
- The PDF/A compliance “check” page is intentionally a lightweight client-side heuristic checker, not a full verifier.

[actions]
- Updated: `src/pages/combineFilesIntoOnePdfPage.ts`
- Updated: `src/pages/convertHtmlToPdfPage.ts`
- Updated: `src/pages/addTextToPdfFilePage.ts`
- Updated: `src/pages/writePdfDocumentOnlinePage.ts`
- Updated: `src/pages/checkPdfACompliancePage.ts`
- Updated: `src/pages/compareTwoPdfsPage.ts`
- Updated: `src/pages/makePdfFlipbookPage.ts`
- Updated: `src/pages/printPdfPage.ts`
- Updated: `scripts/build-site.mjs`
- Updated: `src/site/tool-catalog.d/check-pdf-a-compliance.json`
- Updated: `src/site/i18n/tools/**/{lang}.ts` (tool `*_description` keyword/length fixes)
- Ran: `npm run merge:tools`
- Ran: `npm run lint:seo`
- Ran: `npm run verify:tool -- --slug=<tool>`
