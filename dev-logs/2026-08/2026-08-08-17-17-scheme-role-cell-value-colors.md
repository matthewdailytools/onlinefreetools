Date: 2026-08-08 17:17
Summary: Semantic table Role column now tints from each token value.

[question]
表格中，角色的颜色或者背景，按照值进行变化。

[try to solve]
Semantic table “Role” column now tints from each token value: text/link/on-action use the foreground color on a white background; others (including rgba soft values) use the value as background, with black or white text chosen automatically for readability.

[actions]
- src/pages/smartWebsiteColorSchemePage.ts
