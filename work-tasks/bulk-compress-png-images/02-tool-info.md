# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`bulk-compress-png-images`  
**路径**：`/tools/bulk-compress-png-images`  
**主方向**：A  
**YMYL**：否  

> 填完且状态为 `ready` 后，再按 `.cursor/rules/tool-creation.mdc` 实现。  
> IG 依据：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。

---

## 使用场景（§3.3 H）

| 使用场景 | 用户搜法 | 作业类型 | 本页默认 / 芯片 |
|---|---|---|---|
| 一批 PNG logo/UI 仍要 PNG | compress png; compress png in bulk; tinypng | 多 PNG 保透明变小 → ZIP | **默认**：输出 PNG、保留 alpha、可选最长边 |
| 图标集、切图文件夹 | compress png images | 同上 | 芯片：最长边 1024 / 关闭缩放只重编码 |
| 照片型 PNG 要更小 | compress png photos | 本页能压但仍可能很大 | 结果区提示去商品图压缩页（会变成 JPG/WebP）；本页不默认转 JPEG |
| 改后缀成 PNG | jpg to png bulk | **另一作业** | 有意不满足 → 日后转换页 |
| 商品照片有损压体积 | compress images in bulk | **另一作业** | 有意不满足 → 商品图压缩页 |

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：bulk compress PNG images；compress png；compress png in bulk；tinypng；png compressor
- 用户真实任务：一次交出多张 PNG，体积变小但文件仍是 PNG、透明还在，下载 ZIP；单张失败不拖死整批。
- [x] 竞品 SERP 前 5–10 都提供了什么？（未跑正式 SERP；公开工具站常见）云端 TinyPNG 类、统一质量、打 ZIP；常默认把照片劝成 JPEG。
- [x] 它们没讲清什么？（≥3 条缺口）① 进页会不会垫底丢掉透明；② 索引色/重编码后条带；③ 压完仍很大时该不该改 JPEG；④ ZIP 重名。
- [x] 我们补哪 ≥3 条增益？规则：输出始终 PNG+alpha；边界：失败跳过、条数上限；场景：logo/UI；对照：商品图页会改 JPEG；隐私：设备内不上服务器。
- [x] 长尾：`compress png in bulk` / TinyPNG 类说法并进本页 FAQ，不仿站拆 URL。转换 PNG、商品照片有损是不同作业，本页有意不满足。
- [x] 权威来源 URL：https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob ；https://www.w3.org/TR/png/
- [x] 行业/场景 Use case 文案草稿：一批透明 logo；UI 切图文件夹；带透明的促销贴纸。
- [x] 边界/失败案例草稿：解码失败跳过；Canvas 重编码丢掉调色板导致条带；动画只取首帧；照片型 PNG 体积下降有限。
- [x] 结果区信息如何落到可索引 Example / FAQ：Example 写「两张带透明色块的 PNG → ZIP 内仍是 PNG，alpha 未垫白」；FAQ 写为何不像 TinyPNG 那样劝你改 JPEG、索引色变化。
- [x] Related / 主题内链计划（≥2）：`image-compress`、`bulk-compress-product-photos`（商品图页已上线；要更小且可接受 JPEG 链过去）

### 计划勾选的 §3.1 维度（至少 3）

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | 输出 PNG；等比缩最长边（不放大）；`toBlob('image/png')` 不铺 JPEG 垫底 |
| 2 | 边界/失败 | 单张失败跳过；ZIP 重名 `name (2).png`；上限约 20；体积几乎不变时警告 |
| 3 | 场景语境 | logo / UI / 透明素材 |
| 4 | 对照表 | 本页保 PNG vs 单张压缩页 vs 商品图有损页（FAQ） |
| 5 | 权威引用 | PNG、Canvas toBlob |
| 6 | 本地隐私 | 留在设备、不上服务器 |
| 7 | 多语言 | 03 十语检索向 |
| 8 | 数值示例 | 两张透明样例 PNG |
| 9 | 主题内链 | image-compress、image-format-converter |

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | images / P0 bulk-batch PNG 压缩行 |
| 场景与行业 | 透明 PNG 批量重编码变小 |
| 技术（包、Tier、本地处理） | Canvas PNG toBlob；fflate ZIP；Tier 0；`localProcessing: true` |
| Catalog `page.style` | **opts** |
| Title (en) | **Bulk compress PNG images** |
| Description 要点（步骤/公式 + 示例；≥120 字落地时再写满） | Add a folder of PNG logos or UI assets, keep transparency, optionally limit the longest edge, re-encode PNG in this tab, skip files that fail, download a ZIP. Example: two checkerboard PNGs stay PNG with alpha. Files stay on the device; they are not uploaded to a server. |
| Schema | WebApplication + BreadcrumbList（与可见文案一致） |
| FAQ 要点（≥3） | 会不会变成 JPEG？透明还在吗？压完还很大怎么办？图会不会上传？动画 GIF？ |
| Disclaimer / References | 非 YMYL；MDN toBlob、W3C PNG |
| related | `image-compress`, `bulk-compress-product-photos` |
| 验收 | `coverage:gate` 0b→2→4；`verify:tool` |
| 工期粗估 | 本 slug 一完整实现会话 |
| 本地化核查 | 见 `03-locale-briefs.md` |

## 清单前检索覆盖优化（生成页面模块清单前必做）

> 规则：`.cursor/rules/tool-i18n-localization.mdc`「清单前检索覆盖优化」。未填本表不得勾下方「页面模块清单」，不得标 `ready`。

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-03 |
| slug 结论 | 保留 `bulk-compress-png-images`（场景句 + 选型词 bulk；不用 `bulk-image-compress` 品类头词） |
| 主检索词 → title/H1 | 英文 H1 原句 **Bulk compress PNG images**；zh 用「批量压缩 PNG」当地句，不把 bulk 硬塞进中文 H1 |
| 次要关键词 → desc / FAQ / Use cases | compress png → desc / 默认输出；compress png in bulk → How / Use case；tinypng → FAQ 对照保 PNG 不转 JPEG；png compressor → desc |
| 用户搜索习惯判断 | 英语说 compress png / tinypng，要的是仍为 PNG；中文搜「批量压缩 PNG / 压缩 png」。H1 跟 PNG 结果，不跟参数目录 |
| 优化摘要 | 相对「bulk image compressor」初稿：H1 定为 PNG 场景句；禁止默认转 JPEG；商品图有损与改后缀划出本页 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

> 填完后验收：`npm run coverage:gate -- --slug=bulk-compress-png-images --phase=0b`（须绿才可标 `ready` / 勾下方页面模块清单）。

## Ads / Keyword Planner 长尾（有分析时必做）

> 规则：`.cursor/rules/work-tasks-tool-brief.mdc`「Ads / Keyword Planner 长尾融入」。无 Google/Bing Planner 分析则勾「不适用」并跳过本表。

- [x] 不适用（本 slug 无 Planner / Ads 长尾分析）
- [ ] 已引用分析路径：`docs/seo/keywords/…`（写出文件名）

| 长尾词（Planner） | 归属 | 文案落点（H1/desc/FAQ/usecase） | 功能覆盖（控件/结果哪一步） | 不覆盖理由（若有） |
|---|---|---|---|---|
| — | — | 主题仅有搜法草稿，无 Ads CSV | — | 不适用 |

- [ ] 交互规格已按上表补齐能力（不仅写进文案）

## 用户意图审查（标 ready 前必做）

> 规则：`.cursor/rules/work-tasks-tool-brief.mdc`「用户意图审查」。对照 `00` 原话 + 主检索词用户任务（有 Planner 长尾时含长尾任务）。未填不得 `ready`。

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-03 |
| 总判 | 满足：进页样例即跑出多张 PNG 压缩结果与 ZIP；默认输出 PNG+alpha，不把垫底转 JPEG 或格式转换抢首屏 |
| 主词搜索者任务 | 一次处理很多张 PNG，让文件变小但还是 PNG、透明还在，带走一整包 |
| Ads/Planner 长尾任务 | 不适用 |
| 满足之处 | How 先写「选出一批 PNG、共用最长边、失败跳过、下载 ZIP」；默认不铺 JPEG 垫底；结果表列原/后体积与跳过原因 |
| 超出 / 应划边界 | 不做输出格式大下拉改 JPEG 当主路径；desc 不写 doorway/slug；不做视频 |
| 缺口与已做优化 | How 改为任务动词；FAQ 补「要更小且可接受 JPG 请用商品图压缩」与索引色条带；样例用透明棋盘 PNG |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | |

## 交互规格（给实现用）

- 输入：`input multiple`，PNG 为主，亦可 JPEG/WebP/GIF/BMP（输出仍强制 PNG）；上限 **20**；超出拒绝续加。共享参数：可选限制最长边（默认开、2048）；无 JPEG 垫底色选择器。
- 输出：汇总表（文件名、原体积、后体积、跳过原因）；成功项打 **ZIP**（`.png`）；体积几乎不变时行内警告。
- 核心规则 / 算法：串行解码 → 等比缩到最长边（不放大）→ **不铺不透明垫底** → `toBlob('image/png')`。动画只取静帧。ZIP 重名：`stem (2).png`。
- 失败与边界行为：单张失败 skip；0 成功禁用 ZIP；软内存/边长警告对齐单张压缩页。
- 示例 Input → Output：两张透明棋盘 PNG → ZIP 内两张 PNG，alpha 仍在。
- **进页样例（必填）**：`loadSample()` 生成两张带透明的 Canvas PNG 入队并自动压缩，ZIP 可用、汇总非空；与 H2 Example 一致。
- **实现防呆**：Page 用 `opts` 签名；`extraBodyHtml` 正则写 `\\w`；B 后跑 `npm run lint:tool-page -- --slug=bulk-compress-png-images`

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
