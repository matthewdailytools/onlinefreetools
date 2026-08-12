# 下一步 SEO 策略（2026-08-12）

> 基于 [`01-analysis-review.md`](./01-analysis-review.md) 复盘；可执行任务见 [`03-todo.md`](./03-todo.md)。  
> 上轮策略：[`../2026-08-08/02-next-strategy.md`](../2026-08-08/02-next-strategy.md)（CTR meta 原则仍有效；本轮叠加索引审计）。

---

## 战略优先级（P0 → P2）

### P0：索引消化 —「已抓取未编入」110（Drilldown 已定性）

**原则**：展示面已扩大，但 110 条「抓了不收」会拖慢整站信任与预算。全量列表见 [`04-crawled-not-indexed-sample.md`](./04-crawled-not-indexed-sample.md)；**禁止**为凑索引而批量改 thin 页或砍语种。

| 动作 | 依据 | 策略 |
|---|---|---|
| ✅ 110 URL 已分类 | Drilldown CSV | 84 工具（多语图片簇为主）= **消化期**；21 信息页 + 4 devlogs + 1 api = **须修** |
| robots / noindex | api + devlogs | `Disallow: /api/`；确认 `/devlogs/*` live `noindex` |
| 信息页尾斜杠 | 5 对重复 | 统一 canonical + 301 |
| 软 404 ×1、4xx ×1、规范冲突 ×1 | 仍缺 URL | GSC 展开具体 URL → 修或说明 |
| 内链 / IndexNow | 发现未编入已降至 3 | 从已收录同簇（如 ru image-merge）Related 引未收录语；仅 incremental |

**判定（已落）**：

- 主体 = **新语种 × 图片/品牌工具** → **消化期**，观察 2–4 周 + 内链。
- **devlogs / api / 尾斜杠 info** → 修规范与屏蔽，不等「自然收录」。
- 未出现「参数垃圾目录」形态 → **不**批量 noindex 工具页。

### P0：CTR / SERP 对齐（新高展示簇 + 旧优胜页）

**原则不变**：有展示、排名尚可、无点击 → **title 前置检索主词** + **description 首句重复意图**；不先扩 URL。

| 页面簇 | 依据（24h） | 策略 |
|---|---|---|
| `/ru/tools/image-merge`（及 image-merge 聚合） | 展示 Top1；乌克兰/俄语地理信号 | ru title/description 对齐「объединить / склеить фото онлайн」类主词；勿新建俄语变体 URL |
| `/tools/schema-jsonld-generator` | 14 展示；查询含 json ld schema generator | en title 前置 JSON-LD / Schema generator |
| `/es/tools/how-to-calculate-volume` | 12 展示；calcular el volumen | es title 前置「calcular volumen / calculadora」 |
| `/en/tools/how-to-calculate-npv` | 10 展示；how to calculate npv 排名 ~90 | en meta 对齐；排名深 → 中期再考虑 IG，不指望一次 meta 进前 20 |
| `/es/tools/square-feet` | 排名 **18.1**，仍 0 点击 | 维持上轮方向；长窗口看 CTR；若仍 0 点击再微调 title 前 30 字符 |
| `/de/tools/ip-address` | 仍 ~91 | 继续观察；达标再开 de FAQ/Example IG（上轮决策门） |

**上轮 P0（ja MR、es/pt ROI）**：本 24h 样本不足 → **冻结结论**，等 ≥14～28 天导出再走决策门。

### P1：语种产能分层（按本轮 GSC 修正）

| 层级 | 语言 | 策略 |
|---|---|---|
| L1 | en、zh | 满 IG；en 本轮有 NPV/Schema 展示，优先迭代这两簇 |
| L2 | es、de、pt、fr、ja、**ru** | **ru 升入 L2（有展示）**；优先 title/meta，再 brief |
| L3 | ar、id | ar 有 images-to-gif 展示，可观察；无稳定数据前不全量 IndexNow |

### P2：深度 IG / 漏斗

- 排名持续 >70 且长窗口仍有展示的簇（NPV、de IP、Schema）：按 `work-tasks/{slug}/03-locale-briefs.md` 第二轮检索向重写。
- 关键词发现仍走 [`../keyword-to-tool-funnel.md`](../keyword-to-tool-funnel.md)：日抽进池 ≠ 日建 URL；图片类查询优先 **absorb** 进既有 image-merge / crop / gif 的 Use cases / FAQ。

---

## 明确不做

| 动作 | 原因 |
|---|---|
| 用本轮 24h 数据判定上轮 meta 失败 | 窗口不可比；查询重叠仅 6 条 |
| 因「未编入 171」砍语种或批量删页 | 与「已编入 267」同步跳升，属上量消化 |
| 为 110 条未收录逐条建新 URL / doorway | scaled content / doorway 风险 |
| 以 FAQ 富结果为 KPI | 2026-05 已退役 |
| 全站 IndexNow 重推十语 | 预算浪费；用增量 |
| SERP 日抽后日建工具页 | 见 keyword-to-tool-funnel |

---

## 下轮导出与决策门

**建议时间**：2026-08-26～2026-09-09  
**强制**：效果报告选 **过去 28 天**（或至少 16 天，覆盖 08-08 改动后）；Coverage 再导一份。

**决策门**：

1. **已抓取未编入**：工具主体已定性为排队消化 → **索引 P0 降为「修噪声 + 观察」**；下轮看 110 是否下降，以及 api/devlogs/尾斜杠是否退出列表。
2. **28 天总点击 ≥5 或 CTR≥1%** → 复制有效 title 模式到同簇其他 locale。
3. **es sqft 28 天 CTR 仍为 0 且排名 ≤20** → 再改 title 前 30 字 + Use cases（非拆 URL）。
4. **ja MR / es ROI 在 ≥14 天窗口仍有展示且 CTR=0** → 启动对应 locale brief 第二轮（上轮门未废）。
5. **de IP 28 天排名仍 >70** → 启动 de IP IG 增补。
6. **ru image-merge 若进 Top 且 CTR=0** → 确认 ru meta 已改后，再评估 Example/FAQ 俄语检索向增补。

---

## 与站内规则对齐

- 权威序：`seo-google-policy.mdc` → `lint:seo` → rules → docs  
- 文案：`tool-i18n-localization.mdc`（重写非翻译）  
- 发布：`SEO_PUBLISH_CHECKLIST.md`  
- 归档约定：[`../README.md`](../README.md)（当前批次在 `docs/seo/reviews/YYYY-MM-DD/`）
