Date: 2026-09-06 17:38
Summary: Legacy param-enum H1 titles now read as result/scenario copy, and the 18 related-graph orphans each have one same-cluster inbound link; lint:seo reports zero COVER-WARN and zero LINK-WARN.
Visibility: people

[question]
解决：15 条旧 title [COVER-WARN]、18 条入站孤儿 [LINK-WARN]

## Tool links (English)
- https://onlinefreetools.org/tools/add-www-to-dns
- https://onlinefreetools.org/tools/csv-json
- https://onlinefreetools.org/tools/image-compress
- https://onlinefreetools.org/tools/image-optimizer
- https://onlinefreetools.org/tools/indexnow
- https://onlinefreetools.org/tools/json-schema-validator
- https://onlinefreetools.org/tools/yaml-json

Chinese: https://onlinefreetools.org/zh/tools/csv-json · https://onlinefreetools.org/zh/tools/indexnow · https://onlinefreetools.org/zh/tools/yaml-json

Inbound related hosts (same-cluster discovery, not new pages): amazon-main-image-size, aws-vpc-cidr-planner, bulk-compress-png-images, chatgpt-export-to-markdown, cidr-cheat-sheet, combine-files-into-one-pdf, compare-two-pdfs, create-zip-file, curl-to-fetch, instagram-post-size, ios-app-icon-size, ipv6-cidr, magnet-link-decoder, make-pdf-flipbook, measuring-magnetic-fields, svg-optimizer, write-countif-formula-in-excel, youtube-thumbnail-size.

[try to solve]
## Context

`lint:seo` printed 15 `[COVER-WARN]` lines (parameter-enumeration H1 on old tools without a coverage section) and 18 `[LINK-WARN]` lines (catalog slugs that no other tool listed in `related`). Neither failed CI, but both were the remaining SEO debt after the description-length fix.

## Process

1. Read `isParamEnumTitle` in `scripts/lib/title-coverage-heuristics.mjs`: a subtitle after an em dash that lists three comma/顿号 segments, or control words (`A/CNAME`, `delimiters`, `WebP`/`AVIF`, `status codes`, `draft-07`, `multi-doc`, 分隔符, 状态码, …) with `&` / 与 / slashes, counts as a catalog H1.
2. Rewrite `tool_*_title` in all ten locale shards for the seven tools that produced those warns, keeping the search headword and moving encoder/record/status details out of the subtitle into result language (shrink, convert, submit, see path errors).
3. For each orphan, append it to one same-cluster neighbor’s `related` (for example `merge-pdf` → `combine-files-into-one-pdf`, `image-optimizer` → `svg-optimizer`, `cidr-to-ip-range` → `cidr-cheat-sheet`), matching `docs/seo/2026-08-09/link-strategy-execution.md` L2 same-cluster preference. Cross-tool catalog edits used `CROSS_TOOL_UPDATE` isolation intent.
4. `tool:touch` the 24 catalog shards, `merge:tools`, `lint:seo`.

## Root cause / analysis

COVER-WARN exists because older tools never got a 清单前检索覆盖 section, so param-enum titles only warn. The H1s still listed UI/protocol tokens instead of the job (point www at apex; convert a table; shrink a photo; submit URLs). LINK-WARN is directional: orphans already had outbound `related ≥ 2`, but hubs never pointed back, so the related graph had sinks.

## Solution

Titles are result/scenario-oriented in ten locales. Each former orphan now has inbound related ≥ 1. `lint:seo` prints no COVER-WARN, `Link validator: OK — related ≥2 / refs look good (0 inbound warn(s))`.

## Notes / boundaries

- Did not add 清单前检索覆盖 sections to those work-tasks (that would turn leftover catalog titles into COVER-FAIL).
- Did not rewrite README list blurbs or FAQ bodies; secondary tokens (WebP, A/CNAME, draft-07) stay in description/How where they already lived.
- Related additions are discovery links, not new tools. Prerendered HTML still needs `build:site` / `predeploy` before production pages show new H1s and related rails.

[actions]
- Rewrote titles for add-www-to-dns, csv-json, image-compress, image-optimizer, indexnow, json-schema-validator, yaml-json (10 locales)
- Appended 18 same-cluster inbound related entries on neighbor catalog shards
- Ran tool:touch, merge:tools, lint:seo (exit 0, 0 COVER-WARN, 0 LINK-WARN)
