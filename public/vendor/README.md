# Vendor assets (generated — do not hand-edit)

Same-origin copies used by the site chrome and image tools:

| Path | Source script | Used by |
|------|---------------|---------|
| `bootstrap/` | `npm run vendor:site-chrome` | All pages (CSS/JS) |
| `fonts/` | `npm run vendor:site-chrome` | All pages (Plus Jakarta Sans) |
| `jsquash/` | `npm run vendor:image-optimizer` | `/tools/image-optimizer` |
| `wasm-feature-detect/` | `npm run vendor:image-optimizer` | image-optimizer engine |
| `gifenc/` | `npm run vendor:image-optimizer` | `/tools/images-to-gif` |

Also runs at the start of `npm run build:site` / `predeploy`.

**Tracked in git** so Cloudflare Git-connected deploys ship these assets without relying on a remote build step. After upgrading `bootstrap` / `@fontsource/plus-jakarta-sans` / `@jsquash/*` / `gifenc` / `wasm-feature-detect`, re-run the vendor scripts and commit the refreshed files.
