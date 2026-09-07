# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`convert-html-web-pages-to-word-document`  
**路径**：`/tools/convert-html-web-pages-to-word-document`  
**主方向**：A  
**YMYL**：否  

> 填完且状态为 `ready` 后，再按 `.cursor/rules/tool-creation.mdc` 实现。  
> IG 依据：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。

---

## 使用场景（§3.3 H）

| 使用场景 | 用户搜法 | 作业类型 | 本页默认 / 芯片 |
|---|---|---|---|
| 把 HTML 转成可改的 Word | html to word; convert html to word document; html to docx | 粘贴 HTML → .docx | **默认 Tab**：Paste HTML；Convert；Download .docx |
| 公开网页转 Word | convert webpage to word document; convert webpage to word | 代抓 URL → 同一映射 | Tab：Page URL；同一 Convert |
| 要 A4 打印件 | convert html to pdf | **另一作业** | FAQ 链 HTML→PDF |
| 已有 PDF 要 Word | turn pdf into word document | **另一作业** | FAQ 链 PDF→Word |
| 多图排进 Word | images to word | **另一作业** | FAQ 链邻页 |
| 网页截图 PNG/JPG | batch convert web pages to png/jpg | **另一作业** | 有意不满足：本页不是栅格 |
| Chrome 另存为完整页 / mhtml | chrome html to word; convert mhtml to word | **有意不满足** | FAQ：请导出 HTML 或贴源码，不做 .mhtml |

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：html to word；convert html to word document；html to docx；convert webpage to word document；html to word converter
- 用户真实任务：把 HTML（粘贴或公开 URL）映射成 **可编辑 Word 段落/标题/列表/表格/链接**，下载 .docx。
- [x] 竞品常见：云端 html to word；常把整页当图片塞进 Word，或不说明与 PDF 打印件的差异。
- [x] 缺口：① 标题/列表是否变成真正 Word 样式；② CSS 不会像素级还原；③ 粘贴 vs URL 两种输入；④ 与 HTML→PDF / PDF→Word / 网页截图划界。
- [x] 本页增益：DOM 映射（h1–h6、p、ul/ol、table、a、strong/em）；可选嵌入 `<img>`；诚实声明不是截图、不是 A4 PDF；Tab 吸收 webpage 长尾。
- [x] 长尾：Planner `html to word`（1k–10k）作主作业；`convert webpage to word` absorb 进 URL Tab。不拆 `/html-to-word` doorway。不做 mhtml。
- [x] 权威来源 URL：https://docx.js.org/ ；https://html.spec.whatwg.org/multipage/dom.html
- [x] Use case：帮助中心文章改成可批注 Word；公告 HTML 交法务改稿；不要打印 PDF。
- [x] 边界：脚本/登录墙失败；复杂 CSS/绝对定位不会保留；图片可选且受跨域限制；单份输出不是 ZIP。
- [x] Example：载入样例填入带 H1/列表/表格的 HTML，Convert 后启用 Download。
- [x] Related：`convert-html-to-pdf`、`turn-pdf-into-word-document`

### 计划勾选的 §3.1 维度（至少 3）

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | 消毒 HTML → 遍历节点 → Heading/Paragraph/Table/ImageRun → Packer.toBlob |
| 2 | 边界/失败 | 空 HTML；URL 被拦；脚本页不像线上；CSS 布局不保留；mhtml 不支持 |
| 3 | 场景语境 | 可批注改稿，不是打印件也不是截图 |
| 4 | 对照表 | FAQ：本页可编辑 Word vs HTML→PDF vs PDF→Word vs 网页 PNG |
| 6 | 本地隐私 | 粘贴内容留在标签页；URL 代抓一次不落盘 |
| 8 | 数值示例 | 样例含 1 个 H1、1 个列表、1 个两列表格 → 一个 .docx |
| 9 | 主题内链 | convert-html-to-pdf、turn-pdf-into-word-document |

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | pdf-docs / HTML→Word |
| 场景与行业 | 把 HTML 或公开网页变成可编辑 Word |
| 技术 | DOMPurify + `/vendor/docx`；URL 复用 `/api/tools/convert-html-to-pdf`；`opts`；`localProcessing: false` |
| Catalog `page.style` | **opts** |
| Title (en) | **Convert HTML web pages to a Word document** |
| Description 要点 | **SERP 摘要窗口**：前 160 字符含 html to word + 可编辑 .docx（不是 PDF、不是截图）。Steps: paste or fetch, Convert, Download. Example: headings and a table become Word styles. |
| Schema | WebApplication + BreadcrumbList |
| FAQ 要点（≥3） | 会上传吗？和 HTML 转 PDF 有何不同？和 PDF 转 Word？网页 URL 行不行？html to docx？Chrome mhtml？ |
| Disclaimer / References | 非 YMYL；docx.js；HTML spec |
| related | `convert-html-to-pdf`, `turn-pdf-into-word-document` |
| 验收 | `coverage:gate` 0b→2→4；`verify:tool` |
| 工期粗估 | 本 slug 一完整实现会话 |
| 本地化核查 | 见 `03-locale-briefs.md` |

## 清单前检索覆盖优化（生成页面模块清单前必做）

> 规则：`.cursor/rules/tool-i18n-localization.mdc`「清单前检索覆盖优化」。未填本表不得勾下方「页面模块清单」，不得标 `ready`。

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-07 |
| slug 结论 | 保留 `convert-html-web-pages-to-word-document`（动作=convert + 源=HTML/网页 + 结果=Word document；不用品类头词 html-to-word 以免 doorway） |
| 主检索词 → title/H1 | 英文 H1 **Convert HTML web pages to a Word document**（覆盖 html to word + webpage）；zh「把 HTML 网页转成 Word 文档」 |
| 次要关键词 → desc / FAQ / Use cases | html to word / convert html to word → desc 前半 + FAQ；html to docx / convert html to docx → FAQ；convert webpage to word → How + URL Tab；html to word converter → desc 不把 converter 硬塞 H1 |
| 用户搜索习惯判断 | 头词 html to word 量级最高，默认 Tab 是粘贴 HTML；webpage to word 较低，同一页 URL Tab absorb。搜 html to pdf / pdf to word 进邻页 |
| 优化摘要 | 相对用户原句保留 web pages；H1 写任务句而非 html-to-word 光杆；Planner 高量 html to word absorb 进 desc；相对 PDF/截图邻页把「可编辑标题列表表格」定为增量 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

> 填完后验收：`npm run coverage:gate -- --slug=convert-html-web-pages-to-word-document --phase=0b`

## Ads / Keyword Planner 长尾（有分析时必做）

> 来源：`docs/seo/keywords/todo/worddocument-Keyword Planner 09-06-2026 at 05-11-33.csv`。

- [ ] 不适用（本 slug 无 Planner / Ads 长尾分析）
- [x] 已引用分析路径：`docs/seo/keywords/todo/worddocument-Keyword Planner 09-06-2026 at 05-11-33.csv`

| 长尾词（Planner） | 归属 | 文案落点（H1/desc/FAQ/usecase） | 功能覆盖（控件/结果哪一步） | 不覆盖理由（若有） |
|---|---|---|---|---|
| html to word（1,000–1万） | absorb（主作业，不另开光杆 slug） | desc 前半 + FAQ | 默认 Paste HTML Tab → Convert → .docx | 不拆 /html-to-word doorway |
| convert html to word / convert html to word document（100–1,000） | build 主词 | H1「Convert HTML…Word document」+ desc | 同上 | |
| html to word converter / html to docx / convert html to docx | absorb | desc + FAQ「输出是 .docx」 | Packer 生成 docx | converter 不进 H1 |
| convert webpage to word / convert webpage to word document（10–100） | absorb | How + URL Tab + FAQ | Page URL Tab 代抓后同一映射 | |
| html to word online / convert html to word free | absorb（不堆 free/online） | desc 写清粘贴留在标签页、URL 代抓一次不落盘 | 无付费墙 | 禁止 H1 堆 free |
| chrome html to word / convert mhtml to word | drop | FAQ 一句 | — | 不做 .mhtml / Chrome 完整页包 |
| convert word document to pdf | drop | related 链邻页 | — | 反方向，已有工具 |

- [x] 交互规格已按上表补齐能力（粘贴 HTML 与 URL 两种输入都能得到可编辑 .docx）

## 用户意图审查（标 ready 前必做）

> 规则：`.cursor/rules/work-tasks-tool-brief.mdc`「用户意图审查」。对照 `00` 原话 + 主检索词用户任务（有 Planner 长尾时含长尾任务）。未填不得 `ready`。

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-07 |
| 总判 | 满足：默认 Tab 是粘贴 HTML（html to word）；URL Tab 吸收 webpage to word；Convert 后才启用 Download；How 先答「得到可改的 Word」，再写控件 |
| 主词搜索者任务 | 把 HTML 变成能在 Word 里改标题/段落/列表的 .docx，不是一张图，也不是 PDF |
| Ads/Planner 长尾任务 | html to word / html to docx：粘贴即可。convert webpage to word：切 URL Tab。有意不满足：mhtml、PDF 输入、网页截图 |
| 满足之处 | 双 Tab 一种主输入面；高级设置仅「是否嵌入图片」；样例含标题/列表/表格 |
| 超出 / 应划边界 | 不把 HTML 源码编辑器做成第二 IDE；不承诺 CSS 像素还原；不把截图塞进 Word 冒充排版 |
| 缺口与已做优化 | 相对 HTML→PDF 明确可编辑；相对网页 PNG 明确不是栅格；meta 压到摘要窗口 |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | |

## 交互规格（给实现用）

- 输入：**Tab 切换**两种主输入面，默认 **Paste HTML**（对齐 html to word）；另一 Tab **Page URL**（一条 https）。不要两套同时铺开。主按钮行：Convert / Download / Load sample / Clear。高级设置：Include images（默认开）。
- 输出：一份 `.docx`；无产物时 Download 禁用。状态行 aria-live。
- 核心规则：DOMPurify 后 DOMParser；h1–h6→HeadingLevel；p→Paragraph；ul/ol→bullet/number；table→Table；a→ExternalHyperlink；strong/em→TextRun bold/italics；img（若开启）→ImageRun（失败则跳过该图）。CSS 定位/固定底栏不映射。
- 失败：空输入；URL 被拦；库未加载。人话错误。
- 示例 Input → Output：样例 HTML（H1「Release notes」、列表 2 条、两列表格）→ Download `page.docx`。
- **进页样例（必填）**：初始化末尾调用 `loadSample()`（无 html2canvas，可自动跑 Convert 并启用 Download）。
- **实现防呆**：`opts`；正则 `\\w`；docx 从 `/vendor/docx/index.umd.js` 懒加载

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
