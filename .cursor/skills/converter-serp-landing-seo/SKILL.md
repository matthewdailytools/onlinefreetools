---
name: converter-serp-landing-seo
description: >-
  Apply converter SERP landing SEO: conversion-pair slug/H1/title, snippet-sized
  meta, How steps that match button labels, indexable settings copy, real
  related tools. Use when writing convert/compress/screenshot/batch-convert
  tool copy, analyzing competitor converter pages (webpage-to-jpg, html-to-pdf,
  FreeConvert-style), or optimizing title/H1/meta for format-pair tools. Does
  not override Google scaled-content rules, coverage-pass, or absorb-vs-build.
---

# 转换器着陆页 SEO（SERP 结构）

从大型转换站（例：[FreeConvert Web Page to JPG](https://www.freeconvert.com/webpage-to-jpg)）抽出**可复用结构**，落到本站工具页。  
**权威序**：Google Search Central（`seo-google-policy.mdc`）→ `lint:seo` → `tool-i18n-seo` / localization → **本 Skill**。  
本 Skill **不**替代 `tool-coverage-pass`（0b/2/4 仍须绿）。选题仍走 `keyword-to-tool-funnel`（头词禁硬刚 H1 ≠ 不做工具）。  
首屏输入/按钮/折叠设置走 [converter-input-ui](../converter-input-ui/SKILL.md)，不要把 UI 层级写进本 SEO Skill。

## 何时必须使用

- 新建或改文案：convert / compress / screenshot / watermark / batch-convert / `*-to-*` 格式对
- 用户贴竞品转换页、说「学习 SEO 结构 / 对标 converter」
- 写 `02` Title / Description / How / Settings 说明，或压 meta 长度

计算器、纯校验器、prompt 构建器：**不要**套本 Skill 的 `{A} to {B}` 公式。

## 学什么 / 不学什么

**学（结构）**

1. Slug / H1 / title 与**同一作业**对齐（用户搜什么，地址和标题就长什么样）
2. Meta 按 **SERP 摘要窗口**写（约 120–160 字符），不是说明书全文
3. How 步骤用 **和按钮相同的词**
4. 会改变产物的控件写成 **可索引 H2**（视口、质量、等待、整页/首屏、print CSS…）
5. 近义问法收进 lead / FAQ（一条 URL vs 多条），**不拆 doorway**
6. Related 指向**真能办成相邻作业**的工具

**不学（政策红线）**

- 几十条近义「X to JPG」列表（scaled / doorway）
- 「What is a JPG / How to open JPG」百科空壳
- H1/title 堆 `Best` / `100% free` / `online`
- 邻页文案残留（JPG 页还写 PDF orientation）
- 为进 AI Overview 加 HowTo schema / `llms.txt`

工作示例与本站对照：[example-webpage-to-jpg.md](example-webpage-to-jpg.md)

## H1 / slug / title 决策

先判**搜索者打开页要办成的作业**（不是我们爱用的产品名）。

| 情况 | H1 / slug | title 模式 |
|---|---|---|
| 主作业就是一条 `{源} → {目标}`，且本站没有更贴的邻页 | `{Source} to {Target}` 或当地「把 A 转成 B」 | `{H1} Converter \| {brand}`（他语用当地「转换器」类，勿硬塞 Converter） |
| 主作业是**批量 / 多文件 / 多 URL**，头词是单条 | **任务句**（Batch convert… / 批量把…）；头词 absorb 进 desc/FAQ | `{任务句} \| {brand}` |
| 头词已被大站占位且策略禁硬刚 H1 | 场景/长尾任务句进 H1；头词仍可 absorb | 同左 |
| 控件是视口/质量/延迟 | **不进 H1**（参数枚举） | 同左 |

禁止：仅换 title 再开 `/webpage-to-jpg` 去抢已有 `batch-convert-web-pages-to-jpg`。

## Meta description（`tool_*_description`）

`lint:seo` 要求 ≥120 字且含步骤/示例。同时要对齐摘要窗口：

1. **前 120–160 字符**必须能单独当 snippet：动词 + 产物 + **一条真差异**（视口 / 批量 ZIP / 不落盘）
2. 步骤与示例用短句紧跟：`Steps: … Example: …`
3. 隐私写具体（「代抓一次不落盘 / 转换在本标签页」），禁止空「secure / 100% free」
4. `tool_*_desc`（首页卡）保持一句；不要把 meta 全文塞进卡片

不合格：480 字说明书当 meta（SERP 截断后主词和差异都看不见）。

## 页内信息架构（转换类）

从上到下，每块回答一类查询：

1. **H1 + lead** — 主词 + 一个近义（webpage to jpg / url to jpg）
2. **首屏工具** — 默认控件就是该作业（单 URL 就单框；批量就列表）
3. **How** — `how_item_*` 动词开头，用按钮原文（Convert all / Download ZIP）
4. **Settings / Rules** — 每个会改产物的控件用**人话解释一次**（这是 IG，不是口号）
5. **Example** — 与 `loadSample` 一致
6. **Use cases** — 岗位/流水线，不是「方便快捷」
7. **FAQ** — 上传吗？和邻页差在哪？一条 URL 行不行？登录墙？
8. **Related** — catalog ≥2，且作业真不同

How 禁止只写 Upload → Click → Download 而无对应控件。

## 设置文案清单（写进 How / Rules / FAQ，且须有控件）

转换 / 截图类逐项核对；没有的控件不要写进 H2 假装有：

- [ ] 视口宽度（或纸张/移动 vs 桌面）
- [ ] 等待 / 延迟（懒加载图）
- [ ] 质量 / 体积
- [ ] 整页 vs 首屏（或分页 vs 一长页）
- [ ] 失败 skip / 上限条数
- [ ] 与邻页产物差（PDF 分页 vs JPEG 栅格；文件上传 vs URL）

## Related 内链

- 只链 **已上线、能办成相邻作业** 的 slug（网页→PDF、PDF→JPG、HTML→PDF…）
- 单页 related **2–6** 条；不要复制竞品 80 条「万物转 JPG」
- 反向 related 若改邻页 catalog：须 `CROSS_TOOL_UPDATE=1`

## 0b / 文案验收（转换类附加）

在 `coverage:gate` 之外，Agent 自检：

- [ ] Slug/H1 决策表有结论（转换对 vs 任务句 vs absorb 头词）
- [ ] Meta 前 160 字符含主词或转换对 + 一条差异
- [ ] How 用词 = 按钮
- [ ] 每个差异控件在可见 Rules/FAQ 有一句
- [ ] 无百科节、无 Best、无近义 URL 列表
- [ ] Planner 头词若未进 H1，已 absorb 且一条输入能办成

然后才跑 `tool-coverage-pass` 的 phase 门禁。
