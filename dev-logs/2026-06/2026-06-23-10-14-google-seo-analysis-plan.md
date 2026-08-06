Date: 2026-06-23 10:14
Summary: Google SEO analysis and optimization plan for the project

[question]
本项目是制作在线工具，根据最新的谷歌seo规则，分析项目，给出后续SEO方案，形成文档。

[try to solve]
1. Reviewed the entire project's current SEO implementation, including:
   - Source pages: layout.ts, page files (howToCalculateBmiPage.ts, etc.)
   - i18n files for 10 languages
   - Build scripts: build-site.mjs, config.mjs, layout.mjs, tracking.mjs
   - Static files: sitemap.xml, robots.txt, SEO_TOOL_RULES.md
   - Worker routing: index.ts, toolRegistrar.ts, lang.ts
   - Existing SEO validation: validate-tool-seo.mjs

2. Researched 2026 Google SEO latest rules:
   - EEAT as baseline requirement
   - Core Web Vitals (LCP/INP/CLS) mandatory for top-20 ranking
   - GEO (Generative Engine Optimization) for AI Overview citation
   - Topic Cluster over single-page optimization
   - Structured data (Schema.org) for Rich Results
   - Mobile-first indexing

3. Created comprehensive SEO analysis document: SEO_ANALYSIS_PLAN.md

4. Document covers:
   - Current SEO evaluation (strengths and gaps)
   - 2026 Google SEO core rules interpretation
   - Gap analysis with priority matrix
   - Phased optimization plan (P0-P3)
   - Technical implementation references
   - Verification methods

[actions]
- Created `SEO_ANALYSIS_PLAN.md` — complete SEO analysis and optimization roadmap with 4 priority phases, code examples for structured data, sitemap strategy, topic cluster design, and GEO optimization
