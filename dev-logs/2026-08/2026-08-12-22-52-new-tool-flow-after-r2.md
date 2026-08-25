Date: 2026-08-12 22:52
Summary: Clarified that new-tool SEO rules/skills are unchanged; only ship adds upload:r2 after build:site.

[question]
问题：如果现在要创建新的工具，那么是否和原来一样，是否原来的seo规则以及skill也照旧起作用，以及创建新的工具整体流程（从发出需求到上线）

[try to solve]
Verdict: creation and SEO rules/Skills **unchanged**; engineering source of truth remains brief + catalog/i18n shards + `*Page.ts`. Architecture change is only in build/ship: `build:site` prerenders tool HTML and gzips it; production needs one extra step `upload:r2`; still no need to edit `src/index.ts` for new tools.

End-to-end flow: request/keywords → work-tasks brief + coverage 0b → implement shards and Page → coverage 2/4 → build:site + lint → local verify → upload:r2 + deploy.

[actions]
- (read-only explanation; no code changes)
