Date: 2026-08-06 20:25
Summary: Completed the YAML ↔ JSON work-task brief under work-tasks/yaml-json per current rules (page code not implemented yet).

[question]
重新根据规则策略 立项：YAML ↔ JSON

[try to solve]
Created the full brief under `work-tasks/yaml-json/` (no page implementation yet).

**Decisions**
- **slug**: `yaml-json` → `/tools/yaml-json`
- **Primary track**: **B** (config interchange 1→1 bridge; tech aligns A.1 / Tier 1 `js-yaml`)
- **YMYL**: no; paste is processed locally
- **`02` status**: `ready`; **`03` status**: `briefs-ready`
- **Long-tail**: bidirectional tabs on one page; do not split thin `json-to-yaml` or K8s-only pages

**SERP information-gain focus (≥3)**
1. Type-inference rule table (DEFAULT vs JSON-safe; `yes`/`no`, etc.)
2. Multi-document policy fixed: `loadAll` → JSON array
3. Round-trip loss table (comments / anchors / key order) plus honest local-privacy note (text not uploaded vs CDN)
4. Ten-locale search-oriented briefs (at implement time: ≥3 rounds; no scripted isomorphic dumps)

**Related (live)**: `markdown-to-html`, `text-diff` (schema/csv tools on the card target chain not shipped yet)

Next: implement only after an explicit request while keeping `02=ready`, following `tool-creation.mdc` and the steady localization path.

[actions]
- Added `work-tasks/yaml-json/00-request.md`
- Added `work-tasks/yaml-json/01-direction-discussion.md`
- Added `work-tasks/yaml-json/02-tool-info.md` (ready)
- Added `work-tasks/yaml-json/03-locale-briefs.md` (briefs-ready, ten-locale briefs)
