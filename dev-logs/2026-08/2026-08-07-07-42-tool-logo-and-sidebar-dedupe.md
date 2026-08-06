Date: 2026-08-07 07:42
Summary: Added site brand logo to the navbar and removed duplicate tool entries from the left sidebar.

[question]
工具增加logo，另外菜单上有工具重复了：http响应头

[try to solve]
1. **Logo**：新增 `/brand-logo.svg`，顶栏 `navbar-brand`（首页静态 + 工具页 Worker）展示 logo + 站名；`favicon.svg` 同步为同一标。
2. **侧栏去重**：原先各工具页把「当前工具锚点」prepend 后再展开全量 `TOOL_PAGES`，导致如「在线查看 HTTP 响应头」出现两次。改为共享 `buildToolSidebarItems`：每个工具只列一次，当前项高亮并可指向页内锚点。

[actions]
- `public/brand-logo.svg`、`public/favicon.svg`
- `src/pages/site/header.ts`、`scripts/site/components/header.mjs`、`public/styles/site.css`
- `src/pages/site/sidebar.ts` — `buildToolSidebarItems`
- 全部工具页改用去重侧栏
- `npm run build:site`、`npm run lint:seo`
