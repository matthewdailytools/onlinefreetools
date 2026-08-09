# SEO 发布与监控清单

发版与上线后的检查项。权威序：Google（`seo-google-policy.mdc`）→ lint/代码 → rules → docs。展开见 [Google SEO 策略与落地](./2026-07-28-google-seo-strategy-implementation.md)。

## 发版前

1. `npm run build:site` — 生成各语言首页 / About、完整 `public/sitemap.xml`（发版以全量为准；**默认不含**关于/隐私/条款/联系；筛选见 [`ops/README.md`](../ops/README.md) §4.0，`npm run sitemap` / `sitemap:ui`）
2. `npm run lint:seo` — description / FAQ / YMYL / **related≥2 / References** 启发式校验
3. 确认 `public/og-image.png`、`favicon.ico`、`favicon.svg`、`apple-touch-icon.png` 存在
4. 抽查：默认语工具 URL 无 `/en` 前缀；首页/nav 工具链指向 `/tools/...`（非 `/en/tools/...`）；`/en/tools/...` 应 301 到 `/tools/...`
5. 新工具：Doc2 §8.2 Checklist + IG ≥ 3（见主文档）；卡片见 [每工具方案](./2026-07-28-per-tool-dev-seo-plans.md)
6. 新工具：根目录 `README.md`「工具清单 / Tools List」中英已更新（与 `tool-catalog.json` 一致）
7. 新工具/大改 i18n：`work-tasks/{slug}/03-locale-briefs.md` 已填；按 brief 重写非直译；本地化 ≥3 轮与禁词核查完成（见 `.cursor/rules/tool-i18n-localization.mdc`）。`lint:seo` 绿 ≠ 本地化完成。
8. **链接**：`related` ≥ 2 且同簇优先；References ≥ 1（YMYL ≥ 2）；抽查 Related 锚文本为工具 title。详见 [链接执行案](./seo/2026-08-09/link-strategy-execution.md)。

`npm run deploy` 会通过 `predeploy` 自动执行 1–2。

## Google Search Console

1. 验证站点属性（若尚未验证）
2. 提交 `https://onlinefreetools.org/sitemap.xml`
3. 观察「网页索引」覆盖是否包含工具与多语言 URL
4. 定期从 GSC 导出 CSV 至 `docs/seo/YYYY-MM-DD/`（见 [`docs/seo/README.md`](./seo/README.md)），并在同目录撰写 `01-analysis-review.md`、`02-next-strategy.md`、`03-todo.md`
5. 有数据后查看 Generative AI 效果报告（若账户已开放）

## Bing IndexNow

1. `npm run indexnow -- --check-key`（线上裸域 `/{key}.txt` 须 HTTP 200 且正文 = key；勿用 www）
2. **日常增量**（推荐）：
   - 内容/工具有改：`npm run indexnow -- --since-git origin/main --require-live-key`
   - 仅 sitemap 新增 URL：`npm run indexnow:incremental`（远程 sitemap − `.run/indexnow-state.json`）
3. 冷启动 / 换 key 后：全量一次（`npm run indexnow:remote-sitemap`），或 `npm run indexnow:baseline` 写入状态后再用增量
4. 新工具也可：`npm run indexnow -- --tool <slug>`；过滤：`--sitemap-only --include /tools/`
5. 逻辑与命令表见 [`ops/README.md`](../ops/README.md) §4.1；Bing Webmaster → IndexNow 核对接收（200/202 仅表示已收到）

## 质量抽查（防 Scaled content）

- 随机抽 2 种非英语语言 × 2 个工具：标题/FAQ/示例是否像给人看的**本地检索向**内容（非英模同构译文）
- 对照禁词/禁模式（粒度造词、错义借译、十语同一骨架等）
- 不合格则修文案，不要继续扩语种或批量新页

## 不做的事

- 不为查询变体批量建空壳 URL
- 不以 FAQ/HowTo 富结果为 KPI
- 不依赖 llms.txt 等非官方「GEO hack」
- 不按已归档的泛化超市清单盲目铺工具（见 [工具方向](./2026-07-28-tool-direction.md)）
