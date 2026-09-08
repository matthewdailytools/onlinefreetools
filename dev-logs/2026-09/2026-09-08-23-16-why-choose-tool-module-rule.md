Date: 2026-09-08 23:16
Summary: Tool pages now require a Why choose module immediately after How it works; the gate lives in tool-creation, and the shared renderer outputs it when i18n keys exist.
Visibility: people

[question]
工具页面在how it works模块下面增加模块 why choose our {tool name} tools，写入通用规则里面

[try to solve]
## Context
Tool pages already had a fixed visible order: H1, interactive area, How, Formula/Rules, Example, Use cases, FAQ, Related, References. Converter SERPs often add a “Why choose …” block after How. The request was to make that a site-wide module and write it into the general rules, not a one-off on a single slug.

## Process
1. Put the module in the canonical page stack in `tool-creation.mdc` (immediately after How) with i18n keys, English H2 pattern, locale rewrite, and content bans.
2. Mirrored the same facts in `tool-i18n-seo.mdc`, localization (禁词 / 定稿 / 红线), the work-tasks `02` checklist, converter SERP skill IA, strategy doc §5.1–5.2, and copilot-instructions.
3. Extended `renderToolIgSections` so `{prefix}_why_choose_title` + `why_choose_item_*` render as `#why-choose` after How and before Formula/Rules. Missing keys skip the section, so existing pages do not change until copy is added.

## Root cause / analysis
A skill-only or docs-only note would miss calculator/OCR pages the same way the old progress line did. The executable gate belongs in `tool-creation.mdc`. Rendering had to change too: otherwise new tools would write keys that never appear.

Generic “fast / free / best / no signup” on every URL would be scaled thin content. The rule therefore requires **this slug’s** observable differences (skip, ZIP, viewport, OCR language, no upload, HUD) and native H2 per locale, not a calque of “Why choose our … tools”.

## Solution
| Layer | What landed |
|---|---|
| Hard structure | `.cursor/rules/tool-creation.mdc` + ship checklist |
| Copy quality | `tool-i18n-seo.mdc`, `tool-i18n-localization.mdc` |
| Brief | `work-tasks/_template/02-tool-info.md` |
| Renderer | `src/pages/site/toolContent.ts` (`id="why-choose"`) |
| Align docs | strategy §5.1, converter-serp-landing-seo, copilot-instructions |

English H2 default: `Why choose our {tool_*_title} tools` (`{tool_*_title}` = visible H1). New tools must ship ≥3 items. Stock tools add keys when copy is next edited.

## Notes / boundaries
- Did not backfill every live tool in ten locales (that would be a separate people-first rewrite, not a rule dump).
- Did not add `lint:seo` for these keys yet; a mechanical require would fail the whole catalog overnight.
- Privacy/local processing may be **one** bullet, not the whole section. Why choose ≠ Use cases (who/when vs why this page).

[actions]
- `.cursor/rules/tool-creation.mdc`, `tool-i18n-seo.mdc`, `tool-i18n-localization.mdc`
- `work-tasks/_template/02-tool-info.md`
- `src/pages/site/toolContent.ts` Why choose section
- `docs/2026-07-28-google-seo-strategy-implementation.md` §5.1–5.2
- `.cursor/skills/converter-serp-landing-seo/SKILL.md`, `.github/copilot-instructions.md`
