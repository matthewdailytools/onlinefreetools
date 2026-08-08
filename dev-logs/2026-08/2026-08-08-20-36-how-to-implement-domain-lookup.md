Date: 2026-08-08 20:36
Summary: Explain how to implement domain information lookup on this Cloudflare Workers stack, layered by DNS / RDAP / HTTP.

[question]
如何实现根据域名查询相关信息

[try to solve]
本站已有 DNS 查询能力；「按域名查信息」可按数据层拆开做。

「域名相关信息」通常分几层，实现方式不同：

| 信息类型 | 典型字段 | 推荐实现（本站 CF Workers） |
|---|---|---|
| DNS 记录 | A/AAAA/CNAME/MX/NS/TXT/SOA | Worker 代理 DoH（已有骨架） |
| 注册信息 | 注册商、到期日、状态、NS | RDAP（优先于传统 WHOIS） |
| HTTP/站点 | 状态码、响应头、重定向 | 已有 `website-headers` |
| 证书 | 颁发者、SAN、到期 | Worker `fetch` TLS 侧或第三方 API（需评估） |
| IP 归属 | ASN、国家、ISP | 解析 A/AAAA 后再查 GeoIP API |

**已有能力**

- `GET /api/tools/dns-lookup?name=&type=` → `src/endpoints/dnsLookup.ts`
- 上游：Cloudflare DoH `https://cloudflare-dns.com/dns-query`
- 当前类型：仅 `A` / `AAAA` / `CNAME`
- 前端用法：`add-www-to-dns` 页并行查 apex/www

**推荐落地路径（本仓库）**

1. **DNS Lookup 工具页（最快）**  
   扩展 `dnsLookup.ts` 支持 MX/NS/TXT/SOA；新建 `dns-lookup` 工具页，输入域名 → 多类型并行查询 → 表格展示。

2. **Domain Whois / RDAP（注册信息）**  
   - 优先 RDAP：`https://rdap.org/domain/{domain}` 或 IANA bootstrap  
   - Worker 代理 + 超时/限流/缓存；解析 JSON 展示 registrar、events、status、nameservers  
   - 浏览器直连 WHOIS 端口 43 不可行；传统 WHOIS 文本难解析，RDAP 更适合 API

3. **组合「域名信息」页（可选）**  
   一次输入 → 并行：DNS 多类型 + RDAP +（可选）HEAD/GET 头信息；分区展示，失败单块降级。

**Worker 端注意点**

- 校验主机名（已有 `normalizeAndValidateHostname`），防 SSRF/垃圾查询  
- 超时（现 8s）、速率限制、可选短 TTL 缓存（KV）  
- 隐私：WHOIS/RDAP 常有 redaction；文案勿承诺完整联系人  
- 勿在客户端写死第三方密钥；密钥走环境变量

**最小调用示例（现有 API）**

```js
const res = await fetch(
  '/api/tools/dns-lookup?name=' + encodeURIComponent('example.com') + '&type=A',
  { headers: { Accept: 'application/json' } }
);
const data = await res.json();
// data.Answer[].data → IPv4 等
```

若要做成正式工具：立项 `work-tasks/dns-lookup/` 或 `domain-lookup/`，按 `tool-creation` 走 catalog/i18n/`build:site`。

[actions]
- 查阅 `src/endpoints/dnsLookup.ts`、`src/index.ts` 路由、`addWwwToDnsPage.ts` 前端调用
