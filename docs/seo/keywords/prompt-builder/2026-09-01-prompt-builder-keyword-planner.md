# Prompt-builder Keyword Planner — 归类与选词

- date: **2026-09-01 21:54**（修订：场景按 Planner 搜法；命名硬约束）
- locale / gl: en / us（Google Keyword Planner 导出）
- source: [`Keyword Planner 09-01-2026 at 12-29-20.csv`](./Keyword%20Planner%2009-01-2026%20at%2012-29-20.csv)（**98** 词；12 广告组）
- catalog：**已有** `/tools/prompt-template-builder`（结构化 Role/Task/Constraints/Output；**不**调用 LLM）
- 规则：[`../../keyword-planner-analysis-rules.md`](../../keyword-planner-analysis-rules.md) + 长尾策略 §3.3 / G / H
- SERP：[`2026-09-01-prompt-builder-serp.md`](./2026-09-01-prompt-builder-serp.md)（Google×6）· [`2026-09-01-prompt-builder-bing-serp.md`](./2026-09-01-prompt-builder-bing-serp.md)（Bing×6）

> **结论先行**  
> 1）**命名硬约束**：本主题任何工具的 **slug / title(H1) / 主打关键词** 必须落在 **`ai` + `prompt` + (`builder`|`generator`)** 词族（词序可变；`template`/`midjourney`/`writing` 等只作场景修饰）。禁止无 prompt+builder/generator 的品类壳（如纯「小说灵感机」）。  
> 2）**按使用场景定工具**：场景只来自 **Planner 实际搜法**（下表）；图片 / 写作·对白 / 随机等有证据；**视频 / 论文 / Android·iOS 代码本批 0 词 → 不臆造 URL**。  
> 3）**场景全覆盖**；差别在主打 slug/title。现页主打 = `prompt-template-builder` / **Prompt template builder**（次主打含 `ai prompt builder`）。SERP 后 **0 long_gap → 周 build 0**。未建 work-tasks。

---

## 0. 命名硬约束（本主题）

| 项 | 要求 |
| --- | --- |
| 必含 | **`prompt`**，且 **`builder` 或 `generator` 至少一个** |
| 宜含 | **`ai`**（量级允许时进 H1/主打词；slug 可省略连字符位但主打关键词须能收割 `ai prompt …`） |
| 场景修饰 | image / midjourney / writing / dialogue / random / text to / copilot… 只嵌在上述词族内 |
| 禁止 | 无 builder/generator 的工具名；按 Free/Online/Maker/Creator 广告组拆页；服务/品牌词作主打 |

合法例：`ai prompt builder`、`midjourney prompt builder`、`writing prompt generator`、`random prompt generator`、`text to prompt generator`。  
非法例：`novel idea tool`、`android code helper`（且本批无搜法）。

---

## 1. 量级分桶（只筛选）

| 带 | n | 角色 |
| --- | --- | --- |
| 1,000–1万 | 3 | 头词种子：`ai prompt generator`、`prompt generator ai`、`prompt maker` — **禁作进攻主打 H1** |
| 100–1,000 | 16 | 中词：`ai prompt builder`、`text to prompt generator`、`random prompt generator`… |
| 10–100 | 67 | 长尾 / 场景修饰主观察带 |
| 0–10 | 12 | 微尾；含全部 **Prompt Service** |

广告组（Prompt Generator / Maker / Creator / Free…）= 近义簇，**不是**使用场景。

---

## 2. 先剔除（drop）

| 类型 | 例 | 处理 |
| --- | --- | --- |
| 代写/服务 | `image prompt writing services`、整组 Prompt Service | **drop**（无产品覆盖） |
| 品牌导航 | `betterprompt` | **drop** |
| 评测壳 | `best prompt generator`、`… pro` | **drop** 作主打 |
| 无命名硬约束 | 将来若出现无 prompt+builder/generator 的「场景壳」 | **drop** 或不立项 |

---

## 3. 使用场景（只认 Planner 搜法）→ 全覆盖

用户举例（视频 / 论文 / 安卓·iOS 代码）= **方法示意**；下表只保留 **本 CSV 有证据** 的场景。  
每行须有覆盖落点；**主打**决定 slug/title；同主控件不拆页。

| 场景 ID | 使用场景（情境→动作→结果） | Planner 证据词（量级） | 主控件 | 主打？ | 覆盖落点 | 建议主打命名（须过 §0） |
| --- | --- | --- | --- | --- | --- | --- |
| **S0 通用结构化** | 任意草稿 → Role/Task/Constraints/Output（MD/JSON） | `ai prompt builder`（100–1k）；`ai prompt templates`；`create your own prompt`；`prompt template builder` | 四字段表单 | **是（现页）** | slug `prompt-template-builder`；H1 **Prompt template builder**；主打词含 **ai prompt builder** / templates | `prompt`+`builder`；主打关键词带 **ai** |
| **S1 图像** | 要出图参数句 / Midjourney·sketch 风格 Prompt | `midjourney prompt builder`（10–100）；`sketch prompt generator`（10–100） | 图像参数字段（与 S0 不同） | 另页时自有主打 | 现页 FAQ；另页则独立 slug | **midjourney prompt builder** 或 **ai image prompt generator**（SERP 后再钉） |
| **S2 写作·故事·对白** | 小说/角色/对白/剧本灵感 → 可粘贴的 Prompt | `dialogue prompt generator`；`character prompts generator`；`script prompt generator`；`detailed writing prompt generator`；`writing prompt creator`；`scenario prompt generator`；`idea prompt generator`；`write prompt generator`；`daily prompt plot builder`（0–10） | 写作维度控件或随机+字段 | 另页时自有主打 | 现页 Use case/FAQ；另页合并一 URL | **writing prompt generator** / **ai dialogue prompt generator**（一簇一 URL） |
| **S3 随机灵感** | 一键随机题目 → Prompt | `random prompt generator`（100–1k） | 随机器（可与 S2 同页） | 另页或并入 S2 时自有主打 | 现页 FAQ；优先考虑与 S2 同页次主打 | **random prompt generator**（可带 ai） |
| **S4 正文→Prompt 包装** | 已有正文 → 包成 Prompt 结构 | `text to prompt generator`（100–1k）；`text prompt generator`… | 自由文本→字段（同 S0） | 否（巩固 S0） | Use cases + How；非 LLM 划界 | 次词；**不**另 slug |
| **S5 Chat/Copilot 情境** | 给 Copilot/Chat 写系统 Prompt | `copilot prompt builder`；`chat prompt generator` | 同 S0 | 否 | Use case / 芯片 | 次词；平台≠拆页 |
| **S6 网站文案情境** | 为网站生成 Prompt | `website prompt generator`（10–100） | 同 S0 | 否 | Use case 一句 | 次词 |
| **S7 头词近义壳** | maker/creator/free/online 目录说法 | `prompt maker`；`ai prompt generator`… | — | 否 | FAQ 近义 / 划界；**H1 不用** generator/maker 头词进攻 | 收割用词须仍含 prompt+… |
| **S8 电影剧本** | 长片 logline → 三幕节拍 / 场景大纲 | 产品定向（本批 Planner 0 词；用户指定场景） | 同 S0 + **电影芯片** | 否（S0 absorb） | 场景芯片 + Use case + FAQ | **ai film prompt builder** 类说法进 desc/FAQ |
| **S9 短剧** | 竖屏短剧连载：钩子 / cliffhanger / 分集 | 产品定向 | 同 S0 + **短剧芯片** | 否 | 场景芯片 + Use case | **short drama prompt generator** 进 desc/FAQ |
| **S10 Android 代码** | Kotlin / Compose 功能实现 Agent 模板 | 产品定向 | 同 S0 + **Android 芯片** | 否 | 场景芯片 + Use case | **android prompt builder** 进 desc/FAQ |
| **S11 iOS 代码** | Swift / SwiftUI 功能实现 Agent 模板 | 产品定向 | 同 S0 + **iOS 芯片** | 否 | 场景芯片 + Use case | **ios prompt builder** 进 desc/FAQ |
| **S12 聊天平台** | ChatGPT / Gemini / Claude / DeepSeek 粘贴 | 产品定向（**不拆 URL**） | 同 S0 | 否 | **description + 首屏 + FAQ** 点名四平台 | 禁止四平台各一页 |

### 3.1 本批 Planner 无词、但产品已 absorb 到 S0

| 用户举例 | Planner 命中 | 处理 |
| --- | --- | --- |
| 电影 / 长片剧本 | **0** | S8：S0 电影场景芯片 + Use case（不另 URL） |
| 短剧 / 竖屏连载 | **0** | S9：S0 短剧芯片 |
| Android 项目代码 | **0** | S10：S0 Android 芯片 |
| iOS 项目代码 | **0** | S11：S0 iOS 芯片 |
| ChatGPT / Gemini / Claude / DeepSeek | 模型皮词（禁独立 URL） | S12：description、首屏、FAQ 体现平台名；**同控件不拆页** |
| 视频 / 论文 | **0** | 仍不臆造；待 Planner 出现 prompt+builder\|generator 再立 |

### 3.2 现页主打定位（已落地）

| 项 | 值 |
| --- | --- |
| slug | `prompt-template-builder`（含 prompt + builder） |
| title / H1 | Prompt template builder |
| 主打关键词 | **ai prompt builder**；prompt template builder；ai prompt templates；create your own prompt |
| 不进进攻主打 | `ai prompt generator`、`prompt maker`（仅 FAQ/近义） |

---

## 4. 头词 → 收割 + §3.3 G

| 查询 | tier（Google） | Bing 草稿 | 动作 |
| --- | --- | --- | --- |
| `ai prompt generator` | head | head | FAQ 划界；禁进攻 H1 |
| `ai prompt builder` | head | mid_covered | 次主打 absorb → 现页 |
| `prompt template builder` | mid_covered | mid_covered | **保持** H1；G **不触发** |
| `text to prompt generator` | head | head | S4 Use case |
| `midjourney prompt builder` | head | mid_covered | S1 FAQ；另页才自有主打 |
| `random prompt generator` | head | head | S3 FAQ；可与 S2 合并规划 |

**无** `long_gap` / `locale_gap` → **周 build 名额 0**。

---

## 5. 意图聚类 → slug / H1（权威表）

| 场景 | 主选长尾 | 主打？ | slug | H1 | verdict |
| --- | --- | --- | --- | --- | --- |
| S0 通用结构化 | ai prompt builder / prompt template builder | **是** | `prompt-template-builder` | Prompt template builder | **absorb** |
| S4/S5/S6/S7 | text to / copilot / website / maker… | 否 | 同上 | — | absorb |
| S1 图像 | midjourney prompt builder | 另页时是 | （待定，须含 prompt+builder\|generator） | （待定） | **defer**（现页 FAQ 已覆盖计划） |
| S2+S3 写作/随机 | writing / dialogue / random prompt generator | 另页时是 | （待定；建议一 URL） | （待定） | **defer**（现页 FAQ/Use case） |
| 服务/品牌/Best | — | — | — | — | **drop** |

### 独立 URL 一览

| 优先级 | slug | 主打 H1（须 §0） | 同页须覆盖 | 周名额 |
| --- | --- | --- | --- | --- |
| 现页 | `prompt-template-builder` | Prompt template builder | S4–S7；S1/S2/S3 暂挂 FAQ | **不占周** |
| 待定 | S1 图像；S2+S3 写作/随机（控件不同才拆；优先合并写作+随机） | 各用场景长尾且含 prompt+builder\|generator | — | 用户点名 + 仍须过 SERP；默认不进攻 head |

---

## 6. 关键词归属

### 6.1 → `prompt-template-builder`（S0 + 同控件场景）

| 场景 | 代表词 | 落点 |
| --- | --- | --- |
| S0 | `ai prompt builder`、`ai prompt templates`、`create your own prompt`、`create ai prompts` | 主打 / 次主打 / Use cases |
| S4 | `text to prompt generator`、`text prompt generator`… | Use cases + How（非 LLM） |
| S5 | `copilot prompt builder`、`chat prompt generator` | Use case 芯片 |
| S6 | `website prompt generator` | Use case |
| S7 | maker/creator/free/generator 头词 | FAQ 近义或划界；**不改** H1 |

### 6.2 → 须覆盖；主打未钉死（S1 / S2 / S3）

| 场景 | Planner 代表词 | 覆盖计划 |
| --- | --- | --- |
| S1 图像 | `midjourney prompt builder`、`sketch prompt generator` | 现页 FAQ；另页主打 = 该长尾（已含 prompt+builder\|generator） |
| S2 写作 | dialogue / character / script / writing / scenario / idea / write / plot… | 现页 Use case/FAQ；另页建议一 URL，主打 **writing prompt generator** 类 |
| S3 随机 | `random prompt generator` | 现页 FAQ；优先并入 S2 页作模式，或自有主打 random… |

### 6.3 → drop

整组 Prompt Service；`betterprompt`；`best …` / `… pro`。

---

## 7. 对已有页的 SEO / 功能（全场景覆盖）

1. **主打巩固**：desc/FAQ 强化 **ai prompt builder** + templates + create your own。  
2. **非主打全覆盖**：S4–S7 进 Use cases/FAQ；S1/S2/S3 各至少一句；**S8–S12（电影/短剧/Android/iOS/四平台）** 已在 S0 场景芯片 + description + FAQ 体现。  
3. **划界**：不调用 LLM；vs {{var}} 填充器；vs 头词 generator 站；**ChatGPT/Gemini/Claude/DeepSeek 同页点名，不拆 URL**。  
4. **另页**：仅当图像参数控件或写作/随机控件与四字段实质不同，且命名过 §0；默认不占周进攻。

---

## 8. 周产能 / 下一步

1. **本周 0 build**。  
2. 存量：按 S0–S7 补 FAQ/Use cases（含 website）。  
3. S1 / S2+S3：保留覆盖计划；独立 URL 须用户点名 + 命名过 §0。  
4. 新 Planner 若出现 video / thesis / android|ios **且**带 prompt+builder|generator，再追加场景行。  
5. 未建 work-tasks。
