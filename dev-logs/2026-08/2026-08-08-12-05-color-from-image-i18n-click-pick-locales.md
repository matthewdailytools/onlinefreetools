Date: 2026-08-08 12:05
Summary: Sync nine locale files for color-from-image click-to-pick keys with en.ts; update work-task interaction spec.

[question]
Update `tool_color_from_image_*` keys in these locale files under /Users/xuli/vscodeai/onlinefreetools/src/site/i18n/ to match the NEW English key set in en.ts (search tool_color_from_image_title).

Languages: zh, es, ar, pt, id, fr, ja, ru, de

NEW keys / changes vs previous (must exist in every file):
- Keep existing keys that remain
- ADD: palette_label, pick_hint, pick_label, pick_xy_tpl, pick_transparent, status_picked, rules_item_5
- UPDATE: description (mention click-to-pick), article, preview_label, how_body, rules_body, rules_item_2/3/4, example, usecase_1/2/3, faq_q3/a3, faq_q4/a4, faq_a5, status_done
- ruleItemCount is now 5 — rules_item_1 through rules_item_5 required
- FAQ still q1–q5 but q3/q4 content changed to explain click region average (~7×7), not "this is not an eyedropper"

English reference (rewrite locally, do not lock parallel FAQ order across langs — slight variation OK):
See en.ts block for tool_color_from_image_*

Critical:
- description ≥120 chars, steps + example, mention click pick
- No doorway/meta SEO talk
- Title can stay result-oriented (palette); may mention click lightly in subtitle if natural
- zh: 预览可点选区域取色；色板标签「色板」；pick_hint 说明约 7×7 像素平均

Also lightly update work-tasks/color-from-image/02-tool-info.md interaction section to mention click region pick (7×7 avg on source pixels) alongside palette.

Run `npm run lint:seo` and fix until green.

Return list of files changed.

[try to solve]
已在 9 个语言文件（zh、es、ar、pt、id、fr、ja、ru、de）中补齐并本地化 `tool_color_from_image_*` 键，与 `en.ts` 对齐：新增 `palette_label`、`pick_hint`、`pick_label`、`pick_xy_tpl`、`pick_transparent`、`status_picked`、`rules_item_5`；更新 description/article/preview/how/rules/example/usecases/FAQ q3–q4 及 faq_a5/status_done，突出预览点击 ~7×7 源像素区域平均取色。中文按要求使用「色板」标签与可点击预览说明。`work-tasks/color-from-image/02-tool-info.md` 交互规格已补充点击取色说明。`npm run lint:seo` 通过。

[actions]
- src/site/i18n/zh.ts, es.ts, ar.ts, pt.ts, id.ts, fr.ts, ja.ts, ru.ts, de.ts
- work-tasks/color-from-image/02-tool-info.md
