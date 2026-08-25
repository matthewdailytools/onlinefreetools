Date: 2026-08-07 13:48
Summary: Fixed image-compress crash from outdated renderToolExtraSections API args.

[question]
@terminals/1.txt:976-991 TypeError: Cannot read properties of undefined (reading 'faqPrefix')

[try to solve]
`imageCompressPage` still called `renderToolExtraSections` / `buildToolJsonLd` with the old signature (`faqPrefix`, etc.). The current API expects `{ lang, defaultLang, tool }`. Aligned the call sites with `image-format-converter`; refresh `/tools/image-compress` to verify.

[actions]
- Fixed `src/pages/imageCompressPage.ts` extra sections + JSON-LD wiring
