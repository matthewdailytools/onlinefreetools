Date: 2026-08-07 15:35
Summary: Header nav shows category names with tool links in each dropdown

[question]
直接写分类名，然后下拉就是工具名和链接

[try to solve]
顶栏由单一「分类」下拉改为三个并列下拉，**标签即分类名**（图片编辑工具 / 开发者工具 / 计算器），子项为 catalog 中该分类下各工具的**名称 + 链到 /tools/{slug}**。

- `buildCategoryNavDropdowns`：`src/pages/site/nav.ts`（运行时工具页）、`scripts/site/nav.mjs`（静态首页）
- 工具页与首页均已重建；图片编辑仍排第一

[actions]
- `src/pages/site/nav.ts`, `scripts/site/nav.mjs`
- `npm run build:site` → `public/_pages/*/index.html`
