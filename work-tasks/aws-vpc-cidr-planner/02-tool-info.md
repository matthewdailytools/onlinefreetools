# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`aws-vpc-cidr-planner`  
**路径**：`/tools/aws-vpc-cidr-planner`  
**主方向**：A（浏览器内 VPC CIDR → 多 AZ 子网分配）  
**YMYL**：否  
**Locale briefs**：见同夹 `03-locale-briefs.md`（状态 `i18n-done`）

> 选题：Planner P2；H1 = **AWS VPC CIDR planner**；long_gap **仅当做成分配器**。SERP `aws vpc cidr` 为品牌/控制台噪声。  
> Token：Page/i18n 串行于前序 CIDR slug phase=4 之后。

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：
  1. **AWS VPC CIDR planner** / **aws vpc cidr**（10–100）
  2. vpc cidr / vpc cidr block / aws cidr block / aws vpc cidr range
  3. Azure VNet 类似切分（次开关，不进 H1）
  4. 避 Docker `172.17.0.0/16`
  5. 每子网 AWS 保留 5 个地址
- 用户真实任务：给定 VPC CIDR（通常 `10.0.0.0/16`）和 AZ 数，得到不重叠的公有/私有子网 CIDR，并知道每子网 AWS 保留哪些地址。**不是**登录 AWS 控制台，也不是读「什么是 VPC」。
- [x] 竞品 SERP：品牌首页、Console 登录、Region 列表、偶发 docs；**缺可交互分配器**。
- [x] 缺口：① AWS /16–/28 上下限；② 每子网保留 .0/.1/.2/.3/末地址；③ 三 AZ 装箱失败时说清；④ 172.17 重叠警告；⑤ 无账号也能算。
- [x] 增益：
  - **①** Formula：等分或按 public/private 前缀装箱；AWS 保留 5 地址
  - **②** 边界：VPC 前缀越界、装不下、172.17 警告、Azure 保留规则开关
  - **③** Use cases：新账户三 AZ；避开 Docker 桥；对照 Terraform cidrsubnet 手算
  - **⑤** AWS 文档 VPC CIDR blocks；subnet sizing
  - **⑥** 本地隐私
  - **⑧** Example：`10.0.0.0/16` × 3 AZ
  - **⑨** related：`terraform-cidrsubnet`, `cidr-to-ip-range`
- [x] 长尾：合并 vpc cidr / aws cidr block。what-is VPC **不建页**。VLSM 通用切分 **不并入**（defer `vlsm-subnet-calculator`）。
- [x] 权威：
  - https://docs.aws.amazon.com/vpc/latest/userguide/vpc-cidr-blocks.html
  - https://docs.aws.amazon.com/vpc/latest/userguide/subnet-sizing.html
- [x] Use cases：① 绿场 `10.0.0.0/16` 三 AZ；② 警告 `172.17.0.0/16`；③ 把结果对照 Terraform `cidrsubnet`。
- [x] 边界：无 AWS API；不做路由表/NAT/IPv6 VPC；Azure 仅为保留地址计数差异。
- [x] Example 与样例一致。
- [x] Related：`terraform-cidrsubnet`, `cidr-to-ip-range`

### 计划勾选的 §3.1 维度（至少 3）

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | 装箱 + AWS 保留 5 地址 |
| 2 | 边界/失败 | /16–/28；装不下；172.17 |
| 3 | 场景语境 | 三 AZ / Docker / Terraform 对照 |
| 5 | 权威引用 | AWS VPC CIDR / subnet sizing docs |
| 6 | 本地隐私 | desc/FAQ |
| 8 | 数值示例 | 10.0.0.0/16 |
| 9 | 主题内链 | terraform-cidrsubnet、cidr-to-ip-range |

**硬性勾选**：① ② ③ ⑤ ⑥ ⑧ ⑨

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | CIDR 簇 · **P2** |
| 场景与行业 | 云网络：VPC → 子网 CIDR 分配 |
| 技术 | Tier 0；无 AWS SDK；`localProcessing: true` |
| Catalog `page.style` | **`opts`** |
| Title (en) | AWS VPC CIDR planner — Split a VPC into AZ subnets |
| Description 要点 | AWS VPC CIDR planner: paste a VPC CIDR (sample `10.0.0.0/16`) and pick 2 or 3 AZs to get public and private subnet CIDRs. Enforces AWS /16–/28 limits, subtracts the five reserved addresses per subnet, and warns if the block overlaps 172.17.0.0/16 (Docker’s default bridge). Optional Azure reserved-address counting. Runs on your device, not uploaded to a server. |
| Schema | WebApplication + BreadcrumbList |
| FAQ 要点 | ① VPC CIDR 允许哪些前缀？② 每子网为什么少 5 个地址？③ 为何警告 172.17？④ 和 Terraform cidrsubnet 什么关系？⑤ Azure 开关做什么？⑥ 是否上传/要 AWS 账号？ |
| Disclaimer / References | 非 AWS 官方架构建议；以当前 AWS 文档为准 |
| related | `terraform-cidrsubnet`, `cidr-to-ip-range` |
| 验收 | phase=0b；进页给出三 AZ 子网表；`verify:tool` |
| catalog 建议 | `category: developer`；`faqPrefix: tool_aws_vpc_cidr_planner`；`ymyl: false`；`localProcessing: true`；`page.style: opts` |

## 清单前检索覆盖优化（生成页面模块清单前必做）

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-08-31 |
| slug 结论 | **采用** `aws-vpc-cidr-planner`（H1 含 AWS；废止 `vpc-cidr-planner`） |
| 主检索词 → title/H1 | **AWS VPC CIDR planner** / **aws vpc cidr** → H1「AWS VPC CIDR planner — Split a VPC into AZ subnets」（主词在前；副标题任务向，禁止「AZ、Public、Private、Reserved」目录腔） |
| 次要关键词 → desc / FAQ / Use cases | `vpc cidr` / `vpc cidr block` / `aws cidr block` / `aws vpc cidr range`→desc + FAQ；Azure→次开关 + FAQ，不进 H1 |
| 用户搜索习惯判断 | 搜 aws vpc cidr 常落到控制台；本页用 **planner** 标明可交互分配。what-is VPC 有意不满足。 |
| 优化摘要 | 2026-08-31：H1 锁定 AWS VPC CIDR planner；分配器能力写进交互；Azure 降为开关；172.17 作为边界 IG。 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

## Ads / Keyword Planner 长尾（有分析时必做）

- [x] 已引用分析路径：`docs/seo/keywords/cidr/2026-08-28-cidr-keyword-planner.md`；CSV `aws vpc cidr` / `vpc cidr` / `vpc cidr block`

| 长尾词（Planner） | 归属 | 文案落点 | 功能覆盖 | 不覆盖理由（若有） |
|---|---|---|---|---|
| **aws vpc cidr**（10–100） | build 主叙事 | H1 含 AWS VPC CIDR | 输入 VPC CIDR → 子网表 | 控制台登录 **有意不满足** |
| vpc cidr / vpc cidr block / aws cidr block / aws vpc cidr range | absorb | desc/FAQ | 同分配器 | — |
| vpc cidr calculator | absorb | desc | 同左 | 不另建计算器 URL |
| Azure VNet | absorb 次模式 | FAQ + 开关 | 仅改保留地址计数 | 不进 H1 |
| cidr calculator / terraform cidrsubnet | 他 slug | FAQ | 不求值 cidrsubnet() | `terraform-cidrsubnet` |
| what is a VPC | 有意不满足 | FAQ 一句 | 不做教材页 | — |

- [x] 交互规格已按上表补齐能力

## 用户意图审查（标 ready 前必做）

| 项 | 结论 |
|---|---|
| 日期 | 2026-08-31 |
| 总判 | **满足**（主任务=分配器；控制台/what-is 有意不满足） |
| 主词搜索者任务 | 给定 VPC 块和 AZ 数，得到可粘贴的子网 CIDR 与可用主机（已扣保留），不是学 AWS 产品介绍。 |
| Ads/Planner 长尾任务 | aws vpc cidr / vpc cidr block → **能办成**分配；Azure → 开关能改保留规则；登录控制台 **有意不满足** |
| 满足之处 | 首屏：VPC CIDR + AZ 数 + 计算；结果表含 public/private；进页 `10.0.0.0/16` × 3 AZ。 |
| 超出 / 应划边界 | **不做** NAT/路由表画布、IPv6 双栈 VPC、账号探测。Azure 不得抢首屏标题。desc 禁止「long_gap/slug」自述。 |
| 缺口与已做优化 | How 先「按 AZ 切开 VPC」再填表；FAQ 补保留 5 地址与 172.17。 |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | |

## 交互规格（给实现用）

- 输入：VPC CIDR；AZ 数 2 或 3（默认 3）；平台 AWS（默认）/ Azure；按钮 Plan / Load sample / Clear / Copy table
- 输出：每 AZ 两行（public、private）CIDR；每行 usable hosts（AWS：总数−5；Azure：总数−5，规则不同但数量同为扣 5）；总览 VPC 前缀是否合法；172.17 重叠警告（可与成功结果同时出现）
- 装箱（默认）：将 VPC 均分为 `2 × AZ` 块（先一半给 public 槽位顺序分配，后一半 private），每块前缀相同；若 VPC 太小则失败并说明至少需要的前缀
- AWS 校验：VPC 前缀 **16–28**（含）；子网同样 16–28
- AWS 保留：网络、+1 router、+2 DNS、+3 future、broadcast（末地址）
- Azure 模式：仍切分，但 FAQ/结果注「Azure 保留前四个与最后一个」；不改 H1
- 172.17：若 VPC 或任一子网与 `172.17.0.0/16` 相交 → 警告（Docker 默认桥），不阻止显示结果
- 示例：**默认** `10.0.0.0/16`、3 AZ → 六个子网（实现须稳定顺序，写入 Example）
  - 建议实现：将 /16 切成 8 个 /19，使用前 6 个：`10.0.0.0/19` … `10.0.160.0/19` 标 AZ1-public … AZ3-private；或均分 6×/19 从 `10.0.0.0` 起
  - **定稿算法**：`2*azCount` 个等长子网，前缀 = vpcPrefix + ceil(log2(2*azCount))；从 VPC 网络地址顺序切
- **进页样例**：`loadSample()` 填 `10.0.0.0/16`、AZ=3、AWS，自动 Plan
- How：① 任务是把 VPC CIDR 按 AZ 切成公有/私有子网 → ② 粘贴 VPC CIDR 并选 AZ 数 → ③ 读表中每条子网与可用主机 → ④ 注意 172.17 警告与保留地址 → ⑤ 要函数求值去 Terraform cidrsubnet
- **实现防呆**：`opts`；`lint:tool-page -- --slug=aws-vpc-cidr-planner`

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
- [ ] Disclaimer — **非 YMYL**；非 AWS 官方架构建议
- [x] `03-locale-briefs.md` 已填
