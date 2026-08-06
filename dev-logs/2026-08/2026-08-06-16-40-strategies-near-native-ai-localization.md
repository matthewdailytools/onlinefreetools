Date: 2026-08-06 16:40
Summary: Explained strategies for near-native AI localization (process, not one-shot MT).

[question]
有什么策略能够让AI翻译类似母语翻译的效果

[try to solve]
近母语效果靠流程而非单次机翻：① 禁止英→各语直译，按目标语检索意图重写；② 给模型母语 brief（会搜什么、忌用词、语气、本地例子）；③ 分角色两轮（起草→审校挑译腔/错义）；④ 术语表与 UI 短词表；⑤ 对照 SERP 本地竞品 title；⑥ 抽样人工终审 ar/ja/ru 等。与现有 tool-i18n-localization.mdc 的 ≥3 轮核查一致。

[actions]
- 无代码改动
