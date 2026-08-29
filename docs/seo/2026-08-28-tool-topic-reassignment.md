Date: 2026-08-28
Summary: Fresh topic taxonomy for all 132 tools (primary + secondary); one tool one URL; hubs may list the same slug under multiple topics.

# Tool → Topic reassignment (fresh analysis)

**Scope:** All slugs in `src/site/tool-catalog.json` (n=132).  
**Method:** Re-cluster by **user job / domain intent**, not by existing catalog `category` or legacy `/topics/*` cluster IDs.  
**Rules:**

- Each tool has exactly **one primary** topic (breadcrumb / default hub).
- **Secondary** topics = extra hub list membership only (same `/tools/{slug}`).
- No duplicate tool URLs per topic.

## Topic definitions

| Topic ID | Hub slug (proposed) | What it is for | Who |
| --- | --- | --- | --- |
| `health-body` | `health-body` | Body metrics, nutrition, cardio / strength fitness | Consumers, coaches |
| `personal-money` | `personal-money` | Household money: loans, tips, salary, inflation, VAT, discounts | Consumers |
| `business-finance` | `business-finance` | Firm / deal math: margins, break-even, NPV, IRR, ROI, markup | Operators, analysts |
| `math-stats` | `math-stats` | School / analytics math: algebra, averages, inference | Students, analysts |
| `geometry-measure` | `geometry-measure` | Shapes, slope/ratio, generic unit conversion | Students, makers |
| `science-physics` | `science-physics` | Physics / lab-style quantities | Students, hobby STEM |
| `home-diy` | `home-diy` | Materials & room estimates (paint, tile, concrete, area) | Homeowners, contractors |
| `time-calendar` | `time-calendar` | Dates, age, time zones, Unix time | Everyone, eng |
| `pdf-docs` | `pdf-docs` | Create / edit / protect PDFs | Office, ops |
| `image-media` | `image-media` | Edit, compress, convert, compose images / GIF | Creators, marketers |
| `design-brand` | `design-brand` | Color systems, contrast, brand tokens / guides | Designers, PMs |
| `seo-growth` | `seo-growth` | Meta, SERP, crawl, IndexNow, UTM, CWV | SEOs, marketers |
| `network-ip` | `network-ip` | IP, DNS, HTTP headers, CIDR / subnet | Net / SRE / devops |
| `dev-data` | `dev-data` | Encode, transform, validate data & text for builders | Developers |
| `security-ids` | `security-ids` | Passwords, UUIDs, hashes, token peek | Security-minded users |
| `files-archives` | `files-archives` | Zip / archives, magnet parse, file packaging | Power users |

## Counts by primary topic

| Topic ID | Primary count |
| --- | ---: |
| `health-body` | 8 |
| `personal-money` | 12 |
| `business-finance` | 10 |
| `math-stats` | 14 |
| `geometry-measure` | 8 |
| `science-physics` | 5 |
| `home-diy` | 4 |
| `time-calendar` | 4 |
| `pdf-docs` | 13 |
| `image-media` | 17 |
| `design-brand` | 4 |
| `seo-growth` | 11 |
| `network-ip` | 8 |
| `dev-data` | 8 |
| `security-ids` | 3 |
| `files-archives` | 3 |
| **Total** | **132** |

## Master table (all tools)

| Slug | Primary topic | Secondary topic(s) | Notes |
| --- | --- | --- | --- |
| `how-to-calculate-bmi` | `health-body` | — | YMYL body metric |
| `how-to-calculate-bmr-tdee` | `health-body` | — | Nutrition energy |
| `how-to-calculate-body-fat` | `health-body` | — | |
| `how-to-calculate-ideal-weight` | `health-body` | — | |
| `how-to-calculate-macros` | `health-body` | — | |
| `how-to-calculate-heart-rate` | `health-body` | — | Training zones |
| `how-to-calculate-pace` | `health-body` | `time-calendar` | Run/walk pace |
| `how-to-calculate-one-rep-max` | `health-body` | — | Strength |
| `how-to-calculate-tip` | `personal-money` | — | Everyday spend |
| `how-to-calculate-discount` | `personal-money` | `business-finance` | Shopper + retail |
| `how-to-calculate-vat` | `personal-money` | `business-finance` | Tax on purchases / invoices |
| `how-to-calculate-salary-hourly` | `personal-money` | — | Compensation |
| `how-to-calculate-emi` | `personal-money` | — | Loan installment |
| `how-to-calculate-debt-payoff` | `personal-money` | — | |
| `how-to-calculate-compound-interest` | `personal-money` | `business-finance` | Savings + investing |
| `how-to-calculate-inflation` | `personal-money` | — | Purchasing power |
| `how-to-calculate-rule-of-72` | `personal-money` | — | Doubling heuristic |
| `how-to-calculate-present-value` | `personal-money` | `business-finance` | |
| `how-to-calculate-cagr` | `personal-money` | `business-finance` | Returns |
| `how-to-calculate-percentage-change` | `personal-money` | `math-stats` | Money + general % |
| `how-to-calculate-roi` | `business-finance` | `personal-money` | Primary = deal / campaign ROI |
| `how-to-calculate-break-even` | `business-finance` | — | |
| `how-to-calculate-contribution-margin` | `business-finance` | — | |
| `how-to-calculate-gross-margin` | `business-finance` | — | |
| `how-to-calculate-profit-margin` | `business-finance` | — | |
| `how-to-calculate-markup` | `business-finance` | `personal-money` | Pricing |
| `how-to-calculate-marginal-revenue` | `business-finance` | — | |
| `how-to-calculate-npv` | `business-finance` | — | |
| `how-to-calculate-irr` | `business-finance` | — | |
| `how-to-calculate-payback-period` | `business-finance` | — | |
| `how-to-calculate-mean` | `math-stats` | — | |
| `how-to-calculate-median` | `math-stats` | — | |
| `how-to-calculate-standard-deviation` | `math-stats` | — | |
| `how-to-calculate-z-score` | `math-stats` | — | |
| `how-to-calculate-p-value` | `math-stats` | — | |
| `how-to-calculate-confidence-interval` | `math-stats` | — | |
| `how-to-calculate-sample-size` | `math-stats` | — | |
| `how-to-calculate-permutation-combination` | `math-stats` | — | |
| `how-to-calculate-gpa` | `math-stats` | — | School grading |
| `how-to-calculate-exponent` | `math-stats` | — | |
| `how-to-calculate-logarithm` | `math-stats` | — | |
| `how-to-calculate-scientific-notation` | `math-stats` | `science-physics` | |
| `how-to-calculate-significant-figures` | `math-stats` | `science-physics` | |
| `how-to-calculate-quadratic-equation` | `math-stats` | — | |
| `how-to-calculate-pythagorean-theorem` | `geometry-measure` | `math-stats` | |
| `how-to-calculate-triangle-area` | `geometry-measure` | — | |
| `how-to-calculate-circle` | `geometry-measure` | — | |
| `how-to-calculate-volume` | `geometry-measure` | `home-diy` | Containers + DIY |
| `how-to-calculate-slope` | `geometry-measure` | — | |
| `how-to-calculate-gradient` | `geometry-measure` | `home-diy` | Roads / ramps / grades |
| `how-to-calculate-aspect-ratio` | `geometry-measure` | `image-media` | Screens + crops |
| `unit-converter` | `geometry-measure` | `home-diy` | Generic hub converter |
| `square-feet` | `home-diy` | `geometry-measure` | Area for rooms / lots |
| `how-to-calculate-paint` | `home-diy` | — | |
| `how-to-calculate-tile` | `home-diy` | — | |
| `how-to-calculate-concrete` | `home-diy` | — | |
| `how-to-calculate-acceleration` | `science-physics` | — | |
| `how-to-calculate-velocity` | `science-physics` | — | |
| `how-to-calculate-ohms-law` | `science-physics` | — | |
| `how-to-calculate-density` | `science-physics` | — | |
| `measuring-magnetic-fields` | `science-physics` | — | |
| `how-to-calculate-age` | `time-calendar` | `personal-money` | Age + some finance age inputs |
| `how-to-calculate-date-difference` | `time-calendar` | — | |
| `timezone-converter` | `time-calendar` | `dev-data` | |
| `unix-timestamp` | `time-calendar` | `dev-data` | Eng-heavy datetime |
| `compress-pdf` | `pdf-docs` | — | |
| `crop-pdf` | `pdf-docs` | — | |
| `merge-pdf` | `pdf-docs` | — | |
| `split-pdf` | `pdf-docs` | — | |
| `organize-pdf` | `pdf-docs` | — | |
| `rotate-pdf` | `pdf-docs` | — | |
| `protect-pdf` | `pdf-docs` | `security-ids` | |
| `unlock-pdf` | `pdf-docs` | `security-ids` | |
| `pdf-page-numbers` | `pdf-docs` | — | |
| `pdf-watermark` | `pdf-docs` | `image-media` | |
| `pdf-to-markdown` | `pdf-docs` | `dev-data` | Doc → text bridge |
| `pdf-to-jpg` | `pdf-docs` | `image-media` | |
| `pdf-page-to-image-sizes` | `pdf-docs` | `image-media` | Spec helper |
| `images-to-pdf` | `image-media` | `pdf-docs` | Primary = image batch job |
| `add-watermark` | `image-media` | — | Raster watermark |
| `color-from-image` | `image-media` | `design-brand` | Extract → brand |
| `flip-image` | `image-media` | — | |
| `image-border` | `image-media` | — | |
| `image-compress` | `image-media` | `seo-growth` | Perf / CWV adjacent |
| `image-crop` | `image-media` | — | |
| `image-exif` | `image-media` | `security-ids` | Privacy strip / inspect |
| `image-format-converter` | `image-media` | — | |
| `image-grayscale` | `image-media` | — | |
| `image-merge` | `image-media` | — | |
| `image-optimizer` | `image-media` | `seo-growth` | |
| `image-overlay` | `image-media` | — | |
| `image-to-base64` | `image-media` | `dev-data` | Embed for code |
| `images-to-gif` | `image-media` | — | |
| `images-to-ppt` | `image-media` | `pdf-docs` | Office export |
| `images-to-word` | `image-media` | `pdf-docs` | |
| `brand-color-token-pack` | `design-brand` | — | |
| `brand-style-guide` | `design-brand` | — | |
| `smart-website-color-scheme` | `design-brand` | `seo-growth` | Web palette |
| `wcag-contrast-checker` | `design-brand` | `seo-growth` | A11y + SEO quality |
| `core-web-vitals-checker` | `seo-growth` | `image-media` | Perf; images often culprit |
| `hreflang-generator` | `seo-growth` | — | |
| `indexnow` | `seo-growth` | — | |
| `meta-serp-preview` | `seo-growth` | — | |
| `meta-tag-generator` | `seo-growth` | — | |
| `on-page-seo-checker` | `seo-growth` | — | |
| `open-graph-preview` | `seo-growth` | `design-brand` | Social cards |
| `robots-txt-generator` | `seo-growth` | — | |
| `schema-jsonld-generator` | `seo-growth` | `dev-data` | Structured data |
| `sitemap-xml-generator` | `seo-growth` | — | |
| `utm-builder` | `seo-growth` | — | Campaign tracking |
| `add-www-to-dns` | `network-ip` | `seo-growth` | DNS + site launch |
| `domain-lookup` | `network-ip` | — | |
| `ip-address` | `network-ip` | — | |
| `website-headers` | `network-ip` | `seo-growth` | Debug + SEO headers |
| `cidr-to-ip-range` | `network-ip` | — | |
| `ip-range-to-cidr` | `network-ip` | — | |
| `private-cidr-ranges` | `network-ip` | — | RFC1918 reference |
| `terraform-cidrsubnet` | `network-ip` | `dev-data` | IaC subnet helper |
| `base64` | `dev-data` | `security-ids` | Encode / decode |
| `csv-json` | `dev-data` | — | |
| `html-entity` | `dev-data` | — | |
| `json-schema-validator` | `dev-data` | — | |
| `jwt-decoder` | `dev-data` | `security-ids` | Inspect tokens |
| `markdown-to-html` | `dev-data` | `pdf-docs` | Content pipeline |
| `text-diff` | `dev-data` | — | |
| `yaml-json` | `dev-data` | — | |
| `password-generator` | `security-ids` | — | |
| `uuid-generator` | `security-ids` | `dev-data` | |
| `file-hash` | `security-ids` | `files-archives` | Integrity |
| `archive-extractor` | `files-archives` | — | |
| `unzip-file` | `files-archives` | — | |
| `magnet-link-decoder` | `files-archives` | `dev-data` | P2P link parse |

## Ambiguous primaries (review list)

| Slug | Chosen primary | Alternative that also fits | Why this primary |
| --- | --- | --- | --- |
| `how-to-calculate-roi` | `business-finance` | `personal-money` | SERP / brief skew to investment & campaign ROI |
| `how-to-calculate-percentage-change` | `personal-money` | `math-stats` | Highest everyday use is price / finance deltas |
| `how-to-calculate-discount` | `personal-money` | `business-finance` | Consumer shopping intent dominates |
| `square-feet` | `home-diy` | `geometry-measure` | Job = room / lot area, not abstract geometry |
| `unit-converter` | `geometry-measure` | `home-diy` | Broad converter, not DIY-only |
| `images-to-pdf` | `image-media` | `pdf-docs` | Starts from images as the job |
| `pdf-to-jpg` | `pdf-docs` | `image-media` | Starts from PDF |
| `image-compress` / `image-optimizer` | `image-media` | `seo-growth` | Core job is image file; list also on SEO hub |
| `website-headers` | `network-ip` | `seo-growth` | HTTP/network inspect first |
| `terraform-cidrsubnet` | `network-ip` | `dev-data` | Subnet math is networking job |
| `unix-timestamp` | `time-calendar` | `dev-data` | Time conversion first; eng as secondary |
| `schema-jsonld-generator` | `seo-growth` | `dev-data` | Search markup job |

## Suggested next steps (not done in this doc)

1. Validate ambiguous rows with GSC / keyword primary intent.
2. When building hubs: one `/topics/{hub-slug}` page per Topic ID; list all tools where primary **or** secondary matches.
3. Breadcrumb uses **primary** only.
4. Optionally sync `related` toward same primary + strong secondary neighbors (separate PR).
