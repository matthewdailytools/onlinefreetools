Date: 2026-08-09 19:30
Summary: S1 SEO 工具套餐（4 新工具 + website-headers 增强）全部按 tool-creation 与 coverage gate 流程实现完毕

[question]
立项按S1（第 1–5 项），然后实现，不要跳过规则和skill中的步骤

[try to solve]
按 `docs/2026-08-09-seo-webmaster-tools-survey.md` §5 S1 套餐逐项完成，全部遵循 tool-creation / tool-i18n-localization / tool-coverage-pass（0b→2→4 门禁）与 merge:tools / build:site / lint 链：

1. **meta-serp-preview**：catalog 分片、en 母版 + 9 语独立重写 i18n、页面（字符/像素估算 + 桌面/移动 SERP 预览）、SVG 图标；onpage 模块 primarySlugs + i18n-taxonomy upcoming 移除；coverage:gate 0b/2/4 全绿。
2. **schema-jsonld-generator**：FAQ/Article/Breadcrumb/Organization 四类 JSON-LD 生成（含「面包屑至少两级」错误键）；schema 模块 primarySlugs；10 语 i18n；0b/2/4 全绿。
3. **robots-txt-generator**：含 AI 爬虫 User-agent（GPTBot/ClaudeBot/Google-Extended 等）；crawl 模块 primarySlugs；英文 title 曾触发参数枚举目录腔门禁，改为单段动作向 H1「Robots.txt Generator — Manage Allow & Disallow Rules for AI Crawlers」后通过；10 语；0b/2/4 全绿。
4. **sitemap-xml-generator**：每行 URL 可选 lastmod/changefreq/priority（竖线分隔），URL 转义、lastmod 校验、>50k 拆分提示；crawl 模块 primarySlugs；crawl upcoming 十语置空；10 语；0b/2/4 全绿。
5. **website-headers 增强**：Worker 改为 `redirect: manual` 手动逐跳跟随（≤5 跳）返回 `redirects` 链；结果区新增「SEO header checks」子卡——Cache-Control 指令逐条解读、X-Robots-Tag noindex/nofollow/none/max-snippet 解读 + 阻断警示、Redirect 301/302 语义 + 跨主机提示；10 语新增 27 键，键集 62 全等（脚本校验）。

收尾：README 中英工具清单各 +4 新工具并更新 website-headers 描述；`tool-inventory-table.md` §6 新增 robots/sitemap 两行、修正 schema slug、73/74 标已上线，全表重编号至 1–161（脚本校验无重复无缺号），统计区已上线 114→118、P0 14→13；meta-serp-preview 从 P0 速查移除；schema-jsonld-generator 入链孤儿修复（meta-serp-preview related 加回链）。

验证：`npm run merge:tools`（119 tools / 10 locales）、`npm run build:site`（1420 URLs sitemap）、`npm run lint:seo`（Title/coverage OK、Link validator 0 inbound warn；15 条 legacy WARN 均为既有工具）、`npm run lint:tool-isolation`（无 TOOL_SLUG 跳过）。四个新工具 0b/1b/2b 轮次与各语「轮次2已重写 / 抽查语轮次3」标记均已写入各自 `work-tasks/{slug}/03-locale-briefs.md`。

[actions]
- 新增 `src/site/tool-catalog.d/{meta-serp-preview,schema-jsonld-generator,robots-txt-generator,sitemap-xml-generator}.json`
- 新增 `src/site/i18n/tools/{4 slug}/` 各 10 语分片；`src/pages/{4 Page}.ts`；`public/icons/tools/{4}.svg`
- 修改 `scripts/site/scenario-modules.mjs`（onpage/schema/crawl 模块）、`scripts/site/i18n-taxonomy.mjs`（upcoming 移除/置空）
- 增强 `src/tools/websiteHeaders.ts`（手动重定向链）与 `src/pages/websiteHeadersPage.ts`（SEO 头解读）；10 语 website-headers 分片 +27 键
- 更新 `README.md`、`docs/2026-08-08-tool-inventory-table.md`、`work-tasks/{4 slug}/` 与 `work-tasks/website-headers/` 03 简报
