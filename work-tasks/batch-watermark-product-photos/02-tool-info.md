# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`batch-watermark-product-photos`  
**路径**：`/tools/batch-watermark-product-photos`  
**主方向**：A  
**YMYL**：否  

> 填完且状态为 `ready` 后，再按 `.cursor/rules/tool-creation.mdc` 实现。  
> IG 依据：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。

---

## 使用场景（§3.3 H）

| 使用场景 | 用户搜法 | 作业类型 | 本页默认 / 芯片 |
|---|---|---|---|
| 一整拍商品图盖同一版权字 | batch watermark product photos; batch watermark images | 多图同水印 → ZIP | **默认**：右下锚点、短边 8%、不透明度 0.45、文字 SAMPLE |
| DRAFT 斜铺 | tiled draft watermark | 同意图不同样式 | 芯片：斜铺 DRAFT |
| PDF 盖章 | batch watermark pdf | **另一作业** | 有意不满足 |
| 单张微调 | add watermark | 单文件近邻 | related 链到 `add-watermark` |

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：batch watermark product photos；batch watermark images；watermark photos in bulk；copyright watermark photos；add watermark to multiple images
- 用户真实任务：同一套文字水印盖很多张商品图，位置按画布相对对齐，下载 ZIP。
- [x] 竞品常见：云端批量水印、固定像素字号导致竖图错位。
- [x] 缺口：① 横竖图同一相对锚点；② 画布过小；③ 先预览再全部套用；④ 与 PDF 水印混淆。
- [x] 本页增益：短边百分比；过小失败行；Preview one → Apply all；失败跳过。
- [x] 长尾：batch watermark images 并进。PDF 有意不满足。落选词 bulk 只进 FAQ。
- [x] 权威来源 URL：https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillText
- [x] Use case：上架前打店铺名；外发样图打 SAMPLE。
- [x] 边界：画布短边过小拒绝；空文字禁用 Apply；JPEG 输出需垫底（默认白）。
- [x] Example：两张不同方向样例 → 同一相对位置水印 ZIP。
- [x] Related：`add-watermark`、`image-compress`

### 计划勾选的 §3.1 维度（至少 3）

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | 字号 = 短边 × 百分比；锚点相对画布 |
| 2 | 边界/失败 | 过小拒绝该行；失败跳过；上限 20 |
| 3 | 场景语境 | 商品照片版权字 |
| 4 | 对照表 | vs 单张 add-watermark；vs PDF 水印 FAQ |
| 5 | 权威引用 | Canvas fillText |
| 6 | 本地隐私 | 设备内、不上服务器 |
| 7 | 多语言 | 03 |
| 8 | 数值示例 | 8% 短边、两张样例 |
| 9 | 主题内链 | add-watermark、image-compress |

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | images / P0 batch 水印行 |
| 场景与行业 | 商品照片批量文字水印 |
| 技术 | Canvas fillText；fflate ZIP；Tier 0；`localProcessing: true` |
| Catalog `page.style` | **opts** |
| Title (en) | **Batch watermark product photos** |
| Description 要点 | Add a shoot of product photos, set one text stamp sized from the short edge, preview one frame, apply to all, skip tiny canvases, download a ZIP. Example: two listing shots share the same corner mark. Files stay on the device; they are not uploaded to a server. |
| Schema | WebApplication + BreadcrumbList |
| FAQ 要点（≥3） | 横图竖图位置会跑吗？会上传吗？能盖 PDF 吗？和单张水印有何不同？bulk 和 batch？ |
| Disclaimer / References | 非 YMYL；MDN fillText |
| related | `add-watermark`, `image-compress` |
| 验收 | `coverage:gate` 0b→2→4；`verify:tool` |
| 工期粗估 | 本 slug 一完整实现会话 |
| 本地化核查 | 见 `03-locale-briefs.md` |

## 清单前检索覆盖优化（生成页面模块清单前必做）

> 规则：`.cursor/rules/tool-i18n-localization.mdc`「清单前检索覆盖优化」。未填本表不得勾下方「页面模块清单」，不得标 `ready`。

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-03 |
| slug 结论 | 保留 `batch-watermark-product-photos`（场景句 + 选型词 batch；不拆 bulk-watermark 近义页） |
| 主检索词 → title/H1 | 英文 H1 原句 **Batch watermark product photos**；zh 用「批量给商品图加水印」当地句，不把 batch 硬塞进中文 H1 |
| 次要关键词 → desc / FAQ / Use cases | batch watermark images → desc / Use case；watermark photos in bulk → FAQ 落选词；copyright watermark photos → Use case；add watermark to multiple images → How |
| 用户搜索习惯判断 | 英语办公/电商说 batch watermark；中文搜「批量水印 / 商品图水印」 |
| 优化摘要 | 相对单张页换 multiple 的初稿：H1 定为商品图批处理；短边百分比与先预览写入交互；PDF 划出 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

> 填完后验收：`npm run coverage:gate -- --slug=batch-watermark-product-photos --phase=0b`

## Ads / Keyword Planner 长尾（有分析时必做）

- [x] 不适用（本 slug 无 Planner / Ads 长尾分析）
- [ ] 已引用分析路径：`docs/seo/keywords/…`

| 长尾词（Planner） | 归属 | 文案落点（H1/desc/FAQ/usecase） | 功能覆盖（控件/结果哪一步） | 不覆盖理由（若有） |
|---|---|---|---|---|
| — | — | 无 Ads CSV | — | 不适用 |

- [ ] 交互规格已按上表补齐能力（不仅写进文案）

## 用户意图审查（标 ready 前必做）

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-03 |
| 总判 | 满足：进页样例先预览再套用全部并给出 ZIP；默认就是商品图文字水印，不把 PDF 或单张微调抢首屏 |
| 主词搜索者任务 | 同一版权字盖一整拍照片，位置在横竖图上都相对正确，带走一整包 |
| Ads/Planner 长尾任务 | 不适用 |
| 满足之处 | How 先写选一批图、设文字与锚点、预览一张、全部套用、下 ZIP |
| 超出 / 应划边界 | 不做图片文件叠加当主路径（那是 overlay）；desc 无元叙述；不做 PDF |
| 缺口与已做优化 | 预览按钮在 Apply all 之前；过小画布失败行；FAQ 补 bulk 写法与 PDF |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | |

## 交互规格（给实现用）

- 输入：`input multiple` 照片；上限 **20**。共享：文字、颜色、不透明度、角度、锚点九宫、短边百分比（默认 8%）、输出 JPEG（默认，垫白）或 PNG。芯片：斜铺 DRAFT。
- 输出：一张预览；汇总表；成功 **ZIP**。
- 核心规则：字号 px = min(w,h) * pct；锚点相对画布；短边低于阈值（如 64px）失败该行。串行。ZIP 重名。
- 失败：解码失败 skip；空文字禁用套用。
- 示例：横图 + 竖图色块 → 同一相对角水印。
- **进页样例**：`loadSample()` 两张不同朝向图 + 文字 SAMPLE，自动预览并 Apply all。
- **实现防呆**：`opts`；`\\w`；`lint:tool-page -- --slug=batch-watermark-product-photos`

## 页面模块清单（与 tool-creation 对齐）

> 勾选前须完成「清单前检索覆盖优化」与「用户意图审查」。

- [x] H1 + 一句话摘要
- [x] 首屏工具交互区（含进页自动样例结果）
- [x] How it works
- [x] Formula / Rules（计算与转换类）
- [x] Example（固定文案，与默认样例一致）
- [x] Use cases（2–3）
- [x] FAQ ≥3
- [x] Related tools ≥2
- [x] References ≥1（YMYL 建议 ≥2）
- [ ] Disclaimer（YMYL 必备）
- [x] `03-locale-briefs.md` 已填（实现十语前）
