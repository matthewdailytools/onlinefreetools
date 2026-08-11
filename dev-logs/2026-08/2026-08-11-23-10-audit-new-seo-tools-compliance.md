Date: 2026-08-11 23:10
Summary: Audited 10 S1/S2 SEO tools against Google SEO policy, project rules, and tool-coverage-pass skill; 9 pass coverage:gate, website-headers fails docs gate, lint:seo has false-positive description WARNs.

[question]
检查新创建的seo工具是否符合谷歌seo规则以及本项目设置的规则和skills

[try to solve]
Scope (S1+S2): meta-serp-preview, schema-jsonld-generator, robots-txt-generator, sitemap-xml-generator, website-headers (enhance), on-page-seo-checker, open-graph-preview, utm-builder, hreflang-generator, meta-tag-generator.

Automated gates:
- coverage:gate --phase=all: 9/10 OK; website-headers FAIL (missing 02「清单前检索覆盖」, 03 rows 0b/1b/2b, 未勾选「检索覆盖已优化」). website-headers is legacy enhance, not a new product.
- lint:seo: title/coverage OK for new tools (no param-enum FAIL); link related≥2 OK; exit 2 from SEO-WARN on UI field keys named *_description (tool_og_field_og_description, tool_schema_article_description, tool_schema_org_description) — false positives vs real meta descriptions.
- sitemap.xml includes all 9 new tool URLs (120 locs each across locales).
- Content checks: all 10 locales FAQ≥3, main desc≥120, related≥2, ymyl=false, IG rough ≥5–6/9; titles pass isParamEnumTitle; localProcessing=false for URL-fetch tools (on-page, open-graph, website-headers) and true for pure client tools.

Google policy (seo-google-policy): people-first interactive tools; locale rewrites with briefs (not thin MT dump); no doorway/param-enum titles on new tools; no fake aggregateRating / llms.txt; FAQ for humans not rich-result KPI. Soft gap: all en meta descriptions are 411–617 chars (rule suggests HTML head 120–160).

Skill tool-coverage-pass: 9 new tools have 0b/1b/2b + coverage checkbox; website-headers does not (pre-skill enhance path). 03 for website-headers also has a misplaced table row under the status header from a prior edit.

Verdict: newly created 9 tools substantially compliant; website-headers documentation gate incomplete; lint noise on field *_description keys; optional shorten meta descriptions.

[actions]
- Ran coverage:gate phase=all for 10 slugs; npm run lint:seo; content/sitemap audits via node scripts
- No code fixes in this pass (audit only)
