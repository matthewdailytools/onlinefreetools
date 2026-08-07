Date: 2026-08-07 11:44
Summary: Add parallel home category “Image tools” (catalog image)

[question]
单独启动一个类别：图片处理工具，与开发者工具平行

[try to solve]
新增 catalog 分类 `image`，与 `developer` / `calculator` 并列。

- `image-format-converter` 改归 `image`
- 首页「全部工具」与侧栏增加 `#cat-image`（中文「图片处理工具」）
- 面包屑 / JSON-LD 映射 `tool_category_image`；Schema `MultimediaApplication`
- 十语首页文案 `home_cat_image*`；en/zh 运行时 `tool_category_image`
- `npm run build:site` 已通过

后续图片类工具在 catalog 写 `"category": "image"` 即可进该区。

[actions]
- Updated src/site/tools.ts, tool-catalog.json, toolContent.ts
- Updated scripts/site/tool-catalog.mjs, content-home.mjs, pages/home.mjs, i18n.mjs
- Updated src/site/i18n/en.ts, zh.ts
- Updated work-tasks/image-format-converter/02-tool-info.md
- Ran npm run build:site
