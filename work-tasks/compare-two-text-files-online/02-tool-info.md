# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`compare-two-text-files-online`  
**路径**：`/tools/compare-two-text-files-online`  
**主方向**：A  
**YMYL**：否  

---

## IG 预审

- 目标主词 / 长尾意图：compare two text files online；txt compare；file diff online；compare two files（有意不满足作 H1）
- 用户真实任务：选两个文本文件，看出行级增删，文件留在设备。
- [x] 竞品：在线 file diff、粘贴型 diff 站；多数首屏仍是大粘贴框。
- [x] 缺口：编码/BOM、二进制拒绝、与粘贴页分工、空文件。
- [x] 增益：Rules UTF-8/BOM；边界二进制/过大；对照无首屏粘贴框；References FileReader + jsdiff；本地隐私；十语；Example 两样例文件；Related text-diff。
- [x] 长尾：txt/text 同页；Word/Excel 不覆盖。
- [x] 权威：https://developer.mozilla.org/en-US/docs/Web/API/FileReader ；https://github.com/kpdecker/jsdiff
- [x] Use cases：两份导出日志；配置备份；作业 txt。
- [x] 边界：空文件、含 NUL 的二进制、>约 1MB/侧、BOM。
- [x] Example：alpha.txt vs beta.txt 中间一行不同。
- [x] Related：text-diff、json-diff-checker-online（上线后）、yaml-json

### 计划勾选的 §3.1 维度

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | UTF-8 解码、去 BOM、按行 diff |
| 2 | 边界/失败 | 二进制拒绝、空、过大 |
| 3 | 场景语境 | Use cases ×3 |
| 4 | 对照表 | 与粘贴页：本页无大粘贴框 |
| 5 | 权威引用 | FileReader、jsdiff |
| 6 | 本地隐私 | 文件留在设备、不上服务器 |
| 7 | 多语言 | 03 十语 |
| 8 | 数值示例 | 两样例文件自动出结果 |
| 9 | 主题内链 | related ≥2 |

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | text-compare topic |
| 场景与行业 | 选两个 .txt 看差 |
| 技术 | FileReader + jsdiff CDN；Tier 1；localProcessing true |
| Catalog `page.style` | **opts** |
| Title (en) / H1 | **Compare two text files online** |
| Description 要点 | Choose two text files, UTF-8, line diff. Files stay on the device and are not uploaded. Sample compares two short logs. Not Word/Excel. |
| Schema | WebApplication + BreadcrumbList |
| FAQ 要点 | 上传？编码/BOM？二进制？和粘贴页？泛 compare two files |
| Disclaimer / References | MDN FileReader、jsdiff |
| related | text-diff, yaml-json |
| 验收 | coverage 0b 后实现；verify:tool |
| 工期粗估 | 1 会话 B+C+D |
| 本地化核查 | 03 |

## 清单前检索覆盖优化（生成页面模块清单前必做）

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-01 |
| slug 结论 | 采用 `compare-two-text-files-online`（与 Planner 长尾 kebab 对齐） |
| 主检索词 → title/H1 | 原句 **Compare two text files online** |
| 次要关键词 → desc / FAQ / Use cases | compare two text files / text file compare → desc；txt compare / file diff online → FAQ；compare two files 泛词 → FAQ 划界 Word/Excel |
| 用户搜索习惯判断 | 要选文件而不是粘贴；H1 跟紧该长尾，online 已在原句中 |
| 优化摘要 | 2026-09-01：H1 锁定 Planner 原句；禁 file diff 头词进攻；与粘贴页分工写入 FAQ |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

## Ads / Keyword Planner 长尾（有分析时必做）

- [x] 已引用分析路径：`docs/seo/keywords/text-compare/2026-09-01-text-compare-topic.md`

| 长尾词（Planner） | 归属 | 文案落点 | 功能覆盖 | 不覆盖理由（若有） |
|---|---|---|---|---|
| compare two text files online | build 主词 | H1 | 两文件选择器 → 行 diff | |
| compare two text files / text file compare | absorb | desc | 同上 | |
| txt compare / file diff online | absorb | FAQ | 同上 | |
| compare two files（泛） | 有意不满足 | FAQ | 只文本文件 | Word/Excel 另页 |

- [x] 交互规格已按上表补齐能力（不仅写进文案）

## 用户意图审查（标 ready 前必做）

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-01 |
| 总判 | 满足：进页两个文件选择器 + 样例已跑出差异；有意不满足 Word/Excel |
| 主词搜索者任务 | 选两个文本文件看出行差 |
| Ads/Planner 长尾任务 | 主词能办成；泛 compare two files FAQ 划界 |
| 满足之处 | loadSample 两个 Blob 当文件并 diff |
| 超出 / 应划边界 | 无首屏大粘贴框；不比 docx/xlsx |
| 缺口与已做优化 | How 先写选两个文本文件 |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | |

## 交互规格（给实现用）

- 输入：两个 `<input type=file>`，accept `.txt,.text,text/plain`；无首屏大 textarea
- 输出：行级高亮 + 摘要
- 核心规则：严格 UTF-8 TextDecoder（`fatal: true`）；去 BOM；含 NUL 则拒绝；jsdiff diffLines
- 失败：未选齐、空文件、无效 UTF-8、二进制、过大（硬上限约 1MB/侧）、库未加载
- 示例：notes-a.txt vs notes-b.txt，第二行不同
- **进页样例**：`loadSample()` 合成两个 File 并自动对比
- **实现防呆**：opts；正则 `\\w`；B 后 lint:tool-page

## 页面模块清单（与 tool-creation 对齐）

> 勾选前须完成覆盖与意图审查。实现阶段再勾落地项。

- [x] H1 + 一句话摘要
- [x] 首屏工具交互区（含进页自动样例结果）
- [x] How it works
- [x] Formula / Rules
- [x] Example
- [x] Use cases
- [x] FAQ ≥3
- [x] Related tools ≥2
- [x] References ≥1
- [ ] Disclaimer — 非 YMYL
- [x] `03-locale-briefs.md` 已填
