Date: 2026-08-09 00:47
Summary: Explained why BMR i18n rule was violated (ship script English UI fallback + gate blind spot).

[question]
为什么会跳过，这相当于出错了，规则为什么被忽略？

[try to solve]
这是执行错误，不是规则允许跳过。`tool-i18n-localization` 要求逐语独立重写、禁止英模同构/假本地化；交付时用 `ship-one.mjs` 只写了 title/desc/按钮，其余键复制 en，等于用脚本灌英模。`coverage:gate` phase=4 主要验收抽查语 title 与 03 多轮行勾选，未检出 FAQ/How 仍为英文，门禁绿造成「已过关」错觉。已完整重写十语，并收紧 ship-one：缺 `t.ui[lang]` 或 how_body 等于英母版则失败。

[actions]
- 说明根因；先前已修分片与 ship-one 门禁
