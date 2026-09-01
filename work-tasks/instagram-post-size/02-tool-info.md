# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`instagram-post-size`  
**路径**：`/tools/instagram-post-size`  
**主方向**：B  
**YMYL**：否  

---

## 使用场景

| 场景 | 进页默认 | 说明 |
|---|---|---|
| Instagram **方图发帖** 1080×1080 1:1 | **是** | H1 |
| Instagram 4:5 竖帖 1080×1350 | 芯片 | 同 feed，不拆 URL |
| Instagram 横帖 1080×566 | 芯片 | absorb |
| Facebook 动态配图 | FAQ | 常用同 1:1；链接卡走 OG 页 |
| Instagram Story 9:16 | FAQ 划界 | 指向 `instagram-story-size` |

---

## IG 预审

- 目标主词：Instagram post size；1080×1080 instagram；instagram 4:5 size；facebook feed image size
- 用户真实任务：得到可发的动态方图 JPEG，默认 1080×1080。
- [x] 竞品：Canva IG 帖模板、尺寸表博客。
- [x] 缺口：进页就是方帖 1:1；4:5 / 横图芯片不拆 URL；Story 划界。
- [x] 增益：Rules 1080×1080 cover；4:5 对照；Meta 帮助引用；本地；Example；Related Story/OG。
- [x] 长尾：4:5 与横图并入芯片；FB 动态 FAQ；Pinterest 针图本波不拆（P2）。
- [x] 权威：https://www.facebook.com/business/help/155438699523214
- [x] Use cases：今日方帖；4:5 竖帖；误开 Story 后改成 1:1。
- [x] 边界：不是 9:16 Story；不是 1200×630 链接卡。
- [x] Example：样例方图 → 1080×1080 JPEG。
- [x] Related：`instagram-story-size`、`open-graph-image-size`

### 计划勾选的 §3.1 维度

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | cover 1080×1080 1:1 |
| 2 | 边界/失败 | 非 Story 9:16；非 OG 卡 |
| 3 | 场景语境 | 发一条动态方帖 |
| 4 | 对照表 | 1:1 vs 4:5 vs 横图 vs Story |
| 5 | 权威引用 | Meta Instagram 图片规格 |
| 6 | 本地隐私 | 留在设备 |
| 7 | 多语言 | 03 |
| 8 | 数值示例 | 1080×1080 |
| 9 | 主题内链 | Story、OG |

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | 清单 §0 P1；B9 发帖簇 |
| 场景与行业 | Instagram 方图发帖 |
| 技术 | Canvas cover JPEG；localProcessing true |
| Catalog `page.style` | opts |
| Title (en) / H1 | **Instagram post size** |
| Description 要点 | Cover-fill 1080×1080; 4:5 / landscape chips. Stays on device, not uploaded. Not Story 9:16. |
| Schema | WebApplication + BreadcrumbList |
| FAQ 要点 | 上传？1080×1080？4:5？和 Story 区别？和 FB/OG 卡区别？ |
| related | instagram-story-size, open-graph-image-size |
| 验收 | coverage 0b；verify:tool |

## 清单前检索覆盖优化（生成页面模块清单前必做）

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-01 |
| slug 结论 | 保留 `instagram-post-size` |
| 主检索词 → title/H1 | 原句 **Instagram post size** |
| 次要关键词 → desc / FAQ / Use cases | 1080×1080 → desc + Rules；4:5 → 芯片 + FAQ；facebook feed → FAQ；Story 9:16 → FAQ 划界；横图 1080×566 → 芯片 |
| 用户搜索习惯判断 | 搜 Instagram post size / 1080x1080 instagram；H1 不用 generator |
| 优化摘要 | 2026-09-01：H1 锁定 Instagram post size；Story 与 OG 卡不拆进本 URL |
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
| 总判 | 满足：首屏 1080×1080 方帖；Story 与链接卡不抢 H1 |
| 主词搜索者任务 | 得到可发的 Instagram 动态方图（默认 1080×1080） |
| Ads/Planner 长尾任务 | 不适用 |
| 满足之处 | loadSample 出 1080×1080 JPEG；芯片可切 4:5 与横图 |
| 超出 / 应划边界 | 不做 Story 9:16、不做 OG 链接卡、本波不做 Pinterest 针图 |
| 缺口与已做优化 | How 先写「导出方帖 1080×1080」，再写 4:5 芯片 |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | |

## 交互规格（给实现用）

- 输入：一张图；默认 Instagram 方帖 1080×1080；芯片 4:5 1080×1350、横图 1080×566
- 输出：JPEG 预览+下载
- 核心规则：cover-fill；默认 1:1
- 失败：未选图、解码失败
- 示例：样例 → 1080×1080
- **进页样例**：合成方图 → 1080 JPEG；`loadSample()` 自动跑
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
