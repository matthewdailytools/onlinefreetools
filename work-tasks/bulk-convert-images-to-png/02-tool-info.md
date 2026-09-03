# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`bulk-convert-images-to-png`  
**路径**：`/tools/bulk-convert-images-to-png`  
**主方向**：A  
**YMYL**：否  

> 填完且状态为 `ready` 后，再按 `.cursor/rules/tool-creation.mdc` 实现。  
> IG 依据：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。

---

## 使用场景（§3.3 H）

| 使用场景 | 用户搜法 | 作业类型 | 本页默认 / 芯片 |
|---|---|---|---|
| 要透明底 logo/截图 | bulk convert images to png; jpg to png | 多图 → PNG ZIP | **默认**：输出 PNG、保 alpha、无垫底 UI |
| JPG 转 PNG | jpg to png; jpeg to png | 同意图 | FAQ；体积常变大警告 |
| 只要 PNG 变小 | compress png in bulk | **另一作业** | 有意不满足 → PNG 压缩页 |
| 要 JPG | convert to jpg | **另一作业** | 有意不满足 |

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：bulk convert images to png；jpg to png；convert to png；png converter；jpeg to png
- 用户真实任务：一次把很多张图变成 PNG，透明尽量保留，下载 ZIP。
- [x] 竞品常见：格式下拉转换、ZIP；常复用 JPEG 垫底控件导致透明被垫死。
- [x] 缺口：① 会不会垫白；② JPEG 转 PNG 体积暴涨不提示；③ GIF 动画去哪；④ 与「压缩 PNG」混淆。
- [x] 本页增益：无垫底控件；体积变大警告；GIF 首帧标明；失败跳过。
- [x] 长尾：jpg to png 并进本页。压缩 PNG、转 JPG 有意不满足。
- [x] 权威来源 URL：https://www.w3.org/TR/png/ ；https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob
- [x] Use case：截图归档为 PNG；logo 从 JPG 抢救透明（诚实：JPG 无透明）；贴图素材统一 PNG。
- [x] 边界：源 JPEG 没有 alpha 则结果不透明；体积大于原文件警告；动画只第一帧。
- [x] Example：两张样例 → ZIP 内 PNG。
- [x] Related：`image-format-converter`、`image-compress`

### 计划勾选的 §3.1 维度（至少 3）

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | PNG toBlob；不铺垫底；源有 alpha 则保留 |
| 2 | 边界/失败 | 体积变大警告；GIF 首帧；上限 20 |
| 3 | 场景语境 | 要透明底的素材 |
| 4 | 对照表 | 转换 PNG vs 压缩 PNG（FAQ） |
| 5 | 权威引用 | PNG、toBlob |
| 6 | 本地隐私 | 设备内、不上服务器 |
| 7 | 多语言 | 03 |
| 8 | 数值示例 | 两张样例、体积对比列 |
| 9 | 主题内链 | image-format-converter、image-compress |

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | images / P0 转换 PNG 行 |
| 场景与行业 | 批量转成 PNG 保透明 |
| 技术 | Canvas PNG toBlob；fflate；Tier 0；`localProcessing: true` |
| Catalog `page.style` | **opts** |
| Title (en) | **Bulk convert images to PNG** |
| Description 要点 | Add many images, convert them to PNG in this tab, keep transparency when the source has it, skip files that fail, download a ZIP. A JPEG often gets larger as PNG—the report says so. Files stay on the device; they are not uploaded to a server. |
| Schema | WebApplication + BreadcrumbList |
| FAQ 要点（≥3） | jpg 转 png 透明能回来吗？为什么更大了？会上传吗？动画 GIF？和压缩 PNG 有何不同？ |
| Disclaimer / References | 非 YMYL；W3C PNG |
| related | `image-format-converter`, `image-compress` |
| 验收 | `coverage:gate` 0b→2→4；`verify:tool` |
| 工期粗估 | 本 slug 一完整实现会话 |
| 本地化核查 | 见 `03-locale-briefs.md` |

## 清单前检索覆盖优化（生成页面模块清单前必做）

> 规则：`.cursor/rules/tool-i18n-localization.mdc`「清单前检索覆盖优化」。未填本表不得勾下方「页面模块清单」，不得标 `ready`。

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-03 |
| slug 结论 | 保留 `bulk-convert-images-to-png`（输出 PNG 场景句；不与压缩 PNG 合并） |
| 主检索词 → title/H1 | 英文 H1 原句 **Bulk convert images to PNG**；zh 用「批量转换成 PNG」当地句，不把 bulk 硬塞进中文 H1 |
| 次要关键词 → desc / FAQ / Use cases | jpg to png → FAQ / Use case；convert to png → desc；png converter → desc；jpeg to png → FAQ 体积警告 |
| 用户搜索习惯判断 | 搜「转 png / jpg 转 png」要透明结果；中文不说 bulk |
| 优化摘要 | 相对万能下拉初稿：进页即 PNG、无垫底 UI、无格式切换；体积变大写入报告与 FAQ |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

> 填完后验收：`npm run coverage:gate -- --slug=bulk-convert-images-to-png --phase=0b`

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
| 总判 | 满足：进页样例即转成 PNG 并给出 ZIP；无 JPEG 垫底控件；不把压缩 PNG 抢首屏 |
| 主词搜索者任务 | 一次把很多张图变成 PNG，尽量保住透明，带走一整包 |
| Ads/Planner 长尾任务 | 不适用 |
| 满足之处 | How 先写选图、转 PNG、看体积警告、下 ZIP；结果表含变大标记 |
| 超出 / 应划边界 | 无输出格式切换；desc 无元叙述；不做 TinyPNG 式有损调色当主路径 |
| 缺口与已做优化 | FAQ 写清 JPEG 没有透明可恢复；GIF 首帧；与压缩 PNG 划界 |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | |

## 交互规格（给实现用）

- 输入：`input multiple`，常见光栅图；上限 **20**。共享：无垫底色。可选最长边（默认关）。
- 输出：汇总表（含「比原文件更大」）；成功 **ZIP** `.png`。
- 核心规则：串行解码 → PNG toBlob（不铺垫底）。GIF 第一帧并在该行注明。ZIP 重名 `stem (2).png`。
- 失败：解码失败 skip。
- 示例：JPG 色块 + 透明 PNG → 两个 PNG，后者仍透明。
- **进页样例**：`loadSample()` 两张图入队并转换。
- **实现防呆**：`opts`；`\\w`；`lint:tool-page -- --slug=bulk-convert-images-to-png`

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
