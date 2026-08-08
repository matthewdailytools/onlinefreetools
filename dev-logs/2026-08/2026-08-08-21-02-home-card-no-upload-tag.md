Date: 2026-08-08 21:02
Summary: Added a home tool-card “No upload” badge (linked to privacy#local) and catalog localProcessing flag.

[question]
放弃前一条要求，改为：工具卡片增加不上传标签。

[try to solve]
已放弃「标题强制写不上传服务器」方案。改为首页 Featured / 分类工具卡片在标题下显示短标签「不上传」（十语 `home_tag_no_upload`），链接到 `/{lang}/privacy#local`。

Catalog 增加 `localProcessing`：纯本地工具为 true；`website-headers` / `ip-address` / `indexnow` 为 false（不挂标签）。规则写入 `tool-i18n-localization.mdc` 与 `tool-creation.mdc`；隐私页说明已同步。`build:site` 后 zh 首页约 108 标签 / 114 卡片（边缘工具各出现两次均无标签）。

[actions]
- `scripts/site/components/content-home.mjs`、`public/styles/site.css`、`scripts/site/i18n.mjs`
- `src/site/tool-catalog.d/*` + `tools.ts`；rules / copilot / privacy i18n
- `npm run merge:tools && npm run build:site`

---

Date: 2026-08-08 21:06
Follow-up: Local-first why card explains the No-upload badge (sample tag + ten-locale body copy).
