Date: 2026-08-26 00:57
Summary: Completed per-article English rewrites of published historical dev logs (588 keepers).

[question]
逐篇英文化，按篇人工改写

[try to solve]
Ran an editorial English rewrite pass over all published keepers (not `_archive`).

**Standards** (`dev-logs/_curation/EN-REWRITE.md`): English `Date` / `Summary` / `[try to solve]`; keep `[question]` verbatim; keep filenames for stable `/devlogs/<file>.html` URLs; preserve paths, commands, and hashes; no whole-corpus raw machine dump.

**Scope:** 588 published Markdown sources. Chinese may remain inside user questions, quoted SEO keywords (e.g. 「智能配色」), or labeled locale sample blocks in i18n draft logs. Narrative Summary + solve bodies are English (CJK ratio gate: 0 remaining).

**Build:** stripped accidental UTF-8 BOM on four Aug-07 files; ran `npm run build:logs` to refresh `public/devlogs/`.

**Rule:** `.cursor/rules/dev-logs.mdc` allows user-requested per-article English rewrite of keepers.

[actions]
- Rewrote published `dev-logs/YYYY-MM/*.md` bodies in place
- `dev-logs/_curation/EN-REWRITE.md` + batch tracking under `en-rewrite-batches/`
- `.cursor/rules/dev-logs.mdc`
- `npm run build:logs`
