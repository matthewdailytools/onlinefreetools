Date: 2026-08-06 23:59
Summary: The tool-page sidebar now starts closed on mobile while retaining normal desktop behavior.

[question]
移动端左边菜单在工具页面需要默认关闭，目前是默认打开

[try to solve]
已修复：工具页面的左侧菜单现在在移动端默认关闭，点击菜单按钮仍可正常打开；桌面端默认状态不变。窗口尺寸切换后，移动端与桌面端的菜单状态也不会互相干扰。

已通过站点构建、SEO 校验和编辑器 lint 检查。

[actions]
- Updated `src/pages/site/layout.ts` to add a mobile-only collapsed state and responsive toggle behavior.
- Ran `npm run build:site` and `npm run lint:seo`.
