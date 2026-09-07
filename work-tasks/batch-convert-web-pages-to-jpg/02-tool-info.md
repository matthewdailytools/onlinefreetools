# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`batch-convert-web-pages-to-jpg`  
**路径**：`/tools/batch-convert-web-pages-to-jpg`  
**主方向**：A  
**YMYL**：否  

> 填完且状态为 `ready` 后，再按 `.cursor/rules/tool-creation.mdc` 实现。  
> IG 依据：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。

---

## 使用场景（§3.3 H）

| 使用场景 | 用户搜法 | 作业类型 | 本页默认 / 芯片 |
|---|---|---|---|
| 多条公开网页一次存成 JPEG 带走 | batch convert web pages to JPG; convert multiple webpages to JPG | URL 列表 → 多 JPEG → ZIP | **默认**：一行一个 https；视口 Desktop 1280；整页；质量 0.85；全部转换；下载 ZIP |
| 单条 webpage / URL to jpg（Planner） | webpage to jpg; url to jpg converter | **同作业、一条列表** | absorb：贴一行即可；不拆 doorway |
| 对照手机首屏 vs 桌面长图 | mobile webpage screenshot; first screen | 视口 + 整页/首屏 | 控件：Viewport、Capture |
| 要可打印的 A4 文档 | batch convert web pages to PDF | **另一作业** | 有意不满足；FAQ 链 PDF 批处理 |
| 已有 PDF / 本地图转 JPG | pdf to jpg; bulk images to jpg | **另一作业** | FAQ 链邻页 |
| 整站 sitemap 全站截图 | crawl entire website to jpg | **超出** | 上限 10、无爬虫 |

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：batch convert web pages to JPG；convert multiple webpages to JPG；webpage to jpg；url to jpg；URL list to JPG ZIP
- 用户真实任务：把若干公开网页地址贴进一页，按选定视口截成 JPEG（整页或首屏），打包 ZIP；失败行跳过。
- [x] 竞品常见：单 URL「webpage to jpg」云端截图；少有批量 + 视口/质量对照；多数不说明与 PDF 归档的差异。
- [x] 缺口：① 失败是否整批作废；② 桌面 1280 vs 手机 390 会换布局；③ 整页长图 vs 首屏；④ JPEG 质量与体积；⑤ 登录墙 / JS 页不像线上；⑥ 和网页转 PDF / PDF 转 JPG 不是同一产物。
- [x] 本页增益：视口宽度三档；JPEG 质量；整页/首屏；逐行状态表；失败 skip；画布边长 cap；FAQ 划界三条邻页；ZIP 重名 `stem (2).jpg`。
- [x] 长尾：Planner webpage to jpg / url to jpg **并进本页**（一条或多条）。不拆单 URL doorway。不做整站爬虫。
- [x] 权威来源 URL：https://github.com/niklasvh/html2canvas ；https://html.spec.whatwg.org/multipage/urls-and-fetching.html
- [x] Use case：工单/聊天贴网页长图；桌面 vs 手机首屏对照；公开政策页栅格归档（不要 PDF 时）。
- [x] 边界：上限 10；私网/登录墙失败；JS 应用可能不像线上；超高首页 cap 8192；样例进页不自动跑 html2canvas。
- [x] Example：点「载入样例」写入两条占位页的本地 HTML，跑出两份 JPEG 并启用 ZIP。
- [x] Related：`batch-convert-web-pages-to-pdf`、`pdf-to-jpg`

### 计划勾选的 §3.1 维度（至少 3）

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | 一行一 URL；串行抓取→消毒→按视口 html2canvas→JPEG 质量；成功打 ZIP |
| 2 | 边界/失败 | 上限 10；坏 URL / 被拦 / 画布超限 skip；登录墙与 JS 页 FAQ |
| 3 | 场景语境 | 工单贴图、手机/桌面对照、不要 PDF 时的网页图归档 |
| 4 | 对照表 | Rules/FAQ：本页 JPEG 截图 vs PDF 批处理 A4 vs pdf-to-jpg 文件 |
| 6 | 本地隐私 | 转换在标签页；URL 代抓一次不落盘 |
| 8 | 数值示例 | 2 条样例 → 2 个 JPG → ZIP；视口 1280/768/390；质量默认 0.85 |
| 9 | 主题内链 | batch-convert-web-pages-to-pdf、pdf-to-jpg |

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | image / 网页→JPG 批量行 |
| 场景与行业 | 多条公开网页截成 JPEG ZIP（视口可切换） |
| 技术 | 复用 convert-html-to-pdf 抓取 API + html2canvas JPEG + DOMPurify + fflate；`page.style: opts`；`localProcessing: false` |
| Catalog `page.style` | **opts** |
| Title (en) | **Batch convert web pages to JPG** |
| Description 要点 | **SERP 摘要窗口**：前 120–160 字符写清「批量网页→JPG + ZIP + 视口/画质」。紧跟 `Steps: paste URLs, Convert all, Download ZIP. Example: two help pages become two JPEGs.` 隐私写清代抓一次不落盘。头词 webpage to jpg / url to jpg absorb 进 desc 前半（一行也行）。不要把说明书全文当 meta。 |
| Schema | WebApplication + BreadcrumbList |
| FAQ 要点（≥3） | 会上传吗？和批量网页转 PDF 有何不同？和 PDF 转 JPG 有何不同？登录墙/JS？ZIP 还是一张图？视口/质量怎么改产物？ |
| Disclaimer / References | 非 YMYL；html2canvas |
| related | `batch-convert-web-pages-to-pdf`, `pdf-to-jpg` |
| 验收 | `coverage:gate` 0b→2→4；`verify:tool` |
| 工期粗估 | 本 slug 一完整实现会话 |
| 本地化核查 | 见 `03-locale-briefs.md` |

## 清单前检索覆盖优化（生成页面模块清单前必做）

> 规则：`.cursor/rules/tool-i18n-localization.mdc`「清单前检索覆盖优化」。未填本表不得勾下方「页面模块清单」，不得标 `ready`。

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-07 |
| slug 结论 | 保留 `batch-convert-web-pages-to-jpg`（情境=多网页 + 动作=批量转换 + 结果=JPG；不是品类头词 webpage-to-jpg doorway，也不是邻页 PDF 批处理换后缀） |
| 主检索词 → title/H1 | 英文 H1 **Batch convert web pages to JPG**（用户任务句进 H1）；zh 用「批量把网页转成 JPG」当地句，不把 batch 硬塞进中文 H1 |
| 次要关键词 → desc / FAQ / Use cases | webpage to jpg / convert webpage to jpg → desc + FAQ（一条 URL 也行）；url to jpg / url to jpg converter → desc；convert multiple webpages to JPG / URL list → How + Use case；free/online 不堆进 H1 |
| 用户搜索习惯判断 | 搜 batch/multiple 的人要一次多图 ZIP；搜 webpage to jpg / url to jpg 的人通常只要一张图，本页贴一行即可办成，故 absorb 不拆页。搜 webpage to pdf 的应进 PDF 批处理。H1 用 plural + batch，避免伪装成单页云截图站 |
| 优化摘要 | 相对初稿「webpage to jpg」光杆：slug/H1 改成批量任务句以免 doorway；Planner 高量词 absorb 进 desc/FAQ 且一条 URL 能跑通；相对 PDF 邻页写清视口/质量/整页首屏才是增量，不只换 JPEG 后缀 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

> 填完后验收：`npm run coverage:gate -- --slug=batch-convert-web-pages-to-jpg --phase=0b`

## Ads / Keyword Planner 长尾（有分析时必做）

> 来源：`docs/seo/keywords/todo/Keyword Planner 09-06-2026 at 04-28-12.csv`（分组 Webpage Jpg / Jpg / Jpg Converter / Free Converter Jpg）。

- [ ] 不适用（本 slug 无 Planner / Ads 长尾分析）
- [x] 已引用分析路径：`docs/seo/keywords/todo/Keyword Planner 09-06-2026 at 04-28-12.csv`

| 长尾词（Planner） | 归属 | 文案落点（H1/desc/FAQ/usecase） | 功能覆盖（控件/结果哪一步） | 不覆盖理由（若有） |
|---|---|---|---|---|
| webpage to jpg（100–1,000） | absorb | desc 前半 + FAQ「一条网址也行」 | URL 列表允许 1 行；Convert all → 一张 JPG（仍可下 ZIP） | 不另开单 URL 页（doorway） |
| webpage to jpg converter / web page to jpg converter | absorb | desc「convert webpages to JPG」 | 同上转换管线 | |
| convert webpage to jpg / convert web page to jpg | absorb | desc 步骤句 | 同上 | |
| url to jpg / url to jpg converter | absorb | desc + How | 一行 URL → JPEG | |
| webpage to jpg converter free / convert webpage to jpg free | absorb（不堆 free） | desc 写清代抓一次不落盘，不把 free 塞进 H1 | 无付费墙 | 禁止 H1 堆 free |
| online webpage to jpg（0–10） | drop | — | — | 过泛、与站点品类重复 |

- [x] 交互规格已按上表补齐能力（一条或多条 URL 都能转成 JPEG；视口/质量/整页首屏为相对 PDF 邻页的真实增量）

## 用户意图审查（标 ready 前必做）

> 规则：`.cursor/rules/work-tasks-tool-brief.mdc`「用户意图审查」。对照 `00` 原话 + 主检索词用户任务（有 Planner 长尾时含长尾任务）。未填不得 `ready`。

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-07 |
| 总判 | 满足：首屏是 URL 列表 + 动作行（全部转换 / 下载 ZIP / 载入样例 / 清空）；视口/质量/整页首屏/等待收进「高级设置（可选）」，默认 1280 / 0.85 / 整页 / 等待 1 秒不打开也能转。How 先答「贴列表 → 全部转换 → ZIP」，设置在 How 第 3 步点名。相对 PDF 邻页的差异在控件与产物，不只换后缀 |
| 主词搜索者任务 | 贴多条公开网址，一次拿到多张 JPG（通常 ZIP），失败行可跳过；要能选桌面/手机宽度（高级设置，非首屏噪音） |
| Ads/Planner 长尾任务 | webpage to jpg / url to jpg：贴一行即可得到 JPEG；convert webpage to jpg：同一管线。有意不满足：A4 PDF、PDF 文件转图、整站爬虫 |
| 满足之处 | How：贴列表 → 全部转换（默认桌面 1280）→ 下 ZIP；样例两条本地页跑出真实 JPG 行；高级设置里改视口/质量/首屏 |
| 超出 / 应划边界 | 不做 sitemap 爬虫；不把 HTML 编辑器/云盘上传放进首屏；hero lead 用短句 desc、不把整段 meta 塞进去；不自动进页跑 html2canvas（会卡住标签页） |
| 缺口与已做优化 | 2026-09-07 按 converter-serp-landing-seo / converter-input-ui 收：meta 压到摘要窗口；设置折叠；How 动词对齐按钮原文 |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | |

## 交互规格（给实现用）

- 输入：多行文本框，一行一个 http(s) URL；上限 **10**。**主按钮行只放动作**：Convert all / Download ZIP / Load sample / Clear。共享等待秒数与差异控件（Viewport `1280` / `768` / `390`；JPEG quality `0.7` / `0.85` / `0.95`；Capture `full`/`first`）一律放在 **「高级设置（可选）」`<details>`**，默认收起；默认值 1280 / 0.85 / 整页 / 等待 1 秒，不打开也能转。Hero lead 用短句 `desc`，meta 用 `description`。
- 输出：表格列 URL / 文件名 / 状态；成功项内存 JPEG；**Download ZIP**（fflate）。0 成功则 ZIP 禁用。
- 核心规则：串行：规范化 URL → `GET /api/tools/convert-html-to-pdf?url=` → 消毒（去 noscript / meta refresh，保留 html `phone`）→ 隐藏 iframe 设为选定宽度 → html2canvas → `canvas.toBlob('image/jpeg', quality)`。ZIP 内 `hostname-path.jpg`，重名 `stem (2).jpg`。
- 失败：该行 skip（坏协议、私网、超时、无 HTML、转换异常、画布失败）；整批不因一行失败中止。
- 示例 Input → Output：样例两条占位页 → 两行 Ready → ZIP 含 2 个 JPG。
- **进页样例（必填）**：`function loadSample()` 存在且按钮可点：填入两条示例 URL，用**本地合成 HTML**转出两份 JPEG、启用 ZIP。与 H2 Example 对齐。**例外：进页不自动调用 `loadSample()`**——html2canvas 会卡住标签页（与 PDF 批处理同一理由）。用户点「载入样例」才转；点「全部转换」才代抓真实 URL。
- **实现防呆**：Page 用 `opts` 签名；截图逻辑**内联在本页**（勿从 `src/pages/site/*.ts` 抽共享 helper，除非 `CROSS_TOOL_UPDATE=1`）；`extraBodyHtml` 正则写 `\\w`；B 后跑 `npm run lint:tool-page -- --slug=batch-convert-web-pages-to-jpg`

## 页面模块清单（与 tool-creation 对齐）

> 勾选前须完成「清单前检索覆盖优化」与「用户意图审查」。

- [x] H1 + 一句话摘要
- [x] 首屏工具交互区（**不**进页自动跑样例：html2canvas 会卡住标签页；点「载入样例」才转换，进度面板仍显示）
- [x] How it works
- [x] Formula / Rules（计算与转换类）
- [x] Example（固定文案，与默认样例一致）
- [x] Use cases（2–3）
- [x] FAQ ≥3
- [x] Related tools ≥2
- [x] References ≥1（YMYL 建议 ≥2）
- [ ] Disclaimer（YMYL 必备）
- [x] `03-locale-briefs.md` 已填（实现十语前）
