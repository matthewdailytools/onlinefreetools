# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`batch-convert-web-pages-to-png`  
**路径**：`/tools/batch-convert-web-pages-to-png`  
**主方向**：A  
**YMYL**：否  

> 填完且状态为 `ready` 后，再按 `.cursor/rules/tool-creation.mdc` 实现。  
> IG 依据：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。

---

## 使用场景（§3.3 H）

| 使用场景 | 用户搜法 | 作业类型 | 本页默认 / 芯片 |
|---|---|---|---|
| 多条公开页一次存成锐利 PNG | batch convert web pages to PNG; convert multiple webpages to PNG | URL 列表 → 多 PNG → ZIP | **默认**：一行一个 https；视口 Desktop 1280；整页；白底；1×；全部转换；下载 ZIP |
| 单条 webpage to png（Planner） | webpage to png; convert webpage to png | **同作业、一条列表** | absorb：贴一行即可；不拆 doorway |
| UI 评审要透明底或 2× 锐利边 | transparent PNG screenshot; retina webpage screenshot | 背景 + 倍率 | 控件：Background、Scale |
| 聊天贴图、可接受块效应 | batch convert web pages to JPG | **另一作业** | 有意不满足；FAQ 链 JPG 批处理 |
| 可打印 A4 | batch convert web pages to PDF | **另一作业** | FAQ 链 PDF 批处理 |
| 本地照片转 PNG | bulk convert images to PNG | **另一作业** | FAQ 链邻页 |
| 整站爬虫 | crawl entire website to png | **超出** | 上限 10、无爬虫 |

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：batch convert web pages to PNG；convert multiple webpages to PNG；webpage to png；convert webpage to png；lossless UI screenshot ZIP
- 用户真实任务：把若干公开网址截成 **无损 PNG**（锐利文字/控件边、可选透明底与 1×/2×），打包 ZIP；失败行跳过。
- [x] 竞品常见：单 URL webpage to png 云截图；少有批量 + 透明底/倍率；多数不说明与 JPEG 有损、A4 PDF 的差异。
- [x] 缺口：① JPEG 会在文字和 1px 边上出块效应；② 透明底才能叠到设计稿；③ 2× 倍率给视网膜预览；④ 失败 skip；⑤ 登录墙/JS 不像线上。
- [x] 本页增益：PNG MIME（无 JPEG 质量滑条）；白底 vs 透明；1× vs 2×；视口三档；整页/首屏；逐行 skip；FAQ 划界 JPG / PDF / 本地图转 PNG。
- [x] 长尾：Planner webpage to png / convert webpage to png **并进本页**。不拆单 URL doorway。不做整站爬虫。
- [x] 权威来源 URL：https://github.com/niklasvh/html2canvas ；https://www.w3.org/TR/png/
- [x] Use case：组件库/设计稿对齐（锐利边）；需要透明底叠 Figma；不要 JPEG 聊天压缩。
- [x] 边界：上限 10；私网/登录墙失败；超高首页 cap 8192；透明底在无 alpha 的实心底页上看起来仍不透明。
- [x] Example：点「载入样例」写入两条 UI 组件页的本地 HTML，跑出两份 PNG 并启用 ZIP。
- [x] Related：`batch-convert-web-pages-to-jpg`、`batch-convert-web-pages-to-pdf`

### 计划勾选的 §3.1 维度（至少 3）

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | 一行一 URL；串行抓取→消毒→html2canvas→`image/png`；白底或透明；scale 1 或 2 |
| 2 | 边界/失败 | 上限 10；坏 URL skip；透明底不能让实心 body 变透明；画布 cap |
| 3 | 场景语境 | UI 评审锐利边、透明底叠稿、不要 JPEG 块效应 |
| 4 | 对照表 | FAQ：本页无损 PNG vs JPG 有损 vs PDF A4 vs 本地图转 PNG |
| 6 | 本地隐私 | 转换在标签页；URL 代抓一次不落盘 |
| 8 | 数值示例 | 2 条样例 → 2 个 PNG → ZIP；视口 1280/768/390；scale 1/2 |
| 9 | 主题内链 | batch-convert-web-pages-to-jpg、batch-convert-web-pages-to-pdf |

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | image / 网页→PNG 批量行 |
| 场景与行业 | 多条公开网页截成无损 PNG ZIP（透明底/倍率可切换） |
| 技术 | 复用代抓 API + html2canvas PNG + DOMPurify + fflate；`page.style: opts`；`localProcessing: false` |
| Catalog `page.style` | **opts** |
| Title (en) | **Batch convert web pages to PNG** |
| Description 要点 | **SERP 摘要窗口**：前 120–160 字符写清「批量网页→PNG + ZIP + 无损/透明底」。紧跟 Steps + Example。头词 webpage to png absorb。不要说明书全文当 meta。 |
| Schema | WebApplication + BreadcrumbList |
| FAQ 要点（≥3） | 会上传吗？和批量网页转 JPG 有何不同？和 PDF 批处理有何不同？透明底何时可见？一条 URL 行不行？和本地图转 PNG？ |
| Disclaimer / References | 非 YMYL；html2canvas；PNG spec |
| related | `batch-convert-web-pages-to-jpg`, `batch-convert-web-pages-to-pdf` |
| 验收 | `coverage:gate` 0b→2→4；`verify:tool` |
| 工期粗估 | 本 slug 一完整实现会话 |
| 本地化核查 | 见 `03-locale-briefs.md` |

## 清单前检索覆盖优化（生成页面模块清单前必做）

> 规则：`.cursor/rules/tool-i18n-localization.mdc`「清单前检索覆盖优化」。未填本表不得勾下方「页面模块清单」，不得标 `ready`。

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-07 |
| slug 结论 | 保留 `batch-convert-web-pages-to-png`（情境=多网页 + 动作=批量转换 + 结果=PNG；不是 webpage-to-png doorway，也不是 JPG 批处理换后缀） |
| 主检索词 → title/H1 | 英文 H1 **Batch convert web pages to PNG**；zh「批量把网页转成 PNG」，不把 batch 硬塞进中文 H1 |
| 次要关键词 → desc / FAQ / Use cases | webpage to png / convert webpage to png → desc + FAQ（一条 URL 也行）；lossless / 无损锐利边 → Rules + usecase；transparent PNG → FAQ + 高级设置；url to png → How |
| 用户搜索习惯判断 | 搜 batch/multiple 的人要一次多图 ZIP；搜 webpage to png 通常只要一张，本页贴一行即可。搜 webpage to jpg / pdf 应进邻页。H1 用 plural + batch，避免伪装成单页云截图站 |
| 优化摘要 | 相对初稿「webpage to png」光杆：slug/H1 改成批量任务句；Planner 高量词 absorb 进 desc/FAQ；相对 JPG 邻页把无损、透明底、1×/2× 定为真实增量，禁止只换 PNG 后缀 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

> 填完后验收：`npm run coverage:gate -- --slug=batch-convert-web-pages-to-png --phase=0b`

## Ads / Keyword Planner 长尾（有分析时必做）

> 来源：`docs/seo/keywords/todo/web2png-Keyword Planner 09-06-2026 at 04-30-57.csv`（分组 Png / Png Converter / Convert Png）。

- [ ] 不适用（本 slug 无 Planner / Ads 长尾分析）
- [x] 已引用分析路径：`docs/seo/keywords/todo/web2png-Keyword Planner 09-06-2026 at 04-30-57.csv`

| 长尾词（Planner） | 归属 | 文案落点（H1/desc/FAQ/usecase） | 功能覆盖（控件/结果哪一步） | 不覆盖理由（若有） |
|---|---|---|---|---|
| webpage to png（100–1,000） | absorb | desc 前半 + FAQ「一条网址也行」 | URL 列表允许 1 行；Convert all → 一张 PNG | 不另开单 URL 页（doorway） |
| webpage to png converter（10–100） | absorb | desc | 同上管线 | |
| convert webpage to png（10–100） | absorb | desc 步骤句 + How | 同上 | |
| png converter（过泛） | drop | — | — | 品类头词，指向本地图转 PNG 等邻页 |
| bulk convert images to png | drop | FAQ 一句链邻页 | — | 输入是本地图，不是网页 |

- [x] 交互规格已按上表补齐能力（一条或多条 URL 都能转成 PNG；透明底/倍率/视口为相对 JPG 邻页的真实增量）

## 用户意图审查（标 ready 前必做）

> 规则：`.cursor/rules/work-tasks-tool-brief.mdc`「用户意图审查」。对照 `00` 原话 + 主检索词用户任务（有 Planner 长尾时含长尾任务）。未填不得 `ready`。

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-07 |
| 总判 | 满足：首屏是 URL 列表 + Convert all / Download ZIP；透明底与 1×/2× 收进高级设置；How 先答「贴列表 → 无损 PNG ZIP」，再点名与 JPG/PDF 差异 |
| 主词搜索者任务 | 贴多条公开网址，一次拿到多张锐利 PNG（通常 ZIP）；要能选透明底或更高像素密度，而不是 JPEG 画质 |
| Ads/Planner 长尾任务 | webpage to png / convert webpage to png：贴一行即可得到 PNG。有意不满足：JPEG 聊天图、A4 PDF、本地照片转 PNG、整站爬虫 |
| 满足之处 | How：贴列表 → 全部转换（默认桌面 1280、白底、1×、整页）→ 下 ZIP；样例两条 UI 页跑出真实 PNG |
| 超出 / 应划边界 | 不做 sitemap 爬虫；不把 JPEG 质量滑条放进本页；不自动进页跑 html2canvas |
| 缺口与已做优化 | 相对 JPG 把 JPEG quality 换成 Background + Scale；样例改成带 1px 边与半透明层的 UI 页 |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | |

## 交互规格（给实现用）

- 输入：多行文本框，一行一个 http(s) URL；上限 **10**。主按钮行：Convert all / Download ZIP / Load sample / Clear。高级设置 `<details>`：Load wait（默认 1s）、Viewport 1280/768/390、**Background white/transparent**、**Scale 1×/2×**、Capture full/first。无 JPEG 质量滑条。
- 输出：表格列 URL / 文件名 / 状态；成功项内存 PNG；Download ZIP。0 成功则 ZIP 禁用。
- 核心规则：同 JPG 抓取/消毒/iframe；`canvas.toBlob('image/png')`；`backgroundColor: '#ffffff'` 或 `null`；html2canvas `scale` 取 1 或 2（仍受 8192 边长 cap）。ZIP 内 `hostname-path.png`。
- 失败：该行 skip；整批不因一行失败中止。
- 示例 Input → Output：样例两条 UI 占位页 → 两行 Ready → ZIP 含 2 个 PNG。
- **进页样例（必填）**：`function loadSample()` 存在且按钮可点。**例外：进页不自动调用**（html2canvas 会卡住标签页）。
- **实现防呆**：Page 用 `opts` 签名；截图逻辑内联本页；正则 `\\w`；B 后 `lint:tool-page`

## 页面模块清单（与 tool-creation 对齐）

> 勾选前须完成「清单前检索覆盖优化」与「用户意图审查」。

- [x] H1 + 一句话摘要
- [x] 首屏工具交互区（**不**进页自动跑样例：html2canvas 会卡住标签页）
- [x] How it works
- [x] Formula / Rules（计算与转换类）
- [x] Example（固定文案，与默认样例一致）
- [x] Use cases（2–3）
- [x] FAQ ≥3
- [x] Related tools ≥2
- [x] References ≥1（YMYL 建议 ≥2）
- [ ] Disclaimer（YMYL 必备）
- [x] `03-locale-briefs.md` 已填（实现十语前）
