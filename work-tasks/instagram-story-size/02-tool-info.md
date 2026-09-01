# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`instagram-story-size`  
**路径**：`/tools/instagram-story-size`  
**主方向**：B  
**YMYL**：否  

---

## 使用场景

| 场景 | 进页默认 | 说明 |
|---|---|---|
| Instagram **Story** 1080×1920 + 顶/底 UI 安全区 | **是** | H1 |
| Instagram Reels 封面 | 芯片 | 同 9:16，叠层略不同 |
| TikTok 封面 | 芯片 | absorb |
| YouTube Shorts 封面 | 芯片 | absorb |
| Facebook Story | FAQ | 不拆 URL |

---

## IG 预审

- 目标主词：Instagram story size；1080×1920；instagram reels size；tiktok thumbnail size；youtube shorts thumbnail
- 用户真实任务：得到可发的 9:16 Story 图，并看见进度条/回复栏会挡住哪一块。
- [x] 竞品：Canva 模板、尺寸表博客。
- [x] 缺口：进页就是 Story 9:16；安全区叠层；Reels/TikTok/Shorts 芯片不拆 URL。
- [x] 增益：Rules 1080×1920 cover；安全区；对照竖屏四档；Meta 帮助引用；本地；Example；Related 横幅/OG。
- [x] 长尾：竖屏封面并入芯片。
- [x] 权威：https://www.facebook.com/business/help/155438699523214 ；https://support.google.com/youtube/answer/1036623
- [x] Use cases：今日 Story；Reels 封面；Shorts 封面。
- [x] 边界：不是 1:1 方帖；不是 16:9 YouTube 视频缩略图。
- [x] Example：样例竖图 → 1080×1920 JPEG。
- [x] Related：`linkedin-banner-size`、`open-graph-image-size`

### 计划勾选的 §3.1 维度

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | cover 1080×1920 9:16 |
| 2 | 边界/失败 | 非方帖；非 16:9 缩略图 |
| 3 | 场景语境 | 发一条 Story |
| 4 | 对照表 | Story vs Reels vs TikTok vs Shorts 叠层 |
| 5 | 权威引用 | Meta 素材尺寸；YouTube 缩略图帮助（Shorts 芯片） |
| 6 | 本地隐私 | 留在设备 |
| 7 | 多语言 | 03 |
| 8 | 数值示例 | 1080×1920 |
| 9 | 主题内链 | 横幅、OG |

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | 清单 §0 P1；B9 竖屏簇 |
| 场景与行业 | Instagram Story |
| 技术 | Canvas cover JPEG；安全区叠层；localProcessing true |
| Catalog `page.style` | opts |
| Title (en) / H1 | **Instagram story size** |
| Description 要点 | Cover-fill 1080×1920; UI overlay; Reels/TikTok/Shorts chips. Stays on device, not uploaded. |
| Schema | WebApplication + BreadcrumbList |
| FAQ 要点 | 上传？1080×1920？叠层进文件吗？和方帖区别？和 YouTube 16:9 缩略图区别？ |
| related | linkedin-banner-size, open-graph-image-size |
| 验收 | coverage 0b；verify:tool |

## 清单前检索覆盖优化（生成页面模块清单前必做）

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-01 |
| slug 结论 | 保留 `instagram-story-size` |
| 主检索词 → title/H1 | 原句 **Instagram story size** |
| 次要关键词 → desc / FAQ / Use cases | 1080×1920 → desc + Rules；reels → 芯片 + usecase；tiktok thumbnail → 芯片；shorts → 芯片 + FAQ；方帖 → FAQ 划界 |
| 用户搜索习惯判断 | 搜 Instagram story size / 1080x1920 story；H1 不用 generator |
| 优化摘要 | 2026-09-01：H1 锁定 Instagram story size；竖屏近义不拆 URL |
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
| 总判 | 满足：首屏 1080×1920 Story + 安全区；方帖与 16:9 缩略图不抢 H1 |
| 主词搜索者任务 | 得到可发的 Instagram Story 竖图并避开 UI 遮挡 |
| Ads/Planner 长尾任务 | 不适用 |
| 满足之处 | loadSample 出 1080×1920 JPEG；叠层标出顶/底不安全区 |
| 超出 / 应划边界 | 不做方帖、不做 YouTube 16:9 视频缩略图 |
| 缺口与已做优化 | How 先写「导出 Story 1080×1920」，再写芯片 |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | |

## 交互规格（给实现用）

- 输入：一张图；默认 Instagram Story 1080×1920；芯片 Reels / TikTok / Shorts（同像素、不同叠层）
- 输出：JPEG 预览+下载；预览上安全区半透明遮罩（导出不含遮罩）
- 核心规则：cover-fill 9:16；Story 压暗顶部进度条区与底部回复栏
- 失败：未选图、解码失败
- 示例：样例 → 1080×1920
- **进页样例**：合成竖图 → 1080 JPEG；`loadSample()` 自动跑
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
