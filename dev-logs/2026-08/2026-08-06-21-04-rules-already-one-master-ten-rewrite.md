Date: 2026-08-06 21:04
Summary: Yes — cursor/rules already encode one-language factual master plus per-locale search-oriented rewrite at master quality; “fact card” is implicit via the master lang, not a separate named artifact.

[question]
目前cursor/rules是否采用“一份事实母版 + 十语都按母版质量做检索向重写”规则

[try to solve]
**Yes in substance.** The wording is “one master language + independent rewrite per locale from its brief,” not a separately named “fact card” file.

### Where it lands in rules

| File | Mapping |
|---|---|
| `tool-i18n-localization.mdc` step 1 | **One master**: usually en or zh, full How/Rules/Example/Use cases/FAQ/UI |
| Same file step 2 + writing guidance | **Ten-locale master-quality rewrite**: independent rewrite from each brief; no Translate; anti-isomorphism |
| `tool-creation.mdc` / `work-tasks-tool-brief.mdc` | `03-locale-briefs` before implement; steady path: one master lang → per-locale rewrite → ≥3 rounds |
| `tool-i18n-seo.mdc` IG⑦ | Search-oriented rewrite per locale; forbid “master + script dump remaining locales” isomorphic delivery |
| `seo-google-policy.mdc` | scaled content → brief + search-oriented rewrite + ≥3 rounds |

### Implied but not spelled out
- No separate “fact card” artifact name; **master-language copy = fact/IG source**.
- No line-by-line “other locales must not change formula/disclaimer facts,” but the flow is rewrite expression, not invent a new fact system; YMYL/boundaries land via complete master keys.

### Explicitly opposed
- Ten locales as unrelated factual masters: not encouraged.
- “Master final → script dump eight locales”: explicitly forbidden.

**Bottom line**: **Rules already follow this model.** To harden “facts must not drift,” localization could add: other locales may change search wording and FAQ order, but must not change formulas / default behavior / disclaimer facts — clarity enhancement, not a model change.

[actions]
- Checked localization / creation / i18n-seo / work-tasks / google-policy; no file changes
