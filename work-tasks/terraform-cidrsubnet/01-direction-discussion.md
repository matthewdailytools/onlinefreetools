# 01 — 工具方向讨论

> 对照 `docs/2026-07-28-tool-direction.md`。一条工具只标一个**主方向**（A / B / C），不要硬凑三维交叉。

## 候选一句话

- 工具做什么：在浏览器里对 `cidrsubnet(prefix, newbits, netnum)` 求值，得到与 Terraform 相同的子网 CIDR；次级对照 `cidrhost` / `cidrnetmask`。
- 谁在什么任务里用：写 VPC/子网 HCL 的云基础设施工程师，要在改 `terraform console` 之前核对新 bits 与 netnum 会切出哪一块。

## 主方向判定

| 选项 | 是否匹配 | 理由 |
|---|---|---|
| **A** 浏览器 JS 能力 | 实现落点，非主叙事 | Tier 0 位运算 + BigInt；通用 CIDR 计算器是**另一 slug**，本页卖点不是「浏览器能算掩码」 |
| **B** 场景桥接 | 否 | 不是格式 A→B 转换链；输入输出同属 CIDR/HCL |
| **C** 行业专属 | **是** | 岗位=IaC/云网络；行话=`cidrsubnet`/`newbits`/`netnum`；规范=HashiCorp 函数语义 + RFC 4632 |

**选定主方向**：C  
**次要互链参考**（可选，非立项条件）：实现用 A Tier 0；related 先链现有网络工具 `ip-address`、`domain-lookup`；未来 CIDR 簇上线后再加 `cidr-to-ip-range` / `ip-range-to-cidr`（本回合不建那些页）。

## 红线自检

- [x] 不是仅改 title/slug 的空壳变体（相对 SERP：可交互求值 + Terraform 错误边界 + 三函数对照 + 手算位步骤）
- [x] 不是无增量机翻铺量（十语须当地检索词；函数名可保留英文）
- [x] 不依赖偏离定位的重后端（纯本地计算）
- [x] 长尾默认「一带多场景」，不轻易拆近义 URL（`cidrhost`/`cidrnetmask`/`cidrsubnets`/registry 模块均不拆页）

## 方向专属检查

### 若选 A

- 成熟度 / 推荐包：（本页不选 A 为主方向）实现仍为零依赖 JS。
- Tier（0 / 1 / 2）：0
- CWV / 懒加载注意：无 WASM

### 若选 B

- 场景链（从哪到哪）：不适用
- 上游 / 下游工具：不适用

### 若选 C

立项三问（任一「否」则暂缓）：

1. 能否一句话说清「哪个岗位在什么业务里用」？是 — 云/平台工程师在 Terraform 里从父 CIDR 切子网（VPC、AZ、Kubernetes pod CIDR）。
2. 能否写出该行业才有的对照表/边界/标准？是 — HashiCorp `cidrsubnet` 参数语义、`netnum` 容量 `2^newbits`、与 `cidrhost`/`cidrnetmask` 分工、IPv4 前导零按十进制的历史行为、RFC 4632 前缀记法。
3. 实现是否落在可行浏览器技术且 CWV 可控？是 — IPv4 32-bit / IPv6 128-bit 整数运算，无文件、无 WASM。

## 结论

- 继续立项：是
- 建议 slug：`terraform-cidrsubnet`
- 与已上线工具关系（增强 / 新建 / Related）：**新建**。`ip-address` 是公网出口 IP（边缘请求），同意图不同，禁止 absorb；related 互链即可。
- 进入 `02-tool-info.md` 前仍缺的信息：无（官方函数签名与 docs 样例已核：`10.1.2.0/24`, 4, 15 → `10.1.2.240/28`）
- 用户意图审查（标 ready 前）：见 `02` 专节
