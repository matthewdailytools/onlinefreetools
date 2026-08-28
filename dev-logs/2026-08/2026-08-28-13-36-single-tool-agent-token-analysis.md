Date: 2026-08-28 13:36
Summary: Single-tool Agent token use grows mainly from multi-phase workflows and context accumulation, not from reading all 128 tools; mitigated by `tool-token-efficiency` Skill without dropping quality gates.

[question]
单个工具的生成，使用token量越来越大，分析一下原因，以及影响因素，另外还要分析是否由于项目工具越来越多导致。后续：单独一个 skill 做 token 优化约束，但绝对不要降低生成工具的质量。

[try to solve]

## Executive summary

Token consumption for **one new tool** has risen faster than tool count alone explains. The dominant drivers are **more workflow phases** (0b → intent review → master i18n → phase 2 → ten locales → phase 4 → ship), **thicker rules and deliverables**, and **multi-turn conversation history**—not the need to load all 128 existing tools into Agent context.

Tool count (**128** as of 2026-08-28) matters **indirectly**: full-site `build:site` / `lint:seo` take longer and produce noisier terminal output; merged artifacts (`src/site/i18n/en.ts` ~599 KB, `tool-catalog.json` ~76 KB) become dangerous if an Agent reads them by mistake. Slug-level isolation (`tool-catalog.d/{slug}.json`, `i18n/tools/{slug}/`) keeps the **normal** read path flat as the catalog grows.

**Mitigation shipped**: `.cursor/skills/tool-token-efficiency/SKILL.md`—session splits, read allowlists, short lint handling—while **all** coverage and i18n quality gates remain mandatory (`tool-coverage-pass`, localization rules).

---

## Token spend model (five layers)

| Layer | Typical size (repo, Aug 2026) | Scales with tool count? | Notes |
|-------|--------------------------------|-------------------------|-------|
| **A · Fixed per turn** | always_applied rules ~8 KB + user/system prompt | Slow (rule edits) | `seo-google-policy`, `project-core`, `dev-logs` every turn |
| **B · Glob-triggered rules** | Tool rules + Skills ~**52 KB** (~13k tokens est.) | Yes (rules grow) | `tool-i18n-localization` (~25 KB), `tool-creation` (~13 KB), coverage + token Skills |
| **C · Single-tool deliverables** | brief ~40 KB; i18n shards ~49 KB/tool median; Page ~600 lines | Per slug, not catalog size | Isolated truth sources |
| **D · Conversation history** | 15–30+ turns × (reads + command output + replies) | With workflow phases | **Largest hidden multiplier** |
| **E · Accidental full-site reads** | merged i18n **~6 MB** (10 langs); catalog **~76 KB** | **Linear** | Only when Agent mis-reads; catastrophic for tokens |

---

## Why single-tool tokens keep rising

### 1. Workflow phase multiplication (~40% of growth)

Early path: brief → Page + en → bulk locales → merge.

Current mandatory path (`tool-coverage-pass` + localization):

```
0b (pre-list coverage) + coverage:gate
  → 0i (user intent review)
  → master locale + phase=2
  → per-locale rewrite (10 langs, batches ≤3) + phase=4
  → build:site + lint:seo + lint:tool-isolation
```

Each phase often maps to **separate chat turns**. Rules (layer B) re-inject every turn; history (layer D) accumulates reads, edits, and gate output. Example: `measuring-magnetic-fields` brief alone split across **three** dev-log sessions before implementation.

### 2. Rules and compliance thickness (~25%)

| Artifact | Lines / bytes |
|----------|----------------|
| `tool-i18n-localization.mdc` | 298 lines / ~25 KB |
| `tool-creation.mdc` | 166 lines / ~13 KB |
| `tool-coverage-pass/SKILL.md` | 90 lines |
| `tool-token-efficiency/SKILL.md` | 179 lines |

Recent hard requirements all expand Agent-facing text: intent review (0i), How `how_item_1…n`, auto `loadSample`, IG ≥3, FAQ ≥3, description ≥120 chars with steps + example, ten-locale search-oriented rewrite (not translate), ≥3 review rounds. Quality improves; **token floor** rises.

### 3. Per-tool content volume (~20%)

Measured references (Aug 2026):

- ~**50 i18n keys** per locale (`jwt-decoder` en shard)
- **~49 KB median** i18n shard total per tool (10 langs); max shard ~142 KB
- Typical `*Page.ts`: **500–800 lines**
- `work-tasks/{slug}/`: **~40 KB** when briefs are complete

Ten locales × multi-pass copy (steps 2 and 4) multiply generation and re-read cost even when isolation is correct.

### 4. Agent exploration patterns (~15%)

Common high-cost patterns observed in tool work:

- Reading full reference pages (e.g. `imageCompressPage.ts` ~800 lines) instead of slices
- Reading merged `src/site/i18n/{lang}.ts` (~600 KB/lang) instead of slug shards
- Reading full `tool-catalog.json` for `related` instead of grep + 2–3 candidate shards
- Re-ingesting full `build:site` / `lint:seo` stdout (128-tool scan) into context

### 5. Tool catalog size (~10%, mostly indirect)

| Metric | Value | Agent context impact |
|--------|-------|----------------------|
| Tools in catalog | **128** | None if only slug shards are read |
| `tool-catalog.json` | ~76 KB | Only if read whole |
| Merged i18n (10 langs) | ~6 MB | Only if merged files are read |
| `build:site` | Full prerender 128×10 langs | Wall-clock + verbose stdout; not required read |
| `lint:seo` | Scans all merged i18n + all FAQ pairs | Warnings from **other** slugs pollute context if pasted back |

**Conclusion on tool count**: The repo is **not** designed to load 128 tools into one Agent prompt. Growth in tool count **linearly inflates CI/build/lint** and **mistake surface** (merged files), but **should not** linearly inflate tokens if agents follow slug isolation. Violations of isolation dominate the “128 tools → huge context” perception.

---

## Factor weighting (estimated)

```
Multi-turn workflow + history accumulation     ████████████████████  ~40%
Rules/Skills thickness + per-turn re-inject    ███████████████       ~25%
Ten-locale deep copy (non-machine-translate)   ████████████          ~20%
Single-tool Page / IG complexity               ████████              ~15%
Catalog size (build/lint/mis-reads)            ████                  ~10%
```

---

## Quality-preserving mitigations (implemented)

Added **`.cursor/skills/tool-token-efficiency/SKILL.md`** as companion to `tool-coverage-pass`.

**Conflict order**: Google SEO / localization rules → `tool-coverage-pass` → token Skill.

**What it optimizes (HOW)**:

| Technique | Token saved | Quality impact |
|-----------|-------------|----------------|
| Session split A/B/C/D (brief / master / locales / ship) | Cuts history carry-over | None—state in `work-tasks/{slug}/` |
| Read only slug shards + briefs | Avoids 600 KB merged i18n | None |
| Reference Page ≤150 lines by type | Avoids 800-line reads | None |
| Filter lint to active slug lines | Less stdout in context | None—full lint still runs |
| `npm run verify:tool -- --slug=` | One ship gate sequence | None—all gates preserved |

**What it explicitly forbids skipping**:

- 0b, 0i, phase 2, phase 4, `coverage:gate --phase=all`
- Ten-locale search-oriented rewrite; ≥3 rounds
- IG, FAQ, how_items, loadSample, build:site, lint:seo, tool isolation

Registered in `AGENTS.md`, `tool-creation.mdc`, `tool-coverage-pass/SKILL.md`, `.github/copilot-instructions.md`.

---

## Recommendations not yet implemented

These would reduce **wall-clock** or **mistake risk** further; optional follow-ups:

1. **True incremental `build:site` for ship session D** — `build-site.mjs` currently enforces full prerender (`--full`); incremental flags exist in `prerender-tool-pages.mjs` but are ignored at site build. Token Skill accepts full build for quality; incremental build would help local dev time, not Agent reads.
2. **Slug-scoped lint wrapper** — run SEO checks only for `{slug}` during intermediate turns; keep full `lint:seo` at ship (would need script work).
3. **Rule progressive disclosure** — short “agent summary” front-matter in long `.mdc` files; full text on demand (rules architecture change).

---

## Answers to the original questions

| Question | Answer |
|----------|--------|
| Why are tokens growing for one tool? | Mainly **more phases and turns**, **thicker rules**, **deeper ten-locale copy**, and **history accumulation**—not model pricing alone. |
| Key influencing factors? | Workflow gates, rule/Skill size, per-tool i18n+Page volume, exploration habits, accidental full-site reads, build/lint output feedback. |
| Is it because there are more tools? | **Partially and indirectly** (~10%): longer build/lint, larger merged artifacts if mis-read, bigger README/catalog for related picking. **Not** because agents must load 128 tool sources each time—if isolation and the token Skill are followed. |

---

## Related artifacts

- Analysis mitigation Skill: `.cursor/skills/tool-token-efficiency/SKILL.md`
- Coverage workflow (unchanged): `.cursor/skills/tool-coverage-pass/SKILL.md`
- Skill delivery note: `dev-logs/2026-08/2026-08-28-13-15-tool-token-efficiency-skill.md`

[actions]
- Added `.cursor/skills/tool-token-efficiency/SKILL.md`
- Updated `AGENTS.md`, `.cursor/rules/tool-creation.mdc`, `.cursor/skills/tool-coverage-pass/SKILL.md`, `.github/copilot-instructions.md`
- This consolidated analysis log (companion to 2026-08-28-13-15)
