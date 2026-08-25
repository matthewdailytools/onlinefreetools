Date: 2026-08-06 20:34
Summary: Current pages aim for search-habit localization rewrites, not pure translation; quality is mixed and ar/ja/ru lack verified native review.

[question]
现在页面的语言是翻译的，还是根据本地化用户习惯和搜索习惯写的？

[try to solve]
Target: rewrite for local search habits, not English-template literal translation. Delivery is mixed, and live native human review is not yet verified.

### Rule intent
`tool-i18n-localization.mdc` requires: locale brief (query / title direction) → independent rewrite from the brief → ≥3 rounds; forbid `Translate to {lang}` and scripted isomorphic dumps.

### Live evidence (leans localization)
- Titles use local primary terms: es/pt/fr use IMC; ru uses the Russian BMI acronym; zh uses public-IP and BMI phrasing natural to Chinese search; ja uses natural “how to get body-mass index” / “when to use this” headings
- Some FAQ topic order already differs (e.g. marginal revenue: es/id/de vs en)
- Stock-tool `03` files mostly mark `i18n-done`; relative to early `.bak` literal titles, search-oriented rewrites landed

### Still translation-skeleton-like
- Module structure stays largely parallel across ten locales (How / Formula / FAQ topic sets often match)
- Many FAQs are the same question set with different wording (e.g. percentage-change)
- ar/ja/ru “pending native review” was cleared by user confirmation — not completed live native QA

### One-liners

| Framing | Answer |
|---|---|
| Pure machine translation out? | Per current process and spot-checks, not the delivery target |
| Native original for search habits? | Intent and title layer are close; long copy/FAQ still show isomorphic traces; no verified live native review |

More accurate label: search-oriented AI rewrite (localization-oriented rewrite), not professional localization final copy.

[actions]
- Spot-checked `src/site/i18n/*` title/FAQ/usecases headings; compared `work-tasks/*/03-locale-briefs.md` and localization rules
