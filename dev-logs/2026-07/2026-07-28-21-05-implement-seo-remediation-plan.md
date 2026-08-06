Date: 2026-07-28 21:05
Summary: Implement Google SEO remediation plan (sitemap, About, FAQ/YMYL, catalog, lint)

[question]
Implement the Online Free Tools SEO 修改方案 as specified. Do NOT edit the plan file. Complete all to-dos.
随后：生成 devlogs。

[try to solve]
按方案三期落地，对齐 Google 现行规则（不依赖 FAQ/HowTo 富结果、避免 Scaled content / Doorway）：

Phase 1（入场券）
- `build-site.mjs` 自动生成完整 `sitemap.xml`（各语言首页 / About / 全部工具 / devlogs，含 xhtml hreflang 与 x-default）；约 171 条 URL
- 两处 layout（`src/pages/site/layout.ts`、`scripts/site/layout.mjs`）增加 `x-default`、favicon / apple-touch-icon
- 补齐 `public/og-image.png`、`favicon.ico`、`favicon.svg`、`apple-touch-icon.png`
- 首页改为由 `tool-catalog.json` 驱动，补全 percentage-change；分类改为 Calculators / Developer；链接改用 `withLangPath`
- Worker：`/en`、`/en/tools/:slug`、`/en/about` 301 到无前缀规范 URL；`toolRegistrar` 对默认语显式前缀同样 301

Phase 2（信任与内容）
- 新建多语言 About 页（Who / How / Why / 免责）+ footer 链接 + 写入 sitemap
- 抽取 `toolContent.ts`：可见 FAQ、YMYL disclaimer/references、相关工具互链
- 各工具页注入上述区块与 `BreadcrumbList` + `WebApplication` JSON-LD（不为富结果 KPI）
- en/zh 补齐 FAQ 与 YMYL 文案；其他语言 `t()` 回退英文

Phase 3（结构加固）
- 单一数据源 `src/site/tool-catalog.json`（runtime `tools.ts` + build `tool-catalog.mjs`）
- 扩展 `lint:seo`（description + FAQ 成对 + YMYL disclaimer）
- 更新 `docs/SEO_TOOL_RULES.md`、新增 `docs/SEO_PUBLISH_CHECKLIST.md`；`predeploy` 跑 `build:site && lint:seo`

验证：`npm run build:site`、`npm run lint:seo` 通过；`wrangler deploy --dry-run` 可打包。

[actions]
- 新增：`src/site/tool-catalog.json`、`scripts/site/tool-catalog.mjs`、`src/pages/site/toolContent.ts`
- 新增：`scripts/site/pages/about.mjs`、`docs/SEO_PUBLISH_CHECKLIST.md`、`docs/SEO_TOOL_RULES.md`（规则同步）
- 新增资产：`public/og-image.png`、`public/favicon.ico`、`public/favicon.svg`、`public/apple-touch-icon.png`、`public/favicon-32.png`
- 更新：`scripts/build-site.mjs`（buildAbout / buildSitemap）、`scripts/site/layout.mjs`、`src/pages/site/layout.ts`
- 更新：`scripts/site/components/content-home.mjs`、`scripts/site/pages/home.mjs`、footer（构建侧与运行时）
- 更新：`src/index.ts`、`src/site/toolRegistrar.ts`、`src/site/tools.ts`
- 更新：全部 `src/pages/*Page.ts`、`src/site/i18n/en.ts` / `zh.ts`、`scripts/site/i18n.mjs`
- 更新：`scripts/validate-tool-seo.mjs`、`package.json`（predeploy）、`docs/SEO_ANALYSIS_PLAN.md` 进度说明
- 本日志：`dev-logs/2026-07-28-21-05-implement-seo-remediation-plan.md`
