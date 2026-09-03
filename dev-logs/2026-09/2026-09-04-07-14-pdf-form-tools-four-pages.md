Date: 2026-09-04 07:14
Summary: Implemented four local PDF form tools (fill, make fillable, create, edit fields) with pdf-lib, pdfWorkUi, and ten-locale shards; merge/build left for the parent ship step.
Visibility: project

[question]
Create these 4 tools completely (catalog shard JSON, icon SVG under public/icons/tools/, Page.ts, and ALL 10 locale i18n shards): fill-out-pdf-form, make-pdf-fillable, create-pdf-form, edit-pdf-form-fields. Do NOT run merge:tools or build:site.

[try to solve]
## Context
Four PDF-form scene tools were already briefed as ready. This pass writes engineering files only: catalog shards, icons, Page.ts, and ten-locale i18n. Related links stay inside this cluster.

## Process
Followed add-text-to-pdf-file / pdfWorkUi: `page.style` opts, pdf-lib 1.17.1 CDN, progress + canvas preview, literal `loadSample()` on entry. Fill-out detects AcroForm fields and links to make-fillable when none exist. Make-fillable adds X/Y/W/H text fields or N defaults. Create starts blank with named text/checkbox fields. Edit lists names, renames via `acroField.setPartialName`, or removes.

## Root cause / analysis
These slugs were missing from catalog/pages/i18n. User asked not to merge or build, so registry and home HTML stay stale until the parent ship step.

## Solution
Wrote 4 catalog shards, 4 SVG icons, 4 Page.ts files, and 40 i18n shards. Chinese meta descriptions were lengthened to ≥120 characters with 过程/步骤/示例.

## Notes / boundaries
Did not run `merge:tools` or `build:site`. Did not edit other tools' shards. README and generated i18n remain for the ship pass.

[actions]
- Added src/site/tool-catalog.d/{fill-out-pdf-form,make-pdf-fillable,create-pdf-form,edit-pdf-form-fields}.json
- Added public/icons/tools/{same four}.svg
- Added src/pages/{fillOutPdfForm,makePdfFillable,createPdfForm,editPdfFormFields}Page.ts
- Added src/site/i18n/tools/{four slugs}/{en,zh,es,ar,pt,id,fr,ja,ru,de}.ts
