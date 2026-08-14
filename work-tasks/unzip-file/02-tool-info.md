# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`unzip-file`  
**路径**：`/tools/unzip-file`  
**主方向**：A（A.5 · ZIP / 压缩包，浏览器本地处理）  
**YMYL**：否  
**Locale briefs**：见 `03-locale-briefs.md`（状态 `briefs-ready`）

> 填完且状态为 `ready` 后，再按 `.cursor/rules/tool-creation.mdc` 实现。  
> IG 依据：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：
  1. unzip file online / unzip file
  2. extract zip file / zip extractor
  3. open zip file online / zip viewer
  4. unzip files without upload / local unzip
  5. extract archive online（边界 → FAQ 与后续 `extract-archive`，不抢 H1）
- 用户真实任务：在不能或不想安装桌面软件、且不愿上传私密资料时，打开一个 ZIP 包，确认里面有什么，取出某些文件或导出全部内容。
- [x] 竞品 SERP 前 5–10 都提供了什么？  
  上传/拖放 ZIP、列出文件、选择性下载或全部下载；部分强调浏览器本地处理；部分支持 ZIP/RAR/7Z 多格式但常把重引擎隐藏在上传或大脚本后。
- [x] 它们没讲清什么？（≥3 条缺口）  
  1. **路径安全**：`../`、绝对路径、隐藏系统文件与同名覆盖风险很少解释。  
  2. **大文件边界**：几百 MB ZIP、ZIP bomb、移动 Safari 内存上限与取消处理缺少明确说明。  
  3. **文件夹结构**：保留原路径、只下载单文件、全部导出为重新打包 ZIP 的区别不清。  
  4. **密码 ZIP / AES / ZipCrypto**：很多页面只说失败，未解释兼容性与非破解边界。  
  5. **多格式归档边界**：`unzip` 常被用户当作 ZIP；RAR/7Z 应单独标为后续多格式引擎，不在首版主词堆砌。  
  6. **本地隐私**：仅写 local 不足以让用户判断文件是否上传服务器。
- [x] 我们补哪 ≥3 条增益？  
  - **①** Rules：ZIP 目录读取、路径归一化、预览 MIME、下载策略。  
  - **②** 边界：密码 ZIP、损坏 ZIP、超大文件、ZIP bomb、路径穿越。  
  - **③** Use cases：邮件附件、课程资料、源码包、移动端临时查看。  
  - **④** 对照表：ZIP / TAR.GZ / RAR / 7Z 首版支持与后续计划；单文件下载 vs 全部导出。  
  - **⑤** References：PKWARE APPNOTE / MDN File API / File System Access API。  
  - **⑥** 本地隐私：文件留在设备，不上传服务器。  
  - **⑦** 十语 brief 按当地搜法重写。  
  - **⑧** Example：固定 ZIP 样例 → 文件树、预览和导出结果。  
  - **⑨** Related：`file-hash`、`split-pdf`，后续 `create-zip-file`。
- [x] 长尾：合并进本页模块。`extract zip`、`open zip file`、`zip viewer` 是同一核心流程；RAR/7Z/ISO 不用近义薄页承诺，满足独立引擎与 IG 后再做 `extract-archive`。
- [x] 权威来源 URL：
  - https://pkware.cachefly.net/webdocs/casestudies/APPNOTE.TXT
  - https://developer.mozilla.org/en-US/docs/Web/API/File
  - https://developer.mozilla.org/en-US/docs/Web/API/File_System_API
- [x] 行业/场景 Use case 文案草稿：
  - 打开供应商 ZIP 附件，先看目录再只取需要的发票或图片。
  - 在受管电脑或平板上无法安装软件时，临时查看课程资料包。
  - 检查源码发布包的文件结构，再用 `file-hash` 记录原 ZIP 摘要。
- [x] 边界/失败案例草稿：
  - 密码保护 ZIP 需要用户提供密码；工具不破解密码。
  - 检测到危险路径时重命名或拦截，避免写出到上级目录。
  - 超大 ZIP、嵌套归档或异常膨胀比会提示风险并允许取消。
  - 损坏中央目录、分卷 ZIP、RAR/7Z 不在首版保证范围。
- [x] 结果区信息如何落到可索引 Example / FAQ：
  - Example 写固定样例：`project-files.zip` → `readme.txt`、`assets/logo.png`、`docs/notes.md`，并说明预览和全部导出。
  - FAQ 固定回答隐私、密码 ZIP、RAR/7Z、路径安全、大文件风险。
- [x] Related / 主题内链计划（≥2）：`file-hash`、`split-pdf`；后续补 `create-zip-file` 与 `extract-archive`。

### 计划勾选的 §3.1 维度

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | How / Rules 写 ZIP 目录读取、路径清理、预览 MIME 和导出策略。 |
| 2 | 边界/失败 | FAQ 与错误区覆盖密码、损坏、超大、路径穿越、RAR/7Z 边界。 |
| 3 | 场景语境 | Use cases：邮件附件、课程资料、源码包、受管设备。 |
| 4 | 对照表 | ZIP 支持表、下载模式表、密码兼容性表。 |
| 5 | 权威引用 | PKWARE APPNOTE、MDN File API、MDN File System API。 |
| 6 | 本地隐私 | Description / FAQ 明确文件留在设备且不上传服务器。 |
| 7 | 多语言 | `03-locale-briefs.md` 已按十语检索词准备。 |
| 8 | 数值示例 | `project-files.zip` 三文件样例 → 文件树与导出结果。 |
| 9 | 主题内链 | related 至少 `file-hash`、`split-pdf`。 |

**硬性勾选**：① ② ③ ④ ⑤ ⑥ ⑦ ⑧ ⑨

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | C06 文件工具 · A.5 压缩包 · P0 |
| 场景与行业 | 办公、学习、开发、移动端临时查看 ZIP 内容 |
| 技术（包、Tier、本地处理） | Tier 1：`fflate` 或 `jszip`；File API 读取；Web Worker 解析大文件；文本/图片预览；全部导出可重新打包 ZIP；**本地处理，不上传服务器** |
| Title (en) | `Unzip File Online — Extract ZIP Files in Your Browser \| {Brand}` |
| Description 要点（步骤/公式 + 示例；≥120 字落地时再写满） | Select or drop a ZIP, inspect the file tree, preview text/images, download one file or export everything. Files stay on your device and are not uploaded to a server; sample `project-files.zip` shows path safety and download behavior. |
| Schema | WebApplication + BreadcrumbList（与可见文案一致） |
| FAQ 要点（≥3） | 是否上传；是否支持密码 ZIP；RAR/7Z 是否支持；大 ZIP/ZIP bomb 如何处理；为什么危险路径会被改名；是否能保留文件夹结构 |
| Disclaimer / References | 非 YMYL；References 用 PKWARE APPNOTE、MDN File、MDN File System Access |
| related | `file-hash`, `split-pdf`（后续 `create-zip-file`, `extract-archive`） |
| 验收 | `npm run coverage:gate -- --slug=unzip-file --phase=all`；`npm run build:site`；`npm run lint:seo`；`TOOL_SLUG=unzip-file npm run lint:tool-isolation`；进页样例自动解压并显示真实文件树 |
| 工期粗估 | 1–1.5d（ZIP-only）；若加入密码 AES ZIP 或 File System Access 文件夹写出，另加 0.5d POC |
| 本地化核查 | 见 `03-locale-briefs.md`（每语 brief + 禁词表 + ≥3 轮） |

## 清单前检索覆盖优化（生成页面模块清单前必做）

> 规则：`.cursor/rules/tool-i18n-localization.mdc`「清单前检索覆盖优化」。未填本表不得勾下方「页面模块清单」，不得标 `ready`。

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-08-14 |
| slug 结论 | 保留 `unzip-file`（英文用户高频说法是 unzip file / unzip online；比工程向 `zip-extract` 更口语；RAR/7Z 不纳入 slug，避免多格式承诺过宽） |
| 主检索词 → title/H1 | unzip file online / unzip file → H1「Unzip File Online — Extract ZIP Files in Your Browser」 |
| 次要关键词 → desc / FAQ / Use cases | extract zip file→description 前半；zip extractor→FAQ 与 UI 结果区；open zip file online / zip viewer→Use cases；without upload / local unzip→description + FAQ；extract archive online→FAQ 边界与后续 `extract-archive` |
| 用户搜索习惯判断 | 普通用户搜 unzip / extract zip，想直接打开 ZIP 并取出文件；H1 用结果向口语，不把 ZIP64、password、preview、download 等控件参数堆成目录标题。 |
| 优化摘要 | 2026-08-14：从中文泛词“解压压缩文件”收敛为 ZIP-first 的 `unzip-file`；Title 加入主词 `Unzip File Online` 与结果 `Extract ZIP Files`；多格式归档放 FAQ/后续页，避免首版承诺过宽。 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

> 填完后验收：`npm run coverage:gate -- --slug=unzip-file --phase=0b`（须绿才可标 `ready` / 勾下方页面模块清单）。

## 交互规格（给实现用）

- 输入：单个 `.zip` 文件；支持 drag/drop 与 file input；后续可选密码输入，仅在检测到加密条目时显示。
- 输出：文件树、文件数量、压缩前总大小、可预览条目列表；单文件下载；全部导出为安全重写后的 ZIP；若浏览器支持 File System Access，可提供“保存到文件夹”增强路径。
- 核心规则 / 算法：
  - 读取 ZIP central directory，生成目录树。
  - 对每个条目做路径归一化：去除前导 `/`、拦截 `../`、标记空名/重复名。
  - 常见 MIME 预览：`.txt` / `.md` / `.json` / `.csv` 文本截断预览；PNG/JPEG/WebP 缩略图；其他文件仅显示元数据。
  - 全部导出时保留安全路径；危险路径改名并在结果区列出。
  - 超大文件和异常膨胀比提示风险；处理可取消。
- 失败与边界行为：
  - 非 ZIP 或损坏 ZIP：显示“无法读取 ZIP 目录”。
  - 加密 ZIP：若首版未支持密码，提示需要密码 ZIP 支持；若支持，要求用户输入密码，不尝试破解。
  - 分卷 ZIP、RAR、7Z、ISO：首版不承诺；FAQ 指向后续多格式 `extract-archive`。
  - ZIP bomb / 解压后体积过大：显示估算体积、文件数、膨胀比并要求确认或取消。
  - 文件夹下载：不支持 File System Access 时用重新打包 ZIP 或单文件下载。
- 示例 Input → Output：内置 `project-files.zip`，含 `readme.txt`、`assets/logo.png`、`docs/notes.md`；结果显示 3 个文件、目录树、`readme.txt` 文本预览，并可下载 `readme.txt` 或导出全部。
- **进页样例（必填）**：`loadSample()` 在浏览器内生成上述小 ZIP，调用与用户上传相同的解析路径，进页自动显示真实文件树、文本预览和导出按钮；H2 Example 与该样例完全一致。

## 页面模块清单（与 tool-creation 对齐）

> 勾选前须完成上一节「清单前检索覆盖优化」。

- [x] H1 + 一句话摘要（规划完成）
- [x] 首屏工具交互区（含进页自动样例结果；规划完成）
- [x] How it works（规划完成）
- [x] Formula / Rules（计算与转换类；规划完成）
- [x] Example（固定文案，与默认样例一致；规划完成）
- [x] Use cases（2–3；规划完成）
- [x] FAQ ≥3（规划完成）
- [x] Related tools ≥2（规划完成）
- [x] References ≥1（YMYL 建议 ≥2；规划完成）
- [x] Disclaimer（非 YMYL；无医疗/财务免责）
- [x] `03-locale-briefs.md` 已填（实现十语前）
