# 薄页逐页改写队列（2026-10-13）

**第一阶段方案（站长确认 2026-10-13）**：devlogs 剔出 sitemap 并 noindex；薄页 slug **逐页改写**（不批量灌字、不做近义拆页）。

来源：`04-tool-ig-audit.csv` 中 `gaps` 含 `thin<350w` 的 87 个工具。

## 改写约束（每个 slug 都要满足）

1. **一次一个 slug**，前一个 `verify:tool` 绿之前不开下一个（`tool-coverage-pass`）。
2. 先查该 slug 的同意图搜法与 SERP 常见结构，写进 `work-tasks/{slug}/02-tool-info.md`（同意图相关搜索表 + 意图审查），再写母版。
3. 新增内容必须是**本页可验证的增量**：能在交互里复现的样例、真实边界与报错、何时应改用别的工具。不得堆同义句或通用"免费 / 快 / 本地"。
4. 顺手修复页面实测发现的功能问题（例如输入解析）——功能问题优先于文案。
5. 十语按 `03-locale-briefs.md` 逐语独立重写（每批 ≤3 语）；他语残留英文（`localeSameAsEn`）必须清零。
6. 每个 slug 完成后：`tool:touch` → `verify:tool` → 在下表把状态改为 `done` 并写日期。
7. 节奏：宁慢勿量。**每完成 10 个 slug**（相对队列起点累计）做一次增量发版：`build:site:changed` → `upload:r2`（hash 增量）→ `git:deploy`（含当批工具 + 尚未上线的站点改动如 devlogs noindex）。末批不足 10 个也发。

## 队列

优先级 = 断崖前曝光 ×（350 − 正文词数）/ 350 + 他语与英文相同条数 / 10。`new` = 2026-09-10 之后上线，无 GSC 数据。

| # | slug | family | 词数 | 曝光 | 他语=英文 | 审计桶 | 优先级 | 状态 |
|---:|---|---|---:|---:|---:|---|---:|---|
| 1 | how-to-calculate-mean | how-to-calculate | 116 | 77 | 0 | A | 51.5 | done 2026-10-13 |
| 2 | how-to-calculate-triangle-area | how-to-calculate | 108 | 62 | 7 | A | 43.6 | done 2026-10-13 |
| 3 | square-feet | category:calculator | 319 | 290 | 0 | B | 25.7 | done 2026-10-13 |
| 4 | how-to-calculate-acceleration | how-to-calculate | 91 | 29 | 7 | A | 22.2 | done 2026-10-13 |
| 5 | how-to-calculate-debt-payoff | how-to-calculate | 197 | 36 | 7 | A | 16.4 | done 2026-10-13 |
| 6 | images-to-ppt | image | 139 | 10 | 104 | B | 16.4 | done 2026-10-13 |
| 7 | how-to-calculate-gradient | how-to-calculate | 284 | 84 | 4 | A | 16.2 | done 2026-10-13 |
| 8 | compare-two-pdfs | pdf | 265 | 9 | 133 | B | 15.5 | done 2026-10-14 |
| 9 | flip-image | image | 222 | 3 | 136 | B | 14.7 | done 2026-10-14 |
| 10 | image-to-base64 | image | 179 | 7 | 112 | B | 14.6 | done 2026-10-14 |
| 11 | how-to-calculate-scientific-notation | how-to-calculate | 200 | 33 | 1 | A | 14.2 | done 2026-10-14 |
| 12 | how-to-calculate-permutation-combination | how-to-calculate | 101 | 19 | 7 | A | 14.2 | done 2026-10-14 |
| 13 | how-to-calculate-payback-period | how-to-calculate | 155 | 24 | 7 | A | 14.1 | done 2026-10-14 |
| 14 | how-to-calculate-date-difference | how-to-calculate | 130 | 20 | 7 | A | 13.3 | done 2026-10-14 |
| 15 | image-grayscale | image | 136 | 2 | 120 | B | 13.2 | done 2026-10-14 |
| 16 | how-to-calculate-percentage-change | how-to-calculate | 317 | 139 | 0 | A | 13.1 | done 2026-10-14 |
| 17 | images-to-gif | image | 159 | 4 | 104 | B | 12.6 | done 2026-10-14 |
| 18 | open-pdf-in-browser | pdf | 266 | 3 | 117 | B | 12.4 | done 2026-10-14 |
| 19 | combine-files-into-one-pdf | pdf | 264 | 2 | 117 | B | 12.2 | done 2026-10-14 |
| 20 | add-watermark | category:image | 171 | 0 | 120 | C | 12.0 | done 2026-10-14 |
| 21 | print-pdf | pdf | 267 | 0 | 117 | A | 11.7 | done 2026-10-14 |
| 22 | how-to-calculate-density | how-to-calculate | 97 | 15 | 7 | A | 11.5 | done 2026-10-14 |
| 23 | image-border | image | 157 | 3 | 96 | B | 11.3 | done 2026-10-14 |
| 24 | images-to-pdf | pdf | 158 | 1 | 104 | B | 10.9 | done 2026-10-14 |
| 25 | extract-text-from-pdf | pdf | 304 | 0 | 104 | C | 10.4 | done 2026-10-14 |
| 26 | images-to-word | image | 173 | 3 | 88 | B | 10.3 | done 2026-10-14 |
| 27 | how-to-calculate-circle | how-to-calculate | 110 | 13 | 7 | A | 9.6 | done 2026-10-14 |
| 28 | how-to-calculate-sample-size | how-to-calculate | 292 | 52 | 0 | A | 8.6 | done 2026-10-14 |
| 29 | how-to-calculate-quadratic-equation | how-to-calculate | 114 | 11 | 7 | A | 8.1 | done 2026-10-14 |
| 30 | add-text-to-pdf-file | pdf | 317 | 0 | 72 | C | 7.2 | done 2026-10-14 |
| 31 | how-to-calculate-irr | how-to-calculate | 176 | 13 | 7 | A | 7.2 | done 2026-10-15 |
| 32 | how-to-calculate-median | how-to-calculate | 130 | 11 | 0 | A | 6.9 | done 2026-10-15 |
| 33 | how-to-calculate-present-value | how-to-calculate | 190 | 13 | 7 | A | 6.6 | done 2026-10-15 |
| 34 | how-to-calculate-slope | how-to-calculate | 201 | 14 | 0 | A | 6.0 | done 2026-10-15 |
| 35 | how-to-calculate-tip | how-to-calculate | 167 | 8 | 14 | A | 5.6 | done 2026-10-15 |
| 36 | how-to-calculate-heart-rate | how-to-calculate | 154 | 7 | 14 | A | 5.3 | done 2026-10-15 |
| 37 | how-to-calculate-logarithm | how-to-calculate | 210 | 13 | 0 | A | 5.2 | done 2026-10-15 |
| 38 | how-to-calculate-inflation | how-to-calculate | 156 | 8 | 7 | A | 5.1 | done 2026-10-15 |
| 39 | how-to-calculate-profit-margin | how-to-calculate | 222 | 14 | 0 | A | 5.1 | done 2026-10-15 |
| 40 | how-to-calculate-velocity | how-to-calculate | 99 | 6 | 7 | A | 5.0 | done 2026-10-15 |
| 41 | write-pdf-document-online | pdf | 330 | 0 | 48 | C | 4.8 | done 2026-10-15 |
| 42 | how-to-calculate-significant-figures | how-to-calculate | 253 | 17 | 0 | A | 4.7 | done 2026-10-15 |
| 43 | how-to-calculate-pace | how-to-calculate | 124 | 5 | 7 | A | 3.9 | done 2026-10-15 |
| 44 | how-to-calculate-bmi | how-to-calculate | 328 | 58 | 0 | A | 3.6 | done 2026-10-15 |
| 45 | make-pdf-flipbook | pdf | 344 | 3 | 32 | B | 3.3 | done 2026-10-15 |
| 46 | how-to-calculate-exponent | how-to-calculate | 201 | 7 | 2 | A | 3.2 | done 2026-10-15 |
| 47 | how-to-calculate-rule-of-72 | how-to-calculate | 162 | 4 | 7 | A | 2.8 | done 2026-10-16 |
| 48 | how-to-calculate-pythagorean-theorem | how-to-calculate | 222 | 7 | 1 | A | 2.7 | done 2026-10-16 |
| 49 | write-countif-formula-in-excel | category:developer | 232 | 7 | 0 | B | 2.4 | done 2026-10-16 |
| 50 | how-to-calculate-volume | how-to-calculate | 107 | 2 | 7 | A | 2.1 | done 2026-10-16 |
| 51 | how-to-calculate-one-rep-max | how-to-calculate | 121 | 2 | 7 | A | 2.0 | done 2026-10-16 |
| 52 | how-to-calculate-markup | how-to-calculate | 188 | 3 | 6 | A | 2.0 | done 2026-10-16 |
| 53 | how-to-calculate-vat | how-to-calculate | 176 | 1 | 14 | A | 1.9 | todo |
| 54 | markdown-to-html | category:developer | 300 | 12 | 0 | B | 1.7 | todo |
| 55 | how-to-calculate-discount | how-to-calculate | 270 | 7 | 0 | A | 1.6 | todo |
| 56 | how-to-calculate-z-score | how-to-calculate | 300 | 11 | 0 | A | 1.6 | todo |
| 57 | how-to-calculate-p-value | how-to-calculate | 325 | 18 | 0 | A | 1.3 | todo |
| 58 | how-to-calculate-macros | how-to-calculate | 149 | 1 | 7 | A | 1.3 | todo |
| 59 | how-to-calculate-age | how-to-calculate | 160 | 1 | 7 | A | 1.2 | todo |
| 60 | how-to-calculate-cagr | how-to-calculate | 344 | 72 | 0 | A | 1.2 | todo |
| 61 | how-to-calculate-contribution-margin | how-to-calculate | 176 | 2 | 0 | A | 1.0 | todo |
| 62 | how-to-calculate-gpa | how-to-calculate | 305 | 7 | 0 | A | 0.9 | todo |
| 63 | create-budget-spreadsheet | category:calculator | 218 | 2 | 0 | B | 0.8 | todo |
| 64 | how-to-calculate-ohms-law | how-to-calculate | 110 | 0 | 7 | A | 0.7 | todo |
| 65 | write-nested-if-formula-for-excel | category:developer | 233 | 2 | 0 | B | 0.7 | todo |
| 66 | write-ifs-formula-in-excel | category:developer | 242 | 2 | 0 | B | 0.6 | todo |
| 67 | how-to-calculate-body-fat | how-to-calculate | 316 | 6 | 0 | A | 0.6 | todo |
| 68 | convert-word-document-to-pdf | pdf | 328 | 8 | 0 | B | 0.5 | todo |
| 69 | create-pdf-form | pdf | 342 | 21 | 0 | B | 0.5 | todo |
| 70 | excel-formulas-cheat-sheet | category:developer | 216 | 1 | 0 | B | 0.4 | todo |
| 71 | create-excel-timesheet | category:calculator | 216 | 1 | 0 | B | 0.4 | todo |
| 72 | wrap-formula-with-ifna | category:developer | 240 | 1 | 0 | B | 0.3 | todo |
| 73 | unit-converter | category:calculator | 303 | 2 | 0 | B | 0.3 | todo |
| 74 | how-to-calculate-ideal-weight | how-to-calculate | 320 | 3 | 0 | A | 0.3 | todo |
| 75 | convert-pdf-to-pdf-a | pdf | 284 | 1 | 0 | B | 0.2 | todo |
| 76 | how-to-calculate-gross-margin | how-to-calculate | 319 | 2 | 0 | A | 0.2 | todo |
| 77 | merge-pdf | pdf | 346 | 15 | 0 | B | 0.2 | todo |
| 78 | instagram-post-size | category:image | 347 | 7 | 0 | B | 0.1 | todo |
| 79 | turn-pdf-into-word-document | pdf | 333 | 1 | 0 | B | 0.0 | todo |
| 80 | edit-pdf-form-fields | pdf | 341 | 1 | 0 | B | 0.0 | todo |
| 81 | rotate-pdf | pdf | 336 | 0 | 0 | C | 0.0 | todo |
| 82 | convert-pdf-to-dwg | pdf | 309 | 0 | 0 | C | 0.0 | todo |
| 83 | fill-out-pdf-form | pdf | 345 | 0 | 0 | C | 0.0 | todo |
| 84 | check-pdf-a-compliance | pdf | 334 | 0 | 0 | C | 0.0 | todo |
| 85 | create-invoice-spreadsheet | category:calculator | 251 | 0 | 0 | C | 0.0 | todo |
| 86 | batch-extract-audio-from-webm-files | batch | 247 | new | 0 | D | 0.0 | todo |
| 87 | extract-text-from-a-scanned-pdf | pdf | 338 | new | 0 | D | 0.0 | todo |
