# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`cidr-cheat-sheet`  
**路径**：`/tools/cidr-cheat-sheet`  
**主方向**：A（可点选 IPv4 CIDR 速查表）  
**YMYL**：否  
**Locale briefs**：见同夹 `03-locale-briefs.md`（状态 `i18n-done`）

> 选题：Planner P1；H1 = **CIDR cheat sheet**（旧 slug `cidr-prefix-chart` 废止）。SERP：`cidr cheat sheet` 计算器+PDF 混排。  
> Token：Brief 可并行；Page/i18n 串行于 `ipv6-cidr` phase=4 之后。

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：
  1. **cidr cheat sheet**（100–1k，**H1**）
  2. cidr chart / cidr notation chart（100–1k / 10–100 → 同表）
  3. cidr chart comptia（100–1k → CompTIA 列 + FAQ）
  4. what is cidr / cidr notation / cidr full form / cidr meaning（→ FAQ，不进 H1）
  5. 兽医 cidr for cattle（drop；FAQ 一句消歧）
- 用户真实任务：查 `/n` 对应掩码、通配符、主机数；备考时扫 CompTIA 常考前缀；搞清 CIDR 全称。**不是**把任意 `192.168.1.37/24` 展开成广播地址（那是计算器）。
- [x] 竞品 SERP 前 5–10 都提供了什么？
  - MxToolbox / cidr.xyz 泛计算器；NetworkProGuide 等 **静态 PDF/HTML 表**；title 常已含 cheat sheet / chart
- [x] 它们没讲清什么？（≥3 条缺口）
  1. 表不可点：不能点一行立刻看到该前缀的掩码/主机并高亮。
  2. **/31 /32 脚注**常缺或与主机数栏矛盾。
  3. CompTIA 钩子：搜 `cidr chart comptia` 前排 title 常无 comptia。
  4. 兽医同形词无消歧。
  5. 多语言检索向几乎没有。
- [x] 我们补哪 ≥3 条增益？
  - **①** Rules：/n → 掩码 = 2^32−2^(32−n)；主机数规则含 /31 RFC3021、/32
  - **②** 边界：/31 /32 脚注；点选非法前缀（仅 8–32）；兽医 FAQ
  - **③** Use cases：备考扫表；写 ACL 前对一下 /27 主机数；给同事解释「/24 就是 256 地址」
  - **④** 对照表：可点选 /8–/32 全表 + CompTIA 列
  - **⑤** RFC 4632、RFC 3021
  - **⑥** 本地隐私（点选无上传）
  - **⑧** Example：进页高亮 `/24` 与表行一致
  - **⑨** related：`cidr-to-ip-range`, `private-cidr-ranges`
- [x] 长尾：合并。禁止拆 `cidr-chart` / `cidr-notation-chart` / `what-is-cidr` doorway。计算器 → `cidr-to-ip-range`。
- [x] 权威来源 URL：https://www.rfc-editor.org/rfc/rfc4632 ；https://www.rfc-editor.org/rfc/rfc3021
- [x] Use case 草稿：① CompTIA 扫 /24 /25 /26；② 防火墙对象写 /28 前对主机数；③ 向非网络同事解释 slash。
- [x] 边界：本页**不**解析任意主机地址；不做 IPv6 全表（IPv6 单块去 `ipv6-cidr`）；不做兽医用药计算。
- [x] Example/FAQ：Example 锁定 `/24` → mask `255.255.255.0`、hosts 254；FAQ 含 what-is、comptia、兽医、计算器去向、上传。
- [x] Related：`cidr-to-ip-range`, `private-cidr-ranges`

### 计划勾选的 §3.1 维度（至少 3）

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | 掩码与主机数；/31 /32 |
| 2 | 边界/失败 | 脚注 + 兽医消歧 |
| 3 | 场景语境 | 备考 / ACL / 解释 slash |
| 4 | 对照表 | 可点选 /8–/32 + CompTIA |
| 5 | 权威引用 | RFC 4632、3021 |
| 8 | 数值示例 | `/24` 行 |
| 9 | 主题内链 | 计算器 + 私网分类 |

**硬性勾选**：① ② ③ ④ ⑤ ⑧ ⑨

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | CIDR 簇 · **P1** |
| 场景与行业 | 网络学习/运维速查 |
| 技术 | Tier 0；`localProcessing: true` |
| Catalog `page.style` | **`opts`** |
| Title (en) | CIDR cheat sheet — Prefix, mask, and host counts you can click |
| Description 要点 | CIDR cheat sheet: click any prefix from /8 to /32 for subnet mask, wildcard, and host count. Includes a CompTIA-oriented column and /31 /32 footnotes. Same table people mean by a CIDR chart or CIDR notation chart. For expanding a specific block, use the CIDR to IP range tool. Runs in your browser, not uploaded to a server. |
| Schema | WebApplication + BreadcrumbList |
| FAQ 要点 | ① CIDR 全称/是什么？② CompTIA 要记哪些前缀？③ /31 /32 主机数？④ 兽医 CIDR？⑤ 计算器在哪？⑥ 是否上传？ |
| Disclaimer / References | 非考试官方大纲；RFC 4632、3021 |
| related | `cidr-to-ip-range`, `private-cidr-ranges` |
| 验收 | phase=0b；进页高亮 /24；`verify:tool` |
| catalog 建议 | `category: developer`；`faqPrefix: tool_cidr_cheat_sheet`；`ymyl: false`；`localProcessing: true`；`page.style: opts` |

## 清单前检索覆盖优化（生成页面模块清单前必做）

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-08-31 |
| slug 结论 | **采用** `cidr-cheat-sheet`（Planner 主词）；**不用** `cidr-prefix-chart` / `cidr-chart` / `what-is-cidr` |
| 主检索词 → title/H1 | **cidr cheat sheet** → H1「CIDR cheat sheet — Prefix, mask, and host counts you can click」（主词在前；副标题结果向，禁止「/8、/16、/24、Mask、Wildcard」目录腔） |
| 次要关键词 → desc / FAQ / Use cases | `cidr chart` / `cidr notation chart`→desc「Same table people mean by a CIDR chart…」；`cidr chart comptia`→CompTIA 列 + FAQ；`what is cidr` / `cidr notation` / `full form`→FAQ①；兽医→FAQ 消歧 |
| 用户搜索习惯判断 | 搜 cheat sheet / chart 要**一张表**，不是计算器。H1 必须含 CIDR cheat sheet；what-is 只进 FAQ。 |
| 优化摘要 | 2026-08-31：H1 锁定 cheat sheet；chart/comptia/what-is absorb；划清与 `cidr-to-ip-range` 计算器边界。 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

## Ads / Keyword Planner 长尾（有分析时必做）

- [x] 已引用分析路径：`docs/seo/keywords/cidr/2026-08-28-cidr-keyword-planner.md`；CSV Chart/Cheat Sheet 分组；SERP longtail + 100plus

| 长尾词（Planner） | 归属 | 文案落点 | 功能覆盖 | 不覆盖理由（若有） |
|---|---|---|---|---|
| **cidr cheat sheet**（100–1k） | build 主词 | H1 | 可点选 /8–/32 表 | — |
| cidr chart（100–1k） | absorb | desc | 同表 | 不拆 URL |
| cidr notation chart（10–100） | absorb | desc | 同表 | — |
| cidr chart comptia（100–1k） | absorb | CompTIA 列 + FAQ | 列标记常考前缀 | 非官方题库 |
| what is cidr / cidr meaning / full form / what does cidr stand for | absorb FAQ | FAQ① | 一句定义 + 指回表 | **不建** what-is 页 |
| cidr notation（头词） | absorb FAQ | FAQ | 不进攻 H1 | 教育头词 |
| cidr cheat sheet pdf | absorb | FAQ：本页可打印浏览器，无单独 PDF 文件 | 表可打印 | 不生成 PDF 文件 |
| 兽医 cidr for cattle | drop | FAQ 消歧 | 无兽药计算 | drop |
| cidr calculator / cidr to ip range | 他 slug | FAQ⑤ | 不展开任意主机地址 | `cidr-to-ip-range` |

- [x] 交互规格已按上表补齐能力

## 用户意图审查（标 ready 前必做）

| 项 | 结论 |
|---|---|
| 日期 | 2026-08-31 |
| 总判 | **满足**（主任务=查表；计算器有意不满足并链出；兽医有意不满足） |
| 主词搜索者任务 | 打开页就要看到 /n→掩码/主机数的表，并能点一行看清，不是先读「如何使用本站」。 |
| Ads/Planner 长尾任务 | cheat sheet / chart / notation chart → 同表 **能办成**；comptia → 列+FAQ **能办成**（非真题）；what-is → FAQ；计算器 **有意不满足** |
| 满足之处 | 首屏就是表 + 点选详情；进页高亮 /24；How 先说「对照前缀与掩码」。 |
| 超出 / 应划边界 | 首屏**不要**再放 CIDR 展开表单（那是第二计算器）。CompTIA 只是列，不声称官方。desc 禁止 SEO 自述。 |
| 缺口与已做优化 | How 先任务后点选；FAQ 补 what-is、兽医、计算器链接。 |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | |

## 交互规格（给实现用）

- 输入：表本身可点选；可选数字框跳到 /n（8–32）；按钮 Load sample（选中 /24）/ Clear 高亮
- 输出：高亮行 + 详情：prefix、mask、wildcard、total addresses、usable hosts、CompTIA 标记、/31/32 脚注（当选中时）
- 表列：Prefix | Mask | Wildcard | Hosts (usable) | CompTIA
- CompTIA 列：标记常见备考前缀（如 /8 /16 /24 /25 /26 /27 /28 /30），文案「often on Network+ style charts」——**不**声称官方大纲
- 核心规则：hosts usable = /32 → 1；/31 → 2；else 2^(32-n)−2；total = 2^(32-n)
- 失败：跳转框非 8–32 → 错误句
- 示例：进页 `/24` → mask 255.255.255.0，usable 254，total 256
- **进页样例**：`loadSample()` 选中 /24 并显示详情
- How：① 任务是对照 CIDR 前缀与掩码（cheat sheet / chart）→ ② 点表行或跳到 /n → ③ 读掩码与主机数 → ④ /31/32 看脚注 → ⑤ 要展开具体块去 CIDR to IP range
- **实现防呆**：`opts`；`lint:tool-page -- --slug=cidr-cheat-sheet`

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
- [ ] Disclaimer — **非 YMYL**；可一句非官方考试声明
- [x] `03-locale-briefs.md` 已填
