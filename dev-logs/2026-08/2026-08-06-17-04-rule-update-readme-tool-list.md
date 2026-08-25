Date: 2026-08-06 17:04
Summary: Required README Tools List updates when adding tools; synced the list with the catalog.

[question]
规则增加：新增工具后，更新readme文档中的工具清单

[try to solve]
Hardened `tool-creation.mdc` (engineering checklist, home/nav section, and ship Checklist): new tools must update the root `README.md` Tools List (one Chinese + one English line each, matching `tool-catalog.json`). Synced `copilot-instructions` and `SEO_PUBLISH_CHECKLIST`.

Filled README gaps from the catalog (text-diff, ROI, percentage change, gradient, etc.) and normalized English links to unprefixed `/tools/...`.

[actions]
- .cursor/rules/tool-creation.mdc
- .github/copilot-instructions.md
- docs/SEO_PUBLISH_CHECKLIST.md
- README.md
