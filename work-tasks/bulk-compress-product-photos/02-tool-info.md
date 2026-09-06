# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`bulk-compress-product-photos`  
**路径**：`/tools/bulk-compress-product-photos`  
**主方向**：A  
**YMYL**：否  

> 填完且状态为 `ready` 后，再按 `.cursor/rules/tool-creation.mdc` 实现。  
> IG 依据：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。

---

## 使用场景（§3.3 H）

| 使用场景 | 用户搜法 | 作业类型 | 本页默认 / 芯片 |
|---|---|---|---|
| 上架前压一批商品照片到体积上限 | compress images in bulk; bulk compress product photos; compress jpg; compress to 200kb | 多照片有损变小 → ZIP | 进页默认全部「不选择」（保原格式/不缩边/不搜 KB）；需要时再点 JPEG、200 KB、最长边 |
| 邮箱/表单附件一批图 | compress jpg; reduce photo size | 同上 | 芯片：100 KB / 1280 边 |
| 只要 jpeg 写法 | jpeg compressor bulk | 同意图 | FAQ 一句；不拆第二 URL |
| 一批 PNG 仍要 PNG | compress png in bulk | **另一作业** | 有意不满足 → 指向日后 `bulk-compress-png-images`；本页默认会垫底转 JPEG/WebP |
| 改后缀成 JPG 而不是压体积 | png to jpg bulk | **另一作业** | 有意不满足 → 日后 `bulk-convert-images-to-jpg` |

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：bulk compress product photos；compress images in bulk；compress jpg；reduce photo size；compress to 200kb
- 用户真实任务：一次交出多张商品照片，用同一套参数压到可上传体积，下载 ZIP；单张失败不拖死整批。
- [x] 竞品 SERP 前 5–10 都提供了什么？（未跑正式 SERP；公开工具站常见）云端上传一批图、统一质量滑条、打 ZIP；少见「共享目标 KB 的命中/未命中表」和「单张解码失败跳过仍可打包成功项」。
- [x] 它们没讲清什么？（≥3 条缺口）① 目标 KB 不是每张都能命中，常假装成功；② 重名进 ZIP 怎么改名；③ 超内存/超条数是拒绝续加还是整批崩；④ jpg vs jpeg 是否两套产品。
- [x] 我们补哪 ≥3 条增益？（§3.1 编号 + 页面章节）规则：共享目标 KB 二分到质量下限 + 汇总命中行；边界：条数/内存上限、失败跳过；场景：商品上架；数值：默认 200 KB 样例；隐私：设备内、不上服务器；对照：单张压缩页；内链：image-compress。
- [x] 长尾：合并进本页模块，还是满足 §3.3 后拆页？理由：`compress jpg` / `jpeg` / `200kb` 并进芯片与 FAQ，不拆近义 URL。PNG 保透明、改后缀 JPG 是不同失败模式，已规划独立 slug，本页有意不满足。
- [x] 权威来源 URL：https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob ；https://developers.google.com/speed/webp
- [x] 行业/场景 Use case 文案草稿：店铺上新一批主图；活动页多 SKU 缩略图；客服打包回传商品图给渠道。
- [x] 边界/失败案例草稿：解码失败跳过；目标 KB 未命中仍给出最接近文件并记未命中；动画只取首帧；条数超过上限拒绝续加。
- [x] 结果区信息如何落到可索引 Example / FAQ：Example 写「两张样例图 → ZIP 内两张 JPEG，汇总 2/2 命中 200 KB 或标明未命中」；FAQ 写目标 KB 地板、jpeg 写法、PNG 照片为何本页会变成 JPG。
- [x] Related / 主题内链计划（≥2）：`image-compress`、`image-format-converter`（兄弟批量页未上线前禁止写进 catalog related）

### 计划勾选的 §3.1 维度（至少 3）

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | 共享最长边等比缩小（不放大）；JPEG/WebP 质量；目标 KB 对质量二分至 0.5 |
| 2 | 边界/失败 | 单张失败跳过；未命中目标仍打包最近结果；ZIP 重名 `name (2).jpg`；上限约 20 张 |
| 3 | 场景语境 | 商品照片上架前压体积 |
| 4 | 对照表 | 本页有损照片 vs 单张压缩页；vs 日后 PNG 保透明页（FAQ） |
| 5 | 权威引用 | Canvas toBlob、WebP |
| 6 | 本地隐私 | 留在设备、不上服务器 |
| 7 | 多语言 | 03 十语检索向 |
| 8 | 数值示例 | 默认 200 KB、样例两张色块图 |
| 9 | 主题内链 | image-compress、image-format-converter |

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | images / P0 bulk-batch 表第一行 |
| 场景与行业 | 电商商品**照片**批量有损压小 |
| 技术（包、Tier、本地处理） | Canvas toBlob；fflate ZIP；Tier 0；`localProcessing: true` |
| Catalog `page.style` | **opts** |
| Title (en) | **Bulk compress product photos (JPEG, PNG, WebP)**（H1 点明输出格式；默认仍 JPEG） |
| Description 要点（步骤/公式 + 示例；≥120 字落地时再写满） | Add a folder of product photos, share one longest-edge and a 200 KB cap, encode JPEG or WebP in this tab, skip files that fail, download a ZIP. Example: two listing shots toward 200 KB. Files stay on the device; they are not uploaded to a server. |
| Schema | WebApplication + BreadcrumbList（与可见文案一致） |
| FAQ 要点（≥3） | 图会不会上传？每张都能到 200KB 吗？jpg 和 jpeg 要不要两个工具？PNG 透明 logo 该用哪页？动画 GIF？ |
| Disclaimer / References | 非 YMYL；MDN toBlob、Google WebP |
| related | `image-compress`, `image-format-converter` |
| 验收 | `coverage:gate` 0b→2→4；`verify:tool` |
| 工期粗估 | 本 slug 一完整实现会话 |
| 本地化核查 | 见 `03-locale-briefs.md` |

## 清单前检索覆盖优化（生成页面模块清单前必做）

> 规则：`.cursor/rules/tool-i18n-localization.mdc`「清单前检索覆盖优化」。未填本表不得勾下方「页面模块清单」，不得标 `ready`。

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-03 |
| slug 结论 | 保留 `bulk-compress-product-photos`（场景句 + 选型词 bulk；不用 `bulk-image-compress` 品类头词，不拆 `bulk-compress-jpg`） |
| 主检索词 → title/H1 | 英文 H1 **Bulk compress product photos (JPEG, PNG, WebP)**；zh **批量压缩商品图（支持 JPEG / PNG / WebP）**；格式写在括号里，不把最长边/画质堆进 H1 |
| 次要关键词 → desc / FAQ / Use cases | compress images in bulk → desc / How；compress jpg → 默认输出 JPEG + FAQ；jpeg → FAQ 不拆 URL；reduce photo size → Use case；compress to 200kb → 默认目标与芯片 |
| 用户搜索习惯判断 | 英语用户说 in bulk / compress jpg，不先想编码器；中文搜「批量压缩图片/商品图」。H1 跟场景结果，不跟参数目录 |
| 优化摘要 | 相对「bulk image compressor」品类头词初稿：H1 改为商品照片场景句；200KB/jpg/jpeg 降为默认控件与 FAQ；PNG 保透明与改后缀从本页划出 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

> 填完后验收：`npm run coverage:gate -- --slug=bulk-compress-product-photos --phase=0b`（须绿才可标 `ready` / 勾下方页面模块清单）。

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
| 总判 | 满足：可把一批商品照片有损压到 200 KB（需用户点芯片/预设）；进页默认全部不选择；Load sample 可演示多张压缩与 ZIP，进页不再自动预填 |
| 主词搜索者任务 | 一次处理很多张商品照片，让文件变小到能上传，带走一整包，而不是在单张页里重复点 20 次 |
| Ads/Planner 长尾任务 | 不适用 |
| 满足之处 | How 先写「选出一批商品图、按需体积上限、失败跳过、下载 ZIP」；选项默认不选择；结果表区分命中/未命中/跳过 |
| 超出 / 应划边界 | 不做输出格式大下拉改 PNG 当主路径（PNG 仍可当输入，输出默认 JPEG/WebP）；desc 不写 doorway/slug/「我们为了 SEO 拆页」；不做视频、不做合并 PDF |
| 缺口与已做优化 | How 步骤改为任务动词（选一批图 → 用 200KB 芯片或自定 → 压缩全部 → 看汇总 → 下 ZIP）；FAQ 补 jpeg 写法与「透明 PNG 请用 PNG 压缩页」；默认目标 KB 打开 |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | |

## 交互规格（给实现用）

- 输入：`input multiple`，JPEG/PNG/WebP/GIF/BMP；上限 **20** 个文件；超出拒绝续加并提示。共享参数：输出 / 目标 KB / 尺寸规则 **进页默认「不选择」**（保 jpeg/webp/png 原格式，否则回退 JPEG；不缩边；不做 KB 二分）；质量滑杆仍 0.8。**透明像素垫底**仅在输出为 JPEG 时显示（默认也不选择）；PNG/WebP 保透明，不铺垫底。
- 输出：逐张预览不必每张大图（避免卡）；**汇总表**（文件名、原体积、后体积、命中/未命中/跳过原因）；成功项打 **ZIP**；可选单张下载不是主路径。
- 核心规则 / 算法：串行 `createImageBitmap`/`Image` 解码 → 等比缩到最长边（不放大）→ **仅 JPEG 且选了垫底色时**先铺垫底再 `toBlob`；目标 KB 时对质量从当前值二分到 0.5（PNG 跳过、不改格式）；WebP 不支持则回退 JPEG 并记警告。动画只取能解码的静帧。ZIP 内重名：`stem (2).jpg`。
- 失败与边界行为：单张解码/编码失败 → 该行 skip，继续；0 成功则禁用 ZIP；软内存/边长警告对齐单张压缩页量级（约 25 MB / 8192 px）。
- 示例 Input → Output：点 Load sample 放入两张合成商品色块图（不同文件名）→ 按**当前选项**压缩（默认不选择时为质量 0.8 的 JPEG、无 KB 搜索），表上列出两行体积。进页不自动预填。
- **进页样例**：不自动跑。`loadSample()` 仍由「载入样例」按钮调用：生成两张 Canvas JPEG 入队并 `compressAll()`，ZIP 按钮可用、汇总非空；与 H2 Example 口径一致（两张样例、跟随当前芯片）。
- **实现防呆**：Page 用 `opts` 签名；若有 `extraBodyHtml` 模板字符串，正则写 `\\w`；B 后跑 `npm run lint:tool-page -- --slug=bulk-compress-product-photos`

## 页面模块清单（与 tool-creation 对齐）

> 勾选前须完成「清单前检索覆盖优化」与「用户意图审查」。

- [x] H1 + 一句话摘要
- [x] 首屏工具交互区（Load sample 可出结果；进页不自动预填）
- [x] How it works
- [x] Formula / Rules（计算与转换类）
- [x] Example（固定文案，与默认样例一致）
- [x] Use cases（2–3）
- [x] FAQ ≥3
- [x] Related tools ≥2
- [x] References ≥1（YMYL 建议 ≥2）
- [ ] Disclaimer（YMYL 必备）
- [x] `03-locale-briefs.md` 已填（实现十语前）
