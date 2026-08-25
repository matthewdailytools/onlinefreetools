Date: 2026-08-07 11:41
Summary: Removed duplicate tool_ip_address keys in en.ts that triggered Wrangler warnings.

[question]
@terminals/1.txt:697-728 (wrangler duplicate-object-key warnings for tool_ip_address_description / article)

[try to solve]
In `src/site/i18n/en.ts`, `tool_ip_address_description` and `tool_ip_address_article` each appeared twice (full block ~L315 and a duplicate ~L479). Deleted the later duplicates; kept UI keys (`ip_label`, etc.) and FAQ. Content matched the first definition, so no semantic change.

[actions]
- Updated src/site/i18n/en.ts (removed duplicate description/article)
