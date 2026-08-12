# 下一步 SEO 策略（2026-08-08）

> 基于 [`01-analysis-review.md`](./01-analysis-review.md) 复盘；可执行任务见 [`03-todo.md`](./03-todo.md)。

---

## 战略优先级（P0 → P2）

### P0：CTR / SERP 对齐（2 周内）

**原则**：有展示、有排名、无点击 → 先改 **title 前置检索主词** + **description 首句重复意图**，不先扩 URL、不先砍语种。

| 页面簇 | 依据 | 策略 |
|---|---|---|
| ja 限界収入 | 排名 ~8.8，查询「求め方」 | ✅ 已改 title；下轮看 CTR；若无起色补 FAQ 首问对齐「求め方」 |
| es 平方英尺 | 展示最高（42） | ✅ 已改 title 含 calculadora / sq ft；若排名仍 >15，补 Use cases 含「anuncio inmobiliario」 |
| es/pt ROI | 展示高、排名 >80 | ✅ 已改 title；下轮仍差则做 **locale brief 第二轮**（正文 How/Example，非仅 meta） |
| de IP | 展示 39、排名 ~89 | ✅ 已改 title/description；德国市场需 **内链 + 时间**；勿期望一次改 meta 即进前 20 |

### P0：索引管道

- 保持 sitemap 仅工具/站点页（无 devlogs）
- 新工具/大改 i18n 后 **IndexNow 增量提交**（`--since-git` 或 `indexnow:incremental`；勿每次全站 10 语重推）
- 21 页「已发现未编入」：**不加量**，用首页/Related tools 内链自然引爬

### P1：误收录治理

- devlogs：`noindex` + robots `Disallow` **双保险**；部署后下轮 GSC 应无 devlogs 展示
- About 等多语信息页有零星展示：正常；非工具页不必强行推索引

### P2：深度 IG（排名 >30 且无点击持续 4 周+）

- de/fr ROI、es BMI：按 `work-tasks/{slug}/03-locale-briefs.md` 做第二轮检索向重写
- 不拆 doorway 长尾 URL；场景写进 Use cases / FAQ

---

## 明确不做

| 动作 | 原因 |
|---|---|
| 砍十语只留 en/zh | GSC 展示已覆盖 de/es/pt/ja 等；缩语丢入口 |
| 为 GSC 查询批量建新 URL | doorway / scaled content 风险 |
| 以 FAQ 富结果为 KPI | 2026-05 已全站退役 |
| 未达标语进 sitemap「凑数」 | 劣质多语比多语数量更伤信任 |
| **SERP/关键词日抽后日建工具页** | 见 [`../keyword-to-tool-funnel.md`](../keyword-to-tool-funnel.md)：日抽词只进意图池；周建 1–2 个满 IG 工具；长尾优先 absorb |

### 关键词发现（叠加，不推翻 P0）

- **独立项跟进**：[`../keyword-to-tool-tracker.md`](../keyword-to-tool-tracker.md)
- 主词源可为批量 **Google SERP**（仅分析）；运行表 [`../keyword-daily-pool.tsv`](../keyword-daily-pool.tsv)
- **日抽约 10 候选进池 ≠ 日建 10 URL**；上线节奏仍为每周 1–2 工具 + 既有页 CTR/IG 收割
- 漏斗说明：[`../keyword-to-tool-funnel.md`](../keyword-to-tool-funnel.md)

---

## 语种产能分层（与 GSC 对齐）

| 层级 | 语言 | 策略 |
|---|---|---|
| L1 | en、zh | 每新工具必满 IG + 本地化；GSC 有数据后优先迭代 |
| L2 | es、de、pt、fr、ja | **本轮 GSC 有展示** — 优先 title/meta，再正文 brief |
| L3 | ar、id、ru | 有 brief 再发；无数据前不急于全量推 IndexNow |

---

## 下轮导出与决策门

**建议时间**：2026-08-22～2026-09-05（间隔 2–4 周，GSC 效果选 ≥28 天）

**决策门**：

1. **ja MR CTR > 0%** → 复制「title 前置 + description 首句」到其他 L2 高排名零点击页  
2. **整体点击仍 ≤2** → 抽查 3 页 Rich Results / 实际 SERP snippet（是否被改写）  
3. **未编入索引仍 >60 且工具数未增** → 审计 6 条「已抓取未编入」具体 URL  
4. **de IP 排名仍 >70** → 启动 de IP 页 IG 增补（VPN 场景 FAQ、Example 德文化）

---

## 与站内规则对齐

- 权威序：`seo-google-policy.mdc` → `lint:seo` → rules → docs  
- 文案改动：`tool-i18n-localization.mdc`（重写非翻译；meta 对齐 brief 检索词）  
- 发布：`SEO_PUBLISH_CHECKLIST.md`
