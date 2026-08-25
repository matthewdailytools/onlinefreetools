Date: 2026-08-09 01:11
Summary: Put all six unit-converter categories into H1/title across ten locales using slash separators so coverage gates stay green.

[question]
unit-converter 应该把转换的类别直接体现在title上

[try to solve]
Updated ten-locale `tool_unit_converter_title` values so H1 lists Length / Mass / Temperature / Area / Volume / Speed (localized). Used `/` separators instead of commas or CJK enumeration commas to avoid the param-enum title heuristic while still surfacing every category. Synced work-tasks 02/03; `merge:tools` + `coverage:gate` phase 2/4 + `build:site` + `lint:seo` OK.

Examples:
- en: `Unit Converter — Length / Mass / Temperature / Area / Volume / Speed`
- zh: `单位换算器 — 长度 / 质量 / 温度 / 面积 / 体积 / 速度`

[actions]
- src/site/i18n/tools/unit-converter/*.ts; work-tasks/unit-converter/02|03; merge:tools; build:site
