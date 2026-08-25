Date: 2026-08-07 14:58
Summary: Supplemented the tool-direction doc with Merge Images competitor feature mapping.

[question]
分析https://mergeimages.co/ 提供的图片功能，对比 @docs/2026-07-28-tool-direction.md 的图片功能，补充进去

[try to solve]
Against [Merge Images](https://mergeimages.co/)’s full tool set, original section A.2 was skewed to single-image ops (compress/format/crop/EXIF/watermark) and lacked N→1 compose plus a full competitor map.

Updates in `docs/2026-07-28-tool-direction.md`:
- **A.2** capability table: multi-image stitch, layer overlay, flip, grayscale, border, images→PDF
- **A.2.1** Merge Images item-by-item matrix (do / don’t / priority)
- **B13** scenario “multi-image compose & platform collage (N→1)” and how it differs from B9 (1→N)
- **B.3 / B.5** candidate slugs: `image-merge`, `images-to-pdf`, `add-watermark`, etc.
- **Appendix** competitor quick table; refreshed shipped image four-pack and next-batch schedule

Core takeaway: Merge Images strength is N→1; this site’s B.9 strength is 1→N platform size packs — opposite intents; keep separate pages.

[actions]
- `docs/2026-07-28-tool-direction.md`
