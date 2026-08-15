# 02 — 工具信息定稿

**状态**：`ready`
**slug**：`archive-extractor`
**路径**：`/tools/archive-extractor`
**主方向**：A（A.5 · 多格式归档解压，浏览器本地处理）
**YMYL**：否
**Locale briefs**：见 `03-locale-briefs.md`（状态 `briefs-ready`）

> 填完且状态为 `ready` 后，再按 `.cursor/rules/tool-creation.mdc` 实现。
> IG 依据：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：
  1. archive extractor online / archive extractor
  2. extract archive online / extract archive file
  3. rar 7z tar extractor online
  4. open tar gz online / tgz extractor
  5. extract archive without upload / local archive extractor
- 用户真实任务：收到 ZIP 以外的归档包时，在没有桌面解压软件或不愿上传文件的情况下，先查看目录，抽出少量需要的文件，或把可支持的归档内容导出为标准 ZIP。
- [x] 竞品 SERP 前 5–10 都提供了什么？
  上传/拖放归档包、选择格式、下载解压结果；部分站点按 RAR、7Z、TAR、ISO、JAR 等拆很多 URL；少数强调浏览器本地处理；上传型站点通常不解释文件是否离开设备。
- [x] 它们没讲清什么？（≥3 条缺口）
  1. **格式边界**：ZIP、TAR、TAR.GZ、7Z、RAR、ISO 支持程度不同，很多页面只堆格式名，不说加密、solid archive、分卷限制。
  2. **安全路径**：`../`、绝对路径、符号链接、同名覆盖和隐藏文件风险很少被解释。
  3. **本地隐私**：local / free 说法不等于“文件不上传服务器”，需要在描述和 FAQ 明说。
  4. **大文件风险**：归档膨胀比、压缩炸弹、移动端内存、Worker 取消处理等边界缺少说明。
  5. **导出为 ZIP 的真实含义**：RAR/7Z→ZIP 是“先解压再重新打包”，不是保留原压缩算法的无损格式转换。
  6. **与 ZIP 专页分工**：普通 unzip 用户只想开 ZIP，多格式引擎不应拖慢 ZIP-only 页面。
- [x] 我们补哪 ≥3 条增益？
  - **①** Rules：归档目录读取、gzip→tar 两步、路径归一化、MIME 预览、导出 ZIP 策略。
  - **②** 边界：加密包、solid RAR/7Z、分卷包、符号链接、路径穿越、压缩炸弹、超大文件。
  - **③** Use cases：源码 `.tar.gz`、供应商 RAR/7Z 素材包、Chromebook 临时抽文件、课程资料包。
  - **④** 对照表：核心支持格式 vs 点击加载引擎格式；单文件下载 vs 导出全部为 ZIP；ZIP-only 页边界。
  - **⑤** References：PKWARE ZIP APPNOTE、GNU tar manual、RFC 1952 GZIP、MDN File API / Web Workers。
  - **⑥** 本地隐私：文件留在设备/浏览器内，不上传服务器；多格式引擎脚本可加载但用户文件不发送。
  - **⑦** 多语言：`03-locale-briefs.md` 按十语检索词准备，非英文词表直搬。
  - **⑧** Example：固定 `sample-archive.tar.gz` → 三个文件的树、预览、导出 ZIP 结果。
  - **⑨** Related：`unzip-file`、`file-hash`、`split-pdf`。
- [x] 长尾：合并进本页模块。RAR、7Z、TAR.GZ、TGZ、ISO 等属于同一“查看并提取归档内容”流程；用支持格式表、FAQ 与 Use cases 覆盖，不拆近义 URL。`unzip-file` 继续服务 ZIP-only 高频意图。
- [x] 权威来源 URL：
  - https://pkware.cachefly.net/webdocs/casestudies/APPNOTE.TXT
  - https://www.gnu.org/software/tar/manual/tar.html
  - https://www.rfc-editor.org/rfc/rfc1952
  - https://developer.mozilla.org/en-US/docs/Web/API/File
  - https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API
- [x] 行业/场景 Use case 文案草稿：
  - 查看源码发布包：打开 `.tar.gz`，确认 `README`、`package.json`、`src/` 结构后只下载需要的文件。
  - 抽取供应商素材包：先浏览 RAR/7Z/ZIP 里的图片和文档，再导出一个安全 ZIP 给同事。
  - Chromebook 或受管电脑：不能安装 7-Zip/WinRAR 时，在浏览器中临时查看课程资料或附件。
  - 文件审查前置：先看文件名、大小和可预览内容，再用 `file-hash` 记录原始归档摘要。
- [x] 边界/失败案例草稿：
  - 加密归档需要用户提供密码；工具不破解密码。
  - 分卷 RAR/7Z、损坏归档、未知压缩方法、超大膨胀比会给出失败原因或风险提示。
  - 符号链接、绝对路径和 `../` 路径默认拦截或安全改名。
  - 多格式 WASM 引擎须用户点击后加载；ZIP/TAR 快路径不被重引擎阻塞。
- [x] 结果区信息如何落到可索引 Example / FAQ：
  - Example 固定写 `sample-archive.tar.gz` → `README.txt`、`src/index.js`、`assets/logo.png`，说明文件树、文本预览、导出 ZIP。
  - FAQ 固定回答隐私、RAR/7Z/ISO 支持、密码与分卷、路径安全、超大归档、RAR/7Z→ZIP 的含义。
- [x] Related / 主题内链计划（≥2）：首发 related 用 `unzip-file`、`file-hash`、`split-pdf`；后续补 `create-zip-file`、`gzip-file`。

### 计划勾选的 §3.1 维度

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | How / Rules 写 ZIP/TAR/TAR.GZ 读取流程、路径清理、预览 MIME、导出 ZIP 策略。 |
| 2 | 边界/失败 | FAQ 与错误区覆盖密码、损坏、分卷、solid RAR/7Z、路径穿越、压缩炸弹和内存限制。 |
| 3 | 场景语境 | Use cases：源码包、供应商素材、课程资料、Chromebook/受管电脑临时查看。 |
| 4 | 对照表 | 支持格式表、ZIP-only vs 多格式页分工表、下载模式表。 |
| 5 | 权威引用 | PKWARE APPNOTE、GNU tar manual、RFC 1952 GZIP、MDN File API、MDN Web Workers。 |
| 6 | 本地隐私 | Description / FAQ 明确文件留在设备且不上传服务器。 |
| 7 | 多语言 | `03-locale-briefs.md` 已按十语检索词准备。 |
| 8 | 数值示例 | `sample-archive.tar.gz` 三文件样例 → 文件树、预览和导出 ZIP。 |
| 9 | 主题内链 | Related 至少 `unzip-file`、`file-hash`、`split-pdf`。 |

**硬性勾选**：① ② ③ ④ ⑤ ⑥ ⑦ ⑧ ⑨

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | C06 文件工具 · A.5 压缩包 · P1（在 `unzip-file` 之后） |
| 场景与行业 | 开发者、运营、学生、Chromebook/受管电脑用户打开多格式归档、抽取文件、导出安全 ZIP |
| 技术（包、Tier、本地处理） | Tier 1：`fflate` 处理 ZIP/GZIP，轻量 TAR 解析；Tier 2：点击后加载多格式 WASM 只读引擎评估 RAR/7Z/ISO；Web Worker 处理大文件；文件本地读取，不上传服务器 |
| Title (en) | `Archive Extractor Online — Open Compressed Files \| {Brand}` |
| Description 要点（步骤/公式 + 示例；≥120 字落地时再写满） | Open an archive in your browser, inspect the file tree, preview common text or image files, download one item, or export supported contents as a clean ZIP. Files stay on your device and are not uploaded to a server; sample `sample-archive.tar.gz` shows README, source, and image entries with safe paths. |
| Schema | WebApplication + BreadcrumbList（与可见文案一致） |
| FAQ 要点（≥3） | 是否上传；支持 ZIP/TAR/TAR.GZ/RAR/7Z/ISO 到什么程度；密码和分卷是否支持；危险路径如何处理；大文件或压缩炸弹怎么提示；导出为 ZIP 是否等于格式转换 |
| Disclaimer / References | 非 YMYL；References 用 PKWARE APPNOTE、GNU tar manual、RFC 1952 GZIP、MDN File API、MDN Web Workers |
| related | `unzip-file`, `file-hash`, `split-pdf`（后续 `create-zip-file`, `gzip-file`） |
| 验收 | `npm run coverage:gate -- --slug=archive-extractor --phase=all`；`npm run build:site`；`npm run lint:seo`；`TOOL_SLUG=archive-extractor npm run lint:tool-isolation`；进页样例自动解析并显示真实文件树 |
| 工期粗估 | 2–3d（ZIP/TAR/TAR.GZ + 导出 ZIP）；多格式 WASM POC 与许可证确认另加 1–1.5d |
| 本地化核查 | 见 `03-locale-briefs.md`（每语 brief + 禁词表 + ≥3 轮） |

## 清单前检索覆盖优化（生成页面模块清单前必做）

> 规则：`.cursor/rules/tool-i18n-localization.mdc`「清单前检索覆盖优化」。未填本表不得勾下方「页面模块清单」，不得标 `ready`。

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-08-14 |
| slug 结论 | 保留 `archive-extractor`（用户给定词与 SERP 常见工具名 `Archive Extractor Online` 一致；比旧候选 `extract-archive` 更像可点击工具名；通过正文和 FAQ 明确它是多格式页，不替代 `unzip-file` 的 ZIP-only 意图） |
| 主检索词 → title/H1 | archive extractor online / archive extractor → H1「Archive Extractor Online — Open Compressed Files」 |
| 次要关键词 → desc / FAQ / Use cases | extract archive online / extract archive file → description 前半和 How；rar 7z tar extractor online → description、支持格式表和 FAQ；open tar gz online / tgz extractor → Use cases 的源码包场景；without upload / local archive extractor → description + 隐私 FAQ；rar to zip / 7z to zip → FAQ 解释“导出为 ZIP”而不拆 URL |
| 用户搜索习惯判断 | 英文用户既会搜任务动词 `extract archive`，也会搜工具名 `archive extractor online`；H1 用工具名 + “open compressed files” 结果承诺，避免把具体格式、password、preview、worker、export 等控件或格式列表堆进标题。 |
| 优化摘要 | 2026-08-14：接受用户给定 `archive-extractor`，但把旧规划 `extract-archive` 收敛为同页次词；Title 主词前置为 `Archive Extractor Online` 并去掉格式枚举，description 写清查看目录、预览、单文件下载和导出 ZIP；RAR/7Z/ISO 放支持表和 FAQ，避免格式拆页。 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

> 填完后验收：`npm run coverage:gate -- --slug=archive-extractor --phase=0b`（须绿才可标 `ready` / 勾下方页面模块清单）。

## 交互规格（给实现用）

- 输入：单个归档文件；MVP 支持 `.zip`、`.tar`、`.tar.gz`、`.tgz`；多格式引擎加载后尝试 `.rar`、`.7z`、`.iso` 等只读列表和提取。
- 输出：文件树、文件数量、解压后估算大小、格式支持状态、可预览条目列表；单文件下载；导出全部或所选文件为安全重写后的 ZIP。
- 核心规则 / 算法：
  - ZIP：读取 central directory，生成目录树，复用安全路径与预览策略。
  - TAR.GZ：先解 gzip，再解析 512-byte TAR headers，按文件/目录生成树；TAR 直接跳过 gzip 步。
  - 多格式：点击后加载 WASM 只读引擎；先列目录和元数据，再按需提取选中文件，避免一次性展开全部。
  - 路径归一化：去除前导 `/`、拦截 `../`、标记重复名、默认不写出符号链接目标。
  - 预览：`.txt` / `.md` / `.json` / `.csv` 截断文本预览；PNG/JPEG/WebP 缩略图；其他只显示元数据。
  - 导出 ZIP：把已提取且路径安全的文件重新打包为 ZIP，并在结果区说明这是重新打包，不是保留原压缩算法。
- 失败与边界行为：
  - 未知格式、损坏归档、未知压缩方法：显示可读失败原因，不给虚假“修复”承诺。
  - 加密归档：要求用户提供密码；不破解密码；若当前格式/算法不支持，说明限制。
  - 分卷 RAR/7Z、solid archive、超大文件、异常膨胀比：提示风险、允许取消或建议桌面工具。
  - 多格式引擎加载失败：ZIP/TAR 路径仍可使用，并提示用户重试加载引擎。
- 示例 Input → Output：内置 `sample-archive.tar.gz`，含 `README.txt`、`src/index.js`、`assets/logo.png`；结果显示 3 个文件、目录树、`README.txt` 文本预览，并可下载 `README.txt` 或导出 `sample-archive.zip`。
- **进页样例（必填）**：`loadSample()` 在浏览器内生成上述小 TAR.GZ，调用与用户上传相同的解析路径，进页自动显示真实文件树、文本预览、支持格式状态和导出按钮；H2 Example 与该样例完全一致。

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
