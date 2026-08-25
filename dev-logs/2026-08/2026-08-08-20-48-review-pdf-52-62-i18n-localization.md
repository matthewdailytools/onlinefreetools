Date: 2026-08-08 20:48
Summary: Re-reviewed ten-locale copy for PDF tools #52–62; fixed vague “local” titles and library jargon in user-facing strings.

[question]
重新review本地化的个语言描述实现

[try to solve]
Re-reviewed inventory #52–62 ten-locale copy against `tool-i18n-localization.mdc`.

**Findings (before fixes)**
1. Title head terms and outcome-oriented wording were generally solid; locales were not English shells.
2. Most home `_desc` strings already said device + no server upload.
3. Issues: `pdf-watermark` / `pdf-to-markdown` multi-locale titles used vague Locally / en local / lokal (and equivalent soft “on-device” wording); user-visible How/FAQ/Rules/article text named `pdf-lib` / `fflate` / `copyPages` / `PDF.js` heavily; some How still said “runs locally” without clarifying no server upload.

**Fixed**
- Watermark / markdown titles per locale shifted to browser/device wording.
- Removed implementation library names from user-facing copy across eleven tools × ten locales (kept key names like `err_fflate`); How/Rules now stress device/tab + no server upload.
- Fixed broken Chinese (duplicated “in the browser” phrasing, etc.); `merge:tools` / `lint:seo` / spot `coverage:gate` passed.

[actions]
- Updated `src/site/i18n/tools/{11 slugs}/*.ts`; `npm run merge:tools`
- Updated some `work-tasks/*/03-locale-briefs.md` 3b rows
