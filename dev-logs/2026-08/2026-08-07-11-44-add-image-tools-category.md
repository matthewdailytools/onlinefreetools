Date: 2026-08-07 11:44
Summary: Added a parallel home category “Image tools” (catalog category image).

[question]
单独启动一个类别：图片处理工具，与开发者工具平行

[try to solve]
Added catalog category `image`, parallel to `developer` / `calculator`.

- Moved `image-format-converter` into `image`
- Home “All tools” and sidebar gained `#cat-image` (Chinese home label for image-processing tools)
- Breadcrumb / JSON-LD map to `tool_category_image`; Schema `MultimediaApplication`
- Ten-locale home copy `home_cat_image*`; en/zh runtime `tool_category_image`
- `npm run build:site` passed

Later image tools only need `"category": "image"` in the catalog to land in this section.

[actions]
- Updated src/site/tools.ts, tool-catalog.json, toolContent.ts
- Updated scripts/site/tool-catalog.mjs, content-home.mjs, pages/home.mjs, i18n.mjs
- Updated src/site/i18n/en.ts, zh.ts
- Updated work-tasks/image-format-converter/02-tool-info.md
- Ran npm run build:site
