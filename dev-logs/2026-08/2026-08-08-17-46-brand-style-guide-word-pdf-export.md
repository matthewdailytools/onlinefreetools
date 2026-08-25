Date: 2026-08-08 17:46
Summary: Added local Word (.docx) and PDF download export to brand-style-guide.

[question]
增加 导出为word和pdf的能力

[try to solve]
Added “Download Word” / “Download PDF” on the brand-style-guide toolbar; export after generating a guide. Word lazy-loads jsDelivr `docx@8.5.0` for `.docx`; PDF lays out with system fonts on Canvas (Chinese-capable) then packs multi-page via `pdf-lib@1.17.1`. Libraries load on demand; body text is not uploaded. Ten-locale buttons/status/FAQ updated; `lint:seo` OK. Hard-refresh, Generate/Sample first, then download.

[actions]
- Updated `src/pages/brandStyleGuidePage.ts`
- Updated `src/site/i18n/tools/brand-style-guide/*` + merge:tools
- References: docx + pdf-lib
