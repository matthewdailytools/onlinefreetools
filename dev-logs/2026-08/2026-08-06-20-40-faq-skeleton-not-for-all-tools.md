Date: 2026-08-06 20:40
Summary: FAQ as a page module (≥3) fits all tools; a universal question template does not — FAQs must be tool-type and locale specific.

[question]
FAQ 骨架是否不适合所有工具

[try to solve]
**Separate two meanings of “skeleton”:**

| Meaning | Fits every tool? |
|---|---|
| **Page module**: each tool has a visible FAQ, ≥3 Q&As | **Yes** (hard quota; serves people, not rich-result KPIs) |
| **Universal question template**: every tool asks the same “what is it / how to use / free / safe” set | **No** |
| **Cross-locale isomorphism**: identical topic order and connective skeleton across ten locales | **No** (localization forbids this) |

### What the rules actually require
- FAQ ≥3 required; YMYL must include limits/disclaimer; paste/file tools need local-processing Q&As.
- **No** requirement that the whole site share one question set.
- Default is FAQ + Use cases covering multiple scenarios on one page, but question content should follow the tool’s task.

### Live differentiation by tool type (en spot-check)
- Calculators: formulas, categories, boundaries (athletes/children, ΔQ=0, old value 0)
- Converters: sanitization, round-trip loss, grammar coverage, privacy
- Network: VPN/LAN, not downloading full body, localhost block, logging
- Diff: line vs word, newline highlighting, binary comparison

So the **FAQ block** is universal; a **shared FAQ question skeleton** should not — and must not — be site-wide.

### Conclusions for writing
1. **Keep** the per-tool FAQ module and ≥3 quota.
2. **Do not** maintain a cross-tool universal question template; pick by type (formula/boundaries, mapping loss, privacy/proxy, YMYL disclaimer).
3. **Across locales**, vary topic order and entry points; forbid locked ten-locale isomorphism.
4. If real users rarely ask something for a tool, prefer long-tail/boundary questions over padding with a “generic skeleton”.

**Bottom line**: FAQ **as a module** fits all tools; FAQ **as a universal question skeleton** does not — write per tool type and local search intent.

[actions]
- Compared rules (FAQ≥3, anti-isomorphism) with en FAQs across ten tools; no code changes
