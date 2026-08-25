Date: 2026-08-09 00:47
Summary: Explained why BMR i18n rules were violated (ship script English UI fallback + gate blind spot).

[question]
为什么会跳过，这相当于出错了，规则为什么被忽略？

[try to solve]
This was an execution error, not an allowed skip. `tool-i18n-localization` requires independent per-locale rewrites and bans English-shell isomorphism / fake localization. Delivery used `ship-one.mjs` to write only title/desc/buttons and copy remaining keys from en—scripted English shells. `coverage:gate` phase=4 mainly checks sampled titles and 03 multi-round checkboxes, and did not catch FAQ/How still in English, so a green gate looked like a pass. Ten locales were fully rewritten afterward, and ship-one now fails when `t.ui[lang]` is missing or how_body equals the English master.

[actions]
- Documented root cause; shards and ship-one gate already fixed earlier
