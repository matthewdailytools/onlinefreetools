# 关键词 → 工具漏斗（运维操作）

从一批搜索词中：**找新工具创建**，或**融入并丰富已有工具**。  
事项跟进（非工具夹）：[`docs/seo/keyword-to-tool-tracker.md`](../../docs/seo/keyword-to-tool-tracker.md)  
可执行 Skill：[`.cursor/skills/keyword-to-tool-funnel/SKILL.md`](../../.cursor/skills/keyword-to-tool-funnel/SKILL.md)

**边界**：`work-tasks/` 只在真正创建某个工具时再建；分析进池 ≠ 自动立项。

---

## 1. 产物落点

| 产物 | 路径 | 说明 |
|---|---|---|
| 批次摘要 | `docs/seo/serp-batches/YYYY-MM-DD-<id>.md` | 脱敏；无完整 SERP HTML / 密钥 |
| 意图池（主结果表） | `docs/seo/keyword-daily-pool.tsv` | 每词一行：`verdict` 等 |
| 事项跟进 | `docs/seo/keyword-to-tool-tracker.md` | 快照 + 决策日志 |
| 策略说明 | `docs/seo/keyword-to-tool-funnel.md` | 漏斗与合规展开 |

`verdict`：`build`（新工具候选）· `absorb`（丰富已有 slug）· `defer` · `drop`。默认优先 **absorb**。

---

## 2. 有一批词时怎么开始

### 2.1 准备输入

词表至少含：**候选词**；建议另附 `locale` / `gl`（如 `en`/`us`）、种子词、相关搜索/PAA 备注。  
可直接交给 Agent，或先手写批次文件（模板见 [`docs/seo/serp-batches/README.md`](../../docs/seo/serp-batches/README.md)）。

### 2.2 触发分析（对 Agent 说清）

示例：

> 按 keyword-to-tool-funnel 分析下面这批词，写入 serp-batches + keyword-daily-pool，更新 tracker；先 absorb 优先。不要自动建 work-tasks。

然后粘贴词表，或给出已保存的批次路径。

### 2.3 验收分析产出

- [ ] `docs/seo/serp-batches/` 有本批 `.md`
- [ ] `keyword-daily-pool.tsv` 已追加行且每行有 `verdict`
- [ ] `keyword-to-tool-tracker.md` 快照 / 决策日志已更新
- [ ] **未**因本次分析新建 `work-tasks/`

### 2.4 拍板后的执行

| 池内结果 | 运维 / 产品动作 |
|---|---|
| `absorb` | 更新对应已有工具 title / FAQ / Use cases / IG（走既有 i18n + `tool-coverage-pass`）；不新建 URL |
| `build` | 人工确认 slug 后，再开 `work-tasks/{slug}/` → coverage 0b → 实现 → `build:site` + `lint:seo` |
| `defer` / `drop` | 留池即可；理由写在 `notes` 或 tracker 决策日志 |

发版与 IndexNow 仍按本手册 §4 / §4.1；本流程不替代 `build:site`。

---

## 3. 节奏建议

| 节奏 | 动作 |
|---|---|
| 按批 / 每天 | 词进池（约 10 条），0 新 URL |
| 每周 | 审 `verdict`；absorb 排期改文案；`build` 仅在确认创建时开 work-tasks（建议 ≤1–2） |
| 每 2–4 周 | GSC 复盘；结论回写 tracker |

---

## 4. 红线（运维须知）

- 禁止一词一 URL 日更；禁止 SERP 标题套空壳页  
- 禁止抄前排正文入库当文案  
- 禁止为「跟进本事项」自动创建 `work-tasks/`  
- 合规对齐：`.cursor/rules/seo-google-policy.mdc`、`tool-i18n-seo.mdc`

---

## 5. 相关链接

| 文档 | 用途 |
|---|---|
| [keyword-to-tool-tracker.md](../../docs/seo/keyword-to-tool-tracker.md) | 事项状态 |
| [keyword-to-tool-funnel.md](../../docs/seo/keyword-to-tool-funnel.md) | 策略展开 |
| [keyword-daily-pool.tsv](../../docs/seo/keyword-daily-pool.tsv) | 运行表 |
| [serp-batches/](../../docs/seo/serp-batches/) | 批次目录 |
| Skill `keyword-to-tool-funnel` | Agent 强制流程 |
| Skill `tool-coverage-pass` | 真正改/建工具时的覆盖门禁 |
| [inbound-link-outreach.md](./inbound-link-outreach.md) | 入站获链（另一条 SEO 运维线） |
