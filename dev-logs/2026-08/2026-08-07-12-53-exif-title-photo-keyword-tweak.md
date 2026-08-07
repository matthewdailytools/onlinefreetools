Date: 2026-08-07 12:53
Summary: Lightly add photo/image terms to EXIF tool titles across locales.

[question]
微调

[try to solve]
按上一轮建议，仅在 title / 首页卡片短标题中自然带入「照片/photo」类词，不改正文堆砌：

- en：`Photo EXIF Viewer & Remover — …`（首页短标题同步）
- es/pt/id/fr/de/ja/ru/ar：title 与 `scripts/site/i18n.mjs` 卡片名对应加上 fotos / foto / photos / Fotos / 写真 / фото / الصور
- zh：原已有「图片 EXIF」，未改
- `03-locale-briefs.md` Title 方向已对齐；`lint:seo --slug image-exif` OK；已 `build:site`

[actions]
- Updated `src/site/i18n/{en,es,pt,id,fr,de,ja,ru,ar}.ts` titles
- Updated `scripts/site/i18n.mjs` home card titles/descs
- Updated `work-tasks/image-exif/03-locale-briefs.md`
- Ran `npm run lint:seo -- --slug image-exif` and `npm run build:site`
