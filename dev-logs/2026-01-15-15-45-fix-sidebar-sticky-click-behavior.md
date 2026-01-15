Date: 2026-01-15 15:45
Summary: Fix sidebar behavior and layout (sticky header overlap, content margin, click handling)

[question]
重新修正侧边sidebar，目前样式过于简陋，被顶部菜单挡住内容。

工具页面，sidebar显示的时候，内容页的左边边距过大

点击sidebar中的链接时候，sidebar自动往上移动，sidebar应该保持所在位置

[try to solve]
Performed a series of focused style and behavior fixes to the site's sidebar to prevent it from being hidden by the header, avoid excessive content shifting, and preserve sidebar scroll position when clicking links.

Key changes made:
- Made desktop sidebar use `position: sticky` with `top: 56px` and `height: calc(100vh - 56px)` so it sits under the fixed header and scrolls independently.
- Kept mobile behavior as a fixed sliding drawer under the header (`position: fixed`) and adjusted `z-index` so the header remains on top.
- Removed an incorrect desktop `margin-left` rule that caused double-shifting of the content area.
- Implemented improved click handling for sidebar links:
  - Smooth-scroll in-page anchors while preventing default jump behavior so the sidebar does not jump.
  - Preserve the sidebar's `scrollTop` across the click (restore after a short delay).
  - Retain mobile auto-close behavior when appropriate.
- Rebuilt the static site to apply changes.

[actions]
- Modified `src/pages/site/layout.ts`
- Modified `scripts/site/layout.mjs`
- Ran `npm run build:site` to regenerate `public/_pages` with the updated CSS/JS
- Created local commits describing the sidebar fixes

If you want, I can now:
- Capture screenshots of affected pages at key viewport widths and save them to `dev-logs/` for review, or
- Push the commits and open a PR (please provide the remote/branch preference).