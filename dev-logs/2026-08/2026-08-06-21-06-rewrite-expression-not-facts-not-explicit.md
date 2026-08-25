Date: 2026-08-06 21:06
Summary: “Rewrite expression, don’t invent new facts” is not an explicit rule line — only implied by one-master + rewrite-not-translate; fact-alignment across langs is unstated.

[question]
“重写表达、不另起事实”是否在规则里面

[try to solve]
**That exact line is not in the rules.** Rules cover the “rewrite expression” side; they do **not** hard-constrain “don’t invent new facts / all locales must align facts to the master.”

### Present (expression side)
- `tool-i18n-localization.mdc`: one master language → **independent rewrite** from brief; rewrite not translate; anti-isomorphism (FAQ order / openings may vary)
- `tool-creation.mdc` / `tool-i18n-seo.mdc`: search-oriented rewrite; forbid scripted isomorphic dumps

### Absent (fact side)
Full-text search finds no: “facts”, “must not change formulas”, “don’t invent new facts”, “cross-locale fact alignment”, “disclaimers must not drift”, etc.  
“Consistent” usually means JSON-LD ↔ visible copy or home primary term ↔ tool page — **not** cross-locale formula/boundary consistency.

### Verdict

| Claim | In rules? |
|---|---|
| Rewrite expression (not literal translation, anti-isomorphism) | **Yes** |
| Don’t invent new facts (formulas / defaults / disclaimers align to master) | **No (only implied)** |

To make it executable, add an explicit line to `tool-i18n-localization.mdc`, e.g.: other locales may change queries, FAQ order, scenario entry points, and sample wording; they **must not** change formulas, default algorithm behavior, privacy/YMYL disclaimer conclusions, or fixed Example numbers (unless the master and all locales update together).

[actions]
- Searched `.cursor/rules` and related SEO docs wording; no file changes
