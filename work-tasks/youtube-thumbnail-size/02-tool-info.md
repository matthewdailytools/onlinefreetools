# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`youtube-thumbnail-size`  
**路径**：`/tools/youtube-thumbnail-size`  
**主方向**：B  
**YMYL**：否  

---

## 使用场景

| 场景 | 进页默认 | 说明 |
|---|---|---|
| YouTube **视频缩略图** 1280×720 16:9 | **是** | H1 |
| YouTube 最低建议档 640×360 | 芯片 | 同 16:9，不拆 URL |
| Open Graph 链接卡 1200×630 | FAQ 划界 | 指向 `open-graph-image-size` |
| Shorts / Story 9:16 封面 | FAQ 划界 | 指向 `instagram-story-size` |

---

## IG 预审

- 目标主词：YouTube thumbnail size；1280×720 thumbnail；youtube video thumbnail；640x360 youtube thumbnail
- 用户真实任务：得到可上传的 16:9 视频缩略图 JPEG，默认 1280×720。
- [x] 竞品：Canva YouTube 缩略图模板、尺寸表博客。
- [x] 缺口：进页就是 1280×720；与 OG 1200×630 划界；640×360 芯片不拆 URL。
- [x] 增益：Rules 1280×720 cover；最低档对照；YouTube 帮助引用；本地；Example；Related OG/Story。
- [x] 长尾：最低档并入芯片；OG / Shorts 不拆本 URL。
- [x] 权威：https://support.google.com/youtube/answer/72431
- [x] Use cases：上传视频缩略图；把竖图裁成 16:9；误用 OG 卡后改成 1280×720。
- [x] 边界：不是链接分享卡；不是 Shorts 竖封面。
- [x] Example：样例横图 → 1280×720 JPEG。
- [x] Related：`open-graph-image-size`、`instagram-story-size`

### 计划勾选的 §3.1 维度

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | cover 1280×720 16:9 |
| 2 | 边界/失败 | 非 OG 1200×630；非 Shorts 9:16 |
| 3 | 场景语境 | 给一条视频配缩略图 |
| 4 | 对照表 | 1280×720 vs 640×360 vs OG vs Story |
| 5 | 权威引用 | YouTube 自定义缩略图帮助 |
| 6 | 本地隐私 | 留在设备 |
| 7 | 多语言 | 03 |
| 8 | 数值示例 | 1280×720 |
| 9 | 主题内链 | OG、Story |

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | 清单 §0 P1；B9 缩略图簇 |
| 场景与行业 | YouTube 视频缩略图 |
| 技术 | Canvas cover JPEG；localProcessing true |
| Catalog `page.style` | opts |
| Title (en) / H1 | **YouTube thumbnail size** |
| Description 要点 | Cover-fill 1280×720; 640×360 chip. Stays on device, not uploaded. Not OG 1200×630. |
| Schema | WebApplication + BreadcrumbList |
| FAQ 要点 | 上传？1280×720？和 OG 卡区别？和 Shorts 区别？640×360？ |
| related | open-graph-image-size, instagram-story-size |
| 验收 | coverage 0b；verify:tool |

## 清单前检索覆盖优化（生成页面模块清单前必做）

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-01 |
| slug 结论 | 保留 `youtube-thumbnail-size` |
| 主检索词 → title/H1 | 原句 **YouTube thumbnail size** |
| 次要关键词 → desc / FAQ / Use cases | 1280×720 → desc + Rules；video thumbnail → How；640x360 → 芯片 + FAQ；OG 1200×630 → FAQ 划界；Shorts → FAQ 划界 |
| 用户搜索习惯判断 | 搜 YouTube thumbnail size / 1280x720 thumbnail；H1 不用 generator |
| 优化摘要 | 2026-09-01：H1 锁定 YouTube thumbnail size；OG 与 Shorts 不拆进本 URL |
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
| 总判 | 满足：首屏 1280×720 视频缩略图；OG 卡与 Shorts 竖图不抢 H1 |
| 主词搜索者任务 | 得到可上传的 YouTube 视频缩略图（默认 1280×720 16:9） |
| Ads/Planner 长尾任务 | 不适用 |
| 满足之处 | loadSample 出 1280×720 JPEG；芯片可切 640×360 |
| 超出 / 应划边界 | 不做链接卡、不做 Shorts 9:16 封面 |
| 缺口与已做优化 | How 先写「导出 1280×720 缩略图」，再写最低档芯片 |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | |

## 交互规格（给实现用）

- 输入：一张图；默认 YouTube 缩略图 1280×720；芯片 640×360
- 输出：JPEG 预览+下载
- 核心规则：cover-fill 16:9；默认 1280×720
- 失败：未选图、解码失败
- 示例：样例 → 1280×720
- **进页样例**：合成横图 → 1280 JPEG；`loadSample()` 自动跑
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
