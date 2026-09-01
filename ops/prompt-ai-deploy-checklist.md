# Prompt AI 部署清单（S0 Expand/Polish）

- date: **2026-09-02**
- 范围：**9 个** prompt 簇工具（`PROMPT_AI_SLUGS`）可选 Cloudflare Workers AI
- 决策记录：[`../work-tasks/prompt-template-builder/notes-ai-infra.md`](../work-tasks/prompt-template-builder/notes-ai-infra.md)
- 接入手册：[`cloudflare-workers-ai-access.md`](./cloudflare-workers-ai-access.md)
- 发版总览：[`worker-r2-ops.md`](./worker-r2-ops.md)

> **顺序**：Dashboard → KV → 本地冒烟 → commit/push → 生产验证 → Neurons 基线

---

## 0. 前置

- [ ] 本机已登录：`npx wrangler login` → `npx wrangler whoami` 显示正确账号
- [ ] 最新代码已拉取（含 `wrangler.jsonc` 的 `ai` binding 与 `PROMPT_AI_*` vars）
- [ ] 生产 secret **`TURNSTILE_SECRET_KEY`** 已存在（与 domain-lookup 共用；本地 `.dev.vars` 亦需）

---

## 1. Cloudflare Dashboard（人工）

- [ ] **Workers & Pages** → **Workers AI** 已开通
- [ ] **Neurons usage** 面板可见
- [ ] 记录账户档位：**Free** / **Paid**
- [ ] **Billing** → 用量/账单 **notifications** 已设（Neurons 接近日上限时告警）

---

## 2. 创建 KV 并写入 wrangler.jsonc

```bash
# 生产 namespace
npx wrangler kv namespace create RATE_LIMIT_KV

# 本地 wrangler dev 用 preview namespace
npx wrangler kv namespace create RATE_LIMIT_KV --preview
```

记下两次输出里的 `"id"`（32 位 hex），然后：

```bash
node scripts/ops/patch-rate-limit-kv.mjs \
  --id=<生产-id> \
  --preview-id=<preview-id>
```

- [ ] `wrangler.jsonc` 中 `RATE_LIMIT_KV` 的 `id` / `preview_id` **不再是** `000…000`
- [ ] `git add wrangler.jsonc` 并 commit（KV id 须进仓库，供 CF Git 部署绑定）

---

## 3. 本地冒烟（会消耗 Neurons）

```bash
# 若 8787 占用可换端口
npx wrangler dev --port 8788
```

另开终端：

```bash
# 1) Health（不跑推理）
curl -s http://127.0.0.1:8788/api/tools/prompt-template-builder/ai/health | jq .

# 期望：ok:true, enabled:true, hasAiBinding:true, hasRateLimitKv:true
```

浏览器打开 `/tools/prompt-template-builder`（dev 域名），完成 Turnstile 后点 **Expand with AI**：

- [ ] 首次出现 consent 弹窗
- [ ] 成功：字段/模板有 AI 建议
- [ ] 失败：toast 提示，本地模板不变

**可选 curl POST**（须先从 Turnstile widget 取 token，较繁琐；浏览器点按钮更直观）：

```bash
curl -s -X POST http://127.0.0.1:8788/api/tools/prompt-template-builder/ai \
  -H 'Content-Type: application/json' \
  -H 'Origin: http://127.0.0.1:8788' \
  -d '{"action":"expand","input":"Role: reviewer\nTask: check code","turnstile":"<token>"}'
```

- [ ] 回滚开关：`wrangler.jsonc` 设 `PROMPT_AI_ENABLED=false` → health `enabled:false`，页面 AI 面板隐藏

---

## 4. 生产部署

本站默认 **git push → Cloudflare 拉仓库** 更新 Worker（见 `worker-r2-ops.md`）。

```bash
# 若 HTML/工具页也有改动
npm run deploy          # build + upload R2 + verify；打印 push 提示

git push origin main    # 触发 CF 部署 Worker + Assets
```

- [ ] Cloudflare Dashboard → Worker 部署成功（含新 `ai` + KV binding）
- [ ] 等待 CF 构建完成（通常 1–3 分钟）

---

## 5. 生产验证

```bash
# Health
curl -s https://onlinefreetools.org/api/tools/prompt-template-builder/ai/health | jq .

# 页面（十语任选）
# https://onlinefreetools.org/tools/prompt-template-builder
```

- [ ] `hasRateLimitKv: true`（若为 false，KV id 未生效或未部署）
## 5. 生产验证（每个 slug 可选抽查）

```bash
# 通用 health（任选 slug）
curl -s https://onlinefreetools.org/api/tools/writing-prompt-generator/ai/health | jq

# 全簇冒烟（9 slug）
for s in prompt-template-builder writing-prompt-generator midjourney-prompt-builder sketch-prompt-generator film-prompt-builder short-drama-prompt-generator product-design-prompt-builder android-prompt-builder ios-prompt-builder; do
  curl -s "https://onlinefreetools.org/api/tools/$s/ai/health" | jq -c "{slug:\"$s\",ok:.ok,enabled:.enabled}"
done
```

- [ ] 生产 Turnstile + Expand/Polish 各测 **1 次**（短 prompt，省 Neurons）
- [ ] Dashboard **Neurons** 有少量增量

---

## 6. 上线后 3 天 Neurons 基线

| 日 | UTC 日期 | Neurons 用量 | 备注 |
| --- | --- | --- | --- |
| D-1 | | | 上线前 |
| D0 | | | 上线日 |
| D+1 | | | |
| D+2 | | | |
| D+3 | | | |

- [ ] 日用量远低于 10k → 保持 Free + 现有限流
- [ ] 经常打满 → 评估 `PROMPT_AI_*` 配额或升 Workers Paid

---

## 7. 紧急回滚

1. `wrangler.jsonc` → `PROMPT_AI_ENABLED=false`
2. commit + push（或 `npm run deploy:worker-only` 紧急直发）
3. API 返回 503 `{ code: disabled }`；前端 health 隐藏 AI 按钮
4. **本地四字段构建不受影响**

---

## 8. 修订

| 日期 | 变更 |
| --- | --- |
| 2026-09-01 | 初稿：KV 脚本 + 本地/生产验证步骤 |
