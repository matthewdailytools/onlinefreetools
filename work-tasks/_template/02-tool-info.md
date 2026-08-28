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

## 清单前检索覆盖优化（生成页面模块清单前必做）

> 规则：`.cursor/rules/tool-i18n-localization.mdc`「清单前检索覆盖优化」。未填本表不得勾下方「页面模块清单」，不得标 `ready`。

| 项 | 结论 / 落点 |
|---|---|
| 日期 | |
| slug 结论 | 保留 `…` / 已改为 `…`（理由） |
| 主检索词 → title/H1 | （写出 H1 中对应措辞） |
| 次要关键词 → desc / FAQ / Use cases | （逐条） |
| 用户搜索习惯判断 | （当地人会怎么搜；是否口语/结果向） |
| 优化摘要 | （相对初稿改了什么） |
| [ ] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

> 填完后验收：`npm run coverage:gate -- --slug={tool-slug} --phase=0b`（须绿才可标 `ready` / 勾下方页面模块清单）。

## 用户意图审查（标 ready 前必做）

> 规则：`.cursor/rules/work-tasks-tool-brief.mdc`「用户意图审查」。对照 `00` 原话 + 主检索词用户任务。未填不得 `ready`。

| 项 | 结论 |
|---|---|
| 日期 | |
| 总判 | 满足 / 部分满足 / 超出 / 有意不满足（一句） |
| 主词搜索者任务 | （打开页要完成什么，不是「怎么点本站按钮」） |
| 满足之处 | |
| 超出 / 应划边界 | （次 UI 是否抢首屏；desc 是否元叙述） |
| 缺口与已做优化 | （回写了 How/FAQ/desc 哪一段；无则写「无」） |
| [ ] 已按审查回写 How / 交互主次 / FAQ / desc | |

## 交互规格（给实现用）

- 输入：
- 输出：
- 核心规则 / 算法：
- 失败与边界行为：
- 示例 Input → Output：
- **进页样例（必填）**：默认样例数据是什么；进页是否 `loadSample()` 自动跑出真实结果；与 H2 Example 如何对齐；若不能自动执行写操作，例外理由与安全演示路径（见 `.cursor/rules/tool-creation.mdc`「进页样例须实际跑出结果」）

## 页面模块清单（与 tool-creation 对齐）

> 勾选前须完成「清单前检索覆盖优化」与「用户意图审查」。

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
