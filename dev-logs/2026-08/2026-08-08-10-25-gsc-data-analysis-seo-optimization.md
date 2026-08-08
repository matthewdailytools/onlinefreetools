Date: 2026-08-08 10:25
Summary: Analyzed GSC CSV in docs/seo/2026-08-08 and optimized title/description for top-impression locales.

[question]
根据seo文档下按日期存储了谷歌seo数据，根据数据分析，优化seo

[try to solve]
已读取 `docs/seo/2026-08-08/` GSC 导出（效果 8/2–8/5；索引 8/5），结论：**~283 展示、1 点击、CTR≈0.35%** — 站点极早期；瓶颈是 **SERP 标题/摘要与检索词对齐** 与索引管道，不是缩语种。

### 数据要点
- 高展示页：`/es/tools/square-feet`（42）、`/de/tools/ip-address`（39）、`/es|pt/tools/how-to-calculate-roi`
- 好排名零点击：`/ja/tools/how-to-calculate-marginal-revenue` 排名 ~8.8，查询「限界収入 求め方」~9.2
- 索引：150 已编入 / 80 未编入；devlogs 仍有展示 → 依赖已加的 noindex 部署
- 移动排名优于桌面，但均无点击 → title 前置检索词

### 已落地
- 新增 `docs/seo/README.md`、`docs/seo/2026-08-08-gsc-analysis-and-actions.md`
- 按 GSC 查询优化 title/description：`en/ja` 边际收益、`es` 平方英尺+ROI、`de` IP、`pt` ROI
- 同步 `scripts/site/i18n.mjs` 首页卡片 title；`SEO_PUBLISH_CHECKLIST` 增加 GSC 归档步骤

### 后续
部署 → `npm run indexnow:sitemap` → 2–4 周再导入 CSV 对比 CTR

[actions]
- docs/seo/README.md, docs/seo/2026-08-08-gsc-analysis-and-actions.md
- src/site/i18n/{en,ja,es,de,pt}.ts
- scripts/site/i18n.mjs
- docs/SEO_PUBLISH_CHECKLIST.md
