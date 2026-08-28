# CIDR Keyword Planner — 选词与 slug 重跑

- date: **2026-08-28 17:55**（按策略 §3.3 + **§3.3 G `title_gap_fallback`** 重跑；取代同文件旧 IA）
- locale / gl: en / us（Bing Keyword Planner）
- source: [`Cidr_KeywordPlanner_bing.csv`](./Cidr_KeywordPlanner_bing.csv)（345 行）
- SERP 依据: [`2026-08-28-cidr-longtail-serp.md`](./2026-08-28-cidr-longtail-serp.md) · [`2026-08-28-cidr-100plus-serp.md`](./2026-08-28-cidr-100plus-serp.md)
- path: 一律 `/tools/{slug}`；catalog **无** CIDR 工具；**禁止** absorb 进 `ip-address`
- 权威策略: [`../../2026-08-20-long-tail-gap-strategy.md`](../../2026-08-20-long-tail-gap-strategy.md) §3.3 / §3.3 G

## 0. 量级分桶（只筛选）

| 带 | n | 角色 |
|---|---|---|
| 1,000–1万 | 2 | 头词种子：`cidr calculator`、`cidr notation` — **禁作唯一 H1** |
| 100–1,000 | 31 | 须过 SERP；头词邻接高风险 |
| 10–100 | 258 | 长尾主战场 |
| 0–10 | 54 | FAQ/微尾；慎独立 build |

## 1. 先剔除（drop）

| 类型 | 例 | 处理 |
|---|---|---|
| 兽医同形词 | `cidr for cattle`、`7 day cidr protocol`、`cidr applicator`… | drop；FAQ 消歧 → 速查页 |
| 机构/地名 | `cidr iisc`、`cidr id haryana` | drop |
| 品牌导航 | `mxtoolbox cidr`、`cidr xyz calculator` | drop |
| SERP 噪声 | `ip cidr`、`network cidr`、`cidr network analy` | drop（what-is-my-ip / 企查查壳 / 截断词） |

## 2. 头词 `cidr calculator` → title_gap_fallback（收割页）

**触发**：大词 SERP 工具站密集（`head`）。同簇须 **一页** 承接，H1 ≠ `CIDR Calculator`。

### 2.1 候选长尾 title 缺口（Bing 前 5–10，人工）

| 候选 L（Planner） | 量级 | 区别词 | 前排 title 命中 | 缺口？ | 备注 |
|---|---|---|---|---|---|
| `cidr calculator ipv4` | 100–1k | `ipv4` | ≥2（best-calculators / cidrtools / …） | **否** | 不作主词 |
| `cidr to ip range` | 100–1k | `to` + `ip range` | ≤1（仅 IPAddressGuide 近义 “CIDR to IPv4 Address Range”） | **是** | **选用** |
| `cidr range calculator` | 100–1k | 近义大词 | 多为泛 Subnet/CIDR Calculator | 弱 | 并入选用页 |
| `cidr calc` / `cidr block calculator` | 100–1k | 近义 | 工具密集 | 否 | absorb |

**选用主词**：`cidr to ip range`  
**slug / H1**：`cidr-to-ip-range` / **CIDR to IP range**  
**verdict**：`defer`（簇内收割，**不占周 build**）+ `gap_notes=title_gap_fallback|seed=cidr calculator`  
**能力**：单块 IPv4：前缀→网段/广播/可用主机；并入 mask / visual / contains·overlap / 限额 expand / Proxmox 场景。

> 旧草案 slug `cidr-host-range` / H1 `IPv4 CIDR to host range` **废止**（非 Planner 主长尾；改用有量级+title 缺口的 `cidr to ip range`）。

## 3. 头词 `cidr notation` → 不建工具页

教育/速查 SERP；`what is cidr` / `cidr full form` / `cidr meaning` → **FAQ absorb** 进速查页。  
`cidr notation calculator`（100–1k）= 计算器近义 → absorb → `cidr-to-ip-range`。

## 4. 意图聚类 → 选词 / slug（权威表）

| 聚类 | 主选长尾（量级） | tier / 规则 | slug | H1 | verdict |
|---|---|---|---|---|---|
| IPv4 单块（头词收割） | **`cidr to ip range`**（100–1k） | head + **title_gap_fallback** | `cidr-to-ip-range` | CIDR to IP range | defer（不占周） |
| 逆向：起止→CIDR | **`ip range to cidr`**（100–1k） | long_gap（任务反向；Bing 曾误匹配，意图仍成立） | `ip-range-to-cidr` | IP range to CIDR | **build P0** |
| Terraform 求值 | **`terraform cidrsubnet`**（100–1k） | long_gap（docs 多、交互求值稀） | `terraform-cidrsubnet` | Terraform cidrsubnet | **build P0** |
| 私网/特殊前缀 | **`private cidr ranges`**（10–100） | long_gap（表多、交互分类薄） | `private-cidr-ranges` | Private CIDR ranges | **build P0** |
| 速查表 | **`cidr cheat sheet`**（100–1k） | mid_covered（title 常含 cheat sheet；靠**可交互表** IG） | `cidr-cheat-sheet` | CIDR cheat sheet | build P1 / 产能紧则 defer |
| IPv6 | **`ipv6 cidr`**（100–1k）主叙事；`ipv6 cidr calculator`（10–100） | mid_covered（计算器多）；**独立对象**不并 IPv4 | `ipv6-cidr` | IPv6 CIDR calculator | build P1（须 nibble IG） |
| VPC 分配 | **`aws vpc cidr`**（10–100） | long_gap 仅当做成**分配器**；`cidr block`=解释 mid | `aws-vpc-cidr-planner` | AWS VPC CIDR planner | build P2 |
| VLSM | `vlsm cidr subnet calculator`（10–100） | mid_covered / SERP 污染 | `vlsm-subnet-calculator` | VLSM subnet calculator | defer P2 |
| 掩码互转 | `subnet mask to cidr`（10–100） | head | — | — | absorb → `cidr-to-ip-range` + 速查表 |
| 展开/检查 | `cidr expander`、`cidr range checker`… | head | — | — | absorb → `cidr-to-ip-range` |
| 可视化 | `visual cidr calculator`… | brand/head | — | — | absorb → `cidr-to-ip-range` |
| CompTIA | `cidr chart comptia`（100–1k） | title 常无 comptia（可作 FAQ 钩子） | — | — | absorb → `cidr-cheat-sheet` |
| 定义/全称 | `what is cidr`… | head 教育 | — | — | absorb FAQ → `cidr-cheat-sheet` |

### 独立 URL 一览（最多 8；默认优先 absorb）

| 优先级 | slug | H1（主词） | 并入（不另建） | ≥3 IG | 周名额 |
|---|---|---|---|---|---|
| P0 | `terraform-cidrsubnet` | Terraform cidrsubnet | `cidrsubnet`、`cidrhost`、`cidrnetmask`、`hashicorp subnets cidr` | TF 边界一致；三函数对照；手算步骤 | **进攻** |
| P0 | `ip-range-to-cidr` | IP range to CIDR | `convert ip range to cidr`、列表汇总、`cidr aggregation` | 非对齐多前缀；乱序规范化；禁混族 | **进攻** |
| P0 | `private-cidr-ranges` | Private CIDR ranges | `private ip ranges cidr`、`private cidr`、`tailscale cidr` | RFC1918；CGNAT；ULA/文档前缀 | **进攻** |
| P1 | `ipv6-cidr` | IPv6 CIDR calculator | `ipv6 cidr`、notation/chart | 压缩展开；nibble 失败；/64/127/128 | 进攻（满 IG） |
| P1 | `cidr-cheat-sheet` | CIDR cheat sheet | `cidr chart`、`cidr notation chart`、comptia、what-is FAQ、兽医消歧 | 可点选 /8–/32；CompTIA 列；/31/32 脚注 | 进攻或 defer |
| P2 | `aws-vpc-cidr-planner` | AWS VPC CIDR planner | `vpc cidr`、`aws cidr block`、azure 开关 | 前缀上下限+保留地址；三 AZ；避 172.17 | 后期 |
| P2 | `vlsm-subnet-calculator` | VLSM subnet calculator | splitter/divider/vlsm calc | 大需求先切；失败；剩余表 | defer |
| 收割 | `cidr-to-ip-range` | CIDR to IP range | 头词邻接计算器、mask、visual、expand、checker、Proxmox | /31/32；按位与；限额展开 | **不占周** |

**slug 变更相对旧表**

| 旧 | 新 | 原因 |
|---|---|---|
| `cidr-host-range` | **`cidr-to-ip-range`** | title_gap 选用 Planner 长尾 `cidr to ip range` |
| `cidr-prefix-chart` | **`cidr-cheat-sheet`** | 主词对齐 Planner `cidr cheat sheet` |
| `vpc-cidr-planner` | **`aws-vpc-cidr-planner`** | H1/主词含 AWS，slug 一致 |

## 5. 周产能顺序（重跑后）

1. `terraform-cidrsubnet`  
2. `ip-range-to-cidr` 或 `private-cidr-ranges`  
3. `ipv6-cidr` 或 `cidr-cheat-sheet`  
4. `aws-vpc-cidr-planner` / `vlsm-subnet-calculator`  
5. `cidr-to-ip-range` 仅收割，不上进攻队列  

**未**开 `work-tasks/`。开工具须用户点名 slug。

## 6. 历史（superseded）

- 主题 hub `/cidr/...`：已取消  
- 旧 11-slug 上午表、旧 `cidr-host-range` / `cidr-prefix-chart` / `vpc-cidr-planner` 命名：由本节取代  
