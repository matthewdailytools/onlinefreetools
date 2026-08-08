# 02 — 工具信息定稿

**状态**：`draft` | `ready` | `implemented`  
**slug**：`{tool-slug}`  
**路径**：`/tools/{tool-slug}`  
**主方向**：A / B / C  
**YMYL**：是 / 否  

> 填完且状态为 `ready` 后，再按 `.cursor/rules/tool-creation.mdc` 实现。  
> IG 依据：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：
- 用户真实任务：
- [ ] 竞品 SERP 前 5–10 都提供了什么？
- [ ] 它们没讲清什么？（≥3 条缺口）
- [ ] 我们补哪 ≥3 条增益？（§3.1 编号 + 页面章节）
- [ ] 长尾：合并进本页模块，还是满足 §3.3 后拆页？理由：
- [ ] 权威来源 URL：
- [ ] 行业/场景 Use case 文案草稿：
- [ ] 边界/失败案例草稿：
- [ ] 结果区信息如何落到可索引 Example / FAQ：
- [ ] Related / 主题内链计划（≥2）：

### 计划勾选的 §3.1 维度（至少 3）

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | |
| 2 | 边界/失败 | |
| 3 | 场景语境 | |
| 4 | 对照表 | |
| 5 | 权威引用 | |
| 6 | 本地隐私 | |
| 7 | 多语言 | |
| 8 | 数值示例 | |
| 9 | 主题内链 | |

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | |
| 场景与行业 | |
| 技术（包、Tier、本地处理） | |
| Title (en) | |
| Description 要点（步骤/公式 + 示例；≥120 字落地时再写满） | |
| Schema | WebApplication + BreadcrumbList（与可见文案一致） |
| FAQ 要点（≥3） | |
| Disclaimer / References | |
| related | |
| 验收 | `npm run lint:seo`；人工抽 zh 等 |
| 工期粗估 | |
| 本地化核查 | 见 `03-locale-briefs.md`（每语 brief + 禁词表 + ≥3 轮） |

## 交互规格（给实现用）

- 输入：
- 输出：
- 核心规则 / 算法：
- 失败与边界行为：
- 示例 Input → Output：
- **进页样例（必填）**：默认样例数据是什么；进页是否 `loadSample()` 自动跑出真实结果；与 H2 Example 如何对齐；若不能自动执行写操作，例外理由与安全演示路径（见 `.cursor/rules/tool-creation.mdc`「进页样例须实际跑出结果」）

## 页面模块清单（与 tool-creation 对齐）

- [ ] H1 + 一句话摘要
- [ ] 首屏工具交互区（含进页自动样例结果）
- [ ] How it works
- [ ] Formula / Rules（计算与转换类）
- [ ] Example（固定文案，与默认样例一致）
- [ ] Use cases（2–3）
- [ ] FAQ ≥3
- [ ] Related tools ≥2
- [ ] References ≥1（YMYL 建议 ≥2）
- [ ] Disclaimer（YMYL 必备）
- [ ] `03-locale-briefs.md` 已填（实现十语前）
