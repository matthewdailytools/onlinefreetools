Date: 2026-08-07 14:58
Summary: Added common dimension and target-KB presets to the image-compress UI.

[question]
http://localhost:8787/zh/tools/image-compress 增加常用压缩到尺寸和大小）选项

[try to solve]
Added a “Common presets” dropdown on the image-compress page:

- **Scene combos**: web HD 1920; web light 1280+200KB; email 1280+100KB; social 1080+150KB; forms 1600+300KB; thumb 800+50KB; small avatar 512+30KB (sets max edge / target size / quality together)
- **Max edge only**: 1920 / 1280 / 1200 / 1080 / 800 / 640
- **Target size only**: 500 / 200 / 100 / 50 / 30 KB

Selection writes into the controls; if a source image is already loaded, compression re-runs automatically. Manual parameter edits clear the preset selection. Ten-locale UI strings added.

[actions]
- Updated `src/pages/imageCompressPage.ts`
- Updated `src/site/i18n/{en,zh,es,pt,id,fr,ja,ru,de,ar}.ts`
- Ran `npm run lint:seo`
