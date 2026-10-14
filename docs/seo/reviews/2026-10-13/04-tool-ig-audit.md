# 工具页 Information Gain 审计（2026-10-13）

只读审计，**未改任何工具文案**。脚本：`node scripts/qa/audit-tool-info-gain.mjs`；全量明细见同目录 `04-tool-ig-audit.csv`。

## 结论速览

- 工具数：**317**（catalog）；母版语言 en，另核对 9 语键齐全度。
- 分桶：**A-consolidate-review** 71 · **B-enrich-first** 55 · **C-enrich-later** 11 · **D-low-priority** 180
- GSC 数据：曝光取 `docs/seo/reviews/2026-09-10/https___onlinefreetools.org_-Performance-on-Search-2026-09-10/网页.csv`（断崖前）；已抓取未索引（CNI）取 `docs/seo/reviews/2026-08-12/https___onlinefreetools.org_-Coverage-Drilldown-2026-08-12已抓取未索引/表格.csv`、`docs/seo/reviews/2026-09-07/表格.csv`。
- 晚于 2026-09-10 上线、无 GSC 数据的工具：**102** 个（表中曝光列记为 `new`，不按零曝光处理）。
- 与 `02-next-strategy.md` 一致：**先降同构表面积（A 桶），再加固幸存者（B 桶）**。批量给全部页面"加字"本身就是 scaled content 风险，审计不建议这样做。

## 下一轮第一批建议（B 桶按断崖前曝光取前 10）

逐 slug：查当前 SERP 前 5 → 写出本页能补的**可验证增量**（边界、失败态、真实样例、与兄弟工具"何时不该用"）→ 母版改写 → 十语逐语重写 ≥3 轮 → `npm run verify:tool -- --slug=<slug>`。缺 Why choose 的顺带补，但须是本页可验证差异，不能三条通用空话。

| slug | family | impr | CNI | template | nearest (sim) | IG gap | gaps | words |
|---|---|---:|---:|---:|---|---:|---|---:|
| ip-address | category:developer | 311 | 1 | 10 | domain-lookup (0.00) | 30 | how-steps<3 why-choose<3 | 467 |
| square-feet | category:calculator | 290 | 0 | 0 | batch-watermark-pdf-drafts (0.00) | 40 | how-steps<3 why-choose<3 thin<350w | 319 |
| website-headers | category:developer | 69 | 0 | 10 | check-robots-txt-url-blocked (0.00) | 30 | how-steps<3 why-choose<3 | 458 |
| file-hash | category:developer | 51 | 0 | 10 | batch-checksum-release-files (0.00) | 30 | how-steps<3 why-choose<3 | 460 |
| spf-dkim-dmarc-checker | category:developer | 37 | 0 | 12 | validate-security-txt (0.02) | 20 | why-choose<3 locale-untranslated | 464 |
| image-overlay | image | 31 | 0 | 11 | flip-image (0.01) | 30 | how-steps<3 why-choose<3 | 463 |
| timezone-converter | category:developer | 28 | 0 | 10 | how-to-calculate-scientific-notation (0.00) | 30 | how-steps<3 why-choose<3 | 495 |
| indexnow | category:developer | 26 | 3 | 10 | add-www-to-dns (0.00) | 35 | how-steps<3 why-choose<3 locale-untranslated | 553 |
| unzip-file | category:developer | 24 | 0 | 15 | archive-extractor (0.10) | 30 | how-steps<3 why-choose<3 | 426 |
| create-pdf-form | pdf | 21 | 0 | 13 | make-pdf-fillable (0.02) | 25 | why-choose<3 thin<350w | 342 |

## 分桶

### A-consolidate-review（71）

02 策略 P0/P1 同构簇（how-to-calculate / prompt）整族，外加模板分≥60 且有 GSC 数据却零曝光的页。**先定去留（合并进 hub / 301 / noindex）再谈补文案**；不要给这些页批量加字。表中曝光用于挑 hub 与幸存页。

| slug | family | impr | CNI | template | nearest (sim) | IG gap | gaps | words |
|---|---|---:|---:|---:|---|---:|---|---:|
| how-to-calculate-roi | how-to-calculate | 152 | 0 | 12 | how-to-calculate-cagr (0.03) | 30 | how-steps<3 why-choose<3 | 387 |
| how-to-calculate-percentage-change | how-to-calculate | 139 | 0 | 10 | how-to-calculate-one-rep-max (0.00) | 40 | how-steps<3 why-choose<3 thin<350w | 317 |
| how-to-calculate-aspect-ratio | how-to-calculate | 102 | 0 | 18 | how-to-calculate-tile (0.04) | 30 | how-steps<3 why-choose<3 | 353 |
| how-to-calculate-gradient | how-to-calculate | 84 | 0 | 10 |  (0.00) | 45 | how-steps<3 why-choose<3 thin<350w locale-untranslated | 284 |
| how-to-calculate-mean | how-to-calculate | 77 | 1 | 13 | how-to-calculate-median (0.03) | 40 | how-steps<3 why-choose<3 thin<350w | 116 |
| how-to-calculate-marginal-revenue | how-to-calculate | 74 | 1 | 10 | how-to-calculate-tile (0.00) | 30 | how-steps<3 why-choose<3 | 361 |
| how-to-calculate-cagr | how-to-calculate | 72 | 0 | 16 | how-to-calculate-npv (0.07) | 40 | how-steps<3 why-choose<3 thin<350w | 344 |
| how-to-calculate-triangle-area | how-to-calculate | 62 | 0 | 14 | how-to-calculate-volume (0.05) | 45 | how-steps<3 why-choose<3 thin<350w locale-untranslated | 108 |
| how-to-calculate-bmi | how-to-calculate | 58 | 0 | 10 | how-to-calculate-standard-deviation (0.00) | 40 | how-steps<3 why-choose<3 thin<350w | 328 |
| how-to-calculate-concrete | how-to-calculate | 57 | 0 | 17 | how-to-calculate-paint (0.06) | 30 | how-steps<3 why-choose<3 | 380 |
| how-to-calculate-sample-size | how-to-calculate | 52 | 0 | 10 | how-to-calculate-z-score (0.00) | 40 | how-steps<3 why-choose<3 thin<350w | 292 |
| how-to-calculate-npv | how-to-calculate | 37 | 0 | 15 | how-to-calculate-cagr (0.07) | 30 | how-steps<3 why-choose<3 | 444 |
| how-to-calculate-debt-payoff | how-to-calculate | 36 | 0 | 13 | how-to-calculate-payback-period (0.02) | 45 | how-steps<3 why-choose<3 thin<350w locale-untranslated | 197 |
| how-to-calculate-scientific-notation | how-to-calculate | 33 | 1 | 11 | how-to-calculate-aspect-ratio (0.01) | 45 | how-steps<3 why-choose<3 thin<350w locale-untranslated | 200 |
| how-to-calculate-salary-hourly | how-to-calculate | 30 | 0 | 12 | how-to-calculate-cagr (0.02) | 30 | how-steps<3 why-choose<3 | 359 |
| how-to-calculate-acceleration | how-to-calculate | 29 | 0 | 15 | how-to-calculate-velocity (0.04) | 45 | how-steps<3 why-choose<3 thin<350w locale-untranslated | 91 |
| how-to-calculate-paint | how-to-calculate | 26 | 0 | 18 | how-to-calculate-tile (0.08) | 30 | how-steps<3 why-choose<3 | 366 |
| how-to-calculate-confidence-interval | how-to-calculate | 25 | 0 | 11 | how-to-calculate-z-score (0.02) | 30 | how-steps<3 why-choose<3 | 362 |
| how-to-calculate-payback-period | how-to-calculate | 24 | 0 | 14 | how-to-calculate-rule-of-72 (0.03) | 45 | how-steps<3 why-choose<3 thin<350w locale-untranslated | 155 |
| how-to-calculate-date-difference | how-to-calculate | 20 | 0 | 14 | how-to-calculate-age (0.02) | 45 | how-steps<3 why-choose<3 thin<350w locale-untranslated | 130 |
| how-to-calculate-permutation-combination | how-to-calculate | 19 | 0 | 12 | how-to-calculate-ohms-law (0.02) | 45 | how-steps<3 why-choose<3 thin<350w locale-untranslated | 101 |
| how-to-calculate-p-value | how-to-calculate | 18 | 0 | 11 | how-to-calculate-z-score (0.02) | 40 | how-steps<3 why-choose<3 thin<350w | 325 |
| how-to-calculate-significant-figures | how-to-calculate | 17 | 0 | 10 |  (0.00) | 40 | how-steps<3 why-choose<3 thin<350w | 253 |
| how-to-calculate-density | how-to-calculate | 15 | 0 | 15 | how-to-calculate-velocity (0.07) | 45 | how-steps<3 why-choose<3 thin<350w locale-untranslated | 97 |
| how-to-calculate-profit-margin | how-to-calculate | 14 | 0 | 13 | how-to-calculate-contribution-margin (0.03) | 40 | how-steps<3 why-choose<3 thin<350w | 222 |
| how-to-calculate-slope | how-to-calculate | 14 | 0 | 10 | how-to-calculate-one-rep-max (0.00) | 40 | how-steps<3 why-choose<3 thin<350w | 201 |
| how-to-calculate-irr | how-to-calculate | 13 | 0 | 14 | how-to-calculate-rule-of-72 (0.03) | 45 | how-steps<3 why-choose<3 thin<350w locale-untranslated | 176 |
| how-to-calculate-present-value | how-to-calculate | 13 | 0 | 13 | how-to-calculate-inflation (0.03) | 45 | how-steps<3 why-choose<3 thin<350w locale-untranslated | 190 |
| how-to-calculate-circle | how-to-calculate | 13 | 0 | 12 | how-to-calculate-triangle-area (0.02) | 45 | how-steps<3 why-choose<3 thin<350w locale-untranslated | 110 |
| how-to-calculate-logarithm | how-to-calculate | 13 | 0 | 10 |  (0.00) | 40 | how-steps<3 why-choose<3 thin<350w | 210 |
| how-to-calculate-quadratic-equation | how-to-calculate | 11 | 0 | 13 | how-to-calculate-density (0.02) | 45 | how-steps<3 why-choose<3 thin<350w locale-untranslated | 114 |
| how-to-calculate-median | how-to-calculate | 11 | 0 | 13 | how-to-calculate-mean (0.03) | 40 | how-steps<3 why-choose<3 thin<350w | 130 |
| how-to-calculate-z-score | how-to-calculate | 11 | 0 | 11 | how-to-calculate-confidence-interval (0.02) | 40 | how-steps<3 why-choose<3 thin<350w | 300 |
| how-to-calculate-tile | how-to-calculate | 9 | 0 | 18 | how-to-calculate-paint (0.08) | 30 | how-steps<3 why-choose<3 | 356 |
| how-to-calculate-compound-interest | how-to-calculate | 9 | 1 | 14 | how-to-calculate-cagr (0.05) | 30 | how-steps<3 why-choose<3 | 426 |
| how-to-calculate-inflation | how-to-calculate | 8 | 0 | 14 | how-to-calculate-vat (0.03) | 45 | how-steps<3 why-choose<3 thin<350w locale-untranslated | 156 |
| how-to-calculate-tip | how-to-calculate | 8 | 0 | 13 | how-to-calculate-payback-period (0.03) | 45 | how-steps<3 why-choose<3 thin<350w locale-untranslated | 167 |
| how-to-calculate-emi | how-to-calculate | 8 | 0 | 13 | how-to-calculate-compound-interest (0.05) | 30 | how-steps<3 why-choose<3 | 459 |
| how-to-calculate-heart-rate | how-to-calculate | 7 | 0 | 12 | how-to-calculate-macros (0.04) | 45 | how-steps<3 why-choose<3 thin<350w locale-untranslated | 154 |
| how-to-calculate-exponent | how-to-calculate | 7 | 1 | 10 | instagram-post-size (0.00) | 45 | how-steps<3 why-choose<3 thin<350w locale-untranslated | 201 |

…其余 31 条见 CSV。

### B-enrich-first（55）

断崖前仍有曝光，且 IG 缺口≥20 或模板分≥40。**下一轮逐 slug 做 SERP 对比 + 补可验证增量**（每批≤10，十语逐语重写）。

| slug | family | impr | CNI | template | nearest (sim) | IG gap | gaps | words |
|---|---|---:|---:|---:|---|---:|---|---:|
| ip-address | category:developer | 311 | 1 | 10 | domain-lookup (0.00) | 30 | how-steps<3 why-choose<3 | 467 |
| square-feet | category:calculator | 290 | 0 | 0 | batch-watermark-pdf-drafts (0.00) | 40 | how-steps<3 why-choose<3 thin<350w | 319 |
| website-headers | category:developer | 69 | 0 | 10 | check-robots-txt-url-blocked (0.00) | 30 | how-steps<3 why-choose<3 | 458 |
| file-hash | category:developer | 51 | 0 | 10 | batch-checksum-release-files (0.00) | 30 | how-steps<3 why-choose<3 | 460 |
| spf-dkim-dmarc-checker | category:developer | 37 | 0 | 12 | validate-security-txt (0.02) | 20 | why-choose<3 locale-untranslated | 464 |
| image-overlay | image | 31 | 0 | 11 | flip-image (0.01) | 30 | how-steps<3 why-choose<3 | 463 |
| timezone-converter | category:developer | 28 | 0 | 10 | how-to-calculate-scientific-notation (0.00) | 30 | how-steps<3 why-choose<3 | 495 |
| indexnow | category:developer | 26 | 3 | 10 | add-www-to-dns (0.00) | 35 | how-steps<3 why-choose<3 locale-untranslated | 553 |
| unzip-file | category:developer | 24 | 0 | 15 | archive-extractor (0.10) | 30 | how-steps<3 why-choose<3 | 426 |
| create-pdf-form | pdf | 21 | 0 | 13 | make-pdf-fillable (0.02) | 25 | why-choose<3 thin<350w | 342 |
| unix-timestamp | category:developer | 19 | 1 | 10 | how-to-calculate-standard-deviation (0.00) | 30 | how-steps<3 why-choose<3 | 375 |
| merge-pdf | pdf | 15 | 2 | 20 | organize-pdf (0.11) | 25 | why-choose<3 thin<350w | 346 |
| brand-style-guide | category:design | 15 | 2 | 0 | smart-website-color-scheme (0.00) | 30 | how-steps<3 why-choose<3 | 555 |
| markdown-to-html | category:developer | 12 | 0 | 11 | yaml-json (0.00) | 30 | why-choose<3 no-formula/rules thin<350w | 300 |
| images-to-ppt | image | 10 | 3 | 12 | images-to-word (0.02) | 45 | how-steps<3 why-choose<3 thin<350w locale-untranslated | 139 |
| image-optimizer | image | 10 | 0 | 11 | image-compress (0.01) | 30 | how-steps<3 why-choose<3 | 498 |
| compare-two-pdfs | pdf | 9 | 0 | 53 | combine-files-into-one-pdf (0.41) | 30 | why-choose<3 thin<350w locale-untranslated | 265 |
| convert-word-document-to-pdf | pdf | 8 | 1 | 19 | turn-pdf-into-word-document (0.07) | 25 | why-choose<3 thin<350w | 328 |
| archive-extractor | category:developer | 8 | 0 | 14 | unzip-file (0.10) | 30 | how-steps<3 why-choose<3 | 500 |
| image-merge | image | 8 | 7 | 11 | flip-image (0.01) | 30 | how-steps<3 why-choose<3 | 425 |
| domain-lookup | category:developer | 8 | 1 | 10 | ip-address (0.00) | 30 | how-steps<3 why-choose<3 | 395 |
| image-compress | image | 7 | 0 | 13 | image-crop (0.04) | 30 | how-steps<3 why-choose<3 | 430 |
| write-countif-formula-in-excel | category:developer | 7 | 0 | 13 | wrap-formula-with-ifna (0.02) | 25 | why-choose<3 thin<350w | 232 |
| image-to-base64 | image | 7 | 3 | 11 | images-to-ppt (0.00) | 45 | how-steps<3 why-choose<3 thin<350w locale-untranslated | 179 |
| color-from-image | image | 7 | 4 | 11 | image-compress (0.01) | 30 | how-steps<3 why-choose<3 | 478 |
| instagram-post-size | category:image | 7 | 1 | 11 | youtube-thumbnail-size (0.14) | 25 | why-choose<3 thin<350w | 347 |
| validate-security-txt | category:developer | 6 | 1 | 13 | check-robots-txt-url-blocked (0.03) | 20 | why-choose<3 locale-untranslated | 372 |
| add-www-to-dns | category:developer | 6 | 3 | 10 | markdown-to-html (0.00) | 30 | how-steps<3 why-choose<3 | 497 |
| check-robots-txt-url-blocked | category:developer | 5 | 0 | 13 | find-and-validate-xml-sitemap (0.04) | 20 | why-choose<3 locale-untranslated | 461 |
| images-to-gif | image | 4 | 1 | 11 | images-to-ppt (0.00) | 45 | how-steps<3 why-choose<3 thin<350w locale-untranslated | 159 |
| open-pdf-in-browser | pdf | 3 | 1 | 59 | combine-files-into-one-pdf (0.50) | 30 | why-choose<3 thin<350w locale-untranslated | 266 |
| make-pdf-flipbook | pdf | 3 | 2 | 22 | open-pdf-in-browser (0.10) | 30 | why-choose<3 thin<350w locale-untranslated | 344 |
| images-to-word | image | 3 | 4 | 13 | images-to-ppt (0.02) | 45 | how-steps<3 why-choose<3 thin<350w locale-untranslated | 173 |
| flip-image | image | 3 | 6 | 12 | image-merge (0.01) | 45 | how-steps<3 why-choose<3 thin<350w locale-untranslated | 222 |
| image-border | image | 3 | 7 | 11 | images-to-ppt (0.00) | 45 | how-steps<3 why-choose<3 thin<350w locale-untranslated | 157 |
| brand-color-token-pack | category:design | 3 | 4 | 1 | smart-website-color-scheme (0.01) | 30 | how-steps<3 why-choose<3 | 493 |
| smart-website-color-scheme | category:design | 3 | 2 | 1 | brand-color-token-pack (0.01) | 30 | how-steps<3 why-choose<3 | 471 |
| combine-files-into-one-pdf | pdf | 2 | 0 | 61 | print-pdf (0.52) | 30 | why-choose<3 thin<350w locale-untranslated | 264 |
| open-graph-image-size | image | 2 | 0 | 17 | youtube-thumbnail-size (0.08) | 20 | why-choose<3 locale-untranslated | 355 |
| write-ifs-formula-in-excel | category:developer | 2 | 0 | 15 | write-nested-if-formula-for-excel (0.05) | 25 | why-choose<3 thin<350w | 242 |

…其余 15 条见 CSV。

### C-enrich-later（11）

无曝光但有 IG 缺口或模板味；排在 B 之后，或随族群收敛一并处理。

| slug | family | impr | CNI | template | nearest (sim) | IG gap | gaps | words |
|---|---|---:|---:|---:|---|---:|---|---:|
| extract-text-from-pdf | pdf | 0 | 0 | 41 | compare-two-pdfs (0.32) | 30 | why-choose<3 thin<350w locale-untranslated | 304 |
| add-text-to-pdf-file | pdf | 0 | 1 | 31 | open-pdf-in-browser (0.19) | 30 | why-choose<3 thin<350w locale-untranslated | 317 |
| rotate-pdf | pdf | 0 | 1 | 27 | split-pdf (0.14) | 25 | why-choose<3 thin<350w | 336 |
| write-pdf-document-online | pdf | 0 | 1 | 23 | combine-files-into-one-pdf (0.11) | 30 | why-choose<3 thin<350w locale-untranslated | 330 |
| convert-pdf-to-dwg | pdf | 0 | 1 | 21 | convert-pdf-to-pdf-a (0.11) | 25 | why-choose<3 thin<350w | 309 |
| pdf-to-jpg | pdf | 0 | 0 | 20 | rotate-pdf (0.07) | 30 | how-steps<3 why-choose<3 | 365 |
| fill-out-pdf-form | pdf | 0 | 2 | 16 | edit-pdf-form-fields (0.06) | 25 | why-choose<3 thin<350w | 345 |
| check-pdf-a-compliance | pdf | 0 | 1 | 15 | make-pdf-flipbook (0.03) | 25 | why-choose<3 thin<350w | 334 |
| core-web-vitals-checker | category:developer | 0 | 0 | 11 | ip-range-to-cidr (0.00) | 30 | how-steps<3 why-choose<3 | 390 |
| create-invoice-spreadsheet | category:calculator | 0 | 0 | 2 | write-nested-if-formula-for-excel (0.01) | 25 | why-choose<3 thin<350w | 251 |
| add-watermark | category:image | 0 | 6 | 0 | image-border (0.00) | 45 | how-steps<3 why-choose<3 thin<350w locale-untranslated | 171 |

### D-low-priority（180）

IG 缺口<20 且模板分<40。多数只缺 Why choose；随正常改版顺带补，**不要**为补键单独批量改这些页。

| slug | family | impr | CNI | template | nearest (sim) | IG gap | gaps | words |
|---|---|---:|---:|---:|---|---:|---|---:|
| compare-two-text-files-online | category:developer | 254 | 0 | 12 | compare-two-word-documents-for-differences (0.01) | 15 | why-choose<3 | 457 |
| compare-two-word-documents-for-differences | category:developer | 160 | 0 | 12 | compare-two-text-files-online (0.01) | 15 | why-choose<3 | 357 |
| measuring-magnetic-fields | category:calculator | 77 | 0 | 1 | how-to-calculate-tile (0.00) | 15 | why-choose<3 | 765 |
| linkedin-banner-size | category:image | 66 | 0 | 10 | instagram-story-size (0.13) | 15 | why-choose<3 | 387 |
| create-zip-file | category:developer | 39 | 0 | 12 | unzip-file (0.01) | 15 | why-choose<3 | 487 |
| youtube-thumbnail-size | category:image | 39 | 3 | 10 | instagram-post-size (0.14) | 15 | why-choose<3 | 362 |
| instagram-story-size | category:image | 35 | 0 | 10 | linkedin-banner-size (0.13) | 15 | why-choose<3 | 386 |
| magnet-link-decoder | category:developer | 32 | 0 | 10 | check-pdf-a-compliance (0.00) | 15 | why-choose<3 | 613 |
| ios-app-icon-size | category:image | 31 | 0 | 9 | apple-touch-icon (0.17) | 15 | why-choose<3 | 398 |
| excel-compare-files | category:developer | 26 | 1 | 12 | compare-two-word-documents-for-differences (0.01) | 15 | why-choose<3 | 416 |
| apple-touch-icon | category:image | 25 | 1 | 8 | ios-app-icon-size (0.17) | 15 | why-choose<3 | 388 |
| find-and-validate-xml-sitemap | category:developer | 24 | 1 | 13 | check-robots-txt-url-blocked (0.04) | 15 | why-choose<3 | 457 |
| file-metadata-analyzer | category:developer | 16 | 1 | 12 | svg-optimizer (0.01) | 15 | why-choose<3 | 464 |
| text-diff | category:developer | 14 | 2 | 12 | json-diff-checker-online (0.01) | 15 | why-choose<3 | 506 |
| sign-pdf-document | pdf | 13 | 1 | 20 | add-digital-signature-to-pdf (0.09) | 15 | why-choose<3 | 378 |

…其余 165 条见 CSV。

## 族群（同构簇）

| family | 工具数 | 有曝光 | 平均模板骨架占比 | 平均最近邻相似度 | 平均正文词数 |
|---|---:|---:|---:|---:|---:|
| category:developer | 80 | 50 | 0.08 | 0.06 | 508.14 |
| how-to-calculate | 60 | 59 | 0.04 | 0.03 | 239.32 |
| audio-video | 52 | 0 | 0.10 | 0.14 | 559.02 |
| pdf | 37 | 25 | 0.21 | 0.14 | 345.30 |
| image | 29 | 23 | 0.05 | 0.04 | 413.07 |
| batch | 29 | 4 | 0.06 | 0.12 | 560.28 |
| prompt | 10 | 7 | 0.63 | 0.52 | 596.30 |
| category:image | 8 | 7 | 0.09 | 0.12 | 352.00 |
| category:calculator | 6 | 5 | 0.02 | 0.02 | 345.33 |
| category:design | 4 | 4 | 0.00 | 0.01 | 510.00 |
| category:pdf | 1 | 0 | 0.03 | 0.02 | 679.00 |
| category:audio | 1 | 0 | 0.01 | 0.01 | 443.00 |

## IG 缺口分布

| 缺口 | 工具数 |
|---|---:|
| why-choose<3 | 222 |
| how-steps<3 | 95 |
| thin<350w | 87 |
| locale-untranslated | 54 |
| locale-missing-keys | 2 |
| no-formula/rules | 1 |

## 指标与方法

- **正文**：只统计可见 IG 文案（description、How 总答与步骤、Why choose、Formula/Rules、Example、Use cases、FAQ、Disclaimer、References），不含按钮/占位符。键前缀取 catalog `faqPrefix`，与 `renderToolIgSections` 一致。
- **模板骨架占比（boilerplateShare）**：母版正文按 5 词 shingle 切分（小写、数字归一为 #），某 shingle 同时出现在 ≥3 个其他工具中即算"复用骨架"；占比越高越像"换名不换壳"。
- **最近邻相似度（maxSim / nearest）**：与全站其他工具的 shingle Jaccard 最大值（忽略出现在 >40 个工具里的通用句）。
- **模板分（templateRisk, 0–100）**：骨架占比×50 + 最近邻×30 + 族群≥10 加 10 + Why choose 过半空泛加 10。
- **IG 缺口分（igGap）**：How 步骤<3、Why choose<3 或过半空泛、无 Formula/Rules、无 Example、Use cases<2、FAQ<3、无 References、YMYL 无免责声明、正文<350 词、他语缺键或与英文相同、related<2，按项加分（见 CSV `gaps` 列）。
- **Why choose 空泛**：命中"免费/免注册/本地/浏览器/快/简单"等词、无数字且≤18 词。

## 边界

- 这是**结构与模板化**的机器审计，不等于逐页 SERP 对比；B 桶落地时仍须按 `tool-i18n-seo.mdc` / `tool-i18n-localization.mdc` 逐 slug 检索、补可验证增量、十语独立重写 ≥3 轮。
- 自定义在 `*Page.ts` 里硬编码的说明区不在统计内，个别工具的正文可能被低估。
- 曝光数据截至 2026-09-10，断崖（2026-10-06）后的曝光不可用于排序。
- 去留（A 桶）属产品决策：脚本只给建议，不会改 catalog / robots / 路由。
