# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`chatgpt-export-to-markdown`  
**路径**：`/tools/chatgpt-export-to-markdown`  
**主方向**：B  
**YMYL**：否  

---

## 使用场景

| 场景 | 进页默认 | 说明 |
|---|---|---|
| ChatGPT **导出 → Markdown** | **是** | H1 |
| 同导出 → 规范化 JSON | 输出芯片 | 不拆 URL |
| 同导出 → CSV（role,content） | 输出芯片 | absorb |
| Claude 导出 JSON / 粘贴 | 同页检测 | absorb；FAQ |
| 旧工程名 chat-export-converter | — | **勿注册** |

---

## IG 预审

- 目标主词：ChatGPT export to Markdown；chatgpt export markdown；claude export to markdown；chat export json to md
- 用户真实任务：把导出的对话打成可读 Markdown（可再要 JSON/CSV），文件留在设备。
- [x] 竞品：GitHub gist 脚本、付费归档站、尺寸表式博客。
- [x] 缺口：进页即 ChatGPT→MD；字段映射可见；Claude absorb；本地隐私。
- [x] 增益：Rules 字段映射；丢失字段 FAQ；样例 loadSample；Related yaml/md。
- [x] 长尾：Claude / JSON / CSV 并入芯片或 FAQ，不拆 URL。
- [x] 权威：OpenAI 数据导出帮助（用户自助导出说明）。
- [x] Use cases：归档一则对话；打成 CSV 做表格；Claude 同页。
- [x] 边界：不做云端同步、不做 token 计数（P2）、不承诺全版本永恒兼容。
- [x] Example：样例 ChatGPT mapping JSON → Markdown。
- [x] Related：`yaml-json`、`markdown-to-html`

### 计划勾选的 §3.1 维度

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | 角色/正文字段映射表 |
| 2 | 边界/失败 | 非 conversations 包、缺 message 时错误提示 |
| 3 | 场景语境 | 归档今日导出 |
| 4 | 对照表 | ChatGPT mapping vs 扁平 messages vs Claude |
| 5 | 权威引用 | OpenAI export help |
| 6 | 本地隐私 | 留在设备 |
| 7 | 多语言 | 03 |
| 8 | 数值示例 | 样例两轮对话 → MD |
| 9 | 主题内链 | yaml-json、markdown-to-html |

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | 清单 §0 P1；B2 语料归档 |
| 场景与行业 | ChatGPT/Claude 导出归档 |
| 技术 | 纯 JS 解析；file/粘贴；localProcessing true |
| Catalog `page.style` | opts |
| Title (en) / H1 | **ChatGPT export to Markdown** |
| Description 要点 | Parse export → MD; JSON/CSV chips; Claude absorb. Stays on device, not uploaded. |
| Schema | WebApplication + BreadcrumbList |
| FAQ 要点 | 上传？支持哪种 JSON？Claude？丢字段？和 token 计数？ |
| related | yaml-json, markdown-to-html |
| 验收 | coverage 0b；verify:tool |

## 清单前检索覆盖优化（生成页面模块清单前必做）

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-01 |
| slug 结论 | 保留 `chatgpt-export-to-markdown`（废止 `chat-export-converter`） |
| 主检索词 → title/H1 | 原句 **ChatGPT export to Markdown** |
| 次要关键词 → desc / FAQ / Use cases | claude export → FAQ + 检测；json/csv → 输出芯片；chat export → How；隐私 → desc |
| 用户搜索习惯判断 | 搜 ChatGPT export to markdown / chatgpt export markdown；H1 不用 converter 工程名 |
| 优化摘要 | 2026-09-01：H1 锁定 ChatGPT export to Markdown；Claude/JSON/CSV 不拆 URL |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

## Ads / Keyword Planner 长尾（有分析时必做）

- [x] 不适用（本 slug 无 Planner / Ads 长尾分析）
- [ ] 已引用分析路径：

| 长尾词（Planner） | 归属 | 文案落点 | 功能覆盖 | 不覆盖理由（若有） |
|---|---|---|---|---|
| — | — | — | — | 无 Planner 批 |

- [x] 交互规格已按上表补齐能力（不仅写进文案）

## 用户意图审查（标 ready 前必做）

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-01 |
| 总判 | 满足：首屏导出→Markdown；JSON/CSV 次芯片；Claude absorb |
| 主词搜索者任务 | 把 ChatGPT 导出打成 Markdown 并下载/复制 |
| Ads/Planner 长尾任务 | 不适用 |
| 满足之处 | loadSample 出 Markdown；文件/粘贴输入；MD/JSON/CSV 切换 |
| 超出 / 应划边界 | 不做 token 计数、不做云端账号同步、不承诺未知导出版本 |
| 缺口与已做优化 | How 先写「导出转 Markdown」，再写 JSON/CSV 芯片 |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | |

## 交互规格（给实现用）

- 输入：`.json` 文件或粘贴文本；识别 ChatGPT `mapping` 树、扁平 `{role,content}` 数组、Claude `chat_messages` / `sender`+`text`
- 输出：默认 Markdown（`## User` / `## Assistant`）；芯片 JSON（turns 数组）、CSV（role,content）
- 核心规则：沿 mapping 父链展开；跳过 system/tool 空正文可选；标题用 conversation title
- 失败：空输入、无法解析 JSON、无 message 节点
- 示例：两轮 User/Assistant → MD
- **进页样例**：内置样例 JSON → Markdown；`loadSample()` 自动跑
- **实现防呆**：opts；B 后 lint:tool-page；模板正则 `\\w`

## 页面模块清单（与 tool-creation 对齐）

- [x] H1 + 一句话摘要
- [x] 首屏工具交互区（含进页自动样例结果）
- [x] How it works
- [x] Formula / Rules
- [x] Example
- [x] Use cases（2–3）
- [x] FAQ ≥3
- [x] Related tools ≥2
- [x] References ≥1
- [ ] Disclaimer（YMYL 必备）
- [x] `03-locale-briefs.md` 已填（实现十语前）
