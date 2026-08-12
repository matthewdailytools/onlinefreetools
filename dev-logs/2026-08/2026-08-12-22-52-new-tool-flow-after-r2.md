Date: 2026-08-12 22:52
Summary: Clarify that new-tool SEO rules/skills are unchanged; only ship adds upload:r2 after build:site.

[question]
问题：如果现在要创建新的工具，那么是否和原来一样，是否原来的seo规则以及skill也照旧起作用，以及创建新的工具整体流程（从发出需求到上线）

[try to solve]
结论：创建与 SEO 规则/Skill **照旧**；工程真相源仍是 brief + catalog/i18n 分片 + `*Page.ts`。架构变化只在构建/发版：`build:site` 会预渲染工具 HTML 并 gzip，生产须多一步 `upload:r2`；仍不必改 `src/index.ts`。

整体流程：需求/关键词 → work-tasks brief + coverage 0b → 实现分片与 Page → coverage 2/4 → build:site + lint → 本地验收 → upload:r2 + deploy。

[actions]
- （只读说明，无代码改动）
