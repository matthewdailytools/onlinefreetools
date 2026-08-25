Date: 2026-08-07 17:16
Summary: Updated site color tokens to an iLoveIMG-inspired cyan-on-lavender palette while keeping a single accent.

[question]
学习修改配色

[try to solve]
Adopted a restrained iLoveIMG-inspired palette into site tokens: page background `#f5f5fa`, body text `#1d1d1b`, primary `#1c83a8` / bright cyan `#3cb6e2`. Introduced `--accent-rgb` to unify buttons, focus, and borders; tool pages use `--tool-page-bg`; hero glow aligns to cyan-green; icons and brand/favicon SVGs changed from old blue `#0a6ebd` to `#1c83a8`. No multicolor icon wall or purple gradient.

[actions]
- Updated public/styles/site.css
- Batch-updated `#0a6ebd` → `#1c83a8` in public/**/*.svg
