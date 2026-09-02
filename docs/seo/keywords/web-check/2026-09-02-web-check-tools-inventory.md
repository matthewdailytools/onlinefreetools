# Web-Check 工具清单 × 用户作业 × 搜索词分析

- date: **2026-09-02 14:40**（Asia/Shanghai）
- target: [https://github.com/lissy93/web-check](https://github.com/lissy93/web-check)
- hosted: [web-check.xyz](https://web-check.xyz) · mirror [web-check.as93.net](https://web-check.as93.net)
- method: README Features 全量对照（仓库自称清单可能落后于代码）；对照本站 catalog；**未**跑 Google/Bing SERP、**未**导出 Keyword Planner、**未**抄对方正文
- purpose: 把「一站式 OSINT 看板」拆成用户真实作业与搜索问法，决定 absorb / defer / drop；**禁止**换皮成空壳 dashboard

> **一句话**：Web-Check 的产品是「贴一个 URL，一次出 40 项侦察结果」；用户进搜索引擎时几乎总是「一次只办一件事」（whois / ssl checker / dns lookup）。本站先判能力是否已实现——已实现才 absorb；未实现的校验须实现（生成≠校验）。头词禁硬刚 H1，用场景 title + IG 承接；不克隆看板。

---

## 0. 产品定位（观测）

| 维度 | Web-Check（观测） | 本站（对照） |
| --- | --- | --- |
| 形态 | 单输入框 → 并行跑数十个 API job → 卡片墙 | 一 URL 一作业；进页即该场景 |
| 自称用户 | OSINT / 安全研究 / 站长自查 | 搜索意图工具（算/转/生成/校验） |
| 运行 | Node 服务 + Chromium / traceroute / 可选付费 API | Cloudflare Pages + Workers；禁端口扫描与内网探测 |
| 搜索入口 | 品牌词 `web check`、品类词 `website analyzer` | 用户作业长尾，不靠品牌 OSINT 品类 |
| 分发 | 自托管 + Docker + 34k+ GitHub stars | 十语工具页 |

**对本站的硬结论**：`website osint tool` / `website analyzer dashboard` 是品类头词 + `*-pack` 形态，违反选题 §3.3 H。即使 Workers 能串起若干 fetch/DoH job，也**不得**做「Web-Check 换皮」当周 build。

---

## 1. 两类用户（工具用户 ≠ 搜索用户）

Web-Check 的 UI 服务的是**已经知道要侦察某个站点**的人。搜索用户通常**还没有看板**，只带着一个故障或一个检查项进来。

| 角色 | 进 Web-Check 时想做什么 | 进 Google 时实际怎么搜 | 本站策略 |
| --- | --- | --- | --- |
| 站长 / 运维 | 新站上线，一次看 SSL、跳转、头、DNS | `ssl checker`、`www not working dns`、`redirect http to https` | 拆作业；已有 headers / www-dns / domain-lookup |
| SEO | 看 robots、sitemap、社媒标签、Lighthouse | `robots.txt checker`、`open graph debugger`、`pagespeed insights` | 生成器与检查器分开覆盖；CWV 页不是 Lighthouse |
| 邮件管理员 | 看板里顺带看 SPF/DMARC | `dmarc checker`、`spf record lookup` | 头词；MxToolbox 占位；未 SERP → defer |
| 安全 / OSINT | 关联主机、端口、WAF、归档、威胁列表 | `whois lookup`、`what cms is this site using`、`port scanner` | whois absorb；端口/WAF/威胁 **drop** |
| 普通访客 | 很少用看板 | `what is my ip`、`is this website safe` | 前者 absorb `ip-address`；后者 YMYL drop |

---

## 2. 能力清单 → 作业类型（禁止 1 job = 1 URL）

来源：README Features（含 Domain Info 与 Whois 重复描述）。「用户任务」写成情境+动作+结果。

| # | Web-Check 卡片 | 用户任务（情境+动作+结果） | 作业簇 | 本站落点 | 可行性（Workers） |
| ---: | --- | --- | --- | --- | --- |
| 1 | IP Info | 已知域名，查出 A 记录 IP 及 ASN | A 身份 | `domain-lookup`（A/AAAA） | 是（DoH） |
| 2 | Server Location | 用该 IP 看机房大致国家/城市 | A 身份 | 无「查别人家 IP 地理」页；`ip-address` 只显示**访客出口** | 有限（无商用地图库） |
| 3 | Server Info | 看 Server 头 / ASN / 主机商 | A 身份 | `website-headers`（Server 头） | 是（fetch） |
| 4 | Associated Hosts | 同 IP 还有哪些主机名 | A 身份 | 无；需 Shodan 类 API | 否（密钥+滥用面） |
| 5 | Global Ranking | 站点是否进入 Tranco 前百万 | A 身份 | 无 | 可选公开列表，非核心作业 |
| 6 | Whois / Domain Info | 查注册商、到期日、状态 | A 身份 | `domain-lookup`（RDAP） | 是 |
| 7 | DNS Records | 查 A/MX/NS/CNAME 等 | B DNS | `domain-lookup` | 是 |
| 8 | TXT Records | 读 TXT（含验证串、SPF） | B DNS | `domain-lookup` | 是 |
| 9 | DNSSEC | 判断区是否签名 | B DNS | 可 FAQ；现页未做 DS/RRSIG | 部分（DoH DNSSEC 标志） |
| 10 | DNS Server | 权威 NS 是谁、是否 DoH | B DNS | `domain-lookup` NS | 部分 |
| 11 | Email Configuration | 解析 SPF / DKIM / DMARC / BIMI | B 邮件认证 | **无独立页** | 是（读 TXT；头词 defer） |
| 12 | SSL Chain | 看证书链、颁发者、到期 | C TLS | **无** | Workers 难暴露完整链 |
| 13 | TLS Cipher / Config / Handshake | 评密码套件与客户端兼容 | C TLS | 无 | 否（需 openssl/ssllabs 级探测） |
| 14 | HSTS | 有无 Strict-Transport-Security / preload | C TLS | `website-headers` | 是（响应头） |
| 15 | Headers | 拉响应头 | D HTTP | `website-headers` | 是 |
| 16 | Cookies | 看 Set-Cookie 的 Secure/HttpOnly/SameSite | D HTTP | `website-headers`（头里已有 Set-Cookie） | 是；评分可 absorb |
| 17 | HTTP Security Features | 给 CSP/HSTS/XFO 等打分 | D HTTP | `website-headers` | 是；SecurityHeaders.com 为头词 |
| 18 | Redirect Chain | 从输入 URL 走到最终 URL | D HTTP | `website-headers`（已跟最多 5 hop） | 是 |
| 19 | Server Status | 是否在线 | D HTTP | `website-headers` 状态码 | 是 |
| 20 | Crawl Rules | 拉取并解释 robots.txt | E 抓取文件 | `robots-txt-generator` 现为**生成**；检查场景覆盖不足 | 是（fetch `/robots.txt`） |
| 21 | Listed Pages | 解析 sitemap.xml | E 抓取文件 | `sitemap-xml-generator` 现为**生成** | 是 |
| 22 | Linked Pages | 抽出页面 a[href] | E 抓取文件 | `on-page-seo-checker` 部分重叠 | 有限（body 体积/超时） |
| 23 | Social Tags | 读 OG/Twitter 卡 | E 社媒预览 | `open-graph-preview`、`meta-tag-generator`、`on-page-seo-checker` | 是 |
| 24 | Quality Metrics | 跑 Lighthouse 四维分数 | E 性能 | `core-web-vitals-checker` 是**粘贴 LCP/INP/CLS 本地分级**，不是 URL 实验室测试 | 否（需 Chrome） |
| 25 | Tech Stack | Wappalyzer 指纹 | F 指纹 | 无 | 指纹库大；头词 BuiltWith |
| 26 | Site Features | 页面是否用了某类 API | F 指纹 | 无 | 与 Tech Stack 同簇 |
| 27 | Firewall Detection | 猜 WAF 厂商 | F 指纹 | **drop** | 双用途/对抗探测 |
| 28 | Screenshot | 远程截图 | F 侦察 | 无 | 需 Chromium |
| 29 | Archive History | Wayback 时间线 | F 侦察 | 无 | 官方 archive.org |
| 30 | Social Presence | 验证 rel=me / 社交反链 | F 侦察 | 无 | 多平台公开 API，非搜索刚需 |
| 31 | Security.txt | 找 `/.well-known/security.txt` | F 披露 | 无独立页 | 是（一次 GET）；长尾候选 |
| 32 | Open Ports | 扫 80/443/22… | G 网络探测 | **drop** | 滥用；平台 ToS |
| 33 | Traceroute | 逐跳 ICMP/UDP | G 网络探测 | **drop** | Workers 无 raw socket |
| 34 | Block Detection | 用家庭/广告拦截 DNS 解析该域 | H 声誉 | **drop** | 多解析器可做，意图弱 |
| 35 | Malware & Phishing | 对照威胁情报列表 | H 声誉 | **drop** | YMYL + 第三方名单 |
| 36 | Carbon Footprint | 估页面碳排 | I 杂项 | **drop** | WebsiteCarbon 头词 |

---

## 3. 用户作业簇（权威聚类）

同主控件 / 同一次「贴 URL 或域名 → 一种结果」必须一页。下表是**覆盖义务**，不是建页清单。

### 簇 A — 这个域名是谁的、解析到哪

- **默认场景**：手头有 `example.com`，要注册商/到期/A 记录。
- **搜索词（代表）**：`whois lookup`、`domain lookup`、`dns lookup`、`check domain expiry`、`a record lookup`。
- **覆盖**：`domain-lookup`（H1 已是 lookup；whois 为用户口语句，RDAP 实现）。
- **不要拆**：Whois 与 Domain Info、TXT 与 DNS、IP Info 与 A 记录。
- **不覆盖**：同 IP 反查主机（Associated Hosts）、Tranco 排名。

### 簇 B — 邮件会不会被伪造 / 能不能发出去

- **默认场景**：收件失败或怀疑钓鱼，要看该域 SPF/DKIM/DMARC 策略。
- **搜索词**：`dmarc checker`、`spf record lookup`、`dkim checker`、`mx lookup`、`bimi checker`。
- **覆盖**：现页仅 DNS TXT **原文** → **未实现**「解析+解释策略」作业。
- **Verdict**：`build` 须实现邮件认证解释（建议一页承接 SPF/DKIM/DMARC）；H1 用场景/G 长尾，禁 `email-pack`；`competition_tier=head` 只约束进攻 H1，不取消实现。

### 簇 C — 浏览器打开是不是 HTTPS、证书会不会报警

- **默认场景**：自己站点或客户站点，要确认证书未过期、链完整、是否强制 HTTPS。
- **搜索词**：`ssl checker`、`ssl certificate checker`、`check ssl expiry`、`hsts preload`。
- **覆盖**：HSTS 头 → 可与 `website-headers` 同 fetch（**已实现**头检查）；证书链 / 密码套件 → **未实现** → **须实现**（能力边界写 Rules）；H1 禁硬刚 SSL Labs 头词。

### 簇 D — 这个 URL 实际返回了什么

- **默认场景**：缓存不对、CORS 失败、被跳到 www/https、安全头缺失。
- **搜索词**：`http headers checker`、`check response headers`、`redirect checker`、`security headers checker`、`cookie httponly samesite`。
- **覆盖**：`website-headers`（已 fetch、跟跳转、展示头）。Cookies / 安全头打分 / 在线状态 = 同页次模块或 FAQ，**禁止**拆 `security-headers-checker` doorway。

### 簇 E — 爬虫和分享卡片看不看得见

| 子作业 | 搜索词 | 现页能力 | 正确覆盖 |
| --- | --- | --- | --- |
| 写一份 robots.txt | `robots.txt generator` | `robots-txt-generator` **已实现生成** | absorb 生成器 |
| **检查线上** robots.txt | `robots.txt checker` | **未实现** fetch+解释 | **须实现** checker；**禁止**并进生成器 |
| 写 sitemap.xml | `xml sitemap generator` | `sitemap-xml-generator` **已实现生成** | absorb 生成器 |
| **检查线上** sitemap | `sitemap checker` | **未实现** | **须实现** checker；禁并进生成器 |
| 预览分享图/标题 | `open graph preview` | `open-graph-preview` 等 **已实现** | absorb |
| 实验室性能分 | `pagespeed insights` | CWV 粘贴分级 ≠ Lighthouse | 划界；不进攻 PSI 头词 |

### 簇 F — OSINT 指纹与历史（多数不做）

Tech stack / WAF / 截图 / Wayback / 社交账号互证：多数 `drop`。  
`security.txt checker`：Bing 已确认专用校验器墙（`head`）→ **仍须实现** fetch+解释（能力未有）；H1 用场景句，禁 pack，不抢头词 KPI。

### 簇 G/H/I — 探测、威胁名单、碳排

端口扫描、traceroute、钓鱼名单、「网站安全吗」、碳足迹计算器：`drop`（滥用 / YMYL / 头词 / 非本站方向）。

---

## 4. 搜索关键词分析（无 Planner 量；按意图与占位）

量级带为**行业经验分桶**（head / mid / long），**不是** Keyword Planner 数字。Bing 人工复核见 [`2026-09-02-web-check-bing-serp.md`](./2026-09-02-web-check-bing-serp.md)：**15/15 usable，0 long_gap**。`security.txt checker` 库存「可能长尾」已作废（专用校验器墙）。`ssl certificate checker` 的 organic title 已含该短语，**§3.3 G 不触发**。

### 4.1 用户怎么搜（句式）

| 句式 | 例子 | 意图 |
| --- | --- | --- |
| `{记录类型} lookup` | whois lookup, dns lookup, mx lookup, a record lookup | 查权威数据 |
| `{协议/文件} checker` | ssl checker, dmarc checker, robots.txt checker, redirect checker | 校验现网是否正确 |
| `check {对象}` | check ssl certificate, check robots.txt, check http headers | 同上，动词在前 |
| `what is my ip` / `is this website safe` | 访客身份 / 安全焦虑 | 前者已有页；后者 YMYL |
| 品牌 / 品类 | web check, builtwith, pagespeed insights, mxtoolbox | 导航或头词，不进攻 |

Web-Check 自己几乎**不会**成为非品牌查询的答案页标题；用户搜的是 MxToolbox、SSL Labs、SecurityHeaders、PSI、Who.is。看板流量来自 GitHub / 口碑 / 品牌，不是长尾 SEO 矩阵。

### 4.2 代表词 → 决策（入池用）

| 代表搜索词 | 预估带 | 典型占位（已知，非本批 SERP） | verdict | 落点 |
| --- | --- | --- | --- | --- |
| website analyzer / website osint | head | Web-Check、同类看板 | drop | 禁 pack |
| whois lookup / domain lookup | head | who.is、ICANN、MxToolbox | absorb | `domain-lookup` |
| dns lookup / mx lookup | head | MxToolbox、dnschecker、Google Toolbox | absorb | `domain-lookup` |
| what is my ip | head | whatismyipaddress 等 | absorb | `ip-address` |
| ip geolocation / server location {domain} | head | IPinfo、whatismyipaddress | defer | 与「我的 IP」不同作业；无 slug |
| http headers checker | mid | 多工具站；本站已有 | absorb | `website-headers` |
| security headers checker | head | securityheaders.com | absorb | `website-headers`（勿拆 URL） |
| redirect checker | head | redirect-checker 类 | absorb | `website-headers` |
| ssl checker / ssl certificate checker | head | SSL Labs、SSL Shopper | build | 须实现证书检查；场景/G H1 |
| dmarc checker / spf lookup | head | MxToolbox、dmarcian | build | 须实现策略解释；禁仅 TXT 原文 |
| robots.txt generator | mid | 本站已有 | absorb | `robots-txt-generator`（仅生成） |
| robots.txt checker | head | SEO 套件 | build | 须实现；禁并进 generator |
| xml sitemap generator | mid | 本站已有 | absorb | `sitemap-xml-generator`（仅生成） |
| sitemap checker | head | SEO 套件 | build | 须实现；禁并进 generator |
| open graph preview | mid | Facebook Debugger、opengraph.xyz | absorb | `open-graph-preview` |
| pagespeed insights / lighthouse | head | Google 官方 | drop | 不进攻；CWV 页保持粘贴分级 |
| website carbon calculator | head | websitecarbon.com | drop | |
| what cms / builtwith | head | BuiltWith、Wappalyzer | drop | |
| port scanner online | head | 多扫描器 | drop | 滥用 |
| traceroute online | head | 多网络工具 | drop | 不可行 |
| security.txt checker | head | 专用 RFC 校验器墙（Bing） | build | 须实现；场景 H1；不抢头词 KPI |
| hsts preload check | mid | hstspreload.org 官方 | absorb | `website-headers` FAQ |
| is this website safe / phishing check | head | 浏览器/厂商安全页 | drop | YMYL |
| wayback machine {domain} | head | archive.org | drop | |

### 4.3 中文及其他语搜法（只作 absorb 线索，未做 locale SERP）

| 语 | 用户可能怎么搜 | 落点 |
| --- | --- | --- |
| zh | 域名查询、whois 查询、DNS 解析查询、SSL 证书检测、网站响应头 | 现有十语页；头词仍不新建 |
| ja | ドメイン whois、DNS レコード 確認 | `domain-lookup` locale absorb |
| de | IP Adresse herausfinden（访客 IP，已有池先例） | `ip-address` |
| es/pt | consultar whois、comprobar ssl | 同簇，不拆 URL |

未做各语 SERP → 不标 `locale_gap` 进攻。

---

## 5. 与本站已有工具的重叠图

```text
Web-Check 看板
  ├─ DNS + WHOIS + TXT          → domain-lookup
  ├─ 访客「我的 IP」            → ip-address（对方是「域名的 IP」，不是同一作业）
  ├─ 响应头 / 跳转 / Cookie / HSTS / 安全头  → website-headers
  ├─ www 要可解析               → add-www-to-dns（对方无此「生成记录」作业，本站更贴站长搜法）
  ├─ OG / 元标签                → open-graph-preview, meta-tag-generator, meta-serp-preview, on-page-seo-checker
  ├─ robots / sitemap 生成      → 本站生成器；对方是拉取检查
  ├─ 性能                       → 对方 Lighthouse；本站 CWV 粘贴分级（划界 FAQ）
  └─ 其余侦察卡片               → 不做
```

`add-www-to-dns` 是本站相对看板的**场景增量**（站长要「写出 www 的 CNAME/A」），不是 Web-Check 卡片的换皮。

---

## 6. 合规与产能

- **Scaled / doorway**：40 张卡片 ≠ 40 个 slug。
- **双用途**：端口、WAF 指纹、威胁名单、任意站截图 → 不做。
- **YMYL**：`is this site safe` 不做结论工具。
- **周 build KPI**：本批 **0 long_gap**；未实现的校验作业仍记入 **实现队列**（robots/sitemap/security.txt/SSL/DMARC），用场景 title + IG 承接，不把头词当进攻唯一 H1。
- **可后续（须用户点名立项）**：按实现队列开 `work-tasks/`；禁止 Web-Check 看板换皮。

---

## 7. 建议的下一步（不自动执行）

1. 若要量化：对 §4.2 的 defer 行跑 Keyword Planner，再 Bing/Google SERP；仍禁止默认 build。
2. **存量 absorb（仅已实现作业）**：`website-headers` / `domain-lookup` / `open-graph-preview` 补文案。  
3. **须实现（勿并进生成器）**：robots.txt checker、sitemap checker、security.txt checker、SSL 证书检查、DMARC/SPF 解释——各自独立实现规格 + 场景 H1；用户点名后再开 `work-tasks/`。  
4. **不要**开 `work-tasks/web-check-clone/`。

---

## 8. 复核清单

- [ ] README Features 增删时重跑本表作业簇，禁止按新卡片加 URL
- [ ] `build` 须有实现规格；`head` 禁硬刚 H1，不取消实现
- [ ] 生成器与 checker 不得互相假装覆盖
