Date: 2026-09-02 14:51
Summary: Tool pages no longer share the homepage 1370px content cap; body max-width is 960px and the Tools mega panel is capped at 64rem instead of full navbar width.
Visibility: people

[question]
工具页的height太宽

[try to solve]
## Context

After local wrangler was up, the user reported the tool page “height” as too wide. On this site that matches the stretched **content column** (aligned to `--home-max: 1370px` since 2026-08-08) and the **Tools mega menu** (`left`/`right` 0.5rem, nearly full header).

## Process

1. Compared tool `#content` rules with the earlier 880px `--content-max` and the later fluid `--home-max` pass.
2. Split info pages (keep home-max) from tool pages (`--tool-max: 960px` plus `--page-pad-x`).
3. Limited `body.is-tool-page .tools-mega-panel` to `min(64rem, calc(100% - 1.5rem))` so hover “工具” does not span the whole bar.

## Root cause / analysis

Homepage card grids need a wide max. Tool forms and lead copy do not. Sharing `--home-max` made every slug page a long line on a desktop monitor. The mega panel used the same full-bar geometry.

## Solution

`--tool-max: 960px` on `body.is-tool-page #content` only. Mega panel width cap on tool pages only. `public/styles/site.css` is served live; hard-refresh the tool URL.

## Notes / boundaries

Did not change homepage or info-page width. If the complaint was only the H1/header chrome, say so and we can revert the column cap.

[actions]
- Updated `public/styles/site.css` (`--tool-max`, split `#content` max-width, tool mega panel width).
