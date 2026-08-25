Date: 2026-08-07 12:53
Summary: Lightly added photo/image terms to EXIF tool titles across locales.

[question]
微调

[try to solve]
Per the prior recommendation, only titles and home-card short titles gained natural “photo” wording — no body stuffing:

- en: `Photo EXIF Viewer & Remover — …` (home short title synced)
- es/pt/id/fr/de/ja/ru/ar: title and `scripts/site/i18n.mjs` card names gained fotos / foto / photos / Fotos / photo (ja) / photo (ru) / photos (ar)
- zh: already had “image EXIF” in the title; unchanged
- `03-locale-briefs.md` Title direction aligned; `lint:seo --slug image-exif` OK; `build:site` run

[actions]
- Updated `src/site/i18n/{en,es,pt,id,fr,de,ja,ru,ar}.ts` titles
- Updated `scripts/site/i18n.mjs` home card titles/descs
- Updated `work-tasks/image-exif/03-locale-briefs.md`
- Ran `npm run lint:seo -- --slug image-exif` and `npm run build:site`
