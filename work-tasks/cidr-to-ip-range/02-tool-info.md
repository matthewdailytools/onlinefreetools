# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`cidr-to-ip-range`  
**路径**：`/tools/cidr-to-ip-range`  
**主方向**：A（浏览器本地 CIDR → 网段/主机范围）  
**YMYL**：否  
**Locale briefs**：见同夹 `03-locale-briefs.md`（状态 `briefs-ready`）

> 填完且状态为 `ready` 后，再按 `.cursor/rules/tool-creation.mdc` 实现。  
> IG 依据：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。  
> 选题：`docs/seo/keywords/cidr/2026-08-28-cidr-keyword-planner.md` 收割页（title_gap_fallback｜seed=`cidr calculator`）；SERP：`2026-08-28-cidr-100plus-serp.md`（`cidr notation calculator` tool≈10）。  
> Token 流程：本会话 **A · Brief**；下一会话 **B**：catalog、`cidrToIpRangePage.ts`、icon、en i18n、`coverage:gate --phase=2`、`lint:tool-page`。

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：
  1. **cidr to ip range**（Planner 100–1k，**唯一 H1 核心**；title_gap）
  2. cidr notation calculator / cidr calculator / cidr range calculator（→ desc + FAQ；**不进 H1**）
  3. subnet mask to cidr / cidr to subnet mask（→ 次模式 mask 互转 + FAQ）
  4. cidr expander / cidr to ip list（→ 限额展开模式；硬上限）
  5. cidr range checker / contains / overlap；visual；Proxmox CIDR（→ 次模式或 FAQ/Use cases；不拆 URL）
- 用户真实任务：手里有一条 IPv4 CIDR（如 `192.168.1.0/24`），要立刻得到网络地址、广播、可用主机起止、主机数、子网掩码（及通配符），可复制进 ACL/防火墙/文档；搜「notation calculator」的人也是同一计算器任务，不是读定义文。
- [x] 竞品 SERP 前 5–10 都提供了什么？
  - MxToolbox / calculator.net / whatismyip / cidrtools / subnet-calculator / IPAddressGuide / cidr.xyz 等**泛 CIDR/Subnet Calculator**（tool 密集）
  - 多数 title 写「Subnet Calculator - CIDR…」或「CIDR Calculator」，少写「CIDR to IP range」任务句
  - 教育页占 `cidr notation` 定义 SERP；计算器词与 notation calculator 同簇工具站
- [x] 它们没讲清什么？（≥3 条缺口）
  1. **/31 /32 边界**：点对点与单主机时「可用主机」定义常糊；少写清 network=host、无传统 broadcast 等。
  2. **按位与规范化**：输入非网络地址（如 `192.168.1.37/24`）是否规范化到 `192.168.1.0/24` 并提示。
  3. **限额展开**：全量 dump `/16` 等易卡死；薄页常无上限或静默失败。
  4. **多语言检索向**：SERP 几乎全英文。
  5. **与反向工具边界**：起止→CIDR 常藏在同页或缺失；本站拆页须 FAQ 说清。
- [x] 我们补哪 ≥3 条增益？（§3.1 编号 + 页面章节）
  - **①** Formula：前缀→掩码；network = addr & mask；broadcast = network | ~mask；usable = 边界规则表（含 /31 RFC3021、/32）→ `#formula`
  - **②** 边界：非法 CIDR、前缀越界、非对齐主机位提示、展开行数上限、IPv6 拒绝并指向 `ipv6-cidr` → 结果区 + FAQ
  - **③** Use cases：ACL 写起止；防火墙对象；Proxmox/桥接网段核对
  - **⑤** References：RFC 4632；RFC 3021（/31）；可选 RFC 1878 历史对照一句
  - **⑥** 本地隐私：粘贴 CIDR 留在设备、不上服务器
  - **⑧** 固定 Example：与进页样例一致（`192.168.1.0/24` → 范围与掩码）
  - **⑨** related ≥2 → `ip-range-to-cidr`, `terraform-cidrsubnet`
- [x] 长尾：合并进本页。禁止拆 `cidr-notation-calculator`、`cidr-calculator`、`cidr-expander`、`visual-cidr-calculator` 近义 URL。头词 `cidr calculator` / `cidr notation` **不作唯一 H1**。IPv6 → `ipv6-cidr`；速查表 → `cidr-cheat-sheet`；起止→CIDR → `ip-range-to-cidr`；私网分类 → `private-cidr-ranges`；VLSM / AWS VPC 分配器不并入。
- [x] 权威来源 URL：
  - https://www.rfc-editor.org/rfc/rfc4632
  - https://www.rfc-editor.org/rfc/rfc3021
- [x] 行业/场景 Use case 文案草稿：
  1. 安全组/ACL：把 `10.0.0.0/24` 展开成起止，核对是否覆盖目标主机。
  2. 文档/交接：从 CIDR 写出掩码与可用主机数给非网络同事。
  3. Proxmox/虚拟化：核对桥接网段 CIDR 的 network/broadcast 是否与计划一致（FAQ 钩子，非 Proxmox API）。
- [x] 边界/失败案例草稿：空；非法八位组；前缀 &lt;0 或 &gt;32；IPv6 输入 → 明确「本页 IPv4，见 IPv6 CIDR 工具」；`/8` 展开全部主机 → 触顶提示；主机位非零 → 规范化并提示；不做路由可达性、不做 WHOIS。
- [x] 结果区信息如何落到可索引 Example / FAQ：Example 写死 `/24` 全字段；FAQ 写 /31/32、规范化、展开上限、notation calculator 同意图、反向工具、是否上传。
- [x] Related / 主题内链计划（≥2）：`ip-range-to-cidr`（反向）、`terraform-cidrsubnet`（IaC 切块）。可选补 `private-cidr-ranges`（分类，不抢展开意图）。

### 计划勾选的 §3.1 维度（至少 3）

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | 掩码/按位与/广播；/31/32 可用主机规则 |
| 2 | 边界/失败 | 非法、规范化提示、展开上限、拒 IPv6 |
| 3 | 场景语境 | Use cases ×3（ACL / 文档 / Proxmox） |
| 5 | 权威引用 | RFC 4632、RFC 3021 |
| 6 | 本地隐私 | desc/FAQ |
| 7 | 多语言 | `03` 十语 |
| 8 | 数值示例 | `192.168.1.0/24` 全字段 |
| 9 | 主题内链 | ip-range-to-cidr、terraform-cidrsubnet |

**硬性勾选（上线至少 3）**：① ② ③ ⑤ ⑥ ⑧ ⑨

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | CIDR 簇 · **收割页**（title_gap_fallback；不占周进攻名额） |
| 场景与行业 | 网络/云/虚拟化：CIDR → 网段与主机范围 |
| 技术（包、Tier、本地处理） | **Tier 0** 原生 JS；无 npm；`localProcessing: true` |
| Catalog `page.style` | **`opts`** |
| Title (en) | CIDR to IP range — Expand a prefix into usable addresses |
| Description 要点 | CIDR to IP range: paste an IPv4 CIDR (sample `192.168.1.0/24`) to get network, broadcast, usable hosts, host count, and subnet mask. Also convert mask ↔ prefix, check if an IP is in the block, and expand addresses with a safe row limit. Same job as a CIDR notation calculator—runs on your device, not uploaded to a server. |
| Schema | WebApplication + BreadcrumbList（应用名含 CIDR to IP range；与可见文案一致） |
| FAQ 要点（≥3） | ① /31 与 /32 可用主机怎么算？② 输入非网络地址会怎样？③ 与「cidr notation calculator」是否同一工具？④ 能否展开全部 IP / 上限？⑤ 起止→CIDR 去哪？⑥ 是否上传？ |
| Disclaimer / References | 非路由/防火墙策略建议；Refs：RFC 4632、RFC 3021 |
| related | `ip-range-to-cidr`, `terraform-cidrsubnet` |
| 验收 | 本步：`coverage:gate --phase=0b`。实现后：进页样例显示 `/24` 全字段；phase=2/4/all + `verify:tool` |
| 工期粗估 | 实现 + 十语检索向重写约 1 d |
| 本地化核查 | 见 `03-locale-briefs.md` |
| catalog 建议 | `category: developer`；`scenario: developer`；`subject: network`；`faqPrefix: tool_cidr_to_ip_range`；`ymyl: false`；`localProcessing: true`；`page.style: opts` |

## 清单前检索覆盖优化（生成页面模块清单前必做）

> 规则：`.cursor/rules/tool-i18n-localization.mdc`「清单前检索覆盖优化」。未填本表不得勾下方「页面模块清单」，不得标 `ready`。

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-08-28 |
| slug 结论 | **采用** `cidr-to-ip-range`（Planner title_gap）；**不**用 `cidr-notation-calculator` / `cidr-calculator`（头词/近义 doorway；用户点名词 absorb） |
| 主检索词 → title/H1 | **cidr to ip range** → H1「CIDR to IP range — Expand a prefix into usable addresses」（主词在破折号前；副标题场景/结果向，**禁止**「Network, Broadcast, Mask…」逗号枚举） |
| 次要关键词 → desc / FAQ / Use cases | `cidr notation calculator`→desc「Same job as a CIDR notation calculator」+ FAQ③；`cidr calculator` / `cidr range calculator` / `cidr calc`→desc/FAQ，不进 H1；`subnet mask to cidr`→次模式 + FAQ；`cidr expander`→限额展开模式 + FAQ④；contains/overlap/visual/Proxmox→次模式或 Use case/FAQ |
| 用户搜索习惯判断 | 搜 notation calculator / cidr calculator 要的是**展开网段字段**，不是定义文。H1 用有 title 缺口的任务句「CIDR to IP range」，避免与 MxToolbox 式泛「CIDR Calculator」硬刚；副标题写结果（network/broadcast/usable），禁止控件目录腔。 |
| 优化摘要 | 2026-08-28：用户点名「cidr notation calculator」映射 Planner 收割页；锁定 H1=CIDR to IP range；notation/calculator/mask/expand/checker absorb；拒 IPv6/VLSM/VPC 进本页主叙事；与 `ip-range-to-cidr` 反向划界。 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

> 填完后验收：`npm run coverage:gate -- --slug=cidr-to-ip-range --phase=0b`（须绿才可标 `ready` / 勾下方页面模块清单）。

## Ads / Keyword Planner 长尾（有分析时必做）

> 规则：`.cursor/rules/work-tasks-tool-brief.mdc`「Ads / Keyword Planner 长尾融入」。

- [ ] 不适用（本 slug 无 Planner / Ads 长尾分析）
- [x] 已引用分析路径：`docs/seo/keywords/cidr/2026-08-28-cidr-keyword-planner.md`；CSV `Cidr_KeywordPlanner_bing.csv`；SERP `2026-08-28-cidr-100plus-serp.md` / longtail 批

| 长尾词（Planner） | 归属 | 文案落点（H1/desc/FAQ/usecase） | 功能覆盖（控件/结果哪一步） | 不覆盖理由（若有） |
|---|---|---|---|---|
| **cidr to ip range**（100–1k） | build 主词 | H1 核心；desc 开篇 | 首屏：粘贴 CIDR → network/broadcast/usable/mask | — |
| **cidr notation calculator**（100–1k） | absorb | desc + FAQ「同一计算器任务」 | 同上主计算器（非定义页） | 不建独立 slug；不作 H1 |
| cidr calculator / cidr calculator ipv4 / cidr range calculator / cidr calc / cidr block calculator | absorb | desc/FAQ；不进 H1 | 同上主结果区 | 头词禁作唯一 H1 |
| subnet mask to cidr / cidr to subnet mask | absorb | FAQ + 次模式「Mask ↔ prefix」 | 输入点分掩码→前缀或反向显示 | — |
| cidr expander / cidr to ip list | absorb | FAQ 展开上限 | 次模式 Expand（硬上限行数） | — |
| cidr range checker / contains / overlap | absorb | FAQ/次模式 | 输入候选 IP 或第二 CIDR → in-block / overlap 结果 | 不拆 overlap URL |
| visual cidr calculator | absorb | 可选轻量位图/前缀条（次 UI，不抢首屏数字结果） | 次面板；默认可折叠 | 不做 cidr.xyz 级炫技主叙事 |
| Proxmox / 虚拟化 CIDR 场景 | absorb | Use case 3 + FAQ 钩子 | 同主计算器字段即可 | 无 Proxmox API |
| ipv6 cidr / ipv6 cidr calculator | 他 slug | FAQ 一句指向 | 输入 IPv6 → 拒绝并文案指向 | `ipv6-cidr` |
| ip range to cidr | 他 slug | FAQ 反向 | 不做起止→CIDR | `ip-range-to-cidr` |
| private cidr ranges | 他 slug | 不进 H1 | 不做私网分类表 | `private-cidr-ranges` |
| cidr cheat sheet / what is cidr | 他 slug / FAQ 一句 | 最多 FAQ 消歧 | 不做 /0–/32 总表主 UI | `cidr-cheat-sheet` |
| 兽医 cidr / mxtoolbox 品牌 | drop | — | — | Planner drop |

- [x] 交互规格已按上表补齐能力（不仅写进文案）

## 用户意图审查（标 ready 前必做）

> 规则：`.cursor/rules/work-tasks-tool-brief.mdc`「用户意图审查」。对照 `00` 原话 + 主检索词用户任务。未填不得 `ready`。

| 项 | 结论 |
|---|---|
| 日期 | 2026-08-28 |
| 总判 | **满足**（`00` 点名 notation calculator → 映射收割页；主任务=CIDR→网段字段；mask/expand/check 为次模式不抢首屏；定义/IPv6/反向/私网表有意不满足或他页） |
| 主词搜索者任务 | 打开页就要从一条 IPv4 CIDR 得到 network、broadcast、usable hosts、mask（可复制），不是学按钮名，也不是读「what is CIDR」长文。 |
| Ads/Planner 长尾任务 | `cidr to ip range` / `cidr notation calculator` / 泛 calculator → **能办成**；mask 互转 / 限额 expand / contains·overlap → **能办成（次模式）**；visual 可选轻量；IPv6 / 起止→CIDR / 私网表 / cheat sheet **有意不满足或他 slug** |
| 满足之处 | 首屏：单输入 CIDR（兼 IP+/prefix）+ 立即主结果表；How 先答「把 CIDR 记法变成网段与主机范围」再写粘贴步骤；进页自动跑 `/24` 样例；FAQ 覆盖 /31/32 与 notation 同意图。 |
| 超出 / 应划边界 | **不做** VLSM 装箱、AWS VPC 规划器、Terraform 求值、私网分类主表、IPv6 全功能、第二「起止→CIDR」计算器抢首屏。visual/expand 不得压过主数字结果。desc/How **禁止** doorway/slug/「不拆 URL」元叙述。H1 **禁止** CIDR Calculator / Notation Calculator。 |
| 缺口与已做优化 | How：① 先说明任务是 CIDR→IP range 字段 → ② 粘贴如 `192.168.1.0/24` → ③ 读 network/broadcast/usable/mask → ④ 需要时再开 mask/expand/check。FAQ 补 notation calculator 同意图、反向工具、展开上限。desc 写入样例 + notation 一句 + 隐私句。 |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | |

## 交互规格（给实现用）

- 输入（**首屏**）：
  - 单行：`cidr` — IPv4 CIDR（`a.b.c.d/nn`）或「地址 + 前缀长度」；可选次输入：点分掩码（mask 模式）
  - 模式切换（次级，不默认抢视觉）：**Prefix → range**（默认）| **Mask ↔ prefix** | **Contains / overlap** | **Expand**（限额）
  - 按钮：Calculate / Load sample / Clear / Copy fields
- 输出（首屏 · 默认模式）：
  - Network address、Broadcast、First/Last usable、Host count（含特殊 /31/32 文案）、Subnet mask、Wildcard mask、Prefix length
  - 若输入主机位非零：显示规范化后的网络 CIDR + 一行提示「host bits ignored / normalized」
- 次模式：
  - Mask ↔ prefix：输入 `255.255.255.0` ↔ `/24`（非法掩码报错）
  - Contains：候选 IP → in/out；Overlap：第二 CIDR → disjoint / contain / overlap
  - Expand：列出地址，**硬上限**（建议 1024）；超过则提示缩小前缀或提高前缀长度
  - Visual（可选）：简单前缀长度条或 32-bit 示意，默认折叠，不得替代数字结果
- 核心规则 / 算法：
  - IPv4 only on this page；IPv6 → 明确错误 + 链 `ipv6-cidr`（上线后；未上线则文案不假装有链或只写「IPv6 另页」）
  - network = ip & mask；broadcast = network | ~mask；usable 按前缀表（/31 按 RFC3021 两端可用；/32 单主机）
  - **禁止**上传用户输入
- 失败与边界行为：
  - 非法语法：短错误，清空旧成功态
  - 前缀越界：错误
  - 展开超限：成功算完主字段 + 展开区警告（不要整页红错）
- 示例 Input → Output（H2 Example **必须**与默认样例一致）：
  - **默认进页**：`192.168.1.0/24` → network `192.168.1.0`，broadcast `192.168.1.255`，usable `192.168.1.1`–`192.168.1.254`，mask `255.255.255.0`，hosts `254`
  - 次例（Rules/FAQ）：`10.0.0.1/32`；`10.0.0.0/31`；`192.168.1.37/24` → normalize
- **进页样例（必填）**：初始化结束 `loadSample()` 填入 `192.168.1.0/24` 并自动 Calculate，结果区可见上述字段（与 Example 一致）。无写操作例外。
- How it works（实现键；先用户任务后控件）：
  1. `how_item_1`：Know you are turning a **CIDR prefix into an IP range** (network, broadcast, usable hosts)—the same job people mean by a CIDR notation calculator.
  2. `how_item_2`：Paste an IPv4 CIDR such as `192.168.1.0/24` (or use Load sample).
  3. `how_item_3`：Read network, broadcast, usable first/last, host count, and subnet mask; copy what you need.
  4. `how_item_4`：Optionally switch to mask conversion, contains/overlap, or capped expand.
  5. `how_item_5`：For start–end → CIDR, use the related IP range to CIDR tool; for IPv6 use the IPv6 CIDR page when available.
- **实现防呆**：Page 用 `opts` 签名；`extraBodyHtml` 里正则写 `\\w`/`\\d`；B 后 `npm run lint:tool-page -- --slug=cidr-to-ip-range`

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
- [ ] Disclaimer（YMYL 必备）— **本工具非 YMYL**；页脚可一句「以 RFC 为准、非路由策略建议」
- [x] `03-locale-briefs.md` 已填（实现十语前）
