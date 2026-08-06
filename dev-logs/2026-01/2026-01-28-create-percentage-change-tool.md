Date: 2026-01-28 14:00
Summary: Add "how to calculate percentage increase decrease" tool with i18n and page

[question]
按照默认规则，设计和开发工具how to calculate percentage increase decrease

[try to solve]
Added a localized tool page and i18n strings for "how to calculate percentage increase/decrease" in the site's supported languages. Implemented a new page that accepts an original value and a new value, computes percentage change = ((new - original) / original) * 100, and displays whether it is an increase or decrease. Registered the tool in the tools registry.

[actions]
- Added page: src/pages/howToCalculatePercentageChangePage.ts
- Updated tools registry: src/site/tools.ts
- Added i18n keys in: src/site/i18n/en.ts, zh.ts, es.ts, fr.ts, de.ts, ar.ts, id.ts, ja.ts, pt.ts, ru.ts
