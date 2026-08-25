Date: 2026-08-09 10:08
Summary: Added unique scenario/subject tags for all 114 tools and home-style listing pages under /use-cases and /subjects.

[question]
场景 / 操作对象标签与列表页

Implement the plan as specified, it is attached for your reference. Do NOT edit the plan file itself.

To-do's from the plan have already been created. Do not create them again. Mark them as in_progress as you work, starting with the first one. Don't stop until you have completed all the to-dos.

[try to solve]
Without changing existing homepage `category` sections, added unique `scenario` and `subject` fields per tool and built indexable listing pages matching the home layout. Hubs (`/use-cases/`, `/subjects/`) link only to leaf pages, not tools directly; each leaf shows all tool cards for that tag. Canonical tool URLs remain `/{lang}/tools/{slug}`. Top nav gained “use cases” and “subjects” entries; sitemap includes the new pages; `npm run lint:taxonomy` and `build:site` passed.

[actions]
- Extended ToolPageMeta + src/site/taxonomy.ts / scripts/site/taxonomy.mjs
- Tagged 114 catalog shards via scripts/dev/apply-taxonomy-tags.mjs
- Shared content-tool-cards.mjs; taxonomy hub/leaf build + Worker routes + sitemap
- Nav links + i18n-taxonomy.mjs + core nav keys; npm run lint:taxonomy
