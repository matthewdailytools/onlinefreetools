# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`svg-optimizer`  
**路径**：`/tools/svg-optimizer`  
**主方向**：D  
**YMYL**：否  

---

## 使用场景

| 场景 | 进页默认 | 说明 |
|---|---|---|
| **压缩/优化 SVG 并看体积** | **是** | H1 SVG optimizer |
| 去掉 Inkscape/Sketch 元数据 | 选项芯片 | 默认开 |
| 复制/下载优化后 SVG | 同页 | — |
| 与 SVGO CLI 全量对等 | — | **有意不满足**；轻量浏览器管线 |

---

## IG 预审

- 目标主词：svg optimizer；optimize svg；compress svg；minify svg
- 用户真实任务：粘贴或拖入 SVG →  toggles → 看字节节省 → 预览 → 复制/下载
- [x] 竞品：SVGOMG、SVGO docs、在线 minifier 博客
- [x] 缺口：进页样例 + 字节 % + 预览 + 本地隐私十语
- [x] 增益：Rules 说明各选项；Example 样例可见节省；References SVGOMG/SVGO
- [x] 长尾：minify/compress 进 desc/FAQ，不拆 URL
- [x] 权威：SVGOMG、SVGO README
- [x] Use cases：图标出库、Sketch 导出清理、内联 SVG 瘦身
- [x] 边界：不做全 SVGO 插件集、不上传、不 rasterize
- [x] Example：带注释样例 → 优化后更小
- [x] Related：`image-optimizer`、`html-entity`

### 计划勾选的 §3.1 维度

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | 各选项对 SVG 文本的作用 |
| 2 | 边界/失败 | 空输入、非 SVG 提示 |
| 3 | 场景语境 | 图标/内联 SVG 出库 |
| 4 | 对照表 | 轻量优化 vs 完整 SVGO |
| 5 | 权威引用 | SVGOMG、SVGO |
| 6 | 本地隐私 | 留在设备 + 不上服务器 |
| 7 | 多语言 | 03 |
| 8 | 数值示例 | 样例字节前后对比 |
| 9 | 主题内链 | image-optimizer、html-entity |

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | 清单 §0 P1 → 已上线 |
| 场景与行业 | 前端、设计师 SVG 出库 |
| 技术 | 纯 JS 轻量优化；paste/drop；localProcessing true |
| Catalog `page.style` | opts |
| Title (en) / H1 | **SVG optimizer** |
| Description 要点 | Paste/drop SVG → optimize with option chips → before/after bytes + preview → copy/download. Stays on device, not uploaded. |
| Schema | WebApplication + BreadcrumbList |
| FAQ 要点 | 上传？与 SVGO 差别？选项含义？预览安全？ |
| related | image-optimizer, html-entity |
| 验收 | coverage 0b/2/4；verify:tool |

## 清单前检索覆盖优化（生成页面模块清单前必做）

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-01 |
| slug 结论 | 保留 `svg-optimizer` |
| 主检索词 → title/H1 | **SVG optimizer** / 各语等价（zh 压缩 SVG 等） |
| 次要关键词 → desc / FAQ / Use cases | compress svg、minify svg → desc/FAQ；inkscape metadata → FAQ/rules；svgomg → References |
| 用户搜索习惯判断 | 搜 svg optimizer / optimize svg / compress svg；H1 结果向，非「选项A、选项B」目录 |
| 优化摘要 | 2026-09-01：H1=SVG optimizer；次词落 desc/FAQ；样例首屏 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

## Ads / Keyword Planner 长尾（有分析时必做）

- [x] 不适用（本 slug 无 Planner / Ads 长尾分析）
- [ ] 已引用分析路径：

| 长尾词（Planner） | 归属 | 文案落点 | 功能覆盖 | 不覆盖理由（若有） |
|---|---|---|---|---|
| — | — | — | — | 无 Planner 批 |

- [x] 交互规格已按上表补齐能力（不仅写进文案）

## 用户意图审查（标 ready 前必做）

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-01 |
| 总判 | **满足**：首屏粘贴/拖放 → 选项 → 字节对比 + 预览 → 复制/下载 |
| 主词搜索者任务 | 把 SVG 变小并确认视觉仍可用 |
| Ads/Planner 长尾任务 | 不适用 |
| 满足之处 | loadSample 首屏；五选项芯片；original/optimized/saved%；预览 |
| 超出 / 应划边界 | 不做完整 SVGO 插件矩阵；不 raster 优化 |
| 缺口与已做优化 | How 先写「粘贴 SVG 优化」，再写选项 |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | |

## 交互规格（给实现用）

- 输入：粘贴文本或拖放 `.svg` 文件
- 选项（芯片，默认全开）：去注释；去编辑器元数据（inkscape/sodipodi/adobe/sketch）；折叠标签间空白；路径数字保留 2 位小数；去空 `<g>` + 属性多余空格
- 输出：优化后 SVG 文本；original bytes / optimized bytes / saved %
- 预览：`<img>` data URI 或 inline 安全预览
- 失败：空、不像 SVG（无 `<svg`）
- 示例：带注释与多余空白的简单图标
- **进页样例**：`loadSample()` 首屏自动跑
- **实现防呆**：opts；DOM 前缀 `svo`；模板正则 `\\w` / `\\d`

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
