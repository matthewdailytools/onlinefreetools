Date: 2026-08-07 00:24
Summary: Created work-tasks brief for HTML entity encode/decode tool (slug html-entity).

[question]
立项：HTML 实体编解码

[try to solve]
Completed briefing under `work-tasks/html-entity/` at `ready` / `briefs-ready`, ready for implementation.

**Summary**
- **slug**: `html-entity` (`/tools/html-entity`)
- **Primary track**: A (text & document formats · Tier 0)
- **Shape**: Encode / Decode tabs on one page; do not split encoder/decoder near-duplicate URLs
- **Tech**: default zero-dependency native encode/decode; optional lazy `he` for full HTML5 named entities
- **IG increments**: encode-scope table (minimal / non-ASCII / all), named vs numeric entities, double-encoding, attribute vs text node, invalid-entity strict/lenient
- **Related**: `markdown-to-html`, `text-diff`

**Docs**
- `00-request.md` — user request
- `01-direction-discussion.md` — track A + red lines
- `02-tool-info.md` — IG pre-review + interaction + SEO card (`ready`)
- `03-locale-briefs.md` — ten-locale search briefs (`briefs-ready`)

Next: after confirmation, implement the page and ten-locale i18n per `tool-creation.mdc`.

[actions]
- Added `work-tasks/html-entity/00-request.md`
- Added `work-tasks/html-entity/01-direction-discussion.md`
- Added `work-tasks/html-entity/02-tool-info.md`
- Added `work-tasks/html-entity/03-locale-briefs.md`
