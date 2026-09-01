# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`iphone-app-store-screenshot`  
**路径**：`/tools/iphone-app-store-screenshot`  
**主方向**：A  
**YMYL**：否  

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：iPhone 6.9 screenshot size；iphone app store screenshot size（desc）；1320×2868 / 1290×2796 / 1260×2736；6.7 已并入 6.9（FAQ）；specifications（References）
- 用户真实任务：把一张截图导出为当期 iPhone App Store 必传档尺寸并下载。
- [x] 竞品：规格博客、截图设计 SaaS；少见本地精确像素导出。
- [x] 缺口：6.9 三档像素、cover 铺满、6.7 旧搜法 FAQ、非设计 SaaS。
- [x] 增益：Rules 像素表；边界非 App Store 审核；Use cases 上架；对照 6.9 vs 6.7；References Apple；本地隐私；十语；Example 默认 1320×2868；Related image-crop。
- [x] 长尾：三档像素并入本页；禁止 6.7 作 H1；不拆 specifications URL。
- [x] 权威：https://developer.apple.com/help/app-store-connect/reference/screenshot-specifications ；https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API
- [x] Use cases：上架必传档、替换错误尺寸、一次导出三档 ZIP。
- [x] 边界：非 App Review；iPad 仅芯片；不做修图设计器。
- [x] Example：样例图 → 1320×2868 JPEG，cover 铺满。
- [x] Related：`image-crop`、`image-compress`

### 计划勾选的 §3.1 维度

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | cover 铺满目标像素；三档 6.9 尺寸 |
| 2 | 边界/失败 | 非审核；空图；6.7 已并入 |
| 3 | 场景语境 | App Store 上架截图 |
| 4 | 对照表 | 6.9 三档 vs 旧 6.7 FAQ |
| 5 | 权威引用 | Apple screenshot specifications |
| 6 | 本地隐私 | 留在设备、不上服务器 |
| 7 | 多语言 | 03 十语 |
| 8 | 数值示例 | 1320×2868 样例 |
| 9 | 主题内链 | image-crop、image-compress |

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | 清单 §0 P0；images |
| 场景与行业 | iPhone App Store 截图尺寸 |
| 技术 | Canvas cover 裁切 JPEG；可选三档 ZIP；localProcessing true |
| Catalog `page.style` | opts |
| Title (en) / H1 | **iPhone 6.9 screenshot size**（禁止 6.7；像素进 desc/芯片） |
| Description 要点 | Export 1320×2868 (also 1290×2796 / 1260×2736). Cover-fill. Stays on device, not uploaded. |
| Schema | WebApplication + BreadcrumbList |
| FAQ 要点 | 上传？为何不是 6.7？三档像素？会裁切吗？iPad？ |
| Disclaimer / References | Apple screenshot specifications |
| related | image-crop, image-compress |
| 验收 | coverage 0b 后实现；verify:tool |
| 工期粗估 | 1 会话 B+C+D |
| 本地化核查 | 03 |

## 清单前检索覆盖优化（生成页面模块清单前必做）

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-01 |
| slug 结论 | 保留 `iphone-app-store-screenshot`；H1 用 6.9 长尾 |
| 主检索词 → title/H1 | 原句 **iPhone 6.9 screenshot size** |
| 次要关键词 → desc / FAQ / Use cases | app store screenshot size → desc；1320×2868 等 → 芯片；6.7 → FAQ 已并入；specifications → References |
| 用户搜索习惯判断 | 搜当期 6.9 尺寸；勿用 6.7 当 H1 |
| 优化摘要 | 2026-09-01：H1 锁定 iPhone 6.9 screenshot size；像素不进 H1 当目录 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

## Ads / Keyword Planner 长尾（有分析时必做）

- [ ] 不适用
- [x] 已引用分析路径：`docs/seo/keywords/p0-scene/2026-08-31-p0-scene-longtail-selection.md`

| 长尾词（Planner） | 归属 | 文案落点 | 功能覆盖 | 不覆盖理由（若有） |
|---|---|---|---|---|
| iphone 6.9 screenshot size | build 主词 | H1 | 默认 1320×2868 | |
| iphone app store screenshot size | absorb | desc | 同一导出 | |
| 1320×2868 / 1290×2796 / 1260×2736 | absorb | 芯片 | 三档画布 | |
| 6.7-inch | drop 作 H1 | FAQ | 说明已并入 6.9 | 禁止当 H1 |
| screenshot specifications | absorb | References | 同一导出 | |
| 6.5-inch 1284×2778 | absorb | 芯片可选 | 不默认 | 仅后备 |

- [x] 交互规格已按上表补齐能力（不仅写进文案）

## 用户意图审查（标 ready 前必做）

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-01 |
| 总判 | 满足：首屏导出 6.9 必传档；设计 SaaS 不抢首屏 |
| 主词搜索者任务 | 得到当期 iPhone 6.9 截图像素文件 |
| Ads/Planner 长尾任务 | 三档像素能导出；6.7 只 FAQ |
| 满足之处 | loadSample 自动出 1320×2868 预览 |
| 超出 / 应划边界 | 不做模板设计器；iPad 不抢首屏 |
| 缺口与已做优化 | How 先写「导出 6.9 截图」 |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | |

## 交互规格（给实现用）

- 输入：一张截图；尺寸 1320×2868（默认）/ 1290×2796 / 1260×2736
- 输出：cover 铺满 JPEG 预览+下载；可选三档 ZIP
- 核心规则：cover（可能裁边）到目标像素；默认 6.9 最大档
- 失败：未选图、解码失败
- 示例：样例 → 1320×2868
- **进页样例**：合成竖屏色块 → cover 到 1320×2868；`loadSample()` 自动跑
- **实现防呆**：opts；B 后 lint:tool-page

## 页面模块清单（与 tool-creation 对齐）

- [x] H1 + 一句话摘要
- [x] 首屏工具交互区（含进页自动样例结果）
- [x] How it works
- [x] Formula / Rules
- [x] Example
- [x] Use cases（2–3）
- [x] FAQ ≥3
- [x] Related tools ≥2
- [x] References ≥1
- [ ] Disclaimer（YMYL 必备）
- [x] `03-locale-briefs.md` 已填（实现十语前）
