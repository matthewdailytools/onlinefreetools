Date: 2026-08-06 21:02
Summary: Treat each language at master-level for expression/search, but keep one factual IG master — ten independent factual masters are usually worse.

[question]
是否每个语言都作为母版来写会更好

[try to solve]
**For expression and search: write every locale at master quality. For facts and IG: keep one factual master — ten separate factual masters are usually worse.**

### Two meanings of “master”

| Meaning | Better? |
|---|---|
| **Quality master**: each locale writes title/FAQ/scenarios like a local independent site (search-oriented, anti-isomorphism) | **Yes** — this is the current “rewrite, don’t translate” model |
| **Factual master**: each locale invents its own formulas, boundaries, disclaimers, privacy promises with no shared reference | **No** — drifts, hard to maintain, YMYL risk |

Current rules already: write full How/Rules/Example/FAQ in one master language (factual master) → independently rewrite expression per locale from its brief (quality master), not Translate.

### Why not “ten factual masters”
1. **Fact inconsistency**: ROI/BMI/conversion-factor wording forks and hurts trust / E-E-A-T.
2. **Maintenance ×10**: changing one boundary means ten narrative logic updates.
3. **Capacity illusion**: ten from-scratch briefs become duplicate work or hidden mutual translation.
4. **hreflang expectation**: locales are language variants of the same tool; core capability stays aligned; differences belong in wording and scenario entry points.

### Preferred model (better than “every locale is a factual master”)
1. **One IG fact card**: formulas, defaults, boundaries, privacy, YMYL disclaimers, fixed Example numbers — other locales must not change facts.
2. **Per-locale brief + master-quality rewrite**: queries, title, FAQ order, local scenarios, local sample wording may vary.
3. **Optional dual masters**: en and zh both written to master depth (large markets); others still rewrite from the same fact card.
4. ar/ja/ru: write expression as masters; keep facts aligned to the fact card; live native final review when needed.

**Bottom line**: Every locale deserves to be **written like a master** (expression); none deserve a **separate factual master**. Better: **one IG factual master + ten master-quality search-oriented rewrites**.

[actions]
- Compared against `tool-i18n-localization.mdc` steady path; no code changes
