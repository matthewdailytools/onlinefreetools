# SEO 发布与监控清单

发版与上线后的检查项（对应 2026 SEO 修改方案）。

## 发版前

1. `npm run build:site` — 生成各语言首页 / About、完整 `public/sitemap.xml`
2. `npm run lint:seo` — description / FAQ / YMYL 启发式校验
3. 确认 `public/og-image.png`、`favicon.ico`、`favicon.svg`、`apple-touch-icon.png` 存在
4. 抽查：默认语工具 URL 无 `/en` 前缀；`/en/tools/...` 应 301 到 `/tools/...`

`npm run deploy` 会通过 `predeploy` 自动执行 1–2。

## Google Search Console

1. 验证站点属性（若尚未验证）
2. 提交 `https://onlinefreetools.org/sitemap.xml`
3. 观察「网页索引」覆盖是否包含工具与多语言 URL
4. 有数据后查看 Generative AI 效果报告（若账户已开放）

## 质量抽查（防 Scaled content）

- 随机抽 2 种非英语语言 × 2 个工具：标题/FAQ/示例是否像给人看的本地内容
- 不合格则修文案，不要继续扩语种或批量新页

## 不做的事

- 不为查询变体批量建空壳 URL
- 不以 FAQ/HowTo 富结果为 KPI
- 不依赖 llms.txt 等非官方「GEO hack」
