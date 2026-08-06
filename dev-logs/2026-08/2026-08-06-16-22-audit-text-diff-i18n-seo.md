Date: 2026-08-06 16:22
Summary: SEO and natural-language review of text-diff i18n across 10 locales (audit only).

[question]
根据策略方案，检查产出的各种语言的页面，是否符合seo策略。对翻译进行评价，需要符合搜索习惯和用户语言习惯，而不是ai习惯

[try to solve]
对 text-diff 十语文案做策略合规与「是否像真人检索用语」抽查：结构/IG/lint 基本达标；en/zh 尚可；es/de/fr/pt/id/ru/ja/ar 多为英模直译，检索主词与本地习惯词未对齐，存在明显机翻腔，策略要求的「人工审核」未真正完成。详见对话中的分项评价与改写方向。

[actions]
- 只读审阅 src/site/i18n/* 与 SEO 策略文档，未改正文
