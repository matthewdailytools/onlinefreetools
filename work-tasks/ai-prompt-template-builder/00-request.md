# 00 — Topic hub 立项

> Topic 级任务（非单工具 slug）。权威分析见 docs。

## 原始描述

Prompt-builder AI 骨架绿后，开 **ai-prompt-template-builder** topic hub + 簇内工具立项。

## 已知约束

- Topic id：`ai-prompt-template-builder`
- Hub：`/topics/ai-prompt-template-builder`（十语）
- 权威文档：[`2026-09-01-ai-prompt-template-builder-topic.md`](../../docs/seo/keywords/prompt-builder/2026-09-01-ai-prompt-template-builder-topic.md)
- S0 `prompt-template-builder` 上线 topic 时 **primaryTopic 迁到本 topic**
- 不看 SERP tier 排期；门禁 = 场景 + 控件差 + IG ≥3

## 簇内 slug（本 topic）

| slug | 状态 |
|---|---|
| `prompt-template-builder` | **implemented**（S0；可选 CF AI Expand/Polish） |
| `writing-prompt-generator` | work-tasks draft |
| `midjourney-prompt-builder` | work-tasks draft |

## 实施顺序（topic §6）

1. **A** — `topics.ts` + 十语 topic 文案 + hub 页
2. **B** — S0 强化 + primaryTopic 迁移
3. **C/D** — writing / midjourney 实现（各 slug 独立 coverage）
4. **E** — Hybrid CF AI 已挂 S0（2026-09-01 骨架 + UI）
