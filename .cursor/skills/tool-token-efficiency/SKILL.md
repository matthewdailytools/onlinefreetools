---
name: tool-token-efficiency
description: >-
  Reduce Agent token use during single-tool brief, implementation, i18n, and ship
  without skipping coverage gates or lowering copy quality. Use when creating or
  shipping one tool, when token/context cost is a concern, or alongside
  tool-coverage-pass. Optimizes reads, sessions, and command output — never
  skips 0b/0i, phase 2/4, ten-locale rewrite, or verify gates.
---

# Tool token efficiency（单工具 · 不降质量）

**目的**：在**完整保留** `tool-coverage-pass`、`.cursor/rules/tool-i18n-localization.mdc`、`tool-creation.mdc` 全部质量门禁的前提下，减少无效读文件、重复上下文与命令输出回灌。

**权威序（冲突时）**：Google SEO / 覆盖与本地化 rules → `tool-coverage-pass` → **本 Skill**。  
本 Skill **只优化路径**，**禁止**用「省 token」跳过任何 gate、轮次或十语实质重写。

---

## 何时启用

- 新建或实现**单个**工具（`work-tasks/{slug}/` → Page / i18n → ship）
- 用户提到 token、上下文、对话太长、成本高
- 与 `tool-coverage-pass` **同时**使用：先读 coverage Skill 定「做什么」，再读本 Skill 定「怎么读/怎么拆会话」

---

## 质量红线（不可为省 token 而删）

下列一项都不能省；本 Skill 不提供任何豁免：

| 必须保留 | 验收 |
|---|---|
| 清单前覆盖 **0b** + **用户意图审查 0i** | `coverage:gate --phase=0b` 绿；`02` 覆盖表 + 意图表 |
| 母版后 **phase=2**、他语后 **phase=4** | `coverage:gate --phase=2|4|all` 绿；`03` 行 `1b`/`2b` |
| **十语**检索向独立重写（非 en 直搬） | 每语 brief 有当地 3–5 词；禁止同构灌语 |
| **≥3 轮**核查 | `03` 轮次勾选；禁词表 |
| IG ≥3、FAQ ≥3、How `how_item_1…n`、进页 **loadSample** | `tool-creation.mdc` Checklist |
| Ship 前 **build:site** + **lint:seo** + **lint:tool-isolation** | `npm run verify:tool -- --slug={slug}` 或等价步骤全绿 |

**禁止**：合并阶段、跳过他语、用机翻代替重写、只勾 gate 不改文案、省略 intent 审查、不跑 build 就标完成。

---

## 会话拆分（减历史累积 · 不降质量）

在**阶段边界**开新对话，并把交接物写进 repo（不靠长聊天记状态）：

| 会话 | 范围 | 交接物（下一会话只读这些） |
|---|---|---|
| **A · Brief** | `00`–`03`、0b、0i、`coverage:gate --phase=0b` | `work-tasks/{slug}/02-tool-info.md`（`ready`）、`03-locale-briefs.md`（`briefs-ready`） |
| **B · 工程 + 母版** | catalog 分片、`*Page.ts`、icon、en i18n、phase=2 | 上述 + `src/site/i18n/tools/{slug}/en.ts`、gate 2 绿 |
| **C · 他语** | 逐语或每批 ≤3 语、phase=4 | `03` 各语 brief + 已写分片列表 |
| **D · Ship** | merge、build、lint、README | `npm run verify:tool -- --slug={slug}` |

同一 slug 的 Page/i18n **仍须串行**（与 coverage Skill 一致）；省 token 靠**拆会话**，不靠并行 slug 实现。

---

## 读文件：允许 / 禁止

### 只读（单工具真相源）

```
work-tasks/{slug}/00-request.md          # 意图审查时
work-tasks/{slug}/02-tool-info.md      # 工程 + 覆盖/意图表
work-tasks/{slug}/03-locale-briefs.md  # 写/改 i18n 前
src/site/tool-catalog.d/{slug}.json
src/site/i18n/tools/{slug}/{lang}.ts   # 当前正在写的语
src/pages/{camel}Page.ts               # 本工具页
public/icons/tools/{slug}.svg
```

### 禁止整文件读（除非用户明确要求全站迁移）

| 路径 | 原因 | 替代 |
|---|---|---|
| `src/site/i18n/en.ts` 等合并 i18n | 全站 ~600KB/语 | 只读 `i18n/tools/{slug}/` 分片 |
| `src/site/tool-catalog.json` 全文 | 128 工具 ~76KB | 读本 slug 分片；related 用下方「轻量选 related」 |
| `scripts/site/i18n-tools.generated.mjs` | 生成物、超大 | 不读；改分片后 `merge:tools` |
| `docs/2026-07-28-google-seo-strategy-implementation.md` 等长 doc | 规则已镜像 | 只读已触发的 `.cursor/rules/*.mdc` |

### 参考实现：按类型读片段，不读整页

先定类型，再 **Read 带 offset/limit** 或 **Grep**，单次参考 ≤150 行：

| 类型 | 参考文件 | 建议只看 |
|---|---|---|
| 纯计算器 / 表单 | `src/pages/howToCalculateBmiPage.ts` | 渲染壳 + 表单/计算函数 |
| 文件 + Canvas / 本地处理 | `src/pages/imageCompressPage.ts` | `loadSample`、初始化末尾自动样例、处理流水线 |
| 文本粘贴解码 | `src/pages/jwtDecoderPage.ts` | 输入区 + decode 按钮 + 错误态 |
| 单位 / 多模式换算 | `src/pages/unitConverterPage.ts` | 模式切换 + 换算核心 |

需要第二个参考时，先说明缺什么再读；**禁止**默认堆读 2×800 行 Page。

### 规则文档：不重复通读

- 会话 A：brief 相关 rules（`work-tasks-tool-brief`、`tool-i18n-localization` 步 0b/0i）即可。
- 会话 B：加 `tool-creation`；SEO 字段查 `tool-i18n-seo` **按需**。
- 已注入上下文的 rule **勿在同一阶段第二次全文 Read**。

---

## 写文件：减回读

1. **Write/StrReplace 后**：若本回合刚写入且结构已知，**不要**立刻再 Read 整文件验证；用 gate / lint 验收。
2. **i18n 批量**：仍遵守 localization「每批 ≤3 语」；一批写完后只跑 `coverage:gate --phase=4`（在十语齐或抽查语齐时），不要每语跑全站 lint。
3. **assistant 回复**：引用改动用行号片段即可；**禁止**把整份十语 i18n 或整页 Page 贴进聊天。

---

## 命令：跑全量、收短输出

质量门禁命令**不变**；优化的是**怎么看结果**：

```bash
# 分阶段（与 coverage Skill 一致，但只跑当前 slug）
npm run coverage:gate -- --slug={slug} --phase=0b
npm run coverage:gate -- --slug={slug} --phase=2
npm run coverage:gate -- --slug={slug} --phase=4

# 单工具 ship 聚合（推荐代替手跑 5 条）
npm run verify:tool -- --slug={slug}
```

### build:site 与 lint:seo

- **交付前仍须** `build:site`（当前仓库强制全量预渲染；不可为省时而跳过）。
- Agent **不要**把 build/lint 的完整 stdout 反复读入上下文。
- 处理失败时：只提取 **与本 slug 相关** 的 WARN/FAIL 行；其他工具的告警记入「无关项，稍后全站修」，**勿**展开读那些工具的分片。
- `lint:seo` 扫全站是预期行为；**修复范围仍仅限当前 slug**（除非失败行明确指向别 slug 且用户要求修）。

---

## 轻量选 related（≥2）

不读全 catalog：

1. 读 `02-tool-info.md` 已列 related 候选。
2. 若需验证：对 `src/site/tool-catalog.d/*.json` 做 **Grep**（intent 关键词），最多打开 **2–3 个** 候选分片核对 title/H1。
3. 定稿写入本 slug 分片 `related` 数组。

---

## 与工具总数（128+）的关系

- 工具变多 **不会** 要求读完全站 Page/i18n；违反即本 Skill 违规。
- 工具变多 **会** 拉长 `build:site` / `lint:seo` 墙钟时间 —— 用**会话 D 集中跑** + **短输出摘要**，而不是取消 build/lint。

---

## 会话内自检（每阶段结束前 30 秒）

1. 本阶段 **gate 是否仍须跑且已绿**？（质量）
2. 是否误读了合并 i18n / 全 catalog / 无关 Page？（token）
3. 下一会话能否仅依赖 `work-tasks/{slug}/` + 本 slug 分片继续？（可拆分）

---

## 快速对照

| 想省 token… | 可以 | 不可以 |
|---|---|---|
| 拆成 A/B/C/D 四个会话 | ✅ | |
| 只读 `i18n/tools/{slug}/` | ✅ | 读 `src/site/i18n/en.ts` |
| Grep + 2 个 related 分片 | ✅ | 读完整 `tool-catalog.json` |
| 参考 Page 读 100 行 | ✅ | 读 800 行「学习写法」 |
| 用 `verify:tool` 一次 ship | ✅ | 跳过 `coverage:gate --phase=all` |
| 他语每批 3 语 | ✅ | 十语机翻一次灌满 |
| lint 失败只看本 slug 行 | ✅ | 跳过 lint:seo |

---

## 相关 Skill / Rules

- 做什么（覆盖阶段）：`.cursor/skills/tool-coverage-pass/SKILL.md`
- 质量标准：`.cursor/rules/tool-i18n-localization.mdc`、`tool-creation.mdc`
- 入口：根目录 `AGENTS.md`
