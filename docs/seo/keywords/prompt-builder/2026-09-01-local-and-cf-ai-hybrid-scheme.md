# 方案：本地结构化 + Cloudflare Workers AI 二合一

- date: **2026-09-01 22:12**
- status: **方案稿**（未实现；未改 catalog / 未开 work-tasks）
- slug 范围：现页 [`/tools/prompt-template-builder`](https://onlinefreetools.org/tools/prompt-template-builder)（主打不变）
- 关联：
  - 场景与命名：[`2026-09-01-prompt-builder-keyword-planner.md`](./2026-09-01-prompt-builder-keyword-planner.md)
  - 竞品：[`2026-09-01-feedough-prompt-tools-inventory.md`](./2026-09-01-feedough-prompt-tools-inventory.md)
  - **CF 免费/付费接入（单独文档）**：[`../../../../ops/cloudflare-workers-ai-access.md`](../../../../ops/cloudflare-workers-ai-access.md)
- 权威策略：长尾 §3.3 H；H1 **不**改成纯 `AI Prompt Generator` 头词进攻

---

## 0. 一句话

**同一工具页**提供两条可并行的路径：**本地组装（默认、永远可用）** ∥ **可选 CF Workers AI 扩写/润色（用户显式触发）**；失败时回退本地，不挡主流程。

---

## 1. 目标与非目标

### 1.1 目标

| ID | 目标 |
| --- | --- |
| G1 | 保留隐私默认：未点 AI 时，内容不出浏览器 |
| G2 | 用可选云端推理补「扩写 / 优化」能力，缩小与 Feedough 类站的体验差，**不**复制其无限 LLM 矩阵 |
| G3 | SEO：主打仍为 **Prompt template builder** / `ai prompt builder`；FAQ 写清双模式 |
| G4 | 额度用尽、模型 429/403 时体验可降级，本地路径不受影响 |
| G5 | 接入方式与账单边界见独立 ops 文档，方案只定产品契约 |

### 1.2 非目标（本方案不做）

- 不做 Feedough 式数十个模型/模态换皮 URL  
- 不做「免费无限、无登录」承诺  
- 不把图像反推 / 视频 Prompt / CoT 专用页当作 P0（无 Planner 搜法不臆造）  
- 不在未用户确认前自动开 `work-tasks/` 或改十语文案上线  

---

## 2. 产品形态（二合一）

```text
┌─────────────────────────────────────────────────────────┐
│  /tools/prompt-template-builder                         │
│                                                         │
│  [ Mode: Local structure *default* ]  [ Optional: AI ]  │
│                                                         │
│  Local:  Role / Task / Constraints / Output             │
│          → Markdown / JSON（纯前端）                      │
│                                                         │
│  AI（可选）:                                             │
│    A. Expand draft → fill/suggest the four fields       │
│    B. Polish existing assembled prompt                  │
│    → POST /api/…（Worker → env.AI.run）仅用户点击后触发   │
│                                                         │
│  额度耗尽 / 网络失败 → toast + 继续用 Local               │
└─────────────────────────────────────────────────────────┘
```

### 2.1 模式对照

| 项 | Local（默认） | CF AI（可选） |
| --- | --- | --- |
| 计算位置 | 浏览器 | Cloudflare Workers AI |
| 上传 | 无 | 仅当用户点击 AI 动作；payload 为任务草稿/已组装 Prompt |
| 产出 | 结构化模板字符串 | 建议字段或润色后的 Prompt 文本 |
| 依赖 | 无 | AI binding + 日 Neurons 配额 |
| 文案 | 「本地组装，不调用模型」 | 「可选云端推理（Cloudflare）；可能计入用量」 |

### 2.2 推荐用户流（一条故事）

1. 用户填场景草稿或四字段 → **Local 即时**出 MD/JSON（主路径）。  
2. 可选：点 **Expand with AI** → Worker 返回字段建议 → 用户可编辑后写回表单。  
3. 可选：点 **Polish with AI** → 对当前组装结果润色 → 复制前可再改。  
4. 任意一步 AI 失败 → 保留 Local 结果，提示稍后再试或改用本地。

---

## 3. 能力边界（P0 / 以后）

| 优先级 | 能力 | 说明 |
| --- | --- | --- |
| **P0** | Local 四字段 + MD/JSON | 已有；继续 IG |
| **P0** | AI Expand（草稿→字段建议） | 小模型、短输出；强限流 |
| **P0** | AI Polish（已有 Prompt→更清晰版） | 同上 |
| P1 | 场景芯片预设（写作 / Copilot…）只影响 Local 默认值 | 无额外 AI |
| P2 | Image-to-prompt / 视频 | 依赖 vision/多模态 + 成本；且 Planner 视频词本批为 0 → 默认不做 |
| 不做 | 按 ChatGPT/Midjourney 拆第二 URL | 芯片 + FAQ |

---

## 4. 技术契约（实现时）

> 账单与 Dashboard 步骤见 [`ops/cloudflare-workers-ai-access.md`](../../../../ops/cloudflare-workers-ai-access.md)。

### 4.1 Worker

| 项 | 约定 |
| --- | --- |
| Binding | `wrangler.jsonc` → `"ai": { "binding": "AI" }` |
| 路由建议 | `POST /api/tools/prompt-template-builder/ai`（名称可微调；须进现有 `/api/` 管道） |
| Body | `{ action: "expand"|"polish", input: string, locale?: string, maxTokens?: number }` |
| 响应 | `{ ok: true, text: string, model: string }` 或 `{ ok: false, code, message }` |
| 模型（起步） | 免费档可用的**小**文本模型（如 Llama 3.2 1B/3B 或文档当时推荐的 Free 可用模型）；**禁止**默认打 Paid-only frontier |
| 超时 | Worker 内硬超时；超时当失败回退 |

### 4.2 前端

| 项 | 约定 |
| --- | --- |
| 默认 | Local；AI 按钮 disabled until 有最小输入 |
| 同意 | 首次 AI 点击前短确认：「将把文本发到 Cloudflare 推理」 |
| 限流 UX | 429 / neurons 耗尽 → 明确文案 + 禁用 AI 直至次日或 Paid |
| 无 AI 构建 | 静态页在无 API 时仍完整可用（预渲染不依赖 AI） |

### 4.3 安全与滥用

| 项 | 约定 |
| --- | --- |
| 速率 | 每 IP / 每会话配额（例：免费池内 N 次/日）；与 CF 账户 Neurons 双限制取严 |
| 体积 | `input` 上限（字符数）；拒绝超大粘贴 |
| 日志 | 默认不落用户 Prompt 全文到第三方分析；若需排障用短期采样且可关 |
| CORS | 仅本站 origin |

---

## 5. SEO / 文案 / 合规

| 规则 | 落点 |
| --- | --- |
| H1 / slug | 保持 **Prompt template builder** / `prompt-template-builder` |
| 主打词 | `ai prompt builder`、templates；generator 头词仅 FAQ 划界 |
| FAQ | 「本地 vs 可选云端」各一条；不承诺 unlimited |
| 隐私页 | 若上线 AI：补充「可选 AI 功能会将你提交的文本发送至 Cloudflare Workers AI」 |
| IG | Local 边界 + 可选 AI 的失败回退 + 与 {{var}} 填充器差异 |
| Spam | 不为冲 AI Overview 做专用改写；双模式须对人可见，禁止 cloaking |

---

## 6. 与竞品 / 场景表关系

| Feedough 厚覆盖 | 本方案 |
| --- | --- |
| 通用 LLM generator | Polish/Expand **可选**，非唯一路径 |
| 模型换皮 URL | 不拆；FAQ/芯片 |
| Image / Video 矩阵 | P2+ 且须有搜法 |
| 无限免费叙事 | **明确不做**；额度可见 |

场景 S0 仍主打；S4–S7 absorb；S1–S3 仍 FAQ；不因接了 CF AI 就批量新建 generator URL。

---

## 7. 分期落地

| 阶段 | 交付 | 出口条件 |
| --- | --- | --- |
| **A 方案确认** | 本文 + ops 接入文档 | 人工确认做 P0 AI |
| **B 接入骨架** | wrangler AI binding + 健康检查路由 + 限流桩 | `wrangler dev` 能跑通一次 `env.AI.run` |
| **C 产品 P0** | Expand + Polish UI + 文案/隐私 | `verify:tool`；FAQ 双模式；额度失败可回退 |
| **D 观测** | Dashboard Neurons + 错误码统计 | 决定是否 Workers Paid / 调模型 |

**未**在阶段 A 自动改 i18n 或 build:site。

---

## 8. 风险

| 风险 | 缓解 |
| --- | --- |
| 日 10k Neurons 被刷穿 | IP/会话限流；小模型；按钮级确认 |
| 文案与「从不上传」冲突 | 模式切换时动态 disclaimer |
| 本地 `wrangler dev` 也计费 Neurons | 开发用短 prompt；见 ops 文档 |
| SERP 仍 head | 不改进攻主打；AI 是产品增量不是立项武器 |
| YMYL 误导 | 输出标明「建议稿，须人工审」 |

---

## 9. 决策待确认（实现前）

- [ ] 是否在本页上线 P0 Expand/Polish（默认建议：**先 B 骨架，再 C**）  
- [ ] 免费池策略：全站共享 Neurons vs 仅本工具  
- [ ] 是否接受 Workers Paid（流量上来后）  
- [ ] 默认模型 ID（以当时 Free 可用目录为准，写入配置不写死在文案）

---

## 10. 修订

| 日期 | 变更 |
| --- | --- |
| 2026-09-01 | 初稿：二合一产品方案；接入细节外置 ops 文档 |
