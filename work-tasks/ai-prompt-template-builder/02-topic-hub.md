# 02 — Topic hub 信息

**状态**：`done`  
**topic id**：`ai-prompt-template-builder`  
**hub 路径**：`/topics/ai-prompt-template-builder`

---

## Hub 文案（en）

| 字段 | 内容 |
|---|---|
| Title | AI prompt template builder & generator tools |
| 范围 | 9 场景 slug + 本地默认 + 可选 CF AI + Turnstile |

---

## 工程清单（阶段 A）

- [x] `src/site/topics.ts` — 注册 topic id
- [x] `scripts/site/topics.mjs` + `i18n-topics.mjs` — hub 十语 IG
- [x] 9 工具 catalog `primaryTopic` → `ai-prompt-template-builder`
- [x] Related 簇内互链

---

## 验收

- [x] hub 十语可访问（`build:site` 后）
- [x] sitemap 含 topic URL
