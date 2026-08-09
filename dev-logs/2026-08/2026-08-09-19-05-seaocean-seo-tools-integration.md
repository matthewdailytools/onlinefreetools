Date: 2026-08-09 19:05
Summary: 调研 seaocean.io/features（SEO+GEO 审计 SaaS）并整合到 SEO 工具清单

[question]
调研 https://seaocean.io/features 的工具，整合到seo工具中清单中

[try to solve]
SeaOcean 是单一订阅 SaaS（Free / Pro $19 / Agency $49，对标 SEMrush/Ahrefs/SE Ranking），产品 = 即时 SEO Audit（140+ 检查项）+ GEO 营销（AI 可见性，/aiseo、/free-geo-audit）。142 检查项可拆解为：Basic SEO（Title/Meta/H1/Canonical）、Social & OG（og:*/Twitter Card）、Technical（HTTPS/sitemap/robots/mixed content）、Performance（页面大小/压缩/缓存头/render-blocking）；GEO 侧含 llms.txt Generator、AI SoV、9 GEO factors、AI 引用率叙事。

本站裁决：吸收其**单页检查器**形态与检查项字典 → 清单 §6 新增 **`on-page-seo-checker`**（P2，贴 URL/HTML → H1、canonical、meta 质量、OG/Twitter、JSON-LD 检测、mixed content、render-blocking 汇总 + 修复建议；合并原 canonical 检查候选，一带多场景不拆薄页）。明确**不做**：llms.txt 生成器（Google 官方可忽略）、GEO Score / AI SoV / 引用率承诺（黑箱 + 无自有数据）、全站爬虫审计/监控/排名/PDF SaaS（形态偏离）、9 factors 独立成页（其 people-first 部分并入 seo-launch-checklist，不叫 GEO）。已在调研主文 §1.4/§2.2/§3.2/§3.3/§5/§8/§9 同步。

[actions]
- docs/competitor-refs/seaocean-2026-08-09/README.md（新建快照：功能枚举 + 裁决矩阵 + 能力吸收矩阵）
- docs/2026-08-09-seo-webmaster-tools-survey.md（§1.4 SeaOcean 专项、§2.2/§3.2 新增 on-page-seo-checker、§3.3/§8 禁项补充、§5 排期、§9 状态）
- docs/2026-08-08-tool-inventory-table.md（§6 新增 on-page-seo-checker=78，§7–§10 序号 79–159 重排，统计更新 1–159 / P2 ~81）
