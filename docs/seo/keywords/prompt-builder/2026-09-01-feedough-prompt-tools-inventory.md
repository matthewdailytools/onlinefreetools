# Feedough Prompt 工具调研清单

- date: **2026-09-01 22:05**（Asia/Shanghai）
- target: [https://www.feedough.com/](https://www.feedough.com/)
- 主目录页: [AI Tools for Prompting](https://www.feedough.com/ai-tools-for-prompting/)
- method: 首页 Popular +「AI Tools for Prompting」目录抓取；抽查旗舰页与若干子工具 HTTP 200；**未**登录、**未**逆向 API、**未**抄正文
- purpose: 竞品能力地图，对照本站 `prompt-template-builder` 与场景表 S0–S7；**禁止**把本清单标题套路成空壳页

> **一句话**：Feedough 的 Prompt 产品线是 **云端 LLM 扩写 / 优化 / 反推** 矩阵（通用 + 模型专用 + 模态专用 + 技法专用 + 格式专用），外加 Prompt 库与少量视频帧工具。与本站「本地结构化 Role/Task/Constraints、不调用模型」路径不同；对方在 **head** SERP 上密度高，本站不以此清单进攻同名头词。

---

## 1. 产品定位（观测）

| 维度 | Feedough（观测） | 本站现页（对照） |
| --- | --- | --- |
| 核心能力 | 短想法 → **模型生成**完整 Prompt；可再优化 / 检查 | 草稿 → **本地**四字段结构（MD/JSON） |
| 登录 | 宣称 free / unlimited / no login（工具页文案） | 本地、无账号 |
| 模态 | Text / Image / Video 三分（旗舰页） | 文本结构为主 |
| 分发 | 170+ AI tools 站内矩阵 + 社区/newsletter | 单工具页 + 场景 absorb |

---

## 2. 旗舰：AI Prompt Generator

- URL: [https://www.feedough.com/ai-prompt-generator/](https://www.feedough.com/ai-prompt-generator/)
- 首页标为 **Most Popular** / Popular right now
- **模式（UI）**：Text Prompt · Image Prompt · Video Prompt
- **Text**：Prompt Framework 下拉（页面可见示例：Standard、Reasoning、Race、Care、Ape、Create、Tag、Creo、Rise、Pain、Coast、Roses、Resee 等；文案称约 **13** 框架）+ Prompt Style（如 ORACLE / ChatGPT Optimized / Claude Optimized）
- **Image**：视觉控件（风格 / 构图 / 机位 / 情绪光线等；文案）
- **Video**：按视频平台优化（文案提及 Kling、Seedance、Veo 等）
- **后处理**：Generated Prompt 复制；Improve Prompt / 追问式改进；Version History
- **关联交叉链**：Optimiser、ChatGPT / Midjourney / Stable Diffusion / Image-to-prompt / Reasoning 等子工具

**对本站**：对应 Planner 头词 `ai prompt generator`（已 SERP=**head**）→ 仅 FAQ 划界，**禁作进攻 H1**。

---

## 3. 目录清单（AI Tools for Prompting）

来源：目录页工具卡标题 + 站内 canonical URL（2026-09-01）。  
「场景粗分」仅供对照本站 S0–S7 / 扩展模态，**不是**建议一一建页。

### 3.1 通用扩写 / 质检

| # | 工具名 | URL | 场景粗分 | 备注 |
| ---: | --- | --- | --- | --- |
| 1 | AI Prompt Generator | https://www.feedough.com/ai-prompt-generator/ | 通用多模态扩写 | 旗舰；Text/Image/Video |
| 2 | AI Prompt Optimiser | https://www.feedough.com/ai-prompt-optimiser/ | 已有 Prompt 精炼 | 拼写 optimiser（英式） |
| 3 | AI Prompt Checker | https://www.feedough.com/prompt-checker/ | 已有 Prompt 质检 | 目录卡名；路径 `prompt-checker` |

### 3.2 模型 / 助手专用 Generator

| # | 工具名 | URL | 场景粗分 | 备注 |
| ---: | --- | --- | --- | --- |
| 4 | ChatGPT Prompt Generator | https://www.feedough.com/chatgpt-prompt-generator/ | Chat 情境 | 目录/导航亦称 Free ChatGPT… |
| 5 | Gemini Prompt Generator | https://www.feedough.com/gemini-prompt-generator/ | Chat 情境 | |
| 6 | Copilot Prompt Generator | https://www.feedough.com/copilot-prompt-generator/ | Copilot 情境 | 对齐本站 S5 搜法 |
| 7 | DeepSeek Prompt Generator | https://www.feedough.com/deepseek-prompt-generator/ | 模型专用 | |
| 8 | Claude Prompt Generator | https://www.feedough.com/the-free-claude-prompt-generator/ | Chat 情境 | **存活**；本次目录卡未列入，属同族补充 |

### 3.3 图像 / 设计 Prompt

| # | 工具名 | URL | 场景粗分 | 备注 |
| ---: | --- | --- | --- | --- |
| 9 | Free Image Prompt Generator | https://www.feedough.com/image-prompt-generator/ | 图像正向 | 对齐 S1 |
| 10 | Image to Prompt Generator | https://www.feedough.com/image-to-prompt-generator/ | 图像反推 | 上传图→Prompt；Plain Text / JSON |
| 11 | AI Image Description Generator | https://www.feedough.com/ai-image-description-generator/ | 图像描述 / alt / 反推辅助 | 首页亦挂「AI Images」 |
| 12 | Midjourney Prompt Generator | https://www.feedough.com/midjourney-prompt-generator/ | Midjourney | 对齐 Planner `midjourney prompt builder` |
| 13 | Stable Diffusion Prompt Generator | https://www.feedough.com/stable-diffusion-prompt-generator/ | SD | |
| 14 | Flux Prompt Generator | https://www.feedough.com/flux-prompt-generator/ | Flux | |
| 15 | Art Prompt Generator | https://www.feedough.com/ai-art-prompt-generator/ | 艺术图 | |
| 16 | Graphic Design Prompt Generator | https://www.feedough.com/ai-graphic-design-prompt-generator/ | 平面设计 | |
| 17 | TOON Prompt Generator | https://www.feedough.com/toon-prompt-generator/ | 卡通风格 | |

### 3.4 视频 Prompt / 帧工具

| # | 工具名 | URL | 场景粗分 | 备注 |
| ---: | --- | --- | --- | --- |
| 18 | Video Prompt Generator | https://www.feedough.com/video-prompt-generator/ | 视频正向 | 本站 Planner **无** video 词 → 暂不立场景 |
| 19 | Sora Prompt Generator | https://www.feedough.com/sora-prompt-generator/ | Sora | |
| 20 | Runway Prompt Generator | https://www.feedough.com/runway-prompt-generator/ | Runway | |
| 21 | VEO 3 Prompt Generator | https://www.feedough.com/veo-3-prompt-generator/ | Veo 3 | |
| 22 | Video Frame Extractor | https://www.feedough.com/video-frame-extractor/ | 视频→帧图 | 非 Prompt 生成；同目录 |
| 23 | Final Frame Extractor | https://www.feedough.com/final-frame-extractor/ | 末帧提取 | 同上 |

### 3.5 推理 / 技法框架

| # | 工具名 | URL | 场景粗分 | 备注 |
| ---: | --- | --- | --- | --- |
| 24 | Reasoning Prompt Generator | https://www.feedough.com/ai-reasoning-prompt-generator/ | 推理技法 | |
| 25 | Chain Of Thought Prompt Generator | https://www.feedough.com/chain-of-thought-prompt-generator/ | CoT | |
| 26 | Tree Of Thought Prompt Generator | https://www.feedough.com/tree-of-thought-prompt-generator/ | ToT | |
| 27 | Zero-shot Prompt Generator | https://www.feedough.com/zero-shot-prompt-generator/ | Zero-shot | |
| 28 | Few-shot Prompt Generator | https://www.feedough.com/few-shot-prompt-generator/ | Few-shot | |

### 3.6 结构化格式输出

| # | 工具名 | URL | 场景粗分 | 备注 |
| ---: | --- | --- | --- | --- |
| 29 | JSON Prompt Generator | https://www.feedough.com/json-prompt-generator/ | 格式=JSON | 与「本地字段→JSON」不同（对方为 LLM 生成） |
| 30 | XML Prompt Generator | https://www.feedough.com/xml-prompt-generator/ | 格式=XML | Claude 页亦强调 XML/非 XML |

### 3.7 Prompt 库（非 Generator）

| # | 工具名 | URL | 场景粗分 | 备注 |
| ---: | --- | --- | --- | --- |
| 31 | 15000+ ChatGPT Prompts | https://www.feedough.com/chatgpt-prompts/ | 模板库 | 可复制库，非交互 builder |

**目录页合计（含帧工具与库）约 30 张卡**；上表 **31** 行含目录外 Claude 补充。

---

## 4. 能力聚类（给本站用的读法）

```text
A  通用 LLM 扩写（旗舰 Text/Image/Video）
B  模型皮（ChatGPT / Claude / Gemini / Copilot / DeepSeek…）— 同作业、换情境名
C  图像正向（MJ / SD / Flux / Art / Design / TOON）
D  图像反向（image-to-prompt + image description）
E  视频正向（Video / Sora / Runway / Veo）+ 帧提取辅助
F  技法（CoT / ToT / zero/few-shot / reasoning）
G  格式（JSON / XML）
H  质检链路（Optimiser + Checker）
I  静态 Prompt 库
```

与本站场景表对照：

| 本站场景 | Feedough 是否厚覆盖 | 本站动作（既定策略） |
| --- | --- | --- |
| S0 结构化本地模板 | 薄（对方主打 LLM 扩写，非纯本地字段） | 现页主打 + IG：本地 Role/Task… |
| S1 图像 | **厚**（C+D+旗舰 Image） | FAQ；另页默认不进攻 head |
| S2/S3 写作/随机 | 间接（旗舰 Text + 库） | FAQ/Use case |
| S4 text→prompt | 厚（旗舰 + 多 Generator） | Use case + 非 LLM 划界 |
| S5 Copilot/Chat | 厚（B） | 芯片 absorb |
| 视频 | **厚**（E） | Planner 无词 → **不臆造**；若日后有搜法再议 |
| 论文 / 移动端代码 | 未见同名专用卡 | 无搜法则不立 |

---

## 5. 差异化要点（勿抄袭）

1. Feedough = **调用模型**写 Prompt；本站 = **不调用模型**的结构化组装。  
2. 对方用 **大量近义 URL**（按模型 / 模态 / 技法拆页）占 SERP；本站策略禁止按 Maker/平台名换皮拆页，平台只作情境芯片（§3.3 H）。  
3. 可学的是**场景覆盖宽度**（图像反推、视频、质检链），不是复制其 LLM SaaS 形态。  
4. 任何 absorb 文案只写本站真实能力；FAQ 可一句对比「与云端 Prompt 生成器不同：本页本地结构化」。

---

## 6. 复核清单（维护用）

- [ ] 每季重开 [AI Tools for Prompting](https://www.feedough.com/ai-tools-for-prompting/) 核对增删  
- [ ] 旗舰页模式 / 框架下拉是否变化  
- [ ] Claude 等「目录外但仍 200」的同族页  
- [ ] 是否出现与本站 Planner 新词对齐的专用页（再回写 `*-keyword-planner.md`）

---

## 7. 相关本站文档

- 场景与命名：[`2026-09-01-prompt-builder-keyword-planner.md`](./2026-09-01-prompt-builder-keyword-planner.md)  
- Google / Bing SERP：[`2026-09-01-prompt-builder-serp.md`](./2026-09-01-prompt-builder-serp.md) · [`2026-09-01-prompt-builder-bing-serp.md`](./2026-09-01-prompt-builder-bing-serp.md)  
- 主题 README：[`README.md`](./README.md)
