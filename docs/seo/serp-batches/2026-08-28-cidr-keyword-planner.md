# SERP batch 2026-08-28-cidr-keyword-planner

- locale / gl: en / us（Bing Keyword Planner 导出；列名为中文「广告组 / 关键词 / 平均每月搜索量」）
- seed queries: `cidr` 及 Planner 展开（Calculator / Range / Chart / Cheat Sheet / Notation / IP range / Network / Subnet mask / Form / Protocol / Subnet / Block / AWS / cidrsubnet）
- method note: **Bing Keyword Planner CSV** `docs/seo/keywords/cidr/Cidr_KeywordPlanner_bing.csv`（另有 Chart / Notation 子集表，与主表重复，分析以主表为准）；只入库候选与量级；**无**完整 SERP HTML / 无账号凭证
- 批次规模: **345** 行；量级：`1,000–1万` ×2、`100–1,000` ×31、`10–100` ×258、`0–10` ×54
- 头词（1,000–1万）: `cidr calculator`、`cidr notation`
- 站内对照: catalog **无** CIDR 工具；`ip-address` 是「我的公网 IP」查询，**禁止**把 CIDR 计算 absorb 进该 slug。库存表 P1 `cidr-calculator` 仍未开工；pilot01 已标 `defer` / `head`

## 同形词噪声（先剔除）

Planner 把 **兽医 CIDR**（Controlled Internal Drug Release，牛羊同期发情栓）与 **网络 CIDR** 混在同一词根下。下列整簇 `drop`，不建工具、不抢这些词；消歧一句放在 `cidr-prefix-chart` FAQ（2026-08-28 修订：无主题页）：

- `cidr for cattle` / `cows` / `sheep` / `goats`、`cidr cattle insert`、`cidr applicator`、`cidr synchronization in cattle`、`7 day cidr protocol`、`cidr protocol` 广告组、`cidrs for cattle`
- 机构/地名撞名：`cidr iisc`、`cidr id haryana`
- 品牌导航：`mxtoolbox cidr`、`cidr xyz calculator`（指向竞品站，不作本站主词）

约 **15** 行兽医/协议噪声；其余按网络意图聚类。

## 意图聚类（pre-filter）

| 聚类 | 代表词（量级） | 用户任务 | SERP type notes | 建议落点 | draft verdict |
|---|---|---|---|---|---|
| 定义 / 全称 / 记法 | `cidr notation`（1k–1万）；`what is cidr`、`cidr meaning`、`cidr full form`、`what does cidr stand for`、`what is cidr in networking`（100–1k） | 搞懂 slash 记法与全称 | 维基 / Cisco / 云厂商文档占位 | 主题页正文 + FAQ；**不**单独建「what is」URL | absorb → `/cidr` |
| 速查表 / 作弊条 | `cidr chart`、`cidr chart comptia`、`cidr notation chart`、`cidr cheat sheet`（100–1k） | 查 /n → 掩码与主机数 | PDF / 图 / 速查页多，交互表参差 | 主题页 **可交互前缀表**（点选 /8–/32） | absorb → `/cidr` |
| 单块计算（头词） | `cidr calculator`（1k–1万）；`ip cidr calculator`、`subnet calculator cidr`、`cidr block calculator`、`cidr calc`、`cidr calculator ipv4`（100–1k） | 输入 IP+/n → 网段/广播/主机范围 | 网络工具站密集（含 Omni `/other/cidr`、Tooldone `cidr-calculator`） | 旗舰工具 `/cidr/calculator`；H1 **不**硬刚头词 | `defer`（`head`）；有簇后再上线 |
| 掩码互转 | `subnet mask to cidr`、`cidr to subnet mask`、`/24` `/27` `/30` 掩码问法（10–100） | 点分掩码 ↔ 前缀 | 与计算器同一算法 | 计算器模式/对照表 | absorb → calculator |
| 起止地址 ↔ CIDR | `ip range to cidr`、`cidr to ip range`（100–1k） | 一段起止 IP ↔ 最少 CIDR 列表 | 转换器页常见（mid） | 独立算法（贪心汇总 ≠ 单 CIDR 展开） | 候选 `/cidr/ip-range` |
| IP 列表汇总 | （Planner 弱；由 range 词下探） | 多 IP / 多段 → 最小 CIDR 集合 | 通用计算器常不做列表汇总 | 与 range 同页第二模式 | `build` 倾向 `long_gap` |
| 拆分 / VLSM | `cidr splitter`、`cidr divider`、`vlsm cidr subnet calculator`（10–100） | 一块网切成 N 个子网或按主机数 VLSM | 子网计算器常带 VLSM | 优先计算器 Tab；UI 差很大再拆 `/cidr/vlsm` | `defer`（`mid_covered`） |
| 包含 / 重叠 | `cidr checker`、`cidr range checker`、`cidr lookup`；`splunk cidrmatch`（10–100） | IP 是否在块内；两块是否重叠 | 安全组/ACL 调试；产品词 Splunk | 计算器模式 + FAQ；Splunk 作 Use case | absorb → calculator |
| IPv6 | `ipv6 cidr`（100–1k）；`ipv6 cidr calculator` / `chart`（10–100） | 128 位前缀、压缩记法 | IPv4 工具站常弱于 IPv6 | 计算器 IPv4/IPv6 开关；nibble 对齐进 FAQ | absorb → calculator（IPv6 边界可算缺口） |
| 云 VPC | `cidr block`、`vpc cidr`、`aws cidr`、`azure cidr`（10–100 为主；`cidr block` 100–1k） | 规划不重叠的 VPC/子网 | AWS 文档占「是什么」 | FAQ/场景 absorb；**三 AZ 分配器**才值得独立 URL | VPC 分配器 = 后期 `build` |
| Terraform | `terraform cidrsubnet`（100–1k）；`cidrsubnet`（10–100） | 求值 `cidrsubnet` / `cidrhost` / `cidrnetmask` | 官方文档 + SO 为主，专用求值器少 | `/cidr/cidrsubnet` | **`build` / `long_gap`** |
| 可视化 | `visual cidr calculator`、`cidr visualizer`（10–100） | 看二进制/八位组 | **cidr.xyz** 品牌占位 | 计算器内嵌可视化，不抢品牌词 | absorb → calculator |
| 私网 / 特殊前缀 | `private cidr ranges`、`private ip ranges cidr`、`tailscale cidr`（10–100） | RFC1918 / CGNAT 100.64/10 | 表格式答案 | 主题页对照表 | absorb → `/cidr` |
| 展开全部 IP | `cidr expander`、`cidr to ip list`、`cidr all ips`（0–100） | 列出块内地址 | /16 以上必须限额 | 计算器模式 + 上限/失败 FAQ | absorb → calculator |
| CompTIA / 课业 | `cidr chart comptia`、`vlsm vs cidr`（10–100） | 考试速查与对比 | 教程站 | 主题页 FAQ；禁止课业空壳页 | absorb → `/cidr` |
| 场景长尾 | `proxmox ip address cidr`、`hashicorp subnets cidr`、`pod network cidr`（10–100） | 产品配置里的 CIDR 字段 | 产品文档 | Use cases，不拆 URL | absorb → 对应工具 |

## URL 方案（`/主题/工具slug`）

**主题 slug = `cidr`。** 公开路径（默认语无前缀；他语 `/{lang}/cidr/...`）：

```
/cidr                     主题页（有交互：前缀速查表）
/cidr/calculator          旗舰：单地址+前缀计算（含 IPv6 / 掩码 / 可视化 / 包含检查 / 限额展开）
/cidr/ip-range            起止或 IP 列表 ↔ 最小 CIDR 集合（算法不同）
/cidr/cidrsubnet          Terraform cidrsubnet/cidrhost/cidrnetmask 求值
/cidr/vpc                 （可选后期）按云厂商约束做 VPC/AZ 子网分配
/cidr/vlsm                （默认不建）仅当拆分 UI 与计算器 Tab 有实质差异
```

Catalog `slug` 仍用 kebab（i18n 目录、隔离检查不变），例如 `cidr-calculator`；**`path` 写成** `/cidr/calculator`，不再用 `/tools/{slug}`。

### 主题页必须有的东西（禁止空壳 hub）

对齐 Omni 策略「不建空壳品类 hub」：`/cidr` **不是**只有链接的目录。

1. 一句消歧：网络 CIDR ≠ 兽医 CIDR  
2. 可交互 **/8–/32 表**（点选前缀 → 掩码、通配、主机数、典型用途）；覆盖 chart / cheat sheet / notation chart  
3. RFC1918 + CGNAT `100.64.0.0/10` 对照  
4. `/31` RFC3021、`/32` 单主机、IPv6 nibble 边界等失败/边界  
5. 子工具卡片（related ≥2 在各工具 catalog 互链）  
6. 与 `/tools/ip-address` 的差异说明（查公网 IP vs 算网段）

去掉 title 后，主题页仍应是「速查表 + 定义」；计算器页仍应是「对某一 IP 求网段」。二者不是换 H1 的 doorway。

### 禁止拆成独立 URL 的近义簇

- `cidr calculator` / `online cidr calculator` / `cidr calc` / `ip cidr calculator` / `cidr block calculator` / `cidr notation calculator`  
- `cidr to subnet mask` 与各 `/24` `/27` 掩码问法  
- `visual cidr`（做视图，不做新页）  
- `what is cidr` / `cidr full form` / `cidr stands for`  
- IPv4 vs IPv6 **默认同页开关**，不为 `ipv6 cidr calculator` 再建薄页  

### 工程前置（现行代码硬编码 `/tools/{slug}`）

未改平台前 **不能** 上线 `/cidr/...`。至少要让 catalog.`path` 驱动：

- `src/site/toolRegistrar.ts` 路由与 `_pages` 资产路径  
- `scripts/prerender-tool-pages*.mjs` / `gzip-pages.mjs`  
- sitemap / IndexNow / `validate-tool-seo` 对 path 的假设  

备选（若暂不改路由）：公开仍 `/tools/cidr`、`/tools/cidr-calculator`，主题簇靠 related 内链。与用户要求的 `/主题/工具slug` **不一致**，仅作过渡。

## Picked for pool (~10)

见 [`../keyword-daily-pool.tsv`](../keyword-daily-pool.tsv) 中 `source_batch=2026-08-28-cidr-keyword-planner` 行。缺口类（`long_gap`）为主；头词 `cidr calculator` 只记 `defer`。

## 本批结论（仅分析；未建 work-tasks）

1. **不要**用搜索量把 `cidr calculator` 当周 `build` 进攻项（维持 pilot01：`head` / `defer`）。  
2. **先定 IA**：一个主题页 + 最多 3～4 个算法不同的子工具；禁止 chart / notation / mask / ipv6 / visual 一词一页。  
3. 周产能候选优先级：`terraform cidrsubnet` → `ip 列表/起止汇总` → （平台就绪后）主题页速查表 → 再上旗舰 calculator（收割簇，不抢头词 H1）→ VPC 分配器视产能。  
4. 开 `work-tasks/` 须用户明确「创建 / 立项」某个 slug；本批只出方案。  
5. 事项跟进：[`../keyword-to-tool-tracker.md`](../keyword-to-tool-tracker.md)

---

## 修订 2026-08-28（原路由、无主题页、按意图拆 slug）

用户确认：① 公开 URL **维持** `/{lang}/tools/{slug}`；**不建** `/cidr` 主题页。② 按意图把长尾尽量拆成独立工具，但每页必须自备 **≥3 条 Information Gain**（九维里至少公式/规则、边界/失败、场景或对照表等，见 `tool-i18n-seo.mdc`）。

拆页自检仍有效：去掉 title 后正文与 Example 须明显不同；禁止只换 H1 的 doorway。下列 **11 个 slug** 是「能独立写满 IG」的上限，不是一周全建。

### 独立工具（path = `/tools/{slug}`）

| slug | H1 title（en） | 主任务（与邻页的差） | 并入的长尾（不另建 URL） | 至少 3 条 IG | `competition_tier` / 周 `build` |
|---|---|---|---|---|---|
| `cidr-to-host-range` | IPv4 CIDR to host range | 一个 IPv4 + 前缀 → 网络/广播/首末可用/主机数 + 二进制视图 | `cidr range calculator`、`cidr to ip range`、`cidr calculator ipv4`、`cidr block calculator`、`cidr calc`、`how to calculate cidr`、`visual cidr calculator`（视图非品牌词）、`proxmox ip address cidr`、`/31` `/32` 问法 | ① RFC3021 `/31` 两可用 vs 课业「减 2」② `/32` 无广播 ③ 该地址落在块内的逐步按位与 ④ 网络地址 vs 可用主机对照 | `head` 邻接 → **`defer`**（H1 **不用** CIDR Calculator） |
| `subnet-mask-to-cidr` | Subnet mask to CIDR | 点分掩码 ↔ 前缀；**不要求**输入 IP | `subnet mask to cidr`、`cidr to subnet mask`、`cidr 24/26/27/28/29/30 subnet mask`、`cidr notation subnet mask` | ① 非连续掩码（如 255.255.64.0）拒绝规则 ② 通配（wildcard）= 掩码取反，Cisco ACL ③ /8–/32 掩码↔前缀对照（列与 chart 页不同：含二进制行） | `mid_covered` → 有独立失败态可建，不占头词周名额 |
| `cidr-prefix-chart` | CIDR prefix chart | 无 IP 输入的可点选速查表（考试/海报意图） | `cidr chart`、`cidr chart comptia`、`cidr notation chart`、`cidr cheat sheet`、`cidr notation`（头词只进 FAQ/首段，不作唯一 H1）、`what is cidr` / `cidr full form` / `cidr stands for`、`vlsm vs cidr`（对比 FAQ）、兽医 CIDR 一句消歧 | ① CompTIA 常见前缀用途列 ② classful A/B/C 默认掩码叠在 CIDR 上 ③ `/31` `/32` 脚注与课业表差异 ④ IPv6 `/48` `/64` `/128` 迷你表（不是完整 IPv6 计算器） | `mid_covered`（PDF 多）；交互+考试列才有增量 |
| `ip-range-to-cidr` | IP range to CIDR | 起止 **或** IP 列表 → **最少** CIDR 集合（贪心汇总） | `ip range to cidr`、`convert ip range to cidr`、`ip range to cidr converter`、`cidr aggregation`、列表汇总（Planner 弱，作第二输入框） | ① 非对齐范围会输出 **多条** CIDR 的逐步合并 ② 重叠/乱序输入的规范化 ③ IPv4 与 IPv6 **不可混族** 失败 | `long_gap`（列表模式）/ 起止转换 `mid_covered` → **`build` 优先列表模式** |
| `cidr-to-ip-list` | CIDR to IP list | 枚举块内地址（≠ 只显示首末） | `cidr expander`、`cidr to ip list`、`cidr all ips` | ① 浏览器上限（建议默认拒 `/16` 以上或截断并说明原因）② 可选跳过网络/广播地址 ③ 导出 CSV 与复制清单的边界 | `long_gap` → **`build`** |
| `ipv6-cidr-calculator` | IPv6 CIDR calculator | 128 位前缀：压缩、展开、首末、块大小 | `ipv6 cidr`、`ipv6 cidr calculator`、`ipv6 cidr notation`、`ipv6 cidr chart` | ① 压缩 ↔ 展开对照 ② nibble 对齐失败（云 DNS/反解）③ `/64` SLAAC vs `/127` 点对点 vs `/128` 单地址 ④ 禁止把 IPv4 页换 title 交差 | `long_gap`（相对 IPv4 头词站）→ **`build`** |
| `vlsm-subnet-calculator` | VLSM subnet calculator | 按主机数需求把一块切成不等长子网 | `cidr splitter`、`cidr divider`、`vlsm cidr subnet calculator`、`cidr vlsm calculator` | ① 装箱顺序（大需求先切）与浪费地址 ② 未对齐前缀的失败 ③ 剩余未分配空间表 | `mid_covered` → 可建但不排头 |
| `cidr-overlap-checker` | CIDR overlap checker | IP∈块；两块包含/重叠/相邻 | `cidr checker`、`cidr range checker`、`cidr lookup`、`splunk cidrmatch`（Use case） | ① 包含 vs 重叠 vs 相邻可合并 三态 ② 安全组「CIDR overlap」类报错对照 ③ IPv4/IPv6 分族；非法字面量失败 | `long_gap` → **`build`** |
| `terraform-cidrsubnet` | Terraform cidrsubnet | 求值 `cidrsubnet` / `cidrhost` / `cidrnetmask` | `terraform cidrsubnet`、`cidrsubnet`、`hashicorp subnets cidr` | ① `newbits`/`netnum` 越界错误与 Terraform 一致 ② 三函数同页对照，禁止按函数拆 URL ③ 与「手算切子网」步骤对照 | `long_gap` → **`build`（本簇最优先）** |
| `vpc-cidr-planner` | AWS VPC CIDR planner | 在 VPC 块内按 AZ/厂商约束生成不重叠子网 | `vpc cidr`、`aws cidr block`、`vpc cidr block`、`aws vpc cidr range`、`azure cidr`（**同页厂商开关**，不拆 Azure 薄页） | ① AWS IPv4 `/16`–`/28`、每子网保留 5 地址 ② 三 AZ 均分与剩余 ③ 次级 CIDR、避开 `172.17.0.0/16` Docker 默认 ④ Azure 最小前缀与 AWS 不同（开关内，不是第二 URL） | `long_gap` → **`build`（后期）**；禁止 H1=`what is cidr in aws` |
| `private-cidr-checker` | Private CIDR range checker | 判断 IP/块属于哪类特殊范围 | `private cidr ranges`、`private ip ranges cidr`、`private cidr`、`tailscale cidr` | ① RFC1918 三块 ② CGNAT `100.64.0.0/10`（含 Tailscale）③ 链路本地 / ULA / 文档前缀 `2001:db8::/32` | `long_gap` → **`build`** |

`related`：上线时簇内互链 ≥2（例如 host-range ↔ mask ↔ chart；range-to-cidr ↔ overlap ↔ vpc；terraform ↔ vlsm）。

### 明确不拆（近义 / 无独立 IG / 非工具）

| 词 / 问法 | 原因 | 并入 |
|---|---|---|
| `cidr calculator`、`online cidr calculator`、`ip cidr calculator`、`cidr notation calculator` | 头词或同意图换词；H1 硬刚即 doorway | `cidr-to-host-range` 次词 / FAQ |
| 每个前缀一页（`24 cidr`、`27 cidr subnet mask`…） | 同一对照表的切片 | chart 或 mask 页的行/锚点 |
| `cidr to ip range` vs host range | 都是「一块 → 起止」 | `cidr-to-host-range` |
| 起止汇总 vs IP 列表汇总 | 同一贪心覆盖算法 | `ip-range-to-cidr` 两输入框 |
| `cidrhost` / `cidrnetmask` 各一页 | 同一 Terraform 辅助函数族 | `terraform-cidrsubnet` |
| AWS / Azure /「cidr block」说明页 | 文档意图；无独立分配 UI 就是空壳 | `vpc-cidr-planner` 或 FAQ |
| `visual cidr` / `cidr xyz` | 品牌导航或纯视图 | host-range 内嵌二进制；不抢品牌 |
| `mxtoolbox cidr` | 品牌 | drop |
| 兽医 CIDR、`cidr iisc`、`cidr id haryana` | 同形词 | drop；chart 页一句消歧 |
| 纯「what is / full form」无控件 | 不可做成工具 | `cidr-prefix-chart` FAQ |

### 周产能（仍 ≤1–2，只给 `long_gap`）

1. `terraform-cidrsubnet`  
2. `ip-range-to-cidr`（突出列表汇总）或 `cidr-overlap-checker`  
3. `ipv6-cidr-calculator` / `cidr-to-ip-list` / `private-cidr-checker`  
4. `vpc-cidr-planner`  
5. chart / mask / VLSM / IPv4 host-range：可建但 **不** 用周名额去抢 `cidr calculator` / `cidr notation` 头词  

**未**开 `work-tasks/`。开工具须用户点名 slug。

