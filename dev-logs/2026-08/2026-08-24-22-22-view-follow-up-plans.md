Date: 2026-08-24 22:22
Summary: Consolidated follow-up plans from SEO tracker, GSC todo, tool inventory, and keyword funnel.

[question]
查看后续计划

[try to solve]
## 一、SEO 运营（P0，近期）

来源：`docs/seo/reviews/2026-08-12/03-todo.md`、`02-next-strategy.md`

**索引与规范（未完成）**
- 重新导出 GSC **28 天**效果报告（目标窗口 2026-08-26～09-09）
- `robots.txt` 补充 `Disallow: /api/`
- 确认 `/devlogs/*` 线上 `noindex`
- 信息页尾斜杠统一 canonical + 301（fr/ja/pt/zh 的 privacy/terms/contact）
- 展开 GSC：软 404 ×1、4xx ×1、规范冲突 ×1 的具体 URL 并修复
- 确认上轮部署：`build:site`、sitemap 提交、IndexNow incremental
- 可选：`npm run verify:r2:live`（CF 部署成功后）

**CTR / meta（已完成 2026-08-20，待观察）**
- ru image-merge、en schema-jsonld-generator、es how-to-calculate-volume、en how-to-calculate-npv 已改 title/description 并部署 IndexNow
- 下轮用 ≥28 天数据对比 CTR、点击、es sqft、ru image-merge

**观察期（P1，2–4 周）**
- ja 限界収入、es/pt ROI：长窗口有展示再下结论
- 图片簇多语未收录 → 按 slug 开 IG，禁止扫 110 URL
- de IP 排名仍 >70 → 德语文案 FAQ/Example 增补
- 图片类俄语/阿语查询 → absorb 进既有工具，不新建 doorway

---

## 二、关键词漏斗（持续节奏）

来源：`docs/seo/keyword-to-tool-tracker.md`、`2026-08-20-long-tail-gap-strategy.md`

**战略**：回避大词硬刚；主攻 `long_gap` / `locale_gap`；周建工具 ≤1–2；优先 absorb。

**待办**
- [ ] 周审：更新 `keyword-daily-pool.tsv` 各行 `verdict` + `competition_tier`
- [ ] 词根→AdWords：每周 3–5 slug，用 tool-keyword-roots 种子进 Keyword Planner，长尾入池并 absorb
- [ ] 池中 `absorb` 排期改既有 title/FAQ
- [ ] 里程碑 M2：连续 ≥2 周抽词/周审可复盘
- [ ] 里程碑 M7：首轮 Keyword Planner ≥3 slug 长尾入池并完成 absorb

**build 候选（仅词池，未建 work-tasks）**
- `safe-paste-cleaner`
- `magnet-pull-force-calculator`

**新鲜度管道（每周扫）**
1. GSC 新查询 → 优先 absorb
2. Trends + Planner 上升长尾
3. 社交/HN/产品发布新动词组 → 只保留浏览器可做工具意图

---

## 三、工具开发 backlog

来源：`docs/2026-08-08-tool-inventory-table.md`（123 已上线 / 13 P0 未开始）

**P0 未开始速查**
- `create-zip-file`
- `unzip-file`（catalog 已有 slug，清单表可能滞后）
- `safe-paste-cleaner`
- `ai-token-counter`
- `chat-export-converter`
- `ios-app-screenshot-resizer`
- `app-icon-generator-pack`
- `amazon-image-resizer`
- `favicon-and-pwa-icon-pack`
- `social-share-image-pack`

**work-tasks 状态 `ready` 且已在 catalog 的 SEO 工具簇**（brief 已定稿，工程/多语可按需推进）：csv-json、pdf-watermark、open-graph-preview、on-page-seo-checker、pdf-page-to-image-sizes、robots-txt-generator、utm-builder、hreflang-generator、unlock-pdf、pdf-to-markdown、archive-extractor、schema-jsonld-generator、sitemap-xml-generator、meta-serp-preview、meta-tag-generator。

**待 POC**：`local-bg-removal`、`ocr-to-text`、`audio-wav-mp3`

---

## 四、近期新增策略方向

- **Bing AI Summary**（2026-08-21）：不追 GIMP 类软件教程意图；进攻「在线/浏览器裁剪」等本站即答案查询；结构清晰 + IndexNow；不以「进摘要」为 KPI
- **新词组发现**（2026-08-21）：多源信号 → 去重 → 可交互任务 + SERP 缺口 → 进 funnel，禁止见新词就建页

---

## 五、建议优先级（本周）

1. **SEO P0 收尾**：robots / 尾斜杠 / devlogs noindex / GSC 异常 URL
2. **准备 28 天 GSC 导出**（8 月底～9 月初）
3. **关键词周审 + 3–5 slug AdWords 长尾**
4. **工具**：按产能从 P0 未开始中选 1 个（如 create-zip-file / safe-paste-cleaner）或推进 ready 簇 i18n

[actions]
- 汇总 `docs/seo/`、`work-tasks/`、工具清单与近期 dev-logs（未改业务代码）
