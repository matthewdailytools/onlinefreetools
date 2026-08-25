Date: 2026-08-09 21:55
Summary: Shipped S2’s five SEO tools (on-page-seo-checker, open-graph-preview, utm-builder, hreflang-generator, meta-tag-generator) with phase=all green.

[question]
分步骤立项工具：on-page-seo-checker，open-graph-preview，utm-builder，hreflang-generator，meta-tag-generator；然后分步骤实现；

[try to solve]
Completed five S2 tools via tool-creation / work-tasks, each through rounds 0b→1b→2→2b→3 and phase=all gates:

**on-page-seo-checker**
- Worker API `/api/tools/on-page-seo` (fetch URL HTML; private-network block / timeout / 2MB cap); exports `parseUrlOrThrow` / `isBlockedHostname` for reuse.
- Dual mode: paste HTML (DOMParser local audit) or fetch URL; checks title/description/H1/canonical/robots/OG/JSON-LD/mixed content/render-blocking; canonical self-ref uses finalUrl.
- Fixed sample JSON-LD with unescaped `</script>` that truncated the inline script.
- zh title: On-Page SEO Checker (localized); en: “On-Page SEO Checker — Find and fix page tag issues” (outcome-oriented, avoid param enum).

**open-graph-preview**
- Worker API `/api/tools/open-graph-preview` (reuses onPageSeo helpers).
- Dual mode: paste og/twitter tags or fetch URL; parse into Facebook / X / WhatsApp cards + missing-field table + og:image size/ratio.
- Placed in the social module; removed “Open Graph preview” from social upcoming.

**utm-builder**
- Pure client (`localProcessing: true`); form builds UTM links: auto scheme, merge params (same name replaces), encodeURIComponent, hash kept at end, param detail table + copy.
- Placed in the growth module; removed “UTM builder” from growth upcoming.

**hreflang-generator**
- Pure client; language-code + URL line list; validate BCP 47; bare URLs get https; three output tabs (`<link>` / HTTP Link header / sitemap xhtml:link); per-URL self-ref + optional x-default.
- Two logic fixes: invalid lang errors lost under renderOutput → collect via pendingErrors; `{lang} {url}` with schemeless URL skipped the whole line → parse by language-code first.
- Placed in the growth module; cleared growth upcoming (hreflang + UTM both shipped).

**meta-tag-generator**
- Pure client; title/desc/canonical/robots(select)/OG → full head fragment; soft length hints (title 60 / desc 160), escapeHtml on all fields, schemeless canonical warned yellow, empty fields skipped, copy button.
- Master title failed the param-enum gate (“Create title, description & OG tags”) → outcome “Generate complete page head tags”; synced 02/03 and zh/es/ja direction.
- Placed in the onpage module (also added previously missing on-page-seo-checker); removed “Meta tag generator” from onpage upcoming.

**Global wrap-up**
- merge:tools: 124 tools / 10 locales; per-tool keysets match (on-page 95 / og 76 / utm 75 / hreflang 53 / meta 67).
- Fixed lint:seo inbound orphans: sitemap-xml-generator related → hreflang-generator, hreflang-generator related → utm-builder → 0 inbound warn.
- build:site OK (sitemap 1470 URLs); esbuild compiled 5 pages + 2 Workers + index.ts; Node DOM mocks for sample auto-gen and key interactions.
- README EN/ZH lists +5 entries; inventory §6 rows 78–80 marked shipped, added 81/82, shipped count 118→123, index 1–163, open P2 →~78.

[actions]
- Added `src/tools/onPageSeo.ts`, `src/tools/openGraphPreview.ts` (Worker API + routes)
- Added `src/pages/onPageSeoCheckerPage.ts`, `openGraphPreviewPage.ts`, `utmBuilderPage.ts`, `hreflangGeneratorPage.ts`, `metaTagGeneratorPage.ts`
- Added 5× `work-tasks/{slug}/00-03` (status `i18n-done`) and `src/site/i18n/tools/{slug}/{10 locales}.ts`
- Added 5× `src/site/tool-catalog.d/{slug}.json` and `public/icons/tools/{slug}.svg`
- Updated `scripts/site/scenario-modules.mjs` (onpage + on-page-seo-checker/meta-tag-generator; growth + utm/hreflang; social already had open-graph-preview)
- Updated `scripts/site/i18n-taxonomy.mjs` (onpage/growth upcoming cleared of shipped items)
- Updated `README.md` and `docs/2026-08-08-tool-inventory-table.md`
