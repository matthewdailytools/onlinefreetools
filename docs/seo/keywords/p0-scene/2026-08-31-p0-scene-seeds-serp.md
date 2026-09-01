# SERP batch 2026-08-31-p0-scene-seeds-serp

- locale / gl: Bing ``en-US``
- seed queries: `create zip file`, `amazon main image size`, `iphone app store screenshot size`, `apple touch icon size`, `open graph image size`
- method note: CloakBrowser 0.1.2 Bing scrape; organic title/url/snippet only; no full HTML committed
- captured_at: 2026-08-31 18:22
- storage: 本文件为脱敏摘要；完整结构化 JSON 在本地 ``.cache/serp/bing/``（不入库）
- **human review**: 脚本 `long_gap` 草稿作废（CN Bing 劫持）。选词见同夹 `2026-08-31-p0-scene-longtail-selection.md`

## Candidates (from Bing SERP)

| candidate | top domains | SERP types | competition_tier (draft) | gap (draft) |
|---|---|---|---|---|
| create zip file | createmod.com, modrinth.com, m365.cloud.microsoft, create.net, createmod.net, merriam-webster.com, app.create.net, githu | brand=5, forum=1, other=4 | long_gap | 前排偏论坛/薄页/图表（forum=1, chart=0, other≈9），缺可交互工具 → 优先评估 build/absorb |
| amazon main image size | amazon.com, primevideo.com, pharmacy.amazon.com, hiring.amazon.com, amc.amazon.com, amazon.jobs, amzn.com, google.com | brand=4, other=4, tool=1 | mid_covered | 混合 SERP（{'brand': 4, 'other': 4, 'tool': 1}）；需人工点开前 3 名确认深度 |
| iphone app store screenshot size | apple.com, apple.com.cn, macrumors.com, walmart.com, britannica.com, bestbuy.com, support.apple.com, wired.com | other=9, wiki=1 | long_gap | 前排偏论坛/薄页/图表（forum=0, chart=0, other≈9），缺可交互工具 → 优先评估 build/absorb |
| apple touch icon size | apple.com, account.apple.com, support.apple.com, music.apple.com, macrumors.com, apps.apple.com | brand=4, other=4, tool=1 | mid_covered | 混合 SERP（{'brand': 4, 'tool': 1, 'other': 4}）；需人工点开前 3 名确认深度 |
| open graph image size | imagedimensions.com, og-image.org, ogpreview.app, env.dev, dev.to, imagemint.net, simplified.com, opengraph.dev | brand=1, chart=1, forum=1, other=6, tool=1 | long_gap | 仅零星工具信号 + UGC/表；核对是否极薄页后再标 long_gap |

## Organic top results (title + domain only)

### `create zip file`

1. **Minecraft Schematics - CreateMod.com** — `createmod.com` (brand)
2. **Create - Minecraft Mod - Modrinth** — `modrinth.com` (other)
3. **Create documents, presentations and designs with Copilot / Microsoft …** — `m365.cloud.microsoft` (other)
4. **Create A Website / UK Website Builder / Create.net** — `create.net` (brand)
5. **Create** — `createmod.net` (brand)
6. **CREATE Definition & Meaning - Merriam-Webster** — `merriam-webster.com` (other)
7. **Create** — `app.create.net` (other)
8. **GitHub - Creators-of-Create/Create: [NeoForge Mod] Building Tools …** — `github.com` (forum)
9. **Your Home for How-To - Create TV** — `createtv.com` (brand)
10. **Create Wiki** — `wiki.createmod.net` (brand)

### `amazon main image size`

1. **Amazon.com. Spend less. Smile more.** — `amazon.com` (brand)
2. **Amazon.com** — `amazon.com` (other)
3. **Amazon.com: Prime Video: Prime Video** — `primevideo.com` (other)
4. **Amazon Pharmacy / Online Prescription** — `pharmacy.amazon.com` (tool)
5. **Amazon Jobs: Competitive Pay, Paid Time Off & Benefits** — `hiring.amazon.com` (brand)
6. **Amazon Sign-In** — `amc.amazon.com` (brand)
7. **Amazon Careers: Impact the Future, Today** — `amazon.jobs` (brand)
8. **Amazon.com Best Sellers: The most popular items on Amazon** — `amzn.com` (other)
9. **Amazon.com Inc (AMZN) Stock Price & News - Google Finance** — `google.com` (other)

### `iphone app store screenshot size`

1. **iPhone - Apple** — `apple.com` (other)
2. **Buy iPhone - Apple** — `apple.com` (other)
3. **iPhone - Apple (中国大陆)** — `apple.com.cn` (other)
4. **iPhone 18: Rumors and Release Date** — `macrumors.com` (other)
5. **Apple iPhones - Walmart.com** — `walmart.com` (other)
6. **IPhone / Models, iPhone 17, iPhone Air, Definition, History, & Facts ...** — `britannica.com` (wiki)
7. **iPhone: New Apple iPhones & Accessories - Best Buy** — `bestbuy.com` (other)
8. **iPhone - Official Apple Support** — `support.apple.com` (other)
9. **What’s the Best iPhone to Buy or Avoid Right Now? (2026) / WIRED** — `wired.com` (other)
10. **Apple iPhone 17 - Full phone specifications - GSMArena.com** — `gsmarena.com` (other)

### `apple touch icon size`

1. **Apple** — `apple.com` (brand)
2. **Apple Store Online** — `apple.com` (tool)
3. **Manage your Apple Account** — `account.apple.com` (brand)
4. **Official Apple Support** — `support.apple.com` (brand)
5. **Sign in to your Apple Account on the web or in your device settings** — `support.apple.com` (other)
6. **AppleI ID** — `account.apple.com` (other)
7. **Apple Music Web Player** — `music.apple.com` (other)
8. **MacRumors: Apple News and Rumors** — `macrumors.com` (brand)
9. **‎Search - App Store** — `apps.apple.com` (other)

### `open graph image size`

1. **Open Graph Image Size: The 2026 Reference** — `imagedimensions.com` (other)
2. **Open Graph Image Guide: Sizes, Tags, Debugging / og-image.org** — `og-image.org` (other)
3. **Open Graph Image Sizes strictly and Guidelines / OG Preview** — `ogpreview.app` (other)
4. **OpenGraph Image Sizes 2026: Per-Platform Cheat Sheet** — `env.dev` (chart)
5. **Open Graph Image Sizes and Dimensions: The Complete 2026 Guide** — `dev.to` (forum)
6. **Open Graph Images: Sizes, Formats, and Why Yours Is Not Showing** — `imagemint.net` (other)
7. **The Ultimate Guide to Open Graph Images] / Simplified** — `simplified.com` (other)
8. **OpenGraph - Preview Images and Generate Open Graph Meta Tags** — `opengraph.dev` (brand)
9. **Open Graph Image Size Guide - Open Graph Generator Blog** — `opengraphgenerator.com` (tool)
10. **Open Graph Image Size Guide - Dimensions for Every Platform** — `ogimagen.com` (other)

## Next steps

- 人工 / Agent 复核 ``competition_tier`` 后，抽约 10 条写入 ``keyword-daily-pool.tsv``
- 禁止把本摘要中的竞品标题套路成空壳工具页
- 开 ``work-tasks/`` 须另决议，本脚本不创建工具
