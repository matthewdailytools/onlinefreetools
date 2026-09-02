Date: 2026-09-02 09:48
Summary: Topic leaf pages remain thin after the 01:28 guide+FAQ4 pass; hub IG must be cross-tool decision tables, workflows, and cluster examples—not more routing prose.
Visibility: people

[question]
目前的topic页面还是太薄，进行仔细分析，给出info gain方案

[try to solve]
## Context

The site has 18 topic leaf URLs at `/topics/{id}` plus `/topics` hub. Catalog is 162 tools. A previous pass (2026-09-02 01:28) added a `guide` section (3–6 paragraphs mapping jobs to tools) and a fourth FAQ in ten locales. The user still judged the pages too thin.

Site strategy already required pillar pages to include a **scenario comparison table** (`docs/2026-07-28-google-seo-strategy-implementation.md` §4). That table was never built. The 01:28 pass added more prose in the same template instead.

## Process

1. Inventoried leaf template in `scripts/site/components/content-topics.mjs`: intro → choose → limits → guide → primary card grid → optional secondary grid → FAQ×4.
2. Counted English unique editorial words (intro+choose+limits+guide+4 FAQs, excluding card blurbs that copy homepage `homeDesc`) and membership from `tool-catalog.json`.
3. Compared copy against tool-page IG (§3.1 nine dimensions), scaled-content policy, and the unused §4 pillar spec.
4. Listed every primary/secondary slug so hub modules can name real tools, not generic product types.

### Audit (English unique editorial, 2026-09-02)

| Topic | Primary | Secondary | Total tools | Editorial words | Guide paragraphs |
| --- | ---: | ---: | ---: | ---: | ---: |
| health-body | 8 | 0 | 8 | 439 | 4 |
| ai-prompt-template-builder | 9 | 0 | 9 | 436 | 6 |
| personal-money | 12 | 3 | 15 | 403 | 4 |
| text-compare | 5 | 0 | 5 | 402 | 5 |
| business-finance | 10 | 5 | 15 | 375 | 4 |
| math-stats | 14 | 2 | 16 | 354 | 4 |
| time-calendar | 4 | 1 | 5 | 329 | 4 |
| image-media | 27 | 5 | 32 | 314 | 5 |
| pdf-docs | 13 | 5 | 18 | 311 | 5 |
| network-ip | 11 | 0 | 11 | 307 | 5 |
| geometry-measure | 8 | 1 | 9 | 305 | 3 |
| design-brand | 4 | 2 | 6 | 301 | 4 |
| seo-growth | 11 | 7 | 18 | 299 | 4 |
| dev-data | 9 | 12 | 21 | 296 | 5 |
| security-ids | 4 | 6 | 10 | 292 | 5 |
| science-physics | 5 | 2 | 7 | 284 | 5 |
| home-diy | 4 | 3 | 7 | 284 | 3 |
| files-archives | 4 | 2 | 6 | 282 | 4 |

Worst mismatch: **image-media** (32 tools, 314 words) and **pdf-docs** / **seo-growth** / **dev-data** (18–21 tools, ~300 words). Tightest clusters (text-compare, prompt, health) are relatively less thin because scene→URL mapping already exists, but they still lack tables, worked cluster examples, and citations.

## Root cause / analysis

Hub thinness is not “too few FAQ items.” It is a **wrong IG unit**.

Tool-page IG answers one job (formula, one Input→Output, that tool’s failure modes). Hub IG must answer questions that **cannot live on a single tool page**: which of N tools, in what order, with what inputs, and when to leave the topic.

What the current leaves actually do:

1. **Template isomorphism.** All 18 pages share the same seven sections. Combined with 10 locales, this is the scaled-content shape Google’s spam policy targets if unique facts are missing.
2. **choose ≈ guide ≈ intro.** Three sections restate “pick by job” at different lengths. No new verifiable fact.
3. **Guide is a directory in prose.** “Open BMI for screening; open TDEE for energy” restates tool titles. Guide body has **no `<a href="/tools/{slug}">`**.
4. **Card grid is duplicate catalog.** `renderToolCardGrid` reprints `homeTitle` + `homeDesc` already on `/` and on the tool page. Zero hub-unique sentences.
5. **FAQ answers taxonomy, not jobs.** Several answers explain why a slug is primary vs secondary (internal IA). Users searching the topic do not need that.
6. **Missing the one artifact §4 already named:** scenario comparison table.
7. **Zero of tool IG dimensions 1, 4, 5, 8 at hub level:** no formulas/rules unique to the cluster, no comparison table, no clickable WHO/NIST/WCAG/IETF citations, no worked numbers.
8. **Secondary dumps.** `dev-data` has 12 secondary slugs with only a heading “Also listed here.” Looks like stuffing unless each row states why.
9. **Hub `/topics` is thinner still:** label + blurb + count. Acceptable as a navigator if leaves are thick; not a ranking target.

Word-count padding would not fix this. A 900-word isomorphic essay is still thin if it does not add a table, a pipeline, or a number another SERP hub lacks.

## Solution

### Hub IG quota (distinct from tool nine-dim)

A topic leaf may ship only if it hits **≥4 of 6**, and **#1 is mandatory**:

| # | Dimension | Hub artifact |
| --- | --- | --- |
| 1 | Decision table (mandatory) | Job × tool: inputs, default, when *not* to use, link to `/tools/{slug}` |
| 2 | Workflow | One ordered pipeline of ≥2 tools (e.g. merge → organize → compress → protect) |
| 3 | Cluster example | One worked number or file pair that spans 2+ tools |
| 4 | Cross-topic boundary | “This topic does not do X → `/topics/{other}`” with links |
| 5 | Trust block | Cluster privacy (local vs upload) and, for YMYL, ≥1 clickable authority URL |
| 6 | Secondary rationale | Each secondary slug has a one-line “why this job”, or do not list it |

Do **not** copy How/Example/Formula from child tool pages onto the hub (duplicate + scaled). Hub text must be **routing facts** the child pages cannot own.

### Page architecture

Keep: short intro, limits (strengthen citations), primary list, FAQ.

Merge/kill: **choose** into the table; **guide paragraphs** become table + workflow (stop the third restatement).

Add: decision `<table>`, workflow `<ol>` with tool links, cluster example, related-topics strip, secondary “why” column.

Cards: keep the grid for humans, but each card’s hub blurb should be a **best-for** line from the table, not `homeDesc`.

Large topics (`image-media`, `pdf-docs`, `seo-growth`, `dev-data`, `math-stats`) **must subgroup** the grid (platform specs / transform / compose / export) so 27 cards are not an undifferentiated dump.

FAQ: 4–6 items that the table does not already answer (legal, YMYL, privacy, “vs desktop suite”). Drop IA questions (“why is this listed here”).

Search intent: hubs support **in-site routing and long-tail “which tool”** queries. Do **not** retarget head terms (`pdf tools`, `image editor online`) as H1; that contradicts the long-tail gap strategy and doorway policy.

### Per-topic modules (authoritative sketch)

**health-body (YMYL):** Table screening (BMI, ideal weight) vs energy (BMR/TDEE, macros) vs composition (body fat) vs training (HR, pace, 1RM) with required inputs. Example: 70 kg / 175 cm / 30y / moderately active → BMI then TDEE then macros—labeled educational. Citations: WHO BMI adult classification; ACSM-style HR zone caveat. Boundary: not diagnosis.

**personal-money (YMYL):** Checkout (tip, discount, VAT) vs pay (salary↔hourly) vs borrow (EMI, debt payoff) vs growth (compound, 72, PV, CAGR, inflation, % change). Example: 12% APR, 5y, $10k → EMI vs extra-payment payoff order. Citations: CFPB / local tax authority for VAT as illustration only.

**business-finance:** Unit economics (markup vs three margin flavors) vs break-even vs capital (ROI, payback, NPV, IRR). Example: cost $40, price $80 → 100% markup ≠ 50% margin; then break-even units. Boundary: not IFRS statements.

**math-stats:** Center/spread vs inference vs counting vs algebra/notation. Example: {2,3,100} mean vs median; then when z-score is the wrong next step. Boundary: not mixed models.

**geometry-measure vs home-diy:** Geometry = named shape formulas; DIY = coverage + waste + bags. Example: 12×10×0.33 ft slab → volume tool then concrete bags. Cross-link both hubs.

**science-physics:** Kinematics / Ohm / density / field helper. Example: 12 V, 3 A → 4 Ω; disclaimer not house wiring. Citations: NIST SI where relevant.

**time-calendar:** Age vs date-difference vs IANA zone vs Unix s vs ms. Example: 10-digit vs 13-digit epoch. Boundary: business-day calendars out of scope.

**pdf-docs:** Structure (merge/split/organize/rotate/page numbers) vs size (compress/crop) vs access (protect/unlock) vs export (MD/JPG/sizes) vs watermark. Workflow: merge → organize → compress → protect. Example: 12-page pack, email 8 MB limit. Privacy: local processing cluster statement.

**image-media (highest priority):** Four sub-tables—platform pixel specs (YouTube, IG, LinkedIn, OG, Amazon, App Store); transform (compress/optimizer/crop/flip/border/grayscale/format/SVG); compose (merge/overlay/GIF/watermark); export (PDF/PPT/Word, Base64, EXIF). Workflow: crop to spec → convert format → compress. Example: 4K PNG hero → WebP byte budget. Do not treat 27 cards as one list.

**design-brand:** Contrast gate → palette → tokens → style guide. Example: `#1a73e8` on white vs AA/AAA. Citation: WCAG 2.2 contrast. Upstream: color-from-image is secondary.

**seo-growth:** Snippet vs technical files vs crawl notify vs CWV vs UTM. Workflow: visible copy → meta/OG → sitemap → IndexNow. Honest limit: no rank guarantee; FAQ/HowTo rich results retired. Secondary image compressors only as LCP helpers.

**network-ip:** Identity / DNS / headers / CIDR family (cheat sheet, v4 range, v6, private, Terraform, AWS VPC). Example: `/24` → 256 addresses, 254 hosts (standard caveat). Authorized testing only. Citations: RFC 1918 / 4632 as appropriate.

**dev-data:** Encode vs structure (YAML/CSV/JSON Schema) vs HTTP/debug vs docs pipeline. Secondary compare/time tools listed only with “why.” Example: invalid JSON fails schema then diff is meaningless.

**ai-prompt-template-builder:** Artifact table (template vs writing vs MJ vs sketch vs film vs short drama vs product vs Android vs iOS) with **primary field difference**. Trust: local default vs Turnstile+Workers AI. Explicit: no per-model URL.

**text-compare:** Input-object table (paste / txt / docx / JSON / xlsx) already sketched in the topic brief—promote it to HTML `<table>` with loader rules and “when not.” Example: same two strings on paste vs file page.

**security-ids:** Generate (password, UUID) vs integrity (hash, metadata) vs inspect (JWT secondary). Example: UUID v4 is not a session authenticator. Never paste live cookies.

**files-archives:** Create vs unzip/extract vs magnet parse. Example: magnet URI does not start a download. Hash as secondary verify step.

### Implementation notes (when building)

- Source of truth: structured topic modules (table rows with slug ids) in build scripts, rendered to HTML—not a third isomorphic prose blob.
- Lint: fail leaf if table missing, if a primary slug is omitted, if a named tool has no `/tools/` link, if YMYL topic lacks a citation URL, if secondary has no why-line.
- i18n: ten-locale **retrieval rewrite**, not EN template fill. Tables especially need local job language.
- Schema: keep CollectionPage + ItemList + BreadcrumbList. Do not add FAQPage for rich-result KPI (retired 2026-05). Visible FAQ stays for humans.
- Do not split 18 topics into more hub URLs. Do not noindex leaves unless a later GSC pass shows persistent crawl-not-index after thickening.

## Notes / boundaries

- Information Gain here is a content principle aligned with Helpful Content, not a confirmed ranking switch.
- Hub copy must not explain SEO/doorway/thin-URL engineering to end users (localization visible-copy rule).
- Indexing still depends on crawl + snippet-eligible people-first pages over time.
- This log is the plan; code was not changed in this turn.

[actions]
- Analysis only: catalog 162 tools, 18 leaves, editorial word counts, hub IG quota and per-topic modules (no site build)
