# 02 — Topic hub 信息

**状态**：`draft`  
**topic id**：`ai-prompt-template-builder`  
**hub 路径**：`/topics/ai-prompt-template-builder`

---

## Hub 文案（建议 en）

| 字段 | 内容 |
|---|---|
| Title | AI prompt template builder & generator tools |
| 范围 | 草稿/场景 → 可粘贴 AI Prompt（结构化；非代写服务） |

---

## 工程清单（阶段 A）

- [ ] `src/site/topics.ts` — 注册 topic id
- [ ] `scripts/site/topics.mjs` — hub 页生成
- [ ] 十语 `i18n-topics` 分片
- [ ] `prompt-template-builder` catalog `primaryTopic` → `ai-prompt-template-builder`
- [ ] Related 簇内互链：S0 ↔ writing ↔ midjourney

---

## 依赖

- S0 AI 骨架：**done**（见 `work-tasks/prompt-template-builder/notes-ai-infra.md`）
- 隐私 Workers AI 段落：**done**（`scripts/site/pages/privacy.mjs`）

---

## 验收

- hub 十语可访问；sitemap 含 topic URL
- 三工具页 related 互链 ≥2
