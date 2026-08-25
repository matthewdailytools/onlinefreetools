Date: 2026-08-08 17:50
Summary: Word/PDF export now captures the on-page preview so downloaded files match the preview look.

[question]
下载后的展现样式和页面的不同，需要保证一致

[try to solve]
Word / PDF export now captures the on-page preview DOM (off-screen clone of `#guidePreview` + html2canvas), then paginates to A4 into `.docx` images or PDF pages — no longer reflowing from Markdown plain text. Motion samples freeze to a static frame for export. Word header notes that export visuals match the page preview; FAQ a6 and ten-locale `export_visual_note` synced.

[actions]
- `src/pages/brandStyleGuidePage.ts`: `capturePreviewPages` / `loadHtml2Canvas`; Word/PDF embed preview screenshots
- `src/site/i18n/tools/brand-style-guide/*`: `export_visual_note` + FAQ a6; `npm run merge:tools`
