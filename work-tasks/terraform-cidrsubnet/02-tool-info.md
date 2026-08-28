# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`terraform-cidrsubnet`  
**路径**：`/tools/terraform-cidrsubnet`  
**主方向**：C（IaC / Terraform 网络函数求值；实现 Tier 0 JS）  
**YMYL**：否  
**Locale briefs**：见同夹 `03-locale-briefs.md`（状态 `briefs-ready`）

> 填完且状态为 `ready` 后，再按 `.cursor/rules/tool-creation.mdc` 实现。  
> IG 依据：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。  
> 选题：`docs/seo/keywords/cidr/2026-08-28-cidr-keyword-planner.md` P0；SERP：`docs/seo/keywords/cidr/2026-08-28-cidr-longtail-serp.md`。  
> 下一会话（B）：catalog 分片、`terraformCidrsubnetPage.ts`、icon、en i18n、`coverage:gate --phase=2`。

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：
  1. **terraform cidrsubnet**（Planner 100–1k，**唯一 H1 核心**）
  2. cidrsubnet（函数名短搜 → H1 已含；desc 写签名 `cidrsubnet(prefix, newbits, netnum)`）
  3. cidrhost / terraform cidrhost（→ 次级求值 + FAQ + 对照表；**不进 H1、不拆页**）
  4. cidrnetmask（→ 次级求值 + FAQ；IPv4-only 边界）
  5. terraform cidrsubnets（复数）/ hashicorp subnets cidr（→ **仅 FAQ**：builtin 一次一块 vs 自动连续分配 / Registry 模块；**有意不满足**模块 UI）
- 用户真实任务：把 HCL 里的父前缀、`newbits`、`netnum` 填进去，立刻看到 Terraform 会返回的子网 CIDR，并理解为什么 `newbits=4, netnum=15` 会得到 `/28` 而不是「再切 4 个子网」的口语误解；出错时看到与 `terraform console` 同类的容量错误，而不是静默错 CIDR。
- [x] 竞品 SERP 前 5–10 都提供了什么？
  - HashiCorp 官方 `cidrsubnet` / `cidrsubnets` 文档（签名、RFC 4632、位图手算、`10.1.2.0/24` 样例）
  - Spacelift / OneUptime / Build5Nines / WintelGuy 等解释文与 HCL 片段
  - Registry：`hashicorp/subnets/cidr` 模块页
  - 可交互求值：**约 1**（`blog.ebfe.pw` Terraform cidrsubnet calculation tool）；其余不是计算器
- [x] 它们没讲清什么？（≥3 条缺口）
  1. **交互求值稀**：前排以 docs/博客为主，用户仍要开 `terraform console` 才知道结果。
  2. **错误边界不对齐**：薄计算器常对越界 `netnum` 给出「看起来像 CIDR」的错值，而 Terraform 会拒绝（`prefix extension of N does not accommodate a subnet numbered M`）。
  3. **三函数易混**：`cidrsubnet` 出前缀、`cidrhost` 出主机地址、`cidrnetmask` 出点分掩码（且仅 IPv4）——文章分篇，少有同页对照 + 次级求值。
  4. **手算步骤不可操作**：官方位图在静态页；计算器不展示「哪几位是 netnum」。
  5. **IPv6 样例少落地**：官方有 ULA 例，多数博客只写 IPv4 `/16`→`/24`。
  6. **多语言检索向**：SERP 几乎全英文。
- [x] 我们补哪 ≥3 条增益？（§3.1 编号 + 页面章节）
  - **①** Formula：`result_len = prefix_len + newbits`；`netnum` 须能放入 `newbits` 位；先把前缀规范成网络地址再写入 netnum 位 → `#formula`
  - **②** 边界：越界 netnum、前缀过长、非法 CIDR、IPv4/IPv6 混族、`cidrnetmask` 遇 IPv6、前导零按十进制（HashiCorp 历史行为）→ 结果区错误 + FAQ
  - **③** Use cases：VPC `/16` 切 `/24`；官方 `/24`+4+15 手算核验；IPv6 ULA 切块
  - **④** 对照表：cidrsubnet vs cidrhost vs cidrnetmask vs cidrsubnets（复数，仅说明）→ Rules
  - **⑤** References：HashiCorp 三函数文档 + RFC 4632 §3.1
  - **⑥** 本地隐私：参数留在设备、不上传服务器（FAQ + desc）
  - **⑦** 十语 brief（`03`）
  - **⑧** 固定 Example：与进页样例一致 `cidrsubnet("10.1.2.0/24", 4, 15)` → `10.1.2.240/28`
  - **⑨** related ≥2 → `ip-address`, `domain-lookup`
- [x] 长尾：合并进本页。禁止拆 `cidrhost-calculator`、`cidrnetmask`、`terraform-cidrsubnets`、`hashicorp-subnets-cidr` 近义 URL。通用 CIDR 展开/掩码互转留给未来 `cidr-to-ip-range`，本页 FAQ 一句指向「要网段/广播用另一类计算器」，实现前不要假装已有该链。
- [x] 权威来源 URL：
  - https://developer.hashicorp.com/terraform/language/functions/cidrsubnet
  - https://developer.hashicorp.com/terraform/language/functions/cidrhost
  - https://developer.hashicorp.com/terraform/language/functions/cidrnetmask
  - https://www.rfc-editor.org/rfc/rfc4632#section-3.1
- [x] 行业/场景 Use case 文案草稿：
  1. AWS/GCP VPC：`cidrsubnet(var.vpc_cidr, 8, count.index)` 预览 AZ0/AZ1 的 `/24`。
  2. 对照官方手算：`10.1.2.0/24` + 4 + 15 → `10.1.2.240/28`，再 `cidrhost` 取 1 与 14。
  3. IPv6 ULA：`cidrsubnet("fd00:fd12:3456:7890::/56", 16, 162)` → `fd00:fd12:3456:7800:a200::/72`。
- [x] 边界/失败案例草稿：空前缀；非 CIDR；`newbits` 非整数或使前缀超过 32/128；`netnum` ≥ 2^newbits（如 4 bits 却填 16）；IPv4 与 IPv6 写法混在同一前缀；`cidrnetmask` 喂 IPv6；不实现 Registry 模块的「按列表切多块」UI。
- [x] 结果区信息如何落到可索引 Example / FAQ：Example 写死官方 IPv4 样例；FAQ 写 newbits 含义、netnum 容量、cidrhost 负索引、cidrnetmask 仅 IPv4、cidrsubnets 复数与模块差异、是否上传。
- [x] Related / 主题内链计划（≥2）：现有 catalog 仅 `ip-address`（公网出口 IP，intent 不撞）、`domain-lookup`（DNS/RDAP）。**不要** related `jwt-decoder` / `magnet-link-decoder`。未来 CIDR 工具上线后再 `CROSS_TOOL_UPDATE` 补链，本 brief 不改他页分片。

### 计划勾选的 §3.1 维度（至少 3）

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | Formula：前缀长度相加、netnum 位移、规范网络地址 |
| 2 | 边界/失败 | 与 Terraform 同类拒绝；cidrnetmask IPv6 失败 |
| 3 | 场景语境 | Use cases ×3（VPC 切块 / 官方手算 / IPv6 ULA） |
| 4 | 对照表 | 三函数 + 复数 cidrsubnets 说明 |
| 5 | 权威引用 | HashiCorp 函数文档、RFC 4632 |
| 6 | 本地隐私 | desc/FAQ：设备内计算、不上服务器 |
| 7 | 多语言 | `03` 十语当地词；实现回合逐语重写 |
| 8 | 数值示例 | `10.1.2.0/24`, 4, 15 → `10.1.2.240/28` |
| 9 | 主题内链 | ip-address、domain-lookup |

**硬性勾选（上线至少 3）**：① ② ③ ④ ⑤ ⑥ ⑧ ⑨

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | CIDR 簇 · 漏斗 P0 · 周进攻第 1 |
| 场景与行业 | IaC / 云网络：Terraform 子网切分、核对 HCL |
| 技术（包、Tier、本地处理） | **Tier 0** 原生 JS（IPv4 number / IPv6 BigInt）；**无 npm CIDR 包**（避免与 TF 语义漂移）；`localProcessing: true`；无 WASM、无边缘求值 |
| Title (en) | Terraform cidrsubnet — Get the child CIDR Terraform would return |
| Description 要点 | Terraform cidrsubnet: enter a parent prefix, newbits, and netnum to get the child CIDR (sample: 10.1.2.0/24, 4, 15 → 10.1.2.240/28). Also evaluate cidrhost and cidrnetmask on the same page. Numbers stay on your device and are not uploaded to a server. |
| Schema | WebApplication + BreadcrumbList（应用名含 cidrsubnet；与可见文案一致） |
| FAQ 要点（≥3） | ① newbits 是「多借几位」不是「切成 4 个子网」？② netnum 为什么 16 会报错（4 bits 只能 0–15）？③ cidrhost 与 cidrsubnet 差在哪（含负 hostnum）？④ cidrnetmask 为什么拒 IPv6？⑤ cidrsubnets 复数 / hashicorp/subnets/cidr 模块本页为啥不做成第二个分配器？⑥ 计算是否上传？ |
| Disclaimer / References | 非 `terraform console` 替代；目标对齐 HashiCorp 函数语义，版本差异以官方文档为准；Refs：三函数文档 + RFC 4632 |
| related | `ip-address`, `domain-lookup` |
| 验收 | 本步：`coverage:gate --phase=0b`。实现后：进页样例=`10.1.2.240/28`；越界 netnum 须报错不给错 CIDR；phase=2/4/all + `verify:tool` |
| 工期粗估 | 实现 + 十语检索向重写约 1–1.5 d |
| 本地化核查 | 见 `03-locale-briefs.md` |
| catalog 建议 | `category: developer`；`scenario: developer`；`subject: network`；`faqPrefix: tool_terraform_cidrsubnet`；`ymyl: false`；`localProcessing: true`；`page.style: opts`（页函数收 opts 对象，勿用 pair 位置参数） |

## 清单前检索覆盖优化（生成页面模块清单前必做）

> 规则：`.cursor/rules/tool-i18n-localization.mdc`「清单前检索覆盖优化」。未填本表不得勾下方「页面模块清单」，不得标 `ready`。

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-08-28 |
| slug 结论 | 保留 `terraform-cidrsubnet`（Planner 主长尾 kebab；与 `cidr-to-ip-range` / `ip-range-to-cidr` 任务反向或泛计算器 intent 分离） |
| 主检索词 → title/H1 | **terraform cidrsubnet** → H1「Terraform cidrsubnet — Get the child CIDR Terraform would return」（主词在破折号前；副标题结果向，**不**罗列 prefix/newbits/netnum 控件名） |
| 次要关键词 → desc / FAQ / Use cases | `cidrsubnet`→H1+desc 签名句；`cidrhost`→FAQ③ + 次级求值 + Use case 2；`cidrnetmask`→FAQ④ + 次级求值；`cidrsubnets` / `hashicorp subnets cidr`→FAQ⑤ 有意不满足模块 UI；VPC `count.index` 切块→Use case 1 |
| 用户搜索习惯判断 | 开发者直接搜函数名 `terraform cidrsubnet` / `cidrsubnet`；H1 必须含函数名。副标题写「会返回哪块子网 CIDR」，禁止「prefix、newbits、netnum、IPv4、IPv6」目录腔。 |
| 优化摘要 | 2026-08-28：相对「CIDR calculator」初念，H1 锁定 Planner 主词 Terraform cidrsubnet；副标题改为求值结果向；cidrhost/cidrnetmask/模块长尾全部 absorb 进 FAQ/次 UI，不改 H1、不拆 URL。 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

> 填完后验收：`npm run coverage:gate -- --slug=terraform-cidrsubnet --phase=0b`（须绿才可标 `ready` / 勾下方页面模块清单）。

## 用户意图审查（标 ready 前必做）

> 规则：`.cursor/rules/work-tasks-tool-brief.mdc`「用户意图审查」。对照 `00` 原话 + 主检索词用户任务。未填不得 `ready`。

| 项 | 结论 |
|---|---|
| 日期 | 2026-08-28 |
| 总判 | **满足**（主任务=求值 cidrsubnet；次函数不抢首屏；模块/复数分配器有意不满足） |
| 主词搜索者任务 | 打开页就要对 `cidrsubnet(prefix, newbits, netnum)` 得到 Terraform 会返回的子网 CIDR，并搞清 newbits/netnum，而不是学「本站三个输入框叫什么」。 |
| 满足之处 | 首屏只有 cidrsubnet 三字段 + 结果 CIDR + 可复制 HCL；How 先解释「从父前缀切一块子网」再写填表步骤；进页自动跑官方样例 `10.1.2.240/28`。 |
| 超出 / 应划边界 | **次 UI 不得抢首屏**：cidrhost / cidrnetmask 放结果区下方「相关函数」，默认不与主表单三等分 Tab。**不做** AWS AZ/VPC 规划器、VLSM 需求表、cidrsubnets 自动连续分配、Registry 模块包装器。desc/How **禁止**写 doorway/slug/「不拆 URL」。通用「CIDR 转 IP 范围」不作为本页主输出。 |
| 缺口与已做优化 | How 改为：① 先说明切的是子网前缀不是主机 IP → ② 填与 HCL 相同的三项 → ③ 读 CIDR / 复制调用 → ④ 越界时看错误而不是错结果。FAQ 补复数函数与模块一句。desc 去掉工程自述，改为样例 CIDR + 隐私句。 |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | |

## 交互规格（给实现用）

- 输入（**首屏 · 仅 cidrsubnet**）：
  - `prefix`：CIDR 字符串（IPv4 或 IPv6）
  - `newbits`：整数（≥0）
  - `netnum`：整数（≥0；与官方 cidrsubnet 文档一致，**不**宣传负 netnum，除非实现时用 `terraform console` 证实并再补 FAQ）
  - 按钮：Evaluate（可输入即算）/ Load sample / Clear / Copy CIDR / Copy HCL
- 输出（首屏）：
  - 结果 CIDR 字符串（规范网络地址 + 新前缀长度）
  - 可复制 HCL：`cidrsubnet("…", N, M)`
  - 辅助：新前缀长度、合法 netnum 范围 `0 … 2^newbits-1`、该子网大致主机容量（IPv4 扣网络/广播的说明放 Rules，避免 /31 /32 说错）
  - IPv4 且样例级位数时：简单位分解（父网络 | netnum | host），对齐官方 `10.1.2.0/24` 图，**不要**做成第二个 VLSM 工具
- 次级（首屏**以下**，标题「相关函数」）：
  - cidrhost：`prefix` + `hostnum`（**允许负数**，官方：从末尾倒数；样例 `cidrhost("10.0.0.0/8", -2)` → `10.255.255.254`）
  - cidrnetmask：仅 IPv4 prefix → 点分掩码（如 `/24` → `255.255.255.0`）；IPv6 明确错误
  - 可选：当 `newbits ≤ 4` 时列出全部 netnum→CIDR（最多 16 行）；更大则提示用 netnum 单条求值，禁止展开 2^8 张表
- 核心规则 / 算法：
  - 解析 CIDR（RFC 4632）；IPv4 八位组**前导零当十进制**（HashiCorp 文档历史行为），不要当八进制
  - 先将地址规范为该前缀的网络地址，再把 `netnum` 写入新增的 `newbits` 位
  - `new_prefix_len = old_prefix_len + newbits`；IPv4 ≤32、IPv6 ≤128
  - `0 ≤ netnum < 2^newbits`（整数；实现用 BigInt 比移位，避免 JS 32-bit 坑）
  - 族不混用；结果字符串与输入同族
  - **禁止**把用户输入发到服务器；**禁止**做成 AWS 控制台
- 失败与边界行为：
  - 非法前缀 / 空字段：短错误，结果区不留旧 CIDR 假装成功
  - netnum 越界：错误须能让人看出「N 位装不下 M」（语义对齐 TF，文案可人话，不必逐字抄引擎）
  - cidrnetmask + IPv6：失败，指向 cidrsubnet/cidrhost
  - 不实现 `cidrsubnets(...)` 多参数分配器
- 示例 Input → Output（H2 Example **必须**与默认样例一致）：
  - 主样例：`prefix=10.1.2.0/24`, `newbits=4`, `netnum=15` → **`10.1.2.240/28`**
  - 文档对照（Rules 可提、不自动切主样例）：`cidrsubnet("172.16.0.0/12", 4, 2)` → `172.18.0.0/16`；IPv6 `cidrsubnet("fd00:fd12:3456:7890::/56", 16, 162)` → `fd00:fd12:3456:7800:a200::/72`
- **进页样例（必填）**：默认即官方 IPv4 样例；初始化结束调用 `loadSample()` 自动算出并显示 `10.1.2.240/28`（与 Copy HCL 一致）。无写操作例外。
- How it works（实现键；先用户任务后控件）：
  1. `how_item_1`：Understand that cidrsubnet returns a **child network prefix**, not a host IP (`cidrhost` does that).
  2. `how_item_2`：Paste the parent CIDR from your Terraform variable (example `10.1.2.0/24`).
  3. `how_item_3`：Set newbits (extra prefix bits) and netnum (which subnet, starting at 0).
  4. `how_item_4`：Read the child CIDR and copy the HCL call, or compare with `terraform console`.
  5. `how_item_5`：If newbits cannot hold netnum, read the error — Terraform would reject it too.

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
- [ ] Disclaimer（YMYL 必备）— **本工具非 YMYL**；页脚可一句「对齐 HashiCorp 语义、非 console 替代」，不作医疗/财务 disclaimer
- [x] `03-locale-briefs.md` 已填（实现十语前）
