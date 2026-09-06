# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`batch-convert-web-pages-to-pdf`  
**路径**：`/tools/batch-convert-web-pages-to-pdf`  
**主方向**：A  
**YMYL**：否  

> 填完且状态为 `ready` 后，再按 `.cursor/rules/tool-creation.mdc` 实现。  
> IG 依据：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。

---

## 使用场景（§3.3 H）

| 使用场景 | 用户搜法 | 作业类型 | 本页默认 / 芯片 |
|---|---|---|---|
| 多条公开网页一次存成 PDF 带走 | batch convert web pages to PDF; convert multiple webpages to PDF | URL 列表 → 多 PDF → ZIP | **默认**：文本框一行一个 https URL；全部转换；下载 ZIP |
| 帮助中心 / 政策页批量归档 | save several web pages as PDF; URL list to PDF | 同意图 | Use case / FAQ |
| 只要一条 HTML 或一个网址 | convert HTML to PDF; webpage to PDF（单条） | **另一作业** | 有意不满足；FAQ 链 `convert-html-to-pdf` |
| 整站 sitemap 全站导出 | crawl entire website to PDF | **超出** | 不覆盖；上限 10 条、无爬虫 |

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：batch convert web pages to PDF；convert multiple webpages to PDF；save several web pages as PDF；URL list to PDF；multiple URLs to PDF ZIP
- 用户真实任务：把若干公开网页地址贴进一页，一次转成多份 PDF，打包 ZIP 下载；失败行跳过、不中断整批。
- [x] 竞品常见：单 URL 转换器循环点；少数云端「多 URL」要注册、文件过服务器。
- [x] 缺口：① 串行失败是否整批作废；② 登录墙 / JS 渲染页与打印 CSS 是否会不像线上；③ 单条 HTML 粘贴应走哪一页；④ ZIP 命名冲突。
- [x] 本页增益：逐行状态表；失败 skip；FAQ 划界邻页；ZIP 重名 `stem (2).pdf`；Rules 写清代抓一次、不落盘。
- [x] 长尾：多 URL / 若干网页并进本页。不做整站爬虫、不拆「url to pdf」单页 doorway。
- [x] 权威来源 URL：https://github.com/eKoopmans/html2pdf.js ；https://html.spec.whatwg.org/multipage/urls-and-fetching.html
- [x] Use case：归档公开帮助页；把竞品公开定价页存档；把政策 URL 列表交给法务。
- [x] 边界：上限 10；私网/登录墙失败；JS 应用与打印 CSS 可能不像线上；样例进页不自动打外网。
- [x] Example：样例写入两条占位页的本地 HTML，跑出两份 PDF 并启用 ZIP。
- [x] Related：`convert-html-to-pdf`、`combine-files-into-one-pdf`

### 计划勾选的 §3.1 维度（至少 3）

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | 一行一 URL；串行抓取→消毒→html2pdf A4；成功打 ZIP |
| 2 | 边界/失败 | 上限 10；坏 URL / 被拦 / 超时 skip；登录墙与 JS 页 FAQ |
| 3 | 场景语境 | 帮助中心/政策页归档 |
| 5 | 权威引用 | html2pdf.js |
| 6 | 本地隐私 | 转换在标签页；URL 代抓一次不落盘 |
| 8 | 数值示例 | 2 条样例 → 2 个 PDF → ZIP |
| 9 | 主题内链 | convert-html-to-pdf、combine-files-into-one-pdf |

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | pdf / 网页→PDF 批量行 |
| 场景与行业 | 多条公开网页归档为 PDF ZIP |
| 技术 | 复用 convert-html-to-pdf 的抓取 API + html2pdf.bundle + DOMPurify + fflate；`page.style: opts`；`localProcessing: false`（URL 过边缘） |
| Catalog `page.style` | **opts** |
| Title (en) | **Batch convert web pages to PDF** |
| Description 要点 | Paste one https URL per line (up to 10), convert each public page to an A4 PDF in this tab, skip rows that fail, download a ZIP. Steps: paste the list, click Convert all, review the table, download. Example: two sample pages become two PDFs in one ZIP. Each URL is fetched once through our server and is not stored; conversion stays in the tab. Need one HTML snippet? Use Convert HTML to PDF. |
| Schema | WebApplication + BreadcrumbList |
| FAQ 要点（≥3） | 会上传吗？和单页 HTML 转换有何不同？登录墙/JS 页？ZIP 还是一份 PDF？上限多少？ |
| Disclaimer / References | 非 YMYL；html2pdf.js |
| related | `convert-html-to-pdf`, `combine-files-into-one-pdf` |
| 验收 | `coverage:gate` 0b→2→4；`verify:tool` |
| 工期粗估 | 本 slug 一完整实现会话 |
| 本地化核查 | 见 `03-locale-briefs.md` |

## 清单前检索覆盖优化（生成页面模块清单前必做）

> 规则：`.cursor/rules/tool-i18n-localization.mdc`「清单前检索覆盖优化」。未填本表不得勾下方「页面模块清单」，不得标 `ready`。

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-06 |
| slug 结论 | 保留 `batch-convert-web-pages-to-pdf`（情境=多网页 + 动作=批量转换 + 结果=PDF；不是品类头词 webpage-to-pdf，也不是邻页 convert-html-to-pdf 的近义空壳） |
| 主检索词 → title/H1 | 英文 H1 **Batch convert web pages to PDF**（主词原句进 H1）；zh 用「批量把网页转成 PDF」当地句，不把 batch 硬塞进中文 H1 |
| 次要关键词 → desc / FAQ / Use cases | convert multiple webpages to PDF → desc 前半；save several web pages as PDF → Use case 1；URL list to PDF → How + FAQ；multiple URLs to PDF ZIP → desc / 按钮 Download ZIP；单条 webpage to PDF → FAQ 链邻页（有意不满足） |
| 用户搜索习惯判断 | 会搜 batch / multiple / several URLs 的人要一次多份；只搜 webpage to pdf / convert html to pdf 的应进邻页。H1 用 plural + batch，避免抢单页意图 |
| 优化摘要 | 相对初稿「webpage to pdf」：slug 改成任务句并强调 batch/multiple；H1 不进攻单页头词；次词落入 desc/FAQ/usecase；整站爬虫划出范围 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

> 填完后验收：`npm run coverage:gate -- --slug=batch-convert-web-pages-to-pdf --phase=0b`

## Ads / Keyword Planner 长尾（有分析时必做）

> PDF Planner（`docs/seo/keywords/pdf/2026-09-03-pdf-keyword-planner.md`）N4 归属 `convert html pdf` → 已建 `convert-html-to-pdf`。本批 **无**「batch / multiple web pages to PDF」直词。

- [x] 不适用（本 slug 无 Planner / Ads 长尾分析；N4 单页 HTML 词已由邻页占用，本页不抢 H1）
- [ ] 已引用分析路径：`docs/seo/keywords/…`

| 长尾词（Planner） | 归属 | 文案落点（H1/desc/FAQ/usecase） | 功能覆盖（控件/结果哪一步） | 不覆盖理由（若有） |
|---|---|---|---|---|
| convert html pdf | 邻页 `convert-html-to-pdf` | FAQ 划界，不进本页 H1 | 无（单条 HTML/URL） | 同意图不同；禁止 doorway |

- [x] 交互规格已按上表补齐能力（本页覆盖多 URL 队列，不覆盖 Planner N4 单页）

## 用户意图审查（标 ready 前必做）

> 规则：`.cursor/rules/work-tasks-tool-brief.mdc`「用户意图审查」。对照 `00` 原话 + 主检索词用户任务（有 Planner 长尾时含长尾任务）。未填不得 `ready`。

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-06 |
| 总判 | 满足：首屏是 URL 列表 + 全部转换 + 逐行表 + ZIP；How 先答「一次把多篇公开网页存成 PDF」；单条 HTML 不抢首屏 |
| 主词搜索者任务 | 贴多条公开网址，一次拿到多份 PDF（通常 ZIP），失败行可跳过 |
| Ads/Planner 长尾任务 | 不适用；N4 单页任务有意不满足并链邻页 |
| 满足之处 | How：粘贴列表 → 全部转换 → 看表 → 下 ZIP；样例两条本地页跑出真实 PDF 行 |
| 超出 / 应划边界 | 不做 sitemap 爬虫、不合并成一份 PDF（那是 combine-files）；desc 不写 doorway/slug 自述；HTML 编辑器不进首屏 |
| 缺口与已做优化 | How 补「失败 skip」；FAQ 写登录墙/JS 页与邻页差异；进页样例不自动 fetch 外网（避免 example.com 被拦导致一打开就红字），用本地 HTML 占位跑出表+ZIP |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | |

## 交互规格（给实现用）

- 输入：多行文本框，一行一个 http(s) URL；上限 **10**；空行忽略；重复 URL 仍各转一次。共享：载入等待秒数（默认 1，上限 30，与邻页相同）。
- 输出：表格列 URL / 状态 / 文件名；成功项内存 PDF；**Download ZIP**（fflate）。0 成功则 ZIP 禁用。
- 核心规则：串行：规范化 URL → `GET /api/tools/convert-html-to-pdf?url=` → 消毒 → 隐藏 iframe 截图（复用邻页图片代理与 overflow 处理）→ html2pdf A4。ZIP 内 `hostname-path.pdf`，重名 `stem (2).pdf`。
- 失败：该行 skip（坏协议、私网、超时、无 HTML、转换异常）；整批不因一行失败中止。
- 示例 Input → Output：样例两条占位页 → 两行 Ready → ZIP 含 2 个 PDF。
- **进页样例（必填）**：`loadSample()` 填入两条示例 URL，并用**本地合成 HTML**（不请求外网）转换出两份 PDF、启用 ZIP。与 H2 Example 对齐。例外理由：自动 fetch `example.com` 可能被拦，邻页因此不进页自动抓 URL；本页仍须进页看到真实结果，故用本地 HTML 占位。用户点「全部转换」才逐条代抓列表里的真实 URL。
- **实现防呆**：Page 用 `opts` 签名；`extraBodyHtml` 正则写 `\\w`；B 后跑 `npm run lint:tool-page -- --slug=batch-convert-web-pages-to-pdf`

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
