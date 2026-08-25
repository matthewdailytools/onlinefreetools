Date: 2026-08-06 19:44
Summary: Added website-headers IG i18n keys for eight locales (es, pt, id, fr, de, ar, ja, ru) plus matching home cards.

[question]
In /Users/xuli/vscodeai/onlinefreetools, add website-headers IG i18n keys to: es, pt, id, fr, de, ar, ja, ru (files src/site/i18n/{lang}.ts). Mirror the key set now in en.ts for tool_headers_* (how/rules/example/usecases/ref labels + faq q4/q5). Also update tool_headers_title, description, article, note_1/note_2, fetch_button if present to match search intent from work-tasks/website-headers/03-locale-briefs.md. Rewrite independently per language — not isomorphic English skeletons. description ≥120 chars with process/example keywords for that lang. Also update FAQ q1-q3 if they already exist to stay consistent. Keep existing keys like url_label, result_title etc. — only improve if clearly English leftover. Update scripts/site/i18n.mjs home cards tool_website_headers_title / tool_website_headers_desc for these 8 langs to match. Return files changed.

[try to solve]
Independently rewrote website-headers IG copy for eight locales (es, pt, id, fr, de, ar, ja, ru) from `03-locale-briefs.md`: filled `tool_headers_how_*`, `rules_*`, `example_*`, `usecases_*`, `ref_*`, and FAQ q1–q5; updated title, description (≥120 chars), article, note_1/2, fetch_button; synced `scripts/site/i18n.mjs` home cards. `npm run lint:seo` passed.

Files changed:
- src/site/i18n/es.ts
- src/site/i18n/pt.ts
- src/site/i18n/id.ts
- src/site/i18n/fr.ts
- src/site/i18n/de.ts
- src/site/i18n/ar.ts
- src/site/i18n/ja.ts
- src/site/i18n/ru.ts
- scripts/site/i18n.mjs

[actions]
- Updated 8 locale i18n files and scripts/site/i18n.mjs home cards
- npm run lint:seo — OK
