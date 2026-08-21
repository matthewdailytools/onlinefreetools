Date: 2026-08-21 10:56
Summary: Whether tool-page step markup must change for Bing AI summaries.

[question]
再次分析，是否页面的步骤元素要修改格式

[try to solve]
不必为进 Bing Summary 改一套专用步骤 DOM。现网 How 是单段 p，Rules/Use cases 是 ul，FAQ 是 h3+p，JSON-LD 无 HowTo。ol 有利于人和抽取，但不是收录开关；HowTo schema 不为摘要 KPI。操作类工具若改，用 how_item_N 渲染 ol，保留总答 p；公式/规则不要改成假步骤。

[actions]
- 更新画布 canvases/bing-ai-summary-strategy.canvas.tsx（步骤格式专节）
