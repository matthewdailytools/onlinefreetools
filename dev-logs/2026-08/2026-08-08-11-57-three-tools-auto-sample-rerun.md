Date: 2026-08-08 11:57
Summary: Re-ran color-from-image, image-merge, and image-overlay so sample pipelines auto-execute on page load per the new rule.

[question]
将最近生成的3个工具按照新规则重新跑一次

[try to solve]
Aligned the three newest image tools with `tool-creation.mdc` (“on-page sample must actually produce a result”):

1. `color-from-image` — init calls `loadSample()` → extract → palette visible.
2. `image-merge` — `loadSample()` builds 3 PNGs, `addFiles` returns a Promise, then `merge()`; init auto-runs (preview + download ready).
3. `image-overlay` — `loadSample()` awaits both layers, places logo bottom-right at 75% opacity, then `applyOverlay()`; fixed apply no longer wiping `resultBlob` via `drawPreview()`; init auto-runs.

Updated each `work-tasks/*/02-tool-info.md` with the on-page sample spec. `lint:seo` OK.

[actions]
- Updated `src/pages/colorFromImagePage.ts`
- Updated `src/pages/imageMergePage.ts`
- Updated `src/pages/imageOverlayPage.ts`
- Updated `work-tasks/{color-from-image,image-merge,image-overlay}/02-tool-info.md`
- Ran `npm run lint:seo`
