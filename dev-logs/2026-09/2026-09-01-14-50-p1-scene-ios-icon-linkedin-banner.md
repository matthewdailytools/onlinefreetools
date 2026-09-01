Date: 2026-09-01 14:50
Summary: Started the P1 scene queue in token-efficiency A→D batches; shipped ios-app-icon-size and linkedin-banner-size with ten-locale copy and coverage 0b/2/4.

[question]
并完成创建。每个工具立项和完成创建作为单独一个批次，依次按照token效率优化模式立项P1工具

[try to solve]
P1 attack list is still the ten scene slugs in inventory §0. This session ran them as separate A→D batches (brief 0b/0i → page + en → nine locales → verify:tool), not as one combined implement-all todo.

Batch 1 — `ios-app-icon-size`: H1 **iOS app icon size**. Default opaque 1024×1024 App Store PNG (contain, no pre-rounded corners). Chips 180 / 167 / Play 512; ZIP also packs smaller iOS slots. Related: `iphone-app-store-screenshot`, `apple-touch-icon`. `verify:tool` green including isolation.

Batch 2 — `linkedin-banner-size`: H1 **LinkedIn banner size**. Default cover-fill 1584×396 personal background with a preview-only avatar overlay (not baked into the JPEG). Chips: Facebook cover, X header, YouTube channel art (device-safe dim on the 2560×1440 chip). Related: `open-graph-image-size`, `image-crop`. Coverage, build, HTML smoke, and SEO lint green; isolation failed only because batch 1’s uncommitted shard sat in the same working tree (no other-tool edits).

Remaining P1 (not started this session): `instagram-story-size`, `youtube-thumbnail-size`, `instagram-post-size`, `chatgpt-export-to-markdown`, `svg-optimizer`, `curl-to-fetch`, `prompt-template-builder`, `file-metadata-analyzer`. Next batch should start at `instagram-story-size`.

[actions]
- Added work-tasks, catalog shards, pages, icons, and ten-locale i18n for `ios-app-icon-size` and `linkedin-banner-size`
- README Chinese and English list entries
- Inventory §0: moved those two slugs to shipped; row 82 已上线
- `npm run verify:tool -- --slug=ios-app-icon-size` OK; LinkedIn verify OK except isolation noise from the prior slug
