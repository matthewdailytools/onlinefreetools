Date: 2026-08-24 22:22
Summary: Consolidated follow-up plans from SEO tracker, GSC todo, tool inventory, and keyword funnel.

[question]
查看后续计划

[try to solve]
## 1. SEO operations (P0, near term)

Sources: `docs/seo/reviews/2026-08-12/03-todo.md`, `02-next-strategy.md`

**Indexing & hygiene (open)**
- Re-export GSC **28-day** performance report (target window 2026-08-26–09-09)
- Add `Disallow: /api/` to `robots.txt`
- Confirm `/devlogs/*` is `noindex` in production
- Unify trailing-slash canonical + 301 for info pages (fr/ja/pt/zh privacy/terms/contact)
- Expand GSC issues: soft 404 ×1, 4xx ×1, canonical conflict ×1 — list concrete URLs and fix
- Confirm last deploy: `build:site`, sitemap submit, IndexNow incremental
- Optional: `npm run verify:r2:live` (after a successful CF deploy)

**CTR / meta (done 2026-08-20; watch)**
- ru image-merge, en schema-jsonld-generator, es how-to-calculate-volume, en how-to-calculate-npv: title/description updated and IndexNow’d
- Next round: compare CTR, clicks, es sqft, ru image-merge with ≥28 days of data

**Observation window (P1, 2–4 weeks)**
- ja marginal-revenue and es/pt ROI: wait for longer-window impressions before concluding
- Multilingual image-cluster pages not indexed → open IG per slug; do not sweep 110 URLs
- de IP still ranked >70 → enrich German FAQ/Example copy
- Image-related Russian/Arabic queries → absorb into existing tools; no new doorway pages

---

## 2. Keyword funnel (ongoing cadence)

Sources: `docs/seo/keyword-to-tool-tracker.md`, `2026-08-20-long-tail-gap-strategy.md`

**Strategy:** avoid head-term wars; focus on `long_gap` / `locale_gap`; ship ≤1–2 new tools per week; prefer absorb.

**Todos**
- [ ] Weekly review: update each `keyword-daily-pool.tsv` row’s `verdict` + `competition_tier`
- [ ] Roots → AdWords: 3–5 slugs/week; seed Keyword Planner from tool-keyword-roots; pool long-tails and absorb
- [ ] Schedule `absorb` rows to update existing titles/FAQs
- [ ] Milestone M2: ≥2 consecutive weeks of draw/review that can be retrospected
- [ ] Milestone M7: first Keyword Planner pass with ≥3 slugs of long-tails pooled and absorbed

**Build candidates (pool only; no work-tasks yet)**
- `safe-paste-cleaner`
- `magnet-pull-force-calculator`

**Freshness pipeline (weekly scan)**
1. New GSC queries → prefer absorb
2. Rising long-tails from Trends + Planner
3. Social/HN/product-launch verb groups → keep only browser-doable tool intents

---

## 3. Tool development backlog

Source: `docs/2026-08-08-tool-inventory-table.md` (123 live / 13 P0 not started)

**P0 not started (quick list)**
- `create-zip-file`
- `unzip-file` (slug already in catalog; inventory table may lag)
- `safe-paste-cleaner`
- `ai-token-counter`
- `chat-export-converter`
- `ios-app-screenshot-resizer`
- `app-icon-generator-pack`
- `amazon-image-resizer`
- `favicon-and-pwa-icon-pack`
- `social-share-image-pack`

**work-tasks status `ready` and already in catalog (SEO tool cluster)** (briefs locked; engineering/i18n can proceed as capacity allows): csv-json, pdf-watermark, open-graph-preview, on-page-seo-checker, pdf-page-to-image-sizes, robots-txt-generator, utm-builder, hreflang-generator, unlock-pdf, pdf-to-markdown, archive-extractor, schema-jsonld-generator, sitemap-xml-generator, meta-serp-preview, meta-tag-generator.

**Pending POC:** `local-bg-removal`, `ocr-to-text`, `audio-wav-mp3`

---

## 4. Recent strategy directions

- **Bing AI Summary** (2026-08-21): do not chase GIMP-style desktop-tutorial intent; attack “online/browser crop” queries this site can answer; clear structure + IndexNow; do not use “appear in summary” as a KPI
- **New phrase discovery** (2026-08-21): multi-source signals → dedupe → interactive task + SERP gap → enter funnel; never create a page for every new phrase

---

## 5. Suggested priority (this week)

1. **Finish SEO P0:** robots / trailing slash / devlogs noindex / GSC anomaly URLs
2. **Prepare 28-day GSC export** (late August–early September)
3. **Keyword weekly review + 3–5 slug AdWords long-tails**
4. **Tools:** pick one from P0 not-started (e.g. create-zip-file / safe-paste-cleaner) or advance the ready-cluster i18n, by capacity

[actions]
- Consolidated from `docs/seo/`, `work-tasks/`, tool inventory, and recent dev-logs (no product code changes)
