# 每工具开发与 SEO 方案

**日期**: 2026-07-28  
**标签**: `工具落地`, `开发`, `SEO`, `Information Gain`  
**目标站点**: https://onlinefreetools.org

**依据**:
- [工具方向](./2026-07-28-tool-direction.md) — **三方向并列**（A 浏览器 JS / B 场景桥接 / C 行业专属），非交叉乘积  
- [Google SEO 策略与落地](./2026-07-28-google-seo-strategy-implementation.md) — 合规与 IG  
- [SEO_TOOL_RULES](./SEO_TOOL_RULES.md) · [发布清单](./SEO_PUBLISH_CHECKLIST.md)

> **本文职责**：把工具方向中的候选与存量工具，落成「开发 + SEO」可执行卡片。上线前仍须勾选 Doc2 §8.2 Checklist。  
> 每张卡片只标一个**主方向**（A/B/C）；不必同时满足三方向。

**卡片字段约定**：

| 字段 | 含义 |
|---|---|
| 元数据 | slug / 路径 / 集群 / 优先级 / **主方向** / 场景或垂直（若适用） |
| 场景与行业 | 岗位与 Use cases |
| 技术 | 包、Tier、本地处理 |
| IG 配额 | 计划勾选的 §3.1 维度 |
| Meta / Schema / YMYL | SEO 填空 |
| 内链 | related 建议 |
| 验收 | lint + 人工 |
| 工期 | 粗估 |

---

## 0. 通用工程模板（所有新工具）

```
src/site/tool-catalog.json
src/index.ts                    # registerToolPage
src/pages/{tool}Page.ts
src/site/i18n/{lang}.ts × 10
public/scripts/tools/{tool}.js  # 可选
npm run lint:seo && npm run build:site
```

JSON-LD：`BreadcrumbList` + `WebApplication`（`src/pages/site/toolContent.ts`）。  
FAQ ≥ 3；description 含步骤/公式 + 示例。

---

## A. P0 完整卡片（按开工顺序）

### A1. JSON Schema Validator

| 字段 | 内容 |
|---|---|
| **slug / 路径** | `json-schema-validator` → `/tools/json-schema-validator` |
| **主方向** | **B**（场景桥接；亦可被 C-V1 互链，不强制双挂） |
| **集群 / 优先级** | C05 · P0 · 第 1 个开工 |
| **场景** | B1 Agent 调试 · B4 feed · B5 数据交换 |
| **场景与行业** | 开发者 / AI：粘贴 Schema + JSON（常为模型输出），展示通过或错误路径 |
| **技术** | Tier 0/1：`zod` 或 Ajv 浏览器构建；纯客户端；大 Schema 防卡顿可 Web Worker |
| **IG 配额（建议）** | ① 规则/错误路径解释 ② 失败案例 FAQ ③ AI 模型输出 Use case ⑤ JSON Schema 官网引用 ⑥ 本地处理 ⑧ 通过/失败双示例 ⑨ 链 yaml-json / ai-token-counter |
| **Title (en)** | `JSON Schema Validator Online \| Online Free Tools` |
| **Description 要点** | validate JSON against Schema + error path + example fail case |
| **Schema** | WebApplication；可见 FAQ ≥ 3（含「为何校验失败」「模型输出怎么用」） |
| **YMYL** | 否 |
| **related** | `yaml-json`, `ai-token-counter`（上线后补；暂用 `markdown-to-html`, `website-headers`） |
| **验收** | `lint:seo`；人工抽 zh/es；错误路径文案与 UI 一致 |
| **工期** | ~1–1.5d |

**开发要点**：

1. 双面板：Schema / Instance；实时或按钮触发校验。  
2. 错误列表：JSON Pointer 路径 + 人话解释。  
3. 示例一键填充：合法对象 + 故意缺字段对象。  
4. article：Draft 版本差异说明（如 draft-07）+ 引用 json-schema.org。

---

### A2. AI Token / Cost Estimator

| 字段 | 内容 |
|---|---|
| **slug / 路径** | `ai-token-counter` → `/tools/ai-token-counter` |
| **主方向** | **B** |
| **集群 / 优先级** | C05 · P0 · 第 2 |
| **场景** | B1 |
| **场景与行业** | Prompt 工程师 / 开发者：粘贴文本估 token 与费用 |
| **技术** | Tier 0：字符启发式（可配置 chars/token）；可选轻量 tokenizer 作高级模式；价格表 JSON 可配置 |
| **IG 配额** | ① 估算公式 ② 局限 FAQ（非官方精确 billing）④ 多模型价差对照表 ⑥ 本地粘贴 ⑧ 数值示例 ⑨ 链 safe-paste / schema |
| **Title (en)** | `AI Token and Cost Estimator \| Online Free Tools` |
| **Description 要点** | estimate tokens + cost formula + example prompt length |
| **Schema** | WebApplication |
| **YMYL** | 否（费用估算须声明「非账单」） |
| **related** | `safe-paste-cleaner`, `json-schema-validator`, `prompt-template-builder`（P1） |
| **验收** | 价表有更新日期；FAQ 强调估算误差 |
| **工期** | ~1d |

**开发要点**：

1. 模型下拉 + 自定义 $/1M in/out。  
2. 显示：字符数、估 token、估费用。  
3. References：各厂商公开定价页（出站 dofollow 权威）。  

---

### A3. Safe Paste Cleaner

| 字段 | 内容 |
|---|---|
| **slug / 路径** | `safe-paste-cleaner` → `/tools/safe-paste-cleaner` |
| **主方向** | **B** |
| **集群 / 优先级** | C05 · P0 · 第 3 |
| **场景** | B1 第一步 |
| **场景与行业** | AI 用户：清理零宽字符、隐藏 Unicode、可疑 prompt 注入痕迹 |
| **技术** | Tier 0：纯 JS Unicode 过滤 + 前后 diff 高亮 |
| **IG 配额** | ① 检测规则表 ② 边界（合法语言字符误杀）③ 安全粘贴场景 ⑥ 本地 ⑧ 脏/净对照示例 ⑨ 链 token-counter |
| **Title (en)** | `Safe Paste Cleaner — Remove Hidden Characters \| Online Free Tools` |
| **Description 要点** | strip zero-width + rule table + before/after example |
| **Schema** | WebApplication |
| **YMYL** | 否 |
| **related** | `ai-token-counter`, `prompt-template-builder`（P1） |
| **验收** | 规则表可见；一键复制干净文本 |
| **工期** | ~0.5–1d |

---

### A4. YAML ↔ JSON

| 字段 | 内容 |
|---|---|
| **slug / 路径** | `yaml-json` → `/tools/yaml-json` |
| **主方向** | **B**（技术零件亦属方向 A 文本品类） |
| **集群 / 优先级** | C05 · P0 · 第 4 |
| **场景** | B2 · B5 |
| **场景与行业** | 开发者 / 数据：配置与训练数据格式互通 |
| **技术** | Tier 1：`js-yaml`；双向；错误行号提示 |
| **IG 配额** | ① 类型推断规则 ② YAML 坑 FAQ（锚点、多文档）③ AI 配置 Use case ⑤ YAML 规范引用 ⑧ 双示例 ⑨ 链 schema-validator / csv-json |
| **Title (en)** | `YAML to JSON Converter Online \| Online Free Tools` |
| **Description 要点** | convert YAML↔JSON + typing rules + sample config |
| **Schema** | WebApplication |
| **YMYL** | 否 |
| **related** | `json-schema-validator`, `markdown-to-html` |
| **验收** | 非法 YAML 可读错误；本地处理 FAQ |
| **工期** | ~1d |

---

### A5. Meta Description Length / SERP Preview

| 字段 | 内容 |
|---|---|
| **slug / 路径** | `meta-serp-preview` → `/tools/meta-serp-preview` |
| **主方向** | **B**（叙事亦可归 C-V2，主方向只选一个：此处 B） |
| **集群 / 优先级** | C08 · P0 · 第 5 |
| **场景** | B3 |
| **场景与行业** | 站长：检查 title/description 字符与近似像素宽度、SERP 预览 |
| **技术** | Tier 0：自研计数 + Canvas/估算像素宽；可选多引擎预设 |
| **IG 配额** | ① 字符/像素规则 ④ 引擎差异对照表 ③ 上线检查场景 ⑤ Google Search Central 引用 ⑧ 超长截断示例 ⑨ 链 faq-schema（P1）/ website-headers |
| **Title (en)** | `Meta Description Length Checker & SERP Preview \| Online Free Tools` |
| **Description 要点** | count characters + pixel estimate + SERP preview example |
| **Schema** | WebApplication |
| **YMYL** | 否 |
| **related** | `website-headers`, `how-to-calculate-gradient`（暂）；上线后 `faq-schema-generator` |
| **验收** | 声明「预览非官方截图」；规则可更新 |
| **工期** | ~1–1.5d |

---

### A6. Chat Export Converter

| 字段 | 内容 |
|---|---|
| **slug / 路径** | `chat-export-converter` → `/tools/chat-export-converter` |
| **主方向** | **B** |
| **集群 / 优先级** | C05 · P0 · 第 6 |
| **场景** | B2 |
| **场景与行业** | 研究者 / Prompt 工程师：ChatGPT/Claude 导出 → Markdown / JSON / CSV |
| **技术** | Tier 0/1：纯 JS 解析常见导出 JSON；`papaparse`/`csv-stringify` 导出；文件本地读 |
| **IG 配额** | ① 字段映射表 ② 丢失字段 FAQ ③ 语料归档场景 ⑥ 不上传 ⑧ 样例导出文件 ⑨ 链 yaml-json / token-counter |
| **Title (en)** | `Chat Export to Markdown JSON CSV Converter \| Online Free Tools` |
| **Description 要点** | map export fields + sample file + privacy local |
| **Schema** | WebApplication |
| **YMYL** | 否 |
| **related** | `yaml-json`, `ai-token-counter`, `csv-json`（P1） |
| **验收** | 提供最小样例 JSON；映射表可见 |
| **工期** | ~1.5–2d |

**风险**：厂商导出格式变更 → FAQ 写明支持版本；失败时给出「粘贴原始 JSON」路径。

---

### A7. Amazon Image Resizer（1→N）

| 字段 | 内容 |
|---|---|
| **slug / 路径** | `amazon-image-resizer` → `/tools/amazon-image-resizer` |
| **主方向** | **B**（B7；亦可叙事挂 C-V3） |
| **集群 / 优先级** | C06 · P0（1→N 产能线） |
| **场景** | 单张商品图 → Amazon 主图/辅图尺寸 + 体积合规包 |
| **技术** | Tier 0/1：Canvas 缩放/裁切/压缩；可选 ZIP；规格来自 `asset-specs/amazon.json` |
| **IG 配额** | ④ 平台规格对照表 ⑤ Seller Central 引用 ⑥ 本地处理 ① 裁切策略说明 ⑧ 输入→输出清单 Example ⑨ 链 marketplace-image-pack |
| **Title (en)** | `Amazon Product Image Resizer — Size & File Limits \| Online Free Tools` |
| **YMYL** | 否（价格工具另算） |
| **related** | `marketplace-image-pack`, `app-icon-generator-pack`（占位可用 markdown-to-html） |
| **验收** | 规格表有检索日期；超体积时提示降质；ZIP 或分文件下载可用 |
| **工期** | ~1.5–2d |

---

### A8. App Icon Generator Pack（1→N）

| 字段 | 内容 |
|---|---|
| **slug / 路径** | `app-icon-generator-pack` → `/tools/app-icon-generator-pack` |
| **主方向** | **B**（B6） |
| **集群 / 优先级** | C05/C06 · P0（1→N） |
| **场景** | 一张 Logo → iOS/通用 App Icon 多尺寸 ZIP |
| **技术** | Canvas + ZIP；规格 JSON；提示「App Store 营销图勿透明」 |
| **IG** | 完整尺寸表 + Apple HIG/Connect 引用 + 安全边距示意 + Example 清单 |
| **Title (en)** | `App Icon Generator — All Sizes Pack \| Online Free Tools` |
| **related** | `ios-app-screenshot-resizer`, `google-play-asset-pack` |
| **工期** | ~1.5–2d |

---

### A9. iOS App Screenshot Resizer（1→N）

| 字段 | 内容 |
|---|---|
| **slug / 路径** | `ios-app-screenshot-resizer` → `/tools/ios-app-screenshot-resizer` |
| **主方向** | **B**（B6） / 可选 C-V6 |
| **集群 / 优先级** | C05/C06 · P0（1→N，规格维护成本较高） |
| **场景** | 一张介绍截图 → iPhone/iPad 当期截图尺寸套装 |
| **技术** | Canvas + ZIP；`asset-specs/ios-screenshots.json`；Fit/Crop/Pad |
| **IG** | 机型尺寸表 + Apple screenshot specifications 引用 + 更新日期 + 预览网格 |
| **Title (en)** | `iOS App Screenshot Resizer for App Store \| Online Free Tools` |
| **related** | `app-icon-generator-pack`, `google-play-asset-pack` |
| **工期** | ~2–2.5d（含规格表校对） |

---

## B. P1 简卡

### B1. Prompt Template Builder

| 项 | 内容 |
|---|---|
| **slug** | `prompt-template-builder` |
| **场景链** | S1 |
| **技术** | Tier 0 规则拆分 + 可选 zod 校验输出结构 |
| **SEO** | Use cases 绑 Agent；Example 填完整模板；related → token / schema / safe-paste |
| **IG** | 模板字段定义表 + 边界（非生成文案产品） |
| **工期** | ~1–1.5d |

### B2. CSV ↔ JSON（产品 feed）

| 项 | 内容 |
|---|---|
| **slug** | `csv-json` |
| **场景链** | S2 · S4 · 垂直 V3 |
| **技术** | Tier 1：`papaparse` |
| **SEO** | 示例列名用 SKU/price/title；FAQ 类型推断；related → yaml-json / schema |
| **IG** | 电商 feed 字段对照 + 本地处理 |
| **工期** | ~1d |

### B3. FAQ / HowTo Schema Generator

| 项 | 内容 |
|---|---|
| **slug** | `faq-schema-generator` |
| **场景链** | S3 · V2 |
| **技术** | Tier 0：表单 → JSON-LD 字符串；强调与可见内容一致 |
| **SEO** | References → Schema.org FAQPage；FAQ 写「不以富结果为 KPI」立场与本站 Doc2 一致 |
| **YMYL** | 否 |
| **工期** | ~1d |

### B4. BMR / TDEE（教育）

| 项 | 内容 |
|---|---|
| **slug** | `bmr-tdee-calculator`（或拆分，优先单页双公式） |
| **集群** | C01 · YMYL **是** |
| **技术** | Tier 0：Mifflin-St Jeor 等纯公式 |
| **SEO** | disclaimer + WHO/CDC references；局限 FAQ（运动员等）；禁止诊疗建议 |
| **related** | `how-to-calculate-bmi` |
| **工期** | ~1.5d（含 10 语免责审核） |

### B5. Compound Interest / Loan EMI

| 项 | 内容 |
|---|---|
| **slug** | `compound-interest-calculator` / `loan-emi-calculator`（可先做复利一页） |
| **集群** | C02 · YMYL **是** |
| **技术** | Tier 0：公式 + 可选摊还表 |
| **SEO** | 假设表（利率/期数）+ 非投资建议 disclaimer + Investopedia 类引用 |
| **related** | `how-to-calculate-roi`, `how-to-calculate-marginal-revenue` |
| **工期** | ~1.5–2d |

### B6. OCR → Text（POC 后）

| 项 | 内容 |
|---|---|
| **slug** | `ocr-to-text` |
| **场景链** | S2 |
| **技术** | Tier 2：`tesseract.js`；**点击后**加载；语言包按需 |
| **SEO** | 隐私「不上传」主打；准确率局限 FAQ；CWV 测量必过 |
| **工期** | POC 0.5d + 产品 2d |

### B7. HTML → Markdown（增强现有页或新 slug）

| 项 | 内容 |
|---|---|
| **建议** | 增强 `/tools/markdown-to-html` 为双向，或 `html-to-markdown` |
| **技术** | `turndown` + 现有 `marked` |
| **SEO** | 避免重复薄页：优先同页 Tab；related 保持开发者链 |
| **工期** | ~0.5–1d |

---

## C. 已上线工具 — 缺口增强（非重写）

按 Doc2 §3.1 补齐，不改 slug。

| 工具 | slug | 优先补齐 |
|---|---|---|
| Website Headers | `website-headers` | How 步骤细化；References（HTTP 规范）；FAQ 本地/隐私；related 链向 meta-serp（上线后） |
| What Is My IP | `ip-address` | 说明边缘获取方式；局限（代理/VPN）；少堆关键词 |
| Markdown → HTML | `markdown-to-html` | 安全消毒说明（DOMPurify）；双向增强见 B7；示例前后对照 |
| BMI | `how-to-calculate-bmi` | 局限 FAQ；WHO 引用；disclaimer 醒目 |
| ROI | `how-to-calculate-roi` | 假设表；非投资建议；Investopedia 类引用 |
| Marginal Revenue | `how-to-calculate-marginal-revenue` | 公式推导可见；YMYL disclaimer |
| Square Feet | `square-feet` | 行业场景（房产/装修）改写 Use cases，避免纯泛化单位感 |
| Percentage Change | `how-to-calculate-percentage-change` | 完整数值例 + 商业/数据场景 |
| Gradient | `how-to-calculate-gradient` | 与 C08 站长/设计互链；公式清晰 |

**存量验收**：每工具至少新增/确认 3 条 IG；YMYL 三项（BMI/ROI/边际收益）disclaimer + references 必查。

---

## D. 互链矩阵（P0 全部上线后目标）

| 工具 | related（目标） |
|---|---|
| json-schema-validator | yaml-json, ai-token-counter |
| ai-token-counter | safe-paste-cleaner, json-schema-validator |
| safe-paste-cleaner | ai-token-counter, prompt-template-builder |
| yaml-json | json-schema-validator, csv-json |
| meta-serp-preview | website-headers, faq-schema-generator |
| chat-export-converter | yaml-json, ai-token-counter |

未上线的 related 用已上线开发者工具占位，避免坏链。

---

## E. 执行看板

| 顺序 | 工具 | 产线 | 状态 | 目标周 |
|---|---|---|---|---|
| 1 | json-schema-validator | B 1→1 | 待开发 | W1 |
| 2 | ai-token-counter | B 1→1 | 待开发 | W1–W2 |
| 3 | safe-paste-cleaner | B 1→1 | 待开发 | W2 |
| — | **或并行** amazon-image-resizer | B **1→N** | 待开发 | W1–W2 |
| — | app-icon-generator-pack | B **1→N** | 待开发 | W2 |
| — | ios-app-screenshot-resizer | B **1→N** | 待开发 | W3 |
| 4 | yaml-json | B 1→1 | 待开发 | W2–W3 |
| 5 | meta-serp-preview | B 1→1 | 待开发 | W3 |
| 6 | chat-export-converter | B 1→1 | 待开发 | W3–W4 |
| — | 存量 YMYL IG 补齐 | C | 并行 | 持续 |
| P1 | 见 §B + favicon/social/play 包 | 混合 | 待排 | W5+ |

每周不超过 2 个新工具（含 10 语审核）。1→1 与 1→N 可各开一条产能线但勿同周堆薄页。状态变更时更新本表与工具方向 § 优先级。

---

*维护：工具上线后在本文件对应卡片顶部标注「已上线 YYYY-MM-DD」并更新 `tool-catalog.json`。*
