Date: 2026-08-08 19:44
Summary: Shipped inventory #50–51 merge-pdf and split-pdf with coverage gates, ten-locale i18n, and build:site.

[question]
立项并串行实现 merge-pdf / split-pdf（#50–51）— Implement the plan as specified.

[try to solve]
Completed both tools serially under tool-coverage-pass:

1. Parallel briefs + `coverage:gate --phase=0b` for `merge-pdf` and `split-pdf`.
2. Implemented `merge-pdf` (pdf-lib CDN, reorder list, sample auto-merge) through phase 2/4, ten locales, `build:site`, `lint:seo`.
3. Implemented `split-pdf` (every page / ranges, fflate ZIP for multi-file, sample auto-split) through the same gates.
4. Updated README and inventory #50–51 → live; catalog now 46 tools; both `coverage:gate --phase=all` green.

[actions]
- work-tasks/merge-pdf/, work-tasks/split-pdf/
- src/pages/mergePdfPage.ts, src/pages/splitPdfPage.ts
- src/site/tool-catalog.d/{merge,split}-pdf.json + i18n shards ×10
- public/icons/tools/{merge,split}-pdf.svg
- README.md, docs/2026-08-08-tool-inventory-table.md
- npm run merge:tools / coverage:gate / build:site / lint:seo
