# 03 — Prompt 簇 slug 清单（master checklist）

**Topic id**：`ai-prompt-template-builder`  
**Hub**：`/topics/ai-prompt-template-builder`  
**更新**：2026-09-02

---

## 簇内 slug（9）

| slug | 状态 | 主控件差 | AI + Turnstile |
|---|---|---|---|
| `prompt-template-builder` | shipped | 四字段 + 场景芯片 | yes |
| `writing-prompt-generator` | shipped | 对白/角色/剧本/Random | yes |
| `midjourney-prompt-builder` | shipped | subject/style/lighting/aspect/MJ flags | yes |
| `sketch-prompt-generator` | shipped | medium/stroke/composition/artist | yes |
| `film-prompt-builder` | shipped | logline/三幕/场景/弧光 | yes |
| `short-drama-prompt-generator` | shipped | 分集/钩子/cliffhanger/竖屏 | yes |
| `product-design-prompt-builder` | shipped | persona/问题/线框/设计令牌 | yes |
| `android-prompt-builder` | shipped | Kotlin/Compose/功能规格 | yes |
| `ios-prompt-builder` | shipped | Swift/SwiftUI/HIG | yes |

---

## 共享基础设施

- [x] `src/lib/promptAiSlugs.ts` — 9 slug 白名单
- [x] `src/endpoints/promptToolAi.ts` — `/api/tools/:slug/ai`
- [x] `src/pages/site/promptAiPanel.ts` — 共享 Expand/Polish/Turnstile
- [x] `src/site/topics.ts` + `scripts/site/i18n-topics.mjs` — topic hub 十语 IG
- [x] 全部 catalog `primaryTopic: ai-prompt-template-builder`

---

## Title / Description 规则

- H1：场景长尾原句 + `— Local + Optional AI`（十语等价）
- Description：本地默认 + 可选 Cloudflare AI Expand/Polish + Turnstile 防刷

---

## Related 簇

每 slug `related ≥2` 簇内互链；S0 保留场景芯片并链到专用页。

---

## 验收

- [x] `coverage:gate --phase=all` 每 slug
- [x] `verify:tool` 每 slug
- [ ] `npm run deploy` + `verify:r2:live`（发版时）
