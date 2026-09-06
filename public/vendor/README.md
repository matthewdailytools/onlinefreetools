# Vendor assets (generated — do not hand-edit)

Same-origin copies used by site chrome, image tools, and tool-page libraries. Pages must reference `/vendor/*` (or `https://onlinefreetools.org/vendor/*` in a downloaded standalone HTML file). Do not load jsDelivr / cdnjs / unpkg for site JS.

| Path | Source script | Used by |
|------|---------------|---------|
| `bootstrap/` | `npm run vendor:site-chrome` | All pages (CSS/JS) |
| `fonts/` | `npm run vendor:site-chrome` | All pages (Plus Jakarta Sans) |
| `jsquash/` | `npm run vendor:image-optimizer` | `/tools/image-optimizer` |
| `wasm-feature-detect/` | `npm run vendor:image-optimizer` | image-optimizer engine |
| `gifenc/` | `npm run vendor:image-optimizer` | `/tools/images-to-gif` |
| `pdf-lib/` `cantoo-pdf-lib/` `pdfjs/` `html2pdf/` `dompurify/` `fflate/` `mammoth/` `diff/` `crypto-js/` `pptxgenjs/` `js-yaml/` `papaparse/` `marked/` `turndown/` `xlsx/` `jszip/` `docx/` `html2canvas/` `exifr/` `ajv/` | `npm run vendor:tool-libs` | Tool pages (PDF, zip, markdown, Excel, …) |

Also runs at the start of `npm run build:site` / `predeploy`.

**Tracked in git** so Cloudflare Git-connected deploys ship these assets without relying on a remote build step. After upgrading the corresponding `package.json` versions, re-run the vendor scripts and commit the refreshed files.

**Exception:** Cloudflare Turnstile (`https://challenges.cloudflare.com/turnstile/v0/api.js`) is a live challenge service and is not copied into `/vendor`.

Do **not** add `public/vendor/*` back to `.gitignore`. Gate: `npm run lint:vendor` (also in `predeploy`).
