Date: 2026-09-01 16:45
Summary: Shipped Instagram story size (1080×1920 with UI overlay chips) and YouTube thumbnail size (1280×720, not OG) as sequential P1 batches.

[question]
继续做下一批

[try to solve]
Finished the in-progress P1 slug `instagram-story-size` (fr/ru/de + coverage 0b/2/4 + build:site), then shipped the next P1 slug `youtube-thumbnail-size` the same A→D way.

Instagram story size
- H1 is the search phrase Instagram story size. Default canvas is cover-fill 1080×1920 (9:16) JPEG with a preview-only top/bottom UI overlay that is not written into the download.
- Reels / TikTok / Shorts stay chips on the same 9:16 pixels. Square posts and 16:9 video thumbnails are FAQ boundaries, not extra URLs.
- Ten locales rewritten from locale briefs (zh Instagram 快拍尺寸, es tamaño story Instagram, ja Instagramストーリーサイズ, etc.). Privacy says stay on device and not uploaded.
- Related: linkedin-banner-size, open-graph-image-size.

YouTube thumbnail size
- H1 is YouTube thumbnail size. Default canvas is cover-fill 1280×720 (16:9). 640×360 is the documented-minimum chip only.
- Open Graph 1200×630 share cards and 9:16 Shorts covers stay off this H1 (related pages: open-graph-image-size, instagram-story-size). Official ref: YouTube custom thumbnails help.
- Ten locales rewritten independently (zh YouTube 缩略图尺寸, es tamaño miniatura YouTube, ja YouTubeサムネイルサイズ, etc.).

Gates
- coverage:gate 0b / 2 / 4 green for both slugs.
- lint:tool-page (source + --require-html), lint:seo, lint:vendor, and full build:site green. Home cards list both tools; prerendered H1s match the English search phrases and loadSample is present.
- lint:tool-isolation fails while sibling uncommitted P1 shards (ios-app-icon-size, linkedin-banner-size, plus this pair) sit in the same working tree. That is expected; do not revert those files to greening isolation.

Remaining P1 (inventory §0): instagram-post-size, chatgpt-export-to-markdown, svg-optimizer, curl-to-fetch, prompt-template-builder, file-metadata-analyzer.

[actions]
- Completed work-tasks/instagram-story-size (i18n-done / implemented) and added fr.ts, ru.ts, de.ts
- Added work-tasks/youtube-thumbnail-size, catalog shard, youtubeThumbnailSizePage.ts, ten locale shards, icon
- README 中英 entries; inventory §0 moved both slugs to 已上线
- npm run build:site --full; coverage and lint:seo green
