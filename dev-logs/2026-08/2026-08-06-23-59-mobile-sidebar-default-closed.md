Date: 2026-08-06 23:59
Summary: The tool-page sidebar now starts closed on mobile while retaining normal desktop behavior.

[question]
移动端左边菜单在工具页面需要默认关闭，目前是默认打开

[try to solve]
Fixed: the tool-page left sidebar now starts closed on mobile; the menu button still opens it normally. Desktop default is unchanged. After viewport resize, mobile and desktop menu states no longer interfere with each other.

Passed site build, SEO validation, and editor lint checks.

[actions]
- Updated `src/pages/site/layout.ts` to add a mobile-only collapsed state and responsive toggle behavior.
- Ran `npm run build:site` and `npm run lint:seo`.
