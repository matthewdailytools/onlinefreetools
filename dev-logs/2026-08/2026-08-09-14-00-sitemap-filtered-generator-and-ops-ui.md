Date: 2026-08-09 14:00
Summary: Added filtered sitemap generation (lang/info/category/scenario/subject) plus a local password-gated ops UI.

[question]
sitemap的生成除了全量生成外，提供语言选择，相关页面选择(隐私，关于，联系，条款页面)，以及按类别，场景（where2use），工具类型选择，提供一个生成操作页面，进入密码为345621

[try to solve]
已支持全量之外的筛选生成，并提供本地密码门操作页（勿对公网暴露）。

**用法**
- CLI：`npm run sitemap`（全量 → `public/sitemap.xml`）；筛选示例见 `ops/README.md` §4.0
- 操作页：`npm run sitemap:ui` → http://127.0.0.1:8791/ ，进入密码 `345621`（可用 `SITEMAP_UI_PASSWORD` 覆盖）
- 筛选默认写入 `public/sitemap.filtered.xml`；加覆盖选项才写主 sitemap
- `npm run build:site` 仍走全量 `buildFullSitemap()`（当前约 140 entries × 10 langs = 1400 URLs）

**筛选语义**
- 语言 / 信息页（about、privacy、terms、contact）/ 场景 leaf / 工具类型 leaf / catalog category 可勾选
- 工具过滤：category ∪ scenario ∪ subject 为 OR；三维皆空（或场景/类型全选）= 全部工具
- 场景/类型「清空」= 不输出对应 leaf，且不按该维过滤工具

**实现**
- 核心：`scripts/site/sitemap.mjs`
- CLI：`ops/seo/generate-sitemap.mjs`
- UI：`ops/seo/sitemap-ui.mjs` + `sitemap-ui.html`（仅绑定 127.0.0.1）

[actions]
- Added `scripts/site/sitemap.mjs`; wired `scripts/build-site.mjs` → `buildFullSitemap`
- Added `ops/seo/generate-sitemap.mjs`, `ops/seo/sitemap-ui.mjs`, `ops/seo/sitemap-ui.html`
- package.json scripts: `sitemap`, `sitemap:ui`
- Updated `ops/README.md` §4.0; gitignore `public/sitemap.filtered.xml`
