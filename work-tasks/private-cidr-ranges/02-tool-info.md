# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`private-cidr-ranges`  
**路径**：`/tools/private-cidr-ranges`  
**主方向**：C（网络运维 · RFC 私网/特殊前缀分类；实现 Tier 0 JS）  
**YMYL**：否  
**Locale briefs**：见同夹 `03-locale-briefs.md`（状态 `briefs-ready`）

> 填完且状态为 `ready` 后，再按 `.cursor/rules/tool-creation.mdc` 实现。  
> IG 依据：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。  
> 选题：`docs/seo/keywords/cidr/2026-08-28-cidr-keyword-planner.md` P0；SERP：`docs/seo/keywords/cidr/2026-08-28-cidr-longtail-serp.md`（`private cidr ranges` → long_gap）。  
> Token 流程：本会话 **A · Brief** 完成；下一会话 **B**：catalog、`privateCidrRangesPage.ts`、icon、en i18n、`coverage:gate --phase=2`、`lint:tool-page`。

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：
  1. **private cidr ranges**（Planner 10–100，**唯一 H1 核心**）
  2. private ip ranges cidr / private ip cidr（→ desc + 对照表；不改 H1）
  3. private cidr（短搜 → H1 已含 private + CIDR；FAQ「什么算 private」）
  4. tailscale cidr（→ FAQ + CGNAT `100.64.0.0/10` 标注；**不做** Tailscale 控制台）
  5. RFC1918 / CGNAT / ULA / documentation prefixes（→ Rules 对照表 + 分类结果标签；不进 H1 堆砌）
- 用户真实任务：手里有一个 IP 或 CIDR，要马上知道它是否落在私网/特殊用途块里、是哪一类（RFC1918 哪条、CGNAT、ULA、文档网段等），并看到规范 CIDR 与权威出处——不是又一张只能人眼扫的静态表，也不是通用「CIDR→主机范围」计算器。
- [x] 竞品 SERP 前 5–10 都提供了什么？
  - 静态 cheat sheet / 博客解释（cidrtools、subnetcalculator.dev、ipcisco、xerobit、cidrcalculate、mlab）
  - Stack Exchange 论坛答疑
  - AWS VPC CIDR 文档（云产品语境，非通用分类器）
  - **可交互「粘贴即分类」稀缺**；多为 chart=3 + other 文 + forum
- [x] 它们没讲清什么？（≥3 条缺口）
  1. **交互分类薄**：前排偏表与文章，少「输入 IP/CIDR → 命中哪一类」。
  2. **CGNAT vs RFC1918 混淆**：`100.64/10` 常被漏标或与「私网」混谈；Tailscale 占用说明更少。
  3. **IPv6 ULA / 文档前缀**：多数页只列 10/172.16/192.168。
  4. **重叠/多命中**：地址可同时落在「私网叙事」与「特殊用途」叙事时，薄页不解释优先级。
  5. **多语言检索向**：SERP 几乎全英文。
- [x] 我们补哪 ≥3 条增益？（§3.1 编号 + 页面章节）
  - **①** Formula/Rules：最长前缀匹配（LPM）对内置表求包含关系；IPv4/IPv6 分表 → `#formula`
  - **②** 边界：非法 IP/CIDR、混族、公网「未命中特殊表」、多标签（如文档块≠RFC1918）→ 结果区 + FAQ
  - **③** Use cases：VPC/ACL 选私网块；核对 CGNAT/Tailscale；IPv6 ULA 规划
  - **④** 对照表：RFC1918 三块 + CGNAT + link-local/loopback + 文档前缀 + IPv6 ULA/link-local/文档 → Rules（可点选填入分类器）
  - **⑤** References：RFC1918、RFC6598、RFC4193、RFC5737（或 RFC3849/5737 文档）、IANA special-purpose
  - **⑥** 本地隐私：粘贴地址留在设备、不上服务器
  - **⑦** 十语 brief（`03`）
  - **⑧** 固定 Example：与进页样例一致（见交互规格）
  - **⑨** related ≥2 → `ip-range-to-cidr`、`terraform-cidrsubnet`
- [x] 长尾：合并进本页。禁止拆 `private-ip-ranges`、`tailscale-cidr`、`rfc1918-ranges` 近义 URL。通用「CIDR to IP range / host count」留给 `cidr-to-ip-range`（未实现前 FAQ 一句说明本页不做展开主机列表）。AWS VPC 分配器留给 `aws-vpc-cidr-planner`。
- [x] 权威来源 URL：
  - https://www.rfc-editor.org/rfc/rfc1918
  - https://www.rfc-editor.org/rfc/rfc6598
  - https://www.rfc-editor.org/rfc/rfc4193
  - https://www.rfc-editor.org/rfc/rfc5737
  - https://www.iana.org/assignments/iana-ipv4-special-registry/iana-ipv4-special-registry.xhtml（可选第二条 IPv4 special）
- [x] 行业/场景 Use case 文案草稿：
  1. 设计 VPC：确认 `10.0.0.0/16` 属 RFC1918，避免误用文档/`100.64` 块。
  2. 看到 `100.x` 地址：区分 CGNAT（含 Tailscale 常用空间）与 RFC1918。
  3. IPv6 实验室：核对 `fd12:…` 是否 ULA，文档前缀 `2001:db8::/32` 勿当生产。
- [x] 边界/失败案例草稿：空输入；非法八位组；CIDR 前缀越界；IPv4 字面量喂进 IPv6 表（或反之）→ 明确错误；纯公网地址 →「未命中本表特殊/私网块」+ 可链 related 做范围换算；不做 WHOIS/ASN；不做路由可达性探测。
- [x] 结果区信息如何落到可索引 Example / FAQ：Example 写死默认样例 IP→类别；FAQ 写 RFC1918 三块、CGNAT≠RFC1918、Tailscale 与 `100.64/10`、ULA vs 全球单播、是否上传。
- [x] Related / 主题内链计划（≥2）：`ip-range-to-cidr`（起止→CIDR，任务反向）、`terraform-cidrsubnet`（IaC 切块）。**不要**把 `ip-address`（公网出口 IP）当主 related 抢意图；实现后可选再补。

### 计划勾选的 §3.1 维度（至少 3）

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | LPM / 包含判断；内置前缀表 |
| 2 | 边界/失败 | 非法、混族、未命中、多标签说明 |
| 3 | 场景语境 | Use cases ×3（VPC / CGNAT·Tailscale / ULA） |
| 4 | 对照表 | RFC1918 + CGNAT + 特殊用途 + IPv6 |
| 5 | 权威引用 | RFC1918/6598/4193/5737（+ IANA 可选） |
| 6 | 本地隐私 | desc/FAQ：设备内、不上服务器 |
| 7 | 多语言 | `03` 十语当地词 |
| 8 | 数值示例 | `100.64.1.10` → CGNAT；`10.0.0.5` → RFC1918 |
| 9 | 主题内链 | ip-range-to-cidr、terraform-cidrsubnet |

**硬性勾选（上线至少 3）**：① ② ③ ④ ⑤ ⑥ ⑧ ⑨

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | CIDR 簇 · 漏斗 P0 · 周进攻（与 ip-range-to-cidr 并列可选） |
| 场景与行业 | 网络/云运维：私网与特殊用途 CIDR 核对 |
| 技术（包、Tier、本地处理） | **Tier 0** 原生 JS（IPv4 number / IPv6 BigInt 包含判断）；无 npm 重包；`localProcessing: true` |
| Title (en) | Private CIDR ranges — Check if an IP or prefix is private or special-use |
| Description 要点 | Private CIDR ranges: paste an IP or CIDR to see RFC1918, CGNAT (100.64/10), IPv6 ULA, and documentation blocks (sample: 100.64.1.10 → shared address space). Browse the reference table, including Tailscale’s use of CGNAT space. Checks stay on your device and are not uploaded to a server. |
| Schema | WebApplication + BreadcrumbList（应用名含 Private CIDR ranges；与可见文案一致） |
| FAQ 要点（≥3） | ① RFC1918 三块各是什么？② `100.64/10` 算不算「私网」/与 Tailscale？③ ULA `fc00::/7` 与公网 IPv6？④ 文档前缀为何不能当生产？⑤ 本页是否展开主机列表 / 是否上传？ |
| Disclaimer / References | 非路由/防火墙策略建议；以 RFC/IANA 为准；Refs：RFC1918、6598、4193、5737 |
| related | `ip-range-to-cidr`, `terraform-cidrsubnet` |
| 验收 | 本步：`coverage:gate --phase=0b`。实现后：进页样例显示 CGNAT 命中；RFC1918 样例可一键加载；phase=2/4/all + `verify:tool` |
| 工期粗估 | 实现 + 十语检索向重写约 1 d |
| 本地化核查 | 见 `03-locale-briefs.md` |
| catalog 建议 | `category: developer`；`scenario: developer`；`subject: network`；`faqPrefix: tool_private_cidr_ranges`；`ymyl: false`；`localProcessing: true`；`page.style: opts` |

## 清单前检索覆盖优化（生成页面模块清单前必做）

> 规则：`.cursor/rules/tool-i18n-localization.mdc`「清单前检索覆盖优化」。未填本表不得勾下方「页面模块清单」，不得标 `ready`。

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-08-28 |
| slug 结论 | 保留 `private-cidr-ranges`（Planner kebab；与 `cidr-cheat-sheet` 速查总表、`cidr-to-ip-range` 展开主机 intent 分离） |
| 主检索词 → title/H1 | **private cidr ranges** → H1「Private CIDR ranges — Check if an IP or prefix is private or special-use」（主词在破折号前；副标题任务/结果向，**不**罗列 RFC 编号目录） |
| 次要关键词 → desc / FAQ / Use cases | `private ip ranges cidr` / `private ip cidr`→desc 前半 + 对照表；`private cidr`→H1 已覆盖；`tailscale cidr`→FAQ② + Use case 2（CGNAT 标注）；RFC1918/CGNAT/ULA→Rules 表 + 结果标签 + FAQ |
| 用户搜索习惯判断 | 运维搜「private cidr ranges / private ip ranges」要**对照与核对**，不是「CIDR calculator」。H1 必须含 Private CIDR ranges；副标题写「是否私网/特殊用途」，禁止「RFC1918、CGNAT、ULA、link-local」参数枚举进 H1。 |
| 优化摘要 | 2026-08-28：锁定 Planner 主词 Private CIDR ranges；副标题改为分类核对结果向；Tailscale/CGNAT/ULA absorb 进 FAQ/表/结果标签；明确不做主机展开与 VPC 分配器。 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

> 填完后验收：`npm run coverage:gate -- --slug=private-cidr-ranges --phase=0b`（须绿才可标 `ready` / 勾下方页面模块清单）。

## Ads / Keyword Planner 长尾（有分析时必做）

> 规则：`.cursor/rules/work-tasks-tool-brief.mdc`「Ads / Keyword Planner 长尾融入」。

- [ ] 不适用（本 slug 无 Planner / Ads 长尾分析）
- [x] 已引用分析路径：`docs/seo/keywords/cidr/2026-08-28-cidr-keyword-planner.md`；CSV `Cidr_KeywordPlanner_bing.csv`；SERP `2026-08-28-cidr-longtail-serp.md`

| 长尾词（Planner） | 归属 | 文案落点（H1/desc/FAQ/usecase） | 功能覆盖（控件/结果哪一步） | 不覆盖理由（若有） |
|---|---|---|---|---|
| **private cidr ranges**（10–100） | build 主词 | H1 核心；desc 开篇 | 首屏：粘贴 IP/CIDR → 分类结果 + 参考表 | — |
| private ip ranges cidr（10–100） | absorb | desc + Rules 表「private IP ranges」表述 | 同分类器；表列出 10/8、172.16/12、192.168/16 | — |
| private cidr（10–100） | absorb | H1 已含；FAQ「什么算 private CIDR」 | 同左 | — |
| private ip cidr（10–100） | absorb | desc / FAQ | 同分类器 | — |
| **tailscale cidr**（10–100） | absorb | FAQ Tailscale + Use case 2；结果标签注明 CGNAT 空间常被 Tailscale 使用 | 输入 `100.64.x` → 命中 RFC6598；FAQ 说明，**无** Tailscale API/登录 | 不做 Tailscale ACL/控制台 |
| cidr calculator / cidr to ip range | drop / 他 slug | 最多 FAQ 一句「要展开主机范围用 CIDR→IP range 类工具」 | 本页不输出主机列表/广播 | 留给 `cidr-to-ip-range` |
| aws vpc cidr | 他 slug | 不进 H1 | 不做 VPC 分配器 | 留给 `aws-vpc-cidr-planner` |
| 兽医 cidr / 品牌 mxtoolbox | drop | — | — | Planner drop |

- [x] 交互规格已按上表补齐能力（不仅写进文案）

## 用户意图审查（标 ready 前必做）

> 规则：`.cursor/rules/work-tasks-tool-brief.mdc`「用户意图审查」。对照 `00` 原话 + 主检索词用户任务。未填不得 `ready`。

| 项 | 结论 |
|---|---|
| 日期 | 2026-08-28 |
| 总判 | **满足**（主任务=核对私网/特殊 CIDR；表可点选；Tailscale 仅说明层；不做展开主机/VPC 规划） |
| 主词搜索者任务 | 打开页就要对照/判断「这段地址属于哪类 private/special-use CIDR」，而不是学本站按钮名，也不是算可用主机数。 |
| Ads/Planner 长尾任务 | `private cidr ranges` / `private ip ranges cidr` / `private cidr` → 分类+表 **能办成**；`tailscale cidr` → 能认出 `100.64/10` 并读到 Tailscale 说明（**有意不满足**控制台）；计算器/展开主机 **有意不满足** |
| 满足之处 | 首屏：单输入 + 立即分类结果（类别名、匹配 CIDR、RFC、短说明）+ 可点选参考表；How 先答「对照私网/特殊前缀」再写粘贴步骤；进页自动跑 CGNAT 样例。 |
| 超出 / 应划边界 | **不做**完整 subnet 计算器、VLSM、Terraform 求值、AWS VPC 规划器、Tailscale 管理、WHOIS。对照表不得做成第二个「CIDR cheat sheet」主 H1。desc/How **禁止** doorway/slug/「不拆 URL」。次级 IPv6 行可折叠，但不得抢过首屏分类结果。 |
| 缺口与已做优化 | How：① 先说明任务是识别私网/特殊用途块 → ② 粘贴 IP 或 CIDR → ③ 读类别与 RFC → ④ 可点表行换样例。FAQ 补 Tailscale/CGNAT 与「非主机展开」。desc 用样例 `100.64.1.10` + 隐私句，去掉工程自述。 |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | |

## 交互规格（给实现用）

- 输入（**首屏**）：
  - 单行：`address` — IPv4/IPv6 地址 **或** CIDR（如 `10.0.0.0/16`、`fd00::/8`）
  - 可选过滤芯片：All / IPv4 table / IPv6 table（只影响下方参考表过滤，分类仍按输入族）
  - 按钮：Check / Load sample / Clear / Copy result summary
- 输出（首屏）：
  - 命中列表（按前缀长度降序）：类别名（RFC1918 / CGNAT shared / Link-local / Loopback / Documentation / ULA / …）、匹配 CIDR、RFC 或 IANA 短名、1 句说明
  - 若无命中：明确「Not in the built-in private/special-use list」（可能是全球单播等）——**不要**假装成错误
  - Tailscale 提示：当命中 `100.64.0.0/10` 时，结果区附加一句「Tailscale and other products often use this CGNAT space」（非品牌页）
- 参考表（首屏以下或同屏右侧/下方，移动端叠放）：
  - 行可点击 → 填入该 CIDR 并 Check
  - 列：CIDR | Name | Family | Spec
  - **最少行**（实现可扩展，勿砍核心）：
    - IPv4：`10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`（RFC1918）；`100.64.0.0/10`（RFC6598）；`127.0.0.0/8`；`169.254.0.0/16`；`192.0.2.0/24`, `198.51.100.0/24`, `203.0.113.0/24`（文档）
    - IPv6：`fc00::/7`（ULA）；`fe80::/10`（link-local）；`2001:db8::/32`（文档）
- 核心规则 / 算法：
  - 解析地址或前缀；CIDR 取网络地址再做包含判断
  - 对内置表做「输入前缀 ⊆ 表项」或「输入地址 ∈ 表项」；多命中全列（例：更具体文档块与更宽特殊表同时存在时都显示，并按前缀长度排序）
  - IPv4/IPv6 不得混算
  - **禁止**上传用户输入；**禁止**做端口扫描/WHOIS
- 失败与边界行为：
  - 非法语法：短错误，清空旧成功态
  - 合法公网：成功态「未命中表」，不是红错
  - 不实现主机枚举、不实现与 `cidr-to-ip-range` 重复的网段/广播输出（最多一行「network/broadcast 请用范围类工具」链到未来页或 related）
- 示例 Input → Output（H2 Example **必须**与默认样例一致）：
  - **默认进页**：`100.64.1.10` → **CGNAT / shared address space** `100.64.0.0/10`（RFC6598）+ Tailscale 提示
  - 次样例（Load alternate 或 Rules 提及，不强制第二按钮）：`10.0.0.5` → RFC1918 `10.0.0.0/8`；`2001:db8::1` → Documentation `2001:db8::/32`
- **进页样例（必填）**：初始化结束 `loadSample()` 填入 `100.64.1.10` 并自动 Check，结果区可见 CGNAT 命中（与 Example 一致）。无写操作例外。
- How it works（实现键；先用户任务后控件）：
  1. `how_item_1`：Know you are checking whether an address sits in a **private or special-use** CIDR (RFC1918, CGNAT, ULA, docs…), not counting hosts.
  2. `how_item_2`：Paste an IPv4/IPv6 address or CIDR (example `100.64.1.10`).
  3. `how_item_3`：Read the matched category, CIDR, and RFC note (and Tailscale tip when CGNAT matches).
  4. `how_item_4`：Optionally click a row in the reference table to check that prefix.
  5. `how_item_5`：If nothing matches, treat it as outside this private/special list — verify before using it as “private.”
- **实现防呆**：Page 用 `opts` 签名；`extraBodyHtml` 里正则写 `\\w`/`\\d`；B 后 `npm run lint:tool-page -- --slug=private-cidr-ranges`

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
