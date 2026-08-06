# 01 — 工具方向讨论

> 对照 `docs/2026-07-28-tool-direction.md`。一条工具只标一个**主方向**（A / B / C），不要硬凑三维交叉。

## 候选一句话

- 工具做什么：根据用户输入的域名与服务器 IP（可选），生成给 DNS 面板用的 **www 记录方案**（常见：apex `A`/`AAAA` + `www` `CNAME`；或双 `A`）；可选 **DoH 查询现有 A/AAAA/CNAME**；并把「apex 不能挂裸 CNAME」「DNS 解析 ≠ 301 规范主机名」「ALIAS/CNAME flattening」等坑讲清楚；**同页提供分场景 / 分云服务商操作教程**（可复制记录 + 面板点击路径），不拆近义 URL。
- 谁在什么任务里用：站长 / 前端 / SEO 在新站上线、迁移主机、给 Cloudflare / Vercel / Route 53 / 阿里云 / 自托管等加 `www`、或排查「www 打不开 / 证书不匹配」时，需要正确 DNS 记录模板、现网对照与具体面板步骤。

## 主方向判定

| 选项 | 是否匹配 | 理由 |
|---|---|---|
| **A** 浏览器 JS 能力 | **是（主）** | 方向 A.10「DNS over HTTPS · Worker + DoH」；记录模板生成为 Tier 0 前端；查询为 Worker 能力，与已有 `website-headers` / `ip-address` 同属开发者网络品类 |
| **B** 场景桥接 | 弱（次要） | 「域名 → 可访问 www」是场景，但工具核心是 DNS 记录生成 + 规则说明，不是两格式互通桥 |
| **C** 行业专属 | 否 | SEO/站长作为 Use cases，非单一垂直规范专页；不拆「仅 SEO」空壳 |

**选定主方向**：A  
**次要互链参考**：Related → `website-headers`（验证解析后响应/重定向）、`ip-address`（填 A 记录时对照出口/服务器 IP）；未来可互链 meta-serp / 重定向链工具

## 红线自检

- [x] 不是仅改 title/slug 的空壳变体（真实交互：生成记录表 + 可选 DoH 查询 + apex/CNAME/301 边界 + **分服务商操作步骤**）
- [x] 不是无增量机翻铺量（十语 locale brief + ≥3 轮）
- [x] 不依赖偏离定位的重后端（Worker 只做 DoH 查询代理；不托管用户 DNS、不写第三方控制台；教程为可见文案，链官方文档）
- [x] 长尾默认「一带多场景」，不轻易拆近义 URL（**拒绝** `/tools/www-cname`、`/tools/cloudflare-www-dns`、`/tools/vercel-www` 等薄页；用同页 Provider guides 模块覆盖）

## 方向专属检查

### 若选 A

- 成熟度 / 推荐包：✅✅；**记录生成**零依赖；**查询**用 Cloudflare DoH `https://cloudflare-dns.com/dns-query`（或 Google DoH）经 Worker `fetch`，避免浏览器 CORS
- Tier：生成 **Tier 0**；DoH 查询为 Worker 能力（与 headers 同类），首屏不阻塞
- CWV / 懒加载：首屏表单 + 即时生成记录；「Check current DNS」按钮后再请求 API

### 若选 B / C

- （不适用为主方向）

## 结论

- 继续立项：**是**
- 建议 slug：`add-www-to-dns`（`/tools/add-www-to-dns`）
- 与已上线工具关系：**新建**；Related：`website-headers`、`ip-address`
- 进入 `02-tool-info.md` 前仍缺的信息：无（交互形态、DoH、分服务商教程清单、合并策略已定；DoH 端点与限流在实现阶段定）
