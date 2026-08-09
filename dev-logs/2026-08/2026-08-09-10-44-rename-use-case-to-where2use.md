Date: 2026-08-09 10:44
Summary: Renamed nav/hub “use case” labels to where2use (EN) and natural local equivalents in other locales.

[question]
use case 统一修改为where2use，其他语言按照用户习惯修改

[try to solve]
英文导航与 hub 文案统一为 where2use；中文为「用在哪」，西/葡/法/德/印尼/日/俄/阿等改为「用在哪」类自然说法（如 Dónde usar、どこで使う）。叶子页 meta 中残留的 “use-case page” 已替换。路径仍为 `/where-to-use-tools`。已 `build:site`。

[actions]
- Updated scripts/site/i18n-taxonomy.mjs and src/site/i18n/core/*.ts; npm run build:site
