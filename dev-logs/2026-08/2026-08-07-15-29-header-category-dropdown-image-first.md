Date: 2026-08-07 15:29
Summary: Add top category dropdown; image editing tools first in nav order

[question]
顶部增加分类下拉菜单，调整分类顺序，图片编辑工具放在首位

[try to solve]
已实现全站顶栏「分类」Bootstrap 下拉，链到首页各分类锚点；分类顺序统一为 **图片编辑 → 开发者 → 计算器**。

改动要点：
- 新增 `src/site/categories.ts`、`scripts/site/categories.mjs` 作为分类顺序单一数据源
- 顶栏 `renderHeader`（运行时 + 静态构建）支持 `type: 'dropdown'` 导航项
- 首页顶栏与侧栏、首页 `#all-tools` 分区均按新顺序渲染
- 全部工具页改用 `buildToolPageNavItems`（含分类下拉）
- 十语 `nav_categories`；中文分类名改为「图片编辑工具」
- 已运行 `npm run build:site` 刷新 `public/_pages/*/index.html`

[actions]
- `src/site/categories.ts`, `src/pages/site/nav.ts`, `src/pages/site/header.ts`
- `scripts/site/categories.mjs`, `scripts/site/nav.mjs`, `scripts/site/components/header.mjs`
- `scripts/site/pages/home.mjs`, `scripts/site/components/content-home.mjs`
- `scripts/site/i18n.mjs`, `src/site/i18n/*.ts`, `src/pages/*Page.ts`
- `public/_pages/*/index.html`（build 产出）
