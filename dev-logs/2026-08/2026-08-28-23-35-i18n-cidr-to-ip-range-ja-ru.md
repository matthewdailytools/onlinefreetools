Date: 2026-08-28 23:35
Summary: Added Japanese and Russian i18n shards for cidr-to-ip-range with search-oriented H1s (CIDR→IP range), not calculator-only titles.

[question]
Write two i18n shard files for tool slug `cidr-to-ip-range`: ja.ts and ru.ts. Independent rewrite; H1 CIDR→IP range; no param-enum subtitle; sample 192.168.1.0/24; privacy device + no upload; keep placeholders.

[try to solve]
Created full-key shards matching en (81 keys):
- ja title: CIDR から IP 範囲 — プレフィックスを利用可能アドレスに展開
- ru title: CIDR в диапазон IP — Разверните префикс в адреса
Secondary intents (CIDR calculator / notation / mask / expand) land in description and FAQ. Privacy uses 端末/устройство plus no server upload. Placeholders `{n}`, `{mask}`, `{limit}` preserved.

[actions]
- Added `src/site/i18n/tools/cidr-to-ip-range/ja.ts`
- Added `src/site/i18n/tools/cidr-to-ip-range/ru.ts`
