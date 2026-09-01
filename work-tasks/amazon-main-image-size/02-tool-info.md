# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`amazon-main-image-size`  
**路径**：`/tools/amazon-main-image-size`  
**主方向**：A  
**YMYL**：否  

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：amazon main image size；amazon product image size（desc）；2000×2000；zoom 1000px；white background / 85% fill（校验芯片）
- 用户真实任务：把一张商品图裁切/缩放到亚马逊主图常用尺寸并下载，文件留在设备。
- [x] 竞品：Seller 指南文、尺寸表博客；少见本地「上传一张图→导出合规主图」。
- [x] 缺口：2000 边 vs 缩放 1000px 下限、白底 RGB、85% 占框是检查不是第二工具、辅图不抢 H1。
- [x] 增益：Rules 最长边/白底/体积提示；边界非官方审核；Use cases 上新；对照主图 vs 辅图一句；References Seller 帮助；本地隐私；十语；Example 默认 2000×2000；Related image-crop/compress。
- [x] 长尾：2000×2000 / zoom / 白底 / 85% 并入本页，不拆 marketplace-pack URL。
- [x] 权威：https://sellercentral.amazon.com/help/hub/reference/G1641 ；https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API
- [x] Use cases：上新主图、替换过小主图、导出前自检缩放。
- [x] 边界：非 Amazon 官方审核；不保证过审；辅图/A+ 不抢首屏。
- [x] Example：样例图 → 2000×2000 JPEG，最长边 2000，短边白底，缩放边 ≥1000 提示通过。
- [x] Related：`image-crop`、`image-compress`

### 计划勾选的 §3.1 维度

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | 最长边 2000；缩放下限 1000px；白底；约 85% 占框提示 |
| 2 | 边界/失败 | 非官方审核；空图；过大内存 |
| 3 | 场景语境 | 卖家上新主图 |
| 4 | 对照表 | 主图 vs 辅图一句 FAQ |
| 5 | 权威引用 | Seller 帮助、Canvas |
| 6 | 本地隐私 | 留在设备、不上服务器 |
| 7 | 多语言 | 03 十语 |
| 8 | 数值示例 | 2000×2000 样例 |
| 9 | 主题内链 | image-crop、image-compress |

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | 清单 §0 P0；images |
| 场景与行业 | 亚马逊商品**主图**尺寸 |
| 技术 | Canvas 缩放/白底 JPEG；Tier 0；localProcessing true |
| Catalog `page.style` | opts |
| Title (en) / H1 | **Amazon main image size**（选用长尾原句；2000×2000 进 desc/芯片，不堆进 H1） |
| Description 要点 | Upload one product photo, export a 2000×2000 main image on white, check 1000px zoom floor. Stays on the device, not uploaded. |
| Schema | WebApplication + BreadcrumbList |
| FAQ 要点 | 上传？2000 vs 1600？缩放 1000px？白底/85%？官方审核？ |
| Disclaimer / References | Seller G1641、Canvas |
| related | image-crop, image-compress |
| 验收 | coverage 0b 后实现；verify:tool |
| 工期粗估 | 1 会话 B+C+D |
| 本地化核查 | 03 |

## 清单前检索覆盖优化（生成页面模块清单前必做）

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-01 |
| slug 结论 | 保留 `amazon-main-image-size`（主图 vs 辅图；不用 marketplace-pack） |
| 主检索词 → title/H1 | 原句 **Amazon main image size** |
| 次要关键词 → desc / FAQ / Use cases | product image size → desc；2000×2000 → 默认画布；zoom 1000px → 校验芯片；white/85% → Rules；seller central → Use case |
| 用户搜索习惯判断 | 搜 amazon main image size / product image size；H1 跟紧主图长尾 |
| 优化摘要 | 2026-09-01：H1 锁定 Amazon main image size；像素与缩放不进 H1 当参数目录 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

## Ads / Keyword Planner 长尾（有分析时必做）

- [ ] 不适用
- [x] 已引用分析路径：`docs/seo/keywords/p0-scene/2026-08-31-p0-scene-longtail-selection.md`

| 长尾词（Planner） | 归属 | 文案落点（H1/desc/FAQ/usecase） | 功能覆盖（控件/结果哪一步） | 不覆盖理由（若有） |
|---|---|---|---|---|
| amazon main image size | build 主词 | H1 | 导出主图画布 | |
| amazon product image size | absorb | desc | 同一导出 | |
| amazon main image 2000×2000 | absorb | desc + 默认尺寸 | 画布 2000×2000 | |
| amazon zoom not working / 1000 px | absorb | 校验芯片 / FAQ | 最短边提示 | |
| amazon white background / 85% | absorb | Rules | 白底填充 + 占框提示 | |
| seller central image requirements | absorb | Use case | 同一导出 | Bing 本批污染，不改 H1 |

- [x] 交互规格已按上表补齐能力（不仅写进文案）

## 用户意图审查（标 ready 前必做）

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-01 |
| 总判 | 满足：首屏选图即可出 2000×2000 主图；辅图不抢首屏 |
| 主词搜索者任务 | 弄清/做出亚马逊主图尺寸 |
| Ads/Planner 长尾任务 | 2000×2000 能导出；zoom 1000 有提示；白底/85% 是检查 |
| 满足之处 | loadSample 自动出 2000×2000 预览与下载 |
| 超出 / 应划边界 | 不做官方审核器；不拆它店 pack URL |
| 缺口与已做优化 | How 先写「做出主图」再控件名 |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | |

## 交互规格（给实现用）

- 输入：一张商品图；可选目标边 2000（默认）/ 1600；JPEG 质量
- 输出：正方形 JPEG 预览 + 下载；芯片显示边长、是否 ≥1000、约占框比
- 核心规则：contain 到正方形白底 RGB(255,255,255)；默认 2000×2000；最短边提示 zoom 地板
- 失败：未选图、解码失败、画布过大
- 示例：样例图 → 2000×2000 JPEG
- **进页样例**：合成商品色块图 → 导出 2000×2000；`loadSample()` 进页自动跑
- **实现防呆**：opts；正则 `\\w`；B 后 lint:tool-page

## 页面模块清单（与 tool-creation 对齐）

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
