Date: 2026-08-07 07:23
Summary: Pausing to en+zh only is usually not better for Google/Bing SEO; tier localization quality instead of cutting indexed locales.

[question]
讨论问题：将本站多语言暂停，只保留en和中文，是否更有利于谷歌seo和bing seo

[try to solve]
**结论：从 Google / Bing 的 SEO 流量角度，一般不建议把十语砍成只留 en + zh。** 更稳妥的是 **en/zh 做 L1 必满，其余语种按质量分层「缓发或不进 sitemap」**，而不是对已索引 URL 做大规模下线。

### 为什么「少语 ≠ 更强 SEO」

1. **语种需求不会自动并到英文** — 西语/印尼语等用户用母语搜；没有对应页就丢该市场展示，不会把权重「汇总」给 en。
2. **爬取预算不是瓶颈** — 当前约 10 工具 × 10 语 ≈ 120 URL；即便 50 工具也才 ~500–600，远未到 Google 建议为 crawl budget 缩语的量级。
3. **hreflang 是资产** — 正确互指时各语是同一工具的语言变体；随意 404/砍链会伤已收录页面的国际定向信号。
4. **本站差异化含「多语言 + 教育式说明」** — 竞品靠数量铺量时，质量达标的十语是扩面杠杆，不是负担。

### Google / Bing 真正在意什么

- **Google**：people-first、Helpful Content；**scaled content abuse** 针对的是无实质编辑的机翻/同构批量页，不是「语种多」本身。伤流量的是**劣质多语**，不是 URL 数量。
- **Bing**：同样看内容质量与可索引性；hreflang 与 sitemap 逻辑与 Google 类似；IndexNow 只加速发现，**不能靠删语种换排名**。

### 何时才考虑缩语或暂停某语

| 信号 | 建议 |
|---|---|
| 某语长期几乎无展示，且文案像英模换皮 | 先修质量或**暂停该语新工具**，勿先删已索引 URL |
| 产能跟不上，十语 ≥3 轮做不完 | **分层运营**（L1 en/zh；L2 es/pt/id/de/fr；L3 ar/ja/ru 延后） |
| Manual Action 或弱语大面积「已抓取未编入索引」 | 对该语 noindex 或下线，修文案后再开 |
| 工具涨到数千 URL 且抓取明显滞后 | 再谈 crawl 优先级（当前远未到） |

### 比「全面暂停八语」更好的做法

- **新工具**：en + zh 先满 IG + 本地化；其余语 brief 就绪后再发；**未达标宁可不进 sitemap**（构建侧已有 `SITE_LANGS=zh,en` 能力）。
- **已上线八语**：优先重写提质，避免随意 404；若必须停某语，用 301 到同工具 en 仅作最后手段，并更新 hreflang。
- **裁决**：瓶颈在**本地化产能与 ar/ja/ru 母语质量**，不在 ~120 URL；凭感觉砍语通常是丢流量，不是优化。

[actions]
- 对照 `seo-google-policy.mdc`、`tool-i18n-localization.mdc`、sitemap 量级与既有 dev-log `2026-08-06-20-31` 做策略分析；未改代码
