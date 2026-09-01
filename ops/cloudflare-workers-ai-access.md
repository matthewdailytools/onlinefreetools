# Cloudflare Workers AI：免费与付费接入指南

- date: **2026-09-01 22:12**
- status: **运维手册**（可复用；不限于 prompt-builder）
- 官方权威（冲突时以官方为准）：
  - [Pricing](https://developers.cloudflare.com/workers-ai/platform/pricing/)
  - [Limits](https://developers.cloudflare.com/workers-ai/platform/limits/)
  - [Get started — Workers + Wrangler](https://developers.cloudflare.com/workers-ai/get-started/workers-wrangler/)
  - [Models](https://developers.cloudflare.com/workers-ai/models/)
- 产品方案（二合一）：[`../docs/seo/keywords/prompt-builder/2026-09-01-local-and-cf-ai-hybrid-scheme.md`](../docs/seo/keywords/prompt-builder/2026-09-01-local-and-cf-ai-hybrid-scheme.md)
- 本仓库现状：`wrangler.jsonc` 已配置 `ai` binding + `RATE_LIMIT_KV`；`POST /api/tools/prompt-template-builder/ai` 已挂载（见 `src/endpoints/promptTemplateBuilderAi.ts`）

> **一句话**：免费 = 每日 **10,000 Neurons** 额度内推理（Workers Free/Paid 都有）；付费 = **Workers Paid** 后超出部分按 Neurons 计费，部分前沿模型必须 Paid。本地 `wrangler dev` 调 AI **同样计入**账户用量。

---

## 1. 概念

| 术语 | 含义 |
| --- | --- |
| **Workers AI** | 在 Worker 里通过 binding 调用 Cloudflare 托管模型 |
| **Neurons** | 计费/配额单位；不同模型输入/输出折算不同 |
| **Free allocation** | 每账户每天 **10,000 Neurons**，**00:00 UTC** 重置 |
| **Workers Free** | 仅能用免费额度；用尽后请求失败（不可按量加购） |
| **Workers Paid** | 仍含每日 10k 免费 Neurons；超出按 **$0.011 / 1,000 Neurons**（以官网为准） |
| **Paid-only models** | 部分资源密集模型要求 Paid（或 AI Gateway 预付），Free 上会 **403** |

---

## 2. 免费接入（Workers Free + 日额度）

### 2.1 适用

- 开发联调、内部验证、**小流量**可选 AI 功能  
- 必须配合产品侧限流；**不能**对外宣传 unlimited  

### 2.2 账户与 Dashboard

1. 使用本站已有 Cloudflare 账户（与 Pages/Workers 同一账号）。  
2. Dashboard → **Workers & Pages** → **Workers AI**（或 AI 相关入口）确认产品已开通。  
3. 打开 **Neurons usage** 监控（定价页指向 Workers AI dashboard）。  
4. 确认当前为 **Workers Free** 还是 **Paid**（Billing）。

### 2.3 本仓库 Wrangler 配置

在根目录 `wrangler.jsonc` 增加（名称可改，代码须一致）：

```jsonc
/**
 * Workers AI binding：供 env.AI.run(...) 调用托管模型。
 * 官方：https://developers.cloudflare.com/workers-ai/get-started/workers-wrangler/
 */
"ai": {
  "binding": "AI"
}
```

TypeScript（`worker-configuration.d.ts` / Env）须含：

```ts
/** Cloudflare Workers AI 绑定（与 wrangler.jsonc ai.binding 同名） */
AI: Ai;
```

部署：走现有发版路径（改 Worker 后 `deploy` / push 触发 CF）。**仅改 HTML 不灌 AI。**

### 2.4 最小调用示例

```ts
/**
 * 在 Worker 路由中调用文本生成（模型 ID 须对照当时 Free 可用目录）。
 * @param env Worker 环境（含 AI binding）
 * @param userText 用户已确认要上传的短文本
 */
async function runPromptAssist(env: Env, userText: string): Promise<string> {
  const result = await env.AI.run("@cf/meta/llama-3.2-1b-instruct", {
    messages: [
      { role: "system", content: "Rewrite into a clear AI prompt. Output prompt only." },
      { role: "user", content: userText },
    ],
  });
  // 响应形状随模型/API 版本可能为 { response } 或 OpenAI-like choices；接入时以实跑为准
  return typeof result === "object" && result && "response" in result
    ? String((result as { response: string }).response)
    : JSON.stringify(result);
}
```

**选模原则（免费）**：

- 优先 **小参数、低 Neurons/token** 的 Text Generation  
- 上线前在 [Models](https://developers.cloudflare.com/workers-ai/models/) 核对该 ID 是否仍允许 Free  
- **不要**默认 `@cf/moonshotai/kimi-k2.6`、`glm-5.2` 等 Paid-only（官网 changelog 列表会更新）

### 2.5 本地开发注意

```bash
npx wrangler dev
```

- 会登录 Cloudflare 账户并**真实扣 Neurons**（官方说明：local development 也计入用量）。  
- 联调使用最短 prompt、最低 `max_tokens`。  
- 配额用尽后本地与线上一致失败。

### 2.6 免费档容量（数量级，非 KPI）

假设单次约数百 input + 百级 output tokens：

| 模型体量 | 粗算日请求量级（共享 10k Neurons） |
| --- | --- |
| ~1B 级 | 可达约 **10³** 次量级 |
| ~8B / 更大 | 往往降到 **10²** 或更低 |
| 70B / frontier | 免费池很快耗尽；部分直接禁 Free |

公开站若日活高，**免费档只够实验**，需限流或升级 Paid。

### 2.7 免费用尽时的行为

- 请求失败（常见 **429**，文案含 daily free allocation / neurons）  
- Workers Free：**不能**付费续跑，只能等 UTC 日切或升级 Paid  
- 产品侧必须：捕获错误 → 返回可读 `code` → 前端回退本地模式  

---

## 3. 付费接入（Workers Paid + 按量）

### 3.1 何时升级

| 信号 | 建议 |
| --- | --- |
| 日 Neurons 经常打满且业务需要 AI | 升 **Workers Paid** |
| 需要 Paid-only / frontier 模型 | 必须 Paid（或 AI Gateway 预付，见下） |
| 只要稳定超额 | Paid；接受账单 |

### 3.2 开通步骤（概要）

1. Cloudflare Dashboard → **Billing** → 为账户绑定支付方式。  
2. 订阅 **Workers Paid**（价格以官网为准；changelog 曾述起价约 $5/月级，**以结账页为准**）。  
3. 确认 Workers AI 仍显示每日 **10,000 Neurons** 免费额；超出按定价页 Neurons 费率。  
4. 配置账单告警（Billing notifications / 用量告警），避免刷量账单。  
5. 可选：设账户级或应用级 **月预算软顶**（产品限流优先于纯靠账单）。

### 3.3 计费要点

| 项 | 内容 |
| --- | --- |
| 单价 | **$0.011 / 1,000 Neurons**（超出日免费额；[Pricing](https://developers.cloudflare.com/workers-ai/platform/pricing/)） |
| 模型差价 | 同 token 数下大模型 Neurons 高得多 |
| 本地开发 | 同样计费 |
| Free→Paid | 升级后才能突破日 10k；模型 ACL 立即按 Paid 规则 |

### 3.4 AI Gateway 预付（可选）

- 可用 **prepaid AI Gateway credits** 支付 Workers AI（官网：gateway Unified billing）。  
- 部分 frontier 在预付下有更高 RPM。  
- 适合已用 AI Gateway 统一观测/缓存的团队；本站若尚未用 Gateway，P0 可先 **直接 AI binding**，Gateway 作 P1。

### 3.5 速率限制（与套餐无关的另一层）

- Text Generation 默认约 **300 RPM** 量级（任务类型默认；单模型可能不同）— 见 [Limits](https://developers.cloudflare.com/workers-ai/platform/limits/)。  
- Frontier 常见 **20 RPM**（预付 Gateway 可升高，以官网表为准）。  
- 应用层仍应做每 IP 限流，避免打满账户 RPM 或 Neurons。

---

## 4. 本站推荐接入清单（检查表）

### 4.1 免费试点

- [x] `wrangler.jsonc` 增加 `ai.binding`  
- [x] Env 类型含 `AI: Ai`（`src/index.ts` + `wrangler types`）  
- [x] 增加受保护的 `POST /api/tools/prompt-template-builder/ai`（Origin、长度、action 白名单）  
- [x] 选用 **Free 可用小模型** `@cf/meta/llama-3.2-1b-instruct`（`PROMPT_AI_MODEL`）  
- [x] 错误映射：429 neurons / 403 paid-only / timeout → JSON `code`  
- [x] 前端：显式同意 + 失败回退本地（S0 Expand/Polish UI）  
- [ ] Dashboard 盯首日 Neurons（**人工**：见 `work-tasks/prompt-template-builder/notes-ai-infra.md`）  
- [x] **不**在营销文案写 unlimited  
- [ ] KV namespace id 替换 placeholder（**人工**：`wrangler kv namespace create RATE_LIMIT_KV`）

### 4.2 付费扩容

- [ ] Workers Paid + 支付方式 + 告警  
- [ ] 重新评估默认模型（可略升档，仍避免无必要 frontier）  
- [ ] 调整应用日配额（可高于免费试点，但仍有顶）  
- [ ] 可选 AI Gateway Unified billing  
- [ ] 月度成本回顾（Neurons × 单价）  

---

## 5. 安全与合规（接入必做）

| 项 | 要求 |
| --- | --- |
| 同意 | 发送前告知 Cloudflare 推理 |
| 最小数据 | 只传当前动作所需文本 |
| 密钥 | AI 走 binding，**不要**把 API token 写进前端 |
| 隐私政策 | 上线前更新「可选 AI」条款 | **done** — 十语 privacy `workers_ai` 段 |
| 日志 | 避免默认永久存储用户 Prompt |

---

## 6. 与「二合一」方案的分工

| 文档 | 管什么 |
| --- | --- |
| 本文 | 账户、Free/Paid、binding、计费、限速、检查表 |
| [hybrid scheme](../docs/seo/keywords/prompt-builder/2026-09-01-local-and-cf-ai-hybrid-scheme.md) | 产品双模式、API 契约、SEO、分期、风险 |

---

## 7. 修订

| 日期 | 变更 |
| --- | --- |
| 2026-09-01 | 初稿：免费日 Neurons + Paid 按量；Wrangler binding；本站检查表 |

**维护**：定价/模型 ACL 以 Cloudflare 官方页为准；数字变更时先改本节「官方权威」链接下的摘要，再改产品默认模型配置。
