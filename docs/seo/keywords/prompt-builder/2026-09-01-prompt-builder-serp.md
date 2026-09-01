# SERP batch 2026-09-01-prompt-builder-serp

- date: **2026-09-01 21:15**（本地）
- locale / gl: en / us
- method: **Google Web 检索人工复核**（CloakBrowser / Bing 本机未就绪：`pip install cloakbrowser` 进行中；策略 §3.3 A 允许 Google **或** Bing）
- queries: 6（与 Planner 权威表建议一致）
- theme: [`prompt-builder`](./) · 权威选词：[`2026-09-01-prompt-builder-keyword-planner.md`](./2026-09-01-prompt-builder-keyword-planner.md)
- 说明：下列「前排」为检索摘要可见标题/站名（非完整 HTML）；草稿 tier 经人工；**无** `long_gap`

## 人工复核总表

| 查询 | 前排类型（摘要） | 脚本草稿 | 人工 tier | title 是否已写任务句 | 备注 |
| --- | --- | --- | --- | --- | --- |
| `ai prompt generator` | SurePrompts / PromptPrepare / Feedough / OneShotCode 等 **LLM 生成器** ≥3 | — | **head** | 是（多页 title 含 AI Prompt Generator） | 禁进攻主打；现页 FAQ 划界 |
| `ai prompt builder` | promptbuilder.cc / BuildPrompts / Originality / PromptBuilder.cloud 等 **生成/优化 Builder** ≥3 | — | **head** | 是（Prompt Builder / AI Prompt Builder 密） | 次词 absorb；不改现 H1 |
| `prompt template builder` | NewPrompt / ToolboxKit / DevToolbox / AI Dev Hub 等 **{{var}} 模板填充器** ≥3 | — | **mid_covered**（近 head） | **是**（多页 title 即 “Prompt Template Builder”） | **§3.3 G 不触发**（无 title 字面缺口）；靠 Role/Task/Constraints/Output + 本地非 LLM 作 IG 收割 |
| `text to prompt generator` | LabGen / EzyToolbox 等 **短文→LLM 扩写 Prompt** | — | **head** | 是（Text To Prompt Generator） | 现页只覆盖「草稿→字段」；FAQ 非 LLM 改写 |
| `midjourney prompt builder` | SurePrompts Midjourney builder / MidjourneyPro 参数拼装 ≥2–3 | — | **head** | 是 | 图像参数作业；另页才自有主打；现页 FAQ |
| `random prompt generator` | Fairy Fox / RandomStuffGenerator 等随机器 ≥2–3 | — | **head** | 弱–是 | 随机/写作灵感；另页或 FAQ；非结构化模板 |

## §3.3 G（title_gap_fallback）结论

| 种子头词 | 候选长尾 | 区别词 | 前排 title 缺口？ | 动作 |
| --- | --- | --- | --- | --- |
| `ai prompt generator` | `ai prompt builder` | builder | **否**（Builder 站密集） | 不作新主打 |
| `ai prompt generator` | `prompt template builder` | template builder | **否**（多页已用整句） | **保持**已上线 H1；靠能力 IG，不靠 G 改名进攻 |
| （同簇） | `text to prompt generator` | text to | **否** | absorb 划界，不立项 |

## Next steps

- 人工结论已回写权威表 §6；词池 `gap_notes` 去掉 pending SERP
- 可选：CloakBrowser 就绪后用同一 6 词补采 Bing 国际版交叉验证（污染行不得 long_gap）
- 禁止把本摘要标题套路成空壳页；开 work-tasks 须另决议
