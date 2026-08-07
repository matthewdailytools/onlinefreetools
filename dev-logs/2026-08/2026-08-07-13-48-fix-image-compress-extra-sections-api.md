Date: 2026-08-07 13:48
Summary: Fix image-compress page crash in renderToolExtraSections (wrong API args).

[question]
@terminals/1.txt:976-991 TypeError: Cannot read properties of undefined (reading 'faqPrefix')

[try to solve]
`imageCompressPage` 仍按旧签名调用 `renderToolExtraSections` / `buildToolJsonLd`（传 `faqPrefix` 等），当前 API 需要 `{ lang, defaultLang, tool }`。已对齐 `image-format-converter` 的写法；刷新 `/tools/image-compress` 即可。

[actions]
- Fixed `src/pages/imageCompressPage.ts` extra sections + JSON-LD wiring
