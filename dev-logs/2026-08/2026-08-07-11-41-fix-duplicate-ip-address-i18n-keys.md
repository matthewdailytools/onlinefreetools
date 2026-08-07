Date: 2026-08-07 11:41
Summary: Remove duplicate tool_ip_address keys in en.ts

[question]
@terminals/1.txt:697-728 (wrangler duplicate-object-key warnings for tool_ip_address_description / article)

[try to solve]
`src/site/i18n/en.ts` 里 `tool_ip_address_description` 与 `tool_ip_address_article` 各出现两次（约 L315 完整块与 L479 重复）。已删除后者重复项，保留 UI 键（`ip_label` 等）与 FAQ。内容与首次定义相同，无语义变更。

[actions]
- Updated src/site/i18n/en.ts (removed duplicate description/article)
