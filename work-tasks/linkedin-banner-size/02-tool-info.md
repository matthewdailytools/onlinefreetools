# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`linkedin-banner-size`  
**路径**：`/tools/linkedin-banner-size`  
**主方向**：B  
**YMYL**：否  

---

## 使用场景

| 场景 | 进页默认 | 说明 |
|---|---|---|
| LinkedIn **个人背景横幅** 1584×396 + 头像安全区 | **是** | H1 |
| Facebook 主页封面 | 芯片 | absorb |
| X / Twitter header | 芯片 | absorb |
| YouTube 频道图 + 设备安全区 | 芯片 | 勿独立 pack |
| LinkedIn 公司页封面 | FAQ / 次芯片 | 不抢 H1 |

---

## IG 预审

- 目标主词：LinkedIn banner size；linkedin background photo size；facebook cover；twitter header；youtube channel art
- 用户真实任务：得到 1584×396 横幅，并看见头像会挡住哪一块。
- [x] 竞品：Canva 模板、尺寸表博客。
- [x] 缺口：进页就是个人横幅；安全区叠层可核对；其它平台芯片不拆 URL。
- [x] 增益：Rules 1584×396 cover；安全区；对照四档；Apple/Meta 文档引用；本地；Example；Related OG。
- [x] 长尾：封面簇并入芯片。
- [x] 权威：https://www.linkedin.com/help/linkedin/answer/a1516715 ；https://support.google.com/youtube/answer/2972003
- [x] Use cases：换个人背景；核对文字别压头像；顺带出 YT 频道图。
- [x] 边界：不是 OG 链接卡；不做广告位矩阵。
- [x] Example：样例横图 → 1584×396 JPEG。
- [x] Related：`open-graph-image-size`、`image-crop`

### 计划勾选的 §3.1 维度

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | cover 1584×396 |
| 2 | 边界/失败 | 非 OG 卡；空图 |
| 3 | 场景语境 | 个人档案背景 |
| 4 | 对照表 | 1584 vs FB vs X vs YT |
| 5 | 权威引用 | LinkedIn help；YouTube channel art |
| 6 | 本地隐私 | 留在设备 |
| 7 | 多语言 | 03 |
| 8 | 数值示例 | 1584×396 |
| 9 | 主题内链 | OG、crop |

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | 清单 §0 P1；B9 封面簇 |
| 场景与行业 | LinkedIn 个人横幅 |
| 技术 | Canvas cover JPEG；安全区叠层；localProcessing true |
| Catalog `page.style` | opts |
| Title (en) / H1 | **LinkedIn banner size** |
| Description 要点 | Cover-fill 1584×396; avatar safe-zone overlay; optional FB/X/YT chips. Stays on device, not uploaded. |
| Schema | WebApplication + BreadcrumbList |
| FAQ 要点 | 上传？安全区？公司页？和 OG 卡区别？ |
| related | open-graph-image-size, image-crop |
| 验收 | coverage 0b；verify:tool |

## 清单前检索覆盖优化（生成页面模块清单前必做）

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-01 |
| slug 结论 | 保留 `linkedin-banner-size` |
| 主检索词 → title/H1 | 原句 **LinkedIn banner size** |
| 次要关键词 → desc / FAQ / Use cases | background photo → desc；facebook cover / twitter header / youtube channel art → 芯片+FAQ；公司页 → FAQ |
| 用户搜索习惯判断 | 搜 LinkedIn banner size；安全区是 IG 不是 H1 |
| 优化摘要 | 2026-09-01：H1 锁定 LinkedIn banner size；其它封面芯片不拆 URL |
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
| 总判 | 满足：首屏 1584×396 + 安全区；OG 卡不抢 H1 |
| 主词搜索者任务 | 得到 LinkedIn 个人横幅并避开头像遮挡 |
| Ads/Planner 长尾任务 | 不适用 |
| 满足之处 | loadSample 出 1584 JPEG；叠层标出头像区 |
| 超出 / 应划边界 | 不做广告位、不做链接预览卡 |
| 缺口与已做优化 | How 先写「导出个人横幅」，再写芯片 |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | |

## 交互规格（给实现用）

- 输入：一张横图；默认 1584×396；芯片 FB 851×315、X 1500×500、YT 2560×1440
- 输出：JPEG 预览+下载；预览上安全区半透明遮罩（导出图不含遮罩）
- 核心规则：cover-fill；LinkedIn 左下头像区标为不安全
- 失败：未选图、解码失败
- 示例：样例 → 1584×396
- **进页样例**：合成横图 → 1584 JPEG；`loadSample()` 自动跑
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
