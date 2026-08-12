Date: 2026-08-12 21:46
Summary: Verified homepage tool count 124 matches catalog and related sources.

[question]
检查工具数量,首页显示124个工具是否正确

[try to solve]
结论：正确。首页「124 个工具」与目录一致。

核对结果：

| 来源 | 数量 |
|------|------|
| `src/site/tool-catalog.json` | 124（slug 无重复） |
| `src/site/tool-catalog.d/` | 124 |
| `src/pages/*Page.ts` | 124 |
| `src/site/i18n/tools/` | 124 |
| 英文首页工具链接 | 124 |

Hero 数字来自 `TOOL_CATALOG.length`（`scripts/site/components/content-home.mjs`），不是写死的。

按分类：计算器 62、开发者 28、图片 19、PDF 11、设计 4，合计 124。

[actions]
- 读取/核对 `src/site/tool-catalog.json`、`tool-catalog.d`、`src/pages`、`i18n/tools`、首页 HTML 与 `content-home.mjs`
