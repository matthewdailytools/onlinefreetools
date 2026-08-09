# 网站 SEO / 站长工具调研报告

**日期**: 2026-08-09  
**范围**: 市面常见「免费 SEO 工具站」品类（含 Performance / Core Web Vitals、SEO+GEO 审计 SaaS）→ 对照本站能力与红线 → 可做 / 不做 / 排期建议。  
**关联**: [工具方向 A.12 / B3 / C-V2](./2026-07-28-tool-direction.md) · [工具清单 §6](./2026-08-08-tool-inventory-table.md) · [JS 包调研 §16](./2026-07-09-js-tool-packages-survey.md) · [Google SEO 落地](./2026-07-28-google-seo-strategy-implementation.md) · 政策镜像 `.cursor/rules/seo-google-policy.mdc` · [SeaOcean 快照](./competitor-refs/seaocean-2026-08-09/README.md)

> **用途**：产品选型。选定前可批量建 `work-tasks`，但**禁止**为排名铺「空壳 AI SEO / llms.txt / 关键词密度矩阵」薄页。  
> **本站定位**：可交互、规则可讲清、本地优先；Worker 仅做跨域探测类（已有 Headers / DNS / IndexNow 模式）。

---

## 0. 一句话结论

免费 SEO 工具站高度同质：**生成器**（meta / robots / schema / sitemap / OG / UTM）+ **检查器**（拉 URL 看标签 / 头 / SSL）+ **Performance**（套 PageSpeed Insights）+ 少量「DR / 反链」寄生数据。  
本站已具备站长探测底座（Headers、DNS、IndexNow）；清单里 SEO 核心页多数 **P0/P1 未开工**。优先做 **Meta SERP 预览 → Schema 生成 → robots/sitemap 生成校验 → UTM/hreflang**；Performance Metrics 可做 **PSI 代理包装页**（需 API Key / 配额），不要自研假 Lighthouse 分数。  
明确 **不做**：`llms.txt` 生成器、为 AI Overview 特写页、Ahrefs DR 爬壳、全站爬虫审计 SaaS、关键词密度海量变体页。

---

## 1. 市场品类地图

竞品抽样（2026-08 公开页）：[SEOitis Tools](https://www.seoitis.com/tools)、[SerpNap](https://serpnap.com/tools)、[SEOKit](https://seokit.site/)、[OnlineTextLab SEO](https://onlinetextlab.com/tools/seo-tools)、泛站 SmallSEOTools 类，以及 **SEO+GEO 审计 SaaS [SeaOcean](https://seaocean.io/features)**（快照见 [competitor-refs/seaocean-2026-08-09](./competitor-refs/seaocean-2026-08-09/README.md)）。

### 1.1 四大桶

| 桶 | 典型工具 | 用户任务 | 常见实现 |
|---|---|---|---|
| **A. 生成器** | Meta / OG / Twitter Card、robots.txt、XML sitemap、hreflang、UTM、Redirect/.htaccess、Schema JSON-LD、Disavow | 填表 → 复制粘贴到站点 | 纯浏览器 |
| **B. 单页检查器** | Meta 提取、OG 预览、Header/SSL、robots/sitemap 校验、Redirect 链、Broken link（单页） | 贴 URL → 报告 | 服务端 `fetch` HTML |
| **C. Performance Metrics** | Core Web Vitals（LCP/INP/CLS）、PSI 分数、Lab vs Field | 贴 URL → 分数与建议 | **几乎全部**转调 [PageSpeed Insights API](https://developers.google.com/speed/docs/insights/v5/get-started) / CrUX |
| **D. 内容 /「伪排名」** | 关键词密度、Headline 评分、Word Counter、「SEO Score 50 项」、Domain Rating | 贴文案或域名 → 分数 | 本地启发式 **或** 第三方付费数据壳 |

### 1.2 SEOitis 代表清单（18 工具，便于对标）

| # | 工具 | 桶 | 对本站 |
|---|---|---|---|
| 1 | Schema Markup Generator | A | ✅ 可做（FAQ 已在清单；可扩 Article/Breadcrumb/Organization，**单页多类型**，禁拆类型 doorway） |
| 2 | Google SERP Preview | A/分析 | ✅ **P0 已规划** `meta-serp-preview` |
| 3 | Core Web Vitals Checker | C | ⚠️ 可做 PSI 包装；勿宣称自有测量引擎 |
| 4 | Meta Tag Generator | A | ✅ 可与 SERP 预览合并或 Related |
| 5 | Robots.txt Generator（含 AI bots） | A | ✅ 可做；写清各 bot 用途与更新日期 |
| 6 | SEO + AI Search Checklist | 清单页 | ⚠️ 可做交互 checklist；**勿**做成 `llms.txt` / GEO 黑科技叙事 |
| 7 | Open Graph Generator | A | ✅ 可做；与 `social-share-image-pack` Related |
| 8 | Hreflang Generator | A | ✅ **P2 已规划** |
| 9 | Keyword Density | D | ❌ 默认不做（易薄、易 spam 感；无 Information Gain） |
| 10 | Redirect Generator | A | ✅ 低成本；Apache/Nginx/CF 规则一段页 |
| 11 | XML Sitemap Generator | A | ✅ 粘贴 URL 列表 → XML（本站已有 IndexNow 解析 sitemap 经验） |
| 12 | Disavow Generator | A | ⚠️ 可选 P3；受众窄 |
| 13 | Word Counter | D | ⚠️ 极薄；除非绑可读性公式并 Related 内容工具 |
| 14 | Domain Rating (Ahrefs) | D | ❌ 不做（第三方专有指标壳；无自有数据） |
| 15 | UTM Builder | A | ✅ **P2 已规划** |
| — | AI Visibility / llms.txt / Query Fan-out | D/GEO | ❌ **政策红线**：Google 明确可忽略 `llms.txt`；禁为操纵 AI 摘要做专用页 |

### 1.3 Performance Metrics 专项

| 指标 | 含义（现行） | 数据来源 | 免费工具常见做法 |
|---|---|---|---|
| **LCP** | 最大内容绘制 | Lab（Lighthouse）+ Field（CrUX） | PSI API |
| **INP** | 交互到下次绘制（已替代 FID） | 同上 | PSI API |
| **CLS** | 累计布局偏移 | 同上 | PSI API |
| FCP / TTFB / TBT / SI | 辅助性能 | Lab 为主 | PSI / 自建 Lighthouse（重） |

**工程现实**：

1. **自建 Lighthouse 跑分**（Puppeteer/Chrome）不适合 Cloudflare Pages 轻量形态；容器成本与滥用风险高。  
2. **正确产品形态**：Worker 代理 PSI API（站内 Key + 速率限制 + 缓存）→ 展示阈值阈值/建议；页面写清「数据来自 Google PSI / CrUX，非本站测量」。  
3. **Information Gain**：阈值对照表、Lab vs Field 差异、移动优先说明、与本站图片压缩/WebP 工具 Related——避免「又一个套壳分数页」。  
4. **不做**：伪造 0–100「SEO Performance Score」无公式说明；把 Performance 拆成 LCP/CLS/INP 三个 doorway URL。

### 1.4 SEO+GEO 审计 SaaS 专项（SeaOcean 2026-08-09 快照）

[SeaOcean](https://seaocean.io/features) 是单一订阅 SaaS（Free / Pro $19 / Agency $49，对标 SEMrush/Ahrefs/SE Ranking），**不是工具墙**。产品 = **即时 SEO Audit（140+ 检查项）** + **GEO 营销（AI 可见性）**：

- **SEO 侧能力**（features 页「Three Pillars」）：Audit、Compare、Monitor、Fix Guide、Reports、Keywords、AI Recs、Battlefield/Gaps、OG Images。
- **140+ 检查项拆解**（free-seo-audit 实测 stripe.com 142 项）：Basic SEO（Title 长度/唯一性、Meta 质量、H1 存在性、Canonical）、Social & OG（og:title/desc/image、Twitter Card、预览）、Technical（HTTPS/SSL、sitemap、robots、**mixed content**）、Performance（页面大小、GZIP/Brotli、缓存头、**render-blocking**）。四项 0–100 分块 + 汇总分。
- **GEO 侧**（/aiseo、/free-geo-audit）：LLM Visibility Check、llms.txt Generator、AI-Ready Content Audit（9 GEO factors）、AI SoV / Citations、AI Models（6 引擎）、GEO Content Copilot；含「+527% AI traffic」等不可验证叙事。

**本站裁决**：吸收其**单页检查器**形态与检查项字典（→ 新增 `on-page-seo-checker` 候选，§3.2），不做全站爬虫审计/监控/排名/PDF、不做 llms.txt、不做 AI SoV/引用率承诺（详见快照 §3–§4）。

---

## 2. 本站现状（已上线 vs 清单未做）

### 2.1 已上线（站长技术底座，catalog 多在 developer / seo）

| slug | 能力 | 与 SEO 工具关系 |
|---|---|---|
| `website-headers` | URL → 响应头 | B3 上线检查；可扩展 Redirect 链解读 |
| `domain-lookup` | DNS + RDAP | 站长核对解析 / 注册信息 |
| `add-www-to-dns` | www 记录说明 | 规范主机 / 301 前置知识 |
| `indexnow` | 密钥检查 + 提交 URL/sitemap 展开 | 索引通知（Bing 等）；属 seo 品类 |

### 2.2 清单已规划、尚未开工（§6 SEO / 站长）

| 优先级 | slug | 说明 |
|---|---|---|
| **P0** | `meta-serp-preview` | 字符 + 像素截断 + Google 桌面/移动预览 |
| **P1** | `faq-schema-generator` | 问答 → FAQ JSON-LD；须强调与可见正文一致；**不以富结果为 KPI**（FAQ 富结果 2026-05 已停） |
| **P1** | `meta-copy-length-pack` | 一段文案 → 多引擎长度；可与 SERP 预览合并评估 |
| **P2** | `hreflang-generator` | 多语 URL → link / HTTP / sitemap 片段 |
| **P2** | `utm-builder` | 活动追踪链接 |
| **P2** | `on-page-seo-checker` | SeaOcean 式单页检查器：H1/canonical/meta 质量/OG/JSON-LD 检测/mixed content/render-blocking（合并 canonical 候选，§3.2） |

### 2.3 强相关但挂在设计/图片簇

| slug | 关系 |
|---|---|
| `favicon-and-pwa-icon-pack` | 站长品牌 / PWA |
| `social-share-image-pack` | OG/社交预览图尺寸 |
| `image-compress` / `image-optimizer`（已上线） | CWV / LCP 素材侧 |

### 2.4 场景链（工具方向 B3）

```
meta-serp-preview → faq-schema-generator → website-headers → markdown-to-html
```

上线检查一条龙；Related 互链即可，不必做「一站式审计 SaaS」。

---

## 3. 本站「能做」清单（按推荐度）

### 3.1 强烈推荐（对齐定位 + 已有排期）

| 建议 slug | 用户任务 | 运行环境 | 备注 |
|---|---|---|---|
| `meta-serp-preview` | 预览 title/description 截断 | 浏览器 | **先做**；像素估算是 IG |
| `meta-tag-generator` | 表单生成 title/desc/canonical/robots/OG | 浏览器 | 可与上者同页 Tab，或 Related；**一带多场景** |
| `faq-schema-generator` → 演进 `schema-jsonld-generator` | 多类型 JSON-LD | 浏览器 | 单页类型下拉；禁按类型拆 URL |
| `robots-txt-generator` | 生成 + 语法说明（含常见 AI crawler） | 浏览器 | 引用各 bot 文档；标注更新日期 |
| `sitemap-xml-generator` | URL 列表 → sitemap.xml | 浏览器 | 与 IndexNow 互链 |
| `sitemap-xml-validator` | 粘贴/拉取 XML → 校验 | 浏览器 + Worker 拉取 | 复用 IndexNow 的 sitemap 解析 |
| `utm-builder` | UTM 拼装 | 浏览器 | P2 |
| `hreflang-generator` | hreflang 三种输出形态 | 浏览器 | P2；本站多语实践可写进 IG |
| `open-graph-preview` | OG/Twitter 卡片预览 | 浏览器（粘贴标签）或 Worker（拉 URL） | 与社交图包 Related |
| `redirect-rules-generator` | 301/302 → Apache/Nginx/CF | 浏览器 | 低成本；扩展自 Headers 场景 |

### 3.2 可做（有条件）

| 建议 slug | 条件 |
|---|---|
| `core-web-vitals-checker` / `pagespeed-insights-report` | Worker + PSI API Key；配额与滥用防护；文案归因 Google；**单页**含 LCP/INP/CLS |
| `redirect-chain-checker` | 扩展 `website-headers`（同页增强优于新 URL，除非检索意图明显独立） |
| **`on-page-seo-checker`**（P2，SeaOcean 式单页检查器） | 贴 URL 或粘贴 HTML → H1、canonical、meta 质量、OG/Twitter、JSON-LD 检测、mixed content、render-blocking 汇总 + 修复建议；**合并**原 `canonical-url-checker` 候选（一带多场景，不拆薄页）；抓 URL 用 Worker + 隐私说明 |
| `ssl-certificate-checker` | Worker 探 TLS；注意边缘限制与误报说明；可在 `on-page-seo-checker` 内给摘要 |
| `robots-txt-analyzer` | 拉取 + `robots-parser`；可与生成器同页 |
| `seo-launch-checklist` | 本地 localStorage 进度；条目引用 Search Central；吸收 9 GEO factors 中与 Helpful Content 重叠的 people-first 条目（统计数字/直接回答/引用权威源等），**不叫 GEO、不承诺 AI 引用率** |

### 3.3 不建议 / 禁止

| 类型 | 原因 |
|---|---|
| `llms.txt` 生成器、AI Visibility / Query Fan-out 页 | 与 `seo-google-policy`：官方可忽略；易成操纵 AI 叙事 |
| AI SoV / 引用率承诺（「+527% AI traffic」类） | 黑箱 + 无自有数据；AI 引用前提是 indexed + snippet-eligible |
| Domain Rating /「权威分」爬壳 | 无自有数据；寄生第三方 |
| 全站爬虫审计 + 监控/排名/PDF 报告 SaaS | 形态偏离本站；滥用与存储成本 |
| 关键词密度 / 同义词海量变体页 | Scaled content / 薄内容风险 |
| 按 Schema 类型 / 按社媒平台拆 doorway | 违反一带多场景 |
| 假造 Performance Score 无公式 | 误导；无 IG |

---

## 4. 与竞品差异化（本站应怎么打）

| 维度 | 典型免费 SEO 站 | 本站建议 |
|---|---|---|
| 隐私 | 常服务端抓页存日志 | 生成器默认本地；抓 URL 工具写清「仅当次请求、不存页面」 |
| 深度 | 分数黑箱 | 公式/阈值/引擎差异表 + References（Search Central / Schema.org） |
| 结构 | 工具墙 20–50 URL | 场景链 Related；禁近义拆页 |
| 生态 | 孤立 SEO 工具 | 与 Headers / DNS / IndexNow / 图片压缩 / 社交图包互链 |
| AI 叙事 | llms.txt、GEO | **不跟**；强调 indexed + snippet-eligible + 真实工具 |

---

## 5. 建议排期（产品队列）

### 套餐 S1 — 站长上线最小闭环（推荐先做）

1. `meta-serp-preview`（P0）  
2. `faq-schema-generator`（P1；或直接多类型 Schema 单页）  
3. `robots-txt-generator` + `sitemap-xml-generator`（可同迭代两页或一页双 Tab——若检索意图分离则两页）  
4. 增强 `website-headers`：常见 SEO 相关头解读（cache-control、x-robots、redirect location）

**工期粗估**：SERP 预览 2–3 天 → Schema 2–3 天 → robots/sitemap 各 1–2 天（含 10 语另计）。

### 套餐 S2 — 增长与多语

1. `utm-builder`  
2. `hreflang-generator`  
3. `open-graph-preview`（与 `social-share-image-pack` 同波次更佳）  
4. `on-page-seo-checker`（SeaOcean 式单页检查器；与 `open-graph-preview` / `ssl-certificate-checker` / `website-headers` 增强同波评估；含 mixed content / render-blocking 检查）

### 套餐 S3 — Performance Metrics（可选）

1. POC：Worker 调 PSI（移动+桌面）→ 展示 CWV + 机会项摘要  
2. 页面 IG：阈值表、Lab/Field、与 `image-compress` Related  
3. 未过配额/滥用 POC **不上线**

---

## 6. 技术备忘

| 能力 | 建议手段 | 环境 |
|---|---|---|
| 字符/像素 SERP | Canvas/`measureText` 或近似表 | 浏览器 |
| JSON-LD | 表单 + JSON.stringify；可选 `schema-dts` 类型 | 浏览器 |
| robots 解析 | `robots-parser` | 浏览器或 Worker |
| sitemap XML | `fast-xml-parser`（生成/校验） | 浏览器；拉取用 Worker |
| HTML meta 提取 | Worker `fetch` + HTML 解析（注意 SSR/JS 渲染局限） | Worker |
| CWV | PageSpeed Insights API v5 | Worker + Secret |

红线回顾：结构化数据须与可见内容一致；不做虚假 `aggregateRating`；FAQ/HowTo Schema 可保留理解用途，**不以富结果展示为 KPI**。

---

## 7. 决策检查表（立项前勾选）

- [ ] 输入 → 规则 → 输出能写进工具页（非黑箱分数）  
- [ ] 不拆近义 URL；长尾用一页多场景  
- [ ] 生成类默认本地；抓 URL 类有隐私与限制说明  
- [ ] 不引入 llms.txt / DR 爬壳 / 关键词密度矩阵  
- [ ] Performance 若做，必须归因 PSI/CrUX 并有配额方案  
- [ ] 与 B3 场景链或已有 Headers/IndexNow Related 设计完成  
- [ ] 勾清单前检索覆盖（title/H1/关键词）后再 `ready`

---

## 8. 附录：品类 × 本站裁决速查

| 品类 | 裁决 |
|---|---|
| Meta / SERP 预览 | ✅ P0 |
| Schema JSON-LD | ✅ P1（单页多类型） |
| robots / sitemap 生成校验 | ✅ 推荐紧随 P0/P1 |
| UTM / hreflang / OG | ✅ P2 |
| Redirect 规则生成 | ✅ 低成本可插队 |
| Headers / DNS / IndexNow | ✅ 已有 |
| Core Web Vitals（PSI） | ⚠️ 条件可做 |
| 单页 On-page 检查器（H1/canonical/mixed content/render-blocking，SeaOcean 式） | ⚠️ P2 候选；合并 canonical 检查，禁拆 140 薄页 |
| SSL / redirect 链检查 | ⚠️ 扩展现有探测 |
| Checklist（非 GEO；吸收 9 factors 的 people-first 条目） | ⚠️ 可选 |
| 关键词密度 / DR / llms.txt / GEO·AI SoV / 全站审计 SaaS | ❌ |

---

---

## 9. 落地：SEO where2use 页（2026-08-09）

已新增场景标签 **`seo`**，规范 URL：

- Hub：`/where-to-use-tools`
- Leaf：[`/where-to-use-tools/seo`](https://onlinefreetools.org/where-to-use-tools/seo)（十语）

页内按调研分 **7 个模块**（抓取与索引 / 技术检查 / Meta·SERP / 结构化数据 / 性能·CWV / 活动与国际化 / 社交与品牌）：每模块含说明、本场景主工具卡片、跨场景相关互链、以及「规划中」工具名（不造假链接）。

主工具（`scenario: seo`）：`indexnow`、`website-headers`、`domain-lookup`、`add-www-to-dns`。  
模块配置：`scripts/site/scenario-modules.mjs`。

**文档状态**：调研完成；where2use SEO 页已上线构建产物。选定 S1 工具套餐后仍按 `tool-creation` + coverage gate 立项。

### 已上线：`core-web-vitals-checker`（2026-08-09）

依据 [Clarity Performance metrics](https://learn.microsoft.com/zh-cn/clarity/insights/performance-widget)：粘贴 LCP/INP/CLS → Good/NI/Poor（公开阈值）+ Clarity 成因/对策；已挂 SEO where2use「性能」模块主工具。非 PSI 实时抓站。

### 竞品追加：SeaOcean（2026-08-09）

调研 [seaocean.io/features](https://seaocean.io/features)（SEO+GEO 审计 SaaS，140+ 检查项）。吸收其**单页检查器**形态与检查项字典 → 新增 **`on-page-seo-checker`**（P2，§3.2/§5）；明确**不做** llms.txt、GEO Score / AI SoV / 引用率承诺、全站爬虫审计 SaaS（§3.3/§8）。快照：[competitor-refs/seaocean-2026-08-09/README.md](./competitor-refs/seaocean-2026-08-09/README.md)；清单 §6 已加条目。
