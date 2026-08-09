# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`core-web-vitals-checker`（不拆 `lcp-checker` / `inp-checker` / `cls-checker`）  
**路径**：`/tools/core-web-vitals-checker`  
**主方向**：A.12 / B3 / SEO where2use performance 模块  
**YMYL**：否  

> IG：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。  
> 权威：[Clarity Performance metrics](https://learn.microsoft.com/en-us/clarity/insights/performance-widget) · [web.dev vitals](https://web.dev/articles/vitals) · [Google CWV](https://developers.google.com/search/docs/appearance/core-web-vitals)

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：
  1. core web vitals checker / grade  
  2. LCP INP CLS thresholds / good needs improvement poor  
  3. performance metrics (Clarity) / page experience  
  4. how to improve LCP / INP / CLS  
  5. FID vs INP（同页 FAQ，不拆页）
- 用户真实任务：把 Lab/Field（或 Clarity 小部件）读到的 LCP、INP、CLS 数值粘贴进来，立刻看到 Good / Needs improvement / Poor，以及常见成因与改进动作。
- [x] 竞品：PSI 套壳、阈值静态文、Clarity 需装脚本看仪表盘；少有「粘贴三值 → 分档 + Clarity 成因/对策」本地工具。
- [x] 缺口：① 阈值与分档同页可交互；② Clarity 成因/对策与 Google 三档对照；③ p75 / 非实时抓站诚实边界；④ FID→INP 说明；⑤ 与本站图片压缩互链。
- [x] 增益：① 规则阈值表；② 边界（空值、单位、非测量）；③ Use cases；④ 对照表；⑤ Clarity + web.dev + Google 引用；⑥ 本地处理；⑧ 固定样例；⑨ Related。
- [x] 长尾：**合并本页**（三指标一带多场景）。
- [x] References：Clarity Learn（en + 可链 zh-cn）、web.dev/vitals、Google Search CWV。
- [x] Related：`image-compress`, `image-optimizer`, `website-headers`

### §3.1 维度

| # | 维度 | 体现 |
|---|---|---|
| 1 | 公式/规则 | LCP/INP/CLS 三档阈值（ms / 无量纲） |
| 2 | 边界 | 非法数、负值、非抓站声明 |
| 3 | 场景 | Clarity 读数、发版前后、修图前 |
| 4 | 对照表 | Good / NI / Poor × 三指标 |
| 5 | 权威引用 | Clarity · web.dev · Google |
| 6 | 本地隐私 | 数值不出浏览器 |
| 8 | 数值示例 | 样例 3.2s / 280ms / 0.18 |
| 9 | 主题内链 | related ≥2 |

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | SEO where2use · S3 Performance · P0 本轮 |
| 场景与行业 | 站长 / SEO / 前端：解读 CWV / Clarity Performance |
| 技术 | Tier 0；纯浏览器阈值评级；`localProcessing: true` |
| Title (en) | Core Web Vitals Checker — Grade your page-experience scores |
| Description | Paste LCP, INP, CLS → Good / Needs improvement / Poor using public thresholds; causes & fixes aligned with Microsoft Clarity Performance metrics and web.dev; runs on your device. |
| Schema | WebApplication + BreadcrumbList |
| FAQ ≥3 | 阈值来源；是否替代 PSI；FID→INP；p75；隐私 |
| related | image-compress, image-optimizer, website-headers |
| 验收 | coverage:gate all；lint:seo；进页样例；README；挂 seo scenario + performance 模块 |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-08-09 |
| slug 结论 | 保留 `core-web-vitals-checker`（检索主词 Core Web Vitals + checker；禁拆分指标 URL） |
| 主检索词 → title/H1 | **Core Web Vitals Checker** — Grade LCP, INP & CLS |
| 次要关键词 → desc / FAQ / Use cases | performance metrics → desc/FAQ；LCP/INP/CLS thresholds → Rules；Clarity → FAQ/References；improve LCP → Use cases + 结果区对策 |
| 用户搜索习惯判断 | 英文搜 “core web vitals checker / LCP INP CLS”；中文搜「Core Web Vitals 检测 / LCP INP CLS 标准」 |
| 优化摘要 | H1 结果向「Grade」；副标题点三指标但不做成参数目录腔；desc 含阈值评级 + Clarity 对齐 + 本地 |
| [x] 已回写 SEO 卡片 Title / Description 与建议 slug | |

## 交互规格

- 输入：LCP（秒，可切换毫秒）、INP（毫秒）、CLS（无量纲）；均可选填但至少填一项
- 输出：每项档位徽章 + 数值回显 + 成因/改进（Clarity）；总览「几项达标」
- 规则：
  - LCP(ms)：≤2500 good；≤4000 NI；else poor（展示可用秒）
  - INP(ms)：≤200 good；≤500 NI；else poor
  - CLS：≤0.1 good；≤0.25 NI；else poor
- 失败：非数字 / 负值 → 行内错误；全空 → 提示
- 样例：LCP 3.2 s、INP 280 ms、CLS 0.18 → LCP NI、INP NI、CLS NI
- **进页样例**：`loadSample()` 自动评级

## 页面模块清单

- [x] H1 + 摘要
- [x] 首屏交互 + 进页样例
- [x] How / Rules / Example / Use cases / FAQ / Related / References
- [x] `03-locale-briefs.md`
