# SEO 发布与监控清单

发版与上线后的检查项。权威序：Google（`seo-google-policy.mdc`）→ lint/代码 → rules → docs。展开见 [Google SEO 策略与落地](./2026-07-28-google-seo-strategy-implementation.md)。

## 发版前

1. `npm run build:site` — 生成各语言首页 / About、完整 `public/sitemap.xml`
2. `npm run lint:seo` — description / FAQ / YMYL 启发式校验
3. 确认 `public/og-image.png`、`favicon.ico`、`favicon.svg`、`apple-touch-icon.png` 存在
4. 抽查：默认语工具 URL 无 `/en` 前缀；`/en/tools/...` 应 301 到 `/tools/...`
5. 新工具：Doc2 §8.2 Checklist + IG ≥ 3（见主文档）；卡片见 [每工具方案](./2026-07-28-per-tool-dev-seo-plans.md)
6. 新工具/大改 i18n：`work-tasks/{slug}/03-locale-briefs.md` 已填；按 brief 重写非直译；本地化 ≥3 轮与禁词核查完成（见 `.cursor/rules/tool-i18n-localization.mdc`）。`lint:seo` 绿 ≠ 本地化完成。

`npm run deploy` 会通过 `predeploy` 自动执行 1–2。

## Google Search Console

1. 验证站点属性（若尚未验证）
2. 提交 `https://onlinefreetools.org/sitemap.xml`
3. 观察「网页索引」覆盖是否包含工具与多语言 URL
4. 有数据后查看 Generative AI 效果报告（若账户已开放）

## 质量抽查（防 Scaled content）

- 随机抽 2 种非英语语言 × 2 个工具：标题/FAQ/示例是否像给人看的**本地检索向**内容（非英模同构译文）
- 对照禁词/禁模式（粒度造词、错义借译、十语同一骨架等）
- 不合格则修文案，不要继续扩语种或批量新页

## 不做的事

- 不为查询变体批量建空壳 URL
- 不以 FAQ/HowTo 富结果为 KPI
- 不依赖 llms.txt 等非官方「GEO hack」
- 不按已归档的泛化超市清单盲目铺工具（见 [工具方向](./2026-07-28-tool-direction.md)）
