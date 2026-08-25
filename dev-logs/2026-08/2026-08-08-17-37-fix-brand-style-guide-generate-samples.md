Date: 2026-08-08 17:37
Summary: Fixed Generate JS syntax error and added visual Do/Don't samples per module.

[question]
1、要有各个模块的样例展示。2、点击生成没有任何反应

[try to solve]
Root cause: inline script used semicolons between object properties in `motion: { duration: '…'; reduce: … }`, so the whole JS block failed to parse — Generate and on-load Sample both did nothing.

Fixed to commas and removed easy-to-trip Unicode dashes; `{brand}` now uses `split/join`. Each enabled module got left/right visual Do/Don’t samples (logo clearspace, color share, type scale, spacing/radius, image/icon, motion, tone, touchpoints, contrast). On-load Sample defaults M0–M9 on so one pass shows everything. Hard-refresh `/tools/brand-style-guide` to verify.

[actions]
- Fixed `src/pages/brandStyleGuidePage.ts` (syntax + visual samples + sample modules on)
