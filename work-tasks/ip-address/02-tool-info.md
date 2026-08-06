# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`ip-address`  
**路径**：`/tools/ip-address`  
**主方向**：A  
**YMYL**：否  
**性质**：存量缺口增强（非新产品）  
**Locale briefs**：见同夹 `03-locale-briefs.md`（状态 `i18n-done`）

> IG 依据：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。  
> 缺口清单：`docs/2026-07-28-per-tool-dev-seo-plans.md` §C。  
> 本地化：`tool-i18n-localization.mdc`。

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：
  1. what is my ip  
  2. show my ip address / my public ip  
  3. 查询我的 IP / 公网 IP  
  4. IP behind VPN / proxy（局限场景，FAQ）  
  5. IPv4 vs IPv6（FAQ，不拆页）
- 用户真实任务：快速看到当前公网出口 IP，并理解「这是边缘看到的地址」及代理/VPN 影响。
- [x] 竞品 SERP 前 5–10 都提供了什么？  
  大号 IP 展示、粗略地理位置、ISP、「免费」堆词；部分附 IPv6。
- [x] 它们没讲清什么？（≥3 条缺口）  
  1. IP 如何从请求/边缘获得（技术路径）  
  2. VPN/代理/公司网关下显示的是出口而非设备局域网  
  3. title/description 同义词堆砌（people-first 差）  
  4. 与「查别人 IP / IP 归属库」能力边界  
  5. 隐私：是否记录访问者 IP
- [x] 我们补哪 ≥3 条增益？（§3.1 编号 + 页面章节）  
  - **①** How：边缘/请求属性如何得到 IP → `#how`  
  - **②** 边界：VPN、代理、CDN、双栈 → `FAQ`  
  - **⑥** 隐私：是否持久化访问 IP → `FAQ`  
  - **文案**：减少关键词堆砌；title 一个主意图 + 品牌  
  - **⑨** Related 保持 catalog
- [x] 长尾：合并。理由：同一展示流程；VPN/IPv6 用 FAQ。
- [x] 权威来源 URL：  
  - https://www.rfc-editor.org/rfc/rfc791（IPv4 背景，可选简述）  
  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For（说明不可盲信客户端伪造头；本站以边缘可信来源为准）
- [x] 行业/场景 Use case 文案草稿：确认 VPN 是否生效；向客服报公网 IP；开发联调来源限制  
- [x] 边界/失败案例草稿：仅局域网；多出口负载；IPv6-only 客户端  
- [x] 结果区 → Example/FAQ：固定说明「所示为边缘所见公网地址」+ FAQ  
- [x] Related：`website-headers`, `markdown-to-html`（catalog）

### 计划勾选的 §3.1 维度

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | How：边缘如何读取客户端 IP |
| 2 | 边界/失败 | FAQ：VPN/代理/网关局限 |
| 3 | 场景语境 | Use cases ×2–3 |
| 6 | 本地隐私 | FAQ：是否记录 IP |
| 7 | 多语言 | `03` briefs；去堆词 |
| 9 | 主题内链 | related 保持 |

**计划硬性增益**：① ② ⑥（+去堆词作为 people-first）

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | C05 开发者 · 方向 A · **存量增强** |
| 场景与行业 | 网络排查；VPN 出口确认；轻量开发联调 |
| 技术 | 边缘请求属性；Tier 0 |
| Title (en) | 单一主词（What Is My IP）；**禁止**同义词堆砌 |
| Description | ≥120；说明边缘获取 + VPN 局限一句 |
| Schema | WebApplication + BreadcrumbList |
| FAQ（≥3） | 如何获得；VPN/代理；是否记录；IPv4/IPv6 |
| Disclaimer / References | 非 YMYL；MDN/RFC 可选 |
| related | `website-headers`, `markdown-to-html` |
| 验收 | `lint:seo`；How+局限 FAQ；title 不堆词；`03` ≥3 轮 |
| 工期粗估 | ~0.5d 文案为主 |

## 交互规格（给实现用）

- 输入：无（打开即显）或刷新
- 输出：公网 IP 字符串；可选协议族提示
- 核心规则：边缘可信客户端地址；不把可伪造头当唯一真相
- 失败与边界：无法解析时可见错误；说明不等于地理位置精度承诺
- 示例：文案示例「边缘所见：203.0.113.10」（文档用保留地址）

## 页面模块清单（实现待定 — 未勾选）

- [ ] H1 + 一句话摘要（去堆词）
- [ ] 首屏工具交互区
- [ ] How it works（**边缘如何获得 IP**）
- [ ] Formula / Rules（可选）
- [ ] Example
- [ ] Use cases（2–3）
- [ ] FAQ ≥3（VPN/代理 + 隐私）
- [ ] Related tools ≥2
- [ ] References ≥1（可选但建议）
- [ ] Disclaimer — 非 YMYL
- [ ] `03-locale-briefs.md` 已填
