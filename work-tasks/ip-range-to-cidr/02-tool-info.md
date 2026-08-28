# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`ip-range-to-cidr`  
**路径**：`/tools/ip-range-to-cidr`  
**主方向**：A（浏览器本地 IP 范围→CIDR 汇总）  
**YMYL**：否  
**Locale briefs**：见同夹 `03-locale-briefs.md`（状态 `briefs-ready`）

> 填完且状态为 `ready` 后，再按 `.cursor/rules/tool-creation.mdc` 实现。  
> IG 依据：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。  
> 选题：`docs/seo/keywords/cidr/2026-08-28-cidr-keyword-planner.md` P0；SERP：`docs/seo/keywords/cidr/2026-08-28-cidr-longtail-serp.md`。  
> Token 流程：A brief → B 工程+en → C 他语 → D verify:tool。

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：
  1. **ip range to cidr**（Planner 100–1k，**唯一 H1 核心**）
  2. convert ip range to cidr（→ desc + How）
  3. cidr aggregation / summarize IP ranges（→ FAQ + Use cases；列表多行）
  4. ip range to cidr calculator / converter（→ desc；不进 H1 堆词）
  5. IPv6 range to CIDR（→ 同页族检测 + FAQ；**不拆** ipv6-range-to-cidr）
- 用户真实任务：手里有起止地址（或 ACL 导出的多段），要得到覆盖闭区间的 CIDR 列表（非对齐时多条），可复制进防火墙/安全组；乱序起止要能纠正；IPv4 与 IPv6 不得 silently 混算。
- [x] 竞品 SERP 前 5–10 都提供了什么？
  - Bing 对 `ip range to cidr` 常误出「what is my IP」品牌页（SERP 噪声）
  - 真实计算器散见于 subnet/CIDR 大站的「range → CIDR」模式（常藏在泛计算器里）
  - 文档/博客讲公式，少强调非对齐多前缀与混族拒绝
- [x] 它们没讲清什么？（≥3 条缺口）
  1. **非对齐范围**：起止不在块边界时须拆成多条 CIDR，薄页常只给「大概一个 /xx」或失败。
  2. **乱序规范化**：用户粘贴 end&lt;start 时是否交换并提示。
  3. **混族拒绝**：同一输入里 IPv4+IPv6 必须明确报错，不能静默丢弃。
  4. **列表汇总**：多行范围一次出汇总 CIDR（aggregation），多数页只做单对起止。
  5. **多语言检索向**：SERP 几乎全英文。
- [x] 我们补哪 ≥3 条增益？（§3.1 编号 + 页面章节）
  - **①** Formula：贪心对齐算法（对齐位数 ∩ 剩余跨度 → 最大合法前缀）→ `#formula`
  - **②** 边界：空输入、非法 IP、起止混族、单地址=/32或/128、超大跨度行数上限、乱序交换提示 → 结果区 + FAQ
  - **③** Use cases：防火墙 ACL 起止→CIDR；云安全组；多段 access-list 汇总
  - **⑤** References：RFC 4632 §3.1（CIDR）；RFC 791 / 4291 背景可选
  - **⑥** 本地隐私：地址留在设备、不上传
  - **⑧** 固定 Example：`192.168.1.0 - 192.168.1.255` → `192.168.1.0/24`；非对齐例 `10.0.0.10 - 10.0.0.20` → 多条
  - **⑨** related ≥2 → `terraform-cidrsubnet`, `ip-address`
- [x] 长尾：合并进本页。禁止拆 `convert-ip-range-to-cidr`、`cidr-aggregation`、`ipv6-range-to-cidr`。反向「CIDR→IP range」留给未来 `cidr-to-ip-range`；FAQ 一句，实现前不假装有链。
- [x] 权威来源 URL：
  - https://www.rfc-editor.org/rfc/rfc4632#section-3.1
  - https://www.rfc-editor.org/rfc/rfc4291（IPv6 寻址）
- [x] 行业/场景 Use case 文案草稿：
  1. 防火墙/ACL：供应商导出 `10.1.2.10-10.1.2.40` → 多条 CIDR 写入规则。
  2. 云安全组：控制台只接受 CIDR，把起止粘过来汇总。
  3. 运维：多行私网段一次 aggregation，复制块进 Ansible/Terraform 变量（非 TF 函数求值——那是 related 页）。
- [x] 边界/失败案例草稿：空；非 IP；IPv4 与 IPv6 同行或同批混用；单 IP；乱序；结果行数超过安全上限（提示缩小范围）。
- [x] 结果区信息如何落到可索引 Example / FAQ：Example 写死对齐 + 非对齐两例；FAQ 写为何多条、乱序、混族、是否上传、与 cidr-to-ip-range 反向。
- [x] Related / 主题内链计划（≥2）：`terraform-cidrsubnet`（同簇 CIDR，intent=TF 函数）、`ip-address`（公网出口，不撞）。未来 `cidr-to-ip-range` 上线后再 CROSS_TOOL_UPDATE。

### 计划勾选的 §3.1 维度（至少 3）

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | Formula：对齐位 + 剩余跨度取最大 2^k 块 |
| 2 | 边界/失败 | 混族/非法/乱序/行数上限 |
| 3 | 场景语境 | Use cases ×3 |
| 5 | 权威引用 | RFC 4632、RFC 4291 |
| 6 | 本地隐私 | desc/FAQ |
| 7 | 多语言 | `03` 十语 |
| 8 | 数值示例 | 对齐 /24 + 非对齐多 CIDR |
| 9 | 主题内链 | terraform-cidrsubnet、ip-address |

**硬性勾选（上线至少 3）**：① ② ③ ⑤ ⑥ ⑧ ⑨

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | CIDR 簇 · 漏斗 P0 · 周进攻第 2 |
| 场景与行业 | 网络/安全：ACL、安全组、路由汇总 |
| 技术（包、Tier、本地处理） | **Tier 0** 原生 JS BigInt；无 npm；`localProcessing: true` |
| Catalog `page.style` | **`opts`** |
| Title (en) | IP range to CIDR — Turn start–end addresses into prefix lists |
| Description 要点 | IP range to CIDR: paste start and end (or multiple lines) to get covering CIDR prefixes. Sample: 192.168.1.0–192.168.1.255 → 192.168.1.0/24. Non-aligned spans become several prefixes. Addresses stay on your device and are not uploaded to a server. |
| Schema | WebApplication + BreadcrumbList |
| FAQ 要点（≥3） | ① 为何非对齐会出多条？② 起止写反会怎样？③ 能否混 IPv4/IPv6？④ 多行列表如何汇总？⑤ 是否上传？⑥ 与「CIDR→范围」反向工具关系 |
| Disclaimer / References | 非路由协议仿真；结果为覆盖闭区间的前缀列表；Refs：RFC 4632、RFC 4291 |
| related | `terraform-cidrsubnet`, `ip-address` |
| 验收 | `coverage:gate` 0b/2/4/all；进页样例= `192.168.1.0/24`；非对齐样例可点；混族报错；`verify:tool` |
| 工期粗估 | ~1 d（含十语） |
| 本地化核查 | 见 `03-locale-briefs.md` |
| catalog 建议 | `category: developer`；`scenario: developer`；`subject: network`；`faqPrefix: tool_ip_range_to_cidr`；`ymyl: false`；`localProcessing: true`；`page.style: opts` |

## 清单前检索覆盖优化（生成页面模块清单前必做）

> 规则：`.cursor/rules/tool-i18n-localization.mdc`「清单前检索覆盖优化」。未填本表不得勾下方「页面模块清单」，不得标 `ready`。

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-08-28 |
| slug 结论 | 保留 `ip-range-to-cidr`（Planner 主长尾 kebab；与 `cidr-to-ip-range` / `terraform-cidrsubnet` intent 分离） |
| 主检索词 → title/H1 | **ip range to cidr** → H1「IP range to CIDR — Turn start–end addresses into prefix lists」（主词在破折号前；副标题结果向，**不**写 start/end/IPv4/IPv6 控件目录） |
| 次要关键词 → desc / FAQ / Use cases | `convert ip range to cidr`→desc+How；`cidr aggregation` / 列表汇总→FAQ④+Use case 3；`ip range to cidr calculator`→desc 自然句不堆 H1；IPv6 range→FAQ③+同页支持 |
| 用户搜索习惯判断 | 工程师直接搜 `ip range to cidr` / `convert ip range to cidr`；H1 必须含该短语。禁止「Start IP、End IP、Aggregate」目录腔副标题。 |
| 优化摘要 | 2026-08-28：H1 锁定 Planner 主词；副标题改为「起止→前缀列表」结果向；aggregation / convert / IPv6 全部 absorb 进 desc/FAQ/Use cases，不拆 URL。 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

> 填完后验收：`npm run coverage:gate -- --slug=ip-range-to-cidr --phase=0b`（须绿才可标 `ready` / 勾下方页面模块清单）。

## 用户意图审查（标 ready 前必做）

> 规则：`.cursor/rules/work-tasks-tool-brief.mdc`「用户意图审查」。对照 `00` 原话 + 主检索词用户任务。未填不得 `ready`。

| 项 | 结论 |
|---|---|
| 日期 | 2026-08-28 |
| 总判 | **满足**（主任务=起止→CIDR 列表；列表汇总不抢主 UI；不做反向展开器/VPC 规划器） |
| 主词搜索者任务 | 打开页就要把 start–end（或粘贴多行）变成可复制的 CIDR 前缀，搞清非对齐为何多条，而不是学「本站两个输入框叫什么」。 |
| 满足之处 | 首屏：范围文本框（支持 `start - end` 多行）+ Convert / Sample / Clear / Copy；How 先讲「覆盖闭区间的前缀」再填表；进页自动跑 `192.168.1.0 - 192.168.1.255` → `192.168.1.0/24`。 |
| 超出 / 应划边界 | **不做** CIDR→主机列表展开器（留给 `cidr-to-ip-range`）；**不做** AWS VPC/VLSM 规划器；**不做**「what is my IP」。次模式「仅两框 start/end」若做也不得抢过主文本框。desc/How **禁止** doorway/slug 元叙述。 |
| 缺口与已做优化 | How：① 先说明输出是覆盖前缀列表 → ② 粘贴起止或多行 → ③ 读 CIDR / 复制 → ④ 混族与非法看错误。FAQ 补 aggregation 与反向工具一句。desc 含对齐样例 + 隐私句。 |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | |

## 交互规格（给实现用）

- 输入（首屏）：
  - 主控件：多行 textarea（每行一个范围：`A - B` / `A-B`；也接受单 IP 行当作 `/32` 或 `/128`）
  - 按钮：Convert / Load sample / Clear / Copy all CIDRs
- 输出（首屏）：
  - CIDR 列表（每行一条，规范网络地址）
  - 辅助：条数、是否发生过乱序交换的提示、族（IPv4/IPv6）
- 核心规则 / 算法：
  - 解析 IP → BigInt；同族校验；若 start&gt;end 则交换并记 hint
  - 贪心：在当前地址对齐允许的最大 2^k 且不越过 end 时取最大块，输出 `addr/prefix`，前进
  - IPv4 前缀 ≤32；IPv6 ≤128；前导零按十进制八位组
  - 结果行硬上限（如 4096）超出则报错提示缩小范围
  - **禁止**上传服务器
- 失败与边界：空；非法 token；混族；超限
- 示例 Input → Output：
  - `192.168.1.0 - 192.168.1.255` → `192.168.1.0/24`
  - `10.0.0.10 - 10.0.0.20` → 多条（如 `10.0.0.10/31` … 等，以实现为准并与 Example 文案一致）
- **进页样例（必填）**：默认填入对齐样例并 `loadSample()` 自动 Convert，结果区显示 `192.168.1.0/24`；与 H2 Example 对齐
- **实现防呆**：`page.style: opts`；`extraBodyHtml` 正则写 `\\w`；B 后 `npm run lint:tool-page -- --slug=ip-range-to-cidr`

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
- [ ] Disclaimer（非 YMYL）
- [x] `03-locale-briefs.md` 已填（实现十语前）
