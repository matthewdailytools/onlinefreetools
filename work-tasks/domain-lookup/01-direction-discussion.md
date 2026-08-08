# 01 — 工具方向讨论

> 对照 `docs/2026-07-28-tool-direction.md`。一条工具只标一个**主方向**（A / B / C），不要硬凑三维交叉。

## 候选一句话

- 工具做什么：输入域名，一次查出 **DNS 记录**（A/AAAA/CNAME/MX/NS/TXT/SOA）与 **注册信息**（经 RDAP：注册商、状态、到期/创建事件、权威 NS）；分区展示，单块失败可降级；说明 WHOIS 与 RDAP、隐私脱敏、DNS≠注册局 NS 等边界。
- 谁在什么任务里用：站长 / 运维 / 开发者在上线前核对解析、查域名是否注册/到期、对照注册局 NS 与现网 DNS、排查邮件 MX / 验证 SPF TXT 时。

## 主方向判定

| 选项 | 是否匹配 | 理由 |
|---|---|---|
| **A** 浏览器 JS 能力 | **是（主）** | 方向 A.10「DNS over HTTPS · Worker + DoH」；注册侧用 Worker `fetch` RDAP（HTTPS JSON）。与已有 `website-headers` / `ip-address` / `add-www-to-dns` 同属开发者网络品类 |
| **B** 场景桥接 | 弱（次要） | 「域名 → 可核对信息」是场景，但核心是查询能力而非两格式互通 |
| **C** 行业专属 | 否 | 站长/运维作 Use cases，非单一垂直规范专页 |

**选定主方向**：A  
**次要互链参考**：Related → `add-www-to-dns`（加 www 记录方案）、`website-headers`（解析后看 HTTP 头）、`ip-address`（对照客户端/出口 IP）

## 红线自检

- [x] 不是仅改 title/slug 的空壳变体（真实交互：域名输入 → 并行 DoH + RDAP → 结构化结果）
- [x] 不是无增量机翻铺量（十语 locale brief + ≥3 轮）
- [x] 不依赖偏离定位的重后端（Worker 仅代理 DoH/RDAP；不托管区、不写第三方控制台、不承诺完整 WHOIS 联系人）
- [x] 长尾默认「一带多场景」，不轻易拆近义 URL（**拒绝**单独 `/tools/dns-lookup`、`/tools/whois-lookup`、`/tools/rdap-lookup` 薄页；DNS + 注册信息同页分区）

## 方向专属检查

### 若选 A

- 成熟度 / 推荐包：✅✅；DoH 已有 `src/endpoints/dnsLookup.ts`（须扩类型）；RDAP 用公开 bootstrap（如 `https://rdap.org/domain/{name}`）或 IANA bootstrap + 权威 RDAP base
- Tier：Worker 查询能力（与 headers 同类）；首屏表单即时可用，点查询或进页样例后再打上游
- CWV / 懒加载注意：首屏不阻塞；并行请求 + 超时；结果分区渲染

### 若选 B / C

- （不适用为主方向）

## 结论

- 继续立项：**是**
- 建议 slug：`domain-lookup`（`/tools/domain-lookup`）
- 与已上线工具关系：**新建**；Related：`add-www-to-dns`、`website-headers`、`ip-address`；可复用并扩展现有 DoH 端点
- 进入 `02-tool-info.md` 前仍缺的信息：无（MVP 范围、合并策略、隐私边界已定；限流/缓存实现阶段定）
