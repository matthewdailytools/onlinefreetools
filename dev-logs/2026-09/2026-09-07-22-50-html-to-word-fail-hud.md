Date: 2026-09-07 22:50
Summary: HTML-to-Word failures now keep a red progress HUD (same size as the green success card) instead of collapsing to a small alert.
Visibility: people

[question]
失败的提示是否明显？

## Tool links (English)
- https://onlinefreetools.org/tools/convert-html-web-pages-to-word-document
Chinese: https://onlinefreetools.org/zh/tools/convert-html-web-pages-to-word-document

[try to solve]
## Context
Success used a large green HUD and a pulsing Download control. Failure closed that HUD (`closeHud`) and left only a Bootstrap `alert-danger py-2 small` line. Next to the success treatment, the error was easy to miss.

## Process
Convert errors now call `failHud` instead of closing the card: red border, X mark, title “转换失败”, the same human error string as the alert, plus a hint to fix the HTML/URL and press Convert again. The status line uses `.is-fail` (bold red). The top alert is larger (`chw-error`, 2px border) and scrolls into view. Empty-input validation still has no HUD (Convert never started) but uses the bigger alert. Clear still dismisses the card.

## Root cause / analysis
The fail path reused the old “hide progress” habit from before the HUD existed. Once success kept the card, hiding it on error made failure the quieter state.

## Solution
Failed Convert keeps the card in a red fail state. Empty paste/URL shows a larger red alert only.

## Notes / boundaries
Per-image skips inside a successful Convert are still silent (by design: skip, don’t fail the whole file).

[actions]
- `convertHtmlWebPagesToWordDocumentPage.ts`: `failHud`, `.chw-hud.is-fail`, larger `#chwError`
- Ten-locale `hud_fail_title`, `hud_fail_hint`
- `PAGES_CACHE_VERSION` 4.63
