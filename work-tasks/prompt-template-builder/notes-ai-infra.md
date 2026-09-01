# Prompt-template-builder — Cloudflare AI 与防刷决策

- 日期：**2026-09-01**
- 状态：**骨架实现已确认**
- 参考：[二合一 hybrid 方案](../../docs/seo/keywords/prompt-builder/2026-09-01-local-and-cf-ai-hybrid-scheme.md) · [运维接入手册](../../ops/cloudflare-workers-ai-access.md)

## 产品决策（hybrid §9）

| 决策项 | 取值 |
| --- | --- |
| P0 Expand + Polish | **是** — API 骨架绿后再做 UI |
| 账户档位（起步） | **Workers Free** + 每日 10k Neurons |
| 升级触发 | Neurons 经常用尽且产品需要 AI → Workers Paid + 账单告警 |
| Neurons 范围 | **全站共享**同一 API 配额（KV 内单一计数前缀） |

## 模型与载荷（wrangler `vars`）

| 变量 | 取值 | 说明 |
| --- | --- | --- |
| `PROMPT_AI_ENABLED` | `true` | 设为 `false` → API 503，前端隐藏 AI 按钮 |
| `PROMPT_AI_MODEL` | `@cf/meta/llama-3.2-1b-instruct` | 上线前再核对 Free ACL |
| `PROMPT_AI_MAX_INPUT_CHARS` | `6000` | 拒绝更长粘贴 |
| `PROMPT_AI_MAX_OUTPUT_TOKENS` | `384` | 服务端硬顶 |
| `PROMPT_AI_DAILY_LIMIT_PER_IP` | `8` | Expand + Polish 合计 |
| `PROMPT_AI_MINUTE_LIMIT_PER_IP` | `4` | 防 burst |
| `PROMPT_AI_SITE_DAILY_LIMIT` | `200` | 全站 KV 计数（所有 IP） |

## Dashboard 清单（人工 — cf-dashboard todo）

> 分步命令见 **[Prompt AI 部署清单](../../ops/prompt-ai-deploy-checklist.md)**；KV id 写入用 `node scripts/ops/patch-rate-limit-kv.mjs`。

- [ ] Workers & Pages → **Workers AI** 已开通；**Neurons usage** 可见
- [ ] 记录账户 **Free vs Paid** 状态
- [ ] 配置 **Billing notifications**（用量阈值告警）
- [ ] 创建 KV：`wrangler kv namespace create RATE_LIMIT_KV`（dev 另建 preview）
- [ ] 将 namespace id 填入 `wrangler.jsonc` → `RATE_LIMIT_KV`
- [ ] `TURNSTILE_SECRET_KEY` secret 已配置（复用 domain-lookup）
- [ ] AI UI 上线前后各 3 天记录 Neurons 基线

## API 契约

- `POST /api/tools/prompt-template-builder/ai` — `{ action, input, turnstile?, locale?, maxTokens? }`
- `GET /api/tools/prompt-template-builder/ai/health` — binding + enabled 标志（不跑推理）

## 前端（阶段 C）

- 每次 AI 操作过 Turnstile；首次点击 consent 弹窗 — **已实现**（`promptTemplateBuilderPage.ts`）
- 失败 → toast + 保留本地模板 — **已实现**
- health 在 `enabled: false` 时隐藏面板 — **已实现**

## 验证（2026-09-01）

- [x] `npx wrangler types` — `worker-configuration.d.ts` 含 `Env.AI`、`RATE_LIMIT_KV`
- [x] `npm run merge:tools` + `lint:tool-page --require-html` — 通过
- [ ] `wrangler dev` + curl POST — **本地阻塞**：需 `CLOUDFLARE_API_TOKEN` + 真实 KV namespace id（替换 `wrangler.jsonc` 占位符）
- [ ] 生产 Neurons 基线 — **人工**，部署后执行

## 回滚

在 `wrangler.jsonc` vars 中设 `PROMPT_AI_ENABLED=false` → API 503 `{ code: disabled }`；前端 health 隐藏 `#ptbAiPanel`。
