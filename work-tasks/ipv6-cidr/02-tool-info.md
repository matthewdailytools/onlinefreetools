# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`ipv6-cidr`  
**路径**：`/tools/ipv6-cidr`  
**主方向**：A（浏览器本地 IPv6 CIDR → 网段/压缩展开）  
**YMYL**：否  
**Locale briefs**：见同夹 `03-locale-briefs.md`（状态 `i18n-done`）

> 选题：`docs/seo/keywords/cidr/2026-08-28-cidr-keyword-planner.md` P1；SERP：`2026-08-28-cidr-longtail-serp.md`（`ipv6 cidr calculator` tool≈10）；`2026-08-28-cidr-100plus-serp.md`（`ipv6 cidr` 测试/百科混排）。  
> Token 流程：本会话 **A · Brief**；下一阶段 **B**：catalog、`ipv6CidrPage.ts`、icon、en i18n、`coverage:gate --phase=2`、`lint:tool-page`。

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：
  1. **ipv6 cidr** / **IPv6 CIDR calculator**（Planner：`ipv6 cidr` 100–1k 主叙事；`ipv6 cidr calculator` 10–100 计算器近义）
  2. ipv6 cidr notation（→ desc/FAQ 压缩展开）
  3. ipv6 cidr chart（→ FAQ/Use cases：本页给单块字段，总表见 cheat sheet 的 IPv4 表）
  4. /64 /127 /128 特例（→ Formula + FAQ）
  5. 文档前缀 `2001:db8::/32`（→ 样例 + Use case）
- 用户真实任务：手里有一条 IPv6 CIDR（常写成压缩形式），要网络地址、末地址、这块有多大、规范文本写法；还要知道前缀是否落在 nibble（4-bit）边界（反向 DNS / 分配习惯）。
- [x] 竞品 SERP 前 5–10 都提供了什么？
  - `ipv6 cidr calculator`：IPVoid / DNS Checker / subnetcalculator.dev 等**计算器密集**（tool≈10）
  - `ipv6 cidr`：test-ipv6.com / 百科 / Cisco 指南，**少有同名计算器 title**
  - 多数页把 IPv4/IPv6 塞进同一「Subnet Calculator」
- [x] 它们没讲清什么？（≥3 条缺口）
  1. **nibble 边界**：前缀非 4 的倍数时，ip6.arpa 反向区与许多 ISP 分配习惯会失败或别扭；薄计算器常不提示。
  2. **RFC 5952 压缩**：输入 `2001:0db8:0000::1/64` 与输出规范压缩是否一致。
  3. **/127 /128**：点对点与单主机（RFC 6164）相对 IPv4 /31 /32 的对应关系常糊。
  4. **多语言检索向**：SERP 几乎全英文。
- [x] 我们补哪 ≥3 条增益？（§3.1 编号 + 页面章节）
  - **①** Formula：128-bit AND 掩码；地址数 = 2^(128−p)；RFC 5952 压缩规则 → `#formula`
  - **②** 边界：非法地址、前缀 0–128、拒 IPv4、nibble 警告、/64 /127 /128 特例 → 结果区 + FAQ
  - **③** Use cases：LAN /64；点对点 /127；文档前缀核对
  - **⑤** References：RFC 4291、RFC 5952、RFC 6164
  - **⑥** 本地隐私：粘贴留在设备
  - **⑧** Example：与进页样例一致（`2001:db8:1::/64`）
  - **⑨** related ≥2 → `cidr-to-ip-range`, `ip-range-to-cidr`
- [x] 长尾：合并进本页。禁止拆 `ipv6-cidr-calculator` / `ipv6-cidr-notation` 近义 URL。IPv4 展开 → `cidr-to-ip-range`；起止→CIDR（双栈）→ `ip-range-to-cidr`；IPv4 速查表 → `cidr-cheat-sheet`。
- [x] 权威来源 URL：
  - https://www.rfc-editor.org/rfc/rfc4291
  - https://www.rfc-editor.org/rfc/rfc5952
  - https://www.rfc-editor.org/rfc/rfc6164
- [x] 行业/场景 Use case 文案草稿：
  1. 给办公网划 `/64` LAN，看网络地址与末地址。
  2. 路由器点对点用 `/127`（RFC 6164），确认只有两个地址。
  3. 文档/教材用 `2001:db8::/32`，核对其压缩写法。
- [x] 边界/失败案例草稿：空；非法 hex；`::` 使用超过一次；前缀越界；粘贴 IPv4 → 明确指向 IPv4 工具；nibble 非对齐 → 警告非错误；不做 SLAAC/RA、不做 WHOIS。
- [x] 结果区信息如何落到可索引 Example / FAQ：Example 写死 `/64` 压缩/展开/地址数；FAQ 写 nibble、/127、IPv4 去哪、是否上传。
- [x] Related / 主题内链计划（≥2）：`cidr-to-ip-range`、`ip-range-to-cidr`

### 计划勾选的 §3.1 维度（至少 3）

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | 128-bit 掩码；RFC 5952 压缩 |
| 2 | 边界/失败 | nibble 警告；/127 /128；拒 IPv4 |
| 3 | 场景语境 | Use cases ×3 |
| 5 | 权威引用 | RFC 4291 / 5952 / 6164 |
| 6 | 本地隐私 | desc/FAQ |
| 8 | 数值示例 | `2001:db8:1::/64` |
| 9 | 主题内链 | cidr-to-ip-range、ip-range-to-cidr |

**硬性勾选（上线至少 3）**：① ② ③ ⑤ ⑥ ⑧ ⑨

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | CIDR 簇 · **P1** |
| 场景与行业 | 网络/云：IPv6 前缀 → 网段与规范写法 |
| 技术（包、Tier、本地处理） | **Tier 0** 原生 JS BigInt；`localProcessing: true` |
| Catalog `page.style` | **`opts`** |
| Title (en) | IPv6 CIDR calculator — Expand a prefix into its address range |
| Description 要点 | IPv6 CIDR calculator: paste a prefix (sample `2001:db8:1::/64`) to get the network address, last address, address count, and RFC 5952 compressed/expanded forms. Warns when the prefix is not nibble-aligned. /64 LAN, /127 point-to-point, and /128 host rules included. Runs on your device, not uploaded to a server. |
| Schema | WebApplication + BreadcrumbList |
| FAQ 要点（≥3） | ① nibble 不对齐会怎样？② /64 /127 /128 有何不同？③ 与 IPv4 CIDR 工具什么关系？④ 压缩规则跟谁？⑤ 是否上传？ |
| Disclaimer / References | 非路由策略建议；RFC 4291、5952、6164 |
| related | `cidr-to-ip-range`, `ip-range-to-cidr` |
| 验收 | `coverage:gate --phase=0b`；实现后进页样例显示 `/64` 字段；`verify:tool` |
| 工期粗估 | 实现 + 十语约 1 d |
| 本地化核查 | 见 `03-locale-briefs.md` |
| catalog 建议 | `category: developer`；`scenario: developer`；`subject: network`；`faqPrefix: tool_ipv6_cidr`；`ymyl: false`；`localProcessing: true`；`page.style: opts` |

## 清单前检索覆盖优化（生成页面模块清单前必做）

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-08-31 |
| slug 结论 | **保留** `ipv6-cidr`（Planner kebab；对象独立，不并 IPv4） |
| 主检索词 → title/H1 | **IPv6 CIDR calculator** / **ipv6 cidr** → H1「IPv6 CIDR calculator — Expand a prefix into its address range」（主词在破折号前；副标题结果向，禁止「Network, last address, compressed」逗号枚举） |
| 次要关键词 → desc / FAQ / Use cases | `ipv6 cidr`→H1 已含 IPv6 CIDR；`ipv6 cidr notation`→desc 压缩/展开 + FAQ；`ipv6 cidr chart`→FAQ「本页是单块计算，IPv4 总表见 cheat sheet」；`/64` `/127` `/128`→Formula + FAQ + Use cases |
| 用户搜索习惯判断 | 搜 `ipv6 cidr` 有人要测试连通性（test-ipv6.com），本页**有意不满足**连通性测试；计算器意图用 H1「IPv6 CIDR calculator」承接。副标题写结果（network / last / compressed），不写控件名。 |
| 优化摘要 | 2026-08-31：锁定 Planner H1=IPv6 CIDR calculator；nibble 作边界 IG 非 H1；拒 IPv4 进主叙事；连通性测试有意不满足并 FAQ 一句。 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

> 填完后验收：`npm run coverage:gate -- --slug=ipv6-cidr --phase=0b`。

## Ads / Keyword Planner 长尾（有分析时必做）

- [x] 已引用分析路径：`docs/seo/keywords/cidr/2026-08-28-cidr-keyword-planner.md`；CSV；SERP longtail + 100plus

| 长尾词（Planner） | 归属 | 文案落点（H1/desc/FAQ/usecase） | 功能覆盖（控件/结果哪一步） | 不覆盖理由（若有） |
|---|---|---|---|---|
| **ipv6 cidr**（100–1k） | build 主叙事 | H1 含 IPv6 CIDR；desc 开篇 | 首屏：粘贴 IPv6 CIDR → 网络/末地址 | 连通性测试 **有意不满足** |
| **ipv6 cidr calculator**（10–100） | build 主词（H1） | H1 核心 | 同上计算器 | — |
| ipv6 cidr notation（10–100） | absorb | desc 压缩/展开 + FAQ | 结果区同时给 compressed + expanded | — |
| ipv6 cidr chart（10–100） | absorb | FAQ：单块字段 vs IPv4 速查表 | 本页不画 /0–/128 全表 | 全表留给 cheat sheet（IPv4）；本页给单前缀 |
| cidr calculator（头词） | drop / 他 slug | 不进 H1 | — | IPv4 收割页 `cidr-to-ip-range` |

- [x] 交互规格已按上表补齐能力（不仅写进文案）

## 用户意图审查（标 ready 前必做）

| 项 | 结论 |
|---|---|
| 日期 | 2026-08-31 |
| 总判 | **满足**（主任务=IPv6 前缀→网段与规范写法；nibble 为警告不抢首屏；连通性测试有意不满足） |
| 主词搜索者任务 | 打开页要把一条 IPv6 CIDR 变成网络/末地址/大小/压缩写法，不是测 IPv6 能否上网，也不是点本站按钮教程。 |
| Ads/Planner 长尾任务 | `ipv6 cidr calculator` / `ipv6 cidr` → 能办成计算；`notation` → 能看到压缩展开；`chart` → FAQ 划界；连通性 **有意不满足** |
| 满足之处 | 首屏单输入 + 立即出字段；How 先答「把 IPv6 前缀算成网段」再写粘贴；进页自动跑 `2001:db8:1::/64`。 |
| 超出 / 应划边界 | **不做** IPv4 展开、SLAAC、ping、WHOIS、VPC 分配。nibble 用结果提示，不进 H1。desc 禁止 doorway/slug 自述。 |
| 缺口与已做优化 | How：① 任务是算 IPv6 网段 → ② 粘贴 CIDR → ③ 读网络/末地址/压缩 → ④ 看 nibble 提示。FAQ 补 IPv4 去向与 /127。 |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | |

## 交互规格（给实现用）

- 输入（**首屏**）：单行 IPv6 CIDR（可压缩）；按钮 Calculate / Load sample / Clear / Copy
- 输出：network（压缩+展开）、last address、prefix、address count（2^n 或「2^k」字符串）、nibble-aligned 是/否（否则警告）、/64 /127 /128 短注（仅当命中）
- 核心规则：解析 RFC 4291 文本（单次 `::`）；网络 = addr AND mask；末地址 = network OR NOT mask；压缩 RFC 5952（最长零段、小写、禁止单 16-bit `::` 可选实现简化但须稳定）
- 失败：空、非法、双 `::`、前缀非 0–128、IPv4 字面量 → 指向 IPv4 工具
- 示例 Input → Output（须与默认样例一致）：
  - **默认**：`2001:db8:1::/64` → network `2001:db8:1::`，last `2001:db8:1:0:ffff:ffff:ffff:ffff`，count `2^64`，nibble aligned yes
- **进页样例**：`loadSample()` 填入上述 CIDR 并计算，结果区可见字段
- How it works：
  1. 先明白任务是把 **IPv6 CIDR** 算成网段（网络/末地址），即 IPv6 CIDR calculator
  2. 粘贴如 `2001:db8:1::/64` 或 Load sample
  3. 读网络、末地址、地址数量、压缩/展开
  4. 若前缀不是 4 的倍数，读 nibble 警告（反向 DNS / 分配习惯）
  5. IPv4 去 CIDR to IP range；起止汇总去 IP range to CIDR
- **实现防呆**：`opts`；正则 `\\w`/`\\d`；B 后 `lint:tool-page -- --slug=ipv6-cidr`

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
- [ ] Disclaimer（YMYL 必备）— **非 YMYL**；页脚一句以 RFC 为准、非路由建议
- [x] `03-locale-briefs.md` 已填（实现十语前）
