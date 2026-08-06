Date: 2026-08-06 16:30
Summary: Rewrote text-diff 10-lang copy for search intent; lint:seo OK; re-audited SEO.

[question]
按上表直接改一版「检索向」十语文案并再跑 lint:seo，然后再次核查seo

[try to solve]
已重写 text-diff 十语 title/description/UI/FAQ/How/Rules/Use cases 与首页卡片：对齐各地检索说法（如 zh「在线文本对比」、es「Comparar textos online」、de「Texte online vergleichen」、ja「テキスト比較」），去掉粒度/hunk/altas y bajas 等机翻腔；`npm run lint:seo` 通过。复核查：结构与 IG 仍达标；检索向与可读性明显改善；仍建议母语者抽查 ar/ja/ru 细部。

[actions]
- src/site/i18n/{en,zh,es,ar,pt,id,fr,ja,ru,de}.ts
- scripts/site/i18n.mjs
- npm run lint:seo
