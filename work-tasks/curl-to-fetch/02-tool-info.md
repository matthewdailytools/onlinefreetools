# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`curl-to-fetch`  
**路径**：`/tools/curl-to-fetch`  
**主方向**：A.10 开发者网络  
**YMYL**：否  

---

## IG 预审

- 目标主词 / 长尾意图：curl to fetch；curl to javascript fetch；convert curl to fetch；curl command to fetch
- 用户真实任务：从 API 文档或终端历史复制 cURL，得到可粘贴进前端/全栈项目的 `fetch` 代码。
- [x] 竞品：在线 curl converter、DevTools「Copy as fetch」；多数只输出 fetch 或拆 axios/Python 独立页。
- [x] 缺口：常见 flag 边界（-G、-u、续行 `\`）、Basic Auth、JSON POST 样例、隐私说明、十语。
- [x] 增益：Rules 列支持 flag；FAQ 划界 axios/Python；Example 固定 POST JSON；Related website-headers/jwt-decoder；本地隐私。
- [x] 长尾：axios/python 仅 FAQ absorb，不拆 URL。
- [x] 权威：MDN fetch、curl man page
- [x] Use cases：OpenAPI 文档 curl → 前端；调试 Bearer token；GET -G 查询串
- [x] 边界：空输入、无 URL、无法解析引号、未知 flag 警告
- [x] Example：Sample POST JSON curl → fetch with method/headers/body
- [x] Related：website-headers、jwt-decoder

### 计划勾选的 §3.1 维度

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | Rules：支持的 curl flag 与 fetch 映射 |
| 2 | 边界/失败 | FAQ + 状态：续行、-G、-u、空输入 |
| 3 | 场景语境 | Use cases ×3 |
| 5 | 权威引用 | MDN fetch、curl man |
| 6 | 本地隐私 | desc/FAQ：设备内解析、不上传 |
| 7 | 多语言 | 03 十语 |
| 8 | 数值示例 | Example + loadSample POST JSON |
| 9 | 主题内链 | related ≥2 |

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | developer / text · P1 |
| 场景与行业 | 前端、全栈：API 文档 curl → fetch |
| 技术 | Tier 0 原生解析；localProcessing true；page.style **opts** |
| Title (en) / H1 | **curl to fetch** |
| Description 要点 | Paste a cURL command, get a JavaScript fetch snippet. Supports URL, method, headers, body, Basic auth, -G query. Stays on your device, not uploaded. Sample POST JSON on first paint. |
| Schema | WebApplication + BreadcrumbList |
| FAQ 要点 | 上传？支持哪些 flag？-G/-u？axios/Python？ |
| Disclaimer / References | MDN fetch、curl man |
| related | website-headers, jwt-decoder |
| 验收 | coverage gates + verify:tool |
| 本地化核查 | 03 i18n-done |

## 清单前检索覆盖优化（生成页面模块清单前必做）

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-01 |
| slug 结论 | 保留 `curl-to-fetch`（动作+结果 kebab） |
| 主检索词 → title/H1 | **curl to fetch**（en）；他语见 03 |
| 次要关键词 → desc / FAQ / Use cases | curl to javascript fetch → desc；convert curl to fetch → FAQ；curl command to fetch → usecase；axios/python → FAQ 有意不满足 |
| 用户搜索习惯判断 | 开发者搜「curl to fetch」要代码片段，不是教程目录 |
| 优化摘要 | 2026-09-01：H1 锁定 curl to fetch；次词落 desc/FAQ/usecase；输出格式芯片不拆页 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

## Ads / Keyword Planner 长尾（有分析时必做）

- [x] 不适用（无 Planner 批）

## 用户意图审查（标 ready 前必做）

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-01 |
| 总判 | **满足**：粘贴 curl → 得 fetch；axios/Python FAQ 划界 |
| 主词搜索者任务 | 把文档里的 cURL 变成可运行的 fetch 代码 |
| 满足之处 | Convert + loadSample POST JSON 首屏出码 |
| 超出 / 应划边界 | 不做 axios/Python 独立页；不执行真实 HTTP |
| 缺口与已做优化 | How 先写粘贴 curl 再 Convert |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | |

## 交互规格（给实现用）

- 输入：textarea cURL；按钮 Convert / Load sample / Copy / Clear
- 输出：`<pre>` 显示 fetch 代码；芯片：**fetch**（默认）、**async/await** 包装
- 支持 flag：URL（positional/--url）、-X/--request、-H/--header、-d/--data/--data-raw/--data-binary、-u/--user、-G/--get、引号字符串、行续 `\`
- 失败：空输入、找不到 URL、引号未闭合
- 样例：POST JSON curl（与 Example 一致）
- **进页样例**：`loadSample()` 首屏 Convert
- DOM prefix：`ctf`；i18n：`tool_curl_to_fetch`

## 页面模块清单（与 tool-creation 对齐）

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
