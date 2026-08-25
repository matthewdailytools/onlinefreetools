Date: 2026-08-08 15:05
Summary: Clarified that post-draft title/desc/keyword coverage optimization is a required Agent checklist, not an automatic SEO analyzer; lint:seo does not cover search-habit fit.

[question]
回答：上述创建过程中，seo的slug， title，关键词，desc处理流程，是否生成后，根据规则，自动分析是否符合用户搜索习惯和关键词覆盖进行优化

[try to solve]
Rules require search-coverage optimization after drafting, but it is an **Agent/human checklist**, not an in-repo automatic analyzer.

- **slug**: Locked in the brief / direction docs (e.g. `json-schema-validator`); there is no “auto-rewrite slug after generate” pipeline.
- **title / description / search terms**: After step 1 draft in `tool-i18n-localization.mdc`, you **must** run step 2 (master locale) and step 4 (spot-check locales) “Title / description / search-term coverage” checklists (primary term in H1, secondary in desc/FAQ, no param enums, intent must not collide with related tools, etc.) and record them in `03`.
- **Not automatic**: No script scrapes SERP or rewrites copy for search habits; `lint:seo` only gates structure (length/FAQ/YMYL, etc.) and **does not** mean search coverage is optimized.
- **This tool**: Search-oriented copy was written from the brief and rounds were checked — that is the required human/Agent pass, not output from a separate auto-analyzer.

[actions]
- (no code changes)
