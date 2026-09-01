# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`open-graph-image-size`  
**路径**：`/tools/open-graph-image-size`  
**主方向**：A  
**YMYL**：否  

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：Open Graph image size；1200×630 / 1.91:1；og:image size（芯片）；facebook / linkedin 1200×627（芯片）；og image 短词不作 H1
- 用户真实任务：把一张图裁成链接分享卡常用 1200×630 并下载。
- [x] 竞品：尺寸指南站多、交互裁切少；preview 页已上线验标签。
- [x] 缺口：默认 1200×630 cover；与 open-graph-preview 分工；不抢「什么是 OG」。
- [x] 增益：Rules 1.91:1；边界非标签调试；Use cases 发链接；对照 LinkedIn 627；References ogp.me；本地隐私；十语；Example 1200×630；Related preview/crop。
- [x] 长尾：1200×630 并入画布；封面/Story 不进本页。
- [x] 权威：https://ogp.me/ ；https://developers.facebook.com/docs/sharing/webmasters/images/
- [x] Use cases：博客分享卡、产品页 og:image、LinkedIn 近尺寸。
- [x] 边界：不验 meta 标签（preview 页）；不做 Story/封面。
- [x] Example：样例图 → 1200×630 JPEG。
- [x] Related：`open-graph-preview`、`image-crop`

### 计划勾选的 §3.1 维度

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | 1200×630 cover；约 1.91:1 |
| 2 | 边界/失败 | 不验标签；空图 |
| 3 | 场景语境 | 链接分享卡 |
| 4 | 对照表 | 630 vs LinkedIn 627 |
| 5 | 权威引用 | ogp.me、Facebook 图片文档 |
| 6 | 本地隐私 | 留在设备、不上服务器 |
| 7 | 多语言 | 03 十语 |
| 8 | 数值示例 | 1200×630 样例 |
| 9 | 主题内链 | open-graph-preview、image-crop |

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | 清单 §0 P0；images |
| 场景与行业 | 链接分享卡片图 |
| 技术 | Canvas cover JPEG；localProcessing true |
| Catalog `page.style` | opts |
| Title (en) / H1 | **Open Graph image size**（1200×630 进 desc；短词 og image 不作 H1） |
| Description 要点 | Export 1200×630 (1.91:1). LinkedIn 1200×627 chip. Stays on device, not uploaded. Preview tags on related page. |
| Schema | WebApplication + BreadcrumbList |
| FAQ 要点 | 上传？为何不是 og image 短词？630 vs 627？标签在哪验？Story？ |
| Disclaimer / References | ogp.me、Facebook images |
| related | open-graph-preview, image-crop |
| 验收 | coverage 0b；verify:tool |
| 工期粗估 | 1 会话 |
| 本地化核查 | 03 |

## 清单前检索覆盖优化（生成页面模块清单前必做）

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-01 |
| slug 结论 | 保留 `open-graph-image-size` |
| 主检索词 → title/H1 | 原句 **Open Graph image size** |
| 次要关键词 → desc / FAQ / Use cases | 1200×630 → 默认画布；og:image size → 芯片；facebook/linkedin → 芯片；og image 短词不进 H1 |
| 用户搜索习惯判断 | 搜 Open Graph image size；短词 og image 会被俚语劫持 |
| 优化摘要 | 2026-09-01：H1 锁定 Open Graph image size；像素不堆进 H1 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

## Ads / Keyword Planner 长尾（有分析时必做）

- [ ] 不适用
- [x] 已引用分析路径：`docs/seo/keywords/p0-scene/2026-08-31-p0-scene-longtail-selection.md`

| 长尾词（Planner） | 归属 | 文案落点 | 功能覆盖 | 不覆盖理由（若有） |
|---|---|---|---|---|
| open graph image size | build 主词 | H1 | 默认 1200×630 | |
| 1200×630 / 1.91:1 | absorb | desc + 画布 | 默认导出 | |
| og:image size | absorb | 芯片 | 同一导出 | |
| facebook open graph image size | absorb | 芯片 | 同一导出 | |
| linkedin 1200×627 | absorb | 芯片 | 可选尺寸 | |
| og image | drop 作 H1 | FAQ | 同交互 | 俚语劫持 |
| og image not showing | absorb | FAQ 内链 preview | 不改 H1 | 调试在 preview 页 |

- [x] 交互规格已按上表补齐能力（不仅写进文案）

## 用户意图审查（标 ready 前必做）

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-01 |
| 总判 | 满足：首屏出 1200×630 卡图；标签预览不抢首屏 |
| 主词搜索者任务 | 得到分享卡尺寸的图 |
| Ads/Planner 长尾任务 | 630 能导出；627 芯片 |
| 满足之处 | loadSample 自动出 1200×630 |
| 超出 / 应划边界 | 不验 og 标签；不做 Story |
| 缺口与已做优化 | How 先写「导出分享卡图」 |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | |

## 交互规格（给实现用）

- 输入：一张图；尺寸 1200×630（默认）/ 1200×627
- 输出：cover JPEG 预览+下载
- 核心规则：cover 到目标宽高；约 1.91:1
- 失败：未选图、解码失败
- 示例：样例 → 1200×630
- **进页样例**：合成横图 → cover 1200×630；`loadSample()` 自动跑
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
