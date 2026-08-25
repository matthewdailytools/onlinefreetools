Date: 2026-08-06 17:29
Summary: Briefed HTML↔Markdown as a bidirectional enhancement of existing markdown-to-html (no thin new slug).

[question]
立项“HTML 转Markdown”，可以与目前的Markdown → HTML 合并

[try to solve]
Opened the brief under `work-tasks/markdown-to-html/`. Primary direction A: **enhance** existing `/tools/markdown-to-html` with same-page tabs for MD→HTML | HTML→MD. **Do not** create a thin `html-to-markdown` slug (aligns with B7 / one page covering multiple long-tail scenes).

| File | Content |
|---|---|
| `00-request.md` | User request and constraints |
| `01-direction-discussion.md` | Direction A; `turndown` plus existing `marked` / `DOMPurify` |
| `02-tool-info.md` | Status `ready`; IG ≥3; interaction spec (tabs, edges, round-trip loss) |
| `03-locale-briefs.md` | Ten-locale search briefs (`briefs-ready`; ≥3 rounds at implement time) |

Tech: CDN / `turndown` (Tier 1); paste stays local. Title direction covers bidirectional head terms. Related planned: `text-diff`, `website-headers`.

Next: after confirm, implement per `tool-creation.mdc` and rewrite ten locales from `03` briefs (not literal translate).

[actions]
- Added: `work-tasks/markdown-to-html/00-request.md`
- Added: `work-tasks/markdown-to-html/01-direction-discussion.md`
- Added: `work-tasks/markdown-to-html/02-tool-info.md`
- Added: `work-tasks/markdown-to-html/03-locale-briefs.md`
