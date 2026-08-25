Date: 2026-08-08 20:50
Summary: Implemented pdf-page-to-image-sizes tool (#62) with full i18n, gates green, inventory updated.

[question]
Implement full `pdf-page-to-image-sizes` in /Users/xuli/vscodeai/onlinefreetools.

## Spec
- slug: pdf-page-to-image-sizes, category: **image**, #62
- Title: "PDF Page to Image Sizes — Multi-Size Export Pack"
- Tech: pdfjs-dist@4.10.38 lazy (like pdf-to-jpg) + Canvas contain-fit into target sizes + fflate@0.8.2 ZIP of JPEGs.
- Page number input (default 1, 1-based).
- Preset sizes (document in Rules): 
  - 1080x1080 (instagram-square)
  - 1200x630 (og-facebook)
  - 1280x720 (hd-landscape)
  - 1080x1920 (story-portrait)
- Render selected PDF page once at good scale, then drawImage contain-centered onto each size canvas (white or transparent→white for JPEG), toBlob jpeg 0.9, zip as `page-{n}-{WxH}.jpg`.
- related: ["pdf-to-jpg","images-to-pdf"]
- loadSample(): 1-page sample PDF via pdf-lib → export all sizes → ZIP downloadable
- Privacy, 25MB soft warn, encrypted errors

## Create catalog, icon, pdfPageToImageSizesPage.ts, 10 i18n full independent.

## Update 02/03 1b+2b (en,zh,es,ja), inventory #62, README

## Gates until green:
npm run merge:tools && npm run coverage:gate -- --slug=pdf-page-to-image-sizes --phase=all && npm run build:site && npm run lint:seo && CROSS_TOOL_UPDATE=1 TOOL_SLUG=pdf-page-to-image-sizes npm run lint:tool-isolation

No plan/commit. 中文 brief. Chinese comments on functions.

Also double-check inventory lines 52-62 are all 已上线; if any still 未开始, fix them.

[try to solve]
Shipped full `pdf-page-to-image-sizes` (inventory #62):

**Page / logic** (`src/pages/pdfPageToImageSizesPage.ts`)
- Lazy pdfjs-dist@4.10.38; selected page rendered once at 2×
- Canvas contain-centered into four presets (1080², 1200×630, 1280×720, 1080×1920), white-bg JPEG 0.9
- fflate@0.8.2 packs `page-{n}-{WxH}.jpg` → `page-{n}-sizes.zip`
- Page number input (default 1); 25 MB soft warn; readable encrypted/corrupt errors
- `loadSample()` on enter: pdf-lib one-page sample → export → Download ready

**Registration / copy**
- `src/site/tool-catalog.d/pdf-page-to-image-sizes.json` (category: image; related: pdf-to-jpg, images-to-pdf)
- `public/icons/tools/pdf-page-to-image-sizes.svg`
- Independent ten-locale i18n under `src/site/i18n/tools/pdf-page-to-image-sizes/{en,zh,es,ar,pt,id,fr,ja,ru,de}.ts`
- `03-locale-briefs.md` 1b/2b multi-round notes; `README.md` EN/ZH entries; inventory #62 → **shipped · P2**

**Inventory #52–62 check**: #52–#61 were already “shipped”; only #62 moved from “not started · P2” to “shipped · P2”.

**Gates**: `merge:tools`, `coverage:gate --phase=all`, `build:site`, `lint:seo`, `lint:tool-isolation` (`CROSS_TOOL_UPDATE=1`) all passed.

[actions]
- src/site/tool-catalog.d/pdf-page-to-image-sizes.json
- src/pages/pdfPageToImageSizesPage.ts
- public/icons/tools/pdf-page-to-image-sizes.svg
- src/site/i18n/tools/pdf-page-to-image-sizes/*.ts (10 locales)
- work-tasks/pdf-page-to-image-sizes/03-locale-briefs.md
- docs/2026-08-08-tool-inventory-table.md
- README.md
