Date: 2026-01-28 12:00
Summary: Add "How to Calculate ROI" tool page with i18n and routing

[question]
按照默认规则，设计和开发工具how to calculate roi (See <attachments> above for file contents. You may not need to search or read the file again.)

[try to solve]
- Added a new localized tool "How to Calculate ROI" with UI, formula, example, and interpretation.
- Updated `src/site/tools.ts` to register the tool in the site index.
- Added i18n strings for the ROI tool in these language files: `src/site/i18n/en.ts`, `zh.ts`, `fr.ts`, `de.ts`, `es.ts`, `pt.ts`, `ru.ts`, `ja.ts`, `id.ts`, `ar.ts`.
- Created page renderer `src/pages/howToCalculateRoiPage.ts` and registered it in `src/index.ts`.

[actions]
- Modified: src/site/tools.ts
- Modified: src/index.ts
- Added: src/pages/howToCalculateRoiPage.ts
- Modified: src/site/i18n/en.ts
- Modified: src/site/i18n/zh.ts
- Modified: src/site/i18n/fr.ts
- Modified: src/site/i18n/de.ts
- Modified: src/site/i18n/es.ts
- Modified: src/site/i18n/pt.ts
- Modified: src/site/i18n/ru.ts
- Modified: src/site/i18n/ja.ts
- Modified: src/site/i18n/id.ts
- Modified: src/site/i18n/ar.ts
