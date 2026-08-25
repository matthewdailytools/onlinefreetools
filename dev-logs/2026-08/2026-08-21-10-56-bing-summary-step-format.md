Date: 2026-08-21 10:56
Summary: Whether tool-page step markup must change for Bing AI summaries.

[question]
再次分析，是否页面的步骤元素要修改格式

[try to solve]
No need for a Bing-Summary-specific step DOM. Live How sections are a single `<p>`; Rules/Use cases use `<ul>`; FAQ is h3+p; JSON-LD has no HowTo. Ordered lists help humans and extraction but are not an indexing switch; HowTo schema is not a summary KPI. For action tools that change markup, render `how_item_N` as `<ol>` and keep an overview `<p>`; do not turn formulas/rules into fake steps.

[actions]
- Updated canvas canvases/bing-ai-summary-strategy.canvas.tsx (step-format section)
