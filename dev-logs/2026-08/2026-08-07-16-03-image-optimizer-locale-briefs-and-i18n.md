Date: 2026-08-07 16:03
Summary: Created image-optimizer locale briefs (briefs-ready) and inserted ten-locale i18n keys after image-compress.

[question]
You are helping implement the image-optimizer tool for onlinefreetools (Cloudflare Pages site).

Create TWO files by writing their full contents:

## 1) `work-tasks/image-optimizer/03-locale-briefs.md`
Status: `briefs-ready`. Slug: `image-optimizer`. Mother tongue: en.
Fill briefs for: en, zh, es, ar, pt, id, fr, ja, ru, de.
Search intent (NOT "advanced codec"): image optimizer / 图片优化; differentiate from image-compress.
Include shared ban-word checklist (unchecked), per-locale fields, round checkboxes unchecked.

## 2) Provide FULL en + 9 locale TypeScript property blocks with prefix `tool_image_optimizer_`, preferring direct write into `src/site/i18n/{lang}.ts` after image-compress / before image-crop.

[try to solve]
已写入 `work-tasks/image-optimizer/03-locale-briefs.md`（状态 `briefs-ready`），十语 brief 含检索词、结果向 Title/H1、按钮短词、SERP 摘录；共用禁词表与轮次框未勾选。

已在十个 `src/site/i18n/{lang}.ts` 于 `tool_image_compress_faq_a6` 与 `tool_image_crop_*` 之间插入完整 `tool_image_optimizer_*` 键（每语约 64 键）：title/description/article、引擎与编解码 UI、对照/统计/警告错误态、How/Rules/Example/Use cases、FAQ×6（题序按语种变化）。EN title：`Image Optimizer — WebP, AVIF & MozJPEG Local`；ZH title：`图片优化 — 更小体积，可调编码器，本地完成`。正文区分 Canvas 压缩页与本页 WASM 优化，未把 jsquash 等包名当卖点。同步更新了 `02-tool-info.md` 中 Locale briefs 状态勾选。首页 `scripts/site/i18n.mjs` 短描述尚未加（实现 catalog 时再同步）。

[actions]
- Created `work-tasks/image-optimizer/03-locale-briefs.md`
- Updated `work-tasks/image-optimizer/02-tool-info.md` (briefs status)
- Appended `tool_image_optimizer_*` keys in `src/site/i18n/en.ts`, `zh.ts`, `es.ts`, `ar.ts`, `pt.ts`, `id.ts`, `fr.ts`, `ja.ts`, `ru.ts`, `de.ts`
