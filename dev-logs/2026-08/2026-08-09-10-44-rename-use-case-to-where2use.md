Date: 2026-08-09 10:44
Summary: Renamed nav/hub “use case” labels to where2use (EN) and natural local equivalents in other locales.

[question]
use case 统一修改为where2use，其他语言按照用户习惯修改

[try to solve]
English nav and hub copy unified to where2use; Chinese and other locales use natural “where to use” phrasing (e.g. Spanish Dónde usar, Japanese “where to use”). Leftover “use-case page” wording in leaf meta was replaced. Paths remain `/where-to-use-tools`. Ran `build:site`.

[actions]
- Updated scripts/site/i18n-taxonomy.mjs and src/site/i18n/core/*.ts; npm run build:site
