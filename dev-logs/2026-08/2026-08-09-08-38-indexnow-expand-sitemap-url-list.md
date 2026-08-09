Date: 2026-08-09 08:38
Summary: IndexNow sitemap flow now expands <loc> into urlList instead of submitting the sitemap URL itself.

[question]
IndexNow 提交Sitemap逻辑应该是解析 出Sitemap的url list 进行提交，而不是直接提交sitemap

[try to solve]
已对齐 IndexNow 协议：只提交页面 `urlList`，不把 sitemap 地址当变更页。

1. Worker 新增 `POST /api/tools/indexnow/resolve-urls`：拉取同 host sitemap（含 sitemapindex 递归），展开 `<loc>` 为页面列表。
2. `submit` 在转发前若发现 sitemap 形态 URL，会先展开再 POST。
3. 工具页预览/提交前调用 resolve；粘贴 sitemap URL 或 sitemapindex XML 都会展开。
4. CLI 对 urlset 中仍像子 sitemap 的 loc 继续递归，并防御性剔除误入的 sitemap URL。
5. 十语 i18n / ops README 同步说明「解析后提交页面，不提交 sitemap 本身」。

CLI dry-run 确认：`public/sitemap.xml` → 页面 URL（如 `/`、`/zh/`），而非 `sitemap.xml`。

[actions]
- src/endpoints/indexnow.ts
- src/index.ts
- src/pages/indexNowPage.ts
- src/site/i18n/tools/indexnow/*.ts（+ merge:tools）
- ops/seo/submit-indexnow.mjs
- ops/README.md
