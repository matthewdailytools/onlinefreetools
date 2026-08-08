Date: 2026-08-09 00:47
Summary: Fully rewrote BMR/TDEE ten-locale i18n after English UI fallback bug.

[question]
不对，http://localhost:8788/zh/tools/how-to-calculate-bmr-tdee语言没有重写

[try to solve]
确认问题：ship-one 只本地化了 title/按钮，表单与 How/Formula/FAQ/免责仍回落英文。已按 03 brief 完整重写 zh/es/ja/fr/de/pt/id/ru/ar（含控件标签与问答）；`merge:tools` + coverage phase=4 通过。并收紧 `scripts/dev/omni-s12/ship-one.mjs`：非 en 缺 `t.ui[lang]` 或 how_body 仍等于英文母版时直接失败，禁止再英模灌语。

[actions]
- 重写 `src/site/i18n/tools/how-to-calculate-bmr-tdee/{zh,es,ja,fr,de,pt,id,ru,ar}.ts`
- 更新 `03-locale-briefs.md`、`scripts/dev/omni-s12/ship-one.mjs`
- `npm run merge:tools`；`coverage:gate --phase=4`
