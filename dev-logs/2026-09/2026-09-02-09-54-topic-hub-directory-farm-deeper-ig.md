Date: 2026-09-02 09:54
Summary: Second-pass analysis: topic thinness is a three-layer indexable directory farm (topics + where2use + tool-type); tables alone would still be isomorphic unless one hub layer ranks and table cells carry facts cards do not.
Visibility: people

[question]
再次进行深入分析

[try to solve]
## Context

The previous pass (same morning) measured 18 topic leaves at 282–439 English editorial words and recommended hub-specific IG: decision tables, workflows, cluster examples. The user asked for a deeper pass. This round tests whether “add tables” would actually create Information Gain versus SERP and versus **other indexable directories already on this site**.

## Process

1. Mapped every indexable directory class: `/topics` (19 URLs), `/where-to-use-tools` (13), `/tool-type` (9) = **41 English directory URLs × 10 locales = 410** sitemap entries. All are allowed in `robots.txt`.
2. Computed Jaccard overlap of intro vs choose vs guide tokens; character counts per locale (whitespace word counts lie for zh/ja).
3. Compared tool-set membership between topic leaves and matching scenario/subject leaves.
4. Read taxonomy copy (`i18n-taxonomy.mjs`) and the 2026-08-09 log that shipped those pages as “indexable listing pages matching the home layout.”
5. Checked meta descriptions, secondary ItemList inflation, and what “PDF tools” SERP hubs actually compete on (feature grids, free-tier limits, upload vs local).

## Root cause / analysis

### 1. Last plan treated the wrong unit

Topic pages are the **least thin** directory class. They already have intro, limits, guide, and four FAQs. The thinner siblings are:

- `/where-to-use-tools/{id}`: H1 like “Health tools” / “Salud tools”; meta desc template “Browse free online tools tagged for X. **Same card layout as the homepage**”; blurb ~10–17 words. Only `seo` has modules.
- `/tool-type/{id}`: H1 “Tools for pdf”; blurb 6–11 words; card grid only.

Thickening only `/topics/*` leaves ~22 other English directory URLs (×10 locales) as homepage clones. Google’s scaled-content policy is **method-agnostic**: a farm of facet URLs listing the same tools is the risk, whether or not one facet later gets a table.

### 2. Three facets, one tool set (near-duplicate CollectionPages)

Jaccard of **tool membership** (not copy):

| Topic | Vs scenario / subject | Jaccard |
| --- | --- | --- |
| image-media (32) | media (27) / image (26) | 0.84 / 0.81 |
| pdf-docs (18) | documents (18) / pdf (13) | 0.64 / 0.72 |
| network-ip (11) | tool-type/network (12) | 0.92 |
| design-brand (6) | design (5) / color (5) | 0.83 |
| health-body (8) | health (6) | 0.75 |

Same slugs appear in topic `ItemList` JSON-LD, scenario `ItemList`, subject `ItemList`, plus homepage cards. Canonical tool URL stays `/tools/{slug}` (good), but the **hub URLs are interchangeable directories**. That is closer to doorway/faceted thinness than to three complementary guides.

`dev-data` adds 12 secondary slugs with no “why” line (56 secondary listings site-wide). Secondary membership without rationale inflates CollectionPage item lists across topics.

### 3. More words ≠ less thin (choose ≈ guide)

Token Jaccard **choose vs guide**:

- text-compare **0.54**, prompt **0.41**, geometry **0.42**, pdf-docs **0.38**, time-calendar **0.39**
- Those were yesterday’s “better” topics (400+ words) because they repeat the same scene→tool map in two sections.

Intro vs choose stays low (different job). The 01:28 guide pass duplicated `choose`, it did not add a new fact type.

### 4. Locale is a second thinness axis

Non-whitespace character counts for the same 18×(intro+choose+limits+guide+FAQ) block:

en 34628 · es 29147 · fr 25839 · pt 24942 · id 23919 · de 22049 · ru 21890 · ar 20060 · **zh 13490** · **ja 12001**

CJK is denser, so zh/ja are not 1/3 as informative as the ratio suggests—but they are still shorter, and non-en taxonomy titles keep an English “tools” suffix (`Salud tools`, `健康 tools`). That is a scaled-MT fingerprint on the **thinner** URL class.

Prompt topic meta description is **201 characters** (over the 120–160 head guideline). Most topic metas are laundry lists of tool names—directory snippets, not a decision answer.

### 5. Tables can become the fourth isomorphic template

SERP for category-like PDF queries is already **feature matrices** (merge/split/compress/protect × iLovePDF/Smallpdf/clones). A 13-row “job → this site’s slug” table that only restates card titles is not Information Gain; it is the same directory in `<table>`. Competitors already win that layout with more tools.

Hub cells that **would** be incremental vs those SERPs:

- Browser-local vs upload (this site’s real cluster fact)
- Honest non-goals (no OCR, no e-sign, Word compare is not PDF)
- Order under a constraint (merge → organize → compress once, keep uncompressed backup)
- Cross-topic routing (images-to-PDF lives on image-media; JSON/Excel diffs on text-compare)
- One worked size/memory example

If every topic table uses the same four columns (Job / Tool / Inputs / Don’t use) filled with title paraphrases, 18 tables × 10 locales is **new scaled content**, not a fix.

### 6. H1 fights the long-tail strategy

Topic H1s are category nouns: “PDF & document tools”, “Health & body metric tools”, “Image & media editing tools”. Taxonomy H1s are even more head-term (`Health tools`, `Tools for pdf`). Site strategy (2026-08-20) forbids attacking occupied category heads; ranking units are **tool pages** with scene-long-tail H1s.

Hubs currently target queries they are not allowed to “win” and lack the IG to win anyway. The queries a hub *can* own are decision queries: “merge or compress first”, “BMI then TDEE then macros”, “paste vs file vs JSON diff”. Those are not the current H1s.

### 7. Architecture vs ranking were collapsed

Tool breadcrumbs already inject PageRank-like internal links into every `/topics/{primary}`. That IA job does **not** require the leaf to rank for “PDF tools”. Indexable + sitemap + CollectionPage + 10 locales means the site **chose ranking** while writing **IA directories**. Taxonomy (2026-08-09) was explicitly shipped as homepage-clone listings.

## Solution (revised; still analysis)

### Decision 0 (must confirm before writing tables)

Pick **one** indexable hub layer. Recommended default:

| Layer | Role | Indexing |
| --- | --- | --- |
| `/topics/{id}` | Job decision documents (the IG surface) | Keep indexable; thicken with **non-card facts** |
| `/where-to-use-tools/*` | Legacy scenario facet; overlaps topics at 0.5–0.84 | **301** close pairs (health→health-body, documents→pdf-docs, media→image-media, …) or `noindex,follow` if 301 is too lossy |
| `/tool-type/*` | File-type filter | `noindex,follow` (useful UX, disastrous as ranking URLs: “Tools for pdf”) |
| `/topics` hub | Navigator | Indexable OK if leaves are unique; do not chase head terms |

Do not thicken all three. Do not add comparison tables to taxonomy leaves.

### Hub IG quality bar (replaces “must have a table”)

A topic leaf is not thin iff **each named tool in the decision artifact has ≥1 sentence that is false on the homepage card** (input you must have, failure, or “use the other slug”). A table is only the **format**. Quota:

1. Decision artifact (table **or** grouped sub-tables for 15+ tools)—mandatory  
2. One workflow **or** one cluster numeric/file example  
3. Cross-topic / non-goal links  
4. Trust: local-processing cluster line; YMYL citation URL  

FAQ only for questions the table cannot answer. Delete choose **or** guide so one scene map remains. Hub card blurbs = table “best for”, not `homeDesc`. H1 = decision query, nav label may stay short.

### What not to do

- 18 isomorphic tables as a new template  
- FAQ5–8 or longer guide paragraphs  
- Feature-checklist IG vs iLovePDF  
- Head-term H1s (`PDF tools`, `Health tools`) as ranking KPI  
- Copying tool-page Formula/Example onto hubs  
- Leaving taxonomy indexable “for later”

## Notes / boundaries

- 301 vs noindex for taxonomy needs a human call (crawl history, GSC). This log does not change routes.
- CJK character ratios are not 1:1 information ratios; still, zh/ja hub copy is materially shorter than en.
- Information Gain remains a helpful-content principle, not a confirmed ranking switch.
- Sitemap already includes all three layers; crawl budget is already spent on the farm.

[actions]
- Analysis only: directory URL census, membership Jaccard, choose/guide overlap, locale character counts, taxonomy copy audit (no code or sitemap change)
