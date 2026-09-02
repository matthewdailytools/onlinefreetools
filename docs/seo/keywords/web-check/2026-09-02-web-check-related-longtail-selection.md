# web-check 实现队列 — Bing Related / 长尾 H1 选词

- date: **2026-09-02 19:50**
- method: CloakBrowser `ops/seo/bing_serp/run_bing_serp.py`（`aibrowsercrawler` venv）
- batches:
  - seeds: [`2026-09-02-web-check-related-longtail.md`](./2026-09-02-web-check-related-longtail.md)（5 头词）
  - expand: [`2026-09-02-web-check-related-longtail-expand.md`](./2026-09-02-web-check-related-longtail-expand.md)（20 长尾变体）
  - queries: [`2026-09-02-web-check-related-longtail-queries.txt`](./2026-09-02-web-check-related-longtail-queries.txt)
- **未**建 `work-tasks/`；周进攻 KPI 仍 **0 long_gap**

## 0. Related 侧栏结论（必读）

| 采集 | Related / PAA | 说明 |
|---|---|---|
| 5 头词 | **全空** | CN Bing 国际版；与 2026-09-02 首批、P0 场景批一致 |
| 20 长尾变体 | **全空** | CloakBrowser 已成功打开 SERP；解析器未漏抓——页上无 Related 块可抽 |

因此**无法**直接用「结果页边上关联词」定 H1。按 P0 先例（[`../p0-scene/2026-08-31-p0-scene-longtail-selection.md`](../p0-scene/2026-08-31-p0-scene-longtail-selection.md)），「用户也搜」代理改为：

1. **同簇有机 title**里反复出现的任务句（Tester / Validator / Expiry / Finder…）
2. 对该任务句再跑 Bing（本 expand 批）看是否 title 墙 / 是否可走 §3.3 G
3. §3.3 H：slug/H1 = 使用场景任务句；禁硬刚最短头词

错误意图丢弃：`email authentication checker` 前排混入 **邮箱地址校验**（Verifalia / Mailmeteor）→ 不作 H1。`rfc 9116 security.txt` 前排是 RFC/指南 → 不作工具 H1（可进 References）。

## 1. 按实现队列选词

### A. robots.txt（须实现；禁并进 generator）

| 候选长尾（title 代理） | Bing 前排 | G title_gap | 角色 |
|---|---|---|---|
| robots.txt checker | Tester/Validator/Checker 墙 | 否 | **头词**；禁唯一进攻 H1 |
| robots.txt tester | 「Robots.txt Tester」墙（含 Bing Webmaster） | 否 | 同簇近义 |
| robots.txt validator | Validator 墙 | 否 | 同簇近义 |
| check robots.txt online | 仍 Tester/Checker；偶见 Files Online | 弱 | 场景口语 |
| validate robots.txt | Validator 墙 | 否 | 近义 |

有机 title 额外场景信号（非独立 URL）：**Check if a URL Is Blocked**、**Test Crawler Access**、**AI Crawlers**。

| 字段 | 建议 |
|---|---|
| **H1** | `Check if a URL is blocked by robots.txt` |
| **slug** | `check-robots-txt-url-blocked` |
| 芯片 / absorb | robots.txt tester；validator；check robots.txt online；AI crawler rules FAQ |
| tier | `head`（能力须做；不占周进攻） |

### B. sitemap（须实现；禁并进 generator）

| 候选长尾 | Bing 前排 | G | 角色 |
|---|---|---|---|
| sitemap checker | XML Sitemap Checker 墙 | 否 | 头词 |
| xml sitemap checker | 同上 | 否 | 近义 |
| xml sitemap validator | Validator 墙 | 否 | 近义 |
| validate xml sitemap | 「Validate XML Sitemap」墙 | 否 | 任务句但仍 mid/head |
| sitemap finder | Finder 专用墙 | 否 | **同页次模式**（发现 sitemap URL） |

| 字段 | 建议 |
|---|---|
| **H1** | `Find and validate XML sitemap` |
| **slug** | `find-and-validate-xml-sitemap` |
| 芯片 | xml sitemap checker；validator；sitemap finder |
| tier | `head`（实现队列；不进攻头词 KPI） |

### C. security.txt（须实现）

| 候选长尾 | Bing 前排 | G | 角色 |
|---|---|---|---|
| security.txt checker | Checker/Validator + RFC 9116 墙 | 否 | 头词 |
| security.txt validator | Validator 墙 | 否 | 近义 |
| validate security.txt | 同 Validator 墙 | 否 | 任务句 |
| rfc 9116 security.txt | IETF/指南 | — | **drop 作 H1**；References |

有机 title 少见字面 `well-known` → 场景可写入 How，不强制进 H1。

| 字段 | 建议 |
|---|---|
| **H1** | `Validate security.txt` |
| **slug** | `validate-security-txt` |
| 芯片 | security.txt checker；RFC 9116 FAQ |
| tier | `head` |

### D. SSL（须实现；Workers 边界写 Rules）

| 候选长尾 | Bing 前排 | G | 角色 |
|---|---|---|---|
| ssl certificate checker | 标题即该词 | **否** | 头词；禁硬刚 |
| ssl certificate expiry checker | Expiry 工具+泛 Checker | 弱 | 长尾主战场 |
| check ssl certificate expiration | 工具 + how-to 文混排 | 弱偏场景 | **优先 H1** |
| ssl certificate chain checker | Chain Checker 墙 | 否 | 同页芯片 |
| ssl expiry date checker | Expiry 工具墙 | 否 | 近义 |

| 字段 | 建议 |
|---|---|
| **H1** | `Check SSL certificate expiration` |
| **slug** | `check-ssl-certificate-expiration` |
| 芯片 | chain；expiry date；泛 ssl certificate checker（有意不满足作唯一 H1） |
| tier | `head` / 场景承接 |

### E. DMARC / 邮件认证（一页；禁仅 TXT 原文）

| 候选长尾 | Bing 前排 | G | 角色 |
|---|---|---|---|
| dmarc checker | 工具墙（易污染） | 否 | 头词 |
| dmarc record checker | Record Checker 墙 | 否 | 近义 |
| check dmarc record | Check/Lookup 墙 | 否 | 场景口语 |
| dmarc lookup | Lookup 墙 | 否 | 近义 |
| spf dkim dmarc checker | 三联 Checker 墙 | 否 | **同作业最贴控件** |
| email authentication checker | **混邮箱校验** | — | **禁 H1** |

| 字段 | 建议 |
|---|---|
| **H1** | `SPF DKIM DMARC checker` |
| **slug** | `spf-dkim-dmarc-checker` |
| 芯片 | dmarc record checker；check dmarc record；spf lookup |
| tier | `head`（一页三联；不拆 email-pack） |

## 2. 定稿对照表（实现队列）

| 原建议方向 | 选用 H1 | 选用 slug | Related 侧栏 |
|---|---|---|---|
| robots-txt-checker | Check if a URL is blocked by robots.txt | `check-robots-txt-url-blocked` | 空 → title 代理 |
| sitemap-checker | Find and validate XML sitemap | `find-and-validate-xml-sitemap` | 空 → title 代理 |
| security.txt | Validate security.txt | `validate-security-txt` | 空 → title 代理 |
| SSL | Check SSL certificate expiration | `check-ssl-certificate-expiration` | 空 → title 代理 |
| DMARC | SPF DKIM DMARC checker | `spf-dkim-dmarc-checker` | 空 → title 代理 |

## 3. Next

- 用户点名某 slug → 再开 `work-tasks/{slug}/`（本文件不自动建夹）
- 若日后非 CN / Related 非空：用真实侧栏词复核上表；冲突以新 Related 为准重选 H1
- 禁止把竞品 title 套路成空壳页；能力先判不变（生成≠校验）
