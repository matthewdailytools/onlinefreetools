**工具页面 SEO 规则（默认）**

> **权威序**：Google 官方（`.cursor/rules/seo-google-policy.mdc`）→ `lint:seo` / 运行代码 → `.cursor/rules/*` → 本文与其它 docs。  
> 完整策略展开：[Google SEO 策略与落地](./2026-07-28-google-seo-strategy-implementation.md)。  
> 工具选型：[工具方向](./2026-07-28-tool-direction.md)。  
> 逐工具卡片：[每工具开发与 SEO 方案](./2026-07-28-per-tool-dev-seo-plans.md)。

- **目标**：确保每个工具页面不仅能被发现，还对用户真正有用（people-first），并符合 Google Search 现行 spam / helpful 政策。

- **meta 描述（`tool_*_description`）必须包含**：
  - 工具的计算 / 处理步骤或所用的公式（计算过程），以及
  - 至少一个简短的示例或应用场景（逻辑案例）。
  - 建议长度 **≥ 120 字符**（Bing 等搜索引擎会将过短 meta 描述标记为 SEO 问题；原先 ≥ 80 字符下限不足）；按语言本地化「计算/步骤/公式/示例」类关键词。

- **页内可见 FAQ（不为富结果 KPI）**：
  - 每个工具至少 3 组 `tool_*_faq_qN` / `tool_*_faq_aN`（N=1…）。
  - 问答必须渲染在页面正文中，用户可见；**不要**把 FAQPage / HowTo 富结果当作成功指标：FAQ 富结果 **2026-05-07** 全站退役、HowTo **2023-09** 桌面弃用；schema 仍有效可保留但不产出富结果（见 `.cursor/rules/seo-google-policy.mdc`）。
  - 禁止仅对爬虫可见、对用户隐藏的问答（cloaking）。

- **YMYL 工具**（目录中 `ymyl: true`，如 BMI / ROI / 边际收益）：
  - 必须提供 `tool_*_disclaimer`；建议提供 `tool_*_references`。
  - About 页需说明 Who / How / Why 与免责。

- **扩容红线（Scaled content / Doorway）**：
  - 禁止为每个查询变体批量建空壳页；禁止无增量机翻堆页。
  - 新工具必须是可交互、有增量说明的真工具，并写入 `src/site/tool-catalog.json`。
  - 禁止无行业/场景语境的泛化铺量（见工具方向红线）。

- **技术约定**：
  - 默认语（en）规范 URL **无**语言前缀；`x-default` 指向该规范 URL。
  - Sitemap 由 `npm run build:site` 自动生成，发布前必须构建。
  - JSON-LD 仅使用与可见内容一致的 `BreadcrumbList` / `WebApplication` 等。

- **验证**：`npm run lint:seo` → `scripts/validate-tool-seo.mjs`（description 关键词 + FAQ 成对 + YMYL disclaimer）。
- **本地化**：各语言须按当地检索与用语习惯重写，禁止英模批量直译；生成后至少 3 轮核查再定稿（见 `.cursor/rules/tool-i18n-localization.mdc`）。`lint:seo` 通过不等于本地化完成。
- **工作流**：改工具或翻译后先跑 `lint:seo`；发版前跑 `build:site && lint:seo`。
