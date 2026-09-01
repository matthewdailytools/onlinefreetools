# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`create-zip-file`  
**路径**：`/tools/create-zip-file`  
**主方向**：A  
**YMYL**：否  

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：create zip file；zip folder online；zip files with password（芯片）；gzip file（次模式）；zip files online（有意不满足作唯一 H1）
- 用户真实任务：把多个文件打成一个 ZIP 下载发出去，文件留在设备、不上传服务器。
- [x] 竞品：ezyZip 等在线打包、桌面 7-Zip/WinRAR；部分强调本地 JS。
- [x] 缺口：路径规范化、Gzip vs ZIP 边界、密码 ZIP 兼容性、大文件内存、与解压页分工。
- [x] 增益：Rules 路径/压缩级别；边界密码不破解；Use cases 发附件；对照 ZIP vs Gzip；References APPNOTE/MDN；本地隐私；十语；Example 三文件样例；Related unzip/file-hash。
- [x] 长尾：folder/gzip/password 并入本页，不拆 URL。不解压。
- [x] 权威：https://pkware.cachefly.net/webdocs/casestudies/APPNOTE.TXT ；https://github.com/101arrowz/fflate ；https://developer.mozilla.org/en-US/docs/Web/API/File
- [x] Use cases：邮件多附件、交作业文件夹、发小源码包。
- [x] 边界：空列表、单文件 Gzip 模式、超大内存、加密仅为可选且不承诺 AES 头词。
- [x] Example：`notes.txt` + `photo.png` + `docs/readme.md` → `sample.zip`。
- [x] Related：`unzip-file`、`file-hash`、`archive-extractor`

### 计划勾选的 §3.1 维度

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | DEFLATE 级别、路径清理、ZIP vs Gzip |
| 2 | 边界/失败 | 空输入、超大、密码不破解 |
| 3 | 场景语境 | 发附件 / 交作业 |
| 4 | 对照表 | ZIP 多文件 vs Gzip 单文件 |
| 5 | 权威引用 | APPNOTE、fflate、MDN File |
| 6 | 本地隐私 | 留在设备、不上服务器 |
| 7 | 多语言 | 03 十语 |
| 8 | 数值示例 | 三文件样例体积 |
| 9 | 主题内链 | unzip-file、file-hash |

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | 清单 §0 P0；files-archives |
| 场景与行业 | 把多文件打成 ZIP 发出去 |
| 技术 | fflate zipSync / gzipSync；Tier 0；localProcessing true |
| Catalog `page.style` | opts |
| Title (en) / H1 | **Create zip file**（选用长尾原句；`<title>` 同句，layout 再拼 `\| Brand`。禁止破折号卖点后缀） |
| Description 要点 | Choose files, optional folder names, download ZIP. Files stay on the device and are not uploaded. Sample packs notes.txt, photo.png, docs/readme.md. Gzip is a secondary single-file mode. |
| Schema | WebApplication + BreadcrumbList |
| FAQ 要点 | 上传？密码 ZIP？Gzip 何时用？大文件？与 Unzip 分工 |
| Disclaimer / References | APPNOTE、fflate、MDN |
| related | unzip-file, file-hash, archive-extractor |
| 验收 | coverage 0b 后实现；verify:tool |
| 工期粗估 | 1 会话 B+C+D |
| 本地化核查 | 03 |

## 清单前检索覆盖优化（生成页面模块清单前必做）

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-01 |
| slug 结论 | 保留 `create-zip-file`（场景句；不用 zip-files-online） |
| 主检索词 → title/H1 | 原句 **Create zip file**（大小写可句首；不加 “Pack Files in Your Browser”） |
| 次要关键词 → desc / FAQ / Use cases | zip folder online → description + Use case；zip files with password → FAQ；gzip file → 次模式 FAQ；zip files online → 不进 H1 |
| 用户搜索习惯判断 | 搜 create zip file / zip folder online；H1 跟紧该长尾，卖点进 desc |
| 优化摘要 | 2026-09-01：H1/title 锁定选用长尾原句 Create zip file；去掉破折号营销后缀 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

## Ads / Keyword Planner 长尾（有分析时必做）

- [ ] 不适用
- [x] 已引用分析路径：`docs/seo/keywords/p0-scene/2026-08-31-p0-scene-longtail-selection.md`

| 长尾词（Planner） | 归属 | 文案落点（H1/desc/FAQ/usecase） | 功能覆盖（控件/结果哪一步） | 不覆盖理由（若有） |
|---|---|---|---|---|
| create zip file | build 主词 | H1 | 多文件 → ZIP 下载 | |
| zip folder online | absorb | Use case / 路径 | 保留相对路径条目 | |
| zip files with password | absorb | FAQ | 可选提示；不承诺 AES 头词 | ezyZip 已占密码专页，本页不进攻 |
| zip files online | drop 作 H1 | FAQ 一句 | 同交互 | 头词不抢 ezyZip |
| gzip file | absorb | 次模式 | gzipSync 单文件 | |
| compress files to zip | drop | 不进文案 | | SERP 进 PDF 压缩 |

- [x] 交互规格已按上表补齐能力（不仅写进文案）

## 用户意图审查（标 ready 前必做）

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-01 |
| 总判 | 满足：首屏选文件即可打 ZIP；Gzip 不抢首屏 |
| 主词搜索者任务 | 把几个文件打成 zip 下载 |
| Ads/Planner 长尾任务 | create zip 能办成；folder 用路径；password 仅 FAQ 边界；gzip 次模式 |
| 满足之处 | loadSample 三文件自动出 ZIP；下载按钮 |
| 超出 / 应划边界 | 不解压、不转 RAR、不硬刚 zip files online H1 |
| 缺口与已做优化 | How 先写「选文件打成包」再控件 |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | |

## 交互规格（给实现用）

- 输入：多文件选择 / 拖放；可选压缩级别；模式 ZIP（默认）或 Gzip（单文件）
- 输出：`archive.zip` 或 `.gz` 下载；列出条目名与压缩后体积
- 核心规则：fflate zipSync；路径去掉 `../`；Gzip 仅单文件
- 失败：空列表、Gzip 多文件提示先选 ZIP、引擎未加载
- 示例：三文件 → sample.zip
- **进页样例**：合成 notes.txt / 小 PNG / docs/readme.md → zipSync → 显示条目并提供下载；`loadSample()` 进页自动跑
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
