Date: 2026-08-06 20:05
Summary: Rebuilt IP, ROI, and marginal-revenue tool pages to the shared IG pattern with full ten-locale copy.

[question]
In /Users/xuli/vscodeai/onlinefreetools, rebuild these EXISTING tool pages to match the IG pattern used by howToCalculateBmiPage.ts and websiteHeadersPage.ts (shared helpers in src/pages/site/toolContent.ts: renderToolIgSections, renderToolReferencesSection, renderToolExtraSections).

## Tools
1. `ip-address` — src/pages/ipAddressPage.ts + i18n keys tool_ip_address_*
2. `how-to-calculate-roi` — src/pages/howToCalculateRoiPage.ts + tool_roi_*
3. `how-to-calculate-marginal-revenue` — src/pages/marginalRevenuePage.ts + tool_marginal_revenue_*

## Specs
Read work-tasks/{slug}/02-tool-info.md and 03-locale-briefs.md for each.

### IP
- Keep existing fetch UI (/api for IP)
- Add How / Rules / Example / Use cases via renderToolIgSections(prefix tool_ip_address, mode rules)
- References: e.g. MDN IP, Cloudflare/what-is-my-ip style educational links (pick 2 authoritative)
- FAQ: edge how IP obtained; proxy/VPN limits; LAN vs public
- Full comments on functions in page files (user rule)
- en + zh full rewrite first; then ALL other langs (es pt id fr de ar ja ru) independently per briefs — not isomorphic

### ROI (YMYL)
- Keep calculator fields (initial/final/gain)
- Add How + Formula (mode formula) with assumption items (tax/time/fees)
- Clickable Investopedia refs (≥2)
- Soften any investment-advice tone; disclaimer already via ymyl section
- Example fixed numbers
- en+zh then all other langs

### Marginal revenue (YMYL)
- Keep MR calculator interaction
- Visible formula derivation in formula section
- References: textbooks/Investopedia marginal revenue
- Disclaimer
- en+zh then all langs

## Patterns
- Import helpers like BMI page
- References AFTER FAQ/Related (contentHtml + toolSeoHtml + referencesHtml)
- Update scripts/site/i18n.mjs home titles/descs when title changes
- description ≥120 chars each lang
- Escape quotes in TS strings
- Do NOT change tool-catalog.json slugs/related unless broken
- Do NOT touch text-diff or markdown-to-html

After edits: run `npm run lint:seo` and fix failures you introduced.

Return summary of files changed and any leftover gaps.

[try to solve]
已将三个存量工具页对齐 BMI/website-headers 的 IG 结构：页面接入 `renderToolIgSections` / `renderToolReferencesSection` / `renderToolExtraSections`，References 置于 FAQ/Related 之后。

- **IP**：保留 `/api/tools/ip-address` 拉取 UI；How + Rules（边缘可信客户端 IP、VPN/NAT/双栈）；Example 用 203.0.113.10；引用 MDN X-Forwarded-For 与 Cloudflare Learning。
- **ROI（YMYL）**：保留 initial/final/gain；Formula 含税/时间/费用/多期局限假设项；固定例 1000→1300 = 30%；两条 Investopedia 可点引用；语气软化。
- **边际收益（YMYL）**：保留 Q1/TR1/Q2/TR2 计算器并显示 ΔTR/ΔQ 推导；例 10→11 / 1000→1080 → MR 80；Investopedia + OpenStax 引用。

十语文案按 `03-locale-briefs.md` 独立重写（非英模同构）；`scripts/site/i18n.mjs` 首页卡片 title/desc 已同步。`npm run lint:seo` 通过。

**遗留缺口**：`03` 中 ar/ja/ru 仍标「待母语抽查」；未改 `tool-catalog.json`；未触碰 text-diff / markdown-to-html。

[actions]
- src/pages/ipAddressPage.ts
- src/pages/howToCalculateRoiPage.ts
- src/pages/marginalRevenuePage.ts
- src/site/i18n/{en,zh,es,pt,id,fr,de,ar,ja,ru}.ts
- scripts/site/i18n.mjs
- npm run lint:seo
