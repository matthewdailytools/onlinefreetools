Date: 2026-08-08 17:17
Summary: Semantic table Role column now tints from each token value.

[question]
表格中，角色的颜色或者背景，按照值进行变化。

[try to solve]
语义表「角色」列按 token 值着色：text/link/on-action 用前景色+白底；其余（含 rgba soft）用该值作背景，并自动选黑/白字保证可读。

[actions]
- src/pages/smartWebsiteColorSchemePage.ts
